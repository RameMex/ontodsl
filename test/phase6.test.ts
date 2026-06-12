import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";

/**
 * Phase 6 introduces `happening` (UFO-B perdurant sortal) plus two new
 * relation stereotypes:
 *   <<participation>>  — endurant → Happening
 *   <<precedes>>        — Happening → Happening
 *   <<triggers>>        — Happening → Happening (causal variant)
 *
 * Allen's interval algebra and temporal OCL are deliberately deferred
 * to a later phase (6.5); the Phase 6 suite only covers the type-level
 * structure.
 */

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

const has = (
  errors: ReadonlyArray<{ code?: string; message: string }>,
  code: string,
  matcher?: RegExp,
): boolean =>
  errors.some(
    (e) => e.code === code && (matcher === undefined || matcher.test(e.message)),
  );

// ─── Happening parsing ─────────────────────────────────────────────────

describe("phase6 — happening parsing", () => {
  it("parses a happening with identity + property + invariant", () => {
    const { ast, errors } = parse(
      withPreamble(`
        happening Takeoff {
          identity: tid;
          property tid: String;
          property durationSec: Real;
          invariants { self.durationSec > 0; }
        }
      `),
    );
    expect(errors).toEqual([]);
    const h = ast!.declarations.find((d) => d.name === "Takeoff")!;
    expect(h.kind).toBe("HappeningDecl");
  });

  it("requires identity (S2 applies)", () => {
    const { errors } = parse(
      withPreamble(`happening Bad { property x: Real; }`),
    );
    expect(has(errors, "S2", /Happening 'Bad' must declare 'identity/)).toBe(
      true,
    );
  });

  it("allows a happening specialization chain", () => {
    const { ast, errors } = parse(
      withPreamble(`
        happening Flight { identity: fid; property fid: String; }
        happening CargoFlight specializes Flight {
          property tonnes: Real;
        }
      `),
    );
    expect(errors).toEqual([]);
    const h = ast!.declarations.find((d) => d.name === "CargoFlight")!;
    // @ts-expect-error HappeningDecl has specializes
    expect(h.specializes).toEqual(["Flight"]);
  });

  it("rejects a happening specializing a Kind (S21)", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        happening Bad specializes K { identity: bid; property bid: String; }
      `),
    );
    expect(
      has(errors, "S21", /Happening 'Bad' cannot specialize Kind/),
    ).toBe(true);
  });

  it("rejects a Kind specializing a Happening (S21)", () => {
    const { errors } = parse(
      withPreamble(`
        happening H { identity: hid; property hid: String; }
        kind Bad specializes H { identity: bid; property bid: String; }
      `),
    );
    expect(has(errors, "S21", /Kind 'Bad' cannot specialize Happening/)).toBe(
      true,
    );
  });

  it("detects a happening specialization cycle (S15)", () => {
    const { errors } = parse(
      withPreamble(`
        happening A specializes B { identity: a; property a: String; }
        happening B specializes A { identity: b; property b: String; }
      `),
    );
    expect(has(errors, "S15")).toBe(true);
  });
});

// ─── <<participation>> relation ───────────────────────────────────────

describe("phase6 — <<participation>> relation (S24)", () => {
  it("accepts Kind → Happening", () => {
    const { errors } = parse(
      withPreamble(`
        kind Drone { identity: id; property id: String; }
        happening Flight { identity: fid; property fid: String; }
        relation p: <<participation>> from Drone [1] to Flight [1];
      `),
    );
    expect(errors.some((e) => e.code === "S24")).toBe(false);
  });

  it("rejects Happening → Happening (source must be endurant)", () => {
    const { errors } = parse(
      withPreamble(`
        happening Takeoff { identity: t; property t: String; }
        happening Landing { identity: l; property l: String; }
        relation p: <<participation>> from Takeoff [1] to Landing [1];
      `),
    );
    expect(
      has(errors, "S24", /source must be an endurant/),
    ).toBe(true);
  });

  it("rejects Kind → Kind (target must be Happening)", () => {
    const { errors } = parse(
      withPreamble(`
        kind A { identity: id; property id: String; }
        kind B { identity: bid; property bid: String; }
        relation p: <<participation>> from A [1] to B [1];
      `),
    );
    expect(has(errors, "S24", /target must be a Happening/)).toBe(true);
  });

  it("accepts Role → Happening (roles are endurants)", () => {
    const { errors } = parse(
      withPreamble(`
        kind Seller { identity: sid; property sid: String; }
        kind Person { identity: pid; property pid: String; }
        relator C mediates (Buyer, Seller) {
          identity: cid; property cid: String;
        }
        role Buyer mediated-by C of Person { }
        happening Deal { identity: did; property did: String; }
        relation p: <<participation>> from Buyer [1] to Deal [1];
      `),
    );
    expect(errors.some((e) => e.code === "S24")).toBe(false);
  });
});

// ─── <<precedes>> / <<triggers>> ──────────────────────────────────────

describe("phase6 — <<precedes>> and <<triggers>> (S24)", () => {
  it("accepts Happening → Happening for precedes", () => {
    const { errors } = parse(
      withPreamble(`
        happening A { identity: aid; property aid: String; }
        happening B { identity: bid; property bid: String; }
        relation ord: <<precedes>> from A [1] to B [1];
      `),
    );
    expect(errors.some((e) => e.code === "S24")).toBe(false);
  });

  it("accepts Happening → Happening for triggers", () => {
    const { errors } = parse(
      withPreamble(`
        happening A { identity: aid; property aid: String; }
        happening B { identity: bid; property bid: String; }
        relation cause: <<triggers>> from A [1] to B [1];
      `),
    );
    expect(errors.some((e) => e.code === "S24")).toBe(false);
  });

  it("rejects Kind → Happening on precedes (source must be Happening)", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        happening H { identity: hid; property hid: String; }
        relation bad: <<precedes>> from K [1] to H [1];
      `),
    );
    expect(
      has(errors, "S24", /<<precedes>>.*source must be a Happening/),
    ).toBe(true);
  });

  it("rejects Happening → Kind on precedes (target must be Happening)", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: id; property id: String; }
        happening H { identity: hid; property hid: String; }
        relation bad: <<precedes>> from H [1] to K [1];
      `),
    );
    expect(
      has(errors, "S24", /<<precedes>>.*target must be a Happening/),
    ).toBe(true);
  });
});
