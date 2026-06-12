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
/** Identity type for HospitalITDepartment. Runtime: string. Compile-time: branded. */
export type HospitalITDepartmentId = string & { readonly __brand: "HospitalITDepartmentId" };
/** Identity type for VitalSignsMonitorVendor. Runtime: string. Compile-time: branded. */
export type VitalSignsMonitorVendorId = string & { readonly __brand: "VitalSignsMonitorVendorId" };
/** Identity type for ImplausibleReadingRejectionCommitment. Runtime: string. Compile-time: branded. */
export type ImplausibleReadingRejectionCommitmentId = string & { readonly __brand: "ImplausibleReadingRejectionCommitmentId" };
/** Identity type for AlarmLatencyCommitment. Runtime: string. Compile-time: branded. */
export type AlarmLatencyCommitmentId = string & { readonly __brand: "AlarmLatencyCommitmentId" };
/** Identity type for SensorDisconnectDetectionCommitment. Runtime: string. Compile-time: branded. */
export type SensorDisconnectDetectionCommitmentId = string & { readonly __brand: "SensorDisconnectDetectionCommitmentId" };
/** Identity type for AlarmSilenceAutoRearmCommitment. Runtime: string. Compile-time: branded. */
export type AlarmSilenceAutoRearmCommitmentId = string & { readonly __brand: "AlarmSilenceAutoRearmCommitmentId" };
/** Identity type for MonitorVisionCommitment. Runtime: string. Compile-time: branded. */
export type MonitorVisionCommitmentId = string & { readonly __brand: "MonitorVisionCommitmentId" };
/** Identity type for HeartRateReading. Runtime: string. Compile-time: branded. */
export type HeartRateReadingId = string & { readonly __brand: "HeartRateReadingId" };
/** Identity type for AlarmThreshold. Runtime: string. Compile-time: branded. */
export type AlarmThresholdId = string & { readonly __brand: "AlarmThresholdId" };
/** Identity type for SilencedState. Runtime: string. Compile-time: branded. */
export type SilencedStateId = string & { readonly __brand: "SilencedStateId" };
/** Identity type for SensorDisconnectEvent. Runtime: string. Compile-time: branded. */
export type SensorDisconnectEventId = string & { readonly __brand: "SensorDisconnectEventId" };
/** Identity type for NormalMonitoringFlow. Runtime: string. Compile-time: branded. */
export type NormalMonitoringFlowId = string & { readonly __brand: "NormalMonitoringFlowId" };
/** Identity type for ThresholdAlarmFlow. Runtime: string. Compile-time: branded. */
export type ThresholdAlarmFlowId = string & { readonly __brand: "ThresholdAlarmFlowId" };
/** Identity type for AlarmSilenceRearmFlow. Runtime: string. Compile-time: branded. */
export type AlarmSilenceRearmFlowId = string & { readonly __brand: "AlarmSilenceRearmFlowId" };
/** Identity type for SensorDisconnectFlow. Runtime: string. Compile-time: branded. */
export type SensorDisconnectFlowId = string & { readonly __brand: "SensorDisconnectFlowId" };
/** Identity type for VitalSignsMonitorSystem. Runtime: string. Compile-time: branded. */
export type VitalSignsMonitorSystemId = string & { readonly __brand: "VitalSignsMonitorSystemId" };

// ─── Interfaces ───

/** @stereotype <<Category>> */
export interface Iec62304ClassC {
  readonly standardRef: string;
  readonly softwareClass: string;
  readonly hazardAnalysisRef: string;
  readonly verificationPlanRef: string;
}

/** @stereotype <<Category>> */
export interface Iec60601Safety {
  readonly standardRef: string;
  readonly classificationMOOP: string;
  readonly classificationMOPP: string;
  readonly essentialPerformanceRef: string;
}

/** @stereotype <<Category>> */
export interface GdprArticle5Compliant {
  readonly regulationRef: string;
  readonly dataMinimisationPolicy: string;
  readonly retentionLimitDays: number;
  readonly pseudonymisationApplied: boolean;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleHeartRate {
}

/** @stereotype <<Category>> */
export interface ValidAlarmThresholdRange {
}

/** @stereotype <<Category>> */
export interface ClinicalSilenceCeiling {
}

/** @stereotype <<Subkind>> */
export interface VitalSignsMonitorSystemFormalized extends VitalSignsMonitorSystem {
  readonly faultDetected: boolean;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly tag: string;
  readonly description: string;
  readonly rationale: string;
  readonly linkedRequirementId: string;
}

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly bedId: string;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly name: string;
  readonly clinicianRole: string;
}

/** @stereotype <<Agent>> */
export interface HospitalITDepartment {
  readonly itDeptId: HospitalITDepartmentId;
  readonly name: string;
}

/** @stereotype <<Agent>> */
export interface VitalSignsMonitorVendor {
  readonly vendorId: VitalSignsMonitorVendorId;
  readonly name: string;
  readonly regulatoryBodyRef: string;
}

/** @stereotype <<Commitment>> */
export interface ImplausibleReadingRejectionCommitment {
  readonly commitmentId: ImplausibleReadingRejectionCommitmentId;
  readonly plausibilityLowerBpm: number;
  readonly plausibilityUpperBpm: number;
}

/** @stereotype <<Commitment>> */
export interface AlarmLatencyCommitment {
  readonly commitmentId: AlarmLatencyCommitmentId;
  readonly maxAlarmLatencySeconds: number;
}

/** @stereotype <<Commitment>> */
export interface SensorDisconnectDetectionCommitment {
  readonly commitmentId: SensorDisconnectDetectionCommitmentId;
  readonly disconnectTimeoutSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface AlarmSilenceAutoRearmCommitment {
  readonly commitmentId: AlarmSilenceAutoRearmCommitmentId;
  readonly maxSilenceDurationSeconds: number;
}

/** @stereotype <<Commitment>> */
export interface MonitorVisionCommitment {
  readonly commitmentId: MonitorVisionCommitmentId;
  readonly description: string;
}

/** @stereotype <<Category>> */
export interface HeartRatePlausibilityConstraints {
}

/** @stereotype <<Category>> */
export interface AlarmThresholdConstraints {
}

/** @stereotype <<Category>> */
export interface SilenceDurationConstraints {
}

/** @stereotype <<Kind>> */
export interface HeartRateReading {
  readonly readingId: HeartRateReadingId;
  readonly valueBpm: number;
  readonly timestampMs: number;
  readonly sourcePatientId: string;
}

/** @stereotype <<Kind>> */
export interface AlarmThreshold {
  readonly thresholdId: AlarmThresholdId;
  readonly vitalSign: string;
  readonly lowBpm: number;
  readonly highBpm: number;
}

/** @stereotype <<Kind>> */
export interface SilencedState {
  readonly silenceId: SilencedStateId;
  readonly acknowledgedByClinicianId: string;
  readonly silenceStartTimestampMs: number;
  readonly maxSilenceDurationSeconds: number;
}

/** @stereotype <<Kind>> */
export interface SensorDisconnectEvent {
  readonly disconnectEventId: SensorDisconnectEventId;
  readonly patientId: string;
  readonly signalLostTimestampMs: number;
  readonly signalRestoredTimestampMs: number;
  readonly durationSeconds: number;
}

/** @stereotype <<Happening>> */
export interface NormalMonitoringFlow {
  readonly flowId: NormalMonitoringFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface ThresholdAlarmFlow {
  readonly flowId: ThresholdAlarmFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly thresholdCrossedTimestampMs: number;
  readonly alarmRaisedTimestampMs: number;
}

/** @stereotype <<Happening>> */
export interface AlarmSilenceRearmFlow {
  readonly flowId: AlarmSilenceRearmFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly silenceStartTimestampMs: number;
  readonly rearmTimestampMs: number;
}

/** @stereotype <<Happening>> */
export interface SensorDisconnectFlow {
  readonly flowId: SensorDisconnectFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly signalLostTimestampMs: number;
  readonly alarmRaisedTimestampMs: number;
}

/** @stereotype <<Kind>> */
export interface VitalSignsMonitorSystem {
  readonly systemId: VitalSignsMonitorSystemId;
  readonly currentHeartRateBpm: number;
  readonly lastValidHeartRateBpm: number;
  readonly isDisplayingReading: boolean;
  readonly alarmLowBpm: number;
  readonly alarmHighBpm: number;
  readonly alarmActive: boolean;
  readonly alarmSilenced: boolean;
  readonly alarmSilenceElapsedSeconds: number;
  readonly sensorConnected: boolean;
  readonly signalAbsentSeconds: number;
  readonly sensorDisconnectAlarmActive: boolean;
  readonly rejectedReadingCount: number;
  readonly plausibilityLowerBpm: number;
  readonly plausibilityUpperBpm: number;
  readonly maxAlarmLatencySeconds: number;
  readonly disconnectTimeoutSeconds: number;
  readonly maxSilenceDurationSeconds: number;
}


// ─── Factory functions ───

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  tag: string;
  description: string;
  rationale: string;
  linkedRequirementId: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    tag: data.tag,
    description: data.description,
    rationale: data.rationale,
    linkedRequirementId: data.linkedRequirementId,
  };
}

