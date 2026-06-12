/**
 * C+ACSL type emission — branded ID typedefs + plain structs.
 *
 * Branded ID design: each identity-supplying decl gets a single-
 * field wrapper struct so the C type system treats it as nominally
 * distinct from raw int64_t/double/char*. Frama-C's WP can reason
 * about struct equality the same way it does about scalars.
 *
 *   typedef struct { int64_t inner; } BatteryInstanceId;
 *
 * The user constructs values with brace initialisation:
 *   BatteryInstanceId id = { .inner = 42 };
 *
 * For Set<T> and Option<T> we emit a TODO sentinel comment in the
 * generated C, so the field is visible in the struct (callers
 * referencing it will fail to compile, which is the right signal
 * — the gap is loud, not silent).
 */
import { effectiveProperties, } from "../semantic/inheritance.js";
const IDENTITY_SUPPLIERS = new Set([
    "KindDecl", "RelatorDecl", "CollectiveDecl", "QuantityDecl",
    "HappeningDecl", "AgentDecl", "CommitmentDecl", "UseCaseDecl",
]);
/**
 * Emit the branded ID typedefs for every identity-supplying decl
 * in the file. These go near the top of the header so subsequent
 * struct fields can reference them.
 */
export function renderCTypes(file) {
    const lines = [];
    lines.push(`/* ─── Branded identity wrappers ─── */`);
    lines.push("");
    for (const d of file.declarations) {
        if (!IDENTITY_SUPPLIERS.has(d.kind))
            continue;
        if (!("identity" in d) || !d.identity)
            continue;
        const idName = `${d.name}Id`;
        const propName = d.identity.propertyName;
        const allProps = "properties" in d ? d.properties : [];
        const idProp = allProps.find((p) => p.name === propName);
        const inner = idProp
            ? cTypeForPrimitiveOrFallback(idProp.propertyType)
            : "const char *";
        lines.push(`/* Identity for ${d.name}. */`);
        lines.push(`typedef struct { ${inner} inner; } ${idName};`);
    }
    return lines;
}
/**
 * Emit the data struct for one body-bearing decl. Includes all
 * effective properties (own + inherited via specializes chain).
 */
export function renderCStructs(d, idx, cycleSet) {
    if (!("identity" in d) || !d.identity)
        return [];
    const allProps = Array.from(effectiveProperties(d.name, idx, cycleSet).values()).map((e) => e.prop);
    const idPropName = d.identity.propertyName;
    const lines = [];
    lines.push(`/* <<${stereotypeOf(d)}>> ${d.name} */`);
    lines.push(`typedef struct {`);
    for (const prop of allProps) {
        const isIdentity = prop.name === idPropName;
        const fieldName = cFieldName(prop.name);
        // Arrays in C structs must be declared as `T name[N]`, not
        // `T[N] name`. cFieldDecl handles the prefix/suffix split.
        const decl = isIdentity
            ? `${d.name}Id ${fieldName}`
            : cFieldDecl(prop.propertyType, fieldName);
        lines.push(`    ${decl};`);
    }
    lines.push(`} ${d.name};`);
    return lines;
}
/**
 * Build a single C field declaration in the form `T name[d0][d1]...`
 * (for arrays) or `T name` (for everything else). Used by struct
 * emission AND by parameter lists in event wrappers — same syntax.
 */
export function cFieldDecl(t, name) {
    if (t.kind === "ArrayType") {
        // Walk into nested arrays, collecting dimensions.
        const dims = [];
        let cur = t;
        while (cur.kind === "ArrayType") {
            dims.push(cur.size);
            cur = cur.elementType;
        }
        const elem = cTypeForPrimitiveOrFallback(cur);
        return `${elem} ${name}${dims.map((n) => `[${n}]`).join("")}`;
    }
    if (t.kind === "PrimitiveType") {
        switch (t.name) {
            case "Real": return `double ${name}`;
            case "Integer": return `int64_t ${name}`;
            case "Boolean": return `bool ${name}`;
            case "String": return `const char *${name}`;
        }
    }
    if (t.kind === "NamedType") {
        return `${t.name} ${name}`;
    }
    if (t.kind === "OptionType") {
        return `/* TODO C+ACSL v1 limit: Option<${cTypeFor(t.elementType)}> */ void *${name}`;
    }
    if (t.kind === "SetType") {
        return `/* TODO C+ACSL v1 limit: Set<${cTypeFor(t.elementType)}> */ void *${name}`;
    }
    return `void *${name}`;
}
export function cFieldName(name) {
    // OCL convention is camelCase; C convention is snake_case. Match
    // the Rust target's toRustFieldName policy.
    return name.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
}
/**
 * Map a TypeRef to its C type string. Array<T,N> recurses (matrices
 * compose). Set/Option emit a sentinel comment so the user sees the
 * v1 limit at the field site rather than getting a confusing later
 * error.
 */
