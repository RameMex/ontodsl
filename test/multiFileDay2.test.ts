import { describe, it, expect } from "vitest";
import {
  mkdtempSync,
  rmSync,
  writeFileSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { parse } from "../src/index.js";
import { parseFile } from "../src/parser/multiFile.js";
import { getExplainEntry } from "../src/cli/explain.js";

/**
 * Phase 17 / Paso 5 day 2 — aliased + selective imports.
 *
 * Each test writes its fixture into a unique temp dir, asserts the
 * resolver's behaviour, and tears the dir down. Tests cover the
 * grammar shapes (alias only, selective only, both) plus the
 * resolver-level semantics (selective filtering, name union when
 * multiple importers, W39 advisory for missing names).
 */

function inDir(setup: (dir: string) => void, body: (dir: string) => void) {
  const dir = mkdtempSync(join(tmpdir(), "ontodls_mf2_"));
  try {
    setup(dir);
    body(dir);
  } finally {
    if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  }
}

describe("grammar — aliased / selective imports parse", () => {
  it("parses `import \"./x.onto\" as Alias;`", () => {
    const src = `schema "onto/0.1";
namespace t;
import "./other.onto" as Other;
kind X { identity: id; property id: String; }
`;
    const { ast, errors } = parse(src);
    expect(errors.filter((e: any) => !e.code?.startsWith("W"))).toEqual([]);
    expect(ast).not.toBeNull();
    expect(ast!.imports).toHaveLength(1);
    expect(ast!.imports[0]!.path).toBe("./other.onto");
    expect(ast!.imports[0]!.alias).toBe("Other");
    expect(ast!.imports[0]!.selective).toBeNull();
  });

  it("parses `import { A, B } from \"./x.onto\";`", () => {
    const src = `schema "onto/0.1";
namespace t;
import { Foo, Bar } from "./other.onto";
kind X { identity: id; property id: String; }
`;
    const { ast, errors } = parse(src);
    expect(errors.filter((e: any) => !e.code?.startsWith("W"))).toEqual([]);
    expect(ast!.imports[0]!.selective).toEqual(["Foo", "Bar"]);
    expect(ast!.imports[0]!.alias).toBeNull();
  });

  it("parses combined `import { A } from \"./x.onto\" as Alias;`", () => {
    const src = `schema "onto/0.1";
namespace t;
import { Battery } from "./other.onto" as Bat;
kind X { identity: id; property id: String; }
`;
    const { ast, errors } = parse(src);
    expect(errors.filter((e: any) => !e.code?.startsWith("W"))).toEqual([]);
    expect(ast!.imports[0]!.selective).toEqual(["Battery"]);
    expect(ast!.imports[0]!.alias).toBe("Bat");
  });

  it("backward-compat: plain `import \"./x.onto\";` still works", () => {
    const src = `schema "onto/0.1";
namespace t;
import "./other.onto";
kind X { identity: id; property id: String; }
`;
    const { ast, errors } = parse(src);
    expect(errors.filter((e: any) => !e.code?.startsWith("W"))).toEqual([]);
    expect(ast!.imports[0]!.alias).toBeNull();
    expect(ast!.imports[0]!.selective).toBeNull();
  });
});

describe("selective imports — filter semantics", () => {
  it("only the listed names are merged", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "lib.onto"),
          `schema "onto/0.1";
namespace lib;
kind Battery { identity: id; property id: String; }
kind Cell { identity: id; property id: String; }
kind Pack { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "root.onto"),
          `schema "onto/0.1";
namespace root;
import { Battery, Pack } from "./lib.onto";
kind App { identity: id; property id: String; }
`,
          "utf8",
        );
      },
      (dir) => {
        const r = parseFile(join(dir, "root.onto"));
        const names = r.ast!.declarations.map((d) => d.name).sort();
        // App (root) + Battery + Pack — Cell filtered out.
        expect(names).toEqual(["App", "Battery", "Pack"]);
      },
    );
  });

  it("non-selective importer widens to ALL even when others are selective", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "lib.onto"),
          `schema "onto/0.1";
namespace lib;
kind A { identity: id; property id: String; }
kind B { identity: id; property id: String; }
kind C { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "mid1.onto"),
          `schema "onto/0.1";
namespace m1;
import { A } from "./lib.onto";
kind M1 { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "mid2.onto"),
          `schema "onto/0.1";
namespace m2;
import "./lib.onto";
kind M2 { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "root.onto"),
          `schema "onto/0.1";
namespace root;
import "./mid1.onto";
import "./mid2.onto";
kind R { identity: id; property id: String; }
`,
          "utf8",
        );
      },
      (dir) => {
        const r = parseFile(join(dir, "root.onto"));
        // mid2 imports lib non-selectively → all of A/B/C exposed
        // even though mid1 only wanted A.
        const names = r.ast!.declarations.map((d) => d.name).sort();
        expect(names).toEqual(["A", "B", "C", "M1", "M2", "R"]);
      },
    );
  });

  it("union of selective sets when multiple importers each pick subsets", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "lib.onto"),
          `schema "onto/0.1";
namespace lib;
kind A { identity: id; property id: String; }
kind B { identity: id; property id: String; }
kind C { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "mid1.onto"),
          `schema "onto/0.1";
namespace m1;
import { A } from "./lib.onto";
kind M1 { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "mid2.onto"),
          `schema "onto/0.1";
namespace m2;
import { B } from "./lib.onto";
kind M2 { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "root.onto"),
          `schema "onto/0.1";
namespace root;
import "./mid1.onto";
import "./mid2.onto";
kind R { identity: id; property id: String; }
`,
          "utf8",
        );
      },
      (dir) => {
        const r = parseFile(join(dir, "root.onto"));
        // Union: A (from mid1) + B (from mid2). C stays private.
        const names = r.ast!.declarations.map((d) => d.name).sort();
        expect(names).toEqual(["A", "B", "M1", "M2", "R"]);
      },
    );
  });

  it("W39 fires when selective list mentions a non-existent name", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "lib.onto"),
          `schema "onto/0.1";
namespace lib;
kind Battery { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "root.onto"),
          `schema "onto/0.1";
namespace root;
import { Battery, BatteryPak } from "./lib.onto";
kind X { identity: id; property id: String; }
`,
          "utf8",
        );
      },
      (dir) => {
        const r = parseFile(join(dir, "root.onto"));
        const w39 = r.errors.filter(
          (e: any) => typeof e === "object" && e?.code === "W39",
        );
        expect(w39).toHaveLength(1);
        expect((w39[0] as any).message).toContain("BatteryPak");
      },
    );
  });
});

describe("aliased imports — alias in error messages", () => {
  it("E2 duplicate message mentions the alias when present", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "lib.onto"),
          `schema "onto/0.1";
namespace lib;
kind Shared { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "root.onto"),
          `schema "onto/0.1";
namespace root;
import "./lib.onto" as Lib;
kind Shared { identity: id; property id: String; }
`,
          "utf8",
        );
      },
      (dir) => {
        const r = parseFile(join(dir, "root.onto"));
        const e2 = r.errors.filter(
          (e: any) => typeof e === "object" && e?.code === "E2",
        );
        expect(e2).toHaveLength(1);
        expect((e2[0] as any).message).toContain("'Lib'");
      },
    );
  });
});

describe("W39 — documented in explain catalog", () => {
  it("getExplainEntry('W39') returns a populated entry", () => {
    const entry = getExplainEntry("W39");
    expect(entry).toBeDefined();
    expect(entry!.category).toBe("advisory");
    expect(entry!.title).toContain("Selective");
  });
});
