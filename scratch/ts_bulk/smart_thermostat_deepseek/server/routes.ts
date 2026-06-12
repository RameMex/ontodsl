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
    newState: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.issueCommand(input.newState, input.timestamp);
  },
  "POST /api/actuator-driver/force-off": async (body) => {
    const schema = z.object({
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.forceOff(input.timestamp);
  },
  "POST /api/actuator-driver/initialize": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.initialize();
  },
  "POST /api/display-manager/update-temperature": async (body) => {
    const schema = z.object({
    temp: z.number()
    });
    const input = schema.parse(body);
    return await service.updateTemperature(input.temp);
  },
  "POST /api/display-manager/update-setpoint": async (body) => {
    const schema = z.object({
    real: z.number()
    });
    const input = schema.parse(body);
    return await service.updateSetpoint(input.real);
  },
  "POST /api/display-manager/update-actuator-state": async (body) => {
    const schema = z.object({
    state: z.string()
    });
    const input = schema.parse(body);
    return await service.updateActuatorState(input.state);
  },
  "POST /api/display-manager/show-error": async (body) => {
    const schema = z.object({
    message: z.string()
    });
    const input = schema.parse(body);
    return await service.showError(input.message);
  },
  "POST /api/display-manager/clear-error": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearError();
  },
  "POST /api/display-manager/initialize": async (body) => {
    const schema = z.object({
    setpoint: z.number(),
    temp: z.number()
    });
    const input = schema.parse(body);
    return await service.initialize(input.setpoint, input.temp);
  },
  "POST /api/safety-monitor/inspect-reading": async (body) => {
    const schema = z.object({
    reading: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.inspectReading(input.reading, input.timestamp);
  },
  "POST /api/safety-monitor/reset": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.reset();
  },
  "POST /api/safety-monitor/initialize": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.initialize();
  },
  "POST /api/setpoint-controller/receive-user-setpoint": async (body) => {
    const schema = z.object({
    requestedSetpoint: z.number()
    });
    const input = schema.parse(body);
    return await service.receiveUserSetpoint(input.requestedSetpoint);
  },
  "POST /api/setpoint-controller/receive-temperature-input": async (body) => {
    const schema = z.object({
    temp: z.number()
    });
    const input = schema.parse(body);
    return await service.receiveTemperatureInput(input.temp);
  },
  "POST /api/setpoint-controller/clear-decision": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearDecision();
  },
  "POST /api/setpoint-controller/initialize": async (body) => {
    const schema = z.object({
    clamped: z.number(),
    temp: z.number()
    });
    const input = schema.parse(body);
    return await service.initialize(input.clamped, input.temp);
  },
  "POST /api/temperature-sensor/take-reading": async (body) => {
    const schema = z.object({
    value: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.takeReading(input.value, input.timestamp);
  },
  "POST /api/temperature-sensor/set-faulty": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.setFaulty();
  },
  "POST /api/temperature-sensor/restore": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.restore();
  },
  "POST /api/thermostat-system/set-user-setpoint": async (body) => {
    const schema = z.object({
    requestedSetpoint: z.number()
    });
    const input = schema.parse(body);
    return await service.setUserSetpoint(input.requestedSetpoint);
  },
  "POST /api/thermostat-system/process-sensor-reading": async (body) => {
    const schema = z.object({
    reading: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.processSensorReading(input.reading, input.timestamp);
  },
  "POST /api/thermostat-system/request-command-transition": async (body) => {
    const schema = z.object({
    newCommand: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.requestCommandTransition(input.newCommand, input.timestamp);
  },
  "POST /api/thermostat-system/display-current-state": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.displayCurrentState();
  },
  "POST /api/thermostat-system/initialize": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.initialize();
  },
  "POST /api/thermostat-system-formalized/guard-plausible-reading": async (body) => {
    const schema = z.object({
    reading: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.guardPlausibleReading(input.reading, input.timestamp);
  },
  "POST /api/thermostat-system-formalized/guard-unsafe-setpoint": async (body) => {
    const schema = z.object({
    requestedSetpoint: z.number()
    });
    const input = schema.parse(body);
    return await service.guardUnsafeSetpoint(input.requestedSetpoint);
  },
  "POST /api/thermostat-system-formalized/guard-cycling-violation": async (body) => {
    const schema = z.object({
    newCommand: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.guardCyclingViolation(input.newCommand, input.timestamp);
  },
  "POST /api/thermostat-system-formalized/enforce-display-consistency": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.enforceDisplayConsistency();
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