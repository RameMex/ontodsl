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
 * Set<NamedType> backing changed 2026-05-20 from BTreeSet to Vec.
 *
 * Background: structs in ontodls only derive `PartialEq` because they
 * may carry f64 fields (which don't implement Ord/Eq). BTreeSet and
 * FnvIndexSet both require `T: Ord`, so `BTreeSet<BatteryInstance>`
 * never compiled. Surfaced by AP_BattMonitor's
 * `self.batteries->includes(newBattery)` post-condition.
 *
 * Fix: Set<NamedType> backs to Vec<T>; `->includes(x)` lowers to
 * `.iter().any(|__y| __y == &x)`. Set<Primitive> still uses
 * BTreeSet/FnvIndexSet for O(log n) lookup.
 */

function cargoAvailable(): boolean {
  const r = spawnSync("cargo", ["--version"], { stdio: "ignore" });
  return r.status === 0;
}
const HAS_CARGO = cargoAvailable();

describe("Set<NamedType> — Vec backing + linear includes()", () => {
  it("field type maps to alloc::vec::Vec<T>", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real;
}
kind Pack {
  identity: pid;
  property pid: String;
  property batteries: Set<Battery>;
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "t" });
    expect(libRs).toMatch(/pub batteries:\s*alloc::vec::Vec<Battery>,/);
  });

  it("Set<Primitive> stays on BTreeSet for O(log n) lookup", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Pack {
  identity: pid;
  property pid: String;
  property tags: Set<Integer>;
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "t" });
    expect(libRs).toMatch(/pub tags:\s*alloc::collections::BTreeSet<i64>,/);
  });

  it("->includes(struct) emits linear .iter().any(|y| y == &x)", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real;
}
kind Pack {
  identity: pid;
  property pid: String;
  property batteries: Set<Battery>;
  property primary: Battery;
  invariants {
    self.batteries->includes(self.primary);
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "t" });
    // Vec backing → linear search
    expect(libRs).toMatch(
      /self\.batteries\.iter\(\)\.any\(\|__y\|\s*__y\s*==\s*&self\.primary\)/,
    );
    expect(libRs).not.toMatch(/self\.batteries\.contains\(/);
  });

  it("->includes(prim) on Set<Primitive> still uses contains()", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Pack {
  identity: pid;
  property pid: String;
  property tags: Set<Integer>;
  property focusTag: Integer;
  invariants {
    self.tags->includes(self.focusTag);
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { libRs } = renderRust(ast!, { crateName: "t" });
    expect(libRs).toMatch(/self\.tags\.contains\(&self\.focus_tag\)/);
  });
});

describe.skipIf(!HAS_CARGO)("Set<NamedType> — cargo check", () => {
  it("AP_BattMonitor-shaped invariant + includes() compiles", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: instanceId;
  property instanceId: Integer;
  property voltage: Real internal default 0.0;
}
kind Monitor {
  identity: id;
  property id: String;
  property batteries: Set<Battery>;
  property primary: Battery;
  invariants {
    self.batteries->includes(self.primary);
    self.batteries->forAll(b | b.instanceId >= 0);
  }
}
`;
    const { ast, errors } = parse(src);
    expect(errors).toEqual([]);
    const { cargoToml, libRs } = renderRust(ast!, { crateName: "set_named_regression" });

    const dir = mkdtempSync(join(tmpdir(), `ontodls_set_named_`));
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
          `cargo check FAILED — Set<NamedType> regression\n\n` +
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
