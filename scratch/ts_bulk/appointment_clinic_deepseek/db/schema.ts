// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const appointmentBookers = sqliteTable("appointment_booker", {
  bookerId: text("booker_id").primaryKey(),
});

export type AppointmentBookerRow = typeof appointmentBookers.$inferSelect;

export const appointmentSchedulerSystems = sqliteTable("appointment_scheduler_system", {
  systemId: text("system_id").primaryKey(),
  maxOverlappingClinicians: integer("max_overlapping_clinicians").notNull(),
  minWindowEndDelta: real("min_window_end_delta").notNull(),
  minLateFeeCount: integer("min_late_fee_count").notNull(),
  maxOverlappingPatient: integer("max_overlapping_patient").notNull(),
});

export type AppointmentSchedulerSystemRow = typeof appointmentSchedulerSystems.$inferSelect;

export const appointmentSlots = sqliteTable("appointment_slot", {
  slotId: text("slot_id").primaryKey(),
  startTimeEpoch: real("start_time_epoch").notNull(),
  endTimeEpoch: real("end_time_epoch").notNull(),
});

export type AppointmentSlotRow = typeof appointmentSlots.$inferSelect;

export const availabilityManagers = sqliteTable("availability_manager", {
  managerId: text("manager_id").primaryKey(),
});

export type AvailabilityManagerRow = typeof availabilityManagers.$inferSelect;

export const availabilityWindows = sqliteTable("availability_window", {
  windowId: text("window_id").primaryKey(),
  windowStartEpoch: real("window_start_epoch").notNull(),
  windowEndEpoch: real("window_end_epoch").notNull(),
});

export type AvailabilityWindowRow = typeof availabilityWindows.$inferSelect;

export const cancellationHandlers = sqliteTable("cancellation_handler", {
  cancelId: text("cancel_id").primaryKey(),
});

export type CancellationHandlerRow = typeof cancellationHandlers.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  assumptionText: text("assumption_text").notNull(),
  classification: text("classification").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const lateFeeEvents = sqliteTable("late_fee_event", {
  feeEventId: text("fee_event_id").primaryKey(),
  amount: real("amount").notNull(),
  timestampEpoch: real("timestamp_epoch").notNull(),
  relatedAppointmentId: text("related_appointment_id").notNull(),
});

export type LateFeeEventRow = typeof lateFeeEvents.$inferSelect;

export const lateFeeRecorders = sqliteTable("late_fee_recorder", {
  recorderId: text("recorder_id").primaryKey(),
});

export type LateFeeRecorderRow = typeof lateFeeRecorders.$inferSelect;
