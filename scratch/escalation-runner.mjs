/**
 * Cross-model escalation runner — Phase 17 of BLOQUE2_EMPIRICAL.
 *
 * Implements the escalation protocol Π(M1, M2, V) documented in
 * `docs/research/CrossModelEscalation.md`:
 *
 *   1. Author with M1 (typically DeepSeek — cheap).
 *   2. Run the verifier V.
 *   3. If V emits ZERO hard diagnostics → return M1's output.
 *   4. Else → ESCALATE: author with M2 (typically Sonnet — capable),
 *      fresh, same prompt. M2 has no shared context with M1.
 *   5. Verify M2's output. Return as final, even if it still has
 *      diagnostics (the verifier is the only arbiter; we surface
 *      whatever Bloque 2 reports).
 *
 * Why fresh / no handoff: this preserves the "verifier as neutral
 * interface" claim — neither model knows the other exists. The
 * cascade decision is made by the verifier alone.
 *
 * Output: a per-case report with which model handled the case,
 * how many attempts, whether escalation triggered, and final
 * Bloque 2 status.
 *
 * Usage:
 *   node scratch/escalation-runner.mjs --case <id>
 *   node scratch/escalation-runner.mjs --cases <id1>,<id2>,...
 *
 * Default $M_1$ = deepseek, $M_2$ = anthropic.
 */

import { spawnSync } from "node:child_process"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { existsSync, mkdirSync, copyFileSync, readdirSync, rmSync, writeFileSync } from "node:fs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")

const argv = process.argv.slice(2)
function flag(name, def) {
  const i = argv.indexOf(name)
  return i >= 0 ? argv[i + 1] : def
}
const CASES_FLAG = flag("--cases", null)
const SINGLE_CASE = flag("--case", null)
const M1_PROVIDER = flag("--m1", "deepseek")
const M2_PROVIDER = flag("--m2", "anthropic")
const SIMULATE = argv.includes("--simulate")
const CASES = SINGLE_CASE
  ? [SINGLE_CASE]
  : CASES_FLAG
    ? CASES_FLAG.split(",").map((s) => s.trim())
    : [
        "online-banking",
        "smart-thermostat",
        "library-system",
        "traffic-light",
        "patient-monitoring",
      ]

const OUT_REPORT = resolve(ONTODLS, "scratch/escalation-report.md")

// ─── helpers ────────────────────────────────────────────────────────────

function runOneCase(caseId, provider) {
  const t0 = Date.now()
  const r = spawnSync(
    process.execPath,
    [
      resolve(ONTODLS, "scratch/sdlc-playbook-test.mjs"),
      "--case", caseId,
      "--provider", provider,
    ],
    {
      cwd: ONTODLS,
      encoding: "utf8",
      timeout: 1800000,
      stdio: ["ignore", "pipe", "pipe"],
    },
  )
  const out = (r.stdout ?? "") + "\n" + (r.stderr ?? "")
  const elapsedSec = Math.round((Date.now() - t0) / 1000)
  const converged = !/✗ ABORTED/.test(out) && /✓ All 4 stages/.test(out)
  // Count attempts per stage
  const attempts = {}
  let currentStage = null
  let stageAttempts = 0
  for (const ln of out.split(/\r?\n/)) {
    const m = /────── STAGE:\s*(\w+)/.exec(ln)
    if (m) {
      if (currentStage) attempts[currentStage] = stageAttempts
      currentStage = m[1]
      stageAttempts = 0
      continue
    }
    if (currentStage && /^\s*attempt\s+(\d+)\//.test(ln)) {
      const m2 = /attempt\s+(\d+)\//.exec(ln)
      stageAttempts = Number(m2[1])
    }
    if (currentStage && /⤿ skipping/.test(ln)) {
      attempts[currentStage] = 0 // resume; no new attempts
    }
  }
  if (currentStage) attempts[currentStage] = stageAttempts
  const totalAttempts = Object.values(attempts).reduce((s, n) => s + n, 0)
  return { converged, elapsedSec, attempts, totalAttempts }
}

function runBloque2(caseId, provider) {
  const snake = caseId.replace(/-/g, "_")
  const suffix = provider === "anthropic" ? "" : `_${provider}`
  const designPath = resolve(ONTODLS, `examples/${snake}${suffix}/design.onto`)
  if (!existsSync(designPath)) return { exit: 1, hardDiags: -1 }
  const r = spawnSync(
    process.execPath,
    [
      resolve(ONTODLS, "dist/cli/gen.js"),
      designPath,
      "--out", resolve(ONTODLS, "scratch/escalation_out", `${snake}${suffix}`),
      "--verify",
      "--resolve-imports",
    ],
    { cwd: ONTODLS, encoding: "utf8", timeout: 300000 },
  )
  const out = (r.stdout ?? "") + "\n" + (r.stderr ?? "")
  // Count hard diagnostics (S##)
  const hardMatches = out.match(/\[S\d+\]/g) ?? []
  return { exit: r.status ?? 1, hardDiags: hardMatches.length, out }
}

// ─── escalation procedure Π ────────────────────────────────────────────

/**
 * Simulate mode: check if the case's `.onto` directory for the given
 * provider already exists with 4/4 stages and verify it. Skip LLM
 * invocation entirely. Returns a result shape compatible with
 * runOneCase but with synthetic timing.
 */
