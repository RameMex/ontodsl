# Mass-validation report (Phase 12)

**Provider:** anthropic    **Cases:** online-banking, smart-thermostat, library-system, traffic-light, patient-monitoring

## Convergence per case

| Case | Disc | Reqs | Form | Design | Total | Converged? | Wall (s) |
|---|---:|---:|---:|---:|---:|---|---:|
| online-banking | 3 | 2 | 3 | — | 8 | ✗ aborted | 328 |
| smart-thermostat | 2 | 3 | 1 | 1 | 7 | ✓ 4/4 | 283 |
| library-system | 2 | 2 | 1 | 1 | 6 | ✓ 4/4 | 292 |
| traffic-light | 2 | 2 | 1 | 2 | 7 | ✓ 4/4 | 354 |
| patient-monitoring | 3 | 1 | 2 | 3 | 9 | ✓ 4/4 | 454 |

## Bloque 2 findings per case

| Case | Commitments cov. | Liskov edges | Discharge | W38 | W39 | S34 | S35 | W##_partial |
|---|---|---:|---|---:|---:|---:|---:|---:|
| online-banking | (aborted) | — | — | — | — | — | — | — |
| smart-thermostat | 4✓/1✗ | 10 | 11/11 | 6 | 16 | 0 | 0 | 11 |
| library-system | 4✓/1✗ | 11 | 21/21 | 7 | 18 | 0 | 0 | 29 |
| traffic-light | 4✓/1✗ | 11 | 12/12 | 1 | 8 | 0 | 0 | 12 |
| patient-monitoring | 4✓/1✗ | 11 | 14/14 | 2 | 13 | 0 | 0 | 14 |

## Aggregate

- **Converged 4/4 stages:** 4 / 5
- **Aborted (any stage failed):** 1 / 5
- **Total attempts across all stages, all cases:** 37
- **Mean attempts per case:** 7.4
