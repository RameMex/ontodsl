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

// ─── Events on ActuatorDriver ───

export async function issueCommand(newState: string, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'ActuatorDriver.issueCommand'.
  // Pre-conditions from spec:
  //   pre: newState = 'HEAT' or newState = 'COOL' or newState = 'OFF'
  //   pre: timestamp >= 0.0
  //   pre: if newState <> self.commandedState then
           timestamp - self.lastTransitionTimestamp >= self.minIntervalSecs
         else
           true
         endif
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if newState <> self.commandedState@pre then
            self.commandedState = newState
            and
            self.lastTransitionTimestamp = timestamp
          else
            self.commandedState = self.commandedState@pre
            and
            self.lastTransitionTimestamp = timestamp
          endif
  // After mutations, call validate*() on the affected ActuatorDriver snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: issueCommand");
}

export async function forceOff(timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'ActuatorDriver.forceOff'.
  // Pre-conditions from spec:
  //   pre: timestamp >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.commandedState = 'OFF'
  //   post: self.lastTransitionTimestamp = timestamp
  // After mutations, call validate*() on the affected ActuatorDriver snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: forceOff");
}

export async function initialize(): Promise<void> {
  // TODO: implement mutation logic for 'ActuatorDriver.initialize'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.commandedState = 'OFF'
  //   post: self.lastTransitionTimestamp = 0.0
  // After mutations, call validate*() on the affected ActuatorDriver snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: initialize");
}

// ─── Events on DisplayManager ───

export async function updateTemperature(temp: number): Promise<void> {
  // TODO: implement mutation logic for 'DisplayManager.updateTemperature'.
  // Pre-conditions from spec:
  //   pre: temp >= -200.0
  //   pre: temp <= 200.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayedTemperature = temp
  //   post: self.displayedSetpoint = self.displayedSetpoint@pre
  //   post: self.displayedActuatorState = self.displayedActuatorState@pre
  //   post: self.displayError = self.displayError@pre
  //   post: self.isErrorActive = self.isErrorActive@pre
  // After mutations, call validate*() on the affected DisplayManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateTemperature");
}

export async function updateSetpoint(real: number): Promise<void> {
  // TODO: implement mutation logic for 'DisplayManager.updateSetpoint'.
  // Pre-conditions from spec:
  //   pre: real >= 40.0
  //   pre: real <= 90.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayedSetpoint = real
  //   post: self.displayedTemperature = self.displayedTemperature@pre
  //   post: self.displayedActuatorState = self.displayedActuatorState@pre
  //   post: self.displayError = self.displayError@pre
  //   post: self.isErrorActive = self.isErrorActive@pre
  // After mutations, call validate*() on the affected DisplayManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateSetpoint");
}

export async function updateActuatorState(state: string): Promise<void> {
  // TODO: implement mutation logic for 'DisplayManager.updateActuatorState'.
  // Pre-conditions from spec:
  //   pre: state = 'HEAT' or state = 'COOL' or state = 'OFF' or state = 'SAFE_HALT'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayedActuatorState = state
  //   post: self.displayedTemperature = self.displayedTemperature@pre
  //   post: self.displayedSetpoint = self.displayedSetpoint@pre
  //   post: self.displayError = self.displayError@pre
  //   post: self.isErrorActive = self.isErrorActive@pre
  // After mutations, call validate*() on the affected DisplayManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateActuatorState");
}

export async function showError(message: string): Promise<void> {
  // TODO: implement mutation logic for 'DisplayManager.showError'.
  // Pre-conditions from spec:
  //   pre: message <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayError = message
  //   post: self.displayedActuatorState = 'SAFE_HALT'
  //   post: self.isErrorActive = true
  //   post: self.displayedTemperature = self.displayedTemperature@pre
  //   post: self.displayedSetpoint = self.displayedSetpoint@pre
  // After mutations, call validate*() on the affected DisplayManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: showError");
}

