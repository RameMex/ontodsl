// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { constraintAggregators, dateSelectors, meetingSchedulerSystemFormalizeds, meetingSchedulerSystems, notificationDispatchers, requestManagers } from "../db/schema.js";
import { eq, sql } from "drizzle-orm";
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

export async function initialise(__selfId: string, reqId: string, participantCount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: reqId <> null
  //   pre: participantCount > 0
  //   pre: self.requestId = null or self.requestId <> reqId
  // Post-conditions from spec:
  //   post: self.requestId = reqId
  //   post: self.invitedParticipantCount = participantCount
  //   post: self.constraintSubmissionCount = 0
  //   post: self.allConstraintsCollected = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(constraintAggregators).set({
      requestId: reqId,
      invitedParticipantCount: participantCount,
      constraintSubmissionCount: 0,
      allConstraintsCollected: false,
    }).where(eq(constraintAggregators.aggregatorId, __selfId));
    // After mutation: re-validate against `validateConstraintAggregator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(constraintAggregators).where(eq(constraintAggregators.aggregatorId, __selfId)).get();
    // assertNoViolations(validateConstraintAggregator(row as never), "initialise");
  });
}

export async function acceptConstraints(__selfId: string, participantId: string, excluded: unknown, preferred: unknown): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: participantId <> null
  //   pre: self.constraintSubmissionCount < self.invitedParticipantCount
  // Post-conditions from spec:
  //   post: excluded->forAll(d | self.allExcludedDates->includes(d))
  //   post: preferred->forAll(d | self.commonPreferredDates->includes(d))
  //   post: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre + 1
  //   post: self.allConstraintsCollected =
            (self.constraintSubmissionCount = self.invitedParticipantCount)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(constraintAggregators).set({
      constraintSubmissionCount: sql`${constraintAggregators.constraintSubmissionCount} + ${1}`,
      allConstraintsCollected: sql`${constraintAggregators.constraintSubmissionCount} = ${constraintAggregators.invitedParticipantCount}`,
    }).where(eq(constraintAggregators.aggregatorId, __selfId));
    // After mutation: re-validate against `validateConstraintAggregator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(constraintAggregators).where(eq(constraintAggregators.aggregatorId, __selfId)).get();
    // assertNoViolations(validateConstraintAggregator(row as never), "acceptConstraints");
  });
}

export async function applyConstraintUpdate(__selfId: string, participantId: string, newExcluded: unknown, newPreferred: unknown): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: participantId <> null
  // Post-conditions from spec:
  //   post: newExcluded->forAll(d | self.allExcludedDates->includes(d))
  //   post: newPreferred->forAll(d | self.commonPreferredDates->includes(d))
  //   post: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))
  // TODO: implement mutation logic for 'ConstraintAggregator.applyConstraintUpdate'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: applyConstraintUpdate");
}

export async function rejectOverQuota(__selfId: string, participantId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: participantId <> null
  //   pre: self.constraintSubmissionCount >= self.invitedParticipantCount
  // Post-conditions from spec:
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(constraintAggregators).set({
      constraintSubmissionCount: sql`${constraintAggregators.constraintSubmissionCount}`,
    }).where(eq(constraintAggregators.aggregatorId, __selfId));
    // After mutation: re-validate against `validateConstraintAggregator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(constraintAggregators).where(eq(constraintAggregators.aggregatorId, __selfId)).get();
    // assertNoViolations(validateConstraintAggregator(row as never), "rejectOverQuota");
  });
}

export async function rejectStaleUpdate(__selfId: string, participantId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: participantId <> null
  //   pre: self.allConstraintsCollected = true
  //   pre: self.constraintSubmissionCount >= self.invitedParticipantCount
  // Post-conditions from spec:
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(constraintAggregators).set({
      constraintSubmissionCount: sql`${constraintAggregators.constraintSubmissionCount}`,
    }).where(eq(constraintAggregators.aggregatorId, __selfId));
    // After mutation: re-validate against `validateConstraintAggregator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(constraintAggregators).where(eq(constraintAggregators.aggregatorId, __selfId)).get();
    // assertNoViolations(validateConstraintAggregator(row as never), "rejectStaleUpdate");
  });
}

// ─── Events on DateSelector ───

