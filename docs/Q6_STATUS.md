# ontodls — Paso 6 día 1 (tool qualification scaffolding)

The strategic AI's plan called for Paso 6 to start "in parallel from
now" because it's a 12-18 month process arc. Day 1 lands the
technical evidence layer — the artefacts a DO-330 / IEC 62304 / ISO
26262 Part 8 reviewer asks for before opening a tool-qualification
plan.

Test suite: **728 / 730 passing** (+ 2 toolchain-gated skips).
**No Z3 transients this run.**

## What landed

### Build determinism (the load-bearing claim)

Without byte-stable codegen, every audit-trail story collapses:
the auditor can't tell whether two builds of the same .onto produced
the same code by accident or by design. The new
`checkDeterminism(rootPath, opts)` runs codegen twice and compares
SHA-256 hashes per artefact; returns `{ deterministic: true }` on
agreement or `{ firstDifference }` on the first mismatch.

**Verified across every fixture in `examples/`** — array_state_vector,
ardupilot_navekf3, ardupilot_gps, ardupilot_baro, drone — all
byte-stable across consecutive invocations.

The codegen already happened to be deterministic (no `Date.now()`,
no `Math.random()`, Map iteration order stable in V8). The check
makes that property load-bearing instead of incidental.

### Reproducibility manifest

`buildManifest(rootPath, opts)` produces a JSON document with:

```jsonc
{
  "schemaVersion": "ontodls-manifest/1",
  "generatedAt": "2026-05-20",         // UTC date, no time-of-day
  "tool": { "name": "ontodls", "version": "0.10.9" },
  "inputs": {
    "rootFile": "...path...",
    "rootSha256": "32422dd0...",
    "transitiveFiles": [                // only when --resolve-imports
      { "path": "...", "sha256": "..." }
    ]
  },
  "options": {
    "resolveImports": false,
    "targets": ["ts", "rust", "c"],
    "rust": { "target": "no-alloc", "float": "f32" }   // when set
  },
  "outputs": [
    { "target": "rust", "artefact": "Cargo.toml", "bytes": 243, "sha256": "..." },
    { "target": "rust", "artefact": "src/lib.rs",  "bytes": 3443, "sha256": "..." },
    { "target": "c",    "artefact": "asv.h",       "bytes": 2064, "sha256": "..." },
    { "target": "c",    "artefact": "asv.c",       "bytes": 2150, "sha256": "..." },
    { "target": "ts",   "artefact": "asv.ts",      "bytes": 5173, "sha256": "..." }
  ]
}
```

Properties that matter for audit:

- **Schema-versioned** — `ontodls-manifest/1`. Future ontodls
  versions can add fields without breaking older auditors.
- **No wall-clock noise** — `generatedAt` is YYYY-MM-DD UTC only.
  Manifests for the same input on different times-of-day same day
  are byte-equal.
- **`serializeManifest()` is byte-stable** — two manifests for the
  same input produce identical JSON text. The manifest itself can
  be committed to version control without spurious diffs.

### CLI: `ontodsl manifest`

```bash
$ ontodsl manifest examples/array_state_vector.onto
{ ... JSON to stdout ... }
determinism: OK (5 artefacts hashed)

$ ontodsl manifest examples/array_state_vector.onto --out ./build.manifest.json
wrote ./build.manifest.json
determinism: OK (5 artefacts hashed)

$ ontodsl manifest project.onto --resolve-imports --targets rust
{ ... manifest of rust target only ... }
determinism: OK (2 artefacts hashed)
```

Exit codes:
- `0` — manifest emitted + determinism verified
- `1` — usage error
- `2` — parse failure OR determinism check failed (rare; the user
  needs to know NOW because the audit value collapses)
- `3` — internal error

### Tests

12 new tests (`test/qualificationManifest.test.ts`):
- Shape: schemaVersion + tool + inputs + options + outputs fields
- Determinism across two invocations on the synthetic fixture
- **Determinism across all `examples/` fixtures** (the production case)
- Input SHA-256 stability
- Output SHA-256 + byte-size on every artefact
- `--targets` filter works
- Multi-file mode populates `transitiveFiles`
- Serialization byte-stability
- CLI: stdout JSON, `--out` path, `--targets` filter, usage error

