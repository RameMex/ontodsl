// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Recipient. Runtime: string. Compile-time: branded. */
export type RecipientId = string & { readonly __brand: "RecipientId" };
/** Identity type for Sender. Runtime: string. Compile-time: branded. */
export type SenderId = string & { readonly __brand: "SenderId" };
/** Identity type for OpsTeam. Runtime: string. Compile-time: branded. */
export type OpsTeamId = string & { readonly __brand: "OpsTeamId" };
/** Identity type for NotificationVendor. Runtime: string. Compile-time: branded. */
export type NotificationVendorId = string & { readonly __brand: "NotificationVendorId" };
/** Identity type for NotificationRequest. Runtime: string. Compile-time: branded. */
export type NotificationRequestId = string & { readonly __brand: "NotificationRequestId" };
/** Identity type for Channel. Runtime: string. Compile-time: branded. */
export type ChannelId = string & { readonly __brand: "ChannelId" };
/** Identity type for DeliveryAttempt. Runtime: string. Compile-time: branded. */
export type DeliveryAttemptId = string & { readonly __brand: "DeliveryAttemptId" };
/** Identity type for ExactlyOnceDelivery. Runtime: string. Compile-time: branded. */
export type ExactlyOnceDeliveryId = string & { readonly __brand: "ExactlyOnceDeliveryId" };
/** Identity type for BoundedRetries. Runtime: string. Compile-time: branded. */
export type BoundedRetriesId = string & { readonly __brand: "BoundedRetriesId" };
/** Identity type for ExponentialBackoff. Runtime: string. Compile-time: branded. */
export type ExponentialBackoffId = string & { readonly __brand: "ExponentialBackoffId" };
/** Identity type for FailureEscalation. Runtime: string. Compile-time: branded. */
export type FailureEscalationId = string & { readonly __brand: "FailureEscalationId" };
/** Identity type for DispatchFlow. Runtime: string. Compile-time: branded. */
export type DispatchFlowId = string & { readonly __brand: "DispatchFlowId" };

// ─── Interfaces ───

/** @stereotype <<Agent>> */
export interface Recipient {
  readonly recipientId: RecipientId;
  readonly email: string;
  readonly phoneNumber: string;
}

