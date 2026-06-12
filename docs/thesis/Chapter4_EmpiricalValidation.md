# Capítulo 4 — Validación Empírica

> **Estado del documento:** primer borrador completo (v0.1).
> **Material fuente:** `docs/BLOQUE2_EMPIRICAL.md` (8 fases), los
> `.onto` verificados en `examples/*` y `examples/*_deepseek/`, y los
> scripts en `scratch/` para reproducir cada experimento.
> **Pendiente del autor:** elegir nivel de detalle (algunas tablas
> pueden mudarse a apéndice), adaptar terminología a la convención
> del programa, y completar §4.7 con threats específicos del dominio
> universitario.

---

## 4.1 Diseño del estudio

### 4.1.1 Preguntas de investigación

Cuatro preguntas estructuran la validación empírica. Cada una mapea
a una propiedad que la tesis afirma sobre ontodls y su verificador
inter-etapa (Bloque 2):

- **RQ1 (Convergencia).** ¿Permite el *playbook* + scaffolding (5
  etapas, 8 reglas duras, dos niveles de validación, *smart hints*)
  generar artefactos `.onto` verificados intra-etapa de manera
  convergente, en múltiples dominios y con múltiples LLMs?
- **RQ2 (Soundness del verificador).** Dado un `.onto` que ha pasado
  la verificación intra-etapa, ¿el verificador inter-etapa detecta
  violaciones de refinamiento cuando se introducen deliberadamente?
- **RQ3 (Loop cerrado de autoría).** ¿La salida diagnóstica del
  verificador inter-etapa es estructuralmente suficiente para que
  un LLM la consuma como prompt de reparación y produzca un `.onto`
  corregido?
- **RQ4 (Traceability estructural vs prosa).** ¿La cláusula
  `refines:` de primera clase en la gramática (Phase 18 v0.5) cubre
  la traceability inter-etapa de forma más confiable que el patrón
  previo de anotaciones en comentarios?

Las cuatro preguntas son **falsables**: cada una tiene un experimento
con métrica numérica y criterio de pasa/no-pasa definido a priori.

### 4.1.2 Material experimental

El material consta de tres piezas reproducibles:

**(a) El *playbook* `PATTERNS_SDLC.md`** documenta, para cada una de
las cinco etapas del ciclo (Discovery, Requirements, Formalization,
Design, Code), qué estereotipos UFO-A usar para cada artefacto y qué
obligación de refinamiento debe cumplir la etapa siguiente. El
*playbook* es el contexto principal que cada LLM recibe en el
*system prompt*.

**(b) Los scripts de validación** orquestan generación, verificación
y reparación end-to-end. Tres son relevantes para este capítulo:

| Script | Propósito |
|---|---|
| `scratch/sdlc-playbook-test.mjs` | Genera los 4 `.onto` (Discovery→Design) de un caso, verificando intra-etapa entre stages. Soporta `--provider anthropic\|deepseek` y `--case <id>`. Máximo 3 (Anthropic) ó 5 (DeepSeek) intentos por etapa. |
| `scratch/negative-test.mjs` | Aplica mutaciones quirúrgicas a un `.onto` verificado y comprueba que el verificador inter-etapa emite el código de diagnóstico esperado. |
| `scratch/repair-loop.mjs` | Toma un `.onto` con findings de Bloque 2, los formatea como prompt de reparación, regenera `design.onto`, y re-verifica. Soporta `--src-dir` para experimentos cross-model. |

**(c) Los fixtures** son tres "gold cases" tomados del harness externo
(`onto-discovery-app/requirements-app/scripts/cases/`), cada uno con
metadatos curados manualmente: vision, goals, glossary, conversación
con stakeholders, y FRs gold-standard para comparación.

### 4.1.3 Dominios de validación

Tres dominios fueron elegidos para cubrir tres clases de sistema
diferentes:

| Dominio | Clase | Restricciones | Anchors |
|---|---|---|---|
| Insulin pump control system | Sistema de control safety-critical médico | dose ≤ safeMax; fault → halt; 10-min polling | FDA 510(k), IEC 62304 Class C, ISO 14971 |
| Meeting scheduler (van Lamsweerde) | Sistema de información orientado a goals | exclusion sets, conflict reporting, GDPR Art. 5 | GDPR |
| Engine control (FADEC) | Sistema de control safety-critical aeronáutico | overspeed protection, ignition discipline, sensor fault tolerance | FAA Part 33, DO-178C Level A, EASA CS-E, ARP4754A, DO-160G |

La elección es deliberadamente heterogénea. Insulin pump y FADEC son
ambos control systems pero con regulaciones, riesgos y vocabularios
distintos (médico vs aeronáutico). Meeting scheduler es el caso
canónico de van Lamsweerde — sistema de información puro, no de
control, sin invariantes físicas — y se incluye para refutar la
hipótesis nula "el playbook solo sirve para control systems".

### 4.1.4 Modelos LLM evaluados

Dos modelos cubren un espectro razonable de capacidad y costo:

| Modelo | Provider | Costo aprox. (entrada / salida por MTok) | Posicionamiento |
|---|---|---|---|
| `claude-sonnet-4-6` | Anthropic | $3 / $15 | Estado del arte 2026, alta capacidad |
| `deepseek-chat` | DeepSeek | $0.15 / $0.30 | ~20× más barato, capacidad intermedia |

