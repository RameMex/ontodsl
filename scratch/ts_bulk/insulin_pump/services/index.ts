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

// ─── Events on AlertSystem ───

export async function raiseAlarm(reason: string): Promise<void> {
  // TODO: implement mutation logic for 'AlertSystem.raiseAlarm'.
  // Pre-conditions from spec:
  //   pre: reason = 'LOW_RESERVOIR'
         or reason = 'FAULT'
         or reason = 'MALFUNCTION'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmReason = reason
  //   post: self.maxAlertLatencyMin > 0.0
  // After mutations, call validate*() on the affected AlertSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseAlarm");
}

export async function clearAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'AlertSystem.clearAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = false
  // After mutations, call validate*() on the affected AlertSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearAlarm");
}

// ─── Events on BloodSugarSensor ───

export async function takeReading(rawValueMgDl: number, timestampMin: number): Promise<void> {
  // TODO: implement mutation logic for 'BloodSugarSensor.takeReading'.
  // Pre-conditions from spec:
  //   pre: timestampMin >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastReadingMgDl = rawValueMgDl
  //   post: self.readingTimestampMin = timestampMin
  //   post: self.readingValid =
            (rawValueMgDl >= self.minPlausibleMgDl
             and rawValueMgDl <= self.maxPlausibleMgDl)
  // After mutations, call validate*() on the affected BloodSugarSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: takeReading");
}

export async function rejectBadReading(rawValueMgDl: number): Promise<void> {
  // TODO: implement mutation logic for 'BloodSugarSensor.rejectBadReading'.
  // Pre-conditions from spec:
  //   pre: rawValueMgDl < self.minPlausibleMgDl
         or rawValueMgDl > self.maxPlausibleMgDl
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.readingValid = false
  //   post: self.lastReadingMgDl = rawValueMgDl
  // After mutations, call validate*() on the affected BloodSugarSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectBadReading");
}

// ─── Events on InsulinPumpSystem ───

export async function deliverInsulin(sugarMgDl: number, safeZoneLower: number, safeZoneUpper: number, riseRateMgDlPerMin: number): Promise<number> {
  // TODO: implement mutation logic for 'InsulinPumpSystem.deliverInsulin'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: not self.faultDetected
  //   pre: sugarMgDl >= 0.0
  //   pre: riseRateMgDlPerMin >= 0.0
  //   pre: safeZoneLower >= 0.0
  //   pre: safeZoneUpper > safeZoneLower
  //   pre: self.reservoirUnits > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result <= self.safeMaxDoseUnits
  //   post: result >= 0.0
  //   post: (sugarMgDl >= safeZoneLower and sugarMgDl <= safeZoneUpper)
            implies result = 0.0
  //   post: self.reservoirUnits = self.reservoirUnits@pre - result
  //   post: self.sensorReadingIntervalMin <= 10.0
  // After mutations, call validate*() on the affected InsulinPumpSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deliverInsulin");
}

export async function runSelfTest(passed: boolean): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystem.runSelfTest'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if passed then
            self.faultDetected = self.faultDetected@pre
          else
            self.faultDetected = true
          endif
  //   post: self.selfTestPeriodMin <= 1.0
  // After mutations, call validate*() on the affected InsulinPumpSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: runSelfTest");
}

export async function haltOnFault(reason: string): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystem.haltOnFault'.
  // Pre-conditions from spec:
  //   pre: self.faultDetected = true
  //   pre: reason <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperating = false
  //   post: self.alarmActive = true
  //   post: self.alarmReason = 'FAULT'
  //   post: self.maxFaultResponseMin > 0.0
  //   post: self.maxFaultResponseMin <= 1.0
  // After mutations, call validate*() on the affected InsulinPumpSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: haltOnFault");
}

export async function raiseAlarm(reason: string): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystem.raiseAlarm'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true or self.faultDetected = true
  //   pre: reason = 'LOW_RESERVOIR' or reason = 'MALFUNCTION'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmReason = reason
  //   post: self.lowReservoirThresholdUnits > 0.0
  //   post: self.maxAlertLatencyMin > 0.0
  // After mutations, call validate*() on the affected InsulinPumpSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseAlarm");
}

export async function configureSafeMax(newMaxUnits: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystem.configureSafeMax'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = false
  //   pre: newMaxUnits > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.safeMaxDoseUnits = newMaxUnits
  //   post: self.safeMaxDoseUnits > 0.0
  // After mutations, call validate*() on the affected InsulinPumpSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: configureSafeMax");
}

