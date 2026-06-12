// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { alarmManagers, bedsideMonitorSystemFormalizeds, bedsideMonitorSystemRequirementses, displayRenderers, ecgSensors, heartRateProcessors } from "../db/schema.js";
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

export async function raiseThresholdAlarm(__selfId: string, vitalType: string, actualValue: number, crossTimestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: crossTimestamp >= 0.0
  //   pre: self.alarmActive = false
  //   pre: not self.alarmSilenced
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = vitalType
  //   post: self.alarmTriggeredTimestamp = crossTimestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmActive: true,
      alarmSilenced: false,
      alarmType: vitalType,
      alarmTriggeredTimestamp: crossTimestamp,
    }).where(eq(alarmManagers.managerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.managerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "raiseThresholdAlarm");
  });
}

export async function raiseDisconnectAlarm(__selfId: string, detectedAt: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: detectedAt >= 0.0
  //   pre: self.alarmActive = false
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'disconnect'
  //   post: self.alarmTriggeredTimestamp = detectedAt
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmActive: true,
      alarmSilenced: false,
      alarmType: "disconnect",
      alarmTriggeredTimestamp: detectedAt,
    }).where(eq(alarmManagers.managerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.managerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "raiseDisconnectAlarm");
  });
}

export async function silenceAlarm(__selfId: string, silenceTimestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  //   pre: not self.alarmSilenced
  //   pre: silenceTimestamp >= self.alarmTriggeredTimestamp
  // Post-conditions from spec:
  //   post: self.alarmSilenced = true
  //   post: self.alarmSilenceTimestamp = silenceTimestamp
  //   post: self.alarmActive = true
  //   post: self.alarmType = self.alarmType@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmSilenced: true,
      alarmSilenceTimestamp: silenceTimestamp,
      alarmActive: true,
      alarmType: sql`${alarmManagers.alarmType}`,
    }).where(eq(alarmManagers.managerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.managerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "silenceAlarm");
  });
}

export async function autoRearmAlarm(__selfId: string, rearmTimestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmSilenced = true
  //   pre: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs
  // Post-conditions from spec:
  //   post: self.alarmSilenced = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmSilenced: false,
      alarmActive: true,
      alarmSilenceTimestamp: sql`${alarmManagers.alarmSilenceTimestamp}`,
    }).where(eq(alarmManagers.managerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.managerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "autoRearmAlarm");
  });
}

export async function clearAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  // Post-conditions from spec:
  //   post: self.alarmActive = false
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'none'
  //   post: self.alarmTriggeredTimestamp = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmActive: false,
      alarmSilenced: false,
      alarmType: "none",
      alarmTriggeredTimestamp: 0,
    }).where(eq(alarmManagers.managerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.managerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "clearAlarm");
  });
}

export async function configureAlarmParams(__selfId: string, latencyMs: number, rearmMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: latencyMs > 0.0
  //   pre: rearmMs > 0.0
  //   pre: latencyMs <= 2000.0
  //   pre: rearmMs <= 120000.0
  // Post-conditions from spec:
  //   post: self.maxAlarmLatencyMs = latencyMs
  //   post: self.silenceAutoRearmMs = rearmMs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      maxAlarmLatencyMs: latencyMs,
      silenceAutoRearmMs: rearmMs,
    }).where(eq(alarmManagers.managerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.managerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "configureAlarmParams");
  });
}

export async function resetAlarmManager(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.alarmActive = false
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'none'
  //   post: self.alarmSilenceTimestamp = 0.0
  //   post: self.alarmTriggeredTimestamp = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alarmManagers).set({
      alarmActive: false,
      alarmSilenced: false,
      alarmType: "none",
      alarmSilenceTimestamp: 0,
      alarmTriggeredTimestamp: 0,
    }).where(eq(alarmManagers.managerId, __selfId));
    // After mutation: re-validate against `validateAlarmManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alarmManagers).where(eq(alarmManagers.managerId, __selfId)).get();
    // assertNoViolations(validateAlarmManager(row as never), "resetAlarmManager");
  });
}

// ─── Events on BedsideMonitorSystemFormalized ───

