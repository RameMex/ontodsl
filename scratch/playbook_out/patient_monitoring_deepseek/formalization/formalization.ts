// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for MonitorVendor. Runtime: string. Compile-time: branded. */
export type MonitorVendorId = string & { readonly __brand: "MonitorVendorId" };
/** Identity type for BedsideMonitorSystem. Runtime: string. Compile-time: branded. */
export type BedsideMonitorSystemId = string & { readonly __brand: "BedsideMonitorSystemId" };
/** Identity type for PlausibleReadingCommitment. Runtime: string. Compile-time: branded. */
export type PlausibleReadingCommitmentId = string & { readonly __brand: "PlausibleReadingCommitmentId" };
/** Identity type for AlarmLatencyCommitment. Runtime: string. Compile-time: branded. */
export type AlarmLatencyCommitmentId = string & { readonly __brand: "AlarmLatencyCommitmentId" };
/** Identity type for SensorDisconnectCommitment. Runtime: string. Compile-time: branded. */
export type SensorDisconnectCommitmentId = string & { readonly __brand: "SensorDisconnectCommitmentId" };
/** Identity type for SilenceAutoRearmCommitment. Runtime: string. Compile-time: branded. */
export type SilenceAutoRearmCommitmentId = string & { readonly __brand: "SilenceAutoRearmCommitmentId" };
/** Identity type for HeartRateReading. Runtime: string. Compile-time: branded. */
export type HeartRateReadingId = string & { readonly __brand: "HeartRateReadingId" };
/** Identity type for AlarmThreshold. Runtime: string. Compile-time: branded. */
export type AlarmThresholdId = string & { readonly __brand: "AlarmThresholdId" };
/** Identity type for SensorSignal. Runtime: string. Compile-time: branded. */
export type SensorSignalId = string & { readonly __brand: "SensorSignalId" };
/** Identity type for SilencedAlarm. Runtime: string. Compile-time: branded. */
export type SilencedAlarmId = string & { readonly __brand: "SilencedAlarmId" };
/** Identity type for NormalMonitoringFlow. Runtime: string. Compile-time: branded. */
export type NormalMonitoringFlowId = string & { readonly __brand: "NormalMonitoringFlowId" };
/** Identity type for SensorDisconnectFlow. Runtime: string. Compile-time: branded. */
export type SensorDisconnectFlowId = string & { readonly __brand: "SensorDisconnectFlowId" };
/** Identity type for AlarmSilenceFlow. Runtime: string. Compile-time: branded. */
export type AlarmSilenceFlowId = string & { readonly __brand: "AlarmSilenceFlowId" };

// ─── Interfaces ───

/** @stereotype <<Category>> */
export interface Fda510kCleared {
  readonly fda510kNumber: string;
  readonly indicationsForUse: string;
  readonly submissionDate: number;
}

/** @stereotype <<Category>> */
export interface Iec62304ClassC {
  readonly softwareSafetyClass: string;
  readonly riskManagementFileRef: string;
}

/** @stereotype <<Category>> */
export interface HipaaCompliant {
  readonly phiHandlingPolicyRef: string;
  readonly breachNotificationContact: string;
}

/** @stereotype <<Category>> */
export interface AamiIec60601_1_8Alarms {
  readonly alarmPriorityLevels: string;
  readonly alarmAudiblePatternsRef: string;
  readonly maxAlarmLatencySeconds: number;
}

/** @stereotype <<Subkind>> */
export interface BedsideMonitorSystemFormalized extends BedsideMonitorSystemRequirements {
  readonly fda510kNumber: string;
  readonly indicationsForUse: string;
  readonly submissionDate: number;
  readonly softwareSafetyClass: string;
  readonly riskManagementFileRef: string;
  readonly phiHandlingPolicyRef: string;
  readonly breachNotificationContact: string;
  readonly alarmPriorityLevels: string;
  readonly alarmAudiblePatternsRef: string;
  readonly maxAlarmLatencySeconds: number;
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumption1: string;
  readonly assumption2: string;
  readonly assumption3: string;
  readonly assumption4: string;
  readonly assumption5: string;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly certificationLevel: string;
}

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly roomNumber: string;
}

