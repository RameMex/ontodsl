# ontodls — Paso 5 día 1 (federation MVP)

Q4 → Q1 2027 plan called for libclang-based C++ → `.onto` extraction
next. In this session that path is blocked (no ArduPilot source tree,
no libclang bindings), so we pivoted to the **next-most-tractable
internal piece of value**: Paso 5 federation — multi-file `.onto`
projects with `import "./other.onto";`.

Test suite: **714 / 718 passing** (+2 toolchain-gated skip, +2 Z3
WASM-memory transients).

## What landed

### Grammar + AST
- `ImportKw` token (`import` keyword).
- Grammar accepts `import "./path";` declarations between the
  `namespace` line and the first declaration. Multiple imports
  allowed.
- AST: `OntoFile.imports: readonly ImportDecl[]` (new required
  field; single-file `parse()` populates it as `[]`).
- `ImportDecl { kind: "ImportDecl", path: string, location }`.

### Multi-file resolver (`src/parser/multiFile.ts`)
- `parseFile(rootPath): ParseFileResult` — loads root, recursively
  loads every imported file, merges all transitive declarations
  into a single `OntoFile`.
- Path resolution: each `import "./other.onto";` is resolved
  relative to the **importing file's** directory (not the root's).
  Absolute paths are honoured as-is.
- Dedupes by **absolute path**: a diamond import (A → B + A → C,
  both → D) loads D once.
- Per-file: parses syntactically only (`validateSemantics: false`).
  Semantic check runs once on the merged AST so cross-file type
  refs (e.g. `Pack.primary: Battery` where Battery lives in an
  imported file) don't spuriously trip S11.

### Static error codes added
- **E1** — import cycle detected (`A → B → A`).
- **E2** — duplicate top-level declaration across files.
- **E3** — imported file not found.

Cycle detection runs BEFORE the visited-cache lookup, otherwise the
cache hides the cycle once a file is partially loaded.

