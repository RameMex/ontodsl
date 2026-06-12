import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { parse } from "../src/parser/index.js";
import type {
  EventDecl,
  KindDecl,
  PhaseGroupDecl,
  QueryDecl,
  RelatorDecl,
  RoleDecl,
  SubkindDecl,
} from "../src/ast/index.js";

const here = dirname(fileURLToPath(import.meta.url));

/**
 * Most Phase 2 tests disable semantic validation so structural parsing is
 * exercised in isolation. Semantic rules have their own test file.
 */
const parseStructural = (src: string) =>
  parse(src, { validateSemantics: false });

describe("parse — Phase 1 structural features still work", () => {
  it("parses kind with identity, properties, invariants", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Drone {
        identity: sn;
        property sn: String;
        property maxPayload: Real;
        invariants { self.maxPayload > 0; }
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const d = ast!.declarations[0] as KindDecl;
    expect(d.kind).toBe("KindDecl");
    expect(d.identity?.propertyName).toBe("sn");
    expect(d.properties).toHaveLength(2);
    expect(d.invariants[0]!.rawExpression).toBe("self.maxPayload > 0");
  });

  it("parses subkind with specializes", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Drone {}
      subkind DeliveryDrone specializes Drone {
        property radius: Real;
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const s = ast!.declarations[1] as SubkindDecl;
    expect(s.kind).toBe("SubkindDecl");
    // @ts-expect-error specializes on Subkind is now string[]
    expect(s.specializes).toEqual(["Drone"]);
  });
});

describe("parse — Phase 2 stereotypes", () => {
  it("parses a relator with multiple mediation targets", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Customer {} kind Package {} kind Drone {}
      relator DeliveryContract mediates (Customer, Package, Drone) {
        identity: contractId;
        property contractId: String;
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const r = ast!.declarations[3] as RelatorDecl;
    expect(r.kind).toBe("RelatorDecl");
    expect(r.mediates).toEqual(["Customer", "Package", "Drone"]);
    expect(r.identity?.propertyName).toBe("contractId");
  });

  it("parses a role with mediated-by and of clauses", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Person {}
      kind Mission {}
      relator MissionAssignment mediates (Person, Mission) {}
      role Pilot mediated-by MissionAssignment of Person {
        property licenseNumber: String;
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const r = ast!.declarations[3] as RoleDecl;
    expect(r.kind).toBe("RoleDecl");
    expect(r.mediatedBy).toBe("MissionAssignment");
    expect(r.ofKind).toBe("Person");
    expect(r.properties[0]!.name).toBe("licenseNumber");
  });

  it("parses a phase-group with multiple phases", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Drone {}
      phase-group FlightPhase of Drone {
        phase Grounded;
        phase TakingOff;
        phase Flying;
        phase Landing;
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const pg = ast!.declarations[1] as PhaseGroupDecl;
    expect(pg.kind).toBe("PhaseGroupDecl");
    expect(pg.ofKind).toBe("Drone");
    expect(pg.phases.map((p) => p.name)).toEqual([
      "Grounded",
      "TakingOff",
      "Flying",
      "Landing",
    ]);
  });

  it("rejects a subkind that redeclares identity", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Drone {}
      subkind DeliveryDrone specializes Drone {
        identity: foo;
        property foo: String;
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(ast).toBeNull();
    expect(errors.some((e) => /may not declare its own identity/.test(e.message))).toBe(true);
  });

  it("rejects a role that redeclares identity", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Person {} kind M {}
      relator A mediates (Person, M) {}
      role Pilot mediated-by A of Person {
        identity: foo;
        property foo: String;
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(ast).toBeNull();
    expect(errors.some((e) => /may not declare its own identity/.test(e.message))).toBe(true);
  });
});

