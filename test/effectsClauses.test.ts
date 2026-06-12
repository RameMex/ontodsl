import { describe, it, expect } from "vitest";
import { parse, renderRust } from "../src/index.js";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

/**
 * Phase 16 (MVP) — events may declare computational `effects`, the
 * properties they `read`, and the ones they `write`. All three are
 * labelled identifier lists. The MVP surfaces them as doc comments
 * on the generated Rust wrapper; semantic checks and capability
 * passing land in Phase 16.5.
 *
 * Modeled after SPARK 2014's `Global` / `Depends` and Koka's effect
 * rows. See ROADMAP.md for the design rationale.
 */

describe("effects / reads / writes — parser", () => {
  it("parses a single effects label", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property y: Real;
          event ping() {
            effects: Telemetry;
            post: self.y = 0.0;
            modifies: self.y;
          }
        }
      `),
    );
    expect(errors).toEqual([]);
    const ev = pickEvent(ast!, "ping");
    expect(ev.effects).toEqual(["Telemetry"]);
  });

  it("parses comma-separated effects", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property y: Real;
          event tick() {
            effects: Telemetry, Log, Time;
            post: true;
          }
        }
      `),
    );
    expect(errors).toEqual([]);
    const ev = pickEvent(ast!, "tick");
    expect(ev.effects).toEqual(["Telemetry", "Log", "Time"]);
  });

  it("parses reads and writes alongside effects", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Pid {
          identity: id;
          property id: String;
          property kp: Real;
          property setpoint: Real;
          property integrator: Real internal default 0.0;
          event update(meas: Real): Real {
            effects: Telemetry, Time;
            reads:   kp, setpoint;
            writes:  integrator;
            pre:  meas.isFinite();
            post: result.isFinite();
            modifies: self.integrator;
          }
        }
      `),
    );
    expect(errors).toEqual([]);
    const ev = pickEvent(ast!, "update");
    expect(ev.effects).toEqual(["Telemetry", "Time"]);
    expect(ev.reads).toEqual(["kp", "setpoint"]);
    expect(ev.writes).toEqual(["integrator"]);
  });

  it("events without these clauses keep empty arrays (backwards compat)", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property y: Real;
          event step() {
            post: true;
          }
        }
      `),
    );
    const ev = pickEvent(ast!, "step");
    expect(ev.effects).toEqual([]);
    expect(ev.reads).toEqual([]);
    expect(ev.writes).toEqual([]);
  });
});

describe("effects / reads / writes — Rust codegen", () => {
  it("emits the contract as doc comments on the wrapper", () => {
    const { ast } = parse(
      withPreamble(`
        kind Pid {
          identity: id;
          property id: String;
          property y: Real internal default 0.0;
          event update(meas: Real): Real {
            effects: Telemetry, Log;
            reads:   kp, setpoint;
            writes:  y;
            post: result.isFinite();
            modifies: self.y;
          }
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/\/\/\/ Effects: Telemetry, Log/);
    expect(libRs).toMatch(/\/\/\/ Reads: kp, setpoint/);
    expect(libRs).toMatch(/\/\/\/ Writes: y/);
  });

  it("does not emit Effects/Reads/Writes comments when clauses absent", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property y: Real;
          event step() {
            post: self.y = 0.0;
            modifies: self.y;
          }
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).not.toMatch(/\/\/\/ Effects:/);
    expect(libRs).not.toMatch(/\/\/\/ Reads:/);
    expect(libRs).not.toMatch(/\/\/\/ Writes:/);
  });
});

function pickEvent(ast: import("../src/ast/index.js").OntoFile, name: string) {
  for (const d of ast.declarations) {
    if (!("events" in d)) continue;
    const hit = d.events.find((e) => e.name === name);
    if (hit) return hit;
  }
  throw new Error(`event '${name}' not found in AST`);
}
