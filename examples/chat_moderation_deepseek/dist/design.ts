// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for MessageIngestor. Runtime: string. Compile-time: branded. */
export type MessageIngestorId = string & { readonly __brand: "MessageIngestorId" };
/** Identity type for ClassifierService. Runtime: string. Compile-time: branded. */
export type ClassifierServiceId = string & { readonly __brand: "ClassifierServiceId" };
/** Identity type for DecisionEngine. Runtime: string. Compile-time: branded. */
export type DecisionEngineId = string & { readonly __brand: "DecisionEngineId" };
/** Identity type for DeliveryService. Runtime: string. Compile-time: branded. */
export type DeliveryServiceId = string & { readonly __brand: "DeliveryServiceId" };
/** Identity type for PendingReviewQueue. Runtime: string. Compile-time: branded. */
export type PendingReviewQueueId = string & { readonly __brand: "PendingReviewQueueId" };
/** Identity type for ModeratorInterface. Runtime: string. Compile-time: branded. */
export type ModeratorInterfaceId = string & { readonly __brand: "ModeratorInterfaceId" };
/** Identity type for EscalationService. Runtime: string. Compile-time: branded. */
export type EscalationServiceId = string & { readonly __brand: "EscalationServiceId" };
/** Identity type for AuditTrail. Runtime: string. Compile-time: branded. */
export type AuditTrailId = string & { readonly __brand: "AuditTrailId" };
/** Identity type for PipelineController. Runtime: string. Compile-time: branded. */
export type PipelineControllerId = string & { readonly __brand: "PipelineControllerId" };
/** Identity type for ClassificationChannel. Runtime: string. Compile-time: branded. */
export type ClassificationChannelId = string & { readonly __brand: "ClassificationChannelId" };
/** Identity type for ReviewBridge. Runtime: string. Compile-time: branded. */
export type ReviewBridgeId = string & { readonly __brand: "ReviewBridgeId" };
/** Identity type for DeliveryChannel. Runtime: string. Compile-time: branded. */
export type DeliveryChannelId = string & { readonly __brand: "DeliveryChannelId" };
/** Identity type for EscalationChannel. Runtime: string. Compile-time: branded. */
export type EscalationChannelId = string & { readonly __brand: "EscalationChannelId" };
/** Identity type for ModerationFlow. Runtime: string. Compile-time: branded. */
export type ModerationFlowId = string & { readonly __brand: "ModerationFlowId" };
/** Identity type for ReviewFlow. Runtime: string. Compile-time: branded. */
export type ReviewFlowId = string & { readonly __brand: "ReviewFlowId" };
/** Identity type for EscalationFlow. Runtime: string. Compile-time: branded. */
export type EscalationFlowId = string & { readonly __brand: "EscalationFlowId" };
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
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface MessageIngestor {
  readonly ingestorId: MessageIngestorId;
  readonly receivedMessages: ReadonlySet<Message>;
}

/** @stereotype <<Kind>> */
export interface ClassifierService {
  readonly classifierServiceId: ClassifierServiceId;
  readonly lastConfidence: number;
  readonly available: boolean;
}

/** @stereotype <<Kind>> */
export interface DecisionEngine {
  readonly engineId: DecisionEngineId;
  readonly threshold: number;
  readonly processedMessages: ReadonlySet<Message>;
}

/** @stereotype <<Kind>> */
export interface DeliveryService {
  readonly deliveryServiceId: DeliveryServiceId;
  readonly deliveredMessages: ReadonlySet<Message>;
}

/** @stereotype <<Kind>> */
export interface PendingReviewQueue {
  readonly queueId: PendingReviewQueueId;
  readonly hiddenMessages: ReadonlySet<Message>;
  readonly submissionTimestamps: ReadonlySet<string>;
}

/** @stereotype <<Kind>> */
export interface ModeratorInterface {
  readonly moderatorInterfaceId: ModeratorInterfaceId;
  readonly visiblePendingMessages: ReadonlySet<Message>;
  readonly assignedModerator: string;
}

/** @stereotype <<Kind>> */
export interface EscalationService {
  readonly escalationServiceId: EscalationServiceId;
  readonly slaDurationHours: number;
  readonly escalatedMessages: ReadonlySet<Message>;
}

/** @stereotype <<Kind>> */
export interface AuditTrail {
  readonly auditTrailId: AuditTrailId;
  readonly decisions: ReadonlySet<ModerationDecision>;
}

/** @stereotype <<Relator>> */
export interface PipelineController {
  readonly controllerId: PipelineControllerId;
  readonly currentMessage: Message;
}

/** @stereotype <<Relator>> */
export interface ClassificationChannel {
  readonly channelId: ClassificationChannelId;
}

/** @stereotype <<Relator>> */
export interface ReviewBridge {
  readonly bridgeId: ReviewBridgeId;
}

/** @stereotype <<Relator>> */
export interface DeliveryChannel {
  readonly channelId: DeliveryChannelId;
}

/** @stereotype <<Relator>> */
export interface EscalationChannel {
  readonly channelId: EscalationChannelId;
}

/** @stereotype <<Happening>> */
export interface ModerationFlow {
  readonly flowId: ModerationFlowId;
  readonly stepOrder: ReadonlySet<string>;
}

/** @stereotype <<Happening>> */
export interface ReviewFlow {
  readonly flowId: ReviewFlowId;
  readonly stepOrder: ReadonlySet<string>;
}

