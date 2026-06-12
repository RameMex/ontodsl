// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───


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