export async function clearError(): Promise<void> {
  // TODO: implement mutation logic for 'DisplayManager.clearError'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayError = ''
  //   post: self.isErrorActive = false
  //   post: self.displayedSetpoint = self.displayedSetpoint@pre
  //   post: self.displayedTemperature = self.displayedTemperature@pre
  //   post: self.displayedActuatorState = self.displayedActuatorState@pre
  // After mutations, call validate*() on the affected DisplayManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearError");
}

export async function initialize(setpoint: number, temp: number): Promise<void> {
  // TODO: implement mutation logic for 'DisplayManager.initialize'.
  // Pre-conditions from spec:
  //   pre: setpoint >= 40.0
  //   pre: setpoint <= 90.0
  //   pre: temp >= -200.0
  //   pre: temp <= 200.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.displayedTemperature = temp
  //   post: self.displayedSetpoint = setpoint
  //   post: self.displayedActuatorState = 'OFF'
  //   post: self.displayError = ''
  //   post: self.isErrorActive = false
  // After mutations, call validate*() on the affected DisplayManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: initialize");
}

// ─── Events on SafetyMonitor ───

export async function inspectReading(reading: number, timestamp: number): Promise<boolean> {
  // TODO: implement mutation logic for 'SafetyMonitor.inspectReading'.
  // Pre-conditions from spec:
  //   pre: reading >= -200.0
  //   pre: reading <= 200.0
  //   pre: timestamp >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if reading < self.plausibilityMin or reading > self.plausibilityMax then
            self.systemHalted = true
            and
            self.faultAlertRaised = true
            and
            result = false
          else
            self.systemHalted = self.systemHalted@pre
            and
            self.faultAlertRaised = self.faultAlertRaised@pre
            and
            result = true
          endif
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: inspectReading");
}

export async function reset(): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.reset'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.systemHalted = false
  //   post: self.faultAlertRaised = false
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: reset");
}

export async function initialize(): Promise<void> {
  // TODO: implement mutation logic for 'SafetyMonitor.initialize'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.systemHalted = false
  //   post: self.faultAlertRaised = false
  // After mutations, call validate*() on the affected SafetyMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: initialize");
}

// ─── Events on SetpointController ───

export async function receiveUserSetpoint(requestedSetpoint: number): Promise<void> {
  // TODO: implement mutation logic for 'SetpointController.receiveUserSetpoint'.
  // Pre-conditions from spec:
  //   pre: requestedSetpoint >= -100.0
  //   pre: self.safeMin >= 40.0
  //   pre: self.safeMax <= 90.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.clampedSetpoint = if requestedSetpoint < self.safeMin then self.safeMin
                                  else if requestedSetpoint > self.safeMax then self.safeMax
                                  else requestedSetpoint endif endif
  //   post: self.currentTemperatureInput = self.currentTemperatureInput@pre
  //   post: self.decisionCommand = self.decisionCommand@pre
  // After mutations, call validate*() on the affected SetpointController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: receiveUserSetpoint");
}

export async function receiveTemperatureInput(temp: number): Promise<void> {
  // TODO: implement mutation logic for 'SetpointController.receiveTemperatureInput'.
  // Pre-conditions from spec:
  //   pre: temp >= -200.0
  //   pre: temp <= 200.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentTemperatureInput = temp
  //   post: self.decisionCommand =
      if temp < self.clampedSetpoint - 1.0 then 'HEAT'
      else if temp > self.clampedSetpoint + 1.0 then 'COOL'
      else 'OFF' endif endif
  //   post: self.clampedSetpoint = self.clampedSetpoint@pre
  // After mutations, call validate*() on the affected SetpointController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: receiveTemperatureInput");
}

export async function clearDecision(): Promise<void> {
  // TODO: implement mutation logic for 'SetpointController.clearDecision'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.decisionCommand = 'OFF'
  //   post: self.clampedSetpoint = self.clampedSetpoint@pre
  //   post: self.currentTemperatureInput = self.currentTemperatureInput@pre
  // After mutations, call validate*() on the affected SetpointController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearDecision");
}

