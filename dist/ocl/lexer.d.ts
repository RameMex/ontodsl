/**
 * Chevrotain token definitions for the OCL sub-parser (Phase 4).
 *
 * Token set covers the OCL subset needed for DbC clauses:
 *   - Keywords: and, or, not, if, then, else, endif, self, null, true, false
 *   - @pre suffix
 *   - Literals: Integer, Real, StringLiteral
 *   - Operators: = <> < <= > >= + - * /
 *   - Punctuation: ( ) .
 *   - Identifier (catch-all for names)
 *   - Whitespace (skipped)
 */
import { Lexer } from "chevrotain";
export declare const WhiteSpace: import("chevrotain").TokenType;
export declare const LineComment: import("chevrotain").TokenType;
export declare const BlockComment: import("chevrotain").TokenType;
export declare const AndKw: import("chevrotain").TokenType;
export declare const OrKw: import("chevrotain").TokenType;
/**
 * `implies` — OCL material implication. `P implies Q ≡ (not P) or Q`.
 * Lowest precedence of all boolean operators (lower than `or`). We
 * desugar at parse time so codegen/Z3 don't need to handle a new
 * operator. Added 2026-05-20 after Flash 2.5 kept reaching for it
 * during ArduPilot migrations (AP_Baro, AP_Compass).
 */
export declare const ImpliesKw: import("chevrotain").TokenType;
export declare const NotKw: import("chevrotain").TokenType;
export declare const IfKw: import("chevrotain").TokenType;
export declare const ThenKw: import("chevrotain").TokenType;
export declare const ElseKw: import("chevrotain").TokenType;
export declare const EndifKw: import("chevrotain").TokenType;
export declare const NullKw: import("chevrotain").TokenType;
export declare const LetKw: import("chevrotain").TokenType;
export declare const InKw: import("chevrotain").TokenType;
export declare const TrueKw: import("chevrotain").TokenType;
export declare const FalseKw: import("chevrotain").TokenType;
export declare const SelfKw: import("chevrotain").TokenType;
export declare const AtPre: import("chevrotain").TokenType;
/** Real must come before Integer so `3.14` doesn't tokenize as `3` then `.14`. */
export declare const RealLiteral: import("chevrotain").TokenType;
export declare const IntegerLiteral: import("chevrotain").TokenType;
/**
 * String literals accept either single or double quotes — single is
 * the OCL spec convention, double is what the structural layer
 * uses and what most LLMs default to. Both shapes carry the same
 * semantics; the OCL builder strips one outer pair regardless.
 */
export declare const StringLiteral: import("chevrotain").TokenType;
export declare const Lte: import("chevrotain").TokenType;
export declare const Gte: import("chevrotain").TokenType;
export declare const Neq: import("chevrotain").TokenType;
export declare const Lt: import("chevrotain").TokenType;
export declare const Gt: import("chevrotain").TokenType;
export declare const Eq: import("chevrotain").TokenType;
export declare const Plus: import("chevrotain").TokenType;
/**
 * `Arrow` = `->` — the OCL collection accessor. MUST be declared before
 * `Minus` so that `batteries->size()` tokenizes as ARROW not MINUS+GT.
 */
export declare const Arrow: import("chevrotain").TokenType;
export declare const Minus: import("chevrotain").TokenType;
export declare const Star: import("chevrotain").TokenType;
export declare const Slash: import("chevrotain").TokenType;
/**
 * `|` — lambda-binder separator in collection iterators:
 *   batteries->forAll(b | b.charge > 0)
 */
export declare const Pipe: import("chevrotain").TokenType;
export declare const LParen: import("chevrotain").TokenType;
export declare const RParen: import("chevrotain").TokenType;
export declare const Dot: import("chevrotain").TokenType;
export declare const Identifier: import("chevrotain").TokenType;
export declare const oclTokens: import("chevrotain").TokenType[];
export declare const oclLexer: Lexer;
//# sourceMappingURL=lexer.d.ts.map