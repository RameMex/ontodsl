/**
 * Phase 18 (Bloque 2 v0) — inter-stage refinement coverage check.
 *
 * Verifies that every commitment declared in an upstream stage (Discovery
 * for the current playbook) has at least one event in a downstream stage
 * that names it in a `// refines: <ns>::<Commitment>` annotation.
 *
 * This is Obligation 1 from PATTERNS_SDLC.md, but ONLY the coverage half
 * — the Z3 implication proof that the event actually discharges the
 * commitment's predicate is deferred to v0.1. Coverage is the cheaper
 * and structurally prior check: there is no point asking Z3 to prove
 * something if no one has even claimed to discharge it.
 *
 * Diagnostic codes:
 *   - W34: commitment with no refiner found anywhere in the merged AST.
 *          Indicates either an unmet obligation OR (more commonly during
 *          authoring) a missing annotation on what IS a refiner.
 *   - W35: a `refines:` annotation names a commitment that does not
 *          exist in the merged AST. Could be a typo, a deleted
 *          commitment, or a namespace prefix that doesn't resolve.
 *
 * Both codes are warnings, not hard errors: the playbook expects
 * authors to add annotations iteratively, so a missing one shouldn't
 * fail the build. A future flag `--inter-stage-strict` can promote
 * them to hard.
 *
 * Output also includes a structured `coverage` report so the CLI can
 * print a positive "discharged" message for every successful link —
 * the user wants to see what worked, not just what didn't.
 */
import type { OntoFile, CommitmentDecl, EventDecl, SourceLocation, TypeDecl } from "../ast/index.js";
import type { RefinesAnnotation } from "./refinesMining.js";
export interface DischargeLink {
    readonly event: EventDecl;
    readonly eventOwner: TypeDecl;
    readonly commitment: CommitmentDecl;
}
export interface InterStageDiagnostic {
    readonly code: "W34" | "W35" | "W36" | "W37";
    readonly message: string;
    readonly location: SourceLocation | null;
}
/**
 * One entry per (commitment, refining-event) link confirmed by an
 * annotation. The verifier prints these in the verification report so
 * the user can see the dependency graph at a glance.
 */
export interface CoverageLink {
    readonly commitmentName: string;
    readonly commitmentNamespace: string | null;
    readonly refiners: ReadonlyArray<{
        readonly namespace: string;
        readonly ownerType: string;
        readonly eventName: string;
        readonly file: string;
        readonly line: number;
    }>;
}
export interface InterStageReport {
    readonly diagnostics: readonly InterStageDiagnostic[];
    /** Every commitment in the merged AST, with the events that claim to refine it. */
    readonly coverage: readonly CoverageLink[];
    /**
     * v0.1 — the resolved event↔commitment pairs ready for the Z3
     * discharge proof. Only includes pairs where both the event and the
     * commitment were found in the merged AST (W35 cases are excluded).
     * The CLI passes this list to `verifyCommitmentDischarge`.
     */
    readonly dischargeLinks: readonly DischargeLink[];
    /**
     * v0.2 — Liskov / decomposition coverage. For every event declared
     * on an upstream type that any annotation references via
     * `ns::ParentType.eventName`, lists the downstream events that
     * implement it. Liskov rules between parent and child events are
     * already checked intra-merged-AST by `verifyLSPContracts` when
     * the child uses `override event`; this table is the explicit
     * record of which downstream components claim to refine which
     * upstream event.
     */
    readonly liskovCoverage: readonly LiskovCoverageLink[];
}
/**
 * One entry per parent event that was referenced by at least one
 * `// refines: ns::ParentType.eventName` annotation. Entries with an
 * empty `implementers` array are EXCLUDED — they're not real
 * Liskov edges, just events the downstream chose not to refine.
 */
export interface LiskovCoverageLink {
    /** The upstream type that owns the parent event. */
    readonly parentOwner: string;
    /** Event on the parent. */
    readonly parentEvent: string;
    /** Downstream events claiming to implement it. */
    readonly implementers: ReadonlyArray<{
        readonly namespace: string;
        readonly ownerType: string;
        readonly eventName: string;
        readonly file: string;
        readonly line: number;
    }>;
}
/**
 * Run the coverage check on a merged AST + a set of mined annotations.
 *
 * The merged AST is what `parseFile()` returns: declarations from every
 * transitively-imported file collapsed into one list. The annotations
 * come from `mineRefinesAnnotations()` run over the same loadedFiles.
 *
 * Resolution rules for the target side of an annotation:
 *   - Qualified `ns::Name` → look up the commitment whose `name` is
 *     Name. (Namespace check is best-effort because the merged AST
 *     loses per-decl namespace provenance in v0 of the multi-file
 *     resolver; if multiple commitments share a Name across
 *     namespaces, all of them are linked — overly permissive but the
 *     playbook doesn't currently allow same-name commitments anyway.)
 *   - Unqualified `Name` → same lookup.
 *
 * The chosen "permissive resolution" is fine for v0: the goal is
 * coverage, and a coverage report is allowed to over-attribute. v1
 * will tighten this once each merged Decl tracks its origin namespace.
 */
export declare function checkInterStageRefinement(merged: OntoFile, annotations: readonly RefinesAnnotation[]): InterStageReport;
//# sourceMappingURL=interStageCheck.d.ts.map