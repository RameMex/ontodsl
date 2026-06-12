import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";

/**
 * Phase 3 test suite. One test (or a small cluster) per new rule. We assert
 * by error code (S15..S22) now that the parse-error shape carries `code`.
 *
 * Each fragment is wrapped in the minimal preamble required by the grammar.
 */

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

const has = (
  errors: ReadonlyArray<{ code?: string; message: string }>,
  code: string,
  messageMatcher?: RegExp,
): boolean =>
  errors.some(
    (e) =>
      e.code === code &&
      (messageMatcher === undefined || messageMatcher.test(e.message)),
  );

// ─── Parsing-level sanity ───────────────────────────────────────────────

describe("phase3 — parsing of new stereotypes", () => {
  it("parses a top-level category", () => {
    const { ast, errors } = parse(
      withPreamble(`category PhysicalEntity { property weightKg: Real; }`),
    );
    expect(ast).not.toBeNull();
    expect(errors.filter((e) => e.stage !== "semantic")).toEqual([]);
    expect(ast!.declarations[0]!.kind).toBe("CategoryDecl");
  });

  it("parses a mixin with invariants", () => {
    const { ast, errors } = parse(
      withPreamble(
        `mixin Trackable { property gps: String; invariants { self.gps <> null; } }`,
      ),
    );
    expect(ast).not.toBeNull();
    expect(errors.filter((e) => e.stage !== "semantic")).toEqual([]);
    expect(ast!.declarations[0]!.kind).toBe("MixinDecl");
  });

  it("parses a role-mixin (compound keyword)", () => {
    const { ast, errors } = parse(
      withPreamble(`role-mixin Customer { property contactInfo: String; }`),
    );
    expect(ast).not.toBeNull();
    expect(errors.filter((e) => e.stage !== "semantic")).toEqual([]);
    expect(ast!.declarations[0]!.kind).toBe("RoleMixinDecl");
  });

  it("parses a mode with bearer", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; }
        mode Health of Battery { property factor: Real; }
      `),
    );
    expect(ast).not.toBeNull();
    expect(errors.filter((e) => e.stage !== "semantic")).toEqual([]);
    const modeDecl = ast!.declarations.find((d) => d.kind === "ModeDecl")!;
    expect(modeDecl.kind).toBe("ModeDecl");
  });

  it("parses a quality with bearer", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind D { identity: id; property id: String; }
        quality Temp of D { property celsius: Real; }
      `),
    );
    expect(ast).not.toBeNull();
    expect(errors.filter((e) => e.stage !== "semantic")).toEqual([]);
  });

  it("parses a collective with member type", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Sensor { identity: id; property id: String; }
        collective Suite of Sensor {
          identity: sid;
          property sid: String;
        }
      `),
    );
    expect(ast).not.toBeNull();
    expect(errors.filter((e) => e.stage !== "semantic")).toEqual([]);
  });

  it("parses a quantity", () => {
    const { ast, errors } = parse(
      withPreamble(`
        quantity Airframe {
          identity: frameId;
          property frameId: String;
        }
      `),
    );
    expect(ast).not.toBeNull();
    expect(errors.filter((e) => e.stage !== "semantic")).toEqual([]);
  });

  it("parses kind with optional specializes", () => {
    const { ast, errors } = parse(
      withPreamble(`
        category PE { property w: Real; }
        kind Box specializes PE {
          identity: id;
          property id: String;
        }
      `),
    );
    expect(ast).not.toBeNull();
    expect(errors.filter((e) => e.stage !== "semantic")).toEqual([]);
    const kind = ast!.declarations.find((d) => d.kind === "KindDecl")!;
    expect(kind.specializes).toEqual(["PE"]);
  });

  it("parses override event and query", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind A {
          identity: id;
          property id: String;
          property x: Real;
          event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
          query peek(): Real { body: self.x; }
        }
        subkind B specializes A {
          override event step(n: Real) { pre: n > 1; post: self.x = n; modifies: self.x; }
          override query peek(): Real { body: self.x + 1; }
        }
      `),
    );
    expect(ast).not.toBeNull();
    expect(errors.filter((e) => e.stage !== "semantic")).toEqual([]);
    const b = ast!.declarations.find((d) => d.name === "B")!;
    // @ts-expect-error B is a SubkindDecl with events/queries
    expect(b.events[0]!.isOverride).toBe(true);
    // @ts-expect-error same
    expect(b.queries[0]!.isOverride).toBe(true);
  });
});