export async function checkReservoir(): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystem.checkReservoir'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reservoirIsLow =
            (self.reservoirUnits < self.lowReservoirThresholdUnits)
  //   post: self.reservoirIsLow implies self.alarmActive = true
  //   post: self.reservoirIsLow implies self.alarmReason = 'LOW_RESERVOIR'
  // After mutations, call validate*() on the affected InsulinPumpSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: checkReservoir");
}

// ─── Events on InsulinPumpSystemFormalized ───

export async function rejectOverdose(requestedDose: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.rejectOverdose'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: not self.faultDetected
  //   pre: requestedDose > self.safeMaxDoseUnits
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastDoseDelivered = self.lastDoseDelivered@pre
  //   post: self.reservoirUnits = self.reservoirUnits@pre
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOverdose");
}

export async function rejectNegativeDose(requestedDose: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.rejectNegativeDose'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: not self.faultDetected
  //   pre: requestedDose < 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastDoseDelivered = self.lastDoseDelivered@pre
  //   post: self.reservoirUnits = self.reservoirUnits@pre
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectNegativeDose");
}

export async function enforceFailSafe(requestedDose: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.enforceFailSafe'.
  // Pre-conditions from spec:
  //   pre: self.faultDetected = true
  //   pre: requestedDose > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperating = false
  //   post: self.lastDoseDelivered = self.lastDoseDelivered@pre
  //   post: self.reservoirUnits = self.reservoirUnits@pre
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceFailSafe");
}

export async function rejectInvalidReading(readingMgDl: number): Promise<void> {
  // TODO: implement mutation logic for 'InsulinPumpSystemFormalized.rejectInvalidReading'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: readingMgDl < 0.0 or readingMgDl > 1000.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultDetected = true
  //   post: self.isOperating = false
  //   post: self.alarmActive = true
  //   post: self.alarmReason = 'MALFUNCTION'
  // After mutations, call validate*() on the affected InsulinPumpSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectInvalidReading");
}

// ─── Events on PumpActuator ───

export async function deliverDose(dose: number): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.deliverDose'.
  // Pre-conditions from spec:
  //   pre: dose > 0.0
  //   pre: dose <= self.safeMaxDoseUnits
  //   pre: self.reservoirUnits >= dose
  //   pre: not self.delivering
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastDoseDelivered = dose
  //   post: self.reservoirUnits = self.reservoirUnits@pre - dose
  //   post: self.delivering = true
  //   post: self.lastDoseDelivered <= self.safeMaxDoseUnits
  //   post: self.reservoirUnits >= 0.0
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deliverDose");
}

export async function completeDose(): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.completeDose'.
  // Pre-conditions from spec:
  //   pre: self.delivering = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.delivering = false
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: completeDose");
}

export async function checkReservoir(): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.checkReservoir'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reservoirIsLow =
            (self.reservoirUnits < self.lowReservoirThresholdUnits)
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: checkReservoir");
}

export async function configureSafeMax(newMaxUnits: number): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.configureSafeMax'.
  // Pre-conditions from spec:
  //   pre: newMaxUnits > 0.0
  //   pre: not self.delivering
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.safeMaxDoseUnits = newMaxUnits
  //   post: self.safeMaxDoseUnits > 0.0
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: configureSafeMax");
}

export async function haltDelivery(): Promise<void> {
  // TODO: implement mutation logic for 'PumpActuator.haltDelivery'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.delivering = false
  // After mutations, call validate*() on the affected PumpActuator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: haltDelivery");
}

// ─── Events on SafetyMonitor ───

export async function runSelfTest(passed: boolean, timestampMin: number): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.runSelfTest'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  //   pre: timestampMin >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if passed then
            self.faultDetected = self.faultDetected@pre
          else
            self.faultDetected = true
          endif
  //   post: self.lastTestTimestampMin = timestampMin
  //   post: self.selfTestPeriodMin <= 1.0
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: runSelfTest");
}

export async function haltPump(): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.haltPump'.
  // Pre-conditions from spec:
  //   pre: self.faultDetected = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperating = false
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: haltPump");
}

export async function notifySensorFault(): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.notifySensorFault'.
  // Pre-conditions from spec:
  //   pre: self.isOperating = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultDetected = true
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: notifySensorFault");
}
