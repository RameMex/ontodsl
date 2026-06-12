// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
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

export async function receiveButtonPress(approachAxis: string): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianController.receiveButtonPress'.
  // Pre-conditions from spec:
  //   pre: (approachAxis = 'NS' or approachAxis = 'EW')
  //   pre: self.pedestrianRequestPending = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianRequestPending = true
  //   post: self.pedestrianRequestApproach = approachAxis
  // After mutations, call validate*() on the affected PedestrianController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: receiveButtonPress");
}

export async function grantWalk(nsState: string, ewState: string): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianController.grantWalk'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianRequestPending = true
  //   pre: (nsState = 'GREEN' or nsState = 'YELLOW' or nsState = 'RED')
  //   pre: (ewState = 'GREEN' or ewState = 'YELLOW' or ewState = 'RED')
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (nsState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (ewState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (not (ewState = 'GREEN'))
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (not (nsState = 'GREEN'))
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianWalkActive = true
  //   post: self.pedestrianRequestPending = false
  // After mutations, call validate*() on the affected PedestrianController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: grantWalk");
}

export async function revokeWalk(): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianController.revokeWalk'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianWalkActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianWalkActive = false
  // After mutations, call validate*() on the affected PedestrianController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: revokeWalk");
}

export async function rejectConflictingWalk(nsState: string, ewState: string): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianController.rejectConflictingWalk'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianRequestPending = true
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (ewState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (nsState = 'GREEN')
  // After mutations, call validate*() on the affected PedestrianController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectConflictingWalk");
}

export async function clearWalkOnPreemption(): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianController.clearWalkOnPreemption'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianWalkActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianWalkActive = false
  // After mutations, call validate*() on the affected PedestrianController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearWalkOnPreemption");
}

// ─── Events on PhaseScheduler ───

export async function activatePhase(phaseId: string, greenAxis: string): Promise<void> {
  // TODO: implement mutation logic for 'PhaseScheduler.activatePhase'.
  // Pre-conditions from spec:
  //   pre: self.schedulerState = 'IDLE'
  //   pre: phaseId <> null
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentPhaseId = phaseId
  //   post: self.activeGreenAxis = greenAxis
  //   post: self.schedulerState = 'GREEN'
  //   post: self.nsStateElapsedSeconds = 0.0
  //   post: self.ewStateElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected PhaseScheduler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: activatePhase");
}

export async function issueYellowCommand(axis: string): Promise<void> {
  // TODO: implement mutation logic for 'PhaseScheduler.issueYellowCommand'.
  // Pre-conditions from spec:
  //   pre: self.schedulerState = 'GREEN'
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: self.activeGreenAxis = axis
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.schedulerState = 'YELLOW'
  //   post: (axis = 'NS') implies (self.nsStateElapsedSeconds = 0.0)
  //   post: (axis = 'EW') implies (self.ewStateElapsedSeconds = 0.0)
  // After mutations, call validate*() on the affected PhaseScheduler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: issueYellowCommand");
}

export async function issueRedAfterYellow(axis: string, elapsedYellowSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'PhaseScheduler.issueRedAfterYellow'.
  // Pre-conditions from spec:
  //   pre: self.schedulerState = 'YELLOW'
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: elapsedYellowSeconds >= self.minimumYellowSeconds
  //   pre: self.minimumYellowSeconds >= 3.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.schedulerState = 'ALL_RED_DWELL'
  //   post: (axis = 'NS') implies (self.nsStateElapsedSeconds = elapsedYellowSeconds)
  //   post: (axis = 'EW') implies (self.ewStateElapsedSeconds = elapsedYellowSeconds)
  // After mutations, call validate*() on the affected PhaseScheduler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: issueRedAfterYellow");
}

export async function completeAllRedDwell(): Promise<void> {
  // TODO: implement mutation logic for 'PhaseScheduler.completeAllRedDwell'.
  // Pre-conditions from spec:
  //   pre: self.schedulerState = 'ALL_RED_DWELL'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.schedulerState = 'IDLE'
  //   post: self.activeGreenAxis = 'NONE'
  // After mutations, call validate*() on the affected PhaseScheduler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: completeAllRedDwell");
}

export async function enterPreemptionAllRed(): Promise<void> {
  // TODO: implement mutation logic for 'PhaseScheduler.enterPreemptionAllRed'.
  // Pre-conditions from spec:
  //   pre: (self.schedulerState = 'GREEN' or self.schedulerState = 'YELLOW')
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.schedulerState = 'IDLE'
  //   post: self.activeGreenAxis = 'NONE'
  // After mutations, call validate*() on the affected PhaseScheduler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enterPreemptionAllRed");
}

export async function tickElapsed(deltaNs: number, deltaEw: number): Promise<void> {
  // TODO: implement mutation logic for 'PhaseScheduler.tickElapsed'.
  // Pre-conditions from spec:
  //   pre: deltaNs >= 0.0
  //   pre: deltaEw >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.nsStateElapsedSeconds = self.nsStateElapsedSeconds@pre + deltaNs
  //   post: self.ewStateElapsedSeconds = self.ewStateElapsedSeconds@pre + deltaEw
  // After mutations, call validate*() on the affected PhaseScheduler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: tickElapsed");
}

