import type { OntoFile } from "../ast/index.js";
export interface ParseError {
    readonly stage: "lex" | "parse" | "extract" | "build" | "semantic";
    readonly message: string;
    readonly line?: number;
    readonly column?: number;
    /** Only set for semantic-stage errors; carries the S## rule code. */
    readonly code?: string;
}
export interface ParseResult {
    readonly ast: OntoFile | null;
    readonly errors: readonly ParseError[];
}
export interface ParseOptions {
    /** If true (default), run semantic validation after building the AST. */
    readonly validateSemantics?: boolean;
}
/**
 * Parse `.onto` source text into a typed AST.
 *
 * Pipeline:
 *   1. Pre-extract opaque OCL regions (invariants blocks + pre/post/body)
 *   2. Lex the rewritten source
 *   3. Parse tokens into a CST
 *   4. Build typed AST, re-injecting pre-extracted OCL
 *   5. Run semantic validator (can be disabled via options)
 *
 * Errors at any stage are collected; a non-null AST is only returned if
 * stages 1–4 succeeded. Semantic errors do not null out the AST — they
 * describe an AST that parsed structurally but fails ontological rules.
 */
export declare function parse(source: string, options?: ParseOptions): ParseResult;
//# sourceMappingURL=parse.d.ts.map