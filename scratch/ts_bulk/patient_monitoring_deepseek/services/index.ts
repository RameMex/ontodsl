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

export async function raiseThresholdAlarm(vitalType: string, actualValue: number, crossTimestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.raiseThresholdAlarm'.
  // Pre-conditions from spec:
  //   pre: crossTimestamp >= 0.0
  //   pre: self.alarmActive = false
  //   pre: not self.alarmSilenced
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = vitalType
  //   post: self.alarmTriggeredTimestamp = crossTimestamp
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseThresholdAlarm");
}

export async function raiseDisconnectAlarm(detectedAt: number): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.raiseDisconnectAlarm'.
  // Pre-conditions from spec:
  //   pre: detectedAt >= 0.0
  //   pre: self.alarmActive = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'disconnect'
  //   post: self.alarmTriggeredTimestamp = detectedAt
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseDisconnectAlarm");
}

export async function silenceAlarm(silenceTimestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.silenceAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  //   pre: not self.alarmSilenced
  //   pre: silenceTimestamp >= self.alarmTriggeredTimestamp
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = true
  //   post: self.alarmSilenceTimestamp = silenceTimestamp
  //   post: self.alarmActive = true
  //   post: self.alarmType = self.alarmType@pre
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: silenceAlarm");
}

export async function autoRearmAlarm(rearmTimestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.autoRearmAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmSilenced = true
  //   pre: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre
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
  //   post: self.alarmType = 'none'
  //   post: self.alarmTriggeredTimestamp = 0.0
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearAlarm");
}

export async function configureAlarmParams(latencyMs: number, rearmMs: number): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.configureAlarmParams'.
  // Pre-conditions from spec:
  //   pre: latencyMs > 0.0
  //   pre: rearmMs > 0.0
  //   pre: latencyMs <= 2000.0
  //   pre: rearmMs <= 120000.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.maxAlarmLatencyMs = latencyMs
  //   post: self.silenceAutoRearmMs = rearmMs
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: configureAlarmParams");
}

export async function resetAlarmManager(): Promise<void> {
  // TODO: implement mutation logic for 'AlarmManager.resetAlarmManager'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = false
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'none'
  //   post: self.alarmSilenceTimestamp = 0.0
  //   post: self.alarmTriggeredTimestamp = 0.0
  // After mutations, call validate*() on the affected AlarmManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetAlarmManager");
}

// ─── Events on BedsideMonitorSystemFormalized ───

export async function formalConfigurePlausibilityBounds(lowerBound: number, upperBound: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds'.
  // Pre-conditions from spec:
  //   pre: lowerBound <= 20.0
  //   pre: upperBound >= 250.0
  //   pre: upperBound > lowerBound
  //   pre: alarmLatencyMs > 0.0
  //   pre: signalLossMs > 0.0
  //   pre: silenceRearmMs > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.implausibleThresholdLower = lowerBound
  //   post: self.implausibleThresholdUpper = upperBound
  //   post: self.maxAlarmLatencyMs = alarmLatencyMs
  //   post: self.maxSignalLossMsBeforeAlarm = signalLossMs
  //   post: self.silenceAutoRearmMs = silenceRearmMs
  //   post: self.alarmThresholdsConfigured = true
  // After mutations, call validate*() on the affected BedsideMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: formalConfigurePlausibilityBounds");
}

export async function formalRejectImplausibleReading(newValue: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemFormalized.formalRejectImplausibleReading'.
  // Pre-conditions from spec:
  //   pre: timestamp >= 0.0
  //   pre: newValue < self.implausibleThresholdLower or
         newValue > self.implausibleThresholdUpper
  //   pre: self.sensorConnected = true
  //   pre: self.implausibleThresholdLower <= 20.0
  //   pre: self.implausibleThresholdUpper >= 250.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.heartRatePlausible = false
  //   post: self.rejectionCount = self.rejectionCount@pre + 1
  //   post: self.currentHeartRate = self.currentHeartRate@pre
  //   post: self.sensorLastSignalTimestamp = timestamp
  // After mutations, call validate*() on the affected BedsideMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: formalRejectImplausibleReading");
}

