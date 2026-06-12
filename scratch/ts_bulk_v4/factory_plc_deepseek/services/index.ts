// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { estopInterruptHandlers, failsafeStateManagers, manualResetControllers, motionOutputControllers, safetyControllerFormalizeds, safetyControllerSystems, safetySensorManagers, scanCycleSynchronizers } from "../db/schema.js";
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

// ─── Events on EStopInterruptHandler ───

export async function detectEStopSignal(__selfId: string, timestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.eStopSignalActive
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.eStopSignalActive = true
  //   post: self.signalTimestampMs = timestampMs
  //   post: self.responseLatencyUs <= self.maxResponseLatencyUs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(estopInterruptHandlers).set({
      eStopSignalActive: true,
      signalTimestampMs: timestampMs,
    }).where(eq(estopInterruptHandlers.handlerId, __selfId));
    // After mutation: re-validate against `validateEStopInterruptHandler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(estopInterruptHandlers).where(eq(estopInterruptHandlers.handlerId, __selfId)).get();
    // assertNoViolations(validateEStopInterruptHandler(row as never), "detectEStopSignal");
  });
}

export async function clearEStopSignal(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.eStopSignalActive
  // Post-conditions from spec:
  //   post: self.eStopSignalActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(estopInterruptHandlers).set({
      eStopSignalActive: false,
    }).where(eq(estopInterruptHandlers.handlerId, __selfId));
    // After mutation: re-validate against `validateEStopInterruptHandler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(estopInterruptHandlers).where(eq(estopInterruptHandlers.handlerId, __selfId)).get();
    // assertNoViolations(validateEStopInterruptHandler(row as never), "clearEStopSignal");
  });
}

// ─── Events on FailsafeStateManager ───

export async function enterFailsafeFromEStop(__selfId: string, timestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isFailsafeActive
  //   pre: not self.isLatched
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.isFailsafeActive = true
  //   post: self.failSafeEntryTimeMs = timestampMs
  //   post: self.failSafeSource = 'ESTOP'
  //   post: self.isLatched = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(failsafeStateManagers).set({
      isFailsafeActive: true,
      failSafeEntryTimeMs: timestampMs,
      failSafeSource: "ESTOP",
      isLatched: true,
    }).where(eq(failsafeStateManagers.managerId, __selfId));
    // After mutation: re-validate against `validateFailsafeStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(failsafeStateManagers).where(eq(failsafeStateManagers.managerId, __selfId)).get();
    // assertNoViolations(validateFailsafeStateManager(row as never), "enterFailsafeFromEStop");
  });
}

export async function enterFailsafeFromSensorFault(__selfId: string, timestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isFailsafeActive
  //   pre: not self.isLatched
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.isFailsafeActive = true
  //   post: self.failSafeEntryTimeMs = timestampMs
  //   post: self.failSafeSource = 'SENSOR_FAULT'
  //   post: self.isLatched = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(failsafeStateManagers).set({
      isFailsafeActive: true,
      failSafeEntryTimeMs: timestampMs,
      failSafeSource: "SENSOR_FAULT",
      isLatched: false,
    }).where(eq(failsafeStateManagers.managerId, __selfId));
    // After mutation: re-validate against `validateFailsafeStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(failsafeStateManagers).where(eq(failsafeStateManagers.managerId, __selfId)).get();
    // assertNoViolations(validateFailsafeStateManager(row as never), "enterFailsafeFromSensorFault");
  });
}

export async function resetFailsafeMode(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFailsafeActive
  //   pre: not self.isLatched or self.failSafeSource = 'ESTOP'
  // Post-conditions from spec:
  //   post: self.isFailsafeActive = false
  //   post: self.isLatched = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(failsafeStateManagers).set({
      isFailsafeActive: false,
      isLatched: false,
    }).where(eq(failsafeStateManagers.managerId, __selfId));
    // After mutation: re-validate against `validateFailsafeStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(failsafeStateManagers).where(eq(failsafeStateManagers.managerId, __selfId)).get();
    // assertNoViolations(validateFailsafeStateManager(row as never), "resetFailsafeMode");
  });
}

export async function rejectMotionCommand(__selfId: string, commandId: string, commandType: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFailsafeActive
  //   pre: self.rejectionActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec:
  //   post: true
  // TODO: implement mutation logic for 'FailsafeStateManager.rejectMotionCommand'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectMotionCommand");
}

export async function acceptMotionCommand(__selfId: string, commandId: string, commandType: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isFailsafeActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec:
  //   post: true
  // TODO: implement mutation logic for 'FailsafeStateManager.acceptMotionCommand'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: acceptMotionCommand");
}

// ─── Events on ManualResetController ───

