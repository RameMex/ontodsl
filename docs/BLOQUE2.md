# Bloque 2 — Inter-stage refinement verifier

> Closes the loop between SDLC stages in the ontodls pipeline. For
> each refinement obligation defined in `PATTERNS_SDLC.md`, this
> module mines the source files and runs the appropriate check
> (coverage, Z3 implication, or both) against the **merged** multi-file
> AST produced by `--resolve-imports`.

## What's verified

| # | Obligation | Stage edge | Check kind | Codes |
|---|---|---|---|---|
| 1 | Commitment discharge — `event.pre ∧ event.post ⊨ commitment.predicate` | any → any | Coverage (annotation present) + Z3 implication | W34, W35, S34, W34_partial |
| 2 | Liskov cross-file — event override / decomposition refinement | any → any | Coverage (annotation present); intra-merged-AST LSP rules already enforced by `verifyLSPContracts` | W37 |
| 3 | Category membership — `kind.invariants ⊨ category.invariants` | Discovery/Formalization → any specialiser | Z3 implication | S35, W35_partial |
| 4 | Property correspondence + modifies closure | Requirements → Design | Set coverage by simple-name match | W38, W39 |

Hard codes (S##) fail the build with exit 2. Warnings (W##) print to
stdout and pass — partial discharge / partial annotation coverage is
acceptable during authoring.

## How it runs

```
node dist/cli/gen.js <root>.onto --out <dir> --verify --resolve-imports
```

The inter-stage block only activates when `--resolve-imports` loaded
at least two files. The pipeline:

1. **Parse + semantic + intra-stage Z3 LSP** — already existed before
   Bloque 2. Multi-file resolver merges declarations into one AST.
2. **Mine `// refines:` annotations** — `src/semantic/refinesMining.ts`
   scans every loaded source file for `// refines:` line-comments,
   accepting two qualified shapes:
   - `ns::Name` → commitment-discharge / category target.
   - `ns::Type.eventName` → Liskov / decomposition refinement.
3. **v0: coverage matrix** — `src/semantic/interStageCheck.ts` builds
   per-commitment and per-parent-event refiner tables, emits W34
   (orphan commitment), W35 (unknown target), W37 (parent event not
   found on named type).
4. **v0.1: Z3 commitment discharge** — `verifyCommitmentDischarge` in
   `lspCheck.ts`. For each resolved (event, commitment) link, SAT-check
   `[ownerInvariants ∧ event.pre ∧ event.post] ∧ ¬commitment.predicate`
   in the decidable arithmetic + Allen fragment. Translates the
   commitment predicate against the EVENT's owner type so property
   names align (the playbook recipe). Owner invariants are added to
   the antecedent because they hold in every state.
5. **v0.3: Z3 category membership** — `verifyCategoryMembership` in
   `lspCheck.ts`. For each (kind, category) pair where the kind
   specializes the category and the category has at least one
   non-`true` invariant, SAT-check `kind.effectiveInvariants ∧
   ¬category.invariants`. Same shared-Env trick.
6. **v0.4: Property correspondence** — `src/semantic/propertyCorrespondence.ts`.
   For each Liskov-coverage edge `parent.X ← [child1.A, child2.B, …]`:
   - **modifies-closure (W38):** every property name in `modifies(parent.X)`
     must appear in `⋃ modifies(childN.Y)`. Same-name match.
   - **property-correspondence (W39):** every `self.<prop>` referenced
     in `parent.X`'s pre/post must appear as an own-property of at
     least one refining child kind.

## Code locations

| File | Purpose |
|---|---|
| [src/semantic/refinesMining.ts](../src/semantic/refinesMining.ts) | Source-text miner: finds `// refines:` annotations, tracks owner-type by brace balancing |
| [src/semantic/interStageCheck.ts](../src/semantic/interStageCheck.ts) | Coverage matrix builder (commitments, Liskov) + W34/W35/W37 |
| [src/semantic/lspCheck.ts](../src/semantic/lspCheck.ts) | Z3 checks: existing LSP + `verifyCommitmentDischarge` (v0.1) + `verifyCategoryMembership` (v0.3) |
| [src/semantic/propertyCorrespondence.ts](../src/semantic/propertyCorrespondence.ts) | Property + modifies-closure check + W38/W39 |
| [src/cli/gen.ts](../src/cli/gen.ts) | Pipeline orchestration after Z3 LSP block |

## Source-text mining rules (v0.2)

Two qualified shapes accepted:

```
// refines: ns_a::CommitmentName            ← commitment discharge
// refines: ns_b::SystemKind.eventName       ← Liskov / decomposition
```

Unqualified `// refines: BareName` is **rejected** to avoid false
positives from English prose like `// Refines: supports X and Y`.

Trailing notes are tolerated:
```
// refines: ns::Comm (detection side)        ← target = ns::Comm, note ignored
```

Comma-separated lists yield multiple targets:
```
// refines: ns::CommA, ns::CommB
```

The look-behind from each event declaration stops at the first
non-blank, non-comment line — critical for correctness, since
Sonnet sometimes places `// refines:` comments above invariant
clauses inside the system kind body. Two consecutive blank lines
also stop the scan.

## Empirical results

Run on both cross-domain-validated cases:

### insulin-pump (4 stages, 1295 lines)

| Check | Result |
|---|---|
| Coverage (W34/W35) | 4/4 commitments covered, 0 warnings |
| Z3 discharge (S34/W34_partial) | **6/6 verified** in decidable subset; 6 partial-warnings about String/`result`/non-existent commitment-only props (expected) |
| Liskov coverage | 0 annotations (the LLM used English prose like `Refines: FR-1 deliverInsulin`; miner correctly rejected them) |
| Category membership | (no non-trivial categories — Discovery placeholders are `true;`) |
| Property correspondence | (no Liskov edges to audit) |

### meeting-scheduler (4 stages, 1465 lines)

| Check | Result |
|---|---|
| Coverage | 4/4 commitments covered, 0 warnings |
| Z3 discharge | **7/7 verified** in decidable subset (with String partial-warnings) |
| Liskov coverage | 12 parent-events covered by 23 annotations |
| Category membership | (no non-trivial categories) |
| Property correspondence | **8/12 fully covered, 4 gaps detected (real findings):** |
|  | • `confirmMeeting`: missing `location` in components (W38) |
|  | • `rejectPrematureConfirm`: missing `initiatorInformed` (W38) |
|  | • `rejectStaleConstraintRetention`: missing `participantsNotified` (W38) |
|  | • `requestMeeting`: missing `participantsNotified` + `proposedDate` (W38) |
|  | • 12× W39 on read-only property references absent from decomposition |

## Soundness model

Each Z3 check operates on a **decidable subset** of OCL (linear
arithmetic + Boolean + Allen interval algebra). Clauses that mention:

- String operations beyond equality
- Uninterpreted-function navigation chains of length ≥ 2 through refs
- `result` outside an event's own translation context
- Set operations beyond `size()`/`isEmpty()`/`includes()`

… are reported as **skipped** and surfaced via a companion
`W34_partial` / `W35_partial` warning. Each Z3 verdict is SOUND:

- **UNSAT in the decidable subset ⇒ no counterexample exists
  WITHIN that subset.** A clause that mentions a String operation
  cannot invalidate a UNSAT verdict on the arithmetic clauses; the
  W##_partial just flags that other clauses weren't checked.
- **SAT in the decidable subset ⇒ a counterexample exists in the
  arithmetic model.** If the SAT witness depends on a property the
  full predicate also constrains, the verdict could be a theoretical
  false positive — flagged by a companion warning.

This is the same soundness contract the existing `verifyLSPContracts`
uses for S29/S30. Bloque 2 reuses the underlying Z3 plumbing
(`Env`, `translateConjunction`, `EnvCtx`) without modification —
all four new checks share the same arithmetic model.

## Limitations and v1 increments

| Limitation | v1 increment |
|---|---|
| Comment-mining is brittle (especially with English-prose annotations) | First-class `refines:` clause in the grammar |
| Property correspondence uses naive same-name match | Explicit per-component rename table |
| W39 doesn't distinguish state vs quality properties | Split state/quality reporting; quality gets softer warning |
| Cross-file LSP for `override event` already works via merge | Document explicitly; add a coverage report similar to v0.2 |
| W36 (orphan category) not emitted | Add coverage check at interStageCheck level (analogous to W34) |

## Changelog

- 2026-05-27 — v0 — coverage half (W34, W35) shipped.
- 2026-05-27 — v0.1 — Z3 commitment-discharge proof (S34, W34_partial)
  + owner-invariants in antecedent.
- 2026-05-27 — v0.2 — miner extension for `ns::Type.eventName` Liskov
  pattern + coverage report + W37.
- 2026-05-27 — v0.3 — Z3 category-membership proof (S35,
  W35_partial); filters trivially-true category invariants.
- 2026-05-27 — v0.4 — property + modifies closure check (W38, W39)
  driven off the Liskov coverage table.

Empirically verified on insulin-pump and meeting-scheduler. All
hard-failure paths (S29, S30, S33, S34, S35) produced no violations
in either case; all warnings are either expected (String/decidability)
or real findings (W38/W39 gaps in the meeting-scheduler design).
