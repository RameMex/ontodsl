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

// ─── Events on ConstraintAggregator ───

export async function initialise(reqId: string, participantCount: number): Promise<void> {
  // TODO: implement mutation logic for 'ConstraintAggregator.initialise'.
  // Pre-conditions from spec:
  //   pre: reqId <> null
  //   pre: participantCount > 0
  //   pre: self.requestId = null or self.requestId <> reqId
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestId = reqId
  //   post: self.invitedParticipantCount = participantCount
  //   post: self.constraintSubmissionCount = 0
  //   post: self.allConstraintsCollected = false
  // After mutations, call validate*() on the affected ConstraintAggregator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: initialise");
}

export async function acceptConstraints(participantId: string, excluded: unknown, preferred: unknown): Promise<void> {
  // TODO: implement mutation logic for 'ConstraintAggregator.acceptConstraints'.
  // Pre-conditions from spec:
  //   pre: participantId <> null
  //   pre: self.constraintSubmissionCount < self.invitedParticipantCount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: excluded->forAll(d | self.allExcludedDates->includes(d))
  //   post: preferred->forAll(d | self.commonPreferredDates->includes(d))
  //   post: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre + 1
  //   post: self.allConstraintsCollected =
            (self.constraintSubmissionCount = self.invitedParticipantCount)
  // After mutations, call validate*() on the affected ConstraintAggregator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: acceptConstraints");
}

export async function applyConstraintUpdate(participantId: string, newExcluded: unknown, newPreferred: unknown): Promise<void> {
  // TODO: implement mutation logic for 'ConstraintAggregator.applyConstraintUpdate'.
  // Pre-conditions from spec:
  //   pre: participantId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: newExcluded->forAll(d | self.allExcludedDates->includes(d))
  //   post: newPreferred->forAll(d | self.commonPreferredDates->includes(d))
  //   post: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))
  // After mutations, call validate*() on the affected ConstraintAggregator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: applyConstraintUpdate");
}

export async function rejectOverQuota(participantId: string): Promise<void> {
  // TODO: implement mutation logic for 'ConstraintAggregator.rejectOverQuota'.
  // Pre-conditions from spec:
  //   pre: participantId <> null
  //   pre: self.constraintSubmissionCount >= self.invitedParticipantCount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre
  // After mutations, call validate*() on the affected ConstraintAggregator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOverQuota");
}

export async function rejectStaleUpdate(participantId: string): Promise<void> {
  // TODO: implement mutation logic for 'ConstraintAggregator.rejectStaleUpdate'.
  // Pre-conditions from spec:
  //   pre: participantId <> null
  //   pre: self.allConstraintsCollected = true
  //   pre: self.constraintSubmissionCount >= self.invitedParticipantCount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre
  // After mutations, call validate*() on the affected ConstraintAggregator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectStaleUpdate");
}

// ─── Events on DateSelector ───

export async function selectDate(candidate: string): Promise<void> {
  // TODO: implement mutation logic for 'DateSelector.selectDate'.
  // Pre-conditions from spec:
  //   pre: candidate <> null
  //   pre: candidate <> ''
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.proposedDate = candidate
  //   post: self.conflictDetected = false
  // After mutations, call validate*() on the affected DateSelector snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: selectDate");
}

export async function recordConflict(): Promise<void> {
  // TODO: implement mutation logic for 'DateSelector.recordConflict'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.proposedDate = ''
  //   post: self.conflictDetected = true
  // After mutations, call validate*() on the affected DateSelector snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: recordConflict");
}

export async function clearProposal(): Promise<void> {
  // TODO: implement mutation logic for 'DateSelector.clearProposal'.
  // Pre-conditions from spec:
  //   pre: self.proposedDate <> ''
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.proposedDate = ''
  // After mutations, call validate*() on the affected DateSelector snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearProposal");
}

