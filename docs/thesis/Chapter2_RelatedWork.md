# Capítulo 2 — Trabajo Relacionado

> **Estado del documento:** primer borrador completo (v0.1).
> **Convención de citas:** se usa la forma `(Autor Año)` como
> *placeholder*; el autor las convertirá al sistema bibliográfico
> del programa (LaTeX `\cite{}`, ACM, IEEE, etc.).
> **Pendiente:** verificación de citas exactas y posible expansión
> de §2.6 si el comité solicita cobertura más profunda de la
> literatura emergente de modelado asistido por LLM.

---

## 2.1 Resumen del posicionamiento

ontodls combina seis líneas de trabajo previas que tradicionalmente
se desarrollan en silos disciplinares: (i) ontología fundacional
aplicada a modelado conceptual (UFO-A); (ii) ingeniería de
requisitos orientada a objetivos (KAOS, i\*); (iii) verificación
formal de OCL vía SMT; (iv) *Design by Contract* y subtipado
comportamental de Liskov-Wing; (v) cálculos de refinamiento
multi-etapa (Z, B, Event-B); y (vi) modelado asistido por modelos
de lenguaje (LLMs). La contribución original no consiste en
inventar ninguna de estas líneas, sino en **integrarlas en una
arquitectura coherente donde las obligaciones de refinamiento entre
etapas del ciclo SDLC son explícitamente caracterizadas como
proof obligations decidibles**, y donde los diagnósticos del
verificador funcionan como interfaz para autoría asistida por LLMs
de capacidad heterogénea.

Las secciones siguientes caracterizan cada línea previa
brevemente, identifican qué ontodls toma y qué añade, y cierran
con una tabla resumen del posicionamiento (§2.8).

---

## 2.2 Ontología fundacional y modelado conceptual

### 2.2.1 UFO-A y OntoUML

Unified Foundational Ontology (UFO) es una ontología fundacional
desarrollada por Guizzardi y colaboradores (Guizzardi 2005; Guizzardi
et al. 2018) para fundamentar el modelado conceptual en
distinciones ontológicas precisas: identidad, rigidez, *sortality*,
dependencia existencial. UFO-A, el módulo de endurantes,
introduce el sistema de estereotipos que ontodls adopta sin
modificaciones: `kind`, `subkind`, `role`, `relator`, `category`,
`mixin`, `mode`, `quality`, etc. OntoUML (Guizzardi & Wagner 2010)
es el lenguaje gráfico que opera sobre estas distinciones y ha
sido aplicado extensivamente en modelado de dominio.

**Lo que ontodls toma:** la totalidad del sistema de estereotipos
UFO-A más el subconjunto de UFO-B (perdurantes: `happening`,
`useCase`) y UFO-C (agenciales: `agent`, `commitment`). Las reglas
de especialización que ontodls implementa (S21, S22) son una
restricción sintáctica directa de las relaciones de
*ontological metaproperties* documentadas en OntoUML.

**Lo que ontodls añade:** OntoUML no contempla verificación formal
de invariantes ni de contratos comportamentales sobre los modelos
conceptuales. Las herramientas asociadas (Menthor Editor, OLED)
proveen validación sintáctica de las reglas ontológicas pero no
ejecutan SAT-checking sobre invariantes OCL. ontodls extiende
OntoUML con (a) un fragmento decidible de OCL (Φ_dec, §3.1.2),
(b) DbC pre/post sobre eventos, y (c) las cuatro obligaciones
de refinamiento (§3.2) que no tienen análogo en OntoUML.

### 2.2.2 Servient (OntoUML + OWL)

Servient (Guerson et al. 2015) traduce modelos OntoUML a OWL-DL
para razonamiento descriptivo. Es la herramienta más cercana a
una verificación formal sobre OntoUML, pero opera en una lógica
distinta (Description Logic) y sobre afirmaciones de existencia /
clasificación, no sobre invariantes OCL ni sobre contratos pre/post
de eventos.

**Diferencia clave:** ontodls usa Z3 para razonamiento aritmético
y de orden (Φ_dec incluye álgebra de Allen sobre intervalos);
Servient usa razonamiento DL para razonamiento clasificatorio.
Son herramientas complementarias dirigidas a clases de
obligaciones distintas. ontodls no compite con Servient en
clasificación; Servient no compite con ontodls en verificación
de contratos.

