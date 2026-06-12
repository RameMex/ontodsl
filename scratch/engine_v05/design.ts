// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for SpeedSensor. Runtime: string. Compile-time: branded. */
export type SpeedSensorId = string & { readonly __brand: "SpeedSensorId" };
/** Identity type for OverspeedProtector. Runtime: string. Compile-time: branded. */
export type OverspeedProtectorId = string & { readonly __brand: "OverspeedProtectorId" };
/** Identity type for FuelMeteringUnit. Runtime: string. Compile-time: branded. */
export type FuelMeteringUnitId = string & { readonly __brand: "FuelMeteringUnitId" };
/** Identity type for IgnitionController. Runtime: string. Compile-time: branded. */
export type IgnitionControllerId = string & { readonly __brand: "IgnitionControllerId" };
/** Identity type for ThrustController. Runtime: string. Compile-time: branded. */
export type ThrustControllerId = string & { readonly __brand: "ThrustControllerId" };
/** Identity type for SensorFaultManager. Runtime: string. Compile-time: branded. */
export type SensorFaultManagerId = string & { readonly __brand: "SensorFaultManagerId" };
/** Identity type for ModelledValueCalculator. Runtime: string. Compile-time: branded. */
export type ModelledValueCalculatorId = string & { readonly __brand: "ModelledValueCalculatorId" };
/** Identity type for AircraftStateManager. Runtime: string. Compile-time: branded. */
export type AircraftStateManagerId = string & { readonly __brand: "AircraftStateManagerId" };
/** Identity type for SpeedSensorInterface. Runtime: string. Compile-time: branded. */
export type SpeedSensorInterfaceId = string & { readonly __brand: "SpeedSensorInterfaceId" };
/** Identity type for OverspeedFuelInterface. Runtime: string. Compile-time: branded. */
export type OverspeedFuelInterfaceId = string & { readonly __brand: "OverspeedFuelInterfaceId" };
/** Identity type for FaultModelledValueInterface. Runtime: string. Compile-time: branded. */
export type FaultModelledValueInterfaceId = string & { readonly __brand: "FaultModelledValueInterfaceId" };
/** Identity type for ThrustStateInterface. Runtime: string. Compile-time: branded. */
export type ThrustStateInterfaceId = string & { readonly __brand: "ThrustStateInterfaceId" };
/** Identity type for IgnitionThrustInterface. Runtime: string. Compile-time: branded. */
export type IgnitionThrustInterfaceId = string & { readonly __brand: "IgnitionThrustInterfaceId" };
/** Identity type for AirlineOperator. Runtime: string. Compile-time: branded. */
export type AirlineOperatorId = string & { readonly __brand: "AirlineOperatorId" };
/** Identity type for Pilot. Runtime: string. Compile-time: branded. */
export type PilotId = string & { readonly __brand: "PilotId" };
/** Identity type for MaintenanceCrew. Runtime: string. Compile-time: branded. */
export type MaintenanceCrewId = string & { readonly __brand: "MaintenanceCrewId" };
/** Identity type for AirworthinessAuthority. Runtime: string. Compile-time: branded. */
export type AirworthinessAuthorityId = string & { readonly __brand: "AirworthinessAuthorityId" };
/** Identity type for EngineControlVendor. Runtime: string. Compile-time: branded. */
export type EngineControlVendorId = string & { readonly __brand: "EngineControlVendorId" };
/** Identity type for OverspeedProtectionCommitment. Runtime: string. Compile-time: branded. */
export type OverspeedProtectionCommitmentId = string & { readonly __brand: "OverspeedProtectionCommitmentId" };
/** Identity type for SensorFaultToleranceCommitment. Runtime: string. Compile-time: branded. */
export type SensorFaultToleranceCommitmentId = string & { readonly __brand: "SensorFaultToleranceCommitmentId" };
/** Identity type for IgnitionThrustControlCommitment. Runtime: string. Compile-time: branded. */
export type IgnitionThrustControlCommitmentId = string & { readonly __brand: "IgnitionThrustControlCommitmentId" };
/** Identity type for ThrustReverserGroundOnlyCommitment. Runtime: string. Compile-time: branded. */
export type ThrustReverserGroundOnlyCommitmentId = string & { readonly __brand: "ThrustReverserGroundOnlyCommitmentId" };
/** Identity type for Overspeed. Runtime: string. Compile-time: branded. */
export type OverspeedId = string & { readonly __brand: "OverspeedId" };
/** Identity type for ContinuousIgnition. Runtime: string. Compile-time: branded. */
export type ContinuousIgnitionId = string & { readonly __brand: "ContinuousIgnitionId" };
/** Identity type for ThrustReverser. Runtime: string. Compile-time: branded. */
export type ThrustReverserId = string & { readonly __brand: "ThrustReverserId" };
/** Identity type for ModelledValue. Runtime: string. Compile-time: branded. */
export type ModelledValueId = string & { readonly __brand: "ModelledValueId" };
/** Identity type for OverspeedProtectionFlow. Runtime: string. Compile-time: branded. */
export type OverspeedProtectionFlowId = string & { readonly __brand: "OverspeedProtectionFlowId" };
/** Identity type for SensorFaultHandlingFlow. Runtime: string. Compile-time: branded. */
export type SensorFaultHandlingFlowId = string & { readonly __brand: "SensorFaultHandlingFlowId" };
/** Identity type for IgnitionControlFlow. Runtime: string. Compile-time: branded. */
export type IgnitionControlFlowId = string & { readonly __brand: "IgnitionControlFlowId" };
/** Identity type for ThrustReverserDeploymentFlow. Runtime: string. Compile-time: branded. */
export type ThrustReverserDeploymentFlowId = string & { readonly __brand: "ThrustReverserDeploymentFlowId" };
/** Identity type for EngineControlSystem. Runtime: string. Compile-time: branded. */
export type EngineControlSystemId = string & { readonly __brand: "EngineControlSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface SpeedSensor {
  readonly sensorId: SpeedSensorId;
  readonly lastReportedRpm: number;
  readonly sensorValid: boolean;
  readonly faultDetected: boolean;
}

/** @stereotype <<Kind>> */
export interface OverspeedProtector {
  readonly protectorId: OverspeedProtectorId;
  readonly safeMaxSpeedRpm: number;
  readonly overspeedDetected: boolean;
  readonly fuelLimitedEnabled: boolean;
  readonly protectionFitted: boolean;
}

/** @stereotype <<Kind>> */
export interface FuelMeteringUnit {
  readonly unitId: FuelMeteringUnitId;
  readonly fuelFlowRate: number;
  readonly fuelLimited: boolean;
  readonly maxFuelFlowRate: number;
}

/** @stereotype <<Kind>> */
export interface IgnitionController {
  readonly controllerId: IgnitionControllerId;
  readonly ignitionActive: boolean;
  readonly holdingTimerSec: number;
  readonly timerElapsed: boolean;
}

/** @stereotype <<Kind>> */
export interface ThrustController {
  readonly controllerId: ThrustControllerId;
  readonly thrustCommanded: number;
  readonly reverserDeploymentAllowed: boolean;
  readonly reverserDeployed: boolean;
  readonly inFlight: boolean;
}

/** @stereotype <<Kind>> */
export interface SensorFaultManager {
  readonly managerId: SensorFaultManagerId;
  readonly sensorFaultDetected: boolean;
  readonly consecutiveFaults: number;
  readonly maxConsecutiveFaults: number;
  readonly modelledValueActive: boolean;
}

/** @stereotype <<Kind>> */
export interface ModelledValueCalculator {
  readonly calculatorId: ModelledValueCalculatorId;
  readonly lastValidReading: number;
  readonly currentModelledValue: number;
  readonly decayRatePercentPerSec: number;
}

/** @stereotype <<Kind>> */
export interface AircraftStateManager {
  readonly stateManagerId: AircraftStateManagerId;
  readonly inFlight: boolean;
  readonly isOnGround: boolean;
}

/** @stereotype <<Role>> */
export interface SpeedSensorEndpoint {
  readonly sensorId: string;
}

/** @stereotype <<Role>> */
export interface OverspeedProtectorEndpoint {
  readonly protectorId: string;
}

/** @stereotype <<Relator>> */
export interface SpeedSensorInterface {
  readonly interfaceId: SpeedSensorInterfaceId;
  readonly latestReportedRpm: number;
  readonly isFaulty: boolean;
  readonly lastReportTimeMs: number;
}

/** @stereotype <<Role>> */
export interface OverspeedActuatorEndpoint {
  readonly protectorId: string;
  readonly fuelLimitedEnabled: boolean;
}

/** @stereotype <<Role>> */
export interface FuelActuatorEndpoint {
  readonly unitId: string;
  readonly fuelLimited: boolean;
}

/** @stereotype <<Relator>> */
export interface OverspeedFuelInterface {
  readonly interfaceId: OverspeedFuelInterfaceId;
  readonly fuelLimitCommanded: boolean;
  readonly limitActive: boolean;
}

/** @stereotype <<Role>> */
export interface FaultDetectionEndpoint {
  readonly managerId: string;
  readonly modelledValueActive: boolean;
}

/** @stereotype <<Role>> */
export interface CalculationEndpoint {
  readonly calculatorId: string;
  readonly currentModelledValue: number;
}

/** @stereotype <<Relator>> */
export interface FaultModelledValueInterface {
  readonly interfaceId: FaultModelledValueInterfaceId;
  readonly faultActive: boolean;
  readonly latestModelledValue: number;
}

/** @stereotype <<Role>> */
export interface ThrustCommandEndpoint {
  readonly controllerId: string;
  readonly inFlight: boolean;
  readonly reverserDeploymentAllowed: boolean;
}

/** @stereotype <<Role>> */
export interface StateEndpoint {
  readonly stateManagerId: string;
  readonly inFlight: boolean;
  readonly isOnGround: boolean;
}

/** @stereotype <<Relator>> */
export interface ThrustStateInterface {
  readonly interfaceId: ThrustStateInterfaceId;
  readonly aircraftInFlight: boolean;
}

/** @stereotype <<Role>> */
export interface IgnitionCoordinationEndpoint {
  readonly controllerId: string;
  readonly ignitionActive: boolean;
}

/** @stereotype <<Role>> */
export interface ThrustCoordinationEndpoint {
  readonly controllerId: string;
  readonly thrustCommanded: number;
}

/** @stereotype <<Relator>> */
export interface IgnitionThrustInterface {
  readonly interfaceId: IgnitionThrustInterfaceId;
  readonly ignitionAndThrustActive: boolean;
}

/** @stereotype <<Agent>> */
export interface AirlineOperator {
  readonly operatorId: AirlineOperatorId;
  readonly name: string;
  readonly fleetSize: number;
}

/** @stereotype <<Agent>> */
export interface Pilot {
  readonly pilotId: PilotId;
  readonly name: string;
  readonly licenseNumber: string;
  readonly isTrainedOnEngine: boolean;
}

/** @stereotype <<Agent>> */
export interface MaintenanceCrew {
  readonly crewId: MaintenanceCrewId;
  readonly teamName: string;
}

