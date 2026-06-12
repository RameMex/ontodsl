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
  "POST /api/audit-logger/write-entry": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    eventType: z.string(),
    payload: z.string(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.writeEntry(input.__selfId, input.eventType, input.payload, input.timestamp);
  },
  "POST /api/audit-logger/check-retention-limit": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.checkRetentionLimit(input.__selfId);
  },
  "POST /api/billing-engine/apply-increment": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    delta: z.number(),
    timestamp: z.number()
    });
    const input = schema.parse(body);
    return await service.applyIncrement(input.__selfId, input.delta, input.timestamp);
  },
  "POST /api/billing-engine/freeze-billing": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.freezeBilling(input.__selfId);
  },
  "POST /api/billing-engine/clear-freeze": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearFreeze(input.__selfId);
  },
  "POST /api/billing-engine/record-compensation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    adjustment: z.number()
    });
    const input = schema.parse(body);
    return await service.recordCompensation(input.__selfId, input.adjustment);
  },
  "POST /api/meter-billing-system/process-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    kwh: z.number(),
    tamperFlags: z.string()
    });
    const input = schema.parse(body);
    return await service.processReading(input.__selfId, input.kwh, input.tamperFlags);
  },
  "POST /api/meter-billing-system/detect-tamper": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    eventType: z.string(),
    description: z.string()
    });
    const input = schema.parse(body);
    return await service.detectTamper(input.__selfId, input.eventType, input.description);
  },
  "POST /api/meter-billing-system/clear-tamper": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    clearanceId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearTamper(input.__selfId, input.clearanceId);
  },
  "POST /api/meter-billing-system/apply-compensation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    adjustmentDelta: z.number()
    });
    const input = schema.parse(body);
    return await service.applyCompensation(input.__selfId, input.adjustmentDelta);
  },
  "POST /api/meter-billing-system-formalized/reject-negative-delta": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    kwh: z.number(),
    lastAcceptedKwh: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectNegativeDelta(input.__selfId, input.kwh, input.lastAcceptedKwh);
  },
  "POST /api/meter-billing-system-formalized/reject-tampered-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    tamperFlags: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectTamperedReading(input.__selfId, input.tamperFlags);
  },
  "POST /api/meter-billing-system-formalized/reject-premature-clearance": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    clearanceId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectPrematureClearance(input.__selfId, input.clearanceId);
  },
  "POST /api/meter-billing-system-formalized/reject-compensation-during-freeze": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    adjustmentDelta: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectCompensationDuringFreeze(input.__selfId, input.adjustmentDelta);
  },
  "POST /api/meter-billing-system-formalized/record-audit-trail": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    eventType: z.string(),
    eventPayload: z.string()
    });
    const input = schema.parse(body);
    return await service.recordAuditTrail(input.__selfId, input.eventType, input.eventPayload);
  },
  "POST /api/meter-billing-system-formalized/reject-retention-overflow": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectRetentionOverflow(input.__selfId);
  },
  "POST /api/meter-interface/receive-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    kwh: z.number(),
    timestamp: z.number(),
    tamperFlags: z.string()
    });
    const input = schema.parse(body);
    return await service.receiveReading(input.__selfId, input.kwh, input.timestamp, input.tamperFlags);
  },
  "POST /api/meter-interface/report-connection-status": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    status: z.boolean()
    });
    const input = schema.parse(body);
    return await service.reportConnectionStatus(input.__selfId, input.status);
  },
  "POST /api/meter-reading-validator/validate-reading": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    kwh: z.number(),
    timestamp: z.number(),
    tamperFlags: z.string()
    });
    const input = schema.parse(body);
    return await service.validateReading(input.__selfId, input.kwh, input.timestamp, input.tamperFlags);
  },
  "POST /api/tamper-monitor/record-tamper": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    eventType: z.string(),
    description: z.string()
    });
    const input = schema.parse(body);
    return await service.recordTamper(input.__selfId, input.eventType, input.description);
  },
  "POST /api/tamper-monitor/record-clearance": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    clearanceId: z.string()
    });
    const input = schema.parse(body);
    return await service.recordClearance(input.__selfId, input.clearanceId);
  },
  "POST /api/tamper-monitor/resolve-clearance": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resolveClearance(input.__selfId);
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