describe("parse — events and queries with DbC", () => {
  it("parses an event with pre, post, and modifies", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Drone {
        property battery: Real;
        event charge(amount: Real) {
          pre:  self.battery < 100;
          pre:  amount > 0;
          post: self.battery > self.battery@pre;
          modifies: self.battery;
        }
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const e = (ast!.declarations[0] as KindDecl).events[0] as EventDecl;
    expect(e.name).toBe("charge");
    expect(e.parameters).toHaveLength(1);
    expect(e.parameters[0]!.name).toBe("amount");
    expect(e.parameters[0]!.parameterType.kind).toBe("PrimitiveType");
    expect(e.pre).toHaveLength(2);
    expect(e.pre[0]!.rawExpression).toBe("self.battery < 100");
    expect(e.pre[1]!.rawExpression).toBe("amount > 0");
    expect(e.post).toHaveLength(1);
    expect(e.post[0]!.rawExpression).toBe("self.battery > self.battery@pre");
    expect(e.modifies).toHaveLength(1);
    expect(e.modifies[0]!.root).toBe("self");
    expect(e.modifies[0]!.segments).toEqual(["battery"]);
  });

  it("parses a query with parameters, return type, and body", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Battery {
        property cellVoltage: Real;
        property cellCount: Integer;
        query totalVoltage(): Real {
          body: self.cellVoltage * self.cellCount;
        }
        query canSustain(durationSec: Real): Boolean {
          body: self.cellVoltage > 3.3;
        }
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const k = ast!.declarations[0] as KindDecl;
    expect(k.queries).toHaveLength(2);
    const [q1, q2] = k.queries as [QueryDecl, QueryDecl];
    expect(q1.name).toBe("totalVoltage");
    expect(q1.returnType.kind).toBe("PrimitiveType");
    expect(q1.body?.rawExpression).toBe("self.cellVoltage * self.cellCount");
    expect(q2.parameters[0]!.name).toBe("durationSec");
  });

  it("parses events with no parameters", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind D {
        property on: Boolean;
        event start() {
          pre:  self.on = false;
          post: self.on = true;
          modifies: self.on;
        }
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const e = (ast!.declarations[0] as KindDecl).events[0]!;
    expect(e.parameters).toEqual([]);
  });

  it("parses modifies with multiple paths including parameter-rooted", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind A { property x: Real; }
      kind B {
        property a: A;
        event swap(other: A) {
          pre: true;
          post: true;
          modifies: self.a, other.x;
        }
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const e = (ast!.declarations[1] as KindDecl).events[0]!;
    expect(e.modifies).toHaveLength(2);
    expect(e.modifies[0]).toMatchObject({ root: "self", segments: ["a"] });
    expect(e.modifies[1]).toMatchObject({ root: "other", segments: ["x"] });
  });

  it("allows events and queries on roles and relators", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind Person {} kind M {}
      relator Contract mediates (Person, M) {
        property active: Boolean;
        event activate() {
          pre: self.active = false;
          post: self.active = true;
          modifies: self.active;
        }
      }
      role Signatory mediated-by Contract of Person {
        query isValid(): Boolean { body: true; }
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const r = ast!.declarations[2] as RelatorDecl;
    const role = ast!.declarations[3] as RoleDecl;
    expect(r.events).toHaveLength(1);
    expect(role.queries).toHaveLength(1);
  });
});

describe("parse — OCL preservation", () => {
  it("preserves complex OCL in pre/post clauses verbatim", () => {
    const src = `
      schema "onto/0.1";
      namespace t;
      kind D {
        property xs: Real;
        event e() {
          pre:  self.xs->forAll(x | x >= 0);
          post: self.xs@pre->size() = self.xs->size() + 1;
          modifies: self.xs;
        }
      }
    `;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const e = (ast!.declarations[0] as KindDecl).events[0]!;
    expect(e.pre[0]!.rawExpression).toBe("self.xs->forAll(x | x >= 0)");
    expect(e.post[0]!.rawExpression).toBe(
      "self.xs@pre->size() = self.xs->size() + 1",
    );
  });
});

describe("parse — full drone example", () => {
  it("parses examples/drone.onto without errors", () => {
    const path = resolve(here, "..", "examples", "drone.onto");
    const src = readFileSync(path, "utf8");
    const { ast, errors } = parse(src); // with semantic validation ON
    if (errors.length > 0) {
      // Surface error details if the example regresses.
      throw new Error(
        `Example failed to parse:\n${errors
          .map((e) => `  [${e.stage}] ${e.message} (line ${e.line ?? "?"})`)
          .join("\n")}`,
      );
    }
    expect(ast).not.toBeNull();
    expect(ast!.namespace).toBe("drone_delivery");

    const byName = new Map(ast!.declarations.map((d) => [d.name, d]));
    expect(byName.has("Drone")).toBe(true);
    expect(byName.has("DeliveryContract")).toBe(true);
    expect(byName.has("Pilot")).toBe(true);
    expect(byName.has("FlightPhase")).toBe(true);
  });
});

describe("parse — location tracking", () => {
  it("records line of each declaration and member", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Drone {
  property payload: Real;
  event start() {
    pre: true;
    post: true;
    modifies: self.payload;
  }
}`;
    const { ast, errors } = parseStructural(src);
    expect(errors).toEqual([]);
    const d = ast!.declarations[0] as KindDecl;
    expect(d.location.line).toBe(3);
    expect(d.properties[0]!.location.line).toBe(4);
    expect(d.events[0]!.location.line).toBe(5);
  });
});