export async function formalConfigurePlausibilityBounds(__selfId: string, lowerBound: number, upperBound: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: lowerBound <= 20.0
  //   pre: upperBound >= 250.0
  //   pre: upperBound > lowerBound
  //   pre: alarmLatencyMs > 0.0
  //   pre: signalLossMs > 0.0
  //   pre: silenceRearmMs > 0.0
  // Post-conditions from spec:
  //   post: self.implausibleThresholdLower = lowerBound
  //   post: self.implausibleThresholdUpper = upperBound
  //   post: self.maxAlarmLatencyMs = alarmLatencyMs
  //   post: self.maxSignalLossMsBeforeAlarm = signalLossMs
  //   post: self.silenceAutoRearmMs = silenceRearmMs
  //   post: self.alarmThresholdsConfigured = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemFormalizeds).set({
      implausibleThresholdLower: lowerBound,
      implausibleThresholdUpper: upperBound,
      maxAlarmLatencyMs: alarmLatencyMs,
      maxSignalLossMsBeforeAlarm: signalLossMs,
      silenceAutoRearmMs: silenceRearmMs,
      alarmThresholdsConfigured: true,
    }).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemFormalizeds).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemFormalized(row as never), "formalConfigurePlausibilityBounds");
  });
}

export async function formalRejectImplausibleReading(__selfId: string, newValue: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp >= 0.0
  //   pre: newValue < self.implausibleThresholdLower or
         newValue > self.implausibleThresholdUpper
  //   pre: self.sensorConnected = true
  //   pre: self.implausibleThresholdLower <= 20.0
  //   pre: self.implausibleThresholdUpper >= 250.0
  // Post-conditions from spec:
  //   post: self.heartRatePlausible = false
  //   post: self.rejectionCount = self.rejectionCount@pre + 1
  //   post: self.currentHeartRate = self.currentHeartRate@pre
  //   post: self.sensorLastSignalTimestamp = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemFormalizeds).set({
      heartRatePlausible: false,
      rejectionCount: sql`${bedsideMonitorSystemFormalizeds.rejectionCount} + ${1}`,
      currentHeartRate: sql`${bedsideMonitorSystemFormalizeds.currentHeartRate}`,
      sensorLastSignalTimestamp: timestamp,
    }).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemFormalizeds).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemFormalized(row as never), "formalRejectImplausibleReading");
  });
}

export async function formalRejectNonPositiveReading(__selfId: string, newValue: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp >= 0.0
  //   pre: newValue <= 0.0
  //   pre: self.sensorConnected = true
  //   pre: self.implausibleThresholdLower <= 20.0
  //   pre: self.implausibleThresholdUpper >= 250.0
  // Post-conditions from spec:
  //   post: self.heartRatePlausible = false
  //   post: self.rejectionCount = self.rejectionCount@pre + 1
  //   post: self.currentHeartRate = self.currentHeartRate@pre
  //   post: self.sensorLastSignalTimestamp = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemFormalizeds).set({
      heartRatePlausible: false,
      rejectionCount: sql`${bedsideMonitorSystemFormalizeds.rejectionCount} + ${1}`,
      currentHeartRate: sql`${bedsideMonitorSystemFormalizeds.currentHeartRate}`,
      sensorLastSignalTimestamp: timestamp,
    }).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemFormalizeds).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemFormalized(row as never), "formalRejectNonPositiveReading");
  });
}

export async function formalEnforceAlarmLatency(__selfId: string, vitalType: string, actualValue: number, crossingTimestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: crossingTimestamp >= 0.0
  //   pre: (actualValue > self.implausibleThresholdUpper) or
         (actualValue < self.implausibleThresholdLower)
  //   pre: crossingTimestamp - self.sensorLastSignalTimestamp > self.maxAlarmLatencyMs
  //   pre: self.alarmActive = false
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = if actualValue > self.implausibleThresholdUpper then 'high_hr' else 'low_hr' endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemFormalizeds).set({
      alarmActive: true,
      alarmSilenced: false,
    }).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemFormalizeds).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemFormalized(row as never), "formalEnforceAlarmLatency");
  });
}

