// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const continuousIgnitions = sqliteTable("continuous_ignition", {
  ignitionId: text("ignition_id").primaryKey(),
  modeName: text("mode_name").notNull(),
  enabled: integer("enabled", { mode: "boolean" }).notNull(),
});

export type ContinuousIgnitionRow = typeof continuousIgnitions.$inferSelect;

export const digitalTwinEstimators = sqliteTable("digital_twin_estimator", {
  id: text("id").primaryKey(),
  estimatorType: text("estimator_type").notNull(),
  updateRateHz: integer("update_rate_hz").notNull(),
});

export type DigitalTwinEstimatorRow = typeof digitalTwinEstimators.$inferSelect;

export const engineControlSystems = sqliteTable("engine_control_system", {
  systemId: text("system_id").primaryKey(),
  maxSafeSpeed: real("max_safe_speed").notNull(),
  onGround: integer("on_ground", { mode: "boolean" }).notNull(),
  reverserCommanded: integer("reverser_commanded", { mode: "boolean" }).notNull(),
  reverserEnabled: integer("reverser_enabled", { mode: "boolean" }).notNull(),
  faultDetected: integer("fault_detected", { mode: "boolean" }).notNull(),
  modelledValueAvailable: integer("modelled_value_available", { mode: "boolean" }).notNull(),
  currentSpeed: real("current_speed").notNull(),
  fuelFlow: real("fuel_flow").notNull(),
  overspeedProtectionFitted: integer("overspeed_protection_fitted", { mode: "boolean" }).notNull(),
  overspeedDetected: integer("overspeed_detected", { mode: "boolean" }).notNull(),
  continuousIgnitionCommanded: integer("continuous_ignition_commanded", { mode: "boolean" }).notNull(),
  continuousIgnitionEnabled: integer("continuous_ignition_enabled", { mode: "boolean" }).notNull(),
  thrustCommanded: real("thrust_commanded").notNull(),
  thrustHeld: real("thrust_held").notNull(),
  inFlight: integer("in_flight", { mode: "boolean" }).notNull(),
  sensorFaultActive: integer("sensor_fault_active", { mode: "boolean" }).notNull(),
  modelledValueInUse: integer("modelled_value_in_use", { mode: "boolean" }).notNull(),
});

export type EngineControlSystemRow = typeof engineControlSystems.$inferSelect;

export const engineControlSystemFormalizeds = sqliteTable("engine_control_system_formalized", {
  id: text("id").primaryKey(),
  regulatoryDalLevel: text("regulatory_dal_level").notNull(),
  regulatoryObjectivesMet: integer("regulatory_objectives_met", { mode: "boolean" }).notNull(),
  regulatoryCSEChapter5Ref: text("regulatory_csechapter5_ref").notNull(),
  regulatoryOverspeedMethod: text("regulatory_overspeed_method").notNull(),
  regulatoryOverspeedTestDone: integer("regulatory_overspeed_test_done", { mode: "boolean" }).notNull(),
  regulatoryReverserVerified: integer("regulatory_reverser_verified", { mode: "boolean" }).notNull(),
  regulatoryAsilLevel: text("regulatory_asil_level").notNull(),
  regulatoryFaultToleranceMs: integer("regulatory_fault_tolerance_ms").notNull(),
  regulatoryMinSpeed: real("regulatory_min_speed").notNull(),
  regulatoryMaxSpeed: real("regulatory_max_speed").notNull(),
  regulatoryCertifiedMaxSafeSpeed: real("regulatory_certified_max_safe_speed").notNull(),
});

export type EngineControlSystemFormalizedRow = typeof engineControlSystemFormalizeds.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  owner: text("owner").notNull(),
  validated: integer("validated", { mode: "boolean" }).notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const modelledValues = sqliteTable("modelled_value", {
  modelledValueId: text("modelled_value_id").primaryKey(),
  sensorName: text("sensor_name").notNull(),
  estimatedValue: real("estimated_value").notNull(),
});

export type ModelledValueRow = typeof modelledValues.$inferSelect;

