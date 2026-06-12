/**
 * Phase 9.5 — React Flow data builder. Public API.
 *
 * Usage:
 *   import { parse, buildReactFlowGraph } from "onto-dsl";
 *
 *   const { ast } = parse(source);
 *   const { nodes, edges } = buildReactFlowGraph(ast);
 *
 *   // Then in your React app:
 *   //   <ReactFlow nodes={layoutedNodes} edges={edges}
 *   //              nodeTypes={nodeTypes} edgeTypes={edgeTypes} />
 *
 * The output has zero React deps. Layout is the consumer's job;
 * pipe through dagre / elkjs / d3-hierarchy / a hand-rolled
 * algorithm depending on the size and shape of the graph.
 */

export { buildReactFlowGraph } from "./builder.js";
export {
  categoryOf,
  stereotypeLabel,
  type EdgeCategory,
  type OntoEdge,
  type OntoEdgeData,
  type OntoGraph,
  type OntoNode,
  type OntoNodeData,
  type StereotypeCategory,
} from "./types.js";
