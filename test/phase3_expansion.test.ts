import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";
import { verifyLSPContracts } from "../src/semantic/index.js";

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

describe("Phase 3 Expansion — Collection filtering, transformation, let expression & allInstances()", () => {
  
  // ─── Parsing & Typechecking of let expression ─────────────────────────
  describe("let ... in ... expression", () => {
    it("parses and typechecks simple let expressions in invariants", () => {
      const { ast, errors } = parse(
        withPreamble(`
          kind Drone {
            identity: sn;
            property sn: String;
            property speed: Real;
            invariants {
              let minSpeed = 10.0 in self.speed >= minSpeed;
            }
          }
        `),
      );
      expect(errors).toEqual([]);
      const drone = ast!.declarations.find((d) => d.name === "Drone")!;
      expect(drone.invariants[0]!.parsed!.kind).toBe("OclLet");
    });

    it("supports nested let expressions", () => {
      const { errors } = parse(
        withPreamble(`
          kind Drone {
            identity: sn;
            property sn: String;
            property speed: Real;
            invariants {
              let a = 5.0 in let b = 10.0 in self.speed >= a + b;
            }
          }
        `),
      );
      expect(errors).toEqual([]);
    });

    it("verifies type-safety inside let expression body", () => {
      const { errors } = parse(
        withPreamble(`
          kind Drone {
            identity: sn;
            property sn: String;
            property speed: Real;
            invariants {
              // Should fail because minSpeed is String and comparison expects numeric
              let minSpeed = 'fast' in self.speed >= minSpeed;
            }
          }
        `),
      );
      expect(has(errors, "S28", /operator '>=' expects numeric operands/)).toBe(true);
    });
  });

  // ─── select, reject, collect iterators ──────────────────────────────────
  describe("select / reject / collect collection iterators", () => {
    it("parses and typechecks select and reject returning Set<T>", () => {
      const { errors } = parse(
        withPreamble(`
          kind Battery { identity: id; property id: String; property charge: Real; }
          kind Drone {
            identity: sn;
            property sn: String;
            property batteries: Set<Battery>;
            invariants {
              self.batteries->select(b | b.charge > 0.5)->size() >= 0;
              self.batteries->reject(b | b.charge <= 0.5)->isEmpty();
            }
          }
        `),
      );
      expect(errors.filter((e) => e.code === "S27" || e.code === "S28")).toEqual([]);
    });

    it("rejects non-Boolean bodies in select/reject", () => {
      const { errors } = parse(
        withPreamble(`
          kind Battery { identity: id; property id: String; property charge: Real; }
          kind Drone {
            identity: sn;
            property sn: String;
            property batteries: Set<Battery>;
            invariants {
              self.batteries->select(b | b.charge); // non-boolean body
            }
          }
        `),
      );
      expect(has(errors, "S28", /'->select' body must return Boolean/)).toBe(true);
    });

    it("parses and typechecks collect returning Set<U>", () => {
      const { errors } = parse(
        withPreamble(`
          kind Battery { identity: id; property id: String; property charge: Real; }
          kind Drone {
            identity: sn;
            property sn: String;
            property batteries: Set<Battery>;
            invariants {
              // collect returns Set<Real>
              self.batteries->collect(b | b.charge)->includes(0.8);
            }
          }
        `),
      );
      expect(errors.filter((e) => e.code === "S27" || e.code === "S28")).toEqual([]);
    });
  });

  // ─── TypeName.allInstances() ───────────────────────────────────────────
  describe("TypeName.allInstances()", () => {
    it("parses and typechecks TypeName.allInstances()", () => {
      const { errors } = parse(
        withPreamble(`
          kind Drone {
            identity: sn;
            property sn: String;
            invariants {
              Drone.allInstances()->size() >= 0;
            }
          }
        `),
      );
      expect(errors.filter((e) => e.code === "S27" || e.code === "S28")).toEqual([]);
    });

    it("rejects allInstances() with arguments", () => {
      const { errors } = parse(
        withPreamble(`
          kind Drone {
            identity: sn;
            property sn: String;
            invariants {
              Drone.allInstances(5)->size() >= 0;
            }
          }
        `),
      );
      expect(has(errors, "S27", /'allInstances\(\)' does not take any arguments/)).toBe(true);
    });
  });

  // ─── Z3 Solving and LSP checks ──────────────────────────────────────────
  describe("Z3 Static Verification / LSP Contracts", () => {
    it("verifies let-expression contracts in LSP check", async () => {
      const src = withPreamble(`
        kind K {
          identity: kid;
          property kid: String;
          property val: Real;
          event adjust() {
            pre:  let threshold = 10.0 in self.val >= threshold;
            post: let threshold = 15.0 in self.val >= threshold;
            modifies: self.val;
          }
        }
        subkind S specializes K {
          override event adjust() {
            // Stronger pre-condition (val >= 20 is stronger than val >= 10, so parent_pre => child_pre fails)
            pre:  let threshold = 20.0 in self.val >= threshold;
            post: let threshold = 15.0 in self.val >= threshold;
            modifies: self.val;
          }
        }
      `);
      const { ast } = parse(src);
      const diags = await verifyLSPContracts(ast!);
      expect(diags.some((d) => d.code === "S29")).toBe(true);
    }, 20_000);

    it("verifies select and reject contracts in LSP check", async () => {
      const src = withPreamble(`
        kind Battery { identity: id; property id: String; property charge: Real; }
        kind K {
          identity: kid;
          property kid: String;
          property batteries: Set<Battery>;
          event refill() {
            pre:  self.batteries->select(b | b.charge < 1.0)->isEmpty();
            post: self.batteries->reject(b | b.charge >= 1.0)->isEmpty();
            modifies: self.batteries;
          }
        }
        subkind S specializes K {
          override event refill() {
            pre:  self.batteries->select(b | b.charge < 1.0)->isEmpty();
            post: self.batteries->reject(b | b.charge >= 1.0)->isEmpty();
            modifies: self.batteries;
          }
        }
      `);
      const { ast } = parse(src);
      const diags = await verifyLSPContracts(ast!);
      // All contracts should be fully verified without any errors or warnings
      expect(diags.filter(d => ["W29", "W30", "S29", "S30"].includes(d.code))).toEqual([]);
    }, 20_000);

    it("verifies collect and allInstances() contracts in LSP check", async () => {
      const src = withPreamble(`
        kind Drone { identity: sn; property sn: String; property val: Real; }
        kind K {
          identity: kid;
          property kid: String;
          event process() {
            pre:  Drone.allInstances()->collect(d | d.val)->includes(5.0);
            post: Drone.allInstances()->collect(d | d.val)->includes(5.0);
            modifies: self.kid;
          }
        }
        subkind S specializes K {
          override event process() {
            pre:  Drone.allInstances()->collect(d | d.val)->includes(5.0);
            post: Drone.allInstances()->collect(d | d.val)->includes(5.0);
            modifies: self.kid;
          }
        }
      `);
      const { ast } = parse(src);
      const diags = await verifyLSPContracts(ast!);
      // All contracts should be fully verified without any errors or warnings
      expect(diags.filter(d => ["W29", "W30", "S29", "S30"].includes(d.code))).toEqual([]);
    }, 20_000);
  });
});
