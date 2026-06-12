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
import { createToken, Lexer } from "chevrotain";
// ─── Skipped ─────────────────────────────────────────────────────────────
export const WhiteSpace = createToken({
    name: "WhiteSpace",
    pattern: /\s+/,
    group: Lexer.SKIPPED,
});
export const LineComment = createToken({
    name: "LineComment",
    pattern: /\/\/[^\n\r]*/,
    group: Lexer.SKIPPED,
});
export const BlockComment = createToken({
    name: "BlockComment",
    pattern: /\/\*([^*]|\*(?!\/))*\*\//,
    group: Lexer.SKIPPED,
});
// ─── Keywords (must be defined before Identifier) ────────────────────────
export const AndKw = createToken({
    name: "AndKw",
    pattern: /and(?!\w)/,
});
export const OrKw = createToken({ name: "OrKw", pattern: /or(?!\w)/ });
/**
 * `implies` — OCL material implication. `P implies Q ≡ (not P) or Q`.
 * Lowest precedence of all boolean operators (lower than `or`). We
 * desugar at parse time so codegen/Z3 don't need to handle a new
 * operator. Added 2026-05-20 after Flash 2.5 kept reaching for it
 * during ArduPilot migrations (AP_Baro, AP_Compass).
 */
export const ImpliesKw = createToken({
    name: "ImpliesKw",
    pattern: /implies(?!\w)/,
});
export const NotKw = createToken({ name: "NotKw", pattern: /not(?!\w)/ });
export const IfKw = createToken({ name: "IfKw", pattern: /if(?!\w)/ });
export const ThenKw = createToken({ name: "ThenKw", pattern: /then(?!\w)/ });
export const ElseKw = createToken({ name: "ElseKw", pattern: /else(?!\w)/ });
export const EndifKw = createToken({
    name: "EndifKw",
    pattern: /endif(?!\w)/,
});
export const NullKw = createToken({ name: "NullKw", pattern: /null(?!\w)/ });
export const LetKw = createToken({ name: "LetKw", pattern: /let(?!\w)/ });
export const InKw = createToken({ name: "InKw", pattern: /in(?!\w)/ });
export const TrueKw = createToken({ name: "TrueKw", pattern: /true(?!\w)/ });
export const FalseKw = createToken({
    name: "FalseKw",
    pattern: /false(?!\w)/,
});
export const SelfKw = createToken({ name: "SelfKw", pattern: /self(?!\w)/ });
// ─── @pre ────────────────────────────────────────────────────────────────
export const AtPre = createToken({ name: "AtPre", pattern: /@pre/ });
// ─── Literals ────────────────────────────────────────────────────────────
/** Real must come before Integer so `3.14` doesn't tokenize as `3` then `.14`. */
export const RealLiteral = createToken({
    name: "RealLiteral",
    pattern: /\d+\.\d+/,
});
export const IntegerLiteral = createToken({
    name: "IntegerLiteral",
    pattern: /\d+/,
});
/**
 * String literals accept either single or double quotes — single is
 * the OCL spec convention, double is what the structural layer
 * uses and what most LLMs default to. Both shapes carry the same
 * semantics; the OCL builder strips one outer pair regardless.
 */
export const StringLiteral = createToken({
    name: "StringLiteral",
    pattern: /'[^']*'|"[^"\\]*(?:\\.[^"\\]*)*"/,
});
// ─── Operators ───────────────────────────────────────────────────────────
export const Lte = createToken({ name: "Lte", pattern: /<=/ });
export const Gte = createToken({ name: "Gte", pattern: />=/ });
export const Neq = createToken({ name: "Neq", pattern: /<>/ });
export const Lt = createToken({ name: "Lt", pattern: /</ });
export const Gt = createToken({ name: "Gt", pattern: />/ });
export const Eq = createToken({ name: "Eq", pattern: /=/ });
export const Plus = createToken({ name: "Plus", pattern: /\+/ });
/**
 * `Arrow` = `->` — the OCL collection accessor. MUST be declared before
 * `Minus` so that `batteries->size()` tokenizes as ARROW not MINUS+GT.
 */
export const Arrow = createToken({ name: "Arrow", pattern: /->/ });
export const Minus = createToken({ name: "Minus", pattern: /-/ });
export const Star = createToken({ name: "Star", pattern: /\*/ });
export const Slash = createToken({ name: "Slash", pattern: /\// });
/**
 * `|` — lambda-binder separator in collection iterators:
 *   batteries->forAll(b | b.charge > 0)
 */
export const Pipe = createToken({ name: "Pipe", pattern: /\|/ });
// ─── Punctuation ─────────────────────────────────────────────────────────
export const LParen = createToken({ name: "LParen", pattern: /\(/ });
export const RParen = createToken({ name: "RParen", pattern: /\)/ });
export const Dot = createToken({ name: "Dot", pattern: /\./ });
// ─── Identifier (catch-all, after all keywords) ──────────────────────────
export const Identifier = createToken({
    name: "Identifier",
    pattern: /[a-zA-Z_]\w*/,
});
// ─── Token list (ORDER MATTERS in Chevrotain) ────────────────────────────
export const oclTokens = [
    WhiteSpace,
    LineComment,
    BlockComment,
    // Keywords before Identifier
    AndKw,
    // ImpliesKw before OrKw so the lexer prefers it when both could
    // theoretically apply (in practice they don't overlap, but order
    // matters in Chevrotain even for disjoint patterns).
    ImpliesKw,
    OrKw,
    NotKw,
    IfKw,
    ThenKw,
    ElseKw,
    EndifKw,
    NullKw,
    LetKw,
    InKw,
    TrueKw,
    FalseKw,
    SelfKw,
    // @pre before Dot
    AtPre,
    // Multi-char operators before single-char
    Lte,
    Gte,
    Neq,
    Lt,
    Gt,
    Eq,
    Plus,
    // Arrow (`->`) MUST come before Minus so the `-` in `->` isn't
    // consumed as a unary minus first.
    Arrow,
    Minus,
    Star,
    Slash,
    Pipe,
    LParen,
    RParen,
    Dot,
    // Literals (Real before Integer)
    RealLiteral,
    IntegerLiteral,
    StringLiteral,
    // Catch-all last
    Identifier,
];
export const oclLexer = new Lexer(oclTokens, { recoveryEnabled: false });
//# sourceMappingURL=lexer.js.map