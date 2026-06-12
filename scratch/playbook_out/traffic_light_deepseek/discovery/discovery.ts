// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Driver. Runtime: string. Compile-time: branded. */
export type DriverId = string & { readonly __brand: "DriverId" };
/** Identity type for Pedestrian. Runtime: string. Compile-time: branded. */
export type PedestrianId = string & { readonly __brand: "PedestrianId" };
/** Identity type for EmergencyVehicleOperator. Runtime: string. Compile-time: branded. */
export type EmergencyVehicleOperatorId = string & { readonly __brand: "EmergencyVehicleOperatorId" };
/** Identity type for CityTrafficAuthority. Runtime: string. Compile-time: branded. */
export type CityTrafficAuthorityId = string & { readonly __brand: "CityTrafficAuthorityId" };
/** Identity type for TrafficLightVendor. Runtime: string. Compile-time: branded. */
export type TrafficLightVendorId = string & { readonly __brand: "TrafficLightVendorId" };
/** Identity type for Approach. Runtime: string. Compile-time: branded. */
export type ApproachId = string & { readonly __brand: "ApproachId" };
/** Identity type for Phase. Runtime: string. Compile-time: branded. */
export type PhaseId = string & { readonly __brand: "PhaseId" };
/** Identity type for YellowInterval. Runtime: string. Compile-time: branded. */
export type YellowIntervalId = string & { readonly __brand: "YellowIntervalId" };
/** Identity type for Preemption. Runtime: string. Compile-time: branded. */
export type PreemptionId = string & { readonly __brand: "PreemptionId" };
/** Identity type for MutualExclusionCommitment. Runtime: string. Compile-time: branded. */
export type MutualExclusionCommitmentId = string & { readonly __brand: "MutualExclusionCommitmentId" };
/** Identity type for YellowIntervalCommitment. Runtime: string. Compile-time: branded. */
export type YellowIntervalCommitmentId = string & { readonly __brand: "YellowIntervalCommitmentId" };
/** Identity type for EmergencyPreemptionCommitment. Runtime: string. Compile-time: branded. */
export type EmergencyPreemptionCommitmentId = string & { readonly __brand: "EmergencyPreemptionCommitmentId" };
/** Identity type for PedestrianRequestCommitment. Runtime: string. Compile-time: branded. */
export type PedestrianRequestCommitmentId = string & { readonly __brand: "PedestrianRequestCommitmentId" };
/** Identity type for NormalPhaseCycle. Runtime: string. Compile-time: branded. */
export type NormalPhaseCycleId = string & { readonly __brand: "NormalPhaseCycleId" };
/** Identity type for EmergencyPreemptionFlow. Runtime: string. Compile-time: branded. */
export type EmergencyPreemptionFlowId = string & { readonly __brand: "EmergencyPreemptionFlowId" };
/** Identity type for PedestrianRequestFlow. Runtime: string. Compile-time: branded. */
export type PedestrianRequestFlowId = string & { readonly __brand: "PedestrianRequestFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Driver {
  readonly driverId: DriverId;
  readonly vehicleType: string;
}

/** @stereotype <<Agent>> */
export interface Pedestrian {
  readonly pedestrianId: PedestrianId;
}

/** @stereotype <<Agent>> */
export interface EmergencyVehicleOperator {
  readonly operatorId: EmergencyVehicleOperatorId;
  readonly vehicleCategory: string;
}

/** @stereotype <<Agent>> */
export interface CityTrafficAuthority {
  readonly authorityId: CityTrafficAuthorityId;
  readonly jurisdictionCode: string;
}

