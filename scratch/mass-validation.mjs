/**
 * Mass-validation runner — Phase 12 of BLOQUE2_EMPIRICAL.
 *
 * Spawns `sdlc-playbook-test.mjs` for each case in CASES_TO_RUN with
 * the chosen provider, captures convergence telemetry, and then runs
 * Bloque 2 (`gen.js --verify --resolve-imports`) over each generated
 * design.onto to collect cross-domain findings.
 *
 * The output is a single Markdown table summarising:
 *   - per-case attempts to convergence (per stage)
 *   - per-case Bloque 2 findings (W34, S34, W38, W39, S35, etc.)
 *   - cross-domain aggregate hardness statistics
 *
 * Intentional design: runs sequentially (not in parallel). API costs
 * are bearable with DeepSeek; debugability is far higher with
 * sequential execution.
 */

import { spawnSync } from "node:child_process"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { existsSync, writeFileSync } from "node:fs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")

const argv = process.argv.slice(2)
function flag(name, def) {
  const i = argv.indexOf(name)
  return i >= 0 ? argv[i + 1] : def
}
const PROVIDER = flag("--provider", "deepseek")
const CASES_FLAG = flag("--cases", null)
const CASES_TO_RUN = CASES_FLAG
  ? CASES_FLAG.split(",")
  : [
      "online-banking",
      "smart-thermostat",
      "library-system",
      "traffic-light",
      "patient-monitoring",
    ]

const OUT_REPORT = resolve(ONTODLS, "scratch/mass-validation-report.md")

// ─── per-case runner ────────────────────────────────────────────────────

