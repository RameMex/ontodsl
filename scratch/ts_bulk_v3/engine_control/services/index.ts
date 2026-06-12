// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { engineControlSystemFormalizeds, engineControlSystems, flightPhaseMonitors, ignitionThrustControllers, overspeedProtectionUnits, sensorFaultManagers } from "../db/schema.js";
import { eq } from "drizzle-orm";
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

export async function limitFuelOnOverspeed(__selfId: string, detectedSpeed: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: detectedSpeed >= self.maxSafeSpeed
  //   pre: self.overspeedProtectionFitted = true
  // Post-conditions from spec:
  //   post: self.fuelFlow = 0.0
  //   post: self.engineSpeed <= self.maxSafeSpeed
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      fuelFlow: 0,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "limitFuelOnOverspeed");
  });
}

export async function activateContinuousIgnition(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.continuousIgnitionActive = false
  // Post-conditions from spec:
  //   post: self.continuousIgnitionActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      continuousIgnitionActive: true,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "activateContinuousIgnition");
  });
}

export async function deactivateContinuousIgnition(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.continuousIgnitionActive = true
  // Post-conditions from spec:
  //   post: self.continuousIgnitionActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      continuousIgnitionActive: false,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "deactivateContinuousIgnition");
  });
}

export async function holdThrustInFlight(__selfId: string, commanded: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = true
  //   pre: commanded >= 0.0
  // Post-conditions from spec:
  //   post: self.commandedThrust = commanded
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      commandedThrust: commanded,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "holdThrustInFlight");
  });
}

export async function enableThrustReverser(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = false
  // Post-conditions from spec:
  //   post: self.reverserDeploymentEnabled = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      reverserDeploymentEnabled: true,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "enableThrustReverser");
  });
}

export async function disableThrustReverser(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.reverserDeploymentEnabled = true
  // Post-conditions from spec:
  //   post: self.reverserDeploymentEnabled = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      reverserDeploymentEnabled: false,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "disableThrustReverser");
  });
}

export async function substituteModelledValue(__selfId: string, modelledSpeed: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultDetected = false
  //   pre: modelledSpeed >= 0.0
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = true
  //   post: self.usingModelledValue = true
  //   post: self.modelledSpeedValue = modelledSpeed
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      sensorFaultDetected: true,
      usingModelledValue: true,
      modelledSpeedValue: modelledSpeed,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "substituteModelledValue");
  });
}

export async function resumeSensorReading(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultDetected = true
  //   pre: self.usingModelledValue = true
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = false
  //   post: self.usingModelledValue = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      sensorFaultDetected: false,
      usingModelledValue: false,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "resumeSensorReading");
  });
}

export async function transitionToFlight(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = false
  // Post-conditions from spec:
  //   post: self.aircraftInFlight = true
  //   post: self.reverserDeploymentEnabled = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      aircraftInFlight: true,
      reverserDeploymentEnabled: false,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "transitionToFlight");
  });
}

export async function transitionToGround(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = true
  // Post-conditions from spec:
  //   post: self.aircraftInFlight = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      aircraftInFlight: false,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "transitionToGround");
  });
}

// ─── Events on EngineControlSystemFormalized ───

export async function rejectReverserIfAirborne(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = true
  //   pre: self.reverserDeploymentEnabled = false
  // Post-conditions from spec:
  //   post: self.reverserInFlightAttemptRejected = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystemFormalizeds).set({
      reverserInFlightAttemptRejected: true,
    }).where(eq(engineControlSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateEngineControlSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystemFormalizeds).where(eq(engineControlSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateEngineControlSystemFormalized(row as never), "rejectReverserIfAirborne");
  });
}

export async function rejectOverspeedLimitOnUnprotectedVariant(__selfId: string, detectedSpeed: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.overspeedProtectionFitted = false
  //   pre: detectedSpeed >= self.maxSafeSpeed
  // Post-conditions from spec:
  //   post: self.unprotectedOverspeedAlertIssued = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystemFormalizeds).set({
      unprotectedOverspeedAlertIssued: true,
    }).where(eq(engineControlSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateEngineControlSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystemFormalizeds).where(eq(engineControlSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateEngineControlSystemFormalized(row as never), "rejectOverspeedLimitOnUnprotectedVariant");
  });
}

