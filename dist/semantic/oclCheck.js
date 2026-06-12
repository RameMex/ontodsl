/**
 * OCL typechecker — Phase 4 rules S27 and S28.
 *
 * What this module does:
 *   - Walks an `OclExpr` AST together with a `TypeContext` that names
 *     `self`'s type and any parameters in scope.
 *   - Resolves every `.property` chain against the static type of the
 *     receiver, using the inheritance-aware `effectiveProperties`.
 *   - Resolves every zero-arity call `.name()` against the effective
 *     queries of the receiver's type.
 *   - Enforces the `@pre` context rule: `@pre` is legal only in
 *     post-conditions; it is rejected inside invariants, preconditions,
 *     and query bodies.
 *   - Type-checks binary and unary operators: arithmetic requires
 *     numeric operands, boolean connectives require Boolean, comparisons
 *     require compatible types, equality allows null on either side.
 *
 * Out of scope (would need the full OCL spec):
 *   - Collection operators (`->forAll`, `->select`, `->size`, ...).
 *   - User-defined operations with arguments.
 *   - Tuple literals and let-bindings.
 * The OCL grammar currently in this DSL doesn't admit these, so the
 * type-checker is complete for the accepted surface.
 *
 * Emits SemanticError records with codes:
 *   - `S27` for unknown names, unresolved navigations/calls, and
 *          `@pre` misuse.
 *   - `S28` for operator type mismatches.
 */
import { effectiveProperties, effectiveQueries, } from "./inheritance.js";
/**
 * Typecheck one clause (invariant, pre, post, or body).
 * Callers provide the surrounding context and the function pushes any
 * errors it finds onto `errors`.
 *
 * `expectedReturn`, if provided, is the declared return type of a query
 * body and is compared against the synthesized type of the body
 * expression (emits S28 on mismatch).
 */
