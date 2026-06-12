/**
 * Phase 12 Session 3 — completion.
 *
 * Given the document text and a cursor position, infer what kind of
 * completion the user wants and propose a list of items.
 *
 * Context detection works on TEXT not AST — the document mid-edit is
 * usually not parseable. We look at the substring up to the cursor
 * and apply heuristics:
 *
 *   1. After `specializes ` (or `, ` inside a specializes list)
 *      → declaration names (excluding the one being declared)
 *   2. After `: ` in a property/parameter type position
 *      → primitive types + declaration names + `Set<...>`
 *   3. After `self.` (inside a body)
 *      → properties of the enclosing decl
 *   4. At the start of a line in top-level scope
 *      → stereotype keywords (kind, subkind, role, etc.)
 *
 * The heuristics are imperfect — multi-line edits, comments, OCL
 * inside event/invariant blocks all complicate things. Session 3
 * keeps the rules simple and fails quietly when context is unclear
 * (returning empty completions, which the editor treats as "no
 * suggestions" — better than wrong ones).
 *
 * The completion items are LSP CompletionItem objects with:
 *   - label: what shows in the dropdown
 *   - kind: drives the icon (Class for decls, Field for properties,
 *     Keyword for stereotypes, etc.)
 *   - detail: optional one-line annotation (e.g. "kind", "Real")
 *   - documentation: optional longer markdown
 *
 * The module is pure — input is doc text + position + AST (best
 * effort, may be null), output is a list. The server wires it.
 */
import type { OntoFile } from "../ast/index.js";
export interface CompletionItem {
    readonly label: string;
    readonly kind: number;
    readonly detail?: string;
    readonly documentation?: string;
}
/**
 * Compute completions at the cursor position.
 *
 * `ast` is best-effort: if the document parsed cleanly, it's the
 * full AST and we can use it to enumerate decl names. If parse
 * failed (the user is mid-typing), `ast` is null and we fall back
 * to text-only heuristics — which means we can still offer keywords
 * and primitives but not user-defined names.
 */
export declare function computeCompletions(text: string, line: number, character: number, ast: OntoFile | null): readonly CompletionItem[];
//# sourceMappingURL=completion.d.ts.map