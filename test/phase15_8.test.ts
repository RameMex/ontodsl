import { describe, it, expect } from "vitest";
import { parse, renderRust } from "../src/index.js";

const SAMPLE = `schema "onto/0.1"; namespace t;
kind BatteryPack { identity: id; property id: String; property chargeLevel: Real; }
kind Drone {
  identity: sn;
  property sn: String;
  property battery: BatteryPack;
  event swapBattery(b: BatteryPack) {
    pre: b.chargeLevel > 0.5;
    post: self.battery <> self.battery@pre;
  }
  event idle() { pre: true; post: true; }
}`;

function gen(opts: { emitAsync?: boolean; target?: "alloc" | "no-alloc" } = {}): string {
  const { ast, errors } = parse(SAMPLE);
  if (errors.length > 0) throw new Error(errors.map(e => e.message).join("; "));
  return renderRust(ast!, opts).libRs;
}

describe("phase15.8 — emitAsync default off", () => {
  it("no async wrapper without emitAsync flag", () => {
    const out = gen();
    expect(out).not.toMatch(/_wrapped_async/);
    expect(out).not.toMatch(/pub async fn/);
  });

  it("sync wrapper still emitted by default", () => {
    const out = gen();
    expect(out).toMatch(/pub fn swap_battery_wrapped<F>/);
  });
});

describe("phase15.8 — async wrapper signature", () => {
  it("emits async fn with _wrapped_async suffix when enabled", () => {
    const out = gen({ emitAsync: true });
    expect(out).toMatch(/pub async fn swap_battery_wrapped_async<F, Fut>/);
    expect(out).toMatch(/pub async fn idle_wrapped_async<F, Fut>/);
  });

  it("uses generic Future bound (runtime-agnostic)", () => {
    const out = gen({ emitAsync: true });
    expect(out).toMatch(/Fut: core::future::Future<Output = \(\)>/);
  });

  it("closure returns Fut: FnOnce(&mut Self, ...) -> Fut", () => {
    const out = gen({ emitAsync: true });
    expect(out).toMatch(/F: FnOnce\(&mut Self, BatteryPack\) -> Fut,/);
  });

  it("zero-param event uses FnOnce(&mut Self) -> Fut", () => {
    const out = gen({ emitAsync: true });
    expect(out).toMatch(/F: FnOnce\(&mut Self\) -> Fut,/);
  });

  it("async wrapper returns Result<(), &'static str>", () => {
    const out = gen({ emitAsync: true });
    // Match the async fn followed by its Result return.
    expect(out).toMatch(/pub async fn swap_battery_wrapped_async[\s\S]*?\) -> Result<\(\), &'static str>/);
  });
});

describe("phase15.8 — async wrapper body", () => {
  it("awaits the impl_fn call", () => {
    const out = gen({ emitAsync: true });
    expect(out).toMatch(/impl_fn\(self, b\)\.await;/);
    expect(out).toMatch(/impl_fn\(self\)\.await;/);  // for idle()
  });

  it("pre-check runs before await", () => {
    const out = gen({ emitAsync: true });
    const asyncBlock = out.match(/swap_battery_wrapped_async[\s\S]*?Ok\(\(\)\)\s*\}/);
    expect(asyncBlock).not.toBeNull();
    const body = asyncBlock![0];
    const pre = body.indexOf("precondition violated");
    const awaitIdx = body.indexOf(".await");
    expect(pre).toBeGreaterThan(0);
    expect(awaitIdx).toBeGreaterThan(pre);
  });

  it("@pre snapshot taken before await", () => {
    const out = gen({ emitAsync: true });
    const asyncBlock = out.match(/swap_battery_wrapped_async[\s\S]*?Ok\(\(\)\)\s*\}/);
    const body = asyncBlock![0];
    const snap = body.indexOf("__pre_battery = self.battery.clone()");
    const awaitIdx = body.indexOf(".await");
    expect(snap).toBeGreaterThan(0);
    expect(awaitIdx).toBeGreaterThan(snap);
  });

  it("post-check runs after await", () => {
    const out = gen({ emitAsync: true });
    const asyncBlock = out.match(/swap_battery_wrapped_async[\s\S]*?Ok\(\(\)\)\s*\}/);
    const body = asyncBlock![0];
    const awaitIdx = body.indexOf(".await");
    const post = body.indexOf("postcondition violated");
    expect(post).toBeGreaterThan(awaitIdx);
  });
});

describe("phase15.8 — both wrappers coexist", () => {
  it("sync and async both present when emitAsync=true", () => {
    const out = gen({ emitAsync: true });
    // Sync without _async suffix.
    expect(out).toMatch(/pub fn swap_battery_wrapped<F>/);
    // Async with _async suffix.
    expect(out).toMatch(/pub async fn swap_battery_wrapped_async<F, Fut>/);
  });

  it("both have identical pre/post check messages", () => {
    const out = gen({ emitAsync: true });
    const preMatches = out.match(/precondition violated: b\.chargeLevel > 0\.5/g);
    expect(preMatches?.length).toBe(2);  // one in sync, one in async
  });
});

describe("phase15.8 — works in no-alloc mode", () => {
  it("async wrapper compiles structurally with no-alloc + heapless", () => {
    const out = gen({ emitAsync: true, target: "no-alloc" });
    expect(out).toMatch(/pub async fn swap_battery_wrapped_async<F, Fut>/);
    expect(out).toMatch(/Fut: core::future::Future<Output = \(\)>/);
    // Param types still mapped to heapless.
    expect(out).toMatch(/heapless::String/);
  });
});
