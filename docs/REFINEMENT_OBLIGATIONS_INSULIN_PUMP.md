# Inter-stage refinement obligations — insulin pump case

> Empirical mapping of the **four refinement obligations** from
> `PATTERNS_SDLC.md` to concrete OCL goals derivable from the verified
> insulin pump `.onto` files in `examples/insulin_pump/`.
>
> This is the input spec for the inter-stage refinement verifier (Bloque 2).
> Each row below is a Z3 goal the verifier must discharge. Goals are
> grouped by obligation. Where a goal cannot yet be derived mechanically
> (e.g. because the qualified-name reference lives in a comment, not in
> structured AST), the gap is flagged with **[gap]** and a remediation note.

## Source files

All four are parse + multi-file semantic + Z3-verified intra-stage:

| Stage | File | Lines |
|---|---|---|
| Discovery     | [examples/insulin_pump/discovery.onto](../examples/insulin_pump/discovery.onto) | 257 |
| Requirements  | [examples/insulin_pump/requirements.onto](../examples/insulin_pump/requirements.onto) | 264 |
| Formalization | [examples/insulin_pump/formalization.onto](../examples/insulin_pump/formalization.onto) | 282 |
| Design        | [examples/insulin_pump/design.onto](../examples/insulin_pump/design.onto) | 492 |

## Convergence telemetry

Sonnet 4.6 + the corrected playbook, max 3 attempts/stage, rich diagnostics:

| Stage | Attempts to verified | Failure modes pre-convergence |
|---|---|---|
| discovery     | 2 | commitment header syntax (1×) |
| requirements  | 3 | `returns Real` vs `: Real` (1×), false S21 from single-file parse (1×) |
| formalization | 3 | empty `modifies: ;` (1×), S21/S13/S27 from missing `--resolve-imports` (1×) |
| design        | 2 | parse hiccup (1×) |

Each failure mode produced a one-line correction (system-prompt hard
rule or test-script flag) that lifted Sonnet's first-attempt success
rate measurably. No domain-specific tuning.

---

## Obligation 1 — Commitment discharge

For every `commitment` in stage N, there must exist an event in some
stage N+k (k ≥ 1) whose post-condition implies the commitment's
`predicate`. Z3 proves the implication.

### Discovery commitments → Requirements / Formalization events

| Discovery commitment | Predicate (raw OCL) | Discharged by (event) | Z3 goal |
|---|---|---|---|
| `CorrectDoseCommitment`  | `self.safeMaxDoseUnits > 0.0 and self.sensorReadingIntervalMin > 0.0 and self.sensorReadingIntervalMin <= 10.0` | `InsulinPumpSystem.deliverInsulin` post + invariant | `(result <= safeMaxDoseUnits) ∧ (safeMaxDoseUnits > 0) ∧ (sensorReadingIntervalMin ≤ 10) ⊨ predicate` |
| `FailSafeCommitment`     | `self.maxFaultResponseMinutes > 0.0 and self.maxFaultResponseMinutes <= 1.0` | `InsulinPumpSystem.haltOnFault` post: `self.maxFaultResponseMin > 0.0 and self.maxFaultResponseMin <= 1.0` | textually identical (modulo property rename `Minutes` → `Min`) |
| `PatientAlertCommitment` | `self.lowReservoirThresholdUnits > 0.0 and self.maxAlertLatencyMin > 0.0` | `InsulinPumpSystem` invariants: `self.lowReservoirThresholdUnits > 0.0` + `self.maxAlertLatencyMin > 0.0` | direct invariant match |
| `ClinicianConfigCommitment` | `self.configurableSafeMax = true` | `InsulinPumpSystem.configureSafeMax(newMaxUnits)` post: `self.safeMaxDoseUnits = newMaxUnits` | implicit — the *existence* of the configure event discharges configurability |

**Verifier work item.** The verifier must:
1. Walk every `commitment` declaration in stage N's AST.
2. Read the comment block `// refines: <ns>::<CommitmentName>` (or
   future: a structured `refines:` clause — see [gap] below) attached
   to each stage N+1 event.
3. For each (commitment, event) pair, build a Z3 query:
   `event.preconditions ∧ event.post ⊨ commitment.predicate`.
4. Report unsatisfied implications as W-class warnings, satisfied as
   `discharged: <commitment> by <event>` in the verification report.

