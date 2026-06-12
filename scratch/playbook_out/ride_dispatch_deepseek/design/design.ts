// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for PassengerApp. Runtime: string. Compile-time: branded. */
export type PassengerAppId = string & { readonly __brand: "PassengerAppId" };
/** Identity type for DriverApp. Runtime: string. Compile-time: branded. */
export type DriverAppId = string & { readonly __brand: "DriverAppId" };
/** Identity type for DispatchEngine. Runtime: string. Compile-time: branded. */
export type DispatchEngineId = string & { readonly __brand: "DispatchEngineId" };
/** Identity type for RideRegistry. Runtime: string. Compile-time: branded. */
export type RideRegistryId = string & { readonly __brand: "RideRegistryId" };
/** Identity type for DriverStateManager. Runtime: string. Compile-time: branded. */
export type DriverStateManagerId = string & { readonly __brand: "DriverStateManagerId" };
/** Identity type for OfferService. Runtime: string. Compile-time: branded. */
export type OfferServiceId = string & { readonly __brand: "OfferServiceId" };
/** Identity type for LatencyMonitor. Runtime: string. Compile-time: branded. */
export type LatencyMonitorId = string & { readonly __brand: "LatencyMonitorId" };
/** Identity type for GeoSpatialIndex. Runtime: string. Compile-time: branded. */
export type GeoSpatialIndexId = string & { readonly __brand: "GeoSpatialIndexId" };
/** Identity type for EngineToRideRegistryInterface. Runtime: string. Compile-time: branded. */
export type EngineToRideRegistryInterfaceId = string & { readonly __brand: "EngineToRideRegistryInterfaceId" };
/** Identity type for EngineToOfferInterface. Runtime: string. Compile-time: branded. */
export type EngineToOfferInterfaceId = string & { readonly __brand: "EngineToOfferInterfaceId" };
/** Identity type for EngineToDriverStateInterface. Runtime: string. Compile-time: branded. */
export type EngineToDriverStateInterfaceId = string & { readonly __brand: "EngineToDriverStateInterfaceId" };
/** Identity type for EngineToLatencyInterface. Runtime: string. Compile-time: branded. */
export type EngineToLatencyInterfaceId = string & { readonly __brand: "EngineToLatencyInterfaceId" };
/** Identity type for EngineToGeoInterface. Runtime: string. Compile-time: branded. */
export type EngineToGeoInterfaceId = string & { readonly __brand: "EngineToGeoInterfaceId" };
/** Identity type for AppToEngineInterface. Runtime: string. Compile-time: branded. */
export type AppToEngineInterfaceId = string & { readonly __brand: "AppToEngineInterfaceId" };
/** Identity type for DriverAppToOfferInterface. Runtime: string. Compile-time: branded. */
export type DriverAppToOfferInterfaceId = string & { readonly __brand: "DriverAppToOfferInterfaceId" };
/** Identity type for DriverAppToStateInterface. Runtime: string. Compile-time: branded. */
export type DriverAppToStateInterfaceId = string & { readonly __brand: "DriverAppToStateInterfaceId" };
/** Identity type for Passenger. Runtime: string. Compile-time: branded. */
export type PassengerId = string & { readonly __brand: "PassengerId" };
/** Identity type for Driver. Runtime: string. Compile-time: branded. */
export type DriverId = string & { readonly __brand: "DriverId" };
/** Identity type for RideVendor. Runtime: string. Compile-time: branded. */
export type RideVendorId = string & { readonly __brand: "RideVendorId" };
/** Identity type for RideRequest. Runtime: string. Compile-time: branded. */
export type RideRequestId = string & { readonly __brand: "RideRequestId" };
/** Identity type for Assignment. Runtime: string. Compile-time: branded. */
export type AssignmentId = string & { readonly __brand: "AssignmentId" };
/** Identity type for ExactlyOneDriverPerRide. Runtime: string. Compile-time: branded. */
export type ExactlyOneDriverPerRideId = string & { readonly __brand: "ExactlyOneDriverPerRideId" };
/** Identity type for ValidStateTransitions. Runtime: string. Compile-time: branded. */
export type ValidStateTransitionsId = string & { readonly __brand: "ValidStateTransitionsId" };
/** Identity type for BoundedAssignmentLatency. Runtime: string. Compile-time: branded. */
export type BoundedAssignmentLatencyId = string & { readonly __brand: "BoundedAssignmentLatencyId" };
/** Identity type for DriverMutualExclusion. Runtime: string. Compile-time: branded. */
export type DriverMutualExclusionId = string & { readonly __brand: "DriverMutualExclusionId" };
/** Identity type for RideAssignmentFlow. Runtime: string. Compile-time: branded. */
export type RideAssignmentFlowId = string & { readonly __brand: "RideAssignmentFlowId" };
/** Identity type for RideDispatchSystem. Runtime: string. Compile-time: branded. */
export type RideDispatchSystemId = string & { readonly __brand: "RideDispatchSystemId" };
/** Identity type for RideAssignmentResult. Runtime: string. Compile-time: branded. */
export type RideAssignmentResultId = string & { readonly __brand: "RideAssignmentResultId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
/** Identity type for AssumptionDocumentation. Runtime: string. Compile-time: branded. */
export type AssumptionDocumentationId = string & { readonly __brand: "AssumptionDocumentationId" };
/** Identity type for ComplianceMonitor. Runtime: string. Compile-time: branded. */
export type ComplianceMonitorId = string & { readonly __brand: "ComplianceMonitorId" };

// ─── Interfaces ───

/** @stereotype <<Role>> */
export interface DispatchEngineEndpoint {
  readonly engineId: string;
}

/** @stereotype <<Role>> */
export interface RideRegistryEndpoint {
  readonly registryId: string;
}

/** @stereotype <<Role>> */
export interface EngineToOfferEndpoint {
  readonly engineId: string;
}

/** @stereotype <<Role>> */
export interface OfferEndpoint {
  readonly offerServiceId: string;
}

/** @stereotype <<Role>> */
export interface EngineToDriverStateEndpoint {
  readonly engineId: string;
}

/** @stereotype <<Role>> */
export interface DriverStateEndpoint {
  readonly driverStateId: string;
}

/** @stereotype <<Role>> */
export interface EngineToLatencyEndpoint {
  readonly engineId: string;
}

/** @stereotype <<Role>> */
export interface LatencyEndpoint {
  readonly latencyMonitorId: string;
}

/** @stereotype <<Role>> */
export interface EngineToGeoEndpoint {
  readonly engineId: string;
}

/** @stereotype <<Role>> */
export interface GeoEndpoint {
  readonly geoId: string;
}

/** @stereotype <<Role>> */
export interface AppToEngineEndpoint {
  readonly passengerAppId: string;
}

/** @stereotype <<Role>> */
export interface EngineToAppEndpoint {
  readonly engineId: string;
}

/** @stereotype <<Role>> */
export interface DriverAppToOfferEndpoint {
  readonly driverAppId: string;
}

/** @stereotype <<Role>> */
export interface OfferToDriverAppEndpoint {
  readonly offerServiceId: string;
}

/** @stereotype <<Role>> */
export interface DriverAppToStateEndpoint {
  readonly driverAppId: string;
}

/** @stereotype <<Role>> */
export interface StateToDriverAppEndpoint {
  readonly driverStateId: string;
}

/** @stereotype <<Kind>> */
export interface PassengerApp {
  readonly passengerAppId: PassengerAppId;
  readonly rideRequestSubmitted: boolean;
  readonly requestPickupLatitude: number;
  readonly requestPickupLongitude: number;
  readonly requestDestinationLatitude: number;
  readonly requestDestinationLongitude: number;
  readonly requestPreferences: string;
  readonly currentStatus: string;
}

/** @stereotype <<Kind>> */
export interface DriverApp {
  readonly driverAppId: DriverAppId;
  readonly driverId: string;
  readonly currentLatitude: number;
  readonly currentLongitude: number;
  readonly state: string;
  readonly pendingOfferId: string;
  readonly pendingOfferRideId: string;
}

/** @stereotype <<Kind>> */
export interface DispatchEngine {
  readonly engineId: DispatchEngineId;
  readonly requestId: string;
  readonly currentSearchRadiusKm: number;
  readonly offerAttempts: number;
  readonly isProcessing: boolean;
  readonly timeSinceRequestMs: number;
}

/** @stereotype <<Kind>> */
export interface RideRegistry {
  readonly registryId: RideRegistryId;
  readonly rideRequestCount: number;
  readonly completedRideCount: number;
  readonly assignmentCount: number;
}

/** @stereotype <<Kind>> */
export interface DriverStateManager {
  readonly driverStateId: DriverStateManagerId;
  readonly totalDrivers: number;
  readonly idleDriverCount: number;
  readonly assignedDriverCount: number;
  readonly enRouteDriverCount: number;
  readonly completedDriverCount: number;
  readonly driverLock: number;
}

/** @stereotype <<Kind>> */
export interface OfferService {
  readonly offerServiceId: OfferServiceId;
  readonly activeOfferCount: number;
  readonly expiredOfferCount: number;
  readonly acceptedOfferCount: number;
  readonly maxWaitDurationMs: number;
}

/** @stereotype <<Kind>> */
export interface LatencyMonitor {
  readonly latencyMonitorId: LatencyMonitorId;
  readonly requestStartTimeMs: number;
  readonly firstOfferTimeMs: number;
  readonly currentLatencyMs: number;
  readonly maxLatencyBudgetMs: number;
  readonly latencyBudgetExceeded: boolean;
}

/** @stereotype <<Kind>> */
export interface GeoSpatialIndex {
  readonly geoId: GeoSpatialIndexId;
  readonly driverCount: number;
  readonly currentSearchRadiusKm: number;
  readonly centerLatitude: number;
  readonly centerLongitude: number;
  readonly lastQueryResultCount: number;
}

/** @stereotype <<Relator>> */
export interface EngineToRideRegistryInterface {
  readonly interfaceId: EngineToRideRegistryInterfaceId;
  readonly lastRequestStoreTime: number;
}

/** @stereotype <<Relator>> */
export interface EngineToOfferInterface {
  readonly interfaceId: EngineToOfferInterfaceId;
  readonly lastOfferTime: number;
}

/** @stereotype <<Relator>> */
export interface EngineToDriverStateInterface {
  readonly interfaceId: EngineToDriverStateInterfaceId;
  readonly lastStateChangeTime: number;
}

/** @stereotype <<Relator>> */
export interface EngineToLatencyInterface {
  readonly interfaceId: EngineToLatencyInterfaceId;
  readonly lastLatencyCheckTime: number;
}

/** @stereotype <<Relator>> */
export interface EngineToGeoInterface {
  readonly interfaceId: EngineToGeoInterfaceId;
  readonly lastGeoQueryTime: number;
}

/** @stereotype <<Relator>> */
export interface AppToEngineInterface {
  readonly interfaceId: AppToEngineInterfaceId;
  readonly lastRequestTime: number;
}

/** @stereotype <<Relator>> */
export interface DriverAppToOfferInterface {
  readonly interfaceId: DriverAppToOfferInterfaceId;
  readonly lastOfferResponseTime: number;
}

/** @stereotype <<Relator>> */
export interface DriverAppToStateInterface {
  readonly interfaceId: DriverAppToStateInterfaceId;
  readonly lastStateSyncTime: number;
}

/** @stereotype <<Agent>> */
export interface Passenger {
  readonly passengerId: PassengerId;
}

/** @stereotype <<Agent>> */
export interface Driver {
  readonly driverId: DriverId;
  readonly currentLatitude: number;
  readonly currentLongitude: number;
  readonly state: string;
}

/** @stereotype <<Agent>> */
export interface RideVendor {
  readonly vendorId: RideVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface RideRequest {
  readonly requestId: RideRequestId;
  readonly pickupLatitude: number;
  readonly pickupLongitude: number;
  readonly destinationLatitude: number;
  readonly destinationLongitude: number;
  readonly preferences: string;
}

/** @stereotype <<Kind>> */
export interface Assignment {
  readonly assignmentId: AssignmentId;
  readonly driverId: string;
  readonly requestId: string;
  readonly timestamp: number;
}

/** @stereotype <<Commitment>> */
export interface ExactlyOneDriverPerRide {
  readonly commitmentId: ExactlyOneDriverPerRideId;
  readonly assignmentsPerRide: number;
}

/** @stereotype <<Commitment>> */
export interface ValidStateTransitions {
  readonly commitmentId: ValidStateTransitionsId;
  readonly driverStateTransitionValid: boolean;
}

/** @stereotype <<Commitment>> */
export interface BoundedAssignmentLatency {
  readonly commitmentId: BoundedAssignmentLatencyId;
  readonly maxAssignmentLatencySec: number;
}

/** @stereotype <<Commitment>> */
export interface DriverMutualExclusion {
  readonly commitmentId: DriverMutualExclusionId;
  readonly driverMutualExclusionHolds: boolean;
}

/** @stereotype <<Category>> */
export interface StateMachineConstraint {
}

/** @stereotype <<Category>> */
export interface MutualExclusionConstraint {
}

/** @stereotype <<Happening>> */
export interface RideAssignmentFlow {
  readonly flowId: RideAssignmentFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface RideDispatchSystem extends StateMachineConstraint, MutualExclusionConstraint {
  readonly systemId: RideDispatchSystemId;
  readonly assignmentsPerRide: number;
  readonly driverStateTransitionValid: boolean;
  readonly maxAssignmentLatencySec: number;
  readonly driverMutualExclusionHolds: boolean;
  readonly activeRides: number;
  readonly idleDrivers: number;
  readonly assignedDrivers: number;
  readonly enRouteDrivers: number;
  readonly completedRides: number;
  readonly offersMade: number;
  readonly offersAccepted: number;
  readonly offersExpired: number;
  readonly maxLatencyBudget: number;
}

/** @stereotype <<Kind>> */
export interface RideAssignmentResult {
  readonly resultId: RideAssignmentResultId;
  readonly isSuccess: boolean;
  readonly assignedDriverId: string;
  readonly rideRequestId: string;
  readonly assignmentIdentifier: string;
}

/** @stereotype <<Category>> */
export interface GdprArticle5Compliant {
  readonly lawfulBasis: string;
  readonly noticeUrl: string;
  readonly dataRetentionDays: number;
}

/** @stereotype <<Category>> */
export interface PciDssCompliant {
  readonly pciScope: string;
  readonly paymentProcessor: string;
}

/** @stereotype <<Category>> */
export interface AdaAccessible {
  readonly wheelchairRideCapacity: number;
  readonly waitTimeMaxWavSec: number;
}

/** @stereotype <<Category>> */
export interface GeographicallyPlausible {
}

/** @stereotype <<Category>> */
export interface StateMachineDiscipline {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly label: string;
  readonly description: string;
  readonly status: string;
}

/** @stereotype <<Relator>> */
export interface AssumptionDocumentation {
  readonly docId: AssumptionDocumentationId;
  readonly documentedAt: string;
}

/** @stereotype <<Relator>> */
export interface ComplianceMonitor {
  readonly monitorId: ComplianceMonitorId;
  readonly lastAuditDate: string;
  readonly overallComplianceStatus: string;
}

/** @stereotype <<Subkind>> */
export interface RideDispatchSystemFormalized extends RideDispatchSystem {
  readonly lawfulBasis: string;
  readonly noticeUrl: string;
  readonly dataRetentionDays: number;
  readonly pciScope: string;
  readonly paymentProcessor: string;
  readonly wheelchairRideCapacity: number;
  readonly waitTimeMaxWavSec: number;
  readonly totalDrivers: number;
  readonly driverLock: number;
}


// ─── Factory functions ───

export function makePassengerApp(data: {
  passengerAppId: string;
  rideRequestSubmitted: boolean;
  requestPickupLatitude: number;
  requestPickupLongitude: number;
  requestDestinationLatitude: number;
  requestDestinationLongitude: number;
  requestPreferences: string;
  currentStatus: string;
}): PassengerApp {
  return {
    passengerAppId: data.passengerAppId as PassengerAppId,
    rideRequestSubmitted: data.rideRequestSubmitted,
    requestPickupLatitude: data.requestPickupLatitude,
    requestPickupLongitude: data.requestPickupLongitude,
    requestDestinationLatitude: data.requestDestinationLatitude,
    requestDestinationLongitude: data.requestDestinationLongitude,
    requestPreferences: data.requestPreferences,
    currentStatus: data.currentStatus,
  };
}

export function makeDriverApp(data: {
  driverAppId: string;
  driverId: string;
  currentLatitude: number;
  currentLongitude: number;
  state: string;
  pendingOfferId: string;
  pendingOfferRideId: string;
}): DriverApp {
  return {
    driverAppId: data.driverAppId as DriverAppId,
    driverId: data.driverId,
    currentLatitude: data.currentLatitude,
    currentLongitude: data.currentLongitude,
    state: data.state,
    pendingOfferId: data.pendingOfferId,
    pendingOfferRideId: data.pendingOfferRideId,
  };
}

export function makeDispatchEngine(data: {
  engineId: string;
  requestId: string;
  currentSearchRadiusKm: number;
  offerAttempts: number;
  isProcessing: boolean;
  timeSinceRequestMs: number;
}): DispatchEngine {
  return {
    engineId: data.engineId as DispatchEngineId,
    requestId: data.requestId,
    currentSearchRadiusKm: data.currentSearchRadiusKm,
    offerAttempts: data.offerAttempts,
    isProcessing: data.isProcessing,
    timeSinceRequestMs: data.timeSinceRequestMs,
  };
}

export function makeRideRegistry(data: {
  registryId: string;
  rideRequestCount: number;
  completedRideCount: number;
  assignmentCount: number;
}): RideRegistry {
  return {
    registryId: data.registryId as RideRegistryId,
    rideRequestCount: data.rideRequestCount,
    completedRideCount: data.completedRideCount,
    assignmentCount: data.assignmentCount,
  };
}

export function makeDriverStateManager(data: {
  driverStateId: string;
  totalDrivers: number;
  idleDriverCount: number;
  assignedDriverCount: number;
  enRouteDriverCount: number;
  completedDriverCount: number;
  driverLock: number;
}): DriverStateManager {
  return {
    driverStateId: data.driverStateId as DriverStateManagerId,
    totalDrivers: data.totalDrivers,
    idleDriverCount: data.idleDriverCount,
    assignedDriverCount: data.assignedDriverCount,
    enRouteDriverCount: data.enRouteDriverCount,
    completedDriverCount: data.completedDriverCount,
    driverLock: data.driverLock,
  };
}

export function makeOfferService(data: {
  offerServiceId: string;
  activeOfferCount: number;
  expiredOfferCount: number;
  acceptedOfferCount: number;
  maxWaitDurationMs: number;
}): OfferService {
  return {
    offerServiceId: data.offerServiceId as OfferServiceId,
    activeOfferCount: data.activeOfferCount,
    expiredOfferCount: data.expiredOfferCount,
    acceptedOfferCount: data.acceptedOfferCount,
    maxWaitDurationMs: data.maxWaitDurationMs,
  };
}

export function makeLatencyMonitor(data: {
  latencyMonitorId: string;
  requestStartTimeMs: number;
  firstOfferTimeMs: number;
  currentLatencyMs: number;
  maxLatencyBudgetMs: number;
  latencyBudgetExceeded: boolean;
}): LatencyMonitor {
  return {
    latencyMonitorId: data.latencyMonitorId as LatencyMonitorId,
    requestStartTimeMs: data.requestStartTimeMs,
    firstOfferTimeMs: data.firstOfferTimeMs,
    currentLatencyMs: data.currentLatencyMs,
    maxLatencyBudgetMs: data.maxLatencyBudgetMs,
    latencyBudgetExceeded: data.latencyBudgetExceeded,
  };
}

export function makeGeoSpatialIndex(data: {
  geoId: string;
  driverCount: number;
  currentSearchRadiusKm: number;
  centerLatitude: number;
  centerLongitude: number;
  lastQueryResultCount: number;
}): GeoSpatialIndex {
  return {
    geoId: data.geoId as GeoSpatialIndexId,
    driverCount: data.driverCount,
    currentSearchRadiusKm: data.currentSearchRadiusKm,
    centerLatitude: data.centerLatitude,
    centerLongitude: data.centerLongitude,
    lastQueryResultCount: data.lastQueryResultCount,
  };
}

export function makeEngineToRideRegistryInterface(data: {
  interfaceId: string;
  lastRequestStoreTime: number;
}): EngineToRideRegistryInterface {
  return {
    interfaceId: data.interfaceId as EngineToRideRegistryInterfaceId,
    lastRequestStoreTime: data.lastRequestStoreTime,
  };
}

export function makeEngineToOfferInterface(data: {
  interfaceId: string;
  lastOfferTime: number;
}): EngineToOfferInterface {
  return {
    interfaceId: data.interfaceId as EngineToOfferInterfaceId,
    lastOfferTime: data.lastOfferTime,
  };
}

export function makeEngineToDriverStateInterface(data: {
  interfaceId: string;
  lastStateChangeTime: number;
}): EngineToDriverStateInterface {
  return {
    interfaceId: data.interfaceId as EngineToDriverStateInterfaceId,
    lastStateChangeTime: data.lastStateChangeTime,
  };
}

export function makeEngineToLatencyInterface(data: {
  interfaceId: string;
  lastLatencyCheckTime: number;
}): EngineToLatencyInterface {
  return {
    interfaceId: data.interfaceId as EngineToLatencyInterfaceId,
    lastLatencyCheckTime: data.lastLatencyCheckTime,
  };
}

export function makeEngineToGeoInterface(data: {
  interfaceId: string;
  lastGeoQueryTime: number;
}): EngineToGeoInterface {
  return {
    interfaceId: data.interfaceId as EngineToGeoInterfaceId,
    lastGeoQueryTime: data.lastGeoQueryTime,
  };
}

export function makeAppToEngineInterface(data: {
  interfaceId: string;
  lastRequestTime: number;
}): AppToEngineInterface {
  return {
    interfaceId: data.interfaceId as AppToEngineInterfaceId,
    lastRequestTime: data.lastRequestTime,
  };
}

export function makeDriverAppToOfferInterface(data: {
  interfaceId: string;
  lastOfferResponseTime: number;
}): DriverAppToOfferInterface {
  return {
    interfaceId: data.interfaceId as DriverAppToOfferInterfaceId,
    lastOfferResponseTime: data.lastOfferResponseTime,
  };
}

export function makeDriverAppToStateInterface(data: {
  interfaceId: string;
  lastStateSyncTime: number;
}): DriverAppToStateInterface {
  return {
    interfaceId: data.interfaceId as DriverAppToStateInterfaceId,
    lastStateSyncTime: data.lastStateSyncTime,
  };
}

export function makePassenger(data: {
  passengerId: string;
}): Passenger {
  return {
    passengerId: data.passengerId as PassengerId,
  };
}

export function makeDriver(data: {
  driverId: string;
  currentLatitude: number;
  currentLongitude: number;
  state: string;
}): Driver {
  return {
    driverId: data.driverId as DriverId,
    currentLatitude: data.currentLatitude,
    currentLongitude: data.currentLongitude,
    state: data.state,
  };
}

export function makeRideVendor(data: {
  vendorId: string;
  name: string;
}): RideVendor {
  return {
    vendorId: data.vendorId as RideVendorId,
    name: data.name,
  };
}

export function makeRideRequest(data: {
  requestId: string;
  pickupLatitude: number;
  pickupLongitude: number;
  destinationLatitude: number;
  destinationLongitude: number;
  preferences: string;
}): RideRequest {
  return {
    requestId: data.requestId as RideRequestId,
    pickupLatitude: data.pickupLatitude,
    pickupLongitude: data.pickupLongitude,
    destinationLatitude: data.destinationLatitude,
    destinationLongitude: data.destinationLongitude,
    preferences: data.preferences,
  };
}

export function makeAssignment(data: {
  assignmentId: string;
  driverId: string;
  requestId: string;
  timestamp: number;
}): Assignment {
  return {
    assignmentId: data.assignmentId as AssignmentId,
    driverId: data.driverId,
    requestId: data.requestId,
    timestamp: data.timestamp,
  };
}

export function makeExactlyOneDriverPerRide(data: {
  commitmentId: string;
  assignmentsPerRide: number;
}): ExactlyOneDriverPerRide {
  return {
    commitmentId: data.commitmentId as ExactlyOneDriverPerRideId,
    assignmentsPerRide: data.assignmentsPerRide,
  };
}

export function makeValidStateTransitions(data: {
  commitmentId: string;
  driverStateTransitionValid: boolean;
}): ValidStateTransitions {
  return {
    commitmentId: data.commitmentId as ValidStateTransitionsId,
    driverStateTransitionValid: data.driverStateTransitionValid,
  };
}

export function makeBoundedAssignmentLatency(data: {
  commitmentId: string;
  maxAssignmentLatencySec: number;
}): BoundedAssignmentLatency {
  return {
    commitmentId: data.commitmentId as BoundedAssignmentLatencyId,
    maxAssignmentLatencySec: data.maxAssignmentLatencySec,
  };
}

export function makeDriverMutualExclusion(data: {
  commitmentId: string;
  driverMutualExclusionHolds: boolean;
}): DriverMutualExclusion {
  return {
    commitmentId: data.commitmentId as DriverMutualExclusionId,
    driverMutualExclusionHolds: data.driverMutualExclusionHolds,
  };
}

export function makeRideAssignmentFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): RideAssignmentFlow {
  return {
    flowId: data.flowId as RideAssignmentFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeRideDispatchSystem(data: {
  systemId: string;
  assignmentsPerRide: number;
  driverStateTransitionValid: boolean;
  maxAssignmentLatencySec: number;
  driverMutualExclusionHolds: boolean;
  activeRides: number;
  idleDrivers: number;
  assignedDrivers: number;
  enRouteDrivers: number;
  completedRides: number;
  offersMade: number;
  offersAccepted: number;
  offersExpired: number;
  maxLatencyBudget: number;
}): RideDispatchSystem {
  return {
    systemId: data.systemId as RideDispatchSystemId,
    assignmentsPerRide: data.assignmentsPerRide,
    driverStateTransitionValid: data.driverStateTransitionValid,
    maxAssignmentLatencySec: data.maxAssignmentLatencySec,
    driverMutualExclusionHolds: data.driverMutualExclusionHolds,
    activeRides: data.activeRides,
    idleDrivers: data.idleDrivers,
    assignedDrivers: data.assignedDrivers,
    enRouteDrivers: data.enRouteDrivers,
    completedRides: data.completedRides,
    offersMade: data.offersMade,
    offersAccepted: data.offersAccepted,
    offersExpired: data.offersExpired,
    maxLatencyBudget: data.maxLatencyBudget,
  };
}

export function makeRideAssignmentResult(data: {
  resultId: string;
  isSuccess: boolean;
  assignedDriverId: string;
  rideRequestId: string;
  assignmentIdentifier: string;
}): RideAssignmentResult {
  return {
    resultId: data.resultId as RideAssignmentResultId,
    isSuccess: data.isSuccess,
    assignedDriverId: data.assignedDriverId,
    rideRequestId: data.rideRequestId,
    assignmentIdentifier: data.assignmentIdentifier,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  label: string;
  description: string;
  status: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    label: data.label,
    description: data.description,
    status: data.status,
  };
}

export function makeAssumptionDocumentation(data: {
  docId: string;
  documentedAt: string;
}): AssumptionDocumentation {
  return {
    docId: data.docId as AssumptionDocumentationId,
    documentedAt: data.documentedAt,
  };
}

export function makeComplianceMonitor(data: {
  monitorId: string;
  lastAuditDate: string;
  overallComplianceStatus: string;
}): ComplianceMonitor {
  return {
    monitorId: data.monitorId as ComplianceMonitorId,
    lastAuditDate: data.lastAuditDate,
    overallComplianceStatus: data.overallComplianceStatus,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for PassengerApp. Returns empty array when valid. */
export function validatePassengerApp(instance: PassengerApp): readonly string[] {
  const violations: string[] = [];
  if (!((instance.passengerAppId !== null))) {
    violations.push("[PassengerApp] invariant violated: self.passengerAppId <> null");
  }
  if (!((((((instance.currentStatus === "idle") || (instance.currentStatus === "submitted")) || (instance.currentStatus === "matching")) || (instance.currentStatus === "matched")) || (instance.currentStatus === "completed")))) {
    violations.push("[PassengerApp] invariant violated: self.currentStatus = 'idle' or self.currentStatus = 'submitted' or self.currentStatus = 'matching' or self.currentStatus = 'matched' or self.currentStatus = 'completed'");
  }
  return violations;
}

/** Runtime invariant check for DriverApp. Returns empty array when valid. */
export function validateDriverApp(instance: DriverApp): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverAppId !== null))) {
    violations.push("[DriverApp] invariant violated: self.driverAppId <> null");
  }
  if (!((instance.driverId !== null))) {
    violations.push("[DriverApp] invariant violated: self.driverId <> null");
  }
  if (!(((((instance.state === "idle") || (instance.state === "assigned")) || (instance.state === "en_route")) || (instance.state === "completed")))) {
    violations.push("[DriverApp] invariant violated: self.state = 'idle' or self.state = 'assigned' or self.state = 'en_route' or self.state = 'completed'");
  }
  return violations;
}

/** Runtime invariant check for DispatchEngine. Returns empty array when valid. */
export function validateDispatchEngine(instance: DispatchEngine): readonly string[] {
  const violations: string[] = [];
  if (!((instance.engineId !== null))) {
    violations.push("[DispatchEngine] invariant violated: self.engineId <> null");
  }
  if (!(((instance.currentSearchRadiusKm === 2) || (instance.currentSearchRadiusKm === 5)))) {
    violations.push("[DispatchEngine] invariant violated: self.currentSearchRadiusKm = 2.0 or self.currentSearchRadiusKm = 5.0");
  }
  if (!((instance.offerAttempts >= 0))) {
    violations.push("[DispatchEngine] invariant violated: self.offerAttempts >= 0");
  }
  if (!((instance.timeSinceRequestMs >= 0))) {
    violations.push("[DispatchEngine] invariant violated: self.timeSinceRequestMs >= 0");
  }
  return violations;
}

/** Runtime invariant check for RideRegistry. Returns empty array when valid. */
export function validateRideRegistry(instance: RideRegistry): readonly string[] {
  const violations: string[] = [];
  if (!((instance.registryId !== null))) {
    violations.push("[RideRegistry] invariant violated: self.registryId <> null");
  }
  if (!((instance.rideRequestCount >= 0))) {
    violations.push("[RideRegistry] invariant violated: self.rideRequestCount >= 0");
  }
  if (!((instance.completedRideCount >= 0))) {
    violations.push("[RideRegistry] invariant violated: self.completedRideCount >= 0");
  }
  if (!((instance.assignmentCount >= 0))) {
    violations.push("[RideRegistry] invariant violated: self.assignmentCount >= 0");
  }
  if (!((instance.rideRequestCount >= instance.completedRideCount))) {
    violations.push("[RideRegistry] invariant violated: self.rideRequestCount >= self.completedRideCount");
  }
  return violations;
}

/** Runtime invariant check for DriverStateManager. Returns empty array when valid. */
export function validateDriverStateManager(instance: DriverStateManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverStateId !== null))) {
    violations.push("[DriverStateManager] invariant violated: self.driverStateId <> null");
  }
  if (!(((instance.driverLock === 0) || (instance.driverLock === 1)))) {
    violations.push("[DriverStateManager] invariant violated: self.driverLock = 0 or self.driverLock = 1");
  }
  if (!(((((instance.idleDriverCount + instance.assignedDriverCount) + instance.enRouteDriverCount) + instance.completedDriverCount) === instance.totalDrivers))) {
    violations.push("[DriverStateManager] invariant violated: self.idleDriverCount + self.assignedDriverCount + self.enRouteDriverCount + self.completedDriverCount = self.totalDrivers");
  }
  return violations;
}

