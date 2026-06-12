import type { Declaration } from "../ast/index.js";
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
export type StereotypeName = "Kind" | "Subkind" | "Role" | "Relator" | "PhaseGroup" | "Category" | "Mixin" | "RoleMixin" | "Mode" | "Quality" | "Collective" | "Quantity" | "Happening" | "Agent" | "Commitment" | "UseCase";
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
/**
 * Look up stereotype metadata for any declaration node. Returns `null` only
 * for unreachable / malformed input; every live `Declaration.kind` has an
 * entry in the lookup tables above.
 */
export declare function metaOf(decl: Declaration): StereotypeMeta;
/** Look up metadata by stereotype name. Used when we have a name string. */
export declare function metaByName(name: StereotypeName): StereotypeMeta;
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
export declare function rigidityLevel(r: Rigidity): number;
/** Is `parent` a legal specialization target for `child` at the Phase 3 grammar level? */
export declare function isAllowedSpecializationTarget(child: StereotypeName, parent: StereotypeName): boolean;
//# sourceMappingURL=stereotypes.d.ts.map