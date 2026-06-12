// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
/** Identity type for MeetingSchedulerSystem. Runtime: string. Compile-time: branded. */
export type MeetingSchedulerSystemId = string & { readonly __brand: "MeetingSchedulerSystemId" };
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

// ─── Interfaces ───

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


// ─── Factory functions ───

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


// ─── Runtime invariant validators ───

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


// ─── Event handler wrappers ───

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

