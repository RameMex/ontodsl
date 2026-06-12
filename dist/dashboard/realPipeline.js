/**
 * Real ontodls migration pipeline for the dashboard.
 *
 * Replaces the simulated `runStepMigrationWorkflow` theater that used
 * to live inline in server.ts. The flow is now:
 *
 *   1. Prompt the AI (Gemini) with few-shot examples from the
 *      canonical `.onto` corpus, asking for a `.onto` file that
 *      models the target component.
 *   2. Parse + validate the returned `.onto` using ontodls itself
 *      (`parse()` runs the lexer, grammar, builder, and the full
 *      semantic suite).
 *   3. If validation errors exist, feed them back to the AI and
 *      retry up to `maxIterations` times. This is the "agentic
 *      verify loop" — the AI sees `[S11]`, `[S27]`, etc. diagnostics
 *      and rewrites until clean.
 *   4. On success, run `renderRust(ast)` to emit a real `Cargo.toml`
 *      + `src/lib.rs`. Write to the workspace.
 *   5. Run `cargo check --lib` on the generated crate. Surface the
 *      result. The contract IS verified by construction (Z3 + the
 *      validator); `cargo check` confirms the codegen is type-correct.
 *
 * What's intentionally NOT here:
 *   • Fetching C++ source from GitHub at runtime — the AI gets the
 *     step name plus the few-shot corpus and is expected to either
 *     have prior knowledge or accept whatever description the user
 *     pasted into the prompt. Adding a URL fetch is a separate
 *     concern (CORS, auth, caching, rate limits).
 *   • Hardcoded bug catalogs. Diagnostics are now whatever the
 *     real ontodls validator produces.
 *   • Token telemetry beyond what the SDK exposes. We forward usage
 *     metadata if Gemini returns it; otherwise we report unknown.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { execSync, spawnSync } from "node:child_process";
import { GoogleGenAI } from "@google/genai";
import { parse } from "../parser/index.js";
import { renderRust } from "../codegen-rust/index.js";
const DEFAULT_MAX_ITER = 5;
/**
 * Phase 1 of the pipeline: prompt the AI for a `.onto`, validate
 * with ontodls, retry on errors. Returns the validated AST without
 * touching disk. Safe to invoke from the dashboard, then pause for
 * human approval before calling `runCodegen` below.
 */
