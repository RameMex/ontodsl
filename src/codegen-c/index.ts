/**
 * Phase Q4 / Paso 2 — C + ACSL codegen backend.
 *
 * Demonstrates portability of the ontology-grounded contract layer:
 * the same `.onto` file produces both Rust (via codegen-rust/) and
 * C with ACSL annotations (via this module). When both targets pass
 * their respective verifier (`cargo check` / `frama-c -wp`), the
 * tesis "the contract is portable across languages preserving
 * semantics" stops being aspirational.
 *
 * Why ACSL (and not just C): Frama-C's `wp` plugin is the C
 * verifier industrially deployed at Airbus since 2002. If a .onto
 * lowers to C that Frama-C verifies, we've crossed a regulated-
 * industry credibility threshold no toy DbC tool can match.
 *
 * Output: `{ headerH, sourceC }` — caller writes them as
 * `<basename>.h` and `<basename>.c`.
 *
 * v1 SCOPE (single-session MVP):
 *   ✓ Primitive types (Real → double, Integer → int64_t, Boolean → bool, String → const char*)
 *   ✓ Array<T, N> and nested arrays (matrices)
 *   ✓ Branded identity wrapper structs
 *   ✓ struct emission for body-bearing decls
 *   ✓ Validators with ACSL `predicate` + `ensures \result == 0 <==> inv(...)`
 *   ✓ Sync event wrappers with ACSL `requires` (pre) / `ensures` (post + inv)
 *   ✓ OCL → ACSL translator for the operators the Rust target supports
 *   ✗ Set<T>  — pending v2 (would need length-bounded ghost field)
 *   ✗ Option<T> — pending v2 (would need a tag-bit struct)
 *   ✗ Commitment registries — pending v2
 *   ✗ Async wrappers — N/A for C
 *
 * When the .onto uses unsupported features (Set, Option), the
 * affected declarations are still emitted but their problematic
 * fields and clauses are marked with `// TODO C+ACSL v1 limit: ...`
 * comments so the user knows what was skipped.
 */

import type { Declaration, OntoFile, TypeRef } from "../ast/nodes.js";
import {
  effectiveProperties,
  detectCycles,
  type TypeIndex,
} from "../semantic/inheritance.js";
import { renderCTypes, renderCStructs } from "./types.js";
import { renderCValidators } from "./validators.js";
import { renderCEventWrappers } from "./eventWrappers.js";

export interface RenderCOptions {
  /** Base name used in include guards + filename prefix. */
  readonly module?: string;
}

export interface RenderCOutput {
  readonly headerH: string;
  readonly sourceC: string;
}

const BODY_BEARING: ReadonlySet<Declaration["kind"]> = new Set([
  "KindDecl", "SubkindDecl", "RoleDecl", "RelatorDecl", "CategoryDecl",
  "MixinDecl", "RoleMixinDecl", "ModeDecl", "QualityDecl", "CollectiveDecl",
  "QuantityDecl", "HappeningDecl", "AgentDecl", "CommitmentDecl", "UseCaseDecl",
]);

export function renderC(file: OntoFile, opts: RenderCOptions = {}): RenderCOutput {
  const module = opts.module ?? "ontodls_generated";
  const guard = module.toUpperCase().replace(/[^A-Z0-9]/g, "_") + "_H";

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

  // ─── Header ─────────────────────────────────────────────────────
  const headerParts: string[] = [];
  headerParts.push(`/* ════════════════════════════════════════════════════════════════ */`);
  headerParts.push(`/* AUTO-GENERATED from Onto DSL. Do not edit.                       */`);
  headerParts.push(`/* Target: C99 + ACSL (verify with frama-c -wp).                    */`);
  headerParts.push(`/* ════════════════════════════════════════════════════════════════ */`);
  headerParts.push("");
  headerParts.push(`#ifndef ${guard}`);
  headerParts.push(`#define ${guard}`);
  headerParts.push("");
  headerParts.push(`#include <stdbool.h>`);
  headerParts.push(`#include <stdint.h>`);
  headerParts.push(`#include <stddef.h>`);
  headerParts.push("");
  headerParts.push(`/* Result type used by every validator + wrapper:                  */`);
  headerParts.push(`/* 0 = ok; non-zero = first contract violation message in *out_msg */`);
  headerParts.push("");

  headerParts.push(...renderCTypes(file));
  headerParts.push("");

  for (const d of file.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    headerParts.push(...renderCStructs(d, idx, cycleSet));
    headerParts.push("");
  }

  // Function declarations: validator + each event wrapper.
  headerParts.push(`/* ─── Validators (declarations) ─── */`);
  headerParts.push("");
  for (const d of file.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    if (!("invariants" in d) || d.invariants.length === 0) continue;
    const validatorDecls = renderCValidators(d, idx, cycleSet, /*headerOnly*/ true);
    headerParts.push(...validatorDecls);
    headerParts.push("");
  }

  headerParts.push(`/* ─── Event wrappers (declarations) ─── */`);
  headerParts.push("");
  for (const d of file.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    if (!("events" in d) || d.events.length === 0) continue;
    const evDecls = renderCEventWrappers(d, idx, cycleSet, /*headerOnly*/ true);
    headerParts.push(...evDecls);
    headerParts.push("");
  }

  headerParts.push(`#endif /* ${guard} */`);
  headerParts.push("");

  // ─── Source ─────────────────────────────────────────────────────
  const sourceParts: string[] = [];
  sourceParts.push(`/* ════════════════════════════════════════════════════════════════ */`);
  sourceParts.push(`/* AUTO-GENERATED from Onto DSL. Do not edit.                       */`);
  sourceParts.push(`/* ════════════════════════════════════════════════════════════════ */`);
  sourceParts.push("");
  sourceParts.push(`#include "${module}.h"`);
  sourceParts.push(`#include <string.h>  /* for memcpy in rollback */`);
  sourceParts.push(`#include <math.h>    /* for isfinite / isnan */`);
  sourceParts.push("");

  for (const d of file.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    if (!("invariants" in d) || d.invariants.length === 0) continue;
    sourceParts.push(...renderCValidators(d, idx, cycleSet, /*headerOnly*/ false));
    sourceParts.push("");
  }

  for (const d of file.declarations) {
    if (!BODY_BEARING.has(d.kind)) continue;
    if (!("events" in d) || d.events.length === 0) continue;
    sourceParts.push(...renderCEventWrappers(d, idx, cycleSet, /*headerOnly*/ false));
    sourceParts.push("");
  }

  return {
    headerH: headerParts.join("\n"),
    sourceC: sourceParts.join("\n"),
  };
}

export { renderCTypes, renderCStructs } from "./types.js";
export { renderCValidators } from "./validators.js";
export { renderCEventWrappers } from "./eventWrappers.js";
