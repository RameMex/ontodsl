// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for OverspeedProtector. Runtime: string. Compile-time: branded. */
export type OverspeedProtectorId = string & { readonly __brand: "OverspeedProtectorId" };
/** Identity type for IgnitionController. Runtime: string. Compile-time: branded. */
export type IgnitionControllerId = string & { readonly __brand: "IgnitionControllerId" };
/** Identity type for ThrustManager. Runtime: string. Compile-time: branded. */
export type ThrustManagerId = string & { readonly __brand: "ThrustManagerId" };
/** Identity type for SensorFaultHandler. Runtime: string. Compile-time: branded. */
export type SensorFaultHandlerId = string & { readonly __brand: "SensorFaultHandlerId" };
/** Identity type for OverspeedThrustInterface. Runtime: string. Compile-time: branded. */
export type OverspeedThrustInterfaceId = string & { readonly __brand: "OverspeedThrustInterfaceId" };
/** Identity type for IgnitionThrustInterface. Runtime: string. Compile-time: branded. */
export type IgnitionThrustInterfaceId = string & { readonly __brand: "IgnitionThrustInterfaceId" };
/** Identity type for SensorThrustInterface. Runtime: string. Compile-time: branded. */
export type SensorThrustInterfaceId = string & { readonly __brand: "SensorThrustInterfaceId" };
/** Identity type for Pilot. Runtime: string. Compile-time: branded. */
export type PilotId = string & { readonly __brand: "PilotId" };
/** Identity type for AirlineOperator. Runtime: string. Compile-time: branded. */
export type AirlineOperatorId = string & { readonly __brand: "AirlineOperatorId" };
/** Identity type for Regulator. Runtime: string. Compile-time: branded. */
export type RegulatorId = string & { readonly __brand: "RegulatorId" };
/** Identity type for MaintenanceEngineer. Runtime: string. Compile-time: branded. */
export type MaintenanceEngineerId = string & { readonly __brand: "MaintenanceEngineerId" };
/** Identity type for EngineControlVendor. Runtime: string. Compile-time: branded. */
export type EngineControlVendorId = string & { readonly __brand: "EngineControlVendorId" };
/** Identity type for OverspeedSafetyCommitment. Runtime: string. Compile-time: branded. */
export type OverspeedSafetyCommitmentId = string & { readonly __brand: "OverspeedSafetyCommitmentId" };
/** Identity type for OverspeedFuelCutCommitment. Runtime: string. Compile-time: branded. */
export type OverspeedFuelCutCommitmentId = string & { readonly __brand: "OverspeedFuelCutCommitmentId" };
/** Identity type for IgnitionDisciplineCommitment. Runtime: string. Compile-time: branded. */
export type IgnitionDisciplineCommitmentId = string & { readonly __brand: "IgnitionDisciplineCommitmentId" };
/** Identity type for ReverserGroundOnlyCommitment. Runtime: string. Compile-time: branded. */
export type ReverserGroundOnlyCommitmentId = string & { readonly __brand: "ReverserGroundOnlyCommitmentId" };
/** Identity type for SensorFaultToleranceCommitment. Runtime: string. Compile-time: branded. */
export type SensorFaultToleranceCommitmentId = string & { readonly __brand: "SensorFaultToleranceCommitmentId" };
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
/** Identity type for IgnitionManagementFlow. Runtime: string. Compile-time: branded. */
export type IgnitionManagementFlowId = string & { readonly __brand: "IgnitionManagementFlowId" };
/** Identity type for ThrustManagementFlow. Runtime: string. Compile-time: branded. */
export type ThrustManagementFlowId = string & { readonly __brand: "ThrustManagementFlowId" };
/** Identity type for SensorFaultHandlingFlow. Runtime: string. Compile-time: branded. */
export type SensorFaultHandlingFlowId = string & { readonly __brand: "SensorFaultHandlingFlowId" };
/** Identity type for EngineControlSystem. Runtime: string. Compile-time: branded. */
export type EngineControlSystemId = string & { readonly __brand: "EngineControlSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface OverspeedProtector {
  readonly componentId: OverspeedProtectorId;
  readonly maxSafeRpm: number;
  readonly currentRpm: number;
  readonly overspeedDetected: boolean;
  readonly fuelLimitActive: boolean;
  readonly fuelFlowReduced: boolean;
}

/** @stereotype <<Kind>> */
export interface IgnitionController {
  readonly componentId: IgnitionControllerId;
  readonly commandingContinuousIgnition: boolean;
  readonly continuousIgnitionActive: boolean;
  readonly engineRunning: boolean;
}

/** @stereotype <<Kind>> */
export interface ThrustManager {
  readonly componentId: ThrustManagerId;
  readonly aircraftOnGround: boolean;
  readonly commandedThrust: number;
  readonly actualThrust: number;
  readonly thrustHeldInFlight: boolean;
  readonly reverserCommanded: boolean;
  readonly reverserDeployed: boolean;
  readonly reverserAuthorized: boolean;
}

/** @stereotype <<Kind>> */
export interface SensorFaultHandler {
  readonly componentId: SensorFaultHandlerId;
  readonly sensorFaultDetected: boolean;
  readonly modelledValueActive: boolean;
  readonly sensorFaultCount: number;
  readonly lastGoodReading: number;
  readonly modelledValueEstimate: number;
}

/** @stereotype <<Role>> */
export interface OverspeedProtectorEndpoint {
  readonly fuelLimitActive: boolean;
  readonly overspeedDetected: boolean;
}

/** @stereotype <<Role>> */
export interface ThrustManagerOverspeedEndpoint {
  readonly overspeedDetected: boolean;
}

/** @stereotype <<Relator>> */
export interface OverspeedThrustInterface {
  readonly interfaceId: OverspeedThrustInterfaceId;
  readonly overspeedDetected: boolean;
}

/** @stereotype <<Role>> */
export interface IgnitionCtrlEndpoint {
  readonly commandingContinuousIgnition: boolean;
  readonly continuousIgnitionActive: boolean;
}

/** @stereotype <<Role>> */
export interface ThrustMgrEndpoint {
  readonly aircraftOnGround: boolean;
}

/** @stereotype <<Relator>> */
export interface IgnitionThrustInterface {
  readonly interfaceId: IgnitionThrustInterfaceId;
}

/** @stereotype <<Role>> */
export interface ThrustMgrSensorEndpoint {
  readonly actualThrust: number;
  readonly aircraftOnGround: boolean;
}

/** @stereotype <<Role>> */
export interface SensorFaultHandlerEndpoint {
  readonly modelledValueActive: boolean;
  readonly modelledValueEstimate: number;
}

/** @stereotype <<Relator>> */
export interface SensorThrustInterface {
  readonly interfaceId: SensorThrustInterfaceId;
  readonly usingModelledValue: boolean;
}

