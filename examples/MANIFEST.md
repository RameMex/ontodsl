# Examples corpus — manifest

Corpus completo de dominios validados con ontodls. Cada dominio
contiene los 4 stages del SDLC en `.onto` + el código TypeScript
generado por el codegen target en `dist/`.

## Estructura por dominio

```
examples/<domain>/
├── discovery.onto          # Stage 1: Discovery (UFO-A goals, agents, commitments)
├── requirements.onto       # Stage 2: Requirements (system kind + events)
├── formalization.onto      # Stage 3: Formalization (regulatory + active rules)
├── design.onto             # Stage 4: Design (component decomposition)
├── code.onto (optional)    # Stage 5: Code-level subkind (only patient_monitoring)
└── dist/
    └── design.ts           # Generated TypeScript with branded types + contracts
```

## Anthropic (Sonnet) — 8 dominios

| Domain | Convergence | Discharge proofs (Φ_dec) | TS líneas |
|---|---|---:|---:|
| insulin_pump | ✓ 4/4 stages + code.onto (5/5) | 4/6 verified (2 S36) | 3388 |
| meeting_scheduler | ✓ 4/4 stages | 7/7 verified | 4050 |
| engine_control | ✓ 4/4 stages | n/a (categories activadas) | 4699 |
| online_banking | ✓ 4/4 stages | 13/13 verified | 4238 |
| smart_thermostat | ✓ 4/4 stages | 11/11 verified | 3721 |
| library_system | ✓ 4/4 stages | 13/21 verified (8 mem partial) | 3853 |
| traffic_light | ✓ 4/4 stages | 12/12 verified | 4388 |
| patient_monitoring | ✓ **5/5 stages** | 14/14 verified | 4476 |

**Sonnet total**: 32,813 líneas TS.

## DeepSeek — 20 dominios (Phase 23 N=20)

### Corpus original (8)

| Domain | Convergence | Stages | TS líneas |
|---|---|---|---:|
| insulin_pump_deepseek | ✓ | 4/4 | 5160 |
| meeting_scheduler_deepseek | ✓ | 4/4 | 2507 |
| engine_control_deepseek | ✓ | 4/4 | 4041 |
| online_banking_deepseek | ✓ | 4/4 | 4129 |
| smart_thermostat_deepseek | ✓ | 4/4 | 4794 |
| library_system_deepseek | ✓ | 4/4 | 3908 |
| traffic_light_deepseek | ✓ | 4/4 | 4770 |
| patient_monitoring_deepseek | ✓ | 4/4 | 4548 |

### Corpus nuevo Phase 23 (12)

| Domain | Convergence | Stages | TS líneas |
|---|---|---|---:|
| inventory_warehouse_deepseek | ✓ | 4/4 | 4108 |
| access_control_deepseek | ✓ | 4/4 | 3464 |
| ride_dispatch_deepseek | ✓ | 4/4 | 5801 |
| notification_system_deepseek | ✓ | 4/4 | 2469 |
| appointment_clinic_deepseek | ✓ | 4/4 | 2885 |
| factory_plc_deepseek | ✓ | 4/4 | 4248 |
| chat_moderation_deepseek | ✓ | 4/4 | 2776 |
| electricity_meter_deepseek | ✓ | 4/4 | 3648 |
| parking_garage_deepseek | ✓ | 4/4 | 3397 |
| payroll_system_deepseek | ✓ | 4/4 | 2357 |
| game_tournament_deepseek | ✓ | 4/4 | 2574 |
| delivery_drone_deepseek | ✓ | 4/4 | 2823 |

**DeepSeek total**: 74,407 líneas TS.

## Métricas globales

| Métrica | Valor |
|---|---:|
| Dominios totales | **28** |
| Convergence Anthropic | 8/8 (100%) |
| Convergence DeepSeek | **20/20 (100%, CI [83.9%, 100%])** |
| Discharge proofs substantivos | 130 (post Phase 22b) |
| Φ_dec coverage | 100% |
| **Total líneas TypeScript generadas** | **107,220** |

## Regenerar

```bash
# Re-generar TS para un dominio
node dist/cli/gen.js examples/<domain>/design.onto \
  --out examples/<domain>/dist --resolve-imports

# Verificar con Z3 (Bloque 2)
node dist/cli/gen.js examples/<domain>/design.onto \
  --out /tmp/verify --verify --resolve-imports
```

## TypeScript artifacts

Cada `dist/design.ts` contiene:

- **Branded identity types** (`type AccountId = string & { __brand: "AccountId" }`)
- **Property types y tipos compuestos** (Real → number, Set<T> → Set<T>, etc.)
- **DbC contracts** runtime — pre/post como assertions inline
- **Constructor factories** que enforzan invariantes en construction
- **Event functions** con pre-conditions verificadas

El código generado es ready-to-import en cualquier proyecto TypeScript.

## Historia

- **Phases 1–11**: Corpus original Anthropic (8 dominios), Bloque 2 verificador
- **Phases 12–14**: Mass-validation DeepSeek inicial sobre los 8 originales
- **Phase 16**: patient_monitoring extendido a 5 stages (code.onto demo)
- **Phases 17–22b**: F4 paridad establecida (DeepSeek 8/8 = Sonnet 8/8)
- **Phase 23**: Corpus expandido a N=20 (12 dominios nuevos), 20/20 convergence
- **Phase 24**: RxOCL bounded LTL extensión (`always`, `next`, `eventually`-stub)
- **Phase 24 (este manifest)**: TS generado y persistido para los 28 dominios
