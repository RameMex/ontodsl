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
  "POST /api/account-ledger/capture-snapshot": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.captureSnapshot(input.__selfId, input.amount);
  },
  "POST /api/account-ledger/apply-debit-credit": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.applyDebitCredit(input.__selfId, input.amount);
  },
  "POST /api/account-ledger/restore-snapshot": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.restoreSnapshot(input.__selfId);
  },
  "POST /api/account-ledger/clear-snapshot": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearSnapshot(input.__selfId);
  },
  "POST /api/journal-store/write-entry": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    transferId: z.string(),
    preSrc: z.number(),
    postSrc: z.number(),
    preDst: z.number(),
    postDst: z.number(),
    amount: z.number(),
    createdAt: z.number().int()
    });
    const input = schema.parse(body);
    return await service.writeEntry(input.__selfId, input.transferId, input.preSrc, input.postSrc, input.preDst, input.postDst, input.amount, input.createdAt);
  },
  "POST /api/journal-store/clear-journal": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.clearJournal(input.__selfId);
  },
  "POST /api/notification-service/send-success-notification": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    transferId: z.string(),
    journalConfirmed: z.boolean()
    });
    const input = schema.parse(body);
    return await service.sendSuccessNotification(input.__selfId, input.transferId, input.journalConfirmed);
  },
  "POST /api/notification-service/send-failure-notification": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    transferId: z.string()
    });
    const input = schema.parse(body);
    return await service.sendFailureNotification(input.__selfId, input.transferId);
  },
  "POST /api/notification-service/reset-notification": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetNotification(input.__selfId);
  },
  "POST /api/online-banking-system/initiate-transfer": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    transferId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.initiateTransfer(input.__selfId, input.transferId, input.amount);
  },
  "POST /api/online-banking-system/execute-transfer": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.executeTransfer(input.__selfId);
  },
  "POST /api/online-banking-system/write-journal-entry": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.writeJournalEntry(input.__selfId);
  },
  "POST /api/online-banking-system/notify-customer": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.notifyCustomer(input.__selfId);
  },
  "POST /api/online-banking-system/rollback-transfer": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rollbackTransfer(input.__selfId);
  },
  "POST /api/online-banking-system/recover-pending-transfer": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    shouldComplete: z.boolean()
    });
    const input = schema.parse(body);
    return await service.recoverPendingTransfer(input.__selfId, input.shouldComplete);
  },
  "POST /api/online-banking-system/reset-to-idle": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetToIdle(input.__selfId);
  },
  "POST /api/online-banking-system-formalized/reject-overdraft-transfer": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectOverdraftTransfer(input.__selfId, input.amount);
  },
  "POST /api/online-banking-system-formalized/reject-premature-notification": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectPrematureNotification(input.__selfId);
  },
  "POST /api/online-banking-system-formalized/reject-aml-cap-violation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectAmlCapViolation(input.__selfId, input.amount);
  },
  "POST /api/online-banking-system-formalized/force-rollback-on-timeout": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.forceRollbackOnTimeout(input.__selfId);
  },
  "POST /api/online-banking-system-formalized/reject-non-positive-amount": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.rejectNonPositiveAmount(input.__selfId, input.amount);
  },
  "POST /api/transfer-coordinator/begin-transfer": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    transferId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.beginTransfer(input.__selfId, input.transferId, input.amount);
  },
  "POST /api/transfer-coordinator/complete-transfer": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.completeTransfer(input.__selfId);
  },
  "POST /api/transfer-coordinator/mark-rolled-back": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.markRolledBack(input.__selfId);
  },
  "POST /api/transfer-coordinator/reset-coordinator": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.resetCoordinator(input.__selfId);
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