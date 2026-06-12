# Capítulo 3 — Teoría del Verificador Inter-Etapa

> **Estado del documento:** primer borrador completo (v0.1).
> **Relación con otros capítulos:** §3 formaliza las cuatro
> obligaciones que §4 valida empíricamente. Las definiciones de §3
> son las definiciones implícitamente asumidas por §4.
> **Pendiente del autor:** verificar coherencia de notación con
> capítulos de teoría preexistentes (si los hay), decidir si los
> *proof sketches* de §3.3 se mueven a apéndice, y revisar las
> referencias a UFO-A / OCL / Z3 con el sistema de citas del programa.

---

## 3.1 El artefacto `.onto` como representación canónica

El verificador inter-etapa opera sobre `.onto` files: archivos en un
DSL que combina la ontología fundacional UFO-A con un fragmento
decidible de OCL, embebido en un meta-modelo de Design-by-Contract
(DbC). Esta sección caracteriza los tres ingredientes que el
verificador asume: el universo de estereotipos UFO-A admisibles
(§3.1.1), la subgramática OCL soportada (§3.1.2), y la semántica de
*merge* multi-archivo (§3.1.3).

### 3.1.1 Estereotipos UFO-A soportados

El DSL admite el conjunto de estereotipos UFO-A documentado por
Guizzardi y colaboradores, particionado en tres familias por
rigidez y *sortality*:

**Estereotipos rígidos (sortal).** Una entidad permanece
clasificada bajo un estereotipo rígido durante toda su existencia.
Estos definen la identidad de la entidad y son por tanto
candidatos a *bearers* de invariantes que constriñen su estado
ontológico.

- `kind` — sortal rígido fundacional. Provee criterio de identidad.
- `subkind` — sortal rígido que especializa a un `kind` o `subkind`
  (la transitividad cierra bajo `specializes`).
- `collective`, `quantity` — sortales rígidos para colectivos
  y materiales/sustancias respectivamente.

**Estereotipos anti-rígidos (sortal).** Una entidad puede entrar y
salir de un estereotipo anti-rígido a lo largo de su existencia
sin cambiar de identidad. Se *mediated-by* o se *playing-role* a
través de un relator.

- `role` — sortal anti-rígido que captura un papel jugado por una
  entidad rígida en el contexto de un relator.
- `relator` — sortal anti-rígido que conecta endpoints `role` y
  porta hechos contingentes a esa conexión.
- `phase` (agrupada en `phaseGroup`) — sortal anti-rígido
  representando una fase temporal exclusiva.

**Estereotipos no-sortales.** Agrupan entidades a través de
fronteras sortales sin proveer identidad propia.

- `category` — colección rígida no-sortal. Sus invariantes deben
  cumplir todos sus miembros (esta es la base de la obligación O3,
  §3.2.3).
- `mixin`, `roleMixin` — colecciones semi-rígidas no-sortales.
- `mode`, `quality` — propiedades inherentes (intrinsic moments)
  de un *bearer*.

**Estereotipos perdurantes y agenciales.**

- `happening` — perdurante (evento extendido en el tiempo) con
  intervalo `(start, end)` y operadores de álgebra de intervalos
  de Allen.
- `agent` — clase de entidades que pueden ostentar `commitment`s.
- `commitment` — relator social entre un *debitor agente* y un
  *creditor agente*, portador del predicado `P(C)` (§3.2.1).
- `useCase` — *happening* especializado con estructura adicional
  (actores, trigger, success, failure).

El DSL es **estrictamente más restrictivo** que UFO-A en un punto: la
gramática prohíbe especializaciones que cruzan la jerarquía de
rigidez (regla S21 del validador semántico). Por ejemplo, un
`subkind` no puede especializar un `category` porque eso convertiría
un sortal en miembro de una colección no-sortal. Esta restricción
sintáctica simplifica el verificador a costo de una limitación
expresiva discutida en §3.2.3.

### 3.1.2 El fragmento OCL decidible

Cada cláusula OCL en un `.onto` (invariante, precondición,
postcondición, predicado de commitment) es una expresión Boolean. El
verificador trabaja con un fragmento estrictamente decidible que
cubre la mayoría de cláusulas observadas empíricamente (§4) pero
excluye construcciones que requerirían teorías SMT más allá de
QF_LRA + sets + difference logic.

**Operadores admitidos en el fragmento decidible:**

- Aritmética lineal sobre `Real`/`Int`: `+`, `-`, `*` (constante),
  `/` (constante), comparaciones `<`, `≤`, `>`, `≥`, `=`, `≠`.
- Lógica Boolean: `and`, `or`, `not`, `implies`, condicional
  `if/then/else/endif`.
- Navegación de profundidad uno: `self.x`, `self.x@pre` (donde
  `@pre` denota el valor en el estado pre-condición de un evento).
- Operadores de conjunto: `→size()`, `→isEmpty()`, `→notEmpty()`,
  `→includes(e)`, `→forAll(v | …)`, `→exists(v | …)`,
  `→select`, `→reject`, `→collect`.
- Álgebra de intervalos de Allen sobre `happening` (13 relaciones:
  `before`, `meets`, `overlaps`, `starts`, `during`, `finishes`,
  `equals` y sus inversas).