export async function rejectExcludedCandidate(candidate: string, isExcluded: boolean): Promise<void> {
  // TODO: implement mutation logic for 'DateSelector.rejectExcludedCandidate'.
  // Pre-conditions from spec:
  //   pre: candidate <> null
  //   pre: candidate <> ''
  //   pre: isExcluded = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.proposedDate = ''
  // After mutations, call validate*() on the affected DateSelector snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectExcludedCandidate");
}

// ─── Events on MeetingSchedulerSystem ───

export async function requestMeeting(reqId: string, earliest: string, latest: string, participantCount: number): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.requestMeeting'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'IDLE'
  //   pre: reqId <> null
  //   pre: earliest <> null
  //   pre: latest <> null
  //   pre: participantCount > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'OPEN'
  //   post: self.currentRequestId = reqId
  //   post: self.rangeEarliest = earliest
  //   post: self.rangeLatest = latest
  //   post: self.invitedParticipantCount = participantCount
  //   post: self.constraintSubmissionCount = 0
  //   post: self.allConstraintsCollected = false
  //   post: self.initiatorInformed = false
  //   post: self.participantsNotified = false
  //   post: self.proposedDate = ''
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: requestMeeting");
}

export async function submitConstraints(participantId: string, excluded: unknown, preferred: unknown): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.submitConstraints'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: participantId <> null
  //   pre: self.constraintSubmissionCount < self.invitedParticipantCount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: excluded->forAll(d | self.allExcludedDates->includes(d))
  //   post: preferred->forAll(d | self.commonPreferredDates->includes(d))
  //   post: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre + 1
  //   post: self.allConstraintsCollected =
            (self.constraintSubmissionCount = self.invitedParticipantCount)
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: submitConstraints");
}

export async function proposeDate(candidate: string): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.proposeDate'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: self.allConstraintsCollected = true
  //   pre: candidate <> null
  //   pre: candidate <> ''
  //   pre: not self.allExcludedDates->includes(candidate)
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.proposedDate = candidate
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: proposeDate");
}

export async function reportConflict(): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.reportConflict'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: self.allConstraintsCollected = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'CONFLICT'
  //   post: self.initiatorInformed = true
  //   post: self.proposedDate = ''
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: reportConflict");
}

export async function confirmMeeting(loc: string): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.confirmMeeting'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: self.proposedDate <> ''
  //   pre: not self.allExcludedDates->includes(self.proposedDate)
  //   pre: loc <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'CONFIRMED'
  //   post: self.location = loc
  //   post: self.participantsNotified = true
  //   post: self.initiatorInformed = true
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: confirmMeeting");
}

export async function updateConstraints(participantId: string, newExcluded: unknown, newPreferred: unknown): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystem.updateConstraints'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: participantId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: newExcluded->forAll(d | self.allExcludedDates->includes(d))
  //   post: newPreferred->forAll(d | self.commonPreferredDates->includes(d))
  //   post: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))
  //   post: self.proposedDate = ''
  // After mutations, call validate*() on the affected MeetingSchedulerSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: updateConstraints");
}

// ─── Events on MeetingSchedulerSystemFormalized ───

export async function rejectExcludedDate(candidate: string): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectExcludedDate'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: candidate <> null
  //   pre: candidate <> ''
  //   pre: self.allExcludedDates->includes(candidate)
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.proposedDate = ''
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectExcludedDate");
}

export async function rejectPrematureConfirm(): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectPrematureConfirm'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: self.allConstraintsCollected = false or self.proposedDate = ''
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.initiatorInformed = false
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectPrematureConfirm");
}

export async function rejectDuplicateRequest(newReqId: string): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectDuplicateRequest'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: newReqId <> null
  //   pre: newReqId <> self.currentRequestId
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'OPEN'
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectDuplicateRequest");
}

export async function rejectInvertedRange(earliest: string, latest: string, callerAssertedInverted: boolean): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectInvertedRange'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'IDLE'
  //   pre: earliest <> null
  //   pre: latest <> null
  //   pre: callerAssertedInverted = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'IDLE'
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectInvertedRange");
}

