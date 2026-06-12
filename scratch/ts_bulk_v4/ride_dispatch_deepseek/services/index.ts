// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { dispatchEngines, driverApps, driverStateManagers, geoSpatialIndexes, latencyMonitors, offerServices, passengerApps, rideDispatchSystemFormalizeds, rideDispatchSystems, rideRegistries } from "../db/schema.js";
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

// ─── Events on DispatchEngine ───

export async function handleRideRequest(__selfId: string, requestId: string, pickupLat: number, pickupLng: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: not self.isProcessing
  // Post-conditions from spec:
  //   post: self.requestId = requestId
  //   post: self.currentSearchRadiusKm = 2.0
  //   post: self.offerAttempts = 0
  //   post: self.isProcessing = true
  //   post: self.timeSinceRequestMs = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dispatchEngines).set({
      requestId: requestId,
      currentSearchRadiusKm: 2,
      offerAttempts: 0,
      isProcessing: true,
      timeSinceRequestMs: 0,
    }).where(eq(dispatchEngines.engineId, __selfId));
    // After mutation: re-validate against `validateDispatchEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dispatchEngines).where(eq(dispatchEngines.engineId, __selfId)).get();
    // assertNoViolations(validateDispatchEngine(row as never), "handleRideRequest");
  });
}

export async function rankAndOffer(__selfId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isProcessing
  //   pre: self.offerAttempts < 10
  // Post-conditions from spec:
  //   post: self.offerAttempts = self.offerAttempts@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dispatchEngines).set({
      offerAttempts: sql`${dispatchEngines.offerAttempts} + ${1}`,
    }).where(eq(dispatchEngines.engineId, __selfId));
    // After mutation: re-validate against `validateDispatchEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dispatchEngines).where(eq(dispatchEngines.engineId, __selfId)).get();
    // assertNoViolations(validateDispatchEngine(row as never), "rankAndOffer");
  });
}

export async function onOfferAccepted(__selfId: string, driverId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  //   pre: self.isProcessing
  // Post-conditions from spec:
  //   post: self.isProcessing = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dispatchEngines).set({
      isProcessing: false,
    }).where(eq(dispatchEngines.engineId, __selfId));
    // After mutation: re-validate against `validateDispatchEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dispatchEngines).where(eq(dispatchEngines.engineId, __selfId)).get();
    // assertNoViolations(validateDispatchEngine(row as never), "onOfferAccepted");
  });
}

export async function onOfferExpired(__selfId: string, driverId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  //   pre: self.isProcessing
  // Post-conditions from spec:
  //   post: self.offerAttempts = self.offerAttempts@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dispatchEngines).set({
      offerAttempts: sql`${dispatchEngines.offerAttempts} + ${1}`,
    }).where(eq(dispatchEngines.engineId, __selfId));
    // After mutation: re-validate against `validateDispatchEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dispatchEngines).where(eq(dispatchEngines.engineId, __selfId)).get();
    // assertNoViolations(validateDispatchEngine(row as never), "onOfferExpired");
  });
}

export async function escalateRadius(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isProcessing
  //   pre: self.currentSearchRadiusKm = 2.0
  //   pre: self.timeSinceRequestMs > 30000
  // Post-conditions from spec:
  //   post: self.currentSearchRadiusKm = 5.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dispatchEngines).set({
      currentSearchRadiusKm: 5,
    }).where(eq(dispatchEngines.engineId, __selfId));
    // After mutation: re-validate against `validateDispatchEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dispatchEngines).where(eq(dispatchEngines.engineId, __selfId)).get();
    // assertNoViolations(validateDispatchEngine(row as never), "escalateRadius");
  });
}

export async function cancelMatching(__selfId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isProcessing
  //   pre: requestId = self.requestId
  // Post-conditions from spec:
  //   post: self.isProcessing = false
  //   post: self.requestId = ''
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dispatchEngines).set({
      isProcessing: false,
      requestId: "",
    }).where(eq(dispatchEngines.engineId, __selfId));
    // After mutation: re-validate against `validateDispatchEngine` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dispatchEngines).where(eq(dispatchEngines.engineId, __selfId)).get();
    // assertNoViolations(validateDispatchEngine(row as never), "cancelMatching");
  });
}

// ─── Events on DriverApp ───