export async function rejectIgnitionDeactivationInHazardousPhase(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.continuousIgnitionActive = true
  //   pre: self.aircraftInFlight = true
  // Post-conditions from spec:
  //   post: self.continuousIgnitionActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystemFormalizeds).set({
      continuousIgnitionActive: true,
    }).where(eq(engineControlSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateEngineControlSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystemFormalizeds).where(eq(engineControlSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateEngineControlSystemFormalized(row as never), "rejectIgnitionDeactivationInHazardousPhase");
  });
}

export async function enforceFuelCutOnSpeedViolation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.engineSpeed > self.maxSafeSpeed
  //   pre: self.overspeedProtectionFitted = true
  // Post-conditions from spec:
  //   post: self.fuelFlow = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystemFormalizeds).set({
      fuelFlow: 0,
    }).where(eq(engineControlSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateEngineControlSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystemFormalizeds).where(eq(engineControlSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateEngineControlSystemFormalized(row as never), "enforceFuelCutOnSpeedViolation");
  });
}

export async function rejectThrustCommandPendingSubstitution(__selfId: string, commanded: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultDetected = true
  //   pre: self.usingModelledValue = false
  //   pre: commanded >= 0.0
  // Post-conditions from spec:
  //   post: self.usingModelledValue = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystemFormalizeds).set({
      usingModelledValue: false,
    }).where(eq(engineControlSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateEngineControlSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystemFormalizeds).where(eq(engineControlSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateEngineControlSystemFormalized(row as never), "rejectThrustCommandPendingSubstitution");
  });
}

export async function forceReverserDisableBeforeFlight(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = false
  //   pre: self.reverserDeploymentEnabled = true
  // Post-conditions from spec:
  //   post: self.reverserDeploymentEnabled = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystemFormalizeds).set({
      reverserDeploymentEnabled: false,
    }).where(eq(engineControlSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateEngineControlSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystemFormalizeds).where(eq(engineControlSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateEngineControlSystemFormalized(row as never), "forceReverserDisableBeforeFlight");
  });
}

// ─── Events on FlightPhaseMonitor ───

export async function transitionToFlight(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = false
  //   pre: self.weightOnWheelsDiscrete = false
  // Post-conditions from spec:
  //   post: self.aircraftInFlight = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(flightPhaseMonitors).set({
      aircraftInFlight: true,
    }).where(eq(flightPhaseMonitors.unitId, __selfId));
    // After mutation: re-validate against `validateFlightPhaseMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(flightPhaseMonitors).where(eq(flightPhaseMonitors.unitId, __selfId)).get();
    // assertNoViolations(validateFlightPhaseMonitor(row as never), "transitionToFlight");
  });
}

export async function transitionToGround(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = true
  //   pre: self.weightOnWheelsDiscrete = true
  // Post-conditions from spec:
  //   post: self.aircraftInFlight = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(flightPhaseMonitors).set({
      aircraftInFlight: false,
    }).where(eq(flightPhaseMonitors.unitId, __selfId));
    // After mutation: re-validate against `validateFlightPhaseMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(flightPhaseMonitors).where(eq(flightPhaseMonitors.unitId, __selfId)).get();
    // assertNoViolations(validateFlightPhaseMonitor(row as never), "transitionToGround");
  });
}

export async function updateWeightOnWheels(__selfId: string, wow: boolean): Promise<void> {
  // Post-conditions from spec:
  //   post: self.weightOnWheelsDiscrete = wow
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(flightPhaseMonitors).set({
      weightOnWheelsDiscrete: wow,
    }).where(eq(flightPhaseMonitors.unitId, __selfId));
    // After mutation: re-validate against `validateFlightPhaseMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(flightPhaseMonitors).where(eq(flightPhaseMonitors.unitId, __selfId)).get();
    // assertNoViolations(validateFlightPhaseMonitor(row as never), "updateWeightOnWheels");
  });
}

