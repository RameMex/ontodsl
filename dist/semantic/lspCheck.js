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
import { init } from "z3-solver";
import { chainOf, detectCycles, effectiveProperties, } from "./inheritance.js";
import { buildDeclarationIndex } from "./validator.js";
// ─── Public entry ──────────────────────────────────────────────────────
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
export async function verifyLSPContracts(file) {
    const { Context } = await init();
    const ctx = Context("lsp");
    const diagnostics = [];
    // Reuse the validator's indexer. We don't care about its S1-duplicate
    // output here (caller has already run validateSemantics if they want
    // those errors).
    const localErrors = [];
    const idx = buildDeclarationIndex(file, localErrors);
    const cycleSet = detectCycles(idx);
    for (const d of idx.typeDecls.values()) {
        const chain = chainOf(d.name, idx, cycleSet);
        if (!chain)
            continue;
        // `chain` is root-first; strip self from the end to get ancestors.
        const ancestors = chain.slice(0, chain.length - 1);
        for (const ownEvent of d.events) {
            if (!ownEvent.isOverride)
                continue;
            // Find the nearest ancestor that declares an event with this name.
            let parentEvent = null;
            let parentOwner = null;
            for (let i = ancestors.length - 1; i >= 0; i -= 1) {
                const anc = ancestors[i];
                const hit = anc.events.find((e) => e.name === ownEvent.name);
                if (hit) {
                    parentEvent = hit;
                    parentOwner = anc;
                    break;
                }
            }
            if (!parentEvent || !parentOwner)
                continue; // S22 already handles this.
            await checkEventPair(ctx, d, ownEvent, parentOwner, parentEvent, idx, cycleSet, diagnostics);
        }
    }
    return diagnostics;
}
// ─── Phase 7.75: Commitment predicate LSP (S33) ───────────────────────
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
export async function verifyCommitmentPredicates(file) {
    const { Context } = await init();
    const ctx = Context("cpred");
    const diagnostics = [];
    const localErrors = [];
    const idx = buildDeclarationIndex(file, localErrors);
    const cycleSet = detectCycles(idx);
    for (const d of idx.typeDecls.values()) {
        if (d.kind !== "CommitmentDecl")
            continue;
        if (d.predicate === null)
            continue; // nothing to strengthen; nothing to check
        const chain = chainOf(d.name, idx, cycleSet);
        if (!chain)
            continue;
        const ancestors = chain.slice(0, chain.length - 1);
        // Find the nearest ancestor commitment that declares a predicate.
        // If no ancestor has one, there's no LSP constraint on the child —
        // it's free to promise whatever.
        let parentOwner = null;
        for (let i = ancestors.length - 1; i >= 0; i -= 1) {
            const anc = ancestors[i];
            if (anc.kind === "CommitmentDecl" && anc.predicate !== null) {
                parentOwner = anc;
                break;
            }
        }
        if (!parentOwner)
            continue;
        await checkCommitmentPredicatePair(ctx, d, parentOwner, idx, cycleSet, diagnostics);
    }
    return diagnostics;
}
/**
 * Run the one SAT query for a (parent, child) commitment-predicate
 * pair. Returns diagnostics by appending to `out`.
 *
 * Both predicates are translated under a SHARED environment whose
 * `selfTypeName` is the child commitment. The child's properties are
 * `effectiveProperties`, which walks the specialization chain and
 * therefore includes whatever properties the parent declares. This is
 * the same trick used by event LSP: parent and child share a symbol
 * table so their formulas interact.
 *
 * Note on semantics: commitment predicates are invariant-context
 * (no @pre, Boolean). The Z3 encoding is almost free once Phase 6.5's
 * Allen translator is wired up — most real predicates are combinations
 * of Allen relations and null checks.
 */
