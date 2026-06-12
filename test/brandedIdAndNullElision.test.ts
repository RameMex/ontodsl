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

/**
 * Two codegen-rust bugs surfaced 2026-05-20 by the ArduPilot batch
 * migration (AP_BattMonitor, AP_Baro, AP_RangeFinder):
 *
 *   1) Branded identity newtype always wrapped String, even when
 *      the OCL identity property was Integer. Constructor took
 *      String for an Integer field; comparisons like
 *      `self.instanceId >= 0` failed twice over.
 *
 *   2) Null-check elision only handled top-level `self.<prop> <>
 *      null`. Inside `forAll(b | b.foo <> null)` lambdas, the check
 *      survived and codegened to `T != None`, which rustc rejects.
 *
 * These tests pin both fixes by:
 *   - Asserting the emitted Rust shape for shape regressions.
 *   - Running `cargo check` end-to-end to catch any downstream
 *     compilation failure the regex couldn't see.
 */

function cargoAvailable(): boolean {
  const r = spawnSync("cargo", ["--version"], { stdio: "ignore" });
  return r.status === 0;
}
const HAS_CARGO = cargoAvailable();

describe("branded ID — Integer identity field", () => {
  it("branded newtype inner type matches the identity property's declared type", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: instanceId;
  property instanceId: Integer;
  property voltage: Real;
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "t" });
    // BatteryId should wrap i64, not String.
    expect(libRs).toMatch(/pub struct BatteryId\(pub i64\);/);
    // Constructor should take i64, not String.
    expect(libRs).toMatch(/instance_id:\s*i64/);
  });

  it("Real identity drops Ord/Eq from derive (f64 isn't Ord)", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Sample {
  identity: ts;
  property ts: Real;
  property v: Real;
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "t" });
    expect(libRs).toMatch(/#\[derive\(Debug,\s*Clone,\s*PartialEq,\s*PartialOrd\)\]\s*\npub struct SampleId\(pub f64\)/);
  });

  it("invariant `self.id >= 0` unwraps with .0", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: instanceId;
  property instanceId: Integer;
  invariants {
    self.instanceId >= 0;
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "t" });
    expect(libRs).toMatch(/self\.instance_id\.0\s*>=\s*0/);
  });
});

describe("null-elision — inside forAll/exists lambda bodies", () => {
  it("`b.foo <> null` collapses to `true` when foo is non-Option", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real;
}
kind Pack {
  identity: id;
  property id: String;
  property batteries: Set<Battery>;
  invariants {
    self.batteries->forAll(b | b.voltage <> null);
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "t" });
    // The collapsed shape: `.all(|__x| true)`. We don't pin the
    // wrapping; just confirm `b.voltage != None` doesn't appear and
    // a constant truth value does.
    expect(libRs).not.toMatch(/\.voltage\s*!=\s*None/);
    expect(libRs).toMatch(/\.iter\(\)\.(any|all)\(\|__x\|\s*true\)/);
  });

  it("`b.foo = null` collapses to `false` when foo is non-Option", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real;
}
kind Pack {
  identity: id;
  property id: String;
  property batteries: Set<Battery>;
  invariants {
    self.batteries->forAll(b | b.voltage = null);
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "t" });
    expect(libRs).toMatch(/\.iter\(\)\.(any|all)\(\|__x\|\s*false\)/);
  });
});

describe.skipIf(!HAS_CARGO)("cargo check — both bugs fixed end-to-end", () => {
  it("AP_BattMonitor-shaped Integer identity + collection null check compiles", () => {
    const src = `schema "onto/0.1";
namespace t;
kind BatteryInstance {
  identity: instanceId;
  property instanceId: Integer;
  property voltage: Real internal default 0.0;
  property current: Real internal default 0.0;
  invariants {
    self.instanceId >= 0;
    self.voltage >= 0.0;
  }
}
kind Monitor {
  identity: monitorId;
  property monitorId: String;
  property batteries: Set<BatteryInstance>;
  invariants {
    self.batteries->forAll(b | b.instanceId <> null);
    self.batteries->forAll(b | b.voltage >= 0.0);
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { cargoToml, libRs } = renderRust(ast!, { crateName: "bug_fix_test" });

    const dir = mkdtempSync(join(tmpdir(), `ontodls_bug_fixes_`));
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
          `cargo check FAILED — branded-ID + null-elision regression\n\n` +
            `crate dir: ${dir}\n\n` +
            `stdout:\n${err.stdout ?? ""}\n\n` +
            `stderr:\n${err.stderr ?? ""}`,
        );
      }
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  }, 120_000);
});
