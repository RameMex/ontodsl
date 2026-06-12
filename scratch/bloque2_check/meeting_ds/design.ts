// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for SchedulerOrchestrator. Runtime: string. Compile-time: branded. */
export type SchedulerOrchestratorId = string & { readonly __brand: "SchedulerOrchestratorId" };
/** Identity type for ConstraintManager. Runtime: string. Compile-time: branded. */
export type ConstraintManagerId = string & { readonly __brand: "ConstraintManagerId" };
/** Identity type for ProposerEngine. Runtime: string. Compile-time: branded. */
export type ProposerEngineId = string & { readonly __brand: "ProposerEngineId" };
/** Identity type for NotificationService. Runtime: string. Compile-time: branded. */
export type NotificationServiceId = string & { readonly __brand: "NotificationServiceId" };
/** Identity type for OrchestratorConstraintLink. Runtime: string. Compile-time: branded. */
export type OrchestratorConstraintLinkId = string & { readonly __brand: "OrchestratorConstraintLinkId" };
/** Identity type for OrchestratorProposerLink. Runtime: string. Compile-time: branded. */
export type OrchestratorProposerLinkId = string & { readonly __brand: "OrchestratorProposerLinkId" };
/** Identity type for OrchestratorNotificationLink. Runtime: string. Compile-time: branded. */
export type OrchestratorNotificationLinkId = string & { readonly __brand: "OrchestratorNotificationLinkId" };
/** Identity type for DesignConstraintUpdateFlow. Runtime: string. Compile-time: branded. */
export type DesignConstraintUpdateFlowId = string & { readonly __brand: "DesignConstraintUpdateFlowId" };
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
/** Identity type for MeetingProposal. Runtime: string. Compile-time: branded. */
export type MeetingProposalId = string & { readonly __brand: "MeetingProposalId" };
/** Identity type for ConstraintsRespectedCommitment. Runtime: string. Compile-time: branded. */
export type ConstraintsRespectedCommitmentId = string & { readonly __brand: "ConstraintsRespectedCommitmentId" };
/** Identity type for ConflictReportCommitment. Runtime: string. Compile-time: branded. */
export type ConflictReportCommitmentId = string & { readonly __brand: "ConflictReportCommitmentId" };
/** Identity type for ParticipantInformedCommitment. Runtime: string. Compile-time: branded. */
export type ParticipantInformedCommitmentId = string & { readonly __brand: "ParticipantInformedCommitmentId" };
/** Identity type for ConstraintsCurrentCommitment. Runtime: string. Compile-time: branded. */
export type ConstraintsCurrentCommitmentId = string & { readonly __brand: "ConstraintsCurrentCommitmentId" };
/** Identity type for MeetingSchedulingFlow. Runtime: string. Compile-time: branded. */
export type MeetingSchedulingFlowId = string & { readonly __brand: "MeetingSchedulingFlowId" };
/** Identity type for ConflictResolutionFlow. Runtime: string. Compile-time: branded. */
export type ConflictResolutionFlowId = string & { readonly __brand: "ConflictResolutionFlowId" };
/** Identity type for MeetingSchedulerSystem. Runtime: string. Compile-time: branded. */
export type MeetingSchedulerSystemId = string & { readonly __brand: "MeetingSchedulerSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface SchedulerOrchestrator {
  readonly orchestratorId: SchedulerOrchestratorId;
  readonly requestId: string;
  readonly initiatorId: string;
  readonly dateRangeStart: number;
  readonly dateRangeEnd: number;
  readonly proposedDate: number;
  readonly location: string;
  readonly status: string;
  readonly conflictDetected: boolean;
  readonly initiatorNotified: boolean;
}

/** @stereotype <<Kind>> */
export interface ConstraintManager {
  readonly managerId: ConstraintManagerId;
  readonly requestId: string;
  readonly participantExclusionCount: number;
  readonly participantPreferenceCount: number;
  readonly constraintsReceived: boolean;
}

/** @stereotype <<Kind>> */
export interface ProposerEngine {
  readonly engineId: ProposerEngineId;
  readonly lastProposedDate: number;
  readonly feasibleDateFound: boolean;
}

/** @stereotype <<Kind>> */
export interface NotificationService {
  readonly serviceId: NotificationServiceId;
  readonly notificationCount: number;
  readonly lastNotificationType: string;
}

/** @stereotype <<Role>> */
export interface OrchestratorEndpointInConstraint {
  readonly orchestratorId: string;
}

/** @stereotype <<Role>> */
export interface ConstraintManagerEndpoint {
  readonly managerId: string;
}

/** @stereotype <<Role>> */
export interface OrchestratorEndpointInProposer {
  readonly orchestratorId: string;
}

/** @stereotype <<Role>> */
export interface ProposerEngineEndpoint {
  readonly engineId: string;
}

/** @stereotype <<Role>> */
export interface OrchestratorEndpointInNotification {
  readonly orchestratorId: string;
}

/** @stereotype <<Role>> */
export interface NotificationServiceEndpoint {
  readonly serviceId: string;
}

/** @stereotype <<Relator>> */
export interface OrchestratorConstraintLink {
  readonly linkId: OrchestratorConstraintLinkId;
  readonly requestId: string;
  readonly lastTransferTimestamp: number;
}

/** @stereotype <<Relator>> */
export interface OrchestratorProposerLink {
  readonly linkId: OrchestratorProposerLinkId;
  readonly requestId: string;
  readonly lastProposalResult: number;
  readonly lastProposalSuccess: boolean;
}

/** @stereotype <<Relator>> */
export interface OrchestratorNotificationLink {
  readonly linkId: OrchestratorNotificationLinkId;
  readonly requestId: string;
  readonly lastNotificationCount: number;
}

