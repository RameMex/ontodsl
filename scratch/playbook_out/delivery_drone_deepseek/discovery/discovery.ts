// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Customer. Runtime: string. Compile-time: branded. */
export type CustomerId = string & { readonly __brand: "CustomerId" };
/** Identity type for Operator. Runtime: string. Compile-time: branded. */
export type OperatorId = string & { readonly __brand: "OperatorId" };
/** Identity type for RegulatoryAuthority. Runtime: string. Compile-time: branded. */
export type RegulatoryAuthorityId = string & { readonly __brand: "RegulatoryAuthorityId" };
/** Identity type for DroneVendor. Runtime: string. Compile-time: branded. */
export type DroneVendorId = string & { readonly __brand: "DroneVendorId" };
/** Identity type for BatterySoC. Runtime: string. Compile-time: branded. */
export type BatterySoCId = string & { readonly __brand: "BatterySoCId" };
/** Identity type for RoundTripReserve. Runtime: string. Compile-time: branded. */
export type RoundTripReserveId = string & { readonly __brand: "RoundTripReserveId" };
/** Identity type for Geofence. Runtime: string. Compile-time: branded. */
export type GeofenceId = string & { readonly __brand: "GeofenceId" };
/** Identity type for PredicateHost. Runtime: string. Compile-time: branded. */
export type PredicateHostId = string & { readonly __brand: "PredicateHostId" };
/** Identity type for PreTakeoffBatteryReserve. Runtime: string. Compile-time: branded. */
export type PreTakeoffBatteryReserveId = string & { readonly __brand: "PreTakeoffBatteryReserveId" };
/** Identity type for GeofenceContainment. Runtime: string. Compile-time: branded. */
export type GeofenceContainmentId = string & { readonly __brand: "GeofenceContainmentId" };
/** Identity type for MidMissionBatteryRTH. Runtime: string. Compile-time: branded. */
export type MidMissionBatteryRTHId = string & { readonly __brand: "MidMissionBatteryRTHId" };
/** Identity type for AuthoritativeRTH. Runtime: string. Compile-time: branded. */
export type AuthoritativeRTHId = string & { readonly __brand: "AuthoritativeRTHId" };
/** Identity type for TakeoffSequence. Runtime: string. Compile-time: branded. */
export type TakeoffSequenceId = string & { readonly __brand: "TakeoffSequenceId" };
/** Identity type for GeofenceViolationResponse. Runtime: string. Compile-time: branded. */
export type GeofenceViolationResponseId = string & { readonly __brand: "GeofenceViolationResponseId" };
/** Identity type for BatteryDropResponse. Runtime: string. Compile-time: branded. */
export type BatteryDropResponseId = string & { readonly __brand: "BatteryDropResponseId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Customer {
  readonly customerId: CustomerId;
  readonly name: string;
  readonly deliveryAddress: string;
}

