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
  "POST /api/account-manager/debit-account": async (body) => {
    const schema = z.object({
    accountId: z.string(),
    amountCents: z.number()
    });
    const input = schema.parse(body);
    return await service.debitAccount(input.accountId, input.amountCents);
  },
  "POST /api/account-manager/credit-account": async (body) => {
    const schema = z.object({
    accountId: z.string(),
    amountCents: z.number()
    });
    const input = schema.parse(body);
    return await service.creditAccount(input.accountId, input.amountCents);
  },
  "POST /api/account-manager/rollback-debit": async (body) => {
    const schema = z.object({
    accountId: z.string(),
    amountCents: z.number()
    });
    const input = schema.parse(body);
    return await service.rollbackDebit(input.accountId, input.amountCents);
  },
  "POST /api/account-manager/rollback-credit": async (body) => {
    const schema = z.object({
    accountId: z.string(),
    amountCents: z.number()
    });
    const input = schema.parse(body);
    return await service.rollbackCredit(input.accountId, input.amountCents);
  },
  "POST /api/account-manager/check-sufficient-funds": async (body) => {
    const schema = z.object({
    accountId: z.string(),
    amountCents: z.number()
    });
    const input = schema.parse(body);
    return await service.checkSufficientFunds(input.accountId, input.amountCents);
  },
  "POST /api/account-manager/get-balances": async (body) => {
    const schema = z.object({
    accountId: z.string()
    });
    const input = schema.parse(body);
    return await service.getBalances(input.accountId);
  },
  "POST /api/banking-transaction-system/initiate-transfer": async (body) => {
    const schema = z.object({
    srcId: z.string(),
    dstId: z.string(),
    amt: z.number()
    });
    const input = schema.parse(body);
    return await service.initiateTransfer(input.srcId, input.dstId, input.amt);
  },
  "POST /api/banking-transaction-system/create-journal-entry": async (body) => {
    const schema = z.object({
    tfrId: z.string(),
    srcId: z.string(),
    dstId: z.string(),
    amt: z.number()
    });
    const input = schema.parse(body);
    return await service.createJournalEntry(input.tfrId, input.srcId, input.dstId, input.amt);
  },
  "POST /api/banking-transaction-system/recover-pending-transfer": async (body) => {
    const schema = z.object({
    entryId: z.string()
    });
    const input = schema.parse(body);
    return await service.recoverPendingTransfer(input.entryId);
  },
  "POST /api/banking-transaction-system/resolve-pending-transfer": async (body) => {
    const schema = z.object({
    timeoutSec: z.number()
    });
    const input = schema.parse(body);
    return await service.resolvePendingTransfer(input.timeoutSec);
  },
  "POST /api/banking-transaction-system/notify-customer": async (body) => {
    const schema = z.object({
    tfrId: z.string(),
    ok: z.boolean()
    });
    const input = schema.parse(body);
    return await service.notifyCustomer(input.tfrId, input.ok);
  },
  "POST /api/banking-transaction-system/health-check": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.healthCheck();
  },
  "POST /api/banking-transaction-system-formalized/enforce-journal-before-notification": async (body) => {
    const schema = z.object({
    tfrId: z.string(),
    journalTimestampOk: z.boolean(),
    notificationTimestampOk: z.boolean()
    });
    const input = schema.parse(body);
    return await service.enforceJournalBeforeNotification(input.tfrId, input.journalTimestampOk, input.notificationTimestampOk);
  },
  "POST /api/banking-transaction-system-formalized/audit-rejection": async (body) => {
    const schema = z.object({
    tfrId: z.string(),
    reason: z.string()
    });
    const input = schema.parse(body);
    return await service.auditRejection(input.tfrId, input.reason);
  },
  "POST /api/banking-transaction-system-formalized/enforce-pending-ttl": async (body) => {
    const schema = z.object({
    elapsedSeconds: z.number(),
    maxPendingSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.enforcePendingTtl(input.elapsedSeconds, input.maxPendingSeconds);
  },
  "POST /api/banking-transaction-system-formalized/set-audit-retention-years": async (body) => {
    const schema = z.object({
    years: z.number().int()
    });
    const input = schema.parse(body);
    return await service.setAuditRetentionYears(input.years);
  },
  "POST /api/banking-transaction-system-formalized/set-gdpr-controller-name": async (body) => {
    const schema = z.object({
    name: z.string()
    });
    const input = schema.parse(body);
    return await service.setGdprControllerName(input.name);
  },
  "POST /api/banking-transaction-system-formalized/set-gdpr-dpocontact": async (body) => {
    const schema = z.object({
    contact: z.string()
    });
    const input = schema.parse(body);
    return await service.setGdprDPOContact(input.contact);
  },
  "POST /api/journal-writer/write-entry": async (body) => {
    const schema = z.object({
    tfrId: z.string(),
    srcId: z.string(),
    dstId: z.string(),
    amtCents: z.number(),
    preSrcBalCents: z.number(),
    postSrcBalCents: z.number(),
    preDstBalCents: z.number(),
    postDstBalCents: z.number()
    });
    const input = schema.parse(body);
    return await service.writeEntry(input.tfrId, input.srcId, input.dstId, input.amtCents, input.preSrcBalCents, input.postSrcBalCents, input.preDstBalCents, input.postDstBalCents);
  },
  "POST /api/journal-writer/has-entry-for-transfer": async (body) => {
    const schema = z.object({
    tfrId: z.string()
    });
    const input = schema.parse(body);
    return await service.hasEntryForTransfer(input.tfrId);
  },
  "POST /api/journal-writer/get-all-entries": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.getAllEntries();
  },
  "POST /api/notification-service/queue-notification": async (body) => {
    const schema = z.object({
    tfrId: z.string(),
    customerId: z.string()
    });
    const input = schema.parse(body);
    return await service.queueNotification(input.tfrId, input.customerId);
  },
  "POST /api/notification-service/send-success-notification": async (body) => {
    const schema = z.object({
    tfrId: z.string()
    });
    const input = schema.parse(body);
    return await service.sendSuccessNotification(input.tfrId);
  },
  "POST /api/notification-service/send-failure-notification": async (body) => {
    const schema = z.object({
    tfrId: z.string(),
    reason: z.string()
    });
    const input = schema.parse(body);
    return await service.sendFailureNotification(input.tfrId, input.reason);
  },
  "POST /api/notification-service/has-pending-notification": async (body) => {
    const schema = z.object({
    tfrId: z.string()
    });
    const input = schema.parse(body);
    return await service.hasPendingNotification(input.tfrId);
  },
  "POST /api/recovery-manager/recover-transfer": async (body) => {
    const schema = z.object({
    entryId: z.string()
    });
    const input = schema.parse(body);
    return await service.recoverTransfer(input.entryId);
  },
  "POST /api/recovery-manager/scan-for-pending-entries": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.scanForPendingEntries();
  },
  "POST /api/recovery-manager/resolve-transfer-action": async (body) => {
    const schema = z.object({
    flowId: z.string()
    });
    const input = schema.parse(body);
    return await service.resolveTransferAction(input.flowId);
  },
  "POST /api/transfer-coordinator/initiate-transfer": async (body) => {
    const schema = z.object({
    srcId: z.string(),
    dstId: z.string(),
    amtCents: z.number()
    });
    const input = schema.parse(body);
    return await service.initiateTransfer(input.srcId, input.dstId, input.amtCents);
  },
  "POST /api/transfer-coordinator/complete-transfer": async (body) => {
    const schema = z.object({
    flowId: z.string()
    });
    const input = schema.parse(body);
    return await service.completeTransfer(input.flowId);
  },
  "POST /api/transfer-coordinator/rollback-transfer": async (body) => {
    const schema = z.object({
    flowId: z.string()
    });
    const input = schema.parse(body);
    return await service.rollbackTransfer(input.flowId);
  },
  "POST /api/transfer-coordinator/count-expired-pending-transfers": async (body) => {
    const schema = z.object({
    elapsedSeconds: z.number()
    });
    const input = schema.parse(body);
    return await service.countExpiredPendingTransfers(input.elapsedSeconds);
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