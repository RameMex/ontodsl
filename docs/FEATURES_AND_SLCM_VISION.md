# ontodls — Features completas + Visión SLCM

**Audiencia:** otra IA que va a verificar el sistema y la idea.
**Objetivo:** dar una vista exhaustiva (sin huecos) de
(A) cada feature implementada de `ontodls`,
(B) la idea conceptual del **System Life Cycle Model (SLCM)** que dirige todo,
(C) qué está validado empíricamente y qué NO.

Cada feature lleva pointer a archivo en el repo. Donde aplique, hay un
comando de verificación para reproducir el comportamiento.

Documentos complementarios (no es necesario leerlos primero, son referencia):
- `docs/VERIFICATION_BRIEF.md` — claims + comandos para re-derivar números.
- `docs/BLOQUE2_EMPIRICAL.md` — historia detallada de las 26 fases.
- `docs/PRODUCT_BACKLOG.md` — lo que NO está construido (gap a producto).

---

## PARTE A — Features de ontodls (lo que sí está construido)

### A.1 — DSL `.onto` (lenguaje de modelado)

DSL custom que materializa **UFO-A** (Unified Foundational Ontology,
Guizzardi) + **Design-by-Contract** + **OCL invariants** en una sola
sintaxis.

**Constructos UFO-A soportados:**

| Constructo | Sintaxis | Semántica UFO-A |
|---|---|---|
| `kind` | `kind Account { ... }` | Tipo rígido sortal (identidad propia) |
| `subkind` | `subkind PremiumAccount specializes Account { ... }` | Sortal especializado, herencia rígida |
| `role` | `role Borrower { ... }` | Tipo anti-rígido relacional |
| `category` | `category SafetyConstraints where bearer: X { ... }` | Tipo dispersivo (no provee identidad) |
| `relator` | `relator LoanContract mediates Borrower, Lender { ... }` | Relación material truth-maker |
| `commitment` | `commitment NoOverdraft { predicate: ... }` | Obligación deóntica entre agentes |

**Constructos DbC soportados:**

```onto
event transfer(from: Account, to: Account, amount: Real): TransferResult
  refines online_banking_discovery::NoOverdraftCommitment {
    pre: from.balance >= amount and amount > 0.0;
    post: from.balance = from.balance@pre - amount and
          to.balance = to.balance@pre + amount;
    modifies: from.balance, to.balance;
  }
```

| Cláusula | Significado |
|---|---|
| `pre:` | precondición que el caller debe garantizar |
| `post:` | postcondición que el callee garantiza |
| `modifies:` | conjunto de propiedades que cambian |
| `refines:` | apunta a commitments / eventos de stages anteriores |

**Constructos OCL soportados (invariantes):**

```onto
kind Account {
  property balance: Real;
  property owner: String;
  invariants {
    self.balance >= 0.0;
    self.owner <> '';
  }
}
```

Reservadas: `self`, `@pre`, `<>`, `implies`, `and`, `or`, `not`,
`isNull`, `oclIsKindOf`, `oclIsTypeOf`.

**Constructo RxOCL (Phase 24) — bounded LTL:**

```onto
kind Account {
  property balance: Real;
  invariants { self.balance >= 0.0; }
  trace {
    always self.balance >= 0.0;
    next self.balance = self.balance@pre + 1;
    eventually within 10 steps: self.isFrozen = false;  // stub
  }
}
```

- `always P` — invariante temporal (verificado inductivamente).
- `next P` — propiedad en el siguiente paso (verificado).
- `eventually within N steps: P` — declarado, BMC pendiente (`W40_pending`).

**Constructo `import` para encadenar stages:**

```onto
import "./discovery.onto";
import "./requirements.onto";
import "./formalization.onto";
```

Soporta resolución transitiva (`--resolve-imports`).

