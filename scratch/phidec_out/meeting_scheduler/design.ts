// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for RequestManager. Runtime: string. Compile-time: branded. */
export type RequestManagerId = string & { readonly __brand: "RequestManagerId" };
/** Identity type for ConstraintAggregator. Runtime: string. Compile-time: branded. */
export type ConstraintAggregatorId = string & { readonly __brand: "ConstraintAggregatorId" };
/** Identity type for DateSelector. Runtime: string. Compile-time: branded. */
export type DateSelectorId = string & { readonly __brand: "DateSelectorId" };
/** Identity type for NotificationDispatcher. Runtime: string. Compile-time: branded. */
export type NotificationDispatcherId = string & { readonly __brand: "NotificationDispatcherId" };
/** Identity type for ConstraintChannel. Runtime: string. Compile-time: branded. */
export type ConstraintChannelId = string & { readonly __brand: "ConstraintChannelId" };
/** Identity type for SelectionChannel. Runtime: string. Compile-time: branded. */
export type SelectionChannelId = string & { readonly __brand: "SelectionChannelId" };
/** Identity type for NotificationChannel. Runtime: string. Compile-time: branded. */
export type NotificationChannelId = string & { readonly __brand: "NotificationChannelId" };
/** Identity type for SchedulingFlowHappening. Runtime: string. Compile-time: branded. */
export type SchedulingFlowHappeningId = string & { readonly __brand: "SchedulingFlowHappeningId" };
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
/** Identity type for SchedulingSession. Runtime: string. Compile-time: branded. */
export type SchedulingSessionId = string & { readonly __brand: "SchedulingSessionId" };
/** Identity type for MeetingSchedulerSystem. Runtime: string. Compile-time: branded. */
export type MeetingSchedulerSystemId = string & { readonly __brand: "MeetingSchedulerSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface RequestManager {
  readonly managerId: RequestManagerId;
  readonly currentRequestId: string;
  readonly requestStatus: string;
  readonly rangeEarliest: string;
  readonly rangeLatest: string;
  readonly invitedParticipantCount: number;
  readonly initiatorId: string;
  readonly initiatorEmail: string;
  readonly initiatorInformed: boolean;
}

/** @stereotype <<Kind>> */
export interface ConstraintAggregator {
  readonly aggregatorId: ConstraintAggregatorId;
  readonly requestId: string;
  readonly allExcludedDates: ReadonlySet<string>;
  readonly commonPreferredDates: ReadonlySet<string>;
  readonly constraintSubmissionCount: number;
  readonly invitedParticipantCount: number;
  readonly allConstraintsCollected: boolean;
}

/** @stereotype <<Kind>> */
export interface DateSelector {
  readonly selectorId: DateSelectorId;
  readonly requestId: string;
  readonly proposedDate: string;
  readonly conflictDetected: boolean;
  readonly minCandidateDates: number;
}

/** @stereotype <<Kind>> */
export interface NotificationDispatcher {
  readonly dispatcherId: NotificationDispatcherId;
  readonly requestId: string;
  readonly confirmedDate: string;
  readonly confirmedLocation: string;
  readonly participantsNotified: boolean;
  readonly maxNotificationDelayHours: number;
  readonly maxConflictResponseHours: number;
}

/** @stereotype <<Role>> */
export interface RequestManagerSender {
  readonly managerId: string;
  readonly currentRequestId: string;
}

/** @stereotype <<Role>> */
export interface ConstraintAggregatorReceiver {
  readonly aggregatorId: string;
  readonly requestId: string;
}

/** @stereotype <<Role>> */
export interface ConstraintAggregatorProvider {
  readonly aggregatorId: string;
  readonly allExcludedDates: ReadonlySet<string>;
  readonly commonPreferredDates: ReadonlySet<string>;
  readonly allConstraintsCollected: boolean;
}

/** @stereotype <<Role>> */
export interface DateSelectorConsumer {
  readonly selectorId: string;
  readonly proposedDate: string;
}

/** @stereotype <<Role>> */
export interface DateSelectorSource {
  readonly selectorId: string;
  readonly proposedDate: string;
  readonly conflictDetected: boolean;
}

/** @stereotype <<Role>> */
export interface NotificationDispatcherSink {
  readonly dispatcherId: string;
  readonly participantsNotified: boolean;
}

/** @stereotype <<Relator>> */
export interface ConstraintChannel {
  readonly channelId: ConstraintChannelId;
  readonly requestId: string;
  readonly participantCount: number;
}

/** @stereotype <<Relator>> */
export interface SelectionChannel {
  readonly channelId: SelectionChannelId;
  readonly requestId: string;
  readonly constraintsReady: boolean;
  readonly rangeEarliest: string;
  readonly rangeLatest: string;
}

/** @stereotype <<Relator>> */
export interface NotificationChannel {
  readonly channelId: NotificationChannelId;
  readonly requestId: string;
  readonly outcomeReady: boolean;
}

/** @stereotype <<Happening>> */
export interface SchedulingFlowHappening {
  readonly flowId: SchedulingFlowHappeningId;
  readonly requestId: string;
  readonly triggeredBy: string;
  readonly outcome: string;
}

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

/** @stereotype <<Relator>> */
export interface SchedulingSession {
  readonly sessionId: SchedulingSessionId;
  readonly requestId: string;
  readonly status: string;
}

/** @stereotype <<Role>> */
export interface InitiatorRole {
  readonly initiatorId: string;
  readonly email: string;
}

/** @stereotype <<Role>> */
export interface ParticipantRole {
  readonly participantId: string;
  readonly email: string;
}

/** @stereotype <<Kind>> */
export interface MeetingSchedulerSystem extends ExclusionRespected, InitiatorAlwaysInformed {
  readonly systemId: MeetingSchedulerSystemId;
  readonly currentRequestId: string;
  readonly requestStatus: string;
  readonly rangeEarliest: string;
  readonly rangeLatest: string;
  readonly proposedDate: string;
  readonly location: string;
  readonly allExcludedDates: ReadonlySet<string>;
  readonly commonPreferredDates: ReadonlySet<string>;
  readonly constraintSubmissionCount: number;
  readonly invitedParticipantCount: number;
  readonly allConstraintsCollected: boolean;
  readonly initiatorInformed: boolean;
  readonly participantsNotified: boolean;
  readonly maxConflictResponseHours: number;
  readonly maxNotificationDelayHours: number;
  readonly minCandidateDates: number;
}

/** @stereotype <<Category>> */
export interface GdprArticle5Compliant {
  readonly gdprControllerName: string;
  readonly dataRetentionPolicyRef: string;
  readonly purposeLimitationStatement: string;
}

/** @stereotype <<Category>> */
export interface Iso25010ReliabilityCompliant {
  readonly availabilityTargetPercent: number;
  readonly incidentResponseRef: string;
}

/** @stereotype <<Category>> */
export interface RfcICalendarCompliant {
  readonly iCalendarVersionRef: string;
  readonly dateFormatPattern: string;
}

/** @stereotype <<Category>> */
export interface TemporallyValid {
}

/** @stereotype <<Category>> */
export interface MonotoneExclusionGrowth {
}

/** @stereotype <<Category>> */
export interface SingleActiveRequestPerInitiator {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly tag: string;
  readonly statement: string;
  readonly rationale: string;
  readonly riskIfViolated: string;
}

/** @stereotype <<Subkind>> */
export interface MeetingSchedulerSystemFormalized extends MeetingSchedulerSystem {
}


// ─── Factory functions ───

export function makeRequestManager(data: {
  managerId: string;
  currentRequestId: string;
  requestStatus: string;
  rangeEarliest: string;
  rangeLatest: string;
  invitedParticipantCount: number;
  initiatorId: string;
  initiatorEmail: string;
  initiatorInformed: boolean;
}): RequestManager {
  return {
    managerId: data.managerId as RequestManagerId,
    currentRequestId: data.currentRequestId,
    requestStatus: data.requestStatus,
    rangeEarliest: data.rangeEarliest,
    rangeLatest: data.rangeLatest,
    invitedParticipantCount: data.invitedParticipantCount,
    initiatorId: data.initiatorId,
    initiatorEmail: data.initiatorEmail,
    initiatorInformed: data.initiatorInformed,
  };
}

export function makeConstraintAggregator(data: {
  aggregatorId: string;
  requestId: string;
  allExcludedDates: ReadonlySet<string>;
  commonPreferredDates: ReadonlySet<string>;
  constraintSubmissionCount: number;
  invitedParticipantCount: number;
  allConstraintsCollected: boolean;
}): ConstraintAggregator {
  return {
    aggregatorId: data.aggregatorId as ConstraintAggregatorId,
    requestId: data.requestId,
    allExcludedDates: data.allExcludedDates,
    commonPreferredDates: data.commonPreferredDates,
    constraintSubmissionCount: data.constraintSubmissionCount,
    invitedParticipantCount: data.invitedParticipantCount,
    allConstraintsCollected: data.allConstraintsCollected,
  };
}

export function makeDateSelector(data: {
  selectorId: string;
  requestId: string;
  proposedDate: string;
  conflictDetected: boolean;
  minCandidateDates: number;
}): DateSelector {
  return {
    selectorId: data.selectorId as DateSelectorId,
    requestId: data.requestId,
    proposedDate: data.proposedDate,
    conflictDetected: data.conflictDetected,
    minCandidateDates: data.minCandidateDates,
  };
}

export function makeNotificationDispatcher(data: {
  dispatcherId: string;
  requestId: string;
  confirmedDate: string;
  confirmedLocation: string;
  participantsNotified: boolean;
  maxNotificationDelayHours: number;
  maxConflictResponseHours: number;
}): NotificationDispatcher {
  return {
    dispatcherId: data.dispatcherId as NotificationDispatcherId,
    requestId: data.requestId,
    confirmedDate: data.confirmedDate,
    confirmedLocation: data.confirmedLocation,
    participantsNotified: data.participantsNotified,
    maxNotificationDelayHours: data.maxNotificationDelayHours,
    maxConflictResponseHours: data.maxConflictResponseHours,
  };
}

export function makeConstraintChannel(data: {
  channelId: string;
  requestId: string;
  participantCount: number;
}): ConstraintChannel {
  return {
    channelId: data.channelId as ConstraintChannelId,
    requestId: data.requestId,
    participantCount: data.participantCount,
  };
}

export function makeSelectionChannel(data: {
  channelId: string;
  requestId: string;
  constraintsReady: boolean;
  rangeEarliest: string;
  rangeLatest: string;
}): SelectionChannel {
  return {
    channelId: data.channelId as SelectionChannelId,
    requestId: data.requestId,
    constraintsReady: data.constraintsReady,
    rangeEarliest: data.rangeEarliest,
    rangeLatest: data.rangeLatest,
  };
}

export function makeNotificationChannel(data: {
  channelId: string;
  requestId: string;
  outcomeReady: boolean;
}): NotificationChannel {
  return {
    channelId: data.channelId as NotificationChannelId,
    requestId: data.requestId,
    outcomeReady: data.outcomeReady,
  };
}