/** Runtime invariant check for OfferService. Returns empty array when valid. */
export function validateOfferService(instance: OfferService): readonly string[] {
  const violations: string[] = [];
  if (!((instance.offerServiceId !== null))) {
    violations.push("[OfferService] invariant violated: self.offerServiceId <> null");
  }
  if (!((instance.maxWaitDurationMs === 10000))) {
    violations.push("[OfferService] invariant violated: self.maxWaitDurationMs = 10000");
  }
  if (!((instance.activeOfferCount >= 0))) {
    violations.push("[OfferService] invariant violated: self.activeOfferCount >= 0");
  }
  if (!((instance.expiredOfferCount >= 0))) {
    violations.push("[OfferService] invariant violated: self.expiredOfferCount >= 0");
  }
  if (!((instance.acceptedOfferCount >= 0))) {
    violations.push("[OfferService] invariant violated: self.acceptedOfferCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for LatencyMonitor. Returns empty array when valid. */
export function validateLatencyMonitor(instance: LatencyMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.latencyMonitorId !== null))) {
    violations.push("[LatencyMonitor] invariant violated: self.latencyMonitorId <> null");
  }
  if (!((instance.maxLatencyBudgetMs === 30000))) {
    violations.push("[LatencyMonitor] invariant violated: self.maxLatencyBudgetMs = 30000");
  }
  if (!((instance.maxLatencyBudgetMs >= 0))) {
    violations.push("[LatencyMonitor] invariant violated: self.maxLatencyBudgetMs >= 0");
  }
  return violations;
}

/** Runtime invariant check for GeoSpatialIndex. Returns empty array when valid. */
export function validateGeoSpatialIndex(instance: GeoSpatialIndex): readonly string[] {
  const violations: string[] = [];
  if (!((instance.geoId !== null))) {
    violations.push("[GeoSpatialIndex] invariant violated: self.geoId <> null");
  }
  if (!(((instance.currentSearchRadiusKm === 2) || (instance.currentSearchRadiusKm === 5)))) {
    violations.push("[GeoSpatialIndex] invariant violated: self.currentSearchRadiusKm = 2.0 or self.currentSearchRadiusKm = 5.0");
  }
  if (!((instance.currentSearchRadiusKm > 0))) {
    violations.push("[GeoSpatialIndex] invariant violated: self.currentSearchRadiusKm > 0.0");
  }
  if (!((instance.driverCount >= 0))) {
    violations.push("[GeoSpatialIndex] invariant violated: self.driverCount >= 0");
  }
  if (!((instance.lastQueryResultCount >= 0))) {
    violations.push("[GeoSpatialIndex] invariant violated: self.lastQueryResultCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for EngineToRideRegistryInterface. Returns empty array when valid. */
export function validateEngineToRideRegistryInterface(instance: EngineToRideRegistryInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[EngineToRideRegistryInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lastRequestStoreTime >= 0))) {
    violations.push("[EngineToRideRegistryInterface] invariant violated: self.lastRequestStoreTime >= 0");
  }
  return violations;
}

/** Runtime invariant check for EngineToOfferInterface. Returns empty array when valid. */
export function validateEngineToOfferInterface(instance: EngineToOfferInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[EngineToOfferInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lastOfferTime >= 0))) {
    violations.push("[EngineToOfferInterface] invariant violated: self.lastOfferTime >= 0");
  }
  return violations;
}

/** Runtime invariant check for EngineToDriverStateInterface. Returns empty array when valid. */
export function validateEngineToDriverStateInterface(instance: EngineToDriverStateInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[EngineToDriverStateInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lastStateChangeTime >= 0))) {
    violations.push("[EngineToDriverStateInterface] invariant violated: self.lastStateChangeTime >= 0");
  }
  return violations;
}

/** Runtime invariant check for EngineToLatencyInterface. Returns empty array when valid. */
export function validateEngineToLatencyInterface(instance: EngineToLatencyInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[EngineToLatencyInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lastLatencyCheckTime >= 0))) {
    violations.push("[EngineToLatencyInterface] invariant violated: self.lastLatencyCheckTime >= 0");
  }
  return violations;
}

/** Runtime invariant check for EngineToGeoInterface. Returns empty array when valid. */
export function validateEngineToGeoInterface(instance: EngineToGeoInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[EngineToGeoInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lastGeoQueryTime >= 0))) {
    violations.push("[EngineToGeoInterface] invariant violated: self.lastGeoQueryTime >= 0");
  }
  return violations;
}

/** Runtime invariant check for AppToEngineInterface. Returns empty array when valid. */
export function validateAppToEngineInterface(instance: AppToEngineInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[AppToEngineInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lastRequestTime >= 0))) {
    violations.push("[AppToEngineInterface] invariant violated: self.lastRequestTime >= 0");
  }
  return violations;
}

/** Runtime invariant check for DriverAppToOfferInterface. Returns empty array when valid. */
export function validateDriverAppToOfferInterface(instance: DriverAppToOfferInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[DriverAppToOfferInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lastOfferResponseTime >= 0))) {
    violations.push("[DriverAppToOfferInterface] invariant violated: self.lastOfferResponseTime >= 0");
  }
  return violations;
}

/** Runtime invariant check for DriverAppToStateInterface. Returns empty array when valid. */
export function validateDriverAppToStateInterface(instance: DriverAppToStateInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[DriverAppToStateInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.lastStateSyncTime >= 0))) {
    violations.push("[DriverAppToStateInterface] invariant violated: self.lastStateSyncTime >= 0");
  }
  return violations;
}

/** Runtime invariant check for Passenger. Returns empty array when valid. */
export function validatePassenger(instance: Passenger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.passengerId !== null))) {
    violations.push("[Passenger] invariant violated: self.passengerId <> null");
  }
  return violations;
}

/** Runtime invariant check for Driver. Returns empty array when valid. */
export function validateDriver(instance: Driver): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverId !== null))) {
    violations.push("[Driver] invariant violated: self.driverId <> null");
  }
  if (!(((((instance.state === "idle") || (instance.state === "assigned")) || (instance.state === "en_route")) || (instance.state === "completed")))) {
    violations.push("[Driver] invariant violated: self.state = 'idle' or self.state = 'assigned' or self.state = 'en_route' or self.state = 'completed'");
  }
  return violations;
}

/** Runtime invariant check for RideVendor. Returns empty array when valid. */
export function validateRideVendor(instance: RideVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[RideVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for RideRequest. Returns empty array when valid. */
export function validateRideRequest(instance: RideRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[RideRequest] invariant violated: self.requestId <> null");
  }
  return violations;
}

/** Runtime invariant check for Assignment. Returns empty array when valid. */
export function validateAssignment(instance: Assignment): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assignmentId !== null))) {
    violations.push("[Assignment] invariant violated: self.assignmentId <> null");
  }
  return violations;
}