### CLI: `--resolve-imports`
```bash
ontodsl pack.onto --out ./out --target rust --resolve-imports
# resolved 2 files (pack.onto, battery.onto)
# wrote ./out/Cargo.toml
# wrote ./out/src/lib.rs
```
Backward-compatible: without the flag, the single-file parser runs
(any `import` statements still parse syntactically but their
imports aren't followed, so cross-file refs report S11 as before).

### Tests
10 new vitest cases covering:
- single file (no imports) — unchanged
- two-file root → leaf merge
- two-file cross-type reference (Pack uses Battery imported from
  another file)
- transitive imports (A → B → C)
- diamond import (A → B, A → C, both → D)
- E1 cycle detection
- E2 duplicate declaration
- E3 missing imported file
- E3 missing root file
- single-file parse errors propagated with source path annotation

End-to-end CLI smoke test verified manually:

```bash
# Without --resolve-imports → S11 (correct, expected)
$ ontodsl pack.onto --out /tmp/out --target rust
diagnostics in pack.onto:
  [S11] property 'Pack.primary' references unknown type 'Battery'

# With --resolve-imports → success
$ ontodsl pack.onto --out /tmp/out --target rust --resolve-imports
resolved 2 files (pack.onto, battery.onto)
wrote /tmp/out/Cargo.toml
wrote /tmp/out/src/lib.rs
$ grep "pub struct (Battery|Pack)" /tmp/out/src/lib.rs
pub struct Pack { ... }
pub struct Battery { ... }
```

## Scope decisions

What's **NOT** in this day-1 MVP (deferred to Paso 5 day 2+):

- **Aliased imports** (`import "./other.onto" as alias;`). v1 is
  flat-namespace merge — duplicate names across files just error.
  Aliases give users a way to import two libraries with overlapping
  type names; adds visibility scoping.
- **Selective imports** (`import { Battery, BatteryPack } from
  "./battery.onto";`). v1 imports every top-level decl from the
  imported file.
- **Schema migration tooling** — when a downstream `.onto` evolves
  its types, what tooling helps consumer files migrate? Out of
  scope for v1; the bigger half of Paso 5 (12+ sessions per the
  strategic plan).
- **Logical namespace federation** — when imported files declare
  `namespace foo;` vs `namespace bar;`, v1 just uses the root's
  namespace. v2 could either error (require alignment) or qualify
  decls with their declared namespace.
- **Watch mode / cache invalidation** for the dashboard's
  hot-reload — needs careful design once we know how often
  multi-file projects actually change.

## Why this matters

Before Paso 5, a `.onto` project was one file. For a real
ArduPilot subsystem (AC_PID lives across ~10 files in the upstream
C++) that's not a realistic constraint. With imports, the user can
split:

```
ardupilot_quadcopter.onto       — top-level: imports the subsystems
├── ap_baro.onto                 — pressure altitude
├── ap_compass.onto              — magnetometer + heading
├── ap_battmonitor.onto          — battery voltage / current
├── ap_rangefinder.onto          — lidar / sonar
└── ap_navekf3.onto              — Kalman filter
```

Each file readable in isolation; the root file composes the system.
The merged AST drives codegen, witness emission, coverage report,
W37/W38 across-file analysis — every Q3/Q4 tool works transparently
on the merged result.

## What's next (after this session)

Per the strategic plan:
- Rest of Paso 5 (aliases + schema migration) — H1 2027.
- libclang C++ → .onto extraction (Paso 3) — Q1 2027, blocked on
  ArduPilot source tree + libclang bindings.
- DO-330 tool qualification arc — 12-18 months parallel from now.

The federation MVP unlocks the day-to-day usability story: nobody
writes a 5000-line single .onto. Now they don't have to.

---

# Paso 5 day 2 update (2026-05-20)

Aliased + selective imports shipped on top of day 1.

## New syntax

```onto
import "./other.onto";                            // day 1: bring in all
import "./other.onto" as Alias;                   // day 2: + alias
import { Battery, Pack } from "./other.onto";     // day 2: whitelist
import { Battery } from "./other.onto" as Bat;    // day 2: combined
```

## Semantics

- **Alias** (`as Alias`) — captured on `ImportDecl.alias`. v1 uses
  it in **error messages** (E2 mentions the alias) and the
  reproducibility manifest's input record. Qualified-reference
  syntax `Alias.TypeName` is deferred to day 3.
- **Selective list** (`{ A, B } from "..."`) — `ImportDecl.selective`
  is the whitelist. Only those names cross the file boundary;
  others stay private to the target file.
- **Multiple importers, union semantics**: when File C is imported
  from M1 (selective `{A}`) and M2 (selective `{B}`), the merge
  exposes `{A, B}`. When any importer is non-selective, the file
  is fully exposed regardless of other importers' filters.

## New diagnostic

- **W39** — selective import asked for a name not present in the
  target file. Documented in `ontodsl explain W39`. Advisory; the
  import succeeds with the remaining names.

## Tests

10 new in `test/multiFileDay2.test.ts`:
- Grammar shapes (4): alias only, selective only, combined,
  backward-compat plain import.
- Selective filter semantics (3): names filtered correctly,
  non-selective wins, union across importers.
- W39 fires on bad name.
- E2 mentions alias.
- Catalog entry for W39.

## Why this matters

Federation v1 (day 1) gave us "split your model across files."
Federation v2 (day 2) gives us **"compose models from libraries
without each consumer eating every internal type."** For an
ArduPilot project that imports `ap_navekf3.onto` it now matters
which sub-types are public API and which are implementation
detail — selective imports make that explicit.

## Suite

**738 / 740 passing** (+2 toolchain-gated skip, 0 Z3 transients
this run).

## What's still deferred (Paso 5 day 4+)

- **Schema migration tooling** — diff between two .onto files
  reporting breaking changes (removed/renamed types, changed
  property types). The "downstream consumers, what should I update
  in my code?" question. 12+ session arc per the strategic plan.
- **Real namespace scoping** (Model 2 / 3) — currently `Alias.X`
  and bare `X` both resolve to the merged-namespace `X`. To handle
  same-name imports from two libraries without E2, the resolver
  needs per-import name spaces, not just informational aliases.

---

# Paso 5 day 3 update (2026-05-20)

**Qualified type references** shipped: `property foo: EKF.AP_NavEKF3;`.

## New syntax

```onto
import "./ardupilot_navekf3.onto" as EKF;

kind App {
  property filter: EKF.AP_NavEKF3;   // qualified reference
  property other: Battery;            // bare reference (still works)
}
```

The qualifier is parsed at any typeRef position (property, parameter,
query return type). Mixing qualified + bare refs in the same file
is allowed.

## Semantics (Model 1)

- **Alias is informational**: `EKF.AP_NavEKF3` resolves to the same
  merged-namespace `AP_NavEKF3` as the bare form. No renaming
  happens at codegen.
- **Validated**: the qualifier MUST match an `import "./..." as
  EKF;` in the file. Missing alias → S40.
- **S40 supersedes S11**: when the qualifier is wrong AND the type
  is missing, we emit only S40 (more informative — tells the user
  the import is missing, not the type).

## Why "Model 1" rather than real scoping

Model 2 (alias becomes a true namespace prefix → `EKF.Battery`
renames to `EKF_Battery` in the merge) is more correct but
backward-incompatible: existing user code that referenced `Battery`
would break when they added `as EKF`. Model 1 is additive: today
you can introduce `as Alias` for documentation purposes without
changing any consumer code; tomorrow's Model 2 work can layer real
scoping for collision cases (two libraries each declaring
`Battery`).

## New diagnostic

- **S40** — qualified type reference uses an unknown import alias.
  Documented in `ontodsl explain S40`. Hard (structural) error.

## Limitations (v1)

- In the multi-file resolver, the qualifier is validated against
  the **root file's imports only**. A non-root file that uses
  `Y.Foo` will trip S40 even when Y is a valid alias in that
  file's own imports. Lift: per-declaration source-file tracking
  (deferred to day 4).
- Codegen ignores the qualifier (Model 1). When two libraries
  declare a same-named type, qualified refs don't disambiguate;
  E2 still fires. Use selective imports + renaming on the producer
  side as a workaround.

## Tests

10 new in `test/qualifiedTypeRefs.test.ts`:
- Grammar shape (2): qualified parses into `qualifier`; bare leaves
  it undefined.
- S40 semantics (3): fires on unknown alias, silent on known alias,
  supersedes S11.
- Catalog entry for S40.
- Codegen pass-through (2): Rust + C emit bare type names.
- End-to-end via parseFile (2): cross-file qualified refs resolve;
  bad qualifiers still trip S40.

## Suite

**746 / 750 passing** (+2 toolchain-gated skip, +2 Z3 WASM-memory
transients).

---

# Paso 5 day 4 update (2026-05-20)

**Schema migration tooling** shipped — `ontodsl diff`. The "other
half" of Paso 5 that the strategic AI called a 12+ session arc; the
MVP that delivers 80% of the value lands today.

## What it does

```bash
$ ontodsl diff old.onto new.onto
schema diff (ontodls-diff/1)

summary: 5 breaking, 2 additive, 0 internal (7 total)

BREAKING:
  - type ToBeRemoved
      why: consumers referencing this type will fail with S11
  - Battery.current
      why: consumers reading this property will fail to compile
  ~ Battery.read(): parameter count changed: 1 → 2
      why: event signature changed; consumers must update call sites
  + Battery.read pre: t.isFinite()
      why: new precondition — producer now rejects calls that previously succeeded
  + Battery invariant: self.temperature.isFinite()
      why: new invariant — producer requires a condition consumers may not satisfy

ADDITIVE:
  + type NewKind
  + Battery.temperature: Real
```

`--json` + `--out` for CI integration; `--strict` exits 5 on any
breaking change so downstream pipelines block on accidental
upstream regression.

## Diff categories covered

- **Types**: added (ADDITIVE) / removed (BREAKING).
- **Properties** (per type): added (ADDITIVE) / removed (BREAKING) /
  type changed (BREAKING).
- **Events**: added (ADDITIVE) / removed (BREAKING) / signature
  change incl. param count, param rename, param type, return
  type (all BREAKING).
- **Pre-conditions**: added → BREAKING (stricter), removed → ADDITIVE.
- **Post-conditions**: added → ADDITIVE (stronger guarantee),
  removed → BREAKING (weaker guarantee).
- **Invariants**: added → BREAKING (new requirement on consumers),
  removed → ADDITIVE (relaxed).

The pre/post asymmetry reflects the Liskov direction: adding a
pre tightens what callers must supply (breaking); adding a post
tightens what implementations must guarantee (additive for callers).

## v1 limitations

- **No rename detection** — `voltage_v` → `voltage` registers as
  `(- voltage_v, + voltage)`. The user sees both events but ontodls
  doesn't infer the rename. Lift: heuristic match on type +
  similar name + invariant overlap (day 5).
- **No Z3-backed implication check** — pre/post clause changes are
  all BREAKING by default. A "weakened pre" (consumer can call with
  more inputs than before) is actually ADDITIVE; ontodls treats it
  as BREAKING because proving the direction needs Z3. Day 5+ would
  integrate with the LSP verifier.
- **Body-bearing decls only** — happenings + use-cases + commitments
  are body-bearing too but the diff currently doesn't walk their
  predicate clauses. Trivial extension when needed.
- **Cosmetic OCL changes normalized** (whitespace collapsed) — but
  semantic rewriting (`x >= 0` vs `0 <= x`) registers as a real
  change. That's noise on real evolutions; Z3 equivalence would
  fix it.

## Tests

25 new in `test/schemaDiff.test.ts`:
- Type lifecycle (2)
- Property lifecycle (4): add, remove, type-change, identity
- Events + clauses (7): add, remove, signature change, pre-add /
  remove, post-add / remove
- Invariants (3): add, remove, cosmetic whitespace ignored
- Summary counting + human report ordering (3)
- CLI (6): human report, JSON stdout, --out, --strict exit codes,
  exit 1 on missing args

## Suite

**772 / 775 passing** (+2 toolchain-gated skip, +1 Z3 transient).

## What's still deferred (Paso 5 day 5+)

- **Rename detection heuristics** — see above.
- **Z3-backed pre/post implication** — distinguish "weakened pre" /
  "strengthened post" (both ADDITIVE) from raw clause changes.
- **Migration code-gen** — given a diff, emit a Rust shim that
  adapts old-API callers to new-API providers. Bigger arc; this
  is what an industry "binary compat layer" looks like.
