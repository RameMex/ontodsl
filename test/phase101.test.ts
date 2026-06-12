import { describe, it, expect, beforeAll } from "vitest";
import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  rmSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { runCli, type CliStreams } from "../src/cli/gen.js";

/**
 * Phase 10.1 CLI tests.
 *
 * We call `runCli(argv, streams)` IN-PROCESS rather than spawning a
 * subprocess. Each test creates an in-memory writer for stdout and
 * stderr, runs the CLI, and asserts on exit code + captured output.
 *
 * The CLI's effects on the file system are real — writes to a temp
 * dir per test — so the file output assertions exercise the full
 * happy path without faking I/O.
 *
 * The previous draft used `execSync` to spawn `npx tsx`; each
 * invocation cost ~20s of cold-start and the suite was unrunnable.
 * In-process tests run in single-digit seconds total.
 */

/**
 * Capture writer that accumulates everything written into a string.
 * Vitest's toEqual works on strings; no need for streams or buffers.
 */
class StringWriter {
  buf = "";
  write(s: string): boolean {
    this.buf += s;
    return true;
  }
}

function makeStreams(): { streams: CliStreams; out: StringWriter; err: StringWriter } {
  const out = new StringWriter();
  const err = new StringWriter();
  return { streams: { stdout: out, stderr: err }, out, err };
}

let tmpRoot: string;
let goodOnto: string;
let badParseOnto: string;
let badSemOnto: string;

beforeAll(() => {
  tmpRoot = join(tmpdir(), `onto-cli-test-${Date.now()}`);
  mkdirSync(tmpRoot, { recursive: true });

  goodOnto = join(tmpRoot, "good.onto");
  writeFileSync(
    goodOnto,
    `schema "onto/0.1"; namespace t;
kind Customer {
  identity: email;
  property email: String;
  property age: Integer;
  invariants { self.age >= 18; }
}`,
    "utf8",
  );

  // Missing closing brace.
  badParseOnto = join(tmpRoot, "badparse.onto");
  writeFileSync(badParseOnto, `schema "onto/0.1"; namespace t;\nkind X {`, "utf8");

  // Semantic error: identity references a nonexistent property (S3).
  // The file parses fine; only validateSemantics flags it.
  badSemOnto = join(tmpRoot, "badsem.onto");
  writeFileSync(
    badSemOnto,
    `schema "onto/0.1"; namespace t;
kind X {
  identity: ghostProp;
  property realProp: String;
}`,
    "utf8",
  );
});

describe("phase10.1 — argument parsing", () => {
  it("--help prints usage and exits 0", async () => {
    const { streams, out } = makeStreams();
    const code = await runCli(["--help"], streams);
    expect(code).toBe(0);
    expect(out.buf).toMatch(/usage:/);
    expect(out.buf).toMatch(/--verify/);
  });

  it("missing input file fails with exit 1", async () => {
    const { streams, err } = makeStreams();
    const code = await runCli(["--out", "/tmp/whatever"], streams);
    expect(code).toBe(1);
    expect(err.buf).toMatch(/missing input/);
  });

  it("missing --out fails with exit 1", async () => {
    const { streams, err } = makeStreams();
    const code = await runCli([goodOnto], streams);
    expect(code).toBe(1);
    expect(err.buf).toMatch(/missing --out/);
  });

  it("unknown flag fails with exit 1", async () => {
    const { streams, err } = makeStreams();
    const code = await runCli([goodOnto, "--out", tmpRoot, "--bogus"], streams);
    expect(code).toBe(1);
    expect(err.buf).toMatch(/unknown flag/);
  });

  it("--out= equals form is accepted", async () => {
    const out = join(tmpRoot, "out-eq");
    rmSync(out, { recursive: true, force: true });
    const { streams } = makeStreams();
    const code = await runCli([goodOnto, `--out=${out}`], streams);
    expect(code).toBe(0);
    expect(existsSync(join(out, "good.ts"))).toBe(true);
  });
});

