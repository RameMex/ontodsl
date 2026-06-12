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
    vitalType: z.string(),
    actualValue: z.number(),
    crossTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseThresholdAlarm(input.__selfId, input.vitalType, input.actualValue, input.crossTimestamp);
  },
  "POST /api/alarm-manager/raise-disconnect-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    detectedAt: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseDisconnectAlarm(input.__selfId, input.detectedAt);
  },
  "POST /api/alarm-manager/silence-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    silenceTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.silenceAlarm(input.__selfId, input.silenceTimestamp);
  },
  "POST /api/alarm-manager/auto-rearm-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    rearmTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.autoRearmAlarm(input.__selfId, input.rearmTimestamp);
  },
  "POST /api/alarm-manager/clear-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearAlarm(input.__selfId);
  },
  "POST /api/alarm-manager/configure-alarm-params": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    latencyMs: z.number(),
    rearmMs: z.number()
    });
    const input = schema.parse(body);
    return await service.configureAlarmParams(input.__selfId, input.latencyMs, input.rearmMs);
  },
  "POST /api/alarm-manager/reset-alarm-manager": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetAlarmManager(input.__selfId);
  },
  "POST /api/bedside-monitor-system-formalized/formal-configure-plausibility-bounds": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    lowerBound: z.number(),
    upperBound: z.number(),
    alarmLatencyMs: z.number(),
    signalLossMs: z.number(),
    silenceRearmMs: z.number()
    });
    const input = schema.parse(body);
    return await service.formalConfigurePlausibilityBounds(input.__selfId, input.lowerBound, input.upperBound, input.alarmLatencyMs, input.signalLossMs, input.silenceRearmMs);
  },
  "POST /api/bedside-monitor-system-formalized/formal-reject-implausible-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.formalRejectImplausibleReading(input.__selfId, input.newValue, input.timestamp);
  },
  "POST /api/bedside-monitor-system-formalized/formal-reject-non-positive-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.formalRejectNonPositiveReading(input.__selfId, input.newValue, input.timestamp);
  },
  "POST /api/bedside-monitor-system-formalized/formal-enforce-alarm-latency": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    vitalType: z.string(),
    actualValue: z.number(),
    crossingTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.formalEnforceAlarmLatency(input.__selfId, input.vitalType, input.actualValue, input.crossingTimestamp);
  },
  "POST /api/bedside-monitor-system-formalized/formal-enforce-sensor-disconnect": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    signalGapDetectedAt: z.number()
    });
    const input = schema.parse(body);
    return await service.formalEnforceSensorDisconnect(input.__selfId, input.signalGapDetectedAt);
  },
  "POST /api/bedside-monitor-system-formalized/formal-enforce-auto-rearm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    rearmTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.formalEnforceAutoRearm(input.__selfId, input.rearmTimestamp);
  },
  "POST /api/bedside-monitor-system-requirements/deliver-heart-rate-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.deliverHeartRateReading(input.__selfId, input.newValue, input.timestamp);
  },
  "POST /api/bedside-monitor-system-requirements/raise-threshold-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    vitalType: z.string(),
    actualValue: z.number(),
    thresholdUpper: z.number(),
    thresholdLower: z.number(),
    crossTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseThresholdAlarm(input.__selfId, input.vitalType, input.actualValue, input.thresholdUpper, input.thresholdLower, input.crossTimestamp);
  },
  "POST /api/bedside-monitor-system-requirements/detect-sensor-disconnect": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    lossDetectedAt: z.number()
    });
    const input = schema.parse(body);
    return await service.detectSensorDisconnect(input.__selfId, input.lossDetectedAt);
  },
  "POST /api/bedside-monitor-system-requirements/silence-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    silenceTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.silenceAlarm(input.__selfId, input.silenceTimestamp);
  },
  "POST /api/bedside-monitor-system-requirements/auto-rearm-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    rearmTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.autoRearmAlarm(input.__selfId, input.rearmTimestamp);
  },
  "POST /api/bedside-monitor-system-requirements/clear-alarm": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearAlarm(input.__selfId);
  },
  "POST /api/bedside-monitor-system-requirements/restore-sensor-connection": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.restoreSensorConnection(input.__selfId, input.newValue, input.timestamp);
  },
  "POST /api/bedside-monitor-system-requirements/set-alarm-thresholds": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    implausibleLower: z.number(),
    implausibleUpper: z.number(),
    alarmLatencyMs: z.number(),
    signalLossMs: z.number(),
    silenceRearmMs: z.number()
    });
    const input = schema.parse(body);
    return await service.setAlarmThresholds(input.__selfId, input.implausibleLower, input.implausibleUpper, input.alarmLatencyMs, input.signalLossMs, input.silenceRearmMs);
  },
  "POST /api/display-renderer/update-heart-rate-display": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newHeartRate: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.updateHeartRateDisplay(input.__selfId, input.newHeartRate, input.timestamp);
  },
  "POST /api/display-renderer/update-alarm-display": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    newAlarmActive: z.boolean(),
    newAlarmType: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.updateAlarmDisplay(input.__selfId, input.newAlarmActive, input.newAlarmType, input.timestamp);
  },
  "POST /api/display-renderer/reset-display": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetDisplay(input.__selfId);
  },
  "POST /api/ecg-sensor/acquire-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    value: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.acquireReading(input.__selfId, input.value, input.timestamp);
  },
  "POST /api/ecg-sensor/advance-signal-loss-timer": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    elapsedMs: z.number()
    });
    const input = schema.parse(body);
    return await service.advanceSignalLossTimer(input.__selfId, input.elapsedMs);
  },
  "POST /api/ecg-sensor/restore-connection": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    value: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.restoreConnection(input.__selfId, input.value, input.timestamp);
  },
  "POST /api/ecg-sensor/reset-sensor": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetSensor(input.__selfId);
  },
  "POST /api/heart-rate-processor/process-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    rawValue: z.number(),
    readingTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.processReading(input.__selfId, input.rawValue, input.readingTimestamp);
  },
  "POST /api/heart-rate-processor/configure-bounds": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    lower: z.number(),
    upper: z.number()
    });
    const input = schema.parse(body);
    return await service.configureBounds(input.__selfId, input.lower, input.upper);
  },
  "POST /api/heart-rate-processor/reject-implausible-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    rawValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectImplausibleReading(input.__selfId, input.rawValue, input.timestamp);
  },
  "POST /api/heart-rate-processor/reset-processor": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetProcessor(input.__selfId);
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