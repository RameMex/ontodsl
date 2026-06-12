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

export async function limitFuelOnOverspeed(detectedSpeed: number): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.limitFuelOnOverspeed'.
  // Pre-conditions from spec:
  //   pre: detectedSpeed >= self.maxSafeSpeed
  //   pre: self.overspeedProtectionFitted = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelFlow = 0.0
  //   post: self.engineSpeed <= self.maxSafeSpeed
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: limitFuelOnOverspeed");
}

export async function activateContinuousIgnition(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.activateContinuousIgnition'.
  // Pre-conditions from spec:
  //   pre: self.continuousIgnitionActive = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.continuousIgnitionActive = true
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: activateContinuousIgnition");
}

export async function deactivateContinuousIgnition(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.deactivateContinuousIgnition'.
  // Pre-conditions from spec:
  //   pre: self.continuousIgnitionActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.continuousIgnitionActive = false
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deactivateContinuousIgnition");
}

export async function holdThrustInFlight(commanded: number): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.holdThrustInFlight'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = true
  //   pre: commanded >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.commandedThrust = commanded
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: holdThrustInFlight");
}

export async function enableThrustReverser(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.enableThrustReverser'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserDeploymentEnabled = true
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enableThrustReverser");
}

export async function disableThrustReverser(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.disableThrustReverser'.
  // Pre-conditions from spec:
  //   pre: self.reverserDeploymentEnabled = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserDeploymentEnabled = false
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: disableThrustReverser");
}

export async function substituteModelledValue(modelledSpeed: number): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.substituteModelledValue'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultDetected = false
  //   pre: modelledSpeed >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = true
  //   post: self.usingModelledValue = true
  //   post: self.modelledSpeedValue = modelledSpeed
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: substituteModelledValue");
}

export async function resumeSensorReading(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.resumeSensorReading'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultDetected = true
  //   pre: self.usingModelledValue = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = false
  //   post: self.usingModelledValue = false
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resumeSensorReading");
}

export async function transitionToFlight(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.transitionToFlight'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.aircraftInFlight = true
  //   post: self.reverserDeploymentEnabled = false
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToFlight");
}

export async function transitionToGround(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystem.transitionToGround'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.aircraftInFlight = false
  // After mutations, call validate*() on the affected EngineControlSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToGround");
}

// ─── Events on EngineControlSystemFormalized ───

export async function rejectReverserIfAirborne(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.rejectReverserIfAirborne'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = true
  //   pre: self.reverserDeploymentEnabled = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserInFlightAttemptRejected = true
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectReverserIfAirborne");
}

export async function rejectOverspeedLimitOnUnprotectedVariant(detectedSpeed: number): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant'.
  // Pre-conditions from spec:
  //   pre: self.overspeedProtectionFitted = false
  //   pre: detectedSpeed >= self.maxSafeSpeed
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.unprotectedOverspeedAlertIssued = true
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOverspeedLimitOnUnprotectedVariant");
}

export async function rejectIgnitionDeactivationInHazardousPhase(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase'.
  // Pre-conditions from spec:
  //   pre: self.continuousIgnitionActive = true
  //   pre: self.aircraftInFlight = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.continuousIgnitionActive = true
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectIgnitionDeactivationInHazardousPhase");
}

export async function enforceFuelCutOnSpeedViolation(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation'.
  // Pre-conditions from spec:
  //   pre: self.engineSpeed > self.maxSafeSpeed
  //   pre: self.overspeedProtectionFitted = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelFlow = 0.0
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceFuelCutOnSpeedViolation");
}

export async function rejectThrustCommandPendingSubstitution(commanded: number): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultDetected = true
  //   pre: self.usingModelledValue = false
  //   pre: commanded >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.usingModelledValue = false
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectThrustCommandPendingSubstitution");
}

export async function forceReverserDisableBeforeFlight(): Promise<void> {
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.forceReverserDisableBeforeFlight'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = false
  //   pre: self.reverserDeploymentEnabled = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserDeploymentEnabled = false
  // After mutations, call validate*() on the affected EngineControlSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: forceReverserDisableBeforeFlight");
}

// ─── Events on FlightPhaseMonitor ───

export async function transitionToFlight(): Promise<void> {
  // TODO: implement mutation logic for 'FlightPhaseMonitor.transitionToFlight'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = false
  //   pre: self.weightOnWheelsDiscrete = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.aircraftInFlight = true
  // After mutations, call validate*() on the affected FlightPhaseMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToFlight");
}

export async function transitionToGround(): Promise<void> {
  // TODO: implement mutation logic for 'FlightPhaseMonitor.transitionToGround'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = true
  //   pre: self.weightOnWheelsDiscrete = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.aircraftInFlight = false
  // After mutations, call validate*() on the affected FlightPhaseMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToGround");
}

export async function updateWeightOnWheels(wow: boolean): Promise<void> {
  // TODO: implement mutation logic for 'FlightPhaseMonitor.updateWeightOnWheels'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.weightOnWheelsDiscrete = wow
  // After mutations, call validate*() on the affected FlightPhaseMonitor snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateWeightOnWheels");
}

// ─── Events on IgnitionThrustController ───

export async function activateContinuousIgnition(): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.activateContinuousIgnition'.
  // Pre-conditions from spec:
  //   pre: self.continuousIgnitionActive = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.continuousIgnitionActive = true
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: activateContinuousIgnition");
}

