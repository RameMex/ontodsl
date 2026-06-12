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
    vitalType: z.string(),
    actualValue: z.number(),
    crossTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseThresholdAlarm(input.vitalType, input.actualValue, input.crossTimestamp);
  },
  "POST /api/alarm-manager/raise-disconnect-alarm": async (body) => {
    const schema = z.object({
    detectedAt: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseDisconnectAlarm(input.detectedAt);
  },
  "POST /api/alarm-manager/silence-alarm": async (body) => {
    const schema = z.object({
    silenceTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.silenceAlarm(input.silenceTimestamp);
  },
  "POST /api/alarm-manager/auto-rearm-alarm": async (body) => {
    const schema = z.object({
    rearmTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.autoRearmAlarm(input.rearmTimestamp);
  },
  "POST /api/alarm-manager/clear-alarm": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearAlarm();
  },
  "POST /api/alarm-manager/configure-alarm-params": async (body) => {
    const schema = z.object({
    latencyMs: z.number(),
    rearmMs: z.number()
    });
    const input = schema.parse(body);
    return await service.configureAlarmParams(input.latencyMs, input.rearmMs);
  },
  "POST /api/alarm-manager/reset-alarm-manager": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetAlarmManager();
  },
  "POST /api/bedside-monitor-system-formalized/formal-configure-plausibility-bounds": async (body) => {
    const schema = z.object({
    lowerBound: z.number(),
    upperBound: z.number(),
    alarmLatencyMs: z.number(),
    signalLossMs: z.number(),
    silenceRearmMs: z.number()
    });
    const input = schema.parse(body);
    return await service.formalConfigurePlausibilityBounds(input.lowerBound, input.upperBound, input.alarmLatencyMs, input.signalLossMs, input.silenceRearmMs);
  },
  "POST /api/bedside-monitor-system-formalized/formal-reject-implausible-reading": async (body) => {
    const schema = z.object({
    newValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.formalRejectImplausibleReading(input.newValue, input.timestamp);
  },
  "POST /api/bedside-monitor-system-formalized/formal-reject-non-positive-reading": async (body) => {
    const schema = z.object({
    newValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.formalRejectNonPositiveReading(input.newValue, input.timestamp);
  },
  "POST /api/bedside-monitor-system-formalized/formal-enforce-alarm-latency": async (body) => {
    const schema = z.object({
    vitalType: z.string(),
    actualValue: z.number(),
    crossingTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.formalEnforceAlarmLatency(input.vitalType, input.actualValue, input.crossingTimestamp);
  },
  "POST /api/bedside-monitor-system-formalized/formal-enforce-sensor-disconnect": async (body) => {
    const schema = z.object({
    signalGapDetectedAt: z.number()
    });
    const input = schema.parse(body);
    return await service.formalEnforceSensorDisconnect(input.signalGapDetectedAt);
  },
  "POST /api/bedside-monitor-system-formalized/formal-enforce-auto-rearm": async (body) => {
    const schema = z.object({
    rearmTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.formalEnforceAutoRearm(input.rearmTimestamp);
  },
  "POST /api/bedside-monitor-system-requirements/deliver-heart-rate-reading": async (body) => {
    const schema = z.object({
    newValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.deliverHeartRateReading(input.newValue, input.timestamp);
  },
  "POST /api/bedside-monitor-system-requirements/raise-threshold-alarm": async (body) => {
    const schema = z.object({
    vitalType: z.string(),
    actualValue: z.number(),
    thresholdUpper: z.number(),
    thresholdLower: z.number(),
    crossTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.raiseThresholdAlarm(input.vitalType, input.actualValue, input.thresholdUpper, input.thresholdLower, input.crossTimestamp);
  },
  "POST /api/bedside-monitor-system-requirements/detect-sensor-disconnect": async (body) => {
    const schema = z.object({
    lossDetectedAt: z.number()
    });
    const input = schema.parse(body);
    return await service.detectSensorDisconnect(input.lossDetectedAt);
  },
  "POST /api/bedside-monitor-system-requirements/silence-alarm": async (body) => {
    const schema = z.object({
    silenceTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.silenceAlarm(input.silenceTimestamp);
  },
  "POST /api/bedside-monitor-system-requirements/auto-rearm-alarm": async (body) => {
    const schema = z.object({
    rearmTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.autoRearmAlarm(input.rearmTimestamp);
  },
  "POST /api/bedside-monitor-system-requirements/clear-alarm": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearAlarm();
  },
  "POST /api/bedside-monitor-system-requirements/restore-sensor-connection": async (body) => {
    const schema = z.object({
    newValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.restoreSensorConnection(input.newValue, input.timestamp);
  },
  "POST /api/bedside-monitor-system-requirements/set-alarm-thresholds": async (body) => {
    const schema = z.object({
    implausibleLower: z.number(),
    implausibleUpper: z.number(),
    alarmLatencyMs: z.number(),
    signalLossMs: z.number(),
    silenceRearmMs: z.number()
    });
    const input = schema.parse(body);
    return await service.setAlarmThresholds(input.implausibleLower, input.implausibleUpper, input.alarmLatencyMs, input.signalLossMs, input.silenceRearmMs);
  },
  "POST /api/display-renderer/update-heart-rate-display": async (body) => {
    const schema = z.object({
    newHeartRate: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.updateHeartRateDisplay(input.newHeartRate, input.timestamp);
  },
  "POST /api/display-renderer/update-alarm-display": async (body) => {
    const schema = z.object({
    newAlarmActive: z.boolean(),
    newAlarmType: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.updateAlarmDisplay(input.newAlarmActive, input.newAlarmType, input.timestamp);
  },
  "POST /api/display-renderer/reset-display": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetDisplay();
  },
  "POST /api/ecg-sensor/acquire-reading": async (body) => {
    const schema = z.object({
    value: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.acquireReading(input.value, input.timestamp);
  },
  "POST /api/ecg-sensor/advance-signal-loss-timer": async (body) => {
    const schema = z.object({
    elapsedMs: z.number()
    });
    const input = schema.parse(body);
    return await service.advanceSignalLossTimer(input.elapsedMs);
  },
  "POST /api/ecg-sensor/restore-connection": async (body) => {
    const schema = z.object({
    value: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.restoreConnection(input.value, input.timestamp);
  },
  "POST /api/ecg-sensor/reset-sensor": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetSensor();
  },
  "POST /api/heart-rate-processor/process-reading": async (body) => {
    const schema = z.object({
    rawValue: z.number(),
    readingTimestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.processReading(input.rawValue, input.readingTimestamp);
  },
  "POST /api/heart-rate-processor/configure-bounds": async (body) => {
    const schema = z.object({
    lower: z.number(),
    upper: z.number()
    });
    const input = schema.parse(body);
    return await service.configureBounds(input.lower, input.upper);
  },
  "POST /api/heart-rate-processor/reject-implausible-reading": async (body) => {
    const schema = z.object({
    rawValue: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectImplausibleReading(input.rawValue, input.timestamp);
  },
  "POST /api/heart-rate-processor/reset-processor": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.resetProcessor();
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