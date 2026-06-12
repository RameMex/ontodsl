/**
 * AST types for the Onto DSL — Phase 3.
 *
 * Phase 3 adds on top of Phase 2:
 *   - Remaining UFO-A stereotypes as first-class declarations:
 *     Category, Mixin, RoleMixin, Mode, Quality, Collective, Quantity.
 *   - Optional `specializes` on Kind / Category / Mixin / RoleMixin.
 *     Subkind's `specializes` remains mandatory. (Role specialization and
 *     aspect specialization are deferred to Phase 3.5.)
 *   - `override` keyword on events/queries (Liskov-respecting redefinition;
 *     structural signature check in Phase 3, full contract-level LSP in
 *     Phase 4 once the OCL sub-parser lands).
 *   - Inheritance-aware semantic validation: properties, invariants,
 *     events and queries of a parent are visible to the child; `modifies`
 *     self-paths resolve through the specialization chain.
 *
 * Still deliberately OUT of scope (Phase 4+):
 *   - OntoUML relations as first-class edges (componentOf, characterization,
 *     material, formal, subCollectionOf, subQuantityOf) — Phase 3.5 adds the
 *     basic `relation` syntax; full typing deferred.
 *   - Multiple inheritance on Role / Mode / Quality — already done in 3.5.
 *   - UFO-B events/processes/participations.
 *   - UFO-C agents/commitments/claims.
 *   - OCL sub-parser (invariants/pre/post/body still raw strings).
 *   - Full contract-level LSP verification (weaker pre / stronger post).
 */

/** Location in source file — used for error reporting. */
export interface SourceLocation {
  readonly line: number;
  readonly column: number;
  readonly offset: number;
  readonly length: number;
}

/** Every AST node carries its source location. */
export interface AstNode {
  readonly location: SourceLocation;
}

/** Top-level compilation unit: one `.onto` file. */
export interface OntoFile extends AstNode {
  readonly kind: "OntoFile";
  readonly schemaVersion: string;
  readonly namespace: string;
  /**
   * Phase 17 (Paso 5): `import "./other.onto";` declarations. The
   * parser captures them as strings here; the multi-file resolver
   * loads each one, recursively resolves its own imports, and
   * merges all transitive declarations into the root file's
   * declarations list before semantic check runs. After resolution
   * `imports` is preserved for traceability (which file pulled
   * which) but downstream code paths read `declarations` only.
   */
  readonly imports: readonly ImportDecl[];
  readonly declarations: readonly Declaration[];
}

/**
 * `import "./path/to/other.onto";` — Paso 5 federation. Path is
 * relative to the importing file's directory. Resolver dedupes
 * by absolute path so a diamond import (A imports B and C; both
 * import D) only loads D once.
 *
 * Day 2 additions:
 *   - `alias`: optional `as Alias` suffix. Captured for error
 *     messages + manifest provenance. v1 doesn't yet support
 *     `Alias.TypeName` qualified references (deferred to day 3);
 *     the alias is informational.
 *   - `selective`: when the import uses `{ A, B } from "..."`
 *     syntax, this is the whitelist of names to import from the
 *     target file. Everything else stays private to that file.
 *     `null` means "import all" (the original behaviour).
 */
export interface ImportDecl extends AstNode {
  readonly kind: "ImportDecl";
  readonly path: string;
  readonly alias: string | null;
  readonly selective: readonly string[] | null;
}

/** Union of all top-level declarations supported in Phase 3. */
export type Declaration =
  | KindDecl
  | SubkindDecl
  | RoleDecl
  | RelatorDecl
  | PhaseGroupDecl
  | CategoryDecl
  | MixinDecl
  | RoleMixinDecl
  | ModeDecl
  | QualityDecl
  | CollectiveDecl
  | QuantityDecl
  | RelationDecl
  | HappeningDecl
  | AgentDecl
  | CommitmentDecl
  | UseCaseDecl;

/**
 * Types that can contain members (properties, invariants, events, queries).
 * PhaseGroup is excluded because it only holds phase-name nodes.
 *
 * Note: Category, Mixin and RoleMixin ARE included here. They are abstract
 * (not instantiable) but legitimately carry shared properties and
 * invariants that propagate to their specializers.
 */
