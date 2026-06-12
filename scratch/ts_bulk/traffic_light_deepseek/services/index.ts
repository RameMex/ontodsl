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

// ─── Events on PedestrianModule ───

export async function registerPedestrianRequest(): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianModule.registerPedestrianRequest'.
  // Pre-conditions from spec:
  //   pre: not self.pedestrianRequested
  //   pre: not self.pedestrianRequestPending
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianRequested = true
  //   post: self.pedestrianRequestPending = true
  // After mutations, call validate*() on the affected PedestrianModule snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: registerPedestrianRequest");
}

export async function grantWalk(): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianModule.grantWalk'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianRequested
  //   pre: self.pedestrianRequestPending
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianRequested = false
  //   post: self.pedestrianRequestPending = false
  //   post: self.walkSignalActive = true
  // After mutations, call validate*() on the affected PedestrianModule snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: grantWalk");
}

export async function clearWalk(): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianModule.clearWalk'.
  // Pre-conditions from spec:
  //   pre: self.walkSignalActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.walkSignalActive = false
  // After mutations, call validate*() on the affected PedestrianModule snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearWalk");
}

export async function startSystem(): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianModule.startSystem'.
  // Pre-conditions from spec:
  //   pre: not self.pedestrianRequested
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianRequested = false
  //   post: self.pedestrianRequestPending = false
  //   post: self.walkSignalActive = false
  // After mutations, call validate*() on the affected PedestrianModule snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: startSystem");
}

export async function stopSystem(): Promise<void> {
  // TODO: implement mutation logic for 'PedestrianModule.stopSystem'.
  // Pre-conditions from spec:
  //   pre: not self.walkSignalActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.walkSignalActive = false
  // After mutations, call validate*() on the affected PedestrianModule snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: stopSystem");
}

// ─── Events on PhaseManager ───

export async function startNormalPhase(p: string): Promise<void> {
  // TODO: implement mutation logic for 'PhaseManager.startNormalPhase'.
  // Pre-conditions from spec:
  //   pre: p <> null
  //   pre: self.isOperating
  //   pre: not self.allRedDwellActive
  //   pre: p.greenApproaches->forAll(a1 |
           p.greenApproaches->forAll(a2 |
             a1 = a2 or a1.direction <> a2.direction))
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.activePhase = p
  //   post: self.greenApproaches = p.greenApproaches
  //   post: self.allRedDwellActive = false
  // After mutations, call validate*() on the affected PhaseManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: startNormalPhase");
}

export async function transitionToYellow(): Promise<void> {
  // TODO: implement mutation logic for 'PhaseManager.transitionToYellow'.
  // Pre-conditions from spec:
  //   pre: self.activePhase <> null
  //   pre: self.isOperating
  //   pre: self.greenApproaches->notEmpty()
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.greenApproaches->isEmpty()
  // After mutations, call validate*() on the affected PhaseManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToYellow");
}

export async function transitionToRed(): Promise<void> {
  // TODO: implement mutation logic for 'PhaseManager.transitionToRed'.
  // Pre-conditions from spec:
  //   pre: self.greenApproaches->isEmpty()
  //   pre: self.isOperating
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.greenApproaches->isEmpty()
  //   post: self.allRedDwellActive = true
  // After mutations, call validate*() on the affected PhaseManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToRed");
}

export async function completeAllRedDwell(): Promise<void> {
  // TODO: implement mutation logic for 'PhaseManager.completeAllRedDwell'.
  // Pre-conditions from spec:
  //   pre: self.allRedDwellActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.allRedDwellActive = false
  // After mutations, call validate*() on the affected PhaseManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: completeAllRedDwell");
}

export async function emergencyAllRed(): Promise<void> {
  // TODO: implement mutation logic for 'PhaseManager.emergencyAllRed'.
  // Pre-conditions from spec:
  //   pre: self.isOperating
  //   pre: not self.allRedDwellActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.greenApproaches->isEmpty()
  //   post: self.allRedDwellActive = true
  //   post: self.activePhase = null
  // After mutations, call validate*() on the affected PhaseManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: emergencyAllRed");
}

export async function startSystem(): Promise<void> {
  // TODO: implement mutation logic for 'PhaseManager.startSystem'.
  // Pre-conditions from spec:
  //   pre: not self.isOperating
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperating = true
  //   post: self.activePhase = null
  //   post: self.greenApproaches->isEmpty()
  //   post: self.allRedDwellActive = false
  // After mutations, call validate*() on the affected PhaseManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: startSystem");
}

