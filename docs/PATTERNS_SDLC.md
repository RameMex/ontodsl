# `.onto` patterns for the SDLC

> Playbook: how to model each lifecycle stage in `.onto`, which UFO-A
> stereotypes to use, and what Z3 must verify between stages.
>
> Audience: ontodls authors and the LLM autoformalizer. This document is
> the ground truth for "how to write a stage's `.onto`." Future versions
> of the autoformalizer prompt cite this file as its modeling guide.

## Why this exists

The ontodls system can express **any** artifact of the System Development
Lifecycle in a single canonical format. But "can express" is not the
same as "knows how to express well." Without a documented pattern per
stage, every author (human or LLM) reinvents the mapping, and the
refinement relation between stages becomes ad-hoc.

This playbook fixes that. It defines:

1. **Which UFO-A stereotypes a stage uses** for each artifact kind.
2. **What pre/post/invariant patterns are canonical** at that stage.
3. **What refinement obligation the next stage must satisfy**, in terms
   Z3 can verify (Liskov-Wing behavioral subtyping + commitment
   discharge).

A `.onto` that follows these patterns is verified intra-stage (already
working in ontodls today). When every stage follows the patterns, an
**inter-stage refinement verifier** (to be added; see `RFC_INTER_STAGE.md`)
can prove that stage N+1 honors every commitment of stage N.

## The five stages

```
Discovery       — problem space: who, why, what world
Requirements    — system-as-black-box behavior
Formalization   — disambiguation + regulatory anchors
Design          — architecture: components and interfaces
Code            — implementation-level model (where ontodls is mature)
```

Each stage produces ONE or MORE `.onto` files. The convention is:

```
domain/
  discovery.onto
  requirements.onto
  formalization.onto
  design.onto
  code/<module>.onto
```

Files import each other via the existing multi-file mechanism so
downstream stages can reference upstream kinds by qualified name.

---

## Stage 1 — Discovery

**Purpose.** Capture the problem space: who has stakes, what the world
imposes, what the system must achieve, what vocabulary the domain uses,
what flows matter.

**Artifact → stereotype mapping.**

