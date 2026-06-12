/**
 * Phase Q3 / Paso 1 — Contract-witness test auto-generation.
 *
 * For each invariant + each event pre/post condition expressed in
 * OCL, emit a `#[test]` block that proves the contract under crafted
 * inputs. Two test shapes per witnessable clause:
 *
 *   - "violated_by_<corruption>" — supplies a value that should trip
 *     the clause; asserts the validator/wrapper reports the violation.
 *   - "holds_for_<normal>"        — supplies sane values; asserts the
 *     validator/wrapper does NOT trip.
 *
 * Output is plain `#[cfg(test)] mod contract_tests { … }` with no
 * external dev-deps — concrete test cases instead of randomized
 * properties. The advantages over a proptest emission:
 *   - works on any cargo version (proptest deps need edition2024 on
 *     newer releases),
 *   - test failures point to a single deterministic case,
 *   - faster CI (no shrinking).
 *
 * We keep "property-based" as the conceptual frame (each test is a
 * witness for the universally-quantified OCL clause) while emitting
 * concrete representative cases.
 *
 * Patterns covered (MVP):
 *
 *   INVARIANTS:
 *     - `self.<arrProp>->forAll(v | v.isFinite())`        → NaN at each index
 *     - `self.<arrProp>->forAll(v | v OP <lit>)`          → out-of-range injection
 *     - `self.<numProp>.isFinite()`                       → NaN
 *     - `self.<numProp> OP <lit>`                         → out-of-range
 *
 *   PRE-CONDITIONS (events):
 *     - `<param>.isFinite()`                              → NaN
 *     - `<param> OP <lit>`                                → out-of-range
 *
 *   POST-CONDITIONS (events with returnType):
 *     - `result OP <lit>`                                 → impl returning bad value Err
 *
 * Patterns deliberately NOT covered yet (would expand to 2x the code
 * and aren't blocking ArduPilot today — left as TODO):
 *   - Conjunctions in forAll bodies (`v | v.isFinite() and v >= 0`)
 *   - State-relation post-conditions (`self.x = self.x@pre + 1`)
 *   - `forAll`/`exists` on Set<NamedType> with property navigation
 */

import type {
  Declaration,
  OntoFile,
  TypeRef,
  EventDecl,
  PropertyDecl,
  InvariantDecl,
  OclClause,
} from "../ast/nodes.js";
import type { OclExpr } from "../ocl/nodes.js";
import {
  effectiveProperties,
  detectCycles,
  type TypeIndex,
} from "../semantic/inheritance.js";
import { type RustTargetConfig } from "./typeMapping.js";
import { toRustFieldName, toRustTypeName } from "./naming.js";

const BODY_BEARING: ReadonlySet<Declaration["kind"]> = new Set([
  "KindDecl", "SubkindDecl", "RoleDecl", "RelatorDecl", "CategoryDecl",
  "MixinDecl", "RoleMixinDecl", "ModeDecl", "QualityDecl", "CollectiveDecl",
  "QuantityDecl", "HappeningDecl", "AgentDecl", "CommitmentDecl", "UseCaseDecl",
]);

export interface RenderProptestsResult {
  /** Emitted Rust test module text. Empty string when nothing to test. */
  readonly proptestsRs: string;
  /** Number of `#[test]` functions emitted. */
  readonly testCount: number;
}

