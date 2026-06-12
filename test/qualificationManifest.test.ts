import { describe, it, expect } from "vitest";
import {
  mkdtempSync,
  rmSync,
  writeFileSync,
  readFileSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  buildManifest,
  serializeManifest,
  checkDeterminism,
  type ReproducibilityManifest,
} from "../src/qualification/manifest.js";
import { runCli } from "../src/cli/gen.js";

/**
 * Phase Q6 / Paso 6 — Tool qualification scaffolding tests.
 *
 * Verifies:
 *   - The manifest contains every required field (schemaVersion,
 *     tool, inputs, options, outputs) with the right shapes.
 *   - Codegen is deterministic across two consecutive invocations
 *     for ALL fixtures in examples/.
 *   - The serialized manifest is byte-stable (same input → same JSON
 *     text), so version-controlled manifests don't drift across
 *     commits.
 *   - The CLI emits manifest JSON + runs the determinism check + sets
 *     a non-zero exit code if determinism is broken.
 */

const SAMPLE_ONTO = `schema "onto/0.1";
namespace q6test;
kind Sensor {
  identity: id;
  property id: String;
  property voltage: Real;
  invariants {
    self.voltage >= 0.0;
  }
}
`;

function withTmpOnto(body: (ontoPath: string) => void) {
  const dir = mkdtempSync(join(tmpdir(), "ontodls_q6_"));
  try {
    const ontoPath = join(dir, "sample.onto");
    writeFileSync(ontoPath, SAMPLE_ONTO, "utf8");
    body(ontoPath);
  } finally {
    if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  }
}