async function checkCommitmentPredicatePair(z3, child, parent, idx, cycleSet, out) {
    if (child.predicate === null || parent.predicate === null)
        return;
    const env = new Env(z3);
    const envCtx = {
        env,
        selfTypeName: child.name,
        idx,
        cycleSet,
        // Commitment predicates have no parameters in Phase 7.5.
        params: [],
    };
    // Translate both predicates. `translateConjunction` accepts a list;
    // we wrap each single clause in a one-element array so the partial
    // translation machinery (skipped reasons, axiom accumulation) is
    // shared with event LSP.
    const childT = translateConjunction([child.predicate], envCtx);
    const parentT = translateConjunction([parent.predicate], envCtx);
    const allSkipped = [...childT.skipped, ...parentT.skipped];
    if (childT.translated === 0 && parentT.translated === 0) {
        out.push({
            code: "W33",
            message: `[W33] commitment '${child.name}' predicate could not be verified ` +
                `LSP-compatible with inherited predicate from '${parent.name}' — ` +
                `${describeSkipped(allSkipped)}`,
            location: child.location,
        });
        return;
    }
    const solver = new z3.Solver();
    for (const ax of env.intervalAxioms) {
        solver.add(ax);
    }
    solver.add(childT.expr);
    solver.add(z3.Not(parentT.expr));
    const verdict = await solver.check();
    if (verdict === "sat") {
        out.push({
            code: "S33",
            message: `[S33] commitment '${child.name}' weakens the predicate inherited ` +
                `from '${parent.name}' (child_predicate ∧ ¬parent_predicate is ` +
                `satisfiable in the decidable fragment)`,
            location: child.location,
        });
        if (allSkipped.length > 0) {
            out.push({
                code: "W33",
                message: `[W33] commitment '${child.name}' has unverifiable predicate ` +
                    `clauses alongside the SAT witness — a theoretical (but ` +
                    `unlikely) false positive cannot be ruled out ` +
                    `(${describeSkipped(allSkipped)})`,
                location: child.location,
            });
        }
        return;
    }
    if (verdict === "unknown") {
        out.push({
            code: "W33",
            message: `[W33] Z3 returned 'unknown' for commitment '${child.name}' ` +
                `predicate vs inherited '${parent.name}' — expression outside the ` +
                `decidable arithmetic fragment`,
            location: child.location,
        });
        return;
    }
    // UNSAT — child predicate implies parent's. Emit a companion warning
    // if any clause was skipped so users know the proof was partial.
    if (allSkipped.length > 0) {
        out.push({
            code: "W33",
            message: `[W33] commitment '${child.name}' predicate LSP verified OK in the ` +
                `decidable subset, but some clauses were not checked ` +
                `(${describeSkipped(allSkipped)})`,
            location: child.location,
        });
    }
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
export async function verifyCommitmentDischarge(file, links) {
    const { Context } = await init();
    const ctx = Context("disch");
    const diagnostics = [];
    // Build the index once — every link's event-owner is some kind in
    // the merged AST, so we re-use the same decl index for all links.
    const localErrors = [];
    const idx = buildDeclarationIndex(file, localErrors);
    const cycleSet = detectCycles(idx);
    for (const link of links) {
        await checkDischargeLink(ctx, link, idx, cycleSet, diagnostics);
    }
    return diagnostics;
}
async function checkDischargeLink(z3, link, idx, cycleSet, out) {
    const { event, eventOwner, commitment } = link;
    if (commitment.predicate === null) {
        // Nothing to discharge structurally. Coverage check already
        // reported these via W34; we don't duplicate the diagnostic here.
        return;
    }
    // One Env, one envCtx — translate event clauses AND commitment
    // predicate against the same self-type so their Z3 symbols line up.
    const env = new Env(z3);
    // Phase 19 (Bloque 2 v0.6) — if the eventOwner specializes any
    // member-quantified categories, their invariants will reference
    // `<bearerName>.x`. From the kind's perspective, that bearer IS
    // the kind itself. We pre-populate boundVars with aliases from
    // each ancestral bearer-name to the `self` const, so the category
    // invariants translate cleanly in the kind's context.
    const boundVars = collectAncestralBearerAliases(eventOwner, env, idx, cycleSet);
    const envCtx = boundVars
        ? {
            env,
            selfTypeName: eventOwner.name,
            idx,
            cycleSet,
            params: event.parameters,
            boundVars,
        }
        : {
            env,
            selfTypeName: eventOwner.name,
            idx,
            cycleSet,
            params: event.parameters,
        };
    // LHS antecedent — gather everything that's TRUE in the state where
    // the event runs:
    //   1. The eventOwner's invariants (and every ancestor's invariants
    //      in the specialization chain). These hold across all states
    //      and constrain the symbol values the predicate is asked to
    //      satisfy.
    //   2. The event's pre and post clauses. Pre holds because the
    //      caller is required to satisfy it; post because the event
    //      successfully ran.
    //
    // We feed them all as one list to translateConjunction so the
    // skipped-reasons are deduped automatically and the final formula
    // is one And() over the decidable subset.
    const ownerInvariants = collectEffectiveInvariants(eventOwner, idx, cycleSet);
    const preAndPost = [...ownerInvariants, ...event.pre, ...event.post];
    const lhs = translateConjunction(preAndPost, envCtx);
    // RHS: the commitment's predicate (single clause, wrapped to share
    // the partial-translation machinery).
    const rhs = translateConjunction([commitment.predicate], envCtx);
    const allSkipped = [...lhs.skipped, ...rhs.skipped];
    const linkLabel = `event '${eventOwner.name}.${event.name}' → commitment '${commitment.name}'`;
    // If NOTHING on either side translated to a decidable formula, we
    // can't run the SAT check at all. Emit a single warning and move on.
    if (lhs.translated === 0 && rhs.translated === 0) {
        out.push({
            code: "W34_partial",
            message: `[W34_partial] ${linkLabel}: discharge not verifiable in the ` +
                `decidable fragment — ${describeSkipped(allSkipped)}`,
            location: event.location,
        });
        return;
    }
    // Phase 20 (Bloque 2 v0.7): if the commitment's predicate has NO
    // translatable clauses but the event-side LHS does, the discharge
    // proof would be `lhs ⇒ true` — vacuously valid. This is almost
    // always a *playbook violation*: the commitment's predicate
    // references properties (e.g. `self.maxFaultResponseMinutes`) that
    // don't exist on the event-owner kind. The playbook recommends
    // expressing predicates using property NAMES the system kind
    // actually has. We surface this as a hard error so it doesn't
    // hide behind a misleading ✓ in the discharge summary.
    if (rhs.translated === 0 && lhs.translated > 0) {
        out.push({
            code: "S36",
            message: `[S36] ${linkLabel}: commitment predicate has zero translatable ` +
                `clauses on this event-owner — the discharge proof would be ` +
                `vacuously valid. The predicate likely references properties ` +
                `local to the commitment (e.g. ${describeSkipped(rhs.skipped)}) ` +
                `instead of properties shared with the system kind. Move those ` +
                `properties onto the system kind or re-name predicate symbols ` +
                `to match. See playbook on commitment-discharge.`,
            location: event.location,
        });
        return;
    }
    const solver = new z3.Solver();
    for (const ax of env.intervalAxioms) {
        solver.add(ax);
    }
    solver.add(lhs.expr);
    solver.add(z3.Not(rhs.expr));
    const verdict = await solver.check();
    if (verdict === "sat") {
        out.push({
            code: "S34",
            message: `[S34] ${linkLabel}: event.pre ∧ event.post ∧ ¬predicate is SAT ` +
                `in the decidable arithmetic fragment — the event does NOT discharge ` +
                `the commitment's predicate.`,
            location: event.location,
        });
        if (allSkipped.length > 0) {
            out.push({
                code: "W34_partial",
                message: `[W34_partial] ${linkLabel}: S34 witness was found in the ` +
                    `decidable subset, but some clauses were skipped — a theoretical ` +
                    `false positive cannot be ruled out (${describeSkipped(allSkipped)})`,
                location: event.location,
            });
        }
        return;
    }
    if (verdict === "unknown") {
        out.push({
            code: "W34_partial",
            message: `[W34_partial] ${linkLabel}: Z3 returned 'unknown' — expression ` +
                `outside the decidable arithmetic fragment`,
            location: event.location,
        });
        return;
    }
    // UNSAT — discharge proven in the decidable subset.
    if (allSkipped.length > 0) {
        out.push({
            code: "W34_partial",
            message: `[W34_partial] ${linkLabel}: discharge proven in the decidable ` +
                `subset, but some clauses were not checked ` +
                `(${describeSkipped(allSkipped)})`,
            location: event.location,
        });
    }
}
// ─── Phase 24 (RxOCL): trace-block verification ─────────────────────────
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
export async function verifyTraceClauses(file) {
    const { Context } = await init();
    const z3 = Context("trace");
    const diagnostics = [];
    const localErrors = [];
    const idx = buildDeclarationIndex(file, localErrors);
    const cycleSet = detectCycles(idx);
    for (const decl of file.declarations) {
        if (decl.kind !== "KindDecl" && decl.kind !== "SubkindDecl")
            continue;
        if (decl.traceClauses.length === 0)
            continue;
        for (const clause of decl.traceClauses) {
            if (!clause.parsed) {
                diagnostics.push({
                    code: "W40_partial",
                    message: `[W40_partial] trace clause '${clause.op}' on '${decl.name}' ` +
                        `has a parse error and was skipped`,
                    location: clause.location,
                });
                continue;
            }
            if (clause.op === "Always" || clause.op === "Next") {
                await checkAlwaysOrNextClause(z3, decl, clause, idx, cycleSet, diagnostics);
            }
            else if (clause.op === "Eventually") {
                diagnostics.push({
                    code: "W40_pending",
                    message: `[W40_pending] 'eventually within N steps' is not yet implemented ` +
                        `(deferred to Phase 24.1 — bounded model checking).`,
                    location: clause.location,
                });
            }
        }
    }
    return diagnostics;
}
/**
 * Recursively rewrite an OclExpr so every navigation reads from the
 * @pre-state. Used to express "P held in the pre-state of an event".
 * The structure of the expression is preserved; only the `isPre` flag
 * on OclNav nodes flips to true.
 */
function rewriteToPreState(e) {
    switch (e.kind) {
        case "OclLiteral":
        case "OclVarRef":
            return e;
        case "OclNav":
            return { ...e, object: rewriteToPreState(e.object), isPre: true };
        case "OclCall":
            return {
                ...e,
                object: rewriteToPreState(e.object),
                argument: e.argument ? rewriteToPreState(e.argument) : null,
            };
        case "OclUnary":
            return { ...e, operand: rewriteToPreState(e.operand) };
        case "OclBinary":
            return {
                ...e,
                left: rewriteToPreState(e.left),
                right: rewriteToPreState(e.right),
            };
        case "OclIf":
            return {
                ...e,
                cond: rewriteToPreState(e.cond),
                then: rewriteToPreState(e.then),
                else_: rewriteToPreState(e.else_),
            };
        case "OclSize":
        case "OclIsEmpty":
        case "OclNotEmpty":
            return { ...e, source: rewriteToPreState(e.source) };
        case "OclIncludes":
            return {
                ...e,
                source: rewriteToPreState(e.source),
                element: rewriteToPreState(e.element),
            };
        case "OclForAll":
        case "OclExists":
        case "OclSelect":
        case "OclReject":
        case "OclCollect":
            return {
                ...e,
                source: rewriteToPreState(e.source),
                body: rewriteToPreState(e.body),
            };
        case "OclLet":
            return {
                ...e,
                init: rewriteToPreState(e.init),
                body: rewriteToPreState(e.body),
            };
    }
}
/**
 * Inductive-step check for `always P` and weaker single-step check for
 * `next P`. For every event E on the kind:
 *
 *   - `always`:  prove (P@pre ∧ owner_invariants_pre ∧ E.pre ∧ E.post) ⇒ P
 *   - `next`:    prove (owner_invariants ∧ E.pre ∧ E.post)            ⇒ P
 *
 * SAT(LHS ∧ ¬RHS) → [S40] hard violation, naming the failing event.
 */
async function checkAlwaysOrNextClause(z3, owner, clause, idx, cycleSet, out) {
    if (!clause.parsed)
        return;
    const events = owner.events;
    if (events.length === 0) {
        out.push({
            code: "W40_partial",
            message: `[W40_partial] trace clause '${clause.op}' on '${owner.name}' ` +
                `has no events to check against — vacuously holds`,
            location: clause.location,
        });
        return;
    }
    // P_pre is the clause rewritten so every self.x reads as self.x@pre.
    // For `next P`, we skip the pre-assumption (allow P false in pre).
    const preP = clause.op === "Always" ? rewriteToPreState(clause.parsed) : null;
    for (const event of events) {
        const env = new Env(z3);
        const boundVars = collectAncestralBearerAliases(owner, env, idx, cycleSet);
        const envCtx = boundVars
            ? {
                env,
                selfTypeName: owner.name,
                idx,
                cycleSet,
                params: event.parameters,
                boundVars,
            }
            : {
                env,
                selfTypeName: owner.name,
                idx,
                cycleSet,
                params: event.parameters,
            };
        const ownerInvariants = collectEffectiveInvariants(owner, idx, cycleSet);
        const lhsClauses = [
            ...ownerInvariants,
            ...event.pre,
            ...event.post,
        ];
        if (preP)
            lhsClauses.push({ parsed: preP });
        const lhs = translateConjunction(lhsClauses, envCtx);
        const rhs = translateConjunction([{ parsed: clause.parsed }], envCtx);
        const allSkipped = [...lhs.skipped, ...rhs.skipped];
        if (rhs.translated === 0) {
            out.push({
                code: "W40_partial",
                message: `[W40_partial] trace clause '${clause.op} ${clause.rawExpression}' on ` +
                    `'${owner.name}' could not be translated against event '${event.name}' ` +
                    `(${describeSkipped(allSkipped)})`,
                location: clause.location,
            });
            continue;
        }
        const solver = new z3.Solver();
        for (const ax of env.intervalAxioms)
            solver.add(ax);
        solver.add(lhs.expr);
        solver.add(z3.Not(rhs.expr));
        const verdict = await solver.check();
        if (verdict === "sat") {
            out.push({
                code: "S40",
                message: `[S40] trace clause '${clause.op} ${clause.rawExpression}' on ` +
                    `'${owner.name}' is NOT preserved by event '${event.name}' — ` +
                    `Z3 found a state where the clause precondition holds yet the ` +
                    `post-state violates it.`,
                location: clause.location,
            });
        }
        // verdict === "unknown" or "unsat" → no diagnostic emitted (UNSAT = proved)
        if (allSkipped.length > 0 && verdict !== "sat") {
            out.push({
                code: "W40_partial",
                message: `[W40_partial] trace clause '${clause.op}' on '${owner.name}' ` +
                    `vs event '${event.name}': clause holds in the decidable subset ` +
                    `but some sub-clauses were skipped (${describeSkipped(allSkipped)})`,
                location: clause.location,
            });
        }
    }
}
// ─── Phase 18 (Bloque 2 v0.3): category-membership invariants ──────────
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
export async function verifyCategoryMembership(file) {
    const { Context } = await init();
    const ctx = Context("catmem");
    const diagnostics = [];
    const localErrors = [];
    const idx = buildDeclarationIndex(file, localErrors);
    const cycleSet = detectCycles(idx);
    for (const member of idx.typeDecls.values()) {
        // Only check types that can specialize a category: kind, subkind,
        // role, mixin, role-mixin, etc. Categories themselves are also
        // sortals — categories specializing categories is legal and the
        // implication direction we want still holds.
        const chain = chainOf(member.name, idx, cycleSet);
        if (!chain)
            continue;
        const ancestors = chain.slice(0, chain.length - 1);
        for (const anc of ancestors) {
            if (anc.kind !== "CategoryDecl")
                continue;
            if (!hasNonTrivialInvariants(anc.invariants))
                continue;
            await checkCategoryMembershipPair(ctx, member, anc, idx, cycleSet, diagnostics);
        }
    }
    return diagnostics;
}
/** Does this list contain at least one OCL clause that isn't literal `true`? */
function hasNonTrivialInvariants(invariants) {
    for (const inv of invariants) {
        const raw = inv.rawExpression.trim();
        if (raw === "true" || raw === "true;")
            continue;
        return true;
    }
    return false;
}
async function checkCategoryMembershipPair(z3, member, category, idx, cycleSet, out) {
    const env = new Env(z3);
    // Phase 19 (Bloque 2 v0.6): a member-quantified category declares
    // `where <name>: <Type>` and references the member via that
    // binding (e.g. `bearer.x`). We pre-populate `boundVars` with
    // `{ bearerName → THE SAME Z3 const as `self`, sorted Ref(member) }`.
    // This aliasing is critical for soundness: `self.x` in the
    // member's own invariants (LHS) and `bearer.x` in the category's
    // invariants (RHS) must resolve to the SAME Z3 expression, since
    // both are talking about the same entity (the specific member
    // being checked). Without aliasing, the implication is vacuously
    // satisfiable because the solver has no reason to connect the
    // two distinct constants.
    //
    // For legacy (non-bearer) categories, we preserve the old
    // behavior: `self.x` inside category invariants resolves against
    // the member (this was the workaround that kept O3 from being
    // completely vacuous in v0.5; see §3.2.3 of the thesis).
    const isCat = category.kind === "CategoryDecl";
    const bearer = isCat ? category.bearer : null;
    let boundVars = undefined;
    if (bearer !== null) {
        // The "self" Z3 constant (lazily created on first use) is keyed
        // as `"self"` in the env's byKey map. We force-create it now
        // with sort Ref(member.name), then alias the bearer name to
        // the same expr+sort pair.
        const selfSort = env.getRefSort(member.name);
        const selfConst = env.getOrCreate("self", selfSort);
        if (selfConst.ok) {
            boundVars = new Map([
                [bearer.name, { expr: selfConst.expr, sort: selfConst.sort }],
            ]);
        }
    }
    // Both LHS and RHS use selfTypeName = member.name. The bearer
    // binding (when present) makes `bearer.x` an alias for `self.x`
    // structurally — same constant, same property-function lookup
    // against the member's effective properties.
    const envCtx = boundVars
        ? {
            env,
            selfTypeName: member.name,
            idx,
            cycleSet,
            params: [],
            boundVars,
        }
        : {
            env,
            selfTypeName: member.name,
            idx,
            cycleSet,
            params: [],
        };
    // LHS: member's effective invariants EXCLUDING the category being
    // checked. If we included the category's own invariants in LHS,
    // the implication LHS ⊨ category.invariants becomes trivially
    // true (the conclusion sits in the premises) and S35 can never
    // fire — even on genuinely broken members. The exclusion is by
    // identity comparison on the InvariantDecl objects.
    const memberInvariants = collectEffectiveInvariants(member, idx, cycleSet);
    const catInvariantSet = new Set(category.invariants);
    const lhsInvariants = memberInvariants.filter((inv) => !catInvariantSet.has(inv));
    const lhs = translateConjunction(lhsInvariants, envCtx);
    const rhs = translateConjunction(category.invariants, envCtx);
    const allSkipped = [...lhs.skipped, ...rhs.skipped];
    const label = `kind '${member.name}' ∈ category '${category.name}'`;
    if (lhs.translated === 0 && rhs.translated === 0) {
        out.push({
            code: "W35_partial",
            message: `[W35_partial] ${label}: invariants membership not verifiable in ` +
                `the decidable fragment — ${describeSkipped(allSkipped)}`,
            location: member.location,
        });
        return;
    }
    const solver = new z3.Solver();
    for (const ax of env.intervalAxioms) {
        solver.add(ax);
    }
    solver.add(lhs.expr);
    solver.add(z3.Not(rhs.expr));
    const verdict = await solver.check();
    if (verdict === "sat") {
        out.push({
            code: "S35",
            message: `[S35] ${label}: member.invariants ∧ ¬category.invariants is SAT ` +
                `in the decidable arithmetic fragment — the member does NOT enforce ` +
                `the category's invariants.`,
            location: member.location,
        });
        if (allSkipped.length > 0) {
            out.push({
                code: "W35_partial",
                message: `[W35_partial] ${label}: S35 witness was found in the decidable ` +
                    `subset, but some clauses were skipped — a theoretical false ` +
                    `positive cannot be ruled out (${describeSkipped(allSkipped)})`,
                location: member.location,
            });
        }
        return;
    }
    if (verdict === "unknown") {
        out.push({
            code: "W35_partial",
            message: `[W35_partial] ${label}: Z3 returned 'unknown' — expression outside ` +
                `the decidable arithmetic fragment`,
            location: member.location,
        });
        return;
    }
    if (allSkipped.length > 0) {
        out.push({
            code: "W35_partial",
            message: `[W35_partial] ${label}: membership proven in the decidable subset, ` +
                `but some clauses were not checked (${describeSkipped(allSkipped)})`,
            location: member.location,
        });
    }
}
/**
 * Phase 19 (Bloque 2 v0.6) — when a kind's effective invariants
 * include those of one or more member-quantified categories
 * (via `specializes`), those category invariants reference
 * `<bearerName>.x`. From the perspective of the kind that
 * specializes the category, the bearer IS the kind itself. This
 * helper walks the kind's specialization chain, finds every
 * bearer-binding declared on an ancestor category, and produces
 * a boundVars map aliasing every bearer-name to the kind's `self`
 * constant.
 *
 * Returns undefined if no aliases are needed (the common case
 * for kinds that don't specialize member-quantified categories).
 */
function collectAncestralBearerAliases(t, env, idx, cycleSet) {
    const chain = chainOf(t.name, idx, cycleSet);
    if (!chain)
        return undefined;
    const bearerNames = new Set();
    for (const anc of chain) {
        if (anc.kind === "CategoryDecl" && anc.bearer) {
            bearerNames.add(anc.bearer.name);
        }
    }
    if (bearerNames.size === 0)
        return undefined;
    // Alias each bearer name to the kind's `self` const.
    const selfSort = env.getRefSort(t.name);
    const selfConst = env.getOrCreate("self", selfSort);
    if (!selfConst.ok)
        return undefined;
    const map = new Map();
    for (const name of bearerNames) {
        map.set(name, { expr: selfConst.expr, sort: selfConst.sort });
    }
    return map;
}
/**
 * Walk the inheritance chain of `t` (root-first via C3 linearization)
 * and concatenate every type's `invariants` into one list. Used by the
 * discharge proof to populate the LHS antecedent — invariants hold
 * across every state, so they belong in the "what's known true" pile
 * alongside pre+post.
 *
 * If the chain is cyclic (no MRO available), fall back to t's own
 * invariants only — over-conservative but never unsound.
 */
function collectEffectiveInvariants(t, idx, cycleSet) {
    const chain = chainOf(t.name, idx, cycleSet);
    if (!chain) {
        return t.invariants ?? [];
    }
    const out = [];
    for (const anc of chain) {
        if (anc.invariants && anc.invariants.length > 0) {
            for (const inv of anc.invariants)
                out.push(inv);
        }
    }
    return out;
}
// ─── Per-event check ───────────────────────────────────────────────────
/**
 * Verify one (child override, parent original) event pair against S29
 * and S30.
 *
 * Strategy:
 *   - Build a shared variable environment mapping every `self.<prop>`,
 *     `self.<prop>@pre`, and parameter name used on either side to a
 *     single Z3 constant. Using a shared env is the whole point —
 *     without it the parent's `x` and the child's `x` would be distinct
 *     Z3 symbols and every implication would be trivially non-SAT.
 *   - Translate `parent_pre` and `child_pre` as conjunctions of
 *     translated clauses. If any clause translates to "unsupported",
 *     degrade the S29 check to W29 for this pair.
 *   - Ask the solver whether `parent_pre ∧ ¬child_pre` is SAT. SAT ⇒
 *     S29. Parallel for post.
 */
async function checkEventPair(z3, childOwner, child, parentOwner, parent, idx, cycleSet, out) {
    // ─── Pre-condition check (S29 / W29) ────────────────────────────────
    await checkContractDirection({
        z3,
        childOwner,
        parent,
        child,
        // LSP pre: parent_pre → child_pre.
        // Violated iff parent_pre ∧ ¬child_pre is SAT.
        leftClauses: parent.pre,
        rightClauses: child.pre,
        idx,
        cycleSet,
        // params: pre-conditions share the event signature; after S22 these
        // are already structurally identical on parent and child.
        params: child.parameters,
        kind: "pre",
        hardCode: "S29",
        softCode: "W29",
        hardMessage: (reason) => `[S29] override event '${childOwner.name}.${child.name}' strengthens ` +
            `pre-condition relative to inherited '${parentOwner.name}.${parent.name}' ` +
            `(${reason})`,
        softMessage: (reason) => `[W29] override event '${childOwner.name}.${child.name}' pre-condition ` +
            `could not be verified LSP-compatible with inherited ` +
            `'${parentOwner.name}.${parent.name}' (${reason})`,
        location: child.location,
        out,
    });
    // ─── Post-condition check (S30 / W30) ──────────────────────────────
    await checkContractDirection({
        z3,
        childOwner,
        parent,
        child,
        // LSP post: child_post → parent_post.
        // Violated iff child_post ∧ ¬parent_post is SAT.
        leftClauses: child.post,
        rightClauses: parent.post,
        idx,
        cycleSet,
        params: child.parameters,
        kind: "post",
        hardCode: "S30",
        softCode: "W30",
        hardMessage: (reason) => `[S30] override event '${childOwner.name}.${child.name}' weakens ` +
            `post-condition relative to inherited '${parentOwner.name}.${parent.name}' ` +
            `(${reason})`,
        softMessage: (reason) => `[W30] override event '${childOwner.name}.${child.name}' post-condition ` +
            `could not be verified LSP-compatible with inherited ` +
            `'${parentOwner.name}.${parent.name}' (${reason})`,
        location: child.location,
        out,
    });
}
async function checkContractDirection(a) {
    // Empty-side shortcut: LEFT → RIGHT is vacuously true if LEFT is empty
    // (an empty conjunction denotes TRUE, and TRUE → anything is trivial
    // for the forward direction we need). If RIGHT is empty it means
    // `true`, so `LEFT → true` is also trivially true. Either way: nothing
    // to report.
    if (a.leftClauses.length === 0 || a.rightClauses.length === 0)
        return;
    const env = new Env(a.z3);
    const envCtx = {
        env,
        selfTypeName: a.childOwner.name,
        idx: a.idx,
        cycleSet: a.cycleSet,
        params: a.params,
    };
    const left = translateConjunction(a.leftClauses, envCtx);
    const right = translateConjunction(a.rightClauses, envCtx);
    const allSkipped = [...left.skipped, ...right.skipped];
    // Nothing at all was decidable — we can't SAT-check anything. Emit a
    // single soft warning describing why.
    if (left.translated === 0 && right.translated === 0) {
        a.out.push({
            code: a.softCode,
            message: a.softMessage(`no decidable clauses on either side — ${describeSkipped(allSkipped)}`),
            location: a.location,
        });
        return;
    }
    // Run the SAT query on the decidable subset.
    const solver = new a.z3.Solver();
    // Phase 6.5: if Allen operators were encountered during translation,
    // the env collected structural axioms (`h.start < h.end` for every
    // unique happening ref). Push those BEFORE the clause constraints so
    // Z3 can't find spurious witnesses with degenerate zero-length
    // intervals.
    for (const ax of env.intervalAxioms) {
        solver.add(ax);
    }
    solver.add(left.expr);
    solver.add(a.z3.Not(right.expr));
    const verdict = await solver.check();
    if (verdict === "sat") {
        // Found a witness in the decidable fragment — report as a hard
        // violation even if other clauses were skipped. Rationale: we treat
        // the decidable fragment as a necessary (but not sufficient) layer
        // of verification. If the user's parent has `charge > 0 AND
        // battery <> null` and the child has `charge >= 0.8 AND battery
        // <> null`, the decidable SAT check already witnesses the real
        // violation at charge = 0.5 independently of the skipped null
        // clauses — which, in practice, rarely narrow the numeric state
        // space enough to invalidate the witness. A theoretically-possible
        // false positive is flagged alongside by a companion warning that
        // enumerates the skipped conjuncts, so the user can judge.
        a.out.push({
            code: a.hardCode,
            message: a.hardMessage(a.kind === "pre"
                ? "parent_pre ∧ ¬child_pre is satisfiable (in the decidable " +
                    "arithmetic fragment)"
                : "child_post ∧ ¬parent_post is satisfiable (in the decidable " +
                    "arithmetic fragment)"),
            location: a.location,
        });
        if (allSkipped.length > 0) {
            a.out.push({
                code: a.softCode,
                message: a.softMessage(`some clauses were outside the decidable fragment and not ` +
                    `considered by the witness search — a theoretical (but ` +
                    `unlikely) false positive cannot be ruled out ` +
                    `(${describeSkipped(allSkipped)})`),
                location: a.location,
            });
        }
        return;
    }
    if (verdict === "unknown") {
        a.out.push({
            code: a.softCode,
            message: a.softMessage("Z3 returned 'unknown' — the expression is outside the decidable " +
                "arithmetic fragment"),
            location: a.location,
        });
        return;
    }
    // UNSAT — the implication holds in the decidable fragment. If there
    // are skipped conjuncts, emit a soft warning so the user knows
    // verification was partial.
    if (allSkipped.length > 0) {
        a.out.push({
            code: a.softCode,
            message: a.softMessage(`decidable subset verified OK, but some clauses were not ` +
                `checked (${describeSkipped(allSkipped)})`),
            location: a.location,
        });
    }
}
/** Render a (potentially long) list of skipped-clause reasons compactly. */
function describeSkipped(reasons) {
    const unique = Array.from(new Set(reasons));
    if (unique.length === 0)
        return "no further details";
    if (unique.length === 1)
        return unique[0];
    if (unique.length <= 3)
        return unique.join("; ");
    return `${unique.slice(0, 3).join("; ")}; ... ${unique.length - 3} more`;
}
function equalSorts(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a === b;
    }
    if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
        if (a.kind === "Ref" && b.kind === "Ref") {
            return a.name === b.name;
        }
        if (a.kind === "Set" && b.kind === "Set") {
            return equalSorts(a.element, b.element);
        }
    }
    return false;
}
function describeZ3Sort(sort) {
    if (typeof sort === "string")
        return sort;
    if (sort.kind === "Ref")
        return sort.name;
    return `Set<${describeZ3Sort(sort.element)}>`;
}
function getRawZ3Sort(sort, z3) {
    if (sort === "Real")
        return z3.Real.sort();
    if (sort === "Int")
        return z3.Int.sort();
    if (sort === "Bool")
        return z3.Bool.sort();
    if (sort === "String")
        return getStringRawSort(z3);
    return sort.z3Sort;
}
/**
 * Lazy-create a single UninterpretedSort "__OntoString" per Z3 context.
 * All `String`-typed properties, parameters, and literals share this
 * sort. Distinct literals get distinct Z3 constants plus a Distinct(...)
 * axiom (registered in Env) so Z3 cannot collapse `'TAKEOFF'` and
 * `'CRUISE'` into the same model element.
 */
