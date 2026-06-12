# Capítulo 1 — Introducción

> **Estado del documento:** primer borrador completo (v0.1).
> **Función estructural:** pitch + contribuciones + estructura.
> Calibrado por el vocabulario de §2 (related work), §3 (teoría),
> §4 (validación) y §5 (discusión).
> **Pendiente:** revisión estilística final, adaptación al
> formato de portada/abstract del programa de posgrado.

---

## 1.1 Motivación

El ciclo de desarrollo de software (SDLC) atraviesa típicamente
cinco etapas conceptualmente distintas: **Discovery** (qué
necesitan los stakeholders), **Requirements** (qué debe hacer el
sistema), **Formalization** (qué impone el mundo regulatorio y
físico), **Design** (cómo se descompone el sistema en
componentes), y **Code** (qué ejecuta efectivamente la máquina).
Cada transición entre etapas es un acto de **refinamiento**: la
etapa posterior debe honrar las obligaciones de la anterior.

En la práctica industrial, este refinamiento es **artefactual y
textual**, no formal. Un stakeholder concern documentado en un
PRD se rastreará a un FR en un documento de requirements vía un
identifier textual (`SH-1 → FR-3.2.1`); el FR a su vez se
rastreará a un componente de diseño via un *trace matrix*; el
componente a una función vía comentarios o documentación. Las
herramientas de gestión de requisitos (DOORS, Jama, Polarion)
sirven precisamente para mantener estas trazas textuales.

El problema con este estado del arte es estructural:

- Las trazas son **bidireccionales y opcionales**: un autor puede
  omitir una traza sin que el sistema lo detecte. Cuando se
  omite, el refinamiento queda implícito y verificable solamente
  por revisión humana.
- Las obligaciones son **informales**: "el FR-3 honra SH-1" es
  una afirmación que no se puede probar mecánicamente. El
  verificador que existe (revisor humano, comité de arquitectura)
  no escala más allá de un puñado de obligaciones por revisión.
- Las regulaciones (IEC 62304, DO-178C, ISO 14971) **exigen
  trazabilidad demostrada**, pero el demostrar se reduce a
  presentar la matriz, no a probar la implicación lógica.

El resultado: proyectos industriales mantienen miles de trazas
textuales que pueden estar — y frecuentemente están — fuera de
sincronía con los artefactos que enlazan. El costo de descubrir
estas inconsistencias es alto y típicamente se paga durante
auditoría regulatoria o post-mortem de incidentes.

## 1.2 Problema específico

La literatura de métodos formales ha tratado componentes
individuales del SDLC con rigor matemático desde hace décadas:
verificación de OCL sobre modelos UML (Gogolla et al. 2007,
Soeken et al. 2011), refinamiento de máquinas abstractas en B y
Event-B (Abrial 1996, 2010), Design-by-Contract sobre código
(Meyer 1988, Leavens et al. 2008), y subtipado comportamental
de Liskov-Wing (Liskov & Wing 1994). Cada una de estas líneas
provee herramienta y rigor para **una etapa específica del
ciclo**.

Lo que queda persistentemente fuera del alcance es la
**verificación formal de las relaciones de refinamiento entre
etapas heterogéneas**. La razón es estructural: cada herramienta
opera sobre su propio formalismo (UML+OCL, máquinas Event-B,
clases JML), y las trazas inter-formalismo son inherentemente
informales. No hay un meta-modelo unificado donde un *stakeholder
commitment* (concept ontológico de etapa Discovery) y un *event
post-condition* (concept DbC de etapa Requirements) puedan vivir
en el mismo formalismo y conectarse vía una obligación
mecánicamente verificable.

Esta tesis aborda exactamente esa brecha. Específicamente:

> **¿Es posible diseñar un meta-modelo unificado para artefactos
> del SDLC en el que (a) cada etapa tenga representación
> sintáctica precisa, (b) las relaciones de refinamiento entre
> etapas adyacentes sean obligaciones de prueba decidibles, y
> (c) el sistema sea operacionalmente viable cuando los autores
> son modelos de lenguaje grandes (LLMs) en lugar de expertos
> humanos?**

Las tres condiciones (a), (b), (c) son simultáneamente
restrictivas. (a) descarta los formalismos en silos; (b)
descarta los sistemas de trazabilidad puramente textual; (c)
descarta los sistemas con curva de aprendizaje prohibitiva para
autoring práctico. La intersección no estaba poblada en la
literatura previa al inicio de esta tesis.

## 1.3 Aproximación

La tesis propone **ontodls**: un DSL y verificador para
artefactos del SDLC construidos como archivos `.onto` que
combinan tres ingredientes en un formalismo único:

- **Estereotipos UFO-A** (Guizzardi 2005) — categorías
  ontológicas (kind, subkind, role, relator, category, mode,
  quality, happening, agent, commitment, use-case, ...) que
  caracterizan los artefactos de cada etapa con rigor
  ontológico.
- **Un fragmento decidible de OCL** (Object Constraint Language) —
  expresable en QF_LRA + Boolean + álgebra de Allen sobre
  intervalos. Sobre este fragmento, el verificador puede probar
  o refutar implicaciones lógicas via Z3.
