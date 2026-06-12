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

// ─── Events on EStopInterruptHandler ───

export async function detectEStopSignal(timestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'EStopInterruptHandler.detectEStopSignal'.
  // Pre-conditions from spec:
  //   pre: not self.eStopSignalActive
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.eStopSignalActive = true
  //   post: self.signalTimestampMs = timestampMs
  //   post: self.responseLatencyUs <= self.maxResponseLatencyUs
  // After mutations, call validate*() on the affected EStopInterruptHandler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectEStopSignal");
}

export async function clearEStopSignal(): Promise<void> {
  // TODO: implement mutation logic for 'EStopInterruptHandler.clearEStopSignal'.
  // Pre-conditions from spec:
  //   pre: self.eStopSignalActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.eStopSignalActive = false
  // After mutations, call validate*() on the affected EStopInterruptHandler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearEStopSignal");
}

// ─── Events on FailsafeStateManager ───

export async function enterFailsafeFromEStop(timestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'FailsafeStateManager.enterFailsafeFromEStop'.
  // Pre-conditions from spec:
  //   pre: not self.isFailsafeActive
  //   pre: not self.isLatched
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isFailsafeActive = true
  //   post: self.failSafeEntryTimeMs = timestampMs
  //   post: self.failSafeSource = 'ESTOP'
  //   post: self.isLatched = true
  // After mutations, call validate*() on the affected FailsafeStateManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enterFailsafeFromEStop");
}

export async function enterFailsafeFromSensorFault(timestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'FailsafeStateManager.enterFailsafeFromSensorFault'.
  // Pre-conditions from spec:
  //   pre: not self.isFailsafeActive
  //   pre: not self.isLatched
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isFailsafeActive = true
  //   post: self.failSafeEntryTimeMs = timestampMs
  //   post: self.failSafeSource = 'SENSOR_FAULT'
  //   post: self.isLatched = false
  // After mutations, call validate*() on the affected FailsafeStateManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enterFailsafeFromSensorFault");
}

export async function resetFailsafeMode(): Promise<void> {
  // TODO: implement mutation logic for 'FailsafeStateManager.resetFailsafeMode'.
  // Pre-conditions from spec:
  //   pre: self.isFailsafeActive
  //   pre: not self.isLatched or self.failSafeSource = 'ESTOP'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isFailsafeActive = false
  //   post: self.isLatched = false
  // After mutations, call validate*() on the affected FailsafeStateManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetFailsafeMode");
}

export async function rejectMotionCommand(commandId: string, commandType: string): Promise<void> {
  // TODO: implement mutation logic for 'FailsafeStateManager.rejectMotionCommand'.
  // Pre-conditions from spec:
  //   pre: self.isFailsafeActive
  //   pre: self.rejectionActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: true
  // After mutations, call validate*() on the affected FailsafeStateManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectMotionCommand");
}

export async function acceptMotionCommand(commandId: string, commandType: string): Promise<void> {
  // TODO: implement mutation logic for 'FailsafeStateManager.acceptMotionCommand'.
  // Pre-conditions from spec:
  //   pre: not self.isFailsafeActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: true
  // After mutations, call validate*() on the affected FailsafeStateManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: acceptMotionCommand");
}

// ─── Events on ManualResetController ───

export async function receiveResetRequest(timestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'ManualResetController.receiveResetRequest'.
  // Pre-conditions from spec:
  //   pre: not self.manualResetInputActive
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.manualResetInputActive = true
  //   post: self.resetRequestTimestampMs = timestampMs
  //   post: self.resetValid = true
  // After mutations, call validate*() on the affected ManualResetController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: receiveResetRequest");
}

export async function consumeResetRequest(): Promise<void> {
  // TODO: implement mutation logic for 'ManualResetController.consumeResetRequest'.
  // Pre-conditions from spec:
  //   pre: self.manualResetInputActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.manualResetInputActive = false
  // After mutations, call validate*() on the affected ManualResetController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: consumeResetRequest");
}

// ─── Events on MotionOutputController ───

export async function deEnergizeAllOutputs(timestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'MotionOutputController.deEnergizeAllOutputs'.
  // Pre-conditions from spec:
  //   pre: not self.allOutputsDeEnergized
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.allOutputsDeEnergized = true
  //   post: self.lastDeEnergizeTimestampMs = timestampMs
  //   post: self.motionOutputSet->forAll(id | true)
  // After mutations, call validate*() on the affected MotionOutputController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deEnergizeAllOutputs");
}