**Operadores no admitidos (clauses se marcan como *skipped* y
generan diagnósticos `W##_partial`):**

- Operaciones de `String` más allá de igualdad/desigualdad (los
  `String` se modelan como un sort uninterpreted con sólo `=`).
- Navegación de profundidad ≥ 2 cuando atraviesa un sort `Ref`
  (e.g. `self.battery.charge`).
- Cuantificadores que requieren teoría de cardinalidad sobre
  conjuntos.
- Llamadas a queries (`self.q()`); requirirían funciones
  uninterpreted con axiomas de frame.

Sea Φ el universo de todas las cláusulas OCL sintácticamente
válidas, y sea Φ_dec ⊂ Φ el subconjunto decidible recién
caracterizado. La función de traducción τ (§3.3) está definida
sobre Φ_dec y devuelve fórmulas en QF_LRA + sets + difference
logic.

### 3.1.3 Semántica de *merge* multi-archivo

El sistema soporta partición de un modelo en múltiples archivos
`.onto` enlazados por declaraciones `import "./other.onto";`. El
*resolver* multi-archivo (`parseFile()` en
`src/parser/multiFile.ts`) implementa una semántica de *merge*
plano:

**Definición 3.1 (Merge multi-archivo).** Dado un archivo raíz
`R` y la clausura transitiva de sus imports `I(R) = {F_1, …, F_n}`,
el AST mergeado es la 4-tupla:

$$
\widehat{R} \;=\; \langle \text{schema}(R), \text{namespace}(R), \text{imports}(R), \text{declarations}(R) \cup \bigcup_{F \in I(R)} \text{declarations}(F) \rangle
$$

con la restricción de **unicidad de nombre** sobre el conjunto de
declaraciones: si dos archivos del cierre transitivo declaran el
mismo nombre, el merge emite un diagnóstico E2 y la declaración
duplicada se elimina del AST.

Una consecuencia importante de la Definición 3.1: el AST mergeado
**pierde la provenance por archivo de cada declaración** (sólo se
preserva el `SourceLocation` línea/columna, que apunta al archivo
de origen, pero esa información no se propaga a través del AST de
forma estructural). Esta limitación es la fuente de la imprecisión
discutida en §3.5 sobre la resolución de W35.

Las cuatro obligaciones de §3.2 se definen sobre el AST mergeado
$\widehat{R}$ — no sobre archivos individuales. Esto es lo que hace
al verificador genuinamente **inter-etapa**: una `commitment` declarada
en `discovery.onto` y un `event` declarado en `requirements.onto`
viven en el mismo $\widehat{R}$ y son referenciables por la
obligación O1.

---

## 3.2 Las cuatro obligaciones de refinamiento

Esta sección formaliza las cuatro obligaciones que el verificador
inter-etapa debe probar. Cada obligación se presenta en cuatro
partes:

1. **Motivación informal** — el patrón de modelado que la obligación
   captura.
2. **Statement formal** — una sentencia de implicación lógica sobre
   constructos del AST mergeado.
3. **Implementación** — la consulta SAT específica que el verificador
   ejecuta.
4. **Diagnóstico** — los códigos de error/warning que la consulta
   produce.

Notación común: dado un evento `E` sobre un kind `T` con
parámetros $\vec{p}$, escribimos $\text{Pre}(E)$ y $\text{Post}(E)$
para la conjunción de sus pre/post clauses respectivamente, e
$\text{Inv}(T)$ para la conjunción de invariantes efectivas de $T$
(es decir, sus propias invariantes unidas con las de todos sus
ancestros vía especialización; ver §3.3.2).

### 3.2.1 O1 — Discharge de commitments

**Motivación.** Un `commitment` $C$ declarado en una etapa upstream
(típicamente Discovery) representa una promesa que el sistema debe
honrar: su predicado $P(C)$ debe ser verdadero como consecuencia de
algún comportamiento concreto del sistema. La obligación O1
formaliza qué significa que un evento `E` *descargue* el
commitment.

**Statement formal.** Sea $E$ un evento sobre un kind $T$ y sea $C$
una `commitment` referenciada por $E$ vía una arista de refinamiento
(cláusula `refines:`, §3.4). Entonces $E$ descarga $C$ si y sólo si:

$$
\text{Inv}(T) \;\wedge\; \text{Pre}(E) \;\wedge\; \text{Post}(E) \;\models\; P(C) \tag{O1}
$$

donde $\models$ denota implicación semántica sobre el fragmento
decidible Φ_dec (§3.1.2), y $P(C)$ se traduce usando el mismo
*selfTypeName* que las cláusulas de $E$ (a saber, $T$). Esta
elección — la **unificación por nombre de propiedad** — es la
decisión de encoding crítica que permite que $\text{Post}(E)$
hable del mismo estado que $P(C)$ aun cuando $E$ y $C$ son sortales
distintos. La justificación es que el patrón de modelado del
*playbook* requiere que las propiedades del commitment compartan
nombre con las del kind que las habrá de discharge.

**Implementación.** La consulta SAT directa es:

$$
\text{SAT}\bigl(\, \text{Inv}(T) \wedge \text{Pre}(E) \wedge \text{Post}(E) \wedge \neg P(C) \,\bigr) \tag{Q1}
$$

