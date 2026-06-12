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
import { renderRust } from "../src/codegen-rust/index.js";
import { renderC } from "../src/codegen-c/index.js";
import { getExplainEntry } from "../src/cli/explain.js";
import type { NamedType, KindDecl } from "../src/ast/nodes.js";

/**
 * Phase 17 / Paso 5 day 3 — qualified type references.
 *
 * The grammar accepts `Alias.TypeName` in any typeRef position
 * (property type, parameter type, query return type). The semantic
 * check (S40) validates that the alias matches an existing
 * `import "./..." as Alias;` in the file. Codegen ignores the
 * qualifier (Model 1: alias is informational + future-proofing).
 */

function inDir(setup: (dir: string) => void, body: (dir: string) => void) {
  const dir = mkdtempSync(join(tmpdir(), "ontodls_qref_"));
  try {
    setup(dir);
    body(dir);
  } finally {
    if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  }
}

describe("grammar — Alias.TypeName parses into NamedType.qualifier", () => {
  it("`property foo: EKF.AP_NavEKF3;` populates qualifier='EKF'", () => {
    const src = `schema "onto/0.1";
namespace test;
import "./ekf.onto" as EKF;
kind App {
  identity: id;
  property id: String;
  property filter: EKF.AP_NavEKF3;
}
`;
    const { ast } = parse(src);
    expect(ast).not.toBeNull();
    const app = ast!.declarations.find((d) => d.name === "App") as KindDecl;
    const filterProp = app.properties.find((p) => p.name === "filter")!;
    const t = filterProp.propertyType as NamedType;
    expect(t.kind).toBe("NamedType");
    expect(t.name).toBe("AP_NavEKF3");
    expect(t.qualifier).toBe("EKF");
  });

  it("bare `property foo: AP_NavEKF3;` leaves qualifier undefined", () => {
    const src = `schema "onto/0.1";
namespace test;
kind App {
  identity: id;
  property id: String;
  property filter: AP_NavEKF3;
}
`;
    const { ast } = parse(src);
    const app = ast!.declarations.find((d) => d.name === "App") as KindDecl;
    const filterProp = app.properties.find((p) => p.name === "filter")!;
    const t = filterProp.propertyType as NamedType;
    expect(t.qualifier).toBeUndefined();
  });
});

describe("S40 — qualified ref with unknown alias", () => {
  it("fires when the alias doesn't match any import", () => {
    const src = `schema "onto/0.1";
namespace test;
kind App {
  identity: id;
  property id: String;
  property filter: EKF.AP_NavEKF3;
}
`;
    const { errors } = parse(src);
    const s40 = errors.filter((e: any) => e.code === "S40");
    expect(s40).toHaveLength(1);
    expect((s40[0] as any).message).toContain("EKF");
    expect((s40[0] as any).message).toContain("AP_NavEKF3");
  });

  it("does NOT fire when the alias matches an import", () => {
    // The Battery type is unknown in this single-file parse (S11
    // would fire) but S40 shouldn't because the qualifier IS valid.
    const src = `schema "onto/0.1";
namespace test;
import "./ekf.onto" as EKF;
kind App {
  identity: id;
  property id: String;
  property filter: EKF.AP_NavEKF3;
}
`;
    const { errors } = parse(src);
    const s40 = errors.filter((e: any) => e.code === "S40");
    expect(s40).toEqual([]);
    // S11 may or may not fire here depending on whether single-file
    // mode treats unresolved imports as unknown types — currently
    // it does (the imported file isn't loaded). What we care about:
    // S40 is silent because the qualifier is valid.
  });

  it("S40 takes precedence over S11 (more informative)", () => {
    const src = `schema "onto/0.1";
namespace test;
kind App {
  identity: id;
  property id: String;
  property filter: WrongAlias.MissingType;
}
`;
    const { errors } = parse(src);
    const s40 = errors.filter((e: any) => e.code === "S40");
    const s11 = errors.filter(
      (e: any) =>
        e.code === "S11" && e.message?.includes("MissingType"),
    );
    // S40 should fire (qualifier is wrong). S11 should NOT fire for
    // the same type ref — that'd be redundant noise.
    expect(s40).toHaveLength(1);
    expect(s11).toHaveLength(0);
  });

  it("is documented in the CLI explain catalog", () => {
    const entry = getExplainEntry("S40");
    expect(entry).toBeDefined();
    expect(entry!.category).toBe("structural");
    expect(entry!.title.toLowerCase()).toContain("qualified");
  });
});

describe("codegen — qualifier is informational (Model 1: pass-through)", () => {
  it("Rust codegen emits `EKF.AP_NavEKF3` as bare `ApNavEkf3`", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "ekf.onto"),
          `schema "onto/0.1";
namespace ekf;
kind AP_NavEKF3 {
  identity: id;
  property id: String;
  property state: Real;
}
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "app.onto"),
          `schema "onto/0.1";
namespace app;
import "./ekf.onto" as EKF;
kind App {
  identity: id;
  property id: String;
  property filter: EKF.AP_NavEKF3;
}
`,
          "utf8",
        );
      },
      (dir) => {
        const r = parseFile(join(dir, "app.onto"));
        expect(r.errors).toEqual([]);
        const { libRs } = renderRust(r.ast!, { crateName: "demo" });
        // Field type: bare `ApNavEkf3` (no alias prefix). Codegen
        // resolves to the merged-namespace declaration.
        expect(libRs).toMatch(/pub filter:\s*ApNavEkf3,/);
      },
    );
  });

  it("C codegen emits qualified ref as bare struct type", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "ekf.onto"),
          `schema "onto/0.1";
namespace ekf;
kind AP_NavEKF3 {
  identity: id;
  property id: String;
}
`,
          "utf8",
        );
        writeFileSync(
          join(dir, "app.onto"),
          `schema "onto/0.1";
namespace app;
import "./ekf.onto" as EKF;
kind App {
  identity: id;
  property id: String;
  property filter: EKF.AP_NavEKF3;
}
`,
          "utf8",
        );
      },
      (dir) => {
        const r = parseFile(join(dir, "app.onto"));
        expect(r.errors).toEqual([]);
        const { headerH } = renderC(r.ast!, { module: "demo" });
        expect(headerH).toMatch(/AP_NavEKF3 filter;/);
      },
    );
  });
});

describe("end-to-end: parseFile with qualified refs across files", () => {
  it("resolves qualifier in root file against root's imports", () => {
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
import "./battery.onto" as Bat;
kind Pack {
  identity: pid;
  property pid: String;
  property primary: Bat.Battery;
}
`,
          "utf8",
        );
      },
      (dir) => {
        const r = parseFile(join(dir, "pack.onto"));
        const s40 = r.errors.filter((e: any) => e.code === "S40");
        const s11 = r.errors.filter((e: any) => e.code === "S11");
        expect(s40).toEqual([]);
        expect(s11).toEqual([]);
      },
    );
  });

  it("S40 still fires when qualifier in root file is unknown", () => {
    inDir(
      (dir) => {
        writeFileSync(
          join(dir, "battery.onto"),
          `schema "onto/0.1";
namespace bat;
kind Battery {
  identity: id;
  property id: String;
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
  identity: pid;
  property pid: String;
  property primary: WrongAlias.Battery;
}
`,
          "utf8",
        );
      },
      (dir) => {
        const r = parseFile(join(dir, "pack.onto"));
        const s40 = r.errors.filter((e: any) => e.code === "S40");
        expect(s40).toHaveLength(1);
      },
    );
  });
});
