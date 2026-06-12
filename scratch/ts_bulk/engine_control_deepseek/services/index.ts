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

// ─── Events on EngineControlSystem ───

export async function detectOverspeed(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.detectOverspeed'.
  // Pre-conditions from spec:
  //   pre: self.currentSpeed > self.maxSafeSpeed
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.overspeedDetected = true
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectOverspeed");
}

export async function limitFuelOnOverspeed(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.limitFuelOnOverspeed'.
  // Pre-conditions from spec:
  //   pre: self.overspeedDetected = true
  //   pre: self.overspeedProtectionFitted = true
  //   pre: self.fuelFlow > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelFlow <= 0.0
  //   post: self.currentSpeed <= self.maxSafeSpeed
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: limitFuelOnOverspeed");
}

export async function commandContinuousIgnition(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.commandContinuousIgnition'.
  // Pre-conditions from spec:
  //   pre: self.continuousIgnitionCommanded = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.continuousIgnitionEnabled = true
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: commandContinuousIgnition");
}

export async function holdThrustInFlight(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.holdThrustInFlight'.
  // Pre-conditions from spec:
  //   pre: self.inFlight = true
  //   pre: self.thrustCommanded > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.thrustHeld = self.thrustCommanded
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: holdThrustInFlight");
}

export async function deployReverserOnGround(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.deployReverserOnGround'.
  // Pre-conditions from spec:
  //   pre: self.onGround = true
  //   pre: self.reverserCommanded = true
  //   pre: not self.reverserEnabled
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserEnabled = true
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deployReverserOnGround");
}

export async function detectSensorFault(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.detectSensorFault'.
  // Pre-conditions from spec:
  //   pre: not self.sensorFaultActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultActive = true
  //   post: self.faultDetected = true
  //   post: self.modelledValueInUse = true
  //   post: self.modelledValueAvailable = true
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectSensorFault");
}

// ─── Events on EngineControlSystemFormalized ───

export async function rejectOverspeedWhenNoProtection(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.rejectOverspeedWhenNoProtection'.
  // Pre-conditions from spec:
  //   pre: self.overspeedDetected
  //   pre: not self.overspeedProtectionFitted
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelFlow <= self.fuelFlow@pre
  //   post: not self.reverserEnabled
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOverspeedWhenNoProtection");
}

export async function rejectReverserInFlight(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.rejectReverserInFlight'.
  // Pre-conditions from spec:
  //   pre: self.onGround = false
  //   pre: self.reverserCommanded = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: not self.reverserEnabled
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectReverserInFlight");
}

export async function enforceModelledValueSubstitution(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.enforceModelledValueSubstitution'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultActive = true
  //   pre: not self.modelledValueInUse
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.modelledValueInUse = true
  //   post: self.modelledValueAvailable = true
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceModelledValueSubstitution");
}

export async function guardContinuousIgnition(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.guardContinuousIgnition'.
  // Pre-conditions from spec:
  //   pre: not self.continuousIgnitionCommanded
  //   pre: self.continuousIgnitionEnabled
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: not self.continuousIgnitionEnabled
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: guardContinuousIgnition");
}

export async function limitThrustOnOverspeed(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.limitThrustOnOverspeed'.
  // Pre-conditions from spec:
  //   pre: self.overspeedDetected = true
  //   pre: self.thrustCommanded > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.thrustCommanded <= 0.0
  //   post: self.overspeedDetected = false
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: limitThrustOnOverspeed");
}

// ─── Events on OverspeedProtectionUnit ───

export async function armProtection(): Promise<void> {
  // TODO: implement mutation logic for 'OverspeedProtectionUnit.armProtection'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isArmed = true
  // After mutations, call validate*() on the affected OverspeedProtectionUnit snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: armProtection");
}

export async function shutOffFuelOnOverspeed(): Promise<void> {
  // TODO: implement mutation logic for 'OverspeedProtectionUnit.shutOffFuelOnOverspeed'.
  // Pre-conditions from spec:
  //   pre: self.isArmed = true
  //   pre: self.overspeedDetected = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelShutoffValve = true
  // After mutations, call validate*() on the affected OverspeedProtectionUnit snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: shutOffFuelOnOverspeed");
}

export async function resetAfterOverspeed(): Promise<void> {
  // TODO: implement mutation logic for 'OverspeedProtectionUnit.resetAfterOverspeed'.
  // Pre-conditions from spec:
  //   pre: not self.overspeedDetected
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelShutoffValve = false
  //   post: self.isArmed = false
  // After mutations, call validate*() on the affected OverspeedProtectionUnit snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetAfterOverspeed");
}

export async function setOverspeedDetected(detected: boolean): Promise<void> {
  // TODO: implement mutation logic for 'OverspeedProtectionUnit.setOverspeedDetected'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.overspeedDetected = detected
  // After mutations, call validate*() on the affected OverspeedProtectionUnit snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setOverspeedDetected");
}

// ─── Events on SensorFaultHandler ───

