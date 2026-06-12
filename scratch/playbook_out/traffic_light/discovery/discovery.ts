// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Approach. Runtime: string. Compile-time: branded. */
export type ApproachId = string & { readonly __brand: "ApproachId" };
/** Identity type for Phase. Runtime: string. Compile-time: branded. */
export type PhaseId = string & { readonly __brand: "PhaseId" };
/** Identity type for YellowInterval. Runtime: string. Compile-time: branded. */
export type YellowIntervalId = string & { readonly __brand: "YellowIntervalId" };
/** Identity type for PreemptionEvent. Runtime: string. Compile-time: branded. */
export type PreemptionEventId = string & { readonly __brand: "PreemptionEventId" };
/** Identity type for PedestrianRequest. Runtime: string. Compile-time: branded. */
export type PedestrianRequestId = string & { readonly __brand: "PedestrianRequestId" };
/** Identity type for RoadUser. Runtime: string. Compile-time: branded. */
export type RoadUserId = string & { readonly __brand: "RoadUserId" };
/** Identity type for Pedestrian. Runtime: string. Compile-time: branded. */
export type PedestrianId = string & { readonly __brand: "PedestrianId" };
/** Identity type for EmergencyResponder. Runtime: string. Compile-time: branded. */
export type EmergencyResponderId = string & { readonly __brand: "EmergencyResponderId" };
/** Identity type for TrafficAuthority. Runtime: string. Compile-time: branded. */
export type TrafficAuthorityId = string & { readonly __brand: "TrafficAuthorityId" };
/** Identity type for TrafficLightVendor. Runtime: string. Compile-time: branded. */
export type TrafficLightVendorId = string & { readonly __brand: "TrafficLightVendorId" };
/** Identity type for MutualExclusionCommitment. Runtime: string. Compile-time: branded. */
export type MutualExclusionCommitmentId = string & { readonly __brand: "MutualExclusionCommitmentId" };
/** Identity type for YellowIntervalCommitment. Runtime: string. Compile-time: branded. */
export type YellowIntervalCommitmentId = string & { readonly __brand: "YellowIntervalCommitmentId" };
/** Identity type for EmergencyPreemptionCommitment. Runtime: string. Compile-time: branded. */
export type EmergencyPreemptionCommitmentId = string & { readonly __brand: "EmergencyPreemptionCommitmentId" };
/** Identity type for PedestrianWalkCommitment. Runtime: string. Compile-time: branded. */
export type PedestrianWalkCommitmentId = string & { readonly __brand: "PedestrianWalkCommitmentId" };
/** Identity type for SafeIntersectionControlCommitment. Runtime: string. Compile-time: branded. */
export type SafeIntersectionControlCommitmentId = string & { readonly __brand: "SafeIntersectionControlCommitmentId" };
/** Identity type for NormalPhaseCycleFlow. Runtime: string. Compile-time: branded. */
export type NormalPhaseCycleFlowId = string & { readonly __brand: "NormalPhaseCycleFlowId" };
/** Identity type for GreenToRedTransitionFlow. Runtime: string. Compile-time: branded. */
export type GreenToRedTransitionFlowId = string & { readonly __brand: "GreenToRedTransitionFlowId" };
/** Identity type for AllRedDwellFlow. Runtime: string. Compile-time: branded. */
export type AllRedDwellFlowId = string & { readonly __brand: "AllRedDwellFlowId" };
/** Identity type for EmergencyPreemptionFlow. Runtime: string. Compile-time: branded. */
export type EmergencyPreemptionFlowId = string & { readonly __brand: "EmergencyPreemptionFlowId" };
/** Identity type for PedestrianRequestFlow. Runtime: string. Compile-time: branded. */
export type PedestrianRequestFlowId = string & { readonly __brand: "PedestrianRequestFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface Approach {
  readonly approachId: ApproachId;
  readonly direction: string;
  readonly signalState: string;
}

/** @stereotype <<Kind>> */
export interface Phase {
  readonly phaseId: PhaseId;
  readonly configuredDurationSeconds: number;
  readonly greenApproaches: ReadonlySet<Approach>;
  readonly redApproaches: ReadonlySet<Approach>;
}

/** @stereotype <<Kind>> */
export interface YellowInterval {
  readonly intervalId: YellowIntervalId;
  readonly durationSeconds: number;
  readonly approach: Approach;
}

/** @stereotype <<Kind>> */
export interface PreemptionEvent {
  readonly preemptionId: PreemptionEventId;
  readonly sensorActivatedAt: number;
  readonly allRedCommandedAt: number;
  readonly responseTimeSeconds: number;
}

/** @stereotype <<Kind>> */
export interface PedestrianRequest {
  readonly requestId: PedestrianRequestId;
  readonly approach: Approach;
  readonly walkGranted: boolean;
}