/** @stereotype <<Agent>> */
export interface AirworthinessAuthority {
  readonly authorityId: AirworthinessAuthorityId;
  readonly name: string;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface EngineControlVendor {
  readonly vendorId: EngineControlVendorId;
  readonly name: string;
  readonly certificationLevel: string;
}

/** @stereotype <<Commitment>> */
export interface OverspeedProtectionCommitment {
  readonly commitmentId: OverspeedProtectionCommitmentId;
  readonly safeMaxSpeed: number;
}

/** @stereotype <<Commitment>> */
export interface SensorFaultToleranceCommitment {
  readonly commitmentId: SensorFaultToleranceCommitmentId;
  readonly maxConsecutiveFaults: number;
}

/** @stereotype <<Commitment>> */
export interface IgnitionThrustControlCommitment {
  readonly commitmentId: IgnitionThrustControlCommitmentId;
  readonly minIgnitionHoldingTimeSec: number;
}

/** @stereotype <<Commitment>> */
export interface ThrustReverserGroundOnlyCommitment {
  readonly commitmentId: ThrustReverserGroundOnlyCommitmentId;
  readonly groundOnlyDeployment: boolean;
}

/** @stereotype <<Category>> */
export interface SafetyConstraints {
}

/** @stereotype <<Category>> */
export interface FaultToleranceConstraints {
}

/** @stereotype <<Kind>> */
export interface Overspeed {
  readonly overspeedId: OverspeedId;
  readonly description: string;
  readonly certifiedMaxSpeedRpm: number;
}

/** @stereotype <<Kind>> */
export interface ContinuousIgnition {
  readonly ignitionId: ContinuousIgnitionId;
  readonly description: string;
  readonly isActive: boolean;
}

/** @stereotype <<Kind>> */
export interface ThrustReverser {
  readonly reverserId: ThrustReverserId;
  readonly description: string;
  readonly isDeployed: boolean;
  readonly deploymentAllowed: boolean;
}

/** @stereotype <<Kind>> */
export interface ModelledValue {
  readonly modelledValueId: ModelledValueId;
  readonly parameterName: string;
  readonly estimatedValue: number;
  readonly source: string;
}

/** @stereotype <<Happening>> */
export interface OverspeedProtectionFlow {
  readonly flowId: OverspeedProtectionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SensorFaultHandlingFlow {
  readonly flowId: SensorFaultHandlingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface IgnitionControlFlow {
  readonly flowId: IgnitionControlFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ThrustReverserDeploymentFlow {
  readonly flowId: ThrustReverserDeploymentFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface EngineControlSystem extends SafetyConstraints, FaultToleranceConstraints {
  readonly systemId: EngineControlSystemId;
  readonly safeMaxSpeedRpm: number;
  readonly currentSpeedRpm: number;
  readonly fuelFlowRate: number;
  readonly overspeedProtectionFitted: boolean;
  readonly overspeedDetected: boolean;
  readonly fuelLimited: boolean;
  readonly continuousIgnitionActive: boolean;
  readonly thrustCommanded: number;
  readonly inFlight: boolean;
  readonly reverseThrustCommanded: boolean;
  readonly reverserDeploymentAllowed: boolean;
  readonly reverserDeployed: boolean;
  readonly sensorFaultDetected: boolean;
  readonly consecutiveSensorFaults: number;
  readonly maxConsecutiveFaults: number;
  readonly modelledValueActive: boolean;
  readonly modelledValue: number;
  readonly ignitionHoldingTimeSec: number;
  readonly groundOnlyDeployment: boolean;
  readonly minIgnitionHoldingTimeSec: number;
}

/** @stereotype <<Category>> */
export interface EasaCsE510OverSpeedLimitation {
  readonly certificationBasis: string;
  readonly limitingOverSpeedRpm: number;
  readonly overspeedDurationLimitSec: number;
}

/** @stereotype <<Category>> */
export interface FaaPart33_75SafetyAnalysis {
  readonly certificationBasis: string;
  readonly maxHazardousEffectsAllowed: number;
}

/** @stereotype <<Category>> */
export interface EasaCsE60EngineControls {
  readonly certificationBasis: string;
  readonly reversalLockRequired: boolean;
  readonly preloadMechanismRequired: boolean;
}

/** @stereotype <<Category>> */
export interface RtcDo178cLevelA {
  readonly certificationBasis: string;
  readonly assuranceLevel: string;
  readonly maxAllowedFailureRate: number;
}

/** @stereotype <<Category>> */
export interface SensorPlausibilityConstraints {
  readonly minPlausibleRpm: number;
  readonly maxPlausibleRpm: number;
}

/** @stereotype <<Category>> */
export interface FuelMeteringPhysics {
  readonly maxFuelFlowRate: number;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionLabel: string;
  readonly statement: string;
  readonly rationale: string;
  readonly owner: string;
}

/** @stereotype <<Subkind>> */
export interface EngineControlSystemFormalized extends EngineControlSystem {
}


// ─── Factory functions ───

export function makeSpeedSensor(data: {
  sensorId: string;
  lastReportedRpm: number;
  sensorValid: boolean;
  faultDetected: boolean;
}): SpeedSensor {
  return {
    sensorId: data.sensorId as SpeedSensorId,
    lastReportedRpm: data.lastReportedRpm,
    sensorValid: data.sensorValid,
    faultDetected: data.faultDetected,
  };
}

export function makeOverspeedProtector(data: {
  protectorId: string;
  safeMaxSpeedRpm: number;
  overspeedDetected: boolean;
  fuelLimitedEnabled: boolean;
  protectionFitted: boolean;
}): OverspeedProtector {
  return {
    protectorId: data.protectorId as OverspeedProtectorId,
    safeMaxSpeedRpm: data.safeMaxSpeedRpm,
    overspeedDetected: data.overspeedDetected,
    fuelLimitedEnabled: data.fuelLimitedEnabled,
    protectionFitted: data.protectionFitted,
  };
}

export function makeFuelMeteringUnit(data: {
  unitId: string;
  fuelFlowRate: number;
  fuelLimited: boolean;
  maxFuelFlowRate: number;
}): FuelMeteringUnit {
  return {
    unitId: data.unitId as FuelMeteringUnitId,
    fuelFlowRate: data.fuelFlowRate,
    fuelLimited: data.fuelLimited,
    maxFuelFlowRate: data.maxFuelFlowRate,
  };
}

export function makeIgnitionController(data: {
  controllerId: string;
  ignitionActive: boolean;
  holdingTimerSec: number;
  timerElapsed: boolean;
}): IgnitionController {
  return {
    controllerId: data.controllerId as IgnitionControllerId,
    ignitionActive: data.ignitionActive,
    holdingTimerSec: data.holdingTimerSec,
    timerElapsed: data.timerElapsed,
  };
}

export function makeThrustController(data: {
  controllerId: string;
  thrustCommanded: number;
  reverserDeploymentAllowed: boolean;
  reverserDeployed: boolean;
  inFlight: boolean;
}): ThrustController {
  return {
    controllerId: data.controllerId as ThrustControllerId,
    thrustCommanded: data.thrustCommanded,
    reverserDeploymentAllowed: data.reverserDeploymentAllowed,
    reverserDeployed: data.reverserDeployed,
    inFlight: data.inFlight,
  };
}

export function makeSensorFaultManager(data: {
  managerId: string;
  sensorFaultDetected: boolean;
  consecutiveFaults: number;
  maxConsecutiveFaults: number;
  modelledValueActive: boolean;
}): SensorFaultManager {
  return {
    managerId: data.managerId as SensorFaultManagerId,
    sensorFaultDetected: data.sensorFaultDetected,
    consecutiveFaults: data.consecutiveFaults,
    maxConsecutiveFaults: data.maxConsecutiveFaults,
    modelledValueActive: data.modelledValueActive,
  };
}

export function makeModelledValueCalculator(data: {
  calculatorId: string;
  lastValidReading: number;
  currentModelledValue: number;
  decayRatePercentPerSec: number;
}): ModelledValueCalculator {
  return {
    calculatorId: data.calculatorId as ModelledValueCalculatorId,
    lastValidReading: data.lastValidReading,
    currentModelledValue: data.currentModelledValue,
    decayRatePercentPerSec: data.decayRatePercentPerSec,
  };
}

export function makeAircraftStateManager(data: {
  stateManagerId: string;
  inFlight: boolean;
  isOnGround: boolean;
}): AircraftStateManager {
  return {
    stateManagerId: data.stateManagerId as AircraftStateManagerId,
    inFlight: data.inFlight,
    isOnGround: data.isOnGround,
  };
}

export function makeSpeedSensorInterface(data: {
  interfaceId: string;
  latestReportedRpm: number;
  isFaulty: boolean;
  lastReportTimeMs: number;
}): SpeedSensorInterface {
  return {
    interfaceId: data.interfaceId as SpeedSensorInterfaceId,
    latestReportedRpm: data.latestReportedRpm,
    isFaulty: data.isFaulty,
    lastReportTimeMs: data.lastReportTimeMs,
  };
}

export function makeOverspeedFuelInterface(data: {
  interfaceId: string;
  fuelLimitCommanded: boolean;
  limitActive: boolean;
}): OverspeedFuelInterface {
  return {
    interfaceId: data.interfaceId as OverspeedFuelInterfaceId,
    fuelLimitCommanded: data.fuelLimitCommanded,
    limitActive: data.limitActive,
  };
}

export function makeFaultModelledValueInterface(data: {
  interfaceId: string;
  faultActive: boolean;
  latestModelledValue: number;
}): FaultModelledValueInterface {
  return {
    interfaceId: data.interfaceId as FaultModelledValueInterfaceId,
    faultActive: data.faultActive,
    latestModelledValue: data.latestModelledValue,
  };
}

export function makeThrustStateInterface(data: {
  interfaceId: string;
  aircraftInFlight: boolean;
}): ThrustStateInterface {
  return {
    interfaceId: data.interfaceId as ThrustStateInterfaceId,
    aircraftInFlight: data.aircraftInFlight,
  };
}

export function makeIgnitionThrustInterface(data: {
  interfaceId: string;
  ignitionAndThrustActive: boolean;
}): IgnitionThrustInterface {
  return {
    interfaceId: data.interfaceId as IgnitionThrustInterfaceId,
    ignitionAndThrustActive: data.ignitionAndThrustActive,
  };
}

export function makeAirlineOperator(data: {
  operatorId: string;
  name: string;
  fleetSize: number;
}): AirlineOperator {
  return {
    operatorId: data.operatorId as AirlineOperatorId,
    name: data.name,
    fleetSize: data.fleetSize,
  };
}

export function makePilot(data: {
  pilotId: string;
  name: string;
  licenseNumber: string;
  isTrainedOnEngine: boolean;
}): Pilot {
  return {
    pilotId: data.pilotId as PilotId,
    name: data.name,
    licenseNumber: data.licenseNumber,
    isTrainedOnEngine: data.isTrainedOnEngine,
  };
}

export function makeMaintenanceCrew(data: {
  crewId: string;
  teamName: string;
}): MaintenanceCrew {
  return {
    crewId: data.crewId as MaintenanceCrewId,
    teamName: data.teamName,
  };
}

export function makeAirworthinessAuthority(data: {
  authorityId: string;
  name: string;
  jurisdiction: string;
}): AirworthinessAuthority {
  return {
    authorityId: data.authorityId as AirworthinessAuthorityId,
    name: data.name,
    jurisdiction: data.jurisdiction,
  };
}

export function makeEngineControlVendor(data: {
  vendorId: string;
  name: string;
  certificationLevel: string;
}): EngineControlVendor {
  return {
    vendorId: data.vendorId as EngineControlVendorId,
    name: data.name,
    certificationLevel: data.certificationLevel,
  };
}

export function makeOverspeedProtectionCommitment(data: {
  commitmentId: string;
  safeMaxSpeed: number;
}): OverspeedProtectionCommitment {
  return {
    commitmentId: data.commitmentId as OverspeedProtectionCommitmentId,
    safeMaxSpeed: data.safeMaxSpeed,
  };
}

export function makeSensorFaultToleranceCommitment(data: {
  commitmentId: string;
  maxConsecutiveFaults: number;
}): SensorFaultToleranceCommitment {
  return {
    commitmentId: data.commitmentId as SensorFaultToleranceCommitmentId,
    maxConsecutiveFaults: data.maxConsecutiveFaults,
  };
}

export function makeIgnitionThrustControlCommitment(data: {
  commitmentId: string;
  minIgnitionHoldingTimeSec: number;
}): IgnitionThrustControlCommitment {
  return {
    commitmentId: data.commitmentId as IgnitionThrustControlCommitmentId,
    minIgnitionHoldingTimeSec: data.minIgnitionHoldingTimeSec,
  };
}

export function makeThrustReverserGroundOnlyCommitment(data: {
  commitmentId: string;
  groundOnlyDeployment: boolean;
}): ThrustReverserGroundOnlyCommitment {
  return {
    commitmentId: data.commitmentId as ThrustReverserGroundOnlyCommitmentId,
    groundOnlyDeployment: data.groundOnlyDeployment,
  };
}

export function makeOverspeed(data: {
  overspeedId: string;
  description: string;
  certifiedMaxSpeedRpm: number;
}): Overspeed {
  return {
    overspeedId: data.overspeedId as OverspeedId,
    description: data.description,
    certifiedMaxSpeedRpm: data.certifiedMaxSpeedRpm,
  };
}

export function makeContinuousIgnition(data: {
  ignitionId: string;
  description: string;
  isActive: boolean;
}): ContinuousIgnition {
  return {
    ignitionId: data.ignitionId as ContinuousIgnitionId,
    description: data.description,
    isActive: data.isActive,
  };
}

export function makeThrustReverser(data: {
  reverserId: string;
  description: string;
  isDeployed: boolean;
  deploymentAllowed: boolean;
}): ThrustReverser {
  return {
    reverserId: data.reverserId as ThrustReverserId,
    description: data.description,
    isDeployed: data.isDeployed,
    deploymentAllowed: data.deploymentAllowed,
  };
}

export function makeModelledValue(data: {
  modelledValueId: string;
  parameterName: string;
  estimatedValue: number;
  source: string;
}): ModelledValue {
  return {
    modelledValueId: data.modelledValueId as ModelledValueId,
    parameterName: data.parameterName,
    estimatedValue: data.estimatedValue,
    source: data.source,
  };
}

export function makeOverspeedProtectionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): OverspeedProtectionFlow {
  return {
    flowId: data.flowId as OverspeedProtectionFlowId,
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

export function makeIgnitionControlFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): IgnitionControlFlow {
  return {
    flowId: data.flowId as IgnitionControlFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeThrustReverserDeploymentFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ThrustReverserDeploymentFlow {
  return {
    flowId: data.flowId as ThrustReverserDeploymentFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeEngineControlSystem(data: {
  systemId: string;
  safeMaxSpeedRpm: number;
  currentSpeedRpm: number;
  fuelFlowRate: number;
  overspeedProtectionFitted: boolean;
  overspeedDetected: boolean;
  fuelLimited: boolean;
  continuousIgnitionActive: boolean;
  thrustCommanded: number;
  inFlight: boolean;
  reverseThrustCommanded: boolean;
  reverserDeploymentAllowed: boolean;
  reverserDeployed: boolean;
  sensorFaultDetected: boolean;
  consecutiveSensorFaults: number;
  maxConsecutiveFaults: number;
  modelledValueActive: boolean;
  modelledValue: number;
  ignitionHoldingTimeSec: number;
  groundOnlyDeployment: boolean;
  minIgnitionHoldingTimeSec: number;
}): EngineControlSystem {
  return {
    systemId: data.systemId as EngineControlSystemId,
    safeMaxSpeedRpm: data.safeMaxSpeedRpm,
    currentSpeedRpm: data.currentSpeedRpm,
    fuelFlowRate: data.fuelFlowRate,
    overspeedProtectionFitted: data.overspeedProtectionFitted,
    overspeedDetected: data.overspeedDetected,
    fuelLimited: data.fuelLimited,
    continuousIgnitionActive: data.continuousIgnitionActive,
    thrustCommanded: data.thrustCommanded,
    inFlight: data.inFlight,
    reverseThrustCommanded: data.reverseThrustCommanded,
    reverserDeploymentAllowed: data.reverserDeploymentAllowed,
    reverserDeployed: data.reverserDeployed,
    sensorFaultDetected: data.sensorFaultDetected,
    consecutiveSensorFaults: data.consecutiveSensorFaults,
    maxConsecutiveFaults: data.maxConsecutiveFaults,
    modelledValueActive: data.modelledValueActive,
    modelledValue: data.modelledValue,
    ignitionHoldingTimeSec: data.ignitionHoldingTimeSec,
    groundOnlyDeployment: data.groundOnlyDeployment,
    minIgnitionHoldingTimeSec: data.minIgnitionHoldingTimeSec,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionLabel: string;
  statement: string;
  rationale: string;
  owner: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionLabel: data.assumptionLabel,
    statement: data.statement,
    rationale: data.rationale,
    owner: data.owner,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for SpeedSensor. Returns empty array when valid. */
export function validateSpeedSensor(instance: SpeedSensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[SpeedSensor] invariant violated: self.sensorId <> null");
  }
  if (!((instance.lastReportedRpm >= 0))) {
    violations.push("[SpeedSensor] invariant violated: self.lastReportedRpm >= 0.0");
  }
  if (!((!(instance.sensorValid) || !(instance.faultDetected)))) {
    violations.push("[SpeedSensor] invariant violated: self.sensorValid implies not self.faultDetected");
  }
  return violations;
}

/** Runtime invariant check for OverspeedProtector. Returns empty array when valid. */
export function validateOverspeedProtector(instance: OverspeedProtector): readonly string[] {
  const violations: string[] = [];
  if (!((instance.protectorId !== null))) {
    violations.push("[OverspeedProtector] invariant violated: self.protectorId <> null");
  }
  if (!((instance.safeMaxSpeedRpm > 0))) {
    violations.push("[OverspeedProtector] invariant violated: self.safeMaxSpeedRpm > 0.0");
  }
  if (!((instance.safeMaxSpeedRpm === 15000))) {
    violations.push("[OverspeedProtector] invariant violated: self.safeMaxSpeedRpm = 15000.0");
  }
  if (!((!((instance.protectionFitted && instance.overspeedDetected)) || instance.fuelLimitedEnabled))) {
    violations.push("[OverspeedProtector] invariant violated: (self.protectionFitted and self.overspeedDetected)\n        implies self.fuelLimitedEnabled");
  }
  return violations;
}

/** Runtime invariant check for FuelMeteringUnit. Returns empty array when valid. */
export function validateFuelMeteringUnit(instance: FuelMeteringUnit): readonly string[] {
  const violations: string[] = [];
  if (!((instance.unitId !== null))) {
    violations.push("[FuelMeteringUnit] invariant violated: self.unitId <> null");
  }
  if (!((instance.fuelFlowRate >= 0))) {
    violations.push("[FuelMeteringUnit] invariant violated: self.fuelFlowRate >= 0.0");
  }
  if (!((instance.fuelFlowRate <= instance.maxFuelFlowRate))) {
    violations.push("[FuelMeteringUnit] invariant violated: self.fuelFlowRate <= self.maxFuelFlowRate");
  }
  if (!((instance.maxFuelFlowRate > 0))) {
    violations.push("[FuelMeteringUnit] invariant violated: self.maxFuelFlowRate > 0.0");
  }
  if (!((instance.maxFuelFlowRate === 5000))) {
    violations.push("[FuelMeteringUnit] invariant violated: self.maxFuelFlowRate = 5000.0");
  }
  if (!((!(instance.fuelLimited) || (instance.fuelFlowRate <= 500)))) {
    violations.push("[FuelMeteringUnit] invariant violated: self.fuelLimited implies self.fuelFlowRate <= 500.0");
  }
  return violations;
}

/** Runtime invariant check for IgnitionController. Returns empty array when valid. */
export function validateIgnitionController(instance: IgnitionController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.controllerId !== null))) {
    violations.push("[IgnitionController] invariant violated: self.controllerId <> null");
  }
  if (!((instance.holdingTimerSec >= 0))) {
    violations.push("[IgnitionController] invariant violated: self.holdingTimerSec >= 0.0");
  }
  if (!((!(instance.ignitionActive) || (instance.holdingTimerSec > 0)))) {
    violations.push("[IgnitionController] invariant violated: self.ignitionActive implies self.holdingTimerSec > 0.0");
  }
  if (!((!(instance.timerElapsed) || (instance.holdingTimerSec === 0)))) {
    violations.push("[IgnitionController] invariant violated: self.timerElapsed implies (self.holdingTimerSec = 0.0)");
  }
  return violations;
}

/** Runtime invariant check for ThrustController. Returns empty array when valid. */
export function validateThrustController(instance: ThrustController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.controllerId !== null))) {
    violations.push("[ThrustController] invariant violated: self.controllerId <> null");
  }
  if (!((instance.thrustCommanded >= 0))) {
    violations.push("[ThrustController] invariant violated: self.thrustCommanded >= 0.0");
  }
  if (!((!(instance.inFlight) || !(instance.reverserDeployed)))) {
    violations.push("[ThrustController] invariant violated: self.inFlight implies not self.reverserDeployed");
  }
  if (!((!(instance.reverserDeploymentAllowed) || !(instance.inFlight)))) {
    violations.push("[ThrustController] invariant violated: self.reverserDeploymentAllowed implies not self.inFlight");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultManager. Returns empty array when valid. */
export function validateSensorFaultManager(instance: SensorFaultManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[SensorFaultManager] invariant violated: self.managerId <> null");
  }
  if (!((instance.consecutiveFaults >= 0))) {
    violations.push("[SensorFaultManager] invariant violated: self.consecutiveFaults >= 0");
  }
  if (!((instance.maxConsecutiveFaults >= 0))) {
    violations.push("[SensorFaultManager] invariant violated: self.maxConsecutiveFaults >= 0");
  }
  if (!((instance.maxConsecutiveFaults === 2))) {
    violations.push("[SensorFaultManager] invariant violated: self.maxConsecutiveFaults = 2");
  }
  if (!((instance.consecutiveFaults <= instance.maxConsecutiveFaults))) {
    violations.push("[SensorFaultManager] invariant violated: self.consecutiveFaults <= self.maxConsecutiveFaults");
  }
  if (!((!((instance.consecutiveFaults >= instance.maxConsecutiveFaults)) || instance.modelledValueActive))) {
    violations.push("[SensorFaultManager] invariant violated: (self.consecutiveFaults >= self.maxConsecutiveFaults)\n        implies self.modelledValueActive");
  }
  return violations;
}

/** Runtime invariant check for ModelledValueCalculator. Returns empty array when valid. */
export function validateModelledValueCalculator(instance: ModelledValueCalculator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.calculatorId !== null))) {
    violations.push("[ModelledValueCalculator] invariant violated: self.calculatorId <> null");
  }
  if (!((instance.lastValidReading >= 0))) {
    violations.push("[ModelledValueCalculator] invariant violated: self.lastValidReading >= 0.0");
  }
  if (!((instance.currentModelledValue >= 0))) {
    violations.push("[ModelledValueCalculator] invariant violated: self.currentModelledValue >= 0.0");
  }
  if (!((instance.decayRatePercentPerSec === 0.05))) {
    violations.push("[ModelledValueCalculator] invariant violated: self.decayRatePercentPerSec = 0.05");
  }
  return violations;
}

/** Runtime invariant check for AircraftStateManager. Returns empty array when valid. */
export function validateAircraftStateManager(instance: AircraftStateManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.stateManagerId !== null))) {
    violations.push("[AircraftStateManager] invariant violated: self.stateManagerId <> null");
  }
  if (!((!(instance.inFlight) || !(instance.isOnGround)))) {
    violations.push("[AircraftStateManager] invariant violated: self.inFlight implies not self.isOnGround");
  }
  return violations;
}

/** Runtime invariant check for SpeedSensorInterface. Returns empty array when valid. */
export function validateSpeedSensorInterface(instance: SpeedSensorInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[SpeedSensorInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.latestReportedRpm >= 0))) {
    violations.push("[SpeedSensorInterface] invariant violated: self.latestReportedRpm >= 0.0");
  }
  if (!((instance.lastReportTimeMs >= 0))) {
    violations.push("[SpeedSensorInterface] invariant violated: self.lastReportTimeMs >= 0");
  }
  return violations;
}

/** Runtime invariant check for OverspeedFuelInterface. Returns empty array when valid. */
export function validateOverspeedFuelInterface(instance: OverspeedFuelInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[OverspeedFuelInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((!(instance.fuelLimitCommanded) || instance.limitActive))) {
    violations.push("[OverspeedFuelInterface] invariant violated: self.fuelLimitCommanded implies self.limitActive");
  }
  return violations;
}

/** Runtime invariant check for FaultModelledValueInterface. Returns empty array when valid. */
export function validateFaultModelledValueInterface(instance: FaultModelledValueInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[FaultModelledValueInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.latestModelledValue >= 0))) {
    violations.push("[FaultModelledValueInterface] invariant violated: self.latestModelledValue >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ThrustStateInterface. Returns empty array when valid. */
export function validateThrustStateInterface(instance: ThrustStateInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[ThrustStateInterface] invariant violated: self.interfaceId <> null");
  }
  return violations;
}

/** Runtime invariant check for IgnitionThrustInterface. Returns empty array when valid. */
export function validateIgnitionThrustInterface(instance: IgnitionThrustInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[IgnitionThrustInterface] invariant violated: self.interfaceId <> null");
  }
  return violations;
}

/** Runtime invariant check for AirlineOperator. Returns empty array when valid. */
export function validateAirlineOperator(instance: AirlineOperator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.operatorId !== null))) {
    violations.push("[AirlineOperator] invariant violated: self.operatorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[AirlineOperator] invariant violated: self.name <> null");
  }
  if (!((instance.fleetSize > 0))) {
    violations.push("[AirlineOperator] invariant violated: self.fleetSize > 0");
  }
  return violations;
}

/** Runtime invariant check for Pilot. Returns empty array when valid. */
export function validatePilot(instance: Pilot): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pilotId !== null))) {
    violations.push("[Pilot] invariant violated: self.pilotId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Pilot] invariant violated: self.name <> null");
  }
  if (!((instance.licenseNumber !== null))) {
    violations.push("[Pilot] invariant violated: self.licenseNumber <> null");
  }
  return violations;
}

/** Runtime invariant check for MaintenanceCrew. Returns empty array when valid. */
export function validateMaintenanceCrew(instance: MaintenanceCrew): readonly string[] {
  const violations: string[] = [];
  if (!((instance.crewId !== null))) {
    violations.push("[MaintenanceCrew] invariant violated: self.crewId <> null");
  }
  if (!((instance.teamName !== null))) {
    violations.push("[MaintenanceCrew] invariant violated: self.teamName <> null");
  }
  return violations;
}

/** Runtime invariant check for AirworthinessAuthority. Returns empty array when valid. */
export function validateAirworthinessAuthority(instance: AirworthinessAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[AirworthinessAuthority] invariant violated: self.authorityId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[AirworthinessAuthority] invariant violated: self.name <> null");
  }
  if (!((instance.jurisdiction !== null))) {
    violations.push("[AirworthinessAuthority] invariant violated: self.jurisdiction <> null");
  }
  return violations;
}

/** Runtime invariant check for EngineControlVendor. Returns empty array when valid. */
export function validateEngineControlVendor(instance: EngineControlVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[EngineControlVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[EngineControlVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for SafetyConstraints. Returns empty array when valid. */
export function validateSafetyConstraints(instance: SafetyConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[SafetyConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FaultToleranceConstraints. Returns empty array when valid. */
export function validateFaultToleranceConstraints(instance: FaultToleranceConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[FaultToleranceConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for Overspeed. Returns empty array when valid. */
export function validateOverspeed(instance: Overspeed): readonly string[] {
  const violations: string[] = [];
  if (!((instance.overspeedId !== null))) {
    violations.push("[Overspeed] invariant violated: self.overspeedId <> null");
  }
  if (!((instance.certifiedMaxSpeedRpm > 0))) {
    violations.push("[Overspeed] invariant violated: self.certifiedMaxSpeedRpm > 0.0");
  }
  return violations;
}

/** Runtime invariant check for ContinuousIgnition. Returns empty array when valid. */
export function validateContinuousIgnition(instance: ContinuousIgnition): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ignitionId !== null))) {
    violations.push("[ContinuousIgnition] invariant violated: self.ignitionId <> null");
  }
  return violations;
}

/** Runtime invariant check for ThrustReverser. Returns empty array when valid. */
export function validateThrustReverser(instance: ThrustReverser): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reverserId !== null))) {
    violations.push("[ThrustReverser] invariant violated: self.reverserId <> null");
  }
  if (!((!(instance.deploymentAllowed) || (instance.description === "Deployable only on ground")))) {
    violations.push("[ThrustReverser] invariant violated: self.deploymentAllowed implies (self.description = 'Deployable only on ground')");
  }
  return violations;
}

/** Runtime invariant check for ModelledValue. Returns empty array when valid. */
export function validateModelledValue(instance: ModelledValue): readonly string[] {
  const violations: string[] = [];
  if (!((instance.modelledValueId !== null))) {
    violations.push("[ModelledValue] invariant violated: self.modelledValueId <> null");
  }
  if (!((instance.parameterName !== null))) {
    violations.push("[ModelledValue] invariant violated: self.parameterName <> null");
  }
  return violations;
}

/** Runtime invariant check for OverspeedProtectionFlow. Returns empty array when valid. */
export function validateOverspeedProtectionFlow(instance: OverspeedProtectionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[OverspeedProtectionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "Engine rotational speed exceeds safe limit"))) {
    violations.push("[OverspeedProtectionFlow] invariant violated: self.triggeredBy = 'Engine rotational speed exceeds safe limit'");
  }
  if (!((instance.outcome === "Fuel flow is limited to prevent overspeed"))) {
    violations.push("[OverspeedProtectionFlow] invariant violated: self.outcome = 'Fuel flow is limited to prevent overspeed'");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultHandlingFlow. Returns empty array when valid. */
export function validateSensorFaultHandlingFlow(instance: SensorFaultHandlingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultHandlingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "Single sensor fault detected"))) {
    violations.push("[SensorFaultHandlingFlow] invariant violated: self.triggeredBy = 'Single sensor fault detected'");
  }
  if (!((instance.outcome === "Control law substitutes modelled value for faulty sensor"))) {
    violations.push("[SensorFaultHandlingFlow] invariant violated: self.outcome = 'Control law substitutes modelled value for faulty sensor'");
  }
  return violations;
}

/** Runtime invariant check for IgnitionControlFlow. Returns empty array when valid. */
export function validateIgnitionControlFlow(instance: IgnitionControlFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[IgnitionControlFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "Continuous ignition commanded"))) {
    violations.push("[IgnitionControlFlow] invariant violated: self.triggeredBy = 'Continuous ignition commanded'");
  }
  if (!((instance.outcome === "Ignition held on for specified flight phase"))) {
    violations.push("[IgnitionControlFlow] invariant violated: self.outcome = 'Ignition held on for specified flight phase'");
  }
  return violations;
}