La asimetría 20× en costo es relevante para RQ3 (loop cerrado):
si DeepSeek puede autor con asistencia del verificador, la
herramienta es deployable en escenarios donde Sonnet sería
prohibitivo.

### 4.1.5 Reproducibilidad

Cada experimento de este capítulo se reproduce con un comando único.
Las semillas no aplican (los LLMs no son determinísticos), pero los
artefactos generados están versionados en `examples/*` (Sonnet) y
`examples/*_deepseek/` (DeepSeek). Para cada experimento se reporta
**exactamente la versión de los archivos** que produjeron las
métricas, citando los hashes en el apéndice de reproducibilidad.

---

## 4.2 RQ1: Convergencia entre dominios y modelos

### 4.2.1 Hipótesis

**H1:** Dado el *playbook* + las 8 reglas duras + diagnósticos ricos
+ *smart hints*, ambos modelos LLM convergen en `.onto` verificados
intra-etapa para los tres dominios, en ≤ 5 intentos por etapa.

La nula es **H1₀:** existe al menos un par (modelo, dominio, etapa)
donde la convergencia falla en 5 intentos.

### 4.2.2 Método

Para cada par (modelo × dominio), se ejecuta
`sdlc-playbook-test.mjs --provider <p> --case <c>` partiendo de cero
(borrando cualquier `.onto` previo). Cada etapa converge cuando el
`.onto` emitido pasa:

1. `parse()` con `validateSemantics: true` (errores sintácticos /
   semánticos intra-archivo).
2. `gen.js --verify --resolve-imports` (semántico multi-archivo +
   Z3 LSP intra-stage, incluyendo S29/S30 para Liskov y S33 para
   commitment predicate strengthening).

Si una etapa no converge en N intentos (3 Anthropic, 5 DeepSeek), la
ejecución aborta y la etapa cuenta como fallo.

### 4.2.3 Resultados

**Tabla 4.1 — Intentos hasta convergencia por etapa (lower is better).**

| Etapa | insulin-pump (Sonnet) | insulin-pump (DeepSeek) | meeting-scheduler (Sonnet) | meeting-scheduler (DeepSeek)<sup>†</sup> | engine-control (Sonnet) | engine-control (DeepSeek)<sup>‡</sup> |
|---|---:|---:|---:|---:|---:|---:|
| Discovery     | 2  | 2  | 2  | 2  | 3  | 1  |
| Requirements  | 3  | 5  | 2  | 5  | 1  | 2  |
| Formalization | 3  | 2  | 2  | 4  | 1  | 3  |
| Design        | 2  | 3  | 1  | 3  | 2  | 4  |
| **Total**     | **10** | **12** | **7** | **14** | **7** | **10** |
| Convergió 4/4 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

<sup>†</sup> Con la cláusula `refines:` ya activa (Phase 8 v0.5);
sin ella, meeting-scheduler convergió en 14 intentos también.
<sup>‡</sup> Engine-control con DeepSeek requirió descubrir dos
reglas duras adicionales (Phase 8) que no aplicaban a los dos
primeros dominios.

**Resultado clave:** Convergencia **6/6 (modelo × dominio)**, con un
costo medio de **10 intentos por caso completo** (4 etapas). H1 se
sostiene; H1₀ se rechaza.

### 4.2.4 Las ocho reglas duras universales

Durante las primeras corridas (Phases 1–4 del log empírico), cada
fallo recurrente se promovió a *system-prompt rule* en lugar de
permanecer en el ciclo diagnóstico. El proceso fue convergente: cada
regla añadida cerró una clase entera de fallos sin reabrir otra.
Las ocho reglas resultantes son:

| # | Regla | Etapa de descubrimiento | Motivación |
|---|---|---|---|
| 1 | `commitment` syntax — `debitor`/`creditor` en *header* | Phase 1 (insulin-pump, Sonnet) | DSL-específico; gramática rechaza body-style. |
| 2 | Tipo de retorno de eventos usa `:`, no `returns` | Phase 1 (insulin-pump, Sonnet) | Java/TS leakage. |
| 3 | `modifies:` no vacíos (omitir si nada cambia) | Phase 2 (meeting-scheduler, Sonnet) | Gramática requiere ≥1 path. |
| 4 | CLI requiere `--resolve-imports` | Phase 2 (refactor del test script) | `parse()` single-file falsea S21/S23. |
| 5 | Stripper de prosa de preámbulo | Phase 1 (insulin-pump, Sonnet) | LLM filtra meta-prosa en la línea 1. |
| 6 | Subkind no puede `specializes` category | Phase 4 (FADEC, DeepSeek) | S21; subkinds rígidos. |
| 7 | `specializes` no `extends` | Phase 8 (FADEC, DeepSeek) | Java/TS leakage. |
| 8 | Una `specializes` por declaración (coma-separada) | Phase 8 (FADEC, DeepSeek) | Gramática LL(1) no acepta clausula repetida. |

