// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL (codegen-tanstack).
// Subject: Drizzle schema — one table per data-kind.
// Regenerate via `gen --target tanstack`. Do not edit by hand.
// ═══════════════════════════════════════════════════════════════════

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const assignments = sqliteTable("assignment", {
  assignmentId: text("assignment_id").primaryKey(),
  driverId: text("driver_id").notNull(),
  requestId: text("request_id").notNull(),
  timestamp: integer("timestamp").notNull(),
});

export type AssignmentRow = typeof assignments.$inferSelect;

export const dispatchEngines = sqliteTable("dispatch_engine", {
  engineId: text("engine_id").primaryKey(),
  requestId: text("request_id").notNull(),
  currentSearchRadiusKm: real("current_search_radius_km").notNull(),
  offerAttempts: integer("offer_attempts").notNull(),
  isProcessing: integer("is_processing", { mode: "boolean" }).notNull(),
  timeSinceRequestMs: integer("time_since_request_ms").notNull(),
});

export type DispatchEngineRow = typeof dispatchEngines.$inferSelect;

export const driverApps = sqliteTable("driver_app", {
  driverAppId: text("driver_app_id").primaryKey(),
  driverId: text("driver_id").notNull(),
  currentLatitude: real("current_latitude").notNull(),
  currentLongitude: real("current_longitude").notNull(),
  state: text("state").notNull(),
  pendingOfferId: text("pending_offer_id").notNull(),
  pendingOfferRideId: text("pending_offer_ride_id").notNull(),
});

export type DriverAppRow = typeof driverApps.$inferSelect;

export const driverStateManagers = sqliteTable("driver_state_manager", {
  driverStateId: text("driver_state_id").primaryKey(),
  totalDrivers: integer("total_drivers").notNull(),
  idleDriverCount: integer("idle_driver_count").notNull(),
  assignedDriverCount: integer("assigned_driver_count").notNull(),
  enRouteDriverCount: integer("en_route_driver_count").notNull(),
  completedDriverCount: integer("completed_driver_count").notNull(),
  driverLock: integer("driver_lock").notNull(),
});

export type DriverStateManagerRow = typeof driverStateManagers.$inferSelect;

export const formalAssumptionRecords = sqliteTable("formal_assumption_record", {
  assumptionId: text("assumption_id").primaryKey(),
  label: text("label").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull(),
});

export type FormalAssumptionRecordRow = typeof formalAssumptionRecords.$inferSelect;

export const geoSpatialIndexes = sqliteTable("geo_spatial_index", {
  geoId: text("geo_id").primaryKey(),
  driverCount: integer("driver_count").notNull(),
  currentSearchRadiusKm: real("current_search_radius_km").notNull(),
  centerLatitude: real("center_latitude").notNull(),
  centerLongitude: real("center_longitude").notNull(),
  lastQueryResultCount: integer("last_query_result_count").notNull(),
});

export type GeoSpatialIndexRow = typeof geoSpatialIndexes.$inferSelect;

export const latencyMonitors = sqliteTable("latency_monitor", {
  latencyMonitorId: text("latency_monitor_id").primaryKey(),
  requestStartTimeMs: integer("request_start_time_ms").notNull(),
  firstOfferTimeMs: integer("first_offer_time_ms").notNull(),
  currentLatencyMs: integer("current_latency_ms").notNull(),
  maxLatencyBudgetMs: integer("max_latency_budget_ms").notNull(),
  latencyBudgetExceeded: integer("latency_budget_exceeded", { mode: "boolean" }).notNull(),
});

export type LatencyMonitorRow = typeof latencyMonitors.$inferSelect;

export const offerServices = sqliteTable("offer_service", {
  offerServiceId: text("offer_service_id").primaryKey(),
  activeOfferCount: integer("active_offer_count").notNull(),
  expiredOfferCount: integer("expired_offer_count").notNull(),
  acceptedOfferCount: integer("accepted_offer_count").notNull(),
  maxWaitDurationMs: integer("max_wait_duration_ms").notNull(),
});

