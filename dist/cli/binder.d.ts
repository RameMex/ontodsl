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
interface Streams {
    readonly stdout: {
        write(s: string): unknown;
    };
    readonly stderr: {
        write(s: string): unknown;
    };
}
export declare function runBinder(argv: readonly string[], streams: Streams): Promise<number>;
export {};
//# sourceMappingURL=binder.d.ts.map