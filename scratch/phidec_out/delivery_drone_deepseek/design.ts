// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for BatteryManager. Runtime: string. Compile-time: branded. */
export type BatteryManagerId = string & { readonly __brand: "BatteryManagerId" };
/** Identity type for GeofenceMonitor. Runtime: string. Compile-time: branded. */
export type GeofenceMonitorId = string & { readonly __brand: "GeofenceMonitorId" };
/** Identity type for FlightController. Runtime: string. Compile-time: branded. */
export type FlightControllerId = string & { readonly __brand: "FlightControllerId" };
/** Identity type for MissionPlannerInterface. Runtime: string. Compile-time: branded. */
export type MissionPlannerInterfaceId = string & { readonly __brand: "MissionPlannerInterfaceId" };
/** Identity type for BatteryFlightLink. Runtime: string. Compile-time: branded. */
export type BatteryFlightLinkId = string & { readonly __brand: "BatteryFlightLinkId" };
/** Identity type for GeofenceFlightLink. Runtime: string. Compile-time: branded. */
export type GeofenceFlightLinkId = string & { readonly __brand: "GeofenceFlightLinkId" };
/** Identity type for PreFlightTakeoffSequence. Runtime: string. Compile-time: branded. */
export type PreFlightTakeoffSequenceId = string & { readonly __brand: "PreFlightTakeoffSequenceId" };
/** Identity type for GeofenceViolationResponseFlow. Runtime: string. Compile-time: branded. */
export type GeofenceViolationResponseFlowId = string & { readonly __brand: "GeofenceViolationResponseFlowId" };
/** Identity type for MidMissionBatteryRTHFlow. Runtime: string. Compile-time: branded. */
export type MidMissionBatteryRTHFlowId = string & { readonly __brand: "MidMissionBatteryRTHFlowId" };
/** Identity type for Customer. Runtime: string. Compile-time: branded. */
export type CustomerId = string & { readonly __brand: "CustomerId" };
/** Identity type for Operator. Runtime: string. Compile-time: branded. */
export type OperatorId = string & { readonly __brand: "OperatorId" };
/** Identity type for RegulatoryAuthority. Runtime: string. Compile-time: branded. */
export type RegulatoryAuthorityId = string & { readonly __brand: "RegulatoryAuthorityId" };
/** Identity type for DroneVendor. Runtime: string. Compile-time: branded. */
export type DroneVendorId = string & { readonly __brand: "DroneVendorId" };
/** Identity type for BatterySoC. Runtime: string. Compile-time: branded. */
export type BatterySoCId = string & { readonly __brand: "BatterySoCId" };
/** Identity type for RoundTripReserve. Runtime: string. Compile-time: branded. */
export type RoundTripReserveId = string & { readonly __brand: "RoundTripReserveId" };
/** Identity type for Geofence. Runtime: string. Compile-time: branded. */
export type GeofenceId = string & { readonly __brand: "GeofenceId" };
/** Identity type for PredicateHost. Runtime: string. Compile-time: branded. */
export type PredicateHostId = string & { readonly __brand: "PredicateHostId" };
/** Identity type for PreTakeoffBatteryReserve. Runtime: string. Compile-time: branded. */
export type PreTakeoffBatteryReserveId = string & { readonly __brand: "PreTakeoffBatteryReserveId" };
/** Identity type for GeofenceContainment. Runtime: string. Compile-time: branded. */
export type GeofenceContainmentId = string & { readonly __brand: "GeofenceContainmentId" };
/** Identity type for MidMissionBatteryRTH. Runtime: string. Compile-time: branded. */
export type MidMissionBatteryRTHId = string & { readonly __brand: "MidMissionBatteryRTHId" };
/** Identity type for AuthoritativeRTH. Runtime: string. Compile-time: branded. */
export type AuthoritativeRTHId = string & { readonly __brand: "AuthoritativeRTHId" };
/** Identity type for TakeoffSequence. Runtime: string. Compile-time: branded. */
export type TakeoffSequenceId = string & { readonly __brand: "TakeoffSequenceId" };
/** Identity type for GeofenceViolationResponse. Runtime: string. Compile-time: branded. */
export type GeofenceViolationResponseId = string & { readonly __brand: "GeofenceViolationResponseId" };
/** Identity type for BatteryDropResponse. Runtime: string. Compile-time: branded. */
export type BatteryDropResponseId = string & { readonly __brand: "BatteryDropResponseId" };
/** Identity type for DroneMissionController. Runtime: string. Compile-time: branded. */
export type DroneMissionControllerId = string & { readonly __brand: "DroneMissionControllerId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface BatteryManager {
  readonly batteryId: BatteryManagerId;
  readonly soc: number;
  readonly reserve: number;
  readonly socBelowThreshold: boolean;
  readonly safeReserveRatio: number;
  readonly rthBatteryThreshold: number;
}

/** @stereotype <<Kind>> */
export interface GeofenceMonitor {
  readonly monitorId: GeofenceMonitorId;
  readonly geofenceAuthorized: boolean;
  readonly geofenceViolationDetected: boolean;
  readonly currentLatitude: number;
  readonly currentLongitude: number;
  readonly geofenceMaxResponseSec: number;
}

/** @stereotype <<Kind>> */
export interface FlightController {
  readonly flightId: FlightControllerId;
  readonly isFlying: boolean;
  readonly rthInitiated: boolean;
  readonly rthIsCancellable: boolean;
}

/** @stereotype <<Kind>> */
export interface MissionPlannerInterface {
  readonly plannerId: MissionPlannerInterfaceId;
  readonly missionId: string;
  readonly destinationLatitude: number;
  readonly destinationLongitude: number;
  readonly computedRoundTripReserve: number;
}

/** @stereotype <<Role>> */
export interface BatteryManagerRole {
  readonly batteryId: string;
  readonly soc: number;
  readonly socBelowThreshold: boolean;
}

/** @stereotype <<Role>> */
export interface FlightControllerRole {
  readonly flightId: string;
  readonly isFlying: boolean;
  readonly rthInitiated: boolean;
}

/** @stereotype <<Role>> */
export interface GeofenceMonitorRole {
  readonly monitorId: string;
  readonly geofenceViolationDetected: boolean;
}

/** @stereotype <<Relator>> */
export interface BatteryFlightLink {
  readonly linkId: BatteryFlightLinkId;
  readonly batterySocTransfer: number;
  readonly batteryReserveTransfer: number;
  readonly thresholdAlert: boolean;
}

/** @stereotype <<Relator>> */
export interface GeofenceFlightLink {
  readonly linkId: GeofenceFlightLinkId;
  readonly violationAlert: boolean;
}