/** @stereotype <<Happening>> */
export interface EscalationFlow {
  readonly flowId: EscalationFlowId;
  readonly stepOrder: ReadonlySet<string>;
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


// ─── Factory functions ───

export function makeMessageIngestor(data: {
  ingestorId: string;
  receivedMessages: ReadonlySet<Message>;
}): MessageIngestor {
  return {
    ingestorId: data.ingestorId as MessageIngestorId,
    receivedMessages: data.receivedMessages,
  };
}

export function makeClassifierService(data: {
  classifierServiceId: string;
  lastConfidence: number;
  available: boolean;
}): ClassifierService {
  return {
    classifierServiceId: data.classifierServiceId as ClassifierServiceId,
    lastConfidence: data.lastConfidence,
    available: data.available,
  };
}

export function makeDecisionEngine(data: {
  engineId: string;
  threshold: number;
  processedMessages: ReadonlySet<Message>;
}): DecisionEngine {
  return {
    engineId: data.engineId as DecisionEngineId,
    threshold: data.threshold,
    processedMessages: data.processedMessages,
  };
}

export function makeDeliveryService(data: {
  deliveryServiceId: string;
  deliveredMessages: ReadonlySet<Message>;
}): DeliveryService {
  return {
    deliveryServiceId: data.deliveryServiceId as DeliveryServiceId,
    deliveredMessages: data.deliveredMessages,
  };
}

export function makePendingReviewQueue(data: {
  queueId: string;
  hiddenMessages: ReadonlySet<Message>;
  submissionTimestamps: ReadonlySet<string>;
}): PendingReviewQueue {
  return {
    queueId: data.queueId as PendingReviewQueueId,
    hiddenMessages: data.hiddenMessages,
    submissionTimestamps: data.submissionTimestamps,
  };
}

export function makeModeratorInterface(data: {
  moderatorInterfaceId: string;
  visiblePendingMessages: ReadonlySet<Message>;
  assignedModerator: string;
}): ModeratorInterface {
  return {
    moderatorInterfaceId: data.moderatorInterfaceId as ModeratorInterfaceId,
    visiblePendingMessages: data.visiblePendingMessages,
    assignedModerator: data.assignedModerator,
  };
}

export function makeEscalationService(data: {
  escalationServiceId: string;
  slaDurationHours: number;
  escalatedMessages: ReadonlySet<Message>;
}): EscalationService {
  return {
    escalationServiceId: data.escalationServiceId as EscalationServiceId,
    slaDurationHours: data.slaDurationHours,
    escalatedMessages: data.escalatedMessages,
  };
}

export function makeAuditTrail(data: {
  auditTrailId: string;
  decisions: ReadonlySet<ModerationDecision>;
}): AuditTrail {
  return {
    auditTrailId: data.auditTrailId as AuditTrailId,
    decisions: data.decisions,
  };
}

export function makePipelineController(data: {
  controllerId: string;
  currentMessage: Message;
}): PipelineController {
  return {
    controllerId: data.controllerId as PipelineControllerId,
    currentMessage: data.currentMessage,
  };
}

export function makeClassificationChannel(data: {
  channelId: string;
}): ClassificationChannel {
  return {
    channelId: data.channelId as ClassificationChannelId,
  };
}

export function makeReviewBridge(data: {
  bridgeId: string;
}): ReviewBridge {
  return {
    bridgeId: data.bridgeId as ReviewBridgeId,
  };
}

export function makeDeliveryChannel(data: {
  channelId: string;
}): DeliveryChannel {
  return {
    channelId: data.channelId as DeliveryChannelId,
  };
}

export function makeEscalationChannel(data: {
  channelId: string;
}): EscalationChannel {
  return {
    channelId: data.channelId as EscalationChannelId,
  };
}

export function makeModerationFlow(data: {
  flowId: string;
  stepOrder: ReadonlySet<string>;
}): ModerationFlow {
  return {
    flowId: data.flowId as ModerationFlowId,
    stepOrder: data.stepOrder,
  };
}

export function makeReviewFlow(data: {
  flowId: string;
  stepOrder: ReadonlySet<string>;
}): ReviewFlow {
  return {
    flowId: data.flowId as ReviewFlowId,
    stepOrder: data.stepOrder,
  };
}

export function makeEscalationFlow(data: {
  flowId: string;
  stepOrder: ReadonlySet<string>;
}): EscalationFlow {
  return {
    flowId: data.flowId as EscalationFlowId,
    stepOrder: data.stepOrder,
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


// ─── Runtime invariant validators ───

/** Runtime invariant check for MessageIngestor. Returns empty array when valid. */
export function validateMessageIngestor(instance: MessageIngestor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ingestorId !== null))) {
    violations.push("[MessageIngestor] invariant violated: self.ingestorId <> null");
  }
  return violations;
}

/** Runtime invariant check for ClassifierService. Returns empty array when valid. */
export function validateClassifierService(instance: ClassifierService): readonly string[] {
  const violations: string[] = [];
  if (!((instance.classifierServiceId !== null))) {
    violations.push("[ClassifierService] invariant violated: self.classifierServiceId <> null");
  }
  if (!((instance.lastConfidence >= 0))) {
    violations.push("[ClassifierService] invariant violated: self.lastConfidence >= 0.0");
  }
  if (!((instance.lastConfidence <= 1))) {
    violations.push("[ClassifierService] invariant violated: self.lastConfidence <= 1.0");
  }
  if (!(((instance.available === true) || (instance.available === false)))) {
    violations.push("[ClassifierService] invariant violated: self.available = true or self.available = false");
  }
  return violations;
}

