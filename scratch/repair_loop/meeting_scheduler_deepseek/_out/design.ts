// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for MeetingRequestManager. Runtime: string. Compile-time: branded. */
export type MeetingRequestManagerId = string & { readonly __brand: "MeetingRequestManagerId" };
/** Identity type for ConstraintCollector. Runtime: string. Compile-time: branded. */
export type ConstraintCollectorId = string & { readonly __brand: "ConstraintCollectorId" };
/** Identity type for DateProposer. Runtime: string. Compile-time: branded. */
export type DateProposerId = string & { readonly __brand: "DateProposerId" };
/** Identity type for Notifier. Runtime: string. Compile-time: branded. */
export type NotifierId = string & { readonly __brand: "NotifierId" };
/** Identity type for InitiatorRequestInterface. Runtime: string. Compile-time: branded. */
export type InitiatorRequestInterfaceId = string & { readonly __brand: "InitiatorRequestInterfaceId" };
/** Identity type for ProposalDataSourceInterface. Runtime: string. Compile-time: branded. */
export type ProposalDataSourceInterfaceId = string & { readonly __brand: "ProposalDataSourceInterfaceId" };
/** Identity type for ProposalResultInterface. Runtime: string. Compile-time: branded. */
export type ProposalResultInterfaceId = string & { readonly __brand: "ProposalResultInterfaceId" };
/** Identity type for NotificationInterface. Runtime: string. Compile-time: branded. */
export type NotificationInterfaceId = string & { readonly __brand: "NotificationInterfaceId" };
/** Identity type for DesignMeetingSchedulingFlow. Runtime: string. Compile-time: branded. */
export type DesignMeetingSchedulingFlowId = string & { readonly __brand: "DesignMeetingSchedulingFlowId" };
/** Identity type for DesignConstraintUpdateFlow. Runtime: string. Compile-time: branded. */
export type DesignConstraintUpdateFlowId = string & { readonly __brand: "DesignConstraintUpdateFlowId" };
/** Identity type for DesignNotificationFlow. Runtime: string. Compile-time: branded. */
export type DesignNotificationFlowId = string & { readonly __brand: "DesignNotificationFlowId" };
/** Identity type for Initiator. Runtime: string. Compile-time: branded. */
export type InitiatorId = string & { readonly __brand: "InitiatorId" };
/** Identity type for Participant. Runtime: string. Compile-time: branded. */
export type ParticipantId = string & { readonly __brand: "ParticipantId" };
/** Identity type for SystemProvider. Runtime: string. Compile-time: branded. */
export type SystemProviderId = string & { readonly __brand: "SystemProviderId" };
/** Identity type for DateRange. Runtime: string. Compile-time: branded. */
export type DateRangeId = string & { readonly __brand: "DateRangeId" };
/** Identity type for ExclusionSet. Runtime: string. Compile-time: branded. */
export type ExclusionSetId = string & { readonly __brand: "ExclusionSetId" };
/** Identity type for PreferenceSet. Runtime: string. Compile-time: branded. */
export type PreferenceSetId = string & { readonly __brand: "PreferenceSetId" };
/** Identity type for ScheduleWithinConstraints. Runtime: string. Compile-time: branded. */
export type ScheduleWithinConstraintsId = string & { readonly __brand: "ScheduleWithinConstraintsId" };
/** Identity type for ConflictReporting. Runtime: string. Compile-time: branded. */
export type ConflictReportingId = string & { readonly __brand: "ConflictReportingId" };
/** Identity type for NotifyOnConfirmation. Runtime: string. Compile-time: branded. */
export type NotifyOnConfirmationId = string & { readonly __brand: "NotifyOnConfirmationId" };
/** Identity type for AcceptConstraintUpdates. Runtime: string. Compile-time: branded. */
export type AcceptConstraintUpdatesId = string & { readonly __brand: "AcceptConstraintUpdatesId" };
/** Identity type for MeetingSchedulingFlow. Runtime: string. Compile-time: branded. */
export type MeetingSchedulingFlowId = string & { readonly __brand: "MeetingSchedulingFlowId" };
/** Identity type for ConstraintCollection. Runtime: string. Compile-time: branded. */
export type ConstraintCollectionId = string & { readonly __brand: "ConstraintCollectionId" };
/** Identity type for DateProposal. Runtime: string. Compile-time: branded. */
export type DateProposalId = string & { readonly __brand: "DateProposalId" };
/** Identity type for ConflictResolution. Runtime: string. Compile-time: branded. */
export type ConflictResolutionId = string & { readonly __brand: "ConflictResolutionId" };
/** Identity type for MeetingSchedulerSystem. Runtime: string. Compile-time: branded. */
export type MeetingSchedulerSystemId = string & { readonly __brand: "MeetingSchedulerSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface MeetingRequestManager {
  readonly requestId: MeetingRequestManagerId;
  readonly initiatorId: string;
  readonly dateRangeStr: string;
  readonly status: string;
  readonly conflictReported: boolean;
}

/** @stereotype <<Kind>> */
export interface ConstraintCollector {
  readonly collectorId: ConstraintCollectorId;
  readonly participantCount: number;
  readonly exclusionCount: number;
  readonly preferenceCount: number;
  readonly latestParticipantId: string;
  readonly latestExclusionCount: number;
  readonly latestPreferenceCount: number;
}

/** @stereotype <<Kind>> */
export interface DateProposer {
  readonly proposerId: DateProposerId;
  readonly proposedDate: string;
  readonly hasProposal: boolean;
  readonly conflictDetected: boolean;
  readonly preferencesCount: number;
  readonly exclusionsCount: number;
  readonly participantsCount: number;
}

/** @stereotype <<Kind>> */
export interface Notifier {
  readonly notifierId: NotifierId;
  readonly notificationSent: boolean;
  readonly lastNotificationType: string;
}

/** @stereotype <<Role>> */
export interface RequestInitiator {
  readonly initiatorId: string;
  readonly status: string;
}

/** @stereotype <<Role>> */
export interface ConstraintSupplier {
  readonly participantCount: number;
  readonly exclusionCount: number;
  readonly preferenceCount: number;
}

/** @stereotype <<Role>> */
export interface ConstraintConsumer {
  readonly exclusionCount: number;
  readonly preferenceCount: number;
}

/** @stereotype <<Relator>> */
export interface InitiatorRequestInterface {
  readonly interfaceId: InitiatorRequestInterfaceId;
  readonly requestId: string;
  readonly initiatorId: string;
}

/** @stereotype <<Relator>> */
export interface ProposalDataSourceInterface {
  readonly dataSourceId: ProposalDataSourceInterfaceId;
  readonly feasibleDateCount: number;
}

/** @stereotype <<Relator>> */
export interface ProposalResultInterface {
  readonly resultId: ProposalResultInterfaceId;
  readonly hasProposal: boolean;
  readonly conflictDetected: boolean;
}

/** @stereotype <<Relator>> */
export interface NotificationInterface {
  readonly notifInterfaceId: NotificationInterfaceId;
  readonly notificationType: string;
}

/** @stereotype <<Happening>> */
export interface DesignMeetingSchedulingFlow {
  readonly flowId: DesignMeetingSchedulingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly proposedDate: string;
}

/** @stereotype <<Happening>> */
export interface DesignConstraintUpdateFlow {
  readonly updateFlowId: DesignConstraintUpdateFlowId;
  readonly participantId: string;
  readonly newExclusionsCount: number;
  readonly newPreferencesCount: number;
}

/** @stereotype <<Happening>> */
export interface DesignNotificationFlow {
  readonly notificationFlowId: DesignNotificationFlowId;
  readonly notificationType: string;
  readonly targetId: string;
}