/** Runtime invariant check for ThrustReverserDeploymentFlow. Returns empty array when valid. */
export function validateThrustReverserDeploymentFlow(instance: ThrustReverserDeploymentFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ThrustReverserDeploymentFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "Aircraft on ground and reverse thrust commanded"))) {
    violations.push("[ThrustReverserDeploymentFlow] invariant violated: self.triggeredBy = 'Aircraft on ground and reverse thrust commanded'");
  }
  if (!((instance.outcome === "Thrust reverser deployed but never in flight"))) {
    violations.push("[ThrustReverserDeploymentFlow] invariant violated: self.outcome = 'Thrust reverser deployed but never in flight'");
  }
  return violations;
}

/** Runtime invariant check for EngineControlSystem. Returns empty array when valid. */
export function validateEngineControlSystem(instance: EngineControlSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[EngineControlSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.safeMaxSpeedRpm > 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.safeMaxSpeedRpm > 0.0");
  }
  if (!((instance.safeMaxSpeedRpm === 15000))) {
    violations.push("[EngineControlSystem] invariant violated: self.safeMaxSpeedRpm = 15000.0");
  }
  if (!((instance.currentSpeedRpm >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.currentSpeedRpm >= 0.0");
  }
  if (!((instance.fuelFlowRate >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.fuelFlowRate >= 0.0");
  }
  if (!((instance.maxConsecutiveFaults >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.maxConsecutiveFaults >= 0");
  }
  if (!((instance.maxConsecutiveFaults === 2))) {
    violations.push("[EngineControlSystem] invariant violated: self.maxConsecutiveFaults = 2");
  }
  if (!((instance.consecutiveSensorFaults >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.consecutiveSensorFaults >= 0");
  }
  if (!((instance.consecutiveSensorFaults <= instance.maxConsecutiveFaults))) {
    violations.push("[EngineControlSystem] invariant violated: self.consecutiveSensorFaults <= self.maxConsecutiveFaults");
  }
  if (!((instance.thrustCommanded >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.thrustCommanded >= 0.0");
  }
  if (!((instance.ignitionHoldingTimeSec >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.ignitionHoldingTimeSec >= 0.0");
  }
  if (!((instance.ignitionHoldingTimeSec === 30))) {
    violations.push("[EngineControlSystem] invariant violated: self.ignitionHoldingTimeSec = 30.0");
  }
  if (!((!((instance.overspeedProtectionFitted && instance.overspeedDetected)) || instance.fuelLimited))) {
    violations.push("[EngineControlSystem] invariant violated: (self.overspeedProtectionFitted and self.overspeedDetected)\n        implies self.fuelLimited");
  }
  if (!((!(instance.inFlight) || !(instance.reverserDeployed)))) {
    violations.push("[EngineControlSystem] invariant violated: self.inFlight implies not self.reverserDeployed");
  }
  if (!((!((instance.consecutiveSensorFaults >= instance.maxConsecutiveFaults)) || instance.modelledValueActive))) {
    violations.push("[EngineControlSystem] invariant violated: (self.consecutiveSensorFaults >= self.maxConsecutiveFaults)\n        implies self.modelledValueActive");
  }
  if (!((instance.groundOnlyDeployment === true))) {
    violations.push("[EngineControlSystem] invariant violated: self.groundOnlyDeployment = true");
  }
  return violations;
}

/** Runtime invariant check for EasaCsE510OverSpeedLimitation. Returns empty array when valid. */
export function validateEasaCsE510OverSpeedLimitation(instance: EasaCsE510OverSpeedLimitation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.certificationBasis !== null))) {
    violations.push("[EasaCsE510OverSpeedLimitation] invariant violated: self.certificationBasis <> null");
  }
  if (!((instance.limitingOverSpeedRpm > 0))) {
    violations.push("[EasaCsE510OverSpeedLimitation] invariant violated: self.limitingOverSpeedRpm > 0.0");
  }
  if (!((instance.overspeedDurationLimitSec > 0))) {
    violations.push("[EasaCsE510OverSpeedLimitation] invariant violated: self.overspeedDurationLimitSec > 0.0");
  }
  if (!((instance.overspeedDurationLimitSec === 20))) {
    violations.push("[EasaCsE510OverSpeedLimitation] invariant violated: self.overspeedDurationLimitSec = 20.0");
  }
  return violations;
}

/** Runtime invariant check for FaaPart33_75SafetyAnalysis. Returns empty array when valid. */
export function validateFaaPart33_75SafetyAnalysis(instance: FaaPart33_75SafetyAnalysis): readonly string[] {
  const violations: string[] = [];
  if (!((instance.certificationBasis !== null))) {
    violations.push("[FaaPart33_75SafetyAnalysis] invariant violated: self.certificationBasis <> null");
  }
  if (!((instance.maxHazardousEffectsAllowed === 0))) {
    violations.push("[FaaPart33_75SafetyAnalysis] invariant violated: self.maxHazardousEffectsAllowed = 0");
  }
  return violations;
}

/** Runtime invariant check for EasaCsE60EngineControls. Returns empty array when valid. */
export function validateEasaCsE60EngineControls(instance: EasaCsE60EngineControls): readonly string[] {
  const violations: string[] = [];
  if (!((instance.certificationBasis !== null))) {
    violations.push("[EasaCsE60EngineControls] invariant violated: self.certificationBasis <> null");
  }
  if (!((instance.reversalLockRequired === true))) {
    violations.push("[EasaCsE60EngineControls] invariant violated: self.reversalLockRequired = true");
  }
  if (!((instance.preloadMechanismRequired === true))) {
    violations.push("[EasaCsE60EngineControls] invariant violated: self.preloadMechanismRequired = true");
  }
  return violations;
}

/** Runtime invariant check for RtcDo178cLevelA. Returns empty array when valid. */
export function validateRtcDo178cLevelA(instance: RtcDo178cLevelA): readonly string[] {
  const violations: string[] = [];
  if (!((instance.certificationBasis !== null))) {
    violations.push("[RtcDo178cLevelA] invariant violated: self.certificationBasis <> null");
  }
  if (!((instance.assuranceLevel === "A"))) {
    violations.push("[RtcDo178cLevelA] invariant violated: self.assuranceLevel = 'A'");
  }
  if (!((instance.maxAllowedFailureRate < 1e-9))) {
    violations.push("[RtcDo178cLevelA] invariant violated: self.maxAllowedFailureRate < 0.000000001");
  }
  return violations;
}

/** Runtime invariant check for SensorPlausibilityConstraints. Returns empty array when valid. */
export function validateSensorPlausibilityConstraints(instance: SensorPlausibilityConstraints): readonly string[] {
  const violations: string[] = [];
  if (!((instance.minPlausibleRpm >= 0))) {
    violations.push("[SensorPlausibilityConstraints] invariant violated: self.minPlausibleRpm >= 0.0");
  }
  if (!((instance.maxPlausibleRpm > instance.minPlausibleRpm))) {
    violations.push("[SensorPlausibilityConstraints] invariant violated: self.maxPlausibleRpm > self.minPlausibleRpm");
  }
  if (!((instance.maxPlausibleRpm === 18000))) {
    violations.push("[SensorPlausibilityConstraints] invariant violated: self.maxPlausibleRpm = 18000.0");
  }
  return violations;
}

/** Runtime invariant check for FuelMeteringPhysics. Returns empty array when valid. */
export function validateFuelMeteringPhysics(instance: FuelMeteringPhysics): readonly string[] {
  const violations: string[] = [];
  if (!((instance.maxFuelFlowRate > 0))) {
    violations.push("[FuelMeteringPhysics] invariant violated: self.maxFuelFlowRate > 0.0");
  }
  if (!((instance.maxFuelFlowRate === 5000))) {
    violations.push("[FuelMeteringPhysics] invariant violated: self.maxFuelFlowRate = 5000.0");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionLabel !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionLabel <> null");
  }
  if (!((instance.statement !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.statement <> null");
  }
  return violations;
}

/** Runtime invariant check for EngineControlSystemFormalized. Returns empty array when valid. */
export function validateEngineControlSystemFormalized(instance: EngineControlSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[EngineControlSystemFormalized] invariant violated: true");
  }
  if (!(true)) {
    violations.push("[EngineControlSystemFormalized] invariant violated: true");
  }
  if (!(true)) {
    violations.push("[EngineControlSystemFormalized] invariant violated: true");
  }
  if (!(true)) {
    violations.push("[EngineControlSystemFormalized] invariant violated: true");
  }
  if (!(true)) {
    violations.push("[EngineControlSystemFormalized] invariant violated: true");
  }
  if (!(true)) {
    violations.push("[EngineControlSystemFormalized] invariant violated: true");
  }
  if (!(true)) {
    violations.push("[EngineControlSystemFormalized] invariant violated: true");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for SpeedSensor.takeReading. User supplies this. */
export type SpeedSensorTakeReadingImpl = (self: SpeedSensor, value: number) => { self: SpeedSensor; modified: { lastReportedRpm: unknown; sensorValid: unknown; faultDetected: unknown } };

/** Contract-checking wrapper for SpeedSensor.takeReading. */
export function wrapSpeedSensorTakeReading(impl: SpeedSensorTakeReadingImpl): (self: SpeedSensor, value: number) => SpeedSensor {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[SpeedSensor.takeReading] pre violated: value >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastReportedRpm === value))) {
        postViolations.push("[SpeedSensor.takeReading] post violated: self.lastReportedRpm = value");
      }
      if (!((__result.self.sensorValid === true))) {
        postViolations.push("[SpeedSensor.takeReading] post violated: self.sensorValid = true");
      }
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[SpeedSensor.takeReading] post violated: self.faultDetected = false");
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

/** Impl signature for SpeedSensor.takeReading (async). User supplies this. */
export type SpeedSensorTakeReadingAsyncImpl = (self: SpeedSensor, value: number) => Promise<{ self: SpeedSensor; modified: { lastReportedRpm: unknown; sensorValid: unknown; faultDetected: unknown } }>;

/** Contract-checking wrapper for SpeedSensor.takeReading (async). */
export function wrapSpeedSensorTakeReadingAsync(impl: SpeedSensorTakeReadingAsyncImpl): (self: SpeedSensor, value: number) => Promise<SpeedSensor> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[SpeedSensor.takeReading] pre violated: value >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastReportedRpm === value))) {
        postViolations.push("[SpeedSensor.takeReading] post violated: self.lastReportedRpm = value");
      }
      if (!((__result.self.sensorValid === true))) {
        postViolations.push("[SpeedSensor.takeReading] post violated: self.sensorValid = true");
      }
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[SpeedSensor.takeReading] post violated: self.faultDetected = false");
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

/** Impl signature for SpeedSensor.markFaulty. User supplies this. */
export type SpeedSensorMarkFaultyImpl = (self: SpeedSensor) => { self: SpeedSensor; modified: { sensorValid: unknown; faultDetected: unknown } };

/** Contract-checking wrapper for SpeedSensor.markFaulty. */
export function wrapSpeedSensorMarkFaulty(impl: SpeedSensorMarkFaultyImpl): (self: SpeedSensor) => SpeedSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.sensorValid)) {
      preViolations.push("[SpeedSensor.markFaulty] pre violated: self.sensorValid");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorValid === false))) {
        postViolations.push("[SpeedSensor.markFaulty] post violated: self.sensorValid = false");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[SpeedSensor.markFaulty] post violated: self.faultDetected = true");
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

/** Impl signature for SpeedSensor.markFaulty (async). User supplies this. */
export type SpeedSensorMarkFaultyAsyncImpl = (self: SpeedSensor) => Promise<{ self: SpeedSensor; modified: { sensorValid: unknown; faultDetected: unknown } }>;

/** Contract-checking wrapper for SpeedSensor.markFaulty (async). */
export function wrapSpeedSensorMarkFaultyAsync(impl: SpeedSensorMarkFaultyAsyncImpl): (self: SpeedSensor) => Promise<SpeedSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.sensorValid)) {
      preViolations.push("[SpeedSensor.markFaulty] pre violated: self.sensorValid");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorValid === false))) {
        postViolations.push("[SpeedSensor.markFaulty] post violated: self.sensorValid = false");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[SpeedSensor.markFaulty] post violated: self.faultDetected = true");
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

/** Impl signature for SpeedSensor.clearFault. User supplies this. */
export type SpeedSensorClearFaultImpl = (self: SpeedSensor) => { self: SpeedSensor; modified: { sensorValid: unknown; faultDetected: unknown } };

/** Contract-checking wrapper for SpeedSensor.clearFault. */
export function wrapSpeedSensorClearFault(impl: SpeedSensorClearFaultImpl): (self: SpeedSensor) => SpeedSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.faultDetected)) {
      preViolations.push("[SpeedSensor.clearFault] pre violated: self.faultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorValid === true))) {
        postViolations.push("[SpeedSensor.clearFault] post violated: self.sensorValid = true");
      }
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[SpeedSensor.clearFault] post violated: self.faultDetected = false");
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

/** Impl signature for SpeedSensor.clearFault (async). User supplies this. */
export type SpeedSensorClearFaultAsyncImpl = (self: SpeedSensor) => Promise<{ self: SpeedSensor; modified: { sensorValid: unknown; faultDetected: unknown } }>;

/** Contract-checking wrapper for SpeedSensor.clearFault (async). */
export function wrapSpeedSensorClearFaultAsync(impl: SpeedSensorClearFaultAsyncImpl): (self: SpeedSensor) => Promise<SpeedSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.faultDetected)) {
      preViolations.push("[SpeedSensor.clearFault] pre violated: self.faultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorValid === true))) {
        postViolations.push("[SpeedSensor.clearFault] post violated: self.sensorValid = true");
      }
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[SpeedSensor.clearFault] post violated: self.faultDetected = false");
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

/** Impl signature for OverspeedProtector.evaluateSpeed. User supplies this. */
export type OverspeedProtectorEvaluateSpeedImpl = (self: OverspeedProtector, rpm: number) => { self: OverspeedProtector; modified: { overspeedDetected: unknown; fuelLimitedEnabled: unknown } };

/** Contract-checking wrapper for OverspeedProtector.evaluateSpeed. */
export function wrapOverspeedProtectorEvaluateSpeed(impl: OverspeedProtectorEvaluateSpeedImpl): (self: OverspeedProtector, rpm: number) => OverspeedProtector {
  return (self, rpm) => {
    const preViolations: string[] = [];
    if (!((rpm >= 0))) {
      preViolations.push("[OverspeedProtector.evaluateSpeed] pre violated: rpm >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === (rpm > __result.self.safeMaxSpeedRpm)))) {
        postViolations.push("[OverspeedProtector.evaluateSpeed] post violated: self.overspeedDetected = (rpm > self.safeMaxSpeedRpm)");
      }
      if (!((((__result.self.protectionFitted && (rpm > __result.self.safeMaxSpeedRpm))) ? ((__result.self.fuelLimitedEnabled === true)) : ((__result.self.fuelLimitedEnabled === false))))) {
        postViolations.push("[OverspeedProtector.evaluateSpeed] post violated: if self.protectionFitted and (rpm > self.safeMaxSpeedRpm) then\n            self.fuelLimitedEnabled = true\n          else\n            self.fuelLimitedEnabled = false\n          endif");
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

/** Impl signature for OverspeedProtector.evaluateSpeed (async). User supplies this. */
export type OverspeedProtectorEvaluateSpeedAsyncImpl = (self: OverspeedProtector, rpm: number) => Promise<{ self: OverspeedProtector; modified: { overspeedDetected: unknown; fuelLimitedEnabled: unknown } }>;

/** Contract-checking wrapper for OverspeedProtector.evaluateSpeed (async). */
export function wrapOverspeedProtectorEvaluateSpeedAsync(impl: OverspeedProtectorEvaluateSpeedAsyncImpl): (self: OverspeedProtector, rpm: number) => Promise<OverspeedProtector> {
  return async (self, rpm) => {
    const preViolations: string[] = [];
    if (!((rpm >= 0))) {
      preViolations.push("[OverspeedProtector.evaluateSpeed] pre violated: rpm >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === (rpm > __result.self.safeMaxSpeedRpm)))) {
        postViolations.push("[OverspeedProtector.evaluateSpeed] post violated: self.overspeedDetected = (rpm > self.safeMaxSpeedRpm)");
      }
      if (!((((__result.self.protectionFitted && (rpm > __result.self.safeMaxSpeedRpm))) ? ((__result.self.fuelLimitedEnabled === true)) : ((__result.self.fuelLimitedEnabled === false))))) {
        postViolations.push("[OverspeedProtector.evaluateSpeed] post violated: if self.protectionFitted and (rpm > self.safeMaxSpeedRpm) then\n            self.fuelLimitedEnabled = true\n          else\n            self.fuelLimitedEnabled = false\n          endif");
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

/** Impl signature for OverspeedProtector.recordViolation. User supplies this. */
export type OverspeedProtectorRecordViolationImpl = (self: OverspeedProtector, rpm: number) => { self: OverspeedProtector; modified: { overspeedDetected: unknown } };

/** Contract-checking wrapper for OverspeedProtector.recordViolation. */
export function wrapOverspeedProtectorRecordViolation(impl: OverspeedProtectorRecordViolationImpl): (self: OverspeedProtector, rpm: number) => OverspeedProtector {
  return (self, rpm) => {
    const preViolations: string[] = [];
    if (!((rpm > self.safeMaxSpeedRpm))) {
      preViolations.push("[OverspeedProtector.recordViolation] pre violated: rpm > self.safeMaxSpeedRpm");
    }
    if (!(!(self.protectionFitted))) {
      preViolations.push("[OverspeedProtector.recordViolation] pre violated: not self.protectionFitted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[OverspeedProtector.recordViolation] post violated: self.overspeedDetected = true");
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

/** Impl signature for OverspeedProtector.recordViolation (async). User supplies this. */
export type OverspeedProtectorRecordViolationAsyncImpl = (self: OverspeedProtector, rpm: number) => Promise<{ self: OverspeedProtector; modified: { overspeedDetected: unknown } }>;

/** Contract-checking wrapper for OverspeedProtector.recordViolation (async). */
export function wrapOverspeedProtectorRecordViolationAsync(impl: OverspeedProtectorRecordViolationAsyncImpl): (self: OverspeedProtector, rpm: number) => Promise<OverspeedProtector> {
  return async (self, rpm) => {
    const preViolations: string[] = [];
    if (!((rpm > self.safeMaxSpeedRpm))) {
      preViolations.push("[OverspeedProtector.recordViolation] pre violated: rpm > self.safeMaxSpeedRpm");
    }
    if (!(!(self.protectionFitted))) {
      preViolations.push("[OverspeedProtector.recordViolation] pre violated: not self.protectionFitted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[OverspeedProtector.recordViolation] post violated: self.overspeedDetected = true");
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

/** Impl signature for OverspeedProtector.setProtectionFitted. User supplies this. */
export type OverspeedProtectorSetProtectionFittedImpl = (self: OverspeedProtector, fitted: boolean) => { self: OverspeedProtector; modified: { protectionFitted: unknown } };

/** Contract-checking wrapper for OverspeedProtector.setProtectionFitted. */
export function wrapOverspeedProtectorSetProtectionFitted(impl: OverspeedProtectorSetProtectionFittedImpl): (self: OverspeedProtector, fitted: boolean) => OverspeedProtector {
  return (self, fitted) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[OverspeedProtector.setProtectionFitted] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, fitted);
      const postViolations: string[] = [];
      if (!((__result.self.protectionFitted === fitted))) {
        postViolations.push("[OverspeedProtector.setProtectionFitted] post violated: self.protectionFitted = fitted");
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

/** Impl signature for OverspeedProtector.setProtectionFitted (async). User supplies this. */
export type OverspeedProtectorSetProtectionFittedAsyncImpl = (self: OverspeedProtector, fitted: boolean) => Promise<{ self: OverspeedProtector; modified: { protectionFitted: unknown } }>;

/** Contract-checking wrapper for OverspeedProtector.setProtectionFitted (async). */
export function wrapOverspeedProtectorSetProtectionFittedAsync(impl: OverspeedProtectorSetProtectionFittedAsyncImpl): (self: OverspeedProtector, fitted: boolean) => Promise<OverspeedProtector> {
  return async (self, fitted) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[OverspeedProtector.setProtectionFitted] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, fitted);
      const postViolations: string[] = [];
      if (!((__result.self.protectionFitted === fitted))) {
        postViolations.push("[OverspeedProtector.setProtectionFitted] post violated: self.protectionFitted = fitted");
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

/** Impl signature for FuelMeteringUnit.limitFuelFlow. User supplies this. */
export type FuelMeteringUnitLimitFuelFlowImpl = (self: FuelMeteringUnit) => { self: FuelMeteringUnit; modified: { fuelLimited: unknown; fuelFlowRate: unknown } };

/** Contract-checking wrapper for FuelMeteringUnit.limitFuelFlow. */
export function wrapFuelMeteringUnitLimitFuelFlow(impl: FuelMeteringUnitLimitFuelFlowImpl): (self: FuelMeteringUnit) => FuelMeteringUnit {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.fuelLimited))) {
      preViolations.push("[FuelMeteringUnit.limitFuelFlow] pre violated: not self.fuelLimited");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimited === true))) {
        postViolations.push("[FuelMeteringUnit.limitFuelFlow] post violated: self.fuelLimited = true");
      }
      if (!((__result.self.fuelFlowRate === 0))) {
        postViolations.push("[FuelMeteringUnit.limitFuelFlow] post violated: self.fuelFlowRate = 0.0");
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

/** Impl signature for FuelMeteringUnit.limitFuelFlow (async). User supplies this. */
export type FuelMeteringUnitLimitFuelFlowAsyncImpl = (self: FuelMeteringUnit) => Promise<{ self: FuelMeteringUnit; modified: { fuelLimited: unknown; fuelFlowRate: unknown } }>;

/** Contract-checking wrapper for FuelMeteringUnit.limitFuelFlow (async). */
export function wrapFuelMeteringUnitLimitFuelFlowAsync(impl: FuelMeteringUnitLimitFuelFlowAsyncImpl): (self: FuelMeteringUnit) => Promise<FuelMeteringUnit> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.fuelLimited))) {
      preViolations.push("[FuelMeteringUnit.limitFuelFlow] pre violated: not self.fuelLimited");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimited === true))) {
        postViolations.push("[FuelMeteringUnit.limitFuelFlow] post violated: self.fuelLimited = true");
      }
      if (!((__result.self.fuelFlowRate === 0))) {
        postViolations.push("[FuelMeteringUnit.limitFuelFlow] post violated: self.fuelFlowRate = 0.0");
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

/** Impl signature for FuelMeteringUnit.restoreFuelFlow. User supplies this. */
export type FuelMeteringUnitRestoreFuelFlowImpl = (self: FuelMeteringUnit, rate: number) => { self: FuelMeteringUnit; modified: { fuelLimited: unknown; fuelFlowRate: unknown } };

/** Contract-checking wrapper for FuelMeteringUnit.restoreFuelFlow. */
export function wrapFuelMeteringUnitRestoreFuelFlow(impl: FuelMeteringUnitRestoreFuelFlowImpl): (self: FuelMeteringUnit, rate: number) => FuelMeteringUnit {
  return (self, rate) => {
    const preViolations: string[] = [];
    if (!(self.fuelLimited)) {
      preViolations.push("[FuelMeteringUnit.restoreFuelFlow] pre violated: self.fuelLimited");
    }
    if (!((rate >= 0))) {
      preViolations.push("[FuelMeteringUnit.restoreFuelFlow] pre violated: rate >= 0.0");
    }
    if (!((rate <= self.maxFuelFlowRate))) {
      preViolations.push("[FuelMeteringUnit.restoreFuelFlow] pre violated: rate <= self.maxFuelFlowRate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rate);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimited === false))) {
        postViolations.push("[FuelMeteringUnit.restoreFuelFlow] post violated: self.fuelLimited = false");
      }
      if (!((__result.self.fuelFlowRate === rate))) {
        postViolations.push("[FuelMeteringUnit.restoreFuelFlow] post violated: self.fuelFlowRate = rate");
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

/** Impl signature for FuelMeteringUnit.restoreFuelFlow (async). User supplies this. */
export type FuelMeteringUnitRestoreFuelFlowAsyncImpl = (self: FuelMeteringUnit, rate: number) => Promise<{ self: FuelMeteringUnit; modified: { fuelLimited: unknown; fuelFlowRate: unknown } }>;

/** Contract-checking wrapper for FuelMeteringUnit.restoreFuelFlow (async). */
export function wrapFuelMeteringUnitRestoreFuelFlowAsync(impl: FuelMeteringUnitRestoreFuelFlowAsyncImpl): (self: FuelMeteringUnit, rate: number) => Promise<FuelMeteringUnit> {
  return async (self, rate) => {
    const preViolations: string[] = [];
    if (!(self.fuelLimited)) {
      preViolations.push("[FuelMeteringUnit.restoreFuelFlow] pre violated: self.fuelLimited");
    }
    if (!((rate >= 0))) {
      preViolations.push("[FuelMeteringUnit.restoreFuelFlow] pre violated: rate >= 0.0");
    }
    if (!((rate <= self.maxFuelFlowRate))) {
      preViolations.push("[FuelMeteringUnit.restoreFuelFlow] pre violated: rate <= self.maxFuelFlowRate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rate);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimited === false))) {
        postViolations.push("[FuelMeteringUnit.restoreFuelFlow] post violated: self.fuelLimited = false");
      }
      if (!((__result.self.fuelFlowRate === rate))) {
        postViolations.push("[FuelMeteringUnit.restoreFuelFlow] post violated: self.fuelFlowRate = rate");
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

/** Impl signature for FuelMeteringUnit.setFuelFlow. User supplies this. */
export type FuelMeteringUnitSetFuelFlowImpl = (self: FuelMeteringUnit, rate: number) => { self: FuelMeteringUnit; modified: { fuelFlowRate: unknown } };

/** Contract-checking wrapper for FuelMeteringUnit.setFuelFlow. */
export function wrapFuelMeteringUnitSetFuelFlow(impl: FuelMeteringUnitSetFuelFlowImpl): (self: FuelMeteringUnit, rate: number) => FuelMeteringUnit {
  return (self, rate) => {
    const preViolations: string[] = [];
    if (!((rate >= 0))) {
      preViolations.push("[FuelMeteringUnit.setFuelFlow] pre violated: rate >= 0.0");
    }
    if (!((rate <= self.maxFuelFlowRate))) {
      preViolations.push("[FuelMeteringUnit.setFuelFlow] pre violated: rate <= self.maxFuelFlowRate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rate);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlowRate === rate))) {
        postViolations.push("[FuelMeteringUnit.setFuelFlow] post violated: self.fuelFlowRate = rate");
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

/** Impl signature for FuelMeteringUnit.setFuelFlow (async). User supplies this. */
export type FuelMeteringUnitSetFuelFlowAsyncImpl = (self: FuelMeteringUnit, rate: number) => Promise<{ self: FuelMeteringUnit; modified: { fuelFlowRate: unknown } }>;

/** Contract-checking wrapper for FuelMeteringUnit.setFuelFlow (async). */
export function wrapFuelMeteringUnitSetFuelFlowAsync(impl: FuelMeteringUnitSetFuelFlowAsyncImpl): (self: FuelMeteringUnit, rate: number) => Promise<FuelMeteringUnit> {
  return async (self, rate) => {
    const preViolations: string[] = [];
    if (!((rate >= 0))) {
      preViolations.push("[FuelMeteringUnit.setFuelFlow] pre violated: rate >= 0.0");
    }
    if (!((rate <= self.maxFuelFlowRate))) {
      preViolations.push("[FuelMeteringUnit.setFuelFlow] pre violated: rate <= self.maxFuelFlowRate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rate);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlowRate === rate))) {
        postViolations.push("[FuelMeteringUnit.setFuelFlow] post violated: self.fuelFlowRate = rate");
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

/** Impl signature for FuelMeteringUnit.clampToMaxFuelFlow. User supplies this. */
export type FuelMeteringUnitClampToMaxFuelFlowImpl = (self: FuelMeteringUnit, commandedRate: number) => { self: FuelMeteringUnit; modified: { fuelFlowRate: unknown } };

/** Contract-checking wrapper for FuelMeteringUnit.clampToMaxFuelFlow. */
export function wrapFuelMeteringUnitClampToMaxFuelFlow(impl: FuelMeteringUnitClampToMaxFuelFlowImpl): (self: FuelMeteringUnit, commandedRate: number) => FuelMeteringUnit {
  return (self, commandedRate) => {
    const preViolations: string[] = [];
    if (!((commandedRate > self.maxFuelFlowRate))) {
      preViolations.push("[FuelMeteringUnit.clampToMaxFuelFlow] pre violated: commandedRate > self.maxFuelFlowRate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commandedRate);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlowRate === __result.self.maxFuelFlowRate))) {
        postViolations.push("[FuelMeteringUnit.clampToMaxFuelFlow] post violated: self.fuelFlowRate = self.maxFuelFlowRate");
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

/** Impl signature for FuelMeteringUnit.clampToMaxFuelFlow (async). User supplies this. */
export type FuelMeteringUnitClampToMaxFuelFlowAsyncImpl = (self: FuelMeteringUnit, commandedRate: number) => Promise<{ self: FuelMeteringUnit; modified: { fuelFlowRate: unknown } }>;

/** Contract-checking wrapper for FuelMeteringUnit.clampToMaxFuelFlow (async). */
export function wrapFuelMeteringUnitClampToMaxFuelFlowAsync(impl: FuelMeteringUnitClampToMaxFuelFlowAsyncImpl): (self: FuelMeteringUnit, commandedRate: number) => Promise<FuelMeteringUnit> {
  return async (self, commandedRate) => {
    const preViolations: string[] = [];
    if (!((commandedRate > self.maxFuelFlowRate))) {
      preViolations.push("[FuelMeteringUnit.clampToMaxFuelFlow] pre violated: commandedRate > self.maxFuelFlowRate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commandedRate);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlowRate === __result.self.maxFuelFlowRate))) {
        postViolations.push("[FuelMeteringUnit.clampToMaxFuelFlow] post violated: self.fuelFlowRate = self.maxFuelFlowRate");
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

/** Impl signature for IgnitionController.activateIgnition. User supplies this. */
export type IgnitionControllerActivateIgnitionImpl = (self: IgnitionController, holdingTimeSec: number) => { self: IgnitionController; modified: { ignitionActive: unknown; holdingTimerSec: unknown; timerElapsed: unknown } };

/** Contract-checking wrapper for IgnitionController.activateIgnition. */
export function wrapIgnitionControllerActivateIgnition(impl: IgnitionControllerActivateIgnitionImpl): (self: IgnitionController, holdingTimeSec: number) => IgnitionController {
  return (self, holdingTimeSec) => {
    const preViolations: string[] = [];
    if (!((holdingTimeSec >= 0))) {
      preViolations.push("[IgnitionController.activateIgnition] pre violated: holdingTimeSec >= 0.0");
    }
    if (!((holdingTimeSec === 30))) {
      preViolations.push("[IgnitionController.activateIgnition] pre violated: holdingTimeSec = 30.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, holdingTimeSec);
      const postViolations: string[] = [];
      if (!((__result.self.ignitionActive === true))) {
        postViolations.push("[IgnitionController.activateIgnition] post violated: self.ignitionActive = true");
      }
      if (!((__result.self.holdingTimerSec === holdingTimeSec))) {
        postViolations.push("[IgnitionController.activateIgnition] post violated: self.holdingTimerSec = holdingTimeSec");
      }
      if (!((__result.self.timerElapsed === false))) {
        postViolations.push("[IgnitionController.activateIgnition] post violated: self.timerElapsed = false");
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

/** Impl signature for IgnitionController.activateIgnition (async). User supplies this. */
export type IgnitionControllerActivateIgnitionAsyncImpl = (self: IgnitionController, holdingTimeSec: number) => Promise<{ self: IgnitionController; modified: { ignitionActive: unknown; holdingTimerSec: unknown; timerElapsed: unknown } }>;

/** Contract-checking wrapper for IgnitionController.activateIgnition (async). */
export function wrapIgnitionControllerActivateIgnitionAsync(impl: IgnitionControllerActivateIgnitionAsyncImpl): (self: IgnitionController, holdingTimeSec: number) => Promise<IgnitionController> {
  return async (self, holdingTimeSec) => {
    const preViolations: string[] = [];
    if (!((holdingTimeSec >= 0))) {
      preViolations.push("[IgnitionController.activateIgnition] pre violated: holdingTimeSec >= 0.0");
    }
    if (!((holdingTimeSec === 30))) {
      preViolations.push("[IgnitionController.activateIgnition] pre violated: holdingTimeSec = 30.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, holdingTimeSec);
      const postViolations: string[] = [];
      if (!((__result.self.ignitionActive === true))) {
        postViolations.push("[IgnitionController.activateIgnition] post violated: self.ignitionActive = true");
      }
      if (!((__result.self.holdingTimerSec === holdingTimeSec))) {
        postViolations.push("[IgnitionController.activateIgnition] post violated: self.holdingTimerSec = holdingTimeSec");
      }
      if (!((__result.self.timerElapsed === false))) {
        postViolations.push("[IgnitionController.activateIgnition] post violated: self.timerElapsed = false");
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

/** Impl signature for IgnitionController.deactivateIgnition. User supplies this. */
export type IgnitionControllerDeactivateIgnitionImpl = (self: IgnitionController) => { self: IgnitionController; modified: { ignitionActive: unknown; holdingTimerSec: unknown } };

/** Contract-checking wrapper for IgnitionController.deactivateIgnition. */
export function wrapIgnitionControllerDeactivateIgnition(impl: IgnitionControllerDeactivateIgnitionImpl): (self: IgnitionController) => IgnitionController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.ignitionActive)) {
      preViolations.push("[IgnitionController.deactivateIgnition] pre violated: self.ignitionActive");
    }
    if (!(self.timerElapsed)) {
      preViolations.push("[IgnitionController.deactivateIgnition] pre violated: self.timerElapsed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.ignitionActive === false))) {
        postViolations.push("[IgnitionController.deactivateIgnition] post violated: self.ignitionActive = false");
      }
      if (!((__result.self.holdingTimerSec === 0))) {
        postViolations.push("[IgnitionController.deactivateIgnition] post violated: self.holdingTimerSec = 0.0");
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

/** Impl signature for IgnitionController.deactivateIgnition (async). User supplies this. */
export type IgnitionControllerDeactivateIgnitionAsyncImpl = (self: IgnitionController) => Promise<{ self: IgnitionController; modified: { ignitionActive: unknown; holdingTimerSec: unknown } }>;

/** Contract-checking wrapper for IgnitionController.deactivateIgnition (async). */
export function wrapIgnitionControllerDeactivateIgnitionAsync(impl: IgnitionControllerDeactivateIgnitionAsyncImpl): (self: IgnitionController) => Promise<IgnitionController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.ignitionActive)) {
      preViolations.push("[IgnitionController.deactivateIgnition] pre violated: self.ignitionActive");
    }
    if (!(self.timerElapsed)) {
      preViolations.push("[IgnitionController.deactivateIgnition] pre violated: self.timerElapsed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.ignitionActive === false))) {
        postViolations.push("[IgnitionController.deactivateIgnition] post violated: self.ignitionActive = false");
      }
      if (!((__result.self.holdingTimerSec === 0))) {
        postViolations.push("[IgnitionController.deactivateIgnition] post violated: self.holdingTimerSec = 0.0");
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

/** Impl signature for IgnitionController.tickTimer. User supplies this. */
export type IgnitionControllerTickTimerImpl = (self: IgnitionController, deltaSec: number) => { self: IgnitionController; modified: { holdingTimerSec: unknown; timerElapsed: unknown } };

/** Contract-checking wrapper for IgnitionController.tickTimer. */
export function wrapIgnitionControllerTickTimer(impl: IgnitionControllerTickTimerImpl): (self: IgnitionController, deltaSec: number) => IgnitionController {
  return (self, deltaSec) => {
    const preViolations: string[] = [];
    if (!((deltaSec >= 0))) {
      preViolations.push("[IgnitionController.tickTimer] pre violated: deltaSec >= 0.0");
    }
    if (!(self.ignitionActive)) {
      preViolations.push("[IgnitionController.tickTimer] pre violated: self.ignitionActive");
    }
    if (!(!(self.timerElapsed))) {
      preViolations.push("[IgnitionController.tickTimer] pre violated: not self.timerElapsed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.holdingTimerSec": self.holdingTimerSec,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, deltaSec);
      const postViolations: string[] = [];
      if (!((__result.self.holdingTimerSec === ((((__pre["self.holdingTimerSec"] - deltaSec) <= 0)) ? (0) : ((__pre["self.holdingTimerSec"] - deltaSec)))))) {
        postViolations.push("[IgnitionController.tickTimer] post violated: self.holdingTimerSec = \n        (if (self.holdingTimerSec@pre - deltaSec) <= 0.0 then 0.0\n         else self.holdingTimerSec@pre - deltaSec\n         endif)");
      }
      if (!((__result.self.timerElapsed === ((__pre["self.holdingTimerSec"] - deltaSec) <= 0)))) {
        postViolations.push("[IgnitionController.tickTimer] post violated: self.timerElapsed = ((self.holdingTimerSec@pre - deltaSec) <= 0.0)");
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

/** Impl signature for IgnitionController.tickTimer (async). User supplies this. */
export type IgnitionControllerTickTimerAsyncImpl = (self: IgnitionController, deltaSec: number) => Promise<{ self: IgnitionController; modified: { holdingTimerSec: unknown; timerElapsed: unknown } }>;

/** Contract-checking wrapper for IgnitionController.tickTimer (async). */
export function wrapIgnitionControllerTickTimerAsync(impl: IgnitionControllerTickTimerAsyncImpl): (self: IgnitionController, deltaSec: number) => Promise<IgnitionController> {
  return async (self, deltaSec) => {
    const preViolations: string[] = [];
    if (!((deltaSec >= 0))) {
      preViolations.push("[IgnitionController.tickTimer] pre violated: deltaSec >= 0.0");
    }
    if (!(self.ignitionActive)) {
      preViolations.push("[IgnitionController.tickTimer] pre violated: self.ignitionActive");
    }
    if (!(!(self.timerElapsed))) {
      preViolations.push("[IgnitionController.tickTimer] pre violated: not self.timerElapsed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.holdingTimerSec": self.holdingTimerSec,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, deltaSec);
      const postViolations: string[] = [];
      if (!((__result.self.holdingTimerSec === ((((__pre["self.holdingTimerSec"] - deltaSec) <= 0)) ? (0) : ((__pre["self.holdingTimerSec"] - deltaSec)))))) {
        postViolations.push("[IgnitionController.tickTimer] post violated: self.holdingTimerSec = \n        (if (self.holdingTimerSec@pre - deltaSec) <= 0.0 then 0.0\n         else self.holdingTimerSec@pre - deltaSec\n         endif)");
      }
      if (!((__result.self.timerElapsed === ((__pre["self.holdingTimerSec"] - deltaSec) <= 0)))) {
        postViolations.push("[IgnitionController.tickTimer] post violated: self.timerElapsed = ((self.holdingTimerSec@pre - deltaSec) <= 0.0)");
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

/** Impl signature for IgnitionController.enforceHoldingPeriod. User supplies this. */
export type IgnitionControllerEnforceHoldingPeriodImpl = (self: IgnitionController) => { self: IgnitionController; modified: {} };

/** Contract-checking wrapper for IgnitionController.enforceHoldingPeriod. */
export function wrapIgnitionControllerEnforceHoldingPeriod(impl: IgnitionControllerEnforceHoldingPeriodImpl): (self: IgnitionController) => IgnitionController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.ignitionActive)) {
      preViolations.push("[IgnitionController.enforceHoldingPeriod] pre violated: self.ignitionActive");
    }
    if (!(!(self.timerElapsed))) {
      preViolations.push("[IgnitionController.enforceHoldingPeriod] pre violated: not self.timerElapsed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for IgnitionController.enforceHoldingPeriod (async). User supplies this. */
export type IgnitionControllerEnforceHoldingPeriodAsyncImpl = (self: IgnitionController) => Promise<{ self: IgnitionController; modified: {} }>;

/** Contract-checking wrapper for IgnitionController.enforceHoldingPeriod (async). */
export function wrapIgnitionControllerEnforceHoldingPeriodAsync(impl: IgnitionControllerEnforceHoldingPeriodAsyncImpl): (self: IgnitionController) => Promise<IgnitionController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.ignitionActive)) {
      preViolations.push("[IgnitionController.enforceHoldingPeriod] pre violated: self.ignitionActive");
    }
    if (!(!(self.timerElapsed))) {
      preViolations.push("[IgnitionController.enforceHoldingPeriod] pre violated: not self.timerElapsed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for ThrustController.setThrust. User supplies this. */
export type ThrustControllerSetThrustImpl = (self: ThrustController, thrust: number) => { self: ThrustController; modified: { thrustCommanded: unknown } };

/** Contract-checking wrapper for ThrustController.setThrust. */
export function wrapThrustControllerSetThrust(impl: ThrustControllerSetThrustImpl): (self: ThrustController, thrust: number) => ThrustController {
  return (self, thrust) => {
    const preViolations: string[] = [];
    if (!((thrust >= 0))) {
      preViolations.push("[ThrustController.setThrust] pre violated: thrust >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, thrust);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded === thrust))) {
        postViolations.push("[ThrustController.setThrust] post violated: self.thrustCommanded = thrust");
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

/** Impl signature for ThrustController.setThrust (async). User supplies this. */
export type ThrustControllerSetThrustAsyncImpl = (self: ThrustController, thrust: number) => Promise<{ self: ThrustController; modified: { thrustCommanded: unknown } }>;

/** Contract-checking wrapper for ThrustController.setThrust (async). */
export function wrapThrustControllerSetThrustAsync(impl: ThrustControllerSetThrustAsyncImpl): (self: ThrustController, thrust: number) => Promise<ThrustController> {
  return async (self, thrust) => {
    const preViolations: string[] = [];
    if (!((thrust >= 0))) {
      preViolations.push("[ThrustController.setThrust] pre violated: thrust >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, thrust);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded === thrust))) {
        postViolations.push("[ThrustController.setThrust] post violated: self.thrustCommanded = thrust");
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

/** Impl signature for ThrustController.handleAircraftState. User supplies this. */
export type ThrustControllerHandleAircraftStateImpl = (self: ThrustController, inFlight: boolean) => { self: ThrustController; modified: { inFlight: unknown; reverserDeploymentAllowed: unknown } };

/** Contract-checking wrapper for ThrustController.handleAircraftState. */
export function wrapThrustControllerHandleAircraftState(impl: ThrustControllerHandleAircraftStateImpl): (self: ThrustController, inFlight: boolean) => ThrustController {
  return (self, inFlight) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThrustController.handleAircraftState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === inFlight))) {
        postViolations.push("[ThrustController.handleAircraftState] post violated: self.inFlight = inFlight");
      }
      if (!(((inFlight) ? ((__result.self.reverserDeploymentAllowed === false)) : ((__result.self.reverserDeploymentAllowed === true))))) {
        postViolations.push("[ThrustController.handleAircraftState] post violated: if inFlight then\n            self.reverserDeploymentAllowed = false\n          else\n            self.reverserDeploymentAllowed = true\n          endif");
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

/** Impl signature for ThrustController.handleAircraftState (async). User supplies this. */
export type ThrustControllerHandleAircraftStateAsyncImpl = (self: ThrustController, inFlight: boolean) => Promise<{ self: ThrustController; modified: { inFlight: unknown; reverserDeploymentAllowed: unknown } }>;

/** Contract-checking wrapper for ThrustController.handleAircraftState (async). */
export function wrapThrustControllerHandleAircraftStateAsync(impl: ThrustControllerHandleAircraftStateAsyncImpl): (self: ThrustController, inFlight: boolean) => Promise<ThrustController> {
  return async (self, inFlight) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThrustController.handleAircraftState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === inFlight))) {
        postViolations.push("[ThrustController.handleAircraftState] post violated: self.inFlight = inFlight");
      }
      if (!(((inFlight) ? ((__result.self.reverserDeploymentAllowed === false)) : ((__result.self.reverserDeploymentAllowed === true))))) {
        postViolations.push("[ThrustController.handleAircraftState] post violated: if inFlight then\n            self.reverserDeploymentAllowed = false\n          else\n            self.reverserDeploymentAllowed = true\n          endif");
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

/** Impl signature for ThrustController.commandThrustReverser. User supplies this. */
export type ThrustControllerCommandThrustReverserImpl = (self: ThrustController, deploy: boolean) => { self: ThrustController; modified: { reverserDeploymentAllowed: unknown; reverserDeployed: unknown } };

/** Contract-checking wrapper for ThrustController.commandThrustReverser. */
export function wrapThrustControllerCommandThrustReverser(impl: ThrustControllerCommandThrustReverserImpl): (self: ThrustController, deploy: boolean) => ThrustController {
  return (self, deploy) => {
    const preViolations: string[] = [];
    if (!((!(deploy) || !(self.inFlight)))) {
      preViolations.push("[ThrustController.commandThrustReverser] pre violated: not deploy or (not self.inFlight)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, deploy);
      const postViolations: string[] = [];
      if (!((((deploy && !(__result.self.inFlight))) ? (((__result.self.reverserDeploymentAllowed === true) && (__result.self.reverserDeployed === true))) : (((__result.self.reverserDeploymentAllowed === false) && (__result.self.reverserDeployed === false)))))) {
        postViolations.push("[ThrustController.commandThrustReverser] post violated: if deploy and not self.inFlight then\n            self.reverserDeploymentAllowed = true and self.reverserDeployed = true\n          else\n            self.reverserDeploymentAllowed = false and self.reverserDeployed = false\n          endif");
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

/** Impl signature for ThrustController.commandThrustReverser (async). User supplies this. */
export type ThrustControllerCommandThrustReverserAsyncImpl = (self: ThrustController, deploy: boolean) => Promise<{ self: ThrustController; modified: { reverserDeploymentAllowed: unknown; reverserDeployed: unknown } }>;

/** Contract-checking wrapper for ThrustController.commandThrustReverser (async). */
export function wrapThrustControllerCommandThrustReverserAsync(impl: ThrustControllerCommandThrustReverserAsyncImpl): (self: ThrustController, deploy: boolean) => Promise<ThrustController> {
  return async (self, deploy) => {
    const preViolations: string[] = [];
    if (!((!(deploy) || !(self.inFlight)))) {
      preViolations.push("[ThrustController.commandThrustReverser] pre violated: not deploy or (not self.inFlight)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, deploy);
      const postViolations: string[] = [];
      if (!((((deploy && !(__result.self.inFlight))) ? (((__result.self.reverserDeploymentAllowed === true) && (__result.self.reverserDeployed === true))) : (((__result.self.reverserDeploymentAllowed === false) && (__result.self.reverserDeployed === false)))))) {
        postViolations.push("[ThrustController.commandThrustReverser] post violated: if deploy and not self.inFlight then\n            self.reverserDeploymentAllowed = true and self.reverserDeployed = true\n          else\n            self.reverserDeploymentAllowed = false and self.reverserDeployed = false\n          endif");
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

/** Impl signature for ThrustController.rejectInFlightReverserCommand. User supplies this. */
export type ThrustControllerRejectInFlightReverserCommandImpl = (self: ThrustController) => { self: ThrustController; modified: {} };

/** Contract-checking wrapper for ThrustController.rejectInFlightReverserCommand. */
export function wrapThrustControllerRejectInFlightReverserCommand(impl: ThrustControllerRejectInFlightReverserCommandImpl): (self: ThrustController) => ThrustController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.inFlight)) {
      preViolations.push("[ThrustController.rejectInFlightReverserCommand] pre violated: self.inFlight");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for ThrustController.rejectInFlightReverserCommand (async). User supplies this. */
export type ThrustControllerRejectInFlightReverserCommandAsyncImpl = (self: ThrustController) => Promise<{ self: ThrustController; modified: {} }>;

/** Contract-checking wrapper for ThrustController.rejectInFlightReverserCommand (async). */
export function wrapThrustControllerRejectInFlightReverserCommandAsync(impl: ThrustControllerRejectInFlightReverserCommandAsyncImpl): (self: ThrustController) => Promise<ThrustController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.inFlight)) {
      preViolations.push("[ThrustController.rejectInFlightReverserCommand] pre violated: self.inFlight");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for SensorFaultManager.detectFault. User supplies this. */
export type SensorFaultManagerDetectFaultImpl = (self: SensorFaultManager, faultDetected: boolean) => { self: SensorFaultManager; modified: { sensorFaultDetected: unknown; consecutiveFaults: unknown; modelledValueActive: unknown } };

/** Contract-checking wrapper for SensorFaultManager.detectFault. */
export function wrapSensorFaultManagerDetectFault(impl: SensorFaultManagerDetectFaultImpl): (self: SensorFaultManager, faultDetected: boolean) => SensorFaultManager {
  return (self, faultDetected) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[SensorFaultManager.detectFault] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.consecutiveFaults": self.consecutiveFaults,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultDetected);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === faultDetected))) {
        postViolations.push("[SensorFaultManager.detectFault] post violated: self.sensorFaultDetected = faultDetected");
      }
      if (!(((faultDetected) ? ((__result.self.consecutiveFaults === (__pre["self.consecutiveFaults"] + 1))) : ((__result.self.consecutiveFaults === 0))))) {
        postViolations.push("[SensorFaultManager.detectFault] post violated: if faultDetected then\n            self.consecutiveFaults = self.consecutiveFaults@pre + 1\n          else\n            self.consecutiveFaults = 0\n          endif");
      }
      if (!((__result.self.modelledValueActive === (__result.self.consecutiveFaults >= __result.self.maxConsecutiveFaults)))) {
        postViolations.push("[SensorFaultManager.detectFault] post violated: self.modelledValueActive = (self.consecutiveFaults >= self.maxConsecutiveFaults)");
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

/** Impl signature for SensorFaultManager.detectFault (async). User supplies this. */
export type SensorFaultManagerDetectFaultAsyncImpl = (self: SensorFaultManager, faultDetected: boolean) => Promise<{ self: SensorFaultManager; modified: { sensorFaultDetected: unknown; consecutiveFaults: unknown; modelledValueActive: unknown } }>;

/** Contract-checking wrapper for SensorFaultManager.detectFault (async). */
export function wrapSensorFaultManagerDetectFaultAsync(impl: SensorFaultManagerDetectFaultAsyncImpl): (self: SensorFaultManager, faultDetected: boolean) => Promise<SensorFaultManager> {
  return async (self, faultDetected) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[SensorFaultManager.detectFault] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.consecutiveFaults": self.consecutiveFaults,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultDetected);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === faultDetected))) {
        postViolations.push("[SensorFaultManager.detectFault] post violated: self.sensorFaultDetected = faultDetected");
      }
      if (!(((faultDetected) ? ((__result.self.consecutiveFaults === (__pre["self.consecutiveFaults"] + 1))) : ((__result.self.consecutiveFaults === 0))))) {
        postViolations.push("[SensorFaultManager.detectFault] post violated: if faultDetected then\n            self.consecutiveFaults = self.consecutiveFaults@pre + 1\n          else\n            self.consecutiveFaults = 0\n          endif");
      }
      if (!((__result.self.modelledValueActive === (__result.self.consecutiveFaults >= __result.self.maxConsecutiveFaults)))) {
        postViolations.push("[SensorFaultManager.detectFault] post violated: self.modelledValueActive = (self.consecutiveFaults >= self.maxConsecutiveFaults)");
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

/** Impl signature for SensorFaultManager.enterModelledValueMode. User supplies this. */
export type SensorFaultManagerEnterModelledValueModeImpl = (self: SensorFaultManager) => { self: SensorFaultManager; modified: { modelledValueActive: unknown } };

/** Contract-checking wrapper for SensorFaultManager.enterModelledValueMode. */
export function wrapSensorFaultManagerEnterModelledValueMode(impl: SensorFaultManagerEnterModelledValueModeImpl): (self: SensorFaultManager) => SensorFaultManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.consecutiveFaults >= self.maxConsecutiveFaults))) {
      preViolations.push("[SensorFaultManager.enterModelledValueMode] pre violated: self.consecutiveFaults >= self.maxConsecutiveFaults");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValueActive === true))) {
        postViolations.push("[SensorFaultManager.enterModelledValueMode] post violated: self.modelledValueActive = true");
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

/** Impl signature for SensorFaultManager.enterModelledValueMode (async). User supplies this. */
export type SensorFaultManagerEnterModelledValueModeAsyncImpl = (self: SensorFaultManager) => Promise<{ self: SensorFaultManager; modified: { modelledValueActive: unknown } }>;

/** Contract-checking wrapper for SensorFaultManager.enterModelledValueMode (async). */
export function wrapSensorFaultManagerEnterModelledValueModeAsync(impl: SensorFaultManagerEnterModelledValueModeAsyncImpl): (self: SensorFaultManager) => Promise<SensorFaultManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.consecutiveFaults >= self.maxConsecutiveFaults))) {
      preViolations.push("[SensorFaultManager.enterModelledValueMode] pre violated: self.consecutiveFaults >= self.maxConsecutiveFaults");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValueActive === true))) {
        postViolations.push("[SensorFaultManager.enterModelledValueMode] post violated: self.modelledValueActive = true");
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

/** Impl signature for SensorFaultManager.clearFaultState. User supplies this. */
export type SensorFaultManagerClearFaultStateImpl = (self: SensorFaultManager) => { self: SensorFaultManager; modified: { sensorFaultDetected: unknown; consecutiveFaults: unknown; modelledValueActive: unknown } };

/** Contract-checking wrapper for SensorFaultManager.clearFaultState. */
export function wrapSensorFaultManagerClearFaultState(impl: SensorFaultManagerClearFaultStateImpl): (self: SensorFaultManager) => SensorFaultManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected || self.modelledValueActive))) {
      preViolations.push("[SensorFaultManager.clearFaultState] pre violated: self.sensorFaultDetected or self.modelledValueActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SensorFaultManager.clearFaultState] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.consecutiveFaults === 0))) {
        postViolations.push("[SensorFaultManager.clearFaultState] post violated: self.consecutiveFaults = 0");
      }
      if (!((__result.self.modelledValueActive === false))) {
        postViolations.push("[SensorFaultManager.clearFaultState] post violated: self.modelledValueActive = false");
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

/** Impl signature for SensorFaultManager.clearFaultState (async). User supplies this. */
export type SensorFaultManagerClearFaultStateAsyncImpl = (self: SensorFaultManager) => Promise<{ self: SensorFaultManager; modified: { sensorFaultDetected: unknown; consecutiveFaults: unknown; modelledValueActive: unknown } }>;

/** Contract-checking wrapper for SensorFaultManager.clearFaultState (async). */
export function wrapSensorFaultManagerClearFaultStateAsync(impl: SensorFaultManagerClearFaultStateAsyncImpl): (self: SensorFaultManager) => Promise<SensorFaultManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected || self.modelledValueActive))) {
      preViolations.push("[SensorFaultManager.clearFaultState] pre violated: self.sensorFaultDetected or self.modelledValueActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SensorFaultManager.clearFaultState] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.consecutiveFaults === 0))) {
        postViolations.push("[SensorFaultManager.clearFaultState] post violated: self.consecutiveFaults = 0");
      }
      if (!((__result.self.modelledValueActive === false))) {
        postViolations.push("[SensorFaultManager.clearFaultState] post violated: self.modelledValueActive = false");
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

/** Impl signature for SensorFaultManager.rejectImplausibleReading. User supplies this. */
export type SensorFaultManagerRejectImplausibleReadingImpl = (self: SensorFaultManager, readingRpm: number) => { self: SensorFaultManager; modified: {} };

/** Contract-checking wrapper for SensorFaultManager.rejectImplausibleReading. */
export function wrapSensorFaultManagerRejectImplausibleReading(impl: SensorFaultManagerRejectImplausibleReadingImpl): (self: SensorFaultManager, readingRpm: number) => SensorFaultManager {
  return (self, readingRpm) => {
    const preViolations: string[] = [];
    if (!(((readingRpm < 0) || (readingRpm > 18000)))) {
      preViolations.push("[SensorFaultManager.rejectImplausibleReading] pre violated: readingRpm < 0.0 or readingRpm > 18000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, readingRpm);
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

/** Impl signature for SensorFaultManager.rejectImplausibleReading (async). User supplies this. */
export type SensorFaultManagerRejectImplausibleReadingAsyncImpl = (self: SensorFaultManager, readingRpm: number) => Promise<{ self: SensorFaultManager; modified: {} }>;

/** Contract-checking wrapper for SensorFaultManager.rejectImplausibleReading (async). */
export function wrapSensorFaultManagerRejectImplausibleReadingAsync(impl: SensorFaultManagerRejectImplausibleReadingAsyncImpl): (self: SensorFaultManager, readingRpm: number) => Promise<SensorFaultManager> {
  return async (self, readingRpm) => {
    const preViolations: string[] = [];
    if (!(((readingRpm < 0) || (readingRpm > 18000)))) {
      preViolations.push("[SensorFaultManager.rejectImplausibleReading] pre violated: readingRpm < 0.0 or readingRpm > 18000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, readingRpm);
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

/** Impl signature for ModelledValueCalculator.recordValidReading. User supplies this. */
export type ModelledValueCalculatorRecordValidReadingImpl = (self: ModelledValueCalculator, reading: number) => { self: ModelledValueCalculator; modified: { lastValidReading: unknown } };

/** Contract-checking wrapper for ModelledValueCalculator.recordValidReading. */
export function wrapModelledValueCalculatorRecordValidReading(impl: ModelledValueCalculatorRecordValidReadingImpl): (self: ModelledValueCalculator, reading: number) => ModelledValueCalculator {
  return (self, reading) => {
    const preViolations: string[] = [];
    if (!((reading >= 0))) {
      preViolations.push("[ModelledValueCalculator.recordValidReading] pre violated: reading >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reading);
      const postViolations: string[] = [];
      if (!((__result.self.lastValidReading === reading))) {
        postViolations.push("[ModelledValueCalculator.recordValidReading] post violated: self.lastValidReading = reading");
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

/** Impl signature for ModelledValueCalculator.recordValidReading (async). User supplies this. */
export type ModelledValueCalculatorRecordValidReadingAsyncImpl = (self: ModelledValueCalculator, reading: number) => Promise<{ self: ModelledValueCalculator; modified: { lastValidReading: unknown } }>;

/** Contract-checking wrapper for ModelledValueCalculator.recordValidReading (async). */
export function wrapModelledValueCalculatorRecordValidReadingAsync(impl: ModelledValueCalculatorRecordValidReadingAsyncImpl): (self: ModelledValueCalculator, reading: number) => Promise<ModelledValueCalculator> {
  return async (self, reading) => {
    const preViolations: string[] = [];
    if (!((reading >= 0))) {
      preViolations.push("[ModelledValueCalculator.recordValidReading] pre violated: reading >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reading);
      const postViolations: string[] = [];
      if (!((__result.self.lastValidReading === reading))) {
        postViolations.push("[ModelledValueCalculator.recordValidReading] post violated: self.lastValidReading = reading");
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

/** Impl signature for ModelledValueCalculator.computeModelledValue. User supplies this. */
export type ModelledValueCalculatorComputeModelledValueImpl = (self: ModelledValueCalculator, defaultValue: number) => { self: ModelledValueCalculator; modified: { currentModelledValue: unknown } };

/** Contract-checking wrapper for ModelledValueCalculator.computeModelledValue. */
export function wrapModelledValueCalculatorComputeModelledValue(impl: ModelledValueCalculatorComputeModelledValueImpl): (self: ModelledValueCalculator, defaultValue: number) => ModelledValueCalculator {
  return (self, defaultValue) => {
    const preViolations: string[] = [];
    if (!((defaultValue >= 0))) {
      preViolations.push("[ModelledValueCalculator.computeModelledValue] pre violated: defaultValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, defaultValue);
      const postViolations: string[] = [];
      if (!((__result.self.currentModelledValue === ((__result.self.lastValidReading * (1 - __result.self.decayRatePercentPerSec)) + (defaultValue * __result.self.decayRatePercentPerSec))))) {
        postViolations.push("[ModelledValueCalculator.computeModelledValue] post violated: self.currentModelledValue = \n        (self.lastValidReading * (1.0 - self.decayRatePercentPerSec)) +\n        (defaultValue * self.decayRatePercentPerSec)");
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

/** Impl signature for ModelledValueCalculator.computeModelledValue (async). User supplies this. */
export type ModelledValueCalculatorComputeModelledValueAsyncImpl = (self: ModelledValueCalculator, defaultValue: number) => Promise<{ self: ModelledValueCalculator; modified: { currentModelledValue: unknown } }>;

/** Contract-checking wrapper for ModelledValueCalculator.computeModelledValue (async). */
export function wrapModelledValueCalculatorComputeModelledValueAsync(impl: ModelledValueCalculatorComputeModelledValueAsyncImpl): (self: ModelledValueCalculator, defaultValue: number) => Promise<ModelledValueCalculator> {
  return async (self, defaultValue) => {
    const preViolations: string[] = [];
    if (!((defaultValue >= 0))) {
      preViolations.push("[ModelledValueCalculator.computeModelledValue] pre violated: defaultValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, defaultValue);
      const postViolations: string[] = [];
      if (!((__result.self.currentModelledValue === ((__result.self.lastValidReading * (1 - __result.self.decayRatePercentPerSec)) + (defaultValue * __result.self.decayRatePercentPerSec))))) {
        postViolations.push("[ModelledValueCalculator.computeModelledValue] post violated: self.currentModelledValue = \n        (self.lastValidReading * (1.0 - self.decayRatePercentPerSec)) +\n        (defaultValue * self.decayRatePercentPerSec)");
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

/** Impl signature for ModelledValueCalculator.decayModelledValue. User supplies this. */
export type ModelledValueCalculatorDecayModelledValueImpl = (self: ModelledValueCalculator, tickSec: number, defaultValue: number) => { self: ModelledValueCalculator; modified: { currentModelledValue: unknown } };

/** Contract-checking wrapper for ModelledValueCalculator.decayModelledValue. */
export function wrapModelledValueCalculatorDecayModelledValue(impl: ModelledValueCalculatorDecayModelledValueImpl): (self: ModelledValueCalculator, tickSec: number, defaultValue: number) => ModelledValueCalculator {
  return (self, tickSec, defaultValue) => {
    const preViolations: string[] = [];
    if (!((tickSec >= 0))) {
      preViolations.push("[ModelledValueCalculator.decayModelledValue] pre violated: tickSec >= 0.0");
    }
    if (!((defaultValue >= 0))) {
      preViolations.push("[ModelledValueCalculator.decayModelledValue] pre violated: defaultValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentModelledValue": self.currentModelledValue,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, tickSec, defaultValue);
      const postViolations: string[] = [];
      if (!((__result.self.currentModelledValue === ((__pre["self.currentModelledValue"] * (1 - (__result.self.decayRatePercentPerSec * tickSec))) + ((defaultValue * __result.self.decayRatePercentPerSec) * tickSec))))) {
        postViolations.push("[ModelledValueCalculator.decayModelledValue] post violated: self.currentModelledValue = \n        (self.currentModelledValue@pre * (1.0 - (self.decayRatePercentPerSec * tickSec))) +\n        (defaultValue * self.decayRatePercentPerSec * tickSec)");
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

/** Impl signature for ModelledValueCalculator.decayModelledValue (async). User supplies this. */
export type ModelledValueCalculatorDecayModelledValueAsyncImpl = (self: ModelledValueCalculator, tickSec: number, defaultValue: number) => Promise<{ self: ModelledValueCalculator; modified: { currentModelledValue: unknown } }>;

/** Contract-checking wrapper for ModelledValueCalculator.decayModelledValue (async). */
export function wrapModelledValueCalculatorDecayModelledValueAsync(impl: ModelledValueCalculatorDecayModelledValueAsyncImpl): (self: ModelledValueCalculator, tickSec: number, defaultValue: number) => Promise<ModelledValueCalculator> {
  return async (self, tickSec, defaultValue) => {
    const preViolations: string[] = [];
    if (!((tickSec >= 0))) {
      preViolations.push("[ModelledValueCalculator.decayModelledValue] pre violated: tickSec >= 0.0");
    }
    if (!((defaultValue >= 0))) {
      preViolations.push("[ModelledValueCalculator.decayModelledValue] pre violated: defaultValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentModelledValue": self.currentModelledValue,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, tickSec, defaultValue);
      const postViolations: string[] = [];
      if (!((__result.self.currentModelledValue === ((__pre["self.currentModelledValue"] * (1 - (__result.self.decayRatePercentPerSec * tickSec))) + ((defaultValue * __result.self.decayRatePercentPerSec) * tickSec))))) {
        postViolations.push("[ModelledValueCalculator.decayModelledValue] post violated: self.currentModelledValue = \n        (self.currentModelledValue@pre * (1.0 - (self.decayRatePercentPerSec * tickSec))) +\n        (defaultValue * self.decayRatePercentPerSec * tickSec)");
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

/** Impl signature for AircraftStateManager.setFlightState. User supplies this. */
export type AircraftStateManagerSetFlightStateImpl = (self: AircraftStateManager, inFlight: boolean, onGround: boolean) => { self: AircraftStateManager; modified: { inFlight: unknown; isOnGround: unknown } };

/** Contract-checking wrapper for AircraftStateManager.setFlightState. */
export function wrapAircraftStateManagerSetFlightState(impl: AircraftStateManagerSetFlightStateImpl): (self: AircraftStateManager, inFlight: boolean, onGround: boolean) => AircraftStateManager {
  return (self, inFlight, onGround) => {
    const preViolations: string[] = [];
    if (!(!((inFlight && onGround)))) {
      preViolations.push("[AircraftStateManager.setFlightState] pre violated: not (inFlight and onGround)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, inFlight, onGround);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === inFlight))) {
        postViolations.push("[AircraftStateManager.setFlightState] post violated: self.inFlight = inFlight");
      }
      if (!((__result.self.isOnGround === onGround))) {
        postViolations.push("[AircraftStateManager.setFlightState] post violated: self.isOnGround = onGround");
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

/** Impl signature for AircraftStateManager.setFlightState (async). User supplies this. */
export type AircraftStateManagerSetFlightStateAsyncImpl = (self: AircraftStateManager, inFlight: boolean, onGround: boolean) => Promise<{ self: AircraftStateManager; modified: { inFlight: unknown; isOnGround: unknown } }>;

/** Contract-checking wrapper for AircraftStateManager.setFlightState (async). */
export function wrapAircraftStateManagerSetFlightStateAsync(impl: AircraftStateManagerSetFlightStateAsyncImpl): (self: AircraftStateManager, inFlight: boolean, onGround: boolean) => Promise<AircraftStateManager> {
  return async (self, inFlight, onGround) => {
    const preViolations: string[] = [];
    if (!(!((inFlight && onGround)))) {
      preViolations.push("[AircraftStateManager.setFlightState] pre violated: not (inFlight and onGround)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, inFlight, onGround);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === inFlight))) {
        postViolations.push("[AircraftStateManager.setFlightState] post violated: self.inFlight = inFlight");
      }
      if (!((__result.self.isOnGround === onGround))) {
        postViolations.push("[AircraftStateManager.setFlightState] post violated: self.isOnGround = onGround");
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

/** Impl signature for AircraftStateManager.transitionToFlight. User supplies this. */
export type AircraftStateManagerTransitionToFlightImpl = (self: AircraftStateManager) => { self: AircraftStateManager; modified: { inFlight: unknown; isOnGround: unknown } };

/** Contract-checking wrapper for AircraftStateManager.transitionToFlight. */
export function wrapAircraftStateManagerTransitionToFlight(impl: AircraftStateManagerTransitionToFlightImpl): (self: AircraftStateManager) => AircraftStateManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.inFlight))) {
      preViolations.push("[AircraftStateManager.transitionToFlight] pre violated: not self.inFlight");
    }
    if (!(self.isOnGround)) {
      preViolations.push("[AircraftStateManager.transitionToFlight] pre violated: self.isOnGround");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === true))) {
        postViolations.push("[AircraftStateManager.transitionToFlight] post violated: self.inFlight = true");
      }
      if (!((__result.self.isOnGround === false))) {
        postViolations.push("[AircraftStateManager.transitionToFlight] post violated: self.isOnGround = false");
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

/** Impl signature for AircraftStateManager.transitionToFlight (async). User supplies this. */
export type AircraftStateManagerTransitionToFlightAsyncImpl = (self: AircraftStateManager) => Promise<{ self: AircraftStateManager; modified: { inFlight: unknown; isOnGround: unknown } }>;

/** Contract-checking wrapper for AircraftStateManager.transitionToFlight (async). */
export function wrapAircraftStateManagerTransitionToFlightAsync(impl: AircraftStateManagerTransitionToFlightAsyncImpl): (self: AircraftStateManager) => Promise<AircraftStateManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.inFlight))) {
      preViolations.push("[AircraftStateManager.transitionToFlight] pre violated: not self.inFlight");
    }
    if (!(self.isOnGround)) {
      preViolations.push("[AircraftStateManager.transitionToFlight] pre violated: self.isOnGround");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === true))) {
        postViolations.push("[AircraftStateManager.transitionToFlight] post violated: self.inFlight = true");
      }
      if (!((__result.self.isOnGround === false))) {
        postViolations.push("[AircraftStateManager.transitionToFlight] post violated: self.isOnGround = false");
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

/** Impl signature for AircraftStateManager.transitionToGround. User supplies this. */
export type AircraftStateManagerTransitionToGroundImpl = (self: AircraftStateManager) => { self: AircraftStateManager; modified: { inFlight: unknown; isOnGround: unknown } };

/** Contract-checking wrapper for AircraftStateManager.transitionToGround. */
export function wrapAircraftStateManagerTransitionToGround(impl: AircraftStateManagerTransitionToGroundImpl): (self: AircraftStateManager) => AircraftStateManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.inFlight)) {
      preViolations.push("[AircraftStateManager.transitionToGround] pre violated: self.inFlight");
    }
    if (!(!(self.isOnGround))) {
      preViolations.push("[AircraftStateManager.transitionToGround] pre violated: not self.isOnGround");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === false))) {
        postViolations.push("[AircraftStateManager.transitionToGround] post violated: self.inFlight = false");
      }
      if (!((__result.self.isOnGround === true))) {
        postViolations.push("[AircraftStateManager.transitionToGround] post violated: self.isOnGround = true");
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

/** Impl signature for AircraftStateManager.transitionToGround (async). User supplies this. */
export type AircraftStateManagerTransitionToGroundAsyncImpl = (self: AircraftStateManager) => Promise<{ self: AircraftStateManager; modified: { inFlight: unknown; isOnGround: unknown } }>;

/** Contract-checking wrapper for AircraftStateManager.transitionToGround (async). */
export function wrapAircraftStateManagerTransitionToGroundAsync(impl: AircraftStateManagerTransitionToGroundAsyncImpl): (self: AircraftStateManager) => Promise<AircraftStateManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.inFlight)) {
      preViolations.push("[AircraftStateManager.transitionToGround] pre violated: self.inFlight");
    }
    if (!(!(self.isOnGround))) {
      preViolations.push("[AircraftStateManager.transitionToGround] pre violated: not self.isOnGround");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === false))) {
        postViolations.push("[AircraftStateManager.transitionToGround] post violated: self.inFlight = false");
      }
      if (!((__result.self.isOnGround === true))) {
        postViolations.push("[AircraftStateManager.transitionToGround] post violated: self.isOnGround = true");
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

/** Impl signature for SpeedSensorInterface.transferReading. User supplies this. */
export type SpeedSensorInterfaceTransferReadingImpl = (self: SpeedSensorInterface, rpm: number, isFaulty: boolean) => { self: SpeedSensorInterface; modified: { latestReportedRpm: unknown; isFaulty: unknown } };

/** Contract-checking wrapper for SpeedSensorInterface.transferReading. */
export function wrapSpeedSensorInterfaceTransferReading(impl: SpeedSensorInterfaceTransferReadingImpl): (self: SpeedSensorInterface, rpm: number, isFaulty: boolean) => SpeedSensorInterface {
  return (self, rpm, isFaulty) => {
    const preViolations: string[] = [];
    if (!((rpm >= 0))) {
      preViolations.push("[SpeedSensorInterface.transferReading] pre violated: rpm >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rpm, isFaulty);
      const postViolations: string[] = [];
      if (!((__result.self.latestReportedRpm === rpm))) {
        postViolations.push("[SpeedSensorInterface.transferReading] post violated: self.latestReportedRpm = rpm");
      }
      if (!((__result.self.isFaulty === isFaulty))) {
        postViolations.push("[SpeedSensorInterface.transferReading] post violated: self.isFaulty = isFaulty");
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

/** Impl signature for SpeedSensorInterface.transferReading (async). User supplies this. */
export type SpeedSensorInterfaceTransferReadingAsyncImpl = (self: SpeedSensorInterface, rpm: number, isFaulty: boolean) => Promise<{ self: SpeedSensorInterface; modified: { latestReportedRpm: unknown; isFaulty: unknown } }>;

/** Contract-checking wrapper for SpeedSensorInterface.transferReading (async). */
export function wrapSpeedSensorInterfaceTransferReadingAsync(impl: SpeedSensorInterfaceTransferReadingAsyncImpl): (self: SpeedSensorInterface, rpm: number, isFaulty: boolean) => Promise<SpeedSensorInterface> {
  return async (self, rpm, isFaulty) => {
    const preViolations: string[] = [];
    if (!((rpm >= 0))) {
      preViolations.push("[SpeedSensorInterface.transferReading] pre violated: rpm >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rpm, isFaulty);
      const postViolations: string[] = [];
      if (!((__result.self.latestReportedRpm === rpm))) {
        postViolations.push("[SpeedSensorInterface.transferReading] post violated: self.latestReportedRpm = rpm");
      }
      if (!((__result.self.isFaulty === isFaulty))) {
        postViolations.push("[SpeedSensorInterface.transferReading] post violated: self.isFaulty = isFaulty");
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

/** Impl signature for OverspeedFuelInterface.commandFuelLimit. User supplies this. */
export type OverspeedFuelInterfaceCommandFuelLimitImpl = (self: OverspeedFuelInterface) => { self: OverspeedFuelInterface; modified: { fuelLimitCommanded: unknown; limitActive: unknown } };

/** Contract-checking wrapper for OverspeedFuelInterface.commandFuelLimit. */
export function wrapOverspeedFuelInterfaceCommandFuelLimit(impl: OverspeedFuelInterfaceCommandFuelLimitImpl): (self: OverspeedFuelInterface) => OverspeedFuelInterface {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.fuelLimitCommanded))) {
      preViolations.push("[OverspeedFuelInterface.commandFuelLimit] pre violated: not self.fuelLimitCommanded");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimitCommanded === true))) {
        postViolations.push("[OverspeedFuelInterface.commandFuelLimit] post violated: self.fuelLimitCommanded = true");
      }
      if (!((__result.self.limitActive === true))) {
        postViolations.push("[OverspeedFuelInterface.commandFuelLimit] post violated: self.limitActive = true");
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

/** Impl signature for OverspeedFuelInterface.commandFuelLimit (async). User supplies this. */
export type OverspeedFuelInterfaceCommandFuelLimitAsyncImpl = (self: OverspeedFuelInterface) => Promise<{ self: OverspeedFuelInterface; modified: { fuelLimitCommanded: unknown; limitActive: unknown } }>;

/** Contract-checking wrapper for OverspeedFuelInterface.commandFuelLimit (async). */
export function wrapOverspeedFuelInterfaceCommandFuelLimitAsync(impl: OverspeedFuelInterfaceCommandFuelLimitAsyncImpl): (self: OverspeedFuelInterface) => Promise<OverspeedFuelInterface> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.fuelLimitCommanded))) {
      preViolations.push("[OverspeedFuelInterface.commandFuelLimit] pre violated: not self.fuelLimitCommanded");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimitCommanded === true))) {
        postViolations.push("[OverspeedFuelInterface.commandFuelLimit] post violated: self.fuelLimitCommanded = true");
      }
      if (!((__result.self.limitActive === true))) {
        postViolations.push("[OverspeedFuelInterface.commandFuelLimit] post violated: self.limitActive = true");
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

/** Impl signature for OverspeedFuelInterface.releaseFuelLimit. User supplies this. */
export type OverspeedFuelInterfaceReleaseFuelLimitImpl = (self: OverspeedFuelInterface) => { self: OverspeedFuelInterface; modified: { fuelLimitCommanded: unknown; limitActive: unknown } };

/** Contract-checking wrapper for OverspeedFuelInterface.releaseFuelLimit. */
export function wrapOverspeedFuelInterfaceReleaseFuelLimit(impl: OverspeedFuelInterfaceReleaseFuelLimitImpl): (self: OverspeedFuelInterface) => OverspeedFuelInterface {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.fuelLimitCommanded)) {
      preViolations.push("[OverspeedFuelInterface.releaseFuelLimit] pre violated: self.fuelLimitCommanded");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimitCommanded === false))) {
        postViolations.push("[OverspeedFuelInterface.releaseFuelLimit] post violated: self.fuelLimitCommanded = false");
      }
      if (!((__result.self.limitActive === false))) {
        postViolations.push("[OverspeedFuelInterface.releaseFuelLimit] post violated: self.limitActive = false");
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

/** Impl signature for OverspeedFuelInterface.releaseFuelLimit (async). User supplies this. */
export type OverspeedFuelInterfaceReleaseFuelLimitAsyncImpl = (self: OverspeedFuelInterface) => Promise<{ self: OverspeedFuelInterface; modified: { fuelLimitCommanded: unknown; limitActive: unknown } }>;

/** Contract-checking wrapper for OverspeedFuelInterface.releaseFuelLimit (async). */
export function wrapOverspeedFuelInterfaceReleaseFuelLimitAsync(impl: OverspeedFuelInterfaceReleaseFuelLimitAsyncImpl): (self: OverspeedFuelInterface) => Promise<OverspeedFuelInterface> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.fuelLimitCommanded)) {
      preViolations.push("[OverspeedFuelInterface.releaseFuelLimit] pre violated: self.fuelLimitCommanded");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimitCommanded === false))) {
        postViolations.push("[OverspeedFuelInterface.releaseFuelLimit] post violated: self.fuelLimitCommanded = false");
      }
      if (!((__result.self.limitActive === false))) {
        postViolations.push("[OverspeedFuelInterface.releaseFuelLimit] post violated: self.limitActive = false");
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

/** Impl signature for FaultModelledValueInterface.activateModelledValue. User supplies this. */
export type FaultModelledValueInterfaceActivateModelledValueImpl = (self: FaultModelledValueInterface, modelledValue: number) => { self: FaultModelledValueInterface; modified: { faultActive: unknown; latestModelledValue: unknown } };

/** Contract-checking wrapper for FaultModelledValueInterface.activateModelledValue. */
export function wrapFaultModelledValueInterfaceActivateModelledValue(impl: FaultModelledValueInterfaceActivateModelledValueImpl): (self: FaultModelledValueInterface, modelledValue: number) => FaultModelledValueInterface {
  return (self, modelledValue) => {
    const preViolations: string[] = [];
    if (!((modelledValue >= 0))) {
      preViolations.push("[FaultModelledValueInterface.activateModelledValue] pre violated: modelledValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, modelledValue);
      const postViolations: string[] = [];
      if (!((__result.self.faultActive === true))) {
        postViolations.push("[FaultModelledValueInterface.activateModelledValue] post violated: self.faultActive = true");
      }
      if (!((__result.self.latestModelledValue === modelledValue))) {
        postViolations.push("[FaultModelledValueInterface.activateModelledValue] post violated: self.latestModelledValue = modelledValue");
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

/** Impl signature for FaultModelledValueInterface.activateModelledValue (async). User supplies this. */
export type FaultModelledValueInterfaceActivateModelledValueAsyncImpl = (self: FaultModelledValueInterface, modelledValue: number) => Promise<{ self: FaultModelledValueInterface; modified: { faultActive: unknown; latestModelledValue: unknown } }>;

/** Contract-checking wrapper for FaultModelledValueInterface.activateModelledValue (async). */
export function wrapFaultModelledValueInterfaceActivateModelledValueAsync(impl: FaultModelledValueInterfaceActivateModelledValueAsyncImpl): (self: FaultModelledValueInterface, modelledValue: number) => Promise<FaultModelledValueInterface> {
  return async (self, modelledValue) => {
    const preViolations: string[] = [];
    if (!((modelledValue >= 0))) {
      preViolations.push("[FaultModelledValueInterface.activateModelledValue] pre violated: modelledValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, modelledValue);
      const postViolations: string[] = [];
      if (!((__result.self.faultActive === true))) {
        postViolations.push("[FaultModelledValueInterface.activateModelledValue] post violated: self.faultActive = true");
      }
      if (!((__result.self.latestModelledValue === modelledValue))) {
        postViolations.push("[FaultModelledValueInterface.activateModelledValue] post violated: self.latestModelledValue = modelledValue");
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

/** Impl signature for FaultModelledValueInterface.clearFaultMode. User supplies this. */
export type FaultModelledValueInterfaceClearFaultModeImpl = (self: FaultModelledValueInterface) => { self: FaultModelledValueInterface; modified: { faultActive: unknown } };

/** Contract-checking wrapper for FaultModelledValueInterface.clearFaultMode. */
export function wrapFaultModelledValueInterfaceClearFaultMode(impl: FaultModelledValueInterfaceClearFaultModeImpl): (self: FaultModelledValueInterface) => FaultModelledValueInterface {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.faultActive)) {
      preViolations.push("[FaultModelledValueInterface.clearFaultMode] pre violated: self.faultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultActive === false))) {
        postViolations.push("[FaultModelledValueInterface.clearFaultMode] post violated: self.faultActive = false");
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

/** Impl signature for FaultModelledValueInterface.clearFaultMode (async). User supplies this. */
export type FaultModelledValueInterfaceClearFaultModeAsyncImpl = (self: FaultModelledValueInterface) => Promise<{ self: FaultModelledValueInterface; modified: { faultActive: unknown } }>;

/** Contract-checking wrapper for FaultModelledValueInterface.clearFaultMode (async). */
export function wrapFaultModelledValueInterfaceClearFaultModeAsync(impl: FaultModelledValueInterfaceClearFaultModeAsyncImpl): (self: FaultModelledValueInterface) => Promise<FaultModelledValueInterface> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.faultActive)) {
      preViolations.push("[FaultModelledValueInterface.clearFaultMode] pre violated: self.faultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultActive === false))) {
        postViolations.push("[FaultModelledValueInterface.clearFaultMode] post violated: self.faultActive = false");
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

/** Impl signature for ThrustStateInterface.synchronizeState. User supplies this. */
export type ThrustStateInterfaceSynchronizeStateImpl = (self: ThrustStateInterface, inFlight: boolean) => { self: ThrustStateInterface; modified: { aircraftInFlight: unknown } };

/** Contract-checking wrapper for ThrustStateInterface.synchronizeState. */
export function wrapThrustStateInterfaceSynchronizeState(impl: ThrustStateInterfaceSynchronizeStateImpl): (self: ThrustStateInterface, inFlight: boolean) => ThrustStateInterface {
  return (self, inFlight) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThrustStateInterface.synchronizeState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === inFlight))) {
        postViolations.push("[ThrustStateInterface.synchronizeState] post violated: self.aircraftInFlight = inFlight");
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

/** Impl signature for ThrustStateInterface.synchronizeState (async). User supplies this. */
export type ThrustStateInterfaceSynchronizeStateAsyncImpl = (self: ThrustStateInterface, inFlight: boolean) => Promise<{ self: ThrustStateInterface; modified: { aircraftInFlight: unknown } }>;

/** Contract-checking wrapper for ThrustStateInterface.synchronizeState (async). */
export function wrapThrustStateInterfaceSynchronizeStateAsync(impl: ThrustStateInterfaceSynchronizeStateAsyncImpl): (self: ThrustStateInterface, inFlight: boolean) => Promise<ThrustStateInterface> {
  return async (self, inFlight) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThrustStateInterface.synchronizeState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === inFlight))) {
        postViolations.push("[ThrustStateInterface.synchronizeState] post violated: self.aircraftInFlight = inFlight");
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

/** Impl signature for IgnitionThrustInterface.synchronizeIgnitionThrust. User supplies this. */
export type IgnitionThrustInterfaceSynchronizeIgnitionThrustImpl = (self: IgnitionThrustInterface, ignitionActive: boolean, thrust: number) => { self: IgnitionThrustInterface; modified: { ignitionAndThrustActive: unknown } };

/** Contract-checking wrapper for IgnitionThrustInterface.synchronizeIgnitionThrust. */
export function wrapIgnitionThrustInterfaceSynchronizeIgnitionThrust(impl: IgnitionThrustInterfaceSynchronizeIgnitionThrustImpl): (self: IgnitionThrustInterface, ignitionActive: boolean, thrust: number) => IgnitionThrustInterface {
  return (self, ignitionActive, thrust) => {
    const preViolations: string[] = [];
    if (!((thrust >= 0))) {
      preViolations.push("[IgnitionThrustInterface.synchronizeIgnitionThrust] pre violated: thrust >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, ignitionActive, thrust);
      const postViolations: string[] = [];
      if (!(((__result.self.ignitionAndThrustActive === ignitionActive) && (thrust > 0)))) {
        postViolations.push("[IgnitionThrustInterface.synchronizeIgnitionThrust] post violated: self.ignitionAndThrustActive = ignitionActive and (thrust > 0.0)");
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

/** Impl signature for IgnitionThrustInterface.synchronizeIgnitionThrust (async). User supplies this. */
export type IgnitionThrustInterfaceSynchronizeIgnitionThrustAsyncImpl = (self: IgnitionThrustInterface, ignitionActive: boolean, thrust: number) => Promise<{ self: IgnitionThrustInterface; modified: { ignitionAndThrustActive: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustInterface.synchronizeIgnitionThrust (async). */
export function wrapIgnitionThrustInterfaceSynchronizeIgnitionThrustAsync(impl: IgnitionThrustInterfaceSynchronizeIgnitionThrustAsyncImpl): (self: IgnitionThrustInterface, ignitionActive: boolean, thrust: number) => Promise<IgnitionThrustInterface> {
  return async (self, ignitionActive, thrust) => {
    const preViolations: string[] = [];
    if (!((thrust >= 0))) {
      preViolations.push("[IgnitionThrustInterface.synchronizeIgnitionThrust] pre violated: thrust >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, ignitionActive, thrust);
      const postViolations: string[] = [];
      if (!(((__result.self.ignitionAndThrustActive === ignitionActive) && (thrust > 0)))) {
        postViolations.push("[IgnitionThrustInterface.synchronizeIgnitionThrust] post violated: self.ignitionAndThrustActive = ignitionActive and (thrust > 0.0)");
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

/** Impl signature for EngineControlSystem.controlOverspeedDetection. User supplies this. */
export type EngineControlSystemControlOverspeedDetectionImpl = (self: EngineControlSystem, detected: boolean, speedRpm: number) => { self: EngineControlSystem; modified: { currentSpeedRpm: unknown; overspeedDetected: unknown; fuelLimited: unknown } };

/** Contract-checking wrapper for EngineControlSystem.controlOverspeedDetection. */
export function wrapEngineControlSystemControlOverspeedDetection(impl: EngineControlSystemControlOverspeedDetectionImpl): (self: EngineControlSystem, detected: boolean, speedRpm: number) => EngineControlSystem {
  return (self, detected, speedRpm) => {
    const preViolations: string[] = [];
    if (!((speedRpm >= 0))) {
      preViolations.push("[EngineControlSystem.controlOverspeedDetection] pre violated: speedRpm >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.fuelLimited": self.fuelLimited,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, detected, speedRpm);
      const postViolations: string[] = [];
      if (!((__result.self.currentSpeedRpm === speedRpm))) {
        postViolations.push("[EngineControlSystem.controlOverspeedDetection] post violated: self.currentSpeedRpm = speedRpm");
      }
      if (!((__result.self.overspeedDetected === detected))) {
        postViolations.push("[EngineControlSystem.controlOverspeedDetection] post violated: self.overspeedDetected = detected");
      }
      if (!((((__result.self.overspeedProtectionFitted && detected)) ? ((__result.self.fuelLimited === true)) : ((__result.self.fuelLimited === __pre["self.fuelLimited"]))))) {
        postViolations.push("[EngineControlSystem.controlOverspeedDetection] post violated: if self.overspeedProtectionFitted and detected then\n            self.fuelLimited = true\n          else\n            self.fuelLimited = self.fuelLimited@pre\n          endif");
      }
      if (!((__result.self.safeMaxSpeedRpm > 0))) {
        postViolations.push("[EngineControlSystem.controlOverspeedDetection] post violated: self.safeMaxSpeedRpm > 0.0");
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

/** Impl signature for EngineControlSystem.controlOverspeedDetection (async). User supplies this. */
export type EngineControlSystemControlOverspeedDetectionAsyncImpl = (self: EngineControlSystem, detected: boolean, speedRpm: number) => Promise<{ self: EngineControlSystem; modified: { currentSpeedRpm: unknown; overspeedDetected: unknown; fuelLimited: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.controlOverspeedDetection (async). */
export function wrapEngineControlSystemControlOverspeedDetectionAsync(impl: EngineControlSystemControlOverspeedDetectionAsyncImpl): (self: EngineControlSystem, detected: boolean, speedRpm: number) => Promise<EngineControlSystem> {
  return async (self, detected, speedRpm) => {
    const preViolations: string[] = [];
    if (!((speedRpm >= 0))) {
      preViolations.push("[EngineControlSystem.controlOverspeedDetection] pre violated: speedRpm >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.fuelLimited": self.fuelLimited,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, detected, speedRpm);
      const postViolations: string[] = [];
      if (!((__result.self.currentSpeedRpm === speedRpm))) {
        postViolations.push("[EngineControlSystem.controlOverspeedDetection] post violated: self.currentSpeedRpm = speedRpm");
      }
      if (!((__result.self.overspeedDetected === detected))) {
        postViolations.push("[EngineControlSystem.controlOverspeedDetection] post violated: self.overspeedDetected = detected");
      }
      if (!((((__result.self.overspeedProtectionFitted && detected)) ? ((__result.self.fuelLimited === true)) : ((__result.self.fuelLimited === __pre["self.fuelLimited"]))))) {
        postViolations.push("[EngineControlSystem.controlOverspeedDetection] post violated: if self.overspeedProtectionFitted and detected then\n            self.fuelLimited = true\n          else\n            self.fuelLimited = self.fuelLimited@pre\n          endif");
      }
      if (!((__result.self.safeMaxSpeedRpm > 0))) {
        postViolations.push("[EngineControlSystem.controlOverspeedDetection] post violated: self.safeMaxSpeedRpm > 0.0");
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
export type EngineControlSystemCommandContinuousIgnitionImpl = (self: EngineControlSystem, activate: boolean, holdingTimeSec: number) => { self: EngineControlSystem; modified: { continuousIgnitionActive: unknown; ignitionHoldingTimeSec: unknown } };

/** Contract-checking wrapper for EngineControlSystem.commandContinuousIgnition. */
export function wrapEngineControlSystemCommandContinuousIgnition(impl: EngineControlSystemCommandContinuousIgnitionImpl): (self: EngineControlSystem, activate: boolean, holdingTimeSec: number) => EngineControlSystem {
  return (self, activate, holdingTimeSec) => {
    const preViolations: string[] = [];
    if (!((holdingTimeSec >= 0))) {
      preViolations.push("[EngineControlSystem.commandContinuousIgnition] pre violated: holdingTimeSec >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, activate, holdingTimeSec);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === activate))) {
        postViolations.push("[EngineControlSystem.commandContinuousIgnition] post violated: self.continuousIgnitionActive = activate");
      }
      if (!((__result.self.ignitionHoldingTimeSec === ((activate) ? (holdingTimeSec) : (0))))) {
        postViolations.push("[EngineControlSystem.commandContinuousIgnition] post violated: self.ignitionHoldingTimeSec = (if activate then holdingTimeSec else 0.0 endif)");
      }
      if (!((__result.self.minIgnitionHoldingTimeSec > 0))) {
        postViolations.push("[EngineControlSystem.commandContinuousIgnition] post violated: self.minIgnitionHoldingTimeSec > 0.0");
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
export type EngineControlSystemCommandContinuousIgnitionAsyncImpl = (self: EngineControlSystem, activate: boolean, holdingTimeSec: number) => Promise<{ self: EngineControlSystem; modified: { continuousIgnitionActive: unknown; ignitionHoldingTimeSec: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.commandContinuousIgnition (async). */
export function wrapEngineControlSystemCommandContinuousIgnitionAsync(impl: EngineControlSystemCommandContinuousIgnitionAsyncImpl): (self: EngineControlSystem, activate: boolean, holdingTimeSec: number) => Promise<EngineControlSystem> {
  return async (self, activate, holdingTimeSec) => {
    const preViolations: string[] = [];
    if (!((holdingTimeSec >= 0))) {
      preViolations.push("[EngineControlSystem.commandContinuousIgnition] pre violated: holdingTimeSec >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, activate, holdingTimeSec);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === activate))) {
        postViolations.push("[EngineControlSystem.commandContinuousIgnition] post violated: self.continuousIgnitionActive = activate");
      }
      if (!((__result.self.ignitionHoldingTimeSec === ((activate) ? (holdingTimeSec) : (0))))) {
        postViolations.push("[EngineControlSystem.commandContinuousIgnition] post violated: self.ignitionHoldingTimeSec = (if activate then holdingTimeSec else 0.0 endif)");
      }
      if (!((__result.self.minIgnitionHoldingTimeSec > 0))) {
        postViolations.push("[EngineControlSystem.commandContinuousIgnition] post violated: self.minIgnitionHoldingTimeSec > 0.0");
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

/** Impl signature for EngineControlSystem.controlThrust. User supplies this. */
export type EngineControlSystemControlThrustImpl = (self: EngineControlSystem, thrust: number) => { self: EngineControlSystem; modified: { thrustCommanded: unknown } };

/** Contract-checking wrapper for EngineControlSystem.controlThrust. */
export function wrapEngineControlSystemControlThrust(impl: EngineControlSystemControlThrustImpl): (self: EngineControlSystem, thrust: number) => EngineControlSystem {
  return (self, thrust) => {
    const preViolations: string[] = [];
    if (!((thrust >= 0))) {
      preViolations.push("[EngineControlSystem.controlThrust] pre violated: thrust >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, thrust);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded === thrust))) {
        postViolations.push("[EngineControlSystem.controlThrust] post violated: self.thrustCommanded = thrust");
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

/** Impl signature for EngineControlSystem.controlThrust (async). User supplies this. */
export type EngineControlSystemControlThrustAsyncImpl = (self: EngineControlSystem, thrust: number) => Promise<{ self: EngineControlSystem; modified: { thrustCommanded: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.controlThrust (async). */
export function wrapEngineControlSystemControlThrustAsync(impl: EngineControlSystemControlThrustAsyncImpl): (self: EngineControlSystem, thrust: number) => Promise<EngineControlSystem> {
  return async (self, thrust) => {
    const preViolations: string[] = [];
    if (!((thrust >= 0))) {
      preViolations.push("[EngineControlSystem.controlThrust] pre violated: thrust >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, thrust);
      const postViolations: string[] = [];
      if (!((__result.self.thrustCommanded === thrust))) {
        postViolations.push("[EngineControlSystem.controlThrust] post violated: self.thrustCommanded = thrust");
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

/** Impl signature for EngineControlSystem.setAircraftState. User supplies this. */
export type EngineControlSystemSetAircraftStateImpl = (self: EngineControlSystem, inFlight: boolean) => { self: EngineControlSystem; modified: { inFlight: unknown; reverserDeploymentAllowed: unknown } };

/** Contract-checking wrapper for EngineControlSystem.setAircraftState. */
export function wrapEngineControlSystemSetAircraftState(impl: EngineControlSystemSetAircraftStateImpl): (self: EngineControlSystem, inFlight: boolean) => EngineControlSystem {
  return (self, inFlight) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.setAircraftState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === inFlight))) {
        postViolations.push("[EngineControlSystem.setAircraftState] post violated: self.inFlight = inFlight");
      }
      if (!(((inFlight) ? ((__result.self.reverserDeploymentAllowed === false)) : ((__result.self.reverserDeploymentAllowed === __result.self.reverseThrustCommanded))))) {
        postViolations.push("[EngineControlSystem.setAircraftState] post violated: if inFlight then\n            self.reverserDeploymentAllowed = false\n          else\n            self.reverserDeploymentAllowed = self.reverseThrustCommanded\n          endif");
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

/** Impl signature for EngineControlSystem.setAircraftState (async). User supplies this. */
export type EngineControlSystemSetAircraftStateAsyncImpl = (self: EngineControlSystem, inFlight: boolean) => Promise<{ self: EngineControlSystem; modified: { inFlight: unknown; reverserDeploymentAllowed: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.setAircraftState (async). */
export function wrapEngineControlSystemSetAircraftStateAsync(impl: EngineControlSystemSetAircraftStateAsyncImpl): (self: EngineControlSystem, inFlight: boolean) => Promise<EngineControlSystem> {
  return async (self, inFlight) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.setAircraftState] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.inFlight === inFlight))) {
        postViolations.push("[EngineControlSystem.setAircraftState] post violated: self.inFlight = inFlight");
      }
      if (!(((inFlight) ? ((__result.self.reverserDeploymentAllowed === false)) : ((__result.self.reverserDeploymentAllowed === __result.self.reverseThrustCommanded))))) {
        postViolations.push("[EngineControlSystem.setAircraftState] post violated: if inFlight then\n            self.reverserDeploymentAllowed = false\n          else\n            self.reverserDeploymentAllowed = self.reverseThrustCommanded\n          endif");
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

/** Impl signature for EngineControlSystem.controlThrustReverser. User supplies this. */
export type EngineControlSystemControlThrustReverserImpl = (self: EngineControlSystem, deploy: boolean) => { self: EngineControlSystem; modified: { reverserDeploymentAllowed: unknown; reverserDeployed: unknown } };

/** Contract-checking wrapper for EngineControlSystem.controlThrustReverser. */
export function wrapEngineControlSystemControlThrustReverser(impl: EngineControlSystemControlThrustReverserImpl): (self: EngineControlSystem, deploy: boolean) => EngineControlSystem {
  return (self, deploy) => {
    const preViolations: string[] = [];
    if (!((!(deploy) || !(self.inFlight)))) {
      preViolations.push("[EngineControlSystem.controlThrustReverser] pre violated: not deploy or (not self.inFlight)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, deploy);
      const postViolations: string[] = [];
      if (!((((deploy && !(__result.self.inFlight))) ? (((__result.self.reverserDeploymentAllowed === true) && (__result.self.reverserDeployed === true))) : (((__result.self.reverserDeploymentAllowed === false) && (__result.self.reverserDeployed === false)))))) {
        postViolations.push("[EngineControlSystem.controlThrustReverser] post violated: if deploy and not self.inFlight then\n            self.reverserDeploymentAllowed = true and self.reverserDeployed = true\n          else\n            self.reverserDeploymentAllowed = false and self.reverserDeployed = false\n          endif");
      }
      if (!((__result.self.groundOnlyDeployment === true))) {
        postViolations.push("[EngineControlSystem.controlThrustReverser] post violated: self.groundOnlyDeployment = true");
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

/** Impl signature for EngineControlSystem.controlThrustReverser (async). User supplies this. */
export type EngineControlSystemControlThrustReverserAsyncImpl = (self: EngineControlSystem, deploy: boolean) => Promise<{ self: EngineControlSystem; modified: { reverserDeploymentAllowed: unknown; reverserDeployed: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.controlThrustReverser (async). */
export function wrapEngineControlSystemControlThrustReverserAsync(impl: EngineControlSystemControlThrustReverserAsyncImpl): (self: EngineControlSystem, deploy: boolean) => Promise<EngineControlSystem> {
  return async (self, deploy) => {
    const preViolations: string[] = [];
    if (!((!(deploy) || !(self.inFlight)))) {
      preViolations.push("[EngineControlSystem.controlThrustReverser] pre violated: not deploy or (not self.inFlight)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, deploy);
      const postViolations: string[] = [];
      if (!((((deploy && !(__result.self.inFlight))) ? (((__result.self.reverserDeploymentAllowed === true) && (__result.self.reverserDeployed === true))) : (((__result.self.reverserDeploymentAllowed === false) && (__result.self.reverserDeployed === false)))))) {
        postViolations.push("[EngineControlSystem.controlThrustReverser] post violated: if deploy and not self.inFlight then\n            self.reverserDeploymentAllowed = true and self.reverserDeployed = true\n          else\n            self.reverserDeploymentAllowed = false and self.reverserDeployed = false\n          endif");
      }
      if (!((__result.self.groundOnlyDeployment === true))) {
        postViolations.push("[EngineControlSystem.controlThrustReverser] post violated: self.groundOnlyDeployment = true");
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

/** Impl signature for EngineControlSystem.useModelledValue. User supplies this. */
export type EngineControlSystemUseModelledValueImpl = (self: EngineControlSystem, modelledValue: number) => { self: EngineControlSystem; modified: { modelledValue: unknown; modelledValueActive: unknown } };

/** Contract-checking wrapper for EngineControlSystem.useModelledValue. */
export function wrapEngineControlSystemUseModelledValue(impl: EngineControlSystemUseModelledValueImpl): (self: EngineControlSystem, modelledValue: number) => EngineControlSystem {
  return (self, modelledValue) => {
    const preViolations: string[] = [];
    if (!((self.consecutiveSensorFaults >= self.maxConsecutiveFaults))) {
      preViolations.push("[EngineControlSystem.useModelledValue] pre violated: self.consecutiveSensorFaults >= self.maxConsecutiveFaults");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, modelledValue);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValue === modelledValue))) {
        postViolations.push("[EngineControlSystem.useModelledValue] post violated: self.modelledValue = modelledValue");
      }
      if (!((__result.self.modelledValueActive === true))) {
        postViolations.push("[EngineControlSystem.useModelledValue] post violated: self.modelledValueActive = true");
      }
      if (!((__result.self.maxConsecutiveFaults > 0))) {
        postViolations.push("[EngineControlSystem.useModelledValue] post violated: self.maxConsecutiveFaults > 0");
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

/** Impl signature for EngineControlSystem.useModelledValue (async). User supplies this. */
export type EngineControlSystemUseModelledValueAsyncImpl = (self: EngineControlSystem, modelledValue: number) => Promise<{ self: EngineControlSystem; modified: { modelledValue: unknown; modelledValueActive: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.useModelledValue (async). */
export function wrapEngineControlSystemUseModelledValueAsync(impl: EngineControlSystemUseModelledValueAsyncImpl): (self: EngineControlSystem, modelledValue: number) => Promise<EngineControlSystem> {
  return async (self, modelledValue) => {
    const preViolations: string[] = [];
    if (!((self.consecutiveSensorFaults >= self.maxConsecutiveFaults))) {
      preViolations.push("[EngineControlSystem.useModelledValue] pre violated: self.consecutiveSensorFaults >= self.maxConsecutiveFaults");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, modelledValue);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValue === modelledValue))) {
        postViolations.push("[EngineControlSystem.useModelledValue] post violated: self.modelledValue = modelledValue");
      }
      if (!((__result.self.modelledValueActive === true))) {
        postViolations.push("[EngineControlSystem.useModelledValue] post violated: self.modelledValueActive = true");
      }
      if (!((__result.self.maxConsecutiveFaults > 0))) {
        postViolations.push("[EngineControlSystem.useModelledValue] post violated: self.maxConsecutiveFaults > 0");
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

/** Impl signature for EngineControlSystem.handleSensorFault. User supplies this. */
export type EngineControlSystemHandleSensorFaultImpl = (self: EngineControlSystem, faultDetected: boolean) => { self: EngineControlSystem; modified: { consecutiveSensorFaults: unknown; sensorFaultDetected: unknown } };

/** Contract-checking wrapper for EngineControlSystem.handleSensorFault. */
export function wrapEngineControlSystemHandleSensorFault(impl: EngineControlSystemHandleSensorFaultImpl): (self: EngineControlSystem, faultDetected: boolean) => EngineControlSystem {
  return (self, faultDetected) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.handleSensorFault] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.consecutiveSensorFaults": self.consecutiveSensorFaults,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultDetected);
      const postViolations: string[] = [];
      if (!(((faultDetected) ? ((__result.self.consecutiveSensorFaults === (__pre["self.consecutiveSensorFaults"] + 1))) : ((__result.self.consecutiveSensorFaults === 0))))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: if faultDetected then\n            self.consecutiveSensorFaults = self.consecutiveSensorFaults@pre + 1\n          else\n            self.consecutiveSensorFaults = 0\n          endif");
      }
      if (!((__result.self.sensorFaultDetected === faultDetected))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: self.sensorFaultDetected = faultDetected");
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

/** Impl signature for EngineControlSystem.handleSensorFault (async). User supplies this. */
export type EngineControlSystemHandleSensorFaultAsyncImpl = (self: EngineControlSystem, faultDetected: boolean) => Promise<{ self: EngineControlSystem; modified: { consecutiveSensorFaults: unknown; sensorFaultDetected: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.handleSensorFault (async). */
export function wrapEngineControlSystemHandleSensorFaultAsync(impl: EngineControlSystemHandleSensorFaultAsyncImpl): (self: EngineControlSystem, faultDetected: boolean) => Promise<EngineControlSystem> {
  return async (self, faultDetected) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.handleSensorFault] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.consecutiveSensorFaults": self.consecutiveSensorFaults,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultDetected);
      const postViolations: string[] = [];
      if (!(((faultDetected) ? ((__result.self.consecutiveSensorFaults === (__pre["self.consecutiveSensorFaults"] + 1))) : ((__result.self.consecutiveSensorFaults === 0))))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: if faultDetected then\n            self.consecutiveSensorFaults = self.consecutiveSensorFaults@pre + 1\n          else\n            self.consecutiveSensorFaults = 0\n          endif");
      }
      if (!((__result.self.sensorFaultDetected === faultDetected))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: self.sensorFaultDetected = faultDetected");
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

/** Impl signature for EngineControlSystemFormalized.guardOverspeedFuelLimit. User supplies this. */
export type EngineControlSystemFormalizedGuardOverspeedFuelLimitImpl = (self: EngineControlSystemFormalized, reportedSpeedRpm: number) => { self: EngineControlSystemFormalized; modified: { fuelLimited: unknown; overspeedDetected: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.guardOverspeedFuelLimit. */
export function wrapEngineControlSystemFormalizedGuardOverspeedFuelLimit(impl: EngineControlSystemFormalizedGuardOverspeedFuelLimitImpl): (self: EngineControlSystemFormalized, reportedSpeedRpm: number) => EngineControlSystemFormalized {
  return (self, reportedSpeedRpm) => {
    const preViolations: string[] = [];
    if (!((reportedSpeedRpm >= 0))) {
      preViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] pre violated: reportedSpeedRpm >= 0.0");
    }
    if (!(self.overspeedProtectionFitted)) {
      preViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] pre violated: self.overspeedProtectionFitted");
    }
    if (!((reportedSpeedRpm > self.safeMaxSpeedRpm))) {
      preViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] pre violated: reportedSpeedRpm > self.safeMaxSpeedRpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.fuelFlowRate": self.fuelFlowRate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reportedSpeedRpm);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimited === true))) {
        postViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] post violated: self.fuelLimited = true");
      }
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] post violated: self.overspeedDetected = true");
      }
      if (!((__result.self.fuelFlowRate <= __pre["self.fuelFlowRate"]))) {
        postViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] post violated: self.fuelFlowRate <= self.fuelFlowRate@pre");
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

/** Impl signature for EngineControlSystemFormalized.guardOverspeedFuelLimit (async). User supplies this. */
export type EngineControlSystemFormalizedGuardOverspeedFuelLimitAsyncImpl = (self: EngineControlSystemFormalized, reportedSpeedRpm: number) => Promise<{ self: EngineControlSystemFormalized; modified: { fuelLimited: unknown; overspeedDetected: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.guardOverspeedFuelLimit (async). */
export function wrapEngineControlSystemFormalizedGuardOverspeedFuelLimitAsync(impl: EngineControlSystemFormalizedGuardOverspeedFuelLimitAsyncImpl): (self: EngineControlSystemFormalized, reportedSpeedRpm: number) => Promise<EngineControlSystemFormalized> {
  return async (self, reportedSpeedRpm) => {
    const preViolations: string[] = [];
    if (!((reportedSpeedRpm >= 0))) {
      preViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] pre violated: reportedSpeedRpm >= 0.0");
    }
    if (!(self.overspeedProtectionFitted)) {
      preViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] pre violated: self.overspeedProtectionFitted");
    }
    if (!((reportedSpeedRpm > self.safeMaxSpeedRpm))) {
      preViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] pre violated: reportedSpeedRpm > self.safeMaxSpeedRpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.fuelFlowRate": self.fuelFlowRate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reportedSpeedRpm);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimited === true))) {
        postViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] post violated: self.fuelLimited = true");
      }
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] post violated: self.overspeedDetected = true");
      }
      if (!((__result.self.fuelFlowRate <= __pre["self.fuelFlowRate"]))) {
        postViolations.push("[EngineControlSystemFormalized.guardOverspeedFuelLimit] post violated: self.fuelFlowRate <= self.fuelFlowRate@pre");
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

/** Impl signature for EngineControlSystemFormalized.rejectImplausibleSensorReading. User supplies this. */
export type EngineControlSystemFormalizedRejectImplausibleSensorReadingImpl = (self: EngineControlSystemFormalized, readingRpm: number) => { self: EngineControlSystemFormalized; modified: {} };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectImplausibleSensorReading. */
export function wrapEngineControlSystemFormalizedRejectImplausibleSensorReading(impl: EngineControlSystemFormalizedRejectImplausibleSensorReadingImpl): (self: EngineControlSystemFormalized, readingRpm: number) => EngineControlSystemFormalized {
  return (self, readingRpm) => {
    const preViolations: string[] = [];
    if (!(((readingRpm < 0) || (readingRpm > 18000)))) {
      preViolations.push("[EngineControlSystemFormalized.rejectImplausibleSensorReading] pre violated: readingRpm < 0.0 or readingRpm > 18000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, readingRpm);
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

/** Impl signature for EngineControlSystemFormalized.rejectImplausibleSensorReading (async). User supplies this. */
export type EngineControlSystemFormalizedRejectImplausibleSensorReadingAsyncImpl = (self: EngineControlSystemFormalized, readingRpm: number) => Promise<{ self: EngineControlSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectImplausibleSensorReading (async). */
export function wrapEngineControlSystemFormalizedRejectImplausibleSensorReadingAsync(impl: EngineControlSystemFormalizedRejectImplausibleSensorReadingAsyncImpl): (self: EngineControlSystemFormalized, readingRpm: number) => Promise<EngineControlSystemFormalized> {
  return async (self, readingRpm) => {
    const preViolations: string[] = [];
    if (!(((readingRpm < 0) || (readingRpm > 18000)))) {
      preViolations.push("[EngineControlSystemFormalized.rejectImplausibleSensorReading] pre violated: readingRpm < 0.0 or readingRpm > 18000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, readingRpm);
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

/** Impl signature for EngineControlSystemFormalized.rejectInFlightReverserCommand. User supplies this. */
export type EngineControlSystemFormalizedRejectInFlightReverserCommandImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: {} };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectInFlightReverserCommand. */
export function wrapEngineControlSystemFormalizedRejectInFlightReverserCommand(impl: EngineControlSystemFormalizedRejectInFlightReverserCommandImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.inFlight)) {
      preViolations.push("[EngineControlSystemFormalized.rejectInFlightReverserCommand] pre violated: self.inFlight");
    }
    if (!((self.reverseThrustCommanded === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectInFlightReverserCommand] pre violated: self.reverseThrustCommanded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for EngineControlSystemFormalized.rejectInFlightReverserCommand (async). User supplies this. */
export type EngineControlSystemFormalizedRejectInFlightReverserCommandAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectInFlightReverserCommand (async). */
export function wrapEngineControlSystemFormalizedRejectInFlightReverserCommandAsync(impl: EngineControlSystemFormalizedRejectInFlightReverserCommandAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.inFlight)) {
      preViolations.push("[EngineControlSystemFormalized.rejectInFlightReverserCommand] pre violated: self.inFlight");
    }
    if (!((self.reverseThrustCommanded === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectInFlightReverserCommand] pre violated: self.reverseThrustCommanded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for EngineControlSystemFormalized.recordOverspeedViolation. User supplies this. */
export type EngineControlSystemFormalizedRecordOverspeedViolationImpl = (self: EngineControlSystemFormalized, reportedSpeedRpm: number) => { self: EngineControlSystemFormalized; modified: { overspeedDetected: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.recordOverspeedViolation. */
export function wrapEngineControlSystemFormalizedRecordOverspeedViolation(impl: EngineControlSystemFormalizedRecordOverspeedViolationImpl): (self: EngineControlSystemFormalized, reportedSpeedRpm: number) => EngineControlSystemFormalized {
  return (self, reportedSpeedRpm) => {
    const preViolations: string[] = [];
    if (!((reportedSpeedRpm > self.safeMaxSpeedRpm))) {
      preViolations.push("[EngineControlSystemFormalized.recordOverspeedViolation] pre violated: reportedSpeedRpm > self.safeMaxSpeedRpm");
    }
    if (!(!(self.overspeedProtectionFitted))) {
      preViolations.push("[EngineControlSystemFormalized.recordOverspeedViolation] pre violated: not self.overspeedProtectionFitted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reportedSpeedRpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[EngineControlSystemFormalized.recordOverspeedViolation] post violated: self.overspeedDetected = true");
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

/** Impl signature for EngineControlSystemFormalized.recordOverspeedViolation (async). User supplies this. */
export type EngineControlSystemFormalizedRecordOverspeedViolationAsyncImpl = (self: EngineControlSystemFormalized, reportedSpeedRpm: number) => Promise<{ self: EngineControlSystemFormalized; modified: { overspeedDetected: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.recordOverspeedViolation (async). */
export function wrapEngineControlSystemFormalizedRecordOverspeedViolationAsync(impl: EngineControlSystemFormalizedRecordOverspeedViolationAsyncImpl): (self: EngineControlSystemFormalized, reportedSpeedRpm: number) => Promise<EngineControlSystemFormalized> {
  return async (self, reportedSpeedRpm) => {
    const preViolations: string[] = [];
    if (!((reportedSpeedRpm > self.safeMaxSpeedRpm))) {
      preViolations.push("[EngineControlSystemFormalized.recordOverspeedViolation] pre violated: reportedSpeedRpm > self.safeMaxSpeedRpm");
    }
    if (!(!(self.overspeedProtectionFitted))) {
      preViolations.push("[EngineControlSystemFormalized.recordOverspeedViolation] pre violated: not self.overspeedProtectionFitted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reportedSpeedRpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[EngineControlSystemFormalized.recordOverspeedViolation] post violated: self.overspeedDetected = true");
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

/** Impl signature for EngineControlSystemFormalized.clampFuelFlowToMax. User supplies this. */
export type EngineControlSystemFormalizedClampFuelFlowToMaxImpl = (self: EngineControlSystemFormalized, commandedThrust: number, requiredFuelFlow: number) => { self: EngineControlSystemFormalized; modified: { fuelFlowRate: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.clampFuelFlowToMax. */
export function wrapEngineControlSystemFormalizedClampFuelFlowToMax(impl: EngineControlSystemFormalizedClampFuelFlowToMaxImpl): (self: EngineControlSystemFormalized, commandedThrust: number, requiredFuelFlow: number) => EngineControlSystemFormalized {
  return (self, commandedThrust, requiredFuelFlow) => {
    const preViolations: string[] = [];
    if (!((requiredFuelFlow > 5000))) {
      preViolations.push("[EngineControlSystemFormalized.clampFuelFlowToMax] pre violated: requiredFuelFlow > 5000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.thrustCommanded": self.thrustCommanded,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commandedThrust, requiredFuelFlow);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlowRate === 5000))) {
        postViolations.push("[EngineControlSystemFormalized.clampFuelFlowToMax] post violated: self.fuelFlowRate = 5000.0");
      }
      if (!((__result.self.thrustCommanded === __pre["self.thrustCommanded"]))) {
        postViolations.push("[EngineControlSystemFormalized.clampFuelFlowToMax] post violated: self.thrustCommanded = self.thrustCommanded@pre");
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

/** Impl signature for EngineControlSystemFormalized.clampFuelFlowToMax (async). User supplies this. */
export type EngineControlSystemFormalizedClampFuelFlowToMaxAsyncImpl = (self: EngineControlSystemFormalized, commandedThrust: number, requiredFuelFlow: number) => Promise<{ self: EngineControlSystemFormalized; modified: { fuelFlowRate: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.clampFuelFlowToMax (async). */
export function wrapEngineControlSystemFormalizedClampFuelFlowToMaxAsync(impl: EngineControlSystemFormalizedClampFuelFlowToMaxAsyncImpl): (self: EngineControlSystemFormalized, commandedThrust: number, requiredFuelFlow: number) => Promise<EngineControlSystemFormalized> {
  return async (self, commandedThrust, requiredFuelFlow) => {
    const preViolations: string[] = [];
    if (!((requiredFuelFlow > 5000))) {
      preViolations.push("[EngineControlSystemFormalized.clampFuelFlowToMax] pre violated: requiredFuelFlow > 5000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.thrustCommanded": self.thrustCommanded,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commandedThrust, requiredFuelFlow);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlowRate === 5000))) {
        postViolations.push("[EngineControlSystemFormalized.clampFuelFlowToMax] post violated: self.fuelFlowRate = 5000.0");
      }
      if (!((__result.self.thrustCommanded === __pre["self.thrustCommanded"]))) {
        postViolations.push("[EngineControlSystemFormalized.clampFuelFlowToMax] post violated: self.thrustCommanded = self.thrustCommanded@pre");
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

/** Impl signature for EngineControlSystemFormalized.enforceIgnitionHoldingPeriod. User supplies this. */
export type EngineControlSystemFormalizedEnforceIgnitionHoldingPeriodImpl = (self: EngineControlSystemFormalized, commandDeactivate: boolean) => { self: EngineControlSystemFormalized; modified: {} };

/** Contract-checking wrapper for EngineControlSystemFormalized.enforceIgnitionHoldingPeriod. */
export function wrapEngineControlSystemFormalizedEnforceIgnitionHoldingPeriod(impl: EngineControlSystemFormalizedEnforceIgnitionHoldingPeriodImpl): (self: EngineControlSystemFormalized, commandDeactivate: boolean) => EngineControlSystemFormalized {
  return (self, commandDeactivate) => {
    const preViolations: string[] = [];
    if (!((commandDeactivate === true))) {
      preViolations.push("[EngineControlSystemFormalized.enforceIgnitionHoldingPeriod] pre violated: commandDeactivate = true");
    }
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[EngineControlSystemFormalized.enforceIgnitionHoldingPeriod] pre violated: self.continuousIgnitionActive = true");
    }
    if (!((self.ignitionHoldingTimeSec > 0))) {
      preViolations.push("[EngineControlSystemFormalized.enforceIgnitionHoldingPeriod] pre violated: self.ignitionHoldingTimeSec > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commandDeactivate);
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

/** Impl signature for EngineControlSystemFormalized.enforceIgnitionHoldingPeriod (async). User supplies this. */
export type EngineControlSystemFormalizedEnforceIgnitionHoldingPeriodAsyncImpl = (self: EngineControlSystemFormalized, commandDeactivate: boolean) => Promise<{ self: EngineControlSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.enforceIgnitionHoldingPeriod (async). */
export function wrapEngineControlSystemFormalizedEnforceIgnitionHoldingPeriodAsync(impl: EngineControlSystemFormalizedEnforceIgnitionHoldingPeriodAsyncImpl): (self: EngineControlSystemFormalized, commandDeactivate: boolean) => Promise<EngineControlSystemFormalized> {
  return async (self, commandDeactivate) => {
    const preViolations: string[] = [];
    if (!((commandDeactivate === true))) {
      preViolations.push("[EngineControlSystemFormalized.enforceIgnitionHoldingPeriod] pre violated: commandDeactivate = true");
    }
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[EngineControlSystemFormalized.enforceIgnitionHoldingPeriod] pre violated: self.continuousIgnitionActive = true");
    }
    if (!((self.ignitionHoldingTimeSec > 0))) {
      preViolations.push("[EngineControlSystemFormalized.enforceIgnitionHoldingPeriod] pre violated: self.ignitionHoldingTimeSec > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commandDeactivate);
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

/** Impl signature for EngineControlSystemFormalized.verifyAssumptionCompliance. User supplies this. */
export type EngineControlSystemFormalizedVerifyAssumptionComplianceImpl = (self: EngineControlSystemFormalized, recordId: FormalAssumptionRecord) => { self: EngineControlSystemFormalized; modified: {} };

/** Contract-checking wrapper for EngineControlSystemFormalized.verifyAssumptionCompliance. */
export function wrapEngineControlSystemFormalizedVerifyAssumptionCompliance(impl: EngineControlSystemFormalizedVerifyAssumptionComplianceImpl): (self: EngineControlSystemFormalized, recordId: FormalAssumptionRecord) => EngineControlSystemFormalized {
  return (self, recordId) => {
    const preViolations: string[] = [];
    if (!((recordId !== null))) {
      preViolations.push("[EngineControlSystemFormalized.verifyAssumptionCompliance] pre violated: recordId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, recordId);
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

/** Impl signature for EngineControlSystemFormalized.verifyAssumptionCompliance (async). User supplies this. */
export type EngineControlSystemFormalizedVerifyAssumptionComplianceAsyncImpl = (self: EngineControlSystemFormalized, recordId: FormalAssumptionRecord) => Promise<{ self: EngineControlSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.verifyAssumptionCompliance (async). */
export function wrapEngineControlSystemFormalizedVerifyAssumptionComplianceAsync(impl: EngineControlSystemFormalizedVerifyAssumptionComplianceAsyncImpl): (self: EngineControlSystemFormalized, recordId: FormalAssumptionRecord) => Promise<EngineControlSystemFormalized> {
  return async (self, recordId) => {
    const preViolations: string[] = [];
    if (!((recordId !== null))) {
      preViolations.push("[EngineControlSystemFormalized.verifyAssumptionCompliance] pre violated: recordId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, recordId);
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

/** Lifecycle registry for OverspeedProtectionCommitment commitments. */
export class OverspeedProtectionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<OverspeedProtectionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a OverspeedProtectionCommitment — the typed wrapper guarantees that since
    // `register` only accepts OverspeedProtectionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: OverspeedProtectionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: OverspeedProtectionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: OverspeedProtectionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: OverspeedProtectionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<OverspeedProtectionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<OverspeedProtectionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for SensorFaultToleranceCommitment commitments. */
export class SensorFaultToleranceCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SensorFaultToleranceCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SensorFaultToleranceCommitment — the typed wrapper guarantees that since
    // `register` only accepts SensorFaultToleranceCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SensorFaultToleranceCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SensorFaultToleranceCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SensorFaultToleranceCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SensorFaultToleranceCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SensorFaultToleranceCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SensorFaultToleranceCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for IgnitionThrustControlCommitment commitments. */
export class IgnitionThrustControlCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<IgnitionThrustControlCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a IgnitionThrustControlCommitment — the typed wrapper guarantees that since
    // `register` only accepts IgnitionThrustControlCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: IgnitionThrustControlCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: IgnitionThrustControlCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: IgnitionThrustControlCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: IgnitionThrustControlCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<IgnitionThrustControlCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<IgnitionThrustControlCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ThrustReverserGroundOnlyCommitment commitments. */
export class ThrustReverserGroundOnlyCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ThrustReverserGroundOnlyCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ThrustReverserGroundOnlyCommitment — the typed wrapper guarantees that since
    // `register` only accepts ThrustReverserGroundOnlyCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ThrustReverserGroundOnlyCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ThrustReverserGroundOnlyCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ThrustReverserGroundOnlyCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ThrustReverserGroundOnlyCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ThrustReverserGroundOnlyCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ThrustReverserGroundOnlyCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

