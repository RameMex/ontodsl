// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { alarmManagers, displayControllers, ecgSensorInterfaces, faultLoggers, vitalSignsMonitorSystemFormalizeds, vitalSignsMonitorSystems } from "../db/schema.js";
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

export async function raiseThresholdAlarm(__selfId: string, latencySeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.alarmActive
  //   pre: latencySeconds >= 0.0
  //   pre: latencySeconds <= self.maxAlarmLatencySeconds
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmActive: true,
      alarmSilenced: false,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "raiseThresholdAlarm");
  });
}

export async function raiseAlarmWithLatencyFault(__selfId: string, latencySeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.alarmActive
  //   pre: latencySeconds > self.maxAlarmLatencySeconds
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmActive: true,
      alarmSilenced: false,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "raiseAlarmWithLatencyFault");
  });
}

export async function silenceAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  //   pre: not self.alarmSilenced
  // Post-conditions from spec:
  //   post: self.alarmSilenced = true
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmSilenced: true,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "silenceAlarm");
  });
}

export async function autoRearmAlarm(__selfId: string, elapsedSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  //   pre: self.alarmSilenced = true
  //   pre: elapsedSeconds >= self.maxSilenceDurationSeconds
  // Post-conditions from spec:
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmSilenced: false,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "autoRearmAlarm");
  });
}

export async function clearAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  // Post-conditions from spec:
  //   post: self.alarmActive = false
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmActive: false,
      alarmSilenced: false,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "clearAlarm");
  });
}

export async function raiseSensorDisconnectAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.sensorDisconnectAlarmActive
  // Post-conditions from spec:
  //   post: self.sensorDisconnectAlarmActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      sensorDisconnectAlarmActive: true,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "raiseSensorDisconnectAlarm");
  });
}

export async function clearSensorDisconnectAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorDisconnectAlarmActive = true
  // Post-conditions from spec:
  //   post: self.sensorDisconnectAlarmActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      sensorDisconnectAlarmActive: false,
    }).where(eq(alarmManagers.alarmManagerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.alarmManagerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "clearSensorDisconnectAlarm");
  });
}

// ─── Events on DisplayController ───

export async function updateDisplay(__selfId: string, valueBpm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  // Post-conditions from spec:
  //   post: self.currentHeartRateBpm = valueBpm
  //   post: self.isDisplayingReading = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayControllers).set({
      currentHeartRateBpm: valueBpm,
      isDisplayingReading: true,
    }).where(eq(displayControllers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayControllers).where(eq(displayControllers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayController(row as never), "updateDisplay");
  });
}

export async function blankDisplay(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isDisplayingReading = true
  // Post-conditions from spec:
  //   post: self.isDisplayingReading = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayControllers).set({
      isDisplayingReading: false,
    }).where(eq(displayControllers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayControllers).where(eq(displayControllers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayController(row as never), "blankDisplay");
  });
}

export async function restoreDisplay(__selfId: string, valueBpm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isDisplayingReading = false
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  // Post-conditions from spec:
  //   post: self.currentHeartRateBpm = valueBpm
  //   post: self.isDisplayingReading = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayControllers).set({
      currentHeartRateBpm: valueBpm,
      isDisplayingReading: true,
    }).where(eq(displayControllers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayControllers).where(eq(displayControllers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayController(row as never), "restoreDisplay");
  });
}

export async function configureThresholds(__selfId: string, lowBpm: number, highBpm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: lowBpm >= self.plausibilityLowerBpm
  //   pre: highBpm <= self.plausibilityUpperBpm
  //   pre: highBpm > lowBpm
  // Post-conditions from spec:
  //   post: self.alarmLowBpm = lowBpm
  //   post: self.alarmHighBpm = highBpm
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayControllers).set({
      alarmLowBpm: lowBpm,
      alarmHighBpm: highBpm,
    }).where(eq(displayControllers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayControllers).where(eq(displayControllers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayController(row as never), "configureThresholds");
  });
}

// ─── Events on EcgSensorInterface ───

