import { describe, it, expect } from "vitest";
import { parse, renderRust } from "../src/index.js";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

/**
 * Phase 16b sibling — properties may declare `internal` to opt out
 * of the generated constructor, and `default <literal>` to specify
 * how the constructor (for internal) or future tunable-with-default
 * (for non-internal) should initialise them.
 *
 * This fixes the constructor-exposes-state critique from the user's
 * AC_PID review: `integrator`, `target`, `error`, etc. should be
 * `internal default 0.0`, not constructor parameters.
 */

describe("property modifiers — parser", () => {
  it("parses `internal` modifier alone", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property counter: Integer internal;
        }
      `),
    );
    expect(errors).toEqual([]);
    const decl = ast!.declarations[0]!;
    if (!("properties" in decl)) throw new Error("expected body-bearing");
    const counter = decl.properties.find((p) => p.name === "counter")!;
    expect(counter.isInternal).toBe(true);
    expect(counter.defaultValue).toBeNull();
  });

  it("parses `default <real>` with no `internal`", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property kp: Real default 1.0;
        }
      `),
    );
    expect(errors).toEqual([]);
    const decl = ast!.declarations[0]!;
    if (!("properties" in decl)) throw new Error("expected body-bearing");
    const kp = decl.properties.find((p) => p.name === "kp")!;
    expect(kp.isInternal).toBe(false);
    expect(kp.defaultValue).toEqual({ kind: "Real", value: 1.0 });
  });

  it("parses `internal default <bool>`", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property iSet: Boolean internal default false;
        }
      `),
    );
    expect(errors).toEqual([]);
    const decl = ast!.declarations[0]!;
    if (!("properties" in decl)) throw new Error("expected body-bearing");
    const iSet = decl.properties.find((p) => p.name === "iSet")!;
    expect(iSet.isInternal).toBe(true);
    expect(iSet.defaultValue).toEqual({ kind: "Boolean", value: false });
  });

  it("parses `default null` for Option<T>", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property fix: Option<Real> internal default null;
        }
      `),
    );
    expect(errors).toEqual([]);
    const decl = ast!.declarations[0]!;
    if (!("properties" in decl)) throw new Error("expected body-bearing");
    const fix = decl.properties.find((p) => p.name === "fix")!;
    expect(fix.defaultValue).toEqual({ kind: "Null", value: null });
  });

  it("non-modifier props default to isInternal=false, defaultValue=null", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property y: Real;
        }
      `),
    );
    const decl = ast!.declarations[0]!;
    if (!("properties" in decl)) throw new Error("expected body-bearing");
    const y = decl.properties.find((p) => p.name === "y")!;
    expect(y.isInternal).toBe(false);
    expect(y.defaultValue).toBeNull();
  });
});

describe("property modifiers — Rust codegen", () => {
  it("internal properties don't appear as constructor parameters", () => {
    const { ast } = parse(
      withPreamble(`
        kind Pid {
          identity: id;
          property id: String;
          property kp: Real;
          property integrator: Real internal default 0.0;
          property iSet: Boolean internal default false;
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    // Constructor signature should have id + kp but NOT integrator/iSet.
    expect(libRs).toMatch(/pub fn new\(\s+id: alloc::string::String,\s+kp: f64,\s+\) -> Self/);
    // Body initialises internal fields from defaults.
    expect(libRs).toMatch(/integrator: 0\.0,/);
    expect(libRs).toMatch(/i_set: false,/);
  });

  it("internal property without default falls back to zero/empty", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property errCount: Integer internal;
          property name: String internal;
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/err_count: 0_i64,/);
    expect(libRs).toMatch(/name: alloc::string::String::new\(\),/);
  });

  it("Option<T> internal default null emits None", () => {
    const { ast } = parse(
      withPreamble(`
        kind X {
          identity: id;
          property id: String;
          property fix: Option<Real> internal default null;
        }
      `),
    );
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/fix: None,/);
    // And fix is NOT in the constructor parameter list.
    expect(libRs).not.toMatch(/fix: Option<f64>,\s+\) -> Self/);
  });
});