// ─── Events on PreemptionController ───

export async function handlePreemptionSensor(responseTimeSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'PreemptionController.handlePreemptionSensor'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive = false
  //   pre: responseTimeSeconds >= 0.0
  //   pre: responseTimeSeconds <= self.maxPreemptionResponseSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionActive = true
  //   post: self.allRedCommandedAt = responseTimeSeconds
  //   post: responseTimeSeconds <= self.maxPreemptionResponseSeconds
  //   post: self.maxPreemptionResponseSeconds <= 1.0
  // After mutations, call validate*() on the affected PreemptionController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: handlePreemptionSensor");
}

export async function handlePreemptionClear(): Promise<void> {
  // TODO: implement mutation logic for 'PreemptionController.handlePreemptionClear'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionActive = false
  // After mutations, call validate*() on the affected PreemptionController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: handlePreemptionClear");
}

export async function rejectLateResponse(responseTimeSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'PreemptionController.rejectLateResponse'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive = false
  //   pre: responseTimeSeconds > self.maxPreemptionResponseSeconds
  // After mutations, call validate*() on the affected PreemptionController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectLateResponse");
}

// ─── Events on SignalHeadController ───

export async function setAxisGreen(greenAxis: string): Promise<void> {
  // TODO: implement mutation logic for 'SignalHeadController.setAxisGreen'.
  // Pre-conditions from spec:
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  //   pre: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')
  //   pre: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: (greenAxis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   post: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')
  //   post: (greenAxis = 'EW') implies (self.ewSignalState = 'GREEN')
  //   post: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')
  //   post: not (self.nsSignalState = 'GREEN' and self.ewSignalState = 'GREEN')
  // After mutations, call validate*() on the affected SignalHeadController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setAxisGreen");
}

export async function setAxisYellow(axis: string): Promise<void> {
  // TODO: implement mutation logic for 'SignalHeadController.setAxisYellow'.
  // Pre-conditions from spec:
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'GREEN')
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   post: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  // After mutations, call validate*() on the affected SignalHeadController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setAxisYellow");
}

export async function setAxisRed(axis: string): Promise<void> {
  // TODO: implement mutation logic for 'SignalHeadController.setAxisRed'.
  // Pre-conditions from spec:
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: (axis = 'NS') implies (self.nsSignalState = 'RED')
  //   post: (axis = 'EW') implies (self.ewSignalState = 'RED')
  // After mutations, call validate*() on the affected SignalHeadController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setAxisRed");
}

export async function setAllRed(): Promise<void> {
  // TODO: implement mutation logic for 'SignalHeadController.setAllRed'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.nsSignalState = 'RED'
  //   post: self.ewSignalState = 'RED'
  // After mutations, call validate*() on the affected SignalHeadController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setAllRed");
}

// ─── Events on TrafficLightControllerSystem ───

export async function startPhase(phaseId: string, greenAxis: string): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.startPhase'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive = false
  //   pre: phaseId <> null
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  //   pre: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')
  //   pre: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentPhaseId = phaseId
  //   post: (greenAxis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   post: (greenAxis = 'NS') implies (self.ewSignalState = 'RED')
  //   post: (greenAxis = 'EW') implies (self.ewSignalState = 'GREEN')
  //   post: (greenAxis = 'EW') implies (self.nsSignalState = 'RED')
  //   post: not (self.nsSignalState = 'GREEN' and self.ewSignalState = 'GREEN')
  //   post: self.nsStateElapsedSeconds = 0.0
  //   post: self.ewStateElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected TrafficLightControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: startPhase");
}

export async function beginYellow(axis: string): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.beginYellow'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive = false
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'GREEN')
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   post: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  //   post: (axis = 'NS') implies (self.nsStateElapsedSeconds = 0.0)
  //   post: (axis = 'EW') implies (self.ewStateElapsedSeconds = 0.0)
  //   post: self.minimumYellowSeconds >= 3.0
  // After mutations, call validate*() on the affected TrafficLightControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: beginYellow");
}

export async function endYellowGoRed(axis: string, elapsedYellowSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.endYellowGoRed'.
  // Pre-conditions from spec:
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  //   pre: elapsedYellowSeconds >= self.minimumYellowSeconds
  //   pre: self.minimumYellowSeconds >= 3.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: (axis = 'NS') implies (self.nsSignalState = 'RED')
  //   post: (axis = 'EW') implies (self.ewSignalState = 'RED')
  //   post: (axis = 'NS') implies (self.nsStateElapsedSeconds = elapsedYellowSeconds)
  //   post: (axis = 'EW') implies (self.ewStateElapsedSeconds = elapsedYellowSeconds)
  // After mutations, call validate*() on the affected TrafficLightControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: endYellowGoRed");
}

