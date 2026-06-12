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
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.readSoCAndReserve(input.__selfId);
  },
  "POST /api/battery-manager/set-reserve": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newReserve: z.number()
    });
    const input = schema.parse(body);
    return await service.setReserve(input.__selfId, input.newReserve);
  },
  "POST /api/battery-manager/check-so-cthreshold": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.checkSoCThreshold(input.__selfId);
  },
  "POST /api/drone-mission-controller/authorize-takeoff": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    currentSoC: z.number(),
    computedReserve: z.number()
    });
    const input = schema.parse(body);
    return await service.authorizeTakeoff(input.__selfId, input.currentSoC, input.computedReserve);
  },
  "POST /api/drone-mission-controller/detect-geofence-violation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    isInsideGeofence: z.boolean()
    });
    const input = schema.parse(body);
    return await service.detectGeofenceViolation(input.__selfId, input.isInsideGeofence);
  },
  "POST /api/drone-mission-controller/monitor-battery-so-c": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    currentSoC: z.number()
    });
    const input = schema.parse(body);
    return await service.monitorBatterySoC(input.__selfId, input.currentSoC);
  },
  "POST /api/drone-mission-controller/cancel-rth": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    operatorConfirm: z.string()
    });
    const input = schema.parse(body);
    return await service.cancelRTH(input.__selfId, input.operatorConfirm);
  },
  "POST /api/flight-controller/initiate-rthfrom-geofence": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.initiateRTHFromGeofence(input.__selfId);
  },
  "POST /api/flight-controller/initiate-rthfrom-battery": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.initiateRTHFromBattery(input.__selfId);
  },
  "POST /api/flight-controller/reject-operator-cancellation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    operatorConfirm: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectOperatorCancellation(input.__selfId, input.operatorConfirm);
  },
  "POST /api/flight-controller/execute-takeoff": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.executeTakeoff(input.__selfId);
  },
  "POST /api/formalized-drone-mission-controller/reject-takeoff-due-to-battery": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    currentSoC: z.number(),
    computedReserve: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectTakeoffDueToBattery(input.__selfId, input.currentSoC, input.computedReserve);
  },
  "POST /api/formalized-drone-mission-controller/enforce-geofence-containment": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    responseTimeMs: z.number().int()
    });
    const input = schema.parse(body);
    return await service.enforceGeofenceContainment(input.__selfId, input.responseTimeMs);
  },
  "POST /api/formalized-drone-mission-controller/enforce-mid-mission-battery-rth": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    currentSoC: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceMidMissionBatteryRTH(input.__selfId, input.currentSoC);
  },
  "POST /api/formalized-drone-mission-controller/reject-safety-rthcancellation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    operatorConfirm: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectSafetyRTHCancellation(input.__selfId, input.operatorConfirm);
  },
  "POST /api/geofence-monitor/check-position-inside-geofence": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    lat: z.number(),
    lon: z.number()
    });
    const input = schema.parse(body);
    return await service.checkPositionInsideGeofence(input.__selfId, input.lat, input.lon);
  },
  "POST /api/mission-planner-interface/submit-delivery-request": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    mNum: z.string(),
    destLat: z.number(),
    destLon: z.number()
    });
    const input = schema.parse(body);
    return await service.submitDeliveryRequest(input.__selfId, input.mNum, input.destLat, input.destLon);
  },
  "POST /api/mission-planner-interface/compute-reserve-for-mission": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    distKm: z.number()
    });
    const input = schema.parse(body);
    return await service.computeReserveForMission(input.__selfId, input.distKm);
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