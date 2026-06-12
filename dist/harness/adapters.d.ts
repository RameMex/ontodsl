/**
 * Phase Q3 / Paso 1 — concrete LogSource + Runner adapters.
 *
 * The replay.ts module defines the abstract interfaces; this module
 * supplies the two adapters that cover the realistic onboarding path
 * for a regulated-industry user:
 *
 *   - JsonLineLogSource     reads `.jsonl` files (one timestamped
 *                           record per line). Why JSON Lines: it's
 *                           the most-portable streaming format, dumps
 *                           cleanly from Python / R / pandas, and
 *                           lets the user pre-process their .bin /
 *                           CSV / mavlink log into a uniform shape
 *                           without committing to a binary format.
 *
 *   - SubprocessRunner      spawns a binary that consumes input
 *                           records on stdin (one JSON line per
 *                           record) and emits snapshots on stdout
 *                           (one JSON line per snapshot). The
 *                           "candidate" is typically the ontodls-
 *                           generated Rust crate wrapped in a tiny
 *                           main.rs; the "oracle" is the legacy C++
 *                           wrapped the same way. Either side can
 *                           be replaced independently.
 *
 * What's deliberately NOT here: a mavlink `.bin` parser, an
 * ArduPilot SITL bridge, FFI bindings. Each of those is target-
 * specific; the user supplies them as their adapter implementation
 * once they pick their oracle source. The JSONL + subprocess pair
 * is the lowest-friction starting point that lets a user run a
 * real diff-test the same day they read this code.
 */
import type { LogSource, Record_, Runner, Snapshot } from "./replay.js";
export interface JsonLineLogSourceOptions {
    /** Path to the .jsonl file. */
    readonly filePath: string;
    /**
     * Optional field-name override. If the JSONL records use a key
     * other than `timestampUs` for the timestamp, supply its name
     * here. Default: `"timestampUs"`.
     */
    readonly timestampField?: string;
    /**
     * Optional flat-field whitelist. When supplied, only these keys
     * land in Record.fields; everything else in the JSON object is
     * dropped. Useful when a log carries 200 fields and you want to
     * diff-check 12. Default: all keys other than the timestamp.
     */
    readonly includeFields?: readonly string[];
}
/**
 * Reads timestamped records from a `.jsonl` file. Streams: never
 * buffers more than one line at a time.
 *
 * Expected line shape:
 *   { "timestampUs": 1234567, "field1": 1.0, "field2": "ok", ... }
 *
 * The reader is forgiving: empty lines are skipped, lines that
 * don't parse as JSON or that lack the timestamp field throw a
 * descriptive error (with the line number) so the user can fix
 * their input.
 */
export declare class JsonLineLogSource implements LogSource {
    private readonly filePath;
    private readonly tsField;
    private readonly include;
    constructor(opts: JsonLineLogSourceOptions);
    records(): AsyncIterable<Record_>;
}
export interface SubprocessRunnerOptions {
    /** Executable path to spawn. */
    readonly cmd: string;
    /** Arguments to pass to the executable. */
    readonly args?: readonly string[];
    /**
     * Per-step timeout (ms). If the subprocess doesn't emit a snapshot
     * line within this window after we write the input, we treat it
     * as a hang and surface a `TimeoutError`. Default: 5000ms.
     */
    readonly stepTimeoutMs?: number;
    /**
     * Lifecycle: when the subprocess is asked to `reset()`, what does
     * the harness do? Two options:
     *   - "restart" (default): kill + respawn. Slow but state-clean.
     *   - "message": write `{ "op": "reset" }` and expect the binary
     *     to handle it. Faster, requires the binary to implement it.
     */
    readonly resetMode?: "restart" | "message";
}
/**
 * Drives a subprocess via line-oriented JSON IPC.
 *
 * Protocol:
 *   - Per `step(record)`, the harness writes one JSON line to the
 *     child's stdin: `{ "timestampUs": …, "fields": { … } }`.
 *   - The child must reply with exactly one JSON line on stdout:
 *     `{ "timestampUs": …, "outputs": { … } }` (a Snapshot).
 *   - Stderr is captured and surfaced in error messages but not
 *     parsed — the child can log freely there.
 *
 * Failure modes (all surfaced as Error from step / reset):
 *   - Child exits prematurely: error contains exit code + stderr.
 *   - Child hangs past `stepTimeoutMs`: TimeoutError.
 *   - Child writes malformed JSON: error contains the offending line.
 */
export declare class SubprocessRunner implements Runner {
    private readonly opts;
    private child;
    private outputBuffer;
    private pendingResolves;
    private exitInfo;
    private stderrBuffer;
    constructor(opts: SubprocessRunnerOptions);
    reset(): Promise<void>;
    step(record: Record_): Promise<Snapshot>;
    /** Tear down the child and release resources. Idempotent. */
    dispose(): Promise<void>;
    private spawn;
    private kill;
}
export declare class TimeoutError extends Error {
    constructor(msg: string);
}
//# sourceMappingURL=adapters.d.ts.map