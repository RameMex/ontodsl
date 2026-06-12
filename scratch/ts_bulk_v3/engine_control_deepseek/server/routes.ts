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
  "POST /api/engine-control-system/detect-overspeed": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.detectOverspeed(input.__selfId);
  },
  "POST /api/engine-control-system/limit-fuel-on-overspeed": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.limitFuelOnOverspeed(input.__selfId);
  },
  "POST /api/engine-control-system/command-continuous-ignition": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.commandContinuousIgnition(input.__selfId);
  },
  "POST /api/engine-control-system/hold-thrust-in-flight": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.holdThrustInFlight(input.__selfId);
  },
  "POST /api/engine-control-system/deploy-reverser-on-ground": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.deployReverserOnGround(input.__selfId);
  },
  "POST /api/engine-control-system/detect-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.detectSensorFault(input.__selfId);
  },
  "POST /api/engine-control-system-formalized/reject-overspeed-when-no-protection": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectOverspeedWhenNoProtection(input.__selfId);
  },
  "POST /api/engine-control-system-formalized/reject-reverser-in-flight": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectReverserInFlight(input.__selfId);
  },
  "POST /api/engine-control-system-formalized/enforce-modelled-value-substitution": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceModelledValueSubstitution(input.__selfId);
  },
  "POST /api/engine-control-system-formalized/guard-continuous-ignition": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.guardContinuousIgnition(input.__selfId);
  },
  "POST /api/engine-control-system-formalized/limit-thrust-on-overspeed": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.limitThrustOnOverspeed(input.__selfId);
  },
  "POST /api/overspeed-protection-unit/arm-protection": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.armProtection(input.__selfId);
  },
  "POST /api/overspeed-protection-unit/shut-off-fuel-on-overspeed": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.shutOffFuelOnOverspeed(input.__selfId);
  },
  "POST /api/overspeed-protection-unit/reset-after-overspeed": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetAfterOverspeed(input.__selfId);
  },
  "POST /api/overspeed-protection-unit/set-overspeed-detected": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    detected: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setOverspeedDetected(input.__selfId, input.detected);
  },
  "POST /api/sensor-fault-handler/detect-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.detectSensorFault(input.__selfId);
  },
  "POST /api/sensor-fault-handler/clear-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearSensorFault(input.__selfId);
  },
  "POST /api/speed-monitor/detect-overspeed": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.detectOverspeed(input.__selfId);
  },
  "POST /api/speed-monitor/limit-fuel-on-overspeed": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.limitFuelOnOverspeed(input.__selfId);
  },
  "POST /api/speed-monitor/set-current-speed": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    speed: z.number()
    });
    const input = schema.parse(body);
    return await service.setCurrentSpeed(input.__selfId, input.speed);
  },
  "POST /api/speed-monitor/set-overspeed-protection-fitted": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    fitted: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setOverspeedProtectionFitted(input.__selfId, input.fitted);
  },
  "POST /api/speed-monitor/set-fuel-flow-from-modelled-value": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    flow: z.number()
    });
    const input = schema.parse(body);
    return await service.setFuelFlowFromModelledValue(input.__selfId, input.flow);
  },
  "POST /api/thrust-manager/command-continuous-ignition": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.commandContinuousIgnition(input.__selfId);
  },
  "POST /api/thrust-manager/hold-thrust-in-flight": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.holdThrustInFlight(input.__selfId);
  },
  "POST /api/thrust-manager/deploy-reverser-on-ground": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.deployReverserOnGround(input.__selfId);
  },
  "POST /api/thrust-manager/set-on-ground": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    state: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setOnGround(input.__selfId, input.state);
  },
  "POST /api/thrust-manager/set-reverser-commanded": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    cmd: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setReverserCommanded(input.__selfId, input.cmd);
  },
  "POST /api/thrust-manager/set-continuous-ignition-commanded": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    cmd: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setContinuousIgnitionCommanded(input.__selfId, input.cmd);
  },
  "POST /api/thrust-manager/set-thrust-commanded": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    thrust: z.number()
    });
    const input = schema.parse(body);
    return await service.setThrustCommanded(input.__selfId, input.thrust);
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