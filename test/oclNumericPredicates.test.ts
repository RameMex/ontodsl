import { describe, it, expect } from "vitest";
import {
  parse,
  validateSemantics,
  renderTypeScript,
  renderRust,
} from "../src/index.js";
import { verifyLSPContracts } from "../src/semantic/lspCheck.js";

/**
 * OCL numeric predicates: `x.isFinite()` and `x.isNaN()`.
 *
 * Added as a sibling to the Allen operators — same OclCall AST shape,
 * but specialised in the typechecker (require a numeric receiver) and
 * in the translators (emit `x.is_finite()` / `Number.isFinite(x)`).
 *
 * Z3 cannot model IEEE-754 NaN, so these are runtime-only checks; the
 * LSP path surfaces them as W29/W30 if used in pre/post strengthening
 * comparisons.
 */

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

describe("OCL numeric predicates — typechecking", () => {
  it("accepts isFinite on a Real property", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property x: Real;
          invariants { self.x.isFinite(); }
        }
      `),
    );
    expect(errors).toEqual([]);
    const sem = validateSemantics(ast!);
    expect(sem).toEqual([]);
  });

  it("accepts isNaN on an Integer property", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property n: Integer;
          invariants { not self.n.isNaN(); }
        }
      `),
    );
    expect(errors).toEqual([]);
    const sem = validateSemantics(ast!);
    expect(sem).toEqual([]);
  });

  it("rejects isFinite on a String receiver", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          invariants { self.id.isFinite(); }
        }
      `),
      { validateSemantics: false },
    );
    const sem = validateSemantics(ast!);
    expect(sem.length).toBeGreaterThan(0);
    expect(sem.some((e) => /isFinite.*requires a Real or Integer/.test(e.message))).toBe(true);
  });

  it("rejects isFinite with arguments", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property x: Real;
          invariants { self.x.isFinite(3.0); }
        }
      `),
    );
    const sem = validateSemantics(ast!);
    expect(sem.some((e) => /isFinite.*takes no arguments/.test(e.message))).toBe(true);
  });
});

describe("OCL numeric predicates — codegen", () => {
  it("Rust emits `.is_finite()` and `.is_nan()`", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property x: Real;
          invariants {
            self.x.isFinite();
            not self.x.isNaN();
          }
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/\(self\.x\)\.is_finite\(\)/);
    expect(libRs).toMatch(/\(self\.x\)\.is_nan\(\)/);
  });

  it("TypeScript emits `Number.isFinite(...)` and `Number.isNaN(...)`", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property x: Real;
          invariants {
            self.x.isFinite();
            not self.x.isNaN();
          }
        }
      `),
    );
    const tsOut = renderTypeScript(ast!);
    // The TS validator emits `instance.x`; the event wrapper emits `self.x`.
    expect(tsOut).toMatch(/Number\.isFinite\(instance\.x\)/);
    expect(tsOut).toMatch(/Number\.isNaN\(instance\.x\)/);
  });

  it("works in event pre-conditions (Rust wrapper)", () => {
    const { ast } = parse(
      withPreamble(`
        kind Pid {
          identity: id;
          property id: String;
          property output: Real;
          event update(target: Real, measurement: Real) {
            pre: target.isFinite();
            pre: measurement.isFinite();
            post: self.output.isFinite();
            modifies: self.output;
          }
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/\(target\)\.is_finite\(\)/);
    expect(libRs).toMatch(/\(measurement\)\.is_finite\(\)/);
    expect(libRs).toMatch(/\(self\.output\)\.is_finite\(\)/);
  });
});

describe("OCL numeric predicates — Z3 LSP verification", () => {
  it("detects S29 strengthening when child adds an isFinite pre that parent lacks", async () => {
    // Parent accepts any Real; child rejects NaN/Inf. The child's
    // pre is strictly stronger, so an LSP violation must be reported.
    // Previously these clauses were dropped as W29 (outside the
    // decidable fragment); now isFinite is an uninterpreted predicate
    // and Z3 can prove the strengthening.
    const { ast } = parse(
      withPreamble(`
        kind Parent {
          identity: id;
          property id: String;
          property y: Real;
          event op(x: Real) {
            pre: x >= 0.0;
            post: self.y = x;
            modifies: self.y;
          }
        }
        kind Child specializes Parent {
          override event op(x: Real) {
            pre: x >= 0.0;
            pre: x.isFinite();
            post: self.y = x;
            modifies: self.y;
          }
        }
      `),
    );
    const diags = await verifyLSPContracts(ast!);
    if (process.env["DEBUG_OCL"]) {
      // eslint-disable-next-line no-console
      console.log("DIAGS:", JSON.stringify(diags, null, 2));
    }
    const hasS29 = diags.some((d) => d.code === "S29");
    expect(hasS29).toBe(true);
  });

  it("does NOT flag S29 when parent already requires isFinite and child preserves it", async () => {
    const { ast } = parse(
      withPreamble(`
        kind Parent {
          identity: id;
          property id: String;
          property y: Real;
          event op(x: Real) {
            pre: x.isFinite();
            post: self.y = x;
            modifies: self.y;
          }
        }
        kind Child specializes Parent {
          override event op(x: Real) {
            pre: x.isFinite();
            post: self.y = x;
            modifies: self.y;
          }
        }
      `),
    );
    const diags = await verifyLSPContracts(ast!);
    expect(diags.filter((d) => d.code === "S29")).toEqual([]);
  });
});
