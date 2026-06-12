/**
 * Phase 26 prototype — contract-driven implementation synthesis.
 *
 * Hypothesis (user's idea): a cheap LLM can implement an event's body
 * given ONLY the local contract (pre/post/invariants + schema + helper
 * signatures), without seeing the rest of the project. If true,
 * spec-driven coding scales cost much better than whole-project context.
 *
 * Procedure:
 *   1. Pick 5 hand-selected TODO events spanning complexity.
 *   2. Build a ~200-line prompt with: signature, contract, table schema,
 *      helper signatures, instruction.
 *   3. Call DeepSeek-chat (cheap).
 *   4. Extract the function body from the response.
 *   5. Smoke-check: does it TypeScript-compile? does it call validate*?
 *   6. Manual review of correctness for honest report.
 *
 * Honest measurements reported: success rate, iteration count, cost.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")
const ENV_PATH = "C:/Users/Rene Meza/Documents/MisProyectos/ontodesign-experiment (1)/ontodesign-experiment/.env"

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
    body: JSON.stringify({
      model: "deepseek-chat",
      max_tokens: maxTokens,
      messages,
    }),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`DeepSeek HTTP ${res.status}: ${body.slice(0, 300)}`)
  }
  const j = await res.json()
  const usage = j.usage ?? {}
  return {
    content: j.choices?.[0]?.message?.content ?? "",
    usage: {
      prompt: usage.prompt_tokens ?? 0,
      completion: usage.completion_tokens ?? 0,
    },
  }
}

// ─── 5 candidate events (handpicked from bulk-codegen TODOs) ──────────

const CANDIDATES = [
  {
    id: "recoverPendingTransfer",
    domain: "online_banking",
    owner: "OnlineBankingSystem",
    signature: `async function recoverPendingTransfer(__selfId: string, shouldComplete: boolean): Promise<void>`,
    pre: [
      "self.transferState = 'PENDING'",
      "self.pendingSourceBalance >= 0.0",
      "self.pendingDestinationBalance >= 0.0",
    ],
    post: [
      "self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'",
      "self.sourceBalance >= 0.0",
      "self.destinationBalance >= 0.0",
    ],
    tableConst: "onlineBankingSystems",
    pkColumn: "systemId",
    schema: `onlineBankingSystems: { systemId: text PK, sourceBalance: real, destinationBalance: real, pendingSourceBalance: real, pendingDestinationBalance: real, transferState: text (one of 'IDLE'|'PENDING'|'COMPLETED'|'ROLLED_BACK'), currentTransferId: text, currentAmount: real, journalWritten: boolean, customerNotified: boolean }`,
    note: "If shouldComplete then transition to COMPLETED with the pending balances becoming actual; else ROLLED_BACK with pending balances discarded (current balances unchanged).",
  },
  {
    id: "addBackorder",
    domain: "inventory_warehouse",
    owner: "BackorderQueue",
    signature: `async function addBackorder(__selfId: string, sku: string, qty: number): Promise<void>`,
    pre: [
      "sku <> null",
      "qty > 0.0",
      "not self.backorders->exists(bo | bo.sku = sku and bo.qty = qty)",
      "self.isBackorderable = sku.isBackorderable",
    ],
    post: [
      "self.backorders->size() = self.backorders@pre->size() + 1",
    ],
    tableConst: "backorderQueues",
    pkColumn: "queueId",
    schema: `backorderQueues: { queueId: text PK, totalCount: integer, isBackorderable: boolean }
backorderItems: { id: text PK, queueId: text FK→backorderQueues, sku: text, qty: real, createdAt: timestamp }`,
    note: "self.backorders is a one-to-many: queue has many BackorderItem rows. Adding a backorder = INSERT into backorderItems + increment totalCount on queue.",
  },
  {
    id: "bookAppointment",
    domain: "appointment_clinic",
    owner: "AppointmentBooker",
    signature: `async function bookAppointment(__selfId: string, patientId: string, clinicianId: string, serviceName: string, windowStart: number, windowEnd: number, slotStart: number, slotEnd: number): Promise<boolean>`,
    pre: [
      "patientId <> null",
      "clinicianId <> null",
      "serviceName <> null",
      "slotStart >= 0.0",
      "slotEnd > slotStart",
      "slotStart >= windowStart",
      "slotEnd <= windowEnd",
    ],
    post: [
      "result = true implies (a new appointment row exists for (patientId, clinicianId, slotStart, slotEnd))",
      "result = false implies (a conflicting appointment already existed: another appointment for the SAME clinician overlapping [slotStart, slotEnd])",
    ],
    tableConst: "appointmentBookers",
    pkColumn: "bookerId",
    schema: `appointmentBookers: { bookerId: text PK }
appointments: { appointmentId: text PK, bookerId: text FK, patientId: text, clinicianId: text, serviceName: text, slotStart: integer, slotEnd: integer, status: text (one of 'CONFIRMED'|'CANCELLED') }`,
    note: "Returns true on success, false on conflict. Conflict = another CONFIRMED appointment for same clinician with overlapping slot. No double-booking the clinician.",
  },
  {
    id: "rejectMotionCommand",
    domain: "factory_plc",
    owner: "FailsafeStateManager",
    signature: `async function rejectMotionCommand(__selfId: string, commandId: string, commandType: string): Promise<void>`,
    pre: [
      "self.isFailsafeActive",
      "self.rejectionActive",
      "commandId <> null",
      "commandType <> null",
    ],
    post: ["true"],
    tableConst: "failsafeStateManagers",
    pkColumn: "managerId",
    schema: `failsafeStateManagers: { managerId: text PK, isFailsafeActive: boolean, rejectionActive: boolean, rejectedCommandCount: integer }
motionCommandRejections: { id: text PK, managerId: text FK, commandId: text, commandType: text, rejectedAt: timestamp }`,
    note: "Post is trivially true — the work is the side effect: log a rejection record + increment counter. Use this case to test trivial-post handling.",
  },
  {
    id: "readSoCAndReserve",
    domain: "delivery_drone",
    owner: "BatteryManager",
    signature: `async function readSoCAndReserve(__selfId: string): Promise<number>`,
    pre: [],
    post: [
      "result >= 0.0",
      "result <= 1.0",
      "self.soc = result",
      "self.safeReserveRatio >= 0.20",
    ],
    tableConst: "batteryManagers",
    pkColumn: "managerId",
    schema: `batteryManagers: { managerId: text PK, soc: real (0.0-1.0), safeReserveRatio: real, lastReadAt: timestamp }`,
    note: "Reads the SoC from a sensor (simulate: read from row, return same value, update lastReadAt). Sets self.soc to the returned value. Post asserts result range AND that safeReserveRatio invariant holds.",
  },
]

// ─── Prompt template ──────────────────────────────────────────────────

function buildPrompt(c) {
  const preBlock = c.pre.length > 0 ? c.pre.map((p) => `  pre: ${p}`).join("\n") : "  (no pre-conditions)"
  const postBlock = c.post.map((p) => `  post: ${p}`).join("\n")
  const system = `You are a precise TypeScript implementer. Given an event signature, its formal contract (pre/post/invariants), and the relevant database schema, you produce ONE implementation of the function body.

Constraints:
- Use Drizzle ORM (db, eq, sql, and). The schema tables are already imported.
- Wrap mutations in db.transaction(async (tx) => { ... }).
- Honor pre-conditions: if violated, throw new InvariantViolation(context, [\`message\`]).
- Honor post-conditions: design the mutation so the post holds after.
- Return the value the signature requires.
- DO NOT explain. Output ONLY a single TypeScript code block containing the FULL function body (between the curly braces of the signature shown).
- Keep imports minimal — assume db, eq, sql, and, randomUUID, the tableConst, and InvariantViolation are available.`

  const user = `## Event contract

Owner kind: ${c.owner}
Signature:
\`\`\`typescript
${c.signature}
\`\`\`

Pre-conditions (formal):
${preBlock}

Post-conditions (formal):
${postBlock}

## Database schema (Drizzle tables, relevant subset)

\`\`\`
${c.schema}
\`\`\`

## Notes from the architect (informal hints)

${c.note}

## Available helpers (already imported)

\`\`\`typescript
import { db } from "../db/index.js";
import { ${c.tableConst} } from "../db/schema.js";
import { eq, sql, and } from "drizzle-orm";
import { randomUUID } from "node:crypto";

export class InvariantViolation extends Error {
  constructor(public readonly context: string, public readonly violations: readonly string[]) {
    super(\`Invariant violation in \${context}: \${violations.join("; ")}\`);
    this.name = "InvariantViolation";
  }
}
\`\`\`

## Your task

Output the FULL function body for the signature above. Replace the placeholder \`{ /* body */ }\` with your implementation. Output ONLY the complete function (signature + body), in a single \`\`\`typescript code block.`

  return [
    { role: "system", content: system },
    { role: "user", content: user },
  ]
}

