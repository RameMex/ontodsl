import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";

/**
 * Phase 8 tests exercise the use-case layer:
 *   - Parsing: actor list, trigger, success, failure slots
 *   - S34: actors must be Agents or Roles (not Kinds/Commitments/etc.)
 *   - S35: trigger must be a Happening (or a UseCase, which IS a
 *          specialized Happening in the matrix)
 *   - S36: success/failure must be Commitments
 *   - S2 / identity inheritance
 *   - Specialization matrix: UseCase → UseCase | Happening
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

// Helper: the minimum preamble with an agent, a happening, and two
// commitments — used by most use-case tests.
const standardSetup = `
  agent Customer { identity: u; property u: String; }
  agent Courier  { identity: c; property c: String; }
  happening DeliveryTrip { identity: d; property d: String; }
  commitment DeliveredOK
    debitor: Courier creditor: Customer { identity: okid; property okid: String; }
  commitment Breached
    debitor: Courier creditor: Customer { identity: bid; property bid: String; }
`;

// ─── Parsing ──────────────────────────────────────────────────────────

describe("phase8 — use-case parsing", () => {
  it("parses a complete use-case with actors + trigger + outcomes + body", () => {
    const { ast, errors } = parse(
      withPreamble(`
        ${standardSetup}
        use-case Deliver
          actors: (Customer, Courier)
          trigger: DeliveryTrip
          success: DeliveredOK
          failure: Breached
          {
            identity: ucId;
            property ucId: String;
          }
      `),
    );
    expect(errors).toEqual([]);
    const uc = ast!.declarations.find((d) => d.name === "Deliver")!;
    expect(uc.kind).toBe("UseCaseDecl");
    // @ts-expect-error
    expect(uc.actors).toEqual(["Customer", "Courier"]);
    // @ts-expect-error
    expect(uc.trigger).toBe("DeliveryTrip");
    // @ts-expect-error
    expect(uc.success).toBe("DeliveredOK");
    // @ts-expect-error
    expect(uc.failure).toBe("Breached");
  });

  it("accepts a use-case with zero actors (degenerate but legal)", () => {
    const { errors } = parse(
      withPreamble(`
        ${standardSetup}
        use-case Deliver
          actors: ()
          trigger: DeliveryTrip
          success: DeliveredOK
          failure: Breached
          { identity: ucId; property ucId: String; }
      `),
    );
    expect(errors.filter((e) => e.code === "S34")).toEqual([]);
  });

  it("allows use-case specialization from another use-case", () => {
    const { ast, errors } = parse(
      withPreamble(`
        ${standardSetup}
        use-case Base
          actors: (Customer) trigger: DeliveryTrip
          success: DeliveredOK failure: Breached
          { identity: bid; property bid: String; }
        use-case Refined specializes Base
          actors: (Customer, Courier) trigger: DeliveryTrip
          success: DeliveredOK failure: Breached
          { }
      `),
    );
    expect(errors).toEqual([]);
    const r = ast!.declarations.find((d) => d.name === "Refined")!;
    // @ts-expect-error
    expect(r.specializes).toEqual(["Base"]);
  });

  it("allows use-case specialization from a happening (UseCase → Happening)", () => {
    const { errors } = parse(
      withPreamble(`
        ${standardSetup}
        use-case Deliver specializes DeliveryTrip
          actors: (Customer) trigger: DeliveryTrip
          success: DeliveredOK failure: Breached
          { }
      `),
    );
    expect(errors.filter((e) => e.code === "S21")).toEqual([]);
  });
});

// ─── S34: actor type ──────────────────────────────────────────────────

describe("phase8 — S34: actors must be Agents or Roles", () => {
  it("rejects a Kind actor", () => {
    const { errors } = parse(
      withPreamble(`
        kind NotAnAgent { identity: n; property n: String; }
        agent A { identity: a; property a: String; }
        happening T { identity: t; property t: String; }
        commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
        commitment BAD debitor: A creditor: A { identity: bid; property bid: String; }
        use-case UC actors: (NotAnAgent) trigger: T
          success: OK failure: BAD { identity: ucId; property ucId: String; }
      `),
    );
    expect(
      has(errors, "S34", /actor 'NotAnAgent' must be an Agent or a Role \(got Kind\)/),
    ).toBe(true);
  });

  it("rejects a Commitment actor", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        happening T { identity: t; property t: String; }
        commitment C debitor: A creditor: A { identity: cid; property cid: String; }
        commitment BAD debitor: A creditor: A { identity: bid; property bid: String; }
        use-case UC actors: (C) trigger: T
          success: BAD failure: BAD { identity: ucId; property ucId: String; }
      `),
    );
    expect(
      has(errors, "S34", /actor 'C' must be an Agent or a Role/),
    ).toBe(true);
  });

  it("reports S11 on unresolved actor name", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        happening T { identity: t; property t: String; }
        commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
        use-case UC actors: (Ghost) trigger: T
          success: OK failure: OK { identity: ucId; property ucId: String; }
      `),
    );
    expect(
      has(errors, "S11", /actor references unknown type 'Ghost'/),
    ).toBe(true);
  });

  it("accepts Role actors", () => {
    const { errors } = parse(
      withPreamble(`
        kind Person { identity: p; property p: String; }
        agent Corp { identity: co; property co: String; }
        relator Contract mediates (Buyer, Seller) {
          identity: cid; property cid: String;
        }
        role Buyer mediated-by Contract of Person { }
        role Seller mediated-by Contract of Person { }
        happening T { identity: t; property t: String; }
        commitment OK debitor: Corp creditor: Corp {
          identity: okid; property okid: String;
        }
        use-case UC actors: (Buyer, Seller) trigger: T
          success: OK failure: OK { identity: ucId; property ucId: String; }
      `),
    );
    expect(errors.filter((e) => e.code === "S34")).toEqual([]);
  });
});

// ─── S35: trigger ─────────────────────────────────────────────────────

describe("phase8 — S35: trigger must be a Happening or UseCase", () => {
  it("rejects a Kind trigger", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        kind NotHappening { identity: n; property n: String; }
        commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
        use-case UC actors: (A) trigger: NotHappening
          success: OK failure: OK { identity: ucId; property ucId: String; }
      `),
    );
    expect(
      has(errors, "S35", /trigger 'NotHappening' must be a Happening or another UseCase/),
    ).toBe(true);
  });

  it("rejects an Agent trigger", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
        use-case UC actors: (A) trigger: A
          success: OK failure: OK { identity: ucId; property ucId: String; }
      `),
    );
    expect(has(errors, "S35", /trigger 'A' must be a Happening/)).toBe(true);
  });

  it("accepts another UseCase as trigger", () => {
    const { errors } = parse(
      withPreamble(`
        ${standardSetup}
        use-case Inner
          actors: (Customer) trigger: DeliveryTrip
          success: DeliveredOK failure: Breached
          { identity: inId; property inId: String; }
        use-case Outer
          actors: (Customer) trigger: Inner
          success: DeliveredOK failure: Breached
          { identity: ouId; property ouId: String; }
      `),
    );
    expect(errors.filter((e) => e.code === "S35")).toEqual([]);
  });
});

// ─── S36: success and failure ────────────────────────────────────────

describe("phase8 — S36: outcomes must be Commitments", () => {
  it("rejects a Happening as success", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        happening T { identity: t; property t: String; }
        commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
        use-case UC actors: (A) trigger: T
          success: T failure: OK { identity: ucId; property ucId: String; }
      `),
    );
    expect(
      has(errors, "S36", /success 'T' must be a Commitment \(got Happening\)/),
    ).toBe(true);
  });

  it("rejects a Kind as failure", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        happening T { identity: t; property t: String; }
        kind Junk { identity: j; property j: String; }
        commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
        use-case UC actors: (A) trigger: T
          success: OK failure: Junk { identity: ucId; property ucId: String; }
      `),
    );
    expect(
      has(errors, "S36", /failure 'Junk' must be a Commitment/),
    ).toBe(true);
  });

  it("reports S11 on unresolved outcome name", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        happening T { identity: t; property t: String; }
        commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
        use-case UC actors: (A) trigger: T
          success: Ghost failure: OK { identity: ucId; property ucId: String; }
      `),
    );
    expect(
      has(errors, "S11", /success references unknown type 'Ghost'/),
    ).toBe(true);
  });

  it("allows both success and failure to be the same commitment", () => {
    // Sometimes the same commitment has both fulfill and violate edges
    // wired externally — the use-case layer doesn't require distinct
    // commitments, just that both slots resolve.
    const { errors } = parse(
      withPreamble(`
        ${standardSetup}
        use-case UC actors: (Customer) trigger: DeliveryTrip
          success: DeliveredOK failure: DeliveredOK
          { identity: ucId; property ucId: String; }
      `),
    );
    expect(errors.filter((e) => e.code === "S36")).toEqual([]);
  });
});

// ─── Identity / S21 matrix ───────────────────────────────────────────

describe("phase8 — identity + specialization matrix", () => {
  it("requires identity on a bare use-case (S2)", () => {
    const { errors } = parse(
      withPreamble(`
        ${standardSetup}
        use-case UC actors: (Customer) trigger: DeliveryTrip
          success: DeliveredOK failure: Breached
          { property x: Real; }
      `),
    );
    expect(has(errors, "S2", /UseCase 'UC'/)).toBe(true);
  });

  it("allows identity inheritance via specializes", () => {
    const { errors } = parse(
      withPreamble(`
        ${standardSetup}
        use-case Base actors: (Customer) trigger: DeliveryTrip
          success: DeliveredOK failure: Breached
          { identity: bid; property bid: String; }
        use-case Refined specializes Base
          actors: (Customer) trigger: DeliveryTrip
          success: DeliveredOK failure: Breached
          { }
      `),
    );
    expect(errors.filter((e) => e.code === "S2")).toEqual([]);
  });

  it("rejects a use-case specializing a Kind (S21)", () => {
    const { errors } = parse(
      withPreamble(`
        ${standardSetup}
        kind K { identity: k; property k: String; }
        use-case UC specializes K
          actors: (Customer) trigger: DeliveryTrip
          success: DeliveredOK failure: Breached
          { identity: ucId; property ucId: String; }
      `),
    );
    expect(has(errors, "S21", /UseCase 'UC' cannot specialize Kind/)).toBe(
      true,
    );
  });
});
