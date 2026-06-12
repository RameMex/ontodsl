import { describe, it, expect } from "vitest";
import { runExplain, getExplainEntry, listKnownCodes } from "../src/cli/explain.js";

function makeStreams() {
  let stdout = "";
  let stderr = "";
  return {
    streams: {
      stdout: { write(s: string) { stdout += s; } },
      stderr: { write(s: string) { stderr += s; } },
    },
    get stdout() { return stdout; },
    get stderr() { return stderr; },
  };
}

describe("cli explain command", () => {
  it("lists known codes when called with no argument", () => {
    const cap = makeStreams();
    const code = runExplain([], cap.streams);
    expect(code).toBe(1);
    expect(cap.stderr).toMatch(/usage: ontodsl explain/);
    expect(cap.stderr).toMatch(/W31/);
  });

  it("prints the manual entry for W31", () => {
    const cap = makeStreams();
    const code = runExplain(["W31"], cap.streams);
    expect(code).toBe(0);
    expect(cap.stdout).toMatch(/W31 — Integer ↔ Real comparison/);
    expect(cap.stdout).toMatch(/fix:/);
  });

  it("is case-insensitive on the code argument", () => {
    const cap = makeStreams();
    expect(runExplain(["s29"], cap.streams)).toBe(0);
    expect(cap.stdout).toMatch(/S29 — Override strengthens precondition/);
  });

  it("returns 1 with a helpful message on unknown code", () => {
    const cap = makeStreams();
    expect(runExplain(["S999"], cap.streams)).toBe(1);
    expect(cap.stderr).toMatch(/no manual entry for 'S999'/);
    expect(cap.stderr).toMatch(/documented codes/);
  });

  it("exposes the catalog programmatically for AI feedback loops", () => {
    const entry = getExplainEntry("W31");
    expect(entry).toBeDefined();
    expect(entry!.category).toBe("advisory");
    expect(entry!.fix.length).toBeGreaterThan(0);
  });

  it("known codes list is sorted, non-empty, includes the recent W31", () => {
    const codes = listKnownCodes();
    expect(codes).toContain("W31");
    expect(codes).toContain("S29");
    const sorted = [...codes].sort();
    expect(codes).toEqual(sorted);
  });
});