export function typeCheckClause(clause, ctx, errors, expectedReturn = null) {
    if (clause.parsed === null)
        return; // S26 already reported; skip.
    const t = inferExpr(clause.parsed, ctx, errors);
    if (expectedReturn !== null) {
        const want = fromTypeRef(expectedReturn);
        if (!compatible(t, want)) {
            errors.push({
                code: "S28",
                message: `[S28] query body's expression has type ${formatOclType(t)} ` +
                    `which is not compatible with the declared return type ` +
                    `${formatOclType(want)}`,
                location: clause.location,
            });
        }
    }
    else if (ctx.context === "invariant" || ctx.context === "pre" || ctx.context === "post") {
        // Invariants and pre/post must be boolean-valued.
        if (t.kind !== "unknown" && !(t.kind === "prim" && t.name === "Boolean")) {
            errors.push({
                code: "S28",
                message: `[S28] ${ctx.context} clause must have type Boolean, got ` +
                    `${formatOclType(t)}`,
                location: clause.location,
            });
        }
    }
}
// ─── Inference ──────────────────────────────────────────────────────────
function inferExpr(e, ctx, errors) {
    switch (e.kind) {
        case "OclLiteral":
            switch (e.litKind) {
                case "Integer":
                    return { kind: "prim", name: "Integer" };
                case "Real":
                    return { kind: "prim", name: "Real" };
                case "Boolean":
                    return { kind: "prim", name: "Boolean" };
                case "String":
                    return { kind: "prim", name: "String" };
                case "Null":
                    return { kind: "null" };
            }
        case "OclVarRef":
            return inferVarRef(e.name, e.loc, ctx, errors);
        case "OclNav":
            return inferNav(e, ctx, errors);
        case "OclCall":
            return inferCall(e, ctx, errors);
        case "OclUnary":
            return inferUnary(e, ctx, errors);
        case "OclBinary":
            return inferBinary(e, ctx, errors);
        case "OclIf":
            return inferIf(e, ctx, errors);
        case "OclSize":
            return inferSize(e, ctx, errors);
        case "OclIsEmpty":
        case "OclNotEmpty":
            return inferEmptyCheck(e, ctx, errors);
        case "OclIncludes":
            return inferIncludes(e, ctx, errors);
        case "OclForAll":
        case "OclExists":
            return inferQuantifier(e, ctx, errors);
        case "OclSelect":
        case "OclReject":
            return inferSelectOrReject(e, ctx, errors);
        case "OclCollect":
            return inferCollect(e, ctx, errors);
        case "OclLet":
            return inferLet(e, ctx, errors);
    }
}
function inferVarRef(name, loc, ctx, errors) {
    if (name === "self") {
        return { kind: "ref", name: ctx.selfType.name };
    }
    // Phase 16c — the special `result` identifier binds to the
    // event's return value, but only inside post-conditions of
    // return-typed events. Reject it elsewhere with a clear message.
    if (name === "result") {
        if (ctx.context === "post" && ctx.resultType) {
            return fromTypeRef(ctx.resultType);
        }
        errors.push({
            code: "S27",
            message: `[S27] 'result' is only valid in the post-condition of a ` +
                `return-typed event; current context is '${ctx.context}'` +
                (ctx.context === "post" ? " (event has no declared return type)" : ""),
            location: loc,
        });
        return { kind: "unknown" };
    }
    const param = ctx.params.find((p) => p.name === name);
    if (param)
        return fromTypeRef(param.parameterType);
    // Phase 19 (Bloque 2 v0.6) — member-quantified category bearer.
    // In invariant contexts of categories declared with
    // `where <bearerName>: <memberType>`, the binding name resolves
    // to a value of `memberType`. Type-checker accepts it; the Z3
    // verifier interprets it as a constant aliased to the member's
    // `self` (see verifyCategoryMembership).
    if (ctx.bearer && ctx.bearer.name === name) {
        return { kind: "ref", name: ctx.bearer.memberType };
    }
    errors.push({
        code: "S27",
        message: `[S27] unknown name '${name}' in ${ctx.context} context of ` +
            `'${ctx.selfType.name}' — must be 'self' or an event/query parameter`,
        location: loc,
    });
    return { kind: "unknown" };
}
function inferNav(e, ctx, errors) {
    if (e.isPre && ctx.context !== "post") {
        errors.push({
            code: "S27",
            message: `[S27] '@pre' is only legal inside post-conditions, not in ` +
                `${ctx.context} clauses`,
            location: e.loc,
        });
    }
    const recv = inferExpr(e.object, ctx, errors);
    if (recv.kind === "unknown")
        return { kind: "unknown" };
    if (recv.kind !== "ref") {
        errors.push({
            code: "S27",
            message: `[S27] cannot read property '.${e.property}' on a ` +
                `${formatOclType(recv)} value`,
            location: e.loc,
        });
        return { kind: "unknown" };
    }
    const props = effectiveProperties(recv.name, ctx.index, ctx.cycleSet);
    const hit = props.get(e.property);
    if (!hit) {
        errors.push({
            code: "S27",
            message: `[S27] type '${recv.name}' has no property '${e.property}' ` +
                `(nor any inherited one)`,
            location: e.loc,
        });
        return { kind: "unknown" };
    }
    return fromTypeRef(hit.prop.propertyType);
}
/**
 * The 13 Allen interval-algebra relations between two intervals `a`
 * and `b`. Used both in the typechecker (to recognise these method
 * names as "temporal" rather than "query") and in the Z3 translator
 * (to emit the corresponding difference-logic formula).
 *
 * Base set (7): before, meets, overlaps, during, starts, finishes,
 * equals. Converse set (6): after, metBy, overlappedBy, contains,
 * startedBy, finishedBy. We expose all 13 directly so users never
 * have to reorder arguments — `a.after(b)` feels less forced than
 * `b.before(a)` when the narrative subject is A.
 */
