// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { alarmManagers, bloodSugarSensors, doseCalculators, hardwareFaultDetectors, insulinPumpControlSystems, insulinPumpSystemFormalizeds, pumpActuators } from "../db/schema.js";
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

// ─── Events on AlarmManager ───

export async function soundMalfunctionAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.malfunctionAlarmActive
  // Post-conditions from spec:
  //   post: self.malfunctionAlarmActive = true
  //   post: self.alarmActive = true
  //   post: self.alarmSoundOn = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      malfunctionAlarmActive: true,
      alarmActive: true,
      alarmSoundOn: true,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "soundMalfunctionAlarm");
  });
}

export async function soundLowReservoirAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.lowReservoirAlarmActive
  // Post-conditions from spec:
  //   post: self.lowReservoirAlarmActive = true
  //   post: self.alarmActive = true
  //   post: self.alarmSoundOn = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      lowReservoirAlarmActive: true,
      alarmActive: true,
      alarmSoundOn: true,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "soundLowReservoirAlarm");
  });
}

export async function clearAlarms(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  // Post-conditions from spec:
  //   post: self.alarmActive = false
  //   post: self.lowReservoirAlarmActive = false
  //   post: self.malfunctionAlarmActive = false
  //   post: self.alarmSoundOn = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmActive: false,
      lowReservoirAlarmActive: false,
      malfunctionAlarmActive: false,
      alarmSoundOn: false,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "clearAlarms");
  });
}

// ─── Events on BloodSugarSensor ───

export async function takeReading(__selfId: string, value: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: value >= 0.0
  //   pre: value <= 1000.0
  //   pre: timestamp >= 0.0
  // Post-conditions from spec:
  //   post: self.lastReadingMgDl = value
  //   post: self.readingTimestamp = timestamp
  //   post: self.sensorFaulty = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bloodSugarSensors).set({
      lastReadingMgDl: value,
      readingTimestamp: timestamp,
      sensorFaulty: false,
    }).where(eq(bloodSugarSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateBloodSugarSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bloodSugarSensors).where(eq(bloodSugarSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateBloodSugarSensor(row as never), "takeReading");
  });
}

export async function reportSensorFault(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.sensorFaulty
  // Post-conditions from spec:
  //   post: self.sensorFaulty = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bloodSugarSensors).set({
      sensorFaulty: true,
    }).where(eq(bloodSugarSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateBloodSugarSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bloodSugarSensors).where(eq(bloodSugarSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateBloodSugarSensor(row as never), "reportSensorFault");
  });
}

export async function resetSensor(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaulty = true
  // Post-conditions from spec:
  //   post: self.sensorFaulty = false
  //   post: self.lastReadingMgDl = 0.0
  //   post: self.lastRateMgDlPerMin = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bloodSugarSensors).set({
      sensorFaulty: false,
      lastReadingMgDl: 0,
      lastRateMgDlPerMin: 0,
    }).where(eq(bloodSugarSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateBloodSugarSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bloodSugarSensors).where(eq(bloodSugarSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateBloodSugarSensor(row as never), "resetSensor");
  });
}

// ─── Events on DoseCalculator ───

export async function computeDose(__selfId: string, sugar: number, rate: number, timestamp: number): Promise<number> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sugar >= 0.0
  //   pre: sugar <= 1000.0
  //   pre: rate >= 0.0
  //   pre: sugar > self.safeZoneUpperBound
  //   pre: rate > 0.0
  //   pre: timestamp >= 0.0
  // Post-conditions from spec:
  //   post: if (timestamp - self.lastCalculationTime) >= self.dosingCheckIntervalSeconds then
            result <= self.safeMaxDoseUnits and result > 0.0
          else
            result = 0.0
          endif
  //   post: self.lastComputedDose = result
  //   post: self.lastCalculationTime = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(doseCalculators).set({
      lastCalculationTime: timestamp,
    }).where(eq(doseCalculators.calculatorId, __selfId));
    // After mutation: re-validate against `validateDoseCalculator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(doseCalculators).where(eq(doseCalculators.calculatorId, __selfId)).get();
    // assertNoViolations(validateDoseCalculator(row as never), "computeDose");
  });
}

