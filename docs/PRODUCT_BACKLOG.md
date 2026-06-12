# ontodls — Product Backlog

**Última actualización:** 2026-05-28
**Estado del proyecto:** research prototype completo + thesis defendible;
producto NO existe todavía.

Este documento captura la **visión original del producto** + el
**backlog priorizado** para perseguirla. Diseñado para retomar en sesiones
futuras sin re-derivar contexto.

---

## 1. Vision recap (tu vision original, no la pivoteada académica)

**Producto:** plataforma SaaS de gestión + gobernanza de proyectos software,
con autoring asistido por IA de ontologías formales como modelo
conceptual del proyecto.

**Buyer:** Head of Eng / VP Product / CTO / CIO en empresas
midsize+ con necesidades de governance, compliance, o multi-proyecto.

**Vertical sugerido para primer pitch:** **fintech** (banking, payments).
Razones: tu demo bancario lo apunta, regulatorio es vendible, ciclos
de venta más cortos que aerospace.

**Diferenciadores únicos vs Confluence/Notion/Backstage:**

1. **Federación conceptual cross-proyecto** — empresas con N
   proyectos comparten kinds/categories/commitments centralizadamente.
   Esto NO lo hace nadie en el espacio.
2. **AI authoring de ontologías** — los conceptos del proyecto los
   genera/refina IA, no se escriben a mano.
3. **Mapa conceptual visual auto-generado** — la ontología se renderiza
   como grafo navegable.
4. **SDLC configurable por empresa** — cada cliente define sus stages
   y transiciones, no se atan a UFO-A canónico.
5. **Verificación formal opcional** — para clientes regulatory-heavy,
   los 4 obligations Z3 actúan como gate (tier enterprise feature).
6. **Codegen opcional** — TS + tanstack scaffolds derivados del spec
   (tier paid).

**North star metric:** projects active × monthly recurring revenue per project.
Target year 1: $200K-500K ARR si PMF se valida.

---

## 2. Lo que YA está construido (foundation técnico)

| Capa | Estado | Path en el repo |
|---|---|---|
| Verifier (4 proof obligations + Z3) | ✅ Producción para el corpus | `src/semantic/lspCheck.ts` |
| Parser DSL `.onto` | ✅ Chevrotain LL(1) estable | `src/parser/` |
| OCL fragmento decidible Φ_dec | ✅ 100% coverage en 130 proofs | (verificado en Phase 19-22b) |
| LLM authoring pipeline + repair loop | ✅ 20/20 = 100% [83.9%, 100%] DeepSeek | `scratch/sdlc-playbook-test.mjs` |
| TS codegen (types + validate*()) | ✅ 28 dominios × 107k líneas | `src/codegen/` |
| Tanstack codegen (DB + services + routes + forms) | ✅ 74% mutation auto-derived | `src/codegen-tanstack/` |
| RxOCL bounded LTL (always + next) | ✅ Eventually stub | `src/parser/preExtract.ts` + verifier |
| Demo fullstack app (online-banking) | ✅ Corriendo en :5173 | `examples/online_banking/app/` |
| Corpus 28 dominios verificados | ✅ Reproducibles | `examples/*/` |
| Thesis chapters 1-5 | ✅ Drafts | `docs/thesis/` |
| Paper outline (verifier-as-equalizer) | ✅ Listo para draft | `docs/papers/verifier-as-equalizer.md` |
| Verification brief (para review externo) | ✅ Completo | `docs/VERIFICATION_BRIEF.md` |
| Phase 26 prototype (cheap LLM contract-driven impl) | ✅ N=5, 91% promedio, $0.0006/event | `scratch/phase26-contract-llm.mjs` + `scratch/phase26_out/` |

**Lo que NO está construido (gap a producto):**