/** @stereotype <<Agent>> */
export interface MonitorVendor {
  readonly vendorId: MonitorVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface BedsideMonitorSystem {
  readonly systemId: BedsideMonitorSystemId;
  readonly implausibleThresholdLower: number;
  readonly implausibleThresholdUpper: number;
  readonly maxAlarmLatencyMs: number;
  readonly alarmThresholdsConfigured: boolean;
  readonly maxSignalLossMsBeforeAlarm: number;
  readonly silenceAutoRearmMs: number;
}

/** @stereotype <<Commitment>> */
export interface PlausibleReadingCommitment {
  readonly commitmentId: PlausibleReadingCommitmentId;
}

/** @stereotype <<Commitment>> */
export interface AlarmLatencyCommitment {
  readonly commitmentId: AlarmLatencyCommitmentId;
}

/** @stereotype <<Commitment>> */
export interface SensorDisconnectCommitment {
  readonly commitmentId: SensorDisconnectCommitmentId;
}

/** @stereotype <<Commitment>> */
export interface SilenceAutoRearmCommitment {
  readonly commitmentId: SilenceAutoRearmCommitmentId;
}

/** @stereotype <<Category>> */
export interface PlausibilityConstraints {
}

/** @stereotype <<Category>> */
export interface AlarmThresholdEnforcement {
}

/** @stereotype <<Category>> */
export interface SensorDisconnectDetection {
}

/** @stereotype <<Category>> */
export interface SilenceAutoRearm {
}

/** @stereotype <<Kind>> */
export interface HeartRateReading {
  readonly readingId: HeartRateReadingId;
  readonly valueBpm: number;
  readonly timestamp: number;
  readonly isPlausible: boolean;
}

/** @stereotype <<Kind>> */
export interface AlarmThreshold {
  readonly thresholdId: AlarmThresholdId;
  readonly vitalType: string;
  readonly upperBound: number;
  readonly lowerBound: number;
}

/** @stereotype <<Kind>> */
export interface SensorSignal {
  readonly signalId: SensorSignalId;
  readonly sensorType: string;
  readonly signalPresent: boolean;
  readonly lastSignalTimestamp: number;
}

/** @stereotype <<Kind>> */
export interface SilencedAlarm {
  readonly alarmId: SilencedAlarmId;
  readonly alarmType: string;
  readonly silencedTimestamp: number;
  readonly autoRearmAtMs: number;
}

/** @stereotype <<Happening>> */
export interface NormalMonitoringFlow {
  readonly flowId: NormalMonitoringFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface SensorDisconnectFlow {
  readonly flowId: SensorDisconnectFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface AlarmSilenceFlow {
  readonly flowId: AlarmSilenceFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Subkind>> */
export interface BedsideMonitorSystemRequirements extends BedsideMonitorSystem {
  readonly currentHeartRate: number;
  readonly heartRatePlausible: boolean;
  readonly rejectionCount: number;
  readonly sensorConnected: boolean;
  readonly sensorLastSignalTimestamp: number;
  readonly alarmActive: boolean;
  readonly alarmSilenced: boolean;
  readonly alarmSilenceTimestamp: number;
  readonly alarmType: string;
}


// ─── Factory functions ───

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumption1: string;
  assumption2: string;
  assumption3: string;
  assumption4: string;
  assumption5: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumption1: data.assumption1,
    assumption2: data.assumption2,
    assumption3: data.assumption3,
    assumption4: data.assumption4,
    assumption5: data.assumption5,
  };
}

export function makeClinician(data: {
  clinicianId: string;
  certificationLevel: string;
}): Clinician {
  return {
    clinicianId: data.clinicianId as ClinicianId,
    certificationLevel: data.certificationLevel,
  };
}

export function makePatient(data: {
  patientId: string;
  roomNumber: string;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    roomNumber: data.roomNumber,
  };
}

export function makeMonitorVendor(data: {
  vendorId: string;
  name: string;
}): MonitorVendor {
  return {
    vendorId: data.vendorId as MonitorVendorId,
    name: data.name,
  };
}

export function makeBedsideMonitorSystem(data: {
  systemId: string;
  implausibleThresholdLower: number;
  implausibleThresholdUpper: number;
  maxAlarmLatencyMs: number;
  alarmThresholdsConfigured: boolean;
  maxSignalLossMsBeforeAlarm: number;
  silenceAutoRearmMs: number;
}): BedsideMonitorSystem {
  return {
    systemId: data.systemId as BedsideMonitorSystemId,
    implausibleThresholdLower: data.implausibleThresholdLower,
    implausibleThresholdUpper: data.implausibleThresholdUpper,
    maxAlarmLatencyMs: data.maxAlarmLatencyMs,
    alarmThresholdsConfigured: data.alarmThresholdsConfigured,
    maxSignalLossMsBeforeAlarm: data.maxSignalLossMsBeforeAlarm,
    silenceAutoRearmMs: data.silenceAutoRearmMs,
  };
}

export function makePlausibleReadingCommitment(data: {
  commitmentId: string;
}): PlausibleReadingCommitment {
  return {
    commitmentId: data.commitmentId as PlausibleReadingCommitmentId,
  };
}

export function makeAlarmLatencyCommitment(data: {
  commitmentId: string;
}): AlarmLatencyCommitment {
  return {
    commitmentId: data.commitmentId as AlarmLatencyCommitmentId,
  };
}

export function makeSensorDisconnectCommitment(data: {
  commitmentId: string;
}): SensorDisconnectCommitment {
  return {
    commitmentId: data.commitmentId as SensorDisconnectCommitmentId,
  };
}

export function makeSilenceAutoRearmCommitment(data: {
  commitmentId: string;
}): SilenceAutoRearmCommitment {
  return {
    commitmentId: data.commitmentId as SilenceAutoRearmCommitmentId,
  };
}

export function makeHeartRateReading(data: {
  readingId: string;
  valueBpm: number;
  timestamp: number;
  isPlausible: boolean;
}): HeartRateReading {
  return {
    readingId: data.readingId as HeartRateReadingId,
    valueBpm: data.valueBpm,
    timestamp: data.timestamp,
    isPlausible: data.isPlausible,
  };
}

export function makeAlarmThreshold(data: {
  thresholdId: string;
  vitalType: string;
  upperBound: number;
  lowerBound: number;
}): AlarmThreshold {
  return {
    thresholdId: data.thresholdId as AlarmThresholdId,
    vitalType: data.vitalType,
    upperBound: data.upperBound,
    lowerBound: data.lowerBound,
  };
}

export function makeSensorSignal(data: {
  signalId: string;
  sensorType: string;
  signalPresent: boolean;
  lastSignalTimestamp: number;
}): SensorSignal {
  return {
    signalId: data.signalId as SensorSignalId,
    sensorType: data.sensorType,
    signalPresent: data.signalPresent,
    lastSignalTimestamp: data.lastSignalTimestamp,
  };
}

export function makeSilencedAlarm(data: {
  alarmId: string;
  alarmType: string;
  silencedTimestamp: number;
  autoRearmAtMs: number;
}): SilencedAlarm {
  return {
    alarmId: data.alarmId as SilencedAlarmId,
    alarmType: data.alarmType,
    silencedTimestamp: data.silencedTimestamp,
    autoRearmAtMs: data.autoRearmAtMs,
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

export function makeSensorDisconnectFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): SensorDisconnectFlow {
  return {
    flowId: data.flowId as SensorDisconnectFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeAlarmSilenceFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): AlarmSilenceFlow {
  return {
    flowId: data.flowId as AlarmSilenceFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for Fda510kCleared. Returns empty array when valid. */
export function validateFda510kCleared(instance: Fda510kCleared): readonly string[] {
  const violations: string[] = [];
  if (!((instance.fda510kNumber !== null))) {
    violations.push("[Fda510kCleared] invariant violated: self.fda510kNumber <> null");
  }
  if (!((instance.indicationsForUse !== null))) {
    violations.push("[Fda510kCleared] invariant violated: self.indicationsForUse <> null");
  }
  if (!((instance.submissionDate > 0))) {
    violations.push("[Fda510kCleared] invariant violated: self.submissionDate > 0.0");
  }
  return violations;
}

/** Runtime invariant check for Iec62304ClassC. Returns empty array when valid. */
export function validateIec62304ClassC(instance: Iec62304ClassC): readonly string[] {
  const violations: string[] = [];
  if (!((instance.softwareSafetyClass === "C"))) {
    violations.push("[Iec62304ClassC] invariant violated: self.softwareSafetyClass = 'C'");
  }
  if (!((instance.riskManagementFileRef !== null))) {
    violations.push("[Iec62304ClassC] invariant violated: self.riskManagementFileRef <> null");
  }
  return violations;
}

/** Runtime invariant check for HipaaCompliant. Returns empty array when valid. */
export function validateHipaaCompliant(instance: HipaaCompliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.phiHandlingPolicyRef !== null))) {
    violations.push("[HipaaCompliant] invariant violated: self.phiHandlingPolicyRef <> null");
  }
  if (!((instance.breachNotificationContact !== null))) {
    violations.push("[HipaaCompliant] invariant violated: self.breachNotificationContact <> null");
  }
  return violations;
}

/** Runtime invariant check for AamiIec60601_1_8Alarms. Returns empty array when valid. */
export function validateAamiIec60601_1_8Alarms(instance: AamiIec60601_1_8Alarms): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmPriorityLevels !== null))) {
    violations.push("[AamiIec60601_1_8Alarms] invariant violated: self.alarmPriorityLevels <> null");
  }
  if (!((instance.alarmAudiblePatternsRef !== null))) {
    violations.push("[AamiIec60601_1_8Alarms] invariant violated: self.alarmAudiblePatternsRef <> null");
  }
  if (!((instance.maxAlarmLatencySeconds <= 2))) {
    violations.push("[AamiIec60601_1_8Alarms] invariant violated: self.maxAlarmLatencySeconds <= 2.0");
  }
  return violations;
}

/** Runtime invariant check for BedsideMonitorSystemFormalized. Returns empty array when valid. */
export function validateBedsideMonitorSystemFormalized(instance: BedsideMonitorSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.fda510kNumber !== null))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.fda510kNumber <> null");
  }
  if (!((instance.indicationsForUse !== null))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.indicationsForUse <> null");
  }
  if (!((instance.submissionDate > 0))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.submissionDate > 0.0");
  }
  if (!((instance.softwareSafetyClass === "C"))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.softwareSafetyClass = 'C'");
  }
  if (!((instance.riskManagementFileRef !== null))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.riskManagementFileRef <> null");
  }
  if (!((instance.phiHandlingPolicyRef !== null))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.phiHandlingPolicyRef <> null");
  }
  if (!((instance.breachNotificationContact !== null))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.breachNotificationContact <> null");
  }
  if (!((instance.alarmPriorityLevels !== null))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.alarmPriorityLevels <> null");
  }
  if (!((instance.alarmAudiblePatternsRef !== null))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.alarmAudiblePatternsRef <> null");
  }
  if (!((instance.maxAlarmLatencySeconds <= 2))) {
    violations.push("[BedsideMonitorSystemFormalized] invariant violated: self.maxAlarmLatencySeconds <= 2.0");
  }
  return violations;
}