export async function formalEnforceSensorDisconnect(__selfId: string, signalGapDetectedAt: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: signalGapDetectedAt >= 0.0
  //   pre: self.sensorConnected = true
  //   pre: signalGapDetectedAt - self.sensorLastSignalTimestamp > self.maxSignalLossMsBeforeAlarm
  //   pre: self.alarmActive = false
  // Post-conditions from spec:
  //   post: self.sensorConnected = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'disconnect'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemFormalizeds).set({
      sensorConnected: false,
      alarmActive: true,
      alarmSilenced: false,
      alarmType: "disconnect",
    }).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemFormalizeds).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemFormalized(row as never), "formalEnforceSensorDisconnect");
  });
}

export async function formalEnforceAutoRearm(__selfId: string, rearmTimestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: rearmTimestamp >= 0.0
  //   pre: self.alarmSilenced = true
  //   pre: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs
  // Post-conditions from spec:
  //   post: self.alarmSilenced = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemFormalizeds).set({
      alarmSilenced: false,
      alarmActive: true,
      alarmSilenceTimestamp: sql`${bedsideMonitorSystemFormalizeds.alarmSilenceTimestamp}`,
    }).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemFormalizeds).where(eq(bedsideMonitorSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemFormalized(row as never), "formalEnforceAutoRearm");
  });
}

// ─── Events on BedsideMonitorSystemRequirements ───

export async function deliverHeartRateReading(__selfId: string, newValue: number, timestamp: number): Promise<number> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp >= 0.0
  //   pre: self.sensorConnected = true
  // Post-conditions from spec:
  //   post: if newValue >= self.implausibleThresholdLower and newValue <= self.implausibleThresholdUpper then
            self.currentHeartRate = newValue and
            self.heartRatePlausible = true and
            self.rejectionCount = self.rejectionCount@pre and
            self.sensorLastSignalTimestamp = timestamp
          else
            self.currentHeartRate = self.currentHeartRate@pre and
            self.heartRatePlausible = false and
            self.rejectionCount = self.rejectionCount@pre + 1 and
            self.sensorLastSignalTimestamp = self.sensorLastSignalTimestamp@pre
          endif
  //   post: result = if newValue >= self.implausibleThresholdLower and newValue <= self.implausibleThresholdUpper then newValue else -1.0 endif
  // TODO: implement mutation logic for 'BedsideMonitorSystemRequirements.deliverHeartRateReading'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: deliverHeartRateReading");
}

export async function raiseThresholdAlarm(__selfId: string, vitalType: string, actualValue: number, thresholdUpper: number, thresholdLower: number, crossTimestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: crossTimestamp >= 0.0
  //   pre: (actualValue > thresholdUpper) or (actualValue < thresholdLower)
  //   pre: self.alarmActive = false
  //   pre: not self.alarmSilenced
  // Post-conditions from spec:
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = if actualValue > thresholdUpper then 'high_hr' else 'low_hr' endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemRequirementses).set({
      alarmActive: true,
      alarmSilenced: false,
    }).where(eq(bedsideMonitorSystemRequirementses.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemRequirements` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemRequirementses).where(eq(bedsideMonitorSystemRequirementses.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemRequirements(row as never), "raiseThresholdAlarm");
  });
}

export async function detectSensorDisconnect(__selfId: string, lossDetectedAt: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = true
  //   pre: lossDetectedAt - self.sensorLastSignalTimestamp > self.maxSignalLossMsBeforeAlarm
  //   pre: self.alarmActive = false
  // Post-conditions from spec:
  //   post: self.sensorConnected = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'disconnect'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemRequirementses).set({
      sensorConnected: false,
      alarmActive: true,
      alarmSilenced: false,
      alarmType: "disconnect",
    }).where(eq(bedsideMonitorSystemRequirementses.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemRequirements` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemRequirementses).where(eq(bedsideMonitorSystemRequirementses.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemRequirements(row as never), "detectSensorDisconnect");
  });
}

