# SDLC playbook — cross-domain empirical validation

> Tests whether `docs/PATTERNS_SDLC.md` produces verified-by-Z3 `.onto`
> across **two domains from different problem classes**:
>
> - **insulin pump** (van Lamsweerde's Sommerville case) — safety-critical
>   embedded control system. Medical regulatory anchors (FDA, IEC 62304).
> - **meeting scheduler** (van Lamsweerde's canonical RE benchmark) —
>   information system with goal-oriented requirements. Compliance
>   anchors (GDPR, ISO/IEC 25010).
>
> Same playbook, same generator script (`scratch/sdlc-playbook-test.mjs`),
> same prompt, same model (Sonnet 4.6). Only the gold case input changed.

## Result table

| Stage | Insulin pump attempts | Meeting scheduler attempts | Insulin lines | Meeting lines |
|---|---:|---:|---:|---:|
| Discovery     | 2 | 2 | 257 | 246 |
| Requirements  | 3 | 2 | 264 | 300 |
| Formalization | 3 | 2 | 282 | 325 |
| Design        | 2 | 1 | 492 | 594 |
| **Total**     | **10** | **7** | **1295** | **1465** |

Both cases produced **4/4 verified stages** with `parse + multi-file
semantic + Z3 LSP`. Meeting Scheduler **converged faster** despite
being further from the LLM's likely training distribution for the
ontodls DSL (no medical/embedded examples in the reference set).

## Per-stage observations

### Discovery

Both domains used the same Discovery pattern:
- Stakeholders as `agent` kinds (Patient/Clinician vs Initiator/Participant).
- Vendor as a separate agent (`PumpVendor` vs `MeetingSchedulerVendor`)
  to be the debitor of every commitment.
- Glossary terms as `kind` (BloodSugarReading/SafeZone vs
  DateRange/ExclusionSet/PreferenceSet/SchedulingRequest).
- Constraint goals as `category` with placeholder `true;` invariants
  (DoseSafetyConstraints/FailSafeConstraints vs ExclusionRespected/
  InitiatorAlwaysInformed).
- Hard goals as `commitment` with `predicate:` clauses bounded by the
  commitment's own numeric thresholds.
- Domain stories as `happening`.

The structural recipe is identical across both domains. The
**predicate-numeric-threshold trick** (turn the hard goal's
unverifiable English into a checkable `self.<numericProp> > 0.0`)
worked uniformly — the LLM picked sensible domain-appropriate
thresholds without prompting (`safeMaxDoseUnits` vs `minCandidateDates`).

### Requirements

Same pattern in both:
- One system kind specializing the discovery categories.
- 6 events on the system kind, each commented with `// refines:
  <case>_discovery::<CommitmentName>`.
- Domain-appropriate parameters and OCL invariants on the kind.
- Inline `Real`/`Integer` properties for NFRs (the `quality` stereotype
  with `of <Bearer>` is overkill for scalar bounds).

Notable: Meeting Scheduler converged in **one fewer attempt** than
insulin pump, suggesting the cumulative fixes (return-type, empty
modifies, commitment header) are domain-independent.

### Formalization

Both files showed the same architectural shape:
- Regulatory categories with documentary invariants
  (FdaCleared/Iec62304ClassC/Iso14971RiskManaged vs
  GdprArticle5Compliant/Iso25010ReliabilityCompliant).
- Domain-logical categories with real invariants
  (PhysicallyPlausibleReadings/GlucosePhysiology vs … the meeting
  scheduler equivalent is `OneRequestPerInitiator` and
  `MonotonicConstraintAcceptance`).
- A `subkind XSystemFormalized specializes XSystem` that adds 4–6
  rejection / guard events without overriding parent events.
- A `FormalAssumptionRecord` kind documenting passive assumptions.

**Self-correcting LLM behavior.** During attempt 1 the meeting scheduler
output failed with `[S24] <<memberOf>> target must be a sortal:
categories are NOT sortals`. The repair prompt fed the diagnostic
back, and attempt 2's preamble includes:
> Fix notes (v2): [S24] `<<memberOf>>` target must be a sortal:
> categories are NOT sortals. Membership relations to categories are
> expressed via the `specializes` clause on the kind/subkind
> declaration, not via explicit `<<memberOf>>` relations.

The LLM didn't just re-emit the file — it **internalized the rule
and documented it as a header comment** so future generations stay
consistent. This is the kind of self-improving artifact that makes
the playbook accumulate domain wisdom over time.

### Design

Both decompose into 4 sibling component `kind`s (NOT subkinds of the
system — encapsulation discipline preserved):

| Insulin pump components | Meeting scheduler components |
|---|---|
| BloodSugarSensor   | RequestManager |
| PumpActuator       | ConstraintAggregator |
| SafetyMonitor      | DateSelector |
| AlertSystem        | NotificationDispatcher |

Both files use `relator` kinds for inter-component channels
(SensorToMonitorChannel/MonitorToActuatorChannel vs ConstraintChannel/
SelectionChannel/NotificationChannel) and end-to-end `happening`s
for data flows.

Meeting Scheduler's design converged in **one attempt** — first try,
clean Z3. This is the strongest single piece of evidence that the
playbook crystallized.

## What was fixed during the experiment (universal, NOT domain-specific)

Five system-prompt / script fixes, in chronological order of discovery:

| # | Fix | Where | What it cured |
|---|---|---|---|
| 1 | `commitment` header syntax (`debitor:`/`creditor:` outside braces) | playbook + system prompt | DebitorKw parse error |
| 2 | Event return type uses `:` not `returns` keyword | system prompt | `Expecting LBrace but found 'returns'` |
| 3 | Empty `modifies: ;` is invalid; omit clause if no modifications | system prompt | `Expecting [SelfKw] [Identifier] but found ';'` |
| 4 | Prose-preamble stripper recognizes meta-commentary on line 1 | `stripFences` | LLM leaks diagnostic text into output |
| 5 | CLI must run with `--resolve-imports` to see cross-stage symbols | `runZ3` | False S21/S23 from missing transitive imports |

None of the fixes are domain-specific. Every one of them generalized
from insulin-pump-discovery to meeting-scheduler-design without
further modification.

## What this validates

1. **The playbook is universal**, not insulin-specific. The
   stereotype-to-artifact mapping at each stage produced verified
   `.onto` for both a safety-critical control system AND an
   information-system requirements case.
2. **The 5 cumulative fixes are universal rules**, not patches for
   a single domain. They reflect actual grammar / semantic
   constraints that any LLM-generated `.onto` must satisfy.
3. **Sonnet 4.6 reliably converges in ≤3 attempts** with the
   corrected playbook and rich diagnostics. 17 attempts across 8
   stage-generations, 100% verification rate.
4. **Cross-stage `import + --resolve-imports` works**. Both cases
   declared 3-deep import chains (design imports formalization
   imports requirements imports discovery) and the multi-file CLI
   resolved them correctly.

## What this does NOT yet validate

- **Cross-stage refinement** (Obligations 1–4 from
  `REFINEMENT_OBLIGATIONS_INSULIN_PUMP.md`). Each stage is verified
  intra-stage; the proof that stage N+1 actually refines stage N
  still requires the Bloque 2 verifier to be built.
- **Code stage** is reused from `examples/ardupilot_lowpass.onto`
  pattern in both cases — neither domain emitted a Code-stage `.onto`
  in this experiment.
- **Generalization beyond 2 domains.** Two is the minimum for a
  pattern claim. A third domain (e.g. the FADEC engine-control case
  from `engine-control.json`) would be the next natural test if
  doubt remains.

## Next step recommendation

With two domains verified end-to-end, the **risk of building Bloque 2
(inter-stage refinement verifier) on flawed playbook assumptions is
now low**. The natural next move is to start Bloque 2, using:

- **Both** verified domains as test fixtures (more coverage than
  insulin alone).
- The four obligations from `REFINEMENT_OBLIGATIONS_INSULIN_PUMP.md`
  as the v0 spec.
- Priority order: Obligation 1 (commitment discharge) → Obligation 2
  (Liskov cross-file) → Obligation 4 (property correspondence) →
  Obligation 3 (category membership), because Obligation 1's
  comment-mining-based discovery is the prerequisite for the others.

A reasonable v0 scope is **just Obligation 1 + comment-mining for
`refines:` annotations**, which would be a single concrete proof
that the playbook → Z3 → "stage N+1 honors every commitment of
stage N" chain can be closed automatically.

## Changelog

- 2026-05-27 — v0.1 — initial cross-domain validation. Two cases, 4
  stages each, all verified. Five universal fixes documented. Bloque 2
  is the recommended next investment.
