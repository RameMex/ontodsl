import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";
import { verifyLSPContracts } from "../src/semantic/index.js";

/**
 * Phase 5 tests cover:
 *   - `Set<T>` type parsing, nesting forbidden
 *   - Six collection operators: size, isEmpty, notEmpty, includes,
 *     forAll, exists
 *   - Lambda variable scoping and shadowing in forAll / exists
 *   - Typechecker rules for each operator (receiver must be a Set,
 *     body must be Boolean, includes arg type must match element)
 *   - Multi-parent specialization on Relator / Collective / Quantity
 *   - Z3 emits W29/W30 on clauses that use collection operators
 */

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

const has = (
  errors: ReadonlyArray<{ code?: string; message: string }>,
  code: string,
  matcher?: RegExp,
): boolean =>
  errors.some(
    (e) => e.code === code && (matcher === undefined || matcher.test(e.message)),
  );

// ─── Set<T> parsing ────────────────────────────────────────────────────

describe("phase5 — Set<T> type parsing", () => {
  it("parses Set<NamedType> property", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; }
        kind Drone {
          identity: sn;
          property sn: String;
          property batteries: Set<Battery>;
        }
      `),
    );
    expect(errors).toEqual([]);
    const drone = ast!.declarations.find((d) => d.name === "Drone")!;
    // @ts-expect-error Drone is a KindDecl
    const prop = drone.properties.find((p: { name: string }) => p.name === "batteries")!;
    expect(prop.propertyType.kind).toBe("SetType");
    // @ts-expect-error SetType has elementType
    expect(prop.propertyType.elementType.kind).toBe("NamedType");
    // @ts-expect-error SetType has elementType.name
    expect(prop.propertyType.elementType.name).toBe("Battery");
  });

  it("parses Set<PrimitiveType> property", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind D {
          identity: id;
          property id: String;
          property tags: Set<String>;
        }
      `),
    );
    expect(errors).toEqual([]);
    const d = ast!.declarations.find((dd) => dd.name === "D")!;
    // @ts-expect-error KindDecl has properties
    const prop = d.properties.find((p: { name: string }) => p.name === "tags")!;
    expect(prop.propertyType.kind).toBe("SetType");
  });

  it("rejects nested Set<Set<T>> at the grammar level", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind D {
          identity: id;
          property id: String;
          property nested: Set<Set<String>>;
        }
      `),
    );
    expect(ast).toBeNull();
    expect(errors.some((e) => e.stage === "parse")).toBe(true);
  });

  it("resolves S11 through Set element types", () => {
    const { errors } = parse(
      withPreamble(`
        kind D {
          identity: id;
          property id: String;
          property bogus: Set<NoSuchType>;
        }
      `),
    );
    expect(has(errors, "S11", /NoSuchType/)).toBe(true);
  });
});

// ─── size / isEmpty / notEmpty ─────────────────────────────────────────

describe("phase5 — ->size() / ->isEmpty() / ->notEmpty()", () => {
  it("types size() as Integer in a numeric comparison", () => {
    const { errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; }
        kind Drone {
          identity: sn;
          property sn: String;
          property batteries: Set<Battery>;
          invariants { self.batteries->size() >= 1; }
        }
      `),
    );
    expect(errors.filter((e) => e.code === "S27" || e.code === "S28")).toEqual(
      [],
    );
  });

  it("types notEmpty() as Boolean (usable as a standalone invariant)", () => {
    const { errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; }
        kind Drone {
          identity: sn;
          property sn: String;
          property batteries: Set<Battery>;
          invariants { self.batteries->notEmpty(); }
        }
      `),
    );
    expect(errors.filter((e) => e.code === "S27" || e.code === "S28")).toEqual(
      [],
    );
  });

  it("rejects size() on a non-Set receiver", () => {
    const { errors } = parse(
      withPreamble(`
        kind D {
          identity: id;
          property id: String;
          property charge: Real;
          invariants { self.charge->size() >= 0; }
        }
      `),
    );
    expect(has(errors, "S27", /requires a Set-typed receiver/)).toBe(true);
  });
});

// ─── includes ──────────────────────────────────────────────────────────

describe("phase5 — ->includes(x)", () => {
  it("accepts includes(Battery) on Set<Battery>", () => {
    const { errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; }
        kind Drone {
          identity: sn;
          property sn: String;
          property batteries: Set<Battery>;
          event add(b: Battery) {
            pre:  true;
            post: self.batteries->includes(b);
            modifies: self.batteries;
          }
        }
      `),
    );
    expect(errors.filter((e) => e.code === "S27" || e.code === "S28")).toEqual(
      [],
    );
  });

  it("rejects includes with wrong-type argument", () => {
    const { errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; }
        kind Sensor { identity: sid; property sid: String; }
        kind Drone {
          identity: sn;
          property sn: String;
          property batteries: Set<Battery>;
          event addSensor(s: Sensor) {
            pre:  true;
            post: self.batteries->includes(s);
            modifies: self.batteries;
          }
        }
      `),
    );
    expect(
      has(errors, "S28", /'->includes' argument type .* is not compatible/),
    ).toBe(true);
  });
});

// ─── forAll / exists ───────────────────────────────────────────────────

describe("phase5 — ->forAll(x | body) and ->exists(x | body)", () => {
  it("binds the iterator variable and accepts a Boolean body", () => {
    const { errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; property charge: Real; }
        kind Drone {
          identity: sn;
          property sn: String;
          property batteries: Set<Battery>;
          invariants { self.batteries->forAll(b | b.charge >= 0); }
        }
      `),
    );
    expect(errors.filter((e) => e.code === "S27" || e.code === "S28")).toEqual(
      [],
    );
  });

  it("rejects a non-Boolean body", () => {
    const { errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; property charge: Real; }
        kind Drone {
          identity: sn;
          property sn: String;
          property batteries: Set<Battery>;
          invariants { self.batteries->forAll(b | b.charge); }
        }
      `),
    );
    expect(has(errors, "S28", /'->forAll' body must return Boolean/)).toBe(
      true,
    );
  });

  it("accepts nested forAll / exists", () => {
    const { errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; property charge: Real; }
        kind Drone { identity: sn; property sn: String; property batteries: Set<Battery>; }
        kind Fleet {
          identity: fid;
          property fid: String;
          property drones: Set<Drone>;
          invariants {
            self.drones->forAll(d | d.batteries->exists(b | b.charge > 0.5));
          }
        }
      `),
    );
    expect(errors.filter((e) => e.code === "S27" || e.code === "S28")).toEqual(
      [],
    );
  });

  it("iterator variable shadows an outer parameter", () => {
    const { errors } = parse(
      withPreamble(`
        kind Battery { identity: id; property id: String; property charge: Real; }
        kind Drone {
          identity: sn;
          property sn: String;
          property batteries: Set<Battery>;
          // 'b' outside means Battery-the-param, inside the lambda it
          // is re-bound to the Battery iterator element. This should
          // type-check.
          event check(b: Battery) {
            pre:  self.batteries->forAll(b | b.charge >= 0);
            post: true;
            modifies: self.batteries;
          }
        }
      `),
    );
    expect(errors.filter((e) => e.code === "S27" || e.code === "S28")).toEqual(
      [],
    );
  });
});

