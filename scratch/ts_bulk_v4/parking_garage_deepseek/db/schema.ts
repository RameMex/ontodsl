// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const entryEvents = sqliteTable("entry_event", {
  eventId: text("event_id").primaryKey(),
  timestamp: text("timestamp").notNull(),
  vehicleId: text("vehicle_id").notNull(),
});

export type EntryEventRow = typeof entryEvents.$inferSelect;

export const entrySensors = sqliteTable("entry_sensor", {
  sensorId: text("sensor_id").primaryKey(),
  vehiclePresent: integer("vehicle_present", { mode: "boolean" }).notNull(),
  lastDetectionTimestamp: text("last_detection_timestamp").notNull(),
});

export type EntrySensorRow = typeof entrySensors.$inferSelect;

export const exitEvents = sqliteTable("exit_event", {
  eventId: text("event_id").primaryKey(),
  timestamp: text("timestamp").notNull(),
  vehicleId: text("vehicle_id").notNull(),
});

export type ExitEventRow = typeof exitEvents.$inferSelect;

export const exitSensors = sqliteTable("exit_sensor", {
  sensorId: text("sensor_id").primaryKey(),
  ticketPresented: integer("ticket_presented", { mode: "boolean" }).notNull(),
  lastTicketId: text("last_ticket_id").notNull(),
  lastDetectionTimestamp: text("last_detection_timestamp").notNull(),
});

export type ExitSensorRow = typeof exitSensors.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull(),
  owner: text("owner").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const gateControllers = sqliteTable("gate_controller", {
  controllerId: text("controller_id").primaryKey(),
  entryGateOpen: integer("entry_gate_open", { mode: "boolean" }).notNull(),
  exitGateOpen: integer("exit_gate_open", { mode: "boolean" }).notNull(),
  entryGateTimer: integer("entry_gate_timer").notNull(),
  exitGateTimer: integer("exit_gate_timer").notNull(),
});

export type GateControllerRow = typeof gateControllers.$inferSelect;

export const occupancyCounters = sqliteTable("occupancy_counter", {
  counterId: text("counter_id").primaryKey(),
  currentOccupancy: integer("current_occupancy").notNull(),
  maxCapacity: integer("max_capacity").notNull(),
});

export type OccupancyCounterRow = typeof occupancyCounters.$inferSelect;

export const occupancyTrackers = sqliteTable("occupancy_tracker", {
  trackerId: text("tracker_id").primaryKey(),
  currentOccupancy: integer("current_occupancy").notNull(),
  certifiedCapacity: integer("certified_capacity").notNull(),
  isFull: integer("is_full", { mode: "boolean" }).notNull(),
});

export type OccupancyTrackerRow = typeof occupancyTrackers.$inferSelect;

export const parkingGarageSystems = sqliteTable("parking_garage_system", {
  systemId: text("system_id").primaryKey(),
  certifiedCapacity: integer("certified_capacity").notNull(),
  currentOccupancy: integer("current_occupancy").notNull(),
  ticketCount: integer("ticket_count").notNull(),
  entryGateOpen: integer("entry_gate_open", { mode: "boolean" }).notNull(),
  exitGateOpen: integer("exit_gate_open", { mode: "boolean" }).notNull(),
  isFull: integer("is_full", { mode: "boolean" }).notNull(),
});

export type ParkingGarageSystemRow = typeof parkingGarageSystems.$inferSelect;

export const paymentProcessors = sqliteTable("payment_processor", {
  processorId: text("processor_id").primaryKey(),
  lastPaidTicketId: text("last_paid_ticket_id").notNull(),
  paymentSuccessful: integer("payment_successful", { mode: "boolean" }).notNull(),
});

export type PaymentProcessorRow = typeof paymentProcessors.$inferSelect;

export const tickets = sqliteTable("ticket", {
  ticketId: text("ticket_id").primaryKey(),
  issuedAtEntry: text("issued_at_entry").notNull(),
  consumedAtExit: text("consumed_at_exit").notNull(),
  isPaid: integer("is_paid", { mode: "boolean" }).notNull(),
  isUsed: integer("is_used", { mode: "boolean" }).notNull(),
});

export type TicketRow = typeof tickets.$inferSelect;

export const ticketIssuers = sqliteTable("ticket_issuer", {
  issuerId: text("issuer_id").primaryKey(),
  nextTicketNumber: integer("next_ticket_number").notNull(),
});

export type TicketIssuerRow = typeof ticketIssuers.$inferSelect;

export const ticketValidators = sqliteTable("ticket_validator", {
  validatorId: text("validator_id").primaryKey(),
  validationResult: integer("validation_result", { mode: "boolean" }).notNull(),
  lastValidatedTicketId: text("last_validated_ticket_id").notNull(),
});

export type TicketValidatorRow = typeof ticketValidators.$inferSelect;
