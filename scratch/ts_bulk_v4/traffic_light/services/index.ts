// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { pedestrianControllers, phaseSchedulers, preemptionControllers, signalHeadControllers, trafficLightControllerSystems } from "../db/schema.js";
import { eq, sql } from "drizzle-orm";
// Validators from the ontodls TypeScript codegen target.
// Import every `validate*` for the kinds this service touches.
// import { validateXxx, ... } from "@onto/<your-app>";

export class InvariantViolation extends Error {
  constructor(public readonly context: string, public readonly violations: readonly string[]) {
    super(`Invariant violation in ${context}: ${violations.join('; ')}`);
    this.name = "InvariantViolation";
  }
}
function assertNoViolations(violations: readonly string[], context: string): void {
  if (violations.length > 0) throw new InvariantViolation(context, violations);
}

// ─── Events on PedestrianController ───

export async function receiveButtonPress(__selfId: string, approachAxis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (approachAxis = 'NS' or approachAxis = 'EW')
  //   pre: self.pedestrianRequestPending = false
  // Post-conditions from spec:
  //   post: self.pedestrianRequestPending = true
  //   post: self.pedestrianRequestApproach = approachAxis
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pedestrianControllers).set({
      pedestrianRequestPending: true,
      pedestrianRequestApproach: approachAxis,
    }).where(eq(pedestrianControllers.pedestrianControllerId, __selfId));
    // After mutation: re-validate against `validatePedestrianController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pedestrianControllers).where(eq(pedestrianControllers.pedestrianControllerId, __selfId)).get();
    // assertNoViolations(validatePedestrianController(row as never), "receiveButtonPress");
  });
}

export async function grantWalk(__selfId: string, nsState: string, ewState: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianRequestPending = true
  //   pre: (nsState = 'GREEN' or nsState = 'YELLOW' or nsState = 'RED')
  //   pre: (ewState = 'GREEN' or ewState = 'YELLOW' or ewState = 'RED')
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (nsState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (ewState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (not (ewState = 'GREEN'))
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (not (nsState = 'GREEN'))
  // Post-conditions from spec:
  //   post: self.pedestrianWalkActive = true
  //   post: self.pedestrianRequestPending = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pedestrianControllers).set({
      pedestrianWalkActive: true,
      pedestrianRequestPending: false,
    }).where(eq(pedestrianControllers.pedestrianControllerId, __selfId));
    // After mutation: re-validate against `validatePedestrianController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pedestrianControllers).where(eq(pedestrianControllers.pedestrianControllerId, __selfId)).get();
    // assertNoViolations(validatePedestrianController(row as never), "grantWalk");
  });
}

export async function revokeWalk(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianWalkActive = true
  // Post-conditions from spec:
  //   post: self.pedestrianWalkActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pedestrianControllers).set({
      pedestrianWalkActive: false,
    }).where(eq(pedestrianControllers.pedestrianControllerId, __selfId));
    // After mutation: re-validate against `validatePedestrianController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pedestrianControllers).where(eq(pedestrianControllers.pedestrianControllerId, __selfId)).get();
    // assertNoViolations(validatePedestrianController(row as never), "revokeWalk");
  });
}

export async function rejectConflictingWalk(__selfId: string, nsState: string, ewState: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianRequestPending = true
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (ewState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (nsState = 'GREEN')
  // TODO: implement mutation logic for 'PedestrianController.rejectConflictingWalk'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectConflictingWalk");
}

export async function clearWalkOnPreemption(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianWalkActive = true
  // Post-conditions from spec:
  //   post: self.pedestrianWalkActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pedestrianControllers).set({
      pedestrianWalkActive: false,
    }).where(eq(pedestrianControllers.pedestrianControllerId, __selfId));
    // After mutation: re-validate against `validatePedestrianController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pedestrianControllers).where(eq(pedestrianControllers.pedestrianControllerId, __selfId)).get();
    // assertNoViolations(validatePedestrianController(row as never), "clearWalkOnPreemption");
  });
}

// ─── Events on PhaseScheduler ───