export async function updatePosition(__selfId: string, lat: number, lng: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: lat >= -90.0
  //   pre: lat <= 90.0
  //   pre: lng >= -180.0
  //   pre: lng <= 180.0
  // Post-conditions from spec:
  //   post: self.currentLatitude = lat
  //   post: self.currentLongitude = lng
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverApps).set({
      currentLatitude: lat,
      currentLongitude: lng,
    }).where(eq(driverApps.driverAppId, __selfId));
    // After mutation: re-validate against `validateDriverApp` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverApps).where(eq(driverApps.driverAppId, __selfId)).get();
    // assertNoViolations(validateDriverApp(row as never), "updatePosition");
  });
}

export async function acceptOffer(__selfId: string, offerId: string, rideId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: offerId <> null
  //   pre: rideId <> null
  //   pre: self.state = 'idle'
  //   pre: self.pendingOfferId = offerId
  // Post-conditions from spec:
  //   post: self.state = 'assigned'
  //   post: self.pendingOfferId = ''
  //   post: self.pendingOfferRideId = rideId
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverApps).set({
      state: "assigned",
      pendingOfferId: "",
      pendingOfferRideId: rideId,
    }).where(eq(driverApps.driverAppId, __selfId));
    // After mutation: re-validate against `validateDriverApp` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverApps).where(eq(driverApps.driverAppId, __selfId)).get();
    // assertNoViolations(validateDriverApp(row as never), "acceptOffer");
  });
}

export async function declineOffer(__selfId: string, offerId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: offerId <> null
  //   pre: self.state = 'idle'
  //   pre: self.pendingOfferId = offerId
  // Post-conditions from spec:
  //   post: self.pendingOfferId = ''
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverApps).set({
      pendingOfferId: "",
    }).where(eq(driverApps.driverAppId, __selfId));
    // After mutation: re-validate against `validateDriverApp` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverApps).where(eq(driverApps.driverAppId, __selfId)).get();
    // assertNoViolations(validateDriverApp(row as never), "declineOffer");
  });
}

export async function beginRide(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.state = 'assigned'
  // Post-conditions from spec:
  //   post: self.state = 'en_route'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverApps).set({
      state: "en_route",
    }).where(eq(driverApps.driverAppId, __selfId));
    // After mutation: re-validate against `validateDriverApp` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverApps).where(eq(driverApps.driverAppId, __selfId)).get();
    // assertNoViolations(validateDriverApp(row as never), "beginRide");
  });
}

export async function completeRide(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.state = 'en_route'
  // Post-conditions from spec:
  //   post: self.state = 'completed'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverApps).set({
      state: "completed",
    }).where(eq(driverApps.driverAppId, __selfId));
    // After mutation: re-validate against `validateDriverApp` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverApps).where(eq(driverApps.driverAppId, __selfId)).get();
    // assertNoViolations(validateDriverApp(row as never), "completeRide");
  });
}

export async function returnToIdle(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.state = 'completed'
  // Post-conditions from spec:
  //   post: self.state = 'idle'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverApps).set({
      state: "idle",
    }).where(eq(driverApps.driverAppId, __selfId));
    // After mutation: re-validate against `validateDriverApp` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverApps).where(eq(driverApps.driverAppId, __selfId)).get();
    // assertNoViolations(validateDriverApp(row as never), "returnToIdle");
  });
}

// ─── Events on DriverStateManager ───

export async function transitionToAssigned(__selfId: string, driverId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: self.driverLock = 0
  //   pre: self.idleDriverCount > 0
  // Post-conditions from spec:
  //   post: self.driverLock = 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverStateManagers).set({
      driverLock: 1,
    }).where(eq(driverStateManagers.driverStateId, __selfId));
    // After mutation: re-validate against `validateDriverStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverStateManagers).where(eq(driverStateManagers.driverStateId, __selfId)).get();
    // assertNoViolations(validateDriverStateManager(row as never), "transitionToAssigned");
  });
}

