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

    });
    const input = schema.parse(body);
    return await service.transitionToLoaned();
  },
  "POST /api/copy-ledger/transition-to-loaned-from-reserved": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.transitionToLoanedFromReserved();
  },
  "POST /api/copy-ledger/transition-to-available": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.transitionToAvailable();
  },
  "POST /api/copy-ledger/transition-to-available-from-reserved": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.transitionToAvailableFromReserved();
  },
  "POST /api/copy-ledger/transition-to-reserved": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.transitionToReserved();
  },
  "POST /api/fee-manager/apply-late-fee": async (body) => {
    const schema = z.object({
    returnDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.applyLateFee(input.returnDate, input.dueDate);
  },
  "POST /api/fee-manager/apply-no-fee": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.applyNoFee();
  },
  "POST /api/fee-manager/settle-balance": async (body) => {
    const schema = z.object({
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.settleBalance(input.amount);
  },
  "POST /api/fee-manager/reject-due-to-outstanding-fees": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectDueToOutstandingFees();
  },
  "POST /api/library-lending-system/check-out-copy": async (body) => {
    const schema = z.object({
    dueDate: z.number().int(),
    loanDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.checkOutCopy(input.dueDate, input.loanDate);
  },
  "POST /api/library-lending-system/return-loan": async (body) => {
    const schema = z.object({
    returnDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.returnLoan(input.returnDate, input.dueDate);
  },
  "POST /api/library-lending-system/return-loan-with-reservation": async (body) => {
    const schema = z.object({
    returnDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.returnLoanWithReservation(input.returnDate, input.dueDate);
  },
  "POST /api/library-lending-system/place-reservation": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.placeReservation();
  },
  "POST /api/library-lending-system/expire-reservation": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.expireReservation();
  },
  "POST /api/library-lending-system/pick-up-reservation": async (body) => {
    const schema = z.object({
    dueDate: z.number().int(),
    pickUpDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.pickUpReservation(input.dueDate, input.pickUpDate);
  },
  "POST /api/library-lending-system/pay-late-fees": async (body) => {
    const schema = z.object({
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.payLateFees(input.amount);
  },
  "POST /api/library-lending-system/reject-loan-due-to-fees": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectLoanDueToFees();
  },
  "POST /api/library-lending-system-formalized/reject-pick-up-with-fees": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectPickUpWithFees();
  },
  "POST /api/library-lending-system-formalized/reject-reservation-with-fees": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectReservationWithFees();
  },
  "POST /api/library-lending-system-formalized/reject-stale-reservation-pick-up": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.rejectStaleReservationPickUp();
  },
  "POST /api/library-lending-system-formalized/enforce-single-active-loan": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.enforceSingleActiveLoan();
  },
  "POST /api/library-lending-system-formalized/enforce-late-fee-formula": async (body) => {
    const schema = z.object({
    returnDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.enforceLateFeeFormula(input.returnDate, input.dueDate);
  },
  "POST /api/loan-manager/open-loan": async (body) => {
    const schema = z.object({
    loanDate: z.number().int(),
    dueDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.openLoan(input.loanDate, input.dueDate);
  },
  "POST /api/loan-manager/close-loan": async (body) => {
    const schema = z.object({
    returnDate: z.number().int()
    });
    const input = schema.parse(body);
    return await service.closeLoan(input.returnDate);
  },
  "POST /api/reservation-manager/create-reservation": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.createReservation();
  },
  "POST /api/reservation-manager/activate-reservation-on-return": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.activateReservationOnReturn();
  },
  "POST /api/reservation-manager/expire-reservation": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.expireReservation();
  },
  "POST /api/reservation-manager/consume-reservation": async (body) => {
    const schema = z.object({

    });
    const input = schema.parse(body);
    return await service.consumeReservation();
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