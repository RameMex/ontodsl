// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const constraintAggregators = sqliteTable("constraint_aggregator", {
  aggregatorId: text("aggregator_id").primaryKey(),
  requestId: text("request_id").notNull(),
  constraintSubmissionCount: integer("constraint_submission_count").notNull(),
  invitedParticipantCount: integer("invited_participant_count").notNull(),
  allConstraintsCollected: integer("all_constraints_collected", { mode: "boolean" }).notNull(),
});

export type ConstraintAggregatorRow = typeof constraintAggregators.$inferSelect;

export const dateRanges = sqliteTable("date_range", {
  rangeId: text("range_id").primaryKey(),
  earliest: text("earliest").notNull(),
  latest: text("latest").notNull(),
});

export type DateRangeRow = typeof dateRanges.$inferSelect;

export const dateSelectors = sqliteTable("date_selector", {
  selectorId: text("selector_id").primaryKey(),
  requestId: text("request_id").notNull(),
  proposedDate: text("proposed_date").notNull(),
  conflictDetected: integer("conflict_detected", { mode: "boolean" }).notNull(),
  minCandidateDates: integer("min_candidate_dates").notNull(),
});

export type DateSelectorRow = typeof dateSelectors.$inferSelect;

export const exclusionSets = sqliteTable("exclusion_set", {
  exclusionSetId: text("exclusion_set_id").primaryKey(),
  ownerId: text("owner_id").notNull(),
});

export type ExclusionSetRow = typeof exclusionSets.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  tag: text("tag").notNull(),
  statement: text("statement").notNull(),
  rationale: text("rationale").notNull(),
  riskIfViolated: text("risk_if_violated").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const meetingSchedulerSystems = sqliteTable("meeting_scheduler_system", {
  systemId: text("system_id").primaryKey(),
  currentRequestId: text("current_request_id").notNull(),
  requestStatus: text("request_status").notNull(),
  rangeEarliest: text("range_earliest").notNull(),
  rangeLatest: text("range_latest").notNull(),
  proposedDate: text("proposed_date").notNull(),
  location: text("location").notNull(),
  constraintSubmissionCount: integer("constraint_submission_count").notNull(),
  invitedParticipantCount: integer("invited_participant_count").notNull(),
  allConstraintsCollected: integer("all_constraints_collected", { mode: "boolean" }).notNull(),
  initiatorInformed: integer("initiator_informed", { mode: "boolean" }).notNull(),
  participantsNotified: integer("participants_notified", { mode: "boolean" }).notNull(),
  maxConflictResponseHours: real("max_conflict_response_hours").notNull(),
  maxNotificationDelayHours: real("max_notification_delay_hours").notNull(),
  minCandidateDates: integer("min_candidate_dates").notNull(),
});

export type MeetingSchedulerSystemRow = typeof meetingSchedulerSystems.$inferSelect;

export const notificationDispatchers = sqliteTable("notification_dispatcher", {
  dispatcherId: text("dispatcher_id").primaryKey(),
  requestId: text("request_id").notNull(),
  confirmedDate: text("confirmed_date").notNull(),
  confirmedLocation: text("confirmed_location").notNull(),
  participantsNotified: integer("participants_notified", { mode: "boolean" }).notNull(),
  maxNotificationDelayHours: real("max_notification_delay_hours").notNull(),
  maxConflictResponseHours: real("max_conflict_response_hours").notNull(),
});

export type NotificationDispatcherRow = typeof notificationDispatchers.$inferSelect;

export const preferenceSets = sqliteTable("preference_set", {
  preferenceSetId: text("preference_set_id").primaryKey(),
  ownerId: text("owner_id").notNull(),
});

export type PreferenceSetRow = typeof preferenceSets.$inferSelect;

export const requestManagers = sqliteTable("request_manager", {
  managerId: text("manager_id").primaryKey(),
  currentRequestId: text("current_request_id").notNull(),
  requestStatus: text("request_status").notNull(),
  rangeEarliest: text("range_earliest").notNull(),
  rangeLatest: text("range_latest").notNull(),
  invitedParticipantCount: integer("invited_participant_count").notNull(),
  initiatorId: text("initiator_id").notNull(),
  initiatorEmail: text("initiator_email").notNull(),
  initiatorInformed: integer("initiator_informed", { mode: "boolean" }).notNull(),
});

export type RequestManagerRow = typeof requestManagers.$inferSelect;

export const schedulingOutcomes = sqliteTable("scheduling_outcome", {
  outcomeId: text("outcome_id").primaryKey(),
  requestId: text("request_id").notNull(),
  resolvedDate: text("resolved_date").notNull(),
  isConflict: integer("is_conflict", { mode: "boolean" }).notNull(),
});

export type SchedulingOutcomeRow = typeof schedulingOutcomes.$inferSelect;

export const schedulingRequests = sqliteTable("scheduling_request", {
  requestId: text("request_id").primaryKey(),
  initiatorId: text("initiator_id").notNull(),
  status: text("status").notNull(),
});

export type SchedulingRequestRow = typeof schedulingRequests.$inferSelect;