const __stringSortByCtx = new WeakMap();
function getStringRawSort(z3) {
    let s = __stringSortByCtx.get(z3);
    if (!s) {
        s = z3.Sort.declare("__OntoString");
        __stringSortByCtx.set(z3, s);
    }
    return s;
}
function resolveSort(t, env) {
    if (t.kind === "PrimitiveType") {
        return mapPrimSort(t.name);
    }
    if (t.kind === "NamedType") {
        return env.getRefSort(t.name);
    }
    if (t.kind === "SetType") {
        const elem = resolveSort(t.elementType, env);
        if (!elem)
            return null;
        return env.getSetSort(elem);
    }
    if (t.kind === "OptionType") {
        // Phase 16b: Z3 LSP doesn't yet model optionality as a separate
        // sort. Treat Option<T> as T for verification purposes — the
        // null-check codegen is what actually enforces presence at
        // runtime. A future phase could add a true sum-type sort.
        return resolveSort(t.elementType, env);
    }
    return null;
}
/**
 * Translate a conjunction of clauses and report on each individually.
 *
 * Rather than bailing on the first untranslatable clause (losing all
 * verification for the contract), we partition the conjunction into
 * a DECIDABLE subset and a SKIPPED subset. The caller SAT-checks the
 * decidable subset and separately surfaces a W29/W30 warning when the
 * skipped subset is non-empty — giving partial but sound verification.
 *
 * Soundness note: running the SAT check against only the decidable
 * subset is safe toward FALSE POSITIVES (we never report a violation
 * that isn't real in the decidable fragment), but it is unsound toward
 * FALSE NEGATIVES — we can miss violations whose witness state depends
 * on an untranslatable clause. That's why we always emit a companion
 * warning listing what was skipped.
 */
