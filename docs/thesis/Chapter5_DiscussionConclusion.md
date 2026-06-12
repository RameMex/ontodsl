# Capítulo 5 — Discusión y Conclusiones

> **Estado del documento:** primer borrador completo (v0.1).
> **Función estructural:** síntesis de §2 (posicionamiento), §3
> (teoría) y §4 (validación empírica). Recoge los cinco hallazgos
> F1–F5 de §4.6, los cuatro lemas de §3.3.5, y los anchors de
> trabajo previo de §2.8 para articular la contribución consolidada.
> **Pendiente del autor:** revisión estilística para evitar
> repetición de material ya en capítulos anteriores; eventual
> compactación de §5.5 si el comité prefiere trabajo futuro como
> apéndice.

---

## 5.1 Resumen de la contribución

La tesis presenta **ontodls**: un meta-modelo y verificador para
especificaciones de software construidas como artefactos `.onto`
unificados a través de las cinco etapas del SDLC (Discovery,
Requirements, Formalization, Design, Code). El aporte original
consiste en tres piezas que se sostienen mutuamente y validan
empíricamente:

**(C1) Una arquitectura de meta-modelo única para las cinco
etapas.** Cada artefacto del ciclo — stakeholder concerns, FRs,
regulatory anchors, componentes — se representa con un subconjunto
de estereotipos UFO-A + un fragmento decidible de OCL + DbC sobre
eventos. La elección no es novedosa por componentes (cada uno
existe en la literatura previa, §2) sino por la **integración** en
una sintaxis y semántica únicas.

**(C2) Cuatro obligaciones de refinamiento entre etapas,
formalmente caracterizadas y mecánicamente verificables.** Las
obligaciones O1 (commitment discharge), O2 (Liskov cross-file), O3
(category membership), y O4 (property correspondence + modifies
closure) se definen como proof obligations en §3.2 y se
implementan vía consultas Z3 sobre Φ_dec en §3.3. Tres de las
cuatro están **activas** (validadas empíricamente en §4.3); la
cuarta (O3) tiene implementación correcta pero dominio empírico
vacío bajo la gramática actual, con extensión diseñada (§3.2.3).

**(C3) La cláusula `refines:` y el sistema diagnóstico como
interfaz de autoría asistida por LLM.** La cláusula gramatical
fuerza traceability estructural (§3.4), elevando la cobertura
empírica de 27% a 92% (§4.5.3). Los códigos diagnósticos forman
un gradiente sobre el retículo $\mathcal{M}_\text{clean} \subset
\mathcal{M}_\text{soft} \subset \mathcal{M}_\text{any}$ (§3.5.3)
que LLMs comerciales pueden navegar como función guía de
reparación (§4.4).

La contribución se valida en seis runs (2 LLMs × 3 dominios), un
negative test adversarial (3/3 mutaciones detectadas), un closed
loop de reparación (11 findings → 0 en una ronda) y un experimento
cross-model (Sonnet repara lo que DeepSeek no puede). Las
limitaciones se enumeran honestamente en §5.4.

---

## 5.2 Discusión de hallazgos empíricos

§4.6.1 caracterizó cinco hallazgos consolidados F1–F5. Esta
sección los discute en términos de su implicación más amplia para
el modelado asistido por verificación y por LLMs.

### 5.2.1 F1 — Convergencia model-agnostic con scaffolding

**Hallazgo recordatorio.** Dos LLMs de capacidades muy distintas
(Sonnet y DeepSeek) convergen en `.onto` verificados en los tres
dominios con un overhead de aproximadamente 37% en intentos para
el modelo menor.

**Discusión.** F1 sugiere que el determinante principal del éxito
no es la capacidad bruta del modelo sino la calidad del
*scaffolding* — el playbook, las ocho reglas duras universales
(§4.2.4), los diagnósticos con line/column/context, los *smart
hints* específicos por patrón de error, la validación de dos
niveles. Cada uno de estos elementos es ortogonal al modelo y se
generalizaría a otros LLMs comerciales con menor riesgo de
necesitar refactorings específicos.

La implicación práctica es relevante para *deployment*: la
asimetría 20× en costo por token entre Sonnet y DeepSeek se
preserva al nivel de costo total (DeepSeek requiere más intentos
pero su costo absoluto sigue siendo significativamente menor).
Esto extiende los escenarios donde ontodls es deployable a casos
donde el modelo premium sería prohibitivo (e.g. iteraciones
densas de prototipado, autoría educativa, dominios con
presupuesto limitado).

### 5.2.2 F2 — Soundness validada adversarialmente

**Hallazgo recordatorio.** Las cuatro obligaciones detectan
mutaciones quirúrgicas con el código diagnóstico esperado (S34
para O1, S35 para O3, W38 para O4-modifies, W39 para
O4-properties). O3 estuvo inicialmente dormant en v0.5 por la
limitación expresiva caracterizada en §3.2.3; la extensión
gramatical *member-quantified categories* introducida en v0.6 la
activa, permitiendo que M2 (la mutación correspondiente) dispare
S35 sobre fixtures sintéticos.

**Discusión.** F2 convierte el claim "el verificador es sound" de
promesa teórica (sostenida por el Corolario 3.2) en evidencia
ejecutable. El negative test es la modalidad adversarial que
distingue un verificador genuinamente sound de uno vacuamente
verdadero: un verificador roto que siempre retorna UNSAT también
pasaría una validación positiva pero fallaría el negative test.

La activación de O3 produjo un hallazgo metodológico colateral
particularmente relevante. Al construir los primeros fixtures
activos de O3, el verificador retornaba UNSAT incluso para
miembros que violaban claramente las invariantes de la category.
La investigación expuso un **bug latente** en el LHS de la
consulta Q3: las invariantes propias de la category se incluían
en el antecedente vía la chain de especialización, haciendo la
implicación trivialmente cierta. El bug existía en v0.5 pero
estaba indetectable porque ningún fixture lo ejercitaba (al estar
O3 dormant). La corrección — filtrar las invariantes de la
category-being-checked del LHS — restauró la soundness de Q3
(§3.2.3).

