/**
 * `ontodsl coverage <file.onto> [--json] [--out <path>]` — emit
 * per-type and per-event metrics about the contract surface a .onto
 * declares. The shape that matters for a regulated-industry safety
 * case:
 *
 *   - How many invariants does each type have?
 *   - How many events declare pre / post / effects / reads / writes?
 *   - How many witness tests does ontodls auto-generate?
 *
 * Default output: human-readable console table.
 * `--json [--out <path>]`: machine-readable JSON dump.
 *
 * Why this matters: the first audit question is "show me the
 * coverage." Without this command the answer is "grep the .onto and
 * count by hand"; with it, you produce a JSON artefact that lives
 * in the build pipeline next to the codegen output.
 */
interface Streams {
    readonly stdout: {
        write(s: string): unknown;
    };
    readonly stderr: {
        write(s: string): unknown;
    };
}
export declare function runCoverage(argv: readonly string[], streams: Streams): Promise<number>;
export {};
//# sourceMappingURL=coverage.d.ts.map