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
  "POST /api/actuator-driver/issue-command": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newState: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.issueCommand(input.__selfId, input.newState, input.timestamp);
  },
  "POST /api/actuator-driver/force-off": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.forceOff(input.__selfId, input.timestamp);
  },
  "POST /api/actuator-driver/initialize": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.initialize(input.__selfId);
  },
  "POST /api/display-manager/update-temperature": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    temp: z.number()
    });
    const input = schema.parse(body);
    return await service.updateTemperature(input.__selfId, input.temp);
  },
  "POST /api/display-manager/update-setpoint": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    real: z.number()
    });
    const input = schema.parse(body);
    return await service.updateSetpoint(input.__selfId, input.real);
  },
  "POST /api/display-manager/update-actuator-state": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    state: z.string()
    });
    const input = schema.parse(body);
    return await service.updateActuatorState(input.__selfId, input.state);
  },
  "POST /api/display-manager/show-error": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    message: z.string()
    });
    const input = schema.parse(body);
    return await service.showError(input.__selfId, input.message);
  },
  "POST /api/display-manager/clear-error": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearError(input.__selfId);
  },
  "POST /api/display-manager/initialize": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    setpoint: z.number(),
    temp: z.number()
    });
    const input = schema.parse(body);
    return await service.initialize(input.__selfId, input.setpoint, input.temp);
  },
  "POST /api/safety-monitor/inspect-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    reading: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.inspectReading(input.__selfId, input.reading, input.timestamp);
  },
  "POST /api/safety-monitor/reset": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.reset(input.__selfId);
  },
  "POST /api/safety-monitor/initialize": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.initialize(input.__selfId);
  },
  "POST /api/setpoint-controller/receive-user-setpoint": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedSetpoint: z.number()
    });
    const input = schema.parse(body);
    return await service.receiveUserSetpoint(input.__selfId, input.requestedSetpoint);
  },
  "POST /api/setpoint-controller/receive-temperature-input": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    temp: z.number()
    });
    const input = schema.parse(body);
    return await service.receiveTemperatureInput(input.__selfId, input.temp);
  },
  "POST /api/setpoint-controller/clear-decision": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearDecision(input.__selfId);
  },
  "POST /api/setpoint-controller/initialize": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    clamped: z.number(),
    temp: z.number()
    });
    const input = schema.parse(body);
    return await service.initialize(input.__selfId, input.clamped, input.temp);
  },
  "POST /api/temperature-sensor/take-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    value: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.takeReading(input.__selfId, input.value, input.timestamp);
  },
  "POST /api/temperature-sensor/set-faulty": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.setFaulty(input.__selfId);
  },
  "POST /api/temperature-sensor/restore": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.restore(input.__selfId);
  },
  "POST /api/thermostat-system/set-user-setpoint": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedSetpoint: z.number()
    });
    const input = schema.parse(body);
    return await service.setUserSetpoint(input.__selfId, input.requestedSetpoint);
  },
  "POST /api/thermostat-system/process-sensor-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    reading: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.processSensorReading(input.__selfId, input.reading, input.timestamp);
  },
  "POST /api/thermostat-system/request-command-transition": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newCommand: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.requestCommandTransition(input.__selfId, input.newCommand, input.timestamp);
  },
  "POST /api/thermostat-system/display-current-state": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.displayCurrentState(input.__selfId);
  },
  "POST /api/thermostat-system/initialize": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.initialize(input.__selfId);
  },
  "POST /api/thermostat-system-formalized/guard-plausible-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    reading: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.guardPlausibleReading(input.__selfId, input.reading, input.timestamp);
  },
  "POST /api/thermostat-system-formalized/guard-unsafe-setpoint": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedSetpoint: z.number()
    });
    const input = schema.parse(body);
    return await service.guardUnsafeSetpoint(input.__selfId, input.requestedSetpoint);
  },
  "POST /api/thermostat-system-formalized/guard-cycling-violation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newCommand: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.guardCyclingViolation(input.__selfId, input.newCommand, input.timestamp);
  },
  "POST /api/thermostat-system-formalized/enforce-display-consistency": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceDisplayConsistency(input.__selfId);
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