function runOne(caseId) {
  console.log(`\n──────── ${caseId} ────────`)
  const t0 = Date.now()
  const r = spawnSync(
    process.execPath,
    [
      resolve(ONTODLS, "scratch/sdlc-playbook-test.mjs"),
      "--case", caseId,
      "--provider", PROVIDER,
    ],
    {
      cwd: ONTODLS,
      encoding: "utf8",
      timeout: 1800000, // 30 min upper bound per case
      stdio: ["ignore", "pipe", "pipe"],
    },
  )
  const out = (r.stdout ?? "") + "\n" + (r.stderr ?? "")
  const dt = Math.round((Date.now() - t0) / 1000)
  // Parse attempts-per-stage from the stdout.
  // Pattern: " STAGE: <name>" followed by " attempt N/M..." lines.
  const lines = out.split(/\r?\n/)
  const attempts = {}
  let currentStage = null
  let stageAttempts = 0
  let converged = {}
  let aborted = false
  for (const ln of lines) {
    const stageMatch = /────── STAGE:\s*(\w+)/.exec(ln)
    if (stageMatch) {
      if (currentStage) attempts[currentStage] = stageAttempts
      currentStage = stageMatch[1]
      stageAttempts = 0
      continue
    }
    if (currentStage && /^\s*attempt\s+(\d+)\//.test(ln)) {
      const m = /attempt\s+(\d+)\//.exec(ln)
      stageAttempts = Number(m[1])
    }
    if (currentStage && /✓ verified \(/.test(ln)) {
      converged[currentStage] = true
    }
    if (currentStage && /⤿ skipping/.test(ln)) {
      // Pre-verified from previous run — count as 0 new attempts.
      converged[currentStage] = true
      if (stageAttempts === 0) stageAttempts = 0
    }
    if (/✗ ABORTED/.test(ln)) aborted = true
  }
  if (currentStage) attempts[currentStage] = stageAttempts

  return {
    caseId,
    elapsedSec: dt,
    attempts,
    converged,
    aborted,
    exitCode: r.status ?? -1,
  }
}

// ─── Bloque 2 over the generated design ─────────────────────────────────

function runBloque2(caseId) {
  const snake = caseId.replace(/-/g, "_")
  const suffix = PROVIDER === "anthropic" ? "" : `_${PROVIDER}`
  const designPath = resolve(ONTODLS, `examples/${snake}${suffix}/design.onto`)
  if (!existsSync(designPath)) {
    return { ranOver: "(no design.onto)", findings: {} }
  }
  const r = spawnSync(
    process.execPath,
    [
      resolve(ONTODLS, "dist/cli/gen.js"),
      designPath,
      "--out", resolve(ONTODLS, "scratch/playbook_out", `${snake}${suffix}/_b2`),
      "--verify",
      "--resolve-imports",
    ],
    { cwd: ONTODLS, encoding: "utf8", timeout: 300000 },
  )
  const out = (r.stdout ?? "") + "\n" + (r.stderr ?? "")
  // Tally findings by code.
  const findings = {}
  for (const ln of out.split(/\r?\n/)) {
    const m = /\[([SW]\d+(?:_partial)?)\]/.exec(ln)
    if (m) {
      findings[m[1]] = (findings[m[1]] ?? 0) + 1
    }
  }
  // Discharge proof tally
  const provenMatch = /✓ (\d+)\/(\d+) discharge proofs verified/.exec(out)
  const dischargeProven = provenMatch ? Number(provenMatch[1]) : 0
  const dischargeTotal = provenMatch ? Number(provenMatch[2]) : 0
  // Liskov edges
  const liskovMatch = /Liskov coverage \((\d+) parent-event/.exec(out)
  const liskovEdges = liskovMatch ? Number(liskovMatch[1]) : 0
  // Commitment coverage
  const commitmentsCovered = (out.match(/^  ✓ \w+Commitment ←/gm) ?? []).length
  const commitmentsOrphan = (out.match(/^\s*✗ \w+Commitment ←/gm) ?? []).length
  return {
    ranOver: designPath,
    findings,
    dischargeProven,
    dischargeTotal,
    liskovEdges,
    commitmentsCovered,
    commitmentsOrphan,
  }
}

// ─── main ──────────────────────────────────────────────────────────────

const results = []
for (const id of CASES_TO_RUN) {
  const gen = runOne(id)
  const b2 = gen.aborted
    ? { findings: {}, dischargeProven: 0, dischargeTotal: 0, liskovEdges: 0, commitmentsCovered: 0, commitmentsOrphan: 0 }
    : runBloque2(id)
  results.push({ ...gen, b2 })
}

// ─── markdown report ──────────────────────────────────────────────────

const lines = []
lines.push(`# Mass-validation report (Phase 12)`)
lines.push(``)
lines.push(`**Provider:** ${PROVIDER}    **Cases:** ${CASES_TO_RUN.join(", ")}`)
lines.push(``)
lines.push(`## Convergence per case`)
lines.push(``)
lines.push(`| Case | Disc | Reqs | Form | Design | Total | Converged? | Wall (s) |`)
lines.push(`|---|---:|---:|---:|---:|---:|---|---:|`)
for (const r of results) {
  const a = r.attempts
  const total = Object.values(a).reduce((s, n) => s + n, 0)
  const conv = !r.aborted && ["discovery", "requirements", "formalization", "design"].every((s) => r.converged[s])
  lines.push(`| ${r.caseId} | ${a.discovery ?? "—"} | ${a.requirements ?? "—"} | ${a.formalization ?? "—"} | ${a.design ?? "—"} | ${total} | ${conv ? "✓ 4/4" : (r.aborted ? "✗ aborted" : "partial")} | ${r.elapsedSec} |`)
}

lines.push(``)
lines.push(`## Bloque 2 findings per case`)
lines.push(``)
lines.push(`| Case | Commitments cov. | Liskov edges | Discharge | W38 | W39 | S34 | S35 | W##_partial |`)
lines.push(`|---|---|---:|---|---:|---:|---:|---:|---:|`)
for (const r of results) {
  if (r.aborted) {
    lines.push(`| ${r.caseId} | (aborted) | — | — | — | — | — | — | — |`)
    continue
  }
  const f = r.b2.findings
  const partials = Object.entries(f).filter(([k]) => k.endsWith("_partial")).reduce((s, [, v]) => s + v, 0)
  lines.push(`| ${r.caseId} | ${r.b2.commitmentsCovered}✓/${r.b2.commitmentsOrphan}✗ | ${r.b2.liskovEdges} | ${r.b2.dischargeProven}/${r.b2.dischargeTotal} | ${f.W38 ?? 0} | ${f.W39 ?? 0} | ${f.S34 ?? 0} | ${f.S35 ?? 0} | ${partials} |`)
}

lines.push(``)
lines.push(`## Aggregate`)
lines.push(``)
const aggConverged = results.filter((r) => !r.aborted && ["discovery", "requirements", "formalization", "design"].every((s) => r.converged[s])).length
const aggAborted = results.filter((r) => r.aborted).length
const aggTotalAttempts = results.reduce((s, r) => s + Object.values(r.attempts).reduce((a, n) => a + n, 0), 0)
lines.push(`- **Converged 4/4 stages:** ${aggConverged} / ${results.length}`)
lines.push(`- **Aborted (any stage failed):** ${aggAborted} / ${results.length}`)
lines.push(`- **Total attempts across all stages, all cases:** ${aggTotalAttempts}`)
lines.push(`- **Mean attempts per case:** ${(aggTotalAttempts / results.length).toFixed(1)}`)

const md = lines.join("\n") + "\n"
writeFileSync(OUT_REPORT, md)
console.log(`\n✓ Report written to ${OUT_REPORT}`)
console.log(`\n${md}`)
