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

    });
    const input = schema.parse(body);
    return await service.soundMalfunctionAlarm();
  },
  "POST /api/alarm-manager/sound-low-reservoir-alarm": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.soundLowReservoirAlarm();
  },
  "POST /api/alarm-manager/clear-alarms": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearAlarms();
  },
  "POST /api/blood-sugar-sensor/take-reading": async (body) => {
    const schema = z.object({
    value: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.takeReading(input.value, input.timestamp);
  },
  "POST /api/blood-sugar-sensor/report-sensor-fault": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.reportSensorFault();
  },
  "POST /api/blood-sugar-sensor/reset-sensor": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetSensor();
  },
  "POST /api/dose-calculator/compute-dose": async (body) => {
    const schema = z.object({
    sugar: z.number(),
    rate: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.computeDose(input.sugar, input.rate, input.timestamp);
  },
  "POST /api/dose-calculator/set-max-dose": async (body) => {
    const schema = z.object({
    newMax: z.number()
    });
    const input = schema.parse(body);
    return await service.setMaxDose(input.newMax);
  },
  "POST /api/dose-calculator/set-safe-zone": async (body) => {
    const schema = z.object({
    newUpperBound: z.number()
    });
    const input = schema.parse(body);
    return await service.setSafeZone(input.newUpperBound);
  },
  "POST /api/dose-calculator/set-dosing-check-interval": async (body) => {
    const schema = z.object({
    newInterval: z.number()
    });
    const input = schema.parse(body);
    return await service.setDosingCheckInterval(input.newInterval);
  },
  "POST /api/dose-calculator/reset-calculator": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetCalculator();
  },
  "POST /api/hardware-fault-detector/run-self-test": async (body) => {
    const schema = z.object({
    sensorStatus: z.boolean(),
    pumpStatus: z.boolean(),
    needleStatus: z.boolean(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.runSelfTest(input.sensorStatus, input.pumpStatus, input.needleStatus, input.timestamp);
  },
  "POST /api/hardware-fault-detector/detect-fault": async (body) => {
    const schema = z.object({
    reason: z.string()
    });
    const input = schema.parse(body);
    return await service.detectFault(input.reason);
  },
  "POST /api/hardware-fault-detector/clear-fault": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearFault();
  },
  "POST /api/hardware-fault-detector/set-self-test-interval": async (body) => {
    const schema = z.object({
    newInterval: z.number()
    });
    const input = schema.parse(body);
    return await service.setSelfTestInterval(input.newInterval);
  },
  "POST /api/insulin-pump-control-system/deliver-insulin": async (body) => {
    const schema = z.object({
    sugar: z.number(),
    rate: z.number()
    });
    const input = schema.parse(body);
    return await service.deliverInsulin(input.sugar, input.rate);
  },
  "POST /api/insulin-pump-control-system/detect-fault": async (body) => {
    const schema = z.object({
    faultReason: z.string()
    });
    const input = schema.parse(body);
    return await service.detectFault(input.faultReason);
  },
  "POST /api/insulin-pump-control-system/sound-alarm": async (body) => {
    const schema = z.object({
    alarmType: z.string()
    });
    const input = schema.parse(body);
    return await service.soundAlarm(input.alarmType);
  },
  "POST /api/insulin-pump-control-system/detect-low-reservoir": async (body) => {
    const schema = z.object({
    threshold: z.number()
    });
    const input = schema.parse(body);
    return await service.detectLowReservoir(input.threshold);
  },
  "POST /api/insulin-pump-control-system/clear-alarms": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearAlarms();
  },
  "POST /api/insulin-pump-control-system/resume-operation": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resumeOperation();
  },
  "POST /api/insulin-pump-control-system/set-safe-max-dose": async (body) => {
    const schema = z.object({
    newMax: z.number()
    });
    const input = schema.parse(body);
    return await service.setSafeMaxDose(input.newMax);
  },
  "POST /api/insulin-pump-control-system/check-blood-sugar": async (body) => {
    const schema = z.object({
    sugar: z.number()
    });
    const input = schema.parse(body);
    return await service.checkBloodSugar(input.sugar);
  },
  "POST /api/insulin-pump-system-formalized/reject-overdose": async (body) => {
    const schema = z.object({
    requestedDose: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectOverdose(input.requestedDose);
  },
  "POST /api/insulin-pump-system-formalized/reject-delivery-in-safe-zone": async (body) => {
    const schema = z.object({
    sugar: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectDeliveryInSafeZone(input.sugar);
  },
  "POST /api/insulin-pump-system-formalized/reject-delivery-on-fault": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectDeliveryOnFault();
  },
  "POST /api/insulin-pump-system-formalized/enforce-self-test-interval": async (body) => {
    const schema = z.object({
    lastTestTime: z.number(),
    currentTime: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceSelfTestInterval(input.lastTestTime, input.currentTime);
  },
  "POST /api/insulin-pump-system-formalized/enforce-dosing-interval": async (body) => {
    const schema = z.object({
    lastDoseTime: z.number(),
    currentTime: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceDosingInterval(input.lastDoseTime, input.currentTime);
  },
  "POST /api/insulin-pump-system-formalized/enforce-safe-max-configured": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.enforceSafeMaxConfigured();
  },
  "POST /api/pump-actuator/deliver-insulin": async (body) => {
    const schema = z.object({
    dose: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.deliverInsulin(input.dose, input.timestamp);
  },
  "POST /api/pump-actuator/stop-delivery": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.stopDelivery();
  },
  "POST /api/pump-actuator/refill-reservoir": async (body) => {
    const schema = z.object({
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.refillReservoir(input.amount);
  },
  "POST /api/pump-actuator/report-low-reservoir": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.reportLowReservoir();
  },
  "POST /api/pump-actuator/report-actuator-fault": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.reportActuatorFault();
  },
  "POST /api/pump-actuator/clear-actuator-fault": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearActuatorFault();
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