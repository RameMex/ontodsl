/**
 * Phase 10.5 — Event handler runtime wrappers.
 *
 * For every `event name(params) { pre: ..; post: ..; modifies: ..; }`
 * declared on a body-bearing type, we generate:
 *
 *   1. A type alias for the user-supplied implementation function.
 *   2. A wrapper function that runs pre-conditions before calling the
 *      impl, snapshots @pre-referenced paths, then runs
 *      post-conditions on the impl's result.
 *
 * The user provides the actual mutation logic (factories don't mutate;
 * Phase 10's invariant validators don't either; this is the first
 * Phase that consumes user-supplied code). The wrapper is a thin
 * contract enforcer around it.
 *
 * Generated shape:
 *
 *   export type DroneSwapBatteryImpl = (
 *     self: Drone,
 *     newBattery: BatteryPack,
 *   ) => { self: Drone; modified: { battery: BatteryPack } };
 *
 *   export function wrapDroneSwapBattery(
 *     impl: DroneSwapBatteryImpl,
 *   ): (self: Drone, newBattery: BatteryPack) => Drone {
 *     return (self, newBattery) => {
 *       // pre checks → throw on violation
 *       // @pre snapshot
 *       const __pre = { ... captured paths ... };
 *       const result = impl(self, newBattery);
 *       // post checks → throw on violation
 *       return result.self;
 *     };
 *   }
 *
 * Scope for Phase 10.5:
 *   ✓ Pre-conditions in the decidable fragment (same translator
 *     coverage as invariant validators)
 *   ✓ Post-conditions in the decidable fragment, with `@pre`
 *     references resolved via a snapshot taken before the impl call
 *   ✓ `modifies` paths inform the impl's return type
 *   ✓ Parameters in pre/post clauses
 *
 * Skipped (commented in output, not enforced at runtime):
 *   ✗ Allen temporal calls (no time model)
 *   ✗ Reference equality through deep navigation
 *   ✗ Anything else outside the fragment translateExpr handles
 *
 * Out of Phase 10.5 scope entirely:
 *   • Commitment lifecycle monitors (→ Phase 10.6)
 *   • Async / Promise-returning events (→ Phase 10.9)
 *   • State persistence
 *
 * Included since the Phase 4 rollback extension (NOT originally in
 * 10.5 scope but added later):
 *   • Transactional rollback on post-violation: `__cloneSelf` snapshots
 *     self before the impl runs and `Object.assign(self, __rollback)`
 *     restores it on a failed post-check. See the helper appended at
 *     the bottom of renderEventWrappers().
 */

import type { Declaration, OntoFile, EventDecl, ParameterDecl, TypeRef } from "../ast/index.js";
import type { OclBinOp, OclExpr } from "../ocl/nodes.js";

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

export function renderEventWrappers(file: OntoFile): string {
  const lines: string[] = [];
  lines.push("// ─── Event handler wrappers ───");
  lines.push("");

  for (const d of file.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    if (!("events" in d) || d.events.length === 0) continue;
    for (const ev of d.events) {
      lines.push(...renderEventWrapper(d.name, ev, false));
      lines.push("");
      lines.push(...renderEventWrapper(d.name, ev, true));
      lines.push("");
    }
  }

  const hasWrappers = file.declarations.some(
    (d) => BODY_BEARING.has(d.kind) && ("events" in d) && d.events && d.events.length > 0
  );
  if (hasWrappers) {
    lines.push("");
    lines.push("// Helper function to recursively deep clone self states for transactional rollback");
    lines.push("function __cloneSelf(obj: any): any {");
    lines.push("  if (obj === null || typeof obj !== \"object\") return obj;");
    lines.push("  if (obj instanceof Set) {");
    lines.push("    return new Set(Array.from(obj).map(__cloneSelf));");
    lines.push("  }");
    lines.push("  if (Array.isArray(obj)) {");
    lines.push("    return obj.map(__cloneSelf);");
    lines.push("  }");
    lines.push("  const copy = {} as any;");
    lines.push("  for (const k of Object.keys(obj)) {");
    lines.push("    copy[k] = __cloneSelf(obj[k]);");
    lines.push("  }");
    lines.push("  return copy;");
    lines.push("}");
    lines.push("");
  }

  return lines.join("\n");
}

