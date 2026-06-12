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

// ─── Events on AlarmManager ───

export async function raiseThresholdAlarm(latencySeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.raiseThresholdAlarm'.
  // Pre-conditions from spec:
  //   pre: not self.alarmActive
  //   pre: latencySeconds >= 0.0
  //   pre: latencySeconds <= self.maxAlarmLatencySeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseThresholdAlarm");
}

export async function raiseAlarmWithLatencyFault(latencySeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.raiseAlarmWithLatencyFault'.
  // Pre-conditions from spec:
  //   pre: not self.alarmActive
  //   pre: latencySeconds > self.maxAlarmLatencySeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseAlarmWithLatencyFault");
}

export async function silenceAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.silenceAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  //   pre: not self.alarmSilenced
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = true
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: silenceAlarm");
}

export async function autoRearmAlarm(elapsedSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.autoRearmAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  //   pre: self.alarmSilenced = true
  //   pre: elapsedSeconds >= self.maxSilenceDurationSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: autoRearmAlarm");
}

export async function clearAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.clearAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = false
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearAlarm");
}

export async function raiseSensorDisconnectAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.raiseSensorDisconnectAlarm'.
  // Pre-conditions from spec:
  //   pre: not self.sensorDisconnectAlarmActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorDisconnectAlarmActive = true
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseSensorDisconnectAlarm");
}

export async function clearSensorDisconnectAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.clearSensorDisconnectAlarm'.
  // Pre-conditions from spec:
  //   pre: self.sensorDisconnectAlarmActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorDisconnectAlarmActive = false
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearSensorDisconnectAlarm");
}

// ─── Events on DisplayController ───

export async function updateDisplay(valueBpm: number): Promise<void> {
  // TODO: implement mutation logic for 'DisplayController.updateDisplay'.
  // Pre-conditions from spec:
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentHeartRateBpm = valueBpm
  //   post: self.isDisplayingReading = true
  // After mutations, call validate*() on the affected DisplayController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateDisplay");
}

export async function blankDisplay(): Promise<void> {
  // TODO: implement mutation logic for 'DisplayController.blankDisplay'.
  // Pre-conditions from spec:
  //   pre: self.isDisplayingReading = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isDisplayingReading = false
  // After mutations, call validate*() on the affected DisplayController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: blankDisplay");
}

export async function restoreDisplay(valueBpm: number): Promise<void> {
  // TODO: implement mutation logic for 'DisplayController.restoreDisplay'.
  // Pre-conditions from spec:
  //   pre: self.isDisplayingReading = false
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentHeartRateBpm = valueBpm
  //   post: self.isDisplayingReading = true
  // After mutations, call validate*() on the affected DisplayController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: restoreDisplay");
}

export async function configureThresholds(lowBpm: number, highBpm: number): Promise<void> {
  // TODO: implement mutation logic for 'DisplayController.configureThresholds'.
  // Pre-conditions from spec:
  //   pre: lowBpm >= self.plausibilityLowerBpm
  //   pre: highBpm <= self.plausibilityUpperBpm
  //   pre: highBpm > lowBpm
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmLowBpm = lowBpm
  //   post: self.alarmHighBpm = highBpm
  // After mutations, call validate*() on the affected DisplayController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: configureThresholds");
}

// ─── Events on EcgSensorInterface ───

export async function acceptReading(valueBpm: number): Promise<void> {
  // TODO: implement mutation logic for 'EcgSensorInterface.acceptReading'.
  // Pre-conditions from spec:
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  //   pre: self.sensorConnected = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastRawBpm = valueBpm
  //   post: self.lastValidBpm = valueBpm
  //   post: self.signalAbsentSeconds = 0.0
  // After mutations, call validate*() on the affected EcgSensorInterface snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: acceptReading");
}

export async function rejectImplausibleReading(valueBpm: number): Promise<void> {
  // TODO: implement mutation logic for 'EcgSensorInterface.rejectImplausibleReading'.
  // Pre-conditions from spec:
  //   pre: valueBpm < self.plausibilityLowerBpm
         or valueBpm > self.plausibilityUpperBpm
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastRawBpm = valueBpm
  //   post: self.lastValidBpm = self.lastValidBpm@pre
  //   post: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1
  // After mutations, call validate*() on the affected EcgSensorInterface snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectImplausibleReading");
}

export async function recordSignalAbsence(absentSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'EcgSensorInterface.recordSignalAbsence'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds >= 0.0
  //   pre: absentSeconds < 5.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.signalAbsentSeconds = absentSeconds
  // After mutations, call validate*() on the affected EcgSensorInterface snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: recordSignalAbsence");
}

export async function declareSensorDisconnected(absentSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'EcgSensorInterface.declareSensorDisconnected'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds > 5.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorConnected = false
  //   post: self.signalAbsentSeconds = absentSeconds
  // After mutations, call validate*() on the affected EcgSensorInterface snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: declareSensorDisconnected");
}

export async function restoreSensorConnection(): Promise<void> {
  // TODO: implement mutation logic for 'EcgSensorInterface.restoreSensorConnection'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorConnected = true
  //   post: self.signalAbsentSeconds = 0.0
  // After mutations, call validate*() on the affected EcgSensorInterface snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: restoreSensorConnection");
}

// ─── Events on FaultLogger ───

export async function logLatencyFault(description: string, timestampMs: number): Promise<void> {
  // TODO: implement mutation logic for 'FaultLogger.logLatencyFault'.
  // Pre-conditions from spec:
  //   pre: description <> null
  //   pre: timestampMs >= 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.faultCount = self.faultCount@pre + 1
  //   post: self.lastFaultDescription = description
  //   post: self.lastFaultTimestampMs = timestampMs
  // After mutations, call validate*() on the affected FaultLogger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: logLatencyFault");
}

