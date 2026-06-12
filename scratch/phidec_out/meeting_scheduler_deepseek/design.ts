// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for RequestManager. Runtime: string. Compile-time: branded. */
export type RequestManagerId = string & { readonly __brand: "RequestManagerId" };
/** Identity type for ConstraintManager. Runtime: string. Compile-time: branded. */
export type ConstraintManagerId = string & { readonly __brand: "ConstraintManagerId" };
/** Identity type for ProposerEngine. Runtime: string. Compile-time: branded. */
export type ProposerEngineId = string & { readonly __brand: "ProposerEngineId" };
/** Identity type for NotificationService. Runtime: string. Compile-time: branded. */
export type NotificationServiceId = string & { readonly __brand: "NotificationServiceId" };
/** Identity type for MeetingStore. Runtime: string. Compile-time: branded. */
export type MeetingStoreId = string & { readonly __brand: "MeetingStoreId" };
/** Identity type for RequestToConstraintRelator. Runtime: string. Compile-time: branded. */
export type RequestToConstraintRelatorId = string & { readonly __brand: "RequestToConstraintRelatorId" };
/** Identity type for RequestToProposerRelator. Runtime: string. Compile-time: branded. */
export type RequestToProposerRelatorId = string & { readonly __brand: "RequestToProposerRelatorId" };
/** Identity type for ConstraintToProposerRelator. Runtime: string. Compile-time: branded. */
export type ConstraintToProposerRelatorId = string & { readonly __brand: "ConstraintToProposerRelatorId" };
/** Identity type for RequestToNotificationRelator. Runtime: string. Compile-time: branded. */
export type RequestToNotificationRelatorId = string & { readonly __brand: "RequestToNotificationRelatorId" };
/** Identity type for MeetingToNotificationRelator. Runtime: string. Compile-time: branded. */
export type MeetingToNotificationRelatorId = string & { readonly __brand: "MeetingToNotificationRelatorId" };
/** Identity type for SchedulingFlow. Runtime: string. Compile-time: branded. */
export type SchedulingFlowId = string & { readonly __brand: "SchedulingFlowId" };
/** Identity type for ConstraintUpdateFlow. Runtime: string. Compile-time: branded. */
export type ConstraintUpdateFlowId = string & { readonly __brand: "ConstraintUpdateFlowId" };
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
/** Identity type for MeetingSchedulerSystem. Runtime: string. Compile-time: branded. */
export type MeetingSchedulerSystemId = string & { readonly __brand: "MeetingSchedulerSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface RequestManager {
  readonly requestId: RequestManagerId;
  readonly rangeStart: number;
  readonly rangeEnd: number;
  readonly isOpen: boolean;
  readonly initiatorId: string;
}

/** @stereotype <<Kind>> */
export interface ConstraintManager {
  readonly constraintId: ConstraintManagerId;
  readonly participantId: string;
  readonly exclusionDates: ReadonlySet<number>;
  readonly preferenceDates: ReadonlySet<number>;
}

/** @stereotype <<Kind>> */
export interface ProposerEngine {
  readonly engineId: ProposerEngineId;
}

/** @stereotype <<Kind>> */
export interface NotificationService {
  readonly notifId: NotificationServiceId;
  readonly lastNotificationSentAt: number;
  readonly notificationLog: ReadonlySet<string>;
}

/** @stereotype <<Kind>> */
export interface MeetingStore {
  readonly meetingId: MeetingStoreId;
  readonly scheduledDate: number;
  readonly location: string;
  readonly confirmed: boolean;
}

/** @stereotype <<Relator>> */
export interface RequestToConstraintRelator {
  readonly relatorId: RequestToConstraintRelatorId;
  readonly linkedAt: number;
}

/** @stereotype <<Relator>> */
export interface RequestToProposerRelator {
  readonly relatorId: RequestToProposerRelatorId;
  readonly linkedAt: number;
}

/** @stereotype <<Relator>> */
export interface ConstraintToProposerRelator {
  readonly relatorId: ConstraintToProposerRelatorId;
  readonly linkedAt: number;
}

/** @stereotype <<Relator>> */
export interface RequestToNotificationRelator {
  readonly relatorId: RequestToNotificationRelatorId;
  readonly linkedAt: number;
}

/** @stereotype <<Relator>> */
export interface MeetingToNotificationRelator {
  readonly relatorId: MeetingToNotificationRelatorId;
  readonly linkedAt: number;
}

