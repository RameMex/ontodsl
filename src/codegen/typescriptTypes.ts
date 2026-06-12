/**
 * Phase 10 code generation — TypeScript interface emission.
 *
 * For every body-bearing declaration we emit:
 *   1. A branded identity type when the declaration supplies its own
 *      identity (Kind, Relator, Collective, Quantity, Happening,
 *      Agent, Commitment, UseCase).
 *   2. An `interface X` with typed properties. Inheritance is
 *      emitted as `extends Parent` when the declaration specializes
 *      one or more parents.
 *
 * The generated file is meant to be consumed as an import:
 *     import type { Drone, DroneId } from "./generated/types";
 *
 * Scope:
 *   - Primitive types map to TS: Real → number, Integer → number,
 *     String → string, Boolean → boolean.
 *   - Named references to other declarations use that declaration's
 *     own interface name when the property is "part-of" or "refers to
 *     a concept" (e.g. `battery: BatteryPack`).
 *   - Identity fields use the branded type (e.g. `trackingNumber:
 *     PackageId`). This prevents accidentally mixing a PackageId with
 *     a CustomerId at the type-system level.
 *   - Set<T> maps to ReadonlySet<T> — readonly because our instances
 *     are immutable by convention.
 *
 * Deliberately out:
 *   - Event and query bodies — those generate FUNCTIONS, which live
 *     in the validators / event-handler layer, not in the type layer.
 *   - Invariants — also in the validators layer.
 *   - RelationDecl — relations are edges; we don't give them a
 *     dedicated interface (the relation's source and target types
 *     are already declared).
 *   - PhaseGroupDecl — phases are a lifecycle concern; a later
 *     codegen phase can emit state-machine scaffolding.
 */

import type {
  Declaration,
  OntoFile,
  PropertyDecl,
  TypeDecl,
  TypeRef,
} from "../ast/index.js";
import { parentsOf } from "../semantic/inheritance.js";

/**
 * Stereotypes that supply their own identity. Instances get a
 * branded identity type named `${Name}Id`. Subkind and Role do NOT
 * appear here: their identity comes from the ancestor chain, so they
 * reuse the ancestor's branded Id rather than inventing their own.
 */
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

/**
 * Body-bearing declarations that become interfaces. The remaining
 * declarations (RelationDecl, PhaseGroupDecl) don't produce
 * interfaces — they're structural metadata consumed by other
 * generators (accessors, state machines).
 */
const BODY_BEARING: ReadonlySet<Declaration["kind"]> = new Set([
  "KindDecl",
  "SubkindDecl",
  "RoleDecl",
  "RelatorDecl",
  "CategoryDecl",
  "MixinDecl",
  "RoleMixinDecl",
  "ModeDecl",
  "QualityDecl",
  "CollectiveDecl",
  "QuantityDecl",
  "HappeningDecl",
  "AgentDecl",
  "CommitmentDecl",
  "UseCaseDecl",
]);

/**
 * Render the TypeScript type layer for `file`. Returns a single
 * string containing the complete module source. Caller is
 * responsible for writing to disk; the dispatcher in `index.ts`
 * wraps this output with a file header comment.
 */
export function renderTypes(file: OntoFile): string {
  const lines: string[] = [];

  // Collect the set of decl names so Named references can be resolved
  // to interface names. A name that isn't in this set is either a
  // primitive (caught by the TypeRef switch above) or a dangling ref
  // (the validator's job to flag).
  const declByName = new Map<string, Declaration>();
  for (const d of file.declarations) declByName.set(d.name, d);

  // Emit branded identity types first so interfaces below can refer to
  // them without forward-reference friction.
  lines.push("// ─── Branded identity types ───");
  lines.push("");
  for (const d of file.declarations) {
    if (!IDENTITY_SUPPLIERS.has(d.kind)) continue;
    lines.push(...renderBrandedId(d));
  }
  lines.push("");
  lines.push("// ─── Interfaces ───");
  lines.push("");

  for (const d of file.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    lines.push(...renderInterface(d, declByName));
    lines.push("");
  }

  return lines.join("\n");
}

