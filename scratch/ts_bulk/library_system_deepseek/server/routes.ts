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
  "POST /api/audit-logger/log-transition": async (body) => {
    const schema = z.object({
    entityId: z.string(),
    fromState: z.string(),
    toState: z.string(),
    timestamp: z.string()
    });
    const input = schema.parse(body);
    return await service.logTransition(input.entityId, input.fromState, input.toState, input.timestamp);
  },
  "POST /api/borrower-registry/verify-borrower-eligible": async (body) => {
    const schema = z.object({
    borrowerId: z.string()
    });
    const input = schema.parse(body);
    return await service.verifyBorrowerEligible(input.borrowerId);
  },
  "POST /api/borrower-registry/accrue-late-fee": async (body) => {
    const schema = z.object({
    borrowerId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.accrueLateFee(input.borrowerId, input.amount);
  },
  "POST /api/borrower-registry/pay-fee": async (body) => {
    const schema = z.object({
    borrowerId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.payFee(input.borrowerId, input.amount);
  },
  "POST /api/borrower-registry/get-outstanding-fees": async (body) => {
    const schema = z.object({
    borrowerId: z.string()
    });
    const input = schema.parse(body);
    return await service.getOutstandingFees(input.borrowerId);
  },
  "POST /api/copy-inventory/verify-copy-available": async (body) => {
    const schema = z.object({
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.verifyCopyAvailable(input.copyId);
  },
  "POST /api/copy-inventory/mark-copy-loaned": async (body) => {
    const schema = z.object({
    copyId: z.string(),
    borrowerId: z.string()
    });
    const input = schema.parse(body);
    return await service.markCopyLoaned(input.copyId, input.borrowerId);
  },
  "POST /api/copy-inventory/mark-copy-returned": async (body) => {
    const schema = z.object({
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.markCopyReturned(input.copyId);
  },
  "POST /api/copy-inventory/mark-copy-reserved": async (body) => {
    const schema = z.object({
    copyId: z.string(),
    borrowerId: z.string()
    });
    const input = schema.parse(body);
    return await service.markCopyReserved(input.copyId, input.borrowerId);
  },
  "POST /api/copy-inventory/expire-copy-reservation": async (body) => {
    const schema = z.object({
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.expireCopyReservation(input.copyId);
  },
  "POST /api/copy-inventory/does-copy-exist": async (body) => {
    const schema = z.object({
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.doesCopyExist(input.copyId);
  },
  "POST /api/copy-inventory/get-copy-status": async (body) => {
    const schema = z.object({
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.getCopyStatus(input.copyId);
  },
  "POST /api/library-system/request-loan": async (body) => {
    const schema = z.object({
    copyId: z.string(),
    borrowerId: z.string()
    });
    const input = schema.parse(body);
    return await service.requestLoan(input.copyId, input.borrowerId);
  },
  "POST /api/library-system/return-copy": async (body) => {
    const schema = z.object({
    copyId: z.string(),
    returnDate: z.string()
    });
    const input = schema.parse(body);
    return await service.returnCopy(input.copyId, input.returnDate);
  },
  "POST /api/library-system/place-reservation": async (body) => {
    const schema = z.object({
    copyId: z.string(),
    borrowerId: z.string()
    });
    const input = schema.parse(body);
    return await service.placeReservation(input.copyId, input.borrowerId);
  },
  "POST /api/library-system/expire-stale-reservation": async (body) => {
    const schema = z.object({
    reservationId: z.string()
    });
    const input = schema.parse(body);
    return await service.expireStaleReservation(input.reservationId);
  },
  "POST /api/library-system/pay-late-fee": async (body) => {
    const schema = z.object({
    borrowerId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.payLateFee(input.borrowerId, input.amount);
  },
  "POST /api/library-system-formalized/enforce-debt-free-borrower-check": async (body) => {
    const schema = z.object({
    borrowerId: z.string(),
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceDebtFreeBorrowerCheck(input.borrowerId, input.copyId);
  },
  "POST /api/library-system-formalized/enforce-copy-availability-check": async (body) => {
    const schema = z.object({
    borrowerId: z.string(),
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceCopyAvailabilityCheck(input.borrowerId, input.copyId);
  },
  "POST /api/library-system-formalized/enforce-reservation-expiry": async (body) => {
    const schema = z.object({
    reservationId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceReservationExpiry(input.reservationId);
  },
  "POST /api/library-system-formalized/enforce-late-fee-computation": async (body) => {
    const schema = z.object({
    loanId: z.string(),
    returnDate: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceLateFeeComputation(input.loanId, input.returnDate);
  },
  "POST /api/library-system-formalized/log-copy-state-transition": async (body) => {
    const schema = z.object({
    copyId: z.string(),
    fromState: z.string(),
    toState: z.string()
    });
    const input = schema.parse(body);
    return await service.logCopyStateTransition(input.copyId, input.fromState, input.toState);
  },
  "POST /api/library-system-formalized/enforce-reservation-on-loaned-only": async (body) => {
    const schema = z.object({
    borrowerId: z.string(),
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceReservationOnLoanedOnly(input.borrowerId, input.copyId);
  },
  "POST /api/library-system-formalized/guard-loan-request": async (body) => {
    const schema = z.object({
    borrowerId: z.string(),
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.guardLoanRequest(input.borrowerId, input.copyId);
  },
  "POST /api/loan-ledger/record-loan": async (body) => {
    const schema = z.object({
    copyId: z.string(),
    borrowerId: z.string(),
    loanId: z.string(),
    startDate: z.string(),
    dueDate: z.string()
    });
    const input = schema.parse(body);
    return await service.recordLoan(input.copyId, input.borrowerId, input.loanId, input.startDate, input.dueDate);
  },
  "POST /api/loan-ledger/process-return": async (body) => {
    const schema = z.object({
    copyId: z.string(),
    returnDate: z.number(),
    dueDate: z.number()
    });
    const input = schema.parse(body);
    return await service.processReturn(input.copyId, input.returnDate, input.dueDate);
  },
  "POST /api/loan-ledger/is-copy-on-loan": async (body) => {
    const schema = z.object({
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.isCopyOnLoan(input.copyId);
  },
  "POST /api/loan-ledger/get-borrower-of-copy": async (body) => {
    const schema = z.object({
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.getBorrowerOfCopy(input.copyId);
  },
  "POST /api/reservation-manager/place-reservation": async (body) => {
    const schema = z.object({
    copyId: z.string(),
    borrowerId: z.string(),
    placedDate: z.string(),
    reservationId: z.string()
    });
    const input = schema.parse(body);
    return await service.placeReservation(input.copyId, input.borrowerId, input.placedDate, input.reservationId);
  },
  "POST /api/reservation-manager/has-pending-reservation": async (body) => {
    const schema = z.object({
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.hasPendingReservation(input.copyId);
  },
  "POST /api/reservation-manager/get-next-reservation-borrower": async (body) => {
    const schema = z.object({
    copyId: z.string()
    });
    const input = schema.parse(body);
    return await service.getNextReservationBorrower(input.copyId);
  },
  "POST /api/reservation-manager/expire-old-reservation": async (body) => {
    const schema = z.object({
    reservationId: z.string()
    });
    const input = schema.parse(body);
    return await service.expireOldReservation(input.reservationId);
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