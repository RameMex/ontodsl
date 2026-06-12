// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const actuatorCommands = sqliteTable("actuator_command", {
  commandId: text("command_id").primaryKey(),
  signal: text("signal").notNull(),
  issuedAtMinute: real("issued_at_minute").notNull(),
});

export type ActuatorCommandRow = typeof actuatorCommands.$inferSelect;

export const actuatorDriverComponents = sqliteTable("actuator_driver_component", {
  actuatorDriverId: text("actuator_driver_id").primaryKey(),
  actuatorSignal: text("actuator_signal").notNull(),
  lastTransitionMinute: real("last_transition_minute").notNull(),
  minCycleIntervalMinutes: real("min_cycle_interval_minutes").notNull(),
  alertActive: integer("alert_active", { mode: "boolean" }).notNull(),
});

export type ActuatorDriverComponentRow = typeof actuatorDriverComponents.$inferSelect;

export const compressorCycleRecords = sqliteTable("compressor_cycle_record", {
  cycleId: text("cycle_id").primaryKey(),
  lastTransitionMinute: real("last_transition_minute").notNull(),
  minimumIntervalMinutes: real("minimum_interval_minutes").notNull(),
});

export type CompressorCycleRecordRow = typeof compressorCycleRecords.$inferSelect;

export const displayComponents = sqliteTable("display_component", {
  displayComponentId: text("display_component_id").primaryKey(),
  displayCurrentTempF: real("display_current_temp_f").notNull(),
  displaySetpointF: real("display_setpoint_f").notNull(),
  displayActuatorSignal: text("display_actuator_signal").notNull(),
  displayAlertActive: integer("display_alert_active", { mode: "boolean" }).notNull(),
  displayRefreshSeconds: real("display_refresh_seconds").notNull(),
});

export type DisplayComponentRow = typeof displayComponents.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  code: text("code").notNull(),
  rationale: text("rationale").notNull(),
  sourceStage: text("source_stage").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const safeHaltEvents = sqliteTable("safe_halt_event", {
  haltId: text("halt_id").primaryKey(),
  triggeringReadingId: text("triggering_reading_id").notNull(),
  alertRaised: integer("alert_raised", { mode: "boolean" }).notNull(),
});

export type SafeHaltEventRow = typeof safeHaltEvents.$inferSelect;

export const sensorReadings = sqliteTable("sensor_reading", {
  readingId: text("reading_id").primaryKey(),
  valueFahrenheit: real("value_fahrenheit").notNull(),
  isPlausible: integer("is_plausible", { mode: "boolean" }).notNull(),
});

export type SensorReadingRow = typeof sensorReadings.$inferSelect;

export const setpoints = sqliteTable("setpoint", {
  setpointId: text("setpoint_id").primaryKey(),
  requestedTempF: real("requested_temp_f").notNull(),
  clampedTempF: real("clamped_temp_f").notNull(),
});

export type SetpointRow = typeof setpoints.$inferSelect;

export const setpointControllerComponents = sqliteTable("setpoint_controller_component", {
  setpointControllerId: text("setpoint_controller_id").primaryKey(),
  requestedSetpointF: real("requested_setpoint_f").notNull(),
  clampedSetpointF: real("clamped_setpoint_f").notNull(),
  safeMinTempF: real("safe_min_temp_f").notNull(),
  safeMaxTempF: real("safe_max_temp_f").notNull(),
});

export type SetpointControllerComponentRow = typeof setpointControllerComponents.$inferSelect;

export const smartThermostatSystems = sqliteTable("smart_thermostat_system", {
  systemId: text("system_id").primaryKey(),
  requestedSetpointF: real("requested_setpoint_f").notNull(),
  clampedSetpointF: real("clamped_setpoint_f").notNull(),
  safeMinTempF: real("safe_min_temp_f").notNull(),
  safeMaxTempF: real("safe_max_temp_f").notNull(),
  currentTempF: real("current_temp_f").notNull(),
  plausibleMinF: real("plausible_min_f").notNull(),
  plausibleMaxF: real("plausible_max_f").notNull(),
  sensorPlausible: integer("sensor_plausible", { mode: "boolean" }).notNull(),
  actuatorSignal: text("actuator_signal").notNull(),
  alertActive: integer("alert_active", { mode: "boolean" }).notNull(),
  lastTransitionMinute: real("last_transition_minute").notNull(),
  minCycleIntervalMinutes: real("min_cycle_interval_minutes").notNull(),
  displayCurrentTempF: real("display_current_temp_f").notNull(),
  displaySetpointF: real("display_setpoint_f").notNull(),
  displayActuatorSignal: text("display_actuator_signal").notNull(),
  displayRefreshSeconds: real("display_refresh_seconds").notNull(),
  currentMinute: real("current_minute").notNull(),
});

export type SmartThermostatSystemRow = typeof smartThermostatSystems.$inferSelect;

export const temperatureSensorComponents = sqliteTable("temperature_sensor_component", {
  sensorComponentId: text("sensor_component_id").primaryKey(),
  currentTempF: real("current_temp_f").notNull(),
  sensorPlausible: integer("sensor_plausible", { mode: "boolean" }).notNull(),
  plausibleMinF: real("plausible_min_f").notNull(),
  plausibleMaxF: real("plausible_max_f").notNull(),
  currentMinute: real("current_minute").notNull(),
  sensorAlertActive: integer("sensor_alert_active", { mode: "boolean" }).notNull(),
});

export type TemperatureSensorComponentRow = typeof temperatureSensorComponents.$inferSelect;