export function renderRustProptests(
  file: OntoFile,
  cfg: RustTargetConfig,
): RenderProptestsResult {
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

  const lines: string[] = [];
  let testCount = 0;

  for (const d of file.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    if (!("identity" in d) || !d.identity) continue;

    const result = renderForDecl(d, idx, cycleSet, cfg);
    if (result.tests.length === 0) continue;

    lines.push(`    // ─── ${d.name} ${"─".repeat(Math.max(2, 48 - d.name.length))}`);
    lines.push(...result.helpers);
    lines.push("");
    for (const t of result.tests) {
      lines.push(...t.map((l) => `    ${l}`));
      lines.push("");
    }
    testCount += result.tests.length;
  }

  if (testCount === 0) {
    return { proptestsRs: "", testCount: 0 };
  }

  const header = [
    `// ═══════════════════════════════════════════════════════════════════`,
    `// AUTO-GENERATED contract-witness tests from .onto invariants /`,
    `// pre / post conditions. Each test corresponds to one OCL clause.`,
    `// No external dependencies — runs with stock \`cargo test\`.`,
    `// ═══════════════════════════════════════════════════════════════════`,
    ``,
    `#[cfg(test)]`,
    `#[allow(unused_imports, unused_variables, unused_mut, dead_code, non_snake_case)]`,
    `mod contract_tests {`,
    `    use super::*;`,
    ``,
  ];
  const footer = [`}`, ``];

  return {
    proptestsRs: [...header, ...lines, ...footer].join("\n"),
    testCount,
  };
}

interface DeclResult {
  readonly helpers: readonly string[];
  readonly tests: readonly (readonly string[])[];
}

function renderForDecl(
  d: Declaration,
  idx: TypeIndex,
  cycleSet: ReadonlySet<string>,
  cfg: RustTargetConfig,
): DeclResult {
  const props = Array.from(
    effectiveProperties(d.name, idx, cycleSet).values(),
  ).map((e) => e.prop);
  const propByName = new Map(props.map((p) => [p.name, p]));
  const typeName = toRustTypeName(d.name);
  const arbName = `_arb_${typeName.toLowerCase()}`;

  const helpers: string[] = [];
  helpers.push(`/// Zero-valued instance of ${d.name}; tests mutate fields after.`);
  helpers.push(`fn ${arbName}() -> ${typeName} {`);
  const ctorArgs: string[] = [];
  for (const prop of props) {
    if (prop.isInternal) continue;
    ctorArgs.push(`    ${zeroValueExpr(prop.propertyType, cfg)},`);
  }
  helpers.push(`    ${typeName}::new(`);
  for (const a of ctorArgs) helpers.push(`    ${a}`);
  helpers.push(`    )`);
  helpers.push(`}`);

  const tests: string[][] = [];

  if ("invariants" in d) {
    for (const inv of d.invariants) {
      if (!inv.parsed) continue;
      const generated = testsForInvariant(inv, typeName, propByName, arbName);
      for (const t of generated) tests.push([...t]);
    }
  }

  if ("events" in d) {
    for (const ev of d.events) {
      for (const clause of ev.pre) {
        if (!clause.parsed) continue;
        const generated = testsForPreClause(clause, ev, arbName);
        for (const t of generated) tests.push([...t]);
      }
      for (const clause of ev.post) {
        if (!clause.parsed) continue;
        const generated = testsForPostClause(clause, ev, arbName);
        for (const t of generated) tests.push([...t]);
      }
    }
  }

  return { helpers, tests };
}

// ─── Invariant test generators ──────────────────────────────────────

