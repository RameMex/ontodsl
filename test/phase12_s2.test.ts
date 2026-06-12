import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";
import {
  resolveAtPosition,
  findDeclaration,
} from "../src/lsp/positionResolver.js";
import { formatHover } from "../src/lsp/hover.js";
import { findDefinitionLocation } from "../src/lsp/definition.js";

/**
 * Phase 12 Session 2 tests — hover + go-to-definition.
 *
 * We test the resolver, hover formatter, and definition finder
 * directly. Wiring into the LSP server is mechanical (already exercised
 * via Session 1's fake-Connection harness for diagnostics; the same
 * harness could test hover, but the helpers below are the load-bearing
 * parts).
 *
 * Coordinates are 0-indexed, LSP convention.
 */

const SAMPLE = `schema "onto/0.1"; namespace t;
kind Drone {
  identity: serialNumber;
  property serialNumber: String;
  property battery: BatteryPack;
}
kind BatteryPack {
  identity: id;
  property id: String;
  property chargeLevel: Real;
}`;

function parseSample() {
  const { ast, errors } = parse(SAMPLE);
  if (errors.length > 0) {
    throw new Error(
      `unexpected errors: ${errors.map((e) => e.message).join("; ")}`,
    );
  }
  return ast!;
}

describe("phase12-s2 — position resolver", () => {
  it("resolves a NamedType reference to typeRef usage", () => {
    const ast = parseSample();
    // Line 5 (0-indexed 4): "  property battery: BatteryPack;"
    //                             0         1         2         3
    //                             0123456789012345678901234567890
    // BatteryPack starts around column 20.
    const ref = resolveAtPosition(ast, 4, 25);
    expect(ref).not.toBeNull();
    expect(ref!.name).toBe("BatteryPack");
    expect(ref!.usageKind).toBe("typeRef");
  });

  it("returns null on whitespace / no identifier", () => {
    const ast = parseSample();
    // Line 0 col 0 — schema keyword. Schema doesn't yield a hover
    // target in our model.
    const ref = resolveAtPosition(ast, 0, 0);
    // Could either be null (preferred) or a "decl" hit on whatever
    // declaration spans line 0. Schema/namespace are top-level
    // metadata, not declarations, so null is correct.
    expect(ref).toBeNull();
  });

  it("resolves a property name to property usage", () => {
    const ast = parseSample();
    // Line 9 (0-indexed): "  property chargeLevel: Real;"
    // chargeLevel starts around column 11. Position cursor inside it.
    const ref = resolveAtPosition(ast, 9, 14);
    expect(ref).not.toBeNull();
    expect(ref!.name).toBe("chargeLevel");
    expect(ref!.usageKind).toBe("property");
  });

  it("resolves the declaration name to decl usage", () => {
    const ast = parseSample();
    // Line 1 (0-indexed): "kind Drone {"
    // Anywhere on line 1 not in a property → decl hit.
    const ref = resolveAtPosition(ast, 1, 7);
    expect(ref).not.toBeNull();
    expect(ref!.usageKind).toBe("decl");
    expect(ref!.name).toBe("Drone");
  });
});

describe("phase12-s2 — findDeclaration", () => {
  it("finds an existing declaration by name", () => {
    const ast = parseSample();
    const d = findDeclaration(ast, "BatteryPack");
    expect(d).not.toBeNull();
    expect(d!.name).toBe("BatteryPack");
  });

  it("returns null for unknown name", () => {
    const ast = parseSample();
    const d = findDeclaration(ast, "NotAThing");
    expect(d).toBeNull();
  });
});

