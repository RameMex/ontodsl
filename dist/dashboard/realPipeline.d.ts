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
import { type ParseError } from "../parser/index.js";
import type { OntoFile } from "../ast/index.js";
export interface RealPipelineOptions {
    /** Gemini model name, e.g. `"gemini-2.5-flash"`. */
    readonly modelName: string;
    /** Gemini API key. If empty, falls back to `process.env.GEMINI_API_KEY`. */
    readonly apiKey: string;
    /** Human-readable name of the step (e.g. `"LowPassFilter (Variable dt)"`). */
    readonly stepName: string;
    /** Step description for additional context. */
    readonly stepDescription: string;
    /** Codegen target — currently only `"rust"` is fully wired. */
    readonly targetLang: "rust" | "ts";
    /** Directory the generated Rust crate gets written to. */
    readonly workspaceDir: string;
    /** Base filename (without extension) for the emitted `.rs` file. */
    readonly outputFileName: string;
    /** Sink for streaming progress messages. */
    readonly onLog: (msg: string) => void;
    /** Max AI retries when validation fails. Default 5. */
    readonly maxIterations?: number;
    /** Few-shot corpus directory. Default `examples/` in the repo root. */
    readonly examplesDir?: string;
    /** When true, run `cargo check` on the generated crate. Default true if cargo is on PATH. */
    readonly runCargoCheck?: boolean;
}
/**
 * Result of the AI iteration loop only — the .onto is validated but
 * NOTHING has been written to disk yet. The dashboard typically
 * pauses here for human approval before invoking the codegen phase.
 */
export interface ValidatedOntoResult {
    readonly ok: boolean;
    readonly ontoText: string;
    readonly diagnostics: readonly ParseError[];
    /** The validated AST, present iff `ok`. */
    readonly ast: OntoFile | null;
    readonly iterations: number;
    readonly tokensIn: number;
    readonly tokensOut: number;
}
/** Result of the codegen + cargo-check phase. */
export interface CodegenResult {
    readonly rust: {
        readonly cargoToml: string;
        readonly libRs: string;
    };
    readonly cargoCheck: {
        readonly ok: boolean;
        readonly output: string;
    } | undefined;
    readonly libRsPath: string;
    readonly ontoPath: string;
}
/**
 * End-to-end pipeline: AI loop → validate → codegen → cargo check.
 * Kept for callers (tests, CLI) that don't need the approval gate.
 * For the dashboard, use `runOntoIterationLoop` + `runCodegen`
 * separately so the human can review the .onto before commit.
 */
export interface RealPipelineResult extends ValidatedOntoResult {
    readonly rust?: {
        readonly cargoToml: string;
        readonly libRs: string;
    };
    readonly cargoCheck: {
        readonly ok: boolean;
        readonly output: string;
    } | undefined;
}
/**
 * Phase 1 of the pipeline: prompt the AI for a `.onto`, validate
 * with ontodls, retry on errors. Returns the validated AST without
 * touching disk. Safe to invoke from the dashboard, then pause for
 * human approval before calling `runCodegen` below.
 */
export declare function runOntoIterationLoop(opts: RealPipelineOptions): Promise<ValidatedOntoResult>;
/**
 * Phase 2 of the pipeline: render Rust from a validated AST, write
 * to the workspace, optionally run `cargo check`. Returns the
 * artefacts and diagnostics.
 */
export declare function runCodegen(ast: OntoFile, ontoText: string, opts: RealPipelineOptions): CodegenResult;
export declare function runRealPipeline(opts: RealPipelineOptions): Promise<RealPipelineResult>;
//# sourceMappingURL=realPipeline.d.ts.map