/** Runtime invariant check for DecisionEngine. Returns empty array when valid. */
export function validateDecisionEngine(instance: DecisionEngine): readonly string[] {
  const violations: string[] = [];
  if (!((instance.engineId !== null))) {
    violations.push("[DecisionEngine] invariant violated: self.engineId <> null");
  }
  if (!((instance.threshold >= 0))) {
    violations.push("[DecisionEngine] invariant violated: self.threshold >= 0.0");
  }
  if (!((instance.threshold <= 1))) {
    violations.push("[DecisionEngine] invariant violated: self.threshold <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for DeliveryService. Returns empty array when valid. */
export function validateDeliveryService(instance: DeliveryService): readonly string[] {
  const violations: string[] = [];
  if (!((instance.deliveryServiceId !== null))) {
    violations.push("[DeliveryService] invariant violated: self.deliveryServiceId <> null");
  }
  return violations;
}

/** Runtime invariant check for PendingReviewQueue. Returns empty array when valid. */
export function validatePendingReviewQueue(instance: PendingReviewQueue): readonly string[] {
  const violations: string[] = [];
  if (!((instance.queueId !== null))) {
    violations.push("[PendingReviewQueue] invariant violated: self.queueId <> null");
  }
  if (!(((instance.hiddenMessages).size === (instance.submissionTimestamps).size))) {
    violations.push("[PendingReviewQueue] invariant violated: self.hiddenMessages->size() = self.submissionTimestamps->size()");
  }
  return violations;
}

/** Runtime invariant check for ModeratorInterface. Returns empty array when valid. */
export function validateModeratorInterface(instance: ModeratorInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.moderatorInterfaceId !== null))) {
    violations.push("[ModeratorInterface] invariant violated: self.moderatorInterfaceId <> null");
  }
  return violations;
}

/** Runtime invariant check for EscalationService. Returns empty array when valid. */
export function validateEscalationService(instance: EscalationService): readonly string[] {
  const violations: string[] = [];
  if (!((instance.escalationServiceId !== null))) {
    violations.push("[EscalationService] invariant violated: self.escalationServiceId <> null");
  }
  if (!((instance.slaDurationHours === 4))) {
    violations.push("[EscalationService] invariant violated: self.slaDurationHours = 4.0");
  }
  return violations;
}

/** Runtime invariant check for AuditTrail. Returns empty array when valid. */
export function validateAuditTrail(instance: AuditTrail): readonly string[] {
  const violations: string[] = [];
  if (!((instance.auditTrailId !== null))) {
    violations.push("[AuditTrail] invariant violated: self.auditTrailId <> null");
  }
  return violations;
}

/** Runtime invariant check for PipelineController. Returns empty array when valid. */
export function validatePipelineController(instance: PipelineController): readonly string[] {
  const violations: string[] = [];
  if (!((instance.controllerId !== null))) {
    violations.push("[PipelineController] invariant violated: self.controllerId <> null");
  }
  return violations;
}

