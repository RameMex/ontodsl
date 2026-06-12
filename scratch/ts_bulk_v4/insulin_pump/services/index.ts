// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { alertSystems, bloodSugarSensors, insulinPumpSystemFormalizeds, insulinPumpSystems, pumpActuators, safetyMonitors } from "../db/schema.js";
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

// ─── Events on AlertSystem ───

export async function raiseAlarm(__selfId: string, reason: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: reason = 'LOW_RESERVOIR'
         or reason = 'FAULT'
         or reason = 'MALFUNCTION'
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmReason = reason
  //   post: self.maxAlertLatencyMin > 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alertSystems).set({
      alarmActive: true,
      alarmReason: reason,
    }).where(eq(alertSystems.alertId, __selfId));
    // After mutation: re-validate against `validateAlertSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alertSystems).where(eq(alertSystems.alertId, __selfId)).get();
    // assertNoViolations(validateAlertSystem(row as never), "raiseAlarm");
  });
}

export async function clearAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  // Post-conditions from spec:
  //   post: self.alarmActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alertSystems).set({
      alarmActive: false,
    }).where(eq(alertSystems.alertId, __selfId));
    // After mutation: re-validate against `validateAlertSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alertSystems).where(eq(alertSystems.alertId, __selfId)).get();
    // assertNoViolations(validateAlertSystem(row as never), "clearAlarm");
  });
}

// ─── Events on BloodSugarSensor ───

export async function takeReading(__selfId: string, rawValueMgDl: number, timestampMin: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestampMin >= 0.0
  // Post-conditions from spec:
  //   post: self.lastReadingMgDl = rawValueMgDl
  //   post: self.readingTimestampMin = timestampMin
  //   post: self.readingValid =
            (rawValueMgDl >= self.minPlausibleMgDl
             and rawValueMgDl <= self.maxPlausibleMgDl)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bloodSugarSensors).set({
      lastReadingMgDl: rawValueMgDl,
      readingTimestampMin: timestampMin,
      readingValid: sql`(${rawValueMgDl} >= ${bloodSugarSensors.minPlausibleMgDl}) AND (${rawValueMgDl} <= ${bloodSugarSensors.maxPlausibleMgDl})`,
    }).where(eq(bloodSugarSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateBloodSugarSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bloodSugarSensors).where(eq(bloodSugarSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateBloodSugarSensor(row as never), "takeReading");
  });
}

export async function rejectBadReading(__selfId: string, rawValueMgDl: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: rawValueMgDl < self.minPlausibleMgDl
         or rawValueMgDl > self.maxPlausibleMgDl
  // Post-conditions from spec:
  //   post: self.readingValid = false
  //   post: self.lastReadingMgDl = rawValueMgDl
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bloodSugarSensors).set({
      readingValid: false,
      lastReadingMgDl: rawValueMgDl,
    }).where(eq(bloodSugarSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateBloodSugarSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bloodSugarSensors).where(eq(bloodSugarSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateBloodSugarSensor(row as never), "rejectBadReading");
  });
}

// ─── Events on InsulinPumpSystem ───

export async function deliverInsulin(__selfId: string, sugarMgDl: number, safeZoneLower: number, safeZoneUpper: number, riseRateMgDlPerMin: number): Promise<number> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: not self.faultDetected
  //   pre: sugarMgDl >= 0.0
  //   pre: riseRateMgDlPerMin >= 0.0
  //   pre: safeZoneLower >= 0.0
  //   pre: safeZoneUpper > safeZoneLower
  //   pre: self.reservoirUnits > 0.0
  // Post-conditions from spec:
  //   post: result <= self.safeMaxDoseUnits
  //   post: result >= 0.0
  //   post: (sugarMgDl >= safeZoneLower and sugarMgDl <= safeZoneUpper)
            implies result = 0.0
  //   post: self.reservoirUnits = self.reservoirUnits@pre - result
  //   post: self.sensorReadingIntervalMin <= 10.0
  // TODO: implement mutation logic for 'InsulinPumpSystem.deliverInsulin'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: deliverInsulin");
}