describe("buildManifest — shape", () => {
  it("emits all required top-level fields", () => {
    withTmpOnto((ontoPath) => {
      const m = buildManifest(ontoPath);
      expect(m.schemaVersion).toBe("ontodls-manifest/1");
      expect(m.tool.name).toBe("ontodls");
      expect(typeof m.tool.version).toBe("string");
      expect(m.generatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(m.inputs.rootFile).toBe(ontoPath);
      expect(m.inputs.rootSha256).toMatch(/^[a-f0-9]{64}$/);
      expect(m.options.resolveImports).toBe(false);
      expect(m.options.targets).toEqual(["ts", "rust", "c"]);
      expect(m.outputs.length).toBeGreaterThan(0);
    });
  });

  it("hashes the input file content deterministically", () => {
    withTmpOnto((ontoPath) => {
      const m1 = buildManifest(ontoPath);
      const m2 = buildManifest(ontoPath);
      expect(m1.inputs.rootSha256).toBe(m2.inputs.rootSha256);
    });
  });

  it("includes a SHA-256 + byte-size for every output artefact", () => {
    withTmpOnto((ontoPath) => {
      const m = buildManifest(ontoPath);
      for (const out of m.outputs) {
        expect(out.sha256).toMatch(/^[a-f0-9]{64}$/);
        expect(out.bytes).toBeGreaterThan(0);
        expect(["ts", "rust", "c", "rust-witness"]).toContain(out.target);
      }
    });
  });

  it("targets filter selects subset of outputs", () => {
    withTmpOnto((ontoPath) => {
      const m = buildManifest(ontoPath, { targets: ["rust"] });
      const targets = new Set(m.outputs.map((o) => o.target));
      expect(targets.has("rust")).toBe(true);
      expect(targets.has("c")).toBe(false);
      expect(targets.has("ts")).toBe(false);
    });
  });

  it("multi-file mode populates transitiveFiles", () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_q6_"));
    try {
      writeFileSync(
        join(dir, "leaf.onto"),
        `schema "onto/0.1";
namespace leaf;
kind A { identity: id; property id: String; }
`,
        "utf8",
      );
      writeFileSync(
        join(dir, "root.onto"),
        `schema "onto/0.1";
namespace root;
import "./leaf.onto";
kind B { identity: id; property id: String; }
`,
        "utf8",
      );
      const m = buildManifest(join(dir, "root.onto"), {
        resolveImports: true,
      });
      expect(m.options.resolveImports).toBe(true);
      expect(m.inputs.transitiveFiles).toBeDefined();
      expect(m.inputs.transitiveFiles!).toHaveLength(1);
      expect(m.inputs.transitiveFiles![0]!.path).toContain("leaf.onto");
      expect(m.inputs.transitiveFiles![0]!.sha256).toMatch(/^[a-f0-9]{64}$/);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("serializeManifest — byte-stable", () => {
  it("two manifests for the same input serialize to byte-identical JSON", () => {
    withTmpOnto((ontoPath) => {
      const a = serializeManifest(buildManifest(ontoPath));
      const b = serializeManifest(buildManifest(ontoPath));
      expect(a).toBe(b);
    });
  });
});

describe("checkDeterminism", () => {
  it("returns deterministic: true on a stable codegen path", () => {
    withTmpOnto((ontoPath) => {
      const r = checkDeterminism(ontoPath);
      expect(r.deterministic).toBe(true);
      expect(r.firstDifference).toBeUndefined();
    });
  });

  it("passes on every example/ fixture", () => {
    // The fixtures are the production-grade inputs; if any of them
    // produces non-deterministic output, the whole audit story breaks.
    const examples = [
      "examples/array_state_vector.onto",
      "examples/ardupilot_navekf3.onto",
      "examples/ardupilot_gps.onto",
      "examples/ardupilot_baro.onto",
      "examples/drone.onto",
    ];
    for (const ex of examples) {
      const r = checkDeterminism(ex);
      if (!r.deterministic) {
        throw new Error(
          `non-deterministic codegen for ${ex}: artefact '${r.firstDifference?.artefact}' differs ` +
            `(${r.firstDifference?.hashA} vs ${r.firstDifference?.hashB})`,
        );
      }
    }
  });
});

describe("CLI: ontodsl manifest", () => {
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

  it("emits valid JSON to stdout by default", async () => {
    let exitCode = -1;
    await withTmpOntoAsync(async (ontoPath) => {
      const s = makeStreams();
      exitCode = await runCli(["manifest", ontoPath], s.streams);
      expect(exitCode).toBe(0);
      const json = s.stdout.replace(/\ndeterminism:.*\n$/, "");
      const parsed = JSON.parse(json) as ReproducibilityManifest;
      expect(parsed.schemaVersion).toBe("ontodls-manifest/1");
    });
  });

  it("writes manifest to --out path", async () => {
    await withTmpOntoAsync(async (ontoPath) => {
      const outPath = ontoPath + ".manifest.json";
      const s = makeStreams();
      const code = await runCli(
        ["manifest", ontoPath, "--out", outPath],
        s.streams,
      );
      expect(code).toBe(0);
      expect(existsSync(outPath)).toBe(true);
      const parsed = JSON.parse(readFileSync(outPath, "utf8"));
      expect(parsed.tool.name).toBe("ontodls");
      expect(s.stdout).toContain("determinism: OK");
    });
  });

  it("--targets flag filters which artefacts are hashed", async () => {
    await withTmpOntoAsync(async (ontoPath) => {
      const s = makeStreams();
      const code = await runCli(
        ["manifest", ontoPath, "--targets", "rust"],
        s.streams,
      );
      expect(code).toBe(0);
      const json = s.stdout.replace(/\ndeterminism:.*\n$/, "");
      const parsed = JSON.parse(json) as ReproducibilityManifest;
      expect(parsed.options.targets).toEqual(["rust"]);
      for (const out of parsed.outputs) {
        expect(out.target).toBe("rust");
      }
    });
  });

  it("exits with 1 on missing input file argument", async () => {
    const s = makeStreams();
    const code = await runCli(["manifest"], s.streams);
    expect(code).toBe(1);
    expect(s.stderr).toContain("missing input");
  });
});

async function withTmpOntoAsync(body: (ontoPath: string) => Promise<void>) {
  const dir = mkdtempSync(join(tmpdir(), "ontodls_q6_"));
  try {
    const ontoPath = join(dir, "sample.onto");
    writeFileSync(ontoPath, SAMPLE_ONTO, "utf8");
    await body(ontoPath);
  } finally {
    if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  }
}
