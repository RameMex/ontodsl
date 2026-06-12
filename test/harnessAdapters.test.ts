import { describe, it, expect } from "vitest";
import {
  mkdtempSync,
  rmSync,
  writeFileSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  JsonLineLogSource,
  SubprocessRunner,
  TimeoutError,
} from "../src/harness/adapters.js";
import { replaySequence } from "../src/harness/replay.js";

/**
 * Phase Q3 / Paso 1 — adapter integration tests.
 *
 * Verifies the JsonLine source streams cleanly + the subprocess
 * runner spawns/communicates/dies gracefully. Uses inline Node
 * scripts as the spawned "binary" so the test is self-contained.
 */

describe("JsonLineLogSource", () => {
  it("streams a 3-line .jsonl file in order", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_jsonl_"));
    try {
      const fp = join(dir, "log.jsonl");
      writeFileSync(
        fp,
        [
          `{"timestampUs": 1000, "x": 1.0, "tag": "a"}`,
          `{"timestampUs": 2000, "x": 2.5, "tag": "b"}`,
          ``, // blank line — should be skipped
          `{"timestampUs": 3000, "x": -0.5, "tag": "c"}`,
        ].join("\n"),
        "utf8",
      );
      const src = new JsonLineLogSource({ filePath: fp });
      const collected: any[] = [];
      for await (const r of src.records()) collected.push(r);
      expect(collected).toHaveLength(3);
      expect(collected[0]).toEqual({ timestampUs: 1000, fields: { x: 1.0, tag: "a" } });
      expect(collected[2]).toEqual({ timestampUs: 3000, fields: { x: -0.5, tag: "c" } });
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });

  it("respects includeFields whitelist", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_jsonl_"));
    try {
      const fp = join(dir, "log.jsonl");
      writeFileSync(
        fp,
        `{"timestampUs": 100, "want": 1.0, "drop": 99.0, "also_drop": "x"}`,
        "utf8",
      );
      const src = new JsonLineLogSource({ filePath: fp, includeFields: ["want"] });
      const collected: any[] = [];
      for await (const r of src.records()) collected.push(r);
      expect(collected[0].fields).toEqual({ want: 1.0 });
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });

  it("throws a descriptive error on malformed JSON", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_jsonl_"));
    try {
      const fp = join(dir, "bad.jsonl");
      writeFileSync(
        fp,
        [
          `{"timestampUs": 100, "x": 1.0}`,
          `not json`,
        ].join("\n"),
        "utf8",
      );
      const src = new JsonLineLogSource({ filePath: fp });
      let caught: Error | null = null;
      try {
        for await (const _ of src.records()) {
          // consume
        }
      } catch (err) {
        caught = err as Error;
      }
      expect(caught).not.toBeNull();
      expect(caught!.message).toMatch(/bad\.jsonl:2/);
      expect(caught!.message).toMatch(/invalid JSON/);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });

  it("custom timestampField works", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_jsonl_"));
    try {
      const fp = join(dir, "log.jsonl");
      writeFileSync(
        fp,
        `{"t_us": 5000, "x": 1.0}`,
        "utf8",
      );
      const src = new JsonLineLogSource({ filePath: fp, timestampField: "t_us" });
      const out: any[] = [];
      for await (const r of src.records()) out.push(r);
      expect(out[0].timestampUs).toBe(5000);
      expect(out[0].fields).toEqual({ x: 1.0 });
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("SubprocessRunner — node-script child", () => {
  // The "binary" we spawn is just node running an inline script.
  // For each input line, the child computes y = x * 2 and replies.
  function writeChildScript(dir: string): string {
    const scriptPath = join(dir, "child.mjs");
    writeFileSync(
      scriptPath,
      `
import readline from "node:readline";
const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
for await (const line of rl) {
  const rec = JSON.parse(line);
  const y = (rec.fields.x ?? 0) * 2;
  process.stdout.write(JSON.stringify({
    timestampUs: rec.timestampUs,
    outputs: { y }
  }) + "\\n");
}
`,
      "utf8",
    );
    return scriptPath;
  }

  it("spawns, processes 3 records, returns matching snapshots", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_subp_"));
    try {
      const script = writeChildScript(dir);
      const runner = new SubprocessRunner({ cmd: "node", args: [script] });
      await runner.reset();
      const s1 = await runner.step({ timestampUs: 1, fields: { x: 3 } });
      const s2 = await runner.step({ timestampUs: 2, fields: { x: 4 } });
      const s3 = await runner.step({ timestampUs: 3, fields: { x: 5 } });
      expect(s1.outputs.y).toBe(6);
      expect(s2.outputs.y).toBe(8);
      expect(s3.outputs.y).toBe(10);
      await runner.dispose();
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  }, 30_000);

  it("times out when the child doesn't respond", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_subp_"));
    try {
      const scriptPath = join(dir, "silent.mjs");
      writeFileSync(
        scriptPath,
        `setInterval(() => {}, 1000);`, // never reads stdin
        "utf8",
      );
      const runner = new SubprocessRunner({
        cmd: "node",
        args: [scriptPath],
        stepTimeoutMs: 200,
      });
      await runner.reset();
      await expect(
        runner.step({ timestampUs: 1, fields: { x: 0 } }),
      ).rejects.toThrow(TimeoutError);
      await runner.dispose();
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  }, 10_000);
});

describe("end-to-end replay through adapters", () => {
  it("JsonLine → two subprocess runners → comparator → all agree", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_e2e_"));
    try {
      // Same child computes y = x * 2; both oracle and candidate are
      // identical → comparator should see zero failures.
      const childScript = join(dir, "doubler.mjs");
      writeFileSync(
        childScript,
        `
import readline from "node:readline";
const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
for await (const line of rl) {
  const rec = JSON.parse(line);
  process.stdout.write(JSON.stringify({
    timestampUs: rec.timestampUs,
    outputs: { y: (rec.fields.x ?? 0) * 2 }
  }) + "\\n");
}
`,
        "utf8",
      );

      // 5 input records.
      const logPath = join(dir, "input.jsonl");
      writeFileSync(
        logPath,
        Array.from({ length: 5 }, (_, i) =>
          JSON.stringify({ timestampUs: i * 1000, x: i + 1 }),
        ).join("\n"),
        "utf8",
      );

      const source = new JsonLineLogSource({ filePath: logPath });
      const oracle = new SubprocessRunner({ cmd: "node", args: [childScript] });
      const candidate = new SubprocessRunner({ cmd: "node", args: [childScript] });

      try {
        const diffs: any[] = [];
        for await (const d of replaySequence(source, oracle, candidate, {
          y: { kind: "absolute", eps: 1e-9 },
        })) {
          diffs.push(d);
        }
        expect(diffs).toHaveLength(5);
        expect(diffs.every((d) => d.allPassed)).toBe(true);
        // Sanity-check one value: y at record 3 (x=4) should be 8.
        expect(diffs[3].fields[0].oracle).toBe(8);
      } finally {
        await oracle.dispose();
        await candidate.dispose();
      }
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  }, 30_000);
});