export function makePatient(data: {
  patientId: string;
  bedId: string;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    bedId: data.bedId,
  };
}

export function makeClinician(data: {
  clinicianId: string;
  name: string;
  clinicianRole: string;
}): Clinician {
  return {
    clinicianId: data.clinicianId as ClinicianId,
    name: data.name,
    clinicianRole: data.clinicianRole,
  };
}

export function makeHospitalITDepartment(data: {
  itDeptId: string;
  name: string;
}): HospitalITDepartment {
  return {
    itDeptId: data.itDeptId as HospitalITDepartmentId,
    name: data.name,
  };
}

export function makeVitalSignsMonitorVendor(data: {
  vendorId: string;
  name: string;
  regulatoryBodyRef: string;
}): VitalSignsMonitorVendor {
  return {
    vendorId: data.vendorId as VitalSignsMonitorVendorId,
    name: data.name,
    regulatoryBodyRef: data.regulatoryBodyRef,
  };
}

export function makeImplausibleReadingRejectionCommitment(data: {
  commitmentId: string;
  plausibilityLowerBpm: number;
  plausibilityUpperBpm: number;
}): ImplausibleReadingRejectionCommitment {
  return {
    commitmentId: data.commitmentId as ImplausibleReadingRejectionCommitmentId,
    plausibilityLowerBpm: data.plausibilityLowerBpm,
    plausibilityUpperBpm: data.plausibilityUpperBpm,
  };
}

export function makeAlarmLatencyCommitment(data: {
  commitmentId: string;
  maxAlarmLatencySeconds: number;
}): AlarmLatencyCommitment {
  return {
    commitmentId: data.commitmentId as AlarmLatencyCommitmentId,
    maxAlarmLatencySeconds: data.maxAlarmLatencySeconds,
  };
}

export function makeSensorDisconnectDetectionCommitment(data: {
  commitmentId: string;
  disconnectTimeoutSeconds: number;
}): SensorDisconnectDetectionCommitment {
  return {
    commitmentId: data.commitmentId as SensorDisconnectDetectionCommitmentId,
    disconnectTimeoutSeconds: data.disconnectTimeoutSeconds,
  };
}

export function makeAlarmSilenceAutoRearmCommitment(data: {
  commitmentId: string;
  maxSilenceDurationSeconds: number;
}): AlarmSilenceAutoRearmCommitment {
  return {
    commitmentId: data.commitmentId as AlarmSilenceAutoRearmCommitmentId,
    maxSilenceDurationSeconds: data.maxSilenceDurationSeconds,
  };
}

export function makeMonitorVisionCommitment(data: {
  commitmentId: string;
  description: string;
}): MonitorVisionCommitment {
  return {
    commitmentId: data.commitmentId as MonitorVisionCommitmentId,
    description: data.description,
  };
}

export function makeHeartRateReading(data: {
  readingId: string;
  valueBpm: number;
  timestampMs: number;
  sourcePatientId: string;
}): HeartRateReading {
  return {
    readingId: data.readingId as HeartRateReadingId,
    valueBpm: data.valueBpm,
    timestampMs: data.timestampMs,
    sourcePatientId: data.sourcePatientId,
  };
}

export function makeAlarmThreshold(data: {
  thresholdId: string;
  vitalSign: string;
  lowBpm: number;
  highBpm: number;
}): AlarmThreshold {
  return {
    thresholdId: data.thresholdId as AlarmThresholdId,
    vitalSign: data.vitalSign,
    lowBpm: data.lowBpm,
    highBpm: data.highBpm,
  };
}

export function makeSilencedState(data: {
  silenceId: string;
  acknowledgedByClinicianId: string;
  silenceStartTimestampMs: number;
  maxSilenceDurationSeconds: number;
}): SilencedState {
  return {
    silenceId: data.silenceId as SilencedStateId,
    acknowledgedByClinicianId: data.acknowledgedByClinicianId,
    silenceStartTimestampMs: data.silenceStartTimestampMs,
    maxSilenceDurationSeconds: data.maxSilenceDurationSeconds,
  };
}

export function makeSensorDisconnectEvent(data: {
  disconnectEventId: string;
  patientId: string;
  signalLostTimestampMs: number;
  signalRestoredTimestampMs: number;
  durationSeconds: number;
}): SensorDisconnectEvent {
  return {
    disconnectEventId: data.disconnectEventId as SensorDisconnectEventId,
    patientId: data.patientId,
    signalLostTimestampMs: data.signalLostTimestampMs,
    signalRestoredTimestampMs: data.signalRestoredTimestampMs,
    durationSeconds: data.durationSeconds,
  };
}

export function makeNormalMonitoringFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): NormalMonitoringFlow {
  return {
    flowId: data.flowId as NormalMonitoringFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeThresholdAlarmFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  thresholdCrossedTimestampMs: number;
  alarmRaisedTimestampMs: number;
}): ThresholdAlarmFlow {
  return {
    flowId: data.flowId as ThresholdAlarmFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    thresholdCrossedTimestampMs: data.thresholdCrossedTimestampMs,
    alarmRaisedTimestampMs: data.alarmRaisedTimestampMs,
  };
}

export function makeAlarmSilenceRearmFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  silenceStartTimestampMs: number;
  rearmTimestampMs: number;
}): AlarmSilenceRearmFlow {
  return {
    flowId: data.flowId as AlarmSilenceRearmFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    silenceStartTimestampMs: data.silenceStartTimestampMs,
    rearmTimestampMs: data.rearmTimestampMs,
  };
}

export function makeSensorDisconnectFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  signalLostTimestampMs: number;
  alarmRaisedTimestampMs: number;
}): SensorDisconnectFlow {
  return {
    flowId: data.flowId as SensorDisconnectFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    signalLostTimestampMs: data.signalLostTimestampMs,
    alarmRaisedTimestampMs: data.alarmRaisedTimestampMs,
  };
}