// ─── Events on IgnitionThrustController ───

export async function activateContinuousIgnition(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.continuousIgnitionActive = false
  // Post-conditions from spec:
  //   post: self.continuousIgnitionActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      continuousIgnitionActive: true,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "activateContinuousIgnition");
  });
}

export async function deactivateContinuousIgnition(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.continuousIgnitionActive = true
  //   pre: self.aircraftInFlight = false
  // Post-conditions from spec:
  //   post: self.continuousIgnitionActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      continuousIgnitionActive: false,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "deactivateContinuousIgnition");
  });
}

export async function rejectIgnitionDeactivationInHazardousPhase(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.continuousIgnitionActive = true
  //   pre: self.aircraftInFlight = true
  // Post-conditions from spec:
  //   post: self.continuousIgnitionActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      continuousIgnitionActive: true,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "rejectIgnitionDeactivationInHazardousPhase");
  });
}

export async function holdThrustInFlight(__selfId: string, commanded: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = true
  //   pre: commanded >= 0.0
  //   pre: self.modelledValueSubstituted = true
  // Post-conditions from spec:
  //   post: self.commandedThrust = commanded
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      commandedThrust: commanded,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "holdThrustInFlight");
  });
}

export async function rejectThrustCommandPendingSubstitution(__selfId: string, commanded: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultActive = true
  //   pre: self.modelledValueSubstituted = false
  //   pre: commanded >= 0.0
  // Post-conditions from spec:
  //   post: self.modelledValueSubstituted = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      modelledValueSubstituted: false,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "rejectThrustCommandPendingSubstitution");
  });
}

export async function enableThrustReverser(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = false
  // Post-conditions from spec:
  //   post: self.reverserDeploymentEnabled = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      reverserDeploymentEnabled: true,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "enableThrustReverser");
  });
}

export async function disableThrustReverser(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.reverserDeploymentEnabled = true
  // Post-conditions from spec:
  //   post: self.reverserDeploymentEnabled = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      reverserDeploymentEnabled: false,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "disableThrustReverser");
  });
}

export async function rejectReverserIfAirborne(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = true
  //   pre: self.reverserDeploymentEnabled = false
  // Post-conditions from spec:
  //   post: self.reverserInFlightAttemptRejected = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      reverserInFlightAttemptRejected: true,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "rejectReverserIfAirborne");
  });
}

export async function forceReverserDisableBeforeFlight(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.aircraftInFlight = false
  //   pre: self.reverserDeploymentEnabled = true
  // Post-conditions from spec:
  //   post: self.reverserDeploymentEnabled = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      reverserDeploymentEnabled: false,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "forceReverserDisableBeforeFlight");
  });
}

export async function receiveFlightPhaseUpdate(__selfId: string, inFlight: boolean): Promise<void> {
  // Post-conditions from spec:
  //   post: self.aircraftInFlight = inFlight
  //   post: if inFlight then
            self.reverserDeploymentEnabled = false
          else
            self.reverserDeploymentEnabled = self.reverserDeploymentEnabled
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      aircraftInFlight: inFlight,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "receiveFlightPhaseUpdate");
  });
}

export async function receiveSensorFaultStatus(__selfId: string, faultActive: boolean, substituted: boolean): Promise<void> {
  // Post-conditions from spec:
  //   post: self.sensorFaultActive = faultActive
  //   post: self.modelledValueSubstituted = substituted
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(ignitionThrustControllers).set({
      sensorFaultActive: faultActive,
      modelledValueSubstituted: substituted,
    }).where(eq(ignitionThrustControllers.unitId, __selfId));
    // After mutation: re-validate against `validateIgnitionThrustController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(ignitionThrustControllers).where(eq(ignitionThrustControllers.unitId, __selfId)).get();
    // assertNoViolations(validateIgnitionThrustController(row as never), "receiveSensorFaultStatus");
  });
}

// ─── Events on OverspeedProtectionUnit ───