- **Design-by-Contract** — eventos con `pre`, `post`, `modifies`
  como unidad de especificación comportamental.

Sobre este formalismo, ontodls define **cuatro obligaciones de
refinamiento entre etapas adyacentes** como proof obligations
mecánicamente verificables (caracterizadas formalmente en
§3.2):

1. **O1 — Commitment discharge.** Un evento en etapa N+1 que
   refina un commitment de etapa N debe satisfacer:
   $\text{Inv}(T) \wedge \text{Pre}(E) \wedge \text{Post}(E)
   \models P(C)$.
2. **O2 — Liskov cross-file.** Un override de un evento padre
   debe debilitar precondiciones y fortalecer postcondiciones,
   verificado a través de archivos vía el AST mergeado.
3. **O3 — Category membership.** Un kind miembro de una category
   debe satisfacer las invariantes de la category.
4. **O4 — Property correspondence + modifies closure.** La
   decomposición de un kind padre en componentes debe cubrir
   toda propiedad y todo modifies declarado por el padre.

Las cuatro están **activamente verificadas** vía consultas SAT
sobre Z3 (Lema 3.1 garantiza no-false-positives en el subconjunto
decidible Φ_dec). La cuarta (O3) estuvo dormant en versiones
anteriores del DSL por una limitación expresiva; la extensión
gramatical *member-quantified categories* introducida en v0.6
la activa (§3.2.3, §4.3.4).

ontodls añade además dos elementos que distinguen la propuesta
de las herramientas previas:

- **Una cláusula gramatical `refines:`** que fuerza la
  declaración explícita y verificable de las aristas de
  refinamiento, en lugar de depender de anotaciones por
  comentarios o trazas textuales.
- **Un sistema diagnóstico estructurado** que codifica cada
  obligación violada en un código específico (S34, W34, W37,
  W38, W39, …) con mensajería accionable, navegable por LLMs
  como gradiente de reparación.

## 1.4 Contribuciones

Las contribuciones originales de la tesis son tres, ordenadas
por dependencia estructural:

**C1 — Una arquitectura de meta-modelo unificado para las cinco
etapas del SDLC**, basada en UFO-A + un fragmento decidible de
OCL + DbC. La elección no es novedosa por componentes (cada uno
existe en literatura previa, §2) sino por la **integración** en
sintaxis y semántica únicas que admiten verificación inter-etapa.

**C2 — Cuatro obligaciones de refinamiento formalmente
caracterizadas y mecánicamente verificables.** Las obligaciones
O1–O4 (§3.2) son la unidad central de novedad teórica: instancian
el cálculo de refinamiento clásico sobre el meta-modelo UFO,
producen consultas SAT específicas sobre Φ_dec, y emiten
diagnósticos estructurados sobre el retículo de validez
$\mathcal{M}_\text{clean} \subset \mathcal{M}_\text{soft} \subset
\mathcal{M}_\text{any}$ (§3.5.3).

**C3 — La cláusula `refines:` y el sistema diagnóstico como
interfaz operacional para autoring asistido por LLMs.** La
cláusula gramatical sustituye anotaciones textuales por
constructos verificables (§3.4); los diagnósticos funcionan como
función guía sobre el retículo de validez, empíricamente
navegable por LLMs comerciales (§4.4); y el verificador opera
como **interfaz neutral entre modelos LLM heterogéneos**,
permitiendo arquitecturas de autoring donde modelos de capacidad
distinta colaboran sin protocolo inter-modelo explícito (§4.4.4,
§5.2.4).

## 1.5 Hipótesis y preguntas de investigación

La afirmación central de la tesis se descompone en cuatro
preguntas falsables que el capítulo 4 valida empíricamente:

**RQ1 (Convergencia).** ¿Permite el playbook + scaffolding
(8 reglas duras, dos niveles de validación, smart hints)
generar artefactos `.onto` verificados intra-etapa de manera
convergente, en múltiples dominios y con múltiples LLMs?

**RQ2 (Soundness del verificador).** Dado un `.onto` que ha pasado
verificación intra-etapa, ¿el verificador inter-etapa detecta
violaciones de refinamiento cuando se introducen deliberadamente
(negative test adversarial)?

**RQ3 (Loop cerrado de autoría).** ¿La salida diagnóstica del
verificador es estructuralmente suficiente para que un LLM la
consuma como prompt de reparación y produzca un `.onto`
corregido?

**RQ4 (Estructura vs prosa).** ¿La cláusula `refines:` de primera
clase produce una tasa de coverage de commitments estrictamente
mayor que el patrón previo de anotaciones por comentarios?

Cada RQ tiene una hipótesis específica (H1, H2, H3, H4 en §4) con
criterio de aceptación predefinido y experimento con métrica
numérica. El resultado consolidado se reporta como cinco hallazgos
F1–F5 en §4.6 y se discute en §5.2.

## 1.6 Anticipación de resultados principales

Sin pretender sustituir la validación detallada de §4, los
hallazgos centrales se anticipan aquí para orientar al lector:

