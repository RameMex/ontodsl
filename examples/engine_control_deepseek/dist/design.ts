// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for SpeedMonitor. Runtime: string. Compile-time: branded. */
export type SpeedMonitorId = string & { readonly __brand: "SpeedMonitorId" };
/** Identity type for ThrustManager. Runtime: string. Compile-time: branded. */
export type ThrustManagerId = string & { readonly __brand: "ThrustManagerId" };
/** Identity type for SensorFaultHandler. Runtime: string. Compile-time: branded. */
export type SensorFaultHandlerId = string & { readonly __brand: "SensorFaultHandlerId" };
/** Identity type for OverspeedProtectionUnit. Runtime: string. Compile-time: branded. */
export type OverspeedProtectionUnitId = string & { readonly __brand: "OverspeedProtectionUnitId" };
/** Identity type for OverspeedAlertChannel. Runtime: string. Compile-time: branded. */
export type OverspeedAlertChannelId = string & { readonly __brand: "OverspeedAlertChannelId" };
/** Identity type for FaultNotificationChannel. Runtime: string. Compile-time: branded. */
export type FaultNotificationChannelId = string & { readonly __brand: "FaultNotificationChannelId" };
/** Identity type for ThrustFaultChannel. Runtime: string. Compile-time: branded. */
export type ThrustFaultChannelId = string & { readonly __brand: "ThrustFaultChannelId" };
/** Identity type for ProtectionLink. Runtime: string. Compile-time: branded. */
export type ProtectionLinkId = string & { readonly __brand: "ProtectionLinkId" };
/** Identity type for OverspeedDetectionAndMitigationFlow. Runtime: string. Compile-time: branded. */
export type OverspeedDetectionAndMitigationFlowId = string & { readonly __brand: "OverspeedDetectionAndMitigationFlowId" };
/** Identity type for ThrustManagementFlow. Runtime: string. Compile-time: branded. */
export type ThrustManagementFlowId = string & { readonly __brand: "ThrustManagementFlowId" };
/** Identity type for SensorFaultRecoveryFlow. Runtime: string. Compile-time: branded. */
export type SensorFaultRecoveryFlowId = string & { readonly __brand: "SensorFaultRecoveryFlowId" };
/** Identity type for Pilot. Runtime: string. Compile-time: branded. */
export type PilotId = string & { readonly __brand: "PilotId" };
/** Identity type for Airline. Runtime: string. Compile-time: branded. */
export type AirlineId = string & { readonly __brand: "AirlineId" };
/** Identity type for MaintenanceProvider. Runtime: string. Compile-time: branded. */
export type MaintenanceProviderId = string & { readonly __brand: "MaintenanceProviderId" };
/** Identity type for Passengers. Runtime: string. Compile-time: branded. */
export type PassengersId = string & { readonly __brand: "PassengersId" };
/** Identity type for EngineVendor. Runtime: string. Compile-time: branded. */
export type EngineVendorId = string & { readonly __brand: "EngineVendorId" };
/** Identity type for OverspeedPrevention. Runtime: string. Compile-time: branded. */
export type OverspeedPreventionId = string & { readonly __brand: "OverspeedPreventionId" };
/** Identity type for ThrustManagement. Runtime: string. Compile-time: branded. */
export type ThrustManagementId = string & { readonly __brand: "ThrustManagementId" };
/** Identity type for SensorFaultTolerance. Runtime: string. Compile-time: branded. */
export type SensorFaultToleranceId = string & { readonly __brand: "SensorFaultToleranceId" };
/** Identity type for Overspeed. Runtime: string. Compile-time: branded. */
export type OverspeedId = string & { readonly __brand: "OverspeedId" };
/** Identity type for ContinuousIgnition. Runtime: string. Compile-time: branded. */
export type ContinuousIgnitionId = string & { readonly __brand: "ContinuousIgnitionId" };
/** Identity type for ThrustReverser. Runtime: string. Compile-time: branded. */
export type ThrustReverserId = string & { readonly __brand: "ThrustReverserId" };
/** Identity type for ModelledValue. Runtime: string. Compile-time: branded. */
export type ModelledValueId = string & { readonly __brand: "ModelledValueId" };
/** Identity type for OverspeedDetectionFlow. Runtime: string. Compile-time: branded. */
export type OverspeedDetectionFlowId = string & { readonly __brand: "OverspeedDetectionFlowId" };
/** Identity type for IgnitionManagementFlow. Runtime: string. Compile-time: branded. */
export type IgnitionManagementFlowId = string & { readonly __brand: "IgnitionManagementFlowId" };
/** Identity type for ReverserDeploymentFlow. Runtime: string. Compile-time: branded. */
export type ReverserDeploymentFlowId = string & { readonly __brand: "ReverserDeploymentFlowId" };
/** Identity type for SensorFaultHandlingFlow. Runtime: string. Compile-time: branded. */
export type SensorFaultHandlingFlowId = string & { readonly __brand: "SensorFaultHandlingFlowId" };
/** Identity type for EngineControlSystem. Runtime: string. Compile-time: branded. */
export type EngineControlSystemId = string & { readonly __brand: "EngineControlSystemId" };
/** Identity type for SensorKindOrSimilar. Runtime: string. Compile-time: branded. */
export type SensorKindOrSimilarId = string & { readonly __brand: "SensorKindOrSimilarId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface SpeedMonitor {
  readonly monitorId: SpeedMonitorId;
  readonly maxSafeSpeed: number;
  readonly currentSpeed: number;
  readonly overspeedDetected: boolean;
  readonly overspeedProtectionFitted: boolean;
  readonly fuelFlow: number;
}

/** @stereotype <<Kind>> */
export interface ThrustManager {
  readonly managerId: ThrustManagerId;
  readonly onGround: boolean;
  readonly inFlight: boolean;
  readonly thrustCommanded: number;
  readonly thrustHeld: number;
  readonly reverserCommanded: boolean;
  readonly reverserEnabled: boolean;
  readonly continuousIgnitionCommanded: boolean;
  readonly continuousIgnitionEnabled: boolean;
}

/** @stereotype <<Kind>> */
export interface SensorFaultHandler {
  readonly handlerId: SensorFaultHandlerId;
  readonly faultDetected: boolean;
  readonly sensorFaultActive: boolean;
  readonly modelledValueAvailable: boolean;
  readonly modelledValueInUse: boolean;
}

/** @stereotype <<Kind>> */
export interface OverspeedProtectionUnit {
  readonly protectionId: OverspeedProtectionUnitId;
  readonly isArmed: boolean;
  readonly fuelShutoffValve: boolean;
  readonly overspeedDetected: boolean;
}

/** @stereotype <<Role>> */
export interface OverspeedAlertSender {
  readonly monitorId: string;
  readonly overspeedDetected: boolean;
  readonly fuelFlow: number;
}

/** @stereotype <<Role>> */
export interface OverspeedAlertReceiver {
  readonly managerId: string;
  readonly thrustCommanded: number;
  readonly reverserEnabled: boolean;
}

/** @stereotype <<Relator>> */
export interface OverspeedAlertChannel {
  readonly channelId: OverspeedAlertChannelId;
  readonly alertActive: boolean;
  readonly lastAlertTimestamp: number;
}

/** @stereotype <<Role>> */
export interface FaultNotifier {
  readonly handlerId: string;
  readonly sensorFaultActive: boolean;
  readonly modelledValueAvailable: boolean;
}

/** @stereotype <<Role>> */
export interface ModelledValueInjector {
  readonly monitorId: string;
  readonly currentSpeed: number;
  readonly fuelFlow: number;
}

/** @stereotype <<Relator>> */
export interface FaultNotificationChannel {
  readonly channelId: FaultNotificationChannelId;
  readonly modelledCurrentSpeed: number;
  readonly modelledFuelFlow: number;
  readonly injectionActive: boolean;
}

/** @stereotype <<Role>> */
export interface FaultNotifier2 {
  readonly handlerId: string;
  readonly sensorFaultActive: boolean;
}

/** @stereotype <<Role>> */
export interface ThrustModelledValueInjector {
  readonly managerId: string;
  readonly thrustCommanded: number;
}

/** @stereotype <<Relator>> */
export interface ThrustFaultChannel {
  readonly channelId: ThrustFaultChannelId;
  readonly modelledThrustCommand: number;
  readonly injectionActive: boolean;
}

/** @stereotype <<Role>> */
export interface OverspeedSource {
  readonly monitorId: string;
  readonly overspeedDetected: boolean;
}

/** @stereotype <<Role>> */
export interface ProtectionActuator {
  readonly protectionId: string;
  readonly fuelShutoffValve: boolean;
}

/** @stereotype <<Relator>> */
export interface ProtectionLink {
  readonly linkId: ProtectionLinkId;
  readonly protectionArmed: boolean;
}

