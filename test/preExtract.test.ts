import { describe, it, expect } from "vitest";
import { extractOpaqueRegions } from "../src/parser/preExtract.js";

describe("extractOpaqueRegions — invariant blocks", () => {
  it("extracts a single invariant", () => {
    const src = `kind X { invariants { self.a > 0; } }`;
    const { rewrittenSource, blocks } = extractOpaqueRegions(src);
    expect(blocks).toHaveLength(1);
    expect(blocks[0]!.invariants).toHaveLength(1);
    expect(blocks[0]!.invariants[0]!.expression).toBe("self.a > 0");
    expect(rewrittenSource).toContain("__INV_BLOCK_0__");
  });

  it("extracts multiple invariants separated by semicolons", () => {
    const src = `kind X {
      invariants {
        self.a > 0;
        self.b <> null;
        self.c->size() >= 2;
      }
    }`;
    const { blocks } = extractOpaqueRegions(src);
    expect(blocks[0]!.invariants.map((i) => i.expression)).toEqual([
      "self.a > 0",
      "self.b <> null",
      "self.c->size() >= 2",
    ]);
  });

  it("handles OCL operators the structural lexer cannot tokenize", () => {
    const src = `kind X {
      invariants {
        self.battery@pre <> self.battery;
        self.motors->forAll(m | m.rpm >= 0);
      }
    }`;
    const { blocks } = extractOpaqueRegions(src);
    expect(blocks[0]!.invariants[0]!.expression).toBe(
      "self.battery@pre <> self.battery",
    );
    expect(blocks[0]!.invariants[1]!.expression).toBe(
      "self.motors->forAll(m | m.rpm >= 0)",
    );
  });

  it("ignores 'invariants' when it appears inside an identifier", () => {
    const src = `kind X { property invariantsFoo: String; }`;
    const { blocks, rewrittenSource } = extractOpaqueRegions(src);
    expect(blocks).toHaveLength(0);
    expect(rewrittenSource).toBe(src);
  });

  it("handles multiple invariant blocks across declarations", () => {
    const src = `
      kind A { invariants { self.x > 0; } }
      kind B { invariants { self.y > 0; self.z > 0; } }
    `;
    const { blocks } = extractOpaqueRegions(src);
    expect(blocks).toHaveLength(2);
    expect(blocks[1]!.invariants).toHaveLength(2);
  });

  it("throws on unterminated invariants block", () => {
    const src = `kind X { invariants { self.a > 0;`;
    expect(() => extractOpaqueRegions(src)).toThrow(/Unterminated/);
  });

  it("throws when trailing invariant lacks ';'", () => {
    const src = `kind X { invariants { self.a > 0; self.b > 0 } }`;
    expect(() => extractOpaqueRegions(src)).toThrow(/missing terminating/);
  });
});

describe("extractOpaqueRegions — inline clauses", () => {
  it("extracts a pre clause", () => {
    const src = `event e() { pre: self.x = null; }`;
    const { inlineOcl, rewrittenSource } = extractOpaqueRegions(src);
    expect(inlineOcl).toHaveLength(1);
    expect(inlineOcl[0]!.expression).toBe("self.x = null");
    expect(rewrittenSource).toContain("__INLINE_OCL_0__");
  });

  it("extracts pre and post clauses separately", () => {
    const src = `event e() {
      pre:  self.x = null;
      post: self.x <> null;
    }`;
    const { inlineOcl } = extractOpaqueRegions(src);
    expect(inlineOcl).toHaveLength(2);
    expect(inlineOcl[0]!.expression).toBe("self.x = null");
    expect(inlineOcl[1]!.expression).toBe("self.x <> null");
  });

  it("extracts a body clause from a query", () => {
    const src = `query q(): Real { body: self.x + self.y; }`;
    const { inlineOcl } = extractOpaqueRegions(src);
    expect(inlineOcl).toHaveLength(1);
    expect(inlineOcl[0]!.expression).toBe("self.x + self.y");
  });

  it("respects parentheses in expressions that contain ';' inside strings", () => {
    const src = `event e() {
      pre: self.name = "a;b;c";
      post: self.items->forAll(i | i.x > 0);
    }`;
    const { inlineOcl } = extractOpaqueRegions(src);
    expect(inlineOcl).toHaveLength(2);
    expect(inlineOcl[0]!.expression).toBe('self.name = "a;b;c"');
    expect(inlineOcl[1]!.expression).toBe("self.items->forAll(i | i.x > 0)");
  });

  it("does NOT pre-extract modifies clauses", () => {
    // modifies is structural: identifiers + dots + commas. It must reach
    // the lexer/parser unchanged.
    const src = `event e() {
      pre: true;
      modifies: self.a, self.b;
      post: true;
    }`;
    const { inlineOcl, rewrittenSource } = extractOpaqueRegions(src);
    expect(inlineOcl).toHaveLength(2); // only pre + post
    expect(rewrittenSource).toContain("modifies: self.a, self.b;");
  });

  it("ignores the keywords 'pre', 'post', 'body' when not followed by ':'", () => {
    // `pre` could be an identifier in a different context.
    const src = `event e() { pre : self.pre = 1; }`;
    // Only the first `pre:` is extracted; `self.pre` is part of the OCL body.
    const { inlineOcl } = extractOpaqueRegions(src);
    expect(inlineOcl).toHaveLength(1);
    expect(inlineOcl[0]!.expression).toBe("self.pre = 1");
  });

  it("throws on an empty inline clause", () => {
    const src = `event e() { pre: ; }`;
    expect(() => extractOpaqueRegions(src)).toThrow(/Empty pre clause/);
  });

  it("throws on an unterminated inline clause", () => {
    const src = `event e() { pre: self.x > 0 }`;
    expect(() => extractOpaqueRegions(src)).toThrow(/Unterminated pre clause/);
  });

  it("tracks line and column of each inline clause", () => {
    const src = `event e() {
  pre:
    self.x = 0;
  post:
    self.x = 1;
}`;
    const { inlineOcl } = extractOpaqueRegions(src);
    expect(inlineOcl[0]!.line).toBe(3);
    expect(inlineOcl[1]!.line).toBe(5);
  });
});

