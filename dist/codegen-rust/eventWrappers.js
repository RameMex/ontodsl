/**
 * Phase 15.5 — Rust event wrappers.
 *
 * For each event on a body-bearing decl, emit a wrapper method:
 *
 *   impl Drone {
 *     pub fn swap_battery_wrapped<F>(
 *       &mut self,
 *       new_battery: BatteryPack,
 *       impl_fn: F,
 *     ) -> Result<(), &'static str>
 *     where F: FnOnce(&mut Self, BatteryPack)
 *     {
 *       if !(precondition) { return Err("..."); }
 *       let __pre_battery = self.battery.clone();  // @pre snapshot
 *       impl_fn(self, new_battery);
 *       if !(postcondition) { return Err("..."); }
 *       Ok(())
 *     }
 *   }
 *
 * Returns Result<(), &'static str> — first violation wins. Static
 * messages, zero alloc. Caller owns event params; we hand them to
 * the impl closure which gets &mut self.
 */
import { effectiveProperties, detectCycles, } from "../semantic/inheritance.js";
import { renderTypeRef as mapTypeRef, } from "./typeMapping.js";
import { toRustFieldName, toRustTypeName } from "./naming.js";
function numKindOfTypeRef(t) {
    if (t.kind === "PrimitiveType") {
        if (t.name === "Real")
            return "Real";
        if (t.name === "Integer")
            return "Integer";
    }
    return "Other";
}
const BODY_BEARING = new Set([
    "KindDecl", "SubkindDecl", "RoleDecl", "RelatorDecl", "CategoryDecl",
    "MixinDecl", "RoleMixinDecl", "ModeDecl", "QualityDecl", "CollectiveDecl",
    "QuantityDecl", "HappeningDecl", "AgentDecl", "CommitmentDecl", "UseCaseDecl",
]);
export function renderRustEventWrappers(file, cfg) {
    const lines = [];
    lines.push("// ─── Event wrappers ───");
    lines.push("");
    // Type index — used to look up self.<prop> kinds during translation
    // so we can auto-promote Integer literals to f64 in Real comparisons.
    const byName = new Map();
    const typeDecls = new Map();
    for (const d of file.declarations) {
        byName.set(d.name, d);
        if (d.kind !== "RelationDecl" && d.kind !== "PhaseGroupDecl") {
            typeDecls.set(d.name, d);
        }
    }
    const idx = { byName, typeDecls };
    const cycleSet = detectCycles(idx);
    for (const d of file.declarations) {
        if (!BODY_BEARING.has(d.kind))
            continue;
        if (!("events" in d) || d.events.length === 0)
            continue;
        // Build per-declaration property-kind + TypeRef maps once. The
        // TypeRef map is required so lambda-variable type tracking can
        // walk `forAll(x | x.foo)` over `self.<setProp>` and resolve
        // the lambda's element type.
        const propKinds = new Map();
        const propTypeRefs = new Map();
        for (const { prop } of effectiveProperties(d.name, idx, cycleSet).values()) {
            propKinds.set(prop.name, numKindOfTypeRef(prop.propertyType));
            propTypeRefs.set(prop.name, prop.propertyType);
        }
        // Auto-invariant enforcement: when the type declares any
        // invariants, every event wrapper will call self.validate() after
        // the impl runs and roll back on a non-empty violation list.
        // Mirrors the Eiffel class-invariant convention — the contract
        // holds at every public-method boundary. Writers no longer need
        // to repeat invariant clauses as posts.
        const hasInvariants = "invariants" in d && d.invariants?.length > 0;
        lines.push(`impl ${toRustTypeName(d.name)} {`);
        for (const ev of d.events) {
            lines.push(...renderEventWrapper(d.name, ev, cfg, "sync", propKinds, propTypeRefs, idx, cycleSet, hasInvariants));
            lines.push("");
            if (cfg.emitAsync) {
                lines.push(...renderEventWrapper(d.name, ev, cfg, "async", propKinds, propTypeRefs, idx, cycleSet, hasInvariants));
                lines.push("");
            }
        }
        lines.push(`}`);
        lines.push("");
    }
    return lines.join("\n");
}
function renderEventWrapper(ownerName, ev, cfg, mode, propKinds, propTypeRefs, idx, cycleSet, 
/**
 * True iff the owning declaration has at least one invariant. When
 * true, the wrapper emits a `self.validate()` check after the impl
 * (and after explicit post-checks pass) and rolls back on a
 * non-empty violation list. Eiffel-style class-invariant
 * enforcement at every method boundary.
 */
hasInvariants) {
    // Per-parameter primitive kind (Real / Integer / Other) AND full
    // TypeRef so we can resolve `<param>.<prop>` navigations.
    const paramKinds = new Map();
    const paramTypeRefs = new Map();
    for (const p of ev.parameters) {
        paramKinds.set(p.name, numKindOfTypeRef(p.parameterType));
        paramTypeRefs.set(p.name, p.parameterType);
    }
    // Mutable scope for lambda-bound variables. The forAll / exists /
    // select / reject / collect translator pushes the sentinel-named
    // lambda variable plus its element type before recursing into the
    // body, then pops after. This lets the Integer→f64 promotion fire
    // on `forAll(b | b.chargeLevel >= 0)` where `b.chargeLevel` is Real.
    const lambdaTypeRefs = new Map();
    // Closure-style type resolver passed into translateExpr — answers
    // "what is the numeric kind of this OCL sub-expression?" for the
    // narrow cases the Integer→f64 promotion needs.
    const typeOfImpl = (e) => {
        if (e.kind === "OclNav") {
            // Resolve the receiver's type name, then look up the property's
            // declared primitive kind in the owning type.
            if (e.object.kind === "OclVarRef") {
                if (e.object.name === "self") {
                    // self.<prop> (and self.<prop>@pre — same kind).
                    return propKinds.get(e.property) ?? "Other";
                }
                // Params and lambda-bound variables resolve the same way:
                // look up the receiver's TypeRef, drill into its effective
                // properties to find the navigated field's kind.
                const tr = paramTypeRefs.get(e.object.name) ??
                    lambdaTypeRefs.get(e.object.name);
                if (tr?.kind === "NamedType") {
                    const props = effectiveProperties(tr.name, idx, cycleSet);
                    const hit = props.get(e.property);
                    if (hit)
                        return numKindOfTypeRef(hit.prop.propertyType);
                }
            }
            return "Other";
        }
        if (e.kind === "OclVarRef") {
            return paramKinds.get(e.name) ?? "Other";
        }
        if (e.kind === "OclLiteral") {
            if (e.litKind === "Integer")
                return "Integer";
            if (e.litKind === "Real")
                return "Real";
        }
        return "Other";
    };
    /**
     * Compute the element TypeRef of a collection expression. Used by
     * the forAll/exists branch to register the lambda-bound variable's
     * type before translating the body. Limited resolution: handles
     * `self.<prop>` where prop is `Set<NamedType>`, and any nested
     * `<receiver>.<prop>` that ultimately points to a Set property
     * we can resolve via the TypeRef maps.
     */
    const elementTypeOf = (source) => {
        // Set<T> AND Array<T,N> share the same OCL surface — both feed
        // forAll/exists through `.iter()`, and rustc complains identically
        // for `Set<f64>::iter()` and `[f64; N]::iter()` (both yield `&f64`).
        // Treating them uniformly here makes the iter().copied() decision
        // work for both.
        const elemOf = (t) => {
            if (!t)
                return null;
            if (t.kind === "SetType")
                return t.elementType;
            if (t.kind === "ArrayType")
                return t.elementType;
            return null;
        };
        // NESTED quantifier case (matrix iteration): the source is the
        // outer lambda's bound variable, whose registered TypeRef may
        // itself be Array<T, N> (the inner row of a matrix). Without
        // this branch the inner `.iter()` skipped `.copied()` and the
        // body's `__x >= 0.0` failed cargo check on `&f64` vs `f64`.
        if (source.kind === "OclVarRef") {
            return elemOf(paramTypeRefs.get(source.name) ?? lambdaTypeRefs.get(source.name));
        }
        if (source.kind !== "OclNav")
            return null;
        if (source.object.kind === "OclVarRef") {
            if (source.object.name === "self") {
                return elemOf(propTypeRefs.get(source.property));
            }
            const recv = paramTypeRefs.get(source.object.name) ??
                lambdaTypeRefs.get(source.object.name);
            if (recv?.kind === "NamedType") {
                const props = effectiveProperties(recv.name, idx, cycleSet);
                const hit = props.get(source.property);
                return elemOf(hit?.prop.propertyType);
            }
        }
        return null;
    };
    // Compose the callable typeOf with lambda push/pop methods so the
    // translateExpr's OclForAll/OclExists branches can mutate scope
    // without growing the signature. typeOfImpl already closes over
    // lambdaTypeRefs, so enter/exit just bump that map.
    const typeOf = typeOfImpl;
    typeOf.enterLambda = (sentinel, source) => {
        const t = elementTypeOf(source);
        if (t !== null)
            lambdaTypeRefs.set(sentinel, t);
    };
    typeOf.exitLambda = (sentinel) => {
        lambdaTypeRefs.delete(sentinel);
    };
    typeOf.iterFor = (source) => {
        const t = elementTypeOf(source);
        return t !== null && isCopyTypeRef(t) ? "iter().copied()" : "iter()";
    };
    /**
     * Resolve a receiver's TypeRef. Knows about `self` (the owning
     * type the event lives on), event parameters (`paramTypeRefs`),
     * lambda-bound variables, and one level of nav chaining.
     */
    const recvTypeRef = (recv) => {
        if (recv.kind === "OclVarRef") {
            if (recv.name === "self") {
                return { kind: "NamedType", name: ownerName, location: recv.loc };
            }
            return (paramTypeRefs.get(recv.name) ??
                lambdaTypeRefs.get(recv.name) ??
                null);
        }
        if (recv.kind === "OclNav" && !recv.isPre) {
            const owner = recvTypeRef(recv.object);
            if (owner?.kind === "NamedType") {
                const props = effectiveProperties(owner.name, idx, cycleSet);
                return props.get(recv.property)?.prop.propertyType ?? null;
            }
        }
        return null;
    };
    typeOf.propTypeOf = (recv, propName) => {
        const owner = recvTypeRef(recv);
        if (owner?.kind !== "NamedType")
            return null;
        const props = effectiveProperties(owner.name, idx, cycleSet);
        return props.get(propName)?.prop.propertyType ?? null;
    };
    typeOf.identityUnwrap = (recv, propName) => {
        const owner = recvTypeRef(recv);
        if (owner?.kind !== "NamedType")
            return "";
        const ownerDecl = idx.byName.get(owner.name);
        if (!ownerDecl || !("identity" in ownerDecl) || !ownerDecl.identity) {
            return "";
        }
        if (ownerDecl.identity.propertyName !== propName)
            return "";
        const props = effectiveProperties(owner.name, idx, cycleSet);
        const propType = props.get(propName)?.prop.propertyType;
        if (propType?.kind === "PrimitiveType")
            return ".0";
        return "";
    };
    typeOf.resolveType = (expr) => recvTypeRef(expr);
    typeOf.includesCall = (source, elem) => {
        const elemType = elementTypeOf(source);
        if (elemType?.kind === "NamedType") {
            return `.iter().any(|__y| __y == &${elem})`;
        }
        return `.contains(&${elem})`;
    };
    const lines = [];
    const baseName = toRustFieldName(ev.name) + "_wrapped";
    const methodName = mode === "async" ? `${baseName}_async` : baseName;
    const paramTypes = ev.parameters.map(p => renderTypeRef(p.parameterType, cfg));
    // Parameter names in Rust must be snake_case to satisfy the lint.
    const paramNames = ev.parameters
        .map((p) => toRustFieldName(p.name))
        .join(", ");
    const paramNamesPrefix = paramNames.length > 0 ? `, ${paramNames}` : "";
    const preSnapshots = collectPreSnapshots(ev.post);
    // Phase 16c: optional event return type. The closure now produces
    // a value of that type, which the wrapper threads through to its
    // own Result on success. Post-conditions may reference the special
    // identifier `result` — its translation maps to the local binding
    // we use here.
    const hasReturnType = ev.returnType !== null;
    const returnTypeStr = hasReturnType
        ? renderTypeRef(ev.returnType, cfg)
        : "()";
    const resultBinding = hasReturnType ? "__result" : "()";
    // Sync: F: FnOnce(&mut Self, ...) -> T.
    // Async: F: FnOnce(&mut Self, ...) -> Fut, Fut: Future<Output=T>.
    // The async form uses a generic Future to stay runtime-agnostic
    // (works with embassy, tokio, smol). No alloc, no Pin<Box<dyn>>.
    const syncClosureSig = paramTypes.length > 0
        ? `FnOnce(&mut Self, ${paramTypes.join(", ")}) -> ${returnTypeStr}`
        : `FnOnce(&mut Self) -> ${returnTypeStr}`;
    lines.push(`    /// ${mode === "async" ? "Async wrapper" : "Wrapper"} for event ${ev.name}: pre-checks, runs impl, post-checks.`);
    // Phase 16 (MVP) — surface declared effects + data dependencies
    // on the generated wrapper so downstream auditors (and the AI
    // generating .onto) can see the contract at a glance. These are
    // documentation only in this iteration; capability passing comes
    // in Phase 16.5.
    if (ev.effects.length > 0) {
        lines.push(`    /// Effects: ${ev.effects.join(", ")}`);
    }
    if (ev.reads.length > 0) {
        lines.push(`    /// Reads: ${ev.reads.join(", ")}`);
    }
    if (ev.writes.length > 0) {
        lines.push(`    /// Writes: ${ev.writes.join(", ")}`);
    }
    if (mode === "async") {
        lines.push(`    pub async fn ${methodName}<F, Fut>(`);
    }
    else {
        lines.push(`    pub fn ${methodName}<F>(`);
    }
    lines.push(`        &mut self,`);
    for (const p of ev.parameters) {
        lines.push(`        ${toRustFieldName(p.name)}: ${renderTypeRef(p.parameterType, cfg)},`);
    }
    lines.push(`        impl_fn: F,`);
    lines.push(`    ) -> Result<${returnTypeStr}, &'static str>`);
    if (mode === "async") {
        const asyncClosureSig = paramTypes.length > 0
            ? `FnOnce(&mut Self, ${paramTypes.join(", ")}) -> Fut`
            : `FnOnce(&mut Self) -> Fut`;
        lines.push(`    where`);
        lines.push(`        F: ${asyncClosureSig},`);
        lines.push(`        Fut: core::future::Future<Output = ${returnTypeStr}>,`);
    }
    else {
        lines.push(`    where F: ${syncClosureSig}`);
    }
    lines.push(`    {`);
    const paramSet = new Set(ev.parameters.map((p) => p.name));
    for (const clause of ev.pre) {
        if (clause.parsed && isNullCheck(clause.parsed)) {
            lines.push(`        // ELIDED pre (vacuous; DSL has no Option type): ${oneLine(clause.rawExpression)}`);
            continue;
        }
        const t = translateClause(clause, "pre", paramSet, new Set(), typeOf, null, null);
        if (t.ok) {
            const escaped = escapeRustString(clause.rawExpression);
            lines.push(`        if !(${t.expr}) {`);
            lines.push(`            return Err("[${ownerName}::${ev.name}] precondition violated: ${escaped}");`);
            lines.push(`        }`);
        }
        else {
            lines.push(`        // SKIPPED pre: ${oneLine(clause.rawExpression)} -- ${t.reason}`);
        }
    }
    // Param move-vs-borrow fix: any non-Copy parameter that appears in
    // a post-clause must be cloned BEFORE we move it into impl_fn,
    // otherwise rustc reports `borrow of moved value` when the post
    // references it. Copy primitives (Real / Integer / Boolean) don't
    // need this. Build the rename map up-front so the post translator
    // can substitute `<p>` with `__post_<p>` consistently.
    const paramsReferencedInPost = new Set();
    for (const clause of ev.post) {
        if (clause.parsed)
            collectVarRefs(clause.parsed, paramsReferencedInPost);
    }
    const paramTypeByName = new Map(ev.parameters.map((p) => [p.name, p.parameterType]));
    const paramRemap = new Map();
    for (const pname of paramsReferencedInPost) {
        if (!paramSet.has(pname))
            continue;
        const tr = paramTypeByName.get(pname);
        if (tr === undefined || isCopyTypeRef(tr))
            continue;
        paramRemap.set(pname, `__post_${toRustFieldName(pname)}`);
    }
    for (const propName of preSnapshots) {
        const fieldName = toRustFieldName(propName);
        lines.push(`        let __pre_${fieldName} = self.${fieldName}.clone();`);
    }
    // Emit param clones (only the non-Copy ones referenced in posts).
    for (const [pname, alias] of paramRemap) {
        lines.push(`        let ${alias} = ${toRustFieldName(pname)}.clone();`);
    }
    lines.push(`        let __rollback = self.clone();`);
    if (mode === "async") {
        if (hasReturnType) {
            lines.push(`        let __result = impl_fn(self${paramNamesPrefix}).await;`);
        }
        else {
            lines.push(`        impl_fn(self${paramNamesPrefix}).await;`);
        }
    }
    else {
        if (hasReturnType) {
            lines.push(`        let __result = impl_fn(self${paramNamesPrefix});`);
        }
        else {
            lines.push(`        impl_fn(self${paramNamesPrefix});`);
        }
    }
    const postBranches = [];
    for (const clause of ev.post) {
        if (clause.parsed && isNullCheck(clause.parsed)) {
            lines.push(`        // ELIDED post (vacuous; DSL has no Option type): ${oneLine(clause.rawExpression)}`);
            continue;
        }
        const t = translateClause(clause, "post", paramSet, preSnapshots, typeOf, hasReturnType ? "__result" : null, paramRemap.size > 0 ? paramRemap : null);
        if (t.ok) {
            postBranches.push({
                cond: t.expr,
                msg: escapeRustString(clause.rawExpression),
            });
        }
        else {
            lines.push(`        // SKIPPED post: ${oneLine(clause.rawExpression)} -- ${t.reason}`);
        }
    }
    const okExpr = hasReturnType ? "Ok(__result)" : "Ok(())";
    // Explicit post-checks first (short-circuit, single rollback point).
    if (postBranches.length > 0) {
        lines.push(`        let __violation: Option<&'static str> = `);
        for (let i = 0; i < postBranches.length; i += 1) {
            const branch = postBranches[i];
            const prefix = i === 0 ? "            if" : "            } else if";
            lines.push(`${prefix} !(${branch.cond}) {`);
            lines.push(`                Some("[${ownerName}::${ev.name}] postcondition violated: ${branch.msg}")`);
        }
        lines.push(`            } else {`);
        lines.push(`                None`);
        lines.push(`            };`);
        lines.push(`        if let Some(__msg) = __violation {`);
        lines.push(`            *self = __rollback;`);
        lines.push(`            return Err(__msg);`);
        lines.push(`        }`);
    }
    // Auto-invariant enforcement (Eiffel-style class invariant at the
    // method boundary). Only when the owning type actually has an
    // invariants block — otherwise self.validate() doesn't exist.
    // Roll back to the pre-impl snapshot on any violation, surface the
    // first reported message so the caller has actionable feedback.
    if (hasInvariants) {
        lines.push(`        let __inv = self.validate();`);
        lines.push(`        if !__inv.is_empty() {`);
        lines.push(`            *self = __rollback;`);
        lines.push(`            return Err(__inv[0]);`);
        lines.push(`        }`);
    }
    else if (postBranches.length === 0) {
        // No posts, no invariants — rollback was prepared but never
        // needed; consume it so the variable isn't unused.
        lines.push(`        let _ = __rollback; // no post-checks; rollback unused`);
    }
    lines.push(`        ${okExpr}`);
    lines.push(`    }`);
    return lines;
}
/** Find self.X@pre depth-1 references in post-clauses. */
function collectPreSnapshots(postClauses) {
    const out = new Set();
    for (const c of postClauses) {
        if (c.parsed)
            walk(c.parsed, out);
    }
    return out;
    function walk(e, acc) {
        if (e.kind === "OclNav" && e.isPre) {
            // Only handle self.<prop>@pre depth-1.
            if (e.object.kind === "OclVarRef" && e.object.name === "self") {
                acc.add(e.property);
            }
        }
        switch (e.kind) {
            case "OclLiteral":
            case "OclVarRef": return;
            case "OclNav":
                walk(e.object, acc);
                return;
            case "OclCall":
                walk(e.object, acc);
                if (e.argument)
                    walk(e.argument, acc);
                return;
            case "OclUnary":
                walk(e.operand, acc);
                return;
            case "OclBinary":
                walk(e.left, acc);
                walk(e.right, acc);
                return;
            case "OclIf":
                walk(e.cond, acc);
                walk(e.then, acc);
                walk(e.else_, acc);
                return;
            case "OclSize":
            case "OclIsEmpty":
            case "OclNotEmpty":
                walk(e.source, acc);
                return;
            case "OclIncludes":
                walk(e.source, acc);
                walk(e.element, acc);
                return;
            case "OclForAll":
            case "OclExists":
                walk(e.source, acc);
                walk(e.body, acc);
                return;
        }
    }
}
const COMPARE_OPS = new Set(["=", "<>", "<", "<=", ">", ">="]);
function translateClause(clause, context, paramNames, preSnapshots, typeOf, 
/**
 * Phase 16c — when the event declares a return type and we're
 * translating a post-condition, the OCL identifier `result` binds
 * to this Rust expression (typically `"__result"`). Null in pre
 * context or when the event has no return type.
 */
resultBinding, 
/**
 * Param move-vs-borrow fix — when non-null, OclVarRef(<param>)
 * resolves to the mapped clone alias (e.g. `__post_contract`)
 * instead of the moved-into-impl param name. Set only for posts
 * where the wrapper has emitted matching `let __post_x = x.clone();`
 * lines before the impl call.
 */
paramRemap) {
    if (!clause.parsed)
        return { ok: false, reason: "OCL parse failed" };
    return translateExpr(clause.parsed, context, paramNames, preSnapshots, typeOf, resultBinding, paramRemap);
}
function translateExpr(e, context, params, preSnapshots, typeOf, resultBinding, paramRemap) {
    switch (e.kind) {
        case "OclLiteral":
            return translateLiteral(e);
        case "OclVarRef":
            if (e.name === "self")
                return { ok: true, expr: "self" };
            // Phase 16c: post-conditions of return-typed events may bind
            // the special name `result` to the value the impl produced.
            if (e.name === "result" && resultBinding !== null) {
                return { ok: true, expr: resultBinding };
            }
            if (params.has(e.name)) {
                // Param move-vs-borrow fix — in post context the param may
                // have been pre-cloned to avoid being moved into impl_fn.
                const alias = paramRemap?.get(e.name);
                if (alias !== undefined)
                    return { ok: true, expr: alias };
                return { ok: true, expr: toRustFieldName(e.name) };
            }
            if (e.name.startsWith("__lambda_")) {
                return { ok: true, expr: e.name.slice("__lambda_".length) };
            }
            return { ok: false, reason: `unbound variable '${e.name}'` };
        case "OclNav": {
            if (e.isPre) {
                if (context === "pre") {
                    return { ok: false, reason: "@pre is only valid in post-conditions" };
                }
                // depth-1: self.<prop>@pre
                if (e.object.kind === "OclVarRef" && e.object.name === "self" && preSnapshots.has(e.property)) {
                    // `@pre` snapshots are stored as the raw inner value
                    // (`self.<id>.0` was already unwrapped at snapshot time
                    // when the field is a branded identity — see preSnapshots
                    // generation). Standard nav still applies the unwrap on
                    // demand below for non-`@pre` reads.
                    return { ok: true, expr: `__pre_${toRustFieldName(e.property)}` };
                }
                return { ok: false, reason: "@pre supported only on self.<prop> (depth 1)" };
            }
            const obj = translateExpr(e.object, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!obj.ok)
                return obj;
            // Auto-unwrap branded identity newtypes so downstream arithmetic
            // / comparisons see the scalar inner value (AP_BattMonitor bug
            // 2026-05-20: `self.instance_id >= 0` failed because the field
            // was `BatteryInstanceId(i64)` rather than `i64`).
            const unwrap = typeOf.identityUnwrap(e.object, e.property);
            return {
                ok: true,
                expr: `${obj.expr}.${toRustFieldName(e.property)}${unwrap}`,
            };
        }
        case "OclBinary": {
            const op = BIN_OP_MAP[e.op];
            if (!op)
                return { ok: false, reason: `unsupported op '${e.op}'` };
            // Nested null check — three shapes (see validators.ts for the
            // full rationale): `b.foo <> null`, `self.foo <> null` inside
            // a lambda, and the bare `b <> null` form. All collapse to a
            // constant when the subject is non-Option.
            if (e.op === "<>" || e.op === "=") {
                const shape = lambdaNullShape(e);
                if (shape !== null) {
                    const subjectType = shape.propName !== null
                        ? typeOf.propTypeOf(shape.subject, shape.propName)
                        : typeOf.resolveType(shape.subject);
                    if (subjectType !== null && subjectType.kind !== "OptionType") {
                        return { ok: true, expr: e.op === "<>" ? "true" : "false" };
                    }
                }
            }
            // Promote Integer literal-like expressions to f64 when the
            // other side is Real. "Literal-like" includes `42` and `-42`.
            if (COMPARE_OPS.has(e.op)) {
                const leftLit = asIntegerLiteralLikeValue(e.left);
                const rightLit = asIntegerLiteralLikeValue(e.right);
                if (leftLit !== null && typeOf(e.right) === "Real") {
                    const r = translateExpr(e.right, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
                    if (!r.ok)
                        return r;
                    return { ok: true, expr: `(${leftLit}.0 ${op} ${r.expr})` };
                }
                if (rightLit !== null && typeOf(e.left) === "Real") {
                    const l = translateExpr(e.left, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
                    if (!l.ok)
                        return l;
                    return { ok: true, expr: `(${l.expr} ${op} ${rightLit}.0)` };
                }
            }
            const l = translateExpr(e.left, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!l.ok)
                return l;
            const r = translateExpr(e.right, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!r.ok)
                return r;
            return { ok: true, expr: `(${l.expr} ${op} ${r.expr})` };
        }
        case "OclUnary": {
            const inner = translateExpr(e.operand, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!inner.ok)
                return inner;
            if (e.op === "not")
                return { ok: true, expr: `!(${inner.expr})` };
            return { ok: true, expr: `-(${inner.expr})` };
        }
        case "OclIf": {
            const c = translateExpr(e.cond, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!c.ok)
                return c;
            const t = translateExpr(e.then, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!t.ok)
                return t;
            const f = translateExpr(e.else_, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!f.ok)
                return f;
            return { ok: true, expr: `(if ${c.expr} { ${t.expr} } else { ${f.expr} })` };
        }
        case "OclCall":
            if (e.method === "isFinite" || e.method === "isNaN") {
                const recv = translateExpr(e.object, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
                if (!recv.ok)
                    return recv;
                const rustMethod = e.method === "isFinite" ? "is_finite" : "is_nan";
                return { ok: true, expr: `(${recv.expr}).${rustMethod}()` };
            }
            return { ok: false, reason: `method call '.${e.method}(...)' not translatable` };
        case "OclSize": {
            const src = translateExpr(e.source, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!src.ok)
                return src;
            return { ok: true, expr: `(${src.expr}.len() as i64)` };
        }
        case "OclIsEmpty": {
            const src = translateExpr(e.source, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!src.ok)
                return src;
            return { ok: true, expr: `(${src.expr}.is_empty())` };
        }
        case "OclNotEmpty": {
            const src = translateExpr(e.source, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!src.ok)
                return src;
            return { ok: true, expr: `(!${src.expr}.is_empty())` };
        }
        case "OclIncludes": {
            const src = translateExpr(e.source, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!src.ok)
                return src;
            const a = translateExpr(e.element, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!a.ok)
                return a;
            // BTreeSet::contains for Set<Primitive>; Vec linear scan for
            // Set<NamedType> (structs aren't Ord). Same logic as validators.
            return { ok: true, expr: `(${src.expr}${typeOf.includesCall(e.source, a.expr)})` };
        }
        case "OclForAll":
        case "OclExists": {
            const src = translateExpr(e.source, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            if (!src.ok)
                return src;
            // Compute iterCall BEFORE enterLambda. For nested quantifiers
            // (matrix forAll inside forAll), the inner source is the outer
            // lambda variable — its TypeRef is only in scope while the
            // outer binding is alive. Pulling iterFor here uses the still-
            // intact scope; doing it after exitLambda saw an empty slot
            // and skipped .copied() on inner iterations.
            const iterCall = typeOf.iterFor(e.source);
            const sentinel = `__lambda___x`;
            // Push the lambda variable's element type into scope so the
            // body's nested navigations (e.g. `b.chargeLevel` where b is
            // BatteryPack) can resolve their NumKind for Integer→f64
            // promotion. Pop after the body is translated so sibling
            // lambdas don't see stale state.
            typeOf.enterLambda(sentinel, e.source);
            const substituted = substituteVarRef(e.body, e.variable, sentinel);
            const pred = translateExpr(substituted, context, params, preSnapshots, typeOf, resultBinding, paramRemap);
            typeOf.exitLambda(sentinel);
            if (!pred.ok)
                return pred;
            const method = e.kind === "OclForAll" ? "all" : "any";
            return { ok: true, expr: `(${src.expr}.${iterCall}.${method}(|__x| ${pred.expr}))` };
        }
        default:
            return { ok: false, reason: `unsupported OclExpr kind` };
    }
}
function translateLiteral(e) {
    switch (e.litKind) {
        case "Integer": return { ok: true, expr: String(e.value) };
        case "Real": {
            const s = String(e.value);
            return { ok: true, expr: s.includes(".") ? s : `${s}.0` };
        }
        case "Boolean": return { ok: true, expr: e.value ? "true" : "false" };
        case "String": {
            const escaped = e.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
            return { ok: true, expr: `"${escaped}"` };
        }
        case "Null": return { ok: true, expr: "None" };
    }
}
const BIN_OP_MAP = {
    "=": "==", "<>": "!=", "<": "<", "<=": "<=", ">": ">", ">=": ">=",
    "+": "+", "-": "-", "*": "*", "/": "/", and: "&&", or: "||",
};
function substituteVarRef(e, from, to) {
    switch (e.kind) {
        case "OclLiteral": return e;
        case "OclVarRef": return e.name === from ? { ...e, name: to } : e;
        case "OclNav": return { ...e, object: substituteVarRef(e.object, from, to) };
        case "OclCall":
            return {
                ...e, object: substituteVarRef(e.object, from, to),
                argument: e.argument === null ? null : substituteVarRef(e.argument, from, to),
            };
        case "OclUnary": return { ...e, operand: substituteVarRef(e.operand, from, to) };
        case "OclBinary":
            return { ...e, left: substituteVarRef(e.left, from, to), right: substituteVarRef(e.right, from, to) };
        case "OclIf":
            return {
                ...e, cond: substituteVarRef(e.cond, from, to),
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
            if (e.variable === from)
                return { ...e, source: substituteVarRef(e.source, from, to) };
            return { ...e, source: substituteVarRef(e.source, from, to), body: substituteVarRef(e.body, from, to) };
        default:
            return e;
    }
}
// ─── Helpers ────────────────────────────────────────────────────────
function renderTypeRef(t, cfg) {
    return mapTypeRef(t, cfg);
}
function toSnakeCase(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
}
function escapeRustString(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
/**
 * Flatten a (possibly multi-line) raw OCL expression into a single
 * line for embedding in a `//` comment. Without this, multi-line
 * clauses leak past the comment terminator and become live Rust code
 * (a real codegen bug surfaced when AP_BattMonitor's multi-line
 * if/then/else post-clause was skipped and broke cargo check).
 *
 * Em-dash `—` is also normalized to `--` because rustc rejects em
 * dashes in non-comment positions and the safest defence is to keep
 * the original outside of identifier/punctuation positions entirely.
 */
function oneLine(s) {
    return s.replace(/\s+/g, " ").trim();
}
/**
 * Walk an OCL expression, collecting bare identifier references
 * (OclVarRef.name) into `acc`. Used to detect which event
 * parameters are referenced in post-condition clauses so the
 * wrapper can clone them before the impl call (param move-vs-borrow
 * fix). Lambda-substituted names beginning with `__lambda_` are
 * excluded — they're sentinels, not real parameter references.
 */
function collectVarRefs(e, acc) {
    switch (e.kind) {
        case "OclLiteral":
            return;
        case "OclVarRef":
            if (!e.name.startsWith("__lambda_") && e.name !== "self" && e.name !== "result") {
                acc.add(e.name);
            }
            return;
        case "OclNav":
            collectVarRefs(e.object, acc);
            return;
        case "OclCall":
            collectVarRefs(e.object, acc);
            if (e.argument)
                collectVarRefs(e.argument, acc);
            return;
        case "OclUnary":
            collectVarRefs(e.operand, acc);
            return;
        case "OclBinary":
            collectVarRefs(e.left, acc);
            collectVarRefs(e.right, acc);
            return;
        case "OclIf":
            collectVarRefs(e.cond, acc);
            collectVarRefs(e.then, acc);
            collectVarRefs(e.else_, acc);
            return;
        case "OclSize":
        case "OclIsEmpty":
        case "OclNotEmpty":
            collectVarRefs(e.source, acc);
            return;
        case "OclIncludes":
            collectVarRefs(e.source, acc);
            collectVarRefs(e.element, acc);
            return;
        case "OclForAll":
        case "OclExists":
        case "OclSelect":
        case "OclReject":
        case "OclCollect":
            collectVarRefs(e.source, acc);
            collectVarRefs(e.body, acc);
            return;
        case "OclLet":
            collectVarRefs(e.init, acc);
            collectVarRefs(e.body, acc);
            return;
    }
}
/**
 * Is the given TypeRef known to map to a Rust `Copy` type? Used to
 * decide whether a parameter must be cloned before being moved into
 * impl_fn so a post-condition can still reference it.
 *   Real / Integer / Boolean primitives → Copy (no clone needed).
 *   String / NamedType / Set<T> / Option<NonCopy> → NOT Copy.
 *   Option<Copy> — conservatively treat as not-Copy too; the clone
 *   is trivial since Option<Copy> is itself Copy (rustc will elide).
 */
function isCopyTypeRef(t) {
    if (t.kind === "PrimitiveType") {
        return t.name === "Real" || t.name === "Integer" || t.name === "Boolean";
    }
    // `[T; N]` is `Copy` iff `T: Copy`. Matters for both the
    // iter().copied() forAll/exists strategy AND the param
    // move-vs-borrow fix (no clone needed for a `[f64; N]` param).
    if (t.kind === "ArrayType") {
        return isCopyTypeRef(t.elementType);
    }
    return false;
}
/**
 * Return the numeric value of an "integer literal-like" expression:
 *   42         -> 42
 *   -42        -> -42  (unary minus over an Integer literal)
 * Otherwise null. Used to promote integer literals to f64 in
 * comparisons against Real-typed operands.
 */
function asIntegerLiteralLikeValue(e) {
    if (e.kind === "OclLiteral" && e.litKind === "Integer") {
        return e.value;
    }
    if (e.kind === "OclUnary" &&
        e.op === "-" &&
        e.operand.kind === "OclLiteral" &&
        e.operand.litKind === "Integer") {
        return -e.operand.value;
    }
    return null;
}
/**
 * Returns the "subject" of a null comparison — whatever non-null
 * side appears in `<expr> <> null` or `<expr> = null`. Two shapes:
 *   - `<recv>.<prop>` (depth-1 navigation): propName is set
 *   - bare receiver (lambda var, self, param): propName is null
 * Returns null if neither side is the null literal. Mirrors the
 * helper in validators.ts.
 */
function lambdaNullShape(e) {
    const isNullLit = (x) => x.kind === "OclLiteral" && x.litKind === "Null";
    const shapeOf = (x) => {
        if (x.kind === "OclNav" && !x.isPre) {
            return { subject: x.object, propName: x.property };
        }
        if (x.kind === "OclVarRef" && !isNullLit(x)) {
            return { subject: x, propName: null };
        }
        return null;
    };
    if (isNullLit(e.right))
        return shapeOf(e.left);
    if (isNullLit(e.left))
        return shapeOf(e.right);
    return null;
}
/**
 * Detect `<expr> <> null` or `<expr> = null` — vacuous under the DSL's
 * no-Option-type assumption. Mirrors the helper in validators.ts.
 */
function isNullCheck(e) {
    if (e.kind !== "OclBinary")
        return false;
    if (e.op !== "<>" && e.op !== "=")
        return false;
    const isNullLit = (x) => x.kind === "OclLiteral" && x.litKind === "Null";
    return isNullLit(e.left) || isNullLit(e.right);
}
//# sourceMappingURL=eventWrappers.js.map