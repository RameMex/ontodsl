// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { batteryManagers, flightControllers, formalizedDroneMissionControllers, geofenceMonitors, missionPlannerInterfaces } from "../db/schema.js";
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

// ─── Events on BatteryManager ───

export async function readSoCAndReserve(__selfId: string): Promise<number> {
  // Post-conditions from spec:
  //   post: result >= 0.0
  //   post: result <= 1.0
  //   post: self.soc = result
  //   post: self.safeReserveRatio >= 0.20
  // TODO: implement mutation logic for 'BatteryManager.readSoCAndReserve'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: readSoCAndReserve");
}

export async function setReserve(__selfId: string, newReserve: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: newReserve >= 0.0
  //   pre: newReserve <= 1.0
  // Post-conditions from spec:
  //   post: self.reserve = newReserve
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(batteryManagers).set({
      reserve: newReserve,
    }).where(eq(batteryManagers.batteryId, __selfId));
    // After mutation: re-validate against `validateBatteryManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(batteryManagers).where(eq(batteryManagers.batteryId, __selfId)).get();
    // assertNoViolations(validateBatteryManager(row as never), "setReserve");
  });
}

export async function checkSoCThreshold(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.soc >= 0.0
  //   pre: self.soc <= 1.0
  // Post-conditions from spec:
  //   post: self.rthBatteryThreshold >= 0.0
  //   post: self.socBelowThreshold = (self.soc <= self.rthBatteryThreshold)
  // TODO: implement mutation logic for 'BatteryManager.checkSoCThreshold'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: checkSoCThreshold");
}

// ─── Events on DroneMissionController ───

export async function authorizeTakeoff(__selfId: string, currentSoC: number, computedReserve: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: currentSoC >= 0.0
  //   pre: currentSoC <= 1.0
  //   pre: computedReserve >= 0.0
  //   pre: computedReserve <= 1.0
  //   pre: not self.isFlying
  //   pre: not self.rthInitiated
  // Post-conditions from spec:
  //   post: self.safeReserveRatio >= 0.20
  //   post: if currentSoC >= computedReserve * (1.0 + self.safeReserveRatio) then
            self.isFlying = true
          else
            self.isFlying = false
          endif
  // TODO: implement mutation logic for 'DroneMissionController.authorizeTakeoff'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: authorizeTakeoff");
}

export async function detectGeofenceViolation(__selfId: string, isInsideGeofence: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFlying = true
  //   pre: not self.geofenceViolationDetected
  // Post-conditions from spec:
  //   post: self.geofenceMaxResponseSec <= 2.0
  //   post: if not isInsideGeofence then
            self.geofenceViolationDetected = true and
            self.rthInitiated = true and
            self.isFlying = false
          else
            self.geofenceViolationDetected = false
          endif
  // TODO: implement mutation logic for 'DroneMissionController.detectGeofenceViolation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: detectGeofenceViolation");
}

export async function monitorBatterySoC(__selfId: string, currentSoC: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFlying = true
  //   pre: not self.rthInitiated
  //   pre: currentSoC >= 0.0
  //   pre: currentSoC <= 1.0
  // Post-conditions from spec:
  //   post: self.rthBatteryThreshold >= 0.0
  //   post: if currentSoC <= self.rthBatteryThreshold then
            self.socBelowThreshold = true and
            self.rthInitiated = true and
            self.isFlying = false
          else
            self.socBelowThreshold = false
          endif
  // TODO: implement mutation logic for 'DroneMissionController.monitorBatterySoC'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: monitorBatterySoC");
}

export async function cancelRTH(__selfId: string, operatorConfirm: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.rthInitiated = true
  //   pre: operatorConfirm = 'confirm_cancel'
  // Post-conditions from spec:
  //   post: not self.rthIsCancellable
  // TODO: implement mutation logic for 'DroneMissionController.cancelRTH'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: cancelRTH");
}

// ─── Events on FlightController ───

export async function initiateRTHFromGeofence(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFlying = true
  //   pre: not self.rthInitiated
  // Post-conditions from spec:
  //   post: self.rthInitiated = true
  //   post: self.isFlying = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(flightControllers).set({
      rthInitiated: true,
      isFlying: false,
    }).where(eq(flightControllers.flightId, __selfId));
    // After mutation: re-validate against `validateFlightController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(flightControllers).where(eq(flightControllers.flightId, __selfId)).get();
    // assertNoViolations(validateFlightController(row as never), "initiateRTHFromGeofence");
  });
}

export async function initiateRTHFromBattery(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFlying = true
  //   pre: not self.rthInitiated
  // Post-conditions from spec:
  //   post: self.rthInitiated = true
  //   post: self.isFlying = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(flightControllers).set({
      rthInitiated: true,
      isFlying: false,
    }).where(eq(flightControllers.flightId, __selfId));
    // After mutation: re-validate against `validateFlightController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(flightControllers).where(eq(flightControllers.flightId, __selfId)).get();
    // assertNoViolations(validateFlightController(row as never), "initiateRTHFromBattery");
  });
}

export async function rejectOperatorCancellation(__selfId: string, operatorConfirm: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.rthInitiated = true
  //   pre: operatorConfirm = 'confirm_cancel'
  // Post-conditions from spec:
  //   post: not self.rthIsCancellable
  //   post: result = true
  // TODO: implement mutation logic for 'FlightController.rejectOperatorCancellation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectOperatorCancellation");
}

export async function executeTakeoff(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isFlying
  //   pre: not self.rthInitiated
  // Post-conditions from spec:
  //   post: self.isFlying = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(flightControllers).set({
      isFlying: true,
    }).where(eq(flightControllers.flightId, __selfId));
    // After mutation: re-validate against `validateFlightController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(flightControllers).where(eq(flightControllers.flightId, __selfId)).get();
    // assertNoViolations(validateFlightController(row as never), "executeTakeoff");
  });
}