export async function silenceAlarm(__selfId: string, silenceTimestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  //   pre: not self.alarmSilenced
  //   pre: silenceTimestamp >= self.sensorLastSignalTimestamp
  // Post-conditions from spec:
  //   post: self.alarmSilenced = true
  //   post: self.alarmSilenceTimestamp = silenceTimestamp
  //   post: self.alarmActive = true
  //   post: self.alarmType = self.alarmType@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemRequirementses).set({
      alarmSilenced: true,
      alarmSilenceTimestamp: silenceTimestamp,
      alarmActive: true,
      alarmType: sql`${bedsideMonitorSystemRequirementses.alarmType}`,
    }).where(eq(bedsideMonitorSystemRequirementses.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemRequirements` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemRequirementses).where(eq(bedsideMonitorSystemRequirementses.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemRequirements(row as never), "silenceAlarm");
  });
}

export async function autoRearmAlarm(__selfId: string, rearmTimestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmSilenced = true
  //   pre: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs
  // Post-conditions from spec:
  //   post: self.alarmSilenced = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemRequirementses).set({
      alarmSilenced: false,
      alarmActive: true,
      alarmSilenceTimestamp: sql`${bedsideMonitorSystemRequirementses.alarmSilenceTimestamp}`,
    }).where(eq(bedsideMonitorSystemRequirementses.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemRequirements` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemRequirementses).where(eq(bedsideMonitorSystemRequirementses.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemRequirements(row as never), "autoRearmAlarm");
  });
}

export async function clearAlarm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alarmActive = true
  // Post-conditions from spec:
  //   post: self.alarmActive = false
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'none'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemRequirementses).set({
      alarmActive: false,
      alarmSilenced: false,
      alarmType: "none",
    }).where(eq(bedsideMonitorSystemRequirementses.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemRequirements` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemRequirementses).where(eq(bedsideMonitorSystemRequirementses.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemRequirements(row as never), "clearAlarm");
  });
}

export async function restoreSensorConnection(__selfId: string, newValue: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = false
  //   pre: timestamp >= 0.0
  // Post-conditions from spec:
  //   post: self.sensorConnected = true
  //   post: self.sensorLastSignalTimestamp = timestamp
  //   post: if newValue >= self.implausibleThresholdLower and newValue <= self.implausibleThresholdUpper then
            self.currentHeartRate = newValue and
            self.heartRatePlausible = true and
            self.rejectionCount = self.rejectionCount@pre
          else
            self.currentHeartRate = self.currentHeartRate@pre and
            self.heartRatePlausible = false and
            self.rejectionCount = self.rejectionCount@pre + 1
          endif
  //   post: if self.alarmActive = true and self.alarmType = 'disconnect' then
            self.alarmActive = false and
            self.alarmSilenced = false and
            self.alarmType = 'none'
          else
            self.alarmActive = self.alarmActive@pre and
            self.alarmSilenced = self.alarmSilenced@pre and
            self.alarmType = self.alarmType@pre
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemRequirementses).set({
      sensorConnected: true,
      sensorLastSignalTimestamp: timestamp,
    }).where(eq(bedsideMonitorSystemRequirementses.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemRequirements` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemRequirementses).where(eq(bedsideMonitorSystemRequirementses.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemRequirements(row as never), "restoreSensorConnection");
  });
}

export async function setAlarmThresholds(__selfId: string, implausibleLower: number, implausibleUpper: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: implausibleLower >= 0.0
  //   pre: implausibleUpper > implausibleLower
  //   pre: alarmLatencyMs > 0.0
  //   pre: signalLossMs > 0.0
  //   pre: silenceRearmMs > 0.0
  // Post-conditions from spec:
  //   post: self.implausibleThresholdLower = implausibleLower
  //   post: self.implausibleThresholdUpper = implausibleUpper
  //   post: self.maxAlarmLatencyMs = alarmLatencyMs
  //   post: self.maxSignalLossMsBeforeAlarm = signalLossMs
  //   post: self.silenceAutoRearmMs = silenceRearmMs
  //   post: self.alarmThresholdsConfigured = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(bedsideMonitorSystemRequirementses).set({
      implausibleThresholdLower: implausibleLower,
      implausibleThresholdUpper: implausibleUpper,
      maxAlarmLatencyMs: alarmLatencyMs,
      maxSignalLossMsBeforeAlarm: signalLossMs,
      silenceAutoRearmMs: silenceRearmMs,
      alarmThresholdsConfigured: true,
    }).where(eq(bedsideMonitorSystemRequirementses.id, __selfId));
    // After mutation: re-validate against `validateBedsideMonitorSystemRequirements` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(bedsideMonitorSystemRequirementses).where(eq(bedsideMonitorSystemRequirementses.id, __selfId)).get();
    // assertNoViolations(validateBedsideMonitorSystemRequirements(row as never), "setAlarmThresholds");
  });
}