export async function formalRejectNonPositiveReading(newValue: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemFormalized.formalRejectNonPositiveReading'.
  // Pre-conditions from spec:
  //   pre: timestamp >= 0.0
  //   pre: newValue <= 0.0
  //   pre: self.sensorConnected = true
  //   pre: self.implausibleThresholdLower <= 20.0
  //   pre: self.implausibleThresholdUpper >= 250.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.heartRatePlausible = false
  //   post: self.rejectionCount = self.rejectionCount@pre + 1
  //   post: self.currentHeartRate = self.currentHeartRate@pre
  //   post: self.sensorLastSignalTimestamp = timestamp
  // After mutations, call validate*() on the affected BedsideMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: formalRejectNonPositiveReading");
}

export async function formalEnforceAlarmLatency(vitalType: string, actualValue: number, crossingTimestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemFormalized.formalEnforceAlarmLatency'.
  // Pre-conditions from spec:
  //   pre: crossingTimestamp >= 0.0
  //   pre: (actualValue > self.implausibleThresholdUpper) or
         (actualValue < self.implausibleThresholdLower)
  //   pre: crossingTimestamp - self.sensorLastSignalTimestamp > self.maxAlarmLatencyMs
  //   pre: self.alarmActive = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = if actualValue > self.implausibleThresholdUpper then 'high_hr' else 'low_hr' endif
  // After mutations, call validate*() on the affected BedsideMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: formalEnforceAlarmLatency");
}

export async function formalEnforceSensorDisconnect(signalGapDetectedAt: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect'.
  // Pre-conditions from spec:
  //   pre: signalGapDetectedAt >= 0.0
  //   pre: self.sensorConnected = true
  //   pre: signalGapDetectedAt - self.sensorLastSignalTimestamp > self.maxSignalLossMsBeforeAlarm
  //   pre: self.alarmActive = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorConnected = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'disconnect'
  // After mutations, call validate*() on the affected BedsideMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: formalEnforceSensorDisconnect");
}

export async function formalEnforceAutoRearm(rearmTimestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemFormalized.formalEnforceAutoRearm'.
  // Pre-conditions from spec:
  //   pre: rearmTimestamp >= 0.0
  //   pre: self.alarmSilenced = true
  //   pre: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre
  // After mutations, call validate*() on the affected BedsideMonitorSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: formalEnforceAutoRearm");
}

// ─── Events on BedsideMonitorSystemRequirements ───

export async function deliverHeartRateReading(newValue: number, timestamp: number): Promise<number> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemRequirements.deliverHeartRateReading'.
  // Pre-conditions from spec:
  //   pre: timestamp >= 0.0
  //   pre: self.sensorConnected = true
  // Post-conditions from spec (express what must hold AFTER the event):
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
  // After mutations, call validate*() on the affected BedsideMonitorSystemRequirements snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deliverHeartRateReading");
}

export async function raiseThresholdAlarm(vitalType: string, actualValue: number, thresholdUpper: number, thresholdLower: number, crossTimestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemRequirements.raiseThresholdAlarm'.
  // Pre-conditions from spec:
  //   pre: crossTimestamp >= 0.0
  //   pre: (actualValue > thresholdUpper) or (actualValue < thresholdLower)
  //   pre: self.alarmActive = false
  //   pre: not self.alarmSilenced
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = if actualValue > thresholdUpper then 'high_hr' else 'low_hr' endif
  // After mutations, call validate*() on the affected BedsideMonitorSystemRequirements snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: raiseThresholdAlarm");
}

export async function detectSensorDisconnect(lossDetectedAt: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemRequirements.detectSensorDisconnect'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = true
  //   pre: lossDetectedAt - self.sensorLastSignalTimestamp > self.maxSignalLossMsBeforeAlarm
  //   pre: self.alarmActive = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorConnected = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'disconnect'
  // After mutations, call validate*() on the affected BedsideMonitorSystemRequirements snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectSensorDisconnect");
}

