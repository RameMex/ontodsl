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

// ─── Events on ConstraintManager ───

export async function updateConstraints(exclusions: unknown, preferences: unknown): Promise<void> {
  // TODO: implement mutation logic for 'ConstraintManager.updateConstraints'.
  // Pre-conditions from spec:
  //   pre: exclusions->forAll(d | d >= 0.0)
  //   pre: preferences->forAll(d | d >= 0.0)
  //   pre: preferences->forAll(d | not exclusions->includes(d))
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.exclusionDates = exclusions
  //   post: self.preferenceDates = preferences
  // After mutations, call validate*() on the affected ConstraintManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateConstraints");
}

// ─── Events on MeetingSchedulerSystem ───

export async function requestMeeting(start: number, end: number): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.requestMeeting'.
  // Pre-conditions from spec:
  //   pre: start >= 0.0
  //   pre: end >= start
  //   pre: start <= end
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.rangeStart = start
  //   post: self.rangeEnd = end
  //   post: self.conflictReported = false
  //   post: self.notificationSent = false
  //   post: self.constraintUpdateAccepted = false
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: requestMeeting");
}

export async function proposeDate(date: number): Promise<number> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.proposeDate'.
  // Pre-conditions from spec:
  //   pre: date >= self.rangeStart
  //   pre: date <= self.rangeEnd
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.proposedDate = date
  //   post: self.proposedDate >= self.rangeStart
  //   post: self.proposedDate <= self.rangeEnd
  //   post: result = date
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: proposeDate");
}

export async function reportConflict(): Promise<boolean> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.reportConflict'.
  // Pre-conditions from spec:
  //   pre: not self.conflictReported
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.conflictReported = true
  //   post: result = true
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: reportConflict");
}

export async function notifyParticipants(): Promise<boolean> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.notifyParticipants'.
  // Pre-conditions from spec:
  //   pre: not self.notificationSent
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.notificationSent = true
  //   post: result = true
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: notifyParticipants");
}

export async function acceptConstraintUpdate(): Promise<boolean> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.acceptConstraintUpdate'.
  // Pre-conditions from spec:
  //   pre: not self.constraintUpdateAccepted
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.constraintUpdateAccepted = true
  //   post: result = true
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: acceptConstraintUpdate");
}

export async function confirmMeeting(date: number, location: string): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.confirmMeeting'.
  // Pre-conditions from spec:
  //   pre: self.proposedDate = date
  //   pre: location <> null
  //   pre: not self.conflictReported
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.notificationSent = false
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: confirmMeeting");
}

// ─── Events on MeetingSchedulerSystemFormalized ───

export async function rejectExcessiveDateRange(start: number, end: number): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectExcessiveDateRange'.
  // Pre-conditions from spec:
  //   pre: end - start > 365.0 * 86400.0
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectExcessiveDateRange");
}

export async function rejectUnretainableRequest(): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectUnretainableRequest'.
  // Pre-conditions from spec:
  //   pre: true
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectUnretainableRequest");
}

export async function rejectUpdateAfterConfirmation(): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectUpdateAfterConfirmation'.
  // Pre-conditions from spec:
  //   pre: true
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectUpdateAfterConfirmation");
}

export async function logNotification(participantId: string, dateSent: number): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.logNotification'.
  // Pre-conditions from spec:
  //   pre: participantId <> null
  //   pre: dateSent >= 0.0
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: logNotification");
}

export async function enforceDataRetention(): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.enforceDataRetention'.
  // Pre-conditions from spec:
  //   pre: true
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceDataRetention");
}

// ─── Events on MeetingStore ───

export async function confirmMeeting(date: number, location: string): Promise<void> {
  // TODO: implement mutation logic for 'MeetingStore.confirmMeeting'.
  // Pre-conditions from spec:
  //   pre: date >= 0.0
  //   pre: location <> null
  //   pre: not self.confirmed
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.scheduledDate = date
  //   post: self.location = location
  //   post: self.confirmed = true
  // After mutations, call validate*() on the affected MeetingStore snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: confirmMeeting");
}

// ─── Events on NotificationService ───

export async function notifyAll(participants: unknown, date: number, location: string, at: number): Promise<void> {
  // TODO: implement mutation logic for 'NotificationService.notifyAll'.
  // Pre-conditions from spec:
  //   pre: participants->notEmpty()
  //   pre: date >= 0.0
  //   pre: location <> null
  //   pre: at >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastNotificationSentAt = at
  //   post: self.notificationLog->includes('CONFIRMED')
  // After mutations, call validate*() on the affected NotificationService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: notifyAll");
}

export async function reportConflict(initiatorId: string, at: number): Promise<void> {
  // TODO: implement mutation logic for 'NotificationService.reportConflict'.
  // Pre-conditions from spec:
  //   pre: initiatorId <> null
  //   pre: at >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastNotificationSentAt = at
  //   post: self.notificationLog->includes('CONFLICT')
  // After mutations, call validate*() on the affected NotificationService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: reportConflict");
}

// ─── Events on ProposerEngine ───

export async function proposeDate(rangeStart: number, rangeEnd: number, exclusions: unknown, preferences: unknown): Promise<number> {
  // TODO: implement mutation logic for 'ProposerEngine.proposeDate'.
  // Pre-conditions from spec:
  //   pre: rangeStart >= 0.0
  //   pre: rangeEnd >= rangeStart
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: result >= rangeStart
  //   post: result <= rangeEnd
  //   post: not exclusions->includes(result)
  //   post: if preferences->notEmpty() and preferences->exists(d | d >= rangeStart and d <= rangeEnd and not exclusions->includes(d)) then
            preferences->includes(result)
          else
            true
          endif
  // After mutations, call validate*() on the affected ProposerEngine snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: proposeDate");
}

// ─── Events on RequestManager ───

export async function openRequest(start: number, end: number): Promise<void> {
  // TODO: implement mutation logic for 'RequestManager.openRequest'.
  // Pre-conditions from spec:
  //   pre: start >= 0.0
  //   pre: end >= start
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.rangeStart = start
  //   post: self.rangeEnd = end
  //   post: self.isOpen = true
  // After mutations, call validate*() on the affected RequestManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: openRequest");
}

export async function closeRequest(): Promise<void> {
  // TODO: implement mutation logic for 'RequestManager.closeRequest'.
  // Pre-conditions from spec:
  //   pre: self.isOpen = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.isOpen = false
  // After mutations, call validate*() on the affected RequestManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: closeRequest");
}
