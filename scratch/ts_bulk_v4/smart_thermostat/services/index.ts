// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { actuatorDriverComponents, displayComponents, setpointControllerComponents, smartThermostatSystemFormalizeds, smartThermostatSystems, temperatureSensorComponents } from "../db/schema.js";
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

// ─── Events on ActuatorDriverComponent ───

export async function driveActuator(__selfId: string, currentTempF: number, clampedSetpointF: number, atMinute: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.alertActive
  //   pre: atMinute >= self.lastTransitionMinute
  //   pre: (atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes
  // Post-conditions from spec:
  //   post: if currentTempF < clampedSetpointF
          then self.actuatorSignal = 'HEAT'
          else if currentTempF > clampedSetpointF
          then self.actuatorSignal = 'COOL'
          else self.actuatorSignal = 'OFF'
          endif endif
  //   post: self.lastTransitionMinute = atMinute
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(actuatorDriverComponents).set({
      actuatorSignal: sql`CASE WHEN ${currentTempF} < ${clampedSetpointF} THEN ${"HEAT"} ELSE CASE WHEN ${currentTempF} > ${clampedSetpointF} THEN ${"COOL"} ELSE ${"OFF"} END END`,
      lastTransitionMinute: atMinute,
    }).where(eq(actuatorDriverComponents.actuatorDriverId, __selfId));
    // After mutation: re-validate against `validateActuatorDriverComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(actuatorDriverComponents).where(eq(actuatorDriverComponents.actuatorDriverId, __selfId)).get();
    // assertNoViolations(validateActuatorDriverComponent(row as never), "driveActuator");
  });
}

export async function engageSafeHalt(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.alertActive
  // Post-conditions from spec:
  //   post: self.actuatorSignal = 'OFF'
  //   post: self.alertActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(actuatorDriverComponents).set({
      actuatorSignal: "OFF",
      alertActive: true,
    }).where(eq(actuatorDriverComponents.actuatorDriverId, __selfId));
    // After mutation: re-validate against `validateActuatorDriverComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(actuatorDriverComponents).where(eq(actuatorDriverComponents.actuatorDriverId, __selfId)).get();
    // assertNoViolations(validateActuatorDriverComponent(row as never), "engageSafeHalt");
  });
}

export async function clearHalt(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alertActive = true
  // Post-conditions from spec:
  //   post: self.alertActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(actuatorDriverComponents).set({
      alertActive: false,
    }).where(eq(actuatorDriverComponents.actuatorDriverId, __selfId));
    // After mutation: re-validate against `validateActuatorDriverComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(actuatorDriverComponents).where(eq(actuatorDriverComponents.actuatorDriverId, __selfId)).get();
    // assertNoViolations(validateActuatorDriverComponent(row as never), "clearHalt");
  });
}

export async function rejectEarlyCycle(__selfId: string, atMinute: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes
  // Post-conditions from spec:
  //   post: self.actuatorSignal = self.actuatorSignal@pre
  //   post: self.lastTransitionMinute = self.lastTransitionMinute@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(actuatorDriverComponents).set({
      actuatorSignal: sql`${actuatorDriverComponents.actuatorSignal}`,
      lastTransitionMinute: sql`${actuatorDriverComponents.lastTransitionMinute}`,
    }).where(eq(actuatorDriverComponents.actuatorDriverId, __selfId));
    // After mutation: re-validate against `validateActuatorDriverComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(actuatorDriverComponents).where(eq(actuatorDriverComponents.actuatorDriverId, __selfId)).get();
    // assertNoViolations(validateActuatorDriverComponent(row as never), "rejectEarlyCycle");
  });
}

// ─── Events on DisplayComponent ───

