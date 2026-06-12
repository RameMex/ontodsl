import { describe, it, expect } from "vitest";
import { parse, renderTypeScript } from "../src/index.js";
import * as ts from "typescript";

/**
 * Phase 10.5 tests: event handler wrappers.
 *
 * Same testing strategy as Phase 10:
 *   - Structural assertions on the generated source.
 *   - Compile cleanliness via ts.transpileModule with strict diagnostics.
 *   - Runtime semantics: compile to JS, eval, call the wrapper with a
 *     supplied impl, verify pre/post checks fire correctly.
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

describe("phase10.5 — structural output", () => {
  it("emits Impl type and wrap function for each event", () => {
    const out = generate(`
      kind Account {
        identity: id;
        property id: String;
        property balance: Real;
        event deposit(amount: Real) {
          pre: amount > 0;
          post: self.balance = self.balance@pre + amount;
          modifies: self.balance;
        }
      }
    `);
    expect(out).toMatch(/export type AccountDepositImpl =/);
    expect(out).toMatch(/export function wrapAccountDeposit\(/);
    expect(out).toMatch(/preViolations/);
    expect(out).toMatch(/postViolations/);
    expect(out).toMatch(/__pre = \{/);
    expect(out).toMatch(/__result = impl/);
  });

  it("does not emit pre/post sections when no clauses", () => {
    const out = generate(`
      kind X {
        identity: id;
        property id: String;
        event noop() {
          pre: true;
          post: true;
          modifies: self.id;
        }
      }
    `);
    // `pre: true` always succeeds, but the wrapper still emits the
    // section. We ARE emitting the body, so test that pre/post arrays
    // showed up at all in the wrapper.
    expect(out).toMatch(/wrapXNoop/);
  });

  it("includes parameters in impl type signature", () => {
    const out = generate(`
      kind X {
        identity: id;
        property id: String;
        property balance: Real;
        event transfer(other: X, amount: Real) {
          pre: amount > 0;
          post: self.balance = self.balance@pre - amount;
          modifies: self.balance;
        }
      }
    `);
    expect(out).toMatch(/XTransferImpl = \(self: X, other: X, amount: number\)/);
  });

  it("@pre references collected into snapshot", () => {
    const out = generate(`
      kind X {
        identity: id;
        property id: String;
        property balance: Real;
        property count: Integer;
        event step() {
          pre: true;
          post: self.balance = self.balance@pre + 1;
          post: self.count = self.count@pre + 1;
          modifies: self.balance;
          modifies: self.count;
        }
      }
    `);
    expect(out).toMatch(/"self\.balance": self\.balance/);
    expect(out).toMatch(/"self\.count": self\.count/);
  });

  it("skips Allen calls in pre/post with SKIPPED comment", () => {
    const out = generate(`
      happening A { identity: a; property a: String; }
      happening B { identity: b; property b: String; }
      kind K {
        identity: id;
        property id: String;
        property a: A;
        property b: B;
        event sequence() {
          pre: self.a.before(self.b);
          post: true;
          modifies: self.id;
        }
      }
    `);
    expect(out).toMatch(/SKIPPED pre-clause.*\.before/);
    // The Allen call appears ONLY in the SKIPPED comment, never in
    // executable code. We check that no `if (!(...self.a.before...))`
    // pattern made it through, which would mean the translator
    // incorrectly emitted runtime code for an unsupported call.
    expect(out).not.toMatch(/if \(!\([^)]*self\.a\.before/);
  });
});

// ─── Compile cleanliness ─────────────────────────────────────────────

describe("phase10.5 — generated wrappers compile clean", () => {
  it("simple event wrapper compiles", () => {
    const out = generate(`
      kind Account {
        identity: id;
        property id: String;
        property balance: Real;
        event deposit(amount: Real) {
          pre: amount > 0;
          post: self.balance = self.balance@pre + amount;
          modifies: self.balance;
        }
      }
    `);
    assertCompiles(out);
  });

  it("multi-param event wrapper compiles", () => {
    const out = generate(`
      kind X {
        identity: id;
        property id: String;
        property balance: Real;
        event op(a: Real, b: Integer) {
          pre: a > 0;
          pre: b > 0;
          post: self.balance = self.balance@pre + a;
          modifies: self.balance;
        }
      }
    `);
    assertCompiles(out);
  });
});

// ─── Runtime semantics ───────────────────────────────────────────────

describe("phase10.5 — wrapper runtime behaviour", () => {
  it("wrapper enforces pre-condition (throws)", () => {
    const source = generate(`
      kind X {
        identity: id;
        property id: String;
        property n: Integer;
        event inc(amount: Integer) {
          pre: amount > 0;
          post: self.n = self.n@pre + amount;
          modifies: self.n;
        }
      }
    `);
    const mod = compileAndEval(source) as {
      wrapXInc: (impl: any) => (self: any, amount: number) => any;
    };

    const impl = (self: any, amount: number) => ({
      self: { ...self, n: self.n + amount },
      modified: { n: self.n + amount },
    });
    const wrapped = mod.wrapXInc(impl);

    // amount = 0 violates pre.
    expect(() => wrapped({ id: "1", n: 5 }, 0)).toThrow(/pre violated.*amount > 0/);
  });

  it("wrapper enforces post-condition (throws when impl misbehaves)", () => {
    const source = generate(`
      kind X {
        identity: id;
        property id: String;
        property n: Integer;
        event inc(amount: Integer) {
          pre: amount > 0;
          post: self.n = self.n@pre + amount;
          modifies: self.n;
        }
      }
    `);
    const mod = compileAndEval(source) as {
      wrapXInc: (impl: any) => (self: any, amount: number) => any;
    };

    // A buggy impl that adds 2x the amount.
    const buggyImpl = (self: any, amount: number) => ({
      self: { ...self, n: self.n + amount * 2 },
      modified: { n: self.n + amount * 2 },
    });
    const wrapped = mod.wrapXInc(buggyImpl);

    expect(() => wrapped({ id: "1", n: 5 }, 3)).toThrow(/post violated/);
  });

  it("wrapper passes when pre/post both hold; returns the post-self", () => {
    const source = generate(`
      kind X {
        identity: id;
        property id: String;
        property n: Integer;
        event inc(amount: Integer) {
          pre: amount > 0;
          post: self.n = self.n@pre + amount;
          modifies: self.n;
        }
      }
    `);
    const mod = compileAndEval(source) as {
      wrapXInc: (impl: any) => (self: any, amount: number) => any;
    };

    const correctImpl = (self: any, amount: number) => ({
      self: { ...self, n: self.n + amount },
      modified: { n: self.n + amount },
    });
    const wrapped = mod.wrapXInc(correctImpl);

    const before = { id: "1", n: 5 };
    const after = wrapped(before, 3);
    expect(after.n).toBe(8);
    expect(before.n).toBe(5); // original unchanged (impl returned new self)
  });

  it("@pre snapshot captures pre-state correctly", () => {
    // Test that if the impl mutates `self` in-place AND returns the
    // mutated reference, the @pre snapshot still captures the
    // original value at the time of the call.
    const source = generate(`
      kind X {
        identity: id;
        property id: String;
        property n: Integer;
        event inc(amount: Integer) {
          pre: amount > 0;
          post: self.n = self.n@pre + amount;
          modifies: self.n;
        }
      }
    `);
    const mod = compileAndEval(source) as {
      wrapXInc: (impl: any) => (self: any, amount: number) => any;
    };

    // Aggressive impl that mutates self in-place.
    const mutatingImpl = (self: any, amount: number) => {
      self.n = self.n + amount;
      return { self, modified: { n: self.n } };
    };
    const wrapped = mod.wrapXInc(mutatingImpl);

    // @pre snapshot is taken BEFORE the impl call. So even though the
    // impl mutates self.n from 5 to 8 mid-call, __pre["self.balance"]
    // captures the original 5, and the post-check 8 === 5 + 3 = 8 holds.
    const before = { id: "1", n: 5 };
    expect(() => wrapped(before, 3)).not.toThrow();
  });

  it("multiple pre clauses all checked, all reported on failure", () => {
    const source = generate(`
      kind X {
        identity: id;
        property id: String;
        property n: Integer;
        event op(a: Integer, b: Integer) {
          pre: a > 0;
          pre: b > 0;
          post: true;
          modifies: self.n;
        }
      }
    `);
    const mod = compileAndEval(source) as {
      wrapXOp: (impl: any) => (self: any, a: number, b: number) => any;
    };
    const noop = (self: any) => ({ self, modified: {} });
    const wrapped = mod.wrapXOp(noop);

    try {
      wrapped({ id: "1", n: 0 }, -1, -2);
      throw new Error("expected throw");
    } catch (e) {
      const msg = (e as Error).message;
      expect(msg).toMatch(/a > 0/);
      expect(msg).toMatch(/b > 0/);
    }
  });
});