function testsForInvariant(
  inv: InvariantDecl,
  typeName: string,
  propByName: ReadonlyMap<string, PropertyDecl>,
  arbName: string,
): readonly (readonly string[])[] {
  const e = inv.parsed!;
  const out: string[][] = [];

  // Pattern: self.<arr>->forAll(v | v.isFinite())
  const faFin = matchArrForAllFinite(e);
  if (faFin !== null) {
    const prop = propByName.get(faFin.propName);
    if (prop && prop.propertyType.kind === "ArrayType") {
      const len = prop.propertyType.size;
      const field = toRustFieldName(faFin.propName);
      const slug = field.replace(/[^a-z0-9_]/g, "_");
      // Cap loop length so tests stay fast even on 16×16 matrices.
      const sampleLen = Math.min(len, 8);
      out.push([
        `/// Witness: invariant \`${esc(inv.rawExpression)}\` violated by NaN at any index.`,
        `#[test]`,
        `fn inv_${slug}_finite_violated_by_nan() {`,
        `    for idx in 0..${sampleLen}usize {`,
        `        let mut inst = ${arbName}();`,
        `        inst.${field}[idx] = f64::NAN;`,
        `        let v = inst.validate();`,
        `        assert!(`,
        `            v.iter().any(|m| m.contains("self.${faFin.propName}")),`,
        `            "no violation reported for NaN at index {}", idx`,
        `        );`,
        `    }`,
        `}`,
      ]);
      out.push([
        `/// Witness: invariant \`${esc(inv.rawExpression)}\` holds for finite values.`,
        `#[test]`,
        `fn inv_${slug}_finite_holds_for_normal() {`,
        `    let mut inst = ${arbName}();`,
        `    for (i, v) in [0.0, 1.0, -1.0, 1e-10, 1e10].iter().enumerate() {`,
        `        if i < ${len} { inst.${field}[i] = *v; }`,
        `    }`,
        `    let v = inst.validate();`,
        `    assert!(!v.iter().any(|m| m.contains("self.${faFin.propName}")));`,
        `}`,
      ]);
      return out;
    }
  }

  // Pattern: self.<arr>->forAll(v | v OP <lit>)
  const faCmp = matchArrForAllCompare(e);
  if (faCmp !== null) {
    const prop = propByName.get(faCmp.propName);
    if (prop && prop.propertyType.kind === "ArrayType") {
      const field = toRustFieldName(faCmp.propName);
      const slug = field.replace(/[^a-z0-9_]/g, "_");
      const bad = violatingValue(faCmp.op, faCmp.literal, /*isReal*/ true);
      out.push([
        `/// Witness: invariant \`${esc(inv.rawExpression)}\` violated by out-of-range element.`,
        `#[test]`,
        `fn inv_${slug}_bound_violated() {`,
        `    let mut inst = ${arbName}();`,
        `    inst.${field}[0] = ${bad.expr};`,
        `    let v = inst.validate();`,
        `    assert!(v.iter().any(|m| m.contains("self.${faCmp.propName}")));`,
        `}`,
      ]);
      return out;
    }
  }

  // Pattern: self.<prop>.isFinite()
  const finCall = matchSelfIsFinite(e);
  if (finCall !== null) {
    const prop = propByName.get(finCall);
    if (prop && prop.propertyType.kind === "PrimitiveType" && prop.propertyType.name === "Real") {
      const field = toRustFieldName(finCall);
      const slug = field.replace(/[^a-z0-9_]/g, "_");
      out.push([
        `/// Witness: invariant \`${esc(inv.rawExpression)}\` violated by NaN.`,
        `#[test]`,
        `fn inv_${slug}_finite_violated_by_nan() {`,
        `    let mut inst = ${arbName}();`,
        `    inst.${field} = f64::NAN;`,
        `    let v = inst.validate();`,
        `    assert!(v.iter().any(|m| m.contains("self.${finCall}")));`,
        `}`,
      ]);
      return out;
    }
  }

  // Pattern: self.<prop> OP <literal>
  const cmp = matchSelfNumericCompare(e);
  if (cmp !== null) {
    const prop = propByName.get(cmp.propName);
    if (prop && prop.propertyType.kind === "PrimitiveType") {
      const primName = prop.propertyType.name;
      const isReal = primName === "Real";
      const isInt = primName === "Integer";
      if (!isReal && !isInt) return out;
      const field = toRustFieldName(cmp.propName);
      const slug = field.replace(/[^a-z0-9_]/g, "_");
      const violating = violatingValue(cmp.op, cmp.literal, isReal);
      const litLabel = `${cmp.op}_${cmp.literal}`.replace(/[^a-zA-Z0-9_]/g, "_");
      out.push([
        `/// Witness: invariant \`${esc(inv.rawExpression)}\` violated by out-of-range value.`,
        `#[test]`,
        `fn inv_${slug}_${litLabel}_violated() {`,
        `    let mut inst = ${arbName}();`,
        `    inst.${field} = ${violating.expr};`,
        `    let v = inst.validate();`,
        `    assert!(v.iter().any(|m| m.contains("self.${cmp.propName}")));`,
        `}`,
      ]);
      return out;
    }
  }

  return out;
}

// ─── Pre-condition test generators ──────────────────────────────────

