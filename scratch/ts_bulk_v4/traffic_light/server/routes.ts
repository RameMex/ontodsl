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
  "POST /api/pedestrian-controller/receive-button-press": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    approachAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.receiveButtonPress(input.__selfId, input.approachAxis);
  },
  "POST /api/pedestrian-controller/grant-walk": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    nsState: z.string(),
    ewState: z.string()
    });
    const input = schema.parse(body);
    return await service.grantWalk(input.__selfId, input.nsState, input.ewState);
  },
  "POST /api/pedestrian-controller/revoke-walk": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.revokeWalk(input.__selfId);
  },
  "POST /api/pedestrian-controller/reject-conflicting-walk": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    nsState: z.string(),
    ewState: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectConflictingWalk(input.__selfId, input.nsState, input.ewState);
  },
  "POST /api/pedestrian-controller/clear-walk-on-preemption": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearWalkOnPreemption(input.__selfId);
  },
  "POST /api/phase-scheduler/activate-phase": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    phaseId: z.string(),
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.activatePhase(input.__selfId, input.phaseId, input.greenAxis);
  },
  "POST /api/phase-scheduler/issue-yellow-command": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.issueYellowCommand(input.__selfId, input.axis);
  },
  "POST /api/phase-scheduler/issue-red-after-yellow": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    axis: z.string(),
    elapsedYellowSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.issueRedAfterYellow(input.__selfId, input.axis, input.elapsedYellowSeconds);
  },
  "POST /api/phase-scheduler/complete-all-red-dwell": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.completeAllRedDwell(input.__selfId);
  },
  "POST /api/phase-scheduler/enter-preemption-all-red": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enterPreemptionAllRed(input.__selfId);
  },
  "POST /api/phase-scheduler/tick-elapsed": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    deltaNs: z.number(),
    deltaEw: z.number()
    });
    const input = schema.parse(body);
    return await service.tickElapsed(input.__selfId, input.deltaNs, input.deltaEw);
  },
  "POST /api/preemption-controller/handle-preemption-sensor": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    responseTimeSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.handlePreemptionSensor(input.__selfId, input.responseTimeSeconds);
  },
  "POST /api/preemption-controller/handle-preemption-clear": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.handlePreemptionClear(input.__selfId);
  },
  "POST /api/preemption-controller/reject-late-response": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    responseTimeSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectLateResponse(input.__selfId, input.responseTimeSeconds);
  },
  "POST /api/signal-head-controller/set-axis-green": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.setAxisGreen(input.__selfId, input.greenAxis);
  },
  "POST /api/signal-head-controller/set-axis-yellow": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.setAxisYellow(input.__selfId, input.axis);
  },
  "POST /api/signal-head-controller/set-axis-red": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.setAxisRed(input.__selfId, input.axis);
  },
  "POST /api/signal-head-controller/set-all-red": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.setAllRed(input.__selfId);
  },
  "POST /api/traffic-light-controller-system/start-phase": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    phaseId: z.string(),
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.startPhase(input.__selfId, input.phaseId, input.greenAxis);
  },
  "POST /api/traffic-light-controller-system/begin-yellow": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.beginYellow(input.__selfId, input.axis);
  },
  "POST /api/traffic-light-controller-system/end-yellow-go-red": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    axis: z.string(),
    elapsedYellowSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.endYellowGoRed(input.__selfId, input.axis, input.elapsedYellowSeconds);
  },
  "POST /api/traffic-light-controller-system/command-all-red-preemption": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    responseTimeSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.commandAllRedPreemption(input.__selfId, input.responseTimeSeconds);
  },
  "POST /api/traffic-light-controller-system/clear-preemption": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearPreemption(input.__selfId);
  },
  "POST /api/traffic-light-controller-system/register-pedestrian-request": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    approachAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.registerPedestrianRequest(input.__selfId, input.approachAxis);
  },
  "POST /api/traffic-light-controller-system/activate-walk": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.activateWalk(input.__selfId);
  },
  "POST /api/traffic-light-controller-system/deactivate-walk": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.deactivateWalk(input.__selfId);
  },
  "POST /api/traffic-light-controller-system/clock-tick": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    deltaNs: z.number(),
    deltaEw: z.number()
    });
    const input = schema.parse(body);
    return await service.clockTick(input.__selfId, input.deltaNs, input.deltaEw);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-direct-green-to-red": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDirectGreenToRed(input.__selfId, input.axis);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-premature-yellow-to-red": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    axis: z.string(),
    elapsedSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectPrematureYellowToRed(input.__selfId, input.axis, input.elapsedSeconds);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-conflicting-green": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectConflictingGreen(input.__selfId, input.greenAxis);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-unsafe-walk-activation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectUnsafeWalkActivation(input.__selfId);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-late-preemption-response": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    responseTimeSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectLatePreemptionResponse(input.__selfId, input.responseTimeSeconds);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-phase-start-during-preemption": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    phaseId: z.string(),
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectPhaseStartDuringPreemption(input.__selfId, input.phaseId, input.greenAxis);
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