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

// ─── Events on AccountLedger ───

export async function captureSnapshot(amount: number): Promise<void> {
  // TODO: implement mutation logic for 'AccountLedger.captureSnapshot'.
  // Pre-conditions from spec:
  //   pre: amount > 0.0
  //   pre: self.sourceBalance >= amount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pendingSourceBalance = self.sourceBalance
  //   post: self.pendingDestinationBalance = self.destinationBalance
  // After mutations, call validate*() on the affected AccountLedger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: captureSnapshot");
}

export async function applyDebitCredit(amount: number): Promise<void> {
  // TODO: implement mutation logic for 'AccountLedger.applyDebitCredit'.
  // Pre-conditions from spec:
  //   pre: amount > 0.0
  //   pre: self.sourceBalance >= amount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sourceBalance = self.sourceBalance@pre - amount
  //   post: self.destinationBalance = self.destinationBalance@pre + amount
  //   post: self.sourceBalance >= 0.0
  // After mutations, call validate*() on the affected AccountLedger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: applyDebitCredit");
}

export async function restoreSnapshot(): Promise<void> {
  // TODO: implement mutation logic for 'AccountLedger.restoreSnapshot'.
  // Pre-conditions from spec:
  //   pre: self.pendingSourceBalance >= 0.0
  //   pre: self.pendingDestinationBalance >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sourceBalance = self.pendingSourceBalance
  //   post: self.destinationBalance = self.pendingDestinationBalance
  //   post: self.sourceBalance >= 0.0
  //   post: self.destinationBalance >= 0.0
  // After mutations, call validate*() on the affected AccountLedger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: restoreSnapshot");
}

export async function clearSnapshot(): Promise<void> {
  // TODO: implement mutation logic for 'AccountLedger.clearSnapshot'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.pendingSourceBalance = 0.0
  //   post: self.pendingDestinationBalance = 0.0
  // After mutations, call validate*() on the affected AccountLedger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearSnapshot");
}

// ─── Events on JournalStore ───

export async function writeEntry(transferId: string, preSrc: number, postSrc: number, preDst: number, postDst: number, amount: number, createdAt: number): Promise<void> {
  // TODO: implement mutation logic for 'JournalStore.writeEntry'.
  // Pre-conditions from spec:
  //   pre: self.journalWritten = false
  //   pre: transferId <> null
  //   pre: amount > 0.0
  //   pre: preSrc >= 0.0
  //   pre: postSrc >= 0.0
  //   pre: preDst >= 0.0
  //   pre: postDst >= 0.0
  //   pre: postSrc < preSrc
  //   pre: postDst > preDst
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.journalWritten = true
  //   post: self.entryTransferId = transferId
  //   post: self.preSourceBalance = preSrc
  //   post: self.postSourceBalance = postSrc
  //   post: self.preDestinationBalance = preDst
  //   post: self.postDestinationBalance = postDst
  //   post: self.entryAmount = amount
  //   post: self.entryCreatedAt = createdAt
  // After mutations, call validate*() on the affected JournalStore snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: writeEntry");
}

export async function clearJournal(): Promise<void> {
  // TODO: implement mutation logic for 'JournalStore.clearJournal'.
  // Pre-conditions from spec:
  //   pre: self.journalWritten = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.journalWritten = false
  // After mutations, call validate*() on the affected JournalStore snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: clearJournal");
}

// ─── Events on NotificationService ───

export async function sendSuccessNotification(transferId: string, journalConfirmed: boolean): Promise<void> {
  // TODO: implement mutation logic for 'NotificationService.sendSuccessNotification'.
  // Pre-conditions from spec:
  //   pre: journalConfirmed = true
  //   pre: transferId <> null
  //   pre: self.customerNotified = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.customerNotified = true
  //   post: self.lastNotifiedTransferId = transferId
  // After mutations, call validate*() on the affected NotificationService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: sendSuccessNotification");
}

export async function sendFailureNotification(transferId: string): Promise<void> {
  // TODO: implement mutation logic for 'NotificationService.sendFailureNotification'.
  // Pre-conditions from spec:
  //   pre: transferId <> null
  //   pre: self.customerNotified = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.customerNotified = true
  //   post: self.lastNotifiedTransferId = transferId
  // After mutations, call validate*() on the affected NotificationService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: sendFailureNotification");
}

export async function resetNotification(): Promise<void> {
  // TODO: implement mutation logic for 'NotificationService.resetNotification'.
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.customerNotified = false
  // After mutations, call validate*() on the affected NotificationService snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetNotification");
}

// ─── Events on OnlineBankingSystem ───

export async function initiateTransfer(transferId: string, amount: number): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystem.initiateTransfer'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'IDLE'
  //   pre: transferId <> null
  //   pre: amount > 0.0
  //   pre: self.sourceBalance >= amount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'PENDING'
  //   post: self.currentTransferId = transferId
  //   post: self.currentAmount = amount
  //   post: self.pendingSourceBalance = self.sourceBalance@pre
  //   post: self.pendingDestinationBalance = self.destinationBalance@pre
  //   post: self.journalWritten = false
  //   post: self.customerNotified = false
  // After mutations, call validate*() on the affected OnlineBankingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: initiateTransfer");
}

export async function executeTransfer(): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystem.executeTransfer'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'PENDING'
  //   pre: self.currentAmount > 0.0
  //   pre: self.sourceBalance >= self.currentAmount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sourceBalance = self.sourceBalance@pre - self.currentAmount
  //   post: self.destinationBalance = self.destinationBalance@pre + self.currentAmount
  //   post: self.sourceBalance >= 0.0
  //   post: self.transferState = 'PENDING'
  // After mutations, call validate*() on the affected OnlineBankingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: executeTransfer");
}