export type OfferServiceRow = typeof offerServices.$inferSelect;

export const passengerApps = sqliteTable("passenger_app", {
  passengerAppId: text("passenger_app_id").primaryKey(),
  rideRequestSubmitted: integer("ride_request_submitted", { mode: "boolean" }).notNull(),
  requestPickupLatitude: real("request_pickup_latitude").notNull(),
  requestPickupLongitude: real("request_pickup_longitude").notNull(),
  requestDestinationLatitude: real("request_destination_latitude").notNull(),
  requestDestinationLongitude: real("request_destination_longitude").notNull(),
  requestPreferences: text("request_preferences").notNull(),
  currentStatus: text("current_status").notNull(),
});

export type PassengerAppRow = typeof passengerApps.$inferSelect;

export const rideAssignmentResults = sqliteTable("ride_assignment_result", {
  resultId: text("result_id").primaryKey(),
  isSuccess: integer("is_success", { mode: "boolean" }).notNull(),
  assignedDriverId: text("assigned_driver_id").notNull(),
  rideRequestId: text("ride_request_id").notNull(),
  assignmentIdentifier: text("assignment_identifier").notNull(),
});

export type RideAssignmentResultRow = typeof rideAssignmentResults.$inferSelect;

export const rideDispatchSystems = sqliteTable("ride_dispatch_system", {
  systemId: text("system_id").primaryKey(),
  assignmentsPerRide: integer("assignments_per_ride").notNull(),
  driverStateTransitionValid: integer("driver_state_transition_valid", { mode: "boolean" }).notNull(),
  maxAssignmentLatencySec: real("max_assignment_latency_sec").notNull(),
  driverMutualExclusionHolds: integer("driver_mutual_exclusion_holds", { mode: "boolean" }).notNull(),
  activeRides: integer("active_rides").notNull(),
  idleDrivers: integer("idle_drivers").notNull(),
  assignedDrivers: integer("assigned_drivers").notNull(),
  enRouteDrivers: integer("en_route_drivers").notNull(),
  completedRides: integer("completed_rides").notNull(),
  offersMade: integer("offers_made").notNull(),
  offersAccepted: integer("offers_accepted").notNull(),
  offersExpired: integer("offers_expired").notNull(),
  maxLatencyBudget: real("max_latency_budget").notNull(),
});

export type RideDispatchSystemRow = typeof rideDispatchSystems.$inferSelect;

export const rideDispatchSystemFormalizeds = sqliteTable("ride_dispatch_system_formalized", {
  id: text("id").primaryKey(),
  lawfulBasis: text("lawful_basis").notNull(),
  noticeUrl: text("notice_url").notNull(),
  dataRetentionDays: integer("data_retention_days").notNull(),
  pciScope: text("pci_scope").notNull(),
  paymentProcessor: text("payment_processor").notNull(),
  wheelchairRideCapacity: integer("wheelchair_ride_capacity").notNull(),
  waitTimeMaxWavSec: real("wait_time_max_wav_sec").notNull(),
  totalDrivers: integer("total_drivers").notNull(),
  driverLock: integer("driver_lock").notNull(),
});

export type RideDispatchSystemFormalizedRow = typeof rideDispatchSystemFormalizeds.$inferSelect;

export const rideRegistries = sqliteTable("ride_registry", {
  registryId: text("registry_id").primaryKey(),
  rideRequestCount: integer("ride_request_count").notNull(),
  completedRideCount: integer("completed_ride_count").notNull(),
  assignmentCount: integer("assignment_count").notNull(),
});

export type RideRegistryRow = typeof rideRegistries.$inferSelect;

export const rideRequests = sqliteTable("ride_request", {
  requestId: text("request_id").primaryKey(),
  pickupLatitude: real("pickup_latitude").notNull(),
  pickupLongitude: real("pickup_longitude").notNull(),
  destinationLatitude: real("destination_latitude").notNull(),
  destinationLongitude: real("destination_longitude").notNull(),
  preferences: text("preferences").notNull(),
});

export type RideRequestRow = typeof rideRequests.$inferSelect;