/** @stereotype <<Agent>> */
export interface TrafficLightVendor {
  readonly vendorId: TrafficLightVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface Approach {
  readonly approachId: ApproachId;
  readonly direction: string;
}

/** @stereotype <<Kind>> */
export interface Phase {
  readonly phaseId: PhaseId;
  readonly name: string;
  readonly greenApproaches: ReadonlySet<Approach>;
}

/** @stereotype <<Kind>> */
export interface YellowInterval {
  readonly intervalId: YellowIntervalId;
  readonly minimumDurationSeconds: number;
}

/** @stereotype <<Kind>> */
export interface Preemption {
  readonly preemptionId: PreemptionId;
  readonly maxResponseTimeSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface MutualExclusionCommitment {
  readonly commitmentId: MutualExclusionCommitmentId;
  readonly greenApproaches: ReadonlySet<Approach>;
}

/** @stereotype <<Commitment>> */
export interface YellowIntervalCommitment {
  readonly commitmentId: YellowIntervalCommitmentId;
  readonly yellowIntervalSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface EmergencyPreemptionCommitment {
  readonly commitmentId: EmergencyPreemptionCommitmentId;
  readonly preemptionResponseTimeSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface PedestrianRequestCommitment {
  readonly commitmentId: PedestrianRequestCommitmentId;
  readonly pedestrianRequestPending: boolean;
  readonly walkSignalActive: boolean;
}

/** @stereotype <<Category>> */
export interface MutualExclusionConstraints {
}

/** @stereotype <<Category>> */
export interface YellowTimingConstraints {
}

/** @stereotype <<Category>> */
export interface EmergencyTimingConstraints {
}

/** @stereotype <<Happening>> */
export interface NormalPhaseCycle {
  readonly cycleId: NormalPhaseCycleId;
  readonly currentPhase: Phase;
  readonly nextPhase: Phase;
  readonly yellowInterval: YellowInterval;
  readonly allRedDwellSeconds: number;
}

/** @stereotype <<Happening>> */
export interface EmergencyPreemptionFlow {
  readonly flowId: EmergencyPreemptionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface PedestrianRequestFlow {
  readonly flowId: PedestrianRequestFlowId;
  readonly buttonPressTimestamp: number;
  readonly walkGranted: boolean;
}


// ─── Factory functions ───

export function makeDriver(data: {
  driverId: string;
  vehicleType: string;
}): Driver {
  return {
    driverId: data.driverId as DriverId,
    vehicleType: data.vehicleType,
  };
}

export function makePedestrian(data: {
  pedestrianId: string;
}): Pedestrian {
  return {
    pedestrianId: data.pedestrianId as PedestrianId,
  };
}

export function makeEmergencyVehicleOperator(data: {
  operatorId: string;
  vehicleCategory: string;
}): EmergencyVehicleOperator {
  return {
    operatorId: data.operatorId as EmergencyVehicleOperatorId,
    vehicleCategory: data.vehicleCategory,
  };
}

export function makeCityTrafficAuthority(data: {
  authorityId: string;
  jurisdictionCode: string;
}): CityTrafficAuthority {
  return {
    authorityId: data.authorityId as CityTrafficAuthorityId,
    jurisdictionCode: data.jurisdictionCode,
  };
}

export function makeTrafficLightVendor(data: {
  vendorId: string;
  name: string;
}): TrafficLightVendor {
  return {
    vendorId: data.vendorId as TrafficLightVendorId,
    name: data.name,
  };
}

export function makeApproach(data: {
  approachId: string;
  direction: string;
}): Approach {
  return {
    approachId: data.approachId as ApproachId,
    direction: data.direction,
  };
}

export function makePhase(data: {
  phaseId: string;
  name: string;
  greenApproaches: ReadonlySet<Approach>;
}): Phase {
  return {
    phaseId: data.phaseId as PhaseId,
    name: data.name,
    greenApproaches: data.greenApproaches,
  };
}

export function makeYellowInterval(data: {
  intervalId: string;
  minimumDurationSeconds: number;
}): YellowInterval {
  return {
    intervalId: data.intervalId as YellowIntervalId,
    minimumDurationSeconds: data.minimumDurationSeconds,
  };
}

export function makePreemption(data: {
  preemptionId: string;
  maxResponseTimeSeconds: number;
}): Preemption {
  return {
    preemptionId: data.preemptionId as PreemptionId,
    maxResponseTimeSeconds: data.maxResponseTimeSeconds,
  };
}

export function makeMutualExclusionCommitment(data: {
  commitmentId: string;
  greenApproaches: ReadonlySet<Approach>;
}): MutualExclusionCommitment {
  return {
    commitmentId: data.commitmentId as MutualExclusionCommitmentId,
    greenApproaches: data.greenApproaches,
  };
}

export function makeYellowIntervalCommitment(data: {
  commitmentId: string;
  yellowIntervalSeconds: number;
}): YellowIntervalCommitment {
  return {
    commitmentId: data.commitmentId as YellowIntervalCommitmentId,
    yellowIntervalSeconds: data.yellowIntervalSeconds,
  };
}

export function makeEmergencyPreemptionCommitment(data: {
  commitmentId: string;
  preemptionResponseTimeSeconds: number;
}): EmergencyPreemptionCommitment {
  return {
    commitmentId: data.commitmentId as EmergencyPreemptionCommitmentId,
    preemptionResponseTimeSeconds: data.preemptionResponseTimeSeconds,
  };
}

export function makePedestrianRequestCommitment(data: {
  commitmentId: string;
  pedestrianRequestPending: boolean;
  walkSignalActive: boolean;
}): PedestrianRequestCommitment {
  return {
    commitmentId: data.commitmentId as PedestrianRequestCommitmentId,
    pedestrianRequestPending: data.pedestrianRequestPending,
    walkSignalActive: data.walkSignalActive,
  };
}

export function makeNormalPhaseCycle(data: {
  cycleId: string;
  currentPhase: Phase;
  nextPhase: Phase;
  yellowInterval: YellowInterval;
  allRedDwellSeconds: number;
}): NormalPhaseCycle {
  return {
    cycleId: data.cycleId as NormalPhaseCycleId,
    currentPhase: data.currentPhase,
    nextPhase: data.nextPhase,
    yellowInterval: data.yellowInterval,
    allRedDwellSeconds: data.allRedDwellSeconds,
  };
}

export function makeEmergencyPreemptionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): EmergencyPreemptionFlow {
  return {
    flowId: data.flowId as EmergencyPreemptionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makePedestrianRequestFlow(data: {
  flowId: string;
  buttonPressTimestamp: number;
  walkGranted: boolean;
}): PedestrianRequestFlow {
  return {
    flowId: data.flowId as PedestrianRequestFlowId,
    buttonPressTimestamp: data.buttonPressTimestamp,
    walkGranted: data.walkGranted,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Driver. Returns empty array when valid. */
export function validateDriver(instance: Driver): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverId !== null))) {
    violations.push("[Driver] invariant violated: self.driverId <> null");
  }
  return violations;
}

/** Runtime invariant check for Pedestrian. Returns empty array when valid. */
export function validatePedestrian(instance: Pedestrian): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pedestrianId !== null))) {
    violations.push("[Pedestrian] invariant violated: self.pedestrianId <> null");
  }
  return violations;
}

