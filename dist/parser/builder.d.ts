import type { CstNode } from "chevrotain";
import type { OntoFile } from "../ast/index.js";
import type { ExtractedBlock, ExtractedInlineOcl, ExtractedTraceBlock } from "./preExtract.js";
/**
 * Build a typed AST from a Chevrotain CST plus the pre-extracted OCL maps.
 *
 * Phase 3 early errors (raised here, before semantic validation runs):
 *   - Subkind/Role may not declare their own `identity:`.
 *   - Category/Mixin/RoleMixin/Mode/Quality may not declare `identity:`.
 *   - Collective/Quantity may declare `identity:` but are not required to
 *     at this stage — mandatory-identity is a semantic rule (S18).
 *
 * Duplicate identity within a single body is caught here too (S14 defense
 * in depth — the grammar already allows only zero or more identity
 * members so this is a belt-and-suspenders check).
 */
export declare function buildAst(cst: CstNode, blocks: readonly ExtractedBlock[], inlineOcl: readonly ExtractedInlineOcl[], traceBlocks?: readonly ExtractedTraceBlock[]): OntoFile;
//# sourceMappingURL=builder.d.ts.map