Si Q1 es UNSAT en Φ_dec, O1 se cumple bajo el fragmento decidible.
Si Q1 es SAT, existe un *witness* — un asignamiento de valores a
las variables del estado posterior — que satisface premisas pero
no la conclusión: una violación de discharge.

**Diagnóstico.**

| Código | Severidad | Disparador |
|---|---|---|
| `S34` | Hard | Q1 retorna SAT en Φ_dec. |
| `W34_partial` | Warning | Q1 retorna UNSAT pero ≥ 1 cláusula fuera de Φ_dec se descartó como *skipped*. |
| `W34` | Warning | Cobertura: ningún evento declara `refines: …::C`. |
| `W35` | Warning | Una `refines:` clause apunta a un nombre que no existe en $\widehat{R}$. |

**Validación empírica.** La mutación M1 de §4.3.2 ejemplifica el
comportamiento de Q1: alterar el predicado $P(C)$ a una bound que
las premisas no pueden satisfacer produce un *witness* en Φ_dec y
el código S34 se emite (§4.3.3, Tabla 4.2).

### 3.2.2 O2 — Subtipado de Liskov entre etapas

**Motivación.** Cuando un kind `T'` de una etapa downstream
especializa un kind `T` de una etapa upstream y redefine
(`override`) uno de sus eventos `E`, la sustitubilidad de Liskov
impone que el override debe **debilitar precondiciones** y
**fortalecer postcondiciones**. Esta es la formulación de
Liskov-Wing del DbC contra-variante/co-variante.

**Statement formal.** Sea $T' \prec T$ (T' especializa T) y sea
$E'$ un override de $E$. Entonces $E' \sqsubseteq_{LSP} E$ si y
sólo si las dos condiciones siguientes se cumplen:

