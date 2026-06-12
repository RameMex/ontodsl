import { describe, it, expect } from "vitest";
import {
  mkdtempSync,
  rmSync,
  writeFileSync,
  readFileSync,
  existsSync,
  mkdirSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  buildTraceMatrix,
  serializeTraceMatrix,
} from "../src/qualification/trace.js";
import { runCli } from "../src/cli/gen.js";

/**
 * Phase Q6 / Paso 6 day 2 — trace + binder tests.
 *
 * The trace builder runs against a synthetic test fixture (so the
 * test stays hermetic — not coupled to the actual test/ count, which
 * shifts as features land). The binder runs against a real .onto
 * fixture from examples/.
 */

function inTempRoot(
  setup: (root: string) => void,
  body: (root: string) => void,
) {
  const dir = mkdtempSync(join(tmpdir(), "ontodls_q6d2_"));
  try {
    setup(dir);
    body(dir);
  } finally {
    if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  }
}

describe("buildTraceMatrix — synthetic fixture", () => {
  it("extracts describe / it pairs from a hand-written test file", () => {
    inTempRoot(
      (root) => {
        mkdirSync(join(root, "test"), { recursive: true });
        writeFileSync(
          join(root, "test", "sample.test.ts"),
          `import { something } from "../src/codegen-rust/index.js";
import { describe, it } from "vitest";
describe("featureA", () => {
  it("does the first thing", () => {});
  it("does the second thing", () => {});
});
describe("featureB", () => {
  it("does the third thing", () => {});
});
`,
          "utf8",
        );
      },
      (root) => {
        const m = buildTraceMatrix({ rootDir: root });
        expect(m.features).toHaveLength(1);
        expect(m.features[0]!.name).toBe("sample");
        expect(m.features[0]!.tests.map((t) => t.it)).toEqual([
          "does the first thing",
          "does the second thing",
          "does the third thing",
        ]);
        // Tests grouped under their describe.
        const describeFor = m.features[0]!.tests.find(
          (t) => t.it === "does the third thing",
        )!;
        expect(describeFor.describe).toBe("featureB");
      },
    );
  });

  it("extracts source imports relative to repo root", () => {
    inTempRoot(
      (root) => {
        mkdirSync(join(root, "test"), { recursive: true });
        mkdirSync(join(root, "src", "module"), { recursive: true });
        writeFileSync(
          join(root, "test", "sample.test.ts"),
          `import { x } from "../src/module/foo.js";
import { y } from "../src/module/bar.js";
import { z } from "../src/qualification/trace.js";
describe("d", () => { it("t", () => {}); });
`,
          "utf8",
        );
      },
      (root) => {
        const m = buildTraceMatrix({ rootDir: root });
        const sources = m.features[0]!.sourceFiles;
        expect(sources).toContain("src/module/foo.ts");
        expect(sources).toContain("src/module/bar.ts");
        expect(sources).toContain("src/qualification/trace.ts");
      },
    );
  });

  it("marks template-literal test names as parameterized", () => {
    inTempRoot(
      (root) => {
        mkdirSync(join(root, "test"), { recursive: true });
        writeFileSync(
          join(root, "test", "param.test.ts"),
          'describe("d", () => { it(`runs for ${name}`, () => {}); it("static", () => {}); });',
          "utf8",
        );
      },
      (root) => {
        const m = buildTraceMatrix({ rootDir: root });
        const paramTest = m.features[0]!.tests.find((t) => t.parameterized);
        expect(paramTest).toBeDefined();
        expect(paramTest!.it).toMatch(/parameterized/);
        const staticTest = m.features[0]!.tests.find((t) => !t.parameterized);
        expect(staticTest!.it).toBe("static");
      },
    );
  });

  it("serializes deterministically across consecutive runs", () => {
    inTempRoot(
      (root) => {
        mkdirSync(join(root, "test"), { recursive: true });
        writeFileSync(
          join(root, "test", "a.test.ts"),
          `describe("a", () => { it("t1", () => {}); });`,
          "utf8",
        );
        writeFileSync(
          join(root, "test", "b.test.ts"),
          `describe("b", () => { it("t2", () => {}); });`,
          "utf8",
        );
      },
      (root) => {
        const j1 = serializeTraceMatrix(buildTraceMatrix({ rootDir: root }));
        const j2 = serializeTraceMatrix(buildTraceMatrix({ rootDir: root }));
        expect(j1).toBe(j2);
      },
    );
  });

  it("works against the real test/ directory", () => {
    // Smoke test — just verifies the function doesn't throw on the
    // live test corpus and produces a plausible result.
    const m = buildTraceMatrix();
    expect(m.summary.features).toBeGreaterThan(20);
    expect(m.summary.tests).toBeGreaterThan(200);
    expect(m.summary.sourceFiles).toBeGreaterThan(0);
  });
});

