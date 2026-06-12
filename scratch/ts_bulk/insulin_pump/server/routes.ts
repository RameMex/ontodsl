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
  "POST /api/alert-system/raise-alarm": async (body) => {
    const schema = z.object({
    reason: z.string()
    });
    const input = schema.parse(body);
    return await service.raiseAlarm(input.reason);
  },
  "POST /api/alert-system/clear-alarm": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearAlarm();
  },
  "POST /api/blood-sugar-sensor/take-reading": async (body) => {
    const schema = z.object({
    rawValueMgDl: z.number(),
    timestampMin: z.number()
    });
    const input = schema.parse(body);
    return await service.takeReading(input.rawValueMgDl, input.timestampMin);
  },
  "POST /api/blood-sugar-sensor/reject-bad-reading": async (body) => {
    const schema = z.object({
    rawValueMgDl: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectBadReading(input.rawValueMgDl);
  },
  "POST /api/insulin-pump-system/deliver-insulin": async (body) => {
    const schema = z.object({
    sugarMgDl: z.number(),
    safeZoneLower: z.number(),
    safeZoneUpper: z.number(),
    riseRateMgDlPerMin: z.number()
    });
    const input = schema.parse(body);
    return await service.deliverInsulin(input.sugarMgDl, input.safeZoneLower, input.safeZoneUpper, input.riseRateMgDlPerMin);
  },
  "POST /api/insulin-pump-system/run-self-test": async (body) => {
    const schema = z.object({
    passed: z.boolean()
    });
    const input = schema.parse(body);
    return await service.runSelfTest(input.passed);
  },
  "POST /api/insulin-pump-system/halt-on-fault": async (body) => {
    const schema = z.object({
    reason: z.string()
    });
    const input = schema.parse(body);
    return await service.haltOnFault(input.reason);
  },
  "POST /api/insulin-pump-system/raise-alarm": async (body) => {
    const schema = z.object({
    reason: z.string()
    });
    const input = schema.parse(body);
    return await service.raiseAlarm(input.reason);
  },
  "POST /api/insulin-pump-system/configure-safe-max": async (body) => {
    const schema = z.object({
    newMaxUnits: z.number()
    });
    const input = schema.parse(body);
    return await service.configureSafeMax(input.newMaxUnits);
  },
  "POST /api/insulin-pump-system/check-reservoir": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.checkReservoir();
  },
  "POST /api/insulin-pump-system-formalized/reject-overdose": async (body) => {
    const schema = z.object({
    requestedDose: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectOverdose(input.requestedDose);
  },
  "POST /api/insulin-pump-system-formalized/reject-negative-dose": async (body) => {
    const schema = z.object({
    requestedDose: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectNegativeDose(input.requestedDose);
  },
  "POST /api/insulin-pump-system-formalized/enforce-fail-safe": async (body) => {
    const schema = z.object({
    requestedDose: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceFailSafe(input.requestedDose);
  },
  "POST /api/insulin-pump-system-formalized/reject-invalid-reading": async (body) => {
    const schema = z.object({
    readingMgDl: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectInvalidReading(input.readingMgDl);
  },
  "POST /api/pump-actuator/deliver-dose": async (body) => {
    const schema = z.object({
    dose: z.number()
    });
    const input = schema.parse(body);
    return await service.deliverDose(input.dose);
  },
  "POST /api/pump-actuator/complete-dose": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.completeDose();
  },
  "POST /api/pump-actuator/check-reservoir": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.checkReservoir();
  },
  "POST /api/pump-actuator/configure-safe-max": async (body) => {
    const schema = z.object({
    newMaxUnits: z.number()
    });
    const input = schema.parse(body);
    return await service.configureSafeMax(input.newMaxUnits);
  },
  "POST /api/pump-actuator/halt-delivery": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.haltDelivery();
  },
  "POST /api/safety-monitor/run-self-test": async (body) => {
    const schema = z.object({
    passed: z.boolean(),
    timestampMin: z.number()
    });
    const input = schema.parse(body);
    return await service.runSelfTest(input.passed, input.timestampMin);
  },
  "POST /api/safety-monitor/halt-pump": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.haltPump();
  },
  "POST /api/safety-monitor/notify-sensor-fault": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.notifySensorFault();
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