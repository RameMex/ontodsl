// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for Person. Runtime: string. Compile-time: branded. */
export type PersonId = string & { readonly __brand: "PersonId" };
/** Identity type for Location. Runtime: string. Compile-time: branded. */
export type LocationId = string & { readonly __brand: "LocationId" };
/** Identity type for MeetingRequest. Runtime: string. Compile-time: branded. */
export type MeetingRequestId = string & { readonly __brand: "MeetingRequestId" };
/** Identity type for ScheduledMeeting. Runtime: string. Compile-time: branded. */
export type ScheduledMeetingId = string & { readonly __brand: "ScheduledMeetingId" };
/** Identity type for ConstraintSet. Runtime: string. Compile-time: branded. */
export type ConstraintSetId = string & { readonly __brand: "ConstraintSetId" };
/** Identity type for Participation. Runtime: string. Compile-time: branded. */
export type ParticipationId = string & { readonly __brand: "ParticipationId" };
/** Identity type for SchedulingAgent. Runtime: string. Compile-time: branded. */
export type SchedulingAgentId = string & { readonly __brand: "SchedulingAgentId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface Person {
  readonly personId: PersonId;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Kind>> */
export interface Location {
  readonly locationId: LocationId;
  readonly name: string;
  readonly address: string;
}

/** @stereotype <<Kind>> */
export interface MeetingRequest {
  readonly requestId: MeetingRequestId;
  readonly topic: string;
  readonly rangeStart: string;
  readonly rangeEnd: string;
  readonly status: string;
  readonly proposedDate: string;
  readonly conflictReason: string;
}

/** @stereotype <<Kind>> */
export interface ScheduledMeeting {
  readonly meetingId: ScheduledMeetingId;
  readonly confirmedDate: string;
  readonly location: Location;
  readonly topic: string;
  readonly notificationSent: boolean;
}

/** @stereotype <<Role>> */
export interface Initiator {
  readonly personId: string;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Role>> */
export interface Invitee {
  readonly personId: string;
  readonly name: string;
  readonly email: string;
}

/** @stereotype <<Role>> */
export interface Attendee {
  readonly personId: string;
  readonly name: string;
}

/** @stereotype <<Relator>> */
export interface ConstraintSet {
  readonly constraintId: ConstraintSetId;
  readonly person: Person;
  readonly request: MeetingRequest;
  readonly exclusionDates: ReadonlySet<string>;
  readonly preferenceDates: ReadonlySet<string>;
  readonly isInitiator: boolean;
}

/** @stereotype <<Role>> */
export interface ConfirmedMeeting {
  readonly meetingId: string;
  readonly confirmedDate: string;
}

/** @stereotype <<Relator>> */
export interface Participation {
  readonly participationId: ParticipationId;
  readonly attendee: Person;
  readonly meeting: ScheduledMeeting;
  readonly notified: boolean;
}

/** @stereotype <<Agent>> */
export interface SchedulingAgent {
  readonly agentId: SchedulingAgentId;
  readonly name: string;
}


// ─── Factory functions ───

export function makePerson(data: {
  personId: string;
  name: string;
  email: string;
}): Person {
  return {
    personId: data.personId as PersonId,
    name: data.name,
    email: data.email,
  };
}

export function makeLocation(data: {
  locationId: string;
  name: string;
  address: string;
}): Location {
  return {
    locationId: data.locationId as LocationId,
    name: data.name,
    address: data.address,
  };
}

export function makeMeetingRequest(data: {
  requestId: string;
  topic: string;
  rangeStart: string;
  rangeEnd: string;
  status: string;
  proposedDate: string;
  conflictReason: string;
}): MeetingRequest {
  return {
    requestId: data.requestId as MeetingRequestId,
    topic: data.topic,
    rangeStart: data.rangeStart,
    rangeEnd: data.rangeEnd,
    status: data.status,
    proposedDate: data.proposedDate,
    conflictReason: data.conflictReason,
  };
}

export function makeScheduledMeeting(data: {
  meetingId: string;
  confirmedDate: string;
  location: Location;
  topic: string;
  notificationSent: boolean;
}): ScheduledMeeting {
  return {
    meetingId: data.meetingId as ScheduledMeetingId,
    confirmedDate: data.confirmedDate,
    location: data.location,
    topic: data.topic,
    notificationSent: data.notificationSent,
  };
}

export function makeConstraintSet(data: {
  constraintId: string;
  person: Person;
  request: MeetingRequest;
  exclusionDates: ReadonlySet<string>;
  preferenceDates: ReadonlySet<string>;
  isInitiator: boolean;
}): ConstraintSet {
  return {
    constraintId: data.constraintId as ConstraintSetId,
    person: data.person,
    request: data.request,
    exclusionDates: data.exclusionDates,
    preferenceDates: data.preferenceDates,
    isInitiator: data.isInitiator,
  };
}

export function makeParticipation(data: {
  participationId: string;
  attendee: Person;
  meeting: ScheduledMeeting;
  notified: boolean;
}): Participation {
  return {
    participationId: data.participationId as ParticipationId,
    attendee: data.attendee,
    meeting: data.meeting,
    notified: data.notified,
  };
}

export function makeSchedulingAgent(data: {
  agentId: string;
  name: string;
}): SchedulingAgent {
  return {
    agentId: data.agentId as SchedulingAgentId,
    name: data.name,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Person. Returns empty array when valid. */
export function validatePerson(instance: Person): readonly string[] {
  const violations: string[] = [];
  if (!((instance.personId !== null))) {
    violations.push("[Person] invariant violated: self.personId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Person] invariant violated: self.name <> null");
  }
  if (!((instance.email !== null))) {
    violations.push("[Person] invariant violated: self.email <> null");
  }
  return violations;
}

/** Runtime invariant check for Location. Returns empty array when valid. */
export function validateLocation(instance: Location): readonly string[] {
  const violations: string[] = [];
  if (!((instance.locationId !== null))) {
    violations.push("[Location] invariant violated: self.locationId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Location] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for MeetingRequest. Returns empty array when valid. */
export function validateMeetingRequest(instance: MeetingRequest): readonly string[] {
  const violations: string[] = [];
  if (!((instance.requestId !== null))) {
    violations.push("[MeetingRequest] invariant violated: self.requestId <> null");
  }
  if (!((instance.topic !== null))) {
    violations.push("[MeetingRequest] invariant violated: self.topic <> null");
  }
  if (!((instance.rangeStart !== null))) {
    violations.push("[MeetingRequest] invariant violated: self.rangeStart <> null");
  }
  if (!((instance.rangeEnd !== null))) {
    violations.push("[MeetingRequest] invariant violated: self.rangeEnd <> null");
  }
  if (!((instance.status !== null))) {
    violations.push("[MeetingRequest] invariant violated: self.status <> null");
  }
  return violations;
}

/** Runtime invariant check for ScheduledMeeting. Returns empty array when valid. */
export function validateScheduledMeeting(instance: ScheduledMeeting): readonly string[] {
  const violations: string[] = [];
  if (!((instance.meetingId !== null))) {
    violations.push("[ScheduledMeeting] invariant violated: self.meetingId <> null");
  }
  if (!((instance.confirmedDate !== null))) {
    violations.push("[ScheduledMeeting] invariant violated: self.confirmedDate <> null");
  }
  if (!((instance.location !== null))) {
    violations.push("[ScheduledMeeting] invariant violated: self.location <> null");
  }
  if (!((instance.topic !== null))) {
    violations.push("[ScheduledMeeting] invariant violated: self.topic <> null");
  }
  return violations;
}

/** Runtime invariant check for ConstraintSet. Returns empty array when valid. */
export function validateConstraintSet(instance: ConstraintSet): readonly string[] {
  const violations: string[] = [];
  if (!((instance.constraintId !== null))) {
    violations.push("[ConstraintSet] invariant violated: self.constraintId <> null");
  }
  if (!((instance.person !== null))) {
    violations.push("[ConstraintSet] invariant violated: self.person <> null");
  }
  if (!((instance.request !== null))) {
    violations.push("[ConstraintSet] invariant violated: self.request <> null");
  }
  return violations;
}

/** Runtime invariant check for Participation. Returns empty array when valid. */
export function validateParticipation(instance: Participation): readonly string[] {
  const violations: string[] = [];
  if (!((instance.participationId !== null))) {
    violations.push("[Participation] invariant violated: self.participationId <> null");
  }
  if (!((instance.attendee !== null))) {
    violations.push("[Participation] invariant violated: self.attendee <> null");
  }
  if (!((instance.meeting !== null))) {
    violations.push("[Participation] invariant violated: self.meeting <> null");
  }
  return violations;
}

/** Runtime invariant check for SchedulingAgent. Returns empty array when valid. */
export function validateSchedulingAgent(instance: SchedulingAgent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.agentId !== null))) {
    violations.push("[SchedulingAgent] invariant violated: self.agentId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[SchedulingAgent] invariant violated: self.name <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for MeetingRequest.open. User supplies this. */
export type MeetingRequestOpenImpl = (self: MeetingRequest, topic: string, rangeStart: string, rangeEnd: string) => { self: MeetingRequest; modified: { topic: unknown; rangeStart: unknown; rangeEnd: unknown; status: unknown } };

/** Contract-checking wrapper for MeetingRequest.open. */
export function wrapMeetingRequestOpen(impl: MeetingRequestOpenImpl): (self: MeetingRequest, topic: string, rangeStart: string, rangeEnd: string) => MeetingRequest {
  return (self, topic, rangeStart, rangeEnd) => {
    const preViolations: string[] = [];
    if (!((topic !== null))) {
      preViolations.push("[MeetingRequest.open] pre violated: topic <> null");
    }
    if (!((rangeStart !== null))) {
      preViolations.push("[MeetingRequest.open] pre violated: rangeStart <> null");
    }
    if (!((rangeEnd !== null))) {
      preViolations.push("[MeetingRequest.open] pre violated: rangeEnd <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, topic, rangeStart, rangeEnd);
      const postViolations: string[] = [];
      if (!((__result.self.topic === topic))) {
        postViolations.push("[MeetingRequest.open] post violated: self.topic = topic");
      }
      if (!((__result.self.rangeStart === rangeStart))) {
        postViolations.push("[MeetingRequest.open] post violated: self.rangeStart = rangeStart");
      }
      if (!((__result.self.rangeEnd === rangeEnd))) {
        postViolations.push("[MeetingRequest.open] post violated: self.rangeEnd = rangeEnd");
      }
      if (!((__result.self.status === "OPEN"))) {
        postViolations.push("[MeetingRequest.open] post violated: self.status = 'OPEN'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for MeetingRequest.open (async). User supplies this. */
export type MeetingRequestOpenAsyncImpl = (self: MeetingRequest, topic: string, rangeStart: string, rangeEnd: string) => Promise<{ self: MeetingRequest; modified: { topic: unknown; rangeStart: unknown; rangeEnd: unknown; status: unknown } }>;

/** Contract-checking wrapper for MeetingRequest.open (async). */
export function wrapMeetingRequestOpenAsync(impl: MeetingRequestOpenAsyncImpl): (self: MeetingRequest, topic: string, rangeStart: string, rangeEnd: string) => Promise<MeetingRequest> {
  return async (self, topic, rangeStart, rangeEnd) => {
    const preViolations: string[] = [];
    if (!((topic !== null))) {
      preViolations.push("[MeetingRequest.open] pre violated: topic <> null");
    }
    if (!((rangeStart !== null))) {
      preViolations.push("[MeetingRequest.open] pre violated: rangeStart <> null");
    }
    if (!((rangeEnd !== null))) {
      preViolations.push("[MeetingRequest.open] pre violated: rangeEnd <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, topic, rangeStart, rangeEnd);
      const postViolations: string[] = [];
      if (!((__result.self.topic === topic))) {
        postViolations.push("[MeetingRequest.open] post violated: self.topic = topic");
      }
      if (!((__result.self.rangeStart === rangeStart))) {
        postViolations.push("[MeetingRequest.open] post violated: self.rangeStart = rangeStart");
      }
      if (!((__result.self.rangeEnd === rangeEnd))) {
        postViolations.push("[MeetingRequest.open] post violated: self.rangeEnd = rangeEnd");
      }
      if (!((__result.self.status === "OPEN"))) {
        postViolations.push("[MeetingRequest.open] post violated: self.status = 'OPEN'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for MeetingRequest.proposeDate. User supplies this. */
export type MeetingRequestProposeDateImpl = (self: MeetingRequest, date: string) => { self: MeetingRequest; modified: { proposedDate: unknown } };

/** Contract-checking wrapper for MeetingRequest.proposeDate. */
export function wrapMeetingRequestProposeDate(impl: MeetingRequestProposeDateImpl): (self: MeetingRequest, date: string) => MeetingRequest {
  return (self, date) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.proposeDate] pre violated: self.status = 'OPEN'");
    }
    if (!((date !== null))) {
      preViolations.push("[MeetingRequest.proposeDate] pre violated: date <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, date);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === date))) {
        postViolations.push("[MeetingRequest.proposeDate] post violated: self.proposedDate = date");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for MeetingRequest.proposeDate (async). User supplies this. */
export type MeetingRequestProposeDateAsyncImpl = (self: MeetingRequest, date: string) => Promise<{ self: MeetingRequest; modified: { proposedDate: unknown } }>;

/** Contract-checking wrapper for MeetingRequest.proposeDate (async). */
export function wrapMeetingRequestProposeDateAsync(impl: MeetingRequestProposeDateAsyncImpl): (self: MeetingRequest, date: string) => Promise<MeetingRequest> {
  return async (self, date) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.proposeDate] pre violated: self.status = 'OPEN'");
    }
    if (!((date !== null))) {
      preViolations.push("[MeetingRequest.proposeDate] pre violated: date <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, date);
      const postViolations: string[] = [];
      if (!((__result.self.proposedDate === date))) {
        postViolations.push("[MeetingRequest.proposeDate] post violated: self.proposedDate = date");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for MeetingRequest.confirmDate. User supplies this. */
export type MeetingRequestConfirmDateImpl = (self: MeetingRequest) => { self: MeetingRequest; modified: { status: unknown } };

/** Contract-checking wrapper for MeetingRequest.confirmDate. */
export function wrapMeetingRequestConfirmDate(impl: MeetingRequestConfirmDateImpl): (self: MeetingRequest) => MeetingRequest {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.confirmDate] pre violated: self.status = 'OPEN'");
    }
    if (!((self.proposedDate !== null))) {
      preViolations.push("[MeetingRequest.confirmDate] pre violated: self.proposedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingRequest.confirmDate] post violated: self.status = 'CONFIRMED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for MeetingRequest.confirmDate (async). User supplies this. */
export type MeetingRequestConfirmDateAsyncImpl = (self: MeetingRequest) => Promise<{ self: MeetingRequest; modified: { status: unknown } }>;

/** Contract-checking wrapper for MeetingRequest.confirmDate (async). */
export function wrapMeetingRequestConfirmDateAsync(impl: MeetingRequestConfirmDateAsyncImpl): (self: MeetingRequest) => Promise<MeetingRequest> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.confirmDate] pre violated: self.status = 'OPEN'");
    }
    if (!((self.proposedDate !== null))) {
      preViolations.push("[MeetingRequest.confirmDate] pre violated: self.proposedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFIRMED"))) {
        postViolations.push("[MeetingRequest.confirmDate] post violated: self.status = 'CONFIRMED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for MeetingRequest.reportConflict. User supplies this. */
export type MeetingRequestReportConflictImpl = (self: MeetingRequest, reason: string) => { self: MeetingRequest; modified: { status: unknown; conflictReason: unknown } };

/** Contract-checking wrapper for MeetingRequest.reportConflict. */
export function wrapMeetingRequestReportConflict(impl: MeetingRequestReportConflictImpl): (self: MeetingRequest, reason: string) => MeetingRequest {
  return (self, reason) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.reportConflict] pre violated: self.status = 'OPEN'");
    }
    if (!((reason !== null))) {
      preViolations.push("[MeetingRequest.reportConflict] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reason);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFLICT"))) {
        postViolations.push("[MeetingRequest.reportConflict] post violated: self.status = 'CONFLICT'");
      }
      if (!((__result.self.conflictReason === reason))) {
        postViolations.push("[MeetingRequest.reportConflict] post violated: self.conflictReason = reason");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for MeetingRequest.reportConflict (async). User supplies this. */
export type MeetingRequestReportConflictAsyncImpl = (self: MeetingRequest, reason: string) => Promise<{ self: MeetingRequest; modified: { status: unknown; conflictReason: unknown } }>;

/** Contract-checking wrapper for MeetingRequest.reportConflict (async). */
export function wrapMeetingRequestReportConflictAsync(impl: MeetingRequestReportConflictAsyncImpl): (self: MeetingRequest, reason: string) => Promise<MeetingRequest> {
  return async (self, reason) => {
    const preViolations: string[] = [];
    if (!((self.status === "OPEN"))) {
      preViolations.push("[MeetingRequest.reportConflict] pre violated: self.status = 'OPEN'");
    }
    if (!((reason !== null))) {
      preViolations.push("[MeetingRequest.reportConflict] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reason);
      const postViolations: string[] = [];
      if (!((__result.self.status === "CONFLICT"))) {
        postViolations.push("[MeetingRequest.reportConflict] post violated: self.status = 'CONFLICT'");
      }
      if (!((__result.self.conflictReason === reason))) {
        postViolations.push("[MeetingRequest.reportConflict] post violated: self.conflictReason = reason");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ScheduledMeeting.notifyParticipants. User supplies this. */
export type ScheduledMeetingNotifyParticipantsImpl = (self: ScheduledMeeting) => { self: ScheduledMeeting; modified: { notificationSent: unknown } };

/** Contract-checking wrapper for ScheduledMeeting.notifyParticipants. */
export function wrapScheduledMeetingNotifyParticipants(impl: ScheduledMeetingNotifyParticipantsImpl): (self: ScheduledMeeting) => ScheduledMeeting {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.notificationSent === false))) {
      preViolations.push("[ScheduledMeeting.notifyParticipants] pre violated: self.notificationSent = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === true))) {
        postViolations.push("[ScheduledMeeting.notifyParticipants] post violated: self.notificationSent = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ScheduledMeeting.notifyParticipants (async). User supplies this. */
export type ScheduledMeetingNotifyParticipantsAsyncImpl = (self: ScheduledMeeting) => Promise<{ self: ScheduledMeeting; modified: { notificationSent: unknown } }>;

/** Contract-checking wrapper for ScheduledMeeting.notifyParticipants (async). */
export function wrapScheduledMeetingNotifyParticipantsAsync(impl: ScheduledMeetingNotifyParticipantsAsyncImpl): (self: ScheduledMeeting) => Promise<ScheduledMeeting> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.notificationSent === false))) {
      preViolations.push("[ScheduledMeeting.notifyParticipants] pre violated: self.notificationSent = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.notificationSent === true))) {
        postViolations.push("[ScheduledMeeting.notifyParticipants] post violated: self.notificationSent = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ConstraintSet.updateExclusions. User supplies this. */
export type ConstraintSetUpdateExclusionsImpl = (self: ConstraintSet, newExclusions: ReadonlySet<string>) => { self: ConstraintSet; modified: { exclusionDates: unknown } };

/** Contract-checking wrapper for ConstraintSet.updateExclusions. */
export function wrapConstraintSetUpdateExclusions(impl: ConstraintSetUpdateExclusionsImpl): (self: ConstraintSet, newExclusions: ReadonlySet<string>) => ConstraintSet {
  return (self, newExclusions) => {
    const preViolations: string[] = [];
    if (!((self.request?.status === "OPEN"))) {
      preViolations.push("[ConstraintSet.updateExclusions] pre violated: self.request.status = 'OPEN'");
    }
    if (!((newExclusions !== null))) {
      preViolations.push("[ConstraintSet.updateExclusions] pre violated: newExclusions <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newExclusions);
      const postViolations: string[] = [];
      if (!((__result.self.exclusionDates === newExclusions))) {
        postViolations.push("[ConstraintSet.updateExclusions] post violated: self.exclusionDates = newExclusions");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ConstraintSet.updateExclusions (async). User supplies this. */
export type ConstraintSetUpdateExclusionsAsyncImpl = (self: ConstraintSet, newExclusions: ReadonlySet<string>) => Promise<{ self: ConstraintSet; modified: { exclusionDates: unknown } }>;

/** Contract-checking wrapper for ConstraintSet.updateExclusions (async). */
export function wrapConstraintSetUpdateExclusionsAsync(impl: ConstraintSetUpdateExclusionsAsyncImpl): (self: ConstraintSet, newExclusions: ReadonlySet<string>) => Promise<ConstraintSet> {
  return async (self, newExclusions) => {
    const preViolations: string[] = [];
    if (!((self.request?.status === "OPEN"))) {
      preViolations.push("[ConstraintSet.updateExclusions] pre violated: self.request.status = 'OPEN'");
    }
    if (!((newExclusions !== null))) {
      preViolations.push("[ConstraintSet.updateExclusions] pre violated: newExclusions <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newExclusions);
      const postViolations: string[] = [];
      if (!((__result.self.exclusionDates === newExclusions))) {
        postViolations.push("[ConstraintSet.updateExclusions] post violated: self.exclusionDates = newExclusions");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ConstraintSet.updatePreferences. User supplies this. */
export type ConstraintSetUpdatePreferencesImpl = (self: ConstraintSet, newPreferences: ReadonlySet<string>) => { self: ConstraintSet; modified: { preferenceDates: unknown } };

/** Contract-checking wrapper for ConstraintSet.updatePreferences. */
export function wrapConstraintSetUpdatePreferences(impl: ConstraintSetUpdatePreferencesImpl): (self: ConstraintSet, newPreferences: ReadonlySet<string>) => ConstraintSet {
  return (self, newPreferences) => {
    const preViolations: string[] = [];
    if (!((self.request?.status === "OPEN"))) {
      preViolations.push("[ConstraintSet.updatePreferences] pre violated: self.request.status = 'OPEN'");
    }
    if (!((newPreferences !== null))) {
      preViolations.push("[ConstraintSet.updatePreferences] pre violated: newPreferences <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newPreferences);
      const postViolations: string[] = [];
      if (!((__result.self.preferenceDates === newPreferences))) {
        postViolations.push("[ConstraintSet.updatePreferences] post violated: self.preferenceDates = newPreferences");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ConstraintSet.updatePreferences (async). User supplies this. */
export type ConstraintSetUpdatePreferencesAsyncImpl = (self: ConstraintSet, newPreferences: ReadonlySet<string>) => Promise<{ self: ConstraintSet; modified: { preferenceDates: unknown } }>;

/** Contract-checking wrapper for ConstraintSet.updatePreferences (async). */
export function wrapConstraintSetUpdatePreferencesAsync(impl: ConstraintSetUpdatePreferencesAsyncImpl): (self: ConstraintSet, newPreferences: ReadonlySet<string>) => Promise<ConstraintSet> {
  return async (self, newPreferences) => {
    const preViolations: string[] = [];
    if (!((self.request?.status === "OPEN"))) {
      preViolations.push("[ConstraintSet.updatePreferences] pre violated: self.request.status = 'OPEN'");
    }
    if (!((newPreferences !== null))) {
      preViolations.push("[ConstraintSet.updatePreferences] pre violated: newPreferences <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newPreferences);
      const postViolations: string[] = [];
      if (!((__result.self.preferenceDates === newPreferences))) {
        postViolations.push("[ConstraintSet.updatePreferences] post violated: self.preferenceDates = newPreferences");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Participation.markNotified. User supplies this. */
export type ParticipationMarkNotifiedImpl = (self: Participation) => { self: Participation; modified: { notified: unknown } };

/** Contract-checking wrapper for Participation.markNotified. */
export function wrapParticipationMarkNotified(impl: ParticipationMarkNotifiedImpl): (self: Participation) => Participation {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.notified === false))) {
      preViolations.push("[Participation.markNotified] pre violated: self.notified = false");
    }
    if (!((self.meeting?.confirmedDate !== null))) {
      preViolations.push("[Participation.markNotified] pre violated: self.meeting.confirmedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.notified === true))) {
        postViolations.push("[Participation.markNotified] post violated: self.notified = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Participation.markNotified (async). User supplies this. */
export type ParticipationMarkNotifiedAsyncImpl = (self: Participation) => Promise<{ self: Participation; modified: { notified: unknown } }>;

/** Contract-checking wrapper for Participation.markNotified (async). */
export function wrapParticipationMarkNotifiedAsync(impl: ParticipationMarkNotifiedAsyncImpl): (self: Participation) => Promise<Participation> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.notified === false))) {
      preViolations.push("[Participation.markNotified] pre violated: self.notified = false");
    }
    if (!((self.meeting?.confirmedDate !== null))) {
      preViolations.push("[Participation.markNotified] pre violated: self.meeting.confirmedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.notified === true))) {
        postViolations.push("[Participation.markNotified] post violated: self.notified = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SchedulingAgent.scheduleDate. User supplies this. */
export type SchedulingAgentScheduleDateImpl = (self: SchedulingAgent, request: MeetingRequest, candidate: string, allConstraints: ReadonlySet<ConstraintSet>) => { self: SchedulingAgent; modified: {} };

/** Contract-checking wrapper for SchedulingAgent.scheduleDate. */
export function wrapSchedulingAgentScheduleDate(impl: SchedulingAgentScheduleDateImpl): (self: SchedulingAgent, request: MeetingRequest, candidate: string, allConstraints: ReadonlySet<ConstraintSet>) => SchedulingAgent {
  return (self, request, candidate, allConstraints) => {
    const preViolations: string[] = [];
    if (!((request.status === "OPEN"))) {
      preViolations.push("[SchedulingAgent.scheduleDate] pre violated: request.status = 'OPEN'");
    }
    if (!((candidate !== null))) {
      preViolations.push("[SchedulingAgent.scheduleDate] pre violated: candidate <> null");
    }
    if (!(Array.from(allConstraints).every((__x) => (!((__x.exclusionDates).has(candidate)))))) {
      preViolations.push("[SchedulingAgent.scheduleDate] pre violated: allConstraints->forAll(cs | not cs.exclusionDates->includes(candidate))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, request, candidate, allConstraints);
      const postViolations: string[] = [];
      if (!((request.proposedDate === candidate))) {
        postViolations.push("[SchedulingAgent.scheduleDate] post violated: request.proposedDate = candidate");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SchedulingAgent.scheduleDate (async). User supplies this. */
export type SchedulingAgentScheduleDateAsyncImpl = (self: SchedulingAgent, request: MeetingRequest, candidate: string, allConstraints: ReadonlySet<ConstraintSet>) => Promise<{ self: SchedulingAgent; modified: {} }>;

/** Contract-checking wrapper for SchedulingAgent.scheduleDate (async). */
export function wrapSchedulingAgentScheduleDateAsync(impl: SchedulingAgentScheduleDateAsyncImpl): (self: SchedulingAgent, request: MeetingRequest, candidate: string, allConstraints: ReadonlySet<ConstraintSet>) => Promise<SchedulingAgent> {
  return async (self, request, candidate, allConstraints) => {
    const preViolations: string[] = [];
    if (!((request.status === "OPEN"))) {
      preViolations.push("[SchedulingAgent.scheduleDate] pre violated: request.status = 'OPEN'");
    }
    if (!((candidate !== null))) {
      preViolations.push("[SchedulingAgent.scheduleDate] pre violated: candidate <> null");
    }
    if (!(Array.from(allConstraints).every((__x) => (!((__x.exclusionDates).has(candidate)))))) {
      preViolations.push("[SchedulingAgent.scheduleDate] pre violated: allConstraints->forAll(cs | not cs.exclusionDates->includes(candidate))");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, request, candidate, allConstraints);
      const postViolations: string[] = [];
      if (!((request.proposedDate === candidate))) {
        postViolations.push("[SchedulingAgent.scheduleDate] post violated: request.proposedDate = candidate");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SchedulingAgent.flagConflict. User supplies this. */
export type SchedulingAgentFlagConflictImpl = (self: SchedulingAgent, request: MeetingRequest, reason: string) => { self: SchedulingAgent; modified: {} };

/** Contract-checking wrapper for SchedulingAgent.flagConflict. */
export function wrapSchedulingAgentFlagConflict(impl: SchedulingAgentFlagConflictImpl): (self: SchedulingAgent, request: MeetingRequest, reason: string) => SchedulingAgent {
  return (self, request, reason) => {
    const preViolations: string[] = [];
    if (!((request.status === "OPEN"))) {
      preViolations.push("[SchedulingAgent.flagConflict] pre violated: request.status = 'OPEN'");
    }
    if (!((reason !== null))) {
      preViolations.push("[SchedulingAgent.flagConflict] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, request, reason);
      const postViolations: string[] = [];
      if (!((request.status === "CONFLICT"))) {
        postViolations.push("[SchedulingAgent.flagConflict] post violated: request.status = 'CONFLICT'");
      }
      if (!((request.conflictReason === reason))) {
        postViolations.push("[SchedulingAgent.flagConflict] post violated: request.conflictReason = reason");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SchedulingAgent.flagConflict (async). User supplies this. */
export type SchedulingAgentFlagConflictAsyncImpl = (self: SchedulingAgent, request: MeetingRequest, reason: string) => Promise<{ self: SchedulingAgent; modified: {} }>;

/** Contract-checking wrapper for SchedulingAgent.flagConflict (async). */
export function wrapSchedulingAgentFlagConflictAsync(impl: SchedulingAgentFlagConflictAsyncImpl): (self: SchedulingAgent, request: MeetingRequest, reason: string) => Promise<SchedulingAgent> {
  return async (self, request, reason) => {
    const preViolations: string[] = [];
    if (!((request.status === "OPEN"))) {
      preViolations.push("[SchedulingAgent.flagConflict] pre violated: request.status = 'OPEN'");
    }
    if (!((reason !== null))) {
      preViolations.push("[SchedulingAgent.flagConflict] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, request, reason);
      const postViolations: string[] = [];
      if (!((request.status === "CONFLICT"))) {
        postViolations.push("[SchedulingAgent.flagConflict] post violated: request.status = 'CONFLICT'");
      }
      if (!((request.conflictReason === reason))) {
        postViolations.push("[SchedulingAgent.flagConflict] post violated: request.conflictReason = reason");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SchedulingAgent.confirmMeeting. User supplies this. */
export type SchedulingAgentConfirmMeetingImpl = (self: SchedulingAgent, request: MeetingRequest) => { self: SchedulingAgent; modified: {} };

/** Contract-checking wrapper for SchedulingAgent.confirmMeeting. */
export function wrapSchedulingAgentConfirmMeeting(impl: SchedulingAgentConfirmMeetingImpl): (self: SchedulingAgent, request: MeetingRequest) => SchedulingAgent {
  return (self, request) => {
    const preViolations: string[] = [];
    if (!((request.status === "OPEN"))) {
      preViolations.push("[SchedulingAgent.confirmMeeting] pre violated: request.status = 'OPEN'");
    }
    if (!((request.proposedDate !== null))) {
      preViolations.push("[SchedulingAgent.confirmMeeting] pre violated: request.proposedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, request);
      const postViolations: string[] = [];
      if (!((request.status === "CONFIRMED"))) {
        postViolations.push("[SchedulingAgent.confirmMeeting] post violated: request.status = 'CONFIRMED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SchedulingAgent.confirmMeeting (async). User supplies this. */
export type SchedulingAgentConfirmMeetingAsyncImpl = (self: SchedulingAgent, request: MeetingRequest) => Promise<{ self: SchedulingAgent; modified: {} }>;

/** Contract-checking wrapper for SchedulingAgent.confirmMeeting (async). */
export function wrapSchedulingAgentConfirmMeetingAsync(impl: SchedulingAgentConfirmMeetingAsyncImpl): (self: SchedulingAgent, request: MeetingRequest) => Promise<SchedulingAgent> {
  return async (self, request) => {
    const preViolations: string[] = [];
    if (!((request.status === "OPEN"))) {
      preViolations.push("[SchedulingAgent.confirmMeeting] pre violated: request.status = 'OPEN'");
    }
    if (!((request.proposedDate !== null))) {
      preViolations.push("[SchedulingAgent.confirmMeeting] pre violated: request.proposedDate <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, request);
      const postViolations: string[] = [];
      if (!((request.status === "CONFIRMED"))) {
        postViolations.push("[SchedulingAgent.confirmMeeting] post violated: request.status = 'CONFIRMED'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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



