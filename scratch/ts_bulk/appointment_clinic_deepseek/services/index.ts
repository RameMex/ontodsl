// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
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

export async function bookAppointment(patientId: string, clinicianId: string, serviceName: string, window: string, slotStart: number, slotEnd: number): Promise<boolean> {
  // TODO: implement mutation logic for 'AppointmentBooker.bookAppointment'.
  // Pre-conditions from spec:
  //   pre: patientId <> null
  //   pre: clinicianId <> null
  //   pre: serviceName <> null
  //   pre: slotStart >= 0.0
  //   pre: slotEnd > slotStart
  //   pre: window <> null
  //   pre: slotStart >= window.windowStartEpoch
  //   pre: slotEnd <= window.windowEndEpoch
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if result then
            self.appointmentClinicianIds->includes(clinicianId) and
            self.appointmentPatientIds->includes(patientId)
          else
            true
          endif
  // After mutations, call validate*() on the affected AppointmentBooker snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: bookAppointment");
}

// ─── Events on AppointmentSchedulerSystem ───

export async function bookAppointment(patientId: string, clinicianId: string, serviceName: string, window: string, slotStart: number, slotEnd: number): Promise<boolean> {
  // TODO: implement mutation logic for 'AppointmentSchedulerSystem.bookAppointment'.
  // Pre-conditions from spec:
  //   pre: patientId <> null
  //   pre: clinicianId <> null
  //   pre: serviceName <> null
  //   pre: window <> null
  //   pre: slotStart >= 0.0
  //   pre: slotEnd > slotStart
  //   pre: slotStart >= window.windowStartEpoch
  //   pre: slotEnd <= window.windowEndEpoch
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result = true
  //   post: self.maxOverlappingClinicians = 1
  //   post: self.minWindowEndDelta >= 0.0
  //   post: self.maxOverlappingPatient = 1
  // After mutations, call validate*() on the affected AppointmentSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: bookAppointment");
}

export async function cancelAppointment(slotId: string, cancellationTimeEpoch: number): Promise<boolean> {
  // TODO: implement mutation logic for 'AppointmentSchedulerSystem.cancelAppointment'.
  // Pre-conditions from spec:
  //   pre: slotId <> null
  //   pre: cancellationTimeEpoch >= 0.0
  //   pre: self.appointments->size() > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: if cancellationTimeEpoch > 0.0
          then
            result = true
          else
            result = false
          endif
  //   post: self.minLateFeeCount >= 0
  // After mutations, call validate*() on the affected AppointmentSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: cancelAppointment");
}

export async function updateAvailability(clinicianId: string, newWindow: string): Promise<void> {
  // TODO: implement mutation logic for 'AppointmentSchedulerSystem.updateAvailability'.
  // Pre-conditions from spec:
  //   pre: clinicianId <> null
  //   pre: newWindow <> null
  //   pre: newWindow.windowStartEpoch >= 0.0
  //   pre: newWindow.windowEndEpoch > newWindow.windowStartEpoch
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.minWindowEndDelta >= 0.0
  // After mutations, call validate*() on the affected AppointmentSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateAvailability");
}

export async function recordLateFeePayment(feeEventId: string, amount: number): Promise<void> {
  // TODO: implement mutation logic for 'AppointmentSchedulerSystem.recordLateFeePayment'.
  // Pre-conditions from spec:
  //   pre: feeEventId <> null
  //   pre: amount >= 0.0
  //   pre: self.lateFeeEvents->size() > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lateFeeEvents->size() >= self.lateFeeEvents@pre->size()
  // After mutations, call validate*() on the affected AppointmentSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: recordLateFeePayment");
}

// ─── Events on AppointmentSchedulerSystemFormalized ───

export async function rejectOverlappingClinician(clinicianId: string, proposedSlot: string): Promise<boolean> {
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.rejectOverlappingClinician'.
  // Pre-conditions from spec:
  //   pre: clinicianId <> null
  //   pre: proposedSlot <> null
  //   pre: proposedSlot.startTimeEpoch >= 0.0
  //   pre: proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result = true
  // After mutations, call validate*() on the affected AppointmentSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOverlappingClinician");
}

export async function rejectOutsideAvailabilityWindow(appointment: string, window: string): Promise<boolean> {
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow'.
  // Pre-conditions from spec:
  //   pre: appointment <> null
  //   pre: window <> null
  //   pre: window.windowStartEpoch >= 0.0
  //   pre: window.windowEndEpoch > window.windowStartEpoch
  //   pre: appointment.startTimeEpoch >= window.windowStartEpoch
  //   pre: appointment.endTimeEpoch <= window.windowEndEpoch
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result = true
  // After mutations, call validate*() on the affected AppointmentSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOutsideAvailabilityWindow");
}