| Discovery artifact         | UFO-A stereotype | Notes |
|---|---|---|
| Stakeholder                | `agent`          | Each stakeholder is an Agent with identity. Role properties (responsibility, influence) attach as properties. |
| The vendor/dev team        | `agent`          | A separate agent representing whoever owes the commitments to stakeholders (the system doesn't exist yet as a kind). Common names: `<Domain>Vendor`, `<Domain>Provider`, `<Domain>Team`. |
| Stakeholder concern        | `commitment`     | The concern is what the stakeholder expects the vendor to honor. Modeled as a commitment FROM `<Domain>Vendor` (debitor) TO the stakeholder agent (creditor). |
| Vision statement           | top-level `commitment` from vendor to a representative stakeholder | The vendor commits to achieving the vision. |
| Hard goal (must achieve)   | `commitment` with `predicate:` clause          | Goal is discharged when a downstream event's post implies the predicate. |
| Soft goal (preference)     | `quality` attribute + invariant with tolerance | Modeled as a numeric quality the system optimizes within bounds. |
| Constraint goal            | `category` with `invariants`                   | Requirements-stage system kind specializes this category and inherits the invariants. |
| Glossary term              | `kind` or `subkind`                            | Establishes the sortal lineage of the domain. Defines identity. |
| Domain story (flow)        | `happening`                                    | A perdurant that occurs over time. Steps become sub-`happening`s ordered by time. |

**Critical syntax — commitment header is NOT body-style:**

The `commitment` declaration uses a **header with `debitor:` and `creditor:`
clauses** OUTSIDE the braces. Inside the braces you may use the usual
type-member vocabulary (identity, property, invariants) AND a special
`predicate: <ocl-boolean-expr>;` clause for the formal discharge obligation.

```onto
commitment <Name> (specializes <Parent>)?
  debitor: <AgentIdentifier>
  creditor: <AgentIdentifier> {
    identity: <propName>;
    property <propName>: String;
    // optional descriptive properties …
    predicate: <ocl-boolean-expression>;
  }
```

`debitor:` and `creditor:` MUST be Identifiers that resolve to declared
`agent` (or `kind`) names. Storing them as String properties inside the
body is wrong — they belong in the header.

**Canonical pre/post patterns at Discovery:**

- Stakeholders typically have NO events (they are agents, not the system).
  Events live on the system kinds they interact with.
- Commitments use a `predicate:` clause with a Boolean OCL expression —
  a Z3-checkable clause that the next stage must prove is implied by
  some system event's post-condition. `self.<prop>` inside the predicate
  references the commitment's own properties.
- Domain stories use `triggeredBy` and `outcome` properties (Strings) plus
  invariants documenting what fires the story and what state it ends in.

**Example fragment** (insulin pump domain):

```onto
schema "onto/0.1";
namespace insulin_pump_discovery;

// ─── Stakeholders ───────────────────────────────────────────────────
agent Patient {
  identity: patientId;
  property patientId: String;
  property hasDiabetes: Boolean;
  invariants {
    self.patientId <> null;
  }
}

agent Clinician {
  identity: clinicianId;
  property clinicianId: String;
  property certification: String;
}

// The dev team / vendor — debitor of every stakeholder commitment.
// The system kind that will fulfill these commitments does not exist
// yet at Discovery; the vendor (the org promising to build it) does.
agent PumpVendor {
  identity: vendorId;
  property vendorId: String;
  property name: String;
}

// ─── Hard goal: dose safety ──────────────────────────────────────────
// The predicate is a Boolean OCL expression — at Discovery it can only
// reference the commitment's own properties, so we capture the
// machine-checkable threshold here and document the full obligation in
// the comment. The Requirements stage event's post-condition must imply
// this predicate (Z3 will prove the implication).
commitment SafeDoseCommitment
  debitor: PumpVendor
  creditor: Patient {
    identity: commitmentId;
    property commitmentId: String;
    property safeMaxDoseUnits: Real;
    predicate: self.safeMaxDoseUnits > 0.0;
  }

// ─── Constraint goal (becomes invariant on system kind) ──────────────
category SafetyConstraints {
  // Will be referenced by the system kind in Requirements as a
  // category it specializes / inherits invariants from.
  invariants {
    // "the single insulin dose delivered shall never exceed safeMax"
    // expressed as a constraint that any system kind in this category
    // must enforce.
    true;  // placeholder; concrete invariants attach to the system kind
           // in Requirements once the bearer is defined.
  }
}

// ─── Domain story ────────────────────────────────────────────────────
happening DoseDeliveryFlow {
  property flowId: String;
  property triggeredBy: String;  // ref to event that starts the flow
  property outcome: String;       // OCL predicate describing end state
  invariants {
    self.flowId <> null;
  }
}
```

**Refinement obligation for Requirements:** every `commitment` declared
here must have a corresponding event in the Requirements `.onto` whose
post-condition **implies** the commitment's `predicate`. Z3 will
discharge this proof.

---

## Stage 2 — Requirements

**Purpose.** Specify the system-as-black-box: what events it supports,
what each event's contract is, what invariants hold across all states.

**Artifact → stereotype mapping.**

| Requirements artifact      | UFO-A stereotype | Notes |
|---|---|---|
| The System (as boundary)   | `kind`           | The top-level kind whose events ARE the FRs. |
| Functional requirement     | `event` on the system kind | EARS-style FR becomes an event with pre/post/modifies. |
| Non-functional requirement | `quality` property + `invariant` | Performance, security, reliability as numeric/categorical qualities the system holds. |
| Acceptance criterion       | `pre`/`post` clause on an event | Concrete values turn AC into machine-checkable contract. |
| External actor             | `role` (mediated by a `relator`) | The patient-using-the-pump becomes a role mediated by a UseSession relator. |
| Use case                   | `useCase`                        | Aggregates a set of related events on the system kind. |

**Canonical pre/post patterns at Requirements:**

- System events should never reference internal implementation state —
  only properties of the system kind that survive into Design.
- Pre-conditions describe required state of the system + inputs.
- Post-conditions describe state change in terms of system properties.
- `@pre` is used for state-before in post-conditions.
- `modifies:` is exhaustive — anything not listed MUST be unchanged.

**Example fragment** (continuation of insulin pump):

```onto
schema "onto/0.1";
namespace insulin_pump_requirements;
import "./discovery.onto";

// The system kind — events are the FRs.
kind InsulinPumpSystem specializes SafetyConstraints {
  identity: systemId;
  property systemId: String;
  property safeMaxDose: Real;       // the threshold; quality attribute
  property reservoirUnits: Real;
  property currentBloodSugar: Real;
  property isOperating: Boolean;
  property faultDetected: Boolean;

  invariants {
    self.systemId <> null;
    self.safeMaxDose > 0.0;
    self.reservoirUnits >= 0.0;
  }

  // FR-1 (formalized): when blood sugar is rising, deliver insulin
  // proportional, bounded by safeMaxDose. The `refines:` clause is
  // the FIRST-CLASS traceability mechanism — the inter-stage verifier
  // consumes it directly from the AST.
  event deliverInsulin(sugar: Real, rate: Real): Real
    refines insulin_pump_discovery::SafeDoseCommitment {
    pre: self.isOperating = true;
    pre: not self.faultDetected;
    pre: sugar >= 0.0;
    pre: rate >= 0.0;
    post: result <= self.safeMaxDose;           // discharges commitment
    post: self.reservoirUnits = self.reservoirUnits@pre - result;
    modifies: self.reservoirUnits;
  }

  // FR-2: hardware fault detection halts delivery + sounds alarm.
  event detectFault() {
    pre: not self.faultDetected;
    post: self.faultDetected = true;
    post: self.isOperating = false;
    modifies: self.faultDetected, self.isOperating;
  }
}
```

**Refinement obligation for Design:** every event on the system kind
here must have a corresponding event (possibly across multiple
components) in the Design `.onto` whose composition produces the same
contract — same or weaker pre, same or stronger post (Liskov-Wing).

---

## Stage 3 — Formalization

**Purpose.** Disambiguate the requirements against external anchors:
regulations, standards, physical laws. This is the "PEGS Environment"
layer made explicit.

**Artifact → stereotype mapping.**

| Formalization artifact      | UFO-A stereotype | Notes |
|---|---|---|
| Regulatory anchor            | `category`       | A category to which entities belong (FDA, GDPR, DORA). Forces invariants from the regulation. |
| External constraint (passive) | `mode` on a category | A passive property the world imposes. Does NOT become an event. |
| Business rule (active)        | `event` with `unwanted` pattern | If condition X holds, system shall reject Y. |
| Assumption (passive)          | property annotation `@assumption` | Documented in property comment; not enforced at runtime. |
| Invariant (always true)       | `invariants { }` block on a `category` | All instances of the category satisfy. |
| Glossary disambiguation       | `subkind` with explicit distinctions | When the domain conflates two concepts, formalization splits them. |

**Why this stage exists separately:** Requirements specifies what the
system does; Formalization specifies what the world imposes ON the
system. Conflating them produces wrong code (e.g., trying to "implement"
a regulatory submission process at runtime).

**Example fragment:**

```onto
schema "onto/0.1";
namespace insulin_pump_formalization;
import "./requirements.onto";

// ─── Regulatory anchor: FDA 510(k) ──────────────────────────────────
category FdaCleared {
  property fda510kNumber: String;
  property indicationsForUse: String;
  invariants {
    // Passive — governs the project, NOT the runtime system.
    // The annotation is documentary; the system code does not enforce.
    self.fda510kNumber <> null;
  }
}

// ─── Active business rule: dose cap (was implicit invariant) ────────
// Promote to an event for runtime enforcement.
event RejectOverdose on InsulinPumpSystem(requestedDose: Real) {
  pre: requestedDose > self.safeMaxDose;
  post: requestedDose@pre > self.safeMaxDose;  // post-state: rejected
  modifies: ;  // no state change — pure rejection
}

// ─── Physical invariant ─────────────────────────────────────────────
category PhysicallyPlausible {
  invariants {
    // Blood sugar readings are non-negative — physical law, not policy.
    // The system rejects readings outside [0, 1000] mg/dL.
    true;  // attached to InsulinPumpSystem via category membership
  }
}
```

**Refinement obligation for Design:** any Design component that touches
data labeled as `FdaCleared` must preserve that label. Z3 verifies the
preservation as a category-conservation property.

---

## Stage 4 — Design

**Purpose.** Decompose the system kind into components and the
interfaces between them. Each component honors a sub-contract of the
system's contract.

**Artifact → stereotype mapping.**

| Design artifact          | UFO-A stereotype | Notes |
|---|---|---|
| Component                | `kind` or `subkind` of the system kind | Each component is a Kind. |
| Interface                | `relator` (mediates the components it connects) | Captures the contract between components. |
| Data flow                | `happening` between components | A perdurant ordered in time. |
| Architectural decision (ADR) | `commitment` with `rationale` property | The design team commits to a structure; rationale is traceable. |
| Sub-system               | `subkind` specializing the parent system kind | Each subkind inherits and may strengthen contracts. |
| External dependency      | `agent` outside the system | Modeled like discovery stakeholders. |

**Canonical pre/post patterns at Design:**

- Component events must have pre weaker-or-equal AND post stronger-or-equal
  than the system event they implement (Liskov-Wing).
- Relator (interface) invariants capture the contract between two
  components — both must honor.
- A component event modifies ONLY the component's own properties
  (encapsulation).

**Example fragment:**

```onto
schema "onto/0.1";
namespace insulin_pump_design;
import "./requirements.onto";

// Sensor component
kind BloodSugarSensor {
  identity: sensorId;
  property sensorId: String;
  property lastReading: Real;
  property valid: Boolean;
  invariants {
    self.sensorId <> null;
  }
  event takeReading(value: Real) {
    pre: value >= 0.0;
    post: self.lastReading = value;
    post: self.valid = true;
    modifies: self.lastReading, self.valid;
  }
}

// Pump component
kind PumpActuator {
  identity: actuatorId;
  property actuatorId: String;
  property reservoirUnits: Real;
  property delivering: Boolean;
  invariants {
    self.actuatorId <> null;
    self.reservoirUnits >= 0.0;
  }
  event deliver(dose: Real) {
    pre: dose > 0.0;
    pre: self.reservoirUnits >= dose;
    pre: not self.delivering;
    post: self.reservoirUnits = self.reservoirUnits@pre - dose;
    post: self.delivering = true;
    modifies: self.reservoirUnits, self.delivering;
  }
}

// Interface (relator) between sensor and controller
relator SensorChannel mediates (BloodSugarSensor, InsulinPumpSystem) {
  identity: channelId;
  property channelId: String;
  property maxLatencyMs: Integer;
  invariants {
    self.channelId <> null;
    self.maxLatencyMs > 0;
  }
}
```

**Refinement obligation for Code:** each Design component kind must have
a corresponding code-level `.onto` whose events refine the Design events
contract-by-contract (LSP intra-kind), and whose runtime DbC wrappers
enforce the pre/post at runtime.

---

## Stage 5 — Code

**Purpose.** Implementation-level model. This is where ontodls is
already mature today (ardupilot examples). Concrete data types, exact
OCL invariants, methods with pre/post that become runtime guards in the
generated TS/Rust/C/Cedar/Rego.

**Artifact → stereotype mapping.** Same as Design but **with full
implementation fidelity**: every property has a concrete type, every
event has full pre/post in OCL operating on actual fields, every invariant
is decidable.

**The reference for this stage IS `examples/ardupilot_lowpass.onto`** —
study it as the ground truth. The LSP comments in that file
(`// LSP rule: precondition of this apply MUST be weaker-or-equal than
the parent's apply_internal`) demonstrate the refinement discipline this
stage requires.

**Refinement obligation: none downstream** — code is the leaf. But it
must close the loop: every event must trace back through Design →
Requirements → Discovery, and every regulatory anchor from
Formalization must have a code-level enforcement (or a documented
passive label).

---

## Inter-stage refinement verifier (the missing infra)

The intra-stage verifier (parse + semantic + Z3 LSP) already exists.
The **inter-stage** verifier — proving that stage N+1 refines stage N —
does NOT yet exist in ontodls. It is the largest single piece of
infrastructure that this thesis requires.

It needs to verify, for each pair (stage N file, stage N+1 file):

1. **Commitment discharge.** Every `commitment` declared in stage N
   has, in stage N+1, an event whose post-condition implies the
   commitment's `dischargeCondition` (Z3 proves the implication).

2. **Liskov subtyping across the boundary.** When a stage N+1 kind
   `specializes` a stage N kind, every event override must have
   weaker-or-equal pre and stronger-or-equal post (already implemented
   intra-file in `lspCheck.ts`; needs extension to cross-file).

3. **Invariant inheritance.** When a stage N+1 kind is a member of a
   stage N+1 `category` declared in stage N (typically the
   Formalization regulatory categories), the kind's invariants must
   imply the category's invariants.

4. **Property correspondence.** Every property declared on a stage N
   system kind that survives into stage N+1 (Design components) must
   appear in at least one component, and the union of components'
   modifies-clauses must be at least as large as the system-level
   modifies. (Otherwise the decomposition loses behavior.)

These four checks are the **formal core of the thesis claim** that
ontodls provides end-to-end SDLC verification.

## First-class `refines:` clause (Phase 18 v0.5)

The grammar now accepts a structured `refines` clause on event
declarations, replacing the comment-based annotation convention:

```onto
event deliverInsulin(sugar: Real, rate: Real): Real
  refines insulin_pump_discovery::CorrectDoseCommitment,
          insulin_pump_requirements::InsulinPumpSystem.deliverInsulin {
  pre: …;
  post: …;
}
```

Two accepted target shapes:

| Shape | Meaning | Used by |
|---|---|---|
| `<ns>::<CommitmentName>` | commitment-discharge edge | Obligation 1 (W34, S34) |
| `<ns>::<ParentType>.<eventName>` | Liskov / decomposition edge | Obligation 2 (W37) and 4 (W38, W39) |

The Bloque 2 verifier prefers AST-level refines targets when present
and falls back to comment-mining when they are not. This means
existing comment-annotated `.onto` files continue to verify without
change; new files written with the structured clause get the
benefit of guaranteed AST-level traceability that no LLM can
silently skip.

**When to use which:**

- **Use the `refines` clause** for any event that needs to be
  traceable across stages. The grammar enforces presence and
  qualified-name form; the LLM cannot omit it without producing a
  parse error elsewhere.
- **Comment annotations** remain valid as a backwards-compatibility
  path for existing models AND as a non-mandatory traceability hint
  for code-stage events (where the parent context lives outside
  the merged AST).

## Member-quantified categories (Phase 19 v0.6)

Categories with non-trivial invariants on their MEMBERS use the
`where <bearerName>: <MemberType>` clause to introduce a binding.
Inside the category's invariants, `<bearerName>.x` resolves to
property `x` of the member type:

```onto
category PhysicallyPlausibleReadings where bearer: SensorKind {
  invariants {
    bearer.minPlausible >= 0.0;
    bearer.maxPlausible > bearer.minPlausible;
    bearer.maxPlausible <= 1000.0;
  }
}

kind BloodSugarSensor specializes SensorKind, PhysicallyPlausibleReadings {
  invariants {
    self.minPlausible = 0.0;
    self.maxPlausible = 1000.0;     // entails the category's bounds
  }
}
```

The Z3 verifier proves `member.invariants ⊨ category.invariants`
for every (member, category) pair where the member specializes
the category and the category has at least one non-trivial
invariant. Violations are reported as **S35** (hard).

**When to use the bearer binding:** any time a category constrains
the state of its members (typical case: physical plausibility,
regulatory thresholds expressed as scalar bounds). Categories
that only carry documentary properties (e.g.
`property fda510kNumber: String`) don't need the binding and
behave as before.

## Rename tables (Phase 20 v0.7)

When a Design component intentionally renames a property of the
parent it refines (encapsulation), declare the rename explicitly
on the kind/subkind:

```onto
kind BloodSugarSensor renames {
  currentBloodSugar -> lastReadingMgDl;
  bloodSugarRateMgDlPerMin -> readingRate;
} {
  identity: sensorId;
  property sensorId: String;
  property lastReadingMgDl: Real;
  property readingRate: Real;
  ...
}
```

The `renames { parent -> own; ... }` clause maps PARENT property
names to OWN property names. Obligation 4 (W38/W39) consults the
map: a parent's `X` is considered covered if the child declares
`X` directly OR if `renames { X -> Y }` declares the alias and
`Y` appears in the child.

**When to use:** any time a component's encapsulation logic gives
the same logical property a different name than the parent
declared. Without the clause, O4 emits W38/W39 false positives.

**When NOT to use:** the rename clause is for INTENTIONAL renames.
If a property is truly missing from the decomposition (not just
renamed), don't declare the rename — let W38/W39 fire so the gap
is visible.

## Strict mode for CI/CD (Phase 15 v0.9)

Para uso en pipelines de integración continua, el flag `--strict`
del CLI promueve los warnings de inter-stage (W34/W35/W37/W38/W39)
a hard failures. Esto permite que CI rechace cualquier PR que
introduzca:

- Commitments sin refiner (W34)
- `refines:` apuntando a targets que no existen (W35, W37)
- Decomposition con modifies-closure gaps (W38)
- Decomposition con property-correspondence gaps (W39)

Los códigos `W##_partial` permanecen como warnings — describen
verificación parcial sobre el subconjunto decidible, no
violaciones reales.

```bash
# Authoring iterativo (warnings visibles, no falla):
node dist/cli/gen.js <root>.onto --verify --resolve-imports

# CI strict (warnings → exit 2):
node dist/cli/gen.js <root>.onto --verify --resolve-imports --strict
```

## Document changelog

- 2026-05-27 — v0.1 — initial draft mapping all five stages to UFO-A
  stereotypes with examples and refinement obligations.
- 2026-05-28 — v0.2 — added first-class `refines:` clause section
  (Phase 18 v0.5) reflecting the structural replacement of comment-
  mining for cross-stage traceability.
- 2026-05-28 — v0.3 — added member-quantified category section
  (Phase 19 v0.6) — activates O3 with non-empty empirical domain.
- 2026-05-28 — v0.4 — added rename tables section (Phase 20 v0.7)
  — suppresses W38/W39 false positives from intentional renaming.
- 2026-05-28 — v0.5 — added `--strict` CLI flag section
  (Phase 15 v0.9) for CI/CD usage.
