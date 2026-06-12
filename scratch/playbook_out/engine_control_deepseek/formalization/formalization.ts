// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for SensorKindOrSimilar. Runtime: string. Compile-time: branded. */
export type SensorKindOrSimilarId = string & { readonly __brand: "SensorKindOrSimilarId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───

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