/** @stereotype <<Agent>> */
export interface RoadUser {
  readonly roadUserId: RoadUserId;
  readonly userType: string;
}

/** @stereotype <<Agent>> */
export interface Pedestrian {
  readonly pedestrianId: PedestrianId;
}

/** @stereotype <<Agent>> */
export interface EmergencyResponder {
  readonly responderId: EmergencyResponderId;
  readonly vehicleType: string;
}

/** @stereotype <<Agent>> */
export interface TrafficAuthority {
  readonly authorityId: TrafficAuthorityId;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface TrafficLightVendor {
  readonly vendorId: TrafficLightVendorId;
  readonly name: string;
}

/** @stereotype <<Category>> */
export interface MutualExclusionConstraints {
}

/** @stereotype <<Category>> */
export interface YellowIntervalConstraints {
}

/** @stereotype <<Category>> */
export interface PreemptionTimingConstraints {
}

/** @stereotype <<Category>> */
export interface PedestrianSafetyConstraints {
}

/** @stereotype <<Commitment>> */
export interface MutualExclusionCommitment {
  readonly commitmentId: MutualExclusionCommitmentId;
  readonly maxSimultaneousConflictingGreens: number;
}

/** @stereotype <<Commitment>> */
export interface YellowIntervalCommitment {
  readonly commitmentId: YellowIntervalCommitmentId;
  readonly minimumYellowSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface EmergencyPreemptionCommitment {
  readonly commitmentId: EmergencyPreemptionCommitmentId;
  readonly maxPreemptionResponseSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface PedestrianWalkCommitment {
  readonly commitmentId: PedestrianWalkCommitmentId;
  readonly walkRequestHonoured: boolean;
}

/** @stereotype <<Commitment>> */
export interface SafeIntersectionControlCommitment {
  readonly commitmentId: SafeIntersectionControlCommitmentId;
  readonly safetyGuaranteed: boolean;
}

/** @stereotype <<Happening>> */
export interface NormalPhaseCycleFlow {
  readonly flowId: NormalPhaseCycleFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface GreenToRedTransitionFlow {
  readonly flowId: GreenToRedTransitionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly yellowDurationSeconds: number;
}

/** @stereotype <<Happening>> */
export interface AllRedDwellFlow {
  readonly flowId: AllRedDwellFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface EmergencyPreemptionFlow {
  readonly flowId: EmergencyPreemptionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly sensorActivatedAt: number;
  readonly allRedCommandedAt: number;
}

/** @stereotype <<Happening>> */
export interface PedestrianRequestFlow {
  readonly flowId: PedestrianRequestFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeApproach(data: {
  approachId: string;
  direction: string;
  signalState: string;
}): Approach {
  return {
    approachId: data.approachId as ApproachId,
    direction: data.direction,
    signalState: data.signalState,
  };
}

export function makePhase(data: {
  phaseId: string;
  configuredDurationSeconds: number;
  greenApproaches: ReadonlySet<Approach>;
  redApproaches: ReadonlySet<Approach>;
}): Phase {
  return {
    phaseId: data.phaseId as PhaseId,
    configuredDurationSeconds: data.configuredDurationSeconds,
    greenApproaches: data.greenApproaches,
    redApproaches: data.redApproaches,
  };
}

export function makeYellowInterval(data: {
  intervalId: string;
  durationSeconds: number;
  approach: Approach;
}): YellowInterval {
  return {
    intervalId: data.intervalId as YellowIntervalId,
    durationSeconds: data.durationSeconds,
    approach: data.approach,
  };
}

export function makePreemptionEvent(data: {
  preemptionId: string;
  sensorActivatedAt: number;
  allRedCommandedAt: number;
  responseTimeSeconds: number;
}): PreemptionEvent {
  return {
    preemptionId: data.preemptionId as PreemptionEventId,
    sensorActivatedAt: data.sensorActivatedAt,
    allRedCommandedAt: data.allRedCommandedAt,
    responseTimeSeconds: data.responseTimeSeconds,
  };
}

export function makePedestrianRequest(data: {
  requestId: string;
  approach: Approach;
  walkGranted: boolean;
}): PedestrianRequest {
  return {
    requestId: data.requestId as PedestrianRequestId,
    approach: data.approach,
    walkGranted: data.walkGranted,
  };
}

export function makeRoadUser(data: {
  roadUserId: string;
  userType: string;
}): RoadUser {
  return {
    roadUserId: data.roadUserId as RoadUserId,
    userType: data.userType,
  };
}

export function makePedestrian(data: {
  pedestrianId: string;
}): Pedestrian {
  return {
    pedestrianId: data.pedestrianId as PedestrianId,
  };
}

export function makeEmergencyResponder(data: {
  responderId: string;
  vehicleType: string;
}): EmergencyResponder {
  return {
    responderId: data.responderId as EmergencyResponderId,
    vehicleType: data.vehicleType,
  };
}

export function makeTrafficAuthority(data: {
  authorityId: string;
  jurisdiction: string;
}): TrafficAuthority {
  return {
    authorityId: data.authorityId as TrafficAuthorityId,
    jurisdiction: data.jurisdiction,
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

export function makeMutualExclusionCommitment(data: {
  commitmentId: string;
  maxSimultaneousConflictingGreens: number;
}): MutualExclusionCommitment {
  return {
    commitmentId: data.commitmentId as MutualExclusionCommitmentId,
    maxSimultaneousConflictingGreens: data.maxSimultaneousConflictingGreens,
  };
}

export function makeYellowIntervalCommitment(data: {
  commitmentId: string;
  minimumYellowSeconds: number;
}): YellowIntervalCommitment {
  return {
    commitmentId: data.commitmentId as YellowIntervalCommitmentId,
    minimumYellowSeconds: data.minimumYellowSeconds,
  };
}

export function makeEmergencyPreemptionCommitment(data: {
  commitmentId: string;
  maxPreemptionResponseSeconds: number;
}): EmergencyPreemptionCommitment {
  return {
    commitmentId: data.commitmentId as EmergencyPreemptionCommitmentId,
    maxPreemptionResponseSeconds: data.maxPreemptionResponseSeconds,
  };
}

export function makePedestrianWalkCommitment(data: {
  commitmentId: string;
  walkRequestHonoured: boolean;
}): PedestrianWalkCommitment {
  return {
    commitmentId: data.commitmentId as PedestrianWalkCommitmentId,
    walkRequestHonoured: data.walkRequestHonoured,
  };
}

export function makeSafeIntersectionControlCommitment(data: {
  commitmentId: string;
  safetyGuaranteed: boolean;
}): SafeIntersectionControlCommitment {
  return {
    commitmentId: data.commitmentId as SafeIntersectionControlCommitmentId,
    safetyGuaranteed: data.safetyGuaranteed,
  };
}

export function makeNormalPhaseCycleFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): NormalPhaseCycleFlow {
  return {
    flowId: data.flowId as NormalPhaseCycleFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeGreenToRedTransitionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  yellowDurationSeconds: number;
}): GreenToRedTransitionFlow {
  return {
    flowId: data.flowId as GreenToRedTransitionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    yellowDurationSeconds: data.yellowDurationSeconds,
  };
}

export function makeAllRedDwellFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): AllRedDwellFlow {
  return {
    flowId: data.flowId as AllRedDwellFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeEmergencyPreemptionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  sensorActivatedAt: number;
  allRedCommandedAt: number;
}): EmergencyPreemptionFlow {
  return {
    flowId: data.flowId as EmergencyPreemptionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    sensorActivatedAt: data.sensorActivatedAt,
    allRedCommandedAt: data.allRedCommandedAt,
  };
}

export function makePedestrianRequestFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): PedestrianRequestFlow {
  return {
    flowId: data.flowId as PedestrianRequestFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Approach. Returns empty array when valid. */
export function validateApproach(instance: Approach): readonly string[] {
  const violations: string[] = [];
  if (!((instance.approachId !== null))) {
    violations.push("[Approach] invariant violated: self.approachId <> null");
  }
  if (!((instance.direction !== null))) {
    violations.push("[Approach] invariant violated: self.direction <> null");
  }
  if (!((instance.signalState !== null))) {
    violations.push("[Approach] invariant violated: self.signalState <> null");
  }
  return violations;
}

/** Runtime invariant check for Phase. Returns empty array when valid. */
export function validatePhase(instance: Phase): readonly string[] {
  const violations: string[] = [];
  if (!((instance.phaseId !== null))) {
    violations.push("[Phase] invariant violated: self.phaseId <> null");
  }
  if (!((instance.configuredDurationSeconds > 0))) {
    violations.push("[Phase] invariant violated: self.configuredDurationSeconds > 0.0");
  }
  return violations;
}

/** Runtime invariant check for YellowInterval. Returns empty array when valid. */
export function validateYellowInterval(instance: YellowInterval): readonly string[] {
  const violations: string[] = [];
  if (!((instance.intervalId !== null))) {
    violations.push("[YellowInterval] invariant violated: self.intervalId <> null");
  }
  if (!((instance.durationSeconds >= 3))) {
    violations.push("[YellowInterval] invariant violated: self.durationSeconds >= 3.0");
  }
  if (!((instance.approach !== null))) {
    violations.push("[YellowInterval] invariant violated: self.approach <> null");
  }
  return violations;
}

/** Runtime invariant check for PreemptionEvent. Returns empty array when valid. */
export function validatePreemptionEvent(instance: PreemptionEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.preemptionId !== null))) {
    violations.push("[PreemptionEvent] invariant violated: self.preemptionId <> null");
  }
  if (!((instance.responseTimeSeconds >= 0))) {
    violations.push("[PreemptionEvent] invariant violated: self.responseTimeSeconds >= 0.0");
  }
  if (!((instance.responseTimeSeconds <= 1))) {
    violations.push("[PreemptionEvent] invariant violated: self.responseTimeSeconds <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for PedestrianRequest. Returns empty array when valid. */
export function validatePedestrianRequest(instance: PedestrianRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[PedestrianRequest] invariant violated: self.requestId <> null");
  }
  if (!((instance.approach !== null))) {
    violations.push("[PedestrianRequest] invariant violated: self.approach <> null");
  }
  return violations;
}

/** Runtime invariant check for RoadUser. Returns empty array when valid. */
export function validateRoadUser(instance: RoadUser): readonly string[] {
  const violations: string[] = [];
  if (!((instance.roadUserId !== null))) {
    violations.push("[RoadUser] invariant violated: self.roadUserId <> null");
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

/** Runtime invariant check for EmergencyResponder. Returns empty array when valid. */
export function validateEmergencyResponder(instance: EmergencyResponder): readonly string[] {
  const violations: string[] = [];
  if (!((instance.responderId !== null))) {
    violations.push("[EmergencyResponder] invariant violated: self.responderId <> null");
  }
  return violations;
}

/** Runtime invariant check for TrafficAuthority. Returns empty array when valid. */
export function validateTrafficAuthority(instance: TrafficAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[TrafficAuthority] invariant violated: self.authorityId <> null");
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

/** Runtime invariant check for MutualExclusionConstraints. Returns empty array when valid. */
export function validateMutualExclusionConstraints(instance: MutualExclusionConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MutualExclusionConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for YellowIntervalConstraints. Returns empty array when valid. */
export function validateYellowIntervalConstraints(instance: YellowIntervalConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[YellowIntervalConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PreemptionTimingConstraints. Returns empty array when valid. */
export function validatePreemptionTimingConstraints(instance: PreemptionTimingConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PreemptionTimingConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PedestrianSafetyConstraints. Returns empty array when valid. */
export function validatePedestrianSafetyConstraints(instance: PedestrianSafetyConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PedestrianSafetyConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for NormalPhaseCycleFlow. Returns empty array when valid. */
export function validateNormalPhaseCycleFlow(instance: NormalPhaseCycleFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[NormalPhaseCycleFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for GreenToRedTransitionFlow. Returns empty array when valid. */
export function validateGreenToRedTransitionFlow(instance: GreenToRedTransitionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[GreenToRedTransitionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.yellowDurationSeconds >= 3))) {
    violations.push("[GreenToRedTransitionFlow] invariant violated: self.yellowDurationSeconds >= 3.0");
  }
  return violations;
}

/** Runtime invariant check for AllRedDwellFlow. Returns empty array when valid. */
export function validateAllRedDwellFlow(instance: AllRedDwellFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AllRedDwellFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for EmergencyPreemptionFlow. Returns empty array when valid. */
export function validateEmergencyPreemptionFlow(instance: EmergencyPreemptionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.allRedCommandedAt >= instance.sensorActivatedAt))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: self.allRedCommandedAt >= self.sensorActivatedAt");
  }
  if (!(((instance.allRedCommandedAt - instance.sensorActivatedAt) <= 1))) {
    violations.push("[EmergencyPreemptionFlow] invariant violated: (self.allRedCommandedAt - self.sensorActivatedAt) <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for PedestrianRequestFlow. Returns empty array when valid. */
export function validatePedestrianRequestFlow(instance: PedestrianRequestFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[PedestrianRequestFlow] invariant violated: self.flowId <> null");
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

/** Lifecycle registry for PedestrianWalkCommitment commitments. */
export class PedestrianWalkCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PedestrianWalkCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PedestrianWalkCommitment — the typed wrapper guarantees that since
    // `register` only accepts PedestrianWalkCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PedestrianWalkCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PedestrianWalkCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PedestrianWalkCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PedestrianWalkCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PedestrianWalkCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PedestrianWalkCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for SafeIntersectionControlCommitment commitments. */
export class SafeIntersectionControlCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SafeIntersectionControlCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SafeIntersectionControlCommitment — the typed wrapper guarantees that since
    // `register` only accepts SafeIntersectionControlCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SafeIntersectionControlCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SafeIntersectionControlCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SafeIntersectionControlCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SafeIntersectionControlCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SafeIntersectionControlCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SafeIntersectionControlCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

