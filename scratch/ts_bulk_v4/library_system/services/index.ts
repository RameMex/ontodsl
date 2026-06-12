// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Service skeletons — one async function per EventDecl.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { db } from "../db/index.js";
import { copyLedgers, feeManagers, libraryLendingSystemFormalizeds, libraryLendingSystems, loanManagers, reservationManagers } from "../db/schema.js";
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

// ─── Events on CopyLedger ───

export async function transitionToLoaned(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.copyStatus = 'AVAILABLE'
  // Post-conditions from spec:
  //   post: self.copyStatus = 'LOANED'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(copyLedgers).set({
      copyStatus: "LOANED",
    }).where(eq(copyLedgers.copyLedgerId, __selfId));
    // After mutation: re-validate against `validateCopyLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(copyLedgers).where(eq(copyLedgers.copyLedgerId, __selfId)).get();
    // assertNoViolations(validateCopyLedger(row as never), "transitionToLoaned");
  });
}

export async function transitionToLoanedFromReserved(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.copyStatus = 'RESERVED'
  // Post-conditions from spec:
  //   post: self.copyStatus = 'LOANED'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(copyLedgers).set({
      copyStatus: "LOANED",
    }).where(eq(copyLedgers.copyLedgerId, __selfId));
    // After mutation: re-validate against `validateCopyLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(copyLedgers).where(eq(copyLedgers.copyLedgerId, __selfId)).get();
    // assertNoViolations(validateCopyLedger(row as never), "transitionToLoanedFromReserved");
  });
}

export async function transitionToAvailable(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.copyStatus = 'LOANED'
  // Post-conditions from spec:
  //   post: self.copyStatus = 'AVAILABLE'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(copyLedgers).set({
      copyStatus: "AVAILABLE",
    }).where(eq(copyLedgers.copyLedgerId, __selfId));
    // After mutation: re-validate against `validateCopyLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(copyLedgers).where(eq(copyLedgers.copyLedgerId, __selfId)).get();
    // assertNoViolations(validateCopyLedger(row as never), "transitionToAvailable");
  });
}

export async function transitionToAvailableFromReserved(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.copyStatus = 'RESERVED'
  // Post-conditions from spec:
  //   post: self.copyStatus = 'AVAILABLE'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(copyLedgers).set({
      copyStatus: "AVAILABLE",
    }).where(eq(copyLedgers.copyLedgerId, __selfId));
    // After mutation: re-validate against `validateCopyLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(copyLedgers).where(eq(copyLedgers.copyLedgerId, __selfId)).get();
    // assertNoViolations(validateCopyLedger(row as never), "transitionToAvailableFromReserved");
  });
}

export async function transitionToReserved(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.copyStatus = 'LOANED'
  // Post-conditions from spec:
  //   post: self.copyStatus = 'RESERVED'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(copyLedgers).set({
      copyStatus: "RESERVED",
    }).where(eq(copyLedgers.copyLedgerId, __selfId));
    // After mutation: re-validate against `validateCopyLedger` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(copyLedgers).where(eq(copyLedgers.copyLedgerId, __selfId)).get();
    // assertNoViolations(validateCopyLedger(row as never), "transitionToReserved");
  });
}

// ─── Events on FeeManager ───

export async function applyLateFee(__selfId: string, returnDate: number, dueDate: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: returnDate > dueDate
  //   pre: dueDate > 0
  //   pre: self.dailyLateRate > 0.0
  // Post-conditions from spec:
  //   post: self.lastFeeCharged = (returnDate - dueDate) * self.dailyLateRate
  //   post: self.outstandingBalance = self.outstandingBalance@pre + self.lastFeeCharged
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(feeManagers).set({
      lastFeeCharged: sql`${returnDate} - ${dueDate} * ${feeManagers.dailyLateRate}`,
      outstandingBalance: sql`${feeManagers.outstandingBalance} + ${feeManagers.lastFeeCharged}`,
    }).where(eq(feeManagers.feeManagerId, __selfId));
    // After mutation: re-validate against `validateFeeManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(feeManagers).where(eq(feeManagers.feeManagerId, __selfId)).get();
    // assertNoViolations(validateFeeManager(row as never), "applyLateFee");
  });
}

