// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const alarmConditions = sqliteTable("alarm_condition", {
  alarmId: text("alarm_id").primaryKey(),
  alarmType: text("alarm_type").notNull(),
  isActive: integer("is_active", { mode: "boolean" }).notNull(),
});

export type AlarmConditionRow = typeof alarmConditions.$inferSelect;

export const alarmManagers = sqliteTable("alarm_manager", {
  alarmManagerId: text("alarm_manager_id").primaryKey(),
  alarmActive: integer("alarm_active", { mode: "boolean" }).notNull(),
  lowReservoirAlarmActive: integer("low_reservoir_alarm_active", { mode: "boolean" }).notNull(),
  malfunctionAlarmActive: integer("malfunction_alarm_active", { mode: "boolean" }).notNull(),
  alarmSoundOn: integer("alarm_sound_on", { mode: "boolean" }).notNull(),
});

export type AlarmManagerRow = typeof alarmManagers.$inferSelect;

export const bloodSugarReadings = sqliteTable("blood_sugar_reading", {
  readingId: text("reading_id").primaryKey(),
  valueMgDl: real("value_mg_dl").notNull(),
  timestamp: real("timestamp").notNull(),
});

export type BloodSugarReadingRow = typeof bloodSugarReadings.$inferSelect;

export const bloodSugarSensors = sqliteTable("blood_sugar_sensor", {
  sensorId: text("sensor_id").primaryKey(),
  lastReadingMgDl: real("last_reading_mg_dl").notNull(),
  lastRateMgDlPerMin: real("last_rate_mg_dl_per_min").notNull(),
  sensorFaulty: integer("sensor_faulty", { mode: "boolean" }).notNull(),
  readingTimestamp: real("reading_timestamp").notNull(),
});

export type BloodSugarSensorRow = typeof bloodSugarSensors.$inferSelect;

export const doseCalculators = sqliteTable("dose_calculator", {
  calculatorId: text("calculator_id").primaryKey(),
  safeMaxDoseUnits: real("safe_max_dose_units").notNull(),
  safeZoneUpperBound: real("safe_zone_upper_bound").notNull(),
  lastComputedDose: real("last_computed_dose").notNull(),
  lastCalculationTime: real("last_calculation_time").notNull(),
  dosingCheckIntervalSeconds: real("dosing_check_interval_seconds").notNull(),
});

export type DoseCalculatorRow = typeof doseCalculators.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  domainSource: text("domain_source").notNull(),
  status: text("status").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const hardwareFaultDetectors = sqliteTable("hardware_fault_detector", {
  detectorId: text("detector_id").primaryKey(),
  sensorOk: integer("sensor_ok", { mode: "boolean" }).notNull(),
  pumpOk: integer("pump_ok", { mode: "boolean" }).notNull(),
  needleOk: integer("needle_ok", { mode: "boolean" }).notNull(),
  allOk: integer("all_ok", { mode: "boolean" }).notNull(),
  faultDetected: integer("fault_detected", { mode: "boolean" }).notNull(),
  faultReason: text("fault_reason").notNull(),
  lastTestTime: real("last_test_time").notNull(),
  selfTestIntervalSeconds: real("self_test_interval_seconds").notNull(),
});

export type HardwareFaultDetectorRow = typeof hardwareFaultDetectors.$inferSelect;

export const insulinPumpControlSystems = sqliteTable("insulin_pump_control_system", {
  systemId: text("system_id").primaryKey(),
  safeMaxDoseUnits: real("safe_max_dose_units").notNull(),
  alarmActive: integer("alarm_active", { mode: "boolean" }).notNull(),
  deliveryStopped: integer("delivery_stopped", { mode: "boolean" }).notNull(),
  lowReservoirAlarmActive: integer("low_reservoir_alarm_active", { mode: "boolean" }).notNull(),
  malfunctionAlarmActive: integer("malfunction_alarm_active", { mode: "boolean" }).notNull(),
  reservoirUnits: real("reservoir_units").notNull(),
  currentBloodSugar: real("current_blood_sugar").notNull(),
  bloodSugarRate: real("blood_sugar_rate").notNull(),
  isOperating: integer("is_operating", { mode: "boolean" }).notNull(),
  faultDetected: integer("fault_detected", { mode: "boolean" }).notNull(),
  sensorOk: integer("sensor_ok", { mode: "boolean" }).notNull(),
  pumpOk: integer("pump_ok", { mode: "boolean" }).notNull(),
  needleOk: integer("needle_ok", { mode: "boolean" }).notNull(),
  safeZoneUpperBound: real("safe_zone_upper_bound").notNull(),
  dosingCheckIntervalSeconds: real("dosing_check_interval_seconds").notNull(),
  selfTestIntervalSeconds: real("self_test_interval_seconds").notNull(),
});

export type InsulinPumpControlSystemRow = typeof insulinPumpControlSystems.$inferSelect;

export const insulinPumpSystems = sqliteTable("insulin_pump_system", {
  systemId: text("system_id").primaryKey(),
  safeMaxDoseUnits: real("safe_max_dose_units").notNull(),
  alarmActive: integer("alarm_active", { mode: "boolean" }).notNull(),
  deliveryStopped: integer("delivery_stopped", { mode: "boolean" }).notNull(),
  lowReservoirAlarmActive: integer("low_reservoir_alarm_active", { mode: "boolean" }).notNull(),
  malfunctionAlarmActive: integer("malfunction_alarm_active", { mode: "boolean" }).notNull(),
});

export type InsulinPumpSystemRow = typeof insulinPumpSystems.$inferSelect;

export const insulinReservoirs = sqliteTable("insulin_reservoir", {
  reservoirId: text("reservoir_id").primaryKey(),
  capacityUnits: real("capacity_units").notNull(),
  currentLevelUnits: real("current_level_units").notNull(),
  isLow: integer("is_low", { mode: "boolean" }).notNull(),
});

export type InsulinReservoirRow = typeof insulinReservoirs.$inferSelect;

export const pumpActuators = sqliteTable("pump_actuator", {
  actuatorId: text("actuator_id").primaryKey(),
  reservoirUnits: real("reservoir_units").notNull(),
  reservoirCapacityUnits: real("reservoir_capacity_units").notNull(),
  isLowReservoir: integer("is_low_reservoir", { mode: "boolean" }).notNull(),
  delivering: integer("delivering", { mode: "boolean" }).notNull(),
  lastDeliveredDose: real("last_delivered_dose").notNull(),
  lastDoseTime: real("last_dose_time").notNull(),
  actuatorFaulty: integer("actuator_faulty", { mode: "boolean" }).notNull(),
});

export type PumpActuatorRow = typeof pumpActuators.$inferSelect;

export const selfTestResults = sqliteTable("self_test_result", {
  resultId: text("result_id").primaryKey(),
  sensorOk: integer("sensor_ok", { mode: "boolean" }).notNull(),
  pumpOk: integer("pump_ok", { mode: "boolean" }).notNull(),
  needleOk: integer("needle_ok", { mode: "boolean" }).notNull(),
  allOk: integer("all_ok", { mode: "boolean" }).notNull(),
});

export type SelfTestResultRow = typeof selfTestResults.$inferSelect;
