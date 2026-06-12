import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";
import { verifyLSPContracts } from "../src/semantic/index.js";

/**
 * Phase 4 test suite. One describe block per rule.
 *
 * S26/S27/S28 are part of the synchronous validator and parse-time
 * errors surface on `parse().errors`. S29/S30 run the Z3 verifier which
 * is async and opt-in via `verifyLSPContracts(ast)`.
 *
 * Z3 initialization takes ~100 ms on cold start; vitest caches the
 * module across tests so the cumulative overhead is bounded.
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

// ─── [S26] OCL parse errors ────────────────────────────────────────────

describe("phase4 — S26: OCL syntax errors", () => {
  it("flags an invariant with missing RHS after '+'", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          invariants { self.x + ; }
        }
      `),
    );
    expect(has(errors, "S26", /invariant.*OCL syntax error/)).toBe(true);
  });

  it("flags a malformed pre-condition", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          event step() { pre: self.x >; post: self.x = 1; modifies: self.x; }
        }
      `),
    );
    expect(has(errors, "S26", /pre clause has OCL syntax error/)).toBe(true);
  });

  it("does not fire on well-formed OCL", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          invariants { self.x > 0; }
        }
      `),
    );
    expect(errors.some((e) => e.code === "S26")).toBe(false);
  });

  it("does not fire on well-formed OCL with comments", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          invariants {
            // Check that x is positive
            self.x > 0; /* x must be positive */
            // Another comment
          }
          event step() {
            pre:
              // comment inside pre
              self.x = 0;
            post:
              self.x = 1; // comment inside post
            modifies: self.x;
          }
        }
      `),
    );
    expect(errors.some((e) => e.code === "S26")).toBe(false);
  });
});

// ─── [S27] name / nav / @pre resolution ────────────────────────────────

describe("phase4 — S27: OCL name resolution", () => {
  it("flags an unknown property", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          invariants { self.nonexistent > 0; }
        }
      `),
    );
    expect(has(errors, "S27", /no property 'nonexistent'/)).toBe(true);
  });

  it("flags an unknown variable in a pre-condition", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          event step() { pre: unknownVar > 0; post: self.x = 1; modifies: self.x; }
        }
      `),
    );
    expect(has(errors, "S27", /unknown name 'unknownVar'/)).toBe(true);
  });

  it("rejects @pre in a pre-condition", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          event step() { pre: self.x@pre > 0; post: self.x = 1; modifies: self.x; }
        }
      `),
    );
    expect(has(errors, "S27", /'@pre' is only legal inside post-conditions/)).toBe(
      true,
    );
  });

  it("rejects @pre in an invariant", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          invariants { self.x@pre > 0; }
        }
      `),
    );
    expect(has(errors, "S27", /'@pre' is only legal inside post-conditions/)).toBe(
      true,
    );
  });

  it("accepts @pre in a post-condition", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          event step(n: Real) {
            pre:  n > 0;
            post: self.x = self.x@pre + n;
            modifies: self.x;
          }
        }
      `),
    );
    expect(errors.some((e) => e.code === "S27")).toBe(false);
  });

  it("flags a missing query call target", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          invariants { self.ghostQuery() > 0; }
        }
      `),
    );
    expect(has(errors, "S27", /no query 'ghostQuery\(\)'/)).toBe(true);
  });
});

// ─── [S28] type compatibility ──────────────────────────────────────────

describe("phase4 — S28: OCL type compatibility", () => {
  it("flags arithmetic on String", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property s: String;
          invariants { self.s + 1 > 0; }
        }
      `),
    );
    expect(has(errors, "S28", /operator '\+' expects numeric/)).toBe(true);
  });

  it("flags a non-boolean invariant", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          invariants { self.x; }
        }
      `),
    );
    expect(has(errors, "S28", /invariant clause must have type Boolean/)).toBe(true);
  });

  it("flags comparing String with Real", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property s: String;
          property x: Real;
          invariants { self.s = self.x; }
        }
      `),
    );
    expect(has(errors, "S28", /compares incompatible types/)).toBe(true);
  });

  it("allows Real = Integer (numeric promotion)", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          property n: Integer;
          invariants { self.x = self.n; }
        }
      `),
    );
    expect(errors.some((e) => e.code === "S28")).toBe(false);
  });

  it("flags query body with incompatible return type", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          query stringify(): String { body: self.x; }
        }
      `),
    );
    expect(has(errors, "S28", /not compatible with the declared return type/)).toBe(
      true,
    );
  });

  it("accepts a well-typed contract", () => {
    const { errors } = parse(
      withPreamble(`
        kind K {
          identity: id;
          property id: String;
          property x: Real;
          event step(n: Real) {
            pre:  n > 0;
            post: self.x = self.x@pre + n;
            modifies: self.x;
          }
          query current(): Real { body: self.x; }
        }
      `),
    );
    expect(errors.some((e) => e.code === "S27" || e.code === "S28")).toBe(false);
  });
});

