// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Customer. Runtime: string. Compile-time: branded. */
export type CustomerId = string & { readonly __brand: "CustomerId" };
/** Identity type for UtilityProvider. Runtime: string. Compile-time: branded. */
export type UtilityProviderId = string & { readonly __brand: "UtilityProviderId" };
/** Identity type for FieldTechnician. Runtime: string. Compile-time: branded. */
export type FieldTechnicianId = string & { readonly __brand: "FieldTechnicianId" };
/** Identity type for RegulatoryAuthority. Runtime: string. Compile-time: branded. */
export type RegulatoryAuthorityId = string & { readonly __brand: "RegulatoryAuthorityId" };
/** Identity type for MeterVendor. Runtime: string. Compile-time: branded. */
export type MeterVendorId = string & { readonly __brand: "MeterVendorId" };
/** Identity type for MonotonicConsumptionCommitment. Runtime: string. Compile-time: branded. */
export type MonotonicConsumptionCommitmentId = string & { readonly __brand: "MonotonicConsumptionCommitmentId" };
/** Identity type for TamperFreezeCommitment. Runtime: string. Compile-time: branded. */
export type TamperFreezeCommitmentId = string & { readonly __brand: "TamperFreezeCommitmentId" };
/** Identity type for TamperClearanceCommitment. Runtime: string. Compile-time: branded. */
export type TamperClearanceCommitmentId = string & { readonly __brand: "TamperClearanceCommitmentId" };
/** Identity type for ReadingImmutabilityCommitment. Runtime: string. Compile-time: branded. */
export type ReadingImmutabilityCommitmentId = string & { readonly __brand: "ReadingImmutabilityCommitmentId" };
/** Identity type for MeterReading. Runtime: string. Compile-time: branded. */
export type MeterReadingId = string & { readonly __brand: "MeterReadingId" };
/** Identity type for ConsumptionDelta. Runtime: string. Compile-time: branded. */
export type ConsumptionDeltaId = string & { readonly __brand: "ConsumptionDeltaId" };
/** Identity type for TamperEvent. Runtime: string. Compile-time: branded. */
export type TamperEventId = string & { readonly __brand: "TamperEventId" };
/** Identity type for BillingIncrement. Runtime: string. Compile-time: branded. */
export type BillingIncrementId = string & { readonly __brand: "BillingIncrementId" };
/** Identity type for TamperClearance. Runtime: string. Compile-time: branded. */
export type TamperClearanceId = string & { readonly __brand: "TamperClearanceId" };
/** Identity type for MeterReadingFlow. Runtime: string. Compile-time: branded. */
export type MeterReadingFlowId = string & { readonly __brand: "MeterReadingFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Customer {
  readonly customerId: CustomerId;
  readonly name: string;
  readonly accountNumber: string;
}

/** @stereotype <<Agent>> */
export interface UtilityProvider {
  readonly utilityId: UtilityProviderId;
  readonly name: string;
  readonly regulatorCode: string;
}

