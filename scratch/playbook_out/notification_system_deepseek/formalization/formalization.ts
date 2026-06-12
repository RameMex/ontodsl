// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
/** Identity type for FormalizedDispatchFlow. Runtime: string. Compile-time: branded. */
export type FormalizedDispatchFlowId = string & { readonly __brand: "FormalizedDispatchFlowId" };
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
/** Identity type for NotificationDispatcherSystem. Runtime: string. Compile-time: branded. */
export type NotificationDispatcherSystemId = string & { readonly __brand: "NotificationDispatcherSystemId" };

// ─── Interfaces ───

/** @stereotype <<Category>> */
export interface GdprArticle5Compliant {
}

/** @stereotype <<Category>> */
export interface Iso27001Compliant {
}

/** @stereotype <<Category>> */
export interface CanSpamActCompliant {
}

/** @stereotype <<Category>> */
export interface BackoffTimePlausibility {
}

/** @stereotype <<Category>> */
export interface ChannelExclusivity {
}

/** @stereotype <<Subkind>> */
export interface NotificationDispatcherSystemFormalized extends NotificationDispatcherSystem {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly classification: string;
  readonly isPassive: boolean;
}

/** @stereotype <<Category>> */
export interface DeliveryChainIntegrity {
}

/** @stereotype <<Category>> */
export interface RetryScheduleCorrectness {
}

/** @stereotype <<Happening>> */
export interface FormalizedDispatchFlow {
  readonly flowId: FormalizedDispatchFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

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

/** @stereotype <<Kind>> */
export interface NotificationDispatcherSystem extends DeliveryGovernance, RetryPolicy {
  readonly systemId: NotificationDispatcherSystemId;
  readonly maxDeliveredPerChannel: number;
  readonly allowedRetries: number;
  readonly backoffBaseSeconds: number;
  readonly alertThreshold: number;
  readonly deliveryCount: number;
  readonly retryCount: number;
  readonly alertsRaisedCount: number;
  readonly currentRetrySeconds: number;
}


// ─── Factory functions ───

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  classification: string;
  isPassive: boolean;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    classification: data.classification,
    isPassive: data.isPassive,
  };
}

