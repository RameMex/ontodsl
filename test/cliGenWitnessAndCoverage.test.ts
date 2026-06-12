import { describe, it, expect } from "vitest";
import {
  mkdtempSync,
  rmSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { runCli } from "../src/cli/gen.js";

/**
 * Integration tests for the new Q3 CLI subcommands:
 *   - `ontodsl gen-witness <file> --out <dir>`  → complete crate
 *   - `ontodsl coverage <file> [--json [--out path]]` → metrics
 */

function makeStreams() {
  let stdout = "";
  let stderr = "";
  return {
    streams: {
      stdout: { write: (s: string) => { stdout += s; return true; } },
      stderr: { write: (s: string) => { stderr += s; return true; } },
    },
    get stdout() { return stdout; },
    get stderr() { return stderr; },
  };
}

const SAMPLE_ONTO = `schema "onto/0.1";
namespace q3test;

kind Sensor {
  identity: id;
  property id: String;
  property state: Array<Real, 4>;
  property voltage: Real;
  invariants {
    self.state->forAll(v | v.isFinite());
    self.voltage >= 0.0;
  }
  event read(v: Real) {
    pre: v.isFinite();
    pre: v >= 0.0;
    modifies: self.voltage;
    effects: HardwareRead;
    writes: voltage;
  }
}
`;

describe("ontodsl gen-witness", () => {
  it("writes Cargo.toml + src/lib.rs with witness tests", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_cli_gw_"));
    const ontoPath = join(dir, "sample.onto");
    writeFileSync(ontoPath, SAMPLE_ONTO, "utf8");
    const out = join(dir, "out");
    const s = makeStreams();
    const code = await runCli(["gen-witness", ontoPath, "--out", out], s.streams);
    try {
      expect(code).toBe(0);
      expect(existsSync(join(out, "Cargo.toml"))).toBe(true);
      expect(existsSync(join(out, "src", "lib.rs"))).toBe(true);
      const lib = readFileSync(join(out, "src", "lib.rs"), "utf8");
      // Contains both runtime and witness module:
      expect(lib).toContain("pub fn validate");
      expect(lib).toContain("mod contract_tests");
      expect(lib).toContain("inv_state_finite_violated_by_nan");
      // stdout reports the witness count
      expect(s.stdout).toMatch(/emitted \d+ contract-witness tests/);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });

  it("fails with exit code 1 on missing args", async () => {
    const s = makeStreams();
    const code = await runCli(["gen-witness"], s.streams);
    expect(code).toBe(1);
    expect(s.stderr).toContain("missing input");
  });

  it("fails with exit code 2 on parse errors in the input .onto", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_cli_gw_"));
    const ontoPath = join(dir, "bad.onto");
    writeFileSync(ontoPath, "this is not valid onto syntax", "utf8");
    const s = makeStreams();
    const code = await runCli(["gen-witness", ontoPath, "--out", join(dir, "out")], s.streams);
    try {
      expect(code).toBe(2);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("ontodsl coverage", () => {
  it("prints a human-readable table by default", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_cli_cov_"));
    const ontoPath = join(dir, "sample.onto");
    writeFileSync(ontoPath, SAMPLE_ONTO, "utf8");
    const s = makeStreams();
    const code = await runCli(["coverage", ontoPath], s.streams);
    try {
      expect(code).toBe(0);
      expect(s.stdout).toContain("coverage report");
      expect(s.stdout).toContain("Sensor");
      expect(s.stdout).toContain("kind");
      // Table header is present
      expect(s.stdout).toMatch(/invs\s+evts\s+pre\s+post\s+effs\s+mods\s+wit/);
      // Sensor has 2 invariants, 1 event, 1 with pre, 0 with post
      expect(s.stdout).toMatch(/Sensor\s+kind\s+2\s+1\s+1\s+0/);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });

  it("emits JSON to stdout with --json", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_cli_cov_"));
    const ontoPath = join(dir, "sample.onto");
    writeFileSync(ontoPath, SAMPLE_ONTO, "utf8");
    const s = makeStreams();
    const code = await runCli(["coverage", ontoPath, "--json"], s.streams);
    try {
      expect(code).toBe(0);
      const json = JSON.parse(s.stdout);
      expect(json.file).toBe(ontoPath);
      expect(json.totals.types).toBe(1);
      expect(json.totals.invariants).toBe(2);
      expect(json.totals.events).toBe(1);
      expect(json.totals.witness_tests).toBeGreaterThan(0);
      const sensor = json.types.find((t: any) => t.name === "Sensor");
      expect(sensor).toBeDefined();
      expect(sensor.invariants).toBe(2);
      expect(sensor.events).toBe(1);
      expect(sensor.events_with_effects).toBe(1);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });

  it("writes JSON to file with --out", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_cli_cov_"));
    const ontoPath = join(dir, "sample.onto");
    writeFileSync(ontoPath, SAMPLE_ONTO, "utf8");
    const jsonOut = join(dir, "report.json");
    const s = makeStreams();
    const code = await runCli(
      ["coverage", ontoPath, "--out", jsonOut],
      s.streams,
    );
    try {
      expect(code).toBe(0);
      expect(existsSync(jsonOut)).toBe(true);
      const written = JSON.parse(readFileSync(jsonOut, "utf8"));
      expect(written.totals.invariants).toBe(2);
      expect(s.stdout).toContain(`wrote ${jsonOut}`);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });

  it("witness_tests count matches what gen-witness emits", async () => {
    // Cross-check: coverage's witness_tests total should equal the
    // count gen-witness reports for the same .onto.
    const dir = mkdtempSync(join(tmpdir(), "ontodls_cli_cov_"));
    const ontoPath = join(dir, "sample.onto");
    writeFileSync(ontoPath, SAMPLE_ONTO, "utf8");
    const sCov = makeStreams();
    await runCli(["coverage", ontoPath, "--json"], sCov.streams);
    const cov = JSON.parse(sCov.stdout);
    const sGen = makeStreams();
    await runCli(["gen-witness", ontoPath, "--out", join(dir, "out")], sGen.streams);
    try {
      const m = sGen.stdout.match(/emitted (\d+) contract-witness tests/);
      expect(m).not.toBeNull();
      expect(parseInt(m![1]!, 10)).toBe(cov.totals.witness_tests);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });
});
