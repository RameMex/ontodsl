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
  "POST /api/alert-manager/raise-alert": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    compositeKey: z.string()
    });
    const input = schema.parse(body);
    return await service.raiseAlert(input.__selfId, input.compositeKey);
  },
  "POST /api/delivery-orchestrator/mark-delivered": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    compositeKey: z.string()
    });
    const input = schema.parse(body);
    return await service.markDelivered(input.__selfId, input.compositeKey);
  },
  "POST /api/delivery-orchestrator/mark-failed": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    compositeKey: z.string()
    });
    const input = schema.parse(body);
    return await service.markFailed(input.__selfId, input.compositeKey);
  },
  "POST /api/notification-dispatcher-system/dispatch-notification": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestId: z.string(),
    recipient: z.string(),
    channels: z.string()
    });
    const input = schema.parse(body);
    return await service.dispatchNotification(input.__selfId, input.requestId, input.recipient, input.channels);
  },
  "POST /api/notification-dispatcher-system/attempt-delivery": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestId: z.string(),
    channelId: z.string()
    });
    const input = schema.parse(body);
    return await service.attemptDelivery(input.__selfId, input.requestId, input.channelId);
  },
  "POST /api/notification-dispatcher-system/escalate-failure": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestId: z.string(),
    channelId: z.string()
    });
    const input = schema.parse(body);
    return await service.escalateFailure(input.__selfId, input.requestId, input.channelId);
  },
  "POST /api/notification-dispatcher-system-formalized/reject-invalid-channels": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestId: z.string(),
    channels: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectInvalidChannels(input.__selfId, input.requestId, input.channels);
  },
  "POST /api/notification-dispatcher-system-formalized/fail-after-retry-limit": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestId: z.string(),
    channelId: z.string()
    });
    const input = schema.parse(body);
    return await service.failAfterRetryLimit(input.__selfId, input.requestId, input.channelId);
  },
  "POST /api/notification-dispatcher-system-formalized/enforce-backoff-schedule": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    attemptNumber: z.number().int()
    });
    const input = schema.parse(body);
    return await service.enforceBackoffSchedule(input.__selfId, input.attemptNumber);
  },
  "POST /api/notification-dispatcher-system-formalized/verify-no-duplicate-delivery": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestId: z.string(),
    channelId: z.string()
    });
    const input = schema.parse(body);
    return await service.verifyNoDuplicateDelivery(input.__selfId, input.requestId, input.channelId);
  },
  "POST /api/request-ingestor/receive-request": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    requestId: z.string(),
    recipient: z.string(),
    channels: z.string()
    });
    const input = schema.parse(body);
    return await service.receiveRequest(input.__selfId, input.requestId, input.recipient, input.channels);
  },
  "POST /api/retry-scheduler/schedule-retry": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    compositeKey: z.string()
    });
    const input = schema.parse(body);
    return await service.scheduleRetry(input.__selfId, input.compositeKey);
  },
  "POST /api/retry-scheduler/complete-retry": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    compositeKey: z.string()
    });
    const input = schema.parse(body);
    return await service.completeRetry(input.__selfId, input.compositeKey);
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