/** @stereotype <<Happening>> */
export interface DesignConstraintUpdateFlow {
  readonly flowId: DesignConstraintUpdateFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly orchestratorId: string;
  readonly constraintManagerId: string;
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
export interface SchedulerVendor {
  readonly vendorId: SchedulerVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface ExclusionSet {
  readonly exclusionSetId: ExclusionSetId;
  readonly dates: ReadonlySet<string>;
}

/** @stereotype <<Kind>> */
export interface PreferenceSet {
  readonly preferenceSetId: PreferenceSetId;
  readonly dates: ReadonlySet<string>;
}

/** @stereotype <<Kind>> */
export interface DateRange {
  readonly dateRangeId: DateRangeId;
  readonly startDate: string;
  readonly endDate: string;
}

/** @stereotype <<Kind>> */
export interface MeetingProposal {
  readonly proposalId: MeetingProposalId;
  readonly proposedDate: string;
  readonly location: string;
}

/** @stereotype <<Commitment>> */
export interface ConstraintsRespectedCommitment {
  readonly commitmentId: ConstraintsRespectedCommitmentId;
  readonly minFeasibleDateCount: number;
}

/** @stereotype <<Commitment>> */
export interface ConflictReportCommitment {
  readonly commitmentId: ConflictReportCommitmentId;
  readonly conflictDetected: boolean;
}

/** @stereotype <<Commitment>> */
export interface ParticipantInformedCommitment {
  readonly commitmentId: ParticipantInformedCommitmentId;
  readonly notificationSent: boolean;
}

/** @stereotype <<Commitment>> */
export interface ConstraintsCurrentCommitment {
  readonly commitmentId: ConstraintsCurrentCommitmentId;
  readonly constraintUpdateAccepted: boolean;
}

/** @stereotype <<Category>> */
export interface MeetingSchedulingConstraints {
}

/** @stereotype <<Category>> */
export interface CommunicationConstraints {
}

/** @stereotype <<Happening>> */
export interface MeetingSchedulingFlow {
  readonly flowId: MeetingSchedulingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ConflictResolutionFlow {
  readonly flowId: ConflictResolutionFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface MeetingSchedulerSystem extends MeetingSchedulingConstraints, CommunicationConstraints {
  readonly systemId: MeetingSchedulerSystemId;
  readonly requestId: string;
  readonly initiatorId: string;
  readonly dateRangeStart: number;
  readonly dateRangeEnd: number;
  readonly proposedDate: number;
  readonly location: string;
  readonly status: string;
  readonly conflictReported: boolean;
  readonly participantNotified: boolean;
  readonly constraintsUpdated: boolean;
}

/** @stereotype <<Category>> */
export interface GdprArticle5Compliant {
  readonly gdprComplianceId: string;
}

/** @stereotype <<Category>> */
export interface GdprRightToBeInformed {
  readonly privacyNoticeUri: string;
}

/** @stereotype <<Category>> */
export interface Wcag21LevelAa {
  readonly wcagVersion: string;
}

/** @stereotype <<Category>> */
export interface ChronologicalOrdering {
}

/** @stereotype <<Category>> */
export interface ConstraintConsistency {
}

/** @stereotype <<Category>> */
export interface CommunicationReliability {
}

/** @stereotype <<Subkind>> */
export interface MeetingSchedulerSystemFormalized extends MeetingSchedulerSystem {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionLabel: string;
  readonly description: string;
  readonly rationale: string;
  readonly owner: string;
}


// ─── Factory functions ───

export function makeSchedulerOrchestrator(data: {
  orchestratorId: string;
  requestId: string;
  initiatorId: string;
  dateRangeStart: number;
  dateRangeEnd: number;
  proposedDate: number;
  location: string;
  status: string;
  conflictDetected: boolean;
  initiatorNotified: boolean;
}): SchedulerOrchestrator {
  return {
    orchestratorId: data.orchestratorId as SchedulerOrchestratorId,
    requestId: data.requestId,
    initiatorId: data.initiatorId,
    dateRangeStart: data.dateRangeStart,
    dateRangeEnd: data.dateRangeEnd,
    proposedDate: data.proposedDate,
    location: data.location,
    status: data.status,
    conflictDetected: data.conflictDetected,
    initiatorNotified: data.initiatorNotified,
  };
}

export function makeConstraintManager(data: {
  managerId: string;
  requestId: string;
  participantExclusionCount: number;
  participantPreferenceCount: number;
  constraintsReceived: boolean;
}): ConstraintManager {
  return {
    managerId: data.managerId as ConstraintManagerId,
    requestId: data.requestId,
    participantExclusionCount: data.participantExclusionCount,
    participantPreferenceCount: data.participantPreferenceCount,
    constraintsReceived: data.constraintsReceived,
  };
}

export function makeProposerEngine(data: {
  engineId: string;
  lastProposedDate: number;
  feasibleDateFound: boolean;
}): ProposerEngine {
  return {
    engineId: data.engineId as ProposerEngineId,
    lastProposedDate: data.lastProposedDate,
    feasibleDateFound: data.feasibleDateFound,
  };
}

export function makeNotificationService(data: {
  serviceId: string;
  notificationCount: number;
  lastNotificationType: string;
}): NotificationService {
  return {
    serviceId: data.serviceId as NotificationServiceId,
    notificationCount: data.notificationCount,
    lastNotificationType: data.lastNotificationType,
  };
}

export function makeOrchestratorConstraintLink(data: {
  linkId: string;
  requestId: string;
  lastTransferTimestamp: number;
}): OrchestratorConstraintLink {
  return {
    linkId: data.linkId as OrchestratorConstraintLinkId,
    requestId: data.requestId,
    lastTransferTimestamp: data.lastTransferTimestamp,
  };
}

export function makeOrchestratorProposerLink(data: {
  linkId: string;
  requestId: string;
  lastProposalResult: number;
  lastProposalSuccess: boolean;
}): OrchestratorProposerLink {
  return {
    linkId: data.linkId as OrchestratorProposerLinkId,
    requestId: data.requestId,
    lastProposalResult: data.lastProposalResult,
    lastProposalSuccess: data.lastProposalSuccess,
  };
}

export function makeOrchestratorNotificationLink(data: {
  linkId: string;
  requestId: string;
  lastNotificationCount: number;
}): OrchestratorNotificationLink {
  return {
    linkId: data.linkId as OrchestratorNotificationLinkId,
    requestId: data.requestId,
    lastNotificationCount: data.lastNotificationCount,
  };
}

export function makeDesignConstraintUpdateFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  orchestratorId: string;
  constraintManagerId: string;
}): DesignConstraintUpdateFlow {
  return {
    flowId: data.flowId as DesignConstraintUpdateFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    orchestratorId: data.orchestratorId,
    constraintManagerId: data.constraintManagerId,
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

export function makeSchedulerVendor(data: {
  vendorId: string;
  name: string;
}): SchedulerVendor {
  return {
    vendorId: data.vendorId as SchedulerVendorId,
    name: data.name,
  };
}

export function makeExclusionSet(data: {
  exclusionSetId: string;
  dates: ReadonlySet<string>;
}): ExclusionSet {
  return {
    exclusionSetId: data.exclusionSetId as ExclusionSetId,
    dates: data.dates,
  };
}

export function makePreferenceSet(data: {
  preferenceSetId: string;
  dates: ReadonlySet<string>;
}): PreferenceSet {
  return {
    preferenceSetId: data.preferenceSetId as PreferenceSetId,
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

export function makeMeetingProposal(data: {
  proposalId: string;
  proposedDate: string;
  location: string;
}): MeetingProposal {
  return {
    proposalId: data.proposalId as MeetingProposalId,
    proposedDate: data.proposedDate,
    location: data.location,
  };
}

export function makeConstraintsRespectedCommitment(data: {
  commitmentId: string;
  minFeasibleDateCount: number;
}): ConstraintsRespectedCommitment {
  return {
    commitmentId: data.commitmentId as ConstraintsRespectedCommitmentId,
    minFeasibleDateCount: data.minFeasibleDateCount,
  };
}

export function makeConflictReportCommitment(data: {
  commitmentId: string;
  conflictDetected: boolean;
}): ConflictReportCommitment {
  return {
    commitmentId: data.commitmentId as ConflictReportCommitmentId,
    conflictDetected: data.conflictDetected,
  };
}

export function makeParticipantInformedCommitment(data: {
  commitmentId: string;
  notificationSent: boolean;
}): ParticipantInformedCommitment {
  return {
    commitmentId: data.commitmentId as ParticipantInformedCommitmentId,
    notificationSent: data.notificationSent,
  };
}

export function makeConstraintsCurrentCommitment(data: {
  commitmentId: string;
  constraintUpdateAccepted: boolean;
}): ConstraintsCurrentCommitment {
  return {
    commitmentId: data.commitmentId as ConstraintsCurrentCommitmentId,
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

export function makeConflictResolutionFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ConflictResolutionFlow {
  return {
    flowId: data.flowId as ConflictResolutionFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeMeetingSchedulerSystem(data: {
  systemId: string;
  requestId: string;
  initiatorId: string;
  dateRangeStart: number;
  dateRangeEnd: number;
  proposedDate: number;
  location: string;
  status: string;
  conflictReported: boolean;
  participantNotified: boolean;
  constraintsUpdated: boolean;
}): MeetingSchedulerSystem {
  return {
    systemId: data.systemId as MeetingSchedulerSystemId,
    requestId: data.requestId,
    initiatorId: data.initiatorId,
    dateRangeStart: data.dateRangeStart,
    dateRangeEnd: data.dateRangeEnd,
    proposedDate: data.proposedDate,
    location: data.location,
    status: data.status,
    conflictReported: data.conflictReported,
    participantNotified: data.participantNotified,
    constraintsUpdated: data.constraintsUpdated,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionLabel: string;
  description: string;
  rationale: string;
  owner: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionLabel: data.assumptionLabel,
    description: data.description,
    rationale: data.rationale,
    owner: data.owner,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for SchedulerOrchestrator. Returns empty array when valid. */
export function validateSchedulerOrchestrator(instance: SchedulerOrchestrator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.orchestratorId !== null))) {
    violations.push("[SchedulerOrchestrator] invariant violated: self.orchestratorId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[SchedulerOrchestrator] invariant violated: self.requestId <> null");
  }
  if (!((instance.initiatorId !== null))) {
    violations.push("[SchedulerOrchestrator] invariant violated: self.initiatorId <> null");
  }
  if (!((instance.dateRangeStart >= 0))) {
    violations.push("[SchedulerOrchestrator] invariant violated: self.dateRangeStart >= 0.0");
  }
  if (!((instance.dateRangeEnd >= instance.dateRangeStart))) {
    violations.push("[SchedulerOrchestrator] invariant violated: self.dateRangeEnd >= self.dateRangeStart");
  }
  if (!(((((instance.status === "OPEN") || (instance.status === "CONFIRMED")) || (instance.status === "CONFLICT")) || (instance.status === "CANCELLED")))) {
    violations.push("[SchedulerOrchestrator] invariant violated: self.status = 'OPEN' or self.status = 'CONFIRMED' or self.status = 'CONFLICT' or self.status = 'CANCELLED'");
  }
  if (!((!((instance.status === "CONFIRMED")) || (instance.proposedDate >= 0)))) {
    violations.push("[SchedulerOrchestrator] invariant violated: self.status = 'CONFIRMED' implies self.proposedDate >= 0.0");
  }
  if (!((!((instance.status === "CONFIRMED")) || (instance.location !== null)))) {
    violations.push("[SchedulerOrchestrator] invariant violated: self.status = 'CONFIRMED' implies self.location <> null");
  }
  if (!((!((instance.status === "CONFLICT")) || (instance.conflictDetected === true)))) {
    violations.push("[SchedulerOrchestrator] invariant violated: self.status = 'CONFLICT' implies self.conflictDetected = true");
  }
  return violations;
}

/** Runtime invariant check for ConstraintManager. Returns empty array when valid. */
export function validateConstraintManager(instance: ConstraintManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[ConstraintManager] invariant violated: self.managerId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[ConstraintManager] invariant violated: self.requestId <> null");
  }
  if (!((instance.participantExclusionCount >= 0))) {
    violations.push("[ConstraintManager] invariant violated: self.participantExclusionCount >= 0");
  }
  if (!((instance.participantPreferenceCount >= 0))) {
    violations.push("[ConstraintManager] invariant violated: self.participantPreferenceCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for ProposerEngine. Returns empty array when valid. */
export function validateProposerEngine(instance: ProposerEngine): readonly string[] {
  const violations: string[] = [];
  if (!((instance.engineId !== null))) {
    violations.push("[ProposerEngine] invariant violated: self.engineId <> null");
  }
  return violations;
}

/** Runtime invariant check for NotificationService. Returns empty array when valid. */
export function validateNotificationService(instance: NotificationService): readonly string[] {
  const violations: string[] = [];
  if (!((instance.serviceId !== null))) {
    violations.push("[NotificationService] invariant violated: self.serviceId <> null");
  }
  if (!((instance.notificationCount >= 0))) {
    violations.push("[NotificationService] invariant violated: self.notificationCount >= 0");
  }
  if (!((((instance.lastNotificationType === "CONFIRMATION") || (instance.lastNotificationType === "CONFLICT")) || (instance.lastNotificationType === "CANCELLATION")))) {
    violations.push("[NotificationService] invariant violated: self.lastNotificationType = 'CONFIRMATION' or self.lastNotificationType = 'CONFLICT' or self.lastNotificationType = 'CANCELLATION'");
  }
  return violations;
}

/** Runtime invariant check for OrchestratorConstraintLink. Returns empty array when valid. */
export function validateOrchestratorConstraintLink(instance: OrchestratorConstraintLink): readonly string[] {
  const violations: string[] = [];
  if (!((instance.linkId !== null))) {
    violations.push("[OrchestratorConstraintLink] invariant violated: self.linkId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[OrchestratorConstraintLink] invariant violated: self.requestId <> null");
  }
  if (!((instance.lastTransferTimestamp >= 0))) {
    violations.push("[OrchestratorConstraintLink] invariant violated: self.lastTransferTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for OrchestratorProposerLink. Returns empty array when valid. */
export function validateOrchestratorProposerLink(instance: OrchestratorProposerLink): readonly string[] {
  const violations: string[] = [];
  if (!((instance.linkId !== null))) {
    violations.push("[OrchestratorProposerLink] invariant violated: self.linkId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[OrchestratorProposerLink] invariant violated: self.requestId <> null");
  }
  return violations;
}

/** Runtime invariant check for OrchestratorNotificationLink. Returns empty array when valid. */
export function validateOrchestratorNotificationLink(instance: OrchestratorNotificationLink): readonly string[] {
  const violations: string[] = [];
  if (!((instance.linkId !== null))) {
    violations.push("[OrchestratorNotificationLink] invariant violated: self.linkId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[OrchestratorNotificationLink] invariant violated: self.requestId <> null");
  }
  if (!((instance.lastNotificationCount >= 0))) {
    violations.push("[OrchestratorNotificationLink] invariant violated: self.lastNotificationCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for DesignConstraintUpdateFlow. Returns empty array when valid. */
export function validateDesignConstraintUpdateFlow(instance: DesignConstraintUpdateFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DesignConstraintUpdateFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[DesignConstraintUpdateFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[DesignConstraintUpdateFlow] invariant violated: self.outcome <> null");
  }
  if (!((instance.orchestratorId !== null))) {
    violations.push("[DesignConstraintUpdateFlow] invariant violated: self.orchestratorId <> null");
  }
  if (!((instance.constraintManagerId !== null))) {
    violations.push("[DesignConstraintUpdateFlow] invariant violated: self.constraintManagerId <> null");
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

/** Runtime invariant check for SchedulerVendor. Returns empty array when valid. */
export function validateSchedulerVendor(instance: SchedulerVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[SchedulerVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for ExclusionSet. Returns empty array when valid. */
export function validateExclusionSet(instance: ExclusionSet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.exclusionSetId !== null))) {
    violations.push("[ExclusionSet] invariant violated: self.exclusionSetId <> null");
  }
  if (!(Array.from(instance.dates).every((__x) => ((__x !== null))))) {
    violations.push("[ExclusionSet] invariant violated: self.dates->forAll(d | d <> null)");
  }
  return violations;
}

/** Runtime invariant check for PreferenceSet. Returns empty array when valid. */
export function validatePreferenceSet(instance: PreferenceSet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.preferenceSetId !== null))) {
    violations.push("[PreferenceSet] invariant violated: self.preferenceSetId <> null");
  }
  if (!(Array.from(instance.dates).every((__x) => ((__x !== null))))) {
    violations.push("[PreferenceSet] invariant violated: self.dates->forAll(d | d <> null)");
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

/** Runtime invariant check for MeetingProposal. Returns empty array when valid. */
export function validateMeetingProposal(instance: MeetingProposal): readonly string[] {
  const violations: string[] = [];
  if (!((instance.proposalId !== null))) {
    violations.push("[MeetingProposal] invariant violated: self.proposalId <> null");
  }
  if (!((instance.proposedDate !== null))) {
    violations.push("[MeetingProposal] invariant violated: self.proposedDate <> null");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulingConstraints. Returns empty array when valid. */
export function validateMeetingSchedulingConstraints(instance: MeetingSchedulingConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[MeetingSchedulingConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for CommunicationConstraints. Returns empty array when valid. */
export function validateCommunicationConstraints(instance: CommunicationConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[CommunicationConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulingFlow. Returns empty array when valid. */
export function validateMeetingSchedulingFlow(instance: MeetingSchedulingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MeetingSchedulingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[MeetingSchedulingFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[MeetingSchedulingFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for ConflictResolutionFlow. Returns empty array when valid. */
export function validateConflictResolutionFlow(instance: ConflictResolutionFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ConflictResolutionFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[ConflictResolutionFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[ConflictResolutionFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulerSystem. Returns empty array when valid. */
export function validateMeetingSchedulerSystem(instance: MeetingSchedulerSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.requestId <> null");
  }
  if (!((instance.initiatorId !== null))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.initiatorId <> null");
  }
  if (!((instance.dateRangeStart >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.dateRangeStart >= 0.0");
  }
  if (!((instance.dateRangeEnd >= instance.dateRangeStart))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.dateRangeEnd >= self.dateRangeStart");
  }
  if (!(((((instance.status === "OPEN") || (instance.status === "CONFIRMED")) || (instance.status === "CONFLICT")) || (instance.status === "CANCELLED")))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.status = 'OPEN' or self.status = 'CONFIRMED' or self.status = 'CONFLICT' or self.status = 'CANCELLED'");
  }
  if (!((!((instance.status === "CONFIRMED")) || (instance.proposedDate >= 0)))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.status = 'CONFIRMED' implies self.proposedDate >= 0.0");
  }
  if (!((!((instance.status === "CONFIRMED")) || (instance.location !== null)))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.status = 'CONFIRMED' implies self.location <> null");
  }
  if (!((!((instance.status === "CONFLICT")) || (instance.conflictReported === true)))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.status = 'CONFLICT' implies self.conflictReported = true");
  }
  return violations;
}

/** Runtime invariant check for GdprArticle5Compliant. Returns empty array when valid. */
export function validateGdprArticle5Compliant(instance: GdprArticle5Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.gdprComplianceId !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.gdprComplianceId <> null");
  }
  return violations;
}

/** Runtime invariant check for GdprRightToBeInformed. Returns empty array when valid. */
export function validateGdprRightToBeInformed(instance: GdprRightToBeInformed): readonly string[] {
  const violations: string[] = [];
  if (!((instance.privacyNoticeUri !== null))) {
    violations.push("[GdprRightToBeInformed] invariant violated: self.privacyNoticeUri <> null");
  }
  return violations;
}

/** Runtime invariant check for Wcag21LevelAa. Returns empty array when valid. */
export function validateWcag21LevelAa(instance: Wcag21LevelAa): readonly string[] {
  const violations: string[] = [];
  if (!((instance.wcagVersion === "2.1"))) {
    violations.push("[Wcag21LevelAa] invariant violated: self.wcagVersion = '2.1'");
  }
  return violations;
}

/** Runtime invariant check for ChronologicalOrdering. Returns empty array when valid. */
export function validateChronologicalOrdering(instance: ChronologicalOrdering): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ChronologicalOrdering] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for ConstraintConsistency. Returns empty array when valid. */
export function validateConstraintConsistency(instance: ConstraintConsistency): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ConstraintConsistency] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for CommunicationReliability. Returns empty array when valid. */
export function validateCommunicationReliability(instance: CommunicationReliability): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[CommunicationReliability] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulerSystemFormalized. Returns empty array when valid. */
export function validateMeetingSchedulerSystemFormalized(instance: MeetingSchedulerSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.systemId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.requestId <> null");
  }
  if (!((instance.dateRangeStart >= 0))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.dateRangeStart >= 0.0");
  }
  if (!((instance.dateRangeEnd >= instance.dateRangeStart))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.dateRangeEnd >= self.dateRangeStart");
  }
  if (!(((((instance.status === "OPEN") || (instance.status === "CONFIRMED")) || (instance.status === "CONFLICT")) || (instance.status === "CANCELLED")))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.status = 'OPEN' or self.status = 'CONFIRMED' or self.status = 'CONFLICT' or self.status = 'CANCELLED'");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionLabel !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionLabel <> null");
  }
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((instance.rationale !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.rationale <> null");
  }
  if (!((instance.owner !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.owner <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for SchedulerOrchestrator.initiateRequest. User supplies this. */
export type SchedulerOrchestratorInitiateRequestImpl = (self: SchedulerOrchestrator, initiatorIdIn: string, startDate: number, endDate: number) => { self: SchedulerOrchestrator; modified: { initiatorId: unknown; dateRangeStart: unknown; dateRangeEnd: unknown; status: unknown; conflictDetected: unknown; initiatorNotified: unknown } };

/** Contract-checking wrapper for SchedulerOrchestrator.initiateRequest. */
export function wrapSchedulerOrchestratorInitiateRequest(impl: SchedulerOrchestratorInitiateRequestImpl): (self: SchedulerOrchestrator, initiatorIdIn: string, startDate: number, endDate: number) => SchedulerOrchestrator {
  return (self, initiatorIdIn, startDate, endDate) => {
    const preViolations: string[] = [];
    if (!((initiatorIdIn !== null))) {
      preViolations.push("[SchedulerOrchestrator.initiateRequest] pre violated: initiatorIdIn <> null");
    }
    if (!((startDate >= 0))) {
      preViolations.push("[SchedulerOrchestrator.initiateRequest] pre violated: startDate >= 0.0");
    }
    if (!((endDate >= startDate))) {
      preViolations.push("[SchedulerOrchestrator.initiateRequest] pre violated: endDate >= startDate");
    }
    if (!(((self.status === null) || (self.status === "CANCELLED")))) {
      preViolations.push("[SchedulerOrchestrator.initiateRequest] pre violated: self.status = null or self.status = 'CANCELLED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initiatorIdIn, startDate, endDate);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorId === initiatorIdIn))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.initiatorId = initiatorIdIn");
      }
      if (!((__result.self.dateRangeStart === startDate))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.dateRangeStart = startDate");
      }
      if (!((__result.self.dateRangeEnd === endDate))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.dateRangeEnd = endDate");
      }
      if (!((__result.self.status === "OPEN"))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.status = 'OPEN'");
      }
      if (!((__result.self.conflictDetected === false))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.conflictDetected = false");
      }
      if (!((__result.self.initiatorNotified === false))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.initiatorNotified = false");
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

/** Impl signature for SchedulerOrchestrator.initiateRequest (async). User supplies this. */
export type SchedulerOrchestratorInitiateRequestAsyncImpl = (self: SchedulerOrchestrator, initiatorIdIn: string, startDate: number, endDate: number) => Promise<{ self: SchedulerOrchestrator; modified: { initiatorId: unknown; dateRangeStart: unknown; dateRangeEnd: unknown; status: unknown; conflictDetected: unknown; initiatorNotified: unknown } }>;

/** Contract-checking wrapper for SchedulerOrchestrator.initiateRequest (async). */
export function wrapSchedulerOrchestratorInitiateRequestAsync(impl: SchedulerOrchestratorInitiateRequestAsyncImpl): (self: SchedulerOrchestrator, initiatorIdIn: string, startDate: number, endDate: number) => Promise<SchedulerOrchestrator> {
  return async (self, initiatorIdIn, startDate, endDate) => {
    const preViolations: string[] = [];
    if (!((initiatorIdIn !== null))) {
      preViolations.push("[SchedulerOrchestrator.initiateRequest] pre violated: initiatorIdIn <> null");
    }
    if (!((startDate >= 0))) {
      preViolations.push("[SchedulerOrchestrator.initiateRequest] pre violated: startDate >= 0.0");
    }
    if (!((endDate >= startDate))) {
      preViolations.push("[SchedulerOrchestrator.initiateRequest] pre violated: endDate >= startDate");
    }
    if (!(((self.status === null) || (self.status === "CANCELLED")))) {
      preViolations.push("[SchedulerOrchestrator.initiateRequest] pre violated: self.status = null or self.status = 'CANCELLED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initiatorIdIn, startDate, endDate);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorId === initiatorIdIn))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.initiatorId = initiatorIdIn");
      }
      if (!((__result.self.dateRangeStart === startDate))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.dateRangeStart = startDate");
      }
      if (!((__result.self.dateRangeEnd === endDate))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.dateRangeEnd = endDate");
      }
      if (!((__result.self.status === "OPEN"))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.status = 'OPEN'");
      }
      if (!((__result.self.conflictDetected === false))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.conflictDetected = false");
      }
      if (!((__result.self.initiatorNotified === false))) {
        postViolations.push("[SchedulerOrchestrator.initiateRequest] post violated: self.initiatorNotified = false");
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

/** Impl signature for SchedulerOrchestrator.confirmProposal. User supplies this. */
export type SchedulerOrchestratorConfirmProposalImpl = (self: SchedulerOrchestrator, proposedDateIn: number, locationIn: string) => { self: SchedulerOrchestrator; modified: { proposedDate: unknown; location: unknown; status: unknown } };

/** Contract-checking wrapper for SchedulerOrchestrator.confirmProposal. */
export function wrapSchedulerOrchestratorConfirmProposal(impl: SchedulerOrchestratorConfirmProposalImpl): (self: SchedulerOrchestrator, proposedDateIn: number, locationIn: string) => SchedulerOrchestrator {
  return (self, proposedDateIn, locationIn) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: self.status = 'OPEN'");
    }
    if (!((proposedDateIn >= 0))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: proposedDateIn >= 0.0");
    }
    if (!((locationIn !== null))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: locationIn <> null");
    }
    if (!((proposedDateIn >= self.dateRangeStart))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: proposedDateIn >= self.dateRangeStart");
    }
    if (!((proposedDateIn <= self.dateRangeEnd))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: proposedDateIn <= self.dateRangeEnd");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, proposedDateIn, locationIn);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === proposedDateIn))) {
        postViolations.push("[SchedulerOrchestrator.confirmProposal] post violated: self.proposedDate = proposedDateIn");
      }
      if (!((__result.self.location === locationIn))) {
        postViolations.push("[SchedulerOrchestrator.confirmProposal] post violated: self.location = locationIn");
      }
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[SchedulerOrchestrator.confirmProposal] post violated: self.status = 'CONFIRMED'");
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

/** Impl signature for SchedulerOrchestrator.confirmProposal (async). User supplies this. */
export type SchedulerOrchestratorConfirmProposalAsyncImpl = (self: SchedulerOrchestrator, proposedDateIn: number, locationIn: string) => Promise<{ self: SchedulerOrchestrator; modified: { proposedDate: unknown; location: unknown; status: unknown } }>;

/** Contract-checking wrapper for SchedulerOrchestrator.confirmProposal (async). */
export function wrapSchedulerOrchestratorConfirmProposalAsync(impl: SchedulerOrchestratorConfirmProposalAsyncImpl): (self: SchedulerOrchestrator, proposedDateIn: number, locationIn: string) => Promise<SchedulerOrchestrator> {
  return async (self, proposedDateIn, locationIn) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: self.status = 'OPEN'");
    }
    if (!((proposedDateIn >= 0))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: proposedDateIn >= 0.0");
    }
    if (!((locationIn !== null))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: locationIn <> null");
    }
    if (!((proposedDateIn >= self.dateRangeStart))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: proposedDateIn >= self.dateRangeStart");
    }
    if (!((proposedDateIn <= self.dateRangeEnd))) {
      preViolations.push("[SchedulerOrchestrator.confirmProposal] pre violated: proposedDateIn <= self.dateRangeEnd");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, proposedDateIn, locationIn);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === proposedDateIn))) {
        postViolations.push("[SchedulerOrchestrator.confirmProposal] post violated: self.proposedDate = proposedDateIn");
      }
      if (!((__result.self.location === locationIn))) {
        postViolations.push("[SchedulerOrchestrator.confirmProposal] post violated: self.location = locationIn");
      }
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[SchedulerOrchestrator.confirmProposal] post violated: self.status = 'CONFIRMED'");
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

/** Impl signature for SchedulerOrchestrator.setConflict. User supplies this. */
export type SchedulerOrchestratorSetConflictImpl = (self: SchedulerOrchestrator) => { self: SchedulerOrchestrator; modified: { conflictDetected: unknown; status: unknown } };

/** Contract-checking wrapper for SchedulerOrchestrator.setConflict. */
export function wrapSchedulerOrchestratorSetConflict(impl: SchedulerOrchestratorSetConflictImpl): (self: SchedulerOrchestrator) => SchedulerOrchestrator {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[SchedulerOrchestrator.setConflict] pre violated: self.status = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.conflictDetected === true))) {
        postViolations.push("[SchedulerOrchestrator.setConflict] post violated: self.conflictDetected = true");
      }
      if (!((__result.self.status === "CONFLICT"))) {
        postViolations.push("[SchedulerOrchestrator.setConflict] post violated: self.status = 'CONFLICT'");
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

/** Impl signature for SchedulerOrchestrator.setConflict (async). User supplies this. */
export type SchedulerOrchestratorSetConflictAsyncImpl = (self: SchedulerOrchestrator) => Promise<{ self: SchedulerOrchestrator; modified: { conflictDetected: unknown; status: unknown } }>;

/** Contract-checking wrapper for SchedulerOrchestrator.setConflict (async). */
export function wrapSchedulerOrchestratorSetConflictAsync(impl: SchedulerOrchestratorSetConflictAsyncImpl): (self: SchedulerOrchestrator) => Promise<SchedulerOrchestrator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[SchedulerOrchestrator.setConflict] pre violated: self.status = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.conflictDetected === true))) {
        postViolations.push("[SchedulerOrchestrator.setConflict] post violated: self.conflictDetected = true");
      }
      if (!((__result.self.status === "CONFLICT"))) {
        postViolations.push("[SchedulerOrchestrator.setConflict] post violated: self.status = 'CONFLICT'");
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

/** Impl signature for SchedulerOrchestrator.cancelMeetingRequest. User supplies this. */
export type SchedulerOrchestratorCancelMeetingRequestImpl = (self: SchedulerOrchestrator) => { self: SchedulerOrchestrator; modified: { status: unknown } };

/** Contract-checking wrapper for SchedulerOrchestrator.cancelMeetingRequest. */
export function wrapSchedulerOrchestratorCancelMeetingRequest(impl: SchedulerOrchestratorCancelMeetingRequestImpl): (self: SchedulerOrchestrator) => SchedulerOrchestrator {
  return (self) => {
    const preViolations: string[] = [];
    if (!(((self.status === "OPEN") || (self.status === "CONFLICT")))) {
      preViolations.push("[SchedulerOrchestrator.cancelMeetingRequest] pre violated: self.status = 'OPEN' or self.status = 'CONFLICT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CANCELLED"))) {
        postViolations.push("[SchedulerOrchestrator.cancelMeetingRequest] post violated: self.status = 'CANCELLED'");
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

/** Impl signature for SchedulerOrchestrator.cancelMeetingRequest (async). User supplies this. */
export type SchedulerOrchestratorCancelMeetingRequestAsyncImpl = (self: SchedulerOrchestrator) => Promise<{ self: SchedulerOrchestrator; modified: { status: unknown } }>;

/** Contract-checking wrapper for SchedulerOrchestrator.cancelMeetingRequest (async). */
export function wrapSchedulerOrchestratorCancelMeetingRequestAsync(impl: SchedulerOrchestratorCancelMeetingRequestAsyncImpl): (self: SchedulerOrchestrator) => Promise<SchedulerOrchestrator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(((self.status === "OPEN") || (self.status === "CONFLICT")))) {
      preViolations.push("[SchedulerOrchestrator.cancelMeetingRequest] pre violated: self.status = 'OPEN' or self.status = 'CONFLICT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CANCELLED"))) {
        postViolations.push("[SchedulerOrchestrator.cancelMeetingRequest] post violated: self.status = 'CANCELLED'");
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

/** Impl signature for SchedulerOrchestrator.guardAgainstDuplicateProposal. User supplies this. */
export type SchedulerOrchestratorGuardAgainstDuplicateProposalImpl = (self: SchedulerOrchestrator, attemptedDate: number) => { self: SchedulerOrchestrator; modified: { status: unknown } };

/** Contract-checking wrapper for SchedulerOrchestrator.guardAgainstDuplicateProposal. */
export function wrapSchedulerOrchestratorGuardAgainstDuplicateProposal(impl: SchedulerOrchestratorGuardAgainstDuplicateProposalImpl): (self: SchedulerOrchestrator, attemptedDate: number) => SchedulerOrchestrator {
  return (self, attemptedDate) => {
    const preViolations: string[] = [];
    if (!(((self.status === "CONFIRMED") && (self.proposedDate === attemptedDate)))) {
      preViolations.push("[SchedulerOrchestrator.guardAgainstDuplicateProposal] pre violated: self.status = 'CONFIRMED' and self.proposedDate = attemptedDate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, attemptedDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
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

/** Impl signature for SchedulerOrchestrator.guardAgainstDuplicateProposal (async). User supplies this. */
export type SchedulerOrchestratorGuardAgainstDuplicateProposalAsyncImpl = (self: SchedulerOrchestrator, attemptedDate: number) => Promise<{ self: SchedulerOrchestrator; modified: { status: unknown } }>;

/** Contract-checking wrapper for SchedulerOrchestrator.guardAgainstDuplicateProposal (async). */
export function wrapSchedulerOrchestratorGuardAgainstDuplicateProposalAsync(impl: SchedulerOrchestratorGuardAgainstDuplicateProposalAsyncImpl): (self: SchedulerOrchestrator, attemptedDate: number) => Promise<SchedulerOrchestrator> {
  return async (self, attemptedDate) => {
    const preViolations: string[] = [];
    if (!(((self.status === "CONFIRMED") && (self.proposedDate === attemptedDate)))) {
      preViolations.push("[SchedulerOrchestrator.guardAgainstDuplicateProposal] pre violated: self.status = 'CONFIRMED' and self.proposedDate = attemptedDate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, attemptedDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = false — unbound variable 'result'
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

/** Impl signature for SchedulerOrchestrator.markInitiatorNotified. User supplies this. */
export type SchedulerOrchestratorMarkInitiatorNotifiedImpl = (self: SchedulerOrchestrator) => { self: SchedulerOrchestrator; modified: { initiatorNotified: unknown } };

/** Contract-checking wrapper for SchedulerOrchestrator.markInitiatorNotified. */
export function wrapSchedulerOrchestratorMarkInitiatorNotified(impl: SchedulerOrchestratorMarkInitiatorNotifiedImpl): (self: SchedulerOrchestrator) => SchedulerOrchestrator {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.initiatorNotified))) {
      preViolations.push("[SchedulerOrchestrator.markInitiatorNotified] pre violated: not self.initiatorNotified");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorNotified === true))) {
        postViolations.push("[SchedulerOrchestrator.markInitiatorNotified] post violated: self.initiatorNotified = true");
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

/** Impl signature for SchedulerOrchestrator.markInitiatorNotified (async). User supplies this. */
export type SchedulerOrchestratorMarkInitiatorNotifiedAsyncImpl = (self: SchedulerOrchestrator) => Promise<{ self: SchedulerOrchestrator; modified: { initiatorNotified: unknown } }>;

/** Contract-checking wrapper for SchedulerOrchestrator.markInitiatorNotified (async). */
export function wrapSchedulerOrchestratorMarkInitiatorNotifiedAsync(impl: SchedulerOrchestratorMarkInitiatorNotifiedAsyncImpl): (self: SchedulerOrchestrator) => Promise<SchedulerOrchestrator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.initiatorNotified))) {
      preViolations.push("[SchedulerOrchestrator.markInitiatorNotified] pre violated: not self.initiatorNotified");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorNotified === true))) {
        postViolations.push("[SchedulerOrchestrator.markInitiatorNotified] post violated: self.initiatorNotified = true");
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

/** Impl signature for ConstraintManager.recordExclusionSet. User supplies this. */
export type ConstraintManagerRecordExclusionSetImpl = (self: ConstraintManager, exclusionCount: number) => { self: ConstraintManager; modified: { participantExclusionCount: unknown; constraintsReceived: unknown } };

/** Contract-checking wrapper for ConstraintManager.recordExclusionSet. */
export function wrapConstraintManagerRecordExclusionSet(impl: ConstraintManagerRecordExclusionSetImpl): (self: ConstraintManager, exclusionCount: number) => ConstraintManager {
  return (self, exclusionCount) => {
    const preViolations: string[] = [];
    if (!((exclusionCount >= 0))) {
      preViolations.push("[ConstraintManager.recordExclusionSet] pre violated: exclusionCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantExclusionCount": self.participantExclusionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, exclusionCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantExclusionCount === (__pre["self.participantExclusionCount"] + exclusionCount)))) {
        postViolations.push("[ConstraintManager.recordExclusionSet] post violated: self.participantExclusionCount = self.participantExclusionCount@pre + exclusionCount");
      }
      if (!((__result.self.constraintsReceived === true))) {
        postViolations.push("[ConstraintManager.recordExclusionSet] post violated: self.constraintsReceived = true");
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

/** Impl signature for ConstraintManager.recordExclusionSet (async). User supplies this. */
export type ConstraintManagerRecordExclusionSetAsyncImpl = (self: ConstraintManager, exclusionCount: number) => Promise<{ self: ConstraintManager; modified: { participantExclusionCount: unknown; constraintsReceived: unknown } }>;

/** Contract-checking wrapper for ConstraintManager.recordExclusionSet (async). */
export function wrapConstraintManagerRecordExclusionSetAsync(impl: ConstraintManagerRecordExclusionSetAsyncImpl): (self: ConstraintManager, exclusionCount: number) => Promise<ConstraintManager> {
  return async (self, exclusionCount) => {
    const preViolations: string[] = [];
    if (!((exclusionCount >= 0))) {
      preViolations.push("[ConstraintManager.recordExclusionSet] pre violated: exclusionCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantExclusionCount": self.participantExclusionCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, exclusionCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantExclusionCount === (__pre["self.participantExclusionCount"] + exclusionCount)))) {
        postViolations.push("[ConstraintManager.recordExclusionSet] post violated: self.participantExclusionCount = self.participantExclusionCount@pre + exclusionCount");
      }
      if (!((__result.self.constraintsReceived === true))) {
        postViolations.push("[ConstraintManager.recordExclusionSet] post violated: self.constraintsReceived = true");
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

/** Impl signature for ConstraintManager.recordPreferenceSet. User supplies this. */
export type ConstraintManagerRecordPreferenceSetImpl = (self: ConstraintManager, preferenceCount: number) => { self: ConstraintManager; modified: { participantPreferenceCount: unknown; constraintsReceived: unknown } };

/** Contract-checking wrapper for ConstraintManager.recordPreferenceSet. */
export function wrapConstraintManagerRecordPreferenceSet(impl: ConstraintManagerRecordPreferenceSetImpl): (self: ConstraintManager, preferenceCount: number) => ConstraintManager {
  return (self, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((preferenceCount >= 0))) {
      preViolations.push("[ConstraintManager.recordPreferenceSet] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantPreferenceCount": self.participantPreferenceCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, preferenceCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantPreferenceCount === (__pre["self.participantPreferenceCount"] + preferenceCount)))) {
        postViolations.push("[ConstraintManager.recordPreferenceSet] post violated: self.participantPreferenceCount = self.participantPreferenceCount@pre + preferenceCount");
      }
      if (!((__result.self.constraintsReceived === true))) {
        postViolations.push("[ConstraintManager.recordPreferenceSet] post violated: self.constraintsReceived = true");
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

/** Impl signature for ConstraintManager.recordPreferenceSet (async). User supplies this. */
export type ConstraintManagerRecordPreferenceSetAsyncImpl = (self: ConstraintManager, preferenceCount: number) => Promise<{ self: ConstraintManager; modified: { participantPreferenceCount: unknown; constraintsReceived: unknown } }>;

/** Contract-checking wrapper for ConstraintManager.recordPreferenceSet (async). */
export function wrapConstraintManagerRecordPreferenceSetAsync(impl: ConstraintManagerRecordPreferenceSetAsyncImpl): (self: ConstraintManager, preferenceCount: number) => Promise<ConstraintManager> {
  return async (self, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((preferenceCount >= 0))) {
      preViolations.push("[ConstraintManager.recordPreferenceSet] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantPreferenceCount": self.participantPreferenceCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, preferenceCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantPreferenceCount === (__pre["self.participantPreferenceCount"] + preferenceCount)))) {
        postViolations.push("[ConstraintManager.recordPreferenceSet] post violated: self.participantPreferenceCount = self.participantPreferenceCount@pre + preferenceCount");
      }
      if (!((__result.self.constraintsReceived === true))) {
        postViolations.push("[ConstraintManager.recordPreferenceSet] post violated: self.constraintsReceived = true");
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

/** Impl signature for ConstraintManager.updateConstraints. User supplies this. */
export type ConstraintManagerUpdateConstraintsImpl = (self: ConstraintManager, exclusionCount: number, preferenceCount: number) => { self: ConstraintManager; modified: { participantExclusionCount: unknown; participantPreferenceCount: unknown; constraintsReceived: unknown } };

/** Contract-checking wrapper for ConstraintManager.updateConstraints. */
export function wrapConstraintManagerUpdateConstraints(impl: ConstraintManagerUpdateConstraintsImpl): (self: ConstraintManager, exclusionCount: number, preferenceCount: number) => ConstraintManager {
  return (self, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((exclusionCount >= 0))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantExclusionCount === exclusionCount))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.participantExclusionCount = exclusionCount");
      }
      if (!((__result.self.participantPreferenceCount === preferenceCount))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.participantPreferenceCount = preferenceCount");
      }
      if (!((__result.self.constraintsReceived === true))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.constraintsReceived = true");
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

/** Impl signature for ConstraintManager.updateConstraints (async). User supplies this. */
export type ConstraintManagerUpdateConstraintsAsyncImpl = (self: ConstraintManager, exclusionCount: number, preferenceCount: number) => Promise<{ self: ConstraintManager; modified: { participantExclusionCount: unknown; participantPreferenceCount: unknown; constraintsReceived: unknown } }>;

/** Contract-checking wrapper for ConstraintManager.updateConstraints (async). */
export function wrapConstraintManagerUpdateConstraintsAsync(impl: ConstraintManagerUpdateConstraintsAsyncImpl): (self: ConstraintManager, exclusionCount: number, preferenceCount: number) => Promise<ConstraintManager> {
  return async (self, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((exclusionCount >= 0))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantExclusionCount === exclusionCount))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.participantExclusionCount = exclusionCount");
      }
      if (!((__result.self.participantPreferenceCount === preferenceCount))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.participantPreferenceCount = preferenceCount");
      }
      if (!((__result.self.constraintsReceived === true))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.constraintsReceived = true");
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

/** Impl signature for ProposerEngine.computeProposal. User supplies this. */
export type ProposerEngineComputeProposalImpl = (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => { self: ProposerEngine; modified: { lastProposedDate: unknown; feasibleDateFound: unknown } };

/** Contract-checking wrapper for ProposerEngine.computeProposal. */
export function wrapProposerEngineComputeProposal(impl: ProposerEngineComputeProposalImpl): (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => ProposerEngine {
  return (self, rangeStart, rangeEnd, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[ProposerEngine.computeProposal] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[ProposerEngine.computeProposal] pre violated: rangeEnd >= rangeStart");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[ProposerEngine.computeProposal] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[ProposerEngine.computeProposal] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rangeStart, rangeEnd, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= rangeStart — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= rangeEnd — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastProposedDate = result — unbound variable 'result'
      if (!((__result.self.feasibleDateFound === true))) {
        postViolations.push("[ProposerEngine.computeProposal] post violated: self.feasibleDateFound = true");
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

/** Impl signature for ProposerEngine.computeProposal (async). User supplies this. */
export type ProposerEngineComputeProposalAsyncImpl = (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => Promise<{ self: ProposerEngine; modified: { lastProposedDate: unknown; feasibleDateFound: unknown } }>;

/** Contract-checking wrapper for ProposerEngine.computeProposal (async). */
export function wrapProposerEngineComputeProposalAsync(impl: ProposerEngineComputeProposalAsyncImpl): (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => Promise<ProposerEngine> {
  return async (self, rangeStart, rangeEnd, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[ProposerEngine.computeProposal] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[ProposerEngine.computeProposal] pre violated: rangeEnd >= rangeStart");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[ProposerEngine.computeProposal] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[ProposerEngine.computeProposal] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rangeStart, rangeEnd, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= rangeStart — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= rangeEnd — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastProposedDate = result — unbound variable 'result'
      if (!((__result.self.feasibleDateFound === true))) {
        postViolations.push("[ProposerEngine.computeProposal] post violated: self.feasibleDateFound = true");
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

/** Impl signature for ProposerEngine.detectUnfeasible. User supplies this. */
export type ProposerEngineDetectUnfeasibleImpl = (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => { self: ProposerEngine; modified: { feasibleDateFound: unknown } };

/** Contract-checking wrapper for ProposerEngine.detectUnfeasible. */
export function wrapProposerEngineDetectUnfeasible(impl: ProposerEngineDetectUnfeasibleImpl): (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => ProposerEngine {
  return (self, rangeStart, rangeEnd, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[ProposerEngine.detectUnfeasible] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[ProposerEngine.detectUnfeasible] pre violated: rangeEnd >= rangeStart");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[ProposerEngine.detectUnfeasible] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[ProposerEngine.detectUnfeasible] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rangeStart, rangeEnd, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (rangeEnd - rangeStart < 1.0) — unbound variable 'result'
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

/** Impl signature for ProposerEngine.detectUnfeasible (async). User supplies this. */
export type ProposerEngineDetectUnfeasibleAsyncImpl = (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => Promise<{ self: ProposerEngine; modified: { feasibleDateFound: unknown } }>;

/** Contract-checking wrapper for ProposerEngine.detectUnfeasible (async). */
export function wrapProposerEngineDetectUnfeasibleAsync(impl: ProposerEngineDetectUnfeasibleAsyncImpl): (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => Promise<ProposerEngine> {
  return async (self, rangeStart, rangeEnd, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[ProposerEngine.detectUnfeasible] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[ProposerEngine.detectUnfeasible] pre violated: rangeEnd >= rangeStart");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[ProposerEngine.detectUnfeasible] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[ProposerEngine.detectUnfeasible] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rangeStart, rangeEnd, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (rangeEnd - rangeStart < 1.0) — unbound variable 'result'
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

/** Impl signature for NotificationService.notifyConfirmation. User supplies this. */
export type NotificationServiceNotifyConfirmationImpl = (self: NotificationService, recipientCount: number, meetingDate: number, meetingLocation: string) => { self: NotificationService; modified: { notificationCount: unknown; lastNotificationType: unknown } };

/** Contract-checking wrapper for NotificationService.notifyConfirmation. */
export function wrapNotificationServiceNotifyConfirmation(impl: NotificationServiceNotifyConfirmationImpl): (self: NotificationService, recipientCount: number, meetingDate: number, meetingLocation: string) => NotificationService {
  return (self, recipientCount, meetingDate, meetingLocation) => {
    const preViolations: string[] = [];
    if (!((recipientCount > 0))) {
      preViolations.push("[NotificationService.notifyConfirmation] pre violated: recipientCount > 0");
    }
    if (!((meetingDate >= 0))) {
      preViolations.push("[NotificationService.notifyConfirmation] pre violated: meetingDate >= 0.0");
    }
    if (!((meetingLocation !== null))) {
      preViolations.push("[NotificationService.notifyConfirmation] pre violated: meetingLocation <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notificationCount": self.notificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, recipientCount, meetingDate, meetingLocation);
      const postViolations: string[] = [];
      if (!((__result.self.notificationCount === (__pre["self.notificationCount"] + recipientCount)))) {
        postViolations.push("[NotificationService.notifyConfirmation] post violated: self.notificationCount = self.notificationCount@pre + recipientCount");
      }
      if (!((__result.self.lastNotificationType === "CONFIRMATION"))) {
        postViolations.push("[NotificationService.notifyConfirmation] post violated: self.lastNotificationType = 'CONFIRMATION'");
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

/** Impl signature for NotificationService.notifyConfirmation (async). User supplies this. */
export type NotificationServiceNotifyConfirmationAsyncImpl = (self: NotificationService, recipientCount: number, meetingDate: number, meetingLocation: string) => Promise<{ self: NotificationService; modified: { notificationCount: unknown; lastNotificationType: unknown } }>;

/** Contract-checking wrapper for NotificationService.notifyConfirmation (async). */
export function wrapNotificationServiceNotifyConfirmationAsync(impl: NotificationServiceNotifyConfirmationAsyncImpl): (self: NotificationService, recipientCount: number, meetingDate: number, meetingLocation: string) => Promise<NotificationService> {
  return async (self, recipientCount, meetingDate, meetingLocation) => {
    const preViolations: string[] = [];
    if (!((recipientCount > 0))) {
      preViolations.push("[NotificationService.notifyConfirmation] pre violated: recipientCount > 0");
    }
    if (!((meetingDate >= 0))) {
      preViolations.push("[NotificationService.notifyConfirmation] pre violated: meetingDate >= 0.0");
    }
    if (!((meetingLocation !== null))) {
      preViolations.push("[NotificationService.notifyConfirmation] pre violated: meetingLocation <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notificationCount": self.notificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, recipientCount, meetingDate, meetingLocation);
      const postViolations: string[] = [];
      if (!((__result.self.notificationCount === (__pre["self.notificationCount"] + recipientCount)))) {
        postViolations.push("[NotificationService.notifyConfirmation] post violated: self.notificationCount = self.notificationCount@pre + recipientCount");
      }
      if (!((__result.self.lastNotificationType === "CONFIRMATION"))) {
        postViolations.push("[NotificationService.notifyConfirmation] post violated: self.lastNotificationType = 'CONFIRMATION'");
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

/** Impl signature for NotificationService.notifyConflict. User supplies this. */
export type NotificationServiceNotifyConflictImpl = (self: NotificationService, initiatorCount: number) => { self: NotificationService; modified: { notificationCount: unknown; lastNotificationType: unknown } };

/** Contract-checking wrapper for NotificationService.notifyConflict. */
export function wrapNotificationServiceNotifyConflict(impl: NotificationServiceNotifyConflictImpl): (self: NotificationService, initiatorCount: number) => NotificationService {
  return (self, initiatorCount) => {
    const preViolations: string[] = [];
    if (!((initiatorCount > 0))) {
      preViolations.push("[NotificationService.notifyConflict] pre violated: initiatorCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notificationCount": self.notificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initiatorCount);
      const postViolations: string[] = [];
      if (!((__result.self.notificationCount === (__pre["self.notificationCount"] + initiatorCount)))) {
        postViolations.push("[NotificationService.notifyConflict] post violated: self.notificationCount = self.notificationCount@pre + initiatorCount");
      }
      if (!((__result.self.lastNotificationType === "CONFLICT"))) {
        postViolations.push("[NotificationService.notifyConflict] post violated: self.lastNotificationType = 'CONFLICT'");
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

/** Impl signature for NotificationService.notifyConflict (async). User supplies this. */
export type NotificationServiceNotifyConflictAsyncImpl = (self: NotificationService, initiatorCount: number) => Promise<{ self: NotificationService; modified: { notificationCount: unknown; lastNotificationType: unknown } }>;

/** Contract-checking wrapper for NotificationService.notifyConflict (async). */
export function wrapNotificationServiceNotifyConflictAsync(impl: NotificationServiceNotifyConflictAsyncImpl): (self: NotificationService, initiatorCount: number) => Promise<NotificationService> {
  return async (self, initiatorCount) => {
    const preViolations: string[] = [];
    if (!((initiatorCount > 0))) {
      preViolations.push("[NotificationService.notifyConflict] pre violated: initiatorCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notificationCount": self.notificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initiatorCount);
      const postViolations: string[] = [];
      if (!((__result.self.notificationCount === (__pre["self.notificationCount"] + initiatorCount)))) {
        postViolations.push("[NotificationService.notifyConflict] post violated: self.notificationCount = self.notificationCount@pre + initiatorCount");
      }
      if (!((__result.self.lastNotificationType === "CONFLICT"))) {
        postViolations.push("[NotificationService.notifyConflict] post violated: self.lastNotificationType = 'CONFLICT'");
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

/** Impl signature for NotificationService.notifyCancellation. User supplies this. */
export type NotificationServiceNotifyCancellationImpl = (self: NotificationService, recipientCount: number) => { self: NotificationService; modified: { notificationCount: unknown; lastNotificationType: unknown } };

/** Contract-checking wrapper for NotificationService.notifyCancellation. */
export function wrapNotificationServiceNotifyCancellation(impl: NotificationServiceNotifyCancellationImpl): (self: NotificationService, recipientCount: number) => NotificationService {
  return (self, recipientCount) => {
    const preViolations: string[] = [];
    if (!((recipientCount > 0))) {
      preViolations.push("[NotificationService.notifyCancellation] pre violated: recipientCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notificationCount": self.notificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, recipientCount);
      const postViolations: string[] = [];
      if (!((__result.self.notificationCount === (__pre["self.notificationCount"] + recipientCount)))) {
        postViolations.push("[NotificationService.notifyCancellation] post violated: self.notificationCount = self.notificationCount@pre + recipientCount");
      }
      if (!((__result.self.lastNotificationType === "CANCELLATION"))) {
        postViolations.push("[NotificationService.notifyCancellation] post violated: self.lastNotificationType = 'CANCELLATION'");
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

/** Impl signature for NotificationService.notifyCancellation (async). User supplies this. */
export type NotificationServiceNotifyCancellationAsyncImpl = (self: NotificationService, recipientCount: number) => Promise<{ self: NotificationService; modified: { notificationCount: unknown; lastNotificationType: unknown } }>;

/** Contract-checking wrapper for NotificationService.notifyCancellation (async). */
export function wrapNotificationServiceNotifyCancellationAsync(impl: NotificationServiceNotifyCancellationAsyncImpl): (self: NotificationService, recipientCount: number) => Promise<NotificationService> {
  return async (self, recipientCount) => {
    const preViolations: string[] = [];
    if (!((recipientCount > 0))) {
      preViolations.push("[NotificationService.notifyCancellation] pre violated: recipientCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.notificationCount": self.notificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, recipientCount);
      const postViolations: string[] = [];
      if (!((__result.self.notificationCount === (__pre["self.notificationCount"] + recipientCount)))) {
        postViolations.push("[NotificationService.notifyCancellation] post violated: self.notificationCount = self.notificationCount@pre + recipientCount");
      }
      if (!((__result.self.lastNotificationType === "CANCELLATION"))) {
        postViolations.push("[NotificationService.notifyCancellation] post violated: self.lastNotificationType = 'CANCELLATION'");
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

/** Impl signature for OrchestratorConstraintLink.transferExclusionSet. User supplies this. */
export type OrchestratorConstraintLinkTransferExclusionSetImpl = (self: OrchestratorConstraintLink, exclusionCount: number) => { self: OrchestratorConstraintLink; modified: { lastTransferTimestamp: unknown } };

/** Contract-checking wrapper for OrchestratorConstraintLink.transferExclusionSet. */
export function wrapOrchestratorConstraintLinkTransferExclusionSet(impl: OrchestratorConstraintLinkTransferExclusionSetImpl): (self: OrchestratorConstraintLink, exclusionCount: number) => OrchestratorConstraintLink {
  return (self, exclusionCount) => {
    const preViolations: string[] = [];
    if (!((exclusionCount >= 0))) {
      preViolations.push("[OrchestratorConstraintLink.transferExclusionSet] pre violated: exclusionCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, exclusionCount);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransferTimestamp >= 0))) {
        postViolations.push("[OrchestratorConstraintLink.transferExclusionSet] post violated: self.lastTransferTimestamp >= 0.0");
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

/** Impl signature for OrchestratorConstraintLink.transferExclusionSet (async). User supplies this. */
export type OrchestratorConstraintLinkTransferExclusionSetAsyncImpl = (self: OrchestratorConstraintLink, exclusionCount: number) => Promise<{ self: OrchestratorConstraintLink; modified: { lastTransferTimestamp: unknown } }>;

/** Contract-checking wrapper for OrchestratorConstraintLink.transferExclusionSet (async). */
export function wrapOrchestratorConstraintLinkTransferExclusionSetAsync(impl: OrchestratorConstraintLinkTransferExclusionSetAsyncImpl): (self: OrchestratorConstraintLink, exclusionCount: number) => Promise<OrchestratorConstraintLink> {
  return async (self, exclusionCount) => {
    const preViolations: string[] = [];
    if (!((exclusionCount >= 0))) {
      preViolations.push("[OrchestratorConstraintLink.transferExclusionSet] pre violated: exclusionCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, exclusionCount);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransferTimestamp >= 0))) {
        postViolations.push("[OrchestratorConstraintLink.transferExclusionSet] post violated: self.lastTransferTimestamp >= 0.0");
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

/** Impl signature for OrchestratorConstraintLink.transferPreferenceSet. User supplies this. */
export type OrchestratorConstraintLinkTransferPreferenceSetImpl = (self: OrchestratorConstraintLink, preferenceCount: number) => { self: OrchestratorConstraintLink; modified: { lastTransferTimestamp: unknown } };

/** Contract-checking wrapper for OrchestratorConstraintLink.transferPreferenceSet. */
export function wrapOrchestratorConstraintLinkTransferPreferenceSet(impl: OrchestratorConstraintLinkTransferPreferenceSetImpl): (self: OrchestratorConstraintLink, preferenceCount: number) => OrchestratorConstraintLink {
  return (self, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((preferenceCount >= 0))) {
      preViolations.push("[OrchestratorConstraintLink.transferPreferenceSet] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, preferenceCount);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransferTimestamp >= 0))) {
        postViolations.push("[OrchestratorConstraintLink.transferPreferenceSet] post violated: self.lastTransferTimestamp >= 0.0");
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

/** Impl signature for OrchestratorConstraintLink.transferPreferenceSet (async). User supplies this. */
export type OrchestratorConstraintLinkTransferPreferenceSetAsyncImpl = (self: OrchestratorConstraintLink, preferenceCount: number) => Promise<{ self: OrchestratorConstraintLink; modified: { lastTransferTimestamp: unknown } }>;

/** Contract-checking wrapper for OrchestratorConstraintLink.transferPreferenceSet (async). */
export function wrapOrchestratorConstraintLinkTransferPreferenceSetAsync(impl: OrchestratorConstraintLinkTransferPreferenceSetAsyncImpl): (self: OrchestratorConstraintLink, preferenceCount: number) => Promise<OrchestratorConstraintLink> {
  return async (self, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((preferenceCount >= 0))) {
      preViolations.push("[OrchestratorConstraintLink.transferPreferenceSet] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, preferenceCount);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransferTimestamp >= 0))) {
        postViolations.push("[OrchestratorConstraintLink.transferPreferenceSet] post violated: self.lastTransferTimestamp >= 0.0");
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

/** Impl signature for OrchestratorProposerLink.requestProposal. User supplies this. */
export type OrchestratorProposerLinkRequestProposalImpl = (self: OrchestratorProposerLink, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => { self: OrchestratorProposerLink; modified: { lastProposalResult: unknown; lastProposalSuccess: unknown } };

/** Contract-checking wrapper for OrchestratorProposerLink.requestProposal. */
export function wrapOrchestratorProposerLinkRequestProposal(impl: OrchestratorProposerLinkRequestProposalImpl): (self: OrchestratorProposerLink, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => OrchestratorProposerLink {
  return (self, rangeStart, rangeEnd, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[OrchestratorProposerLink.requestProposal] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[OrchestratorProposerLink.requestProposal] pre violated: rangeEnd >= rangeStart");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[OrchestratorProposerLink.requestProposal] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[OrchestratorProposerLink.requestProposal] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rangeStart, rangeEnd, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= rangeStart — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= rangeEnd — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastProposalResult = result — unbound variable 'result'
      if (!((__result.self.lastProposalSuccess === true))) {
        postViolations.push("[OrchestratorProposerLink.requestProposal] post violated: self.lastProposalSuccess = true");
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

/** Impl signature for OrchestratorProposerLink.requestProposal (async). User supplies this. */
export type OrchestratorProposerLinkRequestProposalAsyncImpl = (self: OrchestratorProposerLink, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => Promise<{ self: OrchestratorProposerLink; modified: { lastProposalResult: unknown; lastProposalSuccess: unknown } }>;

/** Contract-checking wrapper for OrchestratorProposerLink.requestProposal (async). */
export function wrapOrchestratorProposerLinkRequestProposalAsync(impl: OrchestratorProposerLinkRequestProposalAsyncImpl): (self: OrchestratorProposerLink, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => Promise<OrchestratorProposerLink> {
  return async (self, rangeStart, rangeEnd, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[OrchestratorProposerLink.requestProposal] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[OrchestratorProposerLink.requestProposal] pre violated: rangeEnd >= rangeStart");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[OrchestratorProposerLink.requestProposal] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[OrchestratorProposerLink.requestProposal] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rangeStart, rangeEnd, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= rangeStart — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= rangeEnd — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastProposalResult = result — unbound variable 'result'
      if (!((__result.self.lastProposalSuccess === true))) {
        postViolations.push("[OrchestratorProposerLink.requestProposal] post violated: self.lastProposalSuccess = true");
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

/** Impl signature for OrchestratorProposerLink.checkFeasibility. User supplies this. */
export type OrchestratorProposerLinkCheckFeasibilityImpl = (self: OrchestratorProposerLink, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => { self: OrchestratorProposerLink; modified: { lastProposalSuccess: unknown } };

/** Contract-checking wrapper for OrchestratorProposerLink.checkFeasibility. */
export function wrapOrchestratorProposerLinkCheckFeasibility(impl: OrchestratorProposerLinkCheckFeasibilityImpl): (self: OrchestratorProposerLink, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => OrchestratorProposerLink {
  return (self, rangeStart, rangeEnd, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[OrchestratorProposerLink.checkFeasibility] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[OrchestratorProposerLink.checkFeasibility] pre violated: rangeEnd >= rangeStart");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[OrchestratorProposerLink.checkFeasibility] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[OrchestratorProposerLink.checkFeasibility] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rangeStart, rangeEnd, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (rangeEnd - rangeStart < 1.0) — unbound variable 'result'
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

/** Impl signature for OrchestratorProposerLink.checkFeasibility (async). User supplies this. */
export type OrchestratorProposerLinkCheckFeasibilityAsyncImpl = (self: OrchestratorProposerLink, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => Promise<{ self: OrchestratorProposerLink; modified: { lastProposalSuccess: unknown } }>;

/** Contract-checking wrapper for OrchestratorProposerLink.checkFeasibility (async). */
export function wrapOrchestratorProposerLinkCheckFeasibilityAsync(impl: OrchestratorProposerLinkCheckFeasibilityAsyncImpl): (self: OrchestratorProposerLink, rangeStart: number, rangeEnd: number, exclusionCount: number, preferenceCount: number) => Promise<OrchestratorProposerLink> {
  return async (self, rangeStart, rangeEnd, exclusionCount, preferenceCount) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[OrchestratorProposerLink.checkFeasibility] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[OrchestratorProposerLink.checkFeasibility] pre violated: rangeEnd >= rangeStart");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[OrchestratorProposerLink.checkFeasibility] pre violated: exclusionCount >= 0");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[OrchestratorProposerLink.checkFeasibility] pre violated: preferenceCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rangeStart, rangeEnd, exclusionCount, preferenceCount);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (rangeEnd - rangeStart < 1.0) — unbound variable 'result'
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

/** Impl signature for OrchestratorNotificationLink.sendConfirmation. User supplies this. */
export type OrchestratorNotificationLinkSendConfirmationImpl = (self: OrchestratorNotificationLink, recipientCount: number, meetingDate: number, meetingLocation: string) => { self: OrchestratorNotificationLink; modified: { lastNotificationCount: unknown } };

/** Contract-checking wrapper for OrchestratorNotificationLink.sendConfirmation. */
export function wrapOrchestratorNotificationLinkSendConfirmation(impl: OrchestratorNotificationLinkSendConfirmationImpl): (self: OrchestratorNotificationLink, recipientCount: number, meetingDate: number, meetingLocation: string) => OrchestratorNotificationLink {
  return (self, recipientCount, meetingDate, meetingLocation) => {
    const preViolations: string[] = [];
    if (!((recipientCount > 0))) {
      preViolations.push("[OrchestratorNotificationLink.sendConfirmation] pre violated: recipientCount > 0");
    }
    if (!((meetingDate >= 0))) {
      preViolations.push("[OrchestratorNotificationLink.sendConfirmation] pre violated: meetingDate >= 0.0");
    }
    if (!((meetingLocation !== null))) {
      preViolations.push("[OrchestratorNotificationLink.sendConfirmation] pre violated: meetingLocation <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastNotificationCount": self.lastNotificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, recipientCount, meetingDate, meetingLocation);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationCount === (__pre["self.lastNotificationCount"] + recipientCount)))) {
        postViolations.push("[OrchestratorNotificationLink.sendConfirmation] post violated: self.lastNotificationCount = self.lastNotificationCount@pre + recipientCount");
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

/** Impl signature for OrchestratorNotificationLink.sendConfirmation (async). User supplies this. */
export type OrchestratorNotificationLinkSendConfirmationAsyncImpl = (self: OrchestratorNotificationLink, recipientCount: number, meetingDate: number, meetingLocation: string) => Promise<{ self: OrchestratorNotificationLink; modified: { lastNotificationCount: unknown } }>;

/** Contract-checking wrapper for OrchestratorNotificationLink.sendConfirmation (async). */
export function wrapOrchestratorNotificationLinkSendConfirmationAsync(impl: OrchestratorNotificationLinkSendConfirmationAsyncImpl): (self: OrchestratorNotificationLink, recipientCount: number, meetingDate: number, meetingLocation: string) => Promise<OrchestratorNotificationLink> {
  return async (self, recipientCount, meetingDate, meetingLocation) => {
    const preViolations: string[] = [];
    if (!((recipientCount > 0))) {
      preViolations.push("[OrchestratorNotificationLink.sendConfirmation] pre violated: recipientCount > 0");
    }
    if (!((meetingDate >= 0))) {
      preViolations.push("[OrchestratorNotificationLink.sendConfirmation] pre violated: meetingDate >= 0.0");
    }
    if (!((meetingLocation !== null))) {
      preViolations.push("[OrchestratorNotificationLink.sendConfirmation] pre violated: meetingLocation <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastNotificationCount": self.lastNotificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, recipientCount, meetingDate, meetingLocation);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationCount === (__pre["self.lastNotificationCount"] + recipientCount)))) {
        postViolations.push("[OrchestratorNotificationLink.sendConfirmation] post violated: self.lastNotificationCount = self.lastNotificationCount@pre + recipientCount");
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

/** Impl signature for OrchestratorNotificationLink.sendConflict. User supplies this. */
export type OrchestratorNotificationLinkSendConflictImpl = (self: OrchestratorNotificationLink, initiatorCount: number) => { self: OrchestratorNotificationLink; modified: { lastNotificationCount: unknown } };

/** Contract-checking wrapper for OrchestratorNotificationLink.sendConflict. */
export function wrapOrchestratorNotificationLinkSendConflict(impl: OrchestratorNotificationLinkSendConflictImpl): (self: OrchestratorNotificationLink, initiatorCount: number) => OrchestratorNotificationLink {
  return (self, initiatorCount) => {
    const preViolations: string[] = [];
    if (!((initiatorCount > 0))) {
      preViolations.push("[OrchestratorNotificationLink.sendConflict] pre violated: initiatorCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastNotificationCount": self.lastNotificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initiatorCount);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationCount === (__pre["self.lastNotificationCount"] + initiatorCount)))) {
        postViolations.push("[OrchestratorNotificationLink.sendConflict] post violated: self.lastNotificationCount = self.lastNotificationCount@pre + initiatorCount");
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

/** Impl signature for OrchestratorNotificationLink.sendConflict (async). User supplies this. */
export type OrchestratorNotificationLinkSendConflictAsyncImpl = (self: OrchestratorNotificationLink, initiatorCount: number) => Promise<{ self: OrchestratorNotificationLink; modified: { lastNotificationCount: unknown } }>;

/** Contract-checking wrapper for OrchestratorNotificationLink.sendConflict (async). */
export function wrapOrchestratorNotificationLinkSendConflictAsync(impl: OrchestratorNotificationLinkSendConflictAsyncImpl): (self: OrchestratorNotificationLink, initiatorCount: number) => Promise<OrchestratorNotificationLink> {
  return async (self, initiatorCount) => {
    const preViolations: string[] = [];
    if (!((initiatorCount > 0))) {
      preViolations.push("[OrchestratorNotificationLink.sendConflict] pre violated: initiatorCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastNotificationCount": self.lastNotificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initiatorCount);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationCount === (__pre["self.lastNotificationCount"] + initiatorCount)))) {
        postViolations.push("[OrchestratorNotificationLink.sendConflict] post violated: self.lastNotificationCount = self.lastNotificationCount@pre + initiatorCount");
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

/** Impl signature for OrchestratorNotificationLink.sendCancellation. User supplies this. */
export type OrchestratorNotificationLinkSendCancellationImpl = (self: OrchestratorNotificationLink, recipientCount: number) => { self: OrchestratorNotificationLink; modified: { lastNotificationCount: unknown } };

/** Contract-checking wrapper for OrchestratorNotificationLink.sendCancellation. */
export function wrapOrchestratorNotificationLinkSendCancellation(impl: OrchestratorNotificationLinkSendCancellationImpl): (self: OrchestratorNotificationLink, recipientCount: number) => OrchestratorNotificationLink {
  return (self, recipientCount) => {
    const preViolations: string[] = [];
    if (!((recipientCount > 0))) {
      preViolations.push("[OrchestratorNotificationLink.sendCancellation] pre violated: recipientCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastNotificationCount": self.lastNotificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, recipientCount);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationCount === (__pre["self.lastNotificationCount"] + recipientCount)))) {
        postViolations.push("[OrchestratorNotificationLink.sendCancellation] post violated: self.lastNotificationCount = self.lastNotificationCount@pre + recipientCount");
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

/** Impl signature for OrchestratorNotificationLink.sendCancellation (async). User supplies this. */
export type OrchestratorNotificationLinkSendCancellationAsyncImpl = (self: OrchestratorNotificationLink, recipientCount: number) => Promise<{ self: OrchestratorNotificationLink; modified: { lastNotificationCount: unknown } }>;

/** Contract-checking wrapper for OrchestratorNotificationLink.sendCancellation (async). */
export function wrapOrchestratorNotificationLinkSendCancellationAsync(impl: OrchestratorNotificationLinkSendCancellationAsyncImpl): (self: OrchestratorNotificationLink, recipientCount: number) => Promise<OrchestratorNotificationLink> {
  return async (self, recipientCount) => {
    const preViolations: string[] = [];
    if (!((recipientCount > 0))) {
      preViolations.push("[OrchestratorNotificationLink.sendCancellation] pre violated: recipientCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lastNotificationCount": self.lastNotificationCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, recipientCount);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationCount === (__pre["self.lastNotificationCount"] + recipientCount)))) {
        postViolations.push("[OrchestratorNotificationLink.sendCancellation] post violated: self.lastNotificationCount = self.lastNotificationCount@pre + recipientCount");
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
export type MeetingSchedulerSystemRequestMeetingImpl = (self: MeetingSchedulerSystem, initiatorIdIn: string, dateRangeStartIn: number, dateRangeEndIn: number) => { self: MeetingSchedulerSystem; modified: { initiatorId: unknown; dateRangeStart: unknown; dateRangeEnd: unknown; status: unknown; conflictReported: unknown; participantNotified: unknown; constraintsUpdated: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting. */
export function wrapMeetingSchedulerSystemRequestMeeting(impl: MeetingSchedulerSystemRequestMeetingImpl): (self: MeetingSchedulerSystem, initiatorIdIn: string, dateRangeStartIn: number, dateRangeEndIn: number) => MeetingSchedulerSystem {
  return (self, initiatorIdIn, dateRangeStartIn, dateRangeEndIn) => {
    const preViolations: string[] = [];
    if (!((initiatorIdIn !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: initiatorIdIn <> null");
    }
    if (!((dateRangeStartIn >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: dateRangeStartIn >= 0.0");
    }
    if (!((dateRangeEndIn >= dateRangeStartIn))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: dateRangeEndIn >= dateRangeStartIn");
    }
    if (!(((self.status === null) || (self.status === "CANCELLED")))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: self.status = null or self.status = 'CANCELLED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initiatorIdIn, dateRangeStartIn, dateRangeEndIn);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorId === initiatorIdIn))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.initiatorId = initiatorIdIn");
      }
      if (!((__result.self.dateRangeStart === dateRangeStartIn))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRangeStart = dateRangeStartIn");
      }
      if (!((__result.self.dateRangeEnd === dateRangeEndIn))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRangeEnd = dateRangeEndIn");
      }
      if (!((__result.self.status === "OPEN"))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.status = 'OPEN'");
      }
      if (!((__result.self.conflictReported === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.conflictReported = false");
      }
      if (!((__result.self.participantNotified === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.participantNotified = false");
      }
      if (!((__result.self.constraintsUpdated === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.constraintsUpdated = false");
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
export type MeetingSchedulerSystemRequestMeetingAsyncImpl = (self: MeetingSchedulerSystem, initiatorIdIn: string, dateRangeStartIn: number, dateRangeEndIn: number) => Promise<{ self: MeetingSchedulerSystem; modified: { initiatorId: unknown; dateRangeStart: unknown; dateRangeEnd: unknown; status: unknown; conflictReported: unknown; participantNotified: unknown; constraintsUpdated: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting (async). */
export function wrapMeetingSchedulerSystemRequestMeetingAsync(impl: MeetingSchedulerSystemRequestMeetingAsyncImpl): (self: MeetingSchedulerSystem, initiatorIdIn: string, dateRangeStartIn: number, dateRangeEndIn: number) => Promise<MeetingSchedulerSystem> {
  return async (self, initiatorIdIn, dateRangeStartIn, dateRangeEndIn) => {
    const preViolations: string[] = [];
    if (!((initiatorIdIn !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: initiatorIdIn <> null");
    }
    if (!((dateRangeStartIn >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: dateRangeStartIn >= 0.0");
    }
    if (!((dateRangeEndIn >= dateRangeStartIn))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: dateRangeEndIn >= dateRangeStartIn");
    }
    if (!(((self.status === null) || (self.status === "CANCELLED")))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: self.status = null or self.status = 'CANCELLED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initiatorIdIn, dateRangeStartIn, dateRangeEndIn);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorId === initiatorIdIn))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.initiatorId = initiatorIdIn");
      }
      if (!((__result.self.dateRangeStart === dateRangeStartIn))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRangeStart = dateRangeStartIn");
      }
      if (!((__result.self.dateRangeEnd === dateRangeEndIn))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRangeEnd = dateRangeEndIn");
      }
      if (!((__result.self.status === "OPEN"))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.status = 'OPEN'");
      }
      if (!((__result.self.conflictReported === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.conflictReported = false");
      }
      if (!((__result.self.participantNotified === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.participantNotified = false");
      }
      if (!((__result.self.constraintsUpdated === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.constraintsUpdated = false");
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

/** Impl signature for MeetingSchedulerSystem.addExclusionSet. User supplies this. */
export type MeetingSchedulerSystemAddExclusionSetImpl = (self: MeetingSchedulerSystem, participantIdIn: string, exclusionDates: ReadonlySet<number>) => { self: MeetingSchedulerSystem; modified: { constraintsUpdated: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.addExclusionSet. */
export function wrapMeetingSchedulerSystemAddExclusionSet(impl: MeetingSchedulerSystemAddExclusionSetImpl): (self: MeetingSchedulerSystem, participantIdIn: string, exclusionDates: ReadonlySet<number>) => MeetingSchedulerSystem {
  return (self, participantIdIn, exclusionDates) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.addExclusionSet] pre violated: self.status = 'OPEN'");
    }
    if (!((participantIdIn !== null))) {
      preViolations.push("[MeetingSchedulerSystem.addExclusionSet] pre violated: participantIdIn <> null");
    }
    if (!(Array.from(exclusionDates).every((__x) => ((__x >= 0))))) {
      preViolations.push("[MeetingSchedulerSystem.addExclusionSet] pre violated: exclusionDates->forAll(d | d >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantIdIn, exclusionDates);
      const postViolations: string[] = [];
      if (!((__result.self.constraintsUpdated === true))) {
        postViolations.push("[MeetingSchedulerSystem.addExclusionSet] post violated: self.constraintsUpdated = true");
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

/** Impl signature for MeetingSchedulerSystem.addExclusionSet (async). User supplies this. */
export type MeetingSchedulerSystemAddExclusionSetAsyncImpl = (self: MeetingSchedulerSystem, participantIdIn: string, exclusionDates: ReadonlySet<number>) => Promise<{ self: MeetingSchedulerSystem; modified: { constraintsUpdated: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.addExclusionSet (async). */
export function wrapMeetingSchedulerSystemAddExclusionSetAsync(impl: MeetingSchedulerSystemAddExclusionSetAsyncImpl): (self: MeetingSchedulerSystem, participantIdIn: string, exclusionDates: ReadonlySet<number>) => Promise<MeetingSchedulerSystem> {
  return async (self, participantIdIn, exclusionDates) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.addExclusionSet] pre violated: self.status = 'OPEN'");
    }
    if (!((participantIdIn !== null))) {
      preViolations.push("[MeetingSchedulerSystem.addExclusionSet] pre violated: participantIdIn <> null");
    }
    if (!(Array.from(exclusionDates).every((__x) => ((__x >= 0))))) {
      preViolations.push("[MeetingSchedulerSystem.addExclusionSet] pre violated: exclusionDates->forAll(d | d >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantIdIn, exclusionDates);
      const postViolations: string[] = [];
      if (!((__result.self.constraintsUpdated === true))) {
        postViolations.push("[MeetingSchedulerSystem.addExclusionSet] post violated: self.constraintsUpdated = true");
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

/** Impl signature for MeetingSchedulerSystem.addPreferenceSet. User supplies this. */
export type MeetingSchedulerSystemAddPreferenceSetImpl = (self: MeetingSchedulerSystem, participantIdIn: string, preferenceDates: ReadonlySet<number>) => { self: MeetingSchedulerSystem; modified: { constraintsUpdated: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.addPreferenceSet. */
export function wrapMeetingSchedulerSystemAddPreferenceSet(impl: MeetingSchedulerSystemAddPreferenceSetImpl): (self: MeetingSchedulerSystem, participantIdIn: string, preferenceDates: ReadonlySet<number>) => MeetingSchedulerSystem {
  return (self, participantIdIn, preferenceDates) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.addPreferenceSet] pre violated: self.status = 'OPEN'");
    }
    if (!((participantIdIn !== null))) {
      preViolations.push("[MeetingSchedulerSystem.addPreferenceSet] pre violated: participantIdIn <> null");
    }
    if (!(Array.from(preferenceDates).every((__x) => ((__x >= 0))))) {
      preViolations.push("[MeetingSchedulerSystem.addPreferenceSet] pre violated: preferenceDates->forAll(d | d >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantIdIn, preferenceDates);
      const postViolations: string[] = [];
      if (!((__result.self.constraintsUpdated === true))) {
        postViolations.push("[MeetingSchedulerSystem.addPreferenceSet] post violated: self.constraintsUpdated = true");
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

/** Impl signature for MeetingSchedulerSystem.addPreferenceSet (async). User supplies this. */
export type MeetingSchedulerSystemAddPreferenceSetAsyncImpl = (self: MeetingSchedulerSystem, participantIdIn: string, preferenceDates: ReadonlySet<number>) => Promise<{ self: MeetingSchedulerSystem; modified: { constraintsUpdated: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.addPreferenceSet (async). */
export function wrapMeetingSchedulerSystemAddPreferenceSetAsync(impl: MeetingSchedulerSystemAddPreferenceSetAsyncImpl): (self: MeetingSchedulerSystem, participantIdIn: string, preferenceDates: ReadonlySet<number>) => Promise<MeetingSchedulerSystem> {
  return async (self, participantIdIn, preferenceDates) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.addPreferenceSet] pre violated: self.status = 'OPEN'");
    }
    if (!((participantIdIn !== null))) {
      preViolations.push("[MeetingSchedulerSystem.addPreferenceSet] pre violated: participantIdIn <> null");
    }
    if (!(Array.from(preferenceDates).every((__x) => ((__x >= 0))))) {
      preViolations.push("[MeetingSchedulerSystem.addPreferenceSet] pre violated: preferenceDates->forAll(d | d >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantIdIn, preferenceDates);
      const postViolations: string[] = [];
      if (!((__result.self.constraintsUpdated === true))) {
        postViolations.push("[MeetingSchedulerSystem.addPreferenceSet] post violated: self.constraintsUpdated = true");
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
export type MeetingSchedulerSystemProposeDateImpl = (self: MeetingSchedulerSystem, proposedDateIn: number, locationIn: string) => { self: MeetingSchedulerSystem; modified: { proposedDate: unknown; location: unknown; status: unknown; participantNotified: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate. */
export function wrapMeetingSchedulerSystemProposeDate(impl: MeetingSchedulerSystemProposeDateImpl): (self: MeetingSchedulerSystem, proposedDateIn: number, locationIn: string) => MeetingSchedulerSystem {
  return (self, proposedDateIn, locationIn) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.status = 'OPEN'");
    }
    if (!((proposedDateIn >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: proposedDateIn >= 0.0");
    }
    if (!((locationIn !== null))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: locationIn <> null");
    }
    if (!((proposedDateIn >= self.dateRangeStart))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: proposedDateIn >= self.dateRangeStart");
    }
    if (!((proposedDateIn <= self.dateRangeEnd))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: proposedDateIn <= self.dateRangeEnd");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, proposedDateIn, locationIn);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === proposedDateIn))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate = proposedDateIn");
      }
      if (!((__result.self.location === locationIn))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.location = locationIn");
      }
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.status = 'CONFIRMED'");
      }
      if (!((__result.self.participantNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.participantNotified = true");
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
export type MeetingSchedulerSystemProposeDateAsyncImpl = (self: MeetingSchedulerSystem, proposedDateIn: number, locationIn: string) => Promise<{ self: MeetingSchedulerSystem; modified: { proposedDate: unknown; location: unknown; status: unknown; participantNotified: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate (async). */
export function wrapMeetingSchedulerSystemProposeDateAsync(impl: MeetingSchedulerSystemProposeDateAsyncImpl): (self: MeetingSchedulerSystem, proposedDateIn: number, locationIn: string) => Promise<MeetingSchedulerSystem> {
  return async (self, proposedDateIn, locationIn) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.status = 'OPEN'");
    }
    if (!((proposedDateIn >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: proposedDateIn >= 0.0");
    }
    if (!((locationIn !== null))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: locationIn <> null");
    }
    if (!((proposedDateIn >= self.dateRangeStart))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: proposedDateIn >= self.dateRangeStart");
    }
    if (!((proposedDateIn <= self.dateRangeEnd))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: proposedDateIn <= self.dateRangeEnd");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, proposedDateIn, locationIn);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === proposedDateIn))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate = proposedDateIn");
      }
      if (!((__result.self.location === locationIn))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.location = locationIn");
      }
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.status = 'CONFIRMED'");
      }
      if (!((__result.self.participantNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.participantNotified = true");
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
export type MeetingSchedulerSystemReportConflictImpl = (self: MeetingSchedulerSystem) => { self: MeetingSchedulerSystem; modified: { conflictReported: unknown; status: unknown; participantNotified: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict. */
export function wrapMeetingSchedulerSystemReportConflict(impl: MeetingSchedulerSystemReportConflictImpl): (self: MeetingSchedulerSystem) => MeetingSchedulerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.status = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.conflictReported === true))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.conflictReported = true");
      }
      if (!((__result.self.status === "CONFLICT"))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.status = 'CONFLICT'");
      }
      if (!((__result.self.participantNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.participantNotified = true");
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
export type MeetingSchedulerSystemReportConflictAsyncImpl = (self: MeetingSchedulerSystem) => Promise<{ self: MeetingSchedulerSystem; modified: { conflictReported: unknown; status: unknown; participantNotified: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict (async). */
export function wrapMeetingSchedulerSystemReportConflictAsync(impl: MeetingSchedulerSystemReportConflictAsyncImpl): (self: MeetingSchedulerSystem) => Promise<MeetingSchedulerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.status = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.conflictReported === true))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.conflictReported = true");
      }
      if (!((__result.self.status === "CONFLICT"))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.status = 'CONFLICT'");
      }
      if (!((__result.self.participantNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.participantNotified = true");
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
export type MeetingSchedulerSystemUpdateConstraintsImpl = (self: MeetingSchedulerSystem, exclusionDates: ReadonlySet<number>, preferenceDates: ReadonlySet<number>) => { self: MeetingSchedulerSystem; modified: { constraintsUpdated: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.updateConstraints. */
export function wrapMeetingSchedulerSystemUpdateConstraints(impl: MeetingSchedulerSystemUpdateConstraintsImpl): (self: MeetingSchedulerSystem, exclusionDates: ReadonlySet<number>, preferenceDates: ReadonlySet<number>) => MeetingSchedulerSystem {
  return (self, exclusionDates, preferenceDates) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: self.status = 'OPEN'");
    }
    if (!(Array.from(exclusionDates).every((__x) => ((__x >= 0))))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: exclusionDates->forAll(d | d >= 0.0)");
    }
    if (!(Array.from(preferenceDates).every((__x) => ((__x >= 0))))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: preferenceDates->forAll(d | d >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, exclusionDates, preferenceDates);
      const postViolations: string[] = [];
      if (!((__result.self.constraintsUpdated === true))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.constraintsUpdated = true");
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
export type MeetingSchedulerSystemUpdateConstraintsAsyncImpl = (self: MeetingSchedulerSystem, exclusionDates: ReadonlySet<number>, preferenceDates: ReadonlySet<number>) => Promise<{ self: MeetingSchedulerSystem; modified: { constraintsUpdated: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.updateConstraints (async). */
export function wrapMeetingSchedulerSystemUpdateConstraintsAsync(impl: MeetingSchedulerSystemUpdateConstraintsAsyncImpl): (self: MeetingSchedulerSystem, exclusionDates: ReadonlySet<number>, preferenceDates: ReadonlySet<number>) => Promise<MeetingSchedulerSystem> {
  return async (self, exclusionDates, preferenceDates) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: self.status = 'OPEN'");
    }
    if (!(Array.from(exclusionDates).every((__x) => ((__x >= 0))))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: exclusionDates->forAll(d | d >= 0.0)");
    }
    if (!(Array.from(preferenceDates).every((__x) => ((__x >= 0))))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: preferenceDates->forAll(d | d >= 0.0)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, exclusionDates, preferenceDates);
      const postViolations: string[] = [];
      if (!((__result.self.constraintsUpdated === true))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.constraintsUpdated = true");
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

/** Impl signature for MeetingSchedulerSystem.cancelRequest. User supplies this. */
export type MeetingSchedulerSystemCancelRequestImpl = (self: MeetingSchedulerSystem) => { self: MeetingSchedulerSystem; modified: { status: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.cancelRequest. */
export function wrapMeetingSchedulerSystemCancelRequest(impl: MeetingSchedulerSystemCancelRequestImpl): (self: MeetingSchedulerSystem) => MeetingSchedulerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(((self.status === "OPEN") || (self.status === "CONFLICT")))) {
      preViolations.push("[MeetingSchedulerSystem.cancelRequest] pre violated: self.status = 'OPEN' or self.status = 'CONFLICT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CANCELLED"))) {
        postViolations.push("[MeetingSchedulerSystem.cancelRequest] post violated: self.status = 'CANCELLED'");
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

/** Impl signature for MeetingSchedulerSystem.cancelRequest (async). User supplies this. */
export type MeetingSchedulerSystemCancelRequestAsyncImpl = (self: MeetingSchedulerSystem) => Promise<{ self: MeetingSchedulerSystem; modified: { status: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.cancelRequest (async). */
export function wrapMeetingSchedulerSystemCancelRequestAsync(impl: MeetingSchedulerSystemCancelRequestAsyncImpl): (self: MeetingSchedulerSystem) => Promise<MeetingSchedulerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(((self.status === "OPEN") || (self.status === "CONFLICT")))) {
      preViolations.push("[MeetingSchedulerSystem.cancelRequest] pre violated: self.status = 'OPEN' or self.status = 'CONFLICT'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CANCELLED"))) {
        postViolations.push("[MeetingSchedulerSystem.cancelRequest] post violated: self.status = 'CANCELLED'");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectOverlappingConstraintUpdate. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectOverlappingConstraintUpdateImpl = (self: MeetingSchedulerSystemFormalized, exclusionDatesIn: ReadonlySet<number>, preferenceDatesIn: ReadonlySet<number>) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectOverlappingConstraintUpdate. */
export function wrapMeetingSchedulerSystemFormalizedRejectOverlappingConstraintUpdate(impl: MeetingSchedulerSystemFormalizedRejectOverlappingConstraintUpdateImpl): (self: MeetingSchedulerSystemFormalized, exclusionDatesIn: ReadonlySet<number>, preferenceDatesIn: ReadonlySet<number>) => MeetingSchedulerSystemFormalized {
  return (self, exclusionDatesIn, preferenceDatesIn) => {
    const preViolations: string[] = [];
    // SKIPPED pre-clause (not translatable): exclusionDatesIn->select(d | preferenceDatesIn->includes(d))->notEmpty() — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, exclusionDatesIn, preferenceDatesIn);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectOverlappingConstraintUpdate] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectOverlappingConstraintUpdate (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectOverlappingConstraintUpdateAsyncImpl = (self: MeetingSchedulerSystemFormalized, exclusionDatesIn: ReadonlySet<number>, preferenceDatesIn: ReadonlySet<number>) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectOverlappingConstraintUpdate (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectOverlappingConstraintUpdateAsync(impl: MeetingSchedulerSystemFormalizedRejectOverlappingConstraintUpdateAsyncImpl): (self: MeetingSchedulerSystemFormalized, exclusionDatesIn: ReadonlySet<number>, preferenceDatesIn: ReadonlySet<number>) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, exclusionDatesIn, preferenceDatesIn) => {
    const preViolations: string[] = [];
    // SKIPPED pre-clause (not translatable): exclusionDatesIn->select(d | preferenceDatesIn->includes(d))->notEmpty() — unsupported OclExpr kind
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, exclusionDatesIn, preferenceDatesIn);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectOverlappingConstraintUpdate] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectDateProposalOutOfRange. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectDateProposalOutOfRangeImpl = (self: MeetingSchedulerSystemFormalized, invalidProposedDate: number) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectDateProposalOutOfRange. */
export function wrapMeetingSchedulerSystemFormalizedRejectDateProposalOutOfRange(impl: MeetingSchedulerSystemFormalizedRejectDateProposalOutOfRangeImpl): (self: MeetingSchedulerSystemFormalized, invalidProposedDate: number) => MeetingSchedulerSystemFormalized {
  return (self, invalidProposedDate) => {
    const preViolations: string[] = [];
    if (!(((invalidProposedDate < self.dateRangeStart) || (invalidProposedDate > self.dateRangeEnd)))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDateProposalOutOfRange] pre violated: invalidProposedDate < self.dateRangeStart or invalidProposedDate > self.dateRangeEnd");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, invalidProposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectDateProposalOutOfRange] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectDateProposalOutOfRange (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectDateProposalOutOfRangeAsyncImpl = (self: MeetingSchedulerSystemFormalized, invalidProposedDate: number) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectDateProposalOutOfRange (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectDateProposalOutOfRangeAsync(impl: MeetingSchedulerSystemFormalizedRejectDateProposalOutOfRangeAsyncImpl): (self: MeetingSchedulerSystemFormalized, invalidProposedDate: number) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, invalidProposedDate) => {
    const preViolations: string[] = [];
    if (!(((invalidProposedDate < self.dateRangeStart) || (invalidProposedDate > self.dateRangeEnd)))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDateProposalOutOfRange] pre violated: invalidProposedDate < self.dateRangeStart or invalidProposedDate > self.dateRangeEnd");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, invalidProposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectDateProposalOutOfRange] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectProposalOnNonOpenStatus. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectProposalOnNonOpenStatusImpl = (self: MeetingSchedulerSystemFormalized, attemptedProposedDate: number) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectProposalOnNonOpenStatus. */
export function wrapMeetingSchedulerSystemFormalizedRejectProposalOnNonOpenStatus(impl: MeetingSchedulerSystemFormalizedRejectProposalOnNonOpenStatusImpl): (self: MeetingSchedulerSystemFormalized, attemptedProposedDate: number) => MeetingSchedulerSystemFormalized {
  return (self, attemptedProposedDate) => {
    const preViolations: string[] = [];
    if (!((self.status !== "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectProposalOnNonOpenStatus] pre violated: self.status <> 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, attemptedProposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectProposalOnNonOpenStatus] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectProposalOnNonOpenStatus (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectProposalOnNonOpenStatusAsyncImpl = (self: MeetingSchedulerSystemFormalized, attemptedProposedDate: number) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectProposalOnNonOpenStatus (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectProposalOnNonOpenStatusAsync(impl: MeetingSchedulerSystemFormalizedRejectProposalOnNonOpenStatusAsyncImpl): (self: MeetingSchedulerSystemFormalized, attemptedProposedDate: number) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, attemptedProposedDate) => {
    const preViolations: string[] = [];
    if (!((self.status !== "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectProposalOnNonOpenStatus] pre violated: self.status <> 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, attemptedProposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectProposalOnNonOpenStatus] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectConstraintUpdateOnNonOpenStatus. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectConstraintUpdateOnNonOpenStatusImpl = (self: MeetingSchedulerSystemFormalized) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectConstraintUpdateOnNonOpenStatus. */
export function wrapMeetingSchedulerSystemFormalizedRejectConstraintUpdateOnNonOpenStatus(impl: MeetingSchedulerSystemFormalizedRejectConstraintUpdateOnNonOpenStatusImpl): (self: MeetingSchedulerSystemFormalized) => MeetingSchedulerSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status !== "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectConstraintUpdateOnNonOpenStatus] pre violated: self.status <> 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectConstraintUpdateOnNonOpenStatus] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectConstraintUpdateOnNonOpenStatus (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectConstraintUpdateOnNonOpenStatusAsyncImpl = (self: MeetingSchedulerSystemFormalized) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectConstraintUpdateOnNonOpenStatus (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectConstraintUpdateOnNonOpenStatusAsync(impl: MeetingSchedulerSystemFormalizedRejectConstraintUpdateOnNonOpenStatusAsyncImpl): (self: MeetingSchedulerSystemFormalized) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status !== "OPEN"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectConstraintUpdateOnNonOpenStatus] pre violated: self.status <> 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectConstraintUpdateOnNonOpenStatus] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectDuplicateProposal. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectDuplicateProposalImpl = (self: MeetingSchedulerSystemFormalized, duplicateProposedDate: number) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectDuplicateProposal. */
export function wrapMeetingSchedulerSystemFormalizedRejectDuplicateProposal(impl: MeetingSchedulerSystemFormalizedRejectDuplicateProposalImpl): (self: MeetingSchedulerSystemFormalized, duplicateProposedDate: number) => MeetingSchedulerSystemFormalized {
  return (self, duplicateProposedDate) => {
    const preViolations: string[] = [];
    if (!(((self.status === "CONFIRMED") && (self.proposedDate === duplicateProposedDate)))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateProposal] pre violated: self.status = 'CONFIRMED' and self.proposedDate = duplicateProposedDate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, duplicateProposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateProposal] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectDuplicateProposal (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectDuplicateProposalAsyncImpl = (self: MeetingSchedulerSystemFormalized, duplicateProposedDate: number) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectDuplicateProposal (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectDuplicateProposalAsync(impl: MeetingSchedulerSystemFormalizedRejectDuplicateProposalAsyncImpl): (self: MeetingSchedulerSystemFormalized, duplicateProposedDate: number) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, duplicateProposedDate) => {
    const preViolations: string[] = [];
    if (!(((self.status === "CONFIRMED") && (self.proposedDate === duplicateProposedDate)))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateProposal] pre violated: self.status = 'CONFIRMED' and self.proposedDate = duplicateProposedDate");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, duplicateProposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.rejectDuplicateProposal] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.guardCommunicationBeforeTerminal. User supplies this. */
export type MeetingSchedulerSystemFormalizedGuardCommunicationBeforeTerminalImpl = (self: MeetingSchedulerSystemFormalized) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.guardCommunicationBeforeTerminal. */
export function wrapMeetingSchedulerSystemFormalizedGuardCommunicationBeforeTerminal(impl: MeetingSchedulerSystemFormalizedGuardCommunicationBeforeTerminalImpl): (self: MeetingSchedulerSystemFormalized) => MeetingSchedulerSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(((self.participantNotified === false) && (self.status === "OPEN")))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardCommunicationBeforeTerminal] pre violated: self.participantNotified = false and\n         (self.status = 'OPEN')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.guardCommunicationBeforeTerminal] post violated: self.status = self.status@pre");
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

/** Impl signature for MeetingSchedulerSystemFormalized.guardCommunicationBeforeTerminal (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedGuardCommunicationBeforeTerminalAsyncImpl = (self: MeetingSchedulerSystemFormalized) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.guardCommunicationBeforeTerminal (async). */
export function wrapMeetingSchedulerSystemFormalizedGuardCommunicationBeforeTerminalAsync(impl: MeetingSchedulerSystemFormalizedGuardCommunicationBeforeTerminalAsyncImpl): (self: MeetingSchedulerSystemFormalized) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(((self.participantNotified === false) && (self.status === "OPEN")))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardCommunicationBeforeTerminal] pre violated: self.participantNotified = false and\n         (self.status = 'OPEN')");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.status": self.status,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === __pre["self.status"]))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.guardCommunicationBeforeTerminal] post violated: self.status = self.status@pre");
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

/** Lifecycle registry for ConstraintsRespectedCommitment commitments. */
export class ConstraintsRespectedCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ConstraintsRespectedCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ConstraintsRespectedCommitment — the typed wrapper guarantees that since
    // `register` only accepts ConstraintsRespectedCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ConstraintsRespectedCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ConstraintsRespectedCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ConstraintsRespectedCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ConstraintsRespectedCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ConstraintsRespectedCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ConstraintsRespectedCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ConflictReportCommitment commitments. */
export class ConflictReportCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ConflictReportCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ConflictReportCommitment — the typed wrapper guarantees that since
    // `register` only accepts ConflictReportCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ConflictReportCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ConflictReportCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ConflictReportCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ConflictReportCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ConflictReportCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ConflictReportCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ParticipantInformedCommitment commitments. */
export class ParticipantInformedCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ParticipantInformedCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ParticipantInformedCommitment — the typed wrapper guarantees that since
    // `register` only accepts ParticipantInformedCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ParticipantInformedCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ParticipantInformedCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ParticipantInformedCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ParticipantInformedCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ParticipantInformedCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ParticipantInformedCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ConstraintsCurrentCommitment commitments. */
export class ConstraintsCurrentCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ConstraintsCurrentCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ConstraintsCurrentCommitment — the typed wrapper guarantees that since
    // `register` only accepts ConstraintsCurrentCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ConstraintsCurrentCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ConstraintsCurrentCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ConstraintsCurrentCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ConstraintsCurrentCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ConstraintsCurrentCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ConstraintsCurrentCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