// ─── Events on VitalSignsMonitorSystem ───

export async function acceptReading(valueBpm: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.acceptReading'.
  // Pre-conditions from spec:
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  //   pre: self.sensorConnected = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentHeartRateBpm = valueBpm
  //   post: self.lastValidHeartRateBpm = valueBpm
  //   post: self.isDisplayingReading = true
  //   post: self.signalAbsentSeconds = 0.0
  //   post: self.sensorDisconnectAlarmActive = false
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: acceptReading");
}

export async function rejectImplausibleReading(valueBpm: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.rejectImplausibleReading'.
  // Pre-conditions from spec:
  //   pre: valueBpm < self.plausibilityLowerBpm
         or valueBpm > self.plausibilityUpperBpm
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isDisplayingReading = self.isDisplayingReading@pre
  //   post: self.currentHeartRateBpm = self.currentHeartRateBpm@pre
  //   post: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectImplausibleReading");
}

export async function raiseThresholdAlarm(valueBpm: number, latencySeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.raiseThresholdAlarm'.
  // Pre-conditions from spec:
  //   pre: self.isDisplayingReading = true
  //   pre: valueBpm >= self.plausibilityLowerBpm
  //   pre: valueBpm <= self.plausibilityUpperBpm
  //   pre: valueBpm < self.alarmLowBpm or valueBpm > self.alarmHighBpm
  //   pre: not self.alarmActive
  //   pre: latencySeconds >= 0.0
  //   pre: latencySeconds <= self.maxAlarmLatencySeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseThresholdAlarm");
}

export async function silenceAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.silenceAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  //   pre: not self.alarmSilenced
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = true
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: silenceAlarm");
}

export async function autoRearmAlarm(elapsedSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.autoRearmAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  //   pre: self.alarmSilenced = true
  //   pre: elapsedSeconds >= self.maxSilenceDurationSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: autoRearmAlarm");
}

export async function clearAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.clearAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  //   pre: self.currentHeartRateBpm >= self.alarmLowBpm
  //   pre: self.currentHeartRateBpm <= self.alarmHighBpm
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = false
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearAlarm");
}

export async function recordSignalAbsence(absentSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.recordSignalAbsence'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds >= 0.0
  //   pre: absentSeconds < self.disconnectTimeoutSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.signalAbsentSeconds = absentSeconds
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: recordSignalAbsence");
}

export async function raiseSensorDisconnectAlarm(absentSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.raiseSensorDisconnectAlarm'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds > self.disconnectTimeoutSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorConnected = false
  //   post: self.sensorDisconnectAlarmActive = true
  //   post: self.isDisplayingReading = false
  //   post: self.signalAbsentSeconds = absentSeconds
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseSensorDisconnectAlarm");
}

export async function resumeAfterReconnect(): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.resumeAfterReconnect'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = false
  //   pre: self.sensorDisconnectAlarmActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorConnected = true
  //   post: self.sensorDisconnectAlarmActive = false
  //   post: self.signalAbsentSeconds = 0.0
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resumeAfterReconnect");
}

export async function configureThresholds(lowBpm: number, highBpm: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystem.configureThresholds'.
  // Pre-conditions from spec:
  //   pre: lowBpm >= self.plausibilityLowerBpm
  //   pre: highBpm <= self.plausibilityUpperBpm
  //   pre: highBpm > lowBpm
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmLowBpm = lowBpm
  //   post: self.alarmHighBpm = highBpm
  // After mutations, call validate*() on the affected VitalSignsMonitorSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: configureThresholds");
}

// ─── Events on VitalSignsMonitorSystemFormalized ───

export async function guardImplausibleReading(valueBpm: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystemFormalized.guardImplausibleReading'.
  // Pre-conditions from spec:
  //   pre: valueBpm < self.plausibilityLowerBpm
         or valueBpm > self.plausibilityUpperBpm
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isDisplayingReading = self.isDisplayingReading@pre
  //   post: self.currentHeartRateBpm = self.currentHeartRateBpm@pre
  //   post: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1
  // After mutations, call validate*() on the affected VitalSignsMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: guardImplausibleReading");
}

export async function enforceAlarmLatencyCeiling(requestedLatencySeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling'.
  // Pre-conditions from spec:
  //   pre: self.isDisplayingReading = true
  //   pre: not self.alarmActive
  //   pre: requestedLatencySeconds > self.maxAlarmLatencySeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  //   post: self.faultDetected = true
  // After mutations, call validate*() on the affected VitalSignsMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceAlarmLatencyCeiling");
}

export async function enforceSilenceCeiling(elapsedSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystemFormalized.enforceSilenceCeiling'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  //   pre: self.alarmSilenced = true
  //   pre: elapsedSeconds > self.maxSilenceDurationSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = false
  //   post: self.alarmSilenceElapsedSeconds = 0.0
  // After mutations, call validate*() on the affected VitalSignsMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceSilenceCeiling");
}

export async function enforceDisconnectTimeout(absentSeconds: number): Promise<void> {
  // TODO: implement mutation logic for 'VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = true
  //   pre: absentSeconds > self.disconnectTimeoutSeconds
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorConnected = false
  //   post: self.sensorDisconnectAlarmActive = true
  //   post: self.isDisplayingReading = false
  //   post: self.signalAbsentSeconds = absentSeconds
  // After mutations, call validate*() on the affected VitalSignsMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceDisconnectTimeout");
}