---

## 2.3 Ingeniería de requisitos orientada a objetivos

### 2.3.1 KAOS

KAOS (van Lamsweerde 2009) es el método canónico de
goal-oriented requirements engineering (GORE). Refina goals de
alto nivel hacia operationalizations atribuibles a agentes, vía
descomposiciones AND/OR y atribución de *responsibilities*. La
salida típica de KAOS es un goal-tree con leaf-goals que pueden
mapearse a obligaciones operacionales.

**Lo que ontodls toma:** el patrón conceptual de "stakeholder
commitments" en la etapa Discovery es una herencia directa de
KAOS, adaptado al meta-modelo UFO-C (donde *commitment* es un
relator social entre agentes, no un nodo de goal-tree).

**Lo que ontodls añade:** KAOS no proporciona un mecanismo formal
para *verificar* que los operationalizations efectivamente
descargan los goals de los que se derivan. La validación en KAOS
es típicamente manual o vía obstáculos (análisis de assumptions
que pueden fallar). Obligación O1 de ontodls (§3.2.1) formaliza
esto como prueba SAT en Φ_dec: `event.pre ∧ event.post ⊨
commitment.predicate`. La conexión goal → operationalization
deja de ser una atribución textual y se convierte en una
implicación lógica verificable.

### 2.3.2 i\* / iStar

i\* (Yu 1995) provee un meta-modelo alternativo de actores,
objetivos y dependencias inter-actor. Su énfasis es en
trade-offs estratégicos y razonamiento sobre "satisficing" de
soft-goals. ontodls no aborda soft-goals como tales (los modela
como `quality` properties con tolerancias documentales).

**Posicionamiento:** ontodls y i\* operan en regímenes
complementarios. i\* es expresivo para análisis socio-técnico
pre-Discovery; ontodls toma el output de tal análisis (qué
goals tiene cada stakeholder) y lo formaliza para verificación
posterior. La interoperabilidad ontodls ← i\* no es explícita en
la presente tesis y queda como trabajo futuro.

### 2.3.3 EARS (Easy Approach to Requirements Syntax)

EARS (Mavin et al. 2009) es una sintaxis controlada para
expresar requisitos funcionales en cinco plantillas (ubiquitous,
event-driven, state-driven, optional-feature, unwanted-behavior).
Su atractivo es la trazabilidad textual a contratos operacionales.

**Lo que ontodls toma:** los comentarios `// FR-N WHEN... THEN...`
que aparecen en los `.onto` de la etapa Requirements son una
realización textual de templates EARS. Sirven como documentación
pero no son parseados por el verificador.

**Lo que ontodls añade:** EARS es una *forma textual* sin
formalismo verificable subyacente. ontodls toma cada FR en
forma EARS y lo formaliza como `event` con pre/post/modifies en
OCL, donde el contenido EARS sirve de glosa explicativa y la
formalización OCL es la unidad verificable.

---

## 2.4 Verificación formal de OCL

### 2.4.1 USE y Dresden OCL

USE (UML-based Specification Environment, Gogolla et al. 2007) y
Dresden OCL (Hußmann et al. 2002) son las herramientas pioneras
en evaluación de invariantes OCL sobre instancias UML. Soportan
ejecución de OCL sobre snapshots y validación de constraints
*observacional*: dado un snapshot, ¿se cumple este OCL?

**Diferencia con ontodls:** USE/Dresden OCL operan *runtime
checking* sobre instances. ontodls opera *static checking* sobre
specifications: prueba que para *cualquier* instancia que
satisface el antecedente, el consecuente es verdad. Son
disciplinas complementarias (runtime vs static); ontodls no
sustituye USE como herramienta de testing sobre instances.

### 2.4.2 OCL → SMT translators

Una línea activa de trabajo traduce OCL a fórmulas SMT para
verificación estática. Trabajo representativo:

- **OCL2SMT** (Soeken et al. 2011) — traduce un subconjunto de
  OCL a fórmulas para razonadores SMT (Z3, Yices). Foco:
  encontrar inconsistencias entre invariantes de una clase y
  pre/post de sus operaciones.
- **EMF + Use Validator** (Cabot et al. 2014) — verificación de
  *finite satisfiability* de metamodelos EMF con constraints OCL.
