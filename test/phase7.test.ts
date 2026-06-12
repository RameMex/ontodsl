import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";

/**
 * Phase 7 tests cover UFO-C social structure:
 *   - `agent` stereotype: parsing, identity, specialization rules
 *   - `commitment` stereotype: debitor/creditor syntax, agent
 *     resolution, specialization
 *   - S31: commitment endpoints must be agents
 *   - S24 extensions: <<commitsTo>>, <<fulfills>>, <<violates>>
 *   - S21 matrix: Agent → Kind allowed, Kind → Agent rejected
 *
 * Commitment lifecycle states and formal predicates are scoped to a
 * later phase; the tests here exercise only the structural layer.
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

// ─── Agent parsing ────────────────────────────────────────────────────

describe("phase7 — agent parsing", () => {
  it("parses a bare agent with identity and property", () => {
    const { ast, errors } = parse(
      withPreamble(`
        agent Customer {
          identity: uid;
          property uid: String;
          property name: String;
        }
      `),
    );
    expect(errors).toEqual([]);
    const d = ast!.declarations.find((x) => x.name === "Customer")!;
    expect(d.kind).toBe("AgentDecl");
  });

  it("requires identity on bare agent (S2)", () => {
    const { errors } = parse(withPreamble(`agent A { property x: Real; }`));
    expect(has(errors, "S2", /Agent 'A'/)).toBe(true);
  });

  it("allows agent to inherit identity via specializes", () => {
    const { errors } = parse(
      withPreamble(`
        kind Person { identity: pid; property pid: String; }
        agent Customer specializes Person { }
      `),
    );
    expect(errors).toEqual([]);
  });

  it("allows agent specializing another agent", () => {
    const { ast, errors } = parse(
      withPreamble(`
        agent Courier { identity: cid; property cid: String; }
        agent ExpressCourier specializes Courier { }
      `),
    );
    expect(errors).toEqual([]);
    const d = ast!.declarations.find((x) => x.name === "ExpressCourier")!;
    // @ts-expect-error AgentDecl
    expect(d.specializes).toEqual(["Courier"]);
  });

  it("rejects Kind specializing Agent (S21)", () => {
    const { errors } = parse(
      withPreamble(`
        agent Customer { identity: uid; property uid: String; }
        kind Bad specializes Customer { identity: bid; property bid: String; }
      `),
    );
    expect(has(errors, "S21", /Kind 'Bad' cannot specialize Agent/)).toBe(true);
  });
});

// ─── Commitment parsing ──────────────────────────────────────────────

describe("phase7 — commitment parsing", () => {
  it("parses a commitment with both endpoints and body", () => {
    const { ast, errors } = parse(
      withPreamble(`
        agent Courier { identity: cid; property cid: String; }
        agent Customer { identity: uid; property uid: String; }
        commitment DeliveryCommit
          debitor: Courier
          creditor: Customer {
            identity: dcid;
            property dcid: String;
            property description: String;
          }
      `),
    );
    expect(errors).toEqual([]);
    const d = ast!.declarations.find(
      (x) => x.name === "DeliveryCommit",
    )!;
    expect(d.kind).toBe("CommitmentDecl");
    // @ts-expect-error CommitmentDecl fields
    expect(d.debitor).toBe("Courier");
    // @ts-expect-error CommitmentDecl fields
    expect(d.creditor).toBe("Customer");
  });

  it("allows commitment specialization", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment Base
          debitor: A creditor: B { identity: x; property x: String; }
        commitment Ext specializes Base
          debitor: A creditor: B { identity: y; property y: String; }
      `),
    );
    expect(errors).toEqual([]);
  });
});

// ─── S31: commitment endpoints are agents ────────────────────────────

describe("phase7 — S31: commitment endpoints must be agents", () => {
  it("rejects Kind debitor", () => {
    const { errors } = parse(
      withPreamble(`
        kind Box { identity: b; property b: String; }
        agent Customer { identity: u; property u: String; }
        commitment Bad
          debitor: Box
          creditor: Customer { identity: c; property c: String; }
      `),
    );
    expect(
      has(errors, "S31", /debitor 'Box' must be an agent \(got Kind\)/),
    ).toBe(true);
  });

  it("rejects Kind creditor", () => {
    const { errors } = parse(
      withPreamble(`
        agent Courier { identity: c; property c: String; }
        kind Parcel { identity: p; property p: String; }
        commitment Bad
          debitor: Courier
          creditor: Parcel { identity: x; property x: String; }
      `),
    );
    expect(
      has(errors, "S31", /creditor 'Parcel' must be an agent \(got Kind\)/),
    ).toBe(true);
  });

  it("rejects Relator debitor with a clear stereotype name", () => {
    const { errors } = parse(
      withPreamble(`
        kind K { identity: k; property k: String; }
        kind L { identity: l; property l: String; }
        relator Contract mediates (K, L) { identity: cid; property cid: String; }
        agent Customer { identity: u; property u: String; }
        commitment Bad
          debitor: Contract
          creditor: Customer { identity: x; property x: String; }
      `),
    );
    expect(
      has(errors, "S31", /debitor 'Contract' must be an agent \(got Relator\)/),
    ).toBe(true);
  });

  it("reports S11 on unresolved debitor name", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        commitment Bad
          debitor: DoesNotExist
          creditor: A { identity: c; property c: String; }
      `),
    );
    expect(
      has(errors, "S11", /debitor references unknown type 'DoesNotExist'/),
    ).toBe(true);
  });

  it("accepts both endpoints when they're agents", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment OK
          debitor: A creditor: B { identity: x; property x: String; }
      `),
    );
    expect(errors.some((e) => e.code === "S31")).toBe(false);
  });
});

// ─── S24 extensions: <<commitsTo>>, <<fulfills>>, <<violates>> ───────

describe("phase7 — S24: commitsTo / fulfills / violates stereotypes", () => {
  it("accepts <<commitsTo>> between two agents", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        relation r: <<commitsTo>> from A [1] to B [1];
      `),
    );
    expect(errors.some((e) => e.code === "S24")).toBe(false);
  });

  it("rejects <<commitsTo>> with a Kind endpoint", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        kind K { identity: k; property k: String; }
        relation r: <<commitsTo>> from A [1] to K [1];
      `),
    );
    expect(
      has(errors, "S24", /<<commitsTo>>.*target must be an Agent/),
    ).toBe(true);
  });

  it("accepts <<fulfills>> from Happening to Commitment", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment C
          debitor: A creditor: B { identity: c; property c: String; }
        happening H { identity: h; property h: String; }
        relation r: <<fulfills>> from H [1] to C [1];
      `),
    );
    expect(errors.some((e) => e.code === "S24")).toBe(false);
  });

  it("accepts <<violates>> from Happening to Commitment", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment C
          debitor: A creditor: B { identity: c; property c: String; }
        happening H { identity: h; property h: String; }
        relation r: <<violates>> from H [1] to C [1];
      `),
    );
    expect(errors.some((e) => e.code === "S24")).toBe(false);
  });

  it("rejects <<fulfills>> with non-Happening source", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment C
          debitor: A creditor: B { identity: c; property c: String; }
        relation r: <<fulfills>> from A [1] to C [1];
      `),
    );
    expect(
      has(errors, "S24", /<<fulfills>>.*source must be a Happening/),
    ).toBe(true);
  });

  it("rejects <<violates>> with non-Commitment target", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        happening H { identity: h; property h: String; }
        relation r: <<violates>> from H [1] to A [1];
      `),
    );
    expect(
      has(errors, "S24", /<<violates>>.*target must be a Commitment/),
    ).toBe(true);
  });
});

// ─── Identity cascade: commitment without own identity, parent has one ─

describe("phase7 — commitment identity inheritance", () => {
  it("allows commitment without own identity when parent has one", () => {
    const { errors } = parse(
      withPreamble(`
        agent A { identity: a; property a: String; }
        agent B { identity: b; property b: String; }
        commitment Base
          debitor: A creditor: B { identity: x; property x: String; }
        commitment Ext specializes Base
          debitor: A creditor: B { }
      `),
    );
    expect(errors.some((e) => e.code === "S2")).toBe(false);
  });
});