export async function limitFuelOnOverspeed(__selfId: string, detectedSpeed: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: detectedSpeed >= self.maxSafeSpeed
  //   pre: self.overspeedProtectionFitted = true
  // Post-conditions from spec:
  //   post: self.fuelFlow = 0.0
  //   post: self.engineSpeed <= self.maxSafeSpeed
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(overspeedProtectionUnits).set({
      fuelFlow: 0,
    }).where(eq(overspeedProtectionUnits.unitId, __selfId));
    // After mutation: re-validate against `validateOverspeedProtectionUnit` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(overspeedProtectionUnits).where(eq(overspeedProtectionUnits.unitId, __selfId)).get();
    // assertNoViolations(validateOverspeedProtectionUnit(row as never), "limitFuelOnOverspeed");
  });
}

export async function rejectOverspeedLimitOnUnprotectedVariant(__selfId: string, detectedSpeed: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.overspeedProtectionFitted = false
  //   pre: detectedSpeed >= self.maxSafeSpeed
  // Post-conditions from spec:
  //   post: self.unprotectedOverspeedAlertIssued = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(overspeedProtectionUnits).set({
      unprotectedOverspeedAlertIssued: true,
    }).where(eq(overspeedProtectionUnits.unitId, __selfId));
    // After mutation: re-validate against `validateOverspeedProtectionUnit` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(overspeedProtectionUnits).where(eq(overspeedProtectionUnits.unitId, __selfId)).get();
    // assertNoViolations(validateOverspeedProtectionUnit(row as never), "rejectOverspeedLimitOnUnprotectedVariant");
  });
}

export async function enforceFuelCutOnSpeedViolation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.engineSpeed > self.maxSafeSpeed
  //   pre: self.overspeedProtectionFitted = true
  // Post-conditions from spec:
  //   post: self.fuelFlow = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(overspeedProtectionUnits).set({
      fuelFlow: 0,
    }).where(eq(overspeedProtectionUnits.unitId, __selfId));
    // After mutation: re-validate against `validateOverspeedProtectionUnit` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(overspeedProtectionUnits).where(eq(overspeedProtectionUnits.unitId, __selfId)).get();
    // assertNoViolations(validateOverspeedProtectionUnit(row as never), "enforceFuelCutOnSpeedViolation");
  });
}

export async function receiveEffectiveSpeed(__selfId: string, speed: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: speed >= 0.0
  // Post-conditions from spec:
  //   post: self.engineSpeed = speed
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(overspeedProtectionUnits).set({
      engineSpeed: speed,
    }).where(eq(overspeedProtectionUnits.unitId, __selfId));
    // After mutation: re-validate against `validateOverspeedProtectionUnit` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(overspeedProtectionUnits).where(eq(overspeedProtectionUnits.unitId, __selfId)).get();
    // assertNoViolations(validateOverspeedProtectionUnit(row as never), "receiveEffectiveSpeed");
  });
}

// ─── Events on SensorFaultManager ───

export async function substituteModelledValue(__selfId: string, modelledSpeed: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultDetected = false
  //   pre: modelledSpeed >= 0.0
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = true
  //   post: self.usingModelledValue = true
  //   post: self.modelledSpeedValue = modelledSpeed
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(sensorFaultManagers).set({
      sensorFaultDetected: true,
      usingModelledValue: true,
      modelledSpeedValue: modelledSpeed,
    }).where(eq(sensorFaultManagers.unitId, __selfId));
    // After mutation: re-validate against `validateSensorFaultManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(sensorFaultManagers).where(eq(sensorFaultManagers.unitId, __selfId)).get();
    // assertNoViolations(validateSensorFaultManager(row as never), "substituteModelledValue");
  });
}

export async function resumeSensorReading(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultDetected = true
  //   pre: self.usingModelledValue = true
  // Post-conditions from spec:
  //   post: self.sensorFaultDetected = false
  //   post: self.usingModelledValue = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(sensorFaultManagers).set({
      sensorFaultDetected: false,
      usingModelledValue: false,
    }).where(eq(sensorFaultManagers.unitId, __selfId));
    // After mutation: re-validate against `validateSensorFaultManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(sensorFaultManagers).where(eq(sensorFaultManagers.unitId, __selfId)).get();
    // assertNoViolations(validateSensorFaultManager(row as never), "resumeSensorReading");
  });
}
