import { describe, it, expect } from "vitest";
import { parse, renderTypeScript } from "../src/index.js";
import * as ts from "typescript";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

function generate(body: string): string {
  const { ast, errors } = parse(withPreamble(body));
  if (errors.length > 0) {
    throw new Error(
      `parse errors:\n${errors.map((e) => `  ${e.code}: ${e.message}`).join("\n")}`,
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

const CART_SRC = `
  kind Item { identity: id; property id: String; property qty: Integer; }
  kind Cart {
    identity: cid;
    property cid: String;
    property items: Set<Item>;
    event addItem(it: Item) {
      pre: self.items->forAll(x | x.qty >= 0);
      post: self.items->exists(y | y.id = it.id);
      modifies: self.items;
    }
  }
`;

describe("phase10.8 — quantifiers in event clauses", () => {
  it("forAll in pre translates to Array.from(...).every(...)", () => {
    const out = generate(CART_SRC);
    expect(out).toMatch(
      /Array\.from\(self\.items\)\.every\(\(__x\) => \(\(__x\.qty >= 0\)\)\)/,
    );
  });

  it("exists in post translates to Array.from(__result.self...).some(...)", () => {
    const out = generate(CART_SRC);
    expect(out).toMatch(
      /Array\.from\(__result\.self\.items\)\.some\(\(__x\) => /,
    );
  });

  it("lambda body can reference event parameters", () => {
    const out = generate(CART_SRC);
    // Post: y.id = it.id — the lambda's `y` becomes __x, `it` stays.
    expect(out).toMatch(/__x\.id === it\.id/);
  });

  it("generated code with quantifiers compiles strict", () => {
    assertCompiles(generate(CART_SRC));
  });

  it("forAll in pre runtime: passes when all items satisfy", () => {
    const mod = compileAndEval(generate(CART_SRC)) as {
      wrapCartAddItem: (impl: any) => (self: any, it: any) => any;
    };
    const impl = (self: any, it: any) => {
      const items = new Set(self.items);
      items.add(it);
      return { self: { ...self, items }, modified: { items } };
    };
    const wrapped = mod.wrapCartAddItem(impl);

    const cart = {
      cid: "c1",
      items: new Set([
        { id: "a", qty: 1 },
        { id: "b", qty: 2 },
      ]),
    };
    const newItem = { id: "c", qty: 3 };
    expect(() => wrapped(cart, newItem)).not.toThrow();
  });

  it("forAll in pre runtime: throws when one item violates", () => {
    const mod = compileAndEval(generate(CART_SRC)) as {
      wrapCartAddItem: (impl: any) => (self: any, it: any) => any;
    };
    const noop = (self: any) => ({ self, modified: { items: self.items } });
    const wrapped = mod.wrapCartAddItem(noop);

    const cart = {
      cid: "c1",
      items: new Set([
        { id: "a", qty: 1 },
        { id: "b", qty: -5 }, // violates qty >= 0
      ]),
    };
    expect(() => wrapped(cart, { id: "c", qty: 1 })).toThrow(/forAll/);
  });

  it("exists in post runtime: throws when impl forgets to add the item", () => {
    const mod = compileAndEval(generate(CART_SRC)) as {
      wrapCartAddItem: (impl: any) => (self: any, it: any) => any;
    };
    // Buggy impl that does NOT add the item.
    const buggy = (self: any) => ({ self, modified: { items: self.items } });
    const wrapped = mod.wrapCartAddItem(buggy);

    const cart = { cid: "c1", items: new Set<{ id: string; qty: number }>() };
    expect(() => wrapped(cart, { id: "x", qty: 1 })).toThrow(/exists/);
  });

  it("nested quantifier shadowing (advanced) — outer binding preserved", () => {
    // Pure regression test for the substitution shadowing logic.
    // If the outer lambda var collides with an inner one, the inner
    // body should NOT be rewritten by the outer substitution.
    const out = generate(`
      kind X { identity: id; property id: String; property xs: Set<X>; property n: Integer; }
      kind K {
        identity: kid;
        property kid: String;
        property outers: Set<X>;
        event op() {
          pre: self.outers->forAll(o | o.xs->forAll(o | o.n > 0));
          post: true;
          modifies: self.kid;
        }
      }
    `);
    // The outer `o` becomes __x, the inner `o` (shadowing) ALSO becomes __x.
    // This is wrong if shadow handling fails, but with our logic the inner
    // forAll re-substitutes, so we end up with double __x — Array.from()
    // shadows the outer __x with the inner one. That's correct lexical
    // scoping for JS lambdas.
    expect(out).toMatch(/Array\.from\(self\.outers\)\.every/);
    expect(out).toMatch(/Array\.from\(__x\.xs\)\.every/);
    // Both inner and outer use __x as the JS name; the inner lambda
    // shadows the outer at the JS level, which mirrors OCL shadowing.
  });
});