export async function setMaxDose(__selfId: string, newMax: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: newMax > 0.0
  //   pre: newMax <= 2.0
  //   pre: self.safeMaxDoseUnits <> newMax
  // Post-conditions from spec:
  //   post: self.safeMaxDoseUnits = newMax
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(doseCalculators).set({
      safeMaxDoseUnits: newMax,
    }).where(eq(doseCalculators.calculatorId, __selfId));
    // After mutation: re-validate against `validateDoseCalculator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(doseCalculators).where(eq(doseCalculators.calculatorId, __selfId)).get();
    // assertNoViolations(validateDoseCalculator(row as never), "setMaxDose");
  });
}

export async function setSafeZone(__selfId: string, newUpperBound: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: newUpperBound >= 0.0
  //   pre: self.safeZoneUpperBound <> newUpperBound
  // Post-conditions from spec:
  //   post: self.safeZoneUpperBound = newUpperBound
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(doseCalculators).set({
      safeZoneUpperBound: newUpperBound,
    }).where(eq(doseCalculators.calculatorId, __selfId));
    // After mutation: re-validate against `validateDoseCalculator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(doseCalculators).where(eq(doseCalculators.calculatorId, __selfId)).get();
    // assertNoViolations(validateDoseCalculator(row as never), "setSafeZone");
  });
}

export async function setDosingCheckInterval(__selfId: string, newInterval: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: newInterval > 0.0
  //   pre: newInterval <= 600.0
  //   pre: self.dosingCheckIntervalSeconds <> newInterval
  // Post-conditions from spec:
  //   post: self.dosingCheckIntervalSeconds = newInterval
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(doseCalculators).set({
      dosingCheckIntervalSeconds: newInterval,
    }).where(eq(doseCalculators.calculatorId, __selfId));
    // After mutation: re-validate against `validateDoseCalculator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(doseCalculators).where(eq(doseCalculators.calculatorId, __selfId)).get();
    // assertNoViolations(validateDoseCalculator(row as never), "setDosingCheckInterval");
  });
}

export async function resetCalculator(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.lastComputedDose >= 0.0
  // Post-conditions from spec:
  //   post: self.lastComputedDose = 0.0
  //   post: self.lastCalculationTime = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(doseCalculators).set({
      lastComputedDose: 0,
      lastCalculationTime: 0,
    }).where(eq(doseCalculators.calculatorId, __selfId));
    // After mutation: re-validate against `validateDoseCalculator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(doseCalculators).where(eq(doseCalculators.calculatorId, __selfId)).get();
    // assertNoViolations(validateDoseCalculator(row as never), "resetCalculator");
  });
}

// ─── Events on HardwareFaultDetector ───

export async function runSelfTest(__selfId: string, sensorStatus: boolean, pumpStatus: boolean, needleStatus: boolean, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp >= 0.0
  //   pre: (timestamp - self.lastTestTime) <= self.selfTestIntervalSeconds
  // Post-conditions from spec:
  //   post: self.sensorOk = sensorStatus
  //   post: self.pumpOk = pumpStatus
  //   post: self.needleOk = needleStatus
  //   post: self.lastTestTime = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(hardwareFaultDetectors).set({
      sensorOk: sensorStatus,
      pumpOk: pumpStatus,
      needleOk: needleStatus,
      lastTestTime: timestamp,
    }).where(eq(hardwareFaultDetectors.detectorId, __selfId));
    // After mutation: re-validate against `validateHardwareFaultDetector` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(hardwareFaultDetectors).where(eq(hardwareFaultDetectors.detectorId, __selfId)).get();
    // assertNoViolations(validateHardwareFaultDetector(row as never), "runSelfTest");
  });
}

export async function detectFault(__selfId: string, reason: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.faultDetected
  //   pre: reason <> null
  // Post-conditions from spec:
  //   post: self.faultDetected = true
  //   post: self.faultReason = reason
  //   post: self.sensorOk = false
  //   post: self.pumpOk = false
  //   post: self.needleOk = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(hardwareFaultDetectors).set({
      faultDetected: true,
      faultReason: reason,
      sensorOk: false,
      pumpOk: false,
      needleOk: false,
    }).where(eq(hardwareFaultDetectors.detectorId, __selfId));
    // After mutation: re-validate against `validateHardwareFaultDetector` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(hardwareFaultDetectors).where(eq(hardwareFaultDetectors.detectorId, __selfId)).get();
    // assertNoViolations(validateHardwareFaultDetector(row as never), "detectFault");
  });
}

