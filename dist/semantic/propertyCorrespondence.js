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
export function checkPropertyCorrespondence(merged, liskovCoverage) {
    const diagnostics = [];
    // Index events by "<Owner>.<eventName>" for quick lookup of the
    // refining children referenced in the Liskov coverage table.
    const eventIdx = new Map();
    // Index kinds-with-properties by name for the property-correspondence
    // check.
    const kindByName = new Map();
    for (const decl of merged.declarations) {
        if (!decl)
            continue;
        kindByName.set(decl.name, decl);
        const t = decl;
        if (Array.isArray(t.events)) {
            for (const evt of t.events) {
                eventIdx.set(`${decl.name}.${evt.name}`, {
                    owner: decl,
                    event: evt,
                });
            }
        }
    }
    const modifiesCoverage = [];
    for (const link of liskovCoverage) {
        const parentEntry = eventIdx.get(`${link.parentOwner}.${link.parentEvent}`);
        if (!parentEntry)
            continue; // Already reported as W37 in v0.2.
        const parentEvent = parentEntry.event;
        const parentOwner = parentEntry.owner;
        const parentModifies = extractModifiedNames(parentEvent);
        // Collect the union of modified property names from every
        // refining child event referenced by the Liskov table. Also
        // collect the union of rename mappings from every refining
        // child KIND (Phase 20 v0.7). A parent's `X` is considered
        // covered if it appears directly in any child's modifies/props,
        // OR if any child declares `renames { X -> Y; }` and Y appears
        // in that child's modifies/props.
        const childModified = new Set();
        const childPropNames = new Set();
        const renames = new Map(); // parentName → set of ownNames
        for (const impl of link.implementers) {
            const childEntry = eventIdx.get(`${impl.ownerType}.${impl.eventName}`);
            if (!childEntry)
                continue; // already covered by W37
            for (const m of extractModifiedNames(childEntry.event)) {
                childModified.add(m);
            }
            // Phase 16: walk specialization chain to include inherited
            // properties. This makes Code-stage subkinds correctly report
            // their inherited Design properties.
            const props = collectAccessibleProperties(childEntry.owner, kindByName);
            for (const p of props)
                childPropNames.add(p);
            // Collect renames declared on this child kind.
            const childRenames = collectRenames(childEntry.owner);
            for (const r of childRenames) {
                const set = renames.get(r.parentName) ?? new Set();
                set.add(r.ownName);
                renames.set(r.parentName, set);
            }
        }
        // Helper: is `parentName` covered by direct match OR via rename
        // through any child component that declared a renaming?
        const coveredByModified = (parentName) => {
            if (childModified.has(parentName))
                return true;
            const aliases = renames.get(parentName);
            if (!aliases)
                return false;
            for (const alias of aliases) {
                if (childModified.has(alias))
                    return true;
            }
            return false;
        };
        const coveredByProperty = (parentName) => {
            if (childPropNames.has(parentName))
                return true;
            const aliases = renames.get(parentName);
            if (!aliases)
                return false;
            for (const alias of aliases) {
                if (childPropNames.has(alias))
                    return true;
            }
            return false;
        };
        // A. modifies-closure check.
        const covered = [];
        const uncovered = [];
        for (const name of parentModifies) {
            if (coveredByModified(name)) {
                covered.push(name);
            }
            else {
                uncovered.push(name);
            }
        }
        if (uncovered.length > 0) {
            diagnostics.push({
                code: "W38",
                message: `[W38] modifies-closure gap on '${link.parentOwner}.${link.parentEvent}': ` +
                    `parent modifies [${parentModifies.join(", ")}] but the refining ` +
                    `events do not cover [${uncovered.join(", ")}]. ` +
                    `Either rename a child property to match, add the property to a ` +
                    `refining component, or omit the parent's modifies entry.`,
                location: parentEvent.location,
            });
        }
        modifiesCoverage.push({
            parentOwner: link.parentOwner,
            parentEvent: link.parentEvent,
            parentModifies,
            covered,
            uncovered,
        });
        // B. property-correspondence check.
        // For each parent-event-modified property, also check that SOME
        // refining child KIND declares a property of that name. This is
        // strictly stronger than (A) — modifies-closure can be satisfied
        // by a child event that mutates a same-named property on a
        // sibling component (rare but possible). (B) catches the case
        // where the property doesn't structurally exist in the
        // decomposition.
        const parentReadWrite = new Set([
            ...parentModifies,
            ...extractReferencedSelfProps(parentEvent),
        ]);
        for (const name of parentReadWrite) {
            if (!coveredByProperty(name)) {
                // Don't double-report: the modifies-closure W38 above already
                // surfaces the property's absence on the write side. Only
                // emit W39 for properties that are referenced but not
                // modified by the parent (read-only state surviving into
                // decomposition).
                if (parentModifies.includes(name))
                    continue;
                diagnostics.push({
                    code: "W39",
                    message: `[W39] property-correspondence gap on '${link.parentOwner}.${link.parentEvent}': ` +
                        `parent event reads/constrains 'self.${name}' but no refining ` +
                        `component kind declares a property named '${name}'.`,
                    location: parentEvent.location,
                });
            }
        }
        void parentOwner; // silence unused for now; v1 may key per-owner reports.
    }
    return { diagnostics, modifiesCoverage };
}
/**
 * The simple property names mentioned in an event's `modifies` clause.
 * For `self.x.y` we extract `x` (the first segment after `self`) — v0.4
 * doesn't trace navigation chains; a refining child that modifies the
 * referenced object on a different path still counts as covering `x`.
 */
