/**
 * Use-case storyboard renderer — one flowchart per UseCaseDecl,
 * showing the scenario shape at a glance: actors on the left,
 * trigger entering the use-case node, success and failure commitments
 * as parallel outcomes on the right.
 *
 * Unlike the type and relation diagrams, which are whole-file, this
 * emits one diagram per use-case. For files with many use-cases we
 * concatenate the diagrams with a blank line separator; a typical
 * viewer renders each as its own figure. If the file has no
 * use-cases, returns the empty string — the caller can check for
 * this and suppress the section in documentation.
 *
 * Design choice: we concatenate Mermaid blocks without wrapping in
 * ```mermaid fences — that formatting is a markdown concern, not a
 * Mermaid concern. Callers embed the output inside their markdown
 * template with their own fences. This keeps the viz module free
 * of presentation layer mixing.
 */
import type { OntoFile } from "../ast/index.js";
export declare function renderUseCaseDiagrams(file: OntoFile): string;
//# sourceMappingURL=useCaseDiagram.d.ts.map