export async function silenceAlarm(silenceTimestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemRequirements.silenceAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  //   pre: not self.alarmSilenced
  //   pre: silenceTimestamp >= self.sensorLastSignalTimestamp
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = true
  //   post: self.alarmSilenceTimestamp = silenceTimestamp
  //   post: self.alarmActive = true
  //   post: self.alarmType = self.alarmType@pre
  // After mutations, call validate*() on the affected BedsideMonitorSystemRequirements snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: silenceAlarm");
}

export async function autoRearmAlarm(rearmTimestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemRequirements.autoRearmAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmSilenced = true
  //   pre: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmSilenced = false
  //   post: self.alarmActive = true
  //   post: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre
  // After mutations, call validate*() on the affected BedsideMonitorSystemRequirements snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: autoRearmAlarm");
}

export async function clearAlarm(): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemRequirements.clearAlarm'.
  // Pre-conditions from spec:
  //   pre: self.alarmActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alarmActive = false
  //   post: self.alarmSilenced = false
  //   post: self.alarmType = 'none'
  // After mutations, call validate*() on the affected BedsideMonitorSystemRequirements snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearAlarm");
}

export async function restoreSensorConnection(newValue: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemRequirements.restoreSensorConnection'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = false
  //   pre: timestamp >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
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
  // After mutations, call validate*() on the affected BedsideMonitorSystemRequirements snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: restoreSensorConnection");
}

export async function setAlarmThresholds(implausibleLower: number, implausibleUpper: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number): Promise<void> {
  // TODO: implement mutation logic for 'BedsideMonitorSystemRequirements.setAlarmThresholds'.
  // Pre-conditions from spec:
  //   pre: implausibleLower >= 0.0
  //   pre: implausibleUpper > implausibleLower
  //   pre: alarmLatencyMs > 0.0
  //   pre: signalLossMs > 0.0
  //   pre: silenceRearmMs > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.implausibleThresholdLower = implausibleLower
  //   post: self.implausibleThresholdUpper = implausibleUpper
  //   post: self.maxAlarmLatencyMs = alarmLatencyMs
  //   post: self.maxSignalLossMsBeforeAlarm = signalLossMs
  //   post: self.silenceAutoRearmMs = silenceRearmMs
  //   post: self.alarmThresholdsConfigured = true
  // After mutations, call validate*() on the affected BedsideMonitorSystemRequirements snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setAlarmThresholds");
}

// ─── Events on DisplayRenderer ───

export async function updateHeartRateDisplay(newHeartRate: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'DisplayRenderer.updateHeartRateDisplay'.
  // Pre-conditions from spec:
  //   pre: timestamp >= 0.0
  //   pre: newHeartRate >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayedHeartRate = newHeartRate
  //   post: self.lastUpdateTimestamp = timestamp
  // After mutations, call validate*() on the affected DisplayRenderer snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateHeartRateDisplay");
}

export async function updateAlarmDisplay(newAlarmActive: boolean, newAlarmType: string, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'DisplayRenderer.updateAlarmDisplay'.
  // Pre-conditions from spec:
  //   pre: timestamp >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayedAlarmActive = newAlarmActive
  //   post: self.displayedAlarmType = newAlarmType
  //   post: self.lastUpdateTimestamp = timestamp
  // After mutations, call validate*() on the affected DisplayRenderer snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateAlarmDisplay");
}

export async function resetDisplay(): Promise<void> {
  // TODO: implement mutation logic for 'DisplayRenderer.resetDisplay'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayedHeartRate = 0.0
  //   post: self.displayedAlarmActive = false
  //   post: self.displayedAlarmType = 'none'
  //   post: self.lastUpdateTimestamp = 0.0
  // After mutations, call validate*() on the affected DisplayRenderer snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetDisplay");
}

