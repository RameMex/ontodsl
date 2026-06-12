// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const estopButtons = sqliteTable("estop_button", {
  estopId: text("estop_id").primaryKey(),
  location: text("location").notNull(),
  isPressed: integer("is_pressed", { mode: "boolean" }).notNull(),
  isLatched: integer("is_latched", { mode: "boolean" }).notNull(),
});

export type EStopButtonRow = typeof estopButtons.$inferSelect;

export const estopInterruptHandlers = sqliteTable("estop_interrupt_handler", {
  handlerId: text("handler_id").primaryKey(),
  eStopSignalActive: integer("e_stop_signal_active", { mode: "boolean" }).notNull(),
  signalTimestampMs: real("signal_timestamp_ms").notNull(),
  responseLatencyUs: real("response_latency_us").notNull(),
  maxResponseLatencyUs: real("max_response_latency_us").notNull(),
  maxEStopLatencyMs: real("max_estop_latency_ms").notNull(),
  latchingEnforced: integer("latching_enforced", { mode: "boolean" }).notNull(),
});

export type EStopInterruptHandlerRow = typeof estopInterruptHandlers.$inferSelect;

export const failsafeModes = sqliteTable("failsafe_mode", {
  modeId: text("mode_id").primaryKey(),
  entryTime: real("entry_time").notNull(),
  isLatched: integer("is_latched", { mode: "boolean" }).notNull(),
});

export type FailsafeModeRow = typeof failsafeModes.$inferSelect;

export const failsafeStateManagers = sqliteTable("failsafe_state_manager", {
  managerId: text("manager_id").primaryKey(),
  isFailsafeActive: integer("is_failsafe_active", { mode: "boolean" }).notNull(),
  failSafeEntryTimeMs: real("fail_safe_entry_time_ms").notNull(),
  failSafeSource: text("fail_safe_source").notNull(),
  isLatched: integer("is_latched", { mode: "boolean" }).notNull(),
  latchingEnforced: integer("latching_enforced", { mode: "boolean" }).notNull(),
  rejectionActive: integer("rejection_active", { mode: "boolean" }).notNull(),
  maxEStopLatencyMs: real("max_estop_latency_ms").notNull(),
  maxSensorFaultResponseCycles: integer("max_sensor_fault_response_cycles").notNull(),
});

export type FailsafeStateManagerRow = typeof failsafeStateManagers.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  rationale: text("rationale").notNull(),
  status: text("status").notNull(),
  verificationMethod: text("verification_method").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const manualResetControllers = sqliteTable("manual_reset_controller", {
  resetControllerId: text("reset_controller_id").primaryKey(),
  manualResetInputActive: integer("manual_reset_input_active", { mode: "boolean" }).notNull(),
  resetRequestTimestampMs: real("reset_request_timestamp_ms").notNull(),
  resetValid: integer("reset_valid", { mode: "boolean" }).notNull(),
  latchingEnforced: integer("latching_enforced", { mode: "boolean" }).notNull(),
  maxEStopLatencyMs: real("max_estop_latency_ms").notNull(),
});

export type ManualResetControllerRow = typeof manualResetControllers.$inferSelect;

export const motionOutputs = sqliteTable("motion_output", {
  outputId: text("output_id").primaryKey(),
  actuatorType: text("actuator_type").notNull(),
  driveEnable: integer("drive_enable", { mode: "boolean" }).notNull(),
  powerState: integer("power_state", { mode: "boolean" }).notNull(),
});

export type MotionOutputRow = typeof motionOutputs.$inferSelect;

export const motionOutputControllers = sqliteTable("motion_output_controller", {
  outputControllerId: text("output_controller_id").primaryKey(),
  allOutputsDeEnergized: integer("all_outputs_de_energized", { mode: "boolean" }).notNull(),
  lastDeEnergizeTimestampMs: real("last_de_energize_timestamp_ms").notNull(),
  maxDeEnergizeLatencyMs: real("max_de_energize_latency_ms").notNull(),
  maxEStopLatencyMs: real("max_estop_latency_ms").notNull(),
  rejectionActive: integer("rejection_active", { mode: "boolean" }).notNull(),
  latchingEnforced: integer("latching_enforced", { mode: "boolean" }).notNull(),
});

export type MotionOutputControllerRow = typeof motionOutputControllers.$inferSelect;

export const plcsafetyControllers = sqliteTable("plcsafety_controller", {
  controllerId: text("controller_id").primaryKey(),
  maxEStopLatencyMs: real("max_estop_latency_ms").notNull(),
  latchingEnforced: integer("latching_enforced", { mode: "boolean" }).notNull(),
  maxSensorFaultResponseCycles: integer("max_sensor_fault_response_cycles").notNull(),
  rejectionActive: integer("rejection_active", { mode: "boolean" }).notNull(),
  isFailsafeActive: integer("is_failsafe_active", { mode: "boolean" }).notNull(),
  eStopResponseTimeMs: real("e_stop_response_time_ms").notNull(),
  currentScanCycleId: text("current_scan_cycle_id").notNull(),
});