export async function applyNoFee(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.dailyLateRate > 0.0
  // Post-conditions from spec:
  //   post: self.lastFeeCharged = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(feeManagers).set({
      lastFeeCharged: 0,
    }).where(eq(feeManagers.feeManagerId, __selfId));
    // After mutation: re-validate against `validateFeeManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(feeManagers).where(eq(feeManagers.feeManagerId, __selfId)).get();
    // assertNoViolations(validateFeeManager(row as never), "applyNoFee");
  });
}

export async function settleBalance(__selfId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: amount > 0.0
  //   pre: amount >= self.outstandingBalance
  // Post-conditions from spec:
  //   post: self.outstandingBalance = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(feeManagers).set({
      outstandingBalance: 0,
    }).where(eq(feeManagers.feeManagerId, __selfId));
    // After mutation: re-validate against `validateFeeManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(feeManagers).where(eq(feeManagers.feeManagerId, __selfId)).get();
    // assertNoViolations(validateFeeManager(row as never), "settleBalance");
  });
}

export async function rejectDueToOutstandingFees(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.outstandingBalance > 0.0
  // Post-conditions from spec:
  //   post: self.outstandingBalance > 0.0
  // TODO: implement mutation logic for 'FeeManager.rejectDueToOutstandingFees'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectDueToOutstandingFees");
}

// ─── Events on LibraryLendingSystem ───

export async function checkOutCopy(__selfId: string, dueDate: number, loanDate: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'AVAILABLE'
  //   pre: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold
  //   pre: dueDate > loanDate
  // Post-conditions from spec:
  //   post: self.currentCopyStatus = 'LOANED'
  //   post: self.activeLoansCount = self.activeLoansCount@pre + 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(libraryLendingSystems).set({
      currentCopyStatus: "LOANED",
      activeLoansCount: sql`${libraryLendingSystems.activeLoansCount} + ${1}`,
    }).where(eq(libraryLendingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateLibraryLendingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(libraryLendingSystems).where(eq(libraryLendingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateLibraryLendingSystem(row as never), "checkOutCopy");
  });
}

