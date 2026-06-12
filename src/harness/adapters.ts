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

import {
  createReadStream,
  type ReadStream,
} from "node:fs";
import { createInterface, type Interface as ReadlineInterface } from "node:readline";
import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import type { LogSource, Record_, Runner, Snapshot } from "./replay.js";

// ─── JsonLineLogSource ──────────────────────────────────────────────

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
export class JsonLineLogSource implements LogSource {
  private readonly filePath: string;
  private readonly tsField: string;
  private readonly include: ReadonlySet<string> | null;

  constructor(opts: JsonLineLogSourceOptions) {
    this.filePath = opts.filePath;
    this.tsField = opts.timestampField ?? "timestampUs";
    this.include = opts.includeFields ? new Set(opts.includeFields) : null;
  }

  async *records(): AsyncIterable<Record_> {
    let stream: ReadStream | null = null;
    let reader: ReadlineInterface | null = null;
    try {
      stream = createReadStream(this.filePath, { encoding: "utf8" });
      reader = createInterface({ input: stream, crlfDelay: Infinity });
      let lineNo = 0;
      for await (const raw of reader) {
        lineNo += 1;
        const line = raw.trim();
        if (line.length === 0) continue;
        let obj: unknown;
        try {
          obj = JSON.parse(line);
        } catch (err) {
          throw new Error(
            `JsonLineLogSource ${this.filePath}:${lineNo} — invalid JSON: ${(err as Error).message}`,
          );
        }
        if (typeof obj !== "object" || obj === null) {
          throw new Error(
            `JsonLineLogSource ${this.filePath}:${lineNo} — expected JSON object`,
          );
        }
        const o = obj as { [k: string]: unknown };
        const ts = o[this.tsField];
        if (typeof ts !== "number" || !Number.isFinite(ts)) {
          throw new Error(
            `JsonLineLogSource ${this.filePath}:${lineNo} — missing/non-numeric '${this.tsField}'`,
          );
        }
        const fields: { [k: string]: number | boolean | string } = {};
        for (const k of Object.keys(o)) {
          if (k === this.tsField) continue;
          if (this.include !== null && !this.include.has(k)) continue;
          const v = o[k];
          if (typeof v === "number" || typeof v === "boolean" || typeof v === "string") {
            fields[k] = v;
          }
          // Drop nested objects / arrays — the protocol is flat.
        }
        yield { timestampUs: ts, fields };
      }
    } finally {
      reader?.close();
      stream?.close();
    }
  }
}

// ─── SubprocessRunner ───────────────────────────────────────────────

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
export class SubprocessRunner implements Runner {
  private child: ChildProcessWithoutNullStreams | null = null;
  private outputBuffer: string = "";
  private pendingResolves: Array<{
    resolve: (line: string) => void;
    reject: (err: Error) => void;
    timer: NodeJS.Timeout;
  }> = [];
  private exitInfo: { code: number | null; stderr: string } | null = null;
  private stderrBuffer: string = "";

  constructor(private readonly opts: SubprocessRunnerOptions) {}

  async reset(): Promise<void> {
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

  async step(record: Record_): Promise<Snapshot> {
    if (this.child === null) this.spawn();
    const line = await new Promise<string>((resolve, reject) => {
      const timer = setTimeout(() => {
        // Reject the head of the queue.
        const idx = this.pendingResolves.findIndex((p) => p.timer === timer);
        if (idx >= 0) this.pendingResolves.splice(idx, 1);
        reject(new TimeoutError(`SubprocessRunner step timed out after ${this.opts.stepTimeoutMs ?? 5000}ms`));
      }, this.opts.stepTimeoutMs ?? 5000);
      this.pendingResolves.push({ resolve, reject, timer });
      this.child!.stdin.write(JSON.stringify(record) + "\n");
    });
    let parsed: unknown;
    try {
      parsed = JSON.parse(line);
    } catch (err) {
      throw new Error(
        `SubprocessRunner: child wrote malformed JSON: ${line.slice(0, 200)}`,
      );
    }
    if (typeof parsed !== "object" || parsed === null) {
      throw new Error(`SubprocessRunner: child snapshot is not an object`);
    }
    const p = parsed as { timestampUs?: unknown; outputs?: unknown };
    if (typeof p.timestampUs !== "number" || typeof p.outputs !== "object" || p.outputs === null) {
      throw new Error(
        `SubprocessRunner: child snapshot missing 'timestampUs' or 'outputs'`,
      );
    }
    return {
      timestampUs: p.timestampUs,
      outputs: p.outputs as { [k: string]: number | boolean | string },
    };
  }

  /** Tear down the child and release resources. Idempotent. */
  async dispose(): Promise<void> {
    await this.kill();
  }

  // ─── Internal ─────────────────────────────────────────────────────

  private spawn(): void {
    const child = spawn(this.opts.cmd, [...(this.opts.args ?? [])], {
      stdio: ["pipe", "pipe", "pipe"],
    });
    this.child = child;
    this.outputBuffer = "";
    this.stderrBuffer = "";
    this.exitInfo = null;
    this.pendingResolves = [];

    child.stdout.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => {
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
    child.stderr.on("data", (chunk: string) => {
      this.stderrBuffer += chunk;
    });

    child.on("exit", (code) => {
      this.exitInfo = { code, stderr: this.stderrBuffer };
      // Reject any pending step with the exit info.
      for (const p of this.pendingResolves) {
        clearTimeout(p.timer);
        p.reject(
          new Error(
            `SubprocessRunner: child exited with code ${code}\nstderr:\n${this.stderrBuffer}`,
          ),
        );
      }
      this.pendingResolves = [];
      this.child = null;
    });
  }

  private async kill(): Promise<void> {
    const child = this.child;
    if (child === null) return;
    return new Promise<void>((resolve) => {
      child.once("exit", () => resolve());
      child.kill();
    });
  }
}

export class TimeoutError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "TimeoutError";
  }
}