export async function activatePhase(__selfId: string, phaseId: string, greenAxis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.schedulerState = 'IDLE'
  //   pre: phaseId <> null
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  // Post-conditions from spec:
  //   post: self.currentPhaseId = phaseId
  //   post: self.activeGreenAxis = greenAxis
  //   post: self.schedulerState = 'GREEN'
  //   post: self.nsStateElapsedSeconds = 0.0
  //   post: self.ewStateElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseSchedulers).set({
      currentPhaseId: phaseId,
      activeGreenAxis: greenAxis,
      schedulerState: "GREEN",
      nsStateElapsedSeconds: 0,
      ewStateElapsedSeconds: 0,
    }).where(eq(phaseSchedulers.schedulerId, __selfId));
    // After mutation: re-validate against `validatePhaseScheduler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseSchedulers).where(eq(phaseSchedulers.schedulerId, __selfId)).get();
    // assertNoViolations(validatePhaseScheduler(row as never), "activatePhase");
  });
}

export async function issueYellowCommand(__selfId: string, axis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.schedulerState = 'GREEN'
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: self.activeGreenAxis = axis
  // Post-conditions from spec:
  //   post: self.schedulerState = 'YELLOW'
  //   post: (axis = 'NS') implies (self.nsStateElapsedSeconds = 0.0)
  //   post: (axis = 'EW') implies (self.ewStateElapsedSeconds = 0.0)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseSchedulers).set({
      schedulerState: "YELLOW",
    }).where(eq(phaseSchedulers.schedulerId, __selfId));
    // After mutation: re-validate against `validatePhaseScheduler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseSchedulers).where(eq(phaseSchedulers.schedulerId, __selfId)).get();
    // assertNoViolations(validatePhaseScheduler(row as never), "issueYellowCommand");
  });
}

export async function issueRedAfterYellow(__selfId: string, axis: string, elapsedYellowSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.schedulerState = 'YELLOW'
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: elapsedYellowSeconds >= self.minimumYellowSeconds
  //   pre: self.minimumYellowSeconds >= 3.0
  // Post-conditions from spec:
  //   post: self.schedulerState = 'ALL_RED_DWELL'
  //   post: (axis = 'NS') implies (self.nsStateElapsedSeconds = elapsedYellowSeconds)
  //   post: (axis = 'EW') implies (self.ewStateElapsedSeconds = elapsedYellowSeconds)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseSchedulers).set({
      schedulerState: "ALL_RED_DWELL",
    }).where(eq(phaseSchedulers.schedulerId, __selfId));
    // After mutation: re-validate against `validatePhaseScheduler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseSchedulers).where(eq(phaseSchedulers.schedulerId, __selfId)).get();
    // assertNoViolations(validatePhaseScheduler(row as never), "issueRedAfterYellow");
  });
}

export async function completeAllRedDwell(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.schedulerState = 'ALL_RED_DWELL'
  // Post-conditions from spec:
  //   post: self.schedulerState = 'IDLE'
  //   post: self.activeGreenAxis = 'NONE'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseSchedulers).set({
      schedulerState: "IDLE",
      activeGreenAxis: "NONE",
    }).where(eq(phaseSchedulers.schedulerId, __selfId));
    // After mutation: re-validate against `validatePhaseScheduler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseSchedulers).where(eq(phaseSchedulers.schedulerId, __selfId)).get();
    // assertNoViolations(validatePhaseScheduler(row as never), "completeAllRedDwell");
  });
}

export async function enterPreemptionAllRed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (self.schedulerState = 'GREEN' or self.schedulerState = 'YELLOW')
  // Post-conditions from spec:
  //   post: self.schedulerState = 'IDLE'
  //   post: self.activeGreenAxis = 'NONE'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseSchedulers).set({
      schedulerState: "IDLE",
      activeGreenAxis: "NONE",
    }).where(eq(phaseSchedulers.schedulerId, __selfId));
    // After mutation: re-validate against `validatePhaseScheduler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseSchedulers).where(eq(phaseSchedulers.schedulerId, __selfId)).get();
    // assertNoViolations(validatePhaseScheduler(row as never), "enterPreemptionAllRed");
  });
}