/**
 * Emit an event wrapper, sync or async.
 *
 * Sync (Phase 10.5): impl returns `{ self, modified }`; wrapper
 *   returns `Owner`.
 * Async (Phase 10.9): impl returns `Promise<{ self, modified }>`;
 *   wrapper returns `Promise<Owner>`.
 *
 * Pre-checks run synchronously before the impl is awaited. The @pre
 * snapshot is captured synchronously too — at the moment of the call,
 * not at promise resolution. Post-checks run on the resolved result.
 * Rejections from the impl propagate as-is; failed pre/post checks
 * become thrown Errors which Promise wraps as rejections.
 *
 * The two variants are emitted side-by-side so users pick whichever
 * matches their impl. They share the impl-type-name suffix
 * convention: `OwnerNameImpl` for sync, `OwnerNameAsyncImpl` for
 * async; wrapper names mirror that with `wrapOwnerName` and
 * `wrapOwnerNameAsync`.
 */
function renderEventWrapper(
  ownerName: string,
  ev: EventDecl,
  isAsync: boolean,
): string[] {
  const lines: string[] = [];
  const suffix = isAsync ? "Async" : "";
  const wrapperName = `wrap${ownerName}${capitalize(ev.name)}${suffix}`;
  const implTypeName = `${ownerName}${capitalize(ev.name)}${suffix}Impl`;

  // Build the impl type: takes (self, ...params), returns { self, modified }
  const paramSig = paramListSig(ev.parameters);
  const modifiedFields = collectModifiedFields(ownerName, ev);
  const modifiedSig =
    modifiedFields.length === 0
      ? "{}"
      : `{ ${modifiedFields.map((m) => `${m.name}: ${m.tsType}`).join("; ")} }`;

  lines.push(`/** Impl signature for ${ownerName}.${ev.name}${isAsync ? " (async)" : ""}. User supplies this. */`);
  const implReturn = `{ self: ${ownerName}; modified: ${modifiedSig} }`;
  const wrappedImplReturn = isAsync ? `Promise<${implReturn}>` : implReturn;
  lines.push(
    `export type ${implTypeName} = (self: ${ownerName}${paramSig.typed}) => ` +
      `${wrappedImplReturn};`,
  );
  lines.push("");

  const wrapperReturn = isAsync ? `Promise<${ownerName}>` : ownerName;
  lines.push(`/** Contract-checking wrapper for ${ownerName}.${ev.name}${isAsync ? " (async)" : ""}. */`);
  lines.push(
    `export function ${wrapperName}(impl: ${implTypeName}): (self: ${ownerName}${paramSig.typed}) => ${wrapperReturn} {`,
  );
  const arrowAsync = isAsync ? "async " : "";
  lines.push(
    `  return ${arrowAsync}(self${paramSig.untyped}) => {`,
  );

  // Pre-condition checks. The translator runs in "pre context": `self`
  // is the pre-state, parameters are bound to their JS names.
  if (ev.pre.length > 0) {
    lines.push(`    const preViolations: string[] = [];`);
    for (const clause of ev.pre) {
      const t = translateClause(clause.parsed, ev.parameters, "pre");
      if (t.ok) {
        const escaped = jsEscape(clause.rawExpression);
        lines.push(`    if (!(${t.expr})) {`);
        lines.push(
          `      preViolations.push("[${ownerName}.${ev.name}] pre violated: ${escaped}");`,
        );
        lines.push(`    }`);
      } else {
        lines.push(
          `    // SKIPPED pre-clause (not translatable): ${clause.rawExpression} — ${t.reason}`,
        );
      }
    }
    lines.push(`    if (preViolations.length > 0) {`);
    lines.push(`      throw new Error(preViolations.join("; "));`);
    lines.push(`    }`);
  }

  // @pre snapshot. Walk all post-clauses' AST to find `@pre`
  // navigations and emit a snapshot capturing the value at the time
  // of the call. This is what makes `self.battery@pre` mean "the
  // battery as it was BEFORE the impl ran" in post-conditions.
  const preRefs = collectPreReferences(ev.post);
  if (preRefs.length > 0) {
    lines.push(`    const __pre = {`);
    for (const ref of preRefs) {
      // ref is like "self.battery"; translate to JS access on the
      // pre-state `self` parameter.
      const path = ref.replace(/^self\./, "self.");
      lines.push(`      ${jsKey(ref)}: ${path},`);
    }
    lines.push(`    };`);
  }

  // Capture original self for transactional rollback
  lines.push(`    const __rollback = __cloneSelf(self);`);
  lines.push(`    try {`);

  // Run the user impl. In async mode we await the returned promise
  // before checking post-conditions; rejections propagate naturally.
  const callArgs = ev.parameters.map((p) => p.name).join(", ");
  const awaitKw = isAsync ? "await " : "";
  lines.push(
    `      const __result = ${awaitKw}impl(self${callArgs.length > 0 ? ", " + callArgs : ""});`,
  );

  // Post-condition checks. In post context: `self` is the post-state
  // (`__result.self`), `@pre`-suffixed references read from `__pre`.
  if (ev.post.length > 0) {
    lines.push(`      const postViolations: string[] = [];`);
    for (const clause of ev.post) {
      const t = translateClause(clause.parsed, ev.parameters, "post");
      if (t.ok) {
        const escaped = jsEscape(clause.rawExpression);
        lines.push(`      if (!(${t.expr})) {`);
        lines.push(
          `        postViolations.push("[${ownerName}.${ev.name}] post violated: ${escaped}");`,
        );
        lines.push(`      }`);
      } else {
        lines.push(
          `      // SKIPPED post-clause (not translatable): ${clause.rawExpression} — ${t.reason}`,
        );
      }
    }
    lines.push(`      if (postViolations.length > 0) {`);
    lines.push(`      throw new Error(postViolations.join("; "));`);
    lines.push(`      }`);
  }

  lines.push(`      return __result.self;`);
  lines.push(`    } catch (err) {`);
  lines.push(`      for (const key of Object.keys(self)) {`);
  lines.push(`        delete (self as any)[key];`);
  lines.push(`      }`);
  lines.push(`      Object.assign(self, __rollback);`);
  lines.push(`      throw err;`);
  lines.push(`    }`);
  lines.push(`  };`);
  lines.push(`}`);

  return lines;
}