// ─── [S29] pre-condition strengthening (Liskov violation) ──────────────

describe("phase4 — S29: pre-condition strengthening (Z3)", () => {
  it("flags a child that narrows a numeric pre-condition", async () => {
    const src = withPreamble(`
      kind K {
        identity: id;
        property id: String;
        property x: Real;
        event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
      }
      subkind S specializes K {
        // narrower pre: rejects 0 < n <= 5 which parent accepts
        override event step(n: Real) { pre: n > 5; post: self.x = n; modifies: self.x; }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(
      diags.some(
        (d) =>
          d.code === "S29" && /strengthens pre-condition/.test(d.message),
      ),
    ).toBe(true);
  }, 20_000);

  it("accepts a child that widens the pre (LSP-compatible)", async () => {
    const src = withPreamble(`
      kind K {
        identity: id;
        property id: String;
        property x: Real;
        event step(n: Real) { pre: n > 5; post: self.x = n; modifies: self.x; }
      }
      subkind S specializes K {
        // wider pre: accepts everything parent does, and more
        override event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(diags.some((d) => d.code === "S29")).toBe(false);
  }, 20_000);

  it("accepts identical pre-conditions", async () => {
    const src = withPreamble(`
      kind K {
        identity: id;
        property id: String;
        property x: Real;
        event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
      }
      subkind S specializes K {
        override event step(n: Real) { pre: n > 0; post: self.x = n; modifies: self.x; }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(diags.some((d) => d.code === "S29")).toBe(false);
  }, 20_000);
});

// ─── [S30] post-condition weakening (Liskov violation) ─────────────────

describe("phase4 — S30: post-condition weakening (Z3)", () => {
  it("flags a child that weakens the post", async () => {
    const src = withPreamble(`
      kind K {
        identity: id;
        property id: String;
        property x: Real;
        event step() { pre: true; post: self.x > 10; modifies: self.x; }
      }
      subkind S specializes K {
        // weaker post: parent promised x>10, child only x>0
        override event step() { pre: true; post: self.x > 0; modifies: self.x; }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(
      diags.some(
        (d) => d.code === "S30" && /weakens post-condition/.test(d.message),
      ),
    ).toBe(true);
  }, 20_000);

  it("accepts a child that strengthens the post", async () => {
    const src = withPreamble(`
      kind K {
        identity: id;
        property id: String;
        property x: Real;
        event step() { pre: true; post: self.x > 0; modifies: self.x; }
      }
      subkind S specializes K {
        override event step() { pre: true; post: self.x > 10; modifies: self.x; }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(diags.some((d) => d.code === "S30")).toBe(false);
  }, 20_000);
});

// ─── [W29/W30] unverifiable clauses ────────────────────────────────────

describe("phase4 — W29/W30: clauses outside the decidable fragment", () => {
  it("emits W30 when a clause navigates to a reference type", async () => {
    const src = withPreamble(`
      kind BatteryPack {
        identity: bid;
        property bid: String;
        property charge: Real;
      }
      kind K {
        identity: id;
        property id: String;
        property battery: BatteryPack;
        event swap(b: BatteryPack) {
          pre:  b.charge > 0;
          // self.battery = b is reference equality — out of fragment
          post: self.battery = b;
          modifies: self.battery;
        }
      }
      subkind S specializes K {
        override event swap(b: BatteryPack) {
          pre:  b.charge > 0;
          post: self.battery = b;
          modifies: self.battery;
        }
      }
    `);
    const { ast } = parse(src);
    const diags = await verifyLSPContracts(ast!);
    expect(diags.some((d) => d.code === "W30")).toBe(true);
  }, 20_000);
});