/**
 * Branded identity type. The brand is a phantom property — present in
 * the TS type system but erased at runtime — so:
 *   - Two IDs of different brands cannot be accidentally swapped.
 *   - Runtime representation is just `string`, no wrapping overhead.
 *
 * The brand key is the declaration name itself because that's the
 * only string guaranteed unique across the module.
 */
function renderBrandedId(d: Declaration): string[] {
  const idName = `${d.name}Id`;
  // We always brand with string for Phase 10. In principle an identity
  // property can be any primitive, but `string` is overwhelmingly the
  // common case and branding a number is subtle (number literals
  // coerce in more places than string literals). A future phase can
  // specialize the base type per-decl by inspecting the identity
  // property's actual TypeRef.
  return [
    `/** Identity type for ${d.name}. Runtime: string. Compile-time: branded. */`,
    `export type ${idName} = string & { readonly __brand: "${idName}" };`,
  ];
}

/**
 * Render the `export interface X extends Y { ... }` block. Interface
 * inclusion of parents via TS `extends` mirrors the DSL's
 * `specializes` — the effective property set of an instance is the
 * union of its own and its ancestors'.
 *
 * A discriminator `readonly kind: "X"` is emitted first. This serves
 * two purposes: (1) it lets TS narrow on literal types in generic
 * code, and (2) it makes serialization to JSON self-describing.
 * It's a string literal, not the full stereotype, because the
 * stereotype is schema-level metadata and doesn't need to round-trip
 * through every instance.
 */
function renderInterface(
  d: Declaration,
  declByName: ReadonlyMap<string, Declaration>,
): string[] {
  const lines: string[] = [];
  const stereotype = stereotypeLabel(d);
  lines.push(`/** @stereotype <<${stereotype}>> */`);

  // Inheritance via TS extends. Only body-bearing parents (i.e. ones
  // that also produce interfaces) go in the extends clause. Category,
  // Mixin, RoleMixin all fit — they're body-bearing. Relation and
  // PhaseGroup don't appear as parents anywhere in the stereotype
  // matrix, so they wouldn't show up here.
  const parentNames = (d as TypeDecl).kind
    ? parentsOfSafely(d as TypeDecl).filter((p) => declByName.has(p))
    : [];
  const extendsClause =
    parentNames.length > 0 ? ` extends ${parentNames.join(", ")}` : "";
  lines.push(`export interface ${d.name}${extendsClause} {`);

  // Note on discriminator field: earlier drafts emitted
  // `readonly kind: "X"` as a discriminated-union tag. We removed it
  // because TS interface inheritance forbids narrowing literal types
  // — `Drone extends PhysicalEntity` would conflict if both declared
  // `kind`. A future phase that needs runtime type discrimination can
  // either (a) emit `__stereotype` only on identity-supplying leaves,
  // or (b) ship a `typeOf(instance)` runtime helper that uses a
  // separate registry. Both designs require analysis we punt on now.

  // Properties. `effectiveProperties` walks the chain and would give
  // us inherited ones too, but we emit OWN properties here — the
  // `extends` clause is responsible for bringing inherited ones in.
  // If we duplicated, TS would error on conflicting property types
  // when a child "redeclares" unchanged (or worse, silently widen).
  if ("properties" in d) {
    const idPropName = getIdentityPropertyName(d);
    for (const p of d.properties) {
      lines.push(...renderProperty(p, d.name, idPropName));
    }
  }

  // TS requires a non-empty interface body when there are no members
  // and no extends clause. For decls with no own props and no parents,
  // emit a comment marker so the generated source remains valid TS.
  // (Empty `{ }` is actually legal in TS — but ts-strict's `noEmpty`
  // family of rules complains. A comment costs nothing.)

  lines.push(`}`);
  return lines;
}