export async function refreshDisplay(__selfId: string, tempF: number, setpointF: number, actuatorSig: string, alertActive: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.displayRefreshSeconds > 0.0
  // Post-conditions from spec:
  //   post: self.displayCurrentTempF = tempF
  //   post: self.displaySetpointF = setpointF
  //   post: self.displayActuatorSignal = actuatorSig
  //   post: self.displayAlertActive = alertActive
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayComponents).set({
      displayCurrentTempF: tempF,
      displaySetpointF: setpointF,
      displayActuatorSignal: actuatorSig,
      displayAlertActive: alertActive,
    }).where(eq(displayComponents.displayComponentId, __selfId));
    // After mutation: re-validate against `validateDisplayComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayComponents).where(eq(displayComponents.displayComponentId, __selfId)).get();
    // assertNoViolations(validateDisplayComponent(row as never), "refreshDisplay");
  });
}

export async function showAlert(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.displayAlertActive
  // Post-conditions from spec:
  //   post: self.displayAlertActive = true
  //   post: self.displayActuatorSignal = 'OFF'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayComponents).set({
      displayAlertActive: true,
      displayActuatorSignal: "OFF",
    }).where(eq(displayComponents.displayComponentId, __selfId));
    // After mutation: re-validate against `validateDisplayComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayComponents).where(eq(displayComponents.displayComponentId, __selfId)).get();
    // assertNoViolations(validateDisplayComponent(row as never), "showAlert");
  });
}

export async function clearAlert(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.displayAlertActive = true
  // Post-conditions from spec:
  //   post: self.displayAlertActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(displayComponents).set({
      displayAlertActive: false,
    }).where(eq(displayComponents.displayComponentId, __selfId));
    // After mutation: re-validate against `validateDisplayComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(displayComponents).where(eq(displayComponents.displayComponentId, __selfId)).get();
    // assertNoViolations(validateDisplayComponent(row as never), "clearAlert");
  });
}

// ─── Events on SetpointControllerComponent ───

export async function updateSetpoint(__selfId: string, requestedF: number, sensorOk: boolean, alertActive: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: sensorOk = true
  //   pre: not alertActive
  // Post-conditions from spec:
  //   post: self.requestedSetpointF = requestedF
  //   post: self.clampedSetpointF =
            if requestedF < self.safeMinTempF then self.safeMinTempF
            else if requestedF > self.safeMaxTempF then self.safeMaxTempF
            else requestedF
            endif endif
  //   post: self.clampedSetpointF >= self.safeMinTempF
  //   post: self.clampedSetpointF <= self.safeMaxTempF
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(setpointControllerComponents).set({
      requestedSetpointF: requestedF,
      clampedSetpointF: sql`CASE WHEN ${requestedF} < ${setpointControllerComponents.safeMinTempF} THEN ${setpointControllerComponents.safeMinTempF} ELSE CASE WHEN ${requestedF} > ${setpointControllerComponents.safeMaxTempF} THEN ${setpointControllerComponents.safeMaxTempF} ELSE ${requestedF} END END`,
    }).where(eq(setpointControllerComponents.setpointControllerId, __selfId));
    // After mutation: re-validate against `validateSetpointControllerComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(setpointControllerComponents).where(eq(setpointControllerComponents.setpointControllerId, __selfId)).get();
    // assertNoViolations(validateSetpointControllerComponent(row as never), "updateSetpoint");
  });
}

export async function rejectSetpointWhileHalted(__selfId: string, requestedF: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestedF <> requestedF or self.clampedSetpointF >= self.safeMinTempF
  // Post-conditions from spec:
  //   post: self.clampedSetpointF = self.clampedSetpointF@pre
  //   post: self.requestedSetpointF = self.requestedSetpointF@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(setpointControllerComponents).set({
      clampedSetpointF: sql`${setpointControllerComponents.clampedSetpointF}`,
      requestedSetpointF: sql`${setpointControllerComponents.requestedSetpointF}`,
    }).where(eq(setpointControllerComponents.setpointControllerId, __selfId));
    // After mutation: re-validate against `validateSetpointControllerComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(setpointControllerComponents).where(eq(setpointControllerComponents.setpointControllerId, __selfId)).get();
    // assertNoViolations(validateSetpointControllerComponent(row as never), "rejectSetpointWhileHalted");
  });
}