export async function stopSystem(): Promise<void> {
  // TODO: implement mutation logic for 'PhaseManager.stopSystem'.
  // Pre-conditions from spec:
  //   pre: self.isOperating
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperating = false
  //   post: self.greenApproaches->isEmpty()
  // After mutations, call validate*() on the affected PhaseManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: stopSystem");
}

// ─── Events on SafetyMonitor ───

export async function emergencyPreemption(): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.emergencyPreemption'.
  // Pre-conditions from spec:
  //   pre: not self.preemptionActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionActive = true
  //   post: self.allRedActive = true
  //   post: self.preemptionTimerElapsed = 0.0
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: emergencyPreemption");
}

export async function clearPreemption(): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.clearPreemption'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive
  //   pre: self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.preemptionTimerElapsed = 0.0
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearPreemption");
}

export async function advancePreemptionTimer(dt: number): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.advancePreemptionTimer'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive
  //   pre: dt >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionTimerElapsed = self.preemptionTimerElapsed@pre + dt
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: advancePreemptionTimer");
}

export async function startSystem(): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.startSystem'.
  // Pre-conditions from spec:
  //   pre: not self.preemptionActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.preemptionTimerElapsed = 0.0
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: startSystem");
}

export async function stopSystem(): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.stopSystem'.
  // Pre-conditions from spec:
  //   pre: not self.preemptionActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.preemptionTimerElapsed = 0.0
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: stopSystem");
}

// ─── Events on TimerService ───

export async function tickElapsedTimers(dt: number): Promise<void> {
  // TODO: implement mutation logic for 'TimerService.tickElapsedTimers'.
  // Pre-conditions from spec:
  //   pre: dt >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.yellowTimerElapsed = self.yellowTimerElapsed@pre + dt
  //   post: self.elapsedTime = self.elapsedTime@pre + dt
  // After mutations, call validate*() on the affected TimerService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: tickElapsedTimers");
}

export async function resetYellowTimer(): Promise<void> {
  // TODO: implement mutation logic for 'TimerService.resetYellowTimer'.
  // Pre-conditions from spec:
  //   pre: self.yellowTimerElapsed >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.yellowTimerElapsed = 0.0
  // After mutations, call validate*() on the affected TimerService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetYellowTimer");
}

export async function resetYellowTimerForRed(): Promise<void> {
  // TODO: implement mutation logic for 'TimerService.resetYellowTimerForRed'.
  // Pre-conditions from spec:
  //   pre: self.yellowTimerElapsed >= self.yellowIntervalSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.yellowTimerElapsed = 0.0
  // After mutations, call validate*() on the affected TimerService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetYellowTimerForRed");
}

export async function startSystem(): Promise<void> {
  // TODO: implement mutation logic for 'TimerService.startSystem'.
  // Pre-conditions from spec:
  //   pre: self.yellowTimerElapsed >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.yellowTimerElapsed = 0.0
  //   post: self.elapsedTime = 0.0
  // After mutations, call validate*() on the affected TimerService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: startSystem");
}

export async function stopSystem(): Promise<void> {
  // TODO: implement mutation logic for 'TimerService.stopSystem'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.yellowTimerElapsed = 0.0
  // After mutations, call validate*() on the affected TimerService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: stopSystem");
}

// ─── Events on TrafficLightSystem ───

export async function startNormalPhase(p: string): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.startNormalPhase'.
  // Pre-conditions from spec:
  //   pre: p <> null
  //   pre: self.isOperating
  //   pre: not self.preemptionActive
  //   pre: not self.allRedActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.activePhase = p
  //   post: self.greenApproaches = p.greenApproaches
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.yellowTimerElapsed = 0.0
  //   post: self.preemptionTimerElapsed = 0.0
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: startNormalPhase");
}

export async function transitionToYellow(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.transitionToYellow'.
  // Pre-conditions from spec:
  //   pre: self.activePhase <> null
  //   pre: self.isOperating
  //   pre: not self.preemptionActive
  //   pre: not self.allRedActive
  //   pre: self.greenApproaches->notEmpty()
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.greenApproaches->isEmpty()
  //   post: self.yellowTimerElapsed = 0.0
  //   post: self.yellowIntervalSeconds >= 3.0
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToYellow");
}

export async function transitionToRed(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.transitionToRed'.
  // Pre-conditions from spec:
  //   pre: self.yellowTimerElapsed >= self.yellowIntervalSeconds
  //   pre: self.isOperating
  //   pre: not self.preemptionActive
  //   pre: not self.allRedActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.greenApproaches->isEmpty()
  //   post: self.yellowTimerElapsed = 0.0
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToRed");
}