export async function reEnergizeAllOutputs(): Promise<void> {
  // TODO: implement mutation logic for 'MotionOutputController.reEnergizeAllOutputs'.
  // Pre-conditions from spec:
  //   pre: self.allOutputsDeEnergized
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.allOutputsDeEnergized = false
  // After mutations, call validate*() on the affected MotionOutputController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: reEnergizeAllOutputs");
}

export async function issueMotionCommand(outputId: string, commandType: string): Promise<void> {
  // TODO: implement mutation logic for 'MotionOutputController.issueMotionCommand'.
  // Pre-conditions from spec:
  //   pre: not self.allOutputsDeEnergized
  //   pre: outputId <> null
  //   pre: self.motionOutputSet->includes(outputId)
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: true
  // After mutations, call validate*() on the affected MotionOutputController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: issueMotionCommand");
}

// ─── Events on SafetyControllerFormalized ───

export async function rejectMotionCommandDuringFailsafe(commandId: string, commandType: string): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerFormalized.rejectMotionCommandDuringFailsafe'.
  // Pre-conditions from spec:
  //   pre: self.isFailsafeActive
  //   pre: self.rejectionActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: true
  // After mutations, call validate*() on the affected SafetyControllerFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectMotionCommandDuringFailsafe");
}

export async function enforceEStopLatch(activationTimestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerFormalized.enforceEStopLatch'.
  // Pre-conditions from spec:
  //   pre: self.eStopInputActive
  //   pre: not self.manualResetInputActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.eStopInputActive
  //   post: self.isFailsafeActive
  //   post: self.allMotionOutputsDeEnergized
  //   post: self.eStopResponseTimeMs = activationTimestampMs - self.lastEStopTimestampMs
  //   post: self.eStopResponseTimeMs >= 0.0
  //   post: self.eStopResponseTimeMs <= self.maxEStopLatencyMs
  // After mutations, call validate*() on the affected SafetyControllerFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceEStopLatch");
}

export async function autoRecoverFromSensorFault(recoveryTimestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerFormalized.autoRecoverFromSensorFault'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultDetected
  //   pre: self.isFailsafeActive
  //   pre: not self.eStopInputActive
  //   pre: recoveryTimestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = false
  //   post: self.isFailsafeActive = false
  //   post: self.allMotionOutputsDeEnergized = false
  // After mutations, call validate*() on the affected SafetyControllerFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: autoRecoverFromSensorFault");
}

export async function transitionToFailsafeDueToSensorFault(sensorId: string, faultTimestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerFormalized.transitionToFailsafeDueToSensorFault'.
  // Pre-conditions from spec:
  //   pre: sensorId <> null
  //   pre: faultTimestampMs >= 0.0
  //   pre: not self.eStopInputActive
  //   pre: not self.sensorFaultDetected
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = true
  //   post: self.isFailsafeActive = true
  //   post: self.allMotionOutputsDeEnergized = true
  //   post: self.lastSensorFaultTimestampMs = faultTimestampMs
  // After mutations, call validate*() on the affected SafetyControllerFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToFailsafeDueToSensorFault");
}

// ─── Events on SafetyControllerSystem ───

export async function activateEStop(activationTimestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerSystem.activateEStop'.
  // Pre-conditions from spec:
  //   pre: not self.eStopInputActive
  //   pre: activationTimestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.eStopInputActive = true
  //   post: self.isFailsafeActive = true
  //   post: self.allMotionOutputsDeEnergized = true
  //   post: self.lastEStopTimestampMs = activationTimestampMs
  //   post: self.eStopResponseTimeMs = self.lastEStopTimestampMs - self.lastEStopTimestampMs@pre
  //   post: self.eStopResponseTimeMs >= 0.0
  //   post: self.eStopResponseTimeMs <= self.maxEStopLatencyMs
  // After mutations, call validate*() on the affected SafetyControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: activateEStop");
}

export async function manualReset(resetTimestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerSystem.manualReset'.
  // Pre-conditions from spec:
  //   pre: self.eStopInputActive
  //   pre: self.manualResetInputActive = true
  //   pre: self.isFailsafeActive
  //   pre: resetTimestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.eStopInputActive = false
  //   post: self.manualResetInputActive = false
  //   post: self.isFailsafeActive = false
  //   post: self.allMotionOutputsDeEnergized = false
  //   post: self.rejectionActive = false
  // After mutations, call validate*() on the affected SafetyControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: manualReset");
}