export async function acceptReading(__selfId: string, valueBpm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  //   pre: self.sensorConnected = true
  // Post-conditions from spec:
  //   post: self.lastRawBpm = valueBpm
  //   post: self.lastValidBpm = valueBpm
  //   post: self.signalAbsentSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ecgSensorInterfaces).set({
      lastRawBpm: valueBpm,
      lastValidBpm: valueBpm,
      signalAbsentSeconds: 0,
    }).where(eq(ecgSensorInterfaces.sensorId, __selfId));
    // After mutation: re-validate against `validateEcgSensorInterface` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ecgSensorInterfaces).where(eq(ecgSensorInterfaces.sensorId, __selfId)).get();
    // assertNoViolations(validateEcgSensorInterface(row as never), "acceptReading");
  });
}

export async function rejectImplausibleReading(__selfId: string, valueBpm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: valueBpm < self.plausibilityLowerBpm
         or valueBpm > self.plausibilityUpperBpm
  // Post-conditions from spec:
  //   post: self.lastRawBpm = valueBpm
  //   post: self.lastValidBpm = self.lastValidBpm@pre
  //   post: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ecgSensorInterfaces).set({
      lastRawBpm: valueBpm,
      lastValidBpm: sql`${ecgSensorInterfaces.lastValidBpm}`,
      rejectedReadingCount: sql`${ecgSensorInterfaces.rejectedReadingCount} + ${1}`,
    }).where(eq(ecgSensorInterfaces.sensorId, __selfId));
    // After mutation: re-validate against `validateEcgSensorInterface` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ecgSensorInterfaces).where(eq(ecgSensorInterfaces.sensorId, __selfId)).get();
    // assertNoViolations(validateEcgSensorInterface(row as never), "rejectImplausibleReading");
  });
}

export async function recordSignalAbsence(__selfId: string, absentSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds >= 0.0
  //   pre: absentSeconds < 5.0
  // Post-conditions from spec:
  //   post: self.signalAbsentSeconds = absentSeconds
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ecgSensorInterfaces).set({
      signalAbsentSeconds: absentSeconds,
    }).where(eq(ecgSensorInterfaces.sensorId, __selfId));
    // After mutation: re-validate against `validateEcgSensorInterface` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ecgSensorInterfaces).where(eq(ecgSensorInterfaces.sensorId, __selfId)).get();
    // assertNoViolations(validateEcgSensorInterface(row as never), "recordSignalAbsence");
  });
}

export async function declareSensorDisconnected(__selfId: string, absentSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds > 5.0
  // Post-conditions from spec:
  //   post: self.sensorConnected = false
  //   post: self.signalAbsentSeconds = absentSeconds
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ecgSensorInterfaces).set({
      sensorConnected: false,
      signalAbsentSeconds: absentSeconds,
    }).where(eq(ecgSensorInterfaces.sensorId, __selfId));
    // After mutation: re-validate against `validateEcgSensorInterface` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ecgSensorInterfaces).where(eq(ecgSensorInterfaces.sensorId, __selfId)).get();
    // assertNoViolations(validateEcgSensorInterface(row as never), "declareSensorDisconnected");
  });
}

export async function restoreSensorConnection(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = false
  // Post-conditions from spec:
  //   post: self.sensorConnected = true
  //   post: self.signalAbsentSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ecgSensorInterfaces).set({
      sensorConnected: true,
      signalAbsentSeconds: 0,
    }).where(eq(ecgSensorInterfaces.sensorId, __selfId));
    // After mutation: re-validate against `validateEcgSensorInterface` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ecgSensorInterfaces).where(eq(ecgSensorInterfaces.sensorId, __selfId)).get();
    // assertNoViolations(validateEcgSensorInterface(row as never), "restoreSensorConnection");
  });
}

// ─── Events on FaultLogger ───

export async function logLatencyFault(__selfId: string, description: string, timestampMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: description <> null
  //   pre: timestampMs >= 0
  // Post-conditions from spec:
  //   post: self.faultCount = self.faultCount@pre + 1
  //   post: self.lastFaultDescription = description
  //   post: self.lastFaultTimestampMs = timestampMs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(faultLoggers).set({
      faultCount: sql`${faultLoggers.faultCount} + ${1}`,
      lastFaultDescription: description,
      lastFaultTimestampMs: timestampMs,
    }).where(eq(faultLoggers.loggerId, __selfId));
    // After mutation: re-validate against `validateFaultLogger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(faultLoggers).where(eq(faultLoggers.loggerId, __selfId)).get();
    // assertNoViolations(validateFaultLogger(row as never), "logLatencyFault");
  });
}