| Capa | Estado |
|---|---|
| Web platform multi-tenant | ❌ No existe |
| Visual concept map | ❌ No existe |
| Federación cross-proyecto | ❌ No existe |
| SDLC configurable per company | ❌ Hardcodeado a 5 stages |
| Auth + RBAC + billing | ❌ No existe |
| Test suite automatizado | ❌ No existe |
| CI/CD | ❌ No existe |
| Docs públicos (Docusaurus, tutorials) | ❌ No existe |
| IDE extension | ❌ No existe |
| Integraciones (GitHub, Jira, etc.) | ❌ No existe |
| Smart-hints para concurrency (Phase 26) | ❌ Solo single-shot prototype |
| Property test generator desde OCL | ❌ Conceptual, no construido |

---

## 3. Backlog priorizado

### TRACK A — Validación + base OSS (P0, antes de invertir tiempo serio)

| ID | Item | Prio | Esfuerzo | Status |
|---|---|---|---|---|
| A-1 | Defender la tesis. NO abandonar esa inversión. | P0 | (continuum académico) | Pending |
| A-2 | Submit del workshop paper F1 (FM × LLM 2026 o ICSE NIER) | P0 | ~7d writing | Pending |
| A-3 | OSS launch: repo público, README, LICENSE Apache 2.0 | P0 | 2-3d | Pending |
| A-4 | Docusaurus site con tutorial + 5 examples polished | P0 | 5-7d | Pending |
| A-5 | npm publish: `npx ontodls init` working flow | P0 | 2-3d | Pending |
| A-6 | Blog post "Show HN: 28-domain verified specs with cheap LLM" | P0 | 1d | Pending |
| A-7 | **Customer discovery: 10 conversaciones con CTOs fintech** | **P0** | **2 semanas** | **Pending — crítico** |
| A-8 | Decision gate: 5+ "I'd pay for this" → continuar al Track B; sino → recalibrar | P0 | (decisión) | Pending |

**Si A-8 da signal positivo, continuar. Si no, parar producto, mantener OSS.**

### TRACK B — Web platform MVP (P1, condicional a A-8 positivo)

| ID | Item | Prio | Esfuerzo | Status |
|---|---|---|---|---|
| B-1 | Decisión stack: Next.js? TanStack Start? Remix? — elegir 1 | P1 | 1d research | Pending |
| B-2 | Auth + organizaciones + RBAC básico (NextAuth + Drizzle) | P1 | 5-7d | Pending |
| B-3 | Multi-tenant data layer (org_id en todas las tablas) | P1 | 3-5d | Pending |
| B-4 | Project CRUD (create, list, edit, delete) | P1 | 3-5d | Pending |
| B-5 | Editor del `.onto` (Monaco con LSP-like) | P1 | 7-10d | Pending |
| B-6 | Verify integration (corre Z3 server-side, muestra diagnostics inline) | P1 | 5-7d | Pending |
| B-7 | LLM integration: "AI assistant" panel que llama DeepSeek/Sonnet | P1 | 5-7d | Pending |
| B-8 | Billing infra (Stripe) | P1 | 5-7d | Pending |
| B-9 | Email + onboarding flow | P1 | 3-5d | Pending |

**Total Track B:** ~6-10 semanas, 1 dev full-time.

### TRACK C — Concept map visualizer (P1, paralelo a B)

| ID | Item | Prio | Esfuerzo | Status |
|---|---|---|---|---|
| C-1 | Decisión visualizer: React Flow vs D3 vs Cytoscape | P1 | 1d research | Pending |
| C-2 | Renderer: kinds → nodes, specializes → edges | P1 | 3-5d | Pending |
| C-3 | Auto-layout (dagre o elkjs) | P1 | 2-3d | Pending |
| C-4 | Interactive: click-to-edit, hover for invariants, expand/collapse stages | P1 | 5-7d | Pending |
| C-5 | Export a PNG/SVG/PDF para docs | P1 | 1-2d | Pending |

**Total Track C:** ~2-3 semanas, paralelo a B.

### TRACK D — Federación cross-proyecto (P2, diferenciador clave)

