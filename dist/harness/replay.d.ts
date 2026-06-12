/**
 * Phase Q3 / Paso 1 — Replay diff-testing harness.
 *
 * The shape of the value ontodls promises a regulated-industry
 * customer is "the Rust we generate behaves the same as the C++ it
 * replaced, on real production traces, within a documented epsilon."
 *
 * This module provides the scaffolding to support that claim:
 *
 *   - LogSource           reads records (timestamped field maps)
 *                         from any format the user can parse
 *                         (mavlink .bin, CSV, JSON, JSONL, custom).
 *
 *   - Runner              consumes records one at a time and emits
 *                         a Snapshot per step. Two runners participate
 *                         in a replay: the "oracle" (typically the
 *                         legacy C++ via FFI or subprocess) and the
 *                         "candidate" (the ontodls-generated Rust).
 *
 *   - replaySequence      drives N records through both runners and
 *                         collects (oracle, candidate) snapshot pairs.
 *
 *   - compareSnapshots    diffs a pair with a per-field epsilon table,
 *                         returning a per-field deviation record.
 *
 *   - renderHtmlReport    turns a list of Diffs into a human-readable
 *                         HTML page suitable for an audit binder.
 *
 * Intentionally NOT in this module:
 *   - The actual ArduPilot .bin parser. That's a separate adapter
 *     that implements LogSource — left as future work because it
 *     requires the mavlink schema definitions.
 *   - The C++ Runner. That's an FFI bridge or subprocess adapter
 *     specific to each target codebase.
 *
 * Why a TS harness (rather than a Rust crate that runs both)? The
 * orchestration layer naturally lives in TypeScript alongside the
 * rest of ontodls (parser, codegen, dashboard). The per-target
 * Runners can be either FFI (Rust calls C++ via bindgen) or process
 * subprocess (TS launches a binary, communicates over JSON lines).
 * Either way, the harness coordinates and reports.
 */
/**
 * A single timestamped input record from the log. `fields` is a
 * shallow map of name → scalar (number / boolean / string). Higher-
 * arity structures (arrays, nested objects) flatten via dot
 * notation: `gyro_x` / `gyro_y` / `gyro_z` rather than `gyro: [x, y, z]`.
 *
 * Why scalar-only: the diff layer compares with per-field epsilons,
 * and flat names make the epsilon table trivially declarative. The
 * LogSource implementation handles the flattening.
 */
export interface Record_ {
    readonly timestampUs: number;
    readonly fields: Readonly<{
        [name: string]: number | boolean | string;
    }>;
}
/**
 * Async iterable over Records. Implementations stream so a long
 * replay doesn't have to load the entire log into memory.
 */
export interface LogSource {
    records(): AsyncIterable<Record_>;
}
/**
 * A snapshot of one Runner's state immediately after processing a
 * single Record. `outputs` carries the values to compare against
 * the other Runner — typically the same fields the original C++
 * exposes as public state. `meta` carries arbitrary diagnostic
 * info (e.g. `cycles_used`, `bytes_allocated`) that won't be
 * diff-checked but might appear in the report.
 */
export interface Snapshot {
    readonly timestampUs: number;
    readonly outputs: Readonly<{
        [name: string]: number | boolean | string;
    }>;
    readonly meta?: Readonly<{
        [name: string]: unknown;
    }>;
}
/**
 * A driver-under-test. Stateful: implementations hold whatever
 * internal state the target needs (EKF covariance matrix, PID
 * accumulators, etc.). `step` MUST be deterministic — same record
 * sequence ⇒ same snapshot sequence — otherwise diff-testing has no
 * meaning.
 *
 * The `reset` method exists so a replay can re-run from a known
 * initial state without recreating the Runner (useful for the
 * "compare initial conditions sweep" use-case).
 */
export interface Runner {
    step(record: Record_): Promise<Snapshot>;
    reset(): Promise<void>;
}
/**
 * Per-field tolerance. Two flavours:
 *   - absolute: |a - b| <= eps
 *   - relative: |a - b| <= eps * max(|a|, |b|, 1)
 *
 * `bool` and `string` fields use exact equality regardless of the
 * configured epsilon (epsilon is meaningless for them).
 *
 * A wildcard "*" key applies to any field not explicitly named. Use
 * with `{ kind: "absolute", eps: 1e-9 }` as a sensible default for
 * floats; override per-field as needed for fields with known noise.
 */
export type Tolerance = {
    readonly kind: "absolute";
    readonly eps: number;
} | {
    readonly kind: "relative";
    readonly eps: number;
} | {
    readonly kind: "exact";
};
export type EpsilonTable = Readonly<{
    [field: string]: Tolerance;
}>;
/**
 * Per-field disagreement between two snapshots at the same time
 * step. `delta` is the numeric difference (NaN if either side is
 * non-numeric); `tolerance` is the rule applied; `passed` is whether
 * the pair satisfied the rule.
 */
export interface FieldDiff {
    readonly field: string;
    readonly oracle: number | boolean | string;
    readonly candidate: number | boolean | string;
    readonly delta: number;
    readonly tolerance: Tolerance;
    readonly passed: boolean;
}
export interface SnapshotDiff {
    readonly timestampUs: number;
    readonly fields: readonly FieldDiff[];
    /** True iff every FieldDiff.passed === true. */
    readonly allPassed: boolean;
    /** Only failing fields (convenience for report rendering). */
    readonly failures: readonly FieldDiff[];
}
/**
 * Compare two snapshots field-by-field with the given epsilon
 * table. Missing-from-one-side fields are reported as failures with
 * `delta: NaN`.
 */
export declare function compareSnapshots(oracle: Snapshot, candidate: Snapshot, eps?: EpsilonTable): SnapshotDiff;
/**
 * Replay a LogSource through two Runners and yield per-step
 * SnapshotDiffs. Streams: never holds more than a single pair in
 * memory at a time. Resets both runners first.
 */
export declare function replaySequence(source: LogSource, oracle: Runner, candidate: Runner, eps?: EpsilonTable): AsyncGenerator<SnapshotDiff>;
/**
 * Render a (possibly large) list of SnapshotDiffs as a single
 * self-contained HTML page. Style and layout chosen for audit
 * binders: a green/red banner at the top with pass/fail counts, a
 * sortable table of failing rows, plus a collapsible "all rows"
 * section. Suitable as an artefact in a DO-178C / IEC 62304 review.
 */
export declare function renderHtmlReport(componentName: string, diffs: readonly SnapshotDiff[], meta: {
    readonly oracle: string;
    readonly candidate: string;
    readonly logSource: string;
}): string;
//# sourceMappingURL=replay.d.ts.map