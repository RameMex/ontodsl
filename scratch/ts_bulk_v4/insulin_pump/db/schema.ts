// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const alertSystems = sqliteTable("alert_system", {
  alertId: text("alert_id").primaryKey(),
  alarmActive: integer("alarm_active", { mode: "boolean" }).notNull(),
  alarmReason: text("alarm_reason").notNull(),
  maxAlertLatencyMin: real("max_alert_latency_min").notNull(),
});

export type AlertSystemRow = typeof alertSystems.$inferSelect;

export const bloodSugars = sqliteTable("blood_sugar", {
  readingId: text("reading_id").primaryKey(),
  concentrationMgDl: real("concentration_mg_dl").notNull(),
  timestampMin: real("timestamp_min").notNull(),
});

export type BloodSugarRow = typeof bloodSugars.$inferSelect;

export const bloodSugarSensors = sqliteTable("blood_sugar_sensor", {
  sensorId: text("sensor_id").primaryKey(),
  lastReadingMgDl: real("last_reading_mg_dl").notNull(),
  readingValid: integer("reading_valid", { mode: "boolean" }).notNull(),
  readingTimestampMin: real("reading_timestamp_min").notNull(),
  minPlausibleMgDl: real("min_plausible_mg_dl").notNull(),
  maxPlausibleMgDl: real("max_plausible_mg_dl").notNull(),
});

export type BloodSugarSensorRow = typeof bloodSugarSensors.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  mitigationRef: text("mitigation_ref").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const insulinPumpSystems = sqliteTable("insulin_pump_system", {
  systemId: text("system_id").primaryKey(),
  isOperating: integer("is_operating", { mode: "boolean" }).notNull(),
  faultDetected: integer("fault_detected", { mode: "boolean" }).notNull(),
  safeMaxDoseUnits: real("safe_max_dose_units").notNull(),
  lastDoseDelivered: real("last_dose_delivered").notNull(),
  currentBloodSugarMgDl: real("current_blood_sugar_mg_dl").notNull(),
  bloodSugarRateMgDlPerMin: real("blood_sugar_rate_mg_dl_per_min").notNull(),
  reservoirUnits: real("reservoir_units").notNull(),
  reservoirCapacityUnits: real("reservoir_capacity_units").notNull(),
  lowReservoirThresholdUnits: real("low_reservoir_threshold_units").notNull(),
  reservoirIsLow: integer("reservoir_is_low", { mode: "boolean" }).notNull(),
  alarmActive: integer("alarm_active", { mode: "boolean" }).notNull(),
  alarmReason: text("alarm_reason").notNull(),
  sensorReadingIntervalMin: real("sensor_reading_interval_min").notNull(),
  selfTestPeriodMin: real("self_test_period_min").notNull(),
  maxFaultResponseMin: real("max_fault_response_min").notNull(),
  maxAlertLatencyMin: real("max_alert_latency_min").notNull(),
});

export type InsulinPumpSystemRow = typeof insulinPumpSystems.$inferSelect;

export const insulinReservoirs = sqliteTable("insulin_reservoir", {
  reservoirId: text("reservoir_id").primaryKey(),
  capacityUnits: real("capacity_units").notNull(),
  currentUnits: real("current_units").notNull(),
  isLow: integer("is_low", { mode: "boolean" }).notNull(),
});

export type InsulinReservoirRow = typeof insulinReservoirs.$inferSelect;

export const pumpActuators = sqliteTable("pump_actuator", {
  actuatorId: text("actuator_id").primaryKey(),
  reservoirUnits: real("reservoir_units").notNull(),
  reservoirCapacityUnits: real("reservoir_capacity_units").notNull(),
  lowReservoirThresholdUnits: real("low_reservoir_threshold_units").notNull(),
  reservoirIsLow: integer("reservoir_is_low", { mode: "boolean" }).notNull(),
  safeMaxDoseUnits: real("safe_max_dose_units").notNull(),
  lastDoseDelivered: real("last_dose_delivered").notNull(),
  delivering: integer("delivering", { mode: "boolean" }).notNull(),
});

export type PumpActuatorRow = typeof pumpActuators.$inferSelect;

export const safetyMonitors = sqliteTable("safety_monitor", {
  monitorId: text("monitor_id").primaryKey(),
  isOperating: integer("is_operating", { mode: "boolean" }).notNull(),
  faultDetected: integer("fault_detected", { mode: "boolean" }).notNull(),
  selfTestPeriodMin: real("self_test_period_min").notNull(),
  maxFaultResponseMin: real("max_fault_response_min").notNull(),
  lastTestTimestampMin: real("last_test_timestamp_min").notNull(),
});

export type SafetyMonitorRow = typeof safetyMonitors.$inferSelect;

export const safeZones = sqliteTable("safe_zone", {
  zoneId: text("zone_id").primaryKey(),
  lowerBoundMgDl: real("lower_bound_mg_dl").notNull(),
  upperBoundMgDl: real("upper_bound_mg_dl").notNull(),
});

export type SafeZoneRow = typeof safeZones.$inferSelect;

export const selfTests = sqliteTable("self_test", {
  testId: text("test_id").primaryKey(),
  intervalMinutes: real("interval_minutes").notNull(),
  lastTestTimestampMin: real("last_test_timestamp_min").notNull(),
  passed: integer("passed", { mode: "boolean" }).notNull(),
});

export type SelfTestRow = typeof selfTests.$inferSelect;
