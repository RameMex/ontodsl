import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";

/**
 * Each test parses a fragment that is structurally valid and exercises
 * exactly one semantic rule. The parser returns an AST plus a list of
 * semantic errors; we assert the specific error code (S1–S13) fired.
 *
 * Note: S14 (duplicate identity within a type) is caught earlier by the
 * builder, not the validator, so it doesn't appear here.
 */

const hasCode = (
  errors: ReadonlyArray<{ stage: string; message: string }>,
  code: string,
): boolean => errors.some((e) => e.message.includes(code) || e.message !== "")
  // The validator embeds the code implicitly via rule message; we match by
  // content patterns below rather than the raw code string.
  && true;

/** Prepend mandatory file preamble. */
const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

describe("semantic — S1: duplicate declaration names", () => {
  it("flags two declarations with the same name", () => {
    const { errors } = parse(
      withPreamble(`kind A { property x: Real; } kind A { property y: Real; }`),
    );
    expect(errors.some((e) => /Duplicate declaration/.test(e.message))).toBe(
      true,
    );
  });
});

describe("semantic — S2, S3: Kind identity", () => {
  it("flags a Kind without identity declaration", () => {
    const { errors } = parse(
      withPreamble(`kind Orphan { property x: Real; }`),
    );
    expect(errors.some((e) => /must declare 'identity/.test(e.message))).toBe(
      true,
    );
  });

  it("flags an identity referencing a non-existent property", () => {
    const { errors } = parse(
      withPreamble(`kind A { identity: missing; property x: Real; }`),
    );
    expect(
      errors.some((e) => /identity property 'missing' is not declared/.test(e.message)),
    ).toBe(true);
  });

  it("accepts a Kind whose identity is a declared property", () => {
    const { errors } = parse(
      withPreamble(`kind A { identity: id; property id: String; }`),
    );
    expect(errors).toEqual([]);
  });
});

describe("semantic — S4: subkind specializes a Kind", () => {
  it("flags subkind that specializes an undeclared type", () => {
    const { errors } = parse(
      withPreamble(`subkind D specializes Ghost { property x: Real; }`),
    );
    expect(errors.some((e) => /unknown type 'Ghost'/.test(e.message))).toBe(
      true,
    );
  });

  it("flags subkind that specializes a Role (not a Kind)", () => {
    // Phase 3: the old S4 "must specialize a Kind" message was subsumed
    // by the broader S21 specialization-target matrix. Roles are not in
    // the allowed-parents list for Subkind, so S21 fires.
    const { errors } = parse(
      withPreamble(`
        kind Person { identity: id; property id: String; }
        kind Msn { identity: id; property id: String; }
        relator R mediates (Person, Msn) { identity: id; property id: String; }
        role Pilot mediated-by R of Person {}
        subkind DeliveryPilot specializes Pilot {}
      `),
    );
    expect(
      errors.some(
        (e) =>
          e.code === "S21" &&
          /Subkind 'DeliveryPilot' cannot specialize Role 'Pilot'/.test(
            e.message,
          ),
      ),
    ).toBe(true);
  });
});

describe("semantic — S5, S6: role references", () => {
  it("flags role with unknown mediator", () => {
    const { errors } = parse(
      withPreamble(`
        kind Person { identity: id; property id: String; }
        role Pilot mediated-by Ghost of Person {}
      `),
    );
    expect(errors.some((e) => /mediated-by unknown type 'Ghost'/.test(e.message))).toBe(
      true,
    );
  });

  it("flags role whose mediator is a Kind rather than a Relator", () => {
    const { errors } = parse(
      withPreamble(`
        kind Person { identity: id; property id: String; }
        kind NotARelator { identity: id; property id: String; }
        role Pilot mediated-by NotARelator of Person {}
      `),
    );
    expect(
      errors.some((e) => /mediator .* must be a Relator, but is a Kind/.test(e.message)),
    ).toBe(true);
  });

  it("flags role with unknown ofKind", () => {
    const { errors } = parse(
      withPreamble(`
        kind Person { identity: id; property id: String; }
        kind Msn { identity: id; property id: String; }
        relator R mediates (Person, Msn) { identity: id; property id: String; }
        role Pilot mediated-by R of Ghost {}
      `),
    );
    expect(errors.some((e) => /of unknown type 'Ghost'/.test(e.message))).toBe(
      true,
    );
  });
});

describe("semantic — S7: relator mediation axiom", () => {
  it("flags relator with only one participant", () => {
    const { errors } = parse(
      withPreamble(`
        kind A { identity: id; property id: String; }
        relator R mediates (A) { identity: id; property id: String; }
      `),
    );
    // A single-participant relator fails the grammar (mediates requires
    // ≥2 identifiers separated by `,`) — so we expect a PARSE error.
    expect(errors.length).toBeGreaterThan(0);
  });

  it("flags relator with duplicate participants", () => {
    const { errors } = parse(
      withPreamble(`
        kind A { identity: id; property id: String; }
        kind B { identity: id; property id: String; }
        relator R mediates (A, A) { identity: id; property id: String; }
      `),
    );
    expect(errors.some((e) => /'A' more than once/.test(e.message))).toBe(true);
  });

  it("flags relator that mediates an unknown type", () => {
    const { errors } = parse(
      withPreamble(`
        kind A { identity: id; property id: String; }
        relator R mediates (A, Ghost) { identity: id; property id: String; }
      `),
    );
    expect(errors.some((e) => /mediates unknown type 'Ghost'/.test(e.message))).toBe(
      true,
    );
  });
});

describe("semantic — S8, S9: phase-group rules", () => {
  it("flags phase-group whose ofKind is not a Kind", () => {
    const { errors } = parse(
      withPreamble(`
        kind Drone { identity: id; property id: String; }
        subkind Delivery specializes Drone {}
        phase-group P of Delivery { phase On; phase Off; }
      `),
    );
    expect(
      errors.some((e) => /'of' target .* must be a Kind, but is a Subkind/.test(e.message)),
    ).toBe(true);
  });

  it("flags duplicate phase names within a phase-group", () => {
    const { errors } = parse(
      withPreamble(`
        kind Drone { identity: id; property id: String; }
        phase-group P of Drone {
          phase Flying;
          phase Flying;
        }
      `),
    );
    expect(errors.some((e) => /duplicate phase 'Flying'/.test(e.message))).toBe(
      true,
    );
  });
});

describe("semantic — S10: member name uniqueness", () => {
  it("flags property and event with same name", () => {
    const { errors } = parse(
      withPreamble(`
        kind A {
          identity: id; property id: String;
          property x: Real;
          event x() { pre: true; post: true; }
        }
      `),
    );
    expect(
      errors.some((e) => /declares 'x' more than once/.test(e.message)),
    ).toBe(true);
  });
});

describe("semantic — S11: type references resolve", () => {
  it("flags property referencing an undeclared type", () => {
    const { errors } = parse(
      withPreamble(`kind A { identity: id; property id: String; property b: Ghost; }`),
    );
    expect(errors.some((e) => /references unknown type 'Ghost'/.test(e.message))).toBe(
      true,
    );
  });

  it("accepts primitive types without declarations", () => {
    const { errors } = parse(
      withPreamble(`
        kind A {
          identity: id; property id: String;
          property a: Real;
          property b: Integer;
          property c: Boolean;
          property d: String;
        }
      `),
    );
    expect(errors).toEqual([]);
  });

  it("accepts user-defined types declared elsewhere in the file", () => {
    const { errors } = parse(
      withPreamble(`
        kind B { identity: id; property id: String; }
        kind A { identity: id; property id: String; property b: B; }
      `),
    );
    expect(errors).toEqual([]);
  });
});

describe("semantic — S12, S13: modifies paths", () => {
  it("flags modifies path whose root is neither self nor a parameter", () => {
    const { errors } = parse(
      withPreamble(`
        kind A {
          identity: id; property id: String; property x: Real;
          event e() {
            pre: true;
            post: true;
            modifies: unknownVar.x;
          }
        }
      `),
    );
    expect(
      errors.some((e) => /is neither 'self' nor a parameter/.test(e.message)),
    ).toBe(true);
  });

  it("flags self-rooted path referring to an unknown property", () => {
    const { errors } = parse(
      withPreamble(`
        kind A {
          identity: id; property id: String; property x: Real;
          event e() {
            pre: true;
            post: true;
            modifies: self.ghost;
          }
        }
      `),
    );
    expect(
      errors.some((e) => /'self.ghost' is not a property of 'A'/.test(e.message)),
    ).toBe(true);
  });

  it("flags parameter-rooted path whose first segment is not a property of the param type", () => {
    const { errors } = parse(
      withPreamble(`
        kind B { identity: id; property id: String; property x: Real; }
        kind A {
          identity: id; property id: String;
          event e(other: B) {
            pre: true;
            post: true;
            modifies: other.ghost;
          }
        }
      `),
    );
    expect(
      errors.some((e) => /'other.ghost' is not a property of 'B'/.test(e.message)),
    ).toBe(true);
  });

  it("flags modifies on a primitive-typed parameter", () => {
    const { errors } = parse(
      withPreamble(`
        kind A {
          identity: id; property id: String; property x: Real;
          event e(amount: Real) {
            pre: true;
            post: true;
            modifies: amount.x;
          }
        }
      `),
    );
    expect(
      errors.some((e) => /has primitive type and cannot be dotted into/.test(e.message)),
    ).toBe(true);
  });

  it("accepts a correct self.x modifies", () => {
    const { errors } = parse(
      withPreamble(`
        kind A {
          identity: id; property id: String; property x: Real;
          event e() {
            pre: true;
            post: true;
            modifies: self.x;
          }
        }
      `),
    );
    expect(errors).toEqual([]);
  });
});

describe("semantic — validator can be disabled", () => {
  it("produces an AST even with ontological violations when disabled", () => {
    const { ast, errors } = parse(
      withPreamble(`kind A {}`),
      { validateSemantics: false },
    );
    expect(ast).not.toBeNull();
    expect(errors).toEqual([]);
  });
});
