// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Passenger. Runtime: string. Compile-time: branded. */
export type PassengerId = string & { readonly __brand: "PassengerId" };
/** Identity type for Driver. Runtime: string. Compile-time: branded. */
export type DriverId = string & { readonly __brand: "DriverId" };
/** Identity type for RideVendor. Runtime: string. Compile-time: branded. */
export type RideVendorId = string & { readonly __brand: "RideVendorId" };
/** Identity type for RideRequest. Runtime: string. Compile-time: branded. */
export type RideRequestId = string & { readonly __brand: "RideRequestId" };
/** Identity type for Assignment. Runtime: string. Compile-time: branded. */
export type AssignmentId = string & { readonly __brand: "AssignmentId" };
/** Identity type for ExactlyOneDriverPerRide. Runtime: string. Compile-time: branded. */
export type ExactlyOneDriverPerRideId = string & { readonly __brand: "ExactlyOneDriverPerRideId" };
/** Identity type for ValidStateTransitions. Runtime: string. Compile-time: branded. */
export type ValidStateTransitionsId = string & { readonly __brand: "ValidStateTransitionsId" };
/** Identity type for BoundedAssignmentLatency. Runtime: string. Compile-time: branded. */
export type BoundedAssignmentLatencyId = string & { readonly __brand: "BoundedAssignmentLatencyId" };
/** Identity type for DriverMutualExclusion. Runtime: string. Compile-time: branded. */
export type DriverMutualExclusionId = string & { readonly __brand: "DriverMutualExclusionId" };
/** Identity type for RideAssignmentFlow. Runtime: string. Compile-time: branded. */
export type RideAssignmentFlowId = string & { readonly __brand: "RideAssignmentFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Passenger {
  readonly passengerId: PassengerId;
}

/** @stereotype <<Agent>> */
export interface Driver {
  readonly driverId: DriverId;
  readonly currentLatitude: number;
  readonly currentLongitude: number;
  readonly state: string;
}

/** @stereotype <<Agent>> */
export interface RideVendor {
  readonly vendorId: RideVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface RideRequest {
  readonly requestId: RideRequestId;
  readonly pickupLatitude: number;
  readonly pickupLongitude: number;
  readonly destinationLatitude: number;
  readonly destinationLongitude: number;
  readonly preferences: string;
}

/** @stereotype <<Kind>> */
export interface Assignment {
  readonly assignmentId: AssignmentId;
  readonly driverId: string;
  readonly requestId: string;
  readonly timestamp: number;
}

/** @stereotype <<Commitment>> */
export interface ExactlyOneDriverPerRide {
  readonly commitmentId: ExactlyOneDriverPerRideId;
  readonly assignmentsPerRide: number;
}

/** @stereotype <<Commitment>> */
export interface ValidStateTransitions {
  readonly commitmentId: ValidStateTransitionsId;
  readonly driverStateTransitionValid: boolean;
}

/** @stereotype <<Commitment>> */
export interface BoundedAssignmentLatency {
  readonly commitmentId: BoundedAssignmentLatencyId;
  readonly maxAssignmentLatencySec: number;
}

/** @stereotype <<Commitment>> */
export interface DriverMutualExclusion {
  readonly commitmentId: DriverMutualExclusionId;
  readonly driverMutualExclusionHolds: boolean;
}

/** @stereotype <<Category>> */
export interface StateMachineConstraint {
}

/** @stereotype <<Category>> */
export interface MutualExclusionConstraint {
}

/** @stereotype <<Happening>> */
export interface RideAssignmentFlow {
  readonly flowId: RideAssignmentFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makePassenger(data: {
  passengerId: string;
}): Passenger {
  return {
    passengerId: data.passengerId as PassengerId,
  };
}

export function makeDriver(data: {
  driverId: string;
  currentLatitude: number;
  currentLongitude: number;
  state: string;
}): Driver {
  return {
    driverId: data.driverId as DriverId,
    currentLatitude: data.currentLatitude,
    currentLongitude: data.currentLongitude,
    state: data.state,
  };
}

export function makeRideVendor(data: {
  vendorId: string;
  name: string;
}): RideVendor {
  return {
    vendorId: data.vendorId as RideVendorId,
    name: data.name,
  };
}

export function makeRideRequest(data: {
  requestId: string;
  pickupLatitude: number;
  pickupLongitude: number;
  destinationLatitude: number;
  destinationLongitude: number;
  preferences: string;
}): RideRequest {
  return {
    requestId: data.requestId as RideRequestId,
    pickupLatitude: data.pickupLatitude,
    pickupLongitude: data.pickupLongitude,
    destinationLatitude: data.destinationLatitude,
    destinationLongitude: data.destinationLongitude,
    preferences: data.preferences,
  };
}

export function makeAssignment(data: {
  assignmentId: string;
  driverId: string;
  requestId: string;
  timestamp: number;
}): Assignment {
  return {
    assignmentId: data.assignmentId as AssignmentId,
    driverId: data.driverId,
    requestId: data.requestId,
    timestamp: data.timestamp,
  };
}

export function makeExactlyOneDriverPerRide(data: {
  commitmentId: string;
  assignmentsPerRide: number;
}): ExactlyOneDriverPerRide {
  return {
    commitmentId: data.commitmentId as ExactlyOneDriverPerRideId,
    assignmentsPerRide: data.assignmentsPerRide,
  };
}

export function makeValidStateTransitions(data: {
  commitmentId: string;
  driverStateTransitionValid: boolean;
}): ValidStateTransitions {
  return {
    commitmentId: data.commitmentId as ValidStateTransitionsId,
    driverStateTransitionValid: data.driverStateTransitionValid,
  };
}

export function makeBoundedAssignmentLatency(data: {
  commitmentId: string;
  maxAssignmentLatencySec: number;
}): BoundedAssignmentLatency {
  return {
    commitmentId: data.commitmentId as BoundedAssignmentLatencyId,
    maxAssignmentLatencySec: data.maxAssignmentLatencySec,
  };
}

export function makeDriverMutualExclusion(data: {
  commitmentId: string;
  driverMutualExclusionHolds: boolean;
}): DriverMutualExclusion {
  return {
    commitmentId: data.commitmentId as DriverMutualExclusionId,
    driverMutualExclusionHolds: data.driverMutualExclusionHolds,
  };
}

export function makeRideAssignmentFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): RideAssignmentFlow {
  return {
    flowId: data.flowId as RideAssignmentFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Passenger. Returns empty array when valid. */
export function validatePassenger(instance: Passenger): readonly string[] {
  const violations: string[] = [];
  if (!((instance.passengerId !== null))) {
    violations.push("[Passenger] invariant violated: self.passengerId <> null");
  }
  return violations;
}

/** Runtime invariant check for Driver. Returns empty array when valid. */
export function validateDriver(instance: Driver): readonly string[] {
  const violations: string[] = [];
  if (!((instance.driverId !== null))) {
    violations.push("[Driver] invariant violated: self.driverId <> null");
  }
  if (!(((((instance.state === "idle") || (instance.state === "assigned")) || (instance.state === "en_route")) || (instance.state === "completed")))) {
    violations.push("[Driver] invariant violated: self.state = 'idle' or self.state = 'assigned' or self.state = 'en_route' or self.state = 'completed'");
  }
  return violations;
}

/** Runtime invariant check for RideVendor. Returns empty array when valid. */
export function validateRideVendor(instance: RideVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[RideVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for RideRequest. Returns empty array when valid. */
export function validateRideRequest(instance: RideRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[RideRequest] invariant violated: self.requestId <> null");
  }
  return violations;
}

/** Runtime invariant check for Assignment. Returns empty array when valid. */
export function validateAssignment(instance: Assignment): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assignmentId !== null))) {
    violations.push("[Assignment] invariant violated: self.assignmentId <> null");
  }
  return violations;
}

