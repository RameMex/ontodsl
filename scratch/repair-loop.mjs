/**
 * Bloque 2 repair loop.
 *
 * Take a verified <case>/design.onto, run Bloque 2 to collect any
 * inter-stage refinement warnings (W34, W38, W39), feed those
 * diagnostics back to the LLM as a repair prompt, regenerate the
 * design.onto, and re-verify. Iterate up to MAX_ROUNDS.
 *
 * The experiment answers: when Bloque 2 detects a real gap in a
 * generated design (e.g. a component doesn't carry a property the
 * parent event mentions), is the diagnostic structurally rich enough
 * that an LLM can ACT on it and produce a fixed design?
 *
 * Why design.onto and not other stages:
 *   - Bloque 2's W38/W39 are specifically about Requirements →
 *     Design property/modifies correspondence.
 *   - The design is the largest and structurally most complex stage,
 *     so it's where gaps are most likely to appear.
 *
 * Why iterate rather than one-shot:
 *   - Sonnet/DeepSeek tend to fix the SPECIFIC properties named in
 *     the diagnostic but may miss the systemic decomposition gap
 *     that produced them. Iterating lets the model converge.
 *
 * Usage: node scratch/repair-loop.mjs --case meeting-scheduler --provider deepseek
 */

import { readFileSync, writeFileSync, copyFileSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")
const ENV_PATH =
  "C:/Users/Rene Meza/Documents/MisProyectos/ontodesign-experiment (1)/ontodesign-experiment/.env"

const argv = process.argv.slice(2)
function flag(name, def) {
  const i = argv.indexOf(name)
  return i >= 0 ? argv[i + 1] : def
}
const CASE_ID = flag("--case", "meeting-scheduler")
const PROVIDER = flag("--provider", "deepseek")
const MODEL =
  flag("--model", null) ??
  (PROVIDER === "deepseek" ? "deepseek-chat" : "claude-sonnet-4-6")
const MAX_ROUNDS = Number(flag("--max-rounds", "3"))
const CASE_SNAKE = CASE_ID.replace(/-/g, "_")
// Operate on a COPY of the verified case so we don't damage the
// baseline. Each round overwrites design.onto in the workspace.
// --src-dir overrides the default location (useful for cross-model
// experiments: feed Sonnet a baseline that DeepSeek authored).
const SRC_DIR = flag("--src-dir", null)
  ? resolve(ONTODLS, flag("--src-dir", ""))
  : PROVIDER === "anthropic"
    ? resolve(ONTODLS, `examples/${CASE_SNAKE}`)
    : resolve(ONTODLS, `examples/${CASE_SNAKE}_${PROVIDER}`)
const WORK_SUFFIX = flag("--src-dir", null) ? `_${PROVIDER}_xrepair` : `_${PROVIDER}`
const WORK_DIR = resolve(ONTODLS, `scratch/repair_loop/${CASE_SNAKE}${WORK_SUFFIX}`)

function readEnvKey(envPath, name) {
  const line = readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .find((l) => l.startsWith(name + "="))
  if (!line) throw new Error(`${name} not in ${envPath}`)
  return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, "")
}
const PROVIDER_KEY =
  PROVIDER === "anthropic"
    ? readEnvKey(ENV_PATH, "ANTHROPIC_API_KEY")
    : readEnvKey(ENV_PATH, "DEEPSEEK_API_KEY")

async function callLLM(messages, maxTokens = 8000) {
  if (PROVIDER === "anthropic") {
    const sys = messages.find((m) => m.role === "system")?.content ?? ""
    const rest = messages.filter((m) => m.role !== "system")
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": PROVIDER_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: maxTokens,
        system: sys,
        messages: rest.map((m) => ({ role: m.role, content: m.content })),
      }),
    })
    if (!res.ok) throw new Error(`Anthropic ${res.status}: ${await res.text()}`)
    const j = await res.json()
    return j.content?.find((b) => b.type === "text")?.text ?? ""
  }
  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${PROVIDER_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    }),
  })
  if (!res.ok) throw new Error(`DeepSeek ${res.status}: ${await res.text()}`)
  const j = await res.json()
  return j.choices?.[0]?.message?.content ?? ""
}

