// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const auditLoggers = sqliteTable("audit_logger", {
  loggerId: text("logger_id").primaryKey(),
});

export type AuditLoggerRow = typeof auditLoggers.$inferSelect;

export const bookCopies = sqliteTable("book_copy", {
  copyId: text("copy_id").primaryKey(),
  title: text("title").notNull(),
  status: text("status").notNull(),
  currentBorrower: text("current_borrower").notNull(),
  dueDate: text("due_date").notNull(),
});

export type BookCopyRow = typeof bookCopies.$inferSelect;

export const borrowerRegistries = sqliteTable("borrower_registry", {
  registryId: text("registry_id").primaryKey(),
});

export type BorrowerRegistryRow = typeof borrowerRegistries.$inferSelect;

export const copyInventories = sqliteTable("copy_inventory", {
  inventoryId: text("inventory_id").primaryKey(),
});

export type CopyInventoryRow = typeof copyInventories.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionText: text("assumption_text").notNull(),
  assumptionNumber: text("assumption_number").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const librarySystems = sqliteTable("library_system", {
  systemId: text("system_id").primaryKey(),
  mutuallyExclusiveState: integer("mutually_exclusive_state", { mode: "boolean" }).notNull(),
  blocksLoansForIndebted: integer("blocks_loans_for_indebted", { mode: "boolean" }).notNull(),
  autoExpiresReservations: integer("auto_expires_reservations", { mode: "boolean" }).notNull(),
  lateFeeComputed: integer("late_fee_computed", { mode: "boolean" }).notNull(),
  dailyLateFeeRate: real("daily_late_fee_rate").notNull(),
  reservationExpiryDays: integer("reservation_expiry_days").notNull(),
});

export type LibrarySystemRow = typeof librarySystems.$inferSelect;

export const librarySystemFormalizeds = sqliteTable("library_system_formalized", {
  systemId: text("system_id").primaryKey(),
  formalVerificationDone: integer("formal_verification_done", { mode: "boolean" }).notNull(),
  formalBlockVerification: integer("formal_block_verification", { mode: "boolean" }).notNull(),
  lastRejectionReason: text("last_rejection_reason").notNull(),
  lastRejectionTimestamp: text("last_rejection_timestamp").notNull(),
  activeLoanCount: integer("active_loan_count").notNull(),
  totalLateFeesCollected: real("total_late_fees_collected").notNull(),
  mutuallyExclusiveState: integer("mutually_exclusive_state", { mode: "boolean" }).notNull(),
  blocksLoansForIndebted: integer("blocks_loans_for_indebted", { mode: "boolean" }).notNull(),
  autoExpiresReservations: integer("auto_expires_reservations", { mode: "boolean" }).notNull(),
  lateFeeComputed: integer("late_fee_computed", { mode: "boolean" }).notNull(),
});

export type LibrarySystemFormalizedRow = typeof librarySystemFormalizeds.$inferSelect;

export const loans = sqliteTable("loan", {
  loanId: text("loan_id").primaryKey(),
  startDate: text("start_date").notNull(),
  dueDate: text("due_date").notNull(),
  returnDate: text("return_date").notNull(),
  lateFee: real("late_fee").notNull(),
});

export type LoanRow = typeof loans.$inferSelect;

export const loanLedgers = sqliteTable("loan_ledger", {
  ledgerId: text("ledger_id").primaryKey(),
  dailyLateFeeRate: real("daily_late_fee_rate").notNull(),
});

export type LoanLedgerRow = typeof loanLedgers.$inferSelect;

export const reservations = sqliteTable("reservation", {
  reservationId: text("reservation_id").primaryKey(),
  placedDate: text("placed_date").notNull(),
  expiresOn: text("expires_on").notNull(),
  isActive: integer("is_active", { mode: "boolean" }).notNull(),
});

export type ReservationRow = typeof reservations.$inferSelect;

export const reservationManagers = sqliteTable("reservation_manager", {
  reservationManagerId: text("reservation_manager_id").primaryKey(),
  reservationExpiryDays: integer("reservation_expiry_days").notNull(),
});

export type ReservationManagerRow = typeof reservationManagers.$inferSelect;