// ─── [S15] specialization cycles ───────────────────────────────────────

describe("phase3 — S15: specialization cycles", () => {
  it("flags a two-node cycle between subkinds", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        subkind A specializes B { property a: Real; }
        subkind B specializes A { property b: Real; }
      `),
    );
    expect(has(errors, "S15", /A.*specialization cycle/)).toBe(true);
    expect(has(errors, "S15", /B.*specialization cycle/)).toBe(true);
  });

  it("flags a three-node category cycle", () => {
    const { errors } = parse(
      withPreamble(`
        category X specializes Y { property x: Real; }
        category Y specializes Z { property y: Real; }
        category Z specializes X { property z: Real; }
      `),
    );
    expect(has(errors, "S15", /X/)).toBe(true);
    expect(has(errors, "S15", /Y/)).toBe(true);
    expect(has(errors, "S15", /Z/)).toBe(true);
  });

  it("does not flag a linear chain", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        subkind A specializes K { property a: Real; }
        subkind B specializes A { property b: Real; }
        subkind C specializes B { property c: Real; }
      `),
    );
    expect(errors.some((e) => e.code === "S15")).toBe(false);
  });
});

// ─── [S16] rigidity compatibility ──────────────────────────────────────

describe("phase3 — S16: rigidity compatibility", () => {
  it("allows rigid specializing rigid (Kind -> Category)", () => {
    const { errors } = parse(
      withPreamble(`
        category PE { property w: Real; }
        kind Box specializes PE { identity: id; property id: String; }
      `),
    );
    expect(errors.some((e) => e.code === "S16")).toBe(false);
  });

  it("allows semi-rigid specializing rigid (Mixin -> Category)", () => {
    const { errors } = parse(
      withPreamble(`
        category Top { property w: Real; }
        mixin Trackable specializes Top { property gps: String; }
      `),
    );
    expect(errors.some((e) => e.code === "S16")).toBe(false);
  });

  it("allows rigid specializing semi-rigid (Kind -> Mixin) — central Mixin use case", () => {
    // Mixins are semi-rigid precisely BECAUSE they are specialized by both
    // rigid Kinds and anti-rigid Roles. A Kind-under-Mixin is the rigid
    // sub-population of the mixin's extension. UFO allows this.
    const { errors } = parse(
      withPreamble(`
        mixin Trackable { property gps: String; }
        kind Box specializes Trackable { identity: id; property id: String; }
      `),
    );
    expect(errors.some((e) => e.code === "S16")).toBe(false);
  });

  // Within Phase 3's conservative specialization matrix there is no
  // syntactic way to construct a rigid -> anti-rigid edge (Roles aren't
  // specializable, RoleMixins aren't valid parents of Kinds, etc.), so
  // S16 is reachable only via hand-built ASTs or Phase 3.5 extensions.
  // The rule is kept as a forward guard.
});

// ─── [S17] non-sortal / aspect may not declare identity ────────────────

describe("phase3 — S17: non-sortals and aspects can't declare identity", () => {
  // Category/Mixin/RoleMixin/Mode/Quality — the builder catches this as an
  // early error (throws) BEFORE the validator runs, so the pipeline returns
  // a null AST with a `build`-stage error rather than a semantic error.

  it("rejects a category with identity (builder-level error)", () => {
    const { ast, errors } = parse(
      withPreamble(
        `category Bad { identity: x; property x: String; }`,
      ),
    );
    expect(ast).toBeNull();
    expect(
      errors.some(
        (e) =>
          e.stage === "build" &&
          /Category 'Bad' may not declare identity/.test(e.message),
      ),
    ).toBe(true);
  });

  it("rejects a mixin with identity", () => {
    const { ast, errors } = parse(
      withPreamble(`mixin Bad { identity: x; property x: String; }`),
    );
    expect(ast).toBeNull();
    expect(
      errors.some(
        (e) =>
          e.stage === "build" &&
          /Mixin 'Bad' may not declare identity/.test(e.message),
      ),
    ).toBe(true);
  });

  it("rejects a mode with identity", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind B { identity: id; property id: String; }
        mode Bad of B { identity: x; property x: String; }
      `),
    );
    expect(ast).toBeNull();
    expect(
      errors.some(
        (e) =>
          e.stage === "build" &&
          /Mode 'Bad' may not declare identity/.test(e.message),
      ),
    ).toBe(true);
  });

  it("rejects a quality with identity", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind B { identity: id; property id: String; }
        quality Bad of B { identity: x; property x: String; }
      `),
    );
    expect(ast).toBeNull();
    expect(
      errors.some(
        (e) =>
          e.stage === "build" &&
          /Quality 'Bad' may not declare identity/.test(e.message),
      ),
    ).toBe(true);
  });
});

