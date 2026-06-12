import type { OclExpr } from "./nodes.js";
export type { OclExpr } from "./nodes.js";
export type { OclLiteral, OclVarRef, OclNav, OclCall, OclUnary, OclBinary, OclIf, OclBinOp, OclNode, } from "./nodes.js";
export interface OclParseResult {
    /** Parsed expression, or null if there were syntax errors. */
    readonly expr: OclExpr | null;
    /** Human-readable parse error messages (empty when expr is non-null). */
    readonly errors: readonly string[];
}
/**
 * Parse a raw OCL expression string.
 *
 * @param raw - The OCL expression text (already pre-extracted from the source).
 */
export declare function parseOcl(raw: string): OclParseResult;
//# sourceMappingURL=index.d.ts.map