export async function confirmAssigned(__selfId: string, driverId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: self.driverLock = 1
  // Post-conditions from spec:
  //   post: self.idleDriverCount = self.idleDriverCount@pre - 1
  //   post: self.assignedDriverCount = self.assignedDriverCount@pre + 1
  //   post: self.driverLock = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverStateManagers).set({
      idleDriverCount: sql`${driverStateManagers.idleDriverCount} - ${1}`,
      assignedDriverCount: sql`${driverStateManagers.assignedDriverCount} + ${1}`,
      driverLock: 0,
    }).where(eq(driverStateManagers.driverStateId, __selfId));
    // After mutation: re-validate against `validateDriverStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverStateManagers).where(eq(driverStateManagers.driverStateId, __selfId)).get();
    // assertNoViolations(validateDriverStateManager(row as never), "confirmAssigned");
  });
}

export async function transitionToEnRoute(__selfId: string, driverId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: self.assignedDriverCount > 0
  // Post-conditions from spec:
  //   post: self.assignedDriverCount = self.assignedDriverCount@pre - 1
  //   post: self.enRouteDriverCount = self.enRouteDriverCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverStateManagers).set({
      assignedDriverCount: sql`${driverStateManagers.assignedDriverCount} - ${1}`,
      enRouteDriverCount: sql`${driverStateManagers.enRouteDriverCount} + ${1}`,
    }).where(eq(driverStateManagers.driverStateId, __selfId));
    // After mutation: re-validate against `validateDriverStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverStateManagers).where(eq(driverStateManagers.driverStateId, __selfId)).get();
    // assertNoViolations(validateDriverStateManager(row as never), "transitionToEnRoute");
  });
}

export async function transitionToCompleted(__selfId: string, driverId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: self.enRouteDriverCount > 0
  // Post-conditions from spec:
  //   post: self.enRouteDriverCount = self.enRouteDriverCount@pre - 1
  //   post: self.completedDriverCount = self.completedDriverCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverStateManagers).set({
      enRouteDriverCount: sql`${driverStateManagers.enRouteDriverCount} - ${1}`,
      completedDriverCount: sql`${driverStateManagers.completedDriverCount} + ${1}`,
    }).where(eq(driverStateManagers.driverStateId, __selfId));
    // After mutation: re-validate against `validateDriverStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverStateManagers).where(eq(driverStateManagers.driverStateId, __selfId)).get();
    // assertNoViolations(validateDriverStateManager(row as never), "transitionToCompleted");
  });
}

export async function returnToIdlePool(__selfId: string, driverId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: self.completedDriverCount > 0
  // Post-conditions from spec:
  //   post: self.completedDriverCount = self.completedDriverCount@pre - 1
  //   post: self.idleDriverCount = self.idleDriverCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverStateManagers).set({
      completedDriverCount: sql`${driverStateManagers.completedDriverCount} - ${1}`,
      idleDriverCount: sql`${driverStateManagers.idleDriverCount} + ${1}`,
    }).where(eq(driverStateManagers.driverStateId, __selfId));
    // After mutation: re-validate against `validateDriverStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverStateManagers).where(eq(driverStateManagers.driverStateId, __selfId)).get();
    // assertNoViolations(validateDriverStateManager(row as never), "returnToIdlePool");
  });
}

export async function acquireLock(__selfId: string, driverId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  //   pre: self.driverLock = 0
  // Post-conditions from spec:
  //   post: self.driverLock = 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverStateManagers).set({
      driverLock: 1,
    }).where(eq(driverStateManagers.driverStateId, __selfId));
    // After mutation: re-validate against `validateDriverStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverStateManagers).where(eq(driverStateManagers.driverStateId, __selfId)).get();
    // assertNoViolations(validateDriverStateManager(row as never), "acquireLock");
  });
}

export async function releaseLock(__selfId: string, driverId: string, requestId: string, wasSuccessful: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  //   pre: self.driverLock = 1
  // Post-conditions from spec:
  //   post: self.driverLock = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(driverStateManagers).set({
      driverLock: 0,
    }).where(eq(driverStateManagers.driverStateId, __selfId));
    // After mutation: re-validate against `validateDriverStateManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(driverStateManagers).where(eq(driverStateManagers.driverStateId, __selfId)).get();
    // assertNoViolations(validateDriverStateManager(row as never), "releaseLock");
  });
}

export async function rejectDoubleAssignment(__selfId: string, driverId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  //   pre: self.assignedDriverCount > 0 or self.enRouteDriverCount > 0
  // TODO: implement mutation logic for 'DriverStateManager.rejectDoubleAssignment'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectDoubleAssignment");
}