// ─── Events on FormalizedDroneMissionController ───

export async function rejectTakeoffDueToBattery(__selfId: string, currentSoC: number, computedReserve: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.isFlying
  //   pre: not self.rthInitiated
  //   pre: currentSoC >= 0.0
  //   pre: currentSoC <= 1.0
  //   pre: computedReserve >= 0.0
  //   pre: computedReserve <= 1.0
  // Post-conditions from spec:
  //   post: result = (currentSoC < computedReserve * (1.0 + self.safeReserveRatio))
  // TODO: implement mutation logic for 'FormalizedDroneMissionController.rejectTakeoffDueToBattery'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectTakeoffDueToBattery");
}

export async function enforceGeofenceContainment(__selfId: string, responseTimeMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFlying = true
  //   pre: self.geofenceViolationDetected = true
  //   pre: not self.rthInitiated
  //   pre: responseTimeMs >= 0
  // Post-conditions from spec:
  //   post: self.geofenceMaxResponseSec <= 2.0
  //   post: self.rthInitiated = true
  //   post: self.isFlying = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(formalizedDroneMissionControllers).set({
      rthInitiated: true,
      isFlying: false,
    }).where(eq(formalizedDroneMissionControllers.id, __selfId));
    // After mutation: re-validate against `validateFormalizedDroneMissionController` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(formalizedDroneMissionControllers).where(eq(formalizedDroneMissionControllers.id, __selfId)).get();
    // assertNoViolations(validateFormalizedDroneMissionController(row as never), "enforceGeofenceContainment");
  });
}

export async function enforceMidMissionBatteryRTH(__selfId: string, currentSoC: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isFlying = true
  //   pre: not self.rthInitiated
  //   pre: currentSoC >= 0.0
  //   pre: currentSoC <= 1.0
  // Post-conditions from spec:
  //   post: self.rthBatteryThreshold >= 0.0
  //   post: if currentSoC <= self.rthBatteryThreshold then
            self.socBelowThreshold = true and
            self.rthInitiated = true and
            self.isFlying = false
          else
            self.socBelowThreshold = false
          endif
  // TODO: implement mutation logic for 'FormalizedDroneMissionController.enforceMidMissionBatteryRTH'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: enforceMidMissionBatteryRTH");
}

export async function rejectSafetyRTHCancellation(__selfId: string, operatorConfirm: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.rthInitiated = true
  //   pre: operatorConfirm = 'confirm_cancel'
  // Post-conditions from spec:
  //   post: not self.rthIsCancellable
  //   post: result = true
  // TODO: implement mutation logic for 'FormalizedDroneMissionController.rejectSafetyRTHCancellation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectSafetyRTHCancellation");
}

// ─── Events on GeofenceMonitor ───

export async function checkPositionInsideGeofence(__selfId: string, lat: number, lon: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: lat >= -90.0
  //   pre: lat <= 90.0
  //   pre: lon >= -180.0
  //   pre: lon <= 180.0
  // Post-conditions from spec:
  //   post: self.currentLatitude = lat
  //   post: self.currentLongitude = lon
  //   post: self.geofenceMaxResponseSec <= 2.0
  //   post: result = (lat >= 60.0 and lat <= 62.0 and lon >= 24.0 and lon <= 26.0)
  //   post: if not result then
            self.geofenceAuthorized = false and
            self.geofenceViolationDetected = true
          else
            self.geofenceAuthorized = true and
            self.geofenceViolationDetected = false
          endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(geofenceMonitors).set({
      currentLatitude: lat,
      currentLongitude: lon,
    }).where(eq(geofenceMonitors.monitorId, __selfId));
    // After mutation: re-validate against `validateGeofenceMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(geofenceMonitors).where(eq(geofenceMonitors.monitorId, __selfId)).get();
    // assertNoViolations(validateGeofenceMonitor(row as never), "checkPositionInsideGeofence");
  });
}

// ─── Events on MissionPlannerInterface ───

export async function submitDeliveryRequest(__selfId: string, mNum: string, destLat: number, destLon: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: mNum <> null
  //   pre: destLat >= -90.0
  //   pre: destLat <= 90.0
  //   pre: destLon >= -180.0
  //   pre: destLon <= 180.0
  // Post-conditions from spec:
  //   post: self.missionId = mNum
  //   post: self.destinationLatitude = destLat
  //   post: self.destinationLongitude = destLon
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(missionPlannerInterfaces).set({
      missionId: mNum,
      destinationLatitude: destLat,
      destinationLongitude: destLon,
    }).where(eq(missionPlannerInterfaces.plannerId, __selfId));
    // After mutation: re-validate against `validateMissionPlannerInterface` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(missionPlannerInterfaces).where(eq(missionPlannerInterfaces.plannerId, __selfId)).get();
    // assertNoViolations(validateMissionPlannerInterface(row as never), "submitDeliveryRequest");
  });
}

export async function computeReserveForMission(__selfId: string, distKm: number): Promise<number> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: distKm >= 0.0
  // Post-conditions from spec:
  //   post: self.computedRoundTripReserve = (distKm * 0.01)
  //   post: result = self.computedRoundTripReserve
  //   post: result >= 0.0
  //   post: result <= 1.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(missionPlannerInterfaces).set({
      computedRoundTripReserve: sql`${distKm} * ${0.01}`,
    }).where(eq(missionPlannerInterfaces.plannerId, __selfId));
    // After mutation: re-validate against `validateMissionPlannerInterface` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(missionPlannerInterfaces).where(eq(missionPlannerInterfaces.plannerId, __selfId)).get();
    // assertNoViolations(validateMissionPlannerInterface(row as never), "computeReserveForMission");
  });
}
