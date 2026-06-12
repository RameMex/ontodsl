// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const WarehouseInventorySystems = sqliteTable("_warehouse_inventory_system", {
  _placeholderId: text("_placeholder_id").primaryKey(),
  stockOnHand: real("stock_on_hand").notNull(),
  movementJournalSize: integer("movement_journal_size").notNull(),
  cachedStock: real("cached_stock").notNull(),
  isBackorderable: integer("is_backorderable", { mode: "boolean" }).notNull(),
  reconciledQty: real("reconciled_qty").notNull(),
});

export type _WarehouseInventorySystemRow = typeof WarehouseInventorySystems.$inferSelect;

export const backorders = sqliteTable("backorder", {
  boId: text("bo_id").primaryKey(),
  qty: real("qty").notNull(),
  createdAt: text("created_at").notNull(),
});

export type BackorderRow = typeof backorders.$inferSelect;

export const backorderQueues = sqliteTable("backorder_queue", {
  bqId: text("bq_id").primaryKey(),
  stockOnHand: real("stock_on_hand").notNull(),
  isBackorderable: integer("is_backorderable", { mode: "boolean" }).notNull(),
});

export type BackorderQueueRow = typeof backorderQueues.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  domainAuthority: text("domain_authority").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const fulfillmentOrders = sqliteTable("fulfillment_order", {
  orderId: text("order_id").primaryKey(),
  requestedQty: real("requested_qty").notNull(),
  status: text("status").notNull(),
});

export type FulfillmentOrderRow = typeof fulfillmentOrders.$inferSelect;

export const movementJournals = sqliteTable("movement_journal", {
  mjId: text("mj_id").primaryKey(),
  movementJournalSize: integer("movement_journal_size").notNull(),
  cachedStock: real("cached_stock").notNull(),
});

export type MovementJournalRow = typeof movementJournals.$inferSelect;

export const movementJournalEntries = sqliteTable("movement_journal_entry", {
  entryId: text("entry_id").primaryKey(),
  delta: real("delta").notNull(),
  reason: text("reason").notNull(),
  recordedAt: text("recorded_at").notNull(),
});

export type MovementJournalEntryRow = typeof movementJournalEntries.$inferSelect;

export const orderManagers = sqliteTable("order_manager", {
  omId: text("om_id").primaryKey(),
  stockOnHand: real("stock_on_hand").notNull(),
  isBackorderable: integer("is_backorderable", { mode: "boolean" }).notNull(),
});

export type OrderManagerRow = typeof orderManagers.$inferSelect;

export const receivingDocks = sqliteTable("receiving_dock", {
  rdId: text("rd_id").primaryKey(),
  stockOnHand: real("stock_on_hand").notNull(),
  movementJournalSize: integer("movement_journal_size").notNull(),
  cachedStock: real("cached_stock").notNull(),
});

export type ReceivingDockRow = typeof receivingDocks.$inferSelect;

export const reconciliationEngines = sqliteTable("reconciliation_engine", {
  reId: text("re_id").primaryKey(),
  reconciledQty: real("reconciled_qty").notNull(),
  cachedStock: real("cached_stock").notNull(),
  lastReconciliationResult: integer("last_reconciliation_result", { mode: "boolean" }).notNull(),
});

export type ReconciliationEngineRow = typeof reconciliationEngines.$inferSelect;

export const restocks = sqliteTable("restock", {
  restockId: text("restock_id").primaryKey(),
  receivedQty: real("received_qty").notNull(),
  inboundTimestamp: text("inbound_timestamp").notNull(),
});

export type RestockRow = typeof restocks.$inferSelect;

export const skus = sqliteTable("sku", {
  skuId: text("sku_id").primaryKey(),
  description: text("description").notNull(),
  isBackorderable: integer("is_backorderable", { mode: "boolean" }).notNull(),
});

export type SKURow = typeof skus.$inferSelect;

export const stockLedgers = sqliteTable("stock_ledger", {
  slId: text("sl_id").primaryKey(),
  stockOnHand: real("stock_on_hand").notNull(),
  cachedStock: real("cached_stock").notNull(),
  reconciledQty: real("reconciled_qty").notNull(),
  isBackorderable: integer("is_backorderable", { mode: "boolean" }).notNull(),
});

export type StockLedgerRow = typeof stockLedgers.$inferSelect;

export const stockOnHands = sqliteTable("stock_on_hand", {
  entryId: text("entry_id").primaryKey(),
  qty: real("qty").notNull(),
  lastUpdated: text("last_updated").notNull(),
});

export type StockOnHandRow = typeof stockOnHands.$inferSelect;

export const warehouseInventorySystems = sqliteTable("warehouse_inventory_system", {
  systemId: text("system_id").primaryKey(),
  stockOnHand: real("stock_on_hand").notNull(),
  movementJournalSize: integer("movement_journal_size").notNull(),
  cachedStock: real("cached_stock").notNull(),
  isBackorderable: integer("is_backorderable", { mode: "boolean" }).notNull(),
  reconciledQty: real("reconciled_qty").notNull(),
  lowStockAlertThreshold: real("low_stock_alert_threshold").notNull(),
  maxJournalEntriesPerCycle: integer("max_journal_entries_per_cycle").notNull(),
});

export type WarehouseInventorySystemRow = typeof warehouseInventorySystems.$inferSelect;

export const warehouseInventorySystemFormalizeds = sqliteTable("warehouse_inventory_system_formalized", {
  id: text("id").primaryKey(),
  soxControlId: text("sox_control_id").notNull(),
  auditRetentionDays: integer("audit_retention_days").notNull(),
  gdprDataController: text("gdpr_data_controller").notNull(),
  gdprProcessorContract: text("gdpr_processor_contract").notNull(),
  maxStackHeightCm: integer("max_stack_height_cm").notNull(),
  hazmatSegregationRequired: integer("hazmat_segregation_required", { mode: "boolean" }).notNull(),
});

export type WarehouseInventorySystemFormalizedRow = typeof warehouseInventorySystemFormalizeds.$inferSelect;