/** @stereotype <<Agent>> */
export interface FieldTechnician {
  readonly technicianId: FieldTechnicianId;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface RegulatoryAuthority {
  readonly regulatorId: RegulatoryAuthorityId;
  readonly jurisdiction: string;
}

/** @stereotype <<Agent>> */
export interface MeterVendor {
  readonly vendorId: MeterVendorId;
  readonly name: string;
}

/** @stereotype <<Commitment>> */
export interface MonotonicConsumptionCommitment {
  readonly commitmentId: MonotonicConsumptionCommitmentId;
  readonly maxNegativeDeltaThreshold: number;
}

/** @stereotype <<Commitment>> */
export interface TamperFreezeCommitment {
  readonly commitmentId: TamperFreezeCommitmentId;
  readonly tamperFreezeActive: boolean;
}

/** @stereotype <<Commitment>> */
export interface TamperClearanceCommitment {
  readonly commitmentId: TamperClearanceCommitmentId;
  readonly tamperCleared: boolean;
}

/** @stereotype <<Commitment>> */
export interface ReadingImmutabilityCommitment {
  readonly commitmentId: ReadingImmutabilityCommitmentId;
  readonly acceptedReadingCount: number;
}

/** @stereotype <<Category>> */
export interface MonotonicConsumption {
}

/** @stereotype <<Category>> */
export interface TamperHandling {
}

/** @stereotype <<Category>> */
export interface ReadingImmutability {
}

/** @stereotype <<Kind>> */
export interface MeterReading {
  readonly readingId: MeterReadingId;
  readonly timestamp: number;
  readonly kwh: number;
  readonly tamperFlags: string;
}

/** @stereotype <<Kind>> */
export interface ConsumptionDelta {
  readonly deltaId: ConsumptionDeltaId;
  readonly previousKwh: number;
  readonly currentKwh: number;
  readonly value: number;
}

/** @stereotype <<Kind>> */
export interface TamperEvent {
  readonly eventId: TamperEventId;
  readonly timestamp: number;
  readonly eventType: string;
  readonly description: string;
}

/** @stereotype <<Kind>> */
export interface BillingIncrement {
  readonly incrementId: BillingIncrementId;
  readonly delta: ConsumptionDelta;
  readonly amount: number;
  readonly appliedTimestamp: number;
}

/** @stereotype <<Kind>> */
export interface TamperClearance {
  readonly clearanceId: TamperClearanceId;
  readonly clearedBy: FieldTechnician;
  readonly timestamp: number;
}

/** @stereotype <<Happening>> */
export interface MeterReadingFlow {
  readonly flowId: MeterReadingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeCustomer(data: {
  customerId: string;
  name: string;
  accountNumber: string;
}): Customer {
  return {
    customerId: data.customerId as CustomerId,
    name: data.name,
    accountNumber: data.accountNumber,
  };
}

export function makeUtilityProvider(data: {
  utilityId: string;
  name: string;
  regulatorCode: string;
}): UtilityProvider {
  return {
    utilityId: data.utilityId as UtilityProviderId,
    name: data.name,
    regulatorCode: data.regulatorCode,
  };
}

export function makeFieldTechnician(data: {
  technicianId: string;
  certification: string;
}): FieldTechnician {
  return {
    technicianId: data.technicianId as FieldTechnicianId,
    certification: data.certification,
  };
}

export function makeRegulatoryAuthority(data: {
  regulatorId: string;
  jurisdiction: string;
}): RegulatoryAuthority {
  return {
    regulatorId: data.regulatorId as RegulatoryAuthorityId,
    jurisdiction: data.jurisdiction,
  };
}

export function makeMeterVendor(data: {
  vendorId: string;
  name: string;
}): MeterVendor {
  return {
    vendorId: data.vendorId as MeterVendorId,
    name: data.name,
  };
}

export function makeMonotonicConsumptionCommitment(data: {
  commitmentId: string;
  maxNegativeDeltaThreshold: number;
}): MonotonicConsumptionCommitment {
  return {
    commitmentId: data.commitmentId as MonotonicConsumptionCommitmentId,
    maxNegativeDeltaThreshold: data.maxNegativeDeltaThreshold,
  };
}

export function makeTamperFreezeCommitment(data: {
  commitmentId: string;
  tamperFreezeActive: boolean;
}): TamperFreezeCommitment {
  return {
    commitmentId: data.commitmentId as TamperFreezeCommitmentId,
    tamperFreezeActive: data.tamperFreezeActive,
  };
}

export function makeTamperClearanceCommitment(data: {
  commitmentId: string;
  tamperCleared: boolean;
}): TamperClearanceCommitment {
  return {
    commitmentId: data.commitmentId as TamperClearanceCommitmentId,
    tamperCleared: data.tamperCleared,
  };
}

export function makeReadingImmutabilityCommitment(data: {
  commitmentId: string;
  acceptedReadingCount: number;
}): ReadingImmutabilityCommitment {
  return {
    commitmentId: data.commitmentId as ReadingImmutabilityCommitmentId,
    acceptedReadingCount: data.acceptedReadingCount,
  };
}

export function makeMeterReading(data: {
  readingId: string;
  timestamp: number;
  kwh: number;
  tamperFlags: string;
}): MeterReading {
  return {
    readingId: data.readingId as MeterReadingId,
    timestamp: data.timestamp,
    kwh: data.kwh,
    tamperFlags: data.tamperFlags,
  };
}

export function makeConsumptionDelta(data: {
  deltaId: string;
  previousKwh: number;
  currentKwh: number;
  value: number;
}): ConsumptionDelta {
  return {
    deltaId: data.deltaId as ConsumptionDeltaId,
    previousKwh: data.previousKwh,
    currentKwh: data.currentKwh,
    value: data.value,
  };
}

export function makeTamperEvent(data: {
  eventId: string;
  timestamp: number;
  eventType: string;
  description: string;
}): TamperEvent {
  return {
    eventId: data.eventId as TamperEventId,
    timestamp: data.timestamp,
    eventType: data.eventType,
    description: data.description,
  };
}

export function makeBillingIncrement(data: {
  incrementId: string;
  delta: ConsumptionDelta;
  amount: number;
  appliedTimestamp: number;
}): BillingIncrement {
  return {
    incrementId: data.incrementId as BillingIncrementId,
    delta: data.delta,
    amount: data.amount,
    appliedTimestamp: data.appliedTimestamp,
  };
}

export function makeTamperClearance(data: {
  clearanceId: string;
  clearedBy: FieldTechnician;
  timestamp: number;
}): TamperClearance {
  return {
    clearanceId: data.clearanceId as TamperClearanceId,
    clearedBy: data.clearedBy,
    timestamp: data.timestamp,
  };
}

export function makeMeterReadingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): MeterReadingFlow {
  return {
    flowId: data.flowId as MeterReadingFlowId,
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
  return violations;
}

/** Runtime invariant check for UtilityProvider. Returns empty array when valid. */
export function validateUtilityProvider(instance: UtilityProvider): readonly string[] {
  const violations: string[] = [];
  if (!((instance.utilityId !== null))) {
    violations.push("[UtilityProvider] invariant violated: self.utilityId <> null");
  }
  return violations;
}

/** Runtime invariant check for FieldTechnician. Returns empty array when valid. */
export function validateFieldTechnician(instance: FieldTechnician): readonly string[] {
  const violations: string[] = [];
  if (!((instance.technicianId !== null))) {
    violations.push("[FieldTechnician] invariant violated: self.technicianId <> null");
  }
  return violations;
}

/** Runtime invariant check for RegulatoryAuthority. Returns empty array when valid. */
export function validateRegulatoryAuthority(instance: RegulatoryAuthority): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulatorId !== null))) {
    violations.push("[RegulatoryAuthority] invariant violated: self.regulatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for MeterVendor. Returns empty array when valid. */
export function validateMeterVendor(instance: MeterVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[MeterVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for MonotonicConsumption. Returns empty array when valid. */
export function validateMonotonicConsumption(instance: MonotonicConsumption): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MonotonicConsumption] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for TamperHandling. Returns empty array when valid. */
export function validateTamperHandling(instance: TamperHandling): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[TamperHandling] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for ReadingImmutability. Returns empty array when valid. */
export function validateReadingImmutability(instance: ReadingImmutability): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ReadingImmutability] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MeterReading. Returns empty array when valid. */
export function validateMeterReading(instance: MeterReading): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[MeterReading] invariant violated: self.readingId <> null");
  }
  if (!((instance.timestamp >= 0))) {
    violations.push("[MeterReading] invariant violated: self.timestamp >= 0.0");
  }
  if (!((instance.kwh >= 0))) {
    violations.push("[MeterReading] invariant violated: self.kwh >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ConsumptionDelta. Returns empty array when valid. */
export function validateConsumptionDelta(instance: ConsumptionDelta): readonly string[] {
  const violations: string[] = [];
  if (!((instance.deltaId !== null))) {
    violations.push("[ConsumptionDelta] invariant violated: self.deltaId <> null");
  }
  if (!((instance.value >= 0))) {
    violations.push("[ConsumptionDelta] invariant violated: self.value >= 0.0");
  }
  if (!((instance.currentKwh >= instance.previousKwh))) {
    violations.push("[ConsumptionDelta] invariant violated: self.currentKwh >= self.previousKwh");
  }
  return violations;
}

/** Runtime invariant check for TamperEvent. Returns empty array when valid. */
export function validateTamperEvent(instance: TamperEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.eventId !== null))) {
    violations.push("[TamperEvent] invariant violated: self.eventId <> null");
  }
  if (!((instance.timestamp >= 0))) {
    violations.push("[TamperEvent] invariant violated: self.timestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for BillingIncrement. Returns empty array when valid. */
export function validateBillingIncrement(instance: BillingIncrement): readonly string[] {
  const violations: string[] = [];
  if (!((instance.incrementId !== null))) {
    violations.push("[BillingIncrement] invariant violated: self.incrementId <> null");
  }
  if (!((instance.amount >= 0))) {
    violations.push("[BillingIncrement] invariant violated: self.amount >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for TamperClearance. Returns empty array when valid. */
export function validateTamperClearance(instance: TamperClearance): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clearanceId !== null))) {
    violations.push("[TamperClearance] invariant violated: self.clearanceId <> null");
  }
  if (!((instance.clearedBy !== null))) {
    violations.push("[TamperClearance] invariant violated: self.clearedBy <> null");
  }
  return violations;
}

/** Runtime invariant check for MeterReadingFlow. Returns empty array when valid. */
export function validateMeterReadingFlow(instance: MeterReadingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MeterReadingFlow] invariant violated: self.flowId <> null");
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

/** Lifecycle registry for MonotonicConsumptionCommitment commitments. */
export class MonotonicConsumptionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MonotonicConsumptionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MonotonicConsumptionCommitment — the typed wrapper guarantees that since
    // `register` only accepts MonotonicConsumptionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MonotonicConsumptionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MonotonicConsumptionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MonotonicConsumptionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MonotonicConsumptionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MonotonicConsumptionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MonotonicConsumptionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for TamperFreezeCommitment commitments. */
export class TamperFreezeCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<TamperFreezeCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a TamperFreezeCommitment — the typed wrapper guarantees that since
    // `register` only accepts TamperFreezeCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: TamperFreezeCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: TamperFreezeCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: TamperFreezeCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: TamperFreezeCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<TamperFreezeCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<TamperFreezeCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for TamperClearanceCommitment commitments. */
export class TamperClearanceCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<TamperClearanceCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a TamperClearanceCommitment — the typed wrapper guarantees that since
    // `register` only accepts TamperClearanceCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: TamperClearanceCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: TamperClearanceCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: TamperClearanceCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: TamperClearanceCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<TamperClearanceCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<TamperClearanceCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ReadingImmutabilityCommitment commitments. */
export class ReadingImmutabilityCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ReadingImmutabilityCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ReadingImmutabilityCommitment — the typed wrapper guarantees that since
    // `register` only accepts ReadingImmutabilityCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ReadingImmutabilityCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ReadingImmutabilityCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ReadingImmutabilityCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ReadingImmutabilityCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ReadingImmutabilityCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ReadingImmutabilityCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