function stripFences(t) {
  let out = t
    .replace(/^```(?:onto|\w+)?\s*\n?/m, "")
    .replace(/```\s*$/m, "")
    .trim()
  const idx = out.indexOf('schema "onto/0.1"')
  if (idx > 0) out = out.slice(idx)
  return out
}

import { mkdirSync, readdirSync } from "node:fs"
mkdirSync(WORK_DIR, { recursive: true })
for (const f of readdirSync(SRC_DIR)) {
  if (f.endsWith(".onto")) copyFileSync(resolve(SRC_DIR, f), resolve(WORK_DIR, f))
}

function runBloque2() {
  const cli = spawnSync(
    process.execPath,
    [
      resolve(ONTODLS, "dist/cli/gen.js"),
      resolve(WORK_DIR, "design.onto"),
      "--out",
      resolve(WORK_DIR, "_out"),
      "--verify",
      "--resolve-imports",
    ],
    { cwd: ONTODLS, encoding: "utf8", timeout: 180000 },
  )
  return (cli.stdout ?? "") + "\n" + (cli.stderr ?? "")
}

/** Extract W34 / W38 / W39 / S34 lines from CLI output. */
function extractFindings(cliOut) {
  const findings = []
  for (const line of cliOut.split(/\r?\n/)) {
    const m = /\[(W34|W38|W39|S34)\b\]/.exec(line)
    if (m) findings.push({ code: m[1], line: line.trim() })
  }
  return findings
}

function countByCode(findings) {
  const c = {}
  for (const f of findings) c[f.code] = (c[f.code] ?? 0) + 1
  return c
}

// Read all four stage files so we can include them as context for the
// repair prompt — the design is being asked to change, but the model
// needs to see what it's REFINING for the change to make sense.
function readAllStages() {
  const stages = {}
  for (const s of ["discovery", "requirements", "formalization", "design"]) {
    stages[s] = readFileSync(resolve(WORK_DIR, `${s}.onto`), "utf8")
  }
  return stages
}

// ─── Main loop ────────────────────────────────────────────────────────

console.log(`\nRepair loop on ${CASE_ID} (${PROVIDER}/${MODEL}, max ${MAX_ROUNDS} rounds)`)
console.log(`  workspace: ${WORK_DIR}`)

const baselineOut = runBloque2()
const baseline = extractFindings(baselineOut)
const baselineCounts = countByCode(baseline)
console.log(`\nBaseline findings:`, baselineCounts)
for (const f of baseline.slice(0, 5)) console.log(`  ${f.line.slice(0, 140)}`)
if (baseline.length === 0) {
  console.log(`\n✓ No findings to repair — exiting.`)
  process.exit(0)
}

let lastCount = baseline.length
let bestRound = 0
let bestCount = baseline.length