/** @stereotype <<Agent>> */
export interface Pilot {
  readonly pilotId: PilotId;
  readonly name: string;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface AirlineOperator {
  readonly operatorId: AirlineOperatorId;
  readonly name: string;
  readonly fleetSize: number;
}

/** @stereotype <<Agent>> */
export interface Regulator {
  readonly regulatorId: RegulatorId;
  readonly name: string;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface MaintenanceEngineer {
  readonly engineerId: MaintenanceEngineerId;
  readonly name: string;
  readonly licenseNumber: string;
}

/** @stereotype <<Agent>> */
export interface EngineControlVendor {
  readonly vendorId: EngineControlVendorId;
  readonly name: string;
  readonly productLine: string;
}

/** @stereotype <<Commitment>> */
export interface OverspeedSafetyCommitment {
  readonly commitmentId: OverspeedSafetyCommitmentId;
  readonly maxSafeRotationalSpeed: number;
}

/** @stereotype <<Commitment>> */
export interface OverspeedFuelCutCommitment {
  readonly commitmentId: OverspeedFuelCutCommitmentId;
  readonly fuelLimitActive: boolean;
}

/** @stereotype <<Commitment>> */
export interface IgnitionDisciplineCommitment {
  readonly commitmentId: IgnitionDisciplineCommitmentId;
  readonly continuousIgnitionHonored: boolean;
  readonly thrustHeldInFlight: boolean;
}

/** @stereotype <<Commitment>> */
export interface ReverserGroundOnlyCommitment {
  readonly commitmentId: ReverserGroundOnlyCommitmentId;
  readonly reverserOnlyOnGround: boolean;
}

/** @stereotype <<Commitment>> */
export interface SensorFaultToleranceCommitment {
  readonly commitmentId: SensorFaultToleranceCommitmentId;
  readonly modelledValueSubstitution: boolean;
}

/** @stereotype <<Category>> */
export interface SafetyCriticalAirworthiness {
}

/** @stereotype <<Category>> */
export interface FaultTolerantArchitecture {
}

/** @stereotype <<Kind>> */
export interface Overspeed {
  readonly overspeedId: OverspeedId;
  readonly maxSafeRpm: number;
}

/** @stereotype <<Kind>> */
export interface ContinuousIgnition {
  readonly ignitionId: ContinuousIgnitionId;
  readonly isActive: boolean;
}

/** @stereotype <<Kind>> */
export interface ThrustReverser {
  readonly reverserId: ThrustReverserId;
  readonly isDeployed: boolean;
  readonly deploymentAuthorized: boolean;
}

/** @stereotype <<Kind>> */
export interface ModelledValue {
  readonly modelledValueId: ModelledValueId;
  readonly estimatedValue: number;
  readonly sourceSensor: string;
}

/** @stereotype <<Happening>> */
export interface OverspeedProtectionFlow {
  readonly flowId: OverspeedProtectionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly fuelFlowReduced: boolean;
}

/** @stereotype <<Happening>> */
export interface IgnitionManagementFlow {
  readonly flowId: IgnitionManagementFlowId;
  readonly flightPhase: string;
  readonly continuousIgnitionActive: boolean;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ThrustManagementFlow {
  readonly flowId: ThrustManagementFlowId;
  readonly aircraftOnGround: boolean;
  readonly thrustCommanded: number;
  readonly reverserCommanded: boolean;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SensorFaultHandlingFlow {
  readonly flowId: SensorFaultHandlingFlowId;
  readonly faultySensorId: string;
  readonly substitutedValue: ModelledValue;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface EngineControlSystem extends SafetyCriticalAirworthiness, FaultTolerantArchitecture {
  readonly systemId: EngineControlSystemId;
  readonly maxSafeRotationalSpeed: number;
  readonly currentRotationalSpeed: number;
  readonly overspeedDetected: boolean;
  readonly fuelFlowReduced: boolean;
  readonly aircraftOnGround: boolean;
  readonly commandingContinuousIgnition: boolean;
  readonly continuousIgnitionActive: boolean;
  readonly thrustHeldInFlight: boolean;
  readonly commandedThrust: number;
  readonly actualThrust: number;
  readonly reverserDeployed: boolean;
  readonly reverserCommanded: boolean;
  readonly reverserAuthorized: boolean;
  readonly sensorFaultDetected: boolean;
  readonly modelledValueActive: boolean;
  readonly sensorFaultCount: number;
  readonly fuelLimitActive: boolean;
}

/** @stereotype <<Category>> */
export interface Do178CLevelA {
  readonly certificationPlanRef: string;
  readonly softwareLevel: string;
}

/** @stereotype <<Category>> */
export interface EasaCsECompliant {
  readonly typeCertificateRef: string;
  readonly complianceMatrixRef: string;
}

/** @stereotype <<Category>> */
export interface Arp4754ACompliant {
  readonly safetyAssessmentRef: string;
  readonly developmentAssuranceLevel: string;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleEngineLimits {
}

/** @stereotype <<Category>> */
export interface ThrustModeDiscipline {
}

/** @stereotype <<Category>> */
export interface SensorFaultToleranceParadigm {
}

/** @stereotype <<Subkind>> */
export interface EngineControlSystemFormalized extends EngineControlSystem {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionTag: string;
  readonly description: string;
  readonly source: string;
  readonly disposition: string;
  readonly riskLevel: string;
}


// ─── Factory functions ───

export function makeOverspeedProtector(data: {
  componentId: string;
  maxSafeRpm: number;
  currentRpm: number;
  overspeedDetected: boolean;
  fuelLimitActive: boolean;
  fuelFlowReduced: boolean;
}): OverspeedProtector {
  return {
    componentId: data.componentId as OverspeedProtectorId,
    maxSafeRpm: data.maxSafeRpm,
    currentRpm: data.currentRpm,
    overspeedDetected: data.overspeedDetected,
    fuelLimitActive: data.fuelLimitActive,
    fuelFlowReduced: data.fuelFlowReduced,
  };
}

export function makeIgnitionController(data: {
  componentId: string;
  commandingContinuousIgnition: boolean;
  continuousIgnitionActive: boolean;
  engineRunning: boolean;
}): IgnitionController {
  return {
    componentId: data.componentId as IgnitionControllerId,
    commandingContinuousIgnition: data.commandingContinuousIgnition,
    continuousIgnitionActive: data.continuousIgnitionActive,
    engineRunning: data.engineRunning,
  };
}

export function makeThrustManager(data: {
  componentId: string;
  aircraftOnGround: boolean;
  commandedThrust: number;
  actualThrust: number;
  thrustHeldInFlight: boolean;
  reverserCommanded: boolean;
  reverserDeployed: boolean;
  reverserAuthorized: boolean;
}): ThrustManager {
  return {
    componentId: data.componentId as ThrustManagerId,
    aircraftOnGround: data.aircraftOnGround,
    commandedThrust: data.commandedThrust,
    actualThrust: data.actualThrust,
    thrustHeldInFlight: data.thrustHeldInFlight,
    reverserCommanded: data.reverserCommanded,
    reverserDeployed: data.reverserDeployed,
    reverserAuthorized: data.reverserAuthorized,
  };
}

export function makeSensorFaultHandler(data: {
  componentId: string;
  sensorFaultDetected: boolean;
  modelledValueActive: boolean;
  sensorFaultCount: number;
  lastGoodReading: number;
  modelledValueEstimate: number;
}): SensorFaultHandler {
  return {
    componentId: data.componentId as SensorFaultHandlerId,
    sensorFaultDetected: data.sensorFaultDetected,
    modelledValueActive: data.modelledValueActive,
    sensorFaultCount: data.sensorFaultCount,
    lastGoodReading: data.lastGoodReading,
    modelledValueEstimate: data.modelledValueEstimate,
  };
}

export function makeOverspeedThrustInterface(data: {
  interfaceId: string;
  overspeedDetected: boolean;
}): OverspeedThrustInterface {
  return {
    interfaceId: data.interfaceId as OverspeedThrustInterfaceId,
    overspeedDetected: data.overspeedDetected,
  };
}

export function makeIgnitionThrustInterface(data: {
  interfaceId: string;
}): IgnitionThrustInterface {
  return {
    interfaceId: data.interfaceId as IgnitionThrustInterfaceId,
  };
}

export function makeSensorThrustInterface(data: {
  interfaceId: string;
  usingModelledValue: boolean;
}): SensorThrustInterface {
  return {
    interfaceId: data.interfaceId as SensorThrustInterfaceId,
    usingModelledValue: data.usingModelledValue,
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

export function makeRegulator(data: {
  regulatorId: string;
  name: string;
  jurisdiction: string;
}): Regulator {
  return {
    regulatorId: data.regulatorId as RegulatorId,
    name: data.name,
    jurisdiction: data.jurisdiction,
  };
}

export function makeMaintenanceEngineer(data: {
  engineerId: string;
  name: string;
  licenseNumber: string;
}): MaintenanceEngineer {
  return {
    engineerId: data.engineerId as MaintenanceEngineerId,
    name: data.name,
    licenseNumber: data.licenseNumber,
  };
}

export function makeEngineControlVendor(data: {
  vendorId: string;
  name: string;
  productLine: string;
}): EngineControlVendor {
  return {
    vendorId: data.vendorId as EngineControlVendorId,
    name: data.name,
    productLine: data.productLine,
  };
}

export function makeOverspeedSafetyCommitment(data: {
  commitmentId: string;
  maxSafeRotationalSpeed: number;
}): OverspeedSafetyCommitment {
  return {
    commitmentId: data.commitmentId as OverspeedSafetyCommitmentId,
    maxSafeRotationalSpeed: data.maxSafeRotationalSpeed,
  };
}

export function makeOverspeedFuelCutCommitment(data: {
  commitmentId: string;
  fuelLimitActive: boolean;
}): OverspeedFuelCutCommitment {
  return {
    commitmentId: data.commitmentId as OverspeedFuelCutCommitmentId,
    fuelLimitActive: data.fuelLimitActive,
  };
}

export function makeIgnitionDisciplineCommitment(data: {
  commitmentId: string;
  continuousIgnitionHonored: boolean;
  thrustHeldInFlight: boolean;
}): IgnitionDisciplineCommitment {
  return {
    commitmentId: data.commitmentId as IgnitionDisciplineCommitmentId,
    continuousIgnitionHonored: data.continuousIgnitionHonored,
    thrustHeldInFlight: data.thrustHeldInFlight,
  };
}

export function makeReverserGroundOnlyCommitment(data: {
  commitmentId: string;
  reverserOnlyOnGround: boolean;
}): ReverserGroundOnlyCommitment {
  return {
    commitmentId: data.commitmentId as ReverserGroundOnlyCommitmentId,
    reverserOnlyOnGround: data.reverserOnlyOnGround,
  };
}

export function makeSensorFaultToleranceCommitment(data: {
  commitmentId: string;
  modelledValueSubstitution: boolean;
}): SensorFaultToleranceCommitment {
  return {
    commitmentId: data.commitmentId as SensorFaultToleranceCommitmentId,
    modelledValueSubstitution: data.modelledValueSubstitution,
  };
}

export function makeOverspeed(data: {
  overspeedId: string;
  maxSafeRpm: number;
}): Overspeed {
  return {
    overspeedId: data.overspeedId as OverspeedId,
    maxSafeRpm: data.maxSafeRpm,
  };
}

export function makeContinuousIgnition(data: {
  ignitionId: string;
  isActive: boolean;
}): ContinuousIgnition {
  return {
    ignitionId: data.ignitionId as ContinuousIgnitionId,
    isActive: data.isActive,
  };
}

export function makeThrustReverser(data: {
  reverserId: string;
  isDeployed: boolean;
  deploymentAuthorized: boolean;
}): ThrustReverser {
  return {
    reverserId: data.reverserId as ThrustReverserId,
    isDeployed: data.isDeployed,
    deploymentAuthorized: data.deploymentAuthorized,
  };
}

export function makeModelledValue(data: {
  modelledValueId: string;
  estimatedValue: number;
  sourceSensor: string;
}): ModelledValue {
  return {
    modelledValueId: data.modelledValueId as ModelledValueId,
    estimatedValue: data.estimatedValue,
    sourceSensor: data.sourceSensor,
  };
}

export function makeOverspeedProtectionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  fuelFlowReduced: boolean;
}): OverspeedProtectionFlow {
  return {
    flowId: data.flowId as OverspeedProtectionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    fuelFlowReduced: data.fuelFlowReduced,
  };
}

export function makeIgnitionManagementFlow(data: {
  flowId: string;
  flightPhase: string;
  continuousIgnitionActive: boolean;
  outcome: string;
}): IgnitionManagementFlow {
  return {
    flowId: data.flowId as IgnitionManagementFlowId,
    flightPhase: data.flightPhase,
    continuousIgnitionActive: data.continuousIgnitionActive,
    outcome: data.outcome,
  };
}

export function makeThrustManagementFlow(data: {
  flowId: string;
  aircraftOnGround: boolean;
  thrustCommanded: number;
  reverserCommanded: boolean;
  outcome: string;
}): ThrustManagementFlow {
  return {
    flowId: data.flowId as ThrustManagementFlowId,
    aircraftOnGround: data.aircraftOnGround,
    thrustCommanded: data.thrustCommanded,
    reverserCommanded: data.reverserCommanded,
    outcome: data.outcome,
  };
}

export function makeSensorFaultHandlingFlow(data: {
  flowId: string;
  faultySensorId: string;
  substitutedValue: ModelledValue;
  outcome: string;
}): SensorFaultHandlingFlow {
  return {
    flowId: data.flowId as SensorFaultHandlingFlowId,
    faultySensorId: data.faultySensorId,
    substitutedValue: data.substitutedValue,
    outcome: data.outcome,
  };
}

export function makeEngineControlSystem(data: {
  systemId: string;
  maxSafeRotationalSpeed: number;
  currentRotationalSpeed: number;
  overspeedDetected: boolean;
  fuelFlowReduced: boolean;
  aircraftOnGround: boolean;
  commandingContinuousIgnition: boolean;
  continuousIgnitionActive: boolean;
  thrustHeldInFlight: boolean;
  commandedThrust: number;
  actualThrust: number;
  reverserDeployed: boolean;
  reverserCommanded: boolean;
  reverserAuthorized: boolean;
  sensorFaultDetected: boolean;
  modelledValueActive: boolean;
  sensorFaultCount: number;
  fuelLimitActive: boolean;
}): EngineControlSystem {
  return {
    systemId: data.systemId as EngineControlSystemId,
    maxSafeRotationalSpeed: data.maxSafeRotationalSpeed,
    currentRotationalSpeed: data.currentRotationalSpeed,
    overspeedDetected: data.overspeedDetected,
    fuelFlowReduced: data.fuelFlowReduced,
    aircraftOnGround: data.aircraftOnGround,
    commandingContinuousIgnition: data.commandingContinuousIgnition,
    continuousIgnitionActive: data.continuousIgnitionActive,
    thrustHeldInFlight: data.thrustHeldInFlight,
    commandedThrust: data.commandedThrust,
    actualThrust: data.actualThrust,
    reverserDeployed: data.reverserDeployed,
    reverserCommanded: data.reverserCommanded,
    reverserAuthorized: data.reverserAuthorized,
    sensorFaultDetected: data.sensorFaultDetected,
    modelledValueActive: data.modelledValueActive,
    sensorFaultCount: data.sensorFaultCount,
    fuelLimitActive: data.fuelLimitActive,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionTag: string;
  description: string;
  source: string;
  disposition: string;
  riskLevel: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionTag: data.assumptionTag,
    description: data.description,
    source: data.source,
    disposition: data.disposition,
    riskLevel: data.riskLevel,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for OverspeedProtector. Returns empty array when valid. */
export function validateOverspeedProtector(instance: OverspeedProtector): readonly string[] {
  const violations: string[] = [];
  if (!((instance.componentId !== null))) {
    violations.push("[OverspeedProtector] invariant violated: self.componentId <> null");
  }
  if (!((instance.maxSafeRpm > 0))) {
    violations.push("[OverspeedProtector] invariant violated: self.maxSafeRpm > 0.0");
  }
  if (!((instance.currentRpm >= 0))) {
    violations.push("[OverspeedProtector] invariant violated: self.currentRpm >= 0.0");
  }
  if (!((!(instance.overspeedDetected) || instance.fuelFlowReduced))) {
    violations.push("[OverspeedProtector] invariant violated: self.overspeedDetected implies self.fuelFlowReduced");
  }
  if (!((!(instance.fuelFlowReduced) || instance.fuelLimitActive))) {
    violations.push("[OverspeedProtector] invariant violated: self.fuelFlowReduced implies self.fuelLimitActive");
  }
  return violations;
}

/** Runtime invariant check for IgnitionController. Returns empty array when valid. */
export function validateIgnitionController(instance: IgnitionController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.componentId !== null))) {
    violations.push("[IgnitionController] invariant violated: self.componentId <> null");
  }
  if (!((!(instance.commandingContinuousIgnition) || instance.continuousIgnitionActive))) {
    violations.push("[IgnitionController] invariant violated: self.commandingContinuousIgnition implies self.continuousIgnitionActive");
  }
  if (!((!(instance.continuousIgnitionActive) || instance.engineRunning))) {
    violations.push("[IgnitionController] invariant violated: self.continuousIgnitionActive implies self.engineRunning");
  }
  return violations;
}

/** Runtime invariant check for ThrustManager. Returns empty array when valid. */
export function validateThrustManager(instance: ThrustManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.componentId !== null))) {
    violations.push("[ThrustManager] invariant violated: self.componentId <> null");
  }
  if (!((instance.commandedThrust >= 0))) {
    violations.push("[ThrustManager] invariant violated: self.commandedThrust >= 0.0");
  }
  if (!((instance.actualThrust >= 0))) {
    violations.push("[ThrustManager] invariant violated: self.actualThrust >= 0.0");
  }
  if (!((!(!(instance.aircraftOnGround)) || instance.thrustHeldInFlight))) {
    violations.push("[ThrustManager] invariant violated: (not self.aircraftOnGround) implies self.thrustHeldInFlight");
  }
  if (!((!(instance.reverserDeployed) || instance.aircraftOnGround))) {
    violations.push("[ThrustManager] invariant violated: self.reverserDeployed implies self.aircraftOnGround");
  }
  if (!((!(instance.reverserAuthorized) || instance.aircraftOnGround))) {
    violations.push("[ThrustManager] invariant violated: self.reverserAuthorized implies self.aircraftOnGround");
  }
  if (!((!(instance.reverserDeployed) || instance.reverserCommanded))) {
    violations.push("[ThrustManager] invariant violated: self.reverserDeployed implies self.reverserCommanded");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultHandler. Returns empty array when valid. */
export function validateSensorFaultHandler(instance: SensorFaultHandler): readonly string[] {
  const violations: string[] = [];
  if (!((instance.componentId !== null))) {
    violations.push("[SensorFaultHandler] invariant violated: self.componentId <> null");
  }
  if (!((instance.sensorFaultCount >= 0))) {
    violations.push("[SensorFaultHandler] invariant violated: self.sensorFaultCount >= 0");
  }
  if (!((!(instance.sensorFaultDetected) || instance.modelledValueActive))) {
    violations.push("[SensorFaultHandler] invariant violated: self.sensorFaultDetected implies self.modelledValueActive");
  }
  if (!((instance.lastGoodReading >= 0))) {
    violations.push("[SensorFaultHandler] invariant violated: self.lastGoodReading >= 0.0");
  }
  if (!((instance.modelledValueEstimate >= 0))) {
    violations.push("[SensorFaultHandler] invariant violated: self.modelledValueEstimate >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for OverspeedThrustInterface. Returns empty array when valid. */
export function validateOverspeedThrustInterface(instance: OverspeedThrustInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[OverspeedThrustInterface] invariant violated: self.interfaceId <> null");
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

/** Runtime invariant check for SensorThrustInterface. Returns empty array when valid. */
export function validateSensorThrustInterface(instance: SensorThrustInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[SensorThrustInterface] invariant violated: self.interfaceId <> null");
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

/** Runtime invariant check for AirlineOperator. Returns empty array when valid. */
export function validateAirlineOperator(instance: AirlineOperator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.operatorId !== null))) {
    violations.push("[AirlineOperator] invariant violated: self.operatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for Regulator. Returns empty array when valid. */
export function validateRegulator(instance: Regulator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatorId !== null))) {
    violations.push("[Regulator] invariant violated: self.regulatorId <> null");
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

/** Runtime invariant check for SafetyCriticalAirworthiness. Returns empty array when valid. */
export function validateSafetyCriticalAirworthiness(instance: SafetyCriticalAirworthiness): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[SafetyCriticalAirworthiness] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FaultTolerantArchitecture. Returns empty array when valid. */
export function validateFaultTolerantArchitecture(instance: FaultTolerantArchitecture): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[FaultTolerantArchitecture] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for Overspeed. Returns empty array when valid. */
export function validateOverspeed(instance: Overspeed): readonly string[] {
  const violations: string[] = [];
  if (!((instance.overspeedId !== null))) {
    violations.push("[Overspeed] invariant violated: self.overspeedId <> null");
  }
  if (!((instance.maxSafeRpm > 0))) {
    violations.push("[Overspeed] invariant violated: self.maxSafeRpm > 0.0");
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
  return violations;
}

/** Runtime invariant check for ModelledValue. Returns empty array when valid. */
export function validateModelledValue(instance: ModelledValue): readonly string[] {
  const violations: string[] = [];
  if (!((instance.modelledValueId !== null))) {
    violations.push("[ModelledValue] invariant violated: self.modelledValueId <> null");
  }
  if (!((instance.sourceSensor !== null))) {
    violations.push("[ModelledValue] invariant violated: self.sourceSensor <> null");
  }
  return violations;
}

/** Runtime invariant check for OverspeedProtectionFlow. Returns empty array when valid. */
export function validateOverspeedProtectionFlow(instance: OverspeedProtectionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[OverspeedProtectionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[OverspeedProtectionFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for IgnitionManagementFlow. Returns empty array when valid. */
export function validateIgnitionManagementFlow(instance: IgnitionManagementFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[IgnitionManagementFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.flightPhase !== null))) {
    violations.push("[IgnitionManagementFlow] invariant violated: self.flightPhase <> null");
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

/** Runtime invariant check for SensorFaultHandlingFlow. Returns empty array when valid. */
export function validateSensorFaultHandlingFlow(instance: SensorFaultHandlingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorFaultHandlingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.faultySensorId !== null))) {
    violations.push("[SensorFaultHandlingFlow] invariant violated: self.faultySensorId <> null");
  }
  if (!((instance.substitutedValue !== null))) {
    violations.push("[SensorFaultHandlingFlow] invariant violated: self.substitutedValue <> null");
  }
  return violations;
}

/** Runtime invariant check for EngineControlSystem. Returns empty array when valid. */
export function validateEngineControlSystem(instance: EngineControlSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[EngineControlSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.maxSafeRotationalSpeed > 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.maxSafeRotationalSpeed > 0.0");
  }
  if (!((instance.currentRotationalSpeed >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.currentRotationalSpeed >= 0.0");
  }
  if (!((instance.sensorFaultCount >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.sensorFaultCount >= 0");
  }
  if (!((instance.actualThrust >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.actualThrust >= 0.0");
  }
  if (!((instance.commandedThrust >= 0))) {
    violations.push("[EngineControlSystem] invariant violated: self.commandedThrust >= 0.0");
  }
  if (!((!(instance.overspeedDetected) || instance.fuelFlowReduced))) {
    violations.push("[EngineControlSystem] invariant violated: self.overspeedDetected implies self.fuelFlowReduced");
  }
  if (!((!(instance.commandingContinuousIgnition) || instance.continuousIgnitionActive))) {
    violations.push("[EngineControlSystem] invariant violated: self.commandingContinuousIgnition implies self.continuousIgnitionActive");
  }
  if (!((!(!(instance.aircraftOnGround)) || instance.thrustHeldInFlight))) {
    violations.push("[EngineControlSystem] invariant violated: (not self.aircraftOnGround) implies self.thrustHeldInFlight");
  }
  if (!((!(instance.reverserDeployed) || instance.aircraftOnGround))) {
    violations.push("[EngineControlSystem] invariant violated: self.reverserDeployed implies self.aircraftOnGround");
  }
  if (!((!(instance.sensorFaultDetected) || instance.modelledValueActive))) {
    violations.push("[EngineControlSystem] invariant violated: self.sensorFaultDetected implies self.modelledValueActive");
  }
  return violations;
}

/** Runtime invariant check for Do178CLevelA. Returns empty array when valid. */
export function validateDo178CLevelA(instance: Do178CLevelA): readonly string[] {
  const violations: string[] = [];
  if (!((instance.certificationPlanRef !== null))) {
    violations.push("[Do178CLevelA] invariant violated: self.certificationPlanRef <> null");
  }
  if (!((instance.softwareLevel === "LEVEL_A"))) {
    violations.push("[Do178CLevelA] invariant violated: self.softwareLevel = 'LEVEL_A'");
  }
  return violations;
}

/** Runtime invariant check for EasaCsECompliant. Returns empty array when valid. */
export function validateEasaCsECompliant(instance: EasaCsECompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.typeCertificateRef !== null))) {
    violations.push("[EasaCsECompliant] invariant violated: self.typeCertificateRef <> null");
  }
  if (!((instance.complianceMatrixRef !== null))) {
    violations.push("[EasaCsECompliant] invariant violated: self.complianceMatrixRef <> null");
  }
  return violations;
}

/** Runtime invariant check for Arp4754ACompliant. Returns empty array when valid. */
export function validateArp4754ACompliant(instance: Arp4754ACompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.safetyAssessmentRef !== null))) {
    violations.push("[Arp4754ACompliant] invariant violated: self.safetyAssessmentRef <> null");
  }
  if (!((instance.developmentAssuranceLevel === "A"))) {
    violations.push("[Arp4754ACompliant] invariant violated: self.developmentAssuranceLevel = 'A'");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleEngineLimits. Returns empty array when valid. */
export function validatePhysicallyPlausibleEngineLimits(instance: PhysicallyPlausibleEngineLimits): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PhysicallyPlausibleEngineLimits] invariant violated: true");
  }
  if (!(true)) {
    violations.push("[PhysicallyPlausibleEngineLimits] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for ThrustModeDiscipline. Returns empty array when valid. */
export function validateThrustModeDiscipline(instance: ThrustModeDiscipline): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ThrustModeDiscipline] invariant violated: true");
  }
  if (!(true)) {
    violations.push("[ThrustModeDiscipline] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for SensorFaultToleranceParadigm. Returns empty array when valid. */
export function validateSensorFaultToleranceParadigm(instance: SensorFaultToleranceParadigm): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[SensorFaultToleranceParadigm] invariant violated: true");
  }
  if (!(true)) {
    violations.push("[SensorFaultToleranceParadigm] invariant violated: true");
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
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((instance.source !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.source <> null");
  }
  if (!((instance.disposition !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.disposition <> null");
  }
  if (!((instance.riskLevel !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.riskLevel <> null");
  }
  if (!((((instance.disposition === "DESIGN_ENFORCED") || (instance.disposition === "DESIGN_ASSUMED")) || (instance.disposition === "TEST_ONLY")))) {
    violations.push("[FormalAssumptionRecord] invariant violated: (self.disposition = 'DESIGN_ENFORCED') or\n    (self.disposition = 'DESIGN_ASSUMED') or\n    (self.disposition = 'TEST_ONLY')");
  }
  if (!((((instance.riskLevel === "HIGH") || (instance.riskLevel === "MEDIUM")) || (instance.riskLevel === "LOW")))) {
    violations.push("[FormalAssumptionRecord] invariant violated: (self.riskLevel = 'HIGH') or\n    (self.riskLevel = 'MEDIUM') or\n    (self.riskLevel = 'LOW')");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for OverspeedProtector.detectOverspeed. User supplies this. */
export type OverspeedProtectorDetectOverspeedImpl = (self: OverspeedProtector, sensedRpm: number) => { self: OverspeedProtector; modified: { overspeedDetected: unknown; fuelFlowReduced: unknown; currentRpm: unknown } };

/** Contract-checking wrapper for OverspeedProtector.detectOverspeed. */
export function wrapOverspeedProtectorDetectOverspeed(impl: OverspeedProtectorDetectOverspeedImpl): (self: OverspeedProtector, sensedRpm: number) => OverspeedProtector {
  return (self, sensedRpm) => {
    const preViolations: string[] = [];
    if (!((sensedRpm >= 0))) {
      preViolations.push("[OverspeedProtector.detectOverspeed] pre violated: sensedRpm >= 0.0");
    }
    if (!((sensedRpm > self.maxSafeRpm))) {
      preViolations.push("[OverspeedProtector.detectOverspeed] pre violated: sensedRpm > self.maxSafeRpm");
    }
    if (!(!(self.overspeedDetected))) {
      preViolations.push("[OverspeedProtector.detectOverspeed] pre violated: not self.overspeedDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sensedRpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[OverspeedProtector.detectOverspeed] post violated: self.overspeedDetected = true");
      }
      if (!((__result.self.fuelFlowReduced === true))) {
        postViolations.push("[OverspeedProtector.detectOverspeed] post violated: self.fuelFlowReduced = true");
      }
      if (!((__result.self.currentRpm === sensedRpm))) {
        postViolations.push("[OverspeedProtector.detectOverspeed] post violated: self.currentRpm = sensedRpm");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtector.detectOverspeed (async). User supplies this. */
export type OverspeedProtectorDetectOverspeedAsyncImpl = (self: OverspeedProtector, sensedRpm: number) => Promise<{ self: OverspeedProtector; modified: { overspeedDetected: unknown; fuelFlowReduced: unknown; currentRpm: unknown } }>;

/** Contract-checking wrapper for OverspeedProtector.detectOverspeed (async). */
export function wrapOverspeedProtectorDetectOverspeedAsync(impl: OverspeedProtectorDetectOverspeedAsyncImpl): (self: OverspeedProtector, sensedRpm: number) => Promise<OverspeedProtector> {
  return async (self, sensedRpm) => {
    const preViolations: string[] = [];
    if (!((sensedRpm >= 0))) {
      preViolations.push("[OverspeedProtector.detectOverspeed] pre violated: sensedRpm >= 0.0");
    }
    if (!((sensedRpm > self.maxSafeRpm))) {
      preViolations.push("[OverspeedProtector.detectOverspeed] pre violated: sensedRpm > self.maxSafeRpm");
    }
    if (!(!(self.overspeedDetected))) {
      preViolations.push("[OverspeedProtector.detectOverspeed] pre violated: not self.overspeedDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sensedRpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[OverspeedProtector.detectOverspeed] post violated: self.overspeedDetected = true");
      }
      if (!((__result.self.fuelFlowReduced === true))) {
        postViolations.push("[OverspeedProtector.detectOverspeed] post violated: self.fuelFlowReduced = true");
      }
      if (!((__result.self.currentRpm === sensedRpm))) {
        postViolations.push("[OverspeedProtector.detectOverspeed] post violated: self.currentRpm = sensedRpm");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtector.setFuelLimitActive. User supplies this. */
export type OverspeedProtectorSetFuelLimitActiveImpl = (self: OverspeedProtector, active: boolean) => { self: OverspeedProtector; modified: { fuelLimitActive: unknown } };

/** Contract-checking wrapper for OverspeedProtector.setFuelLimitActive. */
export function wrapOverspeedProtectorSetFuelLimitActive(impl: OverspeedProtectorSetFuelLimitActiveImpl): (self: OverspeedProtector, active: boolean) => OverspeedProtector {
  return (self, active) => {
    const preViolations: string[] = [];
    if (!(!(((active === false) && self.overspeedDetected)))) {
      preViolations.push("[OverspeedProtector.setFuelLimitActive] pre violated: not (active = false and self.overspeedDetected)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, active);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimitActive === active))) {
        postViolations.push("[OverspeedProtector.setFuelLimitActive] post violated: self.fuelLimitActive = active");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtector.setFuelLimitActive (async). User supplies this. */
export type OverspeedProtectorSetFuelLimitActiveAsyncImpl = (self: OverspeedProtector, active: boolean) => Promise<{ self: OverspeedProtector; modified: { fuelLimitActive: unknown } }>;

/** Contract-checking wrapper for OverspeedProtector.setFuelLimitActive (async). */
export function wrapOverspeedProtectorSetFuelLimitActiveAsync(impl: OverspeedProtectorSetFuelLimitActiveAsyncImpl): (self: OverspeedProtector, active: boolean) => Promise<OverspeedProtector> {
  return async (self, active) => {
    const preViolations: string[] = [];
    if (!(!(((active === false) && self.overspeedDetected)))) {
      preViolations.push("[OverspeedProtector.setFuelLimitActive] pre violated: not (active = false and self.overspeedDetected)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, active);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimitActive === active))) {
        postViolations.push("[OverspeedProtector.setFuelLimitActive] post violated: self.fuelLimitActive = active");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed. User supplies this. */
export type OverspeedProtectorRejectDeactivateFuelLimitOnOverspeedImpl = (self: OverspeedProtector) => { self: OverspeedProtector; modified: { fuelLimitActive: unknown } };

/** Contract-checking wrapper for OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed. */
export function wrapOverspeedProtectorRejectDeactivateFuelLimitOnOverspeed(impl: OverspeedProtectorRejectDeactivateFuelLimitOnOverspeedImpl): (self: OverspeedProtector) => OverspeedProtector {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.overspeedDetected)) {
      preViolations.push("[OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed] pre violated: self.overspeedDetected");
    }
    if (!(self.fuelLimitActive)) {
      preViolations.push("[OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed] pre violated: self.fuelLimitActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(__result.self.fuelLimitActive)) {
        postViolations.push("[OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed] post violated: self.fuelLimitActive");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed (async). User supplies this. */
export type OverspeedProtectorRejectDeactivateFuelLimitOnOverspeedAsyncImpl = (self: OverspeedProtector) => Promise<{ self: OverspeedProtector; modified: { fuelLimitActive: unknown } }>;

/** Contract-checking wrapper for OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed (async). */
export function wrapOverspeedProtectorRejectDeactivateFuelLimitOnOverspeedAsync(impl: OverspeedProtectorRejectDeactivateFuelLimitOnOverspeedAsyncImpl): (self: OverspeedProtector) => Promise<OverspeedProtector> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.overspeedDetected)) {
      preViolations.push("[OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed] pre violated: self.overspeedDetected");
    }
    if (!(self.fuelLimitActive)) {
      preViolations.push("[OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed] pre violated: self.fuelLimitActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(__result.self.fuelLimitActive)) {
        postViolations.push("[OverspeedProtector.rejectDeactivateFuelLimitOnOverspeed] post violated: self.fuelLimitActive");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionController.setContinuousIgnition. User supplies this. */
export type IgnitionControllerSetContinuousIgnitionImpl = (self: IgnitionController, enable: boolean) => { self: IgnitionController; modified: { commandingContinuousIgnition: unknown; continuousIgnitionActive: unknown } };

/** Contract-checking wrapper for IgnitionController.setContinuousIgnition. */
export function wrapIgnitionControllerSetContinuousIgnition(impl: IgnitionControllerSetContinuousIgnitionImpl): (self: IgnitionController, enable: boolean) => IgnitionController {
  return (self, enable) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[IgnitionController.setContinuousIgnition] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, enable);
      const postViolations: string[] = [];
      if (!((__result.self.commandingContinuousIgnition === enable))) {
        postViolations.push("[IgnitionController.setContinuousIgnition] post violated: self.commandingContinuousIgnition = enable");
      }
      if (!(((enable) ? ((__result.self.continuousIgnitionActive === true)) : ((__result.self.continuousIgnitionActive === false))))) {
        postViolations.push("[IgnitionController.setContinuousIgnition] post violated: if enable then\n            self.continuousIgnitionActive = true\n          else\n            self.continuousIgnitionActive = false\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionController.setContinuousIgnition (async). User supplies this. */
export type IgnitionControllerSetContinuousIgnitionAsyncImpl = (self: IgnitionController, enable: boolean) => Promise<{ self: IgnitionController; modified: { commandingContinuousIgnition: unknown; continuousIgnitionActive: unknown } }>;

/** Contract-checking wrapper for IgnitionController.setContinuousIgnition (async). */
export function wrapIgnitionControllerSetContinuousIgnitionAsync(impl: IgnitionControllerSetContinuousIgnitionAsyncImpl): (self: IgnitionController, enable: boolean) => Promise<IgnitionController> {
  return async (self, enable) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[IgnitionController.setContinuousIgnition] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, enable);
      const postViolations: string[] = [];
      if (!((__result.self.commandingContinuousIgnition === enable))) {
        postViolations.push("[IgnitionController.setContinuousIgnition] post violated: self.commandingContinuousIgnition = enable");
      }
      if (!(((enable) ? ((__result.self.continuousIgnitionActive === true)) : ((__result.self.continuousIgnitionActive === false))))) {
        postViolations.push("[IgnitionController.setContinuousIgnition] post violated: if enable then\n            self.continuousIgnitionActive = true\n          else\n            self.continuousIgnitionActive = false\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionController.rejectContinuousIgnitionOnStoppedEngine. User supplies this. */
export type IgnitionControllerRejectContinuousIgnitionOnStoppedEngineImpl = (self: IgnitionController) => { self: IgnitionController; modified: { commandingContinuousIgnition: unknown } };

/** Contract-checking wrapper for IgnitionController.rejectContinuousIgnitionOnStoppedEngine. */
export function wrapIgnitionControllerRejectContinuousIgnitionOnStoppedEngine(impl: IgnitionControllerRejectContinuousIgnitionOnStoppedEngineImpl): (self: IgnitionController) => IgnitionController {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.engineRunning))) {
      preViolations.push("[IgnitionController.rejectContinuousIgnitionOnStoppedEngine] pre violated: not self.engineRunning");
    }
    if (!(self.commandingContinuousIgnition)) {
      preViolations.push("[IgnitionController.rejectContinuousIgnitionOnStoppedEngine] pre violated: self.commandingContinuousIgnition");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.commandingContinuousIgnition))) {
        postViolations.push("[IgnitionController.rejectContinuousIgnitionOnStoppedEngine] post violated: not self.commandingContinuousIgnition");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionController.rejectContinuousIgnitionOnStoppedEngine (async). User supplies this. */
export type IgnitionControllerRejectContinuousIgnitionOnStoppedEngineAsyncImpl = (self: IgnitionController) => Promise<{ self: IgnitionController; modified: { commandingContinuousIgnition: unknown } }>;

/** Contract-checking wrapper for IgnitionController.rejectContinuousIgnitionOnStoppedEngine (async). */
export function wrapIgnitionControllerRejectContinuousIgnitionOnStoppedEngineAsync(impl: IgnitionControllerRejectContinuousIgnitionOnStoppedEngineAsyncImpl): (self: IgnitionController) => Promise<IgnitionController> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.engineRunning))) {
      preViolations.push("[IgnitionController.rejectContinuousIgnitionOnStoppedEngine] pre violated: not self.engineRunning");
    }
    if (!(self.commandingContinuousIgnition)) {
      preViolations.push("[IgnitionController.rejectContinuousIgnitionOnStoppedEngine] pre violated: self.commandingContinuousIgnition");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.commandingContinuousIgnition))) {
        postViolations.push("[IgnitionController.rejectContinuousIgnitionOnStoppedEngine] post violated: not self.commandingContinuousIgnition");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionController.updateEngineRunning. User supplies this. */
export type IgnitionControllerUpdateEngineRunningImpl = (self: IgnitionController, running: boolean) => { self: IgnitionController; modified: { engineRunning: unknown } };

/** Contract-checking wrapper for IgnitionController.updateEngineRunning. */
export function wrapIgnitionControllerUpdateEngineRunning(impl: IgnitionControllerUpdateEngineRunningImpl): (self: IgnitionController, running: boolean) => IgnitionController {
  return (self, running) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[IgnitionController.updateEngineRunning] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, running);
      const postViolations: string[] = [];
      if (!((__result.self.engineRunning === running))) {
        postViolations.push("[IgnitionController.updateEngineRunning] post violated: self.engineRunning = running");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for IgnitionController.updateEngineRunning (async). User supplies this. */
export type IgnitionControllerUpdateEngineRunningAsyncImpl = (self: IgnitionController, running: boolean) => Promise<{ self: IgnitionController; modified: { engineRunning: unknown } }>;

/** Contract-checking wrapper for IgnitionController.updateEngineRunning (async). */
export function wrapIgnitionControllerUpdateEngineRunningAsync(impl: IgnitionControllerUpdateEngineRunningAsyncImpl): (self: IgnitionController, running: boolean) => Promise<IgnitionController> {
  return async (self, running) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[IgnitionController.updateEngineRunning] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, running);
      const postViolations: string[] = [];
      if (!((__result.self.engineRunning === running))) {
        postViolations.push("[IgnitionController.updateEngineRunning] post violated: self.engineRunning = running");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.setThrust. User supplies this. */
export type ThrustManagerSetThrustImpl = (self: ThrustManager, thrustValue: number) => { self: ThrustManager; modified: { commandedThrust: unknown; actualThrust: unknown; thrustHeldInFlight: unknown } };

/** Contract-checking wrapper for ThrustManager.setThrust. */
export function wrapThrustManagerSetThrust(impl: ThrustManagerSetThrustImpl): (self: ThrustManager, thrustValue: number) => ThrustManager {
  return (self, thrustValue) => {
    const preViolations: string[] = [];
    if (!((thrustValue >= 0))) {
      preViolations.push("[ThrustManager.setThrust] pre violated: thrustValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.actualThrust": self.actualThrust,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, thrustValue);
      const postViolations: string[] = [];
      if (!((__result.self.commandedThrust === thrustValue))) {
        postViolations.push("[ThrustManager.setThrust] post violated: self.commandedThrust = thrustValue");
      }
      if (!(((__result.self.aircraftOnGround) ? ((__result.self.actualThrust === thrustValue)) : ((__result.self.actualThrust === __pre["self.actualThrust"]))))) {
        postViolations.push("[ThrustManager.setThrust] post violated: if self.aircraftOnGround then\n            self.actualThrust = thrustValue\n          else\n            self.actualThrust = self.actualThrust@pre\n          endif");
      }
      if (!((__result.self.thrustHeldInFlight === !(__result.self.aircraftOnGround)))) {
        postViolations.push("[ThrustManager.setThrust] post violated: self.thrustHeldInFlight = (not self.aircraftOnGround)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.setThrust (async). User supplies this. */
export type ThrustManagerSetThrustAsyncImpl = (self: ThrustManager, thrustValue: number) => Promise<{ self: ThrustManager; modified: { commandedThrust: unknown; actualThrust: unknown; thrustHeldInFlight: unknown } }>;

/** Contract-checking wrapper for ThrustManager.setThrust (async). */
export function wrapThrustManagerSetThrustAsync(impl: ThrustManagerSetThrustAsyncImpl): (self: ThrustManager, thrustValue: number) => Promise<ThrustManager> {
  return async (self, thrustValue) => {
    const preViolations: string[] = [];
    if (!((thrustValue >= 0))) {
      preViolations.push("[ThrustManager.setThrust] pre violated: thrustValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.actualThrust": self.actualThrust,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, thrustValue);
      const postViolations: string[] = [];
      if (!((__result.self.commandedThrust === thrustValue))) {
        postViolations.push("[ThrustManager.setThrust] post violated: self.commandedThrust = thrustValue");
      }
      if (!(((__result.self.aircraftOnGround) ? ((__result.self.actualThrust === thrustValue)) : ((__result.self.actualThrust === __pre["self.actualThrust"]))))) {
        postViolations.push("[ThrustManager.setThrust] post violated: if self.aircraftOnGround then\n            self.actualThrust = thrustValue\n          else\n            self.actualThrust = self.actualThrust@pre\n          endif");
      }
      if (!((__result.self.thrustHeldInFlight === !(__result.self.aircraftOnGround)))) {
        postViolations.push("[ThrustManager.setThrust] post violated: self.thrustHeldInFlight = (not self.aircraftOnGround)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.commandReverser. User supplies this. */
export type ThrustManagerCommandReverserImpl = (self: ThrustManager, deploy: boolean) => { self: ThrustManager; modified: { reverserCommanded: unknown; reverserDeployed: unknown; reverserAuthorized: unknown } };

/** Contract-checking wrapper for ThrustManager.commandReverser. */
export function wrapThrustManagerCommandReverser(impl: ThrustManagerCommandReverserImpl): (self: ThrustManager, deploy: boolean) => ThrustManager {
  return (self, deploy) => {
    const preViolations: string[] = [];
    if (!((!(deploy) || self.aircraftOnGround))) {
      preViolations.push("[ThrustManager.commandReverser] pre violated: deploy implies self.aircraftOnGround");
    }
    if (!((!(deploy) || !(self.reverserDeployed)))) {
      preViolations.push("[ThrustManager.commandReverser] pre violated: deploy implies not self.reverserDeployed");
    }
    if (!((!(!(deploy)) || self.reverserDeployed))) {
      preViolations.push("[ThrustManager.commandReverser] pre violated: not deploy implies self.reverserDeployed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, deploy);
      const postViolations: string[] = [];
      if (!((__result.self.reverserCommanded === deploy))) {
        postViolations.push("[ThrustManager.commandReverser] post violated: self.reverserCommanded = deploy");
      }
      if (!((((deploy && __result.self.aircraftOnGround)) ? ((__result.self.reverserDeployed === true)) : ((__result.self.reverserDeployed === false))))) {
        postViolations.push("[ThrustManager.commandReverser] post violated: if deploy and self.aircraftOnGround then\n            self.reverserDeployed = true\n          else\n            self.reverserDeployed = false\n          endif");
      }
      if (!((__result.self.reverserAuthorized === (deploy && __result.self.aircraftOnGround)))) {
        postViolations.push("[ThrustManager.commandReverser] post violated: self.reverserAuthorized = (deploy and self.aircraftOnGround)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.commandReverser (async). User supplies this. */
export type ThrustManagerCommandReverserAsyncImpl = (self: ThrustManager, deploy: boolean) => Promise<{ self: ThrustManager; modified: { reverserCommanded: unknown; reverserDeployed: unknown; reverserAuthorized: unknown } }>;

/** Contract-checking wrapper for ThrustManager.commandReverser (async). */
export function wrapThrustManagerCommandReverserAsync(impl: ThrustManagerCommandReverserAsyncImpl): (self: ThrustManager, deploy: boolean) => Promise<ThrustManager> {
  return async (self, deploy) => {
    const preViolations: string[] = [];
    if (!((!(deploy) || self.aircraftOnGround))) {
      preViolations.push("[ThrustManager.commandReverser] pre violated: deploy implies self.aircraftOnGround");
    }
    if (!((!(deploy) || !(self.reverserDeployed)))) {
      preViolations.push("[ThrustManager.commandReverser] pre violated: deploy implies not self.reverserDeployed");
    }
    if (!((!(!(deploy)) || self.reverserDeployed))) {
      preViolations.push("[ThrustManager.commandReverser] pre violated: not deploy implies self.reverserDeployed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, deploy);
      const postViolations: string[] = [];
      if (!((__result.self.reverserCommanded === deploy))) {
        postViolations.push("[ThrustManager.commandReverser] post violated: self.reverserCommanded = deploy");
      }
      if (!((((deploy && __result.self.aircraftOnGround)) ? ((__result.self.reverserDeployed === true)) : ((__result.self.reverserDeployed === false))))) {
        postViolations.push("[ThrustManager.commandReverser] post violated: if deploy and self.aircraftOnGround then\n            self.reverserDeployed = true\n          else\n            self.reverserDeployed = false\n          endif");
      }
      if (!((__result.self.reverserAuthorized === (deploy && __result.self.aircraftOnGround)))) {
        postViolations.push("[ThrustManager.commandReverser] post violated: self.reverserAuthorized = (deploy and self.aircraftOnGround)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.setAircraftOnGround. User supplies this. */
export type ThrustManagerSetAircraftOnGroundImpl = (self: ThrustManager, onGround: boolean) => { self: ThrustManager; modified: { aircraftOnGround: unknown } };

/** Contract-checking wrapper for ThrustManager.setAircraftOnGround. */
export function wrapThrustManagerSetAircraftOnGround(impl: ThrustManagerSetAircraftOnGroundImpl): (self: ThrustManager, onGround: boolean) => ThrustManager {
  return (self, onGround) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThrustManager.setAircraftOnGround] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, onGround);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftOnGround === onGround))) {
        postViolations.push("[ThrustManager.setAircraftOnGround] post violated: self.aircraftOnGround = onGround");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.setAircraftOnGround (async). User supplies this. */
export type ThrustManagerSetAircraftOnGroundAsyncImpl = (self: ThrustManager, onGround: boolean) => Promise<{ self: ThrustManager; modified: { aircraftOnGround: unknown } }>;

/** Contract-checking wrapper for ThrustManager.setAircraftOnGround (async). */
export function wrapThrustManagerSetAircraftOnGroundAsync(impl: ThrustManagerSetAircraftOnGroundAsyncImpl): (self: ThrustManager, onGround: boolean) => Promise<ThrustManager> {
  return async (self, onGround) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[ThrustManager.setAircraftOnGround] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, onGround);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftOnGround === onGround))) {
        postViolations.push("[ThrustManager.setAircraftOnGround] post violated: self.aircraftOnGround = onGround");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.rejectReverserInFlight. User supplies this. */
export type ThrustManagerRejectReverserInFlightImpl = (self: ThrustManager) => { self: ThrustManager; modified: { reverserDeployed: unknown } };

/** Contract-checking wrapper for ThrustManager.rejectReverserInFlight. */
export function wrapThrustManagerRejectReverserInFlight(impl: ThrustManagerRejectReverserInFlightImpl): (self: ThrustManager) => ThrustManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.aircraftOnGround))) {
      preViolations.push("[ThrustManager.rejectReverserInFlight] pre violated: not self.aircraftOnGround");
    }
    if (!(self.reverserCommanded)) {
      preViolations.push("[ThrustManager.rejectReverserInFlight] pre violated: self.reverserCommanded");
    }
    if (!(!(self.reverserDeployed))) {
      preViolations.push("[ThrustManager.rejectReverserInFlight] pre violated: not self.reverserDeployed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.reverserDeployed))) {
        postViolations.push("[ThrustManager.rejectReverserInFlight] post violated: not self.reverserDeployed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.rejectReverserInFlight (async). User supplies this. */
export type ThrustManagerRejectReverserInFlightAsyncImpl = (self: ThrustManager) => Promise<{ self: ThrustManager; modified: { reverserDeployed: unknown } }>;

/** Contract-checking wrapper for ThrustManager.rejectReverserInFlight (async). */
export function wrapThrustManagerRejectReverserInFlightAsync(impl: ThrustManagerRejectReverserInFlightAsyncImpl): (self: ThrustManager) => Promise<ThrustManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.aircraftOnGround))) {
      preViolations.push("[ThrustManager.rejectReverserInFlight] pre violated: not self.aircraftOnGround");
    }
    if (!(self.reverserCommanded)) {
      preViolations.push("[ThrustManager.rejectReverserInFlight] pre violated: self.reverserCommanded");
    }
    if (!(!(self.reverserDeployed))) {
      preViolations.push("[ThrustManager.rejectReverserInFlight] pre violated: not self.reverserDeployed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.reverserDeployed))) {
        postViolations.push("[ThrustManager.rejectReverserInFlight] post violated: not self.reverserDeployed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.rejectClearThrustHoldInFlight. User supplies this. */
export type ThrustManagerRejectClearThrustHoldInFlightImpl = (self: ThrustManager) => { self: ThrustManager; modified: { thrustHeldInFlight: unknown } };

/** Contract-checking wrapper for ThrustManager.rejectClearThrustHoldInFlight. */
export function wrapThrustManagerRejectClearThrustHoldInFlight(impl: ThrustManagerRejectClearThrustHoldInFlightImpl): (self: ThrustManager) => ThrustManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.aircraftOnGround))) {
      preViolations.push("[ThrustManager.rejectClearThrustHoldInFlight] pre violated: not self.aircraftOnGround");
    }
    if (!(!(self.thrustHeldInFlight))) {
      preViolations.push("[ThrustManager.rejectClearThrustHoldInFlight] pre violated: not self.thrustHeldInFlight");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustHeldInFlight === true))) {
        postViolations.push("[ThrustManager.rejectClearThrustHoldInFlight] post violated: self.thrustHeldInFlight = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThrustManager.rejectClearThrustHoldInFlight (async). User supplies this. */
export type ThrustManagerRejectClearThrustHoldInFlightAsyncImpl = (self: ThrustManager) => Promise<{ self: ThrustManager; modified: { thrustHeldInFlight: unknown } }>;

/** Contract-checking wrapper for ThrustManager.rejectClearThrustHoldInFlight (async). */
export function wrapThrustManagerRejectClearThrustHoldInFlightAsync(impl: ThrustManagerRejectClearThrustHoldInFlightAsyncImpl): (self: ThrustManager) => Promise<ThrustManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.aircraftOnGround))) {
      preViolations.push("[ThrustManager.rejectClearThrustHoldInFlight] pre violated: not self.aircraftOnGround");
    }
    if (!(!(self.thrustHeldInFlight))) {
      preViolations.push("[ThrustManager.rejectClearThrustHoldInFlight] pre violated: not self.thrustHeldInFlight");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustHeldInFlight === true))) {
        postViolations.push("[ThrustManager.rejectClearThrustHoldInFlight] post violated: self.thrustHeldInFlight = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultHandler.handleSensorFault. User supplies this. */
export type SensorFaultHandlerHandleSensorFaultImpl = (self: SensorFaultHandler, faultySensorId: string, lastGood: number) => { self: SensorFaultHandler; modified: { sensorFaultDetected: unknown; modelledValueActive: unknown; sensorFaultCount: unknown; lastGoodReading: unknown; modelledValueEstimate: unknown } };

/** Contract-checking wrapper for SensorFaultHandler.handleSensorFault. */
export function wrapSensorFaultHandlerHandleSensorFault(impl: SensorFaultHandlerHandleSensorFaultImpl): (self: SensorFaultHandler, faultySensorId: string, lastGood: number) => SensorFaultHandler {
  return (self, faultySensorId, lastGood) => {
    const preViolations: string[] = [];
    if (!((faultySensorId !== null))) {
      preViolations.push("[SensorFaultHandler.handleSensorFault] pre violated: faultySensorId <> null");
    }
    if (!((lastGood >= 0))) {
      preViolations.push("[SensorFaultHandler.handleSensorFault] pre violated: lastGood >= 0.0");
    }
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SensorFaultHandler.handleSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sensorFaultCount": self.sensorFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultySensorId, lastGood);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.modelledValueActive === true))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.modelledValueActive = true");
      }
      if (!((__result.self.sensorFaultCount === (__pre["self.sensorFaultCount"] + 1)))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.sensorFaultCount = self.sensorFaultCount@pre + 1");
      }
      if (!((__result.self.lastGoodReading === lastGood))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.lastGoodReading = lastGood");
      }
      if (!((__result.self.modelledValueEstimate === lastGood))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.modelledValueEstimate = lastGood");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultHandler.handleSensorFault (async). User supplies this. */
export type SensorFaultHandlerHandleSensorFaultAsyncImpl = (self: SensorFaultHandler, faultySensorId: string, lastGood: number) => Promise<{ self: SensorFaultHandler; modified: { sensorFaultDetected: unknown; modelledValueActive: unknown; sensorFaultCount: unknown; lastGoodReading: unknown; modelledValueEstimate: unknown } }>;

/** Contract-checking wrapper for SensorFaultHandler.handleSensorFault (async). */
export function wrapSensorFaultHandlerHandleSensorFaultAsync(impl: SensorFaultHandlerHandleSensorFaultAsyncImpl): (self: SensorFaultHandler, faultySensorId: string, lastGood: number) => Promise<SensorFaultHandler> {
  return async (self, faultySensorId, lastGood) => {
    const preViolations: string[] = [];
    if (!((faultySensorId !== null))) {
      preViolations.push("[SensorFaultHandler.handleSensorFault] pre violated: faultySensorId <> null");
    }
    if (!((lastGood >= 0))) {
      preViolations.push("[SensorFaultHandler.handleSensorFault] pre violated: lastGood >= 0.0");
    }
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SensorFaultHandler.handleSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sensorFaultCount": self.sensorFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultySensorId, lastGood);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.modelledValueActive === true))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.modelledValueActive = true");
      }
      if (!((__result.self.sensorFaultCount === (__pre["self.sensorFaultCount"] + 1)))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.sensorFaultCount = self.sensorFaultCount@pre + 1");
      }
      if (!((__result.self.lastGoodReading === lastGood))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.lastGoodReading = lastGood");
      }
      if (!((__result.self.modelledValueEstimate === lastGood))) {
        postViolations.push("[SensorFaultHandler.handleSensorFault] post violated: self.modelledValueEstimate = lastGood");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type SensorFaultHandlerClearSensorFaultImpl = (self: SensorFaultHandler) => { self: SensorFaultHandler; modified: { sensorFaultDetected: unknown; modelledValueActive: unknown } };

/** Contract-checking wrapper for SensorFaultHandler.clearSensorFault. */
export function wrapSensorFaultHandlerClearSensorFault(impl: SensorFaultHandlerClearSensorFaultImpl): (self: SensorFaultHandler) => SensorFaultHandler {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[SensorFaultHandler.clearSensorFault] pre violated: self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.modelledValueActive === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.modelledValueActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type SensorFaultHandlerClearSensorFaultAsyncImpl = (self: SensorFaultHandler) => Promise<{ self: SensorFaultHandler; modified: { sensorFaultDetected: unknown; modelledValueActive: unknown } }>;

/** Contract-checking wrapper for SensorFaultHandler.clearSensorFault (async). */
export function wrapSensorFaultHandlerClearSensorFaultAsync(impl: SensorFaultHandlerClearSensorFaultAsyncImpl): (self: SensorFaultHandler) => Promise<SensorFaultHandler> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[SensorFaultHandler.clearSensorFault] pre violated: self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.modelledValueActive === false))) {
        postViolations.push("[SensorFaultHandler.clearSensorFault] post violated: self.modelledValueActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultHandler.rejectNegativeSensorFaultCount. User supplies this. */
export type SensorFaultHandlerRejectNegativeSensorFaultCountImpl = (self: SensorFaultHandler) => { self: SensorFaultHandler; modified: { sensorFaultCount: unknown } };

/** Contract-checking wrapper for SensorFaultHandler.rejectNegativeSensorFaultCount. */
export function wrapSensorFaultHandlerRejectNegativeSensorFaultCount(impl: SensorFaultHandlerRejectNegativeSensorFaultCountImpl): (self: SensorFaultHandler) => SensorFaultHandler {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultCount === 0))) {
      preViolations.push("[SensorFaultHandler.rejectNegativeSensorFaultCount] pre violated: self.sensorFaultCount = 0");
    }
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SensorFaultHandler.rejectNegativeSensorFaultCount] pre violated: not self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultCount === 0))) {
        postViolations.push("[SensorFaultHandler.rejectNegativeSensorFaultCount] post violated: self.sensorFaultCount = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultHandler.rejectNegativeSensorFaultCount (async). User supplies this. */
export type SensorFaultHandlerRejectNegativeSensorFaultCountAsyncImpl = (self: SensorFaultHandler) => Promise<{ self: SensorFaultHandler; modified: { sensorFaultCount: unknown } }>;

/** Contract-checking wrapper for SensorFaultHandler.rejectNegativeSensorFaultCount (async). */
export function wrapSensorFaultHandlerRejectNegativeSensorFaultCountAsync(impl: SensorFaultHandlerRejectNegativeSensorFaultCountAsyncImpl): (self: SensorFaultHandler) => Promise<SensorFaultHandler> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultCount === 0))) {
      preViolations.push("[SensorFaultHandler.rejectNegativeSensorFaultCount] pre violated: self.sensorFaultCount = 0");
    }
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[SensorFaultHandler.rejectNegativeSensorFaultCount] pre violated: not self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultCount === 0))) {
        postViolations.push("[SensorFaultHandler.rejectNegativeSensorFaultCount] post violated: self.sensorFaultCount = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultHandler.updateModelledValue. User supplies this. */
export type SensorFaultHandlerUpdateModelledValueImpl = (self: SensorFaultHandler, newEstimate: number) => { self: SensorFaultHandler; modified: { modelledValueEstimate: unknown } };

/** Contract-checking wrapper for SensorFaultHandler.updateModelledValue. */
export function wrapSensorFaultHandlerUpdateModelledValue(impl: SensorFaultHandlerUpdateModelledValueImpl): (self: SensorFaultHandler, newEstimate: number) => SensorFaultHandler {
  return (self, newEstimate) => {
    const preViolations: string[] = [];
    if (!((newEstimate >= 0))) {
      preViolations.push("[SensorFaultHandler.updateModelledValue] pre violated: newEstimate >= 0.0");
    }
    if (!(self.modelledValueActive)) {
      preViolations.push("[SensorFaultHandler.updateModelledValue] pre violated: self.modelledValueActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newEstimate);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValueEstimate === newEstimate))) {
        postViolations.push("[SensorFaultHandler.updateModelledValue] post violated: self.modelledValueEstimate = newEstimate");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorFaultHandler.updateModelledValue (async). User supplies this. */
export type SensorFaultHandlerUpdateModelledValueAsyncImpl = (self: SensorFaultHandler, newEstimate: number) => Promise<{ self: SensorFaultHandler; modified: { modelledValueEstimate: unknown } }>;

/** Contract-checking wrapper for SensorFaultHandler.updateModelledValue (async). */
export function wrapSensorFaultHandlerUpdateModelledValueAsync(impl: SensorFaultHandlerUpdateModelledValueAsyncImpl): (self: SensorFaultHandler, newEstimate: number) => Promise<SensorFaultHandler> {
  return async (self, newEstimate) => {
    const preViolations: string[] = [];
    if (!((newEstimate >= 0))) {
      preViolations.push("[SensorFaultHandler.updateModelledValue] pre violated: newEstimate >= 0.0");
    }
    if (!(self.modelledValueActive)) {
      preViolations.push("[SensorFaultHandler.updateModelledValue] pre violated: self.modelledValueActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newEstimate);
      const postViolations: string[] = [];
      if (!((__result.self.modelledValueEstimate === newEstimate))) {
        postViolations.push("[SensorFaultHandler.updateModelledValue] post violated: self.modelledValueEstimate = newEstimate");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemDetectOverspeedImpl = (self: EngineControlSystem, currentRpm: number) => { self: EngineControlSystem; modified: { overspeedDetected: unknown; fuelFlowReduced: unknown } };

/** Contract-checking wrapper for EngineControlSystem.detectOverspeed. */
export function wrapEngineControlSystemDetectOverspeed(impl: EngineControlSystemDetectOverspeedImpl): (self: EngineControlSystem, currentRpm: number) => EngineControlSystem {
  return (self, currentRpm) => {
    const preViolations: string[] = [];
    if (!((currentRpm >= 0))) {
      preViolations.push("[EngineControlSystem.detectOverspeed] pre violated: currentRpm >= 0.0");
    }
    if (!((currentRpm > self.maxSafeRotationalSpeed))) {
      preViolations.push("[EngineControlSystem.detectOverspeed] pre violated: currentRpm > self.maxSafeRotationalSpeed");
    }
    if (!(!(self.overspeedDetected))) {
      preViolations.push("[EngineControlSystem.detectOverspeed] pre violated: not self.overspeedDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentRotationalSpeed": self.currentRotationalSpeed,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentRpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[EngineControlSystem.detectOverspeed] post violated: self.overspeedDetected = true");
      }
      if (!((__result.self.fuelFlowReduced === true))) {
        postViolations.push("[EngineControlSystem.detectOverspeed] post violated: self.fuelFlowReduced = true");
      }
      if (!((__result.self.currentRotationalSpeed === __pre["self.currentRotationalSpeed"]))) {
        postViolations.push("[EngineControlSystem.detectOverspeed] post violated: self.currentRotationalSpeed = self.currentRotationalSpeed@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemDetectOverspeedAsyncImpl = (self: EngineControlSystem, currentRpm: number) => Promise<{ self: EngineControlSystem; modified: { overspeedDetected: unknown; fuelFlowReduced: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.detectOverspeed (async). */
export function wrapEngineControlSystemDetectOverspeedAsync(impl: EngineControlSystemDetectOverspeedAsyncImpl): (self: EngineControlSystem, currentRpm: number) => Promise<EngineControlSystem> {
  return async (self, currentRpm) => {
    const preViolations: string[] = [];
    if (!((currentRpm >= 0))) {
      preViolations.push("[EngineControlSystem.detectOverspeed] pre violated: currentRpm >= 0.0");
    }
    if (!((currentRpm > self.maxSafeRotationalSpeed))) {
      preViolations.push("[EngineControlSystem.detectOverspeed] pre violated: currentRpm > self.maxSafeRotationalSpeed");
    }
    if (!(!(self.overspeedDetected))) {
      preViolations.push("[EngineControlSystem.detectOverspeed] pre violated: not self.overspeedDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentRotationalSpeed": self.currentRotationalSpeed,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentRpm);
      const postViolations: string[] = [];
      if (!((__result.self.overspeedDetected === true))) {
        postViolations.push("[EngineControlSystem.detectOverspeed] post violated: self.overspeedDetected = true");
      }
      if (!((__result.self.fuelFlowReduced === true))) {
        postViolations.push("[EngineControlSystem.detectOverspeed] post violated: self.fuelFlowReduced = true");
      }
      if (!((__result.self.currentRotationalSpeed === __pre["self.currentRotationalSpeed"]))) {
        postViolations.push("[EngineControlSystem.detectOverspeed] post violated: self.currentRotationalSpeed = self.currentRotationalSpeed@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.setContinuousIgnition. User supplies this. */
export type EngineControlSystemSetContinuousIgnitionImpl = (self: EngineControlSystem, enable: boolean) => { self: EngineControlSystem; modified: { commandingContinuousIgnition: unknown; continuousIgnitionActive: unknown } };

/** Contract-checking wrapper for EngineControlSystem.setContinuousIgnition. */
export function wrapEngineControlSystemSetContinuousIgnition(impl: EngineControlSystemSetContinuousIgnitionImpl): (self: EngineControlSystem, enable: boolean) => EngineControlSystem {
  return (self, enable) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.setContinuousIgnition] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, enable);
      const postViolations: string[] = [];
      if (!((__result.self.commandingContinuousIgnition === enable))) {
        postViolations.push("[EngineControlSystem.setContinuousIgnition] post violated: self.commandingContinuousIgnition = enable");
      }
      if (!(((enable) ? ((__result.self.continuousIgnitionActive === true)) : ((__result.self.continuousIgnitionActive === false))))) {
        postViolations.push("[EngineControlSystem.setContinuousIgnition] post violated: if enable then\n            self.continuousIgnitionActive = true\n          else\n            self.continuousIgnitionActive = false\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.setContinuousIgnition (async). User supplies this. */
export type EngineControlSystemSetContinuousIgnitionAsyncImpl = (self: EngineControlSystem, enable: boolean) => Promise<{ self: EngineControlSystem; modified: { commandingContinuousIgnition: unknown; continuousIgnitionActive: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.setContinuousIgnition (async). */
export function wrapEngineControlSystemSetContinuousIgnitionAsync(impl: EngineControlSystemSetContinuousIgnitionAsyncImpl): (self: EngineControlSystem, enable: boolean) => Promise<EngineControlSystem> {
  return async (self, enable) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.setContinuousIgnition] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, enable);
      const postViolations: string[] = [];
      if (!((__result.self.commandingContinuousIgnition === enable))) {
        postViolations.push("[EngineControlSystem.setContinuousIgnition] post violated: self.commandingContinuousIgnition = enable");
      }
      if (!(((enable) ? ((__result.self.continuousIgnitionActive === true)) : ((__result.self.continuousIgnitionActive === false))))) {
        postViolations.push("[EngineControlSystem.setContinuousIgnition] post violated: if enable then\n            self.continuousIgnitionActive = true\n          else\n            self.continuousIgnitionActive = false\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.setThrust. User supplies this. */
export type EngineControlSystemSetThrustImpl = (self: EngineControlSystem, thrustValue: number) => { self: EngineControlSystem; modified: { commandedThrust: unknown; actualThrust: unknown; thrustHeldInFlight: unknown } };

/** Contract-checking wrapper for EngineControlSystem.setThrust. */
export function wrapEngineControlSystemSetThrust(impl: EngineControlSystemSetThrustImpl): (self: EngineControlSystem, thrustValue: number) => EngineControlSystem {
  return (self, thrustValue) => {
    const preViolations: string[] = [];
    if (!((thrustValue >= 0))) {
      preViolations.push("[EngineControlSystem.setThrust] pre violated: thrustValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.aircraftOnGround": self.aircraftOnGround,
      "self.actualThrust": self.actualThrust,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, thrustValue);
      const postViolations: string[] = [];
      if (!((__result.self.commandedThrust === thrustValue))) {
        postViolations.push("[EngineControlSystem.setThrust] post violated: self.commandedThrust = thrustValue");
      }
      if (!(((__pre["self.aircraftOnGround"]) ? ((__result.self.actualThrust === thrustValue)) : ((__result.self.actualThrust === __pre["self.actualThrust"]))))) {
        postViolations.push("[EngineControlSystem.setThrust] post violated: if self.aircraftOnGround@pre then\n            self.actualThrust = thrustValue\n          else\n            self.actualThrust = self.actualThrust@pre   \n          endif");
      }
      if (!(((!(__pre["self.aircraftOnGround"])) ? ((__result.self.thrustHeldInFlight === true)) : ((__result.self.thrustHeldInFlight === false))))) {
        postViolations.push("[EngineControlSystem.setThrust] post violated: if not self.aircraftOnGround@pre then self.thrustHeldInFlight = true else self.thrustHeldInFlight = false endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.setThrust (async). User supplies this. */
export type EngineControlSystemSetThrustAsyncImpl = (self: EngineControlSystem, thrustValue: number) => Promise<{ self: EngineControlSystem; modified: { commandedThrust: unknown; actualThrust: unknown; thrustHeldInFlight: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.setThrust (async). */
export function wrapEngineControlSystemSetThrustAsync(impl: EngineControlSystemSetThrustAsyncImpl): (self: EngineControlSystem, thrustValue: number) => Promise<EngineControlSystem> {
  return async (self, thrustValue) => {
    const preViolations: string[] = [];
    if (!((thrustValue >= 0))) {
      preViolations.push("[EngineControlSystem.setThrust] pre violated: thrustValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.aircraftOnGround": self.aircraftOnGround,
      "self.actualThrust": self.actualThrust,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, thrustValue);
      const postViolations: string[] = [];
      if (!((__result.self.commandedThrust === thrustValue))) {
        postViolations.push("[EngineControlSystem.setThrust] post violated: self.commandedThrust = thrustValue");
      }
      if (!(((__pre["self.aircraftOnGround"]) ? ((__result.self.actualThrust === thrustValue)) : ((__result.self.actualThrust === __pre["self.actualThrust"]))))) {
        postViolations.push("[EngineControlSystem.setThrust] post violated: if self.aircraftOnGround@pre then\n            self.actualThrust = thrustValue\n          else\n            self.actualThrust = self.actualThrust@pre   \n          endif");
      }
      if (!(((!(__pre["self.aircraftOnGround"])) ? ((__result.self.thrustHeldInFlight === true)) : ((__result.self.thrustHeldInFlight === false))))) {
        postViolations.push("[EngineControlSystem.setThrust] post violated: if not self.aircraftOnGround@pre then self.thrustHeldInFlight = true else self.thrustHeldInFlight = false endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.commandReverser. User supplies this. */
export type EngineControlSystemCommandReverserImpl = (self: EngineControlSystem, deploy: boolean) => { self: EngineControlSystem; modified: { reverserCommanded: unknown; reverserDeployed: unknown; reverserAuthorized: unknown } };

/** Contract-checking wrapper for EngineControlSystem.commandReverser. */
export function wrapEngineControlSystemCommandReverser(impl: EngineControlSystemCommandReverserImpl): (self: EngineControlSystem, deploy: boolean) => EngineControlSystem {
  return (self, deploy) => {
    const preViolations: string[] = [];
    if (!((!(deploy) || self.aircraftOnGround))) {
      preViolations.push("[EngineControlSystem.commandReverser] pre violated: deploy implies self.aircraftOnGround");
    }
    if (!((!(deploy) || !(self.reverserDeployed)))) {
      preViolations.push("[EngineControlSystem.commandReverser] pre violated: deploy implies not self.reverserDeployed");
    }
    if (!((!(!(deploy)) || self.reverserDeployed))) {
      preViolations.push("[EngineControlSystem.commandReverser] pre violated: not deploy implies self.reverserDeployed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.aircraftOnGround": self.aircraftOnGround,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, deploy);
      const postViolations: string[] = [];
      if (!((__result.self.reverserCommanded === deploy))) {
        postViolations.push("[EngineControlSystem.commandReverser] post violated: self.reverserCommanded = deploy");
      }
      if (!((((deploy && __pre["self.aircraftOnGround"])) ? ((__result.self.reverserDeployed === true)) : ((__result.self.reverserDeployed === false))))) {
        postViolations.push("[EngineControlSystem.commandReverser] post violated: if deploy and self.aircraftOnGround@pre then\n            self.reverserDeployed = true\n          else\n            self.reverserDeployed = false\n          endif");
      }
      if (!((__result.self.reverserAuthorized === (deploy && __pre["self.aircraftOnGround"])))) {
        postViolations.push("[EngineControlSystem.commandReverser] post violated: self.reverserAuthorized = (deploy and self.aircraftOnGround@pre)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.commandReverser (async). User supplies this. */
export type EngineControlSystemCommandReverserAsyncImpl = (self: EngineControlSystem, deploy: boolean) => Promise<{ self: EngineControlSystem; modified: { reverserCommanded: unknown; reverserDeployed: unknown; reverserAuthorized: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.commandReverser (async). */
export function wrapEngineControlSystemCommandReverserAsync(impl: EngineControlSystemCommandReverserAsyncImpl): (self: EngineControlSystem, deploy: boolean) => Promise<EngineControlSystem> {
  return async (self, deploy) => {
    const preViolations: string[] = [];
    if (!((!(deploy) || self.aircraftOnGround))) {
      preViolations.push("[EngineControlSystem.commandReverser] pre violated: deploy implies self.aircraftOnGround");
    }
    if (!((!(deploy) || !(self.reverserDeployed)))) {
      preViolations.push("[EngineControlSystem.commandReverser] pre violated: deploy implies not self.reverserDeployed");
    }
    if (!((!(!(deploy)) || self.reverserDeployed))) {
      preViolations.push("[EngineControlSystem.commandReverser] pre violated: not deploy implies self.reverserDeployed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.aircraftOnGround": self.aircraftOnGround,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, deploy);
      const postViolations: string[] = [];
      if (!((__result.self.reverserCommanded === deploy))) {
        postViolations.push("[EngineControlSystem.commandReverser] post violated: self.reverserCommanded = deploy");
      }
      if (!((((deploy && __pre["self.aircraftOnGround"])) ? ((__result.self.reverserDeployed === true)) : ((__result.self.reverserDeployed === false))))) {
        postViolations.push("[EngineControlSystem.commandReverser] post violated: if deploy and self.aircraftOnGround@pre then\n            self.reverserDeployed = true\n          else\n            self.reverserDeployed = false\n          endif");
      }
      if (!((__result.self.reverserAuthorized === (deploy && __pre["self.aircraftOnGround"])))) {
        postViolations.push("[EngineControlSystem.commandReverser] post violated: self.reverserAuthorized = (deploy and self.aircraftOnGround@pre)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemHandleSensorFaultImpl = (self: EngineControlSystem, faultySensorId: string) => { self: EngineControlSystem; modified: { sensorFaultDetected: unknown; modelledValueActive: unknown; sensorFaultCount: unknown } };

/** Contract-checking wrapper for EngineControlSystem.handleSensorFault. */
export function wrapEngineControlSystemHandleSensorFault(impl: EngineControlSystemHandleSensorFaultImpl): (self: EngineControlSystem, faultySensorId: string) => EngineControlSystem {
  return (self, faultySensorId) => {
    const preViolations: string[] = [];
    if (!((faultySensorId !== null))) {
      preViolations.push("[EngineControlSystem.handleSensorFault] pre violated: faultySensorId <> null");
    }
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[EngineControlSystem.handleSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (!(((self.sensorFaultCount + 1) >= 0))) {
      preViolations.push("[EngineControlSystem.handleSensorFault] pre violated: self.sensorFaultCount + 1 >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sensorFaultCount": self.sensorFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultySensorId);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.modelledValueActive === true))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: self.modelledValueActive = true");
      }
      if (!((__result.self.sensorFaultCount === (__pre["self.sensorFaultCount"] + 1)))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: self.sensorFaultCount = self.sensorFaultCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemHandleSensorFaultAsyncImpl = (self: EngineControlSystem, faultySensorId: string) => Promise<{ self: EngineControlSystem; modified: { sensorFaultDetected: unknown; modelledValueActive: unknown; sensorFaultCount: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.handleSensorFault (async). */
export function wrapEngineControlSystemHandleSensorFaultAsync(impl: EngineControlSystemHandleSensorFaultAsyncImpl): (self: EngineControlSystem, faultySensorId: string) => Promise<EngineControlSystem> {
  return async (self, faultySensorId) => {
    const preViolations: string[] = [];
    if (!((faultySensorId !== null))) {
      preViolations.push("[EngineControlSystem.handleSensorFault] pre violated: faultySensorId <> null");
    }
    if (!(!(self.sensorFaultDetected))) {
      preViolations.push("[EngineControlSystem.handleSensorFault] pre violated: not self.sensorFaultDetected");
    }
    if (!(((self.sensorFaultCount + 1) >= 0))) {
      preViolations.push("[EngineControlSystem.handleSensorFault] pre violated: self.sensorFaultCount + 1 >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sensorFaultCount": self.sensorFaultCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultySensorId);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === true))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: self.sensorFaultDetected = true");
      }
      if (!((__result.self.modelledValueActive === true))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: self.modelledValueActive = true");
      }
      if (!((__result.self.sensorFaultCount === (__pre["self.sensorFaultCount"] + 1)))) {
        postViolations.push("[EngineControlSystem.handleSensorFault] post violated: self.sensorFaultCount = self.sensorFaultCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.clearSensorFault. User supplies this. */
export type EngineControlSystemClearSensorFaultImpl = (self: EngineControlSystem) => { self: EngineControlSystem; modified: { sensorFaultDetected: unknown; modelledValueActive: unknown } };

/** Contract-checking wrapper for EngineControlSystem.clearSensorFault. */
export function wrapEngineControlSystemClearSensorFault(impl: EngineControlSystemClearSensorFaultImpl): (self: EngineControlSystem) => EngineControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[EngineControlSystem.clearSensorFault] pre violated: self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[EngineControlSystem.clearSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.modelledValueActive === false))) {
        postViolations.push("[EngineControlSystem.clearSensorFault] post violated: self.modelledValueActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.clearSensorFault (async). User supplies this. */
export type EngineControlSystemClearSensorFaultAsyncImpl = (self: EngineControlSystem) => Promise<{ self: EngineControlSystem; modified: { sensorFaultDetected: unknown; modelledValueActive: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.clearSensorFault (async). */
export function wrapEngineControlSystemClearSensorFaultAsync(impl: EngineControlSystemClearSensorFaultAsyncImpl): (self: EngineControlSystem) => Promise<EngineControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.sensorFaultDetected)) {
      preViolations.push("[EngineControlSystem.clearSensorFault] pre violated: self.sensorFaultDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultDetected === false))) {
        postViolations.push("[EngineControlSystem.clearSensorFault] post violated: self.sensorFaultDetected = false");
      }
      if (!((__result.self.modelledValueActive === false))) {
        postViolations.push("[EngineControlSystem.clearSensorFault] post violated: self.modelledValueActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.setAircraftOnGround. User supplies this. */
export type EngineControlSystemSetAircraftOnGroundImpl = (self: EngineControlSystem, onGround: boolean) => { self: EngineControlSystem; modified: { aircraftOnGround: unknown } };

/** Contract-checking wrapper for EngineControlSystem.setAircraftOnGround. */
export function wrapEngineControlSystemSetAircraftOnGround(impl: EngineControlSystemSetAircraftOnGroundImpl): (self: EngineControlSystem, onGround: boolean) => EngineControlSystem {
  return (self, onGround) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.setAircraftOnGround] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, onGround);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftOnGround === onGround))) {
        postViolations.push("[EngineControlSystem.setAircraftOnGround] post violated: self.aircraftOnGround = onGround");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.setAircraftOnGround (async). User supplies this. */
export type EngineControlSystemSetAircraftOnGroundAsyncImpl = (self: EngineControlSystem, onGround: boolean) => Promise<{ self: EngineControlSystem; modified: { aircraftOnGround: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.setAircraftOnGround (async). */
export function wrapEngineControlSystemSetAircraftOnGroundAsync(impl: EngineControlSystemSetAircraftOnGroundAsyncImpl): (self: EngineControlSystem, onGround: boolean) => Promise<EngineControlSystem> {
  return async (self, onGround) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.setAircraftOnGround] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, onGround);
      const postViolations: string[] = [];
      if (!((__result.self.aircraftOnGround === onGround))) {
        postViolations.push("[EngineControlSystem.setAircraftOnGround] post violated: self.aircraftOnGround = onGround");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.setFuelLimitActive. User supplies this. */
export type EngineControlSystemSetFuelLimitActiveImpl = (self: EngineControlSystem, active: boolean) => { self: EngineControlSystem; modified: { fuelLimitActive: unknown } };

/** Contract-checking wrapper for EngineControlSystem.setFuelLimitActive. */
export function wrapEngineControlSystemSetFuelLimitActive(impl: EngineControlSystemSetFuelLimitActiveImpl): (self: EngineControlSystem, active: boolean) => EngineControlSystem {
  return (self, active) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.setFuelLimitActive] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, active);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimitActive === active))) {
        postViolations.push("[EngineControlSystem.setFuelLimitActive] post violated: self.fuelLimitActive = active");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystem.setFuelLimitActive (async). User supplies this. */
export type EngineControlSystemSetFuelLimitActiveAsyncImpl = (self: EngineControlSystem, active: boolean) => Promise<{ self: EngineControlSystem; modified: { fuelLimitActive: unknown } }>;

/** Contract-checking wrapper for EngineControlSystem.setFuelLimitActive (async). */
export function wrapEngineControlSystemSetFuelLimitActiveAsync(impl: EngineControlSystemSetFuelLimitActiveAsyncImpl): (self: EngineControlSystem, active: boolean) => Promise<EngineControlSystem> {
  return async (self, active) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EngineControlSystem.setFuelLimitActive] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, active);
      const postViolations: string[] = [];
      if (!((__result.self.fuelLimitActive === active))) {
        postViolations.push("[EngineControlSystem.setFuelLimitActive] post violated: self.fuelLimitActive = active");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed. User supplies this. */
export type EngineControlSystemFormalizedRejectDeactivateFuelLimitOnOverspeedImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { fuelLimitActive: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed. */
export function wrapEngineControlSystemFormalizedRejectDeactivateFuelLimitOnOverspeed(impl: EngineControlSystemFormalizedRejectDeactivateFuelLimitOnOverspeedImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.overspeedDetected)) {
      preViolations.push("[EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed] pre violated: self.overspeedDetected");
    }
    if (!(self.fuelLimitActive)) {
      preViolations.push("[EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed] pre violated: self.fuelLimitActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(__result.self.fuelLimitActive)) {
        postViolations.push("[EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed] post violated: self.fuelLimitActive");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed (async). User supplies this. */
export type EngineControlSystemFormalizedRejectDeactivateFuelLimitOnOverspeedAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { fuelLimitActive: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed (async). */
export function wrapEngineControlSystemFormalizedRejectDeactivateFuelLimitOnOverspeedAsync(impl: EngineControlSystemFormalizedRejectDeactivateFuelLimitOnOverspeedAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.overspeedDetected)) {
      preViolations.push("[EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed] pre violated: self.overspeedDetected");
    }
    if (!(self.fuelLimitActive)) {
      preViolations.push("[EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed] pre violated: self.fuelLimitActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(__result.self.fuelLimitActive)) {
        postViolations.push("[EngineControlSystemFormalized.rejectDeactivateFuelLimitOnOverspeed] post violated: self.fuelLimitActive");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemFormalizedRejectReverserInFlightImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { reverserDeployed: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectReverserInFlight. */
export function wrapEngineControlSystemFormalizedRejectReverserInFlight(impl: EngineControlSystemFormalizedRejectReverserInFlightImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.aircraftOnGround))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: not self.aircraftOnGround");
    }
    if (!(self.reverserCommanded)) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: self.reverserCommanded");
    }
    if (!(!(self.reverserDeployed))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: not self.reverserDeployed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.reverserDeployed))) {
        postViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] post violated: not self.reverserDeployed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type EngineControlSystemFormalizedRejectReverserInFlightAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { reverserDeployed: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectReverserInFlight (async). */
export function wrapEngineControlSystemFormalizedRejectReverserInFlightAsync(impl: EngineControlSystemFormalizedRejectReverserInFlightAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.aircraftOnGround))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: not self.aircraftOnGround");
    }
    if (!(self.reverserCommanded)) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: self.reverserCommanded");
    }
    if (!(!(self.reverserDeployed))) {
      preViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] pre violated: not self.reverserDeployed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.reverserDeployed))) {
        postViolations.push("[EngineControlSystemFormalized.rejectReverserInFlight] post violated: not self.reverserDeployed");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectNegativeSensorFaultCount. User supplies this. */
export type EngineControlSystemFormalizedRejectNegativeSensorFaultCountImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { sensorFaultCount: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectNegativeSensorFaultCount. */
export function wrapEngineControlSystemFormalizedRejectNegativeSensorFaultCount(impl: EngineControlSystemFormalizedRejectNegativeSensorFaultCountImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultCount === 0))) {
      preViolations.push("[EngineControlSystemFormalized.rejectNegativeSensorFaultCount] pre violated: self.sensorFaultCount = 0");
    }
    if (!((self.sensorFaultDetected === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectNegativeSensorFaultCount] pre violated: self.sensorFaultDetected = false");
    }
    if (!((self.sensorFaultCount === 0))) {
      preViolations.push("[EngineControlSystemFormalized.rejectNegativeSensorFaultCount] pre violated: self.sensorFaultCount = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultCount === 0))) {
        postViolations.push("[EngineControlSystemFormalized.rejectNegativeSensorFaultCount] post violated: self.sensorFaultCount = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectNegativeSensorFaultCount (async). User supplies this. */
export type EngineControlSystemFormalizedRejectNegativeSensorFaultCountAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { sensorFaultCount: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectNegativeSensorFaultCount (async). */
export function wrapEngineControlSystemFormalizedRejectNegativeSensorFaultCountAsync(impl: EngineControlSystemFormalizedRejectNegativeSensorFaultCountAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaultCount === 0))) {
      preViolations.push("[EngineControlSystemFormalized.rejectNegativeSensorFaultCount] pre violated: self.sensorFaultCount = 0");
    }
    if (!((self.sensorFaultDetected === false))) {
      preViolations.push("[EngineControlSystemFormalized.rejectNegativeSensorFaultCount] pre violated: self.sensorFaultDetected = false");
    }
    if (!((self.sensorFaultCount === 0))) {
      preViolations.push("[EngineControlSystemFormalized.rejectNegativeSensorFaultCount] pre violated: self.sensorFaultCount = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaultCount === 0))) {
        postViolations.push("[EngineControlSystemFormalized.rejectNegativeSensorFaultCount] post violated: self.sensorFaultCount = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectClearThrustHoldInFlight. User supplies this. */
export type EngineControlSystemFormalizedRejectClearThrustHoldInFlightImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { thrustHeldInFlight: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectClearThrustHoldInFlight. */
export function wrapEngineControlSystemFormalizedRejectClearThrustHoldInFlight(impl: EngineControlSystemFormalizedRejectClearThrustHoldInFlightImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.aircraftOnGround))) {
      preViolations.push("[EngineControlSystemFormalized.rejectClearThrustHoldInFlight] pre violated: not self.aircraftOnGround");
    }
    if (!(!(self.thrustHeldInFlight))) {
      preViolations.push("[EngineControlSystemFormalized.rejectClearThrustHoldInFlight] pre violated: not self.thrustHeldInFlight");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustHeldInFlight === true))) {
        postViolations.push("[EngineControlSystemFormalized.rejectClearThrustHoldInFlight] post violated: self.thrustHeldInFlight = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectClearThrustHoldInFlight (async). User supplies this. */
export type EngineControlSystemFormalizedRejectClearThrustHoldInFlightAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { thrustHeldInFlight: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectClearThrustHoldInFlight (async). */
export function wrapEngineControlSystemFormalizedRejectClearThrustHoldInFlightAsync(impl: EngineControlSystemFormalizedRejectClearThrustHoldInFlightAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.aircraftOnGround))) {
      preViolations.push("[EngineControlSystemFormalized.rejectClearThrustHoldInFlight] pre violated: not self.aircraftOnGround");
    }
    if (!(!(self.thrustHeldInFlight))) {
      preViolations.push("[EngineControlSystemFormalized.rejectClearThrustHoldInFlight] pre violated: not self.thrustHeldInFlight");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.thrustHeldInFlight === true))) {
        postViolations.push("[EngineControlSystemFormalized.rejectClearThrustHoldInFlight] post violated: self.thrustHeldInFlight = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine. User supplies this. */
export type EngineControlSystemFormalizedRejectContinuousIgnitionOnStoppedEngineImpl = (self: EngineControlSystemFormalized) => { self: EngineControlSystemFormalized; modified: { commandingContinuousIgnition: unknown } };

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine. */
export function wrapEngineControlSystemFormalizedRejectContinuousIgnitionOnStoppedEngine(impl: EngineControlSystemFormalizedRejectContinuousIgnitionOnStoppedEngineImpl): (self: EngineControlSystemFormalized) => EngineControlSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentRotationalSpeed === 0))) {
      preViolations.push("[EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine] pre violated: self.currentRotationalSpeed = 0.0");
    }
    if (!(self.commandingContinuousIgnition)) {
      preViolations.push("[EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine] pre violated: self.commandingContinuousIgnition");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.commandingContinuousIgnition))) {
        postViolations.push("[EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine] post violated: not self.commandingContinuousIgnition");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine (async). User supplies this. */
export type EngineControlSystemFormalizedRejectContinuousIgnitionOnStoppedEngineAsyncImpl = (self: EngineControlSystemFormalized) => Promise<{ self: EngineControlSystemFormalized; modified: { commandingContinuousIgnition: unknown } }>;

/** Contract-checking wrapper for EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine (async). */
export function wrapEngineControlSystemFormalizedRejectContinuousIgnitionOnStoppedEngineAsync(impl: EngineControlSystemFormalizedRejectContinuousIgnitionOnStoppedEngineAsyncImpl): (self: EngineControlSystemFormalized) => Promise<EngineControlSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentRotationalSpeed === 0))) {
      preViolations.push("[EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine] pre violated: self.currentRotationalSpeed = 0.0");
    }
    if (!(self.commandingContinuousIgnition)) {
      preViolations.push("[EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine] pre violated: self.commandingContinuousIgnition");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(!(__result.self.commandingContinuousIgnition))) {
        postViolations.push("[EngineControlSystemFormalized.rejectContinuousIgnitionOnStoppedEngine] post violated: not self.commandingContinuousIgnition");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for OverspeedSafetyCommitment commitments. */
export class OverspeedSafetyCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<OverspeedSafetyCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a OverspeedSafetyCommitment — the typed wrapper guarantees that since
    // `register` only accepts OverspeedSafetyCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: OverspeedSafetyCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: OverspeedSafetyCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: OverspeedSafetyCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: OverspeedSafetyCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<OverspeedSafetyCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<OverspeedSafetyCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for OverspeedFuelCutCommitment commitments. */
export class OverspeedFuelCutCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<OverspeedFuelCutCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a OverspeedFuelCutCommitment — the typed wrapper guarantees that since
    // `register` only accepts OverspeedFuelCutCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: OverspeedFuelCutCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: OverspeedFuelCutCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: OverspeedFuelCutCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: OverspeedFuelCutCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<OverspeedFuelCutCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<OverspeedFuelCutCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for IgnitionDisciplineCommitment commitments. */
export class IgnitionDisciplineCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<IgnitionDisciplineCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a IgnitionDisciplineCommitment — the typed wrapper guarantees that since
    // `register` only accepts IgnitionDisciplineCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: IgnitionDisciplineCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: IgnitionDisciplineCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: IgnitionDisciplineCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: IgnitionDisciplineCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<IgnitionDisciplineCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<IgnitionDisciplineCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ReverserGroundOnlyCommitment commitments. */
export class ReverserGroundOnlyCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ReverserGroundOnlyCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ReverserGroundOnlyCommitment — the typed wrapper guarantees that since
    // `register` only accepts ReverserGroundOnlyCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ReverserGroundOnlyCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ReverserGroundOnlyCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ReverserGroundOnlyCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ReverserGroundOnlyCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ReverserGroundOnlyCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ReverserGroundOnlyCommitment>[];
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