export async function tickElapsed(__selfId: string, deltaNs: number, deltaEw: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: deltaNs >= 0.0
  //   pre: deltaEw >= 0.0
  // Post-conditions from spec:
  //   post: self.nsStateElapsedSeconds = self.nsStateElapsedSeconds@pre + deltaNs
  //   post: self.ewStateElapsedSeconds = self.ewStateElapsedSeconds@pre + deltaEw
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(phaseSchedulers).set({
      nsStateElapsedSeconds: sql`${phaseSchedulers.nsStateElapsedSeconds} + ${deltaNs}`,
      ewStateElapsedSeconds: sql`${phaseSchedulers.ewStateElapsedSeconds} + ${deltaEw}`,
    }).where(eq(phaseSchedulers.schedulerId, __selfId));
    // After mutation: re-validate against `validatePhaseScheduler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(phaseSchedulers).where(eq(phaseSchedulers.schedulerId, __selfId)).get();
    // assertNoViolations(validatePhaseScheduler(row as never), "tickElapsed");
  });
}

// ─── Events on PreemptionController ───

export async function handlePreemptionSensor(__selfId: string, responseTimeSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive = false
  //   pre: responseTimeSeconds >= 0.0
  //   pre: responseTimeSeconds <= self.maxPreemptionResponseSeconds
  // Post-conditions from spec:
  //   post: self.preemptionActive = true
  //   post: self.allRedCommandedAt = responseTimeSeconds
  //   post: responseTimeSeconds <= self.maxPreemptionResponseSeconds
  //   post: self.maxPreemptionResponseSeconds <= 1.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(preemptionControllers).set({
      preemptionActive: true,
      allRedCommandedAt: responseTimeSeconds,
    }).where(eq(preemptionControllers.preemptionControllerId, __selfId));
    // After mutation: re-validate against `validatePreemptionController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(preemptionControllers).where(eq(preemptionControllers.preemptionControllerId, __selfId)).get();
    // assertNoViolations(validatePreemptionController(row as never), "handlePreemptionSensor");
  });
}

export async function handlePreemptionClear(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive = true
  // Post-conditions from spec:
  //   post: self.preemptionActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(preemptionControllers).set({
      preemptionActive: false,
    }).where(eq(preemptionControllers.preemptionControllerId, __selfId));
    // After mutation: re-validate against `validatePreemptionController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(preemptionControllers).where(eq(preemptionControllers.preemptionControllerId, __selfId)).get();
    // assertNoViolations(validatePreemptionController(row as never), "handlePreemptionClear");
  });
}

export async function rejectLateResponse(__selfId: string, responseTimeSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive = false
  //   pre: responseTimeSeconds > self.maxPreemptionResponseSeconds
  // TODO: implement mutation logic for 'PreemptionController.rejectLateResponse'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectLateResponse");
}

// ─── Events on SignalHeadController ───

export async function setAxisGreen(__selfId: string, greenAxis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  //   pre: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')
  //   pre: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')
  // Post-conditions from spec:
  //   post: (greenAxis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   post: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')
  //   post: (greenAxis = 'EW') implies (self.ewSignalState = 'GREEN')
  //   post: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')
  //   post: not (self.nsSignalState = 'GREEN' and self.ewSignalState = 'GREEN')
  // TODO: implement mutation logic for 'SignalHeadController.setAxisGreen'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: setAxisGreen");
}

export async function setAxisYellow(__selfId: string, axis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'GREEN')
  // Post-conditions from spec:
  //   post: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   post: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  // TODO: implement mutation logic for 'SignalHeadController.setAxisYellow'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: setAxisYellow");
}

export async function setAxisRed(__selfId: string, axis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  // Post-conditions from spec:
  //   post: (axis = 'NS') implies (self.nsSignalState = 'RED')
  //   post: (axis = 'EW') implies (self.ewSignalState = 'RED')
  // TODO: implement mutation logic for 'SignalHeadController.setAxisRed'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: setAxisRed");
}