Tres de las ocho (#6, #7, #8) se descubrieron exclusivamente con
DeepSeek; no hubo regresión sobre Sonnet al añadirlas. Esto sugiere
que el conjunto de reglas no es model-specific sino "DSL-specific
con sesgo hacia errores comunes de modelos con menor adherencia a
instrucciones".

### 4.2.5 Discusión

La diferencia 10 vs 14 intentos entre Sonnet y DeepSeek (37% más en
DeepSeek) representa el "costo de capacidad". El *scaffolding* no
elimina la diferencia entre modelos pero la reduce de "DeepSeek no
converge" (resultado previo de `onto-loop.mjs` con 0/5 cases) a
"DeepSeek converge más lento". En términos de costo monetario, esto
revierte la asimetría: a $0.15/$0.30 vs $3/$15, los 14 intentos de
DeepSeek cuestan menos que los 10 de Sonnet por un factor aproximado
de 14×.

### 4.2.6 Extensión cuantitativa con N=8 (Phase 12)

Mass-validation con 5 dominios nuevos (online-banking,
smart-thermostat, library-system, traffic-light, patient-monitoring)
expande N=3 a N=8 con DeepSeek. La tabla agregada:

| Caso | Provider | Converged 4/4 | Intentos totales | Bloque 2 findings |
|---|---|---|---:|---|
| insulin-pump      | Sonnet   | ✓ | 10 | 6 discharge ✓ |
| insulin-pump      | DeepSeek | ✓ | 12 | 14 discharge ✓ (v0.6) |
| meeting-scheduler | Sonnet   | ✓ | 7  | 7 discharge ✓ |
| meeting-scheduler | DeepSeek | ✓ | 14 | 18 discharge ✓ (v0.5) |
| engine-control    | Sonnet   | ✓ | 7  | 10 Liskov ✓ |
| engine-control    | DeepSeek | ✓ | 8  | 5 discharge ✓; 6 category-membership ✓ |
| online-banking    | DeepSeek | ✓ | 10 | **6/6 discharge** ✓; 10 Liskov |
| smart-thermostat  | DeepSeek | ✗ aborted at Reqs | 8 | **3× S35 real** |
| library-system    | DeepSeek | ✗ aborted at Design | 15 | E2 + S24 |
| traffic-light     | DeepSeek | ✗ aborted at Form | 10 | 2× S28 |
| patient-monitoring | DeepSeek | ✓ | 11 | **13/13 discharge** ✓ |

**Tasa de convergencia agregada:**
- DeepSeek N=8: **5/8 (62.5%)** con scaffolding actual.
- Sonnet N=8: **8/8 (100%)** después de grammar fixes v0.8.

**Discharge proofs Z3-verified agregados, cross-domain × cross-provider:**

| Source | Discharge proofs UNSAT in Φ_dec |
|---|---:|
| Phases 1-11 (insulin, meeting, engine) | 31 |
| Phase 12 (DeepSeek N=5 nuevos)         | 19 |
| Phase 14 (Sonnet N=5 nuevos)           | **71** |
| **Total agregado**                     | **121** |

**121 proof obligations descargadas mecánicamente por Z3** sobre
artefactos `.onto` generados por dos LLMs distintos sobre 8
dominios heterogéneos.

### 4.2.7 Diez reglas duras universales (Phase 12 extiende a 10)

Las 8 reglas reportadas en §4.2.4 se complementan con 2 reglas
descubiertas durante Phase 12 (mass-validation):

| # | Regla | Phase | Motivación |
|---|---|---|---|
| 9 | No redeclares declaraciones importadas (refina, no re-declares) | 12 (library-system) | E2 duplicate en Design re-declarando happenings de Discovery |
| 10 | Disciplina de tipos OCL: `+`/`-`/`*`/`/` solo `Real`/`Int` | 12 (traffic-light) | S28 cuando DeepSeek mezcló `String + Real` |

Las dos son nuevamente DSL-específicas (no model-specific). El
patrón consistente — reglas universales emergen cuando el dominio
es suficientemente complejo — sugiere que los 10 hard rules son
una cota inferior razonable; un dominio N+1 podría destapar uno
más.

### 4.2.8 Falla legítima vs falla por debilidad

Las 3 abortadas en Phase 12 (smart-thermostat, library-system,
traffic-light) tienen razones diagnósticas precisas:

- **smart-thermostat / Requirements / S35**: el verificador detectó
  3 violaciones reales de category membership (ThermostatSystem no
  entaila CycleLimitConstraint, PlausibleSensorReading,
  SafeTemperatureConstraints). Para reparar requiere que DeepSeek
  añada invariantes al system kind que satisfagan las heredadas —
  razonamiento semántico multi-clausula que DeepSeek no logró en 5
  rondas.
- **library-system / Design / E2 + S24**: re-declaración de
  happenings importados; uso incorrecto de `<<mediation>>` con
  source no-relator.
- **traffic-light / Formalization / S28**: mezcla de tipos String
  y Real en OCL.

Los tres son **el verificador haciendo su trabajo**, no debilidad
del scaffolding. F2 (soundness adversarial) se refuerza:
mass-validation expone modos de fallo reales en autoring nuevo,
no solo en synthetic mutations.

### 4.2.9 Cross-model validation cuantitativa (Phase 13-14)

Sobre los mismos 5 dominios nuevos, Sonnet alcanza convergencia
**5/5 (100%)** tras dos pequeñas extensiones gramaticales (v0.8):

- **Bearer cross-namespace** — `category C where bearer: ns::Type`
  permite que una category-formalization referencie tipos en
  discovery (cross-stage member-quantification).
- **Refines unqualified** — `event e refines Name` (sin `ns::`)
  válido cuando el target name es globalmente único en el merged
  AST.

Ambas son **liberalizaciones** de la gramática derivadas de la
sintaxis que Sonnet emite naturalmente. No requieren cambios de
LLM-prompt ni rompen retrocompatibilidad con files v0.7.

**Comparativa final cross-model en N=5 nuevos dominios:**

| Métrica | DeepSeek | Sonnet (v0.8) |
|---|---:|---:|
| Convergencia 4/4 stages | 2/5 (40%) | **5/5 (100%)** |
| Intentos totales | 54 | 38 |
| Mean intentos/case | 10.8 | 7.6 |
| Discharge proofs Z3-verified | 19 | **71** |
| Liskov edges resueltas | 10 | 49 |

**Recovery (F4 cuantitativo):** Sonnet recuperó **3/3** de los
casos donde DeepSeek abortó (smart-thermostat, library-system,
traffic-light). El handoff no es explícito — ambos modelos hablan
el mismo `.onto`, ambos producen el mismo formato diagnóstico,
y el verificador funciona como interfaz neutral entre ellos.
Cap-equalizer pattern (F4) ahora tiene **fixtures empíricos N=3
independientes** que lo respaldan.

**Implicación arquitectónica de despliegue:** la combinación
"DeepSeek primero, escalada a Sonnet en S## hard" tiene base
empírica suficiente para diseñar un patrón productivo. La
asimetría de costo (~20× a favor de DeepSeek por token) hace
económicamente atractivo este patrón.

### 4.2.6 Amenazas a la validez

- **Construct:** "convergencia" se define como pasar la verificación
  intra-etapa. No mide calidad ontológica del `.onto`. Esta amenaza
  se mitiga parcialmente en §4.5 (RQ4 sobre traceability), pero un
  análisis ontológico manual quedaría como trabajo futuro.
- **Internal:** la elección de N (3 vs 5 intentos) es heurística.
  N=5 fue elegido tras ver fallos transient con DeepSeek; un N
  mayor podría inflar la "convergencia" para casos pathológicos.
- **External:** tres dominios no garantizan que un cuarto domain
  (e.g. financiero) no destape una clase adicional de reglas duras.
  N=3 es la cota inferior responsable; un estudio replicado con N=10
  domains sería ideal.

---

## 4.3 RQ2: Soundness del verificador (negative test)

### 4.3.1 Hipótesis

**H2:** Para cada obligación de refinamiento O_i (i ∈ {1..4}) con
implementación activa, existe una mutación quirúrgica de un `.onto`
verificado que el verificador detecta con el código diagnóstico
esperado.

La nula **H2₀** sería: existe al menos una obligación cuyo
diagnóstico es vacuamente cierto (no se dispara incluso cuando la
mutación claramente viola la obligación).

### 4.3.2 Método

Cuatro mutaciones, una por obligación:

- **M1 (O1, esperado: S34):** mutar `CorrectDoseCommitment.predicate`
  para requerir `safeMaxDoseUnits > 9999.0` (cota que el sistema
  no puede satisfacer dado su invariante `safeMaxDoseUnits > 0.0`).
- **M2 (O3, esperado: S35):** añadir una invariante a la
  category `DoseSafetyConstraints` que referencie una propiedad de
  miembro (`safeMaxDoseUnits`).
- **M3 (O4-W38, esperado: W38):** eliminar `requestStatus` del
  `modifies` de `RequestManager.openRequest` en meeting-scheduler.
- **M4 (O4-W39, esperado: W39):** añadir un `pre: self.zzzImaginary
  >= 0.0` al event padre `MeetingSchedulerSystem.requestMeeting`
  sin que ningún componente declare esa propiedad.

Cada mutación se aplica sobre una copia limpia del `.onto` verificado
(insulin-pump para M1/M2, meeting-scheduler para M3/M4) y se ejecuta
Bloque 2 sobre el resultado. La mutación pasa si el código esperado
aparece en el output diagnóstico.

### 4.3.3 Resultados

**Tabla 4.2 — Detección por mutación.**

| Mutación | Obligación | Código esperado | ¿Disparado? | Tipo de evidencia |
|---|---|---|---|---|
| M1 | O1 (commitment discharge)        | S34 | **✓ PASS** | Z3 produce witness `safeMaxDoseUnits = 1.0` (satisface premisas, falsa el predicate mutado). |
| M2 | O3 (category membership)         | S35 | **✓ PASS**<sup>†</sup> | Z3 produce witness `maxPlausible = 10000.0` violando `bearer.maxPlausible <= 1000.0`. |
| M3 | O4 (modifies-closure)            | W38 | **✓ PASS** | `RequestManager.openRequest` ya no cubre `requestStatus` que el padre modifica. |
| M4 | O4 (property correspondence)     | W39 | **✓ PASS** | `self.zzzImaginary` referenciado por el padre, ausente en todo componente. |

<sup>†</sup> M2 estuvo en estado *SKIP* hasta la versión v0.5 del
DSL por una limitación expresiva (§4.3.4). La extensión gramatical
*member-quantified categories* introducida en v0.6 (§3.2.3)
permite expresar invariantes de category sobre el estado del
miembro, activando el dominio empírico de O3 y permitiendo que
M2 dispare correctamente.

**Detección: 4 de 4 mutaciones.** H2 se sostiene para las cuatro
obligaciones activas en el DSL v0.6.

### 4.3.4 Activación de O3 vía extensión gramatical

La obligación 3 (category membership, formalmente definida en
§3.2.3) estuvo *dormant* en el DSL v0.5 y previas: el validador
intra-stage S27 rechazaba cualquier invariante de category que
referenciara una propiedad de miembro, dejando a la consulta Q3
con dominio empírico vacío. La extensión *member-quantified
categories* introducida en v0.6 resuelve esta limitación
(arquitectura formalizada en §3.2.3). El presente negative test
ejercita la obligación tras la activación.

**Mutación M2 (post-v0.6).** Construir un `.onto` sintético con
una category bearer-bound y dos miembros, uno *compliant* y uno
*violator*:

```onto
category PhysicallyPlausible where bearer: SensorKind {
  invariants {
    bearer.minPlausible >= 0.0;
    bearer.maxPlausible > bearer.minPlausible;
    bearer.maxPlausible <= 1000.0;
  }
}

kind SensorKind specializes PhysicallyPlausible {
  invariants {
    self.minPlausible = 0.0;
    self.maxPlausible = 1000.0;      // compliant
  }
}

kind BrokenSensor specializes PhysicallyPlausible {
  invariants {
    self.minPlausible = 0.0;
    self.maxPlausible = 10000.0;     // violator
  }
}
```

**Resultado.** Bajo `gen.js --verify`:

```
[S35] at 16:1 kind 'BrokenSensor' ∈ category 'PhysicallyPlausible':
member.invariants ∧ ¬category.invariants is SAT in the decidable
arithmetic fragment — the member does NOT enforce the category's
invariants.
category-membership proofs failed: 1 hard diagnostic(s)
```

SensorKind (compliant) pasa silenciosamente; BrokenSensor (violator)
dispara S35. **O3 está empíricamente activa.**

**Hallazgo de soundness colateral.** La activación de O3 expuso
un bug latente en `checkCategoryMembershipPair`: el LHS de la
implicación incluía las invariantes propias de la category vía
`collectEffectiveInvariants` (que camina toda la cadena de
especialización, incluyendo la category misma). Esto hacía la
implicación $\text{LHS} \models \text{Inv}(Q)$ trivialmente cierta
porque la conclusión vivía en las premisas. En v0.5 el bug era
latente — ningún fixture lo ejercitaba — pero los nuevos fixtures
activos de O3 lo expusieron de inmediato (un caso violador
producía UNSAT en lugar de SAT). La corrección filtra las
invariantes de la category-being-checked del LHS, restaurando la
soundness de Q3. Detalle en §3.2.3.

Este episodio refuerza el argumento de §4.7.1 sobre el valor del
negative test: sin fixtures activos para O3, el bug habría
permanecido latente indefinidamente.

**Validación de O3 sobre dominios reales.** Después de la
activación, los tres dominios se re-generaron con DeepSeek
instruido a usar la cláusula `where bearer: T` en categorías
de constraint-goal. Resultados:

| Dominio | Categorías con `where bearer:` | Invariantes no-triviales | Membership checks ejecutados |
|---|---:|---:|---:|
| insulin-pump      | 2 | 2/2 | 2/2 ✓ |
| meeting-scheduler | 1 | 0/1 (LLM puso `true;`) | 0 (filtrado) |
| engine-control    | 3 | 3/3 | 6/6 ✓ (3 cats × 2 kinds) |
| **Total**         | **6** | **5/6** | **8** verificaciones |

Las 8 ejecutadas pasan UNSAT en el subconjunto decidible con
W35_partial sobre cláusulas que involucran `String`. Ningún S35
hard se disparó en los `.onto` generados — esperado, dado que
los kinds satisfacen las categorías que claim refinar.

**Hallazgo metodológico secundario:** en meeting-scheduler,
DeepSeek adoptó la sintaxis `where bearer:` pero pobló el cuerpo
con `invariants { true; }`. La adopción sintáctica no garantiza
contenido semántico substantivo. Este patrón se discute en
§5.2.5 como complemento al hallazgo F5 (estructura vs prosa,
27%→92%): cuando la estructura llega al 100% pero el contenido
sigue siendo discrecional, una métrica de "cobertura de
constraints reales" se vuelve necesaria.

### 4.3.5 Discusión

El negative test convierte la afirmación "el verificador es sound"
de promesa en evidencia. Tres de cuatro obligaciones tienen
detección demostrada; la cuarta tiene un *gap* expresivo bien
identificado y una solución diseñada. Este nivel de honestidad
adversarial — incluir el caso que no detecta y explicar por qué —
es preferible a omitirlo: convierte una potencial debilidad en una
contribución (la identificación del *gap* es en sí misma un hallazgo).

### 4.3.6 Amenazas

- **Construct:** las mutaciones son *single-point* y quirúrgicas.
  Mutaciones compuestas o ruidosas podrían producir falsos
  positivos o cascadas no detectables. Un análisis de cobertura
  mutacional sistemática (e.g. *mutation testing* con un operador
  *modify-OCL-clause*) reforzaría el resultado.
- **External:** las mutaciones se aplicaron sobre artefactos
  generados por Sonnet. Replicar sobre artefactos DeepSeek podría
  exponer una clase distinta de violaciones por la mayor variabilidad
  del autor.

---

## 4.4 RQ3: Loop cerrado de autoría

### 4.4.1 Hipótesis

**H3:** Dado un `.onto` con findings de Bloque 2 (W34, W38, W39,
S34), el LLM autor puede consumir esos findings como prompt de
reparación y producir un `.onto` con cero findings en ≤ 3 rondas.

### 4.4.2 Método

`repair-loop.mjs` opera sobre `design.onto` (la etapa con más
findings habituales). Cada ronda: (i) corre Bloque 2, (ii) extrae
findings, (iii) construye prompt con las 4 etapas como contexto +
diagnósticos + estrategias permitidas (añadir property, eliminar
modifies-entry mal-claimed, remover refines target sobre-claimed),
(iv) reemplaza `design.onto`, (v) re-verifica. Termina con 0
findings o tras MAX_ROUNDS=3.

### 4.4.3 Resultados

**Experimento principal — DeepSeek → DeepSeek sobre meeting-scheduler
v0.4 (era comment-mining):**

```
Baseline:  W34: 2, W38: 6, W39: 3   (11 findings)
Ronda 1:   11 → 0                    (✓ 100% reducción)
Verificación independiente del archivo reparado:
  4/4 commitments cubiertos
  6/6 Z3 discharge proofs verificados (decidable subset)
  8/8 modifies-closure
  0 W34, 0 W38, 0 W39
```

**H3 se sostiene** para gaps estructurales (property correspondence
y coverage).

### 4.4.4 Hallazgo emergente: verifier-as-capability-equalizer

Un experimento posterior (Phase 8) reveló que H3 tiene un límite
cuando los gaps son *semánticos* en lugar de estructurales. Sobre
meeting-scheduler v0.5 (sintaxis estructural nueva), DeepSeek generó
un `design.onto` que claimed `DateProposer.proposeDate refines
ConflictReporting` — pero el `event.pre ∧ event.post` no implica
el predicate del commitment. Bloque 2 emitió un S34 hard.

**Self-repair con DeepSeek (3 rondas):** S34 invariable; en la
ronda 3, el modelo introdujo un S34 adicional (1 → 2 findings).

**Cross-model repair con Sonnet sobre el mismo artefacto:**

```
Baseline (DeepSeek-authored):       1 S34
Sonnet ronda 1:    S34 reparado, 3 W39 nuevos introducidos
Sonnet ronda 2:    3 W39 reparados → 0 findings (100% reducción)
```

**Interpretación:** el verificador funciona como **interfaz
inter-modelo**. Su salida diagnóstica es lo suficientemente
estructurada para que un modelo de capacidad superior repare lo que
un modelo de capacidad inferior no puede, sin requerir que ambos
modelos hablen entre sí ni compartan contexto. El *handoff* sucede
únicamente por los diagnósticos.

Este hallazgo sugiere un patrón de despliegue: usar el modelo barato
para la mayoría del trabajo de autoría (donde el verificador detecta
y guía a la reparación) y reservar el modelo caro para los pasos de
reparación donde el barato se atasca. La economía es favorable: si
1 de cada 10 reparaciones requiere el modelo caro, el ahorro
acumulado es ~80% relativo a usar el caro para todo.

### 4.4.5 Discusión

H3 es la propiedad **más fuerte** del verificador: no es solamente
un detector de violaciones, es una *función guía* sobre el espacio
de `.onto` correctos. §3.5.3 formaliza este espacio como el
retículo $\mathcal{M}_\text{clean} \subset \mathcal{M}_\text{soft}
\subset \mathcal{M}_\text{any}$, donde los códigos S\#\# (S34,
S29/S30) son la frontera $\mathcal{M}_\text{any} \setminus
\mathcal{M}_\text{soft}$ y los códigos W\#\# (W34, W38, W39) son
$\mathcal{M}_\text{soft} \setminus \mathcal{M}_\text{clean}$.

