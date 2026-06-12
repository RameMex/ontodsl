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
  "POST /api/battery-manager/read-so-cand-reserve": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.readSoCAndReserve();
  },
  "POST /api/battery-manager/set-reserve": async (body) => {
    const schema = z.object({
    newReserve: z.number()
    });
    const input = schema.parse(body);
    return await service.setReserve(input.newReserve);
  },
  "POST /api/battery-manager/check-so-cthreshold": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.checkSoCThreshold();
  },
  "POST /api/drone-mission-controller/authorize-takeoff": async (body) => {
    const schema = z.object({
    currentSoC: z.number(),
    computedReserve: z.number()
    });
    const input = schema.parse(body);
    return await service.authorizeTakeoff(input.currentSoC, input.computedReserve);
  },
  "POST /api/drone-mission-controller/detect-geofence-violation": async (body) => {
    const schema = z.object({
    isInsideGeofence: z.boolean()
    });
    const input = schema.parse(body);
    return await service.detectGeofenceViolation(input.isInsideGeofence);
  },
  "POST /api/drone-mission-controller/monitor-battery-so-c": async (body) => {
    const schema = z.object({
    currentSoC: z.number()
    });
    const input = schema.parse(body);
    return await service.monitorBatterySoC(input.currentSoC);
  },
  "POST /api/drone-mission-controller/cancel-rth": async (body) => {
    const schema = z.object({
    operatorConfirm: z.string()
    });
    const input = schema.parse(body);
    return await service.cancelRTH(input.operatorConfirm);
  },
  "POST /api/flight-controller/initiate-rthfrom-geofence": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.initiateRTHFromGeofence();
  },
  "POST /api/flight-controller/initiate-rthfrom-battery": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.initiateRTHFromBattery();
  },
  "POST /api/flight-controller/reject-operator-cancellation": async (body) => {
    const schema = z.object({
    operatorConfirm: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectOperatorCancellation(input.operatorConfirm);
  },
  "POST /api/flight-controller/execute-takeoff": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.executeTakeoff();
  },
  "POST /api/formalized-drone-mission-controller/reject-takeoff-due-to-battery": async (body) => {
    const schema = z.object({
    currentSoC: z.number(),
    computedReserve: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectTakeoffDueToBattery(input.currentSoC, input.computedReserve);
  },
  "POST /api/formalized-drone-mission-controller/enforce-geofence-containment": async (body) => {
    const schema = z.object({
    responseTimeMs: z.number().int()
    });
    const input = schema.parse(body);
    return await service.enforceGeofenceContainment(input.responseTimeMs);
  },
  "POST /api/formalized-drone-mission-controller/enforce-mid-mission-battery-rth": async (body) => {
    const schema = z.object({
    currentSoC: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceMidMissionBatteryRTH(input.currentSoC);
  },
  "POST /api/formalized-drone-mission-controller/reject-safety-rthcancellation": async (body) => {
    const schema = z.object({
    operatorConfirm: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectSafetyRTHCancellation(input.operatorConfirm);
  },
  "POST /api/geofence-monitor/check-position-inside-geofence": async (body) => {
    const schema = z.object({
    lat: z.number(),
    lon: z.number()
    });
    const input = schema.parse(body);
    return await service.checkPositionInsideGeofence(input.lat, input.lon);
  },
  "POST /api/mission-planner-interface/submit-delivery-request": async (body) => {
    const schema = z.object({
    mNum: z.string(),
    destLat: z.number(),
    destLon: z.number()
    });
    const input = schema.parse(body);
    return await service.submitDeliveryRequest(input.mNum, input.destLat, input.destLon);
  },
  "POST /api/mission-planner-interface/compute-reserve-for-mission": async (body) => {
    const schema = z.object({
    distKm: z.number()
    });
    const input = schema.parse(body);
    return await service.computeReserveForMission(input.distKm);
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