describe("phase12-s2 — hover formatter", () => {
  it("produces markdown for a typeRef hit, including stereotype + own properties", () => {
    const ast = parseSample();
    const ref = resolveAtPosition(ast, 4, 25); // BatteryPack
    expect(ref).not.toBeNull();
    const md = formatHover(ast, ref!);
    expect(md).toContain("**BatteryPack**");
    expect(md).toContain("«Kind»");
    expect(md).toContain("Properties");
    expect(md).toContain("chargeLevel");
    expect(md).toContain("Real");
    // identity property is marked
    expect(md).toContain("(identity)");
  });

  it("shows extends clause when the decl has parents", () => {
    const ast = parse(`schema "onto/0.1"; namespace t;
kind Person { identity: pid; property pid: String; }
agent Customer specializes Person { }`).ast!;
    const ref = resolveAtPosition(ast, 2, 7); // Customer
    const md = formatHover(ast, ref!);
    expect(md).toContain("**Customer**");
    expect(md).toContain("«Agent»");
    expect(md).toContain("extends Person");
  });

  it("shows event/query/invariant counts", () => {
    const ast = parse(`schema "onto/0.1"; namespace t;
kind X {
  identity: id;
  property id: String;
  property n: Integer;
  invariants { self.n >= 0; self.n <= 100; }
  event tick() { pre: true; post: true; modifies: self.id; }
}`).ast!;
    const ref = resolveAtPosition(ast, 1, 6); // X
    const md = formatHover(ast, ref!);
    expect(md).toContain("1 event");
    expect(md).toContain("2 invariants");
  });

  it("formats a property hover with type and owner", () => {
    const ast = parseSample();
    const ref = resolveAtPosition(ast, 9, 14); // chargeLevel
    const md = formatHover(ast, ref!);
    expect(md).toContain("**chargeLevel**");
    expect(md).toContain("Real");
    expect(md).toContain("BatteryPack");
  });

  it("returns 'unresolved' for a typeRef pointing to nonexistent decl", () => {
    // We can't easily construct a ref to a nonexistent decl through
    // resolveAtPosition (the AST won't have a NamedType for an
    // undeclared name unless it's actually written somewhere). Instead,
    // hand-roll a ResolvedRef and verify formatHover handles it.
    const ast = parseSample();
    const md = formatHover(ast, {
      name: "GhostType",
      usageKind: "typeRef",
      range: { start: { line: 0, character: 0 }, end: { line: 0, character: 9 } },
    });
    expect(md).toContain("GhostType");
    expect(md).toContain("unresolved");
  });
});

describe("phase12-s2 — definition", () => {
  it("returns the declaration's range for a typeRef hit", () => {
    const ast = parseSample();
    const ref = resolveAtPosition(ast, 4, 25); // BatteryPack
    const def = findDefinitionLocation(ast, "file:///x.onto", ref!);
    expect(def).not.toBeNull();
    expect(def!.uri).toBe("file:///x.onto");
    // BatteryPack declaration starts at line 6 (0-indexed) in the sample.
    expect(def!.range.start.line).toBe(6);
  });

  it("returns the property's range for a property hit", () => {
    const ast = parseSample();
    const ref = resolveAtPosition(ast, 9, 14); // chargeLevel
    const def = findDefinitionLocation(ast, "file:///x.onto", ref!);
    expect(def).not.toBeNull();
    // chargeLevel declared on line 9 (0-indexed).
    expect(def!.range.start.line).toBe(9);
  });

  it("returns null for a typeRef pointing to nonexistent decl", () => {
    const ast = parseSample();
    const def = findDefinitionLocation(ast, "file:///x.onto", {
      name: "GhostType",
      usageKind: "typeRef",
      range: { start: { line: 0, character: 0 }, end: { line: 0, character: 9 } },
    });
    expect(def).toBeNull();
  });

  it("returns the same decl's range for a decl hit (peek-definition use case)", () => {
    const ast = parseSample();
    const ref = resolveAtPosition(ast, 1, 7); // Drone
    const def = findDefinitionLocation(ast, "file:///x.onto", ref!);
    expect(def).not.toBeNull();
    // Drone declared at line 1 (0-indexed).
    expect(def!.range.start.line).toBe(1);
  });
});
