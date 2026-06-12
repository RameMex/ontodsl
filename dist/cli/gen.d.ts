#!/usr/bin/env node
/**
 * Onto DSL CLI.
 *
 * Phase 10 baseline: parse → synchronous validate → render TypeScript
 * to <out>/<basename>.ts.
 *
 * Phase 10.1 additions (opt-in, all default-off):
 *
 *   --verify
 *       Run async Z3 verifiers (S29/S30/S33). Hard diagnostics fail
 *       the build (exit 2). Warnings are printed but don't gate.
 *
 *   --diagram
 *       Also write `<basename>.md` containing the three Mermaid
 *       diagrams in fenced blocks.
 *
 *   --react-flow
 *       Also write `<basename>.flow.json` with the React Flow graph
 *       data (Phase 9.5 builder).
 *
 * Implementation note: the CLI body lives in `runCli(argv, streams)`,
 * an exported async function that takes injectable stdout/stderr
 * writers. This lets tests call it in-process — no subprocess spawn,
 * no `npx tsx` cold-start. The script-mode entry point at the bottom
 * just wires `process.argv` and `process.stdout/stderr` and calls
 * `process.exit` with the returned code.
 */
/** Streams used by the CLI. */
export interface CliStreams {
    readonly stdout: {
        write(s: string): unknown;
    };
    readonly stderr: {
        write(s: string): unknown;
    };
}
/**
 * Run the CLI body. `argv` is the arg list AFTER stripping
 * `node script.ts` (i.e. callers pass `process.argv.slice(2)`).
 * Returns the exit code; does NOT call `process.exit` so tests
 * keep running after a "failed" invocation.
 */
export declare function runCli(argv: readonly string[], streams?: CliStreams): Promise<number>;
//# sourceMappingURL=gen.d.ts.map