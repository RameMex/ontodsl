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

    });
    const input = schema.parse(body);
    return await service.detectOverspeed();
  },
  "POST /api/engine-control-system/limit-fuel-on-overspeed": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.limitFuelOnOverspeed();
  },
  "POST /api/engine-control-system/command-continuous-ignition": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.commandContinuousIgnition();
  },
  "POST /api/engine-control-system/hold-thrust-in-flight": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.holdThrustInFlight();
  },
  "POST /api/engine-control-system/deploy-reverser-on-ground": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.deployReverserOnGround();
  },
  "POST /api/engine-control-system/detect-sensor-fault": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.detectSensorFault();
  },
  "POST /api/engine-control-system-formalized/reject-overspeed-when-no-protection": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectOverspeedWhenNoProtection();
  },
  "POST /api/engine-control-system-formalized/reject-reverser-in-flight": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectReverserInFlight();
  },
  "POST /api/engine-control-system-formalized/enforce-modelled-value-substitution": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.enforceModelledValueSubstitution();
  },
  "POST /api/engine-control-system-formalized/guard-continuous-ignition": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.guardContinuousIgnition();
  },
  "POST /api/engine-control-system-formalized/limit-thrust-on-overspeed": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.limitThrustOnOverspeed();
  },
  "POST /api/overspeed-protection-unit/arm-protection": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.armProtection();
  },
  "POST /api/overspeed-protection-unit/shut-off-fuel-on-overspeed": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.shutOffFuelOnOverspeed();
  },
  "POST /api/overspeed-protection-unit/reset-after-overspeed": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetAfterOverspeed();
  },
  "POST /api/overspeed-protection-unit/set-overspeed-detected": async (body) => {
    const schema = z.object({
    detected: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setOverspeedDetected(input.detected);
  },
  "POST /api/sensor-fault-handler/detect-sensor-fault": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.detectSensorFault();
  },
  "POST /api/sensor-fault-handler/clear-sensor-fault": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearSensorFault();
  },
  "POST /api/speed-monitor/detect-overspeed": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.detectOverspeed();
  },
  "POST /api/speed-monitor/limit-fuel-on-overspeed": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.limitFuelOnOverspeed();
  },
  "POST /api/speed-monitor/set-current-speed": async (body) => {
    const schema = z.object({
    speed: z.number()
    });
    const input = schema.parse(body);
    return await service.setCurrentSpeed(input.speed);
  },
  "POST /api/speed-monitor/set-overspeed-protection-fitted": async (body) => {
    const schema = z.object({
    fitted: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setOverspeedProtectionFitted(input.fitted);
  },
  "POST /api/speed-monitor/set-fuel-flow-from-modelled-value": async (body) => {
    const schema = z.object({
    flow: z.number()
    });
    const input = schema.parse(body);
    return await service.setFuelFlowFromModelledValue(input.flow);
  },
  "POST /api/thrust-manager/command-continuous-ignition": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.commandContinuousIgnition();
  },
  "POST /api/thrust-manager/hold-thrust-in-flight": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.holdThrustInFlight();
  },
  "POST /api/thrust-manager/deploy-reverser-on-ground": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.deployReverserOnGround();
  },
  "POST /api/thrust-manager/set-on-ground": async (body) => {
    const schema = z.object({
    state: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setOnGround(input.state);
  },
  "POST /api/thrust-manager/set-reverser-commanded": async (body) => {
    const schema = z.object({
    cmd: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setReverserCommanded(input.cmd);
  },
  "POST /api/thrust-manager/set-continuous-ignition-commanded": async (body) => {
    const schema = z.object({
    cmd: z.boolean()
    });
    const input = schema.parse(body);
    return await service.setContinuousIgnitionCommanded(input.cmd);
  },
  "POST /api/thrust-manager/set-thrust-commanded": async (body) => {
    const schema = z.object({
    thrust: z.number()
    });
    const input = schema.parse(body);
    return await service.setThrustCommanded(input.thrust);
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