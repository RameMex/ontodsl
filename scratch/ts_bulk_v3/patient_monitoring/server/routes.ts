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
  "POST /api/alarm-manager/raise-threshold-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    latencySeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseThresholdAlarm(input.__selfId, input.latencySeconds);
  },
  "POST /api/alarm-manager/raise-alarm-with-latency-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    latencySeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseAlarmWithLatencyFault(input.__selfId, input.latencySeconds);
  },
  "POST /api/alarm-manager/silence-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.silenceAlarm(input.__selfId);
  },
  "POST /api/alarm-manager/auto-rearm-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    elapsedSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.autoRearmAlarm(input.__selfId, input.elapsedSeconds);
  },
  "POST /api/alarm-manager/clear-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearAlarm(input.__selfId);
  },
  "POST /api/alarm-manager/raise-sensor-disconnect-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.raiseSensorDisconnectAlarm(input.__selfId);
  },
  "POST /api/alarm-manager/clear-sensor-disconnect-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearSensorDisconnectAlarm(input.__selfId);
  },
  "POST /api/display-controller/update-display": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    valueBpm: z.number()
    });
    const input = schema.parse(body);
    return await service.updateDisplay(input.__selfId, input.valueBpm);
  },
  "POST /api/display-controller/blank-display": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.blankDisplay(input.__selfId);
  },
  "POST /api/display-controller/restore-display": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    valueBpm: z.number()
    });
    const input = schema.parse(body);
    return await service.restoreDisplay(input.__selfId, input.valueBpm);
  },
  "POST /api/display-controller/configure-thresholds": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    lowBpm: z.number(),
    highBpm: z.number()
    });
    const input = schema.parse(body);
    return await service.configureThresholds(input.__selfId, input.lowBpm, input.highBpm);
  },
  "POST /api/ecg-sensor-interface/accept-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    valueBpm: z.number()
    });
    const input = schema.parse(body);
    return await service.acceptReading(input.__selfId, input.valueBpm);
  },
  "POST /api/ecg-sensor-interface/reject-implausible-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    valueBpm: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectImplausibleReading(input.__selfId, input.valueBpm);
  },
  "POST /api/ecg-sensor-interface/record-signal-absence": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    absentSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.recordSignalAbsence(input.__selfId, input.absentSeconds);
  },
  "POST /api/ecg-sensor-interface/declare-sensor-disconnected": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    absentSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.declareSensorDisconnected(input.__selfId, input.absentSeconds);
  },
  "POST /api/ecg-sensor-interface/restore-sensor-connection": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.restoreSensorConnection(input.__selfId);
  },
  "POST /api/fault-logger/log-latency-fault": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    description: z.string(),
    timestampMs: z.number().int()
    });
    const input = schema.parse(body);
    return await service.logLatencyFault(input.__selfId, input.description, input.timestampMs);
  },
  "POST /api/vital-signs-monitor-system/accept-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    valueBpm: z.number()
    });
    const input = schema.parse(body);
    return await service.acceptReading(input.__selfId, input.valueBpm);
  },
  "POST /api/vital-signs-monitor-system/reject-implausible-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    valueBpm: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectImplausibleReading(input.__selfId, input.valueBpm);
  },
  "POST /api/vital-signs-monitor-system/raise-threshold-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    valueBpm: z.number(),
    latencySeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseThresholdAlarm(input.__selfId, input.valueBpm, input.latencySeconds);
  },
  "POST /api/vital-signs-monitor-system/silence-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.silenceAlarm(input.__selfId);
  },
  "POST /api/vital-signs-monitor-system/auto-rearm-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    elapsedSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.autoRearmAlarm(input.__selfId, input.elapsedSeconds);
  },
  "POST /api/vital-signs-monitor-system/clear-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearAlarm(input.__selfId);
  },
  "POST /api/vital-signs-monitor-system/record-signal-absence": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    absentSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.recordSignalAbsence(input.__selfId, input.absentSeconds);
  },
  "POST /api/vital-signs-monitor-system/raise-sensor-disconnect-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    absentSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseSensorDisconnectAlarm(input.__selfId, input.absentSeconds);
  },
  "POST /api/vital-signs-monitor-system/resume-after-reconnect": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resumeAfterReconnect(input.__selfId);
  },
  "POST /api/vital-signs-monitor-system/configure-thresholds": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    lowBpm: z.number(),
    highBpm: z.number()
    });
    const input = schema.parse(body);
    return await service.configureThresholds(input.__selfId, input.lowBpm, input.highBpm);
  },
  "POST /api/vital-signs-monitor-system-formalized/guard-implausible-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    valueBpm: z.number()
    });
    const input = schema.parse(body);
    return await service.guardImplausibleReading(input.__selfId, input.valueBpm);
  },
  "POST /api/vital-signs-monitor-system-formalized/enforce-alarm-latency-ceiling": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestedLatencySeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceAlarmLatencyCeiling(input.__selfId, input.requestedLatencySeconds);
  },
  "POST /api/vital-signs-monitor-system-formalized/enforce-silence-ceiling": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    elapsedSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceSilenceCeiling(input.__selfId, input.elapsedSeconds);
  },
  "POST /api/vital-signs-monitor-system-formalized/enforce-disconnect-timeout": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    absentSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceDisconnectTimeout(input.__selfId, input.absentSeconds);
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