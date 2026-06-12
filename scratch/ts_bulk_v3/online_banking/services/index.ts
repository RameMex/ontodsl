// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { accountLedgers, journalStores, notificationServices, onlineBankingSystemFormalizeds, onlineBankingSystems, transferCoordinators } from "../db/schema.js";
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

// ─── Events on AccountLedger ───

export async function captureSnapshot(__selfId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: amount > 0.0
  //   pre: self.sourceBalance >= amount
  // Post-conditions from spec:
  //   post: self.pendingSourceBalance = self.sourceBalance
  //   post: self.pendingDestinationBalance = self.destinationBalance
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(accountLedgers).set({
      pendingSourceBalance: sql`${accountLedgers.sourceBalance}`,
      pendingDestinationBalance: sql`${accountLedgers.destinationBalance}`,
    }).where(eq(accountLedgers.ledgerId, __selfId));
    // After mutation: re-validate against `validateAccountLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(accountLedgers).where(eq(accountLedgers.ledgerId, __selfId)).get();
    // assertNoViolations(validateAccountLedger(row as never), "captureSnapshot");
  });
}

export async function applyDebitCredit(__selfId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: amount > 0.0
  //   pre: self.sourceBalance >= amount
  // Post-conditions from spec:
  //   post: self.sourceBalance = self.sourceBalance@pre - amount
  //   post: self.destinationBalance = self.destinationBalance@pre + amount
  //   post: self.sourceBalance >= 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(accountLedgers).set({
      sourceBalance: sql`${accountLedgers.sourceBalance} - ${amount}`,
      destinationBalance: sql`${accountLedgers.destinationBalance} + ${amount}`,
    }).where(eq(accountLedgers.ledgerId, __selfId));
    // After mutation: re-validate against `validateAccountLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(accountLedgers).where(eq(accountLedgers.ledgerId, __selfId)).get();
    // assertNoViolations(validateAccountLedger(row as never), "applyDebitCredit");
  });
}

export async function restoreSnapshot(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.pendingSourceBalance >= 0.0
  //   pre: self.pendingDestinationBalance >= 0.0
  // Post-conditions from spec:
  //   post: self.sourceBalance = self.pendingSourceBalance
  //   post: self.destinationBalance = self.pendingDestinationBalance
  //   post: self.sourceBalance >= 0.0
  //   post: self.destinationBalance >= 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(accountLedgers).set({
      sourceBalance: sql`${accountLedgers.pendingSourceBalance}`,
      destinationBalance: sql`${accountLedgers.pendingDestinationBalance}`,
    }).where(eq(accountLedgers.ledgerId, __selfId));
    // After mutation: re-validate against `validateAccountLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(accountLedgers).where(eq(accountLedgers.ledgerId, __selfId)).get();
    // assertNoViolations(validateAccountLedger(row as never), "restoreSnapshot");
  });
}

export async function clearSnapshot(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.pendingSourceBalance = 0.0
  //   post: self.pendingDestinationBalance = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(accountLedgers).set({
      pendingSourceBalance: 0,
      pendingDestinationBalance: 0,
    }).where(eq(accountLedgers.ledgerId, __selfId));
    // After mutation: re-validate against `validateAccountLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(accountLedgers).where(eq(accountLedgers.ledgerId, __selfId)).get();
    // assertNoViolations(validateAccountLedger(row as never), "clearSnapshot");
  });
}

// ─── Events on JournalStore ───

export async function writeEntry(__selfId: string, transferId: string, preSrc: number, postSrc: number, preDst: number, postDst: number, amount: number, createdAt: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.journalWritten = false
  //   pre: transferId <> null
  //   pre: amount > 0.0
  //   pre: preSrc >= 0.0
  //   pre: postSrc >= 0.0
  //   pre: preDst >= 0.0
  //   pre: postDst >= 0.0
  //   pre: postSrc < preSrc
  //   pre: postDst > preDst
  // Post-conditions from spec:
  //   post: self.journalWritten = true
  //   post: self.entryTransferId = transferId
  //   post: self.preSourceBalance = preSrc
  //   post: self.postSourceBalance = postSrc
  //   post: self.preDestinationBalance = preDst
  //   post: self.postDestinationBalance = postDst
  //   post: self.entryAmount = amount
  //   post: self.entryCreatedAt = createdAt
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(journalStores).set({
      journalWritten: true,
      entryTransferId: transferId,
      preSourceBalance: preSrc,
      postSourceBalance: postSrc,
      preDestinationBalance: preDst,
      postDestinationBalance: postDst,
      entryAmount: amount,
      entryCreatedAt: createdAt,
    }).where(eq(journalStores.storeId, __selfId));
    // After mutation: re-validate against `validateJournalStore` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(journalStores).where(eq(journalStores.storeId, __selfId)).get();
    // assertNoViolations(validateJournalStore(row as never), "writeEntry");
  });
}

