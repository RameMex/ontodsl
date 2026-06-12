/**
 * Phase 9.5 — React Flow data shapes.
 *
 * This module produces React-Flow-compatible `nodes[]` and `edges[]`
 * arrays from a typed AST. We deliberately ship NO React, no JSX, no
 * UI runtime — the caller plugs the output into their own React Flow
 * canvas and provides custom node/edge components. That means:
 *
 *   - Zero peer dependencies on React or react-flow.
 *   - The shape we emit matches React Flow v11+ (the `Node` / `Edge`
 *     types from `reactflow`), but we don't import them — we mirror
 *     the structurally-compatible fields and let TS check at the
 *     consumer side.
 *   - `position` is left as `{ x: 0, y: 0 }`. Layout is the consumer's
 *     responsibility — they typically pipe the graph through a
 *     dagre/elkjs layout algorithm. Pre-computing positions here
 *     would lock in a layout strategy and make the output less
 *     reusable.
 *
 * Why a data builder, not a renderer?
 *
 *   1. React Flow's value is interactivity. The interactivity needs
 *      to live in a real React app, with state, hooks, and the rest.
 *      Shipping React components from this DSL would force a peer
 *      dependency on every consumer regardless of whether they want
 *      interactive viz.
 *   2. The data shape is the stable contract. UI conventions evolve;
 *      the underlying graph (which types exist, how they relate)
 *      doesn't.
 *   3. The same data shape can drive non-React-Flow renderers too —
 *      Cytoscape, vis-network, plain SVG. By emitting graph DATA
 *      we cover all those cases with one builder.
 */
// ─── Helpers used by buildReactFlowGraph ─────────────────────────────
export function categoryOf(declKind) {
    switch (declKind) {
        case "AgentDecl":
            return "agent";
        case "HappeningDecl":
            return "perdurant";
        case "UseCaseDecl":
            return "scenario";
        case "RelatorDecl":
            return "relator";
        case "CommitmentDecl":
            return "commitment";
        case "CollectiveDecl":
        case "QuantityDecl":
            return "collection";
        case "PhaseGroupDecl":
            return "phaseGroup";
        case "RelationDecl":
            return "structural";
        case "KindDecl":
        case "SubkindDecl":
        case "RoleDecl":
        case "CategoryDecl":
        case "MixinDecl":
        case "RoleMixinDecl":
        case "ModeDecl":
        case "QualityDecl":
            return "endurant";
        default:
            return "structural";
    }
}
export function stereotypeLabel(declKind) {
    switch (declKind) {
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
        case "PhaseGroupDecl":
            return "PhaseGroup";
        case "RelationDecl":
            return "Relation";
        default:
            return declKind;
    }
}
export function renderTypeRef(t) {
    if (t.kind === "PrimitiveType")
        return t.name;
    if (t.kind === "NamedType")
        return t.name;
    return `Set<${renderTypeRef(t.elementType)}>`;
}
//# sourceMappingURL=types.js.map