/**
 * Counterexample-guided .onto generation loop, v2.
 *
 * v1 limitations identified:
 *   - CLI stderr is terse ("Expecting X but found ';'") — no line/col,
 *     no source context. An LLM can't localize the bug.
 *   - DeepSeek defaults to "OCL standard" (let/in, double-quoted strings)
 *     that the ontodls dialect doesn't accept.
 *
 * v2 changes:
 *   1. Calls `parse()` from the ontodls dist DIRECTLY (not via CLI),
 *      pulling rich ParseError objects with stage + line + column.
 *   2. Formats each diagnostic with ±3 lines of source context.
 *   3. Provider abstraction: --provider anthropic|deepseek (default
 *      anthropic, model claude-sonnet-4-6).
 *   4. If parse passes, falls through to `ontodsl --verify` for the Z3
 *      LSP stage (semantic + Z3 errors also use ParseError shape).
 *
 * Single honest run.
 */

import { readFileSync, writeFileSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { parse } from "../dist/index.js"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")
const HARNESS_CASES = resolve(
  ONTODLS,
  "../../../onto-discovery-app/requirements-app/scripts/cases",
)
const ENV_PATH =
  "C:/Users/Rene Meza/Documents/MisProyectos/ontodesign-experiment (1)/ontodesign-experiment/.env"

const MAX_ATTEMPTS = 5

// ─── Provider abstraction ────────────────────────────────────────────
function readEnvKey(envPath, name) {
  const line = readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .find((l) => l.startsWith(name + "="))
  if (!line) throw new Error(`${name} not in ${envPath}`)
  return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, "")
}

const argv = process.argv.slice(2)
let PROVIDER = "anthropic"
let MODEL
let CASE_ID = "insulin-pump"
for (let i = 0; i < argv.length; i++) {
  const a = argv[i]
  if (a === "--provider") PROVIDER = argv[++i]
  else if (a === "--model") MODEL = argv[++i]
  else if (a === "--case") CASE_ID = argv[++i]
}
const DEFAULT_MODELS = {
  anthropic: "claude-sonnet-4-6",
  deepseek: "deepseek-chat",
}
MODEL ??= DEFAULT_MODELS[PROVIDER]

async function callLLM(messages, maxTokens = 4000) {
  if (PROVIDER === "anthropic") {
    const key = readEnvKey(ENV_PATH, "ANTHROPIC_API_KEY")
    // Anthropic's messages API takes system separately; carve it out.
    const sys = messages.find((m) => m.role === "system")?.content ?? ""
    const rest = messages.filter((m) => m.role !== "system")
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: maxTokens,
        system: sys,
        messages: rest.map((m) => ({ role: m.role, content: m.content })),
      }),
    })
    if (!res.ok) {
      const body = await res.text()
      throw new Error(
        `Anthropic HTTP ${res.status}: ${body.slice(0, 300)}`,
      )
    }
    const j = await res.json()
    const block = j.content?.find((b) => b.type === "text")
    return block?.text ?? ""
  }
  // deepseek (OpenAI-compatible)
  const key = readEnvKey(ENV_PATH, "DEEPSEEK_API_KEY")
  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({ model: MODEL, max_tokens: maxTokens, messages }),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`DeepSeek HTTP ${res.status}: ${body.slice(0, 300)}`)
  }
  const j = await res.json()
  return j.choices?.[0]?.message?.content ?? ""
}

function stripFences(text) {
  return text
    .replace(/^```(?:onto|\w+)?\s*\n?/m, "")
    .replace(/```\s*$/m, "")
    .trim()
}

// ─── Rich diagnostic formatter ───────────────────────────────────────
/**
 * Format ParseError[] with file context: line + column + ±3 surrounding
 * lines, with a caret pointer at the column. This is what the LLM needs
 * to localize the bug.
 */
function formatDiagnostics(errors, source) {
  const lines = source.split(/\r?\n/)
  const out = []
  for (let i = 0; i < errors.length; i++) {
    const e = errors[i]
    out.push(
      `\n[${i + 1}] stage=${e.stage}${e.code ? " " + e.code : ""}${
        e.line !== undefined ? ` line=${e.line}` : ""
      }${e.column !== undefined ? ` col=${e.column}` : ""}`,
    )
    out.push(`    ${e.message}`)
    if (e.line !== undefined) {
      const from = Math.max(1, e.line - 3)
      const to = Math.min(lines.length, e.line + 3)
      for (let l = from; l <= to; l++) {
        const marker = l === e.line ? ">" : " "
        out.push(`    ${marker} ${String(l).padStart(4)} | ${lines[l - 1]}`)
        if (l === e.line && e.column !== undefined) {
          const pad = " ".repeat(e.column - 1)
          out.push(`           | ${pad}^`)
        }
      }
    }
  }
  return out.join("\n")
}

