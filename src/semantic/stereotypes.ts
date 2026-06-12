import type { Declaration, RelationDecl } from "../ast/index.js";

type StereotypedDecl = Exclude<Declaration, RelationDecl>;

/**
 * Stereotype metadata table — Phase 3.
 *
 * Central source of truth for the UFO-A meta-rules that the validator
 * consults. Every new stereotype we add MUST appear here; every semantic
 * rule that cares about rigidity/sortality/identity/specialization-target
 * MUST read from this table instead of switching on `Declaration.kind`.
 *
 * The UFO-A classification used here:
 *   - Rigidity: how an instance's classification survives world/time change.
 *     * `rigid`      — classification is necessary (Kind, Subkind, Category,
 *                      Relator, Mode, Quality, Collective, Quantity).
 *     * `semi-rigid` — rigid for SOME instances, anti-rigid for others
 *                      (Mixin).
 *     * `anti-rigid` — classification is contingent (Role, RoleMixin,
 *                      Phase).
 *   - Sortality: does it supply/inherit a principle of identity?
 *     * `sortal`     — every instance is an instance of exactly one sortal
 *                      lineage (Kind and everything that inherits from it:
 *                      Subkind, Role; plus the "standalone" sortals Relator,
 *                      Mode, Quality, Collective, Quantity).
 *     * `non-sortal` — categorizing type that spans multiple sortal
 *                      lineages (Category, Mixin, RoleMixin).
 *   - Identity responsibility:
 *     * `supplies`   — MUST declare `identity: propertyName`.
 *     * `inherits`   — inherits identity from its specialization parent
 *                      (or from the `of` bearer, for Role).
 *     * `forbidden`  — non-sortals and aspects cannot declare identity.
 *
 * Specialization compatibility is governed by the rigidity lattice:
 *   rigid > semi-rigid > anti-rigid
 * A type cannot specialize a strictly less-rigid type. That rule is
 * implemented in the validator using this table; it is stricter than UFO's
 * full rule but captures the part that is decidable from stereotype alone.
 */
export type StereotypeName =
  | "Kind"
  | "Subkind"
  | "Role"
  | "Relator"
  | "PhaseGroup"
  | "Category"
  | "Mixin"
  | "RoleMixin"
  | "Mode"
  | "Quality"
  | "Collective"
  | "Quantity"
  | "Happening"
  | "Agent"
  | "Commitment"
  | "UseCase";

export type Rigidity = "rigid" | "semi-rigid" | "anti-rigid" | "none";
export type Sortality = "sortal" | "non-sortal" | "none";
export type IdentityRule = "supplies" | "inherits" | "forbidden";

export interface StereotypeMeta {
  readonly name: StereotypeName;
  readonly rigidity: Rigidity;
  readonly sortality: Sortality;
  readonly identity: IdentityRule;
  /** A non-sortal / abstract type cannot be instantiated at runtime. */
  readonly abstract: boolean;
  /** Human-readable label for error messages. */
  readonly label: string;
}

const TABLE: Readonly<Record<StereotypeName, StereotypeMeta>> = {
  Kind: {
    name: "Kind",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "supplies",
    abstract: false,
    label: "Kind",
  },
  Subkind: {
    name: "Subkind",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "inherits",
    abstract: false,
    label: "Subkind",
  },
  Role: {
    name: "Role",
    rigidity: "anti-rigid",
    sortality: "sortal",
    identity: "inherits",
    abstract: false,
    label: "Role",
  },
  Relator: {
    name: "Relator",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "supplies",
    abstract: false,
    label: "Relator",
  },
  PhaseGroup: {
    name: "PhaseGroup",
    rigidity: "none",
    sortality: "none",
    identity: "forbidden",
    abstract: true,
    label: "PhaseGroup",
  },
  Category: {
    name: "Category",
    rigidity: "rigid",
    sortality: "non-sortal",
    identity: "forbidden",
    abstract: true,
    label: "Category",
  },
  Mixin: {
    name: "Mixin",
    rigidity: "semi-rigid",
    sortality: "non-sortal",
    identity: "forbidden",
    abstract: true,
    label: "Mixin",
  },
  RoleMixin: {
    name: "RoleMixin",
    rigidity: "anti-rigid",
    sortality: "non-sortal",
    identity: "forbidden",
    abstract: true,
    label: "RoleMixin",
  },
  Mode: {
    // Aspects are sortal (they carry an individuation criterion once
    // attached to a bearer) but bearer-dependent for identity, so in our
    // DSL they do NOT declare identity explicitly — it is composed from
    // (bearer, aspect-type) by the code generator.
    name: "Mode",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "forbidden",
    abstract: false,
    label: "Mode",
  },
  Quality: {
    name: "Quality",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "forbidden",
    abstract: false,
    label: "Quality",
  },
  Collective: {
    name: "Collective",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "supplies",
    abstract: false,
    label: "Collective",
  },
  Quantity: {
    name: "Quantity",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "supplies",
    abstract: false,
    label: "Quantity",
  },
  Happening: {
    // UFO-B perdurant. Rigid (a happening is of its kind necessarily),
    // sortal (each happening carries a principle of identity — most
    // naturally a monotonic id or (participants, interval) tuple), and
    // supplies its own identity (not inherited from a bearer or from
    // members). Not abstract.
    name: "Happening",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "supplies",
    abstract: false,
    label: "Happening",
  },
  Agent: {
    // UFO-C agentive endurant. Structurally identical to a Kind:
    // rigid, sortal, supplies identity, not abstract. The distinction
    // is behavioural — an agent is one that admits mental states,
    // intentionality, and (crucially for Phase 7) can take part in
    // commitments. The specialization matrix keeps Agent → Kind legal
    // so an existing Kind taxonomy can be refined into agents without
    // rewriting.
    name: "Agent",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "supplies",
    abstract: false,
    label: "Agent",
  },
  Commitment: {
    // UFO-C social relator. Rigid and sortal (a commitment isn't a
    // fleeting property of an agent; it's an entity in its own right
    // with a lifecycle). Supplies identity (commitments are
    // first-class artifacts that can be referenced, queried, and
    // broken). Not abstract. Specialization: Commitment → Commitment
    // only — a commitment should not be silently reinterpreted as a
    // generic Relator and vice versa.
    name: "Commitment",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "supplies",
    abstract: false,
    label: "Commitment",
  },
  UseCase: {
    // Phase 8 use-case — structurally a specialized Happening. Same
    // rigidity/sortality/identity profile as Happening because a
    // use-case IS a happening (a particular shape of occurrent). The
    // distinction from Happening is metadata-only: actors, trigger,
    // outcomes.
    name: "UseCase",
    rigidity: "rigid",
    sortality: "sortal",
    identity: "supplies",
    abstract: false,
    label: "UseCase",
  },
};

