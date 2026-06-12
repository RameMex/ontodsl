// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { constraintManagers, meetingSchedulerSystems, meetingStores, notificationServices, requestManagers } from "../db/schema.js";
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

// ─── Events on ConstraintManager ───

export async function updateConstraints(__selfId: string, exclusions: unknown, preferences: unknown): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: exclusions->forAll(d | d >= 0.0)
  //   pre: preferences->forAll(d | d >= 0.0)
  //   pre: preferences->forAll(d | not exclusions->includes(d))
  // Post-conditions from spec:
  //   post: self.exclusionDates = exclusions
  //   post: self.preferenceDates = preferences
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(constraintManagers).set({
      exclusionDates: exclusions,
      preferenceDates: preferences,
    }).where(eq(constraintManagers.constraintId, __selfId));
    // After mutation: re-validate against `validateConstraintManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(constraintManagers).where(eq(constraintManagers.constraintId, __selfId)).get();
    // assertNoViolations(validateConstraintManager(row as never), "updateConstraints");
  });
}

// ─── Events on MeetingSchedulerSystem ───

export async function requestMeeting(__selfId: string, start: number, end: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: start >= 0.0
  //   pre: end >= start
  //   pre: start <= end
  // Post-conditions from spec:
  //   post: self.rangeStart = start
  //   post: self.rangeEnd = end
  //   post: self.conflictReported = false
  //   post: self.notificationSent = false
  //   post: self.constraintUpdateAccepted = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      rangeStart: start,
      rangeEnd: end,
      conflictReported: false,
      notificationSent: false,
      constraintUpdateAccepted: false,
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "requestMeeting");
  });
}

export async function proposeDate(__selfId: string, date: number): Promise<number> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: date >= self.rangeStart
  //   pre: date <= self.rangeEnd
  // Post-conditions from spec:
  //   post: self.proposedDate = date
  //   post: self.proposedDate >= self.rangeStart
  //   post: self.proposedDate <= self.rangeEnd
  //   post: result = date
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      proposedDate: date,
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "proposeDate");
  });
}

export async function reportConflict(__selfId: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.conflictReported
  // Post-conditions from spec:
  //   post: self.conflictReported = true
  //   post: result = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      conflictReported: true,
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "reportConflict");
  });
}

export async function notifyParticipants(__selfId: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.notificationSent
  // Post-conditions from spec:
  //   post: self.notificationSent = true
  //   post: result = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      notificationSent: true,
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "notifyParticipants");
  });
}

export async function acceptConstraintUpdate(__selfId: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: not self.constraintUpdateAccepted
  // Post-conditions from spec:
  //   post: self.constraintUpdateAccepted = true
  //   post: result = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      constraintUpdateAccepted: true,
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "acceptConstraintUpdate");
  });
}

export async function confirmMeeting(__selfId: string, date: number, location: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.proposedDate = date
  //   pre: location <> null
  //   pre: not self.conflictReported
  // Post-conditions from spec:
  //   post: self.notificationSent = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingSchedulerSystems).set({
      notificationSent: false,
    }).where(eq(meetingSchedulerSystems.systemId, __selfId));
    // After mutation: re-validate against `validateMeetingSchedulerSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingSchedulerSystems).where(eq(meetingSchedulerSystems.systemId, __selfId)).get();
    // assertNoViolations(validateMeetingSchedulerSystem(row as never), "confirmMeeting");
  });
}

// ─── Events on MeetingSchedulerSystemFormalized ───

export async function rejectExcessiveDateRange(__selfId: string, start: number, end: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: end - start > 365.0 * 86400.0
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectExcessiveDateRange'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectExcessiveDateRange");
}

export async function rejectUnretainableRequest(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectUnretainableRequest'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectUnretainableRequest");
}

export async function rejectUpdateAfterConfirmation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.rejectUpdateAfterConfirmation'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectUpdateAfterConfirmation");
}

export async function logNotification(__selfId: string, participantId: string, dateSent: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: participantId <> null
  //   pre: dateSent >= 0.0
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.logNotification'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: logNotification");
}