function runZ3Verifier(ontoPath) {
  const cli = spawnSync(
    process.execPath,
    [
      resolve(ONTODLS, "dist/cli/gen.js"),
      ontoPath,
      "--out",
      resolve(ONTODLS, "scratch/loop_v2_out"),
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

// ─── Initial prompt ──────────────────────────────────────────────────
const goldCase = JSON.parse(
  readFileSync(resolve(HARNESS_CASES, `${CASE_ID}.json`), "utf8"),
)
const exLowpass = readFileSync(
  resolve(ONTODLS, "examples/ardupilot_lowpass.onto"),
  "utf8",
)
const exBaseball = readFileSync(
  resolve(ONTODLS, "examples/baseball.onto"),
  "utf8",
)

const SYSTEM = `You produce a .onto file in the ontodls DSL. UFO-A + OCL based.

STRUCTURE:
- File starts with: schema "onto/0.1"; namespace <name>;
- Stereotypes (only these): kind, subkind, role (mediated-by <Relator> of <Kind>), relator (mediates (R1, R2)), category, mixin, phaseGroup, mode, quality, happening, agent, commitment, useCase.
- A role's mediated-by MUST reference a relator (NEVER a kind).
- Relation stereotypes: <<memberOf>>, <<mediation>>, <<composition>>. DO NOT invent new ones (no <<detection>>, <<triggers>>, etc.).
- Each kind/subkind: identity: propName;  property foo: Type;  invariants { ... };  events { pre/post/modifies }.

OCL FRAGMENT — STRICT, READ CAREFULLY:
- String literals use SINGLE QUOTES: 'OPERATIONAL', NEVER "OPERATIONAL".
- NO let-in expressions. Compute inline or split into multiple post: clauses.
- if/then/else/endif branches are EXPRESSIONS, not statement sequences. NO semicolons inside branches. Each branch is ONE expression yielding a value.
- If you need multiple effects under one condition, write MULTIPLE separate post: clauses, each with its own if/then/else.
- modifies: must list property paths like self.x, self.y — NEVER bare 'self'.
- Operators: =, <>, >, >=, <, <=, +, -, *, /, and, or, not
- Collections: ->forAll(x | ...), ->includes(x), ->size()
- Conditional always ends with endif.
- @pre for old values in post.
- Each pre/post/modifies clause ends with semicolon.

HARD RULES:
- Output ONLY the .onto file text. No markdown fences, no prose.
- Every kind declares identity: <propName> and that property MUST exist among its properties.

Two reference examples follow — STUDY THEM as the syntax ground truth.`

const initialUserPrompt = `REFERENCE EXAMPLE 1 — control-system kind with events, DbC pre/post, LSP:
"""
${exLowpass}
"""

REFERENCE EXAMPLE 2 — domain with roles, relators, queries, collections, single-quoted strings:
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

// ─── Loop ────────────────────────────────────────────────────────────
console.log(`provider=${PROVIDER} model=${MODEL}\n`)
const outPath = resolve(ONTODLS, `scratch/${CASE_ID.replace(/-/g, "_")}_loop_v2.onto`)
let attempt = 0
let messages = [
  { role: "system", content: SYSTEM },
  { role: "user", content: initialUserPrompt },
]
let lastOnto = ""
let lastParseErrors = []
let zVerdict = null

while (attempt < MAX_ATTEMPTS) {
  attempt++
  console.log(`────── ATTEMPT ${attempt}/${MAX_ATTEMPTS} ──────`)
  console.log(`calling ${PROVIDER}/${MODEL}…`)
  const t0 = Date.now()
  lastOnto = stripFences(await callLLM(messages))
  console.log(`  generated ${lastOnto.length} chars in ${Date.now() - t0}ms`)
  writeFileSync(outPath, lastOnto + "\n")

  // Stage A: parse with rich diagnostics
  const result = parse(lastOnto, { validateSemantics: true })
  lastParseErrors = result.errors
  if (lastParseErrors.length > 0) {
    const byStage = lastParseErrors.reduce((acc, e) => {
      acc[e.stage] = (acc[e.stage] ?? 0) + 1
      return acc
    }, {})
    console.log(
      `  parse FAILED: ${lastParseErrors.length} error(s) — ${Object.entries(
        byStage,
      )
        .map(([s, n]) => `${s}:${n}`)
        .join(", ")}`,
    )
    // Show first 2 inline for trace
    for (const e of lastParseErrors.slice(0, 2)) {
      console.log(
        `    ${e.stage}${e.line ? " L" + e.line : ""}${e.column ? " C" + e.column : ""}: ${e.message.slice(0, 120)}`,
      )
    }
  } else {
    console.log(`  parse OK (AST built, semantic passed)`)
    // Stage B: optional Z3 LSP via CLI
    console.log(`  running Z3 LSP via CLI…`)
    zVerdict = runZ3Verifier(outPath)
    console.log(`  Z3 exit=${zVerdict.exit}`)
    if (zVerdict.exit === 0) {
      console.log(`\n✓ VERIFIED ON ATTEMPT ${attempt} (parse + semantic + Z3)`)
      process.exit(0)
    }
    console.log(`  Z3 stderr: ${zVerdict.stderr.trim().slice(0, 300)}`)
  }

  if (attempt < MAX_ATTEMPTS) {
    const richDiag =
      lastParseErrors.length > 0
        ? formatDiagnostics(lastParseErrors, lastOnto)
        : `Z3 LSP verifier failed (exit ${zVerdict?.exit}):\n${zVerdict?.stderr ?? ""}`
    messages = [
      { role: "system", content: SYSTEM },
      { role: "user", content: initialUserPrompt },
      { role: "assistant", content: lastOnto },
      {
        role: "user",
        content: `Your .onto was rejected. Rich diagnostics:
${richDiag}

Fix every error above and emit the FULL corrected .onto file. Pay particular attention to:
- Single quotes for strings (never double).
- No semicolons inside if/then/else branches — each branch is ONE expression.
- modifies clauses list self.<prop> paths, never bare 'self'.
- No let/in expressions.

Output only the corrected .onto. No fences, no prose.`,
      },
    ]
  }
}

console.log(`\n✗ DID NOT CONVERGE in ${MAX_ATTEMPTS} attempts`)
console.log(`final parse errors: ${lastParseErrors.length}`)
process.exit(1)
