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
import { createReadStream, } from "node:fs";
import { createInterface } from "node:readline";
import { spawn } from "node:child_process";
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
export class JsonLineLogSource {
    filePath;
    tsField;
    include;
    constructor(opts) {
        this.filePath = opts.filePath;
        this.tsField = opts.timestampField ?? "timestampUs";
        this.include = opts.includeFields ? new Set(opts.includeFields) : null;
    }
    async *records() {
        let stream = null;
        let reader = null;
        try {
            stream = createReadStream(this.filePath, { encoding: "utf8" });
            reader = createInterface({ input: stream, crlfDelay: Infinity });
            let lineNo = 0;
            for await (const raw of reader) {
                lineNo += 1;
                const line = raw.trim();
                if (line.length === 0)
                    continue;
                let obj;
                try {
                    obj = JSON.parse(line);
                }
                catch (err) {
                    throw new Error(`JsonLineLogSource ${this.filePath}:${lineNo} — invalid JSON: ${err.message}`);
                }
                if (typeof obj !== "object" || obj === null) {
                    throw new Error(`JsonLineLogSource ${this.filePath}:${lineNo} — expected JSON object`);
                }
                const o = obj;
                const ts = o[this.tsField];
                if (typeof ts !== "number" || !Number.isFinite(ts)) {
                    throw new Error(`JsonLineLogSource ${this.filePath}:${lineNo} — missing/non-numeric '${this.tsField}'`);
                }
                const fields = {};
                for (const k of Object.keys(o)) {
                    if (k === this.tsField)
                        continue;
                    if (this.include !== null && !this.include.has(k))
                        continue;
                    const v = o[k];
                    if (typeof v === "number" || typeof v === "boolean" || typeof v === "string") {
                        fields[k] = v;
                    }
                    // Drop nested objects / arrays — the protocol is flat.
                }
                yield { timestampUs: ts, fields };
            }
        }
        finally {
            reader?.close();
            stream?.close();
        }
    }
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
export class SubprocessRunner {
    opts;
    child = null;
    outputBuffer = "";
    pendingResolves = [];
    exitInfo = null;
    stderrBuffer = "";
    constructor(opts) {
        this.opts = opts;
    }
    async reset() {
        if (this.child === null) {
            this.spawn();
            return;
        }
        if (this.opts.resetMode === "message") {
            // Best-effort: write a reset message and assume the child
            // handles it. No reply expected; we don't await.
            this.child.stdin.write(JSON.stringify({ op: "reset" }) + "\n");
            return;
        }
        // Default: restart the child for a clean slate.
        await this.kill();
        this.spawn();
    }
    async step(record) {
        if (this.child === null)
            this.spawn();
        const line = await new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                // Reject the head of the queue.
                const idx = this.pendingResolves.findIndex((p) => p.timer === timer);
                if (idx >= 0)
                    this.pendingResolves.splice(idx, 1);
                reject(new TimeoutError(`SubprocessRunner step timed out after ${this.opts.stepTimeoutMs ?? 5000}ms`));
            }, this.opts.stepTimeoutMs ?? 5000);
            this.pendingResolves.push({ resolve, reject, timer });
            this.child.stdin.write(JSON.stringify(record) + "\n");
        });
        let parsed;
        try {
            parsed = JSON.parse(line);
        }
        catch (err) {
            throw new Error(`SubprocessRunner: child wrote malformed JSON: ${line.slice(0, 200)}`);
        }
        if (typeof parsed !== "object" || parsed === null) {
            throw new Error(`SubprocessRunner: child snapshot is not an object`);
        }
        const p = parsed;
        if (typeof p.timestampUs !== "number" || typeof p.outputs !== "object" || p.outputs === null) {
            throw new Error(`SubprocessRunner: child snapshot missing 'timestampUs' or 'outputs'`);
        }
        return {
            timestampUs: p.timestampUs,
            outputs: p.outputs,
        };
    }
    /** Tear down the child and release resources. Idempotent. */
    async dispose() {
        await this.kill();
    }
    // ─── Internal ─────────────────────────────────────────────────────
    spawn() {
        const child = spawn(this.opts.cmd, [...(this.opts.args ?? [])], {
            stdio: ["pipe", "pipe", "pipe"],
        });
        this.child = child;
        this.outputBuffer = "";
        this.stderrBuffer = "";
        this.exitInfo = null;
        this.pendingResolves = [];
        child.stdout.setEncoding("utf8");
        child.stdout.on("data", (chunk) => {
            this.outputBuffer += chunk;
            let nl = this.outputBuffer.indexOf("\n");
            while (nl >= 0) {
                const line = this.outputBuffer.slice(0, nl).replace(/\r$/, "");
                this.outputBuffer = this.outputBuffer.slice(nl + 1);
                const head = this.pendingResolves.shift();
                if (head) {
                    clearTimeout(head.timer);
                    head.resolve(line);
                }
                // Unsolicited stdout lines: ignore (probably progress prints
                // from a chatty oracle). Real users can adjust if needed.
                nl = this.outputBuffer.indexOf("\n");
            }
        });
        child.stderr.setEncoding("utf8");
        child.stderr.on("data", (chunk) => {
            this.stderrBuffer += chunk;
        });
        child.on("exit", (code) => {
            this.exitInfo = { code, stderr: this.stderrBuffer };
            // Reject any pending step with the exit info.
            for (const p of this.pendingResolves) {
                clearTimeout(p.timer);
                p.reject(new Error(`SubprocessRunner: child exited with code ${code}\nstderr:\n${this.stderrBuffer}`));
            }
            this.pendingResolves = [];
            this.child = null;
        });
    }
    async kill() {
        const child = this.child;
        if (child === null)
            return;
        return new Promise((resolve) => {
            child.once("exit", () => resolve());
            child.kill();
        });
    }
}
export class TimeoutError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "TimeoutError";
    }
}
//# sourceMappingURL=adapters.js.map