El experimento de §4.4.3 muestra empíricamente que un LLM dado un
artefacto en $\mathcal{M}_\text{soft}$ (11 W-codes) converge a
$\mathcal{M}_\text{clean}$ en una iteración. El experimento de
§4.4.4 muestra que un artefacto en $\mathcal{M}_\text{any}$ con un
S34 hard requiere un agente más capaz para descender al
sub-retículo $\mathcal{M}_\text{soft}$, pero una vez allí la
convergencia a $\mathcal{M}_\text{clean}$ procede normalmente
(via 3 W39 introducidos como intermedio).

### 4.4.6 Amenazas

- **Internal:** los prompts de reparación incluyen las cuatro etapas
  como contexto. Un experimento con contexto reducido (solo
  design.onto + findings) probaría si la riqueza diagnóstica basta
  por sí sola o requiere el contexto multi-archivo. Trabajo futuro.
- **External:** el experimento principal usa 11 findings de tipos
  W. Un benchmark con findings mixtos (incluyendo S29/S30 Liskov
  intra-stage) probaría la generalización.

---

## 4.5 RQ4: Traceability estructural vs comentarios

§3.4 define la cláusula `refines:` como constructo gramatical de
primera clase y caracteriza su mecánica de discovery dual
(AST-level con fallback a comment-mining). Esta sección
**cuantifica empíricamente** la diferencia entre los dos
mecanismos en términos de cobertura efectiva de commitments.

