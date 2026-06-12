/**
 * `ontodsl diff <old.onto> <new.onto> [--json [--out path]] [--strict]`
 *
 * Compare two `.onto` files and report observable changes classified
 * as BREAKING / ADDITIVE / INTERNAL. Use case: a downstream consumer
 * runs this against the previous + current version of an upstream
 * library to know what to update.
 *
 * Exit codes:
 *   0  no breaking changes (additive / internal-only)
 *   1  usage / argument error
 *   2  parse error in EITHER input
 *   3  internal error
 *   5  BREAKING changes detected (only when --strict is set)
 *
 * Without --strict, breaking changes are reported in the output but
 * exit is 0 — the user looks at the report and decides. With
 * --strict, breaking changes fail CI so a consumer's pipeline blocks
 * on accidental upstream regressions.
 */
interface Streams {
    readonly stdout: {
        write(s: string): unknown;
    };
    readonly stderr: {
        write(s: string): unknown;
    };
}
export declare function runDiff(argv: readonly string[], streams: Streams): Promise<number>;
export {};
//# sourceMappingURL=diff.d.ts.map