export async function selectDate(__selfId: string, candidate: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: candidate <> null
  //   pre: candidate <> ''
  // Post-conditions from spec:
  //   post: self.proposedDate = candidate
  //   post: self.conflictDetected = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dateSelectors).set({
      proposedDate: candidate,
      conflictDetected: false,
    }).where(eq(dateSelectors.selectorId, __selfId));
    // After mutation: re-validate against `validateDateSelector` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dateSelectors).where(eq(dateSelectors.selectorId, __selfId)).get();
    // assertNoViolations(validateDateSelector(row as never), "selectDate");
  });
}

export async function recordConflict(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.proposedDate = ''
  //   post: self.conflictDetected = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dateSelectors).set({
      proposedDate: "",
      conflictDetected: true,
    }).where(eq(dateSelectors.selectorId, __selfId));
    // After mutation: re-validate against `validateDateSelector` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dateSelectors).where(eq(dateSelectors.selectorId, __selfId)).get();
    // assertNoViolations(validateDateSelector(row as never), "recordConflict");
  });
}

export async function clearProposal(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.proposedDate <> ''
  // Post-conditions from spec:
  //   post: self.proposedDate = ''
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dateSelectors).set({
      proposedDate: "",
    }).where(eq(dateSelectors.selectorId, __selfId));
    // After mutation: re-validate against `validateDateSelector` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dateSelectors).where(eq(dateSelectors.selectorId, __selfId)).get();
    // assertNoViolations(validateDateSelector(row as never), "clearProposal");
  });
}

export async function rejectExcludedCandidate(__selfId: string, candidate: string, isExcluded: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: candidate <> null
  //   pre: candidate <> ''
  //   pre: isExcluded = true
  // Post-conditions from spec:
  //   post: self.proposedDate = ''
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(dateSelectors).set({
      proposedDate: "",
    }).where(eq(dateSelectors.selectorId, __selfId));
    // After mutation: re-validate against `validateDateSelector` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(dateSelectors).where(eq(dateSelectors.selectorId, __selfId)).get();
    // assertNoViolations(validateDateSelector(row as never), "rejectExcludedCandidate");
  });
}

// ─── Events on MeetingSchedulerSystem ───

export async function requestMeeting(__selfId: string, reqId: string, earliest: string, latest: string, participantCount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'IDLE'
  //   pre: reqId <> null
  //   pre: earliest <> null
  //   pre: latest <> null
  //   pre: participantCount > 0
  // Post-conditions from spec:
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
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      requestStatus: "OPEN",
      currentRequestId: reqId,
      rangeEarliest: earliest,
      rangeLatest: latest,
      invitedParticipantCount: participantCount,
      constraintSubmissionCount: 0,
      allConstraintsCollected: false,
      initiatorInformed: false,
      participantsNotified: false,
      proposedDate: "",
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "requestMeeting");
  });
}

export async function submitConstraints(__selfId: string, participantId: string, excluded: unknown, preferred: unknown): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: participantId <> null
  //   pre: self.constraintSubmissionCount < self.invitedParticipantCount
  // Post-conditions from spec:
  //   post: excluded->forAll(d | self.allExcludedDates->includes(d))
  //   post: preferred->forAll(d | self.commonPreferredDates->includes(d))
  //   post: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre + 1
  //   post: self.allConstraintsCollected =
            (self.constraintSubmissionCount = self.invitedParticipantCount)
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      constraintSubmissionCount: sql`${meetingSchedulerSystems.constraintSubmissionCount} + ${1}`,
      allConstraintsCollected: sql`${meetingSchedulerSystems.constraintSubmissionCount} = ${meetingSchedulerSystems.invitedParticipantCount}`,
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "submitConstraints");
  });
}

export async function proposeDate(__selfId: string, candidate: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: self.allConstraintsCollected = true
  //   pre: candidate <> null
  //   pre: candidate <> ''
  //   pre: not self.allExcludedDates->includes(candidate)
  // Post-conditions from spec:
  //   post: self.proposedDate = candidate
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      proposedDate: candidate,
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "proposeDate");
  });
}

export async function reportConflict(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: self.allConstraintsCollected = true
  // Post-conditions from spec:
  //   post: self.requestStatus = 'CONFLICT'
  //   post: self.initiatorInformed = true
  //   post: self.proposedDate = ''
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      requestStatus: "CONFLICT",
      initiatorInformed: true,
      proposedDate: "",
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "reportConflict");
  });
}

export async function confirmMeeting(__selfId: string, loc: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: self.proposedDate <> ''
  //   pre: not self.allExcludedDates->includes(self.proposedDate)
  //   pre: loc <> null
  // Post-conditions from spec:
  //   post: self.requestStatus = 'CONFIRMED'
  //   post: self.location = loc
  //   post: self.participantsNotified = true
  //   post: self.initiatorInformed = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      requestStatus: "CONFIRMED",
      location: loc,
      participantsNotified: true,
      initiatorInformed: true,
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "confirmMeeting");
  });
}

