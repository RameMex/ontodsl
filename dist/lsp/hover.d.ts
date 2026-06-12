/**
 * Phase 12 Session 2 — hover content formatter.
 *
 * Given a resolved reference + the AST, produce the markdown content
 * shown in the editor's hover popup.
 *
 * Format choices:
 *   - **Bold name** with stereotype in «guillemets» — matches OntoUML
 *     convention used in the diagrams.
 *   - Properties listed inline with their declared type and origin
 *     (own vs from-which-parent, identity flag).
 *   - Inheritance chain shown as `extends Parent1, Parent2`.
 *   - Invariants count rather than full text — full text is verbose
 *     and the user can navigate to the source.
 *
 * Out of scope this session:
 *   - Hover on event names with their pre/post clauses
 *   - Hover on commitment names with their predicate
 *   - Hover on relation declarations
 * These are straightforward to add later; Session 2 focuses on the
 * 90% case which is "hover over a type name".
 */
import type { OntoFile } from "../ast/index.js";
import type { ResolvedRef } from "./positionResolver.js";
/**
 * Build hover markdown for a resolved reference. Returns null if no
 * useful content can be produced (e.g. the resolved name doesn't
 * match a known declaration — could happen for `property` hits where
 * the property's name doesn't correspond to any declaration; in
 * those cases we still return the property info, which is useful).
 */
export declare function formatHover(ast: OntoFile, ref: ResolvedRef): string | null;
//# sourceMappingURL=hover.d.ts.map