## Scope decisions (NOT in this MVP)

- **DO-330 classification document** (T2/TCL2 declaration, Tool
  Operational Requirements, Tool Qualification Plan). Those are
  human-authored documents; this module produces the technical
  evidence they reference. The doc-writing arc is the
  qualification process itself, 12-18 months.
- **Feature → test → code traceability matrix.** Would need to
  parse vitest test files + map back to source lines. Useful but
  scoped for later (Paso 6 day 2).
- **Cross-tool integration** (Polarion / DOORS / Codebeamer
  import). Future; manifest format is designed as a self-contained
  leaf node that pasted into ALM tools works.
- **Build provenance beyond ontodls** (Node.js version, OS,
  filesystem) — the manifest records ontodls's own behaviour; the
  surrounding build environment is the user's CM problem.

## Why this matters

Before Paso 6 the story was "ontodls produces verifiable contracts."
After Paso 6 day 1 the story is **"ontodls produces verifiable
contracts AND a tamper-evident manifest documenting what the build
was."** That second clause is what unblocks the conversation with a
regulated-industry buyer — without it, every "but how do we know
the build is reproducible?" question stops the demo.

The strategic AI's framing: T2/TCL2 (assistive tool, not autonomously
replacing verification) is the right initial classification. T3/TCL3
is 10x the cost and only needed if ontodls replaces mandatory manual
verification — which it doesn't (the engineer still reviews the
generated code and writes the impl_fn bodies). Day 1's manifest +
determinism check is the evidence package that an auditor needs to
agree with the T2/TCL2 classification.

## What's next

Per the strategic plan:
- Paso 6 day 2+: traceability matrix + qualification documents
- Rest of Paso 5: aliased imports + schema migration tooling
- Paso 3: libclang extraction (still blocked on external infra)
- Paso 1.a: real ArduPilot `.bin` diff-testing (blocked on external
  infra)

Days shipped so far across Q3/Q4/Q5/Q6: 6. Strategic plan's
H1 2027 milestones are mostly hit ahead of schedule modulo the
infra-blocked work.

---

# Paso 6 day 2 update (2026-05-21) — Q6 closeout

Q6 (tool qualification scaffolding) closes today. After day 1's
determinism + manifest, day 2 lands the **three remaining audit
artefacts** that complete the regulated-industry evidence
package.

## What landed

### Traceability matrix (`ontodsl trace`)

`src/qualification/trace.ts` scans the project's `test/` directory,
parses each `*.test.ts` file with a brace-depth-aware regex
extractor, and produces a JSON matrix:

```json
{
  "schemaVersion": "ontodls-trace/1",
  "features": [
    {
      "name": "codegenRustCompiles",
      "testFile": "test/codegenRustCompiles.test.ts",
      "tests": [
        { "describe": "codegen-rust", "it": "drone.onto compiles cleanly", "parameterized": false },
        ...
      ],
      "sourceFiles": ["src/codegen-rust/index.ts", ...]
    },
    ...
  ],
  "summary": { "features": 61, "tests": 795, "sourceFiles": 26 }
}
```

The extractor handles `.skip`, `.only`, `.skipIf(...)`,
`.each(...)`, template-literal test names (marked
`parameterized: true` so reviewers see the dynamic shape),
and nested describe blocks. Source mapping is import-based:
each `import "../src/..."` is treated as evidence the test
exercises that module.

CLI: `ontodsl trace [--out <path>]`. Default emits JSON to
stdout. Serialization is byte-stable (two consecutive runs
produce identical output) — auditors can diff manifests
mechanically.

### Audit binder (`ontodsl binder`)

The "do it all in one command" CLI. Given a `.onto`:

```bash
$ ontodsl binder examples/array_state_vector.onto --out ./binder
wrote audit binder to ./binder
  manifest.json   5 artefacts, all deterministic
  trace.json      61 features / 795 tests
  coverage.json   1 types, 3 invariants, 5 witnesses
  Cargo.toml      239 bytes
  src/lib.rs      3113 bytes
  array_state_vector.h 1772 bytes
  array_state_vector.c 1894 bytes
  array_state_vector.ts 4841 bytes
```

