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

// ─── Events on CopyLedger ───

export async function transitionToLoaned(): Promise<void> {
  // TODO: implement mutation logic for 'CopyLedger.transitionToLoaned'.
  // Pre-conditions from spec:
  //   pre: self.copyStatus = 'AVAILABLE'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.copyStatus = 'LOANED'
  // After mutations, call validate*() on the affected CopyLedger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToLoaned");
}

export async function transitionToLoanedFromReserved(): Promise<void> {
  // TODO: implement mutation logic for 'CopyLedger.transitionToLoanedFromReserved'.
  // Pre-conditions from spec:
  //   pre: self.copyStatus = 'RESERVED'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.copyStatus = 'LOANED'
  // After mutations, call validate*() on the affected CopyLedger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToLoanedFromReserved");
}

export async function transitionToAvailable(): Promise<void> {
  // TODO: implement mutation logic for 'CopyLedger.transitionToAvailable'.
  // Pre-conditions from spec:
  //   pre: self.copyStatus = 'LOANED'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.copyStatus = 'AVAILABLE'
  // After mutations, call validate*() on the affected CopyLedger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToAvailable");
}

export async function transitionToAvailableFromReserved(): Promise<void> {
  // TODO: implement mutation logic for 'CopyLedger.transitionToAvailableFromReserved'.
  // Pre-conditions from spec:
  //   pre: self.copyStatus = 'RESERVED'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.copyStatus = 'AVAILABLE'
  // After mutations, call validate*() on the affected CopyLedger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToAvailableFromReserved");
}

export async function transitionToReserved(): Promise<void> {
  // TODO: implement mutation logic for 'CopyLedger.transitionToReserved'.
  // Pre-conditions from spec:
  //   pre: self.copyStatus = 'LOANED'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.copyStatus = 'RESERVED'
  // After mutations, call validate*() on the affected CopyLedger snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: transitionToReserved");
}

// ─── Events on FeeManager ───

export async function applyLateFee(returnDate: number, dueDate: number): Promise<void> {
  // TODO: implement mutation logic for 'FeeManager.applyLateFee'.
  // Pre-conditions from spec:
  //   pre: returnDate > dueDate
  //   pre: dueDate > 0
  //   pre: self.dailyLateRate > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastFeeCharged = (returnDate - dueDate) * self.dailyLateRate
  //   post: self.outstandingBalance = self.outstandingBalance@pre + self.lastFeeCharged
  // After mutations, call validate*() on the affected FeeManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: applyLateFee");
}

export async function applyNoFee(): Promise<void> {
  // TODO: implement mutation logic for 'FeeManager.applyNoFee'.
  // Pre-conditions from spec:
  //   pre: self.dailyLateRate > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastFeeCharged = 0.0
  // After mutations, call validate*() on the affected FeeManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: applyNoFee");
}

export async function settleBalance(amount: number): Promise<void> {
  // TODO: implement mutation logic for 'FeeManager.settleBalance'.
  // Pre-conditions from spec:
  //   pre: amount > 0.0
  //   pre: amount >= self.outstandingBalance
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.outstandingBalance = 0.0
  // After mutations, call validate*() on the affected FeeManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: settleBalance");
}

export async function rejectDueToOutstandingFees(): Promise<void> {
  // TODO: implement mutation logic for 'FeeManager.rejectDueToOutstandingFees'.
  // Pre-conditions from spec:
  //   pre: self.outstandingBalance > 0.0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.outstandingBalance > 0.0
  // After mutations, call validate*() on the affected FeeManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectDueToOutstandingFees");
}

// ─── Events on LibraryLendingSystem ───

export async function checkOutCopy(dueDate: number, loanDate: number): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystem.checkOutCopy'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'AVAILABLE'
  //   pre: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold
  //   pre: dueDate > loanDate
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentCopyStatus = 'LOANED'
  //   post: self.activeLoansCount = self.activeLoansCount@pre + 1
  // After mutations, call validate*() on the affected LibraryLendingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: checkOutCopy");
}

