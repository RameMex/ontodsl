/**
 * Phase 17 / Paso 5 day 4 — Schema migration tooling.
 *
 * `diffOnto(oldAst, newAst)` walks two parsed `.onto` files and
 * reports every observable change, classified into three buckets:
 *
 *   - BREAKING — consumers of the OLD file will fail to compile / run
 *                against the NEW file. Type removed, property removed,
 *                property type changed in an incompatible direction,
 *                event signature changed, pre/post/invariant clauses
 *                modified (treated as breaking by default — without a
 *                Z3 implication check we can't prove "strengthened
 *                pre" is breaking vs "weakened post" is breaking).
 *
 *   - ADDITIVE — new in the NEW file but not in the OLD. Adds a type
 *                / property / event / clause without removing
 *                anything the consumer relied on.
 *
 *   - INTERNAL — present in both, no observable structural change at
 *                the API surface (e.g. reordered declarations, comment
 *                changes — though comments are stripped by parser).
 *
 * Why this matters: when an upstream `.onto` library bumps versions,
 * the consumer wants to know "what do I need to update in my code?"
 * Answer: the diff's BREAKING list. ADDITIVE changes are safe to
 * adopt incrementally.
 *
 * v1 limitations (deferred to day 5+):
 *   - No rename detection — a property renamed from `voltage_v` to
 *     `voltage` shows as (removed voltage_v, added voltage). Lift:
 *     heuristic match on type + similar name + invariant overlap.
 *   - No Z3-backed pre/post implication check — all clause changes
 *     are BREAKING by default. Lift: integrate with lspCheck.ts
 *     to detect "weakened pre" / "strengthened post" as safe.
 *   - No commitment / use-case / happening diff (only body-bearing
 *     decls). Trivial to add when needed.
 */