export async function rejectStateSkip(__selfId: string, driverId: string, fromState: string, toState: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: fromState <> null
  //   pre: toState <> null
  //   pre: (fromState = 'idle' and toState = 'en_route') or
         (fromState = 'idle' and toState = 'completed') or
         (fromState = 'assigned' and toState = 'completed') or
         (fromState = 'en_route' and toState = 'idle') or
         (fromState = 'en_route' and toState = 'assigned') or
         (fromState = 'completed' and toState = 'en_route') or
         (fromState = 'completed' and toState = 'assigned')
  // TODO: implement mutation logic for 'DriverStateManager.rejectStateSkip'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectStateSkip");
}

// ─── Events on GeoSpatialIndex ───

export async function indexDriver(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.driverCount = self.driverCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(geoSpatialIndexes).set({
      driverCount: sql`${geoSpatialIndexes.driverCount} + ${1}`,
    }).where(eq(geoSpatialIndexes.geoId, __selfId));
    // After mutation: re-validate against `validateGeoSpatialIndex` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(geoSpatialIndexes).where(eq(geoSpatialIndexes.geoId, __selfId)).get();
    // assertNoViolations(validateGeoSpatialIndex(row as never), "indexDriver");
  });
}

export async function queryNearbyDrivers(__selfId: string, centerLat: number, centerLng: number, radiusKm: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: centerLat >= -90.0
  //   pre: centerLat <= 90.0
  //   pre: centerLng >= -180.0
  //   pre: centerLng <= 180.0
  //   pre: radiusKm > 0.0
  //   pre: radiusKm = 2.0 or radiusKm = 5.0
  // Post-conditions from spec:
  //   post: self.centerLatitude = centerLat
  //   post: self.centerLongitude = centerLng
  //   post: self.currentSearchRadiusKm = radiusKm
  //   post: self.lastQueryResultCount = self.driverCount
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(geoSpatialIndexes).set({
      centerLatitude: centerLat,
      centerLongitude: centerLng,
      currentSearchRadiusKm: radiusKm,
      lastQueryResultCount: sql`${geoSpatialIndexes.driverCount}`,
    }).where(eq(geoSpatialIndexes.geoId, __selfId));
    // After mutation: re-validate against `validateGeoSpatialIndex` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(geoSpatialIndexes).where(eq(geoSpatialIndexes.geoId, __selfId)).get();
    // assertNoViolations(validateGeoSpatialIndex(row as never), "queryNearbyDrivers");
  });
}

// ─── Events on LatencyMonitor ───

export async function startMonitoring(__selfId: string, requestId: string, startTimeMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: startTimeMs >= 0
  // Post-conditions from spec:
  //   post: self.requestStartTimeMs = startTimeMs
  //   post: self.firstOfferTimeMs = 0
  //   post: self.currentLatencyMs = 0
  //   post: self.latencyBudgetExceeded = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(latencyMonitors).set({
      requestStartTimeMs: startTimeMs,
      firstOfferTimeMs: 0,
      currentLatencyMs: 0,
      latencyBudgetExceeded: false,
    }).where(eq(latencyMonitors.latencyMonitorId, __selfId));
    // After mutation: re-validate against `validateLatencyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(latencyMonitors).where(eq(latencyMonitors.latencyMonitorId, __selfId)).get();
    // assertNoViolations(validateLatencyMonitor(row as never), "startMonitoring");
  });
}

export async function recordFirstOffer(__selfId: string, currentTimeMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: currentTimeMs >= self.requestStartTimeMs
  // Post-conditions from spec:
  //   post: self.firstOfferTimeMs = currentTimeMs
  //   post: self.currentLatencyMs = currentTimeMs - self.requestStartTimeMs
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(latencyMonitors).set({
      firstOfferTimeMs: currentTimeMs,
      currentLatencyMs: sql`${currentTimeMs} - ${latencyMonitors.requestStartTimeMs}`,
    }).where(eq(latencyMonitors.latencyMonitorId, __selfId));
    // After mutation: re-validate against `validateLatencyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(latencyMonitors).where(eq(latencyMonitors.latencyMonitorId, __selfId)).get();
    // assertNoViolations(validateLatencyMonitor(row as never), "recordFirstOffer");
  });
}

