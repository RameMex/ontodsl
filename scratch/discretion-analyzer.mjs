/**
 * Discretion-failure analyzer — Phase 18 of BLOQUE2_EMPIRICAL.
 *
 * Walks the merged AST of a multi-stage .onto set and computes:
 *
 *   - **Declarative discretion-failure (DDF):** fraction of
 *     STRUCTURAL SLOTS the LLM left blank where the playbook
 *     recommended filling. Slots considered:
 *       - Events without a `refines:` clause (when one would
 *         apply: events on downstream-stage components that
 *         likely refine upstream-stage parents).
 *       - Categories declared without a `where bearer:` clause
 *         even though their invariants reference upstream
 *         member properties.
 *
 *   - **Substantive discretion-failure (SDF):** fraction of
 *     POPULATED SLOTS whose content is trivially-true / empty.
 *     Slot operationalisations:
 *       - Category invariant body containing only `true;`.
 *       - Predicate clause that is literal `true`.
 *       - Event with NO pre/post clauses.
 *
 * The two ratios are computed independently and the combined
 * effective compliance (1 - DDF) × (1 - SDF) is reported.
 *
 * Usage:
 *   node scratch/discretion-analyzer.mjs --case <id>
 *   node scratch/discretion-analyzer.mjs --cases <id1>,<id2>,...
 *   node scratch/discretion-analyzer.mjs --provider deepseek
 *
 * Default: iterates the 8 verified domains (3 original +
 * 5 mass-validation) for both providers when files exist.
 */