export async function clearFault(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.faultDetected = true
  // Post-conditions from spec:
  //   post: self.faultDetected = false
  //   post: self.faultReason = ''
  //   post: self.sensorOk = true
  //   post: self.pumpOk = true
  //   post: self.needleOk = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(hardwareFaultDetectors).set({
      faultDetected: false,
      faultReason: "",
      sensorOk: true,
      pumpOk: true,
      needleOk: true,
    }).where(eq(hardwareFaultDetectors.detectorId, __selfId));
    // After mutation: re-validate against `validateHardwareFaultDetector` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(hardwareFaultDetectors).where(eq(hardwareFaultDetectors.detectorId, __selfId)).get();
    // assertNoViolations(validateHardwareFaultDetector(row as never), "clearFault");
  });
}

export async function setSelfTestInterval(__selfId: string, newInterval: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: newInterval > 0.0
  //   pre: newInterval <= 60.0
  //   pre: self.selfTestIntervalSeconds <> newInterval
  // Post-conditions from spec:
  //   post: self.selfTestIntervalSeconds = newInterval
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(hardwareFaultDetectors).set({
      selfTestIntervalSeconds: newInterval,
    }).where(eq(hardwareFaultDetectors.detectorId, __selfId));
    // After mutation: re-validate against `validateHardwareFaultDetector` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(hardwareFaultDetectors).where(eq(hardwareFaultDetectors.detectorId, __selfId)).get();
    // assertNoViolations(validateHardwareFaultDetector(row as never), "setSelfTestInterval");
  });
}

// ─── Events on InsulinPumpControlSystem ───

export async function deliverInsulin(__selfId: string, sugar: number, rate: number): Promise<number> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: not self.faultDetected
  //   pre: sugar >= 0.0
  //   pre: rate >= 0.0
  //   pre: sugar > self.safeZoneUpperBound
  //   pre: self.reservoirUnits > 0.0
  //   pre: rate > 0.0
  // Post-conditions from spec:
  //   post: result <= self.safeMaxDoseUnits
  //   post: result > 0.0
  //   post: self.reservoirUnits = self.reservoirUnits@pre - result
  //   post: self.currentBloodSugar = sugar
  //   post: self.bloodSugarRate = rate
  //   post: self.isOperating = true
  //   post: self.sensorOk = true
  //   post: self.pumpOk = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpControlSystems).set({
      currentBloodSugar: sugar,
      bloodSugarRate: rate,
      isOperating: true,
      sensorOk: true,
      pumpOk: true,
    }).where(eq(insulinPumpControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpControlSystems).where(eq(insulinPumpControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpControlSystem(row as never), "deliverInsulin");
  });
}

export async function detectFault(__selfId: string, faultReason: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.faultDetected
  //   pre: self.isOperating = true
  // Post-conditions from spec:
  //   post: self.faultDetected = true
  //   post: self.isOperating = false
  //   post: self.deliveryStopped = true
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  //   post: self.sensorOk = false
  //   post: self.pumpOk = false
  //   post: self.needleOk = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpControlSystems).set({
      faultDetected: true,
      isOperating: false,
      deliveryStopped: true,
      alarmActive: true,
      malfunctionAlarmActive: true,
      sensorOk: false,
      pumpOk: false,
      needleOk: false,
    }).where(eq(insulinPumpControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpControlSystems).where(eq(insulinPumpControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpControlSystem(row as never), "detectFault");
  });
}