export async function checkLatency(__selfId: string, currentTimeMs: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: currentTimeMs >= 0
  // Post-conditions from spec:
  //   post: self.currentLatencyMs = currentTimeMs - self.requestStartTimeMs
  //   post: if (currentTimeMs - self.requestStartTimeMs) > self.maxLatencyBudgetMs then self.latencyBudgetExceeded = true else self.latencyBudgetExceeded = false endif
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(latencyMonitors).set({
      currentLatencyMs: sql`${currentTimeMs} - ${latencyMonitors.requestStartTimeMs}`,
      latencyBudgetExceeded: sql`CASE WHEN ${currentTimeMs} - ${latencyMonitors.requestStartTimeMs} > ${latencyMonitors.maxLatencyBudgetMs} THEN ${true} ELSE ${false} END`,
    }).where(eq(latencyMonitors.latencyMonitorId, __selfId));
    // After mutation: re-validate against `validateLatencyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(latencyMonitors).where(eq(latencyMonitors.latencyMonitorId, __selfId)).get();
    // assertNoViolations(validateLatencyMonitor(row as never), "checkLatency");
  });
}

export async function resetMonitor(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.requestStartTimeMs = 0
  //   post: self.firstOfferTimeMs = 0
  //   post: self.currentLatencyMs = 0
  //   post: self.latencyBudgetExceeded = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(latencyMonitors).set({
      requestStartTimeMs: 0,
      firstOfferTimeMs: 0,
      currentLatencyMs: 0,
      latencyBudgetExceeded: false,
    }).where(eq(latencyMonitors.latencyMonitorId, __selfId));
    // After mutation: re-validate against `validateLatencyMonitor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(latencyMonitors).where(eq(latencyMonitors.latencyMonitorId, __selfId)).get();
    // assertNoViolations(validateLatencyMonitor(row as never), "resetMonitor");
  });
}

// ─── Events on OfferService ───

export async function createOffer(__selfId: string, driverId: string, requestId: string, rideDesc: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  // Post-conditions from spec:
  //   post: self.activeOfferCount = self.activeOfferCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(offerServices).set({
      activeOfferCount: sql`${offerServices.activeOfferCount} + ${1}`,
    }).where(eq(offerServices.offerServiceId, __selfId));
    // After mutation: re-validate against `validateOfferService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(offerServices).where(eq(offerServices.offerServiceId, __selfId)).get();
    // assertNoViolations(validateOfferService(row as never), "createOffer");
  });
}

export async function acceptOffer(__selfId: string, offerId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: offerId <> null
  //   pre: self.activeOfferCount > 0
  // Post-conditions from spec:
  //   post: self.activeOfferCount = self.activeOfferCount@pre - 1
  //   post: self.acceptedOfferCount = self.acceptedOfferCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(offerServices).set({
      activeOfferCount: sql`${offerServices.activeOfferCount} - ${1}`,
      acceptedOfferCount: sql`${offerServices.acceptedOfferCount} + ${1}`,
    }).where(eq(offerServices.offerServiceId, __selfId));
    // After mutation: re-validate against `validateOfferService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(offerServices).where(eq(offerServices.offerServiceId, __selfId)).get();
    // assertNoViolations(validateOfferService(row as never), "acceptOffer");
  });
}

export async function expireOffer(__selfId: string, offerId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: offerId <> null
  //   pre: self.activeOfferCount > 0
  // Post-conditions from spec:
  //   post: self.activeOfferCount = self.activeOfferCount@pre - 1
  //   post: self.expiredOfferCount = self.expiredOfferCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(offerServices).set({
      activeOfferCount: sql`${offerServices.activeOfferCount} - ${1}`,
      expiredOfferCount: sql`${offerServices.expiredOfferCount} + ${1}`,
    }).where(eq(offerServices.offerServiceId, __selfId));
    // After mutation: re-validate against `validateOfferService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(offerServices).where(eq(offerServices.offerServiceId, __selfId)).get();
    // assertNoViolations(validateOfferService(row as never), "expireOffer");
  });
}

export async function rejectExcessiveLatency(__selfId: string, timeSinceRequest: number, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timeSinceRequest > 30.0
  //   pre: requestId <> null
  // TODO: implement mutation logic for 'OfferService.rejectExcessiveLatency'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectExcessiveLatency");
}

