/**
 * LSP (Liskov) contract verifier — Phase 4 rules S29 and S30.
 *
 * For every event override we check two SMT queries:
 *
 *   [S29] Pre-conditions may be weakened, not strengthened.
 *         LSP requires:  parent_pre  →  child_pre
 *         Violated iff:   parent_pre ∧ ¬child_pre  is SAT
 *         Reading: there is a state the parent method accepts (parent_pre
 *         holds) but the child rejects (child_pre fails) — a client that
 *         was safe to call the parent now breaks when substituted.
 *
 *   [S30] Post-conditions may be strengthened, not weakened.
 *         LSP requires:  child_post  →  parent_post
 *         Violated iff:  child_post ∧ ¬parent_post  is SAT
 *         Reading: the child guarantees a state the parent did not
 *         promise — wait no, the opposite: the child may END in a state
 *         the parent would not allow, breaking downstream clients that
 *         relied on `parent_post`.
 *
 * Query bodies don't participate in LSP — they're pure functions and
 * return-type variance is already enforced structurally by S22.
 *
 * Out of scope for Z3 in Phase 4 (the translator emits a warning
 * `W29`/`W30` instead of silently giving up when any of these appear):
 *   - Navigation chains of length ≥ 2 that traverse into reference
 *     types (`self.a.b.c`). A sound encoding would need array theory
 *     plus a heap model; the DSL doesn't need that yet.
 *   - Calls (`self.q()`) — would need uninterpreted functions keyed by
 *     receiver identity plus frame-condition axioms.
 *   - `null` tests on reference-typed navigations.
 *   - Operations that don't type-check (anything marked `unknown` by
 *     the S27/S28 pass).
 *
 * Why opt-in (async) rather than part of `validateSemantics`:
 *   - `z3-solver` is a WASM module; `init()` takes ~100-500 ms and
 *     keeping the main validator synchronous preserves its ergonomics
 *     for editors, LSP clients, test suites, etc.
 *   - Most callers want "does this parse and typecheck?" fast; LSP
 *     verification is a heavier second-stage pass to run on demand.
 */
import type { EventDecl, OntoFile, SourceLocation, TypeDecl, CommitmentDecl } from "../ast/index.js";
export interface LspDiagnostic {
    readonly code: "S29" | "S30" | "W29" | "W30" | "S33" | "W33" | "S34" | "W34_partial" | "S35" | "W35_partial" | "S36" | "S40" | "W40_partial" | "W40_pending";
    readonly message: string;
    readonly location: SourceLocation | null;
}
/**
 * Run Liskov contract verification on every `override event` in `file`.
 *
 * Returns an ordered list of diagnostics. `S29` / `S30` are hard errors
 * (Z3 proved a Liskov violation); `W29` / `W30` are warnings (Z3 could
 * not decide because the clause referred to constructs outside the
 * decidable subset — see module doc).
 *
 * This function reads the typed OCL AST (`.parsed`). If parsing failed
 * earlier (S26), those clauses are silently skipped — you'll get S26
 * reported by the main validator instead, and a W29/W30 wouldn't add
 * useful information on top of it.
 */
export declare function verifyLSPContracts(file: OntoFile): Promise<readonly LspDiagnostic[]>;
/**
 * Verify that every commitment which specializes another commitment
 * carries a predicate AT LEAST AS STRONG as the parent's.
 *
 * Motivation: a commitment C2 that specializes C1 must not promise
 * less than C1. If the customer relies on C1's predicate P1 holding
 * whenever they hold a commitment of type C1-or-C2, then C2's predicate
 * P2 must imply P1. This is the covariant soundness condition for
 * refinement, analogous to S30's post-condition strengthening for
 * events.
 *
 * The SAT query: `child_predicate ∧ ¬parent_predicate` — satisfiable
 * iff there is a state the child commitment would consider fulfilled
 * but the parent would not. If SAT: S33 is reported.
 *
 * Decidable fragment: same as S29/S30 — QF_IDL + booleans + arithmetic
 * primitives. Allen operators translate cleanly (Phase 6.5 did the
 * heavy lifting). Predicates using reference equality, string props,
 * or collection ops emit W33 / companion warnings.
 *
 * Async and opt-in: mirrors `verifyLSPContracts` so the synchronous
 * validator stays fast. The caller typically runs
 *   const combined = [
 *     ...await verifyLSPContracts(ast),
 *     ...await verifyCommitmentPredicates(ast),
 *   ];
 * or invokes only the checks they care about.
 */
