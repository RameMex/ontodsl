# ontodsl

**Ontology-driven contracts your AI can't talk its way past.**

`ontodsl` is a DSL for modeling software with [UFO](https://nemo.inf.ufes.br/en/projetos/ufo/)-grounded
ontologies (kinds, roles, relators, agents, commitments) plus Design-by-Contract
(OCL invariants, pre/post-conditions), verified with a **Z3 SMT solver** and
compiled **deterministically** to TypeScript, Rust, C+ACSL and a TanStack
fullstack bundle.

The verifier is the point: an LLM (or a human) proposes a model, and the
machine — not the author — decides whether it holds. Diagnostics come with a
repair catalog (`explain`) designed for agent repair loops.

```
.onto ──parse──► AST ──validate──► S##/W## ──Z3──► proofs ──gen──► code
                                     │
                              explain(code) ──► repair recipe (for agents)
```

## Install

```bash
npm install ontodsl
```

Node ≥ 20. Z3 runs via WASM (`z3-solver`) — no native toolchain needed.

## Quick start

```ts
import {
  parse,
  verifyLSPContracts,
  verifyCommitmentPredicates,
  renderTypeScript,
} from "ontodsl"

const src = `schema "onto/0.1";
namespace billing;

kind Account {
  identity: accountId;
  property accountId: String;
  property balance: Real;
  invariants { self.balance >= 0.0; }

  event withdraw(amount: Real): Boolean {
    pre: amount > 0.0 and self.balance >= amount;
    post: self.balance = self.balance@pre - amount;
    modifies: self.balance;
  }
}`

const { ast, errors } = parse(src, { validateSemantics: true })
if (!ast || errors.length) throw new Error(errors.map(e => e.message).join("\n"))

// Z3-backed obligations (async, in-process WASM)
const diags = [
  ...(await verifyLSPContracts(ast)),          // Liskov pre/post (S29/S30)
  ...(await verifyCommitmentPredicates(ast)),  // commitment strength (S33)
]

// Deterministic codegen: branded ids, runtime validators,
// pre/post-checking event wrappers with transactional rollback.
const code = renderTypeScript(ast)
```

What the generated wrapper buys you: `wrapAccountWithdraw(impl)` checks the
pre-condition **before** mutating, snapshots `@pre` state, runs *your*
implementation, checks the post-condition, and **rolls back** on violation.
Same AST → same bytes, every time.

## CLI

```bash
ontodsl model.onto --out gen --target ts        # also: rust | c | tanstack
ontodsl model.onto --out gen --verify --strict  # Z3 + promote W## to hard
ontodsl explain S22                             # repair-catalog entry for a diagnostic
ontodsl gen-witness model.onto --out crate      # Rust contract-witness test crate
ontodsl coverage model.onto                     # contract surface metrics
```

## What gets verified

| Layer | Examples | Codes |
|---|---|---|
| Structural (UFO) | identity, rigidity, specialization matrix, role/relator wiring | S1–S26 |
| OCL typecheck | unknown names, type mismatches | S27/S28 |
| Z3: Liskov | strengthened pre / weakened post in overrides | S29/S30 |
| Z3: commitments | child predicate weaker than parent; discharge proofs (`refines`) with vacuity detection | S33, S34/S36 |
| Z3: categories | member invariants entail category invariants | S35 |
| Z3: temporal | bounded `always`/`next` over event traces | S40 |
| Inter-stage | every upstream commitment has a downstream refiner; property correspondence | W34–W39 |

`W##` codes mark clauses outside the decidable fragment — partial verification
is reported honestly, never silently skipped.

## Codegen targets

| Target | Output |
|---|---|
| `ts` | branded id types, factories, `validate*()` runtime validators, sync/async event wrappers with rollback, commitment lifecycle registries |
| `tanstack` | Drizzle schema + services (UPDATE statements synthesized from post-conditions) + API routes + React forms |
| `rust` | `no_std` lib (alloc/heapless), newtype ids, validators, wrappers, concrete contract-witness tests |
| `c` | C99 + ACSL annotations checkable with Frama-C/WP |

Model evolution: `diffOnto(oldAst, newAst)` classifies every change as
`BREAKING / ADDITIVE / INTERNAL` — wire `ontodsl diff --strict` into CI to
block breaking model changes.

## For agent builders

The package is designed to sit inside LLM repair loops:

- `getExplainEntry(code)` returns description, typical cause, wrong/right
  examples and a one-line fix recipe for every diagnostic.
- Diagnostics are deterministic and machine-readable — the loop converges
  because the target doesn't move.
- Render models to prose for the agent's context (LLMs decode prose better
  than raw `.onto` — measured); keep the `.onto` as the verification substrate.

## Status

Research prototype, actively developed. 780+ tests including negative
(mutation) tests of the verifier; validated on a corpus of 28 domains with
130 Z3 discharge proofs across a 5-stage software lifecycle
(discovery → requirements → formalization → design → code).

## License

[FSL-1.1-MIT](./LICENSE.md) (Functional Source License): free for internal
use, modification and redistribution — except offering a competing
product/service. Each release automatically becomes MIT two years after
publication.

Copyright 2026 Rene Meza Escamilla