function translateConjunction(clauses, ctx) {
    const translated = [];
    const skipped = [];
    for (const c of clauses) {
        if (c.parsed === null) {
            skipped.push("clause had a parse error (see S26)");
            continue;
        }
        const r = translateExpr(c.parsed, ctx);
        if (!r.ok) {
            skipped.push(r.reason);
            continue;
        }
        if (r.sort !== "Bool") {
            skipped.push(`clause type was ${r.sort}, expected Bool`);
            continue;
        }
        translated.push(r.expr);
    }
    const expr = translated.length === 0
        ? ctx.env.z3.Bool.val(true)
        : translated.length === 1
            ? translated[0]
            : ctx.env.z3.And(...translated);
    return { expr, skipped, translated: translated.length };
}
function translateExpr(e, ctx) {
    switch (e.kind) {
        case "OclLiteral":
            return translateLiteral(e, ctx);
        case "OclVarRef":
            return translateVarRef(e.name, ctx);
        case "OclNav":
            return translateNav(e, ctx);
        case "OclCall":
            return translateOclCall(e, ctx);
        case "OclUnary":
            return translateUnary(e, ctx);
        case "OclBinary":
            return translateBinary(e, ctx);
        case "OclIf":
            return translateIf(e, ctx);
        // Phase 5 collection operators are deliberately unverifiable in the
        // current Z3 encoding. Translating forAll/exists would require
        // universal/existential quantifiers over an uninterpreted set sort,
        // which in turn needs array theory plus cardinality axioms — that's
        // a full-weekend addition, scoped out of Phase 5 on purpose.
        //
        // Propagating a clear reason string lets the validator emit a
        // W29/W30 so the user knows the clause wasn't verified (rather than
        // silently passing).
        case "OclSize": {
            const source = translateExpr(e.source, ctx);
            if (!source.ok)
                return source;
            if (typeof source.sort === "string" || source.sort.kind !== "Set") {
                return { ok: false, reason: "size() requires a Set source" };
            }
            const card = ctx.env.getCardFunction(source.sort.element);
            return {
                ok: true,
                expr: card.call(source.expr),
                sort: "Int",
            };
        }
        case "OclIsEmpty": {
            const source = translateExpr(e.source, ctx);
            if (!source.ok)
                return source;
            if (typeof source.sort === "string" || source.sort.kind !== "Set") {
                return { ok: false, reason: "isEmpty() requires a Set source" };
            }
            const rawElemSort = getRawZ3Sort(source.sort.element, ctx.env.z3);
            const emptySet = ctx.env.z3.EmptySet(rawElemSort);
            return {
                ok: true,
                expr: ctx.env.z3.Eq(source.expr, emptySet),
                sort: "Bool",
            };
        }
        case "OclNotEmpty": {
            const source = translateExpr(e.source, ctx);
            if (!source.ok)
                return source;
            if (typeof source.sort === "string" || source.sort.kind !== "Set") {
                return { ok: false, reason: "notEmpty() requires a Set source" };
            }
            const rawElemSort = getRawZ3Sort(source.sort.element, ctx.env.z3);
            const emptySet = ctx.env.z3.EmptySet(rawElemSort);
            return {
                ok: true,
                expr: ctx.env.z3.Not(ctx.env.z3.Eq(source.expr, emptySet)),
                sort: "Bool",
            };
        }
        case "OclIncludes": {
            const source = translateExpr(e.source, ctx);
            if (!source.ok)
                return source;
            if (typeof source.sort === "string" || source.sort.kind !== "Set") {
                return { ok: false, reason: "includes() requires a Set source" };
            }
            const elem = translateExpr(e.element, ctx);
            if (!elem.ok)
                return elem;
            return {
                ok: true,
                expr: ctx.env.z3.Select(source.expr, elem.expr),
                sort: "Bool",
            };
        }
        case "OclForAll": {
            const source = translateExpr(e.source, ctx);
            if (!source.ok)
                return source;
            if (typeof source.sort === "string" || source.sort.kind !== "Set") {
                return { ok: false, reason: "forAll() requires a Set source" };
            }
            const elemSort = source.sort.element;
            const rawElemSort = getRawZ3Sort(elemSort, ctx.env.z3);
            const boundVarName = `v_${e.variable}_${Math.random().toString(36).substring(2, 9)}`;
            const boundVarExpr = ctx.env.z3.Const(boundVarName, rawElemSort);
            const newBoundVars = new Map(ctx.boundVars ?? []);
            newBoundVars.set(e.variable, { expr: boundVarExpr, sort: elemSort });
            const bodyResult = translateExpr(e.body, {
                ...ctx,
                boundVars: newBoundVars,
            });
            if (!bodyResult.ok)
                return bodyResult;
            if (bodyResult.sort !== "Bool") {
                return { ok: false, reason: "forAll() body must be Boolean" };
            }
            const isMember = ctx.env.z3.Select(source.expr, boundVarExpr);
            const implication = ctx.env.z3.Implies(isMember, bodyResult.expr);
            const quantifier = ctx.env.z3.ForAll([boundVarExpr], implication);
            return {
                ok: true,
                expr: quantifier,
                sort: "Bool",
            };
        }
        case "OclExists": {
            const source = translateExpr(e.source, ctx);
            if (!source.ok)
                return source;
            if (typeof source.sort === "string" || source.sort.kind !== "Set") {
                return { ok: false, reason: "exists() requires a Set source" };
            }
            const elemSort = source.sort.element;
            const rawElemSort = getRawZ3Sort(elemSort, ctx.env.z3);
            const boundVarName = `v_${e.variable}_${Math.random().toString(36).substring(2, 9)}`;
            const boundVarExpr = ctx.env.z3.Const(boundVarName, rawElemSort);
            const newBoundVars = new Map(ctx.boundVars ?? []);
            newBoundVars.set(e.variable, { expr: boundVarExpr, sort: elemSort });
            const bodyResult = translateExpr(e.body, {
                ...ctx,
                boundVars: newBoundVars,
            });
            if (!bodyResult.ok)
                return bodyResult;
            if (bodyResult.sort !== "Bool") {
                return { ok: false, reason: "exists() body must be Boolean" };
            }
            const isMember = ctx.env.z3.Select(source.expr, boundVarExpr);
            const conjunction = ctx.env.z3.And(isMember, bodyResult.expr);
            const quantifier = ctx.env.z3.Exists([boundVarExpr], conjunction);
            return {
                ok: true,
                expr: quantifier,
                sort: "Bool",
            };
        }
        case "OclSelect": {
            const source = translateExpr(e.source, ctx);
            if (!source.ok)
                return source;
            if (typeof source.sort === "string" || source.sort.kind !== "Set") {
                return { ok: false, reason: "select() requires a Set source" };
            }
            const elemSort = source.sort.element;
            const rawElemSort = getRawZ3Sort(elemSort, ctx.env.z3);
            const rawSetSort = getRawZ3Sort(source.sort, ctx.env.z3);
            const freshName = `select_${Math.random().toString(36).substring(2, 9)}`;
            const selectSet = ctx.env.z3.Const(freshName, rawSetSort);
            const boundVarName = `v_${e.variable}_${Math.random().toString(36).substring(2, 9)}`;
            const boundVarExpr = ctx.env.z3.Const(boundVarName, rawElemSort);
            const newBoundVars = new Map(ctx.boundVars ?? []);
            newBoundVars.set(e.variable, { expr: boundVarExpr, sort: elemSort });
            const bodyResult = translateExpr(e.body, {
                ...ctx,
                boundVars: newBoundVars,
            });
            if (!bodyResult.ok)
                return bodyResult;
            if (bodyResult.sort !== "Bool") {
                return { ok: false, reason: "select() body must be Boolean" };
            }
            const isMemberSource = ctx.env.z3.Select(source.expr, boundVarExpr);
            const isMemberSelect = ctx.env.z3.Select(selectSet, boundVarExpr);
            const axiom = ctx.env.z3.ForAll([boundVarExpr], ctx.env.z3.Eq(isMemberSelect, ctx.env.z3.And(isMemberSource, bodyResult.expr)));
            ctx.env.intervalAxioms.push(axiom);
            return {
                ok: true,
                expr: selectSet,
                sort: source.sort,
            };
        }
        case "OclReject": {
            const source = translateExpr(e.source, ctx);
            if (!source.ok)
                return source;
            if (typeof source.sort === "string" || source.sort.kind !== "Set") {
                return { ok: false, reason: "reject() requires a Set source" };
            }
            const elemSort = source.sort.element;
            const rawElemSort = getRawZ3Sort(elemSort, ctx.env.z3);
            const rawSetSort = getRawZ3Sort(source.sort, ctx.env.z3);
            const freshName = `reject_${Math.random().toString(36).substring(2, 9)}`;
            const rejectSet = ctx.env.z3.Const(freshName, rawSetSort);
            const boundVarName = `v_${e.variable}_${Math.random().toString(36).substring(2, 9)}`;
            const boundVarExpr = ctx.env.z3.Const(boundVarName, rawElemSort);
            const newBoundVars = new Map(ctx.boundVars ?? []);
            newBoundVars.set(e.variable, { expr: boundVarExpr, sort: elemSort });
            const bodyResult = translateExpr(e.body, {
                ...ctx,
                boundVars: newBoundVars,
            });
            if (!bodyResult.ok)
                return bodyResult;
            if (bodyResult.sort !== "Bool") {
                return { ok: false, reason: "reject() body must be Boolean" };
            }
            const isMemberSource = ctx.env.z3.Select(source.expr, boundVarExpr);
            const isMemberReject = ctx.env.z3.Select(rejectSet, boundVarExpr);
            const axiom = ctx.env.z3.ForAll([boundVarExpr], ctx.env.z3.Eq(isMemberReject, ctx.env.z3.And(isMemberSource, ctx.env.z3.Not(bodyResult.expr))));
            ctx.env.intervalAxioms.push(axiom);
            return {
                ok: true,
                expr: rejectSet,
                sort: source.sort,
            };
        }
        case "OclCollect": {
            const source = translateExpr(e.source, ctx);
            if (!source.ok)
                return source;
            if (typeof source.sort === "string" || source.sort.kind !== "Set") {
                return { ok: false, reason: "collect() requires a Set source" };
            }
            const elemSort = source.sort.element;
            const rawElemSort = getRawZ3Sort(elemSort, ctx.env.z3);
            const boundVarName = `v_${e.variable}_${Math.random().toString(36).substring(2, 9)}`;
            const boundVarExpr = ctx.env.z3.Const(boundVarName, rawElemSort);
            const newBoundVars = new Map(ctx.boundVars ?? []);
            newBoundVars.set(e.variable, { expr: boundVarExpr, sort: elemSort });
            const bodyResult = translateExpr(e.body, {
                ...ctx,
                boundVars: newBoundVars,
            });
            if (!bodyResult.ok)
                return bodyResult;
            const rangeSort = bodyResult.sort;
            const rawRangeSort = getRawZ3Sort(rangeSort, ctx.env.z3);
            const resultSetSort = ctx.env.getSetSort(rangeSort);
            const rawResultSetSort = getRawZ3Sort(resultSetSort, ctx.env.z3);
            const freshName = `collect_${Math.random().toString(36).substring(2, 9)}`;
            const collectSet = ctx.env.z3.Const(freshName, rawResultSetSort);
            const yVarName = `y_collect_${Math.random().toString(36).substring(2, 9)}`;
            const yVarExpr = ctx.env.z3.Const(yVarName, rawRangeSort);
            const isMemberSource = ctx.env.z3.Select(source.expr, boundVarExpr);
            let eqExpr;
            if (rangeSort === "Bool") {
                eqExpr = bodyResult.expr.eq(yVarExpr);
            }
            else {
                eqExpr = bodyResult.expr.eq(yVarExpr);
            }
            const existsExpr = ctx.env.z3.Exists([boundVarExpr], ctx.env.z3.And(isMemberSource, eqExpr));
            const isMemberCollect = ctx.env.z3.Select(collectSet, yVarExpr);
            const axiom = ctx.env.z3.ForAll([yVarExpr], ctx.env.z3.Eq(isMemberCollect, existsExpr));
            ctx.env.intervalAxioms.push(axiom);
            return {
                ok: true,
                expr: collectSet,
                sort: resultSetSort,
            };
        }
        case "OclLet": {
            const initResult = translateExpr(e.init, ctx);
            if (!initResult.ok)
                return initResult;
            const newBoundVars = new Map(ctx.boundVars ?? []);
            newBoundVars.set(e.variable, { expr: initResult.expr, sort: initResult.sort });
            return translateExpr(e.body, {
                ...ctx,
                boundVars: newBoundVars,
            });
        }
    }
}
function translateLiteral(e, ctx) {
    switch (e.litKind) {
        case "Integer":
            return { ok: true, expr: ctx.env.z3.Int.val(e.value), sort: "Int" };
        case "Real":
            // z3-solver takes a string for Real constants to avoid float round-trip.
            return {
                ok: true,
                expr: ctx.env.z3.Real.val(String(e.value)),
                sort: "Real",
            };
        case "Boolean":
            return { ok: true, expr: ctx.env.z3.Bool.val(e.value), sort: "Bool" };
        case "String":
            return {
                ok: true,
                expr: ctx.env.getStringLiteral(e.value),
                sort: "String",
            };
        case "Null":
            return {
                ok: false,
                reason: "null reasoning is not supported in the decidable fragment",
            };
    }
}
// ─── Phase 6.5: Allen temporal relation translation ───────────────────
/**
 * The set of Allen method names recognised by the Z3 translator.
 * Duplicated here rather than imported from oclCheck.ts to keep
 * lspCheck independent of the typechecker's internals. If you add a
 * new operator, add it here AND in `ALLEN_FORMULAS` below AND in
 * `oclCheck.ts`'s `ALLEN_OPERATORS`.
 */