export async function enforceDataRetention(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: true
  // TODO: implement mutation logic for 'MeetingSchedulerSystemFormalized.enforceDataRetention'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: enforceDataRetention");
}

// ─── Events on MeetingStore ───

export async function confirmMeeting(__selfId: string, date: number, location: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: date >= 0.0
  //   pre: location <> null
  //   pre: not self.confirmed
  // Post-conditions from spec:
  //   post: self.scheduledDate = date
  //   post: self.location = location
  //   post: self.confirmed = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(meetingStores).set({
      scheduledDate: date,
      location: location,
      confirmed: true,
    }).where(eq(meetingStores.meetingId, __selfId));
    // After mutation: re-validate against `validateMeetingStore` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(meetingStores).where(eq(meetingStores.meetingId, __selfId)).get();
    // assertNoViolations(validateMeetingStore(row as never), "confirmMeeting");
  });
}

// ─── Events on NotificationService ───

export async function notifyAll(__selfId: string, participants: unknown, date: number, location: string, at: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: participants->notEmpty()
  //   pre: date >= 0.0
  //   pre: location <> null
  //   pre: at >= 0.0
  // Post-conditions from spec:
  //   post: self.lastNotificationSentAt = at
  //   post: self.notificationLog->includes('CONFIRMED')
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationServices).set({
      lastNotificationSentAt: at,
    }).where(eq(notificationServices.notifId, __selfId));
    // After mutation: re-validate against `validateNotificationService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationServices).where(eq(notificationServices.notifId, __selfId)).get();
    // assertNoViolations(validateNotificationService(row as never), "notifyAll");
  });
}

export async function reportConflict(__selfId: string, initiatorId: string, at: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: initiatorId <> null
  //   pre: at >= 0.0
  // Post-conditions from spec:
  //   post: self.lastNotificationSentAt = at
  //   post: self.notificationLog->includes('CONFLICT')
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationServices).set({
      lastNotificationSentAt: at,
    }).where(eq(notificationServices.notifId, __selfId));
    // After mutation: re-validate against `validateNotificationService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationServices).where(eq(notificationServices.notifId, __selfId)).get();
    // assertNoViolations(validateNotificationService(row as never), "reportConflict");
  });
}

// ─── Events on ProposerEngine ───

export async function proposeDate(__selfId: string, rangeStart: number, rangeEnd: number, exclusions: unknown, preferences: unknown): Promise<number> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: rangeStart >= 0.0
  //   pre: rangeEnd >= rangeStart
  // Post-conditions from spec:
  //   post: result >= rangeStart
  //   post: result <= rangeEnd
  //   post: not exclusions->includes(result)
  //   post: if preferences->notEmpty() and preferences->exists(d | d >= rangeStart and d <= rangeEnd and not exclusions->includes(d)) then
            preferences->includes(result)
          else
            true
          endif
  // TODO: implement mutation logic for 'ProposerEngine.proposeDate'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: proposeDate");
}

// ─── Events on RequestManager ───

export async function openRequest(__selfId: string, start: number, end: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: start >= 0.0
  //   pre: end >= start
  // Post-conditions from spec:
  //   post: self.rangeStart = start
  //   post: self.rangeEnd = end
  //   post: self.isOpen = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(requestManagers).set({
      rangeStart: start,
      rangeEnd: end,
      isOpen: true,
    }).where(eq(requestManagers.requestId, __selfId));
    // After mutation: re-validate against `validateRequestManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(requestManagers).where(eq(requestManagers.requestId, __selfId)).get();
    // assertNoViolations(validateRequestManager(row as never), "openRequest");
  });
}

export async function closeRequest(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.isOpen = true
  // Post-conditions from spec:
  //   post: self.isOpen = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(requestManagers).set({
      isOpen: false,
    }).where(eq(requestManagers.requestId, __selfId));
    // After mutation: re-validate against `validateRequestManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(requestManagers).where(eq(requestManagers.requestId, __selfId)).get();
    // assertNoViolations(validateRequestManager(row as never), "closeRequest");
  });
}
