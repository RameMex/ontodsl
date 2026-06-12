// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const engines = sqliteTable("engine", {
  engineId: text("engine_id").primaryKey(),
  rotationalSpeed: real("rotational_speed").notNull(),
  maxSafeSpeed: real("max_safe_speed").notNull(),
  fuelFlow: real("fuel_flow").notNull(),
  variant: text("variant").notNull(),
});

export type EngineRow = typeof engines.$inferSelect;

export const engineControlSystems = sqliteTable("engine_control_system", {
  systemId: text("system_id").primaryKey(),
  variant: text("variant").notNull(),
  overspeedProtectionFitted: integer("overspeed_protection_fitted", { mode: "boolean" }).notNull(),
  engineSpeed: real("engine_speed").notNull(),
  maxSafeSpeed: real("max_safe_speed").notNull(),
  fuelFlow: real("fuel_flow").notNull(),
  continuousIgnitionActive: integer("continuous_ignition_active", { mode: "boolean" }).notNull(),
  commandedThrust: real("commanded_thrust").notNull(),
  aircraftInFlight: integer("aircraft_in_flight", { mode: "boolean" }).notNull(),
  reverserDeploymentEnabled: integer("reverser_deployment_enabled", { mode: "boolean" }).notNull(),
  sensorFaultDetected: integer("sensor_fault_detected", { mode: "boolean" }).notNull(),
  usingModelledValue: integer("using_modelled_value", { mode: "boolean" }).notNull(),
  modelledSpeedValue: real("modelled_speed_value").notNull(),
  maxIgnitionLatencyMs: real("max_ignition_latency_ms").notNull(),
  thrustDeviationTolerancePct: real("thrust_deviation_tolerance_pct").notNull(),
});

export type EngineControlSystemRow = typeof engineControlSystems.$inferSelect;

export const engineControlSystemFormalizeds = sqliteTable("engine_control_system_formalized", {
  id: text("id").primaryKey(),
  reverserInFlightAttemptRejected: integer("reverser_in_flight_attempt_rejected", { mode: "boolean" }).notNull(),
  unprotectedOverspeedAlertIssued: integer("unprotected_overspeed_alert_issued", { mode: "boolean" }).notNull(),
});

export type EngineControlSystemFormalizedRow = typeof engineControlSystemFormalizeds.$inferSelect;

export const flightPhaseMonitors = sqliteTable("flight_phase_monitor", {
  unitId: text("unit_id").primaryKey(),
  aircraftInFlight: integer("aircraft_in_flight", { mode: "boolean" }).notNull(),
  weightOnWheelsDiscrete: integer("weight_on_wheels_discrete", { mode: "boolean" }).notNull(),
});

export type FlightPhaseMonitorRow = typeof flightPhaseMonitors.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionTag: text("assumption_tag").notNull(),
  statement: text("statement").notNull(),
  rationale: text("rationale").notNull(),
  derivedFrom: text("derived_from").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const ignitionModes = sqliteTable("ignition_mode", {
  ignitionModeId: text("ignition_mode_id").primaryKey(),
  ignitionModeName: text("ignition_mode_name").notNull(),
  active: integer("active", { mode: "boolean" }).notNull(),
});

export type IgnitionModeRow = typeof ignitionModes.$inferSelect;

export const ignitionThrustControllers = sqliteTable("ignition_thrust_controller", {
  unitId: text("unit_id").primaryKey(),
  continuousIgnitionActive: integer("continuous_ignition_active", { mode: "boolean" }).notNull(),
  commandedThrust: real("commanded_thrust").notNull(),
  reverserDeploymentEnabled: integer("reverser_deployment_enabled", { mode: "boolean" }).notNull(),
  reverserInFlightAttemptRejected: integer("reverser_in_flight_attempt_rejected", { mode: "boolean" }).notNull(),
  aircraftInFlight: integer("aircraft_in_flight", { mode: "boolean" }).notNull(),
  sensorFaultActive: integer("sensor_fault_active", { mode: "boolean" }).notNull(),
  modelledValueSubstituted: integer("modelled_value_substituted", { mode: "boolean" }).notNull(),
});

export type IgnitionThrustControllerRow = typeof ignitionThrustControllers.$inferSelect;

export const modelledValues = sqliteTable("modelled_value", {
  modelledValueId: text("modelled_value_id").primaryKey(),
  associatedSensorType: text("associated_sensor_type").notNull(),
  estimatedValue: real("estimated_value").notNull(),
});

export type ModelledValueRow = typeof modelledValues.$inferSelect;

export const overspeedEvents = sqliteTable("overspeed_event", {
  overspeedEventId: text("overspeed_event_id").primaryKey(),
  detectedSpeed: real("detected_speed").notNull(),
});

export type OverspeedEventRow = typeof overspeedEvents.$inferSelect;

export const overspeedProtectionUnits = sqliteTable("overspeed_protection_unit", {
  unitId: text("unit_id").primaryKey(),
  engineSpeed: real("engine_speed").notNull(),
  maxSafeSpeed: real("max_safe_speed").notNull(),
  fuelFlow: real("fuel_flow").notNull(),
  overspeedProtectionFitted: integer("overspeed_protection_fitted", { mode: "boolean" }).notNull(),
  unprotectedOverspeedAlertIssued: integer("unprotected_overspeed_alert_issued", { mode: "boolean" }).notNull(),
});

export type OverspeedProtectionUnitRow = typeof overspeedProtectionUnits.$inferSelect;

export const sensors = sqliteTable("sensor", {
  sensorId: text("sensor_id").primaryKey(),
  sensorType: text("sensor_type").notNull(),
  isFaulty: integer("is_faulty", { mode: "boolean" }).notNull(),
  lastReading: real("last_reading").notNull(),
});

export type SensorRow = typeof sensors.$inferSelect;

export const sensorFaultManagers = sqliteTable("sensor_fault_manager", {
  unitId: text("unit_id").primaryKey(),
  sensorFaultDetected: integer("sensor_fault_detected", { mode: "boolean" }).notNull(),
  usingModelledValue: integer("using_modelled_value", { mode: "boolean" }).notNull(),
  modelledSpeedValue: real("modelled_speed_value").notNull(),
});

export type SensorFaultManagerRow = typeof sensorFaultManagers.$inferSelect;

export const thrustReversers = sqliteTable("thrust_reverser", {
  reverserId: text("reverser_id").primaryKey(),
  deploymentEnabled: integer("deployment_enabled", { mode: "boolean" }).notNull(),
  aircraftOnGround: integer("aircraft_on_ground", { mode: "boolean" }).notNull(),
});

export type ThrustReverserRow = typeof thrustReversers.$inferSelect;