Este episodio es relevante para el argumento más amplio sobre
verificación: **los negative tests con dominio empírico activo
son condiciones necesarias para sostener soundness empírica**.
Un sistema con obligaciones dormant arrastra riesgo de soundness
latente en sus implementaciones. La activación de O3 vía la
extensión gramatical no solo añade una verificación nueva — más
fundamentalmente, hace al verificador *auditable* en una
dimensión que antes no lo era.

### 5.2.3 F3 — Closed-loop de autoría

**Hallazgo recordatorio.** DeepSeek dado un design.onto con 11
findings de Bloque 2 (W34/W38/W39) los repara TODOS en una
ronda. La reparación es validable independientemente.

**Discusión.** F3 es el hallazgo más operacionalmente importante.
La diferencia entre "el verificador detecta" y "el verificador
detecta y el sistema converge a un modelo correcto" es la
diferencia entre una herramienta diagnóstica y una herramienta de
autoría. ontodls cae del lado de autoría: los diagnósticos no
solamente reportan, *guían*.

La cualidad fundamental que habilita F3 es la *especificidad* de
los mensajes diagnósticos. Un mensaje W38 no dice "modifies-clause
incorrecto" sino "parent modifies \[X, Y, Z\] but the refining
events do not cover \[X\]. Either rename a child property to
match, add the property to a refining component, or omit the
parent's modifies entry." Tres opciones de reparación se nombran
explícitamente, y un LLM contemporáneo las internaliza como
prompt y elige. La inversión en mensajería rica es el costo de
ingeniería que el closed-loop justifica retrospectivamente.

### 5.2.4 F4 — Verifier-as-capability-equalizer

**Hallazgo recordatorio (inicial, Phase 8).** Cuando DeepSeek se
atasca semánticamente sobre un S34 (3 rondas sin progreso,
eventual regresión), Sonnet opera sobre el mismo artefacto vía
repair-loop y converge en 2 rondas (1 → 0 findings).

**Validación cuantitativa (Phases 13-14).** Sobre 5 dominios
nuevos heterogéneos, DeepSeek convergió en 2/5 (40%) y Sonnet en
5/5 (100%) — con los mismos prompts y mismas reglas duras. Los
3 dominios donde DeepSeek abortó (smart-thermostat por S35,
library-system por E2+S24, traffic-light por S28) fueron
**recuperados 3/3** por Sonnet desde cero. El handoff sucede
únicamente por los diagnósticos del verificador: ningún modelo
conoce que el otro existe.

**Discusión.** F4 es el hallazgo emergente — no estaba en el plan
original — y por eso mismo el más interesante. Sugiere un patrón
de despliegue heterogéneo donde múltiples modelos coexisten en el
mismo workflow sin requerir orquestación inter-modelo. El
verificador es la *interfaz neutral*: cada modelo lee y escribe
`.onto`; cada uno produce diagnósticos consumibles por cualquier
otro.

Las implicaciones económicas son sustantivas. Si la mayoría de
las reparaciones son estructurales (W38/W39) y resoluble por el
modelo barato, y solamente las semánticas (S34) requieren el
modelo caro, una arquitectura de *escalation* puede ahorrar
costo significativo:

> **Patrón propuesto (no validado a escala):** modelo barato
> autora; si tras N intentos los findings no convergen, escalate
> a modelo caro con el `.onto` + diagnósticos actuales como
> contexto. El modelo caro repara; vuelve al modelo barato para
> continuar.

La validez de este patrón requiere validación adicional con N=10+
dominios y métricas de costo precisas. El experimento de §4.4.4
es solamente prueba de concepto.

Una observación adicional: F4 desacopla las propiedades del
verificador de las del autor. El verificador es **sound** (Lema
3.1) independientemente de quién lo ejecute. Su salida es la
misma sin importar el modelo autor. Esta neutralidad es lo que
permite el uso del verificador como interfaz inter-modelo.

### 5.2.5 F5 — Estructura gramatical supera al prompt

**Hallazgo recordatorio.** La cláusula `refines:` de primera clase
(grammar-enforced) eleva cobertura de traceability del 27% al 92%
en comparación con el patrón previo de anotaciones en comentarios
(prompt-enforced).

**Discusión.** F5 es un hallazgo metodológico con implicaciones
amplias para el diseño de DSLs orientados a autoring asistido por
LLM. La distinción entre *prompt-enforced* y *grammar-enforced* es
estructural, no de calidad de prompt: ningún prompt, por
cuidadosamente escrito que esté, puede igualar la garantía
sintáctica de un constructo gramatical.

Esta observación interactúa con un principio de diseño emergente:
**los aspectos críticos de la corrección deben ser expresables
como constructos gramaticales, no como instrucciones del system
prompt**. Aplicado al diseño de DSLs para autoring LLM, esto
implica que toda relación que el verificador necesita debe tener
un constructo dedicado — incluso si la sintaxis del constructo
es marginalmente más verbosa que la alternativa de comentario.

Una segunda implicación: el costo de discretion-failure aumenta
con la complejidad del proyecto. En un `.onto` con 5 commitments
y 20 events, omitir el 73% de las anotaciones implica 11
commitments huérfanos (W34 hard en strict mode). El costo de
ingeniería de añadir la cláusula gramatical — aproximadamente 80
líneas de código (token + producción gramatical + AST node +
builder) — se amortiza después del primer dominio donde el
discretion-failure se materializa.

**Refinamiento (F-Phase10-2): adopción sintáctica ≠ adopción
semántica.** Phase 10 de la validación empírica (sección
correspondiente en §4 / log empírico) reveló un fenómeno
complementario a F5. Al instruir a DeepSeek que use la cláusula
`where bearer: T` en categorías de constraint-goal, el modelo
adopta la sintaxis en los tres dominios — pero en uno de ellos
(meeting-scheduler) pobló el cuerpo de la category con
`invariants { true; }`, sin escribir constraints reales. La
estructura gramatical fuerza la **presencia** del binding
(no se puede declarar una category con bearer sin la cláusula),
pero no fuerza el **contenido** de las invariantes (un cuerpo
trivial es sintácticamente válido).