export const ALLEN_OPERATORS = new Set([
    "before",
    "after",
    "meets",
    "metBy",
    "overlaps",
    "overlappedBy",
    "during",
    "contains",
    "starts",
    "startedBy",
    "finishes",
    "finishedBy",
    "equals",
]);
function inferCall(e, ctx, errors) {
    // Support static/type-level allInstances() call
    if (e.method === "allInstances") {
        if (e.object.kind === "OclVarRef" && ctx.index.typeDecls.has(e.object.name)) {
            if (e.argument !== null) {
                errors.push({
                    code: "S27",
                    message: `[S27] 'allInstances()' does not take any arguments`,
                    location: e.loc,
                });
                return { kind: "unknown" };
            }
            return { kind: "set", element: { kind: "ref", name: e.object.name } };
        }
    }
    const recv = inferExpr(e.object, ctx, errors);
    if (recv.kind === "unknown")
        return { kind: "unknown" };
    // Numeric predicates `isFinite()` / `isNaN()` — receiver must be a
    // primitive Real or Integer (not a ref, not a Set). Return Boolean.
    // Translators emit Rust `x.is_finite()` / `x.is_nan()` and TS
    // `Number.isFinite(x)` / `Number.isNaN(x)`. Z3 LSP treats them as
    // opaque (Z3 cannot constrain NaN under QF_*), so they reduce to
    // `true` in the verifier — the runtime wrapper still enforces them.
    if (e.method === "isFinite" || e.method === "isNaN") {
        if (e.argument !== null) {
            errors.push({
                code: "S27",
                message: `[S27] '.${e.method}()' takes no arguments`,
                location: e.loc,
            });
            return { kind: "unknown" };
        }
        if (recv.kind !== "prim" ||
            (recv.name !== "Real" && recv.name !== "Integer")) {
            errors.push({
                code: "S27",
                message: `[S27] '.${e.method}()' requires a Real or Integer receiver; ` +
                    `got ${formatOclType(recv)}`,
                location: e.loc,
            });
            return { kind: "unknown" };
        }
        return { kind: "prim", name: "Boolean" };
    }
    // Phase 6.5 — Allen temporal relations. Pre-empt the query-dispatch
    // path because Allen operators:
    //   (a) take an argument, unlike zero-arity query calls
    //   (b) only make sense when both sides are Happening refs
    //   (c) aren't declared on the type, so the query table wouldn't
    //       find them anyway
    if (ALLEN_OPERATORS.has(e.method)) {
        return inferAllenCall(e, recv, ctx, errors);
    }
    // Zero-arity query calls (Phase 4 behaviour). With the argument slot
    // now optional, an explicit argument here is a grammar-level allowance
    // but a semantic error for query calls — report it.
    if (e.argument !== null) {
        errors.push({
            code: "S27",
            message: `[S27] '.${e.method}(arg)' — only Allen temporal relations ` +
                `(before, after, meets, ...) take an argument; zero-arity ` +
                `query calls must be written '.${e.method}()'`,
            location: e.loc,
        });
        return { kind: "unknown" };
    }
    if (recv.kind !== "ref") {
        errors.push({
            code: "S27",
            message: `[S27] cannot call '.${e.method}()' on a ` +
                `${formatOclType(recv)} value`,
            location: e.loc,
        });
        return { kind: "unknown" };
    }
    const queries = effectiveQueries(recv.name, ctx.index, ctx.cycleSet);
    const hit = queries.get(e.method);
    if (!hit) {
        errors.push({
            code: "S27",
            message: `[S27] type '${recv.name}' has no query '${e.method}()' ` +
                `(nor any inherited one); only zero-arity inherited queries ` +
                `are callable from OCL in Phase 4`,
            location: e.loc,
        });
        return { kind: "unknown" };
    }
    if (hit.query.parameters.length > 0) {
        errors.push({
            code: "S27",
            message: `[S27] query '${recv.name}.${e.method}' expects ` +
                `${hit.query.parameters.length} argument(s); only zero-arity ` +
                `calls are supported in the current OCL grammar`,
            location: e.loc,
        });
        return { kind: "unknown" };
    }
    return fromTypeRef(hit.query.returnType);
}
/**
 * Type-check an Allen temporal call like `a.before(b)`.
 *
 * Rules:
 *   - The receiver must be a ref to a Happening type.
 *   - The argument is mandatory and must also be a ref to a Happening.
 *   - Cross-stereotype calls (Happening vs Kind) surface as S28 because
 *     the type of the argument is demonstrably wrong — diagnostics aim
 *     to disambiguate "unknown method" (S27) from "wrong argument type"
 *     (S28).
 *
 * The return type is always Boolean.
 */