export async function initialize(clamped: number, temp: number): Promise<void> {
  // TODO: implement mutation logic for 'SetpointController.initialize'.
  // Pre-conditions from spec:
  //   pre: clamped >= 40.0
  //   pre: clamped <= 90.0
  //   pre: temp >= -200.0
  //   pre: temp <= 200.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.clampedSetpoint = clamped
  //   post: self.currentTemperatureInput = temp
  //   post: self.decisionCommand = 'OFF'
  // After mutations, call validate*() on the affected SetpointController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: initialize");
}

// ─── Events on TemperatureSensor ───

export async function takeReading(value: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'TemperatureSensor.takeReading'.
  // Pre-conditions from spec:
  //   pre: value >= -200.0
  //   pre: value <= 200.0
  //   pre: timestamp >= 0.0
  //   pre: self.isOperational
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastReading = value
  //   post: self.lastTimestamp = timestamp
  //   post: self.isOperational = self.isOperational@pre
  // After mutations, call validate*() on the affected TemperatureSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: takeReading");
}

export async function setFaulty(): Promise<void> {
  // TODO: implement mutation logic for 'TemperatureSensor.setFaulty'.
  // Pre-conditions from spec:
  //   pre: self.isOperational
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperational = false
  // After mutations, call validate*() on the affected TemperatureSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setFaulty");
}

export async function restore(): Promise<void> {
  // TODO: implement mutation logic for 'TemperatureSensor.restore'.
  // Pre-conditions from spec:
  //   pre: not self.isOperational
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOperational = true
  //   post: self.lastReading = self.lastReading@pre
  //   post: self.lastTimestamp = self.lastTimestamp@pre
  // After mutations, call validate*() on the affected TemperatureSensor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: restore");
}

// ─── Events on ThermostatSystem ───

export async function setUserSetpoint(requestedSetpoint: number): Promise<void> {
  // TODO: implement mutation logic for 'ThermostatSystem.setUserSetpoint'.
  // Pre-conditions from spec:
  //   pre: not self.halted
  //   pre: requestedSetpoint >= -100.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentSetpoint = if requestedSetpoint < self.safeMinSetpoint then self.safeMinSetpoint
                                 else if requestedSetpoint > self.safeMaxSetpoint then self.safeMaxSetpoint
                                 else requestedSetpoint endif endif
  //   post: self.currentTemperature = self.currentTemperature@pre
  //   post: self.currentActuatorCommand = self.currentActuatorCommand@pre
  //   post: self.lastCommandTimestamp = self.lastCommandTimestamp@pre
  // After mutations, call validate*() on the affected ThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setUserSetpoint");
}

export async function processSensorReading(reading: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'ThermostatSystem.processSensorReading'.
  // Pre-conditions from spec:
  //   pre: reading >= -200.0
  //   pre: reading <= 200.0
  //   pre: timestamp >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted then
            self.currentTemperature = reading
            and
            self.currentActuatorCommand =
              if reading < self.currentSetpoint - 1.0 then 'HEAT'
              else if reading > self.currentSetpoint + 1.0 then 'COOL'
              else 'OFF' endif endif
          else if reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and self.halted then
            self.currentTemperature = reading
            and
            self.currentActuatorCommand = 'OFF'
            and
            self.halted = true
            and
            self.faultAlertActive = true
          else
            self.halted = true
            and
            self.faultAlertActive = true
            and
            self.currentActuatorCommand = 'OFF'
            and
            self.currentTemperature = self.currentTemperature@pre
          endif endif
  //   post: if (reading >= self.sensorPlausibilityMin and reading <= self.sensorPlausibilityMax and not self.halted@pre) then
            self.lastCommandTimestamp = timestamp
          else
            self.lastCommandTimestamp = self.lastCommandTimestamp@pre
          endif
  // After mutations, call validate*() on the affected ThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: processSensorReading");
}

