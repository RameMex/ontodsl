import { describe, it, expect } from "vitest";
import {
  existsSync,
  mkdtempSync,
  mkdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { execSync, spawnSync } from "node:child_process";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { parse, renderRust } from "../src/index.js";
import type { ArrayType, KindDecl } from "../src/ast/nodes.js";

/**
 * Phase 16.5 — Array<T, N> type. Covers parser, codegen-rust type
 * mapping, factories' zero-value, and cargo check for real-shaped
 * EKF-style state vectors. The whole point of this primitive is to
 * stop encouraging the AI workaround of "flatten an N-dimensional
 * state to N scalar properties" — surfaced live during the AP_NavEKF3
 * migration where Gemini split the 16-element state vector across 16
 * scalar Real properties because Array didn't exist yet.
 */

function cargoAvailable(): boolean {
  const r = spawnSync("cargo", ["--version"], { stdio: "ignore" });
  return r.status === 0;
}
const HAS_CARGO = cargoAvailable();

describe("Array<T, N> — parser & AST", () => {
  it("parses a flat Array<Real, N> property", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Sensor {
  identity: id;
  property id: String;
  property state: Array<Real, 16>;
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const sensor = ast!.declarations.find((d) => d.name === "Sensor") as KindDecl;
    const stateProp = sensor.properties.find((p) => p.name === "state")!;
    expect(stateProp.propertyType.kind).toBe("ArrayType");
    const t = stateProp.propertyType as ArrayType;
    expect(t.size).toBe(16);
    expect(t.elementType.kind).toBe("PrimitiveType");
    expect((t.elementType as any).name).toBe("Real");
  });

  it("parses a nested Array<Array<Real, N>, M> as a matrix", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Covariance {
  identity: id;
  property id: String;
  property p: Array<Array<Real, 6>, 6>;
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const cov = ast!.declarations.find((d) => d.name === "Covariance") as KindDecl;
    const pProp = cov.properties.find((p) => p.name === "p")!;
    const outer = pProp.propertyType as ArrayType;
    expect(outer.kind).toBe("ArrayType");
    expect(outer.size).toBe(6);
    expect(outer.elementType.kind).toBe("ArrayType");
    const inner = outer.elementType as ArrayType;
    expect(inner.size).toBe(6);
    expect(inner.elementType.kind).toBe("PrimitiveType");
    expect((inner.elementType as any).name).toBe("Real");
  });

  it("rejects Array<T, 0> as a positive-integer violation", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Sensor {
  identity: id;
  property id: String;
  property bad: Array<Real, 0>;
}
`;
    // The grammar accepts `0` lexically but the builder throws because
    // sizes must be positive. We surface this as a parse-stage error.
    const { errors } = parse(src);
    expect(errors.length).toBeGreaterThan(0);
  });
});

describe("Array<T, N> — Rust codegen type mapping", () => {
  it("Array<Real, 16> lowers to [f64; 16]", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Sensor {
  identity: id;
  property id: String;
  property state: Array<Real, 16>;
}
`;
    const { ast } = parse(src);
    const { libRs } = renderRust(ast!, { crateName: "tt" });
    expect(libRs).toMatch(/state:\s*\[f64;\s*16\]/);
  });

  it("Array<Array<Real, 6>, 6> lowers to [[f64; 6]; 6]", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Cov {
  identity: id;
  property id: String;
  property p: Array<Array<Real, 6>, 6>;
}
`;
    const { ast } = parse(src);
    const { libRs } = renderRust(ast!, { crateName: "tt" });
    expect(libRs).toMatch(/p:\s*\[\[f64;\s*6\];\s*6\]/);
  });

  it("emits [0.0_f64; N] zero-init for Copy element types (internal property)", () => {
    // Zero-initialization only fires for `internal:` properties (the
    // factory hides those from the constructor and auto-fills them).
    // Public properties show up as constructor params instead.
    const src = `schema "onto/0.1";
namespace t;
kind Sensor {
  identity: id;
  property id: String;
  property state: Array<Real, 4> internal;
}
`;
    const { ast } = parse(src);
    const { libRs } = renderRust(ast!, { crateName: "tt" });
    expect(libRs).toMatch(/state:\s*\[0\.0_f64;\s*4\]/);
  });
});

describe.skipIf(!HAS_CARGO)(
  "Array<T, N> — cargo check (real shape)",
  () => {
    it("nested matrix forAll uses iter().copied() at every level", () => {
      // Regression: `self.m->forAll(row | row->forAll(x | x >= 0.0))`
      // requires `.copied()` on BOTH the outer iter (over inner
      // arrays) AND the inner iter (over scalars). The bug: when the
      // inner forAll's source is the outer lambda variable (not a
      // navigation), elementTypeOf returned null and the inner iter
      // skipped .copied(), leaving the lambda binding `&f64`.
      const src = `schema "onto/0.1";
namespace t;
kind Cov {
  identity: id;
  property id: String;
  property m: Array<Array<Real, 4>, 4>;
  invariants {
    self.m->forAll(row | row->forAll(x | x >= 0.0));
  }
}
`;
      const { ast, errors } = parse(src);
      expect(errors).toEqual([]);
      const { cargoToml, libRs } = renderRust(ast!, {
        crateName: "nested_matrix_regression",
      });
      const dir = mkdtempSync(join(tmpdir(), `ontodls_nested_matrix_`));
      try {
        writeFileSync(join(dir, "Cargo.toml"), cargoToml, "utf8");
        mkdirSync(join(dir, "src"), { recursive: true });
        writeFileSync(join(dir, "src", "lib.rs"), libRs, "utf8");
        try {
          execSync("cargo check --lib --message-format=short", {
            cwd: dir,
            stdio: ["ignore", "pipe", "pipe"],
            encoding: "utf8",
          });
        } catch (err: any) {
          throw new Error(
            `cargo check FAILED for nested matrix forAll\n\n` +
              `crate dir: ${dir}\n\n` +
              `stdout:\n${err.stdout ?? ""}\n\n` +
              `stderr:\n${err.stderr ?? ""}`,
          );
        }
      } finally {
        if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
      }
    }, 120_000);

    it("EKF-shaped state + covariance matrix compiles", () => {
      // Real-world test: 16-element state vector (quaternion + vel +
      // pos + biases) + 6×6 process noise covariance. This is the
      // shape Gemini Flash had to flatten across 16 scalar properties
      // for AP_NavEKF3 because Array didn't exist.
      const src = `schema "onto/0.1";
namespace ekf;

kind EkfState {
  identity: id;
  property id: String;
  property state: Array<Real, 16>;
  property processCov: Array<Array<Real, 6>, 6>;
  property covDiagonals: Array<Real, 16>;
  invariants {
    self.covDiagonals->forAll(d | d >= 0.0);
    self.state->exists(s | s.isFinite());
  }
}
`;
      const { ast, errors } = parse(src);
      expect(errors).toEqual([]);
      const { cargoToml, libRs } = renderRust(ast!, {
        crateName: "ekf_array_compile_test",
      });
      // Pre-flight: confirm the emitted source uses iter().copied()
      // on the Array<Real, …> forAll/exists so the lambda binds f64
      // not &f64. Same fix that landed for Set<Copy>.
      expect(libRs).toMatch(/\.iter\(\)\.copied\(\)\.(all|any)\(/);

      const dir = mkdtempSync(join(tmpdir(), `ontodls_ekf_array_`));
      try {
        writeFileSync(join(dir, "Cargo.toml"), cargoToml, "utf8");
        mkdirSync(join(dir, "src"), { recursive: true });
        writeFileSync(join(dir, "src", "lib.rs"), libRs, "utf8");
        try {
          execSync("cargo check --lib --message-format=short", {
            cwd: dir,
            stdio: ["ignore", "pipe", "pipe"],
            encoding: "utf8",
          });
        } catch (err: any) {
          throw new Error(
            `cargo check FAILED for EKF Array shape\n\n` +
              `crate dir: ${dir}\n\n` +
              `stdout:\n${err.stdout ?? ""}\n\n` +
              `stderr:\n${err.stderr ?? ""}`,
          );
        }
      } finally {
        if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
      }
    }, 120_000);
  },
);
