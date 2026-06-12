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
  "POST /api/constraint-aggregator/initialise": async (body) => {
    const schema = z.object({
    reqId: z.string(),
    participantCount: z.number().int()
    });
    const input = schema.parse(body);
    return await service.initialise(input.reqId, input.participantCount);
  },
  "POST /api/constraint-aggregator/accept-constraints": async (body) => {
    const schema = z.object({
    participantId: z.string(),
    excluded: z.unknown(),
    preferred: z.unknown()
    });
    const input = schema.parse(body);
    return await service.acceptConstraints(input.participantId, input.excluded, input.preferred);
  },
  "POST /api/constraint-aggregator/apply-constraint-update": async (body) => {
    const schema = z.object({
    participantId: z.string(),
    newExcluded: z.unknown(),
    newPreferred: z.unknown()
    });
    const input = schema.parse(body);
    return await service.applyConstraintUpdate(input.participantId, input.newExcluded, input.newPreferred);
  },
  "POST /api/constraint-aggregator/reject-over-quota": async (body) => {
    const schema = z.object({
    participantId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectOverQuota(input.participantId);
  },
  "POST /api/constraint-aggregator/reject-stale-update": async (body) => {
    const schema = z.object({
    participantId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectStaleUpdate(input.participantId);
  },
  "POST /api/date-selector/select-date": async (body) => {
    const schema = z.object({
    candidate: z.string()
    });
    const input = schema.parse(body);
    return await service.selectDate(input.candidate);
  },
  "POST /api/date-selector/record-conflict": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.recordConflict();
  },
  "POST /api/date-selector/clear-proposal": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.clearProposal();
  },
  "POST /api/date-selector/reject-excluded-candidate": async (body) => {
    const schema = z.object({
    candidate: z.string(),
    isExcluded: z.boolean()
    });
    const input = schema.parse(body);
    return await service.rejectExcludedCandidate(input.candidate, input.isExcluded);
  },
  "POST /api/meeting-scheduler-system/request-meeting": async (body) => {
    const schema = z.object({
    reqId: z.string(),
    earliest: z.string(),
    latest: z.string(),
    participantCount: z.number().int()
    });
    const input = schema.parse(body);
    return await service.requestMeeting(input.reqId, input.earliest, input.latest, input.participantCount);
  },
  "POST /api/meeting-scheduler-system/submit-constraints": async (body) => {
    const schema = z.object({
    participantId: z.string(),
    excluded: z.unknown(),
    preferred: z.unknown()
    });
    const input = schema.parse(body);
    return await service.submitConstraints(input.participantId, input.excluded, input.preferred);
  },
  "POST /api/meeting-scheduler-system/propose-date": async (body) => {
    const schema = z.object({
    candidate: z.string()
    });
    const input = schema.parse(body);
    return await service.proposeDate(input.candidate);
  },
  "POST /api/meeting-scheduler-system/report-conflict": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.reportConflict();
  },
  "POST /api/meeting-scheduler-system/confirm-meeting": async (body) => {
    const schema = z.object({
    loc: z.string()
    });
    const input = schema.parse(body);
    return await service.confirmMeeting(input.loc);
  },
  "POST /api/meeting-scheduler-system/update-constraints": async (body) => {
    const schema = z.object({
    participantId: z.string(),
    newExcluded: z.unknown(),
    newPreferred: z.unknown()
    });
    const input = schema.parse(body);
    return await service.updateConstraints(input.participantId, input.newExcluded, input.newPreferred);
  },
  "POST /api/meeting-scheduler-system-formalized/reject-excluded-date": async (body) => {
    const schema = z.object({
    candidate: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectExcludedDate(input.candidate);
  },
  "POST /api/meeting-scheduler-system-formalized/reject-premature-confirm": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectPrematureConfirm();
  },
  "POST /api/meeting-scheduler-system-formalized/reject-duplicate-request": async (body) => {
    const schema = z.object({
    newReqId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDuplicateRequest(input.newReqId);
  },
  "POST /api/meeting-scheduler-system-formalized/reject-inverted-range": async (body) => {
    const schema = z.object({
    earliest: z.string(),
    latest: z.string(),
    callerAssertedInverted: z.boolean()
    });
    const input = schema.parse(body);
    return await service.rejectInvertedRange(input.earliest, input.latest, input.callerAssertedInverted);
  },
  "POST /api/meeting-scheduler-system-formalized/reject-stale-constraint-retention": async (body) => {
    const schema = z.object({
    participantId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectStaleConstraintRetention(input.participantId);
  },
  "POST /api/meeting-scheduler-system-formalized/reject-over-quota-submission": async (body) => {
    const schema = z.object({
    participantId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectOverQuotaSubmission(input.participantId);
  },
  "POST /api/notification-dispatcher/dispatch-confirmation": async (body) => {
    const schema = z.object({
    date: z.string(),
    loc: z.string()
    });
    const input = schema.parse(body);
    return await service.dispatchConfirmation(input.date, input.loc);
  },
  "POST /api/notification-dispatcher/dispatch-conflict-notice": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.dispatchConflictNotice();
  },
  "POST /api/notification-dispatcher/reject-premature-dispatch": async (body) => {
    const schema = z.object({
    dateReady: z.boolean()
    });
    const input = schema.parse(body);
    return await service.rejectPrematureDispatch(input.dateReady);
  },
  "POST /api/request-manager/open-request": async (body) => {
    const schema = z.object({
    reqId: z.string(),
    earliest: z.string(),
    latest: z.string(),
    participantCount: z.number().int(),
    initId: z.string(),
    initEmail: z.string()
    });
    const input = schema.parse(body);
    return await service.openRequest(input.reqId, input.earliest, input.latest, input.participantCount, input.initId, input.initEmail);
  },
  "POST /api/request-manager/mark-confirmed": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.markConfirmed();
  },
  "POST /api/request-manager/mark-conflict": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.markConflict();
  },
  "POST /api/request-manager/reject-duplicate-open": async (body) => {
    const schema = z.object({
    newReqId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDuplicateOpen(input.newReqId);
  },
  "POST /api/request-manager/reject-inverted-range": async (body) => {
    const schema = z.object({
    earliest: z.string(),
    latest: z.string(),
    callerAssertedInverted: z.boolean()
    });
    const input = schema.parse(body);
    return await service.rejectInvertedRange(input.earliest, input.latest, input.callerAssertedInverted);
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