/** Runtime invariant check for StateMachineConstraint. Returns empty array when valid. */
export function validateStateMachineConstraint(instance: StateMachineConstraint): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[StateMachineConstraint] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MutualExclusionConstraint. Returns empty array when valid. */
export function validateMutualExclusionConstraint(instance: MutualExclusionConstraint): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MutualExclusionConstraint] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for RideAssignmentFlow. Returns empty array when valid. */
export function validateRideAssignmentFlow(instance: RideAssignmentFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[RideAssignmentFlow] invariant violated: self.flowId <> null");
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

/** Lifecycle registry for ExactlyOneDriverPerRide commitments. */
export class ExactlyOneDriverPerRideRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ExactlyOneDriverPerRide>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ExactlyOneDriverPerRide — the typed wrapper guarantees that since
    // `register` only accepts ExactlyOneDriverPerRide instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ExactlyOneDriverPerRide): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ExactlyOneDriverPerRideId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ExactlyOneDriverPerRideId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ExactlyOneDriverPerRideId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ExactlyOneDriverPerRide>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ExactlyOneDriverPerRide>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ValidStateTransitions commitments. */
export class ValidStateTransitionsRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ValidStateTransitions>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ValidStateTransitions — the typed wrapper guarantees that since
    // `register` only accepts ValidStateTransitions instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ValidStateTransitions): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ValidStateTransitionsId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ValidStateTransitionsId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ValidStateTransitionsId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ValidStateTransitions>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ValidStateTransitions>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for BoundedAssignmentLatency commitments. */
export class BoundedAssignmentLatencyRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<BoundedAssignmentLatency>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a BoundedAssignmentLatency — the typed wrapper guarantees that since
    // `register` only accepts BoundedAssignmentLatency instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: BoundedAssignmentLatency): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: BoundedAssignmentLatencyId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: BoundedAssignmentLatencyId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: BoundedAssignmentLatencyId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<BoundedAssignmentLatency>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<BoundedAssignmentLatency>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for DriverMutualExclusion commitments. */
export class DriverMutualExclusionRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<DriverMutualExclusion>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a DriverMutualExclusion — the typed wrapper guarantees that since
    // `register` only accepts DriverMutualExclusion instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: DriverMutualExclusion): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: DriverMutualExclusionId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: DriverMutualExclusionId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: DriverMutualExclusionId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<DriverMutualExclusion>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<DriverMutualExclusion>[];
  }

  size(): number {
    return this.inner.size();
  }
}