// ─── Events on PassengerApp ───

export async function submitRideRequest(__selfId: string, pickupLat: number, pickupLng: number, destLat: number, destLng: number, preferences: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.rideRequestSubmitted
  //   pre: pickupLat >= -90.0
  //   pre: pickupLat <= 90.0
  //   pre: pickupLng >= -180.0
  //   pre: pickupLng <= 180.0
  //   pre: destLat >= -90.0
  //   pre: destLat <= 90.0
  //   pre: destLng >= -180.0
  //   pre: destLng <= 180.0
  // Post-conditions from spec:
  //   post: self.rideRequestSubmitted = true
  //   post: self.requestPickupLatitude = pickupLat
  //   post: self.requestPickupLongitude = pickupLng
  //   post: self.requestDestinationLatitude = destLat
  //   post: self.requestDestinationLongitude = destLng
  //   post: self.requestPreferences = preferences
  //   post: self.currentStatus = 'submitted'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(passengerApps).set({
      rideRequestSubmitted: true,
      requestPickupLatitude: pickupLat,
      requestPickupLongitude: pickupLng,
      requestDestinationLatitude: destLat,
      requestDestinationLongitude: destLng,
      requestPreferences: preferences,
      currentStatus: "submitted",
    }).where(eq(passengerApps.passengerAppId, __selfId));
    // After mutation: re-validate against `validatePassengerApp` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(passengerApps).where(eq(passengerApps.passengerAppId, __selfId)).get();
    // assertNoViolations(validatePassengerApp(row as never), "submitRideRequest");
  });
}

export async function notifyMatchingComplete(__selfId: string, assignedDriverId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentStatus = 'matching'
  //   pre: assignedDriverId <> null
  // Post-conditions from spec:
  //   post: self.currentStatus = 'matched'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(passengerApps).set({
      currentStatus: "matched",
    }).where(eq(passengerApps.passengerAppId, __selfId));
    // After mutation: re-validate against `validatePassengerApp` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(passengerApps).where(eq(passengerApps.passengerAppId, __selfId)).get();
    // assertNoViolations(validatePassengerApp(row as never), "notifyMatchingComplete");
  });
}

export async function notifyRideCompleted(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentStatus = 'matched'
  // Post-conditions from spec:
  //   post: self.currentStatus = 'completed'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(passengerApps).set({
      currentStatus: "completed",
    }).where(eq(passengerApps.passengerAppId, __selfId));
    // After mutation: re-validate against `validatePassengerApp` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(passengerApps).where(eq(passengerApps.passengerAppId, __selfId)).get();
    // assertNoViolations(validatePassengerApp(row as never), "notifyRideCompleted");
  });
}

// ─── Events on RideDispatchSystem ───

export async function assignDriver(__selfId: string, requestId: string, driverId: string): Promise<string> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  //   pre: self.assignmentsPerRide = 0
  //   pre: self.idleDrivers > 0
  // Post-conditions from spec:
  //   post: self.assignmentsPerRide = 1
  //   post: self.assignedDrivers = self.assignedDrivers@pre + 1
  //   post: self.idleDrivers = self.idleDrivers@pre - 1
  //   post: self.activeRides = self.activeRides@pre + 1
  //   post: self.offersAccepted = self.offersAccepted@pre + 1
  //   post: self.driverMutualExclusionHolds = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystems).set({
      assignmentsPerRide: 1,
      assignedDrivers: sql`${rideDispatchSystems.assignedDrivers} + ${1}`,
      idleDrivers: sql`${rideDispatchSystems.idleDrivers} - ${1}`,
      activeRides: sql`${rideDispatchSystems.activeRides} + ${1}`,
      offersAccepted: sql`${rideDispatchSystems.offersAccepted} + ${1}`,
      driverMutualExclusionHolds: true,
    }).where(eq(rideDispatchSystems.systemId, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystems).where(eq(rideDispatchSystems.systemId, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystem(row as never), "assignDriver");
  });
}