function testsForPreClause(
  clause: OclClause,
  ev: EventDecl,
  arbName: string,
): readonly (readonly string[])[] {
  const e = clause.parsed!;
  const paramByName = new Map(ev.parameters.map((p) => [p.name, p] as const));
  const out: string[][] = [];

  // Pattern: <param>.isFinite()
  const finCall = matchVarIsFinite(e);
  if (finCall !== null && paramByName.has(finCall)) {
    const param = paramByName.get(finCall)!;
    if (param.parameterType.kind === "PrimitiveType" && param.parameterType.name === "Real") {
      const slug = `${ev.name}_${finCall}`.replace(/[^a-z0-9_]/gi, "_").toLowerCase();
      const eventMethod = `${toRustFieldName(ev.name)}_wrapped`;
      const implStub = stubImplFor(ev);
      out.push([
        `/// Pre \`${esc(clause.rawExpression)}\` rejects NaN.`,
        `#[test]`,
        `fn pre_${slug}_rejects_nan() {`,
        `    let mut inst = ${arbName}();`,
        `    let r = inst.${eventMethod}(${callArgsWith(ev, finCall, "f64::NAN")}, ${implStub});`,
        `    assert!(r.is_err(), "expected Err for NaN ${finCall}");`,
        `}`,
      ]);
      return out;
    }
  }

  // Pattern: <param> OP <literal>
  const cmp = matchVarNumericCompare(e);
  if (cmp !== null && paramByName.has(cmp.varName)) {
    const param = paramByName.get(cmp.varName)!;
    if (param.parameterType.kind === "PrimitiveType") {
      const primName = param.parameterType.name;
      const isReal = primName === "Real";
      const isInt = primName === "Integer";
      if (!isReal && !isInt) return out;
      const violating = violatingValue(cmp.op, cmp.literal, isReal);
      const eventMethod = `${toRustFieldName(ev.name)}_wrapped`;
      const slug = `${ev.name}_${cmp.varName}_${cmp.op}_${cmp.literal}`
        .replace(/[^a-zA-Z0-9_]/g, "_")
        .toLowerCase();
      const implStub = stubImplFor(ev);
      out.push([
        `/// Pre \`${esc(clause.rawExpression)}\` rejects out-of-range input.`,
        `#[test]`,
        `fn pre_${slug}_rejects_outofrange() {`,
        `    let mut inst = ${arbName}();`,
        `    let r = inst.${eventMethod}(${callArgsWith(ev, cmp.varName, violating.expr)}, ${implStub});`,
        `    assert!(r.is_err(), "expected Err for out-of-range ${cmp.varName}");`,
        `}`,
      ]);
    }
  }

  return out;
}

// ─── Post-condition test generators ─────────────────────────────────

function testsForPostClause(
  clause: OclClause,
  ev: EventDecl,
  arbName: string,
): readonly (readonly string[])[] {
  const e = clause.parsed!;
  const out: string[][] = [];

  // Only handle return-typed events here — that's where post-conditions
  // typically constrain `result`.
  if (ev.returnType === null) return out;

  // Pattern: `result OP <literal>` — impl returns a value that violates
  // the bound; wrapper should Err.
  const cmp = matchVarNumericCompare(e);
  if (cmp === null || cmp.varName !== "result") return out;
  if (ev.returnType.kind !== "PrimitiveType") return out;
  const primName = ev.returnType.name;
  const isReal = primName === "Real";
  const isInt = primName === "Integer";
  if (!isReal && !isInt) return out;

  const eventMethod = `${toRustFieldName(ev.name)}_wrapped`;
  const slug = `${ev.name}_result_${cmp.op}_${cmp.literal}`
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .toLowerCase();
  const violating = violatingValue(cmp.op, cmp.literal, isReal);
  // Build impl_fn that ignores its args and returns the bad value.
  const params = ["_self", ...ev.parameters.map((_) => "_")].join(", ");
  const badImpl = `|${params}| ${violating.expr}`;
  // Build the "happy" args for the call — zero values for each param.
  const happyArgs = ev.parameters
    .map((p) => zeroValueForParam(p.parameterType))
    .join(", ");

  out.push([
    `/// Post \`${esc(clause.rawExpression)}\` rejects out-of-range \`result\`.`,
    `#[test]`,
    `fn post_${slug}_rejects_outofrange() {`,
    `    let mut inst = ${arbName}();`,
    `    let r = inst.${eventMethod}(${happyArgs}${happyArgs ? ", " : ""}${badImpl});`,
    `    assert!(r.is_err(), "expected Err for out-of-range result");`,
    `}`,
  ]);
  return out;
}

