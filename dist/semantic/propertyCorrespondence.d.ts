/**
 * Phase 18 (Bloque 2 v0.4) — property-correspondence + modifies-closure
 * check across the decomposition boundary (Requirements → Design).
 *
 * Obligation 4 from PATTERNS_SDLC.md, plain-English form:
 *   "When stage N+1 decomposes a stage N system kind into components,
 *    the union of components' properties must cover the parent's
 *    properties, and the union of components' `modifies` clauses must
 *    cover the parent's `modifies` clauses."
 *
 * Concrete implementation:
 *   For every Liskov coverage edge `parentOwner.parentEvent ←
 *   [child1.evtA, child2.evtB, ...]` produced by v0.2:
 *
 *     A. Per-event modifies closure
 *        modifies(parentEvent)  ⊆  ⋃ modifies(childN.evtX)
 *
 *        For each property name in the parent's modifies list, at
 *        least one refining child event must also modify a property
 *        of the same simple name. Same-name match is the v0.4
 *        heuristic — it matches what humans do reading the file and
 *        what Sonnet produces when it follows the playbook. A v1
 *        upgrade can add an explicit per-component rename table.
 *
 *     B. Per-property correspondence
 *        Every property of parentOwner that the parent's events
 *        modify must appear as a property of at least one refining
 *        child kind (by simple name).
 *
 * Diagnostics:
 *   - W38: a property in parent.modifies has no refining child that
 *          modifies a same-name property (modifies-closure gap).
 *   - W39: a property of parentOwner referenced by any parent event's
 *          modifies/post does not appear as a property of any
 *          refining child kind (property correspondence gap).
 *
 * Both are warnings — partial decomposition is acceptable during
 * authoring. A future `--strict` flag can promote them.
 *
 * Scope of v0.4:
 *   - The check is driven by the Liskov coverage table (v0.2). Parent
 *     events with no refining child are silently skipped (handled by
 *     "no coverage" rather than as a property gap — see v0.2 comments).
 *   - Non-functional / quality properties (latency budgets, etc.)
 *     are treated identically to state properties for v0.4. A v1
 *     upgrade can split them and emit softer warnings for quality.
 */
import type { OntoFile, SourceLocation } from "../ast/index.js";
import type { LiskovCoverageLink } from "./interStageCheck.js";
export interface PropertyCorrespondenceDiagnostic {
    readonly code: "W38" | "W39";
    readonly message: string;
    readonly location: SourceLocation | null;
}
export interface PropertyCorrespondenceReport {
    readonly diagnostics: readonly PropertyCorrespondenceDiagnostic[];
    /**
     * Per-event modifies-closure table: parent event → set of property
     * names that ARE covered by at least one refining child event.
     */
    readonly modifiesCoverage: ReadonlyArray<{
        readonly parentOwner: string;
        readonly parentEvent: string;
        readonly parentModifies: readonly string[];
        readonly covered: readonly string[];
        readonly uncovered: readonly string[];
    }>;
}
export declare function checkPropertyCorrespondence(merged: OntoFile, liskovCoverage: readonly LiskovCoverageLink[]): PropertyCorrespondenceReport;
//# sourceMappingURL=propertyCorrespondence.d.ts.map