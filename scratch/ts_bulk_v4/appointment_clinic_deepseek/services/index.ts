// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { appointmentSchedulerSystems } from "../db/schema.js";
import { eq } from "drizzle-orm";
// Validators from the ontodls TypeScript codegen target.
// Import every `validate*` for the kinds this service touches.
// import { validateXxx, ... } from "@onto/<your-app>";

export class InvariantViolation extends Error {
  constructor(public readonly context: string, public readonly violations: readonly string[]) {
    super(`Invariant violation in ${context}: ${violations.join('; ')}`);
    this.name = "InvariantViolation";
  }
}
function assertNoViolations(violations: readonly string[], context: string): void {
  if (violations.length > 0) throw new InvariantViolation(context, violations);
}

// ─── Events on AppointmentBooker ───

export async function bookAppointment(__selfId: string, patientId: string, clinicianId: string, serviceName: string, window: string, slotStart: number, slotEnd: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: patientId <> null
  //   pre: clinicianId <> null
  //   pre: serviceName <> null
  //   pre: slotStart >= 0.0
  //   pre: slotEnd > slotStart
  //   pre: window <> null
  //   pre: slotStart >= window.windowStartEpoch
  //   pre: slotEnd <= window.windowEndEpoch
  // Post-conditions from spec:
  //   post: if result then
            self.appointmentClinicianIds->includes(clinicianId) and
            self.appointmentPatientIds->includes(patientId)
          else
            true
          endif
  // TODO: implement mutation logic for 'AppointmentBooker.bookAppointment'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: bookAppointment");
}

// ─── Events on AppointmentSchedulerSystem ───

export async function bookAppointment(__selfId: string, patientId: string, clinicianId: string, serviceName: string, window: string, slotStart: number, slotEnd: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: patientId <> null
  //   pre: clinicianId <> null
  //   pre: serviceName <> null
  //   pre: window <> null
  //   pre: slotStart >= 0.0
  //   pre: slotEnd > slotStart
  //   pre: slotStart >= window.windowStartEpoch
  //   pre: slotEnd <= window.windowEndEpoch
  // Post-conditions from spec:
  //   post: result = true
  //   post: self.maxOverlappingClinicians = 1
  //   post: self.minWindowEndDelta >= 0.0
  //   post: self.maxOverlappingPatient = 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(appointmentSchedulerSystems).set({
      maxOverlappingClinicians: 1,
      maxOverlappingPatient: 1,
    }).where(eq(appointmentSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateAppointmentSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(appointmentSchedulerSystems).where(eq(appointmentSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateAppointmentSchedulerSystem(row as never), "bookAppointment");
  });
}

export async function cancelAppointment(__selfId: string, slotId: string, cancellationTimeEpoch: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: slotId <> null
  //   pre: cancellationTimeEpoch >= 0.0
  //   pre: self.appointments->size() > 0
  // Post-conditions from spec:
  //   post: if cancellationTimeEpoch > 0.0
          then
            result = true
          else
            result = false
          endif
  //   post: self.minLateFeeCount >= 0
  // TODO: implement mutation logic for 'AppointmentSchedulerSystem.cancelAppointment'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: cancelAppointment");
}

export async function updateAvailability(__selfId: string, clinicianId: string, newWindow: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: clinicianId <> null
  //   pre: newWindow <> null
  //   pre: newWindow.windowStartEpoch >= 0.0
  //   pre: newWindow.windowEndEpoch > newWindow.windowStartEpoch
  // Post-conditions from spec:
  //   post: self.minWindowEndDelta >= 0.0
  // TODO: implement mutation logic for 'AppointmentSchedulerSystem.updateAvailability'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: updateAvailability");
}

export async function recordLateFeePayment(__selfId: string, feeEventId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: feeEventId <> null
  //   pre: amount >= 0.0
  //   pre: self.lateFeeEvents->size() > 0
  // Post-conditions from spec:
  //   post: self.lateFeeEvents->size() >= self.lateFeeEvents@pre->size()
  // TODO: implement mutation logic for 'AppointmentSchedulerSystem.recordLateFeePayment'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: recordLateFeePayment");
}

// ─── Events on AppointmentSchedulerSystemFormalized ───

export async function rejectOverlappingClinician(__selfId: string, clinicianId: string, proposedSlot: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: clinicianId <> null
  //   pre: proposedSlot <> null
  //   pre: proposedSlot.startTimeEpoch >= 0.0
  //   pre: proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch
  // Post-conditions from spec:
  //   post: result = true
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.rejectOverlappingClinician'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectOverlappingClinician");
}