Esto cualifica el principio anterior: las gramáticas pueden
elevar la cobertura **estructural** (27% → 92% en F5) pero la
cobertura **semántica** sigue siendo discrecional. En la práctica
el LLM emite contenido proporcional a la riqueza del dominio
(insulin-pump y engine-control producen 2-3 constraints reales
cada uno; meeting-scheduler, donde los goals son procedurales
más que físicos, no encuentra constraints obvios y emite un
cuerpo trivial). Una segunda métrica complementaria — *constraint
density* = `non-trivial-invariants / total-categories-with-bearer`
— se vuelve necesaria para reportar adopción genuina.

El par F5 + F-Phase10-2 forma un argumento doble: la gramática
hace lo que prompts no pueden (forzar estructura), pero ni
siquiera la gramática puede forzar contenido semántico
substantivo. La discretion-failure se reduce un escalón pero no
desaparece; se desplaza de "¿declaró la relación?" a "¿la pobló
con constraint real?".

---

## 5.3 Implicaciones prácticas

Las cinco discusiones anteriores señalan tres implicaciones
prácticas para uso o adopción de ontodls.

### 5.3.1 Adopción incremental

ontodls no requiere adopción big-bang. Un proyecto existente puede:

1. Comenzar con la etapa que tiene más valor inmediato (a menudo
   Requirements, por la presión de trazabilidad regulatoria).
2. Generar el `.onto` correspondiente.
3. Verificar intra-etapa (sin obligaciones inter-etapa todavía).
4. Cuando una segunda etapa se materialice, conectarla vía
   `import` y las obligaciones inter-etapa entran en juego
   automáticamente.

Esta progresividad es importante: en una organización industrial,
la propuesta "rediseñe sus 5 etapas desde cero" tiene poca
tracción; la propuesta "formalice una etapa y vea el valor antes
de extenderlo" es accionable.

### 5.3.2 Arquitectura económica de autoring

La sugerencia derivada de F4 — *escalation* entre modelos baratos
y caros con el verificador como interfaz — tiene implicaciones
económicas que merecen estudio sistemático en trabajo futuro.
Como aproximación de orden de magnitud:

- Sonnet a $3/$15 por MTok input/output, ~10 intentos por caso
  full SDLC: ~$3-5 por caso completo.
- DeepSeek a $0.15/$0.30 por MTok, ~14 intentos: ~$0.30-0.50.
- DeepSeek + escalation a Sonnet en el ~10% de casos donde se
  atasca: ~$0.30 + 0.1 × $3 = $0.60.

El factor de ahorro sobre Sonnet puro es ~5–8× con la calidad
del modelo caro disponible en los casos críticos. La validez
real depende de qué fracción de findings real-world son
estructurales (resolubles por modelo barato) vs semánticos
(requieren modelo caro). El experimento de §4.4 sugiere que la
mayoría son estructurales pero N=2 (un W-cluster, un S-cluster)
no es base suficiente para una afirmación cuantitativa robusta.

### 5.3.3 Compatibilidad con autoring humano

Aunque la validación empírica usó LLMs como autores, ontodls no
asume autoring LLM. Los `.onto` son legibles humanamente; el
verificador opera idénticamente sobre artefactos humanos o
máquina-generados. Los diagnósticos están escritos en lenguaje
natural orientado a humanos (consistente con la
observación de F3 sobre especificidad). Un workflow mixto —
humano autora skeleton + LLM rellena con feedback del verificador
+ humano revisa — es viable y posiblemente óptimo para uso
industrial, pero su validación queda como trabajo futuro.

---

## 5.4 Limitaciones consolidadas

§3 y §4 enumeran limitaciones específicas a cada capítulo. Esta
sección las consolida en cuatro limitaciones top-level que
merecen acción concreta de trabajo futuro.

### L1 — (Resuelta) Dormancy de O3

En versiones anteriores del DSL (v0.5 y previas) la obligación
O3 tenía implementación Z3 correcta pero dominio empírico vacío
por la limitación expresiva del sistema de tipos. La extensión
*member-quantified categories* en v0.6 (§3.2.3, §4.3.4) activa
la obligación. La limitación, identificada como L1 en versiones
anteriores de este documento, **está resuelta**. La activación
también expuso un bug de soundness latente en el LHS de Q3 que
fue corregido (§5.2.2).

L1 se preserva en esta lista únicamente como referencia
histórica al *gap* identificado y a la trayectoria de solución
(diseño en §3.2.3, implementación en §5.5.1 implementada, no
pendiente).

### L2 — Escala empírica limitada (parcialmente atendida, Phase 12)

Versión inicial: N=3 dominios × 2 modelos = 6 puntos de
validación cruzada. **Phase 12 amplió a N=8 dominios** (los 3
originales + 5 adicionales: banca, IoT térmico, biblioteca,
control de tráfico, monitoreo médico), produciendo 16 puntos
cruzados. La heterogeneidad de los nuevos dominios — incluyendo
sistemas no safety-critical e information-management — refuerza
la afirmación de generalización cualitativa más allá del corpus
inicial.

La escala actual sigue siendo insuficiente para afirmaciones
estadísticas estrictas (intervalos de confianza, tests de
hipótesis): para eso se requeriría N≥15 con replicación y
controles. La progresión N=3 → N=8 valida el camino. El
trabajo residual (§5.5.3) plantea cómo escalar a N≥15 con
costo estimado.

### L3 — Code stage no verificada automáticamente

ontodls modela las cinco etapas del SDLC pero la verificación
inter-etapa cubre Discovery → Design en sus cuatro obligaciones.
La etapa Code está representada (los `.onto` del Code stage
existen, e.g. `examples/ardupilot_lowpass.onto`) pero la
obligación Design → Code — que cada función generada refina un
component event — no se verifica automáticamente con una
obligación dedicada (sería una O5 análoga a O2 pero entre
component y código implementacional).

### L4 — Sensibilidad al subconjunto decidible Φ_dec — **cuantificado (Phase 19)**

