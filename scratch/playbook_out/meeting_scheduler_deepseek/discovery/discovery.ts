// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Initiator. Runtime: string. Compile-time: branded. */
export type InitiatorId = string & { readonly __brand: "InitiatorId" };
/** Identity type for Participant. Runtime: string. Compile-time: branded. */
export type ParticipantId = string & { readonly __brand: "ParticipantId" };
/** Identity type for SchedulerVendor. Runtime: string. Compile-time: branded. */
export type SchedulerVendorId = string & { readonly __brand: "SchedulerVendorId" };
/** Identity type for ExclusionSet. Runtime: string. Compile-time: branded. */
export type ExclusionSetId = string & { readonly __brand: "ExclusionSetId" };
/** Identity type for PreferenceSet. Runtime: string. Compile-time: branded. */
export type PreferenceSetId = string & { readonly __brand: "PreferenceSetId" };
/** Identity type for DateRange. Runtime: string. Compile-time: branded. */
export type DateRangeId = string & { readonly __brand: "DateRangeId" };
/** Identity type for ScheduleWithinConstraints. Runtime: string. Compile-time: branded. */
export type ScheduleWithinConstraintsId = string & { readonly __brand: "ScheduleWithinConstraintsId" };
/** Identity type for ReportConflict. Runtime: string. Compile-time: branded. */
export type ReportConflictId = string & { readonly __brand: "ReportConflictId" };
/** Identity type for NotifyParticipants. Runtime: string. Compile-time: branded. */
export type NotifyParticipantsId = string & { readonly __brand: "NotifyParticipantsId" };
/** Identity type for AcceptUpdatedConstraints. Runtime: string. Compile-time: branded. */
export type AcceptUpdatedConstraintsId = string & { readonly __brand: "AcceptUpdatedConstraintsId" };
/** Identity type for MeetingSchedulingFlow. Runtime: string. Compile-time: branded. */
export type MeetingSchedulingFlowId = string & { readonly __brand: "MeetingSchedulingFlowId" };

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
export interface SchedulerVendor {
  readonly vendorId: SchedulerVendorId;
  readonly name: string;
  readonly supportEmail: string;
}

/** @stereotype <<Kind>> */
export interface ExclusionSet {
  readonly exclusionSetId: ExclusionSetId;
  readonly participantId: string;
  readonly dates: string;
}

/** @stereotype <<Kind>> */
export interface PreferenceSet {
  readonly preferenceSetId: PreferenceSetId;
  readonly participantId: string;
  readonly dates: string;
}

/** @stereotype <<Kind>> */
export interface DateRange {
  readonly dateRangeId: DateRangeId;
  readonly startDate: string;
  readonly endDate: string;
}

/** @stereotype <<Commitment>> */
export interface ScheduleWithinConstraints {
  readonly commitmentId: ScheduleWithinConstraintsId;
  readonly proposedDate: number;
  readonly rangeStart: number;
  readonly rangeEnd: number;
}

/** @stereotype <<Commitment>> */
export interface ReportConflict {
  readonly commitmentId: ReportConflictId;
  readonly conflictReported: boolean;
}

/** @stereotype <<Commitment>> */
export interface NotifyParticipants {
  readonly commitmentId: NotifyParticipantsId;
  readonly notificationSent: boolean;
}

/** @stereotype <<Commitment>> */
export interface AcceptUpdatedConstraints {
  readonly commitmentId: AcceptUpdatedConstraintsId;
  readonly constraintUpdateAccepted: boolean;
}

/** @stereotype <<Category>> */
export interface ExclusionRespect {
}

/** @stereotype <<Category>> */
export interface InitiatorNotified {
}

