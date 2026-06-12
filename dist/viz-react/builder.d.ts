/**
 * Phase 9.5 — buildReactFlowGraph
 *
 * Turns an OntoFile AST into the data shape React Flow consumes.
 * Returns an OntoGraph (nodes + edges) suitable for rendering with
 * a custom React Flow setup. The caller is responsible for layout
 * (typically dagre or elkjs) and for providing node/edge components
 * keyed by the categories we emit.
 *
 * Edge id strategy: we use stable, deterministic ids derived from
 * source + target + category + a per-pair counter. This matters for
 * React Flow's reconciliation — when the user re-renders after a
 * change to the .onto source, edges with the same id are matched
 * by reference and animations continue smoothly. Random UUIDs would
 * cause "everything changed" each render.
 */
import type { OntoFile } from "../ast/index.js";
import { type OntoGraph } from "./types.js";
export declare function buildReactFlowGraph(file: OntoFile): OntoGraph;
//# sourceMappingURL=builder.d.ts.map