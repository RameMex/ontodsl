import { describe, it, expect } from "vitest";
import { parse, renderTypeScript } from "../src/index.js";
import * as ts from "typescript";

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

const SETUP = `
  agent A { identity: a; property a: String; }
  agent B { identity: b; property b: String; }
  commitment Order
    debitor: A
    creditor: B {
      identity: orderId;
      property orderId: String;
    }
`;

describe("phase10.7 — transition listener", () => {
  it("emits CommitmentTransition + TransitionListener types", () => {
    const out = generate(SETUP);
    expect(out).toMatch(/export interface CommitmentTransition<C>/);
    expect(out).toMatch(/export type TransitionListener<C>/);
  });

  it("typed registry constructor accepts a listener", () => {
    const out = generate(SETUP);
    expect(out).toMatch(
      /constructor\(listener\?: TransitionListener<Order>\)/,
    );
  });

  it("listener fires on register with previousState=null", () => {
    const mod = compileAndEval(generate(SETUP)) as {
      OrderRegistry: new (l?: any) => any;
      makeOrder: (d: { orderId: string }) => any;
    };
    const events: any[] = [];
    const reg = new mod.OrderRegistry((e: any) => events.push(e));
    reg.register(mod.makeOrder({ orderId: "o1" }));

    expect(events.length).toBe(1);
    expect(events[0].previousState).toBeNull();
    expect(events[0].newState).toBe("pending");
    expect(events[0].commitment.orderId).toBe("o1");
    expect(typeof events[0].timestamp).toBe("number");
  });

  it("listener fires on fulfill with previousState='pending'", () => {
    const mod = compileAndEval(generate(SETUP)) as {
      OrderRegistry: new (l?: any) => any;
      makeOrder: (d: { orderId: string }) => any;
    };
    const events: any[] = [];
    const reg = new mod.OrderRegistry((e: any) => events.push(e));
    reg.register(mod.makeOrder({ orderId: "o1" }));
    reg.fulfill("o1");

    expect(events.length).toBe(2);
    expect(events[1].previousState).toBe("pending");
    expect(events[1].newState).toBe("fulfilled");
  });

  it("listener fires on violate with previousState='pending'", () => {
    const mod = compileAndEval(generate(SETUP)) as {
      OrderRegistry: new (l?: any) => any;
      makeOrder: (d: { orderId: string }) => any;
    };
    const events: any[] = [];
    const reg = new mod.OrderRegistry((e: any) => events.push(e));
    reg.register(mod.makeOrder({ orderId: "o2" }));
    reg.violate("o2");

    expect(events[1].newState).toBe("violated");
  });

  it("listener does NOT fire on terminal-state error", () => {
    // Failed transitions throw; we don't fire the listener for them
    // since the state didn't actually change.
    const mod = compileAndEval(generate(SETUP)) as {
      OrderRegistry: new (l?: any) => any;
      makeOrder: (d: { orderId: string }) => any;
    };
    const events: any[] = [];
    const reg = new mod.OrderRegistry((e: any) => events.push(e));
    reg.register(mod.makeOrder({ orderId: "o3" }));
    reg.fulfill("o3");
    expect(() => reg.violate("o3")).toThrow();
    // 2 events total: register + fulfill. The failed violate did not fire.
    expect(events.length).toBe(2);
  });

  it("registry without listener works (backward-compatible default)", () => {
    const mod = compileAndEval(generate(SETUP)) as {
      OrderRegistry: new (l?: any) => any;
      makeOrder: (d: { orderId: string }) => any;
    };
    const reg = new mod.OrderRegistry();
    expect(() => {
      reg.register(mod.makeOrder({ orderId: "o4" }));
      reg.fulfill("o4");
    }).not.toThrow();
    expect(reg.getState("o4")).toBe("fulfilled");
  });

  it("listener errors propagate out of the transition call", () => {
    const mod = compileAndEval(generate(SETUP)) as {
      OrderRegistry: new (l?: any) => any;
      makeOrder: (d: { orderId: string }) => any;
    };
    const reg = new mod.OrderRegistry(() => {
      throw new Error("listener failure");
    });
    expect(() => reg.register(mod.makeOrder({ orderId: "o5" }))).toThrow(
      /listener failure/,
    );
  });
});