export type TypeDecl =
  | KindDecl
  | SubkindDecl
  | RoleDecl
  | RelatorDecl
  | CategoryDecl
  | MixinDecl
  | RoleMixinDecl
  | ModeDecl
  | QualityDecl
  | CollectiveDecl
  | QuantityDecl
  | HappeningDecl
  | AgentDecl
  | CommitmentDecl
  | UseCaseDecl;

// ─── Structural declarations ─────────────────────────────────────────────

/**
 * `kind` declaration — a rigid sortal that supplies identity.
 *
 * In Phase 3 a Kind MAY optionally specialize a Category or a Mixin, which
 * lets Categories group a set of Kinds under a common non-sortal umbrella.
 */
export interface KindDecl extends AstNode {
  readonly kind: "KindDecl";
  readonly name: string;
  /** Optional Category/Mixin parents. Empty array for a top-level Kind. */
  readonly specializes: readonly string[];
  readonly identity: IdentityDecl | null;
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
  /**
   * Phase 20 (Bloque 2 v0.7) — property rename table. Maps a PARENT
   * (upstream-refined) property name to this kind's OWN property
   * name. Consumed by the Obligation 4 verifier
   * (`checkPropertyCorrespondence`) to suppress false W38/W39 when
   * a rename is intentional. Empty array when no renames.
   */
  readonly renames: readonly PropertyRename[];
  /**
   * Phase 24 (RxOCL) — optional trace-level clauses. Each clause
   * constrains the kind's state across an event sequence (always /
   * eventually-within / next). Empty array when no trace block.
   */
  readonly traceClauses: readonly TraceClause[];
}

/**
 * `subkind` declaration — a rigid sortal that inherits identity from a Kind.
 *
 * In Phase 3 a Subkind may specialize either a Kind or another Subkind
 * (transitive chain). The validator walks upward to ensure the chain is
 * acyclic and terminates at a Kind.
 */
export interface SubkindDecl extends AstNode {
  readonly kind: "SubkindDecl";
  readonly name: string;
  readonly specializes: readonly string[];
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
  /** Phase 20 (Bloque 2 v0.7) — property rename table. See KindDecl. */
  readonly renames: readonly PropertyRename[];
  /** Phase 24 (RxOCL) — optional trace-level clauses. See KindDecl. */
  readonly traceClauses: readonly TraceClause[];
}

/**
 * Phase 24 (RxOCL) — a single clause inside a `trace { ... }` block.
 *
 * Three variants:
 *   - `Always`: `always P;`         → for every state reachable by events, P
 *   - `Eventually`: `eventually within N steps: P;`
 *                                    → ∃ event sequence of length ≤N ending in P
 *   - `Next`: `next P;`              → P holds in the state immediately after
 *
 * The `rawExpression` and `parsed` fields mirror `InvariantDecl`: the
 * raw text is preserved for diagnostics, the parsed OCL expression is
 * what the Z3 encoding consumes.
 */
export interface TraceClause extends AstNode {
  readonly kind: "TraceClause";
  /** Which temporal operator. */
  readonly op: "Always" | "Eventually" | "Next";
  /**
   * Step bound for `Eventually`. Required when op === "Eventually"; null
   * for "Always" and "Next" (which have implicit bounds: every state and
   * one step respectively).
   */
  readonly bound: number | null;
  readonly rawExpression: string;
  readonly parsed: OclExpr | null;
}

/** A single `parentName -> ownName;` entry in a `renames { ... }` clause. */
export interface PropertyRename extends AstNode {
  readonly kind: "PropertyRename";
  readonly parentName: string;
  readonly ownName: string;
}

/**
 * `role` declaration — anti-rigid, relationally-dependent sortal.
 *
 * In Phase 3.5 a Role may optionally specialize another Role or a RoleMixin.
 */
