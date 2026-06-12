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
  "POST /api/pedestrian-module/register-pedestrian-request": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.registerPedestrianRequest(input.__selfId);
  },
  "POST /api/pedestrian-module/grant-walk": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.grantWalk(input.__selfId);
  },
  "POST /api/pedestrian-module/clear-walk": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearWalk(input.__selfId);
  },
  "POST /api/pedestrian-module/start-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.startSystem(input.__selfId);
  },
  "POST /api/pedestrian-module/stop-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.stopSystem(input.__selfId);
  },
  "POST /api/phase-manager/start-normal-phase": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    p: z.string()
    });
    const input = schema.parse(body);
    return await service.startNormalPhase(input.__selfId, input.p);
  },
  "POST /api/phase-manager/transition-to-yellow": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToYellow(input.__selfId);
  },
  "POST /api/phase-manager/transition-to-red": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToRed(input.__selfId);
  },
  "POST /api/phase-manager/complete-all-red-dwell": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.completeAllRedDwell(input.__selfId);
  },
  "POST /api/phase-manager/emergency-all-red": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.emergencyAllRed(input.__selfId);
  },
  "POST /api/phase-manager/start-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.startSystem(input.__selfId);
  },
  "POST /api/phase-manager/stop-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.stopSystem(input.__selfId);
  },
  "POST /api/safety-monitor/emergency-preemption": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.emergencyPreemption(input.__selfId);
  },
  "POST /api/safety-monitor/clear-preemption": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearPreemption(input.__selfId);
  },
  "POST /api/safety-monitor/advance-preemption-timer": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    dt: z.number()
    });
    const input = schema.parse(body);
    return await service.advancePreemptionTimer(input.__selfId, input.dt);
  },
  "POST /api/safety-monitor/start-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.startSystem(input.__selfId);
  },
  "POST /api/safety-monitor/stop-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.stopSystem(input.__selfId);
  },
  "POST /api/timer-service/tick-elapsed-timers": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    dt: z.number()
    });
    const input = schema.parse(body);
    return await service.tickElapsedTimers(input.__selfId, input.dt);
  },
  "POST /api/timer-service/reset-yellow-timer": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetYellowTimer(input.__selfId);
  },
  "POST /api/timer-service/reset-yellow-timer-for-red": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetYellowTimerForRed(input.__selfId);
  },
  "POST /api/timer-service/start-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.startSystem(input.__selfId);
  },
  "POST /api/timer-service/stop-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.stopSystem(input.__selfId);
  },
  "POST /api/traffic-light-system/start-normal-phase": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    p: z.string()
    });
    const input = schema.parse(body);
    return await service.startNormalPhase(input.__selfId, input.p);
  },
  "POST /api/traffic-light-system/transition-to-yellow": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToYellow(input.__selfId);
  },
  "POST /api/traffic-light-system/transition-to-red": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToRed(input.__selfId);
  },
  "POST /api/traffic-light-system/emergency-preemption": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.emergencyPreemption(input.__selfId);
  },
  "POST /api/traffic-light-system/clear-preemption": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearPreemption(input.__selfId);
  },
  "POST /api/traffic-light-system/register-pedestrian-request": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.registerPedestrianRequest(input.__selfId);
  },
  "POST /api/traffic-light-system/grant-walk": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.grantWalk(input.__selfId);
  },
  "POST /api/traffic-light-system/clear-walk": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearWalk(input.__selfId);
  },
  "POST /api/traffic-light-system/tick-elapsed-timers": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    dt: z.number()
    });
    const input = schema.parse(body);
    return await service.tickElapsedTimers(input.__selfId, input.dt);
  },
  "POST /api/traffic-light-system/start-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.startSystem(input.__selfId);
  },
  "POST /api/traffic-light-system/stop-system": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.stopSystem(input.__selfId);
  },
  "POST /api/traffic-light-system-formalized/reject-conflicting-phase": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    p: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectConflictingPhase(input.__selfId, input.p);
  },
  "POST /api/traffic-light-system-formalized/reject-transition-to-yellow-no-green": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectTransitionToYellowNoGreen(input.__selfId);
  },
  "POST /api/traffic-light-system-formalized/reject-duplicate-preemption": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDuplicatePreemption(input.__selfId);
  },
  "POST /api/traffic-light-system-formalized/reject-duplicate-pedestrian-request": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDuplicatePedestrianRequest(input.__selfId);
  },
  "POST /api/traffic-light-system-formalized/reject-walk-conflicting-green": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectWalkConflictingGreen(input.__selfId);
  },
  "POST /api/traffic-light-system-formalized/reject-system-already-running": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectSystemAlreadyRunning(input.__selfId);
  },
  "POST /api/traffic-light-system-formalized/reject-invalid-tick-dt": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    dt: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectInvalidTickDt(input.__selfId, input.dt);
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