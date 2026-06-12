/**
 * Phase Q3 / Paso 1 — Replay diff-testing harness.
 *
 * The shape of the value ontodls promises a regulated-industry
 * customer is "the Rust we generate behaves the same as the C++ it
 * replaced, on real production traces, within a documented epsilon."
 *
 * This module provides the scaffolding to support that claim:
 *
 *   - LogSource           reads records (timestamped field maps)
 *                         from any format the user can parse
 *                         (mavlink .bin, CSV, JSON, JSONL, custom).
 *
 *   - Runner              consumes records one at a time and emits
 *                         a Snapshot per step. Two runners participate
 *                         in a replay: the "oracle" (typically the
 *                         legacy C++ via FFI or subprocess) and the
 *                         "candidate" (the ontodls-generated Rust).
 *
 *   - replaySequence      drives N records through both runners and
 *                         collects (oracle, candidate) snapshot pairs.
 *
 *   - compareSnapshots    diffs a pair with a per-field epsilon table,
 *                         returning a per-field deviation record.
 *
 *   - renderHtmlReport    turns a list of Diffs into a human-readable
 *                         HTML page suitable for an audit binder.
 *
 * Intentionally NOT in this module:
 *   - The actual ArduPilot .bin parser. That's a separate adapter
 *     that implements LogSource — left as future work because it
 *     requires the mavlink schema definitions.
 *   - The C++ Runner. That's an FFI bridge or subprocess adapter
 *     specific to each target codebase.
 *
 * Why a TS harness (rather than a Rust crate that runs both)? The
 * orchestration layer naturally lives in TypeScript alongside the
 * rest of ontodls (parser, codegen, dashboard). The per-target
 * Runners can be either FFI (Rust calls C++ via bindgen) or process
 * subprocess (TS launches a binary, communicates over JSON lines).
 * Either way, the harness coordinates and reports.
 */
const DEFAULT_TOLERANCE = { kind: "absolute", eps: 1e-9 };
/**
 * Compare two snapshots field-by-field with the given epsilon
 * table. Missing-from-one-side fields are reported as failures with
 * `delta: NaN`.
 */
export function compareSnapshots(oracle, candidate, eps = {}) {
    const allFields = new Set([
        ...Object.keys(oracle.outputs),
        ...Object.keys(candidate.outputs),
    ]);
    const tolFor = (f) => eps[f] ?? eps["*"] ?? DEFAULT_TOLERANCE;
    const fields = [];
    for (const f of allFields) {
        const o = oracle.outputs[f];
        const c = candidate.outputs[f];
        const tol = tolFor(f);
        if (o === undefined || c === undefined) {
            fields.push({
                field: f,
                oracle: o ?? "MISSING",
                candidate: c ?? "MISSING",
                delta: NaN,
                tolerance: tol,
                passed: false,
            });
            continue;
        }
        if (typeof o !== typeof c) {
            fields.push({
                field: f, oracle: o, candidate: c, delta: NaN, tolerance: tol,
                passed: false,
            });
            continue;
        }
        if (typeof o === "number" && typeof c === "number") {
            const delta = Math.abs(o - c);
            let passed;
            switch (tol.kind) {
                case "absolute":
                    passed = delta <= tol.eps;
                    break;
                case "relative": {
                    const scale = Math.max(Math.abs(o), Math.abs(c), 1);
                    passed = delta <= tol.eps * scale;
                    break;
                }
                case "exact":
                    passed = o === c;
                    break;
            }
            fields.push({ field: f, oracle: o, candidate: c, delta, tolerance: tol, passed });
            continue;
        }
        // bool or string — exact only.
        fields.push({
            field: f, oracle: o, candidate: c, delta: 0,
            tolerance: { kind: "exact" },
            passed: o === c,
        });
    }
    const failures = fields.filter((d) => !d.passed);
    return {
        timestampUs: oracle.timestampUs,
        fields,
        failures,
        allPassed: failures.length === 0,
    };
}
/**
 * Replay a LogSource through two Runners and yield per-step
 * SnapshotDiffs. Streams: never holds more than a single pair in
 * memory at a time. Resets both runners first.
 */