export async function clearJournal(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.journalWritten = true
  // Post-conditions from spec:
  //   post: self.journalWritten = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(journalStores).set({
      journalWritten: false,
    }).where(eq(journalStores.storeId, __selfId));
    // After mutation: re-validate against `validateJournalStore` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(journalStores).where(eq(journalStores.storeId, __selfId)).get();
    // assertNoViolations(validateJournalStore(row as never), "clearJournal");
  });
}

// ─── Events on NotificationService ───

export async function sendSuccessNotification(__selfId: string, transferId: string, journalConfirmed: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: journalConfirmed = true
  //   pre: transferId <> null
  //   pre: self.customerNotified = false
  // Post-conditions from spec:
  //   post: self.customerNotified = true
  //   post: self.lastNotifiedTransferId = transferId
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationServices).set({
      customerNotified: true,
      lastNotifiedTransferId: transferId,
    }).where(eq(notificationServices.serviceId, __selfId));
    // After mutation: re-validate against `validateNotificationService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationServices).where(eq(notificationServices.serviceId, __selfId)).get();
    // assertNoViolations(validateNotificationService(row as never), "sendSuccessNotification");
  });
}

export async function sendFailureNotification(__selfId: string, transferId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: transferId <> null
  //   pre: self.customerNotified = false
  // Post-conditions from spec:
  //   post: self.customerNotified = true
  //   post: self.lastNotifiedTransferId = transferId
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationServices).set({
      customerNotified: true,
      lastNotifiedTransferId: transferId,
    }).where(eq(notificationServices.serviceId, __selfId));
    // After mutation: re-validate against `validateNotificationService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationServices).where(eq(notificationServices.serviceId, __selfId)).get();
    // assertNoViolations(validateNotificationService(row as never), "sendFailureNotification");
  });
}

export async function resetNotification(__selfId: string): Promise<void> {
  // Post-conditions from spec:
  //   post: self.customerNotified = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(notificationServices).set({
      customerNotified: false,
    }).where(eq(notificationServices.serviceId, __selfId));
    // After mutation: re-validate against `validateNotificationService` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(notificationServices).where(eq(notificationServices.serviceId, __selfId)).get();
    // assertNoViolations(validateNotificationService(row as never), "resetNotification");
  });
}

// ─── Events on OnlineBankingSystem ───

export async function initiateTransfer(__selfId: string, transferId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'IDLE'
  //   pre: transferId <> null
  //   pre: amount > 0.0
  //   pre: self.sourceBalance >= amount
  // Post-conditions from spec:
  //   post: self.transferState = 'PENDING'
  //   post: self.currentTransferId = transferId
  //   post: self.currentAmount = amount
  //   post: self.pendingSourceBalance = self.sourceBalance@pre
  //   post: self.pendingDestinationBalance = self.destinationBalance@pre
  //   post: self.journalWritten = false
  //   post: self.customerNotified = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystems).set({
      transferState: "PENDING",
      currentTransferId: transferId,
      currentAmount: amount,
      pendingSourceBalance: sql`${onlineBankingSystems.sourceBalance}`,
      pendingDestinationBalance: sql`${onlineBankingSystems.destinationBalance}`,
      journalWritten: false,
      customerNotified: false,
    }).where(eq(onlineBankingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystems).where(eq(onlineBankingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystem(row as never), "initiateTransfer");
  });
}