// ─── Events on DisplayRenderer ───

export async function updateHeartRateDisplay(__selfId: string, newHeartRate: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp >= 0.0
  //   pre: newHeartRate >= 0.0
  // Post-conditions from spec:
  //   post: self.displayedHeartRate = newHeartRate
  //   post: self.lastUpdateTimestamp = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayRenderers).set({
      displayedHeartRate: newHeartRate,
      lastUpdateTimestamp: timestamp,
    }).where(eq(displayRenderers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayRenderer` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayRenderers).where(eq(displayRenderers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayRenderer(row as never), "updateHeartRateDisplay");
  });
}

export async function updateAlarmDisplay(__selfId: string, newAlarmActive: boolean, newAlarmType: string, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp >= 0.0
  // Post-conditions from spec:
  //   post: self.displayedAlarmActive = newAlarmActive
  //   post: self.displayedAlarmType = newAlarmType
  //   post: self.lastUpdateTimestamp = timestamp
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayRenderers).set({
      displayedAlarmActive: newAlarmActive,
      displayedAlarmType: newAlarmType,
      lastUpdateTimestamp: timestamp,
    }).where(eq(displayRenderers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayRenderer` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayRenderers).where(eq(displayRenderers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayRenderer(row as never), "updateAlarmDisplay");
  });
}

export async function resetDisplay(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.displayedHeartRate = 0.0
  //   post: self.displayedAlarmActive = false
  //   post: self.displayedAlarmType = 'none'
  //   post: self.lastUpdateTimestamp = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayRenderers).set({
      displayedHeartRate: 0,
      displayedAlarmActive: false,
      displayedAlarmType: "none",
      lastUpdateTimestamp: 0,
    }).where(eq(displayRenderers.displayId, __selfId));
    // After mutation: re-validate against `validateDisplayRenderer` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayRenderers).where(eq(displayRenderers.displayId, __selfId)).get();
    // assertNoViolations(validateDisplayRenderer(row as never), "resetDisplay");
  });
}

// ─── Events on EcgSensor ───

export async function acquireReading(__selfId: string, value: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp >= 0.0
  //   pre: value >= 0.0
  //   pre: self.sensorConnected = true
  // Post-conditions from spec:
  //   post: self.currentReadingValue = value
  //   post: self.readingTimestamp = timestamp
  //   post: self.lastSignalTimestamp = timestamp
  //   post: self.signalLossTimerMs = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ecgSensors).set({
      currentReadingValue: value,
      readingTimestamp: timestamp,
      lastSignalTimestamp: timestamp,
      signalLossTimerMs: 0,
    }).where(eq(ecgSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateEcgSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ecgSensors).where(eq(ecgSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateEcgSensor(row as never), "acquireReading");
  });
}

export async function advanceSignalLossTimer(__selfId: string, elapsedMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = true
  //   pre: elapsedMs > 0.0
  // Post-conditions from spec:
  //   post: self.signalLossTimerMs = self.signalLossTimerMs@pre + elapsedMs
  //   post: if self.signalLossTimerMs > 5000.0 then
            self.sensorConnected = false
          else
            self.sensorConnected = true
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ecgSensors).set({
      signalLossTimerMs: sql`${ecgSensors.signalLossTimerMs} + ${elapsedMs}`,
    }).where(eq(ecgSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateEcgSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ecgSensors).where(eq(ecgSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateEcgSensor(row as never), "advanceSignalLossTimer");
  });
}

export async function restoreConnection(__selfId: string, value: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorConnected = false
  //   pre: timestamp >= 0.0
  // Post-conditions from spec:
  //   post: self.sensorConnected = true
  //   post: self.currentReadingValue = value
  //   post: self.readingTimestamp = timestamp
  //   post: self.lastSignalTimestamp = timestamp
  //   post: self.signalLossTimerMs = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ecgSensors).set({
      sensorConnected: true,
      currentReadingValue: value,
      readingTimestamp: timestamp,
      lastSignalTimestamp: timestamp,
      signalLossTimerMs: 0,
    }).where(eq(ecgSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateEcgSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ecgSensors).where(eq(ecgSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateEcgSensor(row as never), "restoreConnection");
  });
}

