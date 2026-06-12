// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const alarmManagers = sqliteTable("alarm_manager", {
  managerId: text("manager_id").primaryKey(),
  alarmActive: integer("alarm_active", { mode: "boolean" }).notNull(),
  alarmSilenced: integer("alarm_silenced", { mode: "boolean" }).notNull(),
  alarmSilenceTimestamp: real("alarm_silence_timestamp").notNull(),
  alarmType: text("alarm_type").notNull(),
  maxAlarmLatencyMs: real("max_alarm_latency_ms").notNull(),
  silenceAutoRearmMs: real("silence_auto_rearm_ms").notNull(),
  alarmTriggeredTimestamp: real("alarm_triggered_timestamp").notNull(),
});

export type AlarmManagerRow = typeof alarmManagers.$inferSelect;

export const alarmThresholds = sqliteTable("alarm_threshold", {
  thresholdId: text("threshold_id").primaryKey(),
  vitalType: text("vital_type").notNull(),
  upperBound: real("upper_bound").notNull(),
  lowerBound: real("lower_bound").notNull(),
});

export type AlarmThresholdRow = typeof alarmThresholds.$inferSelect;

export const bedsideMonitorSystems = sqliteTable("bedside_monitor_system", {
  systemId: text("system_id").primaryKey(),
  implausibleThresholdLower: real("implausible_threshold_lower").notNull(),
  implausibleThresholdUpper: real("implausible_threshold_upper").notNull(),
  maxAlarmLatencyMs: real("max_alarm_latency_ms").notNull(),
  alarmThresholdsConfigured: integer("alarm_thresholds_configured", { mode: "boolean" }).notNull(),
  maxSignalLossMsBeforeAlarm: real("max_signal_loss_ms_before_alarm").notNull(),
  silenceAutoRearmMs: real("silence_auto_rearm_ms").notNull(),
});

export type BedsideMonitorSystemRow = typeof bedsideMonitorSystems.$inferSelect;

export const bedsideMonitorSystemFormalizeds = sqliteTable("bedside_monitor_system_formalized", {
  id: text("id").primaryKey(),
  fda510kNumber: text("fda510k_number").notNull(),
  indicationsForUse: text("indications_for_use").notNull(),
  submissionDate: real("submission_date").notNull(),
  softwareSafetyClass: text("software_safety_class").notNull(),
  riskManagementFileRef: text("risk_management_file_ref").notNull(),
  phiHandlingPolicyRef: text("phi_handling_policy_ref").notNull(),
  breachNotificationContact: text("breach_notification_contact").notNull(),
  alarmPriorityLevels: text("alarm_priority_levels").notNull(),
  alarmAudiblePatternsRef: text("alarm_audible_patterns_ref").notNull(),
  maxAlarmLatencySeconds: real("max_alarm_latency_seconds").notNull(),
});

export type BedsideMonitorSystemFormalizedRow = typeof bedsideMonitorSystemFormalizeds.$inferSelect;

export const bedsideMonitorSystemRequirementses = sqliteTable("bedside_monitor_system_requirements", {
  id: text("id").primaryKey(),
  currentHeartRate: real("current_heart_rate").notNull(),
  heartRatePlausible: integer("heart_rate_plausible", { mode: "boolean" }).notNull(),
  rejectionCount: integer("rejection_count").notNull(),
  sensorConnected: integer("sensor_connected", { mode: "boolean" }).notNull(),
  sensorLastSignalTimestamp: real("sensor_last_signal_timestamp").notNull(),
  alarmActive: integer("alarm_active", { mode: "boolean" }).notNull(),
  alarmSilenced: integer("alarm_silenced", { mode: "boolean" }).notNull(),
  alarmSilenceTimestamp: real("alarm_silence_timestamp").notNull(),
  alarmType: text("alarm_type").notNull(),
});

export type BedsideMonitorSystemRequirementsRow = typeof bedsideMonitorSystemRequirementses.$inferSelect;

export const displayRenderers = sqliteTable("display_renderer", {
  displayId: text("display_id").primaryKey(),
  displayedHeartRate: real("displayed_heart_rate").notNull(),
  displayedAlarmActive: integer("displayed_alarm_active", { mode: "boolean" }).notNull(),
  displayedAlarmType: text("displayed_alarm_type").notNull(),
  lastUpdateTimestamp: real("last_update_timestamp").notNull(),
});

export type DisplayRendererRow = typeof displayRenderers.$inferSelect;

export const ecgSensors = sqliteTable("ecg_sensor", {
  sensorId: text("sensor_id").primaryKey(),
  sensorConnected: integer("sensor_connected", { mode: "boolean" }).notNull(),
  lastSignalTimestamp: real("last_signal_timestamp").notNull(),
  currentReadingValue: real("current_reading_value").notNull(),
  readingTimestamp: real("reading_timestamp").notNull(),
  signalLossTimerMs: real("signal_loss_timer_ms").notNull(),
});

export type EcgSensorRow = typeof ecgSensors.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumption1: text("assumption1").notNull(),
  assumption2: text("assumption2").notNull(),
  assumption3: text("assumption3").notNull(),
  assumption4: text("assumption4").notNull(),
  assumption5: text("assumption5").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const heartRateProcessors = sqliteTable("heart_rate_processor", {
  processorId: text("processor_id").primaryKey(),
  implausibleThresholdLower: real("implausible_threshold_lower").notNull(),
  implausibleThresholdUpper: real("implausible_threshold_upper").notNull(),
  rejectionCount: integer("rejection_count").notNull(),
  heartRatePlausible: integer("heart_rate_plausible", { mode: "boolean" }).notNull(),
  lastAcceptedHeartRate: real("last_accepted_heart_rate").notNull(),
  lastProcessedTimestamp: real("last_processed_timestamp").notNull(),
});

export type HeartRateProcessorRow = typeof heartRateProcessors.$inferSelect;

export const heartRateReadings = sqliteTable("heart_rate_reading", {
  readingId: text("reading_id").primaryKey(),
  valueBpm: real("value_bpm").notNull(),
  timestamp: real("timestamp").notNull(),
  isPlausible: integer("is_plausible", { mode: "boolean" }).notNull(),
});

export type HeartRateReadingRow = typeof heartRateReadings.$inferSelect;

export const sensorSignals = sqliteTable("sensor_signal", {
  signalId: text("signal_id").primaryKey(),
  sensorType: text("sensor_type").notNull(),
  signalPresent: integer("signal_present", { mode: "boolean" }).notNull(),
  lastSignalTimestamp: real("last_signal_timestamp").notNull(),
});

export type SensorSignalRow = typeof sensorSignals.$inferSelect;

export const silencedAlarms = sqliteTable("silenced_alarm", {
  alarmId: text("alarm_id").primaryKey(),
  alarmType: text("alarm_type").notNull(),
  silencedTimestamp: real("silenced_timestamp").notNull(),
  autoRearmAtMs: real("auto_rearm_at_ms").notNull(),
});

export type SilencedAlarmRow = typeof silencedAlarms.$inferSelect;