export async function detectSensorFault(faultTimestampMs: number, faultReported: boolean): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerSystem.detectSensorFault'.
  // Pre-conditions from spec:
  //   pre: not self.sensorFaultDetected
  //   pre: faultReported
  //   pre: faultTimestampMs >= 0.0
  //   pre: not self.eStopInputActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = true
  //   post: self.isFailsafeActive = true
  //   post: self.allMotionOutputsDeEnergized = true
  //   post: self.lastSensorFaultTimestampMs = faultTimestampMs
  //   post: not self.sensorFaultDetected or self.isFailsafeActive
  // After mutations, call validate*() on the affected SafetyControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectSensorFault");
}

export async function sensorFaultRecovery(recoveryTimestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerSystem.sensorFaultRecovery'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultDetected
  //   pre: self.isFailsafeActive
  //   pre: not self.eStopInputActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = false
  //   post: self.isFailsafeActive = false
  //   post: self.allMotionOutputsDeEnergized = false
  // After mutations, call validate*() on the affected SafetyControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: sensorFaultRecovery");
}

export async function rejectMotionCommand(commandId: string, commandType: string): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerSystem.rejectMotionCommand'.
  // Pre-conditions from spec:
  //   pre: self.isFailsafeActive
  //   pre: self.rejectionActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: true
  // After mutations, call validate*() on the affected SafetyControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectMotionCommand");
}

export async function acceptMotionCommand(commandId: string, commandType: string): Promise<void> {
  // TODO: implement mutation logic for 'SafetyControllerSystem.acceptMotionCommand'.
  // Pre-conditions from spec:
  //   pre: not self.isFailsafeActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: true
  // After mutations, call validate*() on the affected SafetyControllerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: acceptMotionCommand");
}

// ─── Events on SafetySensorManager ───

export async function detectSensorFault(sensorId: string, faultTimestampMs: number, faultReported: boolean): Promise<void> {
  // TODO: implement mutation logic for 'SafetySensorManager.detectSensorFault'.
  // Pre-conditions from spec:
  //   pre: not self.sensorFaultDetected
  //   pre: faultReported
  //   pre: sensorId <> null
  //   pre: faultTimestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = true
  //   post: self.sensorFaultTimestampMs = faultTimestampMs
  // After mutations, call validate*() on the affected SafetySensorManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectSensorFault");
}

export async function clearSensorFault(recoveryTimestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'SafetySensorManager.clearSensorFault'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultDetected
  //   pre: recoveryTimestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = false
  //   post: self.faultRecoveryTimestampMs = recoveryTimestampMs
  // After mutations, call validate*() on the affected SafetySensorManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearSensorFault");
}

// ─── Events on ScanCycleSynchronizer ───

export async function startNextCycle(cycleId: string, startTimestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'ScanCycleSynchronizer.startNextCycle'.
  // Pre-conditions from spec:
  //   pre: cycleId <> null
  //   pre: startTimestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentCycleId = cycleId
  //   post: self.cycleStartTimestampMs = startTimestampMs
  //   post: self.cycleCount = self.cycleCount + 1
  //   post: self.faultWithinCurrentCycle = false
  // After mutations, call validate*() on the affected ScanCycleSynchronizer snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: startNextCycle");
}

export async function recordFaultInCycle(timestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'ScanCycleSynchronizer.recordFaultInCycle'.
  // Pre-conditions from spec:
  //   pre: not self.faultWithinCurrentCycle
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultWithinCurrentCycle = true
  //   post: self.eStopResponseTimeMs = timestampMs - self.cycleStartTimestampMs
  //   post: self.eStopResponseTimeMs >= 0.0
  //   post: self.eStopResponseTimeMs <= self.maxEStopLatencyMs
  // After mutations, call validate*() on the affected ScanCycleSynchronizer snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: recordFaultInCycle");
}

export async function completeCycle(): Promise<void> {
  // TODO: implement mutation logic for 'ScanCycleSynchronizer.completeCycle'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultWithinCurrentCycle = false
  // After mutations, call validate*() on the affected ScanCycleSynchronizer snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: completeCycle");
}