export async function runSelfTest(__selfId: string, passed: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  // Post-conditions from spec:
  //   post: if passed then
            self.faultDetected = self.faultDetected@pre
          else
            self.faultDetected = true
          endif
  //   post: self.selfTestPeriodMin <= 1.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystems).set({
      faultDetected: sql`CASE WHEN ${passed} THEN ${insulinPumpSystems.faultDetected} ELSE ${true} END`,
    }).where(eq(insulinPumpSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystems).where(eq(insulinPumpSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystem(row as never), "runSelfTest");
  });
}

export async function haltOnFault(__selfId: string, reason: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.faultDetected = true
  //   pre: reason <> null
  // Post-conditions from spec:
  //   post: self.isOperating = false
  //   post: self.alarmActive = true
  //   post: self.alarmReason = 'FAULT'
  //   post: self.maxFaultResponseMin > 0.0
  //   post: self.maxFaultResponseMin <= 1.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystems).set({
      isOperating: false,
      alarmActive: true,
      alarmReason: "FAULT",
    }).where(eq(insulinPumpSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystems).where(eq(insulinPumpSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystem(row as never), "haltOnFault");
  });
}

export async function raiseAlarm(__selfId: string, reason: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true or self.faultDetected = true
  //   pre: reason = 'LOW_RESERVOIR' or reason = 'MALFUNCTION'
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmReason = reason
  //   post: self.lowReservoirThresholdUnits > 0.0
  //   post: self.maxAlertLatencyMin > 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystems).set({
      alarmActive: true,
      alarmReason: reason,
    }).where(eq(insulinPumpSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystems).where(eq(insulinPumpSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystem(row as never), "raiseAlarm");
  });
}

export async function configureSafeMax(__selfId: string, newMaxUnits: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = false
  //   pre: newMaxUnits > 0.0
  // Post-conditions from spec:
  //   post: self.safeMaxDoseUnits = newMaxUnits
  //   post: self.safeMaxDoseUnits > 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystems).set({
      safeMaxDoseUnits: newMaxUnits,
    }).where(eq(insulinPumpSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystems).where(eq(insulinPumpSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystem(row as never), "configureSafeMax");
  });
}

export async function checkReservoir(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  // Post-conditions from spec:
  //   post: self.reservoirIsLow =
            (self.reservoirUnits < self.lowReservoirThresholdUnits)
  //   post: self.reservoirIsLow implies self.alarmActive = true
  //   post: self.reservoirIsLow implies self.alarmReason = 'LOW_RESERVOIR'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystems).set({
      reservoirIsLow: sql`${insulinPumpSystems.reservoirUnits} < ${insulinPumpSystems.lowReservoirThresholdUnits}`,
    }).where(eq(insulinPumpSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystems).where(eq(insulinPumpSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystem(row as never), "checkReservoir");
  });
}

// ─── Events on InsulinPumpSystemFormalized ───

export async function rejectOverdose(__selfId: string, requestedDose: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: not self.faultDetected
  //   pre: requestedDose > self.safeMaxDoseUnits
  // Post-conditions from spec:
  //   post: self.lastDoseDelivered = self.lastDoseDelivered@pre
  //   post: self.reservoirUnits = self.reservoirUnits@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      lastDoseDelivered: sql`${insulinPumpSystemFormalizeds.lastDoseDelivered}`,
      reservoirUnits: sql`${insulinPumpSystemFormalizeds.reservoirUnits}`,
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "rejectOverdose");
  });
}

export async function rejectNegativeDose(__selfId: string, requestedDose: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: not self.faultDetected
  //   pre: requestedDose < 0.0
  // Post-conditions from spec:
  //   post: self.lastDoseDelivered = self.lastDoseDelivered@pre
  //   post: self.reservoirUnits = self.reservoirUnits@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      lastDoseDelivered: sql`${insulinPumpSystemFormalizeds.lastDoseDelivered}`,
      reservoirUnits: sql`${insulinPumpSystemFormalizeds.reservoirUnits}`,
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "rejectNegativeDose");
  });
}

