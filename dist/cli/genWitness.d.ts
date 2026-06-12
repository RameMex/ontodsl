/**
 * `ontodsl gen-witness <file.onto> --out <dir>` — emit a complete
 * Rust crate that contains the generated lib.rs PLUS the contract-
 * witness tests appended, ready to run `cargo check --tests` against.
 *
 * Why a dedicated subcommand: `gen` produces just the library; the
 * witness tests are an optional artifact users opt into. Keeping the
 * tests off the default codegen path keeps `gen` deterministic for
 * users who only want the runtime — the witness module adds ~100-300
 * lines per type and changes test counts on every codegen.
 *
 * Output layout (same as `gen --target rust`):
 *   <out>/Cargo.toml
 *   <out>/src/lib.rs        # codegen + appended `mod contract_tests`
 */
interface Streams {
    readonly stdout: {
        write(s: string): unknown;
    };
    readonly stderr: {
        write(s: string): unknown;
    };
}
export declare function runGenWitness(argv: readonly string[], streams: Streams): Promise<number>;
export {};
//# sourceMappingURL=genWitness.d.ts.map