describe("extractOpaqueRegions — interaction", () => {
  it("extracts both invariants and inline clauses in one file", () => {
    const src = `
      kind X {
        invariants { self.a > 0; }
        event e() {
          pre: self.a = 0;
          post: self.a = 1;
        }
      }
    `;
    const { blocks, inlineOcl } = extractOpaqueRegions(src);
    expect(blocks).toHaveLength(1);
    expect(inlineOcl).toHaveLength(2);
  });

  it("keeps string literals intact even when they contain keywords", () => {
    const src = `schema "pre: not an inline clause"; namespace x;`;
    const { inlineOcl, rewrittenSource } = extractOpaqueRegions(src);
    expect(inlineOcl).toHaveLength(0);
    expect(rewrittenSource).toBe(src);
  });

  it("extracts invariants containing single-line and block comments", () => {
    const src = `kind X {
      invariants {
        // First comment
        self.a > 0;
        self.b = "abc" /* block comment */;
        self.c < 100;
        // Trailing comment after last semicolon
      }
    }`;
    const { blocks } = extractOpaqueRegions(src);
    expect(blocks).toHaveLength(1);
    // Comments must be stripped from the stored expression so they
    // don't pollute downstream error messages (see splitInvariantBody
    // / stripComments in preExtract.ts).
    expect(blocks[0]!.invariants.map(i => i.expression)).toEqual([
      "self.a > 0",
      'self.b = "abc"',
      "self.c < 100",
    ]);
  });

  it("extracts inline clauses containing comments and semicolons in comments", () => {
    const src = `event e() {
      pre:
        // comment with semicolon;
        self.x = 0;
      post:
        self.x = 1 /* block; comment */;
    }`;
    const { inlineOcl } = extractOpaqueRegions(src);
    // The extractor must NOT split at the `;` inside the comments;
    // it must split only at the top-level terminating `;`. AND the
    // stored expression must be free of comment text — the comment
    // would otherwise pollute diagnostic messages.
    expect(inlineOcl).toHaveLength(2);
    expect(inlineOcl[0]!.expression).toBe("self.x = 0");
    expect(inlineOcl[1]!.expression).toBe("self.x = 1");
  });

  it("strips line comments embedded between invariants from rawExpression", () => {
    // Regression for the user's `[AC_PID] invariant violated: // some note ...`
    // bug: a `// comment` in front of an invariant used to be slurped into
    // the next invariant's raw text and ended up quoted in violation messages.
    const src = `kind X {
      invariants {
        // explanation of the next invariant
        self.kimax >= 0.0;
        /* block comment */
        self.integrator <= self.kimax;
      }
    }`;
    const { blocks } = extractOpaqueRegions(src);
    expect(blocks[0]!.invariants.map((i) => i.expression)).toEqual([
      "self.kimax >= 0.0",
      "self.integrator <= self.kimax",
    ]);
  });
});