// ─── Events on SmartThermostatSystem ───

export async function adjustSetpoint(__selfId: string, requestedF: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorPlausible = true
  //   pre: not self.alertActive
  // Post-conditions from spec:
  //   post: self.requestedSetpointF = requestedF
  //   post: self.clampedSetpointF =
            if requestedF < self.safeMinTempF then self.safeMinTempF
            else if requestedF > self.safeMaxTempF then self.safeMaxTempF
            else requestedF
            endif endif
  //   post: self.clampedSetpointF >= self.safeMinTempF
  //   post: self.clampedSetpointF <= self.safeMaxTempF
  //   post: self.displaySetpointF = self.clampedSetpointF
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystems).set({
      requestedSetpointF: requestedF,
      clampedSetpointF: sql`CASE WHEN ${requestedF} < ${smartThermostatSystems.safeMinTempF} THEN ${smartThermostatSystems.safeMinTempF} ELSE CASE WHEN ${requestedF} > ${smartThermostatSystems.safeMaxTempF} THEN ${smartThermostatSystems.safeMaxTempF} ELSE ${requestedF} END END`,
      displaySetpointF: sql`${smartThermostatSystems.clampedSetpointF}`,
    }).where(eq(smartThermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystems).where(eq(smartThermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystem(row as never), "adjustSetpoint");
  });
}

export async function processSensorReading(__selfId: string, readingF: number, atMinute: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec:
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
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystems).set({
      currentMinute: atMinute,
      sensorPlausible: sql`(${readingF} >= ${smartThermostatSystems.plausibleMinF}) AND (${readingF} <= ${smartThermostatSystems.plausibleMaxF})`,
      actuatorSignal: sql`CASE WHEN NOT ((${readingF} >= ${smartThermostatSystems.plausibleMinF}) AND (${readingF} <= ${smartThermostatSystems.plausibleMaxF})) THEN ${"OFF"} ELSE ${smartThermostatSystems.actuatorSignal} END`,
      alertActive: sql`CASE WHEN NOT ((${readingF} >= ${smartThermostatSystems.plausibleMinF}) AND (${readingF} <= ${smartThermostatSystems.plausibleMaxF})) THEN ${true} ELSE ${false} END`,
      currentTempF: sql`CASE WHEN (${readingF} >= ${smartThermostatSystems.plausibleMinF}) AND (${readingF} <= ${smartThermostatSystems.plausibleMaxF}) THEN ${readingF} ELSE ${smartThermostatSystems.currentTempF} END`,
      displayCurrentTempF: sql`${smartThermostatSystems.currentTempF}`,
      displayActuatorSignal: sql`${smartThermostatSystems.actuatorSignal}`,
    }).where(eq(smartThermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystems).where(eq(smartThermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystem(row as never), "processSensorReading");
  });
}

export async function commandActuator(__selfId: string, atMinute: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorPlausible = true
  //   pre: not self.alertActive
  //   pre: atMinute >= self.currentMinute
  //   pre: (atMinute - self.lastTransitionMinute) >= self.minCycleIntervalMinutes
  // Post-conditions from spec:
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
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystems).set({
      actuatorSignal: sql`CASE WHEN ${smartThermostatSystems.currentTempF} < ${smartThermostatSystems.clampedSetpointF} THEN ${"HEAT"} ELSE CASE WHEN ${smartThermostatSystems.currentTempF} > ${smartThermostatSystems.clampedSetpointF} THEN ${"COOL"} ELSE ${"OFF"} END END`,
      lastTransitionMinute: atMinute,
      currentMinute: atMinute,
      displayActuatorSignal: sql`${smartThermostatSystems.actuatorSignal}`,
    }).where(eq(smartThermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystems).where(eq(smartThermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystem(row as never), "commandActuator");
  });
}