describe("phase10.1 — default output", () => {
  it("writes <basename>.ts to --out and exits 0", async () => {
    const out = join(tmpRoot, "out-default");
    rmSync(out, { recursive: true, force: true });
    const { streams, out: stdout } = makeStreams();
    const code = await runCli([goodOnto, "--out", out], streams);
    expect(code).toBe(0);
    expect(stdout.buf).toMatch(/wrote .*good\.ts/);
    const tsContent = readFileSync(join(out, "good.ts"), "utf8");
    expect(tsContent).toMatch(/AUTO-GENERATED/);
    expect(tsContent).toMatch(/export type CustomerId/);
  });

  it("does NOT write .md when --diagram is omitted", async () => {
    const out = join(tmpRoot, "out-no-md");
    rmSync(out, { recursive: true, force: true });
    const { streams } = makeStreams();
    await runCli([goodOnto, "--out", out], streams);
    expect(existsSync(join(out, "good.md"))).toBe(false);
  });

  it("does NOT write .flow.json when --react-flow is omitted", async () => {
    const out = join(tmpRoot, "out-no-json");
    rmSync(out, { recursive: true, force: true });
    const { streams } = makeStreams();
    await runCli([goodOnto, "--out", out], streams);
    expect(existsSync(join(out, "good.flow.json"))).toBe(false);
  });
});

describe("phase10.1 — auxiliary outputs", () => {
  it("--diagram writes <basename>.md with mermaid fences", async () => {
    const out = join(tmpRoot, "out-md");
    rmSync(out, { recursive: true, force: true });
    const { streams } = makeStreams();
    const code = await runCli([goodOnto, "--out", out, "--diagram"], streams);
    expect(code).toBe(0);
    const md = readFileSync(join(out, "good.md"), "utf8");
    expect(md).toMatch(/^# good — Onto DSL diagrams/);
    expect(md).toMatch(/```mermaid/);
    expect(md).toMatch(/classDiagram/);
    expect(md).toMatch(/flowchart/);
  });

  it("--react-flow writes valid JSON with nodes and edges", async () => {
    const out = join(tmpRoot, "out-rf");
    rmSync(out, { recursive: true, force: true });
    const { streams } = makeStreams();
    const code = await runCli([goodOnto, "--out", out, "--react-flow"], streams);
    expect(code).toBe(0);
    const json = JSON.parse(readFileSync(join(out, "good.flow.json"), "utf8"));
    expect(json).toHaveProperty("nodes");
    expect(json).toHaveProperty("edges");
    expect(Array.isArray(json.nodes)).toBe(true);
    expect(json.nodes.length).toBeGreaterThan(0);
    const customerNode = json.nodes.find((n: { id: string }) => n.id === "Customer");
    expect(customerNode).toBeDefined();
  });

  it("multiple aux flags can combine", async () => {
    const out = join(tmpRoot, "out-all");
    rmSync(out, { recursive: true, force: true });
    const { streams } = makeStreams();
    const code = await runCli(
      [goodOnto, "--out", out, "--diagram", "--react-flow"],
      streams,
    );
    expect(code).toBe(0);
    expect(existsSync(join(out, "good.ts"))).toBe(true);
    expect(existsSync(join(out, "good.md"))).toBe(true);
    expect(existsSync(join(out, "good.flow.json"))).toBe(true);
  });
});

describe("phase10.1 — error handling", () => {
  it("parse-stage error exits 2 with diagnostic; no .ts written", async () => {
    const out = join(tmpRoot, "out-parse");
    rmSync(out, { recursive: true, force: true });
    const { streams, err } = makeStreams();
    const code = await runCli([badParseOnto, "--out", out], streams);
    expect(code).toBe(2);
    expect(err.buf).toMatch(/diagnostics in/);
    expect(existsSync(join(out, "badparse.ts"))).toBe(false);
  });

  it("semantic-stage error exits 2 with diagnostic", async () => {
    const out = join(tmpRoot, "out-sem");
    rmSync(out, { recursive: true, force: true });
    const { streams, err } = makeStreams();
    const code = await runCli([badSemOnto, "--out", out], streams);
    expect(code).toBe(2);
    expect(err.buf).toMatch(/diagnostics in/);
    expect(err.buf).toMatch(/\[S3\]/);
    // Location is best-effort — not every diagnostic carries one
    // (S3 fires from the identity sub-node which doesn't always
    // have a populated location). The CLI just omits the suffix.
    expect(existsSync(join(out, "badsem.ts"))).toBe(false);
  });
});

describe("phase10.1 — --verify (Z3)", () => {
  it("--verify on a clean file passes with exit 0", async () => {
    const out = join(tmpRoot, "out-verify-ok");
    rmSync(out, { recursive: true, force: true });
    const { streams, out: stdout } = makeStreams();
    const code = await runCli([goodOnto, "--out", out, "--verify"], streams);
    expect(code).toBe(0);
    expect(stdout.buf).toMatch(/running Z3 verification/);
    expect(existsSync(join(out, "good.ts"))).toBe(true);
  }, 30_000);
});
