// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Server routes — one POST per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { z } from "zod";
import * as service from "../services/index.js";
import { InvariantViolation } from "../services/index.js";

type Handler = (body: unknown) => Promise<unknown>;

export const routes: Record<string, Handler> = {
  "POST /api/dispatch-engine/handle-ride-request": async (body) => {
    const schema = z.object({
    requestId: z.string(),
    pickupLat: z.number(),
    pickupLng: z.number()
    });
    const input = schema.parse(body);
    return await service.handleRideRequest(input.requestId, input.pickupLat, input.pickupLng);
  },
  "POST /api/dispatch-engine/rank-and-offer": async (body) => {
    const schema = z.object({
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.rankAndOffer(input.requestId);
  },
  "POST /api/dispatch-engine/on-offer-accepted": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.onOfferAccepted(input.driverId, input.requestId);
  },
  "POST /api/dispatch-engine/on-offer-expired": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.onOfferExpired(input.driverId, input.requestId);
  },
  "POST /api/dispatch-engine/escalate-radius": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.escalateRadius();
  },
  "POST /api/dispatch-engine/cancel-matching": async (body) => {
    const schema = z.object({
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.cancelMatching(input.requestId);
  },
  "POST /api/driver-app/update-position": async (body) => {
    const schema = z.object({
    lat: z.number(),
    lng: z.number()
    });
    const input = schema.parse(body);
    return await service.updatePosition(input.lat, input.lng);
  },
  "POST /api/driver-app/accept-offer": async (body) => {
    const schema = z.object({
    offerId: z.string(),
    rideId: z.string()
    });
    const input = schema.parse(body);
    return await service.acceptOffer(input.offerId, input.rideId);
  },
  "POST /api/driver-app/decline-offer": async (body) => {
    const schema = z.object({
    offerId: z.string()
    });
    const input = schema.parse(body);
    return await service.declineOffer(input.offerId);
  },
  "POST /api/driver-app/begin-ride": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.beginRide();
  },
  "POST /api/driver-app/complete-ride": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.completeRide();
  },
  "POST /api/driver-app/return-to-idle": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.returnToIdle();
  },
  "POST /api/driver-state-manager/transition-to-assigned": async (body) => {
    const schema = z.object({
    driverId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToAssigned(input.driverId);
  },
  "POST /api/driver-state-manager/confirm-assigned": async (body) => {
    const schema = z.object({
    driverId: z.string()
    });
    const input = schema.parse(body);
    return await service.confirmAssigned(input.driverId);
  },
  "POST /api/driver-state-manager/transition-to-en-route": async (body) => {
    const schema = z.object({
    driverId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToEnRoute(input.driverId);
  },
  "POST /api/driver-state-manager/transition-to-completed": async (body) => {
    const schema = z.object({
    driverId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToCompleted(input.driverId);
  },
  "POST /api/driver-state-manager/return-to-idle-pool": async (body) => {
    const schema = z.object({
    driverId: z.string()
    });
    const input = schema.parse(body);
    return await service.returnToIdlePool(input.driverId);
  },
  "POST /api/driver-state-manager/acquire-lock": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.acquireLock(input.driverId, input.requestId);
  },
  "POST /api/driver-state-manager/release-lock": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string(),
    wasSuccessful: z.boolean()
    });
    const input = schema.parse(body);
    return await service.releaseLock(input.driverId, input.requestId, input.wasSuccessful);
  },
  "POST /api/driver-state-manager/reject-double-assignment": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDoubleAssignment(input.driverId, input.requestId);
  },
  "POST /api/driver-state-manager/reject-state-skip": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    fromState: z.string(),
    toState: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectStateSkip(input.driverId, input.fromState, input.toState);
  },
  "POST /api/geo-spatial-index/index-driver": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.indexDriver();
  },
  "POST /api/geo-spatial-index/query-nearby-drivers": async (body) => {
    const schema = z.object({
    centerLat: z.number(),
    centerLng: z.number(),
    radiusKm: z.number()
    });
    const input = schema.parse(body);
    return await service.queryNearbyDrivers(input.centerLat, input.centerLng, input.radiusKm);
  },
  "POST /api/latency-monitor/start-monitoring": async (body) => {
    const schema = z.object({
    requestId: z.string(),
    startTimeMs: z.number().int()
    });
    const input = schema.parse(body);
    return await service.startMonitoring(input.requestId, input.startTimeMs);
  },
  "POST /api/latency-monitor/record-first-offer": async (body) => {
    const schema = z.object({
    currentTimeMs: z.number().int()
    });
    const input = schema.parse(body);
    return await service.recordFirstOffer(input.currentTimeMs);
  },
  "POST /api/latency-monitor/check-latency": async (body) => {
    const schema = z.object({
    currentTimeMs: z.number().int()
    });
    const input = schema.parse(body);
    return await service.checkLatency(input.currentTimeMs);
  },
  "POST /api/latency-monitor/reset-monitor": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetMonitor();
  },
  "POST /api/offer-service/create-offer": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string(),
    rideDesc: z.string()
    });
    const input = schema.parse(body);
    return await service.createOffer(input.driverId, input.requestId, input.rideDesc);
  },
  "POST /api/offer-service/accept-offer": async (body) => {
    const schema = z.object({
    offerId: z.string()
    });
    const input = schema.parse(body);
    return await service.acceptOffer(input.offerId);
  },
  "POST /api/offer-service/expire-offer": async (body) => {
    const schema = z.object({
    offerId: z.string()
    });
    const input = schema.parse(body);
    return await service.expireOffer(input.offerId);
  },
  "POST /api/offer-service/reject-excessive-latency": async (body) => {
    const schema = z.object({
    timeSinceRequest: z.number(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectExcessiveLatency(input.timeSinceRequest, input.requestId);
  },
  "POST /api/passenger-app/submit-ride-request": async (body) => {
    const schema = z.object({
    pickupLat: z.number(),
    pickupLng: z.number(),
    destLat: z.number(),
    destLng: z.number(),
    preferences: z.string()
    });
    const input = schema.parse(body);
    return await service.submitRideRequest(input.pickupLat, input.pickupLng, input.destLat, input.destLng, input.preferences);
  },
  "POST /api/passenger-app/notify-matching-complete": async (body) => {
    const schema = z.object({
    assignedDriverId: z.string()
    });
    const input = schema.parse(body);
    return await service.notifyMatchingComplete(input.assignedDriverId);
  },
  "POST /api/passenger-app/notify-ride-completed": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.notifyRideCompleted();
  },
  "POST /api/ride-dispatch-system/assign-driver": async (body) => {
    const schema = z.object({
    requestId: z.string(),
    driverId: z.string()
    });
    const input = schema.parse(body);
    return await service.assignDriver(input.requestId, input.driverId);
  },
  "POST /api/ride-dispatch-system/driver-en-route": async (body) => {
    const schema = z.object({
    driverId: z.string()
    });
    const input = schema.parse(body);
    return await service.driverEnRoute(input.driverId);
  },
  "POST /api/ride-dispatch-system/complete-ride": async (body) => {
    const schema = z.object({
    driverId: z.string()
    });
    const input = schema.parse(body);
    return await service.completeRide(input.driverId);
  },
  "POST /api/ride-dispatch-system/attempt-first-offer": async (body) => {
    const schema = z.object({
    timeSinceRequest: z.number(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.attemptFirstOffer(input.timeSinceRequest, input.requestId);
  },
  "POST /api/ride-dispatch-system/expire-offer": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.expireOffer(input.driverId, input.requestId);
  },
  "POST /api/ride-dispatch-system/escalate-radius": async (body) => {
    const schema = z.object({
    timeSinceRequest: z.number()
    });
    const input = schema.parse(body);
    return await service.escalateRadius(input.timeSinceRequest);
  },
  "POST /api/ride-dispatch-system/return-to-idle": async (body) => {
    const schema = z.object({
    driverId: z.string()
    });
    const input = schema.parse(body);
    return await service.returnToIdle(input.driverId);
  },
  "POST /api/ride-dispatch-system-formalized/reject-double-assignment": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDoubleAssignment(input.driverId, input.requestId);
  },
  "POST /api/ride-dispatch-system-formalized/reject-state-skip": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    fromState: z.string(),
    toState: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectStateSkip(input.driverId, input.fromState, input.toState);
  },
  "POST /api/ride-dispatch-system-formalized/reject-excessive-latency": async (body) => {
    const schema = z.object({
    timeSinceRequest: z.number(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectExcessiveLatency(input.timeSinceRequest, input.requestId);
  },
  "POST /api/ride-dispatch-system-formalized/acquire-driver-lock": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.acquireDriverLock(input.driverId, input.requestId);
  },
  "POST /api/ride-dispatch-system-formalized/release-driver-lock": async (body) => {
    const schema = z.object({
    driverId: z.string(),
    requestId: z.string(),
    wasSuccessful: z.boolean()
    });
    const input = schema.parse(body);
    return await service.releaseDriverLock(input.driverId, input.requestId, input.wasSuccessful);
  },
  "POST /api/ride-dispatch-system-formalized/log-compliance-violation": async (body) => {
    const schema = z.object({
    violationCode: z.string(),
    detail: z.string()
    });
    const input = schema.parse(body);
    return await service.logComplianceViolation(input.violationCode, input.detail);
  },
  "POST /api/ride-registry/store-ride-request": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.storeRideRequest();
  },
  "POST /api/ride-registry/create-assignment": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.createAssignment();
  },
  "POST /api/ride-registry/complete-ride": async (body) => {
    const schema = z.object({
    requestId: z.string()
    });
    const input = schema.parse(body);
    return await service.completeRide(input.requestId);
  },
};

export async function handle(method: string, path: string, body: unknown): Promise<{ status: number; body: unknown }> {
  const h = routes[`${method} ${path}`];
  if (!h) return { status: 404, body: { error: "not found" } };
  try {
    return { status: 200, body: await h(body) };
  } catch (e) {
    if (e instanceof InvariantViolation) {
      return { status: 422, body: { error: e.message, kind: "InvariantViolation", context: e.context, violations: e.violations } };
    }
    return { status: 500, body: { error: (e as Error).message } };
  }
}