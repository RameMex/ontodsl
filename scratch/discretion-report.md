# Discretion-failure analysis — Phase 18

Two-dimensional discretion-failure measurement (DDF + SDF)
across 8 domains × 2 providers.

## Per-case results

| Case | Provider | Refines DDF | Cat SDF | Commit DDF | Commit SDF | Combined |
|---|---|---:|---:|---:|---:|---:|
| insulin-pump | anthropic | 100% | 38% | 0% | 0% | 0% |
| insulin-pump | deepseek | 42% | 50% | 0% | 0% | 29% |
| meeting-scheduler | anthropic | 100% | 63% | 0% | 0% | 0% |
| meeting-scheduler | deepseek | parse-failed | — | — | — | — |
| engine-control | anthropic | 100% | 50% | 0% | 0% | 0% |
| engine-control | deepseek | 61% | 45% | 0% | 0% | 21% |
| online-banking | anthropic | 4% | 0% | 0% | 0% | 96% |
| online-banking | deepseek | 29% | 22% | 0% | 25% | 42% |
| smart-thermostat | anthropic | 0% | 0% | 0% | 0% | 100% |
| library-system | anthropic | 0% | 0% | 0% | 0% | 100% |
| library-system | deepseek | 29% | 29% | 0% | 0% | 51% |
| traffic-light | anthropic | 12% | 36% | 0% | 0% | 56% |
| patient-monitoring | anthropic | 19% | 0% | 0% | 0% | 81% |
| patient-monitoring | deepseek | 54% | 33% | 0% | 0% | 30% |

## Aggregate per provider

| Provider | Mean refines DDF | Mean cat SDF | Mean commit DDF | Mean commit SDF | Mean combined |
|---|---:|---:|---:|---:|---:|
| anthropic | 42% | 23% | 0% | 0% | 54% |
| deepseek | 43% | 36% | 0% | 5% | 35% |

## Methodology

- **Refines DDF**: fraction of events without a `refines:` clause out of total events in the merged AST. Notes: events in upstream stages (Discovery, system kind in Requirements) genuinely don't need refines targets; the metric over-counts in those cases. Future analyzer should filter by namespace/stage.
- **Category SDF**: fraction of categories whose invariants are exclusively `true;` placeholders out of total categories.
- **Commit DDF / SDF**: fraction of commitments lacking a `predicate:` clause (DDF) and fraction whose predicate is literal `true` (SDF).
- **Combined compliance**: product of (1 - DDF) over each slot type. Approximates the fraction of structural slots that are both filled and substantively non-trivial.