// ─── Pattern matchers ───────────────────────────────────────────────

function matchArrForAllFinite(e: OclExpr): { propName: string } | null {
  if (e.kind !== "OclForAll") return null;
  if (
    e.source.kind !== "OclNav" ||
    e.source.object.kind !== "OclVarRef" ||
    e.source.object.name !== "self"
  ) {
    return null;
  }
  if (e.body.kind !== "OclCall" || e.body.method !== "isFinite") return null;
  if (e.body.object.kind !== "OclVarRef" || e.body.object.name !== e.variable) {
    return null;
  }
  return { propName: e.source.property };
}

function matchArrForAllCompare(
  e: OclExpr,
): { propName: string; op: string; literal: number } | null {
  if (e.kind !== "OclForAll") return null;
  if (
    e.source.kind !== "OclNav" ||
    e.source.object.kind !== "OclVarRef" ||
    e.source.object.name !== "self"
  ) {
    return null;
  }
  // body: <var> OP <lit> (or flipped)
  const body = e.body;
  if (body.kind !== "OclBinary") return null;
  if (!NUMERIC_CMP_OPS.has(body.op)) return null;
  const numLit = (x: OclExpr): number | null =>
    x.kind === "OclLiteral" && (x.litKind === "Integer" || x.litKind === "Real")
      ? (x.value as number) : null;
  if (body.left.kind === "OclVarRef" && body.left.name === e.variable) {
    const r = numLit(body.right);
    if (r !== null) return { propName: e.source.property, op: body.op, literal: r };
  }
  if (body.right.kind === "OclVarRef" && body.right.name === e.variable) {
    const l = numLit(body.left);
    if (l !== null) return { propName: e.source.property, op: flipOp(body.op), literal: l };
  }
  return null;
}

function matchSelfIsFinite(e: OclExpr): string | null {
  if (e.kind !== "OclCall" || e.method !== "isFinite") return null;
  if (
    e.object.kind !== "OclNav" ||
    e.object.object.kind !== "OclVarRef" ||
    e.object.object.name !== "self"
  ) {
    return null;
  }
  return e.object.property;
}

function matchVarIsFinite(e: OclExpr): string | null {
  if (e.kind !== "OclCall" || e.method !== "isFinite") return null;
  if (e.object.kind !== "OclVarRef") return null;
  return e.object.name;
}

const NUMERIC_CMP_OPS = new Set([">", ">=", "<", "<=", "="]);

function matchSelfNumericCompare(
  e: OclExpr,
): { propName: string; op: string; literal: number } | null {
  if (e.kind !== "OclBinary") return null;
  if (!NUMERIC_CMP_OPS.has(e.op)) return null;
  const selfProp = (x: OclExpr): string | null => {
    if (x.kind === "OclNav" && !x.isPre &&
        x.object.kind === "OclVarRef" && x.object.name === "self") {
      return x.property;
    }
    return null;
  };
  const numLit = (x: OclExpr): number | null => {
    if (x.kind === "OclLiteral" && (x.litKind === "Integer" || x.litKind === "Real")) {
      return x.value as number;
    }
    return null;
  };
  const lp = selfProp(e.left);
  const rl = numLit(e.right);
  if (lp !== null && rl !== null) return { propName: lp, op: e.op, literal: rl };
  const rp = selfProp(e.right);
  const ll = numLit(e.left);
  if (rp !== null && ll !== null) {
    return { propName: rp, op: flipOp(e.op), literal: ll };
  }
  return null;
}