export async function resetSensor(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.sensorConnected = true
  //   post: self.signalLossTimerMs = 0.0
  //   post: self.lastSignalTimestamp = 0.0
  //   post: self.currentReadingValue = 0.0
  //   post: self.readingTimestamp = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ecgSensors).set({
      sensorConnected: true,
      signalLossTimerMs: 0,
      lastSignalTimestamp: 0,
      currentReadingValue: 0,
      readingTimestamp: 0,
    }).where(eq(ecgSensors.sensorId, __selfId));
    // After mutation: re-validate against `validateEcgSensor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ecgSensors).where(eq(ecgSensors.sensorId, __selfId)).get();
    // assertNoViolations(validateEcgSensor(row as never), "resetSensor");
  });
}

// ─── Events on HeartRateProcessor ───

export async function processReading(__selfId: string, rawValue: number, readingTimestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: readingTimestamp >= 0.0
  //   pre: rawValue >= 0.0
  // Post-conditions from spec:
  //   post: if rawValue >= self.implausibleThresholdLower and rawValue <= self.implausibleThresholdUpper then
            self.lastAcceptedHeartRate = rawValue and
            self.heartRatePlausible = true and
            self.rejectionCount = self.rejectionCount@pre and
            self.lastProcessedTimestamp = readingTimestamp
          else
            self.heartRatePlausible = false and
            self.rejectionCount = self.rejectionCount@pre + 1 and
            self.lastAcceptedHeartRate = self.lastAcceptedHeartRate@pre and
            self.lastProcessedTimestamp = self.lastProcessedTimestamp@pre
          endif
  // TODO: implement mutation logic for 'HeartRateProcessor.processReading'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: processReading");
}

export async function configureBounds(__selfId: string, lower: number, upper: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: lower >= 0.0
  //   pre: upper > lower
  //   pre: lower <= 20.0
  //   pre: upper >= 250.0
  // Post-conditions from spec:
  //   post: self.implausibleThresholdLower = lower
  //   post: self.implausibleThresholdUpper = upper
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(heartRateProcessors).set({
      implausibleThresholdLower: lower,
      implausibleThresholdUpper: upper,
    }).where(eq(heartRateProcessors.processorId, __selfId));
    // After mutation: re-validate against `validateHeartRateProcessor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(heartRateProcessors).where(eq(heartRateProcessors.processorId, __selfId)).get();
    // assertNoViolations(validateHeartRateProcessor(row as never), "configureBounds");
  });
}

export async function rejectImplausibleReading(__selfId: string, rawValue: number, timestamp: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timestamp >= 0.0
  //   pre: rawValue < self.implausibleThresholdLower or rawValue > self.implausibleThresholdUpper
  // Post-conditions from spec:
  //   post: self.heartRatePlausible = false
  //   post: self.rejectionCount = self.rejectionCount@pre + 1
  //   post: self.lastAcceptedHeartRate = self.lastAcceptedHeartRate@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(heartRateProcessors).set({
      heartRatePlausible: false,
      rejectionCount: sql`${heartRateProcessors.rejectionCount} + ${1}`,
      lastAcceptedHeartRate: sql`${heartRateProcessors.lastAcceptedHeartRate}`,
    }).where(eq(heartRateProcessors.processorId, __selfId));
    // After mutation: re-validate against `validateHeartRateProcessor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(heartRateProcessors).where(eq(heartRateProcessors.processorId, __selfId)).get();
    // assertNoViolations(validateHeartRateProcessor(row as never), "rejectImplausibleReading");
  });
}

export async function resetProcessor(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // Post-conditions from spec:
  //   post: self.rejectionCount = 0
  //   post: self.heartRatePlausible = false
  //   post: self.lastAcceptedHeartRate = 0.0
  //   post: self.lastProcessedTimestamp = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(heartRateProcessors).set({
      rejectionCount: 0,
      heartRatePlausible: false,
      lastAcceptedHeartRate: 0,
      lastProcessedTimestamp: 0,
    }).where(eq(heartRateProcessors.processorId, __selfId));
    // After mutation: re-validate against `validateHeartRateProcessor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(heartRateProcessors).where(eq(heartRateProcessors.processorId, __selfId)).get();
    // assertNoViolations(validateHeartRateProcessor(row as never), "resetProcessor");
  });
}
