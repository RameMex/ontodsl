# Tool Qualification Plan — ontodls

> **Template.** This document classifies ontodls under
> DO-330 / IEC 62304 / ISO 26262 Part 8 for a specific
> project. Fill in the project-specific cells; ontodls
> provides the technical evidence the plan references.

## 1 · Project context

| Field | Value (fill in per project) |
|---|---|
| Project name | _e.g. ArduCopter NavEKF3 Rust port_ |
| Target standard | _DO-178C / DO-330 · IEC 62304 · ISO 26262 Part 8 · other_ |
| Software level / SIL | _DAL A/B/C · Class B/C · ASIL B/C/D_ |
| Tool name | **ontodls** |
| Tool version | _commit SHA + ontodls version from `manifest.json/tool.version`_ |
| Tool vendor | _your organization_ |
| Plan author | _name + role_ |
| Plan date | _YYYY-MM-DD_ |

## 2 · Tool operational requirement (TOR)

ontodls accepts a `.onto` source file and produces:

1. **Runtime code** in Rust (alloc + no_std variants) and/or C99
   with ACSL annotations. The runtime enforces declared pre /
   post / invariant contracts at every event boundary, with
   transactional rollback on violation.
2. **Reproducibility manifest** (SHA-256 of inputs + outputs +
   ontodls version) verified by the `--strict` determinism check.
3. **Traceability matrix** mapping test files to source modules.
4. **Schema diff** (`ontodsl diff`) classifying changes between
   two versions as BREAKING / ADDITIVE / INTERNAL.
5. **Contract-witness tests** auto-generated from OCL clauses.

The tool's operational requirement is:

> *Given a well-formed `.onto` input, ontodls SHALL produce
> code that respects the declared contract surface
> (invariants, pre / post conditions, event signatures) and a
> reproducibility manifest that, when re-run against the same
> input + tool version, produces byte-identical output.*

## 3 · Tool classification

### DO-330 (avionics)

Per DO-330 §11.2, classify the tool by:

- **TQL-5 (assistive)**: ontodls is qualified as TQL-5 because:
  - The tool **does not autonomously eliminate verification
    activities**. Engineers still review the generated code
    and write the `impl_fn` bodies that the wrappers call.
  - The generated runtime enforces declared contracts **at
    runtime**; static verification (where required by DO-178C
    objective B-1) is performed by frama-c-wp on the emitted
    ACSL annotations OR by manual code review of the Rust.
  - Errors in ontodls are detectable by re-running the
    manifest's determinism check + diff-testing against the
    upstream C/C++ reference (see `replayHarness` in
    `src/harness/`).

If ontodls were used to REPLACE a verification activity
(e.g. relied upon to prove a safety property without manual
review), TQL-1/2/3 classification would apply — significantly
more rigorous, ~10× the qualification cost. Avoid that
classification by keeping a human-in-the-loop verification
step in your process.

### IEC 62304 (medical devices)

- **Software of Unknown Provenance (SOUP) at most**: ontodls
  is a code generator, not embedded runtime — its output is
  the SOUP candidate, not the tool itself. The output IS
  reviewed under IEC 62304 §5.1.5 / §7.1.4 procedures.

### ISO 26262 Part 8

- **TCL 1 (TI1, TD1)**: tool error has low likelihood of
  producing an undetected defect (the determinism + manifest
  check is the *detection* mechanism). Justification:
  - Build determinism check prevents non-reproducible builds.
  - Schema diff catches accidentally-introduced breaking
    changes.
  - Witness tests detect contract violations at the runtime
    boundary.
- TCL 2 / 3 would require formal tool qualification including
  validation testing; ontodls's existing 772+ test suite is
  evidence toward TCL 2 but the formal classification is the
  project's choice.

## 4 · Tool operational environment

| Component | Required version |
|---|---|
| Node.js | ≥ 18.0 (ESM modules; readline, fs, crypto) |
| Rust (for cargo check of generated code) | ≥ 1.82 (or whatever the project mandates) |
| gcc / clang (for C target) | ≥ 9.0 with C99 support |
| Frama-C (optional, for ACSL `-wp` verification) | ≥ 28.0 |

The ontodls binary itself has no runtime dependencies beyond
the Node.js standard library — `crypto` for SHA-256,
`fs/path` for I/O. No network access required.

## 5 · Tool verification

The project SHALL verify each ontodls release by:

1. **Reproducing the manifest**: `ontodsl manifest <input>.onto`.
   Every output SHA-256 MUST match the manifest checked into
   the configuration-management baseline.
2. **Cross-compiling**:
   - `cargo check --tests` on the generated Rust crate.
   - `gcc -c -std=c99` on the generated C source.
   - (Optional) `frama-c -wp <file>.c` for the ACSL fragment.
3. **Running the witness tests**: `cargo test --lib` on the
   Rust crate. All emitted contract-witness tests must pass.
4. **Running ontodls's own test suite**: `npm test` in the
   ontodls repository. All non-environmental tests pass
   (Z3 WASM transients are documented in `docs/Q3_STATUS.md`).

If any of the above fails, the tool version is NOT qualified
for the project and SHALL be rolled back to the previous
qualified version.

## 6 · Configuration management

The configuration-management baseline for ontodls usage SHALL
include, per release:

- The `.onto` source file (with SHA-256 in the manifest).
- All transitive imports (`import "./other.onto";`) with
  their SHA-256s.
- The audit binder generated by `ontodsl binder` (contains
  manifest + trace + coverage + generated code).
- The DO-330 / IEC 62304 / ISO 26262 evidence selected from
  the binder per the project's safety case.
- This Tool Qualification Plan (filled in for the project).
- The Tool Operational Requirements document (separate file).

## 7 · Tool error reporting

ontodls error reports (S## / W## diagnostic codes) are
documented in `ontodsl explain <code>`. Critical error codes
(S-prefixed) fail the build with exit code 2; advisories
(W-prefixed) print but don't gate. The project's process
SHALL define which advisories require sign-off vs. which can
be acknowledged.

## 8 · Sign-off

| Role | Name | Date | Signature |
|---|---|---|---|
| Project Engineering Manager | | | |
| Quality / Safety Lead | | | |
| Tool Owner (ontodls) | | | |

---

*Template provided by ontodls. Replace bracketed cells with
project-specific data before submitting for review.*
