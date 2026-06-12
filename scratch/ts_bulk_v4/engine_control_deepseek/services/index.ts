// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { engineControlSystemFormalizeds, engineControlSystems, overspeedProtectionUnits, sensorFaultHandlers, speedMonitors, thrustManagers } from "../db/schema.js";
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

// ─── Events on EngineControlSystem ───

export async function detectOverspeed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentSpeed > self.maxSafeSpeed
  // Post-conditions from spec:
  //   post: self.overspeedDetected = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      overspeedDetected: true,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "detectOverspeed");
  });
}

export async function limitFuelOnOverspeed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.overspeedDetected = true
  //   pre: self.overspeedProtectionFitted = true
  //   pre: self.fuelFlow > 0.0
  // Post-conditions from spec:
  //   post: self.fuelFlow <= 0.0
  //   post: self.currentSpeed <= self.maxSafeSpeed
  // TODO: implement mutation logic for 'EngineControlSystem.limitFuelOnOverspeed'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: limitFuelOnOverspeed");
}

export async function commandContinuousIgnition(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.continuousIgnitionCommanded = true
  // Post-conditions from spec:
  //   post: self.continuousIgnitionEnabled = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      continuousIgnitionEnabled: true,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "commandContinuousIgnition");
  });
}

export async function holdThrustInFlight(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.inFlight = true
  //   pre: self.thrustCommanded > 0.0
  // Post-conditions from spec:
  //   post: self.thrustHeld = self.thrustCommanded
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      thrustHeld: sql`${engineControlSystems.thrustCommanded}`,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "holdThrustInFlight");
  });
}

export async function deployReverserOnGround(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.onGround = true
  //   pre: self.reverserCommanded = true
  //   pre: not self.reverserEnabled
  // Post-conditions from spec:
  //   post: self.reverserEnabled = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      reverserEnabled: true,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "deployReverserOnGround");
  });
}

export async function detectSensorFault(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.sensorFaultActive
  // Post-conditions from spec:
  //   post: self.sensorFaultActive = true
  //   post: self.faultDetected = true
  //   post: self.modelledValueInUse = true
  //   post: self.modelledValueAvailable = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystems).set({
      sensorFaultActive: true,
      faultDetected: true,
      modelledValueInUse: true,
      modelledValueAvailable: true,
    }).where(eq(engineControlSystems.systemId, __selfId));
    // After mutation: re-validate against `validateEngineControlSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystems).where(eq(engineControlSystems.systemId, __selfId)).get();
    // assertNoViolations(validateEngineControlSystem(row as never), "detectSensorFault");
  });
}

// ─── Events on EngineControlSystemFormalized ───

export async function rejectOverspeedWhenNoProtection(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.overspeedDetected
  //   pre: not self.overspeedProtectionFitted
  // Post-conditions from spec:
  //   post: self.fuelFlow <= self.fuelFlow@pre
  //   post: not self.reverserEnabled
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.rejectOverspeedWhenNoProtection'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectOverspeedWhenNoProtection");
}

export async function rejectReverserInFlight(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.onGround = false
  //   pre: self.reverserCommanded = true
  // Post-conditions from spec:
  //   post: not self.reverserEnabled
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.rejectReverserInFlight'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectReverserInFlight");
}

export async function enforceModelledValueSubstitution(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultActive = true
  //   pre: not self.modelledValueInUse
  // Post-conditions from spec:
  //   post: self.modelledValueInUse = true
  //   post: self.modelledValueAvailable = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystemFormalizeds).set({
      modelledValueInUse: true,
      modelledValueAvailable: true,
    }).where(eq(engineControlSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateEngineControlSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystemFormalizeds).where(eq(engineControlSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateEngineControlSystemFormalized(row as never), "enforceModelledValueSubstitution");
  });
}

export async function guardContinuousIgnition(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.continuousIgnitionCommanded
  //   pre: self.continuousIgnitionEnabled
  // Post-conditions from spec:
  //   post: not self.continuousIgnitionEnabled
  // TODO: implement mutation logic for 'EngineControlSystemFormalized.guardContinuousIgnition'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: guardContinuousIgnition");
}

export async function limitThrustOnOverspeed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.overspeedDetected = true
  //   pre: self.thrustCommanded > 0.0
  // Post-conditions from spec:
  //   post: self.thrustCommanded <= 0.0
  //   post: self.overspeedDetected = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(engineControlSystemFormalizeds).set({
      overspeedDetected: false,
    }).where(eq(engineControlSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateEngineControlSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(engineControlSystemFormalizeds).where(eq(engineControlSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateEngineControlSystemFormalized(row as never), "limitThrustOnOverspeed");
  });
}

// ─── Events on OverspeedProtectionUnit ───