export async function emergencyPreemption(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.emergencyPreemption'.
  // Pre-conditions from spec:
  //   pre: self.isOperating
  //   pre: not self.preemptionActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionActive = true
  //   post: self.allRedActive = true
  //   post: self.greenApproaches->isEmpty()
  //   post: self.preemptionTimerElapsed = 0.0
  //   post: self.preemptionResponseTimeSeconds <= 1.0
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: emergencyPreemption");
}

export async function clearPreemption(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.clearPreemption'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive
  //   pre: self.preemptionTimerElapsed >= self.preemptionResponseTimeSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.preemptionTimerElapsed = 0.0
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearPreemption");
}

export async function registerPedestrianRequest(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.registerPedestrianRequest'.
  // Pre-conditions from spec:
  //   pre: not self.pedestrianRequested
  //   pre: not self.pedestrianRequestPending
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianRequested = true
  //   post: self.pedestrianRequestPending = true
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: registerPedestrianRequest");
}

export async function grantWalk(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.grantWalk'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianRequested
  //   pre: self.pedestrianRequestPending
  //   pre: self.greenApproaches->isEmpty()
  //   pre: not self.preemptionActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pedestrianRequested = false
  //   post: self.pedestrianRequestPending = false
  //   post: self.walkSignalActive = true
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: grantWalk");
}

export async function clearWalk(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.clearWalk'.
  // Pre-conditions from spec:
  //   pre: self.walkSignalActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.walkSignalActive = false
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearWalk");
}

export async function tickElapsedTimers(dt: number): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.tickElapsedTimers'.
  // Pre-conditions from spec:
  //   pre: dt >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.yellowTimerElapsed = self.yellowTimerElapsed@pre + dt
  //   post: self.preemptionTimerElapsed = self.preemptionTimerElapsed@pre + dt
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: tickElapsedTimers");
}

export async function startSystem(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.startSystem'.
  // Pre-conditions from spec:
  //   pre: not self.isOperating
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperating = true
  //   post: self.preemptionActive = false
  //   post: self.allRedActive = false
  //   post: self.pedestrianRequested = false
  //   post: self.pedestrianRequestPending = false
  //   post: self.walkSignalActive = false
  //   post: self.greenApproaches->isEmpty()
  //   post: self.yellowTimerElapsed = 0.0
  //   post: self.preemptionTimerElapsed = 0.0
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: startSystem");
}

export async function stopSystem(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystem.stopSystem'.
  // Pre-conditions from spec:
  //   pre: self.isOperating
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperating = false
  //   post: self.greenApproaches->isEmpty()
  //   post: self.walkSignalActive = false
  // After mutations, call validate*() on the affected TrafficLightSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: stopSystem");
}

// ─── Events on TrafficLightSystemFormalized ───

export async function rejectConflictingPhase(p: string): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectConflictingPhase'.
  // Pre-conditions from spec:
  //   pre: p.greenApproaches->forAll(a1 |
           p.greenApproaches->forAll(a2 |
             a1 = a2 or a1.direction <> a2.direction)) = false
  // After mutations, call validate*() on the affected TrafficLightSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectConflictingPhase");
}

export async function rejectTransitionToYellowNoGreen(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectTransitionToYellowNoGreen'.
  // Pre-conditions from spec:
  //   pre: self.greenApproaches->isEmpty()
  // After mutations, call validate*() on the affected TrafficLightSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectTransitionToYellowNoGreen");
}

export async function rejectDuplicatePreemption(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectDuplicatePreemption'.
  // Pre-conditions from spec:
  //   pre: self.preemptionActive
  // After mutations, call validate*() on the affected TrafficLightSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectDuplicatePreemption");
}

export async function rejectDuplicatePedestrianRequest(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectDuplicatePedestrianRequest'.
  // Pre-conditions from spec:
  //   pre: self.pedestrianRequested
  // After mutations, call validate*() on the affected TrafficLightSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectDuplicatePedestrianRequest");
}

export async function rejectWalkConflictingGreen(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectWalkConflictingGreen'.
  // Pre-conditions from spec:
  //   pre: self.greenApproaches->notEmpty()
  // After mutations, call validate*() on the affected TrafficLightSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectWalkConflictingGreen");
}

export async function rejectSystemAlreadyRunning(): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectSystemAlreadyRunning'.
  // Pre-conditions from spec:
  //   pre: self.isOperating
  // After mutations, call validate*() on the affected TrafficLightSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectSystemAlreadyRunning");
}

export async function rejectInvalidTickDt(dt: number): Promise<void> {
  // TODO: implement mutation logic for 'TrafficLightSystemFormalized.rejectInvalidTickDt'.
  // Pre-conditions from spec:
  //   pre: dt <= 0.0
  // After mutations, call validate*() on the affected TrafficLightSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectInvalidTickDt");
}
