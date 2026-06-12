import { describe, it, expect } from "vitest";
import {
  compareSnapshots,
  renderHtmlReport,
  replaySequence,
  type LogSource,
  type Record_,
  type Runner,
  type Snapshot,
} from "../src/harness/replay.js";

/**
 * Phase Q3 / Paso 1 — diff-testing harness scaffold.
 *
 * The harness's value lives in plugging real C++ / Rust runners +
 * real ArduPilot logs. This test exercises the orchestration with
 * two trivial in-memory runners (one "oracle", one "biased") so the
 * comparator, replay loop, and HTML report all get covered without
 * any external infra.
 *
 * What's being verified:
 *   1) compareSnapshots respects per-field epsilon
 *   2) replaySequence drives both runners deterministically
 *   3) renderHtmlReport produces well-formed HTML with failure rows
 */

/** Trivial LowPass filter: `y[n] = (1-α) * y[n-1] + α * x[n]`. */
class LowPassRunner implements Runner {
  private y: number;
  constructor(private readonly alpha: number, initial = 0) {
    this.y = initial;
  }
  async reset(): Promise<void> {
    this.y = 0;
  }
  async step(record: Record_): Promise<Snapshot> {
    const x = record.fields.x as number;
    this.y = (1 - this.alpha) * this.y + this.alpha * x;
    return {
      timestampUs: record.timestampUs,
      outputs: { y: this.y },
    };
  }
}

/** Static input source: pre-baked sequence of (t, x) records. */
class FixedSource implements LogSource {
  constructor(private readonly recs: readonly Record_[]) {}
  async *records(): AsyncIterable<Record_> {
    for (const r of this.recs) yield r;
  }
}

describe("replay harness — comparator", () => {
  it("passes when both snapshots agree within abs tolerance", () => {
    const o: Snapshot = { timestampUs: 0, outputs: { y: 1.0 } };
    const c: Snapshot = { timestampUs: 0, outputs: { y: 1.0 + 1e-12 } };
    const d = compareSnapshots(o, c, { y: { kind: "absolute", eps: 1e-9 } });
    expect(d.allPassed).toBe(true);
    expect(d.failures).toEqual([]);
  });

  it("fails when abs delta exceeds tolerance", () => {
    const o: Snapshot = { timestampUs: 0, outputs: { y: 1.0 } };
    const c: Snapshot = { timestampUs: 0, outputs: { y: 1.5 } };
    const d = compareSnapshots(o, c, { y: { kind: "absolute", eps: 1e-3 } });
    expect(d.allPassed).toBe(false);
    expect(d.failures).toHaveLength(1);
    expect(d.failures[0]!.delta).toBeCloseTo(0.5, 6);
  });

  it("relative tolerance scales with magnitude", () => {
    // 1% relative tolerance: 1000 vs 1005 → 5/1005 ≈ 0.5%, passes
    const o: Snapshot = { timestampUs: 0, outputs: { y: 1000 } };
    const c: Snapshot = { timestampUs: 0, outputs: { y: 1005 } };
    const d = compareSnapshots(o, c, { y: { kind: "relative", eps: 0.01 } });
    expect(d.allPassed).toBe(true);
  });

  it("reports MISSING when a field is on one side only", () => {
    const o: Snapshot = { timestampUs: 0, outputs: { y: 1.0, z: 2.0 } };
    const c: Snapshot = { timestampUs: 0, outputs: { y: 1.0 } };
    const d = compareSnapshots(o, c);
    expect(d.allPassed).toBe(false);
    const zDiff = d.failures.find((f) => f.field === "z")!;
    expect(zDiff.candidate).toBe("MISSING");
  });

  it("wildcard '*' applies to fields not explicitly named", () => {
    const o: Snapshot = { timestampUs: 0, outputs: { a: 1.0, b: 2.0 } };
    const c: Snapshot = { timestampUs: 0, outputs: { a: 1.0001, b: 2.0001 } };
    const d = compareSnapshots(o, c, { "*": { kind: "absolute", eps: 0.001 } });
    expect(d.allPassed).toBe(true);
  });
});

describe("replay harness — full sequence", () => {
  it("two identical LowPassRunners agree on every step", async () => {
    const records: Record_[] = Array.from({ length: 16 }, (_, i) => ({
      timestampUs: i * 1000,
      fields: { x: Math.sin(i * 0.4) },
    }));
    const source = new FixedSource(records);
    const oracle = new LowPassRunner(0.2);
    const candidate = new LowPassRunner(0.2);

    const diffs: Awaited<ReturnType<typeof compareSnapshots>>[] = [];
    for await (const d of replaySequence(source, oracle, candidate, {
      y: { kind: "absolute", eps: 1e-9 },
    })) {
      diffs.push(d);
    }
    expect(diffs).toHaveLength(16);
    expect(diffs.every((d) => d.allPassed)).toBe(true);
  });

  it("biased LowPass diverges, comparator catches it", async () => {
    const records: Record_[] = Array.from({ length: 8 }, (_, i) => ({
      timestampUs: i * 1000,
      fields: { x: 1.0 }, // step input
    }));
    const source = new FixedSource(records);
    const oracle = new LowPassRunner(0.5);
    const biased = new LowPassRunner(0.6); // wrong alpha

    const diffs: Awaited<ReturnType<typeof compareSnapshots>>[] = [];
    for await (const d of replaySequence(source, oracle, biased, {
      y: { kind: "absolute", eps: 0.01 },
    })) {
      diffs.push(d);
    }
    // Step 1: oracle y = 0.5, biased y = 0.6 — already diverges by 0.1.
    expect(diffs.some((d) => !d.allPassed)).toBe(true);
  });
});

describe("replay harness — HTML report", () => {
  it("renders a PASS banner when all diffs agree", () => {
    const html = renderHtmlReport(
      "LowPass",
      [
        { timestampUs: 0, fields: [], failures: [], allPassed: true },
        { timestampUs: 1000, fields: [], failures: [], allPassed: true },
      ],
      { oracle: "C++ AP_LowPass", candidate: "ontodls Rust", logSource: "synthetic" },
    );
    expect(html).toContain("PASS");
    expect(html).toContain("2/2 steps within tolerance");
    expect(html).toContain("None — all steps within tolerance.");
  });

  it("renders a FAIL banner and failing-row table when any diff fails", () => {
    const html = renderHtmlReport(
      "LowPass",
      [
        {
          timestampUs: 1000,
          fields: [
            {
              field: "y",
              oracle: 1.0,
              candidate: 1.5,
              delta: 0.5,
              tolerance: { kind: "absolute", eps: 0.001 },
              passed: false,
            },
          ],
          failures: [
            {
              field: "y",
              oracle: 1.0,
              candidate: 1.5,
              delta: 0.5,
              tolerance: { kind: "absolute", eps: 0.001 },
              passed: false,
            },
          ],
          allPassed: false,
        },
      ],
      { oracle: "C++", candidate: "Rust", logSource: "synth" },
    );
    expect(html).toContain("FAIL");
    expect(html).toContain(">y<");
    expect(html).toContain("5.000e-1"); // delta in scientific notation
    expect(html).toContain("abs ≤ 0.001");
  });
});
