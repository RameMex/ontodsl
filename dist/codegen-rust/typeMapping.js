/**
 * Phase 15.7 — Shared type mapping.
 *
 * Centralizes Rust type names so types/factories/validators/wrappers/
 * registries don't duplicate the alloc-vs-heapless branch.
 */
import { toRustTypeName } from "./naming.js";
export const DEFAULT_CAPACITY = 16;
export const DEFAULT_FLOAT = "f64";
export function rustString(cfg) {
    return cfg.target === "alloc"
        ? "alloc::string::String"
        : `heapless::String<${cfg.capacity}>`;
}
export function rustSet(cfg, elem) {
    return cfg.target === "alloc"
        ? `alloc::collections::BTreeSet<${elem}>`
        : `heapless::FnvIndexSet<${elem}, ${cfg.capacity}>`;
}
export function rustVec(cfg, elem) {
    return cfg.target === "alloc"
        ? `alloc::vec::Vec<${elem}>`
        : `heapless::Vec<${elem}, ${cfg.capacity}>`;
}
export function rustMap(cfg, k, v) {
    return cfg.target === "alloc"
        ? `alloc::collections::BTreeMap<${k}, ${v}>`
        : `heapless::FnvIndexMap<${k}, ${v}, ${cfg.capacity}>`;
}
export function rustVecNew(cfg, elem) {
    return cfg.target === "alloc"
        ? `alloc::vec::Vec::new()`
        : `heapless::Vec::<${elem}, ${cfg.capacity}>::new()`;
}
export function rustMapNew(cfg, k, v) {
    return cfg.target === "alloc"
        ? `alloc::collections::BTreeMap::new()`
        : `heapless::FnvIndexMap::<${k}, ${v}, ${cfg.capacity}>::new()`;
}
/**
 * In no-alloc mode, Vec::push returns Result<(), T>. In alloc mode it
 * returns (). Validators must handle both — we wrap pushes in a
 * `let _ =` to discard the Err in no-alloc (silently dropping
 * violations beyond capacity is acceptable; the user can raise
 * capacity if it matters).
 */
export function rustVecPush(cfg, vec, value) {
    return cfg.target === "alloc"
        ? `${vec}.push(${value});`
        : `let _ = ${vec}.push(${value});`;
}
/** Map insert: alloc returns Option<V>; heapless returns Result. */
export function rustMapInsert(cfg, map, key, value) {
    return cfg.target === "alloc"
        ? `${map}.insert(${key}, ${value});`
        : `let _ = ${map}.insert(${key}, ${value});`;
}
export function renderTypeRef(t, cfg) {
    if (t.kind === "PrimitiveType") {
        switch (t.name) {
            case "Real": return cfg.float;
            case "Integer": return "i64";
            case "String": return rustString(cfg);
            case "Boolean": return "bool";
        }
    }
    if (t.kind === "NamedType")
        return toRustTypeName(t.name);
    if (t.kind === "OptionType") {
        // Phase 16b: `Option<T>` is Rust's core::option::Option. Works
        // in both alloc and no-alloc targets without extra deps.
        return `Option<${renderTypeRef(t.elementType, cfg)}>`;
    }
    if (t.kind === "ArrayType") {
        // Fixed-size arrays lower to `[T; N]` regardless of alloc/no-alloc
        // mode — they're stack-allocated and `Copy` when T is `Copy`, which
        // makes them ideal for embedded EKF/PID state vectors. Nested
        // arrays compose naturally: `Array<Array<Real, 6>, 6>` → `[[f64; 6]; 6]`.
        return `[${renderTypeRef(t.elementType, cfg)}; ${t.size}]`;
    }
    // SetType. Two backings depending on the element type:
    //
    //   - PrimitiveType element → BTreeSet<T> (or heapless::FnvIndexSet)
    //     because primitives have Ord (well, except Real — see note).
    //     `->includes(x)` lowers to `BTreeSet::contains(&x)`: O(log n).
    //
    //   - NamedType element → Vec<T> with linear-search membership.
    //     Structs only derive `PartialEq` (not Ord/Eq/Hash) because they
    //     may carry f64 fields. BTreeSet<NamedType> wouldn't compile;
    //     this was the AP_BattMonitor blocker. `->includes(x)` lowers
    //     to `.iter().any(|y| y == &x)`. O(n), acceptable for the
    //     embedded scale ontodls targets.
    if (t.elementType.kind === "NamedType") {
        return rustVec(cfg, renderTypeRef(t.elementType, cfg));
    }
    return rustSet(cfg, renderTypeRef(t.elementType, cfg));
}
//# sourceMappingURL=typeMapping.js.map