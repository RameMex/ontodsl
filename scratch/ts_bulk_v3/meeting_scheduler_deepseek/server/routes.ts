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
  "POST /api/constraint-manager/update-constraints": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    exclusions: z.unknown(),
    preferences: z.unknown()
    });
    const input = schema.parse(body);
    return await service.updateConstraints(input.__selfId, input.exclusions, input.preferences);
  },
  "POST /api/meeting-scheduler-system/request-meeting": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    start: z.number(),
    end: z.number()
    });
    const input = schema.parse(body);
    return await service.requestMeeting(input.__selfId, input.start, input.end);
  },
  "POST /api/meeting-scheduler-system/propose-date": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    date: z.number()
    });
    const input = schema.parse(body);
    return await service.proposeDate(input.__selfId, input.date);
  },
  "POST /api/meeting-scheduler-system/report-conflict": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.reportConflict(input.__selfId);
  },
  "POST /api/meeting-scheduler-system/notify-participants": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.notifyParticipants(input.__selfId);
  },
  "POST /api/meeting-scheduler-system/accept-constraint-update": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.acceptConstraintUpdate(input.__selfId);
  },
  "POST /api/meeting-scheduler-system/confirm-meeting": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    date: z.number(),
    location: z.string()
    });
    const input = schema.parse(body);
    return await service.confirmMeeting(input.__selfId, input.date, input.location);
  },
  "POST /api/meeting-scheduler-system-formalized/reject-excessive-date-range": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    start: z.number(),
    end: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectExcessiveDateRange(input.__selfId, input.start, input.end);
  },
  "POST /api/meeting-scheduler-system-formalized/reject-unretainable-request": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectUnretainableRequest(input.__selfId);
  },
  "POST /api/meeting-scheduler-system-formalized/reject-update-after-confirmation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectUpdateAfterConfirmation(input.__selfId);
  },
  "POST /api/meeting-scheduler-system-formalized/log-notification": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    participantId: z.string(),
    dateSent: z.number()
    });
    const input = schema.parse(body);
    return await service.logNotification(input.__selfId, input.participantId, input.dateSent);
  },
  "POST /api/meeting-scheduler-system-formalized/enforce-data-retention": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceDataRetention(input.__selfId);
  },
  "POST /api/meeting-store/confirm-meeting": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    date: z.number(),
    location: z.string()
    });
    const input = schema.parse(body);
    return await service.confirmMeeting(input.__selfId, input.date, input.location);
  },
  "POST /api/notification-service/notify-all": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    participants: z.unknown(),
    date: z.number(),
    location: z.string(),
    at: z.number()
    });
    const input = schema.parse(body);
    return await service.notifyAll(input.__selfId, input.participants, input.date, input.location, input.at);
  },
  "POST /api/notification-service/report-conflict": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    initiatorId: z.string(),
    at: z.number()
    });
    const input = schema.parse(body);
    return await service.reportConflict(input.__selfId, input.initiatorId, input.at);
  },
  "POST /api/proposer-engine/propose-date": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    rangeStart: z.number(),
    rangeEnd: z.number(),
    exclusions: z.unknown(),
    preferences: z.unknown()
    });
    const input = schema.parse(body);
    return await service.proposeDate(input.__selfId, input.rangeStart, input.rangeEnd, input.exclusions, input.preferences);
  },
  "POST /api/request-manager/open-request": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    start: z.number(),
    end: z.number()
    });
    const input = schema.parse(body);
    return await service.openRequest(input.__selfId, input.start, input.end);
  },
  "POST /api/request-manager/close-request": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.closeRequest(input.__selfId);
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