export async function setAllRed(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.nsSignalState = 'RED'
  //   post: self.ewSignalState = 'RED'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(signalHeadControllers).set({
      nsSignalState: "RED",
      ewSignalState: "RED",
    }).where(eq(signalHeadControllers.signalHeadId, __selfId));
    // After mutation: re-validate against `validateSignalHeadController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(signalHeadControllers).where(eq(signalHeadControllers.signalHeadId, __selfId)).get();
    // assertNoViolations(validateSignalHeadController(row as never), "setAllRed");
  });
}

// ─── Events on TrafficLightControllerSystem ───

export async function startPhase(__selfId: string, phaseId: string, greenAxis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive = false
  //   pre: phaseId <> null
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  //   pre: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')
  //   pre: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')
  // Post-conditions from spec:
  //   post: self.currentPhaseId = phaseId
  //   post: (greenAxis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   post: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')
  //   post: (greenAxis = 'EW') implies (self.ewSignalState = 'GREEN')
  //   post: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')
  //   post: not (self.nsSignalState = 'GREEN' and self.ewSignalState = 'GREEN')
  //   post: self.nsStateElapsedSeconds = 0.0
  //   post: self.ewStateElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightControllerSystems).set({
      currentPhaseId: phaseId,
      nsStateElapsedSeconds: 0,
      ewStateElapsedSeconds: 0,
    }).where(eq(trafficLightControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateTrafficLightControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightControllerSystems).where(eq(trafficLightControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateTrafficLightControllerSystem(row as never), "startPhase");
  });
}

export async function beginYellow(__selfId: string, axis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive = false
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'GREEN')
  // Post-conditions from spec:
  //   post: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   post: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  //   post: (axis = 'NS') implies (self.nsStateElapsedSeconds = 0.0)
  //   post: (axis = 'EW') implies (self.ewStateElapsedSeconds = 0.0)
  //   post: self.minimumYellowSeconds >= 3.0
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.beginYellow'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: beginYellow");
}

export async function endYellowGoRed(__selfId: string, axis: string, elapsedYellowSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  //   pre: elapsedYellowSeconds >= self.minimumYellowSeconds
  //   pre: self.minimumYellowSeconds >= 3.0
  // Post-conditions from spec:
  //   post: (axis = 'NS') implies (self.nsSignalState = 'RED')
  //   post: (axis = 'EW') implies (self.ewSignalState = 'RED')
  //   post: (axis = 'NS') implies (self.nsStateElapsedSeconds = elapsedYellowSeconds)
  //   post: (axis = 'EW') implies (self.ewStateElapsedSeconds = elapsedYellowSeconds)
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.endYellowGoRed'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: endYellowGoRed");
}

export async function commandAllRedPreemption(__selfId: string, responseTimeSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive = false
  //   pre: responseTimeSeconds >= 0.0
  //   pre: responseTimeSeconds <= self.maxPreemptionResponseSeconds
  // Post-conditions from spec:
  //   post: self.nsSignalState = 'RED'
  //   post: self.ewSignalState = 'RED'
  //   post: self.preemptionActive = true
  //   post: self.pedestrianWalkActive = false
  //   post: responseTimeSeconds <= self.maxPreemptionResponseSeconds
  //   post: self.maxPreemptionResponseSeconds <= 1.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightControllerSystems).set({
      nsSignalState: "RED",
      ewSignalState: "RED",
      preemptionActive: true,
      pedestrianWalkActive: false,
    }).where(eq(trafficLightControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateTrafficLightControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightControllerSystems).where(eq(trafficLightControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateTrafficLightControllerSystem(row as never), "commandAllRedPreemption");
  });
}

export async function clearPreemption(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive = true
  // Post-conditions from spec:
  //   post: self.preemptionActive = false
  //   post: self.nsSignalState = 'RED'
  //   post: self.ewSignalState = 'RED'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightControllerSystems).set({
      preemptionActive: false,
      nsSignalState: "RED",
      ewSignalState: "RED",
    }).where(eq(trafficLightControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateTrafficLightControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightControllerSystems).where(eq(trafficLightControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateTrafficLightControllerSystem(row as never), "clearPreemption");
  });
}