export async function enforceFailSafe(__selfId: string, requestedDose: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.faultDetected = true
  //   pre: requestedDose > 0.0
  // Post-conditions from spec:
  //   post: self.isOperating = false
  //   post: self.lastDoseDelivered = self.lastDoseDelivered@pre
  //   post: self.reservoirUnits = self.reservoirUnits@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      isOperating: false,
      lastDoseDelivered: sql`${insulinPumpSystemFormalizeds.lastDoseDelivered}`,
      reservoirUnits: sql`${insulinPumpSystemFormalizeds.reservoirUnits}`,
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "enforceFailSafe");
  });
}

export async function rejectInvalidReading(__selfId: string, readingMgDl: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: readingMgDl < 0.0 or readingMgDl > 1000.0
  // Post-conditions from spec:
  //   post: self.faultDetected = true
  //   post: self.isOperating = false
  //   post: self.alarmActive = true
  //   post: self.alarmReason = 'MALFUNCTION'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      faultDetected: true,
      isOperating: false,
      alarmActive: true,
      alarmReason: "MALFUNCTION",
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "rejectInvalidReading");
  });
}

// ─── Events on PumpActuator ───

export async function deliverDose(__selfId: string, dose: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: dose > 0.0
  //   pre: dose <= self.safeMaxDoseUnits
  //   pre: self.reservoirUnits >= dose
  //   pre: not self.delivering
  // Post-conditions from spec:
  //   post: self.lastDoseDelivered = dose
  //   post: self.reservoirUnits = self.reservoirUnits@pre - dose
  //   post: self.delivering = true
  //   post: self.lastDoseDelivered <= self.safeMaxDoseUnits
  //   post: self.reservoirUnits >= 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      lastDoseDelivered: dose,
      reservoirUnits: sql`${pumpActuators.reservoirUnits} - ${dose}`,
      delivering: true,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "deliverDose");
  });
}

export async function completeDose(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.delivering = true
  // Post-conditions from spec:
  //   post: self.delivering = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      delivering: false,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "completeDose");
  });
}

export async function checkReservoir(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.reservoirIsLow =
            (self.reservoirUnits < self.lowReservoirThresholdUnits)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      reservoirIsLow: sql`${pumpActuators.reservoirUnits} < ${pumpActuators.lowReservoirThresholdUnits}`,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "checkReservoir");
  });
}

export async function configureSafeMax(__selfId: string, newMaxUnits: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: newMaxUnits > 0.0
  //   pre: not self.delivering
  // Post-conditions from spec:
  //   post: self.safeMaxDoseUnits = newMaxUnits
  //   post: self.safeMaxDoseUnits > 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      safeMaxDoseUnits: newMaxUnits,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "configureSafeMax");
  });
}

export async function haltDelivery(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.delivering = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      delivering: false,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "haltDelivery");
  });
}

// ─── Events on SafetyMonitor ───

export async function runSelfTest(__selfId: string, passed: boolean, timestampMin: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: timestampMin >= 0.0
  // Post-conditions from spec:
  //   post: if passed then
            self.faultDetected = self.faultDetected@pre
          else
            self.faultDetected = true
          endif
  //   post: self.lastTestTimestampMin = timestampMin
  //   post: self.selfTestPeriodMin <= 1.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      faultDetected: sql`CASE WHEN ${passed} THEN ${safetyMonitors.faultDetected} ELSE ${true} END`,
      lastTestTimestampMin: timestampMin,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "runSelfTest");
  });
}

export async function haltPump(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.faultDetected = true
  // Post-conditions from spec:
  //   post: self.isOperating = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      isOperating: false,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "haltPump");
  });
}

export async function notifySensorFault(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  // Post-conditions from spec:
  //   post: self.faultDetected = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(safetyMonitors).set({
      faultDetected: true,
    }).where(eq(safetyMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSafetyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(safetyMonitors).where(eq(safetyMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSafetyMonitor(row as never), "notifySensorFault");
  });
}
