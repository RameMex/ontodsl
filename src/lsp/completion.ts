/**
 * Phase 12 Session 3 — completion.
 *
 * Given the document text and a cursor position, infer what kind of
 * completion the user wants and propose a list of items.
 *
 * Context detection works on TEXT not AST — the document mid-edit is
 * usually not parseable. We look at the substring up to the cursor
 * and apply heuristics:
 *
 *   1. After `specializes ` (or `, ` inside a specializes list)
 *      → declaration names (excluding the one being declared)
 *   2. After `: ` in a property/parameter type position
 *      → primitive types + declaration names + `Set<...>`
 *   3. After `self.` (inside a body)
 *      → properties of the enclosing decl
 *   4. At the start of a line in top-level scope
 *      → stereotype keywords (kind, subkind, role, etc.)
 *
 * The heuristics are imperfect — multi-line edits, comments, OCL
 * inside event/invariant blocks all complicate things. Session 3
 * keeps the rules simple and fails quietly when context is unclear
 * (returning empty completions, which the editor treats as "no
 * suggestions" — better than wrong ones).
 *
 * The completion items are LSP CompletionItem objects with:
 *   - label: what shows in the dropdown
 *   - kind: drives the icon (Class for decls, Field for properties,
 *     Keyword for stereotypes, etc.)
 *   - detail: optional one-line annotation (e.g. "kind", "Real")
 *   - documentation: optional longer markdown
 *
 * The module is pure — input is doc text + position + AST (best
 * effort, may be null), output is a list. The server wires it.
 */

import type { Declaration, OntoFile } from "../ast/index.js";

export interface CompletionItem {
  readonly label: string;
  readonly kind: number; // CompletionItemKind.Class = 7, Field = 5, Keyword = 14
  readonly detail?: string;
  readonly documentation?: string;
}

// LSP CompletionItemKind values we use. Hardcoding the ints avoids
// pulling in the full LSP types module here — keeps this file pure
// and easy to test in isolation.
const KIND_KEYWORD = 14;
const KIND_CLASS = 7;
const KIND_FIELD = 5;
const KIND_PRIMITIVE = 25; // TypeParameter — closest to "primitive type"

const STEREOTYPE_KEYWORDS = [
  "kind",
  "subkind",
  "role",
  "relator",
  "category",
  "mixin",
  "roleMixin",
  "mode",
  "quality",
  "collective",
  "quantity",
  "happening",
  "agent",
  "commitment",
  "useCase",
  "relation",
  "phaseGroup",
];

const PRIMITIVE_TYPES = ["Real", "Integer", "String", "Boolean"];

/**
 * Slice the document text up to the cursor and return the line's
 * content from its start to the cursor. We need just the local line
 * for most context detection — multiline contexts are too rare to
 * justify the extra complexity.
 */
function lineUpToCursor(
  text: string,
  line: number,
  character: number,
): string {
  const lines = text.split(/\r\n|\n/);
  if (line >= lines.length) return "";
  const lineText = lines[line]!;
  return lineText.slice(0, Math.min(character, lineText.length));
}

/**
 * Compute completions at the cursor position.
 *
 * `ast` is best-effort: if the document parsed cleanly, it's the
 * full AST and we can use it to enumerate decl names. If parse
 * failed (the user is mid-typing), `ast` is null and we fall back
 * to text-only heuristics — which means we can still offer keywords
 * and primitives but not user-defined names.
 */
