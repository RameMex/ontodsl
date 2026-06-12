/**
 * SDLC playbook validation experiment.
 *
 * Generate the 5-stage .onto for insulin pump following docs/PATTERNS_SDLC.md,
 * verify each intra-stage, then output is consumed by a separate analysis
 * step that maps the 4 refinement obligations to concrete OCL.
 *
 * Stages are generated SEQUENTIALLY: each stage gets the previous stages'
 * generated .onto as context, so the LLM can produce traceable refinement.
 *
 * Single honest run. Per-stage rich diagnostics; counterexample loop (max 3
 * attempts per stage). If a stage fails to converge, we stop and report.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { parse } from "../dist/index.js"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")
// HARNESS_CASES lives outside the ontodls tree (sibling project that
// authored the gold fixtures). Two candidate locations — the new path
// (used during the requirements-app refactor) and the original.
const HARNESS_CASES_CANDIDATES = [
  resolve(ONTODLS, "../../../onto-discovery-app/requirements-app/scripts/cases"),
  resolve(ONTODLS, "../../../../onto-discovery-app/requirements-app/scripts/cases"),
]
const HARNESS_CASES = HARNESS_CASES_CANDIDATES.find((p) => {
  try { readFileSync(resolve(p, "insulin-pump.json"), "utf8"); return true }
  catch { return false }
}) ?? HARNESS_CASES_CANDIDATES[0]
const ENV_PATH =
  "C:/Users/Rene Meza/Documents/MisProyectos/ontodesign-experiment (1)/ontodesign-experiment/.env"

// CLI flags:
//   --case <case-id>         (default: insulin-pump)
//   --provider anthropic|deepseek   (default: anthropic)
//   --model <model-id>       (default: claude-sonnet-4-6 / deepseek-chat)
//   --max-attempts <N>       (default: 3 for anthropic, 5 for deepseek)
//
// Case id maps to <HARNESS_CASES>/<case-id>.json. Output dirs include
// the provider as suffix when it isn't anthropic, so a DeepSeek run
// doesn't clobber the Sonnet-verified baseline.
const argv = process.argv.slice(2)
function flag(name, def) {
  const i = argv.indexOf(name)
  return i >= 0 ? argv[i + 1] : def
}
const CASE_ID = flag("--case", "insulin-pump")
const PROVIDER = flag("--provider", "anthropic")
const MODEL =
  flag("--model", null) ??
  (PROVIDER === "deepseek" ? "deepseek-chat" : "claude-sonnet-4-6")
const MAX_ATTEMPTS_PER_STAGE = Number(
  flag("--max-attempts", PROVIDER === "deepseek" ? "5" : "3"),
)
const CASE_SNAKE = CASE_ID.replace(/-/g, "_")
// When provider is non-default, append it to the output dir name so
// the existing Sonnet-verified outputs in examples/<case_snake>/
// remain untouched.
const OUT_SUFFIX = PROVIDER === "anthropic" ? "" : `_${PROVIDER}`
const OUT_DIR = resolve(ONTODLS, `examples/${CASE_SNAKE}${OUT_SUFFIX}`)
mkdirSync(OUT_DIR, { recursive: true })

// ─── infra ────────────────────────────────────────────────────────────
function readEnvKey(envPath, name) {
  const line = readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .find((l) => l.startsWith(name + "="))
  if (!line) throw new Error(`${name} not in ${envPath}`)
  return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, "")
}
// Lazily resolve only the key needed by the chosen provider — running
// with --provider deepseek shouldn't require an ANTHROPIC_API_KEY.
const PROVIDER_KEY = (() => {
  if (PROVIDER === "anthropic") return readEnvKey(ENV_PATH, "ANTHROPIC_API_KEY")
  if (PROVIDER === "deepseek") return readEnvKey(ENV_PATH, "DEEPSEEK_API_KEY")
  throw new Error(`unsupported --provider: ${PROVIDER}`)
})()

async function callLLM(messages, maxTokens = 6000) {
  if (PROVIDER === "anthropic") return callAnthropic(messages, maxTokens)
  if (PROVIDER === "deepseek") return callDeepSeek(messages, maxTokens)
  throw new Error(`unsupported provider ${PROVIDER}`)
}

async function callAnthropic(messages, maxTokens) {
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
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Anthropic HTTP ${res.status}: ${body.slice(0, 300)}`)
  }
  const j = await res.json()
  return j.content?.find((b) => b.type === "text")?.text ?? ""
}

async function callDeepSeek(messages, maxTokens) {
  // DeepSeek's API is OpenAI-compatible. System message goes in the
  // messages array (role:"system") rather than as a top-level field.
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
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`DeepSeek HTTP ${res.status}: ${body.slice(0, 300)}`)
  }
  const j = await res.json()
  return j.choices?.[0]?.message?.content ?? ""
}

function stripFences(t) {
  let out = t
    .replace(/^```(?:onto|\w+)?\s*\n?/m, "")
    .replace(/```\s*$/m, "")
    .trim()
  // Drop any prose preamble — the .onto file must start with `schema`.
  // The LLM sometimes leaks meta-commentary on the first line.
  const schemaIdx = out.indexOf('schema "onto/0.1"')
  if (schemaIdx > 0) out = out.slice(schemaIdx)
  // If TWO schema lines appear (LLM emitted commentary, then started
  // over with a second schema), keep only the LAST one — that's the
  // model's final intended output. Robust against patterns like
  // "But the previous attempt ... Kind.schema "onto/0.1"; namespace ...".
  const allSchemas = []
  let from = 0
  while (true) {
    const idx = out.indexOf('schema "onto/0.1"', from)
    if (idx < 0) break
    allSchemas.push(idx)
    from = idx + 1
  }
  if (allSchemas.length > 1) {
    out = out.slice(allSchemas[allSchemas.length - 1])
  }
  return out
}

/**
 * Augment a raw diagnostic string with "smart hints" for recurring
 * patterns the model fails on. Each hint names the offending pattern
 * verbatim AND gives the exact fix. Critically, hints are appended
 * to the diagnostic text (the model's repair prompt) — not silently
 * applied to the .onto. The experiment remains an honest measure of
 * whether the model can follow corrective instructions when given
 * sufficiently explicit ones.
 */