**Parser:** Chevrotain LL(1), separación lexer/grammar/builder + un
pre-extractor que parsea bloques sensitive (invariants, post, trace)
con un mini-lexer custom para soportar OCL inline.
**Path:** `src/parser/{tokens.ts, grammar.ts, builder.ts, preExtract.ts}`.

---

### A.2 — Verifier (Bloque 2): 4 proof obligations + Z3

Verifier que checa **cuatro obligaciones formales** entre stages
consecutivos del SDLC usando Z3 SMT solver (vía WASM).

| ID | Nombre | Query SMT | Hard | Soft |
|---|---|---|---|---|
| **O1** | Commitment discharge | `event.pre ∧ event.post ∧ ¬predicate` SAT ⇒ no discharge | `[S34]` | `[W34_partial]` |
| **O2** | Liskov substitution cross-file | `(child.pre ⇒ parent.pre) ∧ (child.post ⇒ parent.post)` | `[S29] [S30]` | `[W29] [W30]` |
| **O3** | Category membership | `member.invariants ∧ ¬category.invariants` SAT ⇒ violación | `[S35]` | `[W35_partial]` |
| **O4** | Property correspondence | child declara todas las props/modifies del parent | `[S39]` | `[W38] [W39]` |

**Diagnostic codes auxiliares:**

| Code | Significado | Fase |
|---|---|---|
| `[S36]` | Vacuous discharge: el predicate del commitment NO referencia ninguna propiedad del event-owner ⇒ discharge se vuelve trivial | Phase 20 |
| `[S40]` | Trace clause violation (`always` o `next` falla inductivamente) | Phase 24 |
| `[W37]` | Property referenciada en post pero no declarada en `modifies:` | — |
| `[W40_pending]` | `eventually within N steps` declarado pero BMC no implementado | Phase 24 |

**Path:** `src/semantic/lspCheck.ts` (~2,000 líneas, núcleo del verifier).

**Verificación que las 4 obligaciones están wired:**
```bash
grep -nE "verifyCommitmentDischarge|verifyLSPContracts|verifyCategoryMembership|checkPropertyCorrespondence" src/semantic/index.ts
```

---

### A.3 — Fragmento OCL decidible Φ_dec

Subconjunto de OCL que es **decidible** en Z3 (sin loops infinitos
ni indecidibilidad teórica). Incluye:

- Aritmética lineal sobre Real / Int.
- Conectores Booleanos completos (`and`, `or`, `not`, `implies`).
- Relaciones temporales de Allen sobre intervalos.
- String como sort no-interpretado + axioma `Distinct(...)` para
  literales (Phase 21).
- Predicado `__isNull` para nullability (Phase 21) + axioma
  `Not(isNull(literal))` (Phase 22b — cierra soundness gap).
- Quantifiers acotados (`forAll` sobre listas finitas).

**Lo que NO soporta:**
- Recursión arbitraria.
- Strings interpretados (regex, substring, length non-trivial).
- Cuantificadores sobre dominios infinitos.

**Empirical adequacy (Phase 19, 22b):** sobre 130 proofs de
discharge medidos en el corpus de 28 dominios, **100% caen en Φ_dec**.
Las cláusulas que no caen se reportan como `W##_partial` y el verifier
continúa con el resto decidible.

**Path:** detección + traducción en `src/semantic/lspCheck.ts`,
particularmente `translateExpression()` y `translateInvariantClause()`.

**Reproducir cobertura:**
```bash
node scratch/phidec-coverage.mjs
# → scratch/phidec-coverage-report.md
```

---

### A.4 — RxOCL: trace clauses con LTL acotado (Phase 24)

Extensión que permite **propiedades temporales** sobre invariantes
de un kind/subkind.

**Operadores soportados:**

| Operador | Semántica | Verificación |
|---|---|---|
| `always P` | invariante en todos los estados | Inductivo (Z3) |
| `next P` | P se cumple en el siguiente paso | Reescribe `@pre` y verifica |
| `eventually within N steps: P` | P se cumple dentro de N pasos | **Stub (W40_pending)** — BMC diferido a Phase 24.1 |

