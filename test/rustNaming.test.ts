import { describe, it, expect } from "vitest";
import { toRustTypeName, toRustFieldName } from "../src/codegen-rust/naming.js";

describe("toRustTypeName", () => {
  it("PascalCase stays PascalCase", () => {
    expect(toRustTypeName("Drone")).toBe("Drone");
    expect(toRustTypeName("LowPassFilter")).toBe("LowPassFilter");
    expect(toRustTypeName("LowPassFilter2p")).toBe("LowPassFilter2p");
  });

  it("ALL_CAPS_WITH_UNDERSCORES becomes PascalCase", () => {
    expect(toRustTypeName("AC_PID")).toBe("AcPid");
    expect(toRustTypeName("AP_NavEKF3")).toBe("ApNavEkf3");
    expect(toRustTypeName("AP_Math")).toBe("ApMath");
  });

  it("uppercase runs followed by lowercase are split correctly", () => {
    expect(toRustTypeName("DigitalLPF")).toBe("DigitalLpf");
    expect(toRustTypeName("LPFFilter")).toBe("LpfFilter");
  });

  it("single-letter and short names work", () => {
    expect(toRustTypeName("X")).toBe("X");
    expect(toRustTypeName("Id")).toBe("Id");
  });
});

describe("toRustFieldName", () => {
  it("camelCase becomes snake_case", () => {
    expect(toRustFieldName("cutoffFreq")).toBe("cutoff_freq");
    expect(toRustFieldName("chargeLevel")).toBe("charge_level");
    expect(toRustFieldName("maxDeliveryRadius")).toBe("max_delivery_radius");
  });

  it("single-letter prefix (`kP`) becomes `k_p`", () => {
    expect(toRustFieldName("kP")).toBe("k_p");
    expect(toRustFieldName("kI")).toBe("k_i");
    expect(toRustFieldName("kD")).toBe("k_d");
  });

  it("already snake_case is idempotent", () => {
    expect(toRustFieldName("reset_filter")).toBe("reset_filter");
    expect(toRustFieldName("apply_internal")).toBe("apply_internal");
    expect(toRustFieldName("x")).toBe("x");
  });

  it("uppercase runs split correctly", () => {
    expect(toRustFieldName("filtTHz")).toBe("filt_t_hz");
    expect(toRustFieldName("HTMLParser")).toBe("html_parser");
  });

  it("digits create boundaries", () => {
    expect(toRustFieldName("LowPassFilter2p")).toBe("low_pass_filter_2p");
  });
});