const BODY_BEARING = new Set([
    "KindDecl", "SubkindDecl", "RoleDecl", "RelatorDecl", "CategoryDecl",
    "MixinDecl", "RoleMixinDecl", "ModeDecl", "QualityDecl", "CollectiveDecl",
    "QuantityDecl", "HappeningDecl", "AgentDecl", "CommitmentDecl", "UseCaseDecl",
]);
export function diffOnto(oldAst, newAst) {
    const oldByName = indexBodyBearing(oldAst);
    const newByName = indexBodyBearing(newAst);
    const changes = [];
    // ─── Type-level: added / removed ──────────────────────────────
    for (const name of newByName.keys()) {
        if (!oldByName.has(name)) {
            changes.push(classify({ kind: "type-added", name }));
        }
    }
    for (const name of oldByName.keys()) {
        if (!newByName.has(name)) {
            changes.push(classify({ kind: "type-removed", name }));
        }
    }
    // ─── Per-type: properties, events, invariants ─────────────────
    for (const [name, oldDecl] of oldByName) {
        const newDecl = newByName.get(name);
        if (!newDecl)
            continue; // type-removed already recorded
        diffOneType(oldDecl, newDecl, changes);
    }
    const summary = {
        breaking: changes.filter((c) => c.classification === "BREAKING").length,
        additive: changes.filter((c) => c.classification === "ADDITIVE").length,
        internal: changes.filter((c) => c.classification === "INTERNAL").length,
        total: changes.length,
    };
    return {
        schemaVersion: "ontodls-diff/1",
        summary,
        changes,
    };
}
function indexBodyBearing(ast) {
    const out = new Map();
    for (const d of ast.declarations) {
        if (BODY_BEARING.has(d.kind))
            out.set(d.name, d);
    }
    return out;
}
function diffOneType(oldDecl, newDecl, changes) {
    const typeName = oldDecl.name;
    // Properties (own only — inheritance comparison is harder, left
    // for day 5 when we have effectiveProperties-based diff)
    const oldProps = ("properties" in oldDecl ? oldDecl.properties : []);
    const newProps = ("properties" in newDecl ? newDecl.properties : []);
    const oldPropMap = new Map(oldProps.map((p) => [p.name, p]));
    const newPropMap = new Map(newProps.map((p) => [p.name, p]));
    for (const [propName, newProp] of newPropMap) {
        if (!oldPropMap.has(propName)) {
            changes.push(classify({
                kind: "property-added",
                typeName,
                propertyName: propName,
                propertyType: typeRefStr(newProp.propertyType),
            }));
        }
    }
    for (const [propName, oldProp] of oldPropMap) {
        const newProp = newPropMap.get(propName);
        if (!newProp) {
            changes.push(classify({ kind: "property-removed", typeName, propertyName: propName }));
            continue;
        }
        // Property exists in both — compare type.
        const oldStr = typeRefStr(oldProp.propertyType);
        const newStr = typeRefStr(newProp.propertyType);
        if (oldStr !== newStr) {
            changes.push(classify({
                kind: "property-type-changed",
                typeName,
                propertyName: propName,
                oldType: oldStr,
                newType: newStr,
            }));
        }
    }
    // Events
    const oldEvents = ("events" in oldDecl ? oldDecl.events : []);
    const newEvents = ("events" in newDecl ? newDecl.events : []);
    const oldEvMap = new Map(oldEvents.map((e) => [e.name, e]));
    const newEvMap = new Map(newEvents.map((e) => [e.name, e]));
    for (const [evName, newEv] of newEvMap) {
        if (!oldEvMap.has(evName)) {
            changes.push(classify({ kind: "event-added", typeName, eventName: evName }));
        }
    }
    for (const [evName, oldEv] of oldEvMap) {
        const newEv = newEvMap.get(evName);
        if (!newEv) {
            changes.push(classify({ kind: "event-removed", typeName, eventName: evName }));
            continue;
        }
        // Both exist — compare signature + pre/post.
        const sigDelta = compareEventSignatures(oldEv, newEv);
        if (sigDelta) {
            changes.push(classify({
                kind: "event-signature-changed",
                typeName,
                eventName: evName,
                description: sigDelta,
            }));
        }
        diffEventClauses(typeName, oldEv, newEv, changes);
    }
    // Invariants
    const oldInvs = ("invariants" in oldDecl ? oldDecl.invariants : []);
    const newInvs = ("invariants" in newDecl ? newDecl.invariants : []);
    diffClauseList("invariant", oldInvs.map((i) => i.rawExpression), newInvs.map((i) => i.rawExpression), (kind, expr) => {
        if (kind === "added") {
            changes.push(classify({ kind: "invariant-added", typeName, expression: expr }));
        }
        else {
            changes.push(classify({ kind: "invariant-removed", typeName, expression: expr }));
        }
    });
}
function diffEventClauses(typeName, oldEv, newEv, changes) {
    diffClauseList("pre", oldEv.pre.map((c) => c.rawExpression), newEv.pre.map((c) => c.rawExpression), (kind, expr) => {
        if (kind === "added") {
            changes.push(classify({ kind: "pre-added", typeName, eventName: oldEv.name, expression: expr }));
        }
        else {
            changes.push(classify({ kind: "pre-removed", typeName, eventName: oldEv.name, expression: expr }));
        }
    });
    diffClauseList("post", oldEv.post.map((c) => c.rawExpression), newEv.post.map((c) => c.rawExpression), (kind, expr) => {
        if (kind === "added") {
            changes.push(classify({ kind: "post-added", typeName, eventName: oldEv.name, expression: expr }));
        }
        else {
            changes.push(classify({ kind: "post-removed", typeName, eventName: oldEv.name, expression: expr }));
        }
    });
}
function diffClauseList(_kind, oldList, newList, emit) {
    const oldNorm = new Set(oldList.map(normalizeExpr));
    const newNorm = new Set(newList.map(normalizeExpr));
    for (const e of newList) {
        if (!oldNorm.has(normalizeExpr(e)))
            emit("added", e);
    }
    for (const e of oldList) {
        if (!newNorm.has(normalizeExpr(e)))
            emit("removed", e);
    }
}
/**
 * Normalise a raw OCL expression for set-equality comparison.
 * Collapses whitespace + trims so cosmetic reformatting doesn't
 * look like a real change.
 */
