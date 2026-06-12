/** Phase 15.7: target-aware (alloc/no-alloc). */
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
export function renderRustFactories(file, cfg) {
    const lines = [];
    lines.push("// ─── Constructors ───");
    lines.push("");
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
    for (const d of file.declarations) {
        if (!IDENTITY_SUPPLIERS.has(d.kind))
            continue;
        if (!("identity" in d) || !d.identity)
            continue;
        if (!("properties" in d) || d.properties.length === 0)
            continue;
        lines.push(...renderConstructor(d, idx, cycleSet, cfg));
        lines.push("");
    }
    return lines.join("\n");
}
function renderConstructor(d, idx, cycleSet, cfg) {
    if (!("properties" in d) || !("identity" in d) || !d.identity)
        return [];
    const lines = [];
    const idPropName = d.identity.propertyName;
    const idTypeName = `${toRustTypeName(d.name)}Id`;
    const allProps = effectiveProperties(d.name, idx, cycleSet);
    // Phase 16b: properties marked `internal` are NOT constructor
    // parameters — they're initialized to their `default` (or to the
    // natural zero of their type if no default was declared). The
    // identity property is never internal (a Kind without an
    // identity-supplying constructor input wouldn't be useful).
    const params = [];
    for (const { prop } of allProps.values()) {
        if (prop.isInternal && prop.name !== idPropName)
            continue;
        // The identity slot used to take `rustString(cfg)` unconditionally,
        // which silently coerced Integer / branded-numeric identities to
        // empty Strings (bug surfaced by AP_BattMonitor 2026-05-20). The
        // constructor now takes the identity property's actual declared
        // Rust type — same as any other parameter — and the branded
        // newtype wraps that value in the struct body.
        const ty = renderTypeRefForParam(prop.propertyType, cfg);
        params.push(`        ${toRustFieldName(prop.name)}: ${ty},`);
    }
    lines.push(`impl ${toRustTypeName(d.name)} {`);
    lines.push(`    pub fn new(`);
    for (const p of params)
        lines.push(p);
    lines.push(`    ) -> Self {`);
    lines.push(`        Self {`);
    for (const { prop } of allProps.values()) {
        const fieldName = toRustFieldName(prop.name);
        if (prop.name === idPropName) {
            lines.push(`            ${fieldName}: ${idTypeName}(${fieldName}),`);
        }
        else if (prop.isInternal) {
            lines.push(`            ${fieldName}: ${rustDefaultExpr(prop, cfg)},`);
        }
        else {
            lines.push(`            ${fieldName},`);
        }
    }
    lines.push(`        }`);
    lines.push(`    }`);
    lines.push(`}`);
    return lines;
}
/**
 * Compute the Rust expression used to initialize an `internal`
 * property. If the property has an explicit `default`, render it;
 * otherwise fall back to the natural zero of its declared type.
 */
function rustDefaultExpr(prop, cfg) {
    if (prop.defaultValue !== null) {
        return literalToRust(prop.defaultValue, prop.propertyType, cfg);
    }
    return zeroValueFor(prop.propertyType, cfg);
}
function literalToRust(lit, declared, cfg) {
    if (lit.kind === "Null") {
        // Only meaningful for Option<T>. For any other declared type
        // the validator should have flagged this — be defensive.
        return declared.kind === "OptionType" ? "None" : "Default::default()";
    }
    if (lit.kind === "Integer") {
        // If the declared field is Real, render the integer as a float
        // (consistent with the Integer→f64 promotion used elsewhere).
        if (declared.kind === "PrimitiveType" && declared.name === "Real") {
            return `${lit.value}.0`;
        }
        return String(lit.value);
    }
    if (lit.kind === "Real") {
        const s = String(lit.value);
        return s.includes(".") ? s : `${s}.0`;
    }
    if (lit.kind === "Boolean") {
        return lit.value ? "true" : "false";
    }
    // String literal — emit as alloc::String / heapless::String::from.
    const escaped = lit.value
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"');
    if (cfg.target === "alloc") {
        return `alloc::string::String::from("${escaped}")`;
    }
    return `{ let mut __s = ${rustString(cfg)}::new(); let _ = __s.push_str("${escaped}"); __s }`;
}
function zeroValueFor(t, cfg) {
    if (t.kind === "PrimitiveType") {
        switch (t.name) {
            case "Real": return cfg.float === "f32" ? "0.0_f32" : "0.0_f64";
            case "Integer": return "0_i64";
            case "Boolean": return "false";
            case "String":
                return cfg.target === "alloc"
                    ? `alloc::string::String::new()`
                    : `${rustString(cfg)}::new()`;
        }
    }
    if (t.kind === "OptionType")
        return "None";
    if (t.kind === "SetType") {
        // Set<NamedType> backs to Vec<T> (structs aren't Ord); Set<Prim>
        // backs to BTreeSet/FnvIndexSet. Mirror the choice typeMapping
        // makes, otherwise the constructor type doesn't match the field.
        if (t.elementType.kind === "NamedType") {
            return cfg.target === "alloc"
                ? `alloc::vec::Vec::new()`
                : `heapless::Vec::new()`;
        }
        return cfg.target === "alloc"
            ? `alloc::collections::BTreeSet::new()`
            : `heapless::FnvIndexSet::new()`;
    }
    if (t.kind === "ArrayType") {
        // Stack-allocated fixed-size array. For Copy element types we
        // emit the array-repeat literal `[expr; N]` (cheap, no closure).
        // For non-Copy element types (NamedType) we fall back to
        // `core::array::from_fn(|_| Default::default())` which doesn't
        // require Copy. Both arms work in no_std (no alloc dependency).
        const innerZero = zeroValueFor(t.elementType, cfg);
        if (isCopyElement(t.elementType)) {
            return `[${innerZero}; ${t.size}]`;
        }
        return `core::array::from_fn(|_| ${innerZero})`;
    }
    // NamedType — no zero value, fall back to Default::default(). The
    // user should mark such properties non-internal OR supply a default.
    return "Default::default()";
}
function renderTypeRefForParam(t, cfg) {
    return mapTypeRef(t, cfg);
}
/**
 * Is the given TypeRef (intended as an Array element) `Copy`? Mirrors
 * the predicate in eventWrappers/validators but lives here too so
 * factories don't depend on those modules. Real/Integer/Boolean are
 * Copy; nested `[T; N]` is Copy iff T is Copy; everything else
 * (String, NamedType, Option, Set) is not.
 */
function isCopyElement(t) {
    if (t.kind === "PrimitiveType") {
        return t.name === "Real" || t.name === "Integer" || t.name === "Boolean";
    }
    if (t.kind === "ArrayType")
        return isCopyElement(t.elementType);
    return false;
}
//# sourceMappingURL=factories.js.map