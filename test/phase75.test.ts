import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";

/**
 * Phase 7.5 tests: formal predicates on commitments.
 *
 * The predicate is an OCL Boolean clause that lives inside a
 * commitment body, keyed by `predicate:`. It uses the commitment as
 * `self` and may reference the commitment's own properties —
 * including Happening-typed ones, which opens the door to Allen-based
 * temporal constraints on what is committed to.
 *
 * Not in scope for 7.5:
 *   - Z3 verification of predicate strengthening/weakening across
 *     commitment specialization (that's 7.75)
 *   - Cross-commitment predicate references
 *   - Multiple predicates per commitment (grammar allows the syntax,
 *     the builder rejects it)
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

// ─── Parsing ──────────────────────────────────────────────────────────

describe("phase7.5 — predicate parsing", () => {
  it("parses a commitment with a simple predicate", () => {
    const { ast, errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment C
          debitor: A
          creditor: B {
            identity: cid;
            property cid: String;
            property desc: String;
            predicate: self.desc <> null;
          }
      `),
    );
    expect(errors).toEqual([]);
    const c = ast!.declarations.find((d) => d.name === "C")!;
    // @ts-expect-error CommitmentDecl
    expect(c.predicate).not.toBeNull();
    // @ts-expect-error
    expect(c.predicate!.rawExpression).toMatch(/self\.desc/);
  });

  it("parses a commitment WITHOUT a predicate (predicate: null)", () => {
    const { ast, errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment C
          debitor: A
          creditor: B {
            identity: cid;
            property cid: String;
          }
      `),
    );
    expect(errors).toEqual([]);
    const c = ast!.declarations.find((d) => d.name === "C")!;
    // @ts-expect-error CommitmentDecl
    expect(c.predicate).toBeNull();
  });

  it("accepts a predicate using an Allen operator on Happening props", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        happening X { identity: x; property x: String; }
        happening Y { identity: y; property y: String; }
        commitment C
          debitor: A
          creditor: B {
            identity: cid;
            property cid: String;
            property first: X;
            property second: Y;
            predicate: self.first.before(self.second);
          }
      `),
    );
    expect(errors).toEqual([]);
  });
});

// ─── Typechecker ──────────────────────────────────────────────────────

describe("phase7.5 — predicate typechecker", () => {
  it("rejects a non-Boolean predicate (S28)", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment C
          debitor: A
          creditor: B {
            identity: cid;
            property cid: String;
            property n: Real;
            predicate: self.n + 1;
          }
      `),
    );
    expect(
      has(errors, "S28", /invariant clause must have type Boolean/),
    ).toBe(true);
  });

  it("rejects a predicate referencing an unknown property (S27)", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment C
          debitor: A
          creditor: B {
            identity: cid;
            property cid: String;
            predicate: self.nonexistent;
          }
      `),
    );
    expect(has(errors, "S27", /has no property 'nonexistent'/)).toBe(true);
  });

  it("rejects Allen predicate with non-Happening receiver", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment C
          debitor: A
          creditor: B {
            identity: cid;
            property cid: String;
            property x: Real;
            property y: Real;
            predicate: self.x.before(self.y);
          }
      `),
    );
    expect(
      has(errors, "S27", /Allen.*Happening-typed receiver, got Real/),
    ).toBe(true);
  });

  it("accepts a predicate combining boolean connectives", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        happening X { identity: x; property x: String; }
        commitment C
          debitor: A
          creditor: B {
            identity: cid;
            property cid: String;
            property name: String;
            property target: X;
            predicate: self.name <> null and self.target <> null;
          }
      `),
    );
    expect(errors).toEqual([]);
  });
});

// ─── Pre-extractor / at-most-one ──────────────────────────────────────

describe("phase7.5 — one predicate per commitment", () => {
  it("rejects a commitment with two predicate clauses", () => {
    // The grammar allows multiple clauses syntactically (via MANY); the
    // builder throws when more than one is present. We surface that
    // through the parse() call's error list.
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment C
          debitor: A
          creditor: B {
            identity: cid;
            property cid: String;
            property x: String;
            property y: String;
            predicate: self.x <> null;
            predicate: self.y <> null;
          }
      `),
    );
    // The builder's defensive error bubbles up as a build-stage error.
    expect(
      errors.some((e) => /predicate clauses/i.test(e.message)),
    ).toBe(true);
  });
});