- **F1.** Convergencia 6/6 sobre la matriz (3 dominios × 2 LLMs).
  DeepSeek converge con ~37% más intentos que Sonnet pero con
  costo absoluto menor por factor de 14×.
- **F2.** Cuatro mutaciones quirúrgicas de cuatro detectadas (S34,
  S35, W38, W39 disparan correctamente). O3 estuvo inicialmente
  dormant en v0.5 por una limitación expresiva; la extensión
  gramatical *member-quantified categories* introducida en v0.6
  la activa, completando la validación adversarial 4/4 y
  exponiendo un bug de soundness latente en el LHS de Q3 que
  fue corregido en el mismo trabajo.
- **F3.** Closed-loop de reparación cierra el ciclo: DeepSeek
  con 11 findings de Bloque 2 los repara TODOS en una ronda
  (100% reducción).
- **F4 (emergente).** Cuando DeepSeek se atasca sobre un S34
  hard (no puede repararlo en 3 rondas), Sonnet opera sobre el
  mismo artefacto vía el verificador y converge en 2 rondas.
  El verificador funciona como interfaz neutral entre los dos
  modelos. Esto sugiere arquitecturas de autoring heterogéneas.
- **F5.** La cláusula gramatical `refines:` eleva la cobertura
  de commitments de **27% a 92%** comparada con anotaciones por
  comentarios. La diferencia cuantifica el costo de
  *discretion-failure* en autoring por prompt.

## 1.7 Lo que esta tesis explícitamente NO afirma

Por claridad académica, anticipamos los reclamos que la tesis
**no** sostiene:

- **No es una nueva ontología fundacional.** UFO-A se adopta sin
  modificación.
- **No es un nuevo cálculo de refinamiento.** Las obligaciones
  O1–O4 son instanciaciones del cálculo clásico aplicado al
  meta-modelo UFO.
- **No es una nueva técnica SMT.** Z3 se usa como caja negra.
- **No es un nuevo LLM ni técnica de fine-tuning.** Sonnet y
  DeepSeek se evalúan como cajas negras off-the-shelf.
- **No verifica la totalidad del SDLC automáticamente** *(actualizado en Phase 16, v0.10).* La verificación Design → Code SÍ se cubre via subsumción de O2+O4 — el experimento de §5.5.2 demuestra que las cuatro obligaciones formalizadas son suficientes para verificar la cadena de 5 stages end-to-end sin requerir una quinta obligación distinta. Lo que SÍ queda fuera de alcance: mass-generation de Code stages para los 8 dominios validados, e integración del codegen runtime con la cadena verificada.

La novedad consolidada está en la **integración** y en la
**caracterización formal de las relaciones inter-etapa**, no en
ninguno de los componentes individuales.

## 1.8 Estructura del documento

El resto de la tesis se estructura en cuatro capítulos
adicionales:

- **Capítulo 2 — Trabajo Relacionado.** Posiciona ontodls
  contra seis líneas previas: UFO-A / OntoUML (§2.2), GORE-KAOS
  (§2.3), verificación OCL→SMT (§2.4), DbC + Liskov-Wing (§2.5),
  refinamiento formal Z/B/Event-B (§2.6), y autoring asistido
  por LLM (§2.7). Cierra con una tabla síntesis (§2.8) que
  identifica qué ontodls toma de cada línea y qué añade.

- **Capítulo 3 — Teoría del Verificador Inter-Etapa.** Formaliza
  el artefacto canónico `.onto` (§3.1), las cuatro obligaciones
  como proof obligations (§3.2), el encoding Z3 con argumento de
  soundness (§3.3, Lemas 3.1–3.4), la cláusula `refines:`
  (§3.4) y el sistema diagnóstico como gradiente sobre el
  retículo de modelos válidos (§3.5).

- **Capítulo 4 — Validación Empírica.** Responde RQ1–RQ4 con
  experimentos reproducibles sobre tres dominios y dos LLMs
  comerciales. Cubre convergencia (§4.2), negative test
  adversarial (§4.3), closed-loop de autoring (§4.4), y la
  comparativa estructural vs prosa (§4.5). Síntesis de hallazgos
  F1–F5 en §4.6 y amenazas a la validez en §4.7.

- **Capítulo 5 — Discusión y Conclusiones.** Sintetiza
  contribuciones C1–C3, discute cada hallazgo F1–F5 en sus
  implicaciones más amplias, identifica cuatro limitaciones
  consolidadas (L1–L4) y mapea seis líneas de trabajo futuro
  (§5.5). Cierra con la afirmación consolidada de la tesis
  (§5.6).

Los apéndices contienen comandos de reproducibilidad (4.A), la
correspondencia entre secciones del capítulo 4 y las fases del
log empírico (4.B), y el material suplementario referenciado
(diagramas, datos crudos).

---

## Changelog del capítulo

- 2026-05-28 — v0.1 — primer borrador completo: motivación,
  problema, aproximación, contribuciones C1–C3, RQs y hallazgos
  anticipados, no-claims explícitos, y read-map del documento.
  Calibrado por el vocabulario consolidado en §2–5.
