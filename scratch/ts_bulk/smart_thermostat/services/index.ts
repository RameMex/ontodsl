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

// ─── Events on ActuatorDriverComponent ───

export async function driveActuator(currentTempF: number, clampedSetpointF: number, atMinute: number): Promise<void> {
  // TODO: implement mutation logic for 'ActuatorDriverComponent.driveActuator'.
  // Pre-conditions from spec:
  //   pre: not self.alertActive
  //   pre: atMinute >= self.lastTransitionMinute
  //   pre: (atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if currentTempF < clampedSetpointF
          then self.actuatorSignal = 'HEAT'
          else if currentTempF > clampedSetpointF
          then self.actuatorSignal = 'COOL'
          else self.actuatorSignal = 'OFF'
          endif endif
  //   post: self.lastTransitionMinute = atMinute
  // After mutations, call validate*() on the affected ActuatorDriverComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: driveActuator");
}

export async function engageSafeHalt(): Promise<void> {
  // TODO: implement mutation logic for 'ActuatorDriverComponent.engageSafeHalt'.
  // Pre-conditions from spec:
  //   pre: not self.alertActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.actuatorSignal = 'OFF'
  //   post: self.alertActive = true
  // After mutations, call validate*() on the affected ActuatorDriverComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: engageSafeHalt");
}

export async function clearHalt(): Promise<void> {
  // TODO: implement mutation logic for 'ActuatorDriverComponent.clearHalt'.
  // Pre-conditions from spec:
  //   pre: self.alertActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.alertActive = false
  // After mutations, call validate*() on the affected ActuatorDriverComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearHalt");
}

export async function rejectEarlyCycle(atMinute: number): Promise<void> {
  // TODO: implement mutation logic for 'ActuatorDriverComponent.rejectEarlyCycle'.
  // Pre-conditions from spec:
  //   pre: (atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.actuatorSignal = self.actuatorSignal@pre
  //   post: self.lastTransitionMinute = self.lastTransitionMinute@pre
  // After mutations, call validate*() on the affected ActuatorDriverComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectEarlyCycle");
}

// ─── Events on DisplayComponent ───

export async function refreshDisplay(tempF: number, setpointF: number, actuatorSig: string, alertActive: boolean): Promise<void> {
  // TODO: implement mutation logic for 'DisplayComponent.refreshDisplay'.
  // Pre-conditions from spec:
  //   pre: self.displayRefreshSeconds > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayCurrentTempF = tempF
  //   post: self.displaySetpointF = setpointF
  //   post: self.displayActuatorSignal = actuatorSig
  //   post: self.displayAlertActive = alertActive
  // After mutations, call validate*() on the affected DisplayComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: refreshDisplay");
}

export async function showAlert(): Promise<void> {
  // TODO: implement mutation logic for 'DisplayComponent.showAlert'.
  // Pre-conditions from spec:
  //   pre: not self.displayAlertActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayAlertActive = true
  //   post: self.displayActuatorSignal = 'OFF'
  // After mutations, call validate*() on the affected DisplayComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: showAlert");
}

export async function clearAlert(): Promise<void> {
  // TODO: implement mutation logic for 'DisplayComponent.clearAlert'.
  // Pre-conditions from spec:
  //   pre: self.displayAlertActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayAlertActive = false
  // After mutations, call validate*() on the affected DisplayComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearAlert");
}

// ─── Events on SetpointControllerComponent ───

export async function updateSetpoint(requestedF: number, sensorOk: boolean, alertActive: boolean): Promise<void> {
  // TODO: implement mutation logic for 'SetpointControllerComponent.updateSetpoint'.
  // Pre-conditions from spec:
  //   pre: sensorOk = true
  //   pre: not alertActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestedSetpointF = requestedF
  //   post: self.clampedSetpointF =
            if requestedF < self.safeMinTempF then self.safeMinTempF
            else if requestedF > self.safeMaxTempF then self.safeMaxTempF
            else requestedF
            endif endif
  //   post: self.clampedSetpointF >= self.safeMinTempF
  //   post: self.clampedSetpointF <= self.safeMaxTempF
  // After mutations, call validate*() on the affected SetpointControllerComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateSetpoint");
}