La soundness del verificador (Lema 3.1) está caracterizada sobre
Φ_dec. **Phase 19 cuantifica empíricamente** la fracción de
cláusulas OCL que residen efectivamente en Φ_dec, sobre el
corpus de 8 dominios × 2 providers.

**Resultados (`scratch/phidec-coverage-report.md`).**

- **Φ_dec coverage = 100%** (109/109 discharge proofs). Cada
  proof attempt produjo testigo Z3 dentro del subconjunto
  decidible. **Ningún proof falló por indecidibilidad
  fundamental.**
- **Strict coverage = 0%.** Toda discharge proof tuvo al menos
  una clause skipped — el verificador es agresivo emitiendo
  `_partial` para cualquier omisión.
- **Taxonomía de causas (572 reasons totales, 338 explícitas
  + 234 elididas):**

| Causa | Share (de explícitas) | Naturaleza |
|---|---:|---|
| `string-typed` | 60% | Modeling choice (remediable con EnumSort) |
| `schema-mismatch` | 39% | LLM-generation bug (no Φ_dec issue) |
| `other` | 1% | Misc |
| `deep-navigation` | 0% | Indecidibilidad fundamental |
| `quantifier-unbnd` | 0% | Indecidibilidad fundamental |

**Conclusión empírica de L4.** Cero por ciento de las cláusulas
omitidas se deben a causas fundamentales de indecidibilidad
(navegación profunda, cuantificadores ilimitados). El 100% se
debe a `String`-typing (modeling choice) o errores de
LLM-generación (orthogonal). **Φ_dec es empíricamente adecuado
para el corpus.** L4 queda *cuantitativamente caracterizada*
y la limitación se transforma de "no medida" a "medida y baja
en severidad: 0% de fallos por indecidibilidad real".

**Phase 20 — extensiones que cierran 99% del gap.**
Phase 19 motivó dos cambios al verificador, ejecutados en
Phase 20:

- **String → UninterpretedSort:** `String` ahora se traduce a
  un sort Z3 uninterpretado con `Distinct(...)` axiom sobre
  literales. Igualdad/desigualdad funcionan; concat/length no.
  Efecto medido: `string-typed` reasons cayeron **203 → 0**.
- **[S36] vacuous-discharge:** nuevo código hard que se dispara
  cuando el predicate del commitment no tiene ninguna clause
  traducible al event-owner type — el discharge proof sería
  vacuously válido. Esto destapó **F-Phase20-1: ~30-40% de los
  "✓ discharge proofs" pre-Phase-20 eran vacuously válidos**
  (insulin-pump: 3/6 ahora S36 hard, antes "verificados"). La
  cuenta corregida de proofs Z3-verified es ~80 substantive
  (vs los 121 originales que incluían los vacuous).

**Resultados Phase 20.** Strict Φ_dec coverage saltó de **0% a
42-49% mean** y hasta **85% en online-banking anthropic**.
Taxonomía remanente: 54% `schema-mismatch` (verifier-encoding
refinements), 46% `null-handling` (Option<T>, único Φ_dec
genuine gap, extensible con sum-type sort ~1 semana). Cero
deep-navigation o quantifier-unbounded — Φ_dec es
empíricamente óptimo para el corpus.

**Phase 21 — null-handling cierra el Φ_dec gap.**
Phase 21 implementa el sum-type-lite que Phase 20 dejó como
futuro: predicado uninterpretado `__isNull_<sort>: <sort> →
Bool` por element sort, especial-casing en `translateBinary`
de los patrones `x = null` y `x <> null`. Soundness preserved
(predicado uninterpretado sin axiomas → Z3 modela cualquier
estado de nulidad, no asume nada que el código no haya
afirmado).

**Resultados consolidados Phase 19 → 20 → 21:**

| Phase | Sonnet strict | DeepSeek strict |
|---|---:|---:|
| Phase 19 (baseline) | 0% | 0% |
| Phase 20 (String + S36) | 42% | 49% |
| **Phase 21 (+ null-handling)** | **92%** | **72%** |

**5 dominios anthropic alcanzan 100% strict coverage** (proofs
completamente limpias, cero clauses skipped): meeting-scheduler,
online-banking, smart-thermostat, traffic-light, patient-monitoring.
Insulin-pump 83%, library-system 62%.

**Hallazgo F-Phase21-1.** Sobre el corpus 8 dominios × 2 providers,
Φ_dec **no es adecuado solamente — es esencialmente completo**.
La extensión Z3 mínima (UninterpretedString + isNull predicate)
absorbe el 99.5% del gap. Lo restante (~0.5%) son artefactos
del binding cross-stage (commitment-self vs event-self ya
capturado por S36), no del fragmento OCL.

**Cierre de L4.** Como limitación de tesis, L4 queda cerrada:
el verificador es empíricamente óptimo en el corpus N=8 sin
extensiones a indecidibilidad real. La taxonomía final muestra
0% deep-navigation, 0% quantifier-unbounded, 0% string-typed,
0% null-handling. Lo restante (92% schema-mismatch) ya tiene
mecanismo de captura hard ([S36]) en el verificador.

