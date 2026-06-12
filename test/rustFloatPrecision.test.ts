import { describe, it, expect } from "vitest";
import { parse, renderRust } from "../src/index.js";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

const SOURCE = withPreamble(`
  kind Sensor {
    identity: id;
    property id: String;
    property reading: Real;
    invariants { self.reading >= 0.0; }
    event update(value: Real) {
      pre: value >= 0.0;
      post: self.reading = value;
      modifies: self.reading;
    }
  }
`);

describe("Rust float precision option", () => {
  it("defaults Real to f64", () => {
    const { ast } = parse(SOURCE);
    const { libRs } = renderRust(ast!);
    expect(libRs).toMatch(/pub reading: f64,/);
    expect(libRs).not.toMatch(/pub reading: f32,/);
    expect(libRs).toMatch(/Real → f64/);
  });

  it("maps Real to f32 when float: 'f32'", () => {
    const { ast } = parse(SOURCE);
    const { libRs } = renderRust(ast!, { float: "f32" });
    expect(libRs).toMatch(/pub reading: f32,/);
    expect(libRs).not.toMatch(/pub reading: f64,/);
    // Constructor parameter must also be f32 so the type flows through.
    expect(libRs).toMatch(/reading: f32,/);
    // Header banner reflects the choice.
    expect(libRs).toMatch(/Real → f32/);
  });

  it("event wrapper signature uses the chosen float type", () => {
    const { ast } = parse(SOURCE);
    const { libRs } = renderRust(ast!, { float: "f32" });
    expect(libRs).toMatch(/update_wrapped<F>\(\s*&mut self,\s*value: f32,/);
  });

  it("works in combination with no-alloc target", () => {
    const { ast } = parse(SOURCE);
    const { libRs } = renderRust(ast!, { target: "no-alloc", float: "f32" });
    expect(libRs).toMatch(/pub reading: f32,/);
    expect(libRs).toMatch(/heapless::/);
  });
});
