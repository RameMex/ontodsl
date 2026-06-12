import { describe, it, expect } from "vitest";
import { parse, buildReactFlowGraph } from "../src/index.js";

/**
 * Phase 9.5 — buildReactFlowGraph data builder tests.
 *
 * We test the SHAPE of the emitted graph, not any rendering. The
 * builder has no React deps; the consumer is responsible for layout
 * and component wiring.
 *
 * Coverage:
 *   - Node count matches declaration count (minus RelationDecls)
 *   - Each node carries the expected category + stereotype label
 *   - Properties and header slots populate correctly
 *   - Identity property surfaced separately
 *   - Inheritance edges emitted for `specializes` chains
 *   - Relation edges emitted for explicit `relation` declarations
 *   - Commitment debitor/creditor → implicit edges
 *   - Use-case actors/trigger/success/failure → implicit edges
 *   - Edge IDs are deterministic across runs
 *   - Dangling refs (parent doesn't exist) silently skipped
 */

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

function graphOf(body: string) {
  const { ast, errors } = parse(withPreamble(body));
  if (errors.length > 0) {
    throw new Error(
      `unexpected parse errors:\n${errors.map((e) => `  ${e.code}: ${e.message}`).join("\n")}`,
    );
  }
  return buildReactFlowGraph(ast!);
}

// ─── Node shape ───────────────────────────────────────────────────────

describe("phase9.5 — node shape", () => {
  it("emits one node per non-relation declaration", () => {
    const g = graphOf(`
      kind K { identity: i; property i: String; }
      agent A { identity: a; property a: String; }
      happening H { identity: h; property h: String; }
    `);
    expect(g.nodes.length).toBe(3);
    expect(g.nodes.map((n) => n.id).sort()).toEqual(["A", "H", "K"]);
  });

  it("does NOT emit nodes for RelationDecl", () => {
    const g = graphOf(`
      kind A { identity: a; property a: String; }
      kind B { identity: b; property b: String; }
      relation r: <<componentOf>> from A [1] to B [1];
    `);
    expect(g.nodes.length).toBe(2);
    expect(g.nodes.find((n) => n.id === "r")).toBeUndefined();
  });

  it("assigns the right category per stereotype", () => {
    const g = graphOf(`
      kind K { identity: i; property i: String; }
      agent A { identity: a; property a: String; }
      happening H { identity: h; property h: String; }
      relator R mediates (K, A) { identity: r; property r: String; }
    `);
    const cat = (id: string) => g.nodes.find((n) => n.id === id)!.data.category;
    expect(cat("K")).toBe("endurant");
    expect(cat("A")).toBe("agent");
    expect(cat("H")).toBe("perdurant");
    expect(cat("R")).toBe("relator");
  });

  it("populates properties with rendered TypeRef", () => {
    const g = graphOf(`
      kind A { identity: aid; property aid: String; }
      kind B {
        identity: bid;
        property bid: String;
        property age: Integer;
        property xs: Set<A>;
      }
    `);
    const b = g.nodes.find((n) => n.id === "B")!;
    expect(b.data.properties).toEqual([
      { name: "bid", type: "String" },
      { name: "age", type: "Integer" },
      { name: "xs", type: "Set<A>" },
    ]);
  });

  it("populates identityProperty when supplied", () => {
    const g = graphOf(`kind K { identity: kid; property kid: String; }`);
    const k = g.nodes.find((n) => n.id === "K")!;
    expect(k.data.identityProperty).toBe("kid");
  });

  it("identityProperty is null for non-supplying decls", () => {
    const g = graphOf(`category C { property tag: String; }`);
    const c = g.nodes.find((n) => n.id === "C")!;
    expect(c.data.identityProperty).toBeNull();
  });

  it("counts invariants", () => {
    const g = graphOf(`
      kind K {
        identity: i;
        property i: String;
        property n: Integer;
        invariants {
          self.n >= 0;
          self.n <= 100;
        }
      }
    `);
    expect(g.nodes.find((n) => n.id === "K")!.data.invariantCount).toBe(2);
  });

  it("default position is { x: 0, y: 0 } — caller does layout", () => {
    const g = graphOf(`kind K { identity: i; property i: String; }`);
    expect(g.nodes[0]!.position).toEqual({ x: 0, y: 0 });
  });
});

