// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for MeetingSchedulerSystem. Runtime: string. Compile-time: branded. */
export type MeetingSchedulerSystemId = string & { readonly __brand: "MeetingSchedulerSystemId" };
/** Identity type for MeetingRequest. Runtime: string. Compile-time: branded. */
export type MeetingRequestId = string & { readonly __brand: "MeetingRequestId" };
/** Identity type for ParticipantConstraints. Runtime: string. Compile-time: branded. */
export type ParticipantConstraintsId = string & { readonly __brand: "ParticipantConstraintsId" };
/** Identity type for MeetingInitiator. Runtime: string. Compile-time: branded. */
export type MeetingInitiatorId = string & { readonly __brand: "MeetingInitiatorId" };
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
/** Identity type for FitConstraintsCommitment. Runtime: string. Compile-time: branded. */
export type FitConstraintsCommitmentId = string & { readonly __brand: "FitConstraintsCommitmentId" };
/** Identity type for ConflictHandlingCommitment. Runtime: string. Compile-time: branded. */
export type ConflictHandlingCommitmentId = string & { readonly __brand: "ConflictHandlingCommitmentId" };
/** Identity type for ParticipantNotificationCommitment. Runtime: string. Compile-time: branded. */
export type ParticipantNotificationCommitmentId = string & { readonly __brand: "ParticipantNotificationCommitmentId" };
/** Identity type for UpdatedConstraintsCommitment. Runtime: string. Compile-time: branded. */
export type UpdatedConstraintsCommitmentId = string & { readonly __brand: "UpdatedConstraintsCommitmentId" };
/** Identity type for MeetingSchedulingFlow. Runtime: string. Compile-time: branded. */
export type MeetingSchedulingFlowId = string & { readonly __brand: "MeetingSchedulingFlowId" };
/** Identity type for ConflictResolutionFlow. Runtime: string. Compile-time: branded. */
export type ConflictResolutionFlowId = string & { readonly __brand: "ConflictResolutionFlowId" };
/** Identity type for ParticipantUpdateFlow. Runtime: string. Compile-time: branded. */
export type ParticipantUpdateFlowId = string & { readonly __brand: "ParticipantUpdateFlowId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface MeetingSchedulerSystem extends ParticipantConstraintsRespected {
  readonly systemId: MeetingSchedulerSystemId;
  readonly dateRangeStart: number;
  readonly dateRangeEnd: number;
  readonly isOpen: boolean;
  readonly initiatorNotified: boolean;
  readonly participantsNotified: boolean;
  readonly constraintsUpdated: boolean;
  readonly conflictDetected: boolean;
  readonly proposedDate: number;
}

/** @stereotype <<Kind>> */
export interface MeetingRequest {
  readonly requestId: MeetingRequestId;
  readonly initiatorId: string;
  readonly rangeStart: number;
  readonly rangeEnd: number;
  readonly status: string;
}

/** @stereotype <<Kind>> */
export interface ParticipantConstraints {
  readonly constraintId: ParticipantConstraintsId;
  readonly participantId: string;
  readonly requestId: string;
  readonly exclusionSet: ReadonlySet<number>;
  readonly preferenceSet: ReadonlySet<number>;
}

