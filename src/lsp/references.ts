/**
 * Phase 12 Session 3 — find references.
 *
 * Given a name, return ALL locations in the AST where that name
 * appears: declarations, type references in property types, type
 * references in event parameter types, and (Session 3 scope keeps
 * it conservative) the same coverage the position resolver has.
 *
 * Returned ranges are 0-indexed LSP-style. The list is unordered —
 * editors typically sort by file/position themselves.
 */

import type { OntoFile, SourceLocation } from "../ast/index.js";

export interface ReferenceLocation {
  readonly uri: string;
  readonly range: {
    readonly start: { readonly line: number; readonly character: number };
    readonly end: { readonly line: number; readonly character: number };
  };
}

function locToRange(loc: SourceLocation) {
  const line = loc.line - 1;
  const character = loc.column - 1;
  return {
    start: { line, character },
    end: { line, character: character + loc.length },
  };
}

export function findReferences(
  ast: OntoFile,
  uri: string,
  name: string,
  includeDeclaration: boolean,
): readonly ReferenceLocation[] {
  const out: ReferenceLocation[] = [];

  for (const d of ast.declarations) {
    // Declaration site itself.
    if (d.name === name && includeDeclaration) {
      out.push({ uri, range: locToRange(d.location) });
    }

    // Type references in property types.
    if ("properties" in d) {
      for (const p of d.properties) {
        collectInTypeRef(p.propertyType, name, uri, out);
      }
    }

    // Type references in event parameter types.
    if ("events" in d) {
      for (const ev of d.events) {
        for (const param of ev.parameters) {
          collectInTypeRef(param.parameterType, name, uri, out);
        }
      }
    }

    // Specializes targets — the parent reference is a usage too. The
    // AST stores parents as bare strings (no per-token location), so
    // we can't pinpoint the exact range for a `specializes Person`
    // mention. Skipped in Session 3 — find-references will miss
    // those, which is acceptable given the resolver also can't
    // navigate to them. A future polish could re-tokenise the decl
    // header to recover the parent ranges.
  }

  return out;
}

function collectInTypeRef(
  t: import("../ast/index.js").TypeRef,
  name: string,
  uri: string,
  out: ReferenceLocation[],
): void {
  if (t.kind === "NamedType" && t.name === name) {
    out.push({ uri, range: locToRange(t.location) });
    return;
  }
  if (t.kind === "SetType" || t.kind === "OptionType") {
    collectInTypeRef(t.elementType, name, uri, out);
  }
}