export const overspeeds = sqliteTable("overspeed", {
  overspeedId: text("overspeed_id").primaryKey(),
  description: text("description").notNull(),
  certifiedMaxSpeedReached: integer("certified_max_speed_reached", { mode: "boolean" }).notNull(),
});

export type OverspeedRow = typeof overspeeds.$inferSelect;

export const overspeedProtectionUnits = sqliteTable("overspeed_protection_unit", {
  protectionId: text("protection_id").primaryKey(),
  isArmed: integer("is_armed", { mode: "boolean" }).notNull(),
  fuelShutoffValve: integer("fuel_shutoff_valve", { mode: "boolean" }).notNull(),
  overspeedDetected: integer("overspeed_detected", { mode: "boolean" }).notNull(),
});

export type OverspeedProtectionUnitRow = typeof overspeedProtectionUnits.$inferSelect;

export const physicsSimulatedValues = sqliteTable("physics_simulated_value", {
  id: text("id").primaryKey(),
  simulationLagMs: integer("simulation_lag_ms").notNull(),
  physicsModelVersion: text("physics_model_version").notNull(),
});

export type PhysicsSimulatedValueRow = typeof physicsSimulatedValues.$inferSelect;

export const sensorFaultHandlers = sqliteTable("sensor_fault_handler", {
  handlerId: text("handler_id").primaryKey(),
  faultDetected: integer("fault_detected", { mode: "boolean" }).notNull(),
  sensorFaultActive: integer("sensor_fault_active", { mode: "boolean" }).notNull(),
  modelledValueAvailable: integer("modelled_value_available", { mode: "boolean" }).notNull(),
  modelledValueInUse: integer("modelled_value_in_use", { mode: "boolean" }).notNull(),
});

export type SensorFaultHandlerRow = typeof sensorFaultHandlers.$inferSelect;

export const sensorKindOrSimilars = sqliteTable("sensor_kind_or_similar", {
  sensorKindId: text("sensor_kind_id").primaryKey(),
  minSpeed: real("min_speed").notNull(),
  maxSpeed: real("max_speed").notNull(),
  certifiedMaxSafeSpeed: real("certified_max_safe_speed").notNull(),
});

export type SensorKindOrSimilarRow = typeof sensorKindOrSimilars.$inferSelect;

export const speedMonitors = sqliteTable("speed_monitor", {
  monitorId: text("monitor_id").primaryKey(),
  maxSafeSpeed: real("max_safe_speed").notNull(),
  currentSpeed: real("current_speed").notNull(),
  overspeedDetected: integer("overspeed_detected", { mode: "boolean" }).notNull(),
  overspeedProtectionFitted: integer("overspeed_protection_fitted", { mode: "boolean" }).notNull(),
  fuelFlow: real("fuel_flow").notNull(),
});

export type SpeedMonitorRow = typeof speedMonitors.$inferSelect;

export const thrustManagers = sqliteTable("thrust_manager", {
  managerId: text("manager_id").primaryKey(),
  onGround: integer("on_ground", { mode: "boolean" }).notNull(),
  inFlight: integer("in_flight", { mode: "boolean" }).notNull(),
  thrustCommanded: real("thrust_commanded").notNull(),
  thrustHeld: real("thrust_held").notNull(),
  reverserCommanded: integer("reverser_commanded", { mode: "boolean" }).notNull(),
  reverserEnabled: integer("reverser_enabled", { mode: "boolean" }).notNull(),
  continuousIgnitionCommanded: integer("continuous_ignition_commanded", { mode: "boolean" }).notNull(),
  continuousIgnitionEnabled: integer("continuous_ignition_enabled", { mode: "boolean" }).notNull(),
});

export type ThrustManagerRow = typeof thrustManagers.$inferSelect;

export const thrustReversers = sqliteTable("thrust_reverser", {
  reverserId: text("reverser_id").primaryKey(),
  isDeployed: integer("is_deployed", { mode: "boolean" }).notNull(),
});

export type ThrustReverserRow = typeof thrustReversers.$inferSelect;