export function makeVitalSignsMonitorSystem(data: {
  systemId: string;
  currentHeartRateBpm: number;
  lastValidHeartRateBpm: number;
  isDisplayingReading: boolean;
  alarmLowBpm: number;
  alarmHighBpm: number;
  alarmActive: boolean;
  alarmSilenced: boolean;
  alarmSilenceElapsedSeconds: number;
  sensorConnected: boolean;
  signalAbsentSeconds: number;
  sensorDisconnectAlarmActive: boolean;
  rejectedReadingCount: number;
  plausibilityLowerBpm: number;
  plausibilityUpperBpm: number;
  maxAlarmLatencySeconds: number;
  disconnectTimeoutSeconds: number;
  maxSilenceDurationSeconds: number;
}): VitalSignsMonitorSystem {
  return {
    systemId: data.systemId as VitalSignsMonitorSystemId,
    currentHeartRateBpm: data.currentHeartRateBpm,
    lastValidHeartRateBpm: data.lastValidHeartRateBpm,
    isDisplayingReading: data.isDisplayingReading,
    alarmLowBpm: data.alarmLowBpm,
    alarmHighBpm: data.alarmHighBpm,
    alarmActive: data.alarmActive,
    alarmSilenced: data.alarmSilenced,
    alarmSilenceElapsedSeconds: data.alarmSilenceElapsedSeconds,
    sensorConnected: data.sensorConnected,
    signalAbsentSeconds: data.signalAbsentSeconds,
    sensorDisconnectAlarmActive: data.sensorDisconnectAlarmActive,
    rejectedReadingCount: data.rejectedReadingCount,
    plausibilityLowerBpm: data.plausibilityLowerBpm,
    plausibilityUpperBpm: data.plausibilityUpperBpm,
    maxAlarmLatencySeconds: data.maxAlarmLatencySeconds,
    disconnectTimeoutSeconds: data.disconnectTimeoutSeconds,
    maxSilenceDurationSeconds: data.maxSilenceDurationSeconds,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Iec62304ClassC. Returns empty array when valid. */
export function validateIec62304ClassC(instance: Iec62304ClassC): readonly string[] {
  const violations: string[] = [];
  if (!((instance.standardRef !== null))) {
    violations.push("[Iec62304ClassC] invariant violated: self.standardRef <> null");
  }
  if (!((instance.softwareClass !== null))) {
    violations.push("[Iec62304ClassC] invariant violated: self.softwareClass <> null");
  }
  if (!((instance.hazardAnalysisRef !== null))) {
    violations.push("[Iec62304ClassC] invariant violated: self.hazardAnalysisRef <> null");
  }
  if (!((instance.verificationPlanRef !== null))) {
    violations.push("[Iec62304ClassC] invariant violated: self.verificationPlanRef <> null");
  }
  return violations;
}

/** Runtime invariant check for Iec60601Safety. Returns empty array when valid. */
export function validateIec60601Safety(instance: Iec60601Safety): readonly string[] {
  const violations: string[] = [];
  if (!((instance.standardRef !== null))) {
    violations.push("[Iec60601Safety] invariant violated: self.standardRef <> null");
  }
  if (!((instance.essentialPerformanceRef !== null))) {
    violations.push("[Iec60601Safety] invariant violated: self.essentialPerformanceRef <> null");
  }
  return violations;
}

/** Runtime invariant check for GdprArticle5Compliant. Returns empty array when valid. */
export function validateGdprArticle5Compliant(instance: GdprArticle5Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.regulationRef !== null))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.regulationRef <> null");
  }
  if (!((instance.retentionLimitDays > 0))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.retentionLimitDays > 0");
  }
  if (!((instance.retentionLimitDays <= 730))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.retentionLimitDays <= 730");
  }
  if (!((instance.pseudonymisationApplied === true))) {
    violations.push("[GdprArticle5Compliant] invariant violated: self.pseudonymisationApplied = true");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleHeartRate. Returns empty array when valid. */
export function validatePhysicallyPlausibleHeartRate(instance: PhysicallyPlausibleHeartRate): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.valueBpm >= 20.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.valueBpm <= 250.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ValidAlarmThresholdRange. Returns empty array when valid. */
export function validateValidAlarmThresholdRange(instance: ValidAlarmThresholdRange): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.lowBpm >= 20.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.highBpm <= 250.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.highBpm > bearer.lowBpm — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for ClinicalSilenceCeiling. Returns empty array when valid. */
export function validateClinicalSilenceCeiling(instance: ClinicalSilenceCeiling): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSilenceDurationSeconds > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSilenceDurationSeconds <= 120.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for VitalSignsMonitorSystemFormalized. Returns empty array when valid. */
export function validateVitalSignsMonitorSystemFormalized(instance: VitalSignsMonitorSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!(((instance.faultDetected === true) || (instance.faultDetected === false)))) {
    violations.push("[VitalSignsMonitorSystemFormalized] invariant violated: self.faultDetected = true or self.faultDetected = false");
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
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  return violations;
}

/** Runtime invariant check for Patient. Returns empty array when valid. */
export function validatePatient(instance: Patient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.patientId !== null))) {
    violations.push("[Patient] invariant violated: self.patientId <> null");
  }
  if (!((instance.bedId !== null))) {
    violations.push("[Patient] invariant violated: self.bedId <> null");
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

/** Runtime invariant check for HospitalITDepartment. Returns empty array when valid. */
export function validateHospitalITDepartment(instance: HospitalITDepartment): readonly string[] {
  const violations: string[] = [];
  if (!((instance.itDeptId !== null))) {
    violations.push("[HospitalITDepartment] invariant violated: self.itDeptId <> null");
  }
  return violations;
}

/** Runtime invariant check for VitalSignsMonitorVendor. Returns empty array when valid. */
export function validateVitalSignsMonitorVendor(instance: VitalSignsMonitorVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[VitalSignsMonitorVendor] invariant violated: self.vendorId <> null");
  }
  if (!((instance.name !== null))) {
    violations.push("[VitalSignsMonitorVendor] invariant violated: self.name <> null");
  }
  return violations;
}

/** Runtime invariant check for HeartRatePlausibilityConstraints. Returns empty array when valid. */
export function validateHeartRatePlausibilityConstraints(instance: HeartRatePlausibilityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.valueBpm >= 20.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.valueBpm <= 250.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AlarmThresholdConstraints. Returns empty array when valid. */
export function validateAlarmThresholdConstraints(instance: AlarmThresholdConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.lowBpm >= 20.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.highBpm <= 250.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.highBpm > bearer.lowBpm — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SilenceDurationConstraints. Returns empty array when valid. */
export function validateSilenceDurationConstraints(instance: SilenceDurationConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSilenceDurationSeconds > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSilenceDurationSeconds <= 120.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for HeartRateReading. Returns empty array when valid. */
export function validateHeartRateReading(instance: HeartRateReading): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[HeartRateReading] invariant violated: self.readingId <> null");
  }
  if (!((instance.valueBpm >= 0))) {
    violations.push("[HeartRateReading] invariant violated: self.valueBpm >= 0.0");
  }
  if (!((instance.timestampMs >= 0))) {
    violations.push("[HeartRateReading] invariant violated: self.timestampMs >= 0");
  }
  return violations;
}

/** Runtime invariant check for AlarmThreshold. Returns empty array when valid. */
export function validateAlarmThreshold(instance: AlarmThreshold): readonly string[] {
  const violations: string[] = [];
  if (!((instance.thresholdId !== null))) {
    violations.push("[AlarmThreshold] invariant violated: self.thresholdId <> null");
  }
  if (!((instance.vitalSign !== null))) {
    violations.push("[AlarmThreshold] invariant violated: self.vitalSign <> null");
  }
  if (!((instance.lowBpm >= 0))) {
    violations.push("[AlarmThreshold] invariant violated: self.lowBpm >= 0.0");
  }
  if (!((instance.highBpm > instance.lowBpm))) {
    violations.push("[AlarmThreshold] invariant violated: self.highBpm > self.lowBpm");
  }
  return violations;
}

/** Runtime invariant check for SilencedState. Returns empty array when valid. */
export function validateSilencedState(instance: SilencedState): readonly string[] {
  const violations: string[] = [];
  if (!((instance.silenceId !== null))) {
    violations.push("[SilencedState] invariant violated: self.silenceId <> null");
  }
  if (!((instance.acknowledgedByClinicianId !== null))) {
    violations.push("[SilencedState] invariant violated: self.acknowledgedByClinicianId <> null");
  }
  if (!((instance.silenceStartTimestampMs >= 0))) {
    violations.push("[SilencedState] invariant violated: self.silenceStartTimestampMs >= 0");
  }
  if (!((instance.maxSilenceDurationSeconds > 0))) {
    violations.push("[SilencedState] invariant violated: self.maxSilenceDurationSeconds > 0.0");
  }
  if (!((instance.maxSilenceDurationSeconds <= 120))) {
    violations.push("[SilencedState] invariant violated: self.maxSilenceDurationSeconds <= 120.0");
  }
  return violations;
}

/** Runtime invariant check for SensorDisconnectEvent. Returns empty array when valid. */
export function validateSensorDisconnectEvent(instance: SensorDisconnectEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.disconnectEventId !== null))) {
    violations.push("[SensorDisconnectEvent] invariant violated: self.disconnectEventId <> null");
  }
  if (!((instance.patientId !== null))) {
    violations.push("[SensorDisconnectEvent] invariant violated: self.patientId <> null");
  }
  if (!((instance.signalLostTimestampMs >= 0))) {
    violations.push("[SensorDisconnectEvent] invariant violated: self.signalLostTimestampMs >= 0");
  }
  if (!((instance.durationSeconds >= 0))) {
    violations.push("[SensorDisconnectEvent] invariant violated: self.durationSeconds >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for NormalMonitoringFlow. Returns empty array when valid. */
export function validateNormalMonitoringFlow(instance: NormalMonitoringFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[NormalMonitoringFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for ThresholdAlarmFlow. Returns empty array when valid. */
export function validateThresholdAlarmFlow(instance: ThresholdAlarmFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[ThresholdAlarmFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.alarmRaisedTimestampMs >= instance.thresholdCrossedTimestampMs))) {
    violations.push("[ThresholdAlarmFlow] invariant violated: self.alarmRaisedTimestampMs >= self.thresholdCrossedTimestampMs");
  }
  return violations;
}

/** Runtime invariant check for AlarmSilenceRearmFlow. Returns empty array when valid. */
export function validateAlarmSilenceRearmFlow(instance: AlarmSilenceRearmFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AlarmSilenceRearmFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.rearmTimestampMs >= instance.silenceStartTimestampMs))) {
    violations.push("[AlarmSilenceRearmFlow] invariant violated: self.rearmTimestampMs >= self.silenceStartTimestampMs");
  }
  return violations;
}

