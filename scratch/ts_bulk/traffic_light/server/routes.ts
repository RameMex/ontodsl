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
    approachAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.receiveButtonPress(input.approachAxis);
  },
  "POST /api/pedestrian-controller/grant-walk": async (body) => {
    const schema = z.object({
    nsState: z.string(),
    ewState: z.string()
    });
    const input = schema.parse(body);
    return await service.grantWalk(input.nsState, input.ewState);
  },
  "POST /api/pedestrian-controller/revoke-walk": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.revokeWalk();
  },
  "POST /api/pedestrian-controller/reject-conflicting-walk": async (body) => {
    const schema = z.object({
    nsState: z.string(),
    ewState: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectConflictingWalk(input.nsState, input.ewState);
  },
  "POST /api/pedestrian-controller/clear-walk-on-preemption": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearWalkOnPreemption();
  },
  "POST /api/phase-scheduler/activate-phase": async (body) => {
    const schema = z.object({
    phaseId: z.string(),
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.activatePhase(input.phaseId, input.greenAxis);
  },
  "POST /api/phase-scheduler/issue-yellow-command": async (body) => {
    const schema = z.object({
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.issueYellowCommand(input.axis);
  },
  "POST /api/phase-scheduler/issue-red-after-yellow": async (body) => {
    const schema = z.object({
    axis: z.string(),
    elapsedYellowSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.issueRedAfterYellow(input.axis, input.elapsedYellowSeconds);
  },
  "POST /api/phase-scheduler/complete-all-red-dwell": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.completeAllRedDwell();
  },
  "POST /api/phase-scheduler/enter-preemption-all-red": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.enterPreemptionAllRed();
  },
  "POST /api/phase-scheduler/tick-elapsed": async (body) => {
    const schema = z.object({
    deltaNs: z.number(),
    deltaEw: z.number()
    });
    const input = schema.parse(body);
    return await service.tickElapsed(input.deltaNs, input.deltaEw);
  },
  "POST /api/preemption-controller/handle-preemption-sensor": async (body) => {
    const schema = z.object({
    responseTimeSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.handlePreemptionSensor(input.responseTimeSeconds);
  },
  "POST /api/preemption-controller/handle-preemption-clear": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.handlePreemptionClear();
  },
  "POST /api/preemption-controller/reject-late-response": async (body) => {
    const schema = z.object({
    responseTimeSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectLateResponse(input.responseTimeSeconds);
  },
  "POST /api/signal-head-controller/set-axis-green": async (body) => {
    const schema = z.object({
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.setAxisGreen(input.greenAxis);
  },
  "POST /api/signal-head-controller/set-axis-yellow": async (body) => {
    const schema = z.object({
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.setAxisYellow(input.axis);
  },
  "POST /api/signal-head-controller/set-axis-red": async (body) => {
    const schema = z.object({
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.setAxisRed(input.axis);
  },
  "POST /api/signal-head-controller/set-all-red": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.setAllRed();
  },
  "POST /api/traffic-light-controller-system/start-phase": async (body) => {
    const schema = z.object({
    phaseId: z.string(),
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.startPhase(input.phaseId, input.greenAxis);
  },
  "POST /api/traffic-light-controller-system/begin-yellow": async (body) => {
    const schema = z.object({
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.beginYellow(input.axis);
  },
  "POST /api/traffic-light-controller-system/end-yellow-go-red": async (body) => {
    const schema = z.object({
    axis: z.string(),
    elapsedYellowSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.endYellowGoRed(input.axis, input.elapsedYellowSeconds);
  },
  "POST /api/traffic-light-controller-system/command-all-red-preemption": async (body) => {
    const schema = z.object({
    responseTimeSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.commandAllRedPreemption(input.responseTimeSeconds);
  },
  "POST /api/traffic-light-controller-system/clear-preemption": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearPreemption();
  },
  "POST /api/traffic-light-controller-system/register-pedestrian-request": async (body) => {
    const schema = z.object({
    approachAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.registerPedestrianRequest(input.approachAxis);
  },
  "POST /api/traffic-light-controller-system/activate-walk": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.activateWalk();
  },
  "POST /api/traffic-light-controller-system/deactivate-walk": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.deactivateWalk();
  },
  "POST /api/traffic-light-controller-system/clock-tick": async (body) => {
    const schema = z.object({
    deltaNs: z.number(),
    deltaEw: z.number()
    });
    const input = schema.parse(body);
    return await service.clockTick(input.deltaNs, input.deltaEw);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-direct-green-to-red": async (body) => {
    const schema = z.object({
    axis: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDirectGreenToRed(input.axis);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-premature-yellow-to-red": async (body) => {
    const schema = z.object({
    axis: z.string(),
    elapsedSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectPrematureYellowToRed(input.axis, input.elapsedSeconds);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-conflicting-green": async (body) => {
    const schema = z.object({
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectConflictingGreen(input.greenAxis);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-unsafe-walk-activation": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectUnsafeWalkActivation();
  },
  "POST /api/traffic-light-controller-system-formalized/reject-late-preemption-response": async (body) => {
    const schema = z.object({
    responseTimeSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectLatePreemptionResponse(input.responseTimeSeconds);
  },
  "POST /api/traffic-light-controller-system-formalized/reject-phase-start-during-preemption": async (body) => {
    const schema = z.object({
    phaseId: z.string(),
    greenAxis: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectPhaseStartDuringPreemption(input.phaseId, input.greenAxis);
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