export async function receiveResetRequest(__selfId: string, timestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.manualResetInputActive
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.manualResetInputActive = true
  //   post: self.resetRequestTimestampMs = timestampMs
  //   post: self.resetValid = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(manualResetControllers).set({
      manualResetInputActive: true,
      resetRequestTimestampMs: timestampMs,
      resetValid: true,
    }).where(eq(manualResetControllers.resetControllerId, __selfId));
    // After mutation: re-validate against `validateManualResetController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(manualResetControllers).where(eq(manualResetControllers.resetControllerId, __selfId)).get();
    // assertNoViolations(validateManualResetController(row as never), "receiveResetRequest");
  });
}

export async function consumeResetRequest(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.manualResetInputActive
  // Post-conditions from spec:
  //   post: self.manualResetInputActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(manualResetControllers).set({
      manualResetInputActive: false,
    }).where(eq(manualResetControllers.resetControllerId, __selfId));
    // After mutation: re-validate against `validateManualResetController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(manualResetControllers).where(eq(manualResetControllers.resetControllerId, __selfId)).get();
    // assertNoViolations(validateManualResetController(row as never), "consumeResetRequest");
  });
}

// ─── Events on MotionOutputController ───

export async function deEnergizeAllOutputs(__selfId: string, timestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.allOutputsDeEnergized
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.allOutputsDeEnergized = true
  //   post: self.lastDeEnergizeTimestampMs = timestampMs
  //   post: self.motionOutputSet->forAll(id | true)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(motionOutputControllers).set({
      allOutputsDeEnergized: true,
      lastDeEnergizeTimestampMs: timestampMs,
    }).where(eq(motionOutputControllers.outputControllerId, __selfId));
    // After mutation: re-validate against `validateMotionOutputController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(motionOutputControllers).where(eq(motionOutputControllers.outputControllerId, __selfId)).get();
    // assertNoViolations(validateMotionOutputController(row as never), "deEnergizeAllOutputs");
  });
}

export async function reEnergizeAllOutputs(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.allOutputsDeEnergized
  // Post-conditions from spec:
  //   post: self.allOutputsDeEnergized = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(motionOutputControllers).set({
      allOutputsDeEnergized: false,
    }).where(eq(motionOutputControllers.outputControllerId, __selfId));
    // After mutation: re-validate against `validateMotionOutputController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(motionOutputControllers).where(eq(motionOutputControllers.outputControllerId, __selfId)).get();
    // assertNoViolations(validateMotionOutputController(row as never), "reEnergizeAllOutputs");
  });
}

export async function issueMotionCommand(__selfId: string, outputId: string, commandType: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.allOutputsDeEnergized
  //   pre: outputId <> null
  //   pre: self.motionOutputSet->includes(outputId)
  // Post-conditions from spec:
  //   post: true
  // TODO: implement mutation logic for 'MotionOutputController.issueMotionCommand'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: issueMotionCommand");
}

// ─── Events on SafetyControllerFormalized ───

export async function rejectMotionCommandDuringFailsafe(__selfId: string, commandId: string, commandType: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFailsafeActive
  //   pre: self.rejectionActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec:
  //   post: true
  // TODO: implement mutation logic for 'SafetyControllerFormalized.rejectMotionCommandDuringFailsafe'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectMotionCommandDuringFailsafe");
}

export async function enforceEStopLatch(__selfId: string, activationTimestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.eStopInputActive
  //   pre: not self.manualResetInputActive
  // Post-conditions from spec:
  //   post: self.eStopInputActive
  //   post: self.isFailsafeActive
  //   post: self.allMotionOutputsDeEnergized
  //   post: self.eStopResponseTimeMs = activationTimestampMs - self.lastEStopTimestampMs
  //   post: self.eStopResponseTimeMs >= 0.0
  //   post: self.eStopResponseTimeMs <= self.maxEStopLatencyMs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyControllerFormalizeds).set({
      eStopResponseTimeMs: sql`${activationTimestampMs} - ${safetyControllerFormalizeds.lastEStopTimestampMs}`,
    }).where(eq(safetyControllerFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateSafetyControllerFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyControllerFormalizeds).where(eq(safetyControllerFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateSafetyControllerFormalized(row as never), "enforceEStopLatch");
  });
}

export async function autoRecoverFromSensorFault(__selfId: string, recoveryTimestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultDetected
  //   pre: self.isFailsafeActive
  //   pre: not self.eStopInputActive
  //   pre: recoveryTimestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = false
  //   post: self.isFailsafeActive = false
  //   post: self.allMotionOutputsDeEnergized = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyControllerFormalizeds).set({
      sensorFaultDetected: false,
      isFailsafeActive: false,
      allMotionOutputsDeEnergized: false,
    }).where(eq(safetyControllerFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateSafetyControllerFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyControllerFormalizeds).where(eq(safetyControllerFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateSafetyControllerFormalized(row as never), "autoRecoverFromSensorFault");
  });
}