/** Runtime invariant check for SensorDisconnectFlow. Returns empty array when valid. */
export function validateSensorDisconnectFlow(instance: SensorDisconnectFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorDisconnectFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.alarmRaisedTimestampMs >= instance.signalLostTimestampMs))) {
    violations.push("[SensorDisconnectFlow] invariant violated: self.alarmRaisedTimestampMs >= self.signalLostTimestampMs");
  }
  return violations;
}

/** Runtime invariant check for VitalSignsMonitorSystem. Returns empty array when valid. */
export function validateVitalSignsMonitorSystem(instance: VitalSignsMonitorSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.plausibilityLowerBpm === 20))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.plausibilityLowerBpm = 20.0");
  }
  if (!((instance.plausibilityUpperBpm === 250))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.plausibilityUpperBpm = 250.0");
  }
  if (!((instance.plausibilityLowerBpm > 0))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.plausibilityLowerBpm > 0.0");
  }
  if (!((instance.plausibilityUpperBpm > instance.plausibilityLowerBpm))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.plausibilityUpperBpm > self.plausibilityLowerBpm");
  }
  if (!((instance.alarmLowBpm >= instance.plausibilityLowerBpm))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.alarmLowBpm >= self.plausibilityLowerBpm");
  }
  if (!((instance.alarmHighBpm <= instance.plausibilityUpperBpm))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.alarmHighBpm <= self.plausibilityUpperBpm");
  }
  if (!((instance.alarmHighBpm > instance.alarmLowBpm))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.alarmHighBpm > self.alarmLowBpm");
  }
  if (!((instance.maxAlarmLatencySeconds > 0))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.maxAlarmLatencySeconds > 0.0");
  }
  if (!((instance.maxAlarmLatencySeconds <= 2))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.maxAlarmLatencySeconds <= 2.0");
  }
  if (!((instance.disconnectTimeoutSeconds > 0))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.disconnectTimeoutSeconds > 0.0");
  }
  if (!((instance.disconnectTimeoutSeconds <= 5))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.disconnectTimeoutSeconds <= 5.0");
  }
  if (!((instance.maxSilenceDurationSeconds > 0))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.maxSilenceDurationSeconds > 0.0");
  }
  if (!((instance.maxSilenceDurationSeconds <= 120))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.maxSilenceDurationSeconds <= 120.0");
  }
  if (!((instance.rejectedReadingCount >= 0))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.rejectedReadingCount >= 0");
  }
  if (!((instance.signalAbsentSeconds >= 0))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.signalAbsentSeconds >= 0.0");
  }
  if (!((instance.alarmSilenceElapsedSeconds >= 0))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.alarmSilenceElapsedSeconds >= 0.0");
  }
  if (!((instance.currentHeartRateBpm >= 0))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.currentHeartRateBpm >= 0.0");
  }
  if (!((instance.lastValidHeartRateBpm >= 0))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.lastValidHeartRateBpm >= 0.0");
  }
  if (!((!((instance.alarmSilenced === true)) || (instance.alarmActive === true)))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.alarmSilenced = true implies self.alarmActive = true");
  }
  if (!((instance.alarmSilenceElapsedSeconds <= instance.maxSilenceDurationSeconds))) {
    violations.push("[VitalSignsMonitorSystem] invariant violated: self.alarmSilenceElapsedSeconds <= self.maxSilenceDurationSeconds");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for VitalSignsMonitorSystemFormalized.guardImplausibleReading. User supplies this. */
export type VitalSignsMonitorSystemFormalizedGuardImplausibleReadingImpl = (self: VitalSignsMonitorSystemFormalized, valueBpm: number) => { self: VitalSignsMonitorSystemFormalized; modified: { rejectedReadingCount: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystemFormalized.guardImplausibleReading. */
export function wrapVitalSignsMonitorSystemFormalizedGuardImplausibleReading(impl: VitalSignsMonitorSystemFormalizedGuardImplausibleReadingImpl): (self: VitalSignsMonitorSystemFormalized, valueBpm: number) => VitalSignsMonitorSystemFormalized {
  return (self, valueBpm) => {
    const preViolations: string[] = [];
    if (!(((valueBpm < self.plausibilityLowerBpm) || (valueBpm > self.plausibilityUpperBpm)))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.guardImplausibleReading] pre violated: valueBpm < self.plausibilityLowerBpm\n         or valueBpm > self.plausibilityUpperBpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.isDisplayingReading": self.isDisplayingReading,
      "self.currentHeartRateBpm": self.currentHeartRateBpm,
      "self.rejectedReadingCount": self.rejectedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, valueBpm);
      const postViolations: string[] = [];
      if (!((__result.self.isDisplayingReading === __pre["self.isDisplayingReading"]))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.guardImplausibleReading] post violated: self.isDisplayingReading = self.isDisplayingReading@pre");
      }
      if (!((__result.self.currentHeartRateBpm === __pre["self.currentHeartRateBpm"]))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.guardImplausibleReading] post violated: self.currentHeartRateBpm = self.currentHeartRateBpm@pre");
      }
      if (!((__result.self.rejectedReadingCount === (__pre["self.rejectedReadingCount"] + 1)))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.guardImplausibleReading] post violated: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystemFormalized.guardImplausibleReading (async). User supplies this. */
export type VitalSignsMonitorSystemFormalizedGuardImplausibleReadingAsyncImpl = (self: VitalSignsMonitorSystemFormalized, valueBpm: number) => Promise<{ self: VitalSignsMonitorSystemFormalized; modified: { rejectedReadingCount: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystemFormalized.guardImplausibleReading (async). */
export function wrapVitalSignsMonitorSystemFormalizedGuardImplausibleReadingAsync(impl: VitalSignsMonitorSystemFormalizedGuardImplausibleReadingAsyncImpl): (self: VitalSignsMonitorSystemFormalized, valueBpm: number) => Promise<VitalSignsMonitorSystemFormalized> {
  return async (self, valueBpm) => {
    const preViolations: string[] = [];
    if (!(((valueBpm < self.plausibilityLowerBpm) || (valueBpm > self.plausibilityUpperBpm)))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.guardImplausibleReading] pre violated: valueBpm < self.plausibilityLowerBpm\n         or valueBpm > self.plausibilityUpperBpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.isDisplayingReading": self.isDisplayingReading,
      "self.currentHeartRateBpm": self.currentHeartRateBpm,
      "self.rejectedReadingCount": self.rejectedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, valueBpm);
      const postViolations: string[] = [];
      if (!((__result.self.isDisplayingReading === __pre["self.isDisplayingReading"]))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.guardImplausibleReading] post violated: self.isDisplayingReading = self.isDisplayingReading@pre");
      }
      if (!((__result.self.currentHeartRateBpm === __pre["self.currentHeartRateBpm"]))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.guardImplausibleReading] post violated: self.currentHeartRateBpm = self.currentHeartRateBpm@pre");
      }
      if (!((__result.self.rejectedReadingCount === (__pre["self.rejectedReadingCount"] + 1)))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.guardImplausibleReading] post violated: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling. User supplies this. */
export type VitalSignsMonitorSystemFormalizedEnforceAlarmLatencyCeilingImpl = (self: VitalSignsMonitorSystemFormalized, requestedLatencySeconds: number) => { self: VitalSignsMonitorSystemFormalized; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown; faultDetected: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling. */
export function wrapVitalSignsMonitorSystemFormalizedEnforceAlarmLatencyCeiling(impl: VitalSignsMonitorSystemFormalizedEnforceAlarmLatencyCeilingImpl): (self: VitalSignsMonitorSystemFormalized, requestedLatencySeconds: number) => VitalSignsMonitorSystemFormalized {
  return (self, requestedLatencySeconds) => {
    const preViolations: string[] = [];
    if (!((self.isDisplayingReading === true))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] pre violated: self.isDisplayingReading = true");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] pre violated: not self.alarmActive");
    }
    if (!((requestedLatencySeconds > self.maxAlarmLatencySeconds))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] pre violated: requestedLatencySeconds > self.maxAlarmLatencySeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedLatencySeconds);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] post violated: self.faultDetected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling (async). User supplies this. */
export type VitalSignsMonitorSystemFormalizedEnforceAlarmLatencyCeilingAsyncImpl = (self: VitalSignsMonitorSystemFormalized, requestedLatencySeconds: number) => Promise<{ self: VitalSignsMonitorSystemFormalized; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown; faultDetected: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling (async). */
export function wrapVitalSignsMonitorSystemFormalizedEnforceAlarmLatencyCeilingAsync(impl: VitalSignsMonitorSystemFormalizedEnforceAlarmLatencyCeilingAsyncImpl): (self: VitalSignsMonitorSystemFormalized, requestedLatencySeconds: number) => Promise<VitalSignsMonitorSystemFormalized> {
  return async (self, requestedLatencySeconds) => {
    const preViolations: string[] = [];
    if (!((self.isDisplayingReading === true))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] pre violated: self.isDisplayingReading = true");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] pre violated: not self.alarmActive");
    }
    if (!((requestedLatencySeconds > self.maxAlarmLatencySeconds))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] pre violated: requestedLatencySeconds > self.maxAlarmLatencySeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedLatencySeconds);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceAlarmLatencyCeiling] post violated: self.faultDetected = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystemFormalized.enforceSilenceCeiling. User supplies this. */
export type VitalSignsMonitorSystemFormalizedEnforceSilenceCeilingImpl = (self: VitalSignsMonitorSystemFormalized, elapsedSeconds: number) => { self: VitalSignsMonitorSystemFormalized; modified: { alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystemFormalized.enforceSilenceCeiling. */
export function wrapVitalSignsMonitorSystemFormalizedEnforceSilenceCeiling(impl: VitalSignsMonitorSystemFormalizedEnforceSilenceCeilingImpl): (self: VitalSignsMonitorSystemFormalized, elapsedSeconds: number) => VitalSignsMonitorSystemFormalized {
  return (self, elapsedSeconds) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] pre violated: self.alarmActive = true");
    }
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] pre violated: self.alarmSilenced = true");
    }
    if (!((elapsedSeconds > self.maxSilenceDurationSeconds))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] pre violated: elapsedSeconds > self.maxSilenceDurationSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, elapsedSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystemFormalized.enforceSilenceCeiling (async). User supplies this. */