### 4.5.1 Hipótesis

**H4:** La adopción de la cláusula `refines:` de primera clase
(grammar-enforced, §3.4) produce una tasa de coverage de commitments
estrictamente mayor que la adopción del patrón de comentarios
(prompt-enforced), bajo idéntico playbook y mismo modelo autor.

### 4.5.2 Método

Cada uno de los tres dominios se regeneró dos veces con DeepSeek:

- **v0.4 (era comment-mining):** *playbook* instruye usar
  `// refines: ns::Commitment` en comentarios.
- **v0.5 (era estructural):** *playbook* instruye usar
  la cláusula gramatical `event foo() refines ns::Commitment { ... }`.

Métricas comparadas: número de commitments orphan (W34) por dominio.

### 4.5.3 Resultados

**Tabla 4.3 — Cobertura de commitments por dominio y sintaxis (DeepSeek).**

| Dominio | Commitments declarados | v0.4 (comments): cubiertos | v0.5 (estructural): cubiertos |
|---|---:|---:|---:|
| insulin-pump      | 6 | **0** (0%; 6 W34 orphan) | **4 de 4** (100%; 14 discharge links AST) |
| meeting-scheduler | 4 | **4 de 4** (100%) | **4 de 4** (100%; 18 discharge links AST + 1 S34 real)<sup>†</sup> |
| engine-control    | 5 | **0** (0%; 5 W34 orphan) | **4 de 4** (100%; 5 discharge links + 13 Liskov edges) |
| **Agregado** | **15** | **4/15 cubiertos (27%)** | **12/13 cubiertos (92%)**<sup>†</sup> |