| ID | Item | Prio | Esfuerzo | Status |
|---|---|---|---|---|
| D-1 | Diseñar formato: cómo se publica una shared ontology | P2 | 2-3d design | Pending |
| D-2 | Versionado: `@bank-shared/v1`, semver, deprecation | P2 | 3-5d | Pending |
| D-3 | Import mechanism: `import "@org/shared"` en `.onto` | P2 | 5-7d (grammar + resolver) | Pending |
| D-4 | Cross-project query: "qué proyectos discharge este commitment" | P2 | 5-7d | Pending |
| D-5 | Migration tooling cuando shared cambia | P2 | 5-7d | Pending |
| D-6 | UI: organization-level shared library dashboard | P2 | 5-7d | Pending |

**Total Track D:** ~4-6 semanas.

### TRACK E — SDLC configurable (P2)

| ID | Item | Prio | Esfuerzo | Status |
|---|---|---|---|---|
| E-1 | Modelo: Stage como entidad primer-clase (no hardcoded en gen.js) | P2 | 3-5d | Pending |
| E-2 | Transition rules: qué obligations chequear entre stages X→Y | P2 | 5-7d | Pending |
| E-3 | UI para definir SDLC propio | P2 | 3-5d | Pending |
| E-4 | Templates predefinidos (UFO-A canónico, lightweight, regulatorio) | P2 | 2-3d | Pending |

**Total Track E:** ~2-3 semanas.

### TRACK F — Integraciones + polish (P3, post-MVP)

| ID | Item | Prio | Esfuerzo | Status |
|---|---|---|---|---|
| F-1 | GitHub App: verify on PR, show diagnostics as PR comments | P3 | 5-7d | Pending |
| F-2 | VS Code extension: syntax highlighting + inline diagnostics | P3 | 7-10d | Pending |
| F-3 | Jira integration: link `.onto` events to Jira tickets | P3 | 5-7d | Pending |
| F-4 | Audit log + compliance reports (SOC 2 prep) | P3 | 7-10d | Pending |
| F-5 | Performance: cache Z3 results, parallel verification | P3 | 5-7d | Pending |
| F-6 | Internationalization si vendes fuera de EN | P3 | 3-5d | Backlog |

**Total Track F:** ~6-8 semanas.

### TRACK G — Phase 26 (contract-driven cheap LLM impl) (P2, paralelo)

Esto es el experimento que probamos hoy. Es ortogonal al producto principal — un research track que puede convertirse en feature.

| ID | Item | Prio | Esfuerzo | Status |
|---|---|---|---|---|
| G-1 | N=20-30 random sample para validar el 91% claim | P2 | 3-5d | Pending |
| G-2 | Contract auto-extractor desde `.onto` (sin handpicking) | P2 | 5-7d | Pending |
| G-3 | Repair loop: TS compile + property tests | P2 | 7-10d | Pending |
| G-4 | Property test generator desde OCL pre/post | P2 | 2-4 semanas | Pending |
| G-5 | Smart-hints para issues recurrentes (concurrency, ambiguity) | P2 | 5-7d | Pending |
| G-6 | UI "regenerate this function from contract" en editor | P2 | 5-7d | Pending |
| G-7 | Pricing: ¿feature standalone? ¿incluido en tier?| P2 | (decisión) | Pending |

**Total Track G:** ~6-10 semanas si se persigue agresivamente.

---

## 4. Open questions / decisiones a tomar

