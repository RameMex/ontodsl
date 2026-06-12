# ontodls — Q3 2026 status snapshot

Brief intended for an outside reviewer (or research AI) assessing the
current state of the project. Last updated 2026-05-20 at end of Q3
push. Test suite: **698 / 698 passing**.

## TL;DR

ontodls is a DSL + compiler that takes ontology-grounded contracts
(UFO-A/B/C stereotypes with OCL invariants and Eiffel-style class
invariants enforced at every event boundary) and lowers them to:

- **Rust** (`no_std` compatible; alloc and heapless targets) with
  transactional rollback on contract violation.
- **TypeScript** (Phase-15 baseline; less battle-tested).

The Q3 work focused on **closing the fidelity loop** — the move from
"interesting scaffolding" to "evidence a regulated-industry auditor
can engage with." Three concrete additions:

1. **Contract-witness test auto-generation** from OCL clauses (`ontodsl
   gen-witness`). Each invariant / pre / post produces a Rust `#[test]`
   that injects a crafted-bad input and asserts the validator reports.
2. **Replay-based diff-testing harness** (`src/harness/`) with JsonLine
   log source, subprocess runner, comparator with per-field epsilons,
   and HTML report renderer. Ready for plug-in of any oracle (C++ FFI,
   subprocess, SITL) without harness changes.
3. **Static analysis of effect/write hazards** (W37, W38). Without
   any Z3 work, these catch the "this property has N writers with
   inconsistent side-effects" pattern that's the first audit question.

Plus four bug fixes to codegen surfaced by running real ArduPilot
components through the pipeline. All four found by integration tests
the AI dashboard runs end-to-end.

## What's in the box right now

### Language surface

- **Type system**: PrimitiveType (Real, Integer, Boolean, String),
  NamedType (refs to user-declared kinds), `Option<T>`, `Set<T>`,
  `Array<T, N>` with nesting (matrices), `implies` (lowest-prec
  boolean op).
- **Stereotypes** (UFO-A/B/C): kind, subkind, role, relator, mode,
  quality, collective, quantity, category, mixin, role-mixin,
  happening, agent, commitment, use-case.
- **DbC**: `invariants { … }`, `event name(p: T): R? { pre / post /
  modifies / effects / reads / writes }`, query (pure), branded
  identity newtypes auto-derived from `identity:`.
- **OCL operators**: comparison, arithmetic, boolean (and/or/not/
  implies), if-then-else-endif, `self.x@pre`, `x.isFinite()`,
  `x.isNaN()`, collection ops (`->size/isEmpty/notEmpty/includes/
  forAll/exists/select/reject/collect`), `let x = … in …`.

### Codegen guarantees

- Every event wrapper saves `self.clone()` before invoking `impl_fn`
  and restores it (assigns to `*self`) if any post-condition or
  class invariant fails. First-violation-wins error message.
- Auto-enforced class invariants at every method boundary
  (Eiffel-style).