for (let round = 1; round <= MAX_ROUNDS; round += 1) {
  console.log(`\n────── round ${round}/${MAX_ROUNDS} ──────`)
  const stages = readAllStages()
  const cliOut = runBloque2()
  const findings = extractFindings(cliOut)
  if (findings.length === 0) {
    console.log(`  ✓ no remaining findings — clean.`)
    bestRound = round
    bestCount = 0
    break
  }
  console.log(`  ${findings.length} finding(s) to address:`, countByCode(findings))

  // Build the repair prompt. We give the LLM:
  //   - Full text of all 4 stage files so it can resolve references
  //   - The list of specific diagnostics
  //   - Concrete instructions: re-emit ONLY design.onto, no prose
  const sys = `You are repairing a .onto file in the ontodls DSL. The Z3-based
inter-stage refinement verifier reported the following violations on
design.onto. Your task: emit a corrected design.onto that resolves them
WITHOUT regressing the other stages' obligations.

Refinement obligations (relevant for this repair):
 - W38 modifies-closure: every property in a parent event's modifies
   list must appear in at least one refining component event's modifies.
 - W39 property-correspondence: every self.X referenced by a parent
   event's pre/post must appear as a property of at least one refining
   component kind.
 - W34 commitment coverage: every commitment must be claimed by an
   event annotation \`// refines: <ns>::<CommitmentName>\`.

Strategy choices when fixing:
 1. ADD the missing property to the most natural component kind (usually
    the one whose other properties already overlap with it).
 2. ADD it to the component event's modifies clause.
 3. If the parent event's modifies entry was inappropriate, you may
    DELETE that entry from the parent — but only if the property really
    is component-local and shouldn't appear on the system kind.
 4. For S34 violations: the event's pre+post does NOT entail the
    commitment's predicate. Two valid fixes:
    a. STRENGTHEN the event's post to actually establish what the
       commitment requires (e.g. add a post clause that sets the
       commitment-relevant flag).
    b. REMOVE the offending 'refines: <ns>::<CommitmentName>' target
       from this event's clause — the event simply doesn't discharge
       that commitment; a SIBLING event probably does. Over-claiming
       refinement is worse than under-claiming: a missing claim shows
       up as W34, an over-claim shows up as S34 (which is a hard
       failure). Prefer to REMOVE the wrong claim and keep the
       refines clause minimal and truthful.

Hard rules (re-emphasised):
 - Output ONLY the design.onto file content. No prose, no markdown fences.
 - Use single-quoted strings.
 - Event return type uses ':' not 'returns'.
 - modifies clauses are NON-EMPTY (omit clause if no modifications).
 - \`refines:\` annotations: prefer the qualified form
    \`// refines: <namespace>::<Type>.<eventName>\` for Liskov edges
    and \`// refines: <namespace>::<CommitmentName>\` for commitment
    discharge — these are what the verifier mines.`

  const userPrompt = `CONTEXT — the four stages of the model:

--- discovery.onto ---
${stages.discovery}

--- requirements.onto ---
${stages.requirements}

--- formalization.onto ---
${stages.formalization}

--- current design.onto (the one to repair) ---
${stages.design}

--- Bloque 2 violations to address ---
${findings.map((f) => "  " + f.line).join("\n")}

Re-emit the FULL corrected design.onto. Keep every existing event;
only ADD/RENAME properties or modifies entries as needed to close the
gaps above.`

  const t0 = Date.now()
  let text
  try {
    text = stripFences(await callLLM([
      { role: "system", content: sys },
      { role: "user", content: userPrompt },
    ], 12000))
  } catch (e) {
    console.log(`  ✗ LLM call failed: ${e instanceof Error ? e.message : e}`)
    break
  }
  console.log(`  ${text.length} chars in ${Date.now() - t0}ms`)
  writeFileSync(resolve(WORK_DIR, "design.onto"), text + "\n")

  const newOut = runBloque2()
  const newFindings = extractFindings(newOut)
  console.log(
    `  → ${findings.length} → ${newFindings.length} findings (${countByCode(newFindings)["W38"] ?? 0} W38, ${countByCode(newFindings)["W39"] ?? 0} W39, ${countByCode(newFindings)["W34"] ?? 0} W34, ${countByCode(newFindings)["S34"] ?? 0} S34)`,
  )

  if (newFindings.length < bestCount) {
    bestCount = newFindings.length
    bestRound = round
  }
  if (newFindings.length === 0) {
    console.log(`  ✓ all findings resolved.`)
    break
  }
  if (newFindings.length >= lastCount && round > 1) {
    console.log(
      `  ⚠ no progress this round (${lastCount} → ${newFindings.length}). Continuing.`,
    )
  }
  lastCount = newFindings.length
}

console.log(`\n────── summary ──────`)
console.log(`  baseline:           ${baseline.length} findings`)
console.log(`  best:               ${bestCount} findings (round ${bestRound})`)
console.log(`  reduction:          ${baseline.length - bestCount} (${((1 - bestCount / baseline.length) * 100).toFixed(0)}%)`)
process.exit(bestCount === 0 ? 0 : 1)
