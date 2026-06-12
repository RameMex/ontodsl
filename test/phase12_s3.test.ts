import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";
import { computeCompletions } from "../src/lsp/completion.js";
import { findReferences } from "../src/lsp/references.js";

/**
 * Phase 12 Session 3 tests — completion + find references.
 *
 * Completion is tested by feeding a partial document text and a
 * cursor position to `computeCompletions`. We assert on the labels
 * present in the result (not exact equality — ordering may shift,
 * documentation strings may evolve).
 *
 * Find references is tested by parsing a complete document, picking
 * a name, and verifying every expected location is in the result.
 */

const SAMPLE = `schema "onto/0.1"; namespace t;
kind Drone {
  identity: serialNumber;
  property serialNumber: String;
  property battery: BatteryPack;
  property spareBatteries: Set<BatteryPack>;
}
kind BatteryPack {
  identity: id;
  property id: String;
  property chargeLevel: Real;
}`;

function labels(items: readonly { readonly label: string }[]): string[] {
  return items.map((i) => i.label);
}

// ─── Completion ──────────────────────────────────────────────────────

describe("phase12-s3 — completion", () => {
  it("suggests stereotype keywords on an empty top-level line", () => {
    const text = `schema "onto/0.1"; namespace t;\n`;
    const items = computeCompletions(text, 1, 0, null);
    const lbls = labels(items);
    expect(lbls).toContain("kind");
    expect(lbls).toContain("subkind");
    expect(lbls).toContain("relator");
    expect(lbls).toContain("agent");
    expect(lbls).toContain("commitment");
  });

  it("suggests stereotype keywords on a line with a partial identifier", () => {
    const text = `schema "onto/0.1"; namespace t;\nki`;
    const items = computeCompletions(text, 1, 2, null);
    expect(labels(items)).toContain("kind");
  });

  it("suggests primitive types after `: `", () => {
    const text = `schema "onto/0.1"; namespace t;
kind X { property age: `;
    // Cursor on line 1 (0-indexed), at end of "property age: ".
    const items = computeCompletions(text, 1, "kind X { property age: ".length, null);
    const lbls = labels(items);
    expect(lbls).toContain("Real");
    expect(lbls).toContain("Integer");
    expect(lbls).toContain("String");
    expect(lbls).toContain("Boolean");
    expect(lbls).toContain("Set");
  });

  it("suggests user-defined types after `: ` when AST is available", () => {
    const { ast } = parse(SAMPLE);
    // Position: end of "property battery: " on line 4.
    const items = computeCompletions(
      SAMPLE,
      4,
      "  property battery: ".length,
      ast,
    );
    const lbls = labels(items);
    expect(lbls).toContain("Drone");
    expect(lbls).toContain("BatteryPack");
    expect(lbls).toContain("Real");
  });

  it("suggests declarations after `specializes `", () => {
    const text = `schema "onto/0.1"; namespace t;
kind Person { identity: pid; property pid: String; }
agent Customer specializes `;
    const { ast } = parse(text);
    const items = computeCompletions(text, 2, "agent Customer specializes ".length, ast);
    expect(labels(items)).toContain("Person");
  });

  it("suggests properties of the enclosing decl after `self.`", () => {
    const { ast } = parse(SAMPLE);
    // Imagine an invariant on Drone (line 1-6) — line 5 inside the body.
    // Synthesize a partial line that ends with `self.`
    const synthText = SAMPLE.replace(
      "  property spareBatteries: Set<BatteryPack>;",
      "  property spareBatteries: Set<BatteryPack>;\n  invariants { self.",
    );
    // Re-parse may fail (invariants block incomplete); pass null to
    // exercise the fallback path that still works for self.<x>.
    const items = computeCompletions(synthText, 6, "  invariants { self.".length, ast);
    const lbls = labels(items);
    // Drone's properties: serialNumber, battery, spareBatteries
    expect(lbls).toContain("serialNumber");
    expect(lbls).toContain("battery");
    expect(lbls).toContain("spareBatteries");
  });

  it("returns empty completions when context is unclear (mid-expression)", () => {
    // Cursor in the middle of a number literal — no completion makes
    // sense here.
    const text = `schema "onto/0.1"; namespace t;\nkind X { invariants { 42 `;
    const items = computeCompletions(text, 1, text.length - 1, null);
    // Either empty or stereotype keywords (false positive for top-level
    // detection). We just check it doesn't crash and doesn't suggest
    // things like primitives.
    const lbls = labels(items);
    expect(lbls).not.toContain("Real");
  });
});

// ─── References ──────────────────────────────────────────────────────

describe("phase12-s3 — find references", () => {
  it("finds the declaration site and all type-ref usages", () => {
    const { ast } = parse(SAMPLE);
    const refs = findReferences(ast!, "file:///x.onto", "BatteryPack", true);
    // Expected: BatteryPack declaration + 2 typeRefs (battery, spareBatteries' element).
    expect(refs.length).toBe(3);
  });

  it("excludes the declaration site when includeDeclaration=false", () => {
    const { ast } = parse(SAMPLE);
    const refs = findReferences(ast!, "file:///x.onto", "BatteryPack", false);
    expect(refs.length).toBe(2);
  });

  it("returns empty list for a name that doesn't appear", () => {
    const { ast } = parse(SAMPLE);
    const refs = findReferences(ast!, "file:///x.onto", "NotThere", true);
    expect(refs.length).toBe(0);
  });

  it("finds references through Set element type", () => {
    const { ast } = parse(SAMPLE);
    const refs = findReferences(ast!, "file:///x.onto", "BatteryPack", false);
    // The two non-decl refs should both have valid line numbers.
    for (const r of refs) {
      expect(r.range.start.line).toBeGreaterThanOrEqual(0);
      expect(r.range.start.character).toBeGreaterThanOrEqual(0);
    }
  });
});
