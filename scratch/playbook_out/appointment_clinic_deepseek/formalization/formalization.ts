// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for ClinicVendor. Runtime: string. Compile-time: branded. */
export type ClinicVendorId = string & { readonly __brand: "ClinicVendorId" };
/** Identity type for AppointmentSlot. Runtime: string. Compile-time: branded. */
export type AppointmentSlotId = string & { readonly __brand: "AppointmentSlotId" };
/** Identity type for AvailabilityWindow. Runtime: string. Compile-time: branded. */
export type AvailabilityWindowId = string & { readonly __brand: "AvailabilityWindowId" };
/** Identity type for LateFeeEvent. Runtime: string. Compile-time: branded. */
export type LateFeeEventId = string & { readonly __brand: "LateFeeEventId" };
/** Identity type for NoDoubleBookingCommitment. Runtime: string. Compile-time: branded. */
export type NoDoubleBookingCommitmentId = string & { readonly __brand: "NoDoubleBookingCommitmentId" };
/** Identity type for AvailabilityRespectCommitment. Runtime: string. Compile-time: branded. */
export type AvailabilityRespectCommitmentId = string & { readonly __brand: "AvailabilityRespectCommitmentId" };
/** Identity type for LateCancellationFeeCommitment. Runtime: string. Compile-time: branded. */
export type LateCancellationFeeCommitmentId = string & { readonly __brand: "LateCancellationFeeCommitmentId" };
/** Identity type for PatientConflictPreventionCommitment. Runtime: string. Compile-time: branded. */
export type PatientConflictPreventionCommitmentId = string & { readonly __brand: "PatientConflictPreventionCommitmentId" };
/** Identity type for AppointmentBookingFlow. Runtime: string. Compile-time: branded. */
export type AppointmentBookingFlowId = string & { readonly __brand: "AppointmentBookingFlowId" };
/** Identity type for CancellationFlow. Runtime: string. Compile-time: branded. */
export type CancellationFlowId = string & { readonly __brand: "CancellationFlowId" };
/** Identity type for AppointmentSchedulerSystem. Runtime: string. Compile-time: branded. */
export type AppointmentSchedulerSystemId = string & { readonly __brand: "AppointmentSchedulerSystemId" };

// ─── Interfaces ───

/** @stereotype <<Category>> */
export interface HipaaCompliant {
}

/** @stereotype <<Category>> */
export interface PcmhTimelyAccess {
}

/** @stereotype <<Category>> */
export interface AccessibilityCompliant {
}

/** @stereotype <<Category>> */
export interface AvailabilityWindowIntegrity {
}

/** @stereotype <<Category>> */
export interface LateFeeEventIntegrity {
}

/** @stereotype <<Subkind>> */
export interface AppointmentSchedulerSystemFormalized extends AppointmentSchedulerSystem {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly assumptionText: string;
  readonly classification: string;
}

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly name: string;
  readonly billingRecordId: string;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface ClinicVendor {
  readonly vendorId: ClinicVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface AppointmentSlot {
  readonly slotId: AppointmentSlotId;
  readonly startTimeEpoch: number;
  readonly endTimeEpoch: number;
}

/** @stereotype <<Kind>> */
export interface AvailabilityWindow {
  readonly windowId: AvailabilityWindowId;
  readonly windowStartEpoch: number;
  readonly windowEndEpoch: number;
}

/** @stereotype <<Kind>> */
export interface LateFeeEvent {
  readonly feeEventId: LateFeeEventId;
  readonly amount: number;
  readonly timestampEpoch: number;
  readonly relatedAppointmentId: string;
}

/** @stereotype <<Commitment>> */
export interface NoDoubleBookingCommitment {
  readonly commitmentId: NoDoubleBookingCommitmentId;
  readonly maxOverlappingClinicians: number;
}

/** @stereotype <<Commitment>> */
export interface AvailabilityRespectCommitment {
  readonly commitmentId: AvailabilityRespectCommitmentId;
  readonly minWindowEndDelta: number;
}

/** @stereotype <<Commitment>> */
export interface LateCancellationFeeCommitment {
  readonly commitmentId: LateCancellationFeeCommitmentId;
  readonly minLateFeeCount: number;
}

/** @stereotype <<Commitment>> */
export interface PatientConflictPreventionCommitment {
  readonly commitmentId: PatientConflictPreventionCommitmentId;
  readonly maxOverlappingPatient: number;
}

/** @stereotype <<Category>> */
export interface NoDoubleBookingConstraints {
}

/** @stereotype <<Category>> */
export interface AvailabilityRespectConstraints {
}

/** @stereotype <<Category>> */
export interface LateFeeConstraints {
}

/** @stereotype <<Category>> */
export interface PatientConflictConstraints {
}

/** @stereotype <<Happening>> */
export interface AppointmentBookingFlow {
  readonly flowId: AppointmentBookingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly patientId: string;
  readonly clinicianId: string;
  readonly serviceName: string;
  readonly slotStartEpoch: number;
  readonly slotEndEpoch: number;
}

/** @stereotype <<Happening>> */
export interface CancellationFlow {
  readonly flowId: CancellationFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly appointmentId: string;
  readonly isLate: boolean;
  readonly lateFeeAmount: number;
}

/** @stereotype <<Kind>> */
export interface AppointmentSchedulerSystem extends NoDoubleBookingConstraints, AvailabilityRespectConstraints, LateFeeConstraints, PatientConflictConstraints {
  readonly systemId: AppointmentSchedulerSystemId;
  readonly maxOverlappingClinicians: number;
  readonly minWindowEndDelta: number;
  readonly minLateFeeCount: number;
  readonly maxOverlappingPatient: number;
  readonly appointments: ReadonlySet<AppointmentSlot>;
  readonly appointmentClinicianIds: ReadonlySet<string>;
  readonly appointmentPatientIds: ReadonlySet<string>;
  readonly appointmentStartTimes: ReadonlySet<number>;
  readonly appointmentEndTimes: ReadonlySet<number>;
  readonly lateFeeEvents: ReadonlySet<LateFeeEvent>;
}


// ─── Factory functions ───

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  assumptionText: string;
  classification: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    assumptionText: data.assumptionText,
    classification: data.classification,
  };
}