function inferAllenCall(e, recv, ctx, errors) {
    const isHappeningRef = (t) => {
        if (t.kind !== "ref")
            return false;
        const decl = ctx.index.typeDecls.get(t.name);
        return decl?.kind === "HappeningDecl";
    };
    if (!isHappeningRef(recv)) {
        errors.push({
            code: "S27",
            message: `[S27] Allen temporal relation '.${e.method}(...)' requires ` +
                `a Happening-typed receiver, got ${formatOclType(recv)}`,
            location: e.loc,
        });
        return { kind: "prim", name: "Boolean" };
    }
    if (e.argument === null) {
        errors.push({
            code: "S27",
            message: `[S27] Allen relation '.${e.method}' is binary — write ` +
                `'receiver.${e.method}(other)' with a single argument`,
            location: e.loc,
        });
        return { kind: "prim", name: "Boolean" };
    }
    const arg = inferExpr(e.argument, ctx, errors);
    if (arg.kind !== "unknown" && !isHappeningRef(arg)) {
        errors.push({
            code: "S28",
            message: `[S28] Allen relation '.${e.method}(arg)' argument must be a ` +
                `Happening reference, got ${formatOclType(arg)}`,
            location: e.loc,
        });
    }
    return { kind: "prim", name: "Boolean" };
}
function inferUnary(e, ctx, errors) {
    const t = inferExpr(e.operand, ctx, errors);
    if (t.kind === "unknown")
        return t;
    if (e.op === "not") {
        if (!isBoolean(t)) {
            errors.push({
                code: "S28",
                message: `[S28] 'not' expects Boolean, got ${formatOclType(t)}`,
                location: e.loc,
            });
            return { kind: "unknown" };
        }
        return { kind: "prim", name: "Boolean" };
    }
    // unary minus
    if (!isNumeric(t)) {
        errors.push({
            code: "S28",
            message: `[S28] unary '-' expects numeric operand, got ${formatOclType(t)}`,
            location: e.loc,
        });
        return { kind: "unknown" };
    }
    return t;
}
function inferBinary(e, ctx, errors) {
    const l = inferExpr(e.left, ctx, errors);
    const r = inferExpr(e.right, ctx, errors);
    return checkBinaryOp(e.op, l, r, e, e.loc, errors);
}
function inferIf(e, ctx, errors) {
    const c = inferExpr(e.cond, ctx, errors);
    if (c.kind !== "unknown" && !isBoolean(c)) {
        errors.push({
            code: "S28",
            message: `[S28] 'if' condition must be Boolean, got ${formatOclType(c)}`,
            location: e.loc,
        });
    }
    const t = inferExpr(e.then, ctx, errors);
    const u = inferExpr(e.else_, ctx, errors);
    if (t.kind === "unknown" || u.kind === "unknown")
        return { kind: "unknown" };
    if (!compatible(t, u) && !compatible(u, t)) {
        errors.push({
            code: "S28",
            message: `[S28] 'if/else' branches have incompatible types ` +
                `(${formatOclType(t)} vs ${formatOclType(u)})`,
            location: e.loc,
        });
        return { kind: "unknown" };
    }
    // Pick the more-specific branch type (prefer non-null).
    return t.kind === "null" ? u : t;
}
// ─── Collection operators (Phase 5) ─────────────────────────────────────
//
// Each helper shares the same first step: infer the `source` expression's
// type and verify it's a Set<T>. We centralize that in `inferSetSource`
// to keep the per-operator helpers short.
function inferSetSource(opLabel, loc, source, ctx, errors) {
    const t = inferExpr(source, ctx, errors);
    if (t.kind === "unknown")
        return null;
    if (t.kind !== "set") {
        errors.push({
            code: "S27",
            message: `[S27] '->${opLabel}' requires a Set-typed receiver, got ` +
                `${formatOclType(t)}`,
            location: loc,
        });
        return null;
    }
    return t.element;
}
function inferSize(e, ctx, errors) {
    inferSetSource("size", e.loc, e.source, ctx, errors);
    // Even if the source failed type-check we still know size() returns
    // Integer — proceeding avoids cascading errors.
    return { kind: "prim", name: "Integer" };
}
function inferEmptyCheck(e, ctx, errors) {
    const label = e.kind === "OclIsEmpty" ? "isEmpty" : "notEmpty";
    inferSetSource(label, e.loc, e.source, ctx, errors);
    return { kind: "prim", name: "Boolean" };
}
function inferIncludes(e, ctx, errors) {
    const element = inferSetSource("includes", e.loc, e.source, ctx, errors);
    const arg = inferExpr(e.element, ctx, errors);
    if (element !== null && arg.kind !== "unknown" && !compatible(element, arg)) {
        errors.push({
            code: "S28",
            message: `[S28] '->includes' argument type ${formatOclType(arg)} is not ` +
                `compatible with the set's element type ${formatOclType(element)}`,
            location: e.loc,
        });
    }
    return { kind: "prim", name: "Boolean" };
}
/**
 * `forAll` / `exists` bind a fresh variable name inside the body. The
 * variable shadows any outer parameter with the same name.
 *
 * We model the bound variable by synthesizing a transient
 * `ParameterDecl` and prepending it to `ctx.params` — this avoids
 * touching `OclContext`'s type while still letting `inferVarRef` find
 * the binding.
 */
