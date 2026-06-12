// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Message. Runtime: string. Compile-time: branded. */
export type MessageId = string & { readonly __brand: "MessageId" };
/** Identity type for ModerationDecision. Runtime: string. Compile-time: branded. */
export type ModerationDecisionId = string & { readonly __brand: "ModerationDecisionId" };
/** Identity type for Classifier. Runtime: string. Compile-time: branded. */
export type ClassifierId = string & { readonly __brand: "ClassifierId" };
/** Identity type for Sender. Runtime: string. Compile-time: branded. */
export type SenderId = string & { readonly __brand: "SenderId" };
/** Identity type for Recipient. Runtime: string. Compile-time: branded. */
export type RecipientId = string & { readonly __brand: "RecipientId" };
/** Identity type for Moderator. Runtime: string. Compile-time: branded. */
export type ModeratorId = string & { readonly __brand: "ModeratorId" };
/** Identity type for ModerationVendor. Runtime: string. Compile-time: branded. */
export type ModerationVendorId = string & { readonly __brand: "ModerationVendorId" };
/** Identity type for HighConfidenceHide. Runtime: string. Compile-time: branded. */
export type HighConfidenceHideId = string & { readonly __brand: "HighConfidenceHideId" };
/** Identity type for DecisionRecording. Runtime: string. Compile-time: branded. */
export type DecisionRecordingId = string & { readonly __brand: "DecisionRecordingId" };
/** Identity type for PendingReviewSLA. Runtime: string. Compile-time: branded. */
export type PendingReviewSLAId = string & { readonly __brand: "PendingReviewSLAId" };
/** Identity type for MessageSubmissionFlow. Runtime: string. Compile-time: branded. */
export type MessageSubmissionFlowId = string & { readonly __brand: "MessageSubmissionFlowId" };
/** Identity type for ModerateQueueFlow. Runtime: string. Compile-time: branded. */
export type ModerateQueueFlowId = string & { readonly __brand: "ModerateQueueFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface Message {
  readonly messageId: MessageId;
  readonly senderId: string;
  readonly recipientId: string;
  readonly messageBody: string;
  readonly riskLevel: string;
}

/** @stereotype <<Kind>> */
export interface ModerationDecision {
  readonly decisionId: ModerationDecisionId;
  readonly outcome: string;
  readonly classifierConfidence: number;
  readonly thresholdUsed: number;
  readonly timestamp: string;
}

/** @stereotype <<Kind>> */
export interface Classifier {
  readonly classifierId: ClassifierId;
  readonly confidence: number;
}

/** @stereotype <<Agent>> */
export interface Sender {
  readonly userId: SenderId;
  readonly userName: string;
}

/** @stereotype <<Agent>> */
export interface Recipient {
  readonly userId: RecipientId;
  readonly userName: string;
}

/** @stereotype <<Agent>> */
export interface Moderator {
  readonly staffId: ModeratorId;
  readonly capacity: number;
}

/** @stereotype <<Agent>> */
export interface ModerationVendor {
  readonly vendorId: ModerationVendorId;
  readonly name: string;
}

/** @stereotype <<Category>> */
export interface HighConfidenceHideConstraints {
}

/** @stereotype <<Category>> */
export interface DecisionRecordingConstraints {
}

/** @stereotype <<Category>> */
export interface PendingReviewConstraints {
}

/** @stereotype <<Commitment>> */
export interface HighConfidenceHide {
  readonly commitmentId: HighConfidenceHideId;
}

/** @stereotype <<Commitment>> */
export interface DecisionRecording {
  readonly commitmentId: DecisionRecordingId;
}

/** @stereotype <<Commitment>> */
export interface PendingReviewSLA {
  readonly commitmentId: PendingReviewSLAId;
  readonly p95ReviewHours: number;
}

