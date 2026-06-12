import { describe, it, expect } from "vitest";
import {
  mkdtempSync,
  rmSync,
  writeFileSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { parseFile } from "../src/parser/multiFile.js";

/**
 * Phase 17 / Paso 5 — multi-file federation tests.
 *
 * Tests are written against on-disk fixtures (mkdtemp + writeFileSync)
 * because the resolver operates on real paths, not in-memory strings.
 * Each test scopes its fixture into a unique temp dir and tears it
 * down in a finally.
 */

function inDir(setup: (dir: string) => void, body: (dir: string) => void) {
  const dir = mkdtempSync(join(tmpdir(), "ontodls_mf_"));
  try {
    setup(dir);
    body(dir);
  } finally {
    if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  }
}

describe("parseFile — single file (no imports)", () => {
  it("loads a standalone .onto unchanged", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "a.onto"),
          `schema "onto/0.1";
namespace test;
kind A {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
      },
      (dir) => {
        const result = parseFile(join(dir, "a.onto"));
        expect(result.errors).toEqual([]);
        expect(result.ast).not.toBeNull();
        expect(result.ast!.declarations.map((d) => d.name)).toEqual(["A"]);
        expect(result.loadedFiles).toHaveLength(1);
      },
    );
  });
});

describe("parseFile — two files (root imports leaf)", () => {
  it("merges declarations from both files", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "leaf.onto"),
          `schema "onto/0.1";
namespace leaf;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real;
}
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "root.onto"),
          `schema "onto/0.1";
namespace root;
import "./leaf.onto";
kind Pack {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
      },
      (dir) => {
        const result = parseFile(join(dir, "root.onto"));
        expect(result.errors).toEqual([]);
        expect(result.ast).not.toBeNull();
        // Root + leaf decls both present.
        const names = result.ast!.declarations.map((d) => d.name).sort();
        expect(names).toEqual(["Battery", "Pack"]);
        // Root file's namespace is preserved.
        expect(result.ast!.namespace).toBe("root");
        expect(result.loadedFiles).toHaveLength(2);
      },
    );
  });

  it("cross-file type reference works (Pack uses Battery)", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "battery.onto"),
          `schema "onto/0.1";
namespace bat;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real;
}
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "pack.onto"),
          `schema "onto/0.1";
namespace pack;
import "./battery.onto";
kind Pack {
  identity: id;
  property id: String;
  property primary: Battery;
}
`,
          "utf8",
        );
      },
      (dir) => {
        const result = parseFile(join(dir, "pack.onto"));
        // The `Battery` reference inside Pack should resolve cleanly
        // through the merged declaration set.
        expect(
          result.errors.filter(
            (e: any) =>
              typeof e === "object" && e !== null && "code" in e && e.code === "S11",
          ),
        ).toEqual([]);
      },
    );
  });
});

describe("parseFile — diamond + transitive imports", () => {
  it("loads transitive imports (A → B → C)", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "c.onto"),
          `schema "onto/0.1";
namespace c;
kind C {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "b.onto"),
          `schema "onto/0.1";
namespace b;
import "./c.onto";
kind B {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "a.onto"),
          `schema "onto/0.1";
namespace a;
import "./b.onto";
kind A {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
      },
      (dir) => {
        const result = parseFile(join(dir, "a.onto"));
        expect(result.errors).toEqual([]);
        const names = result.ast!.declarations.map((d) => d.name).sort();
        expect(names).toEqual(["A", "B", "C"]);
        expect(result.loadedFiles).toHaveLength(3);
      },
    );
  });

  it("diamond import (A → B, A → C, both → D) loads D once", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "d.onto"),
          `schema "onto/0.1";
namespace d;
kind D {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "b.onto"),
          `schema "onto/0.1";
namespace b;
import "./d.onto";
kind B {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "c.onto"),
          `schema "onto/0.1";
namespace c;
import "./d.onto";
kind C {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "a.onto"),
          `schema "onto/0.1";
namespace a;
import "./b.onto";
import "./c.onto";
kind A {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
      },
      (dir) => {
        const result = parseFile(join(dir, "a.onto"));
        // D appears once, not twice (dedup-by-abs-path).
        const dCount = result.ast!.declarations.filter((d) => d.name === "D")
          .length;
        expect(dCount).toBe(1);
        // All 4 files loaded.
        expect(result.loadedFiles).toHaveLength(4);
      },
    );
  });
});

describe("parseFile — error cases", () => {
  it("E1: cycle detection", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "a.onto"),
          `schema "onto/0.1";
namespace a;
import "./b.onto";
kind A { identity: id; property id: String; }
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "b.onto"),
          `schema "onto/0.1";
namespace b;
import "./a.onto";
kind B { identity: id; property id: String; }
`,
          "utf8",
        );
      },
      (dir) => {
        const result = parseFile(join(dir, "a.onto"));
        const e1 = result.errors.filter(
          (e: any) => typeof e === "object" && e !== null && "code" in e && e.code === "E1",
        );
        expect(e1.length).toBeGreaterThan(0);
        expect((e1[0] as any).message).toContain("import cycle");
      },
    );
  });

  it("E2: duplicate declaration across files", () => {
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
import "./lib.onto";
kind Shared { identity: id; property id: String; }
`,
          "utf8",
        );
      },
      (dir) => {
        const result = parseFile(join(dir, "root.onto"));
        const e2 = result.errors.filter(
          (e: any) => typeof e === "object" && e !== null && "code" in e && e.code === "E2",
        );
        expect(e2.length).toBe(1);
        expect((e2[0] as any).message).toContain("Shared");
      },
    );
  });

  it("E3: imported file missing", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "root.onto"),
          `schema "onto/0.1";
namespace root;
import "./does_not_exist.onto";
kind A { identity: id; property id: String; }
`,
          "utf8",
        );
      },
      (dir) => {
        const result = parseFile(join(dir, "root.onto"));
        const e3 = result.errors.filter(
          (e: any) => typeof e === "object" && e !== null && "code" in e && e.code === "E3",
        );
        expect(e3.length).toBe(1);
      },
    );
  });

  it("E3: root file missing", () => {
    const result = parseFile("/nonexistent/path/x.onto");
    expect(result.ast).toBeNull();
    expect(
      result.errors.filter(
        (e: any) => typeof e === "object" && e !== null && "code" in e && e.code === "E3",
      ),
    ).toHaveLength(1);
  });

  it("propagates single-file parse errors with the source path", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "bad.onto"),
          `schema "onto/0.1";
namespace bad;
this is not valid onto syntax
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "root.onto"),
          `schema "onto/0.1";
namespace root;
import "./bad.onto";
kind A { identity: id; property id: String; }
`,
          "utf8",
        );
      },
      (dir) => {
        const result = parseFile(join(dir, "root.onto"));
        // At least one error should be annotated with bad.onto.
        const fromBad = result.errors.filter(
          (e: any) =>
            typeof e === "object" &&
            e !== null &&
            "path" in e &&
            (e.path as string).endsWith("bad.onto"),
        );
        expect(fromBad.length).toBeGreaterThan(0);
      },
    );
  });
});
