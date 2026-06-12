/**
 * Phase 12 Session 2 — hover content formatter.
 *
 * Given a resolved reference + the AST, produce the markdown content
 * shown in the editor's hover popup.
 *
 * Format choices:
 *   - **Bold name** with stereotype in «guillemets» — matches OntoUML
 *     convention used in the diagrams.
 *   - Properties listed inline with their declared type and origin
 *     (own vs from-which-parent, identity flag).
 *   - Inheritance chain shown as `extends Parent1, Parent2`.
 *   - Invariants count rather than full text — full text is verbose
 *     and the user can navigate to the source.
 *
 * Out of scope this session:
 *   - Hover on event names with their pre/post clauses
 *   - Hover on commitment names with their predicate
 *   - Hover on relation declarations
 * These are straightforward to add later; Session 2 focuses on the
 * 90% case which is "hover over a type name".
 */
import { findDeclaration } from "./positionResolver.js";
const STEREOTYPE_LABEL = {
    KindDecl: "Kind",
    SubkindDecl: "Subkind",
    RoleDecl: "Role",
    RelatorDecl: "Relator",
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
    RelationDecl: "Relation",
    PhaseGroupDecl: "PhaseGroup",
};
/**
 * Build hover markdown for a resolved reference. Returns null if no
 * useful content can be produced (e.g. the resolved name doesn't
 * match a known declaration — could happen for `property` hits where
 * the property's name doesn't correspond to any declaration; in
 * those cases we still return the property info, which is useful).
 */
export function formatHover(ast, ref) {
    if (ref.usageKind === "property") {
        return formatPropertyHover(ast, ref.name);
    }
    // typeRef and decl both resolve to the same declaration; show
    // identical info.
    const target = findDeclaration(ast, ref.name);
    if (!target) {
        // Unresolved type reference (the validator would have flagged
        // S1; the user is probably typing). Show what we can.
        return `**${ref.name}** (unresolved)`;
    }
    return formatDeclarationHover(target);
}
function formatDeclarationHover(d) {
    const parts = [];
    const stereotype = STEREOTYPE_LABEL[d.kind];
    parts.push(`**${d.name}** «${stereotype}»`);
    // Inheritance — for body-bearing decls that have a `specializes`
    // field. Different decl kinds wire it slightly differently in the
    // AST; the safest path is the runtime check `"specializes" in d`.
    if ("specializes" in d &&
        Array.isArray(d.specializes) &&
        d.specializes.length > 0) {
        parts.push(`extends ${d.specializes.join(", ")}`);
    }
    // Properties (own only — in Session 2 we keep the hover focused;
    // showing inherited properties would require a TypeIndex walk and
    // a much longer popup).
    if ("properties" in d && d.properties.length > 0) {
        const lines = [];
        lines.push("");
        lines.push("**Properties:**");
        const idName = "identity" in d && d.identity ? d.identity.propertyName : null;
        for (const p of d.properties) {
            const isId = p.name === idName ? " *(identity)*" : "";
            lines.push(`- \`${p.name}: ${formatTypeRef(p.propertyType)}\`${isId}`);
        }
        parts.push(lines.join("\n"));
    }
    // Counts for the other body parts — too verbose to expand in hover.
    const counts = [];
    if ("events" in d && d.events.length > 0) {
        counts.push(`${d.events.length} event${d.events.length === 1 ? "" : "s"}`);
    }
    if ("queries" in d && d.queries.length > 0) {
        counts.push(`${d.queries.length} quer${d.queries.length === 1 ? "y" : "ies"}`);
    }
    if ("invariants" in d && d.invariants.length > 0) {
        counts.push(`${d.invariants.length} invariant${d.invariants.length === 1 ? "" : "s"}`);
    }
    if (counts.length > 0) {
        parts.push("");
        parts.push(counts.join(" · "));
    }
    return parts.join("\n");
}
function formatPropertyHover(ast, propName) {
    // Find which declaration owns this property name. We don't know
    // which declaration the cursor is in — Session 2 walks every decl
    // and uses the first match. For the unusual case of two decls
    // having properties with the same name, the hover may show the
    // wrong owner; a more precise approach would need the resolver to
    // return the owning declaration along with the property name.
    for (const d of ast.declarations) {
        if (!("properties" in d))
            continue;
        const p = d.properties.find((x) => x.name === propName);
        if (p) {
            const idName = "identity" in d && d.identity ? d.identity.propertyName : null;
            const idTag = p.name === idName ? " *(identity)*" : "";
            return (`**${propName}**${idTag}\n\n` +
                `Type: \`${formatTypeRef(p.propertyType)}\`\n\n` +
                `Owner: ${d.name} «${STEREOTYPE_LABEL[d.kind]}»`);
        }
    }
    return `**${propName}** (property)`;
}
function formatTypeRef(t) {
    if (t.kind === "PrimitiveType")
        return t.name;
    if (t.kind === "NamedType")
        return t.name;
    return `Set<${formatTypeRef(t.elementType)}>`;
}
//# sourceMappingURL=hover.js.map