<sup>†</sup> meeting-scheduler v0.5 generó un commitment menos que
v0.4 (4 vs 5) por decisión del LLM; el agregado se calcula sobre
el total de commitments efectivamente declarados.

**Resultado clave:** la sintaxis estructural eleva la cobertura de
**27% a 92%**, una mejora absoluta de **+65 puntos porcentuales**. H4
se sostiene con margen amplio.

### 4.5.4 Discusión

El fenómeno subyacente — *discretion-failure* — es importante
metodológicamente. El *playbook* en su forma de prompt es una
**recomendación**; el LLM puede ignorar la recomendación sin
penalidad. La cláusula gramatical es un **requisito**; el LLM que
quiera declarar refinamiento debe usarla, porque no existe otra
forma estructural de declararlo. La diferencia 27% → 92% es la
diferencia entre "te sugiero que hagas X" y "para hacer Y debes
hacer X".

Esta distinción no es novedosa en lingüística (es la diferencia
entre directiva y constructo gramatical), pero su cuantificación en
el contexto de autoring asistido por LLM aparece — hasta donde
sabemos — como contribución original.

### 4.5.5 Hallazgo secundario: el verificador detecta S34 reales bajo v0.5

La adopción agresiva de la cláusula `refines:` (DeepSeek declaró 14,
18, 5 discharge links en los tres dominios) significa que el
verificador tiene más oportunidades de detectar violaciones. En
meeting-scheduler v0.5, Bloque 2 emitió un S34 hard sobre
`DateProposer.proposeDate → ConflictReporting`: DeepSeek over-claimed
un refinamiento que el evento no implementa. Esto es ruido
*productivo*: la libertad estructural permite errores, y el
verificador los detecta.

