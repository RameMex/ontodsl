/**
 * Cross-model comparison runner — Phase 13 of BLOQUE2_EMPIRICAL.
 *
 * Reads the two mass-validation reports:
 *   - scratch/mass-validation-deepseek-report.md (DeepSeek baseline)
 *   - scratch/mass-validation-report.md (current — Sonnet)
 *
 * Produces a side-by-side comparison table for the 5 new domains
 * and a F4 (capability-equalizer) assessment.
 */

import { readFileSync, writeFileSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ONTODLS = resolve(__dirname, "..")

const DS_PATH = resolve(ONTODLS, "scratch/mass-validation-deepseek-report.md")
const SO_PATH = resolve(ONTODLS, "scratch/mass-validation-report.md")
const OUT_PATH = resolve(ONTODLS, "scratch/cross-model-comparison.md")

/**
 * Parse the per-case convergence table from a report.
 * Returns Map<caseId, {disc,reqs,form,design,total,converged}>
 */
function parseReport(path) {
  const text = readFileSync(path, "utf8")
  const data = new Map()
  // Match rows of the convergence table.
  const re = /\|\s*([\w-]+)\s*\|\s*(\d+|—|\d+ \(failed\))\s*\|\s*(\d+|—|\d+ \(failed\))\s*\|\s*(\d+|—|\d+ \(failed\))\s*\|\s*(\d+|—|\d+ \(failed\))\s*\|\s*(\d+)\s*\|\s*([^\|]+?)\s*\|\s*(\d+)\s*\|/g
  let m
  while ((m = re.exec(text)) !== null) {
    const [, caseId, d, r, f, dg, total, converged, wall] = m
    if (caseId === "Case" || !caseId.match(/^[a-z]/)) continue
    data.set(caseId, {
      disc: d, reqs: r, form: f, design: dg,
      total: Number(total),
      converged: converged.trim(),
      wall: Number(wall),
    })
  }
  return data
}

const ds = parseReport(DS_PATH)
const so = parseReport(SO_PATH)

const cases = Array.from(new Set([...ds.keys(), ...so.keys()])).sort()

const lines = []
lines.push("# Cross-model comparison (Phase 13)")
lines.push("")
lines.push("Same 5 new domains, DeepSeek vs Sonnet, fresh start each.")
lines.push("Same playbook (10 hard rules post-Phase-12), same prompts,")
lines.push("same convergence criterion (parse + multi-file CLI verify + Z3).")
lines.push("")
lines.push("## Convergence comparison")
lines.push("")
lines.push("| Case | DeepSeek (attempts / converged?) | Sonnet (attempts / converged?) | F4 hold? |")
lines.push("|---|---|---|---|")
for (const c of cases) {
  const d = ds.get(c)
  const s = so.get(c)
  if (!d || !s) continue
  const dStr = d.converged.startsWith("✓") ? `${d.total} attempts ✓` : `${d.total} attempts ${d.converged}`
  const sStr = s.converged.startsWith("✓") ? `${s.total} attempts ✓` : `${s.total} attempts ${s.converged}`
  let f4 = "n/a"
  if (d.converged.startsWith("✓") && s.converged.startsWith("✓")) {
    f4 = s.total < d.total ? "Sonnet faster" : (s.total === d.total ? "tie" : "DeepSeek faster")
  } else if (!d.converged.startsWith("✓") && s.converged.startsWith("✓")) {
    f4 = "✓ Sonnet recovered"
  } else if (d.converged.startsWith("✓") && !s.converged.startsWith("✓")) {
    f4 = "✗ DeepSeek only"
  } else {
    f4 = "✗ both aborted"
  }
  lines.push(`| ${c} | ${dStr} | ${sStr} | ${f4} |`)
}

const dsConv = [...ds.values()].filter((v) => v.converged.startsWith("✓")).length
const soConv = [...so.values()].filter((v) => v.converged.startsWith("✓")).length
const dsTotal = ds.size
const soTotal = so.size
const recovered = cases.filter((c) => {
  const d = ds.get(c)
  const s = so.get(c)
  return d && s && !d.converged.startsWith("✓") && s.converged.startsWith("✓")
}).length

lines.push("")
lines.push("## Aggregate")
lines.push("")
lines.push(`- **DeepSeek convergence:** ${dsConv}/${dsTotal} (${(100 * dsConv / dsTotal).toFixed(0)}%)`)
lines.push(`- **Sonnet convergence:** ${soConv}/${soTotal} (${(100 * soConv / soTotal).toFixed(0)}%)`)
lines.push(`- **Cross-model recovery (Sonnet succeeded where DeepSeek failed):** ${recovered} of ${dsTotal - dsConv} aborted DeepSeek cases`)
lines.push("")
lines.push("## F4 verdict (capability-equalizer)")
lines.push("")
if (recovered > 0) {
  lines.push(`F4 (verifier-as-capability-equalizer) is empirically reinforced: ${recovered} case(s) where Sonnet authored what DeepSeek could not. The capability gap between providers is real and detectable; the verifier interface remains neutral.`)
} else if (dsConv === soConv) {
  lines.push("F4 is neutral here: both models hit the same wall on the new domains. The new domains expose a complexity threshold that requires more than current scaffolding.")
} else if (soConv < dsConv) {
  lines.push("Counter to F4 expectation: Sonnet did NOT recover the cases DeepSeek aborted. Suggests the failures are dominio-intrinsic rather than capability-gated.")
}

const md = lines.join("\n") + "\n"
writeFileSync(OUT_PATH, md)
console.log(`\n✓ Comparison written to ${OUT_PATH}`)
console.log(`\n${md}`)
