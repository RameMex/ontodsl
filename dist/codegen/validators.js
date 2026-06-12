/**
 * Phase 10 — Runtime invariant validator emission.
 *
 * For each body-bearing declaration with invariants, generate:
 *
 *   export function validateX(instance: X): readonly string[] {
 *     const violations: string[] = [];
 *     if (!(<TS expression>)) violations.push("...");
 *     // ...one if per invariant clause
 *     return violations;
 *   }
 *
 * Callers invoke this explicitly:
 *
 *   const issues = validateCustomer(customer);
 *   if (issues.length > 0) throw new InvalidError(issues);
 *
 * Scope — which invariants get compiled:
 *
 *   ✓ Arithmetic comparisons: <, <=, >, >=, =, <> with primitives
 *   ✓ Boolean connectives: and, or, not
 *   ✓ Navigation: self.prop (depth 1), p.prop for parameters (not
 *     applicable here since invariants have no params)
 *   ✓ Literals: integers, reals, booleans, strings, null
 *   ✓ if/then/else
 *   ✓ forAll (Phase 5): emits a JS .every() call when the predicate
 *     is itself translatable
 *   ✓ exists (Phase 5): emits .some()
 *   ✓ size, isEmpty, notEmpty, includes (Phase 5 collection ops)
 *
 * Skipped (emitted as a `// SKIPPED:` comment in the generator's
 * output, no validation performed at runtime):
 *
 *   ✗ Allen temporal operators (Phase 6.5): would require a runtime
 *     time model; out of Phase 10 scope.
 *   ✗ @pre references: only valid in event post-conditions; Phase 10
 *     doesn't generate event wrappers, so @pre is unreachable here.
 *   ✗ Deep navigation (self.a.b where a is a reference). Allowed
 *     syntactically; the TS output traverses multiple steps but
 *     null-safety becomes a concern — we emit guarded `?.` access
 *     for deep nav.
 *
 * The translator fails SILENTLY for skipped constructs — it emits a
 * comment in the generated code documenting the skip and proceeds.
 * This mirrors the semantic validator's W29/W30 stance: "partial
 * verification is strictly better than no verification".
 */
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
export function renderValidators(file) {
    const lines = [];
    lines.push("// ─── Runtime invariant validators ───");
    lines.push("");
    for (const d of file.declarations) {
        if (!BODY_BEARING.has(d.kind))
            continue;
        if (!("invariants" in d) || d.invariants.length === 0)
            continue;
        lines.push(...renderValidatorFunction(d));
        lines.push("");
    }
    return lines.join("\n");
}
function renderValidatorFunction(d) {
    if (!("invariants" in d))
        return [];
    const lines = [];
    lines.push(`/** Runtime invariant check for ${d.name}. Returns empty array when valid. */`);
    lines.push(`export function validate${d.name}(instance: ${d.name}): readonly string[] {`);
    lines.push(`  const violations: string[] = [];`);
    for (const inv of d.invariants) {
        const translated = translateInvariant(inv);
        if (translated.ok) {
            // The invariant is documented via its raw expression text —
            // this is what the user WROTE, not a reconstructed version,
            // which matters for debugging and for error messages that
            // match the source.
            const escaped = escapeForStringLiteral(inv.rawExpression);
            lines.push(`  if (!(${translated.expr})) {`);
            lines.push(`    violations.push("[${d.name}] invariant violated: ${escaped}");`);
            lines.push(`  }`);
        }
        else {
            lines.push(`  // SKIPPED invariant (not translatable to runtime TS): ` +
                `${inv.rawExpression} — reason: ${translated.reason}`);
        }
    }
    lines.push(`  return violations;`);
    lines.push(`}`);
    return lines;
}
function translateInvariant(inv) {
    // The semantic layer already rejected unparseable OCL with S26;
    // here the parsed field is guaranteed present (unless parse
    // produced a null ast on error, in which case codegen shouldn't
    // be running at all).
    if (!inv.parsed) {
        return { ok: false, reason: "OCL AST missing (upstream parse failure)" };
    }
    return translateExpr(inv.parsed);
}
function translateExpr(e) {
    switch (e.kind) {
        case "OclLiteral":
            return translateLiteral(e);
        case "OclVarRef":
            return translateVarRef(e.name);
        case "OclNav":
            return translateNav(e);
        case "OclBinary":
            return translateBinary(e.op, e.left, e.right);
        case "OclUnary": {
            const inner = translateExpr(e.operand);
            if (!inner.ok)
                return inner;
            if (e.op === "not")
                return { ok: true, expr: `!(${inner.expr})` };
            // unary minus
            return { ok: true, expr: `-(${inner.expr})` };
        }
        case "OclIf": {
            const c = translateExpr(e.cond);
            if (!c.ok)
                return c;
            const t = translateExpr(e.then);
            if (!t.ok)
                return t;
            const f = translateExpr(e.else_);
            if (!f.ok)
                return f;
            return { ok: true, expr: `((${c.expr}) ? (${t.expr}) : (${f.expr}))` };
        }
        case "OclCall":
            if (e.method === "isFinite" || e.method === "isNaN") {
                const recv = translateExpr(e.object);
                if (!recv.ok)
                    return recv;
                const tsFn = e.method === "isFinite" ? "Number.isFinite" : "Number.isNaN";
                return { ok: true, expr: `${tsFn}(${recv.expr})` };
            }
            // Allen operators and any other method call — out of Phase 10
            // runtime scope. Could be supported if we shipped a time-model
            // runtime, but that's deferred.
            return {
                ok: false,
                reason: `method call '.${e.method}(...)' not translatable to runtime TS`,
            };
        case "OclSize": {
            const src = translateExpr(e.source);
            if (!src.ok)
                return src;
            // Runtime is ReadonlySet<T>, so .size is the property.
            return { ok: true, expr: `(${src.expr}).size` };
        }
        case "OclIsEmpty": {
            const src = translateExpr(e.source);
            if (!src.ok)
                return src;
            return { ok: true, expr: `(${src.expr}).size === 0` };
        }
        case "OclNotEmpty": {
            const src = translateExpr(e.source);
            if (!src.ok)
                return src;
            return { ok: true, expr: `(${src.expr}).size > 0` };
        }
        case "OclIncludes": {
            const src = translateExpr(e.source);
            if (!src.ok)
                return src;
            const arg = translateExpr(e.element);
            if (!arg.ok)
                return arg;
            return { ok: true, expr: `(${src.expr}).has(${arg.expr})` };
        }
        case "OclForAll":
            return translateQuantifier(e.source, e.variable, e.body, "every");
        case "OclExists":
            return translateQuantifier(e.source, e.variable, e.body, "some");
        default:
            return { ok: false, reason: "unsupported OclExpr kind" };
    }
}
function translateLiteral(e) {
    switch (e.litKind) {
        case "Integer":
        case "Real":
            return { ok: true, expr: String(e.value) };
        case "Boolean":
            return { ok: true, expr: e.value ? "true" : "false" };
        case "String":
            return {
                ok: true,
                expr: JSON.stringify(e.value),
            };
        case "Null":
            // OCL null becomes TS null in the runtime model. Property types
            // are non-nullable by default, so `<> null` checks read
            // meaningfully only when the user explicitly models nullability
            // (not something we enforce here).
            return { ok: true, expr: "null" };
    }
}
function translateVarRef(name) {
    // `self` in an invariant context is the instance. Parameters aren't
    // in scope for invariants (those are event bodies). Lambda-bound
    // names (from forAll/exists) are pre-rewritten by
    // `substituteVarRef` to start with the prefix `__lambda_` so we
    // can route them straight to the JS parameter without a separate
    // scope-tracking parameter on the translator.
    if (name === "self")
        return { ok: true, expr: "instance" };
    if (name.startsWith("__lambda_")) {
        // The remainder after the prefix is the JS-side identifier we
        // want to emit (e.g. "__x" for the outermost lambda; we could
        // generate fresh names for nested ones).
        return { ok: true, expr: name.slice("__lambda_".length) };
    }
    // Unknown bare name: could be a lambda variable leaking, which
    // means the translator wasn't given the enclosing scope. Return a
    // translator-specific failure rather than emitting a TS
    // ReferenceError at runtime.
    return {
        ok: false,
        reason: `bare variable '${name}' has no binding in this scope`,
    };
}
function translateNav(e) {
    if (e.isPre) {
        return {
            ok: false,
            reason: "@pre references are event-only; not reachable from invariants",
        };
    }
    const obj = translateExpr(e.object);
    if (!obj.ok)
        return obj;
    // `?.` vs `.`:
    //   - When the inner expression is a direct OclVarRef (`self` or
    //     a lambda variable), we use `.` because TS typing guarantees
    //     the value is non-null.
    //   - For deeper navigation (`self.a.b` where a is a reference
    //     property) we use `?.` because intermediate refs in a real
    //     object graph CAN be null.
    // We detect "inner was a VarRef" by inspecting the OCL AST's
    // .object kind directly, which is more robust than string-matching
    // on the translated expression.
    const isDirectFromVar = e.object.kind === "OclVarRef";
    const dot = isDirectFromVar ? "." : "?.";
    return { ok: true, expr: `${obj.expr}${dot}${e.property}` };
}
function translateBinary(op, left, right) {
    const l = translateExpr(left);
    if (!l.ok)
        return l;
    const r = translateExpr(right);
    if (!r.ok)
        return r;
    const jsOp = BIN_OP_MAP[op];
    if (!jsOp) {
        return { ok: false, reason: `unsupported binary operator '${op}'` };
    }
    return { ok: true, expr: `(${l.expr} ${jsOp} ${r.expr})` };
}
const BIN_OP_MAP = {
    "=": "===",
    "<>": "!==",
    "<": "<",
    "<=": "<=",
    ">": ">",
    ">=": ">=",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    and: "&&",
    or: "||",
};
/**
 * Translate a collection quantifier (forAll / exists). JS's
 * .every()/.some() on Set requires Array.from first (Set doesn't have
 * those methods natively), or we can use the iteration pattern
 * directly. We go with Array.from for clarity — the generated code
 * reads obviously, and perf isn't a concern for an invariant check
 * that runs once per instance validation.
 *
 * The lambda variable is bound to `var_${name}` to avoid clashing
 * with top-level `instance` or other scope names.
 */