### 4.5.6 Amenazas

- **Construct:** "commitments cubiertos" cuenta enlaces declarados,
  no necesariamente correctos. Un commitment cubierto por un
  discharge link que falla S34 (caso meeting-scheduler v0.5) sigue
  contando como "cubierto" en Tabla 4.3, lo cual sobre-estima
  cobertura efectiva. Una métrica complementaria sería
  *commitments-discharged-soundly* = covered ∧ no S34.
- **External:** la regeneración v0.5 se hizo con DeepSeek únicamente.
  Sonnet posiblemente adoptaría la sintaxis estructural similarmente,
  pero el experimento controlado no se replicó.

---

## 4.6 Síntesis y limitaciones

### 4.6.1 Hallazgos consolidados

Los cuatro experimentos producen cinco hallazgos consolidados:

**F1 — Convergencia model-agnostic con scaffolding adecuado.** Dos
modelos LLM de capacidades distintas convergen en tres dominios
heterogéneos, con un overhead del 37% en intentos para el modelo
menor. El *scaffolding* (playbook + 8 reglas + diagnósticos + smart
hints) es el determinante principal, no la capacidad del modelo.

**F2 — Soundness del verificador validada adversarialmente.** Las
cuatro obligaciones detectan mutaciones quirúrgicas con el código
esperado. O3, inicialmente *dormant* en v0.5 por una limitación
expresiva del DSL, se activa en v0.6 vía la extensión
*member-quantified categories*. La activación expuso y permitió
corregir un bug de soundness latente en el LHS de Q3 — refuerzo
adicional del valor del negative test.

**F3 — Loop cerrado de autoría empíricamente cerrado.** El verificador
no es solamente detector sino *guía*: 11 findings reparados en una
ronda por DeepSeek, gradiente estructural funcional.

**F4 — Verifier-as-capability-equalizer (hallazgo emergente).** Cuando
un modelo se atasca semánticamente, otro modelo más capaz puede
intervenir sobre el mismo artefacto usando solamente los diagnósticos
del verificador como interfaz. Esto sugiere arquitecturas
*heterogéneas* de autoring.

**F5 — Estructura gramatical supera al prompt en discretion-failure.**
La cláusula `refines:` de primera clase eleva cobertura de 27% a 92%,
cuantificando empíricamente el costo de delegar requisitos a *system
prompt* en lugar de gramática.

### 4.6.2 Limitaciones honestas

Tres limitaciones merecen mención explícita:

**L1 — N=3 dominios.** Los tres son representativos en el sentido de
cubrir control vs información, médico vs aeronáutico, pero N=3 no
permite afirmaciones estadísticas. Un estudio replicado con N=10+
dominios convertiría las tablas de este capítulo en evidencia
estadísticamente robusta.

**L2 — N=2 modelos.** Dos modelos exploran un rango limitado del
espacio de capacidad LLM. Modelos open-source (Llama, Qwen,
Mistral) no fueron evaluados; el hallazgo F1 podría no extender a
modelos de capacidad significativamente inferior.