- **OCL2Boogie** (Krieger et al. 2010) — traduce a Boogie como
  intermediario hacia Z3.

**Lo que ontodls toma:** la idea fundamental — encoding de OCL en
QF_LRA + sets + Boolean — es la misma. La función de traducción
$\tau$ de §3.3 sigue el patrón establecido por OCL2SMT en sus
decisiones de sort (uninterpreted refs, lazy property functions,
@pre como función paralela).

**Lo que ontodls añade:** las traducciones previas son **intra-
clase** o **intra-modelo**. Una invariante de la clase $C_1$ se
verifica contra los métodos de $C_1$; una pre-condición se verifica
contra invariantes de su clase. ontodls extiende esto a **inter-
sortal e inter-etapa**: la pre/post de un evento sobre kind $T$
se verifica contra el predicado de un commitment $C$ que vive en
una etapa upstream completamente distinta (Q1, §3.2.1). La
unificación por nombre de propiedad que permite esto (§3.3.2) no
tiene análogo directo en OCL2SMT.

Adicionalmente, los traductores OCL→SMT previos operan sobre OCL
estándar; el fragmento Φ_dec de ontodls incluye álgebra de Allen
sobre `happening` (§3.3.3), no presente en OCL estándar ni en sus
traducciones SMT documentadas.

---

## 2.5 Design by Contract y subtipado de Liskov

### 2.5.1 Eiffel, JML, Spec\#

El paradigma *Design by Contract* (Meyer 1988, 1992) instituye
pre/post/invariants como elementos de primera clase del lenguaje.
Eiffel lo implementa como check runtime; JML (Java Modeling
Language, Leavens et al. 2008) lo añade a Java como specs
ejecutables verificables estáticamente vía ESC/Java2 o KeY;
Spec\# (Barnett et al. 2004) hace lo propio para C\#.

**Lo que ontodls toma:** la sintaxis y semántica de `pre:`,
`post:`, `modifies:` sobre eventos es una transposición directa
del DbC clásico. La regla "modifies exhaustivo" (todo lo no
listado en modifies debe permanecer invariante) es la convención
estándar de JML y Spec\#.

**Lo que ontodls añade:** DbC clásico opera dentro de *un solo
lenguaje de programación*. Las clases con contratos viven en el
mismo nivel de abstracción (típicamente, código implementacional).
ontodls aplica DbC a **eventos sobre estereotipos UFO en
múltiples etapas del SDLC**: un `event deliverInsulin` en
Requirements no es código implementacional, es una especificación
de comportamiento esperado, y su contrato es la unidad sobre la
que se verifican las obligaciones inter-etapa. DbC se convierte en
el *vocabulario común* a través del ciclo, no solo en el
mecanismo de testing del código implementacional.

### 2.5.2 Liskov-Wing behavioral subtyping

Liskov y Wing (1994) formalizan el principio de sustitubilidad:
una subclase $S$ es subtipo comportamental de $T$ si y sólo si
las pre-condiciones de los métodos en $S$ son débiles-o-iguales,
las post-condiciones son fuertes-o-iguales, y las invariantes
del subtipo implican las del supertipo. Esta caracterización es
exactamente la obligación O2 de §3.2.2.

**Lo que ontodls toma:** la formulación Liskov-Wing en su
totalidad como definición de la obligación O2.

**Lo que ontodls añade:** dos extensiones operacionales. Primera,
la verificación Liskov en ontodls es **multi-archivo via merge**
(§3.1.3): la subclase y la superclase pueden vivir en archivos
distintos correspondientes a etapas distintas del ciclo, y la
verificación opera sobre el AST mergeado. Segunda, el sistema
de diagnósticos S29/S30 distingue violación pre-strengthening de
post-weakening con witnesses concretos (Lema 3.4), no solamente
"falla LSP".

---

## 2.6 Refinamiento formal multi-etapa

### 2.6.1 Z, B, Event-B