/** Runtime invariant check for ClassificationChannel. Returns empty array when valid. */
export function validateClassificationChannel(instance: ClassificationChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[ClassificationChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for ReviewBridge. Returns empty array when valid. */
export function validateReviewBridge(instance: ReviewBridge): readonly string[] {
  const violations: string[] = [];
  if (!((instance.bridgeId !== null))) {
    violations.push("[ReviewBridge] invariant violated: self.bridgeId <> null");
  }
  return violations;
}

/** Runtime invariant check for DeliveryChannel. Returns empty array when valid. */
export function validateDeliveryChannel(instance: DeliveryChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[DeliveryChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for EscalationChannel. Returns empty array when valid. */
export function validateEscalationChannel(instance: EscalationChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[EscalationChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for ModerationFlow. Returns empty array when valid. */
export function validateModerationFlow(instance: ModerationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ModerationFlow] invariant violated: self.flowId <> null");
  }
  if (!(((instance.stepOrder).size >= 1))) {
    violations.push("[ModerationFlow] invariant violated: self.stepOrder->size() >= 1");
  }
  return violations;
}

/** Runtime invariant check for ReviewFlow. Returns empty array when valid. */
export function validateReviewFlow(instance: ReviewFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ReviewFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for EscalationFlow. Returns empty array when valid. */
export function validateEscalationFlow(instance: EscalationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[EscalationFlow] invariant violated: self.flowId <> null");
  }
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


// ─── Event handler wrappers ───

/** Impl signature for MessageIngestor.acceptMessage. User supplies this. */
export type MessageIngestorAcceptMessageImpl = (self: MessageIngestor, msg: Message) => { self: MessageIngestor; modified: { receivedMessages: unknown } };

/** Contract-checking wrapper for MessageIngestor.acceptMessage. */
export function wrapMessageIngestorAcceptMessage(impl: MessageIngestorAcceptMessageImpl): (self: MessageIngestor, msg: Message) => MessageIngestor {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[MessageIngestor.acceptMessage] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[MessageIngestor.acceptMessage] pre violated: msg.messageId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!((__result.self.receivedMessages).has(msg))) {
        postViolations.push("[MessageIngestor.acceptMessage] post violated: self.receivedMessages->includes(msg)");
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

/** Impl signature for MessageIngestor.acceptMessage (async). User supplies this. */
export type MessageIngestorAcceptMessageAsyncImpl = (self: MessageIngestor, msg: Message) => Promise<{ self: MessageIngestor; modified: { receivedMessages: unknown } }>;

/** Contract-checking wrapper for MessageIngestor.acceptMessage (async). */
export function wrapMessageIngestorAcceptMessageAsync(impl: MessageIngestorAcceptMessageAsyncImpl): (self: MessageIngestor, msg: Message) => Promise<MessageIngestor> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[MessageIngestor.acceptMessage] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[MessageIngestor.acceptMessage] pre violated: msg.messageId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!((__result.self.receivedMessages).has(msg))) {
        postViolations.push("[MessageIngestor.acceptMessage] post violated: self.receivedMessages->includes(msg)");
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

/** Impl signature for ClassifierService.classifyMessage. User supplies this. */
export type ClassifierServiceClassifyMessageImpl = (self: ClassifierService, msg: Message) => { self: ClassifierService; modified: { lastConfidence: unknown } };

/** Contract-checking wrapper for ClassifierService.classifyMessage. */
export function wrapClassifierServiceClassifyMessage(impl: ClassifierServiceClassifyMessageImpl): (self: ClassifierService, msg: Message) => ClassifierService {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((self.available === true))) {
      preViolations.push("[ClassifierService.classifyMessage] pre violated: self.available = true");
    }
    if (!((msg !== null))) {
      preViolations.push("[ClassifierService.classifyMessage] pre violated: msg <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= 1.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastConfidence = result — unbound variable 'result'
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

/** Impl signature for ClassifierService.classifyMessage (async). User supplies this. */
export type ClassifierServiceClassifyMessageAsyncImpl = (self: ClassifierService, msg: Message) => Promise<{ self: ClassifierService; modified: { lastConfidence: unknown } }>;

/** Contract-checking wrapper for ClassifierService.classifyMessage (async). */
export function wrapClassifierServiceClassifyMessageAsync(impl: ClassifierServiceClassifyMessageAsyncImpl): (self: ClassifierService, msg: Message) => Promise<ClassifierService> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((self.available === true))) {
      preViolations.push("[ClassifierService.classifyMessage] pre violated: self.available = true");
    }
    if (!((msg !== null))) {
      preViolations.push("[ClassifierService.classifyMessage] pre violated: msg <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= 1.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastConfidence = result — unbound variable 'result'
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

/** Impl signature for DecisionEngine.evaluateMessage. User supplies this. */
export type DecisionEngineEvaluateMessageImpl = (self: DecisionEngine, msg: Message, confidence: number) => { self: DecisionEngine; modified: { processedMessages: unknown } };

/** Contract-checking wrapper for DecisionEngine.evaluateMessage. */
export function wrapDecisionEngineEvaluateMessage(impl: DecisionEngineEvaluateMessageImpl): (self: DecisionEngine, msg: Message, confidence: number) => DecisionEngine {
  return (self, msg, confidence) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[DecisionEngine.evaluateMessage] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[DecisionEngine.evaluateMessage] pre violated: msg.messageId <> null");
    }
    if (!((confidence >= 0))) {
      preViolations.push("[DecisionEngine.evaluateMessage] pre violated: confidence >= 0.0");
    }
    if (!((confidence <= 1))) {
      preViolations.push("[DecisionEngine.evaluateMessage] pre violated: confidence <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg, confidence);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (confidence >= self.threshold) — unbound variable 'result'
      if (!((__result.self.processedMessages).has(msg))) {
        postViolations.push("[DecisionEngine.evaluateMessage] post violated: self.processedMessages->includes(msg)");
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

/** Impl signature for DecisionEngine.evaluateMessage (async). User supplies this. */
export type DecisionEngineEvaluateMessageAsyncImpl = (self: DecisionEngine, msg: Message, confidence: number) => Promise<{ self: DecisionEngine; modified: { processedMessages: unknown } }>;

/** Contract-checking wrapper for DecisionEngine.evaluateMessage (async). */
export function wrapDecisionEngineEvaluateMessageAsync(impl: DecisionEngineEvaluateMessageAsyncImpl): (self: DecisionEngine, msg: Message, confidence: number) => Promise<DecisionEngine> {
  return async (self, msg, confidence) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[DecisionEngine.evaluateMessage] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[DecisionEngine.evaluateMessage] pre violated: msg.messageId <> null");
    }
    if (!((confidence >= 0))) {
      preViolations.push("[DecisionEngine.evaluateMessage] pre violated: confidence >= 0.0");
    }
    if (!((confidence <= 1))) {
      preViolations.push("[DecisionEngine.evaluateMessage] pre violated: confidence <= 1.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg, confidence);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (confidence >= self.threshold) — unbound variable 'result'
      if (!((__result.self.processedMessages).has(msg))) {
        postViolations.push("[DecisionEngine.evaluateMessage] post violated: self.processedMessages->includes(msg)");
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

/** Impl signature for DeliveryService.deliverMessage. User supplies this. */
export type DeliveryServiceDeliverMessageImpl = (self: DeliveryService, msg: Message) => { self: DeliveryService; modified: { deliveredMessages: unknown } };

/** Contract-checking wrapper for DeliveryService.deliverMessage. */
export function wrapDeliveryServiceDeliverMessage(impl: DeliveryServiceDeliverMessageImpl): (self: DeliveryService, msg: Message) => DeliveryService {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[DeliveryService.deliverMessage] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[DeliveryService.deliverMessage] pre violated: msg.messageId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!((__result.self.deliveredMessages).has(msg))) {
        postViolations.push("[DeliveryService.deliverMessage] post violated: self.deliveredMessages->includes(msg)");
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

/** Impl signature for DeliveryService.deliverMessage (async). User supplies this. */
export type DeliveryServiceDeliverMessageAsyncImpl = (self: DeliveryService, msg: Message) => Promise<{ self: DeliveryService; modified: { deliveredMessages: unknown } }>;

/** Contract-checking wrapper for DeliveryService.deliverMessage (async). */
export function wrapDeliveryServiceDeliverMessageAsync(impl: DeliveryServiceDeliverMessageAsyncImpl): (self: DeliveryService, msg: Message) => Promise<DeliveryService> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[DeliveryService.deliverMessage] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[DeliveryService.deliverMessage] pre violated: msg.messageId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!((__result.self.deliveredMessages).has(msg))) {
        postViolations.push("[DeliveryService.deliverMessage] post violated: self.deliveredMessages->includes(msg)");
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

/** Impl signature for PendingReviewQueue.enqueueHidden. User supplies this. */
export type PendingReviewQueueEnqueueHiddenImpl = (self: PendingReviewQueue, msg: Message, submissionTimestamp: string) => { self: PendingReviewQueue; modified: { hiddenMessages: unknown; submissionTimestamps: unknown } };

/** Contract-checking wrapper for PendingReviewQueue.enqueueHidden. */
export function wrapPendingReviewQueueEnqueueHidden(impl: PendingReviewQueueEnqueueHiddenImpl): (self: PendingReviewQueue, msg: Message, submissionTimestamp: string) => PendingReviewQueue {
  return (self, msg, submissionTimestamp) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[PendingReviewQueue.enqueueHidden] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[PendingReviewQueue.enqueueHidden] pre violated: msg.messageId <> null");
    }
    if (!((msg.riskLevel === "pending"))) {
      preViolations.push("[PendingReviewQueue.enqueueHidden] pre violated: msg.riskLevel = 'pending'");
    }
    if (!((submissionTimestamp !== null))) {
      preViolations.push("[PendingReviewQueue.enqueueHidden] pre violated: submissionTimestamp <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg, submissionTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.hiddenMessages).has(msg))) {
        postViolations.push("[PendingReviewQueue.enqueueHidden] post violated: self.hiddenMessages->includes(msg)");
      }
      if (!((__result.self.submissionTimestamps).has(submissionTimestamp))) {
        postViolations.push("[PendingReviewQueue.enqueueHidden] post violated: self.submissionTimestamps->includes(submissionTimestamp)");
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

/** Impl signature for PendingReviewQueue.enqueueHidden (async). User supplies this. */
export type PendingReviewQueueEnqueueHiddenAsyncImpl = (self: PendingReviewQueue, msg: Message, submissionTimestamp: string) => Promise<{ self: PendingReviewQueue; modified: { hiddenMessages: unknown; submissionTimestamps: unknown } }>;

/** Contract-checking wrapper for PendingReviewQueue.enqueueHidden (async). */
export function wrapPendingReviewQueueEnqueueHiddenAsync(impl: PendingReviewQueueEnqueueHiddenAsyncImpl): (self: PendingReviewQueue, msg: Message, submissionTimestamp: string) => Promise<PendingReviewQueue> {
  return async (self, msg, submissionTimestamp) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[PendingReviewQueue.enqueueHidden] pre violated: msg <> null");
    }
    if (!((msg.messageId !== null))) {
      preViolations.push("[PendingReviewQueue.enqueueHidden] pre violated: msg.messageId <> null");
    }
    if (!((msg.riskLevel === "pending"))) {
      preViolations.push("[PendingReviewQueue.enqueueHidden] pre violated: msg.riskLevel = 'pending'");
    }
    if (!((submissionTimestamp !== null))) {
      preViolations.push("[PendingReviewQueue.enqueueHidden] pre violated: submissionTimestamp <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg, submissionTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.hiddenMessages).has(msg))) {
        postViolations.push("[PendingReviewQueue.enqueueHidden] post violated: self.hiddenMessages->includes(msg)");
      }
      if (!((__result.self.submissionTimestamps).has(submissionTimestamp))) {
        postViolations.push("[PendingReviewQueue.enqueueHidden] post violated: self.submissionTimestamps->includes(submissionTimestamp)");
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

/** Impl signature for PendingReviewQueue.dequeueReleased. User supplies this. */
export type PendingReviewQueueDequeueReleasedImpl = (self: PendingReviewQueue, msg: Message) => { self: PendingReviewQueue; modified: { hiddenMessages: unknown; submissionTimestamps: unknown } };

/** Contract-checking wrapper for PendingReviewQueue.dequeueReleased. */
export function wrapPendingReviewQueueDequeueReleased(impl: PendingReviewQueueDequeueReleasedImpl): (self: PendingReviewQueue, msg: Message) => PendingReviewQueue {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[PendingReviewQueue.dequeueReleased] pre violated: msg <> null");
    }
    if (!((self.hiddenMessages).has(msg))) {
      preViolations.push("[PendingReviewQueue.dequeueReleased] pre violated: self.hiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.hiddenMessages).has(msg)))) {
        postViolations.push("[PendingReviewQueue.dequeueReleased] post violated: not self.hiddenMessages->includes(msg)");
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

/** Impl signature for PendingReviewQueue.dequeueReleased (async). User supplies this. */
export type PendingReviewQueueDequeueReleasedAsyncImpl = (self: PendingReviewQueue, msg: Message) => Promise<{ self: PendingReviewQueue; modified: { hiddenMessages: unknown; submissionTimestamps: unknown } }>;

/** Contract-checking wrapper for PendingReviewQueue.dequeueReleased (async). */
export function wrapPendingReviewQueueDequeueReleasedAsync(impl: PendingReviewQueueDequeueReleasedAsyncImpl): (self: PendingReviewQueue, msg: Message) => Promise<PendingReviewQueue> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[PendingReviewQueue.dequeueReleased] pre violated: msg <> null");
    }
    if (!((self.hiddenMessages).has(msg))) {
      preViolations.push("[PendingReviewQueue.dequeueReleased] pre violated: self.hiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.hiddenMessages).has(msg)))) {
        postViolations.push("[PendingReviewQueue.dequeueReleased] post violated: not self.hiddenMessages->includes(msg)");
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

/** Impl signature for PendingReviewQueue.dequeueConfirmed. User supplies this. */
export type PendingReviewQueueDequeueConfirmedImpl = (self: PendingReviewQueue, msg: Message) => { self: PendingReviewQueue; modified: { hiddenMessages: unknown; submissionTimestamps: unknown } };

/** Contract-checking wrapper for PendingReviewQueue.dequeueConfirmed. */
export function wrapPendingReviewQueueDequeueConfirmed(impl: PendingReviewQueueDequeueConfirmedImpl): (self: PendingReviewQueue, msg: Message) => PendingReviewQueue {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[PendingReviewQueue.dequeueConfirmed] pre violated: msg <> null");
    }
    if (!((self.hiddenMessages).has(msg))) {
      preViolations.push("[PendingReviewQueue.dequeueConfirmed] pre violated: self.hiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.hiddenMessages).has(msg)))) {
        postViolations.push("[PendingReviewQueue.dequeueConfirmed] post violated: not self.hiddenMessages->includes(msg)");
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

/** Impl signature for PendingReviewQueue.dequeueConfirmed (async). User supplies this. */
export type PendingReviewQueueDequeueConfirmedAsyncImpl = (self: PendingReviewQueue, msg: Message) => Promise<{ self: PendingReviewQueue; modified: { hiddenMessages: unknown; submissionTimestamps: unknown } }>;

/** Contract-checking wrapper for PendingReviewQueue.dequeueConfirmed (async). */
export function wrapPendingReviewQueueDequeueConfirmedAsync(impl: PendingReviewQueueDequeueConfirmedAsyncImpl): (self: PendingReviewQueue, msg: Message) => Promise<PendingReviewQueue> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[PendingReviewQueue.dequeueConfirmed] pre violated: msg <> null");
    }
    if (!((self.hiddenMessages).has(msg))) {
      preViolations.push("[PendingReviewQueue.dequeueConfirmed] pre violated: self.hiddenMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.hiddenMessages).has(msg)))) {
        postViolations.push("[PendingReviewQueue.dequeueConfirmed] post violated: not self.hiddenMessages->includes(msg)");
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

/** Impl signature for ModeratorInterface.displayForReview. User supplies this. */
export type ModeratorInterfaceDisplayForReviewImpl = (self: ModeratorInterface, msg: Message, classifierConfidence: number, threshold: number) => { self: ModeratorInterface; modified: { visiblePendingMessages: unknown } };

/** Contract-checking wrapper for ModeratorInterface.displayForReview. */
export function wrapModeratorInterfaceDisplayForReview(impl: ModeratorInterfaceDisplayForReviewImpl): (self: ModeratorInterface, msg: Message, classifierConfidence: number, threshold: number) => ModeratorInterface {
  return (self, msg, classifierConfidence, threshold) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ModeratorInterface.displayForReview] pre violated: msg <> null");
    }
    if (!((msg.riskLevel === "pending"))) {
      preViolations.push("[ModeratorInterface.displayForReview] pre violated: msg.riskLevel = 'pending'");
    }
    if (!((classifierConfidence >= 0))) {
      preViolations.push("[ModeratorInterface.displayForReview] pre violated: classifierConfidence >= 0.0");
    }
    if (!((threshold >= 0))) {
      preViolations.push("[ModeratorInterface.displayForReview] pre violated: threshold >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg, classifierConfidence, threshold);
      const postViolations: string[] = [];
      if (!((__result.self.visiblePendingMessages).has(msg))) {
        postViolations.push("[ModeratorInterface.displayForReview] post violated: self.visiblePendingMessages->includes(msg)");
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

/** Impl signature for ModeratorInterface.displayForReview (async). User supplies this. */
export type ModeratorInterfaceDisplayForReviewAsyncImpl = (self: ModeratorInterface, msg: Message, classifierConfidence: number, threshold: number) => Promise<{ self: ModeratorInterface; modified: { visiblePendingMessages: unknown } }>;

/** Contract-checking wrapper for ModeratorInterface.displayForReview (async). */
export function wrapModeratorInterfaceDisplayForReviewAsync(impl: ModeratorInterfaceDisplayForReviewAsyncImpl): (self: ModeratorInterface, msg: Message, classifierConfidence: number, threshold: number) => Promise<ModeratorInterface> {
  return async (self, msg, classifierConfidence, threshold) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ModeratorInterface.displayForReview] pre violated: msg <> null");
    }
    if (!((msg.riskLevel === "pending"))) {
      preViolations.push("[ModeratorInterface.displayForReview] pre violated: msg.riskLevel = 'pending'");
    }
    if (!((classifierConfidence >= 0))) {
      preViolations.push("[ModeratorInterface.displayForReview] pre violated: classifierConfidence >= 0.0");
    }
    if (!((threshold >= 0))) {
      preViolations.push("[ModeratorInterface.displayForReview] pre violated: threshold >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg, classifierConfidence, threshold);
      const postViolations: string[] = [];
      if (!((__result.self.visiblePendingMessages).has(msg))) {
        postViolations.push("[ModeratorInterface.displayForReview] post violated: self.visiblePendingMessages->includes(msg)");
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

/** Impl signature for ModeratorInterface.moderatorRelease. User supplies this. */
export type ModeratorInterfaceModeratorReleaseImpl = (self: ModeratorInterface, msg: Message) => { self: ModeratorInterface; modified: { visiblePendingMessages: unknown } };

/** Contract-checking wrapper for ModeratorInterface.moderatorRelease. */
export function wrapModeratorInterfaceModeratorRelease(impl: ModeratorInterfaceModeratorReleaseImpl): (self: ModeratorInterface, msg: Message) => ModeratorInterface {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ModeratorInterface.moderatorRelease] pre violated: msg <> null");
    }
    if (!((self.visiblePendingMessages).has(msg))) {
      preViolations.push("[ModeratorInterface.moderatorRelease] pre violated: self.visiblePendingMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.visiblePendingMessages).has(msg)))) {
        postViolations.push("[ModeratorInterface.moderatorRelease] post violated: not self.visiblePendingMessages->includes(msg)");
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

/** Impl signature for ModeratorInterface.moderatorRelease (async). User supplies this. */
export type ModeratorInterfaceModeratorReleaseAsyncImpl = (self: ModeratorInterface, msg: Message) => Promise<{ self: ModeratorInterface; modified: { visiblePendingMessages: unknown } }>;

/** Contract-checking wrapper for ModeratorInterface.moderatorRelease (async). */
export function wrapModeratorInterfaceModeratorReleaseAsync(impl: ModeratorInterfaceModeratorReleaseAsyncImpl): (self: ModeratorInterface, msg: Message) => Promise<ModeratorInterface> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ModeratorInterface.moderatorRelease] pre violated: msg <> null");
    }
    if (!((self.visiblePendingMessages).has(msg))) {
      preViolations.push("[ModeratorInterface.moderatorRelease] pre violated: self.visiblePendingMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.visiblePendingMessages).has(msg)))) {
        postViolations.push("[ModeratorInterface.moderatorRelease] post violated: not self.visiblePendingMessages->includes(msg)");
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

/** Impl signature for ModeratorInterface.moderatorConfirmHide. User supplies this. */
export type ModeratorInterfaceModeratorConfirmHideImpl = (self: ModeratorInterface, msg: Message) => { self: ModeratorInterface; modified: { visiblePendingMessages: unknown } };

/** Contract-checking wrapper for ModeratorInterface.moderatorConfirmHide. */
export function wrapModeratorInterfaceModeratorConfirmHide(impl: ModeratorInterfaceModeratorConfirmHideImpl): (self: ModeratorInterface, msg: Message) => ModeratorInterface {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ModeratorInterface.moderatorConfirmHide] pre violated: msg <> null");
    }
    if (!((self.visiblePendingMessages).has(msg))) {
      preViolations.push("[ModeratorInterface.moderatorConfirmHide] pre violated: self.visiblePendingMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.visiblePendingMessages).has(msg)))) {
        postViolations.push("[ModeratorInterface.moderatorConfirmHide] post violated: not self.visiblePendingMessages->includes(msg)");
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

/** Impl signature for ModeratorInterface.moderatorConfirmHide (async). User supplies this. */
export type ModeratorInterfaceModeratorConfirmHideAsyncImpl = (self: ModeratorInterface, msg: Message) => Promise<{ self: ModeratorInterface; modified: { visiblePendingMessages: unknown } }>;

/** Contract-checking wrapper for ModeratorInterface.moderatorConfirmHide (async). */
export function wrapModeratorInterfaceModeratorConfirmHideAsync(impl: ModeratorInterfaceModeratorConfirmHideAsyncImpl): (self: ModeratorInterface, msg: Message) => Promise<ModeratorInterface> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[ModeratorInterface.moderatorConfirmHide] pre violated: msg <> null");
    }
    if (!((self.visiblePendingMessages).has(msg))) {
      preViolations.push("[ModeratorInterface.moderatorConfirmHide] pre violated: self.visiblePendingMessages->includes(msg)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!(!((__result.self.visiblePendingMessages).has(msg)))) {
        postViolations.push("[ModeratorInterface.moderatorConfirmHide] post violated: not self.visiblePendingMessages->includes(msg)");
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

/** Impl signature for EscalationService.escalateUnreviewed. User supplies this. */
export type EscalationServiceEscalateUnreviewedImpl = (self: EscalationService, msg: Message) => { self: EscalationService; modified: { escalatedMessages: unknown } };

/** Contract-checking wrapper for EscalationService.escalateUnreviewed. */
export function wrapEscalationServiceEscalateUnreviewed(impl: EscalationServiceEscalateUnreviewedImpl): (self: EscalationService, msg: Message) => EscalationService {
  return (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[EscalationService.escalateUnreviewed] pre violated: msg <> null");
    }
    if (!((msg.riskLevel === "pending"))) {
      preViolations.push("[EscalationService.escalateUnreviewed] pre violated: msg.riskLevel = 'pending'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, msg);
      const postViolations: string[] = [];
      if (!((__result.self.escalatedMessages).has(msg))) {
        postViolations.push("[EscalationService.escalateUnreviewed] post violated: self.escalatedMessages->includes(msg)");
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

/** Impl signature for EscalationService.escalateUnreviewed (async). User supplies this. */
export type EscalationServiceEscalateUnreviewedAsyncImpl = (self: EscalationService, msg: Message) => Promise<{ self: EscalationService; modified: { escalatedMessages: unknown } }>;

/** Contract-checking wrapper for EscalationService.escalateUnreviewed (async). */
export function wrapEscalationServiceEscalateUnreviewedAsync(impl: EscalationServiceEscalateUnreviewedAsyncImpl): (self: EscalationService, msg: Message) => Promise<EscalationService> {
  return async (self, msg) => {
    const preViolations: string[] = [];
    if (!((msg !== null))) {
      preViolations.push("[EscalationService.escalateUnreviewed] pre violated: msg <> null");
    }
    if (!((msg.riskLevel === "pending"))) {
      preViolations.push("[EscalationService.escalateUnreviewed] pre violated: msg.riskLevel = 'pending'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, msg);
      const postViolations: string[] = [];
      if (!((__result.self.escalatedMessages).has(msg))) {
        postViolations.push("[EscalationService.escalateUnreviewed] post violated: self.escalatedMessages->includes(msg)");
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

/** Impl signature for AuditTrail.recordDecision. User supplies this. */
export type AuditTrailRecordDecisionImpl = (self: AuditTrail, d: ModerationDecision) => { self: AuditTrail; modified: { decisions: unknown } };

/** Contract-checking wrapper for AuditTrail.recordDecision. */
export function wrapAuditTrailRecordDecision(impl: AuditTrailRecordDecisionImpl): (self: AuditTrail, d: ModerationDecision) => AuditTrail {
  return (self, d) => {
    const preViolations: string[] = [];
    if (!((d !== null))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d <> null");
    }
    if (!(((d.outcome === "allowed") || (d.outcome === "hidden")))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.outcome = 'allowed' or d.outcome = 'hidden'");
    }
    if (!((d.classifierConfidence >= 0))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.classifierConfidence >= 0.0");
    }
    if (!((d.classifierConfidence <= 1))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.classifierConfidence <= 1.0");
    }
    if (!((d.thresholdUsed >= 0))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.thresholdUsed >= 0.0");
    }
    if (!((d.thresholdUsed <= 1))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.thresholdUsed <= 1.0");
    }
    if (!((d.timestamp !== null))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.timestamp <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, d);
      const postViolations: string[] = [];
      if (!((__result.self.decisions).has(d))) {
        postViolations.push("[AuditTrail.recordDecision] post violated: self.decisions->includes(d)");
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

/** Impl signature for AuditTrail.recordDecision (async). User supplies this. */
export type AuditTrailRecordDecisionAsyncImpl = (self: AuditTrail, d: ModerationDecision) => Promise<{ self: AuditTrail; modified: { decisions: unknown } }>;

/** Contract-checking wrapper for AuditTrail.recordDecision (async). */
export function wrapAuditTrailRecordDecisionAsync(impl: AuditTrailRecordDecisionAsyncImpl): (self: AuditTrail, d: ModerationDecision) => Promise<AuditTrail> {
  return async (self, d) => {
    const preViolations: string[] = [];
    if (!((d !== null))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d <> null");
    }
    if (!(((d.outcome === "allowed") || (d.outcome === "hidden")))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.outcome = 'allowed' or d.outcome = 'hidden'");
    }
    if (!((d.classifierConfidence >= 0))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.classifierConfidence >= 0.0");
    }
    if (!((d.classifierConfidence <= 1))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.classifierConfidence <= 1.0");
    }
    if (!((d.thresholdUsed >= 0))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.thresholdUsed >= 0.0");
    }
    if (!((d.thresholdUsed <= 1))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.thresholdUsed <= 1.0");
    }
    if (!((d.timestamp !== null))) {
      preViolations.push("[AuditTrail.recordDecision] pre violated: d.timestamp <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, d);
      const postViolations: string[] = [];
      if (!((__result.self.decisions).has(d))) {
        postViolations.push("[AuditTrail.recordDecision] post violated: self.decisions->includes(d)");
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