Verificador construye un "pre-state" sintético del kind y verifica
inductivamente sobre los eventos que lo modifican (vía `modifies:`).

**Path:**
- Gramática: `src/parser/grammar.ts` (regla `traceBlock`).
- Parser: `src/parser/preExtract.ts` (`splitTraceBody`).
- Verifier: `src/semantic/lspCheck.ts` (`verifyTraceClauses`,
  `rewriteToPreState`).

---

### A.5 — Pipeline de authoring asistido por LLM

Pipeline end-to-end que va de un **gold case JSON** (descripción
informal del dominio: vision, goals, glossary) a 4 archivos `.onto`
verificados por Bloque 2.

**Componentes:**

1. **Playbook prompt** (`scratch/sdlc-playbook-test.mjs`).
   - System prompt extensivo (~3,000 líneas).
   - Reglas, patrones, ejemplos por stage.
   - "Smart hints" que se inyectan cuando un diagnostic específico
     aparece.

2. **Multi-LLM authoring.** Soportados:
   - DeepSeek (cheap, $0.14/$0.28 per M tokens).
   - Anthropic Sonnet (premium).
   - Provider configurable vía `--provider`.

3. **Repair loop.** Cuando el verifier emite hard diagnostics:
   - Captura del diagnostic + smart-hint específico.
   - Re-prompt al LLM con el error y el hint.
   - Hasta `--max-attempts` retries (default 10).

4. **Cross-provider escalation (Phase 17).** Si DeepSeek falla
   N attempts, escala a Sonnet con todo el contexto previo.

**Convergencia empírica (Phase 23):**
- DeepSeek solo, N=20 dominios, 5 rondas de hardening:
  - v1 baseline → 2/12 nuevos (17%).
  - v5 final → 12/12 nuevos (100%).
  - **Total: 20/20 (100%)** con Wilson 95% CI **[83.9%, 100%]**.

**Reproducir:**
```bash
node scratch/sdlc-playbook-test.mjs --case <id> --provider deepseek --max-attempts 10
```

Logs preservados en `scratch/phase23_logs/`, `scratch/phase23_logs_v2/`,
... `scratch/phase23_logs_v5/`.

---

### A.6 — Codegen multi-target

CLI `node dist/cli/gen.js <design.onto> --out <dir> --target <X> [--verify]`.

#### A.6.1 — Target `ts` (default)

Genera para cada kind/subkind/role/category:
- TypeScript `interface`.
- Factory function `createX(...)`.
- `validateX(value): Violation[]` — runtime check de invariantes.

**Path:** `src/codegen/` (varios archivos por concern).

**Output:** 28 dominios × `design.ts` ≈ **107,220 líneas TS totales**.

**Reproducir:**
```bash
node dist/cli/gen.js examples/online_banking/design.onto \
  --out /tmp/check --target ts --resolve-imports
```

#### A.6.2 — Target `tanstack` (Phase 25.2-25.4)

Genera **4 archivos fullstack** desde un solo `.onto`:

| Archivo | Contenido | Determinismo |
|---|---|---|
| `db/schema.ts` | Drizzle tables + types per kind | 100% |
| `services/index.ts` | Async function skeletons per event | 100% scaffold, 74% mutation |
| `server/routes.ts` | POST endpoints por event con zod schemas | 100% |
| `web/forms.tsx` | React form components por event | 100% |

**Síntesis Phase 25.3-25.4:** del 74% de servicios cuya post-condición
es traducible, genera un `UPDATE ... SET ... WHERE ...` Drizzle real
desde la AST OCL. Patrones reconocidos:
- Literal assignments.
- `@pre col + arithmetic`.
- `if cond then A else B` (Phase 25.4).
- Boolean ops.

