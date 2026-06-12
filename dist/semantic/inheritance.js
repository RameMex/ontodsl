/**
 * Return the declared `specializes` parents for a type node.
 * Roles and aspects return empty array because they don't carry a
 * `specializes` field in Phase 3.
 */
export function parentsOf(decl) {
    switch (decl.kind) {
        case "KindDecl":
        case "CategoryDecl":
        case "MixinDecl":
        case "RoleMixinDecl":
        case "SubkindDecl":
        case "RoleDecl":
        case "ModeDecl":
        case "QualityDecl":
        case "RelatorDecl":
        case "CollectiveDecl":
        case "QuantityDecl":
        case "HappeningDecl":
        case "AgentDecl":
        case "CommitmentDecl":
        case "UseCaseDecl":
            return decl.specializes;
    }
}
/**
 * Return every type that sits on a specialization cycle.
 *
 * We walk each type and follow parent pointers, colouring nodes white ->
 * grey -> black. A grey hit is a cycle; we record every grey name we saw
 * on the way to the hit so the reporter can attribute the cycle precisely.
 */
export function detectCycles(idx) {
    const offenders = new Set();
    const BLACK = Symbol();
    const colour = new Map();
    const visit = (name, stack) => {
        const c = colour.get(name);
        if (c === BLACK)
            return;
        if (c === "grey") {
            // Cycle: mark everything from the first occurrence of `name` in the
            // stack down to the current position.
            const idxOf = stack.indexOf(name);
            if (idxOf >= 0) {
                for (let i = idxOf; i < stack.length; i += 1) {
                    const n = stack[i];
                    if (n !== undefined)
                        offenders.add(n);
                }
            }
            offenders.add(name);
            return;
        }
        const node = idx.typeDecls.get(name);
        if (!node)
            return; // unresolved parents are handled by S21
        colour.set(name, "grey");
        stack.push(name);
        const parents = parentsOf(node);
        for (const p of parents) {
            visit(p, stack);
        }
        stack.pop();
        colour.set(name, BLACK);
    };
    for (const name of idx.typeDecls.keys()) {
        if (!colour.has(name))
            visit(name, []);
    }
    return offenders;
}
/**
 * Build the specialization chain for `name` as an array with the ROOT
 * (most general) ancestor first and the type itself last.
 *
 * Returns `null` when:
 *   - the type doesn't exist, or
 *   - the chain encounters a type that isn't registered (unresolved
 *     parent — S21 handles that error), or
 *   - the chain is cyclic (cycles are handled by S15).
 *
 * Callers that only need safe iteration should pre-filter with
 * detectCycles() to avoid paying to discover cycles twice.
 */
export function chainOf(name, idx, cycleSet = new Set()) {
    if (cycleSet.has(name))
        return null;
    const mroCache = new Map();
    const visiting = new Set();
    function mro(cls) {
        if (mroCache.has(cls))
            return mroCache.get(cls);
        if (cycleSet.has(cls) || visiting.has(cls))
            return null;
        visiting.add(cls);
        const node = idx.typeDecls.get(cls);
        if (!node) {
            visiting.delete(cls);
            return null;
        }
        const parents = parentsOf(node);
        if (parents.length === 0) {
            const res = [cls];
            mroCache.set(cls, res);
            visiting.delete(cls);
            return res;
        }
        const parentMros = [];
        for (const p of parents) {
            const pm = mro(p);
            if (!pm) {
                visiting.delete(cls);
                return null;
            }
            parentMros.push([...pm]); // copy to avoid mutation during merge
        }
        // C3 merge
        const seqs = [...parentMros, [...parents]];
        const result = [cls];
        while (seqs.length > 0) {
            // Filter out empty sequences
            for (let i = seqs.length - 1; i >= 0; i--) {
                if (seqs[i].length === 0)
                    seqs.splice(i, 1);
            }
            if (seqs.length === 0)
                break;
            let candidate = null;
            for (const seq of seqs) {
                const head = seq[0];
                // Check if head is in the tail of ANY sequence
                const inTail = seqs.some(s => s.slice(1).includes(head));
                if (!inTail) {
                    candidate = head;
                    break;
                }
            }
            if (!candidate) {
                // Unresolvable MRO (inconsistent hierarchy)
                visiting.delete(cls);
                return null;
            }
            result.push(candidate);
            for (const seq of seqs) {
                if (seq[0] === candidate)
                    seq.shift();
            }
        }
        mroCache.set(cls, result);
        visiting.delete(cls);
        return result;
    }
    const mroArr = mro(name);
    if (!mroArr)
        return null;
    // `mroArr` goes child -> ... -> root; reverse so root is first.
    const chain = [...mroArr].reverse().map(n => idx.typeDecls.get(n));
    return chain;
}
/**
 * Effective (inherited + own) properties of a type, keyed by name.
 * Children override parents on name collisions — but S22/S23 will flag
 * property shadowing because properties don't support `override`.
 */
export function effectiveProperties(name, idx, cycleSet) {
    const out = new Map();
    const chain = chainOf(name, idx, cycleSet);
    if (!chain)
        return out;
    for (const node of chain) {
        for (const p of node.properties) {
            out.set(p.name, { declaredOn: node.name, prop: p });
        }
    }
    return out;
}
/** Effective events (for override / LSP checks). */
export function effectiveEvents(name, idx, cycleSet) {
    const out = new Map();
    const chain = chainOf(name, idx, cycleSet);
    if (!chain)
        return out;
    for (const node of chain) {
        for (const e of node.events) {
            out.set(e.name, { declaredOn: node.name, event: e });
        }
    }
    return out;
}
/** Effective queries. */
export function effectiveQueries(name, idx, cycleSet) {
    const out = new Map();
    const chain = chainOf(name, idx, cycleSet);
    if (!chain)
        return out;
    for (const node of chain) {
        for (const q of node.queries) {
            out.set(q.name, { declaredOn: node.name, query: q });
        }
    }
    return out;
}
/**
 * Given a declaration, return its DIRECT (i.e. own) events keyed by name.
 * Convenience wrapper used by the override rules.
 */
export function ownEvents(decl) {
    return new Map(decl.events.map((e) => [e.name, e]));
}
/** Given a declaration, return its DIRECT (i.e. own) queries keyed by name. */
export function ownQueries(decl) {
    return new Map(decl.queries.map((q) => [q.name, q]));
}
//# sourceMappingURL=inheritance.js.map