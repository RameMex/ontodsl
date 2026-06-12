import { describe, it, expect } from "vitest";
import { parse, renderTypeScript } from "../src/index.js";
import * as ts from "typescript";

/**
 * Phase 10 codegen tests.
 *
 * Two layers of testing:
 *   1. Structural assertions on the generated source (does it
 *      contain the right shape? does the dispatcher produce the
 *      expected sections?).
 *   2. Runtime execution of the generated code through TypeScript's
 *      transpileModule + dynamic eval. This catches semantic
 *      regressions that pure-string assertions would miss — e.g. an
 *      invariant translator that produces correct-looking JS but
 *      the wrong logic.
 *
 * The runtime tests COMPILE the generated TS string with
 * tsc.transpileModule, wrap it in an evaluator, and assert on
 * outputs. We don't need a real file system or a project context;
 * transpileModule is single-file-aware and stripping types only.
 */

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

function generate(body: string): string {
  const { ast, errors } = parse(withPreamble(body));
  if (errors.length > 0) {
    throw new Error(
      `unexpected parse errors:\n${errors.map((e) => `  ${e.code}: ${e.message}`).join("\n")}`,
    );
  }
  return renderTypeScript(ast!);
}

/**
 * Compile generated TS to JS, then `new Function`-eval it as a
 * commonjs-style module. Returns the exported names. We intentionally
 * keep this a tiny in-process evaluator instead of writing temp files
 * — fewer moving parts, fewer cleanup paths, faster.
 */
function compileAndEval(source: string): Record<string, unknown> {
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      strict: false,
    },
  });
  const moduleObj: { exports: Record<string, unknown> } = { exports: {} };
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function("module", "exports", transpiled.outputText);
  fn(moduleObj, moduleObj.exports);
  return moduleObj.exports;
}

/** Assert that the generated TS source compiles cleanly (no diagnostics). */
function assertCompiles(source: string): void {
  const { diagnostics } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      strict: true,
    },
    reportDiagnostics: true,
  });
  if (diagnostics && diagnostics.length > 0) {
    const formatted = diagnostics
      .map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n"))
      .join("\n---\n");
    throw new Error(`generated code has diagnostics:\n${formatted}`);
  }
}

// ─── Structural ──────────────────────────────────────────────────────