export async function registerPedestrianRequest(__selfId: string, approachAxis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (approachAxis = 'NS' or approachAxis = 'EW')
  //   pre: self.pedestrianRequestPending = false
  // Post-conditions from spec:
  //   post: self.pedestrianRequestPending = true
  //   post: self.pedestrianRequestApproach = approachAxis
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightControllerSystems).set({
      pedestrianRequestPending: true,
      pedestrianRequestApproach: approachAxis,
    }).where(eq(trafficLightControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateTrafficLightControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightControllerSystems).where(eq(trafficLightControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateTrafficLightControllerSystem(row as never), "registerPedestrianRequest");
  });
}

export async function activateWalk(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianRequestPending = true
  //   pre: self.preemptionActive = false
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (self.ewSignalState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (not (self.ewSignalState = 'GREEN'))
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (not (self.nsSignalState = 'GREEN'))
  // Post-conditions from spec:
  //   post: self.pedestrianWalkActive = true
  //   post: self.pedestrianRequestPending = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightControllerSystems).set({
      pedestrianWalkActive: true,
      pedestrianRequestPending: false,
    }).where(eq(trafficLightControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateTrafficLightControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightControllerSystems).where(eq(trafficLightControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateTrafficLightControllerSystem(row as never), "activateWalk");
  });
}

export async function deactivateWalk(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianWalkActive = true
  // Post-conditions from spec:
  //   post: self.pedestrianWalkActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightControllerSystems).set({
      pedestrianWalkActive: false,
    }).where(eq(trafficLightControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateTrafficLightControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightControllerSystems).where(eq(trafficLightControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateTrafficLightControllerSystem(row as never), "deactivateWalk");
  });
}

export async function clockTick(__selfId: string, deltaNs: number, deltaEw: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: deltaNs >= 0.0
  //   pre: deltaEw >= 0.0
  // Post-conditions from spec:
  //   post: self.nsStateElapsedSeconds = self.nsStateElapsedSeconds@pre + deltaNs
  //   post: self.ewStateElapsedSeconds = self.ewStateElapsedSeconds@pre + deltaEw
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(trafficLightControllerSystems).set({
      nsStateElapsedSeconds: sql`${trafficLightControllerSystems.nsStateElapsedSeconds} + ${deltaNs}`,
      ewStateElapsedSeconds: sql`${trafficLightControllerSystems.ewStateElapsedSeconds} + ${deltaEw}`,
    }).where(eq(trafficLightControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateTrafficLightControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(trafficLightControllerSystems).where(eq(trafficLightControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateTrafficLightControllerSystem(row as never), "clockTick");
  });
}

// ─── Events on TrafficLightControllerSystemFormalized ───

export async function rejectDirectGreenToRed(__selfId: string, axis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'GREEN')
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectDirectGreenToRed'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectDirectGreenToRed");
}

export async function rejectPrematureYellowToRed(__selfId: string, axis: string, elapsedSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  //   pre: elapsedSeconds < self.minimumYellowSeconds
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectPrematureYellowToRed'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectPrematureYellowToRed");
}

export async function rejectConflictingGreen(__selfId: string, greenAxis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  //   pre: (greenAxis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (greenAxis = 'EW') implies (self.ewSignalState = 'GREEN')
  //   pre: self.preemptionActive = false
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectConflictingGreen'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectConflictingGreen");
}

export async function rejectUnsafeWalkActivation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pedestrianRequestPending = true
  //   pre: self.preemptionActive = false
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (self.ewSignalState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (self.nsSignalState = 'GREEN')
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectUnsafeWalkActivation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectUnsafeWalkActivation");
}

export async function rejectLatePreemptionResponse(__selfId: string, responseTimeSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive = false
  //   pre: responseTimeSeconds > self.maxPreemptionResponseSeconds
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectLatePreemptionResponse'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectLatePreemptionResponse");
}

export async function rejectPhaseStartDuringPreemption(__selfId: string, phaseId: string, greenAxis: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.preemptionActive = true
  //   pre: phaseId <> null
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectPhaseStartDuringPreemption'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectPhaseStartDuringPreemption");
}