function normalizeExpr(s) {
    return s.replace(/\s+/g, " ").trim();
}
function compareEventSignatures(oldEv, newEv) {
    const reasons = [];
    if (oldEv.parameters.length !== newEv.parameters.length) {
        reasons.push(`parameter count changed: ${oldEv.parameters.length} → ${newEv.parameters.length}`);
    }
    else {
        for (let i = 0; i < oldEv.parameters.length; i += 1) {
            const a = oldEv.parameters[i];
            const b = newEv.parameters[i];
            if (a.name !== b.name) {
                reasons.push(`param ${i + 1} renamed: '${a.name}' → '${b.name}'`);
            }
            const aT = typeRefStr(a.parameterType);
            const bT = typeRefStr(b.parameterType);
            if (aT !== bT) {
                reasons.push(`param '${a.name}' type changed: ${aT} → ${bT}`);
            }
        }
    }
    const oldRet = oldEv.returnType === null ? "()" : typeRefStr(oldEv.returnType);
    const newRet = newEv.returnType === null ? "()" : typeRefStr(newEv.returnType);
    if (oldRet !== newRet) {
        reasons.push(`return type changed: ${oldRet} → ${newRet}`);
    }
    return reasons.length > 0 ? reasons.join("; ") : null;
}
function typeRefStr(t) {
    if (t.kind === "PrimitiveType")
        return t.name;
    if (t.kind === "NamedType") {
        return t.qualifier ? `${t.qualifier}.${t.name}` : t.name;
    }
    if (t.kind === "SetType")
        return `Set<${typeRefStr(t.elementType)}>`;
    if (t.kind === "OptionType")
        return `Option<${typeRefStr(t.elementType)}>`;
    if (t.kind === "ArrayType")
        return `Array<${typeRefStr(t.elementType)}, ${t.size}>`;
    return "?";
}
// ─── Classification ──────────────────────────────────────────────
function classify(entry) {
    switch (entry.kind) {
        case "type-added":
            return {
                ...entry,
                classification: "ADDITIVE",
                rationale: "new type — existing consumers unaffected",
            };
        case "type-removed":
            return {
                ...entry,
                classification: "BREAKING",
                rationale: "consumers referencing this type will fail with S11",
            };
        case "property-added":
            return {
                ...entry,
                classification: "ADDITIVE",
                rationale: "consumers that don't construct this type are unaffected; " +
                    "constructor signature changes — new field added to factory",
            };
        case "property-removed":
            return {
                ...entry,
                classification: "BREAKING",
                rationale: "consumers reading this property will fail to compile",
            };
        case "property-type-changed":
            return {
                ...entry,
                classification: "BREAKING",
                rationale: "property type changed; consumers' field reads will fail to typecheck " +
                    "unless the change is a documented widening",
            };
        case "event-added":
            return {
                ...entry,
                classification: "ADDITIVE",
                rationale: "new event — existing consumers unaffected",
            };
        case "event-removed":
            return {
                ...entry,
                classification: "BREAKING",
                rationale: "consumers calling this event will fail",
            };
        case "event-signature-changed":
            return {
                ...entry,
                classification: "BREAKING",
                rationale: "event signature changed; consumers must update call sites",
            };
        case "invariant-added":
            return {
                ...entry,
                classification: "BREAKING",
                rationale: "new invariant — producer now requires a condition consumers " +
                    "may not satisfy; existing instances may fail validate()",
            };
        case "invariant-removed":
            return {
                ...entry,
                classification: "ADDITIVE",
                rationale: "invariant relaxed — previously-rejected inputs may now succeed; " +
                    "no consumer breakage",
            };
        case "pre-added":
            return {
                ...entry,
                classification: "BREAKING",
                rationale: "new precondition — producer now rejects calls that previously " +
                    "succeeded; consumers must guard their call sites",
            };
        case "pre-removed":
            return {
                ...entry,
                classification: "ADDITIVE",
                rationale: "precondition dropped — consumers' guarded calls now succeed in " +
                    "more cases (also: callers' guards become dead code)",
            };
        case "post-added":
            return {
                ...entry,
                classification: "ADDITIVE",
                rationale: "stronger postcondition — producer now guarantees more; " +
                    "consumers benefit (also: implementation may break)",
            };
        case "post-removed":
            return {
                ...entry,
                classification: "BREAKING",
                rationale: "weaker postcondition — producer guarantees less; consumers' " +
                    "code that relied on the dropped post-state needs review",
            };
    }
}
// ─── Rendering ─────────────────────────────────────────────────────
/** Render a one-line summary of a diff entry. */
export function renderEntry(c) {
    switch (c.kind) {
        case "type-added": return `+ type ${c.name}`;
        case "type-removed": return `- type ${c.name}`;
        case "property-added": return `+ ${c.typeName}.${c.propertyName}: ${c.propertyType}`;
        case "property-removed": return `- ${c.typeName}.${c.propertyName}`;
        case "property-type-changed":
            return `~ ${c.typeName}.${c.propertyName}: ${c.oldType} → ${c.newType}`;
        case "event-added": return `+ ${c.typeName}.${c.eventName}()`;
        case "event-removed": return `- ${c.typeName}.${c.eventName}()`;
        case "event-signature-changed":
            return `~ ${c.typeName}.${c.eventName}(): ${c.description}`;
        case "invariant-added": return `+ ${c.typeName} invariant: ${c.expression}`;
        case "invariant-removed": return `- ${c.typeName} invariant: ${c.expression}`;
        case "pre-added": return `+ ${c.typeName}.${c.eventName} pre: ${c.expression}`;
        case "pre-removed": return `- ${c.typeName}.${c.eventName} pre: ${c.expression}`;
        case "post-added": return `+ ${c.typeName}.${c.eventName} post: ${c.expression}`;
        case "post-removed": return `- ${c.typeName}.${c.eventName} post: ${c.expression}`;
    }
}
/**
 * Render a human-readable report. Groups by classification with the
 * BREAKING items first (that's what reviewers scan for).
 */
