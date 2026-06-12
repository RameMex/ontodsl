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

import type { TypeRef } from "../ast/index.js";

/**
 * Stereotype categories used to drive UI choices (color, shape,
 * grouping). These are stable across the DSL: a Kind is always an
 * endurant, a UseCase is always a scenario, etc. Consumers that
 * render React Flow nodes typically map this enum to a node type
 * (one custom React component per category).
 */
export type StereotypeCategory =
  | "endurant"   // Kind, Subkind, Role, Category, Mixin, RoleMixin, Mode, Quality
  | "agent"      // Agent (UFO-C agentive endurant)
  | "perdurant"  // Happening
  | "scenario"   // UseCase
  | "relator"    // Relator
  | "commitment" // Commitment
  | "collection" // Collective, Quantity
  | "phaseGroup" // PhaseGroup
  | "structural"; // RelationDecl, anything else

/**
 * Node-typed payload — what each node carries in `node.data`.
 *
 * Designed to be self-sufficient for rendering: a custom node
 * component should rarely need to look up the original AST.
 */
export interface OntoNodeData {
  /** Display name (declaration name). */
  readonly name: string;
  /** Full stereotype label (e.g. "Kind", "UseCase"). */
  readonly stereotype: string;
  /** Category for shape/color routing. */
  readonly category: StereotypeCategory;
  /**
   * Properties on the node, with their TypeRef rendered as a string
   * (e.g. "Real", "Set<BatteryPack>"). The renderer can show these
   * in a property table inside the node body.
   */
  readonly properties: ReadonlyArray<{
    readonly name: string;
    readonly type: string;
  }>;
  /** Identity property name when supplied; null otherwise. */
  readonly identityProperty: string | null;
  /**
   * "Header slots" — fields that aren't normal properties but
   * structural metadata (commitment debitor/creditor, use-case
   * actors/trigger/outcomes, role ofKind/mediatedBy, mode/quality
   * bearer, relator participants, phase-group phases).
   */
  readonly headerSlots: ReadonlyArray<{
    readonly label: string;
    readonly value: string;
  }>;
  /** Number of declared invariants (for badge display). */
  readonly invariantCount: number;
}

export interface OntoNode {
  readonly id: string;
  /**
   * React Flow's `type` field. We set this to the category so
   * consumers can register one custom component per category:
   *
   *   const nodeTypes = {
   *     endurant: EndurantNode,
   *     happening: PerdurantNode,
   *     ...
   *   };
   *
   * The `nodeTypes` keys must match the `category` strings.
   */
  readonly type: StereotypeCategory;
  /**
   * Default position. Layout libraries overwrite this. We pick (0,0)
   * so accidental "missing layout" cases produce a visible pile of
   * nodes at origin rather than scattered NaN positions.
   */
  readonly position: { readonly x: number; readonly y: number };
  readonly data: OntoNodeData;
}

/**
 * Edge category — drives stroke style, arrow shape, label position.
 *
 *   - `inheritance` — `Parent <|-- Child`. UML-style hollow triangle
 *     in renderers; in React Flow typically a `step` edge.
 *   - `relation` — explicit RelationDecl with one of the relation
 *     stereotypes (componentOf, mediation, characterization,
 *     participation, fulfills, violates, the 13 Allen relations,
 *     etc.).
 *   - `commitment_endpoint` — implicit edge from agent to commitment
 *     for debitor/creditor.
 *   - `usecase_wiring` — implicit edge from actor/trigger/outcome to
 *     use-case node.
 */
export type EdgeCategory =
  | "inheritance"
  | "relation"
  | "commitment_endpoint"
  | "usecase_wiring";

export interface OntoEdgeData {
  readonly category: EdgeCategory;
  /** Human-readable label shown on the edge (stereotype, role, etc.). */
  readonly label: string;
  /** Source multiplicity, when known (e.g. "1", "0..*", "1..*"). */
  readonly sourceMultiplicity: string | null;
  /** Target multiplicity, when known. */
  readonly targetMultiplicity: string | null;
}

export interface OntoEdge {
  readonly id: string;
  readonly source: string;
  readonly target: string;
  readonly type: EdgeCategory;
  readonly data: OntoEdgeData;
  readonly label: string;
}

export interface OntoGraph {
  readonly nodes: ReadonlyArray<OntoNode>;
  readonly edges: ReadonlyArray<OntoEdge>;
}

// ─── Helpers used by buildReactFlowGraph ─────────────────────────────

export function categoryOf(declKind: string): StereotypeCategory {
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

export function stereotypeLabel(declKind: string): string {
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

export function renderTypeRef(t: TypeRef): string {
  if (t.kind === "PrimitiveType") return t.name;
  if (t.kind === "NamedType") return t.name;
  return `Set<${renderTypeRef(t.elementType)}>`;
}
