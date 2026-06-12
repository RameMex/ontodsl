// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const actuatorCommands = sqliteTable("actuator_command", {
  commandId: text("command_id").primaryKey(),
  commandState: text("command_state").notNull(),
  timestamp: real("timestamp").notNull(),
});

export type ActuatorCommandRow = typeof actuatorCommands.$inferSelect;

export const actuatorDrivers = sqliteTable("actuator_driver", {
  driverId: text("driver_id").primaryKey(),
  commandedState: text("commanded_state").notNull(),
  lastTransitionTimestamp: real("last_transition_timestamp").notNull(),
  minIntervalSecs: real("min_interval_secs").notNull(),
});

export type ActuatorDriverRow = typeof actuatorDrivers.$inferSelect;

export const displayManagers = sqliteTable("display_manager", {
  displayId: text("display_id").primaryKey(),
  displayedTemperature: real("displayed_temperature").notNull(),
  displayedSetpoint: real("displayed_setpoint").notNull(),
  displayedActuatorState: text("displayed_actuator_state").notNull(),
  displayError: text("display_error").notNull(),
  isErrorActive: integer("is_error_active", { mode: "boolean" }).notNull(),
});

export type DisplayManagerRow = typeof displayManagers.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  riskLevel: text("risk_level").notNull(),
  owner: text("owner").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const safeHaltEvents = sqliteTable("safe_halt_event", {
  haltEventId: text("halt_event_id").primaryKey(),
  reason: text("reason").notNull(),
  timestamp: real("timestamp").notNull(),
});

export type SafeHaltEventRow = typeof safeHaltEvents.$inferSelect;

export const safetyMonitors = sqliteTable("safety_monitor", {
  monitorId: text("monitor_id").primaryKey(),
  plausibilityMin: real("plausibility_min").notNull(),
  plausibilityMax: real("plausibility_max").notNull(),
  systemHalted: integer("system_halted", { mode: "boolean" }).notNull(),
  faultAlertRaised: integer("fault_alert_raised", { mode: "boolean" }).notNull(),
});

export type SafetyMonitorRow = typeof safetyMonitors.$inferSelect;

export const sensorReadings = sqliteTable("sensor_reading", {
  readingId: text("reading_id").primaryKey(),
  temperature: real("temperature").notNull(),
  timestamp: real("timestamp").notNull(),
});

export type SensorReadingRow = typeof sensorReadings.$inferSelect;

export const setpointControllers = sqliteTable("setpoint_controller", {
  controllerId: text("controller_id").primaryKey(),
  clampedSetpoint: real("clamped_setpoint").notNull(),
  safeMin: real("safe_min").notNull(),
  safeMax: real("safe_max").notNull(),
  currentTemperatureInput: real("current_temperature_input").notNull(),
  decisionCommand: text("decision_command").notNull(),
});

export type SetpointControllerRow = typeof setpointControllers.$inferSelect;

export const setpointRequests = sqliteTable("setpoint_request", {
  requestId: text("request_id").primaryKey(),
  requestedTemperature: real("requested_temperature").notNull(),
  timestamp: real("timestamp").notNull(),
});

export type SetpointRequestRow = typeof setpointRequests.$inferSelect;

export const temperatureSensors = sqliteTable("temperature_sensor", {
  sensorId: text("sensor_id").primaryKey(),
  lastReading: real("last_reading").notNull(),
  lastTimestamp: real("last_timestamp").notNull(),
  isOperational: integer("is_operational", { mode: "boolean" }).notNull(),
});

export type TemperatureSensorRow = typeof temperatureSensors.$inferSelect;

export const thermostatSystems = sqliteTable("thermostat_system", {
  systemId: text("system_id").primaryKey(),
  safeMinSetpoint: real("safe_min_setpoint").notNull(),
  safeMaxSetpoint: real("safe_max_setpoint").notNull(),
  sensorPlausibilityMin: real("sensor_plausibility_min").notNull(),
  sensorPlausibilityMax: real("sensor_plausibility_max").notNull(),
  faultAlertActive: integer("fault_alert_active", { mode: "boolean" }).notNull(),
  minCycleIntervalSecs: real("min_cycle_interval_secs").notNull(),
  currentTemperature: real("current_temperature").notNull(),
  currentSetpoint: real("current_setpoint").notNull(),
  currentActuatorCommand: text("current_actuator_command").notNull(),
  lastCommandTimestamp: real("last_command_timestamp").notNull(),
  halted: integer("halted", { mode: "boolean" }).notNull(),
});

export type ThermostatSystemRow = typeof thermostatSystems.$inferSelect;

export const thermostatSystemKinds = sqliteTable("thermostat_system_kind", {
  systemId: text("system_id").primaryKey(),
  safeMinSetpoint: real("safe_min_setpoint").notNull(),
  safeMaxSetpoint: real("safe_max_setpoint").notNull(),
  sensorPlausibilityMin: real("sensor_plausibility_min").notNull(),
  sensorPlausibilityMax: real("sensor_plausibility_max").notNull(),
  faultAlertActive: integer("fault_alert_active", { mode: "boolean" }).notNull(),
  minCycleIntervalSecs: real("min_cycle_interval_secs").notNull(),
  currentTemperature: real("current_temperature").notNull(),
  currentSetpoint: real("current_setpoint").notNull(),
  currentActuatorCommand: text("current_actuator_command").notNull(),
});

export type ThermostatSystemKindRow = typeof thermostatSystemKinds.$inferSelect;

export const userAlerts = sqliteTable("user_alert", {
  alertId: text("alert_id").primaryKey(),
  message: text("message").notNull(),
  timestamp: real("timestamp").notNull(),
});

export type UserAlertRow = typeof userAlerts.$inferSelect;