/** @stereotype <<Happening>> */
export interface OverspeedDetectionAndMitigationFlow {
  readonly flowId: OverspeedDetectionAndMitigationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ThrustManagementFlow {
  readonly flowId: ThrustManagementFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SensorFaultRecoveryFlow {
  readonly flowId: SensorFaultRecoveryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Agent>> */
export interface Pilot {
  readonly pilotId: PilotId;
  readonly name: string;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface Airline {
  readonly airlineId: AirlineId;
  readonly name: string;
  readonly fleetSize: number;
}

/** @stereotype <<Agent>> */
export interface MaintenanceProvider {
  readonly maintenanceId: MaintenanceProviderId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface Passengers {
  readonly passengerId: PassengersId;
}

/** @stereotype <<Agent>> */
export interface EngineVendor {
  readonly vendorId: EngineVendorId;
  readonly name: string;
}

/** @stereotype <<Commitment>> */
export interface OverspeedPrevention {
  readonly commitmentId: OverspeedPreventionId;
  readonly maxSafeSpeed: number;
}

/** @stereotype <<Commitment>> */
export interface ThrustManagement {
  readonly commitmentId: ThrustManagementId;
  readonly onGround: boolean;
  readonly reverserCommanded: boolean;
  readonly reverserEnabled: boolean;
}

/** @stereotype <<Commitment>> */
export interface SensorFaultTolerance {
  readonly commitmentId: SensorFaultToleranceId;
  readonly faultDetected: boolean;
  readonly modelledValueAvailable: boolean;
}

/** @stereotype <<Kind>> */
export interface Overspeed {
  readonly overspeedId: OverspeedId;
  readonly description: string;
  readonly certifiedMaxSpeedReached: boolean;
}

/** @stereotype <<Kind>> */
export interface ContinuousIgnition {
  readonly ignitionId: ContinuousIgnitionId;
  readonly modeName: string;
  readonly enabled: boolean;
}

/** @stereotype <<Kind>> */
export interface ThrustReverser {
  readonly reverserId: ThrustReverserId;
  readonly isDeployed: boolean;
}

/** @stereotype <<Kind>> */
export interface ModelledValue {
  readonly modelledValueId: ModelledValueId;
  readonly sensorName: string;
  readonly estimatedValue: number;
}

/** @stereotype <<Happening>> */
export interface OverspeedDetectionFlow {
  readonly flowId: OverspeedDetectionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface IgnitionManagementFlow {
  readonly flowId: IgnitionManagementFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ReverserDeploymentFlow {
  readonly flowId: ReverserDeploymentFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SensorFaultHandlingFlow {
  readonly flowId: SensorFaultHandlingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface EngineControlSystem {
  readonly systemId: EngineControlSystemId;
  readonly maxSafeSpeed: number;
  readonly onGround: boolean;
  readonly reverserCommanded: boolean;
  readonly reverserEnabled: boolean;
  readonly faultDetected: boolean;
  readonly modelledValueAvailable: boolean;
  readonly currentSpeed: number;
  readonly fuelFlow: number;
  readonly overspeedProtectionFitted: boolean;
  readonly overspeedDetected: boolean;
  readonly continuousIgnitionCommanded: boolean;
  readonly continuousIgnitionEnabled: boolean;
  readonly thrustCommanded: number;
  readonly thrustHeld: number;
  readonly inFlight: boolean;
  readonly sensorFaultActive: boolean;
  readonly modelledValueInUse: boolean;
}

/** @stereotype <<Category>> */
export interface Do178cDalACompliant {
  readonly dalLevel: string;
  readonly objectivesMet: boolean;
}

/** @stereotype <<Category>> */
export interface CSEChapter5Compliant {
  readonly csEChapter5Ref: string;
  readonly overspeedPreventionMethod: string;
  readonly overspeedTestCompleted: boolean;
  readonly reverserGroundOnlyVerified: boolean;
}

/** @stereotype <<Category>> */
export interface Iso26262AsilDCompliant {
  readonly asilLevel: string;
  readonly faultToleranceTimeIntervalMs: number;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleSensorReadings {
}

/** @stereotype <<Kind>> */
export interface SensorKindOrSimilar {
  readonly sensorKindId: SensorKindOrSimilarId;
  readonly minSpeed: number;
  readonly maxSpeed: number;
  readonly certifiedMaxSafeSpeed: number;
}

/** @stereotype <<Subkind>> */
export interface EngineControlSystemFormalized extends EngineControlSystem {
  readonly regulatoryDalLevel: string;
  readonly regulatoryObjectivesMet: boolean;
  readonly regulatoryCSEChapter5Ref: string;
  readonly regulatoryOverspeedMethod: string;
  readonly regulatoryOverspeedTestDone: boolean;
  readonly regulatoryReverserVerified: boolean;
  readonly regulatoryAsilLevel: string;
  readonly regulatoryFaultToleranceMs: number;
  readonly regulatoryMinSpeed: number;
  readonly regulatoryMaxSpeed: number;
  readonly regulatoryCertifiedMaxSafeSpeed: number;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly owner: string;
  readonly validated: boolean;
}

/** @stereotype <<Subkind>> */
export interface DigitalTwinEstimator extends ModelledValue {
  readonly estimatorType: string;
  readonly updateRateHz: number;
}

/** @stereotype <<Subkind>> */
export interface PhysicsSimulatedValue extends ModelledValue {
  readonly simulationLagMs: number;
  readonly physicsModelVersion: string;
}


// ─── Factory functions ───

export function makeSpeedMonitor(data: {
  monitorId: string;
  maxSafeSpeed: number;
  currentSpeed: number;
  overspeedDetected: boolean;
  overspeedProtectionFitted: boolean;
  fuelFlow: number;
}): SpeedMonitor {
  return {
    monitorId: data.monitorId as SpeedMonitorId,
    maxSafeSpeed: data.maxSafeSpeed,
    currentSpeed: data.currentSpeed,
    overspeedDetected: data.overspeedDetected,
    overspeedProtectionFitted: data.overspeedProtectionFitted,
    fuelFlow: data.fuelFlow,
  };
}

export function makeThrustManager(data: {
  managerId: string;
  onGround: boolean;
  inFlight: boolean;
  thrustCommanded: number;
  thrustHeld: number;
  reverserCommanded: boolean;
  reverserEnabled: boolean;
  continuousIgnitionCommanded: boolean;
  continuousIgnitionEnabled: boolean;
}): ThrustManager {
  return {
    managerId: data.managerId as ThrustManagerId,
    onGround: data.onGround,
    inFlight: data.inFlight,
    thrustCommanded: data.thrustCommanded,
    thrustHeld: data.thrustHeld,
    reverserCommanded: data.reverserCommanded,
    reverserEnabled: data.reverserEnabled,
    continuousIgnitionCommanded: data.continuousIgnitionCommanded,
    continuousIgnitionEnabled: data.continuousIgnitionEnabled,
  };
}

export function makeSensorFaultHandler(data: {
  handlerId: string;
  faultDetected: boolean;
  sensorFaultActive: boolean;
  modelledValueAvailable: boolean;
  modelledValueInUse: boolean;
}): SensorFaultHandler {
  return {
    handlerId: data.handlerId as SensorFaultHandlerId,
    faultDetected: data.faultDetected,
    sensorFaultActive: data.sensorFaultActive,
    modelledValueAvailable: data.modelledValueAvailable,
    modelledValueInUse: data.modelledValueInUse,
  };
}

export function makeOverspeedProtectionUnit(data: {
  protectionId: string;
  isArmed: boolean;
  fuelShutoffValve: boolean;
  overspeedDetected: boolean;
}): OverspeedProtectionUnit {
  return {
    protectionId: data.protectionId as OverspeedProtectionUnitId,
    isArmed: data.isArmed,
    fuelShutoffValve: data.fuelShutoffValve,
    overspeedDetected: data.overspeedDetected,
  };
}

export function makeOverspeedAlertChannel(data: {
  channelId: string;
  alertActive: boolean;
  lastAlertTimestamp: number;
}): OverspeedAlertChannel {
  return {
    channelId: data.channelId as OverspeedAlertChannelId,
    alertActive: data.alertActive,
    lastAlertTimestamp: data.lastAlertTimestamp,
  };
}

export function makeFaultNotificationChannel(data: {
  channelId: string;
  modelledCurrentSpeed: number;
  modelledFuelFlow: number;
  injectionActive: boolean;
}): FaultNotificationChannel {
  return {
    channelId: data.channelId as FaultNotificationChannelId,
    modelledCurrentSpeed: data.modelledCurrentSpeed,
    modelledFuelFlow: data.modelledFuelFlow,
    injectionActive: data.injectionActive,
  };
}

export function makeThrustFaultChannel(data: {
  channelId: string;
  modelledThrustCommand: number;
  injectionActive: boolean;
}): ThrustFaultChannel {
  return {
    channelId: data.channelId as ThrustFaultChannelId,
    modelledThrustCommand: data.modelledThrustCommand,
    injectionActive: data.injectionActive,
  };
}

export function makeProtectionLink(data: {
  linkId: string;
  protectionArmed: boolean;
}): ProtectionLink {
  return {
    linkId: data.linkId as ProtectionLinkId,
    protectionArmed: data.protectionArmed,
  };
}

export function makeOverspeedDetectionAndMitigationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): OverspeedDetectionAndMitigationFlow {
  return {
    flowId: data.flowId as OverspeedDetectionAndMitigationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeThrustManagementFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ThrustManagementFlow {
  return {
    flowId: data.flowId as ThrustManagementFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeSensorFaultRecoveryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SensorFaultRecoveryFlow {
  return {
    flowId: data.flowId as SensorFaultRecoveryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makePilot(data: {
  pilotId: string;
  name: string;
  certification: string;
}): Pilot {
  return {
    pilotId: data.pilotId as PilotId,
    name: data.name,
    certification: data.certification,
  };
}

export function makeAirline(data: {
  airlineId: string;
  name: string;
  fleetSize: number;
}): Airline {
  return {
    airlineId: data.airlineId as AirlineId,
    name: data.name,
    fleetSize: data.fleetSize,
  };
}

export function makeMaintenanceProvider(data: {
  maintenanceId: string;
  name: string;
}): MaintenanceProvider {
  return {
    maintenanceId: data.maintenanceId as MaintenanceProviderId,
    name: data.name,
  };
}

export function makePassengers(data: {
  passengerId: string;
}): Passengers {
  return {
    passengerId: data.passengerId as PassengersId,
  };
}

export function makeEngineVendor(data: {
  vendorId: string;
  name: string;
}): EngineVendor {
  return {
    vendorId: data.vendorId as EngineVendorId,
    name: data.name,
  };
}

export function makeOverspeedPrevention(data: {
  commitmentId: string;
  maxSafeSpeed: number;
}): OverspeedPrevention {
  return {
    commitmentId: data.commitmentId as OverspeedPreventionId,
    maxSafeSpeed: data.maxSafeSpeed,
  };
}

export function makeThrustManagement(data: {
  commitmentId: string;
  onGround: boolean;
  reverserCommanded: boolean;
  reverserEnabled: boolean;
}): ThrustManagement {
  return {
    commitmentId: data.commitmentId as ThrustManagementId,
    onGround: data.onGround,
    reverserCommanded: data.reverserCommanded,
    reverserEnabled: data.reverserEnabled,
  };
}

export function makeSensorFaultTolerance(data: {
  commitmentId: string;
  faultDetected: boolean;
  modelledValueAvailable: boolean;
}): SensorFaultTolerance {
  return {
    commitmentId: data.commitmentId as SensorFaultToleranceId,
    faultDetected: data.faultDetected,
    modelledValueAvailable: data.modelledValueAvailable,
  };
}

export function makeOverspeed(data: {
  overspeedId: string;
  description: string;
  certifiedMaxSpeedReached: boolean;
}): Overspeed {
  return {
    overspeedId: data.overspeedId as OverspeedId,
    description: data.description,
    certifiedMaxSpeedReached: data.certifiedMaxSpeedReached,
  };
}

export function makeContinuousIgnition(data: {
  ignitionId: string;
  modeName: string;
  enabled: boolean;
}): ContinuousIgnition {
  return {
    ignitionId: data.ignitionId as ContinuousIgnitionId,
    modeName: data.modeName,
    enabled: data.enabled,
  };
}

export function makeThrustReverser(data: {
  reverserId: string;
  isDeployed: boolean;
}): ThrustReverser {
  return {
    reverserId: data.reverserId as ThrustReverserId,
    isDeployed: data.isDeployed,
  };
}

export function makeModelledValue(data: {
  modelledValueId: string;
  sensorName: string;
  estimatedValue: number;
}): ModelledValue {
  return {
    modelledValueId: data.modelledValueId as ModelledValueId,
    sensorName: data.sensorName,
    estimatedValue: data.estimatedValue,
  };
}

export function makeOverspeedDetectionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): OverspeedDetectionFlow {
  return {
    flowId: data.flowId as OverspeedDetectionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeIgnitionManagementFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): IgnitionManagementFlow {
  return {
    flowId: data.flowId as IgnitionManagementFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeReverserDeploymentFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ReverserDeploymentFlow {
  return {
    flowId: data.flowId as ReverserDeploymentFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeSensorFaultHandlingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SensorFaultHandlingFlow {
  return {
    flowId: data.flowId as SensorFaultHandlingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeEngineControlSystem(data: {
  systemId: string;
  maxSafeSpeed: number;
  onGround: boolean;
  reverserCommanded: boolean;
  reverserEnabled: boolean;
  faultDetected: boolean;
  modelledValueAvailable: boolean;
  currentSpeed: number;
  fuelFlow: number;
  overspeedProtectionFitted: boolean;
  overspeedDetected: boolean;
  continuousIgnitionCommanded: boolean;
  continuousIgnitionEnabled: boolean;
  thrustCommanded: number;
  thrustHeld: number;
  inFlight: boolean;
  sensorFaultActive: boolean;
  modelledValueInUse: boolean;
}): EngineControlSystem {
  return {
    systemId: data.systemId as EngineControlSystemId,
    maxSafeSpeed: data.maxSafeSpeed,
    onGround: data.onGround,
    reverserCommanded: data.reverserCommanded,
    reverserEnabled: data.reverserEnabled,
    faultDetected: data.faultDetected,
    modelledValueAvailable: data.modelledValueAvailable,
    currentSpeed: data.currentSpeed,
    fuelFlow: data.fuelFlow,
    overspeedProtectionFitted: data.overspeedProtectionFitted,
    overspeedDetected: data.overspeedDetected,
    continuousIgnitionCommanded: data.continuousIgnitionCommanded,
    continuousIgnitionEnabled: data.continuousIgnitionEnabled,
    thrustCommanded: data.thrustCommanded,
    thrustHeld: data.thrustHeld,
    inFlight: data.inFlight,
    sensorFaultActive: data.sensorFaultActive,
    modelledValueInUse: data.modelledValueInUse,
  };
}

export function makeSensorKindOrSimilar(data: {
  sensorKindId: string;
  minSpeed: number;
  maxSpeed: number;
  certifiedMaxSafeSpeed: number;
}): SensorKindOrSimilar {
  return {
    sensorKindId: data.sensorKindId as SensorKindOrSimilarId,
    minSpeed: data.minSpeed,
    maxSpeed: data.maxSpeed,
    certifiedMaxSafeSpeed: data.certifiedMaxSafeSpeed,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  owner: string;
  validated: boolean;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    owner: data.owner,
    validated: data.validated,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for SpeedMonitor. Returns empty array when valid. */
export function validateSpeedMonitor(instance: SpeedMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.monitorId !== null))) {
    violations.push("[SpeedMonitor] invariant violated: self.monitorId <> null");
  }
  if (!((instance.maxSafeSpeed > 0))) {
    violations.push("[SpeedMonitor] invariant violated: self.maxSafeSpeed > 0.0");
  }
  if (!((instance.currentSpeed >= 0))) {
    violations.push("[SpeedMonitor] invariant violated: self.currentSpeed >= 0.0");
  }
  if (!((instance.fuelFlow >= 0))) {
    violations.push("[SpeedMonitor] invariant violated: self.fuelFlow >= 0.0");
  }
  if (!((instance.overspeedDetected === (instance.currentSpeed > instance.maxSafeSpeed)))) {
    violations.push("[SpeedMonitor] invariant violated: self.overspeedDetected = (self.currentSpeed > self.maxSafeSpeed)");
  }
  return violations;
}

/** Runtime invariant check for ThrustManager. Returns empty array when valid. */
export function validateThrustManager(instance: ThrustManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[ThrustManager] invariant violated: self.managerId <> null");
  }
  if (!((instance.thrustCommanded >= 0))) {
    violations.push("[ThrustManager] invariant violated: self.thrustCommanded >= 0.0");
  }
  if (!((instance.thrustHeld >= 0))) {
    violations.push("[ThrustManager] invariant violated: self.thrustHeld >= 0.0");
  }
  if (!((instance.inFlight === !(instance.onGround)))) {
    violations.push("[ThrustManager] invariant violated: self.inFlight = (not self.onGround)");
  }
  if (!((!(instance.reverserEnabled) || (instance.onGround && instance.reverserCommanded)))) {
    violations.push("[ThrustManager] invariant violated: self.reverserEnabled implies (self.onGround and self.reverserCommanded)");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultHandler. Returns empty array when valid. */
export function validateSensorFaultHandler(instance: SensorFaultHandler): readonly string[] {
  const violations: string[] = [];
  if (!((instance.handlerId !== null))) {
    violations.push("[SensorFaultHandler] invariant violated: self.handlerId <> null");
  }
  if (!((!(instance.faultDetected) || instance.modelledValueAvailable))) {
    violations.push("[SensorFaultHandler] invariant violated: self.faultDetected implies self.modelledValueAvailable");
  }
  return violations;
}

/** Runtime invariant check for OverspeedProtectionUnit. Returns empty array when valid. */
export function validateOverspeedProtectionUnit(instance: OverspeedProtectionUnit): readonly string[] {
  const violations: string[] = [];
  if (!((instance.protectionId !== null))) {
    violations.push("[OverspeedProtectionUnit] invariant violated: self.protectionId <> null");
  }
  return violations;
}

/** Runtime invariant check for OverspeedAlertChannel. Returns empty array when valid. */
export function validateOverspeedAlertChannel(instance: OverspeedAlertChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[OverspeedAlertChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for FaultNotificationChannel. Returns empty array when valid. */
export function validateFaultNotificationChannel(instance: FaultNotificationChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[FaultNotificationChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.modelledCurrentSpeed >= 0))) {
    violations.push("[FaultNotificationChannel] invariant violated: self.modelledCurrentSpeed >= 0.0");
  }
  if (!((instance.modelledFuelFlow >= 0))) {
    violations.push("[FaultNotificationChannel] invariant violated: self.modelledFuelFlow >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ThrustFaultChannel. Returns empty array when valid. */
export function validateThrustFaultChannel(instance: ThrustFaultChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[ThrustFaultChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.modelledThrustCommand >= 0))) {
    violations.push("[ThrustFaultChannel] invariant violated: self.modelledThrustCommand >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ProtectionLink. Returns empty array when valid. */
export function validateProtectionLink(instance: ProtectionLink): readonly string[] {
  const violations: string[] = [];
  if (!((instance.linkId !== null))) {
    violations.push("[ProtectionLink] invariant violated: self.linkId <> null");
  }
  return violations;
}

/** Runtime invariant check for OverspeedDetectionAndMitigationFlow. Returns empty array when valid. */
export function validateOverspeedDetectionAndMitigationFlow(instance: OverspeedDetectionAndMitigationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[OverspeedDetectionAndMitigationFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for ThrustManagementFlow. Returns empty array when valid. */
export function validateThrustManagementFlow(instance: ThrustManagementFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ThrustManagementFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultRecoveryFlow. Returns empty array when valid. */
export function validateSensorFaultRecoveryFlow(instance: SensorFaultRecoveryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultRecoveryFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for OverspeedDetectionFlow. Returns empty array when valid. */
export function validateOverspeedDetectionFlow(instance: OverspeedDetectionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[OverspeedDetectionFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for IgnitionManagementFlow. Returns empty array when valid. */
export function validateIgnitionManagementFlow(instance: IgnitionManagementFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[IgnitionManagementFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for ReverserDeploymentFlow. Returns empty array when valid. */
export function validateReverserDeploymentFlow(instance: ReverserDeploymentFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ReverserDeploymentFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultHandlingFlow. Returns empty array when valid. */
export function validateSensorFaultHandlingFlow(instance: SensorFaultHandlingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultHandlingFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for EngineControlSystem. Returns empty array when valid. */
export function validateEngineControlSystem(instance: EngineControlSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[EngineControlSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.maxSafeSpeed > 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.maxSafeSpeed > 0.0");
  }
  if (!((instance.currentSpeed >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.currentSpeed >= 0.0");
  }
  if (!((instance.fuelFlow >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.fuelFlow >= 0.0");
  }
  if (!((instance.thrustCommanded >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.thrustCommanded >= 0.0");
  }
  if (!((instance.thrustHeld >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.thrustHeld >= 0.0");
  }
  if (!((instance.overspeedDetected === (instance.currentSpeed > instance.maxSafeSpeed)))) {
    violations.push("[EngineControlSystem] invariant violated: self.overspeedDetected = (self.currentSpeed > self.maxSafeSpeed)");
  }
  if (!((instance.inFlight === !(instance.onGround)))) {
    violations.push("[EngineControlSystem] invariant violated: self.inFlight = (not self.onGround)");
  }
  if (!((instance.modelledValueAvailable === instance.modelledValueInUse))) {
    violations.push("[EngineControlSystem] invariant violated: self.modelledValueAvailable = self.modelledValueInUse");
  }
  if (!((!(instance.reverserEnabled) || (instance.onGround && instance.reverserCommanded)))) {
    violations.push("[EngineControlSystem] invariant violated: self.reverserEnabled implies (self.onGround and self.reverserCommanded)");
  }
  if (!((!(instance.faultDetected) || instance.modelledValueAvailable))) {
    violations.push("[EngineControlSystem] invariant violated: self.faultDetected implies self.modelledValueAvailable");
  }
  return violations;
}

/** Runtime invariant check for Do178cDalACompliant. Returns empty array when valid. */
export function validateDo178cDalACompliant(instance: Do178cDalACompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dalLevel === "A"))) {
    violations.push("[Do178cDalACompliant] invariant violated: self.dalLevel = 'A'");
  }
  if (!((instance.objectivesMet === true))) {
    violations.push("[Do178cDalACompliant] invariant violated: self.objectivesMet = true");
  }
  return violations;
}

/** Runtime invariant check for CSEChapter5Compliant. Returns empty array when valid. */
export function validateCSEChapter5Compliant(instance: CSEChapter5Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.csEChapter5Ref !== null))) {
    violations.push("[CSEChapter5Compliant] invariant violated: self.csEChapter5Ref <> null");
  }
  if (!((!(instance.overspeedTestCompleted) || (instance.overspeedPreventionMethod !== null)))) {
    violations.push("[CSEChapter5Compliant] invariant violated: self.overspeedTestCompleted implies (self.overspeedPreventionMethod <> null)");
  }
  if (!((instance.reverserGroundOnlyVerified === true))) {
    violations.push("[CSEChapter5Compliant] invariant violated: self.reverserGroundOnlyVerified = true");
  }
  return violations;
}

/** Runtime invariant check for Iso26262AsilDCompliant. Returns empty array when valid. */
export function validateIso26262AsilDCompliant(instance: Iso26262AsilDCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.asilLevel === "D"))) {
    violations.push("[Iso26262AsilDCompliant] invariant violated: self.asilLevel = 'D'");
  }
  if (!((instance.faultToleranceTimeIntervalMs > 0))) {
    violations.push("[Iso26262AsilDCompliant] invariant violated: self.faultToleranceTimeIntervalMs > 0");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleSensorReadings. Returns empty array when valid. */
export function validatePhysicallyPlausibleSensorReadings(instance: PhysicallyPlausibleSensorReadings): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.minSpeed >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSpeed > bearer.minSpeed — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSpeed <= bearer.certifiedMaxSafeSpeed — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorKindOrSimilar. Returns empty array when valid. */
export function validateSensorKindOrSimilar(instance: SensorKindOrSimilar): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorKindId !== null))) {
    violations.push("[SensorKindOrSimilar] invariant violated: self.sensorKindId <> null");
  }
  if (!((instance.minSpeed >= 0))) {
    violations.push("[SensorKindOrSimilar] invariant violated: self.minSpeed >= 0.0");
  }
  if (!((instance.maxSpeed > instance.minSpeed))) {
    violations.push("[SensorKindOrSimilar] invariant violated: self.maxSpeed > self.minSpeed");
  }
  if (!((instance.maxSpeed <= instance.certifiedMaxSafeSpeed))) {
    violations.push("[SensorKindOrSimilar] invariant violated: self.maxSpeed <= self.certifiedMaxSafeSpeed");
  }
  return violations;
}

/** Runtime invariant check for EngineControlSystemFormalized. Returns empty array when valid. */
export function validateEngineControlSystemFormalized(instance: EngineControlSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatoryDalLevel === "A"))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryDalLevel = 'A'");
  }
  if (!((instance.regulatoryObjectivesMet === true))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryObjectivesMet = true");
  }
  if (!((instance.regulatoryCSEChapter5Ref !== null))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryCSEChapter5Ref <> null");
  }
  if (!((!(instance.regulatoryOverspeedTestDone) || (instance.regulatoryOverspeedMethod !== null)))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryOverspeedTestDone implies (self.regulatoryOverspeedMethod <> null)");
  }
  if (!((instance.regulatoryReverserVerified === true))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryReverserVerified = true");
  }
  if (!((instance.regulatoryAsilLevel === "D"))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryAsilLevel = 'D'");
  }
  if (!((instance.regulatoryFaultToleranceMs > 0))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryFaultToleranceMs > 0");
  }
  if (!((instance.regulatoryMinSpeed >= 0))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryMinSpeed >= 0.0");
  }
  if (!((instance.regulatoryMaxSpeed > instance.regulatoryMinSpeed))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryMaxSpeed > self.regulatoryMinSpeed");
  }
  if (!((instance.regulatoryMaxSpeed <= instance.regulatoryCertifiedMaxSafeSpeed))) {
    violations.push("[EngineControlSystemFormalized] invariant violated: self.regulatoryMaxSpeed <= self.regulatoryCertifiedMaxSafeSpeed");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionCode !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionCode <> null");
  }
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((instance.owner !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.owner <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for SpeedMonitor.detectOverspeed. User supplies this. */
export type SpeedMonitorDetectOverspeedImpl = (self: SpeedMonitor) => { self: SpeedMonitor; modified: { overspeedDetected: unknown } };

/** Contract-checking wrapper for SpeedMonitor.detectOverspeed. */
export function wrapSpeedMonitorDetectOverspeed(impl: SpeedMonitorDetectOverspeedImpl): (self: SpeedMonitor) => SpeedMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentSpeed > self.maxSafeSpeed))) {
      preViolations.push("[SpeedMonitor.detectOverspeed] pre violated: self.currentSpeed > self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[SpeedMonitor.detectOverspeed] post violated: self.overspeedDetected = true");
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

/** Impl signature for SpeedMonitor.detectOverspeed (async). User supplies this. */
export type SpeedMonitorDetectOverspeedAsyncImpl = (self: SpeedMonitor) => Promise<{ self: SpeedMonitor; modified: { overspeedDetected: unknown } }>;

/** Contract-checking wrapper for SpeedMonitor.detectOverspeed (async). */
export function wrapSpeedMonitorDetectOverspeedAsync(impl: SpeedMonitorDetectOverspeedAsyncImpl): (self: SpeedMonitor) => Promise<SpeedMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentSpeed > self.maxSafeSpeed))) {
      preViolations.push("[SpeedMonitor.detectOverspeed] pre violated: self.currentSpeed > self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[SpeedMonitor.detectOverspeed] post violated: self.overspeedDetected = true");
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

/** Impl signature for SpeedMonitor.limitFuelOnOverspeed. User supplies this. */
export type SpeedMonitorLimitFuelOnOverspeedImpl = (self: SpeedMonitor) => { self: SpeedMonitor; modified: { fuelFlow: unknown } };

/** Contract-checking wrapper for SpeedMonitor.limitFuelOnOverspeed. */
export function wrapSpeedMonitorLimitFuelOnOverspeed(impl: SpeedMonitorLimitFuelOnOverspeedImpl): (self: SpeedMonitor) => SpeedMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.overspeedDetected === true))) {
      preViolations.push("[SpeedMonitor.limitFuelOnOverspeed] pre violated: self.overspeedDetected = true");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[SpeedMonitor.limitFuelOnOverspeed] pre violated: self.overspeedProtectionFitted = true");
    }
    if (!((self.fuelFlow > 0))) {
      preViolations.push("[SpeedMonitor.limitFuelOnOverspeed] pre violated: self.fuelFlow > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow <= 0))) {
        postViolations.push("[SpeedMonitor.limitFuelOnOverspeed] post violated: self.fuelFlow <= 0.0");
      }
      if (!((__result.self.currentSpeed <= __result.self.maxSafeSpeed))) {
        postViolations.push("[SpeedMonitor.limitFuelOnOverspeed] post violated: self.currentSpeed <= self.maxSafeSpeed");
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

/** Impl signature for SpeedMonitor.limitFuelOnOverspeed (async). User supplies this. */
export type SpeedMonitorLimitFuelOnOverspeedAsyncImpl = (self: SpeedMonitor) => Promise<{ self: SpeedMonitor; modified: { fuelFlow: unknown } }>;

/** Contract-checking wrapper for SpeedMonitor.limitFuelOnOverspeed (async). */
export function wrapSpeedMonitorLimitFuelOnOverspeedAsync(impl: SpeedMonitorLimitFuelOnOverspeedAsyncImpl): (self: SpeedMonitor) => Promise<SpeedMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.overspeedDetected === true))) {
      preViolations.push("[SpeedMonitor.limitFuelOnOverspeed] pre violated: self.overspeedDetected = true");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[SpeedMonitor.limitFuelOnOverspeed] pre violated: self.overspeedProtectionFitted = true");
    }
    if (!((self.fuelFlow > 0))) {
      preViolations.push("[SpeedMonitor.limitFuelOnOverspeed] pre violated: self.fuelFlow > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow <= 0))) {
        postViolations.push("[SpeedMonitor.limitFuelOnOverspeed] post violated: self.fuelFlow <= 0.0");
      }
      if (!((__result.self.currentSpeed <= __result.self.maxSafeSpeed))) {
        postViolations.push("[SpeedMonitor.limitFuelOnOverspeed] post violated: self.currentSpeed <= self.maxSafeSpeed");
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

/** Impl signature for SpeedMonitor.setCurrentSpeed. User supplies this. */
export type SpeedMonitorSetCurrentSpeedImpl = (self: SpeedMonitor, speed: number) => { self: SpeedMonitor; modified: { currentSpeed: unknown } };

/** Contract-checking wrapper for SpeedMonitor.setCurrentSpeed. */
export function wrapSpeedMonitorSetCurrentSpeed(impl: SpeedMonitorSetCurrentSpeedImpl): (self: SpeedMonitor, speed: number) => SpeedMonitor {
  return (self, speed) => {
    const preViolations: string[] = [];
    if (!((speed >= 0))) {
      preViolations.push("[SpeedMonitor.setCurrentSpeed] pre violated: speed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, speed);
      const postViolations: string[] = [];
      if (!((__result.self.currentSpeed === speed))) {
        postViolations.push("[SpeedMonitor.setCurrentSpeed] post violated: self.currentSpeed = speed");
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

/** Impl signature for SpeedMonitor.setCurrentSpeed (async). User supplies this. */
export type SpeedMonitorSetCurrentSpeedAsyncImpl = (self: SpeedMonitor, speed: number) => Promise<{ self: SpeedMonitor; modified: { currentSpeed: unknown } }>;

/** Contract-checking wrapper for SpeedMonitor.setCurrentSpeed (async). */
export function wrapSpeedMonitorSetCurrentSpeedAsync(impl: SpeedMonitorSetCurrentSpeedAsyncImpl): (self: SpeedMonitor, speed: number) => Promise<SpeedMonitor> {
  return async (self, speed) => {
    const preViolations: string[] = [];
    if (!((speed >= 0))) {
      preViolations.push("[SpeedMonitor.setCurrentSpeed] pre violated: speed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, speed);
      const postViolations: string[] = [];
      if (!((__result.self.currentSpeed === speed))) {
        postViolations.push("[SpeedMonitor.setCurrentSpeed] post violated: self.currentSpeed = speed");
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

/** Impl signature for SpeedMonitor.setOverspeedProtectionFitted. User supplies this. */
export type SpeedMonitorSetOverspeedProtectionFittedImpl = (self: SpeedMonitor, fitted: boolean) => { self: SpeedMonitor; modified: { overspeedProtectionFitted: unknown } };

/** Contract-checking wrapper for SpeedMonitor.setOverspeedProtectionFitted. */
export function wrapSpeedMonitorSetOverspeedProtectionFitted(impl: SpeedMonitorSetOverspeedProtectionFittedImpl): (self: SpeedMonitor, fitted: boolean) => SpeedMonitor {
  return (self, fitted) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, fitted);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedProtectionFitted === fitted))) {
        postViolations.push("[SpeedMonitor.setOverspeedProtectionFitted] post violated: self.overspeedProtectionFitted = fitted");
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

/** Impl signature for SpeedMonitor.setOverspeedProtectionFitted (async). User supplies this. */
export type SpeedMonitorSetOverspeedProtectionFittedAsyncImpl = (self: SpeedMonitor, fitted: boolean) => Promise<{ self: SpeedMonitor; modified: { overspeedProtectionFitted: unknown } }>;

/** Contract-checking wrapper for SpeedMonitor.setOverspeedProtectionFitted (async). */
export function wrapSpeedMonitorSetOverspeedProtectionFittedAsync(impl: SpeedMonitorSetOverspeedProtectionFittedAsyncImpl): (self: SpeedMonitor, fitted: boolean) => Promise<SpeedMonitor> {
  return async (self, fitted) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, fitted);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedProtectionFitted === fitted))) {
        postViolations.push("[SpeedMonitor.setOverspeedProtectionFitted] post violated: self.overspeedProtectionFitted = fitted");
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

/** Impl signature for SpeedMonitor.setFuelFlowFromModelledValue. User supplies this. */
export type SpeedMonitorSetFuelFlowFromModelledValueImpl = (self: SpeedMonitor, flow: number) => { self: SpeedMonitor; modified: { fuelFlow: unknown } };

/** Contract-checking wrapper for SpeedMonitor.setFuelFlowFromModelledValue. */
export function wrapSpeedMonitorSetFuelFlowFromModelledValue(impl: SpeedMonitorSetFuelFlowFromModelledValueImpl): (self: SpeedMonitor, flow: number) => SpeedMonitor {
  return (self, flow) => {
    const preViolations: string[] = [];
    if (!((flow >= 0))) {
      preViolations.push("[SpeedMonitor.setFuelFlowFromModelledValue] pre violated: flow >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, flow);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === flow))) {
        postViolations.push("[SpeedMonitor.setFuelFlowFromModelledValue] post violated: self.fuelFlow = flow");
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

/** Impl signature for SpeedMonitor.setFuelFlowFromModelledValue (async). User supplies this. */
export type SpeedMonitorSetFuelFlowFromModelledValueAsyncImpl = (self: SpeedMonitor, flow: number) => Promise<{ self: SpeedMonitor; modified: { fuelFlow: unknown } }>;

/** Contract-checking wrapper for SpeedMonitor.setFuelFlowFromModelledValue (async). */
export function wrapSpeedMonitorSetFuelFlowFromModelledValueAsync(impl: SpeedMonitorSetFuelFlowFromModelledValueAsyncImpl): (self: SpeedMonitor, flow: number) => Promise<SpeedMonitor> {
  return async (self, flow) => {
    const preViolations: string[] = [];
    if (!((flow >= 0))) {
      preViolations.push("[SpeedMonitor.setFuelFlowFromModelledValue] pre violated: flow >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, flow);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === flow))) {
        postViolations.push("[SpeedMonitor.setFuelFlowFromModelledValue] post violated: self.fuelFlow = flow");
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

/** Impl signature for ThrustManager.commandContinuousIgnition. User supplies this. */
export type ThrustManagerCommandContinuousIgnitionImpl = (self: ThrustManager) => { self: ThrustManager; modified: { continuousIgnitionEnabled: unknown } };

/** Contract-checking wrapper for ThrustManager.commandContinuousIgnition. */
export function wrapThrustManagerCommandContinuousIgnition(impl: ThrustManagerCommandContinuousIgnitionImpl): (self: ThrustManager) => ThrustManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionCommanded === true))) {
      preViolations.push("[ThrustManager.commandContinuousIgnition] pre violated: self.continuousIgnitionCommanded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionEnabled === true))) {
        postViolations.push("[ThrustManager.commandContinuousIgnition] post violated: self.continuousIgnitionEnabled = true");
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

/** Impl signature for ThrustManager.commandContinuousIgnition (async). User supplies this. */
export type ThrustManagerCommandContinuousIgnitionAsyncImpl = (self: ThrustManager) => Promise<{ self: ThrustManager; modified: { continuousIgnitionEnabled: unknown } }>;

/** Contract-checking wrapper for ThrustManager.commandContinuousIgnition (async). */
export function wrapThrustManagerCommandContinuousIgnitionAsync(impl: ThrustManagerCommandContinuousIgnitionAsyncImpl): (self: ThrustManager) => Promise<ThrustManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionCommanded === true))) {
      preViolations.push("[ThrustManager.commandContinuousIgnition] pre violated: self.continuousIgnitionCommanded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionEnabled === true))) {
        postViolations.push("[ThrustManager.commandContinuousIgnition] post violated: self.continuousIgnitionEnabled = true");
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

/** Impl signature for ThrustManager.holdThrustInFlight. User supplies this. */
export type ThrustManagerHoldThrustInFlightImpl = (self: ThrustManager) => { self: ThrustManager; modified: { thrustHeld: unknown } };

/** Contract-checking wrapper for ThrustManager.holdThrustInFlight. */
export function wrapThrustManagerHoldThrustInFlight(impl: ThrustManagerHoldThrustInFlightImpl): (self: ThrustManager) => ThrustManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.inFlight === true))) {
      preViolations.push("[ThrustManager.holdThrustInFlight] pre violated: self.inFlight = true");
    }
    if (!((self.thrustCommanded > 0))) {
      preViolations.push("[ThrustManager.holdThrustInFlight] pre violated: self.thrustCommanded > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustHeld === __result.self.thrustCommanded))) {
        postViolations.push("[ThrustManager.holdThrustInFlight] post violated: self.thrustHeld = self.thrustCommanded");
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

/** Impl signature for ThrustManager.holdThrustInFlight (async). User supplies this. */
export type ThrustManagerHoldThrustInFlightAsyncImpl = (self: ThrustManager) => Promise<{ self: ThrustManager; modified: { thrustHeld: unknown } }>;

/** Contract-checking wrapper for ThrustManager.holdThrustInFlight (async). */
export function wrapThrustManagerHoldThrustInFlightAsync(impl: ThrustManagerHoldThrustInFlightAsyncImpl): (self: ThrustManager) => Promise<ThrustManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.inFlight === true))) {
      preViolations.push("[ThrustManager.holdThrustInFlight] pre violated: self.inFlight = true");
    }
    if (!((self.thrustCommanded > 0))) {
      preViolations.push("[ThrustManager.holdThrustInFlight] pre violated: self.thrustCommanded > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustHeld === __result.self.thrustCommanded))) {
        postViolations.push("[ThrustManager.holdThrustInFlight] post violated: self.thrustHeld = self.thrustCommanded");
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

/** Impl signature for ThrustManager.deployReverserOnGround. User supplies this. */
export type ThrustManagerDeployReverserOnGroundImpl = (self: ThrustManager) => { self: ThrustManager; modified: { reverserEnabled: unknown } };

/** Contract-checking wrapper for ThrustManager.deployReverserOnGround. */
export function wrapThrustManagerDeployReverserOnGround(impl: ThrustManagerDeployReverserOnGroundImpl): (self: ThrustManager) => ThrustManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === true))) {
      preViolations.push("[ThrustManager.deployReverserOnGround] pre violated: self.onGround = true");
    }
    if (!((self.reverserCommanded === true))) {
      preViolations.push("[ThrustManager.deployReverserOnGround] pre violated: self.reverserCommanded = true");
    }
    if (!(!(self.reverserEnabled))) {
      preViolations.push("[ThrustManager.deployReverserOnGround] pre violated: not self.reverserEnabled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserEnabled === true))) {
        postViolations.push("[ThrustManager.deployReverserOnGround] post violated: self.reverserEnabled = true");
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

/** Impl signature for ThrustManager.deployReverserOnGround (async). User supplies this. */
export type ThrustManagerDeployReverserOnGroundAsyncImpl = (self: ThrustManager) => Promise<{ self: ThrustManager; modified: { reverserEnabled: unknown } }>;

/** Contract-checking wrapper for ThrustManager.deployReverserOnGround (async). */
export function wrapThrustManagerDeployReverserOnGroundAsync(impl: ThrustManagerDeployReverserOnGroundAsyncImpl): (self: ThrustManager) => Promise<ThrustManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === true))) {
      preViolations.push("[ThrustManager.deployReverserOnGround] pre violated: self.onGround = true");
    }
    if (!((self.reverserCommanded === true))) {
      preViolations.push("[ThrustManager.deployReverserOnGround] pre violated: self.reverserCommanded = true");
    }
    if (!(!(self.reverserEnabled))) {
      preViolations.push("[ThrustManager.deployReverserOnGround] pre violated: not self.reverserEnabled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserEnabled === true))) {
        postViolations.push("[ThrustManager.deployReverserOnGround] post violated: self.reverserEnabled = true");
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

/** Impl signature for ThrustManager.setOnGround. User supplies this. */
export type ThrustManagerSetOnGroundImpl = (self: ThrustManager, state: boolean) => { self: ThrustManager; modified: { onGround: unknown; inFlight: unknown } };

/** Contract-checking wrapper for ThrustManager.setOnGround. */
export function wrapThrustManagerSetOnGround(impl: ThrustManagerSetOnGroundImpl): (self: ThrustManager, state: boolean) => ThrustManager {
  return (self, state) => {
    const preViolations: string[] = [];
    if (!(((state === true) || (state === false)))) {
      preViolations.push("[ThrustManager.setOnGround] pre violated: state = true or state = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, state);
      const postViolations: string[] = [];
      if (!((__result.self.onGround === state))) {
        postViolations.push("[ThrustManager.setOnGround] post violated: self.onGround = state");
      }
      if (!(((state) ? ((__result.self.inFlight === false)) : ((__result.self.inFlight === true))))) {
        postViolations.push("[ThrustManager.setOnGround] post violated: if state then self.inFlight = false else self.inFlight = true endif");
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

/** Impl signature for ThrustManager.setOnGround (async). User supplies this. */
export type ThrustManagerSetOnGroundAsyncImpl = (self: ThrustManager, state: boolean) => Promise<{ self: ThrustManager; modified: { onGround: unknown; inFlight: unknown } }>;

/** Contract-checking wrapper for ThrustManager.setOnGround (async). */
export function wrapThrustManagerSetOnGroundAsync(impl: ThrustManagerSetOnGroundAsyncImpl): (self: ThrustManager, state: boolean) => Promise<ThrustManager> {
  return async (self, state) => {
    const preViolations: string[] = [];
    if (!(((state === true) || (state === false)))) {
      preViolations.push("[ThrustManager.setOnGround] pre violated: state = true or state = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, state);
      const postViolations: string[] = [];
      if (!((__result.self.onGround === state))) {
        postViolations.push("[ThrustManager.setOnGround] post violated: self.onGround = state");
      }
      if (!(((state) ? ((__result.self.inFlight === false)) : ((__result.self.inFlight === true))))) {
        postViolations.push("[ThrustManager.setOnGround] post violated: if state then self.inFlight = false else self.inFlight = true endif");
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

/** Impl signature for ThrustManager.setReverserCommanded. User supplies this. */
export type ThrustManagerSetReverserCommandedImpl = (self: ThrustManager, cmd: boolean) => { self: ThrustManager; modified: { reverserCommanded: unknown } };

/** Contract-checking wrapper for ThrustManager.setReverserCommanded. */
export function wrapThrustManagerSetReverserCommanded(impl: ThrustManagerSetReverserCommandedImpl): (self: ThrustManager, cmd: boolean) => ThrustManager {
  return (self, cmd) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, cmd);
      const postViolations: string[] = [];
      if (!((__result.self.reverserCommanded === cmd))) {
        postViolations.push("[ThrustManager.setReverserCommanded] post violated: self.reverserCommanded = cmd");
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

/** Impl signature for ThrustManager.setReverserCommanded (async). User supplies this. */
export type ThrustManagerSetReverserCommandedAsyncImpl = (self: ThrustManager, cmd: boolean) => Promise<{ self: ThrustManager; modified: { reverserCommanded: unknown } }>;

/** Contract-checking wrapper for ThrustManager.setReverserCommanded (async). */
export function wrapThrustManagerSetReverserCommandedAsync(impl: ThrustManagerSetReverserCommandedAsyncImpl): (self: ThrustManager, cmd: boolean) => Promise<ThrustManager> {
  return async (self, cmd) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, cmd);
      const postViolations: string[] = [];
      if (!((__result.self.reverserCommanded === cmd))) {
        postViolations.push("[ThrustManager.setReverserCommanded] post violated: self.reverserCommanded = cmd");
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

/** Impl signature for ThrustManager.setContinuousIgnitionCommanded. User supplies this. */
export type ThrustManagerSetContinuousIgnitionCommandedImpl = (self: ThrustManager, cmd: boolean) => { self: ThrustManager; modified: { continuousIgnitionCommanded: unknown } };

/** Contract-checking wrapper for ThrustManager.setContinuousIgnitionCommanded. */
export function wrapThrustManagerSetContinuousIgnitionCommanded(impl: ThrustManagerSetContinuousIgnitionCommandedImpl): (self: ThrustManager, cmd: boolean) => ThrustManager {
  return (self, cmd) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, cmd);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionCommanded === cmd))) {
        postViolations.push("[ThrustManager.setContinuousIgnitionCommanded] post violated: self.continuousIgnitionCommanded = cmd");
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

/** Impl signature for ThrustManager.setContinuousIgnitionCommanded (async). User supplies this. */
export type ThrustManagerSetContinuousIgnitionCommandedAsyncImpl = (self: ThrustManager, cmd: boolean) => Promise<{ self: ThrustManager; modified: { continuousIgnitionCommanded: unknown } }>;

/** Contract-checking wrapper for ThrustManager.setContinuousIgnitionCommanded (async). */
export function wrapThrustManagerSetContinuousIgnitionCommandedAsync(impl: ThrustManagerSetContinuousIgnitionCommandedAsyncImpl): (self: ThrustManager, cmd: boolean) => Promise<ThrustManager> {
  return async (self, cmd) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, cmd);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionCommanded === cmd))) {
        postViolations.push("[ThrustManager.setContinuousIgnitionCommanded] post violated: self.continuousIgnitionCommanded = cmd");
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

/** Impl signature for ThrustManager.setThrustCommanded. User supplies this. */
export type ThrustManagerSetThrustCommandedImpl = (self: ThrustManager, thrust: number) => { self: ThrustManager; modified: { thrustCommanded: unknown } };

/** Contract-checking wrapper for ThrustManager.setThrustCommanded. */
export function wrapThrustManagerSetThrustCommanded(impl: ThrustManagerSetThrustCommandedImpl): (self: ThrustManager, thrust: number) => ThrustManager {
  return (self, thrust) => {
    const preViolations: string[] = [];
    if (!((thrust >= 0))) {
      preViolations.push("[ThrustManager.setThrustCommanded] pre violated: thrust >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, thrust);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded === thrust))) {
        postViolations.push("[ThrustManager.setThrustCommanded] post violated: self.thrustCommanded = thrust");
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

/** Impl signature for ThrustManager.setThrustCommanded (async). User supplies this. */
export type ThrustManagerSetThrustCommandedAsyncImpl = (self: ThrustManager, thrust: number) => Promise<{ self: ThrustManager; modified: { thrustCommanded: unknown } }>;

/** Contract-checking wrapper for ThrustManager.setThrustCommanded (async). */
export function wrapThrustManagerSetThrustCommandedAsync(impl: ThrustManagerSetThrustCommandedAsyncImpl): (self: ThrustManager, thrust: number) => Promise<ThrustManager> {
  return async (self, thrust) => {
    const preViolations: string[] = [];
    if (!((thrust >= 0))) {
      preViolations.push("[ThrustManager.setThrustCommanded] pre violated: thrust >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, thrust);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded === thrust))) {
        postViolations.push("[ThrustManager.setThrustCommanded] post violated: self.thrustCommanded = thrust");
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

/** Impl signature for SensorFaultHandler.detectSensorFault. User supplies this. */
export type SensorFaultHandlerDetectSensorFaultImpl = (self: SensorFaultHandler) => { self: SensorFaultHandler; modified: { sensorFaultActive: unknown; faultDetected: unknown; modelledValueInUse: unknown; modelledValueAvailable: unknown } };

/** Contract-checking wrapper for SensorFaultHandler.detectSensorFault. */
export function wrapSensorFaultHandlerDetectSensorFault(impl: SensorFaultHandlerDetectSensorFaultImpl): (self: SensorFaultHandler) => SensorFaultHandler {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultActive))) {
      preViolations.push("[SensorFaultHandler.detectSensorFault] pre violated: not self.sensorFaultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultActive === true))) {
        postViolations.push("[SensorFaultHandler.detectSensorFault] post violated: self.sensorFaultActive = true");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[SensorFaultHandler.detectSensorFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.modelledValueInUse === true))) {
        postViolations.push("[SensorFaultHandler.detectSensorFault] post violated: self.modelledValueInUse = true");
      }
      if (!((__result.self.modelledValueAvailable === true))) {
        postViolations.push("[SensorFaultHandler.detectSensorFault] post violated: self.modelledValueAvailable = true");
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

/** Impl signature for SensorFaultHandler.detectSensorFault (async). User supplies this. */
export type SensorFaultHandlerDetectSensorFaultAsyncImpl = (self: SensorFaultHandler) => Promise<{ self: SensorFaultHandler; modified: { sensorFaultActive: unknown; faultDetected: unknown; modelledValueInUse: unknown; modelledValueAvailable: unknown } }>;

/** Contract-checking wrapper for SensorFaultHandler.detectSensorFault (async). */
export function wrapSensorFaultHandlerDetectSensorFaultAsync(impl: SensorFaultHandlerDetectSensorFaultAsyncImpl): (self: SensorFaultHandler) => Promise<SensorFaultHandler> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultActive))) {
      preViolations.push("[SensorFaultHandler.detectSensorFault] pre violated: not self.sensorFaultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultActive === true))) {
        postViolations.push("[SensorFaultHandler.detectSensorFault] post violated: self.sensorFaultActive = true");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[SensorFaultHandler.detectSensorFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.modelledValueInUse === true))) {
        postViolations.push("[SensorFaultHandler.detectSensorFault] post violated: self.modelledValueInUse = true");
      }
      if (!((__result.self.modelledValueAvailable === true))) {
        postViolations.push("[SensorFaultHandler.detectSensorFault] post violated: self.modelledValueAvailable = true");
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

/** Impl signature for SensorFaultHandler.clearSensorFault. User supplies this. */
export type SensorFaultHandlerClearSensorFaultImpl = (self: SensorFaultHandler) => { self: SensorFaultHandler; modified: { sensorFaultActive: unknown; faultDetected: unknown; modelledValueInUse: unknown } };

/** Contract-checking wrapper for SensorFaultHandler.clearSensorFault. */
export function wrapSensorFaultHandlerClearSensorFault(impl: SensorFaultHandlerClearSensorFaultImpl): (self: SensorFaultHandler) => SensorFaultHandler {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultActive === true))) {
      preViolations.push("[SensorFaultHandler.clearSensorFault] pre violated: self.sensorFaultActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultActive === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.sensorFaultActive = false");
      }
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.faultDetected = false");
      }
      if (!((__result.self.modelledValueInUse === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.modelledValueInUse = false");
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

/** Impl signature for SensorFaultHandler.clearSensorFault (async). User supplies this. */
export type SensorFaultHandlerClearSensorFaultAsyncImpl = (self: SensorFaultHandler) => Promise<{ self: SensorFaultHandler; modified: { sensorFaultActive: unknown; faultDetected: unknown; modelledValueInUse: unknown } }>;

/** Contract-checking wrapper for SensorFaultHandler.clearSensorFault (async). */
export function wrapSensorFaultHandlerClearSensorFaultAsync(impl: SensorFaultHandlerClearSensorFaultAsyncImpl): (self: SensorFaultHandler) => Promise<SensorFaultHandler> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultActive === true))) {
      preViolations.push("[SensorFaultHandler.clearSensorFault] pre violated: self.sensorFaultActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultActive === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.sensorFaultActive = false");
      }
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.faultDetected = false");
      }
      if (!((__result.self.modelledValueInUse === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.modelledValueInUse = false");
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

/** Impl signature for OverspeedProtectionUnit.armProtection. User supplies this. */
export type OverspeedProtectionUnitArmProtectionImpl = (self: OverspeedProtectionUnit) => { self: OverspeedProtectionUnit; modified: { isArmed: unknown } };

/** Contract-checking wrapper for OverspeedProtectionUnit.armProtection. */
export function wrapOverspeedProtectionUnitArmProtection(impl: OverspeedProtectionUnitArmProtectionImpl): (self: OverspeedProtectionUnit) => OverspeedProtectionUnit {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isArmed === true))) {
        postViolations.push("[OverspeedProtectionUnit.armProtection] post violated: self.isArmed = true");
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

/** Impl signature for OverspeedProtectionUnit.armProtection (async). User supplies this. */
export type OverspeedProtectionUnitArmProtectionAsyncImpl = (self: OverspeedProtectionUnit) => Promise<{ self: OverspeedProtectionUnit; modified: { isArmed: unknown } }>;

/** Contract-checking wrapper for OverspeedProtectionUnit.armProtection (async). */
export function wrapOverspeedProtectionUnitArmProtectionAsync(impl: OverspeedProtectionUnitArmProtectionAsyncImpl): (self: OverspeedProtectionUnit) => Promise<OverspeedProtectionUnit> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isArmed === true))) {
        postViolations.push("[OverspeedProtectionUnit.armProtection] post violated: self.isArmed = true");
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

/** Impl signature for OverspeedProtectionUnit.shutOffFuelOnOverspeed. User supplies this. */
export type OverspeedProtectionUnitShutOffFuelOnOverspeedImpl = (self: OverspeedProtectionUnit) => { self: OverspeedProtectionUnit; modified: { fuelShutoffValve: unknown } };

/** Contract-checking wrapper for OverspeedProtectionUnit.shutOffFuelOnOverspeed. */
export function wrapOverspeedProtectionUnitShutOffFuelOnOverspeed(impl: OverspeedProtectionUnitShutOffFuelOnOverspeedImpl): (self: OverspeedProtectionUnit) => OverspeedProtectionUnit {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isArmed === true))) {
      preViolations.push("[OverspeedProtectionUnit.shutOffFuelOnOverspeed] pre violated: self.isArmed = true");
    }
    if (!((self.overspeedDetected === true))) {
      preViolations.push("[OverspeedProtectionUnit.shutOffFuelOnOverspeed] pre violated: self.overspeedDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelShutoffValve === true))) {
        postViolations.push("[OverspeedProtectionUnit.shutOffFuelOnOverspeed] post violated: self.fuelShutoffValve = true");
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

/** Impl signature for OverspeedProtectionUnit.shutOffFuelOnOverspeed (async). User supplies this. */
export type OverspeedProtectionUnitShutOffFuelOnOverspeedAsyncImpl = (self: OverspeedProtectionUnit) => Promise<{ self: OverspeedProtectionUnit; modified: { fuelShutoffValve: unknown } }>;

/** Contract-checking wrapper for OverspeedProtectionUnit.shutOffFuelOnOverspeed (async). */
export function wrapOverspeedProtectionUnitShutOffFuelOnOverspeedAsync(impl: OverspeedProtectionUnitShutOffFuelOnOverspeedAsyncImpl): (self: OverspeedProtectionUnit) => Promise<OverspeedProtectionUnit> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isArmed === true))) {
      preViolations.push("[OverspeedProtectionUnit.shutOffFuelOnOverspeed] pre violated: self.isArmed = true");
    }
    if (!((self.overspeedDetected === true))) {
      preViolations.push("[OverspeedProtectionUnit.shutOffFuelOnOverspeed] pre violated: self.overspeedDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelShutoffValve === true))) {
        postViolations.push("[OverspeedProtectionUnit.shutOffFuelOnOverspeed] post violated: self.fuelShutoffValve = true");
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

/** Impl signature for OverspeedProtectionUnit.resetAfterOverspeed. User supplies this. */
export type OverspeedProtectionUnitResetAfterOverspeedImpl = (self: OverspeedProtectionUnit) => { self: OverspeedProtectionUnit; modified: { fuelShutoffValve: unknown; isArmed: unknown } };

/** Contract-checking wrapper for OverspeedProtectionUnit.resetAfterOverspeed. */
export function wrapOverspeedProtectionUnitResetAfterOverspeed(impl: OverspeedProtectionUnitResetAfterOverspeedImpl): (self: OverspeedProtectionUnit) => OverspeedProtectionUnit {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.overspeedDetected))) {
      preViolations.push("[OverspeedProtectionUnit.resetAfterOverspeed] pre violated: not self.overspeedDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelShutoffValve === false))) {
        postViolations.push("[OverspeedProtectionUnit.resetAfterOverspeed] post violated: self.fuelShutoffValve = false");
      }
      if (!((__result.self.isArmed === false))) {
        postViolations.push("[OverspeedProtectionUnit.resetAfterOverspeed] post violated: self.isArmed = false");
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

/** Impl signature for OverspeedProtectionUnit.resetAfterOverspeed (async). User supplies this. */
export type OverspeedProtectionUnitResetAfterOverspeedAsyncImpl = (self: OverspeedProtectionUnit) => Promise<{ self: OverspeedProtectionUnit; modified: { fuelShutoffValve: unknown; isArmed: unknown } }>;

/** Contract-checking wrapper for OverspeedProtectionUnit.resetAfterOverspeed (async). */
export function wrapOverspeedProtectionUnitResetAfterOverspeedAsync(impl: OverspeedProtectionUnitResetAfterOverspeedAsyncImpl): (self: OverspeedProtectionUnit) => Promise<OverspeedProtectionUnit> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.overspeedDetected))) {
      preViolations.push("[OverspeedProtectionUnit.resetAfterOverspeed] pre violated: not self.overspeedDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelShutoffValve === false))) {
        postViolations.push("[OverspeedProtectionUnit.resetAfterOverspeed] post violated: self.fuelShutoffValve = false");
      }
      if (!((__result.self.isArmed === false))) {
        postViolations.push("[OverspeedProtectionUnit.resetAfterOverspeed] post violated: self.isArmed = false");
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

/** Impl signature for OverspeedProtectionUnit.setOverspeedDetected. User supplies this. */
export type OverspeedProtectionUnitSetOverspeedDetectedImpl = (self: OverspeedProtectionUnit, detected: boolean) => { self: OverspeedProtectionUnit; modified: { overspeedDetected: unknown } };

/** Contract-checking wrapper for OverspeedProtectionUnit.setOverspeedDetected. */
export function wrapOverspeedProtectionUnitSetOverspeedDetected(impl: OverspeedProtectionUnitSetOverspeedDetectedImpl): (self: OverspeedProtectionUnit, detected: boolean) => OverspeedProtectionUnit {
  return (self, detected) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, detected);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === detected))) {
        postViolations.push("[OverspeedProtectionUnit.setOverspeedDetected] post violated: self.overspeedDetected = detected");
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

/** Impl signature for OverspeedProtectionUnit.setOverspeedDetected (async). User supplies this. */
export type OverspeedProtectionUnitSetOverspeedDetectedAsyncImpl = (self: OverspeedProtectionUnit, detected: boolean) => Promise<{ self: OverspeedProtectionUnit; modified: { overspeedDetected: unknown } }>;

/** Contract-checking wrapper for OverspeedProtectionUnit.setOverspeedDetected (async). */
export function wrapOverspeedProtectionUnitSetOverspeedDetectedAsync(impl: OverspeedProtectionUnitSetOverspeedDetectedAsyncImpl): (self: OverspeedProtectionUnit, detected: boolean) => Promise<OverspeedProtectionUnit> {
  return async (self, detected) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, detected);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === detected))) {
        postViolations.push("[OverspeedProtectionUnit.setOverspeedDetected] post violated: self.overspeedDetected = detected");
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

/** Impl signature for OverspeedAlertChannel.transmitAlert. User supplies this. */
export type OverspeedAlertChannelTransmitAlertImpl = (self: OverspeedAlertChannel, sender: OverspeedAlertSender, receiver: OverspeedAlertReceiver) => { self: OverspeedAlertChannel; modified: { alertActive: unknown } };

/** Contract-checking wrapper for OverspeedAlertChannel.transmitAlert. */
export function wrapOverspeedAlertChannelTransmitAlert(impl: OverspeedAlertChannelTransmitAlertImpl): (self: OverspeedAlertChannel, sender: OverspeedAlertSender, receiver: OverspeedAlertReceiver) => OverspeedAlertChannel {
  return (self, sender, receiver) => {
    const preViolations: string[] = [];
    if (!((sender.overspeedDetected === true))) {
      preViolations.push("[OverspeedAlertChannel.transmitAlert] pre violated: sender.overspeedDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sender, receiver);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[OverspeedAlertChannel.transmitAlert] post violated: self.alertActive = true");
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

/** Impl signature for OverspeedAlertChannel.transmitAlert (async). User supplies this. */
export type OverspeedAlertChannelTransmitAlertAsyncImpl = (self: OverspeedAlertChannel, sender: OverspeedAlertSender, receiver: OverspeedAlertReceiver) => Promise<{ self: OverspeedAlertChannel; modified: { alertActive: unknown } }>;

/** Contract-checking wrapper for OverspeedAlertChannel.transmitAlert (async). */
export function wrapOverspeedAlertChannelTransmitAlertAsync(impl: OverspeedAlertChannelTransmitAlertAsyncImpl): (self: OverspeedAlertChannel, sender: OverspeedAlertSender, receiver: OverspeedAlertReceiver) => Promise<OverspeedAlertChannel> {
  return async (self, sender, receiver) => {
    const preViolations: string[] = [];
    if (!((sender.overspeedDetected === true))) {
      preViolations.push("[OverspeedAlertChannel.transmitAlert] pre violated: sender.overspeedDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sender, receiver);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === true))) {
        postViolations.push("[OverspeedAlertChannel.transmitAlert] post violated: self.alertActive = true");
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

/** Impl signature for OverspeedAlertChannel.clearAlert. User supplies this. */
export type OverspeedAlertChannelClearAlertImpl = (self: OverspeedAlertChannel, sender: OverspeedAlertSender) => { self: OverspeedAlertChannel; modified: { alertActive: unknown } };

/** Contract-checking wrapper for OverspeedAlertChannel.clearAlert. */
export function wrapOverspeedAlertChannelClearAlert(impl: OverspeedAlertChannelClearAlertImpl): (self: OverspeedAlertChannel, sender: OverspeedAlertSender) => OverspeedAlertChannel {
  return (self, sender) => {
    const preViolations: string[] = [];
    if (!(!(sender.overspeedDetected))) {
      preViolations.push("[OverspeedAlertChannel.clearAlert] pre violated: not sender.overspeedDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sender);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[OverspeedAlertChannel.clearAlert] post violated: self.alertActive = false");
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

/** Impl signature for OverspeedAlertChannel.clearAlert (async). User supplies this. */
export type OverspeedAlertChannelClearAlertAsyncImpl = (self: OverspeedAlertChannel, sender: OverspeedAlertSender) => Promise<{ self: OverspeedAlertChannel; modified: { alertActive: unknown } }>;

/** Contract-checking wrapper for OverspeedAlertChannel.clearAlert (async). */
export function wrapOverspeedAlertChannelClearAlertAsync(impl: OverspeedAlertChannelClearAlertAsyncImpl): (self: OverspeedAlertChannel, sender: OverspeedAlertSender) => Promise<OverspeedAlertChannel> {
  return async (self, sender) => {
    const preViolations: string[] = [];
    if (!(!(sender.overspeedDetected))) {
      preViolations.push("[OverspeedAlertChannel.clearAlert] pre violated: not sender.overspeedDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sender);
      const postViolations: string[] = [];
      if (!((__result.self.alertActive === false))) {
        postViolations.push("[OverspeedAlertChannel.clearAlert] post violated: self.alertActive = false");
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

/** Impl signature for FaultNotificationChannel.injectModelledValues. User supplies this. */
export type FaultNotificationChannelInjectModelledValuesImpl = (self: FaultNotificationChannel, notifier: FaultNotifier, injector: ModelledValueInjector) => { self: FaultNotificationChannel; modified: { injectionActive: unknown } };

/** Contract-checking wrapper for FaultNotificationChannel.injectModelledValues. */
export function wrapFaultNotificationChannelInjectModelledValues(impl: FaultNotificationChannelInjectModelledValuesImpl): (self: FaultNotificationChannel, notifier: FaultNotifier, injector: ModelledValueInjector) => FaultNotificationChannel {
  return (self, notifier, injector) => {
    const preViolations: string[] = [];
    if (!((notifier.sensorFaultActive === true))) {
      preViolations.push("[FaultNotificationChannel.injectModelledValues] pre violated: notifier.sensorFaultActive = true");
    }
    if (!((notifier.modelledValueAvailable === true))) {
      preViolations.push("[FaultNotificationChannel.injectModelledValues] pre violated: notifier.modelledValueAvailable = true");
    }
    if (!((self.modelledCurrentSpeed >= 0))) {
      preViolations.push("[FaultNotificationChannel.injectModelledValues] pre violated: self.modelledCurrentSpeed >= 0.0");
    }
    if (!((self.modelledFuelFlow >= 0))) {
      preViolations.push("[FaultNotificationChannel.injectModelledValues] pre violated: self.modelledFuelFlow >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, notifier, injector);
      const postViolations: string[] = [];
      if (!((__result.self.injectionActive === true))) {
        postViolations.push("[FaultNotificationChannel.injectModelledValues] post violated: self.injectionActive = true");
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

/** Impl signature for FaultNotificationChannel.injectModelledValues (async). User supplies this. */
export type FaultNotificationChannelInjectModelledValuesAsyncImpl = (self: FaultNotificationChannel, notifier: FaultNotifier, injector: ModelledValueInjector) => Promise<{ self: FaultNotificationChannel; modified: { injectionActive: unknown } }>;

/** Contract-checking wrapper for FaultNotificationChannel.injectModelledValues (async). */
export function wrapFaultNotificationChannelInjectModelledValuesAsync(impl: FaultNotificationChannelInjectModelledValuesAsyncImpl): (self: FaultNotificationChannel, notifier: FaultNotifier, injector: ModelledValueInjector) => Promise<FaultNotificationChannel> {
  return async (self, notifier, injector) => {
    const preViolations: string[] = [];
    if (!((notifier.sensorFaultActive === true))) {
      preViolations.push("[FaultNotificationChannel.injectModelledValues] pre violated: notifier.sensorFaultActive = true");
    }
    if (!((notifier.modelledValueAvailable === true))) {
      preViolations.push("[FaultNotificationChannel.injectModelledValues] pre violated: notifier.modelledValueAvailable = true");
    }
    if (!((self.modelledCurrentSpeed >= 0))) {
      preViolations.push("[FaultNotificationChannel.injectModelledValues] pre violated: self.modelledCurrentSpeed >= 0.0");
    }
    if (!((self.modelledFuelFlow >= 0))) {
      preViolations.push("[FaultNotificationChannel.injectModelledValues] pre violated: self.modelledFuelFlow >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, notifier, injector);
      const postViolations: string[] = [];
      if (!((__result.self.injectionActive === true))) {
        postViolations.push("[FaultNotificationChannel.injectModelledValues] post violated: self.injectionActive = true");
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

/** Impl signature for FaultNotificationChannel.clearInjection. User supplies this. */
export type FaultNotificationChannelClearInjectionImpl = (self: FaultNotificationChannel, notifier: FaultNotifier) => { self: FaultNotificationChannel; modified: { injectionActive: unknown } };

/** Contract-checking wrapper for FaultNotificationChannel.clearInjection. */
export function wrapFaultNotificationChannelClearInjection(impl: FaultNotificationChannelClearInjectionImpl): (self: FaultNotificationChannel, notifier: FaultNotifier) => FaultNotificationChannel {
  return (self, notifier) => {
    const preViolations: string[] = [];
    if (!(!(notifier.sensorFaultActive))) {
      preViolations.push("[FaultNotificationChannel.clearInjection] pre violated: not notifier.sensorFaultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, notifier);
      const postViolations: string[] = [];
      if (!((__result.self.injectionActive === false))) {
        postViolations.push("[FaultNotificationChannel.clearInjection] post violated: self.injectionActive = false");
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

/** Impl signature for FaultNotificationChannel.clearInjection (async). User supplies this. */
export type FaultNotificationChannelClearInjectionAsyncImpl = (self: FaultNotificationChannel, notifier: FaultNotifier) => Promise<{ self: FaultNotificationChannel; modified: { injectionActive: unknown } }>;

/** Contract-checking wrapper for FaultNotificationChannel.clearInjection (async). */
export function wrapFaultNotificationChannelClearInjectionAsync(impl: FaultNotificationChannelClearInjectionAsyncImpl): (self: FaultNotificationChannel, notifier: FaultNotifier) => Promise<FaultNotificationChannel> {
  return async (self, notifier) => {
    const preViolations: string[] = [];
    if (!(!(notifier.sensorFaultActive))) {
      preViolations.push("[FaultNotificationChannel.clearInjection] pre violated: not notifier.sensorFaultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, notifier);
      const postViolations: string[] = [];
      if (!((__result.self.injectionActive === false))) {
        postViolations.push("[FaultNotificationChannel.clearInjection] post violated: self.injectionActive = false");
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

/** Impl signature for ThrustFaultChannel.injectModelledThrust. User supplies this. */
export type ThrustFaultChannelInjectModelledThrustImpl = (self: ThrustFaultChannel, notifier: FaultNotifier2, injector: ThrustModelledValueInjector) => { self: ThrustFaultChannel; modified: { injectionActive: unknown } };

/** Contract-checking wrapper for ThrustFaultChannel.injectModelledThrust. */
export function wrapThrustFaultChannelInjectModelledThrust(impl: ThrustFaultChannelInjectModelledThrustImpl): (self: ThrustFaultChannel, notifier: FaultNotifier2, injector: ThrustModelledValueInjector) => ThrustFaultChannel {
  return (self, notifier, injector) => {
    const preViolations: string[] = [];
    if (!((notifier.sensorFaultActive === true))) {
      preViolations.push("[ThrustFaultChannel.injectModelledThrust] pre violated: notifier.sensorFaultActive = true");
    }
    if (!((self.modelledThrustCommand >= 0))) {
      preViolations.push("[ThrustFaultChannel.injectModelledThrust] pre violated: self.modelledThrustCommand >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, notifier, injector);
      const postViolations: string[] = [];
      if (!((__result.self.injectionActive === true))) {
        postViolations.push("[ThrustFaultChannel.injectModelledThrust] post violated: self.injectionActive = true");
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

/** Impl signature for ThrustFaultChannel.injectModelledThrust (async). User supplies this. */
export type ThrustFaultChannelInjectModelledThrustAsyncImpl = (self: ThrustFaultChannel, notifier: FaultNotifier2, injector: ThrustModelledValueInjector) => Promise<{ self: ThrustFaultChannel; modified: { injectionActive: unknown } }>;

/** Contract-checking wrapper for ThrustFaultChannel.injectModelledThrust (async). */
export function wrapThrustFaultChannelInjectModelledThrustAsync(impl: ThrustFaultChannelInjectModelledThrustAsyncImpl): (self: ThrustFaultChannel, notifier: FaultNotifier2, injector: ThrustModelledValueInjector) => Promise<ThrustFaultChannel> {
  return async (self, notifier, injector) => {
    const preViolations: string[] = [];
    if (!((notifier.sensorFaultActive === true))) {
      preViolations.push("[ThrustFaultChannel.injectModelledThrust] pre violated: notifier.sensorFaultActive = true");
    }
    if (!((self.modelledThrustCommand >= 0))) {
      preViolations.push("[ThrustFaultChannel.injectModelledThrust] pre violated: self.modelledThrustCommand >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, notifier, injector);
      const postViolations: string[] = [];
      if (!((__result.self.injectionActive === true))) {
        postViolations.push("[ThrustFaultChannel.injectModelledThrust] post violated: self.injectionActive = true");
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

/** Impl signature for ThrustFaultChannel.clearThrustInjection. User supplies this. */
export type ThrustFaultChannelClearThrustInjectionImpl = (self: ThrustFaultChannel, notifier: FaultNotifier2) => { self: ThrustFaultChannel; modified: { injectionActive: unknown } };

/** Contract-checking wrapper for ThrustFaultChannel.clearThrustInjection. */
export function wrapThrustFaultChannelClearThrustInjection(impl: ThrustFaultChannelClearThrustInjectionImpl): (self: ThrustFaultChannel, notifier: FaultNotifier2) => ThrustFaultChannel {
  return (self, notifier) => {
    const preViolations: string[] = [];
    if (!(!(notifier.sensorFaultActive))) {
      preViolations.push("[ThrustFaultChannel.clearThrustInjection] pre violated: not notifier.sensorFaultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, notifier);
      const postViolations: string[] = [];
      if (!((__result.self.injectionActive === false))) {
        postViolations.push("[ThrustFaultChannel.clearThrustInjection] post violated: self.injectionActive = false");
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

/** Impl signature for ThrustFaultChannel.clearThrustInjection (async). User supplies this. */
export type ThrustFaultChannelClearThrustInjectionAsyncImpl = (self: ThrustFaultChannel, notifier: FaultNotifier2) => Promise<{ self: ThrustFaultChannel; modified: { injectionActive: unknown } }>;

/** Contract-checking wrapper for ThrustFaultChannel.clearThrustInjection (async). */
export function wrapThrustFaultChannelClearThrustInjectionAsync(impl: ThrustFaultChannelClearThrustInjectionAsyncImpl): (self: ThrustFaultChannel, notifier: FaultNotifier2) => Promise<ThrustFaultChannel> {
  return async (self, notifier) => {
    const preViolations: string[] = [];
    if (!(!(notifier.sensorFaultActive))) {
      preViolations.push("[ThrustFaultChannel.clearThrustInjection] pre violated: not notifier.sensorFaultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, notifier);
      const postViolations: string[] = [];
      if (!((__result.self.injectionActive === false))) {
        postViolations.push("[ThrustFaultChannel.clearThrustInjection] post violated: self.injectionActive = false");
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

/** Impl signature for ProtectionLink.activateProtection. User supplies this. */
export type ProtectionLinkActivateProtectionImpl = (self: ProtectionLink, source: OverspeedSource, actuator: ProtectionActuator) => { self: ProtectionLink; modified: {} };

/** Contract-checking wrapper for ProtectionLink.activateProtection. */
export function wrapProtectionLinkActivateProtection(impl: ProtectionLinkActivateProtectionImpl): (self: ProtectionLink, source: OverspeedSource, actuator: ProtectionActuator) => ProtectionLink {
  return (self, source, actuator) => {
    const preViolations: string[] = [];
    if (!((source.overspeedDetected === true))) {
      preViolations.push("[ProtectionLink.activateProtection] pre violated: source.overspeedDetected = true");
    }
    if (!((self.protectionArmed === true))) {
      preViolations.push("[ProtectionLink.activateProtection] pre violated: self.protectionArmed = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, source, actuator);
      const postViolations: string[] = [];
      if (!((actuator.fuelShutoffValve === true))) {
        postViolations.push("[ProtectionLink.activateProtection] post violated: actuator.fuelShutoffValve = true");
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

/** Impl signature for ProtectionLink.activateProtection (async). User supplies this. */
export type ProtectionLinkActivateProtectionAsyncImpl = (self: ProtectionLink, source: OverspeedSource, actuator: ProtectionActuator) => Promise<{ self: ProtectionLink; modified: {} }>;

/** Contract-checking wrapper for ProtectionLink.activateProtection (async). */
export function wrapProtectionLinkActivateProtectionAsync(impl: ProtectionLinkActivateProtectionAsyncImpl): (self: ProtectionLink, source: OverspeedSource, actuator: ProtectionActuator) => Promise<ProtectionLink> {
  return async (self, source, actuator) => {
    const preViolations: string[] = [];
    if (!((source.overspeedDetected === true))) {
      preViolations.push("[ProtectionLink.activateProtection] pre violated: source.overspeedDetected = true");
    }
    if (!((self.protectionArmed === true))) {
      preViolations.push("[ProtectionLink.activateProtection] pre violated: self.protectionArmed = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, source, actuator);
      const postViolations: string[] = [];
      if (!((actuator.fuelShutoffValve === true))) {
        postViolations.push("[ProtectionLink.activateProtection] post violated: actuator.fuelShutoffValve = true");
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

/** Impl signature for ProtectionLink.armProtectionLink. User supplies this. */
export type ProtectionLinkArmProtectionLinkImpl = (self: ProtectionLink) => { self: ProtectionLink; modified: { protectionArmed: unknown } };

/** Contract-checking wrapper for ProtectionLink.armProtectionLink. */
export function wrapProtectionLinkArmProtectionLink(impl: ProtectionLinkArmProtectionLinkImpl): (self: ProtectionLink) => ProtectionLink {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.protectionArmed === true))) {
        postViolations.push("[ProtectionLink.armProtectionLink] post violated: self.protectionArmed = true");
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

/** Impl signature for ProtectionLink.armProtectionLink (async). User supplies this. */
export type ProtectionLinkArmProtectionLinkAsyncImpl = (self: ProtectionLink) => Promise<{ self: ProtectionLink; modified: { protectionArmed: unknown } }>;

/** Contract-checking wrapper for ProtectionLink.armProtectionLink (async). */
export function wrapProtectionLinkArmProtectionLinkAsync(impl: ProtectionLinkArmProtectionLinkAsyncImpl): (self: ProtectionLink) => Promise<ProtectionLink> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.protectionArmed === true))) {
        postViolations.push("[ProtectionLink.armProtectionLink] post violated: self.protectionArmed = true");
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

/** Impl signature for EngineControlSystem.detectOverspeed. User supplies this. */
export type EngineControlSystemDetectOverspeedImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { overspeedDetected: unknown } };

/** Contract-checking wrapper for EngineControlSystem.detectOverspeed. */
export function wrapEngineControlSystemDetectOverspeed(impl: EngineControlSystemDetectOverspeedImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentSpeed > self.maxSafeSpeed))) {
      preViolations.push("[EngineControlSystem.detectOverspeed] pre violated: self.currentSpeed > self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[EngineControlSystem.detectOverspeed] post violated: self.overspeedDetected = true");
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

/** Impl signature for EngineControlSystem.detectOverspeed (async). User supplies this. */
export type EngineControlSystemDetectOverspeedAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { overspeedDetected: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.detectOverspeed (async). */
export function wrapEngineControlSystemDetectOverspeedAsync(impl: EngineControlSystemDetectOverspeedAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentSpeed > self.maxSafeSpeed))) {
      preViolations.push("[EngineControlSystem.detectOverspeed] pre violated: self.currentSpeed > self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[EngineControlSystem.detectOverspeed] post violated: self.overspeedDetected = true");
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

/** Impl signature for EngineControlSystem.limitFuelOnOverspeed. User supplies this. */
export type EngineControlSystemLimitFuelOnOverspeedImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { fuelFlow: unknown } };

/** Contract-checking wrapper for EngineControlSystem.limitFuelOnOverspeed. */
export function wrapEngineControlSystemLimitFuelOnOverspeed(impl: EngineControlSystemLimitFuelOnOverspeedImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.overspeedDetected === true))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: self.overspeedDetected = true");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: self.overspeedProtectionFitted = true");
    }
    if (!((self.fuelFlow > 0))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: self.fuelFlow > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow <= 0))) {
        postViolations.push("[EngineControlSystem.limitFuelOnOverspeed] post violated: self.fuelFlow <= 0.0");
      }
      if (!((__result.self.currentSpeed <= __result.self.maxSafeSpeed))) {
        postViolations.push("[EngineControlSystem.limitFuelOnOverspeed] post violated: self.currentSpeed <= self.maxSafeSpeed");
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

/** Impl signature for EngineControlSystem.limitFuelOnOverspeed (async). User supplies this. */
export type EngineControlSystemLimitFuelOnOverspeedAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { fuelFlow: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.limitFuelOnOverspeed (async). */
export function wrapEngineControlSystemLimitFuelOnOverspeedAsync(impl: EngineControlSystemLimitFuelOnOverspeedAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.overspeedDetected === true))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: self.overspeedDetected = true");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: self.overspeedProtectionFitted = true");
    }
    if (!((self.fuelFlow > 0))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: self.fuelFlow > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow <= 0))) {
        postViolations.push("[EngineControlSystem.limitFuelOnOverspeed] post violated: self.fuelFlow <= 0.0");
      }
      if (!((__result.self.currentSpeed <= __result.self.maxSafeSpeed))) {
        postViolations.push("[EngineControlSystem.limitFuelOnOverspeed] post violated: self.currentSpeed <= self.maxSafeSpeed");
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

/** Impl signature for EngineControlSystem.commandContinuousIgnition. User supplies this. */
export type EngineControlSystemCommandContinuousIgnitionImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { continuousIgnitionEnabled: unknown } };

/** Contract-checking wrapper for EngineControlSystem.commandContinuousIgnition. */
export function wrapEngineControlSystemCommandContinuousIgnition(impl: EngineControlSystemCommandContinuousIgnitionImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionCommanded === true))) {
      preViolations.push("[EngineControlSystem.commandContinuousIgnition] pre violated: self.continuousIgnitionCommanded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionEnabled === true))) {
        postViolations.push("[EngineControlSystem.commandContinuousIgnition] post violated: self.continuousIgnitionEnabled = true");
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

/** Impl signature for EngineControlSystem.commandContinuousIgnition (async). User supplies this. */
export type EngineControlSystemCommandContinuousIgnitionAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { continuousIgnitionEnabled: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.commandContinuousIgnition (async). */
export function wrapEngineControlSystemCommandContinuousIgnitionAsync(impl: EngineControlSystemCommandContinuousIgnitionAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionCommanded === true))) {
      preViolations.push("[EngineControlSystem.commandContinuousIgnition] pre violated: self.continuousIgnitionCommanded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionEnabled === true))) {
        postViolations.push("[EngineControlSystem.commandContinuousIgnition] post violated: self.continuousIgnitionEnabled = true");
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

/** Impl signature for EngineControlSystem.holdThrustInFlight. User supplies this. */
export type EngineControlSystemHoldThrustInFlightImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { thrustHeld: unknown } };

/** Contract-checking wrapper for EngineControlSystem.holdThrustInFlight. */
export function wrapEngineControlSystemHoldThrustInFlight(impl: EngineControlSystemHoldThrustInFlightImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.inFlight === true))) {
      preViolations.push("[EngineControlSystem.holdThrustInFlight] pre violated: self.inFlight = true");
    }
    if (!((self.thrustCommanded > 0))) {
      preViolations.push("[EngineControlSystem.holdThrustInFlight] pre violated: self.thrustCommanded > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustHeld === __result.self.thrustCommanded))) {
        postViolations.push("[EngineControlSystem.holdThrustInFlight] post violated: self.thrustHeld = self.thrustCommanded");
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

/** Impl signature for EngineControlSystem.holdThrustInFlight (async). User supplies this. */
export type EngineControlSystemHoldThrustInFlightAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { thrustHeld: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.holdThrustInFlight (async). */
export function wrapEngineControlSystemHoldThrustInFlightAsync(impl: EngineControlSystemHoldThrustInFlightAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.inFlight === true))) {
      preViolations.push("[EngineControlSystem.holdThrustInFlight] pre violated: self.inFlight = true");
    }
    if (!((self.thrustCommanded > 0))) {
      preViolations.push("[EngineControlSystem.holdThrustInFlight] pre violated: self.thrustCommanded > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustHeld === __result.self.thrustCommanded))) {
        postViolations.push("[EngineControlSystem.holdThrustInFlight] post violated: self.thrustHeld = self.thrustCommanded");
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

/** Impl signature for EngineControlSystem.deployReverserOnGround. User supplies this. */
export type EngineControlSystemDeployReverserOnGroundImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { reverserEnabled: unknown } };

/** Contract-checking wrapper for EngineControlSystem.deployReverserOnGround. */
export function wrapEngineControlSystemDeployReverserOnGround(impl: EngineControlSystemDeployReverserOnGroundImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === true))) {
      preViolations.push("[EngineControlSystem.deployReverserOnGround] pre violated: self.onGround = true");
    }
    if (!((self.reverserCommanded === true))) {
      preViolations.push("[EngineControlSystem.deployReverserOnGround] pre violated: self.reverserCommanded = true");
    }
    if (!(!(self.reverserEnabled))) {
      preViolations.push("[EngineControlSystem.deployReverserOnGround] pre violated: not self.reverserEnabled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserEnabled === true))) {
        postViolations.push("[EngineControlSystem.deployReverserOnGround] post violated: self.reverserEnabled = true");
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

/** Impl signature for EngineControlSystem.deployReverserOnGround (async). User supplies this. */
export type EngineControlSystemDeployReverserOnGroundAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { reverserEnabled: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.deployReverserOnGround (async). */
export function wrapEngineControlSystemDeployReverserOnGroundAsync(impl: EngineControlSystemDeployReverserOnGroundAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === true))) {
      preViolations.push("[EngineControlSystem.deployReverserOnGround] pre violated: self.onGround = true");
    }
    if (!((self.reverserCommanded === true))) {
      preViolations.push("[EngineControlSystem.deployReverserOnGround] pre violated: self.reverserCommanded = true");
    }
    if (!(!(self.reverserEnabled))) {
      preViolations.push("[EngineControlSystem.deployReverserOnGround] pre violated: not self.reverserEnabled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserEnabled === true))) {
        postViolations.push("[EngineControlSystem.deployReverserOnGround] post violated: self.reverserEnabled = true");
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

/** Impl signature for EngineControlSystem.detectSensorFault. User supplies this. */
export type EngineControlSystemDetectSensorFaultImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { sensorFaultActive: unknown; faultDetected: unknown; modelledValueInUse: unknown; modelledValueAvailable: unknown } };

/** Contract-checking wrapper for EngineControlSystem.detectSensorFault. */
export function wrapEngineControlSystemDetectSensorFault(impl: EngineControlSystemDetectSensorFaultImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultActive))) {
      preViolations.push("[EngineControlSystem.detectSensorFault] pre violated: not self.sensorFaultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultActive === true))) {
        postViolations.push("[EngineControlSystem.detectSensorFault] post violated: self.sensorFaultActive = true");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[EngineControlSystem.detectSensorFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.modelledValueInUse === true))) {
        postViolations.push("[EngineControlSystem.detectSensorFault] post violated: self.modelledValueInUse = true");
      }
      if (!((__result.self.modelledValueAvailable === true))) {
        postViolations.push("[EngineControlSystem.detectSensorFault] post violated: self.modelledValueAvailable = true");
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

/** Impl signature for EngineControlSystem.detectSensorFault (async). User supplies this. */
export type EngineControlSystemDetectSensorFaultAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { sensorFaultActive: unknown; faultDetected: unknown; modelledValueInUse: unknown; modelledValueAvailable: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.detectSensorFault (async). */
export function wrapEngineControlSystemDetectSensorFaultAsync(impl: EngineControlSystemDetectSensorFaultAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaultActive))) {
      preViolations.push("[EngineControlSystem.detectSensorFault] pre violated: not self.sensorFaultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultActive === true))) {
        postViolations.push("[EngineControlSystem.detectSensorFault] post violated: self.sensorFaultActive = true");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[EngineControlSystem.detectSensorFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.modelledValueInUse === true))) {
        postViolations.push("[EngineControlSystem.detectSensorFault] post violated: self.modelledValueInUse = true");
      }
      if (!((__result.self.modelledValueAvailable === true))) {
        postViolations.push("[EngineControlSystem.detectSensorFault] post violated: self.modelledValueAvailable = true");
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

/** Impl signature for EngineControlSystemFormalized.rejectOverspeedWhenNoProtection. User supplies this. */
export type EngineControlSystemFormalizedRejectOverspeedWhenNoProtectionImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { fuelFlow: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectOverspeedWhenNoProtection. */
export function wrapEngineControlSystemFormalizedRejectOverspeedWhenNoProtection(impl: EngineControlSystemFormalizedRejectOverspeedWhenNoProtectionImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.overspeedDetected)) {
      preViolations.push("[EngineControlSystemFormalized.rejectOverspeedWhenNoProtection] pre violated: self.overspeedDetected");
    }
    if (!(!(self.overspeedProtectionFitted))) {
      preViolations.push("[EngineControlSystemFormalized.rejectOverspeedWhenNoProtection] pre violated: not self.overspeedProtectionFitted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.fuelFlow": self.fuelFlow,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow <= __pre["self.fuelFlow"]))) {
        postViolations.push("[EngineControlSystemFormalized.rejectOverspeedWhenNoProtection] post violated: self.fuelFlow <= self.fuelFlow@pre");
      }
      if (!(!(__result.self.reverserEnabled))) {
        postViolations.push("[EngineControlSystemFormalized.rejectOverspeedWhenNoProtection] post violated: not self.reverserEnabled");
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

/** Impl signature for EngineControlSystemFormalized.rejectOverspeedWhenNoProtection (async). User supplies this. */
export type EngineControlSystemFormalizedRejectOverspeedWhenNoProtectionAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { fuelFlow: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectOverspeedWhenNoProtection (async). */
export function wrapEngineControlSystemFormalizedRejectOverspeedWhenNoProtectionAsync(impl: EngineControlSystemFormalizedRejectOverspeedWhenNoProtectionAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.overspeedDetected)) {
      preViolations.push("[EngineControlSystemFormalized.rejectOverspeedWhenNoProtection] pre violated: self.overspeedDetected");
    }
    if (!(!(self.overspeedProtectionFitted))) {
      preViolations.push("[EngineControlSystemFormalized.rejectOverspeedWhenNoProtection] pre violated: not self.overspeedProtectionFitted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.fuelFlow": self.fuelFlow,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow <= __pre["self.fuelFlow"]))) {
        postViolations.push("[EngineControlSystemFormalized.rejectOverspeedWhenNoProtection] post violated: self.fuelFlow <= self.fuelFlow@pre");
      }
      if (!(!(__result.self.reverserEnabled))) {
        postViolations.push("[EngineControlSystemFormalized.rejectOverspeedWhenNoProtection] post violated: not self.reverserEnabled");
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

/** Impl signature for EngineControlSystemFormalized.rejectReverserInFlight. User supplies this. */
export type EngineControlSystemFormalizedRejectReverserInFlightImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { reverserEnabled: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectReverserInFlight. */
export function wrapEngineControlSystemFormalizedRejectReverserInFlight(impl: EngineControlSystemFormalizedRejectReverserInFlightImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: self.onGround = false");
    }
    if (!((self.reverserCommanded === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: self.reverserCommanded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.reverserEnabled))) {
        postViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] post violated: not self.reverserEnabled");
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

/** Impl signature for EngineControlSystemFormalized.rejectReverserInFlight (async). User supplies this. */
export type EngineControlSystemFormalizedRejectReverserInFlightAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { reverserEnabled: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectReverserInFlight (async). */
export function wrapEngineControlSystemFormalizedRejectReverserInFlightAsync(impl: EngineControlSystemFormalizedRejectReverserInFlightAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.onGround === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: self.onGround = false");
    }
    if (!((self.reverserCommanded === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: self.reverserCommanded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.reverserEnabled))) {
        postViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] post violated: not self.reverserEnabled");
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

/** Impl signature for EngineControlSystemFormalized.enforceModelledValueSubstitution. User supplies this. */
export type EngineControlSystemFormalizedEnforceModelledValueSubstitutionImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { modelledValueInUse: unknown; modelledValueAvailable: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.enforceModelledValueSubstitution. */
export function wrapEngineControlSystemFormalizedEnforceModelledValueSubstitution(impl: EngineControlSystemFormalizedEnforceModelledValueSubstitutionImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultActive === true))) {
      preViolations.push("[EngineControlSystemFormalized.enforceModelledValueSubstitution] pre violated: self.sensorFaultActive = true");
    }
    if (!(!(self.modelledValueInUse))) {
      preViolations.push("[EngineControlSystemFormalized.enforceModelledValueSubstitution] pre violated: not self.modelledValueInUse");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValueInUse === true))) {
        postViolations.push("[EngineControlSystemFormalized.enforceModelledValueSubstitution] post violated: self.modelledValueInUse = true");
      }
      if (!((__result.self.modelledValueAvailable === true))) {
        postViolations.push("[EngineControlSystemFormalized.enforceModelledValueSubstitution] post violated: self.modelledValueAvailable = true");
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

/** Impl signature for EngineControlSystemFormalized.enforceModelledValueSubstitution (async). User supplies this. */
export type EngineControlSystemFormalizedEnforceModelledValueSubstitutionAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { modelledValueInUse: unknown; modelledValueAvailable: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.enforceModelledValueSubstitution (async). */
export function wrapEngineControlSystemFormalizedEnforceModelledValueSubstitutionAsync(impl: EngineControlSystemFormalizedEnforceModelledValueSubstitutionAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultActive === true))) {
      preViolations.push("[EngineControlSystemFormalized.enforceModelledValueSubstitution] pre violated: self.sensorFaultActive = true");
    }
    if (!(!(self.modelledValueInUse))) {
      preViolations.push("[EngineControlSystemFormalized.enforceModelledValueSubstitution] pre violated: not self.modelledValueInUse");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValueInUse === true))) {
        postViolations.push("[EngineControlSystemFormalized.enforceModelledValueSubstitution] post violated: self.modelledValueInUse = true");
      }
      if (!((__result.self.modelledValueAvailable === true))) {
        postViolations.push("[EngineControlSystemFormalized.enforceModelledValueSubstitution] post violated: self.modelledValueAvailable = true");
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

/** Impl signature for EngineControlSystemFormalized.guardContinuousIgnition. User supplies this. */
export type EngineControlSystemFormalizedGuardContinuousIgnitionImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { continuousIgnitionEnabled: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.guardContinuousIgnition. */
export function wrapEngineControlSystemFormalizedGuardContinuousIgnition(impl: EngineControlSystemFormalizedGuardContinuousIgnitionImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.continuousIgnitionCommanded))) {
      preViolations.push("[EngineControlSystemFormalized.guardContinuousIgnition] pre violated: not self.continuousIgnitionCommanded");
    }
    if (!(self.continuousIgnitionEnabled)) {
      preViolations.push("[EngineControlSystemFormalized.guardContinuousIgnition] pre violated: self.continuousIgnitionEnabled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.continuousIgnitionEnabled))) {
        postViolations.push("[EngineControlSystemFormalized.guardContinuousIgnition] post violated: not self.continuousIgnitionEnabled");
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

/** Impl signature for EngineControlSystemFormalized.guardContinuousIgnition (async). User supplies this. */
export type EngineControlSystemFormalizedGuardContinuousIgnitionAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { continuousIgnitionEnabled: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.guardContinuousIgnition (async). */
export function wrapEngineControlSystemFormalizedGuardContinuousIgnitionAsync(impl: EngineControlSystemFormalizedGuardContinuousIgnitionAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.continuousIgnitionCommanded))) {
      preViolations.push("[EngineControlSystemFormalized.guardContinuousIgnition] pre violated: not self.continuousIgnitionCommanded");
    }
    if (!(self.continuousIgnitionEnabled)) {
      preViolations.push("[EngineControlSystemFormalized.guardContinuousIgnition] pre violated: self.continuousIgnitionEnabled");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.continuousIgnitionEnabled))) {
        postViolations.push("[EngineControlSystemFormalized.guardContinuousIgnition] post violated: not self.continuousIgnitionEnabled");
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

/** Impl signature for EngineControlSystemFormalized.limitThrustOnOverspeed. User supplies this. */
export type EngineControlSystemFormalizedLimitThrustOnOverspeedImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { thrustCommanded: unknown; overspeedDetected: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.limitThrustOnOverspeed. */
export function wrapEngineControlSystemFormalizedLimitThrustOnOverspeed(impl: EngineControlSystemFormalizedLimitThrustOnOverspeedImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.overspeedDetected === true))) {
      preViolations.push("[EngineControlSystemFormalized.limitThrustOnOverspeed] pre violated: self.overspeedDetected = true");
    }
    if (!((self.thrustCommanded > 0))) {
      preViolations.push("[EngineControlSystemFormalized.limitThrustOnOverspeed] pre violated: self.thrustCommanded > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded <= 0))) {
        postViolations.push("[EngineControlSystemFormalized.limitThrustOnOverspeed] post violated: self.thrustCommanded <= 0.0");
      }
      if (!((__result.self.overspeedDetected === false))) {
        postViolations.push("[EngineControlSystemFormalized.limitThrustOnOverspeed] post violated: self.overspeedDetected = false");
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

/** Impl signature for EngineControlSystemFormalized.limitThrustOnOverspeed (async). User supplies this. */
export type EngineControlSystemFormalizedLimitThrustOnOverspeedAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { thrustCommanded: unknown; overspeedDetected: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.limitThrustOnOverspeed (async). */
export function wrapEngineControlSystemFormalizedLimitThrustOnOverspeedAsync(impl: EngineControlSystemFormalizedLimitThrustOnOverspeedAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.overspeedDetected === true))) {
      preViolations.push("[EngineControlSystemFormalized.limitThrustOnOverspeed] pre violated: self.overspeedDetected = true");
    }
    if (!((self.thrustCommanded > 0))) {
      preViolations.push("[EngineControlSystemFormalized.limitThrustOnOverspeed] pre violated: self.thrustCommanded > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded <= 0))) {
        postViolations.push("[EngineControlSystemFormalized.limitThrustOnOverspeed] post violated: self.thrustCommanded <= 0.0");
      }
      if (!((__result.self.overspeedDetected === false))) {
        postViolations.push("[EngineControlSystemFormalized.limitThrustOnOverspeed] post violated: self.overspeedDetected = false");
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

/** Lifecycle registry for OverspeedPrevention commitments. */
export class OverspeedPreventionRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<OverspeedPrevention>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a OverspeedPrevention — the typed wrapper guarantees that since
    // `register` only accepts OverspeedPrevention instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: OverspeedPrevention): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: OverspeedPreventionId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: OverspeedPreventionId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: OverspeedPreventionId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<OverspeedPrevention>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<OverspeedPrevention>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ThrustManagement commitments. */
export class ThrustManagementRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ThrustManagement>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ThrustManagement — the typed wrapper guarantees that since
    // `register` only accepts ThrustManagement instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ThrustManagement): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ThrustManagementId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ThrustManagementId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ThrustManagementId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ThrustManagement>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ThrustManagement>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for SensorFaultTolerance commitments. */
export class SensorFaultToleranceRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SensorFaultTolerance>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SensorFaultTolerance — the typed wrapper guarantees that since
    // `register` only accepts SensorFaultTolerance instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SensorFaultTolerance): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SensorFaultToleranceId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SensorFaultToleranceId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SensorFaultToleranceId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SensorFaultTolerance>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SensorFaultTolerance>[];
  }

  size(): number {
    return this.inner.size();
  }
}

