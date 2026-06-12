/**
 * Phase 15 — Rust invariant validators.
 *
 * For each declaration with invariants, emit:
 *
 *   impl Customer {
 *       pub fn validate(&self) -> alloc::vec::Vec<&'static str> {
 *           let mut violations = alloc::vec::Vec::new();
 *           if !(self.age >= 18) {
 *               violations.push("[Customer] invariant violated: self.age >= 18");
 *           }
 *           violations
 *       }
 *   }
 *
 * The Rust translator parallels the TS one but with idiomatic Rust:
 *   - Property navigation via `.` (no `?.` — Rust references can't
 *     be null in safe code; if a field is `Option<T>` the user
 *     handles unwrapping in their domain logic)
 *   - String comparison: `==` → `==`, `<>` → `!=` (distinct from
 *     TS where we use `===`/`!==`)
 *   - Set ops compile against BTreeSet's API:
 *       size() → .len() as i64
 *       isEmpty() → .is_empty()
 *       notEmpty() → !.is_empty()
 *       includes(x) → .contains(&x)
 *       forAll(x | pred) → .iter().all(|x| pred)
 *       exists(x | pred) → .iter().any(|x| pred)
 *
 * We DO NOT translate Allen calls or @pre — same as TS validators
 * (Allen needs time model; @pre is event-only, not invariants).
 *
 * Numeric literals: Rust is strict about i64 vs f64. Integer
 * literals like `18` work fine when compared to i64; comparing to
 * f64 would need `18.0`. The OCL AST tells us each literal's
 * litKind (Integer vs Real); we emit the right form.
 *
 * String literals: Rust's `==` between `String` and `&str` works
 * via the `PartialEq<str>` impl, so `self.name == "alice"` is fine.
 */

import type { Declaration, OntoFile, TypeRef } from "../ast/index.js";
import type { OclBinOp, OclExpr } from "../ocl/nodes.js";
import {
  effectiveProperties,
  detectCycles,
  type TypeIndex,
} from "../semantic/inheritance.js";
import {
  type RustTargetConfig,
  rustVec,
  rustVecNew,
  rustVecPush,
} from "./typeMapping.js";
import { toRustFieldName, toRustTypeName } from "./naming.js";

/** "Real" | "Integer" | other (Boolean/String/Set/Ref/unknown). */
type NumKind = "Real" | "Integer" | "Other";
/** Resolves the numeric kind of an OCL expression, if statically derivable. */
/**
 * NumKind resolver passed into translateExpr, with attached
 * push/pop methods so forAll/exists branches can scope lambda-bound
 * variables' types. See codegen-rust/eventWrappers.ts for the
 * companion definition.
 *
 * `iterFor(source)` returns the Rust iter call to use when iterating
 * over `source` in a forAll/exists. Yields `"iter().copied()"` for
 * `Set<Copy>` (so the lambda binds `T` not `&T`) and `"iter()"` for
 * everything else.
 */
type TypeOf = ((e: OclExpr) => NumKind) & {
  enterLambda(sentinel: string, source: OclExpr): void;
  exitLambda(sentinel: string): void;
  iterFor(source: OclExpr): string;
  /**
   * If the navigation `recv.<propName>` lands on a branded identity
   * field whose inner type is primitive (Real/Integer/Boolean/String),
   * returns `".0"` so the caller can unwrap the newtype. Otherwise
   * returns `""`. Lets `self.id >= 0` typecheck after lowering to
   * `self.id.0 >= 0`. (AP_BattMonitor bug, 2026-05-20.)
   */
  identityUnwrap(recv: OclExpr, propName: string): string;
  /**
   * Returns the TypeRef of the navigation `recv.<propName>`, if
   * resolvable through self / lambda-bound / param scope. Used by
   * the null-check elision pass to detect non-Option fields inside
   * forAll/exists bodies — without this, `b.foo <> null` codegened
   * to `T != None` and broke cargo check. (AP_Baro / AP_RangeFinder
   * bug, 2026-05-20.)
   */
  propTypeOf(recv: OclExpr, propName: string): TypeRef | null;
  /**
   * TypeRef of an arbitrary receiver expression — `self`, a lambda
   * variable, a param, or a depth-1 nav. Lets the null-elision pass
   * handle bare `b <> null` checks where the iterated element type
   * isn't a navigation result. Returns null when we can't resolve.
   */
  resolveType(expr: OclExpr): TypeRef | null;
  /**
   * Format an `->includes(elem)` membership test against `source`.
   * Picks `.contains(&elem)` for BTreeSet-backed Set<Primitive> and
   * `.iter().any(|__y| __y == &elem)` for Vec-backed Set<NamedType>
   * (structs don't derive Ord, so they can't be BTreeSet elements;
   * we use Vec + linear search). Surfaced by AP_BattMonitor.
   */
  includesCall(source: OclExpr, elem: string): string;
};