export type PLCSafetyControllerRow = typeof plcsafetyControllers.$inferSelect;

export const safetyControllerSystems = sqliteTable("safety_controller_system", {
  controllerId: text("controller_id").primaryKey(),
  maxEStopLatencyMs: real("max_estop_latency_ms").notNull(),
  latchingEnforced: integer("latching_enforced", { mode: "boolean" }).notNull(),
  maxSensorFaultResponseCycles: integer("max_sensor_fault_response_cycles").notNull(),
  rejectionActive: integer("rejection_active", { mode: "boolean" }).notNull(),
  isFailsafeActive: integer("is_failsafe_active", { mode: "boolean" }).notNull(),
  eStopInputActive: integer("e_stop_input_active", { mode: "boolean" }).notNull(),
  manualResetInputActive: integer("manual_reset_input_active", { mode: "boolean" }).notNull(),
  sensorFaultDetected: integer("sensor_fault_detected", { mode: "boolean" }).notNull(),
  allMotionOutputsDeEnergized: integer("all_motion_outputs_de_energized", { mode: "boolean" }).notNull(),
  eStopResponseTimeMs: real("e_stop_response_time_ms").notNull(),
  currentScanCycleId: text("current_scan_cycle_id").notNull(),
  lastEStopTimestampMs: real("last_estop_timestamp_ms").notNull(),
  lastSensorFaultTimestampMs: real("last_sensor_fault_timestamp_ms").notNull(),
});

export type SafetyControllerSystemRow = typeof safetyControllerSystems.$inferSelect;

export const safetySensors = sqliteTable("safety_sensor", {
  sensorId: text("sensor_id").primaryKey(),
  sensingType: text("sensing_type").notNull(),
  calibratedRangeMin: real("calibrated_range_min").notNull(),
  calibratedRangeMax: real("calibrated_range_max").notNull(),
  currentReading: real("current_reading").notNull(),
  isFaulted: integer("is_faulted", { mode: "boolean" }).notNull(),
});

export type SafetySensorRow = typeof safetySensors.$inferSelect;

export const safetySensorManagers = sqliteTable("safety_sensor_manager", {
  sensorManagerId: text("sensor_manager_id").primaryKey(),
  sensorFaultDetected: integer("sensor_fault_detected", { mode: "boolean" }).notNull(),
  sensorFaultTimestampMs: real("sensor_fault_timestamp_ms").notNull(),
  faultRecoveryTimestampMs: real("fault_recovery_timestamp_ms").notNull(),
  maxSensorFaultResponseCycles: integer("max_sensor_fault_response_cycles").notNull(),
  rejectionActive: integer("rejection_active", { mode: "boolean" }).notNull(),
  latchingEnforced: integer("latching_enforced", { mode: "boolean" }).notNull(),
  maxEStopLatencyMs: real("max_estop_latency_ms").notNull(),
});

export type SafetySensorManagerRow = typeof safetySensorManagers.$inferSelect;

export const scanCycles = sqliteTable("scan_cycle", {
  cycleId: text("cycle_id").primaryKey(),
  cycleDurationMs: real("cycle_duration_ms").notNull(),
  cycleCount: integer("cycle_count").notNull(),
});

export type ScanCycleRow = typeof scanCycles.$inferSelect;

export const scanCycleSynchronizers = sqliteTable("scan_cycle_synchronizer", {
  synchId: text("synch_id").primaryKey(),
  currentCycleId: text("current_cycle_id").notNull(),
  cycleStartTimestampMs: real("cycle_start_timestamp_ms").notNull(),
  cycleDurationMs: real("cycle_duration_ms").notNull(),
  cycleCount: integer("cycle_count").notNull(),
  eStopResponseTimeMs: real("e_stop_response_time_ms").notNull(),
  faultWithinCurrentCycle: integer("fault_within_current_cycle", { mode: "boolean" }).notNull(),
  maxEStopLatencyMs: real("max_estop_latency_ms").notNull(),
  latchingEnforced: integer("latching_enforced", { mode: "boolean" }).notNull(),
  rejectionActive: integer("rejection_active", { mode: "boolean" }).notNull(),
  maxSensorFaultResponseCycles: integer("max_sensor_fault_response_cycles").notNull(),
});

export type ScanCycleSynchronizerRow = typeof scanCycleSynchronizers.$inferSelect;