export async function commandAllRedPreemption(responseTimeSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.commandAllRedPreemption'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive = false
  //   pre: responseTimeSeconds >= 0.0
  //   pre: responseTimeSeconds <= self.maxPreemptionResponseSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.nsSignalState = 'RED'
  //   post: self.ewSignalState = 'RED'
  //   post: self.preemptionActive = true
  //   post: self.pedestrianWalkActive = false
  //   post: responseTimeSeconds <= self.maxPreemptionResponseSeconds
  //   post: self.maxPreemptionResponseSeconds <= 1.0
  // After mutations, call validate*() on the affected TrafficLightControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: commandAllRedPreemption");
}

export async function clearPreemption(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.clearPreemption'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionActive = false
  //   post: self.nsSignalState = 'RED'
  //   post: self.ewSignalState = 'RED'
  // After mutations, call validate*() on the affected TrafficLightControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearPreemption");
}

export async function registerPedestrianRequest(approachAxis: string): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.registerPedestrianRequest'.
  // Pre-conditions from spec:
  //   pre: (approachAxis = 'NS' or approachAxis = 'EW')
  //   pre: self.pedestrianRequestPending = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianRequestPending = true
  //   post: self.pedestrianRequestApproach = approachAxis
  // After mutations, call validate*() on the affected TrafficLightControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: registerPedestrianRequest");
}

export async function activateWalk(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.activateWalk'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianRequestPending = true
  //   pre: self.preemptionActive = false
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (self.ewSignalState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (not (self.ewSignalState = 'GREEN'))
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (not (self.nsSignalState = 'GREEN'))
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianWalkActive = true
  //   post: self.pedestrianRequestPending = false
  // After mutations, call validate*() on the affected TrafficLightControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: activateWalk");
}

export async function deactivateWalk(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.deactivateWalk'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianWalkActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianWalkActive = false
  // After mutations, call validate*() on the affected TrafficLightControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deactivateWalk");
}

export async function clockTick(deltaNs: number, deltaEw: number): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystem.clockTick'.
  // Pre-conditions from spec:
  //   pre: deltaNs >= 0.0
  //   pre: deltaEw >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.nsStateElapsedSeconds = self.nsStateElapsedSeconds@pre + deltaNs
  //   post: self.ewStateElapsedSeconds = self.ewStateElapsedSeconds@pre + deltaEw
  // After mutations, call validate*() on the affected TrafficLightControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clockTick");
}

// ─── Events on TrafficLightControllerSystemFormalized ───

export async function rejectDirectGreenToRed(axis: string): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectDirectGreenToRed'.
  // Pre-conditions from spec:
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'GREEN')
  // After mutations, call validate*() on the affected TrafficLightControllerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectDirectGreenToRed");
}

export async function rejectPrematureYellowToRed(axis: string, elapsedSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectPrematureYellowToRed'.
  // Pre-conditions from spec:
  //   pre: (axis = 'NS' or axis = 'EW')
  //   pre: (axis = 'NS') implies (self.nsSignalState = 'YELLOW')
  //   pre: (axis = 'EW') implies (self.ewSignalState = 'YELLOW')
  //   pre: elapsedSeconds < self.minimumYellowSeconds
  // After mutations, call validate*() on the affected TrafficLightControllerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectPrematureYellowToRed");
}

export async function rejectConflictingGreen(greenAxis: string): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectConflictingGreen'.
  // Pre-conditions from spec:
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  //   pre: (greenAxis = 'NS') implies (self.nsSignalState = 'GREEN')
  //   pre: (greenAxis = 'EW') implies (self.ewSignalState = 'GREEN')
  //   pre: self.preemptionActive = false
  // After mutations, call validate*() on the affected TrafficLightControllerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectConflictingGreen");
}

export async function rejectUnsafeWalkActivation(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectUnsafeWalkActivation'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianRequestPending = true
  //   pre: self.preemptionActive = false
  //   pre: (self.pedestrianRequestApproach = 'NS') implies (self.ewSignalState = 'GREEN')
  //   pre: (self.pedestrianRequestApproach = 'EW') implies (self.nsSignalState = 'GREEN')
  // After mutations, call validate*() on the affected TrafficLightControllerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectUnsafeWalkActivation");
}

export async function rejectLatePreemptionResponse(responseTimeSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectLatePreemptionResponse'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive = false
  //   pre: responseTimeSeconds > self.maxPreemptionResponseSeconds
  // After mutations, call validate*() on the affected TrafficLightControllerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectLatePreemptionResponse");
}

export async function rejectPhaseStartDuringPreemption(phaseId: string, greenAxis: string): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightControllerSystemFormalized.rejectPhaseStartDuringPreemption'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive = true
  //   pre: phaseId <> null
  //   pre: (greenAxis = 'NS' or greenAxis = 'EW')
  // After mutations, call validate*() on the affected TrafficLightControllerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectPhaseStartDuringPreemption");
}
