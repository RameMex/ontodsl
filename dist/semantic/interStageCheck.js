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
export function checkInterStageRefinement(merged, annotations) {
    const diagnostics = [];
    // Phase 18 (Bloque 2 v0.5) — pull structured refines edges directly
    // from the AST (each event's `refines` field, populated by the
    // grammar's first-class `refines <qname>(, <qname>)*` clause).
    // Merge with the comment-mined annotations so a file can use either
    // mechanism (or both during migration). Dedup by
    // (ownerType, eventName, target-qname).
    const astAnnotations = collectAstRefinements(merged);
    const allAnnotations = dedupeAnnotations([
        ...annotations,
        ...astAnnotations,
    ]);
    // 1. Index commitments by simple name + a separate index of ALL
    // declarations so we can distinguish "unknown name" (real W35) from
    // "known name but not a commitment" (out-of-scope for Obligation 1).
    // Also: a parallel index from (ownerName, eventName) → (event, owner)
    // so we can resolve each annotation's source event for the
    // downstream Z3 discharge check.
    const commByName = new Map();
    const anyDeclByName = new Set();
    const eventsByOwner = new Map();
    for (const decl of merged.declarations) {
        anyDeclByName.add(decl.name);
        if (decl.kind === "CommitmentDecl") {
            commByName.set(decl.name, decl);
        }
        // Only certain stereotypes carry events. The AST has a uniform
        // `events: readonly EventDecl[]` on every declaration that
        // supports them — we duck-type rather than enumerate the kind
        // string list, since adding a new stereotype shouldn't break us.
        const evts = decl.events;
        if (evts && Array.isArray(evts)) {
            const entries = (eventsByOwner.get(decl.name) ?? []).concat(evts.map((e) => ({ owner: decl, event: e })));
            eventsByOwner.set(decl.name, entries);
        }
    }
    // 2. Build the link table commitment → [refiners].
    const refinersByCommitment = new Map();
    const dischargeLinks = [];
    // v0.2 — Liskov edges keyed by "<ParentType>.<eventName>".
    const liskovEdges = new Map();
    for (const ann of allAnnotations) {
        for (const tgt of ann.targets) {
            // v0.2 — annotations with a `.eventName` suffix are Liskov /
            // decomposition refinements, NOT commitment discharges. Route
            // them to the Liskov coverage table and skip commitment
            // resolution for this target.
            if (tgt.eventName !== null) {
                const parentOwner = eventsByOwner.get(tgt.name);
                if (!parentOwner) {
                    // The named parent type doesn't exist at all → W35 already
                    // covered (via the anyDeclByName check below). Fall through.
                }
                else {
                    const parentEvent = parentOwner.find((e) => e.event.name === tgt.eventName);
                    if (!parentEvent) {
                        diagnostics.push({
                            code: "W37",
                            message: `[W37] event '${ann.namespace}::${ann.ownerType}.${ann.eventName}' ` +
                                `at ${ann.file}:${ann.eventLine} declares 'refines: ` +
                                `${tgt.namespace}::${tgt.name}.${tgt.eventName}' but ` +
                                `type '${tgt.name}' has no event named '${tgt.eventName}'`,
                            location: null,
                        });
                        continue;
                    }
                    const key = `${tgt.name}.${tgt.eventName}`;
                    const edge = liskovEdges.get(key) ?? {
                        parentOwner: tgt.name,
                        parentEvent: tgt.eventName,
                        implementers: [],
                    };
                    edge.implementers.push({
                        namespace: ann.namespace,
                        ownerType: ann.ownerType,
                        eventName: ann.eventName,
                        file: ann.file,
                        line: ann.eventLine,
                    });
                    liskovEdges.set(key, edge);
                    continue;
                }
            }
            const comm = commByName.get(tgt.name);
            if (comm) {
                // In-scope hit: this annotation contributes a refiner for an
                // upstream commitment. Add it to the coverage table.
                const list = refinersByCommitment.get(comm.name) ?? [];
                list.push({
                    namespace: ann.namespace,
                    ownerType: ann.ownerType,
                    eventName: ann.eventName,
                    file: ann.file,
                    line: ann.eventLine,
                });
                refinersByCommitment.set(comm.name, list);
                // Resolve the source event for the Z3 discharge check. If we
                // can't find it by (ownerType, eventName), we still keep the
                // coverage entry (the miner saw it in source) but skip the
                // Z3 link — likely the ownerType lives behind an alias / a
                // stage we didn't load. The CLI prints coverage even without
                // a discharge proof.
                const owners = eventsByOwner.get(ann.ownerType) ?? [];
                const match = owners.find((e) => e.event.name === ann.eventName);
                if (match) {
                    dischargeLinks.push({
                        event: match.event,
                        eventOwner: match.owner,
                        commitment: comm,
                    });
                }
                continue;
            }
            if (anyDeclByName.has(tgt.name)) {
                // Out-of-scope target: the annotation names a declaration that
                // EXISTS but is not a commitment (it's a kind, subkind,
                // category, role, ...). These appear when an event refines an
                // upstream system kind (Obligation 2 — Liskov) or a category
                // (Obligation 3). v0 only covers Obligation 1, so we silently
                // ignore them. v0.1+ will dispatch them to the right checker.
                continue;
            }
            // Unresolved: the named target doesn't exist anywhere in the
            // merged AST. This is a typo, a deleted decl, or a wrong
            // namespace — either way, surface it as W35 so the author can
            // fix it. (W35 only fires for genuinely-unknown names, not for
            // out-of-scope-but-existing names.)
            const qualified = tgt.namespace !== null ? `${tgt.namespace}::${tgt.name}` : tgt.name;
            diagnostics.push({
                code: "W35",
                message: `[W35] event '${ann.namespace}::${ann.ownerType}.${ann.eventName}' ` +
                    `at ${ann.file}:${ann.eventLine} declares 'refines: ${qualified}' ` +
                    `but no declaration with that name exists in the merged AST`,
                location: null,
            });
        }
    }
    // 3. Walk every commitment and check coverage. Empty refiner list =
    //    W34 (un-refined commitment). The coverage table records both
    //    refined AND un-refined commitments so the CLI can render a
    //    complete dispatch matrix.
    const coverage = [];
    for (const decl of merged.declarations) {
        if (decl.kind !== "CommitmentDecl")
            continue;
        const refiners = refinersByCommitment.get(decl.name) ?? [];
        coverage.push({
            commitmentName: decl.name,
            commitmentNamespace: null, // v0 limitation; v1 = origin-tagged decls
            refiners,
        });
        if (refiners.length === 0) {
            diagnostics.push({
                code: "W34",
                message: `[W34] commitment '${decl.name}' has no refining event in the ` +
                    `merged AST. Expected at least one event annotated with ` +
                    `'// refines: …::${decl.name}' in a downstream stage.`,
                location: decl.location,
            });
        }
    }
    // v0.2 — sort Liskov coverage for determinism, no W36 emission
    // here: we don't know upfront which upstream events SHOULD have
    // refiners (that would be Obligation 4 — property correspondence
    // tied to a specific decomposition policy). The CLI prints the
    // table as informational coverage; a future flag could enable
    // strict per-component coverage rules.
    const liskovCoverage = [...liskovEdges.values()].sort((a, b) => (a.parentOwner + a.parentEvent).localeCompare(b.parentOwner + b.parentEvent));
    return { diagnostics, coverage, dischargeLinks, liskovCoverage };
}
/**
 * Walk every event in the merged AST and synthesize a
 * `RefinesAnnotation` from each `refines:` target declared via the
 * first-class grammar clause (Phase 18 v0.5). The resulting
 * annotations have the same shape as the comment-mined ones — same
 * downstream code path. Source-location info is best-effort: we use
 * the event's line as a stand-in for the comment line.
 */