const ALLEN_METHOD_NAMES = new Set([
    "before",
    "after",
    "meets",
    "metBy",
    "overlaps",
    "overlappedBy",
    "during",
    "contains",
    "starts",
    "startedBy",
    "finishes",
    "finishedBy",
    "equals",
]);
const ALLEN_FORMULAS = {
    // A ends strictly before B starts.
    before: (_z3, a, b) => a.end.lt(b.start),
    // A ends exactly when B starts (no gap, no overlap).
    meets: (_z3, a, b) => a.end.eq(b.start),
    // A starts before B, ends inside B.
    overlaps: (z3, a, b) => z3.And(a.start.lt(b.start), b.start.lt(a.end), a.end.lt(b.end)),
    // A fits strictly inside B (both endpoints interior).
    during: (z3, a, b) => z3.And(b.start.lt(a.start), a.end.lt(b.end)),
    // A and B share a start, A finishes first.
    starts: (z3, a, b) => z3.And(a.start.eq(b.start), a.end.lt(b.end)),
    // A and B share an end, A starts later.
    finishes: (z3, a, b) => z3.And(a.end.eq(b.end), b.start.lt(a.start)),
    // Identical intervals.
    equals: (z3, a, b) => z3.And(a.start.eq(b.start), a.end.eq(b.end)),
    // Converses — swap and delegate. Defining them by delegation keeps a
    // single source of truth for the numeric content.
    after: (z3, a, b) => ALLEN_FORMULAS.before(z3, b, a),
    metBy: (z3, a, b) => ALLEN_FORMULAS.meets(z3, b, a),
    overlappedBy: (z3, a, b) => ALLEN_FORMULAS.overlaps(z3, b, a),
    contains: (z3, a, b) => ALLEN_FORMULAS.during(z3, b, a),
    startedBy: (z3, a, b) => ALLEN_FORMULAS.starts(z3, b, a),
    finishedBy: (z3, a, b) => ALLEN_FORMULAS.finishes(z3, b, a),
};
/**
 * Build the stable path string used as the key for the `start`/`end`
 * interval variables of a Happening-valued OCL expression.
 *
 * We restrict "what can be a Happening path" to:
 *   - `self.<prop>`, `self.<prop>@pre`
 *   - `p.<prop>` where p is a parameter
 *   - a bare parameter `p` whose type is a Happening
 *
 * Anything deeper (`self.a.b`) exits the fragment because the heap
 * model isn't rich enough to distinguish "the happening at the end of
 * this navigation chain" from its potentially-unnamed siblings. That's
 * the same boundary the rest of the translator already draws.
 */
