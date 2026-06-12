# Cross-model comparison (Phase 13)

Same 5 new domains, DeepSeek vs Sonnet, fresh start each.
Same playbook (10 hard rules post-Phase-12), same prompts,
same convergence criterion (parse + multi-file CLI verify + Z3).

## Convergence comparison

| Case | DeepSeek (attempts / converged?) | Sonnet (attempts / converged?) | F4 hold? |
|---|---|---|---|
| library-system | 15 attempts ✗ aborted | 6 attempts ✓ | ✓ Sonnet recovered |
| online-banking | 10 attempts ✓ | 8 attempts ✗ aborted | ✗ DeepSeek only |
| patient-monitoring | 11 attempts ✓ | 9 attempts ✓ | Sonnet faster |
| smart-thermostat | 8 attempts ✗ aborted | 7 attempts ✓ | ✓ Sonnet recovered |
| traffic-light | 10 attempts ✗ aborted | 7 attempts ✓ | ✓ Sonnet recovered |

## Aggregate

- **DeepSeek convergence:** 2/5 (40%)
- **Sonnet convergence:** 4/5 (80%)
- **Cross-model recovery (Sonnet succeeded where DeepSeek failed):** 3 of 3 aborted DeepSeek cases

## F4 verdict (capability-equalizer)

F4 (verifier-as-capability-equalizer) is empirically reinforced: 3 case(s) where Sonnet authored what DeepSeek could not. The capability gap between providers is real and detectable; the verifier interface remains neutral.
