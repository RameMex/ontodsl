# Cross-model escalation pilot — Phase 17

**M1 = deepseek, M2 = anthropic**, 5 cases.

## Per-case results

| Case | M1 outcome | Escalated? | M2 outcome | Final | Total time (s) |
|---|---|---|---|---|---:|
| online-banking | ✓ converged | no | n/a | ✓ | 0 |
| smart-thermostat | ✗ aborted | yes | ✓ converged | ✓ | 0 |
| library-system | ✗ aborted | yes | ✓ converged | ✓ | 0 |
| traffic-light | ✗ aborted | yes | ✓ converged | ✓ | 0 |
| patient-monitoring | ✓ converged | no | n/a | ✓ | 0 |

## Aggregate

- **Escalation rate:** 3/5 (60%)
- **M1-only success:** 2/5
- **Final success:** 5/5 (100%)
- **Recovery rate** (M2 succeeded when M1 failed): see per-case data; cases where escalated=yes AND finalConverged=true.
- **Recovery r:** 3/3 = 1.00
