// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const accounts = sqliteTable("account", {
  accountId: text("account_id").primaryKey(),
  ownerId: text("owner_id").notNull(),
  balance: real("balance").notNull(),
  status: text("status").notNull(),
});

export type AccountRow = typeof accounts.$inferSelect;

export const accountLedgers = sqliteTable("account_ledger", {
  ledgerId: text("ledger_id").primaryKey(),
  sourceAccountId: text("source_account_id").notNull(),
  destinationAccountId: text("destination_account_id").notNull(),
  sourceBalance: real("source_balance").notNull(),
  destinationBalance: real("destination_balance").notNull(),
  pendingSourceBalance: real("pending_source_balance").notNull(),
  pendingDestinationBalance: real("pending_destination_balance").notNull(),
});

export type AccountLedgerRow = typeof accountLedgers.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  title: text("title").notNull(),
  rationale: text("rationale").notNull(),
  riskIfViolated: text("risk_if_violated").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const journalEntries = sqliteTable("journal_entry", {
  entryId: text("entry_id").primaryKey(),
  transferId: text("transfer_id").notNull(),
  sourceAccountIdRef: text("source_account_id_ref").notNull(),
  destinationAccountIdRef: text("destination_account_id_ref").notNull(),
  amount: real("amount").notNull(),
  preSourceBalance: real("pre_source_balance").notNull(),
  postSourceBalance: real("post_source_balance").notNull(),
  preDestinationBalance: real("pre_destination_balance").notNull(),
  postDestinationBalance: real("post_destination_balance").notNull(),
  createdAt: integer("created_at").notNull(),
  immutable: integer("immutable", { mode: "boolean" }).notNull(),
});

export type JournalEntryRow = typeof journalEntries.$inferSelect;

export const journalStores = sqliteTable("journal_store", {
  storeId: text("store_id").primaryKey(),
  journalWritten: integer("journal_written", { mode: "boolean" }).notNull(),
  entryTransferId: text("entry_transfer_id").notNull(),
  preSourceBalance: real("pre_source_balance").notNull(),
  postSourceBalance: real("post_source_balance").notNull(),
  preDestinationBalance: real("pre_destination_balance").notNull(),
  postDestinationBalance: real("post_destination_balance").notNull(),
  entryAmount: real("entry_amount").notNull(),
  entryCreatedAt: integer("entry_created_at").notNull(),
});

export type JournalStoreRow = typeof journalStores.$inferSelect;

export const notificationServices = sqliteTable("notification_service", {
  serviceId: text("service_id").primaryKey(),
  customerNotified: integer("customer_notified", { mode: "boolean" }).notNull(),
  lastNotifiedTransferId: text("last_notified_transfer_id").notNull(),
});

export type NotificationServiceRow = typeof notificationServices.$inferSelect;

export const onlineBankingSystems = sqliteTable("online_banking_system", {
  systemId: text("system_id").primaryKey(),
  sourceBalance: real("source_balance").notNull(),
  destinationBalance: real("destination_balance").notNull(),
  transferState: text("transfer_state").notNull(),
  currentTransferId: text("current_transfer_id").notNull(),
  currentAmount: real("current_amount").notNull(),
  journalWritten: integer("journal_written", { mode: "boolean" }).notNull(),
  customerNotified: integer("customer_notified", { mode: "boolean" }).notNull(),
  pendingSourceBalance: real("pending_source_balance").notNull(),
  pendingDestinationBalance: real("pending_destination_balance").notNull(),
  maxResolutionSeconds: integer("max_resolution_seconds").notNull(),
});

export type OnlineBankingSystemRow = typeof onlineBankingSystems.$inferSelect;

export const onlineBankingSystemFormalizeds = sqliteTable("online_banking_system_formalized", {
  id: text("id").primaryKey(),
  pciDssVersion: text("pci_dss_version").notNull(),
  merchantLevel: integer("merchant_level").notNull(),
  gdprRetentionPolicyYears: integer("gdpr_retention_policy_years").notNull(),
  gdprDataMinimisationConfirmed: integer("gdpr_data_minimisation_confirmed", { mode: "boolean" }).notNull(),
});

export type OnlineBankingSystemFormalizedRow = typeof onlineBankingSystemFormalizeds.$inferSelect;

export const pendingStates = sqliteTable("pending_state", {
  pendingId: text("pending_id").primaryKey(),
  transferId: text("transfer_id").notNull(),
  originalSourceBalance: real("original_source_balance").notNull(),
  originalDestinationBalance: real("original_destination_balance").notNull(),
  pendingSince: integer("pending_since").notNull(),
  maxResolutionSeconds: integer("max_resolution_seconds").notNull(),
});

export type PendingStateRow = typeof pendingStates.$inferSelect;

export const transfers = sqliteTable("transfer", {
  transferId: text("transfer_id").primaryKey(),
  sourceAccountId: text("source_account_id").notNull(),
  destinationAccountId: text("destination_account_id").notNull(),
  amount: real("amount").notNull(),
  state: text("state").notNull(),
  initiatedAt: integer("initiated_at").notNull(),
});

export type TransferRow = typeof transfers.$inferSelect;

export const transferCoordinators = sqliteTable("transfer_coordinator", {
  coordinatorId: text("coordinator_id").primaryKey(),
  currentTransferId: text("current_transfer_id").notNull(),
  currentAmount: real("current_amount").notNull(),
  transferState: text("transfer_state").notNull(),
  maxResolutionSeconds: integer("max_resolution_seconds").notNull(),
});

export type TransferCoordinatorRow = typeof transferCoordinators.$inferSelect;
