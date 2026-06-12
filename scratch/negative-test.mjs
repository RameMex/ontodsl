/**
 * Bloque 2 negative test.
 *
 * Takes the verified insulin_pump .onto files, applies surgical
 * mutations that should violate each refinement obligation, and
 * confirms Bloque 2's CLI emits the corresponding S## / W## code.
 *
 * Why surgical mutation rather than hand-crafted broken files:
 *   The verified baseline is large (1295 lines, 4 stages). We want
 *   each mutation to be ONE local change against an otherwise-known-good
 *   model — so when Bloque 2 reports a violation, we know which one
 *   our mutation triggered. A hand-crafted broken file would mix the
 *   intended violation with incidental noise.
 *
 * Each test:
 *   1. Copy insulin_pump/*.onto into scratch/negative_test/<id>/.
 *   2. Apply the mutation to a specific stage's file.
 *   3. Run `ontodsl gen.js design.onto --verify --resolve-imports`.
 *   4. Search the combined stdout+stderr for the EXPECTED code.
 *   5. PASS if the code appears; FAIL if it does not.
 *
 * The PASS bar is "expected code appears" — we don't require the
 * test to be the SOLE diagnostic, because some mutations may cascade
 * (e.g. breaking an invariant might trip both S35 and W34_partial).
 * The negative test answers "does the verifier catch this?", not
 * "does it produce a perfectly minimal diagnostic set?".
 */

import {
  copyFileSync, mkdirSync, readFileSync, writeFileSync, readdirSync, unlinkSync,
} from "node:fs"
import { spawnSync } from "node:child_process"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")
const OUT_ROOT = resolve(ONTODLS, "scratch/negative_test")
mkdirSync(OUT_ROOT, { recursive: true })

/** Copy every .onto from the chosen baseline into <OUT_ROOT>/<id>/. */
function freshCopy(id, baselineDir) {
  const dst = resolve(OUT_ROOT, id)
  mkdirSync(dst, { recursive: true })
  for (const f of readdirSync(baselineDir)) {
    if (f.endsWith(".onto"))
      copyFileSync(resolve(baselineDir, f), resolve(dst, f))
  }
  return dst
}

function readStage(dir, stage) {
  return readFileSync(resolve(dir, `${stage}.onto`), "utf8")
}
function writeStage(dir, stage, text) {
  writeFileSync(resolve(dir, `${stage}.onto`), text)
}

function runBloque2(dir) {
  const cli = spawnSync(
    process.execPath,
    [
      resolve(ONTODLS, "dist/cli/gen.js"),
      resolve(dir, "design.onto"),
      "--out",
      resolve(dir, "_out"),
      "--verify",
      "--resolve-imports",
    ],
    { cwd: ONTODLS, encoding: "utf8", timeout: 180000 },
  )
  return {
    exit: cli.status ?? 1,
    out: (cli.stdout ?? "") + "\n" + (cli.stderr ?? ""),
  }
}

const INSULIN_BASE = resolve(ONTODLS, "examples/insulin_pump")
const MEETING_BASE = resolve(ONTODLS, "examples/meeting_scheduler")