function happeningPathOf(e, ctx) {
    if (e.kind === "OclVarRef") {
        if (e.name === "self") {
            return { reason: "'self' alone is not a Happening-typed value" };
        }
        const param = ctx.params.find((p) => p.name === e.name);
        if (!param)
            return { reason: `unknown variable '${e.name}'` };
        if (param.parameterType.kind !== "NamedType") {
            return {
                reason: `parameter '${e.name}' is ${describeTypeRef(param.parameterType)}, not a Happening`,
            };
        }
        const decl = ctx.idx.typeDecls.get(param.parameterType.name);
        if (!decl || decl.kind !== "HappeningDecl") {
            return {
                reason: `parameter '${e.name}' is not typed as a Happening`,
            };
        }
        return { path: `p:${e.name}` };
    }
    if (e.kind === "OclNav") {
        const recv = e.object;
        if (recv.kind === "OclVarRef" && recv.name === "self") {
            const props = effectiveProperties(ctx.selfTypeName, ctx.idx, ctx.cycleSet);
            const hit = props.get(e.property);
            if (!hit) {
                return { reason: `self.${e.property} is not a property` };
            }
            if (hit.prop.propertyType.kind !== "NamedType") {
                return {
                    reason: `self.${e.property} is ${describeTypeRef(hit.prop.propertyType)}, not a Happening`,
                };
            }
            const decl = ctx.idx.typeDecls.get(hit.prop.propertyType.name);
            if (!decl || decl.kind !== "HappeningDecl") {
                return { reason: `self.${e.property} is not typed as a Happening` };
            }
            return {
                path: e.isPre ? `self:${e.property}@pre` : `self:${e.property}`,
            };
        }
        if (recv.kind === "OclVarRef") {
            // p.happeningProp
            const param = ctx.params.find((p) => p.name === recv.name);
            if (!param)
                return { reason: `unknown receiver '${recv.name}'` };
            if (param.parameterType.kind !== "NamedType") {
                return {
                    reason: `parameter '${recv.name}' is primitive; cannot navigate into it`,
                };
            }
            const paramDecl = ctx.idx.typeDecls.get(param.parameterType.name);
            if (!paramDecl) {
                return { reason: `parameter type '${param.parameterType.name}' not found` };
            }
            const props = effectiveProperties(param.parameterType.name, ctx.idx, ctx.cycleSet);
            const hit = props.get(e.property);
            if (!hit) {
                return { reason: `${recv.name}.${e.property} is not a property` };
            }
            if (hit.prop.propertyType.kind !== "NamedType") {
                return {
                    reason: `${recv.name}.${e.property} is ${describeTypeRef(hit.prop.propertyType)}, ` +
                        `not a Happening`,
                };
            }
            const decl = ctx.idx.typeDecls.get(hit.prop.propertyType.name);
            if (!decl || decl.kind !== "HappeningDecl") {
                return {
                    reason: `${recv.name}.${e.property} is not typed as a Happening`,
                };
            }
            return {
                path: e.isPre
                    ? `p:${recv.name}.${e.property}@pre`
                    : `p:${recv.name}.${e.property}`,
            };
        }
    }
    return {
        reason: "Happening reference is nested too deeply (depth ≥ 2 via refs)",
    };
}
/**
 * Translate an OclCall — dispatching on method name.
 *
 *   - Allen temporal operators (13 names): translate as a
 *     difference-logic formula over the two intervals' start/end
 *     variables. This is the ONLY case where Phase 6.5 keeps the
 *     clause in the decidable fragment.
 *   - Zero-arity query calls and any other method: unsupported, returns
 *     a `reason` so the main check emits a W29/W30.
 */
function translateOclCall(e, ctx) {
    if (e.method === "allInstances") {
        if (e.object.kind === "OclVarRef" && ctx.idx.typeDecls.has(e.object.name)) {
            if (e.argument !== null) {
                return { ok: false, reason: "allInstances() does not take arguments" };
            }
            const setExpr = ctx.env.getAllInstancesSet(e.object.name);
            const elemSort = ctx.env.getRefSort(e.object.name);
            const setSort = ctx.env.getSetSort(elemSort);
            return { ok: true, expr: setExpr, sort: setSort };
        }
    }
    // isFinite / isNaN: encoded as uninterpreted predicates on Real
    // with a single axiom forbidding their simultaneous truth. This
    // lets the LSP strengthening check (S29) reason about contracts
    // like `pre: x.isFinite()`: the predicate becomes a genuine extra
    // constraint, not a dropped clause. The receiver must be a Real
    // (or Integer — promoted to Real for the call).
    if (e.method === "isFinite" || e.method === "isNaN") {
        if (e.argument !== null) {
            return { ok: false, reason: `'.${e.method}()' takes no arguments` };
        }
        const recv = translateExpr(e.object, ctx);
        if (!recv.ok)
            return recv;
        if (recv.sort !== "Real" && recv.sort !== "Int") {
            return {
                ok: false,
                reason: `'.${e.method}()' requires a numeric receiver; got ` +
                    `${describeZ3Sort(recv.sort)}`,
            };
        }
        // Coerce Int → Real for the predicate's domain. Integers are
        // always finite and never NaN in IEEE-754 terms, but Z3's
        // ToReal on an Int is the natural lift.
        const realArg = recv.sort === "Int" ? ctx.env.z3.ToReal(recv.expr) : recv.expr;
        const fn = e.method === "isFinite"
            ? ctx.env.getIsFiniteFunction()
            : ctx.env.getIsNaNFunction();
        return { ok: true, expr: fn.call(realArg), sort: "Bool" };
    }
    if (!ALLEN_METHOD_NAMES.has(e.method)) {
        return {
            ok: false,
            reason: `call '.${e.method}()' is outside the decidable fragment ` +
                `(only Allen temporal operators are Z3-encoded in Phase 6.5)`,
        };
    }
    if (e.argument === null) {
        return {
            ok: false,
            reason: `Allen relation '.${e.method}' requires an argument`,
        };
    }
    const left = happeningPathOf(e.object, ctx);
    if ("reason" in left) {
        return {
            ok: false,
            reason: `left side of '.${e.method}(...)': ${left.reason}`,
        };
    }
    const right = happeningPathOf(e.argument, ctx);
    if ("reason" in right) {
        return {
            ok: false,
            reason: `right side of '.${e.method}(...)': ${right.reason}`,
        };
    }
    const aInt = ctx.env.getInterval(left.path);
    const bInt = ctx.env.getInterval(right.path);
    const formula = ALLEN_FORMULAS[e.method];
    if (!formula) {
        // Defensive: ALLEN_METHOD_NAMES and ALLEN_FORMULAS should stay
        // in lockstep. If they drift, treat as unsupported rather than
        // crashing the whole check.
        return {
            ok: false,
            reason: `internal: no Z3 encoding registered for Allen '${e.method}'`,
        };
    }
    return {
        ok: true,
        expr: formula(ctx.env.z3, aInt, bInt),
        sort: "Bool",
    };
}
function translateVarRef(name, ctx) {
    if (ctx.boundVars) {
        const bound = ctx.boundVars.get(name);
        if (bound) {
            return { ok: true, expr: bound.expr, sort: bound.sort };
        }
    }
    if (name === "self") {
        const selfSort = ctx.env.getRefSort(ctx.selfTypeName);
        return ctx.env.getOrCreate("self", selfSort);
    }
    const param = ctx.params.find((p) => p.name === name);
    if (!param) {
        return { ok: false, reason: `unknown variable '${name}' in LSP context` };
    }
    const sort = resolveSort(param.parameterType, ctx.env);
    if (!sort) {
        const typeLabel = describeTypeRef(param.parameterType);
        return {
            ok: false,
            reason: `parameter '${name}' has unsupported type '${typeLabel}'`,
        };
    }
    return ctx.env.getOrCreate(`p:${name}`, sort);
}
/**
 * Translate a navigation chain like `self.x`, `self.x@pre`,
 * `param.primitiveProp`. We DO NOT support chains that traverse into a
 * reference type (e.g. `self.battery.charge`) — that would require a
 * heap encoding.
 */
