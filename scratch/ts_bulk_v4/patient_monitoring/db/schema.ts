// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const alarmManagers = sqliteTable("alarm_manager", {
  alarmManagerId: text("alarm_manager_id").primaryKey(),
  alarmActive: integer("alarm_active", { mode: "boolean" }).notNull(),
  alarmSilenced: integer("alarm_silenced", { mode: "boolean" }).notNull(),
  alarmSilenceElapsedSeconds: real("alarm_silence_elapsed_seconds").notNull(),
  sensorDisconnectAlarmActive: integer("sensor_disconnect_alarm_active", { mode: "boolean" }).notNull(),
  maxAlarmLatencySeconds: real("max_alarm_latency_seconds").notNull(),
  maxSilenceDurationSeconds: real("max_silence_duration_seconds").notNull(),
});

export type AlarmManagerRow = typeof alarmManagers.$inferSelect;

export const alarmThresholds = sqliteTable("alarm_threshold", {
  thresholdId: text("threshold_id").primaryKey(),
  vitalSign: text("vital_sign").notNull(),
  lowBpm: real("low_bpm").notNull(),
  highBpm: real("high_bpm").notNull(),
});

export type AlarmThresholdRow = typeof alarmThresholds.$inferSelect;

export const displayControllers = sqliteTable("display_controller", {
  displayId: text("display_id").primaryKey(),
  currentHeartRateBpm: real("current_heart_rate_bpm").notNull(),
  isDisplayingReading: integer("is_displaying_reading", { mode: "boolean" }).notNull(),
  alarmLowBpm: real("alarm_low_bpm").notNull(),
  alarmHighBpm: real("alarm_high_bpm").notNull(),
  plausibilityLowerBpm: real("plausibility_lower_bpm").notNull(),
  plausibilityUpperBpm: real("plausibility_upper_bpm").notNull(),
});

export type DisplayControllerRow = typeof displayControllers.$inferSelect;

export const ecgSensorInterfaces = sqliteTable("ecg_sensor_interface", {
  sensorId: text("sensor_id").primaryKey(),
  lastRawBpm: real("last_raw_bpm").notNull(),
  lastValidBpm: real("last_valid_bpm").notNull(),
  sensorConnected: integer("sensor_connected", { mode: "boolean" }).notNull(),
  signalAbsentSeconds: real("signal_absent_seconds").notNull(),
  plausibilityLowerBpm: real("plausibility_lower_bpm").notNull(),
  plausibilityUpperBpm: real("plausibility_upper_bpm").notNull(),
  rejectedReadingCount: integer("rejected_reading_count").notNull(),
});

export type EcgSensorInterfaceRow = typeof ecgSensorInterfaces.$inferSelect;

export const faultLoggers = sqliteTable("fault_logger", {
  loggerId: text("logger_id").primaryKey(),
  faultCount: integer("fault_count").notNull(),
  lastFaultDescription: text("last_fault_description").notNull(),
  lastFaultTimestampMs: integer("last_fault_timestamp_ms").notNull(),
});

export type FaultLoggerRow = typeof faultLoggers.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  tag: text("tag").notNull(),
  description: text("description").notNull(),
  rationale: text("rationale").notNull(),
  linkedRequirementId: text("linked_requirement_id").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const heartRateReadings = sqliteTable("heart_rate_reading", {
  readingId: text("reading_id").primaryKey(),
  valueBpm: real("value_bpm").notNull(),
  timestampMs: integer("timestamp_ms").notNull(),
  sourcePatientId: text("source_patient_id").notNull(),
});

export type HeartRateReadingRow = typeof heartRateReadings.$inferSelect;

export const sensorDisconnectEvents = sqliteTable("sensor_disconnect_event", {
  disconnectEventId: text("disconnect_event_id").primaryKey(),
  patientId: text("patient_id").notNull(),
  signalLostTimestampMs: integer("signal_lost_timestamp_ms").notNull(),
  signalRestoredTimestampMs: integer("signal_restored_timestamp_ms").notNull(),
  durationSeconds: real("duration_seconds").notNull(),
});

export type SensorDisconnectEventRow = typeof sensorDisconnectEvents.$inferSelect;

export const silencedStates = sqliteTable("silenced_state", {
  silenceId: text("silence_id").primaryKey(),
  acknowledgedByClinicianId: text("acknowledged_by_clinician_id").notNull(),
  silenceStartTimestampMs: integer("silence_start_timestamp_ms").notNull(),
  maxSilenceDurationSeconds: real("max_silence_duration_seconds").notNull(),
});

export type SilencedStateRow = typeof silencedStates.$inferSelect;

export const vitalSignsMonitorSystems = sqliteTable("vital_signs_monitor_system", {
  systemId: text("system_id").primaryKey(),
  currentHeartRateBpm: real("current_heart_rate_bpm").notNull(),
  lastValidHeartRateBpm: real("last_valid_heart_rate_bpm").notNull(),
  isDisplayingReading: integer("is_displaying_reading", { mode: "boolean" }).notNull(),
  alarmLowBpm: real("alarm_low_bpm").notNull(),
  alarmHighBpm: real("alarm_high_bpm").notNull(),
  alarmActive: integer("alarm_active", { mode: "boolean" }).notNull(),
  alarmSilenced: integer("alarm_silenced", { mode: "boolean" }).notNull(),
  alarmSilenceElapsedSeconds: real("alarm_silence_elapsed_seconds").notNull(),
  sensorConnected: integer("sensor_connected", { mode: "boolean" }).notNull(),
  signalAbsentSeconds: real("signal_absent_seconds").notNull(),
  sensorDisconnectAlarmActive: integer("sensor_disconnect_alarm_active", { mode: "boolean" }).notNull(),
  rejectedReadingCount: integer("rejected_reading_count").notNull(),
  plausibilityLowerBpm: real("plausibility_lower_bpm").notNull(),
  plausibilityUpperBpm: real("plausibility_upper_bpm").notNull(),
  maxAlarmLatencySeconds: real("max_alarm_latency_seconds").notNull(),
  disconnectTimeoutSeconds: real("disconnect_timeout_seconds").notNull(),
  maxSilenceDurationSeconds: real("max_silence_duration_seconds").notNull(),
});

export type VitalSignsMonitorSystemRow = typeof vitalSignsMonitorSystems.$inferSelect;

export const vitalSignsMonitorSystemFormalizeds = sqliteTable("vital_signs_monitor_system_formalized", {
  id: text("id").primaryKey(),
  faultDetected: integer("fault_detected", { mode: "boolean" }).notNull(),
});

export type VitalSignsMonitorSystemFormalizedRow = typeof vitalSignsMonitorSystemFormalizeds.$inferSelect;