export async function rejectPatientConflict(patientId: string, proposedSlot: string): Promise<boolean> {
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.rejectPatientConflict'.
  // Pre-conditions from spec:
  //   pre: patientId <> null
  //   pre: proposedSlot <> null
  //   pre: proposedSlot.startTimeEpoch >= 0.0
  //   pre: proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result = true
  // After mutations, call validate*() on the affected AppointmentSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectPatientConflict");
}

export async function enforceLateCancellationFee(appointment: string, cancellationTimeEpoch: number): Promise<boolean> {
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.enforceLateCancellationFee'.
  // Pre-conditions from spec:
  //   pre: appointment <> null
  //   pre: cancellationTimeEpoch >= 0.0
  //   pre: appointment.startTimeEpoch - cancellationTimeEpoch < 86400.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: (self.lateFeeEvents->size() = self.lateFeeEvents@pre->size() + 1)
  // After mutations, call validate*() on the affected AppointmentSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceLateCancellationFee");
}

export async function flagAppointmentsOutsideNewWindow(clinicianId: string, oldWindow: string, newWindow: string): Promise<void> {
  // TODO: implement mutation logic for 'AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow'.
  // Pre-conditions from spec:
  //   pre: clinicianId <> null
  //   pre: oldWindow <> null
  //   pre: newWindow <> null
  //   pre: newWindow.windowStartEpoch >= 0.0
  //   pre: newWindow.windowEndEpoch > newWindow.windowStartEpoch
  //   pre: oldWindow.windowStartEpoch >= 0.0
  //   pre: oldWindow.windowEndEpoch > oldWindow.windowStartEpoch
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.minWindowEndDelta >= 0.0
  // After mutations, call validate*() on the affected AppointmentSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: flagAppointmentsOutsideNewWindow");
}

// ─── Events on AvailabilityManager ───

export async function updateAvailability(clinicianId: string, newWindow: string): Promise<void> {
  // TODO: implement mutation logic for 'AvailabilityManager.updateAvailability'.
  // Pre-conditions from spec:
  //   pre: clinicianId <> null
  //   pre: newWindow <> null
  //   pre: newWindow.windowStartEpoch >= 0.0
  //   pre: newWindow.windowEndEpoch > newWindow.windowStartEpoch
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.clinicianIds->includes(clinicianId)
  // After mutations, call validate*() on the affected AvailabilityManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateAvailability");
}

export async function checkSlotWithinWindow(slot: string, window: string): Promise<boolean> {
  // TODO: implement mutation logic for 'AvailabilityManager.checkSlotWithinWindow'.
  // Pre-conditions from spec:
  //   pre: slot <> null
  //   pre: window <> null
  //   pre: slot.startTimeEpoch >= 0.0
  //   pre: slot.endTimeEpoch > slot.startTimeEpoch
  //   pre: window.windowStartEpoch >= 0.0
  //   pre: window.windowEndEpoch > window.windowStartEpoch
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result = (slot.startTimeEpoch >= window.windowStartEpoch and
                    slot.endTimeEpoch <= window.windowEndEpoch)
  // After mutations, call validate*() on the affected AvailabilityManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: checkSlotWithinWindow");
}

// ─── Events on CancellationHandler ───

export async function cancelAppointment(slot: string, cancellationTimeEpoch: number): Promise<boolean> {
  // TODO: implement mutation logic for 'CancellationHandler.cancelAppointment'.
  // Pre-conditions from spec:
  //   pre: slot <> null
  //   pre: cancellationTimeEpoch >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.appointmentIds->includes(slot.slotId)
  //   post: if (slot.startTimeEpoch - cancellationTimeEpoch < 86400.0)
          then
            self.lateFeeEvents->size() = self.lateFeeEvents@pre->size() + 1
          else
            true
          endif
  // After mutations, call validate*() on the affected CancellationHandler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: cancelAppointment");
}

export async function isLateCancellation(slot: string, cancellationTimeEpoch: number): Promise<boolean> {
  // TODO: implement mutation logic for 'CancellationHandler.isLateCancellation'.
  // Pre-conditions from spec:
  //   pre: slot <> null
  //   pre: cancellationTimeEpoch >= 0.0
  //   pre: slot.startTimeEpoch >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result = (slot.startTimeEpoch - cancellationTimeEpoch < 86400.0)
  // After mutations, call validate*() on the affected CancellationHandler snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: isLateCancellation");
}

// ─── Events on LateFeeRecorder ───

export async function recordLateFeePayment(feeEvent: string, patientBillingId: string): Promise<void> {
  // TODO: implement mutation logic for 'LateFeeRecorder.recordLateFeePayment'.
  // Pre-conditions from spec:
  //   pre: feeEvent <> null
  //   pre: patientBillingId <> null
  //   pre: feeEvent.amount > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.feeEvents->includes(feeEvent)
  //   post: self.patientBillingIds->includes(patientBillingId)
  // After mutations, call validate*() on the affected LateFeeRecorder snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: recordLateFeePayment");
}
