import { describe, it, expect } from "vitest";
import { parse } from "../src/index.js";
import { validateSemantics } from "../src/semantic/validator.js";
import { getExplainEntry } from "../src/cli/explain.js";

/**
 * Phase Q3 / Paso 4 (partial) — writes-conflict static analysis.
 *
 * The W37 advisory fires when two or more events on the same type
 * declare the same property in their `writes:` clause. ontodls can't
 * decide statically whether the events run concurrently; surfacing
 * the data hazard makes the user responsible for documenting
 * mitigation.
 *
 * Why advisory (W) rather than hard (S): one property legitimately
 * gets multiple writers in many real systems (a `reset` event and a
 * `step` event both touch state). The warning ensures the safety
 * case explicitly addresses the data hazard — a regulated-industry
 * auditor's first question.
 */

function diagnose(src: string) {
  // `parse()` already runs both syntactic + semantic checks and
  // bundles all diagnostics (including W## advisories) into `errors`.
  // We want the full list so we can assert on W37 directly.
  const { ast, errors } = parse(src);
  if (ast === null) {
    throw new Error("parse failure: " + JSON.stringify(errors));
  }
  return errors;
}

describe("W37 — writes-conflict advisory", () => {
  it("fires when two events write the same property", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real internal default 0.0;
  event read(v: Real) {
    pre: v.isFinite();
    modifies: self.voltage;
    writes: voltage;
  }
  event reset() {
    modifies: self.voltage;
    writes: voltage;
  }
}
`;
    const diags = diagnose(src);
    const w37 = diags.filter((d) => d.code === "W37");
    expect(w37).toHaveLength(1);
    expect(w37[0]!.message).toContain("voltage");
    expect(w37[0]!.message).toContain("'read'");
    expect(w37[0]!.message).toContain("'reset'");
  });

  it("does NOT fire when only one event writes a property", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real internal default 0.0;
  property current: Real internal default 0.0;
  event read(v: Real, c: Real) {
    pre: v.isFinite();
    pre: c.isFinite();
    modifies: self.voltage, self.current;
    writes: voltage, current;
  }
  event clear() {
    modifies: self.current;
    writes: current;
  }
}
`;
    const diags = diagnose(src);
    const w37 = diags.filter((d) => d.code === "W37");
    // current is written by both read + clear → 1 W37 about 'current'
    // voltage is written only by read → no W37
    expect(w37).toHaveLength(1);
    expect(w37[0]!.message).toContain("current");
    expect(w37[0]!.message).not.toContain("voltage");
  });

  it("fires once per conflicting property, not per pair", () => {
    const src = `schema "onto/0.1";
namespace t;
kind T {
  identity: id;
  property id: String;
  property p: Real internal default 0.0;
  event a() { modifies: self.p; writes: p; }
  event b() { modifies: self.p; writes: p; }
  event c() { modifies: self.p; writes: p; }
}
`;
    const diags = diagnose(src);
    const w37 = diags.filter((d) => d.code === "W37");
    expect(w37).toHaveLength(1);
    expect(w37[0]!.message).toContain("3 events");
  });

  it("does NOT fire when a type has fewer than 2 events", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Solo {
  identity: id;
  property id: String;
  property x: Real internal default 0.0;
  event step() {
    modifies: self.x;
    writes: x;
  }
}
`;
    const diags = diagnose(src);
    expect(diags.filter((d) => d.code === "W37")).toEqual([]);
  });

  it("is documented in the CLI explain catalog", () => {
    const entry = getExplainEntry("W37");
    expect(entry).toBeDefined();
    expect(entry!.category).toBe("advisory");
    expect(entry!.title).toContain("coordination hot-spot");
  });

  it("does NOT block compilation (advisory, not S error)", () => {
    const src = `schema "onto/0.1";
namespace t;
kind X {
  identity: id;
  property id: String;
  property p: Real internal default 0.0;
  event a() { modifies: self.p; writes: p; }
  event b() { modifies: self.p; writes: p; }
}
`;
    const diags = diagnose(src);
    // All diags should have W## codes (advisory), no S## (hard).
    const hard = diags.filter((d) => d.code.startsWith("S"));
    expect(hard).toEqual([]);
  });
});

describe("W38 — effects-label inconsistency", () => {
  it("fires when two writers declare DIFFERENT effects sets", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real internal default 0.0;
  event read(v: Real) {
    pre: v.isFinite();
    modifies: self.voltage;
    effects: HardwareRead;
    writes: voltage;
  }
  event reset() {
    modifies: self.voltage;
    effects: NetworkBroadcast;
    writes: voltage;
  }
}
`;
    const diags = diagnose(src);
    // W37 always fires for multiple writers; W38 fires additionally
    // because the effects sets disagree.
    const w37 = diags.filter((d) => d.code === "W37");
    const w38 = diags.filter((d) => d.code === "W38");
    expect(w37).toHaveLength(1);
    expect(w38).toHaveLength(1);
    expect(w38[0]!.message).toContain("HardwareRead");
    expect(w38[0]!.message).toContain("NetworkBroadcast");
  });

  it("does NOT fire when both writers declare the SAME effects set", () => {
    const src = `schema "onto/0.1";
namespace t;
kind Battery {
  identity: id;
  property id: String;
  property voltage: Real internal default 0.0;
  event read1(v: Real) {
    pre: v.isFinite();
    modifies: self.voltage;
    effects: HardwareRead;
    writes: voltage;
  }
  event read2(v: Real) {
    pre: v.isFinite();
    modifies: self.voltage;
    effects: HardwareRead;
    writes: voltage;
  }
}
`;
    const diags = diagnose(src);
    // W37 fires (multiple writers); W38 does NOT (effects match).
    expect(diags.filter((d) => d.code === "W37")).toHaveLength(1);
    expect(diags.filter((d) => d.code === "W38")).toEqual([]);
  });

  it("does NOT fire when no writer has any effects declared", () => {
    // Pure data hazard without any side-effect annotations is W37
    // only — without effects we don't have evidence of inconsistency.
    const src = `schema "onto/0.1";
namespace t;
kind T {
  identity: id;
  property id: String;
  property p: Real internal default 0.0;
  event a() { modifies: self.p; writes: p; }
  event b() { modifies: self.p; writes: p; }
}
`;
    const diags = diagnose(src);
    expect(diags.filter((d) => d.code === "W37")).toHaveLength(1);
    expect(diags.filter((d) => d.code === "W38")).toEqual([]);
  });

  it("is documented in the CLI explain catalog", () => {
    const entry = getExplainEntry("W38");
    expect(entry).toBeDefined();
    expect(entry!.category).toBe("advisory");
    expect(entry!.title).toContain("effects:");
  });
});
