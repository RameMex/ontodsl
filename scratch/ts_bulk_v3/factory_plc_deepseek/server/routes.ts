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
  "POST /api/estop-interrupt-handler/detect-estop-signal": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.detectEStopSignal(input.__selfId, input.timestampMs);
  },
  "POST /api/estop-interrupt-handler/clear-estop-signal": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearEStopSignal(input.__selfId);
  },
  "POST /api/failsafe-state-manager/enter-failsafe-from-estop": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.enterFailsafeFromEStop(input.__selfId, input.timestampMs);
  },
  "POST /api/failsafe-state-manager/enter-failsafe-from-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.enterFailsafeFromSensorFault(input.__selfId, input.timestampMs);
  },
  "POST /api/failsafe-state-manager/reset-failsafe-mode": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetFailsafeMode(input.__selfId);
  },
  "POST /api/failsafe-state-manager/reject-motion-command": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectMotionCommand(input.__selfId, input.commandId, input.commandType);
  },
  "POST /api/failsafe-state-manager/accept-motion-command": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.acceptMotionCommand(input.__selfId, input.commandId, input.commandType);
  },
  "POST /api/manual-reset-controller/receive-reset-request": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.receiveResetRequest(input.__selfId, input.timestampMs);
  },
  "POST /api/manual-reset-controller/consume-reset-request": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.consumeResetRequest(input.__selfId);
  },
  "POST /api/motion-output-controller/de-energize-all-outputs": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.deEnergizeAllOutputs(input.__selfId, input.timestampMs);
  },
  "POST /api/motion-output-controller/re-energize-all-outputs": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.reEnergizeAllOutputs(input.__selfId);
  },
  "POST /api/motion-output-controller/issue-motion-command": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    outputId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.issueMotionCommand(input.__selfId, input.outputId, input.commandType);
  },
  "POST /api/safety-controller-formalized/reject-motion-command-during-failsafe": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectMotionCommandDuringFailsafe(input.__selfId, input.commandId, input.commandType);
  },
  "POST /api/safety-controller-formalized/enforce-estop-latch": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    activationTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceEStopLatch(input.__selfId, input.activationTimestampMs);
  },
  "POST /api/safety-controller-formalized/auto-recover-from-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    recoveryTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.autoRecoverFromSensorFault(input.__selfId, input.recoveryTimestampMs);
  },
  "POST /api/safety-controller-formalized/transition-to-failsafe-due-to-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    sensorId: z.string(),
    faultTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.transitionToFailsafeDueToSensorFault(input.__selfId, input.sensorId, input.faultTimestampMs);
  },
  "POST /api/safety-controller-system/activate-estop": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    activationTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.activateEStop(input.__selfId, input.activationTimestampMs);
  },
  "POST /api/safety-controller-system/manual-reset": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    resetTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.manualReset(input.__selfId, input.resetTimestampMs);
  },
  "POST /api/safety-controller-system/detect-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    faultTimestampMs: z.number(),
    faultReported: z.boolean()
    });
    const input = schema.parse(body);
    return await service.detectSensorFault(input.__selfId, input.faultTimestampMs, input.faultReported);
  },
  "POST /api/safety-controller-system/sensor-fault-recovery": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    recoveryTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.sensorFaultRecovery(input.__selfId, input.recoveryTimestampMs);
  },
  "POST /api/safety-controller-system/reject-motion-command": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectMotionCommand(input.__selfId, input.commandId, input.commandType);
  },
  "POST /api/safety-controller-system/accept-motion-command": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.acceptMotionCommand(input.__selfId, input.commandId, input.commandType);
  },
  "POST /api/safety-sensor-manager/detect-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    sensorId: z.string(),
    faultTimestampMs: z.number(),
    faultReported: z.boolean()
    });
    const input = schema.parse(body);
    return await service.detectSensorFault(input.__selfId, input.sensorId, input.faultTimestampMs, input.faultReported);
  },
  "POST /api/safety-sensor-manager/clear-sensor-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    recoveryTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.clearSensorFault(input.__selfId, input.recoveryTimestampMs);
  },
  "POST /api/scan-cycle-synchronizer/start-next-cycle": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    cycleId: z.string(),
    startTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.startNextCycle(input.__selfId, input.cycleId, input.startTimestampMs);
  },
  "POST /api/scan-cycle-synchronizer/record-fault-in-cycle": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.recordFaultInCycle(input.__selfId, input.timestampMs);
  },
  "POST /api/scan-cycle-synchronizer/complete-cycle": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.completeCycle(input.__selfId);
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