/** @stereotype <<Agent>> */
export interface Initiator {
  readonly initiatorId: InitiatorId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface Participant {
  readonly participantId: ParticipantId;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Agent>> */
export interface SystemProvider {
  readonly providerId: SystemProviderId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface DateRange {
  readonly rangeId: DateRangeId;
  readonly startDate: string;
  readonly endDate: string;
}

/** @stereotype <<Kind>> */
export interface ExclusionSet {
  readonly exclusionId: ExclusionSetId;
  readonly dates: ReadonlySet<string>;
}

/** @stereotype <<Kind>> */
export interface PreferenceSet {
  readonly prefId: PreferenceSetId;
  readonly dates: ReadonlySet<string>;
}

/** @stereotype <<Category>> */
export interface ConstraintRespecting {
}

/** @stereotype <<Category>> */
export interface OutcomeReporting {
}

/** @stereotype <<Commitment>> */
export interface ScheduleWithinConstraints {
  readonly commitmentId: ScheduleWithinConstraintsId;
  readonly feasibleDateCount: number;
}

/** @stereotype <<Commitment>> */
export interface ConflictReporting {
  readonly commitmentId: ConflictReportingId;
  readonly conflictDetected: boolean;
}

/** @stereotype <<Commitment>> */
export interface NotifyOnConfirmation {
  readonly commitmentId: NotifyOnConfirmationId;
  readonly notificationSent: boolean;
}

/** @stereotype <<Commitment>> */
export interface AcceptConstraintUpdates {
  readonly commitmentId: AcceptConstraintUpdatesId;
  readonly updateAccepted: boolean;
}

/** @stereotype <<Happening>> */
export interface MeetingSchedulingFlow {
  readonly flowId: MeetingSchedulingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ConstraintCollection {
  readonly collectionId: ConstraintCollectionId;
  readonly initiator: Initiator;
  readonly participants: ReadonlySet<Participant>;
  readonly dateRange: DateRange;
  readonly exclusions: ReadonlySet<ExclusionSet>;
  readonly preferences: ReadonlySet<PreferenceSet>;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface DateProposal {
  readonly proposalId: DateProposalId;
  readonly proposedDate: string;
  readonly satisfiesAll: boolean;
}

/** @stereotype <<Happening>> */
export interface ConflictResolution {
  readonly conflictId: ConflictResolutionId;
  readonly reported: boolean;
}

/** @stereotype <<Kind>> */
export interface MeetingSchedulerSystem extends ConstraintRespecting, OutcomeReporting {
  readonly systemId: MeetingSchedulerSystemId;
  readonly status: string;
  readonly dateRange: string;
  readonly participantsCount: number;
  readonly exclusionsCount: number;
  readonly preferencesCount: number;
  readonly maxProposalLatencySecs: number;
}

/** @stereotype <<Category>> */
export interface GdprArticle5Compliant {
  readonly dataControllerName: string;
  readonly dataProcessorName: string;
  readonly retentionPeriodDays: number;
}

/** @stereotype <<Category>> */
export interface PciDssCompliant {
  readonly pciScope: string;
}

/** @stereotype <<Category>> */
export interface Wcag21AACompliant {
  readonly accessibilityStandard: string;
}

/** @stereotype <<Subkind>> */
export interface MeetingSchedulerSystemFormalized extends MeetingSchedulerSystem {
  readonly gdprStatus: string;
  readonly pciStatus: string;
  readonly accessibilityStatus: string;
}

/** @stereotype <<Category>> */
export interface WithinDateRange {
}

/** @stereotype <<Category>> */
export interface NotInExclusionSet {
}

/** @stereotype <<Category>> */
export interface FavourPreferences {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly label: string;
  readonly description: string;
  readonly domain: string;
  readonly isChecked: boolean;
}


// ─── Factory functions ───

export function makeMeetingRequestManager(data: {
  requestId: string;
  initiatorId: string;
  dateRangeStr: string;
  status: string;
  conflictReported: boolean;
}): MeetingRequestManager {
  return {
    requestId: data.requestId as MeetingRequestManagerId,
    initiatorId: data.initiatorId,
    dateRangeStr: data.dateRangeStr,
    status: data.status,
    conflictReported: data.conflictReported,
  };
}

export function makeConstraintCollector(data: {
  collectorId: string;
  participantCount: number;
  exclusionCount: number;
  preferenceCount: number;
  latestParticipantId: string;
  latestExclusionCount: number;
  latestPreferenceCount: number;
}): ConstraintCollector {
  return {
    collectorId: data.collectorId as ConstraintCollectorId,
    participantCount: data.participantCount,
    exclusionCount: data.exclusionCount,
    preferenceCount: data.preferenceCount,
    latestParticipantId: data.latestParticipantId,
    latestExclusionCount: data.latestExclusionCount,
    latestPreferenceCount: data.latestPreferenceCount,
  };
}

export function makeDateProposer(data: {
  proposerId: string;
  proposedDate: string;
  hasProposal: boolean;
  conflictDetected: boolean;
  preferencesCount: number;
  exclusionsCount: number;
  participantsCount: number;
}): DateProposer {
  return {
    proposerId: data.proposerId as DateProposerId,
    proposedDate: data.proposedDate,
    hasProposal: data.hasProposal,
    conflictDetected: data.conflictDetected,
    preferencesCount: data.preferencesCount,
    exclusionsCount: data.exclusionsCount,
    participantsCount: data.participantsCount,
  };
}

export function makeNotifier(data: {
  notifierId: string;
  notificationSent: boolean;
  lastNotificationType: string;
}): Notifier {
  return {
    notifierId: data.notifierId as NotifierId,
    notificationSent: data.notificationSent,
    lastNotificationType: data.lastNotificationType,
  };
}

export function makeInitiatorRequestInterface(data: {
  interfaceId: string;
  requestId: string;
  initiatorId: string;
}): InitiatorRequestInterface {
  return {
    interfaceId: data.interfaceId as InitiatorRequestInterfaceId,
    requestId: data.requestId,
    initiatorId: data.initiatorId,
  };
}

export function makeProposalDataSourceInterface(data: {
  dataSourceId: string;
  feasibleDateCount: number;
}): ProposalDataSourceInterface {
  return {
    dataSourceId: data.dataSourceId as ProposalDataSourceInterfaceId,
    feasibleDateCount: data.feasibleDateCount,
  };
}

export function makeProposalResultInterface(data: {
  resultId: string;
  hasProposal: boolean;
  conflictDetected: boolean;
}): ProposalResultInterface {
  return {
    resultId: data.resultId as ProposalResultInterfaceId,
    hasProposal: data.hasProposal,
    conflictDetected: data.conflictDetected,
  };
}

export function makeNotificationInterface(data: {
  notifInterfaceId: string;
  notificationType: string;
}): NotificationInterface {
  return {
    notifInterfaceId: data.notifInterfaceId as NotificationInterfaceId,
    notificationType: data.notificationType,
  };
}

export function makeDesignMeetingSchedulingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  proposedDate: string;
}): DesignMeetingSchedulingFlow {
  return {
    flowId: data.flowId as DesignMeetingSchedulingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    proposedDate: data.proposedDate,
  };
}

export function makeDesignConstraintUpdateFlow(data: {
  updateFlowId: string;
  participantId: string;
  newExclusionsCount: number;
  newPreferencesCount: number;
}): DesignConstraintUpdateFlow {
  return {
    updateFlowId: data.updateFlowId as DesignConstraintUpdateFlowId,
    participantId: data.participantId,
    newExclusionsCount: data.newExclusionsCount,
    newPreferencesCount: data.newPreferencesCount,
  };
}

export function makeDesignNotificationFlow(data: {
  notificationFlowId: string;
  notificationType: string;
  targetId: string;
}): DesignNotificationFlow {
  return {
    notificationFlowId: data.notificationFlowId as DesignNotificationFlowId,
    notificationType: data.notificationType,
    targetId: data.targetId,
  };
}

export function makeInitiator(data: {
  initiatorId: string;
  name: string;
}): Initiator {
  return {
    initiatorId: data.initiatorId as InitiatorId,
    name: data.name,
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

export function makeSystemProvider(data: {
  providerId: string;
  name: string;
}): SystemProvider {
  return {
    providerId: data.providerId as SystemProviderId,
    name: data.name,
  };
}

export function makeDateRange(data: {
  rangeId: string;
  startDate: string;
  endDate: string;
}): DateRange {
  return {
    rangeId: data.rangeId as DateRangeId,
    startDate: data.startDate,
    endDate: data.endDate,
  };
}

export function makeExclusionSet(data: {
  exclusionId: string;
  dates: ReadonlySet<string>;
}): ExclusionSet {
  return {
    exclusionId: data.exclusionId as ExclusionSetId,
    dates: data.dates,
  };
}

export function makePreferenceSet(data: {
  prefId: string;
  dates: ReadonlySet<string>;
}): PreferenceSet {
  return {
    prefId: data.prefId as PreferenceSetId,
    dates: data.dates,
  };
}

export function makeScheduleWithinConstraints(data: {
  commitmentId: string;
  feasibleDateCount: number;
}): ScheduleWithinConstraints {
  return {
    commitmentId: data.commitmentId as ScheduleWithinConstraintsId,
    feasibleDateCount: data.feasibleDateCount,
  };
}

export function makeConflictReporting(data: {
  commitmentId: string;
  conflictDetected: boolean;
}): ConflictReporting {
  return {
    commitmentId: data.commitmentId as ConflictReportingId,
    conflictDetected: data.conflictDetected,
  };
}

export function makeNotifyOnConfirmation(data: {
  commitmentId: string;
  notificationSent: boolean;
}): NotifyOnConfirmation {
  return {
    commitmentId: data.commitmentId as NotifyOnConfirmationId,
    notificationSent: data.notificationSent,
  };
}

export function makeAcceptConstraintUpdates(data: {
  commitmentId: string;
  updateAccepted: boolean;
}): AcceptConstraintUpdates {
  return {
    commitmentId: data.commitmentId as AcceptConstraintUpdatesId,
    updateAccepted: data.updateAccepted,
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

export function makeConstraintCollection(data: {
  collectionId: string;
  initiator: Initiator;
  participants: ReadonlySet<Participant>;
  dateRange: DateRange;
  exclusions: ReadonlySet<ExclusionSet>;
  preferences: ReadonlySet<PreferenceSet>;
  outcome: string;
}): ConstraintCollection {
  return {
    collectionId: data.collectionId as ConstraintCollectionId,
    initiator: data.initiator,
    participants: data.participants,
    dateRange: data.dateRange,
    exclusions: data.exclusions,
    preferences: data.preferences,
    outcome: data.outcome,
  };
}

export function makeDateProposal(data: {
  proposalId: string;
  proposedDate: string;
  satisfiesAll: boolean;
}): DateProposal {
  return {
    proposalId: data.proposalId as DateProposalId,
    proposedDate: data.proposedDate,
    satisfiesAll: data.satisfiesAll,
  };
}

export function makeConflictResolution(data: {
  conflictId: string;
  reported: boolean;
}): ConflictResolution {
  return {
    conflictId: data.conflictId as ConflictResolutionId,
    reported: data.reported,
  };
}

export function makeMeetingSchedulerSystem(data: {
  systemId: string;
  status: string;
  dateRange: string;
  participantsCount: number;
  exclusionsCount: number;
  preferencesCount: number;
  maxProposalLatencySecs: number;
}): MeetingSchedulerSystem {
  return {
    systemId: data.systemId as MeetingSchedulerSystemId,
    status: data.status,
    dateRange: data.dateRange,
    participantsCount: data.participantsCount,
    exclusionsCount: data.exclusionsCount,
    preferencesCount: data.preferencesCount,
    maxProposalLatencySecs: data.maxProposalLatencySecs,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  label: string;
  description: string;
  domain: string;
  isChecked: boolean;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    label: data.label,
    description: data.description,
    domain: data.domain,
    isChecked: data.isChecked,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for MeetingRequestManager. Returns empty array when valid. */
export function validateMeetingRequestManager(instance: MeetingRequestManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[MeetingRequestManager] invariant violated: self.requestId <> null");
  }
  if (!((instance.initiatorId !== null))) {
    violations.push("[MeetingRequestManager] invariant violated: self.initiatorId <> null");
  }
  if (!((instance.dateRangeStr !== null))) {
    violations.push("[MeetingRequestManager] invariant violated: self.dateRangeStr <> null");
  }
  if (!(((((instance.status === "IDLE") || (instance.status === "COLLECTING")) || (instance.status === "PROPOSED")) || (instance.status === "CONFIRMED")))) {
    violations.push("[MeetingRequestManager] invariant violated: self.status = 'IDLE'\n      or self.status = 'COLLECTING'\n      or self.status = 'PROPOSED'\n      or self.status = 'CONFIRMED'");
  }
  return violations;
}

/** Runtime invariant check for ConstraintCollector. Returns empty array when valid. */
export function validateConstraintCollector(instance: ConstraintCollector): readonly string[] {
  const violations: string[] = [];
  if (!((instance.collectorId !== null))) {
    violations.push("[ConstraintCollector] invariant violated: self.collectorId <> null");
  }
  if (!((instance.participantCount >= 0))) {
    violations.push("[ConstraintCollector] invariant violated: self.participantCount >= 0");
  }
  if (!((instance.exclusionCount >= 0))) {
    violations.push("[ConstraintCollector] invariant violated: self.exclusionCount >= 0");
  }
  if (!((instance.preferenceCount >= 0))) {
    violations.push("[ConstraintCollector] invariant violated: self.preferenceCount >= 0");
  }
  if (!((instance.latestExclusionCount >= 0))) {
    violations.push("[ConstraintCollector] invariant violated: self.latestExclusionCount >= 0");
  }
  if (!((instance.latestPreferenceCount >= 0))) {
    violations.push("[ConstraintCollector] invariant violated: self.latestPreferenceCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for DateProposer. Returns empty array when valid. */
export function validateDateProposer(instance: DateProposer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.proposerId !== null))) {
    violations.push("[DateProposer] invariant violated: self.proposerId <> null");
  }
  return violations;
}

/** Runtime invariant check for Notifier. Returns empty array when valid. */
export function validateNotifier(instance: Notifier): readonly string[] {
  const violations: string[] = [];
  if (!((instance.notifierId !== null))) {
    violations.push("[Notifier] invariant violated: self.notifierId <> null");
  }
  if (!((((instance.lastNotificationType === "CONFIRMATION") || (instance.lastNotificationType === "CONFLICT")) || (instance.lastNotificationType === "NONE")))) {
    violations.push("[Notifier] invariant violated: self.lastNotificationType = 'CONFIRMATION'\n      or self.lastNotificationType = 'CONFLICT'\n      or self.lastNotificationType = 'NONE'");
  }
  return violations;
}

/** Runtime invariant check for InitiatorRequestInterface. Returns empty array when valid. */
export function validateInitiatorRequestInterface(instance: InitiatorRequestInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.interfaceId !== null))) {
    violations.push("[InitiatorRequestInterface] invariant violated: self.interfaceId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[InitiatorRequestInterface] invariant violated: self.requestId <> null");
  }
  return violations;
}

/** Runtime invariant check for ProposalDataSourceInterface. Returns empty array when valid. */
export function validateProposalDataSourceInterface(instance: ProposalDataSourceInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dataSourceId !== null))) {
    violations.push("[ProposalDataSourceInterface] invariant violated: self.dataSourceId <> null");
  }
  if (!((instance.feasibleDateCount >= 0))) {
    violations.push("[ProposalDataSourceInterface] invariant violated: self.feasibleDateCount >= 0");
  }
  return violations;
}

/** Runtime invariant check for ProposalResultInterface. Returns empty array when valid. */
export function validateProposalResultInterface(instance: ProposalResultInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.resultId !== null))) {
    violations.push("[ProposalResultInterface] invariant violated: self.resultId <> null");
  }
  return violations;
}