export function makePatient(data: {
  patientId: string;
  name: string;
  billingRecordId: string;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    name: data.name,
    billingRecordId: data.billingRecordId,
  };
}

export function makeClinician(data: {
  clinicianId: string;
  name: string;
}): Clinician {
  return {
    clinicianId: data.clinicianId as ClinicianId,
    name: data.name,
  };
}

export function makeClinicVendor(data: {
  vendorId: string;
  name: string;
}): ClinicVendor {
  return {
    vendorId: data.vendorId as ClinicVendorId,
    name: data.name,
  };
}

export function makeAppointmentSlot(data: {
  slotId: string;
  startTimeEpoch: number;
  endTimeEpoch: number;
}): AppointmentSlot {
  return {
    slotId: data.slotId as AppointmentSlotId,
    startTimeEpoch: data.startTimeEpoch,
    endTimeEpoch: data.endTimeEpoch,
  };
}

export function makeAvailabilityWindow(data: {
  windowId: string;
  windowStartEpoch: number;
  windowEndEpoch: number;
}): AvailabilityWindow {
  return {
    windowId: data.windowId as AvailabilityWindowId,
    windowStartEpoch: data.windowStartEpoch,
    windowEndEpoch: data.windowEndEpoch,
  };
}

export function makeLateFeeEvent(data: {
  feeEventId: string;
  amount: number;
  timestampEpoch: number;
  relatedAppointmentId: string;
}): LateFeeEvent {
  return {
    feeEventId: data.feeEventId as LateFeeEventId,
    amount: data.amount,
    timestampEpoch: data.timestampEpoch,
    relatedAppointmentId: data.relatedAppointmentId,
  };
}

export function makeNoDoubleBookingCommitment(data: {
  commitmentId: string;
  maxOverlappingClinicians: number;
}): NoDoubleBookingCommitment {
  return {
    commitmentId: data.commitmentId as NoDoubleBookingCommitmentId,
    maxOverlappingClinicians: data.maxOverlappingClinicians,
  };
}

export function makeAvailabilityRespectCommitment(data: {
  commitmentId: string;
  minWindowEndDelta: number;
}): AvailabilityRespectCommitment {
  return {
    commitmentId: data.commitmentId as AvailabilityRespectCommitmentId,
    minWindowEndDelta: data.minWindowEndDelta,
  };
}

export function makeLateCancellationFeeCommitment(data: {
  commitmentId: string;
  minLateFeeCount: number;
}): LateCancellationFeeCommitment {
  return {
    commitmentId: data.commitmentId as LateCancellationFeeCommitmentId,
    minLateFeeCount: data.minLateFeeCount,
  };
}

export function makePatientConflictPreventionCommitment(data: {
  commitmentId: string;
  maxOverlappingPatient: number;
}): PatientConflictPreventionCommitment {
  return {
    commitmentId: data.commitmentId as PatientConflictPreventionCommitmentId,
    maxOverlappingPatient: data.maxOverlappingPatient,
  };
}

export function makeAppointmentBookingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  patientId: string;
  clinicianId: string;
  serviceName: string;
  slotStartEpoch: number;
  slotEndEpoch: number;
}): AppointmentBookingFlow {
  return {
    flowId: data.flowId as AppointmentBookingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    patientId: data.patientId,
    clinicianId: data.clinicianId,
    serviceName: data.serviceName,
    slotStartEpoch: data.slotStartEpoch,
    slotEndEpoch: data.slotEndEpoch,
  };
}

export function makeCancellationFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  appointmentId: string;
  isLate: boolean;
  lateFeeAmount: number;
}): CancellationFlow {
  return {
    flowId: data.flowId as CancellationFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    appointmentId: data.appointmentId,
    isLate: data.isLate,
    lateFeeAmount: data.lateFeeAmount,
  };
}

