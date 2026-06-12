import { describe, it, expect } from "vitest";
import {
  mkdtempSync,
  rmSync,
  writeFileSync,
  readFileSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { parse } from "../src/index.js";
import {
  diffOnto,
  renderHumanReport,
  type ClassifiedDiff,
} from "../src/migration/diff.js";
import { runCli } from "../src/cli/gen.js";

/**
 * Phase 17 / Paso 5 day 4 — schema migration tooling tests.
 *
 * Each test pair (old, new) targets one diff category:
 *   - type-added / removed
 *   - property-added / removed / type-changed
 *   - event-added / removed / signature-changed
 *   - invariant-added / removed
 *   - pre-added / removed
 *   - post-added / removed
 *
 * Plus integration tests via the `ontodsl diff` CLI.
 */

function parseAst(src: string) {
  const r = parse(src, { validateSemantics: false });
  if (!r.ast) throw new Error("parse failed: " + JSON.stringify(r.errors));
  return r.ast;
}

function diff(oldSrc: string, newSrc: string): ClassifiedDiff[] {
  return diffOnto(parseAst(oldSrc), parseAst(newSrc)).changes;
}

const baseHeader = `schema "onto/0.1";\nnamespace t;\n`;

describe("diffOnto — type lifecycle", () => {
  it("detects type added", () => {
    const old_ = baseHeader;
    const new_ = baseHeader + `kind A { identity: id; property id: String; }\n`;
    const changes = diff(old_, new_);
    expect(changes).toHaveLength(1);
    expect(changes[0]!.kind).toBe("type-added");
    expect(changes[0]!.classification).toBe("ADDITIVE");
  });

  it("detects type removed (BREAKING)", () => {
    const old_ = baseHeader + `kind A { identity: id; property id: String; }\n`;
    const new_ = baseHeader;
    const changes = diff(old_, new_);
    expect(changes).toHaveLength(1);
    expect(changes[0]!.kind).toBe("type-removed");
    expect(changes[0]!.classification).toBe("BREAKING");
  });
});

describe("diffOnto — property lifecycle", () => {
  const wrap = (props: string) =>
    baseHeader +
    `kind A {\n  identity: id;\n  property id: String;\n  ${props}\n}\n`;

  it("property added is ADDITIVE", () => {
    const c = diff(wrap(""), wrap("property voltage: Real;"));
    const padd = c.find((x) => x.kind === "property-added");
    expect(padd).toBeDefined();
    expect(padd!.classification).toBe("ADDITIVE");
    expect((padd as any).propertyType).toBe("Real");
  });

  it("property removed is BREAKING", () => {
    const c = diff(wrap("property voltage: Real;"), wrap(""));
    const prem = c.find((x) => x.kind === "property-removed");
    expect(prem).toBeDefined();
    expect(prem!.classification).toBe("BREAKING");
  });

  it("property type changed is BREAKING", () => {
    const c = diff(wrap("property voltage: Real;"), wrap("property voltage: Integer;"));
    const pchg = c.find((x) => x.kind === "property-type-changed");
    expect(pchg).toBeDefined();
    expect(pchg!.classification).toBe("BREAKING");
    expect((pchg as any).oldType).toBe("Real");
    expect((pchg as any).newType).toBe("Integer");
  });

  it("identical property types do not register a change", () => {
    const same = wrap("property voltage: Real;");
    expect(diff(same, same)).toEqual([]);
  });
});

describe("diffOnto — events + clauses", () => {
  const wrap = (events: string) =>
    baseHeader +
    `kind A {\n  identity: id;\n  property id: String;\n  property x: Real internal default 0.0;\n  ${events}\n}\n`;

  it("event added is ADDITIVE", () => {
    const c = diff(wrap(""), wrap(`event step(dt: Real) { modifies: self.x; }`));
    const ea = c.find((x) => x.kind === "event-added");
    expect(ea).toBeDefined();
    expect(ea!.classification).toBe("ADDITIVE");
  });

  it("event removed is BREAKING", () => {
    const c = diff(wrap(`event step(dt: Real) { modifies: self.x; }`), wrap(""));
    const er = c.find((x) => x.kind === "event-removed");
    expect(er).toBeDefined();
    expect(er!.classification).toBe("BREAKING");
  });

  it("event signature change is BREAKING", () => {
    const c = diff(
      wrap(`event step(dt: Real) { modifies: self.x; }`),
      wrap(`event step(dt: Real, k: Real) { modifies: self.x; }`),
    );
    const sig = c.find((x) => x.kind === "event-signature-changed");
    expect(sig).toBeDefined();
    expect(sig!.classification).toBe("BREAKING");
    expect((sig as any).description).toContain("1 → 2");
  });

  it("pre-condition added is BREAKING (stricter)", () => {
    const c = diff(
      wrap(`event step(dt: Real) { modifies: self.x; }`),
      wrap(`event step(dt: Real) { pre: dt > 0.0; modifies: self.x; }`),
    );
    const pa = c.find((x) => x.kind === "pre-added");
    expect(pa).toBeDefined();
    expect(pa!.classification).toBe("BREAKING");
  });

  it("pre-condition removed is ADDITIVE", () => {
    const c = diff(
      wrap(`event step(dt: Real) { pre: dt > 0.0; modifies: self.x; }`),
      wrap(`event step(dt: Real) { modifies: self.x; }`),
    );
    const pr = c.find((x) => x.kind === "pre-removed");
    expect(pr).toBeDefined();
    expect(pr!.classification).toBe("ADDITIVE");
  });

  it("post-condition added is ADDITIVE (stronger guarantee)", () => {
    const c = diff(
      wrap(`event step(dt: Real) { modifies: self.x; }`),
      wrap(`event step(dt: Real) { post: self.x >= 0.0; modifies: self.x; }`),
    );
    const pa = c.find((x) => x.kind === "post-added");
    expect(pa).toBeDefined();
    expect(pa!.classification).toBe("ADDITIVE");
  });

  it("post-condition removed is BREAKING (weaker guarantee)", () => {
    const c = diff(
      wrap(`event step(dt: Real) { post: self.x >= 0.0; modifies: self.x; }`),
      wrap(`event step(dt: Real) { modifies: self.x; }`),
    );
    const pr = c.find((x) => x.kind === "post-removed");
    expect(pr).toBeDefined();
    expect(pr!.classification).toBe("BREAKING");
  });
});

describe("diffOnto — invariants", () => {
  const wrap = (inv: string) =>
    baseHeader +
    `kind A {\n  identity: id;\n  property id: String;\n  property v: Real;\n  invariants {\n    ${inv}\n  }\n}\n`;

  it("invariant added is BREAKING", () => {
    const c = diff(
      baseHeader + `kind A { identity: id; property id: String; property v: Real; }\n`,
      wrap("self.v >= 0.0;"),
    );
    const ia = c.find((x) => x.kind === "invariant-added");
    expect(ia).toBeDefined();
    expect(ia!.classification).toBe("BREAKING");
  });

  it("invariant removed is ADDITIVE", () => {
    const c = diff(
      wrap("self.v >= 0.0;"),
      baseHeader + `kind A { identity: id; property id: String; property v: Real; }\n`,
    );
    const ir = c.find((x) => x.kind === "invariant-removed");
    expect(ir).toBeDefined();
    expect(ir!.classification).toBe("ADDITIVE");
  });

  it("cosmetic whitespace doesn't register as a change", () => {
    const o = wrap("self.v >= 0.0;");
    const n = wrap("self.v   >=    0.0;");
    expect(diff(o, n)).toEqual([]);
  });
});

describe("diffOnto — summary counts", () => {
  it("totals match per-classification counts", () => {
    const o = baseHeader + `kind A { identity: id; property id: String; property x: Real; }\n`;
    const n =
      baseHeader +
      `kind A { identity: id; property id: String; property x: Real; property y: Real; }\nkind B { identity: id; property id: String; }\n`;
    const report = diffOnto(parseAst(o), parseAst(n));
    expect(report.summary.total).toBe(2);
    expect(report.summary.additive).toBe(2);
    expect(report.summary.breaking).toBe(0);
  });
});

describe("renderHumanReport", () => {
  it("groups breaking changes first", () => {
    const o = baseHeader + `kind A { identity: id; property id: String; property x: Real; }\n`;
    const n = baseHeader + `kind B { identity: id; property id: String; }\n`;
    const txt = renderHumanReport(diffOnto(parseAst(o), parseAst(n)));
    const breakingIdx = txt.indexOf("BREAKING:");
    const additiveIdx = txt.indexOf("ADDITIVE:");
    expect(breakingIdx).toBeGreaterThanOrEqual(0);
    expect(additiveIdx).toBeGreaterThan(breakingIdx);
  });

  it("(no changes detected) when reports are empty", () => {
    const same = baseHeader + `kind A { identity: id; property id: String; }\n`;
    const txt = renderHumanReport(diffOnto(parseAst(same), parseAst(same)));
    expect(txt).toContain("(no changes detected)");
  });
});

describe("CLI: ontodsl diff", () => {
  function streams() {
    let stdout = "";
    let stderr = "";
    return {
      streams: {
        stdout: { write: (s: string) => { stdout += s; return true; } },
        stderr: { write: (s: string) => { stderr += s; return true; } },
      },
      get stdout() { return stdout; },
      get stderr() { return stderr; },
    };
  }

  function withTwoFiles(
    body: (oldP: string, newP: string) => Promise<void>,
  ): Promise<void> {
    return new Promise(async (resolveP, rejectP) => {
      const dir = mkdtempSync(join(tmpdir(), "ontodls_diff_"));
      try {
        const oldP = join(dir, "old.onto");
        const newP = join(dir, "new.onto");
        await body(oldP, newP);
        resolveP();
      } catch (err) {
        rejectP(err);
      } finally {
        if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
      }
    });
  }

  it("human report when called without --json", async () => {
    await withTwoFiles(async (oldP, newP) => {
      writeFileSync(oldP, baseHeader + `kind A { identity: id; property id: String; }\n`);
      writeFileSync(newP, baseHeader + `kind A { identity: id; property id: String; property x: Real; }\n`);
      const s = streams();
      const code = await runCli(["diff", oldP, newP], s.streams);
      expect(code).toBe(0);
      expect(s.stdout).toContain("schema diff");
      expect(s.stdout).toContain("ADDITIVE");
    });
  });

  it("--json emits a parseable JSON document", async () => {
    await withTwoFiles(async (oldP, newP) => {
      writeFileSync(oldP, baseHeader + `kind A { identity: id; property id: String; property x: Real; }\n`);
      writeFileSync(newP, baseHeader);
      const s = streams();
      const code = await runCli(["diff", oldP, newP, "--json"], s.streams);
      expect(code).toBe(0);
      const parsed = JSON.parse(s.stdout);
      expect(parsed.schemaVersion).toBe("ontodls-diff/1");
      expect(parsed.summary.breaking).toBeGreaterThan(0);
    });
  });

  it("--out writes JSON to file", async () => {
    await withTwoFiles(async (oldP, newP) => {
      writeFileSync(oldP, baseHeader);
      writeFileSync(newP, baseHeader + `kind B { identity: id; property id: String; }\n`);
      const outP = oldP + ".diff.json";
      const s = streams();
      const code = await runCli(["diff", oldP, newP, "--out", outP], s.streams);
      expect(code).toBe(0);
      expect(existsSync(outP)).toBe(true);
      const written = JSON.parse(readFileSync(outP, "utf8"));
      expect(written.summary.additive).toBe(1);
    });
  });

  it("--strict exits 5 on breaking changes", async () => {
    await withTwoFiles(async (oldP, newP) => {
      writeFileSync(oldP, baseHeader + `kind A { identity: id; property id: String; property x: Real; }\n`);
      writeFileSync(newP, baseHeader);
      const s = streams();
      const code = await runCli(["diff", oldP, newP, "--strict"], s.streams);
      expect(code).toBe(5);
      expect(s.stderr).toContain("breaking");
    });
  });

  it("--strict exits 0 when no breaking changes", async () => {
    await withTwoFiles(async (oldP, newP) => {
      writeFileSync(oldP, baseHeader + `kind A { identity: id; property id: String; }\n`);
      writeFileSync(newP, baseHeader + `kind A { identity: id; property id: String; property x: Real; }\n`);
      const s = streams();
      const code = await runCli(["diff", oldP, newP, "--strict"], s.streams);
      expect(code).toBe(0);
    });
  });

  it("exit 1 on missing args", async () => {
    const s = streams();
    const code = await runCli(["diff", "only-one.onto"], s.streams);
    expect(code).toBe(1);
    expect(s.stderr).toContain("missing");
  });
});