export async function transitionToFailsafeDueToSensorFault(__selfId: string, sensorId: string, faultTimestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sensorId <> null
  //   pre: faultTimestampMs >= 0.0
  //   pre: not self.eStopInputActive
  //   pre: not self.sensorFaultDetected
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = true
  //   post: self.isFailsafeActive = true
  //   post: self.allMotionOutputsDeEnergized = true
  //   post: self.lastSensorFaultTimestampMs = faultTimestampMs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyControllerFormalizeds).set({
      sensorFaultDetected: true,
      isFailsafeActive: true,
      allMotionOutputsDeEnergized: true,
      lastSensorFaultTimestampMs: faultTimestampMs,
    }).where(eq(safetyControllerFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateSafetyControllerFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyControllerFormalizeds).where(eq(safetyControllerFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateSafetyControllerFormalized(row as never), "transitionToFailsafeDueToSensorFault");
  });
}

// ─── Events on SafetyControllerSystem ───

export async function activateEStop(__selfId: string, activationTimestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.eStopInputActive
  //   pre: activationTimestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.eStopInputActive = true
  //   post: self.isFailsafeActive = true
  //   post: self.allMotionOutputsDeEnergized = true
  //   post: self.lastEStopTimestampMs = activationTimestampMs
  //   post: self.eStopResponseTimeMs = self.lastEStopTimestampMs - self.lastEStopTimestampMs@pre
  //   post: self.eStopResponseTimeMs >= 0.0
  //   post: self.eStopResponseTimeMs <= self.maxEStopLatencyMs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyControllerSystems).set({
      eStopInputActive: true,
      isFailsafeActive: true,
      allMotionOutputsDeEnergized: true,
      lastEStopTimestampMs: activationTimestampMs,
      eStopResponseTimeMs: sql`${safetyControllerSystems.lastEStopTimestampMs} - ${safetyControllerSystems.lastEStopTimestampMs}`,
    }).where(eq(safetyControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateSafetyControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyControllerSystems).where(eq(safetyControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateSafetyControllerSystem(row as never), "activateEStop");
  });
}

export async function manualReset(__selfId: string, resetTimestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.eStopInputActive
  //   pre: self.manualResetInputActive = true
  //   pre: self.isFailsafeActive
  //   pre: resetTimestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.eStopInputActive = false
  //   post: self.manualResetInputActive = false
  //   post: self.isFailsafeActive = false
  //   post: self.allMotionOutputsDeEnergized = false
  //   post: self.rejectionActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyControllerSystems).set({
      eStopInputActive: false,
      manualResetInputActive: false,
      isFailsafeActive: false,
      allMotionOutputsDeEnergized: false,
      rejectionActive: false,
    }).where(eq(safetyControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateSafetyControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyControllerSystems).where(eq(safetyControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateSafetyControllerSystem(row as never), "manualReset");
  });
}

export async function detectSensorFault(__selfId: string, faultTimestampMs: number, faultReported: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.sensorFaultDetected
  //   pre: faultReported
  //   pre: faultTimestampMs >= 0.0
  //   pre: not self.eStopInputActive
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = true
  //   post: self.isFailsafeActive = true
  //   post: self.allMotionOutputsDeEnergized = true
  //   post: self.lastSensorFaultTimestampMs = faultTimestampMs
  //   post: not self.sensorFaultDetected or self.isFailsafeActive
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyControllerSystems).set({
      sensorFaultDetected: true,
      isFailsafeActive: true,
      allMotionOutputsDeEnergized: true,
      lastSensorFaultTimestampMs: faultTimestampMs,
    }).where(eq(safetyControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateSafetyControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyControllerSystems).where(eq(safetyControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateSafetyControllerSystem(row as never), "detectSensorFault");
  });
}

export async function sensorFaultRecovery(__selfId: string, recoveryTimestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultDetected
  //   pre: self.isFailsafeActive
  //   pre: not self.eStopInputActive
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = false
  //   post: self.isFailsafeActive = false
  //   post: self.allMotionOutputsDeEnergized = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyControllerSystems).set({
      sensorFaultDetected: false,
      isFailsafeActive: false,
      allMotionOutputsDeEnergized: false,
    }).where(eq(safetyControllerSystems.controllerId, __selfId));
    // After mutation: re-validate against `validateSafetyControllerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyControllerSystems).where(eq(safetyControllerSystems.controllerId, __selfId)).get();
    // assertNoViolations(validateSafetyControllerSystem(row as never), "sensorFaultRecovery");
  });
}