/** Map from AST node kind discriminator to its stereotype metadata. */
const KIND_TO_STEREOTYPE: Readonly<
  Record<StereotypedDecl["kind"], StereotypeName>
> = {
  KindDecl: "Kind",
  SubkindDecl: "Subkind",
  RoleDecl: "Role",
  RelatorDecl: "Relator",
  PhaseGroupDecl: "PhaseGroup",
  CategoryDecl: "Category",
  MixinDecl: "Mixin",
  RoleMixinDecl: "RoleMixin",
  ModeDecl: "Mode",
  QualityDecl: "Quality",
  CollectiveDecl: "Collective",
  QuantityDecl: "Quantity",
  HappeningDecl: "Happening",
  AgentDecl: "Agent",
  CommitmentDecl: "Commitment",
  UseCaseDecl: "UseCase",
};

/**
 * Look up stereotype metadata for any declaration node. Returns `null` only
 * for unreachable / malformed input; every live `Declaration.kind` has an
 * entry in the lookup tables above.
 */
export function metaOf(decl: Declaration): StereotypeMeta {
  if (decl.kind === "RelationDecl") {
    throw new Error("Cannot query stereotype metadata for a RelationDecl.");
  }
  const name = KIND_TO_STEREOTYPE[decl.kind as StereotypedDecl["kind"]];
  const meta = TABLE[name];
  return meta;
}

/** Look up metadata by stereotype name. Used when we have a name string. */
export function metaByName(name: StereotypeName): StereotypeMeta {
  return TABLE[name];
}

/**
 * Rigidity ordering for specialization compatibility:
 *   rigid (3) > semi-rigid (2) > anti-rigid (1) > none (0)
 *
 * A subtype's rigidity level MUST be >= its supertype's level. That is,
 * a rigid type can specialize only rigid types; a semi-rigid can specialize
 * rigid or semi-rigid; an anti-rigid can specialize anything rigidity-bearing.
 * (UFO's actual rule is a little richer — e.g. forbids a rigid from
 * specializing an anti-rigid specifically — but this monotone check is
 * both necessary and sufficient for the cases the DSL actually emits.)
 */
export function rigidityLevel(r: Rigidity): number {
  switch (r) {
    case "rigid":
      return 3;
    case "semi-rigid":
      return 2;
    case "anti-rigid":
      return 1;
    case "none":
      return 0;
  }
}

/**
 * Which stereotypes can legally appear as a specialization parent of a
 * given child stereotype in Phase 3.5.  Extended from Phase 3b:
 *
 *   Subkind     → Kind, Subkind
 *   Kind        → Category, Mixin
 *   Category    → Category
 *   Mixin       → Mixin, Category
 *   RoleMixin   → RoleMixin, Mixin
 *   Role        → Role, RoleMixin          (Phase 3.5 — role refinement)
 *   Mode        → Mode                     (Phase 3.5 — aspect hierarchy)
 *   Quality     → Quality                  (Phase 3.5 — aspect hierarchy)
 *   Relator     → Relator                  (Phase 5 — contract specialization)
 *   Collective  → Collective               (Phase 5 — collection refinement)
 *   Quantity    → Quantity                 (Phase 5 — material refinement)
 */
const ALLOWED_PARENTS: Readonly<
  Partial<Record<StereotypeName, readonly StereotypeName[]>>
> = {
  Subkind: ["Kind", "Subkind"],
  Kind: ["Category", "Mixin"],
  Category: ["Category"],
  Mixin: ["Mixin", "Category"],
  RoleMixin: ["RoleMixin", "Mixin"],
  Role: ["Role", "RoleMixin"],
  Mode: ["Mode"],
  Quality: ["Quality"],
  Relator: ["Relator"],
  Collective: ["Collective"],
  Quantity: ["Quantity"],
  Happening: ["Happening"],
  // Phase 7: Agent → Kind OR Agent. Allows upgrading a plain-Kind
  // taxonomy (Person) into an agentive refinement (Customer extends
  // Person as Agent). The reverse (Kind specializes Agent) is
  // deliberately not listed — you can't downgrade an agent to a
  // non-agentive role through specialization.
  Agent: ["Kind", "Agent"],
  Commitment: ["Commitment"],
  // Phase 8: a use-case may specialize another use-case OR a plain
  // happening (since a use-case IS structurally a happening + metadata).
  UseCase: ["UseCase", "Happening"],
};

/** Is `parent` a legal specialization target for `child` at the Phase 3 grammar level? */
export function isAllowedSpecializationTarget(
  child: StereotypeName,
  parent: StereotypeName,
): boolean {
  const list = ALLOWED_PARENTS[child];
  if (!list) return false;
  return list.includes(parent);
}