export type VitalSignsMonitorSystemFormalizedEnforceSilenceCeilingAsyncImpl = (self: VitalSignsMonitorSystemFormalized, elapsedSeconds: number) => Promise<{ self: VitalSignsMonitorSystemFormalized; modified: { alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystemFormalized.enforceSilenceCeiling (async). */
export function wrapVitalSignsMonitorSystemFormalizedEnforceSilenceCeilingAsync(impl: VitalSignsMonitorSystemFormalizedEnforceSilenceCeilingAsyncImpl): (self: VitalSignsMonitorSystemFormalized, elapsedSeconds: number) => Promise<VitalSignsMonitorSystemFormalized> {
  return async (self, elapsedSeconds) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] pre violated: self.alarmActive = true");
    }
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] pre violated: self.alarmSilenced = true");
    }
    if (!((elapsedSeconds > self.maxSilenceDurationSeconds))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] pre violated: elapsedSeconds > self.maxSilenceDurationSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, elapsedSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceSilenceCeiling] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout. User supplies this. */
export type VitalSignsMonitorSystemFormalizedEnforceDisconnectTimeoutImpl = (self: VitalSignsMonitorSystemFormalized, absentSeconds: number) => { self: VitalSignsMonitorSystemFormalized; modified: { sensorConnected: unknown; sensorDisconnectAlarmActive: unknown; isDisplayingReading: unknown; signalAbsentSeconds: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout. */
export function wrapVitalSignsMonitorSystemFormalizedEnforceDisconnectTimeout(impl: VitalSignsMonitorSystemFormalizedEnforceDisconnectTimeoutImpl): (self: VitalSignsMonitorSystemFormalized, absentSeconds: number) => VitalSignsMonitorSystemFormalized {
  return (self, absentSeconds) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] pre violated: self.sensorConnected = true");
    }
    if (!((absentSeconds > self.disconnectTimeoutSeconds))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] pre violated: absentSeconds > self.disconnectTimeoutSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, absentSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.sensorDisconnectAlarmActive === true))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] post violated: self.sensorDisconnectAlarmActive = true");
      }
      if (!((__result.self.isDisplayingReading === false))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] post violated: self.isDisplayingReading = false");
      }
      if (!((__result.self.signalAbsentSeconds === absentSeconds))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] post violated: self.signalAbsentSeconds = absentSeconds");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout (async). User supplies this. */
