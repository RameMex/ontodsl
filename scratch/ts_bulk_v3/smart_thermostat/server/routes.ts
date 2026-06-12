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
  "POST /api/actuator-driver-component/drive-actuator": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    currentTempF: z.number(),
    clampedSetpointF: z.number(),
    atMinute: z.number()
    });
    const input = schema.parse(body);
    return await service.driveActuator(input.__selfId, input.currentTempF, input.clampedSetpointF, input.atMinute);
  },
  "POST /api/actuator-driver-component/engage-safe-halt": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.engageSafeHalt(input.__selfId);
  },
  "POST /api/actuator-driver-component/clear-halt": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearHalt(input.__selfId);
  },
  "POST /api/actuator-driver-component/reject-early-cycle": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    atMinute: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectEarlyCycle(input.__selfId, input.atMinute);
  },
  "POST /api/display-component/refresh-display": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    tempF: z.number(),
    setpointF: z.number(),
    actuatorSig: z.string(),
    alertActive: z.boolean()
    });
    const input = schema.parse(body);
    return await service.refreshDisplay(input.__selfId, input.tempF, input.setpointF, input.actuatorSig, input.alertActive);
  },
  "POST /api/display-component/show-alert": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.showAlert(input.__selfId);
  },
  "POST /api/display-component/clear-alert": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearAlert(input.__selfId);
  },
  "POST /api/setpoint-controller-component/update-setpoint": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedF: z.number(),
    sensorOk: z.boolean(),
    alertActive: z.boolean()
    });
    const input = schema.parse(body);
    return await service.updateSetpoint(input.__selfId, input.requestedF, input.sensorOk, input.alertActive);
  },
  "POST /api/setpoint-controller-component/reject-setpoint-while-halted": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedF: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectSetpointWhileHalted(input.__selfId, input.requestedF);
  },
  "POST /api/smart-thermostat-system/adjust-setpoint": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedF: z.number()
    });
    const input = schema.parse(body);
    return await service.adjustSetpoint(input.__selfId, input.requestedF);
  },
  "POST /api/smart-thermostat-system/process-sensor-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    readingF: z.number(),
    atMinute: z.number()
    });
    const input = schema.parse(body);
    return await service.processSensorReading(input.__selfId, input.readingF, input.atMinute);
  },
  "POST /api/smart-thermostat-system/command-actuator": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    atMinute: z.number()
    });
    const input = schema.parse(body);
    return await service.commandActuator(input.__selfId, input.atMinute);
  },
  "POST /api/smart-thermostat-system/reject-command-during-safe-halt": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectCommandDuringSafeHalt(input.__selfId);
  },
  "POST /api/smart-thermostat-system/refresh-display": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.refreshDisplay(input.__selfId);
  },
  "POST /api/smart-thermostat-system/clear-safe-halt": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    verifiedReadingF: z.number(),
    atMinute: z.number()
    });
    const input = schema.parse(body);
    return await service.clearSafeHalt(input.__selfId, input.verifiedReadingF, input.atMinute);
  },
  "POST /api/smart-thermostat-system-formalized/reject-unsafe-actuator-command": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedSignal: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectUnsafeActuatorCommand(input.__selfId, input.requestedSignal);
  },
  "POST /api/smart-thermostat-system-formalized/reject-implausible-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    readingF: z.number(),
    atMinute: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectImplausibleReading(input.__selfId, input.readingF, input.atMinute);
  },
  "POST /api/smart-thermostat-system-formalized/reject-early-compressor-cycle": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    atMinute: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectEarlyCompressorCycle(input.__selfId, input.atMinute);
  },
  "POST /api/smart-thermostat-system-formalized/reject-setpoint-during-safe-halt": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedF: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectSetpointDuringSafeHalt(input.__selfId, input.requestedF);
  },
  "POST /api/temperature-sensor-component/ingest-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    readingF: z.number(),
    atMinute: z.number()
    });
    const input = schema.parse(body);
    return await service.ingestReading(input.__selfId, input.readingF, input.atMinute);
  },
  "POST /api/temperature-sensor-component/clear-sensor-alert": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    verifiedReadingF: z.number(),
    atMinute: z.number()
    });
    const input = schema.parse(body);
    return await service.clearSensorAlert(input.__selfId, input.verifiedReadingF, input.atMinute);
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