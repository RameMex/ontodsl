// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
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
/** Identity type for ChatModerationSystem. Runtime: string. Compile-time: branded. */
export type ChatModerationSystemId = string & { readonly __brand: "ChatModerationSystemId" };

// ─── Interfaces ───

/** @stereotype <<Category>> */
export interface DsaArt14Compliant {
  readonly dsaStatementOfReasons: string;
  readonly dsaRedressMechanism: string;
  readonly dsaModerationFrequency: string;
}

/** @stereotype <<Category>> */
export interface GdprArticle5DataMinimisation {
  readonly gdprDataCategoriesProcessed: ReadonlySet<string>;
  readonly gdprProcessingPurpose: string;
}

/** @stereotype <<Category>> */
export interface TrustSafetyPolicyCompliant {
  readonly tsPolicyVersion: string;
  readonly tsPolicyEffectiveDate: string;
  readonly tsPolicyBodyUrl: string;
}

/** @stereotype <<Subkind>> */
export interface ChatModerationSystemFormalized extends ChatModerationSystem {
  readonly dsaStatementOfReasons: string;
  readonly dsaRedressMechanism: string;
  readonly dsaModerationFrequency: string;
  readonly gdprDataCategoriesProcessed: ReadonlySet<string>;
  readonly gdprProcessingPurpose: string;
  readonly tsPolicyVersion: string;
  readonly tsPolicyEffectiveDate: string;
  readonly tsPolicyBodyUrl: string;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly assumptionText: string;
  readonly responsibleParty: string;
  readonly statusAtFormalization: string;
}

/** @stereotype <<Category>> */
export interface PlausibleClassifierConfidence {
}

/** @stereotype <<Category>> */
export interface NonEmptyMessageBody {
}

/** @stereotype <<Category>> */
export interface BoundedMessageLength {
}

/** @stereotype <<Category>> */
export interface ValidModerationDecisionOutcome {
}

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

/** @stereotype <<Kind>> */
export interface ChatModerationSystem extends HighConfidenceHideConstraints, DecisionRecordingConstraints, PendingReviewConstraints {
  readonly systemId: ChatModerationSystemId;
  readonly p95ReviewHours: number;
  readonly inFlightMessages: ReadonlySet<Message>;
  readonly pendingHiddenMessages: ReadonlySet<Message>;
  readonly moderationDecisions: ReadonlySet<ModerationDecision>;
  readonly classifierAvailable: boolean;
}


// ─── Factory functions ───

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  assumptionText: string;
  responsibleParty: string;
  statusAtFormalization: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    assumptionText: data.assumptionText,
    responsibleParty: data.responsibleParty,
    statusAtFormalization: data.statusAtFormalization,
  };
}

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

export function makeChatModerationSystem(data: {
  systemId: string;
  p95ReviewHours: number;
  inFlightMessages: ReadonlySet<Message>;
  pendingHiddenMessages: ReadonlySet<Message>;
  moderationDecisions: ReadonlySet<ModerationDecision>;
  classifierAvailable: boolean;
}): ChatModerationSystem {
  return {
    systemId: data.systemId as ChatModerationSystemId,
    p95ReviewHours: data.p95ReviewHours,
    inFlightMessages: data.inFlightMessages,
    pendingHiddenMessages: data.pendingHiddenMessages,
    moderationDecisions: data.moderationDecisions,
    classifierAvailable: data.classifierAvailable,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for DsaArt14Compliant. Returns empty array when valid. */
export function validateDsaArt14Compliant(instance: DsaArt14Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dsaStatementOfReasons !== null))) {
    violations.push("[DsaArt14Compliant] invariant violated: self.dsaStatementOfReasons <> null");
  }
  if (!((instance.dsaRedressMechanism !== null))) {
    violations.push("[DsaArt14Compliant] invariant violated: self.dsaRedressMechanism <> null");
  }
  if (!((instance.dsaModerationFrequency !== null))) {
    violations.push("[DsaArt14Compliant] invariant violated: self.dsaModerationFrequency <> null");
  }
  return violations;
}