/** @stereotype <<Agent>> */
export interface MeetingInitiator {
  readonly initiatorId: MeetingInitiatorId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface Participant {
  readonly participantId: ParticipantId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface MeetingSchedulerVendor {
  readonly vendorId: MeetingSchedulerVendorId;
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
  readonly excludedDates: ReadonlySet<string>;
}

/** @stereotype <<Kind>> */
export interface PreferenceSet {
  readonly preferenceId: PreferenceSetId;
  readonly preferredDates: ReadonlySet<string>;
}

/** @stereotype <<Commitment>> */
export interface FitConstraintsCommitment {
  readonly commitmentId: FitConstraintsCommitmentId;
  readonly dateWithinRange: string;
}

/** @stereotype <<Commitment>> */
export interface ConflictHandlingCommitment {
  readonly commitmentId: ConflictHandlingCommitmentId;
  readonly conflictReported: string;
}

/** @stereotype <<Commitment>> */
export interface ParticipantNotificationCommitment {
  readonly commitmentId: ParticipantNotificationCommitmentId;
  readonly notificationSent: string;
}

/** @stereotype <<Commitment>> */
export interface UpdatedConstraintsCommitment {
  readonly commitmentId: UpdatedConstraintsCommitmentId;
  readonly constraintsUpdated: string;
}

/** @stereotype <<Category>> */
export interface ParticipantConstraintsRespected {
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

/** @stereotype <<Happening>> */
export interface ParticipantUpdateFlow {
  readonly flowId: ParticipantUpdateFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}


// ─── Factory functions ───

export function makeMeetingSchedulerSystem(data: {
  systemId: string;
  dateRangeStart: number;
  dateRangeEnd: number;
  isOpen: boolean;
  initiatorNotified: boolean;
  participantsNotified: boolean;
  constraintsUpdated: boolean;
  conflictDetected: boolean;
  proposedDate: number;
}): MeetingSchedulerSystem {
  return {
    systemId: data.systemId as MeetingSchedulerSystemId,
    dateRangeStart: data.dateRangeStart,
    dateRangeEnd: data.dateRangeEnd,
    isOpen: data.isOpen,
    initiatorNotified: data.initiatorNotified,
    participantsNotified: data.participantsNotified,
    constraintsUpdated: data.constraintsUpdated,
    conflictDetected: data.conflictDetected,
    proposedDate: data.proposedDate,
  };
}

export function makeMeetingRequest(data: {
  requestId: string;
  initiatorId: string;
  rangeStart: number;
  rangeEnd: number;
  status: string;
}): MeetingRequest {
  return {
    requestId: data.requestId as MeetingRequestId,
    initiatorId: data.initiatorId,
    rangeStart: data.rangeStart,
    rangeEnd: data.rangeEnd,
    status: data.status,
  };
}

export function makeParticipantConstraints(data: {
  constraintId: string;
  participantId: string;
  requestId: string;
  exclusionSet: ReadonlySet<number>;
  preferenceSet: ReadonlySet<number>;
}): ParticipantConstraints {
  return {
    constraintId: data.constraintId as ParticipantConstraintsId,
    participantId: data.participantId,
    requestId: data.requestId,
    exclusionSet: data.exclusionSet,
    preferenceSet: data.preferenceSet,
  };
}

export function makeMeetingInitiator(data: {
  initiatorId: string;
  name: string;
}): MeetingInitiator {
  return {
    initiatorId: data.initiatorId as MeetingInitiatorId,
    name: data.name,
  };
}

export function makeParticipant(data: {
  participantId: string;
  name: string;
}): Participant {
  return {
    participantId: data.participantId as ParticipantId,
    name: data.name,
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
  excludedDates: ReadonlySet<string>;
}): ExclusionSet {
  return {
    exclusionId: data.exclusionId as ExclusionSetId,
    excludedDates: data.excludedDates,
  };
}

export function makePreferenceSet(data: {
  preferenceId: string;
  preferredDates: ReadonlySet<string>;
}): PreferenceSet {
  return {
    preferenceId: data.preferenceId as PreferenceSetId,
    preferredDates: data.preferredDates,
  };
}

export function makeFitConstraintsCommitment(data: {
  commitmentId: string;
  dateWithinRange: string;
}): FitConstraintsCommitment {
  return {
    commitmentId: data.commitmentId as FitConstraintsCommitmentId,
    dateWithinRange: data.dateWithinRange,
  };
}

export function makeConflictHandlingCommitment(data: {
  commitmentId: string;
  conflictReported: string;
}): ConflictHandlingCommitment {
  return {
    commitmentId: data.commitmentId as ConflictHandlingCommitmentId,
    conflictReported: data.conflictReported,
  };
}

export function makeParticipantNotificationCommitment(data: {
  commitmentId: string;
  notificationSent: string;
}): ParticipantNotificationCommitment {
  return {
    commitmentId: data.commitmentId as ParticipantNotificationCommitmentId,
    notificationSent: data.notificationSent,
  };
}

export function makeUpdatedConstraintsCommitment(data: {
  commitmentId: string;
  constraintsUpdated: string;
}): UpdatedConstraintsCommitment {
  return {
    commitmentId: data.commitmentId as UpdatedConstraintsCommitmentId,
    constraintsUpdated: data.constraintsUpdated,
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

export function makeParticipantUpdateFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): ParticipantUpdateFlow {
  return {
    flowId: data.flowId as ParticipantUpdateFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for MeetingSchedulerSystem. Returns empty array when valid. */
export function validateMeetingSchedulerSystem(instance: MeetingSchedulerSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.dateRangeStart >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.dateRangeStart >= 0.0");
  }
  if (!((instance.dateRangeEnd >= 0))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.dateRangeEnd >= 0.0");
  }
  if (!((instance.dateRangeEnd >= instance.dateRangeStart))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: self.dateRangeEnd >= self.dateRangeStart");
  }
  if (!((((instance.proposedDate >= 0)) ? (((instance.proposedDate >= instance.dateRangeStart) && (instance.proposedDate <= instance.dateRangeEnd))) : (true)))) {
    violations.push("[MeetingSchedulerSystem] invariant violated: if self.proposedDate >= 0.0 then\n      self.proposedDate >= self.dateRangeStart and self.proposedDate <= self.dateRangeEnd\n    else\n      true\n    endif");
  }
  return violations;
}

/** Runtime invariant check for MeetingRequest. Returns empty array when valid. */
export function validateMeetingRequest(instance: MeetingRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[MeetingRequest] invariant violated: self.requestId <> null");
  }
  if (!((instance.initiatorId !== null))) {
    violations.push("[MeetingRequest] invariant violated: self.initiatorId <> null");
  }
  if (!((instance.rangeStart >= 0))) {
    violations.push("[MeetingRequest] invariant violated: self.rangeStart >= 0.0");
  }
  if (!((instance.rangeEnd >= 0))) {
    violations.push("[MeetingRequest] invariant violated: self.rangeEnd >= 0.0");
  }
  if (!((instance.rangeEnd >= instance.rangeStart))) {
    violations.push("[MeetingRequest] invariant violated: self.rangeEnd >= self.rangeStart");
  }
  if (!((((instance.status === "OPEN") || (instance.status === "CONFIRMED")) || (instance.status === "CANCELLED")))) {
    violations.push("[MeetingRequest] invariant violated: self.status = 'OPEN' or self.status = 'CONFIRMED' or self.status = 'CANCELLED'");
  }
  return violations;
}

/** Runtime invariant check for ParticipantConstraints. Returns empty array when valid. */
export function validateParticipantConstraints(instance: ParticipantConstraints): readonly string[] {
  const violations: string[] = [];
  if (!((instance.constraintId !== null))) {
    violations.push("[ParticipantConstraints] invariant violated: self.constraintId <> null");
  }
  if (!((instance.participantId !== null))) {
    violations.push("[ParticipantConstraints] invariant violated: self.participantId <> null");
  }
  if (!((instance.requestId !== null))) {
    violations.push("[ParticipantConstraints] invariant violated: self.requestId <> null");
  }
  return violations;
}

/** Runtime invariant check for MeetingInitiator. Returns empty array when valid. */
export function validateMeetingInitiator(instance: MeetingInitiator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.initiatorId !== null))) {
    violations.push("[MeetingInitiator] invariant violated: self.initiatorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[MeetingInitiator] invariant violated: self.name <> null");
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
  if (!((instance.name !== null))) {
    violations.push("[MeetingSchedulerVendor] invariant violated: self.name <> null");
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
  if (!((instance.preferenceId !== null))) {
    violations.push("[PreferenceSet] invariant violated: self.preferenceId <> null");
  }
  return violations;
}

/** Runtime invariant check for ParticipantConstraintsRespected. Returns empty array when valid. */
export function validateParticipantConstraintsRespected(instance: ParticipantConstraintsRespected): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[ParticipantConstraintsRespected] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for MeetingSchedulingFlow. Returns empty array when valid. */
export function validateMeetingSchedulingFlow(instance: MeetingSchedulingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[MeetingSchedulingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "initiator_request"))) {
    violations.push("[MeetingSchedulingFlow] invariant violated: self.triggeredBy = 'initiator_request'");
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
  if (!((instance.triggeredBy === "scheduling_conflict"))) {
    violations.push("[ConflictResolutionFlow] invariant violated: self.triggeredBy = 'scheduling_conflict'");
  }
  if (!((instance.outcome === "conflict_reported_to_initiator"))) {
    violations.push("[ConflictResolutionFlow] invariant violated: self.outcome = 'conflict_reported_to_initiator'");
  }
  return violations;
}

/** Runtime invariant check for ParticipantUpdateFlow. Returns empty array when valid. */
export function validateParticipantUpdateFlow(instance: ParticipantUpdateFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ParticipantUpdateFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "participant_constraint_update"))) {
    violations.push("[ParticipantUpdateFlow] invariant violated: self.triggeredBy = 'participant_constraint_update'");
  }
  if (!((instance.outcome === "constraints_accepted_while_open"))) {
    violations.push("[ParticipantUpdateFlow] invariant violated: self.outcome = 'constraints_accepted_while_open'");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for MeetingSchedulerSystem.requestMeeting. User supplies this. */
export type MeetingSchedulerSystemRequestMeetingImpl = (self: MeetingSchedulerSystem, rangeStart: number, rangeEnd: number) => { self: MeetingSchedulerSystem; modified: { dateRangeStart: unknown; dateRangeEnd: unknown; isOpen: unknown; conflictDetected: unknown; initiatorNotified: unknown; participantsNotified: unknown; constraintsUpdated: unknown; proposedDate: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting. */
export function wrapMeetingSchedulerSystemRequestMeeting(impl: MeetingSchedulerSystemRequestMeetingImpl): (self: MeetingSchedulerSystem, rangeStart: number, rangeEnd: number) => MeetingSchedulerSystem {
  return (self, rangeStart, rangeEnd) => {
    const preViolations: string[] = [];
    if (!(!(self.isOpen))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: not self.isOpen");
    }
    if (!((rangeStart >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: rangeEnd >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: rangeEnd >= rangeStart");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rangeStart, rangeEnd);
      const postViolations: string[] = [];
      if (!((__result.self.dateRangeStart === rangeStart))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRangeStart = rangeStart");
      }
      if (!((__result.self.dateRangeEnd === rangeEnd))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRangeEnd = rangeEnd");
      }
      if (!((__result.self.isOpen === true))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.isOpen = true");
      }
      if (!((__result.self.conflictDetected === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.conflictDetected = false");
      }
      if (!((__result.self.initiatorNotified === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.initiatorNotified = false");
      }
      if (!((__result.self.participantsNotified === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.participantsNotified = false");
      }
      if (!((__result.self.constraintsUpdated === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.constraintsUpdated = false");
      }
      if (!((__result.self.proposedDate === -(1)))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.proposedDate = -1.0");
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
export type MeetingSchedulerSystemRequestMeetingAsyncImpl = (self: MeetingSchedulerSystem, rangeStart: number, rangeEnd: number) => Promise<{ self: MeetingSchedulerSystem; modified: { dateRangeStart: unknown; dateRangeEnd: unknown; isOpen: unknown; conflictDetected: unknown; initiatorNotified: unknown; participantsNotified: unknown; constraintsUpdated: unknown; proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.requestMeeting (async). */
export function wrapMeetingSchedulerSystemRequestMeetingAsync(impl: MeetingSchedulerSystemRequestMeetingAsyncImpl): (self: MeetingSchedulerSystem, rangeStart: number, rangeEnd: number) => Promise<MeetingSchedulerSystem> {
  return async (self, rangeStart, rangeEnd) => {
    const preViolations: string[] = [];
    if (!(!(self.isOpen))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: not self.isOpen");
    }
    if (!((rangeStart >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: rangeStart >= 0.0");
    }
    if (!((rangeEnd >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: rangeEnd >= 0.0");
    }
    if (!((rangeEnd >= rangeStart))) {
      preViolations.push("[MeetingSchedulerSystem.requestMeeting] pre violated: rangeEnd >= rangeStart");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rangeStart, rangeEnd);
      const postViolations: string[] = [];
      if (!((__result.self.dateRangeStart === rangeStart))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRangeStart = rangeStart");
      }
      if (!((__result.self.dateRangeEnd === rangeEnd))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.dateRangeEnd = rangeEnd");
      }
      if (!((__result.self.isOpen === true))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.isOpen = true");
      }
      if (!((__result.self.conflictDetected === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.conflictDetected = false");
      }
      if (!((__result.self.initiatorNotified === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.initiatorNotified = false");
      }
      if (!((__result.self.participantsNotified === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.participantsNotified = false");
      }
      if (!((__result.self.constraintsUpdated === false))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.constraintsUpdated = false");
      }
      if (!((__result.self.proposedDate === -(1)))) {
        postViolations.push("[MeetingSchedulerSystem.requestMeeting] post violated: self.proposedDate = -1.0");
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
export type MeetingSchedulerSystemProposeDateImpl = (self: MeetingSchedulerSystem, exclusionSet: ReadonlySet<number>, preferenceSet: ReadonlySet<number>) => { self: MeetingSchedulerSystem; modified: { conflictDetected: unknown; proposedDate: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate. */
export function wrapMeetingSchedulerSystemProposeDate(impl: MeetingSchedulerSystemProposeDateImpl): (self: MeetingSchedulerSystem, exclusionSet: ReadonlySet<number>, preferenceSet: ReadonlySet<number>) => MeetingSchedulerSystem {
  return (self, exclusionSet, preferenceSet) => {
    const preViolations: string[] = [];
    if (!((self.isOpen === true))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.isOpen = true");
    }
    if (!(!(self.conflictDetected))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: not self.conflictDetected");
    }
    if (!((self.proposedDate < 0))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.proposedDate < 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, exclusionSet, preferenceSet);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if result >= 0.0 then
            result >= self.dateRangeStart and
            result <= self.dateRangeEnd and
            not exclusionSet->includes(result)
          else
            self.conflictDetected = true
          endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if result >= 0.0 then
            self.proposedDate = result
          else
            self.proposedDate = -1.0
          endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if preferenceSet->notEmpty() and result >= 0.0 then
            preferenceSet->includes(result)
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

/** Impl signature for MeetingSchedulerSystem.proposeDate (async). User supplies this. */
export type MeetingSchedulerSystemProposeDateAsyncImpl = (self: MeetingSchedulerSystem, exclusionSet: ReadonlySet<number>, preferenceSet: ReadonlySet<number>) => Promise<{ self: MeetingSchedulerSystem; modified: { conflictDetected: unknown; proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.proposeDate (async). */
export function wrapMeetingSchedulerSystemProposeDateAsync(impl: MeetingSchedulerSystemProposeDateAsyncImpl): (self: MeetingSchedulerSystem, exclusionSet: ReadonlySet<number>, preferenceSet: ReadonlySet<number>) => Promise<MeetingSchedulerSystem> {
  return async (self, exclusionSet, preferenceSet) => {
    const preViolations: string[] = [];
    if (!((self.isOpen === true))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.isOpen = true");
    }
    if (!(!(self.conflictDetected))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: not self.conflictDetected");
    }
    if (!((self.proposedDate < 0))) {
      preViolations.push("[MeetingSchedulerSystem.proposeDate] pre violated: self.proposedDate < 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, exclusionSet, preferenceSet);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if result >= 0.0 then
            result >= self.dateRangeStart and
            result <= self.dateRangeEnd and
            not exclusionSet->includes(result)
          else
            self.conflictDetected = true
          endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if result >= 0.0 then
            self.proposedDate = result
          else
            self.proposedDate = -1.0
          endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if preferenceSet->notEmpty() and result >= 0.0 then
            preferenceSet->includes(result)
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

/** Impl signature for MeetingSchedulerSystem.reportConflict. User supplies this. */
export type MeetingSchedulerSystemReportConflictImpl = (self: MeetingSchedulerSystem) => { self: MeetingSchedulerSystem; modified: { initiatorNotified: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict. */
export function wrapMeetingSchedulerSystemReportConflict(impl: MeetingSchedulerSystemReportConflictImpl): (self: MeetingSchedulerSystem) => MeetingSchedulerSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.conflictDetected === true))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.conflictDetected = true");
    }
    if (!(!(self.initiatorNotified))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: not self.initiatorNotified");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.initiatorNotified = true");
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
export type MeetingSchedulerSystemReportConflictAsyncImpl = (self: MeetingSchedulerSystem) => Promise<{ self: MeetingSchedulerSystem; modified: { initiatorNotified: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.reportConflict (async). */
export function wrapMeetingSchedulerSystemReportConflictAsync(impl: MeetingSchedulerSystemReportConflictAsyncImpl): (self: MeetingSchedulerSystem) => Promise<MeetingSchedulerSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.conflictDetected === true))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: self.conflictDetected = true");
    }
    if (!(!(self.initiatorNotified))) {
      preViolations.push("[MeetingSchedulerSystem.reportConflict] pre violated: not self.initiatorNotified");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.reportConflict] post violated: self.initiatorNotified = true");
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
export type MeetingSchedulerSystemConfirmMeetingImpl = (self: MeetingSchedulerSystem, location: string) => { self: MeetingSchedulerSystem; modified: { isOpen: unknown; participantsNotified: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.confirmMeeting. */
export function wrapMeetingSchedulerSystemConfirmMeeting(impl: MeetingSchedulerSystemConfirmMeetingImpl): (self: MeetingSchedulerSystem, location: string) => MeetingSchedulerSystem {
  return (self, location) => {
    const preViolations: string[] = [];
    if (!((self.isOpen === true))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.isOpen = true");
    }
    if (!((self.proposedDate >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.proposedDate >= 0.0");
    }
    if (!((location !== null))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: location <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, location);
      const postViolations: string[] = [];
      if (!((__result.self.isOpen === false))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.isOpen = false");
      }
      if (!((__result.self.participantsNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.participantsNotified = true");
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
export type MeetingSchedulerSystemConfirmMeetingAsyncImpl = (self: MeetingSchedulerSystem, location: string) => Promise<{ self: MeetingSchedulerSystem; modified: { isOpen: unknown; participantsNotified: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.confirmMeeting (async). */
export function wrapMeetingSchedulerSystemConfirmMeetingAsync(impl: MeetingSchedulerSystemConfirmMeetingAsyncImpl): (self: MeetingSchedulerSystem, location: string) => Promise<MeetingSchedulerSystem> {
  return async (self, location) => {
    const preViolations: string[] = [];
    if (!((self.isOpen === true))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.isOpen = true");
    }
    if (!((self.proposedDate >= 0))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: self.proposedDate >= 0.0");
    }
    if (!((location !== null))) {
      preViolations.push("[MeetingSchedulerSystem.confirmMeeting] pre violated: location <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, location);
      const postViolations: string[] = [];
      if (!((__result.self.isOpen === false))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.isOpen = false");
      }
      if (!((__result.self.participantsNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.confirmMeeting] post violated: self.participantsNotified = true");
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
export type MeetingSchedulerSystemUpdateConstraintsImpl = (self: MeetingSchedulerSystem, newExclusionSet: ReadonlySet<number>) => { self: MeetingSchedulerSystem; modified: { constraintsUpdated: unknown; proposedDate: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.updateConstraints. */
export function wrapMeetingSchedulerSystemUpdateConstraints(impl: MeetingSchedulerSystemUpdateConstraintsImpl): (self: MeetingSchedulerSystem, newExclusionSet: ReadonlySet<number>) => MeetingSchedulerSystem {
  return (self, newExclusionSet) => {
    const preViolations: string[] = [];
    if (!((self.isOpen === true))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: self.isOpen = true");
    }
    if (!(!(self.conflictDetected))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: not self.conflictDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newExclusionSet);
      const postViolations: string[] = [];
      if (!((__result.self.constraintsUpdated === true))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.constraintsUpdated = true");
      }
      if (!((__result.self.proposedDate === -(1)))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.proposedDate = -1.0");
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
export type MeetingSchedulerSystemUpdateConstraintsAsyncImpl = (self: MeetingSchedulerSystem, newExclusionSet: ReadonlySet<number>) => Promise<{ self: MeetingSchedulerSystem; modified: { constraintsUpdated: unknown; proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.updateConstraints (async). */
export function wrapMeetingSchedulerSystemUpdateConstraintsAsync(impl: MeetingSchedulerSystemUpdateConstraintsAsyncImpl): (self: MeetingSchedulerSystem, newExclusionSet: ReadonlySet<number>) => Promise<MeetingSchedulerSystem> {
  return async (self, newExclusionSet) => {
    const preViolations: string[] = [];
    if (!((self.isOpen === true))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: self.isOpen = true");
    }
    if (!(!(self.conflictDetected))) {
      preViolations.push("[MeetingSchedulerSystem.updateConstraints] pre violated: not self.conflictDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newExclusionSet);
      const postViolations: string[] = [];
      if (!((__result.self.constraintsUpdated === true))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.constraintsUpdated = true");
      }
      if (!((__result.self.proposedDate === -(1)))) {
        postViolations.push("[MeetingSchedulerSystem.updateConstraints] post violated: self.proposedDate = -1.0");
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

/** Impl signature for MeetingSchedulerSystem.notifyInitiator. User supplies this. */
export type MeetingSchedulerSystemNotifyInitiatorImpl = (self: MeetingSchedulerSystem, outcomeMessage: string) => { self: MeetingSchedulerSystem; modified: { initiatorNotified: unknown } };

/** Contract-checking wrapper for MeetingSchedulerSystem.notifyInitiator. */
export function wrapMeetingSchedulerSystemNotifyInitiator(impl: MeetingSchedulerSystemNotifyInitiatorImpl): (self: MeetingSchedulerSystem, outcomeMessage: string) => MeetingSchedulerSystem {
  return (self, outcomeMessage) => {
    const preViolations: string[] = [];
    if (!(!(self.initiatorNotified))) {
      preViolations.push("[MeetingSchedulerSystem.notifyInitiator] pre violated: not self.initiatorNotified");
    }
    if (!(((self.conflictDetected === true) || (self.participantsNotified === true)))) {
      preViolations.push("[MeetingSchedulerSystem.notifyInitiator] pre violated: (self.conflictDetected = true) or (self.participantsNotified = true)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, outcomeMessage);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.notifyInitiator] post violated: self.initiatorNotified = true");
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

/** Impl signature for MeetingSchedulerSystem.notifyInitiator (async). User supplies this. */
export type MeetingSchedulerSystemNotifyInitiatorAsyncImpl = (self: MeetingSchedulerSystem, outcomeMessage: string) => Promise<{ self: MeetingSchedulerSystem; modified: { initiatorNotified: unknown } }>;

/** Contract-checking wrapper for MeetingSchedulerSystem.notifyInitiator (async). */
export function wrapMeetingSchedulerSystemNotifyInitiatorAsync(impl: MeetingSchedulerSystemNotifyInitiatorAsyncImpl): (self: MeetingSchedulerSystem, outcomeMessage: string) => Promise<MeetingSchedulerSystem> {
  return async (self, outcomeMessage) => {
    const preViolations: string[] = [];
    if (!(!(self.initiatorNotified))) {
      preViolations.push("[MeetingSchedulerSystem.notifyInitiator] pre violated: not self.initiatorNotified");
    }
    if (!(((self.conflictDetected === true) || (self.participantsNotified === true)))) {
      preViolations.push("[MeetingSchedulerSystem.notifyInitiator] pre violated: (self.conflictDetected = true) or (self.participantsNotified = true)");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, outcomeMessage);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorNotified === true))) {
        postViolations.push("[MeetingSchedulerSystem.notifyInitiator] post violated: self.initiatorNotified = true");
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

/** Impl signature for MeetingRequest.create. User supplies this. */
export type MeetingRequestCreateImpl = (self: MeetingRequest, initId: string, start: number, end: number) => { self: MeetingRequest; modified: { initiatorId: unknown; rangeStart: unknown; rangeEnd: unknown; status: unknown } };

/** Contract-checking wrapper for MeetingRequest.create. */
export function wrapMeetingRequestCreate(impl: MeetingRequestCreateImpl): (self: MeetingRequest, initId: string, start: number, end: number) => MeetingRequest {
  return (self, initId, start, end) => {
    const preViolations: string[] = [];
    if (!((initId !== null))) {
      preViolations.push("[MeetingRequest.create] pre violated: initId <> null");
    }
    if (!((start >= 0))) {
      preViolations.push("[MeetingRequest.create] pre violated: start >= 0.0");
    }
    if (!((end >= 0))) {
      preViolations.push("[MeetingRequest.create] pre violated: end >= 0.0");
    }
    if (!((end >= start))) {
      preViolations.push("[MeetingRequest.create] pre violated: end >= start");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, initId, start, end);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorId === initId))) {
        postViolations.push("[MeetingRequest.create] post violated: self.initiatorId = initId");
      }
      if (!((__result.self.rangeStart === start))) {
        postViolations.push("[MeetingRequest.create] post violated: self.rangeStart = start");
      }
      if (!((__result.self.rangeEnd === end))) {
        postViolations.push("[MeetingRequest.create] post violated: self.rangeEnd = end");
      }
      if (!((__result.self.status === "OPEN"))) {
        postViolations.push("[MeetingRequest.create] post violated: self.status = 'OPEN'");
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

/** Impl signature for MeetingRequest.create (async). User supplies this. */
export type MeetingRequestCreateAsyncImpl = (self: MeetingRequest, initId: string, start: number, end: number) => Promise<{ self: MeetingRequest; modified: { initiatorId: unknown; rangeStart: unknown; rangeEnd: unknown; status: unknown } }>;

/** Contract-checking wrapper for MeetingRequest.create (async). */
export function wrapMeetingRequestCreateAsync(impl: MeetingRequestCreateAsyncImpl): (self: MeetingRequest, initId: string, start: number, end: number) => Promise<MeetingRequest> {
  return async (self, initId, start, end) => {
    const preViolations: string[] = [];
    if (!((initId !== null))) {
      preViolations.push("[MeetingRequest.create] pre violated: initId <> null");
    }
    if (!((start >= 0))) {
      preViolations.push("[MeetingRequest.create] pre violated: start >= 0.0");
    }
    if (!((end >= 0))) {
      preViolations.push("[MeetingRequest.create] pre violated: end >= 0.0");
    }
    if (!((end >= start))) {
      preViolations.push("[MeetingRequest.create] pre violated: end >= start");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, initId, start, end);
      const postViolations: string[] = [];
      if (!((__result.self.initiatorId === initId))) {
        postViolations.push("[MeetingRequest.create] post violated: self.initiatorId = initId");
      }
      if (!((__result.self.rangeStart === start))) {
        postViolations.push("[MeetingRequest.create] post violated: self.rangeStart = start");
      }
      if (!((__result.self.rangeEnd === end))) {
        postViolations.push("[MeetingRequest.create] post violated: self.rangeEnd = end");
      }
      if (!((__result.self.status === "OPEN"))) {
        postViolations.push("[MeetingRequest.create] post violated: self.status = 'OPEN'");
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

/** Impl signature for MeetingRequest.confirm. User supplies this. */
export type MeetingRequestConfirmImpl = (self: MeetingRequest) => { self: MeetingRequest; modified: { status: unknown } };

/** Contract-checking wrapper for MeetingRequest.confirm. */
export function wrapMeetingRequestConfirm(impl: MeetingRequestConfirmImpl): (self: MeetingRequest) => MeetingRequest {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.confirm] pre violated: self.status = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingRequest.confirm] post violated: self.status = 'CONFIRMED'");
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

/** Impl signature for MeetingRequest.confirm (async). User supplies this. */
export type MeetingRequestConfirmAsyncImpl = (self: MeetingRequest) => Promise<{ self: MeetingRequest; modified: { status: unknown } }>;

/** Contract-checking wrapper for MeetingRequest.confirm (async). */
export function wrapMeetingRequestConfirmAsync(impl: MeetingRequestConfirmAsyncImpl): (self: MeetingRequest) => Promise<MeetingRequest> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.confirm] pre violated: self.status = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingRequest.confirm] post violated: self.status = 'CONFIRMED'");
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

/** Impl signature for MeetingRequest.cancel. User supplies this. */
export type MeetingRequestCancelImpl = (self: MeetingRequest) => { self: MeetingRequest; modified: { status: unknown } };

/** Contract-checking wrapper for MeetingRequest.cancel. */
export function wrapMeetingRequestCancel(impl: MeetingRequestCancelImpl): (self: MeetingRequest) => MeetingRequest {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.cancel] pre violated: self.status = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CANCELLED"))) {
        postViolations.push("[MeetingRequest.cancel] post violated: self.status = 'CANCELLED'");
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

/** Impl signature for MeetingRequest.cancel (async). User supplies this. */
export type MeetingRequestCancelAsyncImpl = (self: MeetingRequest) => Promise<{ self: MeetingRequest; modified: { status: unknown } }>;

/** Contract-checking wrapper for MeetingRequest.cancel (async). */
export function wrapMeetingRequestCancelAsync(impl: MeetingRequestCancelAsyncImpl): (self: MeetingRequest) => Promise<MeetingRequest> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.cancel] pre violated: self.status = 'OPEN'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CANCELLED"))) {
        postViolations.push("[MeetingRequest.cancel] post violated: self.status = 'CANCELLED'");
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

/** Lifecycle registry for FitConstraintsCommitment commitments. */
export class FitConstraintsCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<FitConstraintsCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a FitConstraintsCommitment — the typed wrapper guarantees that since
    // `register` only accepts FitConstraintsCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: FitConstraintsCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: FitConstraintsCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: FitConstraintsCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: FitConstraintsCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<FitConstraintsCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<FitConstraintsCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for ConflictHandlingCommitment commitments. */
export class ConflictHandlingCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ConflictHandlingCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ConflictHandlingCommitment — the typed wrapper guarantees that since
    // `register` only accepts ConflictHandlingCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ConflictHandlingCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ConflictHandlingCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ConflictHandlingCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ConflictHandlingCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ConflictHandlingCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ConflictHandlingCommitment>[];
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

/** Lifecycle registry for UpdatedConstraintsCommitment commitments. */
export class UpdatedConstraintsCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<UpdatedConstraintsCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a UpdatedConstraintsCommitment — the typed wrapper guarantees that since
    // `register` only accepts UpdatedConstraintsCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: UpdatedConstraintsCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: UpdatedConstraintsCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: UpdatedConstraintsCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: UpdatedConstraintsCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<UpdatedConstraintsCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<UpdatedConstraintsCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