| # | Pregunta | Cuándo decidir | Mi recomendación honesta |
|---|---|---|---|
| Q1 | OSS bajo Apache 2.0 o algo más restrictivo (BSL)? | Antes A-3 | Apache 2.0 — el OSS movimiento abierto crece más rápido. Servicios paid encima. |
| Q2 | Bootstrap o raise pre-seed? | Después A-8 | Bootstrap si A-8 da soft signal; raise si A-8 da hard signal. Necesitas tracción antes de raise serio. |
| Q3 | Solo founder técnico o buscar business co-founder? | Después A-8 | Buscar co-founder de fintech BIZ si vas serio. Pure tech founders fallan en B2B sales. |
| Q4 | Tier OSS vs Tier Enterprise: ¿dónde está la línea? | Pre B-1 | OSS: verifier + CLI + basic codegen. Enterprise: SaaS hosting, federación, audit logs, RBAC avanzado. |
| Q5 | Pricing model: per-seat vs per-project vs flat | Pre B-8 | Per-seat ($30-100/mo) es lo más predecible. Considerar tier free para projects open-source. |
| Q6 | Phase 26 como producto separado o feature de ontodls? | Después G-1 | Feature de ontodls si N=20+ valida. Pricing premium incluido. |
| Q7 | Cuánto runway necesitas para Track B? | Pre B-1 | Mínimo 12 meses cash + co-founder agreement claro. |
| Q8 | Cuándo monetizar? Lanzar gratis o paid from day 1? | Pre A-3 | Free tier limitado + paid tiers. NO 100% free al inicio — quita signal de quién paga. |

---

## 5. Concrete next actions (próximos pasos en orden)

**Si retomas esto en 1 semana:**

1. **Pulir el OSS repo** (A-3 + A-4):
   - README.md público con value prop claro
   - LICENSE (Apache 2.0)
   - CONTRIBUTING.md
   - Docusaurus site con 1 tutorial end-to-end

2. **Workshop paper draft** (A-2):
   - Empezar §1 Intro + §5 Findings (más originales)
   - Re-leer `docs/papers/verifier-as-equalizer.md`

**Si retomas esto en 1 mes:**

3. **Customer discovery** (A-7):
   - Script de 30-min call:
     - 5 min: who you are, why this matters
     - 10 min: demo (la app bancaria corriendo + un `.onto` editado)
     - 15 min: preguntas
       - "Has usado TLA+/Alloy? Por qué dejaste?"
       - "Si funciona como digo, pagarías $X/year?"
       - "Qué te detendría de comprarlo hoy?"
   - 10 prospects: LinkedIn outreach a CTOs de fintech series A-C
   - Tracker en Notion/spreadsheet: contacto, fecha call, respuesta, willingness to pay

**Si A-8 da signal positivo:**

4. **Stack decisión + B-1:** elegir TanStack Start o Next.js, set up monorepo
5. **Encontrar co-founder business** (ParalLel a B-1 a B-3)
6. **Pre-seed conversations** (paralelo, si quieres VC track)

**Si A-8 da signal negativo:**

7. **Mantener OSS, no full-time** — sigue con tu día de día
8. **Track G (Phase 26) como side research** — costo bajo, paper potential

---

## 6. Riesgos identificados

| Riesgo | Severidad | Mitigación |
|---|---|---|
| Customer discovery muestra "no quieren formal methods" | Alto | Pivotear a "AI-assisted project governance" sin enfocar en formal |
| Sin co-founder business, ventas enterprise fallan | Alto | Buscar antes de tracción seria; networking en SaaS fintech communities |
| Competencia copia features fácilmente (OSS) | Medio | Diferenciador: la federación + el verifier + el codegen multi-target son compounding |
| Z3 performance escala mal en specs grandes | Medio | Caching + paralelización; nunca specs > 1k declaraciones |
| LLM costs escalan con uso | Medio | Pase costos a customers (per-project pricing) o BYO API key tier |
| Burnout siendo solo founder | Alto | Setting boundaries; consultoría part-time como runway extender |
| Saturación del LLM × FM space (Coq+GPT, Lean+GPT...) | Medio | Tu diferenciador es SDLC + governance, no pure FM |

---

## 7. Métricas para tracking

**Pre-launch (mientras OSS + paper):**
- GitHub stars / week
- npm downloads / week
- Issues abiertos por external contributors
- Workshop paper accepted Y/N