export function renderHumanReport(report) {
    const lines = [];
    lines.push(`schema diff (ontodls-diff/${report.schemaVersion.split("/")[1]})`);
    lines.push("");
    lines.push(`summary: ${report.summary.breaking} breaking, ` +
        `${report.summary.additive} additive, ` +
        `${report.summary.internal} internal ` +
        `(${report.summary.total} total)`);
    lines.push("");
    const breakingChanges = report.changes.filter((c) => c.classification === "BREAKING");
    const additiveChanges = report.changes.filter((c) => c.classification === "ADDITIVE");
    const internalChanges = report.changes.filter((c) => c.classification === "INTERNAL");
    if (breakingChanges.length > 0) {
        lines.push("BREAKING:");
        for (const c of breakingChanges) {
            lines.push(`  ${renderEntry(c)}`);
            lines.push(`      why: ${c.rationale}`);
        }
        lines.push("");
    }
    if (additiveChanges.length > 0) {
        lines.push("ADDITIVE:");
        for (const c of additiveChanges)
            lines.push(`  ${renderEntry(c)}`);
        lines.push("");
    }
    if (internalChanges.length > 0) {
        lines.push("INTERNAL:");
        for (const c of internalChanges)
            lines.push(`  ${renderEntry(c)}`);
        lines.push("");
    }
    if (report.summary.total === 0) {
        lines.push("(no changes detected)");
    }
    return lines.join("\n");
}
//# sourceMappingURL=diff.js.map