/** Runtime invariant check for NotificationInterface. Returns empty array when valid. */
export function validateNotificationInterface(instance: NotificationInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.notifInterfaceId !== null))) {
    violations.push("[NotificationInterface] invariant violated: self.notifInterfaceId <> null");
  }
  if (!(((instance.notificationType === "CONFIRMATION") || (instance.notificationType === "CONFLICT")))) {
    violations.push("[NotificationInterface] invariant violated: self.notificationType = 'CONFIRMATION' or self.notificationType = 'CONFLICT'");
  }
  return violations;
}

/** Runtime invariant check for DesignMeetingSchedulingFlow. Returns empty array when valid. */
export function validateDesignMeetingSchedulingFlow(instance: DesignMeetingSchedulingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DesignMeetingSchedulingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[DesignMeetingSchedulingFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for DesignConstraintUpdateFlow. Returns empty array when valid. */
export function validateDesignConstraintUpdateFlow(instance: DesignConstraintUpdateFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.updateFlowId !== null))) {
    violations.push("[DesignConstraintUpdateFlow] invariant violated: self.updateFlowId <> null");
  }
  if (!((instance.participantId !== null))) {
    violations.push("[DesignConstraintUpdateFlow] invariant violated: self.participantId <> null");
  }
  return violations;
}

/** Runtime invariant check for DesignNotificationFlow. Returns empty array when valid. */
export function validateDesignNotificationFlow(instance: DesignNotificationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.notificationFlowId !== null))) {
    violations.push("[DesignNotificationFlow] invariant violated: self.notificationFlowId <> null");
  }
  if (!(((instance.notificationType === "CONFIRMATION") || (instance.notificationType === "CONFLICT")))) {
    violations.push("[DesignNotificationFlow] invariant violated: self.notificationType = 'CONFIRMATION' or self.notificationType = 'CONFLICT'");
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

/** Runtime invariant check for SystemProvider. Returns empty array when valid. */
export function validateSystemProvider(instance: SystemProvider): readonly string[] {
  const violations: string[] = [];
  if (!((instance.providerId !== null))) {
    violations.push("[SystemProvider] invariant violated: self.providerId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[SystemProvider] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for DateRange. Returns empty array when valid. */
export function validateDateRange(instance: DateRange): readonly string[] {
  const violations: string[] = [];
  if (!((instance.rangeId !== null))) {
    violations.push("[DateRange] invariant violated: self.rangeId <> null");
  }
  if (!((instance.startDate !== null))) {
    violations.push("[DateRange] invariant violated: self.startDate <> null");
  }
  if (!((instance.endDate !== null))) {
    violations.push("[DateRange] invariant violated: self.endDate <> null");
  }
  return violations;
}

/** Runtime invariant check for ExclusionSet. Returns empty array when valid. */
export function validateExclusionSet(instance: ExclusionSet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.exclusionId !== null))) {
    violations.push("[ExclusionSet] invariant violated: self.exclusionId <> null");
  }
  return violations;
}

/** Runtime invariant check for PreferenceSet. Returns empty array when valid. */
export function validatePreferenceSet(instance: PreferenceSet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.prefId !== null))) {
    violations.push("[PreferenceSet] invariant violated: self.prefId <> null");
  }
  return violations;
}

/** Runtime invariant check for ConstraintRespecting. Returns empty array when valid. */
export function validateConstraintRespecting(instance: ConstraintRespecting): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ConstraintRespecting] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for OutcomeReporting. Returns empty array when valid. */
export function validateOutcomeReporting(instance: OutcomeReporting): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[OutcomeReporting] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulingFlow. Returns empty array when valid. */
export function validateMeetingSchedulingFlow(instance: MeetingSchedulingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MeetingSchedulingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "InitiatorMeetingRequest"))) {
    violations.push("[MeetingSchedulingFlow] invariant violated: self.triggeredBy = 'InitiatorMeetingRequest'");
  }
  return violations;
}

/** Runtime invariant check for ConstraintCollection. Returns empty array when valid. */
export function validateConstraintCollection(instance: ConstraintCollection): readonly string[] {
  const violations: string[] = [];
  if (!((instance.collectionId !== null))) {
    violations.push("[ConstraintCollection] invariant violated: self.collectionId <> null");
  }
  return violations;
}

/** Runtime invariant check for DateProposal. Returns empty array when valid. */
export function validateDateProposal(instance: DateProposal): readonly string[] {
  const violations: string[] = [];
  if (!((instance.proposalId !== null))) {
    violations.push("[DateProposal] invariant violated: self.proposalId <> null");
  }
  return violations;
}

/** Runtime invariant check for ConflictResolution. Returns empty array when valid. */
export function validateConflictResolution(instance: ConflictResolution): readonly string[] {
  const violations: string[] = [];
  if (!((instance.conflictId !== null))) {
    violations.push("[ConflictResolution] invariant violated: self.conflictId <> null");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulerSystem. Returns empty array when valid. */
export function validateMeetingSchedulerSystem(instance: MeetingSchedulerSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.maxProposalLatencySecs > 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.maxProposalLatencySecs > 0");
  }
  if (!((instance.participantsCount >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.participantsCount >= 0");
  }
  if (!((instance.exclusionsCount >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.exclusionsCount >= 0");
  }
  if (!((instance.preferencesCount >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.preferencesCount >= 0");
  }
  if (!(((((instance.status === "IDLE") || (instance.status === "COLLECTING")) || (instance.status === "PROPOSED")) || (instance.status === "CONFIRMED")))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.status = 'IDLE'\n      or self.status = 'COLLECTING'\n      or self.status = 'PROPOSED'\n      or self.status = 'CONFIRMED'");
  }
  return violations;
}

/** Runtime invariant check for GdprArticle5Compliant. Returns empty array when valid. */
export function validateGdprArticle5Compliant(instance: GdprArticle5Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dataControllerName !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.dataControllerName <> null");
  }
  if (!((instance.dataProcessorName !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.dataProcessorName <> null");
  }
  if (!((instance.retentionPeriodDays > 0))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.retentionPeriodDays > 0");
  }
  return violations;
}

/** Runtime invariant check for PciDssCompliant. Returns empty array when valid. */
export function validatePciDssCompliant(instance: PciDssCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.pciScope === "OUT_OF_SCOPE"))) {
    violations.push("[PciDssCompliant] invariant violated: self.pciScope = 'OUT_OF_SCOPE'");
  }
  return violations;
}

/** Runtime invariant check for Wcag21AACompliant. Returns empty array when valid. */
export function validateWcag21AACompliant(instance: Wcag21AACompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.accessibilityStandard === "WCAG_2_1_AA"))) {
    violations.push("[Wcag21AACompliant] invariant violated: self.accessibilityStandard = 'WCAG_2_1_AA'");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulerSystemFormalized. Returns empty array when valid. */
export function validateMeetingSchedulerSystemFormalized(instance: MeetingSchedulerSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.gdprStatus === "COMPLIANT"))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.gdprStatus = 'COMPLIANT'");
  }
  if (!((instance.pciStatus === "OUT_OF_SCOPE"))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.pciStatus = 'OUT_OF_SCOPE'");
  }
  if (!((instance.accessibilityStatus === "WCAG_2_1_AA"))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.accessibilityStatus = 'WCAG_2_1_AA'");
  }
  return violations;
}

/** Runtime invariant check for WithinDateRange. Returns empty array when valid. */
export function validateWithinDateRange(instance: WithinDateRange): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[WithinDateRange] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for NotInExclusionSet. Returns empty array when valid. */
export function validateNotInExclusionSet(instance: NotInExclusionSet): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[NotInExclusionSet] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FavourPreferences. Returns empty array when valid. */
export function validateFavourPreferences(instance: FavourPreferences): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[FavourPreferences] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.label !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.label <> null");
  }
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for MeetingRequestManager.createRequest. User supplies this. */
export type MeetingRequestManagerCreateRequestImpl = (self: MeetingRequestManager, initiatorId: string, rangeStr: string) => { self: MeetingRequestManager; modified: { status: unknown; dateRangeStr: unknown; initiatorId: unknown; conflictReported: unknown } };