function simulateFromDisk(caseId, provider) {
  const snake = caseId.replace(/-/g, "_")
  const suffix = provider === "anthropic" ? "" : `_${provider}`
  const dir = resolve(ONTODLS, `examples/${snake}${suffix}`)
  if (!existsSync(dir)) {
    return { converged: false, elapsedSec: 0, attempts: {}, totalAttempts: 0, reason: "no dir" }
  }
  const files = readdirSync(dir).filter((f) => f.endsWith(".onto"))
  const stagesPresent = ["discovery", "requirements", "formalization", "design"]
    .filter((s) => files.includes(`${s}.onto`))
  const allFour = stagesPresent.length === 4
  // Verify the chain root (design.onto) if all 4 present.
  let chainOK = false
  if (allFour) {
    const v = runBloque2(caseId, provider)
    chainOK = v.exit === 0 && v.hardDiags === 0
  }
  return {
    converged: allFour && chainOK,
    elapsedSec: 0,
    attempts: { simulated: true },
    totalAttempts: 0,
    reason: allFour ? (chainOK ? "verified" : "Bloque2 hard diagnostics") : `only ${stagesPresent.length}/4 stages on disk`,
  }
}

function escalate(caseId) {
  console.log(`\n──── ${caseId} ${SIMULATE ? "(SIMULATE)" : ""} ────`)
  console.log(`  step 1: ${SIMULATE ? "checking disk for" : "author with"} M1=${M1_PROVIDER}`)
  const m1Run = SIMULATE
    ? simulateFromDisk(caseId, M1_PROVIDER)
    : runOneCase(caseId, M1_PROVIDER)
  console.log(`    M1: ${m1Run.converged ? "✓ converged" : "✗ aborted"} in ${m1Run.totalAttempts} attempts (${m1Run.elapsedSec}s)`)

  // V(a_1): is there any hard diagnostic? If M1 aborted at any stage,
  // count that as hard for escalation purposes.
  if (m1Run.converged) {
    // M1's converged. Run V on the final design to confirm 0 hard.
    const v = runBloque2(caseId, M1_PROVIDER)
    if (v.exit === 0 && v.hardDiags === 0) {
      console.log(`    V(a1): 0 hard diagnostics — NO escalation needed`)
      return {
        caseId,
        m1: m1Run,
        m2: null,
        escalated: false,
        finalConverged: true,
        finalProvider: M1_PROVIDER,
      }
    }
    console.log(`    V(a1): ${v.hardDiags} hard diagnostic(s) — escalating despite M1's stage-level convergence`)
  } else {
    console.log(`    M1 aborted at a stage — escalating to M2`)
  }

  console.log(`  step 2: ESCALATE to M2=${M2_PROVIDER}`)
  const m2Run = SIMULATE
    ? simulateFromDisk(caseId, M2_PROVIDER)
    : runOneCase(caseId, M2_PROVIDER)
  console.log(`    M2: ${m2Run.converged ? "✓ converged" : "✗ aborted"} in ${m2Run.totalAttempts} attempts (${m2Run.elapsedSec}s)${m2Run.reason ? " [" + m2Run.reason + "]" : ""}`)

  const v2 = m2Run.converged ? runBloque2(caseId, M2_PROVIDER) : { exit: 1, hardDiags: -1 }
  const finalOK = m2Run.converged && v2.exit === 0 && v2.hardDiags === 0
  return {
    caseId,
    m1: m1Run,
    m2: m2Run,
    escalated: true,
    finalConverged: finalOK,
    finalProvider: M2_PROVIDER,
  }
}

// ─── report ─────────────────────────────────────────────────────────────

const results = []
for (const c of CASES) {
  results.push(escalate(c))
}

const lines = []
lines.push(`# Cross-model escalation pilot — Phase 17`)
lines.push(``)
lines.push(`**M1 = ${M1_PROVIDER}, M2 = ${M2_PROVIDER}**, ${CASES.length} cases.`)
lines.push(``)
lines.push(`## Per-case results`)
lines.push(``)
lines.push(`| Case | M1 outcome | Escalated? | M2 outcome | Final | Total time (s) |`)
lines.push(`|---|---|---|---|---|---:|`)
for (const r of results) {
  const m1str = r.m1.converged ? "✓ converged" : "✗ aborted"
  const escStr = r.escalated ? "yes" : "no"
  const m2str = r.m2 === null ? "n/a" : (r.m2.converged ? "✓ converged" : "✗ aborted")
  const finalStr = r.finalConverged ? "✓" : "✗"
  const total = (r.m1.elapsedSec ?? 0) + (r.m2?.elapsedSec ?? 0)
  lines.push(`| ${r.caseId} | ${m1str} | ${escStr} | ${m2str} | ${finalStr} | ${total} |`)
}

const escCount = results.filter((r) => r.escalated).length
const finalOK = results.filter((r) => r.finalConverged).length
const m1Only = results.filter((r) => !r.escalated && r.finalConverged).length
lines.push(``)
lines.push(`## Aggregate`)
lines.push(``)
lines.push(`- **Escalation rate:** ${escCount}/${results.length} (${(100*escCount/results.length).toFixed(0)}%)`)
lines.push(`- **M1-only success:** ${m1Only}/${results.length}`)
lines.push(`- **Final success:** ${finalOK}/${results.length} (${(100*finalOK/results.length).toFixed(0)}%)`)
lines.push(`- **Recovery rate** (M2 succeeded when M1 failed): see per-case data; cases where escalated=yes AND finalConverged=true.`)

const recovered = results.filter((r) => r.escalated && r.finalConverged).length
const escalatedTotal = results.filter((r) => r.escalated).length
lines.push(`- **Recovery r:** ${recovered}/${escalatedTotal}${escalatedTotal > 0 ? ` = ${(recovered/escalatedTotal).toFixed(2)}` : " (n/a, no escalations)"}`)

const md = lines.join("\n") + "\n"
writeFileSync(OUT_REPORT, md)
console.log(`\n✓ Report written to ${OUT_REPORT}`)
console.log(`\n${md}`)
