// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const approaches = sqliteTable("approach", {
  approachId: text("approach_id").primaryKey(),
  direction: text("direction").notNull(),
});

export type ApproachRow = typeof approaches.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionCode: text("assumption_code").notNull(),
  description: text("description").notNull(),
  rationales: text("rationales").notNull(),
  owner: text("owner").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const pedestrianModules = sqliteTable("pedestrian_module", {
  moduleId: text("module_id").primaryKey(),
  pedestrianRequested: integer("pedestrian_requested", { mode: "boolean" }).notNull(),
  pedestrianRequestPending: integer("pedestrian_request_pending", { mode: "boolean" }).notNull(),
  walkSignalActive: integer("walk_signal_active", { mode: "boolean" }).notNull(),
});

export type PedestrianModuleRow = typeof pedestrianModules.$inferSelect;

export const phases = sqliteTable("phase", {
  phaseId: text("phase_id").primaryKey(),
  name: text("name").notNull(),
});

export type PhaseRow = typeof phases.$inferSelect;

export const phaseManagers = sqliteTable("phase_manager", {
  managerId: text("manager_id").primaryKey(),
  isOperating: integer("is_operating", { mode: "boolean" }).notNull(),
  allRedDwellActive: integer("all_red_dwell_active", { mode: "boolean" }).notNull(),
});

export type PhaseManagerRow = typeof phaseManagers.$inferSelect;

export const preemptions = sqliteTable("preemption", {
  preemptionId: text("preemption_id").primaryKey(),
  maxResponseTimeSeconds: real("max_response_time_seconds").notNull(),
});

export type PreemptionRow = typeof preemptions.$inferSelect;

export const safetyMonitors = sqliteTable("safety_monitor", {
  monitorId: text("monitor_id").primaryKey(),
  preemptionActive: integer("preemption_active", { mode: "boolean" }).notNull(),
  allRedActive: integer("all_red_active", { mode: "boolean" }).notNull(),
  preemptionTimerElapsed: real("preemption_timer_elapsed").notNull(),
  preemptionResponseTimeSeconds: real("preemption_response_time_seconds").notNull(),
});

export type SafetyMonitorRow = typeof safetyMonitors.$inferSelect;

export const timerServices = sqliteTable("timer_service", {
  timerId: text("timer_id").primaryKey(),
  yellowTimerElapsed: real("yellow_timer_elapsed").notNull(),
  elapsedTime: real("elapsed_time").notNull(),
  yellowIntervalSeconds: real("yellow_interval_seconds").notNull(),
});

export type TimerServiceRow = typeof timerServices.$inferSelect;

export const trafficLightSystems = sqliteTable("traffic_light_system", {
  systemId: text("system_id").primaryKey(),
  yellowIntervalSeconds: real("yellow_interval_seconds").notNull(),
  preemptionResponseTimeSeconds: real("preemption_response_time_seconds").notNull(),
  pedestrianRequestPending: integer("pedestrian_request_pending", { mode: "boolean" }).notNull(),
  walkSignalActive: integer("walk_signal_active", { mode: "boolean" }).notNull(),
  isOperating: integer("is_operating", { mode: "boolean" }).notNull(),
  preemptionActive: integer("preemption_active", { mode: "boolean" }).notNull(),
  pedestrianRequested: integer("pedestrian_requested", { mode: "boolean" }).notNull(),
  allRedActive: integer("all_red_active", { mode: "boolean" }).notNull(),
  yellowTimerElapsed: real("yellow_timer_elapsed").notNull(),
  preemptionTimerElapsed: real("preemption_timer_elapsed").notNull(),
});

export type TrafficLightSystemRow = typeof trafficLightSystems.$inferSelect;

export const yellowIntervals = sqliteTable("yellow_interval", {
  intervalId: text("interval_id").primaryKey(),
  minimumDurationSeconds: real("minimum_duration_seconds").notNull(),
});

export type YellowIntervalRow = typeof yellowIntervals.$inferSelect;
