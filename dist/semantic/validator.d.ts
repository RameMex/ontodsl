import type { CategoryDecl, Declaration, MixinDecl, OntoFile, QuantityDecl, RoleMixinDecl, SourceLocation, SubkindDecl, TypeDecl } from "../ast/index.js";
import { type TypeIndex } from "./inheritance.js";
import { metaByName } from "./stereotypes.js";
export interface SemanticError {
    readonly code: string;
    readonly message: string;
    readonly location: SourceLocation | null;
}
/**
 * Semantic validator — Phase 3.
 *
 * Rules (Phase 2 set retained, new rules start at S15):
 *
 *   [S1]  Globally unique top-level declaration names.
 *   [S2]  Kind / Relator declares identity.
 *   [S3]  Identity refers to an existing property of the same type.
 *   [S4]  Subkind.specializes resolves to a Kind OR a Subkind (chain ends
 *         at a Kind — checked by the cycle + chainOf utilities).
 *   [S5]  Role.mediatedBy resolves to a Relator.
 *   [S6]  Role.ofKind resolves to a Kind (not a subkind).
 *   [S7]  Relator.mediates has ≥2 participants, all existing, all distinct.
 *   [S8]  PhaseGroup.ofKind resolves to a Kind (not a subkind).
 *   [S9]  Within a phase-group, phase names are distinct.
 *   [S10] Within a single type BODY, property/event/query names are
 *         distinct.
 *   [S11] Named types in property/parameter/return position resolve.
 *   [S12] Event.modifies paths: root is `self` or a parameter name.
 *   [S13] Event.modifies first segment refers to a property of the owning
 *         type OR an inherited property in the specialization chain.
 *   [S14] Duplicate identity within a single body (builder catches this).
 *
 * Phase 3 additions:
 *   [S15] No specialization cycle.
 *   [S16] Rigidity compatibility across specialization (monotone: child
 *         rigidity level ≥ parent rigidity level).
 *   [S17] Category / Mixin / RoleMixin / Mode / Quality may not declare
 *         identity (enforced in the builder for early-fail; re-checked here
 *         for defense in depth).
 *   [S18] Collective / Quantity must declare identity.
 *   [S19] Mode / Quality bearer exists and is a sortal host (Kind, Subkind,
 *         Relator, Collective, Quantity; not an aspect, non-sortal, or role).
 *   [S20] Collective.ofMember resolves to a declared type.
 *   [S21] `specializes` target exists AND the pair (child-stereotype,
 *         parent-stereotype) is allowed by the Phase 3 matrix.
 *   [S22] `override event/query` has a matching inherited member with
 *         matching signature; an event/query that shadows an inherited
 *         member without `override` is rejected.
 *   [S23] Relational endpoints resolve to declared types.
 *   [S24] Relational stereotypes apply to correct endpoint types.
 *   [S25] Multiplicity validity (lower <= upper).
 *
 * Phase 4 additions (OCL sub-parser and contract verification):
 *   [S26] OCL syntactic validity — every invariant/pre/post/body clause
 *         must parse as an OCL expression; syntax errors surface here.
 *   [S27] OCL name/nav resolution: every `object.property` chain refers
 *         to a real property of the static type; every `object.call()`
 *         refers to an inherited zero-arity query.
 *   [S28] OCL type compatibility (arithmetic/comparison/boolean).
 *   [S29] Override pre-conditions may not be strengthened (Liskov):
 *         child_pre must be implied by parent_pre, verified via Z3.
 *   [S30] Override post-conditions may not be weakened (Liskov):
 *         parent_post must be implied by child_post, verified via Z3.
 *   When Z3 cannot decide (unsupported constructs in the expression),
 *   the validator emits `W29`/`W30` warnings instead of errors.
 */
export declare function validateSemantics(file: OntoFile): readonly SemanticError[];
export interface DeclarationIndex extends TypeIndex {
    readonly byName: ReadonlyMap<string, Declaration>;
    readonly kinds: ReadonlySet<string>;
    readonly subkinds: ReadonlySet<string>;
    readonly roles: ReadonlySet<string>;
    readonly relators: ReadonlySet<string>;
    readonly phaseGroups: ReadonlySet<string>;
    readonly typeDecls: ReadonlyMap<string, TypeDecl>;
    readonly file: OntoFile;
}
export declare function buildDeclarationIndex(file: OntoFile, errors?: SemanticError[]): DeclarationIndex;
export type { CategoryDecl, MixinDecl, RoleMixinDecl, QuantityDecl, SubkindDecl, };
export { metaByName };
//# sourceMappingURL=validator.d.ts.map