function collectAstRefinements(merged) {
    const out = [];
    // The merged AST has a single namespace from the root. Per-decl
    // namespace provenance was discarded by the multi-file resolver in
    // v0 of that subsystem — v0.5 doesn't change that. We use the
    // root namespace for every event's "carrier ns" field, which is
    // mostly fine for diagnostics; commitment-discharge resolution
    // doesn't depend on it.
    const carrierNs = merged.namespace;
    for (const decl of merged.declarations) {
        const events = decl.events;
        if (!events)
            continue;
        for (const evt of events) {
            if (!evt.refines || evt.refines.length === 0)
                continue;
            out.push({
                file: "(ast)",
                namespace: carrierNs,
                ownerType: decl.name,
                eventName: evt.name,
                eventLine: evt.location?.line ?? 0,
                commentLine: evt.location?.line ?? 0,
                targets: evt.refines.map((r) => ({
                    namespace: r.namespace,
                    name: r.name,
                    eventName: r.eventName,
                })),
            });
        }
    }
    return out;
}
/**
 * Drop annotations that carry only targets already present in an
 * earlier annotation for the same (ownerType, eventName). Comment-
 * mined and AST-derived entries can express the same refines edge;
 * we want the coverage / Liskov tables to count each edge once.
 *
 * AST entries (file === "(ast)") win when there's an equivalent
 * comment entry: we process them FIRST so their target-keys claim
 * the slot. Comment entries whose every target is already claimed
 * are dropped wholesale; comment entries with NEW targets keep just
 * those new targets.
 */
function dedupeAnnotations(list) {
    const seen = new Set();
    const out = [];
    const astFirst = list.filter((a) => a.file === "(ast)");
    const commentsLater = list.filter((a) => a.file !== "(ast)");
    for (const ann of [...astFirst, ...commentsLater]) {
        const keepTargets = [];
        for (const tgt of ann.targets) {
            const key = `${ann.ownerType}.${ann.eventName}::` +
                `${tgt.namespace ?? ""}::${tgt.name}` +
                `${tgt.eventName ? "." + tgt.eventName : ""}`;
            if (seen.has(key))
                continue;
            seen.add(key);
            keepTargets.push(tgt);
        }
        if (keepTargets.length === 0)
            continue;
        out.push({ ...ann, targets: keepTargets });
    }
    return out;
}
//# sourceMappingURL=interStageCheck.js.map