/** Runtime invariant check for StateMachineConstraint. Returns empty array when valid. */
export function validateStateMachineConstraint(instance: StateMachineConstraint): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[StateMachineConstraint] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MutualExclusionConstraint. Returns empty array when valid. */
export function validateMutualExclusionConstraint(instance: MutualExclusionConstraint): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MutualExclusionConstraint] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for RideAssignmentFlow. Returns empty array when valid. */
export function validateRideAssignmentFlow(instance: RideAssignmentFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RideAssignmentFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for RideDispatchSystem. Returns empty array when valid. */
export function validateRideDispatchSystem(instance: RideDispatchSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[RideDispatchSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.activeRides >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.activeRides >= 0");
  }
  if (!((instance.idleDrivers >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.idleDrivers >= 0");
  }
  if (!((instance.assignedDrivers >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.assignedDrivers >= 0");
  }
  if (!((instance.enRouteDrivers >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.enRouteDrivers >= 0");
  }
  if (!((instance.completedRides >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.completedRides >= 0");
  }
  if (!((instance.offersMade >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.offersMade >= 0");
  }
  if (!((instance.offersAccepted >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.offersAccepted >= 0");
  }
  if (!((instance.offersExpired >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.offersExpired >= 0");
  }
  if (!((instance.maxLatencyBudget <= 30))) {
    violations.push("[RideDispatchSystem] invariant violated: self.maxLatencyBudget <= 30.0");
  }
  if (!((instance.maxAssignmentLatencySec >= 0))) {
    violations.push("[RideDispatchSystem] invariant violated: self.maxAssignmentLatencySec >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for RideAssignmentResult. Returns empty array when valid. */
export function validateRideAssignmentResult(instance: RideAssignmentResult): readonly string[] {
  const violations: string[] = [];
  if (!((instance.resultId !== null))) {
    violations.push("[RideAssignmentResult] invariant violated: self.resultId <> null");
  }
  if (!(((instance.isSuccess === true) || (instance.isSuccess === false)))) {
    violations.push("[RideAssignmentResult] invariant violated: self.isSuccess = true or self.isSuccess = false");
  }
  return violations;
}

/** Runtime invariant check for GdprArticle5Compliant. Returns empty array when valid. */
export function validateGdprArticle5Compliant(instance: GdprArticle5Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.lawfulBasis !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.lawfulBasis <> null");
  }
  if (!((instance.noticeUrl !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.noticeUrl <> null");
  }
  if (!((instance.dataRetentionDays > 0))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.dataRetentionDays > 0");
  }
  return violations;
}

/** Runtime invariant check for PciDssCompliant. Returns empty array when valid. */
export function validatePciDssCompliant(instance: PciDssCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pciScope !== null))) {
    violations.push("[PciDssCompliant] invariant violated: self.pciScope <> null");
  }
  if (!((instance.paymentProcessor !== null))) {
    violations.push("[PciDssCompliant] invariant violated: self.paymentProcessor <> null");
  }
  return violations;
}

/** Runtime invariant check for AdaAccessible. Returns empty array when valid. */
export function validateAdaAccessible(instance: AdaAccessible): readonly string[] {
  const violations: string[] = [];
  if (!((instance.wheelchairRideCapacity >= 0))) {
    violations.push("[AdaAccessible] invariant violated: self.wheelchairRideCapacity >= 0");
  }
  if (!((instance.waitTimeMaxWavSec > 0))) {
    violations.push("[AdaAccessible] invariant violated: self.waitTimeMaxWavSec > 0.0");
  }
  return violations;
}

/** Runtime invariant check for GeographicallyPlausible. Returns empty array when valid. */
export function validateGeographicallyPlausible(instance: GeographicallyPlausible): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxLatencyBudget <= 30.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for StateMachineDiscipline. Returns empty array when valid. */
export function validateStateMachineDiscipline(instance: StateMachineDiscipline): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.idleDrivers + bearer.assignedDrivers + bearer.enRouteDrivers >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.driverMutualExclusionHolds = true — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.label !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.label <> null");
  }
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((((instance.status === "accepted") || (instance.status === "verified")) || (instance.status === "falsified")))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.status = 'accepted' or self.status = 'verified' or self.status = 'falsified'");
  }
  return violations;
}

/** Runtime invariant check for AssumptionDocumentation. Returns empty array when valid. */
export function validateAssumptionDocumentation(instance: AssumptionDocumentation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.docId !== null))) {
    violations.push("[AssumptionDocumentation] invariant violated: self.docId <> null");
  }
  if (!((instance.documentedAt !== null))) {
    violations.push("[AssumptionDocumentation] invariant violated: self.documentedAt <> null");
  }
  return violations;
}

/** Runtime invariant check for ComplianceMonitor. Returns empty array when valid. */
export function validateComplianceMonitor(instance: ComplianceMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.monitorId !== null))) {
    violations.push("[ComplianceMonitor] invariant violated: self.monitorId <> null");
  }
  if (!((instance.lastAuditDate !== null))) {
    violations.push("[ComplianceMonitor] invariant violated: self.lastAuditDate <> null");
  }
  if (!((((instance.overallComplianceStatus === "compliant") || (instance.overallComplianceStatus === "non_compliant")) || (instance.overallComplianceStatus === "pending_audit")))) {
    violations.push("[ComplianceMonitor] invariant violated: self.overallComplianceStatus = 'compliant' or self.overallComplianceStatus = 'non_compliant' or self.overallComplianceStatus = 'pending_audit'");
  }
  return violations;
}

/** Runtime invariant check for RideDispatchSystemFormalized. Returns empty array when valid. */
export function validateRideDispatchSystemFormalized(instance: RideDispatchSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.lawfulBasis !== null))) {
    violations.push("[RideDispatchSystemFormalized] invariant violated: self.lawfulBasis <> null");
  }
  if (!((instance.noticeUrl !== null))) {
    violations.push("[RideDispatchSystemFormalized] invariant violated: self.noticeUrl <> null");
  }
  if (!((instance.dataRetentionDays > 0))) {
    violations.push("[RideDispatchSystemFormalized] invariant violated: self.dataRetentionDays > 0");
  }
  if (!((instance.pciScope !== null))) {
    violations.push("[RideDispatchSystemFormalized] invariant violated: self.pciScope <> null");
  }
  if (!((instance.paymentProcessor !== null))) {
    violations.push("[RideDispatchSystemFormalized] invariant violated: self.paymentProcessor <> null");
  }
  if (!((instance.wheelchairRideCapacity >= 0))) {
    violations.push("[RideDispatchSystemFormalized] invariant violated: self.wheelchairRideCapacity >= 0");
  }
  if (!((instance.waitTimeMaxWavSec > 0))) {
    violations.push("[RideDispatchSystemFormalized] invariant violated: self.waitTimeMaxWavSec > 0.0");
  }
  if (!(((((instance.idleDrivers + instance.assignedDrivers) + instance.enRouteDrivers) + instance.completedRides) === instance.totalDrivers))) {
    violations.push("[RideDispatchSystemFormalized] invariant violated: self.idleDrivers + self.assignedDrivers + self.enRouteDrivers + self.completedRides = self.totalDrivers");
  }
  if (!(((instance.driverLock === 0) || (instance.driverLock === 1)))) {
    violations.push("[RideDispatchSystemFormalized] invariant violated: self.driverLock = 0 or self.driverLock = 1");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for PassengerApp.submitRideRequest. User supplies this. */
export type PassengerAppSubmitRideRequestImpl = (self: PassengerApp, pickupLat: number, pickupLng: number, destLat: number, destLng: number, preferences: string) => { self: PassengerApp; modified: { rideRequestSubmitted: unknown; requestPickupLatitude: unknown; requestPickupLongitude: unknown; requestDestinationLatitude: unknown; requestDestinationLongitude: unknown; requestPreferences: unknown; currentStatus: unknown } };

/** Contract-checking wrapper for PassengerApp.submitRideRequest. */
export function wrapPassengerAppSubmitRideRequest(impl: PassengerAppSubmitRideRequestImpl): (self: PassengerApp, pickupLat: number, pickupLng: number, destLat: number, destLng: number, preferences: string) => PassengerApp {
  return (self, pickupLat, pickupLng, destLat, destLng, preferences) => {
    const preViolations: string[] = [];
    if (!(!(self.rideRequestSubmitted))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: not self.rideRequestSubmitted");
    }
    if (!((pickupLat >= -(90)))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: pickupLat >= -90.0");
    }
    if (!((pickupLat <= 90))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: pickupLat <= 90.0");
    }
    if (!((pickupLng >= -(180)))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: pickupLng >= -180.0");
    }
    if (!((pickupLng <= 180))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: pickupLng <= 180.0");
    }
    if (!((destLat >= -(90)))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: destLat >= -90.0");
    }
    if (!((destLat <= 90))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: destLat <= 90.0");
    }
    if (!((destLng >= -(180)))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: destLng >= -180.0");
    }
    if (!((destLng <= 180))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: destLng <= 180.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, pickupLat, pickupLng, destLat, destLng, preferences);
      const postViolations: string[] = [];
      if (!((__result.self.rideRequestSubmitted === true))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.rideRequestSubmitted = true");
      }
      if (!((__result.self.requestPickupLatitude === pickupLat))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestPickupLatitude = pickupLat");
      }
      if (!((__result.self.requestPickupLongitude === pickupLng))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestPickupLongitude = pickupLng");
      }
      if (!((__result.self.requestDestinationLatitude === destLat))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestDestinationLatitude = destLat");
      }
      if (!((__result.self.requestDestinationLongitude === destLng))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestDestinationLongitude = destLng");
      }
      if (!((__result.self.requestPreferences === preferences))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestPreferences = preferences");
      }
      if (!((__result.self.currentStatus === "submitted"))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.currentStatus = 'submitted'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PassengerApp.submitRideRequest (async). User supplies this. */
export type PassengerAppSubmitRideRequestAsyncImpl = (self: PassengerApp, pickupLat: number, pickupLng: number, destLat: number, destLng: number, preferences: string) => Promise<{ self: PassengerApp; modified: { rideRequestSubmitted: unknown; requestPickupLatitude: unknown; requestPickupLongitude: unknown; requestDestinationLatitude: unknown; requestDestinationLongitude: unknown; requestPreferences: unknown; currentStatus: unknown } }>;

/** Contract-checking wrapper for PassengerApp.submitRideRequest (async). */
export function wrapPassengerAppSubmitRideRequestAsync(impl: PassengerAppSubmitRideRequestAsyncImpl): (self: PassengerApp, pickupLat: number, pickupLng: number, destLat: number, destLng: number, preferences: string) => Promise<PassengerApp> {
  return async (self, pickupLat, pickupLng, destLat, destLng, preferences) => {
    const preViolations: string[] = [];
    if (!(!(self.rideRequestSubmitted))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: not self.rideRequestSubmitted");
    }
    if (!((pickupLat >= -(90)))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: pickupLat >= -90.0");
    }
    if (!((pickupLat <= 90))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: pickupLat <= 90.0");
    }
    if (!((pickupLng >= -(180)))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: pickupLng >= -180.0");
    }
    if (!((pickupLng <= 180))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: pickupLng <= 180.0");
    }
    if (!((destLat >= -(90)))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: destLat >= -90.0");
    }
    if (!((destLat <= 90))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: destLat <= 90.0");
    }
    if (!((destLng >= -(180)))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: destLng >= -180.0");
    }
    if (!((destLng <= 180))) {
      preViolations.push("[PassengerApp.submitRideRequest] pre violated: destLng <= 180.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, pickupLat, pickupLng, destLat, destLng, preferences);
      const postViolations: string[] = [];
      if (!((__result.self.rideRequestSubmitted === true))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.rideRequestSubmitted = true");
      }
      if (!((__result.self.requestPickupLatitude === pickupLat))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestPickupLatitude = pickupLat");
      }
      if (!((__result.self.requestPickupLongitude === pickupLng))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestPickupLongitude = pickupLng");
      }
      if (!((__result.self.requestDestinationLatitude === destLat))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestDestinationLatitude = destLat");
      }
      if (!((__result.self.requestDestinationLongitude === destLng))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestDestinationLongitude = destLng");
      }
      if (!((__result.self.requestPreferences === preferences))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.requestPreferences = preferences");
      }
      if (!((__result.self.currentStatus === "submitted"))) {
        postViolations.push("[PassengerApp.submitRideRequest] post violated: self.currentStatus = 'submitted'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PassengerApp.notifyMatchingComplete. User supplies this. */
export type PassengerAppNotifyMatchingCompleteImpl = (self: PassengerApp, assignedDriverId: string) => { self: PassengerApp; modified: { currentStatus: unknown } };

/** Contract-checking wrapper for PassengerApp.notifyMatchingComplete. */
export function wrapPassengerAppNotifyMatchingComplete(impl: PassengerAppNotifyMatchingCompleteImpl): (self: PassengerApp, assignedDriverId: string) => PassengerApp {
  return (self, assignedDriverId) => {
    const preViolations: string[] = [];
    if (!((self.currentStatus === "matching"))) {
      preViolations.push("[PassengerApp.notifyMatchingComplete] pre violated: self.currentStatus = 'matching'");
    }
    if (!((assignedDriverId !== null))) {
      preViolations.push("[PassengerApp.notifyMatchingComplete] pre violated: assignedDriverId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, assignedDriverId);
      const postViolations: string[] = [];
      if (!((__result.self.currentStatus === "matched"))) {
        postViolations.push("[PassengerApp.notifyMatchingComplete] post violated: self.currentStatus = 'matched'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PassengerApp.notifyMatchingComplete (async). User supplies this. */
export type PassengerAppNotifyMatchingCompleteAsyncImpl = (self: PassengerApp, assignedDriverId: string) => Promise<{ self: PassengerApp; modified: { currentStatus: unknown } }>;

/** Contract-checking wrapper for PassengerApp.notifyMatchingComplete (async). */
export function wrapPassengerAppNotifyMatchingCompleteAsync(impl: PassengerAppNotifyMatchingCompleteAsyncImpl): (self: PassengerApp, assignedDriverId: string) => Promise<PassengerApp> {
  return async (self, assignedDriverId) => {
    const preViolations: string[] = [];
    if (!((self.currentStatus === "matching"))) {
      preViolations.push("[PassengerApp.notifyMatchingComplete] pre violated: self.currentStatus = 'matching'");
    }
    if (!((assignedDriverId !== null))) {
      preViolations.push("[PassengerApp.notifyMatchingComplete] pre violated: assignedDriverId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, assignedDriverId);
      const postViolations: string[] = [];
      if (!((__result.self.currentStatus === "matched"))) {
        postViolations.push("[PassengerApp.notifyMatchingComplete] post violated: self.currentStatus = 'matched'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PassengerApp.notifyRideCompleted. User supplies this. */
export type PassengerAppNotifyRideCompletedImpl = (self: PassengerApp) => { self: PassengerApp; modified: { currentStatus: unknown } };

/** Contract-checking wrapper for PassengerApp.notifyRideCompleted. */
export function wrapPassengerAppNotifyRideCompleted(impl: PassengerAppNotifyRideCompletedImpl): (self: PassengerApp) => PassengerApp {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentStatus === "matched"))) {
      preViolations.push("[PassengerApp.notifyRideCompleted] pre violated: self.currentStatus = 'matched'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentStatus === "completed"))) {
        postViolations.push("[PassengerApp.notifyRideCompleted] post violated: self.currentStatus = 'completed'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PassengerApp.notifyRideCompleted (async). User supplies this. */
export type PassengerAppNotifyRideCompletedAsyncImpl = (self: PassengerApp) => Promise<{ self: PassengerApp; modified: { currentStatus: unknown } }>;

/** Contract-checking wrapper for PassengerApp.notifyRideCompleted (async). */
export function wrapPassengerAppNotifyRideCompletedAsync(impl: PassengerAppNotifyRideCompletedAsyncImpl): (self: PassengerApp) => Promise<PassengerApp> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentStatus === "matched"))) {
      preViolations.push("[PassengerApp.notifyRideCompleted] pre violated: self.currentStatus = 'matched'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentStatus === "completed"))) {
        postViolations.push("[PassengerApp.notifyRideCompleted] post violated: self.currentStatus = 'completed'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.updatePosition. User supplies this. */
export type DriverAppUpdatePositionImpl = (self: DriverApp, lat: number, lng: number) => { self: DriverApp; modified: { currentLatitude: unknown; currentLongitude: unknown } };

/** Contract-checking wrapper for DriverApp.updatePosition. */
export function wrapDriverAppUpdatePosition(impl: DriverAppUpdatePositionImpl): (self: DriverApp, lat: number, lng: number) => DriverApp {
  return (self, lat, lng) => {
    const preViolations: string[] = [];
    if (!((lat >= -(90)))) {
      preViolations.push("[DriverApp.updatePosition] pre violated: lat >= -90.0");
    }
    if (!((lat <= 90))) {
      preViolations.push("[DriverApp.updatePosition] pre violated: lat <= 90.0");
    }
    if (!((lng >= -(180)))) {
      preViolations.push("[DriverApp.updatePosition] pre violated: lng >= -180.0");
    }
    if (!((lng <= 180))) {
      preViolations.push("[DriverApp.updatePosition] pre violated: lng <= 180.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, lat, lng);
      const postViolations: string[] = [];
      if (!((__result.self.currentLatitude === lat))) {
        postViolations.push("[DriverApp.updatePosition] post violated: self.currentLatitude = lat");
      }
      if (!((__result.self.currentLongitude === lng))) {
        postViolations.push("[DriverApp.updatePosition] post violated: self.currentLongitude = lng");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.updatePosition (async). User supplies this. */
export type DriverAppUpdatePositionAsyncImpl = (self: DriverApp, lat: number, lng: number) => Promise<{ self: DriverApp; modified: { currentLatitude: unknown; currentLongitude: unknown } }>;

/** Contract-checking wrapper for DriverApp.updatePosition (async). */
export function wrapDriverAppUpdatePositionAsync(impl: DriverAppUpdatePositionAsyncImpl): (self: DriverApp, lat: number, lng: number) => Promise<DriverApp> {
  return async (self, lat, lng) => {
    const preViolations: string[] = [];
    if (!((lat >= -(90)))) {
      preViolations.push("[DriverApp.updatePosition] pre violated: lat >= -90.0");
    }
    if (!((lat <= 90))) {
      preViolations.push("[DriverApp.updatePosition] pre violated: lat <= 90.0");
    }
    if (!((lng >= -(180)))) {
      preViolations.push("[DriverApp.updatePosition] pre violated: lng >= -180.0");
    }
    if (!((lng <= 180))) {
      preViolations.push("[DriverApp.updatePosition] pre violated: lng <= 180.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, lat, lng);
      const postViolations: string[] = [];
      if (!((__result.self.currentLatitude === lat))) {
        postViolations.push("[DriverApp.updatePosition] post violated: self.currentLatitude = lat");
      }
      if (!((__result.self.currentLongitude === lng))) {
        postViolations.push("[DriverApp.updatePosition] post violated: self.currentLongitude = lng");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.acceptOffer. User supplies this. */
export type DriverAppAcceptOfferImpl = (self: DriverApp, offerId: string, rideId: string) => { self: DriverApp; modified: { state: unknown; pendingOfferId: unknown; pendingOfferRideId: unknown } };

/** Contract-checking wrapper for DriverApp.acceptOffer. */
export function wrapDriverAppAcceptOffer(impl: DriverAppAcceptOfferImpl): (self: DriverApp, offerId: string, rideId: string) => DriverApp {
  return (self, offerId, rideId) => {
    const preViolations: string[] = [];
    if (!((offerId !== null))) {
      preViolations.push("[DriverApp.acceptOffer] pre violated: offerId <> null");
    }
    if (!((rideId !== null))) {
      preViolations.push("[DriverApp.acceptOffer] pre violated: rideId <> null");
    }
    if (!((self.state === "idle"))) {
      preViolations.push("[DriverApp.acceptOffer] pre violated: self.state = 'idle'");
    }
    if (!((self.pendingOfferId === offerId))) {
      preViolations.push("[DriverApp.acceptOffer] pre violated: self.pendingOfferId = offerId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, offerId, rideId);
      const postViolations: string[] = [];
      if (!((__result.self.state === "assigned"))) {
        postViolations.push("[DriverApp.acceptOffer] post violated: self.state = 'assigned'");
      }
      if (!((__result.self.pendingOfferId === ""))) {
        postViolations.push("[DriverApp.acceptOffer] post violated: self.pendingOfferId = ''");
      }
      if (!((__result.self.pendingOfferRideId === rideId))) {
        postViolations.push("[DriverApp.acceptOffer] post violated: self.pendingOfferRideId = rideId");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.acceptOffer (async). User supplies this. */
export type DriverAppAcceptOfferAsyncImpl = (self: DriverApp, offerId: string, rideId: string) => Promise<{ self: DriverApp; modified: { state: unknown; pendingOfferId: unknown; pendingOfferRideId: unknown } }>;

/** Contract-checking wrapper for DriverApp.acceptOffer (async). */
export function wrapDriverAppAcceptOfferAsync(impl: DriverAppAcceptOfferAsyncImpl): (self: DriverApp, offerId: string, rideId: string) => Promise<DriverApp> {
  return async (self, offerId, rideId) => {
    const preViolations: string[] = [];
    if (!((offerId !== null))) {
      preViolations.push("[DriverApp.acceptOffer] pre violated: offerId <> null");
    }
    if (!((rideId !== null))) {
      preViolations.push("[DriverApp.acceptOffer] pre violated: rideId <> null");
    }
    if (!((self.state === "idle"))) {
      preViolations.push("[DriverApp.acceptOffer] pre violated: self.state = 'idle'");
    }
    if (!((self.pendingOfferId === offerId))) {
      preViolations.push("[DriverApp.acceptOffer] pre violated: self.pendingOfferId = offerId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, offerId, rideId);
      const postViolations: string[] = [];
      if (!((__result.self.state === "assigned"))) {
        postViolations.push("[DriverApp.acceptOffer] post violated: self.state = 'assigned'");
      }
      if (!((__result.self.pendingOfferId === ""))) {
        postViolations.push("[DriverApp.acceptOffer] post violated: self.pendingOfferId = ''");
      }
      if (!((__result.self.pendingOfferRideId === rideId))) {
        postViolations.push("[DriverApp.acceptOffer] post violated: self.pendingOfferRideId = rideId");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.declineOffer. User supplies this. */
export type DriverAppDeclineOfferImpl = (self: DriverApp, offerId: string) => { self: DriverApp; modified: { pendingOfferId: unknown } };

/** Contract-checking wrapper for DriverApp.declineOffer. */
export function wrapDriverAppDeclineOffer(impl: DriverAppDeclineOfferImpl): (self: DriverApp, offerId: string) => DriverApp {
  return (self, offerId) => {
    const preViolations: string[] = [];
    if (!((offerId !== null))) {
      preViolations.push("[DriverApp.declineOffer] pre violated: offerId <> null");
    }
    if (!((self.state === "idle"))) {
      preViolations.push("[DriverApp.declineOffer] pre violated: self.state = 'idle'");
    }
    if (!((self.pendingOfferId === offerId))) {
      preViolations.push("[DriverApp.declineOffer] pre violated: self.pendingOfferId = offerId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, offerId);
      const postViolations: string[] = [];
      if (!((__result.self.pendingOfferId === ""))) {
        postViolations.push("[DriverApp.declineOffer] post violated: self.pendingOfferId = ''");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.declineOffer (async). User supplies this. */
export type DriverAppDeclineOfferAsyncImpl = (self: DriverApp, offerId: string) => Promise<{ self: DriverApp; modified: { pendingOfferId: unknown } }>;

/** Contract-checking wrapper for DriverApp.declineOffer (async). */
export function wrapDriverAppDeclineOfferAsync(impl: DriverAppDeclineOfferAsyncImpl): (self: DriverApp, offerId: string) => Promise<DriverApp> {
  return async (self, offerId) => {
    const preViolations: string[] = [];
    if (!((offerId !== null))) {
      preViolations.push("[DriverApp.declineOffer] pre violated: offerId <> null");
    }
    if (!((self.state === "idle"))) {
      preViolations.push("[DriverApp.declineOffer] pre violated: self.state = 'idle'");
    }
    if (!((self.pendingOfferId === offerId))) {
      preViolations.push("[DriverApp.declineOffer] pre violated: self.pendingOfferId = offerId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, offerId);
      const postViolations: string[] = [];
      if (!((__result.self.pendingOfferId === ""))) {
        postViolations.push("[DriverApp.declineOffer] post violated: self.pendingOfferId = ''");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.beginRide. User supplies this. */
export type DriverAppBeginRideImpl = (self: DriverApp) => { self: DriverApp; modified: { state: unknown } };

/** Contract-checking wrapper for DriverApp.beginRide. */
export function wrapDriverAppBeginRide(impl: DriverAppBeginRideImpl): (self: DriverApp) => DriverApp {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "assigned"))) {
      preViolations.push("[DriverApp.beginRide] pre violated: self.state = 'assigned'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "en_route"))) {
        postViolations.push("[DriverApp.beginRide] post violated: self.state = 'en_route'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.beginRide (async). User supplies this. */
export type DriverAppBeginRideAsyncImpl = (self: DriverApp) => Promise<{ self: DriverApp; modified: { state: unknown } }>;

/** Contract-checking wrapper for DriverApp.beginRide (async). */
export function wrapDriverAppBeginRideAsync(impl: DriverAppBeginRideAsyncImpl): (self: DriverApp) => Promise<DriverApp> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "assigned"))) {
      preViolations.push("[DriverApp.beginRide] pre violated: self.state = 'assigned'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "en_route"))) {
        postViolations.push("[DriverApp.beginRide] post violated: self.state = 'en_route'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.completeRide. User supplies this. */
export type DriverAppCompleteRideImpl = (self: DriverApp) => { self: DriverApp; modified: { state: unknown } };

/** Contract-checking wrapper for DriverApp.completeRide. */
export function wrapDriverAppCompleteRide(impl: DriverAppCompleteRideImpl): (self: DriverApp) => DriverApp {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "en_route"))) {
      preViolations.push("[DriverApp.completeRide] pre violated: self.state = 'en_route'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "completed"))) {
        postViolations.push("[DriverApp.completeRide] post violated: self.state = 'completed'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.completeRide (async). User supplies this. */
export type DriverAppCompleteRideAsyncImpl = (self: DriverApp) => Promise<{ self: DriverApp; modified: { state: unknown } }>;

/** Contract-checking wrapper for DriverApp.completeRide (async). */
export function wrapDriverAppCompleteRideAsync(impl: DriverAppCompleteRideAsyncImpl): (self: DriverApp) => Promise<DriverApp> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "en_route"))) {
      preViolations.push("[DriverApp.completeRide] pre violated: self.state = 'en_route'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "completed"))) {
        postViolations.push("[DriverApp.completeRide] post violated: self.state = 'completed'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.returnToIdle. User supplies this. */
export type DriverAppReturnToIdleImpl = (self: DriverApp) => { self: DriverApp; modified: { state: unknown } };

/** Contract-checking wrapper for DriverApp.returnToIdle. */
export function wrapDriverAppReturnToIdle(impl: DriverAppReturnToIdleImpl): (self: DriverApp) => DriverApp {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "completed"))) {
      preViolations.push("[DriverApp.returnToIdle] pre violated: self.state = 'completed'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "idle"))) {
        postViolations.push("[DriverApp.returnToIdle] post violated: self.state = 'idle'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverApp.returnToIdle (async). User supplies this. */
export type DriverAppReturnToIdleAsyncImpl = (self: DriverApp) => Promise<{ self: DriverApp; modified: { state: unknown } }>;

/** Contract-checking wrapper for DriverApp.returnToIdle (async). */
export function wrapDriverAppReturnToIdleAsync(impl: DriverAppReturnToIdleAsyncImpl): (self: DriverApp) => Promise<DriverApp> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.state === "completed"))) {
      preViolations.push("[DriverApp.returnToIdle] pre violated: self.state = 'completed'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.state === "idle"))) {
        postViolations.push("[DriverApp.returnToIdle] post violated: self.state = 'idle'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.handleRideRequest. User supplies this. */
export type DispatchEngineHandleRideRequestImpl = (self: DispatchEngine, requestId: string, pickupLat: number, pickupLng: number) => { self: DispatchEngine; modified: { requestId: unknown; currentSearchRadiusKm: unknown; offerAttempts: unknown; isProcessing: unknown; timeSinceRequestMs: unknown } };

/** Contract-checking wrapper for DispatchEngine.handleRideRequest. */
export function wrapDispatchEngineHandleRideRequest(impl: DispatchEngineHandleRideRequestImpl): (self: DispatchEngine, requestId: string, pickupLat: number, pickupLng: number) => DispatchEngine {
  return (self, requestId, pickupLat, pickupLng) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[DispatchEngine.handleRideRequest] pre violated: requestId <> null");
    }
    if (!(!(self.isProcessing))) {
      preViolations.push("[DispatchEngine.handleRideRequest] pre violated: not self.isProcessing");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, pickupLat, pickupLng);
      const postViolations: string[] = [];
      if (!((__result.self.requestId === requestId))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.requestId = requestId");
      }
      if (!((__result.self.currentSearchRadiusKm === 2))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.currentSearchRadiusKm = 2.0");
      }
      if (!((__result.self.offerAttempts === 0))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.offerAttempts = 0");
      }
      if (!((__result.self.isProcessing === true))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.isProcessing = true");
      }
      if (!((__result.self.timeSinceRequestMs === 0))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.timeSinceRequestMs = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.handleRideRequest (async). User supplies this. */
export type DispatchEngineHandleRideRequestAsyncImpl = (self: DispatchEngine, requestId: string, pickupLat: number, pickupLng: number) => Promise<{ self: DispatchEngine; modified: { requestId: unknown; currentSearchRadiusKm: unknown; offerAttempts: unknown; isProcessing: unknown; timeSinceRequestMs: unknown } }>;

/** Contract-checking wrapper for DispatchEngine.handleRideRequest (async). */
export function wrapDispatchEngineHandleRideRequestAsync(impl: DispatchEngineHandleRideRequestAsyncImpl): (self: DispatchEngine, requestId: string, pickupLat: number, pickupLng: number) => Promise<DispatchEngine> {
  return async (self, requestId, pickupLat, pickupLng) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[DispatchEngine.handleRideRequest] pre violated: requestId <> null");
    }
    if (!(!(self.isProcessing))) {
      preViolations.push("[DispatchEngine.handleRideRequest] pre violated: not self.isProcessing");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, pickupLat, pickupLng);
      const postViolations: string[] = [];
      if (!((__result.self.requestId === requestId))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.requestId = requestId");
      }
      if (!((__result.self.currentSearchRadiusKm === 2))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.currentSearchRadiusKm = 2.0");
      }
      if (!((__result.self.offerAttempts === 0))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.offerAttempts = 0");
      }
      if (!((__result.self.isProcessing === true))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.isProcessing = true");
      }
      if (!((__result.self.timeSinceRequestMs === 0))) {
        postViolations.push("[DispatchEngine.handleRideRequest] post violated: self.timeSinceRequestMs = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.rankAndOffer. User supplies this. */
export type DispatchEngineRankAndOfferImpl = (self: DispatchEngine, requestId: string) => { self: DispatchEngine; modified: { offerAttempts: unknown } };

/** Contract-checking wrapper for DispatchEngine.rankAndOffer. */
export function wrapDispatchEngineRankAndOffer(impl: DispatchEngineRankAndOfferImpl): (self: DispatchEngine, requestId: string) => DispatchEngine {
  return (self, requestId) => {
    const preViolations: string[] = [];
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.rankAndOffer] pre violated: self.isProcessing");
    }
    if (!((self.offerAttempts < 10))) {
      preViolations.push("[DispatchEngine.rankAndOffer] pre violated: self.offerAttempts < 10");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offerAttempts": self.offerAttempts,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offerAttempts === (__pre["self.offerAttempts"] + 1)))) {
        postViolations.push("[DispatchEngine.rankAndOffer] post violated: self.offerAttempts = self.offerAttempts@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.rankAndOffer (async). User supplies this. */
export type DispatchEngineRankAndOfferAsyncImpl = (self: DispatchEngine, requestId: string) => Promise<{ self: DispatchEngine; modified: { offerAttempts: unknown } }>;

/** Contract-checking wrapper for DispatchEngine.rankAndOffer (async). */
export function wrapDispatchEngineRankAndOfferAsync(impl: DispatchEngineRankAndOfferAsyncImpl): (self: DispatchEngine, requestId: string) => Promise<DispatchEngine> {
  return async (self, requestId) => {
    const preViolations: string[] = [];
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.rankAndOffer] pre violated: self.isProcessing");
    }
    if (!((self.offerAttempts < 10))) {
      preViolations.push("[DispatchEngine.rankAndOffer] pre violated: self.offerAttempts < 10");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offerAttempts": self.offerAttempts,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offerAttempts === (__pre["self.offerAttempts"] + 1)))) {
        postViolations.push("[DispatchEngine.rankAndOffer] post violated: self.offerAttempts = self.offerAttempts@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.onOfferAccepted. User supplies this. */
export type DispatchEngineOnOfferAcceptedImpl = (self: DispatchEngine, driverId: string, requestId: string) => { self: DispatchEngine; modified: { isProcessing: unknown } };

/** Contract-checking wrapper for DispatchEngine.onOfferAccepted. */
export function wrapDispatchEngineOnOfferAccepted(impl: DispatchEngineOnOfferAcceptedImpl): (self: DispatchEngine, driverId: string, requestId: string) => DispatchEngine {
  return (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DispatchEngine.onOfferAccepted] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DispatchEngine.onOfferAccepted] pre violated: requestId <> null");
    }
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.onOfferAccepted] pre violated: self.isProcessing");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.isProcessing === false))) {
        postViolations.push("[DispatchEngine.onOfferAccepted] post violated: self.isProcessing = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.onOfferAccepted (async). User supplies this. */
export type DispatchEngineOnOfferAcceptedAsyncImpl = (self: DispatchEngine, driverId: string, requestId: string) => Promise<{ self: DispatchEngine; modified: { isProcessing: unknown } }>;

/** Contract-checking wrapper for DispatchEngine.onOfferAccepted (async). */
export function wrapDispatchEngineOnOfferAcceptedAsync(impl: DispatchEngineOnOfferAcceptedAsyncImpl): (self: DispatchEngine, driverId: string, requestId: string) => Promise<DispatchEngine> {
  return async (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DispatchEngine.onOfferAccepted] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DispatchEngine.onOfferAccepted] pre violated: requestId <> null");
    }
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.onOfferAccepted] pre violated: self.isProcessing");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.isProcessing === false))) {
        postViolations.push("[DispatchEngine.onOfferAccepted] post violated: self.isProcessing = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.onOfferExpired. User supplies this. */
export type DispatchEngineOnOfferExpiredImpl = (self: DispatchEngine, driverId: string, requestId: string) => { self: DispatchEngine; modified: { offerAttempts: unknown } };

/** Contract-checking wrapper for DispatchEngine.onOfferExpired. */
export function wrapDispatchEngineOnOfferExpired(impl: DispatchEngineOnOfferExpiredImpl): (self: DispatchEngine, driverId: string, requestId: string) => DispatchEngine {
  return (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DispatchEngine.onOfferExpired] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DispatchEngine.onOfferExpired] pre violated: requestId <> null");
    }
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.onOfferExpired] pre violated: self.isProcessing");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offerAttempts": self.offerAttempts,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offerAttempts === (__pre["self.offerAttempts"] + 1)))) {
        postViolations.push("[DispatchEngine.onOfferExpired] post violated: self.offerAttempts = self.offerAttempts@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.onOfferExpired (async). User supplies this. */
export type DispatchEngineOnOfferExpiredAsyncImpl = (self: DispatchEngine, driverId: string, requestId: string) => Promise<{ self: DispatchEngine; modified: { offerAttempts: unknown } }>;

/** Contract-checking wrapper for DispatchEngine.onOfferExpired (async). */
export function wrapDispatchEngineOnOfferExpiredAsync(impl: DispatchEngineOnOfferExpiredAsyncImpl): (self: DispatchEngine, driverId: string, requestId: string) => Promise<DispatchEngine> {
  return async (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DispatchEngine.onOfferExpired] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DispatchEngine.onOfferExpired] pre violated: requestId <> null");
    }
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.onOfferExpired] pre violated: self.isProcessing");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offerAttempts": self.offerAttempts,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offerAttempts === (__pre["self.offerAttempts"] + 1)))) {
        postViolations.push("[DispatchEngine.onOfferExpired] post violated: self.offerAttempts = self.offerAttempts@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.escalateRadius. User supplies this. */
export type DispatchEngineEscalateRadiusImpl = (self: DispatchEngine) => { self: DispatchEngine; modified: { currentSearchRadiusKm: unknown } };

/** Contract-checking wrapper for DispatchEngine.escalateRadius. */
export function wrapDispatchEngineEscalateRadius(impl: DispatchEngineEscalateRadiusImpl): (self: DispatchEngine) => DispatchEngine {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.escalateRadius] pre violated: self.isProcessing");
    }
    if (!((self.currentSearchRadiusKm === 2))) {
      preViolations.push("[DispatchEngine.escalateRadius] pre violated: self.currentSearchRadiusKm = 2.0");
    }
    if (!((self.timeSinceRequestMs > 30000))) {
      preViolations.push("[DispatchEngine.escalateRadius] pre violated: self.timeSinceRequestMs > 30000");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentSearchRadiusKm === 5))) {
        postViolations.push("[DispatchEngine.escalateRadius] post violated: self.currentSearchRadiusKm = 5.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.escalateRadius (async). User supplies this. */
export type DispatchEngineEscalateRadiusAsyncImpl = (self: DispatchEngine) => Promise<{ self: DispatchEngine; modified: { currentSearchRadiusKm: unknown } }>;

/** Contract-checking wrapper for DispatchEngine.escalateRadius (async). */
export function wrapDispatchEngineEscalateRadiusAsync(impl: DispatchEngineEscalateRadiusAsyncImpl): (self: DispatchEngine) => Promise<DispatchEngine> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.escalateRadius] pre violated: self.isProcessing");
    }
    if (!((self.currentSearchRadiusKm === 2))) {
      preViolations.push("[DispatchEngine.escalateRadius] pre violated: self.currentSearchRadiusKm = 2.0");
    }
    if (!((self.timeSinceRequestMs > 30000))) {
      preViolations.push("[DispatchEngine.escalateRadius] pre violated: self.timeSinceRequestMs > 30000");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentSearchRadiusKm === 5))) {
        postViolations.push("[DispatchEngine.escalateRadius] post violated: self.currentSearchRadiusKm = 5.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.cancelMatching. User supplies this. */
export type DispatchEngineCancelMatchingImpl = (self: DispatchEngine, requestId: string) => { self: DispatchEngine; modified: { isProcessing: unknown; requestId: unknown } };

/** Contract-checking wrapper for DispatchEngine.cancelMatching. */
export function wrapDispatchEngineCancelMatching(impl: DispatchEngineCancelMatchingImpl): (self: DispatchEngine, requestId: string) => DispatchEngine {
  return (self, requestId) => {
    const preViolations: string[] = [];
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.cancelMatching] pre violated: self.isProcessing");
    }
    if (!((requestId === self.requestId))) {
      preViolations.push("[DispatchEngine.cancelMatching] pre violated: requestId = self.requestId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.isProcessing === false))) {
        postViolations.push("[DispatchEngine.cancelMatching] post violated: self.isProcessing = false");
      }
      if (!((__result.self.requestId === ""))) {
        postViolations.push("[DispatchEngine.cancelMatching] post violated: self.requestId = ''");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DispatchEngine.cancelMatching (async). User supplies this. */
export type DispatchEngineCancelMatchingAsyncImpl = (self: DispatchEngine, requestId: string) => Promise<{ self: DispatchEngine; modified: { isProcessing: unknown; requestId: unknown } }>;

/** Contract-checking wrapper for DispatchEngine.cancelMatching (async). */
export function wrapDispatchEngineCancelMatchingAsync(impl: DispatchEngineCancelMatchingAsyncImpl): (self: DispatchEngine, requestId: string) => Promise<DispatchEngine> {
  return async (self, requestId) => {
    const preViolations: string[] = [];
    if (!(self.isProcessing)) {
      preViolations.push("[DispatchEngine.cancelMatching] pre violated: self.isProcessing");
    }
    if (!((requestId === self.requestId))) {
      preViolations.push("[DispatchEngine.cancelMatching] pre violated: requestId = self.requestId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.isProcessing === false))) {
        postViolations.push("[DispatchEngine.cancelMatching] post violated: self.isProcessing = false");
      }
      if (!((__result.self.requestId === ""))) {
        postViolations.push("[DispatchEngine.cancelMatching] post violated: self.requestId = ''");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideRegistry.storeRideRequest. User supplies this. */
export type RideRegistryStoreRideRequestImpl = (self: RideRegistry) => { self: RideRegistry; modified: { rideRequestCount: unknown } };

/** Contract-checking wrapper for RideRegistry.storeRideRequest. */
export function wrapRideRegistryStoreRideRequest(impl: RideRegistryStoreRideRequestImpl): (self: RideRegistry) => RideRegistry {
  return (self) => {
    const __pre = {
      "self.rideRequestCount": self.rideRequestCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rideRequestCount === (__pre["self.rideRequestCount"] + 1)))) {
        postViolations.push("[RideRegistry.storeRideRequest] post violated: self.rideRequestCount = self.rideRequestCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideRegistry.storeRideRequest (async). User supplies this. */
export type RideRegistryStoreRideRequestAsyncImpl = (self: RideRegistry) => Promise<{ self: RideRegistry; modified: { rideRequestCount: unknown } }>;

/** Contract-checking wrapper for RideRegistry.storeRideRequest (async). */
export function wrapRideRegistryStoreRideRequestAsync(impl: RideRegistryStoreRideRequestAsyncImpl): (self: RideRegistry) => Promise<RideRegistry> {
  return async (self) => {
    const __pre = {
      "self.rideRequestCount": self.rideRequestCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rideRequestCount === (__pre["self.rideRequestCount"] + 1)))) {
        postViolations.push("[RideRegistry.storeRideRequest] post violated: self.rideRequestCount = self.rideRequestCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideRegistry.createAssignment. User supplies this. */
export type RideRegistryCreateAssignmentImpl = (self: RideRegistry) => { self: RideRegistry; modified: { assignmentCount: unknown } };

/** Contract-checking wrapper for RideRegistry.createAssignment. */
export function wrapRideRegistryCreateAssignment(impl: RideRegistryCreateAssignmentImpl): (self: RideRegistry) => RideRegistry {
  return (self) => {
    const __pre = {
      "self.assignmentCount": self.assignmentCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.assignmentCount === (__pre["self.assignmentCount"] + 1)))) {
        postViolations.push("[RideRegistry.createAssignment] post violated: self.assignmentCount = self.assignmentCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideRegistry.createAssignment (async). User supplies this. */
export type RideRegistryCreateAssignmentAsyncImpl = (self: RideRegistry) => Promise<{ self: RideRegistry; modified: { assignmentCount: unknown } }>;

/** Contract-checking wrapper for RideRegistry.createAssignment (async). */
export function wrapRideRegistryCreateAssignmentAsync(impl: RideRegistryCreateAssignmentAsyncImpl): (self: RideRegistry) => Promise<RideRegistry> {
  return async (self) => {
    const __pre = {
      "self.assignmentCount": self.assignmentCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.assignmentCount === (__pre["self.assignmentCount"] + 1)))) {
        postViolations.push("[RideRegistry.createAssignment] post violated: self.assignmentCount = self.assignmentCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideRegistry.completeRide. User supplies this. */
export type RideRegistryCompleteRideImpl = (self: RideRegistry, requestId: string) => { self: RideRegistry; modified: { completedRideCount: unknown } };

/** Contract-checking wrapper for RideRegistry.completeRide. */
export function wrapRideRegistryCompleteRide(impl: RideRegistryCompleteRideImpl): (self: RideRegistry, requestId: string) => RideRegistry {
  return (self, requestId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[RideRegistry.completeRide] pre violated: requestId <> null");
    }
    if (!((self.completedRideCount < self.rideRequestCount))) {
      preViolations.push("[RideRegistry.completeRide] pre violated: self.completedRideCount < self.rideRequestCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.completedRideCount": self.completedRideCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.completedRideCount === (__pre["self.completedRideCount"] + 1)))) {
        postViolations.push("[RideRegistry.completeRide] post violated: self.completedRideCount = self.completedRideCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideRegistry.completeRide (async). User supplies this. */
export type RideRegistryCompleteRideAsyncImpl = (self: RideRegistry, requestId: string) => Promise<{ self: RideRegistry; modified: { completedRideCount: unknown } }>;

/** Contract-checking wrapper for RideRegistry.completeRide (async). */
export function wrapRideRegistryCompleteRideAsync(impl: RideRegistryCompleteRideAsyncImpl): (self: RideRegistry, requestId: string) => Promise<RideRegistry> {
  return async (self, requestId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[RideRegistry.completeRide] pre violated: requestId <> null");
    }
    if (!((self.completedRideCount < self.rideRequestCount))) {
      preViolations.push("[RideRegistry.completeRide] pre violated: self.completedRideCount < self.rideRequestCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.completedRideCount": self.completedRideCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.completedRideCount === (__pre["self.completedRideCount"] + 1)))) {
        postViolations.push("[RideRegistry.completeRide] post violated: self.completedRideCount = self.completedRideCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.transitionToAssigned. User supplies this. */
export type DriverStateManagerTransitionToAssignedImpl = (self: DriverStateManager, driverId: string) => { self: DriverStateManager; modified: { driverLock: unknown } };

/** Contract-checking wrapper for DriverStateManager.transitionToAssigned. */
export function wrapDriverStateManagerTransitionToAssigned(impl: DriverStateManagerTransitionToAssignedImpl): (self: DriverStateManager, driverId: string) => DriverStateManager {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.transitionToAssigned] pre violated: driverId <> null");
    }
    if (!((self.driverLock === 0))) {
      preViolations.push("[DriverStateManager.transitionToAssigned] pre violated: self.driverLock = 0");
    }
    if (!((self.idleDriverCount > 0))) {
      preViolations.push("[DriverStateManager.transitionToAssigned] pre violated: self.idleDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 1))) {
        postViolations.push("[DriverStateManager.transitionToAssigned] post violated: self.driverLock = 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.transitionToAssigned (async). User supplies this. */
export type DriverStateManagerTransitionToAssignedAsyncImpl = (self: DriverStateManager, driverId: string) => Promise<{ self: DriverStateManager; modified: { driverLock: unknown } }>;

/** Contract-checking wrapper for DriverStateManager.transitionToAssigned (async). */
export function wrapDriverStateManagerTransitionToAssignedAsync(impl: DriverStateManagerTransitionToAssignedAsyncImpl): (self: DriverStateManager, driverId: string) => Promise<DriverStateManager> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.transitionToAssigned] pre violated: driverId <> null");
    }
    if (!((self.driverLock === 0))) {
      preViolations.push("[DriverStateManager.transitionToAssigned] pre violated: self.driverLock = 0");
    }
    if (!((self.idleDriverCount > 0))) {
      preViolations.push("[DriverStateManager.transitionToAssigned] pre violated: self.idleDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 1))) {
        postViolations.push("[DriverStateManager.transitionToAssigned] post violated: self.driverLock = 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.confirmAssigned. User supplies this. */
export type DriverStateManagerConfirmAssignedImpl = (self: DriverStateManager, driverId: string) => { self: DriverStateManager; modified: { idleDriverCount: unknown; assignedDriverCount: unknown; driverLock: unknown } };

/** Contract-checking wrapper for DriverStateManager.confirmAssigned. */
export function wrapDriverStateManagerConfirmAssigned(impl: DriverStateManagerConfirmAssignedImpl): (self: DriverStateManager, driverId: string) => DriverStateManager {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.confirmAssigned] pre violated: driverId <> null");
    }
    if (!((self.driverLock === 1))) {
      preViolations.push("[DriverStateManager.confirmAssigned] pre violated: self.driverLock = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.idleDriverCount": self.idleDriverCount,
      "self.assignedDriverCount": self.assignedDriverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.idleDriverCount === (__pre["self.idleDriverCount"] - 1)))) {
        postViolations.push("[DriverStateManager.confirmAssigned] post violated: self.idleDriverCount = self.idleDriverCount@pre - 1");
      }
      if (!((__result.self.assignedDriverCount === (__pre["self.assignedDriverCount"] + 1)))) {
        postViolations.push("[DriverStateManager.confirmAssigned] post violated: self.assignedDriverCount = self.assignedDriverCount@pre + 1");
      }
      if (!((__result.self.driverLock === 0))) {
        postViolations.push("[DriverStateManager.confirmAssigned] post violated: self.driverLock = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.confirmAssigned (async). User supplies this. */
export type DriverStateManagerConfirmAssignedAsyncImpl = (self: DriverStateManager, driverId: string) => Promise<{ self: DriverStateManager; modified: { idleDriverCount: unknown; assignedDriverCount: unknown; driverLock: unknown } }>;

/** Contract-checking wrapper for DriverStateManager.confirmAssigned (async). */
export function wrapDriverStateManagerConfirmAssignedAsync(impl: DriverStateManagerConfirmAssignedAsyncImpl): (self: DriverStateManager, driverId: string) => Promise<DriverStateManager> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.confirmAssigned] pre violated: driverId <> null");
    }
    if (!((self.driverLock === 1))) {
      preViolations.push("[DriverStateManager.confirmAssigned] pre violated: self.driverLock = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.idleDriverCount": self.idleDriverCount,
      "self.assignedDriverCount": self.assignedDriverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.idleDriverCount === (__pre["self.idleDriverCount"] - 1)))) {
        postViolations.push("[DriverStateManager.confirmAssigned] post violated: self.idleDriverCount = self.idleDriverCount@pre - 1");
      }
      if (!((__result.self.assignedDriverCount === (__pre["self.assignedDriverCount"] + 1)))) {
        postViolations.push("[DriverStateManager.confirmAssigned] post violated: self.assignedDriverCount = self.assignedDriverCount@pre + 1");
      }
      if (!((__result.self.driverLock === 0))) {
        postViolations.push("[DriverStateManager.confirmAssigned] post violated: self.driverLock = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.transitionToEnRoute. User supplies this. */
export type DriverStateManagerTransitionToEnRouteImpl = (self: DriverStateManager, driverId: string) => { self: DriverStateManager; modified: { assignedDriverCount: unknown; enRouteDriverCount: unknown } };

/** Contract-checking wrapper for DriverStateManager.transitionToEnRoute. */
export function wrapDriverStateManagerTransitionToEnRoute(impl: DriverStateManagerTransitionToEnRouteImpl): (self: DriverStateManager, driverId: string) => DriverStateManager {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.transitionToEnRoute] pre violated: driverId <> null");
    }
    if (!((self.assignedDriverCount > 0))) {
      preViolations.push("[DriverStateManager.transitionToEnRoute] pre violated: self.assignedDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDriverCount": self.assignedDriverCount,
      "self.enRouteDriverCount": self.enRouteDriverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignedDriverCount === (__pre["self.assignedDriverCount"] - 1)))) {
        postViolations.push("[DriverStateManager.transitionToEnRoute] post violated: self.assignedDriverCount = self.assignedDriverCount@pre - 1");
      }
      if (!((__result.self.enRouteDriverCount === (__pre["self.enRouteDriverCount"] + 1)))) {
        postViolations.push("[DriverStateManager.transitionToEnRoute] post violated: self.enRouteDriverCount = self.enRouteDriverCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.transitionToEnRoute (async). User supplies this. */
export type DriverStateManagerTransitionToEnRouteAsyncImpl = (self: DriverStateManager, driverId: string) => Promise<{ self: DriverStateManager; modified: { assignedDriverCount: unknown; enRouteDriverCount: unknown } }>;

/** Contract-checking wrapper for DriverStateManager.transitionToEnRoute (async). */
export function wrapDriverStateManagerTransitionToEnRouteAsync(impl: DriverStateManagerTransitionToEnRouteAsyncImpl): (self: DriverStateManager, driverId: string) => Promise<DriverStateManager> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.transitionToEnRoute] pre violated: driverId <> null");
    }
    if (!((self.assignedDriverCount > 0))) {
      preViolations.push("[DriverStateManager.transitionToEnRoute] pre violated: self.assignedDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDriverCount": self.assignedDriverCount,
      "self.enRouteDriverCount": self.enRouteDriverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignedDriverCount === (__pre["self.assignedDriverCount"] - 1)))) {
        postViolations.push("[DriverStateManager.transitionToEnRoute] post violated: self.assignedDriverCount = self.assignedDriverCount@pre - 1");
      }
      if (!((__result.self.enRouteDriverCount === (__pre["self.enRouteDriverCount"] + 1)))) {
        postViolations.push("[DriverStateManager.transitionToEnRoute] post violated: self.enRouteDriverCount = self.enRouteDriverCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.transitionToCompleted. User supplies this. */
export type DriverStateManagerTransitionToCompletedImpl = (self: DriverStateManager, driverId: string) => { self: DriverStateManager; modified: { enRouteDriverCount: unknown; completedDriverCount: unknown } };

/** Contract-checking wrapper for DriverStateManager.transitionToCompleted. */
export function wrapDriverStateManagerTransitionToCompleted(impl: DriverStateManagerTransitionToCompletedImpl): (self: DriverStateManager, driverId: string) => DriverStateManager {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.transitionToCompleted] pre violated: driverId <> null");
    }
    if (!((self.enRouteDriverCount > 0))) {
      preViolations.push("[DriverStateManager.transitionToCompleted] pre violated: self.enRouteDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.enRouteDriverCount": self.enRouteDriverCount,
      "self.completedDriverCount": self.completedDriverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.enRouteDriverCount === (__pre["self.enRouteDriverCount"] - 1)))) {
        postViolations.push("[DriverStateManager.transitionToCompleted] post violated: self.enRouteDriverCount = self.enRouteDriverCount@pre - 1");
      }
      if (!((__result.self.completedDriverCount === (__pre["self.completedDriverCount"] + 1)))) {
        postViolations.push("[DriverStateManager.transitionToCompleted] post violated: self.completedDriverCount = self.completedDriverCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.transitionToCompleted (async). User supplies this. */
export type DriverStateManagerTransitionToCompletedAsyncImpl = (self: DriverStateManager, driverId: string) => Promise<{ self: DriverStateManager; modified: { enRouteDriverCount: unknown; completedDriverCount: unknown } }>;

/** Contract-checking wrapper for DriverStateManager.transitionToCompleted (async). */
export function wrapDriverStateManagerTransitionToCompletedAsync(impl: DriverStateManagerTransitionToCompletedAsyncImpl): (self: DriverStateManager, driverId: string) => Promise<DriverStateManager> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.transitionToCompleted] pre violated: driverId <> null");
    }
    if (!((self.enRouteDriverCount > 0))) {
      preViolations.push("[DriverStateManager.transitionToCompleted] pre violated: self.enRouteDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.enRouteDriverCount": self.enRouteDriverCount,
      "self.completedDriverCount": self.completedDriverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.enRouteDriverCount === (__pre["self.enRouteDriverCount"] - 1)))) {
        postViolations.push("[DriverStateManager.transitionToCompleted] post violated: self.enRouteDriverCount = self.enRouteDriverCount@pre - 1");
      }
      if (!((__result.self.completedDriverCount === (__pre["self.completedDriverCount"] + 1)))) {
        postViolations.push("[DriverStateManager.transitionToCompleted] post violated: self.completedDriverCount = self.completedDriverCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.returnToIdlePool. User supplies this. */
export type DriverStateManagerReturnToIdlePoolImpl = (self: DriverStateManager, driverId: string) => { self: DriverStateManager; modified: { completedDriverCount: unknown; idleDriverCount: unknown } };

/** Contract-checking wrapper for DriverStateManager.returnToIdlePool. */
export function wrapDriverStateManagerReturnToIdlePool(impl: DriverStateManagerReturnToIdlePoolImpl): (self: DriverStateManager, driverId: string) => DriverStateManager {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.returnToIdlePool] pre violated: driverId <> null");
    }
    if (!((self.completedDriverCount > 0))) {
      preViolations.push("[DriverStateManager.returnToIdlePool] pre violated: self.completedDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.completedDriverCount": self.completedDriverCount,
      "self.idleDriverCount": self.idleDriverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.completedDriverCount === (__pre["self.completedDriverCount"] - 1)))) {
        postViolations.push("[DriverStateManager.returnToIdlePool] post violated: self.completedDriverCount = self.completedDriverCount@pre - 1");
      }
      if (!((__result.self.idleDriverCount === (__pre["self.idleDriverCount"] + 1)))) {
        postViolations.push("[DriverStateManager.returnToIdlePool] post violated: self.idleDriverCount = self.idleDriverCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.returnToIdlePool (async). User supplies this. */
export type DriverStateManagerReturnToIdlePoolAsyncImpl = (self: DriverStateManager, driverId: string) => Promise<{ self: DriverStateManager; modified: { completedDriverCount: unknown; idleDriverCount: unknown } }>;

/** Contract-checking wrapper for DriverStateManager.returnToIdlePool (async). */
export function wrapDriverStateManagerReturnToIdlePoolAsync(impl: DriverStateManagerReturnToIdlePoolAsyncImpl): (self: DriverStateManager, driverId: string) => Promise<DriverStateManager> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.returnToIdlePool] pre violated: driverId <> null");
    }
    if (!((self.completedDriverCount > 0))) {
      preViolations.push("[DriverStateManager.returnToIdlePool] pre violated: self.completedDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.completedDriverCount": self.completedDriverCount,
      "self.idleDriverCount": self.idleDriverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.completedDriverCount === (__pre["self.completedDriverCount"] - 1)))) {
        postViolations.push("[DriverStateManager.returnToIdlePool] post violated: self.completedDriverCount = self.completedDriverCount@pre - 1");
      }
      if (!((__result.self.idleDriverCount === (__pre["self.idleDriverCount"] + 1)))) {
        postViolations.push("[DriverStateManager.returnToIdlePool] post violated: self.idleDriverCount = self.idleDriverCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.acquireLock. User supplies this. */
export type DriverStateManagerAcquireLockImpl = (self: DriverStateManager, driverId: string, requestId: string) => { self: DriverStateManager; modified: { driverLock: unknown } };

/** Contract-checking wrapper for DriverStateManager.acquireLock. */
export function wrapDriverStateManagerAcquireLock(impl: DriverStateManagerAcquireLockImpl): (self: DriverStateManager, driverId: string, requestId: string) => DriverStateManager {
  return (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.acquireLock] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DriverStateManager.acquireLock] pre violated: requestId <> null");
    }
    if (!((self.driverLock === 0))) {
      preViolations.push("[DriverStateManager.acquireLock] pre violated: self.driverLock = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 1))) {
        postViolations.push("[DriverStateManager.acquireLock] post violated: self.driverLock = 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.acquireLock (async). User supplies this. */
export type DriverStateManagerAcquireLockAsyncImpl = (self: DriverStateManager, driverId: string, requestId: string) => Promise<{ self: DriverStateManager; modified: { driverLock: unknown } }>;

/** Contract-checking wrapper for DriverStateManager.acquireLock (async). */
export function wrapDriverStateManagerAcquireLockAsync(impl: DriverStateManagerAcquireLockAsyncImpl): (self: DriverStateManager, driverId: string, requestId: string) => Promise<DriverStateManager> {
  return async (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.acquireLock] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DriverStateManager.acquireLock] pre violated: requestId <> null");
    }
    if (!((self.driverLock === 0))) {
      preViolations.push("[DriverStateManager.acquireLock] pre violated: self.driverLock = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 1))) {
        postViolations.push("[DriverStateManager.acquireLock] post violated: self.driverLock = 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.releaseLock. User supplies this. */
export type DriverStateManagerReleaseLockImpl = (self: DriverStateManager, driverId: string, requestId: string, wasSuccessful: boolean) => { self: DriverStateManager; modified: { driverLock: unknown } };

/** Contract-checking wrapper for DriverStateManager.releaseLock. */
export function wrapDriverStateManagerReleaseLock(impl: DriverStateManagerReleaseLockImpl): (self: DriverStateManager, driverId: string, requestId: string, wasSuccessful: boolean) => DriverStateManager {
  return (self, driverId, requestId, wasSuccessful) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.releaseLock] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DriverStateManager.releaseLock] pre violated: requestId <> null");
    }
    if (!((self.driverLock === 1))) {
      preViolations.push("[DriverStateManager.releaseLock] pre violated: self.driverLock = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId, wasSuccessful);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 0))) {
        postViolations.push("[DriverStateManager.releaseLock] post violated: self.driverLock = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.releaseLock (async). User supplies this. */
export type DriverStateManagerReleaseLockAsyncImpl = (self: DriverStateManager, driverId: string, requestId: string, wasSuccessful: boolean) => Promise<{ self: DriverStateManager; modified: { driverLock: unknown } }>;

/** Contract-checking wrapper for DriverStateManager.releaseLock (async). */
export function wrapDriverStateManagerReleaseLockAsync(impl: DriverStateManagerReleaseLockAsyncImpl): (self: DriverStateManager, driverId: string, requestId: string, wasSuccessful: boolean) => Promise<DriverStateManager> {
  return async (self, driverId, requestId, wasSuccessful) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.releaseLock] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DriverStateManager.releaseLock] pre violated: requestId <> null");
    }
    if (!((self.driverLock === 1))) {
      preViolations.push("[DriverStateManager.releaseLock] pre violated: self.driverLock = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId, wasSuccessful);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 0))) {
        postViolations.push("[DriverStateManager.releaseLock] post violated: self.driverLock = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.rejectDoubleAssignment. User supplies this. */
export type DriverStateManagerRejectDoubleAssignmentImpl = (self: DriverStateManager, driverId: string, requestId: string) => { self: DriverStateManager; modified: {} };

/** Contract-checking wrapper for DriverStateManager.rejectDoubleAssignment. */
export function wrapDriverStateManagerRejectDoubleAssignment(impl: DriverStateManagerRejectDoubleAssignmentImpl): (self: DriverStateManager, driverId: string, requestId: string) => DriverStateManager {
  return (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.rejectDoubleAssignment] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DriverStateManager.rejectDoubleAssignment] pre violated: requestId <> null");
    }
    if (!(((self.assignedDriverCount > 0) || (self.enRouteDriverCount > 0)))) {
      preViolations.push("[DriverStateManager.rejectDoubleAssignment] pre violated: self.assignedDriverCount > 0 or self.enRouteDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.rejectDoubleAssignment (async). User supplies this. */
export type DriverStateManagerRejectDoubleAssignmentAsyncImpl = (self: DriverStateManager, driverId: string, requestId: string) => Promise<{ self: DriverStateManager; modified: {} }>;

/** Contract-checking wrapper for DriverStateManager.rejectDoubleAssignment (async). */
export function wrapDriverStateManagerRejectDoubleAssignmentAsync(impl: DriverStateManagerRejectDoubleAssignmentAsyncImpl): (self: DriverStateManager, driverId: string, requestId: string) => Promise<DriverStateManager> {
  return async (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.rejectDoubleAssignment] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[DriverStateManager.rejectDoubleAssignment] pre violated: requestId <> null");
    }
    if (!(((self.assignedDriverCount > 0) || (self.enRouteDriverCount > 0)))) {
      preViolations.push("[DriverStateManager.rejectDoubleAssignment] pre violated: self.assignedDriverCount > 0 or self.enRouteDriverCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.rejectStateSkip. User supplies this. */
export type DriverStateManagerRejectStateSkipImpl = (self: DriverStateManager, driverId: string, fromState: string, toState: string) => { self: DriverStateManager; modified: {} };

/** Contract-checking wrapper for DriverStateManager.rejectStateSkip. */
export function wrapDriverStateManagerRejectStateSkip(impl: DriverStateManagerRejectStateSkipImpl): (self: DriverStateManager, driverId: string, fromState: string, toState: string) => DriverStateManager {
  return (self, driverId, fromState, toState) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.rejectStateSkip] pre violated: driverId <> null");
    }
    if (!((fromState !== null))) {
      preViolations.push("[DriverStateManager.rejectStateSkip] pre violated: fromState <> null");
    }
    if (!((toState !== null))) {
      preViolations.push("[DriverStateManager.rejectStateSkip] pre violated: toState <> null");
    }
    if (!(((((((((fromState === "idle") && (toState === "en_route")) || ((fromState === "idle") && (toState === "completed"))) || ((fromState === "assigned") && (toState === "completed"))) || ((fromState === "en_route") && (toState === "idle"))) || ((fromState === "en_route") && (toState === "assigned"))) || ((fromState === "completed") && (toState === "en_route"))) || ((fromState === "completed") && (toState === "assigned"))))) {
      preViolations.push("[DriverStateManager.rejectStateSkip] pre violated: (fromState = 'idle' and toState = 'en_route') or\n         (fromState = 'idle' and toState = 'completed') or\n         (fromState = 'assigned' and toState = 'completed') or\n         (fromState = 'en_route' and toState = 'idle') or\n         (fromState = 'en_route' and toState = 'assigned') or\n         (fromState = 'completed' and toState = 'en_route') or\n         (fromState = 'completed' and toState = 'assigned')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, fromState, toState);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DriverStateManager.rejectStateSkip (async). User supplies this. */
export type DriverStateManagerRejectStateSkipAsyncImpl = (self: DriverStateManager, driverId: string, fromState: string, toState: string) => Promise<{ self: DriverStateManager; modified: {} }>;

/** Contract-checking wrapper for DriverStateManager.rejectStateSkip (async). */
export function wrapDriverStateManagerRejectStateSkipAsync(impl: DriverStateManagerRejectStateSkipAsyncImpl): (self: DriverStateManager, driverId: string, fromState: string, toState: string) => Promise<DriverStateManager> {
  return async (self, driverId, fromState, toState) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[DriverStateManager.rejectStateSkip] pre violated: driverId <> null");
    }
    if (!((fromState !== null))) {
      preViolations.push("[DriverStateManager.rejectStateSkip] pre violated: fromState <> null");
    }
    if (!((toState !== null))) {
      preViolations.push("[DriverStateManager.rejectStateSkip] pre violated: toState <> null");
    }
    if (!(((((((((fromState === "idle") && (toState === "en_route")) || ((fromState === "idle") && (toState === "completed"))) || ((fromState === "assigned") && (toState === "completed"))) || ((fromState === "en_route") && (toState === "idle"))) || ((fromState === "en_route") && (toState === "assigned"))) || ((fromState === "completed") && (toState === "en_route"))) || ((fromState === "completed") && (toState === "assigned"))))) {
      preViolations.push("[DriverStateManager.rejectStateSkip] pre violated: (fromState = 'idle' and toState = 'en_route') or\n         (fromState = 'idle' and toState = 'completed') or\n         (fromState = 'assigned' and toState = 'completed') or\n         (fromState = 'en_route' and toState = 'idle') or\n         (fromState = 'en_route' and toState = 'assigned') or\n         (fromState = 'completed' and toState = 'en_route') or\n         (fromState = 'completed' and toState = 'assigned')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, fromState, toState);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OfferService.createOffer. User supplies this. */
export type OfferServiceCreateOfferImpl = (self: OfferService, driverId: string, requestId: string, rideDesc: string) => { self: OfferService; modified: { activeOfferCount: unknown } };

/** Contract-checking wrapper for OfferService.createOffer. */
export function wrapOfferServiceCreateOffer(impl: OfferServiceCreateOfferImpl): (self: OfferService, driverId: string, requestId: string, rideDesc: string) => OfferService {
  return (self, driverId, requestId, rideDesc) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[OfferService.createOffer] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[OfferService.createOffer] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeOfferCount": self.activeOfferCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId, rideDesc);
      const postViolations: string[] = [];
      if (!((__result.self.activeOfferCount === (__pre["self.activeOfferCount"] + 1)))) {
        postViolations.push("[OfferService.createOffer] post violated: self.activeOfferCount = self.activeOfferCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OfferService.createOffer (async). User supplies this. */
export type OfferServiceCreateOfferAsyncImpl = (self: OfferService, driverId: string, requestId: string, rideDesc: string) => Promise<{ self: OfferService; modified: { activeOfferCount: unknown } }>;

/** Contract-checking wrapper for OfferService.createOffer (async). */
export function wrapOfferServiceCreateOfferAsync(impl: OfferServiceCreateOfferAsyncImpl): (self: OfferService, driverId: string, requestId: string, rideDesc: string) => Promise<OfferService> {
  return async (self, driverId, requestId, rideDesc) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[OfferService.createOffer] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[OfferService.createOffer] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeOfferCount": self.activeOfferCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId, rideDesc);
      const postViolations: string[] = [];
      if (!((__result.self.activeOfferCount === (__pre["self.activeOfferCount"] + 1)))) {
        postViolations.push("[OfferService.createOffer] post violated: self.activeOfferCount = self.activeOfferCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OfferService.acceptOffer. User supplies this. */
export type OfferServiceAcceptOfferImpl = (self: OfferService, offerId: string) => { self: OfferService; modified: { activeOfferCount: unknown; acceptedOfferCount: unknown } };

/** Contract-checking wrapper for OfferService.acceptOffer. */
export function wrapOfferServiceAcceptOffer(impl: OfferServiceAcceptOfferImpl): (self: OfferService, offerId: string) => OfferService {
  return (self, offerId) => {
    const preViolations: string[] = [];
    if (!((offerId !== null))) {
      preViolations.push("[OfferService.acceptOffer] pre violated: offerId <> null");
    }
    if (!((self.activeOfferCount > 0))) {
      preViolations.push("[OfferService.acceptOffer] pre violated: self.activeOfferCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeOfferCount": self.activeOfferCount,
      "self.acceptedOfferCount": self.acceptedOfferCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, offerId);
      const postViolations: string[] = [];
      if (!((__result.self.activeOfferCount === (__pre["self.activeOfferCount"] - 1)))) {
        postViolations.push("[OfferService.acceptOffer] post violated: self.activeOfferCount = self.activeOfferCount@pre - 1");
      }
      if (!((__result.self.acceptedOfferCount === (__pre["self.acceptedOfferCount"] + 1)))) {
        postViolations.push("[OfferService.acceptOffer] post violated: self.acceptedOfferCount = self.acceptedOfferCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OfferService.acceptOffer (async). User supplies this. */
export type OfferServiceAcceptOfferAsyncImpl = (self: OfferService, offerId: string) => Promise<{ self: OfferService; modified: { activeOfferCount: unknown; acceptedOfferCount: unknown } }>;

/** Contract-checking wrapper for OfferService.acceptOffer (async). */
export function wrapOfferServiceAcceptOfferAsync(impl: OfferServiceAcceptOfferAsyncImpl): (self: OfferService, offerId: string) => Promise<OfferService> {
  return async (self, offerId) => {
    const preViolations: string[] = [];
    if (!((offerId !== null))) {
      preViolations.push("[OfferService.acceptOffer] pre violated: offerId <> null");
    }
    if (!((self.activeOfferCount > 0))) {
      preViolations.push("[OfferService.acceptOffer] pre violated: self.activeOfferCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeOfferCount": self.activeOfferCount,
      "self.acceptedOfferCount": self.acceptedOfferCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, offerId);
      const postViolations: string[] = [];
      if (!((__result.self.activeOfferCount === (__pre["self.activeOfferCount"] - 1)))) {
        postViolations.push("[OfferService.acceptOffer] post violated: self.activeOfferCount = self.activeOfferCount@pre - 1");
      }
      if (!((__result.self.acceptedOfferCount === (__pre["self.acceptedOfferCount"] + 1)))) {
        postViolations.push("[OfferService.acceptOffer] post violated: self.acceptedOfferCount = self.acceptedOfferCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OfferService.expireOffer. User supplies this. */
export type OfferServiceExpireOfferImpl = (self: OfferService, offerId: string) => { self: OfferService; modified: { activeOfferCount: unknown; expiredOfferCount: unknown } };

/** Contract-checking wrapper for OfferService.expireOffer. */
export function wrapOfferServiceExpireOffer(impl: OfferServiceExpireOfferImpl): (self: OfferService, offerId: string) => OfferService {
  return (self, offerId) => {
    const preViolations: string[] = [];
    if (!((offerId !== null))) {
      preViolations.push("[OfferService.expireOffer] pre violated: offerId <> null");
    }
    if (!((self.activeOfferCount > 0))) {
      preViolations.push("[OfferService.expireOffer] pre violated: self.activeOfferCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeOfferCount": self.activeOfferCount,
      "self.expiredOfferCount": self.expiredOfferCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, offerId);
      const postViolations: string[] = [];
      if (!((__result.self.activeOfferCount === (__pre["self.activeOfferCount"] - 1)))) {
        postViolations.push("[OfferService.expireOffer] post violated: self.activeOfferCount = self.activeOfferCount@pre - 1");
      }
      if (!((__result.self.expiredOfferCount === (__pre["self.expiredOfferCount"] + 1)))) {
        postViolations.push("[OfferService.expireOffer] post violated: self.expiredOfferCount = self.expiredOfferCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OfferService.expireOffer (async). User supplies this. */
export type OfferServiceExpireOfferAsyncImpl = (self: OfferService, offerId: string) => Promise<{ self: OfferService; modified: { activeOfferCount: unknown; expiredOfferCount: unknown } }>;

/** Contract-checking wrapper for OfferService.expireOffer (async). */
export function wrapOfferServiceExpireOfferAsync(impl: OfferServiceExpireOfferAsyncImpl): (self: OfferService, offerId: string) => Promise<OfferService> {
  return async (self, offerId) => {
    const preViolations: string[] = [];
    if (!((offerId !== null))) {
      preViolations.push("[OfferService.expireOffer] pre violated: offerId <> null");
    }
    if (!((self.activeOfferCount > 0))) {
      preViolations.push("[OfferService.expireOffer] pre violated: self.activeOfferCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.activeOfferCount": self.activeOfferCount,
      "self.expiredOfferCount": self.expiredOfferCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, offerId);
      const postViolations: string[] = [];
      if (!((__result.self.activeOfferCount === (__pre["self.activeOfferCount"] - 1)))) {
        postViolations.push("[OfferService.expireOffer] post violated: self.activeOfferCount = self.activeOfferCount@pre - 1");
      }
      if (!((__result.self.expiredOfferCount === (__pre["self.expiredOfferCount"] + 1)))) {
        postViolations.push("[OfferService.expireOffer] post violated: self.expiredOfferCount = self.expiredOfferCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OfferService.rejectExcessiveLatency. User supplies this. */
export type OfferServiceRejectExcessiveLatencyImpl = (self: OfferService, timeSinceRequest: number, requestId: string) => { self: OfferService; modified: {} };

/** Contract-checking wrapper for OfferService.rejectExcessiveLatency. */
export function wrapOfferServiceRejectExcessiveLatency(impl: OfferServiceRejectExcessiveLatencyImpl): (self: OfferService, timeSinceRequest: number, requestId: string) => OfferService {
  return (self, timeSinceRequest, requestId) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest > 30))) {
      preViolations.push("[OfferService.rejectExcessiveLatency] pre violated: timeSinceRequest > 30.0");
    }
    if (!((requestId !== null))) {
      preViolations.push("[OfferService.rejectExcessiveLatency] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timeSinceRequest, requestId);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OfferService.rejectExcessiveLatency (async). User supplies this. */
export type OfferServiceRejectExcessiveLatencyAsyncImpl = (self: OfferService, timeSinceRequest: number, requestId: string) => Promise<{ self: OfferService; modified: {} }>;

/** Contract-checking wrapper for OfferService.rejectExcessiveLatency (async). */
export function wrapOfferServiceRejectExcessiveLatencyAsync(impl: OfferServiceRejectExcessiveLatencyAsyncImpl): (self: OfferService, timeSinceRequest: number, requestId: string) => Promise<OfferService> {
  return async (self, timeSinceRequest, requestId) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest > 30))) {
      preViolations.push("[OfferService.rejectExcessiveLatency] pre violated: timeSinceRequest > 30.0");
    }
    if (!((requestId !== null))) {
      preViolations.push("[OfferService.rejectExcessiveLatency] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timeSinceRequest, requestId);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LatencyMonitor.startMonitoring. User supplies this. */
export type LatencyMonitorStartMonitoringImpl = (self: LatencyMonitor, requestId: string, startTimeMs: number) => { self: LatencyMonitor; modified: { requestStartTimeMs: unknown; firstOfferTimeMs: unknown; currentLatencyMs: unknown; latencyBudgetExceeded: unknown } };

/** Contract-checking wrapper for LatencyMonitor.startMonitoring. */
export function wrapLatencyMonitorStartMonitoring(impl: LatencyMonitorStartMonitoringImpl): (self: LatencyMonitor, requestId: string, startTimeMs: number) => LatencyMonitor {
  return (self, requestId, startTimeMs) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[LatencyMonitor.startMonitoring] pre violated: requestId <> null");
    }
    if (!((startTimeMs >= 0))) {
      preViolations.push("[LatencyMonitor.startMonitoring] pre violated: startTimeMs >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, startTimeMs);
      const postViolations: string[] = [];
      if (!((__result.self.requestStartTimeMs === startTimeMs))) {
        postViolations.push("[LatencyMonitor.startMonitoring] post violated: self.requestStartTimeMs = startTimeMs");
      }
      if (!((__result.self.firstOfferTimeMs === 0))) {
        postViolations.push("[LatencyMonitor.startMonitoring] post violated: self.firstOfferTimeMs = 0");
      }
      if (!((__result.self.currentLatencyMs === 0))) {
        postViolations.push("[LatencyMonitor.startMonitoring] post violated: self.currentLatencyMs = 0");
      }
      if (!((__result.self.latencyBudgetExceeded === false))) {
        postViolations.push("[LatencyMonitor.startMonitoring] post violated: self.latencyBudgetExceeded = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LatencyMonitor.startMonitoring (async). User supplies this. */
export type LatencyMonitorStartMonitoringAsyncImpl = (self: LatencyMonitor, requestId: string, startTimeMs: number) => Promise<{ self: LatencyMonitor; modified: { requestStartTimeMs: unknown; firstOfferTimeMs: unknown; currentLatencyMs: unknown; latencyBudgetExceeded: unknown } }>;

/** Contract-checking wrapper for LatencyMonitor.startMonitoring (async). */
export function wrapLatencyMonitorStartMonitoringAsync(impl: LatencyMonitorStartMonitoringAsyncImpl): (self: LatencyMonitor, requestId: string, startTimeMs: number) => Promise<LatencyMonitor> {
  return async (self, requestId, startTimeMs) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[LatencyMonitor.startMonitoring] pre violated: requestId <> null");
    }
    if (!((startTimeMs >= 0))) {
      preViolations.push("[LatencyMonitor.startMonitoring] pre violated: startTimeMs >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, startTimeMs);
      const postViolations: string[] = [];
      if (!((__result.self.requestStartTimeMs === startTimeMs))) {
        postViolations.push("[LatencyMonitor.startMonitoring] post violated: self.requestStartTimeMs = startTimeMs");
      }
      if (!((__result.self.firstOfferTimeMs === 0))) {
        postViolations.push("[LatencyMonitor.startMonitoring] post violated: self.firstOfferTimeMs = 0");
      }
      if (!((__result.self.currentLatencyMs === 0))) {
        postViolations.push("[LatencyMonitor.startMonitoring] post violated: self.currentLatencyMs = 0");
      }
      if (!((__result.self.latencyBudgetExceeded === false))) {
        postViolations.push("[LatencyMonitor.startMonitoring] post violated: self.latencyBudgetExceeded = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LatencyMonitor.recordFirstOffer. User supplies this. */
export type LatencyMonitorRecordFirstOfferImpl = (self: LatencyMonitor, currentTimeMs: number) => { self: LatencyMonitor; modified: { firstOfferTimeMs: unknown; currentLatencyMs: unknown } };

/** Contract-checking wrapper for LatencyMonitor.recordFirstOffer. */
export function wrapLatencyMonitorRecordFirstOffer(impl: LatencyMonitorRecordFirstOfferImpl): (self: LatencyMonitor, currentTimeMs: number) => LatencyMonitor {
  return (self, currentTimeMs) => {
    const preViolations: string[] = [];
    if (!((currentTimeMs >= self.requestStartTimeMs))) {
      preViolations.push("[LatencyMonitor.recordFirstOffer] pre violated: currentTimeMs >= self.requestStartTimeMs");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTimeMs);
      const postViolations: string[] = [];
      if (!((__result.self.firstOfferTimeMs === currentTimeMs))) {
        postViolations.push("[LatencyMonitor.recordFirstOffer] post violated: self.firstOfferTimeMs = currentTimeMs");
      }
      if (!((__result.self.currentLatencyMs === (currentTimeMs - __result.self.requestStartTimeMs)))) {
        postViolations.push("[LatencyMonitor.recordFirstOffer] post violated: self.currentLatencyMs = currentTimeMs - self.requestStartTimeMs");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LatencyMonitor.recordFirstOffer (async). User supplies this. */
export type LatencyMonitorRecordFirstOfferAsyncImpl = (self: LatencyMonitor, currentTimeMs: number) => Promise<{ self: LatencyMonitor; modified: { firstOfferTimeMs: unknown; currentLatencyMs: unknown } }>;

/** Contract-checking wrapper for LatencyMonitor.recordFirstOffer (async). */
export function wrapLatencyMonitorRecordFirstOfferAsync(impl: LatencyMonitorRecordFirstOfferAsyncImpl): (self: LatencyMonitor, currentTimeMs: number) => Promise<LatencyMonitor> {
  return async (self, currentTimeMs) => {
    const preViolations: string[] = [];
    if (!((currentTimeMs >= self.requestStartTimeMs))) {
      preViolations.push("[LatencyMonitor.recordFirstOffer] pre violated: currentTimeMs >= self.requestStartTimeMs");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTimeMs);
      const postViolations: string[] = [];
      if (!((__result.self.firstOfferTimeMs === currentTimeMs))) {
        postViolations.push("[LatencyMonitor.recordFirstOffer] post violated: self.firstOfferTimeMs = currentTimeMs");
      }
      if (!((__result.self.currentLatencyMs === (currentTimeMs - __result.self.requestStartTimeMs)))) {
        postViolations.push("[LatencyMonitor.recordFirstOffer] post violated: self.currentLatencyMs = currentTimeMs - self.requestStartTimeMs");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LatencyMonitor.checkLatency. User supplies this. */
export type LatencyMonitorCheckLatencyImpl = (self: LatencyMonitor, currentTimeMs: number) => { self: LatencyMonitor; modified: { currentLatencyMs: unknown; latencyBudgetExceeded: unknown } };

/** Contract-checking wrapper for LatencyMonitor.checkLatency. */
export function wrapLatencyMonitorCheckLatency(impl: LatencyMonitorCheckLatencyImpl): (self: LatencyMonitor, currentTimeMs: number) => LatencyMonitor {
  return (self, currentTimeMs) => {
    const preViolations: string[] = [];
    if (!((currentTimeMs >= 0))) {
      preViolations.push("[LatencyMonitor.checkLatency] pre violated: currentTimeMs >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTimeMs);
      const postViolations: string[] = [];
      if (!((__result.self.currentLatencyMs === (currentTimeMs - __result.self.requestStartTimeMs)))) {
        postViolations.push("[LatencyMonitor.checkLatency] post violated: self.currentLatencyMs = currentTimeMs - self.requestStartTimeMs");
      }
      if (!(((((currentTimeMs - __result.self.requestStartTimeMs) > __result.self.maxLatencyBudgetMs)) ? ((__result.self.latencyBudgetExceeded === true)) : ((__result.self.latencyBudgetExceeded === false))))) {
        postViolations.push("[LatencyMonitor.checkLatency] post violated: if (currentTimeMs - self.requestStartTimeMs) > self.maxLatencyBudgetMs then self.latencyBudgetExceeded = true else self.latencyBudgetExceeded = false endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LatencyMonitor.checkLatency (async). User supplies this. */
export type LatencyMonitorCheckLatencyAsyncImpl = (self: LatencyMonitor, currentTimeMs: number) => Promise<{ self: LatencyMonitor; modified: { currentLatencyMs: unknown; latencyBudgetExceeded: unknown } }>;

/** Contract-checking wrapper for LatencyMonitor.checkLatency (async). */
export function wrapLatencyMonitorCheckLatencyAsync(impl: LatencyMonitorCheckLatencyAsyncImpl): (self: LatencyMonitor, currentTimeMs: number) => Promise<LatencyMonitor> {
  return async (self, currentTimeMs) => {
    const preViolations: string[] = [];
    if (!((currentTimeMs >= 0))) {
      preViolations.push("[LatencyMonitor.checkLatency] pre violated: currentTimeMs >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTimeMs);
      const postViolations: string[] = [];
      if (!((__result.self.currentLatencyMs === (currentTimeMs - __result.self.requestStartTimeMs)))) {
        postViolations.push("[LatencyMonitor.checkLatency] post violated: self.currentLatencyMs = currentTimeMs - self.requestStartTimeMs");
      }
      if (!(((((currentTimeMs - __result.self.requestStartTimeMs) > __result.self.maxLatencyBudgetMs)) ? ((__result.self.latencyBudgetExceeded === true)) : ((__result.self.latencyBudgetExceeded === false))))) {
        postViolations.push("[LatencyMonitor.checkLatency] post violated: if (currentTimeMs - self.requestStartTimeMs) > self.maxLatencyBudgetMs then self.latencyBudgetExceeded = true else self.latencyBudgetExceeded = false endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LatencyMonitor.resetMonitor. User supplies this. */
export type LatencyMonitorResetMonitorImpl = (self: LatencyMonitor) => { self: LatencyMonitor; modified: { requestStartTimeMs: unknown; firstOfferTimeMs: unknown; currentLatencyMs: unknown; latencyBudgetExceeded: unknown } };

/** Contract-checking wrapper for LatencyMonitor.resetMonitor. */
export function wrapLatencyMonitorResetMonitor(impl: LatencyMonitorResetMonitorImpl): (self: LatencyMonitor) => LatencyMonitor {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.requestStartTimeMs === 0))) {
        postViolations.push("[LatencyMonitor.resetMonitor] post violated: self.requestStartTimeMs = 0");
      }
      if (!((__result.self.firstOfferTimeMs === 0))) {
        postViolations.push("[LatencyMonitor.resetMonitor] post violated: self.firstOfferTimeMs = 0");
      }
      if (!((__result.self.currentLatencyMs === 0))) {
        postViolations.push("[LatencyMonitor.resetMonitor] post violated: self.currentLatencyMs = 0");
      }
      if (!((__result.self.latencyBudgetExceeded === false))) {
        postViolations.push("[LatencyMonitor.resetMonitor] post violated: self.latencyBudgetExceeded = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for LatencyMonitor.resetMonitor (async). User supplies this. */
export type LatencyMonitorResetMonitorAsyncImpl = (self: LatencyMonitor) => Promise<{ self: LatencyMonitor; modified: { requestStartTimeMs: unknown; firstOfferTimeMs: unknown; currentLatencyMs: unknown; latencyBudgetExceeded: unknown } }>;

/** Contract-checking wrapper for LatencyMonitor.resetMonitor (async). */
export function wrapLatencyMonitorResetMonitorAsync(impl: LatencyMonitorResetMonitorAsyncImpl): (self: LatencyMonitor) => Promise<LatencyMonitor> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.requestStartTimeMs === 0))) {
        postViolations.push("[LatencyMonitor.resetMonitor] post violated: self.requestStartTimeMs = 0");
      }
      if (!((__result.self.firstOfferTimeMs === 0))) {
        postViolations.push("[LatencyMonitor.resetMonitor] post violated: self.firstOfferTimeMs = 0");
      }
      if (!((__result.self.currentLatencyMs === 0))) {
        postViolations.push("[LatencyMonitor.resetMonitor] post violated: self.currentLatencyMs = 0");
      }
      if (!((__result.self.latencyBudgetExceeded === false))) {
        postViolations.push("[LatencyMonitor.resetMonitor] post violated: self.latencyBudgetExceeded = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for GeoSpatialIndex.indexDriver. User supplies this. */
export type GeoSpatialIndexIndexDriverImpl = (self: GeoSpatialIndex) => { self: GeoSpatialIndex; modified: { driverCount: unknown } };

/** Contract-checking wrapper for GeoSpatialIndex.indexDriver. */
export function wrapGeoSpatialIndexIndexDriver(impl: GeoSpatialIndexIndexDriverImpl): (self: GeoSpatialIndex) => GeoSpatialIndex {
  return (self) => {
    const __pre = {
      "self.driverCount": self.driverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.driverCount === (__pre["self.driverCount"] + 1)))) {
        postViolations.push("[GeoSpatialIndex.indexDriver] post violated: self.driverCount = self.driverCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for GeoSpatialIndex.indexDriver (async). User supplies this. */
export type GeoSpatialIndexIndexDriverAsyncImpl = (self: GeoSpatialIndex) => Promise<{ self: GeoSpatialIndex; modified: { driverCount: unknown } }>;

/** Contract-checking wrapper for GeoSpatialIndex.indexDriver (async). */
export function wrapGeoSpatialIndexIndexDriverAsync(impl: GeoSpatialIndexIndexDriverAsyncImpl): (self: GeoSpatialIndex) => Promise<GeoSpatialIndex> {
  return async (self) => {
    const __pre = {
      "self.driverCount": self.driverCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.driverCount === (__pre["self.driverCount"] + 1)))) {
        postViolations.push("[GeoSpatialIndex.indexDriver] post violated: self.driverCount = self.driverCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for GeoSpatialIndex.queryNearbyDrivers. User supplies this. */
export type GeoSpatialIndexQueryNearbyDriversImpl = (self: GeoSpatialIndex, centerLat: number, centerLng: number, radiusKm: number) => { self: GeoSpatialIndex; modified: { centerLatitude: unknown; centerLongitude: unknown; currentSearchRadiusKm: unknown; lastQueryResultCount: unknown } };

/** Contract-checking wrapper for GeoSpatialIndex.queryNearbyDrivers. */
export function wrapGeoSpatialIndexQueryNearbyDrivers(impl: GeoSpatialIndexQueryNearbyDriversImpl): (self: GeoSpatialIndex, centerLat: number, centerLng: number, radiusKm: number) => GeoSpatialIndex {
  return (self, centerLat, centerLng, radiusKm) => {
    const preViolations: string[] = [];
    if (!((centerLat >= -(90)))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: centerLat >= -90.0");
    }
    if (!((centerLat <= 90))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: centerLat <= 90.0");
    }
    if (!((centerLng >= -(180)))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: centerLng >= -180.0");
    }
    if (!((centerLng <= 180))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: centerLng <= 180.0");
    }
    if (!((radiusKm > 0))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: radiusKm > 0.0");
    }
    if (!(((radiusKm === 2) || (radiusKm === 5)))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: radiusKm = 2.0 or radiusKm = 5.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, centerLat, centerLng, radiusKm);
      const postViolations: string[] = [];
      if (!((__result.self.centerLatitude === centerLat))) {
        postViolations.push("[GeoSpatialIndex.queryNearbyDrivers] post violated: self.centerLatitude = centerLat");
      }
      if (!((__result.self.centerLongitude === centerLng))) {
        postViolations.push("[GeoSpatialIndex.queryNearbyDrivers] post violated: self.centerLongitude = centerLng");
      }
      if (!((__result.self.currentSearchRadiusKm === radiusKm))) {
        postViolations.push("[GeoSpatialIndex.queryNearbyDrivers] post violated: self.currentSearchRadiusKm = radiusKm");
      }
      if (!((__result.self.lastQueryResultCount === __result.self.driverCount))) {
        postViolations.push("[GeoSpatialIndex.queryNearbyDrivers] post violated: self.lastQueryResultCount = self.driverCount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for GeoSpatialIndex.queryNearbyDrivers (async). User supplies this. */
export type GeoSpatialIndexQueryNearbyDriversAsyncImpl = (self: GeoSpatialIndex, centerLat: number, centerLng: number, radiusKm: number) => Promise<{ self: GeoSpatialIndex; modified: { centerLatitude: unknown; centerLongitude: unknown; currentSearchRadiusKm: unknown; lastQueryResultCount: unknown } }>;

/** Contract-checking wrapper for GeoSpatialIndex.queryNearbyDrivers (async). */
export function wrapGeoSpatialIndexQueryNearbyDriversAsync(impl: GeoSpatialIndexQueryNearbyDriversAsyncImpl): (self: GeoSpatialIndex, centerLat: number, centerLng: number, radiusKm: number) => Promise<GeoSpatialIndex> {
  return async (self, centerLat, centerLng, radiusKm) => {
    const preViolations: string[] = [];
    if (!((centerLat >= -(90)))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: centerLat >= -90.0");
    }
    if (!((centerLat <= 90))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: centerLat <= 90.0");
    }
    if (!((centerLng >= -(180)))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: centerLng >= -180.0");
    }
    if (!((centerLng <= 180))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: centerLng <= 180.0");
    }
    if (!((radiusKm > 0))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: radiusKm > 0.0");
    }
    if (!(((radiusKm === 2) || (radiusKm === 5)))) {
      preViolations.push("[GeoSpatialIndex.queryNearbyDrivers] pre violated: radiusKm = 2.0 or radiusKm = 5.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, centerLat, centerLng, radiusKm);
      const postViolations: string[] = [];
      if (!((__result.self.centerLatitude === centerLat))) {
        postViolations.push("[GeoSpatialIndex.queryNearbyDrivers] post violated: self.centerLatitude = centerLat");
      }
      if (!((__result.self.centerLongitude === centerLng))) {
        postViolations.push("[GeoSpatialIndex.queryNearbyDrivers] post violated: self.centerLongitude = centerLng");
      }
      if (!((__result.self.currentSearchRadiusKm === radiusKm))) {
        postViolations.push("[GeoSpatialIndex.queryNearbyDrivers] post violated: self.currentSearchRadiusKm = radiusKm");
      }
      if (!((__result.self.lastQueryResultCount === __result.self.driverCount))) {
        postViolations.push("[GeoSpatialIndex.queryNearbyDrivers] post violated: self.lastQueryResultCount = self.driverCount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.assignDriver. User supplies this. */
export type RideDispatchSystemAssignDriverImpl = (self: RideDispatchSystem, requestId: string, driverId: string) => { self: RideDispatchSystem; modified: { assignmentsPerRide: unknown; assignedDrivers: unknown; idleDrivers: unknown; activeRides: unknown; offersAccepted: unknown; driverMutualExclusionHolds: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.assignDriver. */
export function wrapRideDispatchSystemAssignDriver(impl: RideDispatchSystemAssignDriverImpl): (self: RideDispatchSystem, requestId: string, driverId: string) => RideDispatchSystem {
  return (self, requestId, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: requestId <> null");
    }
    if (!((self.assignmentsPerRide === 0))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: self.assignmentsPerRide = 0");
    }
    if (!((self.idleDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: self.idleDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDrivers": self.assignedDrivers,
      "self.idleDrivers": self.idleDrivers,
      "self.activeRides": self.activeRides,
      "self.offersAccepted": self.offersAccepted,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignmentsPerRide === 1))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.assignmentsPerRide = 1");
      }
      if (!((__result.self.assignedDrivers === (__pre["self.assignedDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.assignedDrivers = self.assignedDrivers@pre + 1");
      }
      if (!((__result.self.idleDrivers === (__pre["self.idleDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.idleDrivers = self.idleDrivers@pre - 1");
      }
      if (!((__result.self.activeRides === (__pre["self.activeRides"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.activeRides = self.activeRides@pre + 1");
      }
      if (!((__result.self.offersAccepted === (__pre["self.offersAccepted"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.offersAccepted = self.offersAccepted@pre + 1");
      }
      if (!((__result.self.driverMutualExclusionHolds === true))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.driverMutualExclusionHolds = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.assignDriver (async). User supplies this. */
export type RideDispatchSystemAssignDriverAsyncImpl = (self: RideDispatchSystem, requestId: string, driverId: string) => Promise<{ self: RideDispatchSystem; modified: { assignmentsPerRide: unknown; assignedDrivers: unknown; idleDrivers: unknown; activeRides: unknown; offersAccepted: unknown; driverMutualExclusionHolds: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.assignDriver (async). */
export function wrapRideDispatchSystemAssignDriverAsync(impl: RideDispatchSystemAssignDriverAsyncImpl): (self: RideDispatchSystem, requestId: string, driverId: string) => Promise<RideDispatchSystem> {
  return async (self, requestId, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: requestId <> null");
    }
    if (!((self.assignmentsPerRide === 0))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: self.assignmentsPerRide = 0");
    }
    if (!((self.idleDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.assignDriver] pre violated: self.idleDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDrivers": self.assignedDrivers,
      "self.idleDrivers": self.idleDrivers,
      "self.activeRides": self.activeRides,
      "self.offersAccepted": self.offersAccepted,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignmentsPerRide === 1))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.assignmentsPerRide = 1");
      }
      if (!((__result.self.assignedDrivers === (__pre["self.assignedDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.assignedDrivers = self.assignedDrivers@pre + 1");
      }
      if (!((__result.self.idleDrivers === (__pre["self.idleDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.idleDrivers = self.idleDrivers@pre - 1");
      }
      if (!((__result.self.activeRides === (__pre["self.activeRides"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.activeRides = self.activeRides@pre + 1");
      }
      if (!((__result.self.offersAccepted === (__pre["self.offersAccepted"] + 1)))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.offersAccepted = self.offersAccepted@pre + 1");
      }
      if (!((__result.self.driverMutualExclusionHolds === true))) {
        postViolations.push("[RideDispatchSystem.assignDriver] post violated: self.driverMutualExclusionHolds = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.driverEnRoute. User supplies this. */
export type RideDispatchSystemDriverEnRouteImpl = (self: RideDispatchSystem, driverId: string) => { self: RideDispatchSystem; modified: { assignedDrivers: unknown; enRouteDrivers: unknown; driverStateTransitionValid: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.driverEnRoute. */
export function wrapRideDispatchSystemDriverEnRoute(impl: RideDispatchSystemDriverEnRouteImpl): (self: RideDispatchSystem, driverId: string) => RideDispatchSystem {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.driverEnRoute] pre violated: driverId <> null");
    }
    if (!((self.assignedDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.driverEnRoute] pre violated: self.assignedDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDrivers": self.assignedDrivers,
      "self.enRouteDrivers": self.enRouteDrivers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignedDrivers === (__pre["self.assignedDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.assignedDrivers = self.assignedDrivers@pre - 1");
      }
      if (!((__result.self.enRouteDrivers === (__pre["self.enRouteDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.enRouteDrivers = self.enRouteDrivers@pre + 1");
      }
      if (!((__result.self.driverStateTransitionValid === true))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.driverStateTransitionValid = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.driverEnRoute (async). User supplies this. */
export type RideDispatchSystemDriverEnRouteAsyncImpl = (self: RideDispatchSystem, driverId: string) => Promise<{ self: RideDispatchSystem; modified: { assignedDrivers: unknown; enRouteDrivers: unknown; driverStateTransitionValid: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.driverEnRoute (async). */
export function wrapRideDispatchSystemDriverEnRouteAsync(impl: RideDispatchSystemDriverEnRouteAsyncImpl): (self: RideDispatchSystem, driverId: string) => Promise<RideDispatchSystem> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.driverEnRoute] pre violated: driverId <> null");
    }
    if (!((self.assignedDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.driverEnRoute] pre violated: self.assignedDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.assignedDrivers": self.assignedDrivers,
      "self.enRouteDrivers": self.enRouteDrivers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.assignedDrivers === (__pre["self.assignedDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.assignedDrivers = self.assignedDrivers@pre - 1");
      }
      if (!((__result.self.enRouteDrivers === (__pre["self.enRouteDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.enRouteDrivers = self.enRouteDrivers@pre + 1");
      }
      if (!((__result.self.driverStateTransitionValid === true))) {
        postViolations.push("[RideDispatchSystem.driverEnRoute] post violated: self.driverStateTransitionValid = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.completeRide. User supplies this. */
export type RideDispatchSystemCompleteRideImpl = (self: RideDispatchSystem, driverId: string) => { self: RideDispatchSystem; modified: { enRouteDrivers: unknown; completedRides: unknown; activeRides: unknown; driverStateTransitionValid: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.completeRide. */
export function wrapRideDispatchSystemCompleteRide(impl: RideDispatchSystemCompleteRideImpl): (self: RideDispatchSystem, driverId: string) => RideDispatchSystem {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.completeRide] pre violated: driverId <> null");
    }
    if (!((self.enRouteDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.completeRide] pre violated: self.enRouteDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.enRouteDrivers": self.enRouteDrivers,
      "self.completedRides": self.completedRides,
      "self.activeRides": self.activeRides,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.enRouteDrivers === (__pre["self.enRouteDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.enRouteDrivers = self.enRouteDrivers@pre - 1");
      }
      if (!((__result.self.completedRides === (__pre["self.completedRides"] + 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.completedRides = self.completedRides@pre + 1");
      }
      if (!((__result.self.activeRides === (__pre["self.activeRides"] - 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.activeRides = self.activeRides@pre - 1");
      }
      if (!((__result.self.driverStateTransitionValid === true))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.driverStateTransitionValid = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.completeRide (async). User supplies this. */
export type RideDispatchSystemCompleteRideAsyncImpl = (self: RideDispatchSystem, driverId: string) => Promise<{ self: RideDispatchSystem; modified: { enRouteDrivers: unknown; completedRides: unknown; activeRides: unknown; driverStateTransitionValid: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.completeRide (async). */
export function wrapRideDispatchSystemCompleteRideAsync(impl: RideDispatchSystemCompleteRideAsyncImpl): (self: RideDispatchSystem, driverId: string) => Promise<RideDispatchSystem> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.completeRide] pre violated: driverId <> null");
    }
    if (!((self.enRouteDrivers > 0))) {
      preViolations.push("[RideDispatchSystem.completeRide] pre violated: self.enRouteDrivers > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.enRouteDrivers": self.enRouteDrivers,
      "self.completedRides": self.completedRides,
      "self.activeRides": self.activeRides,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.enRouteDrivers === (__pre["self.enRouteDrivers"] - 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.enRouteDrivers = self.enRouteDrivers@pre - 1");
      }
      if (!((__result.self.completedRides === (__pre["self.completedRides"] + 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.completedRides = self.completedRides@pre + 1");
      }
      if (!((__result.self.activeRides === (__pre["self.activeRides"] - 1)))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.activeRides = self.activeRides@pre - 1");
      }
      if (!((__result.self.driverStateTransitionValid === true))) {
        postViolations.push("[RideDispatchSystem.completeRide] post violated: self.driverStateTransitionValid = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.attemptFirstOffer. User supplies this. */
export type RideDispatchSystemAttemptFirstOfferImpl = (self: RideDispatchSystem, timeSinceRequest: number, requestId: string) => { self: RideDispatchSystem; modified: { offersMade: unknown; maxAssignmentLatencySec: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.attemptFirstOffer. */
export function wrapRideDispatchSystemAttemptFirstOffer(impl: RideDispatchSystemAttemptFirstOfferImpl): (self: RideDispatchSystem, timeSinceRequest: number, requestId: string) => RideDispatchSystem {
  return (self, timeSinceRequest, requestId) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest >= 0))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: timeSinceRequest >= 0.0");
    }
    if (!((timeSinceRequest <= 30))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: timeSinceRequest <= 30.0");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: requestId <> null");
    }
    if (!((self.offersMade === 0))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: self.offersMade = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offersMade": self.offersMade,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timeSinceRequest, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offersMade === (__pre["self.offersMade"] + 1)))) {
        postViolations.push("[RideDispatchSystem.attemptFirstOffer] post violated: self.offersMade = self.offersMade@pre + 1");
      }
      if (!((__result.self.maxAssignmentLatencySec === timeSinceRequest))) {
        postViolations.push("[RideDispatchSystem.attemptFirstOffer] post violated: self.maxAssignmentLatencySec = timeSinceRequest");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.attemptFirstOffer (async). User supplies this. */
export type RideDispatchSystemAttemptFirstOfferAsyncImpl = (self: RideDispatchSystem, timeSinceRequest: number, requestId: string) => Promise<{ self: RideDispatchSystem; modified: { offersMade: unknown; maxAssignmentLatencySec: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.attemptFirstOffer (async). */
export function wrapRideDispatchSystemAttemptFirstOfferAsync(impl: RideDispatchSystemAttemptFirstOfferAsyncImpl): (self: RideDispatchSystem, timeSinceRequest: number, requestId: string) => Promise<RideDispatchSystem> {
  return async (self, timeSinceRequest, requestId) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest >= 0))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: timeSinceRequest >= 0.0");
    }
    if (!((timeSinceRequest <= 30))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: timeSinceRequest <= 30.0");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: requestId <> null");
    }
    if (!((self.offersMade === 0))) {
      preViolations.push("[RideDispatchSystem.attemptFirstOffer] pre violated: self.offersMade = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offersMade": self.offersMade,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timeSinceRequest, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offersMade === (__pre["self.offersMade"] + 1)))) {
        postViolations.push("[RideDispatchSystem.attemptFirstOffer] post violated: self.offersMade = self.offersMade@pre + 1");
      }
      if (!((__result.self.maxAssignmentLatencySec === timeSinceRequest))) {
        postViolations.push("[RideDispatchSystem.attemptFirstOffer] post violated: self.maxAssignmentLatencySec = timeSinceRequest");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.expireOffer. User supplies this. */
export type RideDispatchSystemExpireOfferImpl = (self: RideDispatchSystem, driverId: string, requestId: string) => { self: RideDispatchSystem; modified: {} };

/** Contract-checking wrapper for RideDispatchSystem.expireOffer. */
export function wrapRideDispatchSystemExpireOffer(impl: RideDispatchSystemExpireOfferImpl): (self: RideDispatchSystem, driverId: string, requestId: string) => RideDispatchSystem {
  return (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.expireOffer] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.expireOffer] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offersExpired": self.offersExpired,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offersExpired === (__pre["self.offersExpired"] + 1)))) {
        postViolations.push("[RideDispatchSystem.expireOffer] post violated: self.offersExpired = self.offersExpired@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.expireOffer (async). User supplies this. */
export type RideDispatchSystemExpireOfferAsyncImpl = (self: RideDispatchSystem, driverId: string, requestId: string) => Promise<{ self: RideDispatchSystem; modified: {} }>;

/** Contract-checking wrapper for RideDispatchSystem.expireOffer (async). */
export function wrapRideDispatchSystemExpireOfferAsync(impl: RideDispatchSystemExpireOfferAsyncImpl): (self: RideDispatchSystem, driverId: string, requestId: string) => Promise<RideDispatchSystem> {
  return async (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.expireOffer] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystem.expireOffer] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.offersExpired": self.offersExpired,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.offersExpired === (__pre["self.offersExpired"] + 1)))) {
        postViolations.push("[RideDispatchSystem.expireOffer] post violated: self.offersExpired = self.offersExpired@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.escalateRadius. User supplies this. */
export type RideDispatchSystemEscalateRadiusImpl = (self: RideDispatchSystem, timeSinceRequest: number) => { self: RideDispatchSystem; modified: {} };

/** Contract-checking wrapper for RideDispatchSystem.escalateRadius. */
export function wrapRideDispatchSystemEscalateRadius(impl: RideDispatchSystemEscalateRadiusImpl): (self: RideDispatchSystem, timeSinceRequest: number) => RideDispatchSystem {
  return (self, timeSinceRequest) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest > 30))) {
      preViolations.push("[RideDispatchSystem.escalateRadius] pre violated: timeSinceRequest > 30.0");
    }
    if (!((timeSinceRequest <= 60))) {
      preViolations.push("[RideDispatchSystem.escalateRadius] pre violated: timeSinceRequest <= 60.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timeSinceRequest);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.escalateRadius (async). User supplies this. */
export type RideDispatchSystemEscalateRadiusAsyncImpl = (self: RideDispatchSystem, timeSinceRequest: number) => Promise<{ self: RideDispatchSystem; modified: {} }>;

/** Contract-checking wrapper for RideDispatchSystem.escalateRadius (async). */
export function wrapRideDispatchSystemEscalateRadiusAsync(impl: RideDispatchSystemEscalateRadiusAsyncImpl): (self: RideDispatchSystem, timeSinceRequest: number) => Promise<RideDispatchSystem> {
  return async (self, timeSinceRequest) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest > 30))) {
      preViolations.push("[RideDispatchSystem.escalateRadius] pre violated: timeSinceRequest > 30.0");
    }
    if (!((timeSinceRequest <= 60))) {
      preViolations.push("[RideDispatchSystem.escalateRadius] pre violated: timeSinceRequest <= 60.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timeSinceRequest);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.returnToIdle. User supplies this. */
export type RideDispatchSystemReturnToIdleImpl = (self: RideDispatchSystem, driverId: string) => { self: RideDispatchSystem; modified: { completedRides: unknown; idleDrivers: unknown } };

/** Contract-checking wrapper for RideDispatchSystem.returnToIdle. */
export function wrapRideDispatchSystemReturnToIdle(impl: RideDispatchSystemReturnToIdleImpl): (self: RideDispatchSystem, driverId: string) => RideDispatchSystem {
  return (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.returnToIdle] pre violated: driverId <> null");
    }
    if (!((self.completedRides > 0))) {
      preViolations.push("[RideDispatchSystem.returnToIdle] pre violated: self.completedRides > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.completedRides": self.completedRides,
      "self.idleDrivers": self.idleDrivers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.completedRides === (__pre["self.completedRides"] - 1)))) {
        postViolations.push("[RideDispatchSystem.returnToIdle] post violated: self.completedRides = self.completedRides@pre - 1");
      }
      if (!((__result.self.idleDrivers === (__pre["self.idleDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.returnToIdle] post violated: self.idleDrivers = self.idleDrivers@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystem.returnToIdle (async). User supplies this. */
export type RideDispatchSystemReturnToIdleAsyncImpl = (self: RideDispatchSystem, driverId: string) => Promise<{ self: RideDispatchSystem; modified: { completedRides: unknown; idleDrivers: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystem.returnToIdle (async). */
export function wrapRideDispatchSystemReturnToIdleAsync(impl: RideDispatchSystemReturnToIdleAsyncImpl): (self: RideDispatchSystem, driverId: string) => Promise<RideDispatchSystem> {
  return async (self, driverId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystem.returnToIdle] pre violated: driverId <> null");
    }
    if (!((self.completedRides > 0))) {
      preViolations.push("[RideDispatchSystem.returnToIdle] pre violated: self.completedRides > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.completedRides": self.completedRides,
      "self.idleDrivers": self.idleDrivers,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId);
      const postViolations: string[] = [];
      if (!((__result.self.completedRides === (__pre["self.completedRides"] - 1)))) {
        postViolations.push("[RideDispatchSystem.returnToIdle] post violated: self.completedRides = self.completedRides@pre - 1");
      }
      if (!((__result.self.idleDrivers === (__pre["self.idleDrivers"] + 1)))) {
        postViolations.push("[RideDispatchSystem.returnToIdle] post violated: self.idleDrivers = self.idleDrivers@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.rejectDoubleAssignment. User supplies this. */
export type RideDispatchSystemFormalizedRejectDoubleAssignmentImpl = (self: RideDispatchSystemFormalized, driverId: string, requestId: string) => { self: RideDispatchSystemFormalized; modified: {} };

/** Contract-checking wrapper for RideDispatchSystemFormalized.rejectDoubleAssignment. */
export function wrapRideDispatchSystemFormalizedRejectDoubleAssignment(impl: RideDispatchSystemFormalizedRejectDoubleAssignmentImpl): (self: RideDispatchSystemFormalized, driverId: string, requestId: string) => RideDispatchSystemFormalized {
  return (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectDoubleAssignment] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectDoubleAssignment] pre violated: requestId <> null");
    }
    if (!((self.driverMutualExclusionHolds === false))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectDoubleAssignment] pre violated: self.driverMutualExclusionHolds = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.driverMutualExclusionHolds === false))) {
        postViolations.push("[RideDispatchSystemFormalized.rejectDoubleAssignment] post violated: self.driverMutualExclusionHolds = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.rejectDoubleAssignment (async). User supplies this. */
export type RideDispatchSystemFormalizedRejectDoubleAssignmentAsyncImpl = (self: RideDispatchSystemFormalized, driverId: string, requestId: string) => Promise<{ self: RideDispatchSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for RideDispatchSystemFormalized.rejectDoubleAssignment (async). */
export function wrapRideDispatchSystemFormalizedRejectDoubleAssignmentAsync(impl: RideDispatchSystemFormalizedRejectDoubleAssignmentAsyncImpl): (self: RideDispatchSystemFormalized, driverId: string, requestId: string) => Promise<RideDispatchSystemFormalized> {
  return async (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectDoubleAssignment] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectDoubleAssignment] pre violated: requestId <> null");
    }
    if (!((self.driverMutualExclusionHolds === false))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectDoubleAssignment] pre violated: self.driverMutualExclusionHolds = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.driverMutualExclusionHolds === false))) {
        postViolations.push("[RideDispatchSystemFormalized.rejectDoubleAssignment] post violated: self.driverMutualExclusionHolds = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.rejectStateSkip. User supplies this. */
export type RideDispatchSystemFormalizedRejectStateSkipImpl = (self: RideDispatchSystemFormalized, driverId: string, fromState: string, toState: string) => { self: RideDispatchSystemFormalized; modified: {} };

/** Contract-checking wrapper for RideDispatchSystemFormalized.rejectStateSkip. */
export function wrapRideDispatchSystemFormalizedRejectStateSkip(impl: RideDispatchSystemFormalizedRejectStateSkipImpl): (self: RideDispatchSystemFormalized, driverId: string, fromState: string, toState: string) => RideDispatchSystemFormalized {
  return (self, driverId, fromState, toState) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] pre violated: driverId <> null");
    }
    if (!((fromState !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] pre violated: fromState <> null");
    }
    if (!((toState !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] pre violated: toState <> null");
    }
    if (!(((((((((fromState === "idle") && (toState === "en_route")) || ((fromState === "idle") && (toState === "completed"))) || ((fromState === "assigned") && (toState === "completed"))) || ((fromState === "en_route") && (toState === "idle"))) || ((fromState === "en_route") && (toState === "assigned"))) || ((fromState === "completed") && (toState === "en_route"))) || ((fromState === "completed") && (toState === "assigned"))))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] pre violated: (fromState = 'idle' and toState = 'en_route') or\n         (fromState = 'idle' and toState = 'completed') or\n         (fromState = 'assigned' and toState = 'completed') or\n         (fromState = 'en_route' and toState = 'idle') or\n         (fromState = 'en_route' and toState = 'assigned') or\n         (fromState = 'completed' and toState = 'en_route') or\n         (fromState = 'completed' and toState = 'assigned')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.driverStateTransitionValid": self.driverStateTransitionValid,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, fromState, toState);
      const postViolations: string[] = [];
      if (!((__result.self.driverStateTransitionValid === __pre["self.driverStateTransitionValid"]))) {
        postViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] post violated: self.driverStateTransitionValid = self.driverStateTransitionValid@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.rejectStateSkip (async). User supplies this. */
export type RideDispatchSystemFormalizedRejectStateSkipAsyncImpl = (self: RideDispatchSystemFormalized, driverId: string, fromState: string, toState: string) => Promise<{ self: RideDispatchSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for RideDispatchSystemFormalized.rejectStateSkip (async). */
export function wrapRideDispatchSystemFormalizedRejectStateSkipAsync(impl: RideDispatchSystemFormalizedRejectStateSkipAsyncImpl): (self: RideDispatchSystemFormalized, driverId: string, fromState: string, toState: string) => Promise<RideDispatchSystemFormalized> {
  return async (self, driverId, fromState, toState) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] pre violated: driverId <> null");
    }
    if (!((fromState !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] pre violated: fromState <> null");
    }
    if (!((toState !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] pre violated: toState <> null");
    }
    if (!(((((((((fromState === "idle") && (toState === "en_route")) || ((fromState === "idle") && (toState === "completed"))) || ((fromState === "assigned") && (toState === "completed"))) || ((fromState === "en_route") && (toState === "idle"))) || ((fromState === "en_route") && (toState === "assigned"))) || ((fromState === "completed") && (toState === "en_route"))) || ((fromState === "completed") && (toState === "assigned"))))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] pre violated: (fromState = 'idle' and toState = 'en_route') or\n         (fromState = 'idle' and toState = 'completed') or\n         (fromState = 'assigned' and toState = 'completed') or\n         (fromState = 'en_route' and toState = 'idle') or\n         (fromState = 'en_route' and toState = 'assigned') or\n         (fromState = 'completed' and toState = 'en_route') or\n         (fromState = 'completed' and toState = 'assigned')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.driverStateTransitionValid": self.driverStateTransitionValid,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, fromState, toState);
      const postViolations: string[] = [];
      if (!((__result.self.driverStateTransitionValid === __pre["self.driverStateTransitionValid"]))) {
        postViolations.push("[RideDispatchSystemFormalized.rejectStateSkip] post violated: self.driverStateTransitionValid = self.driverStateTransitionValid@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.rejectExcessiveLatency. User supplies this. */
export type RideDispatchSystemFormalizedRejectExcessiveLatencyImpl = (self: RideDispatchSystemFormalized, timeSinceRequest: number, requestId: string) => { self: RideDispatchSystemFormalized; modified: { maxAssignmentLatencySec: unknown } };

/** Contract-checking wrapper for RideDispatchSystemFormalized.rejectExcessiveLatency. */
export function wrapRideDispatchSystemFormalizedRejectExcessiveLatency(impl: RideDispatchSystemFormalizedRejectExcessiveLatencyImpl): (self: RideDispatchSystemFormalized, timeSinceRequest: number, requestId: string) => RideDispatchSystemFormalized {
  return (self, timeSinceRequest, requestId) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest > 30))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectExcessiveLatency] pre violated: timeSinceRequest > 30.0");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectExcessiveLatency] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timeSinceRequest, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.maxAssignmentLatencySec === timeSinceRequest))) {
        postViolations.push("[RideDispatchSystemFormalized.rejectExcessiveLatency] post violated: self.maxAssignmentLatencySec = timeSinceRequest");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.rejectExcessiveLatency (async). User supplies this. */
export type RideDispatchSystemFormalizedRejectExcessiveLatencyAsyncImpl = (self: RideDispatchSystemFormalized, timeSinceRequest: number, requestId: string) => Promise<{ self: RideDispatchSystemFormalized; modified: { maxAssignmentLatencySec: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystemFormalized.rejectExcessiveLatency (async). */
export function wrapRideDispatchSystemFormalizedRejectExcessiveLatencyAsync(impl: RideDispatchSystemFormalizedRejectExcessiveLatencyAsyncImpl): (self: RideDispatchSystemFormalized, timeSinceRequest: number, requestId: string) => Promise<RideDispatchSystemFormalized> {
  return async (self, timeSinceRequest, requestId) => {
    const preViolations: string[] = [];
    if (!((timeSinceRequest > 30))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectExcessiveLatency] pre violated: timeSinceRequest > 30.0");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.rejectExcessiveLatency] pre violated: requestId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timeSinceRequest, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.maxAssignmentLatencySec === timeSinceRequest))) {
        postViolations.push("[RideDispatchSystemFormalized.rejectExcessiveLatency] post violated: self.maxAssignmentLatencySec = timeSinceRequest");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.acquireDriverLock. User supplies this. */
export type RideDispatchSystemFormalizedAcquireDriverLockImpl = (self: RideDispatchSystemFormalized, driverId: string, requestId: string) => { self: RideDispatchSystemFormalized; modified: { driverLock: unknown } };

/** Contract-checking wrapper for RideDispatchSystemFormalized.acquireDriverLock. */
export function wrapRideDispatchSystemFormalizedAcquireDriverLock(impl: RideDispatchSystemFormalizedAcquireDriverLockImpl): (self: RideDispatchSystemFormalized, driverId: string, requestId: string) => RideDispatchSystemFormalized {
  return (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.acquireDriverLock] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.acquireDriverLock] pre violated: requestId <> null");
    }
    if (!((self.driverLock === 0))) {
      preViolations.push("[RideDispatchSystemFormalized.acquireDriverLock] pre violated: self.driverLock = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 1))) {
        postViolations.push("[RideDispatchSystemFormalized.acquireDriverLock] post violated: self.driverLock = 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.acquireDriverLock (async). User supplies this. */
export type RideDispatchSystemFormalizedAcquireDriverLockAsyncImpl = (self: RideDispatchSystemFormalized, driverId: string, requestId: string) => Promise<{ self: RideDispatchSystemFormalized; modified: { driverLock: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystemFormalized.acquireDriverLock (async). */
export function wrapRideDispatchSystemFormalizedAcquireDriverLockAsync(impl: RideDispatchSystemFormalizedAcquireDriverLockAsyncImpl): (self: RideDispatchSystemFormalized, driverId: string, requestId: string) => Promise<RideDispatchSystemFormalized> {
  return async (self, driverId, requestId) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.acquireDriverLock] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.acquireDriverLock] pre violated: requestId <> null");
    }
    if (!((self.driverLock === 0))) {
      preViolations.push("[RideDispatchSystemFormalized.acquireDriverLock] pre violated: self.driverLock = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 1))) {
        postViolations.push("[RideDispatchSystemFormalized.acquireDriverLock] post violated: self.driverLock = 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.releaseDriverLock. User supplies this. */
export type RideDispatchSystemFormalizedReleaseDriverLockImpl = (self: RideDispatchSystemFormalized, driverId: string, requestId: string, wasSuccessful: boolean) => { self: RideDispatchSystemFormalized; modified: { driverLock: unknown } };

/** Contract-checking wrapper for RideDispatchSystemFormalized.releaseDriverLock. */
export function wrapRideDispatchSystemFormalizedReleaseDriverLock(impl: RideDispatchSystemFormalizedReleaseDriverLockImpl): (self: RideDispatchSystemFormalized, driverId: string, requestId: string, wasSuccessful: boolean) => RideDispatchSystemFormalized {
  return (self, driverId, requestId, wasSuccessful) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.releaseDriverLock] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.releaseDriverLock] pre violated: requestId <> null");
    }
    if (!((self.driverLock === 1))) {
      preViolations.push("[RideDispatchSystemFormalized.releaseDriverLock] pre violated: self.driverLock = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, driverId, requestId, wasSuccessful);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 0))) {
        postViolations.push("[RideDispatchSystemFormalized.releaseDriverLock] post violated: self.driverLock = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.releaseDriverLock (async). User supplies this. */
export type RideDispatchSystemFormalizedReleaseDriverLockAsyncImpl = (self: RideDispatchSystemFormalized, driverId: string, requestId: string, wasSuccessful: boolean) => Promise<{ self: RideDispatchSystemFormalized; modified: { driverLock: unknown } }>;

/** Contract-checking wrapper for RideDispatchSystemFormalized.releaseDriverLock (async). */
export function wrapRideDispatchSystemFormalizedReleaseDriverLockAsync(impl: RideDispatchSystemFormalizedReleaseDriverLockAsyncImpl): (self: RideDispatchSystemFormalized, driverId: string, requestId: string, wasSuccessful: boolean) => Promise<RideDispatchSystemFormalized> {
  return async (self, driverId, requestId, wasSuccessful) => {
    const preViolations: string[] = [];
    if (!((driverId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.releaseDriverLock] pre violated: driverId <> null");
    }
    if (!((requestId !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.releaseDriverLock] pre violated: requestId <> null");
    }
    if (!((self.driverLock === 1))) {
      preViolations.push("[RideDispatchSystemFormalized.releaseDriverLock] pre violated: self.driverLock = 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, driverId, requestId, wasSuccessful);
      const postViolations: string[] = [];
      if (!((__result.self.driverLock === 0))) {
        postViolations.push("[RideDispatchSystemFormalized.releaseDriverLock] post violated: self.driverLock = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.logComplianceViolation. User supplies this. */
export type RideDispatchSystemFormalizedLogComplianceViolationImpl = (self: RideDispatchSystemFormalized, violationCode: string, detail: string) => { self: RideDispatchSystemFormalized; modified: {} };

/** Contract-checking wrapper for RideDispatchSystemFormalized.logComplianceViolation. */
export function wrapRideDispatchSystemFormalizedLogComplianceViolation(impl: RideDispatchSystemFormalizedLogComplianceViolationImpl): (self: RideDispatchSystemFormalized, violationCode: string, detail: string) => RideDispatchSystemFormalized {
  return (self, violationCode, detail) => {
    const preViolations: string[] = [];
    if (!((violationCode !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: violationCode <> null");
    }
    if (!((detail !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: detail <> null");
    }
    if (!((self.lawfulBasis !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: self.lawfulBasis <> null");
    }
    if (!((self.pciScope !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: self.pciScope <> null");
    }
    if (!((self.dataRetentionDays > 0))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: self.dataRetentionDays > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, violationCode, detail);
      const postViolations: string[] = [];
      if (!((__result.self.lawfulBasis !== null))) {
        postViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] post violated: self.lawfulBasis <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for RideDispatchSystemFormalized.logComplianceViolation (async). User supplies this. */
export type RideDispatchSystemFormalizedLogComplianceViolationAsyncImpl = (self: RideDispatchSystemFormalized, violationCode: string, detail: string) => Promise<{ self: RideDispatchSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for RideDispatchSystemFormalized.logComplianceViolation (async). */
export function wrapRideDispatchSystemFormalizedLogComplianceViolationAsync(impl: RideDispatchSystemFormalizedLogComplianceViolationAsyncImpl): (self: RideDispatchSystemFormalized, violationCode: string, detail: string) => Promise<RideDispatchSystemFormalized> {
  return async (self, violationCode, detail) => {
    const preViolations: string[] = [];
    if (!((violationCode !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: violationCode <> null");
    }
    if (!((detail !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: detail <> null");
    }
    if (!((self.lawfulBasis !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: self.lawfulBasis <> null");
    }
    if (!((self.pciScope !== null))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: self.pciScope <> null");
    }
    if (!((self.dataRetentionDays > 0))) {
      preViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] pre violated: self.dataRetentionDays > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, violationCode, detail);
      const postViolations: string[] = [];
      if (!((__result.self.lawfulBasis !== null))) {
        postViolations.push("[RideDispatchSystemFormalized.logComplianceViolation] post violated: self.lawfulBasis <> null");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}


// Helper function to recursively deep clone self states for transactional rollback
function __cloneSelf(obj: any): any {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Set) {
    return new Set(Array.from(obj).map(__cloneSelf));
  }
  if (Array.isArray(obj)) {
    return obj.map(__cloneSelf);
  }
  const copy = {} as any;
  for (const k of Object.keys(obj)) {
    copy[k] = __cloneSelf(obj[k]);
  }
  return copy;
}


// ─── Commitment lifecycle registry ───

/** Lifecycle states a commitment can be in. */
export type CommitmentState = "pending" | "fulfilled" | "violated";

/** A commitment + its current lifecycle state. */
export interface CommitmentLifecycle<C> {
  readonly commitment: C;
  readonly state: CommitmentState;
}

/**
 * Phase 10.7 transition event. Fired on register and on every
 * state change. `previousState` is null for the initial
 * register; `timestamp` uses `Date.now()` (epoch millis).
 */
export interface CommitmentTransition<C> {
  readonly commitment: C;
  readonly previousState: CommitmentState | null;
  readonly newState: CommitmentState;
  readonly timestamp: number;
}

/** Optional callback fired on every transition. */
export type TransitionListener<C> = (event: CommitmentTransition<C>) => void;

/**
 * Generic in-memory registry. Tracks commitments by their string
 * identity and enforces terminal-state transitions. Optionally
 * notifies a listener on every transition.
 */
export class CommitmentRegistry {
  private readonly entries: Map<string, CommitmentLifecycle<unknown>> = new Map();
  private readonly listener: TransitionListener<unknown> | null;

  constructor(listener?: TransitionListener<unknown>) {
    this.listener = listener ?? null;
  }

  register<C>(id: string, commitment: C): void {
    if (this.entries.has(id)) {
      throw new Error(`commitment '${id}' already registered`);
    }
    this.entries.set(id, { commitment, state: "pending" });
    this.notify(commitment, null, "pending");
  }

  getState(id: string): CommitmentState | null {
    return this.entries.get(id)?.state ?? null;
  }

  /** Mark a commitment as fulfilled. Throws if not pending. */
  fulfill(id: string): void {
    this.transition(id, "fulfilled");
  }

  /** Mark a commitment as violated. Throws if not pending. */
  violate(id: string): void {
    this.transition(id, "violated");
  }

  private transition(id: string, target: CommitmentState): void {
    const entry = this.entries.get(id);
    if (!entry) {
      throw new Error(`unknown commitment '${id}'`);
    }
    if (entry.state !== "pending") {
      throw new Error(
        `commitment '${id}' is in terminal state '${entry.state}'; cannot transition to '${target}'`
      );
    }
    const previous = entry.state;
    this.entries.set(id, { commitment: entry.commitment, state: target });
    this.notify(entry.commitment, previous, target);
  }

  private notify(commitment: unknown, previous: CommitmentState | null, next: CommitmentState): void {
    if (!this.listener) return;
    this.listener({
      commitment,
      previousState: previous,
      newState: next,
      timestamp: Date.now(),
    });
  }

  /** Iterate commitments in the pending state. Snapshot — safe to mutate during iteration. */
  pending(): readonly CommitmentLifecycle<unknown>[] {
    const out: CommitmentLifecycle<unknown>[] = [];
    for (const e of this.entries.values()) {
      if (e.state === "pending") out.push(e);
    }
    return out;
  }

  /** Total entries (pending + fulfilled + violated). */
  size(): number {
    return this.entries.size;
  }
}

/** Lifecycle registry for ExactlyOneDriverPerRide commitments. */
export class ExactlyOneDriverPerRideRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ExactlyOneDriverPerRide>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ExactlyOneDriverPerRide — the typed wrapper guarantees that since
    // `register` only accepts ExactlyOneDriverPerRide instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ExactlyOneDriverPerRide): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ExactlyOneDriverPerRideId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ExactlyOneDriverPerRideId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ExactlyOneDriverPerRideId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ExactlyOneDriverPerRide>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ExactlyOneDriverPerRide>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ValidStateTransitions commitments. */
export class ValidStateTransitionsRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ValidStateTransitions>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ValidStateTransitions — the typed wrapper guarantees that since
    // `register` only accepts ValidStateTransitions instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ValidStateTransitions): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ValidStateTransitionsId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ValidStateTransitionsId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ValidStateTransitionsId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ValidStateTransitions>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ValidStateTransitions>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for BoundedAssignmentLatency commitments. */
export class BoundedAssignmentLatencyRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<BoundedAssignmentLatency>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a BoundedAssignmentLatency — the typed wrapper guarantees that since
    // `register` only accepts BoundedAssignmentLatency instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: BoundedAssignmentLatency): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: BoundedAssignmentLatencyId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: BoundedAssignmentLatencyId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: BoundedAssignmentLatencyId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<BoundedAssignmentLatency>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<BoundedAssignmentLatency>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for DriverMutualExclusion commitments. */
export class DriverMutualExclusionRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<DriverMutualExclusion>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a DriverMutualExclusion — the typed wrapper guarantees that since
    // `register` only accepts DriverMutualExclusion instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: DriverMutualExclusion): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: DriverMutualExclusionId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: DriverMutualExclusionId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: DriverMutualExclusionId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<DriverMutualExclusion>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<DriverMutualExclusion>[];
  }

  size(): number {
    return this.inner.size();
  }
}

