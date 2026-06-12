// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const batteryManagers = sqliteTable("battery_manager", {
  batteryId: text("battery_id").primaryKey(),
  soc: real("soc").notNull(),
  reserve: real("reserve").notNull(),
  socBelowThreshold: integer("soc_below_threshold", { mode: "boolean" }).notNull(),
  safeReserveRatio: real("safe_reserve_ratio").notNull(),
  rthBatteryThreshold: real("rth_battery_threshold").notNull(),
});

export type BatteryManagerRow = typeof batteryManagers.$inferSelect;

export const batterySoCs = sqliteTable("battery_so_c", {
  socId: text("soc_id").primaryKey(),
  value: real("value").notNull(),
});

export type BatterySoCRow = typeof batterySoCs.$inferSelect;

export const droneMissionControllers = sqliteTable("drone_mission_controller", {
  systemId: text("system_id").primaryKey(),
  soc: real("soc").notNull(),
  reserve: real("reserve").notNull(),
  geofenceAuthorized: integer("geofence_authorized", { mode: "boolean" }).notNull(),
  isFlying: integer("is_flying", { mode: "boolean" }).notNull(),
  rthInitiated: integer("rth_initiated", { mode: "boolean" }).notNull(),
  geofenceViolationDetected: integer("geofence_violation_detected", { mode: "boolean" }).notNull(),
  socBelowThreshold: integer("soc_below_threshold", { mode: "boolean" }).notNull(),
  safeReserveRatio: real("safe_reserve_ratio").notNull(),
  geofenceMaxResponseSec: real("geofence_max_response_sec").notNull(),
  rthBatteryThreshold: real("rth_battery_threshold").notNull(),
  rthIsCancellable: integer("rth_is_cancellable", { mode: "boolean" }).notNull(),
});

export type DroneMissionControllerRow = typeof droneMissionControllers.$inferSelect;

export const flightControllers = sqliteTable("flight_controller", {
  flightId: text("flight_id").primaryKey(),
  isFlying: integer("is_flying", { mode: "boolean" }).notNull(),
  rthInitiated: integer("rth_initiated", { mode: "boolean" }).notNull(),
  rthIsCancellable: integer("rth_is_cancellable", { mode: "boolean" }).notNull(),
});

export type FlightControllerRow = typeof flightControllers.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  assumptionText: text("assumption_text").notNull(),
  rational: text("rational").notNull(),
  source: text("source").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const geofences = sqliteTable("geofence", {
  geofenceId: text("geofence_id").primaryKey(),
  polygonWkt: text("polygon_wkt").notNull(),
  maxLatitude: real("max_latitude").notNull(),
  minLatitude: real("min_latitude").notNull(),
  maxLongitude: real("max_longitude").notNull(),
  minLongitude: real("min_longitude").notNull(),
});

export type GeofenceRow = typeof geofences.$inferSelect;

export const geofenceMonitors = sqliteTable("geofence_monitor", {
  monitorId: text("monitor_id").primaryKey(),
  geofenceAuthorized: integer("geofence_authorized", { mode: "boolean" }).notNull(),
  geofenceViolationDetected: integer("geofence_violation_detected", { mode: "boolean" }).notNull(),
  currentLatitude: real("current_latitude").notNull(),
  currentLongitude: real("current_longitude").notNull(),
  geofenceMaxResponseSec: real("geofence_max_response_sec").notNull(),
});

export type GeofenceMonitorRow = typeof geofenceMonitors.$inferSelect;

export const missionPlannerInterfaces = sqliteTable("mission_planner_interface", {
  plannerId: text("planner_id").primaryKey(),
  missionId: text("mission_id").notNull(),
  destinationLatitude: real("destination_latitude").notNull(),
  destinationLongitude: real("destination_longitude").notNull(),
  computedRoundTripReserve: real("computed_round_trip_reserve").notNull(),
});

export type MissionPlannerInterfaceRow = typeof missionPlannerInterfaces.$inferSelect;

export const predicateHosts = sqliteTable("predicate_host", {
  hostId: text("host_id").primaryKey(),
  safeReserveRatio: real("safe_reserve_ratio").notNull(),
  geofenceMaxResponseSec: real("geofence_max_response_sec").notNull(),
  rthBatteryThreshold: real("rth_battery_threshold").notNull(),
  rthIsCancellable: integer("rth_is_cancellable", { mode: "boolean" }).notNull(),
});

export type PredicateHostRow = typeof predicateHosts.$inferSelect;

export const roundTripReserves = sqliteTable("round_trip_reserve", {
  reserveId: text("reserve_id").primaryKey(),
  minSoC: real("min_so_c").notNull(),
});

export type RoundTripReserveRow = typeof roundTripReserves.$inferSelect;
