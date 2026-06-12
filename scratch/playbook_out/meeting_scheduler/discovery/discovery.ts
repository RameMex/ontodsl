// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Initiator. Runtime: string. Compile-time: branded. */
export type InitiatorId = string & { readonly __brand: "InitiatorId" };
/** Identity type for Participant. Runtime: string. Compile-time: branded. */
export type ParticipantId = string & { readonly __brand: "ParticipantId" };
/** Identity type for MeetingSchedulerVendor. Runtime: string. Compile-time: branded. */
export type MeetingSchedulerVendorId = string & { readonly __brand: "MeetingSchedulerVendorId" };
/** Identity type for DateRange. Runtime: string. Compile-time: branded. */
export type DateRangeId = string & { readonly __brand: "DateRangeId" };
/** Identity type for ExclusionSet. Runtime: string. Compile-time: branded. */
export type ExclusionSetId = string & { readonly __brand: "ExclusionSetId" };
/** Identity type for PreferenceSet. Runtime: string. Compile-time: branded. */
export type PreferenceSetId = string & { readonly __brand: "PreferenceSetId" };
/** Identity type for SchedulingRequest. Runtime: string. Compile-time: branded. */
export type SchedulingRequestId = string & { readonly __brand: "SchedulingRequestId" };
/** Identity type for SchedulingOutcome. Runtime: string. Compile-time: branded. */
export type SchedulingOutcomeId = string & { readonly __brand: "SchedulingOutcomeId" };
/** Identity type for ScheduleFeasibleDateCommitment. Runtime: string. Compile-time: branded. */
export type ScheduleFeasibleDateCommitmentId = string & { readonly __brand: "ScheduleFeasibleDateCommitmentId" };
/** Identity type for ConflictReportedCommitment. Runtime: string. Compile-time: branded. */
export type ConflictReportedCommitmentId = string & { readonly __brand: "ConflictReportedCommitmentId" };
/** Identity type for ParticipantNotificationCommitment. Runtime: string. Compile-time: branded. */
export type ParticipantNotificationCommitmentId = string & { readonly __brand: "ParticipantNotificationCommitmentId" };
/** Identity type for ConstraintUpdateAcceptedCommitment. Runtime: string. Compile-time: branded. */
export type ConstraintUpdateAcceptedCommitmentId = string & { readonly __brand: "ConstraintUpdateAcceptedCommitmentId" };
/** Identity type for SchedulingFlow. Runtime: string. Compile-time: branded. */
export type SchedulingFlowId = string & { readonly __brand: "SchedulingFlowId" };
/** Identity type for ConstraintCollectionStep. Runtime: string. Compile-time: branded. */
export type ConstraintCollectionStepId = string & { readonly __brand: "ConstraintCollectionStepId" };
/** Identity type for DateProposalStep. Runtime: string. Compile-time: branded. */
export type DateProposalStepId = string & { readonly __brand: "DateProposalStepId" };
/** Identity type for ConflictResolutionStep. Runtime: string. Compile-time: branded. */
export type ConflictResolutionStepId = string & { readonly __brand: "ConflictResolutionStepId" };
/** Identity type for ConstraintUpdateStep. Runtime: string. Compile-time: branded. */
export type ConstraintUpdateStepId = string & { readonly __brand: "ConstraintUpdateStepId" };
/** Identity type for ConfirmationNotificationStep. Runtime: string. Compile-time: branded. */
export type ConfirmationNotificationStepId = string & { readonly __brand: "ConfirmationNotificationStepId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Initiator {
  readonly initiatorId: InitiatorId;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Agent>> */
export interface Participant {
  readonly participantId: ParticipantId;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Agent>> */
export interface MeetingSchedulerVendor {
  readonly vendorId: MeetingSchedulerVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface DateRange {
  readonly rangeId: DateRangeId;
  readonly earliest: string;
  readonly latest: string;
}

/** @stereotype <<Kind>> */
export interface ExclusionSet {
  readonly exclusionSetId: ExclusionSetId;
  readonly ownerId: string;
  readonly excludedDates: ReadonlySet<string>;
}

/** @stereotype <<Kind>> */
export interface PreferenceSet {
  readonly preferenceSetId: PreferenceSetId;
  readonly ownerId: string;
  readonly preferredDates: ReadonlySet<string>;
}

/** @stereotype <<Kind>> */
export interface SchedulingRequest {
  readonly requestId: SchedulingRequestId;
  readonly initiatorId: string;
  readonly dateRange: DateRange;
  readonly status: string;
}

/** @stereotype <<Kind>> */
export interface SchedulingOutcome {
  readonly outcomeId: SchedulingOutcomeId;
  readonly requestId: string;
  readonly resolvedDate: string;
  readonly isConflict: boolean;
}

/** @stereotype <<Category>> */
export interface ExclusionRespected {
}

/** @stereotype <<Category>> */
export interface InitiatorAlwaysInformed {
}

/** @stereotype <<Commitment>> */
export interface ScheduleFeasibleDateCommitment {
  readonly commitmentId: ScheduleFeasibleDateCommitmentId;
  readonly minCandidateDates: number;
}

/** @stereotype <<Commitment>> */
export interface ConflictReportedCommitment {
  readonly commitmentId: ConflictReportedCommitmentId;
  readonly maxResponseHours: number;
}

/** @stereotype <<Commitment>> */
export interface ParticipantNotificationCommitment {
  readonly commitmentId: ParticipantNotificationCommitmentId;
  readonly maxNotificationDelayHours: number;
}

/** @stereotype <<Commitment>> */
export interface ConstraintUpdateAcceptedCommitment {
  readonly commitmentId: ConstraintUpdateAcceptedCommitmentId;
  readonly minUpdatesAccepted: number;
}

/** @stereotype <<Happening>> */
export interface SchedulingFlow {
  readonly flowId: SchedulingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ConstraintCollectionStep {
  readonly stepId: ConstraintCollectionStepId;
  readonly description: string;
}

/** @stereotype <<Happening>> */
export interface DateProposalStep {
  readonly stepId: DateProposalStepId;
  readonly description: string;
}

/** @stereotype <<Happening>> */
export interface ConflictResolutionStep {
  readonly stepId: ConflictResolutionStepId;
  readonly description: string;
}

/** @stereotype <<Happening>> */
export interface ConstraintUpdateStep {
  readonly stepId: ConstraintUpdateStepId;
  readonly description: string;
}

/** @stereotype <<Happening>> */
export interface ConfirmationNotificationStep {
  readonly stepId: ConfirmationNotificationStepId;
  readonly description: string;
}


// ─── Factory functions ───

export function makeInitiator(data: {
  initiatorId: string;
  name: string;
  email: string;
}): Initiator {
  return {
    initiatorId: data.initiatorId as InitiatorId,
    name: data.name,
    email: data.email,
  };
}

export function makeParticipant(data: {
  participantId: string;
  name: string;
  email: string;
}): Participant {
  return {
    participantId: data.participantId as ParticipantId,
    name: data.name,
    email: data.email,
  };
}

export function makeMeetingSchedulerVendor(data: {
  vendorId: string;
  name: string;
}): MeetingSchedulerVendor {
  return {
    vendorId: data.vendorId as MeetingSchedulerVendorId,
    name: data.name,
  };
}

export function makeDateRange(data: {
  rangeId: string;
  earliest: string;
  latest: string;
}): DateRange {
  return {
    rangeId: data.rangeId as DateRangeId,
    earliest: data.earliest,
    latest: data.latest,
  };
}

export function makeExclusionSet(data: {
  exclusionSetId: string;
  ownerId: string;
  excludedDates: ReadonlySet<string>;
}): ExclusionSet {
  return {
    exclusionSetId: data.exclusionSetId as ExclusionSetId,
    ownerId: data.ownerId,
    excludedDates: data.excludedDates,
  };
}

export function makePreferenceSet(data: {
  preferenceSetId: string;
  ownerId: string;
  preferredDates: ReadonlySet<string>;
}): PreferenceSet {
  return {
    preferenceSetId: data.preferenceSetId as PreferenceSetId,
    ownerId: data.ownerId,
    preferredDates: data.preferredDates,
  };
}

export function makeSchedulingRequest(data: {
  requestId: string;
  initiatorId: string;
  dateRange: DateRange;
  status: string;
}): SchedulingRequest {
  return {
    requestId: data.requestId as SchedulingRequestId,
    initiatorId: data.initiatorId,
    dateRange: data.dateRange,
    status: data.status,
  };
}

export function makeSchedulingOutcome(data: {
  outcomeId: string;
  requestId: string;
  resolvedDate: string;
  isConflict: boolean;
}): SchedulingOutcome {
  return {
    outcomeId: data.outcomeId as SchedulingOutcomeId,
    requestId: data.requestId,
    resolvedDate: data.resolvedDate,
    isConflict: data.isConflict,
  };
}

export function makeScheduleFeasibleDateCommitment(data: {
  commitmentId: string;
  minCandidateDates: number;
}): ScheduleFeasibleDateCommitment {
  return {
    commitmentId: data.commitmentId as ScheduleFeasibleDateCommitmentId,
    minCandidateDates: data.minCandidateDates,
  };
}

export function makeConflictReportedCommitment(data: {
  commitmentId: string;
  maxResponseHours: number;
}): ConflictReportedCommitment {
  return {
    commitmentId: data.commitmentId as ConflictReportedCommitmentId,
    maxResponseHours: data.maxResponseHours,
  };
}

export function makeParticipantNotificationCommitment(data: {
  commitmentId: string;
  maxNotificationDelayHours: number;
}): ParticipantNotificationCommitment {
  return {
    commitmentId: data.commitmentId as ParticipantNotificationCommitmentId,
    maxNotificationDelayHours: data.maxNotificationDelayHours,
  };
}

export function makeConstraintUpdateAcceptedCommitment(data: {
  commitmentId: string;
  minUpdatesAccepted: number;
}): ConstraintUpdateAcceptedCommitment {
  return {
    commitmentId: data.commitmentId as ConstraintUpdateAcceptedCommitmentId,
    minUpdatesAccepted: data.minUpdatesAccepted,
  };
}

export function makeSchedulingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SchedulingFlow {
  return {
    flowId: data.flowId as SchedulingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeConstraintCollectionStep(data: {
  stepId: string;
  description: string;
}): ConstraintCollectionStep {
  return {
    stepId: data.stepId as ConstraintCollectionStepId,
    description: data.description,
  };
}

export function makeDateProposalStep(data: {
  stepId: string;
  description: string;
}): DateProposalStep {
  return {
    stepId: data.stepId as DateProposalStepId,
    description: data.description,
  };
}

export function makeConflictResolutionStep(data: {
  stepId: string;
  description: string;
}): ConflictResolutionStep {
  return {
    stepId: data.stepId as ConflictResolutionStepId,
    description: data.description,
  };
}

export function makeConstraintUpdateStep(data: {
  stepId: string;
  description: string;
}): ConstraintUpdateStep {
  return {
    stepId: data.stepId as ConstraintUpdateStepId,
    description: data.description,
  };
}

export function makeConfirmationNotificationStep(data: {
  stepId: string;
  description: string;
}): ConfirmationNotificationStep {
  return {
    stepId: data.stepId as ConfirmationNotificationStepId,
    description: data.description,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Initiator. Returns empty array when valid. */
export function validateInitiator(instance: Initiator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.initiatorId !== null))) {
    violations.push("[Initiator] invariant violated: self.initiatorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Initiator] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for Participant. Returns empty array when valid. */
export function validateParticipant(instance: Participant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.participantId !== null))) {
    violations.push("[Participant] invariant violated: self.participantId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Participant] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulerVendor. Returns empty array when valid. */
export function validateMeetingSchedulerVendor(instance: MeetingSchedulerVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[MeetingSchedulerVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for DateRange. Returns empty array when valid. */
export function validateDateRange(instance: DateRange): readonly string[] {
  const violations: string[] = [];
  if (!((instance.rangeId !== null))) {
    violations.push("[DateRange] invariant violated: self.rangeId <> null");
  }
  if (!((instance.earliest !== null))) {
    violations.push("[DateRange] invariant violated: self.earliest <> null");
  }
  if (!((instance.latest !== null))) {
    violations.push("[DateRange] invariant violated: self.latest <> null");
  }
  return violations;
}

/** Runtime invariant check for ExclusionSet. Returns empty array when valid. */
export function validateExclusionSet(instance: ExclusionSet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.exclusionSetId !== null))) {
    violations.push("[ExclusionSet] invariant violated: self.exclusionSetId <> null");
  }
  if (!((instance.ownerId !== null))) {
    violations.push("[ExclusionSet] invariant violated: self.ownerId <> null");
  }
  return violations;
}

/** Runtime invariant check for PreferenceSet. Returns empty array when valid. */
export function validatePreferenceSet(instance: PreferenceSet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.preferenceSetId !== null))) {
    violations.push("[PreferenceSet] invariant violated: self.preferenceSetId <> null");
  }
  if (!((instance.ownerId !== null))) {
    violations.push("[PreferenceSet] invariant violated: self.ownerId <> null");
  }
  return violations;
}

/** Runtime invariant check for SchedulingRequest. Returns empty array when valid. */
export function validateSchedulingRequest(instance: SchedulingRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[SchedulingRequest] invariant violated: self.requestId <> null");
  }
  if (!((instance.initiatorId !== null))) {
    violations.push("[SchedulingRequest] invariant violated: self.initiatorId <> null");
  }
  if (!((instance.dateRange !== null))) {
    violations.push("[SchedulingRequest] invariant violated: self.dateRange <> null");
  }
  if (!((instance.status !== null))) {
    violations.push("[SchedulingRequest] invariant violated: self.status <> null");
  }
  return violations;
}

/** Runtime invariant check for SchedulingOutcome. Returns empty array when valid. */
export function validateSchedulingOutcome(instance: SchedulingOutcome): readonly string[] {
  const violations: string[] = [];
  if (!((instance.outcomeId !== null))) {
    violations.push("[SchedulingOutcome] invariant violated: self.outcomeId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[SchedulingOutcome] invariant violated: self.requestId <> null");
  }
  return violations;
}

/** Runtime invariant check for ExclusionRespected. Returns empty array when valid. */
export function validateExclusionRespected(instance: ExclusionRespected): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ExclusionRespected] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for InitiatorAlwaysInformed. Returns empty array when valid. */
export function validateInitiatorAlwaysInformed(instance: InitiatorAlwaysInformed): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[InitiatorAlwaysInformed] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for SchedulingFlow. Returns empty array when valid. */
export function validateSchedulingFlow(instance: SchedulingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SchedulingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[SchedulingFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[SchedulingFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for ConstraintCollectionStep. Returns empty array when valid. */
export function validateConstraintCollectionStep(instance: ConstraintCollectionStep): readonly string[] {
  const violations: string[] = [];
  if (!((instance.stepId !== null))) {
    violations.push("[ConstraintCollectionStep] invariant violated: self.stepId <> null");
  }
  return violations;
}

/** Runtime invariant check for DateProposalStep. Returns empty array when valid. */
export function validateDateProposalStep(instance: DateProposalStep): readonly string[] {
  const violations: string[] = [];
  if (!((instance.stepId !== null))) {
    violations.push("[DateProposalStep] invariant violated: self.stepId <> null");
  }
  return violations;
}

/** Runtime invariant check for ConflictResolutionStep. Returns empty array when valid. */
export function validateConflictResolutionStep(instance: ConflictResolutionStep): readonly string[] {
  const violations: string[] = [];
  if (!((instance.stepId !== null))) {
    violations.push("[ConflictResolutionStep] invariant violated: self.stepId <> null");
  }
  return violations;
}

/** Runtime invariant check for ConstraintUpdateStep. Returns empty array when valid. */
export function validateConstraintUpdateStep(instance: ConstraintUpdateStep): readonly string[] {
  const violations: string[] = [];
  if (!((instance.stepId !== null))) {
    violations.push("[ConstraintUpdateStep] invariant violated: self.stepId <> null");
  }
  return violations;
}

/** Runtime invariant check for ConfirmationNotificationStep. Returns empty array when valid. */
export function validateConfirmationNotificationStep(instance: ConfirmationNotificationStep): readonly string[] {
  const violations: string[] = [];
  if (!((instance.stepId !== null))) {
    violations.push("[ConfirmationNotificationStep] invariant violated: self.stepId <> null");
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

/** Lifecycle registry for ScheduleFeasibleDateCommitment commitments. */
export class ScheduleFeasibleDateCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ScheduleFeasibleDateCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ScheduleFeasibleDateCommitment — the typed wrapper guarantees that since
    // `register` only accepts ScheduleFeasibleDateCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ScheduleFeasibleDateCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ScheduleFeasibleDateCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ScheduleFeasibleDateCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ScheduleFeasibleDateCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ScheduleFeasibleDateCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ScheduleFeasibleDateCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ConflictReportedCommitment commitments. */
export class ConflictReportedCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ConflictReportedCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ConflictReportedCommitment — the typed wrapper guarantees that since
    // `register` only accepts ConflictReportedCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ConflictReportedCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ConflictReportedCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ConflictReportedCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ConflictReportedCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ConflictReportedCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ConflictReportedCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ParticipantNotificationCommitment commitments. */
export class ParticipantNotificationCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ParticipantNotificationCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ParticipantNotificationCommitment — the typed wrapper guarantees that since
    // `register` only accepts ParticipantNotificationCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ParticipantNotificationCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ParticipantNotificationCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ParticipantNotificationCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ParticipantNotificationCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ParticipantNotificationCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ParticipantNotificationCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ConstraintUpdateAcceptedCommitment commitments. */
export class ConstraintUpdateAcceptedCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ConstraintUpdateAcceptedCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ConstraintUpdateAcceptedCommitment — the typed wrapper guarantees that since
    // `register` only accepts ConstraintUpdateAcceptedCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ConstraintUpdateAcceptedCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ConstraintUpdateAcceptedCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ConstraintUpdateAcceptedCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ConstraintUpdateAcceptedCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ConstraintUpdateAcceptedCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ConstraintUpdateAcceptedCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

