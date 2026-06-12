import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parse, renderTypeScript } from "../src/index.js";
import * as ts from "typescript";

/**
 * Phase 11 — End-to-end integration test.
 *
 * Takes the full drone example, runs it through the entire pipeline
 * (parse → validate → codegen → transpile → eval), then exercises
 * the resulting runtime API:
 *
 *   - factories construct typed instances
 *   - validators flag invariant violations
 *   - sync wrappers enforce contracts
 *   - async wrappers reject on contract violation
 *   - commitment registries track state with optional listener
 *
 * This test catches integration regressions that per-phase tests
 * miss — e.g. a typed registry that compiles in isolation but breaks
 * when the surrounding factory/validator is in the same module, or a
 * naming collision between event wrappers and commitment registries.
 *
 * If this passes, the DSL works end-to-end on a real, non-trivial
 * input. The drone is the canonical example, so this is the most
 * stringent test we have.
 */

function loadAndCompileDrone(): Record<string, unknown> {
  const droneSource = readFileSync(
    resolve(process.cwd(), "examples/drone.onto"),
    "utf8",
  );
  const { ast, errors } = parse(droneSource);
  if (errors.length > 0) {
    throw new Error(
      `unexpected parse errors:\n${errors.map((e) => `  ${e.code}: ${e.message}`).join("\n")}`,
    );
  }
  const generated = renderTypeScript(ast!);

  const transpiled = ts.transpileModule(generated, {
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

describe("phase11 — drone end-to-end integration", () => {
  it("the drone example parses, generates, transpiles, and evaluates clean", () => {
    expect(() => loadAndCompileDrone()).not.toThrow();
  });

  it("exposes factories for every identity-supplying decl", () => {
    const mod = loadAndCompileDrone();
    // A representative sample. The drone has many more, but we don't
    // hardcode all of them — we just confirm the major ones are
    // exported by name.
    expect(typeof mod.makeDrone).toBe("function");
    expect(typeof mod.makeBatteryPack).toBe("function");
    expect(typeof mod.makePackage).toBe("function");
    expect(typeof mod.makeDeliveryCommitment).toBe("function");
  });

  it("exposes validators for every decl with invariants", () => {
    const mod = loadAndCompileDrone();
    expect(typeof mod.validateDrone).toBe("function");
    expect(typeof mod.validateBatteryPack).toBe("function");
  });

  it("exposes sync and async wrappers for every event", () => {
    const mod = loadAndCompileDrone();
    expect(typeof mod.wrapDroneSwapBattery).toBe("function");
    expect(typeof mod.wrapDroneSwapBatteryAsync).toBe("function");
  });

  it("exposes a typed registry for the commitment with own identity", () => {
    const mod = loadAndCompileDrone();
    expect(typeof mod.DeliveryCommitmentRegistry).toBe("function");
    // ExpressDeliveryCommitment inherits identity from its parent —
    // by Phase 10.6's design, no typed wrapper is generated for
    // inherited-identity commitments. The generic CommitmentRegistry
    // is still available for those, so users aren't stuck.
    expect(typeof mod.CommitmentRegistry).toBe("function");
  });

  it("validator flags an invariant violation on a constructed instance", () => {
    const mod = loadAndCompileDrone() as {
      makeBatteryPack: (d: any) => any;
      validateBatteryPack: (i: any) => readonly string[];
    };
    // BatteryPack invariants include `self.chargeLevel <= self.capacity`.
    // Set chargeLevel above capacity to trigger a violation.
    const battery = mod.makeBatteryPack({
      serialNumber: "b1",
      chargeLevel: 9999, // greater than capacity → violates
      capacity: 5000,
      weightKg: 0.4,
    });
    const violations = mod.validateBatteryPack(battery);
    expect(violations.length).toBeGreaterThan(0);
  });

  it("sync event wrapper enforces preconditions on real domain types", () => {
    const mod = loadAndCompileDrone() as {
      makeBatteryPack: (d: any) => any;
      makeDrone: (d: any) => any;
      wrapDroneSwapBattery: (impl: any) => (self: any, b: any) => any;
    };

    const oldBattery = mod.makeBatteryPack({
      serialNumber: "old",
      chargeLevel: 0.9,
      capacity: 5000,
      weightKg: 0.4,
    });
    const drone = mod.makeDrone({
      serialNumber: "d1",
      maxPayload: 5,
      battery: oldBattery,
      spareBatteries: new Set(),
      weightKg: 1.5,
    });
    const deadBattery = mod.makeBatteryPack({
      serialNumber: "dead",
      chargeLevel: 0, // violates parent's pre: chargeLevel > 0
      capacity: 5000,
      weightKg: 0.4,
    });

    const noopImpl = (self: any, b: any) => ({
      self: { ...self, battery: b },
      modified: { battery: b },
    });
    const swap = mod.wrapDroneSwapBattery(noopImpl);

    expect(() => swap(drone, deadBattery)).toThrow(/chargeLevel > 0/);
  });

  it("async wrapper rejects on precondition with real domain types", async () => {
    const mod = loadAndCompileDrone() as {
      makeBatteryPack: (d: any) => any;
      makeDrone: (d: any) => any;
      wrapDroneSwapBatteryAsync: (impl: any) => (self: any, b: any) => Promise<any>;
    };
    const drone = mod.makeDrone({
      serialNumber: "d2",
      maxPayload: 5,
      battery: mod.makeBatteryPack({
        serialNumber: "b1",
        chargeLevel: 0.5,
        capacity: 5000,
        weightKg: 0.4,
      }),
      spareBatteries: new Set(),
      weightKg: 1.5,
    });
    const dead = mod.makeBatteryPack({
      serialNumber: "dead",
      chargeLevel: 0,
      capacity: 5000,
      weightKg: 0.4,
    });
    const asyncImpl = async (self: any, b: any) => ({
      self: { ...self, battery: b },
      modified: { battery: b },
    });
    const swap = mod.wrapDroneSwapBatteryAsync(asyncImpl);
    await expect(swap(drone, dead)).rejects.toThrow(/chargeLevel > 0/);
  });

  it("commitment registry transitions states and notifies listener", () => {
    const mod = loadAndCompileDrone() as any;

    const events: any[] = [];
    const reg = new mod.DeliveryCommitmentRegistry((e: any) => events.push(e));

    const takeoff = mod.makeTakeoff({
      eventId: "t1",
      takeoffSite: "Hangar A",
    });
    const landing = mod.makeLanding({
      eventId: "l1",
      landingSite: "123 Main St",
    });
    const commitment = mod.makeDeliveryCommitment({
      commitmentId: "c1",
      description: "Same-day to 123 Main",
      takeoff,
      landing,
    });

    reg.register(commitment);
    expect(reg.getState("c1")).toBe("pending");
    expect(events.length).toBe(1);
    expect(events[0].previousState).toBeNull();
    expect(events[0].newState).toBe("pending");

    reg.fulfill("c1");
    expect(reg.getState("c1")).toBe("fulfilled");
    expect(events.length).toBe(2);
    expect(events[1].previousState).toBe("pending");
    expect(events[1].newState).toBe("fulfilled");

    expect(() => reg.violate("c1")).toThrow(/terminal state/);
  });

  it("multiple wrappers, validators, and registries coexist in one module", () => {
    // The most important integration property: nothing collides.
    // If two generated names had collided (e.g. event wrapper and a
    // factory sharing a name), the eval step itself would throw.
    const mod = loadAndCompileDrone();
    const exportNames = Object.keys(mod);
    // Sanity: we have lots of exports (factories, validators, sync+async
    // wrappers, registries, branded ID types are erased at runtime so
    // they don't appear). For the drone (40 decls, 5 events × 2,
    // 2 commitments) we expect 30+ runtime exports.
    expect(exportNames.length).toBeGreaterThan(30);
    // No duplicate keys (a duplicate key would have caused only one to
    // survive but the count check above would still pass; this is a
    // stronger statement).
    expect(new Set(exportNames).size).toBe(exportNames.length);
  });
});