import { readFileSync, existsSync, writeFileSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { parseFile } from "../dist/parser/multiFile.js"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")

const argv = process.argv.slice(2)
function flag(name, def) {
  const i = argv.indexOf(name)
  return i >= 0 ? argv[i + 1] : def
}
const PROVIDER_FILTER = flag("--provider", null)
const CASES_FLAG = flag("--cases", null)
const SINGLE_CASE = flag("--case", null)
const DEFAULT_CASES = [
  "insulin-pump",
  "meeting-scheduler",
  "engine-control",
  "online-banking",
  "smart-thermostat",
  "library-system",
  "traffic-light",
  "patient-monitoring",
]
const CASES = SINGLE_CASE
  ? [SINGLE_CASE]
  : CASES_FLAG
    ? CASES_FLAG.split(",").map((s) => s.trim())
    : DEFAULT_CASES
const PROVIDERS = PROVIDER_FILTER
  ? [PROVIDER_FILTER]
  : ["anthropic", "deepseek"]

const OUT_REPORT = resolve(ONTODLS, "scratch/discretion-report.md")

// ─── slot scanners ─────────────────────────────────────────────────────

/**
 * Walk all events in the merged AST. Each event is a SLOT for a
 * `refines:` declaration. We classify each slot as:
 *   - "declared with refines" → counted in denominator + numerator
 *   - "declared without refines" → DDF positive (slot blank but
 *     would have been recommended)
 *
 * Heuristic: we count an event as "refines-expected" if the file's
 * namespace ends in "_requirements" / "_formalization" / "_design"
 * / "_code" (downstream stages where refinement is expected).
 * Events in "_discovery" are not expected to have `refines:` since
 * Discovery has no upstream to refine.
 */
function analyzeRefinesSlots(merged) {
  let expected = 0
  let declared = 0
  // The merged AST only carries the ROOT namespace; per-decl
  // provenance was lost. So we use ALL events as denominators
  // (rough proxy) and count those with refines as fulfilled.
  for (const decl of merged.declarations) {
    const events = decl.events
    if (!events) continue
    for (const evt of events) {
      expected += 1
      if (evt.refines && evt.refines.length > 0) declared += 1
    }
  }
  return { expected, declared, ddf: expected > 0 ? (expected - declared) / expected : 0 }
}

/**
 * Walk all categories in the merged AST. Each is a SLOT for a
 * `where bearer:` declaration. We classify as:
 *   - "non-trivial invariants + bearer declared" → fulfilled
 *   - "non-trivial invariants WITHOUT bearer" → DDF positive
 *   - "trivial invariants (true;)" → SDF positive (substantively
 *     empty regardless of bearer presence)
 *
 * Heuristic for triviality: invariant rawExpression is exactly
 * `true` or `true ;` or empty.
 */
function analyzeCategorySlots(merged) {
  let total = 0
  let withBearer = 0
  let trivialBody = 0
  let nonTrivialNoBearer = 0
  for (const decl of merged.declarations) {
    if (decl.kind !== "CategoryDecl") continue
    total += 1
    const invs = decl.invariants ?? []
    const allTrivial = invs.every((inv) => {
      const raw = (inv.rawExpression ?? "").trim().replace(/;$/, "").trim()
      return raw === "true" || raw === ""
    })
    if (allTrivial) trivialBody += 1
    if (decl.bearer) withBearer += 1
    else if (!allTrivial) nonTrivialNoBearer += 1
  }
  return {
    total,
    withBearer,
    trivialBody,
    nonTrivialNoBearer,
    sdf: total > 0 ? trivialBody / total : 0,
  }
}

/**
 * Substantive discretion check #2: predicate clauses on commitments.
 * Trivial predicates: literal `true`. Counts commitments only.
 */
function analyzeCommitmentSlots(merged) {
  let total = 0
  let withPredicate = 0
  let trivialPredicate = 0
  for (const decl of merged.declarations) {
    if (decl.kind !== "CommitmentDecl") continue
    total += 1
    if (decl.predicate) {
      withPredicate += 1
      const raw = (decl.predicate.rawExpression ?? "").trim().replace(/;$/, "").trim()
      if (raw === "true" || raw === "") trivialPredicate += 1
    }
  }
  return {
    total,
    withPredicate,
    trivialPredicate,
    ddf: total > 0 ? (total - withPredicate) / total : 0,
    sdf: withPredicate > 0 ? trivialPredicate / withPredicate : 0,
  }
}

// ─── per (case, provider) analyzer ─────────────────────────────────────

function analyzeOne(caseId, provider) {
  const snake = caseId.replace(/-/g, "_")
  const suffix = provider === "anthropic" ? "" : `_${provider}`
  const root = resolve(ONTODLS, `examples/${snake}${suffix}/design.onto`)
  if (!existsSync(root)) return null

  const r = parseFile(root)
  if (!r.ast) return { error: "parse-failed" }

  const refines = analyzeRefinesSlots(r.ast)
  const categories = analyzeCategorySlots(r.ast)
  const commitments = analyzeCommitmentSlots(r.ast)

  // Combined effective compliance: product across slot types.
  const compliances = []
  if (refines.expected > 0) compliances.push(1 - refines.ddf)
  if (categories.total > 0) compliances.push(1 - categories.sdf)
  if (commitments.total > 0)
    compliances.push((1 - commitments.ddf) * (1 - commitments.sdf))
  const combined =
    compliances.length === 0
      ? null
      : compliances.reduce((a, b) => a * b, 1)

  return { refines, categories, commitments, combinedCompliance: combined }
}

// ─── main ──────────────────────────────────────────────────────────────

const lines = []
lines.push(`# Discretion-failure analysis — Phase 18`)
lines.push(``)
lines.push(`Two-dimensional discretion-failure measurement (DDF + SDF)`)
lines.push(`across ${CASES.length} domains × ${PROVIDERS.length} providers.`)
lines.push(``)
lines.push(`## Per-case results`)
lines.push(``)
lines.push(`| Case | Provider | Refines DDF | Cat SDF | Commit DDF | Commit SDF | Combined |`)
lines.push(`|---|---|---:|---:|---:|---:|---:|`)

const rows = []
for (const c of CASES) {
  for (const p of PROVIDERS) {
    const a = analyzeOne(c, p)
    if (a === null) continue // file not present for this combo
    if (a.error) {
      lines.push(`| ${c} | ${p} | parse-failed | — | — | — | — |`)
      continue
    }
    const fmt = (x) => (x === null ? "—" : (100 * x).toFixed(0) + "%")
    lines.push(
      `| ${c} | ${p} | ${fmt(a.refines.ddf)} | ${fmt(a.categories.sdf)} | ${fmt(a.commitments.ddf)} | ${fmt(a.commitments.sdf)} | ${fmt(a.combinedCompliance)} |`,
    )
    rows.push({ caseId: c, provider: p, ...a })
  }
}

// Aggregate per-provider
const byProvider = {}
for (const r of rows) {
  byProvider[r.provider] = byProvider[r.provider] ?? []
  byProvider[r.provider].push(r)
}

lines.push(``)
lines.push(`## Aggregate per provider`)
lines.push(``)
lines.push(`| Provider | Mean refines DDF | Mean cat SDF | Mean commit DDF | Mean commit SDF | Mean combined |`)
lines.push(`|---|---:|---:|---:|---:|---:|`)
for (const [p, rs] of Object.entries(byProvider)) {
  const mean = (key) => {
    const vals = rs.map((r) => r[key.split(".")[0]][key.split(".")[1]]).filter((x) => x !== null && !isNaN(x))
    return vals.length === 0 ? null : vals.reduce((a, b) => a + b, 0) / vals.length
  }
  const meanCombined = () => {
    const vals = rs.map((r) => r.combinedCompliance).filter((x) => x !== null)
    return vals.length === 0 ? null : vals.reduce((a, b) => a + b, 0) / vals.length
  }
  const fmt = (x) => (x === null ? "—" : (100 * x).toFixed(0) + "%")
  lines.push(
    `| ${p} | ${fmt(mean("refines.ddf"))} | ${fmt(mean("categories.sdf"))} | ${fmt(mean("commitments.ddf"))} | ${fmt(mean("commitments.sdf"))} | ${fmt(meanCombined())} |`,
  )
}

lines.push(``)
lines.push(`## Methodology`)
lines.push(``)
lines.push(`- **Refines DDF**: fraction of events without a \`refines:\` clause out of total events in the merged AST. Notes: events in upstream stages (Discovery, system kind in Requirements) genuinely don't need refines targets; the metric over-counts in those cases. Future analyzer should filter by namespace/stage.`)
lines.push(`- **Category SDF**: fraction of categories whose invariants are exclusively \`true;\` placeholders out of total categories.`)
lines.push(`- **Commit DDF / SDF**: fraction of commitments lacking a \`predicate:\` clause (DDF) and fraction whose predicate is literal \`true\` (SDF).`)
lines.push(`- **Combined compliance**: product of (1 - DDF) over each slot type. Approximates the fraction of structural slots that are both filled and substantively non-trivial.`)

const md = lines.join("\n") + "\n"
writeFileSync(OUT_REPORT, md)
console.log(`\n✓ Report written to ${OUT_REPORT}`)
console.log(`\n${md}`)