export async function soundAlarm(__selfId: string, alarmType: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.faultDetected or self.reservoirUnits < 20.0
  //   pre: alarmType = 'HARDWARE_FAULT' or alarmType = 'LOW_RESERVOIR'
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: if alarmType = 'HARDWARE_FAULT' then
            self.malfunctionAlarmActive = true
          else
            self.lowReservoirAlarmActive = true
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpControlSystems).set({
      alarmActive: true,
      malfunctionAlarmActive: sql`CASE WHEN ${alarmType} = ${"HARDWARE_FAULT"} THEN ${true} ELSE ${insulinPumpControlSystems.malfunctionAlarmActive} END`,
      lowReservoirAlarmActive: sql`CASE WHEN ${alarmType} = ${"HARDWARE_FAULT"} THEN ${insulinPumpControlSystems.lowReservoirAlarmActive} ELSE ${true} END`,
    }).where(eq(insulinPumpControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpControlSystems).where(eq(insulinPumpControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpControlSystem(row as never), "soundAlarm");
  });
}

export async function detectLowReservoir(__selfId: string, threshold: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.reservoirUnits < threshold
  //   pre: self.reservoirUnits >= 0.0
  //   pre: threshold > 0.0
  // Post-conditions from spec:
  //   post: self.lowReservoirAlarmActive = true
  //   post: self.alarmActive = true
  //   post: self.isOperating = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpControlSystems).set({
      lowReservoirAlarmActive: true,
      alarmActive: true,
      isOperating: true,
    }).where(eq(insulinPumpControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpControlSystems).where(eq(insulinPumpControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpControlSystem(row as never), "detectLowReservoir");
  });
}

export async function clearAlarms(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  // Post-conditions from spec:
  //   post: self.alarmActive = false
  //   post: self.lowReservoirAlarmActive = false
  //   post: self.malfunctionAlarmActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpControlSystems).set({
      alarmActive: false,
      lowReservoirAlarmActive: false,
      malfunctionAlarmActive: false,
    }).where(eq(insulinPumpControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpControlSystems).where(eq(insulinPumpControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpControlSystem(row as never), "clearAlarms");
  });
}

export async function resumeOperation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.faultDetected = true
  //   pre: self.isOperating = false
  //   pre: self.deliveryStopped = true
  // Post-conditions from spec:
  //   post: self.faultDetected = false
  //   post: self.isOperating = true
  //   post: self.deliveryStopped = false
  //   post: self.sensorOk = true
  //   post: self.pumpOk = true
  //   post: self.needleOk = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpControlSystems).set({
      faultDetected: false,
      isOperating: true,
      deliveryStopped: false,
      sensorOk: true,
      pumpOk: true,
      needleOk: true,
    }).where(eq(insulinPumpControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpControlSystems).where(eq(insulinPumpControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpControlSystem(row as never), "resumeOperation");
  });
}

export async function setSafeMaxDose(__selfId: string, newMax: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: newMax > 0.0
  //   pre: self.safeMaxDoseUnits <> newMax
  // Post-conditions from spec:
  //   post: self.safeMaxDoseUnits = newMax
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpControlSystems).set({
      safeMaxDoseUnits: newMax,
    }).where(eq(insulinPumpControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpControlSystems).where(eq(insulinPumpControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpControlSystem(row as never), "setSafeMaxDose");
  });
}

export async function checkBloodSugar(__selfId: string, sugar: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sugar >= 0.0
  //   pre: self.isOperating = true
  // Post-conditions from spec:
  //   post: self.currentBloodSugar = sugar
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpControlSystems).set({
      currentBloodSugar: sugar,
    }).where(eq(insulinPumpControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateInsulinPumpControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpControlSystems).where(eq(insulinPumpControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateInsulinPumpControlSystem(row as never), "checkBloodSugar");
  });
}

// ─── Events on InsulinPumpSystemFormalized ───

export async function rejectOverdose(__selfId: string, requestedDose: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: requestedDose > self.safeMaxDoseUnits
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      alarmActive: true,
      malfunctionAlarmActive: true,
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "rejectOverdose");
  });
}

export async function rejectDeliveryInSafeZone(__selfId: string, sugar: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: sugar <= self.safeZoneUpperBound
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      alarmActive: true,
      malfunctionAlarmActive: true,
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "rejectDeliveryInSafeZone");
  });
}