Los métodos formales clásicos para refinamiento multi-etapa
incluyen Z (Spivey 1989), B (Abrial 1996) y su sucesor Event-B
(Abrial 2010). Todos proveen una noción de *machine refinement*:
una máquina abstracta $M_A$ se refina por una máquina concreta
$M_C$ si y sólo si los eventos de $M_C$ implementan los eventos
de $M_A$ preservando una *gluing invariant* explícita. Las
herramientas asociadas (Rodin Platform para Event-B, AtelierB)
descargan obligaciones de prueba a provers como Atelier B,
SMT-LIB solvers, o Isabelle/HOL.

**Lo que ontodls toma:** la noción central — refinamiento como
preservación de propiedades vía obligaciones de prueba — es
heredada directamente. Las cuatro obligaciones de §3.2 son
análogas a las obligaciones que Event-B genera al refinar una
máquina (concrete event ↔ abstract event, INV preservation,
guard strengthening, simulation).

**Lo que ontodls añade:** Event-B opera sobre un único formalismo
(set theory + first-order logic) y un único tipo de artefacto
(máquina). ontodls opera sobre **estereotipos UFO heterogéneos**
distribuidos en cinco etapas del SDLC: commitments en Discovery,
events en Requirements/Formalization, components en Design. Cada
obligación de refinamiento es específica al tipo de artefacto:
O1 sobre commitment-vs-event, O2 sobre kind-vs-subkind cross-stage,
O4 sobre kind-vs-decomposition. Esta heterogeneidad sortal es
exactamente lo que UFO-A provee — y lo que ontodls explota para
estructurar el refinamiento en términos ontológicos en vez de
puramente operacionales.

Segundo, Event-B no aborda la integración con autoring asistido por
LLMs: el flujo de trabajo asume autoring manual experto. ontodls
diseña el sistema de diagnósticos como interfaz para autoring
LLM (§3.5, §4.4), patrón que carece de análogo directo en la
literatura de refinamiento clásico.

### 2.6.2 Cálculo de refinamiento (Back, Morgan)

El cálculo de refinamiento de Back (1988) y Morgan (1990) provee
fundamentación matemática para transformar especificaciones
abstractas en código vía pasos de refinamiento individualmente
correctos. Es el sustrato teórico de Z, B y Event-B.

**Posicionamiento:** ontodls no extiende el cálculo de
refinamiento per se. Las cuatro obligaciones O1–O4 son
*instanciaciones* de las leyes generales del cálculo (data
refinement, operation refinement) aplicadas al meta-modelo UFO.
La novedad está en la elección del meta-modelo, no en la teoría
de refinamiento. Esta es una observación honesta: ontodls hereda
el rigor del cálculo de refinamiento sin reclamar contribución
en ese frente.

---

## 2.7 Modelado asistido por LLMs

Esta es la línea de trabajo más reciente y por tanto la menos
consolidada. La caracterización aquí es necesariamente
provisional; el campo está cambiando con velocidad.

### 2.7.1 Generación de specs formales por LLM

Trabajos representativos (no exhaustivos):

- **GPT-4 + Dafny / F\*** (Krishnamurthy et al. 2024) — LLM
  genera contratos Dafny para snippets dados; el verificador
  Dafny rechaza si la prueba falla.
- **CoSMIc / Cosmos** (Microsoft 2024) — pipeline para generar
  especificaciones TLA+ desde descripciones en lenguaje natural,
  con feedback del modelo TLC.
- **Spec-driven LLM authoring** (varios artículos, 2023–2025) —
  patrón general: LLM emite spec, verificador independiente
  acepta/rechaza, loop hasta convergencia.

**Lo que ontodls toma:** el patrón verifier-in-the-loop es ahora
una práctica establecida. La iteración hasta convergencia con
diagnósticos como feedback (§4.2, §4.4) es una instancia
estándar de este patrón.

**Lo que ontodls añade:** dos contribuciones específicas que no
encontramos directamente en la literatura previa.

**(i)** La caracterización de los diagnósticos del verificador
como un **gradiente sobre un retículo de obligaciones** (§3.5.3,
$\mathcal{M}_\text{clean} \subset \mathcal{M}_\text{soft} \subset
\mathcal{M}_\text{any}$), donde la reparación es descenso
estructurado en lugar de regeneración ciega. La validación
empírica de este gradiente como navegable por LLMs comerciales
(§4.4) es novedosa hasta donde sabemos.