// ─── [S18] collective / quantity must declare identity ────────────────

describe("phase3 — S18: mandatory identity on collective/quantity", () => {
  it("flags a collective without identity", () => {
    const { errors } = parse(
      withPreamble(`
        kind Sensor { identity: id; property id: String; }
        collective Suite of Sensor { property label: String; }
      `),
    );
    expect(errors.some((e) => e.code === "S2")).toBe(true);
  });

  it("flags a quantity without identity", () => {
    const { errors } = parse(
      withPreamble(`quantity Bad { property massKg: Real; }`),
    );
    expect(errors.some((e) => e.code === "S2")).toBe(true);
  });

  it("accepts a collective with identity", () => {
    const { errors } = parse(
      withPreamble(`
        kind Sensor { identity: id; property id: String; }
        collective Suite of Sensor {
          identity: sid;
          property sid: String;
        }
      `),
    );
    expect(errors.filter((e) => e.stage === "semantic")).toEqual([]);
  });
});

// ─── [S19] Mode/Quality bearer resolution ──────────────────────────────

describe("phase3 — S19: aspect bearer", () => {
  it("flags a mode whose bearer does not exist", () => {
    const { errors } = parse(
      withPreamble(`mode Ghost of NoSuchKind { property x: Real; }`),
    );
    expect(has(errors, "S19", /bearer 'NoSuchKind' is not a declared type/)).toBe(
      true,
    );
  });

  it("flags a quality whose bearer is a category (non-sortal host)", () => {
    const { errors } = parse(
      withPreamble(`
        category C { property w: Real; }
        quality Bad of C { property celsius: Real; }
      `),
    );
    expect(has(errors, "S19", /must be a sortal host/)).toBe(true);
  });

  it("accepts a mode of a Kind", () => {
    const { errors } = parse(
      withPreamble(`
        kind B { identity: id; property id: String; }
        mode OK of B { property factor: Real; }
      `),
    );
    expect(errors.some((e) => e.code === "S19")).toBe(false);
  });
});

// ─── [S20] collective member resolution ────────────────────────────────

describe("phase3 — S20: collective member resolution", () => {
  it("flags an unknown member type", () => {
    const { errors } = parse(
      withPreamble(`
        collective Bad of NoSuch {
          identity: sid; property sid: String;
        }
      `),
    );
    expect(has(errors, "S20", /member type 'NoSuch' is not declared/)).toBe(
      true,
    );
  });
});

// ─── [S21] specialization matrix ───────────────────────────────────────

