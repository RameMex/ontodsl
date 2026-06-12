/**
 * Drizzle schema derived from ontodls verified spec
 * `examples/online_banking/design.onto`.
 *
 * Each table mirrors a kind from the Design stage:
 *   - accounts            ← Account (a customer-owned balance)
 *   - transfers           ← Transfer (one debit-credit pair)
 *   - journal_entries     ← JournalEntry (immutable audit record)
 *   - notifications       ← Notification (customer message)
 *   - users               ← Customer (auth/identity; not in onto but
 *                          needed for the app layer)
 *
 * The COLUMN names match the property names in the .onto so the
 * generated `validate*()` helpers from `dist/design.ts` can be
 * applied directly on rows loaded from these tables.
 */
import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  displayName: text("display_name").notNull(),
  // Role discriminates customer (regular UI) vs operator (admin panel).
  role: text("role", { enum: ["customer", "operator"] }).notNull().default("customer"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const accounts = sqliteTable("accounts", {
  // Maps to Account.accountId (branded type at the TS layer).
  accountId: text("account_id").primaryKey(),
  // Maps to Account.ownerId. Foreign key to users.
  ownerId: text("owner_id").notNull().references(() => users.id),
  // Maps to Account.balance. Real-valued (cents-as-units convention).
  balance: real("balance").notNull(),
  // Maps to Account.status. Domain restricts to {OPEN, FROZEN, CLOSED}.
  status: text("status", { enum: ["OPEN", "FROZEN", "CLOSED"] }).notNull().default("OPEN"),
});

export const transfers = sqliteTable("transfers", {
  // Maps to Transfer.transferId.
  transferId: text("transfer_id").primaryKey(),
  sourceAccountId: text("source_account_id").notNull().references(() => accounts.accountId),
  destinationAccountId: text("destination_account_id").notNull().references(() => accounts.accountId),
  amount: real("amount").notNull(),
  // Maps to TransferCoordinator.transferState invariant: must be one of these four.
  state: text("state", { enum: ["IDLE", "PENDING", "COMPLETED", "ROLLED_BACK"] }).notNull(),
  initiatedAt: integer("initiated_at", { mode: "timestamp" }).notNull(),
  resolvedAt: integer("resolved_at", { mode: "timestamp" }),
});

export const journalEntries = sqliteTable("journal_entries", {
  entryId: text("entry_id").primaryKey(),
  transferId: text("transfer_id").notNull().references(() => transfers.transferId),
  sourceAccountIdRef: text("source_account_id_ref").notNull(),
  destinationAccountIdRef: text("destination_account_id_ref").notNull(),
  amount: real("amount").notNull(),
  preSourceBalance: real("pre_source_balance").notNull(),
  postSourceBalance: real("post_source_balance").notNull(),
  preDestinationBalance: real("pre_destination_balance").notNull(),
  postDestinationBalance: real("post_destination_balance").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  // Immutability is enforced by NEVER updating these rows post-insert.
  // The invariant `immutable = true` from the .onto is encoded as a
  // service-layer rule (see services/journal.ts).
  immutable: integer("immutable", { mode: "boolean" }).notNull().default(true),
});

export const notifications = sqliteTable("notifications", {
  id: text("id").primaryKey(),
  // The .onto requires notifications to reference a transfer that
  // already has a journal entry — enforced in services/notification.ts.
  transferId: text("transfer_id").notNull().references(() => transfers.transferId),
  customerId: text("customer_id").notNull().references(() => users.id),
  message: text("message").notNull(),
  status: text("status", { enum: ["pending", "delivered", "failed"] }).notNull().default("pending"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export type UserRow = typeof users.$inferSelect;
export type AccountRow = typeof accounts.$inferSelect;
export type TransferRow = typeof transfers.$inferSelect;
export type JournalEntryRow = typeof journalEntries.$inferSelect;
export type NotificationRow = typeof notifications.$inferSelect;