// ─── Translator ──────────────────────────────────────────────────────

type TranslateResult =
  | { ok: true; expr: string }
  | { ok: false; reason: string };

type Context = "pre" | "post";

function translateClause(
  parsed: OclExpr | null,
  params: readonly ParameterDecl[],
  context: Context,
): TranslateResult {
  if (!parsed) return { ok: false, reason: "OCL AST missing" };
  return translateExpr(parsed, params, context);
}

function translateExpr(
  e: OclExpr,
  params: readonly ParameterDecl[],
  context: Context,
): TranslateResult {
  switch (e.kind) {
    case "OclLiteral":
      return translateLiteral(e);
    case "OclVarRef":
      return translateVarRef(e.name, params, context);
    case "OclNav":
      return translateNav(e, params, context);
    case "OclBinary": {
      const l = translateExpr(e.left, params, context);
      if (!l.ok) return l;
      const r = translateExpr(e.right, params, context);
      if (!r.ok) return r;
      const op = BIN_OP_MAP[e.op];
      if (!op) return { ok: false, reason: `unsupported op '${e.op}'` };
      return { ok: true, expr: `(${l.expr} ${op} ${r.expr})` };
    }
    case "OclUnary": {
      const inner = translateExpr(e.operand, params, context);
      if (!inner.ok) return inner;
      if (e.op === "not") return { ok: true, expr: `!(${inner.expr})` };
      return { ok: true, expr: `-(${inner.expr})` };
    }
    case "OclIf": {
      const c = translateExpr(e.cond, params, context);
      if (!c.ok) return c;
      const t = translateExpr(e.then, params, context);
      if (!t.ok) return t;
      const f = translateExpr(e.else_, params, context);
      if (!f.ok) return f;
      return { ok: true, expr: `((${c.expr}) ? (${t.expr}) : (${f.expr}))` };
    }
    case "OclCall":
      if (e.method === "isFinite" || e.method === "isNaN") {
        const recv = translateExpr(e.object, params, context);
        if (!recv.ok) return recv;
        const tsFn = e.method === "isFinite" ? "Number.isFinite" : "Number.isNaN";
        return { ok: true, expr: `${tsFn}(${recv.expr})` };
      }
      // Phase 10.5 doesn't translate Allen ops or any method calls.
      return {
        ok: false,
        reason: `method call '.${e.method}(...)' not translatable in Phase 10.5`,
      };
    case "OclSize": {
      const src = translateExpr(e.source, params, context);
      if (!src.ok) return src;
      return { ok: true, expr: `(${src.expr}).size` };
    }
    case "OclIsEmpty": {
      const src = translateExpr(e.source, params, context);
      if (!src.ok) return src;
      return { ok: true, expr: `(${src.expr}).size === 0` };
    }
    case "OclNotEmpty": {
      const src = translateExpr(e.source, params, context);
      if (!src.ok) return src;
      return { ok: true, expr: `(${src.expr}).size > 0` };
    }
    case "OclIncludes": {
      const src = translateExpr(e.source, params, context);
      if (!src.ok) return src;
      const a = translateExpr(e.element, params, context);
      if (!a.ok) return a;
      return { ok: true, expr: `(${src.expr}).has(${a.expr})` };
    }
    case "OclForAll":
    case "OclExists": {
      // Phase 10.7+: lambda translation via sentinel substitution.
      // The lambda variable is rewritten to `__lambda___x` in the
      // body; `translateVarRef` recognises that prefix and emits the
      // JS parameter name. Same pattern as Phase 10's validators.
      const src = translateExpr(e.source, params, context);
      if (!src.ok) return src;
      const jsParam = "__x";
      const sentinel = `__lambda_${jsParam}`;
      const substituted = substituteVarRef(e.body, e.variable, sentinel);
      const pred = translateExpr(substituted, params, context);
      if (!pred.ok) return pred;
      const method = e.kind === "OclForAll" ? "every" : "some";
      return {
        ok: true,
        expr: `Array.from(${src.expr}).${method}((${jsParam}) => (${pred.expr}))`,
      };
    }
    default:
      return { ok: false, reason: "unsupported OclExpr kind" };
  }
}