describe("phase10 — structural output", () => {
  it("emits header, branded type, interface, factory, validator", () => {
    const out = generate(`
      kind Customer {
        identity: email;
        property email: String;
        property age: Integer;
        invariants { self.age >= 18; }
      }
    `);
    expect(out).toMatch(/AUTO-GENERATED/);
    expect(out).toMatch(/export type CustomerId = string & \{ readonly __brand: "CustomerId" \};/);
    expect(out).toMatch(/export interface Customer \{/);
    expect(out).toMatch(/readonly email: CustomerId;/);
    expect(out).toMatch(/readonly age: number;/);
    expect(out).toMatch(/export function makeCustomer\(/);
    expect(out).toMatch(/export function validateCustomer\(/);
    expect(out).toMatch(/instance\.age >= 18/);
  });

  it("maps primitives correctly: Real/Integer → number, String → string, Boolean → boolean", () => {
    const out = generate(`
      kind X {
        identity: id;
        property id: String;
        property a: Real;
        property b: Integer;
        property c: Boolean;
      }
    `);
    expect(out).toMatch(/readonly a: number;/);
    expect(out).toMatch(/readonly b: number;/);
    expect(out).toMatch(/readonly c: boolean;/);
  });

  it("renders Set<T> as ReadonlySet<T>", () => {
    const out = generate(`
      kind A { identity: aid; property aid: String; }
      kind B {
        identity: bid;
        property bid: String;
        property xs: Set<A>;
      }
    `);
    expect(out).toMatch(/readonly xs: ReadonlySet<A>;/);
  });

  it("emits TS extends for specialized declarations", () => {
    const out = generate(`
      kind Person { identity: pid; property pid: String; }
      agent Customer specializes Person { }
    `);
    expect(out).toMatch(/export interface Customer extends Person/);
  });

  it("does not emit a factory for declarations without identity (Subkind, Role)", () => {
    const out = generate(`
      kind Person { identity: pid; property pid: String; }
      subkind Adult specializes Person { }
    `);
    expect(out).toMatch(/export function makePerson/);
    expect(out).not.toMatch(/export function makeAdult/);
  });

  it("skips Allen method calls with a SKIPPED comment", () => {
    const out = generate(`
      happening A { identity: aid; property aid: String; }
      happening B { identity: bid; property bid: String; }
      kind K {
        identity: kid;
        property kid: String;
        property a: A;
        property b: B;
        invariants { self.a.before(self.b); }
      }
    `);
    expect(out).toMatch(/SKIPPED invariant.*self\.a\.before\(self\.b\)/);
    // Should NOT emit a runtime check for the Allen call.
    expect(out).not.toMatch(/instance\.a\.before/);
  });

  it("renders forAll as Array.from(...).every(...)", () => {
    const out = generate(`
      kind X {
        identity: xid;
        property xid: String;
        property age: Integer;
      }
      kind K {
        identity: kid;
        property kid: String;
        property xs: Set<X>;
        invariants { self.xs->forAll(x | x.age >= 18); }
      }
    `);
    expect(out).toMatch(/Array\.from\(instance\.xs\)\.every/);
    expect(out).toMatch(/__x\.age >= 18/);
  });
});

// ─── Compile cleanliness ─────────────────────────────────────────────

describe("phase10 — generated code compiles", () => {
  it("simple kind compiles without diagnostics", () => {
    const out = generate(`
      kind Customer {
        identity: email;
        property email: String;
        property age: Integer;
        invariants { self.age >= 18; }
      }
    `);
    assertCompiles(out);
  });

  it("multi-decl with inheritance compiles", () => {
    const out = generate(`
      kind Person { identity: pid; property pid: String; property name: String; }
      agent Customer specializes Person { }
    `);
    assertCompiles(out);
  });

  it("collection-bearing kind compiles", () => {
    const out = generate(`
      kind Item { identity: iid; property iid: String; }
      kind Box {
        identity: bid;
        property bid: String;
        property items: Set<Item>;
        invariants { self.items->notEmpty(); }
      }
    `);
    assertCompiles(out);
  });
});

// ─── Runtime semantics ───────────────────────────────────────────────

describe("phase10 — generated runtime behavior", () => {
  it("validates simple numeric invariant correctly", () => {
    const source = generate(`
      kind Customer {
        identity: email;
        property email: String;
        property age: Integer;
        invariants { self.age >= 18; }
      }
    `);
    const mod = compileAndEval(source) as {
      makeCustomer: (d: { email: string; age: number }) => unknown;
      validateCustomer: (i: unknown) => readonly string[];
    };

    const valid = mod.makeCustomer({ email: "a@b.c", age: 25 });
    expect(mod.validateCustomer(valid)).toEqual([]);

    const invalid = mod.makeCustomer({ email: "a@b.c", age: 15 });
    const issues = mod.validateCustomer(invalid);
    expect(issues.length).toBe(1);
    expect(issues[0]).toMatch(/self\.age >= 18/);
  });

  it("validates non-null check correctly", () => {
    const source = generate(`
      kind X {
        identity: xid;
        property xid: String;
        property name: String;
        invariants { self.name <> null; }
      }
    `);
    const mod = compileAndEval(source) as {
      validateX: (i: unknown) => readonly string[];
    };
    expect(mod.validateX({ xid: "1", name: "ok" })).toEqual([]);
    expect(mod.validateX({ xid: "1", name: null }).length).toBe(1);
  });

  it("validates Set->forAll correctly", () => {
    const source = generate(`
      kind X {
        identity: xid;
        property xid: String;
        property age: Integer;
      }
      kind K {
        identity: kid;
        property kid: String;
        property xs: Set<X>;
        invariants { self.xs->forAll(x | x.age >= 18); }
      }
    `);
    const mod = compileAndEval(source) as {
      validateK: (i: unknown) => readonly string[];
    };

    const allAdult = {
      kid: "1",
      xs: new Set([
        { xid: "x1", age: 20 },
        { xid: "x2", age: 30 },
      ]),
    };
    expect(mod.validateK(allAdult)).toEqual([]);

    const oneMinor = {
      kid: "1",
      xs: new Set([
        { xid: "x1", age: 20 },
        { xid: "x2", age: 15 }, // violates
      ]),
    };
    expect(mod.validateK(oneMinor).length).toBe(1);
  });

  it("validates Set->isEmpty / notEmpty / size correctly", () => {
    const source = generate(`
      kind I { identity: iid; property iid: String; }
      kind C {
        identity: cid;
        property cid: String;
        property items: Set<I>;
        invariants { self.items->size() >= 1; }
      }
    `);
    const mod = compileAndEval(source) as {
      validateC: (i: unknown) => readonly string[];
    };
    expect(
      mod.validateC({ cid: "1", items: new Set([{ iid: "i" }]) }),
    ).toEqual([]);
    expect(
      mod.validateC({ cid: "1", items: new Set() }).length,
    ).toBe(1);
  });

  it("multiple invariants — independent reporting", () => {
    const source = generate(`
      kind X {
        identity: xid;
        property xid: String;
        property a: Integer;
        property b: Integer;
        invariants {
          self.a >= 0;
          self.b >= 0;
        }
      }
    `);
    const mod = compileAndEval(source) as {
      validateX: (i: unknown) => readonly string[];
    };

    expect(
      mod.validateX({ xid: "1", a: 5, b: 5 }),
    ).toEqual([]);

    const both = mod.validateX({ xid: "1", a: -1, b: -1 });
    expect(both.length).toBe(2);

    const onlyA = mod.validateX({ xid: "1", a: -1, b: 5 });
    expect(onlyA.length).toBe(1);
    expect(onlyA[0]).toMatch(/self\.a >= 0/);
  });

  it("factory casts identity to branded type at runtime (string still)", () => {
    const source = generate(`
      kind X {
        identity: xid;
        property xid: String;
        property n: Integer;
      }
    `);
    const mod = compileAndEval(source) as {
      makeX: (d: { xid: string; n: number }) => { xid: string; n: number };
    };
    const x = mod.makeX({ xid: "abc", n: 42 });
    // The brand is erased at runtime — only TS knows about it. The
    // value is still a plain string.
    expect(typeof x.xid).toBe("string");
    expect(x.xid).toBe("abc");
  });
});