/** @stereotype <<Happening>> */
export interface MessageSubmissionFlow {
  readonly flowId: MessageSubmissionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ModerateQueueFlow {
  readonly flowId: ModerateQueueFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeMessage(data: {
  messageId: string;
  senderId: string;
  recipientId: string;
  messageBody: string;
  riskLevel: string;
}): Message {
  return {
    messageId: data.messageId as MessageId,
    senderId: data.senderId,
    recipientId: data.recipientId,
    messageBody: data.messageBody,
    riskLevel: data.riskLevel,
  };
}

export function makeModerationDecision(data: {
  decisionId: string;
  outcome: string;
  classifierConfidence: number;
  thresholdUsed: number;
  timestamp: string;
}): ModerationDecision {
  return {
    decisionId: data.decisionId as ModerationDecisionId,
    outcome: data.outcome,
    classifierConfidence: data.classifierConfidence,
    thresholdUsed: data.thresholdUsed,
    timestamp: data.timestamp,
  };
}

export function makeClassifier(data: {
  classifierId: string;
  confidence: number;
}): Classifier {
  return {
    classifierId: data.classifierId as ClassifierId,
    confidence: data.confidence,
  };
}

export function makeSender(data: {
  userId: string;
  userName: string;
}): Sender {
  return {
    userId: data.userId as SenderId,
    userName: data.userName,
  };
}

export function makeRecipient(data: {
  userId: string;
  userName: string;
}): Recipient {
  return {
    userId: data.userId as RecipientId,
    userName: data.userName,
  };
}

export function makeModerator(data: {
  staffId: string;
  capacity: number;
}): Moderator {
  return {
    staffId: data.staffId as ModeratorId,
    capacity: data.capacity,
  };
}

export function makeModerationVendor(data: {
  vendorId: string;
  name: string;
}): ModerationVendor {
  return {
    vendorId: data.vendorId as ModerationVendorId,
    name: data.name,
  };
}

export function makeHighConfidenceHide(data: {
  commitmentId: string;
}): HighConfidenceHide {
  return {
    commitmentId: data.commitmentId as HighConfidenceHideId,
  };
}

export function makeDecisionRecording(data: {
  commitmentId: string;
}): DecisionRecording {
  return {
    commitmentId: data.commitmentId as DecisionRecordingId,
  };
}

export function makePendingReviewSLA(data: {
  commitmentId: string;
  p95ReviewHours: number;
}): PendingReviewSLA {
  return {
    commitmentId: data.commitmentId as PendingReviewSLAId,
    p95ReviewHours: data.p95ReviewHours,
  };
}

export function makeMessageSubmissionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): MessageSubmissionFlow {
  return {
    flowId: data.flowId as MessageSubmissionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeModerateQueueFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ModerateQueueFlow {
  return {
    flowId: data.flowId as ModerateQueueFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Message. Returns empty array when valid. */
export function validateMessage(instance: Message): readonly string[] {
  const violations: string[] = [];
  if (!((instance.messageId !== null))) {
    violations.push("[Message] invariant violated: self.messageId <> null");
  }
  if (!((instance.messageBody !== null))) {
    violations.push("[Message] invariant violated: self.messageBody <> null");
  }
  return violations;
}

/** Runtime invariant check for ModerationDecision. Returns empty array when valid. */
export function validateModerationDecision(instance: ModerationDecision): readonly string[] {
  const violations: string[] = [];
  if (!((instance.decisionId !== null))) {
    violations.push("[ModerationDecision] invariant violated: self.decisionId <> null");
  }
  if (!(((instance.outcome === "allowed") || (instance.outcome === "hidden")))) {
    violations.push("[ModerationDecision] invariant violated: self.outcome = 'allowed' or self.outcome = 'hidden'");
  }
  if (!((instance.classifierConfidence >= 0))) {
    violations.push("[ModerationDecision] invariant violated: self.classifierConfidence >= 0.0");
  }
  if (!((instance.classifierConfidence <= 1))) {
    violations.push("[ModerationDecision] invariant violated: self.classifierConfidence <= 1.0");
  }
  if (!((instance.thresholdUsed >= 0))) {
    violations.push("[ModerationDecision] invariant violated: self.thresholdUsed >= 0.0");
  }
  if (!((instance.thresholdUsed <= 1))) {
    violations.push("[ModerationDecision] invariant violated: self.thresholdUsed <= 1.0");
  }
  if (!((instance.timestamp !== null))) {
    violations.push("[ModerationDecision] invariant violated: self.timestamp <> null");
  }
  return violations;
}

/** Runtime invariant check for Classifier. Returns empty array when valid. */
export function validateClassifier(instance: Classifier): readonly string[] {
  const violations: string[] = [];
  if (!((instance.classifierId !== null))) {
    violations.push("[Classifier] invariant violated: self.classifierId <> null");
  }
  if (!((instance.confidence >= 0))) {
    violations.push("[Classifier] invariant violated: self.confidence >= 0.0");
  }
  if (!((instance.confidence <= 1))) {
    violations.push("[Classifier] invariant violated: self.confidence <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for Sender. Returns empty array when valid. */
export function validateSender(instance: Sender): readonly string[] {
  const violations: string[] = [];
  if (!((instance.userId !== null))) {
    violations.push("[Sender] invariant violated: self.userId <> null");
  }
  return violations;
}

/** Runtime invariant check for Recipient. Returns empty array when valid. */
export function validateRecipient(instance: Recipient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.userId !== null))) {
    violations.push("[Recipient] invariant violated: self.userId <> null");
  }
  return violations;
}

/** Runtime invariant check for Moderator. Returns empty array when valid. */
export function validateModerator(instance: Moderator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.staffId !== null))) {
    violations.push("[Moderator] invariant violated: self.staffId <> null");
  }
  return violations;
}

/** Runtime invariant check for ModerationVendor. Returns empty array when valid. */
export function validateModerationVendor(instance: ModerationVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[ModerationVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for HighConfidenceHideConstraints. Returns empty array when valid. */
export function validateHighConfidenceHideConstraints(instance: HighConfidenceHideConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[HighConfidenceHideConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for DecisionRecordingConstraints. Returns empty array when valid. */
export function validateDecisionRecordingConstraints(instance: DecisionRecordingConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.outcome = 'allowed' or bearer.outcome = 'hidden' — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.classifierConfidence >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.classifierConfidence <= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for PendingReviewConstraints. Returns empty array when valid. */
export function validatePendingReviewConstraints(instance: PendingReviewConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PendingReviewConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MessageSubmissionFlow. Returns empty array when valid. */
export function validateMessageSubmissionFlow(instance: MessageSubmissionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MessageSubmissionFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for ModerateQueueFlow. Returns empty array when valid. */
export function validateModerateQueueFlow(instance: ModerateQueueFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ModerateQueueFlow] invariant violated: self.flowId <> null");
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

/** Lifecycle registry for HighConfidenceHide commitments. */
export class HighConfidenceHideRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<HighConfidenceHide>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a HighConfidenceHide — the typed wrapper guarantees that since
    // `register` only accepts HighConfidenceHide instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: HighConfidenceHide): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: HighConfidenceHideId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: HighConfidenceHideId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: HighConfidenceHideId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<HighConfidenceHide>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<HighConfidenceHide>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for DecisionRecording commitments. */
export class DecisionRecordingRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<DecisionRecording>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a DecisionRecording — the typed wrapper guarantees that since
    // `register` only accepts DecisionRecording instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: DecisionRecording): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: DecisionRecordingId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: DecisionRecordingId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: DecisionRecordingId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<DecisionRecording>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<DecisionRecording>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for PendingReviewSLA commitments. */
export class PendingReviewSLARegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PendingReviewSLA>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PendingReviewSLA — the typed wrapper guarantees that since
    // `register` only accepts PendingReviewSLA instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PendingReviewSLA): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PendingReviewSLAId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PendingReviewSLAId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PendingReviewSLAId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PendingReviewSLA>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PendingReviewSLA>[];
  }

  size(): number {
    return this.inner.size();
  }
}