// ─── Events on VitalSignsMonitorSystem ───

export async function acceptReading(__selfId: string, valueBpm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  //   pre: self.sensorConnected = true
  // Post-conditions from spec:
  //   post: self.currentHeartRateBpm = valueBpm
  //   post: self.lastValidHeartRateBpm = valueBpm
  //   post: self.isDisplayingReading = true
  //   post: self.signalAbsentSeconds = 0.0
  //   post: self.sensorDisconnectAlarmActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      currentHeartRateBpm: valueBpm,
      lastValidHeartRateBpm: valueBpm,
      isDisplayingReading: true,
      signalAbsentSeconds: 0,
      sensorDisconnectAlarmActive: false,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "acceptReading");
  });
}

export async function rejectImplausibleReading(__selfId: string, valueBpm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: valueBpm < self.plausibilityLowerBpm
         or valueBpm > self.plausibilityUpperBpm
  // Post-conditions from spec:
  //   post: self.isDisplayingReading = self.isDisplayingReading@pre
  //   post: self.currentHeartRateBpm = self.currentHeartRateBpm@pre
  //   post: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      isDisplayingReading: sql`${vitalSignsMonitorSystems.isDisplayingReading}`,
      currentHeartRateBpm: sql`${vitalSignsMonitorSystems.currentHeartRateBpm}`,
      rejectedReadingCount: sql`${vitalSignsMonitorSystems.rejectedReadingCount} + ${1}`,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "rejectImplausibleReading");
  });
}

export async function raiseThresholdAlarm(__selfId: string, valueBpm: number, latencySeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isDisplayingReading = true
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  //   pre: valueBpm < self.alarmLowBpm or valueBpm > self.alarmHighBpm
  //   pre: not self.alarmActive
  //   pre: latencySeconds >= 0.0
  //   pre: latencySeconds <= self.maxAlarmLatencySeconds
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      alarmActive: true,
      alarmSilenced: false,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "raiseThresholdAlarm");
  });
}

export async function silenceAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  //   pre: not self.alarmSilenced
  // Post-conditions from spec:
  //   post: self.alarmSilenced = true
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      alarmSilenced: true,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "silenceAlarm");
  });
}

export async function autoRearmAlarm(__selfId: string, elapsedSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  //   pre: self.alarmSilenced = true
  //   pre: elapsedSeconds >= self.maxSilenceDurationSeconds
  // Post-conditions from spec:
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      alarmSilenced: false,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "autoRearmAlarm");
  });
}

export async function clearAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  //   pre: self.currentHeartRateBpm >= self.alarmLowBpm
  //   pre: self.currentHeartRateBpm <= self.alarmHighBpm
  // Post-conditions from spec:
  //   post: self.alarmActive = false
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      alarmActive: false,
      alarmSilenced: false,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "clearAlarm");
  });
}

export async function recordSignalAbsence(__selfId: string, absentSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds >= 0.0
  //   pre: absentSeconds < self.disconnectTimeoutSeconds
  // Post-conditions from spec:
  //   post: self.signalAbsentSeconds = absentSeconds
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      signalAbsentSeconds: absentSeconds,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "recordSignalAbsence");
  });
}

export async function raiseSensorDisconnectAlarm(__selfId: string, absentSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds > self.disconnectTimeoutSeconds
  // Post-conditions from spec:
  //   post: self.sensorConnected = false
  //   post: self.sensorDisconnectAlarmActive = true
  //   post: self.isDisplayingReading = false
  //   post: self.signalAbsentSeconds = absentSeconds
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      sensorConnected: false,
      sensorDisconnectAlarmActive: true,
      isDisplayingReading: false,
      signalAbsentSeconds: absentSeconds,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "raiseSensorDisconnectAlarm");
  });
}

