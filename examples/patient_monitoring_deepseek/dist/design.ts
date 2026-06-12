// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for SensorDataChannel. Runtime: string. Compile-time: branded. */
export type SensorDataChannelId = string & { readonly __brand: "SensorDataChannelId" };
/** Identity type for AlarmInterface. Runtime: string. Compile-time: branded. */
export type AlarmInterfaceId = string & { readonly __brand: "AlarmInterfaceId" };
/** Identity type for DisplayInterface. Runtime: string. Compile-time: branded. */
export type DisplayInterfaceId = string & { readonly __brand: "DisplayInterfaceId" };
/** Identity type for ClinicianAlarmInterface. Runtime: string. Compile-time: branded. */
export type ClinicianAlarmInterfaceId = string & { readonly __brand: "ClinicianAlarmInterfaceId" };
/** Identity type for EcgSensor. Runtime: string. Compile-time: branded. */
export type EcgSensorId = string & { readonly __brand: "EcgSensorId" };
/** Identity type for HeartRateProcessor. Runtime: string. Compile-time: branded. */
export type HeartRateProcessorId = string & { readonly __brand: "HeartRateProcessorId" };
/** Identity type for AlarmManager. Runtime: string. Compile-time: branded. */
export type AlarmManagerId = string & { readonly __brand: "AlarmManagerId" };
/** Identity type for DisplayRenderer. Runtime: string. Compile-time: branded. */
export type DisplayRendererId = string & { readonly __brand: "DisplayRendererId" };
/** Identity type for DesignNormalReadingFlow. Runtime: string. Compile-time: branded. */
export type DesignNormalReadingFlowId = string & { readonly __brand: "DesignNormalReadingFlowId" };
/** Identity type for DesignThresholdAlarmFlow. Runtime: string. Compile-time: branded. */
export type DesignThresholdAlarmFlowId = string & { readonly __brand: "DesignThresholdAlarmFlowId" };
/** Identity type for DesignSensorDisconnectFlow. Runtime: string. Compile-time: branded. */
export type DesignSensorDisconnectFlowId = string & { readonly __brand: "DesignSensorDisconnectFlowId" };
/** Identity type for DesignAlarmSilenceAutoRearmFlow. Runtime: string. Compile-time: branded. */
export type DesignAlarmSilenceAutoRearmFlowId = string & { readonly __brand: "DesignAlarmSilenceAutoRearmFlowId" };
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
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Role>> */
export interface EcgSensorEndpoint {
  readonly sensorId: string;
  readonly sensorConnected: boolean;
  readonly lastSignalTimestamp: number;
  readonly currentReadingValue: number;
  readonly readingTimestamp: number;
}

/** @stereotype <<Role>> */
export interface HeartRateProcessorEndpoint {
  readonly processorId: string;
  readonly implausibleThresholdLower: number;
  readonly implausibleThresholdUpper: number;
  readonly rejectionCount: number;
  readonly heartRatePlausible: boolean;
}

/** @stereotype <<Role>> */
export interface AlarmManagerEndpoint {
  readonly managerId: string;
  readonly alarmActive: boolean;
  readonly alarmSilenced: boolean;
  readonly alarmSilenceTimestamp: number;
  readonly alarmType: string;
  readonly maxAlarmLatencyMs: number;
  readonly silenceAutoRearmMs: number;
}

/** @stereotype <<Role>> */
export interface DisplayEndpoint {
  readonly displayId: string;
  readonly displayedHeartRate: number;
  readonly displayedAlarmActive: boolean;
  readonly displayedAlarmType: string;
}

/** @stereotype <<Relator>> */
export interface SensorDataChannel {
  readonly channelId: SensorDataChannelId;
  readonly maxLatencyMs: number;
  readonly dataFormat: string;
}

/** @stereotype <<Relator>> */
export interface AlarmInterface {
  readonly ifaceId: AlarmInterfaceId;
  readonly thresholdCrossSignal: boolean;
  readonly crossingDirection: string;
  readonly crossingValue: number;
  readonly crossingTimestamp: number;
}

/** @stereotype <<Relator>> */
export interface DisplayInterface {
  readonly displayIfaceId: DisplayInterfaceId;
  readonly updateRateHz: number;
  readonly maxLatencyMs: number;
}

/** @stereotype <<Relator>> */
export interface ClinicianAlarmInterface {
  readonly clinicianIfaceId: ClinicianAlarmInterfaceId;
  readonly silenceButtonAvailable: boolean;
  readonly silenceDebounceMs: number;
}

/** @stereotype <<Kind>> */
export interface EcgSensor {
  readonly sensorId: EcgSensorId;
  readonly sensorConnected: boolean;
  readonly lastSignalTimestamp: number;
  readonly currentReadingValue: number;
  readonly readingTimestamp: number;
  readonly signalLossTimerMs: number;
}

/** @stereotype <<Kind>> */
export interface HeartRateProcessor {
  readonly processorId: HeartRateProcessorId;
  readonly implausibleThresholdLower: number;
  readonly implausibleThresholdUpper: number;
  readonly rejectionCount: number;
  readonly heartRatePlausible: boolean;
  readonly lastAcceptedHeartRate: number;
  readonly lastProcessedTimestamp: number;
}

/** @stereotype <<Kind>> */
export interface AlarmManager {
  readonly managerId: AlarmManagerId;
  readonly alarmActive: boolean;
  readonly alarmSilenced: boolean;
  readonly alarmSilenceTimestamp: number;
  readonly alarmType: string;
  readonly maxAlarmLatencyMs: number;
  readonly silenceAutoRearmMs: number;
  readonly alarmTriggeredTimestamp: number;
}

/** @stereotype <<Kind>> */
export interface DisplayRenderer {
  readonly displayId: DisplayRendererId;
  readonly displayedHeartRate: number;
  readonly displayedAlarmActive: boolean;
  readonly displayedAlarmType: string;
  readonly lastUpdateTimestamp: number;
}