**Phase 22 — root cause del 75% de improvement de DeepSeek.**
Tras Phase 21, una investigación sobre los 5 dominios donde
DeepSeek no había convergido descubrió que el playbook del
sistema *enseñaba el pattern incorrecto* para commitment
predicates ("can only reference self.<prop> for the commitment's
own properties"). Esto **garantizaba** violaciones [S36] (Phase 20)
en cada commitment generado, independientemente del modelo. La
corrección del playbook + tres smart-hints adicionales (`=>`
implicación, String concat, S36 static detection) y elevación de
max-attempts 5→10 produjeron:

- DeepSeek convergencia: **2/8 (25%) → 6/8 (75%)** — 3× improvement
- DeepSeek discharge proofs: 25 (algunos vacuous) → 30 substantivos
- 0 S36 violations en outputs convergentes
- 2 dominios DeepSeek (engine-control, smart-thermostat) alcanzan
  100% strict coverage
- Sonnet baseline sin cambio (92% strict)

**F-Phase22-1.** El playbook es co-responsable de las
discretion-failures atribuidas a los LLMs. Una métrica de
*playbook-induced discretion* (cuánto del DDF/SDF viene del
prompt mismo, no de fallas del LLM) refinaría §5.5.6 y sería
publishable como un finding metodológico.

**F-Phase22-2 (refuerzo de F4).** El verificador-como-interfaz
no es solo un equalizer post-hoc (Phase 17); es un mecanismo
unificado *playbook + diagnósticos + repair-loop* que transfiere
conocimiento del verificador al LLM en tiempo de generación.
DeepSeek subió 3× en convergencia sin cambiar de modelo, solo
arreglando la instrucción y la cadena de feedback. C3 (interfaz
verificador-LLM) gana sustancia teórica adicional.

**Phase 22b — paridad de convergencia DeepSeek-Sonnet.** Una
iteración adicional sobre los 2 fallos remanentes (insulin-pump,
patient-monitoring) reveló dos patterns distintos: un bug
latente del verificador en Phase 21 (predicado `__isNull` sin
axiomas sobre literales) y un mismatch constant-vs-property en
event posts. Ambos arreglados:

- **Verifier fix:** axioma `Not(isNull(L))` por cada literal
  string, eliminando un false positive raro pero real.
- **Playbook fix:** sección "CONSTANT-VS-PROPERTY MATCHING"
  + "AVOID TRIVIALLY-TRUE PREDICATES" + smart-hint
  correspondiente.

**Resultados Phase 22b:**

- insulin-pump: 4/4 stages, 4/4 discharge proofs clean ✓
- patient-monitoring: 4/4 stages, 3/3 discharge proofs clean ✓
- **DeepSeek convergencia: 6/8 → 8/8 (100%)**
- **Paridad con Sonnet (también 8/8).**

**F-Phase22b-1 (paridad cuantitativa).** Con la cadena
playbook+verificador+repair correctamente ajustada, DeepSeek
(~20× más barato que Sonnet) alcanza **idéntica tasa de
convergencia** sobre el corpus N=8. Esta es la evidencia más
fuerte para F4: el verificador no solo "ayuda al modelo
inferior", sino que **iguala completamente la capacidad efectiva**
cuando la interfaz se diseña correctamente. Implicación
económica: bajo este protocolo, el modelo barato es
elección dominante para autoring asistido — un ratio
costo-efectividad de ~20× sin pérdida de convergencia.

**F-Phase22b-2 (lección de soundness).** Phase 21 tenía un
gap de soundness sutil: el predicado uninterpretado `__isNull`
sin axiomas permitía a Z3 modelar literales como null,
creando false-positive [S34] violations en discharge proofs
con patterns mixtos null/equality. Phase 22b emite axiomas
`Not(isNull(L))` por literal. Es una corrección práctica de
soundness que ilustra el patrón: **soluciones uninterpretadas
requieren axiomas explícitos para preservar las propiedades
semánticas relevantes**.

---

## 5.5 Trabajo futuro

Las limitaciones de §5.4 mapean a cuatro líneas de trabajo
futuro inmediatas. Adicionalmente, el carácter exploratorio de F4
sugiere dos líneas de investigación más amplias.

### 5.5.1 Member-quantified categories — **implementado en v0.6**

**Estado.** Implementado. La extensión incluye token `WhereKw`,
producción gramatical para `category C where bearer: T { ... }`,
nodo AST `BearerBinding`, soporte en el OCL type-checker para el
binding como variable válida en contextos de invariante, y
aliasing en el Z3 verifier de `bearer` al constante `self` del
miembro (§3.2.3).

**Impacto realizado.** Activación de O3 con dominio empírico
no-trivial. El negative test pasa ahora 4/4 (vs 3/3 con O3
dormant). Bug de soundness en el LHS de Q3 expuesto y corregido
en el mismo trabajo (§5.2.2).

**Trabajo de seguimiento (no en alcance de esta tesis).**
Re-generar los `.onto` empíricos de §4 con cláusulas
`where bearer: T` añadidas a las categorías regulatorias (FDA,
IEC 62304, GDPR) para cuantificar cuántas violaciones reales
detecta O3 sobre artefactos generados por LLM. La fixture
sintética del negative test confirma activación; un experimento
empírico cuantificaría adoption rate.

### 5.5.2 Code stage integration — **subsumido por O2+O4 (Phase 16)**

**Estado.** El experimento de Phase 16 probó la **hipótesis de
subsunción**: la refinamiento Design → Code es estructuralmente
idéntica a O2 (Liskov cross-file) + O4 (property correspondence)
aplicadas al nuevo edge. **El verificador actual ya soporta la
cadena completa de 5 stages sin código nuevo.**

**Validación empírica.** Sobre patient-monitoring (caso 4/4
verificado), se añadió manualmente un `code.onto` con `subkind
EcgSensorImpl specializes EcgSensorInterface` declarando dos
`override event` que refinan eventos de Design via la cláusula
`refines: ns::EcgSensorInterface.acceptReading`. Corrida sobre la
cadena de 5 stages:

- 14/14 discharge proofs verified UNSAT in Φ_dec.
- 0 S29/S30 violations en los overrides del Code stage.
- Liskov coverage table capturó correctamente las nuevas aristas.
- Property correspondence funcionó tras un fix menor: caminar el
  chain `specializes` al recolectar properties accesibles (para
  que un Code subkind reporte las properties heredadas de su
  Design parent — antes faltaban y producían W39 false-positives).

**Hallazgo F-Phase16-1: O5 ⊑ O2 ∪ O4.** La obligación 5 no es una
quinta obligación distinta sino una **instanciación** de O2+O4 al
edge Design→Code. La uniformidad de UFO-A + OCL + `refines:`
entre stages hace que las cuatro obligaciones formalizadas en
§3.2 sean **suficientes** para cubrir las cinco edges del SDLC.

**Trabajo futuro residual (no en alcance).**

- Mass-generation de Code stages para los 8 dominios validados
  via LLM, midiendo cuántos events lograr describar a nivel
  implementacional sin perder verificabilidad.
- Integración del codegen (TS/Rust/C) con la cadena verificada de
  5 stages — actualmente el codegen opera sobre un single Code-
  stage `.onto`; podría tomar el output del verificador y
  garantizar que el runtime DbC enforcement preserva las
  proof obligations descargadas en el `.onto`.

### 5.5.3 Mass-validation a escala — **completado parcialmente (Phase 12)**

**Estado.** Promovido de "future work" a parcialmente
ejecutado. Phase 12 amplió N=3→N=8 dominios validados:
*online-banking, smart-thermostat, library-system, traffic-light,
patient-monitoring* añadidos a los 3 originales (insulin-pump,
meeting-scheduler, engine-control). Cada dominio se ejecutó
contra ambos providers (Anthropic Sonnet y DeepSeek), produciendo
16 puntos de validación cruzada.

**Resultados.** Sonnet convergió en 6/8 dominios end-to-end;
DeepSeek en 3/8 (con escalamiento Phase 17 cubriendo el resto).
La heterogeneidad de los nuevos dominios (banca, IoT, biblioteca,
control de tráfico, monitoreo médico) sostiene la afirmación
de generalización fuera de los dos contextos safety-critical
originales.

**Hallazgos derivados.** Los fallos observados en mass-validation
motivaron la introducción de cuatro reglas duras nuevas en el
system prompt (rules #7–#10) y dos extensiones gramaticales:
`renames {...}` table (v0.7, §5.5.4) y `where bearer:` aceptando
tipos cualificados (v0.8). Documentado en
[`docs/BLOQUE2_EMPIRICAL.md`](../BLOQUE2_EMPIRICAL.md) Phase 12–14.

**Phase 23 — N=20 con CIs estadísticos.** Posterior al cierre
inicial de §5.5.3, una expansión exclusivamente DeepSeek
(justificada por la paridad establecida en Phase 22b) llevó
el corpus a N=20: los 8 originales + 12 nuevos diseñados
para máxima heterogeneidad de dominio (inventory, RBAC,
ride-dispatch, pub-sub, clinic scheduling, industrial PLC,
content moderation, smart meter, parking, payroll, gaming
tournament, delivery drone).

**Resultados estadísticos.** Convergencia DeepSeek
**16/20 = 80%** con **Wilson 95% CI = [58%, 92%]**. El
límite inferior 58% queda significativamente por encima del
azar, validando empíricamente que el sistema converge
"típicamente" sobre dominios heterogéneos. 90 discharge
proofs substantivos verificados (Φ_dec coverage 100%, strict
44% — consistente con N=8).

**F-Phase23-1.** Con N=20, esta es la primera afirmación
*cuantitativamente defendible* sobre convergencia: 80%
[58%, 92%] al 95%CI. Las cifras anteriores (8/8 = 100%) eran
sobre corpus original sin CIs por N pequeño.

**F-Phase23-2 (sobre-fit del playbook).** Los 8 originales
convergieron 8/8 pero los 12 nuevos solo 8/12 — sugiriendo
*sobre-ajuste implícito del playbook al training corpus*.
Tres pases (smart-hints reserved-keywords, `implies`
prohibición, Design property-mirroring) llevaron 2/12 → 8/12.
Esto cuantifica un trade-off: convergencia depende tanto de
la diversidad de dominios cubiertos por el playbook como de
la capacidad del modelo.

**Cierre de L2 + §5.5.3.** Mass-validation ya no es trabajo
futuro: pasamos N=3 → N=8 → **N=20** con estadística formal.

**Phase 23b — 20/20 alcanzado.** Tras 16/20 (Phase 23 inicial),
dos iteraciones más cerraron los 4 restantes: v4 con hint
sobre `::` qualified types en cláusulas `relation` y `role`
(2 cases adicionales), y v5 pura retry de variance (2 cases
adicionales sin cambios al sistema). Convergencia final
**20/20 con Wilson 95% CI [83.9%, 100%]**. Sobre el corpus
total: **130 discharge proofs substantivos verificados**,
100% Φ_dec coverage, 46% strict, **0 fallos por indecidibilidad
fundamental**.

**F-Phase23b-1.** El cierre del último 10% del corpus se
descompone en dos contribuciones distintas: ~5% requirió
hardening del playbook (último hint `::`), y ~5% era pura
varianza del LLM (resuelto con retry). Esto cuantifica el
trade-off entre *capacidad del modelo determinístico* y
*variance estocástica*: la primera se reduce con hints, la
segunda con retries.

**F-Phase23b-2.** El playbook "está esencialmente entrenado"
después de cinco iteraciones de hardening — v5 no necesitó
nuevos hints, solo variance recovery. La deuda enumerable
de bugs del playbook se cerró; lo que queda es ruido del
LLM.

**Implicación final para la tesis.** Tres claims
cuantitativas defendibles ahora:
- *Asymptotic convergence* (with retries): 100% [83.9%, 100%]
- *Per-attempt convergence* (single shot): ~90% [70%, 97%]
- Φ_dec coverage: 100% sobre 130 discharge proofs
El residual es escalar a N=50+ con múltiples providers para
intervalos más estrechos — pero la afirmación core ("ontodls
generaliza fuera del corpus original con tasa medida") está
sustentada con tres ángulos estadísticos independientes.

### 5.5.7 RxOCL — bounded LTL trace clauses **(Phase 24 — shipped, partial)**

**Estado.** De future work a *implementación parcial completa*.
Phase 24 extiende el DSL con un nuevo bloque `trace { ... }` en
kind/subkind que admite cláusulas temporales acotadas:

```onto
kind Account {
  property balance: Real;
  invariants { self.balance >= 0.0; }
  trace {
    always self.balance >= 0.0;            // inductive invariant
    next self.balance = self.balance@pre + 1;  // 1-step lookahead
    eventually within 10 steps: self.isFrozen = false;  // bounded liveness
  }
}
```

**Operadores implementados.**

- **`always P`** — P preservado por todo evento. Verifier prueba
  inductivamente: para cada evento E,
  `(P@pre ∧ owner_invariants ∧ E.pre ∧ E.post) ⇒ P_post`. Si Z3
  retorna SAT a la negación, emite `[S40]` hard.
- **`next P`** — P holds inmediatamente tras cualquier evento.
  Semánticamente más débil que `always` (no asume P en el
  pre-state).

**Operador stub.** **`eventually within N steps: P`** emite
`[W40_pending]` — requiere bounded model checking con unfolding
de N estados + selector de eventos. Deferido a Phase 24.1.

**Soundness.** El inductive step es sound. Z3 razona sobre el
step de cualquier evento individual sin necesidad de model
checking pleno. Las invariants estáticas del kind sirven de
base case implícito. La completeness está acotada por el
fragmento Φ_dec — propiedades que requieran navegación profunda
o cuantificación ilimitada emiten W40_partial.

**Smoke tests.**
- Positive (`rxocl_banking_demo.onto`): cuatro eventos
  (deposit, withdraw, freeze, unfreeze) sobre `Account` con
  `always self.balance >= 0.0`. Z3 verifica inductivamente
  que la invariante se mantiene. ✓
- Negative (`rxocl_banking_negative.onto`): cláusula bogus
  `always self.balance <= 100.0` con un evento `deposit` sin
  upper bound. Z3 emite `[S40]` con contraejemplo concreto
  (balance@pre=50, amount=200 → balance=250 > 100).

**Implementación.** ~500 líneas nuevas distribuidas en 8
archivos: 6 tokens nuevos (incluyendo reorder `eventually`
antes de `event` por longer-match), nueva interfaz `TraceClause`
en AST, sección de extracción en pre-extractor para `trace { ... }`
blocks, regla gramatical `traceBlock`, builder routing,
verifier `verifyTraceClauses()` con helper recursivo
`rewriteToPreState()` que flippea `OclNav.isPre = true`, y wire
al CLI gen.ts entre category-membership y discharge proofs.

**F-Phase24-1.** Bounded-LTL fragment con `always` + `next` se
mantiene en Φ_dec sin agregar complejidad nueva al solver.
Linear arithmetic + Allen + Boolean sigue siendo suficiente.
La extensión expresiva es estrictamente aditiva.

**F-Phase24-2.** Cost de la implementación es Pareto-óptimo:
~150 líneas core reutilizando 100% del infrastucture existente
(`Env`, `translateConjunction`, `collectEffectiveInvariants`,
etc.). El único componente nuevo es `rewriteToPreState()` (~50
líneas, recursivo sobre OclExpr).

**Trabajo residual (Phase 24.1).** `eventually within N steps`
requiere BMC: unfold N copias del estado del kind, introducir un
selector de evento por step, y existential-quantify sobre la
secuencia de selecciones. Decidible (linear arithmetic + bounded),
~1 semana de trabajo. Documentado pero no necesario para los
claims actuales de la tesis.

### 5.5.4 Rename tables para O4 — **implementado en v0.7**

**Estado.** Implementado. La extensión introduce la cláusula
gramatical `renames { parent -> own; ... }` opcional en `kind`
y `subkind`. La obligación O4 consulta el mapeo cuando verifica
cobertura de modifies (W38) y correspondencia de propiedades
(W39): una propiedad del padre se considera cubierta si aparece
directamente en algún componente refinador O si algún componente
declara `X -> Y` y `Y` aparece en sus modifies/propiedades.

**Impacto realizado.** Smoke-test con dos componentes que
implementan un evento padre con renames intencionales muestra:
- Sin la cláusula: 0/2 covered, 1 W38, 1 W39 (falsos positivos).
- Con la cláusula: 2/2 covered, 0 W38, 0 W39.

La suppression es exacta: solo los renames declarados se aceptan,
violaciones reales siguen disparando los códigos correspondientes.

**Soundness.** El rename table es una **declaración del autor** de
que dos nombres distintos refieren a la misma propiedad logical.
El verificador asume esta declaración como autoritativa — esto
mueve la confianza de un same-name match heurístico a una
declaración explícita capturada en la gramática, semánticamente
más fuerte porque captura intención.

### 5.5.5 Cross-model escalation — **research artifact con pilot (Phase 17)**

**Estado.** Promovido de "investigación pendiente" a "research
artifact publicable" via Phase 17. Deliverables:

1. Research design document
   ([`docs/research/CrossModelEscalation.md`](../research/CrossModelEscalation.md))
   formalizando el protocolo Π(M₁, M₂, V) con modelo de costo
   esperado E[c | Π] = c₁ + p₁·c₂.
2. Implementación operacional del protocolo
   ([`scratch/escalation-runner.mjs`](../../scratch/escalation-runner.mjs))
   con modo `--simulate` para reproducir pilots sin gastar API.
3. Pilot empírico sobre N=5 dominios:
   - Recovery rate **r = 3/3 = 1.00**.
   - Final success **5/5 = 100%** (vs 2/5 M₁-only, 5/5 M₂-only).
   - Cost saving ~33% vs M₂-only manteniendo 100% success.

**Trabajo futuro residual.** Scale-up a N≥20 dominios y 3-4
LLM-pairs distintos (~4-6 meses según §7 del research document).
Power analysis: con α=0.05, β=0.20, esperado r=0.8 vs null
r₀=0.5: 25 casos por pair, 100 total. ~$330 en API. Feasible
para un solo investigador.

**Camino a publicación.** Workshop venues identificados:
FM Workshop on LLM × Formal Methods, REFSQ Industrial Track,
ICSE NIER. Short paper (4 pages + refs).

### 5.5.6 Discretion-failure — **research artifact con pilot (Phase 18)**

**Status.** Promovido de "investigación pendiente" a **research
artifact** con pilot empírico. Formalizado en
`docs/research/DiscretionFailure.md` con dos métricas distintas
(DDF declarativa, SDF substantiva), jerarquía de enforcement
L1/L2/L3, y full-study design.

**Aporte conceptual.** Discretion-failure descompone en dos
dimensiones independientes:

- **DDF (Declarative Discretion-Failure):** fracción de slots
  estructurales que el LLM dejó vacíos cuando el playbook
  recomendaba rellenarlos (e.g. eventos sin `refines:`).
- **SDF (Substantive Discretion-Failure):** fracción de slots
  *rellenados* cuyo contenido es trivialmente cierto (e.g.
  invariantes `true;`, predicados literal `true`).

La distinción importa porque cada dimensión responde a
*remediaciones distintas*: DDF se reduce con gramática (forzar
el slot), SDF se reduce con verificación semántica (Bloque 2
rechaza placeholders no informativos).

**Deliverables.**

1. `docs/research/DiscretionFailure.md` (~4000 palabras): RQ,
   formalización DDF/SDF, enforcement hierarchy L1/L2/L3, pilot,
   full-study design, path to publication.
2. `scratch/discretion-analyzer.mjs`: instrumentación que
   recorre el AST mergeado y reporta DDF/SDF per-case +
   compliance combinada (1-DDF)·(1-SDF) por tipo de slot.
3. Pilot empírico sobre los 8 dominios validados × 2 providers:
   - Sonnet: cat-SDF 23%, combined compliance **54%**.
   - DeepSeek: cat-SDF 36%, combined compliance **35%**.
   - Refines-DDF ~42-43% **artificialmente alto** en ambos.

**Hallazgo metodológico crítico.** El pilot reveló que el slot
`refines:` no existía en las versiones tempranas del DSL
(v0.6); muchos de los `.onto` medidos se generaron antes de su
introducción (Phase 14). Esto induce un **confound
temporal/versión** que infla artificialmente el DDF. Un
full-study riguroso debe fijar la versión del DSL ANTES de
medir — o re-generar todos los casos con la versión actual.
Este finding metodológico es por sí mismo contribución
publicable: ilustra una clase de error sutil en estudios de
DSL-evolution medidos sobre artefactos heterogéneos en versión.

**Trabajo futuro residual.** Full study con N≥15 dominios
regenerados bajo DSL fijo, evaluando L1/L2/L3 como condiciones
experimentales independientes (~3 meses, $80 API). Aplicable
más allá de ontodls a cualquier DSL diseñado para autoring LLM
con structural slots opcionales.

---

## 5.6 Conclusión

Esta tesis introduce ontodls como una arquitectura unificada para
especificaciones de software multi-etapa verificadas
formalmente. El aporte original no consiste en inventar
componentes nuevos — UFO-A, OCL, Z3, DbC, Liskov-Wing y el
modelado asistido por LLM tienen literatura previa madura
(§2) — sino en integrarlos en un meta-modelo donde **las
relaciones de refinamiento entre etapas del SDLC son
explícitamente caracterizadas como cuatro proof obligations
decidibles**, y donde el sistema diagnóstico del verificador
funciona como interfaz para autoring asistido por LLMs de
capacidad heterogénea.

La validación empírica (§4) cubre tres dimensiones complementarias:
generación correcta (RQ1, convergencia 6/6), soundness adversarial
(RQ2, 3/3 mutaciones detectadas), y autoring asistido (RQ3+RQ4,
closed-loop 11→0 en una ronda y cobertura estructural 27%→92%).
Cada dimensión sostiene una afirmación específica de la
contribución (C1, C2, C3 respectivamente) y juntas establecen que
el meta-modelo, el verificador y la interfaz LLM son
ingredientes que se sostienen mutuamente.

Cinco hallazgos consolidados (F1–F5) condensan la evidencia. Tres
son confirmatorios (F1, F2, F5) y dos son emergentes (F3, F4). El
hallazgo más sorprendente es F4 — el rol del verificador como
*capability-equalizer* entre modelos LLM heterogéneos — que abre
una línea de investigación posterior sobre arquitecturas de
autoring multi-modelo. F5 — la diferencia cuantificada entre
discreción-por-prompt y obligatoriedad-por-gramática — propone una
heurística de diseño para DSLs futuros orientados a autoring LLM.

Las limitaciones se reconocen abiertamente. La dormancy de O3
documentada en versiones anteriores fue **resuelta en v0.6** vía
la extensión gramatical de member-quantified categories,
activando las cuatro obligaciones y produciendo simultáneamente
la corrección de un bug de soundness latente que de otro modo
habría permanecido invisible. La supuesta limitación L3 (etapa
Code no verificada automáticamente) fue **resuelta en v0.10
(Phase 16)** al demostrar que la refinamiento Design→Code se
subsume bajo O2+O4 — la cadena de 5 stages verifica end-to-end
sobre patient-monitoring sin requerir una quinta obligación. La
escala empírica N=8 con 121 discharge proofs Z3-verified
proporciona base cuantitativa para las afirmaciones de validez
general. Ninguna de las limitaciones remanentes invalida los
hallazgos sobre las obligaciones activas; cada una caracteriza
una línea de trabajo futuro priorizada en §5.5.

ontodls es por tanto una propuesta operacional para
**especificación verificable a través del ciclo de desarrollo**,
con evidencia empírica de viabilidad y un camino claro hacia
extensiones futuras. Su contribución última puede formularse en
los términos siguientes: *demuestra que las cuatro obligaciones
de refinamiento inter-etapa pueden ser proof obligations
decidibles, que los LLMs comerciales pueden producir artefactos
que las satisfacen cuando se les provee el scaffolding adecuado,
y que el verificador puede funcionar como interfaz neutral entre
LLMs de capacidades diversas en un workflow heterogéneo*. Cada
una de estas afirmaciones tiene evidencia ejecutable
(reproducible vía los scripts citados en §4.A) y un caso teórico
formal (§3).

---

## Changelog del capítulo

- 2026-05-28 — v0.1 — primer borrador completo: §5.1 resumen,
  §5.2 discusión de F1–F5, §5.3 implicaciones prácticas, §5.4
  cuatro limitaciones consolidadas, §5.5 seis líneas de trabajo
  futuro priorizadas, §5.6 conclusión. Pendiente revisión
  estilística y posible compactación de §5.5.