function inferQuantifier(e, ctx, errors) {
    const opLabel = e.kind === "OclForAll" ? "forAll" : "exists";
    const elemType = inferSetSource(opLabel, e.loc, e.source, ctx, errors);
    // If source failed to type-check as a Set, still type-check the body
    // as best we can using `unknown` — this avoids silent acceptance of
    // body errors while the user fixes the receiver.
    const bound = elemType ?? { kind: "unknown" };
    const innerCtx = {
        ...ctx,
        // PREPEND the binding so inferVarRef finds it before any outer
        // parameter with the same name — OCL iterator variables shadow.
        params: [
            makeBoundParam(e.variable, bound, e.loc),
            ...ctx.params,
        ],
    };
    const bodyT = inferExpr(e.body, innerCtx, errors);
    if (bodyT.kind !== "unknown" && !isBoolean(bodyT)) {
        errors.push({
            code: "S28",
            message: `[S28] '->${opLabel}' body must return Boolean, got ` +
                `${formatOclType(bodyT)}`,
            location: e.loc,
        });
    }
    return { kind: "prim", name: "Boolean" };
}
function inferSelectOrReject(e, ctx, errors) {
    const opLabel = e.kind === "OclSelect" ? "select" : "reject";
    const elemType = inferSetSource(opLabel, e.loc, e.source, ctx, errors);
    const bound = elemType ?? { kind: "unknown" };
    const innerCtx = {
        ...ctx,
        params: [
            makeBoundParam(e.variable, bound, e.loc),
            ...ctx.params,
        ],
    };
    const bodyT = inferExpr(e.body, innerCtx, errors);
    if (bodyT.kind !== "unknown" && !isBoolean(bodyT)) {
        errors.push({
            code: "S28",
            message: `[S28] '->${opLabel}' body must return Boolean, got ` +
                `${formatOclType(bodyT)}`,
            location: e.loc,
        });
    }
    return elemType ? { kind: "set", element: elemType } : { kind: "unknown" };
}
function inferCollect(e, ctx, errors) {
    const elemType = inferSetSource("collect", e.loc, e.source, ctx, errors);
    const bound = elemType ?? { kind: "unknown" };
    const innerCtx = {
        ...ctx,
        params: [
            makeBoundParam(e.variable, bound, e.loc),
            ...ctx.params,
        ],
    };
    const bodyT = inferExpr(e.body, innerCtx, errors);
    if (bodyT.kind === "unknown")
        return { kind: "unknown" };
    return { kind: "set", element: bodyT };
}
function inferLet(e, ctx, errors) {
    const initT = inferExpr(e.init, ctx, errors);
    const innerCtx = {
        ...ctx,
        params: [
            makeBoundParam(e.variable, initT, e.loc),
            ...ctx.params,
        ],
    };
    return inferExpr(e.body, innerCtx, errors);
}
/**
 * Construct a transient ParameterDecl so an OCL-bound variable can be
 * looked up by `inferVarRef` via the existing parameter-search path.
 *
 * The fake ParameterDecl's `parameterType` is a TypeRef, but we carry
 * the already-inferred OclType through a private side channel: when
 * `inferVarRef` sees the bound name, it returns the OclType we stash
 * here via a synthetic primitive-like marker. Simpler and less
 * invasive than threading a second map through every helper.
 */
