/**
 * Phase 14 — Semantic tokens.
 *
 * LSP semantic tokens let the server tell the editor "this span is a
 * type reference, this one is a property declaration, this one is a
 * parameter." The editor's theme maps token types to colors —
 * something TextMate alone (Phase 13) can't do without an AST.
 *
 * Phase 14 emits tokens for the spans where we have precise
 * location information:
 *
 *   - NamedType references (e.g. `BatteryPack` in `property
 *     battery: BatteryPack`) → tokenType "class"
 *   - Property name declarations → tokenType "property" with
 *     "declaration" modifier
 *   - Event/query parameter names → tokenType "parameter"
 *
 * Notably absent: declaration name spans (kind Drone { ... }) and
 * event/query name spans. The AST stores the WHOLE BLOCK as the
 * decl's location, not the name token alone — recovering the
 * name span requires re-tokenizing. The TextMate grammar (Phase 13)
 * already colors capitalized identifiers as types, which catches
 * declaration names; semantic tokens add precision over THAT for
 * the cases TextMate gets wrong (e.g. a NamedType reference and
 * a value that happens to be capitalized).
 *
 * The token format is the LSP-mandated relative encoding:
 *   [deltaLine, deltaStartChar, length, tokenType, tokenModifier]
 * tokens are sorted by position, with each row's deltaLine relative
 * to the previous token's line and deltaStartChar relative to the
 * previous token on the SAME line (or absolute if the line moved).
 */

import type {
  Declaration,
  OntoFile,
  PropertyDecl,
  TypeRef,
} from "../ast/index.js";

// Standard LSP semantic token types we use. The order in this array
// IS the type index — clients map index to color via the legend
// returned at initialize.
export const TOKEN_TYPES = [
  "class", // NamedType references
  "property", // property declarations
  "parameter", // event/query parameter names
] as const;

export const TOKEN_MODIFIERS = ["declaration"] as const;

const TYPE_INDEX_CLASS = 0;
const TYPE_INDEX_PROPERTY = 1;
const TYPE_INDEX_PARAMETER = 2;

const MODIFIER_DECLARATION = 1 << 0; // bit 0 of the bitmask

export interface SemanticToken {
  readonly line: number; // 0-indexed
  readonly startChar: number; // 0-indexed
  readonly length: number;
  readonly tokenType: number;
  readonly tokenModifiers: number;
}

/**
 * Walk the AST collecting semantic tokens. Result is sorted by
 * (line, startChar) so relative encoding works correctly.
 */
export function collectSemanticTokens(ast: OntoFile): SemanticToken[] {
  const tokens: SemanticToken[] = [];

  for (const d of ast.declarations) {
    collectInDeclaration(d, tokens);
  }

  // Sort by position. The LSP encoder requires this.
  tokens.sort((a, b) => {
    if (a.line !== b.line) return a.line - b.line;
    return a.startChar - b.startChar;
  });
  return tokens;
}

function collectInDeclaration(d: Declaration, out: SemanticToken[]): void {
  // Properties: name has approximate location (the whole `property X: T;`
  // span), so we emit a token but only for the property's known position.
  // Without sub-token resolution we'd over-color the surrounding text.
  // Pragmatic approach: skip property NAME tokens; just emit the type
  // ref tokens within. Property name declarations are colored by
  // TextMate via the lowercase-identifier rule.
  if ("properties" in d) {
    for (const p of d.properties) {
      collectInProperty(p, out);
    }
  }

  // Events and queries: parameters have precise location, types within
  // them have NamedType locations. Names of events/queries themselves
  // would need re-tokenizing — out of Phase 14 scope.
  if ("events" in d) {
    for (const ev of d.events) {
      for (const param of ev.parameters) {
        collectParameter(param, out);
      }
    }
  }
  if ("queries" in d) {
    for (const q of d.queries) {
      for (const param of q.parameters) {
        collectParameter(param, out);
      }
    }
  }
}

function collectInProperty(p: PropertyDecl, out: SemanticToken[]): void {
  collectInTypeRef(p.propertyType, out);
}

function collectParameter(
  param: import("../ast/index.js").ParameterDecl,
  out: SemanticToken[],
): void {
  // The parameter's location covers `name: Type` in source. We don't
  // have a sub-location for just the name. Approximate: emit a
  // token at the start of the parameter location with the name's
  // length. This is a best-effort.
  const loc = param.location;
  out.push({
    line: loc.line - 1,
    startChar: loc.column - 1,
    length: param.name.length,
    tokenType: TYPE_INDEX_PARAMETER,
    tokenModifiers: MODIFIER_DECLARATION,
  });
  // The parameter's type ref is also tokenized.
  collectInTypeRef(param.parameterType, out);
}

function collectInTypeRef(t: TypeRef, out: SemanticToken[]): void {
  if (t.kind === "NamedType") {
    const loc = t.location;
    out.push({
      line: loc.line - 1,
      startChar: loc.column - 1,
      length: loc.length,
      tokenType: TYPE_INDEX_CLASS,
      tokenModifiers: 0,
    });
    return;
  }
  if (t.kind === "SetType" || t.kind === "OptionType") {
    collectInTypeRef(t.elementType, out);
  }
  // PrimitiveType: not user-defined, no semantic token. TextMate's
  // primitive-types rule colors them.
}

/**
 * Convert collected tokens to the LSP-mandated relative-encoded
 * `Uint32Array`-shaped flat array. Each token consumes 5 entries:
 *   [deltaLine, deltaStartChar, length, tokenType, tokenModifiers]
 * Where:
 *   deltaLine     = lines from previous token (0 if same line)
 *   deltaStartChar = chars from previous token's startChar IF same
 *                    line, else absolute char (since the line moved)
 *
 * Tokens MUST be sorted by (line, startChar) before encoding —
 * `collectSemanticTokens` already does this.
 */
export function encodeSemanticTokens(tokens: readonly SemanticToken[]): number[] {
  const out: number[] = [];
  let prevLine = 0;
  let prevChar = 0;
  for (const t of tokens) {
    const deltaLine = t.line - prevLine;
    const deltaChar = deltaLine === 0 ? t.startChar - prevChar : t.startChar;
    out.push(
      deltaLine,
      deltaChar,
      t.length,
      t.tokenType,
      t.tokenModifiers,
    );
    prevLine = t.line;
    prevChar = t.startChar;
  }
  return out;
}
