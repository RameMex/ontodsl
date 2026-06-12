/**
 * Pre-extractor for opaque OCL regions — Phase 2.
 *
 * The Onto DSL embeds raw OCL in four places:
 *   1. `invariants { e1; e2; ... }`                 — Phase 1 block form
 *   2. `pre:  <expr>;`                              — inside event bodies
 *   3. `post: <expr>;`                              — inside event bodies
 *   4. `body: <expr>;`                              — inside query bodies
 *
 * All four contain OCL operators (`->`, `<>`, `@pre`, `=`, etc.) that we
 * don't want our structural lexer to deal with until a dedicated OCL
 * sub-parser lands in Phase 4. The strategy is to pre-extract these
 * regions from the source, replacing them with placeholder identifiers the
 * structural lexer can handle.
 *
 * Rewrite mappings:
 *   `invariants { e1; e2; }`  →  `invariants { __INV_BLOCK_N__ ; }`
 *   `pre:  <expr>;`           →  `pre:  __INLINE_OCL_N__ ;`
 *   `post: <expr>;`           →  `post: __INLINE_OCL_N__ ;`
 *   `body: <expr>;`           →  `body: __INLINE_OCL_N__ ;`
 *
 * Placeholders use disjoint numeric namespaces per kind so the builder can
 * route each placeholder to the correct extracted payload.
 *
 * Limitations (documented, accepted for Phase 2):
 *   - An OCL expression must not contain an unescaped `;` or `}` at the
 *     surface (string literals with `;` inside are not supported).
 *   - `modifies:` clauses are NOT pre-extracted — they tokenize cleanly
 *     (identifiers and dots only) and are parsed by the grammar directly.
 */
export interface ExtractedInvariant {
    readonly expression: string;
    readonly sourceOffset: number;
    readonly line: number;
    readonly column: number;
}
export interface ExtractedBlock {
    readonly index: number;
    readonly placeholder: string;
    readonly invariants: readonly ExtractedInvariant[];
    readonly startOffset: number;
    readonly endOffset: number;
}
export interface ExtractedInlineOcl {
    readonly index: number;
    readonly placeholder: string;
    readonly expression: string;
    readonly sourceOffset: number;
    readonly line: number;
    readonly column: number;
}
/**
 * Phase 24 (RxOCL) — a single clause extracted from a `trace { ... }`
 * block. Each clause records the temporal operator, its optional
 * step-bound (only for `eventually within N`), and the OCL expression
 * text. The Z3 verifier consumes these post-build.
 */
export interface ExtractedTraceClause {
    readonly op: "Always" | "Eventually" | "Next";
    readonly bound: number | null;
    readonly expression: string;
    readonly sourceOffset: number;
    readonly line: number;
    readonly column: number;
}
export interface ExtractedTraceBlock {
    readonly index: number;
    readonly placeholder: string;
    readonly clauses: readonly ExtractedTraceClause[];
    readonly startOffset: number;
    readonly endOffset: number;
}
export interface PreExtractResult {
    readonly rewrittenSource: string;
    readonly blocks: readonly ExtractedBlock[];
    readonly inlineOcl: readonly ExtractedInlineOcl[];
    /** Phase 24 (RxOCL) — extracted trace blocks. */
    readonly traceBlocks: readonly ExtractedTraceBlock[];
}
/**
 * Extract all opaque OCL regions from source. Single left-to-right pass.
 *
 * For each position, in priority order:
 *   1. If we're inside a (theoretical) string or comment, skip — but the
 *      DSL only has `//` and `/* *\/` comments, handled by the lexer after
 *      rewriting, so we don't scan them here.
 *   2. If we match `invariants` at a word boundary followed by `{`,
 *      extract the full block.
 *   3. If we match `pre|post|body` at a word boundary followed by `:`,
 *      extract the inline clause up to the first top-level `;`.
 *   4. Otherwise, copy the character through.
 */
export declare function extractOpaqueRegions(source: string): PreExtractResult;
//# sourceMappingURL=preExtract.d.ts.map