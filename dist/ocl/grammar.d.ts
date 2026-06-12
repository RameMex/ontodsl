/**
 * Chevrotain LL(k) grammar for the OCL sub-parser (Phase 4).
 *
 * Grammar (operator precedence, low to high):
 *
 *   expr         ::= orExpr
 *   orExpr       ::= andExpr ('or' andExpr)*
 *   andExpr      ::= notExpr ('and' notExpr)*
 *   notExpr      ::= 'not' notExpr | compareExpr
 *   compareExpr  ::= addExpr (('='|'<>'|'<'|'<='|'>'|'>=') addExpr)?
 *   addExpr      ::= mulExpr (('+' | '-') mulExpr)*
 *   mulExpr      ::= unaryExpr (('*' | '/') unaryExpr)*
 *   unaryExpr    ::= '-' unaryExpr | postfixExpr
 *   postfixExpr  ::= primaryExpr ('.' Identifier ('@pre')? | '.' Identifier '()')*
 *   primaryExpr  ::= '(' expr ')'
 *                  | 'if' expr 'then' expr 'else' expr 'endif'
 *                  | 'null' | 'true' | 'false' | 'self'
 *                  | RealLiteral | IntegerLiteral | StringLiteral
 *                  | Identifier
 */
import { CstParser, type CstNode } from "chevrotain";
export declare class OclParser extends CstParser {
    constructor();
    expr: import("chevrotain").ParserMethod<[], CstNode>;
    /**
     * `implies` — material implication, lowest-precedence boolean.
     * Right-associative per OCL spec: `a implies b implies c` parses
     * as `a implies (b implies c)`. We use MANY here and let the
     * builder fold right-associatively from the CST.
     *
     * Desugared in the builder to `(not lhs) or rhs` so downstream
     * passes (codegen, Z3, type-checker) never see an `implies` node.
     */
    private impliesExpr;
    private orExpr;
    private andExpr;
    private notExpr;
    private compareExpr;
    private addExpr;
    private mulExpr;
    private unaryExpr;
    private postfixExpr;
    /**
     * One step after a base primary: `.member`, `.member()`, or `.member@pre`.
     *
     * This MUST be a separate rule (not inlined with MANY) so that each step
     * gets its own CST node. Without that, Chevrotain aggregates every
     * `callLParen` / `atPre` across ALL steps into a single flat array on
     * the parent node, and the builder can't tell which step owns which
     * suffix. A chain like `self.q().x@pre` would otherwise produce
     * callLParens = [lparen_for_q] and atPres = [atpre_for_x] both at
     * index 0, and the builder would misattribute them.
     */
    private postfixStep;
    /**
     * Collection step: `->method()`, `->method(arg)`, or `->method(x | body)`.
     *
     *   arrowStep ::= '->' Identifier '(' arrowArgs? ')'
     *   arrowArgs ::= Identifier '|' expr   — iterator lambda
     *             | expr                    — single-argument (e.g. includes)
     *
     * The grammar accepts any method name; the builder recognises a small
     * fixed set (`size`, `isEmpty`, `notEmpty`, `includes`, `forAll`,
     * `exists`) and rejects unknown methods. This keeps the grammar simple
     * and lets us add new iterator operators later without touching it.
     *
     * The OR inside `arrowArgs` uses a GATE that peeks at LA(2) to
     * disambiguate `x | body` from a bare expression: if the second token
     * is a pipe we're in lambda mode.
     */
    private arrowStep;
    private arrowArgs;
    private primaryExpr;
}
export declare const oclParser: OclParser;
export type OclExprCst = CstNode;
//# sourceMappingURL=grammar.d.ts.map