export async function executeTransfer(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'PENDING'
  //   pre: self.currentAmount > 0.0
  //   pre: self.sourceBalance >= self.currentAmount
  // Post-conditions from spec:
  //   post: self.sourceBalance = self.sourceBalance@pre - self.currentAmount
  //   post: self.destinationBalance = self.destinationBalance@pre + self.currentAmount
  //   post: self.sourceBalance >= 0.0
  //   post: self.transferState = 'PENDING'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystems).set({
      sourceBalance: sql`${onlineBankingSystems.sourceBalance} - ${onlineBankingSystems.currentAmount}`,
      destinationBalance: sql`${onlineBankingSystems.destinationBalance} + ${onlineBankingSystems.currentAmount}`,
      transferState: "PENDING",
    }).where(eq(onlineBankingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystems).where(eq(onlineBankingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystem(row as never), "executeTransfer");
  });
}

export async function writeJournalEntry(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'PENDING'
  //   pre: self.journalWritten = false
  //   pre: self.sourceBalance < self.pendingSourceBalance
  // Post-conditions from spec:
  //   post: self.journalWritten = true
  //   post: self.transferState = 'COMPLETED'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystems).set({
      journalWritten: true,
      transferState: "COMPLETED",
    }).where(eq(onlineBankingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystems).where(eq(onlineBankingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystem(row as never), "writeJournalEntry");
  });
}

export async function notifyCustomer(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.journalWritten = true
  //   pre: self.transferState = 'COMPLETED'
  //   pre: self.customerNotified = false
  // Post-conditions from spec:
  //   post: self.customerNotified = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystems).set({
      customerNotified: true,
    }).where(eq(onlineBankingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystems).where(eq(onlineBankingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystem(row as never), "notifyCustomer");
  });
}

export async function rollbackTransfer(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'PENDING'
  // Post-conditions from spec:
  //   post: self.sourceBalance = self.pendingSourceBalance
  //   post: self.destinationBalance = self.pendingDestinationBalance
  //   post: self.transferState = 'ROLLED_BACK'
  //   post: self.sourceBalance >= 0.0
  //   post: self.destinationBalance >= 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystems).set({
      sourceBalance: sql`${onlineBankingSystems.pendingSourceBalance}`,
      destinationBalance: sql`${onlineBankingSystems.pendingDestinationBalance}`,
      transferState: "ROLLED_BACK",
    }).where(eq(onlineBankingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystems).where(eq(onlineBankingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystem(row as never), "rollbackTransfer");
  });
}

export async function recoverPendingTransfer(__selfId: string, shouldComplete: boolean): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'PENDING'
  //   pre: self.pendingSourceBalance >= 0.0
  //   pre: self.pendingDestinationBalance >= 0.0
  // Post-conditions from spec:
  //   post: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'
  //   post: self.sourceBalance >= 0.0
  //   post: self.destinationBalance >= 0.0
  // TODO: implement mutation logic for 'OnlineBankingSystem.recoverPendingTransfer'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: recoverPendingTransfer");
}

export async function resetToIdle(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'
  // Post-conditions from spec:
  //   post: self.transferState = 'IDLE'
  //   post: self.currentAmount = 0.0
  //   post: self.journalWritten = false
  //   post: self.customerNotified = false
  //   post: self.pendingSourceBalance = 0.0
  //   post: self.pendingDestinationBalance = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystems).set({
      transferState: "IDLE",
      currentAmount: 0,
      journalWritten: false,
      customerNotified: false,
      pendingSourceBalance: 0,
      pendingDestinationBalance: 0,
    }).where(eq(onlineBankingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystems).where(eq(onlineBankingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystem(row as never), "resetToIdle");
  });
}

// ─── Events on OnlineBankingSystemFormalized ───

export async function rejectOverdraftTransfer(__selfId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'IDLE'
  //   pre: amount > 0.0
  //   pre: self.sourceBalance < amount
  // Post-conditions from spec:
  //   post: self.transferState = 'IDLE'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystemFormalizeds).set({
      transferState: "IDLE",
    }).where(eq(onlineBankingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystemFormalizeds).where(eq(onlineBankingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystemFormalized(row as never), "rejectOverdraftTransfer");
  });
}

export async function rejectPrematureNotification(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.journalWritten = false
  //   pre: self.customerNotified = false
  // Post-conditions from spec:
  //   post: self.customerNotified = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystemFormalizeds).set({
      customerNotified: false,
    }).where(eq(onlineBankingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystemFormalizeds).where(eq(onlineBankingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystemFormalized(row as never), "rejectPrematureNotification");
  });
}