/** Runtime invariant check for EmergencyVehicleOperator. Returns empty array when valid. */
export function validateEmergencyVehicleOperator(instance: EmergencyVehicleOperator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.operatorId !== null))) {
    violations.push("[EmergencyVehicleOperator] invariant violated: self.operatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for CityTrafficAuthority. Returns empty array when valid. */
export function validateCityTrafficAuthority(instance: CityTrafficAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[CityTrafficAuthority] invariant violated: self.authorityId <> null");
  }
  return violations;
}

/** Runtime invariant check for TrafficLightVendor. Returns empty array when valid. */
export function validateTrafficLightVendor(instance: TrafficLightVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[TrafficLightVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for Approach. Returns empty array when valid. */
export function validateApproach(instance: Approach): readonly string[] {
  const violations: string[] = [];
  if (!((instance.approachId !== null))) {
    violations.push("[Approach] invariant violated: self.approachId <> null");
  }
  if (!((instance.direction !== null))) {
    violations.push("[Approach] invariant violated: self.direction <> null");
  }
  return violations;
}

/** Runtime invariant check for Phase. Returns empty array when valid. */
export function validatePhase(instance: Phase): readonly string[] {
  const violations: string[] = [];
  if (!((instance.phaseId !== null))) {
    violations.push("[Phase] invariant violated: self.phaseId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Phase] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for YellowInterval. Returns empty array when valid. */
export function validateYellowInterval(instance: YellowInterval): readonly string[] {
  const violations: string[] = [];
  if (!((instance.intervalId !== null))) {
    violations.push("[YellowInterval] invariant violated: self.intervalId <> null");
  }
  if (!((instance.minimumDurationSeconds >= 3))) {
    violations.push("[YellowInterval] invariant violated: self.minimumDurationSeconds >= 3.0");
  }
  return violations;
}

/** Runtime invariant check for Preemption. Returns empty array when valid. */
export function validatePreemption(instance: Preemption): readonly string[] {
  const violations: string[] = [];
  if (!((instance.preemptionId !== null))) {
    violations.push("[Preemption] invariant violated: self.preemptionId <> null");
  }
  if (!((instance.maxResponseTimeSeconds <= 1))) {
    violations.push("[Preemption] invariant violated: self.maxResponseTimeSeconds <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for MutualExclusionConstraints. Returns empty array when valid. */
export function validateMutualExclusionConstraints(instance: MutualExclusionConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.greenApproaches->size() = 2 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.greenApproaches->forAll(a | 
      bearer.greenApproaches->forAll(b | 
        a = b or a.direction <> b.direction)) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for YellowTimingConstraints. Returns empty array when valid. */
export function validateYellowTimingConstraints(instance: YellowTimingConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.minimumDurationSeconds >= 3.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for EmergencyTimingConstraints. Returns empty array when valid. */
export function validateEmergencyTimingConstraints(instance: EmergencyTimingConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxResponseTimeSeconds <= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for NormalPhaseCycle. Returns empty array when valid. */
export function validateNormalPhaseCycle(instance: NormalPhaseCycle): readonly string[] {
  const violations: string[] = [];
  if (!((instance.cycleId !== null))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.cycleId <> null");
  }
  if (!((instance.currentPhase !== null))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.currentPhase <> null");
  }
  if (!((instance.nextPhase !== null))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.nextPhase <> null");
  }
  if (!((instance.yellowInterval !== null))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.yellowInterval <> null");
  }
  if (!((instance.allRedDwellSeconds > 0))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.allRedDwellSeconds > 0.0");
  }
  if (!((instance.yellowInterval?.minimumDurationSeconds >= 3))) {
    violations.push("[NormalPhaseCycle] invariant violated: self.yellowInterval.minimumDurationSeconds >= 3.0");
  }
  return violations;
}

/** Runtime invariant check for EmergencyPreemptionFlow. Returns empty array when valid. */
export function validateEmergencyPreemptionFlow(instance: EmergencyPreemptionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for PedestrianRequestFlow. Returns empty array when valid. */
export function validatePedestrianRequestFlow(instance: PedestrianRequestFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[PedestrianRequestFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.buttonPressTimestamp > 0))) {
    violations.push("[PedestrianRequestFlow] invariant violated: self.buttonPressTimestamp > 0.0");
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

/** Lifecycle registry for MutualExclusionCommitment commitments. */
export class MutualExclusionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MutualExclusionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MutualExclusionCommitment — the typed wrapper guarantees that since
    // `register` only accepts MutualExclusionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MutualExclusionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MutualExclusionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MutualExclusionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MutualExclusionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MutualExclusionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MutualExclusionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for YellowIntervalCommitment commitments. */
export class YellowIntervalCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<YellowIntervalCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a YellowIntervalCommitment — the typed wrapper guarantees that since
    // `register` only accepts YellowIntervalCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: YellowIntervalCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: YellowIntervalCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: YellowIntervalCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: YellowIntervalCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<YellowIntervalCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<YellowIntervalCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for EmergencyPreemptionCommitment commitments. */
export class EmergencyPreemptionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<EmergencyPreemptionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a EmergencyPreemptionCommitment — the typed wrapper guarantees that since
    // `register` only accepts EmergencyPreemptionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: EmergencyPreemptionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: EmergencyPreemptionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: EmergencyPreemptionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: EmergencyPreemptionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<EmergencyPreemptionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<EmergencyPreemptionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for PedestrianRequestCommitment commitments. */
export class PedestrianRequestCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PedestrianRequestCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PedestrianRequestCommitment — the typed wrapper guarantees that since
    // `register` only accepts PedestrianRequestCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PedestrianRequestCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PedestrianRequestCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PedestrianRequestCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PedestrianRequestCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PedestrianRequestCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PedestrianRequestCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