export async function rejectSetpointWhileHalted(requestedF: number): Promise<void> {
  // TODO: implement mutation logic for 'SetpointControllerComponent.rejectSetpointWhileHalted'.
  // Pre-conditions from spec:
  //   pre: requestedF <> requestedF or self.clampedSetpointF >= self.safeMinTempF
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.clampedSetpointF = self.clampedSetpointF@pre
  //   post: self.requestedSetpointF = self.requestedSetpointF@pre
  // After mutations, call validate*() on the affected SetpointControllerComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectSetpointWhileHalted");
}

// ─── Events on SmartThermostatSystem ───

export async function adjustSetpoint(requestedF: number): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystem.adjustSetpoint'.
  // Pre-conditions from spec:
  //   pre: self.sensorPlausible = true
  //   pre: not self.alertActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestedSetpointF = requestedF
  //   post: self.clampedSetpointF =
            if requestedF < self.safeMinTempF then self.safeMinTempF
            else if requestedF > self.safeMaxTempF then self.safeMaxTempF
            else requestedF
            endif endif
  //   post: self.clampedSetpointF >= self.safeMinTempF
  //   post: self.clampedSetpointF <= self.safeMaxTempF
  //   post: self.displaySetpointF = self.clampedSetpointF
  // After mutations, call validate*() on the affected SmartThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: adjustSetpoint");
}

export async function processSensorReading(readingF: number, atMinute: number): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystem.processSensorReading'.
  // Pre-conditions from spec:
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentMinute = atMinute
  //   post: self.sensorPlausible =
            (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)
  //   post: if not (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)
          then self.actuatorSignal = 'OFF' and self.alertActive = true
          else self.alertActive = false
          endif
  //   post: if (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)
          then self.currentTempF = readingF
          else self.currentTempF = self.currentTempF@pre
          endif
  //   post: self.plausibleMaxF > self.plausibleMinF
  //   post: self.displayCurrentTempF = self.currentTempF
  //   post: self.displayActuatorSignal = self.actuatorSignal
  // After mutations, call validate*() on the affected SmartThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: processSensorReading");
}

export async function commandActuator(atMinute: number): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystem.commandActuator'.
  // Pre-conditions from spec:
  //   pre: self.sensorPlausible = true
  //   pre: not self.alertActive
  //   pre: atMinute >= self.currentMinute
  //   pre: (atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if self.currentTempF < self.clampedSetpointF
          then self.actuatorSignal = 'HEAT'
          else if self.currentTempF > self.clampedSetpointF
          then self.actuatorSignal = 'COOL'
          else self.actuatorSignal = 'OFF'
          endif endif
  //   post: self.lastTransitionMinute = atMinute
  //   post: self.currentMinute = atMinute
  //   post: self.displayActuatorSignal = self.actuatorSignal
  //   post: self.clampedSetpointF >= self.safeMinTempF
  //   post: self.clampedSetpointF <= self.safeMaxTempF
  //   post: self.minCycleIntervalMinutes >= 5.0
  // After mutations, call validate*() on the affected SmartThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: commandActuator");
}

export async function rejectCommandDuringSafeHalt(): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystem.rejectCommandDuringSafeHalt'.
  // Pre-conditions from spec:
  //   pre: self.alertActive = true or self.sensorPlausible = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.actuatorSignal = 'OFF'
  //   post: self.alertActive = true
  // After mutations, call validate*() on the affected SmartThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectCommandDuringSafeHalt");
}

export async function refreshDisplay(): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystem.refreshDisplay'.
  // Pre-conditions from spec:
  //   pre: self.displayRefreshSeconds > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayCurrentTempF = self.currentTempF
  //   post: self.displaySetpointF = self.clampedSetpointF
  //   post: self.displayActuatorSignal = self.actuatorSignal
  //   post: self.displayRefreshSeconds > 0.0
  // After mutations, call validate*() on the affected SmartThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: refreshDisplay");
}