function matchVarNumericCompare(
  e: OclExpr,
): { varName: string; op: string; literal: number } | null {
  if (e.kind !== "OclBinary") return null;
  if (!NUMERIC_CMP_OPS.has(e.op)) return null;
  const numLit = (x: OclExpr): number | null => {
    if (x.kind === "OclLiteral" && (x.litKind === "Integer" || x.litKind === "Real")) {
      return x.value as number;
    }
    return null;
  };
  if (e.left.kind === "OclVarRef" && numLit(e.right) !== null) {
    return { varName: e.left.name, op: e.op, literal: numLit(e.right)! };
  }
  if (e.right.kind === "OclVarRef" && numLit(e.left) !== null) {
    return { varName: e.right.name, op: flipOp(e.op), literal: numLit(e.left)! };
  }
  return null;
}

function flipOp(op: string): string {
  switch (op) {
    case ">": return "<";
    case ">=": return "<=";
    case "<": return ">";
    case "<=": return ">=";
    default: return op;
  }
}

// ─── Value generators ───────────────────────────────────────────────

function violatingValue(
  op: string,
  bound: number,
  isReal: boolean,
): { expr: string } {
  const epsilon = isReal ? "1e-3" : "1";
  const fmt = (n: number) => (isReal ? formatRealLiteral(n) : String(Math.trunc(n)));
  switch (op) {
    case ">":  return { expr: fmt(bound) };
    case ">=": return { expr: `${fmt(bound)} - ${epsilon}` };
    case "<":  return { expr: fmt(bound) };
    case "<=": return { expr: `${fmt(bound)} + ${epsilon}` };
    case "=":  return { expr: `${fmt(bound)} + ${epsilon}` };
    default:   return { expr: fmt(bound) };
  }
}

function formatRealLiteral(n: number): string {
  const s = String(n);
  return s.includes(".") ? s : `${s}.0`;
}

function zeroValueExpr(t: TypeRef, cfg: RustTargetConfig): string {
  if (t.kind === "PrimitiveType") {
    switch (t.name) {
      case "Real": return cfg.float === "f32" ? "0.0_f32" : "0.0_f64";
      case "Integer": return "0_i64";
      case "Boolean": return "false";
      case "String":
        return cfg.target === "alloc"
          ? `alloc::string::String::from("test")`
          : `{ let mut __s = heapless::String::new(); let _ = __s.push_str("test"); __s }`;
    }
  }
  if (t.kind === "ArrayType") {
    return `[${zeroValueExpr(t.elementType, cfg)}; ${t.size}]`;
  }
  if (t.kind === "OptionType") return "None";
  if (t.kind === "SetType") {
    if (t.elementType.kind === "NamedType") {
      return cfg.target === "alloc"
        ? `alloc::vec::Vec::new()`
        : `heapless::Vec::new()`;
    }
    return cfg.target === "alloc"
      ? `alloc::collections::BTreeSet::new()`
      : `heapless::FnvIndexSet::new()`;
  }
  return `Default::default()`;
}

function callArgsWith(
  ev: EventDecl,
  paramName: string,
  badValue: string,
): string {
  return ev.parameters
    .map((p) =>
      p.name === paramName ? badValue : zeroValueForParam(p.parameterType),
    )
    .join(", ");
}

function zeroValueForParam(t: TypeRef): string {
  if (t.kind === "PrimitiveType") {
    switch (t.name) {
      case "Real": return "0.0";
      case "Integer": return "0";
      case "Boolean": return "false";
      case "String": return `"test".into()`;
    }
  }
  if (t.kind === "ArrayType") {
    return `[${zeroValueForParam(t.elementType)}; ${t.size}]`;
  }
  if (t.kind === "OptionType") return "None";
  return "Default::default()";
}

function stubImplFor(ev: EventDecl): string {
  const params = ev.parameters.map((_) => "_");
  const paramSig = ["_self", ...params].join(", ");
  if (ev.returnType === null) {
    return `|${paramSig}| ()`;
  }
  return `|${paramSig}| ${zeroValueForParam(ev.returnType)}`;
}

function esc(s: string): string {
  // Doc-comment safety: collapse newlines + escape quotes.
  return s.replace(/\s+/g, " ").replace(/"/g, '\\"').trim();
}