export async function armProtection(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.isArmed = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(overspeedProtectionUnits).set({
      isArmed: true,
    }).where(eq(overspeedProtectionUnits.protectionId, __selfId));
    // After mutation: re-validate against `validateOverspeedProtectionUnit` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(overspeedProtectionUnits).where(eq(overspeedProtectionUnits.protectionId, __selfId)).get();
    // assertNoViolations(validateOverspeedProtectionUnit(row as never), "armProtection");
  });
}

export async function shutOffFuelOnOverspeed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isArmed = true
  //   pre: self.overspeedDetected = true
  // Post-conditions from spec:
  //   post: self.fuelShutoffValve = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(overspeedProtectionUnits).set({
      fuelShutoffValve: true,
    }).where(eq(overspeedProtectionUnits.protectionId, __selfId));
    // After mutation: re-validate against `validateOverspeedProtectionUnit` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(overspeedProtectionUnits).where(eq(overspeedProtectionUnits.protectionId, __selfId)).get();
    // assertNoViolations(validateOverspeedProtectionUnit(row as never), "shutOffFuelOnOverspeed");
  });
}

export async function resetAfterOverspeed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.overspeedDetected
  // Post-conditions from spec:
  //   post: self.fuelShutoffValve = false
  //   post: self.isArmed = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(overspeedProtectionUnits).set({
      fuelShutoffValve: false,
      isArmed: false,
    }).where(eq(overspeedProtectionUnits.protectionId, __selfId));
    // After mutation: re-validate against `validateOverspeedProtectionUnit` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(overspeedProtectionUnits).where(eq(overspeedProtectionUnits.protectionId, __selfId)).get();
    // assertNoViolations(validateOverspeedProtectionUnit(row as never), "resetAfterOverspeed");
  });
}

export async function setOverspeedDetected(__selfId: string, detected: boolean): Promise<void> {
  // Post-conditions from spec:
  //   post: self.overspeedDetected = detected
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(overspeedProtectionUnits).set({
      overspeedDetected: detected,
    }).where(eq(overspeedProtectionUnits.protectionId, __selfId));
    // After mutation: re-validate against `validateOverspeedProtectionUnit` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(overspeedProtectionUnits).where(eq(overspeedProtectionUnits.protectionId, __selfId)).get();
    // assertNoViolations(validateOverspeedProtectionUnit(row as never), "setOverspeedDetected");
  });
}

// ─── Events on SensorFaultHandler ───

export async function detectSensorFault(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.sensorFaultActive
  // Post-conditions from spec:
  //   post: self.sensorFaultActive = true
  //   post: self.faultDetected = true
  //   post: self.modelledValueInUse = true
  //   post: self.modelledValueAvailable = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(sensorFaultHandlers).set({
      sensorFaultActive: true,
      faultDetected: true,
      modelledValueInUse: true,
      modelledValueAvailable: true,
    }).where(eq(sensorFaultHandlers.handlerId, __selfId));
    // After mutation: re-validate against `validateSensorFaultHandler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(sensorFaultHandlers).where(eq(sensorFaultHandlers.handlerId, __selfId)).get();
    // assertNoViolations(validateSensorFaultHandler(row as never), "detectSensorFault");
  });
}

export async function clearSensorFault(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorFaultActive = true
  // Post-conditions from spec:
  //   post: self.sensorFaultActive = false
  //   post: self.faultDetected = false
  //   post: self.modelledValueInUse = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(sensorFaultHandlers).set({
      sensorFaultActive: false,
      faultDetected: false,
      modelledValueInUse: false,
    }).where(eq(sensorFaultHandlers.handlerId, __selfId));
    // After mutation: re-validate against `validateSensorFaultHandler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(sensorFaultHandlers).where(eq(sensorFaultHandlers.handlerId, __selfId)).get();
    // assertNoViolations(validateSensorFaultHandler(row as never), "clearSensorFault");
  });
}

// ─── Events on SpeedMonitor ───

export async function detectOverspeed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentSpeed > self.maxSafeSpeed
  // Post-conditions from spec:
  //   post: self.overspeedDetected = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(speedMonitors).set({
      overspeedDetected: true,
    }).where(eq(speedMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSpeedMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(speedMonitors).where(eq(speedMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSpeedMonitor(row as never), "detectOverspeed");
  });
}

export async function limitFuelOnOverspeed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.overspeedDetected = true
  //   pre: self.overspeedProtectionFitted = true
  //   pre: self.fuelFlow > 0.0
  // Post-conditions from spec:
  //   post: self.fuelFlow <= 0.0
  //   post: self.currentSpeed <= self.maxSafeSpeed
  // TODO: implement mutation logic for 'SpeedMonitor.limitFuelOnOverspeed'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: limitFuelOnOverspeed");
}

