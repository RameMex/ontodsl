import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";
import { verifyLSPContracts } from "../src/semantic/index.js";

/**
 * Phase 6.5 suite: Allen's interval-algebra operators on Happening
 * references, including Z3-backed LSP verification.
 *
 * Coverage layers:
 *   1. OCL parsing/typechecking — a.before(b), all 13 method names
 *   2. Typechecker error paths — wrong receiver / wrong arg type
 *   3. Structural <<before>>, <<meets>>, etc. relation stereotypes (S24)
 *   4. Z3 decisions: equivalent / disjoint / converse / transitive
 *
 * Z3 tests run ~300–600 ms each with cold solver init; vitest caches
 * the module across tests so cumulative overhead is bounded.
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

// ─── OCL typechecker: happy paths ─────────────────────────────────────

describe("phase65 — Allen OCL typechecking (happy path)", () => {
  for (const op of [
    "before",
    "after",
    "meets",
    "metBy",
    "overlaps",
    "overlappedBy",
    "during",
    "contains",
    "starts",
    "startedBy",
    "finishes",
    "finishedBy",
    "equals",
  ]) {
    it(`accepts '${op}' on two Happening refs`, () => {
      const { errors } = parse(
        withPreamble(`
          happening A { identity: aid; property aid: String; }
          happening B { identity: bid; property bid: String; }
          kind K {
            identity: kid;
            property kid: String;
            property a: A;
            property b: B;
            invariants { self.a.${op}(self.b); }
          }
        `),
      );
      expect(errors).toEqual([]);
    });
  }

  it("accepts Allen invariant combined with boolean connectives", () => {
    const { errors } = parse(
      withPreamble(`
        happening A { identity: aid; property aid: String; }
        happening B { identity: bid; property bid: String; }
        happening C { identity: cid; property cid: String; }
        kind K {
          identity: kid;
          property kid: String;
          property a: A;
          property b: B;
          property c: C;
          invariants {
            self.a.before(self.b) and self.b.before(self.c);
          }
        }
      `),
    );
    expect(errors).toEqual([]);
  });
});

// ─── OCL typechecker: rejection paths ─────────────────────────────────

describe("phase65 — Allen OCL typechecking (errors)", () => {
  it("rejects Allen with non-Happening receiver (S27)", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: kid;
          property kid: String;
          property x: Real;
          property y: Real;
          invariants { self.x.before(self.y); }
        }
      `),
    );
    expect(
      has(errors, "S27", /Happening-typed receiver, got Real/),
    ).toBe(true);
  });

  it("rejects Allen with non-Happening argument (S28)", () => {
    const { errors } = parse(
      withPreamble(`
        happening A { identity: aid; property aid: String; }
        kind K {
          identity: kid;
          property kid: String;
          property a: A;
          property x: Real;
          invariants { self.a.before(self.x); }
        }
      `),
    );
    expect(
      has(errors, "S28", /argument must be a Happening reference, got Real/),
    ).toBe(true);
  });

  it("rejects '.before()' without argument (S27)", () => {
    const { errors } = parse(
      withPreamble(`
        happening A { identity: aid; property aid: String; }
        kind K {
          identity: kid;
          property kid: String;
          property a: A;
          invariants { self.a.before(); }
        }
      `),
    );
    expect(has(errors, "S27", /is binary/)).toBe(true);
  });
});

// ─── Relation-level stereotypes: structural Allen facts ──────────────

describe("phase65 — structural <<allen>> relation stereotypes (S24)", () => {
  it("accepts <<before>> between two Happenings", () => {
    const { errors } = parse(
      withPreamble(`
        happening A { identity: aid; property aid: String; }
        happening B { identity: bid; property bid: String; }
        relation r: <<before>> from A [1] to B [1];
      `),
    );
    expect(errors.some((e) => e.code === "S24")).toBe(false);
  });

  it("accepts <<meets>> between two Happenings", () => {
    const { errors } = parse(
      withPreamble(`
        happening A { identity: aid; property aid: String; }
        happening B { identity: bid; property bid: String; }
        relation r: <<meets>> from A [1] to B [1];
      `),
    );
    expect(errors.some((e) => e.code === "S24")).toBe(false);
  });

  it("rejects <<before>> when source is a Kind", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        happening H { identity: hid; property hid: String; }
        relation r: <<before>> from K [1] to H [1];
      `),
    );
    expect(
      has(errors, "S24", /<<before>>.*source must be a Happening/),
    ).toBe(true);
  });
});

// ─── Z3 decisions: the interesting part ───────────────────────────────

describe("phase65 — Z3 decides Allen contracts", () => {
  it("S30 fires when child post-condition weakens a before→meets transition", async () => {
    // `meets` does NOT imply `before` (they're disjoint Allen relations),
    // so child_post ∧ ¬parent_post is satisfiable.
    const src = withPreamble(`
      happening A { identity: aid; property aid: String; }
      happening B { identity: bid; property bid: String; }
      kind K {
        identity: kid;
        property kid: String;
        property a: A;
        property b: B;
        event plan() {
          pre: true;
          post: self.a.before(self.b);
          modifies: self.a;
        }
      }
      subkind S specializes K {
        override event plan() {
          pre: true;
          post: self.a.meets(self.b);
          modifies: self.a;
        }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(diags.some((d) => d.code === "S30")).toBe(true);
    expect(diags.some((d) => d.code === "S29")).toBe(false);
  }, 20_000);

  it("no diagnostics when parent and child posts are identical Allen", async () => {
    const src = withPreamble(`
      happening A { identity: aid; property aid: String; }
      happening B { identity: bid; property bid: String; }
      kind K {
        identity: kid;
        property kid: String;
        property a: A;
        property b: B;
        event plan() {
          pre: true;
          post: self.a.before(self.b);
          modifies: self.a;
        }
      }
      subkind S specializes K {
        override event plan() {
          pre: true;
          post: self.a.before(self.b);
          modifies: self.a;
        }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(diags.some((d) => d.code === "S29" || d.code === "S30")).toBe(
      false,
    );
  }, 20_000);

  it("Z3 recognises converse equivalence: a.before(b) ≡ b.after(a)", async () => {
    const src = withPreamble(`
      happening A { identity: aid; property aid: String; }
      happening B { identity: bid; property bid: String; }
      kind K {
        identity: kid;
        property kid: String;
        property a: A;
        property b: B;
        event plan() {
          pre: true;
          post: self.a.before(self.b);
          modifies: self.a;
        }
      }
      subkind S specializes K {
        override event plan() {
          pre: true;
          post: self.b.after(self.a);
          modifies: self.a;
        }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(diags.some((d) => d.code === "S29" || d.code === "S30")).toBe(
      false,
    );
  }, 20_000);

  it("S29 fires when child pre-condition strengthens (equals ⇒ stronger than before)", async () => {
    // Parent: any state where `a.before(b)` accepts the call.
    // Child requires `a.equals(b)`. `equals` REJECTS everything `before`
    // accepts (they're disjoint Allen relations), so parent_pre ∧
    // ¬child_pre is satisfiable.
    const src = withPreamble(`
      happening A { identity: aid; property aid: String; }
      happening B { identity: bid; property bid: String; }
      kind K {
        identity: kid;
        property kid: String;
        property a: A;
        property b: B;
        event plan() {
          pre: self.a.before(self.b);
          post: true;
          modifies: self.a;
        }
      }
      subkind S specializes K {
        override event plan() {
          pre: self.a.equals(self.b);
          post: true;
          modifies: self.a;
        }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(diags.some((d) => d.code === "S29")).toBe(true);
  }, 20_000);

  it("structural axiom blocks degenerate same-happening Allen (a.before(a) unsat)", async () => {
    // a.before(a) requires a.end < a.start which contradicts the
    // structural axiom a.start < a.end. So if parent pre is TRUE and
    // child pre is `self.a.before(self.a)`, parent_pre ∧ ¬child_pre is
    // satisfiable → S29 fires. Good: user gets warned that the child
    // pre is unsatisfiable.
    const src = withPreamble(`
      happening A { identity: aid; property aid: String; }
      kind K {
        identity: kid;
        property kid: String;
        property a: A;
        event plan() {
          pre: true;
          post: true;
          modifies: self.a;
        }
      }
      subkind S specializes K {
        override event plan() {
          pre: self.a.before(self.a);
          post: true;
          modifies: self.a;
        }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(diags.some((d) => d.code === "S29")).toBe(true);
  }, 20_000);
});