/** @stereotype <<Happening>> */
export interface SchedulingFlow {
  readonly flowId: SchedulingFlowId;
  readonly requestManagerId: string;
  readonly constraintManagerId: string;
  readonly proposerEngineId: string;
  readonly meetingStoreId: string;
  readonly notificationServiceId: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ConstraintUpdateFlow {
  readonly flowId: ConstraintUpdateFlowId;
  readonly participantId: string;
  readonly constraintManagerId: string;
  readonly requestManagerId: string;
  readonly newExclusions: ReadonlySet<number>;
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

/** @stereotype <<Kind>> */
export interface MeetingSchedulerSystem extends ExclusionRespect, InitiatorNotified {
  readonly systemId: MeetingSchedulerSystemId;
  readonly proposedDate: number;
  readonly rangeStart: number;
  readonly rangeEnd: number;
  readonly conflictReported: boolean;
  readonly notificationSent: boolean;
  readonly constraintUpdateAccepted: boolean;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionText: string;
  readonly assumptionCategory: string;
}

/** @stereotype <<Subkind>> */
export interface MeetingSchedulerSystemFormalized extends MeetingSchedulerSystem {
  readonly gdprDpoContact: string;
  readonly dataRetentionDays: number;
}


// ─── Factory functions ───

export function makeRequestManager(data: {
  requestId: string;
  rangeStart: number;
  rangeEnd: number;
  isOpen: boolean;
  initiatorId: string;
}): RequestManager {
  return {
    requestId: data.requestId as RequestManagerId,
    rangeStart: data.rangeStart,
    rangeEnd: data.rangeEnd,
    isOpen: data.isOpen,
    initiatorId: data.initiatorId,
  };
}

export function makeConstraintManager(data: {
  constraintId: string;
  participantId: string;
  exclusionDates: ReadonlySet<number>;
  preferenceDates: ReadonlySet<number>;
}): ConstraintManager {
  return {
    constraintId: data.constraintId as ConstraintManagerId,
    participantId: data.participantId,
    exclusionDates: data.exclusionDates,
    preferenceDates: data.preferenceDates,
  };
}

export function makeProposerEngine(data: {
  engineId: string;
}): ProposerEngine {
  return {
    engineId: data.engineId as ProposerEngineId,
  };
}

export function makeNotificationService(data: {
  notifId: string;
  lastNotificationSentAt: number;
  notificationLog: ReadonlySet<string>;
}): NotificationService {
  return {
    notifId: data.notifId as NotificationServiceId,
    lastNotificationSentAt: data.lastNotificationSentAt,
    notificationLog: data.notificationLog,
  };
}

export function makeMeetingStore(data: {
  meetingId: string;
  scheduledDate: number;
  location: string;
  confirmed: boolean;
}): MeetingStore {
  return {
    meetingId: data.meetingId as MeetingStoreId,
    scheduledDate: data.scheduledDate,
    location: data.location,
    confirmed: data.confirmed,
  };
}

export function makeRequestToConstraintRelator(data: {
  relatorId: string;
  linkedAt: number;
}): RequestToConstraintRelator {
  return {
    relatorId: data.relatorId as RequestToConstraintRelatorId,
    linkedAt: data.linkedAt,
  };
}

export function makeRequestToProposerRelator(data: {
  relatorId: string;
  linkedAt: number;
}): RequestToProposerRelator {
  return {
    relatorId: data.relatorId as RequestToProposerRelatorId,
    linkedAt: data.linkedAt,
  };
}

export function makeConstraintToProposerRelator(data: {
  relatorId: string;
  linkedAt: number;
}): ConstraintToProposerRelator {
  return {
    relatorId: data.relatorId as ConstraintToProposerRelatorId,
    linkedAt: data.linkedAt,
  };
}

export function makeRequestToNotificationRelator(data: {
  relatorId: string;
  linkedAt: number;
}): RequestToNotificationRelator {
  return {
    relatorId: data.relatorId as RequestToNotificationRelatorId,
    linkedAt: data.linkedAt,
  };
}

export function makeMeetingToNotificationRelator(data: {
  relatorId: string;
  linkedAt: number;
}): MeetingToNotificationRelator {
  return {
    relatorId: data.relatorId as MeetingToNotificationRelatorId,
    linkedAt: data.linkedAt,
  };
}

export function makeSchedulingFlow(data: {
  flowId: string;
  requestManagerId: string;
  constraintManagerId: string;
  proposerEngineId: string;
  meetingStoreId: string;
  notificationServiceId: string;
  outcome: string;
}): SchedulingFlow {
  return {
    flowId: data.flowId as SchedulingFlowId,
    requestManagerId: data.requestManagerId,
    constraintManagerId: data.constraintManagerId,
    proposerEngineId: data.proposerEngineId,
    meetingStoreId: data.meetingStoreId,
    notificationServiceId: data.notificationServiceId,
    outcome: data.outcome,
  };
}

export function makeConstraintUpdateFlow(data: {
  flowId: string;
  participantId: string;
  constraintManagerId: string;
  requestManagerId: string;
  newExclusions: ReadonlySet<number>;
}): ConstraintUpdateFlow {
  return {
    flowId: data.flowId as ConstraintUpdateFlowId,
    participantId: data.participantId,
    constraintManagerId: data.constraintManagerId,
    requestManagerId: data.requestManagerId,
    newExclusions: data.newExclusions,
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

export function makeMeetingSchedulerSystem(data: {
  systemId: string;
  proposedDate: number;
  rangeStart: number;
  rangeEnd: number;
  conflictReported: boolean;
  notificationSent: boolean;
  constraintUpdateAccepted: boolean;
}): MeetingSchedulerSystem {
  return {
    systemId: data.systemId as MeetingSchedulerSystemId,
    proposedDate: data.proposedDate,
    rangeStart: data.rangeStart,
    rangeEnd: data.rangeEnd,
    conflictReported: data.conflictReported,
    notificationSent: data.notificationSent,
    constraintUpdateAccepted: data.constraintUpdateAccepted,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionText: string;
  assumptionCategory: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionText: data.assumptionText,
    assumptionCategory: data.assumptionCategory,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for RequestManager. Returns empty array when valid. */
export function validateRequestManager(instance: RequestManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[RequestManager] invariant violated: self.requestId <> null");
  }
  if (!((instance.rangeStart >= 0))) {
    violations.push("[RequestManager] invariant violated: self.rangeStart >= 0.0");
  }
  if (!((instance.rangeEnd >= instance.rangeStart))) {
    violations.push("[RequestManager] invariant violated: self.rangeEnd >= self.rangeStart");
  }
  if (!((!((instance.isOpen === true)) || (instance.initiatorId !== null)))) {
    violations.push("[RequestManager] invariant violated: self.isOpen = true implies self.initiatorId <> null");
  }
  return violations;
}

/** Runtime invariant check for ConstraintManager. Returns empty array when valid. */
export function validateConstraintManager(instance: ConstraintManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.constraintId !== null))) {
    violations.push("[ConstraintManager] invariant violated: self.constraintId <> null");
  }
  if (!((instance.participantId !== null))) {
    violations.push("[ConstraintManager] invariant violated: self.participantId <> null");
  }
  if (!(Array.from(instance.preferenceDates).every((__x) => (!((instance.exclusionDates).has(__x)))))) {
    violations.push("[ConstraintManager] invariant violated: self.preferenceDates->forAll(d | not self.exclusionDates->includes(d))");
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
  if (!((instance.notifId !== null))) {
    violations.push("[NotificationService] invariant violated: self.notifId <> null");
  }
  if (!((instance.lastNotificationSentAt >= 0))) {
    violations.push("[NotificationService] invariant violated: self.lastNotificationSentAt >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for MeetingStore. Returns empty array when valid. */
export function validateMeetingStore(instance: MeetingStore): readonly string[] {
  const violations: string[] = [];
  if (!((instance.meetingId !== null))) {
    violations.push("[MeetingStore] invariant violated: self.meetingId <> null");
  }
  if (!((!(instance.confirmed) || ((instance.scheduledDate >= 0) && (instance.location !== null))))) {
    violations.push("[MeetingStore] invariant violated: self.confirmed implies self.scheduledDate >= 0.0 and self.location <> null");
  }
  return violations;
}

/** Runtime invariant check for RequestToConstraintRelator. Returns empty array when valid. */
export function validateRequestToConstraintRelator(instance: RequestToConstraintRelator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.relatorId !== null))) {
    violations.push("[RequestToConstraintRelator] invariant violated: self.relatorId <> null");
  }
  if (!((instance.linkedAt >= 0))) {
    violations.push("[RequestToConstraintRelator] invariant violated: self.linkedAt >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for RequestToProposerRelator. Returns empty array when valid. */
export function validateRequestToProposerRelator(instance: RequestToProposerRelator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.relatorId !== null))) {
    violations.push("[RequestToProposerRelator] invariant violated: self.relatorId <> null");
  }
  if (!((instance.linkedAt >= 0))) {
    violations.push("[RequestToProposerRelator] invariant violated: self.linkedAt >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ConstraintToProposerRelator. Returns empty array when valid. */
export function validateConstraintToProposerRelator(instance: ConstraintToProposerRelator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.relatorId !== null))) {
    violations.push("[ConstraintToProposerRelator] invariant violated: self.relatorId <> null");
  }
  if (!((instance.linkedAt >= 0))) {
    violations.push("[ConstraintToProposerRelator] invariant violated: self.linkedAt >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for RequestToNotificationRelator. Returns empty array when valid. */
export function validateRequestToNotificationRelator(instance: RequestToNotificationRelator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.relatorId !== null))) {
    violations.push("[RequestToNotificationRelator] invariant violated: self.relatorId <> null");
  }
  if (!((instance.linkedAt >= 0))) {
    violations.push("[RequestToNotificationRelator] invariant violated: self.linkedAt >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for MeetingToNotificationRelator. Returns empty array when valid. */
export function validateMeetingToNotificationRelator(instance: MeetingToNotificationRelator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.relatorId !== null))) {
    violations.push("[MeetingToNotificationRelator] invariant violated: self.relatorId <> null");
  }
  if (!((instance.linkedAt >= 0))) {
    violations.push("[MeetingToNotificationRelator] invariant violated: self.linkedAt >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for SchedulingFlow. Returns empty array when valid. */
export function validateSchedulingFlow(instance: SchedulingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SchedulingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[SchedulingFlow] invariant violated: self.outcome <> null");
  }
  return violations;
}

/** Runtime invariant check for ConstraintUpdateFlow. Returns empty array when valid. */
export function validateConstraintUpdateFlow(instance: ConstraintUpdateFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ConstraintUpdateFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.participantId !== null))) {
    violations.push("[ConstraintUpdateFlow] invariant violated: self.participantId <> null");
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

/** Runtime invariant check for MeetingSchedulerSystem. Returns empty array when valid. */
export function validateMeetingSchedulerSystem(instance: MeetingSchedulerSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.rangeStart >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.rangeStart >= 0.0");
  }
  if (!((instance.rangeEnd >= instance.rangeStart))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.rangeEnd >= self.rangeStart");
  }
  if (!((instance.proposedDate >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.proposedDate >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumptionText !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionText <> null");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulerSystemFormalized. Returns empty array when valid. */
export function validateMeetingSchedulerSystemFormalized(instance: MeetingSchedulerSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.dataRetentionDays > 0))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.dataRetentionDays > 0");
  }
  if (!((instance.dataRetentionDays <= 90))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.dataRetentionDays <= 90");
  }
  if (!((instance.rangeStart >= 0))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.rangeStart >= 0.0");
  }
  if (!((instance.rangeEnd >= instance.rangeStart))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.rangeEnd >= self.rangeStart");
  }
  if (!(((instance.rangeEnd - instance.rangeStart) <= (365 * 86400)))) {
    violations.push("[MeetingSchedulerSystemFormalized] invariant violated: self.rangeEnd - self.rangeStart <= 365.0 * 86400.0");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for RequestManager.openRequest. User supplies this. */
export type RequestManagerOpenRequestImpl = (self: RequestManager, start: number, end: number) => { self: RequestManager; modified: { rangeStart: unknown; rangeEnd: unknown; isOpen: unknown } };

/** Contract-checking wrapper for RequestManager.openRequest. */
export function wrapRequestManagerOpenRequest(impl: RequestManagerOpenRequestImpl): (self: RequestManager, start: number, end: number) => RequestManager {
  return (self, start, end) => {
    const preViolations: string[] = [];
    if (!((start >= 0))) {
      preViolations.push("[RequestManager.openRequest] pre violated: start >= 0.0");
    }
    if (!((end >= start))) {
      preViolations.push("[RequestManager.openRequest] pre violated: end >= start");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, start, end);
      const postViolations: string[] = [];
      if (!((__result.self.rangeStart === start))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.rangeStart = start");
      }
      if (!((__result.self.rangeEnd === end))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.rangeEnd = end");
      }
      if (!((__result.self.isOpen === true))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.isOpen = true");
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
export type RequestManagerOpenRequestAsyncImpl = (self: RequestManager, start: number, end: number) => Promise<{ self: RequestManager; modified: { rangeStart: unknown; rangeEnd: unknown; isOpen: unknown } }>;

/** Contract-checking wrapper for RequestManager.openRequest (async). */
export function wrapRequestManagerOpenRequestAsync(impl: RequestManagerOpenRequestAsyncImpl): (self: RequestManager, start: number, end: number) => Promise<RequestManager> {
  return async (self, start, end) => {
    const preViolations: string[] = [];
    if (!((start >= 0))) {
      preViolations.push("[RequestManager.openRequest] pre violated: start >= 0.0");
    }
    if (!((end >= start))) {
      preViolations.push("[RequestManager.openRequest] pre violated: end >= start");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, start, end);
      const postViolations: string[] = [];
      if (!((__result.self.rangeStart === start))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.rangeStart = start");
      }
      if (!((__result.self.rangeEnd === end))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.rangeEnd = end");
      }
      if (!((__result.self.isOpen === true))) {
        postViolations.push("[RequestManager.openRequest] post violated: self.isOpen = true");
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

/** Impl signature for RequestManager.closeRequest. User supplies this. */
export type RequestManagerCloseRequestImpl = (self: RequestManager) => { self: RequestManager; modified: { isOpen: unknown } };

/** Contract-checking wrapper for RequestManager.closeRequest. */
export function wrapRequestManagerCloseRequest(impl: RequestManagerCloseRequestImpl): (self: RequestManager) => RequestManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isOpen === true))) {
      preViolations.push("[RequestManager.closeRequest] pre violated: self.isOpen = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOpen === false))) {
        postViolations.push("[RequestManager.closeRequest] post violated: self.isOpen = false");
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

/** Impl signature for RequestManager.closeRequest (async). User supplies this. */
export type RequestManagerCloseRequestAsyncImpl = (self: RequestManager) => Promise<{ self: RequestManager; modified: { isOpen: unknown } }>;

/** Contract-checking wrapper for RequestManager.closeRequest (async). */
export function wrapRequestManagerCloseRequestAsync(impl: RequestManagerCloseRequestAsyncImpl): (self: RequestManager) => Promise<RequestManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isOpen === true))) {
      preViolations.push("[RequestManager.closeRequest] pre violated: self.isOpen = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOpen === false))) {
        postViolations.push("[RequestManager.closeRequest] post violated: self.isOpen = false");
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
export type ConstraintManagerUpdateConstraintsImpl = (self: ConstraintManager, exclusions: ReadonlySet<number>, preferences: ReadonlySet<number>) => { self: ConstraintManager; modified: { exclusionDates: unknown; preferenceDates: unknown } };

/** Contract-checking wrapper for ConstraintManager.updateConstraints. */
export function wrapConstraintManagerUpdateConstraints(impl: ConstraintManagerUpdateConstraintsImpl): (self: ConstraintManager, exclusions: ReadonlySet<number>, preferences: ReadonlySet<number>) => ConstraintManager {
  return (self, exclusions, preferences) => {
    const preViolations: string[] = [];
    if (!(Array.from(exclusions).every((__x) => ((__x >= 0))))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: exclusions->forAll(d | d >= 0.0)");
    }
    if (!(Array.from(preferences).every((__x) => ((__x >= 0))))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: preferences->forAll(d | d >= 0.0)");
    }
    if (!(Array.from(preferences).every((__x) => (!((exclusions).has(__x)))))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: preferences->forAll(d | not exclusions->includes(d))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, exclusions, preferences);
      const postViolations: string[] = [];
      if (!((__result.self.exclusionDates === exclusions))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.exclusionDates = exclusions");
      }
      if (!((__result.self.preferenceDates === preferences))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.preferenceDates = preferences");
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
export type ConstraintManagerUpdateConstraintsAsyncImpl = (self: ConstraintManager, exclusions: ReadonlySet<number>, preferences: ReadonlySet<number>) => Promise<{ self: ConstraintManager; modified: { exclusionDates: unknown; preferenceDates: unknown } }>;

/** Contract-checking wrapper for ConstraintManager.updateConstraints (async). */
export function wrapConstraintManagerUpdateConstraintsAsync(impl: ConstraintManagerUpdateConstraintsAsyncImpl): (self: ConstraintManager, exclusions: ReadonlySet<number>, preferences: ReadonlySet<number>) => Promise<ConstraintManager> {
  return async (self, exclusions, preferences) => {
    const preViolations: string[] = [];
    if (!(Array.from(exclusions).every((__x) => ((__x >= 0))))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: exclusions->forAll(d | d >= 0.0)");
    }
    if (!(Array.from(preferences).every((__x) => ((__x >= 0))))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: preferences->forAll(d | d >= 0.0)");
    }
    if (!(Array.from(preferences).every((__x) => (!((exclusions).has(__x)))))) {
      preViolations.push("[ConstraintManager.updateConstraints] pre violated: preferences->forAll(d | not exclusions->includes(d))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, exclusions, preferences);
      const postViolations: string[] = [];
      if (!((__result.self.exclusionDates === exclusions))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.exclusionDates = exclusions");
      }
      if (!((__result.self.preferenceDates === preferences))) {
        postViolations.push("[ConstraintManager.updateConstraints] post violated: self.preferenceDates = preferences");
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

/** Impl signature for ProposerEngine.proposeDate. User supplies this. */
export type ProposerEngineProposeDateImpl = (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusions: ReadonlySet<number>, preferences: ReadonlySet<number>) => { self: ProposerEngine; modified: {} };

/** Contract-checking wrapper for ProposerEngine.proposeDate. */
export function wrapProposerEngineProposeDate(impl: ProposerEngineProposeDateImpl): (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusions: ReadonlySet<number>, preferences: ReadonlySet<number>) => ProposerEngine {
  return (self, rangeStart, rangeEnd, exclusions, preferences) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[ProposerEngine.proposeDate] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[ProposerEngine.proposeDate] pre violated: rangeEnd >= rangeStart");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rangeStart, rangeEnd, exclusions, preferences);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= rangeStart — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= rangeEnd — unbound variable 'result'
      // SKIPPED post-clause (not translatable): not exclusions->includes(result) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if preferences->notEmpty() and preferences->exists(d | d >= rangeStart and d <= rangeEnd and not exclusions->includes(d)) then
            preferences->includes(result)
          else
            true
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

/** Impl signature for ProposerEngine.proposeDate (async). User supplies this. */
export type ProposerEngineProposeDateAsyncImpl = (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusions: ReadonlySet<number>, preferences: ReadonlySet<number>) => Promise<{ self: ProposerEngine; modified: {} }>;

/** Contract-checking wrapper for ProposerEngine.proposeDate (async). */
export function wrapProposerEngineProposeDateAsync(impl: ProposerEngineProposeDateAsyncImpl): (self: ProposerEngine, rangeStart: number, rangeEnd: number, exclusions: ReadonlySet<number>, preferences: ReadonlySet<number>) => Promise<ProposerEngine> {
  return async (self, rangeStart, rangeEnd, exclusions, preferences) => {
    const preViolations: string[] = [];
    if (!((rangeStart >= 0))) {
      preViolations.push("[ProposerEngine.proposeDate] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[ProposerEngine.proposeDate] pre violated: rangeEnd >= rangeStart");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rangeStart, rangeEnd, exclusions, preferences);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result >= rangeStart — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result <= rangeEnd — unbound variable 'result'
      // SKIPPED post-clause (not translatable): not exclusions->includes(result) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if preferences->notEmpty() and preferences->exists(d | d >= rangeStart and d <= rangeEnd and not exclusions->includes(d)) then
            preferences->includes(result)
          else
            true
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

/** Impl signature for NotificationService.notifyAll. User supplies this. */
export type NotificationServiceNotifyAllImpl = (self: NotificationService, participants: ReadonlySet<string>, date: number, location: string, at: number) => { self: NotificationService; modified: { lastNotificationSentAt: unknown; notificationLog: unknown } };

/** Contract-checking wrapper for NotificationService.notifyAll. */
export function wrapNotificationServiceNotifyAll(impl: NotificationServiceNotifyAllImpl): (self: NotificationService, participants: ReadonlySet<string>, date: number, location: string, at: number) => NotificationService {
  return (self, participants, date, location, at) => {
    const preViolations: string[] = [];
    if (!((participants).size > 0)) {
      preViolations.push("[NotificationService.notifyAll] pre violated: participants->notEmpty()");
    }
    if (!((date >= 0))) {
      preViolations.push("[NotificationService.notifyAll] pre violated: date >= 0.0");
    }
    if (!((location !== null))) {
      preViolations.push("[NotificationService.notifyAll] pre violated: location <> null");
    }
    if (!((at >= 0))) {
      preViolations.push("[NotificationService.notifyAll] pre violated: at >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participants, date, location, at);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationSentAt === at))) {
        postViolations.push("[NotificationService.notifyAll] post violated: self.lastNotificationSentAt = at");
      }
      if (!((__result.self.notificationLog).has("CONFIRMED"))) {
        postViolations.push("[NotificationService.notifyAll] post violated: self.notificationLog->includes('CONFIRMED')");
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

/** Impl signature for NotificationService.notifyAll (async). User supplies this. */
export type NotificationServiceNotifyAllAsyncImpl = (self: NotificationService, participants: ReadonlySet<string>, date: number, location: string, at: number) => Promise<{ self: NotificationService; modified: { lastNotificationSentAt: unknown; notificationLog: unknown } }>;

/** Contract-checking wrapper for NotificationService.notifyAll (async). */
export function wrapNotificationServiceNotifyAllAsync(impl: NotificationServiceNotifyAllAsyncImpl): (self: NotificationService, participants: ReadonlySet<string>, date: number, location: string, at: number) => Promise<NotificationService> {
  return async (self, participants, date, location, at) => {
    const preViolations: string[] = [];
    if (!((participants).size > 0)) {
      preViolations.push("[NotificationService.notifyAll] pre violated: participants->notEmpty()");
    }
    if (!((date >= 0))) {
      preViolations.push("[NotificationService.notifyAll] pre violated: date >= 0.0");
    }
    if (!((location !== null))) {
      preViolations.push("[NotificationService.notifyAll] pre violated: location <> null");
    }
    if (!((at >= 0))) {
      preViolations.push("[NotificationService.notifyAll] pre violated: at >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participants, date, location, at);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationSentAt === at))) {
        postViolations.push("[NotificationService.notifyAll] post violated: self.lastNotificationSentAt = at");
      }
      if (!((__result.self.notificationLog).has("CONFIRMED"))) {
        postViolations.push("[NotificationService.notifyAll] post violated: self.notificationLog->includes('CONFIRMED')");
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

/** Impl signature for NotificationService.reportConflict. User supplies this. */
export type NotificationServiceReportConflictImpl = (self: NotificationService, initiatorId: string, at: number) => { self: NotificationService; modified: { lastNotificationSentAt: unknown; notificationLog: unknown } };

/** Contract-checking wrapper for NotificationService.reportConflict. */
export function wrapNotificationServiceReportConflict(impl: NotificationServiceReportConflictImpl): (self: NotificationService, initiatorId: string, at: number) => NotificationService {
  return (self, initiatorId, at) => {
    const preViolations: string[] = [];
    if (!((initiatorId !== null))) {
      preViolations.push("[NotificationService.reportConflict] pre violated: initiatorId <> null");
    }
    if (!((at >= 0))) {
      preViolations.push("[NotificationService.reportConflict] pre violated: at >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initiatorId, at);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationSentAt === at))) {
        postViolations.push("[NotificationService.reportConflict] post violated: self.lastNotificationSentAt = at");
      }
      if (!((__result.self.notificationLog).has("CONFLICT"))) {
        postViolations.push("[NotificationService.reportConflict] post violated: self.notificationLog->includes('CONFLICT')");
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

/** Impl signature for NotificationService.reportConflict (async). User supplies this. */
export type NotificationServiceReportConflictAsyncImpl = (self: NotificationService, initiatorId: string, at: number) => Promise<{ self: NotificationService; modified: { lastNotificationSentAt: unknown; notificationLog: unknown } }>;

/** Contract-checking wrapper for NotificationService.reportConflict (async). */
export function wrapNotificationServiceReportConflictAsync(impl: NotificationServiceReportConflictAsyncImpl): (self: NotificationService, initiatorId: string, at: number) => Promise<NotificationService> {
  return async (self, initiatorId, at) => {
    const preViolations: string[] = [];
    if (!((initiatorId !== null))) {
      preViolations.push("[NotificationService.reportConflict] pre violated: initiatorId <> null");
    }
    if (!((at >= 0))) {
      preViolations.push("[NotificationService.reportConflict] pre violated: at >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initiatorId, at);
      const postViolations: string[] = [];
      if (!((__result.self.lastNotificationSentAt === at))) {
        postViolations.push("[NotificationService.reportConflict] post violated: self.lastNotificationSentAt = at");
      }
      if (!((__result.self.notificationLog).has("CONFLICT"))) {
        postViolations.push("[NotificationService.reportConflict] post violated: self.notificationLog->includes('CONFLICT')");
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

/** Impl signature for MeetingStore.confirmMeeting. User supplies this. */
export type MeetingStoreConfirmMeetingImpl = (self: MeetingStore, date: number, location: string) => { self: MeetingStore; modified: { scheduledDate: unknown; location: unknown; confirmed: unknown } };

/** Contract-checking wrapper for MeetingStore.confirmMeeting. */
export function wrapMeetingStoreConfirmMeeting(impl: MeetingStoreConfirmMeetingImpl): (self: MeetingStore, date: number, location: string) => MeetingStore {
  return (self, date, location) => {
    const preViolations: string[] = [];
    if (!((date >= 0))) {
      preViolations.push("[MeetingStore.confirmMeeting] pre violated: date >= 0.0");
    }
    if (!((location !== null))) {
      preViolations.push("[MeetingStore.confirmMeeting] pre violated: location <> null");
    }
    if (!(!(self.confirmed))) {
      preViolations.push("[MeetingStore.confirmMeeting] pre violated: not self.confirmed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, date, location);
      const postViolations: string[] = [];
      if (!((__result.self.scheduledDate === date))) {
        postViolations.push("[MeetingStore.confirmMeeting] post violated: self.scheduledDate = date");
      }
      if (!((__result.self.location === location))) {
        postViolations.push("[MeetingStore.confirmMeeting] post violated: self.location = location");
      }
      if (!((__result.self.confirmed === true))) {
        postViolations.push("[MeetingStore.confirmMeeting] post violated: self.confirmed = true");
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

/** Impl signature for MeetingStore.confirmMeeting (async). User supplies this. */
export type MeetingStoreConfirmMeetingAsyncImpl = (self: MeetingStore, date: number, location: string) => Promise<{ self: MeetingStore; modified: { scheduledDate: unknown; location: unknown; confirmed: unknown } }>;

/** Contract-checking wrapper for MeetingStore.confirmMeeting (async). */
export function wrapMeetingStoreConfirmMeetingAsync(impl: MeetingStoreConfirmMeetingAsyncImpl): (self: MeetingStore, date: number, location: string) => Promise<MeetingStore> {
  return async (self, date, location) => {
    const preViolations: string[] = [];
    if (!((date >= 0))) {
      preViolations.push("[MeetingStore.confirmMeeting] pre violated: date >= 0.0");
    }
    if (!((location !== null))) {
      preViolations.push("[MeetingStore.confirmMeeting] pre violated: location <> null");
    }
    if (!(!(self.confirmed))) {
      preViolations.push("[MeetingStore.confirmMeeting] pre violated: not self.confirmed");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, date, location);
      const postViolations: string[] = [];
      if (!((__result.self.scheduledDate === date))) {
        postViolations.push("[MeetingStore.confirmMeeting] post violated: self.scheduledDate = date");
      }
      if (!((__result.self.location === location))) {
        postViolations.push("[MeetingStore.confirmMeeting] post violated: self.location = location");
      }
      if (!((__result.self.confirmed === true))) {
        postViolations.push("[MeetingStore.confirmMeeting] post violated: self.confirmed = true");
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
export type MeetingSchedulerSystemRequestMeetingImpl = (self: MeetingSchedulerSystem, start: number, end: number) => { self: MeetingSchedulerSystem; modified: { rangeStart: unknown; rangeEnd: unknown; conflictReported: unknown; notificationSent: unknown; constraintUpdateAccepted: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting. */
export function wrapMeetingSchedulerSystemRequestMeeting(impl: MeetingSchedulerSystemRequestMeetingImpl): (self: MeetingSchedulerSystem, start: number, end: number) => MeetingSchedulerSystem {
  return (self, start, end) => {
    const preViolations: string[] = [];
    if (!((start >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: start >= 0.0");
    }
    if (!((end >= start))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: end >= start");
    }
    if (!((start <= end))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: start <= end");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, start, end);
      const postViolations: string[] = [];
      if (!((__result.self.rangeStart === start))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.rangeStart = start");
      }
      if (!((__result.self.rangeEnd === end))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.rangeEnd = end");
      }
      if (!((__result.self.conflictReported === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.conflictReported = false");
      }
      if (!((__result.self.notificationSent === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.notificationSent = false");
      }
      if (!((__result.self.constraintUpdateAccepted === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.constraintUpdateAccepted = false");
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
export type MeetingSchedulerSystemRequestMeetingAsyncImpl = (self: MeetingSchedulerSystem, start: number, end: number) => Promise<{ self: MeetingSchedulerSystem; modified: { rangeStart: unknown; rangeEnd: unknown; conflictReported: unknown; notificationSent: unknown; constraintUpdateAccepted: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting (async). */
export function wrapMeetingSchedulerSystemRequestMeetingAsync(impl: MeetingSchedulerSystemRequestMeetingAsyncImpl): (self: MeetingSchedulerSystem, start: number, end: number) => Promise<MeetingSchedulerSystem> {
  return async (self, start, end) => {
    const preViolations: string[] = [];
    if (!((start >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: start >= 0.0");
    }
    if (!((end >= start))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: end >= start");
    }
    if (!((start <= end))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: start <= end");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, start, end);
      const postViolations: string[] = [];
      if (!((__result.self.rangeStart === start))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.rangeStart = start");
      }
      if (!((__result.self.rangeEnd === end))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.rangeEnd = end");
      }
      if (!((__result.self.conflictReported === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.conflictReported = false");
      }
      if (!((__result.self.notificationSent === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.notificationSent = false");
      }
      if (!((__result.self.constraintUpdateAccepted === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.constraintUpdateAccepted = false");
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
export type MeetingSchedulerSystemProposeDateImpl = (self: MeetingSchedulerSystem, date: number) => { self: MeetingSchedulerSystem; modified: { proposedDate: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate. */
export function wrapMeetingSchedulerSystemProposeDate(impl: MeetingSchedulerSystemProposeDateImpl): (self: MeetingSchedulerSystem, date: number) => MeetingSchedulerSystem {
  return (self, date) => {
    const preViolations: string[] = [];
    if (!((date >= self.rangeStart))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: date >= self.rangeStart");
    }
    if (!((date <= self.rangeEnd))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: date <= self.rangeEnd");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, date);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === date))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate = date");
      }
      if (!((__result.self.proposedDate >= __result.self.rangeStart))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate >= self.rangeStart");
      }
      if (!((__result.self.proposedDate <= __result.self.rangeEnd))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate <= self.rangeEnd");
      }
      // SKIPPED post-clause (not translatable): result = date — unbound variable 'result'
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
export type MeetingSchedulerSystemProposeDateAsyncImpl = (self: MeetingSchedulerSystem, date: number) => Promise<{ self: MeetingSchedulerSystem; modified: { proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate (async). */
export function wrapMeetingSchedulerSystemProposeDateAsync(impl: MeetingSchedulerSystemProposeDateAsyncImpl): (self: MeetingSchedulerSystem, date: number) => Promise<MeetingSchedulerSystem> {
  return async (self, date) => {
    const preViolations: string[] = [];
    if (!((date >= self.rangeStart))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: date >= self.rangeStart");
    }
    if (!((date <= self.rangeEnd))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: date <= self.rangeEnd");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, date);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === date))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate = date");
      }
      if (!((__result.self.proposedDate >= __result.self.rangeStart))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate >= self.rangeStart");
      }
      if (!((__result.self.proposedDate <= __result.self.rangeEnd))) {
        postViolations.push("[MeetingSchedulerSystem.proposeDate] post violated: self.proposedDate <= self.rangeEnd");
      }
      // SKIPPED post-clause (not translatable): result = date — unbound variable 'result'
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
export type MeetingSchedulerSystemReportConflictImpl = (self: MeetingSchedulerSystem) => { self: MeetingSchedulerSystem; modified: { conflictReported: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict. */
export function wrapMeetingSchedulerSystemReportConflict(impl: MeetingSchedulerSystemReportConflictImpl): (self: MeetingSchedulerSystem) => MeetingSchedulerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.conflictReported))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: not self.conflictReported");
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
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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
export type MeetingSchedulerSystemReportConflictAsyncImpl = (self: MeetingSchedulerSystem) => Promise<{ self: MeetingSchedulerSystem; modified: { conflictReported: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict (async). */
export function wrapMeetingSchedulerSystemReportConflictAsync(impl: MeetingSchedulerSystemReportConflictAsyncImpl): (self: MeetingSchedulerSystem) => Promise<MeetingSchedulerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.conflictReported))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: not self.conflictReported");
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
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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

/** Impl signature for MeetingSchedulerSystem.notifyParticipants. User supplies this. */
export type MeetingSchedulerSystemNotifyParticipantsImpl = (self: MeetingSchedulerSystem) => { self: MeetingSchedulerSystem; modified: { notificationSent: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.notifyParticipants. */
export function wrapMeetingSchedulerSystemNotifyParticipants(impl: MeetingSchedulerSystemNotifyParticipantsImpl): (self: MeetingSchedulerSystem) => MeetingSchedulerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.notificationSent))) {
      preViolations.push("[MeetingSchedulerSystem.notifyParticipants] pre violated: not self.notificationSent");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === true))) {
        postViolations.push("[MeetingSchedulerSystem.notifyParticipants] post violated: self.notificationSent = true");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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

/** Impl signature for MeetingSchedulerSystem.notifyParticipants (async). User supplies this. */
export type MeetingSchedulerSystemNotifyParticipantsAsyncImpl = (self: MeetingSchedulerSystem) => Promise<{ self: MeetingSchedulerSystem; modified: { notificationSent: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.notifyParticipants (async). */
export function wrapMeetingSchedulerSystemNotifyParticipantsAsync(impl: MeetingSchedulerSystemNotifyParticipantsAsyncImpl): (self: MeetingSchedulerSystem) => Promise<MeetingSchedulerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.notificationSent))) {
      preViolations.push("[MeetingSchedulerSystem.notifyParticipants] pre violated: not self.notificationSent");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === true))) {
        postViolations.push("[MeetingSchedulerSystem.notifyParticipants] post violated: self.notificationSent = true");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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

/** Impl signature for MeetingSchedulerSystem.acceptConstraintUpdate. User supplies this. */
export type MeetingSchedulerSystemAcceptConstraintUpdateImpl = (self: MeetingSchedulerSystem) => { self: MeetingSchedulerSystem; modified: { constraintUpdateAccepted: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.acceptConstraintUpdate. */
export function wrapMeetingSchedulerSystemAcceptConstraintUpdate(impl: MeetingSchedulerSystemAcceptConstraintUpdateImpl): (self: MeetingSchedulerSystem) => MeetingSchedulerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.constraintUpdateAccepted))) {
      preViolations.push("[MeetingSchedulerSystem.acceptConstraintUpdate] pre violated: not self.constraintUpdateAccepted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.constraintUpdateAccepted === true))) {
        postViolations.push("[MeetingSchedulerSystem.acceptConstraintUpdate] post violated: self.constraintUpdateAccepted = true");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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

/** Impl signature for MeetingSchedulerSystem.acceptConstraintUpdate (async). User supplies this. */
export type MeetingSchedulerSystemAcceptConstraintUpdateAsyncImpl = (self: MeetingSchedulerSystem) => Promise<{ self: MeetingSchedulerSystem; modified: { constraintUpdateAccepted: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.acceptConstraintUpdate (async). */
export function wrapMeetingSchedulerSystemAcceptConstraintUpdateAsync(impl: MeetingSchedulerSystemAcceptConstraintUpdateAsyncImpl): (self: MeetingSchedulerSystem) => Promise<MeetingSchedulerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.constraintUpdateAccepted))) {
      preViolations.push("[MeetingSchedulerSystem.acceptConstraintUpdate] pre violated: not self.constraintUpdateAccepted");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.constraintUpdateAccepted === true))) {
        postViolations.push("[MeetingSchedulerSystem.acceptConstraintUpdate] post violated: self.constraintUpdateAccepted = true");
      }
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
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
export type MeetingSchedulerSystemConfirmMeetingImpl = (self: MeetingSchedulerSystem, date: number, location: string) => { self: MeetingSchedulerSystem; modified: { notificationSent: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.confirmMeeting. */
export function wrapMeetingSchedulerSystemConfirmMeeting(impl: MeetingSchedulerSystemConfirmMeetingImpl): (self: MeetingSchedulerSystem, date: number, location: string) => MeetingSchedulerSystem {
  return (self, date, location) => {
    const preViolations: string[] = [];
    if (!((self.proposedDate === date))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.proposedDate = date");
    }
    if (!((location !== null))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: location <> null");
    }
    if (!(!(self.conflictReported))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: not self.conflictReported");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, date, location);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === false))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.notificationSent = false");
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
export type MeetingSchedulerSystemConfirmMeetingAsyncImpl = (self: MeetingSchedulerSystem, date: number, location: string) => Promise<{ self: MeetingSchedulerSystem; modified: { notificationSent: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.confirmMeeting (async). */
export function wrapMeetingSchedulerSystemConfirmMeetingAsync(impl: MeetingSchedulerSystemConfirmMeetingAsyncImpl): (self: MeetingSchedulerSystem, date: number, location: string) => Promise<MeetingSchedulerSystem> {
  return async (self, date, location) => {
    const preViolations: string[] = [];
    if (!((self.proposedDate === date))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.proposedDate = date");
    }
    if (!((location !== null))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: location <> null");
    }
    if (!(!(self.conflictReported))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: not self.conflictReported");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, date, location);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === false))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.notificationSent = false");
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectExcessiveDateRange. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectExcessiveDateRangeImpl = (self: MeetingSchedulerSystemFormalized, start: number, end: number) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectExcessiveDateRange. */
export function wrapMeetingSchedulerSystemFormalizedRejectExcessiveDateRange(impl: MeetingSchedulerSystemFormalizedRejectExcessiveDateRangeImpl): (self: MeetingSchedulerSystemFormalized, start: number, end: number) => MeetingSchedulerSystemFormalized {
  return (self, start, end) => {
    const preViolations: string[] = [];
    if (!(((end - start) > (365 * 86400)))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcessiveDateRange] pre violated: end - start > 365.0 * 86400.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, start, end);
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectExcessiveDateRange (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectExcessiveDateRangeAsyncImpl = (self: MeetingSchedulerSystemFormalized, start: number, end: number) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectExcessiveDateRange (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectExcessiveDateRangeAsync(impl: MeetingSchedulerSystemFormalizedRejectExcessiveDateRangeAsyncImpl): (self: MeetingSchedulerSystemFormalized, start: number, end: number) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, start, end) => {
    const preViolations: string[] = [];
    if (!(((end - start) > (365 * 86400)))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectExcessiveDateRange] pre violated: end - start > 365.0 * 86400.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, start, end);
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectUnretainableRequest. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectUnretainableRequestImpl = (self: MeetingSchedulerSystemFormalized) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectUnretainableRequest. */
export function wrapMeetingSchedulerSystemFormalizedRejectUnretainableRequest(impl: MeetingSchedulerSystemFormalizedRejectUnretainableRequestImpl): (self: MeetingSchedulerSystemFormalized) => MeetingSchedulerSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectUnretainableRequest] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectUnretainableRequest (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectUnretainableRequestAsyncImpl = (self: MeetingSchedulerSystemFormalized) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectUnretainableRequest (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectUnretainableRequestAsync(impl: MeetingSchedulerSystemFormalizedRejectUnretainableRequestAsyncImpl): (self: MeetingSchedulerSystemFormalized) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectUnretainableRequest] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectUpdateAfterConfirmation. User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectUpdateAfterConfirmationImpl = (self: MeetingSchedulerSystemFormalized) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectUpdateAfterConfirmation. */
export function wrapMeetingSchedulerSystemFormalizedRejectUpdateAfterConfirmation(impl: MeetingSchedulerSystemFormalizedRejectUpdateAfterConfirmationImpl): (self: MeetingSchedulerSystemFormalized) => MeetingSchedulerSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectUpdateAfterConfirmation] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for MeetingSchedulerSystemFormalized.rejectUpdateAfterConfirmation (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedRejectUpdateAfterConfirmationAsyncImpl = (self: MeetingSchedulerSystemFormalized) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.rejectUpdateAfterConfirmation (async). */
export function wrapMeetingSchedulerSystemFormalizedRejectUpdateAfterConfirmationAsync(impl: MeetingSchedulerSystemFormalizedRejectUpdateAfterConfirmationAsyncImpl): (self: MeetingSchedulerSystemFormalized) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[MeetingSchedulerSystemFormalized.rejectUpdateAfterConfirmation] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

/** Impl signature for MeetingSchedulerSystemFormalized.logNotification. User supplies this. */
export type MeetingSchedulerSystemFormalizedLogNotificationImpl = (self: MeetingSchedulerSystemFormalized, participantId: string, dateSent: number) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.logNotification. */
export function wrapMeetingSchedulerSystemFormalizedLogNotification(impl: MeetingSchedulerSystemFormalizedLogNotificationImpl): (self: MeetingSchedulerSystemFormalized, participantId: string, dateSent: number) => MeetingSchedulerSystemFormalized {
  return (self, participantId, dateSent) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.logNotification] pre violated: participantId <> null");
    }
    if (!((dateSent >= 0))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.logNotification] pre violated: dateSent >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, participantId, dateSent);
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

/** Impl signature for MeetingSchedulerSystemFormalized.logNotification (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedLogNotificationAsyncImpl = (self: MeetingSchedulerSystemFormalized, participantId: string, dateSent: number) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.logNotification (async). */
export function wrapMeetingSchedulerSystemFormalizedLogNotificationAsync(impl: MeetingSchedulerSystemFormalizedLogNotificationAsyncImpl): (self: MeetingSchedulerSystemFormalized, participantId: string, dateSent: number) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self, participantId, dateSent) => {
    const preViolations: string[] = [];
    if (!((participantId !== null))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.logNotification] pre violated: participantId <> null");
    }
    if (!((dateSent >= 0))) {
      preViolations.push("[MeetingSchedulerSystemFormalized.logNotification] pre violated: dateSent >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, participantId, dateSent);
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

/** Impl signature for MeetingSchedulerSystemFormalized.enforceDataRetention. User supplies this. */
export type MeetingSchedulerSystemFormalizedEnforceDataRetentionImpl = (self: MeetingSchedulerSystemFormalized) => { self: MeetingSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.enforceDataRetention. */
export function wrapMeetingSchedulerSystemFormalizedEnforceDataRetention(impl: MeetingSchedulerSystemFormalizedEnforceDataRetentionImpl): (self: MeetingSchedulerSystemFormalized) => MeetingSchedulerSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[MeetingSchedulerSystemFormalized.enforceDataRetention] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
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

/** Impl signature for MeetingSchedulerSystemFormalized.enforceDataRetention (async). User supplies this. */
export type MeetingSchedulerSystemFormalizedEnforceDataRetentionAsyncImpl = (self: MeetingSchedulerSystemFormalized) => Promise<{ self: MeetingSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for MeetingSchedulerSystemFormalized.enforceDataRetention (async). */
export function wrapMeetingSchedulerSystemFormalizedEnforceDataRetentionAsync(impl: MeetingSchedulerSystemFormalizedEnforceDataRetentionAsyncImpl): (self: MeetingSchedulerSystemFormalized) => Promise<MeetingSchedulerSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[MeetingSchedulerSystemFormalized.enforceDataRetention] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
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