The output directory contains:
- `manifest.json` — reproducibility evidence
- `trace.json` — test/source coverage
- `coverage.json` — contract surface metrics
- `Cargo.toml` + `src/lib.rs` (Rust target)
- `<basename>.h` + `<basename>.c` (C+ACSL target)
- `<basename>.ts` (TypeScript target)
- `README.md` — index document that explains every file +
  the verification steps a reviewer should run

The README is the **walk-through for the auditor**: it cites
the SHA-256s, documents how to verify reproducibility, and
points at the upstream `.onto` source file. A reviewer who
doesn't read any of ontodls's source code can still trust the
build by re-running the determinism check.

### DO-330 / IEC 62304 / ISO 26262 templates

`docs/qualification/`:

- `TOOL_QUALIFICATION_PLAN.md` — fill-in-the-blanks template
  with the standard sections (project context, classification,
  operational environment, verification, configuration
  management, error reporting, sign-off). Classifies ontodls
  as **TQL-5** (DO-330) / **SOUP candidate** (IEC 62304) /
  **TCL 1** (ISO 26262) based on the human-in-the-loop
  verification model.

- `TOOL_OPERATIONAL_REQUIREMENTS.md` — 10 numbered TORs
  (TOR-01 through TOR-10) each with a verification reference
  pointing into ontodls's own test suite. Re-running
  `npm test` against a qualified release re-validates every
  TOR.

The templates are deliberately **fill-in**, not auto-generated.
DO-330 / IEC 62304 paperwork is a human-authored process
output that captures project-specific facts (DAL level, sign-
off names, dates). ontodls supplies the technical evidence;
the project's quality engineer writes the qualification
narrative around it.

## Tests

11 new in `test/qualificationTraceAndBinder.test.ts`:
- Trace builder (5): synthetic fixture extraction, nested
  describes, template-literal detection, deterministic
  serialization, real-test-corpus smoke test.
- Trace CLI (2): stdout JSON, `--out` file output.
- Binder CLI (4): writes all 4 audit artefacts + generated
  code; `--targets` filter; exits 1 on missing `--out`;
  exits 1 on missing input.

## Suite

**784 / 786 passing** (+2 toolchain-gated skip, 0 Z3 transients
this run).

## Q6 scorecard

| Day | Deliverable | Test count |
|---|---|---|
| 1 | Determinism check + reproducibility manifest + `ontodsl manifest` CLI | 12 |
| 2 | Trace matrix + audit binder + DO-330 templates | 11 |
| **total Q6** | **23 new tests** + **3 new CLI subcommands** + **2 template documents** | |

## What ontodls now offers a regulated-industry buyer

The pitch deck slide:

1. **Build determinism** — same input ⇒ same output, verified
   on every example fixture. (`ontodsl manifest`)
2. **Tamper-evident manifest** — SHA-256 of inputs + outputs +
   tool version, byte-stable across runs.
3. **Traceability matrix** — every test mapped to feature +
   source module. (`ontodsl trace`)
4. **Coverage report** — per-type contract surface metrics.
   (`ontodsl coverage`)
5. **Schema diff** — Liskov-aware BREAKING / ADDITIVE
   classification between two versions. (`ontodsl diff`)
6. **Audit binder** — one command produces the complete
   expedient. (`ontodsl binder`)
7. **DO-330 / IEC 62304 / ISO 26262 templates** ready for the
   project's quality engineer to fill in.

That's the regulated-industry MVP. The remaining qualification
work is **process** (project-specific TQL classification,
quality-management documentation, change-control procedures)
rather than tool. ontodls is now defensible inside any of
those processes.

## What's still infra-blocked (unchanged)

- Real `.bin` diff-testing against ArduPilot SITL (Paso 1.a)
- libclang C++ → .onto extraction (Paso 3)
- Z3 effects QF_UF encoding (rest of Paso 4)

When external infra appears, those become the next chunks.