function translateLiteral(
  e: Extract<OclExpr, { kind: "OclLiteral" }>,
): TranslateResult {
  switch (e.litKind) {
    case "Integer":
    case "Real":
      return { ok: true, expr: String(e.value) };
    case "Boolean":
      return { ok: true, expr: e.value ? "true" : "false" };
    case "String":
      return { ok: true, expr: JSON.stringify(e.value as string) };
    case "Null":
      return { ok: true, expr: "null" };
  }
}

/**
 * Resolve a bare identifier to its JS-side name, depending on
 * context:
 *   - `self` — pre context: the `self` parameter; post context:
 *     `__result.self`.
 *   - parameter name — always the JS parameter (impl arg names match
 *     OCL parameter names).
 *   - any other name — outside what Phase 10.5 supports for event
 *     clauses (no lambda binding, no @pre at this level).
 */
function translateVarRef(
  name: string,
  params: readonly ParameterDecl[],
  context: Context,
): TranslateResult {
  if (name === "self") {
    return { ok: true, expr: context === "post" ? "__result.self" : "self" };
  }
  if (params.some((p) => p.name === name)) {
    return { ok: true, expr: name };
  }
  // Lambda variable rewritten by `substituteVarRef` in quantifier
  // translation. The remainder after the prefix is the JS-side
  // identifier (e.g. "__x" for the outermost lambda).
  if (name.startsWith("__lambda_")) {
    return { ok: true, expr: name.slice("__lambda_".length) };
  }
  return { ok: false, reason: `unbound variable '${name}'` };
}

function translateNav(
  e: Extract<OclExpr, { kind: "OclNav" }>,
  params: readonly ParameterDecl[],
  context: Context,
): TranslateResult {
  // @pre: route to the snapshot. Only valid in post context (the
  // semantic typechecker rejects @pre in pre-conditions).
  if (e.isPre) {
    if (context !== "post") {
      return { ok: false, reason: "@pre is only valid in post-conditions" };
    }
    // Reconstruct the path string for snapshot lookup. Phase 10.5
    // supports depth-1 @pre on `self.X`. Deeper or via parameters is
    // technically expressible but the snapshot collection logic
    // would need to be more careful, so we cap at depth 1 here.
    if (e.object.kind !== "OclVarRef" || e.object.name !== "self") {
      return {
        ok: false,
        reason: "@pre supported only on self.<prop> (depth 1)",
      };
    }
    return { ok: true, expr: `__pre[${JSON.stringify(`self.${e.property}`)}]` };
  }

  const obj = translateExpr(e.object, params, context);
  if (!obj.ok) return obj;
  // Same `.` vs `?.` policy as Phase 10's invariant validators: direct
  // var-ref bases use `.`, deeper chains use `?.`.
  const isDirectFromVar = e.object.kind === "OclVarRef";
  const dot = isDirectFromVar ? "." : "?.";
  return { ok: true, expr: `${obj.expr}${dot}${e.property}` };
}

