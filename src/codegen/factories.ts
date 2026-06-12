/**
 * Phase 10 — Factory function emission.
 *
 * A factory `makeX(data): X` is the canonical way to construct an
 * instance in the generated module. It:
 *   - Accepts a plain-object input where the identity field is a raw
 *     string (not a branded Id).
 *   - Assigns the literal `kind` discriminator.
 *   - Casts the identity to the branded Id type.
 *   - Assigns all other properties verbatim.
 *
 * Why have factories at all when TS interfaces are structural? Two
 * reasons:
 *   1. Branded identity types are NOT structurally inferable — you
 *      can't just pass `{ email: "..." }` and have TS figure out
 *      that `email` should be CustomerId. The factory does the cast
 *      in exactly one place.
 *   2. Future phases extend the factory body with invariant calls,
 *      commitment pre-hooks, etc. Having factories from day one
 *      means those extensions are purely additive.
 *
 * Scope for Phase 10: ONLY identity-supplying declarations get
 * factories. Subkind and Role don't — they're refinements and their
 * instance construction is an open design question (do you make a
 * Subkind from scratch or "cast" an existing Kind? We punt for now).
 *
 * Deliberately out:
 *   - Runtime invariant checks in the factory body. The validators
 *     module generates standalone `validateX(instance)` functions
 *     that callers invoke explicitly — mixing construction and
 *     validation mean exceptions in constructors, which is a design
 *     direction we shouldn't choose for users.
 */

import type {
  Declaration,
  OntoFile,
  PropertyDecl,
  TypeDecl,
  TypeRef,
} from "../ast/index.js";
import {
  effectiveProperties,
  detectCycles,
  type TypeIndex,
} from "../semantic/inheritance.js";

const IDENTITY_SUPPLIERS: ReadonlySet<Declaration["kind"]> = new Set([
  "KindDecl",
  "RelatorDecl",
  "CollectiveDecl",
  "QuantityDecl",
  "HappeningDecl",
  "AgentDecl",
  "CommitmentDecl",
  "UseCaseDecl",
]);

export function renderFactories(file: OntoFile): string {
  const lines: string[] = [];
  lines.push("// ─── Factory functions ───");
  lines.push("");

  // Build a TypeIndex so we can walk specialization chains. The
  // factory's `data` parameter must accept ALL effective properties
  // (own + inherited), otherwise TS rejects assignment to the
  // declared interface type because inherited fields are mandatory.
  const typeDecls = new Map<string, TypeDecl>();
  const byName = new Map<string, Declaration>();
  for (const d of file.declarations) {
    byName.set(d.name, d);
    // Only TypeDecl-shaped declarations are addressable through
    // chainOf. Relation and PhaseGroup don't appear as parents
    // anywhere, so omitting them is safe.
    if (d.kind !== "RelationDecl" && d.kind !== "PhaseGroupDecl") {
      typeDecls.set(d.name, d as TypeDecl);
    }
  }
  const idx: TypeIndex = { byName, typeDecls };
  const cycleSet = detectCycles(idx);

  for (const d of file.declarations) {
    if (!IDENTITY_SUPPLIERS.has(d.kind)) continue;
    if (!("identity" in d) || !d.identity) continue;
    if (!("properties" in d) || d.properties.length === 0) continue;

    lines.push(...renderFactory(d, idx, cycleSet));
    lines.push("");
  }
  return lines.join("\n");
}

function renderFactory(
  d: Declaration,
  idx: TypeIndex,
  cycleSet: ReadonlySet<string>,
): string[] {
  if (!("properties" in d) || !("identity" in d) || !d.identity) return [];

  const lines: string[] = [];
  const idPropName = d.identity.propertyName;
  const idTypeName = `${d.name}Id`;

  // Walk the specialization chain to collect EVERY property the
  // factory must accept. Without this, factories for children skip
  // inherited fields and TS rejects the return value as missing
  // those fields. `effectiveProperties` returns a Map keyed by
  // property name so name-collisions (impossible because S22 forbids
  // them) would be deduped automatically.
  const allProps = effectiveProperties(d.name, idx, cycleSet);

  const inputFields: string[] = [];
  const propsList: PropertyDecl[] = [];
  for (const { prop } of allProps.values()) {
    propsList.push(prop);
    const fieldType =
      prop.name === idPropName
        ? "string"
        : renderTypeRefForInput(prop.propertyType);
    inputFields.push(`  ${prop.name}: ${fieldType};`);
  }

  lines.push(`export function make${d.name}(data: {`);
  for (const f of inputFields) lines.push(f);
  lines.push(`}): ${d.name} {`);
  lines.push(`  return {`);
  for (const p of propsList) {
    if (p.name === idPropName) {
      lines.push(`    ${p.name}: data.${p.name} as ${idTypeName},`);
    } else {
      lines.push(`    ${p.name}: data.${p.name},`);
    }
  }
  lines.push(`  };`);
  lines.push(`}`);
  return lines;
}

/**
 * For factory input types: same as renderTypeRef except that Set<T>
 * accepts both Set and ReadonlySet on input (Set extends ReadonlySet
 * is the TS convention). We stick to `ReadonlySet<T>` to match the
 * interface; callers can pass `new Set(...)` and TS's structural
 * compatibility handles the widening.
 */
function renderTypeRefForInput(t: TypeRef): string {
  if (t.kind === "PrimitiveType") {
    switch (t.name) {
      case "Real":
      case "Integer":
        return "number";
      case "String":
        return "string";
      case "Boolean":
        return "boolean";
    }
  }
  if (t.kind === "NamedType") return t.name;
  return `ReadonlySet<${renderTypeRefForInput(t.elementType)}>`;
}