export type VitalSignsMonitorSystemFormalizedEnforceDisconnectTimeoutAsyncImpl = (self: VitalSignsMonitorSystemFormalized, absentSeconds: number) => Promise<{ self: VitalSignsMonitorSystemFormalized; modified: { sensorConnected: unknown; sensorDisconnectAlarmActive: unknown; isDisplayingReading: unknown; signalAbsentSeconds: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout (async). */
export function wrapVitalSignsMonitorSystemFormalizedEnforceDisconnectTimeoutAsync(impl: VitalSignsMonitorSystemFormalizedEnforceDisconnectTimeoutAsyncImpl): (self: VitalSignsMonitorSystemFormalized, absentSeconds: number) => Promise<VitalSignsMonitorSystemFormalized> {
  return async (self, absentSeconds) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] pre violated: self.sensorConnected = true");
    }
    if (!((absentSeconds > self.disconnectTimeoutSeconds))) {
      preViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] pre violated: absentSeconds > self.disconnectTimeoutSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, absentSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.sensorDisconnectAlarmActive === true))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] post violated: self.sensorDisconnectAlarmActive = true");
      }
      if (!((__result.self.isDisplayingReading === false))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] post violated: self.isDisplayingReading = false");
      }
      if (!((__result.self.signalAbsentSeconds === absentSeconds))) {
        postViolations.push("[VitalSignsMonitorSystemFormalized.enforceDisconnectTimeout] post violated: self.signalAbsentSeconds = absentSeconds");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.acceptReading. User supplies this. */
export type VitalSignsMonitorSystemAcceptReadingImpl = (self: VitalSignsMonitorSystem, valueBpm: number) => { self: VitalSignsMonitorSystem; modified: { currentHeartRateBpm: unknown; lastValidHeartRateBpm: unknown; isDisplayingReading: unknown; signalAbsentSeconds: unknown; sensorDisconnectAlarmActive: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.acceptReading. */
export function wrapVitalSignsMonitorSystemAcceptReading(impl: VitalSignsMonitorSystemAcceptReadingImpl): (self: VitalSignsMonitorSystem, valueBpm: number) => VitalSignsMonitorSystem {
  return (self, valueBpm) => {
    const preViolations: string[] = [];
    if (!((valueBpm >= self.plausibilityLowerBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.acceptReading] pre violated: valueBpm >= self.plausibilityLowerBpm");
    }
    if (!((valueBpm <= self.plausibilityUpperBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.acceptReading] pre violated: valueBpm <= self.plausibilityUpperBpm");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[VitalSignsMonitorSystem.acceptReading] pre violated: self.sensorConnected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, valueBpm);
      const postViolations: string[] = [];
      if (!((__result.self.currentHeartRateBpm === valueBpm))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.currentHeartRateBpm = valueBpm");
      }
      if (!((__result.self.lastValidHeartRateBpm === valueBpm))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.lastValidHeartRateBpm = valueBpm");
      }
      if (!((__result.self.isDisplayingReading === true))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.isDisplayingReading = true");
      }
      if (!((__result.self.signalAbsentSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.signalAbsentSeconds = 0.0");
      }
      if (!((__result.self.sensorDisconnectAlarmActive === false))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.sensorDisconnectAlarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.acceptReading (async). User supplies this. */
export type VitalSignsMonitorSystemAcceptReadingAsyncImpl = (self: VitalSignsMonitorSystem, valueBpm: number) => Promise<{ self: VitalSignsMonitorSystem; modified: { currentHeartRateBpm: unknown; lastValidHeartRateBpm: unknown; isDisplayingReading: unknown; signalAbsentSeconds: unknown; sensorDisconnectAlarmActive: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.acceptReading (async). */
export function wrapVitalSignsMonitorSystemAcceptReadingAsync(impl: VitalSignsMonitorSystemAcceptReadingAsyncImpl): (self: VitalSignsMonitorSystem, valueBpm: number) => Promise<VitalSignsMonitorSystem> {
  return async (self, valueBpm) => {
    const preViolations: string[] = [];
    if (!((valueBpm >= self.plausibilityLowerBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.acceptReading] pre violated: valueBpm >= self.plausibilityLowerBpm");
    }
    if (!((valueBpm <= self.plausibilityUpperBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.acceptReading] pre violated: valueBpm <= self.plausibilityUpperBpm");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[VitalSignsMonitorSystem.acceptReading] pre violated: self.sensorConnected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, valueBpm);
      const postViolations: string[] = [];
      if (!((__result.self.currentHeartRateBpm === valueBpm))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.currentHeartRateBpm = valueBpm");
      }
      if (!((__result.self.lastValidHeartRateBpm === valueBpm))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.lastValidHeartRateBpm = valueBpm");
      }
      if (!((__result.self.isDisplayingReading === true))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.isDisplayingReading = true");
      }
      if (!((__result.self.signalAbsentSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.signalAbsentSeconds = 0.0");
      }
      if (!((__result.self.sensorDisconnectAlarmActive === false))) {
        postViolations.push("[VitalSignsMonitorSystem.acceptReading] post violated: self.sensorDisconnectAlarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.rejectImplausibleReading. User supplies this. */
export type VitalSignsMonitorSystemRejectImplausibleReadingImpl = (self: VitalSignsMonitorSystem, valueBpm: number) => { self: VitalSignsMonitorSystem; modified: { rejectedReadingCount: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.rejectImplausibleReading. */
export function wrapVitalSignsMonitorSystemRejectImplausibleReading(impl: VitalSignsMonitorSystemRejectImplausibleReadingImpl): (self: VitalSignsMonitorSystem, valueBpm: number) => VitalSignsMonitorSystem {
  return (self, valueBpm) => {
    const preViolations: string[] = [];
    if (!(((valueBpm < self.plausibilityLowerBpm) || (valueBpm > self.plausibilityUpperBpm)))) {
      preViolations.push("[VitalSignsMonitorSystem.rejectImplausibleReading] pre violated: valueBpm < self.plausibilityLowerBpm\n         or valueBpm > self.plausibilityUpperBpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.isDisplayingReading": self.isDisplayingReading,
      "self.currentHeartRateBpm": self.currentHeartRateBpm,
      "self.rejectedReadingCount": self.rejectedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, valueBpm);
      const postViolations: string[] = [];
      if (!((__result.self.isDisplayingReading === __pre["self.isDisplayingReading"]))) {
        postViolations.push("[VitalSignsMonitorSystem.rejectImplausibleReading] post violated: self.isDisplayingReading = self.isDisplayingReading@pre");
      }
      if (!((__result.self.currentHeartRateBpm === __pre["self.currentHeartRateBpm"]))) {
        postViolations.push("[VitalSignsMonitorSystem.rejectImplausibleReading] post violated: self.currentHeartRateBpm = self.currentHeartRateBpm@pre");
      }
      if (!((__result.self.rejectedReadingCount === (__pre["self.rejectedReadingCount"] + 1)))) {
        postViolations.push("[VitalSignsMonitorSystem.rejectImplausibleReading] post violated: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.rejectImplausibleReading (async). User supplies this. */
export type VitalSignsMonitorSystemRejectImplausibleReadingAsyncImpl = (self: VitalSignsMonitorSystem, valueBpm: number) => Promise<{ self: VitalSignsMonitorSystem; modified: { rejectedReadingCount: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.rejectImplausibleReading (async). */
export function wrapVitalSignsMonitorSystemRejectImplausibleReadingAsync(impl: VitalSignsMonitorSystemRejectImplausibleReadingAsyncImpl): (self: VitalSignsMonitorSystem, valueBpm: number) => Promise<VitalSignsMonitorSystem> {
  return async (self, valueBpm) => {
    const preViolations: string[] = [];
    if (!(((valueBpm < self.plausibilityLowerBpm) || (valueBpm > self.plausibilityUpperBpm)))) {
      preViolations.push("[VitalSignsMonitorSystem.rejectImplausibleReading] pre violated: valueBpm < self.plausibilityLowerBpm\n         or valueBpm > self.plausibilityUpperBpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.isDisplayingReading": self.isDisplayingReading,
      "self.currentHeartRateBpm": self.currentHeartRateBpm,
      "self.rejectedReadingCount": self.rejectedReadingCount,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, valueBpm);
      const postViolations: string[] = [];
      if (!((__result.self.isDisplayingReading === __pre["self.isDisplayingReading"]))) {
        postViolations.push("[VitalSignsMonitorSystem.rejectImplausibleReading] post violated: self.isDisplayingReading = self.isDisplayingReading@pre");
      }
      if (!((__result.self.currentHeartRateBpm === __pre["self.currentHeartRateBpm"]))) {
        postViolations.push("[VitalSignsMonitorSystem.rejectImplausibleReading] post violated: self.currentHeartRateBpm = self.currentHeartRateBpm@pre");
      }
      if (!((__result.self.rejectedReadingCount === (__pre["self.rejectedReadingCount"] + 1)))) {
        postViolations.push("[VitalSignsMonitorSystem.rejectImplausibleReading] post violated: self.rejectedReadingCount = self.rejectedReadingCount@pre + 1");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.raiseThresholdAlarm. User supplies this. */
export type VitalSignsMonitorSystemRaiseThresholdAlarmImpl = (self: VitalSignsMonitorSystem, valueBpm: number, latencySeconds: number) => { self: VitalSignsMonitorSystem; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.raiseThresholdAlarm. */
export function wrapVitalSignsMonitorSystemRaiseThresholdAlarm(impl: VitalSignsMonitorSystemRaiseThresholdAlarmImpl): (self: VitalSignsMonitorSystem, valueBpm: number, latencySeconds: number) => VitalSignsMonitorSystem {
  return (self, valueBpm, latencySeconds) => {
    const preViolations: string[] = [];
    if (!((self.isDisplayingReading === true))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: self.isDisplayingReading = true");
    }
    if (!((valueBpm >= self.plausibilityLowerBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: valueBpm >= self.plausibilityLowerBpm");
    }
    if (!((valueBpm <= self.plausibilityUpperBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: valueBpm <= self.plausibilityUpperBpm");
    }
    if (!(((valueBpm < self.alarmLowBpm) || (valueBpm > self.alarmHighBpm)))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: valueBpm < self.alarmLowBpm or valueBpm > self.alarmHighBpm");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: not self.alarmActive");
    }
    if (!((latencySeconds >= 0))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: latencySeconds >= 0.0");
    }
    if (!((latencySeconds <= self.maxAlarmLatencySeconds))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: latencySeconds <= self.maxAlarmLatencySeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, valueBpm, latencySeconds);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.raiseThresholdAlarm (async). User supplies this. */
export type VitalSignsMonitorSystemRaiseThresholdAlarmAsyncImpl = (self: VitalSignsMonitorSystem, valueBpm: number, latencySeconds: number) => Promise<{ self: VitalSignsMonitorSystem; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.raiseThresholdAlarm (async). */
export function wrapVitalSignsMonitorSystemRaiseThresholdAlarmAsync(impl: VitalSignsMonitorSystemRaiseThresholdAlarmAsyncImpl): (self: VitalSignsMonitorSystem, valueBpm: number, latencySeconds: number) => Promise<VitalSignsMonitorSystem> {
  return async (self, valueBpm, latencySeconds) => {
    const preViolations: string[] = [];
    if (!((self.isDisplayingReading === true))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: self.isDisplayingReading = true");
    }
    if (!((valueBpm >= self.plausibilityLowerBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: valueBpm >= self.plausibilityLowerBpm");
    }
    if (!((valueBpm <= self.plausibilityUpperBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: valueBpm <= self.plausibilityUpperBpm");
    }
    if (!(((valueBpm < self.alarmLowBpm) || (valueBpm > self.alarmHighBpm)))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: valueBpm < self.alarmLowBpm or valueBpm > self.alarmHighBpm");
    }
    if (!(!(self.alarmActive))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: not self.alarmActive");
    }
    if (!((latencySeconds >= 0))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: latencySeconds >= 0.0");
    }
    if (!((latencySeconds <= self.maxAlarmLatencySeconds))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] pre violated: latencySeconds <= self.maxAlarmLatencySeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, valueBpm, latencySeconds);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseThresholdAlarm] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.silenceAlarm. User supplies this. */
export type VitalSignsMonitorSystemSilenceAlarmImpl = (self: VitalSignsMonitorSystem) => { self: VitalSignsMonitorSystem; modified: { alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.silenceAlarm. */
export function wrapVitalSignsMonitorSystemSilenceAlarm(impl: VitalSignsMonitorSystemSilenceAlarmImpl): (self: VitalSignsMonitorSystem) => VitalSignsMonitorSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystem.silenceAlarm] pre violated: self.alarmActive = true");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[VitalSignsMonitorSystem.silenceAlarm] pre violated: not self.alarmSilenced");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === true))) {
        postViolations.push("[VitalSignsMonitorSystem.silenceAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.silenceAlarm] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.silenceAlarm (async). User supplies this. */
export type VitalSignsMonitorSystemSilenceAlarmAsyncImpl = (self: VitalSignsMonitorSystem) => Promise<{ self: VitalSignsMonitorSystem; modified: { alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.silenceAlarm (async). */
export function wrapVitalSignsMonitorSystemSilenceAlarmAsync(impl: VitalSignsMonitorSystemSilenceAlarmAsyncImpl): (self: VitalSignsMonitorSystem) => Promise<VitalSignsMonitorSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystem.silenceAlarm] pre violated: self.alarmActive = true");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[VitalSignsMonitorSystem.silenceAlarm] pre violated: not self.alarmSilenced");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === true))) {
        postViolations.push("[VitalSignsMonitorSystem.silenceAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.silenceAlarm] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.autoRearmAlarm. User supplies this. */
export type VitalSignsMonitorSystemAutoRearmAlarmImpl = (self: VitalSignsMonitorSystem, elapsedSeconds: number) => { self: VitalSignsMonitorSystem; modified: { alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.autoRearmAlarm. */
export function wrapVitalSignsMonitorSystemAutoRearmAlarm(impl: VitalSignsMonitorSystemAutoRearmAlarmImpl): (self: VitalSignsMonitorSystem, elapsedSeconds: number) => VitalSignsMonitorSystem {
  return (self, elapsedSeconds) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] pre violated: self.alarmActive = true");
    }
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] pre violated: self.alarmSilenced = true");
    }
    if (!((elapsedSeconds >= self.maxSilenceDurationSeconds))) {
      preViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] pre violated: elapsedSeconds >= self.maxSilenceDurationSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, elapsedSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.autoRearmAlarm (async). User supplies this. */
export type VitalSignsMonitorSystemAutoRearmAlarmAsyncImpl = (self: VitalSignsMonitorSystem, elapsedSeconds: number) => Promise<{ self: VitalSignsMonitorSystem; modified: { alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.autoRearmAlarm (async). */
export function wrapVitalSignsMonitorSystemAutoRearmAlarmAsync(impl: VitalSignsMonitorSystemAutoRearmAlarmAsyncImpl): (self: VitalSignsMonitorSystem, elapsedSeconds: number) => Promise<VitalSignsMonitorSystem> {
  return async (self, elapsedSeconds) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] pre violated: self.alarmActive = true");
    }
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] pre violated: self.alarmSilenced = true");
    }
    if (!((elapsedSeconds >= self.maxSilenceDurationSeconds))) {
      preViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] pre violated: elapsedSeconds >= self.maxSilenceDurationSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, elapsedSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.autoRearmAlarm] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.clearAlarm. User supplies this. */
export type VitalSignsMonitorSystemClearAlarmImpl = (self: VitalSignsMonitorSystem) => { self: VitalSignsMonitorSystem; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.clearAlarm. */
export function wrapVitalSignsMonitorSystemClearAlarm(impl: VitalSignsMonitorSystemClearAlarmImpl): (self: VitalSignsMonitorSystem) => VitalSignsMonitorSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystem.clearAlarm] pre violated: self.alarmActive = true");
    }
    if (!((self.currentHeartRateBpm >= self.alarmLowBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.clearAlarm] pre violated: self.currentHeartRateBpm >= self.alarmLowBpm");
    }
    if (!((self.currentHeartRateBpm <= self.alarmHighBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.clearAlarm] pre violated: self.currentHeartRateBpm <= self.alarmHighBpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[VitalSignsMonitorSystem.clearAlarm] post violated: self.alarmActive = false");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystem.clearAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.clearAlarm] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.clearAlarm (async). User supplies this. */
export type VitalSignsMonitorSystemClearAlarmAsyncImpl = (self: VitalSignsMonitorSystem) => Promise<{ self: VitalSignsMonitorSystem; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmSilenceElapsedSeconds: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.clearAlarm (async). */
export function wrapVitalSignsMonitorSystemClearAlarmAsync(impl: VitalSignsMonitorSystemClearAlarmAsyncImpl): (self: VitalSignsMonitorSystem) => Promise<VitalSignsMonitorSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystem.clearAlarm] pre violated: self.alarmActive = true");
    }
    if (!((self.currentHeartRateBpm >= self.alarmLowBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.clearAlarm] pre violated: self.currentHeartRateBpm >= self.alarmLowBpm");
    }
    if (!((self.currentHeartRateBpm <= self.alarmHighBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.clearAlarm] pre violated: self.currentHeartRateBpm <= self.alarmHighBpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[VitalSignsMonitorSystem.clearAlarm] post violated: self.alarmActive = false");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[VitalSignsMonitorSystem.clearAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmSilenceElapsedSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.clearAlarm] post violated: self.alarmSilenceElapsedSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.recordSignalAbsence. User supplies this. */
export type VitalSignsMonitorSystemRecordSignalAbsenceImpl = (self: VitalSignsMonitorSystem, absentSeconds: number) => { self: VitalSignsMonitorSystem; modified: { signalAbsentSeconds: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.recordSignalAbsence. */
export function wrapVitalSignsMonitorSystemRecordSignalAbsence(impl: VitalSignsMonitorSystemRecordSignalAbsenceImpl): (self: VitalSignsMonitorSystem, absentSeconds: number) => VitalSignsMonitorSystem {
  return (self, absentSeconds) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[VitalSignsMonitorSystem.recordSignalAbsence] pre violated: self.sensorConnected = true");
    }
    if (!((absentSeconds >= 0))) {
      preViolations.push("[VitalSignsMonitorSystem.recordSignalAbsence] pre violated: absentSeconds >= 0.0");
    }
    if (!((absentSeconds < self.disconnectTimeoutSeconds))) {
      preViolations.push("[VitalSignsMonitorSystem.recordSignalAbsence] pre violated: absentSeconds < self.disconnectTimeoutSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, absentSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.signalAbsentSeconds === absentSeconds))) {
        postViolations.push("[VitalSignsMonitorSystem.recordSignalAbsence] post violated: self.signalAbsentSeconds = absentSeconds");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.recordSignalAbsence (async). User supplies this. */
export type VitalSignsMonitorSystemRecordSignalAbsenceAsyncImpl = (self: VitalSignsMonitorSystem, absentSeconds: number) => Promise<{ self: VitalSignsMonitorSystem; modified: { signalAbsentSeconds: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.recordSignalAbsence (async). */
export function wrapVitalSignsMonitorSystemRecordSignalAbsenceAsync(impl: VitalSignsMonitorSystemRecordSignalAbsenceAsyncImpl): (self: VitalSignsMonitorSystem, absentSeconds: number) => Promise<VitalSignsMonitorSystem> {
  return async (self, absentSeconds) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[VitalSignsMonitorSystem.recordSignalAbsence] pre violated: self.sensorConnected = true");
    }
    if (!((absentSeconds >= 0))) {
      preViolations.push("[VitalSignsMonitorSystem.recordSignalAbsence] pre violated: absentSeconds >= 0.0");
    }
    if (!((absentSeconds < self.disconnectTimeoutSeconds))) {
      preViolations.push("[VitalSignsMonitorSystem.recordSignalAbsence] pre violated: absentSeconds < self.disconnectTimeoutSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, absentSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.signalAbsentSeconds === absentSeconds))) {
        postViolations.push("[VitalSignsMonitorSystem.recordSignalAbsence] post violated: self.signalAbsentSeconds = absentSeconds");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.raiseSensorDisconnectAlarm. User supplies this. */
export type VitalSignsMonitorSystemRaiseSensorDisconnectAlarmImpl = (self: VitalSignsMonitorSystem, absentSeconds: number) => { self: VitalSignsMonitorSystem; modified: { sensorConnected: unknown; sensorDisconnectAlarmActive: unknown; isDisplayingReading: unknown; signalAbsentSeconds: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.raiseSensorDisconnectAlarm. */
export function wrapVitalSignsMonitorSystemRaiseSensorDisconnectAlarm(impl: VitalSignsMonitorSystemRaiseSensorDisconnectAlarmImpl): (self: VitalSignsMonitorSystem, absentSeconds: number) => VitalSignsMonitorSystem {
  return (self, absentSeconds) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] pre violated: self.sensorConnected = true");
    }
    if (!((absentSeconds > self.disconnectTimeoutSeconds))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] pre violated: absentSeconds > self.disconnectTimeoutSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, absentSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.sensorDisconnectAlarmActive === true))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] post violated: self.sensorDisconnectAlarmActive = true");
      }
      if (!((__result.self.isDisplayingReading === false))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] post violated: self.isDisplayingReading = false");
      }
      if (!((__result.self.signalAbsentSeconds === absentSeconds))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] post violated: self.signalAbsentSeconds = absentSeconds");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.raiseSensorDisconnectAlarm (async). User supplies this. */
export type VitalSignsMonitorSystemRaiseSensorDisconnectAlarmAsyncImpl = (self: VitalSignsMonitorSystem, absentSeconds: number) => Promise<{ self: VitalSignsMonitorSystem; modified: { sensorConnected: unknown; sensorDisconnectAlarmActive: unknown; isDisplayingReading: unknown; signalAbsentSeconds: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.raiseSensorDisconnectAlarm (async). */
export function wrapVitalSignsMonitorSystemRaiseSensorDisconnectAlarmAsync(impl: VitalSignsMonitorSystemRaiseSensorDisconnectAlarmAsyncImpl): (self: VitalSignsMonitorSystem, absentSeconds: number) => Promise<VitalSignsMonitorSystem> {
  return async (self, absentSeconds) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] pre violated: self.sensorConnected = true");
    }
    if (!((absentSeconds > self.disconnectTimeoutSeconds))) {
      preViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] pre violated: absentSeconds > self.disconnectTimeoutSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, absentSeconds);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.sensorDisconnectAlarmActive === true))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] post violated: self.sensorDisconnectAlarmActive = true");
      }
      if (!((__result.self.isDisplayingReading === false))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] post violated: self.isDisplayingReading = false");
      }
      if (!((__result.self.signalAbsentSeconds === absentSeconds))) {
        postViolations.push("[VitalSignsMonitorSystem.raiseSensorDisconnectAlarm] post violated: self.signalAbsentSeconds = absentSeconds");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.resumeAfterReconnect. User supplies this. */
export type VitalSignsMonitorSystemResumeAfterReconnectImpl = (self: VitalSignsMonitorSystem) => { self: VitalSignsMonitorSystem; modified: { sensorConnected: unknown; sensorDisconnectAlarmActive: unknown; signalAbsentSeconds: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.resumeAfterReconnect. */
export function wrapVitalSignsMonitorSystemResumeAfterReconnect(impl: VitalSignsMonitorSystemResumeAfterReconnectImpl): (self: VitalSignsMonitorSystem) => VitalSignsMonitorSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === false))) {
      preViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] pre violated: self.sensorConnected = false");
    }
    if (!((self.sensorDisconnectAlarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] pre violated: self.sensorDisconnectAlarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.sensorDisconnectAlarmActive === false))) {
        postViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] post violated: self.sensorDisconnectAlarmActive = false");
      }
      if (!((__result.self.signalAbsentSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] post violated: self.signalAbsentSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.resumeAfterReconnect (async). User supplies this. */
export type VitalSignsMonitorSystemResumeAfterReconnectAsyncImpl = (self: VitalSignsMonitorSystem) => Promise<{ self: VitalSignsMonitorSystem; modified: { sensorConnected: unknown; sensorDisconnectAlarmActive: unknown; signalAbsentSeconds: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.resumeAfterReconnect (async). */
export function wrapVitalSignsMonitorSystemResumeAfterReconnectAsync(impl: VitalSignsMonitorSystemResumeAfterReconnectAsyncImpl): (self: VitalSignsMonitorSystem) => Promise<VitalSignsMonitorSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === false))) {
      preViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] pre violated: self.sensorConnected = false");
    }
    if (!((self.sensorDisconnectAlarmActive === true))) {
      preViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] pre violated: self.sensorDisconnectAlarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.sensorDisconnectAlarmActive === false))) {
        postViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] post violated: self.sensorDisconnectAlarmActive = false");
      }
      if (!((__result.self.signalAbsentSeconds === 0))) {
        postViolations.push("[VitalSignsMonitorSystem.resumeAfterReconnect] post violated: self.signalAbsentSeconds = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.configureThresholds. User supplies this. */
export type VitalSignsMonitorSystemConfigureThresholdsImpl = (self: VitalSignsMonitorSystem, lowBpm: number, highBpm: number) => { self: VitalSignsMonitorSystem; modified: { alarmLowBpm: unknown; alarmHighBpm: unknown } };

/** Contract-checking wrapper for VitalSignsMonitorSystem.configureThresholds. */
export function wrapVitalSignsMonitorSystemConfigureThresholds(impl: VitalSignsMonitorSystemConfigureThresholdsImpl): (self: VitalSignsMonitorSystem, lowBpm: number, highBpm: number) => VitalSignsMonitorSystem {
  return (self, lowBpm, highBpm) => {
    const preViolations: string[] = [];
    if (!((lowBpm >= self.plausibilityLowerBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.configureThresholds] pre violated: lowBpm >= self.plausibilityLowerBpm");
    }
    if (!((highBpm <= self.plausibilityUpperBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.configureThresholds] pre violated: highBpm <= self.plausibilityUpperBpm");
    }
    if (!((highBpm > lowBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.configureThresholds] pre violated: highBpm > lowBpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, lowBpm, highBpm);
      const postViolations: string[] = [];
      if (!((__result.self.alarmLowBpm === lowBpm))) {
        postViolations.push("[VitalSignsMonitorSystem.configureThresholds] post violated: self.alarmLowBpm = lowBpm");
      }
      if (!((__result.self.alarmHighBpm === highBpm))) {
        postViolations.push("[VitalSignsMonitorSystem.configureThresholds] post violated: self.alarmHighBpm = highBpm");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignsMonitorSystem.configureThresholds (async). User supplies this. */
export type VitalSignsMonitorSystemConfigureThresholdsAsyncImpl = (self: VitalSignsMonitorSystem, lowBpm: number, highBpm: number) => Promise<{ self: VitalSignsMonitorSystem; modified: { alarmLowBpm: unknown; alarmHighBpm: unknown } }>;

/** Contract-checking wrapper for VitalSignsMonitorSystem.configureThresholds (async). */
export function wrapVitalSignsMonitorSystemConfigureThresholdsAsync(impl: VitalSignsMonitorSystemConfigureThresholdsAsyncImpl): (self: VitalSignsMonitorSystem, lowBpm: number, highBpm: number) => Promise<VitalSignsMonitorSystem> {
  return async (self, lowBpm, highBpm) => {
    const preViolations: string[] = [];
    if (!((lowBpm >= self.plausibilityLowerBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.configureThresholds] pre violated: lowBpm >= self.plausibilityLowerBpm");
    }
    if (!((highBpm <= self.plausibilityUpperBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.configureThresholds] pre violated: highBpm <= self.plausibilityUpperBpm");
    }
    if (!((highBpm > lowBpm))) {
      preViolations.push("[VitalSignsMonitorSystem.configureThresholds] pre violated: highBpm > lowBpm");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, lowBpm, highBpm);
      const postViolations: string[] = [];
      if (!((__result.self.alarmLowBpm === lowBpm))) {
        postViolations.push("[VitalSignsMonitorSystem.configureThresholds] post violated: self.alarmLowBpm = lowBpm");
      }
      if (!((__result.self.alarmHighBpm === highBpm))) {
        postViolations.push("[VitalSignsMonitorSystem.configureThresholds] post violated: self.alarmHighBpm = highBpm");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for ImplausibleReadingRejectionCommitment commitments. */
export class ImplausibleReadingRejectionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<ImplausibleReadingRejectionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a ImplausibleReadingRejectionCommitment — the typed wrapper guarantees that since
    // `register` only accepts ImplausibleReadingRejectionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: ImplausibleReadingRejectionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: ImplausibleReadingRejectionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: ImplausibleReadingRejectionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: ImplausibleReadingRejectionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<ImplausibleReadingRejectionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<ImplausibleReadingRejectionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AlarmLatencyCommitment commitments. */
export class AlarmLatencyCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AlarmLatencyCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AlarmLatencyCommitment — the typed wrapper guarantees that since
    // `register` only accepts AlarmLatencyCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AlarmLatencyCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AlarmLatencyCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AlarmLatencyCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AlarmLatencyCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AlarmLatencyCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AlarmLatencyCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for SensorDisconnectDetectionCommitment commitments. */
export class SensorDisconnectDetectionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SensorDisconnectDetectionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SensorDisconnectDetectionCommitment — the typed wrapper guarantees that since
    // `register` only accepts SensorDisconnectDetectionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SensorDisconnectDetectionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SensorDisconnectDetectionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SensorDisconnectDetectionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SensorDisconnectDetectionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SensorDisconnectDetectionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SensorDisconnectDetectionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AlarmSilenceAutoRearmCommitment commitments. */
export class AlarmSilenceAutoRearmCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AlarmSilenceAutoRearmCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AlarmSilenceAutoRearmCommitment — the typed wrapper guarantees that since
    // `register` only accepts AlarmSilenceAutoRearmCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AlarmSilenceAutoRearmCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AlarmSilenceAutoRearmCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AlarmSilenceAutoRearmCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AlarmSilenceAutoRearmCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AlarmSilenceAutoRearmCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AlarmSilenceAutoRearmCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for MonitorVisionCommitment commitments. */
export class MonitorVisionCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<MonitorVisionCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a MonitorVisionCommitment — the typed wrapper guarantees that since
    // `register` only accepts MonitorVisionCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: MonitorVisionCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: MonitorVisionCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: MonitorVisionCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: MonitorVisionCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<MonitorVisionCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<MonitorVisionCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