// ─── Header slots ─────────────────────────────────────────────────────

describe("phase9.5 — header slots", () => {
  it("relator: mediates", () => {
    const g = graphOf(`
      kind A { identity: a; property a: String; }
      kind B { identity: b; property b: String; }
      relator R mediates (A, B) { identity: r; property r: String; }
    `);
    const r = g.nodes.find((n) => n.id === "R")!;
    expect(r.data.headerSlots).toContainEqual({
      label: "mediates",
      value: "A, B",
    });
  });

  it("commitment: debitor + creditor", () => {
    const g = graphOf(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment C
        debitor: A creditor: B {
          identity: cid; property cid: String;
        }
    `);
    const c = g.nodes.find((n) => n.id === "C")!;
    const labels = c.data.headerSlots.map((s) => s.label);
    expect(labels).toContain("debitor");
    expect(labels).toContain("creditor");
  });

  it("commitment with predicate: predicate slot included", () => {
    const g = graphOf(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment C
        debitor: A creditor: B {
          identity: cid;
          property cid: String;
          property name: String;
          predicate: self.name <> null;
        }
    `);
    const c = g.nodes.find((n) => n.id === "C")!;
    const pred = c.data.headerSlots.find((s) => s.label === "predicate");
    expect(pred).toBeDefined();
    expect(pred!.value).toMatch(/self\.name/);
  });

  it("use-case: actors + trigger + success + failure", () => {
    const g = graphOf(`
      agent A { identity: a; property a: String; }
      happening T { identity: t; property t: String; }
      commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
      use-case UC actors: (A) trigger: T success: OK failure: OK
        { identity: ucid; property ucid: String; }
    `);
    const uc = g.nodes.find((n) => n.id === "UC")!;
    const slots = Object.fromEntries(
      uc.data.headerSlots.map((s) => [s.label, s.value]),
    );
    expect(slots.actors).toBe("A");
    expect(slots.trigger).toBe("T");
    expect(slots.success).toBe("OK");
    expect(slots.failure).toBe("OK");
  });
});

// ─── Edges ────────────────────────────────────────────────────────────

describe("phase9.5 — inheritance edges", () => {
  it("emits Parent → Child inheritance edge for `specializes`", () => {
    const g = graphOf(`
      kind Person { identity: p; property p: String; }
      agent Customer specializes Person { }
    `);
    const inh = g.edges.filter((e) => e.data.category === "inheritance");
    expect(inh.length).toBe(1);
    expect(inh[0]!.source).toBe("Person");
    expect(inh[0]!.target).toBe("Customer");
    expect(inh[0]!.label).toBe("specializes");
  });

  it("does NOT emit dangling inheritance edges", () => {
    const { ast } = parse(
      withPreamble(
        `kind K specializes Ghost { identity: i; property i: String; }`,
      ),
    );
    const g = buildReactFlowGraph(ast!);
    const inh = g.edges.filter((e) => e.data.category === "inheritance");
    expect(inh.length).toBe(0);
  });
});

describe("phase9.5 — relation edges", () => {
  it("emits a relation edge with stereotype label and multiplicities", () => {
    const g = graphOf(`
      kind A { identity: a; property a: String; }
      kind B { identity: b; property b: String; }
      relation r: <<componentOf>> from A [1..*] to B [1];
    `);
    const rels = g.edges.filter((e) => e.data.category === "relation");
    expect(rels.length).toBe(1);
    expect(rels[0]!.label).toBe("componentOf");
    expect(rels[0]!.data.sourceMultiplicity).toBe("1..*");
    expect(rels[0]!.data.targetMultiplicity).toBe("1");
  });

  it("skips relations whose endpoints don't resolve", () => {
    const { ast } = parse(
      withPreamble(`
        kind A { identity: a; property a: String; }
        relation r: <<componentOf>> from A [1] to Ghost [1];
      `),
    );
    const g = buildReactFlowGraph(ast!);
    const rels = g.edges.filter((e) => e.data.category === "relation");
    expect(rels.length).toBe(0);
  });
});

