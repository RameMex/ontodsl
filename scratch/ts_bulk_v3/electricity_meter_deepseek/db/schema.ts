// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const auditLoggers = sqliteTable("audit_logger", {
  loggerId: text("logger_id").primaryKey(),
  logEntryCount: integer("log_entry_count").notNull(),
  retentionDays: integer("retention_days").notNull(),
  lastEntryTimestamp: real("last_entry_timestamp").notNull(),
});

export type AuditLoggerRow = typeof auditLoggers.$inferSelect;

export const billingEngines = sqliteTable("billing_engine", {
  engineId: text("engine_id").primaryKey(),
  currentBillingTotal: real("current_billing_total").notNull(),
  lastAppliedIncrement: real("last_applied_increment").notNull(),
  lastAppliedTimestamp: real("last_applied_timestamp").notNull(),
  isFrozen: integer("is_frozen", { mode: "boolean" }).notNull(),
  isCleared: integer("is_cleared", { mode: "boolean" }).notNull(),
  acceptedReadingCount: integer("accepted_reading_count").notNull(),
  compensationTotal: real("compensation_total").notNull(),
});

export type BillingEngineRow = typeof billingEngines.$inferSelect;

export const billingIncrements = sqliteTable("billing_increment", {
  incrementId: text("increment_id").primaryKey(),
  amount: real("amount").notNull(),
  appliedTimestamp: real("applied_timestamp").notNull(),
});

export type BillingIncrementRow = typeof billingIncrements.$inferSelect;

export const consumptionDeltas = sqliteTable("consumption_delta", {
  deltaId: text("delta_id").primaryKey(),
  previousKwh: real("previous_kwh").notNull(),
  currentKwh: real("current_kwh").notNull(),
  value: real("value").notNull(),
});

export type ConsumptionDeltaRow = typeof consumptionDeltas.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  riskLevel: text("risk_level").notNull(),
  validationMethod: text("validation_method").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const meterBillingSystems = sqliteTable("meter_billing_system", {
  systemId: text("system_id").primaryKey(),
  maxNegativeDeltaThreshold: real("max_negative_delta_threshold").notNull(),
  tamperFreezeActive: integer("tamper_freeze_active", { mode: "boolean" }).notNull(),
  tamperCleared: integer("tamper_cleared", { mode: "boolean" }).notNull(),
  acceptedReadingCount: integer("accepted_reading_count").notNull(),
});

export type MeterBillingSystemRow = typeof meterBillingSystems.$inferSelect;

export const meterInterfaces = sqliteTable("meter_interface", {
  interfaceId: text("interface_id").primaryKey(),
  lastRawReadingKwh: real("last_raw_reading_kwh").notNull(),
  lastRawReadingTimestamp: real("last_raw_reading_timestamp").notNull(),
  lastRawTamperFlags: text("last_raw_tamper_flags").notNull(),
  readingQueueSize: integer("reading_queue_size").notNull(),
  isConnected: integer("is_connected", { mode: "boolean" }).notNull(),
});

export type MeterInterfaceRow = typeof meterInterfaces.$inferSelect;

export const meterReadings = sqliteTable("meter_reading", {
  readingId: text("reading_id").primaryKey(),
  timestamp: real("timestamp").notNull(),
  kwh: real("kwh").notNull(),
  tamperFlags: text("tamper_flags").notNull(),
});

export type MeterReadingRow = typeof meterReadings.$inferSelect;

export const meterReadingValidators = sqliteTable("meter_reading_validator", {
  validatorId: text("validator_id").primaryKey(),
  lastAcceptedKwh: real("last_accepted_kwh").notNull(),
  lastAcceptedTimestamp: real("last_accepted_timestamp").notNull(),
  lastComputedDelta: real("last_computed_delta").notNull(),
  lastDeltaIsValid: integer("last_delta_is_valid", { mode: "boolean" }).notNull(),
  anomalyCount: integer("anomaly_count").notNull(),
  maxNegativeDeltaThreshold: real("max_negative_delta_threshold").notNull(),
});

export type MeterReadingValidatorRow = typeof meterReadingValidators.$inferSelect;

export const tamperClearances = sqliteTable("tamper_clearance", {
  clearanceId: text("clearance_id").primaryKey(),
  timestamp: real("timestamp").notNull(),
});

export type TamperClearanceRow = typeof tamperClearances.$inferSelect;

export const tamperEvents = sqliteTable("tamper_event", {
  eventId: text("event_id").primaryKey(),
  timestamp: real("timestamp").notNull(),
  eventType: text("event_type").notNull(),
  description: text("description").notNull(),
});

export type TamperEventRow = typeof tamperEvents.$inferSelect;

export const tamperMonitors = sqliteTable("tamper_monitor", {
  monitorId: text("monitor_id").primaryKey(),
  isTamperActive: integer("is_tamper_active", { mode: "boolean" }).notNull(),
  lastTamperType: text("last_tamper_type").notNull(),
  lastTamperDescription: text("last_tamper_description").notNull(),
  lastTamperTimestamp: real("last_tamper_timestamp").notNull(),
  tamperEventCount: integer("tamper_event_count").notNull(),
  isManualClearancePending: integer("is_manual_clearance_pending", { mode: "boolean" }).notNull(),
});

export type TamperMonitorRow = typeof tamperMonitors.$inferSelect;
