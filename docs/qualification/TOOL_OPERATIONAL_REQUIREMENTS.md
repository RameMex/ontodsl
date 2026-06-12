# Tool Operational Requirements — ontodls

> Companion document to `TOOL_QUALIFICATION_PLAN.md`. Lists
> each top-level operational requirement (TOR-NN) with a
> verification reference. The references point to ontodls's
> own test suite — re-running `npm test` against the qualified
> release demonstrates these requirements hold.

## TOR-01 — Build determinism

**Requirement.** Given the same `.onto` source and the same
ontodls version + flags, codegen SHALL produce byte-identical
output across consecutive invocations on the same host.

**Verification.** `src/qualification/manifest.ts ::
checkDeterminism()` and `test/qualificationManifest.test.ts ::
'passes on every example/ fixture'`. Test runs determinism
check across every `.onto` in `examples/` and asserts pass.

## TOR-02 — Input integrity

**Requirement.** The reproducibility manifest SHALL record the
SHA-256 hash of the root `.onto` file and every transitively-
imported file at the time of build.

**Verification.** `test/qualificationManifest.test.ts ::
'multi-file mode populates transitiveFiles'`.

## TOR-03 — Tool version recording

**Requirement.** The reproducibility manifest SHALL record the
ontodls version as published in `package.json` at the time of
build. A "version drift" between two manifests for the same
input is an audit signal.

**Verification.** `test/qualificationManifest.test.ts ::
'emits all required top-level fields'`.

## TOR-04 — Contract preservation

**Requirement.** For every `pre:`, `post:`, or `invariants {}`
clause in the input `.onto`, the generated code SHALL include
either a runtime check at the appropriate boundary or an
elision comment with a documented rationale (e.g. "vacuous —
property is not Option<T>"). No silent contract drop is
permitted.

**Verification.** `test/phase15.test.ts`, `test/phase4_rollback.test.ts`
verify that pre/post/invariant clauses appear in generated
runtime. The codegen modules emit `// SKIPPED (not translatable)`
or `// ELIDED (vacuous)` comments for any contract not
emitted; no other code paths drop clauses.

## TOR-05 — Transactional rollback

**Requirement.** When any post-condition or class invariant
fails after an event's `impl_fn` runs, the generated event
wrapper SHALL restore `self` to its pre-event state before
returning an error.

**Verification.** `test/phase4_rollback.test.ts ::
'rolls back self state to pre-state on post-condition failure'`
and `test/phase4_rollback.test.ts :: 'generates self rollback
clone and application for sync wrappers'`.

## TOR-06 — Identity newtype integrity

**Requirement.** For every type that declares `identity: <prop>;`,
the generated code SHALL wrap the identity in a branded newtype
whose inner type matches the property's declared type
(Integer → `i64`, String → `String`, etc.).

**Verification.** `test/brandedIdAndNullElision.test.ts ::
'branded newtype inner type matches the identity property's
declared type'`.

## TOR-07 — Schema diff classification

**Requirement.** Given two `.onto` files (old, new), `ontodsl
diff` SHALL classify every detected change as one of:
BREAKING, ADDITIVE, INTERNAL. The classification SHALL respect
the Liskov substitution principle: stricter preconditions are
BREAKING; weaker post-conditions are BREAKING.

**Verification.** `test/schemaDiff.test.ts` — 25 cases
covering every diff category and classification.

## TOR-08 — Witness test correctness

**Requirement.** For each OCL invariant / pre-condition /
post-condition matching a documented pattern, `ontodsl
gen-witness` SHALL emit at least one `#[test]` that injects
a violating input and asserts the validator/wrapper reports
the violation.

**Verification.** `test/proptestEmission.test.ts` — 9 cases
covering NaN injection, out-of-range injection, pre/post
rejection on each pattern.

## TOR-09 — Static-analysis advisories

**Requirement.** ontodls SHALL detect and surface the
following safety-relevant patterns as advisory (W##) findings:

| Code | Pattern |
|---|---|
| W29/W30 | OCL clause outside Z3 decidable fragment |
| W31 | Integer ↔ Real comparison codegen can't auto-promote |
| W37 | Property has multiple `writes:` declarations |
| W38 | Multi-writer with inconsistent `effects:` sets |
| W39 | Selective import asks for a name not present in target |

**Verification.** `ontodsl explain <code>` provides the
catalog entry for each. Tests:
`test/writesConflicts.test.ts`, `test/multiFileDay2.test.ts`,
`test/phase4.test.ts`.

## TOR-10 — Federation integrity

**Requirement.** Multi-file projects (`import "./other.onto";`)
SHALL fail with diagnostic E1 on import cycles, E2 on duplicate
declarations across files, and E3 on missing files. No silent
drop / overwrite of declarations is permitted.

**Verification.** `test/multiFile.test.ts :: 'E1 cycle detection'`,
`'E2 duplicate declaration across files'`, `'E3 imported file
missing'`.

---

*Each verification reference is re-runnable: `npm test -- --run
<file>` will execute it. A test failure invalidates the
qualification for that requirement.*
