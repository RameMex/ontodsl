# Mass-validation report (Phase 12)

**Provider:** deepseek    **Cases:** online-banking, smart-thermostat, library-system, traffic-light, patient-monitoring

## Convergence per case

| Case | Disc | Reqs | Form | Design | Total | Converged? | Wall (s) |
|---|---:|---:|---:|---:|---:|---|---:|
| online-banking | 2 | 2 | 4 | 2 | 10 | ✓ 4/4 | 244 |
| smart-thermostat | 3 | 5 | — | — | 8 | ✗ aborted | 157 |
| library-system | 3 | 4 | 3 | 5 | 15 | ✗ aborted | 386 |
| traffic-light | 3 | 2 | 5 | — | 10 | ✗ aborted | 211 |
| patient-monitoring | 2 | 1 | 3 | 5 | 11 | ✓ 4/4 | 340 |

## Bloque 2 findings per case

| Case | Commitments cov. | Liskov edges | Discharge | W38 | W39 | S34 | S35 | W##_partial |
|---|---|---:|---|---:|---:|---:|---:|---:|
| online-banking | 4✓/0✗ | 10 | 6/6 | 1 | 4 | 0 | 0 | 12 |
| smart-thermostat | (aborted) | — | — | — | — | — | — | — |
| library-system | (aborted) | — | — | — | — | — | — | — |
| traffic-light | (aborted) | — | — | — | — | — | — | — |
| patient-monitoring | 4✓/0✗ | 4 | 13/13 | 3 | 5 | 0 | 0 | 13 |

## Aggregate

- **Converged 4/4 stages:** 2 / 5
- **Aborted (any stage failed):** 3 / 5
- **Total attempts across all stages, all cases:** 54
- **Mean attempts per case:** 10.8