/** @stereotype <<Agent>> */
export interface Sender {
  readonly senderId: SenderId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface OpsTeam {
  readonly teamId: OpsTeamId;
  readonly escalationEmail: string;
}

/** @stereotype <<Agent>> */
export interface NotificationVendor {
  readonly vendorId: NotificationVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface NotificationRequest {
  readonly requestId: NotificationRequestId;
  readonly recipient: string;
  readonly messageBody: string;
  readonly channelList: string;
}

/** @stereotype <<Kind>> */
export interface Channel {
  readonly channelId: ChannelId;
  readonly channelType: string;
  readonly maxRetries: number;
}

/** @stereotype <<Kind>> */
export interface DeliveryAttempt {
  readonly attemptId: DeliveryAttemptId;
  readonly requestId: string;
  readonly channelId: string;
  readonly attemptNumber: number;
  readonly scheduledAt: number;
  readonly result: string;
}

/** @stereotype <<Commitment>> */
export interface ExactlyOnceDelivery {
  readonly commitmentId: ExactlyOnceDeliveryId;
  readonly maxDeliveredPerChannel: number;
}

/** @stereotype <<Commitment>> */
export interface BoundedRetries {
  readonly commitmentId: BoundedRetriesId;
  readonly allowedRetries: number;
}

/** @stereotype <<Commitment>> */
export interface ExponentialBackoff {
  readonly commitmentId: ExponentialBackoffId;
  readonly backoffBaseSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface FailureEscalation {
  readonly commitmentId: FailureEscalationId;
  readonly alertThreshold: number;
}

/** @stereotype <<Category>> */
export interface DeliveryGovernance {
}

/** @stereotype <<Category>> */
export interface RetryPolicy {
}

/** @stereotype <<Happening>> */
export interface DispatchFlow {
  readonly flowId: DispatchFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeRecipient(data: {
  recipientId: string;
  email: string;
  phoneNumber: string;
}): Recipient {
  return {
    recipientId: data.recipientId as RecipientId,
    email: data.email,
    phoneNumber: data.phoneNumber,
  };
}

export function makeSender(data: {
  senderId: string;
  name: string;
}): Sender {
  return {
    senderId: data.senderId as SenderId,
    name: data.name,
  };
}

export function makeOpsTeam(data: {
  teamId: string;
  escalationEmail: string;
}): OpsTeam {
  return {
    teamId: data.teamId as OpsTeamId,
    escalationEmail: data.escalationEmail,
  };
}

export function makeNotificationVendor(data: {
  vendorId: string;
  name: string;
}): NotificationVendor {
  return {
    vendorId: data.vendorId as NotificationVendorId,
    name: data.name,
  };
}

export function makeNotificationRequest(data: {
  requestId: string;
  recipient: string;
  messageBody: string;
  channelList: string;
}): NotificationRequest {
  return {
    requestId: data.requestId as NotificationRequestId,
    recipient: data.recipient,
    messageBody: data.messageBody,
    channelList: data.channelList,
  };
}

export function makeChannel(data: {
  channelId: string;
  channelType: string;
  maxRetries: number;
}): Channel {
  return {
    channelId: data.channelId as ChannelId,
    channelType: data.channelType,
    maxRetries: data.maxRetries,
  };
}

export function makeDeliveryAttempt(data: {
  attemptId: string;
  requestId: string;
  channelId: string;
  attemptNumber: number;
  scheduledAt: number;
  result: string;
}): DeliveryAttempt {
  return {
    attemptId: data.attemptId as DeliveryAttemptId,
    requestId: data.requestId,
    channelId: data.channelId,
    attemptNumber: data.attemptNumber,
    scheduledAt: data.scheduledAt,
    result: data.result,
  };
}

export function makeExactlyOnceDelivery(data: {
  commitmentId: string;
  maxDeliveredPerChannel: number;
}): ExactlyOnceDelivery {
  return {
    commitmentId: data.commitmentId as ExactlyOnceDeliveryId,
    maxDeliveredPerChannel: data.maxDeliveredPerChannel,
  };
}

export function makeBoundedRetries(data: {
  commitmentId: string;
  allowedRetries: number;
}): BoundedRetries {
  return {
    commitmentId: data.commitmentId as BoundedRetriesId,
    allowedRetries: data.allowedRetries,
  };
}

export function makeExponentialBackoff(data: {
  commitmentId: string;
  backoffBaseSeconds: number;
}): ExponentialBackoff {
  return {
    commitmentId: data.commitmentId as ExponentialBackoffId,
    backoffBaseSeconds: data.backoffBaseSeconds,
  };
}

export function makeFailureEscalation(data: {
  commitmentId: string;
  alertThreshold: number;
}): FailureEscalation {
  return {
    commitmentId: data.commitmentId as FailureEscalationId,
    alertThreshold: data.alertThreshold,
  };
}

export function makeDispatchFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): DispatchFlow {
  return {
    flowId: data.flowId as DispatchFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Recipient. Returns empty array when valid. */
export function validateRecipient(instance: Recipient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.recipientId !== null))) {
    violations.push("[Recipient] invariant violated: self.recipientId <> null");
  }
  return violations;
}

/** Runtime invariant check for Sender. Returns empty array when valid. */
export function validateSender(instance: Sender): readonly string[] {
  const violations: string[] = [];
  if (!((instance.senderId !== null))) {
    violations.push("[Sender] invariant violated: self.senderId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Sender] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for OpsTeam. Returns empty array when valid. */
export function validateOpsTeam(instance: OpsTeam): readonly string[] {
  const violations: string[] = [];
  if (!((instance.teamId !== null))) {
    violations.push("[OpsTeam] invariant violated: self.teamId <> null");
  }
  if (!((instance.escalationEmail !== null))) {
    violations.push("[OpsTeam] invariant violated: self.escalationEmail <> null");
  }
  return violations;
}

/** Runtime invariant check for NotificationRequest. Returns empty array when valid. */
export function validateNotificationRequest(instance: NotificationRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[NotificationRequest] invariant violated: self.requestId <> null");
  }
  if (!((instance.messageBody !== null))) {
    violations.push("[NotificationRequest] invariant violated: self.messageBody <> null");
  }
  return violations;
}

/** Runtime invariant check for Channel. Returns empty array when valid. */
export function validateChannel(instance: Channel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[Channel] invariant violated: self.channelId <> null");
  }
  if (!((instance.channelType !== null))) {
    violations.push("[Channel] invariant violated: self.channelType <> null");
  }
  return violations;
}

/** Runtime invariant check for DeliveryAttempt. Returns empty array when valid. */
export function validateDeliveryAttempt(instance: DeliveryAttempt): readonly string[] {
  const violations: string[] = [];
  if (!((instance.attemptId !== null))) {
    violations.push("[DeliveryAttempt] invariant violated: self.attemptId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[DeliveryAttempt] invariant violated: self.requestId <> null");
  }
  if (!((instance.channelId !== null))) {
    violations.push("[DeliveryAttempt] invariant violated: self.channelId <> null");
  }
  if (!((instance.attemptNumber >= 0))) {
    violations.push("[DeliveryAttempt] invariant violated: self.attemptNumber >= 0");
  }
  if (!((instance.attemptNumber <= 5))) {
    violations.push("[DeliveryAttempt] invariant violated: self.attemptNumber <= 5");
  }
  return violations;
}

/** Runtime invariant check for DeliveryGovernance. Returns empty array when valid. */
export function validateDeliveryGovernance(instance: DeliveryGovernance): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.channelList <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.messageBody <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for RetryPolicy. Returns empty array when valid. */
export function validateRetryPolicy(instance: RetryPolicy): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxRetries >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxRetries <= 5 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for DispatchFlow. Returns empty array when valid. */
export function validateDispatchFlow(instance: DispatchFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DispatchFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[DispatchFlow] invariant violated: self.triggeredBy <> null");
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

/** Lifecycle registry for ExactlyOnceDelivery commitments. */
export class ExactlyOnceDeliveryRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ExactlyOnceDelivery>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ExactlyOnceDelivery — the typed wrapper guarantees that since
    // `register` only accepts ExactlyOnceDelivery instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ExactlyOnceDelivery): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ExactlyOnceDeliveryId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ExactlyOnceDeliveryId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ExactlyOnceDeliveryId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ExactlyOnceDelivery>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ExactlyOnceDelivery>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for BoundedRetries commitments. */
export class BoundedRetriesRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<BoundedRetries>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a BoundedRetries — the typed wrapper guarantees that since
    // `register` only accepts BoundedRetries instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: BoundedRetries): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: BoundedRetriesId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: BoundedRetriesId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: BoundedRetriesId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<BoundedRetries>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<BoundedRetries>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ExponentialBackoff commitments. */
export class ExponentialBackoffRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ExponentialBackoff>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ExponentialBackoff — the typed wrapper guarantees that since
    // `register` only accepts ExponentialBackoff instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ExponentialBackoff): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ExponentialBackoffId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ExponentialBackoffId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ExponentialBackoffId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ExponentialBackoff>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ExponentialBackoff>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for FailureEscalation commitments. */
export class FailureEscalationRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<FailureEscalation>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a FailureEscalation — the typed wrapper guarantees that since
    // `register` only accepts FailureEscalation instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: FailureEscalation): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: FailureEscalationId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: FailureEscalationId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: FailureEscalationId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<FailureEscalation>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<FailureEscalation>[];
  }

  size(): number {
    return this.inner.size();
  }
}