const BIN_OP_MAP: Record<OclBinOp, string> = {
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

// ─── Helpers ────────────────────────────────────────────────────────

/**
 * Walk an OclExpr substituting bare references to `from` with a
 * synthetic VarRef to `to`. Used to bind lambda variables in
 * quantifier translation. Does NOT traverse into inner quantifiers
 * that shadow `from` — lexical scoping matters for nested forAll.
 *
 * Identical pattern to the one in validators.ts. Kept inline rather
 * than factored to a shared module because (a) the OclExpr union is
 * small and stable, (b) the two translators have different
 * `translateVarRef` semantics (events have params + context, invariants
 * don't), so sharing the *substituter* but not the *translator* would
 * introduce a coupling boundary that's worse than the duplication.
 */
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
      // Shadowing: if the inner quantifier rebinds `from`, skip
      // substitution into its body (but still substitute into source).
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

function paramListSig(params: readonly ParameterDecl[]): {
  typed: string;
  untyped: string;
} {
  if (params.length === 0) return { typed: "", untyped: "" };
  const typed = params.map((p) => `, ${p.name}: ${renderTypeRef(p.parameterType)}`).join("");
  const untyped = params.map((p) => `, ${p.name}`).join("");
  return { typed, untyped };
}

function renderTypeRef(t: TypeRef): string {
  if (t.kind === "PrimitiveType") {
    switch (t.name) {
      case "Real":
      case "Integer":
        return "number";
      case "String":
        return "string";
      case "Boolean":
        return "boolean";
    }
  }
  if (t.kind === "NamedType") return t.name;
  return `ReadonlySet<${renderTypeRef(t.elementType)}>`;
}

/**
 * For each path in `event.modifies` rooted at `self`, return its name
 * and the TypeScript type for use in the impl's return type. Only
 * depth-1 paths from `self` are supported in Phase 10.5; deeper paths
 * (`self.battery.cells`) require partial-update modeling that's
 * out of scope.
 *
 * The TS type is taken from the property's declared type. Since we
 * don't have semantic indexing here (we're emitting strings), we
 * fallback to `unknown` when we can't see the property — the type
 * checker will still error if the impl violates the shape, but
 * users will get less-precise IntelliSense.
 *
 * Phase 10.5 leaves the type as `unknown` when it can't be statically
 * inferred from the AST without a TypeIndex; refining this is purely
 * a quality-of-life improvement for a future phase.
 */
function collectModifiedFields(
  _ownerName: string,
  ev: EventDecl,
): readonly { readonly name: string; readonly tsType: string }[] {
  const out: { name: string; tsType: string }[] = [];
  for (const m of ev.modifies) {
    if (m.root !== "self" || m.segments.length !== 1) continue;
    out.push({ name: m.segments[0]!, tsType: "unknown" });
  }
  return out;
}

/**
 * Walk all post-clauses to collect every distinct `self.X@pre`
 * reference. We use the path string (`"self.battery"`) as the key
 * for both the snapshot object literal and the lookup site.
 */
function collectPreReferences(post: readonly { parsed: OclExpr | null }[]): readonly string[] {
  const seen = new Set<string>();
  for (const clause of post) {
    if (clause.parsed) collectPreFromExpr(clause.parsed, seen);
  }
  return [...seen];
}

function collectPreFromExpr(e: OclExpr, out: Set<string>): void {
  switch (e.kind) {
    case "OclNav":
      if (
        e.isPre &&
        e.object.kind === "OclVarRef" &&
        e.object.name === "self"
      ) {
        out.add(`self.${e.property}`);
      }
      collectPreFromExpr(e.object, out);
      return;
    case "OclBinary":
      collectPreFromExpr(e.left, out);
      collectPreFromExpr(e.right, out);
      return;
    case "OclUnary":
      collectPreFromExpr(e.operand, out);
      return;
    case "OclIf":
      collectPreFromExpr(e.cond, out);
      collectPreFromExpr(e.then, out);
      collectPreFromExpr(e.else_, out);
      return;
    case "OclCall":
      collectPreFromExpr(e.object, out);
      if (e.argument) collectPreFromExpr(e.argument, out);
      return;
    case "OclSize":
    case "OclIsEmpty":
    case "OclNotEmpty":
      collectPreFromExpr(e.source, out);
      return;
    case "OclIncludes":
      collectPreFromExpr(e.source, out);
      collectPreFromExpr(e.element, out);
      return;
    case "OclForAll":
    case "OclExists":
      collectPreFromExpr(e.source, out);
      collectPreFromExpr(e.body, out);
      return;
    case "OclLiteral":
    case "OclVarRef":
      return;
  }
}

function capitalize(s: string): string {
  return s.length === 0 ? s : s[0]!.toUpperCase() + s.slice(1);
}

function jsEscape(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r");
}

function jsKey(s: string): string {
  return JSON.stringify(s);
}
