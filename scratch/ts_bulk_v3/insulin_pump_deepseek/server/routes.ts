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
  "POST /api/alarm-manager/sound-malfunction-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.soundMalfunctionAlarm(input.__selfId);
  },
  "POST /api/alarm-manager/sound-low-reservoir-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.soundLowReservoirAlarm(input.__selfId);
  },
  "POST /api/alarm-manager/clear-alarms": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearAlarms(input.__selfId);
  },
  "POST /api/blood-sugar-sensor/take-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    value: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.takeReading(input.__selfId, input.value, input.timestamp);
  },
  "POST /api/blood-sugar-sensor/report-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.reportSensorFault(input.__selfId);
  },
  "POST /api/blood-sugar-sensor/reset-sensor": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetSensor(input.__selfId);
  },
  "POST /api/dose-calculator/compute-dose": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    sugar: z.number(),
    rate: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.computeDose(input.__selfId, input.sugar, input.rate, input.timestamp);
  },
  "POST /api/dose-calculator/set-max-dose": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newMax: z.number()
    });
    const input = schema.parse(body);
    return await service.setMaxDose(input.__selfId, input.newMax);
  },
  "POST /api/dose-calculator/set-safe-zone": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newUpperBound: z.number()
    });
    const input = schema.parse(body);
    return await service.setSafeZone(input.__selfId, input.newUpperBound);
  },
  "POST /api/dose-calculator/set-dosing-check-interval": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newInterval: z.number()
    });
    const input = schema.parse(body);
    return await service.setDosingCheckInterval(input.__selfId, input.newInterval);
  },
  "POST /api/dose-calculator/reset-calculator": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetCalculator(input.__selfId);
  },
  "POST /api/hardware-fault-detector/run-self-test": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    sensorStatus: z.boolean(),
    pumpStatus: z.boolean(),
    needleStatus: z.boolean(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.runSelfTest(input.__selfId, input.sensorStatus, input.pumpStatus, input.needleStatus, input.timestamp);
  },
  "POST /api/hardware-fault-detector/detect-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    reason: z.string()
    });
    const input = schema.parse(body);
    return await service.detectFault(input.__selfId, input.reason);
  },
  "POST /api/hardware-fault-detector/clear-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearFault(input.__selfId);
  },
  "POST /api/hardware-fault-detector/set-self-test-interval": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newInterval: z.number()
    });
    const input = schema.parse(body);
    return await service.setSelfTestInterval(input.__selfId, input.newInterval);
  },
  "POST /api/insulin-pump-control-system/deliver-insulin": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    sugar: z.number(),
    rate: z.number()
    });
    const input = schema.parse(body);
    return await service.deliverInsulin(input.__selfId, input.sugar, input.rate);
  },
  "POST /api/insulin-pump-control-system/detect-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    faultReason: z.string()
    });
    const input = schema.parse(body);
    return await service.detectFault(input.__selfId, input.faultReason);
  },
  "POST /api/insulin-pump-control-system/sound-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    alarmType: z.string()
    });
    const input = schema.parse(body);
    return await service.soundAlarm(input.__selfId, input.alarmType);
  },
  "POST /api/insulin-pump-control-system/detect-low-reservoir": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    threshold: z.number()
    });
    const input = schema.parse(body);
    return await service.detectLowReservoir(input.__selfId, input.threshold);
  },
  "POST /api/insulin-pump-control-system/clear-alarms": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearAlarms(input.__selfId);
  },
  "POST /api/insulin-pump-control-system/resume-operation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resumeOperation(input.__selfId);
  },
  "POST /api/insulin-pump-control-system/set-safe-max-dose": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newMax: z.number()
    });
    const input = schema.parse(body);
    return await service.setSafeMaxDose(input.__selfId, input.newMax);
  },
  "POST /api/insulin-pump-control-system/check-blood-sugar": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    sugar: z.number()
    });
    const input = schema.parse(body);
    return await service.checkBloodSugar(input.__selfId, input.sugar);
  },
  "POST /api/insulin-pump-system-formalized/reject-overdose": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedDose: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectOverdose(input.__selfId, input.requestedDose);
  },
  "POST /api/insulin-pump-system-formalized/reject-delivery-in-safe-zone": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    sugar: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectDeliveryInSafeZone(input.__selfId, input.sugar);
  },
  "POST /api/insulin-pump-system-formalized/reject-delivery-on-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDeliveryOnFault(input.__selfId);
  },
  "POST /api/insulin-pump-system-formalized/enforce-self-test-interval": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    lastTestTime: z.number(),
    currentTime: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceSelfTestInterval(input.__selfId, input.lastTestTime, input.currentTime);
  },
  "POST /api/insulin-pump-system-formalized/enforce-dosing-interval": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    lastDoseTime: z.number(),
    currentTime: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceDosingInterval(input.__selfId, input.lastDoseTime, input.currentTime);
  },
  "POST /api/insulin-pump-system-formalized/enforce-safe-max-configured": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceSafeMaxConfigured(input.__selfId);
  },
  "POST /api/pump-actuator/deliver-insulin": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    dose: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.deliverInsulin(input.__selfId, input.dose, input.timestamp);
  },
  "POST /api/pump-actuator/stop-delivery": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.stopDelivery(input.__selfId);
  },
  "POST /api/pump-actuator/refill-reservoir": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.refillReservoir(input.__selfId, input.amount);
  },
  "POST /api/pump-actuator/report-low-reservoir": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.reportLowReservoir(input.__selfId);
  },
  "POST /api/pump-actuator/report-actuator-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.reportActuatorFault(input.__selfId);
  },
  "POST /api/pump-actuator/clear-actuator-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearActuatorFault(input.__selfId);
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