export async function rejectAmlCapViolation(__selfId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'IDLE'
  //   pre: amount > 10000.0
  // Post-conditions from spec:
  //   post: self.transferState = 'IDLE'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystemFormalizeds).set({
      transferState: "IDLE",
    }).where(eq(onlineBankingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystemFormalizeds).where(eq(onlineBankingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystemFormalized(row as never), "rejectAmlCapViolation");
  });
}

export async function forceRollbackOnTimeout(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'PENDING'
  //   pre: self.pendingSourceBalance >= 0.0
  //   pre: self.pendingDestinationBalance >= 0.0
  // Post-conditions from spec:
  //   post: self.sourceBalance = self.pendingSourceBalance
  //   post: self.destinationBalance = self.pendingDestinationBalance
  //   post: self.transferState = 'ROLLED_BACK'
  //   post: self.sourceBalance >= 0.0
  //   post: self.destinationBalance >= 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystemFormalizeds).set({
      sourceBalance: sql`${onlineBankingSystemFormalizeds.pendingSourceBalance}`,
      destinationBalance: sql`${onlineBankingSystemFormalizeds.pendingDestinationBalance}`,
      transferState: "ROLLED_BACK",
    }).where(eq(onlineBankingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystemFormalizeds).where(eq(onlineBankingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystemFormalized(row as never), "forceRollbackOnTimeout");
  });
}

export async function rejectNonPositiveAmount(__selfId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'IDLE'
  //   pre: amount <= 0.0
  // Post-conditions from spec:
  //   post: self.transferState = 'IDLE'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(onlineBankingSystemFormalizeds).set({
      transferState: "IDLE",
    }).where(eq(onlineBankingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateOnlineBankingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(onlineBankingSystemFormalizeds).where(eq(onlineBankingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateOnlineBankingSystemFormalized(row as never), "rejectNonPositiveAmount");
  });
}

// ─── Events on TransferCoordinator ───

export async function beginTransfer(__selfId: string, transferId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'IDLE'
  //   pre: transferId <> null
  //   pre: amount > 0.0
  // Post-conditions from spec:
  //   post: self.transferState = 'PENDING'
  //   post: self.currentTransferId = transferId
  //   post: self.currentAmount = amount
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(transferCoordinators).set({
      transferState: "PENDING",
      currentTransferId: transferId,
      currentAmount: amount,
    }).where(eq(transferCoordinators.coordinatorId, __selfId));
    // After mutation: re-validate against `validateTransferCoordinator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(transferCoordinators).where(eq(transferCoordinators.coordinatorId, __selfId)).get();
    // assertNoViolations(validateTransferCoordinator(row as never), "beginTransfer");
  });
}

export async function completeTransfer(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'PENDING'
  // Post-conditions from spec:
  //   post: self.transferState = 'COMPLETED'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(transferCoordinators).set({
      transferState: "COMPLETED",
    }).where(eq(transferCoordinators.coordinatorId, __selfId));
    // After mutation: re-validate against `validateTransferCoordinator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(transferCoordinators).where(eq(transferCoordinators.coordinatorId, __selfId)).get();
    // assertNoViolations(validateTransferCoordinator(row as never), "completeTransfer");
  });
}

export async function markRolledBack(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'PENDING'
  // Post-conditions from spec:
  //   post: self.transferState = 'ROLLED_BACK'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(transferCoordinators).set({
      transferState: "ROLLED_BACK",
    }).where(eq(transferCoordinators.coordinatorId, __selfId));
    // After mutation: re-validate against `validateTransferCoordinator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(transferCoordinators).where(eq(transferCoordinators.coordinatorId, __selfId)).get();
    // assertNoViolations(validateTransferCoordinator(row as never), "markRolledBack");
  });
}

export async function resetCoordinator(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'
  // Post-conditions from spec:
  //   post: self.transferState = 'IDLE'
  //   post: self.currentAmount = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(transferCoordinators).set({
      transferState: "IDLE",
      currentAmount: 0,
    }).where(eq(transferCoordinators.coordinatorId, __selfId));
    // After mutation: re-validate against `validateTransferCoordinator` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(transferCoordinators).where(eq(transferCoordinators.coordinatorId, __selfId)).get();
    // assertNoViolations(validateTransferCoordinator(row as never), "resetCoordinator");
  });
}