function translateQuantifier(source, varName, predicate, jsMethod) {
    const src = translateExpr(source);
    if (!src.ok)
        return src;
    // Bind the lambda variable: any OclVarRef whose name matches
    // `varName` inside the predicate is rewritten to a sentinel name
    // `__lambda___x`, which `translateVarRef` then unwraps to the JS
    // identifier `__x`. Using a sentinel prefix avoids collisions with
    // any user-defined parameter or property name (those can't start
    // with double-underscore in valid OCL — but if they did, they'd
    // simply not match this prefix).
    const jsParam = "__x";
    const sentinel = `__lambda_${jsParam}`;
    const substituted = substituteVarRef(predicate, varName, sentinel);
    const pred = translateExpr(substituted);
    if (!pred.ok)
        return pred;
    return {
        ok: true,
        expr: `Array.from(${src.expr}).${jsMethod}((${jsParam}) => (${pred.expr}))`,
    };
}
/**
 * Walk an OclExpr substituting bare references to `from` with a
 * synthetic VarRef to `to`. Used to bind lambda variables in
 * quantifier translation. Does NOT traverse into inner quantifiers
 * that shadow `from` — lexical scoping matters for nested forAll.
 */
function substituteVarRef(e, from, to) {
    switch (e.kind) {
        case "OclLiteral":
            return e;
        case "OclVarRef":
            if (e.name === from)
                return { ...e, name: to };
            return e;
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
            return {
                ...e,
                left: substituteVarRef(e.left, from, to),
                right: substituteVarRef(e.right, from, to),
            };
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
            return {
                ...e,
                source: substituteVarRef(e.source, from, to),
                element: substituteVarRef(e.element, from, to),
            };
        case "OclForAll":
        case "OclExists":
            // Shadowing: if the inner quantifier binds the same name, skip
            // substitution into its body (but still into its source).
            if (e.variable === from) {
                return { ...e, source: substituteVarRef(e.source, from, to) };
            }
            return {
                ...e,
                source: substituteVarRef(e.source, from, to),
                body: substituteVarRef(e.body, from, to),
            };
        default:
            return e;
    }
}
/**
 * Produce a string-literal-safe escape of an OCL expression's raw
 * text so it can appear inside a double-quoted TS string. Quotes,
 * backslashes, and newlines are escaped; everything else is inert in
 * a double-quoted string.
 */
function escapeForStringLiteral(s) {
    return s
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r");
}
//# sourceMappingURL=validators.js.map