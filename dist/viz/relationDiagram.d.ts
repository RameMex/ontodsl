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
import type { OntoFile } from "../ast/index.js";
export declare function renderRelationDiagram(file: OntoFile): string;
//# sourceMappingURL=relationDiagram.d.ts.map