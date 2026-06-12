/**
 * Phase 18 (Bloque 2 v0) — mine `// refines:` annotations from .onto sources.
 *
 * The inter-stage refinement verifier needs to know which event refines
 * which upstream commitment. In v0 this lives as a free-form line
 * comment immediately above (or on the same logical block as) an event:
 *
 *     // refines: insulin_pump_discovery::SafeDoseCommitment
 *     event deliverInsulin(dose: Real): Real {
 *       pre:  ...;
 *       post: ...;
 *     }
 *
 * Multiple targets in one annotation are allowed (comma-separated):
 *
 *     // refines: ns_a::CommA, ns_b::CommB
 *
 * The unqualified form (`refines: CommA`) is also accepted — resolution
 * falls back to "any CommitmentDecl with this name in the merged AST".
 *
 * Why source-text mining and not a first-class grammar clause:
 *   v0 has to ship on top of `.onto` the LLM already generates. The
 *   pattern Sonnet uses without prompting is `// refines: …::Name`. A
 *   first-class `refines:` clause (v1) will replace this miner; until
 *   then the regex below is deliberately tight so the miner cannot
 *   confuse `refines:` in OCL strings (single-quoted) with an actual
 *   annotation.
 *
 * Scope of v0 miner:
 *   - Skips any comment inside a quoted string region.
 *   - Looks back up to LOOK_BEHIND_LINES non-blank lines from each
 *     event declaration. This works for the patterns Sonnet produces
 *     (annotation in the heading comment-block) and for hand-written
 *     code that puts the annotation right above the event.
 *   - Tracks the enclosing type-decl block by name so each event
 *     gets reported as `<Type>.<eventName>`. Namespace is the file's
 *     `namespace X;` header.
 *
 * Out of scope (caller's job):
 *   - Validating that the named commitment exists in the merged AST.
 *   - Z3 implication proof. v0 reports coverage only.
 */
export interface RefinesAnnotation {
    /** Absolute path of the source file that carries the annotation. */
    readonly file: string;
    /** Namespace declared at the top of that file. */
    readonly namespace: string;
    /** Name of the enclosing type-decl block, e.g. "InsulinPumpSystem". */
    readonly ownerType: string;
    /** Event name as declared, e.g. "deliverInsulin". */
    readonly eventName: string;
    /**
     * The targets the comment named. Each entry is either a qualified
     * `ns::Commitment` reference or an unqualified `Commitment` name.
     */
    readonly targets: readonly RefinesTarget[];
    /** Line in `file` (1-based) where the event starts. */
    readonly eventLine: number;
    /** Line where the `// refines:` comment was found. */
    readonly commentLine: number;
}
export interface RefinesTarget {
    /** `null` for unqualified references. */
    readonly namespace: string | null;
    readonly name: string;
    /**
     * v0.2 — when the annotation took the shape `ns::Type.eventName`,
     * `eventName` is set to "eventName" and `name` to "Type". This is
     * the cross-stage Liskov pattern: a Design component event names
     * the Requirements event it implements. Null when the annotation
     * is just `ns::Name`.
     */
    readonly eventName: string | null;
}
/**
 * Scan `loadedFiles` and return every `// refines: …` annotation
 * attached to an event declaration. Files are processed independently
 * — there is no cross-file state.
 */
export declare function mineRefinesAnnotations(loadedFiles: readonly string[]): readonly RefinesAnnotation[];
//# sourceMappingURL=refinesMining.d.ts.map