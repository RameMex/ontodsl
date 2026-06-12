/**
 * Counterexample-guided .onto generation loop.
 *
 * Closes the loop the original roundtrip didn't: when ontodsl --verify
 * fails, capture the diagnostics, feed them back to the LLM as a repair
 * prompt, and retry up to MAX_ATTEMPTS times. Report which attempt (if
 * any) produced a verified .onto.
 *
 * Single honest run. No prompt-tuning after seeing results.
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
const ENV_PATH =
  "C:/Users/Rene Meza/Documents/MisProyectos/ontodesign-experiment (1)/ontodesign-experiment/.env"

const MAX_ATTEMPTS = 5
const MODEL = "deepseek-chat"

// ─── helpers ────────────────────────────────────────────────────────
function readEnvKey(envPath, name) {
  const line = readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .find((l) => l.startsWith(name + "="))
  if (!line) throw new Error(`${name} not in ${envPath}`)
  return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, "")
}
const DEEPSEEK_KEY = readEnvKey(ENV_PATH, "DEEPSEEK_API_KEY")

async function callDeepSeek(messages, maxTokens = 4000) {
  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DEEPSEEK_KEY}`,
    },
    body: JSON.stringify({ model: MODEL, max_tokens: maxTokens, messages }),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`DeepSeek HTTP ${res.status}: ${body.slice(0, 300)}`)
  }
  const j = await res.json()
  let text = j.choices?.[0]?.message?.content ?? ""
  // Strip any stray code fences (the model sometimes wraps).
  text = text
    .replace(/^```(?:onto|\w+)?\s*\n?/m, "")
    .replace(/```\s*$/m, "")
    .trim()
  return text
}

function runVerifier(ontoPath) {
  const cli = spawnSync(
    process.execPath,
    [
      resolve(ONTODLS, "dist/cli/gen.js"),
      ontoPath,
      "--out",
      resolve(ONTODLS, "scratch/loop_out"),
      "--verify",
    ],
    { cwd: ONTODLS, encoding: "utf8", timeout: 60000 },
  )
  return {
    exit: cli.status ?? 1,
    stdout: cli.stdout ?? "",
    stderr: cli.stderr ?? "",
  }
}

// ─── 1. Build the initial prompt (same as single-shot) ──────────────
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

const SYSTEM = `You produce a .onto file in the ontodls DSL. The DSL is UFO-A + OCL based.

STRUCTURE:
- File starts with: schema "onto/0.1"; namespace <name>;
- Stereotypes: kind, subkind, role (mediated-by <Relator> of <Kind>), relator (mediates (R1, R2)), category, mixin, phaseGroup, mode, quality, happening, agent, commitment, useCase.
- Each kind/subkind: identity: propName;  property foo: Type;  invariants { ... };  events { pre/post/modifies }.
- A role's mediated-by MUST reference a relator (not a kind).
- Relator stereotypes for relations: <<memberOf>>, <<mediation>>, <<composition>>. Do NOT invent new ones.

OCL FRAGMENT — IMPORTANT:
- OCL is EXPRESSION-BASED. Every if/then/else branch is a SINGLE expression that yields a value, NOT a sequence of statements.
- DO NOT write multi-statement bodies inside if/then/else. ✗ "if c then a = 1; b = 2 else true endif" — INVALID. ✓ Express each effect as a SEPARATE post-condition with its own if/then/else.
- Operators: =, <>, >, >=, <, <=, +, -, *, /, and, or, not
- Quantifiers: ->forAll(x | ...), ->includes(x), ->size()
- Conditional: if cond then a else b endif (MUST end with endif).
- @pre for old values inside post-conditions (e.g. self.x@pre).
- Pre/post layout: each clause one line, ends with semicolon:
    pre: <bool>;
    post: <bool>;
    modifies: self.prop1, self.prop2;
- IF you need multiple effects under one condition, write multiple separate post: clauses each with its own if/then/else.

HARD RULES:
- Output ONLY the .onto file text. No markdown fences, no prose, no preamble.
- Every kind declares identity: <propName> and that property MUST be among its properties.
- Every clause ends with semicolon.
- Conditionals MUST end with endif.

Two reference examples follow.`

const initialUserPrompt = `REFERENCE EXAMPLE 1 — control-system kind with events, DbC pre/post, LSP:
"""
${exLowpass}
"""

REFERENCE EXAMPLE 2 — domain with roles, relators, queries, collections:
"""
${exBaseball}
"""

NOW PRODUCE A .onto FOR THIS DOMAIN:

system: ${goldCase.systemName}
constraints: ${goldCase.visionConstraints.join(" | ")}

goals to model:
${goldCase.goals
  .map(
    (g) =>
      `  - ${g.code}: ${g.title}${g.successMeasure ? " (measure: " + g.successMeasure + ")" : ""}`,
  )
  .join("\n")}

glossary:
${goldCase.glossary.map((t) => `  - ${t.term}: ${t.definition}`).join("\n")}

conversation (mine for thresholds/conditions):
${goldCase.conversation.map((t) => `  [${t.role}] ${t.content}`).join("\n")}

Emit the .onto now.`

// ─── 2. Loop ────────────────────────────────────────────────────────
const outPath = resolve(ONTODLS, "scratch/insulin_pump_loop.onto")
let attempt = 0
let messages = [
  { role: "system", content: SYSTEM },
  { role: "user", content: initialUserPrompt },
]
let lastOnto = ""
let lastVerdict = null

while (attempt < MAX_ATTEMPTS) {
  attempt++
  console.log(`\n────── ATTEMPT ${attempt}/${MAX_ATTEMPTS} ──────`)
  console.log("calling DeepSeek…")
  const t0 = Date.now()
  lastOnto = await callDeepSeek(messages)
  console.log(`  generated ${lastOnto.length} chars in ${Date.now() - t0}ms`)
  writeFileSync(outPath, lastOnto + "\n")

  console.log("running ontodsl --verify…")
  lastVerdict = runVerifier(outPath)
  console.log(`  exit=${lastVerdict.exit}`)
  if (lastVerdict.stderr.trim()) {
    const lines = lastVerdict.stderr.trim().split(/\r?\n/)
    console.log(`  stderr (${lines.length} lines):`)
    for (const l of lines.slice(0, 8)) console.log("    " + l)
    if (lines.length > 8) console.log(`    … ${lines.length - 8} more`)
  }

  if (lastVerdict.exit === 0) {
    console.log(`\n✓ VERIFIED ON ATTEMPT ${attempt}`)
    process.exit(0)
  }

  // Build repair prompt for next attempt
  if (attempt < MAX_ATTEMPTS) {
    messages = [
      { role: "system", content: SYSTEM },
      { role: "user", content: initialUserPrompt },
      { role: "assistant", content: lastOnto },
      {
        role: "user",
        content: `Your .onto was rejected by ontodsl --verify with exit code ${lastVerdict.exit}. The diagnostics:

"""
${lastVerdict.stderr.trim() || "(no stderr — but exit non-zero)"}
"""

Fix the errors and emit the FULL corrected .onto file. Do NOT emit a patch or commentary — only the complete corrected file text, same constraints as before (no markdown fences, no prose).`,
      },
    ]
  }
}

console.log(`\n✗ DID NOT CONVERGE in ${MAX_ATTEMPTS} attempts`)
console.log(`final exit code: ${lastVerdict?.exit ?? "?"}`)
process.exit(1)