export async function rejectCommandDuringSafeHalt(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alertActive = true or self.sensorPlausible = false
  // Post-conditions from spec:
  //   post: self.actuatorSignal = 'OFF'
  //   post: self.alertActive = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystems).set({
      actuatorSignal: "OFF",
      alertActive: true,
    }).where(eq(smartThermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystems).where(eq(smartThermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystem(row as never), "rejectCommandDuringSafeHalt");
  });
}

export async function refreshDisplay(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.displayRefreshSeconds > 0.0
  // Post-conditions from spec:
  //   post: self.displayCurrentTempF = self.currentTempF
  //   post: self.displaySetpointF = self.clampedSetpointF
  //   post: self.displayActuatorSignal = self.actuatorSignal
  //   post: self.displayRefreshSeconds > 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystems).set({
      displayCurrentTempF: sql`${smartThermostatSystems.currentTempF}`,
      displaySetpointF: sql`${smartThermostatSystems.clampedSetpointF}`,
      displayActuatorSignal: sql`${smartThermostatSystems.actuatorSignal}`,
    }).where(eq(smartThermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystems).where(eq(smartThermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystem(row as never), "refreshDisplay");
  });
}

export async function clearSafeHalt(__selfId: string, verifiedReadingF: number, atMinute: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alertActive = true
  //   pre: verifiedReadingF >= self.plausibleMinF
  //   pre: verifiedReadingF <= self.plausibleMaxF
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec:
  //   post: self.sensorPlausible = true
  //   post: self.alertActive = false
  //   post: self.currentTempF = verifiedReadingF
  //   post: self.currentMinute = atMinute
  //   post: self.displayCurrentTempF = verifiedReadingF
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystems).set({
      sensorPlausible: true,
      alertActive: false,
      currentTempF: verifiedReadingF,
      currentMinute: atMinute,
      displayCurrentTempF: verifiedReadingF,
    }).where(eq(smartThermostatSystems.systemId, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystems).where(eq(smartThermostatSystems.systemId, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystem(row as never), "clearSafeHalt");
  });
}

// ─── Events on SmartThermostatSystemFormalized ───

export async function rejectUnsafeActuatorCommand(__selfId: string, requestedSignal: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.clampedSetpointF < self.safeMinTempF
         or self.clampedSetpointF > self.safeMaxTempF
  // Post-conditions from spec:
  //   post: self.actuatorSignal = 'OFF'
  //   post: self.alertActive = true
  //   post: self.displayActuatorSignal = 'OFF'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystemFormalizeds).set({
      actuatorSignal: "OFF",
      alertActive: true,
      displayActuatorSignal: "OFF",
    }).where(eq(smartThermostatSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystemFormalizeds).where(eq(smartThermostatSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystemFormalized(row as never), "rejectUnsafeActuatorCommand");
  });
}

export async function rejectImplausibleReading(__selfId: string, readingF: number, atMinute: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: readingF < self.plausibleMinF or readingF > self.plausibleMaxF
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec:
  //   post: self.actuatorSignal = 'OFF'
  //   post: self.alertActive = true
  //   post: self.sensorPlausible = false
  //   post: self.currentMinute = atMinute
  //   post: self.displayActuatorSignal = 'OFF'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystemFormalizeds).set({
      actuatorSignal: "OFF",
      alertActive: true,
      sensorPlausible: false,
      currentMinute: atMinute,
      displayActuatorSignal: "OFF",
    }).where(eq(smartThermostatSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystemFormalizeds).where(eq(smartThermostatSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystemFormalized(row as never), "rejectImplausibleReading");
  });
}

