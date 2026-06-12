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
export {};
//# sourceMappingURL=nodes.js.map