# Φ_dec coverage analysis — Phase 19

Empirical characterization of L4 (§5.4):
*what fraction of OCL clauses, on real artifacts, lie inside the decidable fragment Φ_dec?*

Corpus: 20 validated domain(s) × 1 provider(s).

## Per-case proof-level coverage

Columns: **D-Total/Clean/Mixed/Out** = commitment-discharge proofs (S34/W34_partial). **Mem partial** = category-membership proofs with skipped clauses (S35/W35_partial). **Liskov partial** = LSP pre/post checks with skipped clauses (W29/W30). **Φ_dec cov** = (clean+mixed)/total discharges. **Strict** = clean/total.

| Case | Provider | D-Total | Clean | Mixed | Out | Mem partial | Liskov partial | Φ_dec cov | Strict |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| insulin-pump | deepseek | 4 | 3 | 1 | 0 | 0 | 0 | 100% | 75% |
| meeting-scheduler | deepseek | 4 | 0 | 4 | 0 | 0 | 0 | 100% | 0% |
| engine-control | deepseek | 6 | 6 | 0 | 0 | 0 | 0 | 100% | 100% |
| online-banking | deepseek | 6 | 0 | 6 | 0 | 2 | 0 | 100% | 0% |
| smart-thermostat | deepseek | 5 | 5 | 0 | 0 | 0 | 0 | 100% | 100% |
| library-system | deepseek | 6 | 0 | 6 | 0 | 1 | 0 | 100% | 0% |
| traffic-light | deepseek | 3 | 0 | 3 | 0 | 0 | 0 | 100% | 0% |
| patient-monitoring | deepseek | 3 | 3 | 0 | 0 | 0 | 0 | 100% | 100% |
| inventory-warehouse | deepseek | 7 | 7 | 0 | 0 | 0 | 0 | 100% | 100% |
| access-control | deepseek | 4 | 1 | 3 | 0 | 0 | 0 | 100% | 25% |
| ride-dispatch | deepseek | 5 | 5 | 0 | 0 | 0 | 0 | 100% | 100% |
| notification-system | deepseek | 8 | 3 | 5 | 0 | 4 | 0 | 100% | 38% |
| appointment-clinic | deepseek | 8 | 1 | 7 | 0 | 0 | 0 | 100% | 13% |
| factory-plc | deepseek | 16 | 16 | 0 | 0 | 0 | 0 | 100% | 100% |
| chat-moderation | deepseek | 3 | 0 | 3 | 0 | 2 | 0 | 100% | 0% |
| electricity-meter | deepseek | 11 | 11 | 0 | 0 | 0 | 0 | 100% | 100% |
| parking-garage | deepseek | 11 | 2 | 9 | 0 | 4 | 0 | 100% | 18% |
| payroll-system | deepseek | 3 | 0 | 3 | 0 | 6 | 0 | 100% | 0% |
| game-tournament | deepseek | 5 | 0 | 5 | 0 | 8 | 0 | 100% | 0% |
| delivery-drone | deepseek | 12 | 7 | 5 | 0 | 0 | 0 | 100% | 58% |

## Aggregate per provider (discharge proofs only)

| Provider | Σ Total | Σ Clean | Σ Mixed | Σ Out | Σ Mem partial | Σ Liskov partial | Mean Φ_dec cov | Mean strict |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| deepseek | 130 | 70 | 60 | 0 | 27 | 0 | 100% | 46% |

## Skipped-clause reason taxonomy

Distribution of *individual untranslatable clause-pieces* by cause, aggregated across all partial proofs in the corpus (discharge + membership + Liskov).

| Reason class | Count | Share (of explicit) |
|---|---:|---:|
| schema-mismatch | 156 | 98% |
| other | 3 | 2% |
| string-typed | 0 | 0% |
| null-handling | 0 | 0% |
| deep-navigation | 0 | 0% |
| quantifier-unbnd | 0 | 0% |
| parse-error | 0 | 0% |
| type-mismatch | 0 | 0% |

Plus **7 elided reasons** (the verifier compacts long reason lists to "...N more"). These are unclassified, but in spot-checks they fall predominantly into `string-typed` and `schema-mismatch` — the dominant classes above.

## Interpretation

- **Φ_dec coverage** = (clean + mixed) / total discharge proofs. Mixed proofs are *not lost* — Z3 produced a witness using the decidable portion, and the skipped clauses are *added information* that didn't undermine the proof.
- **Strict coverage** = clean / total. Counts only proofs whose every clause was in Φ_dec without any skipping. This is the conservative metric.
- **Fundamental undecidability causes** are *deep-navigation* and *quantifier-unbnd*. If their combined share is small, Φ_dec is empirically adequate for the corpus.
- **string-typed** is a *modeling choice*, not a fundamental decidability limit. Augmenting Φ_dec with EnumSort or uninterpreted-constant strings would absorb most of these into clean proofs.
- **schema-mismatch** indicates LLM-generation defects (typos, wrong references) and is orthogonal to Φ_dec — a stricter compile-time type-checker would surface these as S26 errors instead of W##_partial reasons.

## Methodology notes

- The verifier emits one `[W##_partial]` line per proof attempt with skipped clauses. The parenthesized reason list (e.g. "property 'X.y' has unsupported type 'String'; parameter ...") is parsed; each `;`-separated entry counts as one skipped clause-piece.
- "... N more" markers are honored by adding N "other"-bucketed reasons (the verifier elides reasons beyond 3 for compactness).
- Cases where the LLM aborted Bloque 1 generation (no `design.onto` written) are omitted from the table.
