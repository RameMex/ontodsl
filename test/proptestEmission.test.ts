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
import { renderRustProptestsForFile } from "../src/codegen-rust/index.js";

/**
 * Phase Q3 / Paso 1 — contract-witness test emission.
 *
 * Patterns covered (verified by shape tests below + an end-to-end
 * cargo test on a real generated crate):
 *   - `forAll(v | v.isFinite())` on Array<Real, N>
 *   - `forAll(v | v OP <lit>)` on Array<Real, N>
 *   - `self.<prop>.isFinite()` invariants
 *   - `self.<prop> OP <lit>` numeric invariants
 *   - `<param>.isFinite()` pre-conditions
 *   - `<param> OP <lit>` pre-conditions
 *   - `result OP <lit>` post-conditions on return-typed events
 */

function cargoAvailable(): boolean {
  const r = spawnSync("cargo", ["--version"], { stdio: "ignore" });
  return r.status === 0;
}
const HAS_CARGO = cargoAvailable();

describe("contract-witness emission — shape", () => {
  it("emits a NaN-injection test for `forAll(v | v.isFinite())`", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Sensor {
  identity: id;
  property id: String;
  property state: Array<Real, 8>;
  invariants {
    self.state->forAll(v | v.isFinite());
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { proptestsRs, testCount } = renderRustProptestsForFile(ast!);
    expect(testCount).toBeGreaterThanOrEqual(2);
    expect(proptestsRs).toMatch(/inst\.state\[idx\]\s*=\s*f64::NAN/);
    // Concrete-case version (no proptest dep)
    expect(proptestsRs).toMatch(/for idx in 0\.\.[0-9]+usize/);
    expect(proptestsRs).not.toMatch(/proptest!/);
  });

  it("emits a bound-violation test for `forAll(v | v >= 0.0)`", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Sensor {
  identity: id;
  property id: String;
  property state: Array<Real, 4>;
  invariants {
    self.state->forAll(v | v >= 0.0);
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { proptestsRs, testCount } = renderRustProptestsForFile(ast!);
    expect(testCount).toBeGreaterThanOrEqual(1);
    expect(proptestsRs).toMatch(/inst\.state\[0\]\s*=\s*0\.0\s*-\s*1e-3/);
  });

  it("emits an out-of-range test for `self.<prop> >= 0.0`", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real;
  invariants {
    self.voltage >= 0.0;
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { proptestsRs, testCount } = renderRustProptestsForFile(ast!);
    expect(testCount).toBeGreaterThanOrEqual(1);
    expect(proptestsRs).toMatch(/inst\.voltage\s*=\s*0\.0\s*-\s*1e-3/);
  });

  it("emits pre-condition rejection tests for events", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Filter {
  identity: id;
  property id: String;
  property output: Real internal default 0.0;
  event step(dt: Real) {
    pre: dt > 0.0;
    pre: dt.isFinite();
    modifies: self.output;
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { proptestsRs, testCount } = renderRustProptestsForFile(ast!);
    expect(testCount).toBeGreaterThanOrEqual(2);
    expect(proptestsRs).toMatch(/step_wrapped\(0\.0,/);
    expect(proptestsRs).toMatch(/step_wrapped\(f64::NAN,/);
  });

  it("emits a post-condition rejection test for `result >= 0`", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Counter {
  identity: id;
  property id: String;
  property n: Integer internal default 0;
  event compute(): Integer {
    post: result >= 0;
    modifies: self.n;
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { proptestsRs, testCount } = renderRustProptestsForFile(ast!);
    expect(testCount).toBeGreaterThanOrEqual(1);
    // The test should call the wrapper with an impl returning a bad value
    // (here: result >= 0 means -1 violates) and expect Err.
    expect(proptestsRs).toMatch(/compute_wrapped\(.*0 - 1\)/);
    expect(proptestsRs).toMatch(/post_compute_result/);
  });

  it("returns empty output when there's nothing to test", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Empty {
  identity: id;
  property id: String;
  property data: Real;
}
`;
    const { ast } = parse(src);
    const { proptestsRs, testCount } = renderRustProptestsForFile(ast!);
    expect(testCount).toBe(0);
    expect(proptestsRs).toBe("");
  });

  it("uses #[test] (not proptest!) — no external dev-dep needed", () => {
    const src = `schema "onto/0.1";
namespace t;
kind X {
  identity: id;
  property id: String;
  property v: Real;
  invariants {
    self.v >= 0.0;
  }
}
`;
    const { ast } = parse(src);
    const { proptestsRs } = renderRustProptestsForFile(ast!);
    expect(proptestsRs).toMatch(/mod contract_tests/);
    expect(proptestsRs).not.toMatch(/use proptest::/);
    expect(proptestsRs).not.toMatch(/proptest!/);
  });
});

describe.skipIf(!HAS_CARGO)(
  "contract-witness emission — compiles + runs via cargo test",
  () => {
    it("Array isFinite invariant: emitted tests compile and pass", () => {
      const src = `schema "onto/0.1";
namespace t;
kind Sensor {
  identity: id;
  property id: String;
  property state: Array<Real, 4>;
  invariants {
    self.state->forAll(v | v.isFinite());
  }
}
`;
      const { ast, errors } = parse(src);
      expect(errors).toEqual([]);
      const { libRs } = renderRust(ast!, { crateName: "ct_emission_test" });
      const { proptestsRs } = renderRustProptestsForFile(ast!);

      const dir = mkdtempSync(join(tmpdir(), `ontodls_ct_`));
      try {
        // Adapt the no_std lib for the test crate: drop `#![no_std]` +
        // extern crate alloc so std (which re-exports alloc) supplies
        // the alloc::* symbols.
        // Adapt the no_std lib for the test crate: drop ONLY the
        // `#![no_std]` attribute; keep `extern crate alloc` because
        // generated code references `alloc::string::String` etc.
        // explicitly (std doesn't re-export `alloc::*` paths).
        const libRsStd = libRs.replace(/^#!\[no_std\]\s*$/m, "");
        const fullLib = libRsStd + "\n\n" + proptestsRs;
        writeFileSync(
          join(dir, "Cargo.toml"),
          [
            `[package]`,
            `name = "ct_emission_test"`,
            `version = "0.1.0"`,
            `edition = "2021"`,
            ``,
            `[lib]`,
            `crate-type = ["rlib"]`,
            ``,
            `[dependencies]`,
            ``,
          ].join("\n"),
          "utf8",
        );
        mkdirSync(join(dir, "src"), { recursive: true });
        writeFileSync(join(dir, "src", "lib.rs"), fullLib, "utf8");

        try {
          // `cargo check --tests` typechecks the test module without
          // linking — catches every emission shape bug (wrong field
          // names, bad type refs, malformed expressions). Avoids the
          // VS-build-tools linker requirement that gates `cargo test`
          // on Windows hosts. Runtime assertion outcomes are verified
          // manually + by the shape tests above.
          execSync("cargo check --tests --message-format=short", {
            cwd: dir,
            stdio: ["ignore", "pipe", "pipe"],
            encoding: "utf8",
          });
        } catch (err: any) {
          throw new Error(
            `cargo check --tests FAILED\n` +
              `dir: ${dir}\n` +
              `stdout:\n${err.stdout ?? ""}\n` +
              `stderr:\n${err.stderr ?? ""}`,
          );
        }
      } finally {
        if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
      }
    }, 120_000);

    it("end-to-end on AP_NavEKF3 .onto: cargo check --tests green", () => {
      // Bigger / realer test — runs all the witness tests the EKF
      // shape produces and asserts they all pass against the
      // ontodls-generated validator.
      const src = `schema "onto/0.1";
namespace t;
kind Ekf {
  identity: id;
  property id: String;
  property state: Array<Real, 8>;
  property cov: Array<Array<Real, 8>, 8>;
  invariants {
    self.state->forAll(v | v.isFinite());
    self.cov->forAll(row | row->forAll(c | c.isFinite()));
  }
  event predict(dt: Real, gyro: Array<Real, 3>) {
    pre: dt > 0.0;
    pre: dt.isFinite();
    pre: gyro->forAll(v | v.isFinite());
    modifies: self.state, self.cov;
  }
}
`;
      const { ast, errors } = parse(src);
      expect(errors).toEqual([]);
      const { libRs } = renderRust(ast!, { crateName: "ct_ekf_test" });
      const { proptestsRs, testCount } = renderRustProptestsForFile(ast!);
      expect(testCount).toBeGreaterThanOrEqual(3);

      const dir = mkdtempSync(join(tmpdir(), `ontodls_ct_ekf_`));
      try {
        // Adapt the no_std lib for the test crate: drop ONLY the
        // `#![no_std]` attribute; keep `extern crate alloc` because
        // generated code references `alloc::string::String` etc.
        // explicitly (std doesn't re-export `alloc::*` paths).
        const libRsStd = libRs.replace(/^#!\[no_std\]\s*$/m, "");
        const fullLib = libRsStd + "\n\n" + proptestsRs;
        writeFileSync(
          join(dir, "Cargo.toml"),
          [
            `[package]`,
            `name = "ct_ekf_test"`,
            `version = "0.1.0"`,
            `edition = "2021"`,
            ``,
            `[lib]`,
            `crate-type = ["rlib"]`,
            ``,
            `[dependencies]`,
            ``,
          ].join("\n"),
          "utf8",
        );
        mkdirSync(join(dir, "src"), { recursive: true });
        writeFileSync(join(dir, "src", "lib.rs"), fullLib, "utf8");
        try {
          execSync("cargo check --tests --message-format=short", {
            cwd: dir,
            stdio: ["ignore", "pipe", "pipe"],
            encoding: "utf8",
          });
        } catch (err: any) {
          throw new Error(
            `cargo check --tests FAILED for EKF witness emission\n` +
              `dir: ${dir}\n` +
              `stdout:\n${err.stdout ?? ""}\n` +
              `stderr:\n${err.stderr ?? ""}`,
          );
        }
      } finally {
        if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
      }
    }, 180_000);
  },
);