**Métricas medidas (Phase 25.4 sobre 28 dominios):**
- 324 Drizzle table+type exports.
- 731 service function skeletons.
- 731 API routes.
- 731 React forms.
- 548/731 services con mutación auto-derivada (**74%**).

**Path:** `src/codegen-tanstack/index.ts` (~700 líneas).

**Reproducir:**
```bash
node dist/cli/gen.js examples/online_banking/design.onto \
  --out /tmp/banking_app --target tanstack --resolve-imports
```

#### A.6.3 — Targets adicionales en `src/codegen/` (parcial)

- Rust (`--target rust`) — types + validators (no fullstack stack).
- C (`--target c`) — structs + validators (uso embedded/safety-critical).

---

### A.7 — Runtime invariant enforcement (Phase 25.1)

La función `validateX()` generada se llama dentro de cada transacción
de mutación en el demo bancario. Si retorna violaciones:
- Transacción se hace rollback.
- API retorna `HTTP 422 { kind: "InvariantViolation" | "CommitmentBreach", ... }`.

**Demo app fullstack:** `examples/online_banking/app/`.
- React 19 + TanStack Router + Drizzle + libsql/SQLite + Node HTTP.
- 5 endpoints reales (login, accounts, transfer initiate/execute, admin).
- 5 scenarios validados durante la sesión vía curl:
  1. Login alice / accounts list.
  2. Atomic transfer + execute (audit ordering preservado).
  3. Overdraft 5000 → 422 CommitmentBreach.
  4. Self-transfer → 422 InvariantViolation.
  5. Sweep stale pending transfers.

**Path:** `examples/online_banking/app/src/services/transfer.ts`.

**Reproducir:**
```bash
cd examples/online_banking/app
npm install
npm run db:push -- --force
npm run db:seed
npm run dev:api &      # port 5174
npm run dev:web &      # port 5173
# http://localhost:5173
```

---

### A.8 — CLI

Una sola entry point: `dist/cli/gen.js`.

| Flag | Efecto |
|---|---|
| `--out <dir>` | Directorio de salida |
| `--target ts\|tanstack\|rust\|c` | Selecciona codegen |
| `--verify` | Corre Bloque 2 antes de generar |
| `--resolve-imports` | Sigue `import` transitivamente |
| `--strict` | Falla en `W##_partial` también |
| `--json` | Output diagnostics como JSON (para integración tooling) |

**Path:** `src/cli/gen.ts`.

---

### A.9 — Memory / decisión-tracking entre sesiones

`memory/` directory con 9 files documentando findings persistentes
entre conversaciones con IA. Cada file tiene frontmatter +
`Why:` + `How to apply:`.

| File | Finding |
|---|---|
| `sdlc-playbook-validated.md` | Baseline playbook funciona en 2 dominios |
| `bloque2-v0-coverage.md` | 4 obligations + Z3 shipped |
| `multi-provider-bloque2.md` | Multi-LLM + repair loop funciona en 7 phases |
| `phidec-empirically-adequate.md` | F3: Φ_dec 100% adequate empirically |
| `playbook-was-the-bug.md` | F2: bug en prompt explica S36 sistémico |
| `n20-deepseek-validation.md` | F4: N=20 → 100% [83.9%, 100%] |
| `rxocl-bounded-ltl.md` | Phase 24 LTL shipped |
| `spec-to-app.md` | F5: spec → app runtime enforcement |
| `codegen-tanstack.md` | Phase 25.2-25.4 codegen 74% mutation |

**Path:** `memory/` (referenciado vía `MEMORY.md` index).

---

### A.10 — Smart-hints (Phase 22-23)

Sistema que asocia diagnostic codes a "consejos" específicos
inyectados en re-prompts al LLM. Acumulativo a lo largo de fases.

**Ejemplos:**