export function cTypeFor(t) {
    if (t.kind === "PrimitiveType") {
        switch (t.name) {
            case "Real": return "double";
            case "Integer": return "int64_t";
            case "Boolean": return "bool";
            case "String": return "const char *";
        }
    }
    if (t.kind === "NamedType")
        return t.name;
    if (t.kind === "ArrayType") {
        // Note: arrays in C structs decay only when passed; field
        // declaration is `T name[N]`. We emit the size in the field
        // suffix later when this is a top-level prop; for nested
        // (matrix) cases we use `T (*)[N]` style. For now, return the
        // element type — the field emitter handles array bracket
        // placement to keep nested matrices correct.
        return cArrayFieldType(t);
    }
    if (t.kind === "OptionType") {
        return `/* TODO C+ACSL v1 limit: Option<${cTypeFor(t.elementType)}> not supported */ void *`;
    }
    if (t.kind === "SetType") {
        return `/* TODO C+ACSL v1 limit: Set<${cTypeFor(t.elementType)}> not supported */ void *`;
    }
    return "void *";
}
/**
 * Build the array-of-array field expression, e.g.
 *   Array<Real, 16>           -> "double[16]"
 *   Array<Array<Real, 6>, 6>  -> "double[6][6]"
 *
 * The caller is responsible for splicing this between the field
 * name and the trailing `;`:
 *   `double name[6][6];`
 */
export function cArrayFieldType(t) {
    // We collect the dimensions outside-in and produce
    // "<elemType> [d0][d1][...]" — that's how C declares
    // multi-dimensional arrays. The element is whatever the
    // innermost non-Array type is.
    const dims = [];
    let cur = t;
    while (cur.kind === "ArrayType") {
        dims.push(cur.size);
        cur = cur.elementType;
    }
    const innerElem = cTypeForPrimitiveOrFallback(cur);
    return `${innerElem}${dims.map((n) => `[${n}]`).join("")}`;
}
/**
 * For inner element types: handle primitives + NamedType cleanly;
 * Set/Option inside an Array isn't valid (rejected at the parser /
 * semantic layer), so we fall back to a sentinel.
 */
function cTypeForPrimitiveOrFallback(t) {
    if (t.kind === "PrimitiveType") {
        switch (t.name) {
            case "Real": return "double";
            case "Integer": return "int64_t";
            case "Boolean": return "bool";
            case "String": return "const char *";
        }
    }
    if (t.kind === "NamedType")
        return t.name;
    return `/* TODO unsupported inner type */ void *`;
}
function stereotypeOf(d) {
    switch (d.kind) {
        case "KindDecl": return "Kind";
        case "SubkindDecl": return "Subkind";
        case "RoleDecl": return "Role";
        case "RelatorDecl": return "Relator";
        case "CategoryDecl": return "Category";
        case "MixinDecl": return "Mixin";
        case "RoleMixinDecl": return "RoleMixin";
        case "ModeDecl": return "Mode";
        case "QualityDecl": return "Quality";
        case "CollectiveDecl": return "Collective";
        case "QuantityDecl": return "Quantity";
        case "HappeningDecl": return "Happening";
        case "AgentDecl": return "Agent";
        case "CommitmentDecl": return "Commitment";
        case "UseCaseDecl": return "UseCase";
        default: return "Other";
    }
}
//# sourceMappingURL=types.js.map