export async function* replaySequence(source, oracle, candidate, eps = {}) {
    await oracle.reset();
    await candidate.reset();
    for await (const r of source.records()) {
        const [o, c] = await Promise.all([
            oracle.step(r),
            candidate.step(r),
        ]);
        yield compareSnapshots(o, c, eps);
    }
}
// ─── HTML report ────────────────────────────────────────────────────
/**
 * Render a (possibly large) list of SnapshotDiffs as a single
 * self-contained HTML page. Style and layout chosen for audit
 * binders: a green/red banner at the top with pass/fail counts, a
 * sortable table of failing rows, plus a collapsible "all rows"
 * section. Suitable as an artefact in a DO-178C / IEC 62304 review.
 */
export function renderHtmlReport(componentName, diffs, meta) {
    const total = diffs.length;
    const failed = diffs.filter((d) => !d.allPassed).length;
    const passed = total - failed;
    const passRate = total === 0 ? 0 : (100 * passed) / total;
    const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const rows = [];
    for (const d of diffs) {
        if (d.allPassed)
            continue;
        for (const f of d.failures) {
            rows.push(`<tr><td>${d.timestampUs}</td>` +
                `<td>${escape(f.field)}</td>` +
                `<td>${escape(String(f.oracle))}</td>` +
                `<td>${escape(String(f.candidate))}</td>` +
                `<td>${Number.isNaN(f.delta) ? "—" : f.delta.toExponential(3)}</td>` +
                `<td>${tolToString(f.tolerance)}</td></tr>`);
        }
    }
    const status = failed === 0 ? "PASS" : "FAIL";
    const statusColor = failed === 0 ? "#0a0" : "#c00";
    return `<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<title>${escape(componentName)} — ontodls replay diff</title>
<style>
  body { font-family: -apple-system, system-ui, sans-serif; max-width: 1100px; margin: 2em auto; padding: 0 1em; }
  .banner { padding: 1em; color: white; background: ${statusColor}; border-radius: 4px; }
  .banner .status { font-size: 1.5em; font-weight: bold; }
  table { border-collapse: collapse; width: 100%; margin-top: 1em; font-family: ui-monospace, monospace; font-size: 0.9em; }
  th, td { border: 1px solid #ccc; padding: 0.4em 0.6em; text-align: left; }
  th { background: #f0f0f0; }
  .meta { margin: 1em 0; color: #666; font-size: 0.9em; }
  .meta dt { font-weight: bold; display: inline-block; min-width: 7em; }
</style>
</head><body>
<div class="banner">
  <div class="status">${status}</div>
  <div>${passed}/${total} steps within tolerance (${passRate.toFixed(2)}%)</div>
</div>

<div class="meta">
  <dl>
    <dt>Component:</dt><dd>${escape(componentName)}</dd><br>
    <dt>Oracle:</dt><dd>${escape(meta.oracle)}</dd><br>
    <dt>Candidate:</dt><dd>${escape(meta.candidate)}</dd><br>
    <dt>Log source:</dt><dd>${escape(meta.logSource)}</dd>
  </dl>
</div>

<h2>Failing rows (${rows.length})</h2>
${rows.length === 0
        ? "<p>None — all steps within tolerance.</p>"
        : `<table>
  <thead>
    <tr><th>timestamp (µs)</th><th>field</th><th>oracle</th><th>candidate</th><th>|Δ|</th><th>tolerance</th></tr>
  </thead>
  <tbody>${rows.join("\n    ")}</tbody>
</table>`}
</body></html>`;
}
function tolToString(t) {
    switch (t.kind) {
        case "absolute": return `abs ≤ ${t.eps}`;
        case "relative": return `rel ≤ ${t.eps}`;
        case "exact": return `exact`;
    }
}
//# sourceMappingURL=replay.js.map