/** Contract-checking wrapper for MeetingRequestManager.createRequest. */
export function wrapMeetingRequestManagerCreateRequest(impl: MeetingRequestManagerCreateRequestImpl): (self: MeetingRequestManager, initiatorId: string, rangeStr: string) => MeetingRequestManager {
  return (self, initiatorId, rangeStr) => {
    const preViolations: string[] = [];
    if (!((self.status === "IDLE"))) {
      preViolations.push("[MeetingRequestManager.createRequest] pre violated: self.status = 'IDLE'");
    }
    if (!((initiatorId !== null))) {
      preViolations.push("[MeetingRequestManager.createRequest] pre violated: initiatorId <> null");
    }
    if (!((rangeStr !== null))) {
      preViolations.push("[MeetingRequestManager.createRequest] pre violated: rangeStr <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initiatorId, rangeStr);
      const postViolations: string[] = [];
      if (!((__result.self.status === "COLLECTING"))) {
        postViolations.push("[MeetingRequestManager.createRequest] post violated: self.status = 'COLLECTING'");
      }
      if (!((__result.self.dateRangeStr === rangeStr))) {
        postViolations.push("[MeetingRequestManager.createRequest] post violated: self.dateRangeStr = rangeStr");
      }
      if (!((__result.self.initiatorId === initiatorId))) {
        postViolations.push("[MeetingRequestManager.createRequest] post violated: self.initiatorId = initiatorId");
      }
      if (!((__result.self.conflictReported === false))) {
        postViolations.push("[MeetingRequestManager.createRequest] post violated: self.conflictReported = false");
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

/** Impl signature for MeetingRequestManager.createRequest (async). User supplies this. */
export type MeetingRequestManagerCreateRequestAsyncImpl = (self: MeetingRequestManager, initiatorId: string, rangeStr: string) => Promise<{ self: MeetingRequestManager; modified: { status: unknown; dateRangeStr: unknown; initiatorId: unknown; conflictReported: unknown } }>;

/** Contract-checking wrapper for MeetingRequestManager.createRequest (async). */
export function wrapMeetingRequestManagerCreateRequestAsync(impl: MeetingRequestManagerCreateRequestAsyncImpl): (self: MeetingRequestManager, initiatorId: string, rangeStr: string) => Promise<MeetingRequestManager> {
  return async (self, initiatorId, rangeStr) => {
    const preViolations: string[] = [];
    if (!((self.status === "IDLE"))) {
      preViolations.push("[MeetingRequestManager.createRequest] pre violated: self.status = 'IDLE'");
    }
    if (!((initiatorId !== null))) {
      preViolations.push("[MeetingRequestManager.createRequest] pre violated: initiatorId <> null");
    }
    if (!((rangeStr !== null))) {
      preViolations.push("[MeetingRequestManager.createRequest] pre violated: rangeStr <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initiatorId, rangeStr);
      const postViolations: string[] = [];
      if (!((__result.self.status === "COLLECTING"))) {
        postViolations.push("[MeetingRequestManager.createRequest] post violated: self.status = 'COLLECTING'");
      }
      if (!((__result.self.dateRangeStr === rangeStr))) {
        postViolations.push("[MeetingRequestManager.createRequest] post violated: self.dateRangeStr = rangeStr");
      }
      if (!((__result.self.initiatorId === initiatorId))) {
        postViolations.push("[MeetingRequestManager.createRequest] post violated: self.initiatorId = initiatorId");
      }
      if (!((__result.self.conflictReported === false))) {
        postViolations.push("[MeetingRequestManager.createRequest] post violated: self.conflictReported = false");
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

/** Impl signature for MeetingRequestManager.reportConflict. User supplies this. */
export type MeetingRequestManagerReportConflictImpl = (self: MeetingRequestManager) => { self: MeetingRequestManager; modified: { status: unknown; conflictReported: unknown } };

/** Contract-checking wrapper for MeetingRequestManager.reportConflict. */
export function wrapMeetingRequestManagerReportConflict(impl: MeetingRequestManagerReportConflictImpl): (self: MeetingRequestManager) => MeetingRequestManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "PROPOSED"))) {
      preViolations.push("[MeetingRequestManager.reportConflict] pre violated: self.status = 'PROPOSED'");
    }
    if (!((self.conflictReported === false))) {
      preViolations.push("[MeetingRequestManager.reportConflict] pre violated: self.conflictReported = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.conflictReported === true))) {
        postViolations.push("[MeetingRequestManager.reportConflict] post violated: self.conflictReported = true");
      }
      if (!((__result.self.status === "IDLE"))) {
        postViolations.push("[MeetingRequestManager.reportConflict] post violated: self.status = 'IDLE'");
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

/** Impl signature for MeetingRequestManager.reportConflict (async). User supplies this. */
export type MeetingRequestManagerReportConflictAsyncImpl = (self: MeetingRequestManager) => Promise<{ self: MeetingRequestManager; modified: { status: unknown; conflictReported: unknown } }>;

/** Contract-checking wrapper for MeetingRequestManager.reportConflict (async). */
export function wrapMeetingRequestManagerReportConflictAsync(impl: MeetingRequestManagerReportConflictAsyncImpl): (self: MeetingRequestManager) => Promise<MeetingRequestManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "PROPOSED"))) {
      preViolations.push("[MeetingRequestManager.reportConflict] pre violated: self.status = 'PROPOSED'");
    }
    if (!((self.conflictReported === false))) {
      preViolations.push("[MeetingRequestManager.reportConflict] pre violated: self.conflictReported = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.conflictReported === true))) {
        postViolations.push("[MeetingRequestManager.reportConflict] post violated: self.conflictReported = true");
      }
      if (!((__result.self.status === "IDLE"))) {
        postViolations.push("[MeetingRequestManager.reportConflict] post violated: self.status = 'IDLE'");
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

/** Impl signature for MeetingRequestManager.confirmMeeting. User supplies this. */
export type MeetingRequestManagerConfirmMeetingImpl = (self: MeetingRequestManager, proposedDate: string) => { self: MeetingRequestManager; modified: { status: unknown; conflictReported: unknown } };

/** Contract-checking wrapper for MeetingRequestManager.confirmMeeting. */
export function wrapMeetingRequestManagerConfirmMeeting(impl: MeetingRequestManagerConfirmMeetingImpl): (self: MeetingRequestManager, proposedDate: string) => MeetingRequestManager {
  return (self, proposedDate) => {
    const preViolations: string[] = [];
    if (!((self.status === "PROPOSED"))) {
      preViolations.push("[MeetingRequestManager.confirmMeeting] pre violated: self.status = 'PROPOSED'");
    }
    if (!((proposedDate !== null))) {
      preViolations.push("[MeetingRequestManager.confirmMeeting] pre violated: proposedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, proposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingRequestManager.confirmMeeting] post violated: self.status = 'CONFIRMED'");
      }
      if (!((__result.self.conflictReported === false))) {
        postViolations.push("[MeetingRequestManager.confirmMeeting] post violated: self.conflictReported = false");
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

/** Impl signature for MeetingRequestManager.confirmMeeting (async). User supplies this. */
export type MeetingRequestManagerConfirmMeetingAsyncImpl = (self: MeetingRequestManager, proposedDate: string) => Promise<{ self: MeetingRequestManager; modified: { status: unknown; conflictReported: unknown } }>;

/** Contract-checking wrapper for MeetingRequestManager.confirmMeeting (async). */
export function wrapMeetingRequestManagerConfirmMeetingAsync(impl: MeetingRequestManagerConfirmMeetingAsyncImpl): (self: MeetingRequestManager, proposedDate: string) => Promise<MeetingRequestManager> {
  return async (self, proposedDate) => {
    const preViolations: string[] = [];
    if (!((self.status === "PROPOSED"))) {
      preViolations.push("[MeetingRequestManager.confirmMeeting] pre violated: self.status = 'PROPOSED'");
    }
    if (!((proposedDate !== null))) {
      preViolations.push("[MeetingRequestManager.confirmMeeting] pre violated: proposedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, proposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingRequestManager.confirmMeeting] post violated: self.status = 'CONFIRMED'");
      }
      if (!((__result.self.conflictReported === false))) {
        postViolations.push("[MeetingRequestManager.confirmMeeting] post violated: self.conflictReported = false");
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

/** Impl signature for ConstraintCollector.submitConstraints. User supplies this. */
export type ConstraintCollectorSubmitConstraintsImpl = (self: ConstraintCollector, participantId: string, excludeCount: number, preferCount: number) => { self: ConstraintCollector; modified: { participantCount: unknown; exclusionCount: unknown; preferenceCount: unknown; latestParticipantId: unknown; latestExclusionCount: unknown; latestPreferenceCount: unknown } };

/** Contract-checking wrapper for ConstraintCollector.submitConstraints. */
export function wrapConstraintCollectorSubmitConstraints(impl: ConstraintCollectorSubmitConstraintsImpl): (self: ConstraintCollector, participantId: string, excludeCount: number, preferCount: number) => ConstraintCollector {
  return (self, participantId, excludeCount, preferCount) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintCollector.submitConstraints] pre violated: participantId <> null");
    }
    if (!((excludeCount >= 0))) {
      preViolations.push("[ConstraintCollector.submitConstraints] pre violated: excludeCount >= 0");
    }
    if (!((preferCount >= 0))) {
      preViolations.push("[ConstraintCollector.submitConstraints] pre violated: preferCount >= 0");
    }
    if (!((participantId !== self.latestParticipantId))) {
      preViolations.push("[ConstraintCollector.submitConstraints] pre violated: participantId <> self.latestParticipantId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantCount": self.participantCount,
      "self.exclusionCount": self.exclusionCount,
      "self.preferenceCount": self.preferenceCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId, excludeCount, preferCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantCount === (__pre["self.participantCount"] + 1)))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.participantCount = self.participantCount@pre + 1");
      }
      if (!((__result.self.exclusionCount === (__pre["self.exclusionCount"] + excludeCount)))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.exclusionCount = self.exclusionCount@pre + excludeCount");
      }
      if (!((__result.self.preferenceCount === (__pre["self.preferenceCount"] + preferCount)))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.preferenceCount = self.preferenceCount@pre + preferCount");
      }
      if (!((__result.self.latestParticipantId === participantId))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.latestParticipantId = participantId");
      }
      if (!((__result.self.latestExclusionCount === excludeCount))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.latestExclusionCount = excludeCount");
      }
      if (!((__result.self.latestPreferenceCount === preferCount))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.latestPreferenceCount = preferCount");
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

/** Impl signature for ConstraintCollector.submitConstraints (async). User supplies this. */
export type ConstraintCollectorSubmitConstraintsAsyncImpl = (self: ConstraintCollector, participantId: string, excludeCount: number, preferCount: number) => Promise<{ self: ConstraintCollector; modified: { participantCount: unknown; exclusionCount: unknown; preferenceCount: unknown; latestParticipantId: unknown; latestExclusionCount: unknown; latestPreferenceCount: unknown } }>;

/** Contract-checking wrapper for ConstraintCollector.submitConstraints (async). */
export function wrapConstraintCollectorSubmitConstraintsAsync(impl: ConstraintCollectorSubmitConstraintsAsyncImpl): (self: ConstraintCollector, participantId: string, excludeCount: number, preferCount: number) => Promise<ConstraintCollector> {
  return async (self, participantId, excludeCount, preferCount) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintCollector.submitConstraints] pre violated: participantId <> null");
    }
    if (!((excludeCount >= 0))) {
      preViolations.push("[ConstraintCollector.submitConstraints] pre violated: excludeCount >= 0");
    }
    if (!((preferCount >= 0))) {
      preViolations.push("[ConstraintCollector.submitConstraints] pre violated: preferCount >= 0");
    }
    if (!((participantId !== self.latestParticipantId))) {
      preViolations.push("[ConstraintCollector.submitConstraints] pre violated: participantId <> self.latestParticipantId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantCount": self.participantCount,
      "self.exclusionCount": self.exclusionCount,
      "self.preferenceCount": self.preferenceCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId, excludeCount, preferCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantCount === (__pre["self.participantCount"] + 1)))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.participantCount = self.participantCount@pre + 1");
      }
      if (!((__result.self.exclusionCount === (__pre["self.exclusionCount"] + excludeCount)))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.exclusionCount = self.exclusionCount@pre + excludeCount");
      }
      if (!((__result.self.preferenceCount === (__pre["self.preferenceCount"] + preferCount)))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.preferenceCount = self.preferenceCount@pre + preferCount");
      }
      if (!((__result.self.latestParticipantId === participantId))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.latestParticipantId = participantId");
      }
      if (!((__result.self.latestExclusionCount === excludeCount))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.latestExclusionCount = excludeCount");
      }
      if (!((__result.self.latestPreferenceCount === preferCount))) {
        postViolations.push("[ConstraintCollector.submitConstraints] post violated: self.latestPreferenceCount = preferCount");
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

/** Impl signature for ConstraintCollector.updateConstraints. User supplies this. */
export type ConstraintCollectorUpdateConstraintsImpl = (self: ConstraintCollector, participantId: string, newExcludeCount: number, newPreferCount: number) => { self: ConstraintCollector; modified: { latestExclusionCount: unknown; latestPreferenceCount: unknown; exclusionCount: unknown; preferenceCount: unknown } };

/** Contract-checking wrapper for ConstraintCollector.updateConstraints. */
export function wrapConstraintCollectorUpdateConstraints(impl: ConstraintCollectorUpdateConstraintsImpl): (self: ConstraintCollector, participantId: string, newExcludeCount: number, newPreferCount: number) => ConstraintCollector {
  return (self, participantId, newExcludeCount, newPreferCount) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintCollector.updateConstraints] pre violated: participantId <> null");
    }
    if (!((newExcludeCount >= 0))) {
      preViolations.push("[ConstraintCollector.updateConstraints] pre violated: newExcludeCount >= 0");
    }
    if (!((newPreferCount >= 0))) {
      preViolations.push("[ConstraintCollector.updateConstraints] pre violated: newPreferCount >= 0");
    }
    if (!((participantId === self.latestParticipantId))) {
      preViolations.push("[ConstraintCollector.updateConstraints] pre violated: participantId = self.latestParticipantId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.exclusionCount": self.exclusionCount,
      "self.latestExclusionCount": self.latestExclusionCount,
      "self.preferenceCount": self.preferenceCount,
      "self.latestPreferenceCount": self.latestPreferenceCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId, newExcludeCount, newPreferCount);
      const postViolations: string[] = [];
      if (!((__result.self.latestExclusionCount === newExcludeCount))) {
        postViolations.push("[ConstraintCollector.updateConstraints] post violated: self.latestExclusionCount = newExcludeCount");
      }
      if (!((__result.self.latestPreferenceCount === newPreferCount))) {
        postViolations.push("[ConstraintCollector.updateConstraints] post violated: self.latestPreferenceCount = newPreferCount");
      }
      if (!((__result.self.exclusionCount === ((__pre["self.exclusionCount"] - __pre["self.latestExclusionCount"]) + newExcludeCount)))) {
        postViolations.push("[ConstraintCollector.updateConstraints] post violated: self.exclusionCount = self.exclusionCount@pre - self.latestExclusionCount@pre + newExcludeCount");
      }
      if (!((__result.self.preferenceCount === ((__pre["self.preferenceCount"] - __pre["self.latestPreferenceCount"]) + newPreferCount)))) {
        postViolations.push("[ConstraintCollector.updateConstraints] post violated: self.preferenceCount = self.preferenceCount@pre - self.latestPreferenceCount@pre + newPreferCount");
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

/** Impl signature for ConstraintCollector.updateConstraints (async). User supplies this. */
export type ConstraintCollectorUpdateConstraintsAsyncImpl = (self: ConstraintCollector, participantId: string, newExcludeCount: number, newPreferCount: number) => Promise<{ self: ConstraintCollector; modified: { latestExclusionCount: unknown; latestPreferenceCount: unknown; exclusionCount: unknown; preferenceCount: unknown } }>;

/** Contract-checking wrapper for ConstraintCollector.updateConstraints (async). */
export function wrapConstraintCollectorUpdateConstraintsAsync(impl: ConstraintCollectorUpdateConstraintsAsyncImpl): (self: ConstraintCollector, participantId: string, newExcludeCount: number, newPreferCount: number) => Promise<ConstraintCollector> {
  return async (self, participantId, newExcludeCount, newPreferCount) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[ConstraintCollector.updateConstraints] pre violated: participantId <> null");
    }
    if (!((newExcludeCount >= 0))) {
      preViolations.push("[ConstraintCollector.updateConstraints] pre violated: newExcludeCount >= 0");
    }
    if (!((newPreferCount >= 0))) {
      preViolations.push("[ConstraintCollector.updateConstraints] pre violated: newPreferCount >= 0");
    }
    if (!((participantId === self.latestParticipantId))) {
      preViolations.push("[ConstraintCollector.updateConstraints] pre violated: participantId = self.latestParticipantId");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.exclusionCount": self.exclusionCount,
      "self.latestExclusionCount": self.latestExclusionCount,
      "self.preferenceCount": self.preferenceCount,
      "self.latestPreferenceCount": self.latestPreferenceCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId, newExcludeCount, newPreferCount);
      const postViolations: string[] = [];
      if (!((__result.self.latestExclusionCount === newExcludeCount))) {
        postViolations.push("[ConstraintCollector.updateConstraints] post violated: self.latestExclusionCount = newExcludeCount");
      }
      if (!((__result.self.latestPreferenceCount === newPreferCount))) {
        postViolations.push("[ConstraintCollector.updateConstraints] post violated: self.latestPreferenceCount = newPreferCount");
      }
      if (!((__result.self.exclusionCount === ((__pre["self.exclusionCount"] - __pre["self.latestExclusionCount"]) + newExcludeCount)))) {
        postViolations.push("[ConstraintCollector.updateConstraints] post violated: self.exclusionCount = self.exclusionCount@pre - self.latestExclusionCount@pre + newExcludeCount");
      }
      if (!((__result.self.preferenceCount === ((__pre["self.preferenceCount"] - __pre["self.latestPreferenceCount"]) + newPreferCount)))) {
        postViolations.push("[ConstraintCollector.updateConstraints] post violated: self.preferenceCount = self.preferenceCount@pre - self.latestPreferenceCount@pre + newPreferCount");
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

/** Impl signature for DateProposer.proposeDate. User supplies this. */
export type DateProposerProposeDateImpl = (self: DateProposer, dateCandidate: string, feasible: boolean) => { self: DateProposer; modified: { proposedDate: unknown; hasProposal: unknown; conflictDetected: unknown } };

/** Contract-checking wrapper for DateProposer.proposeDate. */
export function wrapDateProposerProposeDate(impl: DateProposerProposeDateImpl): (self: DateProposer, dateCandidate: string, feasible: boolean) => DateProposer {
  return (self, dateCandidate, feasible) => {
    const preViolations: string[] = [];
    if (!(((feasible === true) || (feasible === false)))) {
      preViolations.push("[DateProposer.proposeDate] pre violated: feasible = true or feasible = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dateCandidate, feasible);
      const postViolations: string[] = [];
      if (!(((feasible) ? ((__result.self.proposedDate === dateCandidate)) : ((__result.self.proposedDate === null))))) {
        postViolations.push("[DateProposer.proposeDate] post violated: if feasible then\n            self.proposedDate = dateCandidate\n          else\n            self.proposedDate = null\n          endif");
      }
      if (!((__result.self.hasProposal === feasible))) {
        postViolations.push("[DateProposer.proposeDate] post violated: self.hasProposal = feasible");
      }
      if (!((__result.self.conflictDetected === (feasible === false)))) {
        postViolations.push("[DateProposer.proposeDate] post violated: self.conflictDetected = (feasible = false)");
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

/** Impl signature for DateProposer.proposeDate (async). User supplies this. */
export type DateProposerProposeDateAsyncImpl = (self: DateProposer, dateCandidate: string, feasible: boolean) => Promise<{ self: DateProposer; modified: { proposedDate: unknown; hasProposal: unknown; conflictDetected: unknown } }>;

/** Contract-checking wrapper for DateProposer.proposeDate (async). */
export function wrapDateProposerProposeDateAsync(impl: DateProposerProposeDateAsyncImpl): (self: DateProposer, dateCandidate: string, feasible: boolean) => Promise<DateProposer> {
  return async (self, dateCandidate, feasible) => {
    const preViolations: string[] = [];
    if (!(((feasible === true) || (feasible === false)))) {
      preViolations.push("[DateProposer.proposeDate] pre violated: feasible = true or feasible = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dateCandidate, feasible);
      const postViolations: string[] = [];
      if (!(((feasible) ? ((__result.self.proposedDate === dateCandidate)) : ((__result.self.proposedDate === null))))) {
        postViolations.push("[DateProposer.proposeDate] post violated: if feasible then\n            self.proposedDate = dateCandidate\n          else\n            self.proposedDate = null\n          endif");
      }
      if (!((__result.self.hasProposal === feasible))) {
        postViolations.push("[DateProposer.proposeDate] post violated: self.hasProposal = feasible");
      }
      if (!((__result.self.conflictDetected === (feasible === false)))) {
        postViolations.push("[DateProposer.proposeDate] post violated: self.conflictDetected = (feasible = false)");
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

/** Impl signature for DateProposer.guardNoExcludedDates. User supplies this. */
export type DateProposerGuardNoExcludedDatesImpl = (self: DateProposer, proposedDate: string, exclusionCount: number, isExcluded: boolean) => { self: DateProposer; modified: {} };

/** Contract-checking wrapper for DateProposer.guardNoExcludedDates. */
export function wrapDateProposerGuardNoExcludedDates(impl: DateProposerGuardNoExcludedDatesImpl): (self: DateProposer, proposedDate: string, exclusionCount: number, isExcluded: boolean) => DateProposer {
  return (self, proposedDate, exclusionCount, isExcluded) => {
    const preViolations: string[] = [];
    if (!((proposedDate !== null))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: proposedDate <> null");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: exclusionCount >= 0");
    }
    if (!(((isExcluded === true) || (isExcluded === false)))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: isExcluded = true or isExcluded = false");
    }
    if (!((self.exclusionsCount >= 0))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: self.exclusionsCount >= 0");
    }
    if (!((self.participantsCount >= 0))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: self.participantsCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, proposedDate, exclusionCount, isExcluded);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if isExcluded then
            result = false
          else
            result = true
          endif — unbound variable 'result'
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

/** Impl signature for DateProposer.guardNoExcludedDates (async). User supplies this. */
export type DateProposerGuardNoExcludedDatesAsyncImpl = (self: DateProposer, proposedDate: string, exclusionCount: number, isExcluded: boolean) => Promise<{ self: DateProposer; modified: {} }>;

/** Contract-checking wrapper for DateProposer.guardNoExcludedDates (async). */
export function wrapDateProposerGuardNoExcludedDatesAsync(impl: DateProposerGuardNoExcludedDatesAsyncImpl): (self: DateProposer, proposedDate: string, exclusionCount: number, isExcluded: boolean) => Promise<DateProposer> {
  return async (self, proposedDate, exclusionCount, isExcluded) => {
    const preViolations: string[] = [];
    if (!((proposedDate !== null))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: proposedDate <> null");
    }
    if (!((exclusionCount >= 0))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: exclusionCount >= 0");
    }
    if (!(((isExcluded === true) || (isExcluded === false)))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: isExcluded = true or isExcluded = false");
    }
    if (!((self.exclusionsCount >= 0))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: self.exclusionsCount >= 0");
    }
    if (!((self.participantsCount >= 0))) {
      preViolations.push("[DateProposer.guardNoExcludedDates] pre violated: self.participantsCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, proposedDate, exclusionCount, isExcluded);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if isExcluded then
            result = false
          else
            result = true
          endif — unbound variable 'result'
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

/** Impl signature for DateProposer.guardFavourPreferences. User supplies this. */
export type DateProposerGuardFavourPreferencesImpl = (self: DateProposer, proposedDate: string, preferenceCount: number, isPreferred: boolean) => { self: DateProposer; modified: {} };

/** Contract-checking wrapper for DateProposer.guardFavourPreferences. */
export function wrapDateProposerGuardFavourPreferences(impl: DateProposerGuardFavourPreferencesImpl): (self: DateProposer, proposedDate: string, preferenceCount: number, isPreferred: boolean) => DateProposer {
  return (self, proposedDate, preferenceCount, isPreferred) => {
    const preViolations: string[] = [];
    if (!((proposedDate !== null))) {
      preViolations.push("[DateProposer.guardFavourPreferences] pre violated: proposedDate <> null");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[DateProposer.guardFavourPreferences] pre violated: preferenceCount >= 0");
    }
    if (!(((isPreferred === true) || (isPreferred === false)))) {
      preViolations.push("[DateProposer.guardFavourPreferences] pre violated: isPreferred = true or isPreferred = false");
    }
    if (!((self.preferencesCount >= 0))) {
      preViolations.push("[DateProposer.guardFavourPreferences] pre violated: self.preferencesCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, proposedDate, preferenceCount, isPreferred);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if isPreferred then
            result = true
          else if preferenceCount = 0 then
            result = true
          else
            result = false
          endif endif — unbound variable 'result'
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

/** Impl signature for DateProposer.guardFavourPreferences (async). User supplies this. */
export type DateProposerGuardFavourPreferencesAsyncImpl = (self: DateProposer, proposedDate: string, preferenceCount: number, isPreferred: boolean) => Promise<{ self: DateProposer; modified: {} }>;

/** Contract-checking wrapper for DateProposer.guardFavourPreferences (async). */
export function wrapDateProposerGuardFavourPreferencesAsync(impl: DateProposerGuardFavourPreferencesAsyncImpl): (self: DateProposer, proposedDate: string, preferenceCount: number, isPreferred: boolean) => Promise<DateProposer> {
  return async (self, proposedDate, preferenceCount, isPreferred) => {
    const preViolations: string[] = [];
    if (!((proposedDate !== null))) {
      preViolations.push("[DateProposer.guardFavourPreferences] pre violated: proposedDate <> null");
    }
    if (!((preferenceCount >= 0))) {
      preViolations.push("[DateProposer.guardFavourPreferences] pre violated: preferenceCount >= 0");
    }
    if (!(((isPreferred === true) || (isPreferred === false)))) {
      preViolations.push("[DateProposer.guardFavourPreferences] pre violated: isPreferred = true or isPreferred = false");
    }
    if (!((self.preferencesCount >= 0))) {
      preViolations.push("[DateProposer.guardFavourPreferences] pre violated: self.preferencesCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, proposedDate, preferenceCount, isPreferred);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if isPreferred then
            result = true
          else if preferenceCount = 0 then
            result = true
          else
            result = false
          endif endif — unbound variable 'result'
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

/** Impl signature for Notifier.notifyParticipants. User supplies this. */
export type NotifierNotifyParticipantsImpl = (self: Notifier, meetingDate: string, location: string) => { self: Notifier; modified: { notificationSent: unknown; lastNotificationType: unknown } };

/** Contract-checking wrapper for Notifier.notifyParticipants. */
export function wrapNotifierNotifyParticipants(impl: NotifierNotifyParticipantsImpl): (self: Notifier, meetingDate: string, location: string) => Notifier {
  return (self, meetingDate, location) => {
    const preViolations: string[] = [];
    if (!((meetingDate !== null))) {
      preViolations.push("[Notifier.notifyParticipants] pre violated: meetingDate <> null");
    }
    if (!((location !== null))) {
      preViolations.push("[Notifier.notifyParticipants] pre violated: location <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, meetingDate, location);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === true))) {
        postViolations.push("[Notifier.notifyParticipants] post violated: self.notificationSent = true");
      }
      if (!((__result.self.lastNotificationType === "CONFIRMATION"))) {
        postViolations.push("[Notifier.notifyParticipants] post violated: self.lastNotificationType = 'CONFIRMATION'");
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

/** Impl signature for Notifier.notifyParticipants (async). User supplies this. */
export type NotifierNotifyParticipantsAsyncImpl = (self: Notifier, meetingDate: string, location: string) => Promise<{ self: Notifier; modified: { notificationSent: unknown; lastNotificationType: unknown } }>;

/** Contract-checking wrapper for Notifier.notifyParticipants (async). */
export function wrapNotifierNotifyParticipantsAsync(impl: NotifierNotifyParticipantsAsyncImpl): (self: Notifier, meetingDate: string, location: string) => Promise<Notifier> {
  return async (self, meetingDate, location) => {
    const preViolations: string[] = [];
    if (!((meetingDate !== null))) {
      preViolations.push("[Notifier.notifyParticipants] pre violated: meetingDate <> null");
    }
    if (!((location !== null))) {
      preViolations.push("[Notifier.notifyParticipants] pre violated: location <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, meetingDate, location);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === true))) {
        postViolations.push("[Notifier.notifyParticipants] post violated: self.notificationSent = true");
      }
      if (!((__result.self.lastNotificationType === "CONFIRMATION"))) {
        postViolations.push("[Notifier.notifyParticipants] post violated: self.lastNotificationType = 'CONFIRMATION'");
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

/** Impl signature for Notifier.notifyConflict. User supplies this. */
export type NotifierNotifyConflictImpl = (self: Notifier, initiatorId: string) => { self: Notifier; modified: { notificationSent: unknown; lastNotificationType: unknown } };

/** Contract-checking wrapper for Notifier.notifyConflict. */
export function wrapNotifierNotifyConflict(impl: NotifierNotifyConflictImpl): (self: Notifier, initiatorId: string) => Notifier {
  return (self, initiatorId) => {
    const preViolations: string[] = [];
    if (!((initiatorId !== null))) {
      preViolations.push("[Notifier.notifyConflict] pre violated: initiatorId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initiatorId);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === true))) {
        postViolations.push("[Notifier.notifyConflict] post violated: self.notificationSent = true");
      }
      if (!((__result.self.lastNotificationType === "CONFLICT"))) {
        postViolations.push("[Notifier.notifyConflict] post violated: self.lastNotificationType = 'CONFLICT'");
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

/** Impl signature for Notifier.notifyConflict (async). User supplies this. */
export type NotifierNotifyConflictAsyncImpl = (self: Notifier, initiatorId: string) => Promise<{ self: Notifier; modified: { notificationSent: unknown; lastNotificationType: unknown } }>;

/** Contract-checking wrapper for Notifier.notifyConflict (async). */
export function wrapNotifierNotifyConflictAsync(impl: NotifierNotifyConflictAsyncImpl): (self: Notifier, initiatorId: string) => Promise<Notifier> {
  return async (self, initiatorId) => {
    const preViolations: string[] = [];
    if (!((initiatorId !== null))) {
      preViolations.push("[Notifier.notifyConflict] pre violated: initiatorId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initiatorId);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === true))) {
        postViolations.push("[Notifier.notifyConflict] post violated: self.notificationSent = true");
      }
      if (!((__result.self.lastNotificationType === "CONFLICT"))) {
        postViolations.push("[Notifier.notifyConflict] post violated: self.lastNotificationType = 'CONFLICT'");
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
export type MeetingSchedulerSystemRequestMeetingImpl = (self: MeetingSchedulerSystem, initiatorId: string, rangeStr: string) => { self: MeetingSchedulerSystem; modified: { status: unknown; dateRange: unknown; participantsCount: unknown; exclusionsCount: unknown; preferencesCount: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting. */
export function wrapMeetingSchedulerSystemRequestMeeting(impl: MeetingSchedulerSystemRequestMeetingImpl): (self: MeetingSchedulerSystem, initiatorId: string, rangeStr: string) => MeetingSchedulerSystem {
  return (self, initiatorId, rangeStr) => {
    const preViolations: string[] = [];
    if (!((self.status === "IDLE"))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: self.status = 'IDLE'");
    }
    if (!((rangeStr !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: rangeStr <> null");
    }
    if (!((initiatorId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: initiatorId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initiatorId, rangeStr);
      const postViolations: string[] = [];
      if (!((__result.self.status === "COLLECTING"))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.status = 'COLLECTING'");
      }
      if (!((__result.self.dateRange === rangeStr))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRange = rangeStr");
      }
      if (!((__result.self.participantsCount === 0))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.participantsCount = 0");
      }
      if (!((__result.self.exclusionsCount === 0))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.exclusionsCount = 0");
      }
      if (!((__result.self.preferencesCount === 0))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.preferencesCount = 0");
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
export type MeetingSchedulerSystemRequestMeetingAsyncImpl = (self: MeetingSchedulerSystem, initiatorId: string, rangeStr: string) => Promise<{ self: MeetingSchedulerSystem; modified: { status: unknown; dateRange: unknown; participantsCount: unknown; exclusionsCount: unknown; preferencesCount: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting (async). */
export function wrapMeetingSchedulerSystemRequestMeetingAsync(impl: MeetingSchedulerSystemRequestMeetingAsyncImpl): (self: MeetingSchedulerSystem, initiatorId: string, rangeStr: string) => Promise<MeetingSchedulerSystem> {
  return async (self, initiatorId, rangeStr) => {
    const preViolations: string[] = [];
    if (!((self.status === "IDLE"))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: self.status = 'IDLE'");
    }
    if (!((rangeStr !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: rangeStr <> null");
    }
    if (!((initiatorId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: initiatorId <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initiatorId, rangeStr);
      const postViolations: string[] = [];
      if (!((__result.self.status === "COLLECTING"))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.status = 'COLLECTING'");
      }
      if (!((__result.self.dateRange === rangeStr))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRange = rangeStr");
      }
      if (!((__result.self.participantsCount === 0))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.participantsCount = 0");
      }
      if (!((__result.self.exclusionsCount === 0))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.exclusionsCount = 0");
      }
      if (!((__result.self.preferencesCount === 0))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.preferencesCount = 0");
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
export type MeetingSchedulerSystemSubmitConstraintsImpl = (self: MeetingSchedulerSystem, participantId: string, excludeDatesCount: number, preferDatesCount: number) => { self: MeetingSchedulerSystem; modified: { participantsCount: unknown; exclusionsCount: unknown; preferencesCount: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.submitConstraints. */
export function wrapMeetingSchedulerSystemSubmitConstraints(impl: MeetingSchedulerSystemSubmitConstraintsImpl): (self: MeetingSchedulerSystem, participantId: string, excludeDatesCount: number, preferDatesCount: number) => MeetingSchedulerSystem {
  return (self, participantId, excludeDatesCount, preferDatesCount) => {
    const preViolations: string[] = [];
    if (!((self.status === "COLLECTING"))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: self.status = 'COLLECTING'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: participantId <> null");
    }
    if (!((excludeDatesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: excludeDatesCount >= 0");
    }
    if (!((preferDatesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: preferDatesCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantsCount": self.participantsCount,
      "self.exclusionsCount": self.exclusionsCount,
      "self.preferencesCount": self.preferencesCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId, excludeDatesCount, preferDatesCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantsCount === (__pre["self.participantsCount"] + 1)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.participantsCount = self.participantsCount@pre + 1");
      }
      if (!((__result.self.exclusionsCount === (__pre["self.exclusionsCount"] + excludeDatesCount)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.exclusionsCount = self.exclusionsCount@pre + excludeDatesCount");
      }
      if (!((__result.self.preferencesCount === (__pre["self.preferencesCount"] + preferDatesCount)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.preferencesCount = self.preferencesCount@pre + preferDatesCount");
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
export type MeetingSchedulerSystemSubmitConstraintsAsyncImpl = (self: MeetingSchedulerSystem, participantId: string, excludeDatesCount: number, preferDatesCount: number) => Promise<{ self: MeetingSchedulerSystem; modified: { participantsCount: unknown; exclusionsCount: unknown; preferencesCount: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.submitConstraints (async). */
export function wrapMeetingSchedulerSystemSubmitConstraintsAsync(impl: MeetingSchedulerSystemSubmitConstraintsAsyncImpl): (self: MeetingSchedulerSystem, participantId: string, excludeDatesCount: number, preferDatesCount: number) => Promise<MeetingSchedulerSystem> {
  return async (self, participantId, excludeDatesCount, preferDatesCount) => {
    const preViolations: string[] = [];
    if (!((self.status === "COLLECTING"))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: self.status = 'COLLECTING'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: participantId <> null");
    }
    if (!((excludeDatesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: excludeDatesCount >= 0");
    }
    if (!((preferDatesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.submitConstraints] pre violated: preferDatesCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.participantsCount": self.participantsCount,
      "self.exclusionsCount": self.exclusionsCount,
      "self.preferencesCount": self.preferencesCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId, excludeDatesCount, preferDatesCount);
      const postViolations: string[] = [];
      if (!((__result.self.participantsCount === (__pre["self.participantsCount"] + 1)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.participantsCount = self.participantsCount@pre + 1");
      }
      if (!((__result.self.exclusionsCount === (__pre["self.exclusionsCount"] + excludeDatesCount)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.exclusionsCount = self.exclusionsCount@pre + excludeDatesCount");
      }
      if (!((__result.self.preferencesCount === (__pre["self.preferencesCount"] + preferDatesCount)))) {
        postViolations.push("[MeetingSchedulerSystem.submitConstraints] post violated: self.preferencesCount = self.preferencesCount@pre + preferDatesCount");
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
export type MeetingSchedulerSystemProposeDateImpl = (self: MeetingSchedulerSystem, dateProposed: string) => { self: MeetingSchedulerSystem; modified: { status: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate. */
export function wrapMeetingSchedulerSystemProposeDate(impl: MeetingSchedulerSystemProposeDateImpl): (self: MeetingSchedulerSystem, dateProposed: string) => MeetingSchedulerSystem {
  return (self, dateProposed) => {
    const preViolations: string[] = [];
    if (!((self.status === "COLLECTING"))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.status = 'COLLECTING'");
    }
    if (!((self.participantsCount > 0))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.participantsCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dateProposed);
      const postViolations: string[] = [];
      if (!((__result.self.status === "PROPOSED"))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.status = 'PROPOSED'");
      }
      if (!((!((dateProposed !== null)) || true))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: dateProposed <> null implies (\n            \n            \n            true\n          )");
      }
      if (!((!((dateProposed === null)) || (__result.self.participantsCount > __result.self.exclusionsCount)))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: dateProposed = null implies (\n            \n            self.participantsCount > self.exclusionsCount\n          )");
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
export type MeetingSchedulerSystemProposeDateAsyncImpl = (self: MeetingSchedulerSystem, dateProposed: string) => Promise<{ self: MeetingSchedulerSystem; modified: { status: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate (async). */
export function wrapMeetingSchedulerSystemProposeDateAsync(impl: MeetingSchedulerSystemProposeDateAsyncImpl): (self: MeetingSchedulerSystem, dateProposed: string) => Promise<MeetingSchedulerSystem> {
  return async (self, dateProposed) => {
    const preViolations: string[] = [];
    if (!((self.status === "COLLECTING"))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.status = 'COLLECTING'");
    }
    if (!((self.participantsCount > 0))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.participantsCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dateProposed);
      const postViolations: string[] = [];
      if (!((__result.self.status === "PROPOSED"))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.status = 'PROPOSED'");
      }
      if (!((!((dateProposed !== null)) || true))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: dateProposed <> null implies (\n            \n            \n            true\n          )");
      }
      if (!((!((dateProposed === null)) || (__result.self.participantsCount > __result.self.exclusionsCount)))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: dateProposed = null implies (\n            \n            self.participantsCount > self.exclusionsCount\n          )");
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
export type MeetingSchedulerSystemConfirmMeetingImpl = (self: MeetingSchedulerSystem, proposedDate: string) => { self: MeetingSchedulerSystem; modified: { status: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.confirmMeeting. */
export function wrapMeetingSchedulerSystemConfirmMeeting(impl: MeetingSchedulerSystemConfirmMeetingImpl): (self: MeetingSchedulerSystem, proposedDate: string) => MeetingSchedulerSystem {
  return (self, proposedDate) => {
    const preViolations: string[] = [];
    if (!((self.status === "PROPOSED"))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.status = 'PROPOSED'");
    }
    if (!((proposedDate !== null))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: proposedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, proposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.status = 'CONFIRMED'");
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
export type MeetingSchedulerSystemConfirmMeetingAsyncImpl = (self: MeetingSchedulerSystem, proposedDate: string) => Promise<{ self: MeetingSchedulerSystem; modified: { status: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.confirmMeeting (async). */
export function wrapMeetingSchedulerSystemConfirmMeetingAsync(impl: MeetingSchedulerSystemConfirmMeetingAsyncImpl): (self: MeetingSchedulerSystem, proposedDate: string) => Promise<MeetingSchedulerSystem> {
  return async (self, proposedDate) => {
    const preViolations: string[] = [];
    if (!((self.status === "PROPOSED"))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.status = 'PROPOSED'");
    }
    if (!((proposedDate !== null))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: proposedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, proposedDate);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.status = 'CONFIRMED'");
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
export type MeetingSchedulerSystemReportConflictImpl = (self: MeetingSchedulerSystem) => { self: MeetingSchedulerSystem; modified: { status: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict. */
export function wrapMeetingSchedulerSystemReportConflict(impl: MeetingSchedulerSystemReportConflictImpl): (self: MeetingSchedulerSystem) => MeetingSchedulerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "PROPOSED"))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.status = 'PROPOSED'");
    }
    if (!((self.participantsCount > self.exclusionsCount))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.participantsCount > self.exclusionsCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "IDLE"))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.status = 'IDLE'");
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
export type MeetingSchedulerSystemReportConflictAsyncImpl = (self: MeetingSchedulerSystem) => Promise<{ self: MeetingSchedulerSystem; modified: { status: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict (async). */
export function wrapMeetingSchedulerSystemReportConflictAsync(impl: MeetingSchedulerSystemReportConflictAsyncImpl): (self: MeetingSchedulerSystem) => Promise<MeetingSchedulerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "PROPOSED"))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.status = 'PROPOSED'");
    }
    if (!((self.participantsCount > self.exclusionsCount))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.participantsCount > self.exclusionsCount");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "IDLE"))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.status = 'IDLE'");
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
export type MeetingSchedulerSystemUpdateConstraintsImpl = (self: MeetingSchedulerSystem, participantId: string, newExcludeDatesCount: number, newPreferDatesCount: number) => { self: MeetingSchedulerSystem; modified: { exclusionsCount: unknown; preferencesCount: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.updateConstraints. */
export function wrapMeetingSchedulerSystemUpdateConstraints(impl: MeetingSchedulerSystemUpdateConstraintsImpl): (self: MeetingSchedulerSystem, participantId: string, newExcludeDatesCount: number, newPreferDatesCount: number) => MeetingSchedulerSystem {
  return (self, participantId, newExcludeDatesCount, newPreferDatesCount) => {
    const preViolations: string[] = [];
    if (!(((self.status === "COLLECTING") || (self.status === "PROPOSED")))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: self.status = 'COLLECTING' or self.status = 'PROPOSED'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: participantId <> null");
    }
    if (!((newExcludeDatesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: newExcludeDatesCount >= 0");
    }
    if (!((newPreferDatesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: newPreferDatesCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.exclusionsCount": self.exclusionsCount,
      "self.preferencesCount": self.preferencesCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId, newExcludeDatesCount, newPreferDatesCount);
      const postViolations: string[] = [];
      if (!((__result.self.exclusionsCount === (__pre["self.exclusionsCount"] - (__pre["self.exclusionsCount"] - newExcludeDatesCount))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.exclusionsCount = self.exclusionsCount@pre - (self.exclusionsCount@pre - newExcludeDatesCount)");
      }
      if (!((__result.self.preferencesCount === (__pre["self.preferencesCount"] - (__pre["self.preferencesCount"] - newPreferDatesCount))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.preferencesCount = self.preferencesCount@pre - (self.preferencesCount@pre - newPreferDatesCount)");
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
export type MeetingSchedulerSystemUpdateConstraintsAsyncImpl = (self: MeetingSchedulerSystem, participantId: string, newExcludeDatesCount: number, newPreferDatesCount: number) => Promise<{ self: MeetingSchedulerSystem; modified: { exclusionsCount: unknown; preferencesCount: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.updateConstraints (async). */
export function wrapMeetingSchedulerSystemUpdateConstraintsAsync(impl: MeetingSchedulerSystemUpdateConstraintsAsyncImpl): (self: MeetingSchedulerSystem, participantId: string, newExcludeDatesCount: number, newPreferDatesCount: number) => Promise<MeetingSchedulerSystem> {
  return async (self, participantId, newExcludeDatesCount, newPreferDatesCount) => {
    const preViolations: string[] = [];
    if (!(((self.status === "COLLECTING") || (self.status === "PROPOSED")))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: self.status = 'COLLECTING' or self.status = 'PROPOSED'");
    }
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: participantId <> null");
    }
    if (!((newExcludeDatesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: newExcludeDatesCount >= 0");
    }
    if (!((newPreferDatesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: newPreferDatesCount >= 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.exclusionsCount": self.exclusionsCount,
      "self.preferencesCount": self.preferencesCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId, newExcludeDatesCount, newPreferDatesCount);
      const postViolations: string[] = [];
      if (!((__result.self.exclusionsCount === (__pre["self.exclusionsCount"] - (__pre["self.exclusionsCount"] - newExcludeDatesCount))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.exclusionsCount = self.exclusionsCount@pre - (self.exclusionsCount@pre - newExcludeDatesCount)");
      }
      if (!((__result.self.preferencesCount === (__pre["self.preferencesCount"] - (__pre["self.preferencesCount"] - newPreferDatesCount))))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.preferencesCount = self.preferencesCount@pre - (self.preferencesCount@pre - newPreferDatesCount)");
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

/** Impl signature for MeetingSchedulerSystemFormalized.guardNoExcludedDates. User supplies this. */
export type MeetingSchedulerSystemFormalizedGuardNoExcludedDatesImpl = (self: MeetingSchedulerSystemFormalized, proposedDate: string) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.guardNoExcludedDates. */
export function wrapMeetingSchedulerSystemFormalizedGuardNoExcludedDates(impl: MeetingSchedulerSystemFormalizedGuardNoExcludedDatesImpl): (self: MeetingSchedulerSystemFormalized, proposedDate: string) => MeetingSchedulerSystemFormalized {
  return (self, proposedDate) => {
    const preViolations: string[] = [];
    if (!((proposedDate !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardNoExcludedDates] pre violated: proposedDate <> null");
    }
    if (!((!((self.exclusionsCount > 0)) || (self.participantsCount > 0)))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardNoExcludedDates] pre violated: self.exclusionsCount > 0 implies self.participantsCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, proposedDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if self.exclusionsCount >= self.participantsCount then
            result = true
          else
            result = true
          endif — unbound variable 'result'
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

/** Impl signature for MeetingSchedulerSystemFormalized.guardNoExcludedDates (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedGuardNoExcludedDatesAsyncImpl = (self: MeetingSchedulerSystemFormalized, proposedDate: string) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.guardNoExcludedDates (async). */
export function wrapMeetingSchedulerSystemFormalizedGuardNoExcludedDatesAsync(impl: MeetingSchedulerSystemFormalizedGuardNoExcludedDatesAsyncImpl): (self: MeetingSchedulerSystemFormalized, proposedDate: string) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, proposedDate) => {
    const preViolations: string[] = [];
    if (!((proposedDate !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardNoExcludedDates] pre violated: proposedDate <> null");
    }
    if (!((!((self.exclusionsCount > 0)) || (self.participantsCount > 0)))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardNoExcludedDates] pre violated: self.exclusionsCount > 0 implies self.participantsCount > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, proposedDate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if self.exclusionsCount >= self.participantsCount then
            result = true
          else
            result = true
          endif — unbound variable 'result'
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

/** Impl signature for MeetingSchedulerSystemFormalized.guardFavourPreferences. User supplies this. */
export type MeetingSchedulerSystemFormalizedGuardFavourPreferencesImpl = (self: MeetingSchedulerSystemFormalized, proposedDate: string, hasPreferredAlternative: boolean) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.guardFavourPreferences. */
export function wrapMeetingSchedulerSystemFormalizedGuardFavourPreferences(impl: MeetingSchedulerSystemFormalizedGuardFavourPreferencesImpl): (self: MeetingSchedulerSystemFormalized, proposedDate: string, hasPreferredAlternative: boolean) => MeetingSchedulerSystemFormalized {
  return (self, proposedDate, hasPreferredAlternative) => {
    const preViolations: string[] = [];
    if (!((proposedDate !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardFavourPreferences] pre violated: proposedDate <> null");
    }
    if (!((self.preferencesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardFavourPreferences] pre violated: self.preferencesCount >= 0");
    }
    if (!(((hasPreferredAlternative === false) || ((self.preferencesCount > 0) && (hasPreferredAlternative === true))))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardFavourPreferences] pre violated: hasPreferredAlternative = false\n         or (self.preferencesCount > 0 and hasPreferredAlternative = true)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, proposedDate, hasPreferredAlternative);
      const postViolations: string[] = [];
      if (!(((hasPreferredAlternative) ? (true) : (true)))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.guardFavourPreferences] post violated: if hasPreferredAlternative then\n            true\n          else\n            true\n          endif");
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

/** Impl signature for MeetingSchedulerSystemFormalized.guardFavourPreferences (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedGuardFavourPreferencesAsyncImpl = (self: MeetingSchedulerSystemFormalized, proposedDate: string, hasPreferredAlternative: boolean) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.guardFavourPreferences (async). */
export function wrapMeetingSchedulerSystemFormalizedGuardFavourPreferencesAsync(impl: MeetingSchedulerSystemFormalizedGuardFavourPreferencesAsyncImpl): (self: MeetingSchedulerSystemFormalized, proposedDate: string, hasPreferredAlternative: boolean) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, proposedDate, hasPreferredAlternative) => {
    const preViolations: string[] = [];
    if (!((proposedDate !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardFavourPreferences] pre violated: proposedDate <> null");
    }
    if (!((self.preferencesCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardFavourPreferences] pre violated: self.preferencesCount >= 0");
    }
    if (!(((hasPreferredAlternative === false) || ((self.preferencesCount > 0) && (hasPreferredAlternative === true))))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardFavourPreferences] pre violated: hasPreferredAlternative = false\n         or (self.preferencesCount > 0 and hasPreferredAlternative = true)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, proposedDate, hasPreferredAlternative);
      const postViolations: string[] = [];
      if (!(((hasPreferredAlternative) ? (true) : (true)))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.guardFavourPreferences] post violated: if hasPreferredAlternative then\n            true\n          else\n            true\n          endif");
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

/** Impl signature for MeetingSchedulerSystemFormalized.assertParticipantsNotified. User supplies this. */
export type MeetingSchedulerSystemFormalizedAssertParticipantsNotifiedImpl = (self: MeetingSchedulerSystemFormalized) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.assertParticipantsNotified. */
export function wrapMeetingSchedulerSystemFormalizedAssertParticipantsNotified(impl: MeetingSchedulerSystemFormalizedAssertParticipantsNotifiedImpl): (self: MeetingSchedulerSystemFormalized) => MeetingSchedulerSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "CONFIRMED"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.assertParticipantsNotified] pre violated: self.status = 'CONFIRMED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[MeetingSchedulerSystemFormalized.assertParticipantsNotified] post violated: true");
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

/** Impl signature for MeetingSchedulerSystemFormalized.assertParticipantsNotified (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedAssertParticipantsNotifiedAsyncImpl = (self: MeetingSchedulerSystemFormalized) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.assertParticipantsNotified (async). */
export function wrapMeetingSchedulerSystemFormalizedAssertParticipantsNotifiedAsync(impl: MeetingSchedulerSystemFormalizedAssertParticipantsNotifiedAsyncImpl): (self: MeetingSchedulerSystemFormalized) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "CONFIRMED"))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.assertParticipantsNotified] pre violated: self.status = 'CONFIRMED'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!(true)) {
        postViolations.push("[MeetingSchedulerSystemFormalized.assertParticipantsNotified] post violated: true");
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

/** Impl signature for MeetingSchedulerSystemFormalized.guardConflictTimeliness. User supplies this. */
export type MeetingSchedulerSystemFormalizedGuardConflictTimelinessImpl = (self: MeetingSchedulerSystemFormalized, proposalAttemptCount: number) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.guardConflictTimeliness. */
export function wrapMeetingSchedulerSystemFormalizedGuardConflictTimeliness(impl: MeetingSchedulerSystemFormalizedGuardConflictTimelinessImpl): (self: MeetingSchedulerSystemFormalized, proposalAttemptCount: number) => MeetingSchedulerSystemFormalized {
  return (self, proposalAttemptCount) => {
    const preViolations: string[] = [];
    if (!((proposalAttemptCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardConflictTimeliness] pre violated: proposalAttemptCount >= 0");
    }
    if (!((self.maxProposalLatencySecs > 0))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardConflictTimeliness] pre violated: self.maxProposalLatencySecs > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, proposalAttemptCount);
      const postViolations: string[] = [];
      if (!((((proposalAttemptCount >= (__result.self.maxProposalLatencySecs / 60))) ? (true) : (true)))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.guardConflictTimeliness] post violated: if proposalAttemptCount >= (self.maxProposalLatencySecs / 60) then\n            true\n          else\n            true\n          endif");
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

/** Impl signature for MeetingSchedulerSystemFormalized.guardConflictTimeliness (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedGuardConflictTimelinessAsyncImpl = (self: MeetingSchedulerSystemFormalized, proposalAttemptCount: number) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.guardConflictTimeliness (async). */
export function wrapMeetingSchedulerSystemFormalizedGuardConflictTimelinessAsync(impl: MeetingSchedulerSystemFormalizedGuardConflictTimelinessAsyncImpl): (self: MeetingSchedulerSystemFormalized, proposalAttemptCount: number) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, proposalAttemptCount) => {
    const preViolations: string[] = [];
    if (!((proposalAttemptCount >= 0))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardConflictTimeliness] pre violated: proposalAttemptCount >= 0");
    }
    if (!((self.maxProposalLatencySecs > 0))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.guardConflictTimeliness] pre violated: self.maxProposalLatencySecs > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, proposalAttemptCount);
      const postViolations: string[] = [];
      if (!((((proposalAttemptCount >= (__result.self.maxProposalLatencySecs / 60))) ? (true) : (true)))) {
        postViolations.push("[MeetingSchedulerSystemFormalized.guardConflictTimeliness] post violated: if proposalAttemptCount >= (self.maxProposalLatencySecs / 60) then\n            true\n          else\n            true\n          endif");
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

/** Lifecycle registry for ConflictReporting commitments. */
export class ConflictReportingRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ConflictReporting>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ConflictReporting — the typed wrapper guarantees that since
    // `register` only accepts ConflictReporting instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ConflictReporting): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ConflictReportingId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ConflictReportingId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ConflictReportingId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ConflictReporting>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ConflictReporting>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for NotifyOnConfirmation commitments. */
export class NotifyOnConfirmationRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<NotifyOnConfirmation>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a NotifyOnConfirmation — the typed wrapper guarantees that since
    // `register` only accepts NotifyOnConfirmation instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: NotifyOnConfirmation): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: NotifyOnConfirmationId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: NotifyOnConfirmationId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: NotifyOnConfirmationId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<NotifyOnConfirmation>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<NotifyOnConfirmation>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AcceptConstraintUpdates commitments. */
export class AcceptConstraintUpdatesRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AcceptConstraintUpdates>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AcceptConstraintUpdates — the typed wrapper guarantees that since
    // `register` only accepts AcceptConstraintUpdates instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AcceptConstraintUpdates): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AcceptConstraintUpdatesId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AcceptConstraintUpdatesId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AcceptConstraintUpdatesId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AcceptConstraintUpdates>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AcceptConstraintUpdates>[];
  }

  size(): number {
    return this.inner.size();
  }
}