/** @stereotype <<Agent>> */
export interface Operator {
  readonly operatorId: OperatorId;
  readonly name: string;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface RegulatoryAuthority {
  readonly authorityId: RegulatoryAuthorityId;
  readonly name: string;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface DroneVendor {
  readonly vendorId: DroneVendorId;
  readonly vendorName: string;
}

/** @stereotype <<Kind>> */
export interface BatterySoC {
  readonly socId: BatterySoCId;
  readonly value: number;
}

/** @stereotype <<Kind>> */
export interface RoundTripReserve {
  readonly reserveId: RoundTripReserveId;
  readonly minSoC: number;
}

/** @stereotype <<Kind>> */
export interface Geofence {
  readonly geofenceId: GeofenceId;
  readonly polygonWkt: string;
  readonly maxLatitude: number;
  readonly minLatitude: number;
  readonly maxLongitude: number;
  readonly minLongitude: number;
}

/** @stereotype <<Kind>> */
export interface PredicateHost {
  readonly hostId: PredicateHostId;
  readonly safeReserveRatio: number;
  readonly geofenceMaxResponseSec: number;
  readonly rthBatteryThreshold: number;
  readonly rthIsCancellable: boolean;
}

/** @stereotype <<Commitment>> */
export interface PreTakeoffBatteryReserve {
  readonly commitmentId: PreTakeoffBatteryReserveId;
  readonly safeReserveRatio: number;
}

/** @stereotype <<Commitment>> */
export interface GeofenceContainment {
  readonly commitmentId: GeofenceContainmentId;
  readonly geofenceMaxResponseSec: number;
}

/** @stereotype <<Commitment>> */
export interface MidMissionBatteryRTH {
  readonly commitmentId: MidMissionBatteryRTHId;
  readonly rthBatteryThreshold: number;
}

/** @stereotype <<Commitment>> */
export interface AuthoritativeRTH {
  readonly commitmentId: AuthoritativeRTHId;
  readonly rthIsCancellable: boolean;
}

/** @stereotype <<Category>> */
export interface BatterySafetyConstraints {
}

/** @stereotype <<Happening>> */
export interface TakeoffSequence {
  readonly flowId: TakeoffSequenceId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface GeofenceViolationResponse {
  readonly flowId: GeofenceViolationResponseId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface BatteryDropResponse {
  readonly flowId: BatteryDropResponseId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeCustomer(data: {
  customerId: string;
  name: string;
  deliveryAddress: string;
}): Customer {
  return {
    customerId: data.customerId as CustomerId,
    name: data.name,
    deliveryAddress: data.deliveryAddress,
  };
}

export function makeOperator(data: {
  operatorId: string;
  name: string;
  certification: string;
}): Operator {
  return {
    operatorId: data.operatorId as OperatorId,
    name: data.name,
    certification: data.certification,
  };
}

export function makeRegulatoryAuthority(data: {
  authorityId: string;
  name: string;
  jurisdiction: string;
}): RegulatoryAuthority {
  return {
    authorityId: data.authorityId as RegulatoryAuthorityId,
    name: data.name,
    jurisdiction: data.jurisdiction,
  };
}

export function makeDroneVendor(data: {
  vendorId: string;
  vendorName: string;
}): DroneVendor {
  return {
    vendorId: data.vendorId as DroneVendorId,
    vendorName: data.vendorName,
  };
}

export function makeBatterySoC(data: {
  socId: string;
  value: number;
}): BatterySoC {
  return {
    socId: data.socId as BatterySoCId,
    value: data.value,
  };
}

export function makeRoundTripReserve(data: {
  reserveId: string;
  minSoC: number;
}): RoundTripReserve {
  return {
    reserveId: data.reserveId as RoundTripReserveId,
    minSoC: data.minSoC,
  };
}

export function makeGeofence(data: {
  geofenceId: string;
  polygonWkt: string;
  maxLatitude: number;
  minLatitude: number;
  maxLongitude: number;
  minLongitude: number;
}): Geofence {
  return {
    geofenceId: data.geofenceId as GeofenceId,
    polygonWkt: data.polygonWkt,
    maxLatitude: data.maxLatitude,
    minLatitude: data.minLatitude,
    maxLongitude: data.maxLongitude,
    minLongitude: data.minLongitude,
  };
}

export function makePredicateHost(data: {
  hostId: string;
  safeReserveRatio: number;
  geofenceMaxResponseSec: number;
  rthBatteryThreshold: number;
  rthIsCancellable: boolean;
}): PredicateHost {
  return {
    hostId: data.hostId as PredicateHostId,
    safeReserveRatio: data.safeReserveRatio,
    geofenceMaxResponseSec: data.geofenceMaxResponseSec,
    rthBatteryThreshold: data.rthBatteryThreshold,
    rthIsCancellable: data.rthIsCancellable,
  };
}

export function makePreTakeoffBatteryReserve(data: {
  commitmentId: string;
  safeReserveRatio: number;
}): PreTakeoffBatteryReserve {
  return {
    commitmentId: data.commitmentId as PreTakeoffBatteryReserveId,
    safeReserveRatio: data.safeReserveRatio,
  };
}

export function makeGeofenceContainment(data: {
  commitmentId: string;
  geofenceMaxResponseSec: number;
}): GeofenceContainment {
  return {
    commitmentId: data.commitmentId as GeofenceContainmentId,
    geofenceMaxResponseSec: data.geofenceMaxResponseSec,
  };
}

export function makeMidMissionBatteryRTH(data: {
  commitmentId: string;
  rthBatteryThreshold: number;
}): MidMissionBatteryRTH {
  return {
    commitmentId: data.commitmentId as MidMissionBatteryRTHId,
    rthBatteryThreshold: data.rthBatteryThreshold,
  };
}

export function makeAuthoritativeRTH(data: {
  commitmentId: string;
  rthIsCancellable: boolean;
}): AuthoritativeRTH {
  return {
    commitmentId: data.commitmentId as AuthoritativeRTHId,
    rthIsCancellable: data.rthIsCancellable,
  };
}

export function makeTakeoffSequence(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): TakeoffSequence {
  return {
    flowId: data.flowId as TakeoffSequenceId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeGeofenceViolationResponse(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): GeofenceViolationResponse {
  return {
    flowId: data.flowId as GeofenceViolationResponseId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeBatteryDropResponse(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): BatteryDropResponse {
  return {
    flowId: data.flowId as BatteryDropResponseId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Customer. Returns empty array when valid. */
export function validateCustomer(instance: Customer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.customerId !== null))) {
    violations.push("[Customer] invariant violated: self.customerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Customer] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Operator. Returns empty array when valid. */
export function validateOperator(instance: Operator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.operatorId !== null))) {
    violations.push("[Operator] invariant violated: self.operatorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Operator] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for RegulatoryAuthority. Returns empty array when valid. */
export function validateRegulatoryAuthority(instance: RegulatoryAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.authorityId !== null))) {
    violations.push("[RegulatoryAuthority] invariant violated: self.authorityId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[RegulatoryAuthority] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for DroneVendor. Returns empty array when valid. */
export function validateDroneVendor(instance: DroneVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[DroneVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.vendorName !== null))) {
    violations.push("[DroneVendor] invariant violated: self.vendorName <> null");
  }
  return violations;
}

/** Runtime invariant check for BatterySoC. Returns empty array when valid. */
export function validateBatterySoC(instance: BatterySoC): readonly string[] {
  const violations: string[] = [];
  if (!((instance.socId !== null))) {
    violations.push("[BatterySoC] invariant violated: self.socId <> null");
  }
  if (!((instance.value >= 0))) {
    violations.push("[BatterySoC] invariant violated: self.value >= 0.0");
  }
  if (!((instance.value <= 1))) {
    violations.push("[BatterySoC] invariant violated: self.value <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for RoundTripReserve. Returns empty array when valid. */
export function validateRoundTripReserve(instance: RoundTripReserve): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reserveId !== null))) {
    violations.push("[RoundTripReserve] invariant violated: self.reserveId <> null");
  }
  if (!((instance.minSoC >= 0))) {
    violations.push("[RoundTripReserve] invariant violated: self.minSoC >= 0.0");
  }
  if (!((instance.minSoC <= 1))) {
    violations.push("[RoundTripReserve] invariant violated: self.minSoC <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for Geofence. Returns empty array when valid. */
export function validateGeofence(instance: Geofence): readonly string[] {
  const violations: string[] = [];
  if (!((instance.geofenceId !== null))) {
    violations.push("[Geofence] invariant violated: self.geofenceId <> null");
  }
  if (!((instance.polygonWkt !== null))) {
    violations.push("[Geofence] invariant violated: self.polygonWkt <> null");
  }
  return violations;
}

/** Runtime invariant check for PredicateHost. Returns empty array when valid. */
export function validatePredicateHost(instance: PredicateHost): readonly string[] {
  const violations: string[] = [];
  if (!((instance.hostId !== null))) {
    violations.push("[PredicateHost] invariant violated: self.hostId <> null");
  }
  return violations;
}

/** Runtime invariant check for BatterySafetyConstraints. Returns empty array when valid. */
export function validateBatterySafetyConstraints(instance: BatterySafetyConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeReserveRatio >= 0.20 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.geofenceMaxResponseSec <= 2.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.rthBatteryThreshold >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): not bearer.rthIsCancellable — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for TakeoffSequence. Returns empty array when valid. */
export function validateTakeoffSequence(instance: TakeoffSequence): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[TakeoffSequence] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for GeofenceViolationResponse. Returns empty array when valid. */
export function validateGeofenceViolationResponse(instance: GeofenceViolationResponse): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[GeofenceViolationResponse] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for BatteryDropResponse. Returns empty array when valid. */
export function validateBatteryDropResponse(instance: BatteryDropResponse): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[BatteryDropResponse] invariant violated: self.flowId <> null");
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

/** Lifecycle registry for PreTakeoffBatteryReserve commitments. */
export class PreTakeoffBatteryReserveRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PreTakeoffBatteryReserve>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PreTakeoffBatteryReserve — the typed wrapper guarantees that since
    // `register` only accepts PreTakeoffBatteryReserve instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PreTakeoffBatteryReserve): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PreTakeoffBatteryReserveId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PreTakeoffBatteryReserveId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PreTakeoffBatteryReserveId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PreTakeoffBatteryReserve>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PreTakeoffBatteryReserve>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for GeofenceContainment commitments. */
export class GeofenceContainmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<GeofenceContainment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a GeofenceContainment — the typed wrapper guarantees that since
    // `register` only accepts GeofenceContainment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: GeofenceContainment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: GeofenceContainmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: GeofenceContainmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: GeofenceContainmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<GeofenceContainment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<GeofenceContainment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for MidMissionBatteryRTH commitments. */
export class MidMissionBatteryRTHRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MidMissionBatteryRTH>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MidMissionBatteryRTH — the typed wrapper guarantees that since
    // `register` only accepts MidMissionBatteryRTH instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MidMissionBatteryRTH): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MidMissionBatteryRTHId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MidMissionBatteryRTHId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MidMissionBatteryRTHId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MidMissionBatteryRTH>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MidMissionBatteryRTH>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AuthoritativeRTH commitments. */
export class AuthoritativeRTHRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AuthoritativeRTH>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AuthoritativeRTH — the typed wrapper guarantees that since
    // `register` only accepts AuthoritativeRTH instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AuthoritativeRTH): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AuthoritativeRTHId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AuthoritativeRTHId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AuthoritativeRTHId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AuthoritativeRTH>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AuthoritativeRTH>[];
  }

  size(): number {
    return this.inner.size();
  }
}

