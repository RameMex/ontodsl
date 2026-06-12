/**
 * Phase Q6 / Paso 6 day 2 — Traceability matrix.
 *
 * After build determinism + reproducibility manifest (day 1), the
 * second audit artefact every regulated-industry reviewer asks for
 * is **traceability**: "for each ontodls feature, show me which
 * test exercises it AND which source files implement it."
 *
 * This module produces that mapping by lightly parsing the vitest
 * test files in `test/`:
 *   - A test file's name (`test/codegenRustCompiles.test.ts`) maps
 *     to a feature label (`codegenRustCompiles`).
 *   - The describe / it names inside the file are the test rows.
 *   - The `import "..."` statements at the top of the file are the
 *     source modules under test.
 *
 * The output JSON is structured for direct ingestion by audit
 * tools (Polarion / DOORS / Codebeamer):
 *
 *   {
 *     "schemaVersion": "ontodls-trace/1",
 *     "features": [
 *       {
 *         "name": "codegenRustCompiles",
 *         "testFile": "test/codegenRustCompiles.test.ts",
 *         "tests": [
 *           { "describe": "codegen-rust", "it": "drone.onto compiles cleanly" },
 *           ...
 *         ],
 *         "sourceFiles": ["src/codegen-rust/index.ts", ...]
 *       },
 *       ...
 *     ],
 *     "summary": { "features": 60, "tests": 770, "sourceFiles": 50 }
 *   }
 *
 * Limitations (v1):
 *   - Regex-based test extraction; doesn't handle dynamic test
 *     generation (e.g. `for (...) it.each(...)`). Surfaces those
 *     entries as "(parameterized)" placeholders.
 *   - Source-file mapping is approximate (the import statement is
 *     treated as evidence; we don't trace through call graphs).
 *   - No requirement-id linking — the trace is feature→test, not
 *     requirement→test. Adding requirement IDs (e.g. `[REQ-3.1.2]`
 *     in describe strings) is left to v2.
 */
export interface TraceTest {
    /** Outer describe block text. May be empty if the test is at top level. */
    readonly describe: string;
    /** The `it(...)` argument. */
    readonly it: string;
    /** True when extracted by regex from a `.each` / `.for` template. */
    readonly parameterized: boolean;
}
export interface TraceFeature {
    /** Feature label derived from the test file basename. */
    readonly name: string;
    /** Path relative to repo root (e.g. `test/codegenRustCompiles.test.ts`). */
    readonly testFile: string;
    /** Every describe/it pair extracted from the file. */
    readonly tests: readonly TraceTest[];
    /**
     * Source files imported by this test, relative to repo root.
     * Empty when no `from "../src/..."` imports were detected.
     */
    readonly sourceFiles: readonly string[];
}
export interface TraceMatrix {
    readonly schemaVersion: "ontodls-trace/1";
    readonly features: readonly TraceFeature[];
    readonly summary: {
        readonly features: number;
        readonly tests: number;
        readonly sourceFiles: number;
    };
}
export interface BuildTraceOptions {
    /** Repo root (default: cwd). */
    readonly rootDir?: string;
    /** Test directory under rootDir (default: "test"). */
    readonly testDir?: string;
}
/**
 * Walk `<rootDir>/<testDir>` recursively, collecting `*.test.ts`
 * files, parse each one's describe/it/import lines, and return the
 * aggregated trace matrix.
 */
export declare function buildTraceMatrix(opts?: BuildTraceOptions): TraceMatrix;
/**
 * Serialize a trace matrix to stable JSON text. Same idea as the
 * manifest module: two runs over the same file tree produce
 * byte-identical output.
 */
export declare function serializeTraceMatrix(m: TraceMatrix): string;
//# sourceMappingURL=trace.d.ts.map