export async function updateConstraints(__selfId: string, participantId: string, newExcluded: unknown, newPreferred: unknown): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: participantId <> null
  // Post-conditions from spec:
  //   post: newExcluded->forAll(d | self.allExcludedDates->includes(d))
  //   post: newPreferred->forAll(d | self.commonPreferredDates->includes(d))
  //   post: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))
  //   post: self.proposedDate = ''
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      proposedDate: "",
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "updateConstraints");
  });
}

// ─── Events on MeetingSchedulerSystemFormalized ───

export async function rejectExcludedDate(__selfId: string, candidate: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: candidate <> null
  //   pre: candidate <> ''
  //   pre: self.allExcludedDates->includes(candidate)
  // Post-conditions from spec:
  //   post: self.proposedDate = ''
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystemFormalizeds).set({
      proposedDate: "",
    }).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystemFormalizeds).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystemFormalized(row as never), "rejectExcludedDate");
  });
}

export async function rejectPrematureConfirm(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: self.allConstraintsCollected = false or self.proposedDate = ''
  // Post-conditions from spec:
  //   post: self.initiatorInformed = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystemFormalizeds).set({
      initiatorInformed: false,
    }).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystemFormalizeds).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystemFormalized(row as never), "rejectPrematureConfirm");
  });
}

export async function rejectDuplicateRequest(__selfId: string, newReqId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: newReqId <> null
  //   pre: newReqId <> self.currentRequestId
  // Post-conditions from spec:
  //   post: self.requestStatus = 'OPEN'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystemFormalizeds).set({
      requestStatus: "OPEN",
    }).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystemFormalizeds).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystemFormalized(row as never), "rejectDuplicateRequest");
  });
}

export async function rejectInvertedRange(__selfId: string, earliest: string, latest: string, callerAssertedInverted: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'IDLE'
  //   pre: earliest <> null
  //   pre: latest <> null
  //   pre: callerAssertedInverted = true
  // Post-conditions from spec:
  //   post: self.requestStatus = 'IDLE'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystemFormalizeds).set({
      requestStatus: "IDLE",
    }).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystemFormalizeds).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystemFormalized(row as never), "rejectInvertedRange");
  });
}

export async function rejectStaleConstraintRetention(__selfId: string, participantId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'CONFIRMED' or self.requestStatus = 'CONFLICT'
  //   pre: participantId <> null
  // Post-conditions from spec:
  //   post: self.participantsNotified = self.participantsNotified@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystemFormalizeds).set({
      participantsNotified: sql`${meetingSchedulerSystemFormalizeds.participantsNotified}`,
    }).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystemFormalizeds).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystemFormalized(row as never), "rejectStaleConstraintRetention");
  });
}

export async function rejectOverQuotaSubmission(__selfId: string, participantId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: participantId <> null
  //   pre: self.constraintSubmissionCount >= self.invitedParticipantCount
  // Post-conditions from spec:
  //   post: self.constraintSubmissionCount = self.constraintSubmissionCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystemFormalizeds).set({
      constraintSubmissionCount: sql`${meetingSchedulerSystemFormalizeds.constraintSubmissionCount}`,
    }).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystemFormalizeds).where(eq(meetingSchedulerSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystemFormalized(row as never), "rejectOverQuotaSubmission");
  });
}

// ─── Events on NotificationDispatcher ───

export async function dispatchConfirmation(__selfId: string, date: string, loc: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: date <> null
  //   pre: date <> ''
  //   pre: loc <> null
  // Post-conditions from spec:
  //   post: self.confirmedDate = date
  //   post: self.confirmedLocation = loc
  //   post: self.participantsNotified = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationDispatchers).set({
      confirmedDate: date,
      confirmedLocation: loc,
      participantsNotified: true,
    }).where(eq(notificationDispatchers.dispatcherId, __selfId));
    // After mutation: re-validate against `validateNotificationDispatcher` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationDispatchers).where(eq(notificationDispatchers.dispatcherId, __selfId)).get();
    // assertNoViolations(validateNotificationDispatcher(row as never), "dispatchConfirmation");
  });
}

