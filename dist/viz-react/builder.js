/**
 * Phase 9.5 — buildReactFlowGraph
 *
 * Turns an OntoFile AST into the data shape React Flow consumes.
 * Returns an OntoGraph (nodes + edges) suitable for rendering with
 * a custom React Flow setup. The caller is responsible for layout
 * (typically dagre or elkjs) and for providing node/edge components
 * keyed by the categories we emit.
 *
 * Edge id strategy: we use stable, deterministic ids derived from
 * source + target + category + a per-pair counter. This matters for
 * React Flow's reconciliation — when the user re-renders after a
 * change to the .onto source, edges with the same id are matched
 * by reference and animations continue smoothly. Random UUIDs would
 * cause "everything changed" each render.
 */
import { parentsOf } from "../semantic/inheritance.js";
import { categoryOf, stereotypeLabel, renderTypeRef, } from "./types.js";
export function buildReactFlowGraph(file) {
    const declByName = new Map();
    for (const d of file.declarations)
        declByName.set(d.name, d);
    const nodes = [];
    const edges = [];
    // Track edge id collisions deterministically. We salt the counter
    // with `${source}|${target}|${category}` so two different
    // <<componentOf>> edges between the same pair (rare but legal)
    // don't collapse to the same id.
    const edgeCounters = new Map();
    function nextEdgeId(source, target, category) {
        const key = `${source}|${target}|${category}`;
        const next = (edgeCounters.get(key) ?? 0) + 1;
        edgeCounters.set(key, next);
        return next === 1 ? `${key}` : `${key}#${next}`;
    }
    // ─── Nodes ──────────────────────────────────────────────────────
    for (const d of file.declarations) {
        if (d.kind === "RelationDecl")
            continue; // edges, not nodes
        nodes.push(buildNode(d));
    }
    // ─── Inheritance edges ──────────────────────────────────────────
    for (const d of file.declarations) {
        if (d.kind === "RelationDecl" || d.kind === "PhaseGroupDecl")
            continue;
        const parents = parentsOfSafe(d);
        for (const parentName of parents) {
            if (!declByName.has(parentName))
                continue; // dangling — validator's job
            const id = nextEdgeId(parentName, d.name, "inheritance");
            edges.push({
                id,
                source: parentName,
                target: d.name,
                type: "inheritance",
                label: "specializes",
                data: {
                    category: "inheritance",
                    label: "specializes",
                    sourceMultiplicity: null,
                    targetMultiplicity: null,
                },
            });
        }
    }
    // ─── Relation edges ─────────────────────────────────────────────
    for (const d of file.declarations) {
        if (d.kind !== "RelationDecl")
            continue;
        const e = buildRelationEdge(d, declByName, nextEdgeId);
        if (e)
            edges.push(e);
    }
    // ─── Commitment endpoint edges (implicit) ──────────────────────
    for (const d of file.declarations) {
        if (d.kind !== "CommitmentDecl")
            continue;
        if (declByName.has(d.debitor)) {
            const id = nextEdgeId(d.debitor, d.name, "commitment_endpoint");
            edges.push({
                id,
                source: d.debitor,
                target: d.name,
                type: "commitment_endpoint",
                label: "debitor",
                data: {
                    category: "commitment_endpoint",
                    label: "debitor",
                    sourceMultiplicity: null,
                    targetMultiplicity: null,
                },
            });
        }
        if (declByName.has(d.creditor)) {
            const id = nextEdgeId(d.creditor, d.name, "commitment_endpoint");
            edges.push({
                id,
                source: d.creditor,
                target: d.name,
                type: "commitment_endpoint",
                label: "creditor",
                data: {
                    category: "commitment_endpoint",
                    label: "creditor",
                    sourceMultiplicity: null,
                    targetMultiplicity: null,
                },
            });
        }
    }
    // ─── Use-case wiring edges (implicit) ──────────────────────────
    for (const d of file.declarations) {
        if (d.kind !== "UseCaseDecl")
            continue;
        for (const actor of d.actors) {
            if (!declByName.has(actor))
                continue;
            const id = nextEdgeId(actor, d.name, "usecase_wiring");
            edges.push({
                id,
                source: actor,
                target: d.name,
                type: "usecase_wiring",
                label: "actor",
                data: {
                    category: "usecase_wiring",
                    label: "actor",
                    sourceMultiplicity: null,
                    targetMultiplicity: null,
                },
            });
        }
        if (declByName.has(d.trigger)) {
            const id = nextEdgeId(d.trigger, d.name, "usecase_wiring");
            edges.push({
                id,
                source: d.trigger,
                target: d.name,
                type: "usecase_wiring",
                label: "trigger",
                data: {
                    category: "usecase_wiring",
                    label: "trigger",
                    sourceMultiplicity: null,
                    targetMultiplicity: null,
                },
            });
        }
        if (declByName.has(d.success)) {
            const id = nextEdgeId(d.name, d.success, "usecase_wiring");
            edges.push({
                id,
                source: d.name,
                target: d.success,
                type: "usecase_wiring",
                label: "success",
                data: {
                    category: "usecase_wiring",
                    label: "success",
                    sourceMultiplicity: null,
                    targetMultiplicity: null,
                },
            });
        }
        if (declByName.has(d.failure)) {
            const id = nextEdgeId(d.name, d.failure, "usecase_wiring");
            edges.push({
                id,
                source: d.name,
                target: d.failure,
                type: "usecase_wiring",
                label: "failure",
                data: {
                    category: "usecase_wiring",
                    label: "failure",
                    sourceMultiplicity: null,
                    targetMultiplicity: null,
                },
            });
        }
    }
    return { nodes, edges };
}
// ─── Internals ──────────────────────────────────────────────────────
function buildNode(d) {
    const category = categoryOf(d.kind);
    const stereotype = stereotypeLabel(d.kind);
    const properties = [];
    if ("properties" in d) {
        for (const p of d.properties) {
            properties.push({ name: p.name, type: renderTypeRef(p.propertyType) });
        }
    }
    const headerSlots = [];
    switch (d.kind) {
        case "RelatorDecl":
            headerSlots.push({ label: "mediates", value: d.mediates.join(", ") });
            break;
        case "CollectiveDecl":
            headerSlots.push({ label: "ofMember", value: d.ofMember });
            break;
        case "RoleDecl":
            headerSlots.push({ label: "ofKind", value: d.ofKind });
            headerSlots.push({ label: "mediatedBy", value: d.mediatedBy });
            break;
        case "ModeDecl":
        case "QualityDecl":
            headerSlots.push({ label: "bearer", value: d.ofBearer });
            break;
        case "CommitmentDecl":
            headerSlots.push({ label: "debitor", value: d.debitor });
            headerSlots.push({ label: "creditor", value: d.creditor });
            if (d.predicate) {
                headerSlots.push({
                    label: "predicate",
                    value: d.predicate.rawExpression,
                });
            }
            break;
        case "UseCaseDecl":
            headerSlots.push({
                label: "actors",
                value: d.actors.length === 0 ? "(none)" : d.actors.join(", "),
            });
            headerSlots.push({ label: "trigger", value: d.trigger });
            headerSlots.push({ label: "success", value: d.success });
            headerSlots.push({ label: "failure", value: d.failure });
            break;
        case "PhaseGroupDecl":
            headerSlots.push({ label: "ofKind", value: d.ofKind });
            headerSlots.push({
                label: "phases",
                value: d.phases.map((p) => p.name).join(", "),
            });
            break;
    }
    const data = {
        name: d.name,
        stereotype,
        category,
        properties,
        identityProperty: "identity" in d && d.identity ? d.identity.propertyName : null,
        headerSlots,
        invariantCount: "invariants" in d ? d.invariants.length : 0,
    };
    return {
        id: d.name,
        type: category,
        position: { x: 0, y: 0 },
        data,
    };
}
function buildRelationEdge(r, declByName, nextId) {
    if (!declByName.has(r.source) || !declByName.has(r.target))
        return null;
    const id = nextId(r.source, r.target, "relation");
    return {
        id,
        source: r.source,
        target: r.target,
        type: "relation",
        label: r.stereotype,
        data: {
            category: "relation",
            label: r.stereotype,
            sourceMultiplicity: formatMultiplicity(r.sourceMultiplicity),
            targetMultiplicity: formatMultiplicity(r.targetMultiplicity),
        },
    };
}
function formatMultiplicity(m) {
    if (!m)
        return null;
    if (m.upper === "*")
        return `${m.lower}..*`;
    if (m.lower === m.upper)
        return String(m.lower);
    return `${m.lower}..${m.upper}`;
}
/**
 * Defensive wrapper around parentsOf — returns an empty array for
 * declarations that parentsOf doesn't handle.
 */
function parentsOfSafe(d) {
    if (d.kind === "RelationDecl" || d.kind === "PhaseGroupDecl")
        return [];
    try {
        return parentsOf(d);
    }
    catch {
        return [];
    }
}
//# sourceMappingURL=builder.js.map