export interface RoleDecl extends AstNode {
  readonly kind: "RoleDecl";
  readonly name: string;
  readonly mediatedBy: string;
  readonly ofKind: string;
  /** Optional parent Roles / RoleMixins. Empty array if no parents. */
  readonly specializes: readonly string[];
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/** `relator` declaration — rigid mediator carrying its own identity. */
export interface RelatorDecl extends AstNode {
  readonly kind: "RelatorDecl";
  readonly name: string;
  /**
   * Optional parent Relators. Empty if no parents. Phase 5 addition —
   * allows specialising a Relator (e.g. `relator PremiumContract
   * specializes Contract mediates (...)`) to inherit members.
   */
  readonly specializes: readonly string[];
  readonly mediates: readonly string[];
  readonly identity: IdentityDecl | null;
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/** `phase-group` declaration — disjoint+complete generalization over a Kind. */
export interface PhaseGroupDecl extends AstNode {
  readonly kind: "PhaseGroupDecl";
  readonly name: string;
  readonly ofKind: string;
  readonly phases: readonly PhaseDecl[];
}

/** One phase within a phase-group. No body in Phase 3. */
export interface PhaseDecl extends AstNode {
  readonly kind: "PhaseDecl";
  readonly name: string;
}

// ─── Phase 3 stereotypes ────────────────────────────────────────────────

/**
 * `category` declaration — rigid, non-sortal grouping of Kinds.
 *
 * Non-sortal: does NOT supply identity; instances gain identity from the
 * Kind side of their lineage. Abstract: not directly instantiable. May
 * optionally specialize another Category.
 */
export interface CategoryDecl extends AstNode {
  readonly kind: "CategoryDecl";
  readonly name: string;
  readonly specializes: readonly string[];
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
  /**
   * Phase 19 (Bloque 2 v0.6) — *member-quantified* binding. When
   * non-null, the category's invariants quantify over its members:
   * any navigation `<bearerName>.x` is resolved against the
   * `bearerType`'s effective properties at verification time.
   * Null for ordinary (documentary) categories.
   */
  readonly bearer: BearerBinding | null;
}

/** `where <name>: <Type>` binding on a member-quantified category. */
export interface BearerBinding extends AstNode {
  readonly kind: "BearerBinding";
  readonly name: string;       // the local binding name (e.g. "bearer")
  readonly memberType: string; // the member kind/subkind name
}

/**
 * `mixin` declaration — semi-rigid, non-sortal grouping.
 *
 * Semi-rigid: some instances bear the type necessarily, others
 * contingently. May specialize another Mixin or a Category.
 */
export interface MixinDecl extends AstNode {
  readonly kind: "MixinDecl";
  readonly name: string;
  readonly specializes: readonly string[];
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/**
 * `role-mixin` declaration — anti-rigid, non-sortal generic role.
 *
 * Used when a role-like aspect spans multiple Kinds with different
 * identity criteria. May specialize another RoleMixin or a Mixin.
 */
export interface RoleMixinDecl extends AstNode {
  readonly kind: "RoleMixinDecl";
  readonly name: string;
  readonly specializes: readonly string[];
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/**
 * `mode` declaration — rigid aspect with internal structure, existentially
 * dependent on a bearer.
 *
 * Syntax: `mode BatteryHealth of BatteryPack { ... }`
 *         `mode SpecificHealth of BatteryPack specializes BatteryHealth { ... }`
 *
 * Does NOT declare identity — identity is composed from (bearer, aspect
 * type) by the code generator.
 * In Phase 3.5 a Mode may optionally specialize another Mode.
 */
export interface ModeDecl extends AstNode {
  readonly kind: "ModeDecl";
  readonly name: string;
  readonly ofBearer: string;
  /** Optional parent Modes. Empty array if no parents. */
  readonly specializes: readonly string[];
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/**
 * `quality` declaration — rigid aspect WITHOUT internal structure,
 * existentially dependent on a bearer. Typically a magnitude+unit.
 *
 * Syntax: `quality Temperature of Drone { property celsius: Real; ... }`
 *         `quality Celsius of Drone specializes Temperature { ... }`
 *
 * In Phase 3.5 a Quality may optionally specialize another Quality.
 */
export interface QualityDecl extends AstNode {
  readonly kind: "QualityDecl";
  readonly name: string;
  readonly ofBearer: string;
  /** Optional parent Qualities. Empty array if no parents. */
  readonly specializes: readonly string[];
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/**
 * `collective` declaration — rigid sortal whose identity is supplied by
 * its members. Homeomeric (all members share a single type).
 *
 * Syntax: `collective SensorSuite of Sensor { identity: suiteId; ... }`
 */
export interface CollectiveDecl extends AstNode {
  readonly kind: "CollectiveDecl";
  readonly name: string;
  /** Optional parent Collectives. Empty if no parents. Phase 5 addition. */
  readonly specializes: readonly string[];
  readonly ofMember: string;
  readonly identity: IdentityDecl | null;
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/**
 * `quantity` declaration — rigid sortal representing a material continuum.
 * Not decomposable into identity-bearing subparts without loss.
 *
 * Syntax: `quantity Airframe { identity: frameId; property massKg: Real; }`
 */
export interface QuantityDecl extends AstNode {
  readonly kind: "QuantityDecl";
  readonly name: string;
  /** Optional parent Quantities. Empty if no parents. Phase 5 addition. */
  readonly specializes: readonly string[];
  readonly identity: IdentityDecl | null;
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/**
 * `happening` declaration — Phase 6 UFO-B perdurant (a.k.a. "occurrent").
 *
 * A happening is something that OCCURS in time — a delivery trip, a
 * battery-swap event-as-a-thing, a takeoff. Unlike the DbC `event`
 * member (which is a command/method that mutates state), a
 * happening is a FIRST-CLASS ENTITY whose identity persists in the
 * model: other happenings can precede or overlap it, endurants can
 * participate in it, invariants can reference it.
 *
 * Why a separate stereotype and not "just a Kind"? UFO-B distinguishes
 * endurants (objects that have their full identity at each moment of
 * their existence — a Drone, a Battery) from perdurants (entities that
 * have temporal parts — a Delivery, a Takeoff). Invariants that reason
 * across time (`takeoff precedes landing`) only make sense on the
 * perdurant side. Separating them at the stereotype level prevents
 * category-mixing errors the validator couldn't otherwise catch.
 *
 * Scope in Phase 6:
 *   - Happenings have identity, properties, and invariants — same
 *     shape as a Kind's body.
 *   - A Happening may specialize another Happening (rigid, sortal).
 *   - Relations with new stereotypes `<<participation>>` (endurant
 *     → happening) and `<<precedes>>` (happening → happening) are
 *     supported via the existing RelationDecl infrastructure.
 *   - Temporal constraints (Allen's interval algebra) are NOT yet in
 *     the OCL grammar — scheduled for a dedicated phase once Z3
 *     integer-difference logic encodes them.
 */
export interface HappeningDecl extends AstNode {
  readonly kind: "HappeningDecl";
  readonly name: string;
  /** Optional parent Happenings. Empty if no parents. */
  readonly specializes: readonly string[];
  readonly identity: IdentityDecl | null;
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/**
 * `agent` — Phase 7 UFO-C agentive endurant.
 *
 * Structurally an agent is a Kind: rigid, sortal, supplies identity,
 * admits properties/invariants/events/queries, can specialize a Kind
 * or another Agent. What distinguishes agents at the validator level
 * is S31: they are the only types admissible as the debitor or
 * creditor of a commitment. The split is meaningful for generators
 * too — agents typically get a richer API surface (intent tracking,
 * authorization, etc.).
 *
 * Why not a boolean flag on KindDecl? Because rules like S31 need to
 * pattern-match on the stereotype, and the specialization matrix
 * needs to distinguish "Agent specializes Kind" (allowed) from
 * "Kind specializes Agent" (rejected — you can't upgrade something
 * non-agentive into an agent after the fact). Carrying this as a
 * distinct stereotype keeps every rule expressible in the existing
 * framework.
 */
export interface AgentDecl extends AstNode {
  readonly kind: "AgentDecl";
  readonly name: string;
  /** Optional parent types — may be Agent or Kind. */
  readonly specializes: readonly string[];
  readonly identity: IdentityDecl | null;
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/**
 * `commitment` — Phase 7 UFO-C social relator connecting two agents.
 *
 * Syntax:
 *   commitment DeliveryCommitment
 *     debitor: Courier
 *     creditor: Customer {
 *       identity: commitmentId;
 *       property commitmentId: String;
 *       property description: String;
 *     }
 *
 * Conceptually a commitment is what makes a contract more than a
 * set of references: it says "X owes Y to do P." Phase 7 captures
 * the (debitor, creditor) structure; the predicate P is carried as
 * a free-form property bag rather than a formal obligation. A later
 * phase may upgrade P to an OCL predicate linked to a happening.
 *
 * Lifecycle states (pending / fulfilled / violated) are NOT modeled
 * at the type level in Phase 7. Users express state transitions by
 * declaring happenings that `<<fulfills>>` or `<<violates>>` a
 * commitment — that relational structure generalizes cleanly and
 * keeps the stereotype metadata simple.
 *
 * Identity is supplied (same as a Relator). Specialization: a
 * commitment may specialize another commitment (allowed by matrix)
 * to refine the debitor, creditor, or predicate.
 */
export interface CommitmentDecl extends AstNode {
  readonly kind: "CommitmentDecl";
  readonly name: string;
  /** Optional parent Commitments. */
  readonly specializes: readonly string[];
  /**
   * Name of the debitor type — must resolve to an agent at validator
   * time (S31). Not optional; a commitment without a debitor is
   * meaningless.
   */
  readonly debitor: string;
  /** Name of the creditor type — must resolve to an agent (S31). */
  readonly creditor: string;
  readonly identity: IdentityDecl | null;
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
  /**
   * Phase 7.5 — the formal predicate of the commitment. OCL Boolean
   * expression with the commitment as `self`; references agents via
   * `self.debitor` / `self.creditor` and any declared properties,
   * including Happening-valued ones. At most one predicate per
   * commitment body; absent when the commitment is purely structural.
   */
  readonly predicate: OclClause | null;
}

/**
 * `use-case` — Phase 8 structured happening for modeling user-facing
 * scenarios on top of the UFO-A/B/C stack.
 *
 * Syntax:
 *   use-case BookFlight
 *     actors: (Traveler, BookingSystem)
 *     trigger: SearchRequested
 *     success: ReservationHeld
 *     failure: SearchAbandoned
 *     {
 *       identity: ucId;
 *       property ucId: String;
 *     }
 *
 * Design choices:
 *   - A use-case IS structurally a Happening. It doesn't replace the
 *     happening stereotype, it adds scenario-level metadata (actors +
 *     trigger + outcomes) that generators use to emit scaffolding.
 *     Specialization matrix: UseCase → UseCase or UseCase → Happening
 *     (a use-case can refine a generic happening).
 *
 *   - `actors` carries a LIST of Agent or Role names (enforced by S34).
 *     The list is ordered so primary/secondary actor distinctions can
 *     be reconstructed by position in downstream tooling, but the
 *     validator itself treats actors as an unordered set.
 *
 *   - `trigger` points to a single Happening — the event that kicks
 *     off the scenario. Not a commitment; commitments model outcomes.
 *
 *   - `success` and `failure` point to Commitment declarations that
 *     are fulfilled/violated by scenario outcomes. This keeps the
 *     use-case pure-structural and defers runtime semantics to the
 *     downstream <<fulfills>>/<<violates>> relations introduced in 7.
 *
 * Out of scope for Phase 8:
 *   - Alternative flows (modeled with additional use-cases pointing
 *     at different outcomes)
 *   - extends / includes (would need a cross-use-case relation
 *     vocabulary; a later phase)
 *   - Explicit predicates on the use-case itself (use the commitment
 *     predicate layer instead)
 */
export interface UseCaseDecl extends AstNode {
  readonly kind: "UseCaseDecl";
  readonly name: string;
  /**
   * Optional parent types. May be another UseCase or a Happening —
   * allowed by the Phase 8 extension to the specialization matrix.
   */
  readonly specializes: readonly string[];
  /**
   * Ordered actor list. Each name must resolve to an Agent or a Role
   * at validator time (S34). Empty list is accepted syntactically
   * but semantically unusual; S34 does not require ≥ 1.
   */
  readonly actors: readonly string[];
  /**
   * Name of the triggering Happening. Required; a use-case without a
   * trigger is meaningless in the UFO-B model.
   */
  readonly trigger: string;
  /**
   * Name of the Commitment whose `<<fulfills>>` edge concludes the
   * success path. Required.
   */
  readonly success: string;
  /**
   * Name of the Commitment whose `<<violates>>` edge concludes the
   * failure path. Required.
   */
  readonly failure: string;
  readonly identity: IdentityDecl | null;
  readonly properties: readonly PropertyDecl[];
  readonly invariants: readonly InvariantDecl[];
  readonly queries: readonly QueryDecl[];
  readonly events: readonly EventDecl[];
}

/**
 * `relation` declaration — explicit first-class relationship in Phase 3.5.
 *
 * Syntax: `relation name: <<stereotype>> from Source [mult] to Target [mult];`
 */
export interface RelationDecl extends AstNode {
  readonly kind: "RelationDecl";
  readonly name: string;
  readonly stereotype: string;
  readonly source: string;
  readonly sourceMultiplicity: Multiplicity;
  readonly target: string;
  readonly targetMultiplicity: Multiplicity;
}

/** \`[lower..upper]\`, e.g., \`[1..*]\`, \`[0..1]\`, \`[1]\`, \`[*]\` */
export interface Multiplicity extends AstNode {
  readonly kind: "Multiplicity";
  readonly lower: number;
  readonly upper: number | "*";
}

// ─── Members inside type declarations ────────────────────────────────────

/** `identity: propertyName` — designates the sortal identity criterion. */
export interface IdentityDecl extends AstNode {
  readonly kind: "IdentityDecl";
  readonly propertyName: string;
}

/** `property <n>: <Type>` — a typed property. */
export interface PropertyDecl extends AstNode {
  readonly kind: "PropertyDecl";
  readonly name: string;
  readonly propertyType: TypeRef;
  /**
   * Phase 16b — `internal` marks the property as part of the
   * object's private state. Internal properties:
   *   - Don't appear as parameters of the generated constructor.
   *   - Are initialized to `default` if present, or to the natural
   *     zero of their type (0 / 0.0 / false / "" / None / empty Set).
   * Non-internal properties remain required constructor inputs.
   */
  readonly isInternal: boolean;
  /**
   * Phase 16b — literal default value. When non-null, the generated
   * constructor uses this value to initialize the property (always,
   * if `isInternal`; never for non-internal — the constructor still
   * requires it as a parameter in Phase 16b scope). Restricted to
   * primitive literals, `null` (for Option<T>), and the empty
   * collection sentinel (denoted as `{}` in grammar; modelled as
   * `litKind: "Null"` followed by codegen choosing the empty set).
   */
  readonly defaultValue: PropertyDefault | null;
}

/**
 * Default value for a property. The OCL parser already produces
 * literal nodes; we reuse the same shape so codegen has one path.
 */
export interface PropertyDefault {
  readonly kind: "Integer" | "Real" | "Boolean" | "String" | "Null";
  readonly value: number | boolean | string | null;
}

/** Type reference: primitive, user-defined, Set<T>, Option<T>, or Array<T, N>. */
export type TypeRef = PrimitiveType | NamedType | SetType | OptionType | ArrayType;

export interface PrimitiveType extends AstNode {
  readonly kind: "PrimitiveType";
  readonly name: "Real" | "Integer" | "String" | "Boolean";
}

export interface NamedType extends AstNode {
  readonly kind: "NamedType";
  readonly name: string;
  /**
   * Optional alias qualifier (Paso 5 day 3) — when the user writes
   * `property foo: EKF.AP_NavEKF3;`, `qualifier = "EKF"` and
   * `name = "AP_NavEKF3"`. The qualifier must match an
   * `import "./..." as EKF;` in the same file; otherwise the
   * semantic check reports S40.
   *
   * v1: the qualifier is validated but does NOT participate in
   * type resolution — `EKF.Battery` and bare `Battery` both
   * resolve to the same merged-namespace declaration. The
   * qualifier exists for documentation (explicit intent) and
   * future-proofing (when day 4 introduces real namespace
   * scoping for collision-handling).
   */
  readonly qualifier?: string;
}

/**
 * `Set<T>` — a homogeneous, unordered collection type.
 *
 * Phase 5 introduces Set as the only collection kind (deliberately skipping
 * OCL's Bag and Sequence to keep the type system small). A Set may hold
 * primitive-typed or named-type elements; nested sets (Set<Set<T>>) are
 * rejected at the grammar layer to avoid reasoning about higher-kinded
 * membership.
 *
 * Usage in the DSL:
 *   property batteries: Set<BatteryPack>;
 *
 * Operations are accessed in OCL through the `->` arrow:
 *   self.batteries->size()
 *   self.batteries->forAll(b | b.chargeLevel > 0)
 *   self.batteries->exists(b | b.isCritical())
 */
export interface SetType extends AstNode {
  readonly kind: "SetType";
  readonly elementType: PrimitiveType | NamedType;
}

/**
 * `Option<T>` — explicit optionality. Maps to Rust `Option<T>` and
 * TypeScript `T | null`. The validator's null-check elision (where
 * `<> null` was previously elided as vacuous) becomes a real,
 * compilable check ONLY for properties whose declared type is
 * `Option<T>`; on non-Option properties the elision is preserved
 * because the value is non-null by construction.
 *
 * Set<Option<T>>, Option<Set<T>>, and Option<Option<T>> are rejected
 * at the grammar layer (Phase 16b scope: optional simple cells only).
 */
export interface OptionType extends AstNode {
  readonly kind: "OptionType";
  readonly elementType: PrimitiveType | NamedType;
}

/**
 * `Array<T, N>` — fixed-size homogeneous array. Maps to Rust `[T; N]`
 * (stack-allocated, Copy when T is Copy) and TypeScript
 * `readonly T[]` (with size enforced by invariant, not the type
 * system). N is a positive integer literal known at parse time.
 *
 * Nesting Array-in-Array is allowed: `Array<Array<Real, 6>, 6>` is
 * the canonical way to encode matrices and lowers to `[[f64; 6]; 6]`.
 * Other compositions (`Set<Array<…>>`, `Array<Set<…>>`,
 * `Array<Option<…>>`, `Option<Array<…>>`) are rejected at the builder
 * layer to keep the type system flat.
 *
 * Operations are accessed in OCL through the `->` arrow, same surface
 * as Set:
 *   self.diagonal->size()             → constant N
 *   self.diagonal->forAll(x | pred)
 *   self.diagonal->exists(x | pred)
 */
export interface ArrayType extends AstNode {
  readonly kind: "ArrayType";
  readonly elementType: PrimitiveType | NamedType | ArrayType;
  readonly size: number;
}

import type { OclExpr } from "../ocl/nodes.js";

/** Class-level invariant.
 *  - `rawExpression` preserves the original OCL text.
 *  - `parsed` is the typed OCL AST (null if the OCL sub-parser failed).
 *  - `parseErrors` carries the sub-parser's messages — used by the
 *    validator's S26 rule to surface OCL syntax errors to the user. Empty
 *    when parsing succeeded. */
export interface InvariantDecl extends AstNode {
  readonly kind: "InvariantDecl";
  readonly rawExpression: string;
  readonly parsed: OclExpr | null;
  readonly parseErrors: readonly string[];
}

// ─── Events and queries (DbC core) ───────────────────────────────────────

/**
 * `[override] event name(params) { pre: ...; post: ...; modifies: path, path; }`
 *
 * The `isOverride` flag means "this redefines an event of the same name on
 * a parent type". The validator verifies an inherited member exists and
 * that signatures match structurally. Full contract-level LSP (weaker pre
 * / stronger post) is deferred to Phase 4.
 */
export interface EventDecl extends AstNode {
  readonly kind: "EventDecl";
  readonly name: string;
  readonly isOverride: boolean;
  readonly parameters: readonly ParameterDecl[];
  /**
   * Optional return type. When present, the wrapper returns
   * `Result<T, &'static str>` and post-conditions can reference the
   * special name `result` to constrain the return value. When absent,
   * the wrapper returns `Result<(), &'static str>` — the historical
   * shape, backwards-compatible for `.onto` files that don't declare
   * a return type.
   */
  readonly returnType: TypeRef | null;
  /**
   * Phase 16 (MVP) — declared computational effects this event may
   * perform. Free-form labels (e.g. `Telemetry`, `Log`, `Hardware`,
   * `Persistent`, `Async`). Surfaces as documentation on the
   * generated wrapper and as audit input for data/control coupling
   * analyses (DO-178C/DO-333). A future phase will materialise each
   * label as a Rust trait and thread it as a capability parameter.
   */
  readonly effects: readonly string[];
  /**
   * Phase 16 (MVP) — properties this event READS. Distinct from
   * `modifies` (which lists writes). Declarative only in this
   * iteration; semantic check is informational. Pairs with SPARK's
   * `Global => (Input => …)`.
   */
  readonly reads: readonly string[];
  /**
   * Phase 16 (MVP) — properties this event WRITES. Subsumes the
   * frame information already in `modifies` for events that opt
   * into the explicit form. Pairs with SPARK's `Global => (Output
   * => …)`. The validator does NOT yet enforce that `writes ⊆
   * modifies` — both stay in the AST for downstream consumers.
   */
  readonly writes: readonly string[];
  readonly pre: readonly OclClause[];
  readonly post: readonly OclClause[];
  readonly modifies: readonly ModifiesPath[];
  /**
   * Phase 18 (Bloque 2 v0.5) — structured refinement targets declared
   * via the `refines <qname>(, <qname>)*` clause between the
   * signature and the body. Each target is either a commitment
   * (`eventName === null`) or a parent event (`eventName !== null`).
   * Empty when the event declares no refinement edges.
   */
  readonly refines: readonly RefinesTarget[];
}

/**
 * A single target on an event's `refines` clause. Mirrors the
 * miner's `RefinesTarget` (in src/semantic/refinesMining.ts) but
 * lives in the AST so the inter-stage verifier can consume it
 * directly without re-mining source text.
 */
export interface RefinesTarget extends AstNode {
  readonly kind: "RefinesTarget";
  /** Namespace component before `::`. Always present in v0.5. */
  readonly namespace: string;
  /** The (possibly type) name after `::`. */
  readonly name: string;
  /**
   * The event name after the `.` separator — non-null for Liskov /
   * cross-stage event-refinement targets, null for commitment-
   * discharge targets.
   */
  readonly eventName: string | null;
}

/** `[override] query name(params): ReturnType { body: oclExpr; }` */
export interface QueryDecl extends AstNode {
  readonly kind: "QueryDecl";
  readonly name: string;
  readonly isOverride: boolean;
  readonly parameters: readonly ParameterDecl[];
  readonly returnType: TypeRef;
  readonly body: OclClause | null;
}

/** Typed parameter: `name: Type`. */
export interface ParameterDecl extends AstNode {
  readonly kind: "ParameterDecl";
  readonly name: string;
  readonly parameterType: TypeRef;
}

/** A single pre/post/body clause.
 *  - `rawExpression` preserves original OCL text verbatim.
 *  - `parsed` is the typed OCL AST (null if the OCL sub-parser failed).
 *  - `parseErrors` carries sub-parser messages for S26 reporting. */
export interface OclClause extends AstNode {
  readonly kind: "OclClause";
  readonly rawExpression: string;
  readonly parsed: OclExpr | null;
  readonly parseErrors: readonly string[];
}

/**
 * A path in a `modifies` list, e.g. `self.currentContract` or `drone.battery`.
 * The path root must be `self` or a parameter name; the first segment after
 * `self` may refer to either a directly-declared property OR an inherited
 * property from the specialization chain.
 */
export interface ModifiesPath extends AstNode {
  readonly kind: "ModifiesPath";
  /** Root identifier (either "self" or a parameter name). */
  readonly root: string;
  /** Property segments after the root, e.g. ["currentContract"]. */
  readonly segments: readonly string[];
}