function extractModifiedNames(event) {
    const out = new Set();
    for (const m of event.modifies) {
        // ModifiesPath shape: { root: 'self' | string, segments: string[] }
        // (varies by phase). We accept a few shapes and pull the first
        // segment after `self`.
        const path = m;
        const segs = path.segments ?? path.path ?? [];
        if (path.root === "self" && segs.length > 0) {
            out.add(segs[0]);
        }
        else if (segs.length > 1 && segs[0] === "self") {
            out.add(segs[1]);
        }
    }
    return [...out];
}
/**
 * Best-effort extraction of `self.X` property names referenced by
 * the event's pre/post clauses. Used by W39 to detect properties
 * the parent event reads/constrains but the decomposition doesn't
 * carry.
 *
 * v0.4 walks the OCL AST recursively; types are duck-checked so a
 * future schema change to OclExpr doesn't break this.
 */
function extractReferencedSelfProps(event) {
    const out = new Set();
    const visit = (node) => {
        if (!node || typeof node !== "object")
            return;
        const n = node;
        // OclNav: { kind: "OclNav", object: <expr>, property: string, ... }
        if (n.kind === "OclNav") {
            const obj = n.object;
            if (obj && obj.kind === "OclVarRef" && obj.name === "self") {
                const prop = n.property;
                if (typeof prop === "string")
                    out.add(prop);
            }
            // Continue descending — properties may also live in nested exprs.
        }
        for (const key of Object.keys(n)) {
            const v = n[key];
            if (Array.isArray(v))
                v.forEach(visit);
            else if (typeof v === "object")
                visit(v);
        }
    };
    for (const c of event.pre)
        visit(c.parsed);
    for (const c of event.post)
        visit(c.parsed);
    return [...out];
}
/**
 * Names of the kind's directly-declared properties (NOT inherited).
 * Used to check whether the refining component STRUCTURALLY carries a
 * property by that name. Inheritance is not chased: in a Design stage
 * the components are sibling kinds (not subkinds of the system kind),
 * so the property must appear on the component itself.
 */
/**
 * Property names structurally accessible from this kind/subkind —
 * own + inherited via `specializes` chain. Phase 16 (Bloque 2 v0.10).
 *
 * Why this matters for the Code stage: a Code-stage subkind that
 * specializes a Design kind inherits all Design properties.
 * Without walking the chain, W39 fires false-positives because
 * the Code subkind has no OWN properties (everything comes from
 * the Design parent).
 *
 * Walks ONLY `specializes` ancestry (kind/subkind inheritance);
 * does NOT include category-membership properties (those are
 * non-sortal and not transferable in the same sense).
 */
function collectAccessibleProperties(t, typeIndex) {
    const names = new Set();
    const visited = new Set();
    const walk = (decl) => {
        if (visited.has(decl.name))
            return;
        visited.add(decl.name);
        const own = decl.properties;
        if (own)
            for (const p of own)
                names.add(p.name);
        const parents = decl
            .specializes ?? [];
        for (const parentName of parents) {
            const parentDecl = typeIndex.get(parentName);
            if (parentDecl)
                walk(parentDecl);
        }
    };
    walk(t);
    return [...names];
}
/**
 * Phase 20 (Bloque 2 v0.7) — pull the property-rename map declared
 * on a kind/subkind via the `renames { parent -> own; ... }` clause.
 * Returns empty array for type-decls that have no renames clause.
 */
function collectRenames(t) {
    const renames = t.renames;
    return renames ?? [];
}
//# sourceMappingURL=propertyCorrespondence.js.map