export async function runOntoIterationLoop(opts) {
    const maxIter = opts.maxIterations ?? DEFAULT_MAX_ITER;
    const apiKey = opts.apiKey || process.env["GEMINI_API_KEY"] || "";
    if (!apiKey) {
        opts.onLog("[pipeline] No Gemini API key. Cannot run real pipeline.");
        return {
            ok: false,
            ontoText: "",
            diagnostics: [],
            ast: null,
            iterations: 0,
            tokensIn: 0,
            tokensOut: 0,
        };
    }
    const ai = new GoogleGenAI({ apiKey });
    opts.onLog(`[pipeline] Initialised Gemini (${opts.modelName}).`);
    const fewShot = loadFewShotCorpus(opts.examplesDir);
    opts.onLog(`[pipeline] Few-shot corpus: ${fewShot.length} example(s) (` +
        fewShot.map((f) => f.name).join(", ") +
        `).`);
    let tokensIn = 0;
    let tokensOut = 0;
    let currentOnto = "";
    let lastDiagnostics = [];
    for (let iter = 1; iter <= maxIter; iter += 1) {
        opts.onLog(`[pipeline] Iteration ${iter}/${maxIter} — asking model for .onto…`);
        const prompt = buildPrompt({
            stepName: opts.stepName,
            stepDescription: opts.stepDescription,
            fewShot,
            previousAttempt: currentOnto || null,
            previousErrors: lastDiagnostics,
        });
        let responseText = "";
        try {
            const response = await ai.models.generateContent({
                model: opts.modelName,
                contents: prompt,
            });
            responseText = response.text ?? "";
            const usage = response.usageMetadata;
            if (usage) {
                tokensIn += usage.promptTokenCount ?? 0;
                tokensOut += usage.candidatesTokenCount ?? 0;
            }
        }
        catch (err) {
            opts.onLog(`[pipeline] Gemini error: ${err?.message ?? err}`);
            return {
                ok: false,
                ontoText: currentOnto,
                diagnostics: lastDiagnostics,
                ast: null,
                iterations: iter,
                tokensIn,
                tokensOut,
            };
        }
        currentOnto = extractOntoFromResponse(responseText);
        if (currentOnto.trim().length === 0) {
            opts.onLog("[pipeline] Model returned an empty .onto; retrying.");
            lastDiagnostics = [];
            continue;
        }
        const { ast: parsedAst, errors } = parse(currentOnto);
        lastDiagnostics = errors;
        if (errors.length === 0 && parsedAst !== null) {
            opts.onLog(`[pipeline] ✓ .onto validated cleanly on iteration ${iter}.`);
            return {
                ok: true,
                ontoText: currentOnto,
                diagnostics: [],
                ast: parsedAst,
                iterations: iter,
                tokensIn,
                tokensOut,
            };
        }
        opts.onLog(`[pipeline] ✗ ${errors.length} diagnostic(s) on iteration ${iter}:`);
        for (const e of errors.slice(0, 5)) {
            const where = e.line !== undefined ? ` (line ${e.line})` : "";
            opts.onLog(`           ${e.code ?? e.stage}${where}: ${e.message}`);
        }
        if (errors.length > 5) {
            opts.onLog(`           …and ${errors.length - 5} more`);
        }
    }
    opts.onLog(`[pipeline] Exhausted ${maxIter} iterations without a clean .onto.`);
    return {
        ok: false,
        ontoText: currentOnto,
        diagnostics: lastDiagnostics,
        ast: null,
        iterations: maxIter,
        tokensIn,
        tokensOut,
    };
}
/**
 * Phase 2 of the pipeline: render Rust from a validated AST, write
 * to the workspace, optionally run `cargo check`. Returns the
 * artefacts and diagnostics.
 */
