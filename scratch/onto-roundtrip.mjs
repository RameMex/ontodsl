/**
 * Onto roundtrip experiment.
 *
 * Goal: does an LLM produce a .onto file that the REAL ontodls verifier
 * accepts (parse + semantic + Z3 LSP)? — the loop our previous validation
 * harness never closed.
 *
 * Single honest run, no prompt-tuning until it passes:
 *   1. Read insulin-pump gold case (narrative + goals + conversation).
 *   2. Show the LLM two existing .onto examples as syntax reference.
 *   3. Ask it to produce a .onto for the insulin pump.
 *   4. Invoke `ontodsl --verify` (parse → semantic → Z3 LSP).
 *   5. Report exit code + first failure.
 */

import { readFileSync, writeFileSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")
const HARNESS_CASES = resolve(
  ONTODLS,
  "../../../onto-discovery-app/requirements-app/scripts/cases",
)

// ─── 0. Read the DeepSeek API key from ontodls/../.env ───────────────
function readEnvKey(envPath, name) {
  const lines = readFileSync(envPath, "utf8").split(/\r?\n/)
  const line = lines.find((l) => l.startsWith(name + "="))
  if (!line) throw new Error(`${name} not in ${envPath}`)
  return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, "")
}
// The DEEPSEEK_API_KEY lives in the parallel ontodesign-experiment (1)
// folder (where the original CLI pipeline experiments stored it), not in
// the sibling ontodesign/ontodesign-experiment/ where this ontodls lives.
const DEEPSEEK_KEY = readEnvKey(
  "C:/Users/Rene Meza/Documents/MisProyectos/ontodesign-experiment (1)/ontodesign-experiment/.env",
  "DEEPSEEK_API_KEY",
)

// ─── 1. Build the prompt ─────────────────────────────────────────────
const goldCase = JSON.parse(
  readFileSync(resolve(HARNESS_CASES, "insulin-pump.json"), "utf8"),
)
const exLowpass = readFileSync(
  resolve(ONTODLS, "examples/ardupilot_lowpass.onto"),
  "utf8",
)
const exBaseball = readFileSync(
  resolve(ONTODLS, "examples/baseball.onto"),
  "utf8",
)

const SYSTEM = `You produce a .onto file in the ontodls DSL. The DSL is UFO-A + OCL based:

STRUCTURE:
- File starts with: schema "onto/0.1"; namespace <name>;
- Stereotypes: kind, subkind, role (mediated-by R of K), relator (mediates (R1, R2)), category, mixin, phaseGroup, mode, quality, happening, agent, commitment, useCase.
- Each kind/subkind declares: identity: propName; property foo: Type; invariants { ... }; events with pre/post/modifies clauses.
- Roles inherit identity from "of" bearer; relators supply own identity.

OCL FRAGMENT SUPPORTED:
- Operators: =, <>, >, >=, <, <=, +, -, *, /, and, or, not
- Quantifiers and collections: ->forAll(x | ...), ->includes(x), ->size()
- Conditional: if cond then a else b endif (MUST end with endif)
- @pre for old values inside post-conditions
- Pre/post layout: pre: <bool>;  post: <bool>;  modifies: self.prop1, self.prop2;

HARD RULES:
- Output ONLY the .onto file text. No markdown fences, no prose, no preamble.
- Every kind MUST declare identity: <propName> and that property MUST be among its properties.
- Every invariant ends with semicolon.
- Every pre/post/modifies clause ends with semicolon.
- Conditionals MUST use endif (no else-if shortcuts; nest if/then/else if/then/else/endif endif).
- Do NOT invent stereotypes outside the list above.

Two reference examples follow.`

const USER = `REFERENCE EXAMPLE 1 — control-system kind with events, DbC pre/post, LSP:
"""
${exLowpass}
"""

REFERENCE EXAMPLE 2 — domain with roles, relators, queries, collections:
"""
${exBaseball}
"""

NOW PRODUCE A .onto FOR THIS DOMAIN:

system: ${goldCase.systemName}
narrative + constraints: ${goldCase.visionConstraints.join(" | ")}

goals to model as events / invariants:
${goldCase.goals
  .map(
    (g) =>
      `  - ${g.code}: ${g.title}${g.successMeasure ? " (measure: " + g.successMeasure + ")" : ""}`,
  )
  .join("\n")}

glossary:
${goldCase.glossary.map((t) => `  - ${t.term}: ${t.definition}`).join("\n")}

conversation excerpts (mine for thresholds/conditions):
${goldCase.conversation.map((t) => `  [${t.role}] ${t.content}`).join("\n")}

Emit the .onto now.`

// ─── 2. Call DeepSeek ────────────────────────────────────────────────
console.log("calling DeepSeek (deepseek-chat) to generate .onto…")
const res = await fetch("https://api.deepseek.com/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${DEEPSEEK_KEY}`,
  },
  body: JSON.stringify({
    model: "deepseek-chat",
    max_tokens: 4000,
    messages: [
      { role: "system", content: SYSTEM },
      { role: "user", content: USER },
    ],
  }),
})
if (!res.ok) {
  const body = await res.text()
  console.error(`DeepSeek HTTP ${res.status}: ${body.slice(0, 400)}`)
  process.exit(1)
}
const j = await res.json()
let ontoText = j.choices?.[0]?.message?.content ?? ""
// strip any stray code fences just in case
ontoText = ontoText.replace(/^```(?:onto|\w+)?\s*\n?/m, "").replace(/```\s*$/m, "").trim()

const outPath = resolve(ONTODLS, "scratch/insulin_pump_generated.onto")
writeFileSync(outPath, ontoText + "\n")
console.log(`wrote ${outPath} (${ontoText.length} chars)\n`)

// ─── 3. Invoke ontodsl --verify ──────────────────────────────────────
console.log("running ontodsl --verify (parse → semantic → Z3 LSP)…\n")
const cliPath = resolve(ONTODLS, "dist/cli/gen.js")
const outDir = resolve(ONTODLS, "scratch/insulin_pump_out")
const cli = spawnSync(
  process.execPath,
  [cliPath, outPath, "--out", outDir, "--verify"],
  { cwd: ONTODLS, encoding: "utf8", timeout: 60000 },
)

console.log("--- stdout ---")
console.log(cli.stdout || "(empty)")
console.log("--- stderr ---")
console.log(cli.stderr || "(empty)")
console.log(`--- exit code: ${cli.status} ---`)
process.exit(cli.status ?? 1)
