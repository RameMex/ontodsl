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
import type { OclExpr } from "./nodes.js";

export type { OclExpr } from "./nodes.js";
export type {
  OclLiteral,
  OclVarRef,
  OclNav,
  OclCall,
  OclUnary,
  OclBinary,
  OclIf,
  OclBinOp,
  OclNode,
} from "./nodes.js";

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
export function parseOcl(raw: string): OclParseResult {
  const lexResult = oclLexer.tokenize(raw);
  if (lexResult.errors.length > 0) {
    return {
      expr: null,
      errors: lexResult.errors.map(
        (e) => `OCL lex error at offset ${e.offset ?? 0}: ${e.message}`,
      ),
    };
  }

  oclParser.input = lexResult.tokens;
  const cst = oclParser.expr();

  if (oclParser.errors.length > 0) {
    return {
      expr: null,
      errors: oclParser.errors.map(
        (e) =>
          `OCL parse error${e.token?.startLine != null ? ` at line ${e.token.startLine}` : ""}: ${e.message}`,
      ),
    };
  }

  try {
    const expr = buildOclExpr(cst);
    return { expr, errors: [] };
  } catch (err) {
    return {
      expr: null,
      errors: [err instanceof Error ? err.message : String(err)],
    };
  }
}