export async function deactivateContinuousIgnition(): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.deactivateContinuousIgnition'.
  // Pre-conditions from spec:
  //   pre: self.continuousIgnitionActive = true
  //   pre: self.aircraftInFlight = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.continuousIgnitionActive = false
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: deactivateContinuousIgnition");
}

export async function rejectIgnitionDeactivationInHazardousPhase(): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase'.
  // Pre-conditions from spec:
  //   pre: self.continuousIgnitionActive = true
  //   pre: self.aircraftInFlight = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.continuousIgnitionActive = true
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectIgnitionDeactivationInHazardousPhase");
}

export async function holdThrustInFlight(commanded: number): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.holdThrustInFlight'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = true
  //   pre: commanded >= 0.0
  //   pre: self.modelledValueSubstituted = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.commandedThrust = commanded
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: holdThrustInFlight");
}

export async function rejectThrustCommandPendingSubstitution(commanded: number): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.rejectThrustCommandPendingSubstitution'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultActive = true
  //   pre: self.modelledValueSubstituted = false
  //   pre: commanded >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.modelledValueSubstituted = false
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectThrustCommandPendingSubstitution");
}

export async function enableThrustReverser(): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.enableThrustReverser'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserDeploymentEnabled = true
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enableThrustReverser");
}

export async function disableThrustReverser(): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.disableThrustReverser'.
  // Pre-conditions from spec:
  //   pre: self.reverserDeploymentEnabled = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserDeploymentEnabled = false
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: disableThrustReverser");
}

export async function rejectReverserIfAirborne(): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.rejectReverserIfAirborne'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = true
  //   pre: self.reverserDeploymentEnabled = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserInFlightAttemptRejected = true
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectReverserIfAirborne");
}

export async function forceReverserDisableBeforeFlight(): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.forceReverserDisableBeforeFlight'.
  // Pre-conditions from spec:
  //   pre: self.aircraftInFlight = false
  //   pre: self.reverserDeploymentEnabled = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reverserDeploymentEnabled = false
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: forceReverserDisableBeforeFlight");
}

export async function receiveFlightPhaseUpdate(inFlight: boolean): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.receiveFlightPhaseUpdate'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.aircraftInFlight = inFlight
  //   post: if inFlight then
            self.reverserDeploymentEnabled = false
          else
            self.reverserDeploymentEnabled = self.reverserDeploymentEnabled
          endif
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: receiveFlightPhaseUpdate");
}

export async function receiveSensorFaultStatus(faultActive: boolean, substituted: boolean): Promise<void> {
  // TODO: implement mutation logic for 'IgnitionThrustController.receiveSensorFaultStatus'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultActive = faultActive
  //   post: self.modelledValueSubstituted = substituted
  // After mutations, call validate*() on the affected IgnitionThrustController snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: receiveSensorFaultStatus");
}

// ─── Events on OverspeedProtectionUnit ───

export async function limitFuelOnOverspeed(detectedSpeed: number): Promise<void> {
  // TODO: implement mutation logic for 'OverspeedProtectionUnit.limitFuelOnOverspeed'.
  // Pre-conditions from spec:
  //   pre: detectedSpeed >= self.maxSafeSpeed
  //   pre: self.overspeedProtectionFitted = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelFlow = 0.0
  //   post: self.engineSpeed <= self.maxSafeSpeed
  // After mutations, call validate*() on the affected OverspeedProtectionUnit snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: limitFuelOnOverspeed");
}

export async function rejectOverspeedLimitOnUnprotectedVariant(detectedSpeed: number): Promise<void> {
  // TODO: implement mutation logic for 'OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant'.
  // Pre-conditions from spec:
  //   pre: self.overspeedProtectionFitted = false
  //   pre: detectedSpeed >= self.maxSafeSpeed
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.unprotectedOverspeedAlertIssued = true
  // After mutations, call validate*() on the affected OverspeedProtectionUnit snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOverspeedLimitOnUnprotectedVariant");
}

export async function enforceFuelCutOnSpeedViolation(): Promise<void> {
  // TODO: implement mutation logic for 'OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation'.
  // Pre-conditions from spec:
  //   pre: self.engineSpeed > self.maxSafeSpeed
  //   pre: self.overspeedProtectionFitted = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.fuelFlow = 0.0
  // After mutations, call validate*() on the affected OverspeedProtectionUnit snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceFuelCutOnSpeedViolation");
}

export async function receiveEffectiveSpeed(speed: number): Promise<void> {
  // TODO: implement mutation logic for 'OverspeedProtectionUnit.receiveEffectiveSpeed'.
  // Pre-conditions from spec:
  //   pre: speed >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.engineSpeed = speed
  // After mutations, call validate*() on the affected OverspeedProtectionUnit snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: receiveEffectiveSpeed");
}

// ─── Events on SensorFaultManager ───

export async function substituteModelledValue(modelledSpeed: number): Promise<void> {
  // TODO: implement mutation logic for 'SensorFaultManager.substituteModelledValue'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultDetected = false
  //   pre: modelledSpeed >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = true
  //   post: self.usingModelledValue = true
  //   post: self.modelledSpeedValue = modelledSpeed
  // After mutations, call validate*() on the affected SensorFaultManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: substituteModelledValue");
}

export async function resumeSensorReading(): Promise<void> {
  // TODO: implement mutation logic for 'SensorFaultManager.resumeSensorReading'.
  // Pre-conditions from spec:
  //   pre: self.sensorFaultDetected = true
  //   pre: self.usingModelledValue = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sensorFaultDetected = false
  //   post: self.usingModelledValue = false
  // After mutations, call validate*() on the affected SensorFaultManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resumeSensorReading");
}