| Diagnostic | Smart-hint |
|---|---|
| `[S36]` | "El predicate debe referenciar self.<prop> del event-owner, no del commitment. Reescribe sustituyendo." |
| `[S34]` | "Verifica que `pre ∧ post ⇒ predicate` se cumple. Considera fortalecer el post." |
| `[S35]` | "Las invariantes del category deben implicar las del bearer; no al revés." |
| `[W37]` | "Agrega la propiedad al clause `modifies:`." |
| Reserved-keyword | "`steps`, `next`, `always` son reservados; renombra a `step_count` etc." |

**Path:** `scratch/sdlc-playbook-test.mjs` (sección de hints).

---

### A.11 — Experimento Phase 26 (contract-driven cheap LLM impl, prototype)

**Hipótesis:** una IA cara escribe `.onto` (modelo conceptual + contracts)
y una IA barata implementa funciones sueltas usando SOLO los contracts
como contexto. Sin necesidad de ver todo el proyecto.

**Prototype ejecutado durante la sesión:**
- N=5 events hand-picked desde 5 dominios diferentes.
- DeepSeek como implementador.
- Solo contracts + signatura como contexto.
- Outputs en `scratch/phase26_out/*.ts`.

**Resultados (mi grading subjetivo, NO formal verification):**
- 5/5 sintácticamente válidos.
- ~91% promedio semantic correctness.
- Costo total: $0.0031 (≈ $0.0006 / event).

**Caveats importantes:**
- N=5 hand-picked → selection bias.
- Mi grading subjetivo, no property-based testing.
- Prompt incluía "informal notes" → NO contract-only puro.
- Outputs NO compilados ni corridos.

**Path:** `scratch/phase26-contract-llm.mjs` + `scratch/phase26_out/`.

**Estado:** prototype validado, requiere N≥20 random sample para ser
claim defendible.

---

## PARTE B — La idea SLCM (System Life Cycle Model)

### B.1 — Origen y motivación

**Problema observado:** los modelos de SDLC tradicionales (Waterfall,
Agile, RUP, etc.) son **procesos**, no **artefactos verificables**.
No existe gate formal entre stages — solo handoffs informales.

**Idea SLCM:** modelar el SDLC como una **cadena de artefactos formales
con obligaciones verificables entre stages consecutivos**. Cada stage
es un `.onto` file. Cada transición de stage es verificada por las
4 obligaciones de Bloque 2.

**El SLCM no es un proceso ni una metodología organizacional.** Es
una estructura de artefactos linkeable y verificable.

---

### B.2 — Los 5 stages canónicos

Como instancia mostrada empíricamente:

```
discovery.onto       — ¿qué quiere el negocio?
   ↓ (commitment refinement obligation)
requirements.onto    — ¿qué hace el sistema?
   ↓ (Liskov + property correspondence)
formalization.onto   — ¿qué reglas / categorías regulatorias?
   ↓ (category membership)
design.onto          — ¿cómo está descompuesto?
   ↓ (codegen + runtime validate*())
code (runtime app)   — ¿cómo se ejecuta?
```

**Cada flecha es una obligación formal:**

| Transición | Obligación dominante | Diagnostic si falla |
|---|---|---|
| Discovery → Requirements | O1 (commitment discharge) | S34, S36 |
| Requirements → Design | O2 (Liskov substitution) | S29, S30 |
| Discovery → Design | O3 (category membership) | S35 |
| Cualquier refinement | O4 (property correspondence) | S39 |

**Refinement annotation explícito** (Phase 7):

```onto
event deliverInsulin(units: Real): Real
  refines insulin_pump_discovery::CorrectDoseCommitment,
          insulin_pump_requirements::InsulinPumpSystem.deliverInsulin {
    pre: ...
    post: ...
  }
```

Cada target en `refines:` es una arista del grafo de SDLC que el
verifier va a chequear formalmente.

---

### B.3 — Generalización: SLCM configurable per empresa (visión, NO implementado)

**Diseño no implementado pero diseñado:**

Cada empresa cliente define su propio SLCM:
- Cuántos stages.
- Nombres de stages.
- Qué obligaciones se chequean entre cada par de stages.