export function makeFormalizedDispatchFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): FormalizedDispatchFlow {
  return {
    flowId: data.flowId as FormalizedDispatchFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

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

export function makeNotificationDispatcherSystem(data: {
  systemId: string;
  maxDeliveredPerChannel: number;
  allowedRetries: number;
  backoffBaseSeconds: number;
  alertThreshold: number;
  deliveryCount: number;
  retryCount: number;
  alertsRaisedCount: number;
  currentRetrySeconds: number;
}): NotificationDispatcherSystem {
  return {
    systemId: data.systemId as NotificationDispatcherSystemId,
    maxDeliveredPerChannel: data.maxDeliveredPerChannel,
    allowedRetries: data.allowedRetries,
    backoffBaseSeconds: data.backoffBaseSeconds,
    alertThreshold: data.alertThreshold,
    deliveryCount: data.deliveryCount,
    retryCount: data.retryCount,
    alertsRaisedCount: data.alertsRaisedCount,
    currentRetrySeconds: data.currentRetrySeconds,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for GdprArticle5Compliant. Returns empty array when valid. */
export function validateGdprArticle5Compliant(instance: GdprArticle5Compliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.messageBody <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.channelList <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for Iso27001Compliant. Returns empty array when valid. */
export function validateIso27001Compliant(instance: Iso27001Compliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.deliveryCount >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.alertsRaisedCount >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.retryCount <= bearer.allowedRetries — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for CanSpamActCompliant. Returns empty array when valid. */
export function validateCanSpamActCompliant(instance: CanSpamActCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.channelType = 'email' implies
      (bearer.maxRetries <= 5 and bearer.maxRetries >= 0) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for BackoffTimePlausibility. Returns empty array when valid. */
export function validateBackoffTimePlausibility(instance: BackoffTimePlausibility): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentRetrySeconds >= 0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentRetrySeconds <= 32 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.backoffBaseSeconds >= 0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ChannelExclusivity. Returns empty array when valid. */
export function validateChannelExclusivity(instance: ChannelExclusivity): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.result = 'delivered' implies
      (bearer.attemptNumber <= 1) — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.result = 'failed' implies
      (bearer.attemptNumber >= 5) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionCode !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionCode <> null");
  }
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((instance.classification !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.classification <> null");
  }
  if (!((instance.isPassive === true))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.isPassive = true");
  }
  return violations;
}

/** Runtime invariant check for DeliveryChainIntegrity. Returns empty array when valid. */
export function validateDeliveryChainIntegrity(instance: DeliveryChainIntegrity): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.deliveryCount <= 1 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.alertsRaisedCount <= 1 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): not (bearer.deliveryCount > 0 and bearer.alertsRaisedCount > 0) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for RetryScheduleCorrectness. Returns empty array when valid. */
export function validateRetryScheduleCorrectness(instance: RetryScheduleCorrectness): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.retryCount <= bearer.allowedRetries — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentRetrySeconds = 2 * bearer.retryCount — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.backoffBaseSeconds = 2 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for FormalizedDispatchFlow. Returns empty array when valid. */
export function validateFormalizedDispatchFlow(instance: FormalizedDispatchFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[FormalizedDispatchFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[FormalizedDispatchFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

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

/** Runtime invariant check for NotificationDispatcherSystem. Returns empty array when valid. */
export function validateNotificationDispatcherSystem(instance: NotificationDispatcherSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[NotificationDispatcherSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.maxDeliveredPerChannel === 1))) {
    violations.push("[NotificationDispatcherSystem] invariant violated: self.maxDeliveredPerChannel = 1");
  }
  if (!((instance.allowedRetries <= 5))) {
    violations.push("[NotificationDispatcherSystem] invariant violated: self.allowedRetries <= 5");
  }
  if (!((instance.backoffBaseSeconds >= 1))) {
    violations.push("[NotificationDispatcherSystem] invariant violated: self.backoffBaseSeconds >= 1");
  }
  if (!((instance.alertThreshold === 5))) {
    violations.push("[NotificationDispatcherSystem] invariant violated: self.alertThreshold = 5");
  }
  if (!((instance.retryCount <= instance.allowedRetries))) {
    violations.push("[NotificationDispatcherSystem] invariant violated: self.retryCount <= self.allowedRetries");
  }
  if (!(!(((instance.deliveryCount > 0) && (instance.alertsRaisedCount > 0))))) {
    violations.push("[NotificationDispatcherSystem] invariant violated: not (self.deliveryCount > 0 and self.alertsRaisedCount > 0)");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for NotificationDispatcherSystemFormalized.rejectInvalidChannels. User supplies this. */
export type NotificationDispatcherSystemFormalizedRejectInvalidChannelsImpl = (self: NotificationDispatcherSystemFormalized, requestId: string, channels: string) => { self: NotificationDispatcherSystemFormalized; modified: {} };

/** Contract-checking wrapper for NotificationDispatcherSystemFormalized.rejectInvalidChannels. */
export function wrapNotificationDispatcherSystemFormalizedRejectInvalidChannels(impl: NotificationDispatcherSystemFormalizedRejectInvalidChannelsImpl): (self: NotificationDispatcherSystemFormalized, requestId: string, channels: string) => NotificationDispatcherSystemFormalized {
  return (self, requestId, channels) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.rejectInvalidChannels] pre violated: requestId <> null");
    }
    if (!(((channels === null) || (channels === "")))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.rejectInvalidChannels] pre violated: channels = null or channels = ''");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.deliveryCount": self.deliveryCount,
      "self.retryCount": self.retryCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, channels);
      const postViolations: string[] = [];
      if (!((__result.self.deliveryCount === __pre["self.deliveryCount"]))) {
        postViolations.push("[NotificationDispatcherSystemFormalized.rejectInvalidChannels] post violated: self.deliveryCount = self.deliveryCount@pre");
      }
      if (!((__result.self.retryCount === __pre["self.retryCount"]))) {
        postViolations.push("[NotificationDispatcherSystemFormalized.rejectInvalidChannels] post violated: self.retryCount = self.retryCount@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystemFormalized.rejectInvalidChannels (async). User supplies this. */
export type NotificationDispatcherSystemFormalizedRejectInvalidChannelsAsyncImpl = (self: NotificationDispatcherSystemFormalized, requestId: string, channels: string) => Promise<{ self: NotificationDispatcherSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for NotificationDispatcherSystemFormalized.rejectInvalidChannels (async). */
export function wrapNotificationDispatcherSystemFormalizedRejectInvalidChannelsAsync(impl: NotificationDispatcherSystemFormalizedRejectInvalidChannelsAsyncImpl): (self: NotificationDispatcherSystemFormalized, requestId: string, channels: string) => Promise<NotificationDispatcherSystemFormalized> {
  return async (self, requestId, channels) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.rejectInvalidChannels] pre violated: requestId <> null");
    }
    if (!(((channels === null) || (channels === "")))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.rejectInvalidChannels] pre violated: channels = null or channels = ''");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.deliveryCount": self.deliveryCount,
      "self.retryCount": self.retryCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, channels);
      const postViolations: string[] = [];
      if (!((__result.self.deliveryCount === __pre["self.deliveryCount"]))) {
        postViolations.push("[NotificationDispatcherSystemFormalized.rejectInvalidChannels] post violated: self.deliveryCount = self.deliveryCount@pre");
      }
      if (!((__result.self.retryCount === __pre["self.retryCount"]))) {
        postViolations.push("[NotificationDispatcherSystemFormalized.rejectInvalidChannels] post violated: self.retryCount = self.retryCount@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystemFormalized.failAfterRetryLimit. User supplies this. */
export type NotificationDispatcherSystemFormalizedFailAfterRetryLimitImpl = (self: NotificationDispatcherSystemFormalized, requestId: string, channelId: string) => { self: NotificationDispatcherSystemFormalized; modified: { alertsRaisedCount: unknown } };

/** Contract-checking wrapper for NotificationDispatcherSystemFormalized.failAfterRetryLimit. */
export function wrapNotificationDispatcherSystemFormalizedFailAfterRetryLimit(impl: NotificationDispatcherSystemFormalizedFailAfterRetryLimitImpl): (self: NotificationDispatcherSystemFormalized, requestId: string, channelId: string) => NotificationDispatcherSystemFormalized {
  return (self, requestId, channelId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.failAfterRetryLimit] pre violated: requestId <> null");
    }
    if (!((channelId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.failAfterRetryLimit] pre violated: channelId <> null");
    }
    if (!((self.retryCount === self.allowedRetries))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.failAfterRetryLimit] pre violated: self.retryCount = self.allowedRetries");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alertsRaisedCount": self.alertsRaisedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, channelId);
      const postViolations: string[] = [];
      if (!((__result.self.alertsRaisedCount === (__pre["self.alertsRaisedCount"] + 1)))) {
        postViolations.push("[NotificationDispatcherSystemFormalized.failAfterRetryLimit] post violated: self.alertsRaisedCount = self.alertsRaisedCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystemFormalized.failAfterRetryLimit (async). User supplies this. */
export type NotificationDispatcherSystemFormalizedFailAfterRetryLimitAsyncImpl = (self: NotificationDispatcherSystemFormalized, requestId: string, channelId: string) => Promise<{ self: NotificationDispatcherSystemFormalized; modified: { alertsRaisedCount: unknown } }>;

/** Contract-checking wrapper for NotificationDispatcherSystemFormalized.failAfterRetryLimit (async). */
export function wrapNotificationDispatcherSystemFormalizedFailAfterRetryLimitAsync(impl: NotificationDispatcherSystemFormalizedFailAfterRetryLimitAsyncImpl): (self: NotificationDispatcherSystemFormalized, requestId: string, channelId: string) => Promise<NotificationDispatcherSystemFormalized> {
  return async (self, requestId, channelId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.failAfterRetryLimit] pre violated: requestId <> null");
    }
    if (!((channelId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.failAfterRetryLimit] pre violated: channelId <> null");
    }
    if (!((self.retryCount === self.allowedRetries))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.failAfterRetryLimit] pre violated: self.retryCount = self.allowedRetries");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alertsRaisedCount": self.alertsRaisedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, channelId);
      const postViolations: string[] = [];
      if (!((__result.self.alertsRaisedCount === (__pre["self.alertsRaisedCount"] + 1)))) {
        postViolations.push("[NotificationDispatcherSystemFormalized.failAfterRetryLimit] post violated: self.alertsRaisedCount = self.alertsRaisedCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystemFormalized.enforceBackoffSchedule. User supplies this. */
export type NotificationDispatcherSystemFormalizedEnforceBackoffScheduleImpl = (self: NotificationDispatcherSystemFormalized, attemptNumber: number) => { self: NotificationDispatcherSystemFormalized; modified: {} };

/** Contract-checking wrapper for NotificationDispatcherSystemFormalized.enforceBackoffSchedule. */
export function wrapNotificationDispatcherSystemFormalizedEnforceBackoffSchedule(impl: NotificationDispatcherSystemFormalizedEnforceBackoffScheduleImpl): (self: NotificationDispatcherSystemFormalized, attemptNumber: number) => NotificationDispatcherSystemFormalized {
  return (self, attemptNumber) => {
    const preViolations: string[] = [];
    if (!((attemptNumber >= 0))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.enforceBackoffSchedule] pre violated: attemptNumber >= 0");
    }
    if (!((attemptNumber <= 5))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.enforceBackoffSchedule] pre violated: attemptNumber <= 5");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, attemptNumber);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 1 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= 32 — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystemFormalized.enforceBackoffSchedule (async). User supplies this. */
export type NotificationDispatcherSystemFormalizedEnforceBackoffScheduleAsyncImpl = (self: NotificationDispatcherSystemFormalized, attemptNumber: number) => Promise<{ self: NotificationDispatcherSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for NotificationDispatcherSystemFormalized.enforceBackoffSchedule (async). */
export function wrapNotificationDispatcherSystemFormalizedEnforceBackoffScheduleAsync(impl: NotificationDispatcherSystemFormalizedEnforceBackoffScheduleAsyncImpl): (self: NotificationDispatcherSystemFormalized, attemptNumber: number) => Promise<NotificationDispatcherSystemFormalized> {
  return async (self, attemptNumber) => {
    const preViolations: string[] = [];
    if (!((attemptNumber >= 0))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.enforceBackoffSchedule] pre violated: attemptNumber >= 0");
    }
    if (!((attemptNumber <= 5))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.enforceBackoffSchedule] pre violated: attemptNumber <= 5");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, attemptNumber);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 1 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= 32 — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery. User supplies this. */
export type NotificationDispatcherSystemFormalizedVerifyNoDuplicateDeliveryImpl = (self: NotificationDispatcherSystemFormalized, requestId: string, channelId: string) => { self: NotificationDispatcherSystemFormalized; modified: {} };

/** Contract-checking wrapper for NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery. */
export function wrapNotificationDispatcherSystemFormalizedVerifyNoDuplicateDelivery(impl: NotificationDispatcherSystemFormalizedVerifyNoDuplicateDeliveryImpl): (self: NotificationDispatcherSystemFormalized, requestId: string, channelId: string) => NotificationDispatcherSystemFormalized {
  return (self, requestId, channelId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery] pre violated: requestId <> null");
    }
    if (!((channelId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery] pre violated: channelId <> null");
    }
    if (!((self.deliveryCount <= 1))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery] pre violated: self.deliveryCount <= 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, channelId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (self.deliveryCount = 1) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery (async). User supplies this. */
export type NotificationDispatcherSystemFormalizedVerifyNoDuplicateDeliveryAsyncImpl = (self: NotificationDispatcherSystemFormalized, requestId: string, channelId: string) => Promise<{ self: NotificationDispatcherSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery (async). */
export function wrapNotificationDispatcherSystemFormalizedVerifyNoDuplicateDeliveryAsync(impl: NotificationDispatcherSystemFormalizedVerifyNoDuplicateDeliveryAsyncImpl): (self: NotificationDispatcherSystemFormalized, requestId: string, channelId: string) => Promise<NotificationDispatcherSystemFormalized> {
  return async (self, requestId, channelId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery] pre violated: requestId <> null");
    }
    if (!((channelId !== null))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery] pre violated: channelId <> null");
    }
    if (!((self.deliveryCount <= 1))) {
      preViolations.push("[NotificationDispatcherSystemFormalized.verifyNoDuplicateDelivery] pre violated: self.deliveryCount <= 1");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, channelId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (self.deliveryCount = 1) — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystem.dispatchNotification. User supplies this. */
export type NotificationDispatcherSystemDispatchNotificationImpl = (self: NotificationDispatcherSystem, requestId: string, recipient: string, channels: string) => { self: NotificationDispatcherSystem; modified: { deliveryCount: unknown; retryCount: unknown } };

/** Contract-checking wrapper for NotificationDispatcherSystem.dispatchNotification. */
export function wrapNotificationDispatcherSystemDispatchNotification(impl: NotificationDispatcherSystemDispatchNotificationImpl): (self: NotificationDispatcherSystem, requestId: string, recipient: string, channels: string) => NotificationDispatcherSystem {
  return (self, requestId, recipient, channels) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.dispatchNotification] pre violated: requestId <> null");
    }
    if (!((recipient !== null))) {
      preViolations.push("[NotificationDispatcherSystem.dispatchNotification] pre violated: recipient <> null");
    }
    if (!((channels !== null))) {
      preViolations.push("[NotificationDispatcherSystem.dispatchNotification] pre violated: channels <> null");
    }
    if (!((self.deliveryCount === 0))) {
      preViolations.push("[NotificationDispatcherSystem.dispatchNotification] pre violated: self.deliveryCount = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.deliveryCount": self.deliveryCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, recipient, channels);
      const postViolations: string[] = [];
      if (!((__result.self.deliveryCount >= __pre["self.deliveryCount"]))) {
        postViolations.push("[NotificationDispatcherSystem.dispatchNotification] post violated: self.deliveryCount >= self.deliveryCount@pre");
      }
      if (!((__result.self.retryCount === 0))) {
        postViolations.push("[NotificationDispatcherSystem.dispatchNotification] post violated: self.retryCount = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystem.dispatchNotification (async). User supplies this. */
export type NotificationDispatcherSystemDispatchNotificationAsyncImpl = (self: NotificationDispatcherSystem, requestId: string, recipient: string, channels: string) => Promise<{ self: NotificationDispatcherSystem; modified: { deliveryCount: unknown; retryCount: unknown } }>;

/** Contract-checking wrapper for NotificationDispatcherSystem.dispatchNotification (async). */
export function wrapNotificationDispatcherSystemDispatchNotificationAsync(impl: NotificationDispatcherSystemDispatchNotificationAsyncImpl): (self: NotificationDispatcherSystem, requestId: string, recipient: string, channels: string) => Promise<NotificationDispatcherSystem> {
  return async (self, requestId, recipient, channels) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.dispatchNotification] pre violated: requestId <> null");
    }
    if (!((recipient !== null))) {
      preViolations.push("[NotificationDispatcherSystem.dispatchNotification] pre violated: recipient <> null");
    }
    if (!((channels !== null))) {
      preViolations.push("[NotificationDispatcherSystem.dispatchNotification] pre violated: channels <> null");
    }
    if (!((self.deliveryCount === 0))) {
      preViolations.push("[NotificationDispatcherSystem.dispatchNotification] pre violated: self.deliveryCount = 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.deliveryCount": self.deliveryCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, recipient, channels);
      const postViolations: string[] = [];
      if (!((__result.self.deliveryCount >= __pre["self.deliveryCount"]))) {
        postViolations.push("[NotificationDispatcherSystem.dispatchNotification] post violated: self.deliveryCount >= self.deliveryCount@pre");
      }
      if (!((__result.self.retryCount === 0))) {
        postViolations.push("[NotificationDispatcherSystem.dispatchNotification] post violated: self.retryCount = 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystem.attemptDelivery. User supplies this. */
export type NotificationDispatcherSystemAttemptDeliveryImpl = (self: NotificationDispatcherSystem, requestId: string, channelId: string) => { self: NotificationDispatcherSystem; modified: { deliveryCount: unknown; retryCount: unknown; alertsRaisedCount: unknown } };

/** Contract-checking wrapper for NotificationDispatcherSystem.attemptDelivery. */
export function wrapNotificationDispatcherSystemAttemptDelivery(impl: NotificationDispatcherSystemAttemptDeliveryImpl): (self: NotificationDispatcherSystem, requestId: string, channelId: string) => NotificationDispatcherSystem {
  return (self, requestId, channelId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.attemptDelivery] pre violated: requestId <> null");
    }
    if (!((channelId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.attemptDelivery] pre violated: channelId <> null");
    }
    if (!((self.retryCount <= self.allowedRetries))) {
      preViolations.push("[NotificationDispatcherSystem.attemptDelivery] pre violated: self.retryCount <= self.allowedRetries");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.deliveryCount": self.deliveryCount,
      "self.retryCount": self.retryCount,
      "self.alertsRaisedCount": self.alertsRaisedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, channelId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if result then
            self.deliveryCount = self.deliveryCount@pre + 1
          else
            if self.retryCount@pre < self.allowedRetries then
              self.retryCount = self.retryCount@pre + 1
            else
              self.alertsRaisedCount = self.alertsRaisedCount@pre + 1
            endif
          endif — unbound variable 'result'
      if (!((__result.self.retryCount <= __result.self.allowedRetries))) {
        postViolations.push("[NotificationDispatcherSystem.attemptDelivery] post violated: self.retryCount <= self.allowedRetries");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystem.attemptDelivery (async). User supplies this. */
export type NotificationDispatcherSystemAttemptDeliveryAsyncImpl = (self: NotificationDispatcherSystem, requestId: string, channelId: string) => Promise<{ self: NotificationDispatcherSystem; modified: { deliveryCount: unknown; retryCount: unknown; alertsRaisedCount: unknown } }>;

/** Contract-checking wrapper for NotificationDispatcherSystem.attemptDelivery (async). */
export function wrapNotificationDispatcherSystemAttemptDeliveryAsync(impl: NotificationDispatcherSystemAttemptDeliveryAsyncImpl): (self: NotificationDispatcherSystem, requestId: string, channelId: string) => Promise<NotificationDispatcherSystem> {
  return async (self, requestId, channelId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.attemptDelivery] pre violated: requestId <> null");
    }
    if (!((channelId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.attemptDelivery] pre violated: channelId <> null");
    }
    if (!((self.retryCount <= self.allowedRetries))) {
      preViolations.push("[NotificationDispatcherSystem.attemptDelivery] pre violated: self.retryCount <= self.allowedRetries");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.deliveryCount": self.deliveryCount,
      "self.retryCount": self.retryCount,
      "self.alertsRaisedCount": self.alertsRaisedCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, channelId);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if result then
            self.deliveryCount = self.deliveryCount@pre + 1
          else
            if self.retryCount@pre < self.allowedRetries then
              self.retryCount = self.retryCount@pre + 1
            else
              self.alertsRaisedCount = self.alertsRaisedCount@pre + 1
            endif
          endif — unbound variable 'result'
      if (!((__result.self.retryCount <= __result.self.allowedRetries))) {
        postViolations.push("[NotificationDispatcherSystem.attemptDelivery] post violated: self.retryCount <= self.allowedRetries");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystem.escalateFailure. User supplies this. */
export type NotificationDispatcherSystemEscalateFailureImpl = (self: NotificationDispatcherSystem, requestId: string, channelId: string) => { self: NotificationDispatcherSystem; modified: {} };

/** Contract-checking wrapper for NotificationDispatcherSystem.escalateFailure. */
export function wrapNotificationDispatcherSystemEscalateFailure(impl: NotificationDispatcherSystemEscalateFailureImpl): (self: NotificationDispatcherSystem, requestId: string, channelId: string) => NotificationDispatcherSystem {
  return (self, requestId, channelId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.escalateFailure] pre violated: requestId <> null");
    }
    if (!((channelId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.escalateFailure] pre violated: channelId <> null");
    }
    if (!((self.alertsRaisedCount > 0))) {
      preViolations.push("[NotificationDispatcherSystem.escalateFailure] pre violated: self.alertsRaisedCount > 0");
    }
    if (!(!((self.deliveryCount > 0)))) {
      preViolations.push("[NotificationDispatcherSystem.escalateFailure] pre violated: not (self.deliveryCount > 0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestId, channelId);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for NotificationDispatcherSystem.escalateFailure (async). User supplies this. */
export type NotificationDispatcherSystemEscalateFailureAsyncImpl = (self: NotificationDispatcherSystem, requestId: string, channelId: string) => Promise<{ self: NotificationDispatcherSystem; modified: {} }>;

/** Contract-checking wrapper for NotificationDispatcherSystem.escalateFailure (async). */
export function wrapNotificationDispatcherSystemEscalateFailureAsync(impl: NotificationDispatcherSystemEscalateFailureAsyncImpl): (self: NotificationDispatcherSystem, requestId: string, channelId: string) => Promise<NotificationDispatcherSystem> {
  return async (self, requestId, channelId) => {
    const preViolations: string[] = [];
    if (!((requestId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.escalateFailure] pre violated: requestId <> null");
    }
    if (!((channelId !== null))) {
      preViolations.push("[NotificationDispatcherSystem.escalateFailure] pre violated: channelId <> null");
    }
    if (!((self.alertsRaisedCount > 0))) {
      preViolations.push("[NotificationDispatcherSystem.escalateFailure] pre violated: self.alertsRaisedCount > 0");
    }
    if (!(!((self.deliveryCount > 0)))) {
      preViolations.push("[NotificationDispatcherSystem.escalateFailure] pre violated: not (self.deliveryCount > 0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestId, channelId);
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}


// Helper function to recursively deep clone self states for transactional rollback
function __cloneSelf(obj: any): any {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Set) {
    return new Set(Array.from(obj).map(__cloneSelf));
  }
  if (Array.isArray(obj)) {
    return obj.map(__cloneSelf);
  }
  const copy = {} as any;
  for (const k of Object.keys(obj)) {
    copy[k] = __cloneSelf(obj[k]);
  }
  return copy;
}


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