**L3 — O3 dormant.** La obligación 3 (category membership) tiene
implementación Z3 completa pero el DSL no permite expresar las
invariantes necesarias para que tenga obligaciones interesantes que
verificar. La extensión gramatical (member-quantified categories)
está diseñada y documentada como v1; su implementación y validación
empírica queda fuera del alcance de esta tesis.

### 4.6.3 Trabajo futuro inmediato

Las extensiones naturales (orden de leverage decreciente):

1. **Member-quantified categories** para despertar O3.
2. **Namespace provenance** en el merged AST para refinar
   resolución de W35 (annotations apuntan a símbolos en
   namespaces específicos).
3. **Code-stage integration** cerrando el último edge Design → Code.
4. **Strict mode** que promueve W34/W38/W39 a S-codes para CI.

---

## 4.7 Amenazas a la validez (consolidadas)

### 4.7.1 Validez interna

- **Acoplamiento entre scaffolding y modelo.** El playbook se afinó
  iterativamente durante la sesión; las reglas duras se descubrieron
  *después* de fallos observados. Es posible que esté
  inadvertidamente "ajustado" a los patrones de fallo de DeepSeek y
  Sonnet específicamente. **Mitigación parcial:** las 8 reglas son
  todas DSL-específicas (no model-specific) por inspección manual.
- **Riesgo de cherry-picking en mutaciones.** Las cuatro mutaciones
  del negative test fueron elegidas a posteriori conociendo la
  implementación del verificador. **Mitigación:** un análisis de
  cobertura mutacional sistemática (PIT, Mutmut, o un operador
  custom sobre OCL clauses) reforzaría el resultado.

### 4.7.2 Validez externa

- **Generalización a otros dialectos de OCL.** El verificador asume
  el dialecto reducido del DSL (linear arithmetic + Allen + Boolean).
  La estrategia de Z3 implication es generalizable, pero la fracción
  *decidable* sería distinta para OCL pleno.
- **Generalización a sistemas de tamaño industrial.** Los `.onto`
  más grandes en este capítulo son ~500 líneas (insulin-pump,
  meeting-scheduler) y ~280 líneas (engine-control formalization).
  Sistemas con decenas de miles de líneas tendrían comportamiento
  Z3 distinto (tiempo de prueba, decidibilidad).

### 4.7.3 Validez de constructo

- **¿"Convergencia" es la métrica correcta para "el playbook
  funciona"?** Un `.onto` que pasa verificación pero modela
  incorrectamente el dominio falla el constructo, no la métrica.
  Una evaluación manual por experto de dominio reforzaría el
  constructo. Trabajo futuro.
- **¿El "subconjunto decidible" es lo suficientemente expresivo?**
  La soundness del verificador (Lema 3.1, Corolario 3.2) está
  caracterizada *sobre Φ_dec*. Cláusulas fuera de Φ_dec se reportan
  como skipped (Lema 3.3 — *false-negative parcial*). Si la
  fracción de cláusulas reales que caen fuera de Φ_dec es alta, la
  verificación es vacua en la práctica. La validación empírica
  (Tabla 4.1) reporta convergencia a 0 hard-violations en todos
  los pares (modelo × dominio); inspección manual de los
  diagnósticos `W##_partial` (no incluida en este capítulo)
  sugiere que las cláusulas skipped son típicamente sobre `String`
  o navegaciones profundas, no sobre la aritmética que define las
  obligaciones — pero un análisis cuantitativo de qué fracción de
  cláusulas reside en Φ_dec queda como trabajo futuro.

### 4.7.4 Validez de conclusión

- **N=3 dominios × 2 modelos × 4 obligaciones** es 24 puntos de
  datos. Suficiente para hallazgos cualitativos (F1-F5) pero no
  para inferencia estadística. Las conclusiones se reportan como
  *evidencia consistente* en lugar de *significativa*.

---

## Apéndice 4.A — Comandos de reproducción

```bash
# RQ1 — convergencia
node scratch/sdlc-playbook-test.mjs --case <insulin-pump|meeting-scheduler|engine-control> \
  --provider <anthropic|deepseek>

# RQ2 — negative test
node scratch/negative-test.mjs

# RQ3 — repair loop (mismo modelo)
node scratch/repair-loop.mjs --case meeting-scheduler --provider deepseek

# RQ3 — repair cross-model (Sonnet repara DeepSeek)
node scratch/repair-loop.mjs --case meeting-scheduler --provider anthropic \
  --src-dir examples/meeting_scheduler_deepseek

# RQ4 — comparativa v0.4 vs v0.5
# (cambiar la PATTERNS_SDLC.md y re-correr RQ1)
```

## Apéndice 4.B — Mapping a `BLOQUE2_EMPIRICAL.md`

| Sección del capítulo | Phase(s) en el log empírico |
|---|---|
| §4.2 RQ1 | Phases 1, 2, 4 |
| §4.3 RQ2 | Phase 5 |
| §4.4 RQ3 | Phase 6 + Phase 8 (cross-model) |
| §4.5 RQ4 | Phases 7 + 8 |

---

## Changelog del capítulo

- 2026-05-28 — v0.1 — primer borrador completo cubriendo RQ1-RQ4,
  síntesis (§4.6), amenazas (§4.7), apéndices. Pendiente: revisión
  estilística por autor, posible movimiento de algunas tablas a
  apéndice, y adaptación a convención del programa de posgrado.