export async function rejectStaleConstraintRetention(participantId: string): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'CONFIRMED' or self.requestStatus = 'CONFLICT'
  //   pre: participantId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.participantsNotified = self.participantsNotified@pre
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectStaleConstraintRetention");
}

export async function rejectOverQuotaSubmission(participantId: string): Promise<void> {
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: participantId <> null
  //   pre: self.constraintSubmissionCount >= self.invitedParticipantCount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre
  // After mutations, call validate*() on the affected MeetingSchedulerSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOverQuotaSubmission");
}

// ─── Events on NotificationDispatcher ───

export async function dispatchConfirmation(date: string, loc: string): Promise<void> {
  // TODO: implement mutation logic for 'NotificationDispatcher.dispatchConfirmation'.
  // Pre-conditions from spec:
  //   pre: date <> null
  //   pre: date <> ''
  //   pre: loc <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.confirmedDate = date
  //   post: self.confirmedLocation = loc
  //   post: self.participantsNotified = true
  // After mutations, call validate*() on the affected NotificationDispatcher snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: dispatchConfirmation");
}

export async function dispatchConflictNotice(): Promise<void> {
  // TODO: implement mutation logic for 'NotificationDispatcher.dispatchConflictNotice'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.participantsNotified = false
  // After mutations, call validate*() on the affected NotificationDispatcher snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: dispatchConflictNotice");
}

export async function rejectPrematureDispatch(dateReady: boolean): Promise<void> {
  // TODO: implement mutation logic for 'NotificationDispatcher.rejectPrematureDispatch'.
  // Pre-conditions from spec:
  //   pre: dateReady = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.participantsNotified = false
  // After mutations, call validate*() on the affected NotificationDispatcher snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectPrematureDispatch");
}

// ─── Events on RequestManager ───

export async function openRequest(reqId: string, earliest: string, latest: string, participantCount: number, initId: string, initEmail: string): Promise<void> {
  // TODO: implement mutation logic for 'RequestManager.openRequest'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'IDLE'
  //   pre: reqId <> null
  //   pre: earliest <> null
  //   pre: latest <> null
  //   pre: participantCount > 0
  //   pre: initId <> null
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'OPEN'
  //   post: self.currentRequestId = reqId
  //   post: self.rangeEarliest = earliest
  //   post: self.rangeLatest = latest
  //   post: self.invitedParticipantCount = participantCount
  //   post: self.initiatorId = initId
  //   post: self.initiatorEmail = initEmail
  //   post: self.initiatorInformed = false
  // After mutations, call validate*() on the affected RequestManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: openRequest");
}

export async function markConfirmed(): Promise<void> {
  // TODO: implement mutation logic for 'RequestManager.markConfirmed'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'CONFIRMED'
  //   post: self.initiatorInformed = true
  // After mutations, call validate*() on the affected RequestManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: markConfirmed");
}

export async function markConflict(): Promise<void> {
  // TODO: implement mutation logic for 'RequestManager.markConflict'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'CONFLICT'
  //   post: self.initiatorInformed = true
  // After mutations, call validate*() on the affected RequestManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: markConflict");
}

export async function rejectDuplicateOpen(newReqId: string): Promise<void> {
  // TODO: implement mutation logic for 'RequestManager.rejectDuplicateOpen'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'OPEN'
  //   pre: newReqId <> null
  //   pre: newReqId <> self.currentRequestId
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'OPEN'
  // After mutations, call validate*() on the affected RequestManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectDuplicateOpen");
}

export async function rejectInvertedRange(earliest: string, latest: string, callerAssertedInverted: boolean): Promise<void> {
  // TODO: implement mutation logic for 'RequestManager.rejectInvertedRange'.
  // Pre-conditions from spec:
  //   pre: self.requestStatus = 'IDLE'
  //   pre: earliest <> null
  //   pre: latest <> null
  //   pre: callerAssertedInverted = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.requestStatus = 'IDLE'
  // After mutations, call validate*() on the affected RequestManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectInvertedRange");
}