**(ii)** El hallazgo **verifier-as-capability-equalizer**
(§4.4.4): cuando un LLM se atasca semánticamente, otro LLM más
capaz puede intervenir sobre el mismo artefacto consumiendo
solamente los diagnósticos del verificador como interfaz, sin
ningún protocolo inter-modelo ni shared context. El verificador
funciona como una interfaz independiente del modelo. Este
patrón sugiere arquitecturas de autoring heterogéneas con
implicaciones de costo significativas; no hemos encontrado un
análogo explícito en la literatura.

### 2.7.2 Discretion-failure en autoring asistido por prompt

La distinción entre *recomendación de prompt* y *constructo
gramatical*, cuantificada en §4.5 (27% vs 92% de cobertura), es
una contribución empírica metodológica que no hemos visto
caracterizada en estos términos en la literatura previa de
LLM-assisted formal modeling. Trabajos anteriores típicamente
asumen que las instrucciones del system prompt son seguidas si
están suficientemente bien escritas; ontodls cuantifica que el
nivel base de cumplimiento es 27% para una clase específica de
instrucciones y caracteriza el mecanismo (gramática) que lo
eleva a 92%.

---

## 2.8 Síntesis: posicionamiento de ontodls

La tabla siguiente resume las líneas previas y la posición
relativa de ontodls.

| Línea previa | Aporta a ontodls | ontodls añade |
|---|---|---|
| UFO-A / OntoUML (§2.2) | Sistema de estereotipos y reglas de especialización | Verificación formal de invariantes y contratos sobre los estereotipos |
| KAOS (§2.3.1) | Concepto de stakeholder commitment | Discharge como prueba SAT (O1) en vez de atribución textual |
| EARS (§2.3.3) | Sintaxis controlada para FR | Formalización a OCL pre/post/modifies verificable |
| OCL → SMT (§2.4.2) | Patrón de traducción a QF_LRA + sets | Refinamiento **inter-sortal e inter-etapa** vía unificación por nombre de propiedad |
| DbC + Liskov-Wing (§2.5) | pre/post/modifies + reglas de subtipado comportamental | DbC como vocabulario común a través de las 5 etapas del SDLC |
| Event-B / refinement calculus (§2.6) | Refinamiento como obligaciones de prueba | Refinamiento estructurado por estereotipos UFO en lugar de máquinas monolíticas |
| LLM-assisted formal modeling (§2.7) | Patrón verifier-in-the-loop | Gradiente diagnóstico navegable + verifier-as-capability-equalizer |

La contribución original consolidada — **la integración de las seis
líneas en un meta-modelo coherente con cuatro proof obligations
decidibles entre etapas adyacentes del SDLC, validado
empíricamente con LLMs comerciales heterogéneos** — es lo que
posiciona a ontodls como aporte original. Ninguna línea previa
realiza esta integración en su totalidad; cada una aporta una
pieza que ontodls compone.

### 2.8.1 Lo que ontodls explícitamente NO reclama

Por honestidad académica, listamos lo que la tesis **no** afirma
ser una contribución:

- **Una nueva ontología fundacional.** UFO-A se adopta sin
  modificación; las restricciones sintácticas (S21, S22) son
  realizaciones, no extensiones.
- **Un nuevo cálculo de refinamiento.** Las obligaciones O1–O4
  son instanciaciones del cálculo clásico al meta-modelo UFO;
  el rigor fundacional viene de Back/Morgan/Abrial.
- **Una nueva técnica de SAT/SMT.** Z3 se usa como caja negra; la
  traducción $\tau$ sigue patrones bien establecidos por OCL2SMT.
- **Un nuevo LLM ni una nueva técnica de fine-tuning.** Sonnet y
  DeepSeek se evalúan como cajas negras off-the-shelf.
- **Cobertura de la totalidad del SDLC.** La etapa Code se modela
  pero su refinamiento Design → Code no se verifica
  automáticamente en esta tesis (§5 Future Work).

---

## Changelog del capítulo

- 2026-05-28 — v0.1 — primer borrador completo, 8 secciones
  cubriendo las seis familias de prior work + síntesis. Citas en
  formato `(Autor Año)` placeholder; pendiente conversión al
  sistema bibliográfico del programa. Pendiente posible expansión
  de §2.7 con más cobertura de la literatura emergente de
  modelado asistido por LLM (campo en rápida evolución).