// ─── Multi-parent Relator / Collective / Quantity ─────────────────────

describe("phase5 — multi-parent on Relator / Collective / Quantity", () => {
  it("parses Relator specializing another Relator", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind A { identity: id; property id: String; }
        kind B { identity: id2; property id2: String; }
        relator Base mediates (A, B) { identity: bid; property bid: String; }
        relator Ext specializes Base mediates (A, B) {
          identity: eid;
          property eid: String;
        }
      `),
    );
    expect(errors).toEqual([]);
    const ext = ast!.declarations.find((d) => d.name === "Ext")!;
    // @ts-expect-error RelatorDecl has specializes
    expect(ext.specializes).toEqual(["Base"]);
  });

  it("rejects Relator specializing a Kind (S21)", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        kind B { identity: id2; property id2: String; }
        relator Bad specializes K mediates (K, B) {
          identity: bid;
          property bid: String;
        }
      `),
    );
    expect(has(errors, "S21", /Relator 'Bad' cannot specialize Kind/)).toBe(
      true,
    );
  });

  it("parses Collective specializing another Collective", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Sensor { identity: sid; property sid: String; }
        collective Suite of Sensor { identity: suid; property suid: String; }
        collective Big specializes Suite of Sensor {
          identity: bid;
          property bid: String;
        }
      `),
    );
    expect(errors).toEqual([]);
    const big = ast!.declarations.find((d) => d.name === "Big")!;
    // @ts-expect-error CollectiveDecl has specializes
    expect(big.specializes).toEqual(["Suite"]);
  });

  it("parses Quantity specializing another Quantity", () => {
    const { ast, errors } = parse(
      withPreamble(`
        quantity Mass { identity: mid; property mid: String; property kg: Real; }
        quantity Precise specializes Mass {
          identity: pid;
          property pid: String;
        }
      `),
    );
    expect(errors).toEqual([]);
  });
});

// ─── Z3: collection clauses are now verifiable ────────────────────────────

describe("phase5 — Z3 collection verification", () => {
  it("verifies collection forAll contracts without warnings or errors when valid", async () => {
    const src = withPreamble(`
      kind Battery { identity: id; property id: String; property charge: Real; }
      kind K {
        identity: kid;
        property kid: String;
        property batteries: Set<Battery>;
        event refill() {
          pre:  self.batteries->forAll(b | b.charge < 1);
          post: self.batteries->forAll(b | b.charge >= 1);
          modifies: self.batteries;
        }
      }
      subkind S specializes K {
        override event refill() {
          pre:  self.batteries->forAll(b | b.charge < 1);
          post: self.batteries->forAll(b | b.charge >= 1);
          modifies: self.batteries;
        }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    // Pre and post are now fully verified: no warnings (W29/W30) and no errors (S29/S30).
    expect(diags.filter(d => ["W29", "W30", "S29", "S30"].includes(d.code))).toEqual([]);
  }, 20_000);

  it("detects S29 and S30 when collection forAll contracts are violated", async () => {
    const src = withPreamble(`
      kind Battery { identity: id; property id: String; property charge: Real; }
      kind K {
        identity: kid;
        property kid: String;
        property batteries: Set<Battery>;
        event refill() {
          pre:  self.batteries->forAll(b | b.charge < 1);
          post: self.batteries->forAll(b | b.charge >= 1);
          modifies: self.batteries;
        }
      }
      subkind S specializes K {
        override event refill() {
          // pre is stronger (charge < 0.5 implies charge < 1, but not vice-versa, so parent_pre => child_pre fails)
          pre:  self.batteries->forAll(b | b.charge < 0.5);
          // post is weaker (charge >= 1 implies charge >= 0.5, but not vice-versa, so child_post => parent_post fails)
          post: self.batteries->forAll(b | b.charge >= 0.5);
          modifies: self.batteries;
        }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    // Pre-condition weakened violation -> S29, Post-condition strengthened violation -> S30
    expect(diags.some((d) => d.code === "S29")).toBe(true);
    expect(diags.some((d) => d.code === "S30")).toBe(true);
  }, 20_000);
});