export async function returnLoan(returnDate: number, dueDate: number): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystem.returnLoan'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: returnDate > 0
  //   pre: dueDate > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentCopyStatus = 'AVAILABLE'
  //   post: self.activeLoansCount = self.activeLoansCount@pre - 1
  //   post: self.lastFeeComputed =
            (if returnDate > dueDate
             then (returnDate - dueDate) * self.dailyLateRate
             else 0.0
             endif)
  //   post: self.currentBorrowerOutstandingFees =
            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed
  // After mutations, call validate*() on the affected LibraryLendingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: returnLoan");
}

export async function returnLoanWithReservation(returnDate: number, dueDate: number): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystem.returnLoanWithReservation'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: returnDate > 0
  //   pre: dueDate > 0
  // Post-conditions from spec (express what must hold AFTER the event):
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
  // After mutations, call validate*() on the affected LibraryLendingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: returnLoanWithReservation");
}

export async function placeReservation(): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystem.placeReservation'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold
  //   pre: self.currentReservationCancelled = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentCopyStatus = 'LOANED'
  //   post: self.currentReservationAge = 0
  //   post: self.currentReservationCancelled = false
  // After mutations, call validate*() on the affected LibraryLendingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: placeReservation");
}

export async function expireReservation(): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystem.expireReservation'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'RESERVED'
  //   pre: self.currentReservationAge > self.maxReservationHoldDays
  //   pre: not self.currentReservationCancelled
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentCopyStatus = 'AVAILABLE'
  //   post: self.currentReservationCancelled = true
  // After mutations, call validate*() on the affected LibraryLendingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: expireReservation");
}

export async function pickUpReservation(dueDate: number, pickUpDate: number): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystem.pickUpReservation'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'RESERVED'
  //   pre: self.currentReservationAge <= self.maxReservationHoldDays
  //   pre: not self.currentReservationCancelled
  //   pre: self.currentBorrowerOutstandingFees <= self.outstandingFeeThreshold
  //   pre: dueDate > pickUpDate
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentCopyStatus = 'LOANED'
  //   post: self.activeLoansCount = self.activeLoansCount@pre + 1
  //   post: self.currentReservationCancelled = true
  // After mutations, call validate*() on the affected LibraryLendingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: pickUpReservation");
}

export async function payLateFees(amount: number): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystem.payLateFees'.
  // Pre-conditions from spec:
  //   pre: amount > 0.0
  //   pre: amount >= self.currentBorrowerOutstandingFees
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentBorrowerOutstandingFees = 0.0
  // After mutations, call validate*() on the affected LibraryLendingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: payLateFees");
}

export async function rejectLoanDueToFees(): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystem.rejectLoanDueToFees'.
  // Pre-conditions from spec:
  //   pre: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // After mutations, call validate*() on the affected LibraryLendingSystem snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectLoanDueToFees");
}

// ─── Events on LibraryLendingSystemFormalized ───

export async function rejectPickUpWithFees(): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystemFormalized.rejectPickUpWithFees'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'RESERVED'
  //   pre: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // After mutations, call validate*() on the affected LibraryLendingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectPickUpWithFees");
}

export async function rejectReservationWithFees(): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystemFormalized.rejectReservationWithFees'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentBorrowerOutstandingFees > self.outstandingFeeThreshold
  // After mutations, call validate*() on the affected LibraryLendingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectReservationWithFees");
}

export async function rejectStaleReservationPickUp(): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystemFormalized.rejectStaleReservationPickUp'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'RESERVED'
  //   pre: self.currentReservationAge > self.maxReservationHoldDays
  //   pre: not self.currentReservationCancelled
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentReservationAge > self.maxReservationHoldDays
  // After mutations, call validate*() on the affected LibraryLendingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: rejectStaleReservationPickUp");
}