describe("phase9.5 — commitment endpoint edges", () => {
  it("emits debitor and creditor edges", () => {
    const g = graphOf(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment C debitor: A creditor: B { identity: c; property c: String; }
    `);
    const ce = g.edges.filter((e) => e.data.category === "commitment_endpoint");
    expect(ce.length).toBe(2);
    const labels = ce.map((e) => e.label).sort();
    expect(labels).toEqual(["creditor", "debitor"]);
    const debitor = ce.find((e) => e.label === "debitor")!;
    expect(debitor.source).toBe("A");
    expect(debitor.target).toBe("C");
  });
});

describe("phase9.5 — use-case wiring edges", () => {
  it("emits actor + trigger + success + failure edges", () => {
    const g = graphOf(`
      agent A { identity: a; property a: String; }
      happening T { identity: t; property t: String; }
      commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
      commitment KO debitor: A creditor: A { identity: koid; property koid: String; }
      use-case UC actors: (A) trigger: T success: OK failure: KO
        { identity: ucid; property ucid: String; }
    `);
    const wiring = g.edges.filter((e) => e.data.category === "usecase_wiring");
    const labels = wiring.map((e) => e.label).sort();
    expect(labels).toEqual(["actor", "failure", "success", "trigger"]);
  });

  it("collapses identical success/failure into two edges with distinct ids", () => {
    // The builder doesn't collapse — Mermaid's renderer did. React Flow
    // renders both edges with their own labels, which is correct for
    // an interactive viz where they may animate independently.
    const g = graphOf(`
      agent A { identity: a; property a: String; }
      happening T { identity: t; property t: String; }
      commitment C debitor: A creditor: A { identity: c; property c: String; }
      use-case UC actors: (A) trigger: T success: C failure: C
        { identity: ucid; property ucid: String; }
    `);
    const wiring = g.edges.filter(
      (e) => e.target === "C" && e.source === "UC",
    );
    expect(wiring.length).toBe(2);
    // The IDs must differ so React Flow doesn't dedupe them.
    expect(wiring[0]!.id).not.toBe(wiring[1]!.id);
  });
});

// ─── Determinism ─────────────────────────────────────────────────────

describe("phase9.5 — determinism", () => {
  it("two calls with the same AST produce identical graphs", () => {
    const body = `
      kind A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      relation r: <<componentOf>> from A [1] to B [1];
    `;
    const g1 = graphOf(body);
    const g2 = graphOf(body);
    expect(JSON.stringify(g1)).toBe(JSON.stringify(g2));
  });
});

// ─── Whole-file integration ──────────────────────────────────────────

describe("phase9.5 — drone-style integration", () => {
  it("handles a multi-stereotype file with the expected edge mix", () => {
    const g = graphOf(`
      category Phys { property weight: Real; }
      kind Drone specializes Phys { identity: did; property did: String; }
      kind Pkg specializes Phys { identity: pid; property pid: String; }
      relator Contract mediates (Drone, Pkg) { identity: cid; property cid: String; }
      role Pilot mediated-by Contract of Drone { }
      relation owns: <<componentOf>> from Drone [1] to Pkg [0..*];
      happening Trip { identity: tid; property tid: String; }
      agent Customer { identity: u; property u: String; }
      commitment Deliver debitor: Customer creditor: Customer
        { identity: dcid; property dcid: String; }
      use-case UC actors: (Customer) trigger: Trip
        success: Deliver failure: Deliver
        { identity: ucid; property ucid: String; }
    `);

    const counts = {
      inheritance: g.edges.filter((e) => e.data.category === "inheritance").length,
      relation: g.edges.filter((e) => e.data.category === "relation").length,
      commitment_endpoint: g.edges.filter(
        (e) => e.data.category === "commitment_endpoint",
      ).length,
      usecase_wiring: g.edges.filter(
        (e) => e.data.category === "usecase_wiring",
      ).length,
    };

    // Drone, Pkg specialize Phys → 2 inheritance edges.
    expect(counts.inheritance).toBe(2);
    // 1 explicit relation.
    expect(counts.relation).toBe(1);
    // Commitment with both endpoints = Customer → 2 (debitor + creditor).
    expect(counts.commitment_endpoint).toBe(2);
    // UC: 1 actor + 1 trigger + 1 success + 1 failure = 4.
    expect(counts.usecase_wiring).toBe(4);
  });
});