/** Runtime invariant check for GdprArticle5DataMinimisation. Returns empty array when valid. */
export function validateGdprArticle5DataMinimisation(instance: GdprArticle5DataMinimisation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.gdprProcessingPurpose !== null))) {
    violations.push("[GdprArticle5DataMinimisation] invariant violated: self.gdprProcessingPurpose <> null");
  }
  if (!(((instance.gdprDataCategoriesProcessed).size >= 1))) {
    violations.push("[GdprArticle5DataMinimisation] invariant violated: self.gdprDataCategoriesProcessed->size() >= 1");
  }
  return violations;
}

/** Runtime invariant check for TrustSafetyPolicyCompliant. Returns empty array when valid. */
export function validateTrustSafetyPolicyCompliant(instance: TrustSafetyPolicyCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.tsPolicyVersion !== null))) {
    violations.push("[TrustSafetyPolicyCompliant] invariant violated: self.tsPolicyVersion <> null");
  }
  if (!((instance.tsPolicyEffectiveDate !== null))) {
    violations.push("[TrustSafetyPolicyCompliant] invariant violated: self.tsPolicyEffectiveDate <> null");
  }
  return violations;
}

/** Runtime invariant check for ChatModerationSystemFormalized. Returns empty array when valid. */
export function validateChatModerationSystemFormalized(instance: ChatModerationSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dsaStatementOfReasons !== null))) {
    violations.push("[ChatModerationSystemFormalized] invariant violated: self.dsaStatementOfReasons <> null");
  }
  if (!((instance.dsaRedressMechanism !== null))) {
    violations.push("[ChatModerationSystemFormalized] invariant violated: self.dsaRedressMechanism <> null");
  }
  if (!((instance.dsaModerationFrequency !== null))) {
    violations.push("[ChatModerationSystemFormalized] invariant violated: self.dsaModerationFrequency <> null");
  }
  if (!((instance.gdprProcessingPurpose !== null))) {
    violations.push("[ChatModerationSystemFormalized] invariant violated: self.gdprProcessingPurpose <> null");
  }
  if (!(((instance.gdprDataCategoriesProcessed).size >= 1))) {
    violations.push("[ChatModerationSystemFormalized] invariant violated: self.gdprDataCategoriesProcessed->size() >= 1");
  }
  if (!((instance.tsPolicyVersion !== null))) {
    violations.push("[ChatModerationSystemFormalized] invariant violated: self.tsPolicyVersion <> null");
  }
  if (!((instance.tsPolicyEffectiveDate !== null))) {
    violations.push("[ChatModerationSystemFormalized] invariant violated: self.tsPolicyEffectiveDate <> null");
  }
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
  if (!((instance.assumptionText !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionText <> null");
  }
  if (!((instance.responsibleParty !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.responsibleParty <> null");
  }
  if (!((instance.statusAtFormalization !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.statusAtFormalization <> null");
  }
  return violations;
}

/** Runtime invariant check for PlausibleClassifierConfidence. Returns empty array when valid. */
export function validatePlausibleClassifierConfidence(instance: PlausibleClassifierConfidence): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.confidence >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.confidence <= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for NonEmptyMessageBody. Returns empty array when valid. */
export function validateNonEmptyMessageBody(instance: NonEmptyMessageBody): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.messageBody <> null — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for BoundedMessageLength. Returns empty array when valid. */
export function validateBoundedMessageLength(instance: BoundedMessageLength): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[BoundedMessageLength] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for ValidModerationDecisionOutcome. Returns empty array when valid. */
export function validateValidModerationDecisionOutcome(instance: ValidModerationDecisionOutcome): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.outcome = 'allowed' or bearer.outcome = 'hidden' — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.classifierConfidence >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.classifierConfidence <= 1.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

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

/** Runtime invariant check for ChatModerationSystem. Returns empty array when valid. */
export function validateChatModerationSystem(instance: ChatModerationSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[ChatModerationSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.p95ReviewHours > 0))) {
    violations.push("[ChatModerationSystem] invariant violated: self.p95ReviewHours > 0.0");
  }
  if (!((instance.p95ReviewHours <= 4))) {
    violations.push("[ChatModerationSystem] invariant violated: self.p95ReviewHours <= 4.0");
  }
  if (!(((instance.inFlightMessages).size >= 0))) {
    violations.push("[ChatModerationSystem] invariant violated: self.inFlightMessages->size() >= 0");
  }
  if (!(((instance.pendingHiddenMessages).size >= 0))) {
    violations.push("[ChatModerationSystem] invariant violated: self.pendingHiddenMessages->size() >= 0");
  }
  if (!(((instance.moderationDecisions).size >= 0))) {
    violations.push("[ChatModerationSystem] invariant violated: self.moderationDecisions->size() >= 0");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for ChatModerationSystemFormalized.rejectDuplicateMessage. User supplies this. */
export type ChatModerationSystemFormalizedRejectDuplicateMessageImpl = (self: ChatModerationSystemFormalized, msg: Message) => { self: ChatModerationSystemFormalized; modified: {} };

/** Contract-checking wrapper for ChatModerationSystemFormalized.rejectDuplicateMessage. */
export function wrapChatModerationSystemFormalizedRejectDuplicateMessage(impl: ChatModerationSystemFormalizedRejectDuplicateMessageImpl): (self: ChatModerationSystemFormalized, msg: Message) => ChatModerationSystemFormalized {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystemFormalized.rejectDuplicateMessage] pre violated: msg <> null");
    }
    if (!(((self.inFlightMessages).has(msg) || (self.pendingHiddenMessages).has(msg)))) {
      preViolations.push("[ChatModerationSystemFormalized.rejectDuplicateMessage] pre violated: self.inFlightMessages->includes(msg)\n         or self.pendingHiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
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

/** Impl signature for ChatModerationSystemFormalized.rejectDuplicateMessage (async). User supplies this. */
export type ChatModerationSystemFormalizedRejectDuplicateMessageAsyncImpl = (self: ChatModerationSystemFormalized, msg: Message) => Promise<{ self: ChatModerationSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for ChatModerationSystemFormalized.rejectDuplicateMessage (async). */
export function wrapChatModerationSystemFormalizedRejectDuplicateMessageAsync(impl: ChatModerationSystemFormalizedRejectDuplicateMessageAsyncImpl): (self: ChatModerationSystemFormalized, msg: Message) => Promise<ChatModerationSystemFormalized> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystemFormalized.rejectDuplicateMessage] pre violated: msg <> null");
    }
    if (!(((self.inFlightMessages).has(msg) || (self.pendingHiddenMessages).has(msg)))) {
      preViolations.push("[ChatModerationSystemFormalized.rejectDuplicateMessage] pre violated: self.inFlightMessages->includes(msg)\n         or self.pendingHiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
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

/** Impl signature for ChatModerationSystemFormalized.rejectNullConfidence. User supplies this. */
export type ChatModerationSystemFormalizedRejectNullConfidenceImpl = (self: ChatModerationSystemFormalized, msg: Message, confidence: number) => { self: ChatModerationSystemFormalized; modified: {} };

/** Contract-checking wrapper for ChatModerationSystemFormalized.rejectNullConfidence. */
export function wrapChatModerationSystemFormalizedRejectNullConfidence(impl: ChatModerationSystemFormalizedRejectNullConfidenceImpl): (self: ChatModerationSystemFormalized, msg: Message, confidence: number) => ChatModerationSystemFormalized {
  return (self, msg, confidence) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystemFormalized.rejectNullConfidence] pre violated: msg <> null");
    }
    if (!(((confidence === null) || (confidence !== confidence)))) {
      preViolations.push("[ChatModerationSystemFormalized.rejectNullConfidence] pre violated: confidence = null or (confidence <> confidence)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg, confidence);
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

/** Impl signature for ChatModerationSystemFormalized.rejectNullConfidence (async). User supplies this. */
export type ChatModerationSystemFormalizedRejectNullConfidenceAsyncImpl = (self: ChatModerationSystemFormalized, msg: Message, confidence: number) => Promise<{ self: ChatModerationSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for ChatModerationSystemFormalized.rejectNullConfidence (async). */
export function wrapChatModerationSystemFormalizedRejectNullConfidenceAsync(impl: ChatModerationSystemFormalizedRejectNullConfidenceAsyncImpl): (self: ChatModerationSystemFormalized, msg: Message, confidence: number) => Promise<ChatModerationSystemFormalized> {
  return async (self, msg, confidence) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystemFormalized.rejectNullConfidence] pre violated: msg <> null");
    }
    if (!(((confidence === null) || (confidence !== confidence)))) {
      preViolations.push("[ChatModerationSystemFormalized.rejectNullConfidence] pre violated: confidence = null or (confidence <> confidence)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg, confidence);
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

/** Impl signature for ChatModerationSystem.submitMessage. User supplies this. */
export type ChatModerationSystemSubmitMessageImpl = (self: ChatModerationSystem, msg: Message, classifierConfidence: number) => { self: ChatModerationSystem; modified: { pendingHiddenMessages: unknown; inFlightMessages: unknown; moderationDecisions: unknown } };

/** Contract-checking wrapper for ChatModerationSystem.submitMessage. */
export function wrapChatModerationSystemSubmitMessage(impl: ChatModerationSystemSubmitMessageImpl): (self: ChatModerationSystem, msg: Message, classifierConfidence: number) => ChatModerationSystem {
  return (self, msg, classifierConfidence) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: msg.messageId <> null");
    }
    if (!((classifierConfidence >= 0))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: classifierConfidence >= 0.0");
    }
    if (!((classifierConfidence <= 1))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: classifierConfidence <= 1.0");
    }
    if (!((self.classifierAvailable === true))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: self.classifierAvailable = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.p95ReviewHours": self.p95ReviewHours,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg, classifierConfidence);
      const postViolations: string[] = [];
      if (!((((classifierConfidence >= 0.95)) ? ((__result.self.pendingHiddenMessages).has(msg)) : (!((__result.self.pendingHiddenMessages).has(msg)))))) {
        postViolations.push("[ChatModerationSystem.submitMessage] post violated: if classifierConfidence >= 0.95 then\n            self.pendingHiddenMessages->includes(msg)\n          else\n            not self.pendingHiddenMessages->includes(msg)\n          endif");
      }
      if (!((((classifierConfidence >= 0.95)) ? ((msg.riskLevel === "pending")) : ((msg.riskLevel === "low"))))) {
        postViolations.push("[ChatModerationSystem.submitMessage] post violated: if classifierConfidence >= 0.95 then\n            msg.riskLevel = 'pending'\n          else\n            msg.riskLevel = 'low'\n          endif");
      }
      if (!(Array.from(__result.self.moderationDecisions).some((__x) => (((((__x.outcome === (((classifierConfidence >= 0.95)) ? ("hidden") : ("allowed"))) && (__x.classifierConfidence === classifierConfidence)) && (__x.thresholdUsed === 0.95)) && (__x.timestamp !== null)))))) {
        postViolations.push("[ChatModerationSystem.submitMessage] post violated: self.moderationDecisions->exists(d |\n            d.outcome = (if classifierConfidence >= 0.95 then 'hidden' else 'allowed' endif)\n            and\n            d.classifierConfidence = classifierConfidence\n            and\n            d.thresholdUsed = 0.95\n            and\n            d.timestamp <> null\n          )");
      }
      if (!((__result.self.p95ReviewHours === __pre["self.p95ReviewHours"]))) {
        postViolations.push("[ChatModerationSystem.submitMessage] post violated: self.p95ReviewHours = self.p95ReviewHours@pre");
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

/** Impl signature for ChatModerationSystem.submitMessage (async). User supplies this. */
export type ChatModerationSystemSubmitMessageAsyncImpl = (self: ChatModerationSystem, msg: Message, classifierConfidence: number) => Promise<{ self: ChatModerationSystem; modified: { pendingHiddenMessages: unknown; inFlightMessages: unknown; moderationDecisions: unknown } }>;

/** Contract-checking wrapper for ChatModerationSystem.submitMessage (async). */
export function wrapChatModerationSystemSubmitMessageAsync(impl: ChatModerationSystemSubmitMessageAsyncImpl): (self: ChatModerationSystem, msg: Message, classifierConfidence: number) => Promise<ChatModerationSystem> {
  return async (self, msg, classifierConfidence) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: msg.messageId <> null");
    }
    if (!((classifierConfidence >= 0))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: classifierConfidence >= 0.0");
    }
    if (!((classifierConfidence <= 1))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: classifierConfidence <= 1.0");
    }
    if (!((self.classifierAvailable === true))) {
      preViolations.push("[ChatModerationSystem.submitMessage] pre violated: self.classifierAvailable = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.p95ReviewHours": self.p95ReviewHours,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg, classifierConfidence);
      const postViolations: string[] = [];
      if (!((((classifierConfidence >= 0.95)) ? ((__result.self.pendingHiddenMessages).has(msg)) : (!((__result.self.pendingHiddenMessages).has(msg)))))) {
        postViolations.push("[ChatModerationSystem.submitMessage] post violated: if classifierConfidence >= 0.95 then\n            self.pendingHiddenMessages->includes(msg)\n          else\n            not self.pendingHiddenMessages->includes(msg)\n          endif");
      }
      if (!((((classifierConfidence >= 0.95)) ? ((msg.riskLevel === "pending")) : ((msg.riskLevel === "low"))))) {
        postViolations.push("[ChatModerationSystem.submitMessage] post violated: if classifierConfidence >= 0.95 then\n            msg.riskLevel = 'pending'\n          else\n            msg.riskLevel = 'low'\n          endif");
      }
      if (!(Array.from(__result.self.moderationDecisions).some((__x) => (((((__x.outcome === (((classifierConfidence >= 0.95)) ? ("hidden") : ("allowed"))) && (__x.classifierConfidence === classifierConfidence)) && (__x.thresholdUsed === 0.95)) && (__x.timestamp !== null)))))) {
        postViolations.push("[ChatModerationSystem.submitMessage] post violated: self.moderationDecisions->exists(d |\n            d.outcome = (if classifierConfidence >= 0.95 then 'hidden' else 'allowed' endif)\n            and\n            d.classifierConfidence = classifierConfidence\n            and\n            d.thresholdUsed = 0.95\n            and\n            d.timestamp <> null\n          )");
      }
      if (!((__result.self.p95ReviewHours === __pre["self.p95ReviewHours"]))) {
        postViolations.push("[ChatModerationSystem.submitMessage] post violated: self.p95ReviewHours = self.p95ReviewHours@pre");
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

/** Impl signature for ChatModerationSystem.releaseMessage. User supplies this. */
export type ChatModerationSystemReleaseMessageImpl = (self: ChatModerationSystem, msg: Message) => { self: ChatModerationSystem; modified: { pendingHiddenMessages: unknown } };

/** Contract-checking wrapper for ChatModerationSystem.releaseMessage. */
export function wrapChatModerationSystemReleaseMessage(impl: ChatModerationSystemReleaseMessageImpl): (self: ChatModerationSystem, msg: Message) => ChatModerationSystem {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystem.releaseMessage] pre violated: msg <> null");
    }
    if (!((self.pendingHiddenMessages).has(msg))) {
      preViolations.push("[ChatModerationSystem.releaseMessage] pre violated: self.pendingHiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingHiddenMessages).has(msg)))) {
        postViolations.push("[ChatModerationSystem.releaseMessage] post violated: not self.pendingHiddenMessages->includes(msg)");
      }
      if (!((msg.riskLevel === "low"))) {
        postViolations.push("[ChatModerationSystem.releaseMessage] post violated: msg.riskLevel = 'low'");
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

/** Impl signature for ChatModerationSystem.releaseMessage (async). User supplies this. */
export type ChatModerationSystemReleaseMessageAsyncImpl = (self: ChatModerationSystem, msg: Message) => Promise<{ self: ChatModerationSystem; modified: { pendingHiddenMessages: unknown } }>;

/** Contract-checking wrapper for ChatModerationSystem.releaseMessage (async). */
export function wrapChatModerationSystemReleaseMessageAsync(impl: ChatModerationSystemReleaseMessageAsyncImpl): (self: ChatModerationSystem, msg: Message) => Promise<ChatModerationSystem> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystem.releaseMessage] pre violated: msg <> null");
    }
    if (!((self.pendingHiddenMessages).has(msg))) {
      preViolations.push("[ChatModerationSystem.releaseMessage] pre violated: self.pendingHiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingHiddenMessages).has(msg)))) {
        postViolations.push("[ChatModerationSystem.releaseMessage] post violated: not self.pendingHiddenMessages->includes(msg)");
      }
      if (!((msg.riskLevel === "low"))) {
        postViolations.push("[ChatModerationSystem.releaseMessage] post violated: msg.riskLevel = 'low'");
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

/** Impl signature for ChatModerationSystem.confirmMessage. User supplies this. */
export type ChatModerationSystemConfirmMessageImpl = (self: ChatModerationSystem, msg: Message) => { self: ChatModerationSystem; modified: { pendingHiddenMessages: unknown } };

/** Contract-checking wrapper for ChatModerationSystem.confirmMessage. */
export function wrapChatModerationSystemConfirmMessage(impl: ChatModerationSystemConfirmMessageImpl): (self: ChatModerationSystem, msg: Message) => ChatModerationSystem {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystem.confirmMessage] pre violated: msg <> null");
    }
    if (!((self.pendingHiddenMessages).has(msg))) {
      preViolations.push("[ChatModerationSystem.confirmMessage] pre violated: self.pendingHiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingHiddenMessages).has(msg)))) {
        postViolations.push("[ChatModerationSystem.confirmMessage] post violated: not self.pendingHiddenMessages->includes(msg)");
      }
      if (!((msg.riskLevel === "high"))) {
        postViolations.push("[ChatModerationSystem.confirmMessage] post violated: msg.riskLevel = 'high'");
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

/** Impl signature for ChatModerationSystem.confirmMessage (async). User supplies this. */
export type ChatModerationSystemConfirmMessageAsyncImpl = (self: ChatModerationSystem, msg: Message) => Promise<{ self: ChatModerationSystem; modified: { pendingHiddenMessages: unknown } }>;

/** Contract-checking wrapper for ChatModerationSystem.confirmMessage (async). */
export function wrapChatModerationSystemConfirmMessageAsync(impl: ChatModerationSystemConfirmMessageAsyncImpl): (self: ChatModerationSystem, msg: Message) => Promise<ChatModerationSystem> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystem.confirmMessage] pre violated: msg <> null");
    }
    if (!((self.pendingHiddenMessages).has(msg))) {
      preViolations.push("[ChatModerationSystem.confirmMessage] pre violated: self.pendingHiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.pendingHiddenMessages).has(msg)))) {
        postViolations.push("[ChatModerationSystem.confirmMessage] post violated: not self.pendingHiddenMessages->includes(msg)");
      }
      if (!((msg.riskLevel === "high"))) {
        postViolations.push("[ChatModerationSystem.confirmMessage] post violated: msg.riskLevel = 'high'");
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

/** Impl signature for ChatModerationSystem.escalateUnreviewed. User supplies this. */
export type ChatModerationSystemEscalateUnreviewedImpl = (self: ChatModerationSystem, msg: Message) => { self: ChatModerationSystem; modified: { pendingHiddenMessages: unknown } };

/** Contract-checking wrapper for ChatModerationSystem.escalateUnreviewed. */
export function wrapChatModerationSystemEscalateUnreviewed(impl: ChatModerationSystemEscalateUnreviewedImpl): (self: ChatModerationSystem, msg: Message) => ChatModerationSystem {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystem.escalateUnreviewed] pre violated: msg <> null");
    }
    if (!((self.pendingHiddenMessages).has(msg))) {
      preViolations.push("[ChatModerationSystem.escalateUnreviewed] pre violated: self.pendingHiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!((__result.self.pendingHiddenMessages).has(msg))) {
        postViolations.push("[ChatModerationSystem.escalateUnreviewed] post violated: self.pendingHiddenMessages->includes(msg)");
      }
      if (!((msg.riskLevel === "pending"))) {
        postViolations.push("[ChatModerationSystem.escalateUnreviewed] post violated: msg.riskLevel = 'pending'");
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

/** Impl signature for ChatModerationSystem.escalateUnreviewed (async). User supplies this. */
export type ChatModerationSystemEscalateUnreviewedAsyncImpl = (self: ChatModerationSystem, msg: Message) => Promise<{ self: ChatModerationSystem; modified: { pendingHiddenMessages: unknown } }>;

/** Contract-checking wrapper for ChatModerationSystem.escalateUnreviewed (async). */
export function wrapChatModerationSystemEscalateUnreviewedAsync(impl: ChatModerationSystemEscalateUnreviewedAsyncImpl): (self: ChatModerationSystem, msg: Message) => Promise<ChatModerationSystem> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ChatModerationSystem.escalateUnreviewed] pre violated: msg <> null");
    }
    if (!((self.pendingHiddenMessages).has(msg))) {
      preViolations.push("[ChatModerationSystem.escalateUnreviewed] pre violated: self.pendingHiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!((__result.self.pendingHiddenMessages).has(msg))) {
        postViolations.push("[ChatModerationSystem.escalateUnreviewed] post violated: self.pendingHiddenMessages->includes(msg)");
      }
      if (!((msg.riskLevel === "pending"))) {
        postViolations.push("[ChatModerationSystem.escalateUnreviewed] post violated: msg.riskLevel = 'pending'");
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