export async function enforceSingleActiveLoan(): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystemFormalized.enforceSingleActiveLoan'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'LOANED'
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentCopyStatus = 'LOANED'
  // After mutations, call validate*() on the affected LibraryLendingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceSingleActiveLoan");
}

export async function enforceLateFeeFormula(returnDate: number, dueDate: number): Promise<void> {
  // TODO: implement mutation logic for 'LibraryLendingSystemFormalized.enforceLateFeeFormula'.
  // Pre-conditions from spec:
  //   pre: self.currentCopyStatus = 'LOANED'
  //   pre: returnDate > dueDate
  //   pre: dueDate > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.lastFeeComputed =
            (returnDate - dueDate) * self.dailyLateRate
  //   post: self.currentBorrowerOutstandingFees =
            self.currentBorrowerOutstandingFees@pre + self.lastFeeComputed
  //   post: self.currentCopyStatus = 'AVAILABLE'
  //   post: self.activeLoansCount = self.activeLoansCount@pre - 1
  // After mutations, call validate*() on the affected LibraryLendingSystemFormalized snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: enforceLateFeeFormula");
}

// ─── Events on LoanManager ───

export async function openLoan(loanDate: number, dueDate: number): Promise<void> {
  // TODO: implement mutation logic for 'LoanManager.openLoan'.
  // Pre-conditions from spec:
  //   pre: dueDate > loanDate
  //   pre: self.activeLoanCount >= 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.activeLoanCount = self.activeLoanCount@pre + 1
  //   post: self.currentLoanDate = loanDate
  //   post: self.currentDueDate = dueDate
  //   post: self.currentLoanReturned = false
  // After mutations, call validate*() on the affected LoanManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: openLoan");
}

export async function closeLoan(returnDate: number): Promise<void> {
  // TODO: implement mutation logic for 'LoanManager.closeLoan'.
  // Pre-conditions from spec:
  //   pre: self.currentLoanReturned = false
  //   pre: self.activeLoanCount > 0
  //   pre: returnDate > 0
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.currentReturnDate = returnDate
  //   post: self.currentLoanReturned = true
  //   post: self.activeLoanCount = self.activeLoanCount@pre - 1
  // After mutations, call validate*() on the affected LoanManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: closeLoan");
}

// ─── Events on ReservationManager ───

export async function createReservation(): Promise<void> {
  // TODO: implement mutation logic for 'ReservationManager.createReservation'.
  // Pre-conditions from spec:
  //   pre: self.reservationActive = false
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reservationActive = true
  //   post: self.reservationAge = 0
  // After mutations, call validate*() on the affected ReservationManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: createReservation");
}

export async function activateReservationOnReturn(): Promise<void> {
  // TODO: implement mutation logic for 'ReservationManager.activateReservationOnReturn'.
  // Pre-conditions from spec:
  //   pre: self.reservationActive = true
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reservationAge = 0
  // After mutations, call validate*() on the affected ReservationManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: activateReservationOnReturn");
}

export async function expireReservation(): Promise<void> {
  // TODO: implement mutation logic for 'ReservationManager.expireReservation'.
  // Pre-conditions from spec:
  //   pre: self.reservationActive = true
  //   pre: self.reservationAge > self.maxHoldDays
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reservationActive = false
  // After mutations, call validate*() on the affected ReservationManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: expireReservation");
}

export async function consumeReservation(): Promise<void> {
  // TODO: implement mutation logic for 'ReservationManager.consumeReservation'.
  // Pre-conditions from spec:
  //   pre: self.reservationActive = true
  //   pre: self.reservationAge <= self.maxHoldDays
  // Post-conditions from spec (express what must hold AFTER the event):
  //   post: self.reservationActive = false
  // After mutations, call validate*() on the affected ReservationManager snapshot
  // and assertNoViolations() to enforce spec invariants at runtime.
  throw new Error("not implemented: consumeReservation");
}