export async function resumeAfterReconnect(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = false
  //   pre: self.sensorDisconnectAlarmActive = true
  // Post-conditions from spec:
  //   post: self.sensorConnected = true
  //   post: self.sensorDisconnectAlarmActive = false
  //   post: self.signalAbsentSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      sensorConnected: true,
      sensorDisconnectAlarmActive: false,
      signalAbsentSeconds: 0,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "resumeAfterReconnect");
  });
}

export async function configureThresholds(__selfId: string, lowBpm: number, highBpm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: lowBpm >= self.plausibilityLowerBpm
  //   pre: highBpm <= self.plausibilityUpperBpm
  //   pre: highBpm > lowBpm
  // Post-conditions from spec:
  //   post: self.alarmLowBpm = lowBpm
  //   post: self.alarmHighBpm = highBpm
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystems).set({
      alarmLowBpm: lowBpm,
      alarmHighBpm: highBpm,
    }).where(eq(vitalSignsMonitorSystems.systemId, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystems).where(eq(vitalSignsMonitorSystems.systemId, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystem(row as never), "configureThresholds");
  });
}

// ─── Events on VitalSignsMonitorSystemFormalized ───

export async function guardImplausibleReading(__selfId: string, valueBpm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: valueBpm < self.plausibilityLowerBpm
         or valueBpm > self.plausibilityUpperBpm
  // Post-conditions from spec:
  //   post: self.isDisplayingReading = self.isDisplayingReading@pre
  //   post: self.currentHeartRateBpm = self.currentHeartRateBpm@pre
  //   post: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystemFormalizeds).set({
      isDisplayingReading: sql`${vitalSignsMonitorSystemFormalizeds.isDisplayingReading}`,
      currentHeartRateBpm: sql`${vitalSignsMonitorSystemFormalizeds.currentHeartRateBpm}`,
      rejectedReadingCount: sql`${vitalSignsMonitorSystemFormalizeds.rejectedReadingCount} + ${1}`,
    }).where(eq(vitalSignsMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystemFormalizeds).where(eq(vitalSignsMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystemFormalized(row as never), "guardImplausibleReading");
  });
}

export async function enforceAlarmLatencyCeiling(__selfId: string, requestedLatencySeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isDisplayingReading = true
  //   pre: not self.alarmActive
  //   pre: requestedLatencySeconds > self.maxAlarmLatencySeconds
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  //   post: self.faultDetected = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystemFormalizeds).set({
      alarmActive: true,
      alarmSilenced: false,
      alarmSilenceElapsedSeconds: 0,
      faultDetected: true,
    }).where(eq(vitalSignsMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystemFormalizeds).where(eq(vitalSignsMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystemFormalized(row as never), "enforceAlarmLatencyCeiling");
  });
}

export async function enforceSilenceCeiling(__selfId: string, elapsedSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  //   pre: self.alarmSilenced = true
  //   pre: elapsedSeconds > self.maxSilenceDurationSeconds
  // Post-conditions from spec:
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystemFormalizeds).set({
      alarmSilenced: false,
      alarmSilenceElapsedSeconds: 0,
    }).where(eq(vitalSignsMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystemFormalizeds).where(eq(vitalSignsMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystemFormalized(row as never), "enforceSilenceCeiling");
  });
}

export async function enforceDisconnectTimeout(__selfId: string, absentSeconds: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds > self.disconnectTimeoutSeconds
  // Post-conditions from spec:
  //   post: self.sensorConnected = false
  //   post: self.sensorDisconnectAlarmActive = true
  //   post: self.isDisplayingReading = false
  //   post: self.signalAbsentSeconds = absentSeconds
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(vitalSignsMonitorSystemFormalizeds).set({
      sensorConnected: false,
      sensorDisconnectAlarmActive: true,
      isDisplayingReading: false,
      signalAbsentSeconds: absentSeconds,
    }).where(eq(vitalSignsMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateVitalSignsMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(vitalSignsMonitorSystemFormalizeds).where(eq(vitalSignsMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateVitalSignsMonitorSystemFormalized(row as never), "enforceDisconnectTimeout");
  });
}
