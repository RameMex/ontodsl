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
import type { OntoFile } from "../ast/index.js";
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
export declare function renderTypeDiagram(file: OntoFile): string;
//# sourceMappingURL=typeDiagram.d.ts.map