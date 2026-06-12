import type { Declaration, EventDecl, PropertyDecl, QueryDecl, TypeDecl } from "../ast/index.js";
/**
 * Inheritance resolution — Phases 3 through 3.5.
 *
 * Phase 3b introduced single-parent `specializes`; Phase 3.5 extended it
 * to multi-parent `specializes X, Y` across Kind / Subkind / Role /
 * Category / Mixin / RoleMixin / Mode / Quality. The functions here:
 *
 *   - `parentsOf(decl)`  : declared parents of a type as a string array
 *                          (empty for types that don't support
 *                          specialization in Phase 3.5: Relator,
 *                          Collective, Quantity).
 *
 *   - `detectCycles(idx)`: find every type that sits on a specialization
 *                          cycle. Multi-parent: we follow every arc and
 *                          paint a grey-set during DFS.
 *
 *   - `chainOf(name, idx)`: return a linearization of the type's
 *                          ancestry, root-first, self last. Uses the
 *                          Python-style **C3 linearization** algorithm
 *                          to produce a deterministic, monotonic total
 *                          order over the DAG. Returns `null` for
 *                          cyclic or inconsistently-ordered hierarchies.
 *
 *   - `effective{Properties,Events,Queries}(name)`: walk the MRO chain
 *                          and merge members. Children override parents
 *                          on name collisions (S22 then flags shadowing
 *                          that isn't marked `override`).
 */
/**
 * Index used by the inheritance functions. Only types that can appear on
 * a specialization chain are stored here — everything else (Phase groups,
 * non-type declarations) is skipped by the callers.
 */
export interface TypeIndex {
    readonly byName: ReadonlyMap<string, Declaration>;
    readonly typeDecls: ReadonlyMap<string, TypeDecl>;
}
/**
 * Return the declared `specializes` parents for a type node.
 * Roles and aspects return empty array because they don't carry a
 * `specializes` field in Phase 3.
 */
export declare function parentsOf(decl: TypeDecl): readonly string[];
/**
 * Return every type that sits on a specialization cycle.
 *
 * We walk each type and follow parent pointers, colouring nodes white ->
 * grey -> black. A grey hit is a cycle; we record every grey name we saw
 * on the way to the hit so the reporter can attribute the cycle precisely.
 */
export declare function detectCycles(idx: TypeIndex): ReadonlySet<string>;
/**
 * Build the specialization chain for `name` as an array with the ROOT
 * (most general) ancestor first and the type itself last.
 *
 * Returns `null` when:
 *   - the type doesn't exist, or
 *   - the chain encounters a type that isn't registered (unresolved
 *     parent — S21 handles that error), or
 *   - the chain is cyclic (cycles are handled by S15).
 *
 * Callers that only need safe iteration should pre-filter with
 * detectCycles() to avoid paying to discover cycles twice.
 */
export declare function chainOf(name: string, idx: TypeIndex, cycleSet?: ReadonlySet<string>): readonly TypeDecl[] | null;
/**
 * Effective (inherited + own) properties of a type, keyed by name.
 * Children override parents on name collisions — but S22/S23 will flag
 * property shadowing because properties don't support `override`.
 */
export declare function effectiveProperties(name: string, idx: TypeIndex, cycleSet: ReadonlySet<string>): ReadonlyMap<string, {
    readonly declaredOn: string;
    readonly prop: PropertyDecl;
}>;
/** Effective events (for override / LSP checks). */
export declare function effectiveEvents(name: string, idx: TypeIndex, cycleSet: ReadonlySet<string>): ReadonlyMap<string, {
    readonly declaredOn: string;
    readonly event: EventDecl;
}>;
/** Effective queries. */
export declare function effectiveQueries(name: string, idx: TypeIndex, cycleSet: ReadonlySet<string>): ReadonlyMap<string, {
    readonly declaredOn: string;
    readonly query: QueryDecl;
}>;
/**
 * Given a declaration, return its DIRECT (i.e. own) events keyed by name.
 * Convenience wrapper used by the override rules.
 */
export declare function ownEvents(decl: TypeDecl): ReadonlyMap<string, EventDecl>;
/** Given a declaration, return its DIRECT (i.e. own) queries keyed by name. */
export declare function ownQueries(decl: TypeDecl): ReadonlyMap<string, QueryDecl>;
//# sourceMappingURL=inheritance.d.ts.map