export async function returnLoan(__selfId: string, returnDate: number, dueDate: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: returnDate > 0
  //   pre: dueDate > 0
  // Post-conditions from spec:
  //   post: self.currentCopyStatus = 'AVAILABLE'
  //   post: self.activeLoansCount = self.activeLoansCount@pre - 1
  //   post: self.lastFeeComputed =
            (if returnDate > dueDate
             then (returnDate - dueDate) * self.dailyLateRate
             else 0.0
             endif)
  //   post: self.currentBorrowerOutstandingFees =
            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(libraryLendingSystems).set({
      currentCopyStatus: "AVAILABLE",
      activeLoansCount: sql`${libraryLendingSystems.activeLoansCount} - ${1}`,
      lastFeeComputed: sql`CASE WHEN ${returnDate} > ${dueDate} THEN ${returnDate} - ${dueDate} * ${libraryLendingSystems.dailyLateRate} ELSE ${0} END`,
      currentBorrowerOutstandingFees: sql`${libraryLendingSystems.currentBorrowerOutstandingFees} + ${libraryLendingSystems.lastFeeComputed}`,
    }).where(eq(libraryLendingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateLibraryLendingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(libraryLendingSystems).where(eq(libraryLendingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateLibraryLendingSystem(row as never), "returnLoan");
  });
}

export async function returnLoanWithReservation(__selfId: string, returnDate: number, dueDate: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: returnDate > 0
  //   pre: dueDate > 0
  // Post-conditions from spec:
  //   post: self.currentCopyStatus = 'RESERVED'
  //   post: self.activeLoansCount = self.activeLoansCount@pre - 1
  //   post: self.currentReservationAge = 0
  //   post: self.currentReservationCancelled = false
  //   post: self.lastFeeComputed =
            (if returnDate > dueDate
             then (returnDate - dueDate) * self.dailyLateRate
             else 0.0
             endif)
  //   post: self.currentBorrowerOutstandingFees =
            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(libraryLendingSystems).set({
      currentCopyStatus: "RESERVED",
      activeLoansCount: sql`${libraryLendingSystems.activeLoansCount} - ${1}`,
      currentReservationAge: 0,
      currentReservationCancelled: false,
      lastFeeComputed: sql`CASE WHEN ${returnDate} > ${dueDate} THEN ${returnDate} - ${dueDate} * ${libraryLendingSystems.dailyLateRate} ELSE ${0} END`,
      currentBorrowerOutstandingFees: sql`${libraryLendingSystems.currentBorrowerOutstandingFees} + ${libraryLendingSystems.lastFeeComputed}`,
    }).where(eq(libraryLendingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateLibraryLendingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(libraryLendingSystems).where(eq(libraryLendingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateLibraryLendingSystem(row as never), "returnLoanWithReservation");
  });
}

export async function placeReservation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold
  //   pre: self.currentReservationCancelled = true
  // Post-conditions from spec:
  //   post: self.currentCopyStatus = 'LOANED'
  //   post: self.currentReservationAge = 0
  //   post: self.currentReservationCancelled = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(libraryLendingSystems).set({
      currentCopyStatus: "LOANED",
      currentReservationAge: 0,
      currentReservationCancelled: false,
    }).where(eq(libraryLendingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateLibraryLendingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(libraryLendingSystems).where(eq(libraryLendingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateLibraryLendingSystem(row as never), "placeReservation");
  });
}

export async function expireReservation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'RESERVED'
  //   pre: self.currentReservationAge > self.maxReservationHoldDays
  //   pre: not self.currentReservationCancelled
  // Post-conditions from spec:
  //   post: self.currentCopyStatus = 'AVAILABLE'
  //   post: self.currentReservationCancelled = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(libraryLendingSystems).set({
      currentCopyStatus: "AVAILABLE",
      currentReservationCancelled: true,
    }).where(eq(libraryLendingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateLibraryLendingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(libraryLendingSystems).where(eq(libraryLendingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateLibraryLendingSystem(row as never), "expireReservation");
  });
}

export async function pickUpReservation(__selfId: string, dueDate: number, pickUpDate: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'RESERVED'
  //   pre: self.currentReservationAge <= self.maxReservationHoldDays
  //   pre: not self.currentReservationCancelled
  //   pre: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold
  //   pre: dueDate > pickUpDate
  // Post-conditions from spec:
  //   post: self.currentCopyStatus = 'LOANED'
  //   post: self.activeLoansCount = self.activeLoansCount@pre + 1
  //   post: self.currentReservationCancelled = true
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(libraryLendingSystems).set({
      currentCopyStatus: "LOANED",
      activeLoansCount: sql`${libraryLendingSystems.activeLoansCount} + ${1}`,
      currentReservationCancelled: true,
    }).where(eq(libraryLendingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateLibraryLendingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(libraryLendingSystems).where(eq(libraryLendingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateLibraryLendingSystem(row as never), "pickUpReservation");
  });
}

export async function payLateFees(__selfId: string, amount: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: amount > 0.0
  //   pre: amount >= self.currentBorrowerOutstandingFees
  // Post-conditions from spec:
  //   post: self.currentBorrowerOutstandingFees = 0.0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(libraryLendingSystems).set({
      currentBorrowerOutstandingFees: 0,
    }).where(eq(libraryLendingSystems.systemId, __selfId));
    // After mutation: re-validate against `validateLibraryLendingSystem` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(libraryLendingSystems).where(eq(libraryLendingSystems.systemId, __selfId)).get();
    // assertNoViolations(validateLibraryLendingSystem(row as never), "payLateFees");
  });
}

