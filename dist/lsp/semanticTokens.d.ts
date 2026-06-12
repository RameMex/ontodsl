/**
 * Phase 14 — Semantic tokens.
 *
 * LSP semantic tokens let the server tell the editor "this span is a
 * type reference, this one is a property declaration, this one is a
 * parameter." The editor's theme maps token types to colors —
 * something TextMate alone (Phase 13) can't do without an AST.
 *
 * Phase 14 emits tokens for the spans where we have precise
 * location information:
 *
 *   - NamedType references (e.g. `BatteryPack` in `property
 *     battery: BatteryPack`) → tokenType "class"
 *   - Property name declarations → tokenType "property" with
 *     "declaration" modifier
 *   - Event/query parameter names → tokenType "parameter"
 *
 * Notably absent: declaration name spans (kind Drone { ... }) and
 * event/query name spans. The AST stores the WHOLE BLOCK as the
 * decl's location, not the name token alone — recovering the
 * name span requires re-tokenizing. The TextMate grammar (Phase 13)
 * already colors capitalized identifiers as types, which catches
 * declaration names; semantic tokens add precision over THAT for
 * the cases TextMate gets wrong (e.g. a NamedType reference and
 * a value that happens to be capitalized).
 *
 * The token format is the LSP-mandated relative encoding:
 *   [deltaLine, deltaStartChar, length, tokenType, tokenModifier]
 * tokens are sorted by position, with each row's deltaLine relative
 * to the previous token's line and deltaStartChar relative to the
 * previous token on the SAME line (or absolute if the line moved).
 */
import type { OntoFile } from "../ast/index.js";
export declare const TOKEN_TYPES: readonly ["class", "property", "parameter"];
export declare const TOKEN_MODIFIERS: readonly ["declaration"];
export interface SemanticToken {
    readonly line: number;
    readonly startChar: number;
    readonly length: number;
    readonly tokenType: number;
    readonly tokenModifiers: number;
}
/**
 * Walk the AST collecting semantic tokens. Result is sorted by
 * (line, startChar) so relative encoding works correctly.
 */
export declare function collectSemanticTokens(ast: OntoFile): SemanticToken[];
/**
 * Convert collected tokens to the LSP-mandated relative-encoded
 * `Uint32Array`-shaped flat array. Each token consumes 5 entries:
 *   [deltaLine, deltaStartChar, length, tokenType, tokenModifiers]
 * Where:
 *   deltaLine     = lines from previous token (0 if same line)
 *   deltaStartChar = chars from previous token's startChar IF same
 *                    line, else absolute char (since the line moved)
 *
 * Tokens MUST be sorted by (line, startChar) before encoding —
 * `collectSemanticTokens` already does this.
 */
export declare function encodeSemanticTokens(tokens: readonly SemanticToken[]): number[];
//# sourceMappingURL=semanticTokens.d.ts.map