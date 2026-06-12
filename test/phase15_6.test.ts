import { describe, it, expect } from "vitest";
import { parse, renderRust } from "../src/index.js";

const SAMPLE = `schema "onto/0.1"; namespace t;
agent Customer { identity: cid; property cid: String; }
commitment Delivery debitor: Customer creditor: Customer {
  identity: did;
  property did: String;
  property summary: String;
}
commitment ExpressDelivery specializes Delivery debitor: Customer creditor: Customer {
}`;

function gen(): string {
  const { ast, errors } = parse(SAMPLE);
  if (errors.length > 0) throw new Error(errors.map(e => e.message).join("; "));
  return renderRust(ast!).libRs;
}

describe("phase15.6 — shared types", () => {
  it("emits CommitmentState enum with three variants", () => {
    const out = gen();
    expect(out).toMatch(/pub enum CommitmentState \{/);
    expect(out).toMatch(/Pending,/);
    expect(out).toMatch(/Fulfilled,/);
    expect(out).toMatch(/Violated,/);
  });

  it("CommitmentState derives Copy + PartialEq", () => {
    const out = gen();
    expect(out).toMatch(/#\[derive\(Debug, Clone, Copy, PartialEq, Eq\)\]\s*pub enum CommitmentState/);
  });

  it("emits CommitmentTransition struct with previous_state Option", () => {
    const out = gen();
    expect(out).toMatch(/pub struct CommitmentTransition<'a, C>/);
    expect(out).toMatch(/pub previous_state: Option<CommitmentState>,/);
    expect(out).toMatch(/pub new_state: CommitmentState,/);
  });
});

describe("phase15.6 — per-commitment registry", () => {
  it("emits a typed registry for own-identity commitments", () => {
    const out = gen();
    expect(out).toMatch(/pub struct DeliveryRegistry<L>/);
    expect(out).toMatch(/where L: FnMut\(&CommitmentTransition<'_, Delivery>\)/);
  });

  it("does NOT emit a registry for inherited-identity commitments", () => {
    const out = gen();
    expect(out).not.toMatch(/ExpressDeliveryRegistry/);
  });

  it("uses BTreeMap with branded ID key", () => {
    const out = gen();
    expect(out).toMatch(/commitments: alloc::collections::BTreeMap<DeliveryId, Delivery>,/);
    expect(out).toMatch(/states: alloc::collections::BTreeMap<DeliveryId, CommitmentState>,/);
  });

  it("provides new() with no listener", () => {
    const out = gen();
    expect(out).toMatch(/pub fn new\(\) -> Self/);
    expect(out).toMatch(/listener: None,/);
  });

  it("provides with_listener() constructor", () => {
    const out = gen();
    expect(out).toMatch(/pub fn with_listener\(listener: L\) -> Self/);
  });
});

describe("phase15.6 — register", () => {
  it("rejects double registration", () => {
    const out = gen();
    expect(out).toMatch(/if self\.commitments\.contains_key\(&id\) \{/);
    expect(out).toMatch(/return Err\("\[DeliveryRegistry\] commitment already registered"\)/);
  });

  it("inserts state Pending on register", () => {
    const out = gen();
    expect(out).toMatch(/self\.states\.insert\(id\.clone\(\), CommitmentState::Pending\);/);
  });

  it("fires listener with previous_state=None on register", () => {
    const out = gen();
    // Look for the register block — first listener call must have previous_state: None.
    const registerBlock = out.match(/pub fn register[\s\S]*?Ok\(\(\)\)\s*\}/);
    expect(registerBlock).not.toBeNull();
    expect(registerBlock![0]).toMatch(/previous_state: None,/);
  });
});

describe("phase15.6 — transitions", () => {
  it("fulfill delegates to transition with Fulfilled target", () => {
    const out = gen();
    expect(out).toMatch(/pub fn fulfill\(&mut self, id: &DeliveryId\) -> Result<\(\), &'static str>/);
    expect(out).toMatch(/self\.transition\(id, CommitmentState::Fulfilled\)/);
  });

  it("violate delegates to transition with Violated target", () => {
    const out = gen();
    expect(out).toMatch(/pub fn violate\(&mut self, id: &DeliveryId\) -> Result<\(\), &'static str>/);
    expect(out).toMatch(/self\.transition\(id, CommitmentState::Violated\)/);
  });

  it("transition rejects unknown id", () => {
    const out = gen();
    expect(out).toMatch(/None => Err\("\[DeliveryRegistry\] commitment not registered"\)/);
  });

  it("transition rejects terminal states", () => {
    const out = gen();
    expect(out).toMatch(/Some\(CommitmentState::Fulfilled\) \| Some\(CommitmentState::Violated\)/);
    expect(out).toMatch(/return Err\("\[DeliveryRegistry\] commitment in terminal state"\)|"\[DeliveryRegistry\] commitment in terminal state"/);
  });

  it("transition fires listener with previous_state=Some(Pending)", () => {
    const out = gen();
    const transitionBlock = out.match(/fn transition[\s\S]*?(?=^})/m);
    expect(transitionBlock).not.toBeNull();
    expect(transitionBlock![0]).toMatch(/previous_state: Some\(CommitmentState::Pending\),/);
    expect(transitionBlock![0]).toMatch(/new_state: target,/);
  });
});

describe("phase15.6 — query", () => {
  it("get_state returns Option<CommitmentState>", () => {
    const out = gen();
    expect(out).toMatch(/pub fn get_state\(&self, id: &DeliveryId\) -> Option<CommitmentState>/);
    expect(out).toMatch(/self\.states\.get\(id\)\.copied\(\)/);
  });
});

describe("phase15.6 — no commitments", () => {
  it("emits nothing when there are no own-identity commitments", () => {
    const { ast } = parse(`schema "onto/0.1"; namespace t;
kind X { identity: id; property id: String; }`);
    const out = renderRust(ast!).libRs;
    expect(out).not.toMatch(/CommitmentState/);
    expect(out).not.toMatch(/CommitmentTransition/);
  });
});