export async function setCurrentSpeed(__selfId: string, speed: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: speed >= 0.0
  // Post-conditions from spec:
  //   post: self.currentSpeed = speed
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(speedMonitors).set({
      currentSpeed: speed,
    }).where(eq(speedMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSpeedMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(speedMonitors).where(eq(speedMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSpeedMonitor(row as never), "setCurrentSpeed");
  });
}

export async function setOverspeedProtectionFitted(__selfId: string, fitted: boolean): Promise<void> {
  // Post-conditions from spec:
  //   post: self.overspeedProtectionFitted = fitted
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(speedMonitors).set({
      overspeedProtectionFitted: fitted,
    }).where(eq(speedMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSpeedMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(speedMonitors).where(eq(speedMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSpeedMonitor(row as never), "setOverspeedProtectionFitted");
  });
}

export async function setFuelFlowFromModelledValue(__selfId: string, flow: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: flow >= 0.0
  // Post-conditions from spec:
  //   post: self.fuelFlow = flow
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(speedMonitors).set({
      fuelFlow: flow,
    }).where(eq(speedMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateSpeedMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(speedMonitors).where(eq(speedMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateSpeedMonitor(row as never), "setFuelFlowFromModelledValue");
  });
}

// ─── Events on ThrustManager ───

export async function commandContinuousIgnition(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.continuousIgnitionCommanded = true
  // Post-conditions from spec:
  //   post: self.continuousIgnitionEnabled = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thrustManagers).set({
      continuousIgnitionEnabled: true,
    }).where(eq(thrustManagers.managerId, __selfId));
    // After mutation: re-validate against `validateThrustManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thrustManagers).where(eq(thrustManagers.managerId, __selfId)).get();
    // assertNoViolations(validateThrustManager(row as never), "commandContinuousIgnition");
  });
}

export async function holdThrustInFlight(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.inFlight = true
  //   pre: self.thrustCommanded > 0.0
  // Post-conditions from spec:
  //   post: self.thrustHeld = self.thrustCommanded
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thrustManagers).set({
      thrustHeld: sql`${thrustManagers.thrustCommanded}`,
    }).where(eq(thrustManagers.managerId, __selfId));
    // After mutation: re-validate against `validateThrustManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thrustManagers).where(eq(thrustManagers.managerId, __selfId)).get();
    // assertNoViolations(validateThrustManager(row as never), "holdThrustInFlight");
  });
}

export async function deployReverserOnGround(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.onGround = true
  //   pre: self.reverserCommanded = true
  //   pre: not self.reverserEnabled
  // Post-conditions from spec:
  //   post: self.reverserEnabled = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thrustManagers).set({
      reverserEnabled: true,
    }).where(eq(thrustManagers.managerId, __selfId));
    // After mutation: re-validate against `validateThrustManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thrustManagers).where(eq(thrustManagers.managerId, __selfId)).get();
    // assertNoViolations(validateThrustManager(row as never), "deployReverserOnGround");
  });
}

export async function setOnGround(__selfId: string, state: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: state = true or state = false
  // Post-conditions from spec:
  //   post: self.onGround = state
  //   post: if state then self.inFlight = false else self.inFlight = true endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thrustManagers).set({
      onGround: state,
      inFlight: sql`CASE WHEN ${state} THEN ${false} ELSE ${true} END`,
    }).where(eq(thrustManagers.managerId, __selfId));
    // After mutation: re-validate against `validateThrustManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thrustManagers).where(eq(thrustManagers.managerId, __selfId)).get();
    // assertNoViolations(validateThrustManager(row as never), "setOnGround");
  });
}

export async function setReverserCommanded(__selfId: string, cmd: boolean): Promise<void> {
  // Post-conditions from spec:
  //   post: self.reverserCommanded = cmd
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thrustManagers).set({
      reverserCommanded: cmd,
    }).where(eq(thrustManagers.managerId, __selfId));
    // After mutation: re-validate against `validateThrustManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thrustManagers).where(eq(thrustManagers.managerId, __selfId)).get();
    // assertNoViolations(validateThrustManager(row as never), "setReverserCommanded");
  });
}

export async function setContinuousIgnitionCommanded(__selfId: string, cmd: boolean): Promise<void> {
  // Post-conditions from spec:
  //   post: self.continuousIgnitionCommanded = cmd
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thrustManagers).set({
      continuousIgnitionCommanded: cmd,
    }).where(eq(thrustManagers.managerId, __selfId));
    // After mutation: re-validate against `validateThrustManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thrustManagers).where(eq(thrustManagers.managerId, __selfId)).get();
    // assertNoViolations(validateThrustManager(row as never), "setContinuousIgnitionCommanded");
  });
}

export async function setThrustCommanded(__selfId: string, thrust: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: thrust >= 0.0
  // Post-conditions from spec:
  //   post: self.thrustCommanded = thrust
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(thrustManagers).set({
      thrustCommanded: thrust,
    }).where(eq(thrustManagers.managerId, __selfId));
    // After mutation: re-validate against `validateThrustManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(thrustManagers).where(eq(thrustManagers.managerId, __selfId)).get();
    // assertNoViolations(validateThrustManager(row as never), "setThrustCommanded");
  });
}
