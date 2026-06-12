// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for OverspeedProtectionUnit. Runtime: string. Compile-time: branded. */
export type OverspeedProtectionUnitId = string & { readonly __brand: "OverspeedProtectionUnitId" };
/** Identity type for IgnitionThrustController. Runtime: string. Compile-time: branded. */
export type IgnitionThrustControllerId = string & { readonly __brand: "IgnitionThrustControllerId" };
/** Identity type for SensorFaultManager. Runtime: string. Compile-time: branded. */
export type SensorFaultManagerId = string & { readonly __brand: "SensorFaultManagerId" };
/** Identity type for FlightPhaseMonitor. Runtime: string. Compile-time: branded. */
export type FlightPhaseMonitorId = string & { readonly __brand: "FlightPhaseMonitorId" };
/** Identity type for SpeedBus. Runtime: string. Compile-time: branded. */
export type SpeedBusId = string & { readonly __brand: "SpeedBusId" };
/** Identity type for FaultSignalBus. Runtime: string. Compile-time: branded. */
export type FaultSignalBusId = string & { readonly __brand: "FaultSignalBusId" };
/** Identity type for ThrustBus. Runtime: string. Compile-time: branded. */
export type ThrustBusId = string & { readonly __brand: "ThrustBusId" };
/** Identity type for ReverserBus. Runtime: string. Compile-time: branded. */
export type ReverserBusId = string & { readonly __brand: "ReverserBusId" };
/** Identity type for OverspeedDetectionDataFlow. Runtime: string. Compile-time: branded. */
export type OverspeedDetectionDataFlowId = string & { readonly __brand: "OverspeedDetectionDataFlowId" };
/** Identity type for SensorFaultSubstitutionDataFlow. Runtime: string. Compile-time: branded. */
export type SensorFaultSubstitutionDataFlowId = string & { readonly __brand: "SensorFaultSubstitutionDataFlowId" };
/** Identity type for Engine. Runtime: string. Compile-time: branded. */
export type EngineId = string & { readonly __brand: "EngineId" };
/** Identity type for Sensor. Runtime: string. Compile-time: branded. */
export type SensorId = string & { readonly __brand: "SensorId" };
/** Identity type for ModelledValue. Runtime: string. Compile-time: branded. */
export type ModelledValueId = string & { readonly __brand: "ModelledValueId" };
/** Identity type for OverspeedEvent. Runtime: string. Compile-time: branded. */
export type OverspeedEventId = string & { readonly __brand: "OverspeedEventId" };
/** Identity type for ThrustReverser. Runtime: string. Compile-time: branded. */
export type ThrustReverserId = string & { readonly __brand: "ThrustReverserId" };
/** Identity type for IgnitionMode. Runtime: string. Compile-time: branded. */
export type IgnitionModeId = string & { readonly __brand: "IgnitionModeId" };
/** Identity type for Pilot. Runtime: string. Compile-time: branded. */
export type PilotId = string & { readonly __brand: "PilotId" };
/** Identity type for AircraftOperator. Runtime: string. Compile-time: branded. */
export type AircraftOperatorId = string & { readonly __brand: "AircraftOperatorId" };
/** Identity type for CertificationAuthority. Runtime: string. Compile-time: branded. */
export type CertificationAuthorityId = string & { readonly __brand: "CertificationAuthorityId" };
/** Identity type for MaintenanceEngineer. Runtime: string. Compile-time: branded. */
export type MaintenanceEngineerId = string & { readonly __brand: "MaintenanceEngineerId" };
/** Identity type for EngineControlVendor. Runtime: string. Compile-time: branded. */
export type EngineControlVendorId = string & { readonly __brand: "EngineControlVendorId" };
/** Identity type for OverspeedProtectionCommitment. Runtime: string. Compile-time: branded. */
export type OverspeedProtectionCommitmentId = string & { readonly __brand: "OverspeedProtectionCommitmentId" };
/** Identity type for FuelLimitOnOverspeedCommitment. Runtime: string. Compile-time: branded. */
export type FuelLimitOnOverspeedCommitmentId = string & { readonly __brand: "FuelLimitOnOverspeedCommitmentId" };
/** Identity type for ContinuousIgnitionCommitment. Runtime: string. Compile-time: branded. */
export type ContinuousIgnitionCommitmentId = string & { readonly __brand: "ContinuousIgnitionCommitmentId" };
/** Identity type for ThrustHoldInFlightCommitment. Runtime: string. Compile-time: branded. */
export type ThrustHoldInFlightCommitmentId = string & { readonly __brand: "ThrustHoldInFlightCommitmentId" };
/** Identity type for ThrustReverserGroundOnlyCommitment. Runtime: string. Compile-time: branded. */
export type ThrustReverserGroundOnlyCommitmentId = string & { readonly __brand: "ThrustReverserGroundOnlyCommitmentId" };
/** Identity type for SensorFaultToleranceCommitment. Runtime: string. Compile-time: branded. */
export type SensorFaultToleranceCommitmentId = string & { readonly __brand: "SensorFaultToleranceCommitmentId" };
/** Identity type for EngineControlVisionCommitment. Runtime: string. Compile-time: branded. */
export type EngineControlVisionCommitmentId = string & { readonly __brand: "EngineControlVisionCommitmentId" };
/** Identity type for OverspeedDetectionFlow. Runtime: string. Compile-time: branded. */
export type OverspeedDetectionFlowId = string & { readonly __brand: "OverspeedDetectionFlowId" };
/** Identity type for SensorFaultHandlingFlow. Runtime: string. Compile-time: branded. */
export type SensorFaultHandlingFlowId = string & { readonly __brand: "SensorFaultHandlingFlowId" };
/** Identity type for ThrustReverserDeploymentFlow. Runtime: string. Compile-time: branded. */
export type ThrustReverserDeploymentFlowId = string & { readonly __brand: "ThrustReverserDeploymentFlowId" };
/** Identity type for ContinuousIgnitionActivationFlow. Runtime: string. Compile-time: branded. */
export type ContinuousIgnitionActivationFlowId = string & { readonly __brand: "ContinuousIgnitionActivationFlowId" };
/** Identity type for EngineControlSystem. Runtime: string. Compile-time: branded. */
export type EngineControlSystemId = string & { readonly __brand: "EngineControlSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
/** Identity type for EngineBinding. Runtime: string. Compile-time: branded. */
export type EngineBindingId = string & { readonly __brand: "EngineBindingId" };
/** Identity type for SensorBinding. Runtime: string. Compile-time: branded. */
export type SensorBindingId = string & { readonly __brand: "SensorBindingId" };

// ─── Interfaces ───

/** @stereotype <<Role>> */
export interface SpeedProducer {
  readonly unitId: string;
}

/** @stereotype <<Role>> */
export interface SpeedConsumer {
  readonly unitId: string;
}

/** @stereotype <<Role>> */
export interface FaultSignalSource {
  readonly unitId: string;
}

/** @stereotype <<Role>> */
export interface FaultSignalSink {
  readonly unitId: string;
}

/** @stereotype <<Role>> */
export interface ThrustCommander {
  readonly unitId: string;
}

/** @stereotype <<Role>> */
export interface PhaseOracleForThrust {
  readonly unitId: string;
}

/** @stereotype <<Role>> */
export interface ReverserController {
  readonly unitId: string;
}

/** @stereotype <<Role>> */
export interface PhaseOracleForReverser {
  readonly unitId: string;
}

/** @stereotype <<Kind>> */
export interface OverspeedProtectionUnit {
  readonly unitId: OverspeedProtectionUnitId;
  readonly engineSpeed: number;
  readonly maxSafeSpeed: number;
  readonly fuelFlow: number;
  readonly overspeedProtectionFitted: boolean;
  readonly unprotectedOverspeedAlertIssued: boolean;
}

/** @stereotype <<Kind>> */
export interface IgnitionThrustController {
  readonly unitId: IgnitionThrustControllerId;
  readonly continuousIgnitionActive: boolean;
  readonly commandedThrust: number;
  readonly reverserDeploymentEnabled: boolean;
  readonly reverserInFlightAttemptRejected: boolean;
  readonly aircraftInFlight: boolean;
  readonly sensorFaultActive: boolean;
  readonly modelledValueSubstituted: boolean;
}

/** @stereotype <<Kind>> */
export interface SensorFaultManager {
  readonly unitId: SensorFaultManagerId;
  readonly sensorFaultDetected: boolean;
  readonly usingModelledValue: boolean;
  readonly modelledSpeedValue: number;
}

/** @stereotype <<Kind>> */
export interface FlightPhaseMonitor {
  readonly unitId: FlightPhaseMonitorId;
  readonly aircraftInFlight: boolean;
  readonly weightOnWheelsDiscrete: boolean;
}

/** @stereotype <<Relator>> */
export interface SpeedBus {
  readonly busId: SpeedBusId;
  readonly effectiveSpeed: number;
  readonly isModelled: boolean;
  readonly faultFlagFromConsumer: boolean;
}

/** @stereotype <<Relator>> */
export interface FaultSignalBus {
  readonly busId: FaultSignalBusId;
  readonly faultActive: boolean;
  readonly substitutionActive: boolean;
}

/** @stereotype <<Relator>> */
export interface ThrustBus {
  readonly busId: ThrustBusId;
  readonly publishedInFlight: boolean;
  readonly sequenceNumber: number;
}

/** @stereotype <<Relator>> */
export interface ReverserBus {
  readonly busId: ReverserBusId;
  readonly publishedInFlight: boolean;
  readonly sequenceNumber: number;
}

/** @stereotype <<Happening>> */
export interface OverspeedDetectionDataFlow {
  readonly flowId: OverspeedDetectionDataFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SensorFaultSubstitutionDataFlow {
  readonly flowId: SensorFaultSubstitutionDataFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface Engine {
  readonly engineId: EngineId;
  readonly rotationalSpeed: number;
  readonly maxSafeSpeed: number;
  readonly fuelFlow: number;
  readonly variant: string;
}

/** @stereotype <<Kind>> */
export interface Sensor {
  readonly sensorId: SensorId;
  readonly sensorType: string;
  readonly isFaulty: boolean;
  readonly lastReading: number;
}

/** @stereotype <<Kind>> */
export interface ModelledValue {
  readonly modelledValueId: ModelledValueId;
  readonly associatedSensorType: string;
  readonly estimatedValue: number;
}

/** @stereotype <<Kind>> */
export interface OverspeedEvent {
  readonly overspeedEventId: OverspeedEventId;
  readonly detectedSpeed: number;
  readonly engineRef: Engine;
}

/** @stereotype <<Kind>> */
export interface ThrustReverser {
  readonly reverserId: ThrustReverserId;
  readonly deploymentEnabled: boolean;
  readonly aircraftOnGround: boolean;
}

/** @stereotype <<Kind>> */
export interface IgnitionMode {
  readonly ignitionModeId: IgnitionModeId;
  readonly ignitionModeName: string;
  readonly active: boolean;
}

/** @stereotype <<Agent>> */
export interface Pilot {
  readonly pilotId: PilotId;
  readonly name: string;
  readonly licenseType: string;
}

/** @stereotype <<Agent>> */
export interface AircraftOperator {
  readonly operatorId: AircraftOperatorId;
  readonly name: string;
  readonly operatingCertificate: string;
}

/** @stereotype <<Agent>> */
export interface CertificationAuthority {
  readonly authorityId: CertificationAuthorityId;
  readonly name: string;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface MaintenanceEngineer {
  readonly engineerId: MaintenanceEngineerId;
  readonly name: string;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface EngineControlVendor {
  readonly vendorId: EngineControlVendorId;
  readonly name: string;
  readonly organizationCode: string;
}

/** @stereotype <<Category>> */
export interface OverspeedSafetyConstraints {
}

/** @stereotype <<Category>> */
export interface SensorFaultToleranceConstraints {
}

/** @stereotype <<Category>> */
export interface FlightPhaseOperationalConstraints {
}

/** @stereotype <<Commitment>> */
export interface OverspeedProtectionCommitment {
  readonly commitmentId: OverspeedProtectionCommitmentId;
  readonly certifiedMaxSpeedLimit: number;
}

/** @stereotype <<Commitment>> */
export interface FuelLimitOnOverspeedCommitment {
  readonly commitmentId: FuelLimitOnOverspeedCommitmentId;
  readonly overspeedFuelLimitThreshold: number;
}

/** @stereotype <<Commitment>> */
export interface ContinuousIgnitionCommitment {
  readonly commitmentId: ContinuousIgnitionCommitmentId;
  readonly ignitionResponseMaxLatencyMs: number;
}

/** @stereotype <<Commitment>> */
export interface ThrustHoldInFlightCommitment {
  readonly commitmentId: ThrustHoldInFlightCommitmentId;
  readonly thrustDeviationTolerancePct: number;
}

/** @stereotype <<Commitment>> */
export interface ThrustReverserGroundOnlyCommitment {
  readonly commitmentId: ThrustReverserGroundOnlyCommitmentId;
  readonly minGroundConfidence: number;
}

/** @stereotype <<Commitment>> */
export interface SensorFaultToleranceCommitment {
  readonly commitmentId: SensorFaultToleranceCommitmentId;
  readonly maxToleratedSensorFaults: number;
}

/** @stereotype <<Commitment>> */
export interface EngineControlVisionCommitment {
  readonly commitmentId: EngineControlVisionCommitmentId;
  readonly targetStandard: string;
  readonly safetyIntegrityLevel: string;
}

/** @stereotype <<Happening>> */
export interface OverspeedDetectionFlow {
  readonly flowId: OverspeedDetectionFlowId;
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
export interface ThrustReverserDeploymentFlow {
  readonly flowId: ThrustReverserDeploymentFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ContinuousIgnitionActivationFlow {
  readonly flowId: ContinuousIgnitionActivationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface EngineControlSystem extends OverspeedSafetyConstraints, SensorFaultToleranceConstraints, FlightPhaseOperationalConstraints {
  readonly systemId: EngineControlSystemId;
  readonly variant: string;
  readonly overspeedProtectionFitted: boolean;
  readonly engineSpeed: number;
  readonly maxSafeSpeed: number;
  readonly fuelFlow: number;
  readonly continuousIgnitionActive: boolean;
  readonly commandedThrust: number;
  readonly aircraftInFlight: boolean;
  readonly reverserDeploymentEnabled: boolean;
  readonly sensorFaultDetected: boolean;
  readonly usingModelledValue: boolean;
  readonly modelledSpeedValue: number;
  readonly maxIgnitionLatencyMs: number;
  readonly thrustDeviationTolerancePct: number;
}

/** @stereotype <<Category>> */
export interface Do178cDalACompliant {
  readonly dalLevel: string;
  readonly mcDcCoverageRequired: boolean;
  readonly independentReviewRequired: boolean;
}

/** @stereotype <<Category>> */
export interface Do254DalACompliant {
  readonly hardwareDalLevel: string;
  readonly elementalAnalysisRequired: boolean;
}

/** @stereotype <<Category>> */
export interface CseFar33Compliant {
  readonly typeCertificateNumber: string;
  readonly csE1015OverspeedApplicable: boolean;
  readonly csE535ContinuousIgnitionDemonstrated: boolean;
}

/** @stereotype <<Category>> */
export interface Arp4761SafetyAssessed {
  readonly functionalHazardAssessmentRef: string;
  readonly faultTreeAnalysisRef: string;
  readonly failureModeEffectsAnalysisRef: string;
  readonly catastrophicFailureConditionsCovered: boolean;
}

/** @stereotype <<Category>> */
export interface Arp4754aAssured {
  readonly systemDalLevel: string;
  readonly requirementsValidationEvidenceRef: string;
  readonly verificationEvidenceRef: string;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleEngineState {
}

/** @stereotype <<Category>> */
export interface VariantConditionalProtection {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionTag: string;
  readonly statement: string;
  readonly rationale: string;
  readonly derivedFrom: string;
}

/** @stereotype <<Subkind>> */
export interface EngineControlSystemFormalized extends EngineControlSystem {
  readonly reverserInFlightAttemptRejected: boolean;
  readonly unprotectedOverspeedAlertIssued: boolean;
}

/** @stereotype <<Relator>> */
export interface EngineBinding {
  readonly bindingId: EngineBindingId;
  readonly assignedVariant: string;
}

/** @stereotype <<Relator>> */
export interface SensorBinding {
  readonly sensorBindingId: SensorBindingId;
  readonly sensorRole: string;
}


// ─── Factory functions ───

export function makeOverspeedProtectionUnit(data: {
  unitId: string;
  engineSpeed: number;
  maxSafeSpeed: number;
  fuelFlow: number;
  overspeedProtectionFitted: boolean;
  unprotectedOverspeedAlertIssued: boolean;
}): OverspeedProtectionUnit {
  return {
    unitId: data.unitId as OverspeedProtectionUnitId,
    engineSpeed: data.engineSpeed,
    maxSafeSpeed: data.maxSafeSpeed,
    fuelFlow: data.fuelFlow,
    overspeedProtectionFitted: data.overspeedProtectionFitted,
    unprotectedOverspeedAlertIssued: data.unprotectedOverspeedAlertIssued,
  };
}

export function makeIgnitionThrustController(data: {
  unitId: string;
  continuousIgnitionActive: boolean;
  commandedThrust: number;
  reverserDeploymentEnabled: boolean;
  reverserInFlightAttemptRejected: boolean;
  aircraftInFlight: boolean;
  sensorFaultActive: boolean;
  modelledValueSubstituted: boolean;
}): IgnitionThrustController {
  return {
    unitId: data.unitId as IgnitionThrustControllerId,
    continuousIgnitionActive: data.continuousIgnitionActive,
    commandedThrust: data.commandedThrust,
    reverserDeploymentEnabled: data.reverserDeploymentEnabled,
    reverserInFlightAttemptRejected: data.reverserInFlightAttemptRejected,
    aircraftInFlight: data.aircraftInFlight,
    sensorFaultActive: data.sensorFaultActive,
    modelledValueSubstituted: data.modelledValueSubstituted,
  };
}

export function makeSensorFaultManager(data: {
  unitId: string;
  sensorFaultDetected: boolean;
  usingModelledValue: boolean;
  modelledSpeedValue: number;
}): SensorFaultManager {
  return {
    unitId: data.unitId as SensorFaultManagerId,
    sensorFaultDetected: data.sensorFaultDetected,
    usingModelledValue: data.usingModelledValue,
    modelledSpeedValue: data.modelledSpeedValue,
  };
}

export function makeFlightPhaseMonitor(data: {
  unitId: string;
  aircraftInFlight: boolean;
  weightOnWheelsDiscrete: boolean;
}): FlightPhaseMonitor {
  return {
    unitId: data.unitId as FlightPhaseMonitorId,
    aircraftInFlight: data.aircraftInFlight,
    weightOnWheelsDiscrete: data.weightOnWheelsDiscrete,
  };
}

export function makeSpeedBus(data: {
  busId: string;
  effectiveSpeed: number;
  isModelled: boolean;
  faultFlagFromConsumer: boolean;
}): SpeedBus {
  return {
    busId: data.busId as SpeedBusId,
    effectiveSpeed: data.effectiveSpeed,
    isModelled: data.isModelled,
    faultFlagFromConsumer: data.faultFlagFromConsumer,
  };
}

export function makeFaultSignalBus(data: {
  busId: string;
  faultActive: boolean;
  substitutionActive: boolean;
}): FaultSignalBus {
  return {
    busId: data.busId as FaultSignalBusId,
    faultActive: data.faultActive,
    substitutionActive: data.substitutionActive,
  };
}

export function makeThrustBus(data: {
  busId: string;
  publishedInFlight: boolean;
  sequenceNumber: number;
}): ThrustBus {
  return {
    busId: data.busId as ThrustBusId,
    publishedInFlight: data.publishedInFlight,
    sequenceNumber: data.sequenceNumber,
  };
}

export function makeReverserBus(data: {
  busId: string;
  publishedInFlight: boolean;
  sequenceNumber: number;
}): ReverserBus {
  return {
    busId: data.busId as ReverserBusId,
    publishedInFlight: data.publishedInFlight,
    sequenceNumber: data.sequenceNumber,
  };
}

export function makeOverspeedDetectionDataFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): OverspeedDetectionDataFlow {
  return {
    flowId: data.flowId as OverspeedDetectionDataFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeSensorFaultSubstitutionDataFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SensorFaultSubstitutionDataFlow {
  return {
    flowId: data.flowId as SensorFaultSubstitutionDataFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeEngine(data: {
  engineId: string;
  rotationalSpeed: number;
  maxSafeSpeed: number;
  fuelFlow: number;
  variant: string;
}): Engine {
  return {
    engineId: data.engineId as EngineId,
    rotationalSpeed: data.rotationalSpeed,
    maxSafeSpeed: data.maxSafeSpeed,
    fuelFlow: data.fuelFlow,
    variant: data.variant,
  };
}

export function makeSensor(data: {
  sensorId: string;
  sensorType: string;
  isFaulty: boolean;
  lastReading: number;
}): Sensor {
  return {
    sensorId: data.sensorId as SensorId,
    sensorType: data.sensorType,
    isFaulty: data.isFaulty,
    lastReading: data.lastReading,
  };
}

export function makeModelledValue(data: {
  modelledValueId: string;
  associatedSensorType: string;
  estimatedValue: number;
}): ModelledValue {
  return {
    modelledValueId: data.modelledValueId as ModelledValueId,
    associatedSensorType: data.associatedSensorType,
    estimatedValue: data.estimatedValue,
  };
}

export function makeOverspeedEvent(data: {
  overspeedEventId: string;
  detectedSpeed: number;
  engineRef: Engine;
}): OverspeedEvent {
  return {
    overspeedEventId: data.overspeedEventId as OverspeedEventId,
    detectedSpeed: data.detectedSpeed,
    engineRef: data.engineRef,
  };
}

export function makeThrustReverser(data: {
  reverserId: string;
  deploymentEnabled: boolean;
  aircraftOnGround: boolean;
}): ThrustReverser {
  return {
    reverserId: data.reverserId as ThrustReverserId,
    deploymentEnabled: data.deploymentEnabled,
    aircraftOnGround: data.aircraftOnGround,
  };
}

export function makeIgnitionMode(data: {
  ignitionModeId: string;
  ignitionModeName: string;
  active: boolean;
}): IgnitionMode {
  return {
    ignitionModeId: data.ignitionModeId as IgnitionModeId,
    ignitionModeName: data.ignitionModeName,
    active: data.active,
  };
}

export function makePilot(data: {
  pilotId: string;
  name: string;
  licenseType: string;
}): Pilot {
  return {
    pilotId: data.pilotId as PilotId,
    name: data.name,
    licenseType: data.licenseType,
  };
}

export function makeAircraftOperator(data: {
  operatorId: string;
  name: string;
  operatingCertificate: string;
}): AircraftOperator {
  return {
    operatorId: data.operatorId as AircraftOperatorId,
    name: data.name,
    operatingCertificate: data.operatingCertificate,
  };
}

export function makeCertificationAuthority(data: {
  authorityId: string;
  name: string;
  jurisdiction: string;
}): CertificationAuthority {
  return {
    authorityId: data.authorityId as CertificationAuthorityId,
    name: data.name,
    jurisdiction: data.jurisdiction,
  };
}

export function makeMaintenanceEngineer(data: {
  engineerId: string;
  name: string;
  certification: string;
}): MaintenanceEngineer {
  return {
    engineerId: data.engineerId as MaintenanceEngineerId,
    name: data.name,
    certification: data.certification,
  };
}

export function makeEngineControlVendor(data: {
  vendorId: string;
  name: string;
  organizationCode: string;
}): EngineControlVendor {
  return {
    vendorId: data.vendorId as EngineControlVendorId,
    name: data.name,
    organizationCode: data.organizationCode,
  };
}

export function makeOverspeedProtectionCommitment(data: {
  commitmentId: string;
  certifiedMaxSpeedLimit: number;
}): OverspeedProtectionCommitment {
  return {
    commitmentId: data.commitmentId as OverspeedProtectionCommitmentId,
    certifiedMaxSpeedLimit: data.certifiedMaxSpeedLimit,
  };
}

export function makeFuelLimitOnOverspeedCommitment(data: {
  commitmentId: string;
  overspeedFuelLimitThreshold: number;
}): FuelLimitOnOverspeedCommitment {
  return {
    commitmentId: data.commitmentId as FuelLimitOnOverspeedCommitmentId,
    overspeedFuelLimitThreshold: data.overspeedFuelLimitThreshold,
  };
}

export function makeContinuousIgnitionCommitment(data: {
  commitmentId: string;
  ignitionResponseMaxLatencyMs: number;
}): ContinuousIgnitionCommitment {
  return {
    commitmentId: data.commitmentId as ContinuousIgnitionCommitmentId,
    ignitionResponseMaxLatencyMs: data.ignitionResponseMaxLatencyMs,
  };
}

export function makeThrustHoldInFlightCommitment(data: {
  commitmentId: string;
  thrustDeviationTolerancePct: number;
}): ThrustHoldInFlightCommitment {
  return {
    commitmentId: data.commitmentId as ThrustHoldInFlightCommitmentId,
    thrustDeviationTolerancePct: data.thrustDeviationTolerancePct,
  };
}

export function makeThrustReverserGroundOnlyCommitment(data: {
  commitmentId: string;
  minGroundConfidence: number;
}): ThrustReverserGroundOnlyCommitment {
  return {
    commitmentId: data.commitmentId as ThrustReverserGroundOnlyCommitmentId,
    minGroundConfidence: data.minGroundConfidence,
  };
}

export function makeSensorFaultToleranceCommitment(data: {
  commitmentId: string;
  maxToleratedSensorFaults: number;
}): SensorFaultToleranceCommitment {
  return {
    commitmentId: data.commitmentId as SensorFaultToleranceCommitmentId,
    maxToleratedSensorFaults: data.maxToleratedSensorFaults,
  };
}

export function makeEngineControlVisionCommitment(data: {
  commitmentId: string;
  targetStandard: string;
  safetyIntegrityLevel: string;
}): EngineControlVisionCommitment {
  return {
    commitmentId: data.commitmentId as EngineControlVisionCommitmentId,
    targetStandard: data.targetStandard,
    safetyIntegrityLevel: data.safetyIntegrityLevel,
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

export function makeContinuousIgnitionActivationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ContinuousIgnitionActivationFlow {
  return {
    flowId: data.flowId as ContinuousIgnitionActivationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeEngineControlSystem(data: {
  systemId: string;
  variant: string;
  overspeedProtectionFitted: boolean;
  engineSpeed: number;
  maxSafeSpeed: number;
  fuelFlow: number;
  continuousIgnitionActive: boolean;
  commandedThrust: number;
  aircraftInFlight: boolean;
  reverserDeploymentEnabled: boolean;
  sensorFaultDetected: boolean;
  usingModelledValue: boolean;
  modelledSpeedValue: number;
  maxIgnitionLatencyMs: number;
  thrustDeviationTolerancePct: number;
}): EngineControlSystem {
  return {
    systemId: data.systemId as EngineControlSystemId,
    variant: data.variant,
    overspeedProtectionFitted: data.overspeedProtectionFitted,
    engineSpeed: data.engineSpeed,
    maxSafeSpeed: data.maxSafeSpeed,
    fuelFlow: data.fuelFlow,
    continuousIgnitionActive: data.continuousIgnitionActive,
    commandedThrust: data.commandedThrust,
    aircraftInFlight: data.aircraftInFlight,
    reverserDeploymentEnabled: data.reverserDeploymentEnabled,
    sensorFaultDetected: data.sensorFaultDetected,
    usingModelledValue: data.usingModelledValue,
    modelledSpeedValue: data.modelledSpeedValue,
    maxIgnitionLatencyMs: data.maxIgnitionLatencyMs,
    thrustDeviationTolerancePct: data.thrustDeviationTolerancePct,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionTag: string;
  statement: string;
  rationale: string;
  derivedFrom: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionTag: data.assumptionTag,
    statement: data.statement,
    rationale: data.rationale,
    derivedFrom: data.derivedFrom,
  };
}

export function makeEngineBinding(data: {
  bindingId: string;
  assignedVariant: string;
}): EngineBinding {
  return {
    bindingId: data.bindingId as EngineBindingId,
    assignedVariant: data.assignedVariant,
  };
}

export function makeSensorBinding(data: {
  sensorBindingId: string;
  sensorRole: string;
}): SensorBinding {
  return {
    sensorBindingId: data.sensorBindingId as SensorBindingId,
    sensorRole: data.sensorRole,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for OverspeedProtectionUnit. Returns empty array when valid. */
export function validateOverspeedProtectionUnit(instance: OverspeedProtectionUnit): readonly string[] {
  const violations: string[] = [];
  if (!((instance.unitId !== null))) {
    violations.push("[OverspeedProtectionUnit] invariant violated: self.unitId <> null");
  }
  if (!((instance.maxSafeSpeed > 0))) {
    violations.push("[OverspeedProtectionUnit] invariant violated: self.maxSafeSpeed > 0.0");
  }
  if (!((instance.engineSpeed >= 0))) {
    violations.push("[OverspeedProtectionUnit] invariant violated: self.engineSpeed >= 0.0");
  }
  if (!((instance.fuelFlow >= 0))) {
    violations.push("[OverspeedProtectionUnit] invariant violated: self.fuelFlow >= 0.0");
  }
  if (!((instance.engineSpeed <= instance.maxSafeSpeed))) {
    violations.push("[OverspeedProtectionUnit] invariant violated: self.engineSpeed <= self.maxSafeSpeed");
  }
  return violations;
}

/** Runtime invariant check for IgnitionThrustController. Returns empty array when valid. */
export function validateIgnitionThrustController(instance: IgnitionThrustController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.unitId !== null))) {
    violations.push("[IgnitionThrustController] invariant violated: self.unitId <> null");
  }
  if (!((instance.commandedThrust >= 0))) {
    violations.push("[IgnitionThrustController] invariant violated: self.commandedThrust >= 0.0");
  }
  if (!(!((instance.aircraftInFlight && instance.reverserDeploymentEnabled)))) {
    violations.push("[IgnitionThrustController] invariant violated: not (self.aircraftInFlight and self.reverserDeploymentEnabled)");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultManager. Returns empty array when valid. */
export function validateSensorFaultManager(instance: SensorFaultManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.unitId !== null))) {
    violations.push("[SensorFaultManager] invariant violated: self.unitId <> null");
  }
  if (!((instance.modelledSpeedValue >= 0))) {
    violations.push("[SensorFaultManager] invariant violated: self.modelledSpeedValue >= 0.0");
  }
  if (!((!(instance.usingModelledValue) || instance.sensorFaultDetected))) {
    violations.push("[SensorFaultManager] invariant violated: self.usingModelledValue implies self.sensorFaultDetected");
  }
  return violations;
}

/** Runtime invariant check for FlightPhaseMonitor. Returns empty array when valid. */
export function validateFlightPhaseMonitor(instance: FlightPhaseMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.unitId !== null))) {
    violations.push("[FlightPhaseMonitor] invariant violated: self.unitId <> null");
  }
  if (!((!(instance.weightOnWheelsDiscrete) || !(instance.aircraftInFlight)))) {
    violations.push("[FlightPhaseMonitor] invariant violated: self.weightOnWheelsDiscrete implies not self.aircraftInFlight");
  }
  return violations;
}

/** Runtime invariant check for SpeedBus. Returns empty array when valid. */
export function validateSpeedBus(instance: SpeedBus): readonly string[] {
  const violations: string[] = [];
  if (!((instance.busId !== null))) {
    violations.push("[SpeedBus] invariant violated: self.busId <> null");
  }
  if (!((instance.effectiveSpeed >= 0))) {
    violations.push("[SpeedBus] invariant violated: self.effectiveSpeed >= 0.0");
  }
  if (!((!(instance.isModelled) || instance.faultFlagFromConsumer))) {
    violations.push("[SpeedBus] invariant violated: self.isModelled implies self.faultFlagFromConsumer");
  }
  return violations;
}

/** Runtime invariant check for FaultSignalBus. Returns empty array when valid. */
export function validateFaultSignalBus(instance: FaultSignalBus): readonly string[] {
  const violations: string[] = [];
  if (!((instance.busId !== null))) {
    violations.push("[FaultSignalBus] invariant violated: self.busId <> null");
  }
  if (!((!(instance.substitutionActive) || instance.faultActive))) {
    violations.push("[FaultSignalBus] invariant violated: self.substitutionActive implies self.faultActive");
  }
  return violations;
}

/** Runtime invariant check for ThrustBus. Returns empty array when valid. */
export function validateThrustBus(instance: ThrustBus): readonly string[] {
  const violations: string[] = [];
  if (!((instance.busId !== null))) {
    violations.push("[ThrustBus] invariant violated: self.busId <> null");
  }
  if (!((instance.sequenceNumber >= 0))) {
    violations.push("[ThrustBus] invariant violated: self.sequenceNumber >= 0");
  }
  return violations;
}

/** Runtime invariant check for ReverserBus. Returns empty array when valid. */
export function validateReverserBus(instance: ReverserBus): readonly string[] {
  const violations: string[] = [];
  if (!((instance.busId !== null))) {
    violations.push("[ReverserBus] invariant violated: self.busId <> null");
  }
  if (!((instance.sequenceNumber >= 0))) {
    violations.push("[ReverserBus] invariant violated: self.sequenceNumber >= 0");
  }
  return violations;
}

/** Runtime invariant check for OverspeedDetectionDataFlow. Returns empty array when valid. */
export function validateOverspeedDetectionDataFlow(instance: OverspeedDetectionDataFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[OverspeedDetectionDataFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultSubstitutionDataFlow. Returns empty array when valid. */
export function validateSensorFaultSubstitutionDataFlow(instance: SensorFaultSubstitutionDataFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultSubstitutionDataFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for Engine. Returns empty array when valid. */
export function validateEngine(instance: Engine): readonly string[] {
  const violations: string[] = [];
  if (!((instance.engineId !== null))) {
    violations.push("[Engine] invariant violated: self.engineId <> null");
  }
  if (!((instance.maxSafeSpeed > 0))) {
    violations.push("[Engine] invariant violated: self.maxSafeSpeed > 0.0");
  }
  if (!((instance.rotationalSpeed >= 0))) {
    violations.push("[Engine] invariant violated: self.rotationalSpeed >= 0.0");
  }
  if (!((instance.fuelFlow >= 0))) {
    violations.push("[Engine] invariant violated: self.fuelFlow >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for Sensor. Returns empty array when valid. */
export function validateSensor(instance: Sensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[Sensor] invariant violated: self.sensorId <> null");
  }
  if (!((instance.sensorType !== null))) {
    violations.push("[Sensor] invariant violated: self.sensorType <> null");
  }
  return violations;
}

/** Runtime invariant check for ModelledValue. Returns empty array when valid. */
export function validateModelledValue(instance: ModelledValue): readonly string[] {
  const violations: string[] = [];
  if (!((instance.modelledValueId !== null))) {
    violations.push("[ModelledValue] invariant violated: self.modelledValueId <> null");
  }
  if (!((instance.associatedSensorType !== null))) {
    violations.push("[ModelledValue] invariant violated: self.associatedSensorType <> null");
  }
  return violations;
}

/** Runtime invariant check for OverspeedEvent. Returns empty array when valid. */
export function validateOverspeedEvent(instance: OverspeedEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.overspeedEventId !== null))) {
    violations.push("[OverspeedEvent] invariant violated: self.overspeedEventId <> null");
  }
  if (!((instance.engineRef !== null))) {
    violations.push("[OverspeedEvent] invariant violated: self.engineRef <> null");
  }
  if (!((instance.detectedSpeed > 0))) {
    violations.push("[OverspeedEvent] invariant violated: self.detectedSpeed > 0.0");
  }
  return violations;
}

/** Runtime invariant check for ThrustReverser. Returns empty array when valid. */
export function validateThrustReverser(instance: ThrustReverser): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reverserId !== null))) {
    violations.push("[ThrustReverser] invariant violated: self.reverserId <> null");
  }
  return violations;
}

/** Runtime invariant check for IgnitionMode. Returns empty array when valid. */
export function validateIgnitionMode(instance: IgnitionMode): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ignitionModeId !== null))) {
    violations.push("[IgnitionMode] invariant violated: self.ignitionModeId <> null");
  }
  if (!((instance.ignitionModeName !== null))) {
    violations.push("[IgnitionMode] invariant violated: self.ignitionModeName <> null");
  }
  return violations;
}

/** Runtime invariant check for Pilot. Returns empty array when valid. */
export function validatePilot(instance: Pilot): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pilotId !== null))) {
    violations.push("[Pilot] invariant violated: self.pilotId <> null");
  }
  return violations;
}

/** Runtime invariant check for AircraftOperator. Returns empty array when valid. */
export function validateAircraftOperator(instance: AircraftOperator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.operatorId !== null))) {
    violations.push("[AircraftOperator] invariant violated: self.operatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for CertificationAuthority. Returns empty array when valid. */
export function validateCertificationAuthority(instance: CertificationAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[CertificationAuthority] invariant violated: self.authorityId <> null");
  }
  return violations;
}

/** Runtime invariant check for MaintenanceEngineer. Returns empty array when valid. */
export function validateMaintenanceEngineer(instance: MaintenanceEngineer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.engineerId !== null))) {
    violations.push("[MaintenanceEngineer] invariant violated: self.engineerId <> null");
  }
  return violations;
}