const TESTS = [
  {
    id: "S34_break_commitment_discharge",
    baseline: INSULIN_BASE,
    description:
      "Mutate CorrectDoseCommitment.predicate to require something the discharging event's post does NOT establish — expect S34.",
    mutate: (dir) => {
      // The verified predicate is `self.safeMaxDoseUnits > 0.0 and ...`.
      // Replace the first conjunct with `safeMaxDoseUnits > 9999.0`. The
      // event's invariant says `> 0.0` and its post doesn't bound
      // safeMaxDoseUnits any tighter, so the SAT search finds a state
      // (safeMaxDoseUnits = 1.0) satisfying premises but not predicate.
      const src = readStage(dir, "discovery")
      const mutated = src.replace(
        /predicate:\s*self\.safeMaxDoseUnits\s*>\s*0\.0/,
        "predicate: self.safeMaxDoseUnits > 9999.0",
      )
      if (mutated === src) throw new Error("mutation marker not found")
      writeStage(dir, "discovery", mutated)
    },
    expect: "S34",
  },
  {
    // Phase 19 / v0.6 — O3 is now ACTIVE thanks to member-quantified
    // categories. We build a synthetic .onto inline with a
    // bearer-bound category and a member kind that violates its
    // invariant; the verifier should fire S35.
    id: "S35_member_quantified_violation",
    baseline: INSULIN_BASE, // unused — we overwrite with our own .onto below
    description:
      "Construct a member-quantified category `where bearer: SensorKind { bearer.max <= 1000.0 }` and a kind `BrokenSensor` whose invariant forces `maxPlausible = 10000.0`. The category invariant must fail; the verifier must emit S35.",
    mutate: (dir) => {
      // Discard the insulin-pump baseline copies; write a single
      // synthetic file that exercises O3.
      for (const f of readdirSync(dir)) {
        if (f.endsWith(".onto")) unlinkSync(resolve(dir, f))
      }
      writeStage(
        dir,
        "design",
        `schema "onto/0.1";
namespace o3_negtest;

category PhysicallyPlausible where bearer: SensorKind {
  invariants {
    bearer.minPlausible >= 0.0;
    bearer.maxPlausible > bearer.minPlausible;
    bearer.maxPlausible <= 1000.0;
  }
}

kind SensorKind specializes PhysicallyPlausible {
  identity: sid;
  property sid: String;
  property minPlausible: Real;
  property maxPlausible: Real;
  invariants {
    self.minPlausible = 0.0;
    self.maxPlausible = 1000.0;
  }
}

kind BrokenSensor specializes PhysicallyPlausible {
  identity: bid;
  property bid: String;
  property minPlausible: Real;
  property maxPlausible: Real;
  invariants {
    self.minPlausible = 0.0;
    self.maxPlausible = 10000.0;
  }
}
`,
      )
    },
    expect: "S35",
  },
  {
    id: "W38_remove_component_modifies_meeting",
    baseline: MEETING_BASE,
    description:
      "Strip `requestStatus` from RequestManager.openRequest's modifies — the parent MeetingSchedulerSystem.requestMeeting still modifies it. Expect W38 with `requestStatus` in the uncovered list.",
    mutate: (dir) => {
      const src = readStage(dir, "design")
      // RequestManager.openRequest is at design.onto:77. Strip the
      // `self.requestStatus` segment from its modifies clause.
      const mutated = src.replace(
        /(event openRequest[\s\S]*?modifies:\s*)([^;]+);/,
        (_m, head, mods) => {
          const trimmed = mods
            .split(",")
            .map((s) => s.trim())
            .filter((s) => !/requestStatus\b/.test(s))
            .join(", ")
          return `${head}${trimmed};`
        },
      )
      if (mutated === src) throw new Error("mutation marker not found")
      writeStage(dir, "design", mutated)
    },
    expect: "W38",
  },
  {
    id: "W39_unmatched_self_ref_meeting",
    baseline: MEETING_BASE,
    description:
      "Add a fictitious property reference `self.zzzImaginary > 0` to the parent requirements event MeetingSchedulerSystem.requestMeeting (where the kind structurally has the property added too, so S27 passes). Components do NOT have it. Expect W39.",
    mutate: (dir) => {
      // 1. Add the property + a covering invariant + pre clause on the
      // system kind so S27 doesn't trip. The kind has an optional
      // `specializes …` clause between the name and the body's `{`.
      let req = readStage(dir, "requirements")
      const before = req
      req = req.replace(
        /(kind MeetingSchedulerSystem[^{]*\{\s*identity:\s*systemId;)/,
        (m) =>
          m +
          "\n  // negative-test injection: structurally present on the kind\n" +
          "  property zzzImaginary: Real;",
      )
      if (req === before) throw new Error("kind+identity marker not found")
      req = req.replace(
        /(kind MeetingSchedulerSystem[^{]*\{[\s\S]*?invariants\s*\{)/,
        (m) => m + "\n    self.zzzImaginary >= 0.0;",
      )
      // Add a pre that references zzzImaginary on requestMeeting.
      req = req.replace(
        /(event requestMeeting[^{]*\{)/,
        (m) => m + "\n    pre: self.zzzImaginary >= 0.0;",
      )
      writeStage(dir, "requirements", req)
    },
    expect: "W39",
  },
]

const results = []
for (const t of TESTS) {
  console.log(`\n──────  ${t.id}  ──────`)
  console.log(`  ${t.description}`)
  if (t.skipReason) {
    console.log(`  ⤿ SKIP — ${t.skipReason}`)
    results.push({ id: t.id, status: "skipped", reason: t.skipReason })
    continue
  }
  const dir = freshCopy(t.id, t.baseline)
  try {
    t.mutate(dir)
  } catch (e) {
    console.log(`  ✗ mutation failed: ${(e instanceof Error ? e.message : e)}`)
    results.push({ id: t.id, status: "mutation-failed" })
    continue
  }
  const r = runBloque2(dir)
  const hit = r.out.includes(`[${t.expect}]`)
  if (hit) {
    console.log(`  ✓ PASS — diagnostic '${t.expect}' fired as expected`)
    // Print the matching line for evidence
    for (const line of r.out.split(/\r?\n/)) {
      if (line.includes(`[${t.expect}]`)) {
        console.log(`     → ${line.trim()}`)
        break
      }
    }
    results.push({ id: t.id, status: "passed" })
  } else {
    console.log(
      `  ✗ FAIL — diagnostic '${t.expect}' NOT in CLI output (exit=${r.exit})`,
    )
    console.log("  --- last 30 lines of CLI output ---")
    console.log(
      r.out.split(/\r?\n/).slice(-30).map((l) => `     ${l}`).join("\n"),
    )
    results.push({ id: t.id, status: "failed", exit: r.exit })
  }
}

console.log(`\n────── summary ──────`)
for (const r of results) {
  const mark =
    r.status === "passed" ? "✓" : r.status === "skipped" ? "⤿" : "✗"
  console.log(`  ${mark} ${r.id} — ${r.status}`)
}
const passed = results.filter((r) => r.status === "passed").length
const ran = results.filter((r) => r.status !== "skipped").length
console.log(`\n${passed}/${ran} mutations detected by Bloque 2.`)
process.exit(passed === ran ? 0 : 1)
