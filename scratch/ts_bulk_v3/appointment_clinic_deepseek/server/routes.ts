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
  "POST /api/appointment-booker/book-appointment": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    patientId: z.string(),
    clinicianId: z.string(),
    serviceName: z.string(),
    window: z.string(),
    slotStart: z.number(),
    slotEnd: z.number()
    });
    const input = schema.parse(body);
    return await service.bookAppointment(input.__selfId, input.patientId, input.clinicianId, input.serviceName, input.window, input.slotStart, input.slotEnd);
  },
  "POST /api/appointment-scheduler-system/book-appointment": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    patientId: z.string(),
    clinicianId: z.string(),
    serviceName: z.string(),
    window: z.string(),
    slotStart: z.number(),
    slotEnd: z.number()
    });
    const input = schema.parse(body);
    return await service.bookAppointment(input.__selfId, input.patientId, input.clinicianId, input.serviceName, input.window, input.slotStart, input.slotEnd);
  },
  "POST /api/appointment-scheduler-system/cancel-appointment": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    slotId: z.string(),
    cancellationTimeEpoch: z.number()
    });
    const input = schema.parse(body);
    return await service.cancelAppointment(input.__selfId, input.slotId, input.cancellationTimeEpoch);
  },
  "POST /api/appointment-scheduler-system/update-availability": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    clinicianId: z.string(),
    newWindow: z.string()
    });
    const input = schema.parse(body);
    return await service.updateAvailability(input.__selfId, input.clinicianId, input.newWindow);
  },
  "POST /api/appointment-scheduler-system/record-late-fee-payment": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    feeEventId: z.string(),
    amount: z.number()
    });
    const input = schema.parse(body);
    return await service.recordLateFeePayment(input.__selfId, input.feeEventId, input.amount);
  },
  "POST /api/appointment-scheduler-system-formalized/reject-overlapping-clinician": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    clinicianId: z.string(),
    proposedSlot: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectOverlappingClinician(input.__selfId, input.clinicianId, input.proposedSlot);
  },
  "POST /api/appointment-scheduler-system-formalized/reject-outside-availability-window": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    appointment: z.string(),
    window: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectOutsideAvailabilityWindow(input.__selfId, input.appointment, input.window);
  },
  "POST /api/appointment-scheduler-system-formalized/reject-patient-conflict": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    patientId: z.string(),
    proposedSlot: z.string()
    });
    const input = schema.parse(body);
    return await service.rejectPatientConflict(input.__selfId, input.patientId, input.proposedSlot);
  },
  "POST /api/appointment-scheduler-system-formalized/enforce-late-cancellation-fee": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    appointment: z.string(),
    cancellationTimeEpoch: z.number()
    });
    const input = schema.parse(body);
    return await service.enforceLateCancellationFee(input.__selfId, input.appointment, input.cancellationTimeEpoch);
  },
  "POST /api/appointment-scheduler-system-formalized/flag-appointments-outside-new-window": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    clinicianId: z.string(),
    oldWindow: z.string(),
    newWindow: z.string()
    });
    const input = schema.parse(body);
    return await service.flagAppointmentsOutsideNewWindow(input.__selfId, input.clinicianId, input.oldWindow, input.newWindow);
  },
  "POST /api/availability-manager/update-availability": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    clinicianId: z.string(),
    newWindow: z.string()
    });
    const input = schema.parse(body);
    return await service.updateAvailability(input.__selfId, input.clinicianId, input.newWindow);
  },
  "POST /api/availability-manager/check-slot-within-window": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    slot: z.string(),
    window: z.string()
    });
    const input = schema.parse(body);
    return await service.checkSlotWithinWindow(input.__selfId, input.slot, input.window);
  },
  "POST /api/cancellation-handler/cancel-appointment": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    slot: z.string(),
    cancellationTimeEpoch: z.number()
    });
    const input = schema.parse(body);
    return await service.cancelAppointment(input.__selfId, input.slot, input.cancellationTimeEpoch);
  },
  "POST /api/cancellation-handler/is-late-cancellation": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    slot: z.string(),
    cancellationTimeEpoch: z.number()
    });
    const input = schema.parse(body);
    return await service.isLateCancellation(input.__selfId, input.slot, input.cancellationTimeEpoch);
  },
  "POST /api/late-fee-recorder/record-late-fee-payment": async (body) => {
    const schema = z.object({
    __selfId: z.string(),
    feeEvent: z.string(),
    patientBillingId: z.string()
    });
    const input = schema.parse(body);
    return await service.recordLateFeePayment(input.__selfId, input.feeEvent, input.patientBillingId);
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