export async function driverEnRoute(__selfId: string, driverId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: self.assignedDrivers > 0
  // Post-conditions from spec:
  //   post: self.assignedDrivers = self.assignedDrivers@pre - 1
  //   post: self.enRouteDrivers = self.enRouteDrivers@pre + 1
  //   post: self.driverStateTransitionValid = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystems).set({
      assignedDrivers: sql`${rideDispatchSystems.assignedDrivers} - ${1}`,
      enRouteDrivers: sql`${rideDispatchSystems.enRouteDrivers} + ${1}`,
      driverStateTransitionValid: true,
    }).where(eq(rideDispatchSystems.systemId, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystems).where(eq(rideDispatchSystems.systemId, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystem(row as never), "driverEnRoute");
  });
}

export async function completeRide(__selfId: string, driverId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: self.enRouteDrivers > 0
  // Post-conditions from spec:
  //   post: self.enRouteDrivers = self.enRouteDrivers@pre - 1
  //   post: self.completedRides = self.completedRides@pre + 1
  //   post: self.activeRides = self.activeRides@pre - 1
  //   post: self.driverStateTransitionValid = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystems).set({
      enRouteDrivers: sql`${rideDispatchSystems.enRouteDrivers} - ${1}`,
      completedRides: sql`${rideDispatchSystems.completedRides} + ${1}`,
      activeRides: sql`${rideDispatchSystems.activeRides} - ${1}`,
      driverStateTransitionValid: true,
    }).where(eq(rideDispatchSystems.systemId, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystems).where(eq(rideDispatchSystems.systemId, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystem(row as never), "completeRide");
  });
}

export async function attemptFirstOffer(__selfId: string, timeSinceRequest: number, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timeSinceRequest >= 0.0
  //   pre: timeSinceRequest <= 30.0
  //   pre: requestId <> null
  //   pre: self.offersMade = 0
  // Post-conditions from spec:
  //   post: self.offersMade = self.offersMade@pre + 1
  //   post: self.maxAssignmentLatencySec = timeSinceRequest
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystems).set({
      offersMade: sql`${rideDispatchSystems.offersMade} + ${1}`,
      maxAssignmentLatencySec: timeSinceRequest,
    }).where(eq(rideDispatchSystems.systemId, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystems).where(eq(rideDispatchSystems.systemId, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystem(row as never), "attemptFirstOffer");
  });
}

export async function expireOffer(__selfId: string, driverId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  // Post-conditions from spec:
  //   post: self.offersExpired = self.offersExpired@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystems).set({
      offersExpired: sql`${rideDispatchSystems.offersExpired} + ${1}`,
    }).where(eq(rideDispatchSystems.systemId, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystems).where(eq(rideDispatchSystems.systemId, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystem(row as never), "expireOffer");
  });
}

export async function escalateRadius(__selfId: string, timeSinceRequest: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timeSinceRequest > 30.0
  //   pre: timeSinceRequest <= 60.0
  // TODO: implement mutation logic for 'RideDispatchSystem.escalateRadius'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: escalateRadius");
}

export async function returnToIdle(__selfId: string, driverId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: self.completedRides > 0
  // Post-conditions from spec:
  //   post: self.completedRides = self.completedRides@pre - 1
  //   post: self.idleDrivers = self.idleDrivers@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystems).set({
      completedRides: sql`${rideDispatchSystems.completedRides} - ${1}`,
      idleDrivers: sql`${rideDispatchSystems.idleDrivers} + ${1}`,
    }).where(eq(rideDispatchSystems.systemId, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystems).where(eq(rideDispatchSystems.systemId, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystem(row as never), "returnToIdle");
  });
}

// ─── Events on RideDispatchSystemFormalized ───

export async function rejectDoubleAssignment(__selfId: string, driverId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  //   pre: self.driverMutualExclusionHolds = false
  // Post-conditions from spec:
  //   post: self.driverMutualExclusionHolds = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystemFormalizeds).set({
      driverMutualExclusionHolds: false,
    }).where(eq(rideDispatchSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystemFormalizeds).where(eq(rideDispatchSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystemFormalized(row as never), "rejectDoubleAssignment");
  });
}