function translateNav(e, ctx) {
    const recv = translateExpr(e.object, ctx);
    if (!recv.ok)
        return recv;
    if (typeof recv.sort === "string" || recv.sort.kind !== "Ref") {
        return {
            ok: false,
            reason: `cannot navigate property '${e.property}' on sort ${describeZ3Sort(recv.sort)}`,
        };
    }
    const typeName = recv.sort.name;
    const props = effectiveProperties(typeName, ctx.idx, ctx.cycleSet);
    const hit = props.get(e.property);
    if (!hit) {
        return {
            ok: false,
            reason: `'${typeName}' has no property '${e.property}'`,
        };
    }
    const propSort = resolveSort(hit.prop.propertyType, ctx.env);
    if (!propSort) {
        const typeLabel = describeTypeRef(hit.prop.propertyType);
        return {
            ok: false,
            reason: `property '${typeName}.${e.property}' has unsupported type '${typeLabel}'`,
        };
    }
    const func = ctx.env.getPropertyFunction(typeName, e.property, e.isPre, recv.sort, propSort);
    return {
        ok: true,
        expr: func.call(recv.expr),
        sort: propSort,
    };
}
function translateUnary(e, ctx) {
    const inner = translateExpr(e.operand, ctx);
    if (!inner.ok)
        return inner;
    if (e.op === "not") {
        if (inner.sort !== "Bool") {
            return { ok: false, reason: `'not' applied to ${inner.sort}` };
        }
        return { ok: true, expr: ctx.env.z3.Not(inner.expr), sort: "Bool" };
    }
    // unary minus
    if (inner.sort !== "Int" && inner.sort !== "Real") {
        return { ok: false, reason: `unary '-' applied to ${inner.sort}` };
    }
    return {
        ok: true,
        expr: inner.expr.neg(),
        sort: inner.sort,
    };
}
function translateBinary(e, ctx) {
    // Phase 21 null-handling: `x = null` and `x <> null` are common
    // patterns on Option<T> properties. Rather than failing the whole
    // clause because the null literal has no decidable encoding, we
    // translate `x = null` to an uninterpreted predicate
    // `__isNull_<sort>(x)`. This loses information about the SPECIFIC
    // null value but preserves the existence/presence question, which
    // is all the discharge/membership proofs ever ask about null.
    if (e.op === "=" || e.op === "<>") {
        const lhsIsNull = isNullLiteralExpr(e.left);
        const rhsIsNull = isNullLiteralExpr(e.right);
        if (lhsIsNull !== rhsIsNull) {
            // Exactly one side is null; translate the other and emit isNull(...).
            const other = lhsIsNull
                ? translateExpr(e.right, ctx)
                : translateExpr(e.left, ctx);
            if (!other.ok)
                return other;
            return makeNullCheck(other, e.op === "<>", ctx);
        }
        // Both sides null (`null = null`): trivially true. Both non-null:
        // fall through to normal binary handling below.
        if (lhsIsNull && rhsIsNull) {
            return {
                ok: true,
                expr: ctx.env.z3.Bool.val(e.op === "="),
                sort: "Bool",
            };
        }
    }
    const l = translateExpr(e.left, ctx);
    if (!l.ok)
        return l;
    const r = translateExpr(e.right, ctx);
    if (!r.ok)
        return r;
    return applyBinary(e.op, l, r, ctx);
}
function isNullLiteralExpr(e) {
    return e.kind === "OclLiteral" && e.litKind === "Null";
}
function makeNullCheck(operand, negate, ctx) {
    const isNullFn = ctx.env.getIsNullFunction(operand.sort);
    const isNull = isNullFn.call(operand.expr);
    return {
        ok: true,
        expr: negate ? ctx.env.z3.Not(isNull) : isNull,
        sort: "Bool",
    };
}
function applyBinary(op, l, r, ctx) {
    const arithOps = ["+", "-", "*", "/"];
    const cmpOps = ["<", "<=", ">", ">="];
    const eqOps = ["=", "<>"];
    const boolOps = ["and", "or"];
    if (arithOps.includes(op)) {
        if (!isArith(l.sort) || !isArith(r.sort)) {
            return { ok: false, reason: `arithmetic '${op}' on non-numeric` };
        }
        // Promote Int to Real if one side is Real.
        const sort = l.sort === "Real" || r.sort === "Real" ? "Real" : "Int";
        const li = promote(l.expr, l.sort, sort, ctx);
        const ri = promote(r.expr, r.sort, sort, ctx);
        let expr;
        switch (op) {
            case "+":
                expr = li.add(ri);
                break;
            case "-":
                expr = li.sub(ri);
                break;
            case "*":
                expr = li.mul(ri);
                break;
            case "/":
                expr = li.div(ri);
                break;
            default: return { ok: false, reason: `unreachable arith op ${op}` };
        }
        return { ok: true, expr, sort };
    }
    if (cmpOps.includes(op)) {
        if (!isArith(l.sort) || !isArith(r.sort)) {
            return { ok: false, reason: `comparison '${op}' on non-numeric` };
        }
        const sort = l.sort === "Real" || r.sort === "Real" ? "Real" : "Int";
        const li = promote(l.expr, l.sort, sort, ctx);
        const ri = promote(r.expr, r.sort, sort, ctx);
        let expr;
        switch (op) {
            case "<":
                expr = li.lt(ri);
                break;
            case "<=":
                expr = li.le(ri);
                break;
            case ">":
                expr = li.gt(ri);
                break;
            case ">=":
                expr = li.ge(ri);
                break;
            default: return { ok: false, reason: `unreachable cmp op ${op}` };
        }
        return { ok: true, expr, sort: "Bool" };
    }
    if (eqOps.includes(op)) {
        // Type-correct equality across sorts: require same sort or one-way
        // numeric promotion.
        if (l.sort === r.sort) {
            // ctx.env.z3.Eq is sort-uniform — works for Bool, Int, Real, and
            // UninterpretedSort (String) without needing TS-level casts.
            const expr = ctx.env.z3.Eq(l.expr, r.expr);
            return {
                ok: true,
                expr: op === "=" ? expr : ctx.env.z3.Not(expr),
                sort: "Bool",
            };
        }
        if (isArith(l.sort) && isArith(r.sort)) {
            const sort = "Real";
            const li = promote(l.expr, l.sort, sort, ctx);
            const ri = promote(r.expr, r.sort, sort, ctx);
            const eq = li.eq(ri);
            return {
                ok: true,
                expr: op === "=" ? eq : ctx.env.z3.Not(eq),
                sort: "Bool",
            };
        }
        return { ok: false, reason: `equality across sorts ${l.sort}/${r.sort}` };
    }
    if (boolOps.includes(op)) {
        if (l.sort !== "Bool" || r.sort !== "Bool") {
            return { ok: false, reason: `boolean '${op}' on non-Bool` };
        }
        const expr = op === "and"
            ? ctx.env.z3.And(l.expr, r.expr)
            : ctx.env.z3.Or(l.expr, r.expr);
        return { ok: true, expr, sort: "Bool" };
    }
    return { ok: false, reason: `unsupported binary operator ${op}` };
}
function translateIf(e, ctx) {
    const c = translateExpr(e.cond, ctx);
    if (!c.ok)
        return c;
    if (c.sort !== "Bool") {
        return { ok: false, reason: "'if' condition not Bool" };
    }
    const t = translateExpr(e.then, ctx);
    if (!t.ok)
        return t;
    const u = translateExpr(e.else_, ctx);
    if (!u.ok)
        return u;
    if (t.sort !== u.sort) {
        if (isArith(t.sort) && isArith(u.sort)) {
            const sort = "Real";
            const ti = promote(t.expr, t.sort, sort, ctx);
            const ui = promote(u.expr, u.sort, sort, ctx);
            return {
                ok: true,
                expr: ctx.env.z3.If(c.expr, ti, ui),
                sort,
            };
        }
        return { ok: false, reason: `'if/else' branches have sorts ${t.sort}/${u.sort}` };
    }
    return {
        ok: true,
        expr: ctx.env.z3.If(c.expr, t.expr, u.expr),
        sort: t.sort,
    };
}
// ─── Environment ───────────────────────────────────────────────────────
/**
 * One logical variable per (key, sort). The key lives in a small DSL:
 *   "self:<prop>"          — own property at current state
 *   "self:<prop>@pre"      — own property at pre-state
 *   "p:<param>"            — a primitive-typed parameter
 *   "p:<param>.<prop>"     — a primitive property of a reference param
 *   "p:<param>.<prop>@pre" — same at pre-state
 *
 * Phase 6.5 addition: Happening-valued navigations also get a pair of
 * integer "interval" variables (start, end) with a structural axiom
 * `start < end` that's added to the solver once per unique happening
 * ref. These variables are keyed separately under `hStart:<path>` /
 * `hEnd:<path>` and the axioms are buffered in `intervalAxioms` so the
 * caller can push them to the solver alongside the clause translation.
 *
 * Once created, a key maps to the same Z3 const for the rest of the
 * check, so the parent and child formulas see the same symbol.
 */
