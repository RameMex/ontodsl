import { describe, it, expect } from "vitest";
import { parse, renderRust } from "../src/index.js";

/**
 * Phase 16c — events may declare an optional return type, mirroring
 * the existing `query` syntax. The parser accepts:
 *
 *   event update(s: Real): Real { pre: …; post: …; modifies: …; }
 *
 * The shape is backwards-compatible: events without `: T` keep the
 * historical `returnType: null` (wrapper returns `Result<(), …>`).
 *
 * Codegen consumption (Result<T, &'static str>) and the `result`
 * special name in post-conditions are intentionally NOT covered in
 * this test file — they live in separate phases. This file pins down
 * the parser surface so they have something to read from.
 */

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

describe("event return type — parser", () => {
  it("parses an event with no return type (returnType = null)", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property y: Real;
          event update(x: Real) {
            post: self.y = x;
            modifies: self.y;
          }
        }
      `),
    );
    expect(errors).toEqual([]);
    const decl = ast!.declarations[0]!;
    if (!("events" in decl)) throw new Error("expected body-bearing decl");
    expect(decl.events[0]!.returnType).toBeNull();
  });

  it("parses an event with a primitive return type", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property y: Real;
          event update(x: Real): Real {
            post: self.y = x;
            modifies: self.y;
          }
        }
      `),
    );
    expect(errors).toEqual([]);
    const decl = ast!.declarations[0]!;
    if (!("events" in decl)) throw new Error("expected body-bearing decl");
    const ev = decl.events[0]!;
    expect(ev.returnType).not.toBeNull();
    expect(ev.returnType!.kind).toBe("PrimitiveType");
    if (ev.returnType!.kind === "PrimitiveType") {
      expect(ev.returnType!.name).toBe("Real");
    }
  });

  it("parses an event with a Set<T> return type", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Bus {
          identity: id;
          property id: String;
          property passengers: Set<String>;
          event roster(): Set<String> {
            post: true;
          }
        }
      `),
    );
    expect(errors).toEqual([]);
    const decl = ast!.declarations[0]!;
    if (!("events" in decl)) throw new Error("expected body-bearing decl");
    const ev = decl.events[0]!;
    expect(ev.returnType).not.toBeNull();
    expect(ev.returnType!.kind).toBe("SetType");
  });

  it("backwards compat: events without ': T' still parse cleanly across the suite", () => {
    // Sanity that the OPTIONAL grammar slot for the colon-typeRef
    // doesn't shadow the LBrace path. This is the canonical existing
    // event shape used by every example in the corpus.
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property y: Real;
          event update(x: Real) {
            pre: x.isFinite();
            post: self.y = x;
            modifies: self.y;
          }
        }
      `),
    );
    expect(errors).toEqual([]);
    expect(ast).not.toBeNull();
  });

  it("parses an event with a NamedType return type", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Pkg { identity: tn; property tn: String; }
        kind Depot {
          identity: id;
          property id: String;
          event nextPackage(): Pkg {
            post: true;
          }
        }
      `),
    );
    expect(errors).toEqual([]);
    const depot = ast!.declarations[1]!;
    if (!("events" in depot)) throw new Error("expected body-bearing decl");
    const ev = depot.events[0]!;
    expect(ev.returnType).not.toBeNull();
    expect(ev.returnType!.kind).toBe("NamedType");
    if (ev.returnType!.kind === "NamedType") {
      expect(ev.returnType!.name).toBe("Pkg");
    }
  });
});

describe("event return type — Rust codegen", () => {
  it("wrapper signature returns Result<T, &'static str> when return type declared", () => {
    const { ast } = parse(
      withPreamble(`
        kind Pid {
          identity: id;
          property id: String;
          property y: Real;
          event compute(x: Real): Real {
            pre: x.isFinite();
            post: result.isFinite();
          }
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    // The wrapper's signature carries the declared type in Result<...>.
    expect(libRs).toMatch(/-> Result<f64, &'static str>/);
    // The closure return type matches.
    expect(libRs).toMatch(/FnOnce\(&mut Self, f64\) -> f64/);
    // The wrapper binds __result and threads it through.
    expect(libRs).toMatch(/let __result = impl_fn\(self, x\);/);
    // `result` in the post-condition resolves to __result.
    expect(libRs).toMatch(/\(__result\)\.is_finite\(\)/);
    // Success path returns Ok(__result), not Ok(()).
    expect(libRs).toMatch(/Ok\(__result\)/);
    expect(libRs).not.toMatch(/Ok\(\(\)\)/);
  });

  it("backwards compat: events without return type still emit Result<()>", () => {
    const { ast } = parse(
      withPreamble(`
        kind Counter {
          identity: id;
          property id: String;
          property n: Integer;
          event inc() {
            post: self.n >= 0;
            modifies: self.n;
          }
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/-> Result<\(\), &'static str>/);
    expect(libRs).toMatch(/FnOnce\(&mut Self\)/);
    expect(libRs).not.toMatch(/-> Result<f64,/);
  });
});