export async function detectSensorFault(): Promise<void> {
  // TODO: implement mutation logic for 'SensorFaultHandler.detectSensorFault'.
  // Pre-conditions from spec:
  //   pre: not self.sensorFaultActive
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultActive = true
  //   post: self.faultDetected = true
  //   post: self.modelledValueInUse = true
  //   post: self.modelledValueAvailable = true
  // After mutations, call validate*() on the affected SensorFaultHandler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectSensorFault");
}

export async function clearSensorFault(): Promise<void> {
  // TODO: implement mutation logic for 'SensorFaultHandler.clearSensorFault'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultActive = false
  //   post: self.faultDetected = false
  //   post: self.modelledValueInUse = false
  // After mutations, call validate*() on the affected SensorFaultHandler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearSensorFault");
}

// ─── Events on SpeedMonitor ───

export async function detectOverspeed(): Promise<void> {
  // TODO: implement mutation logic for 'SpeedMonitor.detectOverspeed'.
  // Pre-conditions from spec:
  //   pre: self.currentSpeed > self.maxSafeSpeed
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.overspeedDetected = true
  // After mutations, call validate*() on the affected SpeedMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: detectOverspeed");
}

export async function limitFuelOnOverspeed(): Promise<void> {
  // TODO: implement mutation logic for 'SpeedMonitor.limitFuelOnOverspeed'.
  // Pre-conditions from spec:
  //   pre: self.overspeedDetected = true
  //   pre: self.overspeedProtectionFitted = true
  //   pre: self.fuelFlow > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelFlow <= 0.0
  //   post: self.currentSpeed <= self.maxSafeSpeed
  // After mutations, call validate*() on the affected SpeedMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: limitFuelOnOverspeed");
}

export async function setCurrentSpeed(speed: number): Promise<void> {
  // TODO: implement mutation logic for 'SpeedMonitor.setCurrentSpeed'.
  // Pre-conditions from spec:
  //   pre: speed >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentSpeed = speed
  // After mutations, call validate*() on the affected SpeedMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setCurrentSpeed");
}

export async function setOverspeedProtectionFitted(fitted: boolean): Promise<void> {
  // TODO: implement mutation logic for 'SpeedMonitor.setOverspeedProtectionFitted'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.overspeedProtectionFitted = fitted
  // After mutations, call validate*() on the affected SpeedMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setOverspeedProtectionFitted");
}

export async function setFuelFlowFromModelledValue(flow: number): Promise<void> {
  // TODO: implement mutation logic for 'SpeedMonitor.setFuelFlowFromModelledValue'.
  // Pre-conditions from spec:
  //   pre: flow >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelFlow = flow
  // After mutations, call validate*() on the affected SpeedMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setFuelFlowFromModelledValue");
}

// ─── Events on ThrustManager ───

export async function commandContinuousIgnition(): Promise<void> {
  // TODO: implement mutation logic for 'ThrustManager.commandContinuousIgnition'.
  // Pre-conditions from spec:
  //   pre: self.continuousIgnitionCommanded = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.continuousIgnitionEnabled = true
  // After mutations, call validate*() on the affected ThrustManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: commandContinuousIgnition");
}

export async function holdThrustInFlight(): Promise<void> {
  // TODO: implement mutation logic for 'ThrustManager.holdThrustInFlight'.
  // Pre-conditions from spec:
  //   pre: self.inFlight = true
  //   pre: self.thrustCommanded > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.thrustHeld = self.thrustCommanded
  // After mutations, call validate*() on the affected ThrustManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: holdThrustInFlight");
}

export async function deployReverserOnGround(): Promise<void> {
  // TODO: implement mutation logic for 'ThrustManager.deployReverserOnGround'.
  // Pre-conditions from spec:
  //   pre: self.onGround = true
  //   pre: self.reverserCommanded = true
  //   pre: not self.reverserEnabled
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserEnabled = true
  // After mutations, call validate*() on the affected ThrustManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deployReverserOnGround");
}

export async function setOnGround(state: boolean): Promise<void> {
  // TODO: implement mutation logic for 'ThrustManager.setOnGround'.
  // Pre-conditions from spec:
  //   pre: state = true or state = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.onGround = state
  //   post: if state then self.inFlight = false else self.inFlight = true endif
  // After mutations, call validate*() on the affected ThrustManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setOnGround");
}

export async function setReverserCommanded(cmd: boolean): Promise<void> {
  // TODO: implement mutation logic for 'ThrustManager.setReverserCommanded'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserCommanded = cmd
  // After mutations, call validate*() on the affected ThrustManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setReverserCommanded");
}

export async function setContinuousIgnitionCommanded(cmd: boolean): Promise<void> {
  // TODO: implement mutation logic for 'ThrustManager.setContinuousIgnitionCommanded'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.continuousIgnitionCommanded = cmd
  // After mutations, call validate*() on the affected ThrustManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setContinuousIgnitionCommanded");
}

export async function setThrustCommanded(thrust: number): Promise<void> {
  // TODO: implement mutation logic for 'ThrustManager.setThrustCommanded'.
  // Pre-conditions from spec:
  //   pre: thrust >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.thrustCommanded = thrust
  // After mutations, call validate*() on the affected ThrustManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: setThrustCommanded");
}