**Ejemplos hipotéticos:**

| Empresa tipo | SLCM custom |
|---|---|
| Fintech regulatorio | Discovery → Compliance Review → Requirements → Threat Model → Design → Code → Audit |
| Startup MVP | Idea → Specs → Code |
| Aerospace DO-178C | Requirements → Architecture → LLR → Source → Verification |
| Healthcare ISO 13485 | Risk Analysis → User Needs → Specs → Design → V&V |

**El verifier (Bloque 2)** sería **paramétrico**: dada una descripción
del SLCM custom de la empresa, sabe qué obligaciones ejecutar entre
qué stages.

**Path donde se haría:** modelo de stage como entidad first-class
(NO existe — está en backlog Track E).

---

### B.4 — Federación cross-proyecto (visión, NO implementado)

**Idea:** una empresa con N proyectos comparte **ontologías**
(kinds, categories, commitments) centralizadamente.

**Mecanismo:**

```onto
// proyecto: banking-mobile
import "@acme-corp/shared-banking-ontology/v3";

// usa kinds, commitments del shared library
event withdraw(...) refines acme_shared::NoOverdraftCommitment { ... }
```

**Beneficios:**
1. Si la empresa cambia política regulatoria, se actualiza un solo
   commitment shared, todos los proyectos lo heredan.
2. Cross-project query: "¿qué proyectos discharge este commitment?".
3. Migration tooling: cuando un shared cambia, herramienta avisa qué
   proyectos rompen.

**Diferenciador único:** NO existe en Confluence, Notion, Backstage,
ni en herramientas formal methods (TLA+, Alloy). La combinación de
**federación conceptual + verificación formal automática** es nueva.

**Path:** NO existe — está en backlog Track D.

---

### B.5 — AI authoring + governance (parcial)

**Idea:** la IA NO escribe código directamente sobre el repo. La IA
escribe `.onto` (modelo conceptual), y de ahí:

1. Humanos revisan el modelo conceptual (visual + textual).
2. Verifier Bloque 2 lo aprueba o rechaza.
3. Codegen deterministico produce stack.
4. IA cheap implementa los gaps (TODO functions) usando solo contracts
   como contexto (Phase 26).

**Governance properties que esto da:**
- **Auditability:** cambios en `.onto` son trackables como cambios
  conceptuales, NO de implementación.
- **Compliance traceability:** un commitment en `discovery.onto` se
  puede trazar formalmente a un event en `design.onto` que lo discharge.
- **Cross-team alignment:** dos equipos referencian el mismo
  shared kind via federation.
- **Cost control:** IA cara solo en authoring; IA cheap en
  implementación de TODOs.

**Path implementado:**
- A.5 (LLM authoring) — ✅.
- A.11 (cheap LLM impl) — ✅ prototype.

**Path NO implementado:**
- Multi-tenant SaaS con organizations y RBAC.
- Visual concept map renderer.
- Audit log de cambios conceptuales.
- (Todo en backlog Track B.)

---

### B.6 — Mapa conceptual visual (visión, NO implementado)

**Idea:** el `.onto` se renderiza como un grafo navegable.

- Kinds, subkinds, roles, categories = nodos.
- `specializes`, `mediates`, `refines` = aristas.
- Click en un nodo → abre editor con sus invariantes.
- Hover en un edge → muestra la obligación que verifica.
- Toggle filter por stage (mostrar solo discovery, solo design, etc.).

**Tecnología candidata:** React Flow / D3 / Cytoscape.

**Path:** NO existe — está en backlog Track C.

---

## PARTE C — Validación empírica (qué está probado)

### C.1 — Corpus

**28 dominios verificados** con 4 stages cada uno (1 con 5):

| Provider | N | Where |
|---|---:|---|
| Anthropic Sonnet | 8 | `examples/{insulin_pump, meeting_scheduler, engine_control, online_banking, smart_thermostat, library_system, traffic_light, patient_monitoring}/` |
| DeepSeek | 20 | `examples/*_deepseek/` (los 8 anteriores + 12 nuevos) |