function makeBoundParam(name, t, loc) {
    // Encode the OclType back into a TypeRef. For prim/ref/set this
    // round-trips; for null/unknown we fall back to NamedType with a
    // sentinel name that fromTypeRef won't recognize as any real type.
    // inferVarRef uses fromTypeRef(param.parameterType) — see the
    // existing branch.
    const fake = () => {
        switch (t.kind) {
            case "prim":
                return { kind: "PrimitiveType", name: t.name, location: loc };
            case "ref":
                return { kind: "NamedType", name: t.name, location: loc };
            case "set":
                // Re-encode a Set<T> OclType. The inner element can only be a
                // prim or a ref in our type system, so the cast is safe.
                return {
                    kind: "SetType",
                    elementType: t.element.kind === "prim"
                        ? { kind: "PrimitiveType", name: t.element.name, location: loc }
                        : t.element.kind === "ref"
                            ? { kind: "NamedType", name: t.element.name, location: loc }
                            : { kind: "NamedType", name: "__unknown__", location: loc },
                    location: loc,
                };
            case "null":
            case "unknown":
                return { kind: "NamedType", name: "__unknown__", location: loc };
        }
    };
    return {
        kind: "ParameterDecl",
        name,
        parameterType: fake(),
        location: loc,
    };
}
// ─── Operator type rules ───────────────────────────────────────────────
function checkBinaryOp(op, l, r, binExpr, loc, errors) {
    if (l.kind === "unknown" || r.kind === "unknown")
        return { kind: "unknown" };
    switch (op) {
        case "+":
        case "-":
        case "*":
        case "/":
            if (!isNumeric(l) || !isNumeric(r)) {
                errors.push({
                    code: "S28",
                    message: `[S28] operator '${op}' expects numeric operands, got ` +
                        `${formatOclType(l)} and ${formatOclType(r)}`,
                    location: loc,
                });
                return { kind: "unknown" };
            }
            // Real ∗ Integer promotes to Real.
            if ((l.kind === "prim" && l.name === "Real") ||
                (r.kind === "prim" && r.name === "Real")) {
                return { kind: "prim", name: "Real" };
            }
            return { kind: "prim", name: "Integer" };
        case "<":
        case "<=":
        case ">":
        case ">=":
            if (!isNumeric(l) || !isNumeric(r)) {
                errors.push({
                    code: "S28",
                    message: `[S28] operator '${op}' expects numeric operands, got ` +
                        `${formatOclType(l)} and ${formatOclType(r)}`,
                    location: loc,
                });
                return { kind: "unknown" };
            }
            warnIntegerRealMix(op, l, r, binExpr.left, binExpr.right, loc, errors);
            return { kind: "prim", name: "Boolean" };
        case "=":
        case "<>":
            if (!compatible(l, r) && !compatible(r, l)) {
                errors.push({
                    code: "S28",
                    message: `[S28] operator '${op}' compares incompatible types ` +
                        `${formatOclType(l)} and ${formatOclType(r)}`,
                    location: loc,
                });
                return { kind: "unknown" };
            }
            if (isNumeric(l) && isNumeric(r)) {
                warnIntegerRealMix(op, l, r, binExpr.left, binExpr.right, loc, errors);
            }
            return { kind: "prim", name: "Boolean" };
        case "and":
        case "or":
            if (!isBoolean(l) || !isBoolean(r)) {
                errors.push({
                    code: "S28",
                    message: `[S28] operator '${op}' expects Boolean operands, got ` +
                        `${formatOclType(l)} and ${formatOclType(r)}`,
                    location: loc,
                });
                return { kind: "unknown" };
            }
            return { kind: "prim", name: "Boolean" };
    }
}
/**
 * W31 — warn when a numeric comparison mixes Integer and Real
 * operands in a shape the Rust codegen CAN'T auto-promote.
 *
 * The codegen DOES auto-promote `Integer literal` ↔ `Real
 * expression` (e.g. `self.chargeLevel >= 0` → `self.charge_level
 * >= 0.0`). So we don't warn on those — the cargo-check output
 * will be clean. We only warn when neither side is an Integer
 * literal AND the kinds disagree (e.g. `self.radioMin > 0.5`,
 * `self.real_field >= self.int_field`).
 *
 * This is an early-feedback aid for AI-driven .onto authoring:
 * the warning explains the fix without waiting for cargo check.
 */