describe("CLI: ontodsl trace", () => {
  function streams() {
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

  it("emits valid JSON to stdout by default", async () => {
    const s = streams();
    const code = await runCli(["trace"], s.streams);
    expect(code).toBe(0);
    const parsed = JSON.parse(s.stdout);
    expect(parsed.schemaVersion).toBe("ontodls-trace/1");
    expect(Array.isArray(parsed.features)).toBe(true);
  });

  it("--out writes JSON to file", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_trace_cli_"));
    try {
      const outPath = join(dir, "trace.json");
      const s = streams();
      const code = await runCli(["trace", "--out", outPath], s.streams);
      expect(code).toBe(0);
      expect(existsSync(outPath)).toBe(true);
      const written = JSON.parse(readFileSync(outPath, "utf8"));
      expect(written.schemaVersion).toBe("ontodls-trace/1");
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("CLI: ontodsl binder — end-to-end", () => {
  function streams() {
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

  it("writes all 4 audit artefacts + generated code", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_binder_"));
    const ontoPath = join(dir, "sample.onto");
    writeFileSync(
      ontoPath,
      `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real;
  invariants {
    self.voltage >= 0.0;
  }
}
`,
      "utf8",
    );
    const outDir = join(dir, "binder");
    const s = streams();
    try {
      const code = await runCli(
        ["binder", ontoPath, "--out", outDir],
        s.streams,
      );
      expect(code).toBe(0);
      // Audit artefacts
      expect(existsSync(join(outDir, "manifest.json"))).toBe(true);
      expect(existsSync(join(outDir, "trace.json"))).toBe(true);
      expect(existsSync(join(outDir, "coverage.json"))).toBe(true);
      expect(existsSync(join(outDir, "README.md"))).toBe(true);
      // Generated code (default: all 3 targets)
      expect(existsSync(join(outDir, "Cargo.toml"))).toBe(true);
      expect(existsSync(join(outDir, "src", "lib.rs"))).toBe(true);
      expect(existsSync(join(outDir, "sample.h"))).toBe(true);
      expect(existsSync(join(outDir, "sample.c"))).toBe(true);
      expect(existsSync(join(outDir, "sample.ts"))).toBe(true);
      // Manifest is internally consistent
      const m = JSON.parse(readFileSync(join(outDir, "manifest.json"), "utf8"));
      expect(m.schemaVersion).toBe("ontodls-manifest/1");
      expect(m.outputs.length).toBeGreaterThan(0);
      // README is non-trivial markdown
      const readme = readFileSync(join(outDir, "README.md"), "utf8");
      expect(readme).toContain("# Audit binder");
      expect(readme).toContain("manifest.json");
      expect(readme).toContain("trace.json");
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  }, 30_000);

  it("--targets rust skips C + TS generation", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_binder_"));
    const ontoPath = join(dir, "x.onto");
    writeFileSync(
      ontoPath,
      `schema "onto/0.1";\nnamespace t;\nkind A { identity: id; property id: String; }\n`,
      "utf8",
    );
    const outDir = join(dir, "out");
    const s = streams();
    try {
      const code = await runCli(
        ["binder", ontoPath, "--out", outDir, "--targets", "rust"],
        s.streams,
      );
      expect(code).toBe(0);
      expect(existsSync(join(outDir, "Cargo.toml"))).toBe(true);
      expect(existsSync(join(outDir, "src", "lib.rs"))).toBe(true);
      expect(existsSync(join(outDir, "x.h"))).toBe(false);
      expect(existsSync(join(outDir, "x.c"))).toBe(false);
      expect(existsSync(join(outDir, "x.ts"))).toBe(false);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  }, 30_000);

  it("exits 1 on missing --out", async () => {
    const s = streams();
    const code = await runCli(["binder", "some.onto"], s.streams);
    expect(code).toBe(1);
    expect(s.stderr).toContain("missing --out");
  });

  it("exits 1 on missing input file argument", async () => {
    const s = streams();
    const code = await runCli(["binder", "--out", "/tmp/x"], s.streams);
    expect(code).toBe(1);
    expect(s.stderr).toContain("missing input");
  });
});
