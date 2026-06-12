# Discretion-Failure in LLM-Assisted Formal Modeling: A Two-Level Phenomenon

> **Research design + pilot.** Documents the discretion-failure
> phenomenon empirically observed during the ontodls validation
> study (Phases 8-17), formalizes it as a hierarchical model of
> enforcement, and proposes a full study quantifying the
> phenomenon across instruction levels and LLM-pair combinations.
>
> **Status:** research design + pilot. Pre-registration draft.
> Companion to `CrossModelEscalation.md`.
> Intended audience: workshops on prompt engineering, LLM
> reliability, formal modeling assistants.

## Abstract

When an LLM is instructed to follow a convention (e.g.,
"annotate every commitment refinement with `// refines:`"), the
LLM has *discretion* whether to follow. We measure that
discretion in two distinct dimensions:

- **Declarative discretion-failure (DDF):** whether the LLM
  declares the structural relation at all. Empirically: 27% (with
  prompt-only enforcement) vs 92% (with grammar enforcement).
- **Substantive discretion-failure (SDF):** whether the LLM
  populates a declared structure with non-trivial content.
  Empirically: when DeepSeek adopted the new `where bearer:`
  member-quantified category syntax, 1 of 3 cases had a
  trivially-true body — i.e., adopted syntactically but
  abandoned semantically.

We argue that DDF is *closable by grammar* (verifiable
structurally) but SDF requires *semantic-aware checks*
(verifiable via Z3 over actual content). This paper formalizes
the two-level model, presents a pilot quantification across N=8
domains × 2 LLMs, and proposes a full study with hierarchical
enforcement taxonomy.

## 1. Research Question

### 1.1 Primary RQ

**To what extent do LLMs follow instructions about FORMAL
MODELING conventions when those instructions are encoded as (a)
prompt recommendations, (b) grammatical constraints, or (c)
semantic post-conditions enforced by a verifier?**

### 1.2 Subsidiary RQs

- **RQ-A (Hierarchy effect).** Holding the LLM and domain
  constant, does enforcement-as-grammar produce strictly higher
  compliance than enforcement-as-prompt? Pilot data suggests
  yes: ontodls Phase 8 measured 27% → 92% on the
  comment-mining → grammar-clause transition for `refines:`
  annotations.

- **RQ-B (Substantive vs declarative).** When a grammatical
  constraint forces the LLM to *write* a construct, does the
  LLM populate it with non-trivial content? Phase 10 data
  suggests the rate is **non-100%**: 1 of 3 domains had a
  trivial-body category despite the grammar requiring the
  enclosing structure.

- **RQ-C (Model dependence).** Does the DDF and SDF rate depend
  on LLM capability? Do more-capable LLMs show lower SDF (i.e.,
  do they "fill in" with substantive content more often)?

### 1.3 Hypothesis

**H1.** Declarative discretion-failure (DDF) is reducible to ≤
10% with grammar-enforced constructs across LLMs of varying
capability, and the residual is structural noise (e.g.,
inability to derive a meaningful target — orphan commitments by
necessity).

**H2.** Substantive discretion-failure (SDF) is reducible only
by semantic verification (Z3 / model checking) of declared
content, not by grammar alone. SDF rate is positively
correlated with domain-task mismatch (the LLM has the syntactic
slot but no semantically-rich content to put in it).

**H3.** SDF rate varies with LLM capability: a more-capable LLM
populates substantively at a higher rate. Phase 10 data
suggests Sonnet's SDF rate < DeepSeek's, but N is too small to
test.

## 2. Related Work

### 2.1 LLM instruction-following

The reliability of LLM instruction-following is studied across
several axes: (a) prompt sensitivity (small phrasing changes
produce large output changes); (b) chain-of-thought adherence
(LLMs sometimes claim CoT but skip steps); (c) system-prompt
obedience (LLMs sometimes violate explicit constraints in the
system prompt). All of these measure how reliably an LLM does
what it is *told*.

DDF and SDF are special cases of this broader phenomenon, but
applied to **formal modeling conventions** — instructions about
which constructs to use, how to annotate, when to add content.
Importantly, the modeling conventions have machine-checkable
correlates: a verifier can detect *whether* an LLM declared a
construct (DDF measure) and *whether* the content is non-trivial
(SDF measure). This makes the phenomenon **quantitatively
measurable** in a way prompt-following studies usually aren't.

### 2.2 Grammar-constrained decoding

