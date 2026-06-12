/**
 * Phase 15 — Rust struct generation. Phase 15.7: target-aware (alloc/no-alloc).
 *
 * Branded IDs derive Eq+Hash+Ord+PartialOrd. Structs derive Debug+Clone+PartialEq.
 * In no-alloc mode, structs additionally derive Eq+Hash to enable use in
 * heapless::FnvIndexSet/Map (Set elements + commitment registries need Eq+Hash).
 *
 * Type mapping is delegated to typeMapping.ts.
 */
import { effectiveProperties, detectCycles, } from "../semantic/inheritance.js";
import { rustString, renderTypeRef as mapTypeRef, } from "./typeMapping.js";
import { toRustFieldName, toRustTypeName } from "./naming.js";
const IDENTITY_SUPPLIERS = new Set([
    "KindDecl",
    "RelatorDecl",
    "CollectiveDecl",
    "QuantityDecl",
    "HappeningDecl",
    "AgentDecl",
    "CommitmentDecl",
    "UseCaseDecl",
]);
const BODY_BEARING = new Set([
    "KindDecl",
    "SubkindDecl",
    "RoleDecl",
    "RelatorDecl",
    "CategoryDecl",
    "MixinDecl",
    "RoleMixinDecl",
    "ModeDecl",
    "QualityDecl",
    "CollectiveDecl",
    "QuantityDecl",
    "HappeningDecl",
    "AgentDecl",
    "CommitmentDecl",
    "UseCaseDecl",
]);
export function renderRustTypes(file, cfg) {
    const lines = [];
    const typeDecls = new Map();
    const byName = new Map();
    for (const d of file.declarations) {
        byName.set(d.name, d);
        if (d.kind !== "RelationDecl" && d.kind !== "PhaseGroupDecl") {
            typeDecls.set(d.name, d);
        }
    }
    const idx = { byName, typeDecls };
    const cycleSet = detectCycles(idx);
    lines.push("// ─── Branded identity types ───");
    lines.push("");
    for (const d of file.declarations) {
        if (!IDENTITY_SUPPLIERS.has(d.kind))
            continue;
        lines.push(...renderBrandedId(d, idx, cycleSet, cfg));
        lines.push("");
    }
    lines.push("// ─── Structs ───");
    lines.push("");
    for (const d of file.declarations) {
        if (!BODY_BEARING.has(d.kind))
            continue;
        lines.push(...renderStruct(d, idx, cycleSet, cfg));
        lines.push("");
    }
    return lines.join("\n");
}
function renderBrandedId(d, idx, cycleSet, cfg) {
    const idName = `${toRustTypeName(d.name)}Id`;
    // Previously the inner type was hard-coded to `rustString(cfg)`, which
    // silently truncated Integer-typed identities to "" (zero-init String).
    // Surfaced 2026-05-20 by AP_BattMonitor (`identity: instanceId;
    // property instanceId: Integer`) where the constructor took
    // `String` for an Integer field. Now we look up the identity
    // property's actual declared type and reuse the standard mapping.
    const inner = identityInnerType(d, idx, cycleSet, cfg);
    // Eq/Hash/Ord/PartialOrd are needed for use in BTreeSet/BTreeMap.
    // f64 only implements PartialOrd/PartialEq (no full Ord/Eq), so when
    // the identity field is Real we drop Ord/Eq from the derive — the
    // branded type becomes a partially-ordered key. This is rare in
    // practice (Real identities are an anti-pattern) but at least the
    // code compiles instead of failing on the derive.
    const inner_t = identityInnerTypeRef(d, idx, cycleSet);
    const isReal = inner_t?.kind === "PrimitiveType" && inner_t.name === "Real";
    const derives = isReal
        ? "Debug, Clone, PartialEq, PartialOrd"
        : "Debug, Clone, PartialEq, Eq, Hash, Ord, PartialOrd";
    return [
        `/// Identity type for ${d.name}.`,
        `#[derive(${derives})]`,
        `pub struct ${idName}(pub ${inner});`,
    ];
}
/**
 * Returns the Rust type string for an identity field's inner value,
 * falling back to the alloc/no-alloc String when no identity is
 * declared or the property can't be resolved.
 */
function identityInnerType(d, idx, cycleSet, cfg) {
    const t = identityInnerTypeRef(d, idx, cycleSet);
    return t ? mapTypeRef(t, cfg) : rustString(cfg);
}
function identityInnerTypeRef(d, idx, cycleSet) {
    if (!("identity" in d) || !d.identity)
        return null;
    const propName = d.identity.propertyName;
    const allProps = effectiveProperties(d.name, idx, cycleSet);
    return allProps.get(propName)?.prop.propertyType ?? null;
}
function renderStruct(d, idx, cycleSet, cfg) {
    const stereotype = stereotypeLabel(d);
    const lines = [];
    lines.push(`/// <<${stereotype}>> ${d.name}`);
    lines.push(`#[derive(Debug, Clone, PartialEq)]`);
    lines.push(`pub struct ${toRustTypeName(d.name)} {`);
    const allProps = effectiveProperties(d.name, idx, cycleSet);
    const idPropName = getIdentityPropertyName(d);
    for (const { prop } of allProps.values()) {
        lines.push(...renderField(prop, d.name, idPropName, cfg));
    }
    lines.push(`}`);
    return lines;
}
function getIdentityPropertyName(d) {
    if ("identity" in d && d.identity)
        return d.identity.propertyName;
    return null;
}
function renderField(p, ownerName, idPropName, cfg) {
    const isIdentity = p.name === idPropName;
    const ty = isIdentity
        ? `${toRustTypeName(ownerName)}Id`
        : mapTypeRef(p.propertyType, cfg);
    return [`    pub ${toRustFieldName(p.name)}: ${ty},`];
}
function renderTypeRef(t, cfg) {
    return mapTypeRef(t, cfg);
}
function stereotypeLabel(d) {
    switch (d.kind) {
        case "KindDecl":
            return "Kind";
        case "SubkindDecl":
            return "Subkind";
        case "RoleDecl":
            return "Role";
        case "RelatorDecl":
            return "Relator";
        case "CategoryDecl":
            return "Category";
        case "MixinDecl":
            return "Mixin";
        case "RoleMixinDecl":
            return "RoleMixin";
        case "ModeDecl":
            return "Mode";
        case "QualityDecl":
            return "Quality";
        case "CollectiveDecl":
            return "Collective";
        case "QuantityDecl":
            return "Quantity";
        case "HappeningDecl":
            return "Happening";
        case "AgentDecl":
            return "Agent";
        case "CommitmentDecl":
            return "Commitment";
        case "UseCaseDecl":
            return "UseCase";
        case "RelationDecl":
        case "PhaseGroupDecl":
            return "Structural";
    }
}
//# sourceMappingURL=types.js.map