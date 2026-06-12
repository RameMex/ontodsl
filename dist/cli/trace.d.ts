/**
 * `ontodsl trace [--out <path>] [--root <repo-root>]`
 *
 * Emit the traceability matrix — every test file → every test
 * (describe/it) → every imported source module. The artefact a
 * regulated-industry auditor asks for AFTER the reproducibility
 * manifest: "for each feature, show me which tests cover it."
 *
 * Default output: JSON to stdout. With `--out`, writes to file.
 * Default repo root: `process.cwd()`. Default test dir: `test/`.
 *
 * Exit codes:
 *   0  success
 *   1  usage error
 *   3  internal error
 */
interface Streams {
    readonly stdout: {
        write(s: string): unknown;
    };
    readonly stderr: {
        write(s: string): unknown;
    };
}
export declare function runTrace(argv: readonly string[], streams: Streams): Promise<number>;
export {};
//# sourceMappingURL=trace.d.ts.map