/** Runtime invariant check for FormalAssumptionRecord. Returns empty array when valid. */
export function validateFormalAssumptionRecord(instance: FormalAssumptionRecord): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.assumption1 !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumption1 <> null");
  }
  if (!((instance.assumption2 !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumption2 <> null");
  }
  if (!((instance.assumption3 !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumption3 <> null");
  }
  if (!((instance.assumption4 !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumption4 <> null");
  }
  if (!((instance.assumption5 !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.assumption5 <> null");
  }
  return violations;
}

/** Runtime invariant check for Clinician. Returns empty array when valid. */
export function validateClinician(instance: Clinician): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clinicianId !== null))) {
    violations.push("[Clinician] invariant violated: self.clinicianId <> null");
  }
  return violations;
}

/** Runtime invariant check for Patient. Returns empty array when valid. */
export function validatePatient(instance: Patient): readonly string[] {
  const violations: string[] = [];
  if (!((instance.patientId !== null))) {
    violations.push("[Patient] invariant violated: self.patientId <> null");
  }
  return violations;
}

/** Runtime invariant check for MonitorVendor. Returns empty array when valid. */
export function validateMonitorVendor(instance: MonitorVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[MonitorVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for BedsideMonitorSystem. Returns empty array when valid. */
export function validateBedsideMonitorSystem(instance: BedsideMonitorSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[BedsideMonitorSystem] invariant violated: self.systemId <> null");
  }
  return violations;
}

/** Runtime invariant check for PlausibilityConstraints. Returns empty array when valid. */
export function validatePlausibilityConstraints(instance: PlausibilityConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.implausibleThresholdLower <= 20.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.implausibleThresholdUpper >= 250.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AlarmThresholdEnforcement. Returns empty array when valid. */
export function validateAlarmThresholdEnforcement(instance: AlarmThresholdEnforcement): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxAlarmLatencyMs <= 2000.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.alarmThresholdsConfigured = true — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorDisconnectDetection. Returns empty array when valid. */
export function validateSensorDisconnectDetection(instance: SensorDisconnectDetection): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.maxSignalLossMsBeforeAlarm <= 5000.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SilenceAutoRearm. Returns empty array when valid. */
export function validateSilenceAutoRearm(instance: SilenceAutoRearm): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.silenceAutoRearmMs <= 120000.0 — reason: bare variable 'bearer' has no binding in this scope
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
  if (!((instance.timestamp >= 0))) {
    violations.push("[HeartRateReading] invariant violated: self.timestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for AlarmThreshold. Returns empty array when valid. */
export function validateAlarmThreshold(instance: AlarmThreshold): readonly string[] {
  const violations: string[] = [];
  if (!((instance.thresholdId !== null))) {
    violations.push("[AlarmThreshold] invariant violated: self.thresholdId <> null");
  }
  if (!((instance.upperBound > instance.lowerBound))) {
    violations.push("[AlarmThreshold] invariant violated: self.upperBound > self.lowerBound");
  }
  return violations;
}

/** Runtime invariant check for SensorSignal. Returns empty array when valid. */
export function validateSensorSignal(instance: SensorSignal): readonly string[] {
  const violations: string[] = [];
  if (!((instance.signalId !== null))) {
    violations.push("[SensorSignal] invariant violated: self.signalId <> null");
  }
  return violations;
}

/** Runtime invariant check for SilencedAlarm. Returns empty array when valid. */
export function validateSilencedAlarm(instance: SilencedAlarm): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmId !== null))) {
    violations.push("[SilencedAlarm] invariant violated: self.alarmId <> null");
  }
  if (!((instance.silencedTimestamp >= 0))) {
    violations.push("[SilencedAlarm] invariant violated: self.silencedTimestamp >= 0.0");
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

/** Runtime invariant check for SensorDisconnectFlow. Returns empty array when valid. */
export function validateSensorDisconnectFlow(instance: SensorDisconnectFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[SensorDisconnectFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for AlarmSilenceFlow. Returns empty array when valid. */
export function validateAlarmSilenceFlow(instance: AlarmSilenceFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[AlarmSilenceFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for BedsideMonitorSystemRequirements. Returns empty array when valid. */
export function validateBedsideMonitorSystemRequirements(instance: BedsideMonitorSystemRequirements): readonly string[] {
  const violations: string[] = [];
  if (!((instance.currentHeartRate >= 0))) {
    violations.push("[BedsideMonitorSystemRequirements] invariant violated: self.currentHeartRate >= 0.0");
  }
  if (!((instance.rejectionCount >= 0))) {
    violations.push("[BedsideMonitorSystemRequirements] invariant violated: self.rejectionCount >= 0");
  }
  if (!((instance.sensorLastSignalTimestamp >= 0))) {
    violations.push("[BedsideMonitorSystemRequirements] invariant violated: self.sensorLastSignalTimestamp >= 0.0");
  }
  if (!((instance.alarmSilenceTimestamp >= 0))) {
    violations.push("[BedsideMonitorSystemRequirements] invariant violated: self.alarmSilenceTimestamp >= 0.0");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds. User supplies this. */
export type BedsideMonitorSystemFormalizedFormalConfigurePlausibilityBoundsImpl = (self: BedsideMonitorSystemFormalized, lowerBound: number, upperBound: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number) => { self: BedsideMonitorSystemFormalized; modified: { implausibleThresholdLower: unknown; implausibleThresholdUpper: unknown; maxAlarmLatencyMs: unknown; maxSignalLossMsBeforeAlarm: unknown; silenceAutoRearmMs: unknown; alarmThresholdsConfigured: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds. */
export function wrapBedsideMonitorSystemFormalizedFormalConfigurePlausibilityBounds(impl: BedsideMonitorSystemFormalizedFormalConfigurePlausibilityBoundsImpl): (self: BedsideMonitorSystemFormalized, lowerBound: number, upperBound: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number) => BedsideMonitorSystemFormalized {
  return (self, lowerBound, upperBound, alarmLatencyMs, signalLossMs, silenceRearmMs) => {
    const preViolations: string[] = [];
    if (!((lowerBound <= 20))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: lowerBound <= 20.0");
    }
    if (!((upperBound >= 250))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: upperBound >= 250.0");
    }
    if (!((upperBound > lowerBound))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: upperBound > lowerBound");
    }
    if (!((alarmLatencyMs > 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: alarmLatencyMs > 0.0");
    }
    if (!((signalLossMs > 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: signalLossMs > 0.0");
    }
    if (!((silenceRearmMs > 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: silenceRearmMs > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, lowerBound, upperBound, alarmLatencyMs, signalLossMs, silenceRearmMs);
      const postViolations: string[] = [];
      if (!((__result.self.implausibleThresholdLower === lowerBound))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.implausibleThresholdLower = lowerBound");
      }
      if (!((__result.self.implausibleThresholdUpper === upperBound))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.implausibleThresholdUpper = upperBound");
      }
      if (!((__result.self.maxAlarmLatencyMs === alarmLatencyMs))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.maxAlarmLatencyMs = alarmLatencyMs");
      }
      if (!((__result.self.maxSignalLossMsBeforeAlarm === signalLossMs))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.maxSignalLossMsBeforeAlarm = signalLossMs");
      }
      if (!((__result.self.silenceAutoRearmMs === silenceRearmMs))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.silenceAutoRearmMs = silenceRearmMs");
      }
      if (!((__result.self.alarmThresholdsConfigured === true))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.alarmThresholdsConfigured = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds (async). User supplies this. */
export type BedsideMonitorSystemFormalizedFormalConfigurePlausibilityBoundsAsyncImpl = (self: BedsideMonitorSystemFormalized, lowerBound: number, upperBound: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number) => Promise<{ self: BedsideMonitorSystemFormalized; modified: { implausibleThresholdLower: unknown; implausibleThresholdUpper: unknown; maxAlarmLatencyMs: unknown; maxSignalLossMsBeforeAlarm: unknown; silenceAutoRearmMs: unknown; alarmThresholdsConfigured: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds (async). */
export function wrapBedsideMonitorSystemFormalizedFormalConfigurePlausibilityBoundsAsync(impl: BedsideMonitorSystemFormalizedFormalConfigurePlausibilityBoundsAsyncImpl): (self: BedsideMonitorSystemFormalized, lowerBound: number, upperBound: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number) => Promise<BedsideMonitorSystemFormalized> {
  return async (self, lowerBound, upperBound, alarmLatencyMs, signalLossMs, silenceRearmMs) => {
    const preViolations: string[] = [];
    if (!((lowerBound <= 20))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: lowerBound <= 20.0");
    }
    if (!((upperBound >= 250))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: upperBound >= 250.0");
    }
    if (!((upperBound > lowerBound))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: upperBound > lowerBound");
    }
    if (!((alarmLatencyMs > 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: alarmLatencyMs > 0.0");
    }
    if (!((signalLossMs > 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: signalLossMs > 0.0");
    }
    if (!((silenceRearmMs > 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] pre violated: silenceRearmMs > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, lowerBound, upperBound, alarmLatencyMs, signalLossMs, silenceRearmMs);
      const postViolations: string[] = [];
      if (!((__result.self.implausibleThresholdLower === lowerBound))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.implausibleThresholdLower = lowerBound");
      }
      if (!((__result.self.implausibleThresholdUpper === upperBound))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.implausibleThresholdUpper = upperBound");
      }
      if (!((__result.self.maxAlarmLatencyMs === alarmLatencyMs))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.maxAlarmLatencyMs = alarmLatencyMs");
      }
      if (!((__result.self.maxSignalLossMsBeforeAlarm === signalLossMs))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.maxSignalLossMsBeforeAlarm = signalLossMs");
      }
      if (!((__result.self.silenceAutoRearmMs === silenceRearmMs))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.silenceAutoRearmMs = silenceRearmMs");
      }
      if (!((__result.self.alarmThresholdsConfigured === true))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalConfigurePlausibilityBounds] post violated: self.alarmThresholdsConfigured = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalRejectImplausibleReading. User supplies this. */
export type BedsideMonitorSystemFormalizedFormalRejectImplausibleReadingImpl = (self: BedsideMonitorSystemFormalized, newValue: number, timestamp: number) => { self: BedsideMonitorSystemFormalized; modified: { heartRatePlausible: unknown; rejectionCount: unknown; sensorLastSignalTimestamp: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalRejectImplausibleReading. */
export function wrapBedsideMonitorSystemFormalizedFormalRejectImplausibleReading(impl: BedsideMonitorSystemFormalizedFormalRejectImplausibleReadingImpl): (self: BedsideMonitorSystemFormalized, newValue: number, timestamp: number) => BedsideMonitorSystemFormalized {
  return (self, newValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: timestamp >= 0.0");
    }
    if (!(((newValue < self.implausibleThresholdLower) || (newValue > self.implausibleThresholdUpper)))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: newValue < self.implausibleThresholdLower or\n         newValue > self.implausibleThresholdUpper");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: self.sensorConnected = true");
    }
    if (!((self.implausibleThresholdLower <= 20))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: self.implausibleThresholdLower <= 20.0");
    }
    if (!((self.implausibleThresholdUpper >= 250))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: self.implausibleThresholdUpper >= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.currentHeartRate": self.currentHeartRate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newValue, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.heartRatePlausible === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] post violated: self.heartRatePlausible = false");
      }
      if (!((__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1)))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] post violated: self.rejectionCount = self.rejectionCount@pre + 1");
      }
      if (!((__result.self.currentHeartRate === __pre["self.currentHeartRate"]))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] post violated: self.currentHeartRate = self.currentHeartRate@pre");
      }
      if (!((__result.self.sensorLastSignalTimestamp === timestamp))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] post violated: self.sensorLastSignalTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalRejectImplausibleReading (async). User supplies this. */
export type BedsideMonitorSystemFormalizedFormalRejectImplausibleReadingAsyncImpl = (self: BedsideMonitorSystemFormalized, newValue: number, timestamp: number) => Promise<{ self: BedsideMonitorSystemFormalized; modified: { heartRatePlausible: unknown; rejectionCount: unknown; sensorLastSignalTimestamp: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalRejectImplausibleReading (async). */
export function wrapBedsideMonitorSystemFormalizedFormalRejectImplausibleReadingAsync(impl: BedsideMonitorSystemFormalizedFormalRejectImplausibleReadingAsyncImpl): (self: BedsideMonitorSystemFormalized, newValue: number, timestamp: number) => Promise<BedsideMonitorSystemFormalized> {
  return async (self, newValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: timestamp >= 0.0");
    }
    if (!(((newValue < self.implausibleThresholdLower) || (newValue > self.implausibleThresholdUpper)))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: newValue < self.implausibleThresholdLower or\n         newValue > self.implausibleThresholdUpper");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: self.sensorConnected = true");
    }
    if (!((self.implausibleThresholdLower <= 20))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: self.implausibleThresholdLower <= 20.0");
    }
    if (!((self.implausibleThresholdUpper >= 250))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] pre violated: self.implausibleThresholdUpper >= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.currentHeartRate": self.currentHeartRate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newValue, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.heartRatePlausible === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] post violated: self.heartRatePlausible = false");
      }
      if (!((__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1)))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] post violated: self.rejectionCount = self.rejectionCount@pre + 1");
      }
      if (!((__result.self.currentHeartRate === __pre["self.currentHeartRate"]))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] post violated: self.currentHeartRate = self.currentHeartRate@pre");
      }
      if (!((__result.self.sensorLastSignalTimestamp === timestamp))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectImplausibleReading] post violated: self.sensorLastSignalTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalRejectNonPositiveReading. User supplies this. */
export type BedsideMonitorSystemFormalizedFormalRejectNonPositiveReadingImpl = (self: BedsideMonitorSystemFormalized, newValue: number, timestamp: number) => { self: BedsideMonitorSystemFormalized; modified: { heartRatePlausible: unknown; rejectionCount: unknown; sensorLastSignalTimestamp: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalRejectNonPositiveReading. */
export function wrapBedsideMonitorSystemFormalizedFormalRejectNonPositiveReading(impl: BedsideMonitorSystemFormalizedFormalRejectNonPositiveReadingImpl): (self: BedsideMonitorSystemFormalized, newValue: number, timestamp: number) => BedsideMonitorSystemFormalized {
  return (self, newValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: timestamp >= 0.0");
    }
    if (!((newValue <= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: newValue <= 0.0");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: self.sensorConnected = true");
    }
    if (!((self.implausibleThresholdLower <= 20))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: self.implausibleThresholdLower <= 20.0");
    }
    if (!((self.implausibleThresholdUpper >= 250))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: self.implausibleThresholdUpper >= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.currentHeartRate": self.currentHeartRate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newValue, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.heartRatePlausible === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] post violated: self.heartRatePlausible = false");
      }
      if (!((__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1)))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] post violated: self.rejectionCount = self.rejectionCount@pre + 1");
      }
      if (!((__result.self.currentHeartRate === __pre["self.currentHeartRate"]))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] post violated: self.currentHeartRate = self.currentHeartRate@pre");
      }
      if (!((__result.self.sensorLastSignalTimestamp === timestamp))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] post violated: self.sensorLastSignalTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalRejectNonPositiveReading (async). User supplies this. */
export type BedsideMonitorSystemFormalizedFormalRejectNonPositiveReadingAsyncImpl = (self: BedsideMonitorSystemFormalized, newValue: number, timestamp: number) => Promise<{ self: BedsideMonitorSystemFormalized; modified: { heartRatePlausible: unknown; rejectionCount: unknown; sensorLastSignalTimestamp: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalRejectNonPositiveReading (async). */
export function wrapBedsideMonitorSystemFormalizedFormalRejectNonPositiveReadingAsync(impl: BedsideMonitorSystemFormalizedFormalRejectNonPositiveReadingAsyncImpl): (self: BedsideMonitorSystemFormalized, newValue: number, timestamp: number) => Promise<BedsideMonitorSystemFormalized> {
  return async (self, newValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: timestamp >= 0.0");
    }
    if (!((newValue <= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: newValue <= 0.0");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: self.sensorConnected = true");
    }
    if (!((self.implausibleThresholdLower <= 20))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: self.implausibleThresholdLower <= 20.0");
    }
    if (!((self.implausibleThresholdUpper >= 250))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] pre violated: self.implausibleThresholdUpper >= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.currentHeartRate": self.currentHeartRate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newValue, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.heartRatePlausible === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] post violated: self.heartRatePlausible = false");
      }
      if (!((__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1)))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] post violated: self.rejectionCount = self.rejectionCount@pre + 1");
      }
      if (!((__result.self.currentHeartRate === __pre["self.currentHeartRate"]))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] post violated: self.currentHeartRate = self.currentHeartRate@pre");
      }
      if (!((__result.self.sensorLastSignalTimestamp === timestamp))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalRejectNonPositiveReading] post violated: self.sensorLastSignalTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalEnforceAlarmLatency. User supplies this. */
export type BedsideMonitorSystemFormalizedFormalEnforceAlarmLatencyImpl = (self: BedsideMonitorSystemFormalized, vitalType: string, actualValue: number, crossingTimestamp: number) => { self: BedsideMonitorSystemFormalized; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalEnforceAlarmLatency. */
export function wrapBedsideMonitorSystemFormalizedFormalEnforceAlarmLatency(impl: BedsideMonitorSystemFormalizedFormalEnforceAlarmLatencyImpl): (self: BedsideMonitorSystemFormalized, vitalType: string, actualValue: number, crossingTimestamp: number) => BedsideMonitorSystemFormalized {
  return (self, vitalType, actualValue, crossingTimestamp) => {
    const preViolations: string[] = [];
    if (!((crossingTimestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] pre violated: crossingTimestamp >= 0.0");
    }
    if (!(((actualValue > self.implausibleThresholdUpper) || (actualValue < self.implausibleThresholdLower)))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] pre violated: (actualValue > self.implausibleThresholdUpper) or\n         (actualValue < self.implausibleThresholdLower)");
    }
    if (!(((crossingTimestamp - self.sensorLastSignalTimestamp) > self.maxAlarmLatencyMs))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] pre violated: crossingTimestamp - self.sensorLastSignalTimestamp > self.maxAlarmLatencyMs");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] pre violated: self.alarmActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, vitalType, actualValue, crossingTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === (((actualValue > __result.self.implausibleThresholdUpper)) ? ("high_hr") : ("low_hr"))))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] post violated: self.alarmType = if actualValue > self.implausibleThresholdUpper then 'high_hr' else 'low_hr' endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalEnforceAlarmLatency (async). User supplies this. */
export type BedsideMonitorSystemFormalizedFormalEnforceAlarmLatencyAsyncImpl = (self: BedsideMonitorSystemFormalized, vitalType: string, actualValue: number, crossingTimestamp: number) => Promise<{ self: BedsideMonitorSystemFormalized; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalEnforceAlarmLatency (async). */
export function wrapBedsideMonitorSystemFormalizedFormalEnforceAlarmLatencyAsync(impl: BedsideMonitorSystemFormalizedFormalEnforceAlarmLatencyAsyncImpl): (self: BedsideMonitorSystemFormalized, vitalType: string, actualValue: number, crossingTimestamp: number) => Promise<BedsideMonitorSystemFormalized> {
  return async (self, vitalType, actualValue, crossingTimestamp) => {
    const preViolations: string[] = [];
    if (!((crossingTimestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] pre violated: crossingTimestamp >= 0.0");
    }
    if (!(((actualValue > self.implausibleThresholdUpper) || (actualValue < self.implausibleThresholdLower)))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] pre violated: (actualValue > self.implausibleThresholdUpper) or\n         (actualValue < self.implausibleThresholdLower)");
    }
    if (!(((crossingTimestamp - self.sensorLastSignalTimestamp) > self.maxAlarmLatencyMs))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] pre violated: crossingTimestamp - self.sensorLastSignalTimestamp > self.maxAlarmLatencyMs");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] pre violated: self.alarmActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, vitalType, actualValue, crossingTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === (((actualValue > __result.self.implausibleThresholdUpper)) ? ("high_hr") : ("low_hr"))))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAlarmLatency] post violated: self.alarmType = if actualValue > self.implausibleThresholdUpper then 'high_hr' else 'low_hr' endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect. User supplies this. */
export type BedsideMonitorSystemFormalizedFormalEnforceSensorDisconnectImpl = (self: BedsideMonitorSystemFormalized, signalGapDetectedAt: number) => { self: BedsideMonitorSystemFormalized; modified: { sensorConnected: unknown; alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect. */
export function wrapBedsideMonitorSystemFormalizedFormalEnforceSensorDisconnect(impl: BedsideMonitorSystemFormalizedFormalEnforceSensorDisconnectImpl): (self: BedsideMonitorSystemFormalized, signalGapDetectedAt: number) => BedsideMonitorSystemFormalized {
  return (self, signalGapDetectedAt) => {
    const preViolations: string[] = [];
    if (!((signalGapDetectedAt >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] pre violated: signalGapDetectedAt >= 0.0");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] pre violated: self.sensorConnected = true");
    }
    if (!(((signalGapDetectedAt - self.sensorLastSignalTimestamp) > self.maxSignalLossMsBeforeAlarm))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] pre violated: signalGapDetectedAt - self.sensorLastSignalTimestamp > self.maxSignalLossMsBeforeAlarm");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] pre violated: self.alarmActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, signalGapDetectedAt);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "disconnect"))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] post violated: self.alarmType = 'disconnect'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect (async). User supplies this. */
export type BedsideMonitorSystemFormalizedFormalEnforceSensorDisconnectAsyncImpl = (self: BedsideMonitorSystemFormalized, signalGapDetectedAt: number) => Promise<{ self: BedsideMonitorSystemFormalized; modified: { sensorConnected: unknown; alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect (async). */
export function wrapBedsideMonitorSystemFormalizedFormalEnforceSensorDisconnectAsync(impl: BedsideMonitorSystemFormalizedFormalEnforceSensorDisconnectAsyncImpl): (self: BedsideMonitorSystemFormalized, signalGapDetectedAt: number) => Promise<BedsideMonitorSystemFormalized> {
  return async (self, signalGapDetectedAt) => {
    const preViolations: string[] = [];
    if (!((signalGapDetectedAt >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] pre violated: signalGapDetectedAt >= 0.0");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] pre violated: self.sensorConnected = true");
    }
    if (!(((signalGapDetectedAt - self.sensorLastSignalTimestamp) > self.maxSignalLossMsBeforeAlarm))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] pre violated: signalGapDetectedAt - self.sensorLastSignalTimestamp > self.maxSignalLossMsBeforeAlarm");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] pre violated: self.alarmActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, signalGapDetectedAt);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "disconnect"))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceSensorDisconnect] post violated: self.alarmType = 'disconnect'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalEnforceAutoRearm. User supplies this. */
export type BedsideMonitorSystemFormalizedFormalEnforceAutoRearmImpl = (self: BedsideMonitorSystemFormalized, rearmTimestamp: number) => { self: BedsideMonitorSystemFormalized; modified: { alarmSilenced: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalEnforceAutoRearm. */
export function wrapBedsideMonitorSystemFormalizedFormalEnforceAutoRearm(impl: BedsideMonitorSystemFormalizedFormalEnforceAutoRearmImpl): (self: BedsideMonitorSystemFormalized, rearmTimestamp: number) => BedsideMonitorSystemFormalized {
  return (self, rearmTimestamp) => {
    const preViolations: string[] = [];
    if (!((rearmTimestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] pre violated: rearmTimestamp >= 0.0");
    }
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] pre violated: self.alarmSilenced = true");
    }
    if (!(((rearmTimestamp - self.alarmSilenceTimestamp) >= self.silenceAutoRearmMs))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] pre violated: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmSilenceTimestamp": self.alarmSilenceTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rearmTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === __pre["self.alarmSilenceTimestamp"]))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] post violated: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemFormalized.formalEnforceAutoRearm (async). User supplies this. */
export type BedsideMonitorSystemFormalizedFormalEnforceAutoRearmAsyncImpl = (self: BedsideMonitorSystemFormalized, rearmTimestamp: number) => Promise<{ self: BedsideMonitorSystemFormalized; modified: { alarmSilenced: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemFormalized.formalEnforceAutoRearm (async). */
export function wrapBedsideMonitorSystemFormalizedFormalEnforceAutoRearmAsync(impl: BedsideMonitorSystemFormalizedFormalEnforceAutoRearmAsyncImpl): (self: BedsideMonitorSystemFormalized, rearmTimestamp: number) => Promise<BedsideMonitorSystemFormalized> {
  return async (self, rearmTimestamp) => {
    const preViolations: string[] = [];
    if (!((rearmTimestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] pre violated: rearmTimestamp >= 0.0");
    }
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] pre violated: self.alarmSilenced = true");
    }
    if (!(((rearmTimestamp - self.alarmSilenceTimestamp) >= self.silenceAutoRearmMs))) {
      preViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] pre violated: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmSilenceTimestamp": self.alarmSilenceTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rearmTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === __pre["self.alarmSilenceTimestamp"]))) {
        postViolations.push("[BedsideMonitorSystemFormalized.formalEnforceAutoRearm] post violated: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.deliverHeartRateReading. User supplies this. */
export type BedsideMonitorSystemRequirementsDeliverHeartRateReadingImpl = (self: BedsideMonitorSystemRequirements, newValue: number, timestamp: number) => { self: BedsideMonitorSystemRequirements; modified: { currentHeartRate: unknown; heartRatePlausible: unknown; rejectionCount: unknown; sensorLastSignalTimestamp: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.deliverHeartRateReading. */
export function wrapBedsideMonitorSystemRequirementsDeliverHeartRateReading(impl: BedsideMonitorSystemRequirementsDeliverHeartRateReadingImpl): (self: BedsideMonitorSystemRequirements, newValue: number, timestamp: number) => BedsideMonitorSystemRequirements {
  return (self, newValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.deliverHeartRateReading] pre violated: timestamp >= 0.0");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.deliverHeartRateReading] pre violated: self.sensorConnected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.currentHeartRate": self.currentHeartRate,
      "self.sensorLastSignalTimestamp": self.sensorLastSignalTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newValue, timestamp);
      const postViolations: string[] = [];
      if (!(((((newValue >= __result.self.implausibleThresholdLower) && (newValue <= __result.self.implausibleThresholdUpper))) ? (((((__result.self.currentHeartRate === newValue) && (__result.self.heartRatePlausible === true)) && (__result.self.rejectionCount === __pre["self.rejectionCount"])) && (__result.self.sensorLastSignalTimestamp === timestamp))) : (((((__result.self.currentHeartRate === __pre["self.currentHeartRate"]) && (__result.self.heartRatePlausible === false)) && (__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1))) && (__result.self.sensorLastSignalTimestamp === __pre["self.sensorLastSignalTimestamp"])))))) {
        postViolations.push("[BedsideMonitorSystemRequirements.deliverHeartRateReading] post violated: if newValue >= self.implausibleThresholdLower and newValue <= self.implausibleThresholdUpper then\n            self.currentHeartRate = newValue and\n            self.heartRatePlausible = true and\n            self.rejectionCount = self.rejectionCount@pre and\n            self.sensorLastSignalTimestamp = timestamp\n          else\n            self.currentHeartRate = self.currentHeartRate@pre and\n            self.heartRatePlausible = false and\n            self.rejectionCount = self.rejectionCount@pre + 1 and\n            self.sensorLastSignalTimestamp = self.sensorLastSignalTimestamp@pre\n          endif");
      }
      // SKIPPED post-clause (not translatable): result = if newValue >= self.implausibleThresholdLower and newValue <= self.implausibleThresholdUpper then newValue else -1.0 endif — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.deliverHeartRateReading (async). User supplies this. */
export type BedsideMonitorSystemRequirementsDeliverHeartRateReadingAsyncImpl = (self: BedsideMonitorSystemRequirements, newValue: number, timestamp: number) => Promise<{ self: BedsideMonitorSystemRequirements; modified: { currentHeartRate: unknown; heartRatePlausible: unknown; rejectionCount: unknown; sensorLastSignalTimestamp: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.deliverHeartRateReading (async). */
export function wrapBedsideMonitorSystemRequirementsDeliverHeartRateReadingAsync(impl: BedsideMonitorSystemRequirementsDeliverHeartRateReadingAsyncImpl): (self: BedsideMonitorSystemRequirements, newValue: number, timestamp: number) => Promise<BedsideMonitorSystemRequirements> {
  return async (self, newValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.deliverHeartRateReading] pre violated: timestamp >= 0.0");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.deliverHeartRateReading] pre violated: self.sensorConnected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.currentHeartRate": self.currentHeartRate,
      "self.sensorLastSignalTimestamp": self.sensorLastSignalTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newValue, timestamp);
      const postViolations: string[] = [];
      if (!(((((newValue >= __result.self.implausibleThresholdLower) && (newValue <= __result.self.implausibleThresholdUpper))) ? (((((__result.self.currentHeartRate === newValue) && (__result.self.heartRatePlausible === true)) && (__result.self.rejectionCount === __pre["self.rejectionCount"])) && (__result.self.sensorLastSignalTimestamp === timestamp))) : (((((__result.self.currentHeartRate === __pre["self.currentHeartRate"]) && (__result.self.heartRatePlausible === false)) && (__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1))) && (__result.self.sensorLastSignalTimestamp === __pre["self.sensorLastSignalTimestamp"])))))) {
        postViolations.push("[BedsideMonitorSystemRequirements.deliverHeartRateReading] post violated: if newValue >= self.implausibleThresholdLower and newValue <= self.implausibleThresholdUpper then\n            self.currentHeartRate = newValue and\n            self.heartRatePlausible = true and\n            self.rejectionCount = self.rejectionCount@pre and\n            self.sensorLastSignalTimestamp = timestamp\n          else\n            self.currentHeartRate = self.currentHeartRate@pre and\n            self.heartRatePlausible = false and\n            self.rejectionCount = self.rejectionCount@pre + 1 and\n            self.sensorLastSignalTimestamp = self.sensorLastSignalTimestamp@pre\n          endif");
      }
      // SKIPPED post-clause (not translatable): result = if newValue >= self.implausibleThresholdLower and newValue <= self.implausibleThresholdUpper then newValue else -1.0 endif — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.raiseThresholdAlarm. User supplies this. */
export type BedsideMonitorSystemRequirementsRaiseThresholdAlarmImpl = (self: BedsideMonitorSystemRequirements, vitalType: string, actualValue: number, thresholdUpper: number, thresholdLower: number, crossTimestamp: number) => { self: BedsideMonitorSystemRequirements; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.raiseThresholdAlarm. */
export function wrapBedsideMonitorSystemRequirementsRaiseThresholdAlarm(impl: BedsideMonitorSystemRequirementsRaiseThresholdAlarmImpl): (self: BedsideMonitorSystemRequirements, vitalType: string, actualValue: number, thresholdUpper: number, thresholdLower: number, crossTimestamp: number) => BedsideMonitorSystemRequirements {
  return (self, vitalType, actualValue, thresholdUpper, thresholdLower, crossTimestamp) => {
    const preViolations: string[] = [];
    if (!((crossTimestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] pre violated: crossTimestamp >= 0.0");
    }
    if (!(((actualValue > thresholdUpper) || (actualValue < thresholdLower)))) {
      preViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] pre violated: (actualValue > thresholdUpper) or (actualValue < thresholdLower)");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] pre violated: self.alarmActive = false");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] pre violated: not self.alarmSilenced");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, vitalType, actualValue, thresholdUpper, thresholdLower, crossTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === (((actualValue > thresholdUpper)) ? ("high_hr") : ("low_hr"))))) {
        postViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] post violated: self.alarmType = if actualValue > thresholdUpper then 'high_hr' else 'low_hr' endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.raiseThresholdAlarm (async). User supplies this. */
export type BedsideMonitorSystemRequirementsRaiseThresholdAlarmAsyncImpl = (self: BedsideMonitorSystemRequirements, vitalType: string, actualValue: number, thresholdUpper: number, thresholdLower: number, crossTimestamp: number) => Promise<{ self: BedsideMonitorSystemRequirements; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.raiseThresholdAlarm (async). */
export function wrapBedsideMonitorSystemRequirementsRaiseThresholdAlarmAsync(impl: BedsideMonitorSystemRequirementsRaiseThresholdAlarmAsyncImpl): (self: BedsideMonitorSystemRequirements, vitalType: string, actualValue: number, thresholdUpper: number, thresholdLower: number, crossTimestamp: number) => Promise<BedsideMonitorSystemRequirements> {
  return async (self, vitalType, actualValue, thresholdUpper, thresholdLower, crossTimestamp) => {
    const preViolations: string[] = [];
    if (!((crossTimestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] pre violated: crossTimestamp >= 0.0");
    }
    if (!(((actualValue > thresholdUpper) || (actualValue < thresholdLower)))) {
      preViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] pre violated: (actualValue > thresholdUpper) or (actualValue < thresholdLower)");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] pre violated: self.alarmActive = false");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] pre violated: not self.alarmSilenced");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, vitalType, actualValue, thresholdUpper, thresholdLower, crossTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === (((actualValue > thresholdUpper)) ? ("high_hr") : ("low_hr"))))) {
        postViolations.push("[BedsideMonitorSystemRequirements.raiseThresholdAlarm] post violated: self.alarmType = if actualValue > thresholdUpper then 'high_hr' else 'low_hr' endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.detectSensorDisconnect. User supplies this. */
export type BedsideMonitorSystemRequirementsDetectSensorDisconnectImpl = (self: BedsideMonitorSystemRequirements, lossDetectedAt: number) => { self: BedsideMonitorSystemRequirements; modified: { sensorConnected: unknown; alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.detectSensorDisconnect. */
export function wrapBedsideMonitorSystemRequirementsDetectSensorDisconnect(impl: BedsideMonitorSystemRequirementsDetectSensorDisconnectImpl): (self: BedsideMonitorSystemRequirements, lossDetectedAt: number) => BedsideMonitorSystemRequirements {
  return (self, lossDetectedAt) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] pre violated: self.sensorConnected = true");
    }
    if (!(((lossDetectedAt - self.sensorLastSignalTimestamp) > self.maxSignalLossMsBeforeAlarm))) {
      preViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] pre violated: lossDetectedAt - self.sensorLastSignalTimestamp > self.maxSignalLossMsBeforeAlarm");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] pre violated: self.alarmActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, lossDetectedAt);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "disconnect"))) {
        postViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] post violated: self.alarmType = 'disconnect'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.detectSensorDisconnect (async). User supplies this. */
export type BedsideMonitorSystemRequirementsDetectSensorDisconnectAsyncImpl = (self: BedsideMonitorSystemRequirements, lossDetectedAt: number) => Promise<{ self: BedsideMonitorSystemRequirements; modified: { sensorConnected: unknown; alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.detectSensorDisconnect (async). */
export function wrapBedsideMonitorSystemRequirementsDetectSensorDisconnectAsync(impl: BedsideMonitorSystemRequirementsDetectSensorDisconnectAsyncImpl): (self: BedsideMonitorSystemRequirements, lossDetectedAt: number) => Promise<BedsideMonitorSystemRequirements> {
  return async (self, lossDetectedAt) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] pre violated: self.sensorConnected = true");
    }
    if (!(((lossDetectedAt - self.sensorLastSignalTimestamp) > self.maxSignalLossMsBeforeAlarm))) {
      preViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] pre violated: lossDetectedAt - self.sensorLastSignalTimestamp > self.maxSignalLossMsBeforeAlarm");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] pre violated: self.alarmActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, lossDetectedAt);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "disconnect"))) {
        postViolations.push("[BedsideMonitorSystemRequirements.detectSensorDisconnect] post violated: self.alarmType = 'disconnect'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.silenceAlarm. User supplies this. */
export type BedsideMonitorSystemRequirementsSilenceAlarmImpl = (self: BedsideMonitorSystemRequirements, silenceTimestamp: number) => { self: BedsideMonitorSystemRequirements; modified: { alarmSilenced: unknown; alarmSilenceTimestamp: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.silenceAlarm. */
export function wrapBedsideMonitorSystemRequirementsSilenceAlarm(impl: BedsideMonitorSystemRequirementsSilenceAlarmImpl): (self: BedsideMonitorSystemRequirements, silenceTimestamp: number) => BedsideMonitorSystemRequirements {
  return (self, silenceTimestamp) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] pre violated: self.alarmActive = true");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] pre violated: not self.alarmSilenced");
    }
    if (!((silenceTimestamp >= self.sensorLastSignalTimestamp))) {
      preViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] pre violated: silenceTimestamp >= self.sensorLastSignalTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmType": self.alarmType,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, silenceTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === silenceTimestamp))) {
        postViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] post violated: self.alarmSilenceTimestamp = silenceTimestamp");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmType === __pre["self.alarmType"]))) {
        postViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] post violated: self.alarmType = self.alarmType@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.silenceAlarm (async). User supplies this. */
export type BedsideMonitorSystemRequirementsSilenceAlarmAsyncImpl = (self: BedsideMonitorSystemRequirements, silenceTimestamp: number) => Promise<{ self: BedsideMonitorSystemRequirements; modified: { alarmSilenced: unknown; alarmSilenceTimestamp: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.silenceAlarm (async). */
export function wrapBedsideMonitorSystemRequirementsSilenceAlarmAsync(impl: BedsideMonitorSystemRequirementsSilenceAlarmAsyncImpl): (self: BedsideMonitorSystemRequirements, silenceTimestamp: number) => Promise<BedsideMonitorSystemRequirements> {
  return async (self, silenceTimestamp) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] pre violated: self.alarmActive = true");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] pre violated: not self.alarmSilenced");
    }
    if (!((silenceTimestamp >= self.sensorLastSignalTimestamp))) {
      preViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] pre violated: silenceTimestamp >= self.sensorLastSignalTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmType": self.alarmType,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, silenceTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === silenceTimestamp))) {
        postViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] post violated: self.alarmSilenceTimestamp = silenceTimestamp");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmType === __pre["self.alarmType"]))) {
        postViolations.push("[BedsideMonitorSystemRequirements.silenceAlarm] post violated: self.alarmType = self.alarmType@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.autoRearmAlarm. User supplies this. */
export type BedsideMonitorSystemRequirementsAutoRearmAlarmImpl = (self: BedsideMonitorSystemRequirements, rearmTimestamp: number) => { self: BedsideMonitorSystemRequirements; modified: { alarmSilenced: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.autoRearmAlarm. */
export function wrapBedsideMonitorSystemRequirementsAutoRearmAlarm(impl: BedsideMonitorSystemRequirementsAutoRearmAlarmImpl): (self: BedsideMonitorSystemRequirements, rearmTimestamp: number) => BedsideMonitorSystemRequirements {
  return (self, rearmTimestamp) => {
    const preViolations: string[] = [];
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] pre violated: self.alarmSilenced = true");
    }
    if (!(((rearmTimestamp - self.alarmSilenceTimestamp) >= self.silenceAutoRearmMs))) {
      preViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] pre violated: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmSilenceTimestamp": self.alarmSilenceTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rearmTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === __pre["self.alarmSilenceTimestamp"]))) {
        postViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] post violated: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.autoRearmAlarm (async). User supplies this. */
export type BedsideMonitorSystemRequirementsAutoRearmAlarmAsyncImpl = (self: BedsideMonitorSystemRequirements, rearmTimestamp: number) => Promise<{ self: BedsideMonitorSystemRequirements; modified: { alarmSilenced: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.autoRearmAlarm (async). */
export function wrapBedsideMonitorSystemRequirementsAutoRearmAlarmAsync(impl: BedsideMonitorSystemRequirementsAutoRearmAlarmAsyncImpl): (self: BedsideMonitorSystemRequirements, rearmTimestamp: number) => Promise<BedsideMonitorSystemRequirements> {
  return async (self, rearmTimestamp) => {
    const preViolations: string[] = [];
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] pre violated: self.alarmSilenced = true");
    }
    if (!(((rearmTimestamp - self.alarmSilenceTimestamp) >= self.silenceAutoRearmMs))) {
      preViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] pre violated: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmSilenceTimestamp": self.alarmSilenceTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rearmTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === __pre["self.alarmSilenceTimestamp"]))) {
        postViolations.push("[BedsideMonitorSystemRequirements.autoRearmAlarm] post violated: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.clearAlarm. User supplies this. */
export type BedsideMonitorSystemRequirementsClearAlarmImpl = (self: BedsideMonitorSystemRequirements) => { self: BedsideMonitorSystemRequirements; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.clearAlarm. */
export function wrapBedsideMonitorSystemRequirementsClearAlarm(impl: BedsideMonitorSystemRequirementsClearAlarmImpl): (self: BedsideMonitorSystemRequirements) => BedsideMonitorSystemRequirements {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.clearAlarm] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.clearAlarm] post violated: self.alarmActive = false");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.clearAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "none"))) {
        postViolations.push("[BedsideMonitorSystemRequirements.clearAlarm] post violated: self.alarmType = 'none'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.clearAlarm (async). User supplies this. */
export type BedsideMonitorSystemRequirementsClearAlarmAsyncImpl = (self: BedsideMonitorSystemRequirements) => Promise<{ self: BedsideMonitorSystemRequirements; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.clearAlarm (async). */
export function wrapBedsideMonitorSystemRequirementsClearAlarmAsync(impl: BedsideMonitorSystemRequirementsClearAlarmAsyncImpl): (self: BedsideMonitorSystemRequirements) => Promise<BedsideMonitorSystemRequirements> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[BedsideMonitorSystemRequirements.clearAlarm] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.clearAlarm] post violated: self.alarmActive = false");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[BedsideMonitorSystemRequirements.clearAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "none"))) {
        postViolations.push("[BedsideMonitorSystemRequirements.clearAlarm] post violated: self.alarmType = 'none'");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.restoreSensorConnection. User supplies this. */
export type BedsideMonitorSystemRequirementsRestoreSensorConnectionImpl = (self: BedsideMonitorSystemRequirements, newValue: number, timestamp: number) => { self: BedsideMonitorSystemRequirements; modified: { sensorConnected: unknown; sensorLastSignalTimestamp: unknown; currentHeartRate: unknown; heartRatePlausible: unknown; rejectionCount: unknown; alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.restoreSensorConnection. */
export function wrapBedsideMonitorSystemRequirementsRestoreSensorConnection(impl: BedsideMonitorSystemRequirementsRestoreSensorConnectionImpl): (self: BedsideMonitorSystemRequirements, newValue: number, timestamp: number) => BedsideMonitorSystemRequirements {
  return (self, newValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === false))) {
      preViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] pre violated: self.sensorConnected = false");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.currentHeartRate": self.currentHeartRate,
      "self.alarmActive": self.alarmActive,
      "self.alarmSilenced": self.alarmSilenced,
      "self.alarmType": self.alarmType,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newValue, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.sensorLastSignalTimestamp === timestamp))) {
        postViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] post violated: self.sensorLastSignalTimestamp = timestamp");
      }
      if (!(((((newValue >= __result.self.implausibleThresholdLower) && (newValue <= __result.self.implausibleThresholdUpper))) ? ((((__result.self.currentHeartRate === newValue) && (__result.self.heartRatePlausible === true)) && (__result.self.rejectionCount === __pre["self.rejectionCount"]))) : ((((__result.self.currentHeartRate === __pre["self.currentHeartRate"]) && (__result.self.heartRatePlausible === false)) && (__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1))))))) {
        postViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] post violated: if newValue >= self.implausibleThresholdLower and newValue <= self.implausibleThresholdUpper then\n            self.currentHeartRate = newValue and\n            self.heartRatePlausible = true and\n            self.rejectionCount = self.rejectionCount@pre\n          else\n            self.currentHeartRate = self.currentHeartRate@pre and\n            self.heartRatePlausible = false and\n            self.rejectionCount = self.rejectionCount@pre + 1\n          endif");
      }
      if (!(((((__result.self.alarmActive === true) && (__result.self.alarmType === "disconnect"))) ? ((((__result.self.alarmActive === false) && (__result.self.alarmSilenced === false)) && (__result.self.alarmType === "none"))) : ((((__result.self.alarmActive === __pre["self.alarmActive"]) && (__result.self.alarmSilenced === __pre["self.alarmSilenced"])) && (__result.self.alarmType === __pre["self.alarmType"])))))) {
        postViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] post violated: if self.alarmActive = true and self.alarmType = 'disconnect' then\n            self.alarmActive = false and\n            self.alarmSilenced = false and\n            self.alarmType = 'none'\n          else\n            self.alarmActive = self.alarmActive@pre and\n            self.alarmSilenced = self.alarmSilenced@pre and\n            self.alarmType = self.alarmType@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.restoreSensorConnection (async). User supplies this. */
export type BedsideMonitorSystemRequirementsRestoreSensorConnectionAsyncImpl = (self: BedsideMonitorSystemRequirements, newValue: number, timestamp: number) => Promise<{ self: BedsideMonitorSystemRequirements; modified: { sensorConnected: unknown; sensorLastSignalTimestamp: unknown; currentHeartRate: unknown; heartRatePlausible: unknown; rejectionCount: unknown; alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.restoreSensorConnection (async). */
export function wrapBedsideMonitorSystemRequirementsRestoreSensorConnectionAsync(impl: BedsideMonitorSystemRequirementsRestoreSensorConnectionAsyncImpl): (self: BedsideMonitorSystemRequirements, newValue: number, timestamp: number) => Promise<BedsideMonitorSystemRequirements> {
  return async (self, newValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === false))) {
      preViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] pre violated: self.sensorConnected = false");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.currentHeartRate": self.currentHeartRate,
      "self.alarmActive": self.alarmActive,
      "self.alarmSilenced": self.alarmSilenced,
      "self.alarmType": self.alarmType,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newValue, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.sensorLastSignalTimestamp === timestamp))) {
        postViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] post violated: self.sensorLastSignalTimestamp = timestamp");
      }
      if (!(((((newValue >= __result.self.implausibleThresholdLower) && (newValue <= __result.self.implausibleThresholdUpper))) ? ((((__result.self.currentHeartRate === newValue) && (__result.self.heartRatePlausible === true)) && (__result.self.rejectionCount === __pre["self.rejectionCount"]))) : ((((__result.self.currentHeartRate === __pre["self.currentHeartRate"]) && (__result.self.heartRatePlausible === false)) && (__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1))))))) {
        postViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] post violated: if newValue >= self.implausibleThresholdLower and newValue <= self.implausibleThresholdUpper then\n            self.currentHeartRate = newValue and\n            self.heartRatePlausible = true and\n            self.rejectionCount = self.rejectionCount@pre\n          else\n            self.currentHeartRate = self.currentHeartRate@pre and\n            self.heartRatePlausible = false and\n            self.rejectionCount = self.rejectionCount@pre + 1\n          endif");
      }
      if (!(((((__result.self.alarmActive === true) && (__result.self.alarmType === "disconnect"))) ? ((((__result.self.alarmActive === false) && (__result.self.alarmSilenced === false)) && (__result.self.alarmType === "none"))) : ((((__result.self.alarmActive === __pre["self.alarmActive"]) && (__result.self.alarmSilenced === __pre["self.alarmSilenced"])) && (__result.self.alarmType === __pre["self.alarmType"])))))) {
        postViolations.push("[BedsideMonitorSystemRequirements.restoreSensorConnection] post violated: if self.alarmActive = true and self.alarmType = 'disconnect' then\n            self.alarmActive = false and\n            self.alarmSilenced = false and\n            self.alarmType = 'none'\n          else\n            self.alarmActive = self.alarmActive@pre and\n            self.alarmSilenced = self.alarmSilenced@pre and\n            self.alarmType = self.alarmType@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.setAlarmThresholds. User supplies this. */
export type BedsideMonitorSystemRequirementsSetAlarmThresholdsImpl = (self: BedsideMonitorSystemRequirements, implausibleLower: number, implausibleUpper: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number) => { self: BedsideMonitorSystemRequirements; modified: { implausibleThresholdLower: unknown; implausibleThresholdUpper: unknown; maxAlarmLatencyMs: unknown; maxSignalLossMsBeforeAlarm: unknown; silenceAutoRearmMs: unknown; alarmThresholdsConfigured: unknown } };

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.setAlarmThresholds. */
export function wrapBedsideMonitorSystemRequirementsSetAlarmThresholds(impl: BedsideMonitorSystemRequirementsSetAlarmThresholdsImpl): (self: BedsideMonitorSystemRequirements, implausibleLower: number, implausibleUpper: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number) => BedsideMonitorSystemRequirements {
  return (self, implausibleLower, implausibleUpper, alarmLatencyMs, signalLossMs, silenceRearmMs) => {
    const preViolations: string[] = [];
    if (!((implausibleLower >= 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: implausibleLower >= 0.0");
    }
    if (!((implausibleUpper > implausibleLower))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: implausibleUpper > implausibleLower");
    }
    if (!((alarmLatencyMs > 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: alarmLatencyMs > 0.0");
    }
    if (!((signalLossMs > 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: signalLossMs > 0.0");
    }
    if (!((silenceRearmMs > 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: silenceRearmMs > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, implausibleLower, implausibleUpper, alarmLatencyMs, signalLossMs, silenceRearmMs);
      const postViolations: string[] = [];
      if (!((__result.self.implausibleThresholdLower === implausibleLower))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.implausibleThresholdLower = implausibleLower");
      }
      if (!((__result.self.implausibleThresholdUpper === implausibleUpper))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.implausibleThresholdUpper = implausibleUpper");
      }
      if (!((__result.self.maxAlarmLatencyMs === alarmLatencyMs))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.maxAlarmLatencyMs = alarmLatencyMs");
      }
      if (!((__result.self.maxSignalLossMsBeforeAlarm === signalLossMs))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.maxSignalLossMsBeforeAlarm = signalLossMs");
      }
      if (!((__result.self.silenceAutoRearmMs === silenceRearmMs))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.silenceAutoRearmMs = silenceRearmMs");
      }
      if (!((__result.self.alarmThresholdsConfigured === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.alarmThresholdsConfigured = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BedsideMonitorSystemRequirements.setAlarmThresholds (async). User supplies this. */
export type BedsideMonitorSystemRequirementsSetAlarmThresholdsAsyncImpl = (self: BedsideMonitorSystemRequirements, implausibleLower: number, implausibleUpper: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number) => Promise<{ self: BedsideMonitorSystemRequirements; modified: { implausibleThresholdLower: unknown; implausibleThresholdUpper: unknown; maxAlarmLatencyMs: unknown; maxSignalLossMsBeforeAlarm: unknown; silenceAutoRearmMs: unknown; alarmThresholdsConfigured: unknown } }>;

/** Contract-checking wrapper for BedsideMonitorSystemRequirements.setAlarmThresholds (async). */
export function wrapBedsideMonitorSystemRequirementsSetAlarmThresholdsAsync(impl: BedsideMonitorSystemRequirementsSetAlarmThresholdsAsyncImpl): (self: BedsideMonitorSystemRequirements, implausibleLower: number, implausibleUpper: number, alarmLatencyMs: number, signalLossMs: number, silenceRearmMs: number) => Promise<BedsideMonitorSystemRequirements> {
  return async (self, implausibleLower, implausibleUpper, alarmLatencyMs, signalLossMs, silenceRearmMs) => {
    const preViolations: string[] = [];
    if (!((implausibleLower >= 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: implausibleLower >= 0.0");
    }
    if (!((implausibleUpper > implausibleLower))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: implausibleUpper > implausibleLower");
    }
    if (!((alarmLatencyMs > 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: alarmLatencyMs > 0.0");
    }
    if (!((signalLossMs > 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: signalLossMs > 0.0");
    }
    if (!((silenceRearmMs > 0))) {
      preViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] pre violated: silenceRearmMs > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, implausibleLower, implausibleUpper, alarmLatencyMs, signalLossMs, silenceRearmMs);
      const postViolations: string[] = [];
      if (!((__result.self.implausibleThresholdLower === implausibleLower))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.implausibleThresholdLower = implausibleLower");
      }
      if (!((__result.self.implausibleThresholdUpper === implausibleUpper))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.implausibleThresholdUpper = implausibleUpper");
      }
      if (!((__result.self.maxAlarmLatencyMs === alarmLatencyMs))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.maxAlarmLatencyMs = alarmLatencyMs");
      }
      if (!((__result.self.maxSignalLossMsBeforeAlarm === signalLossMs))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.maxSignalLossMsBeforeAlarm = signalLossMs");
      }
      if (!((__result.self.silenceAutoRearmMs === silenceRearmMs))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.silenceAutoRearmMs = silenceRearmMs");
      }
      if (!((__result.self.alarmThresholdsConfigured === true))) {
        postViolations.push("[BedsideMonitorSystemRequirements.setAlarmThresholds] post violated: self.alarmThresholdsConfigured = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for PlausibleReadingCommitment commitments. */
export class PlausibleReadingCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<PlausibleReadingCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a PlausibleReadingCommitment — the typed wrapper guarantees that since
    // `register` only accepts PlausibleReadingCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: PlausibleReadingCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: PlausibleReadingCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: PlausibleReadingCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: PlausibleReadingCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<PlausibleReadingCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<PlausibleReadingCommitment>[];
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

/** Lifecycle registry for SensorDisconnectCommitment commitments. */
export class SensorDisconnectCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SensorDisconnectCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SensorDisconnectCommitment — the typed wrapper guarantees that since
    // `register` only accepts SensorDisconnectCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SensorDisconnectCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SensorDisconnectCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SensorDisconnectCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SensorDisconnectCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SensorDisconnectCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SensorDisconnectCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for SilenceAutoRearmCommitment commitments. */
export class SilenceAutoRearmCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<SilenceAutoRearmCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a SilenceAutoRearmCommitment — the typed wrapper guarantees that since
    // `register` only accepts SilenceAutoRearmCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: SilenceAutoRearmCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: SilenceAutoRearmCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: SilenceAutoRearmCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: SilenceAutoRearmCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<SilenceAutoRearmCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<SilenceAutoRearmCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

