// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───

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