export function makeSchedulingFlowHappening(data: {
  flowId: string;
  requestId: string;
  triggeredBy: string;
  outcome: string;
}): SchedulingFlowHappening {
  return {
    flowId: data.flowId as SchedulingFlowHappeningId,
    requestId: data.requestId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

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

export function makeSchedulingSession(data: {
  sessionId: string;
  requestId: string;
  status: string;
}): SchedulingSession {
  return {
    sessionId: data.sessionId as SchedulingSessionId,
    requestId: data.requestId,
    status: data.status,
  };
}

export function makeMeetingSchedulerSystem(data: {
  systemId: string;
  currentRequestId: string;
  requestStatus: string;
  rangeEarliest: string;
  rangeLatest: string;
  proposedDate: string;
  location: string;
  allExcludedDates: ReadonlySet<string>;
  commonPreferredDates: ReadonlySet<string>;
  constraintSubmissionCount: number;
  invitedParticipantCount: number;
  allConstraintsCollected: boolean;
  initiatorInformed: boolean;
  participantsNotified: boolean;
  maxConflictResponseHours: number;
  maxNotificationDelayHours: number;
  minCandidateDates: number;
}): MeetingSchedulerSystem {
  return {
    systemId: data.systemId as MeetingSchedulerSystemId,
    currentRequestId: data.currentRequestId,
    requestStatus: data.requestStatus,
    rangeEarliest: data.rangeEarliest,
    rangeLatest: data.rangeLatest,
    proposedDate: data.proposedDate,
    location: data.location,
    allExcludedDates: data.allExcludedDates,
    commonPreferredDates: data.commonPreferredDates,
    constraintSubmissionCount: data.constraintSubmissionCount,
    invitedParticipantCount: data.invitedParticipantCount,
    allConstraintsCollected: data.allConstraintsCollected,
    initiatorInformed: data.initiatorInformed,
    participantsNotified: data.participantsNotified,
    maxConflictResponseHours: data.maxConflictResponseHours,
    maxNotificationDelayHours: data.maxNotificationDelayHours,
    minCandidateDates: data.minCandidateDates,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  tag: string;
  statement: string;
  rationale: string;
  riskIfViolated: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    tag: data.tag,
    statement: data.statement,
    rationale: data.rationale,
    riskIfViolated: data.riskIfViolated,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for RequestManager. Returns empty array when valid. */
export function validateRequestManager(instance: RequestManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[RequestManager] invariant violated: self.managerId <> null");
  }
  if (!(((((instance.requestStatus === "IDLE") || (instance.requestStatus === "OPEN")) || (instance.requestStatus === "CONFIRMED")) || (instance.requestStatus === "CONFLICT")))) {
    violations.push("[RequestManager] invariant violated: self.requestStatus = 'IDLE'\n      or self.requestStatus = 'OPEN'\n      or self.requestStatus = 'CONFIRMED'\n      or self.requestStatus = 'CONFLICT'");
  }
  if (!((instance.invitedParticipantCount >= 0))) {
    violations.push("[RequestManager] invariant violated: self.invitedParticipantCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for ConstraintAggregator. Returns empty array when valid. */
export function validateConstraintAggregator(instance: ConstraintAggregator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.aggregatorId !== null))) {
    violations.push("[ConstraintAggregator] invariant violated: self.aggregatorId <> null");
  }
  if (!((instance.constraintSubmissionCount >= 0))) {
    violations.push("[ConstraintAggregator] invariant violated: self.constraintSubmissionCount >= 0");
  }
  if (!((instance.invitedParticipantCount >= 0))) {
    violations.push("[ConstraintAggregator] invariant violated: self.invitedParticipantCount >= 0");
  }
  if (!((instance.constraintSubmissionCount <= instance.invitedParticipantCount))) {
    violations.push("[ConstraintAggregator] invariant violated: self.constraintSubmissionCount <= self.invitedParticipantCount");
  }
  if (!((instance.allConstraintsCollected === ((instance.constraintSubmissionCount === instance.invitedParticipantCount) && (instance.invitedParticipantCount > 0))))) {
    violations.push("[ConstraintAggregator] invariant violated: self.allConstraintsCollected =\n      (self.constraintSubmissionCount = self.invitedParticipantCount\n        and self.invitedParticipantCount > 0)");
  }
  return violations;
}

/** Runtime invariant check for DateSelector. Returns empty array when valid. */
export function validateDateSelector(instance: DateSelector): readonly string[] {
  const violations: string[] = [];
  if (!((instance.selectorId !== null))) {
    violations.push("[DateSelector] invariant violated: self.selectorId <> null");
  }
  if (!((instance.minCandidateDates > 0))) {
    violations.push("[DateSelector] invariant violated: self.minCandidateDates > 0");
  }
  if (!(!(((instance.proposedDate !== "") && (instance.conflictDetected === true))))) {
    violations.push("[DateSelector] invariant violated: not (self.proposedDate <> '' and self.conflictDetected = true)");
  }
  return violations;
}

/** Runtime invariant check for NotificationDispatcher. Returns empty array when valid. */
export function validateNotificationDispatcher(instance: NotificationDispatcher): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dispatcherId !== null))) {
    violations.push("[NotificationDispatcher] invariant violated: self.dispatcherId <> null");
  }
  if (!((instance.maxNotificationDelayHours > 0))) {
    violations.push("[NotificationDispatcher] invariant violated: self.maxNotificationDelayHours > 0.0");
  }
  if (!((instance.maxConflictResponseHours > 0))) {
    violations.push("[NotificationDispatcher] invariant violated: self.maxConflictResponseHours > 0.0");
  }
  return violations;
}

/** Runtime invariant check for ConstraintChannel. Returns empty array when valid. */
export function validateConstraintChannel(instance: ConstraintChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[ConstraintChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[ConstraintChannel] invariant violated: self.requestId <> null");
  }
  if (!((instance.participantCount > 0))) {
    violations.push("[ConstraintChannel] invariant violated: self.participantCount > 0");
  }
  return violations;
}

/** Runtime invariant check for SelectionChannel. Returns empty array when valid. */
export function validateSelectionChannel(instance: SelectionChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[SelectionChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[SelectionChannel] invariant violated: self.requestId <> null");
  }
  return violations;
}

/** Runtime invariant check for NotificationChannel. Returns empty array when valid. */
export function validateNotificationChannel(instance: NotificationChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[NotificationChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[NotificationChannel] invariant violated: self.requestId <> null");
  }
  return violations;
}

/** Runtime invariant check for SchedulingFlowHappening. Returns empty array when valid. */
export function validateSchedulingFlowHappening(instance: SchedulingFlowHappening): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SchedulingFlowHappening] invariant violated: self.flowId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[SchedulingFlowHappening] invariant violated: self.requestId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[SchedulingFlowHappening] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[SchedulingFlowHappening] invariant violated: self.outcome <> null");
  }
  return violations;
}

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

