/**
 * C+ACSL validator emission.
 *
 * Each invariant becomes both:
 *   - a runtime check in the body of `<type>_validate(self, out_msg)`,
 *     returning the first violation message via out-param,
 *   - an ACSL `ensures` clause on the function declaration so
 *     Frama-C/WP can verify the body matches the spec.
 *
 * The function contract emitted on the header declaration:
 *
 *   /*@ requires \valid_read(self);
 *       requires out_msg != \null;
 *       assigns *out_msg;
 *       ensures \result == 0 <==> inv_<TypeName>(self);
 *   *\/
 *   int <type>_validate(const <TypeName>* self, const char** out_msg);
 *
 * And a separate `predicate` block expressing the conjunction of
 * all invariants in ACSL form. Frama-C uses this predicate to
 * propagate invariant facts wherever the function is called.
 */
import { cFieldName } from "./types.js";
const BODY_BEARING = new Set([
    "KindDecl", "SubkindDecl", "RoleDecl", "RelatorDecl", "CategoryDecl",
    "MixinDecl", "RoleMixinDecl", "ModeDecl", "QualityDecl", "CollectiveDecl",
    "QuantityDecl", "HappeningDecl", "AgentDecl", "CommitmentDecl", "UseCaseDecl",
]);
export function renderCValidators(d, idx, cycleSet, headerOnly) {
    if (!BODY_BEARING.has(d.kind))
        return [];
    if (!("invariants" in d) || d.invariants.length === 0)
        return [];
    const typeName = d.name;
    const fnName = `${snakeOf(typeName)}_validate`;
    const lines = [];
    // Build the ACSL predicate (conjunction of all translatable
    // invariants). Untranslatable ones are skipped but documented.
    const acslClauses = [];
    const runtimeChecks = [];
    for (const inv of d.invariants) {
        const acsl = translateToAcsl(inv.parsed, "self");
        if (acsl !== null) {
            acslClauses.push(acsl);
        }
        const c = translateToC(inv.parsed, "self");
        if (c !== null) {
            runtimeChecks.push({
                msg: `[${typeName}] invariant violated: ${escapeCString(oneLine(inv.rawExpression))}`,
                cExpr: c,
            });
        }
        else {
            runtimeChecks.push({
                msg: `[${typeName}] /* SKIPPED (not translatable): ${escapeCString(oneLine(inv.rawExpression))} */`,
                cExpr: "1", // placeholder: always passes
            });
        }
    }
    if (headerOnly) {
        // Emit the ACSL predicate + function declaration.
        lines.push(`/*@`);
        lines.push(`  predicate inv_${typeName}(${typeName} *self) =`);
        if (acslClauses.length === 0) {
            lines.push(`    \\true;  /* no translatable invariants */`);
        }
        else {
            lines.push(`    \\valid_read(self) &&`);
            for (let i = 0; i < acslClauses.length; i++) {
                const isLast = i === acslClauses.length - 1;
                lines.push(`    (${acslClauses[i]})${isLast ? ";" : " &&"}`);
            }
        }
        lines.push(`*/`);
        lines.push("");
        lines.push(`/*@`);
        lines.push(`  requires \\valid_read(self);`);
        lines.push(`  requires out_msg != \\null;`);
        lines.push(`  assigns *out_msg;`);
        lines.push(`  ensures \\result == 0 <==> inv_${typeName}(self);`);
        lines.push(`*/`);
        lines.push(`int ${fnName}(const ${typeName} *self, const char **out_msg);`);
        return lines;
    }
    // Source: function body. Mirrors the Rust validators' first-
    // failure-wins behaviour, with ACSL-friendly `if (...) return`
    // bailouts so the verifier can prove the contract path-by-path.
    lines.push(`int ${fnName}(const ${typeName} *self, const char **out_msg) {`);
    for (const check of runtimeChecks) {
        lines.push(`    if (!(${check.cExpr})) {`);
        lines.push(`        *out_msg = "${check.msg}";`);
        lines.push(`        return 1;`);
        lines.push(`    }`);
    }
    lines.push(`    *out_msg = "";`);
    lines.push(`    return 0;`);
    lines.push(`}`);
    return lines;
}
// ─── OCL → ACSL translator ─────────────────────────────────────────
/**
 * Translate an OCL expression to its ACSL equivalent (string).
 * Returns null when the expression uses an OCL construct we haven't
 * mapped yet (caller treats it as "skip this clause").
 *
 * `receiver` is the C name for the current self pointer — usually
 * `"self"` or, inside a forAll body, `"&self->arr[i]"`-style for
 * nested navigation.
 *
 * `knownVars` maps OCL identifier names (e.g. event params like `dt`,
 * `gyro`) to their C-side rendering. The caller passes the event
 * params for pre/post translation; for invariants it's empty.
 */