export async function rejectMotionCommand(__selfId: string, commandId: string, commandType: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFailsafeActive
  //   pre: self.rejectionActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec:
  //   post: true
  // TODO: implement mutation logic for 'SafetyControllerSystem.rejectMotionCommand'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectMotionCommand");
}

export async function acceptMotionCommand(__selfId: string, commandId: string, commandType: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isFailsafeActive
  //   pre: commandId <> null
  //   pre: commandType <> null
  // Post-conditions from spec:
  //   post: true
  // TODO: implement mutation logic for 'SafetyControllerSystem.acceptMotionCommand'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: acceptMotionCommand");
}

// ─── Events on SafetySensorManager ───

export async function detectSensorFault(__selfId: string, sensorId: string, faultTimestampMs: number, faultReported: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.sensorFaultDetected
  //   pre: faultReported
  //   pre: sensorId <> null
  //   pre: faultTimestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = true
  //   post: self.sensorFaultTimestampMs = faultTimestampMs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetySensorManagers).set({
      sensorFaultDetected: true,
      sensorFaultTimestampMs: faultTimestampMs,
    }).where(eq(safetySensorManagers.sensorManagerId, __selfId));
    // After mutation: re-validate against `validateSafetySensorManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetySensorManagers).where(eq(safetySensorManagers.sensorManagerId, __selfId)).get();
    // assertNoViolations(validateSafetySensorManager(row as never), "detectSensorFault");
  });
}

export async function clearSensorFault(__selfId: string, recoveryTimestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultDetected
  //   pre: recoveryTimestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = false
  //   post: self.faultRecoveryTimestampMs = recoveryTimestampMs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetySensorManagers).set({
      sensorFaultDetected: false,
      faultRecoveryTimestampMs: recoveryTimestampMs,
    }).where(eq(safetySensorManagers.sensorManagerId, __selfId));
    // After mutation: re-validate against `validateSafetySensorManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetySensorManagers).where(eq(safetySensorManagers.sensorManagerId, __selfId)).get();
    // assertNoViolations(validateSafetySensorManager(row as never), "clearSensorFault");
  });
}

// ─── Events on ScanCycleSynchronizer ───

export async function startNextCycle(__selfId: string, cycleId: string, startTimestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: cycleId <> null
  //   pre: startTimestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.currentCycleId = cycleId
  //   post: self.cycleStartTimestampMs = startTimestampMs
  //   post: self.cycleCount = self.cycleCount + 1
  //   post: self.faultWithinCurrentCycle = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(scanCycleSynchronizers).set({
      currentCycleId: cycleId,
      cycleStartTimestampMs: startTimestampMs,
      cycleCount: sql`${scanCycleSynchronizers.cycleCount} + ${1}`,
      faultWithinCurrentCycle: false,
    }).where(eq(scanCycleSynchronizers.synchId, __selfId));
    // After mutation: re-validate against `validateScanCycleSynchronizer` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(scanCycleSynchronizers).where(eq(scanCycleSynchronizers.synchId, __selfId)).get();
    // assertNoViolations(validateScanCycleSynchronizer(row as never), "startNextCycle");
  });
}

export async function recordFaultInCycle(__selfId: string, timestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.faultWithinCurrentCycle
  //   pre: timestampMs >= 0.0
  // Post-conditions from spec:
  //   post: self.faultWithinCurrentCycle = true
  //   post: self.eStopResponseTimeMs = timestampMs - self.cycleStartTimestampMs
  //   post: self.eStopResponseTimeMs >= 0.0
  //   post: self.eStopResponseTimeMs <= self.maxEStopLatencyMs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(scanCycleSynchronizers).set({
      faultWithinCurrentCycle: true,
      eStopResponseTimeMs: sql`${timestampMs} - ${scanCycleSynchronizers.cycleStartTimestampMs}`,
    }).where(eq(scanCycleSynchronizers.synchId, __selfId));
    // After mutation: re-validate against `validateScanCycleSynchronizer` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(scanCycleSynchronizers).where(eq(scanCycleSynchronizers.synchId, __selfId)).get();
    // assertNoViolations(validateScanCycleSynchronizer(row as never), "recordFaultInCycle");
  });
}

export async function completeCycle(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.faultWithinCurrentCycle = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(scanCycleSynchronizers).set({
      faultWithinCurrentCycle: false,
    }).where(eq(scanCycleSynchronizers.synchId, __selfId));
    // After mutation: re-validate against `validateScanCycleSynchronizer` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(scanCycleSynchronizers).where(eq(scanCycleSynchronizers.synchId, __selfId)).get();
    // assertNoViolations(validateScanCycleSynchronizer(row as never), "completeCycle");
  });
}