export async function writeJournalEntry(): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystem.writeJournalEntry'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'PENDING'
  //   pre: self.journalWritten = false
  //   pre: self.sourceBalance < self.pendingSourceBalance
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.journalWritten = true
  //   post: self.transferState = 'COMPLETED'
  // After mutations, call validate*() on the affected OnlineBankingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: writeJournalEntry");
}

export async function notifyCustomer(): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystem.notifyCustomer'.
  // Pre-conditions from spec:
  //   pre: self.journalWritten = true
  //   pre: self.transferState = 'COMPLETED'
  //   pre: self.customerNotified = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.customerNotified = true
  // After mutations, call validate*() on the affected OnlineBankingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: notifyCustomer");
}

export async function rollbackTransfer(): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystem.rollbackTransfer'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'PENDING'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sourceBalance = self.pendingSourceBalance
  //   post: self.destinationBalance = self.pendingDestinationBalance
  //   post: self.transferState = 'ROLLED_BACK'
  //   post: self.sourceBalance >= 0.0
  //   post: self.destinationBalance >= 0.0
  // After mutations, call validate*() on the affected OnlineBankingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rollbackTransfer");
}

export async function recoverPendingTransfer(shouldComplete: boolean): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystem.recoverPendingTransfer'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'PENDING'
  //   pre: self.pendingSourceBalance >= 0.0
  //   pre: self.pendingDestinationBalance >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'
  //   post: self.sourceBalance >= 0.0
  //   post: self.destinationBalance >= 0.0
  // After mutations, call validate*() on the affected OnlineBankingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: recoverPendingTransfer");
}

export async function resetToIdle(): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystem.resetToIdle'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'IDLE'
  //   post: self.currentAmount = 0.0
  //   post: self.journalWritten = false
  //   post: self.customerNotified = false
  //   post: self.pendingSourceBalance = 0.0
  //   post: self.pendingDestinationBalance = 0.0
  // After mutations, call validate*() on the affected OnlineBankingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetToIdle");
}

// ─── Events on OnlineBankingSystemFormalized ───

export async function rejectOverdraftTransfer(amount: number): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystemFormalized.rejectOverdraftTransfer'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'IDLE'
  //   pre: amount > 0.0
  //   pre: self.sourceBalance < amount
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'IDLE'
  // After mutations, call validate*() on the affected OnlineBankingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectOverdraftTransfer");
}

export async function rejectPrematureNotification(): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystemFormalized.rejectPrematureNotification'.
  // Pre-conditions from spec:
  //   pre: self.journalWritten = false
  //   pre: self.customerNotified = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.customerNotified = false
  // After mutations, call validate*() on the affected OnlineBankingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectPrematureNotification");
}

export async function rejectAmlCapViolation(amount: number): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystemFormalized.rejectAmlCapViolation'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'IDLE'
  //   pre: amount > 10000.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'IDLE'
  // After mutations, call validate*() on the affected OnlineBankingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectAmlCapViolation");
}

export async function forceRollbackOnTimeout(): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystemFormalized.forceRollbackOnTimeout'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'PENDING'
  //   pre: self.pendingSourceBalance >= 0.0
  //   pre: self.pendingDestinationBalance >= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.sourceBalance = self.pendingSourceBalance
  //   post: self.destinationBalance = self.pendingDestinationBalance
  //   post: self.transferState = 'ROLLED_BACK'
  //   post: self.sourceBalance >= 0.0
  //   post: self.destinationBalance >= 0.0
  // After mutations, call validate*() on the affected OnlineBankingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: forceRollbackOnTimeout");
}

export async function rejectNonPositiveAmount(amount: number): Promise<void> {
  // TODO: implement mutation logic for 'OnlineBankingSystemFormalized.rejectNonPositiveAmount'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'IDLE'
  //   pre: amount <= 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'IDLE'
  // After mutations, call validate*() on the affected OnlineBankingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectNonPositiveAmount");
}

// ─── Events on TransferCoordinator ───

export async function beginTransfer(transferId: string, amount: number): Promise<void> {
  // TODO: implement mutation logic for 'TransferCoordinator.beginTransfer'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'IDLE'
  //   pre: transferId <> null
  //   pre: amount > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'PENDING'
  //   post: self.currentTransferId = transferId
  //   post: self.currentAmount = amount
  // After mutations, call validate*() on the affected TransferCoordinator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: beginTransfer");
}

export async function completeTransfer(): Promise<void> {
  // TODO: implement mutation logic for 'TransferCoordinator.completeTransfer'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'PENDING'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'COMPLETED'
  // After mutations, call validate*() on the affected TransferCoordinator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: completeTransfer");
}

export async function markRolledBack(): Promise<void> {
  // TODO: implement mutation logic for 'TransferCoordinator.markRolledBack'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'PENDING'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'ROLLED_BACK'
  // After mutations, call validate*() on the affected TransferCoordinator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: markRolledBack");
}

export async function resetCoordinator(): Promise<void> {
  // TODO: implement mutation logic for 'TransferCoordinator.resetCoordinator'.
  // Pre-conditions from spec:
  //   pre: self.transferState = 'COMPLETED' or self.transferState = 'ROLLED_BACK'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.transferState = 'IDLE'
  //   post: self.currentAmount = 0.0
  // After mutations, call validate*() on the affected TransferCoordinator snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: resetCoordinator");
}
