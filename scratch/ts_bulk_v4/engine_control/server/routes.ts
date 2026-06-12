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
  "POST /api/engine-control-system/limit-fuel-on-overspeed": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    detectedSpeed: z.number()
    });
    const input = schema.parse(body);
    return await service.limitFuelOnOverspeed(input.__selfId, input.detectedSpeed);
  },
  "POST /api/engine-control-system/activate-continuous-ignition": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.activateContinuousIgnition(input.__selfId);
  },
  "POST /api/engine-control-system/deactivate-continuous-ignition": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.deactivateContinuousIgnition(input.__selfId);
  },
  "POST /api/engine-control-system/hold-thrust-in-flight": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    commanded: z.number()
    });
    const input = schema.parse(body);
    return await service.holdThrustInFlight(input.__selfId, input.commanded);
  },
  "POST /api/engine-control-system/enable-thrust-reverser": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enableThrustReverser(input.__selfId);
  },
  "POST /api/engine-control-system/disable-thrust-reverser": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.disableThrustReverser(input.__selfId);
  },
  "POST /api/engine-control-system/substitute-modelled-value": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    modelledSpeed: z.number()
    });
    const input = schema.parse(body);
    return await service.substituteModelledValue(input.__selfId, input.modelledSpeed);
  },
  "POST /api/engine-control-system/resume-sensor-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resumeSensorReading(input.__selfId);
  },
  "POST /api/engine-control-system/transition-to-flight": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToFlight(input.__selfId);
  },
  "POST /api/engine-control-system/transition-to-ground": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToGround(input.__selfId);
  },
  "POST /api/engine-control-system-formalized/reject-reverser-if-airborne": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectReverserIfAirborne(input.__selfId);
  },
  "POST /api/engine-control-system-formalized/reject-overspeed-limit-on-unprotected-variant": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    detectedSpeed: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectOverspeedLimitOnUnprotectedVariant(input.__selfId, input.detectedSpeed);
  },
  "POST /api/engine-control-system-formalized/reject-ignition-deactivation-in-hazardous-phase": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectIgnitionDeactivationInHazardousPhase(input.__selfId);
  },
  "POST /api/engine-control-system-formalized/enforce-fuel-cut-on-speed-violation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceFuelCutOnSpeedViolation(input.__selfId);
  },
  "POST /api/engine-control-system-formalized/reject-thrust-command-pending-substitution": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    commanded: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectThrustCommandPendingSubstitution(input.__selfId, input.commanded);
  },
  "POST /api/engine-control-system-formalized/force-reverser-disable-before-flight": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.forceReverserDisableBeforeFlight(input.__selfId);
  },
  "POST /api/flight-phase-monitor/transition-to-flight": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToFlight(input.__selfId);
  },
  "POST /api/flight-phase-monitor/transition-to-ground": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToGround(input.__selfId);
  },
  "POST /api/flight-phase-monitor/update-weight-on-wheels": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    wow: z.boolean()
    });
    const input = schema.parse(body);
    return await service.updateWeightOnWheels(input.__selfId, input.wow);
  },
  "POST /api/ignition-thrust-controller/activate-continuous-ignition": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.activateContinuousIgnition(input.__selfId);
  },
  "POST /api/ignition-thrust-controller/deactivate-continuous-ignition": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.deactivateContinuousIgnition(input.__selfId);
  },
  "POST /api/ignition-thrust-controller/reject-ignition-deactivation-in-hazardous-phase": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectIgnitionDeactivationInHazardousPhase(input.__selfId);
  },
  "POST /api/ignition-thrust-controller/hold-thrust-in-flight": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    commanded: z.number()
    });
    const input = schema.parse(body);
    return await service.holdThrustInFlight(input.__selfId, input.commanded);
  },
  "POST /api/ignition-thrust-controller/reject-thrust-command-pending-substitution": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    commanded: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectThrustCommandPendingSubstitution(input.__selfId, input.commanded);
  },
  "POST /api/ignition-thrust-controller/enable-thrust-reverser": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enableThrustReverser(input.__selfId);
  },
  "POST /api/ignition-thrust-controller/disable-thrust-reverser": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.disableThrustReverser(input.__selfId);
  },
  "POST /api/ignition-thrust-controller/reject-reverser-if-airborne": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectReverserIfAirborne(input.__selfId);
  },
  "POST /api/ignition-thrust-controller/force-reverser-disable-before-flight": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.forceReverserDisableBeforeFlight(input.__selfId);
  },
  "POST /api/ignition-thrust-controller/receive-flight-phase-update": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    inFlight: z.boolean()
    });
    const input = schema.parse(body);
    return await service.receiveFlightPhaseUpdate(input.__selfId, input.inFlight);
  },
  "POST /api/ignition-thrust-controller/receive-sensor-fault-status": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    faultActive: z.boolean(),
    substituted: z.boolean()
    });
    const input = schema.parse(body);
    return await service.receiveSensorFaultStatus(input.__selfId, input.faultActive, input.substituted);
  },
  "POST /api/overspeed-protection-unit/limit-fuel-on-overspeed": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    detectedSpeed: z.number()
    });
    const input = schema.parse(body);
    return await service.limitFuelOnOverspeed(input.__selfId, input.detectedSpeed);
  },
  "POST /api/overspeed-protection-unit/reject-overspeed-limit-on-unprotected-variant": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    detectedSpeed: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectOverspeedLimitOnUnprotectedVariant(input.__selfId, input.detectedSpeed);
  },
  "POST /api/overspeed-protection-unit/enforce-fuel-cut-on-speed-violation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceFuelCutOnSpeedViolation(input.__selfId);
  },
  "POST /api/overspeed-protection-unit/receive-effective-speed": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    speed: z.number()
    });
    const input = schema.parse(body);
    return await service.receiveEffectiveSpeed(input.__selfId, input.speed);
  },
  "POST /api/sensor-fault-manager/substitute-modelled-value": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    modelledSpeed: z.number()
    });
    const input = schema.parse(body);
    return await service.substituteModelledValue(input.__selfId, input.modelledSpeed);
  },
  "POST /api/sensor-fault-manager/resume-sensor-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resumeSensorReading(input.__selfId);
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