export function computeCompletions(
  text: string,
  line: number,
  character: number,
  ast: OntoFile | null,
): readonly CompletionItem[] {
  const prefix = lineUpToCursor(text, line, character);

  // Order matters: more specific contexts first.

  // 1. After `self.` — property completion.
  // Match `\bself\.([a-zA-Z_]*)$` to allow partial property names.
  // We look up the enclosing declaration by walking backwards through
  // the document for a stereotype keyword. Imperfect but pragmatic;
  // a parser-based implementation would be more robust.
  const selfDotMatch = prefix.match(/\bself\.([A-Za-z_][A-Za-z0-9_]*)?$/);
  if (selfDotMatch) {
    const enclosingDecl = findEnclosingDeclByText(text, line, ast);
    if (enclosingDecl) {
      return propertiesOf(enclosingDecl).map((p) => ({
        label: p.name,
        kind: KIND_FIELD,
        detail: p.type,
      }));
    }
    return [];
  }

  // 2. After `specializes ` or `, ` inside a specializes list.
  // The trailing identifier (if any) is the prefix the user typed;
  // LSP filters by it client-side, so we don't filter here.
  const specMatch = prefix.match(
    /\bspecializes\s+(?:[A-Za-z_][A-Za-z0-9_]*\s*,\s*)*([A-Za-z_][A-Za-z0-9_]*)?$/,
  );
  if (specMatch) {
    if (ast) {
      return ast.declarations.map((d) => ({
        label: d.name,
        kind: KIND_CLASS,
        detail: stereotypeOf(d),
      }));
    }
    // Fallback when parse failed (the document is mid-edit). Scrape
    // declaration names with a regex over the raw text so the user
    // still gets useful suggestions. This regex is a superset
    // approximation — comments and strings could trip it — but the
    // false positives are harmless (they show up in the dropdown
    // and the user picks the real one).
    const nameRegex =
      /^(?:kind|subkind|role|relator|category|mixin|roleMixin|mode|quality|collective|quantity|happening|agent|commitment|useCase)\s+([A-Za-z_][A-Za-z0-9_]*)/gm;
    const names: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = nameRegex.exec(text)) !== null) {
      names.push(m[1]!);
    }
    return names.map((n) => ({
      label: n,
      kind: KIND_CLASS,
      detail: "declaration",
    }));
  }

  // 3. After `: ` in a property or parameter type position.
  // Matches `property foo: ` and `event op(p: ` and `: Set<` (we
  // suggest types inside Set too).
  const typeMatch = prefix.match(/:\s*(?:Set\s*<\s*)?([A-Za-z_][A-Za-z0-9_]*)?$/);
  if (typeMatch) {
    const decls = ast
      ? ast.declarations.map((d) => ({
          label: d.name,
          kind: KIND_CLASS,
          detail: stereotypeOf(d),
        }))
      : [];
    const primitives = PRIMITIVE_TYPES.map((p) => ({
      label: p,
      kind: KIND_PRIMITIVE,
      detail: "primitive",
    }));
    const setSuggestion: CompletionItem = {
      label: "Set",
      kind: KIND_KEYWORD,
      detail: "Set<T> — collection",
      documentation: "Use as `Set<ElementType>` for unordered collections.",
    };
    return [...primitives, ...decls, setSuggestion];
  }

  // 4. Top-level scope — stereotype keywords. We approximate "top
  // level" as "the line so far is just whitespace and possibly an
  // identifier in progress". Inside a `{ ... }` block we'd be in a
  // body — distinguishing is hard without parsing, so we accept some
  // false positives (suggesting `kind` in a body is annoying but
  // mostly harmless because the user dismisses).
  if (/^\s*[A-Za-z_]*$/.test(prefix)) {
    return STEREOTYPE_KEYWORDS.map((kw) => ({
      label: kw,
      kind: KIND_KEYWORD,
      detail: "stereotype",
    }));
  }

  return [];
}

/**
 * Find the declaration whose body the given line is inside. Pure
 * AST walk — checks `location` ranges. Returns null if `ast` is
 * null or the line falls outside any declaration.
 */
function findEnclosingDeclByText(
  _text: string,
  line: number, // 0-indexed
  ast: OntoFile | null,
): Declaration | null {
  if (!ast) return null;
  for (const d of ast.declarations) {
    const startLine = d.location.line - 1;
    // Approximate end line: location.length spans from offset; we'd
    // need a line-aware mapper to know the real end line. Rather
    // than building one, we walk forward by counting newlines in the
    // textual span — but we don't have the text easily. Pragmatic
    // fallback: trust that location.line/length covers a multi-line
    // block by approximating with offset → end-offset → line count.
    // For Phase 12 Session 3 we use a simpler check: the line is
    // within the declaration if it's >= startLine AND there's no
    // OTHER declaration whose startLine is between startLine+1 and
    // `line`.
    if (line >= startLine) {
      // Is there a later declaration starting before `line`? If so,
      // this decl can't contain `line` — the later one does.
      const containsLine = !ast.declarations.some(
        (other) =>
          other !== d &&
          other.location.line - 1 > startLine &&
          other.location.line - 1 <= line,
      );
      if (containsLine) return d;
    }
  }
  return null;
}

/**
 * Get the properties of a declaration as { name, type } pairs.
 * Returns empty for declarations without a `properties` field
 * (RelationDecl, PhaseGroupDecl).
 */
function propertiesOf(d: Declaration): readonly { name: string; type: string }[] {
  if (!("properties" in d)) return [];
  return d.properties.map((p) => ({
    name: p.name,
    type: typeRefToString(p.propertyType),
  }));
}

function typeRefToString(t: import("../ast/index.js").TypeRef): string {
  if (t.kind === "PrimitiveType") return t.name;
  if (t.kind === "NamedType") return t.name;
  return `Set<${typeRefToString(t.elementType)}>`;
}

function stereotypeOf(d: Declaration): string {
  switch (d.kind) {
    case "KindDecl":
      return "kind";
    case "SubkindDecl":
      return "subkind";
    case "RoleDecl":
      return "role";
    case "RelatorDecl":
      return "relator";
    case "CategoryDecl":
      return "category";
    case "MixinDecl":
      return "mixin";
    case "RoleMixinDecl":
      return "roleMixin";
    case "ModeDecl":
      return "mode";
    case "QualityDecl":
      return "quality";
    case "CollectiveDecl":
      return "collective";
    case "QuantityDecl":
      return "quantity";
    case "HappeningDecl":
      return "happening";
    case "AgentDecl":
      return "agent";
    case "CommitmentDecl":
      return "commitment";
    case "UseCaseDecl":
      return "useCase";
    case "RelationDecl":
      return "relation";
    case "PhaseGroupDecl":
      return "phaseGroup";
  }
}
