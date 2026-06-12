import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";
import { verifyCommitmentPredicates } from "../src/semantic/index.js";

/**
 * Phase 7.75 tests: LSP-style verification of commitment predicates.
 *
 * The rule (S33): a child commitment's predicate must IMPLY the
 * parent's. Equivalently: `child ∧ ¬parent` must be UNSAT.
 *
 * W33: same treatment as W29/W30 — emitted when part of the predicate
 * is outside the decidable fragment.
 *
 * Z3 init adds ~400 ms per test; we bump the timeout accordingly.
 */

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

describe("phase7.75 — commitment predicate LSP (Z3)", () => {
  it("S33 fires when child weakens a before→meets transition", async () => {
    const src = withPreamble(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      happening X { identity: x; property x: String; }
      happening Y { identity: y; property y: String; }
      commitment Parent
        debitor: A
        creditor: B {
          identity: pid;
          property pid: String;
          property x: X;
          property y: Y;
          predicate: self.x.before(self.y);
        }
      commitment Child specializes Parent
        debitor: A
        creditor: B {
          predicate: self.x.meets(self.y);
        }
    `);
    const { ast } = parse(src);
    const diags = await verifyCommitmentPredicates(ast!);
    expect(diags.some((d) => d.code === "S33")).toBe(true);
  }, 20_000);

  it("no diagnostic when child strengthens parent (identical conjoined)", async () => {
    const src = withPreamble(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      happening X { identity: x; property x: String; }
      happening Y { identity: y; property y: String; }
      commitment Parent
        debitor: A
        creditor: B {
          identity: pid;
          property pid: String;
          property x: X;
          property y: Y;
          predicate: self.x.before(self.y);
        }
      commitment Child specializes Parent
        debitor: A
        creditor: B {
          predicate: self.x.before(self.y);
        }
    `);
    const { ast } = parse(src);
    const diags = await verifyCommitmentPredicates(ast!);
    expect(diags.some((d) => d.code === "S33")).toBe(false);
  }, 20_000);

  it("no diagnostic when child strengthens with extra conjunct", async () => {
    // Parent: x before y
    // Child:  x before y AND x meets z  (at least as strong)
    // child_predicate ⇒ parent_predicate, so child_pred ∧ ¬parent_pred
    // is UNSAT.
    const src = withPreamble(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      happening X { identity: x; property x: String; }
      happening Y { identity: y; property y: String; }
      happening Z { identity: zid; property zid: String; }
      commitment Parent
        debitor: A
        creditor: B {
          identity: pid;
          property pid: String;
          property x: X;
          property y: Y;
          property z: Z;
          predicate: self.x.before(self.y);
        }
      commitment Child specializes Parent
        debitor: A
        creditor: B {
          predicate: self.x.before(self.y) and self.x.meets(self.z);
        }
    `);
    const { ast } = parse(src);
    const diags = await verifyCommitmentPredicates(ast!);
    expect(diags.some((d) => d.code === "S33")).toBe(false);
  }, 20_000);

  it("S33 fires when child uses disjoint Allen relation (equals)", async () => {
    // Parent demands `before`; child promises only `equals`. equals
    // and before are disjoint — S33 fires.
    const src = withPreamble(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      happening X { identity: x; property x: String; }
      happening Y { identity: y; property y: String; }
      commitment Parent
        debitor: A
        creditor: B {
          identity: pid;
          property pid: String;
          property x: X;
          property y: Y;
          predicate: self.x.before(self.y);
        }
      commitment Child specializes Parent
        debitor: A
        creditor: B {
          predicate: self.x.equals(self.y);
        }
    `);
    const { ast } = parse(src);
    const diags = await verifyCommitmentPredicates(ast!);
    expect(diags.some((d) => d.code === "S33")).toBe(true);
  }, 20_000);

  it("no diagnostics when neither commitment has a predicate", async () => {
    const src = withPreamble(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment Parent
        debitor: A
        creditor: B { identity: pid; property pid: String; }
      commitment Child specializes Parent
        debitor: A
        creditor: B { }
    `);
    const { ast } = parse(src);
    const diags = await verifyCommitmentPredicates(ast!);
    expect(diags).toEqual([]);
  }, 20_000);

  it("skips commitments without parents (no LSP constraint)", async () => {
    // Standalone commitment with a predicate — there's no parent
    // commitment to check against, so the verifier should not emit
    // anything.
    const src = withPreamble(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      happening X { identity: x; property x: String; }
      happening Y { identity: y; property y: String; }
      commitment C
        debitor: A
        creditor: B {
          identity: cid;
          property cid: String;
          property x: X;
          property y: Y;
          predicate: self.x.before(self.y);
        }
    `);
    const { ast } = parse(src);
    const diags = await verifyCommitmentPredicates(ast!);
    expect(diags).toEqual([]);
  }, 20_000);

  it("converse Allen equivalence recognised (child uses 'after' where parent has 'before')", async () => {
    // Parent: x.before(y)  →  x.end < y.start
    // Child:  y.after(x)   →  x.end < y.start  (same formula)
    // Equivalent, so no S33.
    const src = withPreamble(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      happening X { identity: x; property x: String; }
      happening Y { identity: y; property y: String; }
      commitment Parent
        debitor: A
        creditor: B {
          identity: pid;
          property pid: String;
          property x: X;
          property y: Y;
          predicate: self.x.before(self.y);
        }
      commitment Child specializes Parent
        debitor: A
        creditor: B {
          predicate: self.y.after(self.x);
        }
    `);
    const { ast } = parse(src);
    const diags = await verifyCommitmentPredicates(ast!);
    expect(diags.some((d) => d.code === "S33")).toBe(false);
  }, 20_000);
});

describe("phase7.75 — W33 for undecidable predicates", () => {
  it("emits W33 when predicate uses reference-equality navigation", async () => {
    // Null check on a Happening-typed property — ref equality isn't in
    // the decidable fragment. Translator skips the clause, entire
    // predicate becomes unverifiable → W33.
    const src = withPreamble(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      happening X { identity: x; property x: String; }
      commitment Parent
        debitor: A
        creditor: B {
          identity: pid;
          property pid: String;
          property target: X;
          predicate: self.target <> null;
        }
      commitment Child specializes Parent
        debitor: A
        creditor: B {
          predicate: self.target <> null;
        }
    `);
    const { ast } = parse(src);
    const diags = await verifyCommitmentPredicates(ast!);
    expect(diags.some((d) => d.code === "W33")).toBe(true);
  }, 20_000);
});