export async function rejectStateSkip(__selfId: string, driverId: string, fromState: string, toState: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: fromState <> null
  //   pre: toState <> null
  //   pre: (fromState = 'idle' and toState = 'en_route') or
         (fromState = 'idle' and toState = 'completed') or
         (fromState = 'assigned' and toState = 'completed') or
         (fromState = 'en_route' and toState = 'idle') or
         (fromState = 'en_route' and toState = 'assigned') or
         (fromState = 'completed' and toState = 'en_route') or
         (fromState = 'completed' and toState = 'assigned')
  // Post-conditions from spec:
  //   post: self.driverStateTransitionValid = self.driverStateTransitionValid@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystemFormalizeds).set({
      driverStateTransitionValid: sql`${rideDispatchSystemFormalizeds.driverStateTransitionValid}`,
    }).where(eq(rideDispatchSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystemFormalizeds).where(eq(rideDispatchSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystemFormalized(row as never), "rejectStateSkip");
  });
}

export async function rejectExcessiveLatency(__selfId: string, timeSinceRequest: number, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: timeSinceRequest > 30.0
  //   pre: requestId <> null
  // Post-conditions from spec:
  //   post: self.maxAssignmentLatencySec = timeSinceRequest
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystemFormalizeds).set({
      maxAssignmentLatencySec: timeSinceRequest,
    }).where(eq(rideDispatchSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystemFormalizeds).where(eq(rideDispatchSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystemFormalized(row as never), "rejectExcessiveLatency");
  });
}

export async function acquireDriverLock(__selfId: string, driverId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  //   pre: self.driverLock = 0
  // Post-conditions from spec:
  //   post: self.driverLock = 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystemFormalizeds).set({
      driverLock: 1,
    }).where(eq(rideDispatchSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystemFormalizeds).where(eq(rideDispatchSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystemFormalized(row as never), "acquireDriverLock");
  });
}

export async function releaseDriverLock(__selfId: string, driverId: string, requestId: string, wasSuccessful: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: driverId <> null
  //   pre: requestId <> null
  //   pre: self.driverLock = 1
  // Post-conditions from spec:
  //   post: self.driverLock = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideDispatchSystemFormalizeds).set({
      driverLock: 0,
    }).where(eq(rideDispatchSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateRideDispatchSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideDispatchSystemFormalizeds).where(eq(rideDispatchSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateRideDispatchSystemFormalized(row as never), "releaseDriverLock");
  });
}

export async function logComplianceViolation(__selfId: string, violationCode: string, detail: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: violationCode <> null
  //   pre: detail <> null
  //   pre: self.lawfulBasis <> null
  //   pre: self.pciScope <> null
  //   pre: self.dataRetentionDays > 0
  // Post-conditions from spec:
  //   post: self.lawfulBasis <> null
  // TODO: implement mutation logic for 'RideDispatchSystemFormalized.logComplianceViolation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: logComplianceViolation");
}

// ─── Events on RideRegistry ───

export async function storeRideRequest(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.rideRequestCount = self.rideRequestCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideRegistries).set({
      rideRequestCount: sql`${rideRegistries.rideRequestCount} + ${1}`,
    }).where(eq(rideRegistries.registryId, __selfId));
    // After mutation: re-validate against `validateRideRegistry` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideRegistries).where(eq(rideRegistries.registryId, __selfId)).get();
    // assertNoViolations(validateRideRegistry(row as never), "storeRideRequest");
  });
}

export async function createAssignment(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.assignmentCount = self.assignmentCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideRegistries).set({
      assignmentCount: sql`${rideRegistries.assignmentCount} + ${1}`,
    }).where(eq(rideRegistries.registryId, __selfId));
    // After mutation: re-validate against `validateRideRegistry` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideRegistries).where(eq(rideRegistries.registryId, __selfId)).get();
    // assertNoViolations(validateRideRegistry(row as never), "createAssignment");
  });
}

export async function completeRide(__selfId: string, requestId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: self.completedRideCount < self.rideRequestCount
  // Post-conditions from spec:
  //   post: self.completedRideCount = self.completedRideCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(rideRegistries).set({
      completedRideCount: sql`${rideRegistries.completedRideCount} + ${1}`,
    }).where(eq(rideRegistries.registryId, __selfId));
    // After mutation: re-validate against `validateRideRegistry` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(rideRegistries).where(eq(rideRegistries.registryId, __selfId)).get();
    // assertNoViolations(validateRideRegistry(row as never), "completeRide");
  });
}