function smartHints(source) {
  const hints = []
  // DeepSeek (and occasionally Sonnet) re-emits `modifies: ;` despite
  // the system-prompt rule. Detect the literal pattern and tell the
  // model to delete those entire lines.
  const emptyMods = []
  const lines = source.split(/\r?\n/)
  for (let i = 0; i < lines.length; i += 1) {
    if (/^\s*modifies\s*:\s*;/.test(lines[i])) emptyMods.push(i + 1)
  }
  if (emptyMods.length > 0) {
    hints.push(
      `CRITICAL FIX — empty 'modifies: ;' clauses on lines [${emptyMods.join(", ")}]: ` +
      `the grammar requires at least one path after 'modifies:'. ` +
      `DELETE THE ENTIRE LINE for events that do not modify any state ` +
      `(pure observations / rejections). Do NOT keep the line with an ` +
      `empty body — that is a parse error.`,
    )
  }
  // ->including() / ->excluding() are not in the dialect.
  if (/->\s*(including|excluding|union|intersection|asSet|any|one)\s*\(/.test(source)) {
    hints.push(
      `CRITICAL FIX — collection operator not in the dialect: replace ` +
      `->including/->excluding/->union/->intersection/->asSet/->any/->one ` +
      `with one of the supported operators ` +
      `(->size, ->isEmpty, ->notEmpty, ->includes, ->forAll, ->exists, ` +
      `->select, ->reject, ->collect) or model the change as a scalar property.`,
    )
  }
  // 'returns Type' keyword in event signature.
  if (/event\s+\w+\s*\([^)]*\)\s*returns\s+/.test(source)) {
    hints.push(
      `CRITICAL FIX — event return type uses ':' not 'returns': ` +
      `'event foo(): Real { ... }' is valid, 'event foo() returns Real' is NOT.`,
    )
  }
  // 'extends' keyword (Java/TS leakage).
  if (/\b(subkind|kind|category|mixin|role|relator|happening|agent|commitment)\s+\w+\s+extends\s+/.test(source)) {
    hints.push(
      `CRITICAL FIX — the dialect uses 'specializes' NOT 'extends'. ` +
      `Replace every 'extends' that follows a type-decl name with 'specializes'.`,
    )
  }
  // Top-level events (DeepSeek pattern — emits events as if at
  // file scope, outside any kind/subkind body). The grammar
  // requires every event to live inside a type-decl's braces.
  // Detect lines that look like `event foo(` at the start of a
  // line WITHOUT being inside a `{ ... }` block. We approximate
  // this by checking brace balance.
  {
    const lines = source.split(/\r?\n/)
    let depth = 0
    const offending = []
    for (let i = 0; i < lines.length; i += 1) {
      const stripped = lines[i].replace(/'(?:[^'\\]|\\.)*'/g, "''")
      if (depth === 0 && /^\s*(?:override\s+)?event\s+\w+\s*\(/.test(stripped)) {
        offending.push(i + 1)
      }
      for (const ch of stripped) {
        if (ch === "{") depth += 1
        else if (ch === "}") depth -= 1
      }
    }
    if (offending.length > 0) {
      hints.push(
        `CRITICAL FIX — events declared at FILE scope on lines [${offending.join(", ")}]: ` +
        `every 'event' MUST live inside a type-decl body ` +
        `(kind, subkind, role, relator, category, etc.). Move them ` +
        `inside the appropriate '{ ... }' block of the owning type. ` +
        `If you intended them as acceptance criteria, declare them as ` +
        `events inside the system kind's body, NOT at file scope.`,
      )
    }
  }
  // Repeated 'specializes' keyword (DeepSeek pattern).
  if (/specializes\s+[\w,\s]+\s+specializes\s+/.test(source)) {
    hints.push(
      `CRITICAL FIX — only ONE 'specializes' keyword per declaration. ` +
      `Combine multi-parent into a single comma-separated list: ` +
      `'subkind X specializes A, B, C, D { ... }' — NOT ` +
      `'subkind X specializes A specializes B, C, D { ... }'.`,
    )
  }
  // Reserved keywords used as identifiers. Common English nouns/verbs
  // are reserved in the DSL grammar (quantity, category, phase, mode,
  // role, success, body, reads, writes, default, query, effects,
  // failure, trigger, of, to, from). Detect such usage as a property
  // name or declaration identifier and tell the LLM to rename.
  {
    const reserved = [
      "quantity", "category", "phase", "mode", "role", "success",
      "body", "reads", "writes", "default", "query", "effects",
      "failure", "trigger", "happening", "relation", "relator",
      "mediates", "internal", "override", "renames", "where",
    ]
    const hits = []
    for (const kw of reserved) {
      // property <kw> :   |   kind <kw>   |   subkind <kw>   |   event <kw>(
      const propRx = new RegExp(`\\bproperty\\s+${kw}\\s*[:;]`)
      const declRx = new RegExp(`\\b(kind|subkind|category|role|relator|mixin|happening|commitment|event|query|agent)\\s+${kw}\\b`)
      const paramRx = new RegExp(`\\(\\s*[^)]*\\b${kw}\\s*:`)
      if (propRx.test(source) || declRx.test(source) || paramRx.test(source)) {
        hits.push(kw)
      }
    }
    if (hits.length > 0) {
      const suggestions = {
        quantity: "qty / itemCount / amount",
        category: "categoryName / classification / kind_ (suffix)",
        phase: "currentPhase / lifecyclePhase / stage_",
        mode: "currentMode / operatingMode / modeFlag",
        role: "userRole / assignedRole / role_",
        success: "isSuccessful / successFlag / outcome",
        body: "messageBody / payloadBody / body_",
        reads: "readCount / readEvent / readsCount",
        writes: "writeCount / writeEvent / writesCount",
        default: "defaultValue / fallback / defaultV",
        query: "queryString / searchQuery / queryName",
        effects: "sideEffects / affectedItems",
        failure: "isFailure / failureReason / errFlag",
        trigger: "triggerCondition / triggerEvent",
        happening: "occurrence / domainEvent",
        relation: "linkRelation / association",
        relator: "linkRelator / relatorEntity",
        mediates: "mediatesBy / mediationOf",
        internal: "isInternal / privateFlag",
        override: "overrideValue / overrideFlag",
        renames: "renameTable / aliasMap",
        where: "filterClause / whereCond",
      }
      const lines = hits.map(kw => `${kw} → ${suggestions[kw] ?? kw + "_"}`).join("; ")
      hints.push(
        `CRITICAL FIX — these names are RESERVED keywords in the DSL ` +
        `and cannot be used as property names, declaration names, or ` +
        `parameter names: [${hits.join(", ")}]. Rename suggestions: ${lines}. ` +
        `If you must keep the concept, append an underscore (foo_) or use ` +
        `a longer descriptive name. Failing to rename produces parse errors ` +
        `that cannot be recovered.`,
      )
    }
  }
  // Trivially-true commitment predicates. Pattern: `predicate: true`
  // or `predicate: self.commitmentId <> null` — both contribute zero
  // discharge information and routinely lead to hard [S34] when the
  // post is non-trivial but doesn't entail what the LLM thought was
  // implied.
  if (/predicate\s*:\s*(true\s*;|self\.commitmentId\s*<>\s*null\s*;)/.test(source)) {
    hints.push(
      `CRITICAL FIX — trivially-true commitment predicate detected. ` +
      `'predicate: true;' or 'predicate: self.commitmentId <> null;' ` +
      `produces a discharge proof with no information content; the ` +
      `verifier will frequently report [S34] because the LLM's post ` +
      `does not formally entail this nothing-statement. Replace with a ` +
      `SUBSTANTIVE Boolean over the system properties the event will ` +
      `affect — e.g. 'predicate: self.transferState = "atomic" or ` +
      `self.transferState = "rolled_back";' or 'predicate: ` +
      `self.maxLatencyMs > 0 and self.maxLatencyMs <= 5;'.`,
    )
  }
  // `=>` for implication (not valid OCL; use `not A or B`).
  if (/\s=>\s/.test(source)) {
    hints.push(
      `CRITICAL FIX — OCL does not support '=>' for implication. ` +
      `Replace 'A => B' with 'not A or B' (canonical Boolean rewrite). ` +
      `Do NOT use the C-style '=>' or '->' for logical implication.`,
    )
  }
  // Qualified namespace::Type in relation/role clauses where the
  // grammar expects an unqualified imported name. Phase 23 v3 finding.
  // Patterns: `relation X: ... from <ns>::Type` and `to <ns>::Type`
  // and `role X mediated-by ... of <ns>::Type {`.
  {
    const badRelation = /\b(from|to)\s+\w+::\w+\s*\[/.test(source)
    const badRoleOf = /mediated-by\s+\w+\s+of\s+\w+::\w+/.test(source)
    if (badRelation || badRoleOf) {
      hints.push(
        `CRITICAL FIX — namespace-qualified types ('<ns>::Type') are ` +
        `NOT allowed in 'relation ... from/to ...' multiplicity clauses ` +
        `nor in 'role X mediated-by Y of ...' clauses. Use the ` +
        `UNQUALIFIED imported name (the import line at file top makes ` +
        `the type accessible by short name). Example: ` +
        `'relation r: <<med>> from A [1] to Channel [1]' — NOT ` +
        `'to notification_system_discovery::Channel [1]'.`,
      )
    }
  }
  // `implies` keyword — used in standard OCL but NOT in this dialect.
  // Pattern: `something implies something_else` where both sides look
  // like expressions.
  if (/\)\s+implies\s+|\w+\s+implies\s+/.test(source)) {
    hints.push(
      `CRITICAL FIX — this OCL dialect does NOT support the 'implies' ` +
      `keyword. Replace every 'A implies B' with 'not (A) or (B)'. ` +
      `Example: 'self.x > 0 implies self.y < 10' becomes ` +
      `'not (self.x > 0) or (self.y < 10)'.`,
    )
  }
  // String concatenation with '+' (rule #10 violation).
  // Pattern: 'literal' + identifier OR identifier + 'literal'
  if (/'[^']*'\s*\+\s*\w/.test(source) || /\w+\s*\+\s*'[^']*'/.test(source)) {
    hints.push(
      `CRITICAL FIX — String concatenation with '+' is NOT supported ` +
      `(hard [S28]). The '+' operator works only on Real/Integer. For ` +
      `identifier-like strings, either (a) declare a property that holds ` +
      `the FINAL composed value and have the caller construct it ` +
      `(don't compose inside the post-condition), or (b) use a Set<String> ` +
      `with literals and ->includes(...) checks. Do NOT write ` +
      `'prefix_' + accountNumber inside an OCL post.`,
    )
  }
  // Phase 22 — S36 prevention. Detect commitments with predicate
  // references that the source's system-kind doesn't declare. Mining:
  //   1. Collect predicate property references from each commitment.
  //   2. Collect properties on every 'kind <Name> { ... property X }'.
  //   3. Flag references not covered.
  {
    const commitments = []
    const commitRegex = /commitment\s+(\w+)[\s\S]*?\{([\s\S]*?)\}/g
    let m
    while ((m = commitRegex.exec(source)) !== null) {
      const name = m[1]
      const body = m[2]
      const predM = /predicate\s*:\s*([\s\S]*?);/.exec(body)
      if (predM) {
        const refs = [...predM[1].matchAll(/\bself\.(\w+)/g)].map(r => r[1])
        if (refs.length > 0) commitments.push({ name, refs })
      }
    }
    if (commitments.length > 0) {
      // Collect system-kind properties (`kind <X> { ... property Y ... }`)
      const sysProps = new Set()
      const kindRegex = /\bkind\s+\w+[^{]*\{([\s\S]*?)^\}/gm
      let km
      while ((km = kindRegex.exec(source)) !== null) {
        for (const p of km[1].matchAll(/property\s+(\w+)\s*:/g)) {
          sysProps.add(p[1])
        }
      }
      // commitmentId is always commitment-local; ignore.
      sysProps.add("commitmentId")
      const uncovered = []
      for (const c of commitments) {
        for (const r of c.refs) {
          if (!sysProps.has(r)) uncovered.push(`${c.name}.${r}`)
        }
      }
      if (uncovered.length > 0) {
        hints.push(
          `CRITICAL FIX — discharge proofs will be vacuously valid (hard [S36]). ` +
          `These commitment-predicate properties are NOT declared on any 'kind' ` +
          `in this file: ${uncovered.slice(0, 6).join(", ")}${uncovered.length > 6 ? ", ..." : ""}. ` +
          `Either (a) add 'property <name>: Real;' to the system kind for each, ` +
          `or (b) remove the reference from the predicate. The verifier looks ` +
          `up self.<prop> in the commitment's predicate against the SYSTEM KIND, ` +
          `not the commitment.`,
        )
      }
    }
  }
  return hints
}

function formatDiag(errors, source) {
  const lines = source.split(/\r?\n/)
  const out = []
  for (let i = 0; i < errors.length && i < 8; i++) {
    const e = errors[i]
    out.push(
      `[${i + 1}] ${e.stage}${e.code ? " " + e.code : ""}${
        e.line ? " L" + e.line : ""
      }${e.column ? " C" + e.column : ""}: ${e.message}`,
    )
    if (e.line !== undefined) {
      const from = Math.max(1, e.line - 2)
      const to = Math.min(lines.length, e.line + 2)
      for (let l = from; l <= to; l++) {
        const m = l === e.line ? ">" : " "
        out.push(`    ${m} ${String(l).padStart(4)} | ${lines[l - 1] ?? ""}`)
      }
    }
  }
  if (errors.length > 8) out.push(`... ${errors.length - 8} more errors`)
  return out.join("\n")
}

function runZ3(ontoPath, outSubdir) {
  const cli = spawnSync(
    process.execPath,
    [
      resolve(ONTODLS, "dist/cli/gen.js"),
      ontoPath,
      "--out",
      resolve(ONTODLS, "scratch/playbook_out", `${CASE_SNAKE}${OUT_SUFFIX}`, outSubdir),
      "--verify",
      "--resolve-imports",
    ],
    { cwd: ONTODLS, encoding: "utf8", timeout: 90000 },
  )
  return {
    exit: cli.status ?? 1,
    stderr: cli.stderr ?? "",
    stdout: cli.stdout ?? "",
  }
}

// ─── playbook (load it as guide for the LLM) ─────────────────────────
const PLAYBOOK = readFileSync(
  resolve(ONTODLS, "docs/PATTERNS_SDLC.md"),
  "utf8",
)
const exLowpass = readFileSync(
  resolve(ONTODLS, "examples/ardupilot_lowpass.onto"),
  "utf8",
)
const exBaseball = readFileSync(
  resolve(ONTODLS, "examples/baseball.onto"),
  "utf8",
)
const goldCase = JSON.parse(
  readFileSync(resolve(HARNESS_CASES, `${CASE_ID}.json`), "utf8"),
)

// ─── generation per stage ────────────────────────────────────────────
const SYSTEM = `You produce .onto files in the ontodls DSL. UFO-A + OCL.

You MUST follow the SDLC patterns documented below. The playbook is the
canonical reference for which UFO-A stereotype to use for which artifact at
each lifecycle stage.

OCL + DSL hard rules (read carefully — wrong syntax causes parser failure):
- Strings are SINGLE-quoted: 'OPERATIONAL', NEVER "OPERATIONAL".
- NO let/in expressions.
- if/then/else/endif branches are SINGLE EXPRESSIONS; NO semicolons inside.
- modifies clauses list self.<prop> paths; NEVER bare 'self'.
- modifies clauses are NON-EMPTY: at least one path is required. If an
  event modifies nothing (pure rejection / pure observation), simply
  OMIT the modifies clause entirely — do NOT write 'modifies: ;'.
- Each pre/post/modifies/invariant ends with a semicolon.
- Relation stereotypes: ONLY <<memberOf>>, <<mediation>>, <<composition>>.
- A role's "mediated-by" MUST reference a relator (NOT a kind).
- <<mediation>> relation: SOURCE MUST be a relator, TARGET must be a kind/role/agent.
    ✓ relation r: <<mediation>> from MyRelator [1] to MyKind [1..*];
    ✗ relation r: <<mediation>> from KindA to KindB;     // INVALID — source not a relator
  To connect two kinds, use <<composition>> or model the connection
  via a third relator kind that mediates both endpoints.
- <<memberOf>> target MUST be a Kind (a sortal). Categories are NOT
  sortals — use 'specializes' on the kind/subkind declaration to
  express category membership instead of a <<memberOf>> relation.

- MULTI-PARENT SPECIALIZATION uses ONE 'specializes' keyword with a
  COMMA-SEPARATED list. Do NOT repeat the keyword. Example:
    ✓ subkind X specializes A, B, C, D { ... }
    ✗ subkind X specializes A specializes B, C, D { ... }   // PARSE ERROR

- NO REDECLARING IMPORTED DECLARATIONS. If a happening, kind, agent,
  category or commitment was declared in an UPSTREAM stage that you
  IMPORT, do NOT re-declare it in the current stage. Reference it by
  name; refine it by specialization (subkind/subcategory). Example:
    Discovery declares: happening LoanFlow { ... }
    Design must NOT declare: happening LoanFlow { ... }     // E2 duplicate

- TYPE DISCIPLINE in OCL: '+', '-', '*', '/' operate ONLY on Real and
  Integer. There is NO implicit String concatenation:
    ✓ self.x + self.y          // both Real or both Integer
    ✗ self.code + self.label   // both String — S28 error
  If you need to combine textual fields, model them as separate
  properties (no concat operator) or as a single composite String
  field.

- SPECIALIZATION RULES (S21 / S22):
    A 'subkind' can ONLY specialize a 'kind' or another 'subkind' —
    NOT a 'category', 'mixin', or 'role'.
    A 'kind' CAN specialize 'category' (multi-parent allowed: kind X specializes CatA, CatB { … }).
    A 'category' can specialize 'category' or 'mixin'.
  When the system kind in Requirements needs to inherit invariants
  from multiple Discovery/Formalization categories, ALWAYS declare it
  as a 'kind' (not 'subkind') so the category-specialization is legal:
    ✓ kind XSystem specializes CatA, CatB { … }
    ✗ subkind XSystem specializes CatA, CatB { … }   // S21 violation
  In Formalization, an active-rule subkind specializes the BASE KIND only:
    ✓ subkind XSystemFormalized specializes XSystem { event rejectFoo(...) { … } }
  Express category memberships of the formalized subkind via the
  base kind's own specializes clause (they inherit downward).

- EVENT return type syntax uses a COLON, NOT the keyword 'returns':
    ✓ event deliverInsulin(dose: Real): Real { ... }
    ✗ event deliverInsulin(dose: Real) returns Real { ... }    // NOT VALID
  Events without a return type omit both the colon and the type.

- SUPPORTED OCL COLLECTION OPERATORS (others FAIL with S26):
    ->size(), ->isEmpty(), ->notEmpty(), ->includes(x),
    ->forAll(v | ...), ->exists(v | ...),
    ->select(v | ...), ->reject(v | ...), ->collect(v | ...)
  Do NOT use ->including(), ->excluding(), ->union(), ->intersection(),
  ->asSet(), ->any(), ->one(), ->iterate() — they are NOT in the dialect.
  To express "add x to set s" use an invariant/post like
    self.s->includes(x) and (self.s@pre->forAll(y | self.s->includes(y)))
  or model the set as a counted property the event increments.

- REFINEMENT TRACEABILITY uses the FIRST-CLASS 'refines:' clause
  on event declarations — NOT comment annotations. The clause goes
  AFTER the return type and BEFORE the body's '{':

    event deliverInsulin(sugar: Real): Real
      refines insulin_pump_discovery::CorrectDoseCommitment,
              insulin_pump_requirements::InsulinPumpSystem.deliverInsulin {
        pre: ...;
        post: ...;
      }

  Two accepted target shapes (use BOTH where appropriate):
    <namespace>::<CommitmentName>     ← commitment discharge edge
    <namespace>::<Type>.<eventName>   ← Liskov / decomposition edge

  EVERY event that refines an upstream commitment or implements an
  upstream parent event MUST declare it via this clause. Comment
  annotations (// refines: ...) still parse but are LEGACY — the
  inter-stage verifier prefers the structured clause and will
  detect missing edges via W34/W37.

- COMMITMENT syntax (subtle — the parser requires this exact shape):
    commitment <Name> (specializes <Parent>)?
      debitor: <AgentIdentifier>
      creditor: <AgentIdentifier> {
        identity: <propName>;
        property <propName>: String;
        property <other>: <Type>;
        predicate: <ocl-boolean-expression>;
      }
  debitor/creditor go in the HEADER, NOT as properties inside braces.
  They must be Identifiers resolving to declared agent (or kind) names.

- Output ONLY the .onto file content — no markdown fences, no prose
  preamble. The very first non-blank line MUST be: schema "onto/0.1";

PLAYBOOK FOLLOWS (cite by stage section):

${PLAYBOOK}

REFERENCE EXAMPLES (study syntax):

--- ardupilot_lowpass.onto ---
${exLowpass}

--- baseball.onto ---
${exBaseball}`

async function generateStage(stageName, stageBrief, prevStages) {
  const prevContext = prevStages
    .map(
      (s) =>
        `--- previous stage: ${s.name} (${s.path}) ---\n${s.content}\n`,
    )
    .join("\n")

  const userPrompt = `Produce \`${stageName}.onto\` for the ${goldCase.systemName} domain.

DOMAIN MATERIAL:
- System: ${goldCase.systemName}
- Constraints: ${goldCase.visionConstraints.join(" | ")}
- Goals: ${goldCase.goals.map((g) => `${g.code}: ${g.title}${g.successMeasure ? " (" + g.successMeasure + ")" : ""}`).join(" / ")}
- Glossary: ${goldCase.glossary.map((t) => t.term + "=" + t.definition).join(" / ")}
- Conversation: ${goldCase.conversation.map((t) => "[" + t.role + "] " + t.content).join(" / ")}

STAGE BRIEF:
${stageBrief}

${
  prevStages.length > 0
    ? `PREVIOUS STAGES (you must import + refine these):\n${prevContext}`
    : ""
}

Emit the .onto for ${stageName}. Use namespace ${CASE_SNAKE}_${stageName}.${
    prevStages.length > 0
      ? ` Import previous stages with relative paths (e.g. import "./discovery.onto";).`
      : ""
  }`

  let messages = [
    { role: "system", content: SYSTEM },
    { role: "user", content: userPrompt },
  ]
  for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_STAGE; attempt++) {
    console.log(`  attempt ${attempt}/${MAX_ATTEMPTS_PER_STAGE}…`)
    const t0 = Date.now()
    const text = stripFences(await callLLM(messages))
    console.log(`    ${text.length} chars in ${Date.now() - t0}ms`)
    const outPath = resolve(OUT_DIR, `${stageName}.onto`)
    writeFileSync(outPath, text + "\n")

    // Two-tier validation:
    //   1. parse() with validateSemantics — but ONLY trust SYNTAX errors.
    //      Semantic errors are unreliable here because parse() is
    //      single-file and cross-namespace imports aren't resolved.
    //   2. CLI gen.js --verify — multi-file semantic + Z3. Authoritative
    //      for any file with imports.
    const result = parse(text, { validateSemantics: true })
    const syntaxErrors = result.errors.filter(
      (e) => e.stage === "lex" || e.stage === "parse" ||
             e.stage === "extract" || e.stage === "build",
    )
    if (syntaxErrors.length > 0) {
      const byStage = syntaxErrors.reduce(
        (a, e) => ((a[e.stage] = (a[e.stage] ?? 0) + 1), a),
        {},
      )
      console.log(
        `    syntax failed: ${syntaxErrors.length} errors — ${Object.entries(
          byStage,
        )
          .map(([s, n]) => s + ":" + n)
          .join(", ")}`,
      )
      messages.push({ role: "assistant", content: text })
      const hints = smartHints(text)
      messages.push({
        role: "user",
        content:
          `Diagnostics:\n${formatDiag(syntaxErrors, text)}\n\n` +
          (hints.length > 0
            ? `Smart hints:\n  • ${hints.join("\n  • ")}\n\n`
            : "") +
          `Fix every error and emit the FULL corrected ${stageName}.onto.`,
      })
      continue
    }
    // Syntax clean — delegate semantic + Z3 to the multi-file CLI.
    const z = runZ3(outPath, stageName)
    if (z.exit === 0) {
      console.log(`    ✓ verified (parse + CLI semantic + Z3)`)
      return { name: stageName, path: outPath, content: text }
    }
    console.log(`    CLI verify failed exit=${z.exit}`)
    // CLI prints diagnostics to STDOUT (the `diagnostics in <file>:` block)
    // and Z3 warnings to STDERR. Combine both for the repair prompt.
    const cliDiag = (z.stdout + "\n" + z.stderr).trim()
    const hintsCli = smartHints(text)
    messages.push({ role: "assistant", content: text })
    messages.push({
      role: "user",
      content:
        `ontodsl --verify --resolve-imports failed (multi-file semantic + Z3):\n${cliDiag.slice(0, 2000)}\n\n` +
        (hintsCli.length > 0
          ? `Smart hints:\n  • ${hintsCli.join("\n  • ")}\n\n`
          : "") +
        `Fix every error and emit the FULL corrected ${stageName}.onto. Imported types from previous stages are available by their unqualified names — do NOT redeclare them as local subkinds.`,
    })
  }
  console.log(`  ✗ ${stageName} did not converge`)
  return null
}

