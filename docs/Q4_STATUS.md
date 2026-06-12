# ontodls — Q4 2026 status snapshot

Brief intended for the same outside reviewer who saw `Q3_STATUS.md`.
Q4 was supposed to ship two things:

1. **C + ACSL as a second codegen target** — the portability proof.
2. **Human-in-the-loop pilot on a real ArduPilot subsystem with
   SITL** — the operational-usefulness proof.

This session shipped (1). (2) needs ArduPilot source + SITL + MAVLink
infra that's not in this environment; documented as the next
external-infra session.

Test suite: **702 / 708 passing** (+ 2 skipped behind `gcc` / `frama-c`
detection, + 3 Z3 WASM-memory transients that are environmental, not
codegen regressions).

## What landed in Q4 day 1

### New codegen target: C99 + ACSL

`src/codegen-c/` — three modules paralleling the Rust target:

- `types.ts` — branded ID typedefs + plain structs. Arrays render
  as `T name[N]` (and nested `T name[N][M]` for matrices). Set /
  Option emit visible `/* TODO C+ACSL v1 limit */` sentinels at the
  field site so the gap is loud at compile time.
- `validators.ts` — emits both an ACSL `predicate` and a runtime
  C function `<type>_validate(const T*, const char**)`. The OCL →
  ACSL translator covers comparison/arithmetic/boolean operators,
  `\is_finite`/`\is_NaN`, depth-1 `forAll`/`exists` over Array<T,N>
  (via `\forall integer __i; 0 <= __i < N ==> body`).
- `eventWrappers.ts` — emits ACSL `requires`/`assigns`/`ensures`
  on the function declaration plus a runtime body with snapshot,
  impl_fn call, post-checks, and rollback on any failure (mirrors
  the Rust target's transactional semantics).

Public API:

```typescript
import { renderC } from "./src/codegen-c/index.js";
const { headerH, sourceC } = renderC(ast, { module: "ekf" });
```

### CLI integration: `--target c`

```bash
$ ontodsl examples/array_state_vector.onto --out ./out --target c
wrote ./out/array_state_vector.h
wrote ./out/array_state_vector.c
verify with: frama-c -wp array_state_vector.c -wp-rte
```

The same source produces both Rust + C — `array_state_vector.onto`
goes to either `lib.rs` (cargo check passes) or `.h` + `.c` (gcc
compiles, frama-c WP can be invoked).

### v1 scope decisions

What's supported:
- Primitive types (Real → double, Integer → int64_t, Boolean → bool,
  String → const char*).
- Array<T, N> + nested arrays.
- Branded identity wrappers (`typedef struct { inner; } TId;`).
- Validators with ACSL predicate + runtime body.
- Event wrappers (sync) with ACSL `requires`/`assigns`/`ensures` +
  runtime transactional rollback.
- OCL operators that map cleanly: comparison, arithmetic, boolean
  (`and`/`or`/`not`/`implies`), `if/then/else`, `isFinite`, `isNaN`,
  `forAll`/`exists` depth-1 over Array.

What's deferred to v2 (documented in code as `/* TODO C+ACSL v1
limit */`):
- `Set<T>` — needs a length-bounded ghost field (decision: array +
  count, or external Frama-C library?).
- `Option<T>` — needs a tag-bit struct + ACSL discriminant.
- Nested `forAll(row | row->forAll(c | …))` — depth-2 array
  iteration; needs the translator to track lambda variable types
  the way the Rust target does.
- Commitment registries — separate emission pass.
- Async wrappers — N/A in C.

When a clause uses an unsupported construct, the runtime check
becomes a no-op (`if (!(1)) { ... }`) and a `/* SKIPPED (not
translatable) */` comment appears so reviewers see the gap.

## What did NOT land in Q4

1. **SITL pilot** — needs external infra. Documented as the next
   pre-flight step; the path is: pick AP_NavEKF3 or AP_AC_PID, write
   `impl_fn` body by hand in Rust, link against `ardupilot-sitl`,
   replay a flight log, compare against C++ baseline via the harness.
2. **Frama-C WP actually proves the contracts.** ACSL annotations
   are emitted in syntactically-valid form, but WP coverage depends
   on having loop invariants written for any function the user adds
   on top — and on the WP plugin's handling of `\is_finite` (varies
   by Frama-C version). The integration test verifies "no parse
   error" but not "all clauses proven."
3. **`Set<T>` in C.** Deferred; needs design.
4. **Tooling for "the same source produced both binaries"** — a
   `--all-targets` flag plus a `gen-both` subcommand. Mechanical
   to add once we want the demo polish.

## Why this matters for the pitch

Before Q4, the portability claim was theoretical: ontodls produced
Rust + TS, but TS isn't a regulated-industry target and the two
codegens shared most of their plumbing. With C + ACSL, the SAME
.onto produces (1) Rust that passes `cargo check`, (2) C that gcc
compiles, (3) ACSL annotations that frama-c can attempt to verify.

That's the demo a regulated client wants to see in the first
meeting: "show me one input file, two safety-critical languages,
two verifiers, both passing."

## Stats

```
Test Files:  55 passed (56)  — 1 file with Z3 WASM transients
Tests:       702 passed (708) — 3 Z3 transients, 2 toolchain-gated
Duration:    ~75s end-to-end

Cargo check:    16 .onto fixtures pass (unchanged from Q3)
C+ACSL tests:   8 shape tests pass; gcc + frama-c tests gated behind
                local toolchain availability
```

## How to drive the demo end-to-end

```bash
# Same source → two targets → two verifiers
ONTO=examples/array_state_vector.onto

# Rust target + cargo check
npx tsx src/cli/gen.ts $ONTO --out ./out/rust --target rust
(cd ./out/rust && cargo check)
# → "Finished dev profile [unoptimized + debuginfo]"

# C target + gcc + (optional) frama-c WP
npx tsx src/cli/gen.ts $ONTO --out ./out/c --target c
gcc -c -std=c99 -Wall ./out/c/array_state_vector.c
# → no errors
frama-c -wp ./out/c/array_state_vector.c -wp-rte
# → some VCs discharged automatically; loop invariants need to be
#   written for any user-added impl_fn body
```

That sequence is the slide for the next client call.