function exprTypeOf(e: OclExpr, typeOf: TypeOf): TypeRef | null {
  return typeOf.resolveType(e);
}

function isCopyTypeRef(t: TypeRef): boolean {
  if (t.kind === "PrimitiveType") {
    return t.name === "Real" || t.name === "Integer" || t.name === "Boolean";
  }
  // `[T; N]` is `Copy` iff `T: Copy`. Matters for the forAll/exists
  // iter().copied() decision AND for the param move-vs-borrow fix
  // (no clone needed before impl_fn when param is `[f64; N]`).
  if (t.kind === "ArrayType") {
    return isCopyTypeRef(t.elementType);
  }
  return false;
}

function numKindOfTypeRef(t: TypeRef): NumKind {
  if (t.kind === "PrimitiveType") {
    if (t.name === "Real") return "Real";
    if (t.name === "Integer") return "Integer";
  }
  return "Other";
}

const BODY_BEARING: ReadonlySet<Declaration["kind"]> = new Set([
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

export function renderRustValidators(file: OntoFile, cfg: RustTargetConfig): string {
  const lines: string[] = [];
  lines.push("// ─── Runtime invariant validators ───");
  lines.push("");

  // Build a type index so we can resolve `self.<prop>` to its declared
  // type during translation (needed for Integer-literal → f64
  // auto-promotion in `Real`-vs-`Integer-literal` comparisons).
  const byName = new Map<string, Declaration>();
  const typeDecls = new Map<string, import("../ast/index.js").TypeDecl>();
  for (const d of file.declarations) {
    byName.set(d.name, d);
    if (d.kind !== "RelationDecl" && d.kind !== "PhaseGroupDecl") {
      typeDecls.set(d.name, d as import("../ast/index.js").TypeDecl);
    }
  }
  const idx: TypeIndex = { byName, typeDecls };
  const cycleSet = detectCycles(idx);

  for (const d of file.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    if (!("invariants" in d) || d.invariants.length === 0) continue;
    lines.push(...renderValidatorImpl(d, idx, cycleSet, cfg));
    lines.push("");
  }
  return lines.join("\n");
}

function renderValidatorImpl(
  d: Declaration,
  idx: TypeIndex,
  cycleSet: ReadonlySet<string>,
  cfg: RustTargetConfig,
): string[] {
  if (!("invariants" in d)) return [];

  const vecTy = rustVec(cfg, "&'static str");
  const vecCtor = rustVecNew(cfg, "&'static str");

  // Build a self.<prop> → NumKind lookup table for this declaration.
  // Invariants don't see event parameters; only navigations from self.
  const propKindMap = new Map<string, NumKind>();
  const optionPropNames = new Set<string>();
  const propTypeRefMap = new Map<string, TypeRef>();
  for (const { prop } of effectiveProperties(d.name, idx, cycleSet).values()) {
    propKindMap.set(prop.name, numKindOfTypeRef(prop.propertyType));
    propTypeRefMap.set(prop.name, prop.propertyType);
    if (prop.propertyType.kind === "OptionType") {
      optionPropNames.add(prop.name);
    }
  }

  // Mutable scope for lambda-bound variables (Phase 16.x bug fix).
  // Lets `self.spareBatteries->forAll(b | b.chargeLevel >= 0)`
  // promote the bare `0` literal to `0.0` because typeOf can resolve
  // `b.chargeLevel` to Real via the Set's element TypeRef.
  const lambdaTypeRefs = new Map<string, TypeRef>();

  const typeOfImpl = (e: OclExpr): NumKind => {
    if (e.kind === "OclNav" && e.object.kind === "OclVarRef") {
      if (e.object.name === "self") {
        return propKindMap.get(e.property) ?? "Other";
      }
      const tr = lambdaTypeRefs.get(e.object.name);
      if (tr?.kind === "NamedType") {
        const props = effectiveProperties(tr.name, idx, cycleSet);
        const hit = props.get(e.property);
        if (hit) return numKindOfTypeRef(hit.prop.propertyType);
      }
    }
    if (e.kind === "OclLiteral") {
      if (e.litKind === "Integer") return "Integer";
      if (e.litKind === "Real") return "Real";
    }
    return "Other";
  };

  const elementTypeOf = (source: OclExpr): TypeRef | null => {
    // Resolve element type for Set<T> AND Array<T,N> — both surface
    // the same OCL operations (forAll / exists / size). For arrays,
    // the resulting Rust `.iter()` still yields `&T`, so the same
    // iter().copied() strategy applies when T is Copy.
    const elemOf = (t: TypeRef | undefined): TypeRef | null => {
      if (!t) return null;
      if (t.kind === "SetType") return t.elementType;
      if (t.kind === "ArrayType") return t.elementType;
      return null;
    };
    // NESTED quantifier case: the source IS the outer lambda's bound
    // variable (e.g. `row->forAll(val | ...)` where `row` was bound
    // by `self.matrix->forAll(row | ...)`). The bound variable's
    // TypeRef is registered in lambdaTypeRefs and may itself be a
    // Set/Array (matrix rows = Array<T, N>). Without this branch,
    // matrix iteration fell back to `.iter()` and the inner lambda
    // bound `&T` instead of `T`, breaking cargo check.
    if (source.kind === "OclVarRef") {
      return elemOf(lambdaTypeRefs.get(source.name));
    }
    if (source.kind !== "OclNav") return null;
    if (source.object.kind === "OclVarRef") {
      if (source.object.name === "self") {
        return elemOf(propTypeRefMap.get(source.property));
      }
      const recv = lambdaTypeRefs.get(source.object.name);
      if (recv?.kind === "NamedType") {
        const props = effectiveProperties(recv.name, idx, cycleSet);
        const hit = props.get(source.property);
        return elemOf(hit?.prop.propertyType);
      }
    }
    return null;
  };

  // Wrap typeOfImpl with lambda enter/exit methods so translateExpr's
  // forAll/exists branch can mutate the scope without growing its
  // parameter list.
  const typeOf = typeOfImpl as TypeOf;
  typeOf.enterLambda = (sentinel: string, source: OclExpr): void => {
    const t = elementTypeOf(source);
    if (t !== null) lambdaTypeRefs.set(sentinel, t);
  };
  typeOf.exitLambda = (sentinel: string): void => {
    lambdaTypeRefs.delete(sentinel);
  };
  typeOf.iterFor = (source: OclExpr): string => {
    const t = elementTypeOf(source);
    return t !== null && isCopyTypeRef(t) ? "iter().copied()" : "iter()";
  };

  /**
   * Resolve a receiver expression's TypeRef so we can look up a
   * navigated property's declared type. Knows about `self`, lambda
   * vars (via lambdaTypeRefs), and one level of intermediate
   * navigation (the common pattern for `self.foo.bar` chains).
   */
  const recvTypeRef = (recv: OclExpr): TypeRef | null => {
    if (recv.kind === "OclVarRef") {
      if (recv.name === "self") {
        return { kind: "NamedType", name: d.name, location: recv.loc as any };
      }
      return lambdaTypeRefs.get(recv.name) ?? null;
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

  typeOf.propTypeOf = (recv: OclExpr, propName: string): TypeRef | null => {
    const owner = recvTypeRef(recv);
    if (owner?.kind !== "NamedType") return null;
    const props = effectiveProperties(owner.name, idx, cycleSet);
    return props.get(propName)?.prop.propertyType ?? null;
  };

  typeOf.identityUnwrap = (recv: OclExpr, propName: string): string => {
    const owner = recvTypeRef(recv);
    if (owner?.kind !== "NamedType") return "";
    const ownerDecl = idx.byName.get(owner.name);
    if (!ownerDecl || !("identity" in ownerDecl) || !ownerDecl.identity) {
      return "";
    }
    if (ownerDecl.identity.propertyName !== propName) return "";
    // Identity field — unwrap only when the inner is a primitive
    // (i.e. the branded newtype wraps a scalar). NamedType identity
    // is rare and the newtype isn't useful to unwrap.
    const props = effectiveProperties(owner.name, idx, cycleSet);
    const propType = props.get(propName)?.prop.propertyType;
    if (propType?.kind === "PrimitiveType") return ".0";
    return "";
  };
  typeOf.resolveType = (expr: OclExpr): TypeRef | null => recvTypeRef(expr);
  typeOf.includesCall = (source: OclExpr, elem: string): string => {
    const elemType = elementTypeOf(source);
    if (elemType?.kind === "NamedType") {
      // Vec-backed: linear search. The element binding `__y` is `&T`
      // (from iter()), and the search element is owned T — we borrow
      // the search side with `&` so `__y == &elem` compares &T to &T.
      return `.iter().any(|__y| __y == &${elem})`;
    }
    return `.contains(&${elem})`;
  };

  const lines: string[] = [];
  lines.push(`impl ${toRustTypeName(d.name)} {`);
  lines.push(`    /// Returns the list of violated invariant messages. Empty when valid.`);
  lines.push(`    pub fn validate(&self) -> ${vecTy} {`);
  lines.push(`        let mut violations: ${vecTy} = ${vecCtor};`);

  // Phase 16b refinement: elide `self.<prop> <> null` ONLY when the
  // field's declared type is NOT Option<T>. For Option fields the
  // check becomes a real, compilable `self.<prop>.is_some()` (emitted
  // by the regular translator path — see isNullCheckOnNonOptionField).
  for (const inv of d.invariants) {
    const nullProp = nullCheckTargetProp(inv.parsed);
    if (nullProp !== null && !optionPropNames.has(nullProp)) {
      const elided = inv.rawExpression.replace(/\s+/g, " ").trim();
      lines.push(
        `        // ELIDED invariant (vacuous; '${nullProp}' is not Option<T>, so non-null by construction): ${elided}`,
      );
      continue;
    }
    const translated = translateExpr(inv.parsed, typeOf);
    if (translated.ok) {
      const escaped = inv.rawExpression
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"');
      lines.push(`        if !(${translated.expr}) {`);
      lines.push(
        `            ${rustVecPush(cfg, "violations", `"[${d.name}] invariant violated: ${escaped}"`)}`,
      );
      lines.push(`        }`);
    } else {
      // Flatten the (possibly multi-line) rawExpression so the `//`
      // comment doesn't terminate mid-clause and leak the rest into
      // live Rust source — surfaced by AP_BattMonitor's multi-line
      // post-clause that broke cargo check.
      const oneLine = inv.rawExpression.replace(/\s+/g, " ").trim();
      lines.push(
        `        // SKIPPED invariant (not translatable to Rust): ${oneLine} -- ${translated.reason}`,
      );
    }
  }

  lines.push(`        violations`);
  lines.push(`    }`);
  lines.push(`}`);
  return lines;
}

/**
 * If `e` is a binary comparison `<expr> <> null` or `<expr> = null`
 * where `<expr>` is `self.<prop>` (depth-1 self navigation), return
 * the property name. Otherwise null.
 *
 * Used by validators to decide whether to elide a null check (when
 * the target prop is non-Option, the check is vacuous) or to let the
 * standard translator emit a real `.is_some()` / `.is_none()` call
 * (when the target prop is `Option<T>`).
 */
function nullCheckTargetProp(e: OclExpr | null): string | null {
  if (!e || e.kind !== "OclBinary") return null;
  if (e.op !== "<>" && e.op !== "=") return null;
  const isNullLit = (x: OclExpr): boolean =>
    x.kind === "OclLiteral" && x.litKind === "Null";
  const selfProp = (x: OclExpr): string | null => {
    if (
      x.kind === "OclNav" &&
      !x.isPre &&
      x.object.kind === "OclVarRef" &&
      x.object.name === "self"
    ) {
      return x.property;
    }
    return null;
  };
  if (isNullLit(e.right)) return selfProp(e.left);
  if (isNullLit(e.left)) return selfProp(e.right);
  return null;
}

/**
 * Returns the "subject" of a null comparison — whatever non-null
 * side appears in `<expr> <> null` or `<expr> = null`. Two shapes:
 *   - `<recv>.<prop>` (depth-1 navigation): propName is set
 *   - bare receiver (lambda var, self, param): propName is null
 * Returns null if neither side is the null literal.
 *
 * Used to elide vacuous null checks both in invariants and inside
 * forAll/exists lambda bodies. Lambda variables iterate over
 * concrete (non-null) elements, so `b <> null` is always true.
 */
function lambdaNullShape(
  e: Extract<OclExpr, { kind: "OclBinary" }>,
): { readonly subject: OclExpr; readonly propName: string | null } | null {
  const isNullLit = (x: OclExpr): boolean =>
    x.kind === "OclLiteral" && x.litKind === "Null";
  const shapeOf = (
    x: OclExpr,
  ): { subject: OclExpr; propName: string | null } | null => {
    if (x.kind === "OclNav" && !x.isPre) {
      return { subject: x.object, propName: x.property };
    }
    if (x.kind === "OclVarRef" && !isNullLit(x)) {
      return { subject: x, propName: null };
    }
    return null;
  };
  if (isNullLit(e.right)) return shapeOf(e.left);
  if (isNullLit(e.left)) return shapeOf(e.right);
  return null;
}

// ─── Translator ──────────────────────────────────────────────────────

type TranslateResult =
  | { readonly ok: true; readonly expr: string }
  | { readonly ok: false; readonly reason: string };

const COMPARE_OPS: ReadonlySet<OclBinOp> = new Set(["=", "<>", "<", "<=", ">", ">="]);

function translateExpr(e: OclExpr | null, typeOf: TypeOf): TranslateResult {
  if (!e) return { ok: false, reason: "OCL AST missing" };
  switch (e.kind) {
    case "OclLiteral":
      return translateLiteral(e);
    case "OclVarRef":
      return translateVarRef(e.name);
    case "OclNav":
      return translateNav(e, typeOf);
    case "OclBinary": {
      const op = BIN_OP_MAP[e.op];
      if (!op) return { ok: false, reason: `unsupported op '${e.op}'` };
      // Option<T> aware null comparison: `self.optField <> null`
      // becomes `self.opt_field.is_some()`, `... = null` becomes
      // `.is_none()`. We only get here for Option fields because the
      // validator's pre-pass elides the non-Option case at the
      // invariant level. Same applies to event wrappers (their own
      // translator has the equivalent branch).
      if (e.op === "<>" || e.op === "=") {
        const nullProp = nullCheckTargetProp(e);
        if (nullProp !== null) {
          const method = e.op === "<>" ? "is_some" : "is_none";
          return {
            ok: true,
            expr: `self.${toRustFieldName(nullProp)}.${method}()`,
          };
        }
        // Nested null check inside forAll/exists bodies — three
        // shapes surface:
        //   1) `b.foo <> null` (nav on a lambda var)
        //   2) `self.foo <> null` (nav already handled by the
        //      top-level elision pre-pass for invariants, but also
        //      appears inside lambdas via outer self capture)
        //   3) `b <> null` (the bound variable itself)
        // Shapes 1 and 2 elide when the navigated field isn't
        // Option<T>; shape 3 elides whenever the variable's TypeRef
        // resolves to a non-Option (lambda iteration produces
        // concrete, never-null elements). Surfaced by AP_Baro,
        // AP_RangeFinder 2026-05-20.
        const shape = lambdaNullShape(e);
        if (shape !== null) {
          const subjectType = shape.propName !== null
            ? typeOf.propTypeOf(shape.subject, shape.propName)
            : exprTypeOf(shape.subject, typeOf);
          if (subjectType !== null && subjectType.kind !== "OptionType") {
            return { ok: true, expr: e.op === "<>" ? "true" : "false" };
          }
        }
      }
      // Auto-promote Integer literals to f64 when the OTHER side of a
      // comparison is a Real-typed expression. Without this, OCL like
      // `self.chargeLevel >= 0` (where chargeLevel: Real) emits
      // `self.chargeLevel >= 0` in Rust, which fails to compile
      // because f64 can't be compared to a bare integer.
      if (COMPARE_OPS.has(e.op)) {
        const leftLit = asIntegerLiteralLikeValue(e.left);
        const rightLit = asIntegerLiteralLikeValue(e.right);
        if (leftLit !== null && typeOf(e.right) === "Real") {
          const r = translateExpr(e.right, typeOf);
          if (!r.ok) return r;
          return { ok: true, expr: `(${leftLit}.0 ${op} ${r.expr})` };
        }
        if (rightLit !== null && typeOf(e.left) === "Real") {
          const l = translateExpr(e.left, typeOf);
          if (!l.ok) return l;
          return { ok: true, expr: `(${l.expr} ${op} ${rightLit}.0)` };
        }
      }
      const l = translateExpr(e.left, typeOf);
      if (!l.ok) return l;
      const r = translateExpr(e.right, typeOf);
      if (!r.ok) return r;
      return { ok: true, expr: `(${l.expr} ${op} ${r.expr})` };
    }
    case "OclUnary": {
      const inner = translateExpr(e.operand, typeOf);
      if (!inner.ok) return inner;
      if (e.op === "not") return { ok: true, expr: `!(${inner.expr})` };
      return { ok: true, expr: `-(${inner.expr})` };
    }
    case "OclIf": {
      const c = translateExpr(e.cond, typeOf);
      if (!c.ok) return c;
      const t = translateExpr(e.then, typeOf);
      if (!t.ok) return t;
      const f = translateExpr(e.else_, typeOf);
      if (!f.ok) return f;
      return {
        ok: true,
        expr: `(if ${c.expr} { ${t.expr} } else { ${f.expr} })`,
      };
    }
    case "OclCall":
      if (e.method === "isFinite" || e.method === "isNaN") {
        const recv = translateExpr(e.object, typeOf);
        if (!recv.ok) return recv;
        const rustMethod = e.method === "isFinite" ? "is_finite" : "is_nan";
        return { ok: true, expr: `(${recv.expr}).${rustMethod}()` };
      }
      return {
        ok: false,
        reason: `method call '.${e.method}(...)' not translatable in Phase 15`,
      };
    case "OclSize": {
      const src = translateExpr(e.source, typeOf);
      if (!src.ok) return src;
      // BTreeSet::len returns usize; cast to i64 to match the
      // numeric type used elsewhere in the validator.
      return { ok: true, expr: `(${src.expr}.len() as i64)` };
    }
    case "OclIsEmpty": {
      const src = translateExpr(e.source, typeOf);
      if (!src.ok) return src;
      return { ok: true, expr: `(${src.expr}.is_empty())` };
    }
    case "OclNotEmpty": {
      const src = translateExpr(e.source, typeOf);
      if (!src.ok) return src;
      return { ok: true, expr: `(!${src.expr}.is_empty())` };
    }
    case "OclIncludes": {
      const src = translateExpr(e.source, typeOf);
      if (!src.ok) return src;
      const a = translateExpr(e.element, typeOf);
      if (!a.ok) return a;
      // For Set<Primitive> the Rust backing is BTreeSet so we use
      // `.contains(&x)`. For Set<NamedType> it's Vec (because struct
      // values don't derive Ord), and we fall back to a linear-scan
      // `.iter().any(|__y| __y == &x)`. typeOf.includesCall picks.
      return { ok: true, expr: `(${src.expr}${typeOf.includesCall(e.source, a.expr)})` };
    }
    case "OclForAll":
    case "OclExists": {
      const src = translateExpr(e.source, typeOf);
      if (!src.ok) return src;
      // Compute iterCall BEFORE enterLambda. For NESTED quantifiers
      // (e.g. matrix `m->forAll(row | row->forAll(x | …))`), the
      // inner forAll's source is the outer lambda variable. That
      // variable's TypeRef is registered in lambdaTypeRefs only while
      // the outer is in scope — and the inner's enterLambda would
      // overwrite the slot, then exitLambda would delete it, so by
      // the time the inner iterFor ran the binding was gone and the
      // inner iter() skipped .copied(). Computing iterCall up-front
      // looks up the source's element type against the still-intact
      // scope.
      const iterCall = typeOf.iterFor(e.source);
      const sentinel = `__lambda___x`;
      // Scope the lambda variable's element type so the body's
      // navigations can resolve via typeOf for Integer→f64
      // promotion. (See codegen-rust/eventWrappers.ts for the
      // companion implementation.)
      typeOf.enterLambda(sentinel, e.source);
      const substituted = substituteVarRef(e.body, e.variable, sentinel);
      const pred = translateExpr(substituted, typeOf);
      typeOf.exitLambda(sentinel);
      if (!pred.ok) return pred;
      const method = e.kind === "OclForAll" ? "all" : "any";
      return {
        ok: true,
        expr: `(${src.expr}.${iterCall}.${method}(|__x| ${pred.expr}))`,
      };
    }
    default:
      return { ok: false, reason: `unsupported OclExpr kind` };
  }
}

function asIntegerLiteralLikeValue(e: OclExpr): number | null {
  if (e.kind === "OclLiteral" && e.litKind === "Integer") {
    return e.value as number;
  }
  if (
    e.kind === "OclUnary" &&
    e.op === "-" &&
    e.operand.kind === "OclLiteral" &&
    e.operand.litKind === "Integer"
  ) {
    return -(e.operand.value as number);
  }
  return null;
}

function translateLiteral(
  e: Extract<OclExpr, { kind: "OclLiteral" }>,
): TranslateResult {
  switch (e.litKind) {
    case "Integer":
      // Cast literal to i64 to be unambiguous in expressions like
      // `self.count as i64 >= 0` — actually we don't need the cast
      // because rust will infer i64 from the comparison context if
      // the LHS is i64. Just emit the bare integer.
      return { ok: true, expr: String(e.value) };
    case "Real":
      // Ensure it has a decimal point so it's parsed as f64 even if
      // the value is mathematically an integer (e.g. 1.0, not 1).
      // The DSL parser preserves the `.` from source so e.value is
      // already a number; we format with `toString()` and add `.0`
      // if needed.
      {
        const s = String(e.value);
        return { ok: true, expr: s.includes(".") ? s : `${s}.0` };
      }
    case "Boolean":
      return { ok: true, expr: e.value ? "true" : "false" };
    case "String":
      // Rust string literal — `&str`. Comparing with String via ==
      // works through PartialEq<str> for String. Escape backslashes
      // and double quotes.
      {
        const escaped = (e.value as string)
          .replace(/\\/g, "\\\\")
          .replace(/"/g, '\\"');
        return { ok: true, expr: `"${escaped}"` };
      }
    case "Null":
      // OCL `null` doesn't translate cleanly to Rust — Rust uses
      // Option<T> for absence. The DSL doesn't model Option in its
      // type system today. Phase 15 emits the literal `None` and
      // hopes for the best — comparisons like `self.x <> null`
      // become `self.x != None` which only typechecks if `self.x`
      // is `Option<...>`, which the DSL doesn't generate. So in
      // practice null-comparisons will fail to compile, which is
      // arguably the right signal: the DSL author should encode
      // optionality explicitly, not via `<> null` patterns.
      return { ok: true, expr: "None" };
  }
}

function translateVarRef(name: string): TranslateResult {
  if (name === "self") return { ok: true, expr: "self" };
  if (name.startsWith("__lambda_")) {
    return { ok: true, expr: name.slice("__lambda_".length) };
  }
  return { ok: false, reason: `unbound variable '${name}'` };
}

function translateNav(
  e: Extract<OclExpr, { kind: "OclNav" }>,
  typeOf: TypeOf,
): TranslateResult {
  if (e.isPre) {
    return {
      ok: false,
      reason: "@pre references are event-only; not in Phase 15 invariants",
    };
  }
  const obj = translateExpr(e.object, typeOf);
  if (!obj.ok) return obj;
  // Rust uses `.` everywhere — references can't be null in safe code.
  // Field access on borrowed self is `self.field`, on owned struct is
  // also `s.field`. Auto-deref handles &self transparently.
  // When the navigation lands on a branded identity field with a
  // primitive inner type, append `.0` so downstream comparisons and
  // arithmetic see the unwrapped scalar (AP_BattMonitor bug fix —
  // `self.instance_id >= 0` only typechecks after unwrap).
  const unwrap = typeOf.identityUnwrap(e.object, e.property);
  return {
    ok: true,
    expr: `${obj.expr}.${toRustFieldName(e.property)}${unwrap}`,
  };
}

const BIN_OP_MAP: Record<OclBinOp, string> = {
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
  and: "&&",
  or: "||",
};

function substituteVarRef(e: OclExpr, from: string, to: string): OclExpr {
  switch (e.kind) {
    case "OclLiteral":
      return e;
    case "OclVarRef":
      if (e.name === from) return { ...e, name: to };
      return e;
    case "OclNav":
      return { ...e, object: substituteVarRef(e.object, from, to) };
    case "OclCall":
      return {
        ...e,
        object: substituteVarRef(e.object, from, to),
        argument:
          e.argument === null ? null : substituteVarRef(e.argument, from, to),
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