/** @stereotype <<Happening>> */
export interface PreFlightTakeoffSequence {
  readonly flowId: PreFlightTakeoffSequenceId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface GeofenceViolationResponseFlow {
  readonly flowId: GeofenceViolationResponseFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface MidMissionBatteryRTHFlow {
  readonly flowId: MidMissionBatteryRTHFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Agent>> */
export interface Customer {
  readonly customerId: CustomerId;
  readonly name: string;
  readonly deliveryAddress: string;
}

/** @stereotype <<Agent>> */
export interface Operator {
  readonly operatorId: OperatorId;
  readonly name: string;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface RegulatoryAuthority {
  readonly authorityId: RegulatoryAuthorityId;
  readonly name: string;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface DroneVendor {
  readonly vendorId: DroneVendorId;
  readonly vendorName: string;
}

/** @stereotype <<Kind>> */
export interface BatterySoC {
  readonly socId: BatterySoCId;
  readonly value: number;
}

/** @stereotype <<Kind>> */
export interface RoundTripReserve {
  readonly reserveId: RoundTripReserveId;
  readonly minSoC: number;
}

/** @stereotype <<Kind>> */
export interface Geofence {
  readonly geofenceId: GeofenceId;
  readonly polygonWkt: string;
  readonly maxLatitude: number;
  readonly minLatitude: number;
  readonly maxLongitude: number;
  readonly minLongitude: number;
}

/** @stereotype <<Kind>> */
export interface PredicateHost {
  readonly hostId: PredicateHostId;
  readonly safeReserveRatio: number;
  readonly geofenceMaxResponseSec: number;
  readonly rthBatteryThreshold: number;
  readonly rthIsCancellable: boolean;
}

/** @stereotype <<Commitment>> */
export interface PreTakeoffBatteryReserve {
  readonly commitmentId: PreTakeoffBatteryReserveId;
  readonly safeReserveRatio: number;
}

/** @stereotype <<Commitment>> */
export interface GeofenceContainment {
  readonly commitmentId: GeofenceContainmentId;
  readonly geofenceMaxResponseSec: number;
}

/** @stereotype <<Commitment>> */
export interface MidMissionBatteryRTH {
  readonly commitmentId: MidMissionBatteryRTHId;
  readonly rthBatteryThreshold: number;
}

/** @stereotype <<Commitment>> */
export interface AuthoritativeRTH {
  readonly commitmentId: AuthoritativeRTHId;
  readonly rthIsCancellable: boolean;
}

/** @stereotype <<Category>> */
export interface BatterySafetyConstraints {
}

/** @stereotype <<Happening>> */
export interface TakeoffSequence {
  readonly flowId: TakeoffSequenceId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface GeofenceViolationResponse {
  readonly flowId: GeofenceViolationResponseId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface BatteryDropResponse {
  readonly flowId: BatteryDropResponseId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface DroneMissionController {
  readonly systemId: DroneMissionControllerId;
  readonly soc: number;
  readonly reserve: number;
  readonly geofenceAuthorized: boolean;
  readonly isFlying: boolean;
  readonly rthInitiated: boolean;
  readonly geofenceViolationDetected: boolean;
  readonly socBelowThreshold: boolean;
  readonly safeReserveRatio: number;
  readonly geofenceMaxResponseSec: number;
  readonly rthBatteryThreshold: number;
  readonly rthIsCancellable: boolean;
}

/** @stereotype <<Category>> */
export interface FaaPart107Compliant {
}

/** @stereotype <<Category>> */
export interface AstmF3322Compliant {
}

/** @stereotype <<Category>> */
export interface EasaOpenCategoryCompliant {
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleBatterySoC {
}

/** @stereotype <<Category>> */
export interface DomainLogicalReserveBounds {
}

/** @stereotype <<Category>> */
export interface AuthoritativeSafetyInvariant {
}

/** @stereotype <<Subkind>> */
export interface FormalizedDroneMissionController extends DroneMissionController {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionText: string;
  readonly rational: string;
  readonly source: string;
}


// ─── Factory functions ───

export function makeBatteryManager(data: {
  batteryId: string;
  soc: number;
  reserve: number;
  socBelowThreshold: boolean;
  safeReserveRatio: number;
  rthBatteryThreshold: number;
}): BatteryManager {
  return {
    batteryId: data.batteryId as BatteryManagerId,
    soc: data.soc,
    reserve: data.reserve,
    socBelowThreshold: data.socBelowThreshold,
    safeReserveRatio: data.safeReserveRatio,
    rthBatteryThreshold: data.rthBatteryThreshold,
  };
}

export function makeGeofenceMonitor(data: {
  monitorId: string;
  geofenceAuthorized: boolean;
  geofenceViolationDetected: boolean;
  currentLatitude: number;
  currentLongitude: number;
  geofenceMaxResponseSec: number;
}): GeofenceMonitor {
  return {
    monitorId: data.monitorId as GeofenceMonitorId,
    geofenceAuthorized: data.geofenceAuthorized,
    geofenceViolationDetected: data.geofenceViolationDetected,
    currentLatitude: data.currentLatitude,
    currentLongitude: data.currentLongitude,
    geofenceMaxResponseSec: data.geofenceMaxResponseSec,
  };
}

export function makeFlightController(data: {
  flightId: string;
  isFlying: boolean;
  rthInitiated: boolean;
  rthIsCancellable: boolean;
}): FlightController {
  return {
    flightId: data.flightId as FlightControllerId,
    isFlying: data.isFlying,
    rthInitiated: data.rthInitiated,
    rthIsCancellable: data.rthIsCancellable,
  };
}

export function makeMissionPlannerInterface(data: {
  plannerId: string;
  missionId: string;
  destinationLatitude: number;
  destinationLongitude: number;
  computedRoundTripReserve: number;
}): MissionPlannerInterface {
  return {
    plannerId: data.plannerId as MissionPlannerInterfaceId,
    missionId: data.missionId,
    destinationLatitude: data.destinationLatitude,
    destinationLongitude: data.destinationLongitude,
    computedRoundTripReserve: data.computedRoundTripReserve,
  };
}

export function makeBatteryFlightLink(data: {
  linkId: string;
  batterySocTransfer: number;
  batteryReserveTransfer: number;
  thresholdAlert: boolean;
}): BatteryFlightLink {
  return {
    linkId: data.linkId as BatteryFlightLinkId,
    batterySocTransfer: data.batterySocTransfer,
    batteryReserveTransfer: data.batteryReserveTransfer,
    thresholdAlert: data.thresholdAlert,
  };
}

export function makeGeofenceFlightLink(data: {
  linkId: string;
  violationAlert: boolean;
}): GeofenceFlightLink {
  return {
    linkId: data.linkId as GeofenceFlightLinkId,
    violationAlert: data.violationAlert,
  };
}

export function makePreFlightTakeoffSequence(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): PreFlightTakeoffSequence {
  return {
    flowId: data.flowId as PreFlightTakeoffSequenceId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeGeofenceViolationResponseFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): GeofenceViolationResponseFlow {
  return {
    flowId: data.flowId as GeofenceViolationResponseFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeMidMissionBatteryRTHFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): MidMissionBatteryRTHFlow {
  return {
    flowId: data.flowId as MidMissionBatteryRTHFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeCustomer(data: {
  customerId: string;
  name: string;
  deliveryAddress: string;
}): Customer {
  return {
    customerId: data.customerId as CustomerId,
    name: data.name,
    deliveryAddress: data.deliveryAddress,
  };
}

export function makeOperator(data: {
  operatorId: string;
  name: string;
  certification: string;
}): Operator {
  return {
    operatorId: data.operatorId as OperatorId,
    name: data.name,
    certification: data.certification,
  };
}

export function makeRegulatoryAuthority(data: {
  authorityId: string;
  name: string;
  jurisdiction: string;
}): RegulatoryAuthority {
  return {
    authorityId: data.authorityId as RegulatoryAuthorityId,
    name: data.name,
    jurisdiction: data.jurisdiction,
  };
}

export function makeDroneVendor(data: {
  vendorId: string;
  vendorName: string;
}): DroneVendor {
  return {
    vendorId: data.vendorId as DroneVendorId,
    vendorName: data.vendorName,
  };
}

export function makeBatterySoC(data: {
  socId: string;
  value: number;
}): BatterySoC {
  return {
    socId: data.socId as BatterySoCId,
    value: data.value,
  };
}

export function makeRoundTripReserve(data: {
  reserveId: string;
  minSoC: number;
}): RoundTripReserve {
  return {
    reserveId: data.reserveId as RoundTripReserveId,
    minSoC: data.minSoC,
  };
}

export function makeGeofence(data: {
  geofenceId: string;
  polygonWkt: string;
  maxLatitude: number;
  minLatitude: number;
  maxLongitude: number;
  minLongitude: number;
}): Geofence {
  return {
    geofenceId: data.geofenceId as GeofenceId,
    polygonWkt: data.polygonWkt,
    maxLatitude: data.maxLatitude,
    minLatitude: data.minLatitude,
    maxLongitude: data.maxLongitude,
    minLongitude: data.minLongitude,
  };
}

export function makePredicateHost(data: {
  hostId: string;
  safeReserveRatio: number;
  geofenceMaxResponseSec: number;
  rthBatteryThreshold: number;
  rthIsCancellable: boolean;
}): PredicateHost {
  return {
    hostId: data.hostId as PredicateHostId,
    safeReserveRatio: data.safeReserveRatio,
    geofenceMaxResponseSec: data.geofenceMaxResponseSec,
    rthBatteryThreshold: data.rthBatteryThreshold,
    rthIsCancellable: data.rthIsCancellable,
  };
}

export function makePreTakeoffBatteryReserve(data: {
  commitmentId: string;
  safeReserveRatio: number;
}): PreTakeoffBatteryReserve {
  return {
    commitmentId: data.commitmentId as PreTakeoffBatteryReserveId,
    safeReserveRatio: data.safeReserveRatio,
  };
}

export function makeGeofenceContainment(data: {
  commitmentId: string;
  geofenceMaxResponseSec: number;
}): GeofenceContainment {
  return {
    commitmentId: data.commitmentId as GeofenceContainmentId,
    geofenceMaxResponseSec: data.geofenceMaxResponseSec,
  };
}

export function makeMidMissionBatteryRTH(data: {
  commitmentId: string;
  rthBatteryThreshold: number;
}): MidMissionBatteryRTH {
  return {
    commitmentId: data.commitmentId as MidMissionBatteryRTHId,
    rthBatteryThreshold: data.rthBatteryThreshold,
  };
}

export function makeAuthoritativeRTH(data: {
  commitmentId: string;
  rthIsCancellable: boolean;
}): AuthoritativeRTH {
  return {
    commitmentId: data.commitmentId as AuthoritativeRTHId,
    rthIsCancellable: data.rthIsCancellable,
  };
}

export function makeTakeoffSequence(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): TakeoffSequence {
  return {
    flowId: data.flowId as TakeoffSequenceId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeGeofenceViolationResponse(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): GeofenceViolationResponse {
  return {
    flowId: data.flowId as GeofenceViolationResponseId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeBatteryDropResponse(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): BatteryDropResponse {
  return {
    flowId: data.flowId as BatteryDropResponseId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeDroneMissionController(data: {
  systemId: string;
  soc: number;
  reserve: number;
  geofenceAuthorized: boolean;
  isFlying: boolean;
  rthInitiated: boolean;
  geofenceViolationDetected: boolean;
  socBelowThreshold: boolean;
  safeReserveRatio: number;
  geofenceMaxResponseSec: number;
  rthBatteryThreshold: number;
  rthIsCancellable: boolean;
}): DroneMissionController {
  return {
    systemId: data.systemId as DroneMissionControllerId,
    soc: data.soc,
    reserve: data.reserve,
    geofenceAuthorized: data.geofenceAuthorized,
    isFlying: data.isFlying,
    rthInitiated: data.rthInitiated,
    geofenceViolationDetected: data.geofenceViolationDetected,
    socBelowThreshold: data.socBelowThreshold,
    safeReserveRatio: data.safeReserveRatio,
    geofenceMaxResponseSec: data.geofenceMaxResponseSec,
    rthBatteryThreshold: data.rthBatteryThreshold,
    rthIsCancellable: data.rthIsCancellable,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionText: string;
  rational: string;
  source: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionText: data.assumptionText,
    rational: data.rational,
    source: data.source,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for BatteryManager. Returns empty array when valid. */
export function validateBatteryManager(instance: BatteryManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.batteryId !== null))) {
    violations.push("[BatteryManager] invariant violated: self.batteryId <> null");
  }
  if (!((instance.soc >= 0))) {
    violations.push("[BatteryManager] invariant violated: self.soc >= 0.0");
  }
  if (!((instance.soc <= 1))) {
    violations.push("[BatteryManager] invariant violated: self.soc <= 1.0");
  }
  if (!((instance.reserve >= 0))) {
    violations.push("[BatteryManager] invariant violated: self.reserve >= 0.0");
  }
  if (!((instance.reserve <= 1))) {
    violations.push("[BatteryManager] invariant violated: self.reserve <= 1.0");
  }
  if (!((instance.safeReserveRatio >= 0.2))) {
    violations.push("[BatteryManager] invariant violated: self.safeReserveRatio >= 0.20");
  }
  if (!((instance.rthBatteryThreshold >= 0))) {
    violations.push("[BatteryManager] invariant violated: self.rthBatteryThreshold >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for GeofenceMonitor. Returns empty array when valid. */
export function validateGeofenceMonitor(instance: GeofenceMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.monitorId !== null))) {
    violations.push("[GeofenceMonitor] invariant violated: self.monitorId <> null");
  }
  if (!((instance.geofenceMaxResponseSec <= 2))) {
    violations.push("[GeofenceMonitor] invariant violated: self.geofenceMaxResponseSec <= 2.0");
  }
  return violations;
}

/** Runtime invariant check for FlightController. Returns empty array when valid. */
export function validateFlightController(instance: FlightController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flightId !== null))) {
    violations.push("[FlightController] invariant violated: self.flightId <> null");
  }
  if (!(!(instance.rthIsCancellable))) {
    violations.push("[FlightController] invariant violated: not self.rthIsCancellable");
  }
  return violations;
}

/** Runtime invariant check for MissionPlannerInterface. Returns empty array when valid. */
export function validateMissionPlannerInterface(instance: MissionPlannerInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.plannerId !== null))) {
    violations.push("[MissionPlannerInterface] invariant violated: self.plannerId <> null");
  }
  if (!((instance.missionId !== null))) {
    violations.push("[MissionPlannerInterface] invariant violated: self.missionId <> null");
  }
  if (!((instance.computedRoundTripReserve >= 0))) {
    violations.push("[MissionPlannerInterface] invariant violated: self.computedRoundTripReserve >= 0.0");
  }
  if (!((instance.computedRoundTripReserve <= 1))) {
    violations.push("[MissionPlannerInterface] invariant violated: self.computedRoundTripReserve <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for BatteryFlightLink. Returns empty array when valid. */
export function validateBatteryFlightLink(instance: BatteryFlightLink): readonly string[] {
  const violations: string[] = [];
  if (!((instance.linkId !== null))) {
    violations.push("[BatteryFlightLink] invariant violated: self.linkId <> null");
  }
  if (!((instance.batterySocTransfer >= 0))) {
    violations.push("[BatteryFlightLink] invariant violated: self.batterySocTransfer >= 0.0");
  }
  if (!((instance.batterySocTransfer <= 1))) {
    violations.push("[BatteryFlightLink] invariant violated: self.batterySocTransfer <= 1.0");
  }
  if (!((instance.batteryReserveTransfer >= 0))) {
    violations.push("[BatteryFlightLink] invariant violated: self.batteryReserveTransfer >= 0.0");
  }
  if (!((instance.batteryReserveTransfer <= 1))) {
    violations.push("[BatteryFlightLink] invariant violated: self.batteryReserveTransfer <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for GeofenceFlightLink. Returns empty array when valid. */
export function validateGeofenceFlightLink(instance: GeofenceFlightLink): readonly string[] {
  const violations: string[] = [];
  if (!((instance.linkId !== null))) {
    violations.push("[GeofenceFlightLink] invariant violated: self.linkId <> null");
  }
  return violations;
}

/** Runtime invariant check for PreFlightTakeoffSequence. Returns empty array when valid. */
export function validatePreFlightTakeoffSequence(instance: PreFlightTakeoffSequence): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[PreFlightTakeoffSequence] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for GeofenceViolationResponseFlow. Returns empty array when valid. */
export function validateGeofenceViolationResponseFlow(instance: GeofenceViolationResponseFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[GeofenceViolationResponseFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for MidMissionBatteryRTHFlow. Returns empty array when valid. */
export function validateMidMissionBatteryRTHFlow(instance: MidMissionBatteryRTHFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MidMissionBatteryRTHFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for Customer. Returns empty array when valid. */
export function validateCustomer(instance: Customer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.customerId !== null))) {
    violations.push("[Customer] invariant violated: self.customerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Customer] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Operator. Returns empty array when valid. */
export function validateOperator(instance: Operator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.operatorId !== null))) {
    violations.push("[Operator] invariant violated: self.operatorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Operator] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for RegulatoryAuthority. Returns empty array when valid. */
export function validateRegulatoryAuthority(instance: RegulatoryAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[RegulatoryAuthority] invariant violated: self.authorityId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[RegulatoryAuthority] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for DroneVendor. Returns empty array when valid. */
export function validateDroneVendor(instance: DroneVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[DroneVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.vendorName !== null))) {
    violations.push("[DroneVendor] invariant violated: self.vendorName <> null");
  }
  return violations;
}

/** Runtime invariant check for BatterySoC. Returns empty array when valid. */
export function validateBatterySoC(instance: BatterySoC): readonly string[] {
  const violations: string[] = [];
  if (!((instance.socId !== null))) {
    violations.push("[BatterySoC] invariant violated: self.socId <> null");
  }
  if (!((instance.value >= 0))) {
    violations.push("[BatterySoC] invariant violated: self.value >= 0.0");
  }
  if (!((instance.value <= 1))) {
    violations.push("[BatterySoC] invariant violated: self.value <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for RoundTripReserve. Returns empty array when valid. */
export function validateRoundTripReserve(instance: RoundTripReserve): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reserveId !== null))) {
    violations.push("[RoundTripReserve] invariant violated: self.reserveId <> null");
  }
  if (!((instance.minSoC >= 0))) {
    violations.push("[RoundTripReserve] invariant violated: self.minSoC >= 0.0");
  }
  if (!((instance.minSoC <= 1))) {
    violations.push("[RoundTripReserve] invariant violated: self.minSoC <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for Geofence. Returns empty array when valid. */
export function validateGeofence(instance: Geofence): readonly string[] {
  const violations: string[] = [];
  if (!((instance.geofenceId !== null))) {
    violations.push("[Geofence] invariant violated: self.geofenceId <> null");
  }
  if (!((instance.polygonWkt !== null))) {
    violations.push("[Geofence] invariant violated: self.polygonWkt <> null");
  }
  return violations;
}

/** Runtime invariant check for PredicateHost. Returns empty array when valid. */
export function validatePredicateHost(instance: PredicateHost): readonly string[] {
  const violations: string[] = [];
  if (!((instance.hostId !== null))) {
    violations.push("[PredicateHost] invariant violated: self.hostId <> null");
  }
  return violations;
}

/** Runtime invariant check for BatterySafetyConstraints. Returns empty array when valid. */
export function validateBatterySafetyConstraints(instance: BatterySafetyConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeReserveRatio >= 0.20 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.geofenceMaxResponseSec <= 2.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.rthBatteryThreshold >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): not bearer.rthIsCancellable — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TakeoffSequence. Returns empty array when valid. */
export function validateTakeoffSequence(instance: TakeoffSequence): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[TakeoffSequence] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for GeofenceViolationResponse. Returns empty array when valid. */
export function validateGeofenceViolationResponse(instance: GeofenceViolationResponse): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[GeofenceViolationResponse] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for BatteryDropResponse. Returns empty array when valid. */
export function validateBatteryDropResponse(instance: BatteryDropResponse): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[BatteryDropResponse] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for DroneMissionController. Returns empty array when valid. */
export function validateDroneMissionController(instance: DroneMissionController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[DroneMissionController] invariant violated: self.systemId <> null");
  }
  if (!((instance.soc >= 0))) {
    violations.push("[DroneMissionController] invariant violated: self.soc >= 0.0");
  }
  if (!((instance.soc <= 1))) {
    violations.push("[DroneMissionController] invariant violated: self.soc <= 1.0");
  }
  if (!((instance.reserve >= 0))) {
    violations.push("[DroneMissionController] invariant violated: self.reserve >= 0.0");
  }
  if (!((instance.reserve <= 1))) {
    violations.push("[DroneMissionController] invariant violated: self.reserve <= 1.0");
  }
  if (!((instance.safeReserveRatio >= 0.2))) {
    violations.push("[DroneMissionController] invariant violated: self.safeReserveRatio >= 0.20");
  }
  if (!((instance.geofenceMaxResponseSec <= 2))) {
    violations.push("[DroneMissionController] invariant violated: self.geofenceMaxResponseSec <= 2.0");
  }
  if (!((instance.rthBatteryThreshold >= 0))) {
    violations.push("[DroneMissionController] invariant violated: self.rthBatteryThreshold >= 0.0");
  }
  if (!(!(instance.rthIsCancellable))) {
    violations.push("[DroneMissionController] invariant violated: not self.rthIsCancellable");
  }
  return violations;
}

/** Runtime invariant check for FaaPart107Compliant. Returns empty array when valid. */
export function validateFaaPart107Compliant(instance: FaaPart107Compliant): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[FaaPart107Compliant] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AstmF3322Compliant. Returns empty array when valid. */
export function validateAstmF3322Compliant(instance: AstmF3322Compliant): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AstmF3322Compliant] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for EasaOpenCategoryCompliant. Returns empty array when valid. */
export function validateEasaOpenCategoryCompliant(instance: EasaOpenCategoryCompliant): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[EasaOpenCategoryCompliant] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleBatterySoC. Returns empty array when valid. */
export function validatePhysicallyPlausibleBatterySoC(instance: PhysicallyPlausibleBatterySoC): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.soc >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.soc <= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.reserve >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.reserve <= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeReserveRatio >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for DomainLogicalReserveBounds. Returns empty array when valid. */
export function validateDomainLogicalReserveBounds(instance: DomainLogicalReserveBounds): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.reserve >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.reserve <= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeReserveRatio >= 0.20 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.rthBatteryThreshold >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AuthoritativeSafetyInvariant. Returns empty array when valid. */
export function validateAuthoritativeSafetyInvariant(instance: AuthoritativeSafetyInvariant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): not bearer.rthIsCancellable — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionText !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionText <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for BatteryManager.readSoCAndReserve. User supplies this. */
export type BatteryManagerReadSoCAndReserveImpl = (self: BatteryManager) => { self: BatteryManager; modified: { soc: unknown } };

/** Contract-checking wrapper for BatteryManager.readSoCAndReserve. */
export function wrapBatteryManagerReadSoCAndReserve(impl: BatteryManagerReadSoCAndReserveImpl): (self: BatteryManager) => BatteryManager {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= 1.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.soc = result — unbound variable 'result'
      if (!((__result.self.safeReserveRatio >= 0.2))) {
        postViolations.push("[BatteryManager.readSoCAndReserve] post violated: self.safeReserveRatio >= 0.20");
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

/** Impl signature for BatteryManager.readSoCAndReserve (async). User supplies this. */
export type BatteryManagerReadSoCAndReserveAsyncImpl = (self: BatteryManager) => Promise<{ self: BatteryManager; modified: { soc: unknown } }>;

/** Contract-checking wrapper for BatteryManager.readSoCAndReserve (async). */
export function wrapBatteryManagerReadSoCAndReserveAsync(impl: BatteryManagerReadSoCAndReserveAsyncImpl): (self: BatteryManager) => Promise<BatteryManager> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= 1.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.soc = result — unbound variable 'result'
      if (!((__result.self.safeReserveRatio >= 0.2))) {
        postViolations.push("[BatteryManager.readSoCAndReserve] post violated: self.safeReserveRatio >= 0.20");
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

/** Impl signature for BatteryManager.setReserve. User supplies this. */
export type BatteryManagerSetReserveImpl = (self: BatteryManager, newReserve: number) => { self: BatteryManager; modified: { reserve: unknown } };

/** Contract-checking wrapper for BatteryManager.setReserve. */
export function wrapBatteryManagerSetReserve(impl: BatteryManagerSetReserveImpl): (self: BatteryManager, newReserve: number) => BatteryManager {
  return (self, newReserve) => {
    const preViolations: string[] = [];
    if (!((newReserve >= 0))) {
      preViolations.push("[BatteryManager.setReserve] pre violated: newReserve >= 0.0");
    }
    if (!((newReserve <= 1))) {
      preViolations.push("[BatteryManager.setReserve] pre violated: newReserve <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newReserve);
      const postViolations: string[] = [];
      if (!((__result.self.reserve === newReserve))) {
        postViolations.push("[BatteryManager.setReserve] post violated: self.reserve = newReserve");
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

/** Impl signature for BatteryManager.setReserve (async). User supplies this. */
export type BatteryManagerSetReserveAsyncImpl = (self: BatteryManager, newReserve: number) => Promise<{ self: BatteryManager; modified: { reserve: unknown } }>;

/** Contract-checking wrapper for BatteryManager.setReserve (async). */
export function wrapBatteryManagerSetReserveAsync(impl: BatteryManagerSetReserveAsyncImpl): (self: BatteryManager, newReserve: number) => Promise<BatteryManager> {
  return async (self, newReserve) => {
    const preViolations: string[] = [];
    if (!((newReserve >= 0))) {
      preViolations.push("[BatteryManager.setReserve] pre violated: newReserve >= 0.0");
    }
    if (!((newReserve <= 1))) {
      preViolations.push("[BatteryManager.setReserve] pre violated: newReserve <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newReserve);
      const postViolations: string[] = [];
      if (!((__result.self.reserve === newReserve))) {
        postViolations.push("[BatteryManager.setReserve] post violated: self.reserve = newReserve");
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

/** Impl signature for BatteryManager.checkSoCThreshold. User supplies this. */
export type BatteryManagerCheckSoCThresholdImpl = (self: BatteryManager) => { self: BatteryManager; modified: { socBelowThreshold: unknown } };

/** Contract-checking wrapper for BatteryManager.checkSoCThreshold. */
export function wrapBatteryManagerCheckSoCThreshold(impl: BatteryManagerCheckSoCThresholdImpl): (self: BatteryManager) => BatteryManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.soc >= 0))) {
      preViolations.push("[BatteryManager.checkSoCThreshold] pre violated: self.soc >= 0.0");
    }
    if (!((self.soc <= 1))) {
      preViolations.push("[BatteryManager.checkSoCThreshold] pre violated: self.soc <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rthBatteryThreshold >= 0))) {
        postViolations.push("[BatteryManager.checkSoCThreshold] post violated: self.rthBatteryThreshold >= 0.0");
      }
      if (!((__result.self.socBelowThreshold === (__result.self.soc <= __result.self.rthBatteryThreshold)))) {
        postViolations.push("[BatteryManager.checkSoCThreshold] post violated: self.socBelowThreshold = (self.soc <= self.rthBatteryThreshold)");
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

/** Impl signature for BatteryManager.checkSoCThreshold (async). User supplies this. */
export type BatteryManagerCheckSoCThresholdAsyncImpl = (self: BatteryManager) => Promise<{ self: BatteryManager; modified: { socBelowThreshold: unknown } }>;

/** Contract-checking wrapper for BatteryManager.checkSoCThreshold (async). */
export function wrapBatteryManagerCheckSoCThresholdAsync(impl: BatteryManagerCheckSoCThresholdAsyncImpl): (self: BatteryManager) => Promise<BatteryManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.soc >= 0))) {
      preViolations.push("[BatteryManager.checkSoCThreshold] pre violated: self.soc >= 0.0");
    }
    if (!((self.soc <= 1))) {
      preViolations.push("[BatteryManager.checkSoCThreshold] pre violated: self.soc <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rthBatteryThreshold >= 0))) {
        postViolations.push("[BatteryManager.checkSoCThreshold] post violated: self.rthBatteryThreshold >= 0.0");
      }
      if (!((__result.self.socBelowThreshold === (__result.self.soc <= __result.self.rthBatteryThreshold)))) {
        postViolations.push("[BatteryManager.checkSoCThreshold] post violated: self.socBelowThreshold = (self.soc <= self.rthBatteryThreshold)");
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

/** Impl signature for GeofenceMonitor.checkPositionInsideGeofence. User supplies this. */
export type GeofenceMonitorCheckPositionInsideGeofenceImpl = (self: GeofenceMonitor, lat: number, lon: number) => { self: GeofenceMonitor; modified: { currentLatitude: unknown; currentLongitude: unknown; geofenceAuthorized: unknown; geofenceViolationDetected: unknown } };

/** Contract-checking wrapper for GeofenceMonitor.checkPositionInsideGeofence. */
export function wrapGeofenceMonitorCheckPositionInsideGeofence(impl: GeofenceMonitorCheckPositionInsideGeofenceImpl): (self: GeofenceMonitor, lat: number, lon: number) => GeofenceMonitor {
  return (self, lat, lon) => {
    const preViolations: string[] = [];
    if (!((lat >= -(90)))) {
      preViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] pre violated: lat >= -90.0");
    }
    if (!((lat <= 90))) {
      preViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] pre violated: lat <= 90.0");
    }
    if (!((lon >= -(180)))) {
      preViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] pre violated: lon >= -180.0");
    }
    if (!((lon <= 180))) {
      preViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] pre violated: lon <= 180.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, lat, lon);
      const postViolations: string[] = [];
      if (!((__result.self.currentLatitude === lat))) {
        postViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] post violated: self.currentLatitude = lat");
      }
      if (!((__result.self.currentLongitude === lon))) {
        postViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] post violated: self.currentLongitude = lon");
      }
      if (!((__result.self.geofenceMaxResponseSec <= 2))) {
        postViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] post violated: self.geofenceMaxResponseSec <= 2.0");
      }
      // SKIPPED post-clause (not translatable): result = (lat >= 60.0 and lat <= 62.0 and lon >= 24.0 and lon <= 26.0) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if not result then
            self.geofenceAuthorized = false and
            self.geofenceViolationDetected = true
          else
            self.geofenceAuthorized = true and
            self.geofenceViolationDetected = false
          endif — unbound variable 'result'
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

/** Impl signature for GeofenceMonitor.checkPositionInsideGeofence (async). User supplies this. */
export type GeofenceMonitorCheckPositionInsideGeofenceAsyncImpl = (self: GeofenceMonitor, lat: number, lon: number) => Promise<{ self: GeofenceMonitor; modified: { currentLatitude: unknown; currentLongitude: unknown; geofenceAuthorized: unknown; geofenceViolationDetected: unknown } }>;

/** Contract-checking wrapper for GeofenceMonitor.checkPositionInsideGeofence (async). */
export function wrapGeofenceMonitorCheckPositionInsideGeofenceAsync(impl: GeofenceMonitorCheckPositionInsideGeofenceAsyncImpl): (self: GeofenceMonitor, lat: number, lon: number) => Promise<GeofenceMonitor> {
  return async (self, lat, lon) => {
    const preViolations: string[] = [];
    if (!((lat >= -(90)))) {
      preViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] pre violated: lat >= -90.0");
    }
    if (!((lat <= 90))) {
      preViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] pre violated: lat <= 90.0");
    }
    if (!((lon >= -(180)))) {
      preViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] pre violated: lon >= -180.0");
    }
    if (!((lon <= 180))) {
      preViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] pre violated: lon <= 180.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, lat, lon);
      const postViolations: string[] = [];
      if (!((__result.self.currentLatitude === lat))) {
        postViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] post violated: self.currentLatitude = lat");
      }
      if (!((__result.self.currentLongitude === lon))) {
        postViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] post violated: self.currentLongitude = lon");
      }
      if (!((__result.self.geofenceMaxResponseSec <= 2))) {
        postViolations.push("[GeofenceMonitor.checkPositionInsideGeofence] post violated: self.geofenceMaxResponseSec <= 2.0");
      }
      // SKIPPED post-clause (not translatable): result = (lat >= 60.0 and lat <= 62.0 and lon >= 24.0 and lon <= 26.0) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if not result then
            self.geofenceAuthorized = false and
            self.geofenceViolationDetected = true
          else
            self.geofenceAuthorized = true and
            self.geofenceViolationDetected = false
          endif — unbound variable 'result'
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

/** Impl signature for FlightController.initiateRTHFromGeofence. User supplies this. */
export type FlightControllerInitiateRTHFromGeofenceImpl = (self: FlightController) => { self: FlightController; modified: { rthInitiated: unknown; isFlying: unknown } };

/** Contract-checking wrapper for FlightController.initiateRTHFromGeofence. */
export function wrapFlightControllerInitiateRTHFromGeofence(impl: FlightControllerInitiateRTHFromGeofenceImpl): (self: FlightController) => FlightController {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[FlightController.initiateRTHFromGeofence] pre violated: self.isFlying = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FlightController.initiateRTHFromGeofence] pre violated: not self.rthInitiated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rthInitiated === true))) {
        postViolations.push("[FlightController.initiateRTHFromGeofence] post violated: self.rthInitiated = true");
      }
      if (!((__result.self.isFlying === false))) {
        postViolations.push("[FlightController.initiateRTHFromGeofence] post violated: self.isFlying = false");
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

/** Impl signature for FlightController.initiateRTHFromGeofence (async). User supplies this. */
export type FlightControllerInitiateRTHFromGeofenceAsyncImpl = (self: FlightController) => Promise<{ self: FlightController; modified: { rthInitiated: unknown; isFlying: unknown } }>;

/** Contract-checking wrapper for FlightController.initiateRTHFromGeofence (async). */
export function wrapFlightControllerInitiateRTHFromGeofenceAsync(impl: FlightControllerInitiateRTHFromGeofenceAsyncImpl): (self: FlightController) => Promise<FlightController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[FlightController.initiateRTHFromGeofence] pre violated: self.isFlying = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FlightController.initiateRTHFromGeofence] pre violated: not self.rthInitiated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rthInitiated === true))) {
        postViolations.push("[FlightController.initiateRTHFromGeofence] post violated: self.rthInitiated = true");
      }
      if (!((__result.self.isFlying === false))) {
        postViolations.push("[FlightController.initiateRTHFromGeofence] post violated: self.isFlying = false");
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

/** Impl signature for FlightController.initiateRTHFromBattery. User supplies this. */
export type FlightControllerInitiateRTHFromBatteryImpl = (self: FlightController) => { self: FlightController; modified: { rthInitiated: unknown; isFlying: unknown } };

/** Contract-checking wrapper for FlightController.initiateRTHFromBattery. */
export function wrapFlightControllerInitiateRTHFromBattery(impl: FlightControllerInitiateRTHFromBatteryImpl): (self: FlightController) => FlightController {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[FlightController.initiateRTHFromBattery] pre violated: self.isFlying = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FlightController.initiateRTHFromBattery] pre violated: not self.rthInitiated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rthInitiated === true))) {
        postViolations.push("[FlightController.initiateRTHFromBattery] post violated: self.rthInitiated = true");
      }
      if (!((__result.self.isFlying === false))) {
        postViolations.push("[FlightController.initiateRTHFromBattery] post violated: self.isFlying = false");
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

/** Impl signature for FlightController.initiateRTHFromBattery (async). User supplies this. */
export type FlightControllerInitiateRTHFromBatteryAsyncImpl = (self: FlightController) => Promise<{ self: FlightController; modified: { rthInitiated: unknown; isFlying: unknown } }>;

/** Contract-checking wrapper for FlightController.initiateRTHFromBattery (async). */
export function wrapFlightControllerInitiateRTHFromBatteryAsync(impl: FlightControllerInitiateRTHFromBatteryAsyncImpl): (self: FlightController) => Promise<FlightController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[FlightController.initiateRTHFromBattery] pre violated: self.isFlying = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FlightController.initiateRTHFromBattery] pre violated: not self.rthInitiated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rthInitiated === true))) {
        postViolations.push("[FlightController.initiateRTHFromBattery] post violated: self.rthInitiated = true");
      }
      if (!((__result.self.isFlying === false))) {
        postViolations.push("[FlightController.initiateRTHFromBattery] post violated: self.isFlying = false");
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

/** Impl signature for FlightController.rejectOperatorCancellation. User supplies this. */
export type FlightControllerRejectOperatorCancellationImpl = (self: FlightController, operatorConfirm: string) => { self: FlightController; modified: {} };

/** Contract-checking wrapper for FlightController.rejectOperatorCancellation. */
export function wrapFlightControllerRejectOperatorCancellation(impl: FlightControllerRejectOperatorCancellationImpl): (self: FlightController, operatorConfirm: string) => FlightController {
  return (self, operatorConfirm) => {
    const preViolations: string[] = [];
    if (!((self.rthInitiated === true))) {
      preViolations.push("[FlightController.rejectOperatorCancellation] pre violated: self.rthInitiated = true");
    }
    if (!((operatorConfirm === "confirm_cancel"))) {
      preViolations.push("[FlightController.rejectOperatorCancellation] pre violated: operatorConfirm = 'confirm_cancel'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, operatorConfirm);
      const postViolations: string[] = [];
      if (!(!(__result.self.rthIsCancellable))) {
        postViolations.push("[FlightController.rejectOperatorCancellation] post violated: not self.rthIsCancellable");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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

/** Impl signature for FlightController.rejectOperatorCancellation (async). User supplies this. */
export type FlightControllerRejectOperatorCancellationAsyncImpl = (self: FlightController, operatorConfirm: string) => Promise<{ self: FlightController; modified: {} }>;

/** Contract-checking wrapper for FlightController.rejectOperatorCancellation (async). */
export function wrapFlightControllerRejectOperatorCancellationAsync(impl: FlightControllerRejectOperatorCancellationAsyncImpl): (self: FlightController, operatorConfirm: string) => Promise<FlightController> {
  return async (self, operatorConfirm) => {
    const preViolations: string[] = [];
    if (!((self.rthInitiated === true))) {
      preViolations.push("[FlightController.rejectOperatorCancellation] pre violated: self.rthInitiated = true");
    }
    if (!((operatorConfirm === "confirm_cancel"))) {
      preViolations.push("[FlightController.rejectOperatorCancellation] pre violated: operatorConfirm = 'confirm_cancel'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, operatorConfirm);
      const postViolations: string[] = [];
      if (!(!(__result.self.rthIsCancellable))) {
        postViolations.push("[FlightController.rejectOperatorCancellation] post violated: not self.rthIsCancellable");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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

/** Impl signature for FlightController.executeTakeoff. User supplies this. */
export type FlightControllerExecuteTakeoffImpl = (self: FlightController) => { self: FlightController; modified: { isFlying: unknown } };

/** Contract-checking wrapper for FlightController.executeTakeoff. */
export function wrapFlightControllerExecuteTakeoff(impl: FlightControllerExecuteTakeoffImpl): (self: FlightController) => FlightController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isFlying))) {
      preViolations.push("[FlightController.executeTakeoff] pre violated: not self.isFlying");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FlightController.executeTakeoff] pre violated: not self.rthInitiated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFlying === true))) {
        postViolations.push("[FlightController.executeTakeoff] post violated: self.isFlying = true");
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

/** Impl signature for FlightController.executeTakeoff (async). User supplies this. */
export type FlightControllerExecuteTakeoffAsyncImpl = (self: FlightController) => Promise<{ self: FlightController; modified: { isFlying: unknown } }>;

/** Contract-checking wrapper for FlightController.executeTakeoff (async). */
export function wrapFlightControllerExecuteTakeoffAsync(impl: FlightControllerExecuteTakeoffAsyncImpl): (self: FlightController) => Promise<FlightController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.isFlying))) {
      preViolations.push("[FlightController.executeTakeoff] pre violated: not self.isFlying");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FlightController.executeTakeoff] pre violated: not self.rthInitiated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isFlying === true))) {
        postViolations.push("[FlightController.executeTakeoff] post violated: self.isFlying = true");
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

/** Impl signature for MissionPlannerInterface.submitDeliveryRequest. User supplies this. */
export type MissionPlannerInterfaceSubmitDeliveryRequestImpl = (self: MissionPlannerInterface, mNum: string, destLat: number, destLon: number) => { self: MissionPlannerInterface; modified: { missionId: unknown; destinationLatitude: unknown; destinationLongitude: unknown } };

/** Contract-checking wrapper for MissionPlannerInterface.submitDeliveryRequest. */
export function wrapMissionPlannerInterfaceSubmitDeliveryRequest(impl: MissionPlannerInterfaceSubmitDeliveryRequestImpl): (self: MissionPlannerInterface, mNum: string, destLat: number, destLon: number) => MissionPlannerInterface {
  return (self, mNum, destLat, destLon) => {
    const preViolations: string[] = [];
    if (!((mNum !== null))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: mNum <> null");
    }
    if (!((destLat >= -(90)))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: destLat >= -90.0");
    }
    if (!((destLat <= 90))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: destLat <= 90.0");
    }
    if (!((destLon >= -(180)))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: destLon >= -180.0");
    }
    if (!((destLon <= 180))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: destLon <= 180.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, mNum, destLat, destLon);
      const postViolations: string[] = [];
      if (!((__result.self.missionId === mNum))) {
        postViolations.push("[MissionPlannerInterface.submitDeliveryRequest] post violated: self.missionId = mNum");
      }
      if (!((__result.self.destinationLatitude === destLat))) {
        postViolations.push("[MissionPlannerInterface.submitDeliveryRequest] post violated: self.destinationLatitude = destLat");
      }
      if (!((__result.self.destinationLongitude === destLon))) {
        postViolations.push("[MissionPlannerInterface.submitDeliveryRequest] post violated: self.destinationLongitude = destLon");
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

/** Impl signature for MissionPlannerInterface.submitDeliveryRequest (async). User supplies this. */
export type MissionPlannerInterfaceSubmitDeliveryRequestAsyncImpl = (self: MissionPlannerInterface, mNum: string, destLat: number, destLon: number) => Promise<{ self: MissionPlannerInterface; modified: { missionId: unknown; destinationLatitude: unknown; destinationLongitude: unknown } }>;

/** Contract-checking wrapper for MissionPlannerInterface.submitDeliveryRequest (async). */
export function wrapMissionPlannerInterfaceSubmitDeliveryRequestAsync(impl: MissionPlannerInterfaceSubmitDeliveryRequestAsyncImpl): (self: MissionPlannerInterface, mNum: string, destLat: number, destLon: number) => Promise<MissionPlannerInterface> {
  return async (self, mNum, destLat, destLon) => {
    const preViolations: string[] = [];
    if (!((mNum !== null))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: mNum <> null");
    }
    if (!((destLat >= -(90)))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: destLat >= -90.0");
    }
    if (!((destLat <= 90))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: destLat <= 90.0");
    }
    if (!((destLon >= -(180)))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: destLon >= -180.0");
    }
    if (!((destLon <= 180))) {
      preViolations.push("[MissionPlannerInterface.submitDeliveryRequest] pre violated: destLon <= 180.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, mNum, destLat, destLon);
      const postViolations: string[] = [];
      if (!((__result.self.missionId === mNum))) {
        postViolations.push("[MissionPlannerInterface.submitDeliveryRequest] post violated: self.missionId = mNum");
      }
      if (!((__result.self.destinationLatitude === destLat))) {
        postViolations.push("[MissionPlannerInterface.submitDeliveryRequest] post violated: self.destinationLatitude = destLat");
      }
      if (!((__result.self.destinationLongitude === destLon))) {
        postViolations.push("[MissionPlannerInterface.submitDeliveryRequest] post violated: self.destinationLongitude = destLon");
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

/** Impl signature for MissionPlannerInterface.computeReserveForMission. User supplies this. */
export type MissionPlannerInterfaceComputeReserveForMissionImpl = (self: MissionPlannerInterface, distKm: number) => { self: MissionPlannerInterface; modified: { computedRoundTripReserve: unknown } };

/** Contract-checking wrapper for MissionPlannerInterface.computeReserveForMission. */
export function wrapMissionPlannerInterfaceComputeReserveForMission(impl: MissionPlannerInterfaceComputeReserveForMissionImpl): (self: MissionPlannerInterface, distKm: number) => MissionPlannerInterface {
  return (self, distKm) => {
    const preViolations: string[] = [];
    if (!((distKm >= 0))) {
      preViolations.push("[MissionPlannerInterface.computeReserveForMission] pre violated: distKm >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, distKm);
      const postViolations: string[] = [];
      if (!((__result.self.computedRoundTripReserve === (distKm * 0.01)))) {
        postViolations.push("[MissionPlannerInterface.computeReserveForMission] post violated: self.computedRoundTripReserve = (distKm * 0.01)");
      }
      // SKIPPED post-clause (not translatable): result = self.computedRoundTripReserve — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= 1.0 — unbound variable 'result'
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

/** Impl signature for MissionPlannerInterface.computeReserveForMission (async). User supplies this. */
export type MissionPlannerInterfaceComputeReserveForMissionAsyncImpl = (self: MissionPlannerInterface, distKm: number) => Promise<{ self: MissionPlannerInterface; modified: { computedRoundTripReserve: unknown } }>;

/** Contract-checking wrapper for MissionPlannerInterface.computeReserveForMission (async). */
export function wrapMissionPlannerInterfaceComputeReserveForMissionAsync(impl: MissionPlannerInterfaceComputeReserveForMissionAsyncImpl): (self: MissionPlannerInterface, distKm: number) => Promise<MissionPlannerInterface> {
  return async (self, distKm) => {
    const preViolations: string[] = [];
    if (!((distKm >= 0))) {
      preViolations.push("[MissionPlannerInterface.computeReserveForMission] pre violated: distKm >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, distKm);
      const postViolations: string[] = [];
      if (!((__result.self.computedRoundTripReserve === (distKm * 0.01)))) {
        postViolations.push("[MissionPlannerInterface.computeReserveForMission] post violated: self.computedRoundTripReserve = (distKm * 0.01)");
      }
      // SKIPPED post-clause (not translatable): result = self.computedRoundTripReserve — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= 1.0 — unbound variable 'result'
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

/** Impl signature for DroneMissionController.authorizeTakeoff. User supplies this. */
export type DroneMissionControllerAuthorizeTakeoffImpl = (self: DroneMissionController, currentSoC: number, computedReserve: number) => { self: DroneMissionController; modified: { isFlying: unknown } };

/** Contract-checking wrapper for DroneMissionController.authorizeTakeoff. */
export function wrapDroneMissionControllerAuthorizeTakeoff(impl: DroneMissionControllerAuthorizeTakeoffImpl): (self: DroneMissionController, currentSoC: number, computedReserve: number) => DroneMissionController {
  return (self, currentSoC, computedReserve) => {
    const preViolations: string[] = [];
    if (!((currentSoC >= 0))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: currentSoC >= 0.0");
    }
    if (!((currentSoC <= 1))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: currentSoC <= 1.0");
    }
    if (!((computedReserve >= 0))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: computedReserve >= 0.0");
    }
    if (!((computedReserve <= 1))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: computedReserve <= 1.0");
    }
    if (!(!(self.isFlying))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: not self.isFlying");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: not self.rthInitiated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentSoC, computedReserve);
      const postViolations: string[] = [];
      if (!((__result.self.safeReserveRatio >= 0.2))) {
        postViolations.push("[DroneMissionController.authorizeTakeoff] post violated: self.safeReserveRatio >= 0.20");
      }
      if (!((((currentSoC >= (computedReserve * (1 + __result.self.safeReserveRatio)))) ? ((__result.self.isFlying === true)) : ((__result.self.isFlying === false))))) {
        postViolations.push("[DroneMissionController.authorizeTakeoff] post violated: if currentSoC >= computedReserve * (1.0 + self.safeReserveRatio) then\n            self.isFlying = true\n          else\n            self.isFlying = false\n          endif");
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

/** Impl signature for DroneMissionController.authorizeTakeoff (async). User supplies this. */
export type DroneMissionControllerAuthorizeTakeoffAsyncImpl = (self: DroneMissionController, currentSoC: number, computedReserve: number) => Promise<{ self: DroneMissionController; modified: { isFlying: unknown } }>;

/** Contract-checking wrapper for DroneMissionController.authorizeTakeoff (async). */
export function wrapDroneMissionControllerAuthorizeTakeoffAsync(impl: DroneMissionControllerAuthorizeTakeoffAsyncImpl): (self: DroneMissionController, currentSoC: number, computedReserve: number) => Promise<DroneMissionController> {
  return async (self, currentSoC, computedReserve) => {
    const preViolations: string[] = [];
    if (!((currentSoC >= 0))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: currentSoC >= 0.0");
    }
    if (!((currentSoC <= 1))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: currentSoC <= 1.0");
    }
    if (!((computedReserve >= 0))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: computedReserve >= 0.0");
    }
    if (!((computedReserve <= 1))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: computedReserve <= 1.0");
    }
    if (!(!(self.isFlying))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: not self.isFlying");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[DroneMissionController.authorizeTakeoff] pre violated: not self.rthInitiated");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentSoC, computedReserve);
      const postViolations: string[] = [];
      if (!((__result.self.safeReserveRatio >= 0.2))) {
        postViolations.push("[DroneMissionController.authorizeTakeoff] post violated: self.safeReserveRatio >= 0.20");
      }
      if (!((((currentSoC >= (computedReserve * (1 + __result.self.safeReserveRatio)))) ? ((__result.self.isFlying === true)) : ((__result.self.isFlying === false))))) {
        postViolations.push("[DroneMissionController.authorizeTakeoff] post violated: if currentSoC >= computedReserve * (1.0 + self.safeReserveRatio) then\n            self.isFlying = true\n          else\n            self.isFlying = false\n          endif");
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

/** Impl signature for DroneMissionController.detectGeofenceViolation. User supplies this. */
export type DroneMissionControllerDetectGeofenceViolationImpl = (self: DroneMissionController, isInsideGeofence: boolean) => { self: DroneMissionController; modified: { geofenceViolationDetected: unknown; rthInitiated: unknown; isFlying: unknown } };

/** Contract-checking wrapper for DroneMissionController.detectGeofenceViolation. */
export function wrapDroneMissionControllerDetectGeofenceViolation(impl: DroneMissionControllerDetectGeofenceViolationImpl): (self: DroneMissionController, isInsideGeofence: boolean) => DroneMissionController {
  return (self, isInsideGeofence) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[DroneMissionController.detectGeofenceViolation] pre violated: self.isFlying = true");
    }
    if (!(!(self.geofenceViolationDetected))) {
      preViolations.push("[DroneMissionController.detectGeofenceViolation] pre violated: not self.geofenceViolationDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, isInsideGeofence);
      const postViolations: string[] = [];
      if (!((__result.self.geofenceMaxResponseSec <= 2))) {
        postViolations.push("[DroneMissionController.detectGeofenceViolation] post violated: self.geofenceMaxResponseSec <= 2.0");
      }
      if (!(((!(isInsideGeofence)) ? ((((__result.self.geofenceViolationDetected === true) && (__result.self.rthInitiated === true)) && (__result.self.isFlying === false))) : ((__result.self.geofenceViolationDetected === false))))) {
        postViolations.push("[DroneMissionController.detectGeofenceViolation] post violated: if not isInsideGeofence then\n            self.geofenceViolationDetected = true and\n            self.rthInitiated = true and\n            self.isFlying = false\n          else\n            self.geofenceViolationDetected = false\n          endif");
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

/** Impl signature for DroneMissionController.detectGeofenceViolation (async). User supplies this. */
export type DroneMissionControllerDetectGeofenceViolationAsyncImpl = (self: DroneMissionController, isInsideGeofence: boolean) => Promise<{ self: DroneMissionController; modified: { geofenceViolationDetected: unknown; rthInitiated: unknown; isFlying: unknown } }>;

/** Contract-checking wrapper for DroneMissionController.detectGeofenceViolation (async). */
export function wrapDroneMissionControllerDetectGeofenceViolationAsync(impl: DroneMissionControllerDetectGeofenceViolationAsyncImpl): (self: DroneMissionController, isInsideGeofence: boolean) => Promise<DroneMissionController> {
  return async (self, isInsideGeofence) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[DroneMissionController.detectGeofenceViolation] pre violated: self.isFlying = true");
    }
    if (!(!(self.geofenceViolationDetected))) {
      preViolations.push("[DroneMissionController.detectGeofenceViolation] pre violated: not self.geofenceViolationDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, isInsideGeofence);
      const postViolations: string[] = [];
      if (!((__result.self.geofenceMaxResponseSec <= 2))) {
        postViolations.push("[DroneMissionController.detectGeofenceViolation] post violated: self.geofenceMaxResponseSec <= 2.0");
      }
      if (!(((!(isInsideGeofence)) ? ((((__result.self.geofenceViolationDetected === true) && (__result.self.rthInitiated === true)) && (__result.self.isFlying === false))) : ((__result.self.geofenceViolationDetected === false))))) {
        postViolations.push("[DroneMissionController.detectGeofenceViolation] post violated: if not isInsideGeofence then\n            self.geofenceViolationDetected = true and\n            self.rthInitiated = true and\n            self.isFlying = false\n          else\n            self.geofenceViolationDetected = false\n          endif");
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

/** Impl signature for DroneMissionController.monitorBatterySoC. User supplies this. */
export type DroneMissionControllerMonitorBatterySoCImpl = (self: DroneMissionController, currentSoC: number) => { self: DroneMissionController; modified: { socBelowThreshold: unknown; rthInitiated: unknown; isFlying: unknown } };

/** Contract-checking wrapper for DroneMissionController.monitorBatterySoC. */
export function wrapDroneMissionControllerMonitorBatterySoC(impl: DroneMissionControllerMonitorBatterySoCImpl): (self: DroneMissionController, currentSoC: number) => DroneMissionController {
  return (self, currentSoC) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[DroneMissionController.monitorBatterySoC] pre violated: self.isFlying = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[DroneMissionController.monitorBatterySoC] pre violated: not self.rthInitiated");
    }
    if (!((currentSoC >= 0))) {
      preViolations.push("[DroneMissionController.monitorBatterySoC] pre violated: currentSoC >= 0.0");
    }
    if (!((currentSoC <= 1))) {
      preViolations.push("[DroneMissionController.monitorBatterySoC] pre violated: currentSoC <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentSoC);
      const postViolations: string[] = [];
      if (!((__result.self.rthBatteryThreshold >= 0))) {
        postViolations.push("[DroneMissionController.monitorBatterySoC] post violated: self.rthBatteryThreshold >= 0.0");
      }
      if (!((((currentSoC <= __result.self.rthBatteryThreshold)) ? ((((__result.self.socBelowThreshold === true) && (__result.self.rthInitiated === true)) && (__result.self.isFlying === false))) : ((__result.self.socBelowThreshold === false))))) {
        postViolations.push("[DroneMissionController.monitorBatterySoC] post violated: if currentSoC <= self.rthBatteryThreshold then\n            self.socBelowThreshold = true and\n            self.rthInitiated = true and\n            self.isFlying = false\n          else\n            self.socBelowThreshold = false\n          endif");
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

/** Impl signature for DroneMissionController.monitorBatterySoC (async). User supplies this. */
export type DroneMissionControllerMonitorBatterySoCAsyncImpl = (self: DroneMissionController, currentSoC: number) => Promise<{ self: DroneMissionController; modified: { socBelowThreshold: unknown; rthInitiated: unknown; isFlying: unknown } }>;

/** Contract-checking wrapper for DroneMissionController.monitorBatterySoC (async). */
export function wrapDroneMissionControllerMonitorBatterySoCAsync(impl: DroneMissionControllerMonitorBatterySoCAsyncImpl): (self: DroneMissionController, currentSoC: number) => Promise<DroneMissionController> {
  return async (self, currentSoC) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[DroneMissionController.monitorBatterySoC] pre violated: self.isFlying = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[DroneMissionController.monitorBatterySoC] pre violated: not self.rthInitiated");
    }
    if (!((currentSoC >= 0))) {
      preViolations.push("[DroneMissionController.monitorBatterySoC] pre violated: currentSoC >= 0.0");
    }
    if (!((currentSoC <= 1))) {
      preViolations.push("[DroneMissionController.monitorBatterySoC] pre violated: currentSoC <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentSoC);
      const postViolations: string[] = [];
      if (!((__result.self.rthBatteryThreshold >= 0))) {
        postViolations.push("[DroneMissionController.monitorBatterySoC] post violated: self.rthBatteryThreshold >= 0.0");
      }
      if (!((((currentSoC <= __result.self.rthBatteryThreshold)) ? ((((__result.self.socBelowThreshold === true) && (__result.self.rthInitiated === true)) && (__result.self.isFlying === false))) : ((__result.self.socBelowThreshold === false))))) {
        postViolations.push("[DroneMissionController.monitorBatterySoC] post violated: if currentSoC <= self.rthBatteryThreshold then\n            self.socBelowThreshold = true and\n            self.rthInitiated = true and\n            self.isFlying = false\n          else\n            self.socBelowThreshold = false\n          endif");
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

/** Impl signature for DroneMissionController.cancelRTH. User supplies this. */
export type DroneMissionControllerCancelRTHImpl = (self: DroneMissionController, operatorConfirm: string) => { self: DroneMissionController; modified: {} };

/** Contract-checking wrapper for DroneMissionController.cancelRTH. */
export function wrapDroneMissionControllerCancelRTH(impl: DroneMissionControllerCancelRTHImpl): (self: DroneMissionController, operatorConfirm: string) => DroneMissionController {
  return (self, operatorConfirm) => {
    const preViolations: string[] = [];
    if (!((self.rthInitiated === true))) {
      preViolations.push("[DroneMissionController.cancelRTH] pre violated: self.rthInitiated = true");
    }
    if (!((operatorConfirm === "confirm_cancel"))) {
      preViolations.push("[DroneMissionController.cancelRTH] pre violated: operatorConfirm = 'confirm_cancel'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, operatorConfirm);
      const postViolations: string[] = [];
      if (!(!(__result.self.rthIsCancellable))) {
        postViolations.push("[DroneMissionController.cancelRTH] post violated: not self.rthIsCancellable");
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

/** Impl signature for DroneMissionController.cancelRTH (async). User supplies this. */
export type DroneMissionControllerCancelRTHAsyncImpl = (self: DroneMissionController, operatorConfirm: string) => Promise<{ self: DroneMissionController; modified: {} }>;

/** Contract-checking wrapper for DroneMissionController.cancelRTH (async). */
export function wrapDroneMissionControllerCancelRTHAsync(impl: DroneMissionControllerCancelRTHAsyncImpl): (self: DroneMissionController, operatorConfirm: string) => Promise<DroneMissionController> {
  return async (self, operatorConfirm) => {
    const preViolations: string[] = [];
    if (!((self.rthInitiated === true))) {
      preViolations.push("[DroneMissionController.cancelRTH] pre violated: self.rthInitiated = true");
    }
    if (!((operatorConfirm === "confirm_cancel"))) {
      preViolations.push("[DroneMissionController.cancelRTH] pre violated: operatorConfirm = 'confirm_cancel'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, operatorConfirm);
      const postViolations: string[] = [];
      if (!(!(__result.self.rthIsCancellable))) {
        postViolations.push("[DroneMissionController.cancelRTH] post violated: not self.rthIsCancellable");
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

/** Impl signature for FormalizedDroneMissionController.rejectTakeoffDueToBattery. User supplies this. */
export type FormalizedDroneMissionControllerRejectTakeoffDueToBatteryImpl = (self: FormalizedDroneMissionController, currentSoC: number, computedReserve: number) => { self: FormalizedDroneMissionController; modified: {} };

/** Contract-checking wrapper for FormalizedDroneMissionController.rejectTakeoffDueToBattery. */
export function wrapFormalizedDroneMissionControllerRejectTakeoffDueToBattery(impl: FormalizedDroneMissionControllerRejectTakeoffDueToBatteryImpl): (self: FormalizedDroneMissionController, currentSoC: number, computedReserve: number) => FormalizedDroneMissionController {
  return (self, currentSoC, computedReserve) => {
    const preViolations: string[] = [];
    if (!(!(self.isFlying))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: not self.isFlying");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: not self.rthInitiated");
    }
    if (!((currentSoC >= 0))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: currentSoC >= 0.0");
    }
    if (!((currentSoC <= 1))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: currentSoC <= 1.0");
    }
    if (!((computedReserve >= 0))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: computedReserve >= 0.0");
    }
    if (!((computedReserve <= 1))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: computedReserve <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentSoC, computedReserve);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (currentSoC < computedReserve * (1.0 + self.safeReserveRatio)) — unbound variable 'result'
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

/** Impl signature for FormalizedDroneMissionController.rejectTakeoffDueToBattery (async). User supplies this. */
export type FormalizedDroneMissionControllerRejectTakeoffDueToBatteryAsyncImpl = (self: FormalizedDroneMissionController, currentSoC: number, computedReserve: number) => Promise<{ self: FormalizedDroneMissionController; modified: {} }>;

/** Contract-checking wrapper for FormalizedDroneMissionController.rejectTakeoffDueToBattery (async). */
export function wrapFormalizedDroneMissionControllerRejectTakeoffDueToBatteryAsync(impl: FormalizedDroneMissionControllerRejectTakeoffDueToBatteryAsyncImpl): (self: FormalizedDroneMissionController, currentSoC: number, computedReserve: number) => Promise<FormalizedDroneMissionController> {
  return async (self, currentSoC, computedReserve) => {
    const preViolations: string[] = [];
    if (!(!(self.isFlying))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: not self.isFlying");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: not self.rthInitiated");
    }
    if (!((currentSoC >= 0))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: currentSoC >= 0.0");
    }
    if (!((currentSoC <= 1))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: currentSoC <= 1.0");
    }
    if (!((computedReserve >= 0))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: computedReserve >= 0.0");
    }
    if (!((computedReserve <= 1))) {
      preViolations.push("[FormalizedDroneMissionController.rejectTakeoffDueToBattery] pre violated: computedReserve <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentSoC, computedReserve);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (currentSoC < computedReserve * (1.0 + self.safeReserveRatio)) — unbound variable 'result'
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

/** Impl signature for FormalizedDroneMissionController.enforceGeofenceContainment. User supplies this. */
export type FormalizedDroneMissionControllerEnforceGeofenceContainmentImpl = (self: FormalizedDroneMissionController, responseTimeMs: number) => { self: FormalizedDroneMissionController; modified: { rthInitiated: unknown; isFlying: unknown } };

/** Contract-checking wrapper for FormalizedDroneMissionController.enforceGeofenceContainment. */
export function wrapFormalizedDroneMissionControllerEnforceGeofenceContainment(impl: FormalizedDroneMissionControllerEnforceGeofenceContainmentImpl): (self: FormalizedDroneMissionController, responseTimeMs: number) => FormalizedDroneMissionController {
  return (self, responseTimeMs) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] pre violated: self.isFlying = true");
    }
    if (!((self.geofenceViolationDetected === true))) {
      preViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] pre violated: self.geofenceViolationDetected = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] pre violated: not self.rthInitiated");
    }
    if (!((responseTimeMs >= 0))) {
      preViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] pre violated: responseTimeMs >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, responseTimeMs);
      const postViolations: string[] = [];
      if (!((__result.self.geofenceMaxResponseSec <= 2))) {
        postViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] post violated: self.geofenceMaxResponseSec <= 2.0");
      }
      if (!((__result.self.rthInitiated === true))) {
        postViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] post violated: self.rthInitiated = true");
      }
      if (!((__result.self.isFlying === false))) {
        postViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] post violated: self.isFlying = false");
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

/** Impl signature for FormalizedDroneMissionController.enforceGeofenceContainment (async). User supplies this. */
export type FormalizedDroneMissionControllerEnforceGeofenceContainmentAsyncImpl = (self: FormalizedDroneMissionController, responseTimeMs: number) => Promise<{ self: FormalizedDroneMissionController; modified: { rthInitiated: unknown; isFlying: unknown } }>;

/** Contract-checking wrapper for FormalizedDroneMissionController.enforceGeofenceContainment (async). */
export function wrapFormalizedDroneMissionControllerEnforceGeofenceContainmentAsync(impl: FormalizedDroneMissionControllerEnforceGeofenceContainmentAsyncImpl): (self: FormalizedDroneMissionController, responseTimeMs: number) => Promise<FormalizedDroneMissionController> {
  return async (self, responseTimeMs) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] pre violated: self.isFlying = true");
    }
    if (!((self.geofenceViolationDetected === true))) {
      preViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] pre violated: self.geofenceViolationDetected = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] pre violated: not self.rthInitiated");
    }
    if (!((responseTimeMs >= 0))) {
      preViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] pre violated: responseTimeMs >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, responseTimeMs);
      const postViolations: string[] = [];
      if (!((__result.self.geofenceMaxResponseSec <= 2))) {
        postViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] post violated: self.geofenceMaxResponseSec <= 2.0");
      }
      if (!((__result.self.rthInitiated === true))) {
        postViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] post violated: self.rthInitiated = true");
      }
      if (!((__result.self.isFlying === false))) {
        postViolations.push("[FormalizedDroneMissionController.enforceGeofenceContainment] post violated: self.isFlying = false");
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

/** Impl signature for FormalizedDroneMissionController.enforceMidMissionBatteryRTH. User supplies this. */
export type FormalizedDroneMissionControllerEnforceMidMissionBatteryRTHImpl = (self: FormalizedDroneMissionController, currentSoC: number) => { self: FormalizedDroneMissionController; modified: { socBelowThreshold: unknown; rthInitiated: unknown; isFlying: unknown } };

/** Contract-checking wrapper for FormalizedDroneMissionController.enforceMidMissionBatteryRTH. */
export function wrapFormalizedDroneMissionControllerEnforceMidMissionBatteryRTH(impl: FormalizedDroneMissionControllerEnforceMidMissionBatteryRTHImpl): (self: FormalizedDroneMissionController, currentSoC: number) => FormalizedDroneMissionController {
  return (self, currentSoC) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] pre violated: self.isFlying = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] pre violated: not self.rthInitiated");
    }
    if (!((currentSoC >= 0))) {
      preViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] pre violated: currentSoC >= 0.0");
    }
    if (!((currentSoC <= 1))) {
      preViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] pre violated: currentSoC <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentSoC);
      const postViolations: string[] = [];
      if (!((__result.self.rthBatteryThreshold >= 0))) {
        postViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] post violated: self.rthBatteryThreshold >= 0.0");
      }
      if (!((((currentSoC <= __result.self.rthBatteryThreshold)) ? ((((__result.self.socBelowThreshold === true) && (__result.self.rthInitiated === true)) && (__result.self.isFlying === false))) : ((__result.self.socBelowThreshold === false))))) {
        postViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] post violated: if currentSoC <= self.rthBatteryThreshold then\n            self.socBelowThreshold = true and\n            self.rthInitiated = true and\n            self.isFlying = false\n          else\n            self.socBelowThreshold = false\n          endif");
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

/** Impl signature for FormalizedDroneMissionController.enforceMidMissionBatteryRTH (async). User supplies this. */
export type FormalizedDroneMissionControllerEnforceMidMissionBatteryRTHAsyncImpl = (self: FormalizedDroneMissionController, currentSoC: number) => Promise<{ self: FormalizedDroneMissionController; modified: { socBelowThreshold: unknown; rthInitiated: unknown; isFlying: unknown } }>;

/** Contract-checking wrapper for FormalizedDroneMissionController.enforceMidMissionBatteryRTH (async). */
export function wrapFormalizedDroneMissionControllerEnforceMidMissionBatteryRTHAsync(impl: FormalizedDroneMissionControllerEnforceMidMissionBatteryRTHAsyncImpl): (self: FormalizedDroneMissionController, currentSoC: number) => Promise<FormalizedDroneMissionController> {
  return async (self, currentSoC) => {
    const preViolations: string[] = [];
    if (!((self.isFlying === true))) {
      preViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] pre violated: self.isFlying = true");
    }
    if (!(!(self.rthInitiated))) {
      preViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] pre violated: not self.rthInitiated");
    }
    if (!((currentSoC >= 0))) {
      preViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] pre violated: currentSoC >= 0.0");
    }
    if (!((currentSoC <= 1))) {
      preViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] pre violated: currentSoC <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentSoC);
      const postViolations: string[] = [];
      if (!((__result.self.rthBatteryThreshold >= 0))) {
        postViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] post violated: self.rthBatteryThreshold >= 0.0");
      }
      if (!((((currentSoC <= __result.self.rthBatteryThreshold)) ? ((((__result.self.socBelowThreshold === true) && (__result.self.rthInitiated === true)) && (__result.self.isFlying === false))) : ((__result.self.socBelowThreshold === false))))) {
        postViolations.push("[FormalizedDroneMissionController.enforceMidMissionBatteryRTH] post violated: if currentSoC <= self.rthBatteryThreshold then\n            self.socBelowThreshold = true and\n            self.rthInitiated = true and\n            self.isFlying = false\n          else\n            self.socBelowThreshold = false\n          endif");
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

/** Impl signature for FormalizedDroneMissionController.rejectSafetyRTHCancellation. User supplies this. */
export type FormalizedDroneMissionControllerRejectSafetyRTHCancellationImpl = (self: FormalizedDroneMissionController, operatorConfirm: string) => { self: FormalizedDroneMissionController; modified: {} };

/** Contract-checking wrapper for FormalizedDroneMissionController.rejectSafetyRTHCancellation. */
export function wrapFormalizedDroneMissionControllerRejectSafetyRTHCancellation(impl: FormalizedDroneMissionControllerRejectSafetyRTHCancellationImpl): (self: FormalizedDroneMissionController, operatorConfirm: string) => FormalizedDroneMissionController {
  return (self, operatorConfirm) => {
    const preViolations: string[] = [];
    if (!((self.rthInitiated === true))) {
      preViolations.push("[FormalizedDroneMissionController.rejectSafetyRTHCancellation] pre violated: self.rthInitiated = true");
    }
    if (!((operatorConfirm === "confirm_cancel"))) {
      preViolations.push("[FormalizedDroneMissionController.rejectSafetyRTHCancellation] pre violated: operatorConfirm = 'confirm_cancel'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, operatorConfirm);
      const postViolations: string[] = [];
      if (!(!(__result.self.rthIsCancellable))) {
        postViolations.push("[FormalizedDroneMissionController.rejectSafetyRTHCancellation] post violated: not self.rthIsCancellable");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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

/** Impl signature for FormalizedDroneMissionController.rejectSafetyRTHCancellation (async). User supplies this. */
export type FormalizedDroneMissionControllerRejectSafetyRTHCancellationAsyncImpl = (self: FormalizedDroneMissionController, operatorConfirm: string) => Promise<{ self: FormalizedDroneMissionController; modified: {} }>;

/** Contract-checking wrapper for FormalizedDroneMissionController.rejectSafetyRTHCancellation (async). */
export function wrapFormalizedDroneMissionControllerRejectSafetyRTHCancellationAsync(impl: FormalizedDroneMissionControllerRejectSafetyRTHCancellationAsyncImpl): (self: FormalizedDroneMissionController, operatorConfirm: string) => Promise<FormalizedDroneMissionController> {
  return async (self, operatorConfirm) => {
    const preViolations: string[] = [];
    if (!((self.rthInitiated === true))) {
      preViolations.push("[FormalizedDroneMissionController.rejectSafetyRTHCancellation] pre violated: self.rthInitiated = true");
    }
    if (!((operatorConfirm === "confirm_cancel"))) {
      preViolations.push("[FormalizedDroneMissionController.rejectSafetyRTHCancellation] pre violated: operatorConfirm = 'confirm_cancel'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, operatorConfirm);
      const postViolations: string[] = [];
      if (!(!(__result.self.rthIsCancellable))) {
        postViolations.push("[FormalizedDroneMissionController.rejectSafetyRTHCancellation] post violated: not self.rthIsCancellable");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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

/** Lifecycle registry for PreTakeoffBatteryReserve commitments. */
export class PreTakeoffBatteryReserveRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PreTakeoffBatteryReserve>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PreTakeoffBatteryReserve — the typed wrapper guarantees that since
    // `register` only accepts PreTakeoffBatteryReserve instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PreTakeoffBatteryReserve): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PreTakeoffBatteryReserveId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PreTakeoffBatteryReserveId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PreTakeoffBatteryReserveId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PreTakeoffBatteryReserve>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PreTakeoffBatteryReserve>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for GeofenceContainment commitments. */
export class GeofenceContainmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<GeofenceContainment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a GeofenceContainment — the typed wrapper guarantees that since
    // `register` only accepts GeofenceContainment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: GeofenceContainment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: GeofenceContainmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: GeofenceContainmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: GeofenceContainmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<GeofenceContainment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<GeofenceContainment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for MidMissionBatteryRTH commitments. */
export class MidMissionBatteryRTHRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MidMissionBatteryRTH>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MidMissionBatteryRTH — the typed wrapper guarantees that since
    // `register` only accepts MidMissionBatteryRTH instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MidMissionBatteryRTH): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MidMissionBatteryRTHId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MidMissionBatteryRTHId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MidMissionBatteryRTHId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MidMissionBatteryRTH>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MidMissionBatteryRTH>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AuthoritativeRTH commitments. */
export class AuthoritativeRTHRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AuthoritativeRTH>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AuthoritativeRTH — the typed wrapper guarantees that since
    // `register` only accepts AuthoritativeRTH instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AuthoritativeRTH): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AuthoritativeRTHId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AuthoritativeRTHId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AuthoritativeRTHId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AuthoritativeRTH>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AuthoritativeRTH>[];
  }

  size(): number {
    return this.inner.size();
  }
}

