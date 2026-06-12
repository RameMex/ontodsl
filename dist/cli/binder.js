/**
 * `ontodsl binder <file.onto> --out <dir>` — produce the complete
 * audit expedient for one .onto in a single command.
 *
 * Layout written to `<dir>`:
 *
 *   manifest.json          — reproducibility manifest (SHA-256 of inputs + outputs)
 *   trace.json             — feature/test/source traceability matrix
 *   coverage.json          — per-type contract surface metrics
 *   diff-baseline.txt      — placeholder for the diff against the previous
 *                            release; user fills in by running
 *                            `ontodsl diff baseline.onto <file>` and
 *                            appending the output
 *   README.md              — index document explaining what each artefact
 *                            is, how it was produced, and how to verify
 *                            byte-stability + reproducibility
 *   Cargo.toml + src/lib.rs (when --target rust or --all-targets)
 *   <basename>.h + <basename>.c (when --target c or --all-targets)
 *   <basename>.ts (when --target ts or --all-targets)
 *
 * The result is a self-contained folder that a DO-330 / IEC 62304 /
 * ISO 26262 Part 8 reviewer can drop straight into the configuration-
 * management baseline. No reading of source code required to verify
 * that the build is reproducible: replay `ontodsl manifest` against
 * the same `.onto`, compare SHA-256s.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, join, basename } from "node:path";
import { readFileSync } from "node:fs";
import { parse } from "../parser/index.js";
import { parseFile } from "../parser/multiFile.js";
import { renderRust, renderRustProptestsForFile } from "../codegen-rust/index.js";
import { renderC } from "../codegen-c/index.js";
import { renderTypeScript } from "../codegen/index.js";
import { buildManifest, serializeManifest, checkDeterminism, } from "../qualification/manifest.js";
import { buildTraceMatrix, serializeTraceMatrix, } from "../qualification/trace.js";
const USAGE = `usage: ontodsl binder <file.onto> --out <dir> [--resolve-imports] [--targets ts,rust,c]

Produce a complete audit expedient for one .onto in a single command.
Writes manifest.json + trace.json + coverage.json + README.md plus
the generated code for the requested targets.

Flags:
  --out <dir>            Output directory (required).
  --resolve-imports      Follow \`import\` declarations from the root.
  --targets <list>       Comma-separated targets (ts, rust, c). Default: all three.
  --include-witness      Append the contract-witness test module to lib.rs.

Exit codes:
  0  binder written + determinism check passed
  1  usage / argument error
  2  parse error in input OR determinism check failed
  3  internal error
`;
function parseArgs(argv) {
    let inputFile = null;
    let outDir = null;
    let resolveImports = false;
    let targets = ["ts", "rust", "c"];
    let includeWitness = false;
    for (let i = 0; i < argv.length; i += 1) {
        const a = argv[i];
        if (a === "--help" || a === "-h")
            return { error: "" };
        if (a === "--out") {
            const next = argv[i + 1];
            if (!next)
                return { error: "--out requires a directory" };
            outDir = next;
            i += 1;
            continue;
        }
        if (a === "--resolve-imports") {
            resolveImports = true;
            continue;
        }
        if (a === "--include-witness") {
            includeWitness = true;
            continue;
        }
        if (a === "--targets") {
            const next = argv[i + 1];
            if (!next)
                return { error: "--targets requires a comma-separated list" };
            const parsed = next.split(",").map((s) => s.trim()).filter((s) => s);
            for (const t of parsed) {
                if (t !== "ts" && t !== "rust" && t !== "c") {
                    return { error: `unknown target '${t}'` };
                }
            }
            targets = parsed;
            i += 1;
            continue;
        }
        if (a && a.startsWith("--"))
            return { error: `unknown flag: ${a}` };
        if (inputFile !== null)
            return { error: `multiple input files` };
        inputFile = a ?? null;
    }
    if (!inputFile)
        return { error: "missing input .onto file" };
    if (!outDir)
        return { error: "missing --out <dir>" };
    return { inputFile, outDir, resolveImports, targets, includeWitness };
}
export async function runBinder(argv, streams) {
    const parsed = parseArgs(argv);
    if ("error" in parsed) {
        if (parsed.error === "") {
            streams.stdout.write(USAGE);
            return 0;
        }
        streams.stderr.write(`error: ${parsed.error}\n\n${USAGE}`);
        return 1;
    }
    const inputAbs = resolve(parsed.inputFile);
    const outAbs = resolve(parsed.outDir);
    mkdirSync(outAbs, { recursive: true });
    // ─── 1. Parse the input (single- or multi-file) ────────────────
    let ast;
    if (parsed.resolveImports) {
        const r = parseFile(inputAbs);
        if (!r.ast) {
            streams.stderr.write(`error: parse failure: ${JSON.stringify(r.errors.slice(0, 3))}\n`);
            return 2;
        }
        ast = r.ast;
    }
    else {
        const source = readFileSync(inputAbs, "utf8");
        const r = parse(source);
        if (!r.ast) {
            streams.stderr.write(`error: parse failure: ${JSON.stringify(r.errors.slice(0, 3))}\n`);
            return 2;
        }
        ast = r.ast;
    }
    // ─── 2. Generate code for each target ──────────────────────────
    const baseName = basename(inputAbs).replace(/\.onto$/i, "").replace(/[^A-Za-z0-9_]/g, "_");
    const generated = [];
    if (parsed.targets.includes("rust")) {
        const { cargoToml, libRs } = renderRust(ast, { crateName: baseName });
        const finalLib = parsed.includeWitness
            ? libRs + "\n\n" + renderRustProptestsForFile(ast).proptestsRs
            : libRs;
        const cargoPath = join(outAbs, "Cargo.toml");
        const srcDir = join(outAbs, "src");
        mkdirSync(srcDir, { recursive: true });
        writeFileSync(cargoPath, cargoToml, "utf8");
        writeFileSync(join(srcDir, "lib.rs"), finalLib, "utf8");
        generated.push({ artefact: "Cargo.toml", bytes: cargoToml.length });
        generated.push({ artefact: "src/lib.rs", bytes: finalLib.length });
    }
    if (parsed.targets.includes("c")) {
        const { headerH, sourceC } = renderC(ast, { module: baseName });
        writeFileSync(join(outAbs, `${baseName}.h`), headerH, "utf8");
        writeFileSync(join(outAbs, `${baseName}.c`), sourceC, "utf8");
        generated.push({ artefact: `${baseName}.h`, bytes: headerH.length });
        generated.push({ artefact: `${baseName}.c`, bytes: sourceC.length });
    }
    if (parsed.targets.includes("ts")) {
        const ts = renderTypeScript(ast);
        writeFileSync(join(outAbs, `${baseName}.ts`), ts, "utf8");
        generated.push({ artefact: `${baseName}.ts`, bytes: ts.length });
    }
    // ─── 3. Manifest + determinism check ───────────────────────────
    const manifest = buildManifest(inputAbs, {
        targets: parsed.targets,
        resolveImports: parsed.resolveImports,
        includeWitnessInRustHash: parsed.includeWitness,
    });
    writeFileSync(join(outAbs, "manifest.json"), serializeManifest(manifest), "utf8");
    const det = checkDeterminism(inputAbs, {
        targets: parsed.targets,
        resolveImports: parsed.resolveImports,
        includeWitnessInRustHash: parsed.includeWitness,
    });
    if (!det.deterministic) {
        const d = det.firstDifference;
        streams.stderr.write(`⚠ DETERMINISM CHECK FAILED — '${d.artefact}' differs across runs\n` +
            `  ${d.hashA}\n  ${d.hashB}\n`);
        return 2;
    }
    // ─── 4. Traceability matrix (best-effort: needs test/ dir) ─────
    const trace = buildTraceMatrix();
    writeFileSync(join(outAbs, "trace.json"), serializeTraceMatrix(trace), "utf8");
    // ─── 5. Coverage report ────────────────────────────────────────
    // Re-uses the existing coverage CLI's renderer indirectly — we
    // call its building blocks here rather than spawning a subprocess.
    const coverage = buildCoverageReport(ast, inputAbs);
    writeFileSync(join(outAbs, "coverage.json"), JSON.stringify(coverage, null, 2) + "\n", "utf8");
    // ─── 6. README index ───────────────────────────────────────────
    const readme = buildReadme({
        inputFile: inputAbs,
        outDir: outAbs,
        manifest,
        trace,
        coverage,
        generated,
        resolveImports: parsed.resolveImports,
        targets: parsed.targets,
        includeWitness: parsed.includeWitness,
    });
    writeFileSync(join(outAbs, "README.md"), readme, "utf8");
    streams.stdout.write(`wrote audit binder to ${outAbs}\n`);
    streams.stdout.write(`  manifest.json   ${manifest.outputs.length} artefacts, all deterministic\n`);
    streams.stdout.write(`  trace.json      ${trace.summary.features} features / ${trace.summary.tests} tests\n`);
    streams.stdout.write(`  coverage.json   ${coverage.totals.types} types, ${coverage.totals.invariants} invariants, ${coverage.totals.witness_tests} witnesses\n`);
    for (const g of generated) {
        streams.stdout.write(`  ${g.artefact.padEnd(15)} ${g.bytes} bytes\n`);
    }
    return 0;
}
const BODY_BEARING = new Set([
    "KindDecl", "SubkindDecl", "RoleDecl", "RelatorDecl", "CategoryDecl",
    "MixinDecl", "RoleMixinDecl", "ModeDecl", "QualityDecl", "CollectiveDecl",
    "QuantityDecl", "HappeningDecl", "AgentDecl", "CommitmentDecl", "UseCaseDecl",
]);
function buildCoverageReport(ast, inputAbs) {
    // renderRustProptestsForFile imported at top of this module.
    const { testCount, proptestsRs } = renderRustProptestsForFile(ast);
    const witnessByType = countWitnessesByType(proptestsRs);
    const types = [];
    let invTotal = 0;
    let evTotal = 0;
    for (const d of ast.declarations) {
        if (!BODY_BEARING.has(d.kind))
            continue;
        if (!("identity" in d))
            continue;
        const invs = "invariants" in d ? d.invariants.length : 0;
        const evs = "events" in d ? d.events.length : 0;
        invTotal += invs;
        evTotal += evs;
        types.push({
            name: d.name,
            stereotype: d.kind.replace(/Decl$/, ""),
            invariants: invs,
            events: evs,
            events_with_pre: "events" in d ? d.events.filter((e) => e.pre.length > 0).length : 0,
            events_with_post: "events" in d ? d.events.filter((e) => e.post.length > 0).length : 0,
            events_with_effects: "events" in d ? d.events.filter((e) => e.effects.length > 0).length : 0,
            properties: "properties" in d ? d.properties.length : 0,
            witness_tests: witnessByType.get(d.name) ?? 0,
        });
    }
    return {
        file: inputAbs,
        types,
        totals: {
            types: types.length,
            invariants: invTotal,
            events: evTotal,
            witness_tests: testCount,
        },
    };
}
function countWitnessesByType(proptestsRs) {
    const out = new Map();
    if (proptestsRs.length === 0)
        return out;
    const sectionRe = /\/\/ ─── (\S+) ─/g;
    const matches = [];
    let m;
    while ((m = sectionRe.exec(proptestsRs)) !== null) {
        matches.push({ name: m[1], start: m.index });
    }
    for (let i = 0; i < matches.length; i += 1) {
        const end = i + 1 < matches.length ? matches[i + 1].start : proptestsRs.length;
        const section = proptestsRs.slice(matches[i].start, end);
        const count = (section.match(/#\[test\]/g) ?? []).length;
        out.set(matches[i].name, count);
    }
    return out;
}
function buildReadme(ctx) {
    const lines = [];
    lines.push(`# Audit binder — ${basename(ctx.inputFile)}`);
    lines.push("");
    lines.push(`Generated by **ontodls v${ctx.manifest.tool.version}** on ${ctx.manifest.generatedAt} (UTC).`);
    lines.push("");
    lines.push(`This folder is a self-contained audit expedient suitable for a`);
    lines.push(`DO-330 / IEC 62304 / ISO 26262 Part 8 configuration-management`);
    lines.push(`baseline. To verify reproducibility:`);
    lines.push("");
    lines.push("```bash");
    lines.push(`# rebuild manifest from the same .onto + ontodls version`);
    lines.push(`ontodsl manifest ${basename(ctx.inputFile)}${ctx.resolveImports ? " --resolve-imports" : ""}`);
    lines.push(`# every SHA-256 in the new manifest.json must match this one`);
    lines.push("```");
    lines.push("");
    lines.push(`## Contents`);
    lines.push("");
    lines.push(`| File | Purpose |`);
    lines.push(`|------|---------|`);
    lines.push(`| \`manifest.json\` | Reproducibility manifest — SHA-256 of inputs + outputs + ontodls version + codegen options. |`);
    lines.push(`| \`trace.json\` | Traceability matrix — for each test file: tests + source files imported. |`);
    lines.push(`| \`coverage.json\` | Per-type contract surface metrics — invariants, pre/post counts, witness tests. |`);
    for (const g of ctx.generated) {
        lines.push(`| \`${g.artefact}\` | Generated code (${g.bytes} bytes). |`);
    }
    lines.push("");
    lines.push(`## Build provenance`);
    lines.push("");
    lines.push(`- **Input**: \`${basename(ctx.inputFile)}\` (SHA-256 \`${ctx.manifest.inputs.rootSha256}\`)`);
    if (ctx.manifest.inputs.transitiveFiles) {
        lines.push(`- **Transitive imports**:`);
        for (const f of ctx.manifest.inputs.transitiveFiles) {
            lines.push(`  - \`${basename(f.path)}\` (SHA-256 \`${f.sha256}\`)`);
        }
    }
    lines.push(`- **Targets**: ${ctx.targets.join(", ")}`);
    if (ctx.includeWitness) {
        lines.push(`- **Contract-witness tests**: included in \`src/lib.rs\``);
    }
    lines.push(`- **Determinism**: verified across two consecutive invocations.`);
    lines.push("");
    lines.push(`## Coverage`);
    lines.push("");
    lines.push(`- **${ctx.coverage.totals.types}** body-bearing types`);
    lines.push(`- **${ctx.coverage.totals.invariants}** invariant clauses`);
    lines.push(`- **${ctx.coverage.totals.events}** events`);
    lines.push(`- **${ctx.coverage.totals.witness_tests}** contract-witness tests auto-generated`);
    lines.push("");
    lines.push(`## Traceability summary`);
    lines.push("");
    lines.push(`- **${ctx.trace.summary.features}** test files (features)`);
    lines.push(`- **${ctx.trace.summary.tests}** test cases`);
    lines.push(`- **${ctx.trace.summary.sourceFiles}** source modules under test`);
    lines.push("");
    lines.push(`## Next steps for the reviewer`);
    lines.push("");
    lines.push(`1. Confirm the SHA-256 of the input file matches the upstream checked-in copy.`);
    lines.push(`2. Run \`ontodsl manifest\` against the same .onto with the same flags; verify every output SHA-256 matches.`);
    lines.push(`3. (If a previous release exists) Run \`ontodsl diff <previous>.onto <current>.onto\` and review the BREAKING list.`);
    lines.push(`4. Cross-reference \`trace.json\` against the project's safety case to confirm coverage of every requirement.`);
    return lines.join("\n") + "\n";
}
//# sourceMappingURL=binder.js.map