export async function rejectDeliveryOnFault(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.faultDetected = true
  //   pre: self.isOperating = false
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      alarmActive: true,
      malfunctionAlarmActive: true,
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "rejectDeliveryOnFault");
  });
}

export async function enforceSelfTestInterval(__selfId: string, lastTestTime: number, currentTime: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: (currentTime - lastTestTime) > self.selfTestIntervalSeconds
  // Post-conditions from spec:
  //   post: self.faultDetected = true
  //   post: self.isOperating = false
  //   post: self.deliveryStopped = true
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      faultDetected: true,
      isOperating: false,
      deliveryStopped: true,
      alarmActive: true,
      malfunctionAlarmActive: true,
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "enforceSelfTestInterval");
  });
}

export async function enforceDosingInterval(__selfId: string, lastDoseTime: number, currentTime: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOperating = true
  //   pre: (currentTime - lastDoseTime) < self.dosingCheckIntervalSeconds
  // Post-conditions from spec:
  //   post: self.faultDetected = true
  //   post: self.isOperating = false
  //   post: self.deliveryStopped = true
  //   post: self.alarmActive = true
  //   post: self.malfunctionAlarmActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      faultDetected: true,
      isOperating: false,
      deliveryStopped: true,
      alarmActive: true,
      malfunctionAlarmActive: true,
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "enforceDosingInterval");
  });
}

export async function enforceSafeMaxConfigured(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.safeMaxDoseUnits <= 0.0
  // Post-conditions from spec:
  //   post: self.isOperating = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(insulinPumpSystemFormalizeds).set({
      isOperating: false,
    }).where(eq(insulinPumpSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateInsulinPumpSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(insulinPumpSystemFormalizeds).where(eq(insulinPumpSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateInsulinPumpSystemFormalized(row as never), "enforceSafeMaxConfigured");
  });
}

// ─── Events on PumpActuator ───

export async function deliverInsulin(__selfId: string, dose: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: dose > 0.0
  //   pre: dose <= 2.0
  //   pre: self.reservoirUnits >= dose
  //   pre: not self.delivering
  //   pre: not self.actuatorFaulty
  //   pre: timestamp >= 0.0
  // Post-conditions from spec:
  //   post: self.reservoirUnits = self.reservoirUnits@pre - dose
  //   post: self.delivering = true
  //   post: self.lastDeliveredDose = dose
  //   post: self.lastDoseTime = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      reservoirUnits: sql`${pumpActuators.reservoirUnits} - ${dose}`,
      delivering: true,
      lastDeliveredDose: dose,
      lastDoseTime: timestamp,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "deliverInsulin");
  });
}

export async function stopDelivery(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.delivering = true
  // Post-conditions from spec:
  //   post: self.delivering = false
  //   post: self.lastDeliveredDose = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      delivering: false,
      lastDeliveredDose: 0,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "stopDelivery");
  });
}

export async function refillReservoir(__selfId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: amount > 0.0
  //   pre: self.reservoirUnits + amount <= self.reservoirCapacityUnits
  //   pre: not self.delivering
  // Post-conditions from spec:
  //   post: self.reservoirUnits = self.reservoirUnits@pre + amount
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      reservoirUnits: sql`${pumpActuators.reservoirUnits} + ${amount}`,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "refillReservoir");
  });
}

export async function reportLowReservoir(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isLowReservoir = true
  // TODO: implement mutation logic for 'PumpActuator.reportLowReservoir'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: reportLowReservoir");
}

export async function reportActuatorFault(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.actuatorFaulty
  //   pre: not self.delivering
  // Post-conditions from spec:
  //   post: self.actuatorFaulty = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      actuatorFaulty: true,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "reportActuatorFault");
  });
}

export async function clearActuatorFault(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.actuatorFaulty = true
  // Post-conditions from spec:
  //   post: self.actuatorFaulty = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(pumpActuators).set({
      actuatorFaulty: false,
    }).where(eq(pumpActuators.actuatorId, __selfId));
    // After mutation: re-validate against `validatePumpActuator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(pumpActuators).where(eq(pumpActuators.actuatorId, __selfId)).get();
    // assertNoViolations(validatePumpActuator(row as never), "clearActuatorFault");
  });
}