/** Runtime invariant check for EngineControlVendor. Returns empty array when valid. */
export function validateEngineControlVendor(instance: EngineControlVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[EngineControlVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for OverspeedSafetyConstraints. Returns empty array when valid. */
export function validateOverspeedSafetyConstraints(instance: OverspeedSafetyConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[OverspeedSafetyConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultToleranceConstraints. Returns empty array when valid. */
export function validateSensorFaultToleranceConstraints(instance: SensorFaultToleranceConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[SensorFaultToleranceConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FlightPhaseOperationalConstraints. Returns empty array when valid. */
export function validateFlightPhaseOperationalConstraints(instance: FlightPhaseOperationalConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[FlightPhaseOperationalConstraints] invariant violated: true");
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

/** Runtime invariant check for SensorFaultHandlingFlow. Returns empty array when valid. */
export function validateSensorFaultHandlingFlow(instance: SensorFaultHandlingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultHandlingFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for ThrustReverserDeploymentFlow. Returns empty array when valid. */
export function validateThrustReverserDeploymentFlow(instance: ThrustReverserDeploymentFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ThrustReverserDeploymentFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for ContinuousIgnitionActivationFlow. Returns empty array when valid. */
export function validateContinuousIgnitionActivationFlow(instance: ContinuousIgnitionActivationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ContinuousIgnitionActivationFlow] invariant violated: self.flowId <> null");
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
  if (!((instance.engineSpeed >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.engineSpeed >= 0.0");
  }
  if (!((instance.fuelFlow >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.fuelFlow >= 0.0");
  }
  if (!((instance.commandedThrust >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.commandedThrust >= 0.0");
  }
  if (!((instance.modelledSpeedValue >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.modelledSpeedValue >= 0.0");
  }
  if (!((instance.maxIgnitionLatencyMs > 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.maxIgnitionLatencyMs > 0.0");
  }
  if (!((instance.thrustDeviationTolerancePct >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.thrustDeviationTolerancePct >= 0.0");
  }
  if (!((instance.engineSpeed <= instance.maxSafeSpeed))) {
    violations.push("[EngineControlSystem] invariant violated: self.engineSpeed <= self.maxSafeSpeed");
  }
  if (!(!((instance.aircraftInFlight && instance.reverserDeploymentEnabled)))) {
    violations.push("[EngineControlSystem] invariant violated: not (self.aircraftInFlight and self.reverserDeploymentEnabled)");
  }
  if (!((!(instance.usingModelledValue) || instance.sensorFaultDetected))) {
    violations.push("[EngineControlSystem] invariant violated: self.usingModelledValue implies self.sensorFaultDetected");
  }
  return violations;
}

/** Runtime invariant check for Do178cDalACompliant. Returns empty array when valid. */
export function validateDo178cDalACompliant(instance: Do178cDalACompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dalLevel !== null))) {
    violations.push("[Do178cDalACompliant] invariant violated: self.dalLevel <> null");
  }
  if (!((instance.mcDcCoverageRequired === true))) {
    violations.push("[Do178cDalACompliant] invariant violated: self.mcDcCoverageRequired = true");
  }
  if (!((instance.independentReviewRequired === true))) {
    violations.push("[Do178cDalACompliant] invariant violated: self.independentReviewRequired = true");
  }
  return violations;
}

/** Runtime invariant check for Do254DalACompliant. Returns empty array when valid. */
export function validateDo254DalACompliant(instance: Do254DalACompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.hardwareDalLevel !== null))) {
    violations.push("[Do254DalACompliant] invariant violated: self.hardwareDalLevel <> null");
  }
  if (!((instance.elementalAnalysisRequired === true))) {
    violations.push("[Do254DalACompliant] invariant violated: self.elementalAnalysisRequired = true");
  }
  return violations;
}

/** Runtime invariant check for CseFar33Compliant. Returns empty array when valid. */
export function validateCseFar33Compliant(instance: CseFar33Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.typeCertificateNumber !== null))) {
    violations.push("[CseFar33Compliant] invariant violated: self.typeCertificateNumber <> null");
  }
  return violations;
}

/** Runtime invariant check for Arp4761SafetyAssessed. Returns empty array when valid. */
export function validateArp4761SafetyAssessed(instance: Arp4761SafetyAssessed): readonly string[] {
  const violations: string[] = [];
  if (!((instance.functionalHazardAssessmentRef !== null))) {
    violations.push("[Arp4761SafetyAssessed] invariant violated: self.functionalHazardAssessmentRef <> null");
  }
  if (!((instance.faultTreeAnalysisRef !== null))) {
    violations.push("[Arp4761SafetyAssessed] invariant violated: self.faultTreeAnalysisRef <> null");
  }
  if (!((instance.catastrophicFailureConditionsCovered === true))) {
    violations.push("[Arp4761SafetyAssessed] invariant violated: self.catastrophicFailureConditionsCovered = true");
  }
  return violations;
}

/** Runtime invariant check for Arp4754aAssured. Returns empty array when valid. */
export function validateArp4754aAssured(instance: Arp4754aAssured): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemDalLevel !== null))) {
    violations.push("[Arp4754aAssured] invariant violated: self.systemDalLevel <> null");
  }
  if (!((instance.requirementsValidationEvidenceRef !== null))) {
    violations.push("[Arp4754aAssured] invariant violated: self.requirementsValidationEvidenceRef <> null");
  }
  if (!((instance.verificationEvidenceRef !== null))) {
    violations.push("[Arp4754aAssured] invariant violated: self.verificationEvidenceRef <> null");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleEngineState. Returns empty array when valid. */
export function validatePhysicallyPlausibleEngineState(instance: PhysicallyPlausibleEngineState): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PhysicallyPlausibleEngineState] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for VariantConditionalProtection. Returns empty array when valid. */
export function validateVariantConditionalProtection(instance: VariantConditionalProtection): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[VariantConditionalProtection] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionTag !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionTag <> null");
  }
  if (!((instance.statement !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.statement <> null");
  }
  return violations;
}

/** Runtime invariant check for EngineBinding. Returns empty array when valid. */
export function validateEngineBinding(instance: EngineBinding): readonly string[] {
  const violations: string[] = [];
  if (!((instance.bindingId !== null))) {
    violations.push("[EngineBinding] invariant violated: self.bindingId <> null");
  }
  if (!((instance.assignedVariant !== null))) {
    violations.push("[EngineBinding] invariant violated: self.assignedVariant <> null");
  }
  return violations;
}

/** Runtime invariant check for SensorBinding. Returns empty array when valid. */
export function validateSensorBinding(instance: SensorBinding): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorBindingId !== null))) {
    violations.push("[SensorBinding] invariant violated: self.sensorBindingId <> null");
  }
  if (!((instance.sensorRole !== null))) {
    violations.push("[SensorBinding] invariant violated: self.sensorRole <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for OverspeedProtectionUnit.limitFuelOnOverspeed. User supplies this. */
export type OverspeedProtectionUnitLimitFuelOnOverspeedImpl = (self: OverspeedProtectionUnit, detectedSpeed: number) => { self: OverspeedProtectionUnit; modified: { fuelFlow: unknown; engineSpeed: unknown } };

/** Contract-checking wrapper for OverspeedProtectionUnit.limitFuelOnOverspeed. */
export function wrapOverspeedProtectionUnitLimitFuelOnOverspeed(impl: OverspeedProtectionUnitLimitFuelOnOverspeedImpl): (self: OverspeedProtectionUnit, detectedSpeed: number) => OverspeedProtectionUnit {
  return (self, detectedSpeed) => {
    const preViolations: string[] = [];
    if (!((detectedSpeed >= self.maxSafeSpeed))) {
      preViolations.push("[OverspeedProtectionUnit.limitFuelOnOverspeed] pre violated: detectedSpeed >= self.maxSafeSpeed");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[OverspeedProtectionUnit.limitFuelOnOverspeed] pre violated: self.overspeedProtectionFitted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, detectedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[OverspeedProtectionUnit.limitFuelOnOverspeed] post violated: self.fuelFlow = 0.0");
      }
      if (!((__result.self.engineSpeed <= __result.self.maxSafeSpeed))) {
        postViolations.push("[OverspeedProtectionUnit.limitFuelOnOverspeed] post violated: self.engineSpeed <= self.maxSafeSpeed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtectionUnit.limitFuelOnOverspeed (async). User supplies this. */
export type OverspeedProtectionUnitLimitFuelOnOverspeedAsyncImpl = (self: OverspeedProtectionUnit, detectedSpeed: number) => Promise<{ self: OverspeedProtectionUnit; modified: { fuelFlow: unknown; engineSpeed: unknown } }>;

/** Contract-checking wrapper for OverspeedProtectionUnit.limitFuelOnOverspeed (async). */
export function wrapOverspeedProtectionUnitLimitFuelOnOverspeedAsync(impl: OverspeedProtectionUnitLimitFuelOnOverspeedAsyncImpl): (self: OverspeedProtectionUnit, detectedSpeed: number) => Promise<OverspeedProtectionUnit> {
  return async (self, detectedSpeed) => {
    const preViolations: string[] = [];
    if (!((detectedSpeed >= self.maxSafeSpeed))) {
      preViolations.push("[OverspeedProtectionUnit.limitFuelOnOverspeed] pre violated: detectedSpeed >= self.maxSafeSpeed");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[OverspeedProtectionUnit.limitFuelOnOverspeed] pre violated: self.overspeedProtectionFitted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, detectedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[OverspeedProtectionUnit.limitFuelOnOverspeed] post violated: self.fuelFlow = 0.0");
      }
      if (!((__result.self.engineSpeed <= __result.self.maxSafeSpeed))) {
        postViolations.push("[OverspeedProtectionUnit.limitFuelOnOverspeed] post violated: self.engineSpeed <= self.maxSafeSpeed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant. User supplies this. */
export type OverspeedProtectionUnitRejectOverspeedLimitOnUnprotectedVariantImpl = (self: OverspeedProtectionUnit, detectedSpeed: number) => { self: OverspeedProtectionUnit; modified: { unprotectedOverspeedAlertIssued: unknown } };

/** Contract-checking wrapper for OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant. */
export function wrapOverspeedProtectionUnitRejectOverspeedLimitOnUnprotectedVariant(impl: OverspeedProtectionUnitRejectOverspeedLimitOnUnprotectedVariantImpl): (self: OverspeedProtectionUnit, detectedSpeed: number) => OverspeedProtectionUnit {
  return (self, detectedSpeed) => {
    const preViolations: string[] = [];
    if (!((self.overspeedProtectionFitted === false))) {
      preViolations.push("[OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant] pre violated: self.overspeedProtectionFitted = false");
    }
    if (!((detectedSpeed >= self.maxSafeSpeed))) {
      preViolations.push("[OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant] pre violated: detectedSpeed >= self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, detectedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.unprotectedOverspeedAlertIssued === true))) {
        postViolations.push("[OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant] post violated: self.unprotectedOverspeedAlertIssued = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant (async). User supplies this. */
export type OverspeedProtectionUnitRejectOverspeedLimitOnUnprotectedVariantAsyncImpl = (self: OverspeedProtectionUnit, detectedSpeed: number) => Promise<{ self: OverspeedProtectionUnit; modified: { unprotectedOverspeedAlertIssued: unknown } }>;

/** Contract-checking wrapper for OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant (async). */
export function wrapOverspeedProtectionUnitRejectOverspeedLimitOnUnprotectedVariantAsync(impl: OverspeedProtectionUnitRejectOverspeedLimitOnUnprotectedVariantAsyncImpl): (self: OverspeedProtectionUnit, detectedSpeed: number) => Promise<OverspeedProtectionUnit> {
  return async (self, detectedSpeed) => {
    const preViolations: string[] = [];
    if (!((self.overspeedProtectionFitted === false))) {
      preViolations.push("[OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant] pre violated: self.overspeedProtectionFitted = false");
    }
    if (!((detectedSpeed >= self.maxSafeSpeed))) {
      preViolations.push("[OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant] pre violated: detectedSpeed >= self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, detectedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.unprotectedOverspeedAlertIssued === true))) {
        postViolations.push("[OverspeedProtectionUnit.rejectOverspeedLimitOnUnprotectedVariant] post violated: self.unprotectedOverspeedAlertIssued = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation. User supplies this. */
export type OverspeedProtectionUnitEnforceFuelCutOnSpeedViolationImpl = (self: OverspeedProtectionUnit) => { self: OverspeedProtectionUnit; modified: { fuelFlow: unknown } };

/** Contract-checking wrapper for OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation. */
export function wrapOverspeedProtectionUnitEnforceFuelCutOnSpeedViolation(impl: OverspeedProtectionUnitEnforceFuelCutOnSpeedViolationImpl): (self: OverspeedProtectionUnit) => OverspeedProtectionUnit {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.engineSpeed > self.maxSafeSpeed))) {
      preViolations.push("[OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation] pre violated: self.engineSpeed > self.maxSafeSpeed");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation] pre violated: self.overspeedProtectionFitted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation] post violated: self.fuelFlow = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation (async). User supplies this. */
export type OverspeedProtectionUnitEnforceFuelCutOnSpeedViolationAsyncImpl = (self: OverspeedProtectionUnit) => Promise<{ self: OverspeedProtectionUnit; modified: { fuelFlow: unknown } }>;

/** Contract-checking wrapper for OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation (async). */
export function wrapOverspeedProtectionUnitEnforceFuelCutOnSpeedViolationAsync(impl: OverspeedProtectionUnitEnforceFuelCutOnSpeedViolationAsyncImpl): (self: OverspeedProtectionUnit) => Promise<OverspeedProtectionUnit> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.engineSpeed > self.maxSafeSpeed))) {
      preViolations.push("[OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation] pre violated: self.engineSpeed > self.maxSafeSpeed");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation] pre violated: self.overspeedProtectionFitted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[OverspeedProtectionUnit.enforceFuelCutOnSpeedViolation] post violated: self.fuelFlow = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtectionUnit.receiveEffectiveSpeed. User supplies this. */
export type OverspeedProtectionUnitReceiveEffectiveSpeedImpl = (self: OverspeedProtectionUnit, speed: number) => { self: OverspeedProtectionUnit; modified: { engineSpeed: unknown } };

/** Contract-checking wrapper for OverspeedProtectionUnit.receiveEffectiveSpeed. */
export function wrapOverspeedProtectionUnitReceiveEffectiveSpeed(impl: OverspeedProtectionUnitReceiveEffectiveSpeedImpl): (self: OverspeedProtectionUnit, speed: number) => OverspeedProtectionUnit {
  return (self, speed) => {
    const preViolations: string[] = [];
    if (!((speed >= 0))) {
      preViolations.push("[OverspeedProtectionUnit.receiveEffectiveSpeed] pre violated: speed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, speed);
      const postViolations: string[] = [];
      if (!((__result.self.engineSpeed === speed))) {
        postViolations.push("[OverspeedProtectionUnit.receiveEffectiveSpeed] post violated: self.engineSpeed = speed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtectionUnit.receiveEffectiveSpeed (async). User supplies this. */
export type OverspeedProtectionUnitReceiveEffectiveSpeedAsyncImpl = (self: OverspeedProtectionUnit, speed: number) => Promise<{ self: OverspeedProtectionUnit; modified: { engineSpeed: unknown } }>;

/** Contract-checking wrapper for OverspeedProtectionUnit.receiveEffectiveSpeed (async). */
export function wrapOverspeedProtectionUnitReceiveEffectiveSpeedAsync(impl: OverspeedProtectionUnitReceiveEffectiveSpeedAsyncImpl): (self: OverspeedProtectionUnit, speed: number) => Promise<OverspeedProtectionUnit> {
  return async (self, speed) => {
    const preViolations: string[] = [];
    if (!((speed >= 0))) {
      preViolations.push("[OverspeedProtectionUnit.receiveEffectiveSpeed] pre violated: speed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, speed);
      const postViolations: string[] = [];
      if (!((__result.self.engineSpeed === speed))) {
        postViolations.push("[OverspeedProtectionUnit.receiveEffectiveSpeed] post violated: self.engineSpeed = speed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.activateContinuousIgnition. User supplies this. */
export type IgnitionThrustControllerActivateContinuousIgnitionImpl = (self: IgnitionThrustController) => { self: IgnitionThrustController; modified: { continuousIgnitionActive: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.activateContinuousIgnition. */
export function wrapIgnitionThrustControllerActivateContinuousIgnition(impl: IgnitionThrustControllerActivateContinuousIgnitionImpl): (self: IgnitionThrustController) => IgnitionThrustController {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === false))) {
      preViolations.push("[IgnitionThrustController.activateContinuousIgnition] pre violated: self.continuousIgnitionActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === true))) {
        postViolations.push("[IgnitionThrustController.activateContinuousIgnition] post violated: self.continuousIgnitionActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.activateContinuousIgnition (async). User supplies this. */
export type IgnitionThrustControllerActivateContinuousIgnitionAsyncImpl = (self: IgnitionThrustController) => Promise<{ self: IgnitionThrustController; modified: { continuousIgnitionActive: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.activateContinuousIgnition (async). */
export function wrapIgnitionThrustControllerActivateContinuousIgnitionAsync(impl: IgnitionThrustControllerActivateContinuousIgnitionAsyncImpl): (self: IgnitionThrustController) => Promise<IgnitionThrustController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === false))) {
      preViolations.push("[IgnitionThrustController.activateContinuousIgnition] pre violated: self.continuousIgnitionActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === true))) {
        postViolations.push("[IgnitionThrustController.activateContinuousIgnition] post violated: self.continuousIgnitionActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.deactivateContinuousIgnition. User supplies this. */
export type IgnitionThrustControllerDeactivateContinuousIgnitionImpl = (self: IgnitionThrustController) => { self: IgnitionThrustController; modified: { continuousIgnitionActive: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.deactivateContinuousIgnition. */
export function wrapIgnitionThrustControllerDeactivateContinuousIgnition(impl: IgnitionThrustControllerDeactivateContinuousIgnitionImpl): (self: IgnitionThrustController) => IgnitionThrustController {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[IgnitionThrustController.deactivateContinuousIgnition] pre violated: self.continuousIgnitionActive = true");
    }
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[IgnitionThrustController.deactivateContinuousIgnition] pre violated: self.aircraftInFlight = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === false))) {
        postViolations.push("[IgnitionThrustController.deactivateContinuousIgnition] post violated: self.continuousIgnitionActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.deactivateContinuousIgnition (async). User supplies this. */
export type IgnitionThrustControllerDeactivateContinuousIgnitionAsyncImpl = (self: IgnitionThrustController) => Promise<{ self: IgnitionThrustController; modified: { continuousIgnitionActive: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.deactivateContinuousIgnition (async). */
export function wrapIgnitionThrustControllerDeactivateContinuousIgnitionAsync(impl: IgnitionThrustControllerDeactivateContinuousIgnitionAsyncImpl): (self: IgnitionThrustController) => Promise<IgnitionThrustController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[IgnitionThrustController.deactivateContinuousIgnition] pre violated: self.continuousIgnitionActive = true");
    }
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[IgnitionThrustController.deactivateContinuousIgnition] pre violated: self.aircraftInFlight = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === false))) {
        postViolations.push("[IgnitionThrustController.deactivateContinuousIgnition] post violated: self.continuousIgnitionActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase. User supplies this. */
export type IgnitionThrustControllerRejectIgnitionDeactivationInHazardousPhaseImpl = (self: IgnitionThrustController) => { self: IgnitionThrustController; modified: { continuousIgnitionActive: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase. */
export function wrapIgnitionThrustControllerRejectIgnitionDeactivationInHazardousPhase(impl: IgnitionThrustControllerRejectIgnitionDeactivationInHazardousPhaseImpl): (self: IgnitionThrustController) => IgnitionThrustController {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase] pre violated: self.continuousIgnitionActive = true");
    }
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase] pre violated: self.aircraftInFlight = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === true))) {
        postViolations.push("[IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase] post violated: self.continuousIgnitionActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase (async). User supplies this. */
export type IgnitionThrustControllerRejectIgnitionDeactivationInHazardousPhaseAsyncImpl = (self: IgnitionThrustController) => Promise<{ self: IgnitionThrustController; modified: { continuousIgnitionActive: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase (async). */
export function wrapIgnitionThrustControllerRejectIgnitionDeactivationInHazardousPhaseAsync(impl: IgnitionThrustControllerRejectIgnitionDeactivationInHazardousPhaseAsyncImpl): (self: IgnitionThrustController) => Promise<IgnitionThrustController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase] pre violated: self.continuousIgnitionActive = true");
    }
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase] pre violated: self.aircraftInFlight = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === true))) {
        postViolations.push("[IgnitionThrustController.rejectIgnitionDeactivationInHazardousPhase] post violated: self.continuousIgnitionActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.holdThrustInFlight. User supplies this. */
export type IgnitionThrustControllerHoldThrustInFlightImpl = (self: IgnitionThrustController, commanded: number) => { self: IgnitionThrustController; modified: { commandedThrust: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.holdThrustInFlight. */
export function wrapIgnitionThrustControllerHoldThrustInFlight(impl: IgnitionThrustControllerHoldThrustInFlightImpl): (self: IgnitionThrustController, commanded: number) => IgnitionThrustController {
  return (self, commanded) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[IgnitionThrustController.holdThrustInFlight] pre violated: self.aircraftInFlight = true");
    }
    if (!((commanded >= 0))) {
      preViolations.push("[IgnitionThrustController.holdThrustInFlight] pre violated: commanded >= 0.0");
    }
    if (!((self.modelledValueSubstituted === true))) {
      preViolations.push("[IgnitionThrustController.holdThrustInFlight] pre violated: self.modelledValueSubstituted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commanded);
      const postViolations: string[] = [];
      if (!((__result.self.commandedThrust === commanded))) {
        postViolations.push("[IgnitionThrustController.holdThrustInFlight] post violated: self.commandedThrust = commanded");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.holdThrustInFlight (async). User supplies this. */
export type IgnitionThrustControllerHoldThrustInFlightAsyncImpl = (self: IgnitionThrustController, commanded: number) => Promise<{ self: IgnitionThrustController; modified: { commandedThrust: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.holdThrustInFlight (async). */
export function wrapIgnitionThrustControllerHoldThrustInFlightAsync(impl: IgnitionThrustControllerHoldThrustInFlightAsyncImpl): (self: IgnitionThrustController, commanded: number) => Promise<IgnitionThrustController> {
  return async (self, commanded) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[IgnitionThrustController.holdThrustInFlight] pre violated: self.aircraftInFlight = true");
    }
    if (!((commanded >= 0))) {
      preViolations.push("[IgnitionThrustController.holdThrustInFlight] pre violated: commanded >= 0.0");
    }
    if (!((self.modelledValueSubstituted === true))) {
      preViolations.push("[IgnitionThrustController.holdThrustInFlight] pre violated: self.modelledValueSubstituted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commanded);
      const postViolations: string[] = [];
      if (!((__result.self.commandedThrust === commanded))) {
        postViolations.push("[IgnitionThrustController.holdThrustInFlight] post violated: self.commandedThrust = commanded");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.rejectThrustCommandPendingSubstitution. User supplies this. */
export type IgnitionThrustControllerRejectThrustCommandPendingSubstitutionImpl = (self: IgnitionThrustController, commanded: number) => { self: IgnitionThrustController; modified: { modelledValueSubstituted: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.rejectThrustCommandPendingSubstitution. */
export function wrapIgnitionThrustControllerRejectThrustCommandPendingSubstitution(impl: IgnitionThrustControllerRejectThrustCommandPendingSubstitutionImpl): (self: IgnitionThrustController, commanded: number) => IgnitionThrustController {
  return (self, commanded) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultActive === true))) {
      preViolations.push("[IgnitionThrustController.rejectThrustCommandPendingSubstitution] pre violated: self.sensorFaultActive = true");
    }
    if (!((self.modelledValueSubstituted === false))) {
      preViolations.push("[IgnitionThrustController.rejectThrustCommandPendingSubstitution] pre violated: self.modelledValueSubstituted = false");
    }
    if (!((commanded >= 0))) {
      preViolations.push("[IgnitionThrustController.rejectThrustCommandPendingSubstitution] pre violated: commanded >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commanded);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValueSubstituted === false))) {
        postViolations.push("[IgnitionThrustController.rejectThrustCommandPendingSubstitution] post violated: self.modelledValueSubstituted = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.rejectThrustCommandPendingSubstitution (async). User supplies this. */
export type IgnitionThrustControllerRejectThrustCommandPendingSubstitutionAsyncImpl = (self: IgnitionThrustController, commanded: number) => Promise<{ self: IgnitionThrustController; modified: { modelledValueSubstituted: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.rejectThrustCommandPendingSubstitution (async). */
export function wrapIgnitionThrustControllerRejectThrustCommandPendingSubstitutionAsync(impl: IgnitionThrustControllerRejectThrustCommandPendingSubstitutionAsyncImpl): (self: IgnitionThrustController, commanded: number) => Promise<IgnitionThrustController> {
  return async (self, commanded) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultActive === true))) {
      preViolations.push("[IgnitionThrustController.rejectThrustCommandPendingSubstitution] pre violated: self.sensorFaultActive = true");
    }
    if (!((self.modelledValueSubstituted === false))) {
      preViolations.push("[IgnitionThrustController.rejectThrustCommandPendingSubstitution] pre violated: self.modelledValueSubstituted = false");
    }
    if (!((commanded >= 0))) {
      preViolations.push("[IgnitionThrustController.rejectThrustCommandPendingSubstitution] pre violated: commanded >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commanded);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValueSubstituted === false))) {
        postViolations.push("[IgnitionThrustController.rejectThrustCommandPendingSubstitution] post violated: self.modelledValueSubstituted = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.enableThrustReverser. User supplies this. */
export type IgnitionThrustControllerEnableThrustReverserImpl = (self: IgnitionThrustController) => { self: IgnitionThrustController; modified: { reverserDeploymentEnabled: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.enableThrustReverser. */
export function wrapIgnitionThrustControllerEnableThrustReverser(impl: IgnitionThrustControllerEnableThrustReverserImpl): (self: IgnitionThrustController) => IgnitionThrustController {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[IgnitionThrustController.enableThrustReverser] pre violated: self.aircraftInFlight = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === true))) {
        postViolations.push("[IgnitionThrustController.enableThrustReverser] post violated: self.reverserDeploymentEnabled = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.enableThrustReverser (async). User supplies this. */
export type IgnitionThrustControllerEnableThrustReverserAsyncImpl = (self: IgnitionThrustController) => Promise<{ self: IgnitionThrustController; modified: { reverserDeploymentEnabled: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.enableThrustReverser (async). */
export function wrapIgnitionThrustControllerEnableThrustReverserAsync(impl: IgnitionThrustControllerEnableThrustReverserAsyncImpl): (self: IgnitionThrustController) => Promise<IgnitionThrustController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[IgnitionThrustController.enableThrustReverser] pre violated: self.aircraftInFlight = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === true))) {
        postViolations.push("[IgnitionThrustController.enableThrustReverser] post violated: self.reverserDeploymentEnabled = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.disableThrustReverser. User supplies this. */
export type IgnitionThrustControllerDisableThrustReverserImpl = (self: IgnitionThrustController) => { self: IgnitionThrustController; modified: { reverserDeploymentEnabled: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.disableThrustReverser. */
export function wrapIgnitionThrustControllerDisableThrustReverser(impl: IgnitionThrustControllerDisableThrustReverserImpl): (self: IgnitionThrustController) => IgnitionThrustController {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.reverserDeploymentEnabled === true))) {
      preViolations.push("[IgnitionThrustController.disableThrustReverser] pre violated: self.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[IgnitionThrustController.disableThrustReverser] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.disableThrustReverser (async). User supplies this. */
export type IgnitionThrustControllerDisableThrustReverserAsyncImpl = (self: IgnitionThrustController) => Promise<{ self: IgnitionThrustController; modified: { reverserDeploymentEnabled: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.disableThrustReverser (async). */
export function wrapIgnitionThrustControllerDisableThrustReverserAsync(impl: IgnitionThrustControllerDisableThrustReverserAsyncImpl): (self: IgnitionThrustController) => Promise<IgnitionThrustController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.reverserDeploymentEnabled === true))) {
      preViolations.push("[IgnitionThrustController.disableThrustReverser] pre violated: self.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[IgnitionThrustController.disableThrustReverser] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.rejectReverserIfAirborne. User supplies this. */
export type IgnitionThrustControllerRejectReverserIfAirborneImpl = (self: IgnitionThrustController) => { self: IgnitionThrustController; modified: { reverserInFlightAttemptRejected: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.rejectReverserIfAirborne. */
export function wrapIgnitionThrustControllerRejectReverserIfAirborne(impl: IgnitionThrustControllerRejectReverserIfAirborneImpl): (self: IgnitionThrustController) => IgnitionThrustController {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[IgnitionThrustController.rejectReverserIfAirborne] pre violated: self.aircraftInFlight = true");
    }
    if (!((self.reverserDeploymentEnabled === false))) {
      preViolations.push("[IgnitionThrustController.rejectReverserIfAirborne] pre violated: self.reverserDeploymentEnabled = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserInFlightAttemptRejected === true))) {
        postViolations.push("[IgnitionThrustController.rejectReverserIfAirborne] post violated: self.reverserInFlightAttemptRejected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.rejectReverserIfAirborne (async). User supplies this. */
export type IgnitionThrustControllerRejectReverserIfAirborneAsyncImpl = (self: IgnitionThrustController) => Promise<{ self: IgnitionThrustController; modified: { reverserInFlightAttemptRejected: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.rejectReverserIfAirborne (async). */
export function wrapIgnitionThrustControllerRejectReverserIfAirborneAsync(impl: IgnitionThrustControllerRejectReverserIfAirborneAsyncImpl): (self: IgnitionThrustController) => Promise<IgnitionThrustController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[IgnitionThrustController.rejectReverserIfAirborne] pre violated: self.aircraftInFlight = true");
    }
    if (!((self.reverserDeploymentEnabled === false))) {
      preViolations.push("[IgnitionThrustController.rejectReverserIfAirborne] pre violated: self.reverserDeploymentEnabled = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserInFlightAttemptRejected === true))) {
        postViolations.push("[IgnitionThrustController.rejectReverserIfAirborne] post violated: self.reverserInFlightAttemptRejected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.forceReverserDisableBeforeFlight. User supplies this. */
export type IgnitionThrustControllerForceReverserDisableBeforeFlightImpl = (self: IgnitionThrustController) => { self: IgnitionThrustController; modified: { reverserDeploymentEnabled: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.forceReverserDisableBeforeFlight. */
export function wrapIgnitionThrustControllerForceReverserDisableBeforeFlight(impl: IgnitionThrustControllerForceReverserDisableBeforeFlightImpl): (self: IgnitionThrustController) => IgnitionThrustController {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[IgnitionThrustController.forceReverserDisableBeforeFlight] pre violated: self.aircraftInFlight = false");
    }
    if (!((self.reverserDeploymentEnabled === true))) {
      preViolations.push("[IgnitionThrustController.forceReverserDisableBeforeFlight] pre violated: self.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[IgnitionThrustController.forceReverserDisableBeforeFlight] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.forceReverserDisableBeforeFlight (async). User supplies this. */
export type IgnitionThrustControllerForceReverserDisableBeforeFlightAsyncImpl = (self: IgnitionThrustController) => Promise<{ self: IgnitionThrustController; modified: { reverserDeploymentEnabled: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.forceReverserDisableBeforeFlight (async). */
export function wrapIgnitionThrustControllerForceReverserDisableBeforeFlightAsync(impl: IgnitionThrustControllerForceReverserDisableBeforeFlightAsyncImpl): (self: IgnitionThrustController) => Promise<IgnitionThrustController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[IgnitionThrustController.forceReverserDisableBeforeFlight] pre violated: self.aircraftInFlight = false");
    }
    if (!((self.reverserDeploymentEnabled === true))) {
      preViolations.push("[IgnitionThrustController.forceReverserDisableBeforeFlight] pre violated: self.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[IgnitionThrustController.forceReverserDisableBeforeFlight] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.receiveFlightPhaseUpdate. User supplies this. */
export type IgnitionThrustControllerReceiveFlightPhaseUpdateImpl = (self: IgnitionThrustController, inFlight: boolean) => { self: IgnitionThrustController; modified: { aircraftInFlight: unknown; reverserDeploymentEnabled: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.receiveFlightPhaseUpdate. */
export function wrapIgnitionThrustControllerReceiveFlightPhaseUpdate(impl: IgnitionThrustControllerReceiveFlightPhaseUpdateImpl): (self: IgnitionThrustController, inFlight: boolean) => IgnitionThrustController {
  return (self, inFlight) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === inFlight))) {
        postViolations.push("[IgnitionThrustController.receiveFlightPhaseUpdate] post violated: self.aircraftInFlight = inFlight");
      }
      if (!(((inFlight) ? ((__result.self.reverserDeploymentEnabled === false)) : ((__result.self.reverserDeploymentEnabled === __result.self.reverserDeploymentEnabled))))) {
        postViolations.push("[IgnitionThrustController.receiveFlightPhaseUpdate] post violated: if inFlight then\n            self.reverserDeploymentEnabled = false\n          else\n            self.reverserDeploymentEnabled = self.reverserDeploymentEnabled\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.receiveFlightPhaseUpdate (async). User supplies this. */
export type IgnitionThrustControllerReceiveFlightPhaseUpdateAsyncImpl = (self: IgnitionThrustController, inFlight: boolean) => Promise<{ self: IgnitionThrustController; modified: { aircraftInFlight: unknown; reverserDeploymentEnabled: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.receiveFlightPhaseUpdate (async). */
export function wrapIgnitionThrustControllerReceiveFlightPhaseUpdateAsync(impl: IgnitionThrustControllerReceiveFlightPhaseUpdateAsyncImpl): (self: IgnitionThrustController, inFlight: boolean) => Promise<IgnitionThrustController> {
  return async (self, inFlight) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === inFlight))) {
        postViolations.push("[IgnitionThrustController.receiveFlightPhaseUpdate] post violated: self.aircraftInFlight = inFlight");
      }
      if (!(((inFlight) ? ((__result.self.reverserDeploymentEnabled === false)) : ((__result.self.reverserDeploymentEnabled === __result.self.reverserDeploymentEnabled))))) {
        postViolations.push("[IgnitionThrustController.receiveFlightPhaseUpdate] post violated: if inFlight then\n            self.reverserDeploymentEnabled = false\n          else\n            self.reverserDeploymentEnabled = self.reverserDeploymentEnabled\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.receiveSensorFaultStatus. User supplies this. */
export type IgnitionThrustControllerReceiveSensorFaultStatusImpl = (self: IgnitionThrustController, faultActive: boolean, substituted: boolean) => { self: IgnitionThrustController; modified: { sensorFaultActive: unknown; modelledValueSubstituted: unknown } };

/** Contract-checking wrapper for IgnitionThrustController.receiveSensorFaultStatus. */
export function wrapIgnitionThrustControllerReceiveSensorFaultStatus(impl: IgnitionThrustControllerReceiveSensorFaultStatusImpl): (self: IgnitionThrustController, faultActive: boolean, substituted: boolean) => IgnitionThrustController {
  return (self, faultActive, substituted) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultActive, substituted);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultActive === faultActive))) {
        postViolations.push("[IgnitionThrustController.receiveSensorFaultStatus] post violated: self.sensorFaultActive = faultActive");
      }
      if (!((__result.self.modelledValueSubstituted === substituted))) {
        postViolations.push("[IgnitionThrustController.receiveSensorFaultStatus] post violated: self.modelledValueSubstituted = substituted");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionThrustController.receiveSensorFaultStatus (async). User supplies this. */
export type IgnitionThrustControllerReceiveSensorFaultStatusAsyncImpl = (self: IgnitionThrustController, faultActive: boolean, substituted: boolean) => Promise<{ self: IgnitionThrustController; modified: { sensorFaultActive: unknown; modelledValueSubstituted: unknown } }>;

/** Contract-checking wrapper for IgnitionThrustController.receiveSensorFaultStatus (async). */
export function wrapIgnitionThrustControllerReceiveSensorFaultStatusAsync(impl: IgnitionThrustControllerReceiveSensorFaultStatusAsyncImpl): (self: IgnitionThrustController, faultActive: boolean, substituted: boolean) => Promise<IgnitionThrustController> {
  return async (self, faultActive, substituted) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultActive, substituted);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultActive === faultActive))) {
        postViolations.push("[IgnitionThrustController.receiveSensorFaultStatus] post violated: self.sensorFaultActive = faultActive");
      }
      if (!((__result.self.modelledValueSubstituted === substituted))) {
        postViolations.push("[IgnitionThrustController.receiveSensorFaultStatus] post violated: self.modelledValueSubstituted = substituted");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultManager.substituteModelledValue. User supplies this. */
export type SensorFaultManagerSubstituteModelledValueImpl = (self: SensorFaultManager, modelledSpeed: number) => { self: SensorFaultManager; modified: { sensorFaultDetected: unknown; usingModelledValue: unknown; modelledSpeedValue: unknown } };

/** Contract-checking wrapper for SensorFaultManager.substituteModelledValue. */
export function wrapSensorFaultManagerSubstituteModelledValue(impl: SensorFaultManagerSubstituteModelledValueImpl): (self: SensorFaultManager, modelledSpeed: number) => SensorFaultManager {
  return (self, modelledSpeed) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === false))) {
      preViolations.push("[SensorFaultManager.substituteModelledValue] pre violated: self.sensorFaultDetected = false");
    }
    if (!((modelledSpeed >= 0))) {
      preViolations.push("[SensorFaultManager.substituteModelledValue] pre violated: modelledSpeed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, modelledSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SensorFaultManager.substituteModelledValue] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.usingModelledValue === true))) {
        postViolations.push("[SensorFaultManager.substituteModelledValue] post violated: self.usingModelledValue = true");
      }
      if (!((__result.self.modelledSpeedValue === modelledSpeed))) {
        postViolations.push("[SensorFaultManager.substituteModelledValue] post violated: self.modelledSpeedValue = modelledSpeed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultManager.substituteModelledValue (async). User supplies this. */
export type SensorFaultManagerSubstituteModelledValueAsyncImpl = (self: SensorFaultManager, modelledSpeed: number) => Promise<{ self: SensorFaultManager; modified: { sensorFaultDetected: unknown; usingModelledValue: unknown; modelledSpeedValue: unknown } }>;

/** Contract-checking wrapper for SensorFaultManager.substituteModelledValue (async). */
export function wrapSensorFaultManagerSubstituteModelledValueAsync(impl: SensorFaultManagerSubstituteModelledValueAsyncImpl): (self: SensorFaultManager, modelledSpeed: number) => Promise<SensorFaultManager> {
  return async (self, modelledSpeed) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === false))) {
      preViolations.push("[SensorFaultManager.substituteModelledValue] pre violated: self.sensorFaultDetected = false");
    }
    if (!((modelledSpeed >= 0))) {
      preViolations.push("[SensorFaultManager.substituteModelledValue] pre violated: modelledSpeed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, modelledSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SensorFaultManager.substituteModelledValue] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.usingModelledValue === true))) {
        postViolations.push("[SensorFaultManager.substituteModelledValue] post violated: self.usingModelledValue = true");
      }
      if (!((__result.self.modelledSpeedValue === modelledSpeed))) {
        postViolations.push("[SensorFaultManager.substituteModelledValue] post violated: self.modelledSpeedValue = modelledSpeed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultManager.resumeSensorReading. User supplies this. */
export type SensorFaultManagerResumeSensorReadingImpl = (self: SensorFaultManager) => { self: SensorFaultManager; modified: { sensorFaultDetected: unknown; usingModelledValue: unknown } };

/** Contract-checking wrapper for SensorFaultManager.resumeSensorReading. */
export function wrapSensorFaultManagerResumeSensorReading(impl: SensorFaultManagerResumeSensorReadingImpl): (self: SensorFaultManager) => SensorFaultManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === true))) {
      preViolations.push("[SensorFaultManager.resumeSensorReading] pre violated: self.sensorFaultDetected = true");
    }
    if (!((self.usingModelledValue === true))) {
      preViolations.push("[SensorFaultManager.resumeSensorReading] pre violated: self.usingModelledValue = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SensorFaultManager.resumeSensorReading] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.usingModelledValue === false))) {
        postViolations.push("[SensorFaultManager.resumeSensorReading] post violated: self.usingModelledValue = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultManager.resumeSensorReading (async). User supplies this. */
export type SensorFaultManagerResumeSensorReadingAsyncImpl = (self: SensorFaultManager) => Promise<{ self: SensorFaultManager; modified: { sensorFaultDetected: unknown; usingModelledValue: unknown } }>;

/** Contract-checking wrapper for SensorFaultManager.resumeSensorReading (async). */
export function wrapSensorFaultManagerResumeSensorReadingAsync(impl: SensorFaultManagerResumeSensorReadingAsyncImpl): (self: SensorFaultManager) => Promise<SensorFaultManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === true))) {
      preViolations.push("[SensorFaultManager.resumeSensorReading] pre violated: self.sensorFaultDetected = true");
    }
    if (!((self.usingModelledValue === true))) {
      preViolations.push("[SensorFaultManager.resumeSensorReading] pre violated: self.usingModelledValue = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SensorFaultManager.resumeSensorReading] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.usingModelledValue === false))) {
        postViolations.push("[SensorFaultManager.resumeSensorReading] post violated: self.usingModelledValue = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FlightPhaseMonitor.transitionToFlight. User supplies this. */
export type FlightPhaseMonitorTransitionToFlightImpl = (self: FlightPhaseMonitor) => { self: FlightPhaseMonitor; modified: { aircraftInFlight: unknown } };

/** Contract-checking wrapper for FlightPhaseMonitor.transitionToFlight. */
export function wrapFlightPhaseMonitorTransitionToFlight(impl: FlightPhaseMonitorTransitionToFlightImpl): (self: FlightPhaseMonitor) => FlightPhaseMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[FlightPhaseMonitor.transitionToFlight] pre violated: self.aircraftInFlight = false");
    }
    if (!((self.weightOnWheelsDiscrete === false))) {
      preViolations.push("[FlightPhaseMonitor.transitionToFlight] pre violated: self.weightOnWheelsDiscrete = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === true))) {
        postViolations.push("[FlightPhaseMonitor.transitionToFlight] post violated: self.aircraftInFlight = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FlightPhaseMonitor.transitionToFlight (async). User supplies this. */
export type FlightPhaseMonitorTransitionToFlightAsyncImpl = (self: FlightPhaseMonitor) => Promise<{ self: FlightPhaseMonitor; modified: { aircraftInFlight: unknown } }>;

/** Contract-checking wrapper for FlightPhaseMonitor.transitionToFlight (async). */
export function wrapFlightPhaseMonitorTransitionToFlightAsync(impl: FlightPhaseMonitorTransitionToFlightAsyncImpl): (self: FlightPhaseMonitor) => Promise<FlightPhaseMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[FlightPhaseMonitor.transitionToFlight] pre violated: self.aircraftInFlight = false");
    }
    if (!((self.weightOnWheelsDiscrete === false))) {
      preViolations.push("[FlightPhaseMonitor.transitionToFlight] pre violated: self.weightOnWheelsDiscrete = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === true))) {
        postViolations.push("[FlightPhaseMonitor.transitionToFlight] post violated: self.aircraftInFlight = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FlightPhaseMonitor.transitionToGround. User supplies this. */
export type FlightPhaseMonitorTransitionToGroundImpl = (self: FlightPhaseMonitor) => { self: FlightPhaseMonitor; modified: { aircraftInFlight: unknown } };

/** Contract-checking wrapper for FlightPhaseMonitor.transitionToGround. */
export function wrapFlightPhaseMonitorTransitionToGround(impl: FlightPhaseMonitorTransitionToGroundImpl): (self: FlightPhaseMonitor) => FlightPhaseMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[FlightPhaseMonitor.transitionToGround] pre violated: self.aircraftInFlight = true");
    }
    if (!((self.weightOnWheelsDiscrete === true))) {
      preViolations.push("[FlightPhaseMonitor.transitionToGround] pre violated: self.weightOnWheelsDiscrete = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === false))) {
        postViolations.push("[FlightPhaseMonitor.transitionToGround] post violated: self.aircraftInFlight = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FlightPhaseMonitor.transitionToGround (async). User supplies this. */
export type FlightPhaseMonitorTransitionToGroundAsyncImpl = (self: FlightPhaseMonitor) => Promise<{ self: FlightPhaseMonitor; modified: { aircraftInFlight: unknown } }>;

/** Contract-checking wrapper for FlightPhaseMonitor.transitionToGround (async). */
export function wrapFlightPhaseMonitorTransitionToGroundAsync(impl: FlightPhaseMonitorTransitionToGroundAsyncImpl): (self: FlightPhaseMonitor) => Promise<FlightPhaseMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[FlightPhaseMonitor.transitionToGround] pre violated: self.aircraftInFlight = true");
    }
    if (!((self.weightOnWheelsDiscrete === true))) {
      preViolations.push("[FlightPhaseMonitor.transitionToGround] pre violated: self.weightOnWheelsDiscrete = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === false))) {
        postViolations.push("[FlightPhaseMonitor.transitionToGround] post violated: self.aircraftInFlight = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FlightPhaseMonitor.updateWeightOnWheels. User supplies this. */
export type FlightPhaseMonitorUpdateWeightOnWheelsImpl = (self: FlightPhaseMonitor, wow: boolean) => { self: FlightPhaseMonitor; modified: { weightOnWheelsDiscrete: unknown } };

/** Contract-checking wrapper for FlightPhaseMonitor.updateWeightOnWheels. */
export function wrapFlightPhaseMonitorUpdateWeightOnWheels(impl: FlightPhaseMonitorUpdateWeightOnWheelsImpl): (self: FlightPhaseMonitor, wow: boolean) => FlightPhaseMonitor {
  return (self, wow) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, wow);
      const postViolations: string[] = [];
      if (!((__result.self.weightOnWheelsDiscrete === wow))) {
        postViolations.push("[FlightPhaseMonitor.updateWeightOnWheels] post violated: self.weightOnWheelsDiscrete = wow");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FlightPhaseMonitor.updateWeightOnWheels (async). User supplies this. */
export type FlightPhaseMonitorUpdateWeightOnWheelsAsyncImpl = (self: FlightPhaseMonitor, wow: boolean) => Promise<{ self: FlightPhaseMonitor; modified: { weightOnWheelsDiscrete: unknown } }>;

/** Contract-checking wrapper for FlightPhaseMonitor.updateWeightOnWheels (async). */
export function wrapFlightPhaseMonitorUpdateWeightOnWheelsAsync(impl: FlightPhaseMonitorUpdateWeightOnWheelsAsyncImpl): (self: FlightPhaseMonitor, wow: boolean) => Promise<FlightPhaseMonitor> {
  return async (self, wow) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, wow);
      const postViolations: string[] = [];
      if (!((__result.self.weightOnWheelsDiscrete === wow))) {
        postViolations.push("[FlightPhaseMonitor.updateWeightOnWheels] post violated: self.weightOnWheelsDiscrete = wow");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SpeedBus.publishSpeed. User supplies this. */
export type SpeedBusPublishSpeedImpl = (self: SpeedBus, speed: number, modelled: boolean, faultActive: boolean) => { self: SpeedBus; modified: { effectiveSpeed: unknown; isModelled: unknown; faultFlagFromConsumer: unknown } };

/** Contract-checking wrapper for SpeedBus.publishSpeed. */
export function wrapSpeedBusPublishSpeed(impl: SpeedBusPublishSpeedImpl): (self: SpeedBus, speed: number, modelled: boolean, faultActive: boolean) => SpeedBus {
  return (self, speed, modelled, faultActive) => {
    const preViolations: string[] = [];
    if (!((speed >= 0))) {
      preViolations.push("[SpeedBus.publishSpeed] pre violated: speed >= 0.0");
    }
    if (!((!(modelled) || faultActive))) {
      preViolations.push("[SpeedBus.publishSpeed] pre violated: modelled implies faultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, speed, modelled, faultActive);
      const postViolations: string[] = [];
      if (!((__result.self.effectiveSpeed === speed))) {
        postViolations.push("[SpeedBus.publishSpeed] post violated: self.effectiveSpeed = speed");
      }
      if (!((__result.self.isModelled === modelled))) {
        postViolations.push("[SpeedBus.publishSpeed] post violated: self.isModelled = modelled");
      }
      if (!((__result.self.faultFlagFromConsumer === faultActive))) {
        postViolations.push("[SpeedBus.publishSpeed] post violated: self.faultFlagFromConsumer = faultActive");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SpeedBus.publishSpeed (async). User supplies this. */
export type SpeedBusPublishSpeedAsyncImpl = (self: SpeedBus, speed: number, modelled: boolean, faultActive: boolean) => Promise<{ self: SpeedBus; modified: { effectiveSpeed: unknown; isModelled: unknown; faultFlagFromConsumer: unknown } }>;

/** Contract-checking wrapper for SpeedBus.publishSpeed (async). */
export function wrapSpeedBusPublishSpeedAsync(impl: SpeedBusPublishSpeedAsyncImpl): (self: SpeedBus, speed: number, modelled: boolean, faultActive: boolean) => Promise<SpeedBus> {
  return async (self, speed, modelled, faultActive) => {
    const preViolations: string[] = [];
    if (!((speed >= 0))) {
      preViolations.push("[SpeedBus.publishSpeed] pre violated: speed >= 0.0");
    }
    if (!((!(modelled) || faultActive))) {
      preViolations.push("[SpeedBus.publishSpeed] pre violated: modelled implies faultActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, speed, modelled, faultActive);
      const postViolations: string[] = [];
      if (!((__result.self.effectiveSpeed === speed))) {
        postViolations.push("[SpeedBus.publishSpeed] post violated: self.effectiveSpeed = speed");
      }
      if (!((__result.self.isModelled === modelled))) {
        postViolations.push("[SpeedBus.publishSpeed] post violated: self.isModelled = modelled");
      }
      if (!((__result.self.faultFlagFromConsumer === faultActive))) {
        postViolations.push("[SpeedBus.publishSpeed] post violated: self.faultFlagFromConsumer = faultActive");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultSignalBus.propagateFaultStatus. User supplies this. */
export type FaultSignalBusPropagateFaultStatusImpl = (self: FaultSignalBus, fault: boolean, substituted: boolean) => { self: FaultSignalBus; modified: { faultActive: unknown; substitutionActive: unknown } };

/** Contract-checking wrapper for FaultSignalBus.propagateFaultStatus. */
export function wrapFaultSignalBusPropagateFaultStatus(impl: FaultSignalBusPropagateFaultStatusImpl): (self: FaultSignalBus, fault: boolean, substituted: boolean) => FaultSignalBus {
  return (self, fault, substituted) => {
    const preViolations: string[] = [];
    if (!((!(substituted) || fault))) {
      preViolations.push("[FaultSignalBus.propagateFaultStatus] pre violated: substituted implies fault");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, fault, substituted);
      const postViolations: string[] = [];
      if (!((__result.self.faultActive === fault))) {
        postViolations.push("[FaultSignalBus.propagateFaultStatus] post violated: self.faultActive = fault");
      }
      if (!((__result.self.substitutionActive === substituted))) {
        postViolations.push("[FaultSignalBus.propagateFaultStatus] post violated: self.substitutionActive = substituted");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultSignalBus.propagateFaultStatus (async). User supplies this. */
export type FaultSignalBusPropagateFaultStatusAsyncImpl = (self: FaultSignalBus, fault: boolean, substituted: boolean) => Promise<{ self: FaultSignalBus; modified: { faultActive: unknown; substitutionActive: unknown } }>;

/** Contract-checking wrapper for FaultSignalBus.propagateFaultStatus (async). */
export function wrapFaultSignalBusPropagateFaultStatusAsync(impl: FaultSignalBusPropagateFaultStatusAsyncImpl): (self: FaultSignalBus, fault: boolean, substituted: boolean) => Promise<FaultSignalBus> {
  return async (self, fault, substituted) => {
    const preViolations: string[] = [];
    if (!((!(substituted) || fault))) {
      preViolations.push("[FaultSignalBus.propagateFaultStatus] pre violated: substituted implies fault");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, fault, substituted);
      const postViolations: string[] = [];
      if (!((__result.self.faultActive === fault))) {
        postViolations.push("[FaultSignalBus.propagateFaultStatus] post violated: self.faultActive = fault");
      }
      if (!((__result.self.substitutionActive === substituted))) {
        postViolations.push("[FaultSignalBus.propagateFaultStatus] post violated: self.substitutionActive = substituted");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustBus.publishPhaseForThrust. User supplies this. */
export type ThrustBusPublishPhaseForThrustImpl = (self: ThrustBus, inFlight: boolean) => { self: ThrustBus; modified: { publishedInFlight: unknown; sequenceNumber: unknown } };

/** Contract-checking wrapper for ThrustBus.publishPhaseForThrust. */
export function wrapThrustBusPublishPhaseForThrust(impl: ThrustBusPublishPhaseForThrustImpl): (self: ThrustBus, inFlight: boolean) => ThrustBus {
  return (self, inFlight) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.publishedInFlight === inFlight))) {
        postViolations.push("[ThrustBus.publishPhaseForThrust] post violated: self.publishedInFlight = inFlight");
      }
      if (!((__result.self.sequenceNumber === (__result.self.sequenceNumber + 1)))) {
        postViolations.push("[ThrustBus.publishPhaseForThrust] post violated: self.sequenceNumber = self.sequenceNumber + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustBus.publishPhaseForThrust (async). User supplies this. */
export type ThrustBusPublishPhaseForThrustAsyncImpl = (self: ThrustBus, inFlight: boolean) => Promise<{ self: ThrustBus; modified: { publishedInFlight: unknown; sequenceNumber: unknown } }>;

/** Contract-checking wrapper for ThrustBus.publishPhaseForThrust (async). */
export function wrapThrustBusPublishPhaseForThrustAsync(impl: ThrustBusPublishPhaseForThrustAsyncImpl): (self: ThrustBus, inFlight: boolean) => Promise<ThrustBus> {
  return async (self, inFlight) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.publishedInFlight === inFlight))) {
        postViolations.push("[ThrustBus.publishPhaseForThrust] post violated: self.publishedInFlight = inFlight");
      }
      if (!((__result.self.sequenceNumber === (__result.self.sequenceNumber + 1)))) {
        postViolations.push("[ThrustBus.publishPhaseForThrust] post violated: self.sequenceNumber = self.sequenceNumber + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReverserBus.publishPhaseForReverser. User supplies this. */
export type ReverserBusPublishPhaseForReverserImpl = (self: ReverserBus, inFlight: boolean) => { self: ReverserBus; modified: { publishedInFlight: unknown; sequenceNumber: unknown } };

/** Contract-checking wrapper for ReverserBus.publishPhaseForReverser. */
export function wrapReverserBusPublishPhaseForReverser(impl: ReverserBusPublishPhaseForReverserImpl): (self: ReverserBus, inFlight: boolean) => ReverserBus {
  return (self, inFlight) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.publishedInFlight === inFlight))) {
        postViolations.push("[ReverserBus.publishPhaseForReverser] post violated: self.publishedInFlight = inFlight");
      }
      if (!((__result.self.sequenceNumber === (__result.self.sequenceNumber + 1)))) {
        postViolations.push("[ReverserBus.publishPhaseForReverser] post violated: self.sequenceNumber = self.sequenceNumber + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReverserBus.publishPhaseForReverser (async). User supplies this. */
export type ReverserBusPublishPhaseForReverserAsyncImpl = (self: ReverserBus, inFlight: boolean) => Promise<{ self: ReverserBus; modified: { publishedInFlight: unknown; sequenceNumber: unknown } }>;

/** Contract-checking wrapper for ReverserBus.publishPhaseForReverser (async). */
export function wrapReverserBusPublishPhaseForReverserAsync(impl: ReverserBusPublishPhaseForReverserAsyncImpl): (self: ReverserBus, inFlight: boolean) => Promise<ReverserBus> {
  return async (self, inFlight) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, inFlight);
      const postViolations: string[] = [];
      if (!((__result.self.publishedInFlight === inFlight))) {
        postViolations.push("[ReverserBus.publishPhaseForReverser] post violated: self.publishedInFlight = inFlight");
      }
      if (!((__result.self.sequenceNumber === (__result.self.sequenceNumber + 1)))) {
        postViolations.push("[ReverserBus.publishPhaseForReverser] post violated: self.sequenceNumber = self.sequenceNumber + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemLimitFuelOnOverspeedImpl = (self: EngineControlSystem, detectedSpeed: number) => { self: EngineControlSystem; modified: { fuelFlow: unknown; engineSpeed: unknown } };

/** Contract-checking wrapper for EngineControlSystem.limitFuelOnOverspeed. */
export function wrapEngineControlSystemLimitFuelOnOverspeed(impl: EngineControlSystemLimitFuelOnOverspeedImpl): (self: EngineControlSystem, detectedSpeed: number) => EngineControlSystem {
  return (self, detectedSpeed) => {
    const preViolations: string[] = [];
    if (!((detectedSpeed >= self.maxSafeSpeed))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: detectedSpeed >= self.maxSafeSpeed");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: self.overspeedProtectionFitted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, detectedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[EngineControlSystem.limitFuelOnOverspeed] post violated: self.fuelFlow = 0.0");
      }
      if (!((__result.self.engineSpeed <= __result.self.maxSafeSpeed))) {
        postViolations.push("[EngineControlSystem.limitFuelOnOverspeed] post violated: self.engineSpeed <= self.maxSafeSpeed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemLimitFuelOnOverspeedAsyncImpl = (self: EngineControlSystem, detectedSpeed: number) => Promise<{ self: EngineControlSystem; modified: { fuelFlow: unknown; engineSpeed: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.limitFuelOnOverspeed (async). */
export function wrapEngineControlSystemLimitFuelOnOverspeedAsync(impl: EngineControlSystemLimitFuelOnOverspeedAsyncImpl): (self: EngineControlSystem, detectedSpeed: number) => Promise<EngineControlSystem> {
  return async (self, detectedSpeed) => {
    const preViolations: string[] = [];
    if (!((detectedSpeed >= self.maxSafeSpeed))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: detectedSpeed >= self.maxSafeSpeed");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[EngineControlSystem.limitFuelOnOverspeed] pre violated: self.overspeedProtectionFitted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, detectedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[EngineControlSystem.limitFuelOnOverspeed] post violated: self.fuelFlow = 0.0");
      }
      if (!((__result.self.engineSpeed <= __result.self.maxSafeSpeed))) {
        postViolations.push("[EngineControlSystem.limitFuelOnOverspeed] post violated: self.engineSpeed <= self.maxSafeSpeed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.activateContinuousIgnition. User supplies this. */
export type EngineControlSystemActivateContinuousIgnitionImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { continuousIgnitionActive: unknown } };

/** Contract-checking wrapper for EngineControlSystem.activateContinuousIgnition. */
export function wrapEngineControlSystemActivateContinuousIgnition(impl: EngineControlSystemActivateContinuousIgnitionImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === false))) {
      preViolations.push("[EngineControlSystem.activateContinuousIgnition] pre violated: self.continuousIgnitionActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === true))) {
        postViolations.push("[EngineControlSystem.activateContinuousIgnition] post violated: self.continuousIgnitionActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.activateContinuousIgnition (async). User supplies this. */
export type EngineControlSystemActivateContinuousIgnitionAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { continuousIgnitionActive: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.activateContinuousIgnition (async). */
export function wrapEngineControlSystemActivateContinuousIgnitionAsync(impl: EngineControlSystemActivateContinuousIgnitionAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === false))) {
      preViolations.push("[EngineControlSystem.activateContinuousIgnition] pre violated: self.continuousIgnitionActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === true))) {
        postViolations.push("[EngineControlSystem.activateContinuousIgnition] post violated: self.continuousIgnitionActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.deactivateContinuousIgnition. User supplies this. */
export type EngineControlSystemDeactivateContinuousIgnitionImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { continuousIgnitionActive: unknown } };

/** Contract-checking wrapper for EngineControlSystem.deactivateContinuousIgnition. */
export function wrapEngineControlSystemDeactivateContinuousIgnition(impl: EngineControlSystemDeactivateContinuousIgnitionImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[EngineControlSystem.deactivateContinuousIgnition] pre violated: self.continuousIgnitionActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === false))) {
        postViolations.push("[EngineControlSystem.deactivateContinuousIgnition] post violated: self.continuousIgnitionActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.deactivateContinuousIgnition (async). User supplies this. */
export type EngineControlSystemDeactivateContinuousIgnitionAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { continuousIgnitionActive: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.deactivateContinuousIgnition (async). */
export function wrapEngineControlSystemDeactivateContinuousIgnitionAsync(impl: EngineControlSystemDeactivateContinuousIgnitionAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[EngineControlSystem.deactivateContinuousIgnition] pre violated: self.continuousIgnitionActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === false))) {
        postViolations.push("[EngineControlSystem.deactivateContinuousIgnition] post violated: self.continuousIgnitionActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemHoldThrustInFlightImpl = (self: EngineControlSystem, commanded: number) => { self: EngineControlSystem; modified: { commandedThrust: unknown } };

/** Contract-checking wrapper for EngineControlSystem.holdThrustInFlight. */
export function wrapEngineControlSystemHoldThrustInFlight(impl: EngineControlSystemHoldThrustInFlightImpl): (self: EngineControlSystem, commanded: number) => EngineControlSystem {
  return (self, commanded) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[EngineControlSystem.holdThrustInFlight] pre violated: self.aircraftInFlight = true");
    }
    if (!((commanded >= 0))) {
      preViolations.push("[EngineControlSystem.holdThrustInFlight] pre violated: commanded >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commanded);
      const postViolations: string[] = [];
      if (!((__result.self.commandedThrust === commanded))) {
        postViolations.push("[EngineControlSystem.holdThrustInFlight] post violated: self.commandedThrust = commanded");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemHoldThrustInFlightAsyncImpl = (self: EngineControlSystem, commanded: number) => Promise<{ self: EngineControlSystem; modified: { commandedThrust: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.holdThrustInFlight (async). */
export function wrapEngineControlSystemHoldThrustInFlightAsync(impl: EngineControlSystemHoldThrustInFlightAsyncImpl): (self: EngineControlSystem, commanded: number) => Promise<EngineControlSystem> {
  return async (self, commanded) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[EngineControlSystem.holdThrustInFlight] pre violated: self.aircraftInFlight = true");
    }
    if (!((commanded >= 0))) {
      preViolations.push("[EngineControlSystem.holdThrustInFlight] pre violated: commanded >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commanded);
      const postViolations: string[] = [];
      if (!((__result.self.commandedThrust === commanded))) {
        postViolations.push("[EngineControlSystem.holdThrustInFlight] post violated: self.commandedThrust = commanded");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.enableThrustReverser. User supplies this. */
export type EngineControlSystemEnableThrustReverserImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { reverserDeploymentEnabled: unknown } };

/** Contract-checking wrapper for EngineControlSystem.enableThrustReverser. */
export function wrapEngineControlSystemEnableThrustReverser(impl: EngineControlSystemEnableThrustReverserImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[EngineControlSystem.enableThrustReverser] pre violated: self.aircraftInFlight = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === true))) {
        postViolations.push("[EngineControlSystem.enableThrustReverser] post violated: self.reverserDeploymentEnabled = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.enableThrustReverser (async). User supplies this. */
export type EngineControlSystemEnableThrustReverserAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { reverserDeploymentEnabled: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.enableThrustReverser (async). */
export function wrapEngineControlSystemEnableThrustReverserAsync(impl: EngineControlSystemEnableThrustReverserAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[EngineControlSystem.enableThrustReverser] pre violated: self.aircraftInFlight = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === true))) {
        postViolations.push("[EngineControlSystem.enableThrustReverser] post violated: self.reverserDeploymentEnabled = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.disableThrustReverser. User supplies this. */
export type EngineControlSystemDisableThrustReverserImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { reverserDeploymentEnabled: unknown } };

/** Contract-checking wrapper for EngineControlSystem.disableThrustReverser. */
export function wrapEngineControlSystemDisableThrustReverser(impl: EngineControlSystemDisableThrustReverserImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.reverserDeploymentEnabled === true))) {
      preViolations.push("[EngineControlSystem.disableThrustReverser] pre violated: self.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[EngineControlSystem.disableThrustReverser] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.disableThrustReverser (async). User supplies this. */
export type EngineControlSystemDisableThrustReverserAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { reverserDeploymentEnabled: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.disableThrustReverser (async). */
export function wrapEngineControlSystemDisableThrustReverserAsync(impl: EngineControlSystemDisableThrustReverserAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.reverserDeploymentEnabled === true))) {
      preViolations.push("[EngineControlSystem.disableThrustReverser] pre violated: self.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[EngineControlSystem.disableThrustReverser] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.substituteModelledValue. User supplies this. */
export type EngineControlSystemSubstituteModelledValueImpl = (self: EngineControlSystem, modelledSpeed: number) => { self: EngineControlSystem; modified: { sensorFaultDetected: unknown; usingModelledValue: unknown; modelledSpeedValue: unknown } };

/** Contract-checking wrapper for EngineControlSystem.substituteModelledValue. */
export function wrapEngineControlSystemSubstituteModelledValue(impl: EngineControlSystemSubstituteModelledValueImpl): (self: EngineControlSystem, modelledSpeed: number) => EngineControlSystem {
  return (self, modelledSpeed) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === false))) {
      preViolations.push("[EngineControlSystem.substituteModelledValue] pre violated: self.sensorFaultDetected = false");
    }
    if (!((modelledSpeed >= 0))) {
      preViolations.push("[EngineControlSystem.substituteModelledValue] pre violated: modelledSpeed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, modelledSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[EngineControlSystem.substituteModelledValue] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.usingModelledValue === true))) {
        postViolations.push("[EngineControlSystem.substituteModelledValue] post violated: self.usingModelledValue = true");
      }
      if (!((__result.self.modelledSpeedValue === modelledSpeed))) {
        postViolations.push("[EngineControlSystem.substituteModelledValue] post violated: self.modelledSpeedValue = modelledSpeed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.substituteModelledValue (async). User supplies this. */
export type EngineControlSystemSubstituteModelledValueAsyncImpl = (self: EngineControlSystem, modelledSpeed: number) => Promise<{ self: EngineControlSystem; modified: { sensorFaultDetected: unknown; usingModelledValue: unknown; modelledSpeedValue: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.substituteModelledValue (async). */
export function wrapEngineControlSystemSubstituteModelledValueAsync(impl: EngineControlSystemSubstituteModelledValueAsyncImpl): (self: EngineControlSystem, modelledSpeed: number) => Promise<EngineControlSystem> {
  return async (self, modelledSpeed) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === false))) {
      preViolations.push("[EngineControlSystem.substituteModelledValue] pre violated: self.sensorFaultDetected = false");
    }
    if (!((modelledSpeed >= 0))) {
      preViolations.push("[EngineControlSystem.substituteModelledValue] pre violated: modelledSpeed >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, modelledSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[EngineControlSystem.substituteModelledValue] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.usingModelledValue === true))) {
        postViolations.push("[EngineControlSystem.substituteModelledValue] post violated: self.usingModelledValue = true");
      }
      if (!((__result.self.modelledSpeedValue === modelledSpeed))) {
        postViolations.push("[EngineControlSystem.substituteModelledValue] post violated: self.modelledSpeedValue = modelledSpeed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.resumeSensorReading. User supplies this. */
export type EngineControlSystemResumeSensorReadingImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { sensorFaultDetected: unknown; usingModelledValue: unknown } };

/** Contract-checking wrapper for EngineControlSystem.resumeSensorReading. */
export function wrapEngineControlSystemResumeSensorReading(impl: EngineControlSystemResumeSensorReadingImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === true))) {
      preViolations.push("[EngineControlSystem.resumeSensorReading] pre violated: self.sensorFaultDetected = true");
    }
    if (!((self.usingModelledValue === true))) {
      preViolations.push("[EngineControlSystem.resumeSensorReading] pre violated: self.usingModelledValue = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[EngineControlSystem.resumeSensorReading] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.usingModelledValue === false))) {
        postViolations.push("[EngineControlSystem.resumeSensorReading] post violated: self.usingModelledValue = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.resumeSensorReading (async). User supplies this. */
export type EngineControlSystemResumeSensorReadingAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { sensorFaultDetected: unknown; usingModelledValue: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.resumeSensorReading (async). */
export function wrapEngineControlSystemResumeSensorReadingAsync(impl: EngineControlSystemResumeSensorReadingAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === true))) {
      preViolations.push("[EngineControlSystem.resumeSensorReading] pre violated: self.sensorFaultDetected = true");
    }
    if (!((self.usingModelledValue === true))) {
      preViolations.push("[EngineControlSystem.resumeSensorReading] pre violated: self.usingModelledValue = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[EngineControlSystem.resumeSensorReading] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.usingModelledValue === false))) {
        postViolations.push("[EngineControlSystem.resumeSensorReading] post violated: self.usingModelledValue = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.transitionToFlight. User supplies this. */
export type EngineControlSystemTransitionToFlightImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { aircraftInFlight: unknown; reverserDeploymentEnabled: unknown } };

/** Contract-checking wrapper for EngineControlSystem.transitionToFlight. */
export function wrapEngineControlSystemTransitionToFlight(impl: EngineControlSystemTransitionToFlightImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[EngineControlSystem.transitionToFlight] pre violated: self.aircraftInFlight = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === true))) {
        postViolations.push("[EngineControlSystem.transitionToFlight] post violated: self.aircraftInFlight = true");
      }
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[EngineControlSystem.transitionToFlight] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.transitionToFlight (async). User supplies this. */
export type EngineControlSystemTransitionToFlightAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { aircraftInFlight: unknown; reverserDeploymentEnabled: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.transitionToFlight (async). */
export function wrapEngineControlSystemTransitionToFlightAsync(impl: EngineControlSystemTransitionToFlightAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[EngineControlSystem.transitionToFlight] pre violated: self.aircraftInFlight = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === true))) {
        postViolations.push("[EngineControlSystem.transitionToFlight] post violated: self.aircraftInFlight = true");
      }
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[EngineControlSystem.transitionToFlight] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.transitionToGround. User supplies this. */
export type EngineControlSystemTransitionToGroundImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { aircraftInFlight: unknown } };

/** Contract-checking wrapper for EngineControlSystem.transitionToGround. */
export function wrapEngineControlSystemTransitionToGround(impl: EngineControlSystemTransitionToGroundImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[EngineControlSystem.transitionToGround] pre violated: self.aircraftInFlight = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === false))) {
        postViolations.push("[EngineControlSystem.transitionToGround] post violated: self.aircraftInFlight = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.transitionToGround (async). User supplies this. */
export type EngineControlSystemTransitionToGroundAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { aircraftInFlight: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.transitionToGround (async). */
export function wrapEngineControlSystemTransitionToGroundAsync(impl: EngineControlSystemTransitionToGroundAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[EngineControlSystem.transitionToGround] pre violated: self.aircraftInFlight = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftInFlight === false))) {
        postViolations.push("[EngineControlSystem.transitionToGround] post violated: self.aircraftInFlight = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectReverserIfAirborne. User supplies this. */
export type EngineControlSystemFormalizedRejectReverserIfAirborneImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { reverserInFlightAttemptRejected: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectReverserIfAirborne. */
export function wrapEngineControlSystemFormalizedRejectReverserIfAirborne(impl: EngineControlSystemFormalizedRejectReverserIfAirborneImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserIfAirborne] pre violated: self.aircraftInFlight = true");
    }
    if (!((self.reverserDeploymentEnabled === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserIfAirborne] pre violated: self.reverserDeploymentEnabled = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserInFlightAttemptRejected === true))) {
        postViolations.push("[EngineControlSystemFormalized.rejectReverserIfAirborne] post violated: self.reverserInFlightAttemptRejected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectReverserIfAirborne (async). User supplies this. */
export type EngineControlSystemFormalizedRejectReverserIfAirborneAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { reverserInFlightAttemptRejected: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectReverserIfAirborne (async). */
export function wrapEngineControlSystemFormalizedRejectReverserIfAirborneAsync(impl: EngineControlSystemFormalizedRejectReverserIfAirborneAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserIfAirborne] pre violated: self.aircraftInFlight = true");
    }
    if (!((self.reverserDeploymentEnabled === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserIfAirborne] pre violated: self.reverserDeploymentEnabled = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserInFlightAttemptRejected === true))) {
        postViolations.push("[EngineControlSystemFormalized.rejectReverserIfAirborne] post violated: self.reverserInFlightAttemptRejected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant. User supplies this. */
export type EngineControlSystemFormalizedRejectOverspeedLimitOnUnprotectedVariantImpl = (self: EngineControlSystemFormalized, detectedSpeed: number) => { self: EngineControlSystemFormalized; modified: { unprotectedOverspeedAlertIssued: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant. */
export function wrapEngineControlSystemFormalizedRejectOverspeedLimitOnUnprotectedVariant(impl: EngineControlSystemFormalizedRejectOverspeedLimitOnUnprotectedVariantImpl): (self: EngineControlSystemFormalized, detectedSpeed: number) => EngineControlSystemFormalized {
  return (self, detectedSpeed) => {
    const preViolations: string[] = [];
    if (!((self.overspeedProtectionFitted === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant] pre violated: self.overspeedProtectionFitted = false");
    }
    if (!((detectedSpeed >= self.maxSafeSpeed))) {
      preViolations.push("[EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant] pre violated: detectedSpeed >= self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, detectedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.unprotectedOverspeedAlertIssued === true))) {
        postViolations.push("[EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant] post violated: self.unprotectedOverspeedAlertIssued = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant (async). User supplies this. */
export type EngineControlSystemFormalizedRejectOverspeedLimitOnUnprotectedVariantAsyncImpl = (self: EngineControlSystemFormalized, detectedSpeed: number) => Promise<{ self: EngineControlSystemFormalized; modified: { unprotectedOverspeedAlertIssued: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant (async). */
export function wrapEngineControlSystemFormalizedRejectOverspeedLimitOnUnprotectedVariantAsync(impl: EngineControlSystemFormalizedRejectOverspeedLimitOnUnprotectedVariantAsyncImpl): (self: EngineControlSystemFormalized, detectedSpeed: number) => Promise<EngineControlSystemFormalized> {
  return async (self, detectedSpeed) => {
    const preViolations: string[] = [];
    if (!((self.overspeedProtectionFitted === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant] pre violated: self.overspeedProtectionFitted = false");
    }
    if (!((detectedSpeed >= self.maxSafeSpeed))) {
      preViolations.push("[EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant] pre violated: detectedSpeed >= self.maxSafeSpeed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, detectedSpeed);
      const postViolations: string[] = [];
      if (!((__result.self.unprotectedOverspeedAlertIssued === true))) {
        postViolations.push("[EngineControlSystemFormalized.rejectOverspeedLimitOnUnprotectedVariant] post violated: self.unprotectedOverspeedAlertIssued = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase. User supplies this. */
export type EngineControlSystemFormalizedRejectIgnitionDeactivationInHazardousPhaseImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { continuousIgnitionActive: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase. */
export function wrapEngineControlSystemFormalizedRejectIgnitionDeactivationInHazardousPhase(impl: EngineControlSystemFormalizedRejectIgnitionDeactivationInHazardousPhaseImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase] pre violated: self.continuousIgnitionActive = true");
    }
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase] pre violated: self.aircraftInFlight = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === true))) {
        postViolations.push("[EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase] post violated: self.continuousIgnitionActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase (async). User supplies this. */
export type EngineControlSystemFormalizedRejectIgnitionDeactivationInHazardousPhaseAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { continuousIgnitionActive: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase (async). */
export function wrapEngineControlSystemFormalizedRejectIgnitionDeactivationInHazardousPhaseAsync(impl: EngineControlSystemFormalizedRejectIgnitionDeactivationInHazardousPhaseAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.continuousIgnitionActive === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase] pre violated: self.continuousIgnitionActive = true");
    }
    if (!((self.aircraftInFlight === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase] pre violated: self.aircraftInFlight = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.continuousIgnitionActive === true))) {
        postViolations.push("[EngineControlSystemFormalized.rejectIgnitionDeactivationInHazardousPhase] post violated: self.continuousIgnitionActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation. User supplies this. */
export type EngineControlSystemFormalizedEnforceFuelCutOnSpeedViolationImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { fuelFlow: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation. */
export function wrapEngineControlSystemFormalizedEnforceFuelCutOnSpeedViolation(impl: EngineControlSystemFormalizedEnforceFuelCutOnSpeedViolationImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.engineSpeed > self.maxSafeSpeed))) {
      preViolations.push("[EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation] pre violated: self.engineSpeed > self.maxSafeSpeed");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation] pre violated: self.overspeedProtectionFitted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation] post violated: self.fuelFlow = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation (async). User supplies this. */
export type EngineControlSystemFormalizedEnforceFuelCutOnSpeedViolationAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { fuelFlow: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation (async). */
export function wrapEngineControlSystemFormalizedEnforceFuelCutOnSpeedViolationAsync(impl: EngineControlSystemFormalizedEnforceFuelCutOnSpeedViolationAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.engineSpeed > self.maxSafeSpeed))) {
      preViolations.push("[EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation] pre violated: self.engineSpeed > self.maxSafeSpeed");
    }
    if (!((self.overspeedProtectionFitted === true))) {
      preViolations.push("[EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation] pre violated: self.overspeedProtectionFitted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.fuelFlow === 0))) {
        postViolations.push("[EngineControlSystemFormalized.enforceFuelCutOnSpeedViolation] post violated: self.fuelFlow = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution. User supplies this. */
export type EngineControlSystemFormalizedRejectThrustCommandPendingSubstitutionImpl = (self: EngineControlSystemFormalized, commanded: number) => { self: EngineControlSystemFormalized; modified: { usingModelledValue: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution. */
export function wrapEngineControlSystemFormalizedRejectThrustCommandPendingSubstitution(impl: EngineControlSystemFormalizedRejectThrustCommandPendingSubstitutionImpl): (self: EngineControlSystemFormalized, commanded: number) => EngineControlSystemFormalized {
  return (self, commanded) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution] pre violated: self.sensorFaultDetected = true");
    }
    if (!((self.usingModelledValue === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution] pre violated: self.usingModelledValue = false");
    }
    if (!((commanded >= 0))) {
      preViolations.push("[EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution] pre violated: commanded >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, commanded);
      const postViolations: string[] = [];
      if (!((__result.self.usingModelledValue === false))) {
        postViolations.push("[EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution] post violated: self.usingModelledValue = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution (async). User supplies this. */
export type EngineControlSystemFormalizedRejectThrustCommandPendingSubstitutionAsyncImpl = (self: EngineControlSystemFormalized, commanded: number) => Promise<{ self: EngineControlSystemFormalized; modified: { usingModelledValue: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution (async). */
export function wrapEngineControlSystemFormalizedRejectThrustCommandPendingSubstitutionAsync(impl: EngineControlSystemFormalizedRejectThrustCommandPendingSubstitutionAsyncImpl): (self: EngineControlSystemFormalized, commanded: number) => Promise<EngineControlSystemFormalized> {
  return async (self, commanded) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultDetected === true))) {
      preViolations.push("[EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution] pre violated: self.sensorFaultDetected = true");
    }
    if (!((self.usingModelledValue === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution] pre violated: self.usingModelledValue = false");
    }
    if (!((commanded >= 0))) {
      preViolations.push("[EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution] pre violated: commanded >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, commanded);
      const postViolations: string[] = [];
      if (!((__result.self.usingModelledValue === false))) {
        postViolations.push("[EngineControlSystemFormalized.rejectThrustCommandPendingSubstitution] post violated: self.usingModelledValue = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.forceReverserDisableBeforeFlight. User supplies this. */
export type EngineControlSystemFormalizedForceReverserDisableBeforeFlightImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { reverserDeploymentEnabled: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.forceReverserDisableBeforeFlight. */
export function wrapEngineControlSystemFormalizedForceReverserDisableBeforeFlight(impl: EngineControlSystemFormalizedForceReverserDisableBeforeFlightImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[EngineControlSystemFormalized.forceReverserDisableBeforeFlight] pre violated: self.aircraftInFlight = false");
    }
    if (!((self.reverserDeploymentEnabled === true))) {
      preViolations.push("[EngineControlSystemFormalized.forceReverserDisableBeforeFlight] pre violated: self.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[EngineControlSystemFormalized.forceReverserDisableBeforeFlight] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.forceReverserDisableBeforeFlight (async). User supplies this. */
export type EngineControlSystemFormalizedForceReverserDisableBeforeFlightAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { reverserDeploymentEnabled: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.forceReverserDisableBeforeFlight (async). */
export function wrapEngineControlSystemFormalizedForceReverserDisableBeforeFlightAsync(impl: EngineControlSystemFormalizedForceReverserDisableBeforeFlightAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.aircraftInFlight === false))) {
      preViolations.push("[EngineControlSystemFormalized.forceReverserDisableBeforeFlight] pre violated: self.aircraftInFlight = false");
    }
    if (!((self.reverserDeploymentEnabled === true))) {
      preViolations.push("[EngineControlSystemFormalized.forceReverserDisableBeforeFlight] pre violated: self.reverserDeploymentEnabled = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.reverserDeploymentEnabled === false))) {
        postViolations.push("[EngineControlSystemFormalized.forceReverserDisableBeforeFlight] post violated: self.reverserDeploymentEnabled = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for FuelLimitOnOverspeedCommitment commitments. */
export class FuelLimitOnOverspeedCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<FuelLimitOnOverspeedCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a FuelLimitOnOverspeedCommitment — the typed wrapper guarantees that since
    // `register` only accepts FuelLimitOnOverspeedCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: FuelLimitOnOverspeedCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: FuelLimitOnOverspeedCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: FuelLimitOnOverspeedCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: FuelLimitOnOverspeedCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<FuelLimitOnOverspeedCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<FuelLimitOnOverspeedCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ContinuousIgnitionCommitment commitments. */
export class ContinuousIgnitionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ContinuousIgnitionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ContinuousIgnitionCommitment — the typed wrapper guarantees that since
    // `register` only accepts ContinuousIgnitionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ContinuousIgnitionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ContinuousIgnitionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ContinuousIgnitionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ContinuousIgnitionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ContinuousIgnitionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ContinuousIgnitionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ThrustHoldInFlightCommitment commitments. */
export class ThrustHoldInFlightCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ThrustHoldInFlightCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ThrustHoldInFlightCommitment — the typed wrapper guarantees that since
    // `register` only accepts ThrustHoldInFlightCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ThrustHoldInFlightCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ThrustHoldInFlightCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ThrustHoldInFlightCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ThrustHoldInFlightCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ThrustHoldInFlightCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ThrustHoldInFlightCommitment>[];
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

/** Lifecycle registry for EngineControlVisionCommitment commitments. */
export class EngineControlVisionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<EngineControlVisionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a EngineControlVisionCommitment — the typed wrapper guarantees that since
    // `register` only accepts EngineControlVisionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: EngineControlVisionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: EngineControlVisionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: EngineControlVisionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: EngineControlVisionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<EngineControlVisionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<EngineControlVisionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