/** @stereotype <<Happening>> */
export interface DesignNormalReadingFlow {
  readonly flowId: DesignNormalReadingFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface DesignThresholdAlarmFlow {
  readonly flowId: DesignThresholdAlarmFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface DesignSensorDisconnectFlow {
  readonly flowId: DesignSensorDisconnectFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Happening>> */
export interface DesignAlarmSilenceAutoRearmFlow {
  readonly flowId: DesignAlarmSilenceAutoRearmFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
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


// ─── Factory functions ───

export function makeSensorDataChannel(data: {
  channelId: string;
  maxLatencyMs: number;
  dataFormat: string;
}): SensorDataChannel {
  return {
    channelId: data.channelId as SensorDataChannelId,
    maxLatencyMs: data.maxLatencyMs,
    dataFormat: data.dataFormat,
  };
}

export function makeAlarmInterface(data: {
  ifaceId: string;
  thresholdCrossSignal: boolean;
  crossingDirection: string;
  crossingValue: number;
  crossingTimestamp: number;
}): AlarmInterface {
  return {
    ifaceId: data.ifaceId as AlarmInterfaceId,
    thresholdCrossSignal: data.thresholdCrossSignal,
    crossingDirection: data.crossingDirection,
    crossingValue: data.crossingValue,
    crossingTimestamp: data.crossingTimestamp,
  };
}

export function makeDisplayInterface(data: {
  displayIfaceId: string;
  updateRateHz: number;
  maxLatencyMs: number;
}): DisplayInterface {
  return {
    displayIfaceId: data.displayIfaceId as DisplayInterfaceId,
    updateRateHz: data.updateRateHz,
    maxLatencyMs: data.maxLatencyMs,
  };
}

export function makeClinicianAlarmInterface(data: {
  clinicianIfaceId: string;
  silenceButtonAvailable: boolean;
  silenceDebounceMs: number;
}): ClinicianAlarmInterface {
  return {
    clinicianIfaceId: data.clinicianIfaceId as ClinicianAlarmInterfaceId,
    silenceButtonAvailable: data.silenceButtonAvailable,
    silenceDebounceMs: data.silenceDebounceMs,
  };
}

export function makeEcgSensor(data: {
  sensorId: string;
  sensorConnected: boolean;
  lastSignalTimestamp: number;
  currentReadingValue: number;
  readingTimestamp: number;
  signalLossTimerMs: number;
}): EcgSensor {
  return {
    sensorId: data.sensorId as EcgSensorId,
    sensorConnected: data.sensorConnected,
    lastSignalTimestamp: data.lastSignalTimestamp,
    currentReadingValue: data.currentReadingValue,
    readingTimestamp: data.readingTimestamp,
    signalLossTimerMs: data.signalLossTimerMs,
  };
}

export function makeHeartRateProcessor(data: {
  processorId: string;
  implausibleThresholdLower: number;
  implausibleThresholdUpper: number;
  rejectionCount: number;
  heartRatePlausible: boolean;
  lastAcceptedHeartRate: number;
  lastProcessedTimestamp: number;
}): HeartRateProcessor {
  return {
    processorId: data.processorId as HeartRateProcessorId,
    implausibleThresholdLower: data.implausibleThresholdLower,
    implausibleThresholdUpper: data.implausibleThresholdUpper,
    rejectionCount: data.rejectionCount,
    heartRatePlausible: data.heartRatePlausible,
    lastAcceptedHeartRate: data.lastAcceptedHeartRate,
    lastProcessedTimestamp: data.lastProcessedTimestamp,
  };
}

export function makeAlarmManager(data: {
  managerId: string;
  alarmActive: boolean;
  alarmSilenced: boolean;
  alarmSilenceTimestamp: number;
  alarmType: string;
  maxAlarmLatencyMs: number;
  silenceAutoRearmMs: number;
  alarmTriggeredTimestamp: number;
}): AlarmManager {
  return {
    managerId: data.managerId as AlarmManagerId,
    alarmActive: data.alarmActive,
    alarmSilenced: data.alarmSilenced,
    alarmSilenceTimestamp: data.alarmSilenceTimestamp,
    alarmType: data.alarmType,
    maxAlarmLatencyMs: data.maxAlarmLatencyMs,
    silenceAutoRearmMs: data.silenceAutoRearmMs,
    alarmTriggeredTimestamp: data.alarmTriggeredTimestamp,
  };
}

export function makeDisplayRenderer(data: {
  displayId: string;
  displayedHeartRate: number;
  displayedAlarmActive: boolean;
  displayedAlarmType: string;
  lastUpdateTimestamp: number;
}): DisplayRenderer {
  return {
    displayId: data.displayId as DisplayRendererId,
    displayedHeartRate: data.displayedHeartRate,
    displayedAlarmActive: data.displayedAlarmActive,
    displayedAlarmType: data.displayedAlarmType,
    lastUpdateTimestamp: data.lastUpdateTimestamp,
  };
}

export function makeDesignNormalReadingFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): DesignNormalReadingFlow {
  return {
    flowId: data.flowId as DesignNormalReadingFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeDesignThresholdAlarmFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): DesignThresholdAlarmFlow {
  return {
    flowId: data.flowId as DesignThresholdAlarmFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeDesignSensorDisconnectFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): DesignSensorDisconnectFlow {
  return {
    flowId: data.flowId as DesignSensorDisconnectFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeDesignAlarmSilenceAutoRearmFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
}): DesignAlarmSilenceAutoRearmFlow {
  return {
    flowId: data.flowId as DesignAlarmSilenceAutoRearmFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
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


// ─── Runtime invariant validators ───

/** Runtime invariant check for SensorDataChannel. Returns empty array when valid. */
export function validateSensorDataChannel(instance: SensorDataChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[SensorDataChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.maxLatencyMs <= 10))) {
    violations.push("[SensorDataChannel] invariant violated: self.maxLatencyMs <= 10.0");
  }
  if (!((instance.dataFormat === "bpm_raw"))) {
    violations.push("[SensorDataChannel] invariant violated: self.dataFormat = 'bpm_raw'");
  }
  return violations;
}

/** Runtime invariant check for AlarmInterface. Returns empty array when valid. */
export function validateAlarmInterface(instance: AlarmInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.ifaceId !== null))) {
    violations.push("[AlarmInterface] invariant violated: self.ifaceId <> null");
  }
  return violations;
}

/** Runtime invariant check for DisplayInterface. Returns empty array when valid. */
export function validateDisplayInterface(instance: DisplayInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.displayIfaceId !== null))) {
    violations.push("[DisplayInterface] invariant violated: self.displayIfaceId <> null");
  }
  if (!((instance.updateRateHz >= 1))) {
    violations.push("[DisplayInterface] invariant violated: self.updateRateHz >= 1.0");
  }
  if (!((instance.maxLatencyMs <= 100))) {
    violations.push("[DisplayInterface] invariant violated: self.maxLatencyMs <= 100.0");
  }
  return violations;
}

/** Runtime invariant check for ClinicianAlarmInterface. Returns empty array when valid. */
export function validateClinicianAlarmInterface(instance: ClinicianAlarmInterface): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clinicianIfaceId !== null))) {
    violations.push("[ClinicianAlarmInterface] invariant violated: self.clinicianIfaceId <> null");
  }
  if (!((instance.silenceButtonAvailable === true))) {
    violations.push("[ClinicianAlarmInterface] invariant violated: self.silenceButtonAvailable = true");
  }
  if (!((instance.silenceDebounceMs <= 50))) {
    violations.push("[ClinicianAlarmInterface] invariant violated: self.silenceDebounceMs <= 50.0");
  }
  return violations;
}

/** Runtime invariant check for EcgSensor. Returns empty array when valid. */
export function validateEcgSensor(instance: EcgSensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[EcgSensor] invariant violated: self.sensorId <> null");
  }
  if (!((instance.lastSignalTimestamp >= 0))) {
    violations.push("[EcgSensor] invariant violated: self.lastSignalTimestamp >= 0.0");
  }
  if (!((instance.readingTimestamp >= 0))) {
    violations.push("[EcgSensor] invariant violated: self.readingTimestamp >= 0.0");
  }
  if (!(((instance.sensorConnected) ? ((instance.signalLossTimerMs <= 5000)) : (true)))) {
    violations.push("[EcgSensor] invariant violated: if self.sensorConnected then self.signalLossTimerMs <= 5000.0 else true endif");
  }
  return violations;
}