export async function clearSafeHalt(verifiedReadingF: number, atMinute: number): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystem.clearSafeHalt'.
  // Pre-conditions from spec:
  //   pre: self.alertActive = true
  //   pre: verifiedReadingF >= self.plausibleMinF
  //   pre: verifiedReadingF <= self.plausibleMaxF
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorPlausible = true
  //   post: self.alertActive = false
  //   post: self.currentTempF = verifiedReadingF
  //   post: self.currentMinute = atMinute
  //   post: self.displayCurrentTempF = verifiedReadingF
  // After mutations, call validate*() on the affected SmartThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearSafeHalt");
}

// ─── Events on SmartThermostatSystemFormalized ───

export async function rejectUnsafeActuatorCommand(requestedSignal: string): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystemFormalized.rejectUnsafeActuatorCommand'.
  // Pre-conditions from spec:
  //   pre: self.clampedSetpointF < self.safeMinTempF
         or self.clampedSetpointF > self.safeMaxTempF
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.actuatorSignal = 'OFF'
  //   post: self.alertActive = true
  //   post: self.displayActuatorSignal = 'OFF'
  // After mutations, call validate*() on the affected SmartThermostatSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectUnsafeActuatorCommand");
}

export async function rejectImplausibleReading(readingF: number, atMinute: number): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystemFormalized.rejectImplausibleReading'.
  // Pre-conditions from spec:
  //   pre: readingF < self.plausibleMinF or readingF > self.plausibleMaxF
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.actuatorSignal = 'OFF'
  //   post: self.alertActive = true
  //   post: self.sensorPlausible = false
  //   post: self.currentMinute = atMinute
  //   post: self.displayActuatorSignal = 'OFF'
  // After mutations, call validate*() on the affected SmartThermostatSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectImplausibleReading");
}

export async function rejectEarlyCompressorCycle(atMinute: number): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystemFormalized.rejectEarlyCompressorCycle'.
  // Pre-conditions from spec:
  //   pre: (atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.actuatorSignal = self.actuatorSignal@pre
  //   post: self.lastTransitionMinute = self.lastTransitionMinute@pre
  // After mutations, call validate*() on the affected SmartThermostatSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectEarlyCompressorCycle");
}

export async function rejectSetpointDuringSafeHalt(requestedF: number): Promise<void> {
  // TODO: implement mutation logic for 'SmartThermostatSystemFormalized.rejectSetpointDuringSafeHalt'.
  // Pre-conditions from spec:
  //   pre: self.alertActive = true or self.sensorPlausible = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.clampedSetpointF = self.clampedSetpointF@pre
  //   post: self.requestedSetpointF = self.requestedSetpointF@pre
  // After mutations, call validate*() on the affected SmartThermostatSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectSetpointDuringSafeHalt");
}

// ─── Events on TemperatureSensorComponent ───

export async function ingestReading(readingF: number, atMinute: number): Promise<void> {
  // TODO: implement mutation logic for 'TemperatureSensorComponent.ingestReading'.
  // Pre-conditions from spec:
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentMinute = atMinute
  //   post: self.sensorPlausible =
            (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)
  //   post: if (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)
          then self.currentTempF = readingF
          else self.currentTempF = self.currentTempF@pre
          endif
  //   post: if not (readingF >= self.plausibleMinF and readingF <= self.plausibleMaxF)
          then self.sensorAlertActive = true
          else self.sensorAlertActive = false
          endif
  // After mutations, call validate*() on the affected TemperatureSensorComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: ingestReading");
}

export async function clearSensorAlert(verifiedReadingF: number, atMinute: number): Promise<void> {
  // TODO: implement mutation logic for 'TemperatureSensorComponent.clearSensorAlert'.
  // Pre-conditions from spec:
  //   pre: self.sensorAlertActive = true
  //   pre: verifiedReadingF >= self.plausibleMinF
  //   pre: verifiedReadingF <= self.plausibleMaxF
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorPlausible = true
  //   post: self.sensorAlertActive = false
  //   post: self.currentTempF = verifiedReadingF
  //   post: self.currentMinute = atMinute
  // After mutations, call validate*() on the affected TemperatureSensorComponent snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearSensorAlert");
}