export function runCodegen(ast, ontoText, opts) {
    const crateName = opts.outputFileName
        .replace(/[^A-Za-z0-9_]/g, "_")
        .toLowerCase();
    const { cargoToml, libRs } = renderRust(ast, { crateName });
    opts.onLog(`[pipeline] renderRust → Cargo.toml (${cargoToml.length} bytes) + lib.rs (${libRs.length} bytes).`);
    if (!existsSync(opts.workspaceDir)) {
        mkdirSync(opts.workspaceDir, { recursive: true });
    }
    const flatRsPath = join(opts.workspaceDir, `${opts.outputFileName}.rs`);
    writeFileSync(flatRsPath, libRs, "utf8");
    const ontoPath = join(opts.workspaceDir, `${opts.outputFileName}.onto`);
    writeFileSync(ontoPath, ontoText, "utf8");
    opts.onLog(`[pipeline] Wrote ${flatRsPath}`);
    opts.onLog(`[pipeline] Wrote ${ontoPath}`);
    let cargoCheck;
    const wantCargo = opts.runCargoCheck ?? cargoAvailable();
    if (wantCargo) {
        cargoCheck = runCargoCheckInTempCrate(crateName, cargoToml, libRs, opts);
    }
    return {
        rust: { cargoToml, libRs },
        cargoCheck: cargoCheck ?? undefined,
        libRsPath: flatRsPath,
        ontoPath,
    };
}
export async function runRealPipeline(opts) {
    const validation = await runOntoIterationLoop(opts);
    if (!validation.ok || validation.ast === null) {
        return {
            ...validation,
            cargoCheck: undefined,
        };
    }
    if (opts.targetLang !== "rust") {
        opts.onLog(`[pipeline] target '${opts.targetLang}' not yet wired; only Rust is real.`);
        return { ...validation, cargoCheck: undefined };
    }
    const codegen = runCodegen(validation.ast, validation.ontoText, opts);
    return {
        ...validation,
        rust: codegen.rust,
        cargoCheck: codegen.cargoCheck,
    };
}
function runCargoCheckInTempCrate(crateName, cargoToml, libRs, opts) {
    const tmpRoot = process.env["TMPDIR"] || process.env["TEMP"] || "/tmp";
    const dir = join(tmpRoot, `ontodls_pipeline_${crateName}_${Date.now()}`);
    try {
        mkdirSync(join(dir, "src"), { recursive: true });
        writeFileSync(join(dir, "Cargo.toml"), cargoToml, "utf8");
        writeFileSync(join(dir, "src", "lib.rs"), libRs, "utf8");
        opts.onLog(`[pipeline] cargo check --lib in ${dir}`);
        const out = execSync("cargo check --lib --message-format=short", {
            cwd: dir,
            stdio: ["ignore", "pipe", "pipe"],
            encoding: "utf8",
        });
        opts.onLog(`[pipeline] ✓ cargo check passed.`);
        return { ok: true, output: out };
    }
    catch (err) {
        const stderr = err?.stderr ?? "";
        const stdout = err?.stdout ?? "";
        opts.onLog(`[pipeline] ✗ cargo check FAILED:`);
        for (const line of (stderr + stdout).split("\n").slice(0, 12)) {
            if (line.trim())
                opts.onLog(`           ${line}`);
        }
        return { ok: false, output: stderr + stdout };
    }
}
function cargoAvailable() {
    const r = spawnSync("cargo", ["--version"], { stdio: "ignore" });
    return r.status === 0;
}
function buildPrompt(args) {
    const fewShotBlock = args.fewShot
        .map((f) => `=== EXAMPLE: ${f.name} ===\n${f.content}\n=== END EXAMPLE: ${f.name} ===`)
        .join("\n\n");
    const retryBlock = args.previousAttempt !== null
        ? [
            "",
            "Your PREVIOUS attempt failed validation. Diagnostics:",
            ...args.previousErrors
                .slice(0, 10)
                .map((e) => `  - ${e.code ?? e.stage}: ${e.message}`),
            "",
            "Previous .onto (for reference; rewrite, don't quote):",
            args.previousAttempt,
        ].join("\n")
        : "";
    return [
        "You write `.onto` files for OntoDSL (UFO-A/B/C ontology DSL with OCL DbC).",
        "Strict syntax — do NOT invent constructs from other OCL dialects.",
        "",
        "STRUCTURE (top of every file, required):",
        `  schema "onto/0.1";`,
        "  namespace some_name;",
        "",
        "ALLOWED STEREOTYPES: kind, subkind, role, relator, category, mixin,",
        "  roleMixin, mode, quality, collective, quantity, happening, agent,",
        "  commitment, useCase.",
        "",
        "PROPERTY SYNTAX:",
        "  property name: T;",
        "  property name: T internal default <literal>;",
        "  property name: Option<T>;",
        "  property name: Set<T>;",
        "  property name: Array<T, N>;                  // fixed-size vector",
        "  property name: Array<Array<T, N>, M>;        // fixed-size matrix",
        "",
        "ALLOWED PRIMITIVE TYPES: Real, Integer, Boolean, String. NOTHING ELSE",
        "(no Blob, no Vec, no enum / no `BusType.Idle`-style qualified names).",
        "Model enum-like state as Integer + invariants, or as a separate kind.",
        "",
        "IMPORTANT FOR NUMERIC STATE: prefer Array<Real, N> over N",
        "individual scalar properties. A 16-element EKF state vector is",
        "`property state: Array<Real, 16>;`, NOT 16 separate properties.",
        "A 6×6 covariance matrix is `property cov: Array<Array<Real, 6>, 6>;`.",
        "Array<T, N> lowers to Rust `[T; N]` (stack-allocated, zero-overhead).",
        "OCL collection ops work the same as Set: `arr->forAll(x | ...)`,",
        "`arr->exists(x | ...)`, `arr->size()` (returns N).",
        "",
        "INVARIANTS (anonymous, semicolon-separated):",
        "  invariants {",
        "    self.x >= 0.0;",
        "    self.batteries->forAll(b | b.charge > 0.0);",
        "  }",
        "NEVER use `inv Name:` style — invariants are bare expressions.",
        "",
        "IMPORTANT: invariants are AUTO-ENFORCED at the end of every",
        "event wrapper (Eiffel-style). DO NOT duplicate invariant",
        "expressions inside `post:` clauses — that's pure noise. Only",
        "write `post:` for conditions that depend on the event's",
        "specific parameters or @pre snapshots (e.g. `self.x =",
        "value` or `self.count = self.count@pre + 1`).",
        "",
        "EVENTS:",
        "  event name(p1: T, p2: T): ReturnType? {",
        "    pre:  <ocl-expr>;",
        "    post: <ocl-expr>;",
        "    modifies: self.x, self.y;",
        "    effects: { Label1, Label2 };  // optional, free-form labels",
        "    reads:    { p1, p2 };         // optional",
        "    writes:   { p3 };             // optional",
        "  }",
        "Pre/post are SEMICOLON-TERMINATED bare OCL expressions; no names like",
        "`pre Foo:`. The return type `: T` is optional; when present, `result`",
        "binds in post-conditions.",
        "",
        "OCL OPERATORS:",
        "  Comparison: = <> < <= > >=  (NOT == or !=)",
        "  Arithmetic: + - * /",
        "  Boolean:    and or not implies  (NOT && || !)",
        "    `P implies Q` ≡ `(not P) or Q`. Use this for guarded invariants",
        "    like `self.healthy implies self.pressure > 0.0`.",
        "  Conditional: if cond then a else b endif",
        "  Pre-state:  self.x@pre  (NOT @pre.x)",
        "  Numeric:    x.isFinite(), x.isNaN()",
        "  Collection: ->size() ->isEmpty() ->notEmpty() ->includes(e)",
        "              ->forAll(x | body) ->exists(x | body)",
        "              ->select(x | body) ->reject(x | body) ->collect(x | body)",
        "",
        "NUMERIC LITERAL RULES:",
        "  Real prop vs literal: use float literal (`self.kp >= 0.0`, not `>= 0`).",
        "  Integer prop vs literal: use integer literal (`self.count > 0`, not `> 0.0`).",
        "  Mixing them triggers W31.",
        "",
        "OUTPUT FORMAT: only the .onto source, wrapped in ```onto ... ``` fence.",
        "No prose, no markdown headings outside the code fence.",
        "",
        "REFERENCE EXAMPLES (copy these patterns; do not invent new syntax):",
        "",
        fewShotBlock,
        "",
        `=== TARGET ===`,
        `Component: ${args.stepName}`,
        `Description: ${args.stepDescription}`,
        retryBlock,
        "",
        "Now write the .onto file. Copy the structural patterns from the",
        "examples above; do not import any other syntax.",
    ].join("\n");
}
function loadFewShotCorpus(examplesDir) {
    const baseDir = examplesDir ?? resolve(process.cwd(), "examples");
    const candidates = [
        "lpf.onto",
        "drone.onto",
        "ardupilot_ac_pid.onto",
        // Canonical Array<T, N> shape — added 2026-05-20 because Flash 2.5
        // kept guessing at array syntax (`default = [0.0, …]`, indexed
        // assignment) and burning iterations on lex errors. Having one
        // worked example in the corpus cut new-domain runs from
        // "exhausted 5 iters" to "converged in 1".
        "array_state_vector.onto",
    ];
    const out = [];
    for (const name of candidates) {
        const fp = join(baseDir, name);
        if (!existsSync(fp))
            continue;
        try {
            // Use the ESM-imported readFileSync — the old code reached for
            // `require("node:fs")` which is undefined inside an ESM module
            // and silently dropped every example, leaving the model with
            // no corpus to mimic.
            out.push({ name, content: readFileSync(fp, "utf8") });
        }
        catch {
            // ignore — best-effort
        }
    }
    return out;
}
// ─── Response extraction ──────────────────────────────────────────────────
/**
 * Extract the `.onto` source from a Gemini response. Models often
 * wrap output in a ```onto … ``` fence; we honour that. If no fence
 * is found, we return the raw text — `parse()` will fail loudly,
 * which is the correct signal.
 */
function extractOntoFromResponse(text) {
    // Prefer ```onto … ``` (or ```ontodls), then any ``` block.
    const fenced = text.match(/```(?:onto(?:dls)?)?\s*\n([\s\S]*?)\n```/i);
    if (fenced && fenced[1])
        return fenced[1];
    return text;
}
//# sourceMappingURL=realPipeline.js.map