/**
 * Relation-diagram renderer — emits Mermaid `flowchart` from an AST.
 *
 * Types are nodes, relations are labelled edges. This is the
 * complement to the type diagram: the type diagram shows what types
 * EXIST and HOW they INHERIT; the relation diagram shows how they
 * INTERACT through the 14-ish relation stereotypes the DSL defines
 * (characterization, mediation, componentOf, memberOf,
 * participation, precedes, triggers, the 13 Allen relations,
 * commitsTo, fulfills, violates).
 *
 * Node shape depends on stereotype class:
 *   - Endurants (Kind, Subkind, Role, Agent, Commitment, Quality,
 *     Mode, Collective, Quantity, Category, Mixin, RoleMixin) →
 *     rectangle.
 *   - Perdurants (Happening, UseCase) → stadium (rounded rectangle).
 *   - Relators → hexagon — a deliberate nod to OntoUML's relator
 *     diamond convention, as close as Mermaid gets.
 *
 * Edge labels come straight from the relation stereotype, so a
 * reader fluent in UFO can recognise the diagram's semantics
 * immediately.
 *
 * Degenerate relations (source/target doesn't resolve) are skipped.
 * The synchronous validator has already flagged S11/S23 elsewhere.
 */
import { metaOf } from "../semantic/stereotypes.js";
export function renderRelationDiagram(file) {
    const declByName = new Map();
    for (const d of file.declarations)
        declByName.set(d.name, d);
    const lines = ["flowchart LR"];
    // Nodes: every non-relation declaration becomes a flowchart node.
    // Mermaid's flowchart node syntax is picky — names must be simple
    // identifiers. Our identifiers already are, so we can inline them.
    for (const d of file.declarations) {
        if (d.kind === "RelationDecl")
            continue;
        lines.push(`  ${renderNode(d)}`);
    }
    // Edges: one per RelationDecl. Source and target must resolve, or
    // we skip (validator has already flagged the error).
    for (const d of file.declarations) {
        if (d.kind !== "RelationDecl")
            continue;
        const edge = renderEdge(d, declByName);
        if (edge)
            lines.push(`  ${edge}`);
    }
    // Implicit commitment endpoints: a commitment's debitor and
    // creditor are logically edges too, but they're stored as header
    // slots rather than RelationDecls. We render them as dashed edges
    // with `debitor` / `creditor` labels so the social structure is
    // readable without the user having to also declare an explicit
    // <<commitsTo>> relation.
    for (const d of file.declarations) {
        if (d.kind !== "CommitmentDecl")
            continue;
        if (declByName.has(d.debitor)) {
            lines.push(`  ${d.debitor} -. debitor .-> ${d.name}`);
        }
        if (declByName.has(d.creditor)) {
            lines.push(`  ${d.creditor} -. creditor .-> ${d.name}`);
        }
    }
    // Similarly for use-case actors, trigger, and outcomes. Actors are
    // dashed (participation); trigger is a thick arrow; outcomes have
    // the commitment slot as label.
    for (const d of file.declarations) {
        if (d.kind !== "UseCaseDecl")
            continue;
        for (const actor of d.actors) {
            if (declByName.has(actor)) {
                lines.push(`  ${actor} -. actor .-> ${d.name}`);
            }
        }
        if (declByName.has(d.trigger)) {
            lines.push(`  ${d.trigger} ==> ${d.name}`);
        }
        if (declByName.has(d.success)) {
            lines.push(`  ${d.name} -- success --> ${d.success}`);
        }
        if (declByName.has(d.failure)) {
            lines.push(`  ${d.name} -- failure --> ${d.failure}`);
        }
    }
    return lines.join("\n");
}
function renderNode(d) {
    const stereotype = metaOf(d).name;
    const label = `${d.name}<br/>«${stereotype}»`;
    // Perdurants get stadium shape (rounded).
    if (d.kind === "HappeningDecl" || d.kind === "UseCaseDecl") {
        return `${d.name}(["${label}"])`;
    }
    // Relators get hexagonal (Mermaid: `{{...}}`).
    if (d.kind === "RelatorDecl") {
        return `${d.name}{{"${label}"}}`;
    }
    // Commitments get a subroutine shape to distinguish them from
    // generic relators.
    if (d.kind === "CommitmentDecl") {
        return `${d.name}[["${label}"]]`;
    }
    // PhaseGroups as stadium too — they're life-cycle containers.
    if (d.kind === "PhaseGroupDecl") {
        return `${d.name}(["${label}"])`;
    }
    // Default: rectangle for endurants.
    return `${d.name}["${label}"]`;
}
function renderEdge(r, byName) {
    if (!byName.has(r.source) || !byName.has(r.target))
        return null;
    // `-- label -->` is Mermaid's labelled arrow. Our stereotypes are
    // always simple words, so the label reads cleanly without quoting.
    return `${r.source} -- "«${r.stereotype}»" --> ${r.target}`;
}
//# sourceMappingURL=relationDiagram.js.map