export declare function verifyCommitmentPredicates(file: OntoFile): Promise<readonly LspDiagnostic[]>;
/**
 * One event–commitment link to verify. The miner produces these by
 * pairing every `// refines:` annotation found in source text with the
 * declarations it resolves to in the merged AST.
 */
export interface CommitmentDischargeLink {
    /** The event whose pre/post must imply the commitment's predicate. */
    readonly event: EventDecl;
    /** The kind that owns the event (used as the `self` type for translation). */
    readonly eventOwner: TypeDecl;
    /** The commitment whose predicate must be discharged. */
    readonly commitment: CommitmentDecl;
}
/**
 * Verify each (event, commitment) link by SAT-checking
 *   `event.pre ∧ event.post ∧ ¬commitment.predicate`
 * in the decidable arithmetic + Allen fragment. SAT ⇒ S34. UNSAT in the
 * decidable subset (with any clauses skipped flagged via W34_partial)
 * ⇒ discharge proven.
 *
 * Why translate the commitment predicate with `selfTypeName` equal to
 * the EVENT's owner kind (not the commitment itself):
 *   The discharge obligation is a claim about the SYSTEM'S state after
 *   the event runs. The commitment's `self` references its own
 *   properties (commitmentId, …), but the playbook-recommended pattern
 *   is to pick property NAMES that already exist on the system kind
 *   (e.g. `safeMaxDoseUnits`). By translating the predicate against the
 *   event's owner type, `self.safeMaxDoseUnits` resolves to the SAME
 *   Z3 uninterpreted function the event's clauses use. Any predicate
 *   clause that mentions a commitment-only property (e.g.
 *   `self.commitmentId <> null`) falls outside the system kind's
 *   `effectiveProperties` and is reported as a skipped clause; the SAT
 *   check runs on the remainder.
 *
 *   This is the same trick `checkCommitmentPredicatePair` uses for
 *   parent-vs-child commitment specialization — shared Env + shared
 *   selfTypeName so symbols match — adapted to the cross-sortal
 *   (commitment → kind) setting.
 *
 * Caller is responsible for finding the links (mining + name lookup);
 * this function only does the SAT-prove step.
 */
export declare function verifyCommitmentDischarge(file: OntoFile, links: readonly CommitmentDischargeLink[]): Promise<readonly LspDiagnostic[]>;
/**
 * Verify the `trace { ... }` clauses on every KindDecl / SubkindDecl.
 *
 * Three operators handled:
 *   - `always P`           — inductive invariant. For every event E,
 *     prove `(P@pre ∧ event_invariants ∧ E.pre ∧ E.post) ⇒ P_post`.
 *     SAT(P@pre ∧ E ∧ ¬P_post) → [S40] hard violation.
 *   - `next P`             — for every event E, prove
 *     `(invariants ∧ E.pre ∧ E.post) ⇒ P_post`. Same as `always` but
 *     does NOT carry P from the pre-state. Soundly weaker.
 *   - `eventually within N steps: P` — bounded model checking
 *     (deferred; emits W40_pending for now). A full implementation
 *     unfolds N transitions and checks satisfiability.
 *
 * Skipped clauses (translation failures) surface as W40_partial — the
 * caller may choose to escalate via --strict.
 */
export declare function verifyTraceClauses(file: OntoFile): Promise<readonly LspDiagnostic[]>;
/**
 * Verify that every kind/subkind which specializes one or more
 * categories has effective invariants strong enough to entail each
 * category's invariants. SAT(member.invariants ∧ ¬category.invariants)
 * → S35 (violation); UNSAT → ✓.
 *
 * Why use the SAME shared Env for both sides:
 *   Categories are abstract sortals with documentary invariants —
 *   their `self` ranges over the same logical instance as the member
 *   kind's `self` (when the member specializes the category). Both
 *   are translated against `selfTypeName: member.name`; the
 *   category's invariants are interpreted as constraints over the
 *   member's properties via name matching (same trick the discharge
 *   proof uses for the commitment predicate).
 *
 *   If a category invariant mentions a property the member doesn't
 *   have, the clause is reported as skipped and surfaces as
 *   W35_partial — not a failure.
 *
 * What is NOT checked here:
 *   - Categories whose only invariant is the trivially-true
 *     placeholder `true;` (the playbook convention for Discovery
 *     constraint-goals waiting on a bearer). They are filtered out
 *     so the report is informative.
 *   - Categories that no member specializes — see InterStageReport
 *     for an analogous coverage report (W34-style) at the
 *     interStageCheck level.
 */
export declare function verifyCategoryMembership(file: OntoFile): Promise<readonly LspDiagnostic[]>;
//# sourceMappingURL=lspCheck.d.ts.map