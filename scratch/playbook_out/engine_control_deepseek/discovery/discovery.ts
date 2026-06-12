// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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