**[gap]** *Structured traceability.* Today the link from event to
commitment lives only in a comment (`// Refines: …::CorrectDoseCommitment`).
The grammar needs a first-class `refines:` clause on events (or on the
kind itself listing event-to-commitment pairs) so the verifier can
discover the pairing without text-mining comments. Suggested syntax:
```onto
event deliverInsulin(...): Real
  refines insulin_pump_discovery::CorrectDoseCommitment {
    pre: ...;
    post: ...;
}
```
Failing that, a comment-mining fallback can use the regex
`refines:\s+([a-z_]+)::(\w+)` against any text preceding an event
declaration in the same block — fragile but workable for v0.

### Property renames between stages

The verifier must tolerate sortal renames between stages — the
commitment predicate uses `sensorReadingIntervalMin` and
`maxFaultResponseMinutes`, while the event invariants use the same
names *modulo* one suffix collision (`Minutes` vs `Min`). A
property-correspondence table is needed (see Obligation 4).

---

## Obligation 2 — Liskov subtyping across the boundary

When stage N+1 declares `subkind X specializes Y` and Y lives in stage
N, every event override and every new event must obey Liskov:
- **Pre weaker-or-equal**: `parent.pre ⊨ child.pre`
- **Post stronger-or-equal**: `child.post ⊨ parent.post`
- **Invariants**: `child.invariants ⊨ parent.invariants` (already
  enforced by S21 + intra-file Z3 today).

### Concrete pairs in this case

The only cross-stage specialization in this domain:

| Child (stage) | Parent (stage) | Override events | New events |
|---|---|---|---|
| `InsulinPumpSystemFormalized` (formalization) | `InsulinPumpSystem` (requirements) | *none — child only adds events* | `rejectOverdose`, `rejectNegativeDose`, `enforceFailSafe`, `rejectInvalidReading` |

Because the child adds events without overriding any parent event, the
Liskov *override* check has no work to do on this domain. The
verifier still must check:

1. **Parent-event preservation.** Every event declared on `InsulinPumpSystem`
   remains callable on `InsulinPumpSystemFormalized` with parent
   contracts intact. Z3 obligation: for each parent event E and child
   instance c: `E.pre[parent] ≡ E.pre[child]` (no narrowing).
2. **Invariant inheritance.** The child's invariants must imply the
   parent's. The verified file has `self.systemId <> null` only;
   needs to inherit `safeMaxDoseUnits > 0.0`, `reservoirUnits >= 0.0`,
   etc. Today S21 + the type-check infrastructure catches this
   intra-stage; it must extend cross-file.

### Design components vs Requirements system kind (NOT specialization)

Design declares four sibling components (`BloodSugarSensor`,
`PumpActuator`, `SafetyMonitor`, `AlertSystem`) — none of which
`specializes InsulinPumpSystem`. The relationship is **decomposition**,
not Liskov. This is the right modeling choice (components do not
substitute for the whole system) and means Obligation 2 has *no work
to do at the Design boundary*. Obligation 4 (property correspondence)
does the heavy lifting there instead.

**[gap]** *Phantom-override detection.* If a Design component declares
an event with the same name as a Requirements event (e.g. both have
`checkReservoir` — and they do: `InsulinPumpSystem.checkReservoir` and
`PumpActuator.checkReservoir`), the verifier should NOT silently
assume it's a Liskov override. Without an explicit `override` keyword
+ a `refines:` clause, the verifier must treat them as independent
events and instead route them through Obligation 4's
property-correspondence table. Today this is ambiguous; the v0
verifier should warn on name collisions across stages.

---

## Obligation 3 — Invariant inheritance via category membership

When a stage N+1 kind is declared `memberOf` a stage N `category`, the
kind's invariants must imply the category's invariants.

### Discovery categories → Requirements/Formalization kinds

The Discovery file declares three constraint-goal categories
(`DoseSafetyConstraints`, `FailSafeConstraints`, `AlertConstraints`)
with placeholder invariants (`true;`). Per the playbook these were
expected to gain concrete OCL once the bearer (the system kind) was
declared in Requirements. Sonnet's Requirements output instead encoded
the constraints **directly as invariants on `InsulinPumpSystem`** and
omitted the explicit `<<memberOf>>` link.

This is functionally equivalent (the invariants ARE enforced) but
breaks the traceability path the verifier needs. Two repair options:

| Option | Pros | Cons |
|---|---|---|
| **A.** Add `<<memberOf>>` relations from `InsulinPumpSystem` to each constraint category. | Restores the structural link; no semantic change. | Categories still have `true;` invariants — verifier has nothing to prove. |
| **B.** Move the actual OCL into the Discovery categories' invariants (once we know the bearer's property names from Requirements). | Concrete obligations live where they belong; Z3 has real goals. | Discovery file mentions Requirements-stage property names → leaks downstream vocabulary upward, violating the playbook's "Discovery doesn't know about system kind" rule. |