Diversidad: safety-critical (medical, aerospace, control), información
(scheduling, library, RBAC), IoT (thermostat, meter, parking, drone),
finance (banking, payroll), gaming, content moderation, transporte.

**Reproducir count:**
```bash
ls examples/*_deepseek/ | wc -l   # 20
```

---

### C.2 — Discharge proofs

**130 substantive discharge proofs Z3-verified** a través del corpus
convergente. Todos en Φ_dec (100% cobertura).

**Reproducir:**
```bash
for d in examples/*/; do
  n=$(basename $d); [[ "$n" == "dist" ]] && continue
  [[ -f "$d/design.onto" ]] && \
    node dist/cli/gen.js $d/design.onto --out /tmp/$n --verify --resolve-imports 2>&1 | \
    grep "discharge proofs verified"
done
```

Sumar verified counts → ≥130.

---

### C.3 — Convergencia DeepSeek N=20 (F4)

| Round | Convergidos nuevos | Reglas agregadas |
|---|---:|---|
| v1 baseline | 2/12 (17%) | (Phase 22b spec) |
| v2 | 7/12 (58%) | reserved-keyword hint, `implies` rewrite, prose-stripper |
| v3 | 8/12 (67%) | Design-stage commitment-property mirroring |
| v4 | 10/12 (83%) | `::` qualified types blocked |
| v5 | 12/12 (100%) | pure variance retry (no reglas nuevas) |
| **Total con 8 originales** | **20/20 = 100%** | — |

**Wilson 95% CI: [83.9%, 100%].**

**Reproducir:** logs en `scratch/phase23_logs_v{1..5}/`.

---

### C.4 — Findings nombrados (los 5 principales)

| ID | Finding |
|---|---|
| **F1** | Verifier-as-Capability-Equalizer: DeepSeek (20× más barato) iguala Sonnet en convergencia post-Phase-22b. |
| **F2** | Playbook-was-the-bug: ~50pp de "fallos LLM" en realidad eran bug del prompt enseñando patrón incorrecto. |
| **F3** | Φ_dec empirical adequacy: 100% cobertura sobre 130 proofs; el "decidable fragment" es suficiente en SDLC-style specs. |
| **F4** | DeepSeek N=20 convergencia 100% [83.9%, 100%] post-5-rounds-hardening. |
| **F5** | Spec → App: el `.onto` verificado es source of truth simultáneamente para verificación formal Y runtime enforcement. |

Detalle completo en `docs/BLOQUE2_EMPIRICAL.md` (~2,000 líneas).

---

## PARTE D — Limitaciones y lo que NO está construido

### D.1 — Limitaciones técnicas reconocidas

| Item | Estado | Plan |
|---|---|---|
| `eventually within N steps` | Stub (W40_pending) | Phase 24.1 BMC |
| N=20 corpus | CI suelta [83.9%, 100%] | Phase 27: N=50+ |
| Single-provider Phase 23 | Solo DeepSeek validado en N=20 | Phase 28: Llama, Gemini cross-validation |
| Playbook hardening manual | 5 rondas con reglas explícitas | Automatización pendiente |
| Sonnet baseline solo 8 dominios | No simétrico vs DeepSeek 20 | Re-run Sonnet en 12 nuevos |
| Codegen tanstack 74% mutation | 26% TODO-only | Phase 25.5 más patrones OCL→SQL |
| Phase 26 contract-only | N=5 hand-picked | Phase 26.1 N=20 random |

### D.2 — Features de PRODUCTO que NO existen (gap a SaaS vendible)