export async function rejectLoanDueToFees(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // Post-conditions from spec:
  //   post: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // TODO: implement mutation logic for 'LibraryLendingSystem.rejectLoanDueToFees'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectLoanDueToFees");
}

// ─── Events on LibraryLendingSystemFormalized ───

export async function rejectPickUpWithFees(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'RESERVED'
  //   pre: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // Post-conditions from spec:
  //   post: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // TODO: implement mutation logic for 'LibraryLendingSystemFormalized.rejectPickUpWithFees'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectPickUpWithFees");
}

export async function rejectReservationWithFees(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // Post-conditions from spec:
  //   post: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // TODO: implement mutation logic for 'LibraryLendingSystemFormalized.rejectReservationWithFees'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectReservationWithFees");
}

export async function rejectStaleReservationPickUp(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'RESERVED'
  //   pre: self.currentReservationAge > self.maxReservationHoldDays
  //   pre: not self.currentReservationCancelled
  // Post-conditions from spec:
  //   post: self.currentReservationAge > self.maxReservationHoldDays
  // TODO: implement mutation logic for 'LibraryLendingSystemFormalized.rejectStaleReservationPickUp'.
  // No assignment-shaped post-conditions were detected — the spec
  // here expresses constraints rather than direct mutations (e.g.
  // 'self.x >= 0'). Use the validate*() functions from the regular
  // TS codegen to enforce them post-mutation.
  throw new Error("not implemented: rejectStaleReservationPickUp");
}

export async function enforceSingleActiveLoan(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'LOANED'
  // Post-conditions from spec:
  //   post: self.currentCopyStatus = 'LOANED'
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(libraryLendingSystemFormalizeds).set({
      currentCopyStatus: "LOANED",
    }).where(eq(libraryLendingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateLibraryLendingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(libraryLendingSystemFormalizeds).where(eq(libraryLendingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateLibraryLendingSystemFormalized(row as never), "enforceSingleActiveLoan");
  });
}

export async function enforceLateFeeFormula(__selfId: string, returnDate: number, dueDate: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: returnDate > dueDate
  //   pre: dueDate > 0
  // Post-conditions from spec:
  //   post: self.lastFeeComputed =
            (returnDate - dueDate) * self.dailyLateRate
  //   post: self.currentBorrowerOutstandingFees =
            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed
  //   post: self.currentCopyStatus = 'AVAILABLE'
  //   post: self.activeLoansCount = self.activeLoansCount@pre - 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(libraryLendingSystemFormalizeds).set({
      lastFeeComputed: sql`${returnDate} - ${dueDate} * ${libraryLendingSystemFormalizeds.dailyLateRate}`,
      currentBorrowerOutstandingFees: sql`${libraryLendingSystemFormalizeds.currentBorrowerOutstandingFees} + ${libraryLendingSystemFormalizeds.lastFeeComputed}`,
      currentCopyStatus: "AVAILABLE",
      activeLoansCount: sql`${libraryLendingSystemFormalizeds.activeLoansCount} - ${1}`,
    }).where(eq(libraryLendingSystemFormalizeds.id, __selfId));
    // After mutation: re-validate against `validateLibraryLendingSystemFormalized` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(libraryLendingSystemFormalizeds).where(eq(libraryLendingSystemFormalizeds.id, __selfId)).get();
    // assertNoViolations(validateLibraryLendingSystemFormalized(row as never), "enforceLateFeeFormula");
  });
}

// ─── Events on LoanManager ───

