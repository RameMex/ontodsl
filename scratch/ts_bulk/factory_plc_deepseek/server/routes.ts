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
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.detectEStopSignal(input.timestampMs);
  },
  "POST /api/estop-interrupt-handler/clear-estop-signal": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearEStopSignal();
  },
  "POST /api/failsafe-state-manager/enter-failsafe-from-estop": async (body) => {
    const schema = z.object({
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.enterFailsafeFromEStop(input.timestampMs);
  },
  "POST /api/failsafe-state-manager/enter-failsafe-from-sensor-fault": async (body) => {
    const schema = z.object({
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.enterFailsafeFromSensorFault(input.timestampMs);
  },
  "POST /api/failsafe-state-manager/reset-failsafe-mode": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetFailsafeMode();
  },
  "POST /api/failsafe-state-manager/reject-motion-command": async (body) => {
    const schema = z.object({
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectMotionCommand(input.commandId, input.commandType);
  },
  "POST /api/failsafe-state-manager/accept-motion-command": async (body) => {
    const schema = z.object({
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.acceptMotionCommand(input.commandId, input.commandType);
  },
  "POST /api/manual-reset-controller/receive-reset-request": async (body) => {
    const schema = z.object({
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.receiveResetRequest(input.timestampMs);
  },
  "POST /api/manual-reset-controller/consume-reset-request": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.consumeResetRequest();
  },
  "POST /api/motion-output-controller/de-energize-all-outputs": async (body) => {
    const schema = z.object({
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.deEnergizeAllOutputs(input.timestampMs);
  },
  "POST /api/motion-output-controller/re-energize-all-outputs": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.reEnergizeAllOutputs();
  },
  "POST /api/motion-output-controller/issue-motion-command": async (body) => {
    const schema = z.object({
    outputId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.issueMotionCommand(input.outputId, input.commandType);
  },
  "POST /api/safety-controller-formalized/reject-motion-command-during-failsafe": async (body) => {
    const schema = z.object({
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectMotionCommandDuringFailsafe(input.commandId, input.commandType);
  },
  "POST /api/safety-controller-formalized/enforce-estop-latch": async (body) => {
    const schema = z.object({
    activationTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceEStopLatch(input.activationTimestampMs);
  },
  "POST /api/safety-controller-formalized/auto-recover-from-sensor-fault": async (body) => {
    const schema = z.object({
    recoveryTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.autoRecoverFromSensorFault(input.recoveryTimestampMs);
  },
  "POST /api/safety-controller-formalized/transition-to-failsafe-due-to-sensor-fault": async (body) => {
    const schema = z.object({
    sensorId: z.string(),
    faultTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.transitionToFailsafeDueToSensorFault(input.sensorId, input.faultTimestampMs);
  },
  "POST /api/safety-controller-system/activate-estop": async (body) => {
    const schema = z.object({
    activationTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.activateEStop(input.activationTimestampMs);
  },
  "POST /api/safety-controller-system/manual-reset": async (body) => {
    const schema = z.object({
    resetTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.manualReset(input.resetTimestampMs);
  },
  "POST /api/safety-controller-system/detect-sensor-fault": async (body) => {
    const schema = z.object({
    faultTimestampMs: z.number(),
    faultReported: z.boolean()
    });
    const input = schema.parse(body);
    return await service.detectSensorFault(input.faultTimestampMs, input.faultReported);
  },
  "POST /api/safety-controller-system/sensor-fault-recovery": async (body) => {
    const schema = z.object({
    recoveryTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.sensorFaultRecovery(input.recoveryTimestampMs);
  },
  "POST /api/safety-controller-system/reject-motion-command": async (body) => {
    const schema = z.object({
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectMotionCommand(input.commandId, input.commandType);
  },
  "POST /api/safety-controller-system/accept-motion-command": async (body) => {
    const schema = z.object({
    commandId: z.string(),
    commandType: z.string()
    });
    const input = schema.parse(body);
    return await service.acceptMotionCommand(input.commandId, input.commandType);
  },
  "POST /api/safety-sensor-manager/detect-sensor-fault": async (body) => {
    const schema = z.object({
    sensorId: z.string(),
    faultTimestampMs: z.number(),
    faultReported: z.boolean()
    });
    const input = schema.parse(body);
    return await service.detectSensorFault(input.sensorId, input.faultTimestampMs, input.faultReported);
  },
  "POST /api/safety-sensor-manager/clear-sensor-fault": async (body) => {
    const schema = z.object({
    recoveryTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.clearSensorFault(input.recoveryTimestampMs);
  },
  "POST /api/scan-cycle-synchronizer/start-next-cycle": async (body) => {
    const schema = z.object({
    cycleId: z.string(),
    startTimestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.startNextCycle(input.cycleId, input.startTimestampMs);
  },
  "POST /api/scan-cycle-synchronizer/record-fault-in-cycle": async (body) => {
    const schema = z.object({
    timestampMs: z.number()
    });
    const input = schema.parse(body);
    return await service.recordFaultInCycle(input.timestampMs);
  },
  "POST /api/scan-cycle-synchronizer/complete-cycle": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.completeCycle();
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