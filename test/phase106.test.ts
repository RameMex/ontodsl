import { describe, it, expect } from "vitest";
import { parse, renderTypeScript } from "../src/index.js";
import * as ts from "typescript";

/**
 * Phase 10.6 tests: commitment lifecycle registry.
 *
 * Three test layers, same as Phase 10.5:
 *   - Structural assertions on the generated output
 *   - Compile cleanliness via ts.transpileModule strict
 *   - Runtime semantics: pending → fulfilled / violated transitions,
 *     terminal-state enforcement, lookup, registry isolation.
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

const STANDARD_SETUP = `
  agent A { identity: a; property a: String; }
  agent B { identity: b; property b: String; }
  commitment Order
    debitor: A
    creditor: B {
      identity: orderId;
      property orderId: String;
      property amount: Real;
    }
`;

// ─── Structural ──────────────────────────────────────────────────────

describe("phase10.6 — structural output", () => {
  it("emits CommitmentState type and CommitmentRegistry class", () => {
    const out = generate(STANDARD_SETUP);
    expect(out).toMatch(/export type CommitmentState = "pending" \| "fulfilled" \| "violated";/);
    expect(out).toMatch(/export class CommitmentRegistry \{/);
  });

  it("emits typed registry class per commitment", () => {
    const out = generate(STANDARD_SETUP);
    expect(out).toMatch(/export class OrderRegistry \{/);
    expect(out).toMatch(/register\(commitment: Order\)/);
    expect(out).toMatch(/fulfill\(id: OrderId\)/);
    expect(out).toMatch(/violate\(id: OrderId\)/);
  });

  it("emits no registry section when no commitments", () => {
    const out = generate(`
      kind X { identity: id; property id: String; }
    `);
    expect(out).not.toMatch(/CommitmentRegistry/);
    expect(out).not.toMatch(/CommitmentState/);
  });

  it("emits a typed registry per declared commitment", () => {
    const out = generate(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment Order
        debitor: A creditor: B { identity: oid; property oid: String; }
      commitment Refund
        debitor: A creditor: B { identity: rid; property rid: String; }
    `);
    expect(out).toMatch(/export class OrderRegistry/);
    expect(out).toMatch(/export class RefundRegistry/);
  });

  it("uses the commitment's identity property name in register", () => {
    const out = generate(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment X
        debitor: A creditor: B {
          identity: customField;
          property customField: String;
        }
    `);
    expect(out).toMatch(/this\.inner\.register\(commitment\.customField as string/);
  });
});

// ─── Compile cleanliness ─────────────────────────────────────────────

describe("phase10.6 — generated registries compile clean", () => {
  it("simple commitment with registry compiles", () => {
    const out = generate(STANDARD_SETUP);
    assertCompiles(out);
  });

  it("multiple commitments compile", () => {
    const out = generate(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment Order
        debitor: A creditor: B { identity: oid; property oid: String; }
      commitment Refund
        debitor: A creditor: B { identity: rid; property rid: String; }
    `);
    assertCompiles(out);
  });
});

// ─── Runtime semantics ───────────────────────────────────────────────

describe("phase10.6 — registry runtime behaviour", () => {
  it("register → pending → fulfill transitions correctly", () => {
    const source = generate(STANDARD_SETUP);
    const mod = compileAndEval(source) as {
      OrderRegistry: new () => any;
      makeOrder: (d: { orderId: string; amount: number }) => any;
    };

    const reg = new mod.OrderRegistry();
    const order = mod.makeOrder({ orderId: "o1", amount: 100 });
    reg.register(order);
    expect(reg.getState("o1")).toBe("pending");
    reg.fulfill("o1");
    expect(reg.getState("o1")).toBe("fulfilled");
  });

  it("register → violate transitions correctly", () => {
    const source = generate(STANDARD_SETUP);
    const mod = compileAndEval(source) as {
      OrderRegistry: new () => any;
      makeOrder: (d: { orderId: string; amount: number }) => any;
    };
    const reg = new mod.OrderRegistry();
    reg.register(mod.makeOrder({ orderId: "o2", amount: 50 }));
    reg.violate("o2");
    expect(reg.getState("o2")).toBe("violated");
  });

  it("fulfilled commitment cannot transition to violated", () => {
    const source = generate(STANDARD_SETUP);
    const mod = compileAndEval(source) as {
      OrderRegistry: new () => any;
      makeOrder: (d: { orderId: string; amount: number }) => any;
    };
    const reg = new mod.OrderRegistry();
    reg.register(mod.makeOrder({ orderId: "o3", amount: 1 }));
    reg.fulfill("o3");
    expect(() => reg.violate("o3")).toThrow(/terminal state.*fulfilled/);
  });

  it("violated commitment cannot transition to fulfilled", () => {
    const source = generate(STANDARD_SETUP);
    const mod = compileAndEval(source) as {
      OrderRegistry: new () => any;
      makeOrder: (d: { orderId: string; amount: number }) => any;
    };
    const reg = new mod.OrderRegistry();
    reg.register(mod.makeOrder({ orderId: "o4", amount: 1 }));
    reg.violate("o4");
    expect(() => reg.fulfill("o4")).toThrow(/terminal state.*violated/);
  });

  it("registering the same id twice throws", () => {
    const source = generate(STANDARD_SETUP);
    const mod = compileAndEval(source) as {
      OrderRegistry: new () => any;
      makeOrder: (d: { orderId: string; amount: number }) => any;
    };
    const reg = new mod.OrderRegistry();
    reg.register(mod.makeOrder({ orderId: "dup", amount: 1 }));
    expect(() =>
      reg.register(mod.makeOrder({ orderId: "dup", amount: 2 })),
    ).toThrow(/already registered/);
  });

  it("getState returns null for unknown id", () => {
    const source = generate(STANDARD_SETUP);
    const mod = compileAndEval(source) as {
      OrderRegistry: new () => any;
    };
    const reg = new mod.OrderRegistry();
    expect(reg.getState("nope")).toBeNull();
  });

  it("fulfill/violate on unknown id throws", () => {
    const source = generate(STANDARD_SETUP);
    const mod = compileAndEval(source) as {
      OrderRegistry: new () => any;
    };
    const reg = new mod.OrderRegistry();
    expect(() => reg.fulfill("ghost")).toThrow(/unknown commitment/);
    expect(() => reg.violate("ghost")).toThrow(/unknown commitment/);
  });

  it("pending() returns only commitments still pending", () => {
    const source = generate(STANDARD_SETUP);
    const mod = compileAndEval(source) as {
      OrderRegistry: new () => any;
      makeOrder: (d: { orderId: string; amount: number }) => any;
    };
    const reg = new mod.OrderRegistry();
    reg.register(mod.makeOrder({ orderId: "p1", amount: 1 }));
    reg.register(mod.makeOrder({ orderId: "p2", amount: 2 }));
    reg.register(mod.makeOrder({ orderId: "p3", amount: 3 }));
    reg.fulfill("p2");
    reg.violate("p3");

    const pending = reg.pending();
    expect(pending.length).toBe(1);
    expect(pending[0].commitment.orderId).toBe("p1");
    expect(pending[0].state).toBe("pending");

    expect(reg.size()).toBe(3);
  });

  it("two registries are isolated (separate state)", () => {
    const source = generate(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment Order
        debitor: A creditor: B { identity: oid; property oid: String; }
      commitment Refund
        debitor: A creditor: B { identity: rid; property rid: String; }
    `);
    const mod = compileAndEval(source) as {
      OrderRegistry: new () => any;
      RefundRegistry: new () => any;
      makeOrder: (d: { oid: string }) => any;
      makeRefund: (d: { rid: string }) => any;
    };

    const orders = new mod.OrderRegistry();
    const refunds = new mod.RefundRegistry();

    orders.register(mod.makeOrder({ oid: "shared" }));
    expect(refunds.getState("shared")).toBeNull(); // separate registries
    refunds.register(mod.makeRefund({ rid: "shared" }));
    orders.fulfill("shared");
    expect(orders.getState("shared")).toBe("fulfilled");
    expect(refunds.getState("shared")).toBe("pending"); // unaffected
  });
});
