import { describe, it, expect } from "vitest";
import {
  parse,
  renderMermaid,
  renderTypeDiagram,
  renderRelationDiagram,
  renderUseCaseDiagrams,
} from "../src/index.js";

/**
 * Phase 9: visualization tests.
 *
 * We verify the STRUCTURE of the emitted Mermaid (not the rendered
 * pixels — that's a downstream concern). Each assertion pins a
 * specific contract: a class appears for each declaration, an
 * inheritance arrow appears for each specializes, an edge appears
 * for each relation, etc.
 *
 * The tests are intentionally snapshot-free — they assert on
 * structural facts about the output so they don't brittle-break
 * when we tweak formatting. Mermaid syntax can evolve; our job is
 * to ensure the content is right.
 */

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

function astOf(body: string) {
  const { ast, errors } = parse(withPreamble(body));
  if (errors.length > 0) {
    throw new Error(
      `unexpected parse errors:\n${errors.map((e) => `  ${e.code}: ${e.message}`).join("\n")}`,
    );
  }
  return ast!;
}

// ─── Type diagram ─────────────────────────────────────────────────────

describe("phase9 — type diagram", () => {
  it("starts with `classDiagram` header", () => {
    const ast = astOf(`kind K { identity: i; property i: String; }`);
    const out = renderTypeDiagram(ast);
    expect(out.split("\n")[0]).toBe("classDiagram");
  });

  it("emits one class node per declaration", () => {
    const ast = astOf(`
      kind K { identity: i; property i: String; }
      agent A { identity: a; property a: String; }
      happening H { identity: h; property h: String; }
    `);
    const out = renderTypeDiagram(ast);
    expect(out).toMatch(/class K \{/);
    expect(out).toMatch(/class A \{/);
    expect(out).toMatch(/class H \{/);
  });

  it("attaches the stereotype to each class", () => {
    const ast = astOf(`
      kind K { identity: i; property i: String; }
      agent A { identity: a; property a: String; }
      happening H { identity: h; property h: String; }
    `);
    const out = renderTypeDiagram(ast);
    expect(out).toMatch(/class K \{[\s\S]*?<<Kind>>[\s\S]*?\}/);
    expect(out).toMatch(/class A \{[\s\S]*?<<Agent>>[\s\S]*?\}/);
    expect(out).toMatch(/class H \{[\s\S]*?<<Happening>>[\s\S]*?\}/);
  });

  it("renders properties with their types", () => {
    const ast = astOf(`
      kind K {
        identity: i;
        property i: String;
        property n: Integer;
        property r: Real;
      }
    `);
    const out = renderTypeDiagram(ast);
    expect(out).toMatch(/\+i: String/);
    expect(out).toMatch(/\+n: Integer/);
    expect(out).toMatch(/\+r: Real/);
  });

  it("renders Set<T> properties with tilde syntax", () => {
    const ast = astOf(`
      kind X { identity: xid; property xid: String; }
      kind Y {
        identity: yid;
        property yid: String;
        property xs: Set<X>;
      }
    `);
    const out = renderTypeDiagram(ast);
    // Mermaid uses ~...~ for generic syntax.
    expect(out).toMatch(/\+xs: Set~X~/);
  });

  it("emits specialization arrows with UML syntax (Parent <|-- Child)", () => {
    const ast = astOf(`
      kind Person { identity: p; property p: String; }
      agent Customer specializes Person { }
    `);
    const out = renderTypeDiagram(ast);
    expect(out).toMatch(/Person <\|-- Customer/);
  });

  it("renders commitment header slots as pseudo-members", () => {
    const ast = astOf(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment C
        debitor: A creditor: B { identity: c; property c: String; }
    `);
    const out = renderTypeDiagram(ast);
    expect(out).toMatch(/\$debitor: A/);
    expect(out).toMatch(/\$creditor: B/);
  });

  it("renders use-case header slots as pseudo-members", () => {
    const ast = astOf(`
      agent A { identity: a; property a: String; }
      happening H { identity: h; property h: String; }
      commitment OK
        debitor: A creditor: A { identity: okid; property okid: String; }
      use-case UC
        actors: (A) trigger: H success: OK failure: OK
        { identity: ucid; property ucid: String; }
    `);
    const out = renderTypeDiagram(ast);
    expect(out).toMatch(/\$actors: A/);
    expect(out).toMatch(/\$trigger: H/);
    expect(out).toMatch(/\$success: OK/);
    expect(out).toMatch(/\$failure: OK/);
  });

  it("does not emit arrows for unresolved specializes", () => {
    // This AST is syntactically valid but semantically broken (S21).
    // The validator complains; the viz module's job is to not emit a
    // dangling arrow that would confuse the diagram.
    const { ast } = parse(
      withPreamble(
        `kind K specializes NoSuchType { identity: k; property k: String; }`,
      ),
    );
    const out = renderTypeDiagram(ast!);
    expect(out).not.toMatch(/NoSuchType <\|-- K/);
  });
});

// ─── Relation diagram ────────────────────────────────────────────────

describe("phase9 — relation diagram", () => {
  it("starts with `flowchart` header", () => {
    const ast = astOf(`kind K { identity: i; property i: String; }`);
    const out = renderRelationDiagram(ast);
    expect(out.split("\n")[0]).toMatch(/^flowchart/);
  });

  it("emits a node for each non-relation declaration", () => {
    const ast = astOf(`
      kind K { identity: i; property i: String; }
      agent A { identity: a; property a: String; }
    `);
    const out = renderRelationDiagram(ast);
    expect(out).toMatch(/K\[/);
    expect(out).toMatch(/A\[/);
  });

  it("uses stadium shape for happenings", () => {
    const ast = astOf(`happening H { identity: h; property h: String; }`);
    const out = renderRelationDiagram(ast);
    expect(out).toMatch(/H\(\["H<br\/>«Happening»"\]\)/);
  });

  it("uses hexagon shape for relators", () => {
    const ast = astOf(`
      kind A { identity: a; property a: String; }
      kind B { identity: b; property b: String; }
      relator R mediates (A, B) { identity: r; property r: String; }
    `);
    const out = renderRelationDiagram(ast);
    expect(out).toMatch(/R\{\{"R<br\/>«Relator»"\}\}/);
  });

  it("renders explicit relations as labelled arrows", () => {
    const ast = astOf(`
      kind Part { identity: p; property p: String; }
      kind Whole { identity: w; property w: String; }
      relation r: <<componentOf>> from Part [1] to Whole [1];
    `);
    const out = renderRelationDiagram(ast);
    expect(out).toMatch(/Part -- "«componentOf»" --> Whole/);
  });

  it("renders commitment endpoints as dashed debitor/creditor edges", () => {
    const ast = astOf(`
      agent A { identity: a; property a: String; }
      agent B { identity: b; property b: String; }
      commitment C
        debitor: A creditor: B { identity: c; property c: String; }
    `);
    const out = renderRelationDiagram(ast);
    expect(out).toMatch(/A -\. debitor \.-> C/);
    expect(out).toMatch(/B -\. creditor \.-> C/);
  });

  it("renders use-case trigger and outcomes as labelled edges", () => {
    const ast = astOf(`
      agent A { identity: a; property a: String; }
      happening T { identity: t; property t: String; }
      commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
      commitment KO debitor: A creditor: A { identity: koid; property koid: String; }
      use-case UC actors: (A) trigger: T success: OK failure: KO
        { identity: ucid; property ucid: String; }
    `);
    const out = renderRelationDiagram(ast);
    expect(out).toMatch(/A -\. actor \.-> UC/);
    expect(out).toMatch(/T ==> UC/);
    expect(out).toMatch(/UC -- success --> OK/);
    expect(out).toMatch(/UC -- failure --> KO/);
  });
});

// ─── Use-case diagrams ───────────────────────────────────────────────

describe("phase9 — use-case diagrams", () => {
  it("returns empty string when file has no use-cases", () => {
    const ast = astOf(`kind K { identity: k; property k: String; }`);
    expect(renderUseCaseDiagrams(ast)).toBe("");
  });

  it("renders a single use-case with all its connections", () => {
    const ast = astOf(`
      agent A { identity: a; property a: String; }
      happening T { identity: t; property t: String; }
      commitment OK debitor: A creditor: A { identity: okid; property okid: String; }
      commitment KO debitor: A creditor: A { identity: koid; property koid: String; }
      use-case UC actors: (A) trigger: T success: OK failure: KO
        { identity: ucid; property ucid: String; }
    `);
    const out = renderUseCaseDiagrams(ast);
    expect(out).toMatch(/%% use-case: UC/);
    expect(out).toMatch(/A -\. actor \.-> UC/);
    expect(out).toMatch(/T ==> UC/);
    expect(out).toMatch(/UC -- success --> OK/);
    expect(out).toMatch(/UC -- failure --> KO/);
  });

  it("collapses identical success and failure into a single arrow", () => {
    const ast = astOf(`
      agent A { identity: a; property a: String; }
      happening T { identity: t; property t: String; }
      commitment C debitor: A creditor: A { identity: c; property c: String; }
      use-case UC actors: (A) trigger: T success: C failure: C
        { identity: ucid; property ucid: String; }
    `);
    const out = renderUseCaseDiagrams(ast);
    expect(out).toMatch(/UC -- "success \/ failure" --> C/);
    expect(out).not.toMatch(/UC -- success --> C/);
    expect(out).not.toMatch(/UC -- failure --> C/);
  });

  it("handles empty actor lists with a placeholder", () => {
    const ast = astOf(`
      agent A { identity: a; property a: String; }
      happening T { identity: t; property t: String; }
      commitment C debitor: A creditor: A { identity: c; property c: String; }
      use-case UC actors: () trigger: T success: C failure: C
        { identity: ucid; property ucid: String; }
    `);
    const out = renderUseCaseDiagrams(ast);
    expect(out).toMatch(/NoActors/);
  });

  it("emits one diagram per use-case, separated by blank lines", () => {
    const ast = astOf(`
      agent A { identity: a; property a: String; }
      happening T { identity: t; property t: String; }
      commitment C debitor: A creditor: A { identity: c; property c: String; }
      use-case UC1 actors: (A) trigger: T success: C failure: C
        { identity: u1; property u1: String; }
      use-case UC2 actors: (A) trigger: T success: C failure: C
        { identity: u2; property u2: String; }
    `);
    const out = renderUseCaseDiagrams(ast);
    const commentCount = (out.match(/%% use-case:/g) ?? []).length;
    expect(commentCount).toBe(2);
    expect(out).toMatch(/%% use-case: UC1/);
    expect(out).toMatch(/%% use-case: UC2/);
  });
});

// ─── Dispatcher ──────────────────────────────────────────────────────

describe("phase9 — renderMermaid dispatcher", () => {
  it("dispatches to the right renderer per `kind`", () => {
    const ast = astOf(`
      kind K { identity: i; property i: String; }
    `);
    expect(renderMermaid(ast, { kind: "types" })).toMatch(/^classDiagram/);
    expect(renderMermaid(ast, { kind: "relations" })).toMatch(/^flowchart/);
    expect(renderMermaid(ast, { kind: "usecases" })).toBe("");
  });
});
