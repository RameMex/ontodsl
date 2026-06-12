// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { alertManagers, deliveryOrchestrators, notificationDispatcherSystemFormalizeds, notificationDispatcherSystems, requestIngestors, retrySchedulers } from "../db/schema.js";
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

// ─── Events on AlertManager ───

export async function raiseAlert(__selfId: string, compositeKey: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: compositeKey <> null
  //   pre: not self.raisedAlerts->includes(compositeKey)
  // Post-conditions from spec:
  //   post: self.raisedAlerts->includes(compositeKey)
  //   post: self.alertCount = self.alertCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(alertManagers).set({
      alertCount: sql`${alertManagers.alertCount} + ${1}`,
    }).where(eq(alertManagers.alertManagerId, __selfId));
    // After mutation: re-validate against `validateAlertManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(alertManagers).where(eq(alertManagers.alertManagerId, __selfId)).get();
    // assertNoViolations(validateAlertManager(row as never), "raiseAlert");
  });
}

// ─── Events on DeliveryOrchestrator ───

export async function markDelivered(__selfId: string, compositeKey: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: compositeKey <> null
  //   pre: not self.deliveredKeys->includes(compositeKey)
  //   pre: not self.failedKeys->includes(compositeKey)
  // Post-conditions from spec:
  //   post: self.deliveredKeys->includes(compositeKey)
  //   post: self.totalDeliveries = self.totalDeliveries@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(deliveryOrchestrators).set({
      totalDeliveries: sql`${deliveryOrchestrators.totalDeliveries} + ${1}`,
    }).where(eq(deliveryOrchestrators.orchestratorId, __selfId));
    // After mutation: re-validate against `validateDeliveryOrchestrator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(deliveryOrchestrators).where(eq(deliveryOrchestrators.orchestratorId, __selfId)).get();
    // assertNoViolations(validateDeliveryOrchestrator(row as never), "markDelivered");
  });
}

export async function markFailed(__selfId: string, compositeKey: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: compositeKey <> null
  //   pre: not self.deliveredKeys->includes(compositeKey)
  //   pre: not self.failedKeys->includes(compositeKey)
  // Post-conditions from spec:
  //   post: self.failedKeys->includes(compositeKey)
  // TODO: implement mutation logic for 'DeliveryOrchestrator.markFailed'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: markFailed");
}

// ─── Events on NotificationDispatcherSystem ───

export async function dispatchNotification(__selfId: string, requestId: string, recipient: string, channels: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: recipient <> null
  //   pre: channels <> null
  //   pre: self.deliveryCount = 0
  // Post-conditions from spec:
  //   post: self.deliveryCount >= self.deliveryCount@pre
  //   post: self.retryCount = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationDispatcherSystems).set({
      retryCount: 0,
    }).where(eq(notificationDispatcherSystems.systemId, __selfId));
    // After mutation: re-validate against `validateNotificationDispatcherSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationDispatcherSystems).where(eq(notificationDispatcherSystems.systemId, __selfId)).get();
    // assertNoViolations(validateNotificationDispatcherSystem(row as never), "dispatchNotification");
  });
}

export async function attemptDelivery(__selfId: string, requestId: string, channelId: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: channelId <> null
  //   pre: self.retryCount <= self.allowedRetries
  // Post-conditions from spec:
  //   post: if result then
            self.deliveryCount = self.deliveryCount@pre + 1
          else
            if self.retryCount@pre < self.allowedRetries then
              self.retryCount = self.retryCount@pre + 1
            else
              self.alertsRaisedCount = self.alertsRaisedCount@pre + 1
            endif
          endif
  //   post: self.retryCount <= self.allowedRetries
  // TODO: implement mutation logic for 'NotificationDispatcherSystem.attemptDelivery'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: attemptDelivery");
}

export async function escalateFailure(__selfId: string, requestId: string, channelId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: channelId <> null
  //   pre: self.alertsRaisedCount > 0
  //   pre: not (self.deliveryCount > 0)
  // TODO: implement mutation logic for 'NotificationDispatcherSystem.escalateFailure'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: escalateFailure");
}

// ─── Events on NotificationDispatcherSystemFormalized ───

export async function rejectInvalidChannels(__selfId: string, requestId: string, channels: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: channels = null or channels = ''
  // Post-conditions from spec:
  //   post: self.deliveryCount = self.deliveryCount@pre
  //   post: self.retryCount = self.retryCount@pre
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationDispatcherSystemFormalizeds).set({
      deliveryCount: sql`${notificationDispatcherSystemFormalizeds.deliveryCount}`,
      retryCount: sql`${notificationDispatcherSystemFormalizeds.retryCount}`,
    }).where(eq(notificationDispatcherSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateNotificationDispatcherSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationDispatcherSystemFormalizeds).where(eq(notificationDispatcherSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateNotificationDispatcherSystemFormalized(row as never), "rejectInvalidChannels");
  });
}