// ─── stage briefs ─────────────────────────────────────────────────────
const briefs = {
  discovery: `Discovery stage — capture the PROBLEM space:
- Stakeholders as 'agent' kinds. Each stakeholder discovered in the
  conversation / goals / glossary becomes one agent.
- ALSO declare a vendor/dev-team agent (e.g. <Domain>Vendor or
  <Domain>Provider) that will be the DEBITOR of every stakeholder
  commitment. The system kind doesn't exist yet at Discovery, so we
  cannot use it as debitor.
- Stakeholder concerns and hard goals as 'commitment' declarations.
- COMMITMENT SYNTAX is special: the debitor and creditor go in the
  HEADER (not inside the braces) and refer to AGENT IDENTIFIERS:
      commitment <SomeName>
        debitor: <DomainVendor>
        creditor: <Stakeholder> {
          identity: commitmentId;
          property commitmentId: String;
          property <numericThreshold>: Real;
          predicate: self.<numericThreshold> > 0.0;
        }
- The 'predicate:' clause inside the body is a Z3-checkable OCL Boolean
  expression. Use it for the formal discharge obligation.
- ★ CRITICAL — DISCHARGE PROOF SUBSTITUTION RULE ★
  The verifier translates the commitment's predicate against the
  EVENT-OWNER type (the system kind), NOT the commitment itself.
  So 'self.<numericThreshold>' in the predicate is looked up on the
  SYSTEM KIND, not on the commitment.
  PRACTICAL RULE: any property name referenced inside 'predicate:'
  must ALSO be a property of the system kind that Requirements will
  declare. Use names like 'safeMaxDoseUnits', 'maxLatencyMs',
  'minBalance' that will appear identically on the system kind in
  Requirements. Otherwise the discharge proof becomes vacuously
  valid and the verifier emits [S36] (hard error).
  EXAMPLE — correct:
      commitment CorrectDose
        debitor: PumpVendor
        creditor: Patient {
          identity: commitmentId;
          property commitmentId: String;
          property safeMaxDoseUnits: Real;     // ← appears on system
          predicate: self.safeMaxDoseUnits > 0.0;
        }
  Then in Requirements:
      kind InsulinPumpSystem {
        property safeMaxDoseUnits: Real;       // ← same name
        ...
      }
  If a commitment-local concept does NOT have a matching system
  property (e.g. 'commitmentId', 'auditTrailRetentionDays'), do
  NOT reference it in 'predicate:' — leave the predicate constrained
  to system-visible properties only.
- Use 'category' for constraint goals (invariants any system kind must inherit).
- CONSTRAINT CATEGORIES use the MEMBER-QUANTIFIED form when their
  invariants constrain the state of the member kind (typical case for
  Discovery's hard-goal categories). The 'where' clause introduces a
  binding to the member, allowing reference to its properties:

      category DoseSafetyConstraints where bearer: InsulinPumpSystem {
        invariants {
          bearer.safeMaxDoseUnits > 0.0;
          bearer.lastDeliveredDose <= bearer.safeMaxDoseUnits;
        }
      }

  The Z3 verifier checks that any kind specializing the category
  satisfies these invariants. If a member's invariants don't entail
  the category's, the verifier emits S35 (hard violation).
  Note: 'bearer' is the conventional binding name but any identifier
  works. The bearer's type should be the EXPECTED member kind from
  Requirements stage (cross-stage reference is fine — the verifier
  resolves it after merge).
- Use 'happening' for domain stories (the main domain flows).
- Use 'kind' for glossary terms (each becomes a sortal with identity).
- DO NOT model the system kind here yet — that's Requirements stage.
- DO NOT declare events on stakeholders (they are agents, not the system).
- ★ RESERVED KEYWORDS — DO NOT USE AS IDENTIFIERS ★
  The following are KEYWORDS in the DSL grammar and CANNOT be used
  as property names, declaration names, or parameter names. Using
  them produces unrecoverable parse errors:
    quantity, category, phase, mode, role, success, body, reads,
    writes, default, query, effects, failure, trigger, happening,
    relation, relator, mediates, internal, override, renames, where,
    of, to, from, as, identity, modifies, invariants, post, pre
  Common renames: 'quantity' → 'qty' or 'itemCount'; 'category' →
  'classification' or 'kind_'; 'phase' → 'currentPhase'; 'role' →
  'userRole' or 'assignedRole'; 'body' → 'messageBody'; 'success' →
  'isSuccessful'; 'mode' → 'operatingMode'; 'default' → 'fallback'.
  Append '_' if you need to keep the English word as close as
  possible (e.g. role_, category_).
- OUTPUT MUST BE ONLY THE .onto FILE CONTENT — no prose preamble, no
  markdown fences. The very first non-blank line must be: schema "onto/0.1";`,
  requirements: `Requirements stage — system as black box:
- Declare ONE kind named after the system (e.g. <DomainName>System)
  that specializes the constraint categories from discovery.
- ★ MIRROR COMMITMENT PROPERTIES ON THE SYSTEM KIND ★
  Before writing events, scan Discovery's commitments. For EVERY
  property declared INSIDE a commitment body that the commitment's
  predicate references (e.g. 'property minBalance: Real;' with
  'predicate: self.minBalance >= 0'), DECLARE THE SAME PROPERTY
  WITH THE SAME NAME on the system kind. Skip 'commitmentId'.
- ★ CONSTANT-VS-PROPERTY MATCHING ★
  If a commitment's predicate uses a NUMERIC CONSTANT (e.g.
  'predicate: if self.reservoirUnits < 20.0 then ...'), the
  event's post-condition that discharges this commitment must
  use THE SAME CONSTANT in the corresponding test — NOT a
  property reference that may hold a different value. Example
  of the WRONG pattern (triggers hard [S34]):
      predicate: if self.reservoirUnits < 20.0 then self.alarm ...
      post: self.alarm = (self.reservoirUnits@pre < self.threshold)
  The verifier CANNOT prove the implication: 'threshold' may be
  15 while predicate hardcodes 20. Two corrections:
    (a) Replace the constant with the property in BOTH places:
        predicate: if self.reservoirUnits < self.lowReservoirThreshold
                   then self.alarm else true endif;
        post: self.alarm = (self.reservoirUnits@pre < self.lowReservoirThreshold);
    (b) OR keep both as the same constant 20.0:
        post: self.alarm = (self.reservoirUnits@pre < 20.0);
  Choose (a) when the threshold is a real spec parameter the user
  configures; choose (b) when it's a hard-coded safety limit.
- ★ AVOID TRIVIALLY-TRUE PREDICATES ★
  A predicate like 'predicate: self.commitmentId <> null' or
  'predicate: true' is structurally trivial. Even when the post
  sets 'self.commitmentId = "discharged"', the verifier needs the
  post to LOGICALLY ENTAIL the predicate, and a trivial predicate
  contributes nothing to the discharge proof's information content.
  Write predicates that constrain SUBSTANTIVE properties
  (numeric bounds, booleans tied to state transitions, …) —
  the same properties the event will affect via 'modifies:'.
  Example: if Discovery had
      commitment NoOverdraft ... {
        property minBalance: Real;
        predicate: self.minBalance >= 0;
      }
  then Requirements MUST declare
      kind BankingTransactionSystem
        specializes ... {
        property minBalance: Real;
        ...
      }
  Otherwise the discharge proof becomes vacuously valid and the
  verifier emits hard [S36]. This is the #1 cause of repair-loop
  failure — front-load it.
- Each Functional Requirement is an EVENT on the system kind with
  pre/post/modifies.
- Each event's post-condition should IMPLY the predicate of the
  corresponding discovery commitment (so the inter-stage refinement
  verifier can prove discharge). Since both predicate and post
  now reference the same property name on the same kind, the
  implication is checkable in Φ_dec.
- Use plain Real/Integer/Boolean properties (with invariants
  bounding them) for non-functional concerns (latency budgets,
  thresholds, intervals). The 'quality' stereotype requires an
  'of <Bearer>' clause — for simple NFRs as scalar bounds, inline
  properties + invariants on the system kind are simpler.
- USE THE STRUCTURED 'refines:' CLAUSE on every event that discharges
  a discovery commitment:
    event deliverInsulin(...): Real
      refines insulin_pump_discovery::CorrectDoseCommitment {
        pre: ...;
        post: result <= self.safeMaxDose;
      }
  Multiple targets allowed via comma-separation.`,
  formalization: `Formalization stage — what the WORLD imposes:
- Regulatory / legal / compliance anchors as 'category' kinds with
  documentary invariants (e.g. GdprArticle5Compliant, Iec62304ClassC,
  Pci DssCompliant — pick what's relevant to this domain).
- ACTIVE business rules as new events on a subkind of the system kind
  (e.g. <DomainName>SystemFormalized specializes <DomainName>System)
  that ADDS rejection / guard events without overriding parent events.
- PASSIVE assumptions as a 'kind' (e.g. FormalAssumptionRecord) with
  documentary properties — NOT as events. Use comment annotations
  '// @assumption ASSUME-N:' for traceability.
- Physical / domain-logical invariants as MEMBER-QUANTIFIED
  categories. Example:

      category PhysicallyPlausibleReadings where bearer: SensorKindOrSimilar {
        invariants {
          bearer.minValue >= 0.0;
          bearer.maxValue > bearer.minValue;
        }
      }

  Then have the formalized subkind (or the original system kind)
  specialize the category. The verifier proves the membership
  invariant entailment (S35 if violated).
- DO NOT regenerate the system kind — extend it via 'subkind X
  specializes <DomainName>System' that ADDS events.`,
  design: `Design stage — decompose into components:
- Each component is a 'kind' (one per cohesive responsibility — e.g.
  one per noun-phrase that owns state in the conversation).
- Components are SIBLINGS, NOT subkinds of the system kind — the
  relationship is decomposition, not Liskov.
- ★ COMPONENT EVENTS DISCHARGING COMMITMENTS — INHERIT PREDICATE PROPERTIES ★
  If a Design component event has a 'refines:' target that traces
  back to a Discovery commitment, the component kind MUST declare
  every property the commitment's predicate references. Example:
    Discovery had:
      commitment NoOverdraft ... { property minBalance: Real;
                                   predicate: self.minBalance >= 0; }
    Requirements added: kind BankingSystem { property minBalance: Real; ... }
    Design component must ALSO declare:
      kind LedgerComponent {
        property minBalance: Real;     // ← REQUIRED for discharge proof
        property ledgerId: String;
        ...
      }
  Without this, the verifier emits hard [S36] (vacuous discharge).
  Mirror EVERY commitment-predicate-property to EVERY component kind
  whose events refine that commitment's chain.
- USE THE STRUCTURED 'refines:' CLAUSE on every component event that
  implements a Requirements (or Formalization) parent event:
    event takeReading(value: Real)
      refines insulin_pump_requirements::InsulinPumpSystem.deliverInsulin {
        pre: ...;
        post: ...;
      }
  Each component event SHOULD declare AT LEAST one such 'refines:'
  target so the inter-stage verifier can audit modifies-closure and
  property correspondence (Obligation 4 / W38 / W39).
- Interfaces between components are 'relator' kinds; the relator
  mediates two 'role' kinds (one per component endpoint).
- A component event ONLY modifies its own properties (encapsulation).
- Use 'happening' for data flows between components (one happening
  per end-to-end story whose steps cross component boundaries).`,
}