function warnIntegerRealMix(op, l, r, leftExpr, rightExpr, loc, errors) {
    if (l.kind !== "prim" || r.kind !== "prim")
        return;
    const lInt = l.name === "Integer";
    const lReal = l.name === "Real";
    const rInt = r.name === "Integer";
    const rReal = r.name === "Real";
    const mixed = (lInt && rReal) || (lReal && rInt);
    if (!mixed)
        return;
    // The codegen auto-promotes an Integer-literal operand to f64
    // when the other side is Real. If either side is an Integer
    // literal, the mix is harmless — don't warn.
    if (isIntegerLiteralLike(leftExpr) || isIntegerLiteralLike(rightExpr)) {
        return;
    }
    errors.push({
        code: "W31",
        message: `[W31] '${op}' mixes Integer and Real operands without an ` +
            `integer literal to auto-promote. Shape: ${formatOclType(l)} ` +
            `${op} ${formatOclType(r)}. This will likely fail cargo check ` +
            `with 'expected i64, found floating-point number'. Fix the ` +
            `literal kind (write '0' not '0.0') or change the declared type.`,
        location: loc,
    });
}
/**
 * True iff the expression is a positive or negated integer literal:
 *   42  or  -42  but not  3.14, self.x, foo()
 * Mirrors codegen-rust's auto-promotion gating predicate.
 */
function isIntegerLiteralLike(e) {
    if (e.kind === "OclLiteral" && e.litKind === "Integer")
        return true;
    if (e.kind === "OclUnary" &&
        e.op === "-" &&
        e.operand.kind === "OclLiteral" &&
        e.operand.litKind === "Integer") {
        return true;
    }
    return false;
}
// ─── Type utilities ─────────────────────────────────────────────────────
function fromTypeRef(t) {
    if (t.kind === "PrimitiveType") {
        return { kind: "prim", name: t.name };
    }
    if (t.kind === "SetType") {
        return { kind: "set", element: fromTypeRef(t.elementType) };
    }
    if (t.kind === "OptionType") {
        // Phase 16b: OCL doesn't yet have first-class optional reasoning.
        // For typechecking purposes we expose the inner type, with two
        // operational effects elsewhere:
        //   - Comparisons against `null` are legal for any expression
        //     (this was always so; the validator just elides them when
        //     the underlying field is non-Option in codegen).
        //   - Codegen emits `Option<T>` in Rust / `T | null` in TS.
        return fromTypeRef(t.elementType);
    }
    if (t.kind === "ArrayType") {
        // Array<T,N> exposes the same OCL surface as Set<T> for forAll /
        // exists / size — typecheck it as a set of T. The size constant N
        // is invisible to OCL (size() returns Integer, like Set's len).
        return { kind: "set", element: fromTypeRef(t.elementType) };
    }
    return { kind: "ref", name: t.name };
}
function isNumeric(t) {
    return t.kind === "prim" && (t.name === "Real" || t.name === "Integer");
}
function isBoolean(t) {
    return t.kind === "prim" && t.name === "Boolean";
}
/**
 * Are these two types compatible for equality, assignment, or branch
 * unification? Rules:
 *   - Same primitive ⇒ compatible.
 *   - Real ↔ Integer ⇒ compatible (numeric promotion).
 *   - Same ref name ⇒ compatible.
 *   - Null is compatible with any ref or nullable primitive (we treat
 *     every primitive as nullable because the DSL has no non-null
 *     marker).
 *   - Otherwise not compatible.
 *
 * Note: this relation is explicitly symmetric for our current use; the
 * inferIf helper calls `compatible(t,u) || compatible(u,t)` as a
 * defensive measure in case the rules become asymmetric later (e.g.
 * subtype-lattice additions in Phase 4.5).
 */