/** Runtime invariant check for SchedulingSession. Returns empty array when valid. */
export function validateSchedulingSession(instance: SchedulingSession): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sessionId !== null))) {
    violations.push("[SchedulingSession] invariant violated: self.sessionId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[SchedulingSession] invariant violated: self.requestId <> null");
  }
  if (!((instance.status !== null))) {
    violations.push("[SchedulingSession] invariant violated: self.status <> null");
  }
  if (!((((instance.status === "OPEN") || (instance.status === "CONFIRMED")) || (instance.status === "CONFLICT")))) {
    violations.push("[SchedulingSession] invariant violated: self.status = 'OPEN' or self.status = 'CONFIRMED' or self.status = 'CONFLICT'");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulerSystem. Returns empty array when valid. */
export function validateMeetingSchedulerSystem(instance: MeetingSchedulerSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.systemId <> null");
  }
  if (!(((((instance.requestStatus === "IDLE") || (instance.requestStatus === "OPEN")) || (instance.requestStatus === "CONFIRMED")) || (instance.requestStatus === "CONFLICT")))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.requestStatus = 'IDLE'\n      or self.requestStatus = 'OPEN'\n      or self.requestStatus = 'CONFIRMED'\n      or self.requestStatus = 'CONFLICT'");
  }
  if (!((instance.invitedParticipantCount >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.invitedParticipantCount >= 0");
  }
  if (!((instance.constraintSubmissionCount >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.constraintSubmissionCount >= 0");
  }
  if (!((instance.constraintSubmissionCount <= instance.invitedParticipantCount))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.constraintSubmissionCount <= self.invitedParticipantCount");
  }
  if (!((instance.maxConflictResponseHours > 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.maxConflictResponseHours > 0.0");
  }
  if (!((instance.maxNotificationDelayHours > 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.maxNotificationDelayHours > 0.0");
  }
  if (!((instance.minCandidateDates > 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.minCandidateDates > 0");
  }
  if (!((!((instance.proposedDate !== "")) || !((instance.allExcludedDates).has(instance.proposedDate))))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: (self.proposedDate <> '') implies (not self.allExcludedDates->includes(self.proposedDate))");
  }
  if (!((!(((instance.requestStatus === "CONFIRMED") || (instance.requestStatus === "CONFLICT"))) || (instance.initiatorInformed === true)))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: (self.requestStatus = 'CONFIRMED' or self.requestStatus = 'CONFLICT')\n      implies self.initiatorInformed = true");
  }
  return violations;
}

/** Runtime invariant check for GdprArticle5Compliant. Returns empty array when valid. */
export function validateGdprArticle5Compliant(instance: GdprArticle5Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.gdprControllerName !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.gdprControllerName <> null");
  }
  if (!((instance.dataRetentionPolicyRef !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.dataRetentionPolicyRef <> null");
  }
  if (!((instance.purposeLimitationStatement !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.purposeLimitationStatement <> null");
  }
  return violations;
}

/** Runtime invariant check for Iso25010ReliabilityCompliant. Returns empty array when valid. */
export function validateIso25010ReliabilityCompliant(instance: Iso25010ReliabilityCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.availabilityTargetPercent > 0))) {
    violations.push("[Iso25010ReliabilityCompliant] invariant violated: self.availabilityTargetPercent > 0.0");
  }
  if (!((instance.availabilityTargetPercent <= 100))) {
    violations.push("[Iso25010ReliabilityCompliant] invariant violated: self.availabilityTargetPercent <= 100.0");
  }
  return violations;
}

/** Runtime invariant check for RfcICalendarCompliant. Returns empty array when valid. */
export function validateRfcICalendarCompliant(instance: RfcICalendarCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.iCalendarVersionRef !== null))) {
    violations.push("[RfcICalendarCompliant] invariant violated: self.iCalendarVersionRef <> null");
  }
  if (!((instance.dateFormatPattern !== null))) {
    violations.push("[RfcICalendarCompliant] invariant violated: self.dateFormatPattern <> null");
  }
  return violations;
}

/** Runtime invariant check for TemporallyValid. Returns empty array when valid. */
export function validateTemporallyValid(instance: TemporallyValid): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[TemporallyValid] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MonotoneExclusionGrowth. Returns empty array when valid. */
export function validateMonotoneExclusionGrowth(instance: MonotoneExclusionGrowth): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MonotoneExclusionGrowth] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for SingleActiveRequestPerInitiator. Returns empty array when valid. */
export function validateSingleActiveRequestPerInitiator(instance: SingleActiveRequestPerInitiator): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[SingleActiveRequestPerInitiator] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.tag !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.tag <> null");
  }
  if (!((instance.statement !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.statement <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for RequestManager.openRequest. User supplies this. */
export type RequestManagerOpenRequestImpl = (self: RequestManager, reqId: string, earliest: string, latest: string, participantCount: number, initId: string, initEmail: string) => { self: RequestManager; modified: { requestStatus: unknown; currentRequestId: unknown; rangeEarliest: unknown; rangeLatest: unknown; invitedParticipantCount: unknown; initiatorId: unknown; initiatorEmail: unknown; initiatorInformed: unknown } };

/** Contract-checking wrapper for RequestManager.openRequest. */
export function wrapRequestManagerOpenRequest(impl: RequestManagerOpenRequestImpl): (self: RequestManager, reqId: string, earliest: string, latest: string, participantCount: number, initId: string, initEmail: string) => RequestManager {
  return (self, reqId, earliest, latest, participantCount, initId, initEmail) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "IDLE"))) {
      preViolations.push("[RequestManager.openRequest] pre violated: self.requestStatus = 'IDLE'");
    }
    if (!((reqId !== null))) {
      preViolations.push("[RequestManager.openRequest] pre violated: reqId <> null");
    }
    if (!((earliest !== null))) {
      preViolations.push("[RequestManager.openRequest] pre violated: earliest <> null");
    }
    if (!((latest !== null))) {
      preViolations.push("[RequestManager.openRequest] pre violated: latest <> null");
    }
    if (!((participantCount > 0))) {
      preViolations.push("[RequestManager.openRequest] pre violated: participantCount > 0");
    }
    if (!((initId !== null))) {
      preViolations.push("[RequestManager.openRequest] pre violated: initId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reqId, earliest, latest, participantCount, initId, initEmail);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "OPEN"))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.requestStatus = 'OPEN'");
      }
      if (!((__result.self.currentRequestId === reqId))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.currentRequestId = reqId");
      }
      if (!((__result.self.rangeEarliest === earliest))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.rangeEarliest = earliest");
      }
      if (!((__result.self.rangeLatest === latest))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.rangeLatest = latest");
      }
      if (!((__result.self.invitedParticipantCount === participantCount))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.invitedParticipantCount = participantCount");
      }
      if (!((__result.self.initiatorId === initId))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.initiatorId = initId");
      }
      if (!((__result.self.initiatorEmail === initEmail))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.initiatorEmail = initEmail");
      }
      if (!((__result.self.initiatorInformed === false))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.initiatorInformed = false");
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

/** Impl signature for RequestManager.openRequest (async). User supplies this. */
export type RequestManagerOpenRequestAsyncImpl = (self: RequestManager, reqId: string, earliest: string, latest: string, participantCount: number, initId: string, initEmail: string) => Promise<{ self: RequestManager; modified: { requestStatus: unknown; currentRequestId: unknown; rangeEarliest: unknown; rangeLatest: unknown; invitedParticipantCount: unknown; initiatorId: unknown; initiatorEmail: unknown; initiatorInformed: unknown } }>;

/** Contract-checking wrapper for RequestManager.openRequest (async). */
export function wrapRequestManagerOpenRequestAsync(impl: RequestManagerOpenRequestAsyncImpl): (self: RequestManager, reqId: string, earliest: string, latest: string, participantCount: number, initId: string, initEmail: string) => Promise<RequestManager> {
  return async (self, reqId, earliest, latest, participantCount, initId, initEmail) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "IDLE"))) {
      preViolations.push("[RequestManager.openRequest] pre violated: self.requestStatus = 'IDLE'");
    }
    if (!((reqId !== null))) {
      preViolations.push("[RequestManager.openRequest] pre violated: reqId <> null");
    }
    if (!((earliest !== null))) {
      preViolations.push("[RequestManager.openRequest] pre violated: earliest <> null");
    }
    if (!((latest !== null))) {
      preViolations.push("[RequestManager.openRequest] pre violated: latest <> null");
    }
    if (!((participantCount > 0))) {
      preViolations.push("[RequestManager.openRequest] pre violated: participantCount > 0");
    }
    if (!((initId !== null))) {
      preViolations.push("[RequestManager.openRequest] pre violated: initId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reqId, earliest, latest, participantCount, initId, initEmail);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "OPEN"))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.requestStatus = 'OPEN'");
      }
      if (!((__result.self.currentRequestId === reqId))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.currentRequestId = reqId");
      }
      if (!((__result.self.rangeEarliest === earliest))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.rangeEarliest = earliest");
      }
      if (!((__result.self.rangeLatest === latest))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.rangeLatest = latest");
      }
      if (!((__result.self.invitedParticipantCount === participantCount))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.invitedParticipantCount = participantCount");
      }
      if (!((__result.self.initiatorId === initId))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.initiatorId = initId");
      }
      if (!((__result.self.initiatorEmail === initEmail))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.initiatorEmail = initEmail");
      }
      if (!((__result.self.initiatorInformed === false))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.initiatorInformed = false");
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

/** Impl signature for RequestManager.markConfirmed. User supplies this. */
export type RequestManagerMarkConfirmedImpl = (self: RequestManager) => { self: RequestManager; modified: { requestStatus: unknown; initiatorInformed: unknown } };

/** Contract-checking wrapper for RequestManager.markConfirmed. */
export function wrapRequestManagerMarkConfirmed(impl: RequestManagerMarkConfirmedImpl): (self: RequestManager) => RequestManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[RequestManager.markConfirmed] pre violated: self.requestStatus = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "CONFIRMED"))) {
        postViolations.push("[RequestManager.markConfirmed] post violated: self.requestStatus = 'CONFIRMED'");
      }
      if (!((__result.self.initiatorInformed === true))) {
        postViolations.push("[RequestManager.markConfirmed] post violated: self.initiatorInformed = true");
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

/** Impl signature for RequestManager.markConfirmed (async). User supplies this. */
export type RequestManagerMarkConfirmedAsyncImpl = (self: RequestManager) => Promise<{ self: RequestManager; modified: { requestStatus: unknown; initiatorInformed: unknown } }>;

/** Contract-checking wrapper for RequestManager.markConfirmed (async). */
export function wrapRequestManagerMarkConfirmedAsync(impl: RequestManagerMarkConfirmedAsyncImpl): (self: RequestManager) => Promise<RequestManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[RequestManager.markConfirmed] pre violated: self.requestStatus = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "CONFIRMED"))) {
        postViolations.push("[RequestManager.markConfirmed] post violated: self.requestStatus = 'CONFIRMED'");
      }
      if (!((__result.self.initiatorInformed === true))) {
        postViolations.push("[RequestManager.markConfirmed] post violated: self.initiatorInformed = true");
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

/** Impl signature for RequestManager.markConflict. User supplies this. */
export type RequestManagerMarkConflictImpl = (self: RequestManager) => { self: RequestManager; modified: { requestStatus: unknown; initiatorInformed: unknown } };

/** Contract-checking wrapper for RequestManager.markConflict. */
export function wrapRequestManagerMarkConflict(impl: RequestManagerMarkConflictImpl): (self: RequestManager) => RequestManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[RequestManager.markConflict] pre violated: self.requestStatus = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "CONFLICT"))) {
        postViolations.push("[RequestManager.markConflict] post violated: self.requestStatus = 'CONFLICT'");
      }
      if (!((__result.self.initiatorInformed === true))) {
        postViolations.push("[RequestManager.markConflict] post violated: self.initiatorInformed = true");
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

/** Impl signature for RequestManager.markConflict (async). User supplies this. */
export type RequestManagerMarkConflictAsyncImpl = (self: RequestManager) => Promise<{ self: RequestManager; modified: { requestStatus: unknown; initiatorInformed: unknown } }>;

/** Contract-checking wrapper for RequestManager.markConflict (async). */
export function wrapRequestManagerMarkConflictAsync(impl: RequestManagerMarkConflictAsyncImpl): (self: RequestManager) => Promise<RequestManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[RequestManager.markConflict] pre violated: self.requestStatus = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "CONFLICT"))) {
        postViolations.push("[RequestManager.markConflict] post violated: self.requestStatus = 'CONFLICT'");
      }
      if (!((__result.self.initiatorInformed === true))) {
        postViolations.push("[RequestManager.markConflict] post violated: self.initiatorInformed = true");
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

/** Impl signature for RequestManager.rejectDuplicateOpen. User supplies this. */
export type RequestManagerRejectDuplicateOpenImpl = (self: RequestManager, newReqId: string) => { self: RequestManager; modified: { requestStatus: unknown } };

/** Contract-checking wrapper for RequestManager.rejectDuplicateOpen. */
export function wrapRequestManagerRejectDuplicateOpen(impl: RequestManagerRejectDuplicateOpenImpl): (self: RequestManager, newReqId: string) => RequestManager {
  return (self, newReqId) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[RequestManager.rejectDuplicateOpen] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((newReqId !== null))) {
      preViolations.push("[RequestManager.rejectDuplicateOpen] pre violated: newReqId <> null");
    }
    if (!((newReqId !== self.currentRequestId))) {
      preViolations.push("[RequestManager.rejectDuplicateOpen] pre violated: newReqId <> self.currentRequestId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newReqId);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "OPEN"))) {
        postViolations.push("[RequestManager.rejectDuplicateOpen] post violated: self.requestStatus = 'OPEN'");
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

/** Impl signature for RequestManager.rejectDuplicateOpen (async). User supplies this. */
export type RequestManagerRejectDuplicateOpenAsyncImpl = (self: RequestManager, newReqId: string) => Promise<{ self: RequestManager; modified: { requestStatus: unknown } }>;

/** Contract-checking wrapper for RequestManager.rejectDuplicateOpen (async). */
export function wrapRequestManagerRejectDuplicateOpenAsync(impl: RequestManagerRejectDuplicateOpenAsyncImpl): (self: RequestManager, newReqId: string) => Promise<RequestManager> {
  return async (self, newReqId) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[RequestManager.rejectDuplicateOpen] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((newReqId !== null))) {
      preViolations.push("[RequestManager.rejectDuplicateOpen] pre violated: newReqId <> null");
    }
    if (!((newReqId !== self.currentRequestId))) {
      preViolations.push("[RequestManager.rejectDuplicateOpen] pre violated: newReqId <> self.currentRequestId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newReqId);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "OPEN"))) {
        postViolations.push("[RequestManager.rejectDuplicateOpen] post violated: self.requestStatus = 'OPEN'");
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

/** Impl signature for RequestManager.rejectInvertedRange. User supplies this. */
export type RequestManagerRejectInvertedRangeImpl = (self: RequestManager, earliest: string, latest: string, callerAssertedInverted: boolean) => { self: RequestManager; modified: { requestStatus: unknown } };

/** Contract-checking wrapper for RequestManager.rejectInvertedRange. */
export function wrapRequestManagerRejectInvertedRange(impl: RequestManagerRejectInvertedRangeImpl): (self: RequestManager, earliest: string, latest: string, callerAssertedInverted: boolean) => RequestManager {
  return (self, earliest, latest, callerAssertedInverted) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "IDLE"))) {
      preViolations.push("[RequestManager.rejectInvertedRange] pre violated: self.requestStatus = 'IDLE'");
    }
    if (!((earliest !== null))) {
      preViolations.push("[RequestManager.rejectInvertedRange] pre violated: earliest <> null");
    }
    if (!((latest !== null))) {
      preViolations.push("[RequestManager.rejectInvertedRange] pre violated: latest <> null");
    }
    if (!((callerAssertedInverted === true))) {
      preViolations.push("[RequestManager.rejectInvertedRange] pre violated: callerAssertedInverted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, earliest, latest, callerAssertedInverted);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "IDLE"))) {
        postViolations.push("[RequestManager.rejectInvertedRange] post violated: self.requestStatus = 'IDLE'");
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

/** Impl signature for RequestManager.rejectInvertedRange (async). User supplies this. */
export type RequestManagerRejectInvertedRangeAsyncImpl = (self: RequestManager, earliest: string, latest: string, callerAssertedInverted: boolean) => Promise<{ self: RequestManager; modified: { requestStatus: unknown } }>;

/** Contract-checking wrapper for RequestManager.rejectInvertedRange (async). */
export function wrapRequestManagerRejectInvertedRangeAsync(impl: RequestManagerRejectInvertedRangeAsyncImpl): (self: RequestManager, earliest: string, latest: string, callerAssertedInverted: boolean) => Promise<RequestManager> {
  return async (self, earliest, latest, callerAssertedInverted) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "IDLE"))) {
      preViolations.push("[RequestManager.rejectInvertedRange] pre violated: self.requestStatus = 'IDLE'");
    }
    if (!((earliest !== null))) {
      preViolations.push("[RequestManager.rejectInvertedRange] pre violated: earliest <> null");
    }
    if (!((latest !== null))) {
      preViolations.push("[RequestManager.rejectInvertedRange] pre violated: latest <> null");
    }
    if (!((callerAssertedInverted === true))) {
      preViolations.push("[RequestManager.rejectInvertedRange] pre violated: callerAssertedInverted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, earliest, latest, callerAssertedInverted);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "IDLE"))) {
        postViolations.push("[RequestManager.rejectInvertedRange] post violated: self.requestStatus = 'IDLE'");
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

/** Impl signature for ConstraintAggregator.initialise. User supplies this. */
export type ConstraintAggregatorInitialiseImpl = (self: ConstraintAggregator, reqId: string, participantCount: number) => { self: ConstraintAggregator; modified: { requestId: unknown; invitedParticipantCount: unknown; constraintSubmissionCount: unknown; allConstraintsCollected: unknown } };

/** Contract-checking wrapper for ConstraintAggregator.initialise. */
export function wrapConstraintAggregatorInitialise(impl: ConstraintAggregatorInitialiseImpl): (self: ConstraintAggregator, reqId: string, participantCount: number) => ConstraintAggregator {
  return (self, reqId, participantCount) => {
    const preViolations: string[] = [];
    if (!((reqId !== null))) {
      preViolations.push("[ConstraintAggregator.initialise] pre violated: reqId <> null");
    }
    if (!((participantCount > 0))) {
      preViolations.push("[ConstraintAggregator.initialise] pre violated: participantCount > 0");
    }
    if (!(((self.requestId === null) || (self.requestId !== reqId)))) {
      preViolations.push("[ConstraintAggregator.initialise] pre violated: self.requestId = null or self.requestId <> reqId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reqId, participantCount);
      const postViolations: string[] = [];
      if (!((__result.self.requestId === reqId))) {
        postViolations.push("[ConstraintAggregator.initialise] post violated: self.requestId = reqId");
      }
      if (!((__result.self.invitedParticipantCount === participantCount))) {
        postViolations.push("[ConstraintAggregator.initialise] post violated: self.invitedParticipantCount = participantCount");
      }
      if (!((__result.self.constraintSubmissionCount === 0))) {
        postViolations.push("[ConstraintAggregator.initialise] post violated: self.constraintSubmissionCount = 0");
      }
      if (!((__result.self.allConstraintsCollected === false))) {
        postViolations.push("[ConstraintAggregator.initialise] post violated: self.allConstraintsCollected = false");
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

/** Impl signature for ConstraintAggregator.initialise (async). User supplies this. */
export type ConstraintAggregatorInitialiseAsyncImpl = (self: ConstraintAggregator, reqId: string, participantCount: number) => Promise<{ self: ConstraintAggregator; modified: { requestId: unknown; invitedParticipantCount: unknown; constraintSubmissionCount: unknown; allConstraintsCollected: unknown } }>;

/** Contract-checking wrapper for ConstraintAggregator.initialise (async). */
export function wrapConstraintAggregatorInitialiseAsync(impl: ConstraintAggregatorInitialiseAsyncImpl): (self: ConstraintAggregator, reqId: string, participantCount: number) => Promise<ConstraintAggregator> {
  return async (self, reqId, participantCount) => {
    const preViolations: string[] = [];
    if (!((reqId !== null))) {
      preViolations.push("[ConstraintAggregator.initialise] pre violated: reqId <> null");
    }
    if (!((participantCount > 0))) {
      preViolations.push("[ConstraintAggregator.initialise] pre violated: participantCount > 0");
    }
    if (!(((self.requestId === null) || (self.requestId !== reqId)))) {
      preViolations.push("[ConstraintAggregator.initialise] pre violated: self.requestId = null or self.requestId <> reqId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reqId, participantCount);
      const postViolations: string[] = [];
      if (!((__result.self.requestId === reqId))) {
        postViolations.push("[ConstraintAggregator.initialise] post violated: self.requestId = reqId");
      }
      if (!((__result.self.invitedParticipantCount === participantCount))) {
        postViolations.push("[ConstraintAggregator.initialise] post violated: self.invitedParticipantCount = participantCount");
      }
      if (!((__result.self.constraintSubmissionCount === 0))) {
        postViolations.push("[ConstraintAggregator.initialise] post violated: self.constraintSubmissionCount = 0");
      }
      if (!((__result.self.allConstraintsCollected === false))) {
        postViolations.push("[ConstraintAggregator.initialise] post violated: self.allConstraintsCollected = false");
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

/** Impl signature for ConstraintAggregator.acceptConstraints. User supplies this. */
export type ConstraintAggregatorAcceptConstraintsImpl = (self: ConstraintAggregator, participantId: string, excluded: ReadonlySet<string>, preferred: ReadonlySet<string>) => { self: ConstraintAggregator; modified: { allExcludedDates: unknown; commonPreferredDates: unknown; constraintSubmissionCount: unknown; allConstraintsCollected: unknown } };

/** Contract-checking wrapper for ConstraintAggregator.acceptConstraints. */
export function wrapConstraintAggregatorAcceptConstraints(impl: ConstraintAggregatorAcceptConstraintsImpl): (self: ConstraintAggregator, participantId: string, excluded: ReadonlySet<string>, preferred: ReadonlySet<string>) => ConstraintAggregator {
  return (self, participantId, excluded, preferred) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintAggregator.acceptConstraints] pre violated: participantId <> null");
    }
    if (!((self.constraintSubmissionCount < self.invitedParticipantCount))) {
      preViolations.push("[ConstraintAggregator.acceptConstraints] pre violated: self.constraintSubmissionCount < self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.allExcludedDates": self.allExcludedDates,
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId, excluded, preferred);
      const postViolations: string[] = [];
      if (!(Array.from(excluded).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: excluded->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!(Array.from(preferred).every((__x) => ((__result.self.commonPreferredDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: preferred->forAll(d | self.commonPreferredDates->includes(d))");
      }
      if (!(Array.from(__pre["self.allExcludedDates"]).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!((__result.self.constraintSubmissionCount === (__pre["self.constraintSubmissionCount"] + 1)))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre + 1");
      }
      if (!((__result.self.allConstraintsCollected === (__result.self.constraintSubmissionCount === __result.self.invitedParticipantCount)))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: self.allConstraintsCollected =\n            (self.constraintSubmissionCount = self.invitedParticipantCount)");
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

/** Impl signature for ConstraintAggregator.acceptConstraints (async). User supplies this. */
export type ConstraintAggregatorAcceptConstraintsAsyncImpl = (self: ConstraintAggregator, participantId: string, excluded: ReadonlySet<string>, preferred: ReadonlySet<string>) => Promise<{ self: ConstraintAggregator; modified: { allExcludedDates: unknown; commonPreferredDates: unknown; constraintSubmissionCount: unknown; allConstraintsCollected: unknown } }>;

/** Contract-checking wrapper for ConstraintAggregator.acceptConstraints (async). */
export function wrapConstraintAggregatorAcceptConstraintsAsync(impl: ConstraintAggregatorAcceptConstraintsAsyncImpl): (self: ConstraintAggregator, participantId: string, excluded: ReadonlySet<string>, preferred: ReadonlySet<string>) => Promise<ConstraintAggregator> {
  return async (self, participantId, excluded, preferred) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintAggregator.acceptConstraints] pre violated: participantId <> null");
    }
    if (!((self.constraintSubmissionCount < self.invitedParticipantCount))) {
      preViolations.push("[ConstraintAggregator.acceptConstraints] pre violated: self.constraintSubmissionCount < self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.allExcludedDates": self.allExcludedDates,
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId, excluded, preferred);
      const postViolations: string[] = [];
      if (!(Array.from(excluded).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: excluded->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!(Array.from(preferred).every((__x) => ((__result.self.commonPreferredDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: preferred->forAll(d | self.commonPreferredDates->includes(d))");
      }
      if (!(Array.from(__pre["self.allExcludedDates"]).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!((__result.self.constraintSubmissionCount === (__pre["self.constraintSubmissionCount"] + 1)))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre + 1");
      }
      if (!((__result.self.allConstraintsCollected === (__result.self.constraintSubmissionCount === __result.self.invitedParticipantCount)))) {
        postViolations.push("[ConstraintAggregator.acceptConstraints] post violated: self.allConstraintsCollected =\n            (self.constraintSubmissionCount = self.invitedParticipantCount)");
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

/** Impl signature for ConstraintAggregator.applyConstraintUpdate. User supplies this. */
export type ConstraintAggregatorApplyConstraintUpdateImpl = (self: ConstraintAggregator, participantId: string, newExcluded: ReadonlySet<string>, newPreferred: ReadonlySet<string>) => { self: ConstraintAggregator; modified: { allExcludedDates: unknown; commonPreferredDates: unknown } };

/** Contract-checking wrapper for ConstraintAggregator.applyConstraintUpdate. */
export function wrapConstraintAggregatorApplyConstraintUpdate(impl: ConstraintAggregatorApplyConstraintUpdateImpl): (self: ConstraintAggregator, participantId: string, newExcluded: ReadonlySet<string>, newPreferred: ReadonlySet<string>) => ConstraintAggregator {
  return (self, participantId, newExcluded, newPreferred) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintAggregator.applyConstraintUpdate] pre violated: participantId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.allExcludedDates": self.allExcludedDates,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId, newExcluded, newPreferred);
      const postViolations: string[] = [];
      if (!(Array.from(newExcluded).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.applyConstraintUpdate] post violated: newExcluded->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!(Array.from(newPreferred).every((__x) => ((__result.self.commonPreferredDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.applyConstraintUpdate] post violated: newPreferred->forAll(d | self.commonPreferredDates->includes(d))");
      }
      if (!(Array.from(__pre["self.allExcludedDates"]).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.applyConstraintUpdate] post violated: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))");
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

/** Impl signature for ConstraintAggregator.applyConstraintUpdate (async). User supplies this. */
export type ConstraintAggregatorApplyConstraintUpdateAsyncImpl = (self: ConstraintAggregator, participantId: string, newExcluded: ReadonlySet<string>, newPreferred: ReadonlySet<string>) => Promise<{ self: ConstraintAggregator; modified: { allExcludedDates: unknown; commonPreferredDates: unknown } }>;

/** Contract-checking wrapper for ConstraintAggregator.applyConstraintUpdate (async). */
export function wrapConstraintAggregatorApplyConstraintUpdateAsync(impl: ConstraintAggregatorApplyConstraintUpdateAsyncImpl): (self: ConstraintAggregator, participantId: string, newExcluded: ReadonlySet<string>, newPreferred: ReadonlySet<string>) => Promise<ConstraintAggregator> {
  return async (self, participantId, newExcluded, newPreferred) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintAggregator.applyConstraintUpdate] pre violated: participantId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.allExcludedDates": self.allExcludedDates,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId, newExcluded, newPreferred);
      const postViolations: string[] = [];
      if (!(Array.from(newExcluded).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.applyConstraintUpdate] post violated: newExcluded->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!(Array.from(newPreferred).every((__x) => ((__result.self.commonPreferredDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.applyConstraintUpdate] post violated: newPreferred->forAll(d | self.commonPreferredDates->includes(d))");
      }
      if (!(Array.from(__pre["self.allExcludedDates"]).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[ConstraintAggregator.applyConstraintUpdate] post violated: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))");
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

/** Impl signature for ConstraintAggregator.rejectOverQuota. User supplies this. */
export type ConstraintAggregatorRejectOverQuotaImpl = (self: ConstraintAggregator, participantId: string) => { self: ConstraintAggregator; modified: { constraintSubmissionCount: unknown } };

/** Contract-checking wrapper for ConstraintAggregator.rejectOverQuota. */
export function wrapConstraintAggregatorRejectOverQuota(impl: ConstraintAggregatorRejectOverQuotaImpl): (self: ConstraintAggregator, participantId: string) => ConstraintAggregator {
  return (self, participantId) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintAggregator.rejectOverQuota] pre violated: participantId <> null");
    }
    if (!((self.constraintSubmissionCount >= self.invitedParticipantCount))) {
      preViolations.push("[ConstraintAggregator.rejectOverQuota] pre violated: self.constraintSubmissionCount >= self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId);
      const postViolations: string[] = [];
      if (!((__result.self.constraintSubmissionCount === __pre["self.constraintSubmissionCount"]))) {
        postViolations.push("[ConstraintAggregator.rejectOverQuota] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre");
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

/** Impl signature for ConstraintAggregator.rejectOverQuota (async). User supplies this. */
export type ConstraintAggregatorRejectOverQuotaAsyncImpl = (self: ConstraintAggregator, participantId: string) => Promise<{ self: ConstraintAggregator; modified: { constraintSubmissionCount: unknown } }>;

/** Contract-checking wrapper for ConstraintAggregator.rejectOverQuota (async). */
export function wrapConstraintAggregatorRejectOverQuotaAsync(impl: ConstraintAggregatorRejectOverQuotaAsyncImpl): (self: ConstraintAggregator, participantId: string) => Promise<ConstraintAggregator> {
  return async (self, participantId) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintAggregator.rejectOverQuota] pre violated: participantId <> null");
    }
    if (!((self.constraintSubmissionCount >= self.invitedParticipantCount))) {
      preViolations.push("[ConstraintAggregator.rejectOverQuota] pre violated: self.constraintSubmissionCount >= self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId);
      const postViolations: string[] = [];
      if (!((__result.self.constraintSubmissionCount === __pre["self.constraintSubmissionCount"]))) {
        postViolations.push("[ConstraintAggregator.rejectOverQuota] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre");
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

/** Impl signature for ConstraintAggregator.rejectStaleUpdate. User supplies this. */
export type ConstraintAggregatorRejectStaleUpdateImpl = (self: ConstraintAggregator, participantId: string) => { self: ConstraintAggregator; modified: { constraintSubmissionCount: unknown } };

/** Contract-checking wrapper for ConstraintAggregator.rejectStaleUpdate. */
export function wrapConstraintAggregatorRejectStaleUpdate(impl: ConstraintAggregatorRejectStaleUpdateImpl): (self: ConstraintAggregator, participantId: string) => ConstraintAggregator {
  return (self, participantId) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintAggregator.rejectStaleUpdate] pre violated: participantId <> null");
    }
    if (!((self.allConstraintsCollected === true))) {
      preViolations.push("[ConstraintAggregator.rejectStaleUpdate] pre violated: self.allConstraintsCollected = true");
    }
    if (!((self.constraintSubmissionCount >= self.invitedParticipantCount))) {
      preViolations.push("[ConstraintAggregator.rejectStaleUpdate] pre violated: self.constraintSubmissionCount >= self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId);
      const postViolations: string[] = [];
      if (!((__result.self.constraintSubmissionCount === __pre["self.constraintSubmissionCount"]))) {
        postViolations.push("[ConstraintAggregator.rejectStaleUpdate] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre");
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

/** Impl signature for ConstraintAggregator.rejectStaleUpdate (async). User supplies this. */
export type ConstraintAggregatorRejectStaleUpdateAsyncImpl = (self: ConstraintAggregator, participantId: string) => Promise<{ self: ConstraintAggregator; modified: { constraintSubmissionCount: unknown } }>;

/** Contract-checking wrapper for ConstraintAggregator.rejectStaleUpdate (async). */
export function wrapConstraintAggregatorRejectStaleUpdateAsync(impl: ConstraintAggregatorRejectStaleUpdateAsyncImpl): (self: ConstraintAggregator, participantId: string) => Promise<ConstraintAggregator> {
  return async (self, participantId) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintAggregator.rejectStaleUpdate] pre violated: participantId <> null");
    }
    if (!((self.allConstraintsCollected === true))) {
      preViolations.push("[ConstraintAggregator.rejectStaleUpdate] pre violated: self.allConstraintsCollected = true");
    }
    if (!((self.constraintSubmissionCount >= self.invitedParticipantCount))) {
      preViolations.push("[ConstraintAggregator.rejectStaleUpdate] pre violated: self.constraintSubmissionCount >= self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId);
      const postViolations: string[] = [];
      if (!((__result.self.constraintSubmissionCount === __pre["self.constraintSubmissionCount"]))) {
        postViolations.push("[ConstraintAggregator.rejectStaleUpdate] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre");
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

/** Impl signature for DateSelector.selectDate. User supplies this. */
export type DateSelectorSelectDateImpl = (self: DateSelector, candidate: string) => { self: DateSelector; modified: { proposedDate: unknown; conflictDetected: unknown } };

/** Contract-checking wrapper for DateSelector.selectDate. */
export function wrapDateSelectorSelectDate(impl: DateSelectorSelectDateImpl): (self: DateSelector, candidate: string) => DateSelector {
  return (self, candidate) => {
    const preViolations: string[] = [];
    if (!((candidate !== null))) {
      preViolations.push("[DateSelector.selectDate] pre violated: candidate <> null");
    }
    if (!((candidate !== ""))) {
      preViolations.push("[DateSelector.selectDate] pre violated: candidate <> ''");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, candidate);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === candidate))) {
        postViolations.push("[DateSelector.selectDate] post violated: self.proposedDate = candidate");
      }
      if (!((__result.self.conflictDetected === false))) {
        postViolations.push("[DateSelector.selectDate] post violated: self.conflictDetected = false");
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

/** Impl signature for DateSelector.selectDate (async). User supplies this. */
export type DateSelectorSelectDateAsyncImpl = (self: DateSelector, candidate: string) => Promise<{ self: DateSelector; modified: { proposedDate: unknown; conflictDetected: unknown } }>;

/** Contract-checking wrapper for DateSelector.selectDate (async). */
export function wrapDateSelectorSelectDateAsync(impl: DateSelectorSelectDateAsyncImpl): (self: DateSelector, candidate: string) => Promise<DateSelector> {
  return async (self, candidate) => {
    const preViolations: string[] = [];
    if (!((candidate !== null))) {
      preViolations.push("[DateSelector.selectDate] pre violated: candidate <> null");
    }
    if (!((candidate !== ""))) {
      preViolations.push("[DateSelector.selectDate] pre violated: candidate <> ''");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, candidate);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === candidate))) {
        postViolations.push("[DateSelector.selectDate] post violated: self.proposedDate = candidate");
      }
      if (!((__result.self.conflictDetected === false))) {
        postViolations.push("[DateSelector.selectDate] post violated: self.conflictDetected = false");
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

/** Impl signature for DateSelector.recordConflict. User supplies this. */
export type DateSelectorRecordConflictImpl = (self: DateSelector) => { self: DateSelector; modified: { proposedDate: unknown; conflictDetected: unknown } };

/** Contract-checking wrapper for DateSelector.recordConflict. */
export function wrapDateSelectorRecordConflict(impl: DateSelectorRecordConflictImpl): (self: DateSelector) => DateSelector {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[DateSelector.recordConflict] post violated: self.proposedDate = ''");
      }
      if (!((__result.self.conflictDetected === true))) {
        postViolations.push("[DateSelector.recordConflict] post violated: self.conflictDetected = true");
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

/** Impl signature for DateSelector.recordConflict (async). User supplies this. */
export type DateSelectorRecordConflictAsyncImpl = (self: DateSelector) => Promise<{ self: DateSelector; modified: { proposedDate: unknown; conflictDetected: unknown } }>;

/** Contract-checking wrapper for DateSelector.recordConflict (async). */
export function wrapDateSelectorRecordConflictAsync(impl: DateSelectorRecordConflictAsyncImpl): (self: DateSelector) => Promise<DateSelector> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[DateSelector.recordConflict] post violated: self.proposedDate = ''");
      }
      if (!((__result.self.conflictDetected === true))) {
        postViolations.push("[DateSelector.recordConflict] post violated: self.conflictDetected = true");
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

/** Impl signature for DateSelector.clearProposal. User supplies this. */
export type DateSelectorClearProposalImpl = (self: DateSelector) => { self: DateSelector; modified: { proposedDate: unknown } };

/** Contract-checking wrapper for DateSelector.clearProposal. */
export function wrapDateSelectorClearProposal(impl: DateSelectorClearProposalImpl): (self: DateSelector) => DateSelector {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.proposedDate !== ""))) {
      preViolations.push("[DateSelector.clearProposal] pre violated: self.proposedDate <> ''");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[DateSelector.clearProposal] post violated: self.proposedDate = ''");
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

/** Impl signature for DateSelector.clearProposal (async). User supplies this. */
export type DateSelectorClearProposalAsyncImpl = (self: DateSelector) => Promise<{ self: DateSelector; modified: { proposedDate: unknown } }>;

/** Contract-checking wrapper for DateSelector.clearProposal (async). */
export function wrapDateSelectorClearProposalAsync(impl: DateSelectorClearProposalAsyncImpl): (self: DateSelector) => Promise<DateSelector> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.proposedDate !== ""))) {
      preViolations.push("[DateSelector.clearProposal] pre violated: self.proposedDate <> ''");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[DateSelector.clearProposal] post violated: self.proposedDate = ''");
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

/** Impl signature for DateSelector.rejectExcludedCandidate. User supplies this. */
export type DateSelectorRejectExcludedCandidateImpl = (self: DateSelector, candidate: string, isExcluded: boolean) => { self: DateSelector; modified: { proposedDate: unknown } };

/** Contract-checking wrapper for DateSelector.rejectExcludedCandidate. */
export function wrapDateSelectorRejectExcludedCandidate(impl: DateSelectorRejectExcludedCandidateImpl): (self: DateSelector, candidate: string, isExcluded: boolean) => DateSelector {
  return (self, candidate, isExcluded) => {
    const preViolations: string[] = [];
    if (!((candidate !== null))) {
      preViolations.push("[DateSelector.rejectExcludedCandidate] pre violated: candidate <> null");
    }
    if (!((candidate !== ""))) {
      preViolations.push("[DateSelector.rejectExcludedCandidate] pre violated: candidate <> ''");
    }
    if (!((isExcluded === true))) {
      preViolations.push("[DateSelector.rejectExcludedCandidate] pre violated: isExcluded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, candidate, isExcluded);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[DateSelector.rejectExcludedCandidate] post violated: self.proposedDate = ''");
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

/** Impl signature for DateSelector.rejectExcludedCandidate (async). User supplies this. */
export type DateSelectorRejectExcludedCandidateAsyncImpl = (self: DateSelector, candidate: string, isExcluded: boolean) => Promise<{ self: DateSelector; modified: { proposedDate: unknown } }>;

/** Contract-checking wrapper for DateSelector.rejectExcludedCandidate (async). */
export function wrapDateSelectorRejectExcludedCandidateAsync(impl: DateSelectorRejectExcludedCandidateAsyncImpl): (self: DateSelector, candidate: string, isExcluded: boolean) => Promise<DateSelector> {
  return async (self, candidate, isExcluded) => {
    const preViolations: string[] = [];
    if (!((candidate !== null))) {
      preViolations.push("[DateSelector.rejectExcludedCandidate] pre violated: candidate <> null");
    }
    if (!((candidate !== ""))) {
      preViolations.push("[DateSelector.rejectExcludedCandidate] pre violated: candidate <> ''");
    }
    if (!((isExcluded === true))) {
      preViolations.push("[DateSelector.rejectExcludedCandidate] pre violated: isExcluded = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, candidate, isExcluded);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[DateSelector.rejectExcludedCandidate] post violated: self.proposedDate = ''");
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

/** Impl signature for NotificationDispatcher.dispatchConfirmation. User supplies this. */
export type NotificationDispatcherDispatchConfirmationImpl = (self: NotificationDispatcher, date: string, loc: string) => { self: NotificationDispatcher; modified: { confirmedDate: unknown; confirmedLocation: unknown; participantsNotified: unknown } };

/** Contract-checking wrapper for NotificationDispatcher.dispatchConfirmation. */
export function wrapNotificationDispatcherDispatchConfirmation(impl: NotificationDispatcherDispatchConfirmationImpl): (self: NotificationDispatcher, date: string, loc: string) => NotificationDispatcher {
  return (self, date, loc) => {
    const preViolations: string[] = [];
    if (!((date !== null))) {
      preViolations.push("[NotificationDispatcher.dispatchConfirmation] pre violated: date <> null");
    }
    if (!((date !== ""))) {
      preViolations.push("[NotificationDispatcher.dispatchConfirmation] pre violated: date <> ''");
    }
    if (!((loc !== null))) {
      preViolations.push("[NotificationDispatcher.dispatchConfirmation] pre violated: loc <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, date, loc);
      const postViolations: string[] = [];
      if (!((__result.self.confirmedDate === date))) {
        postViolations.push("[NotificationDispatcher.dispatchConfirmation] post violated: self.confirmedDate = date");
      }
      if (!((__result.self.confirmedLocation === loc))) {
        postViolations.push("[NotificationDispatcher.dispatchConfirmation] post violated: self.confirmedLocation = loc");
      }
      if (!((__result.self.participantsNotified === true))) {
        postViolations.push("[NotificationDispatcher.dispatchConfirmation] post violated: self.participantsNotified = true");
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

/** Impl signature for NotificationDispatcher.dispatchConfirmation (async). User supplies this. */
export type NotificationDispatcherDispatchConfirmationAsyncImpl = (self: NotificationDispatcher, date: string, loc: string) => Promise<{ self: NotificationDispatcher; modified: { confirmedDate: unknown; confirmedLocation: unknown; participantsNotified: unknown } }>;

/** Contract-checking wrapper for NotificationDispatcher.dispatchConfirmation (async). */
export function wrapNotificationDispatcherDispatchConfirmationAsync(impl: NotificationDispatcherDispatchConfirmationAsyncImpl): (self: NotificationDispatcher, date: string, loc: string) => Promise<NotificationDispatcher> {
  return async (self, date, loc) => {
    const preViolations: string[] = [];
    if (!((date !== null))) {
      preViolations.push("[NotificationDispatcher.dispatchConfirmation] pre violated: date <> null");
    }
    if (!((date !== ""))) {
      preViolations.push("[NotificationDispatcher.dispatchConfirmation] pre violated: date <> ''");
    }
    if (!((loc !== null))) {
      preViolations.push("[NotificationDispatcher.dispatchConfirmation] pre violated: loc <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, date, loc);
      const postViolations: string[] = [];
      if (!((__result.self.confirmedDate === date))) {
        postViolations.push("[NotificationDispatcher.dispatchConfirmation] post violated: self.confirmedDate = date");
      }
      if (!((__result.self.confirmedLocation === loc))) {
        postViolations.push("[NotificationDispatcher.dispatchConfirmation] post violated: self.confirmedLocation = loc");
      }
      if (!((__result.self.participantsNotified === true))) {
        postViolations.push("[NotificationDispatcher.dispatchConfirmation] post violated: self.participantsNotified = true");
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

/** Impl signature for NotificationDispatcher.dispatchConflictNotice. User supplies this. */
export type NotificationDispatcherDispatchConflictNoticeImpl = (self: NotificationDispatcher) => { self: NotificationDispatcher; modified: { participantsNotified: unknown } };

/** Contract-checking wrapper for NotificationDispatcher.dispatchConflictNotice. */
export function wrapNotificationDispatcherDispatchConflictNotice(impl: NotificationDispatcherDispatchConflictNoticeImpl): (self: NotificationDispatcher) => NotificationDispatcher {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.participantsNotified === false))) {
        postViolations.push("[NotificationDispatcher.dispatchConflictNotice] post violated: self.participantsNotified = false");
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

/** Impl signature for NotificationDispatcher.dispatchConflictNotice (async). User supplies this. */
export type NotificationDispatcherDispatchConflictNoticeAsyncImpl = (self: NotificationDispatcher) => Promise<{ self: NotificationDispatcher; modified: { participantsNotified: unknown } }>;

/** Contract-checking wrapper for NotificationDispatcher.dispatchConflictNotice (async). */
export function wrapNotificationDispatcherDispatchConflictNoticeAsync(impl: NotificationDispatcherDispatchConflictNoticeAsyncImpl): (self: NotificationDispatcher) => Promise<NotificationDispatcher> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.participantsNotified === false))) {
        postViolations.push("[NotificationDispatcher.dispatchConflictNotice] post violated: self.participantsNotified = false");
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

/** Impl signature for NotificationDispatcher.rejectPrematureDispatch. User supplies this. */
export type NotificationDispatcherRejectPrematureDispatchImpl = (self: NotificationDispatcher, dateReady: boolean) => { self: NotificationDispatcher; modified: { participantsNotified: unknown } };

/** Contract-checking wrapper for NotificationDispatcher.rejectPrematureDispatch. */
export function wrapNotificationDispatcherRejectPrematureDispatch(impl: NotificationDispatcherRejectPrematureDispatchImpl): (self: NotificationDispatcher, dateReady: boolean) => NotificationDispatcher {
  return (self, dateReady) => {
    const preViolations: string[] = [];
    if (!((dateReady === false))) {
      preViolations.push("[NotificationDispatcher.rejectPrematureDispatch] pre violated: dateReady = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dateReady);
      const postViolations: string[] = [];
      if (!((__result.self.participantsNotified === false))) {
        postViolations.push("[NotificationDispatcher.rejectPrematureDispatch] post violated: self.participantsNotified = false");
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

/** Impl signature for NotificationDispatcher.rejectPrematureDispatch (async). User supplies this. */
export type NotificationDispatcherRejectPrematureDispatchAsyncImpl = (self: NotificationDispatcher, dateReady: boolean) => Promise<{ self: NotificationDispatcher; modified: { participantsNotified: unknown } }>;

/** Contract-checking wrapper for NotificationDispatcher.rejectPrematureDispatch (async). */
export function wrapNotificationDispatcherRejectPrematureDispatchAsync(impl: NotificationDispatcherRejectPrematureDispatchAsyncImpl): (self: NotificationDispatcher, dateReady: boolean) => Promise<NotificationDispatcher> {
  return async (self, dateReady) => {
    const preViolations: string[] = [];
    if (!((dateReady === false))) {
      preViolations.push("[NotificationDispatcher.rejectPrematureDispatch] pre violated: dateReady = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dateReady);
      const postViolations: string[] = [];
      if (!((__result.self.participantsNotified === false))) {
        postViolations.push("[NotificationDispatcher.rejectPrematureDispatch] post violated: self.participantsNotified = false");
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

/** Impl signature for MeetingSchedulerSystem.requestMeeting. User supplies this. */
export type MeetingSchedulerSystemRequestMeetingImpl = (self: MeetingSchedulerSystem, reqId: string, earliest: string, latest: string, participantCount: number) => { self: MeetingSchedulerSystem; modified: { requestStatus: unknown; currentRequestId: unknown; rangeEarliest: unknown; rangeLatest: unknown; invitedParticipantCount: unknown; constraintSubmissionCount: unknown; allConstraintsCollected: unknown; initiatorInformed: unknown; participantsNotified: unknown; proposedDate: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting. */
export function wrapMeetingSchedulerSystemRequestMeeting(impl: MeetingSchedulerSystemRequestMeetingImpl): (self: MeetingSchedulerSystem, reqId: string, earliest: string, latest: string, participantCount: number) => MeetingSchedulerSystem {
  return (self, reqId, earliest, latest, participantCount) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "IDLE"))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: self.requestStatus = 'IDLE'");
    }
    if (!((reqId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: reqId <> null");
    }
    if (!((earliest !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: earliest <> null");
    }
    if (!((latest !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: latest <> null");
    }
    if (!((participantCount > 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: participantCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reqId, earliest, latest, participantCount);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "OPEN"))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.requestStatus = 'OPEN'");
      }
      if (!((__result.self.currentRequestId === reqId))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.currentRequestId = reqId");
      }
      if (!((__result.self.rangeEarliest === earliest))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.rangeEarliest = earliest");
      }
      if (!((__result.self.rangeLatest === latest))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.rangeLatest = latest");
      }
      if (!((__result.self.invitedParticipantCount === participantCount))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.invitedParticipantCount = participantCount");
      }
      if (!((__result.self.constraintSubmissionCount === 0))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.constraintSubmissionCount = 0");
      }
      if (!((__result.self.allConstraintsCollected === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.allConstraintsCollected = false");
      }
      if (!((__result.self.initiatorInformed === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.initiatorInformed = false");
      }
      if (!((__result.self.participantsNotified === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.participantsNotified = false");
      }
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.proposedDate = ''");
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

/** Impl signature for MeetingSchedulerSystem.requestMeeting (async). User supplies this. */
export type MeetingSchedulerSystemRequestMeetingAsyncImpl = (self: MeetingSchedulerSystem, reqId: string, earliest: string, latest: string, participantCount: number) => Promise<{ self: MeetingSchedulerSystem; modified: { requestStatus: unknown; currentRequestId: unknown; rangeEarliest: unknown; rangeLatest: unknown; invitedParticipantCount: unknown; constraintSubmissionCount: unknown; allConstraintsCollected: unknown; initiatorInformed: unknown; participantsNotified: unknown; proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting (async). */
export function wrapMeetingSchedulerSystemRequestMeetingAsync(impl: MeetingSchedulerSystemRequestMeetingAsyncImpl): (self: MeetingSchedulerSystem, reqId: string, earliest: string, latest: string, participantCount: number) => Promise<MeetingSchedulerSystem> {
  return async (self, reqId, earliest, latest, participantCount) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "IDLE"))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: self.requestStatus = 'IDLE'");
    }
    if (!((reqId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: reqId <> null");
    }
    if (!((earliest !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: earliest <> null");
    }
    if (!((latest !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: latest <> null");
    }
    if (!((participantCount > 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: participantCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reqId, earliest, latest, participantCount);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "OPEN"))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.requestStatus = 'OPEN'");
      }
      if (!((__result.self.currentRequestId === reqId))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.currentRequestId = reqId");
      }
      if (!((__result.self.rangeEarliest === earliest))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.rangeEarliest = earliest");
      }
      if (!((__result.self.rangeLatest === latest))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.rangeLatest = latest");
      }
      if (!((__result.self.invitedParticipantCount === participantCount))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.invitedParticipantCount = participantCount");
      }
      if (!((__result.self.constraintSubmissionCount === 0))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.constraintSubmissionCount = 0");
      }
      if (!((__result.self.allConstraintsCollected === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.allConstraintsCollected = false");
      }
      if (!((__result.self.initiatorInformed === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.initiatorInformed = false");
      }
      if (!((__result.self.participantsNotified === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.participantsNotified = false");
      }
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.proposedDate = ''");
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

/** Impl signature for MeetingSchedulerSystem.submitConstraints. User supplies this. */
export type MeetingSchedulerSystemSubmitConstraintsImpl = (self: MeetingSchedulerSystem, participantId: string, excluded: ReadonlySet<string>, preferred: ReadonlySet<string>) => { self: MeetingSchedulerSystem; modified: { allExcludedDates: unknown; commonPreferredDates: unknown; constraintSubmissionCount: unknown; allConstraintsCollected: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.submitConstraints. */
export function wrapMeetingSchedulerSystemSubmitConstraints(impl: MeetingSchedulerSystemSubmitConstraintsImpl): (self: MeetingSchedulerSystem, participantId: string, excluded: ReadonlySet<string>, preferred: ReadonlySet<string>) => MeetingSchedulerSystem {
  return (self, participantId, excluded, preferred) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: participantId <> null");
    }
    if (!((self.constraintSubmissionCount < self.invitedParticipantCount))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: self.constraintSubmissionCount < self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.allExcludedDates": self.allExcludedDates,
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId, excluded, preferred);
      const postViolations: string[] = [];
      if (!(Array.from(excluded).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: excluded->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!(Array.from(preferred).every((__x) => ((__result.self.commonPreferredDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: preferred->forAll(d | self.commonPreferredDates->includes(d))");
      }
      if (!(Array.from(__pre["self.allExcludedDates"]).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!((__result.self.constraintSubmissionCount === (__pre["self.constraintSubmissionCount"] + 1)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre + 1");
      }
      if (!((__result.self.allConstraintsCollected === (__result.self.constraintSubmissionCount === __result.self.invitedParticipantCount)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.allConstraintsCollected =\n            (self.constraintSubmissionCount = self.invitedParticipantCount)");
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

/** Impl signature for MeetingSchedulerSystem.submitConstraints (async). User supplies this. */
export type MeetingSchedulerSystemSubmitConstraintsAsyncImpl = (self: MeetingSchedulerSystem, participantId: string, excluded: ReadonlySet<string>, preferred: ReadonlySet<string>) => Promise<{ self: MeetingSchedulerSystem; modified: { allExcludedDates: unknown; commonPreferredDates: unknown; constraintSubmissionCount: unknown; allConstraintsCollected: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.submitConstraints (async). */
export function wrapMeetingSchedulerSystemSubmitConstraintsAsync(impl: MeetingSchedulerSystemSubmitConstraintsAsyncImpl): (self: MeetingSchedulerSystem, participantId: string, excluded: ReadonlySet<string>, preferred: ReadonlySet<string>) => Promise<MeetingSchedulerSystem> {
  return async (self, participantId, excluded, preferred) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: participantId <> null");
    }
    if (!((self.constraintSubmissionCount < self.invitedParticipantCount))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: self.constraintSubmissionCount < self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.allExcludedDates": self.allExcludedDates,
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId, excluded, preferred);
      const postViolations: string[] = [];
      if (!(Array.from(excluded).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: excluded->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!(Array.from(preferred).every((__x) => ((__result.self.commonPreferredDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: preferred->forAll(d | self.commonPreferredDates->includes(d))");
      }
      if (!(Array.from(__pre["self.allExcludedDates"]).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!((__result.self.constraintSubmissionCount === (__pre["self.constraintSubmissionCount"] + 1)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre + 1");
      }
      if (!((__result.self.allConstraintsCollected === (__result.self.constraintSubmissionCount === __result.self.invitedParticipantCount)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.allConstraintsCollected =\n            (self.constraintSubmissionCount = self.invitedParticipantCount)");
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

/** Impl signature for MeetingSchedulerSystem.proposeDate. User supplies this. */
export type MeetingSchedulerSystemProposeDateImpl = (self: MeetingSchedulerSystem, candidate: string) => { self: MeetingSchedulerSystem; modified: { proposedDate: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate. */
export function wrapMeetingSchedulerSystemProposeDate(impl: MeetingSchedulerSystemProposeDateImpl): (self: MeetingSchedulerSystem, candidate: string) => MeetingSchedulerSystem {
  return (self, candidate) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((self.allConstraintsCollected === true))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.allConstraintsCollected = true");
    }
    if (!((candidate !== null))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: candidate <> null");
    }
    if (!((candidate !== ""))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: candidate <> ''");
    }
    if (!(!((self.allExcludedDates).has(candidate)))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: not self.allExcludedDates->includes(candidate)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, candidate);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === candidate))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate = candidate");
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

/** Impl signature for MeetingSchedulerSystem.proposeDate (async). User supplies this. */
export type MeetingSchedulerSystemProposeDateAsyncImpl = (self: MeetingSchedulerSystem, candidate: string) => Promise<{ self: MeetingSchedulerSystem; modified: { proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate (async). */
export function wrapMeetingSchedulerSystemProposeDateAsync(impl: MeetingSchedulerSystemProposeDateAsyncImpl): (self: MeetingSchedulerSystem, candidate: string) => Promise<MeetingSchedulerSystem> {
  return async (self, candidate) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((self.allConstraintsCollected === true))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.allConstraintsCollected = true");
    }
    if (!((candidate !== null))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: candidate <> null");
    }
    if (!((candidate !== ""))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: candidate <> ''");
    }
    if (!(!((self.allExcludedDates).has(candidate)))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: not self.allExcludedDates->includes(candidate)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, candidate);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === candidate))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate = candidate");
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

/** Impl signature for MeetingSchedulerSystem.reportConflict. User supplies this. */
export type MeetingSchedulerSystemReportConflictImpl = (self: MeetingSchedulerSystem) => { self: MeetingSchedulerSystem; modified: { requestStatus: unknown; initiatorInformed: unknown; proposedDate: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict. */
export function wrapMeetingSchedulerSystemReportConflict(impl: MeetingSchedulerSystemReportConflictImpl): (self: MeetingSchedulerSystem) => MeetingSchedulerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((self.allConstraintsCollected === true))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.allConstraintsCollected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "CONFLICT"))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.requestStatus = 'CONFLICT'");
      }
      if (!((__result.self.initiatorInformed === true))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.initiatorInformed = true");
      }
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.proposedDate = ''");
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

/** Impl signature for MeetingSchedulerSystem.reportConflict (async). User supplies this. */
export type MeetingSchedulerSystemReportConflictAsyncImpl = (self: MeetingSchedulerSystem) => Promise<{ self: MeetingSchedulerSystem; modified: { requestStatus: unknown; initiatorInformed: unknown; proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict (async). */
export function wrapMeetingSchedulerSystemReportConflictAsync(impl: MeetingSchedulerSystemReportConflictAsyncImpl): (self: MeetingSchedulerSystem) => Promise<MeetingSchedulerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((self.allConstraintsCollected === true))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.allConstraintsCollected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "CONFLICT"))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.requestStatus = 'CONFLICT'");
      }
      if (!((__result.self.initiatorInformed === true))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.initiatorInformed = true");
      }
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.proposedDate = ''");
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

/** Impl signature for MeetingSchedulerSystem.confirmMeeting. User supplies this. */
export type MeetingSchedulerSystemConfirmMeetingImpl = (self: MeetingSchedulerSystem, loc: string) => { self: MeetingSchedulerSystem; modified: { requestStatus: unknown; location: unknown; participantsNotified: unknown; initiatorInformed: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.confirmMeeting. */
export function wrapMeetingSchedulerSystemConfirmMeeting(impl: MeetingSchedulerSystemConfirmMeetingImpl): (self: MeetingSchedulerSystem, loc: string) => MeetingSchedulerSystem {
  return (self, loc) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((self.proposedDate !== ""))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.proposedDate <> ''");
    }
    if (!(!((self.allExcludedDates).has(self.proposedDate)))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: not self.allExcludedDates->includes(self.proposedDate)");
    }
    if (!((loc !== null))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: loc <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, loc);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "CONFIRMED"))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.requestStatus = 'CONFIRMED'");
      }
      if (!((__result.self.location === loc))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.location = loc");
      }
      if (!((__result.self.participantsNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.participantsNotified = true");
      }
      if (!((__result.self.initiatorInformed === true))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.initiatorInformed = true");
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

/** Impl signature for MeetingSchedulerSystem.confirmMeeting (async). User supplies this. */
export type MeetingSchedulerSystemConfirmMeetingAsyncImpl = (self: MeetingSchedulerSystem, loc: string) => Promise<{ self: MeetingSchedulerSystem; modified: { requestStatus: unknown; location: unknown; participantsNotified: unknown; initiatorInformed: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.confirmMeeting (async). */
export function wrapMeetingSchedulerSystemConfirmMeetingAsync(impl: MeetingSchedulerSystemConfirmMeetingAsyncImpl): (self: MeetingSchedulerSystem, loc: string) => Promise<MeetingSchedulerSystem> {
  return async (self, loc) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((self.proposedDate !== ""))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.proposedDate <> ''");
    }
    if (!(!((self.allExcludedDates).has(self.proposedDate)))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: not self.allExcludedDates->includes(self.proposedDate)");
    }
    if (!((loc !== null))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: loc <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, loc);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "CONFIRMED"))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.requestStatus = 'CONFIRMED'");
      }
      if (!((__result.self.location === loc))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.location = loc");
      }
      if (!((__result.self.participantsNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.participantsNotified = true");
      }
      if (!((__result.self.initiatorInformed === true))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.initiatorInformed = true");
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

/** Impl signature for MeetingSchedulerSystem.updateConstraints. User supplies this. */
export type MeetingSchedulerSystemUpdateConstraintsImpl = (self: MeetingSchedulerSystem, participantId: string, newExcluded: ReadonlySet<string>, newPreferred: ReadonlySet<string>) => { self: MeetingSchedulerSystem; modified: { allExcludedDates: unknown; commonPreferredDates: unknown; proposedDate: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.updateConstraints. */
export function wrapMeetingSchedulerSystemUpdateConstraints(impl: MeetingSchedulerSystemUpdateConstraintsImpl): (self: MeetingSchedulerSystem, participantId: string, newExcluded: ReadonlySet<string>, newPreferred: ReadonlySet<string>) => MeetingSchedulerSystem {
  return (self, participantId, newExcluded, newPreferred) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: participantId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.allExcludedDates": self.allExcludedDates,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId, newExcluded, newPreferred);
      const postViolations: string[] = [];
      if (!(Array.from(newExcluded).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: newExcluded->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!(Array.from(newPreferred).every((__x) => ((__result.self.commonPreferredDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: newPreferred->forAll(d | self.commonPreferredDates->includes(d))");
      }
      if (!(Array.from(__pre["self.allExcludedDates"]).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.proposedDate = ''");
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

/** Impl signature for MeetingSchedulerSystem.updateConstraints (async). User supplies this. */
export type MeetingSchedulerSystemUpdateConstraintsAsyncImpl = (self: MeetingSchedulerSystem, participantId: string, newExcluded: ReadonlySet<string>, newPreferred: ReadonlySet<string>) => Promise<{ self: MeetingSchedulerSystem; modified: { allExcludedDates: unknown; commonPreferredDates: unknown; proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.updateConstraints (async). */
export function wrapMeetingSchedulerSystemUpdateConstraintsAsync(impl: MeetingSchedulerSystemUpdateConstraintsAsyncImpl): (self: MeetingSchedulerSystem, participantId: string, newExcluded: ReadonlySet<string>, newPreferred: ReadonlySet<string>) => Promise<MeetingSchedulerSystem> {
  return async (self, participantId, newExcluded, newPreferred) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: participantId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.allExcludedDates": self.allExcludedDates,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId, newExcluded, newPreferred);
      const postViolations: string[] = [];
      if (!(Array.from(newExcluded).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: newExcluded->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!(Array.from(newPreferred).every((__x) => ((__result.self.commonPreferredDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: newPreferred->forAll(d | self.commonPreferredDates->includes(d))");
      }
      if (!(Array.from(__pre["self.allExcludedDates"]).every((__x) => ((__result.self.allExcludedDates).has(__x))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.allExcludedDates@pre->forAll(d | self.allExcludedDates->includes(d))");
      }
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.proposedDate = ''");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectExcludedDate. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectExcludedDateImpl = (self: MeetingSchedulerSystemFormalized, candidate: string) => { self: MeetingSchedulerSystemFormalized; modified: { proposedDate: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectExcludedDate. */
export function wrapMeetingSchedulerSystemFormalizedRejectExcludedDate(impl: MeetingSchedulerSystemFormalizedRejectExcludedDateImpl): (self: MeetingSchedulerSystemFormalized, candidate: string) => MeetingSchedulerSystemFormalized {
  return (self, candidate) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((candidate !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] pre violated: candidate <> null");
    }
    if (!((candidate !== ""))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] pre violated: candidate <> ''");
    }
    if (!((self.allExcludedDates).has(candidate))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] pre violated: self.allExcludedDates->includes(candidate)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, candidate);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] post violated: self.proposedDate = ''");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectExcludedDate (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectExcludedDateAsyncImpl = (self: MeetingSchedulerSystemFormalized, candidate: string) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: { proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectExcludedDate (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectExcludedDateAsync(impl: MeetingSchedulerSystemFormalizedRejectExcludedDateAsyncImpl): (self: MeetingSchedulerSystemFormalized, candidate: string) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, candidate) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((candidate !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] pre violated: candidate <> null");
    }
    if (!((candidate !== ""))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] pre violated: candidate <> ''");
    }
    if (!((self.allExcludedDates).has(candidate))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] pre violated: self.allExcludedDates->includes(candidate)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, candidate);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === ""))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectExcludedDate] post violated: self.proposedDate = ''");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectPrematureConfirm. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectPrematureConfirmImpl = (self: MeetingSchedulerSystemFormalized) => { self: MeetingSchedulerSystemFormalized; modified: { initiatorInformed: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectPrematureConfirm. */
export function wrapMeetingSchedulerSystemFormalizedRejectPrematureConfirm(impl: MeetingSchedulerSystemFormalizedRejectPrematureConfirmImpl): (self: MeetingSchedulerSystemFormalized) => MeetingSchedulerSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectPrematureConfirm] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!(((self.allConstraintsCollected === false) || (self.proposedDate === "")))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectPrematureConfirm] pre violated: self.allConstraintsCollected = false or self.proposedDate = ''");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorInformed === false))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectPrematureConfirm] post violated: self.initiatorInformed = false");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectPrematureConfirm (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectPrematureConfirmAsyncImpl = (self: MeetingSchedulerSystemFormalized) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: { initiatorInformed: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectPrematureConfirm (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectPrematureConfirmAsync(impl: MeetingSchedulerSystemFormalizedRejectPrematureConfirmAsyncImpl): (self: MeetingSchedulerSystemFormalized) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectPrematureConfirm] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!(((self.allConstraintsCollected === false) || (self.proposedDate === "")))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectPrematureConfirm] pre violated: self.allConstraintsCollected = false or self.proposedDate = ''");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorInformed === false))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectPrematureConfirm] post violated: self.initiatorInformed = false");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectDuplicateRequest. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectDuplicateRequestImpl = (self: MeetingSchedulerSystemFormalized, newReqId: string) => { self: MeetingSchedulerSystemFormalized; modified: { requestStatus: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectDuplicateRequest. */
export function wrapMeetingSchedulerSystemFormalizedRejectDuplicateRequest(impl: MeetingSchedulerSystemFormalizedRejectDuplicateRequestImpl): (self: MeetingSchedulerSystemFormalized, newReqId: string) => MeetingSchedulerSystemFormalized {
  return (self, newReqId) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateRequest] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((newReqId !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateRequest] pre violated: newReqId <> null");
    }
    if (!((newReqId !== self.currentRequestId))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateRequest] pre violated: newReqId <> self.currentRequestId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newReqId);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "OPEN"))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateRequest] post violated: self.requestStatus = 'OPEN'");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectDuplicateRequest (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectDuplicateRequestAsyncImpl = (self: MeetingSchedulerSystemFormalized, newReqId: string) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: { requestStatus: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectDuplicateRequest (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectDuplicateRequestAsync(impl: MeetingSchedulerSystemFormalizedRejectDuplicateRequestAsyncImpl): (self: MeetingSchedulerSystemFormalized, newReqId: string) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, newReqId) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateRequest] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((newReqId !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateRequest] pre violated: newReqId <> null");
    }
    if (!((newReqId !== self.currentRequestId))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateRequest] pre violated: newReqId <> self.currentRequestId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newReqId);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "OPEN"))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateRequest] post violated: self.requestStatus = 'OPEN'");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectInvertedRange. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectInvertedRangeImpl = (self: MeetingSchedulerSystemFormalized, earliest: string, latest: string, callerAssertedInverted: boolean) => { self: MeetingSchedulerSystemFormalized; modified: { requestStatus: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectInvertedRange. */
export function wrapMeetingSchedulerSystemFormalizedRejectInvertedRange(impl: MeetingSchedulerSystemFormalizedRejectInvertedRangeImpl): (self: MeetingSchedulerSystemFormalized, earliest: string, latest: string, callerAssertedInverted: boolean) => MeetingSchedulerSystemFormalized {
  return (self, earliest, latest, callerAssertedInverted) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "IDLE"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] pre violated: self.requestStatus = 'IDLE'");
    }
    if (!((earliest !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] pre violated: earliest <> null");
    }
    if (!((latest !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] pre violated: latest <> null");
    }
    if (!((callerAssertedInverted === true))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] pre violated: callerAssertedInverted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, earliest, latest, callerAssertedInverted);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "IDLE"))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] post violated: self.requestStatus = 'IDLE'");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectInvertedRange (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectInvertedRangeAsyncImpl = (self: MeetingSchedulerSystemFormalized, earliest: string, latest: string, callerAssertedInverted: boolean) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: { requestStatus: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectInvertedRange (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectInvertedRangeAsync(impl: MeetingSchedulerSystemFormalizedRejectInvertedRangeAsyncImpl): (self: MeetingSchedulerSystemFormalized, earliest: string, latest: string, callerAssertedInverted: boolean) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, earliest, latest, callerAssertedInverted) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "IDLE"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] pre violated: self.requestStatus = 'IDLE'");
    }
    if (!((earliest !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] pre violated: earliest <> null");
    }
    if (!((latest !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] pre violated: latest <> null");
    }
    if (!((callerAssertedInverted === true))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] pre violated: callerAssertedInverted = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, earliest, latest, callerAssertedInverted);
      const postViolations: string[] = [];
      if (!((__result.self.requestStatus === "IDLE"))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectInvertedRange] post violated: self.requestStatus = 'IDLE'");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectStaleConstraintRetentionImpl = (self: MeetingSchedulerSystemFormalized, participantId: string) => { self: MeetingSchedulerSystemFormalized; modified: { participantsNotified: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention. */
export function wrapMeetingSchedulerSystemFormalizedRejectStaleConstraintRetention(impl: MeetingSchedulerSystemFormalizedRejectStaleConstraintRetentionImpl): (self: MeetingSchedulerSystemFormalized, participantId: string) => MeetingSchedulerSystemFormalized {
  return (self, participantId) => {
    const preViolations: string[] = [];
    if (!(((self.requestStatus === "CONFIRMED") || (self.requestStatus === "CONFLICT")))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention] pre violated: self.requestStatus = 'CONFIRMED' or self.requestStatus = 'CONFLICT'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention] pre violated: participantId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantsNotified": self.participantsNotified,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId);
      const postViolations: string[] = [];
      if (!((__result.self.participantsNotified === __pre["self.participantsNotified"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention] post violated: self.participantsNotified = self.participantsNotified@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectStaleConstraintRetentionAsyncImpl = (self: MeetingSchedulerSystemFormalized, participantId: string) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: { participantsNotified: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectStaleConstraintRetentionAsync(impl: MeetingSchedulerSystemFormalizedRejectStaleConstraintRetentionAsyncImpl): (self: MeetingSchedulerSystemFormalized, participantId: string) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, participantId) => {
    const preViolations: string[] = [];
    if (!(((self.requestStatus === "CONFIRMED") || (self.requestStatus === "CONFLICT")))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention] pre violated: self.requestStatus = 'CONFIRMED' or self.requestStatus = 'CONFLICT'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention] pre violated: participantId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantsNotified": self.participantsNotified,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId);
      const postViolations: string[] = [];
      if (!((__result.self.participantsNotified === __pre["self.participantsNotified"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectStaleConstraintRetention] post violated: self.participantsNotified = self.participantsNotified@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectOverQuotaSubmissionImpl = (self: MeetingSchedulerSystemFormalized, participantId: string) => { self: MeetingSchedulerSystemFormalized; modified: { constraintSubmissionCount: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission. */
export function wrapMeetingSchedulerSystemFormalizedRejectOverQuotaSubmission(impl: MeetingSchedulerSystemFormalizedRejectOverQuotaSubmissionImpl): (self: MeetingSchedulerSystemFormalized, participantId: string) => MeetingSchedulerSystemFormalized {
  return (self, participantId) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission] pre violated: participantId <> null");
    }
    if (!((self.constraintSubmissionCount >= self.invitedParticipantCount))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission] pre violated: self.constraintSubmissionCount >= self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId);
      const postViolations: string[] = [];
      if (!((__result.self.constraintSubmissionCount === __pre["self.constraintSubmissionCount"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectOverQuotaSubmissionAsyncImpl = (self: MeetingSchedulerSystemFormalized, participantId: string) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: { constraintSubmissionCount: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectOverQuotaSubmissionAsync(impl: MeetingSchedulerSystemFormalizedRejectOverQuotaSubmissionAsyncImpl): (self: MeetingSchedulerSystemFormalized, participantId: string) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, participantId) => {
    const preViolations: string[] = [];
    if (!((self.requestStatus === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission] pre violated: self.requestStatus = 'OPEN'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission] pre violated: participantId <> null");
    }
    if (!((self.constraintSubmissionCount >= self.invitedParticipantCount))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission] pre violated: self.constraintSubmissionCount >= self.invitedParticipantCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.constraintSubmissionCount": self.constraintSubmissionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId);
      const postViolations: string[] = [];
      if (!((__result.self.constraintSubmissionCount === __pre["self.constraintSubmissionCount"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectOverQuotaSubmission] post violated: self.constraintSubmissionCount = self.constraintSubmissionCount@pre");
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