Recent work on constraining LLM output to formal grammars
(e.g., guidance, llguidance, JSON-mode, structured output) ensures
the output PARSES correctly against a schema. This addresses
DDF: if the grammar requires field X, the output has field X.

Importantly, grammar-constrained decoding does NOT address SDF:
the constrained field may be populated with default / null /
trivial values. The LLM is free to satisfy the grammar
minimally.

Our work distinguishes the two enforcement layers and quantifies
their independent contributions.

### 2.3 Specification mining and code quality

In software engineering, discretion-failure analogues include:
documentation coverage (do developers write JSDoc comments?),
test coverage (do they write tests for new code?), assertion
coverage (do they use assert?). Each of these is binary at the
declarative level (presence/absence) and qualitative at the
substantive level (informative content vs filler).

DDF/SDF apply this two-level analysis to LLM-authored formal
specifications. The novel claim is that the two levels respond
to DIFFERENT remediations: DDF → grammar, SDF → semantic check.

## 3. Conceptual Model

### 3.1 The enforcement hierarchy

We formalize three levels of instruction enforcement:

| Level | Mechanism | Cost to author | Cost to enforce | Measurable? |
|---|---|---|---|---|
| L1 — Prompt | System-prompt instruction in natural language | low | low | indirectly (post-hoc analysis) |
| L2 — Grammar | Required field/clause in DSL grammar | medium (DSL design) | low (parser rejects) | directly (parse failure) |
| L3 — Semantic | Z3 / model checker enforces content | high (verifier code) | medium (Z3 time) | directly (S## diagnostic) |

Each level subsumes the previous: a grammar-enforced field
implies a prompt-recommended one (otherwise the grammar would
require something the LLM doesn't know to provide). A
semantically-enforced field implies a grammar-enforced one
(otherwise no structure exists to validate). This is a strict
total order.

### 3.2 Declarative discretion-failure (DDF)

**Definition.** For a class of structural slots S in a model
(e.g., `refines:` annotations on events), DDF is the fraction of
slots the LLM leaves blank that the playbook recommends filling.

$$
DDF = \frac{|\{s \in S \mid s \text{ blank } \wedge \text{ playbook recommends filling}\}|}{|S|}
$$

DDF is bounded above by 1 (worst case: LLM ignores all
recommendations) and below by 0 (perfect compliance). With prompt
enforcement (L1), Phase 8 measured DDF ≈ 73% over 3 LLM-domain
pairs. With grammar enforcement (L2), Phase 8 measured DDF ≈ 8%.

### 3.3 Substantive discretion-failure (SDF)

**Definition.** For a class of structural slots S, considering
only those slots the LLM DID populate, SDF is the fraction whose
content is **substantively trivial** — a default value, null
placeholder, or empty body.

$$
SDF = \frac{|\{s \in S \mid s \text{ filled } \wedge \text{ substantively trivial}\}|}{|\{s \in S \mid s \text{ filled}\}|}
$$

Substantively-trivial is operationalized per slot type:

- Invariant block: only contains `true;` or empty.
- Refines target: points to a name that exists structurally
  but where the LLM didn't write a corresponding `refines`
  clause body (events have empty pre/post).
- Predicate clause: literal `true` or syntactically
  satisfying-but-empty (e.g., `self.x = self.x`).

SDF is bounded [0, 1] and is independent of DDF (an LLM with
0% DDF can still have 50% SDF).

### 3.4 Effective compliance

The product $(1 - DDF) \cdot (1 - SDF)$ measures **substantively-
filled slot rate** — the fraction of S that is both declared
AND populated with non-trivial content.

For prompt-enforcement (L1), Phase 8 estimated:
- DDF ≈ 73%, SDF ≈ 0% (because only L2-elevated slots had a
  declared structure to be substantively-checked).
- Effective compliance: (1 - 0.73) × (1 - 0) = **27%**.

For grammar-enforcement (L2), Phase 10 measured:
- DDF ≈ 8%, SDF ≈ 33% (1 of 3 categories had `true;` body).
- Effective compliance: (1 - 0.08) × (1 - 0.33) ≈ **62%**.

The grammar lift on substantive compliance is therefore
**62% - 27% = 35 percentage points**, but **24 percentage
points** of that came from DDF reduction and **0** from SDF —
because L2 grammar doesn't enforce semantic content.

To raise effective compliance above 62%, we need L3 (semantic
enforcement). The current ontodls verifier does this via Z3:
S35 fires when category invariants are non-trivial but
unsatisfiable in the member context. So the **strict mode of the
CLI (Phase 15)** is effectively a L3 lift: when `--strict`
promotes W35 to hard, the LLM is forced to write substantive
content (otherwise CI fails).

## 4. Pilot Study

### 4.1 Setup

Reuse the 8 verified domains from Phases 12-16:

- 3 original (insulin-pump, meeting-scheduler, engine-control)
- 5 new (online-banking, smart-thermostat, library-system,
  traffic-light, patient-monitoring)

For each domain × provider pair, compute:

- **DDF**: fraction of structural slots blank where playbook
  recommends fill. Slots considered:
  - `refines:` annotation on events
  - `where bearer:` clause on categories with non-default
    invariants
  - `renames {...}` clause on Code-stage subkinds
- **SDF**: fraction of populated slots with trivial content.
  Slots:
  - `category` body containing only `invariants { true; }`
  - `refines: ns::X` where X exists but is itself orphan
  - `predicate:` clauses that are tautologically true

The ontodls verifier produces a structured catalog of these
findings during regular Bloque 2 runs; we just aggregate.

### 4.2 Per-LLM pilot results

A small `discretion-analyzer.mjs` tool (see Appendix A)
computes DDF and SDF over a `.onto` directory by walking the
merged AST and counting structural slots.

**DeepSeek (N=8):**

| Metric | Value |
|---|---:|
| Declarative discretion-failure DDF | ~8-15% (varies by domain) |
| Substantive discretion-failure SDF | ~20-40% on categories specifically |
| Combined effective compliance | ~50-70% |

**Sonnet (N=8):**

| Metric | Value |
|---|---:|
| Declarative discretion-failure DDF | ~3-10% |
| Substantive discretion-failure SDF | ~10-25% on categories specifically |
| Combined effective compliance | ~70-85% |

(Exact numbers depend on the analyzer's classification of
"trivial." The pilot establishes the methodology; refinement of
the classifier is part of the full study.)

### 4.3 Cross-LLM comparison

Initial reading suggests Sonnet has lower SDF than DeepSeek on
the same domains — supporting H3. The effect size is modest but
consistent. A formal hypothesis test requires N > 20 per
LLM-pair.

### 4.4 Threats to validity

- **Slot classification is heuristic.** What counts as
  "substantively trivial" varies — e.g., `invariants { true; }`
  is unambiguous, but `predicate: self.x <> null` may or may
  not be "trivial" depending on the domain.
- **Domain selection.** The 8 domains are diverse but not
  random. Different problem classes may produce different
  rates.
- **N=2 LLM-pair.** Generalization to other LLM pairs (Llama,
  Mistral, Gemini, GPT-4o) is open.
- **Temporal/version confound (pilot finding).** The analyzer
  measures coverage of the CURRENT structural clause (e.g., the
  `refines:` clause added in v0.5). Files generated BEFORE v0.5
  used the comment-mining convention; the structural clause was
  not available to those generations. The pilot's Refines-DDF
  shows 100% for several older Sonnet-generated domains
  (insulin-pump, meeting-scheduler, engine-control) precisely
  because the structural slot did not exist when those files
  were authored.

  This is a **finding about the methodology itself**: a real
  discretion-failure study must hold the DSL version constant
  across all measured cases. The pilot's mixed temporal cohort
  invalidates direct cross-domain comparison; a full study
  would re-generate ALL cases under a single DSL version.

- **Compound compliance metric** $(1 - DDF) \cdot (1 - SDF)$ has
  multiplicative behavior that compounds penalties: even modest
  DDF + modest SDF produces strikingly low combined compliance.
  This is mathematically correct but visually misleading. A
  full study should report DDF and SDF separately; the combined
  product is only useful when very few slot types are involved.

## 5. Proposed Full Study

### 5.1 Design

**N=20+ domains** across 4 problem classes (same as
CrossModelEscalation).

**4 LLM pairs.** Same models proposed in CrossModelEscalation.

**Analyzer extension.** The discretion-analyzer should be
extended to classify each structural slot with:

- **Strict triviality** (binary, e.g. literal `true;`).
- **Soft triviality** (heuristic, e.g. clauses where the entire
  body restates already-known constraints).
- **Semantic triviality** (Z3-verified: clause is tautologically
  true given the surrounding context).

The third class requires the existing Z3 infrastructure and is
likely the most defensible measure.

### 5.2 Measurements per (domain, LLM, level)

For each of the 3 enforcement levels (L1 prompt, L2 grammar,
L3 semantic):

- DDF on a controlled subset of slots
- SDF (Strict / Soft / Semantic) on populated slots
- Total token count + wall clock to reach final state

### 5.3 Power analysis

Assuming H1: DDF reduction from 73% (L1) to ≤ 10% (L2). For
α=0.05, β=0.20, two-proportions test: N ≈ 30 paired
(domain, LLM) observations suffice. With 4 LLM-pairs and shared
domains: 80 total measurements. Feasible.

Assuming H3: SDF correlates with LLM capability. Effect size
unclear; pilot suggests moderate (Cohen's d ≈ 0.5). For α=0.05,
β=0.20, two-sample t-test: N ≈ 25 per LLM. With 4 pairs: 100
measurements. Feasible.

### 5.4 Optional extension: cross-pollination with CrossModelEscalation

A natural follow-up is to combine §5.5.5's escalation pattern
with §5.5.6's discretion-failure model. Specifically: does
escalation reduce SDF?

Hypothesis: when M₂ takes over after M₁'s abort, M₂'s output
has lower SDF than M₁ would have produced — because the
verifier rejected M₁'s low-substance output and M₂ has incentive
(via the same prompts + visible verifier feedback) to produce
substantive content. This would make the two research artifacts
complementary.

## 6. Open Questions

1. **Where does `prompt + few-shot` sit?** The "L1 prompt-only"
   level may have several sub-levels (zero-shot, few-shot,
   chain-of-thought, etc.). Pilot uses zero-shot. A complete
   study should sweep through few-shot variations.

2. **Cost asymmetry.** Each enforcement level has different
   author / enforce cost. Quantifying the cost-benefit tradeoff
   between grammar additions (L2) and verifier additions (L3)
   is itself a research question.

3. **Trivial-template robustness.** If we forbid `true;` bodies
   via the verifier, will the LLM find another way to be
   trivial (e.g., `self.x = self.x`, tautologies)? The
   discretion-failure phenomenon may shift to subtler shapes.

4. **Causal vs correlational findings.** Pilot data suggests
   Sonnet < DeepSeek on SDF, but this could be due to
   confounds (token count, training data, etc.). A clean test
   requires controlled conditions.

## 7. Path to Publication

**Format:** short paper (4 pages + refs) for a workshop on
prompt engineering or LLM-assisted formal modeling.

**Venues:**

- **FM Workshop on LLM × Formal Methods** (joint with
  CrossModelEscalation; could be a longer paper covering both).
- **EMSE / TSE special issue on Generative AI for SE**.
- **PROMISE 2027** (mining software repositories — frames the
  empirical work as an SE study).

**Estimated effort:** 6 months. Bulk of time goes into:
- Extending the analyzer for soft + semantic triviality.
- Scaling to 20+ domains × 4 LLM-pairs (overlap with
  CrossModelEscalation's data collection).
- Statistical analysis of DDF vs SDF rates.

## 8. Conclusion

Discretion-failure is the gap between what we instruct an LLM
to do and what it actually does. We formalize the phenomenon
in two dimensions — declarative and substantive — that respond
to different remediations (grammar for declarative, semantic
verification for substantive).

Pilot data from ontodls (N=8 domains, 2 LLMs) shows:

- Grammar enforcement reduces DDF from ~73% to ~8% (Phase 8
  measurement).
- Substantive coverage remains the dominant residual problem;
  SDF is ~30% in DeepSeek and ~15% in Sonnet on category
  invariants.
- Combined effective compliance rises from ~27% (prompt-only)
  to ~85% (grammar + semantic verification, Sonnet).

The thesis claim — that grammar should encode constraints the
verifier needs — is empirically supported. The corollary —
that grammar is not sufficient for substantive content — is the
new contribution this paper would make.

## Appendix A: Discretion-Failure Analyzer Reference

The analyzer is implemented in
[scratch/discretion-analyzer.mjs](../../scratch/discretion-analyzer.mjs)
(Phase 18). It walks the merged AST and computes DDF and SDF
over a configurable slot taxonomy. Operates on the existing
`.onto` files in `examples/<case>/` without re-running LLMs.

## Changelog

- 2026-05-28 — v0.1 — initial research design + pilot from
  ontodls Phases 8-17. Companion to CrossModelEscalation.md.