/** @stereotype <<Happening>> */
export interface MeetingSchedulingFlow {
  readonly flowId: MeetingSchedulingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
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

export function makeSchedulerVendor(data: {
  vendorId: string;
  name: string;
  supportEmail: string;
}): SchedulerVendor {
  return {
    vendorId: data.vendorId as SchedulerVendorId,
    name: data.name,
    supportEmail: data.supportEmail,
  };
}

export function makeExclusionSet(data: {
  exclusionSetId: string;
  participantId: string;
  dates: string;
}): ExclusionSet {
  return {
    exclusionSetId: data.exclusionSetId as ExclusionSetId,
    participantId: data.participantId,
    dates: data.dates,
  };
}

export function makePreferenceSet(data: {
  preferenceSetId: string;
  participantId: string;
  dates: string;
}): PreferenceSet {
  return {
    preferenceSetId: data.preferenceSetId as PreferenceSetId,
    participantId: data.participantId,
    dates: data.dates,
  };
}

export function makeDateRange(data: {
  dateRangeId: string;
  startDate: string;
  endDate: string;
}): DateRange {
  return {
    dateRangeId: data.dateRangeId as DateRangeId,
    startDate: data.startDate,
    endDate: data.endDate,
  };
}

export function makeScheduleWithinConstraints(data: {
  commitmentId: string;
  proposedDate: number;
  rangeStart: number;
  rangeEnd: number;
}): ScheduleWithinConstraints {
  return {
    commitmentId: data.commitmentId as ScheduleWithinConstraintsId,
    proposedDate: data.proposedDate,
    rangeStart: data.rangeStart,
    rangeEnd: data.rangeEnd,
  };
}

export function makeReportConflict(data: {
  commitmentId: string;
  conflictReported: boolean;
}): ReportConflict {
  return {
    commitmentId: data.commitmentId as ReportConflictId,
    conflictReported: data.conflictReported,
  };
}

export function makeNotifyParticipants(data: {
  commitmentId: string;
  notificationSent: boolean;
}): NotifyParticipants {
  return {
    commitmentId: data.commitmentId as NotifyParticipantsId,
    notificationSent: data.notificationSent,
  };
}

export function makeAcceptUpdatedConstraints(data: {
  commitmentId: string;
  constraintUpdateAccepted: boolean;
}): AcceptUpdatedConstraints {
  return {
    commitmentId: data.commitmentId as AcceptUpdatedConstraintsId,
    constraintUpdateAccepted: data.constraintUpdateAccepted,
  };
}

export function makeMeetingSchedulingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): MeetingSchedulingFlow {
  return {
    flowId: data.flowId as MeetingSchedulingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
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
  if (!((instance.email !== null))) {
    violations.push("[Initiator] invariant violated: self.email <> null");
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
  if (!((instance.email !== null))) {
    violations.push("[Participant] invariant violated: self.email <> null");
  }
  return violations;
}

/** Runtime invariant check for SchedulerVendor. Returns empty array when valid. */
export function validateSchedulerVendor(instance: SchedulerVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[SchedulerVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[SchedulerVendor] invariant violated: self.name <> null");
  }
  if (!((instance.supportEmail !== null))) {
    violations.push("[SchedulerVendor] invariant violated: self.supportEmail <> null");
  }
  return violations;
}

/** Runtime invariant check for ExclusionSet. Returns empty array when valid. */
export function validateExclusionSet(instance: ExclusionSet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.exclusionSetId !== null))) {
    violations.push("[ExclusionSet] invariant violated: self.exclusionSetId <> null");
  }
  if (!((instance.participantId !== null))) {
    violations.push("[ExclusionSet] invariant violated: self.participantId <> null");
  }
  if (!((instance.dates !== null))) {
    violations.push("[ExclusionSet] invariant violated: self.dates <> null");
  }
  return violations;
}

/** Runtime invariant check for PreferenceSet. Returns empty array when valid. */
export function validatePreferenceSet(instance: PreferenceSet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.preferenceSetId !== null))) {
    violations.push("[PreferenceSet] invariant violated: self.preferenceSetId <> null");
  }
  if (!((instance.participantId !== null))) {
    violations.push("[PreferenceSet] invariant violated: self.participantId <> null");
  }
  if (!((instance.dates !== null))) {
    violations.push("[PreferenceSet] invariant violated: self.dates <> null");
  }
  return violations;
}

/** Runtime invariant check for DateRange. Returns empty array when valid. */
export function validateDateRange(instance: DateRange): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dateRangeId !== null))) {
    violations.push("[DateRange] invariant violated: self.dateRangeId <> null");
  }
  if (!((instance.startDate !== null))) {
    violations.push("[DateRange] invariant violated: self.startDate <> null");
  }
  if (!((instance.endDate !== null))) {
    violations.push("[DateRange] invariant violated: self.endDate <> null");
  }
  return violations;
}

/** Runtime invariant check for ExclusionRespect. Returns empty array when valid. */
export function validateExclusionRespect(instance: ExclusionRespect): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ExclusionRespect] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for InitiatorNotified. Returns empty array when valid. */
export function validateInitiatorNotified(instance: InitiatorNotified): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[InitiatorNotified] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulingFlow. Returns empty array when valid. */
export function validateMeetingSchedulingFlow(instance: MeetingSchedulingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MeetingSchedulingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[MeetingSchedulingFlow] invariant violated: self.outcome <> null");
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

/** Lifecycle registry for ScheduleWithinConstraints commitments. */
export class ScheduleWithinConstraintsRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ScheduleWithinConstraints>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ScheduleWithinConstraints — the typed wrapper guarantees that since
    // `register` only accepts ScheduleWithinConstraints instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ScheduleWithinConstraints): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ScheduleWithinConstraintsId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ScheduleWithinConstraintsId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ScheduleWithinConstraintsId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ScheduleWithinConstraints>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ScheduleWithinConstraints>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ReportConflict commitments. */
export class ReportConflictRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ReportConflict>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ReportConflict — the typed wrapper guarantees that since
    // `register` only accepts ReportConflict instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ReportConflict): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ReportConflictId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ReportConflictId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ReportConflictId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ReportConflict>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ReportConflict>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for NotifyParticipants commitments. */
export class NotifyParticipantsRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<NotifyParticipants>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a NotifyParticipants — the typed wrapper guarantees that since
    // `register` only accepts NotifyParticipants instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: NotifyParticipants): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: NotifyParticipantsId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: NotifyParticipantsId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: NotifyParticipantsId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<NotifyParticipants>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<NotifyParticipants>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AcceptUpdatedConstraints commitments. */
export class AcceptUpdatedConstraintsRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AcceptUpdatedConstraints>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AcceptUpdatedConstraints — the typed wrapper guarantees that since
    // `register` only accepts AcceptUpdatedConstraints instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AcceptUpdatedConstraints): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AcceptUpdatedConstraintsId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AcceptUpdatedConstraintsId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AcceptUpdatedConstraintsId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AcceptUpdatedConstraints>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AcceptUpdatedConstraints>[];
  }

  size(): number {
    return this.inner.size();
  }
}

