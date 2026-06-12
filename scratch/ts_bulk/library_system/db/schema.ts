// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const bookCopies = sqliteTable("book_copy", {
  copyId: text("copy_id").primaryKey(),
  status: text("status").notNull(),
});

export type BookCopyRow = typeof bookCopies.$inferSelect;

export const copyLedgers = sqliteTable("copy_ledger", {
  copyLedgerId: text("copy_ledger_id").primaryKey(),
  copyId: text("copy_id").notNull(),
  copyStatus: text("copy_status").notNull(),
});

export type CopyLedgerRow = typeof copyLedgers.$inferSelect;

export const feeManagers = sqliteTable("fee_manager", {
  feeManagerId: text("fee_manager_id").primaryKey(),
  dailyLateRate: real("daily_late_rate").notNull(),
  outstandingBalance: real("outstanding_balance").notNull(),
  lastFeeCharged: real("last_fee_charged").notNull(),
});

export type FeeManagerRow = typeof feeManagers.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  tag: text("tag").notNull(),
  description: text("description").notNull(),
  rationaleSummary: text("rationale_summary").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const lateFees = sqliteTable("late_fee", {
  feeId: text("fee_id").primaryKey(),
  dailyRate: real("daily_rate").notNull(),
  accruedAmount: real("accrued_amount").notNull(),
  isPaid: integer("is_paid", { mode: "boolean" }).notNull(),
});

export type LateFeeRow = typeof lateFees.$inferSelect;

export const libraryLendingSystems = sqliteTable("library_lending_system", {
  systemId: text("system_id").primaryKey(),
  systemName: text("system_name").notNull(),
  outstandingFeeThreshold: real("outstanding_fee_threshold").notNull(),
  maxReservationHoldDays: integer("max_reservation_hold_days").notNull(),
  dailyLateRate: real("daily_late_rate").notNull(),
  activeLoansCount: integer("active_loans_count").notNull(),
  currentCopyStatus: text("current_copy_status").notNull(),
  currentBorrowerOutstandingFees: real("current_borrower_outstanding_fees").notNull(),
  currentReservationAge: integer("current_reservation_age").notNull(),
  currentReservationCancelled: integer("current_reservation_cancelled", { mode: "boolean" }).notNull(),
  lastFeeComputed: real("last_fee_computed").notNull(),
});

export type LibraryLendingSystemRow = typeof libraryLendingSystems.$inferSelect;

export const loans = sqliteTable("loan", {
  loanId: text("loan_id").primaryKey(),
  loanDate: integer("loan_date").notNull(),
  dueDate: integer("due_date").notNull(),
  returnDate: integer("return_date").notNull(),
  isReturned: integer("is_returned", { mode: "boolean" }).notNull(),
});

export type LoanRow = typeof loans.$inferSelect;

export const loanManagers = sqliteTable("loan_manager", {
  loanManagerId: text("loan_manager_id").primaryKey(),
  activeLoanCount: integer("active_loan_count").notNull(),
  currentLoanId: text("current_loan_id").notNull(),
  currentLoanDate: integer("current_loan_date").notNull(),
  currentDueDate: integer("current_due_date").notNull(),
  currentReturnDate: integer("current_return_date").notNull(),
  currentLoanReturned: integer("current_loan_returned", { mode: "boolean" }).notNull(),
});

export type LoanManagerRow = typeof loanManagers.$inferSelect;

export const reservations = sqliteTable("reservation", {
  reservationId: text("reservation_id").primaryKey(),
  reservationDate: integer("reservation_date").notNull(),
  availableDate: integer("available_date").notNull(),
  expiryDays: integer("expiry_days").notNull(),
  isCancelled: integer("is_cancelled", { mode: "boolean" }).notNull(),
});

export type ReservationRow = typeof reservations.$inferSelect;

export const reservationManagers = sqliteTable("reservation_manager", {
  reservationManagerId: text("reservation_manager_id").primaryKey(),
  currentReservationId: text("current_reservation_id").notNull(),
  reservationActive: integer("reservation_active", { mode: "boolean" }).notNull(),
  reservationAge: integer("reservation_age").notNull(),
  maxHoldDays: integer("max_hold_days").notNull(),
});

export type ReservationManagerRow = typeof reservationManagers.$inferSelect;

export const titles = sqliteTable("title", {
  titleId: text("title_id").primaryKey(),
  isbn: text("isbn").notNull(),
  name: text("name").notNull(),
  author: text("author").notNull(),
});

export type TitleRow = typeof titles.$inferSelect;
