/**
 * Public entry point for the OCL sub-parser.
 *
 * `parseOcl(raw)` → { expr, errors }
 *   - expr is null and errors is non-empty if the OCL text is syntactically invalid (S26).
 *   - Otherwise expr is the fully-typed OclExpr AST.
 */
import { oclLexer } from "./lexer.js";
import { oclParser } from "./grammar.js";
import { buildOclExpr } from "./builder.js";
/**
 * Parse a raw OCL expression string.
 *
 * @param raw - The OCL expression text (already pre-extracted from the source).
 */
export function parseOcl(raw) {
    const lexResult = oclLexer.tokenize(raw);
    if (lexResult.errors.length > 0) {
        return {
            expr: null,
            errors: lexResult.errors.map((e) => `OCL lex error at offset ${e.offset ?? 0}: ${e.message}`),
        };
    }
    oclParser.input = lexResult.tokens;
    const cst = oclParser.expr();
    if (oclParser.errors.length > 0) {
        return {
            expr: null,
            errors: oclParser.errors.map((e) => `OCL parse error${e.token?.startLine != null ? ` at line ${e.token.startLine}` : ""}: ${e.message}`),
        };
    }
    try {
        const expr = buildOclExpr(cst);
        return { expr, errors: [] };
    }
    catch (err) {
        return {
            expr: null,
            errors: [err instanceof Error ? err.message : String(err)],
        };
    }
}
//# sourceMappingURL=index.js.map