// ─── orchestrate ──────────────────────────────────────────────────────
console.log(`\nGenerating 4 stages for ${goldCase.systemName} (case=${CASE_ID})…\n`)
console.log(`  provider: ${PROVIDER}  model: ${MODEL}  max-attempts/stage: ${MAX_ATTEMPTS_PER_STAGE}`)
console.log(`  out dir: ${OUT_DIR}`)
console.log(`  namespace pattern: ${CASE_SNAKE}_<stage>`)
const generated = []

for (const stage of ["discovery", "requirements", "formalization", "design"]) {
  console.log(`\n────── STAGE: ${stage} ──────`)
  const outPath = resolve(OUT_DIR, `${stage}.onto`)
  // Resume support: if the .onto already exists and verifies clean, skip it.
  // Allows partial re-runs after fixing a downstream stage. We only check
  // syntax-level parse (semantic+Z3 deferred to the multi-file CLI which
  // correctly resolves imports).
  try {
    const existing = readFileSync(outPath, "utf8")
    const r = parse(existing, { validateSemantics: false })
    if (r.errors.length === 0) {
      const z = runZ3(outPath, stage)
      if (z.exit === 0) {
        console.log(`  ⤿ skipping (already verified at ${outPath})`)
        generated.push({ name: stage, path: outPath, content: existing })
        continue
      }
    }
  } catch {
    // file doesn't exist or read failed — fall through to generation
  }
  const result = await generateStage(stage, briefs[stage], generated)
  if (!result) {
    console.log(
      `\n✗ ABORTED at stage ${stage}. Cannot continue without it as upstream context.`,
    )
    process.exit(1)
  }
  generated.push(result)
}

console.log(`\n✓ All 4 stages generated and verified.`)
console.log(`Files in ${OUT_DIR}:`)
for (const g of generated) console.log(`  - ${g.name}.onto`)
console.log(`(code stage already exists as examples/ardupilot_lowpass.onto pattern)`)