// ─── Events on EcgSensor ───

export async function acquireReading(value: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'EcgSensor.acquireReading'.
  // Pre-conditions from spec:
  //   pre: timestamp >= 0.0
  //   pre: value >= 0.0
  //   pre: self.sensorConnected = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentReadingValue = value
  //   post: self.readingTimestamp = timestamp
  //   post: self.lastSignalTimestamp = timestamp
  //   post: self.signalLossTimerMs = 0.0
  // After mutations, call validate*() on the affected EcgSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: acquireReading");
}

export async function advanceSignalLossTimer(elapsedMs: number): Promise<void> {
  // TODO: implement mutation logic for 'EcgSensor.advanceSignalLossTimer'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = true
  //   pre: elapsedMs > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.signalLossTimerMs = self.signalLossTimerMs@pre + elapsedMs
  //   post: if self.signalLossTimerMs > 5000.0 then
            self.sensorConnected = false
          else
            self.sensorConnected = true
          endif
  // After mutations, call validate*() on the affected EcgSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: advanceSignalLossTimer");
}

export async function restoreConnection(value: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'EcgSensor.restoreConnection'.
  // Pre-conditions from spec:
  //   pre: self.sensorConnected = false
  //   pre: timestamp >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorConnected = true
  //   post: self.currentReadingValue = value
  //   post: self.readingTimestamp = timestamp
  //   post: self.lastSignalTimestamp = timestamp
  //   post: self.signalLossTimerMs = 0.0
  // After mutations, call validate*() on the affected EcgSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: restoreConnection");
}

export async function resetSensor(): Promise<void> {
  // TODO: implement mutation logic for 'EcgSensor.resetSensor'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorConnected = true
  //   post: self.signalLossTimerMs = 0.0
  //   post: self.lastSignalTimestamp = 0.0
  //   post: self.currentReadingValue = 0.0
  //   post: self.readingTimestamp = 0.0
  // After mutations, call validate*() on the affected EcgSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetSensor");
}

// ─── Events on HeartRateProcessor ───

export async function processReading(rawValue: number, readingTimestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'HeartRateProcessor.processReading'.
  // Pre-conditions from spec:
  //   pre: readingTimestamp >= 0.0
  //   pre: rawValue >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
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
  // After mutations, call validate*() on the affected HeartRateProcessor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: processReading");
}

export async function configureBounds(lower: number, upper: number): Promise<void> {
  // TODO: implement mutation logic for 'HeartRateProcessor.configureBounds'.
  // Pre-conditions from spec:
  //   pre: lower >= 0.0
  //   pre: upper > lower
  //   pre: lower <= 20.0
  //   pre: upper >= 250.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.implausibleThresholdLower = lower
  //   post: self.implausibleThresholdUpper = upper
  // After mutations, call validate*() on the affected HeartRateProcessor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: configureBounds");
}

export async function rejectImplausibleReading(rawValue: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'HeartRateProcessor.rejectImplausibleReading'.
  // Pre-conditions from spec:
  //   pre: timestamp >= 0.0
  //   pre: rawValue < self.implausibleThresholdLower or rawValue > self.implausibleThresholdUpper
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.heartRatePlausible = false
  //   post: self.rejectionCount = self.rejectionCount@pre + 1
  //   post: self.lastAcceptedHeartRate = self.lastAcceptedHeartRate@pre
  // After mutations, call validate*() on the affected HeartRateProcessor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectImplausibleReading");
}

export async function resetProcessor(): Promise<void> {
  // TODO: implement mutation logic for 'HeartRateProcessor.resetProcessor'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.rejectionCount = 0
  //   post: self.heartRatePlausible = false
  //   post: self.lastAcceptedHeartRate = 0.0
  //   post: self.lastProcessedTimestamp = 0.0
  // After mutations, call validate*() on the affected HeartRateProcessor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetProcessor");
}
