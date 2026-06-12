// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const constraintManagers = sqliteTable("constraint_manager", {
  constraintId: text("constraint_id").primaryKey(),
  participantId: text("participant_id").notNull(),
});

export type ConstraintManagerRow = typeof constraintManagers.$inferSelect;

export const dateRanges = sqliteTable("date_range", {
  dateRangeId: text("date_range_id").primaryKey(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date").notNull(),
});

export type DateRangeRow = typeof dateRanges.$inferSelect;

export const exclusionSets = sqliteTable("exclusion_set", {
  exclusionSetId: text("exclusion_set_id").primaryKey(),
  participantId: text("participant_id").notNull(),
  dates: text("dates").notNull(),
});

export type ExclusionSetRow = typeof exclusionSets.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionText: text("assumption_text").notNull(),
  assumptionCategory: text("assumption_category").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const meetingSchedulerSystems = sqliteTable("meeting_scheduler_system", {
  systemId: text("system_id").primaryKey(),
  proposedDate: real("proposed_date").notNull(),
  rangeStart: real("range_start").notNull(),
  rangeEnd: real("range_end").notNull(),
  conflictReported: integer("conflict_reported", { mode: "boolean" }).notNull(),
  notificationSent: integer("notification_sent", { mode: "boolean" }).notNull(),
  constraintUpdateAccepted: integer("constraint_update_accepted", { mode: "boolean" }).notNull(),
});

export type MeetingSchedulerSystemRow = typeof meetingSchedulerSystems.$inferSelect;

export const meetingSchedulerSystemFormalizeds = sqliteTable("meeting_scheduler_system_formalized", {
  id: text("id").primaryKey(),
  gdprDpoContact: text("gdpr_dpo_contact").notNull(),
  dataRetentionDays: integer("data_retention_days").notNull(),
});

export type MeetingSchedulerSystemFormalizedRow = typeof meetingSchedulerSystemFormalizeds.$inferSelect;

export const meetingStores = sqliteTable("meeting_store", {
  meetingId: text("meeting_id").primaryKey(),
  scheduledDate: real("scheduled_date").notNull(),
  location: text("location").notNull(),
  confirmed: integer("confirmed", { mode: "boolean" }).notNull(),
});

export type MeetingStoreRow = typeof meetingStores.$inferSelect;

export const notificationServices = sqliteTable("notification_service", {
  notifId: text("notif_id").primaryKey(),
  lastNotificationSentAt: real("last_notification_sent_at").notNull(),
});

export type NotificationServiceRow = typeof notificationServices.$inferSelect;

export const preferenceSets = sqliteTable("preference_set", {
  preferenceSetId: text("preference_set_id").primaryKey(),
  participantId: text("participant_id").notNull(),
  dates: text("dates").notNull(),
});

export type PreferenceSetRow = typeof preferenceSets.$inferSelect;

export const proposerEngines = sqliteTable("proposer_engine", {
  engineId: text("engine_id").primaryKey(),
});

export type ProposerEngineRow = typeof proposerEngines.$inferSelect;

export const requestManagers = sqliteTable("request_manager", {
  requestId: text("request_id").primaryKey(),
  rangeStart: real("range_start").notNull(),
  rangeEnd: real("range_end").notNull(),
  isOpen: integer("is_open", { mode: "boolean" }).notNull(),
  initiatorId: text("initiator_id").notNull(),
});

export type RequestManagerRow = typeof requestManagers.$inferSelect;