- Set<NamedType> → Vec<T> with linear-scan `includes()` (structs
  aren't Ord; this is the only safe backing).
- Array<T, N> → `[T; N]` (stack-allocated, Copy when T is Copy).
- Branded identity newtypes are derived from the actual identity
  property's type (not hard-coded to String), with auto-`.0`
  unwrap in navigations so `self.id >= 0` typechecks.
- Real-typed identity drops `Ord`/`Eq` from the derive list (f64
  doesn't implement full ordering).

### Tooling

#### `ontodsl <file.onto> --out <dir> --target rust`

Emit `Cargo.toml` + `src/lib.rs` for the runtime. The lib compiles
cleanly with `cargo check` against 16 reference examples — including
AP_NavEKF3 (16-state vector + 16×16 cov), AP_BattMonitor,
AP_RangeFinder, etc.

#### `ontodsl gen-witness <file.onto> --out <dir>`

Same as above + appends a `#[cfg(test)] mod contract_tests { … }`
block to `lib.rs` containing one `#[test]` per recognised OCL clause.
Patterns covered:

- `forAll(v | v.isFinite())` on Array<Real, N> → NaN-injection test
- `forAll(v | v OP <lit>)` → out-of-range injection
- `self.<prop>.isFinite()` / `self.<prop> OP <lit>` invariants
- `<param>.isFinite()` / `<param> OP <lit>` event preconditions
- `result OP <lit>` post-conditions on return-typed events

Output runs under stock `cargo check --tests` (no external dev deps).
The witness count is the "this many contracts have a Rust witness"
metric for a coverage report.

#### `ontodsl coverage <file.onto> [--json [--out <path>]]`

Per-type table (or JSON) with:

- invariants count
- events count + how many have pre / post / effects / modifies
- properties count
- witness_tests count (matches what `gen-witness` emits)

Suitable as an audit artefact. Example:

```
coverage report for examples/ardupilot_navekf3.onto
type                     stereotype   invs  evts  pre  post  effs  mods  wit
─────────────────────────────────────────────────────────────────────────────
AP_NavEKF3               kind            3     2    2     0     2     2    8
─────────────────────────────────────────────────────────────────────────────
totals                                   3     2    -     -     -     -    8
```

#### `ontodsl explain <CODE>`

Human-readable manual entry for every S## (hard) / W## (advisory)
diagnostic the compiler emits. Current entries: S11, S13, S26, S27,
S28, S29, S30, S33, W29, W30, W31, W37, W38.

#### `ontodsl --verify`

Runs the Z3-backed LSP-strengthening / -weakening / commitment-closure
checks. Z3 occasionally OOMs the WASM heap when many contexts run
concurrently — observed as 2 transient test failures out of 700; isolated
runs of the same tests always pass.

### Replay diff-testing harness

`src/harness/replay.ts` defines `LogSource`, `Runner`, `Snapshot`,
`SnapshotDiff`, `compareSnapshots`, `replaySequence`,
`renderHtmlReport`. Plus `src/harness/adapters.ts` with:

- **`JsonLineLogSource`** — streams `.jsonl` files (one timestamped
  record per line). Optional field-name override + whitelist.
- **`SubprocessRunner`** — spawns a binary, communicates over
  line-oriented JSON (input on stdin, snapshot on stdout). Per-step
  timeout, restart-on-reset or message-on-reset modes.

Tolerance vocabulary: `absolute` / `relative` / `exact`, per-field
with `"*"` wildcard. HTML report includes pass/fail banner, meta
block (oracle / candidate / log source), and a sortable failures
table. Suitable as an artefact in a DO-178C / IEC 62304 audit
binder.

### Static-analysis advisories

- **W37 — coordination hot-spot**: two events write the same
  property; ontodls can't tell if they're serialised or interleavable.
- **W38 — effects-label inconsistency**: same property is written
  by events whose `effects:` sets disagree (e.g. `HardwareRead`
  vs `NetworkBroadcast`) — sharp ordering hazard.
- **W31 — Integer↔Real mix**: comparison codegen would silently
  truncate. Fires only on cases auto-promotion can't handle.
- **W29 / W30** — Z3 verifier ran out of decidable fragment; the
  clause is left as a runtime check.

## What changed in Q3 specifically

Day-by-day in the session log:

**Day 1**
- `Array<T, N>` primitive added (AST + parser + codegen Rust + TS)
- Matrix-via-nested-`Array<Array<T,N>,M>` (no separate Matrix type)
- `Set<Copy>::iter().copied()` fix (broke EKF; cargo-check regression
  added)
- `implies` operator (desugars to `not P or Q`)
- Multi-line `// SKIPPED` comments no longer leak OCL into Rust code
  positions
- 5-component ArduPilot batch migration with Flash 2.5

**Day 2**
- Bug 4 fixed: `Set<NamedType>` → `Vec<T>` (structs aren't Ord)
- Branded-ID inner type matches identity property's declared type
  (was hard-coded to String; broke AP_BattMonitor)
- Null-elision recursing into lambda bodies (3 shapes covered)
- Auto-`.0` unwrap in OCL→Rust nav on branded identity
- AP_BattMonitor / AP_Baro / AP_RangeFinder all compile cleanly

**Day 3** (this session)
- Witness emitter refactored: plain `#[test]` (no proptest dep),
  +3 patterns
- `JsonLineLogSource` + `SubprocessRunner` + e2e harness tests
- W37 (writes hot-spot) + W38 (effects-label inconsistency) static
  analysis
- CLI: `gen-witness`, `coverage`
- 698/698 tests pass

## What's NOT in the box

Honest list — the things that would land a regulated-industry sale
but aren't done:

1. **No real ArduPilot .bin parser / oracle bridge**. The harness has
   the slot; the user supplies the adapter. Implementing the mavlink
   `.bin` format + SITL bridge is the next 4-6 sessions of Paso 1.
2. **No C+ACSL or Ada/SPARK backend yet** (Paso 2 — Q4 plan).
3. **No C++ → .onto extraction** (Paso 3 — Q1 2027 per the plan).
4. **No DO-330 tool qualification** (Paso 6 — 12-18 month parallel
   track, not started).
5. **No federation / cross-`.onto` imports** (Paso 5 — Q2-Q3 2027).
6. **Z3 effects QF_UF encoding** — W37/W38 are pure data-flow; the
   sharper conflict detector via Z3 is still pending (rest of Paso 4).
7. **Witness emitter doesn't yet cover** conjunctions in lambdas
   (`v | v.isFinite() and v >= 0`), state-relation post-conditions
   (`self.x = self.x@pre + 1`), or set-membership invariants.

## Suite metrics

```
Test Files:  55 passed (55)
Tests:       698 passed (698)
Duration:    ~100s end-to-end
Cargo check: 16 .onto fixtures → real cargo check, all pass
```

The 16 fixtures include: lpf, drone, baseball, ardupilot_lowpass,
ardupilot_ac_pid, ardupilot_derivative, ardupilot_math,
ardupilot_motors, ardupilot_ahrs, ardupilot_fence, ardupilot_navekf3,
ardupilot_gps, ardupilot_baro, ardupilot_rangefinder,
ardupilot_battmonitor, array_state_vector.

## How to drive it end-to-end

```bash
# 1. Generate Rust runtime + witness tests + audit metrics
npx tsx src/cli/gen.ts gen-witness examples/ardupilot_navekf3.onto \
   --out ./out/ekf
npx tsx src/cli/gen.ts coverage examples/ardupilot_navekf3.onto \
   --json --out ./out/ekf/coverage.json

# 2. Verify the witness tests compile
(cd ./out/ekf && cargo check --tests)

# 3. (Future) Plug in your own log + oracle, run diff-test
node -e '
import { replaySequence, renderHtmlReport } from "./dist/harness/replay.js";
import { JsonLineLogSource, SubprocessRunner } from "./dist/harness/adapters.js";
const source = new JsonLineLogSource({ filePath: "./fixtures/flight.jsonl" });
const oracle = new SubprocessRunner({ cmd: "./bin/ardupilot-cpp-runner" });
const candidate = new SubprocessRunner({ cmd: "./out/ekf/target/release/runner" });
const diffs = [];
for await (const d of replaySequence(source, oracle, candidate, {
  "state[0]": { kind: "absolute", eps: 1e-6 },
  "*":        { kind: "relative", eps: 1e-3 },
})) diffs.push(d);
require("fs").writeFileSync("./out/ekf/report.html",
  renderHtmlReport("AP_NavEKF3", diffs, {
    oracle: "ArduPilot C++ SITL",
    candidate: "ontodls Rust",
    logSource: "flight-2024-05-20.bin → flight.jsonl",
  }));
'
```

## The honest pitch

ontodls today is **the contract-surface scaffold + the witness
machinery + the diff-testing slot**. The deltas a regulated client
would care about are:

- "Every public method has a runtime-enforced contract and a static
  witness test, both auto-generated from the same source of truth."
- "The same `.onto` produces both Rust (running on the embedded
  target) and the contract metadata (for the audit binder)."
- "Multiple-writer / inconsistent-effects hazards surface as build-
  time advisories with documented mitigation patterns."

What ontodls is **not** today: a turnkey C++→Rust translator. The
`impl_fn` body still gets written by an engineer; ontodls guarantees
the interface they implement against. For "I want all my numerical
code rewritten," reach for Cline/Cursor on top of ontodls.

The next concrete moves to close more of the gap to "saleable" are
the steps the research AI laid out: real-log diff-testing (Paso 1.a),
C+ACSL second target (Paso 2), C++→.onto extraction (Paso 3), and
tool qualification arc (Paso 6). Each is independently scoped; the
ordering matters but they parallelise.
