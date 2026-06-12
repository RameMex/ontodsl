/**
 * Type-diagram renderer — emits Mermaid `classDiagram` from an AST.
 *
 * Why `classDiagram` instead of a raw flowchart: Mermaid's class
 * syntax has built-in support for stereotypes (`<<Kind>>`,
 * `<<Happening>>`, etc.), inheritance arrows, and per-member type
 * annotations. We're essentially describing the stereotyped types as
 * UML classes, which is exactly what UFO-A/B/C taxonomies look like
 * on paper — this visualization should feel familiar to anyone who
 * has read an OntoUML diagram.
 *
 * Scope: one node per typed declaration (Kind / Subkind / Role /
 * Relator / Category / Mixin / RoleMixin / Mode / Quality /
 * Collective / Quantity / Happening / Agent / Commitment / UseCase).
 * Edges: specialization (inheritance). Relations and commitment
 * endpoints are covered by the relation diagram; keeping type-
 * diagram focus on "what types exist, what do they contain, and how
 * do they inherit" makes each diagram single-purpose and readable.
 *
 * Not in scope here:
 *   - Relation edges (characterization, mediation, participation,
 *     fulfills, …) — in the relation diagram.
 *   - Invariants / event pre-post / predicate OCL — diagrams aren't
 *     the right tool for formal logic.
 *   - Property-as-reference arrows — would clutter the type diagram;
 *     relation edges handle cross-type links explicitly.
 */
import { metaOf } from "../semantic/stereotypes.js";
import { parentsOf } from "../semantic/inheritance.js";
/**
 * Generate a Mermaid `classDiagram` string for the types in `file`.
 *
 * Output shape (example):
 *
 *   ```mermaid
 *   classDiagram
 *     class Drone {
 *       <<Kind>>
 *       +serialNumber: String
 *       +maxPayload: Real
 *       +battery: BatteryPack
 *     }
 *     class DeliveryDrone {
 *       <<Subkind>>
 *     }
 *     Drone <|-- DeliveryDrone
 *   ```
 *
 * Notes:
 *   - Classes without properties emit only the stereotype line. A
 *     few Mermaid versions fuss about empty `{ }` bodies, so we
 *     always write at least one line inside the braces.
 *   - Inheritance is drawn parent-first; UML convention is
 *     `Parent <|-- Child`, and we follow that.
 *   - Unknown-parent references (a name that doesn't resolve) are
 *     silently skipped — the validator already reports S11/S21 for
 *     these, and emitting a dangling edge would confuse the
 *     diagram renderer.
 */
export function renderTypeDiagram(file) {
    const declByName = new Map();
    for (const d of file.declarations)
        declByName.set(d.name, d);
    const lines = ["classDiagram"];
    // Emit every type declaration as a class node. Skip RelationDecl:
    // it's an edge, not a node. PhaseGroup is a container of Phases;
    // we render it as a class with its phases listed as "properties"
    // (they're identifiers, so that mapping reads OK).
    for (const d of file.declarations) {
        if (d.kind === "RelationDecl")
            continue;
        lines.push(...renderClassNode(d));
    }
    // Emit inheritance arrows. `parentsOf` gives the declared parent
    // names for every TypeDecl-shaped declaration; PhaseGroup and
    // Relation are skipped naturally because parentsOf's switch
    // doesn't cover them (they're not TypeDecls).
    for (const d of file.declarations) {
        if (d.kind === "RelationDecl" || d.kind === "PhaseGroupDecl")
            continue;
        const parents = parentsOf(d);
        for (const parent of parents) {
            if (!declByName.has(parent))
                continue; // dangling — validator's problem
            lines.push(`  ${parent} <|-- ${d.name}`);
        }
    }
    return lines.join("\n");
}
/**
 * Render the `class Name { ... }` block for a single declaration.
 *
 * Returns an array of lines (Mermaid is line-oriented). Two lines of
 * output per node minimum: the opening `class X {` and the
 * stereotype `<<Stereotype>>`. Properties are added as UML-style
 * members: `+name: Type`. Happening/Agent/Commitment/UseCase all
 * get the same treatment; their extra header slots (actors, debitor,
 * trigger…) go into the class body as pseudo-members so the
 * diagram captures them.
 */
function renderClassNode(d) {
    const out = [];
    out.push(`  class ${d.name} {`);
    const stereotype = metaOf(d).name;
    out.push(`    <<${stereotype}>>`);
    // Pseudo-members for header slots that aren't plain properties.
    // We prefix with $ so generators can strip them back out later, and
    // they read distinctly from true properties in the diagram.
    switch (d.kind) {
        case "RelatorDecl":
            out.push(`    $mediates: ${d.mediates.join(", ")}`);
            break;
        case "CollectiveDecl":
            out.push(`    $ofMember: ${d.ofMember}`);
            break;
        case "RoleDecl":
            out.push(`    $ofKind: ${d.ofKind}`);
            out.push(`    $mediatedBy: ${d.mediatedBy}`);
            break;
        case "ModeDecl":
        case "QualityDecl":
            out.push(`    $bearer: ${d.ofBearer}`);
            break;
        case "CommitmentDecl":
            out.push(`    $debitor: ${d.debitor}`);
            out.push(`    $creditor: ${d.creditor}`);
            break;
        case "UseCaseDecl":
            out.push(`    $actors: ${d.actors.join(", ") || "-"}`);
            out.push(`    $trigger: ${d.trigger}`);
            out.push(`    $success: ${d.success}`);
            out.push(`    $failure: ${d.failure}`);
            break;
        case "PhaseGroupDecl":
            out.push(`    $ofKind: ${d.ofKind}`);
            for (const p of d.phases)
                out.push(`    +${p.name}`);
            break;
        default:
            break;
    }
    // Real properties. Every stereotype that admits bodies (i.e. has
    // `.properties`) falls here via duck typing — we narrow on the
    // presence of the field because the alternative is a big switch
    // duplicating the list of body-bearing types.
    if ("properties" in d) {
        for (const p of d.properties) {
            out.push(`    ${renderProperty(p)}`);
        }
    }
    out.push("  }");
    return out;
}
function renderProperty(p) {
    return `+${p.name}: ${renderTypeRef(p.propertyType)}`;
}
function renderTypeRef(t) {
    if (t.kind === "PrimitiveType")
        return t.name;
    if (t.kind === "NamedType")
        return t.name;
    if (t.kind === "OptionType") {
        // Mermaid: `~T~` is the generic-bracket notation; reusing it for
        // Option keeps the diagram visually consistent with Set.
        return `Option~${renderTypeRef(t.elementType)}~`;
    }
    // SetType prints nested (Phase 5).
    return `Set~${renderTypeRef(t.elementType)}~`;
}
//# sourceMappingURL=typeDiagram.js.map