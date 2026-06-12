import { describe, it, expect } from "vitest";
import {
  mkdtempSync,
  rmSync,
  existsSync,
  writeFileSync,
  readFileSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";
import { parse } from "../src/index.js";
import { renderC } from "../src/codegen-c/index.js";
import { runCli } from "../src/cli/gen.js";

/**
 * Phase Q4 / Paso 2 — C+ACSL backend tests.
 *
 * Shape tests run without a C toolchain. The optional compile-check
 * block gates on `gcc --version` succeeding — it runs locally for
 * developers with the toolchain installed and is skipped (not failed)
 * in environments without it.
 */

function gccAvailable(): boolean {
  const r = spawnSync("gcc", ["--version"], { stdio: "ignore" });
  return r.status === 0;
}
const HAS_GCC = gccAvailable();

function framaCAvailable(): boolean {
  const r = spawnSync("frama-c", ["-version"], { stdio: "ignore" });
  return r.status === 0;
}
const HAS_FRAMA_C = framaCAvailable();

describe("C+ACSL emission — shape", () => {
  it("emits branded ID typedef matching the identity property's type", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: instanceId;
  property instanceId: Integer;
  property voltage: Real;
}
`;
    const { ast } = parse(src);
    const { headerH } = renderC(ast!);
    // Branded ID wraps int64_t (Integer-typed identity)
    expect(headerH).toMatch(
      /typedef struct \{ int64_t inner; \} BatteryId;/,
    );
  });

  it("emits Array<Real, N> as `double name[N]` field", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Sensor {
  identity: id;
  property id: String;
  property state: Array<Real, 6>;
}
`;
    const { ast } = parse(src);
    const { headerH } = renderC(ast!);
    expect(headerH).toMatch(/double state\[6\];/);
  });

  it("emits nested Array<Array<Real,M>,N> as `double name[N][M]`", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Cov {
  identity: id;
  property id: String;
  property m: Array<Array<Real, 3>, 3>;
}
`;
    const { ast } = parse(src);
    const { headerH } = renderC(ast!);
    expect(headerH).toMatch(/double m\[3\]\[3\];/);
  });

  it("emits ACSL predicate for invariants", () => {
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
    const { ast } = parse(src);
    const { headerH } = renderC(ast!);
    expect(headerH).toMatch(/predicate inv_Battery\(Battery \*self\)/);
    expect(headerH).toMatch(/self->voltage\) >= \(0\.0/);
    expect(headerH).toMatch(
      /ensures \\result == 0 <==> inv_Battery\(self\);/,
    );
  });

  it("translates forAll(v | v.isFinite()) to ACSL \\forall + \\is_finite", () => {
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
    const { ast } = parse(src);
    const { headerH } = renderC(ast!);
    expect(headerH).toMatch(
      /\\forall integer __i; 0 <= __i < .*\\is_finite\(self->state\[__i\]\)/,
    );
  });

  it("emits event wrapper with ACSL requires from pre-conditions", () => {
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
    const { ast } = parse(src);
    const { headerH, sourceC } = renderC(ast!);
    // ACSL on the header
    expect(headerH).toMatch(/requires \(dt\) > \(0\.0\);/);
    expect(headerH).toMatch(/requires \\is_finite\(dt\);/);
    expect(headerH).toMatch(/assigns self->output, \*out_msg;/);
    expect(headerH).toMatch(
      /ensures \\result != 0 ==> \*self == \\old\(\*self\);/,
    );
    // Runtime check in the .c body
    expect(sourceC).toMatch(/if \(!\(\(\(dt\) > \(0\.0\)\)\)\) \{/);
    expect(sourceC).toMatch(/if \(!\(isfinite\(dt\)\)\) \{/);
  });

  it("CLI --target c writes <basename>.h + <basename>.c", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ontodls_c_cli_"));
    const ontoPath = join(dir, "foo.onto");
    writeFileSync(
      ontoPath,
      `schema "onto/0.1";
namespace t;
kind Thing {
  identity: id;
  property id: String;
  property x: Real;
  invariants {
    self.x >= 0.0;
  }
}
`,
      "utf8",
    );
    const out = join(dir, "out");
    const stdoutBuf: string[] = [];
    const stderrBuf: string[] = [];
    const code = await runCli(
      [ontoPath, "--out", out, "--target", "c"],
      {
        stdout: { write: (s: string) => { stdoutBuf.push(s); return true; } },
        stderr: { write: (s: string) => { stderrBuf.push(s); return true; } },
      },
    );
    try {
      expect(code).toBe(0);
      expect(existsSync(join(out, "foo.h"))).toBe(true);
      expect(existsSync(join(out, "foo.c"))).toBe(true);
      const h = readFileSync(join(out, "foo.h"), "utf8");
      expect(h).toMatch(/predicate inv_Thing/);
      const stdout = stdoutBuf.join("");
      expect(stdout).toContain("frama-c -wp");
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  });

  it("Set<T> and Option<T> emit visible TODO sentinels (v1 limit)", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Other { identity: oid; property oid: String; }
kind Pack {
  identity: id;
  property id: String;
  property xs: Set<Other>;
  property maybe: Option<Real>;
}
`;
    const { ast, errors } = parse(src);
    // The parse should succeed even though C+ACSL won't support
    // Set/Option — the limit lives in the codegen, not the parser.
    expect(errors.filter((e) => !e.code.startsWith("W"))).toEqual([]);
    const { headerH } = renderC(ast!);
    expect(headerH).toMatch(/TODO C\+ACSL v1 limit: Set/);
    expect(headerH).toMatch(/TODO C\+ACSL v1 limit: Option/);
  });
});