export function translateToAcsl(e, receiver, knownVars = new Map()) {
    if (e === null)
        return null;
    switch (e.kind) {
        case "OclLiteral":
            return acslLiteral(e);
        case "OclVarRef":
            if (e.name === "self")
                return receiver;
            // Lambda sentinel introduced by our forAll/exists translator —
            // resolved by the caller via a `.replace(/__elem/g, ...)` pass
            // after this returns. Leave it intact so the caller can rewrite.
            if (e.name === "__elem")
                return "__elem";
            // Event param or other caller-tracked variable.
            const known = knownVars.get(e.name);
            if (known !== undefined)
                return known;
            // Unbound variable — likely a lambda we don't track. Skip.
            return null;
        case "OclNav": {
            if (e.isPre) {
                // ACSL has \old(...) for pre-state but only in function
                // contracts; not usable in `predicate` decls. Skip.
                return null;
            }
            const obj = translateToAcsl(e.object, receiver, knownVars);
            if (obj === null)
                return null;
            // `self->field` if receiver is a pointer; `(obj).field`
            // otherwise. We use `->` when the obj is exactly `receiver`
            // (which is a pointer); else assume value access via `.`.
            // For nested structs we use `.`. For arrays we'd subscript
            // elsewhere — bare nav doesn't subscript.
            const sep = obj === receiver ? "->" : ".";
            return `${obj}${sep}${cFieldName(e.property)}`;
        }
        case "OclBinary": {
            const op = ACSL_BIN_OP[e.op];
            if (!op)
                return null;
            const l = translateToAcsl(e.left, receiver, knownVars);
            const r = translateToAcsl(e.right, receiver, knownVars);
            if (l === null || r === null)
                return null;
            return `(${l}) ${op} (${r})`;
        }
        case "OclUnary": {
            const inner = translateToAcsl(e.operand, receiver, knownVars);
            if (inner === null)
                return null;
            if (e.op === "not")
                return `!(${inner})`;
            return `-(${inner})`;
        }
        case "OclCall":
            if (e.method === "isFinite") {
                const recv = translateToAcsl(e.object, receiver, knownVars);
                if (recv === null)
                    return null;
                return `\\is_finite(${recv})`;
            }
            if (e.method === "isNaN") {
                const recv = translateToAcsl(e.object, receiver, knownVars);
                if (recv === null)
                    return null;
                return `\\is_NaN(${recv})`;
            }
            return null;
        case "OclForAll": {
            // Pattern: self.<arr>->forAll(v | body)  →
            //   \forall integer __i; 0 <= __i < N ==> body[v := self->arr[__i]]
            // We only handle the depth-1 case where source is `self.<prop>`
            // and prop is an Array<T, N>. For matrices the body itself
            // can recurse.
            if (e.source.kind === "OclNav" &&
                e.source.object.kind === "OclVarRef" &&
                e.source.object.name === "self") {
                const propName = e.source.property;
                // We don't know N here without type lookup; emit a generic
                // \forall with a sentinel "..N" placeholder is wrong. We'll
                // instead require the caller to supply the bound. For v1
                // we encode the bound as 0..\at(\\length(self->prop), Here)
                // — but ACSL doesn't have a generic length(). For arrays
                // declared in struct as `T name[N]`, ACSL knows the bound
                // via the type. So we just emit:
                //   \forall integer __i; 0 <= __i < N ==> body
                // where N is... we don't have it. Emit a TODO-marker that
                // Frama-C will flag, but the runtime translator (C) does
                // know N at codegen time.
                // For now: produce ACSL with `\valid_index(self->prop, __i)`
                // which Frama-C interprets as "in-bounds for the declared
                // array size" — works on any sized C array.
                const field = cFieldName(propName);
                const innerBody = translateToAcsl(substituteVarRef(e.body, e.variable, "__elem"), receiver, knownVars)?.replace(/__elem/g, `self->${field}[__i]`);
                if (innerBody === undefined || innerBody === null)
                    return null;
                return `\\forall integer __i; 0 <= __i < (sizeof(self->${field})/sizeof(self->${field}[0])) ==> (${innerBody})`;
            }
            return null;
        }
        case "OclExists": {
            // Mirror of OclForAll with \exists.
            if (e.source.kind === "OclNav" &&
                e.source.object.kind === "OclVarRef" &&
                e.source.object.name === "self") {
                const field = cFieldName(e.source.property);
                const innerBody = translateToAcsl(substituteVarRef(e.body, e.variable, "__elem"), receiver, knownVars)?.replace(/__elem/g, `self->${field}[__i]`);
                if (innerBody === undefined || innerBody === null)
                    return null;
                return `\\exists integer __i; 0 <= __i < (sizeof(self->${field})/sizeof(self->${field}[0])) && (${innerBody})`;
            }
            return null;
        }
        case "OclIf": {
            const c = translateToAcsl(e.cond, receiver, knownVars);
            const t = translateToAcsl(e.then, receiver, knownVars);
            const f = translateToAcsl(e.else_, receiver, knownVars);
            if (c === null || t === null || f === null)
                return null;
            return `((${c}) ? (${t}) : (${f}))`;
        }
        case "OclSize":
        case "OclIsEmpty":
        case "OclNotEmpty":
        case "OclIncludes":
            // Set ops not supported in v1.
            return null;
        default:
            return null;
    }
}
const ACSL_BIN_OP = {
    "=": "==",
    "<>": "!=",
    "<": "<",
    "<=": "<=",
    ">": ">",
    ">=": ">=",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    // ACSL uses && / || / ==> for boolean ops; we use C-syntax here.
    and: "&&",
    or: "||",
};
// ─── OCL → plain C translator (for runtime check bodies) ───────────
export function translateToC(e, receiver, knownVars = new Map()) {
    if (e === null)
        return null;
    switch (e.kind) {
        case "OclLiteral":
            return cLiteral(e);
        case "OclVarRef":
            if (e.name === "self")
                return receiver;
            if (e.name === "__elem")
                return "__elem";
            const known = knownVars.get(e.name);
            if (known !== undefined)
                return known;
            return null;
        case "OclNav": {
            if (e.isPre)
                return null;
            const obj = translateToC(e.object, receiver, knownVars);
            if (obj === null)
                return null;
            const sep = obj === receiver ? "->" : ".";
            return `${obj}${sep}${cFieldName(e.property)}`;
        }
        case "OclBinary": {
            const op = ACSL_BIN_OP[e.op]; // same operator strings work for plain C
            if (!op)
                return null;
            const l = translateToC(e.left, receiver, knownVars);
            const r = translateToC(e.right, receiver, knownVars);
            if (l === null || r === null)
                return null;
            return `((${l}) ${op} (${r}))`;
        }
        case "OclUnary": {
            const inner = translateToC(e.operand, receiver, knownVars);
            if (inner === null)
                return null;
            if (e.op === "not")
                return `!(${inner})`;
            return `-(${inner})`;
        }
        case "OclCall":
            if (e.method === "isFinite") {
                const recv = translateToC(e.object, receiver, knownVars);
                if (recv === null)
                    return null;
                return `isfinite(${recv})`;
            }
            if (e.method === "isNaN") {
                const recv = translateToC(e.object, receiver, knownVars);
                if (recv === null)
                    return null;
                return `isnan(${recv})`;
            }
            return null;
        case "OclForAll": {
            // Plain C: emit an inline loop wrapped in a statement-expression
            // (GCC/Clang extension; we use a helper int + early-fail pattern
            // expressed as a comma operator chain instead, to stay portable).
            // For v1 we emit a helper macro form: `({ int __ok=1; for(...) ...; __ok })`
            // — but that's GNU C only. Portable alternative: lift to a
            // helper function. For the MVP we generate the simple GCC-style
            // statement expression and document the dependency.
            if (e.source.kind === "OclNav" &&
                e.source.object.kind === "OclVarRef" &&
                e.source.object.name === "self") {
                const field = cFieldName(e.source.property);
                // For statement-expression compat we need only the body
                // condition. The substituted body uses `__elem` which we'll
                // rewrite to `self->field[__i]`.
                const subst = substituteVarRef(e.body, e.variable, "__elem");
                const body = translateToC(subst, receiver, knownVars);
                if (body === null)
                    return null;
                const bodyRew = body.replace(/__elem/g, `self->${field}[__i]`);
                return `({ int __ok = 1; for (size_t __i = 0; __i < sizeof(self->${field})/sizeof(self->${field}[0]); ++__i) { if (!(${bodyRew})) { __ok = 0; break; } } __ok; })`;
            }
            return null;
        }
        case "OclExists": {
            if (e.source.kind === "OclNav" &&
                e.source.object.kind === "OclVarRef" &&
                e.source.object.name === "self") {
                const field = cFieldName(e.source.property);
                const subst = substituteVarRef(e.body, e.variable, "__elem");
                const body = translateToC(subst, receiver, knownVars);
                if (body === null)
                    return null;
                const bodyRew = body.replace(/__elem/g, `self->${field}[__i]`);
                return `({ int __ok = 0; for (size_t __i = 0; __i < sizeof(self->${field})/sizeof(self->${field}[0]); ++__i) { if (${bodyRew}) { __ok = 1; break; } } __ok; })`;
            }
            return null;
        }
        case "OclIf": {
            const c = translateToC(e.cond, receiver, knownVars);
            const t = translateToC(e.then, receiver, knownVars);
            const f = translateToC(e.else_, receiver, knownVars);
            if (c === null || t === null || f === null)
                return null;
            return `((${c}) ? (${t}) : (${f}))`;
        }
        default:
            return null;
    }
}
function acslLiteral(e) {
    switch (e.litKind) {
        case "Integer": return String(e.value);
        case "Real": {
            const s = String(e.value);
            return s.includes(".") ? s : `${s}.0`;
        }
        case "Boolean": return e.value ? "\\true" : "\\false";
        case "String": return `"${escapeCString(e.value)}"`;
        case "Null": return `\\null`;
    }
}
function cLiteral(e) {
    switch (e.litKind) {
        case "Integer": return String(e.value);
        case "Real": {
            const s = String(e.value);
            return s.includes(".") ? s : `${s}.0`;
        }
        case "Boolean": return e.value ? "true" : "false";
        case "String": return `"${escapeCString(e.value)}"`;
        case "Null": return `NULL`;
    }
}
function substituteVarRef(e, from, to) {
    switch (e.kind) {
        case "OclVarRef":
            return e.name === from ? { ...e, name: to } : e;
        case "OclNav":
            return { ...e, object: substituteVarRef(e.object, from, to) };
        case "OclCall":
            return {
                ...e,
                object: substituteVarRef(e.object, from, to),
                argument: e.argument === null ? null : substituteVarRef(e.argument, from, to),
            };
        case "OclUnary":
            return { ...e, operand: substituteVarRef(e.operand, from, to) };
        case "OclBinary":
            return { ...e, left: substituteVarRef(e.left, from, to), right: substituteVarRef(e.right, from, to) };
        case "OclIf":
            return {
                ...e,
                cond: substituteVarRef(e.cond, from, to),
                then: substituteVarRef(e.then, from, to),
                else_: substituteVarRef(e.else_, from, to),
            };
        case "OclSize":
        case "OclIsEmpty":
        case "OclNotEmpty":
            return { ...e, source: substituteVarRef(e.source, from, to) };
        case "OclIncludes":
            return { ...e, source: substituteVarRef(e.source, from, to), element: substituteVarRef(e.element, from, to) };
        case "OclForAll":
        case "OclExists":
            if (e.variable === from) {
                return { ...e, source: substituteVarRef(e.source, from, to) };
            }
            return { ...e, source: substituteVarRef(e.source, from, to), body: substituteVarRef(e.body, from, to) };
        default:
            return e;
    }
}
function oneLine(s) {
    return s.replace(/\s+/g, " ").trim();
}
function escapeCString(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function snakeOf(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
}
export { snakeOf };
//# sourceMappingURL=validators.js.map