function stripCodeFence(text) {
  let t = text.trim()
  // Strip opening ``` or ```typescript / ```ts.
  t = t.replace(/^```(?:typescript|ts)?\s*\n?/m, "")
  // Strip closing ```.
  t = t.replace(/```\s*$/m, "")
  return t.trim()
}

function looksLikeValidTs(code, expectedFnName) {
  if (!code.includes(`function ${expectedFnName}`)) return false
  // Must have db.transaction or direct return (for trivial cases).
  const hasMutationOrReturn = /db\.transaction\b|return\s+/i.test(code)
  if (!hasMutationOrReturn) return false
  // Balanced braces (rough check).
  let depth = 0
  for (const ch of code) {
    if (ch === "{") depth++
    else if (ch === "}") depth--
    if (depth < 0) return false
  }
  return depth === 0
}

// ─── Run ──────────────────────────────────────────────────────────────

const OUT_DIR = resolve(ONTODLS, "scratch/phase26_out")
mkdirSync(OUT_DIR, { recursive: true })

const results = []
let totalPromptTokens = 0
let totalCompletionTokens = 0
let attemptCount = 0

for (const c of CANDIDATES) {
  console.log(`\n──── ${c.id} (${c.domain}) ────`)
  const messages = buildPrompt(c)
  // Single shot for honest first measurement.
  attemptCount += 1
  let result
  try {
    result = await callDeepSeek(messages, 4000)
  } catch (e) {
    console.log(`  ✗ API error: ${e.message}`)
    results.push({ id: c.id, status: "api_error", error: e.message })
    continue
  }
  totalPromptTokens += result.usage.prompt
  totalCompletionTokens += result.usage.completion
  const code = stripCodeFence(result.content)
  const isValid = looksLikeValidTs(code, c.id)
  const outPath = resolve(OUT_DIR, `${c.id}.ts`)
  writeFileSync(outPath, code, "utf8")
  console.log(`  prompt tokens: ${result.usage.prompt}`)
  console.log(`  completion tokens: ${result.usage.completion}`)
  console.log(`  syntactically plausible: ${isValid ? "yes" : "no"}`)
  console.log(`  wrote ${outPath}`)
  results.push({
    id: c.id,
    domain: c.domain,
    promptTokens: result.usage.prompt,
    completionTokens: result.usage.completion,
    syntacticallyPlausible: isValid,
    outPath,
  })
}

// ─── Cost estimate (DeepSeek pricing) ─────────────────────────────────
// As of writing: deepseek-chat $0.27/M input, $1.10/M output.
const costInput = (totalPromptTokens / 1_000_000) * 0.27
const costOutput = (totalCompletionTokens / 1_000_000) * 1.10
const totalCost = costInput + costOutput

console.log(`\n═══════════ SUMMARY ═══════════`)
console.log(`Candidates:           ${CANDIDATES.length}`)
console.log(`Attempts:             ${attemptCount}`)
console.log(`Syntactically valid:  ${results.filter((r) => r.syntacticallyPlausible).length}/${CANDIDATES.length}`)
console.log(`Total prompt tokens:  ${totalPromptTokens}`)
console.log(`Total completion:     ${totalCompletionTokens}`)
console.log(`Estimated cost:       $${totalCost.toFixed(4)}`)
console.log(`Avg cost / event:     $${(totalCost / CANDIDATES.length).toFixed(4)}`)
console.log(`Wrote bodies to:      ${OUT_DIR}`)

writeFileSync(
  resolve(OUT_DIR, "summary.json"),
  JSON.stringify({ results, totalPromptTokens, totalCompletionTokens, totalCost }, null, 2),
  "utf8",
)