export async function requestCommandTransition(newCommand: string, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'ThermostatSystem.requestCommandTransition'.
  // Pre-conditions from spec:
  //   pre: newCommand = 'HEAT' or newCommand = 'COOL' or newCommand = 'OFF'
  //   pre: timestamp >= 0.0
  //   pre: not self.halted
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if newCommand <> self.currentActuatorCommand@pre then
            if timestamp - self.lastCommandTimestamp@pre >= self.minCycleIntervalSecs then
              self.currentActuatorCommand = newCommand
              and
              self.lastCommandTimestamp = timestamp
            else
              self.currentActuatorCommand = self.currentActuatorCommand@pre
              and
              self.lastCommandTimestamp = self.lastCommandTimestamp@pre
            endif
          else
            self.currentActuatorCommand = self.currentActuatorCommand@pre
            and
            self.lastCommandTimestamp = timestamp
          endif
  //   post: self.currentTemperature = self.currentTemperature@pre
  //   post: self.currentSetpoint = self.currentSetpoint@pre
  //   post: self.halted = self.halted@pre
  //   post: self.faultAlertActive = self.faultAlertActive@pre
  // After mutations, call validate*() on the affected ThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: requestCommandTransition");
}

export async function displayCurrentState(): Promise<number> {
  // TODO: implement mutation logic for 'ThermostatSystem.displayCurrentState'.
  // Pre-conditions from spec:
  //   pre: true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result = self.currentTemperature
  // After mutations, call validate*() on the affected ThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: displayCurrentState");
}

export async function initialize(): Promise<void> {
  // TODO: implement mutation logic for 'ThermostatSystem.initialize'.
  // Pre-conditions from spec:
  //   pre: self.systemId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.halted = false
  //   post: self.faultAlertActive = false
  //   post: self.currentSetpoint = 72.0
  //   post: self.currentTemperature = 72.0
  //   post: self.currentActuatorCommand = 'OFF'
  //   post: self.lastCommandTimestamp = 0.0
  // After mutations, call validate*() on the affected ThermostatSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: initialize");
}

// ─── Events on ThermostatSystemFormalized ───

export async function guardPlausibleReading(reading: number, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'ThermostatSystemFormalized.guardPlausibleReading'.
  // Pre-conditions from spec:
  //   pre: not self.halted
  //   pre: reading < self.sensorPlausibilityMin or reading > self.sensorPlausibilityMax
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.halted = true
  //   post: self.faultAlertActive = true
  //   post: self.currentActuatorCommand = 'OFF'
  //   post: self.currentTemperature = self.currentTemperature@pre
  //   post: self.currentSetpoint = self.currentSetpoint@pre
  //   post: self.lastCommandTimestamp = self.lastCommandTimestamp@pre
  // After mutations, call validate*() on the affected ThermostatSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: guardPlausibleReading");
}

export async function guardUnsafeSetpoint(requestedSetpoint: number): Promise<void> {
  // TODO: implement mutation logic for 'ThermostatSystemFormalized.guardUnsafeSetpoint'.
  // Pre-conditions from spec:
  //   pre: not self.halted
  //   pre: requestedSetpoint < self.safeMinSetpoint or requestedSetpoint > self.safeMaxSetpoint
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: true
  // After mutations, call validate*() on the affected ThermostatSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: guardUnsafeSetpoint");
}

export async function guardCyclingViolation(newCommand: string, timestamp: number): Promise<void> {
  // TODO: implement mutation logic for 'ThermostatSystemFormalized.guardCyclingViolation'.
  // Pre-conditions from spec:
  //   pre: not self.halted
  //   pre: newCommand <> self.currentActuatorCommand
  //   pre: timestamp - self.lastCommandTimestamp < self.minCycleIntervalSecs
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: true
  // After mutations, call validate*() on the affected ThermostatSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: guardCyclingViolation");
}

export async function enforceDisplayConsistency(): Promise<void> {
  // TODO: implement mutation logic for 'ThermostatSystemFormalized.enforceDisplayConsistency'.
  // Pre-conditions from spec:
  //   pre: self.halted or self.faultAlertActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentTemperature <> null
  //   post: self.currentSetpoint <> null
  //   post: self.currentActuatorCommand <> null
  //   post: self.faultAlertActive = true
  //   post: self.halted = self.halted@pre
  //   post: self.currentTemperature = self.currentTemperature@pre
  //   post: self.currentSetpoint = self.currentSetpoint@pre
  //   post: self.currentActuatorCommand = self.currentActuatorCommand@pre
  // After mutations, call validate*() on the affected ThermostatSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceDisplayConsistency");
}