export async function rejectOutsideAvailabilityWindow(__selfId: string, appointment: string, window: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: appointment <> null
  //   pre: window <> null
  //   pre: window.windowStartEpoch >= 0.0
  //   pre: window.windowEndEpoch > window.windowStartEpoch
  //   pre: appointment.startTimeEpoch >= window.windowStartEpoch
  //   pre: appointment.endTimeEpoch <= window.windowEndEpoch
  // Post-conditions from spec:
  //   post: result = true
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectOutsideAvailabilityWindow");
}

export async function rejectPatientConflict(__selfId: string, patientId: string, proposedSlot: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: patientId <> null
  //   pre: proposedSlot <> null
  //   pre: proposedSlot.startTimeEpoch >= 0.0
  //   pre: proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch
  // Post-conditions from spec:
  //   post: result = true
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.rejectPatientConflict'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectPatientConflict");
}

export async function enforceLateCancellationFee(__selfId: string, appointment: string, cancellationTimeEpoch: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: appointment <> null
  //   pre: cancellationTimeEpoch >= 0.0
  //   pre: appointment.startTimeEpoch - cancellationTimeEpoch < 86400.0
  // Post-conditions from spec:
  //   post: (self.lateFeeEvents->size() = self.lateFeeEvents@pre->size() + 1)
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.enforceLateCancellationFee'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: enforceLateCancellationFee");
}

export async function flagAppointmentsOutsideNewWindow(__selfId: string, clinicianId: string, oldWindow: string, newWindow: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: clinicianId <> null
  //   pre: oldWindow <> null
  //   pre: newWindow <> null
  //   pre: newWindow.windowStartEpoch >= 0.0
  //   pre: newWindow.windowEndEpoch > newWindow.windowStartEpoch
  //   pre: oldWindow.windowStartEpoch >= 0.0
  //   pre: oldWindow.windowEndEpoch > oldWindow.windowStartEpoch
  // Post-conditions from spec:
  //   post: self.minWindowEndDelta >= 0.0
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: flagAppointmentsOutsideNewWindow");
}

// ─── Events on AvailabilityManager ───

export async function updateAvailability(__selfId: string, clinicianId: string, newWindow: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: clinicianId <> null
  //   pre: newWindow <> null
  //   pre: newWindow.windowStartEpoch >= 0.0
  //   pre: newWindow.windowEndEpoch > newWindow.windowStartEpoch
  // Post-conditions from spec:
  //   post: self.clinicianIds->includes(clinicianId)
  // TODO: implement mutation logic for 'AvailabilityManager.updateAvailability'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: updateAvailability");
}

export async function checkSlotWithinWindow(__selfId: string, slot: string, window: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: slot <> null
  //   pre: window <> null
  //   pre: slot.startTimeEpoch >= 0.0
  //   pre: slot.endTimeEpoch > slot.startTimeEpoch
  //   pre: window.windowStartEpoch >= 0.0
  //   pre: window.windowEndEpoch > window.windowStartEpoch
  // Post-conditions from spec:
  //   post: result = (slot.startTimeEpoch >= window.windowStartEpoch and
                    slot.endTimeEpoch <= window.windowEndEpoch)
  // TODO: implement mutation logic for 'AvailabilityManager.checkSlotWithinWindow'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: checkSlotWithinWindow");
}

// ─── Events on CancellationHandler ───

export async function cancelAppointment(__selfId: string, slot: string, cancellationTimeEpoch: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: slot <> null
  //   pre: cancellationTimeEpoch >= 0.0
  // Post-conditions from spec:
  //   post: self.appointmentIds->includes(slot.slotId)
  //   post: if (slot.startTimeEpoch - cancellationTimeEpoch < 86400.0)
          then
            self.lateFeeEvents->size() = self.lateFeeEvents@pre->size() + 1
          else
            true
          endif
  // TODO: implement mutation logic for 'CancellationHandler.cancelAppointment'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: cancelAppointment");
}

export async function isLateCancellation(__selfId: string, slot: string, cancellationTimeEpoch: number): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: slot <> null
  //   pre: cancellationTimeEpoch >= 0.0
  //   pre: slot.startTimeEpoch >= 0.0
  // Post-conditions from spec:
  //   post: result = (slot.startTimeEpoch - cancellationTimeEpoch < 86400.0)
  // TODO: implement mutation logic for 'CancellationHandler.isLateCancellation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: isLateCancellation");
}

// ─── Events on LateFeeRecorder ───

export async function recordLateFeePayment(__selfId: string, feeEvent: string, patientBillingId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: feeEvent <> null
  //   pre: patientBillingId <> null
  //   pre: feeEvent.amount > 0.0
  // Post-conditions from spec:
  //   post: self.feeEvents->includes(feeEvent)
  //   post: self.patientBillingIds->includes(patientBillingId)
  // TODO: implement mutation logic for 'LateFeeRecorder.recordLateFeePayment'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: recordLateFeePayment");
}