class Env {
    z3;
    byKey = new Map();
    /** Set of happening paths for which a `start < end` axiom has been emitted. */
    happeningsSeen = new Set();
    /** Axioms accumulated during translation; caller adds them to solver. */
    intervalAxioms = [];
    refSorts = new Map();
    setSorts = new Map();
    propertyFunctions = new Map();
    cardFunctions = new Map();
    /**
     * IEEE 754 predicates over Real values. Z3's pure QF_LRA model is
     * over rationals (no NaN / Inf), so we encode `isFinite` and
     * `isNaN` as uninterpreted unary predicates plus an axiom that
     * says they cannot both hold simultaneously. This is sound for
     * LSP-strengthening detection: if a child override declares
     * `pre: x.isFinite()` and the parent does not, Z3 will see the
     * child's pre as strictly stronger over the abstract model — and
     * report S29 — instead of dropping the clause as undecidable
     * (the old W29 behaviour). It does NOT promise NaN/Inf-aware
     * arithmetic — multiplication still uses LRA semantics.
     */
    fpaIsFinite = null;
    fpaIsNaN = null;
    constructor(z3) {
        this.z3 = z3;
    }
    allInstancesSets = new Map();
    getAllInstancesSet(typeName) {
        let setExpr = this.allInstancesSets.get(typeName);
        if (!setExpr) {
            const elemSort = this.getRefSort(typeName);
            const setSort = this.getSetSort(elemSort);
            const symName = `allInstances_${typeName}`;
            setExpr = this.z3.Const(symName, getRawZ3Sort(setSort, this.z3));
            this.allInstancesSets.set(typeName, setExpr);
            const rawElem = getRawZ3Sort(elemSort, this.z3);
            const x = this.z3.Const(`x_allInst_${typeName}`, rawElem);
            this.intervalAxioms.push(this.z3.ForAll([x], this.z3.Eq(this.z3.Select(setExpr, x), this.z3.Bool.val(true))));
        }
        return setExpr;
    }
    getRefSort(name) {
        let raw = this.refSorts.get(name);
        if (!raw) {
            raw = this.z3.Sort.declare(name);
            this.refSorts.set(name, raw);
        }
        return { kind: "Ref", name, z3Sort: raw };
    }
    getSetSort(element) {
        const key = describeZ3Sort(element);
        let raw = this.setSorts.get(key);
        if (!raw) {
            const rawElem = getRawZ3Sort(element, this.z3);
            raw = this.z3.Set.sort(rawElem);
            this.setSorts.set(key, raw);
        }
        return { kind: "Set", element, z3Sort: raw };
    }
    getPropertyFunction(typeName, propName, isPre, domainSort, rangeSort) {
        const key = `${typeName}:${propName}${isPre ? "@pre" : ""}`;
        let func = this.propertyFunctions.get(key);
        if (!func) {
            const symName = key.replace(/[^A-Za-z0-9_]/g, "_");
            const rawDom = getRawZ3Sort(domainSort, this.z3);
            const rawRng = getRawZ3Sort(rangeSort, this.z3);
            func = this.z3.Function.declare(symName, rawDom, rawRng);
            this.propertyFunctions.set(key, func);
        }
        return func;
    }
    /**
     * Lazily declare `IsFinite : Real -> Bool` and add the axiom
     * `forall x. ¬(IsFinite(x) ∧ IsNaN(x))` (registered once, on first
     * use of either predicate). See the field-level doc comment for
     * the rationale.
     */
    getIsFiniteFunction() {
        if (this.fpaIsFinite === null) {
            const rawReal = this.z3.Real.sort();
            const rawBool = this.z3.Bool.sort();
            this.fpaIsFinite = this.z3.Function.declare("__IsFinite", rawReal, rawBool);
            this.ensureIeeeAxioms();
        }
        return this.fpaIsFinite;
    }
    getIsNaNFunction() {
        if (this.fpaIsNaN === null) {
            const rawReal = this.z3.Real.sort();
            const rawBool = this.z3.Bool.sort();
            this.fpaIsNaN = this.z3.Function.declare("__IsNaN", rawReal, rawBool);
            this.ensureIeeeAxioms();
        }
        return this.fpaIsNaN;
    }
    /**
     * Phase 21 — null-handling. Lazy-declare an uninterpreted predicate
     * `__isNull_<sort>: <sort> -> Bool` per element sort. `x = null` and
     * `x <> null` translate to invocations of this predicate. No axioms
     * are emitted — Z3 is free to model any value as null or not — which
     * is sound for partial verification: the discharge proof asks "given
     * what we KNOW about x, does the predicate hold?", and the verifier
     * neither claims `x = null` nor `x <> null` unless an explicit
     * comparison says so.
     *
     * One predicate per sort lets `self.commitmentId = null` and
     * `self.alarmReason = null` share semantics through their respective
     * sort-keyed predicates, while ints and reals get separate ones.
     */
    isNullFunctions = new Map();
    getIsNullFunction(elementSort) {
        const key = describeZ3Sort(elementSort);
        let fn = this.isNullFunctions.get(key);
        if (!fn) {
            const rawElem = getRawZ3Sort(elementSort, this.z3);
            const rawBool = this.z3.Bool.sort();
            const symName = `__isNull_${key.replace(/[^A-Za-z0-9_]/g, "_")}`;
            fn = this.z3.Function.declare(symName, rawElem, rawBool);
            this.isNullFunctions.set(key, fn);
            // Phase 22b — for the String sort, any literal already
            // declared is known non-null. Emit the axioms now; future
            // literals added via getStringLiteral will get their own axiom.
            if (key === "String") {
                for (const lit of this.stringLiterals.values()) {
                    this.intervalAxioms.push(this.z3.Not(fn.call(lit)));
                }
            }
        }
        return fn;
    }
    ieeeAxiomsAdded = false;
    ensureIeeeAxioms() {
        if (this.ieeeAxiomsAdded)
            return;
        // We can only emit the mutual-exclusion axiom once BOTH predicates
        // have been declared, since it mentions both. Declare-on-demand
        // means the axiom waits until the second predicate appears.
        if (this.fpaIsFinite === null || this.fpaIsNaN === null)
            return;
        const x = this.z3.Const("__fp_x", this.z3.Real.sort());
        // forall x. ¬(IsFinite(x) ∧ IsNaN(x))
        this.intervalAxioms.push(this.z3.ForAll([x], this.z3.Not(this.z3.And(this.fpaIsFinite.call(x), this.fpaIsNaN.call(x)))));
        this.ieeeAxiomsAdded = true;
    }
    getCardFunction(elementSort) {
        const key = describeZ3Sort(elementSort);
        let card = this.cardFunctions.get(key);
        if (!card) {
            const setSort = this.getSetSort(elementSort);
            const rawSet = getRawZ3Sort(setSort, this.z3);
            const rawInt = this.z3.Int.sort();
            const symName = `card_${key.replace(/[^A-Za-z0-9_]/g, "_")}`;
            card = this.z3.Function.declare(symName, rawSet, rawInt);
            this.cardFunctions.set(key, card);
            // Axiom 1: card(empty) = 0
            const empty = this.z3.EmptySet(getRawZ3Sort(elementSort, this.z3));
            this.intervalAxioms.push(this.z3.Eq(card.call(empty), this.z3.Int.val(0)));
            // Axiom 2: ForAll s, card(s) >= 0
            const s = this.z3.Const(`s_card_${key.replace(/[^A-Za-z0-9_]/g, "_")}`, rawSet);
            this.intervalAxioms.push(this.z3.ForAll([s], this.z3.GE(card.call(s), this.z3.Int.val(0))));
        }
        return card;
    }
    /**
     * Get (or lazily create) a Z3 constant representing the String
     * literal `value`. Two distinct literals get two distinct constants,
     * and a `Distinct(...)` axiom is maintained over ALL seen literals
     * so Z3 cannot model `'A' == 'B'`. This makes equality/disequality
     * reasoning on String-typed properties sound — but concatenation,
     * length, and substring operations are still NOT supported (they
     * remain reported as skipped clauses).
     */
    stringLiterals = new Map();
    stringDistinctAxiomEmitted = false;
    getStringLiteral(value) {
        const existing = this.stringLiterals.get(value);
        if (existing)
            return existing;
        const symName = `strlit_${value.replace(/[^A-Za-z0-9_]/g, "_")}_${this.stringLiterals.size}`;
        const c = this.z3.Const(symName, getStringRawSort(this.z3));
        this.stringLiterals.set(value, c);
        this.refreshStringDistinctAxiom();
        // Phase 22b — if a __isNull predicate for String exists, mark
        // this literal as non-null so `x = 'foo' implies not isNull(x)`
        // is provable. Without this axiom, Z3 is free to model a literal
        // as null, which produces spurious S34 violations on patterns
        // like `predicate: self.id <> null` + `post: self.id = 'X'`.
        const isNullFn = this.isNullFunctions.get("String");
        if (isNullFn) {
            this.intervalAxioms.push(this.z3.Not(isNullFn.call(c)));
        }
        return c;
    }
    refreshStringDistinctAxiom() {
        // Distinct(...) requires ≥ 2 args. We rebuild the axiom on each
        // new literal — the previous axiom is left in the buffer; that's
        // harmless because Distinct({a,b}) is implied by Distinct({a,b,c}).
        const all = Array.from(this.stringLiterals.values());
        if (all.length < 2)
            return;
        this.stringDistinctAxiomEmitted = true;
        this.intervalAxioms.push(this.z3.Distinct(...all));
    }
    getOrCreate(key, sort) {
        if (!sort) {
            return { ok: false, reason: `unsupported sort for '${key}'` };
        }
        const existing = this.byKey.get(key);
        if (existing) {
            if (!equalSorts(existing.sort, sort)) {
                return {
                    ok: false,
                    reason: `'${key}' used at both sort ${describeZ3Sort(existing.sort)} and ${describeZ3Sort(sort)}`,
                };
            }
            return { ok: true, expr: existing.expr, sort: existing.sort };
        }
        const symName = key.replace(/[^A-Za-z0-9_]/g, "_");
        const raw = getRawZ3Sort(sort, this.z3);
        const expr = this.z3.Const(symName, raw);
        this.byKey.set(key, { expr, sort });
        return { ok: true, expr, sort };
    }
    /**
     * Get (or lazily create) the integer `start` and `end` variables
     * representing the temporal interval of the happening at `path`.
     *
     * On first sight of a given happening path, we also emit the
     * structural axiom `start < end` — every interval has positive
     * duration — into `intervalAxioms` so the caller can conjoin it
     * with the formulas being SAT-checked. Without this axiom, Z3
     * would be free to pick `start >= end`, which would trivially
     * satisfy many Allen-relation queries in unintended ways.
     */
    getInterval(path) {
        const startKey = `hStart:${path}`;
        const endKey = `hEnd:${path}`;
        const s = this.getOrCreate(startKey, "Int");
        const e = this.getOrCreate(endKey, "Int");
        // Errors shouldn't happen here — Int is always a valid sort — but
        // we check for the TS narrowing.
        if (!s.ok || !e.ok) {
            throw new Error("internal: could not create Happening interval vars");
        }
        if (!this.happeningsSeen.has(path)) {
            this.happeningsSeen.add(path);
            this.intervalAxioms.push(s.expr.lt(e.expr));
        }
        return { start: s.expr, end: e.expr };
    }
}
// ─── Helpers ───────────────────────────────────────────────────────────
function isArith(s) {
    return s === "Real" || s === "Int";
}
/**
 * Promote an Int expression to Real when needed. Z3 requires explicit
 * `ToReal` coercion for mixed-sort arithmetic; here we do it once at
 * the translation boundary and keep the rest of the code sort-uniform.
 */
function promote(expr, from, to, ctx) {
    if (from === to)
        return expr;
    if (from === "Int" && to === "Real") {
        return ctx.env.z3.ToReal(expr);
    }
    // Real → Int would lose information; we don't demote.
    return expr;
}
function mapPrimSort(name) {
    switch (name) {
        case "Real":
            return "Real";
        case "Integer":
            return "Int";
        case "Boolean":
            return "Bool";
        case "String":
            return "String";
        default:
            return null;
    }
}
/**
 * Human-readable rendering of a TypeRef for diagnostic messages. Works
 * uniformly across primitive, named, and Set<T> variants so the LSP
 * reasoner doesn't have to narrow the union in every error path.
 */
function describeTypeRef(t) {
    if (t.kind === "PrimitiveType")
        return t.name;
    if (t.kind === "NamedType")
        return t.name;
    return `Set<${describeTypeRef(t.elementType)}>`;
}
//# sourceMappingURL=lspCheck.js.map