describe.skipIf(!HAS_GCC)("C+ACSL emission — compiles with gcc", () => {
  it("array_state_vector .h + .c compile with gcc -c", () => {
    const src = readFileSync("examples/array_state_vector.onto", "utf8");
    const { ast } = parse(src);
    const { headerH, sourceC } = renderC(ast!, { module: "asv" });
    const dir = mkdtempSync(join(tmpdir(), "ontodls_c_gcc_"));
    try {
      writeFileSync(join(dir, "asv.h"), headerH, "utf8");
      writeFileSync(join(dir, "asv.c"), sourceC, "utf8");
      const r = spawnSync(
        "gcc",
        ["-c", "-std=c99", "-Wall", "-Wno-unused-variable", "asv.c"],
        { cwd: dir, encoding: "utf8" },
      );
      if (r.status !== 0) {
        throw new Error(
          `gcc -c failed\nstdout:\n${r.stdout}\nstderr:\n${r.stderr}`,
        );
      }
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  }, 60_000);
});

describe.skipIf(!HAS_FRAMA_C)("C+ACSL emission — frama-c -wp accepts annotations", () => {
  it("array_state_vector validator's ACSL parses through frama-c", () => {
    const src = readFileSync("examples/array_state_vector.onto", "utf8");
    const { ast } = parse(src);
    const { headerH, sourceC } = renderC(ast!, { module: "asv" });
    const dir = mkdtempSync(join(tmpdir(), "ontodls_c_frama_"));
    try {
      writeFileSync(join(dir, "asv.h"), headerH, "utf8");
      writeFileSync(join(dir, "asv.c"), sourceC, "utf8");
      const r = spawnSync(
        "frama-c",
        ["-wp", "-wp-no-print", "asv.c"],
        { cwd: dir, encoding: "utf8", timeout: 30_000 },
      );
      // We accept either status 0 (verified) or status with proof
      // failures (WP couldn't prove every clause but the input
      // parsed). What we DON'T accept is a parse error.
      const allOut = (r.stdout ?? "") + (r.stderr ?? "");
      expect(allOut).not.toMatch(/syntax error/i);
      expect(allOut).not.toMatch(/parse error/i);
    } finally {
      if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
    }
  }, 60_000);
});