export async function openLoan(__selfId: string, loanDate: number, dueDate: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: dueDate > loanDate
  //   pre: self.activeLoanCount >= 0
  // Post-conditions from spec:
  //   post: self.activeLoanCount = self.activeLoanCount@pre + 1
  //   post: self.currentLoanDate = loanDate
  //   post: self.currentDueDate = dueDate
  //   post: self.currentLoanReturned = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(loanManagers).set({
      activeLoanCount: sql`${loanManagers.activeLoanCount} + ${1}`,
      currentLoanDate: loanDate,
      currentDueDate: dueDate,
      currentLoanReturned: false,
    }).where(eq(loanManagers.loanManagerId, __selfId));
    // After mutation: re-validate against `validateLoanManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(loanManagers).where(eq(loanManagers.loanManagerId, __selfId)).get();
    // assertNoViolations(validateLoanManager(row as never), "openLoan");
  });
}

export async function closeLoan(__selfId: string, returnDate: number): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.currentLoanReturned = false
  //   pre: self.activeLoanCount > 0
  //   pre: returnDate > 0
  // Post-conditions from spec:
  //   post: self.currentReturnDate = returnDate
  //   post: self.currentLoanReturned = true
  //   post: self.activeLoanCount = self.activeLoanCount@pre - 1
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(loanManagers).set({
      currentReturnDate: returnDate,
      currentLoanReturned: true,
      activeLoanCount: sql`${loanManagers.activeLoanCount} - ${1}`,
    }).where(eq(loanManagers.loanManagerId, __selfId));
    // After mutation: re-validate against `validateLoanManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(loanManagers).where(eq(loanManagers.loanManagerId, __selfId)).get();
    // assertNoViolations(validateLoanManager(row as never), "closeLoan");
  });
}

// ─── Events on ReservationManager ───

export async function createReservation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.reservationActive = false
  // Post-conditions from spec:
  //   post: self.reservationActive = true
  //   post: self.reservationAge = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(reservationManagers).set({
      reservationActive: true,
      reservationAge: 0,
    }).where(eq(reservationManagers.reservationManagerId, __selfId));
    // After mutation: re-validate against `validateReservationManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(reservationManagers).where(eq(reservationManagers.reservationManagerId, __selfId)).get();
    // assertNoViolations(validateReservationManager(row as never), "createReservation");
  });
}

export async function activateReservationOnReturn(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.reservationActive = true
  // Post-conditions from spec:
  //   post: self.reservationAge = 0
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(reservationManagers).set({
      reservationAge: 0,
    }).where(eq(reservationManagers.reservationManagerId, __selfId));
    // After mutation: re-validate against `validateReservationManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(reservationManagers).where(eq(reservationManagers.reservationManagerId, __selfId)).get();
    // assertNoViolations(validateReservationManager(row as never), "activateReservationOnReturn");
  });
}

export async function expireReservation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.reservationActive = true
  //   pre: self.reservationAge > self.maxHoldDays
  // Post-conditions from spec:
  //   post: self.reservationActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(reservationManagers).set({
      reservationActive: false,
    }).where(eq(reservationManagers.reservationManagerId, __selfId));
    // After mutation: re-validate against `validateReservationManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(reservationManagers).where(eq(reservationManagers.reservationManagerId, __selfId)).get();
    // assertNoViolations(validateReservationManager(row as never), "expireReservation");
  });
}

export async function consumeReservation(__selfId: string): Promise<void> {
  // Pre-conditions from spec (enforce manually if needed):
  //   pre: self.reservationActive = true
  //   pre: self.reservationAge <= self.maxHoldDays
  // Post-conditions from spec:
  //   post: self.reservationActive = false
  return db.transaction(async (tx) => {
    // Auto-derived update from spec post-conditions:
    await tx.update(reservationManagers).set({
      reservationActive: false,
    }).where(eq(reservationManagers.reservationManagerId, __selfId));
    // After mutation: re-validate against `validateReservationManager` (import above)
    // to enforce spec invariants. Uncomment when you wire the import:
    // const row = await tx.select().from(reservationManagers).where(eq(reservationManagers.reservationManagerId, __selfId)).get();
    // assertNoViolations(validateReservationManager(row as never), "consumeReservation");
  });
}
