import { describe, it, expect } from "vitest";
import { parse, renderTypeScript, renderRust } from "../src/index.js";
import * as ts from "typescript";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

function generateTS(body: string): string {
  const { ast, errors } = parse(withPreamble(body));
  if (errors.length > 0) {
    throw new Error(
      `unexpected parse errors:\n${errors.map((e) => `  ${e.code}: ${e.message}`).join("\n")}`,
    );
  }
  return renderTypeScript(ast!);
}

function generateRust(body: string): string {
  const { ast, errors } = parse(withPreamble(body));
  if (errors.length > 0) {
    throw new Error(
      `unexpected parse errors:\n${errors.map((e) => `  ${e.code}: ${e.message}`).join("\n")}`,
    );
  }
  return renderRust(ast!).libRs;
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
  const fn = new Function("module", "exports", transpiled.outputText);
  fn(moduleObj, moduleObj.exports);
  return moduleObj.exports;
}

describe("Phase 4 — TypeScript Transactional Rollback", () => {
  it("rolls back self state to pre-state on post-condition failure", () => {
    const source = generateTS(`
      kind Drone {
        identity: id;
        property id: String;
        property batteryLevel: Integer;
        property path: Set<String>;
        event charge(amount: Integer) {
          pre: amount > 0;
          post: self.batteryLevel = self.batteryLevel@pre + amount;
          modifies: self.batteryLevel;
        }
      }
    `);

    const mod = compileAndEval(source) as any;
    const drone = {
      id: "drone-1",
      batteryLevel: 20,
      path: new Set(["base", "wpt1"]),
    };

    // A buggy implementation that sets battery level to 100 instead of 20 + amount
    const buggyImpl = (self: any, amount: number) => {
      self.batteryLevel = 100;
      self.path.add("wpt2");
      return { self, modified: { batteryLevel: self.batteryLevel } };
    };

    const wrapped = mod.wrapDroneCharge(buggyImpl);

    // Call deposit with amount = 30. Expected pre-state + amount = 50, but impl sets 100.
    // Postcheck fails, throws an error, and the state should be rolled back to original!
    expect(() => wrapped(drone, 30)).toThrow(/post violated/);

    // Assert that the original object reference has its exact original properties restored
    expect(drone.batteryLevel).toBe(20);
    expect(drone.path.has("wpt2")).toBe(false);
    expect(drone.path.size).toBe(2);
  });

  it("rolls back self state to pre-state on implementation exception/throw", () => {
    const source = generateTS(`
      kind Drone {
        identity: id;
        property id: String;
        property batteryLevel: Integer;
        property log: Set<String>;
        event charge(amount: Integer) {
          pre: amount > 0;
          post: self.batteryLevel = self.batteryLevel@pre + amount;
          modifies: self.batteryLevel;
        }
      }
    `);

    const mod = compileAndEval(source) as any;
    const drone = {
      id: "drone-1",
      batteryLevel: 20,
      log: new Set(["start"]),
    };

    // An implementation that mutates the object but throws an error mid-flight
    const throwingImpl = (self: any, amount: number) => {
      self.batteryLevel = 50;
      self.log.add("mid-charge");
      throw new Error("Power surge!");
    };

    const wrapped = mod.wrapDroneCharge(throwingImpl);

    expect(() => wrapped(drone, 30)).toThrow("Power surge!");

    // State should be completely rolled back
    expect(drone.batteryLevel).toBe(20);
    expect(drone.log.has("mid-charge")).toBe(false);
  });

  it("supports deeply nested structures, arrays, and Sets", () => {
    const source = generateTS(`
      kind ComplexType {
        identity: id;
        property id: String;
        property nestedArray: Set<Integer>;
        property nestedObj: Set<String>;
        event run() {
          pre: true;
          post: false; // always fails to trigger rollback
        }
      }
    `);

    const mod = compileAndEval(source) as any;
    const original = {
      id: "c1",
      nestedArray: [1, 2, [3, 4]],
      nestedObj: {
        a: { b: new Set([10, 20]) },
        c: [100],
      },
    };

    const impl = (self: any) => {
      self.nestedArray[2].push(5);
      self.nestedObj.a.b.add(30);
      self.nestedObj.c.push(200);
      return { self, modified: {} };
    };

    const wrapped = mod.wrapComplexTypeRun(impl);

    expect(() => wrapped(original)).toThrow(/post violated/);

    // Deep properties should be fully rolled back to pre-state
    expect(original.nestedArray[2]).toEqual([3, 4]);
    expect(original.nestedObj.a.b.has(30)).toBe(false);
    expect(original.nestedObj.a.b.size).toBe(2);
    expect(original.nestedObj.c).toEqual([100]);
  });
});

describe("Phase 4 — Rust Transactional Rollback", () => {
  it("generates self rollback clone and application for sync wrappers", () => {
    const out = generateRust(`
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

    // Verify snapshotting is generated:
    expect(out).toContain("let __rollback = self.clone();");

    // After the post-condition refactor, the wrapper restores by
    // MOVING __rollback once at the end (`*self = __rollback;`)
    // rather than cloning it inside each potential post-violation
    // branch. The unified violation accumulator yields a single
    // restore point.
    expect(out).toContain("*self = __rollback;");
    expect(out).toContain("let __violation: Option<&'static str>");
    expect(out).not.toContain("*self = __rollback.clone();");
  });

  it("generates self rollback clone and application for async wrappers", () => {
    const { ast } = parse(withPreamble(`
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
    `));

    // Enable async generation explicitly using config
    const out = renderRust(ast!, { emitAsync: true }).libRs;

    expect(out).toContain("pub async fn deposit_wrapped_async<F, Fut>(");
    expect(out).toContain("let __rollback = self.clone();");
    expect(out).toContain("*self = __rollback;");
    expect(out).not.toContain("*self = __rollback.clone();");
  });
});
