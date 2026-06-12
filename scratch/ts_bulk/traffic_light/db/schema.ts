// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const approaches = sqliteTable("approach", {
  approachId: text("approach_id").primaryKey(),
  direction: text("direction").notNull(),
  signalState: text("signal_state").notNull(),
});

export type ApproachRow = typeof approaches.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  title: text("title").notNull(),
  rationale: text("rationale").notNull(),
  mitigationIfViolated: text("mitigation_if_violated").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const pedestrianControllers = sqliteTable("pedestrian_controller", {
  pedestrianControllerId: text("pedestrian_controller_id").primaryKey(),
  pedestrianRequestPending: integer("pedestrian_request_pending", { mode: "boolean" }).notNull(),
  pedestrianRequestApproach: text("pedestrian_request_approach").notNull(),
  pedestrianWalkActive: integer("pedestrian_walk_active", { mode: "boolean" }).notNull(),
});

export type PedestrianControllerRow = typeof pedestrianControllers.$inferSelect;

export const pedestrianRequests = sqliteTable("pedestrian_request", {
  requestId: text("request_id").primaryKey(),
  walkGranted: integer("walk_granted", { mode: "boolean" }).notNull(),
});

export type PedestrianRequestRow = typeof pedestrianRequests.$inferSelect;

export const phases = sqliteTable("phase", {
  phaseId: text("phase_id").primaryKey(),
  configuredDurationSeconds: real("configured_duration_seconds").notNull(),
});

export type PhaseRow = typeof phases.$inferSelect;

export const phaseSchedulers = sqliteTable("phase_scheduler", {
  schedulerId: text("scheduler_id").primaryKey(),
  currentPhaseId: text("current_phase_id").notNull(),
  activeGreenAxis: text("active_green_axis").notNull(),
  nsStateElapsedSeconds: real("ns_state_elapsed_seconds").notNull(),
  ewStateElapsedSeconds: real("ew_state_elapsed_seconds").notNull(),
  minimumYellowSeconds: real("minimum_yellow_seconds").notNull(),
  allRedDwellSeconds: real("all_red_dwell_seconds").notNull(),
  schedulerState: text("scheduler_state").notNull(),
});

export type PhaseSchedulerRow = typeof phaseSchedulers.$inferSelect;

export const preemptionControllers = sqliteTable("preemption_controller", {
  preemptionControllerId: text("preemption_controller_id").primaryKey(),
  preemptionActive: integer("preemption_active", { mode: "boolean" }).notNull(),
  allRedCommandedAt: real("all_red_commanded_at").notNull(),
  maxPreemptionResponseSeconds: real("max_preemption_response_seconds").notNull(),
});

export type PreemptionControllerRow = typeof preemptionControllers.$inferSelect;

export const preemptionEvents = sqliteTable("preemption_event", {
  preemptionId: text("preemption_id").primaryKey(),
  sensorActivatedAt: real("sensor_activated_at").notNull(),
  allRedCommandedAt: real("all_red_commanded_at").notNull(),
  responseTimeSeconds: real("response_time_seconds").notNull(),
});

export type PreemptionEventRow = typeof preemptionEvents.$inferSelect;

export const signalHeadControllers = sqliteTable("signal_head_controller", {
  signalHeadId: text("signal_head_id").primaryKey(),
  nsSignalState: text("ns_signal_state").notNull(),
  ewSignalState: text("ew_signal_state").notNull(),
});

export type SignalHeadControllerRow = typeof signalHeadControllers.$inferSelect;

export const trafficLightControllerSystems = sqliteTable("traffic_light_controller_system", {
  controllerId: text("controller_id").primaryKey(),
  minimumYellowSeconds: real("minimum_yellow_seconds").notNull(),
  maxPreemptionResponseSeconds: real("max_preemption_response_seconds").notNull(),
  currentPhaseId: text("current_phase_id").notNull(),
  nsSignalState: text("ns_signal_state").notNull(),
  ewSignalState: text("ew_signal_state").notNull(),
  nsStateElapsedSeconds: real("ns_state_elapsed_seconds").notNull(),
  ewStateElapsedSeconds: real("ew_state_elapsed_seconds").notNull(),
  preemptionActive: integer("preemption_active", { mode: "boolean" }).notNull(),
  allRedCommandedAt: real("all_red_commanded_at").notNull(),
  pedestrianRequestPending: integer("pedestrian_request_pending", { mode: "boolean" }).notNull(),
  pedestrianRequestApproach: text("pedestrian_request_approach").notNull(),
  pedestrianWalkActive: integer("pedestrian_walk_active", { mode: "boolean" }).notNull(),
});

export type TrafficLightControllerSystemRow = typeof trafficLightControllerSystems.$inferSelect;

export const yellowIntervals = sqliteTable("yellow_interval", {
  intervalId: text("interval_id").primaryKey(),
  durationSeconds: real("duration_seconds").notNull(),
});

export type YellowIntervalRow = typeof yellowIntervals.$inferSelect;
