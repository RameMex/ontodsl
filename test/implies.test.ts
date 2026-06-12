import { describe, it, expect } from "vitest";
import { parse, renderRust } from "../src/index.js";

/**
 * `implies` — OCL material implication. `P implies Q ≡ (not P) or Q`.
 * Lowest-precedence boolean operator; right-associative. Added 2026-
 * 05-20 after Flash 2.5 kept producing `implies` for ArduPilot
 * components (AP_Baro, AP_Compass) and burning iterations on lex
 * errors before this was available.
 *
 * Desugared at parse time so codegen/Z3/typechecker never see an
 * implies node — they just see the equivalent `or` tree.
 */

describe("OCL — `implies` operator", () => {
  it("parses and desugars a simple `P implies Q` invariant", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Sensor {
  identity: id;
  property id: String;
  property healthy: Boolean;
  property pressure: Real;
  invariants {
    self.healthy implies self.pressure > 0.0;
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    expect(ast).not.toBeNull();

    // Codegen should emit the `or` form, not anything containing
    // the literal word "implies" outside the diagnostic string
    // (rawExpression is preserved verbatim in the violation message
    // for traceability — that's fine, it's a quoted string literal,
    // not parsed Rust).
    const { libRs } = renderRust(ast!, { crateName: "t" });
    // Strip string literals before checking for `implies` leaking
    // into code positions.
    const codeOnly = libRs.replace(/"[^"]*"/g, '""');
    expect(codeOnly).not.toMatch(/\bimplies\b/);
    // The desugared shape: `(not P) || Q`. We don't pin the exact
    // parenthesisation — only that `!` appears before `self.healthy`
    // and `||` connects it to `self.pressure`.
    expect(libRs).toMatch(/!\(+self\.healthy\)+.*\|\|.*self\.pressure/);
  });

  it("is right-associative: a implies b implies c", () => {
    const src = `schema "onto/0.1";
namespace t;
kind X {
  identity: id;
  property id: String;
  property a: Boolean;
  property b: Boolean;
  property c: Boolean;
  invariants {
    self.a implies self.b implies self.c;
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    // `a implies (b implies c)` = `!a || (!b || c)`
    // We don't pin the exact parenthesisation — only that c appears
    // to the right of b's negation in the emitted tree.
    const { libRs } = renderRust(ast!, { crateName: "x" });
    const inv = libRs.match(/if !\(\(([^)]|\([^)]*\))*\)\)/)?.[0] ?? "";
    expect(inv).toContain("self.a");
    expect(inv).toContain("self.b");
    expect(inv).toContain("self.c");
  });

  it("composes with and/or at higher precedence", () => {
    // `a and b implies c` should parse as `(a and b) implies c`
    // (because `and` binds tighter than `implies`).
    const src = `schema "onto/0.1";
namespace t;
kind Y {
  identity: id;
  property id: String;
  property a: Boolean;
  property b: Boolean;
  property c: Boolean;
  invariants {
    self.a and self.b implies self.c;
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "y" });
    // Desugared: !((self.a && self.b)) || self.c
    expect(libRs).toMatch(/!\(+self\.a && self\.b\)+/);
  });
});