describe("phase3 — S21: specialization target matrix", () => {
  it("rejects Category specializing a Kind", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        category C specializes K { property w: Real; }
      `),
    );
    expect(has(errors, "S21", /Category 'C' cannot specialize Kind/)).toBe(
      true,
    );
  });

  it("rejects Mixin specializing a Subkind", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        subkind S specializes K { property a: Real; }
        mixin Bad specializes S { property b: Real; }
      `),
    );
    expect(has(errors, "S21", /Mixin 'Bad' cannot specialize Subkind/)).toBe(
      true,
    );
  });

  it("rejects Kind specializing another Kind (must go through Category/Mixin)", () => {
    const { errors } = parse(
      withPreamble(`
        kind A { identity: id; property id: String; }
        kind B specializes A { identity: id; property id: String; }
      `),
    );
    expect(has(errors, "S21", /Kind 'B' cannot specialize Kind/)).toBe(true);
  });

  it("flags unknown specialization parent", () => {
    const { errors } = parse(
      withPreamble(`
        kind K specializes Nowhere { identity: id; property id: String; }
      `),
    );
    expect(has(errors, "S21", /specializes unknown type 'Nowhere'/)).toBe(true);
  });

  it("accepts Subkind -> Subkind chain", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        subkind A specializes K { property a: Real; }
        subkind B specializes A { property b: Real; }
      `),
    );
    expect(errors.some((e) => e.code === "S21")).toBe(false);
  });
});

// ─── [S22] override correctness ────────────────────────────────────────

describe("phase3 — S22: override correctness", () => {
  it("rejects override with no matching parent member", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        subkind S specializes K {
          override event ghost() { }
        }
      `),
    );
    expect(
      has(
        errors,
        "S22",
        /event 'S\.ghost' declared 'override' but no inherited event/,
      ),
    ).toBe(true);
  });

  it("rejects shadowing without override", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
        }
        subkind S specializes K {
          event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
        }
      `),
    );
    expect(
      has(errors, "S22", /event 'S\.step' shadows inherited event from 'K'/),
    ).toBe(true);
  });

  it("rejects override with different parameter count", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
        }
        subkind S specializes K {
          override event step() { post: self.x = 0; modifies: self.x; }
        }
      `),
    );
    expect(
      has(
        errors,
        "S22",
        /event 'S\.step' override signature differs from inherited/,
      ),
    ).toBe(true);
  });

  it("rejects override with different parameter type", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
        }
        subkind S specializes K {
          override event step(n: Integer) { post: self.x = n; modifies: self.x; }
        }
      `),
    );
    expect(has(errors, "S22", /parameter #1 type 'Integer'/)).toBe(true);
  });

  it("rejects query override with different return type", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          query peek(): Real { body: self.x; }
        }
        subkind S specializes K {
          override query peek(): Integer { body: 0; }
        }
      `),
    );
    expect(has(errors, "S22", /return type 'Integer'.*differs from inherited 'Real'/)).toBe(
      true,
    );
  });

  it("accepts a well-formed override", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
        }
        subkind S specializes K {
          override event step(n: Real) { pre: n > 1; post: self.x = n; modifies: self.x; }
        }
      `),
    );
    expect(errors.some((e) => e.code === "S22")).toBe(false);
  });

  it("rejects property shadowing", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; property x: Real; }
        subkind S specializes K { property x: Real; }
      `),
    );
    expect(
      has(errors, "S22", /property 'S\.x' shadows inherited property from 'K'/),
    ).toBe(true);
  });
});

// ─── S13 extended: inheritance-aware modifies resolution ───────────────

describe("phase3 — S13 extended: modifies through inheritance", () => {
  it("accepts modifying an inherited property", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property charge: Real;
        }
        subkind S specializes K {
          event drain() { post: self.charge = 0; modifies: self.charge; }
        }
      `),
    );
    expect(errors.some((e) => e.code === "S13")).toBe(false);
  });

  it("still flags an unknown property on self", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property charge: Real;
        }
        subkind S specializes K {
          event bogus() { post: true; modifies: self.nonsense; }
        }
      `),
    );
    expect(has(errors, "S13", /self\.nonsense/)).toBe(true);
  });
});

// ─── Integration: drone.onto parses & validates clean ──────────────────

describe("phase3 — drone example", () => {
  it("loads and validates the extended example without errors", async () => {
    const { readFileSync } = await import("node:fs");
    const src = readFileSync(
      new URL("../examples/drone.onto", import.meta.url),
      "utf8",
    );
    const { ast, errors } = parse(src);
    expect(ast).not.toBeNull();
    expect(errors).toEqual([]);
    expect(ast!.declarations.length).toBeGreaterThanOrEqual(15);
    const names = ast!.declarations.map((d) => d.name);
    expect(names).toContain("PhysicalEntity");
    expect(names).toContain("Trackable");
    expect(names).toContain("BatteryHealth");
    expect(names).toContain("Temperature");
    expect(names).toContain("SensorSuite");
    expect(names).toContain("Airframe");
    expect(names).toContain("ExpressDeliveryDrone");
  });
});