/** Runtime invariant check for HeartRateProcessor. Returns empty array when valid. */
export function validateHeartRateProcessor(instance: HeartRateProcessor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.processorId !== null))) {
    violations.push("[HeartRateProcessor] invariant violated: self.processorId <> null");
  }
  if (!((instance.implausibleThresholdLower >= 0))) {
    violations.push("[HeartRateProcessor] invariant violated: self.implausibleThresholdLower >= 0.0");
  }
  if (!((instance.implausibleThresholdUpper > instance.implausibleThresholdLower))) {
    violations.push("[HeartRateProcessor] invariant violated: self.implausibleThresholdUpper > self.implausibleThresholdLower");
  }
  if (!((instance.rejectionCount >= 0))) {
    violations.push("[HeartRateProcessor] invariant violated: self.rejectionCount >= 0");
  }
  if (!((instance.lastAcceptedHeartRate >= 0))) {
    violations.push("[HeartRateProcessor] invariant violated: self.lastAcceptedHeartRate >= 0.0");
  }
  if (!((instance.lastProcessedTimestamp >= 0))) {
    violations.push("[HeartRateProcessor] invariant violated: self.lastProcessedTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for AlarmManager. Returns empty array when valid. */
export function validateAlarmManager(instance: AlarmManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.managerId !== null))) {
    violations.push("[AlarmManager] invariant violated: self.managerId <> null");
  }
  if (!((instance.maxAlarmLatencyMs > 0))) {
    violations.push("[AlarmManager] invariant violated: self.maxAlarmLatencyMs > 0.0");
  }
  if (!((instance.silenceAutoRearmMs > 0))) {
    violations.push("[AlarmManager] invariant violated: self.silenceAutoRearmMs > 0.0");
  }
  if (!((instance.alarmSilenceTimestamp >= 0))) {
    violations.push("[AlarmManager] invariant violated: self.alarmSilenceTimestamp >= 0.0");
  }
  if (!((instance.alarmTriggeredTimestamp >= 0))) {
    violations.push("[AlarmManager] invariant violated: self.alarmTriggeredTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for DisplayRenderer. Returns empty array when valid. */
export function validateDisplayRenderer(instance: DisplayRenderer): readonly string[] {
  const violations: string[] = [];
  if (!((instance.displayId !== null))) {
    violations.push("[DisplayRenderer] invariant violated: self.displayId <> null");
  }
  if (!((instance.lastUpdateTimestamp >= 0))) {
    violations.push("[DisplayRenderer] invariant violated: self.lastUpdateTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for DesignNormalReadingFlow. Returns empty array when valid. */
export function validateDesignNormalReadingFlow(instance: DesignNormalReadingFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DesignNormalReadingFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for DesignThresholdAlarmFlow. Returns empty array when valid. */
export function validateDesignThresholdAlarmFlow(instance: DesignThresholdAlarmFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DesignThresholdAlarmFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for DesignSensorDisconnectFlow. Returns empty array when valid. */
export function validateDesignSensorDisconnectFlow(instance: DesignSensorDisconnectFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DesignSensorDisconnectFlow] invariant violated: self.flowId <> null");
  }
  return violations;
}

/** Runtime invariant check for DesignAlarmSilenceAutoRearmFlow. Returns empty array when valid. */
export function validateDesignAlarmSilenceAutoRearmFlow(instance: DesignAlarmSilenceAutoRearmFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DesignAlarmSilenceAutoRearmFlow] invariant violated: self.flowId <> null");
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


// ─── Event handler wrappers ───

/** Impl signature for EcgSensor.acquireReading. User supplies this. */
export type EcgSensorAcquireReadingImpl = (self: EcgSensor, value: number, timestamp: number) => { self: EcgSensor; modified: { currentReadingValue: unknown; readingTimestamp: unknown; lastSignalTimestamp: unknown; signalLossTimerMs: unknown } };

/** Contract-checking wrapper for EcgSensor.acquireReading. */
export function wrapEcgSensorAcquireReading(impl: EcgSensorAcquireReadingImpl): (self: EcgSensor, value: number, timestamp: number) => EcgSensor {
  return (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.acquireReading] pre violated: timestamp >= 0.0");
    }
    if (!((value >= 0))) {
      preViolations.push("[EcgSensor.acquireReading] pre violated: value >= 0.0");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[EcgSensor.acquireReading] pre violated: self.sensorConnected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.currentReadingValue === value))) {
        postViolations.push("[EcgSensor.acquireReading] post violated: self.currentReadingValue = value");
      }
      if (!((__result.self.readingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.acquireReading] post violated: self.readingTimestamp = timestamp");
      }
      if (!((__result.self.lastSignalTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.acquireReading] post violated: self.lastSignalTimestamp = timestamp");
      }
      if (!((__result.self.signalLossTimerMs === 0))) {
        postViolations.push("[EcgSensor.acquireReading] post violated: self.signalLossTimerMs = 0.0");
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

/** Impl signature for EcgSensor.acquireReading (async). User supplies this. */
export type EcgSensorAcquireReadingAsyncImpl = (self: EcgSensor, value: number, timestamp: number) => Promise<{ self: EcgSensor; modified: { currentReadingValue: unknown; readingTimestamp: unknown; lastSignalTimestamp: unknown; signalLossTimerMs: unknown } }>;

/** Contract-checking wrapper for EcgSensor.acquireReading (async). */
export function wrapEcgSensorAcquireReadingAsync(impl: EcgSensorAcquireReadingAsyncImpl): (self: EcgSensor, value: number, timestamp: number) => Promise<EcgSensor> {
  return async (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.acquireReading] pre violated: timestamp >= 0.0");
    }
    if (!((value >= 0))) {
      preViolations.push("[EcgSensor.acquireReading] pre violated: value >= 0.0");
    }
    if (!((self.sensorConnected === true))) {
      preViolations.push("[EcgSensor.acquireReading] pre violated: self.sensorConnected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.currentReadingValue === value))) {
        postViolations.push("[EcgSensor.acquireReading] post violated: self.currentReadingValue = value");
      }
      if (!((__result.self.readingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.acquireReading] post violated: self.readingTimestamp = timestamp");
      }
      if (!((__result.self.lastSignalTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.acquireReading] post violated: self.lastSignalTimestamp = timestamp");
      }
      if (!((__result.self.signalLossTimerMs === 0))) {
        postViolations.push("[EcgSensor.acquireReading] post violated: self.signalLossTimerMs = 0.0");
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

/** Impl signature for EcgSensor.advanceSignalLossTimer. User supplies this. */
export type EcgSensorAdvanceSignalLossTimerImpl = (self: EcgSensor, elapsedMs: number) => { self: EcgSensor; modified: { signalLossTimerMs: unknown; sensorConnected: unknown } };

/** Contract-checking wrapper for EcgSensor.advanceSignalLossTimer. */
export function wrapEcgSensorAdvanceSignalLossTimer(impl: EcgSensorAdvanceSignalLossTimerImpl): (self: EcgSensor, elapsedMs: number) => EcgSensor {
  return (self, elapsedMs) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[EcgSensor.advanceSignalLossTimer] pre violated: self.sensorConnected = true");
    }
    if (!((elapsedMs > 0))) {
      preViolations.push("[EcgSensor.advanceSignalLossTimer] pre violated: elapsedMs > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.signalLossTimerMs": self.signalLossTimerMs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, elapsedMs);
      const postViolations: string[] = [];
      if (!((__result.self.signalLossTimerMs === (__pre["self.signalLossTimerMs"] + elapsedMs)))) {
        postViolations.push("[EcgSensor.advanceSignalLossTimer] post violated: self.signalLossTimerMs = self.signalLossTimerMs@pre + elapsedMs");
      }
      if (!((((__result.self.signalLossTimerMs > 5000)) ? ((__result.self.sensorConnected === false)) : ((__result.self.sensorConnected === true))))) {
        postViolations.push("[EcgSensor.advanceSignalLossTimer] post violated: if self.signalLossTimerMs > 5000.0 then\n            self.sensorConnected = false\n          else\n            self.sensorConnected = true\n          endif");
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

/** Impl signature for EcgSensor.advanceSignalLossTimer (async). User supplies this. */
export type EcgSensorAdvanceSignalLossTimerAsyncImpl = (self: EcgSensor, elapsedMs: number) => Promise<{ self: EcgSensor; modified: { signalLossTimerMs: unknown; sensorConnected: unknown } }>;

/** Contract-checking wrapper for EcgSensor.advanceSignalLossTimer (async). */
export function wrapEcgSensorAdvanceSignalLossTimerAsync(impl: EcgSensorAdvanceSignalLossTimerAsyncImpl): (self: EcgSensor, elapsedMs: number) => Promise<EcgSensor> {
  return async (self, elapsedMs) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === true))) {
      preViolations.push("[EcgSensor.advanceSignalLossTimer] pre violated: self.sensorConnected = true");
    }
    if (!((elapsedMs > 0))) {
      preViolations.push("[EcgSensor.advanceSignalLossTimer] pre violated: elapsedMs > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.signalLossTimerMs": self.signalLossTimerMs,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, elapsedMs);
      const postViolations: string[] = [];
      if (!((__result.self.signalLossTimerMs === (__pre["self.signalLossTimerMs"] + elapsedMs)))) {
        postViolations.push("[EcgSensor.advanceSignalLossTimer] post violated: self.signalLossTimerMs = self.signalLossTimerMs@pre + elapsedMs");
      }
      if (!((((__result.self.signalLossTimerMs > 5000)) ? ((__result.self.sensorConnected === false)) : ((__result.self.sensorConnected === true))))) {
        postViolations.push("[EcgSensor.advanceSignalLossTimer] post violated: if self.signalLossTimerMs > 5000.0 then\n            self.sensorConnected = false\n          else\n            self.sensorConnected = true\n          endif");
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

/** Impl signature for EcgSensor.restoreConnection. User supplies this. */
export type EcgSensorRestoreConnectionImpl = (self: EcgSensor, value: number, timestamp: number) => { self: EcgSensor; modified: { sensorConnected: unknown; currentReadingValue: unknown; readingTimestamp: unknown; lastSignalTimestamp: unknown; signalLossTimerMs: unknown } };

/** Contract-checking wrapper for EcgSensor.restoreConnection. */
export function wrapEcgSensorRestoreConnection(impl: EcgSensorRestoreConnectionImpl): (self: EcgSensor, value: number, timestamp: number) => EcgSensor {
  return (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === false))) {
      preViolations.push("[EcgSensor.restoreConnection] pre violated: self.sensorConnected = false");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.restoreConnection] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.currentReadingValue === value))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.currentReadingValue = value");
      }
      if (!((__result.self.readingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.readingTimestamp = timestamp");
      }
      if (!((__result.self.lastSignalTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.lastSignalTimestamp = timestamp");
      }
      if (!((__result.self.signalLossTimerMs === 0))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.signalLossTimerMs = 0.0");
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

/** Impl signature for EcgSensor.restoreConnection (async). User supplies this. */
export type EcgSensorRestoreConnectionAsyncImpl = (self: EcgSensor, value: number, timestamp: number) => Promise<{ self: EcgSensor; modified: { sensorConnected: unknown; currentReadingValue: unknown; readingTimestamp: unknown; lastSignalTimestamp: unknown; signalLossTimerMs: unknown } }>;

/** Contract-checking wrapper for EcgSensor.restoreConnection (async). */
export function wrapEcgSensorRestoreConnectionAsync(impl: EcgSensorRestoreConnectionAsyncImpl): (self: EcgSensor, value: number, timestamp: number) => Promise<EcgSensor> {
  return async (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((self.sensorConnected === false))) {
      preViolations.push("[EcgSensor.restoreConnection] pre violated: self.sensorConnected = false");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.restoreConnection] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.currentReadingValue === value))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.currentReadingValue = value");
      }
      if (!((__result.self.readingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.readingTimestamp = timestamp");
      }
      if (!((__result.self.lastSignalTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.lastSignalTimestamp = timestamp");
      }
      if (!((__result.self.signalLossTimerMs === 0))) {
        postViolations.push("[EcgSensor.restoreConnection] post violated: self.signalLossTimerMs = 0.0");
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

/** Impl signature for EcgSensor.resetSensor. User supplies this. */
export type EcgSensorResetSensorImpl = (self: EcgSensor) => { self: EcgSensor; modified: { sensorConnected: unknown; signalLossTimerMs: unknown; lastSignalTimestamp: unknown; currentReadingValue: unknown; readingTimestamp: unknown } };

/** Contract-checking wrapper for EcgSensor.resetSensor. */
export function wrapEcgSensorResetSensor(impl: EcgSensorResetSensorImpl): (self: EcgSensor) => EcgSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EcgSensor.resetSensor] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.signalLossTimerMs === 0))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.signalLossTimerMs = 0.0");
      }
      if (!((__result.self.lastSignalTimestamp === 0))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.lastSignalTimestamp = 0.0");
      }
      if (!((__result.self.currentReadingValue === 0))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.currentReadingValue = 0.0");
      }
      if (!((__result.self.readingTimestamp === 0))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.readingTimestamp = 0.0");
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

/** Impl signature for EcgSensor.resetSensor (async). User supplies this. */
export type EcgSensorResetSensorAsyncImpl = (self: EcgSensor) => Promise<{ self: EcgSensor; modified: { sensorConnected: unknown; signalLossTimerMs: unknown; lastSignalTimestamp: unknown; currentReadingValue: unknown; readingTimestamp: unknown } }>;

/** Contract-checking wrapper for EcgSensor.resetSensor (async). */
export function wrapEcgSensorResetSensorAsync(impl: EcgSensorResetSensorAsyncImpl): (self: EcgSensor) => Promise<EcgSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[EcgSensor.resetSensor] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.signalLossTimerMs === 0))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.signalLossTimerMs = 0.0");
      }
      if (!((__result.self.lastSignalTimestamp === 0))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.lastSignalTimestamp = 0.0");
      }
      if (!((__result.self.currentReadingValue === 0))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.currentReadingValue = 0.0");
      }
      if (!((__result.self.readingTimestamp === 0))) {
        postViolations.push("[EcgSensor.resetSensor] post violated: self.readingTimestamp = 0.0");
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

/** Impl signature for HeartRateProcessor.processReading. User supplies this. */
export type HeartRateProcessorProcessReadingImpl = (self: HeartRateProcessor, rawValue: number, readingTimestamp: number) => { self: HeartRateProcessor; modified: { lastAcceptedHeartRate: unknown; heartRatePlausible: unknown; rejectionCount: unknown; lastProcessedTimestamp: unknown } };

/** Contract-checking wrapper for HeartRateProcessor.processReading. */
export function wrapHeartRateProcessorProcessReading(impl: HeartRateProcessorProcessReadingImpl): (self: HeartRateProcessor, rawValue: number, readingTimestamp: number) => HeartRateProcessor {
  return (self, rawValue, readingTimestamp) => {
    const preViolations: string[] = [];
    if (!((readingTimestamp >= 0))) {
      preViolations.push("[HeartRateProcessor.processReading] pre violated: readingTimestamp >= 0.0");
    }
    if (!((rawValue >= 0))) {
      preViolations.push("[HeartRateProcessor.processReading] pre violated: rawValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.lastAcceptedHeartRate": self.lastAcceptedHeartRate,
      "self.lastProcessedTimestamp": self.lastProcessedTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rawValue, readingTimestamp);
      const postViolations: string[] = [];
      if (!(((((rawValue >= __result.self.implausibleThresholdLower) && (rawValue <= __result.self.implausibleThresholdUpper))) ? (((((__result.self.lastAcceptedHeartRate === rawValue) && (__result.self.heartRatePlausible === true)) && (__result.self.rejectionCount === __pre["self.rejectionCount"])) && (__result.self.lastProcessedTimestamp === readingTimestamp))) : (((((__result.self.heartRatePlausible === false) && (__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1))) && (__result.self.lastAcceptedHeartRate === __pre["self.lastAcceptedHeartRate"])) && (__result.self.lastProcessedTimestamp === __pre["self.lastProcessedTimestamp"])))))) {
        postViolations.push("[HeartRateProcessor.processReading] post violated: if rawValue >= self.implausibleThresholdLower and rawValue <= self.implausibleThresholdUpper then\n            self.lastAcceptedHeartRate = rawValue and\n            self.heartRatePlausible = true and\n            self.rejectionCount = self.rejectionCount@pre and\n            self.lastProcessedTimestamp = readingTimestamp\n          else\n            self.heartRatePlausible = false and\n            self.rejectionCount = self.rejectionCount@pre + 1 and\n            self.lastAcceptedHeartRate = self.lastAcceptedHeartRate@pre and\n            self.lastProcessedTimestamp = self.lastProcessedTimestamp@pre\n          endif");
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

/** Impl signature for HeartRateProcessor.processReading (async). User supplies this. */
export type HeartRateProcessorProcessReadingAsyncImpl = (self: HeartRateProcessor, rawValue: number, readingTimestamp: number) => Promise<{ self: HeartRateProcessor; modified: { lastAcceptedHeartRate: unknown; heartRatePlausible: unknown; rejectionCount: unknown; lastProcessedTimestamp: unknown } }>;

/** Contract-checking wrapper for HeartRateProcessor.processReading (async). */
export function wrapHeartRateProcessorProcessReadingAsync(impl: HeartRateProcessorProcessReadingAsyncImpl): (self: HeartRateProcessor, rawValue: number, readingTimestamp: number) => Promise<HeartRateProcessor> {
  return async (self, rawValue, readingTimestamp) => {
    const preViolations: string[] = [];
    if (!((readingTimestamp >= 0))) {
      preViolations.push("[HeartRateProcessor.processReading] pre violated: readingTimestamp >= 0.0");
    }
    if (!((rawValue >= 0))) {
      preViolations.push("[HeartRateProcessor.processReading] pre violated: rawValue >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.lastAcceptedHeartRate": self.lastAcceptedHeartRate,
      "self.lastProcessedTimestamp": self.lastProcessedTimestamp,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rawValue, readingTimestamp);
      const postViolations: string[] = [];
      if (!(((((rawValue >= __result.self.implausibleThresholdLower) && (rawValue <= __result.self.implausibleThresholdUpper))) ? (((((__result.self.lastAcceptedHeartRate === rawValue) && (__result.self.heartRatePlausible === true)) && (__result.self.rejectionCount === __pre["self.rejectionCount"])) && (__result.self.lastProcessedTimestamp === readingTimestamp))) : (((((__result.self.heartRatePlausible === false) && (__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1))) && (__result.self.lastAcceptedHeartRate === __pre["self.lastAcceptedHeartRate"])) && (__result.self.lastProcessedTimestamp === __pre["self.lastProcessedTimestamp"])))))) {
        postViolations.push("[HeartRateProcessor.processReading] post violated: if rawValue >= self.implausibleThresholdLower and rawValue <= self.implausibleThresholdUpper then\n            self.lastAcceptedHeartRate = rawValue and\n            self.heartRatePlausible = true and\n            self.rejectionCount = self.rejectionCount@pre and\n            self.lastProcessedTimestamp = readingTimestamp\n          else\n            self.heartRatePlausible = false and\n            self.rejectionCount = self.rejectionCount@pre + 1 and\n            self.lastAcceptedHeartRate = self.lastAcceptedHeartRate@pre and\n            self.lastProcessedTimestamp = self.lastProcessedTimestamp@pre\n          endif");
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

/** Impl signature for HeartRateProcessor.configureBounds. User supplies this. */
export type HeartRateProcessorConfigureBoundsImpl = (self: HeartRateProcessor, lower: number, upper: number) => { self: HeartRateProcessor; modified: { implausibleThresholdLower: unknown; implausibleThresholdUpper: unknown } };

/** Contract-checking wrapper for HeartRateProcessor.configureBounds. */
export function wrapHeartRateProcessorConfigureBounds(impl: HeartRateProcessorConfigureBoundsImpl): (self: HeartRateProcessor, lower: number, upper: number) => HeartRateProcessor {
  return (self, lower, upper) => {
    const preViolations: string[] = [];
    if (!((lower >= 0))) {
      preViolations.push("[HeartRateProcessor.configureBounds] pre violated: lower >= 0.0");
    }
    if (!((upper > lower))) {
      preViolations.push("[HeartRateProcessor.configureBounds] pre violated: upper > lower");
    }
    if (!((lower <= 20))) {
      preViolations.push("[HeartRateProcessor.configureBounds] pre violated: lower <= 20.0");
    }
    if (!((upper >= 250))) {
      preViolations.push("[HeartRateProcessor.configureBounds] pre violated: upper >= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, lower, upper);
      const postViolations: string[] = [];
      if (!((__result.self.implausibleThresholdLower === lower))) {
        postViolations.push("[HeartRateProcessor.configureBounds] post violated: self.implausibleThresholdLower = lower");
      }
      if (!((__result.self.implausibleThresholdUpper === upper))) {
        postViolations.push("[HeartRateProcessor.configureBounds] post violated: self.implausibleThresholdUpper = upper");
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

/** Impl signature for HeartRateProcessor.configureBounds (async). User supplies this. */
export type HeartRateProcessorConfigureBoundsAsyncImpl = (self: HeartRateProcessor, lower: number, upper: number) => Promise<{ self: HeartRateProcessor; modified: { implausibleThresholdLower: unknown; implausibleThresholdUpper: unknown } }>;

/** Contract-checking wrapper for HeartRateProcessor.configureBounds (async). */
export function wrapHeartRateProcessorConfigureBoundsAsync(impl: HeartRateProcessorConfigureBoundsAsyncImpl): (self: HeartRateProcessor, lower: number, upper: number) => Promise<HeartRateProcessor> {
  return async (self, lower, upper) => {
    const preViolations: string[] = [];
    if (!((lower >= 0))) {
      preViolations.push("[HeartRateProcessor.configureBounds] pre violated: lower >= 0.0");
    }
    if (!((upper > lower))) {
      preViolations.push("[HeartRateProcessor.configureBounds] pre violated: upper > lower");
    }
    if (!((lower <= 20))) {
      preViolations.push("[HeartRateProcessor.configureBounds] pre violated: lower <= 20.0");
    }
    if (!((upper >= 250))) {
      preViolations.push("[HeartRateProcessor.configureBounds] pre violated: upper >= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, lower, upper);
      const postViolations: string[] = [];
      if (!((__result.self.implausibleThresholdLower === lower))) {
        postViolations.push("[HeartRateProcessor.configureBounds] post violated: self.implausibleThresholdLower = lower");
      }
      if (!((__result.self.implausibleThresholdUpper === upper))) {
        postViolations.push("[HeartRateProcessor.configureBounds] post violated: self.implausibleThresholdUpper = upper");
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

/** Impl signature for HeartRateProcessor.rejectImplausibleReading. User supplies this. */
export type HeartRateProcessorRejectImplausibleReadingImpl = (self: HeartRateProcessor, rawValue: number, timestamp: number) => { self: HeartRateProcessor; modified: { heartRatePlausible: unknown; rejectionCount: unknown } };

/** Contract-checking wrapper for HeartRateProcessor.rejectImplausibleReading. */
export function wrapHeartRateProcessorRejectImplausibleReading(impl: HeartRateProcessorRejectImplausibleReadingImpl): (self: HeartRateProcessor, rawValue: number, timestamp: number) => HeartRateProcessor {
  return (self, rawValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[HeartRateProcessor.rejectImplausibleReading] pre violated: timestamp >= 0.0");
    }
    if (!(((rawValue < self.implausibleThresholdLower) || (rawValue > self.implausibleThresholdUpper)))) {
      preViolations.push("[HeartRateProcessor.rejectImplausibleReading] pre violated: rawValue < self.implausibleThresholdLower or rawValue > self.implausibleThresholdUpper");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.lastAcceptedHeartRate": self.lastAcceptedHeartRate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, rawValue, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.heartRatePlausible === false))) {
        postViolations.push("[HeartRateProcessor.rejectImplausibleReading] post violated: self.heartRatePlausible = false");
      }
      if (!((__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1)))) {
        postViolations.push("[HeartRateProcessor.rejectImplausibleReading] post violated: self.rejectionCount = self.rejectionCount@pre + 1");
      }
      if (!((__result.self.lastAcceptedHeartRate === __pre["self.lastAcceptedHeartRate"]))) {
        postViolations.push("[HeartRateProcessor.rejectImplausibleReading] post violated: self.lastAcceptedHeartRate = self.lastAcceptedHeartRate@pre");
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

/** Impl signature for HeartRateProcessor.rejectImplausibleReading (async). User supplies this. */
export type HeartRateProcessorRejectImplausibleReadingAsyncImpl = (self: HeartRateProcessor, rawValue: number, timestamp: number) => Promise<{ self: HeartRateProcessor; modified: { heartRatePlausible: unknown; rejectionCount: unknown } }>;

/** Contract-checking wrapper for HeartRateProcessor.rejectImplausibleReading (async). */
export function wrapHeartRateProcessorRejectImplausibleReadingAsync(impl: HeartRateProcessorRejectImplausibleReadingAsyncImpl): (self: HeartRateProcessor, rawValue: number, timestamp: number) => Promise<HeartRateProcessor> {
  return async (self, rawValue, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[HeartRateProcessor.rejectImplausibleReading] pre violated: timestamp >= 0.0");
    }
    if (!(((rawValue < self.implausibleThresholdLower) || (rawValue > self.implausibleThresholdUpper)))) {
      preViolations.push("[HeartRateProcessor.rejectImplausibleReading] pre violated: rawValue < self.implausibleThresholdLower or rawValue > self.implausibleThresholdUpper");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCount": self.rejectionCount,
      "self.lastAcceptedHeartRate": self.lastAcceptedHeartRate,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, rawValue, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.heartRatePlausible === false))) {
        postViolations.push("[HeartRateProcessor.rejectImplausibleReading] post violated: self.heartRatePlausible = false");
      }
      if (!((__result.self.rejectionCount === (__pre["self.rejectionCount"] + 1)))) {
        postViolations.push("[HeartRateProcessor.rejectImplausibleReading] post violated: self.rejectionCount = self.rejectionCount@pre + 1");
      }
      if (!((__result.self.lastAcceptedHeartRate === __pre["self.lastAcceptedHeartRate"]))) {
        postViolations.push("[HeartRateProcessor.rejectImplausibleReading] post violated: self.lastAcceptedHeartRate = self.lastAcceptedHeartRate@pre");
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

/** Impl signature for HeartRateProcessor.resetProcessor. User supplies this. */
export type HeartRateProcessorResetProcessorImpl = (self: HeartRateProcessor) => { self: HeartRateProcessor; modified: { rejectionCount: unknown; heartRatePlausible: unknown; lastAcceptedHeartRate: unknown; lastProcessedTimestamp: unknown } };

/** Contract-checking wrapper for HeartRateProcessor.resetProcessor. */
export function wrapHeartRateProcessorResetProcessor(impl: HeartRateProcessorResetProcessorImpl): (self: HeartRateProcessor) => HeartRateProcessor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[HeartRateProcessor.resetProcessor] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rejectionCount === 0))) {
        postViolations.push("[HeartRateProcessor.resetProcessor] post violated: self.rejectionCount = 0");
      }
      if (!((__result.self.heartRatePlausible === false))) {
        postViolations.push("[HeartRateProcessor.resetProcessor] post violated: self.heartRatePlausible = false");
      }
      if (!((__result.self.lastAcceptedHeartRate === 0))) {
        postViolations.push("[HeartRateProcessor.resetProcessor] post violated: self.lastAcceptedHeartRate = 0.0");
      }
      if (!((__result.self.lastProcessedTimestamp === 0))) {
        postViolations.push("[HeartRateProcessor.resetProcessor] post violated: self.lastProcessedTimestamp = 0.0");
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

/** Impl signature for HeartRateProcessor.resetProcessor (async). User supplies this. */
export type HeartRateProcessorResetProcessorAsyncImpl = (self: HeartRateProcessor) => Promise<{ self: HeartRateProcessor; modified: { rejectionCount: unknown; heartRatePlausible: unknown; lastAcceptedHeartRate: unknown; lastProcessedTimestamp: unknown } }>;

/** Contract-checking wrapper for HeartRateProcessor.resetProcessor (async). */
export function wrapHeartRateProcessorResetProcessorAsync(impl: HeartRateProcessorResetProcessorAsyncImpl): (self: HeartRateProcessor) => Promise<HeartRateProcessor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[HeartRateProcessor.resetProcessor] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.rejectionCount === 0))) {
        postViolations.push("[HeartRateProcessor.resetProcessor] post violated: self.rejectionCount = 0");
      }
      if (!((__result.self.heartRatePlausible === false))) {
        postViolations.push("[HeartRateProcessor.resetProcessor] post violated: self.heartRatePlausible = false");
      }
      if (!((__result.self.lastAcceptedHeartRate === 0))) {
        postViolations.push("[HeartRateProcessor.resetProcessor] post violated: self.lastAcceptedHeartRate = 0.0");
      }
      if (!((__result.self.lastProcessedTimestamp === 0))) {
        postViolations.push("[HeartRateProcessor.resetProcessor] post violated: self.lastProcessedTimestamp = 0.0");
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

/** Impl signature for AlarmManager.raiseThresholdAlarm. User supplies this. */
export type AlarmManagerRaiseThresholdAlarmImpl = (self: AlarmManager, vitalType: string, actualValue: number, crossTimestamp: number) => { self: AlarmManager; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown; alarmTriggeredTimestamp: unknown } };

/** Contract-checking wrapper for AlarmManager.raiseThresholdAlarm. */
export function wrapAlarmManagerRaiseThresholdAlarm(impl: AlarmManagerRaiseThresholdAlarmImpl): (self: AlarmManager, vitalType: string, actualValue: number, crossTimestamp: number) => AlarmManager {
  return (self, vitalType, actualValue, crossTimestamp) => {
    const preViolations: string[] = [];
    if (!((crossTimestamp >= 0))) {
      preViolations.push("[AlarmManager.raiseThresholdAlarm] pre violated: crossTimestamp >= 0.0");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[AlarmManager.raiseThresholdAlarm] pre violated: self.alarmActive = false");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[AlarmManager.raiseThresholdAlarm] pre violated: not self.alarmSilenced");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, vitalType, actualValue, crossTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.raiseThresholdAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.raiseThresholdAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === vitalType))) {
        postViolations.push("[AlarmManager.raiseThresholdAlarm] post violated: self.alarmType = vitalType");
      }
      if (!((__result.self.alarmTriggeredTimestamp === crossTimestamp))) {
        postViolations.push("[AlarmManager.raiseThresholdAlarm] post violated: self.alarmTriggeredTimestamp = crossTimestamp");
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

/** Impl signature for AlarmManager.raiseThresholdAlarm (async). User supplies this. */
export type AlarmManagerRaiseThresholdAlarmAsyncImpl = (self: AlarmManager, vitalType: string, actualValue: number, crossTimestamp: number) => Promise<{ self: AlarmManager; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown; alarmTriggeredTimestamp: unknown } }>;

/** Contract-checking wrapper for AlarmManager.raiseThresholdAlarm (async). */
export function wrapAlarmManagerRaiseThresholdAlarmAsync(impl: AlarmManagerRaiseThresholdAlarmAsyncImpl): (self: AlarmManager, vitalType: string, actualValue: number, crossTimestamp: number) => Promise<AlarmManager> {
  return async (self, vitalType, actualValue, crossTimestamp) => {
    const preViolations: string[] = [];
    if (!((crossTimestamp >= 0))) {
      preViolations.push("[AlarmManager.raiseThresholdAlarm] pre violated: crossTimestamp >= 0.0");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[AlarmManager.raiseThresholdAlarm] pre violated: self.alarmActive = false");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[AlarmManager.raiseThresholdAlarm] pre violated: not self.alarmSilenced");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, vitalType, actualValue, crossTimestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.raiseThresholdAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.raiseThresholdAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === vitalType))) {
        postViolations.push("[AlarmManager.raiseThresholdAlarm] post violated: self.alarmType = vitalType");
      }
      if (!((__result.self.alarmTriggeredTimestamp === crossTimestamp))) {
        postViolations.push("[AlarmManager.raiseThresholdAlarm] post violated: self.alarmTriggeredTimestamp = crossTimestamp");
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

/** Impl signature for AlarmManager.raiseDisconnectAlarm. User supplies this. */
export type AlarmManagerRaiseDisconnectAlarmImpl = (self: AlarmManager, detectedAt: number) => { self: AlarmManager; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown; alarmTriggeredTimestamp: unknown } };

/** Contract-checking wrapper for AlarmManager.raiseDisconnectAlarm. */
export function wrapAlarmManagerRaiseDisconnectAlarm(impl: AlarmManagerRaiseDisconnectAlarmImpl): (self: AlarmManager, detectedAt: number) => AlarmManager {
  return (self, detectedAt) => {
    const preViolations: string[] = [];
    if (!((detectedAt >= 0))) {
      preViolations.push("[AlarmManager.raiseDisconnectAlarm] pre violated: detectedAt >= 0.0");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[AlarmManager.raiseDisconnectAlarm] pre violated: self.alarmActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, detectedAt);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.raiseDisconnectAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.raiseDisconnectAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "disconnect"))) {
        postViolations.push("[AlarmManager.raiseDisconnectAlarm] post violated: self.alarmType = 'disconnect'");
      }
      if (!((__result.self.alarmTriggeredTimestamp === detectedAt))) {
        postViolations.push("[AlarmManager.raiseDisconnectAlarm] post violated: self.alarmTriggeredTimestamp = detectedAt");
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

/** Impl signature for AlarmManager.raiseDisconnectAlarm (async). User supplies this. */
export type AlarmManagerRaiseDisconnectAlarmAsyncImpl = (self: AlarmManager, detectedAt: number) => Promise<{ self: AlarmManager; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown; alarmTriggeredTimestamp: unknown } }>;

/** Contract-checking wrapper for AlarmManager.raiseDisconnectAlarm (async). */
export function wrapAlarmManagerRaiseDisconnectAlarmAsync(impl: AlarmManagerRaiseDisconnectAlarmAsyncImpl): (self: AlarmManager, detectedAt: number) => Promise<AlarmManager> {
  return async (self, detectedAt) => {
    const preViolations: string[] = [];
    if (!((detectedAt >= 0))) {
      preViolations.push("[AlarmManager.raiseDisconnectAlarm] pre violated: detectedAt >= 0.0");
    }
    if (!((self.alarmActive === false))) {
      preViolations.push("[AlarmManager.raiseDisconnectAlarm] pre violated: self.alarmActive = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, detectedAt);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.raiseDisconnectAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.raiseDisconnectAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "disconnect"))) {
        postViolations.push("[AlarmManager.raiseDisconnectAlarm] post violated: self.alarmType = 'disconnect'");
      }
      if (!((__result.self.alarmTriggeredTimestamp === detectedAt))) {
        postViolations.push("[AlarmManager.raiseDisconnectAlarm] post violated: self.alarmTriggeredTimestamp = detectedAt");
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

/** Impl signature for AlarmManager.silenceAlarm. User supplies this. */
export type AlarmManagerSilenceAlarmImpl = (self: AlarmManager, silenceTimestamp: number) => { self: AlarmManager; modified: { alarmSilenced: unknown; alarmSilenceTimestamp: unknown } };

/** Contract-checking wrapper for AlarmManager.silenceAlarm. */
export function wrapAlarmManagerSilenceAlarm(impl: AlarmManagerSilenceAlarmImpl): (self: AlarmManager, silenceTimestamp: number) => AlarmManager {
  return (self, silenceTimestamp) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: self.alarmActive = true");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: not self.alarmSilenced");
    }
    if (!((silenceTimestamp >= self.alarmTriggeredTimestamp))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: silenceTimestamp >= self.alarmTriggeredTimestamp");
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
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === silenceTimestamp))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmSilenceTimestamp = silenceTimestamp");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmType === __pre["self.alarmType"]))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmType = self.alarmType@pre");
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

/** Impl signature for AlarmManager.silenceAlarm (async). User supplies this. */
export type AlarmManagerSilenceAlarmAsyncImpl = (self: AlarmManager, silenceTimestamp: number) => Promise<{ self: AlarmManager; modified: { alarmSilenced: unknown; alarmSilenceTimestamp: unknown } }>;

/** Contract-checking wrapper for AlarmManager.silenceAlarm (async). */
export function wrapAlarmManagerSilenceAlarmAsync(impl: AlarmManagerSilenceAlarmAsyncImpl): (self: AlarmManager, silenceTimestamp: number) => Promise<AlarmManager> {
  return async (self, silenceTimestamp) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: self.alarmActive = true");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: not self.alarmSilenced");
    }
    if (!((silenceTimestamp >= self.alarmTriggeredTimestamp))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: silenceTimestamp >= self.alarmTriggeredTimestamp");
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
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === silenceTimestamp))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmSilenceTimestamp = silenceTimestamp");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmType === __pre["self.alarmType"]))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmType = self.alarmType@pre");
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

/** Impl signature for AlarmManager.autoRearmAlarm. User supplies this. */
export type AlarmManagerAutoRearmAlarmImpl = (self: AlarmManager, rearmTimestamp: number) => { self: AlarmManager; modified: { alarmSilenced: unknown } };

/** Contract-checking wrapper for AlarmManager.autoRearmAlarm. */
export function wrapAlarmManagerAutoRearmAlarm(impl: AlarmManagerAutoRearmAlarmImpl): (self: AlarmManager, rearmTimestamp: number) => AlarmManager {
  return (self, rearmTimestamp) => {
    const preViolations: string[] = [];
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[AlarmManager.autoRearmAlarm] pre violated: self.alarmSilenced = true");
    }
    if (!(((rearmTimestamp - self.alarmSilenceTimestamp) >= self.silenceAutoRearmMs))) {
      preViolations.push("[AlarmManager.autoRearmAlarm] pre violated: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs");
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
        postViolations.push("[AlarmManager.autoRearmAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.autoRearmAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === __pre["self.alarmSilenceTimestamp"]))) {
        postViolations.push("[AlarmManager.autoRearmAlarm] post violated: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre");
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

/** Impl signature for AlarmManager.autoRearmAlarm (async). User supplies this. */
export type AlarmManagerAutoRearmAlarmAsyncImpl = (self: AlarmManager, rearmTimestamp: number) => Promise<{ self: AlarmManager; modified: { alarmSilenced: unknown } }>;

/** Contract-checking wrapper for AlarmManager.autoRearmAlarm (async). */
export function wrapAlarmManagerAutoRearmAlarmAsync(impl: AlarmManagerAutoRearmAlarmAsyncImpl): (self: AlarmManager, rearmTimestamp: number) => Promise<AlarmManager> {
  return async (self, rearmTimestamp) => {
    const preViolations: string[] = [];
    if (!((self.alarmSilenced === true))) {
      preViolations.push("[AlarmManager.autoRearmAlarm] pre violated: self.alarmSilenced = true");
    }
    if (!(((rearmTimestamp - self.alarmSilenceTimestamp) >= self.silenceAutoRearmMs))) {
      preViolations.push("[AlarmManager.autoRearmAlarm] pre violated: rearmTimestamp - self.alarmSilenceTimestamp >= self.silenceAutoRearmMs");
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
        postViolations.push("[AlarmManager.autoRearmAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.autoRearmAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSilenceTimestamp === __pre["self.alarmSilenceTimestamp"]))) {
        postViolations.push("[AlarmManager.autoRearmAlarm] post violated: self.alarmSilenceTimestamp = self.alarmSilenceTimestamp@pre");
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

/** Impl signature for AlarmManager.clearAlarm. User supplies this. */
export type AlarmManagerClearAlarmImpl = (self: AlarmManager) => { self: AlarmManager; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown; alarmTriggeredTimestamp: unknown } };

/** Contract-checking wrapper for AlarmManager.clearAlarm. */
export function wrapAlarmManagerClearAlarm(impl: AlarmManagerClearAlarmImpl): (self: AlarmManager) => AlarmManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[AlarmManager.clearAlarm] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmActive = false");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "none"))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmType = 'none'");
      }
      if (!((__result.self.alarmTriggeredTimestamp === 0))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmTriggeredTimestamp = 0.0");
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

/** Impl signature for AlarmManager.clearAlarm (async). User supplies this. */
export type AlarmManagerClearAlarmAsyncImpl = (self: AlarmManager) => Promise<{ self: AlarmManager; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown; alarmTriggeredTimestamp: unknown } }>;

/** Contract-checking wrapper for AlarmManager.clearAlarm (async). */
export function wrapAlarmManagerClearAlarmAsync(impl: AlarmManagerClearAlarmAsyncImpl): (self: AlarmManager) => Promise<AlarmManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[AlarmManager.clearAlarm] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmActive = false");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "none"))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmType = 'none'");
      }
      if (!((__result.self.alarmTriggeredTimestamp === 0))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmTriggeredTimestamp = 0.0");
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

/** Impl signature for AlarmManager.configureAlarmParams. User supplies this. */
export type AlarmManagerConfigureAlarmParamsImpl = (self: AlarmManager, latencyMs: number, rearmMs: number) => { self: AlarmManager; modified: { maxAlarmLatencyMs: unknown; silenceAutoRearmMs: unknown } };

/** Contract-checking wrapper for AlarmManager.configureAlarmParams. */
export function wrapAlarmManagerConfigureAlarmParams(impl: AlarmManagerConfigureAlarmParamsImpl): (self: AlarmManager, latencyMs: number, rearmMs: number) => AlarmManager {
  return (self, latencyMs, rearmMs) => {
    const preViolations: string[] = [];
    if (!((latencyMs > 0))) {
      preViolations.push("[AlarmManager.configureAlarmParams] pre violated: latencyMs > 0.0");
    }
    if (!((rearmMs > 0))) {
      preViolations.push("[AlarmManager.configureAlarmParams] pre violated: rearmMs > 0.0");
    }
    if (!((latencyMs <= 2000))) {
      preViolations.push("[AlarmManager.configureAlarmParams] pre violated: latencyMs <= 2000.0");
    }
    if (!((rearmMs <= 120000))) {
      preViolations.push("[AlarmManager.configureAlarmParams] pre violated: rearmMs <= 120000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, latencyMs, rearmMs);
      const postViolations: string[] = [];
      if (!((__result.self.maxAlarmLatencyMs === latencyMs))) {
        postViolations.push("[AlarmManager.configureAlarmParams] post violated: self.maxAlarmLatencyMs = latencyMs");
      }
      if (!((__result.self.silenceAutoRearmMs === rearmMs))) {
        postViolations.push("[AlarmManager.configureAlarmParams] post violated: self.silenceAutoRearmMs = rearmMs");
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

/** Impl signature for AlarmManager.configureAlarmParams (async). User supplies this. */
export type AlarmManagerConfigureAlarmParamsAsyncImpl = (self: AlarmManager, latencyMs: number, rearmMs: number) => Promise<{ self: AlarmManager; modified: { maxAlarmLatencyMs: unknown; silenceAutoRearmMs: unknown } }>;

/** Contract-checking wrapper for AlarmManager.configureAlarmParams (async). */
export function wrapAlarmManagerConfigureAlarmParamsAsync(impl: AlarmManagerConfigureAlarmParamsAsyncImpl): (self: AlarmManager, latencyMs: number, rearmMs: number) => Promise<AlarmManager> {
  return async (self, latencyMs, rearmMs) => {
    const preViolations: string[] = [];
    if (!((latencyMs > 0))) {
      preViolations.push("[AlarmManager.configureAlarmParams] pre violated: latencyMs > 0.0");
    }
    if (!((rearmMs > 0))) {
      preViolations.push("[AlarmManager.configureAlarmParams] pre violated: rearmMs > 0.0");
    }
    if (!((latencyMs <= 2000))) {
      preViolations.push("[AlarmManager.configureAlarmParams] pre violated: latencyMs <= 2000.0");
    }
    if (!((rearmMs <= 120000))) {
      preViolations.push("[AlarmManager.configureAlarmParams] pre violated: rearmMs <= 120000.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, latencyMs, rearmMs);
      const postViolations: string[] = [];
      if (!((__result.self.maxAlarmLatencyMs === latencyMs))) {
        postViolations.push("[AlarmManager.configureAlarmParams] post violated: self.maxAlarmLatencyMs = latencyMs");
      }
      if (!((__result.self.silenceAutoRearmMs === rearmMs))) {
        postViolations.push("[AlarmManager.configureAlarmParams] post violated: self.silenceAutoRearmMs = rearmMs");
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

/** Impl signature for AlarmManager.resetAlarmManager. User supplies this. */
export type AlarmManagerResetAlarmManagerImpl = (self: AlarmManager) => { self: AlarmManager; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown; alarmSilenceTimestamp: unknown; alarmTriggeredTimestamp: unknown } };

/** Contract-checking wrapper for AlarmManager.resetAlarmManager. */
export function wrapAlarmManagerResetAlarmManager(impl: AlarmManagerResetAlarmManagerImpl): (self: AlarmManager) => AlarmManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[AlarmManager.resetAlarmManager] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmActive = false");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "none"))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmType = 'none'");
      }
      if (!((__result.self.alarmSilenceTimestamp === 0))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmSilenceTimestamp = 0.0");
      }
      if (!((__result.self.alarmTriggeredTimestamp === 0))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmTriggeredTimestamp = 0.0");
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

/** Impl signature for AlarmManager.resetAlarmManager (async). User supplies this. */
export type AlarmManagerResetAlarmManagerAsyncImpl = (self: AlarmManager) => Promise<{ self: AlarmManager; modified: { alarmActive: unknown; alarmSilenced: unknown; alarmType: unknown; alarmSilenceTimestamp: unknown; alarmTriggeredTimestamp: unknown } }>;

/** Contract-checking wrapper for AlarmManager.resetAlarmManager (async). */
export function wrapAlarmManagerResetAlarmManagerAsync(impl: AlarmManagerResetAlarmManagerAsyncImpl): (self: AlarmManager) => Promise<AlarmManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[AlarmManager.resetAlarmManager] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmActive = false");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.alarmType === "none"))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmType = 'none'");
      }
      if (!((__result.self.alarmSilenceTimestamp === 0))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmSilenceTimestamp = 0.0");
      }
      if (!((__result.self.alarmTriggeredTimestamp === 0))) {
        postViolations.push("[AlarmManager.resetAlarmManager] post violated: self.alarmTriggeredTimestamp = 0.0");
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

/** Impl signature for DisplayRenderer.updateHeartRateDisplay. User supplies this. */
export type DisplayRendererUpdateHeartRateDisplayImpl = (self: DisplayRenderer, newHeartRate: number, timestamp: number) => { self: DisplayRenderer; modified: { displayedHeartRate: unknown; lastUpdateTimestamp: unknown } };

/** Contract-checking wrapper for DisplayRenderer.updateHeartRateDisplay. */
export function wrapDisplayRendererUpdateHeartRateDisplay(impl: DisplayRendererUpdateHeartRateDisplayImpl): (self: DisplayRenderer, newHeartRate: number, timestamp: number) => DisplayRenderer {
  return (self, newHeartRate, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[DisplayRenderer.updateHeartRateDisplay] pre violated: timestamp >= 0.0");
    }
    if (!((newHeartRate >= 0))) {
      preViolations.push("[DisplayRenderer.updateHeartRateDisplay] pre violated: newHeartRate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newHeartRate, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.displayedHeartRate === newHeartRate))) {
        postViolations.push("[DisplayRenderer.updateHeartRateDisplay] post violated: self.displayedHeartRate = newHeartRate");
      }
      if (!((__result.self.lastUpdateTimestamp === timestamp))) {
        postViolations.push("[DisplayRenderer.updateHeartRateDisplay] post violated: self.lastUpdateTimestamp = timestamp");
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

/** Impl signature for DisplayRenderer.updateHeartRateDisplay (async). User supplies this. */
export type DisplayRendererUpdateHeartRateDisplayAsyncImpl = (self: DisplayRenderer, newHeartRate: number, timestamp: number) => Promise<{ self: DisplayRenderer; modified: { displayedHeartRate: unknown; lastUpdateTimestamp: unknown } }>;

/** Contract-checking wrapper for DisplayRenderer.updateHeartRateDisplay (async). */
export function wrapDisplayRendererUpdateHeartRateDisplayAsync(impl: DisplayRendererUpdateHeartRateDisplayAsyncImpl): (self: DisplayRenderer, newHeartRate: number, timestamp: number) => Promise<DisplayRenderer> {
  return async (self, newHeartRate, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[DisplayRenderer.updateHeartRateDisplay] pre violated: timestamp >= 0.0");
    }
    if (!((newHeartRate >= 0))) {
      preViolations.push("[DisplayRenderer.updateHeartRateDisplay] pre violated: newHeartRate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newHeartRate, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.displayedHeartRate === newHeartRate))) {
        postViolations.push("[DisplayRenderer.updateHeartRateDisplay] post violated: self.displayedHeartRate = newHeartRate");
      }
      if (!((__result.self.lastUpdateTimestamp === timestamp))) {
        postViolations.push("[DisplayRenderer.updateHeartRateDisplay] post violated: self.lastUpdateTimestamp = timestamp");
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

/** Impl signature for DisplayRenderer.updateAlarmDisplay. User supplies this. */
export type DisplayRendererUpdateAlarmDisplayImpl = (self: DisplayRenderer, newAlarmActive: boolean, newAlarmType: string, timestamp: number) => { self: DisplayRenderer; modified: { displayedAlarmActive: unknown; displayedAlarmType: unknown; lastUpdateTimestamp: unknown } };

/** Contract-checking wrapper for DisplayRenderer.updateAlarmDisplay. */
export function wrapDisplayRendererUpdateAlarmDisplay(impl: DisplayRendererUpdateAlarmDisplayImpl): (self: DisplayRenderer, newAlarmActive: boolean, newAlarmType: string, timestamp: number) => DisplayRenderer {
  return (self, newAlarmActive, newAlarmType, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[DisplayRenderer.updateAlarmDisplay] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newAlarmActive, newAlarmType, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.displayedAlarmActive === newAlarmActive))) {
        postViolations.push("[DisplayRenderer.updateAlarmDisplay] post violated: self.displayedAlarmActive = newAlarmActive");
      }
      if (!((__result.self.displayedAlarmType === newAlarmType))) {
        postViolations.push("[DisplayRenderer.updateAlarmDisplay] post violated: self.displayedAlarmType = newAlarmType");
      }
      if (!((__result.self.lastUpdateTimestamp === timestamp))) {
        postViolations.push("[DisplayRenderer.updateAlarmDisplay] post violated: self.lastUpdateTimestamp = timestamp");
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

/** Impl signature for DisplayRenderer.updateAlarmDisplay (async). User supplies this. */
export type DisplayRendererUpdateAlarmDisplayAsyncImpl = (self: DisplayRenderer, newAlarmActive: boolean, newAlarmType: string, timestamp: number) => Promise<{ self: DisplayRenderer; modified: { displayedAlarmActive: unknown; displayedAlarmType: unknown; lastUpdateTimestamp: unknown } }>;

/** Contract-checking wrapper for DisplayRenderer.updateAlarmDisplay (async). */
export function wrapDisplayRendererUpdateAlarmDisplayAsync(impl: DisplayRendererUpdateAlarmDisplayAsyncImpl): (self: DisplayRenderer, newAlarmActive: boolean, newAlarmType: string, timestamp: number) => Promise<DisplayRenderer> {
  return async (self, newAlarmActive, newAlarmType, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[DisplayRenderer.updateAlarmDisplay] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newAlarmActive, newAlarmType, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.displayedAlarmActive === newAlarmActive))) {
        postViolations.push("[DisplayRenderer.updateAlarmDisplay] post violated: self.displayedAlarmActive = newAlarmActive");
      }
      if (!((__result.self.displayedAlarmType === newAlarmType))) {
        postViolations.push("[DisplayRenderer.updateAlarmDisplay] post violated: self.displayedAlarmType = newAlarmType");
      }
      if (!((__result.self.lastUpdateTimestamp === timestamp))) {
        postViolations.push("[DisplayRenderer.updateAlarmDisplay] post violated: self.lastUpdateTimestamp = timestamp");
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

/** Impl signature for DisplayRenderer.resetDisplay. User supplies this. */
export type DisplayRendererResetDisplayImpl = (self: DisplayRenderer) => { self: DisplayRenderer; modified: { displayedHeartRate: unknown; displayedAlarmActive: unknown; displayedAlarmType: unknown; lastUpdateTimestamp: unknown } };

/** Contract-checking wrapper for DisplayRenderer.resetDisplay. */
export function wrapDisplayRendererResetDisplay(impl: DisplayRendererResetDisplayImpl): (self: DisplayRenderer) => DisplayRenderer {
  return (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[DisplayRenderer.resetDisplay] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayedHeartRate === 0))) {
        postViolations.push("[DisplayRenderer.resetDisplay] post violated: self.displayedHeartRate = 0.0");
      }
      if (!((__result.self.displayedAlarmActive === false))) {
        postViolations.push("[DisplayRenderer.resetDisplay] post violated: self.displayedAlarmActive = false");
      }
      if (!((__result.self.displayedAlarmType === "none"))) {
        postViolations.push("[DisplayRenderer.resetDisplay] post violated: self.displayedAlarmType = 'none'");
      }
      if (!((__result.self.lastUpdateTimestamp === 0))) {
        postViolations.push("[DisplayRenderer.resetDisplay] post violated: self.lastUpdateTimestamp = 0.0");
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

/** Impl signature for DisplayRenderer.resetDisplay (async). User supplies this. */
export type DisplayRendererResetDisplayAsyncImpl = (self: DisplayRenderer) => Promise<{ self: DisplayRenderer; modified: { displayedHeartRate: unknown; displayedAlarmActive: unknown; displayedAlarmType: unknown; lastUpdateTimestamp: unknown } }>;

/** Contract-checking wrapper for DisplayRenderer.resetDisplay (async). */
export function wrapDisplayRendererResetDisplayAsync(impl: DisplayRendererResetDisplayAsyncImpl): (self: DisplayRenderer) => Promise<DisplayRenderer> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(true)) {
      preViolations.push("[DisplayRenderer.resetDisplay] pre violated: true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.displayedHeartRate === 0))) {
        postViolations.push("[DisplayRenderer.resetDisplay] post violated: self.displayedHeartRate = 0.0");
      }
      if (!((__result.self.displayedAlarmActive === false))) {
        postViolations.push("[DisplayRenderer.resetDisplay] post violated: self.displayedAlarmActive = false");
      }
      if (!((__result.self.displayedAlarmType === "none"))) {
        postViolations.push("[DisplayRenderer.resetDisplay] post violated: self.displayedAlarmType = 'none'");
      }
      if (!((__result.self.lastUpdateTimestamp === 0))) {
        postViolations.push("[DisplayRenderer.resetDisplay] post violated: self.lastUpdateTimestamp = 0.0");
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