export function makeAppointmentSchedulerSystem(data: {
  systemId: string;
  maxOverlappingClinicians: number;
  minWindowEndDelta: number;
  minLateFeeCount: number;
  maxOverlappingPatient: number;
  appointments: ReadonlySet<AppointmentSlot>;
  appointmentClinicianIds: ReadonlySet<string>;
  appointmentPatientIds: ReadonlySet<string>;
  appointmentStartTimes: ReadonlySet<number>;
  appointmentEndTimes: ReadonlySet<number>;
  lateFeeEvents: ReadonlySet<LateFeeEvent>;
}): AppointmentSchedulerSystem {
  return {
    systemId: data.systemId as AppointmentSchedulerSystemId,
    maxOverlappingClinicians: data.maxOverlappingClinicians,
    minWindowEndDelta: data.minWindowEndDelta,
    minLateFeeCount: data.minLateFeeCount,
    maxOverlappingPatient: data.maxOverlappingPatient,
    appointments: data.appointments,
    appointmentClinicianIds: data.appointmentClinicianIds,
    appointmentPatientIds: data.appointmentPatientIds,
    appointmentStartTimes: data.appointmentStartTimes,
    appointmentEndTimes: data.appointmentEndTimes,
    lateFeeEvents: data.lateFeeEvents,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for HipaaCompliant. Returns empty array when valid. */
export function validateHipaaCompliant(instance: HipaaCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.slotId <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.startTimeEpoch >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.endTimeEpoch > bearer.startTimeEpoch — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for PcmhTimelyAccess. Returns empty array when valid. */
export function validatePcmhTimelyAccess(instance: PcmhTimelyAccess): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.windowEndEpoch - bearer.windowStartEpoch <= 864000.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AccessibilityCompliant. Returns empty array when valid. */
export function validateAccessibilityCompliant(instance: AccessibilityCompliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.startTimeEpoch >= 21600.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.endTimeEpoch <= 72000.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AvailabilityWindowIntegrity. Returns empty array when valid. */
export function validateAvailabilityWindowIntegrity(instance: AvailabilityWindowIntegrity): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.windowEndEpoch - bearer.windowStartEpoch > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.windowStartEpoch >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for LateFeeEventIntegrity. Returns empty array when valid. */
export function validateLateFeeEventIntegrity(instance: LateFeeEventIntegrity): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.relatedAppointmentId <> null — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.amount > 0.0 — reason: bare variable 'bearer' has no binding in this scope
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
  if (!((instance.classification !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.classification <> null");
  }
  return violations;
}

/** Runtime invariant check for Patient. Returns empty array when valid. */
export function validatePatient(instance: Patient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.patientId !== null))) {
    violations.push("[Patient] invariant violated: self.patientId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Patient] invariant violated: self.name <> null");
  }
  if (!((instance.billingRecordId !== null))) {
    violations.push("[Patient] invariant violated: self.billingRecordId <> null");
  }
  return violations;
}

/** Runtime invariant check for Clinician. Returns empty array when valid. */
export function validateClinician(instance: Clinician): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clinicianId !== null))) {
    violations.push("[Clinician] invariant violated: self.clinicianId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[Clinician] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for ClinicVendor. Returns empty array when valid. */
export function validateClinicVendor(instance: ClinicVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[ClinicVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[ClinicVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for AppointmentSlot. Returns empty array when valid. */
export function validateAppointmentSlot(instance: AppointmentSlot): readonly string[] {
  const violations: string[] = [];
  if (!((instance.slotId !== null))) {
    violations.push("[AppointmentSlot] invariant violated: self.slotId <> null");
  }
  if (!((instance.startTimeEpoch >= 0))) {
    violations.push("[AppointmentSlot] invariant violated: self.startTimeEpoch >= 0.0");
  }
  if (!((instance.endTimeEpoch > instance.startTimeEpoch))) {
    violations.push("[AppointmentSlot] invariant violated: self.endTimeEpoch > self.startTimeEpoch");
  }
  return violations;
}

/** Runtime invariant check for AvailabilityWindow. Returns empty array when valid. */
export function validateAvailabilityWindow(instance: AvailabilityWindow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.windowId !== null))) {
    violations.push("[AvailabilityWindow] invariant violated: self.windowId <> null");
  }
  if (!((instance.windowStartEpoch >= 0))) {
    violations.push("[AvailabilityWindow] invariant violated: self.windowStartEpoch >= 0.0");
  }
  if (!((instance.windowEndEpoch > instance.windowStartEpoch))) {
    violations.push("[AvailabilityWindow] invariant violated: self.windowEndEpoch > self.windowStartEpoch");
  }
  return violations;
}

/** Runtime invariant check for LateFeeEvent. Returns empty array when valid. */
export function validateLateFeeEvent(instance: LateFeeEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.feeEventId !== null))) {
    violations.push("[LateFeeEvent] invariant violated: self.feeEventId <> null");
  }
  if (!((instance.amount >= 0))) {
    violations.push("[LateFeeEvent] invariant violated: self.amount >= 0.0");
  }
  if (!((instance.timestampEpoch >= 0))) {
    violations.push("[LateFeeEvent] invariant violated: self.timestampEpoch >= 0.0");
  }
  if (!((instance.relatedAppointmentId !== null))) {
    violations.push("[LateFeeEvent] invariant violated: self.relatedAppointmentId <> null");
  }
  return violations;
}

