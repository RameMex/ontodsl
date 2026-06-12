import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

describe("phase 3.5 — Role / Mode / Quality specialization", () => {
  // ──────────────── ROLE ────────────────

  it("parses a Role with no specializes (backwards compat)", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Seller { identity: sid; property sid: String; }
        relator Contract mediates (Buyer, Seller) { identity: cid; property cid: String; }
        kind Person { identity: pid; property pid: String; }
        role Buyer mediated-by Contract of Person { }
      `)
    );
    expect(errors).toEqual([]);
    const role = ast!.declarations.find((d) => d.name === "Buyer")!;
    // @ts-expect-error specializes added in 3.5
    expect(role.specializes).toEqual([]);
  });

  it("parses a Role specializing another Role", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Seller { identity: sid; property sid: String; }
        relator Contract mediates (Buyer, Seller) { identity: cid; property cid: String; }
        kind Person { identity: pid; property pid: String; }
        role Buyer mediated-by Contract of Person { }
        role PremiumBuyer mediated-by Contract of Person specializes Buyer { }
      `)
    );
    expect(errors).toEqual([]);
    const role = ast!.declarations.find((d) => d.name === "PremiumBuyer")!;
    // @ts-expect-error specializes added in 3.5
    expect(role.specializes).toEqual(["Buyer"]);
  });

  it("rejects [S21] a Role specializing a Kind (wrong stereotype pair)", () => {
    const { errors } = parse(
      withPreamble(`
        kind Seller { identity: sid; property sid: String; }
        relator Contract mediates (Buyer, Seller) { identity: cid; property cid: String; }
        kind Person { identity: pid; property pid: String; }
        role Buyer mediated-by Contract of Person specializes Person { }
      `)
    );
    expect(errors.some((e) => e.code === "S21")).toBe(true);
  });

  it("Role inherits properties from parent Role via MRO", () => {
    const { errors } = parse(
      withPreamble(`
        kind Seller { identity: sid; property sid: String; }
        relator Contract mediates (Buyer, Seller) { identity: cid; property cid: String; }
        kind Person { identity: pid; property pid: String; }
        role Buyer mediated-by Contract of Person {
          property budget: Real;
        }
        role PremiumBuyer mediated-by Contract of Person specializes Buyer {
          property tier: String;
        }
      `)
    );
    expect(errors).toEqual([]);
  });

  // ──────────────── MODE ────────────────

  it("parses a Mode with no specializes (backwards compat)", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Engine { identity: eid; property eid: String; }
        mode EngineHealth of Engine { property cycleCount: Integer; }
      `)
    );
    expect(errors).toEqual([]);
    const mode = ast!.declarations.find((d) => d.name === "EngineHealth")!;
    // @ts-expect-error specializes added in 3.5
    expect(mode.specializes).toEqual([]);
  });

  it("parses a Mode specializing another Mode", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Engine { identity: eid; property eid: String; }
        mode EngineHealth of Engine { property cycleCount: Integer; }
        mode JetEngineHealth of Engine specializes EngineHealth {
          property thrustN: Real;
        }
      `)
    );
    expect(errors).toEqual([]);
    const mode = ast!.declarations.find((d) => d.name === "JetEngineHealth")!;
    // @ts-expect-error specializes added in 3.5
    expect(mode.specializes).toEqual(["EngineHealth"]);
  });

  it("rejects [S21] a Mode specializing a Kind", () => {
    const { errors } = parse(
      withPreamble(`
        kind Engine { identity: eid; property eid: String; }
        mode JetHealth of Engine specializes Engine { }
      `)
    );
    expect(errors.some((e) => e.code === "S21")).toBe(true);
  });

  it("rejects [S21] a Mode specializing a Quality", () => {
    const { errors } = parse(
      withPreamble(`
        kind Engine { identity: eid; property eid: String; }
        quality Temp of Engine { property celsius: Real; }
        mode JetHealth of Engine specializes Temp { }
      `)
    );
    expect(errors.some((e) => e.code === "S21")).toBe(true);
  });

  // ──────────────── QUALITY ────────────────

  it("parses a Quality with no specializes (backwards compat)", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Drone { identity: did; property did: String; }
        quality Temperature of Drone { property celsius: Real; }
      `)
    );
    expect(errors).toEqual([]);
    const qual = ast!.declarations.find((d) => d.name === "Temperature")!;
    // @ts-expect-error specializes added in 3.5
    expect(qual.specializes).toEqual([]);
  });

  it("parses a Quality specializing another Quality", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Drone { identity: did; property did: String; }
        quality Temperature of Drone { property celsius: Real; }
        quality BodyTemperature of Drone specializes Temperature {
          property fahrenheit: Real;
        }
      `)
    );
    expect(errors).toEqual([]);
    const qual = ast!.declarations.find((d) => d.name === "BodyTemperature")!;
    // @ts-expect-error specializes added in 3.5
    expect(qual.specializes).toEqual(["Temperature"]);
  });

  it("rejects [S21] a Quality specializing a Mode", () => {
    const { errors } = parse(
      withPreamble(`
        kind Drone { identity: did; property did: String; }
        mode Health of Drone { property status: String; }
        quality Temp of Drone specializes Health { }
      `)
    );
    expect(errors.some((e) => e.code === "S21")).toBe(true);
  });

  // ──────────────── S15 cycle detection ────────────────

  it("rejects [S15] a Mode inheritance cycle", () => {
    const { errors } = parse(
      withPreamble(`
        kind Drone { identity: did; property did: String; }
        mode A of Drone specializes B { }
        mode B of Drone specializes A { }
      `)
    );
    expect(errors.some((e) => e.code === "S15")).toBe(true);
  });
});