function compatible(a, b) {
    if (a.kind === "unknown" || b.kind === "unknown")
        return true;
    if (a.kind === "null" || b.kind === "null")
        return true;
    if (a.kind === "prim" && b.kind === "prim") {
        if (a.name === b.name)
            return true;
        if ((a.name === "Real" && b.name === "Integer") ||
            (a.name === "Integer" && b.name === "Real")) {
            return true;
        }
        return false;
    }
    if (a.kind === "ref" && b.kind === "ref") {
        return a.name === b.name;
    }
    // Set compatibility delegates to element compatibility. Two Sets are
    // compatible iff their element types are pairwise compatible. We DON'T
    // allow Set<Integer> = Set<Real> because sets are invariant in the
    // simple type system (Phase 5); that would require a proper subtype
    // lattice the DSL doesn't have yet.
    if (a.kind === "set" && b.kind === "set") {
        const ea = a.element;
        const eb = b.element;
        if (ea.kind === "prim" && eb.kind === "prim")
            return ea.name === eb.name;
        if (ea.kind === "ref" && eb.kind === "ref")
            return ea.name === eb.name;
        return false;
    }
    return false;
}
function formatOclType(t) {
    switch (t.kind) {
        case "prim":
            return t.name;
        case "ref":
            return t.name;
        case "set":
            return `Set<${formatOclType(t.element)}>`;
        case "null":
            return "null";
        case "unknown":
            return "unknown";
    }
}
// ─── Driver: walk every clause in every type ───────────────────────────
/**
 * Top-level entry called from validateSemantics. Visits every
 * invariant, event pre/post clause, and query body; runs the checker
 * with the appropriate `OclContext`.
 */
export function checkOclTypes(idx, cycleSet, errors) {
    for (const d of idx.typeDecls.values()) {
        // Phase 19 (Bloque 2 v0.6): member-quantified categories declare
        // a bearer binding `where <name>: <Type>` whose name is legal in
        // invariant contexts (resolves to the member type).
        const bearerBinding = d.kind === "CategoryDecl" && d.bearer
            ? { name: d.bearer.name, memberType: d.bearer.memberType }
            : null;
        for (const inv of d.invariants) {
            typeCheckClause(inv, bearerBinding
                ? {
                    selfType: d,
                    params: [],
                    context: "invariant",
                    index: idx,
                    cycleSet,
                    bearer: bearerBinding,
                }
                : {
                    selfType: d,
                    params: [],
                    context: "invariant",
                    index: idx,
                    cycleSet,
                }, errors);
        }
        for (const e of d.events) {
            visitEvent(d, e, idx, cycleSet, errors);
        }
        for (const q of d.queries) {
            if (!q.body)
                continue;
            typeCheckClause(q.body, {
                selfType: d,
                params: q.parameters,
                context: "body",
                index: idx,
                cycleSet,
            }, errors, q.returnType);
        }
        // Phase 7.5: commitment predicates. The predicate clause is
        // Boolean, uses `self = this commitment`, and has no parameters.
        // We reuse the `invariant` context (no @pre allowed; Boolean
        // expected). Validation of `self.debitor`/`self.creditor` as
        // synthetic references is deferred to Phase 7.75 — for Phase 7.5
        // a predicate references the commitment's own properties, which
        // is sufficient to express useful conditions (including Allen
        // operators over Happening-valued properties).
        if (d.kind === "CommitmentDecl" && d.predicate) {
            typeCheckClause(d.predicate, {
                selfType: d,
                params: [],
                context: "invariant",
                index: idx,
                cycleSet,
            }, errors);
        }
    }
}
function visitEvent(owner, e, idx, cycleSet, errors) {
    for (const pre of e.pre) {
        typeCheckClause(pre, {
            selfType: owner,
            params: e.parameters,
            context: "pre",
            index: idx,
            cycleSet,
        }, errors);
    }
    for (const post of e.post) {
        typeCheckClause(post, {
            selfType: owner,
            params: e.parameters,
            context: "post",
            index: idx,
            cycleSet,
            resultType: e.returnType,
        }, errors);
    }
}
//# sourceMappingURL=oclCheck.js.map