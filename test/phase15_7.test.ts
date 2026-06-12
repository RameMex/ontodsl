import { describe, it, expect } from "vitest";
import { parse, renderRust } from "../src/index.js";

const SAMPLE = `schema "onto/0.1"; namespace t;
agent Customer { identity: cid; property cid: String; }
kind BatteryPack {
  identity: id;
  property id: String;
  property chargeLevel: Real;
  invariants { self.chargeLevel >= 0; }
}
kind Drone {
  identity: serialNumber;
  property serialNumber: String;
  property battery: BatteryPack;
  property spareBatteries: Set<BatteryPack>;
  event swap(b: BatteryPack) { pre: true; post: true; }
}
commitment Delivery debitor: Customer creditor: Customer {
  identity: did;
  property did: String;
}`;

function genNoAlloc(capacity = 16) {
  const { ast, errors } = parse(SAMPLE);
  if (errors.length > 0) throw new Error(errors.map(e => e.message).join("; "));
  return renderRust(ast!, { target: "no-alloc", heaplessCapacity: capacity });
}

function genAlloc() {
  const { ast, errors } = parse(SAMPLE);
  if (errors.length > 0) throw new Error(errors.map(e => e.message).join("; "));
  return renderRust(ast!, { target: "alloc" });
}

describe("phase15.7 — Cargo.toml differs by target", () => {
  it("alloc: no heapless dep, comment placeholder", () => {
    const { cargoToml } = genAlloc();
    expect(cargoToml).not.toMatch(/heapless/);
    expect(cargoToml).toMatch(/# No runtime deps/);
  });

  it("no-alloc: depends on heapless", () => {
    const { cargoToml } = genNoAlloc();
    expect(cargoToml).toMatch(/heapless = "0\.8"/);
  });
});

describe("phase15.7 — lib.rs preamble", () => {
  it("alloc: emits extern crate alloc", () => {
    const { libRs } = genAlloc();
    expect(libRs).toMatch(/extern crate alloc;/);
  });

  it("no-alloc: does NOT emit extern crate alloc", () => {
    const { libRs } = genNoAlloc();
    expect(libRs).not.toMatch(/extern crate alloc;/);
  });

  it("no-alloc: header notes no allocator required", () => {
    const { libRs } = genNoAlloc();
    expect(libRs).toMatch(/No global allocator required/);
  });

  it("both keep #![no_std]", () => {
    expect(genAlloc().libRs).toMatch(/#!\[no_std\]/);
    expect(genNoAlloc().libRs).toMatch(/#!\[no_std\]/);
  });
});

describe("phase15.7 — type mapping", () => {
  it("no-alloc: branded ID uses heapless::String<N>", () => {
    const { libRs } = genNoAlloc(8);
    expect(libRs).toMatch(/pub struct DroneId\(pub heapless::String<8>\);/);
  });

  it("no-alloc: Set<NamedType> uses heapless::Vec<T, N> (structs aren't Ord)", () => {
    // Changed 2026-05-20 — struct values may carry f64 so they can't
    // derive Ord; BTreeSet/FnvIndexSet require Ord. Set<NamedType>
    // therefore backs to Vec with linear-search `->includes()`.
    const { libRs } = genNoAlloc(32);
    expect(libRs).toMatch(/pub spare_batteries: heapless::Vec<BatteryPack, 32>,/);
  });

  it("alloc: branded ID uses alloc::string::String", () => {
    const { libRs } = genAlloc();
    expect(libRs).toMatch(/pub struct DroneId\(pub alloc::string::String\);/);
  });

  it("alloc: Set<NamedType> uses alloc::vec::Vec<T>", () => {
    const { libRs } = genAlloc();
    expect(libRs).toMatch(/pub spare_batteries: alloc::vec::Vec<BatteryPack>,/);
  });

  it("primitive types unchanged in both modes", () => {
    expect(genAlloc().libRs).toMatch(/pub charge_level: f64,/);
    expect(genNoAlloc().libRs).toMatch(/pub charge_level: f64,/);
  });
});

describe("phase15.7 — validators", () => {
  it("alloc: returns alloc::vec::Vec<&'static str>", () => {
    const { libRs } = genAlloc();
    expect(libRs).toMatch(/pub fn validate\(&self\) -> alloc::vec::Vec<&'static str>/);
    expect(libRs).toMatch(/violations\.push\("/);
  });

  it("no-alloc: returns heapless::Vec<&'static str, N>", () => {
    const { libRs } = genNoAlloc(16);
    expect(libRs).toMatch(/pub fn validate\(&self\) -> heapless::Vec<&'static str, 16>/);
  });

  it("no-alloc: vec.push wrapped in let _ = (heapless returns Result)", () => {
    const { libRs } = genNoAlloc();
    expect(libRs).toMatch(/let _ = violations\.push\(/);
  });
});

describe("phase15.7 — factories", () => {
  it("no-alloc: identity param uses heapless::String<N>", () => {
    const { libRs } = genNoAlloc(16);
    // Drone constructor takes id String first arg.
    expect(libRs).toMatch(/serial_number: heapless::String<16>/);
  });

  it("alloc: identity param uses alloc::string::String", () => {
    const { libRs } = genAlloc();
    expect(libRs).toMatch(/serial_number: alloc::string::String/);
  });
});

describe("phase15.7 — commitment registries", () => {
  it("no-alloc: uses heapless::FnvIndexMap", () => {
    const { libRs } = genNoAlloc(16);
    expect(libRs).toMatch(/commitments: heapless::FnvIndexMap<DeliveryId, Delivery, 16>,/);
    expect(libRs).toMatch(/states: heapless::FnvIndexMap<DeliveryId, CommitmentState, 16>,/);
  });

  it("no-alloc: register/transition map.insert wrapped in let _ =", () => {
    const { libRs } = genNoAlloc();
    expect(libRs).toMatch(/let _ = self\.commitments\.insert/);
    expect(libRs).toMatch(/let _ = self\.states\.insert/);
  });

  it("alloc: uses alloc::collections::BTreeMap", () => {
    const { libRs } = genAlloc();
    expect(libRs).toMatch(/commitments: alloc::collections::BTreeMap<DeliveryId, Delivery>,/);
  });

  it("alloc: insert is bare (returns Option, can ignore)", () => {
    const { libRs } = genAlloc();
    expect(libRs).toMatch(/self\.commitments\.insert\(id\.clone\(\), commitment\);/);
    expect(libRs).not.toMatch(/let _ = self\.commitments\.insert/);
  });
});

describe("phase15.7 — capacity propagation", () => {
  it("custom capacity 64 propagates to all containers", () => {
    const { libRs } = genNoAlloc(64);
    expect(libRs).toMatch(/heapless::String<64>/);
    expect(libRs).toMatch(/heapless::Vec<&'static str, 64>/);
    expect(libRs).toMatch(/heapless::Vec<BatteryPack, 64>/);
    expect(libRs).toMatch(/heapless::FnvIndexMap<DeliveryId, Delivery, 64>/);
  });

  it("default capacity is 16", () => {
    const { ast } = parse(SAMPLE);
    const { libRs } = renderRust(ast!, { target: "no-alloc" });
    expect(libRs).toMatch(/heapless::String<16>/);
  });
});

describe("phase15.7 — header annotates target", () => {
  it("alloc header says alloc", () => {
    const { libRs } = genAlloc();
    expect(libRs).toMatch(/Target: alloc/);
  });

  it("no-alloc header says no-alloc with capacity", () => {
    const { libRs } = genNoAlloc(8);
    expect(libRs).toMatch(/Target: no-alloc \(capacity=8\)/);
  });
});
