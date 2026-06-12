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
  "POST /api/audit-trail/record-decision": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    d: z.string()
    });
    const input = schema.parse(body);
    return await service.recordDecision(input.__selfId, input.d);
  },
  "POST /api/chat-moderation-system/submit-message": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string(),
    classifierConfidence: z.number()
    });
    const input = schema.parse(body);
    return await service.submitMessage(input.__selfId, input.msg, input.classifierConfidence);
  },
  "POST /api/chat-moderation-system/release-message": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.releaseMessage(input.__selfId, input.msg);
  },
  "POST /api/chat-moderation-system/confirm-message": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.confirmMessage(input.__selfId, input.msg);
  },
  "POST /api/chat-moderation-system/escalate-unreviewed": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.escalateUnreviewed(input.__selfId, input.msg);
  },
  "POST /api/chat-moderation-system-formalized/reject-duplicate-message": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDuplicateMessage(input.__selfId, input.msg);
  },
  "POST /api/chat-moderation-system-formalized/reject-null-confidence": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string(),
    confidence: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectNullConfidence(input.__selfId, input.msg, input.confidence);
  },
  "POST /api/classifier-service/classify-message": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.classifyMessage(input.__selfId, input.msg);
  },
  "POST /api/decision-engine/evaluate-message": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string(),
    confidence: z.number()
    });
    const input = schema.parse(body);
    return await service.evaluateMessage(input.__selfId, input.msg, input.confidence);
  },
  "POST /api/delivery-service/deliver-message": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.deliverMessage(input.__selfId, input.msg);
  },
  "POST /api/escalation-service/escalate-unreviewed": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.escalateUnreviewed(input.__selfId, input.msg);
  },
  "POST /api/message-ingestor/accept-message": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.acceptMessage(input.__selfId, input.msg);
  },
  "POST /api/moderator-interface/display-for-review": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string(),
    classifierConfidence: z.number(),
    threshold: z.number()
    });
    const input = schema.parse(body);
    return await service.displayForReview(input.__selfId, input.msg, input.classifierConfidence, input.threshold);
  },
  "POST /api/moderator-interface/moderator-release": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.moderatorRelease(input.__selfId, input.msg);
  },
  "POST /api/moderator-interface/moderator-confirm-hide": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.moderatorConfirmHide(input.__selfId, input.msg);
  },
  "POST /api/pending-review-queue/enqueue-hidden": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string(),
    submissionTimestamp: z.string()
    });
    const input = schema.parse(body);
    return await service.enqueueHidden(input.__selfId, input.msg, input.submissionTimestamp);
  },
  "POST /api/pending-review-queue/dequeue-released": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.dequeueReleased(input.__selfId, input.msg);
  },
  "POST /api/pending-review-queue/dequeue-confirmed": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    msg: z.string()
    });
    const input = schema.parse(body);
    return await service.dequeueConfirmed(input.__selfId, input.msg);
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