| Capa | Estado |
|---|---|
| Web platform multi-tenant | ❌ |
| Auth + RBAC + organizations | ❌ |
| Billing infrastructure | ❌ |
| Visual concept map renderer | ❌ |
| Federación cross-proyecto | ❌ |
| SDLC configurable per empresa | ❌ (hardcodeado a 5 stages) |
| GitHub App integration | ❌ |
| VS Code extension | ❌ |
| Jira integration | ❌ |
| SOC 2 audit logging | ❌ |
| Docusaurus public docs | ❌ |
| Test suite automatizado del verifier | ❌ |
| CI/CD | ❌ |

Detalle en `docs/PRODUCT_BACKLOG.md`.

---

## PARTE E — Cómo verificar que esto sí existe

Si quieres verificar (cd al repo `ontodls/`):

```bash
# 1. Estructura básica del repo
ls src/                          # parser, semantic, codegen*, cli, ast
ls examples/ | head -30          # 28 dominios
ls memory/                       # 9 findings + MEMORY.md

# 2. Verifier ejecutable
node dist/cli/gen.js examples/online_banking/design.onto \
  --out /tmp/check --verify --resolve-imports

# 3. Codegen tanstack ejecutable
node dist/cli/gen.js examples/online_banking/design.onto \
  --out /tmp/banking --target tanstack --resolve-imports

# 4. Corpus reproducible
node scratch/phidec-coverage.mjs

# 5. App fullstack corriendo
cd examples/online_banking/app
npm run dev:api & npm run dev:web &
# → http://localhost:5173

# 6. Demo curl de la app
curl -X POST localhost:5174/api/auth/login \
  -d '{"email":"alice@example.com","password":"alice123"}'
curl -X POST localhost:5174/api/transfer/initiate \
  -d '{"sourceAccountId":"acc-1","destinationAccountId":"acc-2","amount":100}'
# overdraft test → expecting 422
curl -X POST localhost:5174/api/transfer/initiate \
  -d '{"sourceAccountId":"acc-2","destinationAccountId":"acc-1","amount":5000}'
```

---

## PARTE F — Resumen para el reviewer externo

**Lo que esto ES:**
- Un research prototype maduro: 28 dominios verificados, demo app
  corriendo, paper outline + thesis chapters drafts.
- Una metodología SDLC novedosa (4 obligations formales entre stages)
  con evidencia empírica de adequacy.
- Una validación de que **LLMs baratos sí pueden hacer authoring de
  specs formales** si el playbook + verifier los gobierna.
- Un experimento prometedor (Phase 26) de descomposición
  contract-driven que apunta a reducir 1000× el costo de impl
  vs Cursor/Copilot per function.

**Lo que esto NO ES:**
- Un producto comercial vendible (web platform NO existe).
- Una validación estadísticamente apretada (N=20 → CI 83.9%-100%).
- Una metodología validada en producción real con customers.
- Federación cross-proyecto construida (solo diseñada).
- SDLC custom per empresa construido (solo hardcodeado).

**Lo que el reviewer debería preguntarse:**
1. ¿Las 4 obligaciones (O1-O4) están bien definidas y son
   complementarias / no-redundantes?
2. ¿Φ_dec coverage 100% sobre N=130 implica generalidad para SDLC
   en general, o el corpus está sesgado?
3. ¿La métrica "100% convergencia [83.9%, 100%]" se sostendría con
   N=100 (CI sería [96%, 100%] si proporción persiste)?
4. ¿La federación + SDLC configurable son ideas defendibles o
   demasiado ambiciosas para single-founder?
5. ¿F1 (Verifier-as-Equalizer) realmente generaliza o es artefacto
   del corpus específico?
6. ¿Hay overclaim en algún número? El reviewer debe checar:
   - "100% convergencia" → cuántos retries cuesta llegar a 100%
   - "74% mutation auto-derivada" → de qué events específicamente
   - "91% Phase 26 correctness" → grading subjetivo, NO formal

---

**Fin del documento de features + visión SLCM.**

Si el reviewer encuentra inconsistencias, debe reportar el path
específico donde se rompe la claim y el comando que la expone.