export async function dispatchConflictNotice(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.participantsNotified = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationDispatchers).set({
      participantsNotified: false,
    }).where(eq(notificationDispatchers.dispatcherId, __selfId));
    // After mutation: re-validate against `validateNotificationDispatcher` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationDispatchers).where(eq(notificationDispatchers.dispatcherId, __selfId)).get();
    // assertNoViolations(validateNotificationDispatcher(row as never), "dispatchConflictNotice");
  });
}

export async function rejectPrematureDispatch(__selfId: string, dateReady: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: dateReady = false
  // Post-conditions from spec:
  //   post: self.participantsNotified = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationDispatchers).set({
      participantsNotified: false,
    }).where(eq(notificationDispatchers.dispatcherId, __selfId));
    // After mutation: re-validate against `validateNotificationDispatcher` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationDispatchers).where(eq(notificationDispatchers.dispatcherId, __selfId)).get();
    // assertNoViolations(validateNotificationDispatcher(row as never), "rejectPrematureDispatch");
  });
}

// ─── Events on RequestManager ───

export async function openRequest(__selfId: string, reqId: string, earliest: string, latest: string, participantCount: number, initId: string, initEmail: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'IDLE'
  //   pre: reqId <> null
  //   pre: earliest <> null
  //   pre: latest <> null
  //   pre: participantCount > 0
  //   pre: initId <> null
  // Post-conditions from spec:
  //   post: self.requestStatus = 'OPEN'
  //   post: self.currentRequestId = reqId
  //   post: self.rangeEarliest = earliest
  //   post: self.rangeLatest = latest
  //   post: self.invitedParticipantCount = participantCount
  //   post: self.initiatorId = initId
  //   post: self.initiatorEmail = initEmail
  //   post: self.initiatorInformed = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(requestManagers).set({
      requestStatus: "OPEN",
      currentRequestId: reqId,
      rangeEarliest: earliest,
      rangeLatest: latest,
      invitedParticipantCount: participantCount,
      initiatorId: initId,
      initiatorEmail: initEmail,
      initiatorInformed: false,
    }).where(eq(requestManagers.managerId, __selfId));
    // After mutation: re-validate against `validateRequestManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(requestManagers).where(eq(requestManagers.managerId, __selfId)).get();
    // assertNoViolations(validateRequestManager(row as never), "openRequest");
  });
}

export async function markConfirmed(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  // Post-conditions from spec:
  //   post: self.requestStatus = 'CONFIRMED'
  //   post: self.initiatorInformed = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(requestManagers).set({
      requestStatus: "CONFIRMED",
      initiatorInformed: true,
    }).where(eq(requestManagers.managerId, __selfId));
    // After mutation: re-validate against `validateRequestManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(requestManagers).where(eq(requestManagers.managerId, __selfId)).get();
    // assertNoViolations(validateRequestManager(row as never), "markConfirmed");
  });
}

export async function markConflict(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  // Post-conditions from spec:
  //   post: self.requestStatus = 'CONFLICT'
  //   post: self.initiatorInformed = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(requestManagers).set({
      requestStatus: "CONFLICT",
      initiatorInformed: true,
    }).where(eq(requestManagers.managerId, __selfId));
    // After mutation: re-validate against `validateRequestManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(requestManagers).where(eq(requestManagers.managerId, __selfId)).get();
    // assertNoViolations(validateRequestManager(row as never), "markConflict");
  });
}

export async function rejectDuplicateOpen(__selfId: string, newReqId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'OPEN'
  //   pre: newReqId <> null
  //   pre: newReqId <> self.currentRequestId
  // Post-conditions from spec:
  //   post: self.requestStatus = 'OPEN'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(requestManagers).set({
      requestStatus: "OPEN",
    }).where(eq(requestManagers.managerId, __selfId));
    // After mutation: re-validate against `validateRequestManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(requestManagers).where(eq(requestManagers.managerId, __selfId)).get();
    // assertNoViolations(validateRequestManager(row as never), "rejectDuplicateOpen");
  });
}

export async function rejectInvertedRange(__selfId: string, earliest: string, latest: string, callerAssertedInverted: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.requestStatus = 'IDLE'
  //   pre: earliest <> null
  //   pre: latest <> null
  //   pre: callerAssertedInverted = true
  // Post-conditions from spec:
  //   post: self.requestStatus = 'IDLE'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(requestManagers).set({
      requestStatus: "IDLE",
    }).where(eq(requestManagers.managerId, __selfId));
    // After mutation: re-validate against `validateRequestManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(requestManagers).where(eq(requestManagers.managerId, __selfId)).get();
    // assertNoViolations(validateRequestManager(row as never), "rejectInvertedRange");
  });
}