export async function failAfterRetryLimit(__selfId: string, requestId: string, channelId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: channelId <> null
  //   pre: self.retryCount = self.allowedRetries
  // Post-conditions from spec:
  //   post: self.alertsRaisedCount = self.alertsRaisedCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationDispatcherSystemFormalizeds).set({
      alertsRaisedCount: sql`${notificationDispatcherSystemFormalizeds.alertsRaisedCount} + ${1}`,
    }).where(eq(notificationDispatcherSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateNotificationDispatcherSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationDispatcherSystemFormalizeds).where(eq(notificationDispatcherSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateNotificationDispatcherSystemFormalized(row as never), "failAfterRetryLimit");
  });
}

export async function enforceBackoffSchedule(__selfId: string, attemptNumber: number): Promise<number> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: attemptNumber >= 0
  //   pre: attemptNumber <= 5
  // Post-conditions from spec:
  //   post: result >= 1
  //   post: result <= 32
  // TODO: implement mutation logic for 'NotificationDispatcherSystemFormalized.enforceBackoffSchedule'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: enforceBackoffSchedule");
}

export async function verifyNoDuplicateDelivery(__selfId: string, requestId: string, channelId: string): Promise<boolean> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: channelId <> null
  //   pre: self.deliveryCount <= 1
  // Post-conditions from spec:
  //   post: result = (self.deliveryCount = 1)
  // TODO: implement mutation logic for 'NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: verifyNoDuplicateDelivery");
}

// ─── Events on RequestIngestor ───

export async function receiveRequest(__selfId: string, requestId: string, recipient: string, channels: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: requestId <> null
  //   pre: recipient <> null
  //   pre: channels <> null
  //   pre: self.totalRequestsIntaken >= 0
  // Post-conditions from spec:
  //   post: self.totalRequestsIntaken = self.totalRequestsIntaken@pre + 1
  //   post: self.processedRequestCount = self.processedRequestCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(requestIngestors).set({
      totalRequestsIntaken: sql`${requestIngestors.totalRequestsIntaken} + ${1}`,
      processedRequestCount: sql`${requestIngestors.processedRequestCount} + ${1}`,
    }).where(eq(requestIngestors.ingestorId, __selfId));
    // After mutation: re-validate against `validateRequestIngestor` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(requestIngestors).where(eq(requestIngestors.ingestorId, __selfId)).get();
    // assertNoViolations(validateRequestIngestor(row as never), "receiveRequest");
  });
}

// ─── Events on RetryScheduler ───

export async function scheduleRetry(__selfId: string, compositeKey: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: compositeKey <> null
  //   pre: self.activeRetryCount < self.allowedRetries
  // Post-conditions from spec:
  //   post: self.activeRetryKeys->includes(compositeKey)
  //   post: self.activeRetryCount = self.activeRetryCount@pre + 1
  //   post: self.totalRetriesScheduled = self.totalRetriesScheduled@pre + 1
  //   post: self.currentBackoffSeconds = 2 * self.activeRetryCount
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(retrySchedulers).set({
      activeRetryCount: sql`${retrySchedulers.activeRetryCount} + ${1}`,
      totalRetriesScheduled: sql`${retrySchedulers.totalRetriesScheduled} + ${1}`,
      currentBackoffSeconds: sql`${2} * ${retrySchedulers.activeRetryCount}`,
    }).where(eq(retrySchedulers.schedulerId, __selfId));
    // After mutation: re-validate against `validateRetryScheduler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(retrySchedulers).where(eq(retrySchedulers.schedulerId, __selfId)).get();
    // assertNoViolations(validateRetryScheduler(row as never), "scheduleRetry");
  });
}

export async function completeRetry(__selfId: string, compositeKey: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: compositeKey <> null
  //   pre: self.activeRetryKeys->includes(compositeKey)
  // Post-conditions from spec:
  //   post: not self.activeRetryKeys->includes(compositeKey)
  //   post: self.activeRetryCount = self.activeRetryCount@pre - 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(retrySchedulers).set({
      activeRetryCount: sql`${retrySchedulers.activeRetryCount} - ${1}`,
    }).where(eq(retrySchedulers.schedulerId, __selfId));
    // After mutation: re-validate against `validateRetryScheduler` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(retrySchedulers).where(eq(retrySchedulers.schedulerId, __selfId)).get();
    // assertNoViolations(validateRetryScheduler(row as never), "completeRetry");
  });
}