$$
\text{Pre}(E) \;\models\; \text{Pre}(E') \tag{O2a — pre weakening}
$$

$$
\text{Post}(E') \;\models\; \text{Post}(E) \tag{O2b — post strengthening}
$$

ambas evaluadas en Φ_dec con *selfTypeName* = $T'$ (el override
gana en el nombre de tipo).

**Cross-file note.** O2 no requiere implementación específica
inter-etapa: el AST mergeado $\widehat{R}$ unifica las
declaraciones de todas las etapas en un único índice, y el
verificador intra-stage existente `verifyLSPContracts`
(`src/semantic/lspCheck.ts`) ya itera todos los `override event`
de $\widehat{R}$. El uso de `--resolve-imports` en el CLI es por
tanto suficiente para que O2 se verifique a través de
boundaries inter-etapa.

**Implementación (consultas duales).**

$$
\text{SAT}(\text{Pre}(E) \wedge \neg \text{Pre}(E')) \tag{Q2a}
$$

$$
\text{SAT}(\text{Post}(E') \wedge \neg \text{Post}(E)) \tag{Q2b}
$$

SAT en cualquiera viola O2 (en su respectiva mitad).

**Diagnóstico.**

| Código | Severidad | Disparador |
|---|---|---|
| `S29` | Hard | Q2a SAT (pre del override es más estricta que la del padre). |
| `S30` | Hard | Q2b SAT (post del override es más débil que la del padre). |
| `W29`/`W30` | Warning | Equivalente parcial. |
| `W37` | Warning | Una `refines:` apunta a `ns::T.E` pero `T` no declara evento `E`. |

### 3.2.3 O3 — Inheritance de invariantes vía membership

**Motivación.** Cuando un kind $K$ especializa una category $Q$,
intuitivamente $K$ es **miembro** de $Q$ y por tanto debe cumplir
con las invariantes que $Q$ predica sobre sus miembros. Esta es la
relación habitual de subtipado nominal en ontologías UFO.

**Statement formal.** Sea $K$ un kind que especializa una category
$Q$ (directa o transitivamente). Entonces $K$ es miembro válido de
$Q$ si y sólo si:

$$
\text{Inv}(K) \;\models\; \text{Inv}(Q) \tag{O3}
$$

donde $\text{Inv}(K)$ es la conjunción de invariantes efectivas de
$K$ y ancestros, e $\text{Inv}(Q)$ son las invariantes declaradas
directamente sobre $Q$.

**Historia de la dormancy de O3 y su activación.** Una versión
anterior del DSL (v0.5) dejaba a O3 *dormant* por una interacción
del sistema de tipos. Para que O3 tenga obligaciones *interesantes*
que probar, las invariantes de $Q$ deben referenciar propiedades
que existen en los miembros $K$. Pero la regla S27 del validador
semántico exigía que toda navegación `self.x` dentro de una
declaración referenciara una propiedad de la **misma** declaración
o de un ancestro suyo. Esta restricción es sound en general — evita
referencias colgadas — pero impedía que una category expresara
invariantes sobre el estado de sus miembros: la category misma no
tiene esas propiedades. El resultado era que las únicas invariantes
que sobrevivían a la validación intra-stage de una category eran
sobre sus propiedades *documentales* propias, las cuales no
constriñen el estado del miembro y por tanto no producen
obligaciones de implicación interesantes.

La versión v0.6 del DSL resuelve esta limitación con la extensión
gramatical *member-quantified categories*:

```onto
category PhysicallyPlausibleReadings where bearer: SensorKind {
  invariants {
    bearer.minPlausible >= 0.0;
    bearer.maxPlausible > bearer.minPlausible;
    bearer.maxPlausible <= 1000.0;
  }
}
```

El clause `where <bearerName>: <MemberType>` introduce un binding
explícito que el OCL type-checker (`oclCheck.ts`) acepta como
valor de `<MemberType>` dentro de las invariantes de la category.
El verificador Z3 (`verifyCategoryMembership`) ejecuta el binding
aliasando `bearer` al **mismo** constante Z3 que `self` del
miembro — de modo que `self.x` (en las invariantes del miembro,
LHS) y `bearer.x` (en las invariantes de la category, RHS) se
traducen al mismo término. Esto es esencial para que la consulta
Q3 sea no-trivial: sin el aliasing, las dos constantes serían
distintas y el solver podría satisfacer trivialmente la
implicación.

Adicionalmente, la implementación contiene una **corrección de
soundness** descubierta cuando los primeros fixtures activos de
O3 expusieron un comportamiento anómalo: las invariantes de la
category deben **excluirse** del LHS para evitar que la
implicación sea trivialmente cierta (si la conclusión está en las
premisas, todo SAT-check retorna UNSAT). El predicado real es:

$$
\bigl(\text{Inv}(K) \setminus \text{Inv}(Q)\bigr) \;\models\; \text{Inv}(Q)
$$

donde la diferencia es por identidad de objeto AST. Esta corrección
estaba latente en v0.5 porque ningún fixture la ejercitaba;
v0.6 la expuso y arregló (§4.3.4).

**Resultado tras la extensión:** O3 pasa de **dormant** a
**activa**. La consulta Q3 detecta violaciones reales sobre fixtures
sintéticos donde el miembro no entaila las invariantes de la
category. El negative test (§4.3) lo ejercita y O3 emite S35 como
los demás obligaciones — completando el panorama 4/4.

**Implementación (consulta).**

$$
\text{SAT}(\text{Inv}(K) \wedge \neg \text{Inv}(Q)) \tag{Q3}
$$

**Diagnóstico.**

| Código | Severidad | Disparador |
|---|---|---|
| `S35` | Hard | Q3 SAT (member no satisface invariante de categoría). |
| `W35_partial` | Warning | Q3 UNSAT con cláusulas skipped. |

### 3.2.4 O4 — Correspondencia de propiedades + cobertura de modifies

**Motivación.** Cuando un kind del sistema en Requirements se
descompone en componentes en Design, cada evento del kind padre se
implementa por uno o más eventos de componentes (típicamente
declarados via una arista `refines: ns::Parent.eventName`). Dos
condiciones de bien-formedness deben cumplirse:

1. **Cobertura de modifies:** toda propiedad que el padre declara
   modificar debe ser modificada por algún hijo. De lo contrario,
   la descomposición pierde un efecto.
2. **Correspondencia de propiedades:** toda propiedad referenciada
   en el cuerpo del padre debe existir estructuralmente en algún
   componente. De lo contrario, la descomposición tiene un
   *dangling read*.

**Statement formal.** Sea $E$ un evento sobre un kind padre $T_P$
con un conjunto de eventos hijos refinantes $\{E_1, …, E_n\}$
declarados sobre kinds $\{T_1, …, T_n\}$ (componentes). Definimos:

$$
\text{Mod}(E) \;=\; \{\, x \;|\; \text{self}.x \in \text{modifies clause de } E \,\}
$$

$$
\text{Refs}(E) \;=\; \{\, x \;|\; \text{self}.x \text{ ocurre en } \text{Pre}(E) \cup \text{Post}(E) \,\}
$$

$$
\text{Props}(T) \;=\; \{\, x \;|\; x \text{ es una propiedad declarada por } T \,\}
$$

Entonces O4 consta de dos sub-obligaciones:

$$
\text{Mod}(E) \;\subseteq\; \bigcup_{i=1}^{n} \text{Mod}(E_i) \tag{O4a — modifies closure}
$$

$$
\text{Refs}(E) \;\subseteq\; \bigcup_{i=1}^{n} \text{Props}(T_i) \tag{O4b — property correspondence}
$$

Bajo el supuesto de **same-name matching**: una propiedad
`self.x` referenciada por el padre se considera "cubierta" por un
componente que declara una propiedad de nombre `x`. La
generalización a rename tables es trabajo futuro (§3.5.4).

**Implementación.** O4 no requiere Z3: ambas son inclusiones de
conjuntos sobre nombres de identificador. La verificación es lineal
en el número total de propiedades y modifies.

**Diagnóstico.**

| Código | Severidad | Disparador |
|---|---|---|
| `W38` | Warning | O4a falla — existe $x \in \text{Mod}(E)$ con $x \notin \bigcup \text{Mod}(E_i)$. |
| `W39` | Warning | O4b falla — existe $x \in \text{Refs}(E)$ con $x \notin \bigcup \text{Props}(T_i)$. |

**Validación empírica.** Las mutaciones M3 y M4 de §4.3.2 ejercitan
las dos sub-obligaciones: eliminar una propiedad del modifies de un
hijo (M3) produce W38; añadir una referencia `self.X` en el padre
sin que ningún componente declare $X$ (M4) produce W39. Ambas
detectadas (§4.3.3, Tabla 4.2).

### 3.2.5 Tabla consolidada de obligaciones

| Obligación | Naturaleza | Implementación | Estado | Códigos |
|---|---|---|---|---|
| O1 — Commitment discharge   | Lógica (SAT en Φ_dec) | Z3 vía τ                  | Activa | S34, W34_partial, W34, W35 |
| O2 — Liskov cross-file      | Lógica (SAT en Φ_dec, dual) | Z3 intra-merged-AST | Activa | S29, S30, W29, W30, W37 |
| O3 — Category membership    | Lógica (SAT en Φ_dec) | Z3 vía τ + bearer-binding (v0.6) | Activa<sup>†</sup> | S35, W35_partial |
| O4 — Property correspondence | Estructural (set inclusion) | Comparación de identificadores | Activa | W38, W39 |

<sup>†</sup> O3 estuvo dormant en versiones anteriores del DSL
(v0.5 y previas) por la interacción S27 descrita en §3.2.3. La
extensión gramatical *member-quantified categories* introducida
en v0.6 activa la obligación. Las cuatro obligaciones son ahora
verificables; el negative test (§4.3) detecta 4/4 mutaciones.

Tres de las cuatro obligaciones producen códigos `S` (hard,
fallo de build) cuando se violan en Φ_dec. O4 es siempre `W`
(warning) porque la descomposición incompleta es un estado
intermedio aceptable durante autoría, no un error fatal de modelo.

---

## 3.3 Encoding Z3

Esta sección caracteriza la función de traducción
$\tau: \Phi_\text{dec} \to \text{QF\_LRA} + \text{sets} + \text{Allen}$
y argumenta soundness — la propiedad central que justifica que las
consultas Q1–Q3 son interpretables como pruebas de las
obligaciones O1–O3.

### 3.3.1 Sorts y dominios

El encoding usa cuatro sorts Z3:

- `Real` — traducción directa de los `Real` del DSL.
- `Int` — traducción directa de los `Integer` del DSL.
- `Bool` — traducción directa de los `Boolean` del DSL.
- `Ref(T)` — un sort uninterpreted declarado lazily la primera
  vez que se necesita representar entidades de tipo $T$.
  Modelización: un único símbolo Z3 `self` de sort `Ref(T)`
  representa "la entidad sobre la cual la cláusula habla". No
  hay teoría de identidad: dos instancias con el mismo `self`
  son la misma entidad por construcción.
- `Set(S)` — un set de elementos de sort $S$, sobre el cual
  operan los operadores de colección.

### 3.3.2 Propiedades como funciones uninterpreted

Una propiedad $T.x$ de tipo $S$ se traduce a una función Z3
uninterpreted:

$$
\tau(T.x) \;:\; \text{Ref}(T) \to S
$$

Una navegación $\text{self}.x$ en una cláusula sobre $T$ se traduce
a la aplicación $\tau(T.x)(\text{self})$.

**Manejo de @pre.** Para una propiedad referenciada en una
post-condición, la versión `self.x@pre` se traduce a una **función
distinta** $\tau(T.x@pre)$, también uninterpreted. Esto permite
expresar deltas como `self.x = self.x@pre + 1` sin colapsar los
dos lados a una tautología.

**Manejo de invariantes heredadas.** Las invariantes efectivas
$\text{Inv}(T)$ se obtienen vía linearización C3 sobre la cadena
de `specializes`. La función `chainOf(T)` retorna la lista
*root-first* y `effectiveInvariants(T)` concatena las
invariantes de toda la cadena. Esto es lo que permite que la
consulta Q1 incluya invariantes del kind y sus ancestros como
contexto (recordando: las invariantes son verdaderas en todo
estado, por tanto pertenecen al antecedente).

### 3.3.3 Allen interval algebra

Los happenings se modelan con dos funciones uninterpreted por
happening referenciado:

$$
\tau(h.\text{start}) : \text{Ref}(\text{Hap}) \to \text{Real}
$$

$$
\tau(h.\text{end}) : \text{Ref}(\text{Hap}) \to \text{Real}
$$

y la axioma estructural $\tau(h.\text{start}) < \tau(h.\text{end})$
se añade al solver al primer uso de $h$ (intervalo no-degenerado).

Las 13 relaciones de Allen se traducen entonces a fórmulas en
difference logic sobre las cuatro variables relevantes. Por
ejemplo:

$$
\tau(a \text{ before } b) \;\equiv\; \tau(a.\text{end}) < \tau(b.\text{start})
$$

Estas traducciones están dentro del fragmento decidible
QF_LRA-difference, y se cierran con el resto del encoding sin
necesidad de teorías adicionales.

### 3.3.4 Cláusulas no-traducibles

Una cláusula $\phi \in \Phi \setminus \Phi_\text{dec}$ no tiene
imagen bajo $\tau$. En lugar de abortar la verificación, el
encoder reporta la cláusula como *skipped* con razón. La consulta
SAT se ejecuta sobre el subconjunto traducible; cualquier
veredicto se acompaña de los códigos `W##_partial` enumerando las
razones de skip. Esta es la base de la soundness parcial
discutida en §3.3.5.

### 3.3.5 Soundness del verificador

**Lema 3.1 (Soundness toward false-positives).** Sea $\Gamma$ una
conjunción de cláusulas, particionada en $\Gamma = \Gamma_\text{dec}
\cup \Gamma_\text{skip}$ con $\Gamma_\text{dec} \subseteq
\Phi_\text{dec}$. Sea $\phi$ una cláusula con $\phi \in
\Phi_\text{dec}$. Si la consulta
$\text{SAT}(\tau(\Gamma_\text{dec}) \wedge \neg \tau(\phi))$ retorna
UNSAT, entonces $\Gamma_\text{dec} \models \phi$ en el fragmento
decidible.

*Demostración (sketch):* la traducción $\tau$ preserva la semántica
sobre Φ_dec: si una fórmula $\psi$ es satisfacible en la teoría OCL
restringida, $\tau(\psi)$ es satisfacible en QF_LRA + Allen.
Contrapositivamente, si $\tau(\Gamma_\text{dec}) \wedge \neg
\tau(\phi)$ es UNSAT, entonces $\Gamma_\text{dec} \wedge \neg \phi$
es insatisfacible en OCL-restringida; por tanto
$\Gamma_\text{dec} \models \phi$. ∎

**Corolario 3.2 (No-false-positives).** Si Q1 retorna UNSAT, el
verificador *no* reporta una violación falsa de O1 dentro del
subconjunto decidible. (Análogamente para Q2, Q3.)

**Lema 3.3 (False-negative parcial).** Si $\Gamma_\text{skip}$ es
no-vacío, una consulta UNSAT no garantiza $\Gamma \models \phi$
sobre $\Phi$ pleno: una cláusula skipped podría imponer un
constraint que invalida el witness o, dualmente, hace satisfacible
una conclusión que el subconjunto decidible rechaza.

*Implicación operativa:* el verificador emite un código
`W##_partial` enumerando las razones de skip toda vez que el
veredicto sobre Φ_dec depende de la ausencia de cláusulas no
traducibles. El autor del modelo tiene la información para juzgar
si la verificación parcial basta para su caso.

**Lema 3.4 (Witness fidelity).** Si Q1 retorna SAT con witness
$w$, entonces $w$ es una asignación de variables Z3 que satisface
$\tau(\text{Inv}(T)) \wedge \tau(\text{Pre}(E)) \wedge
\tau(\text{Post}(E)) \wedge \neg \tau(P(C))$. Bajo la
correspondencia $\tau$, $w$ corresponde a un estado del mundo OCL
restringido que viola O1.

*Sutileza:* el witness puede ser un estado que el sistema real
nunca alcanza (e.g. `safeMaxDoseUnits = -1`) si las invariantes que
descartan ese estado están en $\Gamma_\text{skip}$. En tal caso, la
violación SAT es un *false positive teórico* — no un bug real del
modelo. Por eso S34 SAT se acompaña de un W34_partial cuando
$\Gamma_\text{skip}$ es no-vacío: el autor recibe explícitamente
la advertencia de que el witness podría no ser realizable.

### 3.3.6 Re-uso entre obligaciones

Las consultas Q1, Q2, Q3 comparten infraestructura:

- El **environment** $E$ (`Env` en el código) cachea sorts y
  funciones por nombre, asegurando que dos cláusulas que mencionan
  `self.x` se traducen a la **misma** aplicación de la **misma**
  función uninterpreted. Esta es la unificación por nombre crítica
  para que Q1 (donde $E$ y $C$ son sortales distintos) produzca
  una formulación coherente.
- La función `translateConjunction` particiona una lista de
  cláusulas en (traducidas, skipped) y reporta razones
  estructuradas.
- El veredicto se interpreta uniformemente:
  - UNSAT → obligación cumplida (en Φ_dec).
  - SAT → código `S` (violación detectada).
  - UNKNOWN → código `W##_partial` con razón "out-of-fragment".

---

## 3.4 La cláusula `refines:` de primera clase

### 3.4.1 Motivación

Antes de Phase 18 v0.5, la traceability inter-etapa vivía en
**comentarios** de la forma:

```onto
// refines: insulin_pump_discovery::CorrectDoseCommitment
event deliverInsulin(...): Real { ... }
```

El verificador minaba los comentarios via regex (`refinesMining.ts`)
y construía un mapa evento → commitment. Esta estrategia tiene un
costo bien caracterizado empíricamente (§4.5): bajo prompts de
*system prompt* que recomiendan el comentario, ambos LLMs evaluados
omiten arbitrariamente — el cumplimiento de un *recommendation* es
discreción del agente.

La cláusula gramatical de primera clase reemplaza la recomendación
por un **constructo del lenguaje**. Un evento que declare
refinamiento debe usar la cláusula porque no existe otra forma
estructural de declararlo, y la cláusula es parseada al AST sin
ambigüedad.

### 3.4.2 Producción gramatical

La cláusula se añade entre la signatura del evento y su cuerpo:

```
eventDecl
  ::= ('override')? 'event' Identifier '(' paramList? ')'
      (':' typeRef)?
      ('refines' refinesTarget (',' refinesTarget)* )?
      '{' eventClause* '}'

refinesTarget
  ::= Identifier '::' Identifier ('.' Identifier)?
```

El token `::` se registra **antes** de `:` en la lista de tokens
del lexer (`tokens.ts`), garantizando longest-match: la secuencia
`foo::bar` se tokeniza como `Identifier ColonColon Identifier`,
no como `Identifier Colon Colon Identifier` (lo cual ni siquiera
sería gramatical).

### 3.4.3 Representación en AST

Cada `refinesTarget` se construye en una entidad AST de la forma:

```typescript
interface RefinesTarget {
  readonly kind: "RefinesTarget";
  readonly namespace: string;          // antes de `::`
  readonly name: string;               // después de `::`
  readonly eventName: string | null;   // después de `.`, opcional
}
```

Y `EventDecl.refines: readonly RefinesTarget[]` lista todas las
declaradas. La presencia o ausencia de `eventName` discrimina entre
las dos interpretaciones semánticas:

| Forma | `eventName` | Interpretación | Obligación |
|---|---|---|---|
| `ns::Name`                | `null` | Discharge de commitment | O1 |
| `ns::Type.event`          | `≠ null` | Refinamiento de evento (Liskov / decomposición) | O2 o O4 |

### 3.4.4 Discovery y backward compatibility

El verificador inter-etapa consume dos fuentes de aristas
de refinamiento, en orden de preferencia:

1. **AST-level** — vía `collectAstRefinements(merged)`: itera todos
   los eventos del AST mergeado y produce un `RefinesAnnotation`
   por cada `RefinesTarget` declarado.
2. **Comment-level (legacy)** — vía `mineRefinesAnnotations(loadedFiles)`:
   escanea los archivos fuente buscando `// refines: …`.

Ambos conjuntos se concatenan y se deduplican (las AST-level ganan
en colisiones). Este diseño preserva backward compatibility: un
`.onto` con anotaciones en comentarios sigue verificando
correctamente sin cambios.

La nueva sintaxis es **opt-in** a nivel de file: nada obliga a un
autor a usar la cláusula. Lo que sí es opt-out es la confiabilidad:
sin la cláusula, el verificador depende de que el comentario esté
presente, y §4.5 mide qué tan frecuentemente esta dependencia
falla en autoring asistido por LLM.

### 3.4.5 Análisis comparativo de mecanismos

| Aspecto | Comment-mining | Cláusula `refines:` |
|---|---|---|
| Disciplina requerida | Discreción del autor | Forzada por gramática |
| Robustez ante variantes léxicas | Frágil (prosa inglesa "Refines: supports X") | Total (regla LL(1)) |
| Backward compatibility | (sistema base) | Sí — convive con comentarios |
| Cobertura cross-LLM (§4.5) | 27% (DeepSeek) | 92% (DeepSeek) |
| Costo de implementación | ~250 líneas en `refinesMining.ts` | ~80 líneas distribuidas (token + grammar rule + AST + builder) |

El costo de adoptar el constructo es bajo, su beneficio empírico
es alto, y la transición es no-disruptiva. La cláusula es por
tanto la representación canónica recomendada en el playbook v0.2
(post-Phase 18).

---

## 3.5 Diagnósticos como hints de reparación

Esta sección caracteriza el sistema de diagnósticos del verificador
inter-etapa no solamente como reportes de error sino como **función
guía** para el closed-loop de autoría empíricamente validado en
§4.4.

### 3.5.1 La familia de códigos

El verificador inter-etapa emite nueve códigos, particionados por
obligación y severidad:

| Código | Severidad | Obligación | Significado |
|---|---|---|---|
| `S29`, `S30` | Hard | O2 | Liskov pre-strengthening / post-weakening intra-merged-AST. |
| `W29`, `W30` | Warning | O2 | Equivalente parcial (cláusulas skipped). |
| `S33`, `W33` | Hard / Warning | (intra-commitment-LSP)<sup>†</sup> | Especialización de commitments. |
| `S34` | Hard | O1 | Discharge no provable; counter-example encontrado. |
| `W34` | Warning | O1 (cobertura) | Commitment sin refiner declarado. |
| `W34_partial` | Warning | O1 | Discharge UNSAT con cláusulas skipped. |
| `W35` | Warning | O1 (resolución) | Target de `refines:` no resuelve. |
| `S35`, `W35_partial` | Hard / Warning | O3 (dormant, §3.2.3) | Inheritance de invariantes no provable. |
| `W37` | Warning | O2 (resolución) | Target Liskov no resuelve a un evento existente. |
| `W38` | Warning | O4a | Cobertura de modifies incompleta. |
| `W39` | Warning | O4b | Correspondencia de propiedades incompleta. |

<sup>†</sup> S33/W33 son chequeos intra-stage de Liskov entre
*commitments* (un commitment hijo no debe debilitar el predicate
del commitment padre). No forman parte de las cuatro obligaciones
inter-etapa de §3.2, pero comparten infraestructura Z3 con O1
(consulta SAT sobre Φ_dec con encoding por unificación de nombres)
y se reportan junto a los códigos inter-etapa por uniformidad de la
interfaz diagnóstica.

### 3.5.2 Mensajes como hints

Cada código no solamente nombra la violación sino que produce un
mensaje que enumera las partes implicadas y sugiere — directa o
indirectamente — qué cambio repararía el modelo. Por ejemplo, el
mensaje de W38 (modifies-closure gap):

> [W38] modifies-closure gap on
> 'MeetingSchedulerSystem.requestMeeting': parent modifies
> \[requestStatus, currentRequestId, …\] but the refining events do
> not cover \[participantsNotified, proposedDate\]. Either rename a
> child property to match, add the property to a refining
> component, or omit the parent's modifies entry.

Tres opciones de reparación se sugieren explícitamente. Esto no
es accidental: la riqueza de los mensajes es lo que permite que la
salida del verificador funcione como prompt de reparación para un
LLM (§4.4).

### 3.5.3 El espacio de modelos como retículo de obligaciones

Definimos el **espacio de modelos** $\mathcal{M}$ como el conjunto
de todos los `.onto` que pasan verificación intra-etapa. Sobre
$\mathcal{M}$, los códigos definen un retículo de validez:

$$
\mathcal{M}_\text{clean} \;=\; \{ R \in \mathcal{M} \;|\; \text{Bloque 2}(R) \text{ emite 0 códigos} \}
$$

$$
\mathcal{M}_\text{soft} \;=\; \{ R \in \mathcal{M} \;|\; \text{Bloque 2}(R) \text{ emite solamente W##} \}
$$

$$
\mathcal{M}_\text{any} \;=\; \mathcal{M}
$$

con la inclusión $\mathcal{M}_\text{clean} \subset
\mathcal{M}_\text{soft} \subset \mathcal{M}_\text{any}$.

Los diagnósticos forman un **gradiente** sobre este retículo:

- Un $.onto \in \mathcal{M}_\text{any}$ con S34 está estrictamente
  más lejos de $\mathcal{M}_\text{clean}$ que uno con solo W38/W39.
- La reparación es **descenso** en este gradiente.
- Cada código guía la dirección de descenso (W38 sugiere
  modificar modifies; S34 sugiere fortalecer post o remover
  refines target).

La validación empírica en §4.4 demuestra que LLMs comerciales son
capaces de implementar este descenso: dado un punto en
$\mathcal{M}_\text{soft}$ y los códigos que el verificador emite,
el LLM converge en pocas iteraciones a $\mathcal{M}_\text{clean}$.

### 3.5.4 Limitaciones de la resolución actual

Tres limitaciones del sistema diagnóstico actual merecen mención:

**L1 — Namespace provenance limitada.** El merge multi-archivo
(§3.1.3) pierde el archivo de origen de cada declaración. En
consecuencia, una `refines:` clause con namespace `ns_a::X` se
resuelve a *cualquier* X declarada en $\widehat{R}$, sin verificar
que la X provenga del archivo cuyo namespace es `ns_a`. Esto
permite falsos positivos de W35 si el merge no preserva
namespaces. Solución v1: anotar cada `Declaration` con su archivo
de origen.

**L2 — Same-name matching para O4.** La correspondencia de
propiedades asume que `self.X` en el padre y `T_i.X` en algún
componente son la misma propiedad lógica. Renames intencionales
(e.g. `currentBloodSugar` en el padre, `lastReadingMgDl` en el
componente sensor) se reportan incorrectamente como gaps. Solución
v1: tabla de renames por componente, declarada en una sección
opcional del `.onto`.

**L3 — O3 dormant.** Como ya discutido en §3.2.3.

Las tres son trabajo futuro identificado, no fallos de soundness:
ninguna invalida la corrección del verificador sobre los casos que
sí maneja.

---

## 3.6 Resumen

Este capítulo formaliza el verificador inter-etapa de tres
maneras:

1. **El artefacto** — `.onto` con estereotipos UFO-A y OCL en un
   fragmento decidible Φ_dec, mergeado en un AST plano a través
   de imports.
2. **Las obligaciones** — cuatro proof obligations (O1–O4)
   definidas formalmente, con consultas SAT correspondientes
   (Q1–Q3, más O4 estructural).
3. **La función guía** — diagnósticos como gradiente sobre el
   espacio de modelos válidos, navegable por LLMs (§4.4).

Las cuatro obligaciones están **activamente verificadas** en v0.6
del DSL. La cuarta (O3) estuvo dormant en versiones previas por
una limitación expresiva; la extensión gramatical
*member-quantified categories* (§3.2.3) la activa con dominio
empírico no-trivial, validado por el negative test (§4.3).

El encoding Z3 (§3.3) preserva soundness toward false-positives
(Corolario 3.2) y reporta verificación parcial explícitamente
cuando cláusulas no traducibles intervienen.

La cláusula `refines:` (§3.4) reemplaza el patrón frágil de
anotaciones en comentarios por un constructo gramatical;
empíricamente eleva la cobertura de traceability del 27% al 92%
(§4.5).

El verificador no es solamente un detector — es una función guía
sobre el retículo de obligaciones (§3.5.3). La empíricamente
validada navegabilidad de este gradiente por LLMs es la base de
la pareja generación-verificación-reparación que ontodls
implementa.

---

## Changelog del capítulo

- 2026-05-28 — v0.1 — primer borrador completo cubriendo §3.1
  (artefacto canónico), §3.2 (cuatro obligaciones formales),
  §3.3 (encoding Z3 + soundness), §3.4 (cláusula `refines:`),
  §3.5 (diagnósticos como gradiente). Pendiente: revisión
  estilística, posible movimiento de proof sketches (§3.3.5) a
  apéndice, y adaptación de notación a convención del programa.