/**
 * Defensive wrapper around parentsOf — returns an empty array for
 * declarations that parentsOf doesn't handle (RelationDecl,
 * PhaseGroupDecl). Those never reach renderInterface today because
 * BODY_BEARING excludes them, but keeping the wrapper means adding
 * a new body-bearing decl later doesn't silently skip its parents.
 */
function parentsOfSafely(d: TypeDecl): readonly string[] {
  try {
    return parentsOf(d);
  } catch {
    return [];
  }
}

/**
 * If the declaration supplies identity, return the property name it
 * designates (e.g. "trackingNumber" for `kind Package { identity:
 * trackingNumber; ... }`). Otherwise null.
 */
function getIdentityPropertyName(d: Declaration): string | null {
  if ("identity" in d && d.identity) return d.identity.propertyName;
  return null;
}

function renderProperty(
  p: PropertyDecl,
  ownerName: string,
  idPropName: string | null,
): string[] {
  const isIdentity = p.name === idPropName;
  const tsType = isIdentity
    ? `${ownerName}Id`
    : renderTypeRef(p.propertyType);
  return [`  readonly ${p.name}: ${tsType};`];
}

/**
 * Map a DSL TypeRef to its TypeScript equivalent.
 *
 *   PrimitiveType — direct mapping.
 *   NamedType — the TS name is just the decl name; if the referenced
 *     decl supplies identity, we link to the interface (not the
 *     branded Id) because properties navigate to the whole instance,
 *     not to its Id. Identity branding is for the identity-property
 *     itself and for explicit Id-only references (which don't exist
 *     in Phase 10 scope — future phases may add Id-only navigation).
 *   SetType — ReadonlySet<T> with the element type resolved.
 */
function renderTypeRef(t: TypeRef): string {
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
  if (t.kind === "OptionType") {
    // Phase 16b: TypeScript Option<T> is `T | null`. We pick `null`
    // over `undefined` because the OCL literal is `null` and a
    // strict `=== null` check is what the codegen translator emits.
    return `${renderTypeRef(t.elementType)} | null`;
  }
  if (t.kind === "ArrayType") {
    // Array<T, N> → `readonly T[]` in TypeScript. We deliberately
    // don't try to encode the fixed length in the type system (a
    // tuple type with N repeated entries would explode for matrix
    // shapes like 24×24) — the size invariant is enforced by the
    // generated validator's `->size()` check.
    return `readonly ${renderTypeRef(t.elementType)}[]`;
  }
  // SetType — elementType is PrimitiveType | NamedType (grammar
  // forbids nested Set).
  return `ReadonlySet<${renderTypeRef(t.elementType)}>`;
}

/**
 * Best-effort stereotype label for a declaration. Duplicates the logic
 * of semantic/stereotypes.ts's KIND_TO_STEREOTYPE rather than importing
 * it, because this file is a code GENERATOR and doing so would create
 * an import cycle risk (the semantic module imports from ast, and we
 * don't want codegen to depend on semantic beyond inheritance helpers).
 */
function stereotypeLabel(d: Declaration): string {
  switch (d.kind) {
    case "KindDecl":
      return "Kind";
    case "SubkindDecl":
      return "Subkind";
    case "RoleDecl":
      return "Role";
    case "RelatorDecl":
      return "Relator";
    case "CategoryDecl":
      return "Category";
    case "MixinDecl":
      return "Mixin";
    case "RoleMixinDecl":
      return "RoleMixin";
    case "ModeDecl":
      return "Mode";
    case "QualityDecl":
      return "Quality";
    case "CollectiveDecl":
      return "Collective";
    case "QuantityDecl":
      return "Quantity";
    case "HappeningDecl":
      return "Happening";
    case "AgentDecl":
      return "Agent";
    case "CommitmentDecl":
      return "Commitment";
    case "UseCaseDecl":
      return "UseCase";
    case "RelationDecl":
    case "PhaseGroupDecl":
      return "Structural";
  }
}