/** Runtime invariant check for NoDoubleBookingConstraints. Returns empty array when valid. */
export function validateNoDoubleBookingConstraints(instance: NoDoubleBookingConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[NoDoubleBookingConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AvailabilityRespectConstraints. Returns empty array when valid. */
export function validateAvailabilityRespectConstraints(instance: AvailabilityRespectConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AvailabilityRespectConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for LateFeeConstraints. Returns empty array when valid. */
export function validateLateFeeConstraints(instance: LateFeeConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[LateFeeConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for PatientConflictConstraints. Returns empty array when valid. */
export function validatePatientConflictConstraints(instance: PatientConflictConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[PatientConflictConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AppointmentBookingFlow. Returns empty array when valid. */
export function validateAppointmentBookingFlow(instance: AppointmentBookingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.outcome <> null");
  }
  if (!((instance.patientId !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.patientId <> null");
  }
  if (!((instance.clinicianId !== null))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.clinicianId <> null");
  }
  if (!((instance.slotStartEpoch >= 0))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.slotStartEpoch >= 0.0");
  }
  if (!((instance.slotEndEpoch > instance.slotStartEpoch))) {
    violations.push("[AppointmentBookingFlow] invariant violated: self.slotEndEpoch > self.slotStartEpoch");
  }
  return violations;
}

/** Runtime invariant check for CancellationFlow. Returns empty array when valid. */
export function validateCancellationFlow(instance: CancellationFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[CancellationFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[CancellationFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.outcome !== null))) {
    violations.push("[CancellationFlow] invariant violated: self.outcome <> null");
  }
  if (!((instance.appointmentId !== null))) {
    violations.push("[CancellationFlow] invariant violated: self.appointmentId <> null");
  }
  return violations;
}

/** Runtime invariant check for AppointmentSchedulerSystem. Returns empty array when valid. */
export function validateAppointmentSchedulerSystem(instance: AppointmentSchedulerSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[AppointmentSchedulerSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.maxOverlappingClinicians === 1))) {
    violations.push("[AppointmentSchedulerSystem] invariant violated: self.maxOverlappingClinicians = 1");
  }
  if (!((instance.minWindowEndDelta >= 0))) {
    violations.push("[AppointmentSchedulerSystem] invariant violated: self.minWindowEndDelta >= 0.0");
  }
  if (!((instance.minLateFeeCount >= 0))) {
    violations.push("[AppointmentSchedulerSystem] invariant violated: self.minLateFeeCount >= 0");
  }
  if (!((instance.maxOverlappingPatient === 1))) {
    violations.push("[AppointmentSchedulerSystem] invariant violated: self.maxOverlappingPatient = 1");
  }
  if (!(true)) {
    violations.push("[AppointmentSchedulerSystem] invariant violated: true");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for AppointmentSchedulerSystemFormalized.rejectOverlappingClinician. User supplies this. */
export type AppointmentSchedulerSystemFormalizedRejectOverlappingClinicianImpl = (self: AppointmentSchedulerSystemFormalized, clinicianId: string, proposedSlot: AppointmentSlot) => { self: AppointmentSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.rejectOverlappingClinician. */
export function wrapAppointmentSchedulerSystemFormalizedRejectOverlappingClinician(impl: AppointmentSchedulerSystemFormalizedRejectOverlappingClinicianImpl): (self: AppointmentSchedulerSystemFormalized, clinicianId: string, proposedSlot: AppointmentSlot) => AppointmentSchedulerSystemFormalized {
  return (self, clinicianId, proposedSlot) => {
    const preViolations: string[] = [];
    if (!((clinicianId !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOverlappingClinician] pre violated: clinicianId <> null");
    }
    if (!((proposedSlot !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOverlappingClinician] pre violated: proposedSlot <> null");
    }
    if (!((proposedSlot.startTimeEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOverlappingClinician] pre violated: proposedSlot.startTimeEpoch >= 0.0");
    }
    if (!((proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOverlappingClinician] pre violated: proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, clinicianId, proposedSlot);
      const postViolations: string[] = [];
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

/** Impl signature for AppointmentSchedulerSystemFormalized.rejectOverlappingClinician (async). User supplies this. */
export type AppointmentSchedulerSystemFormalizedRejectOverlappingClinicianAsyncImpl = (self: AppointmentSchedulerSystemFormalized, clinicianId: string, proposedSlot: AppointmentSlot) => Promise<{ self: AppointmentSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.rejectOverlappingClinician (async). */
export function wrapAppointmentSchedulerSystemFormalizedRejectOverlappingClinicianAsync(impl: AppointmentSchedulerSystemFormalizedRejectOverlappingClinicianAsyncImpl): (self: AppointmentSchedulerSystemFormalized, clinicianId: string, proposedSlot: AppointmentSlot) => Promise<AppointmentSchedulerSystemFormalized> {
  return async (self, clinicianId, proposedSlot) => {
    const preViolations: string[] = [];
    if (!((clinicianId !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOverlappingClinician] pre violated: clinicianId <> null");
    }
    if (!((proposedSlot !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOverlappingClinician] pre violated: proposedSlot <> null");
    }
    if (!((proposedSlot.startTimeEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOverlappingClinician] pre violated: proposedSlot.startTimeEpoch >= 0.0");
    }
    if (!((proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOverlappingClinician] pre violated: proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, clinicianId, proposedSlot);
      const postViolations: string[] = [];
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

/** Impl signature for AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow. User supplies this. */
export type AppointmentSchedulerSystemFormalizedRejectOutsideAvailabilityWindowImpl = (self: AppointmentSchedulerSystemFormalized, appointment: AppointmentSlot, window: AvailabilityWindow) => { self: AppointmentSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow. */
export function wrapAppointmentSchedulerSystemFormalizedRejectOutsideAvailabilityWindow(impl: AppointmentSchedulerSystemFormalizedRejectOutsideAvailabilityWindowImpl): (self: AppointmentSchedulerSystemFormalized, appointment: AppointmentSlot, window: AvailabilityWindow) => AppointmentSchedulerSystemFormalized {
  return (self, appointment, window) => {
    const preViolations: string[] = [];
    if (!((appointment !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: appointment <> null");
    }
    if (!((window !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: window <> null");
    }
    if (!((window.windowStartEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: window.windowStartEpoch >= 0.0");
    }
    if (!((window.windowEndEpoch > window.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: window.windowEndEpoch > window.windowStartEpoch");
    }
    if (!((appointment.startTimeEpoch >= window.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: appointment.startTimeEpoch >= window.windowStartEpoch");
    }
    if (!((appointment.endTimeEpoch <= window.windowEndEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: appointment.endTimeEpoch <= window.windowEndEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, appointment, window);
      const postViolations: string[] = [];
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

/** Impl signature for AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow (async). User supplies this. */
export type AppointmentSchedulerSystemFormalizedRejectOutsideAvailabilityWindowAsyncImpl = (self: AppointmentSchedulerSystemFormalized, appointment: AppointmentSlot, window: AvailabilityWindow) => Promise<{ self: AppointmentSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow (async). */
export function wrapAppointmentSchedulerSystemFormalizedRejectOutsideAvailabilityWindowAsync(impl: AppointmentSchedulerSystemFormalizedRejectOutsideAvailabilityWindowAsyncImpl): (self: AppointmentSchedulerSystemFormalized, appointment: AppointmentSlot, window: AvailabilityWindow) => Promise<AppointmentSchedulerSystemFormalized> {
  return async (self, appointment, window) => {
    const preViolations: string[] = [];
    if (!((appointment !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: appointment <> null");
    }
    if (!((window !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: window <> null");
    }
    if (!((window.windowStartEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: window.windowStartEpoch >= 0.0");
    }
    if (!((window.windowEndEpoch > window.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: window.windowEndEpoch > window.windowStartEpoch");
    }
    if (!((appointment.startTimeEpoch >= window.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: appointment.startTimeEpoch >= window.windowStartEpoch");
    }
    if (!((appointment.endTimeEpoch <= window.windowEndEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectOutsideAvailabilityWindow] pre violated: appointment.endTimeEpoch <= window.windowEndEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, appointment, window);
      const postViolations: string[] = [];
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

/** Impl signature for AppointmentSchedulerSystemFormalized.rejectPatientConflict. User supplies this. */
export type AppointmentSchedulerSystemFormalizedRejectPatientConflictImpl = (self: AppointmentSchedulerSystemFormalized, patientId: string, proposedSlot: AppointmentSlot) => { self: AppointmentSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.rejectPatientConflict. */
export function wrapAppointmentSchedulerSystemFormalizedRejectPatientConflict(impl: AppointmentSchedulerSystemFormalizedRejectPatientConflictImpl): (self: AppointmentSchedulerSystemFormalized, patientId: string, proposedSlot: AppointmentSlot) => AppointmentSchedulerSystemFormalized {
  return (self, patientId, proposedSlot) => {
    const preViolations: string[] = [];
    if (!((patientId !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectPatientConflict] pre violated: patientId <> null");
    }
    if (!((proposedSlot !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectPatientConflict] pre violated: proposedSlot <> null");
    }
    if (!((proposedSlot.startTimeEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectPatientConflict] pre violated: proposedSlot.startTimeEpoch >= 0.0");
    }
    if (!((proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectPatientConflict] pre violated: proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, patientId, proposedSlot);
      const postViolations: string[] = [];
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

/** Impl signature for AppointmentSchedulerSystemFormalized.rejectPatientConflict (async). User supplies this. */
export type AppointmentSchedulerSystemFormalizedRejectPatientConflictAsyncImpl = (self: AppointmentSchedulerSystemFormalized, patientId: string, proposedSlot: AppointmentSlot) => Promise<{ self: AppointmentSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.rejectPatientConflict (async). */
export function wrapAppointmentSchedulerSystemFormalizedRejectPatientConflictAsync(impl: AppointmentSchedulerSystemFormalizedRejectPatientConflictAsyncImpl): (self: AppointmentSchedulerSystemFormalized, patientId: string, proposedSlot: AppointmentSlot) => Promise<AppointmentSchedulerSystemFormalized> {
  return async (self, patientId, proposedSlot) => {
    const preViolations: string[] = [];
    if (!((patientId !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectPatientConflict] pre violated: patientId <> null");
    }
    if (!((proposedSlot !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectPatientConflict] pre violated: proposedSlot <> null");
    }
    if (!((proposedSlot.startTimeEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectPatientConflict] pre violated: proposedSlot.startTimeEpoch >= 0.0");
    }
    if (!((proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.rejectPatientConflict] pre violated: proposedSlot.endTimeEpoch > proposedSlot.startTimeEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, patientId, proposedSlot);
      const postViolations: string[] = [];
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

/** Impl signature for AppointmentSchedulerSystemFormalized.enforceLateCancellationFee. User supplies this. */
export type AppointmentSchedulerSystemFormalizedEnforceLateCancellationFeeImpl = (self: AppointmentSchedulerSystemFormalized, appointment: AppointmentSlot, cancellationTimeEpoch: number) => { self: AppointmentSchedulerSystemFormalized; modified: { lateFeeEvents: unknown } };

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.enforceLateCancellationFee. */
export function wrapAppointmentSchedulerSystemFormalizedEnforceLateCancellationFee(impl: AppointmentSchedulerSystemFormalizedEnforceLateCancellationFeeImpl): (self: AppointmentSchedulerSystemFormalized, appointment: AppointmentSlot, cancellationTimeEpoch: number) => AppointmentSchedulerSystemFormalized {
  return (self, appointment, cancellationTimeEpoch) => {
    const preViolations: string[] = [];
    if (!((appointment !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.enforceLateCancellationFee] pre violated: appointment <> null");
    }
    if (!((cancellationTimeEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.enforceLateCancellationFee] pre violated: cancellationTimeEpoch >= 0.0");
    }
    if (!(((appointment.startTimeEpoch - cancellationTimeEpoch) < 86400))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.enforceLateCancellationFee] pre violated: appointment.startTimeEpoch - cancellationTimeEpoch < 86400.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lateFeeEvents": self.lateFeeEvents,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, appointment, cancellationTimeEpoch);
      const postViolations: string[] = [];
      if (!(((__result.self.lateFeeEvents).size === ((__pre["self.lateFeeEvents"]).size + 1)))) {
        postViolations.push("[AppointmentSchedulerSystemFormalized.enforceLateCancellationFee] post violated: (self.lateFeeEvents->size() = self.lateFeeEvents@pre->size() + 1)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystemFormalized.enforceLateCancellationFee (async). User supplies this. */
export type AppointmentSchedulerSystemFormalizedEnforceLateCancellationFeeAsyncImpl = (self: AppointmentSchedulerSystemFormalized, appointment: AppointmentSlot, cancellationTimeEpoch: number) => Promise<{ self: AppointmentSchedulerSystemFormalized; modified: { lateFeeEvents: unknown } }>;

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.enforceLateCancellationFee (async). */
export function wrapAppointmentSchedulerSystemFormalizedEnforceLateCancellationFeeAsync(impl: AppointmentSchedulerSystemFormalizedEnforceLateCancellationFeeAsyncImpl): (self: AppointmentSchedulerSystemFormalized, appointment: AppointmentSlot, cancellationTimeEpoch: number) => Promise<AppointmentSchedulerSystemFormalized> {
  return async (self, appointment, cancellationTimeEpoch) => {
    const preViolations: string[] = [];
    if (!((appointment !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.enforceLateCancellationFee] pre violated: appointment <> null");
    }
    if (!((cancellationTimeEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.enforceLateCancellationFee] pre violated: cancellationTimeEpoch >= 0.0");
    }
    if (!(((appointment.startTimeEpoch - cancellationTimeEpoch) < 86400))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.enforceLateCancellationFee] pre violated: appointment.startTimeEpoch - cancellationTimeEpoch < 86400.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lateFeeEvents": self.lateFeeEvents,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, appointment, cancellationTimeEpoch);
      const postViolations: string[] = [];
      if (!(((__result.self.lateFeeEvents).size === ((__pre["self.lateFeeEvents"]).size + 1)))) {
        postViolations.push("[AppointmentSchedulerSystemFormalized.enforceLateCancellationFee] post violated: (self.lateFeeEvents->size() = self.lateFeeEvents@pre->size() + 1)");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow. User supplies this. */
export type AppointmentSchedulerSystemFormalizedFlagAppointmentsOutsideNewWindowImpl = (self: AppointmentSchedulerSystemFormalized, clinicianId: string, oldWindow: AvailabilityWindow, newWindow: AvailabilityWindow) => { self: AppointmentSchedulerSystemFormalized; modified: {} };

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow. */
export function wrapAppointmentSchedulerSystemFormalizedFlagAppointmentsOutsideNewWindow(impl: AppointmentSchedulerSystemFormalizedFlagAppointmentsOutsideNewWindowImpl): (self: AppointmentSchedulerSystemFormalized, clinicianId: string, oldWindow: AvailabilityWindow, newWindow: AvailabilityWindow) => AppointmentSchedulerSystemFormalized {
  return (self, clinicianId, oldWindow, newWindow) => {
    const preViolations: string[] = [];
    if (!((clinicianId !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: clinicianId <> null");
    }
    if (!((oldWindow !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: oldWindow <> null");
    }
    if (!((newWindow !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: newWindow <> null");
    }
    if (!((newWindow.windowStartEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: newWindow.windowStartEpoch >= 0.0");
    }
    if (!((newWindow.windowEndEpoch > newWindow.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: newWindow.windowEndEpoch > newWindow.windowStartEpoch");
    }
    if (!((oldWindow.windowStartEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: oldWindow.windowStartEpoch >= 0.0");
    }
    if (!((oldWindow.windowEndEpoch > oldWindow.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: oldWindow.windowEndEpoch > oldWindow.windowStartEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, clinicianId, oldWindow, newWindow);
      const postViolations: string[] = [];
      if (!((__result.self.minWindowEndDelta >= 0))) {
        postViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] post violated: self.minWindowEndDelta >= 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow (async). User supplies this. */
export type AppointmentSchedulerSystemFormalizedFlagAppointmentsOutsideNewWindowAsyncImpl = (self: AppointmentSchedulerSystemFormalized, clinicianId: string, oldWindow: AvailabilityWindow, newWindow: AvailabilityWindow) => Promise<{ self: AppointmentSchedulerSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow (async). */
export function wrapAppointmentSchedulerSystemFormalizedFlagAppointmentsOutsideNewWindowAsync(impl: AppointmentSchedulerSystemFormalizedFlagAppointmentsOutsideNewWindowAsyncImpl): (self: AppointmentSchedulerSystemFormalized, clinicianId: string, oldWindow: AvailabilityWindow, newWindow: AvailabilityWindow) => Promise<AppointmentSchedulerSystemFormalized> {
  return async (self, clinicianId, oldWindow, newWindow) => {
    const preViolations: string[] = [];
    if (!((clinicianId !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: clinicianId <> null");
    }
    if (!((oldWindow !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: oldWindow <> null");
    }
    if (!((newWindow !== null))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: newWindow <> null");
    }
    if (!((newWindow.windowStartEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: newWindow.windowStartEpoch >= 0.0");
    }
    if (!((newWindow.windowEndEpoch > newWindow.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: newWindow.windowEndEpoch > newWindow.windowStartEpoch");
    }
    if (!((oldWindow.windowStartEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: oldWindow.windowStartEpoch >= 0.0");
    }
    if (!((oldWindow.windowEndEpoch > oldWindow.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] pre violated: oldWindow.windowEndEpoch > oldWindow.windowStartEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, clinicianId, oldWindow, newWindow);
      const postViolations: string[] = [];
      if (!((__result.self.minWindowEndDelta >= 0))) {
        postViolations.push("[AppointmentSchedulerSystemFormalized.flagAppointmentsOutsideNewWindow] post violated: self.minWindowEndDelta >= 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystem.bookAppointment. User supplies this. */
export type AppointmentSchedulerSystemBookAppointmentImpl = (self: AppointmentSchedulerSystem, patientId: string, clinicianId: string, serviceName: string, window: AvailabilityWindow, slotStart: number, slotEnd: number) => { self: AppointmentSchedulerSystem; modified: { appointmentClinicianIds: unknown; appointmentPatientIds: unknown; appointmentStartTimes: unknown; appointmentEndTimes: unknown; appointments: unknown } };

/** Contract-checking wrapper for AppointmentSchedulerSystem.bookAppointment. */
export function wrapAppointmentSchedulerSystemBookAppointment(impl: AppointmentSchedulerSystemBookAppointmentImpl): (self: AppointmentSchedulerSystem, patientId: string, clinicianId: string, serviceName: string, window: AvailabilityWindow, slotStart: number, slotEnd: number) => AppointmentSchedulerSystem {
  return (self, patientId, clinicianId, serviceName, window, slotStart, slotEnd) => {
    const preViolations: string[] = [];
    if (!((patientId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: patientId <> null");
    }
    if (!((clinicianId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: clinicianId <> null");
    }
    if (!((serviceName !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: serviceName <> null");
    }
    if (!((window !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: window <> null");
    }
    if (!((slotStart >= 0))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: slotStart >= 0.0");
    }
    if (!((slotEnd > slotStart))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: slotEnd > slotStart");
    }
    if (!((slotStart >= window.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: slotStart >= window.windowStartEpoch");
    }
    if (!((slotEnd <= window.windowEndEpoch))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: slotEnd <= window.windowEndEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, patientId, clinicianId, serviceName, window, slotStart, slotEnd);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.maxOverlappingClinicians === 1))) {
        postViolations.push("[AppointmentSchedulerSystem.bookAppointment] post violated: self.maxOverlappingClinicians = 1");
      }
      if (!((__result.self.minWindowEndDelta >= 0))) {
        postViolations.push("[AppointmentSchedulerSystem.bookAppointment] post violated: self.minWindowEndDelta >= 0.0");
      }
      if (!((__result.self.maxOverlappingPatient === 1))) {
        postViolations.push("[AppointmentSchedulerSystem.bookAppointment] post violated: self.maxOverlappingPatient = 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystem.bookAppointment (async). User supplies this. */
export type AppointmentSchedulerSystemBookAppointmentAsyncImpl = (self: AppointmentSchedulerSystem, patientId: string, clinicianId: string, serviceName: string, window: AvailabilityWindow, slotStart: number, slotEnd: number) => Promise<{ self: AppointmentSchedulerSystem; modified: { appointmentClinicianIds: unknown; appointmentPatientIds: unknown; appointmentStartTimes: unknown; appointmentEndTimes: unknown; appointments: unknown } }>;

/** Contract-checking wrapper for AppointmentSchedulerSystem.bookAppointment (async). */
export function wrapAppointmentSchedulerSystemBookAppointmentAsync(impl: AppointmentSchedulerSystemBookAppointmentAsyncImpl): (self: AppointmentSchedulerSystem, patientId: string, clinicianId: string, serviceName: string, window: AvailabilityWindow, slotStart: number, slotEnd: number) => Promise<AppointmentSchedulerSystem> {
  return async (self, patientId, clinicianId, serviceName, window, slotStart, slotEnd) => {
    const preViolations: string[] = [];
    if (!((patientId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: patientId <> null");
    }
    if (!((clinicianId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: clinicianId <> null");
    }
    if (!((serviceName !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: serviceName <> null");
    }
    if (!((window !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: window <> null");
    }
    if (!((slotStart >= 0))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: slotStart >= 0.0");
    }
    if (!((slotEnd > slotStart))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: slotEnd > slotStart");
    }
    if (!((slotStart >= window.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: slotStart >= window.windowStartEpoch");
    }
    if (!((slotEnd <= window.windowEndEpoch))) {
      preViolations.push("[AppointmentSchedulerSystem.bookAppointment] pre violated: slotEnd <= window.windowEndEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, patientId, clinicianId, serviceName, window, slotStart, slotEnd);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = true — unbound variable 'result'
      if (!((__result.self.maxOverlappingClinicians === 1))) {
        postViolations.push("[AppointmentSchedulerSystem.bookAppointment] post violated: self.maxOverlappingClinicians = 1");
      }
      if (!((__result.self.minWindowEndDelta >= 0))) {
        postViolations.push("[AppointmentSchedulerSystem.bookAppointment] post violated: self.minWindowEndDelta >= 0.0");
      }
      if (!((__result.self.maxOverlappingPatient === 1))) {
        postViolations.push("[AppointmentSchedulerSystem.bookAppointment] post violated: self.maxOverlappingPatient = 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystem.cancelAppointment. User supplies this. */
export type AppointmentSchedulerSystemCancelAppointmentImpl = (self: AppointmentSchedulerSystem, slotId: string, cancellationTimeEpoch: number) => { self: AppointmentSchedulerSystem; modified: { appointments: unknown; lateFeeEvents: unknown } };

/** Contract-checking wrapper for AppointmentSchedulerSystem.cancelAppointment. */
export function wrapAppointmentSchedulerSystemCancelAppointment(impl: AppointmentSchedulerSystemCancelAppointmentImpl): (self: AppointmentSchedulerSystem, slotId: string, cancellationTimeEpoch: number) => AppointmentSchedulerSystem {
  return (self, slotId, cancellationTimeEpoch) => {
    const preViolations: string[] = [];
    if (!((slotId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.cancelAppointment] pre violated: slotId <> null");
    }
    if (!((cancellationTimeEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystem.cancelAppointment] pre violated: cancellationTimeEpoch >= 0.0");
    }
    if (!(((self.appointments).size > 0))) {
      preViolations.push("[AppointmentSchedulerSystem.cancelAppointment] pre violated: self.appointments->size() > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, slotId, cancellationTimeEpoch);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if cancellationTimeEpoch > 0.0
          then
            result = true
          else
            result = false
          endif — unbound variable 'result'
      if (!((__result.self.minLateFeeCount >= 0))) {
        postViolations.push("[AppointmentSchedulerSystem.cancelAppointment] post violated: self.minLateFeeCount >= 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystem.cancelAppointment (async). User supplies this. */
export type AppointmentSchedulerSystemCancelAppointmentAsyncImpl = (self: AppointmentSchedulerSystem, slotId: string, cancellationTimeEpoch: number) => Promise<{ self: AppointmentSchedulerSystem; modified: { appointments: unknown; lateFeeEvents: unknown } }>;

/** Contract-checking wrapper for AppointmentSchedulerSystem.cancelAppointment (async). */
export function wrapAppointmentSchedulerSystemCancelAppointmentAsync(impl: AppointmentSchedulerSystemCancelAppointmentAsyncImpl): (self: AppointmentSchedulerSystem, slotId: string, cancellationTimeEpoch: number) => Promise<AppointmentSchedulerSystem> {
  return async (self, slotId, cancellationTimeEpoch) => {
    const preViolations: string[] = [];
    if (!((slotId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.cancelAppointment] pre violated: slotId <> null");
    }
    if (!((cancellationTimeEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystem.cancelAppointment] pre violated: cancellationTimeEpoch >= 0.0");
    }
    if (!(((self.appointments).size > 0))) {
      preViolations.push("[AppointmentSchedulerSystem.cancelAppointment] pre violated: self.appointments->size() > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, slotId, cancellationTimeEpoch);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if cancellationTimeEpoch > 0.0
          then
            result = true
          else
            result = false
          endif — unbound variable 'result'
      if (!((__result.self.minLateFeeCount >= 0))) {
        postViolations.push("[AppointmentSchedulerSystem.cancelAppointment] post violated: self.minLateFeeCount >= 0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystem.updateAvailability. User supplies this. */
export type AppointmentSchedulerSystemUpdateAvailabilityImpl = (self: AppointmentSchedulerSystem, clinicianId: string, newWindow: AvailabilityWindow) => { self: AppointmentSchedulerSystem; modified: { appointments: unknown } };

/** Contract-checking wrapper for AppointmentSchedulerSystem.updateAvailability. */
export function wrapAppointmentSchedulerSystemUpdateAvailability(impl: AppointmentSchedulerSystemUpdateAvailabilityImpl): (self: AppointmentSchedulerSystem, clinicianId: string, newWindow: AvailabilityWindow) => AppointmentSchedulerSystem {
  return (self, clinicianId, newWindow) => {
    const preViolations: string[] = [];
    if (!((clinicianId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.updateAvailability] pre violated: clinicianId <> null");
    }
    if (!((newWindow !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.updateAvailability] pre violated: newWindow <> null");
    }
    if (!((newWindow.windowStartEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystem.updateAvailability] pre violated: newWindow.windowStartEpoch >= 0.0");
    }
    if (!((newWindow.windowEndEpoch > newWindow.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystem.updateAvailability] pre violated: newWindow.windowEndEpoch > newWindow.windowStartEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, clinicianId, newWindow);
      const postViolations: string[] = [];
      if (!((__result.self.minWindowEndDelta >= 0))) {
        postViolations.push("[AppointmentSchedulerSystem.updateAvailability] post violated: self.minWindowEndDelta >= 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystem.updateAvailability (async). User supplies this. */
export type AppointmentSchedulerSystemUpdateAvailabilityAsyncImpl = (self: AppointmentSchedulerSystem, clinicianId: string, newWindow: AvailabilityWindow) => Promise<{ self: AppointmentSchedulerSystem; modified: { appointments: unknown } }>;

/** Contract-checking wrapper for AppointmentSchedulerSystem.updateAvailability (async). */
export function wrapAppointmentSchedulerSystemUpdateAvailabilityAsync(impl: AppointmentSchedulerSystemUpdateAvailabilityAsyncImpl): (self: AppointmentSchedulerSystem, clinicianId: string, newWindow: AvailabilityWindow) => Promise<AppointmentSchedulerSystem> {
  return async (self, clinicianId, newWindow) => {
    const preViolations: string[] = [];
    if (!((clinicianId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.updateAvailability] pre violated: clinicianId <> null");
    }
    if (!((newWindow !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.updateAvailability] pre violated: newWindow <> null");
    }
    if (!((newWindow.windowStartEpoch >= 0))) {
      preViolations.push("[AppointmentSchedulerSystem.updateAvailability] pre violated: newWindow.windowStartEpoch >= 0.0");
    }
    if (!((newWindow.windowEndEpoch > newWindow.windowStartEpoch))) {
      preViolations.push("[AppointmentSchedulerSystem.updateAvailability] pre violated: newWindow.windowEndEpoch > newWindow.windowStartEpoch");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, clinicianId, newWindow);
      const postViolations: string[] = [];
      if (!((__result.self.minWindowEndDelta >= 0))) {
        postViolations.push("[AppointmentSchedulerSystem.updateAvailability] post violated: self.minWindowEndDelta >= 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystem.recordLateFeePayment. User supplies this. */
export type AppointmentSchedulerSystemRecordLateFeePaymentImpl = (self: AppointmentSchedulerSystem, feeEventId: string, amount: number) => { self: AppointmentSchedulerSystem; modified: { lateFeeEvents: unknown } };

/** Contract-checking wrapper for AppointmentSchedulerSystem.recordLateFeePayment. */
export function wrapAppointmentSchedulerSystemRecordLateFeePayment(impl: AppointmentSchedulerSystemRecordLateFeePaymentImpl): (self: AppointmentSchedulerSystem, feeEventId: string, amount: number) => AppointmentSchedulerSystem {
  return (self, feeEventId, amount) => {
    const preViolations: string[] = [];
    if (!((feeEventId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.recordLateFeePayment] pre violated: feeEventId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[AppointmentSchedulerSystem.recordLateFeePayment] pre violated: amount >= 0.0");
    }
    if (!(((self.lateFeeEvents).size > 0))) {
      preViolations.push("[AppointmentSchedulerSystem.recordLateFeePayment] pre violated: self.lateFeeEvents->size() > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lateFeeEvents": self.lateFeeEvents,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, feeEventId, amount);
      const postViolations: string[] = [];
      if (!(((__result.self.lateFeeEvents).size >= (__pre["self.lateFeeEvents"]).size))) {
        postViolations.push("[AppointmentSchedulerSystem.recordLateFeePayment] post violated: self.lateFeeEvents->size() >= self.lateFeeEvents@pre->size()");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AppointmentSchedulerSystem.recordLateFeePayment (async). User supplies this. */
export type AppointmentSchedulerSystemRecordLateFeePaymentAsyncImpl = (self: AppointmentSchedulerSystem, feeEventId: string, amount: number) => Promise<{ self: AppointmentSchedulerSystem; modified: { lateFeeEvents: unknown } }>;

/** Contract-checking wrapper for AppointmentSchedulerSystem.recordLateFeePayment (async). */
export function wrapAppointmentSchedulerSystemRecordLateFeePaymentAsync(impl: AppointmentSchedulerSystemRecordLateFeePaymentAsyncImpl): (self: AppointmentSchedulerSystem, feeEventId: string, amount: number) => Promise<AppointmentSchedulerSystem> {
  return async (self, feeEventId, amount) => {
    const preViolations: string[] = [];
    if (!((feeEventId !== null))) {
      preViolations.push("[AppointmentSchedulerSystem.recordLateFeePayment] pre violated: feeEventId <> null");
    }
    if (!((amount >= 0))) {
      preViolations.push("[AppointmentSchedulerSystem.recordLateFeePayment] pre violated: amount >= 0.0");
    }
    if (!(((self.lateFeeEvents).size > 0))) {
      preViolations.push("[AppointmentSchedulerSystem.recordLateFeePayment] pre violated: self.lateFeeEvents->size() > 0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.lateFeeEvents": self.lateFeeEvents,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, feeEventId, amount);
      const postViolations: string[] = [];
      if (!(((__result.self.lateFeeEvents).size >= (__pre["self.lateFeeEvents"]).size))) {
        postViolations.push("[AppointmentSchedulerSystem.recordLateFeePayment] post violated: self.lateFeeEvents->size() >= self.lateFeeEvents@pre->size()");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for NoDoubleBookingCommitment commitments. */
export class NoDoubleBookingCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<NoDoubleBookingCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a NoDoubleBookingCommitment — the typed wrapper guarantees that since
    // `register` only accepts NoDoubleBookingCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: NoDoubleBookingCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: NoDoubleBookingCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: NoDoubleBookingCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: NoDoubleBookingCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<NoDoubleBookingCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<NoDoubleBookingCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AvailabilityRespectCommitment commitments. */
export class AvailabilityRespectCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AvailabilityRespectCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AvailabilityRespectCommitment — the typed wrapper guarantees that since
    // `register` only accepts AvailabilityRespectCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AvailabilityRespectCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AvailabilityRespectCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AvailabilityRespectCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AvailabilityRespectCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AvailabilityRespectCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AvailabilityRespectCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for LateCancellationFeeCommitment commitments. */
export class LateCancellationFeeCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<LateCancellationFeeCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a LateCancellationFeeCommitment — the typed wrapper guarantees that since
    // `register` only accepts LateCancellationFeeCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: LateCancellationFeeCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: LateCancellationFeeCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: LateCancellationFeeCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: LateCancellationFeeCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<LateCancellationFeeCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<LateCancellationFeeCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for PatientConflictPreventionCommitment commitments. */
export class PatientConflictPreventionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PatientConflictPreventionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PatientConflictPreventionCommitment — the typed wrapper guarantees that since
    // `register` only accepts PatientConflictPreventionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PatientConflictPreventionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PatientConflictPreventionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PatientConflictPreventionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PatientConflictPreventionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PatientConflictPreventionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PatientConflictPreventionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