**Recommendation: Option A**, augmented with a verifier rule that
when a category's invariants are `true;`, treat it as a **labeled
goal** — the verifier checks that the kind has invariants tagged
(via comments or a sibling list) as "discharging" the category. This
matches the documentary nature of regulatory categories in
Formalization, which are also `true;` by design (their content is
in the body's comments, not their invariants).

### Formalization regulatory categories → Design components

The Formalization file declares five categories:
`FdaCleared`, `Iec62304ClassC`, `Iso14971RiskManaged`,
`PhysicallyPlausibleReadings`, `GlucosePhysiology`. The first three
have **documentary invariants** that constrain *project state*, not
runtime state (e.g. `self.deviceClass = 'II'`). Per the playbook,
these are passive labels — verifier action: ensure each Design
component touching patient-affecting state references at least one
regulatory category in a `<<memberOf>>` relation. Today the Design
file does NOT declare these `<<memberOf>>` relations; this is a
verified gap.

**[gap]** *Regulatory-anchor coverage.* The verifier should compute,
for each Formalization regulatory category, the set of Design
components that should be members and emit a warning if any are
missing. Concrete rule for this domain: every component whose events
modify any `safeMaxDoseUnits`, `lastDoseDelivered`, `reservoirUnits`,
or `faultDetected` property must be a member of `Iec62304ClassC`.

The two **physical** categories (`PhysicallyPlausibleReadings`,
`GlucosePhysiology`) have real OCL invariants:
- `PhysicallyPlausibleReadings.minPlausibleMgDl = 0.0` and
  `maxPlausibleMgDl = 1000.0`.
- `GlucosePhysiology` mass-conservation invariants.

The Design's `BloodSugarSensor` kind enforces the
plausibility bounds inline:
```onto
self.minPlausibleMgDl = 0.0;
self.maxPlausibleMgDl = 1000.0;
self.readingValid implies
  (self.lastReadingMgDl >= self.minPlausibleMgDl
   and self.lastReadingMgDl <= self.maxPlausibleMgDl);
```

These invariants textually match `PhysicallyPlausibleReadings`'s
intent but the file does **not** declare
`BloodSugarSensor <<memberOf>> PhysicallyPlausibleReadings`. The
verifier should:
1. Parse all category invariants.
2. For each kind, attempt to match each category's invariants against
   the kind's invariants by Z3 implication.
3. Emit `suggested membership: <Kind> ∈ <Category>` for high-confidence
   matches.

---

## Obligation 4 — Property correspondence (decomposition closure)

When stage N+1 decomposes a stage N system kind into components, the
union of components' properties must cover the parent's properties,
and the union of components' `modifies` clauses must cover the
parent's `modifies` clauses.

### Property partition for this case

`InsulinPumpSystem` declares 14 properties. The Design components
should jointly cover them. Here is the empirical partition extracted
from the four kinds:

| `InsulinPumpSystem` property | Owning component(s) | Status |
|---|---|---|
| `systemId`                       | *(no component carries it — the system identity is implicit in the assembly)* | **[gap]** |
| `isOperating`                    | `PumpActuator.isOperating` + `SafetyMonitor.haltCommanded` | covered (dual encoding) |
| `faultDetected`                  | `SafetyMonitor.faultDetected` | covered |
| `safeMaxDoseUnits`               | `PumpActuator.safeMaxDoseUnits` | covered |
| `lastDoseDelivered`              | `PumpActuator.lastDoseDelivered` | covered |
| `currentBloodSugarMgDl`          | `BloodSugarSensor.lastReadingMgDl` | covered (rename: `current…MgDl` → `lastReading…`) |
| `bloodSugarRateMgDlPerMin`       | *(absent)* | **[gap]** — design doesn't carry rate-of-rise |
| `reservoirUnits`                 | `PumpActuator.reservoirUnits` | covered |
| `reservoirCapacityUnits`         | `PumpActuator.reservoirCapacityUnits` | covered |
| `lowReservoirThresholdUnits`     | `PumpActuator.lowReservoirThresholdUnits` | covered |
| `reservoirIsLow`                 | `PumpActuator.reservoirIsLow` (or computed by `checkReservoir`) | covered |
| `alarmActive`                    | `AlertSystem.alarmActive` | covered |
| `alarmReason`                    | `AlertSystem.alarmReason` | covered |
| `sensorReadingIntervalMin` (NFR) | `BloodSugarSensor.readingTimestampMin` (proxy) | **[gap]** — interval-as-property doesn't survive |
| `selfTestPeriodMin` (NFR)        | `SafetyMonitor.selfTestPeriodMin` *(implicit)* | unclear; need explicit declaration |
| `maxFaultResponseMin` (NFR)      | *(absent)* | **[gap]** — fault-response budget not in Design |
| `maxAlertLatencyMin` (NFR)       | *(absent)* | **[gap]** — alert-latency budget not in Design |

Three of the four [gap]s are NFR/quality properties (timing budgets
and rate-of-rise). The verifier should distinguish:
- **State properties** that *must* appear in some component (hard
  failure if missing).
- **Quality properties** (timing budgets, thresholds) that *should*
  appear either inline on a component or as a shared `quality of <Bearer>`
  declaration (warning if missing).

### Modifies-clause closure

For each Requirements event E and the set of Design events that
implement it (linked by `refines:` comment), the verifier must check:

```
modifies(E)  ⊆  ⋃ modifies(D)  for D ∈ refines⁻¹(E)
```

Example for `InsulinPumpSystem.deliverInsulin`:
- `modifies: self.reservoirUnits, self.lastDoseDelivered, self.currentBloodSugarMgDl, self.bloodSugarRateMgDlPerMin`
- Design implementers (from `refines:` comments):
  - `BloodSugarSensor.takeReading` modifies `lastReadingMgDl, readingTimestampMin, readingValid`
  - `PumpActuator.deliverDose` modifies `reservoirUnits, lastDoseDelivered, isDelivering`

Coverage check (modulo rename):
- `reservoirUnits` ✓ (PumpActuator)
- `lastDoseDelivered` ✓ (PumpActuator)
- `currentBloodSugarMgDl` ↔ `lastReadingMgDl` ✓ (BloodSugarSensor)
- `bloodSugarRateMgDlPerMin` ✗ (no component modifies it; this is
  the [gap] from the property partition)

The verifier should output:
```
[O4] InsulinPumpSystem.deliverInsulin modifies bloodSugarRateMgDlPerMin
     but no Design implementer modifies it (or a renamed correspondent).
     Suggestion: declare a quality property on BloodSugarSensor or omit
     the modifies clause if rate-of-rise is now computed downstream.
```

---

## Summary: what the inter-stage verifier needs to be built

Five concrete pieces, in priority order:

1. **Multi-file AST loader** that produces a single combined symbol
   table tagged by stage (use `--resolve-imports` infrastructure).
2. **Comment-mining for `refines:` annotations** (v0) → plan for a
   first-class `refines:` clause in v1.
3. **Z3 implication driver** that, given two OCL expressions in the
   combined symbol table, queries Z3 for `lhs ⊨ rhs` modulo property
   renames captured in a per-stage rename table.
4. **Coverage analyses** for Obligations 3 (category membership) and
   4 (property + modifies closure), with classification of properties
   into state vs quality.
5. **Diagnostic format** matching the W## convention from
   `lspCheck.ts` (W34 for commitment-discharge fail, W35 for Liskov
   cross-file fail, W36 for category-membership fail, W37 for
   property-correspondence fail).

All five are scoped to ~2 weeks of focused work on top of the existing
intra-stage Z3 infrastructure. The insulin pump case above is the
ground-truth fixture for each piece.

## What this experiment validated empirically

- The five-stage playbook *can be followed* by an LLM with the
  corrected syntax notes. 4/4 stages converged in ≤3 attempts.
- The two-tier validation (single-file parse for syntax,
  multi-file `--resolve-imports` for semantic+Z3) is the right
  separation of concerns.
- The four refinement obligations from the playbook are concretely
  derivable from the four stage `.onto` files — none of them are
  vapor. Each has identifiable Z3 goals that the v0 verifier must
  discharge.
- Comment-based traceability (`// Refines: ns::Commitment`) is the
  *de facto* mechanism Sonnet uses without prompting. Promoting it to
  a first-class grammar feature is a low-risk, high-value increment.

## Changelog

- 2026-05-27 — v0.1 — initial analysis derived from the verified
  insulin-pump 4-stage `.onto` set. Pending: re-derive against a
  second domain (banking / Meeting Scheduler) to confirm the
  obligations and gaps generalize.
