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
  "POST /api/copy-ledger/transition-to-loaned": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToLoaned(input.__selfId);
  },
  "POST /api/copy-ledger/transition-to-loaned-from-reserved": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToLoanedFromReserved(input.__selfId);
  },
  "POST /api/copy-ledger/transition-to-available": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToAvailable(input.__selfId);
  },
  "POST /api/copy-ledger/transition-to-available-from-reserved": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToAvailableFromReserved(input.__selfId);
  },
  "POST /api/copy-ledger/transition-to-reserved": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.transitionToReserved(input.__selfId);
  },
  "POST /api/fee-manager/apply-late-fee": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    returnDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.applyLateFee(input.__selfId, input.returnDate, input.dueDate);
  },
  "POST /api/fee-manager/apply-no-fee": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.applyNoFee(input.__selfId);
  },
  "POST /api/fee-manager/settle-balance": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.settleBalance(input.__selfId, input.amount);
  },
  "POST /api/fee-manager/reject-due-to-outstanding-fees": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectDueToOutstandingFees(input.__selfId);
  },
  "POST /api/library-lending-system/check-out-copy": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    dueDate: z.number().int(),
    loanDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.checkOutCopy(input.__selfId, input.dueDate, input.loanDate);
  },
  "POST /api/library-lending-system/return-loan": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    returnDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.returnLoan(input.__selfId, input.returnDate, input.dueDate);
  },
  "POST /api/library-lending-system/return-loan-with-reservation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    returnDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.returnLoanWithReservation(input.__selfId, input.returnDate, input.dueDate);
  },
  "POST /api/library-lending-system/place-reservation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.placeReservation(input.__selfId);
  },
  "POST /api/library-lending-system/expire-reservation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.expireReservation(input.__selfId);
  },
  "POST /api/library-lending-system/pick-up-reservation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    dueDate: z.number().int(),
    pickUpDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.pickUpReservation(input.__selfId, input.dueDate, input.pickUpDate);
  },
  "POST /api/library-lending-system/pay-late-fees": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.payLateFees(input.__selfId, input.amount);
  },
  "POST /api/library-lending-system/reject-loan-due-to-fees": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectLoanDueToFees(input.__selfId);
  },
  "POST /api/library-lending-system-formalized/reject-pick-up-with-fees": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectPickUpWithFees(input.__selfId);
  },
  "POST /api/library-lending-system-formalized/reject-reservation-with-fees": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectReservationWithFees(input.__selfId);
  },
  "POST /api/library-lending-system-formalized/reject-stale-reservation-pick-up": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectStaleReservationPickUp(input.__selfId);
  },
  "POST /api/library-lending-system-formalized/enforce-single-active-loan": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.enforceSingleActiveLoan(input.__selfId);
  },
  "POST /api/library-lending-system-formalized/enforce-late-fee-formula": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    returnDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.enforceLateFeeFormula(input.__selfId, input.returnDate, input.dueDate);
  },
  "POST /api/loan-manager/open-loan": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    loanDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.openLoan(input.__selfId, input.loanDate, input.dueDate);
  },
  "POST /api/loan-manager/close-loan": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    returnDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.closeLoan(input.__selfId, input.returnDate);
  },
  "POST /api/reservation-manager/create-reservation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.createReservation(input.__selfId);
  },
  "POST /api/reservation-manager/activate-reservation-on-return": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.activateReservationOnReturn(input.__selfId);
  },
  "POST /api/reservation-manager/expire-reservation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.expireReservation(input.__selfId);
  },
  "POST /api/reservation-manager/consume-reservation": async (body) => {
    const schema = z.object({
    __selfId: z.string()
    });
    const input = schema.parse(body);
    return await service.consumeReservation(input.__selfId);
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