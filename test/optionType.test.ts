import { describe, it, expect } from "vitest";
import { parse, renderRust, renderTypeScript } from "../src/index.js";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

/**
 * Phase 16b — `Option<T>` is an explicit optionality marker, the
 * first nullable type in the DSL. Codegen maps it to `Option<T>` in
 * Rust and `T | null` in TypeScript. The previous "elide all
 * <> null invariants as vacuous" rule is refined: it only elides
 * checks against fields whose declared type is NOT `Option<T>`.
 * For Option fields the standard translator emits a real
 * `.is_some()` / `.is_none()` check.
 *
 * Out of scope here: navigating through Option<T>.<member>, default
 * values (Phase 16b's sibling task), and Z3-side sum-type modeling.
 */

describe("Option<T> — parser", () => {
  it("parses Option<Real> as a property type", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property altitude: Option<Real>;
        }
      `),
    );
    expect(errors).toEqual([]);
    const decl = ast!.declarations[0]!;
    if (!("properties" in decl)) throw new Error("expected body-bearing");
    const alt = decl.properties.find((p) => p.name === "altitude")!;
    expect(alt.propertyType.kind).toBe("OptionType");
    if (alt.propertyType.kind === "OptionType") {
      expect(alt.propertyType.elementType.kind).toBe("PrimitiveType");
      if (alt.propertyType.elementType.kind === "PrimitiveType") {
        expect(alt.propertyType.elementType.name).toBe("Real");
      }
    }
  });

  it("parses Option<NamedType>", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Pkg { identity: id; property id: String; }
        kind Truck {
          identity: id;
          property id: String;
          property current: Option<Pkg>;
        }
      `),
    );
    expect(errors).toEqual([]);
    const truck = ast!.declarations[1]!;
    if (!("properties" in truck)) throw new Error("expected body-bearing");
    const cur = truck.properties.find((p) => p.name === "current")!;
    expect(cur.propertyType.kind).toBe("OptionType");
  });

  it("doesn't clash with identifiers starting with 'Option'", () => {
    // `OptionSelected` should parse as a NamedType, not as `Option` + garbage.
    const { ast, errors } = parse(
      withPreamble(`
        kind OptionSelected { identity: id; property id: String; }
        kind Form {
          identity: id;
          property id: String;
          property choice: OptionSelected;
        }
      `),
    );
    expect(errors).toEqual([]);
    const form = ast!.declarations[1]!;
    if (!("properties" in form)) throw new Error("expected body-bearing");
    const choice = form.properties.find((p) => p.name === "choice")!;
    expect(choice.propertyType.kind).toBe("NamedType");
  });
});

describe("Option<T> — Rust codegen", () => {
  it("emits Rust Option<T> for property declarations", () => {
    const { ast } = parse(
      withPreamble(`
        kind GPS {
          identity: id;
          property id: String;
          property lastFix: Option<Real>;
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/pub last_fix: Option<f64>,/);
  });

  it("`<> null` on an Option field becomes `.is_some()`", () => {
    const { ast } = parse(
      withPreamble(`
        kind GPS {
          identity: id;
          property id: String;
          property lastFix: Option<Real>;
          invariants {
            self.lastFix <> null;
          }
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/self\.last_fix\.is_some\(\)/);
    // The validator should NOT elide the check now.
    expect(libRs).not.toMatch(/ELIDED invariant.*lastFix <> null/);
  });

  it("`= null` on an Option field becomes `.is_none()`", () => {
    const { ast } = parse(
      withPreamble(`
        kind GPS {
          identity: id;
          property id: String;
          property lastFix: Option<Real>;
          invariants {
            self.lastFix = null;
          }
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/self\.last_fix\.is_none\(\)/);
  });

  it("`<> null` on a NON-Option field is STILL elided (backwards compat)", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property y: Real;
          invariants {
            self.y <> null;
          }
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/ELIDED invariant.*y <> null/);
    expect(libRs).not.toMatch(/self\.y\.is_some/);
  });
});

describe("Option<T> — TypeScript codegen", () => {
  it("emits `T | null` for Option<T> properties", () => {
    const { ast } = parse(
      withPreamble(`
        kind GPS {
          identity: id;
          property id: String;
          property lastFix: Option<Real>;
          property activeRoute: Option<String>;
        }
      `),
    );
    const tsOut = renderTypeScript(ast!);
    expect(tsOut).toMatch(/lastFix: number \| null/);
    expect(tsOut).toMatch(/activeRoute: string \| null/);
  });
});