export async function rejectEarlyCompressorCycle(__selfId: string, atMinute: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: (atMinute - self.lastTransitionMinute) < self.minCycleIntervalMinutes
  // Post-conditions from spec:
  //   post: self.actuatorSignal = self.actuatorSignal@pre
  //   post: self.lastTransitionMinute = self.lastTransitionMinute@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystemFormalizeds).set({
      actuatorSignal: sql`${smartThermostatSystemFormalizeds.actuatorSignal}`,
      lastTransitionMinute: sql`${smartThermostatSystemFormalizeds.lastTransitionMinute}`,
    }).where(eq(smartThermostatSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystemFormalizeds).where(eq(smartThermostatSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystemFormalized(row as never), "rejectEarlyCompressorCycle");
  });
}

export async function rejectSetpointDuringSafeHalt(__selfId: string, requestedF: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.alertActive = true or self.sensorPlausible = false
  // Post-conditions from spec:
  //   post: self.clampedSetpointF = self.clampedSetpointF@pre
  //   post: self.requestedSetpointF = self.requestedSetpointF@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(smartThermostatSystemFormalizeds).set({
      clampedSetpointF: sql`${smartThermostatSystemFormalizeds.clampedSetpointF}`,
      requestedSetpointF: sql`${smartThermostatSystemFormalizeds.requestedSetpointF}`,
    }).where(eq(smartThermostatSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateSmartThermostatSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(smartThermostatSystemFormalizeds).where(eq(smartThermostatSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateSmartThermostatSystemFormalized(row as never), "rejectSetpointDuringSafeHalt");
  });
}

// ─── Events on TemperatureSensorComponent ───

export async function ingestReading(__selfId: string, readingF: number, atMinute: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec:
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
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(temperatureSensorComponents).set({
      currentMinute: atMinute,
      sensorPlausible: sql`(${readingF} >= ${temperatureSensorComponents.plausibleMinF}) AND (${readingF} <= ${temperatureSensorComponents.plausibleMaxF})`,
      currentTempF: sql`CASE WHEN (${readingF} >= ${temperatureSensorComponents.plausibleMinF}) AND (${readingF} <= ${temperatureSensorComponents.plausibleMaxF}) THEN ${readingF} ELSE ${temperatureSensorComponents.currentTempF} END`,
      sensorAlertActive: sql`CASE WHEN NOT ((${readingF} >= ${temperatureSensorComponents.plausibleMinF}) AND (${readingF} <= ${temperatureSensorComponents.plausibleMaxF})) THEN ${true} ELSE ${false} END`,
    }).where(eq(temperatureSensorComponents.sensorComponentId, __selfId));
    // After mutation: re-validate against `validateTemperatureSensorComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(temperatureSensorComponents).where(eq(temperatureSensorComponents.sensorComponentId, __selfId)).get();
    // assertNoViolations(validateTemperatureSensorComponent(row as never), "ingestReading");
  });
}

export async function clearSensorAlert(__selfId: string, verifiedReadingF: number, atMinute: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.sensorAlertActive = true
  //   pre: verifiedReadingF >= self.plausibleMinF
  //   pre: verifiedReadingF <= self.plausibleMaxF
  //   pre: atMinute >= self.currentMinute
  // Post-conditions from spec:
  //   post: self.sensorPlausible = true
  //   post: self.sensorAlertActive = false
  //   post: self.currentTempF = verifiedReadingF
  //   post: self.currentMinute = atMinute
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(temperatureSensorComponents).set({
      sensorPlausible: true,
      sensorAlertActive: false,
      currentTempF: verifiedReadingF,
      currentMinute: atMinute,
    }).where(eq(temperatureSensorComponents.sensorComponentId, __selfId));
    // After mutation: re-validate against `validateTemperatureSensorComponent` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(temperatureSensorComponents).where(eq(temperatureSensorComponents.sensorComponentId, __selfId)).get();
    // assertNoViolations(validateTemperatureSensorComponent(row as never), "clearSensorAlert");
  });
}