**Post customer discovery (A-7):**
- # CTOs contactados
- # calls completados
- # "I'd pay for this" responses
- # "I'd pay $X" responses (con $X específico)

**Post launch SaaS (si aplica):**
- MRR
- Trial-to-paid conversion
- Churn mensual
- Logos paid (target Y1: 3-10)
- NPS

**Para track G:**
- N events probados
- Success rate (single-shot)
- Success rate (con repair, N iteraciones)
- Costo promedio per event
- Tiempo wall-clock per event

---

## 8. Referencias internas (lo que ya tenemos documentado)

| Documento | Contenido |
|---|---|
| `docs/BLOQUE2_EMPIRICAL.md` | Historia completa de Phases 1-26, ~2000+ líneas, findings detallados |
| `docs/thesis/Chapter{1-5}*.md` | Tesis completa drafts |
| `docs/papers/verifier-as-equalizer.md` | Workshop paper outline (F1 + F2 + F3) |
| `docs/VERIFICATION_BRIEF.md` | Brief para review externo por otra AI |
| `examples/MANIFEST.md` | Mapeo 28 dominios → líneas TS |
| `examples/online_banking/app/README.md` | Cómo correr la app demo |
| `scratch/phase26_out/summary.json` | Resultados Phase 26 prototype |
| `memory/` | 9 memory files con decisions per phase |

---

## 9. Decisión personal a hacerte cada vez que vuelvas a esto

Tres preguntas a responderte honestamente:

1. **¿Cuántos meses de runway tienes?**
   - <6 meses → mantén día de día, side project
   - 6-12 meses → A + B sin biz co-founder, validación serious
   - 12+ meses → A + B + buscar co-founder + raise prep

2. **¿Tienes co-founder business o estás dispuesto a buscar uno?**
   - Sí → puedes pensar enterprise B2B SaaS
   - No → bootstrap puro, scope reducido (OSS + consultoría)

3. **¿La customer discovery (A-7) te dio signal verde?**
   - 5+ "would pay" con $X específico → procede
   - 2-3 interesados sin compromiso → recalibrate value prop
   - 0-1 entusiasmados → no es producto para ti ahora

**No avances al siguiente track sin haber respondido las 3.**

---

## 10. Phase 26 prototype — resultados guardados

Resultados del experimento de hoy (contract-driven cheap LLM):

| Métrica | Valor |
|---|---:|
| N events probados | 5 |
| Sintácticamente válidos | 5/5 |
| Promedio semantic correctness | ~91% (mi grading subjetivo) |
| Costo total | **$0.0031** |
| Costo per event | **$0.0006** |

**Outputs en:** `scratch/phase26_out/{recoverPendingTransfer,addBackorder,bookAppointment,rejectMotionCommand,readSoCAndReserve}.ts`

**Caveats:**
- N=5, hand-picked (selection bias)
- Mi grading subjetivo no es formal verification
- Prompt incluía "informal notes from architect" — NO contract-only puro
- No corrí los outputs, solo análisis estático

**Implicación si valida con N≥20:** diferenciador genuino del producto. Pricing argument: ~1000× cheaper than Cursor/Copilot per implementation.

---

## 11. Status snapshot — cómo te encuentras ahora

✅ **Lo que tienes:**
- Tesis defendible
- Workshop paper outline ready
- OSS-ready codebase (con polish needed)
- 28 dominios verificados como demo
- App fullstack corriendo
- 1 micro-experimento de Phase 26 con resultado prometedor

⏳ **Lo que no tienes:**
- Producto (en sentido SaaS vendible)
- Customers
- Co-founder business
- Validation de mercado real
- Runway financiero declarado

🤔 **Decisión clave abierta:**
- ¿Persigues producto serio O mantienes academic + OSS sin más?
- La respuesta depende de runway + appetite for risk + co-founder availability

---

**Fin del backlog. Buena suerte.**

Cuando retomes, lee primero §1 (vision) + §5 (next actions) + §9 (decisión
personal). Lo demás es referencia detallada.
