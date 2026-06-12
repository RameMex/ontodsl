import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";
import {
  collectSemanticTokens,
  encodeSemanticTokens,
  TOKEN_TYPES,
  TOKEN_MODIFIERS,
} from "../src/lsp/semanticTokens.js";

/**
 * Phase 14 — semantic token tests.
 *
 * We test the collector and the encoder separately. The collector
 * walks the AST and produces a list of typed tokens; the encoder
 * converts that list into the LSP-mandated relative-encoded number
 * array.
 *
 * We don't test wiring into the LSP server here — that's the same
 * pattern already exercised in earlier phase tests (the server
 * delegates to these pure functions).
 */

const SAMPLE = `schema "onto/0.1"; namespace t;
kind Drone {
  identity: serialNumber;
  property serialNumber: String;
  property battery: BatteryPack;
  property spareBatteries: Set<BatteryPack>;
  event swapBattery(newBattery: BatteryPack) {
    pre: true;
    post: true;
    modifies: self.battery;
  }
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

describe("phase14 — semantic token collection", () => {
  it("emits a class token for every NamedType reference", () => {
    const ast = parseSample();
    const tokens = collectSemanticTokens(ast);
    const classTokens = tokens.filter(
      (t) => t.tokenType === TOKEN_TYPES.indexOf("class"),
    );
    // BatteryPack appears 3x as a NamedType: in `property battery:
    // BatteryPack`, in `Set<BatteryPack>`, and in the event
    // parameter `newBattery: BatteryPack`.
    expect(classTokens.length).toBe(3);
    // Lengths should equal "BatteryPack".length.
    for (const t of classTokens) {
      expect(t.length).toBe("BatteryPack".length);
    }
  });

  it("emits a parameter token for each event parameter", () => {
    const ast = parseSample();
    const tokens = collectSemanticTokens(ast);
    const paramTokens = tokens.filter(
      (t) => t.tokenType === TOKEN_TYPES.indexOf("parameter"),
    );
    // 1 parameter: newBattery on swapBattery.
    expect(paramTokens.length).toBe(1);
    expect(paramTokens[0]!.length).toBe("newBattery".length);
    // Modifier should have the "declaration" bit set.
    const declMask = 1 << TOKEN_MODIFIERS.indexOf("declaration");
    expect(paramTokens[0]!.tokenModifiers & declMask).toBe(declMask);
  });

  it("does not emit tokens for primitive types (String, Real)", () => {
    const ast = parseSample();
    const tokens = collectSemanticTokens(ast);
    // No token should have length matching primitive lengths anchored
    // at the right line. Easier check: the AST has no NamedType
    // pointing to "String" or "Real" — those are PrimitiveType. So
    // no class token should land at a column that corresponds to
    // a primitive. We just verify by counting: 3 BatteryPack refs,
    // no others, total class tokens = 3.
    const classTokens = tokens.filter(
      (t) => t.tokenType === TOKEN_TYPES.indexOf("class"),
    );
    expect(classTokens.length).toBe(3);
  });

  it("returns tokens sorted by (line, char)", () => {
    const ast = parseSample();
    const tokens = collectSemanticTokens(ast);
    for (let i = 1; i < tokens.length; i += 1) {
      const prev = tokens[i - 1]!;
      const cur = tokens[i]!;
      const isOrdered =
        cur.line > prev.line ||
        (cur.line === prev.line && cur.startChar >= prev.startChar);
      expect(isOrdered).toBe(true);
    }
  });

  it("returns empty array for an AST with no decls of interest", () => {
    const { ast } = parse(`schema "onto/0.1"; namespace t;`);
    expect(collectSemanticTokens(ast!)).toEqual([]);
  });
});

describe("phase14 — semantic token encoding", () => {
  it("encodes single token as [0, char, len, type, mods]", () => {
    const tokens = [
      { line: 5, startChar: 10, length: 7, tokenType: 0, tokenModifiers: 0 },
    ];
    const encoded = encodeSemanticTokens(tokens);
    // First token: deltaLine = 5 (relative to 0), deltaChar = 10
    // (line moved, so absolute), length = 7, type = 0, mods = 0.
    expect(encoded).toEqual([5, 10, 7, 0, 0]);
  });

  it("uses delta-line and delta-char for subsequent tokens on same line", () => {
    const tokens = [
      { line: 2, startChar: 5, length: 3, tokenType: 0, tokenModifiers: 0 },
      { line: 2, startChar: 12, length: 4, tokenType: 1, tokenModifiers: 0 },
    ];
    const encoded = encodeSemanticTokens(tokens);
    // Second token: deltaLine = 0, deltaChar = 12 - 5 = 7.
    expect(encoded).toEqual([2, 5, 3, 0, 0, 0, 7, 4, 1, 0]);
  });

  it("resets char delta to absolute when line moves", () => {
    const tokens = [
      { line: 3, startChar: 8, length: 3, tokenType: 0, tokenModifiers: 0 },
      { line: 7, startChar: 4, length: 5, tokenType: 0, tokenModifiers: 0 },
    ];
    const encoded = encodeSemanticTokens(tokens);
    // Second token: deltaLine = 4, deltaChar = 4 (absolute, not 4-8=-4).
    expect(encoded).toEqual([3, 8, 3, 0, 0, 4, 4, 5, 0, 0]);
  });

  it("encodes empty array as empty array", () => {
    expect(encodeSemanticTokens([])).toEqual([]);
  });

  it("encoded length is always tokens.length * 5", () => {
    const ast = parseSample();
    const tokens = collectSemanticTokens(ast);
    const encoded = encodeSemanticTokens(tokens);
    expect(encoded.length).toBe(tokens.length * 5);
  });
});

describe("phase14 — token legend", () => {
  it("token types include class, property, parameter", () => {
    expect(TOKEN_TYPES).toContain("class");
    expect(TOKEN_TYPES).toContain("property");
    expect(TOKEN_TYPES).toContain("parameter");
  });

  it("token modifiers include declaration", () => {
    expect(TOKEN_MODIFIERS).toContain("declaration");
  });
});
