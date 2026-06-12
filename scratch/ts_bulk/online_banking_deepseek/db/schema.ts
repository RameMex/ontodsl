// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const accounts = sqliteTable("account", {
  accountId: text("account_id").primaryKey(),
  ownerId: text("owner_id").notNull(),
  balanceCents: real("balance_cents").notNull(),
});

export type AccountRow = typeof accounts.$inferSelect;

export const accountManagers = sqliteTable("account_manager", {
  managerId: text("manager_id").primaryKey(),
  operational: integer("operational", { mode: "boolean" }).notNull(),
});

export type AccountManagerRow = typeof accountManagers.$inferSelect;

export const bankingTransactionSystems = sqliteTable("banking_transaction_system", {
  systemId: text("system_id").primaryKey(),
  maxAtomicLatencyMs: real("max_atomic_latency_ms").notNull(),
  minSourceBalanceCents: real("min_source_balance_cents").notNull(),
  journalRetentionDays: integer("journal_retention_days").notNull(),
  maxPendingSec: real("max_pending_sec").notNull(),
  isOperational: integer("is_operational", { mode: "boolean" }).notNull(),
});

export type BankingTransactionSystemRow = typeof bankingTransactionSystems.$inferSelect;

export const bankingTransactionSystemFormalizeds = sqliteTable("banking_transaction_system_formalized", {
  id: text("id").primaryKey(),
  pciDssVersion: text("pci_dss_version").notNull(),
  auditRetentionYears: integer("audit_retention_years").notNull(),
  gdprDataControllerName: text("gdpr_data_controller_name").notNull(),
  gdprDataProtectionOfficerContact: text("gdpr_data_protection_officer_contact").notNull(),
});

export type BankingTransactionSystemFormalizedRow = typeof bankingTransactionSystemFormalizeds.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  statement: text("statement").notNull(),
  owner: text("owner").notNull(),
  riskRating: text("risk_rating").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const journalEntries = sqliteTable("journal_entry", {
  entryId: text("entry_id").primaryKey(),
  transferId: text("transfer_id").notNull(),
  sourceAccountId: text("source_account_id").notNull(),
  destAccountId: text("dest_account_id").notNull(),
  amountCents: real("amount_cents").notNull(),
  preSourceBalanceCents: real("pre_source_balance_cents").notNull(),
  postSourceBalanceCents: real("post_source_balance_cents").notNull(),
  preDestBalanceCents: real("pre_dest_balance_cents").notNull(),
  postDestBalanceCents: real("post_dest_balance_cents").notNull(),
  timestamp: text("timestamp").notNull(),
});

export type JournalEntryRow = typeof journalEntries.$inferSelect;

export const journalWriters = sqliteTable("journal_writer", {
  writerId: text("writer_id").primaryKey(),
  retentionDays: integer("retention_days").notNull(),
  operational: integer("operational", { mode: "boolean" }).notNull(),
});

export type JournalWriterRow = typeof journalWriters.$inferSelect;

export const notificationServices = sqliteTable("notification_service", {
  serviceId: text("service_id").primaryKey(),
  operational: integer("operational", { mode: "boolean" }).notNull(),
});

export type NotificationServiceRow = typeof notificationServices.$inferSelect;

export const recoveryManagers = sqliteTable("recovery_manager", {
  recoveryId: text("recovery_id").primaryKey(),
  operational: integer("operational", { mode: "boolean" }).notNull(),
});

export type RecoveryManagerRow = typeof recoveryManagers.$inferSelect;

export const transferCoordinators = sqliteTable("transfer_coordinator", {
  coordinatorId: text("coordinator_id").primaryKey(),
  operational: integer("operational", { mode: "boolean" }).notNull(),
});

export type TransferCoordinatorRow = typeof transferCoordinators.$inferSelect;
