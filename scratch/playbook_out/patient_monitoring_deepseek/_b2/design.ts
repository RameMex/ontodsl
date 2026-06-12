// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for EcgSensor. Runtime: string. Compile-time: branded. */
export type EcgSensorId = string & { readonly __brand: "EcgSensorId" };
/** Identity type for PlausibilityChecker. Runtime: string. Compile-time: branded. */
export type PlausibilityCheckerId = string & { readonly __brand: "PlausibilityCheckerId" };
/** Identity type for Display. Runtime: string. Compile-time: branded. */
export type DisplayId = string & { readonly __brand: "DisplayId" };
/** Identity type for ThresholdComparator. Runtime: string. Compile-time: branded. */
export type ThresholdComparatorId = string & { readonly __brand: "ThresholdComparatorId" };
/** Identity type for AlarmManager. Runtime: string. Compile-time: branded. */
export type AlarmManagerId = string & { readonly __brand: "AlarmManagerId" };
/** Identity type for SensorDisconnectMonitor. Runtime: string. Compile-time: branded. */
export type SensorDisconnectMonitorId = string & { readonly __brand: "SensorDisconnectMonitorId" };
/** Identity type for Clock. Runtime: string. Compile-time: branded. */
export type ClockId = string & { readonly __brand: "ClockId" };
/** Identity type for AudibleAlert. Runtime: string. Compile-time: branded. */
export type AudibleAlertId = string & { readonly __brand: "AudibleAlertId" };
/** Identity type for SensorToPlausibilityChannel. Runtime: string. Compile-time: branded. */
export type SensorToPlausibilityChannelId = string & { readonly __brand: "SensorToPlausibilityChannelId" };
/** Identity type for PlausibilityToDisplayChannel. Runtime: string. Compile-time: branded. */
export type PlausibilityToDisplayChannelId = string & { readonly __brand: "PlausibilityToDisplayChannelId" };
/** Identity type for PlausibilityToThresholdChannel. Runtime: string. Compile-time: branded. */
export type PlausibilityToThresholdChannelId = string & { readonly __brand: "PlausibilityToThresholdChannelId" };
/** Identity type for ThresholdToAlarmChannel. Runtime: string. Compile-time: branded. */
export type ThresholdToAlarmChannelId = string & { readonly __brand: "ThresholdToAlarmChannelId" };
/** Identity type for DisconnectToAlarmChannel. Runtime: string. Compile-time: branded. */
export type DisconnectToAlarmChannelId = string & { readonly __brand: "DisconnectToAlarmChannelId" };
/** Identity type for AlarmToAudibleChannel. Runtime: string. Compile-time: branded. */
export type AlarmToAudibleChannelId = string & { readonly __brand: "AlarmToAudibleChannelId" };
/** Identity type for VitalSignDataFlow. Runtime: string. Compile-time: branded. */
export type VitalSignDataFlowId = string & { readonly __brand: "VitalSignDataFlowId" };
/** Identity type for SensorReadStep. Runtime: string. Compile-time: branded. */
export type SensorReadStepId = string & { readonly __brand: "SensorReadStepId" };
/** Identity type for PlausibilityCheckStep. Runtime: string. Compile-time: branded. */
export type PlausibilityCheckStepId = string & { readonly __brand: "PlausibilityCheckStepId" };
/** Identity type for DisplayUpdateStep. Runtime: string. Compile-time: branded. */
export type DisplayUpdateStepId = string & { readonly __brand: "DisplayUpdateStepId" };
/** Identity type for ThresholdCheckStep. Runtime: string. Compile-time: branded. */
export type ThresholdCheckStepId = string & { readonly __brand: "ThresholdCheckStepId" };
/** Identity type for AlarmRaiseStep. Runtime: string. Compile-time: branded. */
export type AlarmRaiseStepId = string & { readonly __brand: "AlarmRaiseStepId" };
/** Identity type for AutoRearmStep. Runtime: string. Compile-time: branded. */
export type AutoRearmStepId = string & { readonly __brand: "AutoRearmStepId" };
/** Identity type for SensorDisconnectStep. Runtime: string. Compile-time: branded. */
export type SensorDisconnectStepId = string & { readonly __brand: "SensorDisconnectStepId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for HospitalAdministration. Runtime: string. Compile-time: branded. */
export type HospitalAdministrationId = string & { readonly __brand: "HospitalAdministrationId" };
/** Identity type for MonitorVendor. Runtime: string. Compile-time: branded. */
export type MonitorVendorId = string & { readonly __brand: "MonitorVendorId" };
/** Identity type for RejectImplausibleCommitment. Runtime: string. Compile-time: branded. */
export type RejectImplausibleCommitmentId = string & { readonly __brand: "RejectImplausibleCommitmentId" };
/** Identity type for AlarmLatencyCommitment. Runtime: string. Compile-time: branded. */
export type AlarmLatencyCommitmentId = string & { readonly __brand: "AlarmLatencyCommitmentId" };
/** Identity type for SensorDisconnectCommitment. Runtime: string. Compile-time: branded. */
export type SensorDisconnectCommitmentId = string & { readonly __brand: "SensorDisconnectCommitmentId" };
/** Identity type for SilenceAutoRearmCommitment. Runtime: string. Compile-time: branded. */
export type SilenceAutoRearmCommitmentId = string & { readonly __brand: "SilenceAutoRearmCommitmentId" };
/** Identity type for VitalSignMonitoringFlow. Runtime: string. Compile-time: branded. */
export type VitalSignMonitoringFlowId = string & { readonly __brand: "VitalSignMonitoringFlowId" };
/** Identity type for HeartRateReading. Runtime: string. Compile-time: branded. */
export type HeartRateReadingId = string & { readonly __brand: "HeartRateReadingId" };
/** Identity type for AlarmThreshold. Runtime: string. Compile-time: branded. */
export type AlarmThresholdId = string & { readonly __brand: "AlarmThresholdId" };
/** Identity type for AlarmEvent. Runtime: string. Compile-time: branded. */
export type AlarmEventId = string & { readonly __brand: "AlarmEventId" };
/** Identity type for SensorStatus. Runtime: string. Compile-time: branded. */
export type SensorStatusId = string & { readonly __brand: "SensorStatusId" };
/** Identity type for RejectionCounter. Runtime: string. Compile-time: branded. */
export type RejectionCounterId = string & { readonly __brand: "RejectionCounterId" };
/** Identity type for VitalSignMonitorSystem. Runtime: string. Compile-time: branded. */
export type VitalSignMonitorSystemId = string & { readonly __brand: "VitalSignMonitorSystemId" };
/** Identity type for SensorDeliveryRateAssumption. Runtime: string. Compile-time: branded. */
export type SensorDeliveryRateAssumptionId = string & { readonly __brand: "SensorDeliveryRateAssumptionId" };
/** Identity type for ClockMonotonicityAssumption. Runtime: string. Compile-time: branded. */
export type ClockMonotonicityAssumptionId = string & { readonly __brand: "ClockMonotonicityAssumptionId" };
/** Identity type for ButtonDebounceAssumption. Runtime: string. Compile-time: branded. */
export type ButtonDebounceAssumptionId = string & { readonly __brand: "ButtonDebounceAssumptionId" };
/** Identity type for ThresholdBoundsAssumption. Runtime: string. Compile-time: branded. */
export type ThresholdBoundsAssumptionId = string & { readonly __brand: "ThresholdBoundsAssumptionId" };
/** Identity type for Iec62304Clearance. Runtime: string. Compile-time: branded. */
export type Iec62304ClearanceId = string & { readonly __brand: "Iec62304ClearanceId" };
/** Identity type for Iec60601Clearance. Runtime: string. Compile-time: branded. */
export type Iec60601ClearanceId = string & { readonly __brand: "Iec60601ClearanceId" };
/** Identity type for Iso13485Clearance. Runtime: string. Compile-time: branded. */
export type Iso13485ClearanceId = string & { readonly __brand: "Iso13485ClearanceId" };
/** Identity type for FdaClearance. Runtime: string. Compile-time: branded. */
export type FdaClearanceId = string & { readonly __brand: "FdaClearanceId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface EcgSensor {
  readonly sensorId: EcgSensorId;
  readonly lastRawReading: number;
  readonly lastReadingTimestamp: number;
  readonly isConnected: boolean;
  readonly signalStrength: number;
}

/** @stereotype <<Kind>> */
export interface PlausibilityChecker {
  readonly checkerId: PlausibilityCheckerId;
  readonly plausibleMin: number;
  readonly plausibleMax: number;
  readonly rejectionCounter: number;
}

/** @stereotype <<Kind>> */
export interface Display {
  readonly displayId: DisplayId;
  readonly displayValue: number;
  readonly isDisplaying: boolean;
  readonly screenActive: boolean;
}

/** @stereotype <<Kind>> */
export interface ThresholdComparator {
  readonly comparatorId: ThresholdComparatorId;
  readonly lowThreshold: number;
  readonly highThreshold: number;
  readonly isCrossed: boolean;
}

/** @stereotype <<Kind>> */
export interface AlarmManager {
  readonly alarmManagerId: AlarmManagerId;
  readonly alarmRaised: boolean;
  readonly alarmRaisedAt: number;
  readonly alarmSilenced: boolean;
  readonly silenceStartedAt: number;
  readonly autoRearmSeconds: number;
  readonly alarmLatencyBudgetSeconds: number;
}

/** @stereotype <<Kind>> */
export interface SensorDisconnectMonitor {
  readonly monitorId: SensorDisconnectMonitorId;
  readonly disconnectThresholdSeconds: number;
  readonly disconnectAlarmRaised: boolean;
  readonly lastSignalTimestamp: number;
}

/** @stereotype <<Kind>> */
export interface Clock {
  readonly clockId: ClockId;
  readonly currentTime: number;
  readonly tickIntervalMs: number;
}

/** @stereotype <<Kind>> */
export interface AudibleAlert {
  readonly alertId: AudibleAlertId;
  readonly isAudible: boolean;
  readonly alertType: string;
}

/** @stereotype <<Relator>> */
export interface SensorToPlausibilityChannel {
  readonly channelId: SensorToPlausibilityChannelId;
  readonly lastTransferredValue: number;
  readonly lastTransferTimestamp: number;
  readonly transferSucceeded: boolean;
}

/** @stereotype <<Relator>> */
export interface PlausibilityToDisplayChannel {
  readonly channelId: PlausibilityToDisplayChannelId;
  readonly lastDisplayedValue: number;
  readonly displayRequested: boolean;
}

/** @stereotype <<Relator>> */
export interface PlausibilityToThresholdChannel {
  readonly channelId: PlausibilityToThresholdChannelId;
  readonly lastComparedValue: number;
  readonly comparisonRequested: boolean;
}

/** @stereotype <<Relator>> */
export interface ThresholdToAlarmChannel {
  readonly channelId: ThresholdToAlarmChannelId;
  readonly lastCrossingValue: number;
  readonly alarmTriggered: boolean;
}

/** @stereotype <<Relator>> */
export interface DisconnectToAlarmChannel {
  readonly channelId: DisconnectToAlarmChannelId;
  readonly disconnectAlarmTriggered: boolean;
}

/** @stereotype <<Relator>> */
export interface AlarmToAudibleChannel {
  readonly channelId: AlarmToAudibleChannelId;
  readonly lastAlertType: string;
  readonly soundRequested: boolean;
}

/** @stereotype <<Role>> */
export interface SensorEndpoint {
  readonly lastRawReading: number;
  readonly lastReadingTimestamp: number;
  readonly isConnected: boolean;
}

/** @stereotype <<Role>> */
export interface PlausibilityInputEndpoint {
  readonly plausibleMin: number;
  readonly plausibleMax: number;
}

/** @stereotype <<Role>> */
export interface PlausibilityOutputEndpoint {
  readonly plausibleMin: number;
  readonly plausibleMax: number;
}

/** @stereotype <<Role>> */
export interface DisplayInputEndpoint {
  readonly displayValue: number;
}

/** @stereotype <<Role>> */
export interface PlausibilityOutputForThreshold {
  readonly plausibleMin: number;
  readonly plausibleMax: number;
}

/** @stereotype <<Role>> */
export interface ThresholdInputEndpoint {
  readonly lowThreshold: number;
  readonly highThreshold: number;
}

/** @stereotype <<Role>> */
export interface ThresholdOutputEndpoint {
  readonly isCrossed: boolean;
}

/** @stereotype <<Role>> */
export interface AlarmInputEndpoint {
  readonly alarmRaised: boolean;
}

/** @stereotype <<Role>> */
export interface DisconnectMonitorOutputEndpoint {
  readonly disconnectAlarmRaised: boolean;
}

/** @stereotype <<Role>> */
export interface DisconnectAlarmInputEndpoint {
  readonly alarmRaised: boolean;
}

/** @stereotype <<Role>> */
export interface AlarmOutputEndpoint {
  readonly alarmRaised: boolean;
  readonly alarmSilenced: boolean;
}

/** @stereotype <<Role>> */
export interface AudibleInputEndpoint {
  readonly isAudible: boolean;
  readonly alertType: string;
}

/** @stereotype <<Happening>> */
export interface VitalSignDataFlow {
  readonly flowId: VitalSignDataFlowId;
  readonly stepSequence: string;
}

/** @stereotype <<Happening>> */
export interface SensorReadStep {
  readonly stepId: SensorReadStepId;
  readonly timestamp: number;
  readonly rawValue: number;
}

/** @stereotype <<Happening>> */
export interface PlausibilityCheckStep {
  readonly stepId: PlausibilityCheckStepId;
  readonly rawValue: number;
  readonly isPlausible: boolean;
}

/** @stereotype <<Happening>> */
export interface DisplayUpdateStep {
  readonly stepId: DisplayUpdateStepId;
  readonly displayValue: number;
}

/** @stereotype <<Happening>> */
export interface ThresholdCheckStep {
  readonly stepId: ThresholdCheckStepId;
  readonly comparedValue: number;
  readonly thresholdCrossed: boolean;
}

/** @stereotype <<Happening>> */
export interface AlarmRaiseStep {
  readonly stepId: AlarmRaiseStepId;
  readonly alarmTimestamp: number;
  readonly latencySeconds: number;
}

/** @stereotype <<Happening>> */
export interface AutoRearmStep {
  readonly stepId: AutoRearmStepId;
  readonly rearmTime: number;
}

/** @stereotype <<Happening>> */
export interface SensorDisconnectStep {
  readonly stepId: SensorDisconnectStepId;
  readonly signalLostDuration: number;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly name: string;
  readonly certificationNumber: string;
}

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly medicalRecordNumber: string;
  readonly isBeingMonitored: boolean;
}

/** @stereotype <<Agent>> */
export interface HospitalAdministration {
  readonly adminId: HospitalAdministrationId;
  readonly facilityName: string;
}

/** @stereotype <<Agent>> */
export interface MonitorVendor {
  readonly vendorId: MonitorVendorId;
  readonly name: string;
  readonly regulatoryRegistration: string;
}

/** @stereotype <<Commitment>> */
export interface RejectImplausibleCommitment {
  readonly commitmentId: RejectImplausibleCommitmentId;
  readonly plausibleMin: number;
  readonly plausibleMax: number;
  readonly rejectionCounter: number;
}

/** @stereotype <<Commitment>> */
export interface AlarmLatencyCommitment {
  readonly commitmentId: AlarmLatencyCommitmentId;
  readonly maxLatencySeconds: number;
  readonly alarmRaised: boolean;
}

/** @stereotype <<Commitment>> */
export interface SensorDisconnectCommitment {
  readonly commitmentId: SensorDisconnectCommitmentId;
  readonly disconnectThresholdSeconds: number;
  readonly disconnectAlarmRaised: boolean;
}

/** @stereotype <<Commitment>> */
export interface SilenceAutoRearmCommitment {
  readonly commitmentId: SilenceAutoRearmCommitmentId;
  readonly autoRearmSeconds: number;
}

/** @stereotype <<Happening>> */
export interface VitalSignMonitoringFlow {
  readonly flowId: VitalSignMonitoringFlowId;
  readonly stepSequence: string;
  readonly triggeredBy: string;
  readonly outcome: string;
}

/** @stereotype <<Kind>> */
export interface HeartRateReading {
  readonly readingId: HeartRateReadingId;
  readonly valueBpm: number;
  readonly timestamp: number;
  readonly isImplausible: boolean;
  readonly sourceSensorId: string;
}

/** @stereotype <<Kind>> */
export interface AlarmThreshold {
  readonly thresholdId: AlarmThresholdId;
  readonly vitalType: string;
  readonly lowBound: number;
  readonly highBound: number;
  readonly enabled: boolean;
}

/** @stereotype <<Kind>> */
export interface AlarmEvent {
  readonly alarmId: AlarmEventId;
  readonly alarmType: string;
  readonly raisedAt: number;
  readonly acknowledgedAt: number;
  readonly isSilenced: boolean;
  readonly autoRearmAt: number;
}

/** @stereotype <<Kind>> */
export interface SensorStatus {
  readonly statusId: SensorStatusId;
  readonly sensorId: string;
  readonly lastSignalAt: number;
  readonly isConnected: boolean;
  readonly disconnectAlarmRaised: boolean;
}

/** @stereotype <<Kind>> */
export interface RejectionCounter {
  readonly counterId: RejectionCounterId;
  readonly count: number;
  readonly lastRejectedAt: number;
}

/** @stereotype <<Category>> */
export interface RejectImplausibleConstraints {
}

/** @stereotype <<Category>> */
export interface AlarmLatencyConstraints {
}

/** @stereotype <<Category>> */
export interface SensorDisconnectConstraints {
}

/** @stereotype <<Category>> */
export interface SilenceAutoRearmConstraints {
}

/** @stereotype <<Kind>> */
export interface VitalSignMonitorSystem extends RejectImplausibleConstraints, AlarmLatencyConstraints, SensorDisconnectConstraints, SilenceAutoRearmConstraints {
  readonly systemId: VitalSignMonitorSystemId;
  readonly deviceSerialNumber: string;
  readonly currentHeartRate: number;
  readonly displayValue: number;
  readonly isDisplaying: boolean;
  readonly plausibleMin: number;
  readonly plausibleMax: number;
  readonly rejectionCounter: number;
  readonly highAlarmThreshold: number;
  readonly lowAlarmThreshold: number;
  readonly alarmRaised: boolean;
  readonly alarmRaisedAt: number;
  readonly alarmLatencyBudgetSeconds: number;
  readonly lastSignalAt: number;
  readonly disconnectThresholdSeconds: number;
  readonly disconnectAlarmRaised: boolean;
  readonly sensorConnected: boolean;
  readonly alarmSilenced: boolean;
  readonly silenceStartedAt: number;
  readonly autoRearmSeconds: number;
}

/** @stereotype <<Category>> */
export interface Iec62304ClassC {
  readonly softwareVersion: string;
  readonly safetyClassification: string;
  readonly riskAssessmentDocRef: string;
}

/** @stereotype <<Category>> */
export interface Iec60601_1_8Compliant {
  readonly alarmPriorityLevels: string;
  readonly alarmSignalType: string;
  readonly alarmDelayMaxMs: number;
}

/** @stereotype <<Category>> */
export interface Iso13485Compliant {
  readonly qualitySystemRef: string;
  readonly auditCycleMonths: number;
}

/** @stereotype <<Category>> */
export interface FdaCleared {
  readonly fda510kNumber: string;
  readonly indicationsForUse: string;
  readonly clearanceDate: string;
}

/** @stereotype <<Category>> */
export interface PhysicallyPlausibleHeartRate {
}

/** @stereotype <<Category>> */
export interface AlarmTimingConstraint {
}

/** @stereotype <<Category>> */
export interface SensorDisconnectTiming {
}

/** @stereotype <<Category>> */
export interface SilenceAutoRearmRule {
}

/** @stereotype <<Kind>> */
export interface SensorDeliveryRateAssumption {
  readonly assumptionId: SensorDeliveryRateAssumptionId;
  readonly sourceSensorType: string;
  readonly minDeliveryHz: number;
  readonly maxInterarrivalSeconds: number;
}

/** @stereotype <<Kind>> */
export interface ClockMonotonicityAssumption {
  readonly assumptionId: ClockMonotonicityAssumptionId;
  readonly maxTickSkewMs: number;
}

/** @stereotype <<Kind>> */
export interface ButtonDebounceAssumption {
  readonly assumptionId: ButtonDebounceAssumptionId;
  readonly debounceWindowMs: number;
}

/** @stereotype <<Kind>> */
export interface ThresholdBoundsAssumption {
  readonly assumptionId: ThresholdBoundsAssumptionId;
  readonly plausibleMin: number;
  readonly plausibleMax: number;
}

/** @stereotype <<Kind>> */
export interface Iec62304Clearance {
  readonly clearanceId: Iec62304ClearanceId;
  readonly softwareVersion: string;
  readonly safetyClassification: string;
  readonly riskAssessmentDocRef: string;
}

/** @stereotype <<Kind>> */
export interface Iec60601Clearance {
  readonly clearanceId: Iec60601ClearanceId;
  readonly alarmPriorityLevels: string;
  readonly alarmSignalType: string;
  readonly alarmDelayMaxMs: number;
}

/** @stereotype <<Kind>> */
export interface Iso13485Clearance {
  readonly clearanceId: Iso13485ClearanceId;
  readonly qualitySystemRef: string;
  readonly auditCycleMonths: number;
}

/** @stereotype <<Kind>> */
export interface FdaClearance {
  readonly clearanceId: FdaClearanceId;
  readonly fda510kNumber: string;
  readonly indicationsForUse: string;
  readonly clearanceDate: string;
}

/** @stereotype <<Subkind>> */
export interface VitalSignMonitorSystemFormalized extends VitalSignMonitorSystem {
  readonly sensorDeliveryAssumption: SensorDeliveryRateAssumption;
  readonly clockMonotonicityAssumption: ClockMonotonicityAssumption;
  readonly buttonDebounceAssumption: ButtonDebounceAssumption;
  readonly thresholdBoundsAssumption: ThresholdBoundsAssumption;
  readonly iec62304Clearance: Iec62304Clearance;
  readonly iec60601Clearance: Iec60601Clearance;
  readonly iso13485Clearance: Iso13485Clearance;
  readonly fdaClearance: FdaClearance;
}


// ─── Factory functions ───

export function makeEcgSensor(data: {
  sensorId: string;
  lastRawReading: number;
  lastReadingTimestamp: number;
  isConnected: boolean;
  signalStrength: number;
}): EcgSensor {
  return {
    sensorId: data.sensorId as EcgSensorId,
    lastRawReading: data.lastRawReading,
    lastReadingTimestamp: data.lastReadingTimestamp,
    isConnected: data.isConnected,
    signalStrength: data.signalStrength,
  };
}

export function makePlausibilityChecker(data: {
  checkerId: string;
  plausibleMin: number;
  plausibleMax: number;
  rejectionCounter: number;
}): PlausibilityChecker {
  return {
    checkerId: data.checkerId as PlausibilityCheckerId,
    plausibleMin: data.plausibleMin,
    plausibleMax: data.plausibleMax,
    rejectionCounter: data.rejectionCounter,
  };
}

export function makeDisplay(data: {
  displayId: string;
  displayValue: number;
  isDisplaying: boolean;
  screenActive: boolean;
}): Display {
  return {
    displayId: data.displayId as DisplayId,
    displayValue: data.displayValue,
    isDisplaying: data.isDisplaying,
    screenActive: data.screenActive,
  };
}

export function makeThresholdComparator(data: {
  comparatorId: string;
  lowThreshold: number;
  highThreshold: number;
  isCrossed: boolean;
}): ThresholdComparator {
  return {
    comparatorId: data.comparatorId as ThresholdComparatorId,
    lowThreshold: data.lowThreshold,
    highThreshold: data.highThreshold,
    isCrossed: data.isCrossed,
  };
}

export function makeAlarmManager(data: {
  alarmManagerId: string;
  alarmRaised: boolean;
  alarmRaisedAt: number;
  alarmSilenced: boolean;
  silenceStartedAt: number;
  autoRearmSeconds: number;
  alarmLatencyBudgetSeconds: number;
}): AlarmManager {
  return {
    alarmManagerId: data.alarmManagerId as AlarmManagerId,
    alarmRaised: data.alarmRaised,
    alarmRaisedAt: data.alarmRaisedAt,
    alarmSilenced: data.alarmSilenced,
    silenceStartedAt: data.silenceStartedAt,
    autoRearmSeconds: data.autoRearmSeconds,
    alarmLatencyBudgetSeconds: data.alarmLatencyBudgetSeconds,
  };
}

export function makeSensorDisconnectMonitor(data: {
  monitorId: string;
  disconnectThresholdSeconds: number;
  disconnectAlarmRaised: boolean;
  lastSignalTimestamp: number;
}): SensorDisconnectMonitor {
  return {
    monitorId: data.monitorId as SensorDisconnectMonitorId,
    disconnectThresholdSeconds: data.disconnectThresholdSeconds,
    disconnectAlarmRaised: data.disconnectAlarmRaised,
    lastSignalTimestamp: data.lastSignalTimestamp,
  };
}

export function makeClock(data: {
  clockId: string;
  currentTime: number;
  tickIntervalMs: number;
}): Clock {
  return {
    clockId: data.clockId as ClockId,
    currentTime: data.currentTime,
    tickIntervalMs: data.tickIntervalMs,
  };
}

export function makeAudibleAlert(data: {
  alertId: string;
  isAudible: boolean;
  alertType: string;
}): AudibleAlert {
  return {
    alertId: data.alertId as AudibleAlertId,
    isAudible: data.isAudible,
    alertType: data.alertType,
  };
}

export function makeSensorToPlausibilityChannel(data: {
  channelId: string;
  lastTransferredValue: number;
  lastTransferTimestamp: number;
  transferSucceeded: boolean;
}): SensorToPlausibilityChannel {
  return {
    channelId: data.channelId as SensorToPlausibilityChannelId,
    lastTransferredValue: data.lastTransferredValue,
    lastTransferTimestamp: data.lastTransferTimestamp,
    transferSucceeded: data.transferSucceeded,
  };
}

export function makePlausibilityToDisplayChannel(data: {
  channelId: string;
  lastDisplayedValue: number;
  displayRequested: boolean;
}): PlausibilityToDisplayChannel {
  return {
    channelId: data.channelId as PlausibilityToDisplayChannelId,
    lastDisplayedValue: data.lastDisplayedValue,
    displayRequested: data.displayRequested,
  };
}

export function makePlausibilityToThresholdChannel(data: {
  channelId: string;
  lastComparedValue: number;
  comparisonRequested: boolean;
}): PlausibilityToThresholdChannel {
  return {
    channelId: data.channelId as PlausibilityToThresholdChannelId,
    lastComparedValue: data.lastComparedValue,
    comparisonRequested: data.comparisonRequested,
  };
}

export function makeThresholdToAlarmChannel(data: {
  channelId: string;
  lastCrossingValue: number;
  alarmTriggered: boolean;
}): ThresholdToAlarmChannel {
  return {
    channelId: data.channelId as ThresholdToAlarmChannelId,
    lastCrossingValue: data.lastCrossingValue,
    alarmTriggered: data.alarmTriggered,
  };
}

export function makeDisconnectToAlarmChannel(data: {
  channelId: string;
  disconnectAlarmTriggered: boolean;
}): DisconnectToAlarmChannel {
  return {
    channelId: data.channelId as DisconnectToAlarmChannelId,
    disconnectAlarmTriggered: data.disconnectAlarmTriggered,
  };
}

export function makeAlarmToAudibleChannel(data: {
  channelId: string;
  lastAlertType: string;
  soundRequested: boolean;
}): AlarmToAudibleChannel {
  return {
    channelId: data.channelId as AlarmToAudibleChannelId,
    lastAlertType: data.lastAlertType,
    soundRequested: data.soundRequested,
  };
}

export function makeVitalSignDataFlow(data: {
  flowId: string;
  stepSequence: string;
}): VitalSignDataFlow {
  return {
    flowId: data.flowId as VitalSignDataFlowId,
    stepSequence: data.stepSequence,
  };
}

export function makeSensorReadStep(data: {
  stepId: string;
  timestamp: number;
  rawValue: number;
}): SensorReadStep {
  return {
    stepId: data.stepId as SensorReadStepId,
    timestamp: data.timestamp,
    rawValue: data.rawValue,
  };
}

export function makePlausibilityCheckStep(data: {
  stepId: string;
  rawValue: number;
  isPlausible: boolean;
}): PlausibilityCheckStep {
  return {
    stepId: data.stepId as PlausibilityCheckStepId,
    rawValue: data.rawValue,
    isPlausible: data.isPlausible,
  };
}

export function makeDisplayUpdateStep(data: {
  stepId: string;
  displayValue: number;
}): DisplayUpdateStep {
  return {
    stepId: data.stepId as DisplayUpdateStepId,
    displayValue: data.displayValue,
  };
}

export function makeThresholdCheckStep(data: {
  stepId: string;
  comparedValue: number;
  thresholdCrossed: boolean;
}): ThresholdCheckStep {
  return {
    stepId: data.stepId as ThresholdCheckStepId,
    comparedValue: data.comparedValue,
    thresholdCrossed: data.thresholdCrossed,
  };
}

export function makeAlarmRaiseStep(data: {
  stepId: string;
  alarmTimestamp: number;
  latencySeconds: number;
}): AlarmRaiseStep {
  return {
    stepId: data.stepId as AlarmRaiseStepId,
    alarmTimestamp: data.alarmTimestamp,
    latencySeconds: data.latencySeconds,
  };
}

export function makeAutoRearmStep(data: {
  stepId: string;
  rearmTime: number;
}): AutoRearmStep {
  return {
    stepId: data.stepId as AutoRearmStepId,
    rearmTime: data.rearmTime,
  };
}

export function makeSensorDisconnectStep(data: {
  stepId: string;
  signalLostDuration: number;
}): SensorDisconnectStep {
  return {
    stepId: data.stepId as SensorDisconnectStepId,
    signalLostDuration: data.signalLostDuration,
  };
}

export function makeClinician(data: {
  clinicianId: string;
  name: string;
  certificationNumber: string;
}): Clinician {
  return {
    clinicianId: data.clinicianId as ClinicianId,
    name: data.name,
    certificationNumber: data.certificationNumber,
  };
}

export function makePatient(data: {
  patientId: string;
  medicalRecordNumber: string;
  isBeingMonitored: boolean;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    medicalRecordNumber: data.medicalRecordNumber,
    isBeingMonitored: data.isBeingMonitored,
  };
}

export function makeHospitalAdministration(data: {
  adminId: string;
  facilityName: string;
}): HospitalAdministration {
  return {
    adminId: data.adminId as HospitalAdministrationId,
    facilityName: data.facilityName,
  };
}

export function makeMonitorVendor(data: {
  vendorId: string;
  name: string;
  regulatoryRegistration: string;
}): MonitorVendor {
  return {
    vendorId: data.vendorId as MonitorVendorId,
    name: data.name,
    regulatoryRegistration: data.regulatoryRegistration,
  };
}

export function makeRejectImplausibleCommitment(data: {
  commitmentId: string;
  plausibleMin: number;
  plausibleMax: number;
  rejectionCounter: number;
}): RejectImplausibleCommitment {
  return {
    commitmentId: data.commitmentId as RejectImplausibleCommitmentId,
    plausibleMin: data.plausibleMin,
    plausibleMax: data.plausibleMax,
    rejectionCounter: data.rejectionCounter,
  };
}

export function makeAlarmLatencyCommitment(data: {
  commitmentId: string;
  maxLatencySeconds: number;
  alarmRaised: boolean;
}): AlarmLatencyCommitment {
  return {
    commitmentId: data.commitmentId as AlarmLatencyCommitmentId,
    maxLatencySeconds: data.maxLatencySeconds,
    alarmRaised: data.alarmRaised,
  };
}

export function makeSensorDisconnectCommitment(data: {
  commitmentId: string;
  disconnectThresholdSeconds: number;
  disconnectAlarmRaised: boolean;
}): SensorDisconnectCommitment {
  return {
    commitmentId: data.commitmentId as SensorDisconnectCommitmentId,
    disconnectThresholdSeconds: data.disconnectThresholdSeconds,
    disconnectAlarmRaised: data.disconnectAlarmRaised,
  };
}

export function makeSilenceAutoRearmCommitment(data: {
  commitmentId: string;
  autoRearmSeconds: number;
}): SilenceAutoRearmCommitment {
  return {
    commitmentId: data.commitmentId as SilenceAutoRearmCommitmentId,
    autoRearmSeconds: data.autoRearmSeconds,
  };
}

export function makeVitalSignMonitoringFlow(data: {
  flowId: string;
  stepSequence: string;
  triggeredBy: string;
  outcome: string;
}): VitalSignMonitoringFlow {
  return {
    flowId: data.flowId as VitalSignMonitoringFlowId,
    stepSequence: data.stepSequence,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
  };
}

export function makeHeartRateReading(data: {
  readingId: string;
  valueBpm: number;
  timestamp: number;
  isImplausible: boolean;
  sourceSensorId: string;
}): HeartRateReading {
  return {
    readingId: data.readingId as HeartRateReadingId,
    valueBpm: data.valueBpm,
    timestamp: data.timestamp,
    isImplausible: data.isImplausible,
    sourceSensorId: data.sourceSensorId,
  };
}

export function makeAlarmThreshold(data: {
  thresholdId: string;
  vitalType: string;
  lowBound: number;
  highBound: number;
  enabled: boolean;
}): AlarmThreshold {
  return {
    thresholdId: data.thresholdId as AlarmThresholdId,
    vitalType: data.vitalType,
    lowBound: data.lowBound,
    highBound: data.highBound,
    enabled: data.enabled,
  };
}

export function makeAlarmEvent(data: {
  alarmId: string;
  alarmType: string;
  raisedAt: number;
  acknowledgedAt: number;
  isSilenced: boolean;
  autoRearmAt: number;
}): AlarmEvent {
  return {
    alarmId: data.alarmId as AlarmEventId,
    alarmType: data.alarmType,
    raisedAt: data.raisedAt,
    acknowledgedAt: data.acknowledgedAt,
    isSilenced: data.isSilenced,
    autoRearmAt: data.autoRearmAt,
  };
}

export function makeSensorStatus(data: {
  statusId: string;
  sensorId: string;
  lastSignalAt: number;
  isConnected: boolean;
  disconnectAlarmRaised: boolean;
}): SensorStatus {
  return {
    statusId: data.statusId as SensorStatusId,
    sensorId: data.sensorId,
    lastSignalAt: data.lastSignalAt,
    isConnected: data.isConnected,
    disconnectAlarmRaised: data.disconnectAlarmRaised,
  };
}

export function makeRejectionCounter(data: {
  counterId: string;
  count: number;
  lastRejectedAt: number;
}): RejectionCounter {
  return {
    counterId: data.counterId as RejectionCounterId,
    count: data.count,
    lastRejectedAt: data.lastRejectedAt,
  };
}

export function makeVitalSignMonitorSystem(data: {
  systemId: string;
  deviceSerialNumber: string;
  currentHeartRate: number;
  displayValue: number;
  isDisplaying: boolean;
  plausibleMin: number;
  plausibleMax: number;
  rejectionCounter: number;
  highAlarmThreshold: number;
  lowAlarmThreshold: number;
  alarmRaised: boolean;
  alarmRaisedAt: number;
  alarmLatencyBudgetSeconds: number;
  lastSignalAt: number;
  disconnectThresholdSeconds: number;
  disconnectAlarmRaised: boolean;
  sensorConnected: boolean;
  alarmSilenced: boolean;
  silenceStartedAt: number;
  autoRearmSeconds: number;
}): VitalSignMonitorSystem {
  return {
    systemId: data.systemId as VitalSignMonitorSystemId,
    deviceSerialNumber: data.deviceSerialNumber,
    currentHeartRate: data.currentHeartRate,
    displayValue: data.displayValue,
    isDisplaying: data.isDisplaying,
    plausibleMin: data.plausibleMin,
    plausibleMax: data.plausibleMax,
    rejectionCounter: data.rejectionCounter,
    highAlarmThreshold: data.highAlarmThreshold,
    lowAlarmThreshold: data.lowAlarmThreshold,
    alarmRaised: data.alarmRaised,
    alarmRaisedAt: data.alarmRaisedAt,
    alarmLatencyBudgetSeconds: data.alarmLatencyBudgetSeconds,
    lastSignalAt: data.lastSignalAt,
    disconnectThresholdSeconds: data.disconnectThresholdSeconds,
    disconnectAlarmRaised: data.disconnectAlarmRaised,
    sensorConnected: data.sensorConnected,
    alarmSilenced: data.alarmSilenced,
    silenceStartedAt: data.silenceStartedAt,
    autoRearmSeconds: data.autoRearmSeconds,
  };
}

export function makeSensorDeliveryRateAssumption(data: {
  assumptionId: string;
  sourceSensorType: string;
  minDeliveryHz: number;
  maxInterarrivalSeconds: number;
}): SensorDeliveryRateAssumption {
  return {
    assumptionId: data.assumptionId as SensorDeliveryRateAssumptionId,
    sourceSensorType: data.sourceSensorType,
    minDeliveryHz: data.minDeliveryHz,
    maxInterarrivalSeconds: data.maxInterarrivalSeconds,
  };
}

export function makeClockMonotonicityAssumption(data: {
  assumptionId: string;
  maxTickSkewMs: number;
}): ClockMonotonicityAssumption {
  return {
    assumptionId: data.assumptionId as ClockMonotonicityAssumptionId,
    maxTickSkewMs: data.maxTickSkewMs,
  };
}

export function makeButtonDebounceAssumption(data: {
  assumptionId: string;
  debounceWindowMs: number;
}): ButtonDebounceAssumption {
  return {
    assumptionId: data.assumptionId as ButtonDebounceAssumptionId,
    debounceWindowMs: data.debounceWindowMs,
  };
}

export function makeThresholdBoundsAssumption(data: {
  assumptionId: string;
  plausibleMin: number;
  plausibleMax: number;
}): ThresholdBoundsAssumption {
  return {
    assumptionId: data.assumptionId as ThresholdBoundsAssumptionId,
    plausibleMin: data.plausibleMin,
    plausibleMax: data.plausibleMax,
  };
}

export function makeIec62304Clearance(data: {
  clearanceId: string;
  softwareVersion: string;
  safetyClassification: string;
  riskAssessmentDocRef: string;
}): Iec62304Clearance {
  return {
    clearanceId: data.clearanceId as Iec62304ClearanceId,
    softwareVersion: data.softwareVersion,
    safetyClassification: data.safetyClassification,
    riskAssessmentDocRef: data.riskAssessmentDocRef,
  };
}

export function makeIec60601Clearance(data: {
  clearanceId: string;
  alarmPriorityLevels: string;
  alarmSignalType: string;
  alarmDelayMaxMs: number;
}): Iec60601Clearance {
  return {
    clearanceId: data.clearanceId as Iec60601ClearanceId,
    alarmPriorityLevels: data.alarmPriorityLevels,
    alarmSignalType: data.alarmSignalType,
    alarmDelayMaxMs: data.alarmDelayMaxMs,
  };
}

export function makeIso13485Clearance(data: {
  clearanceId: string;
  qualitySystemRef: string;
  auditCycleMonths: number;
}): Iso13485Clearance {
  return {
    clearanceId: data.clearanceId as Iso13485ClearanceId,
    qualitySystemRef: data.qualitySystemRef,
    auditCycleMonths: data.auditCycleMonths,
  };
}

export function makeFdaClearance(data: {
  clearanceId: string;
  fda510kNumber: string;
  indicationsForUse: string;
  clearanceDate: string;
}): FdaClearance {
  return {
    clearanceId: data.clearanceId as FdaClearanceId,
    fda510kNumber: data.fda510kNumber,
    indicationsForUse: data.indicationsForUse,
    clearanceDate: data.clearanceDate,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for EcgSensor. Returns empty array when valid. */
export function validateEcgSensor(instance: EcgSensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[EcgSensor] invariant violated: self.sensorId <> null");
  }
  if (!((instance.lastReadingTimestamp >= 0))) {
    violations.push("[EcgSensor] invariant violated: self.lastReadingTimestamp >= 0.0");
  }
  if (!((instance.signalStrength >= 0))) {
    violations.push("[EcgSensor] invariant violated: self.signalStrength >= 0.0");
  }
  if (!((instance.signalStrength <= 1))) {
    violations.push("[EcgSensor] invariant violated: self.signalStrength <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for PlausibilityChecker. Returns empty array when valid. */
export function validatePlausibilityChecker(instance: PlausibilityChecker): readonly string[] {
  const violations: string[] = [];
  if (!((instance.checkerId !== null))) {
    violations.push("[PlausibilityChecker] invariant violated: self.checkerId <> null");
  }
  if (!((instance.plausibleMin === 20))) {
    violations.push("[PlausibilityChecker] invariant violated: self.plausibleMin = 20.0");
  }
  if (!((instance.plausibleMax === 250))) {
    violations.push("[PlausibilityChecker] invariant violated: self.plausibleMax = 250.0");
  }
  if (!((instance.rejectionCounter >= 0))) {
    violations.push("[PlausibilityChecker] invariant violated: self.rejectionCounter >= 0");
  }
  return violations;
}

/** Runtime invariant check for Display. Returns empty array when valid. */
export function validateDisplay(instance: Display): readonly string[] {
  const violations: string[] = [];
  if (!((instance.displayId !== null))) {
    violations.push("[Display] invariant violated: self.displayId <> null");
  }
  return violations;
}

/** Runtime invariant check for ThresholdComparator. Returns empty array when valid. */
export function validateThresholdComparator(instance: ThresholdComparator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.comparatorId !== null))) {
    violations.push("[ThresholdComparator] invariant violated: self.comparatorId <> null");
  }
  if (!((instance.highThreshold > instance.lowThreshold))) {
    violations.push("[ThresholdComparator] invariant violated: self.highThreshold > self.lowThreshold");
  }
  if (!((instance.lowThreshold >= 20))) {
    violations.push("[ThresholdComparator] invariant violated: self.lowThreshold >= 20.0");
  }
  if (!((instance.highThreshold <= 250))) {
    violations.push("[ThresholdComparator] invariant violated: self.highThreshold <= 250.0");
  }
  return violations;
}

/** Runtime invariant check for AlarmManager. Returns empty array when valid. */
export function validateAlarmManager(instance: AlarmManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmManagerId !== null))) {
    violations.push("[AlarmManager] invariant violated: self.alarmManagerId <> null");
  }
  if (!((instance.autoRearmSeconds === 120))) {
    violations.push("[AlarmManager] invariant violated: self.autoRearmSeconds = 120.0");
  }
  if (!((instance.alarmLatencyBudgetSeconds <= 2))) {
    violations.push("[AlarmManager] invariant violated: self.alarmLatencyBudgetSeconds <= 2.0");
  }
  if (!((instance.alarmRaisedAt >= 0))) {
    violations.push("[AlarmManager] invariant violated: self.alarmRaisedAt >= 0.0");
  }
  if (!((instance.silenceStartedAt >= 0))) {
    violations.push("[AlarmManager] invariant violated: self.silenceStartedAt >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for SensorDisconnectMonitor. Returns empty array when valid. */
export function validateSensorDisconnectMonitor(instance: SensorDisconnectMonitor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.monitorId !== null))) {
    violations.push("[SensorDisconnectMonitor] invariant violated: self.monitorId <> null");
  }
  if (!((instance.disconnectThresholdSeconds === 5))) {
    violations.push("[SensorDisconnectMonitor] invariant violated: self.disconnectThresholdSeconds = 5.0");
  }
  if (!((instance.lastSignalTimestamp >= 0))) {
    violations.push("[SensorDisconnectMonitor] invariant violated: self.lastSignalTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for Clock. Returns empty array when valid. */
export function validateClock(instance: Clock): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clockId !== null))) {
    violations.push("[Clock] invariant violated: self.clockId <> null");
  }
  if (!((instance.currentTime >= 0))) {
    violations.push("[Clock] invariant violated: self.currentTime >= 0.0");
  }
  if (!((instance.tickIntervalMs >= 1))) {
    violations.push("[Clock] invariant violated: self.tickIntervalMs >= 1.0");
  }
  if (!((instance.tickIntervalMs <= 1000))) {
    violations.push("[Clock] invariant violated: self.tickIntervalMs <= 1000.0");
  }
  return violations;
}

/** Runtime invariant check for AudibleAlert. Returns empty array when valid. */
export function validateAudibleAlert(instance: AudibleAlert): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alertId !== null))) {
    violations.push("[AudibleAlert] invariant violated: self.alertId <> null");
  }
  if (!(((instance.alertType === "threshold") || (instance.alertType === "disconnect")))) {
    violations.push("[AudibleAlert] invariant violated: self.alertType = 'threshold' or self.alertType = 'disconnect'");
  }
  return violations;
}

/** Runtime invariant check for SensorToPlausibilityChannel. Returns empty array when valid. */
export function validateSensorToPlausibilityChannel(instance: SensorToPlausibilityChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[SensorToPlausibilityChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastTransferTimestamp >= 0))) {
    violations.push("[SensorToPlausibilityChannel] invariant violated: self.lastTransferTimestamp >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for PlausibilityToDisplayChannel. Returns empty array when valid. */
export function validatePlausibilityToDisplayChannel(instance: PlausibilityToDisplayChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[PlausibilityToDisplayChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for PlausibilityToThresholdChannel. Returns empty array when valid. */
export function validatePlausibilityToThresholdChannel(instance: PlausibilityToThresholdChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[PlausibilityToThresholdChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for ThresholdToAlarmChannel. Returns empty array when valid. */
export function validateThresholdToAlarmChannel(instance: ThresholdToAlarmChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[ThresholdToAlarmChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for DisconnectToAlarmChannel. Returns empty array when valid. */
export function validateDisconnectToAlarmChannel(instance: DisconnectToAlarmChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[DisconnectToAlarmChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for AlarmToAudibleChannel. Returns empty array when valid. */
export function validateAlarmToAudibleChannel(instance: AlarmToAudibleChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[AlarmToAudibleChannel] invariant violated: self.channelId <> null");
  }
  return violations;
}

/** Runtime invariant check for VitalSignDataFlow. Returns empty array when valid. */
export function validateVitalSignDataFlow(instance: VitalSignDataFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[VitalSignDataFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.stepSequence === "SENSOR_READS -> PLAUSIBILITY_CHECK -> DISPLAY_PLAUSIBLE -> THRESHOLD_COMPARISON -> ALARM_CHECK -> ALARM_SOUND -> CLOCK_TICK -> AUTO_REARM_CHECK -> SENSOR_DISCONNECT_CHECK"))) {
    violations.push("[VitalSignDataFlow] invariant violated: self.stepSequence = 'SENSOR_READS -> PLAUSIBILITY_CHECK -> DISPLAY_PLAUSIBLE -> THRESHOLD_COMPARISON -> ALARM_CHECK -> ALARM_SOUND -> CLOCK_TICK -> AUTO_REARM_CHECK -> SENSOR_DISCONNECT_CHECK'");
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

/** Runtime invariant check for HospitalAdministration. Returns empty array when valid. */
export function validateHospitalAdministration(instance: HospitalAdministration): readonly string[] {
  const violations: string[] = [];
  if (!((instance.adminId !== null))) {
    violations.push("[HospitalAdministration] invariant violated: self.adminId <> null");
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

/** Runtime invariant check for VitalSignMonitoringFlow. Returns empty array when valid. */
export function validateVitalSignMonitoringFlow(instance: VitalSignMonitoringFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[VitalSignMonitoringFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[VitalSignMonitoringFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.stepSequence === "SENSOR_READING_DELIVERED -> PLAUSIBILITY_CHECK -> DISPLAY_OR_REJECT -> THRESHOLD_COMPARISON -> ALARM_RAISE -> CLINICIAN_ACKNOWLEDGE -> POTENTIAL_SENSOR_DISCONNECT"))) {
    violations.push("[VitalSignMonitoringFlow] invariant violated: self.stepSequence = 'SENSOR_READING_DELIVERED -> PLAUSIBILITY_CHECK -> DISPLAY_OR_REJECT -> THRESHOLD_COMPARISON -> ALARM_RAISE -> CLINICIAN_ACKNOWLEDGE -> POTENTIAL_SENSOR_DISCONNECT'");
  }
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
  if (!((instance.isImplausible === ((instance.valueBpm < 20) || (instance.valueBpm > 250))))) {
    violations.push("[HeartRateReading] invariant violated: self.isImplausible = (self.valueBpm < 20.0 or self.valueBpm > 250.0)");
  }
  return violations;
}

/** Runtime invariant check for AlarmThreshold. Returns empty array when valid. */
export function validateAlarmThreshold(instance: AlarmThreshold): readonly string[] {
  const violations: string[] = [];
  if (!((instance.thresholdId !== null))) {
    violations.push("[AlarmThreshold] invariant violated: self.thresholdId <> null");
  }
  if (!((instance.lowBound >= 0))) {
    violations.push("[AlarmThreshold] invariant violated: self.lowBound >= 0.0");
  }
  if (!((instance.highBound > instance.lowBound))) {
    violations.push("[AlarmThreshold] invariant violated: self.highBound > self.lowBound");
  }
  return violations;
}

/** Runtime invariant check for AlarmEvent. Returns empty array when valid. */
export function validateAlarmEvent(instance: AlarmEvent): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmId !== null))) {
    violations.push("[AlarmEvent] invariant violated: self.alarmId <> null");
  }
  if (!((instance.raisedAt >= 0))) {
    violations.push("[AlarmEvent] invariant violated: self.raisedAt >= 0.0");
  }
  if (!((!(!(instance.isSilenced)) || (instance.autoRearmAt === 0)))) {
    violations.push("[AlarmEvent] invariant violated: not self.isSilenced implies self.autoRearmAt = 0.0");
  }
  return violations;
}

/** Runtime invariant check for SensorStatus. Returns empty array when valid. */
export function validateSensorStatus(instance: SensorStatus): readonly string[] {
  const violations: string[] = [];
  if (!((instance.statusId !== null))) {
    violations.push("[SensorStatus] invariant violated: self.statusId <> null");
  }
  if (!((instance.lastSignalAt >= 0))) {
    violations.push("[SensorStatus] invariant violated: self.lastSignalAt >= 0.0");
  }
  if (!((instance.isConnected === (instance.disconnectAlarmRaised === false)))) {
    violations.push("[SensorStatus] invariant violated: self.isConnected = (self.disconnectAlarmRaised = false)");
  }
  return violations;
}

/** Runtime invariant check for RejectionCounter. Returns empty array when valid. */
export function validateRejectionCounter(instance: RejectionCounter): readonly string[] {
  const violations: string[] = [];
  if (!((instance.counterId !== null))) {
    violations.push("[RejectionCounter] invariant violated: self.counterId <> null");
  }
  if (!((instance.count >= 0))) {
    violations.push("[RejectionCounter] invariant violated: self.count >= 0");
  }
  return violations;
}

/** Runtime invariant check for RejectImplausibleConstraints. Returns empty array when valid. */
export function validateRejectImplausibleConstraints(instance: RejectImplausibleConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[RejectImplausibleConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for AlarmLatencyConstraints. Returns empty array when valid. */
export function validateAlarmLatencyConstraints(instance: AlarmLatencyConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[AlarmLatencyConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for SensorDisconnectConstraints. Returns empty array when valid. */
export function validateSensorDisconnectConstraints(instance: SensorDisconnectConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[SensorDisconnectConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for SilenceAutoRearmConstraints. Returns empty array when valid. */
export function validateSilenceAutoRearmConstraints(instance: SilenceAutoRearmConstraints): readonly string[] {
  const violations: string[] = [];
  if (!(true)) {
    violations.push("[SilenceAutoRearmConstraints] invariant violated: true");
  }
  return violations;
}

/** Runtime invariant check for VitalSignMonitorSystem. Returns empty array when valid. */
export function validateVitalSignMonitorSystem(instance: VitalSignMonitorSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.deviceSerialNumber !== null))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.deviceSerialNumber <> null");
  }
  if (!((instance.plausibleMin === 20))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.plausibleMin = 20.0");
  }
  if (!((instance.plausibleMax === 250))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.plausibleMax = 250.0");
  }
  if (!((instance.rejectionCounter >= 0))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.rejectionCounter >= 0");
  }
  if (!((instance.highAlarmThreshold > instance.lowAlarmThreshold))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.highAlarmThreshold > self.lowAlarmThreshold");
  }
  if (!((instance.highAlarmThreshold <= instance.plausibleMax))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.highAlarmThreshold <= self.plausibleMax");
  }
  if (!((instance.lowAlarmThreshold >= instance.plausibleMin))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.lowAlarmThreshold >= self.plausibleMin");
  }
  if (!((instance.alarmLatencyBudgetSeconds <= 2))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.alarmLatencyBudgetSeconds <= 2.0");
  }
  if (!((instance.disconnectThresholdSeconds === 5))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.disconnectThresholdSeconds = 5.0");
  }
  if (!((instance.autoRearmSeconds === 120))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.autoRearmSeconds = 120.0");
  }
  if (!((instance.lastSignalAt >= 0))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: self.lastSignalAt >= 0.0");
  }
  if (!((!((instance.alarmSilenced && (instance.silenceStartedAt > 0))) || (instance.alarmSilenced === true)))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: (self.alarmSilenced and self.silenceStartedAt > 0.0) implies\n      (self.alarmSilenced = true)");
  }
  if (!((!(!(instance.alarmSilenced)) || (instance.silenceStartedAt === 0)))) {
    violations.push("[VitalSignMonitorSystem] invariant violated: not self.alarmSilenced implies self.silenceStartedAt = 0.0");
  }
  return violations;
}

/** Runtime invariant check for Iec62304ClassC. Returns empty array when valid. */
export function validateIec62304ClassC(instance: Iec62304ClassC): readonly string[] {
  const violations: string[] = [];
  if (!((instance.softwareVersion !== null))) {
    violations.push("[Iec62304ClassC] invariant violated: self.softwareVersion <> null");
  }
  if (!((instance.safetyClassification === "Class C"))) {
    violations.push("[Iec62304ClassC] invariant violated: self.safetyClassification = 'Class C'");
  }
  if (!((instance.riskAssessmentDocRef !== null))) {
    violations.push("[Iec62304ClassC] invariant violated: self.riskAssessmentDocRef <> null");
  }
  return violations;
}

/** Runtime invariant check for Iec60601_1_8Compliant. Returns empty array when valid. */
export function validateIec60601_1_8Compliant(instance: Iec60601_1_8Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmPriorityLevels !== null))) {
    violations.push("[Iec60601_1_8Compliant] invariant violated: self.alarmPriorityLevels <> null");
  }
  if (!((instance.alarmDelayMaxMs > 0))) {
    violations.push("[Iec60601_1_8Compliant] invariant violated: self.alarmDelayMaxMs > 0.0");
  }
  if (!((instance.alarmDelayMaxMs <= 2000))) {
    violations.push("[Iec60601_1_8Compliant] invariant violated: self.alarmDelayMaxMs <= 2000.0");
  }
  return violations;
}

/** Runtime invariant check for Iso13485Compliant. Returns empty array when valid. */
export function validateIso13485Compliant(instance: Iso13485Compliant): readonly string[] {
  const violations: string[] = [];
  if (!((instance.qualitySystemRef !== null))) {
    violations.push("[Iso13485Compliant] invariant violated: self.qualitySystemRef <> null");
  }
  if (!((instance.auditCycleMonths >= 12))) {
    violations.push("[Iso13485Compliant] invariant violated: self.auditCycleMonths >= 12");
  }
  return violations;
}

/** Runtime invariant check for FdaCleared. Returns empty array when valid. */
export function validateFdaCleared(instance: FdaCleared): readonly string[] {
  const violations: string[] = [];
  if (!((instance.fda510kNumber !== null))) {
    violations.push("[FdaCleared] invariant violated: self.fda510kNumber <> null");
  }
  if (!((instance.indicationsForUse !== null))) {
    violations.push("[FdaCleared] invariant violated: self.indicationsForUse <> null");
  }
  return violations;
}

/** Runtime invariant check for PhysicallyPlausibleHeartRate. Returns empty array when valid. */
export function validatePhysicallyPlausibleHeartRate(instance: PhysicallyPlausibleHeartRate): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.plausibleMin >= 20.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.plausibleMax <= 250.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.plausibleMax > bearer.plausibleMin — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.isDisplaying implies
      (bearer.displayValue >= bearer.plausibleMin and
       bearer.displayValue <= bearer.plausibleMax) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for AlarmTimingConstraint. Returns empty array when valid. */
export function validateAlarmTimingConstraint(instance: AlarmTimingConstraint): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.alarmLatencyBudgetSeconds <= 2.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.alarmLatencyBudgetSeconds >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorDisconnectTiming. Returns empty array when valid. */
export function validateSensorDisconnectTiming(instance: SensorDisconnectTiming): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.disconnectThresholdSeconds = 5.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.disconnectThresholdSeconds > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): (bearer.sensorConnected = false) implies bearer.disconnectAlarmRaised — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.disconnectAlarmRaised implies
      ((bearer.alarmRaisedAt - bearer.lastSignalAt) > bearer.disconnectThresholdSeconds) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SilenceAutoRearmRule. Returns empty array when valid. */
export function validateSilenceAutoRearmRule(instance: SilenceAutoRearmRule): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.autoRearmSeconds = 120.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.autoRearmSeconds > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): (bearer.alarmSilenced and bearer.silenceStartedAt > 0.0) implies
      (bearer.silenceStartedAt + bearer.autoRearmSeconds > 0.0) — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for SensorDeliveryRateAssumption. Returns empty array when valid. */
export function validateSensorDeliveryRateAssumption(instance: SensorDeliveryRateAssumption): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[SensorDeliveryRateAssumption] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.sourceSensorType === "ecg"))) {
    violations.push("[SensorDeliveryRateAssumption] invariant violated: self.sourceSensorType = 'ecg'");
  }
  if (!((instance.minDeliveryHz >= 1))) {
    violations.push("[SensorDeliveryRateAssumption] invariant violated: self.minDeliveryHz >= 1.0");
  }
  if (!((instance.maxInterarrivalSeconds > 0))) {
    violations.push("[SensorDeliveryRateAssumption] invariant violated: self.maxInterarrivalSeconds > 0.0");
  }
  if (!((instance.maxInterarrivalSeconds <= 1))) {
    violations.push("[SensorDeliveryRateAssumption] invariant violated: self.maxInterarrivalSeconds <= 1.0");
  }
  return violations;
}

/** Runtime invariant check for ClockMonotonicityAssumption. Returns empty array when valid. */
export function validateClockMonotonicityAssumption(instance: ClockMonotonicityAssumption): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[ClockMonotonicityAssumption] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.maxTickSkewMs <= 1))) {
    violations.push("[ClockMonotonicityAssumption] invariant violated: self.maxTickSkewMs <= 1.0");
  }
  if (!((instance.maxTickSkewMs >= 0))) {
    violations.push("[ClockMonotonicityAssumption] invariant violated: self.maxTickSkewMs >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for ButtonDebounceAssumption. Returns empty array when valid. */
export function validateButtonDebounceAssumption(instance: ButtonDebounceAssumption): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[ButtonDebounceAssumption] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.debounceWindowMs >= 50))) {
    violations.push("[ButtonDebounceAssumption] invariant violated: self.debounceWindowMs >= 50.0");
  }
  if (!((instance.debounceWindowMs <= 100))) {
    violations.push("[ButtonDebounceAssumption] invariant violated: self.debounceWindowMs <= 100.0");
  }
  return violations;
}

/** Runtime invariant check for ThresholdBoundsAssumption. Returns empty array when valid. */
export function validateThresholdBoundsAssumption(instance: ThresholdBoundsAssumption): readonly string[] {
  const violations: string[] = [];
  if (!((instance.assumptionId !== null))) {
    violations.push("[ThresholdBoundsAssumption] invariant violated: self.assumptionId <> null");
  }
  if (!((instance.plausibleMin === 20))) {
    violations.push("[ThresholdBoundsAssumption] invariant violated: self.plausibleMin = 20.0");
  }
  if (!((instance.plausibleMax === 250))) {
    violations.push("[ThresholdBoundsAssumption] invariant violated: self.plausibleMax = 250.0");
  }
  return violations;
}

/** Runtime invariant check for Iec62304Clearance. Returns empty array when valid. */
export function validateIec62304Clearance(instance: Iec62304Clearance): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clearanceId !== null))) {
    violations.push("[Iec62304Clearance] invariant violated: self.clearanceId <> null");
  }
  if (!((instance.softwareVersion !== null))) {
    violations.push("[Iec62304Clearance] invariant violated: self.softwareVersion <> null");
  }
  if (!((instance.safetyClassification === "Class C"))) {
    violations.push("[Iec62304Clearance] invariant violated: self.safetyClassification = 'Class C'");
  }
  if (!((instance.riskAssessmentDocRef !== null))) {
    violations.push("[Iec62304Clearance] invariant violated: self.riskAssessmentDocRef <> null");
  }
  return violations;
}

/** Runtime invariant check for Iec60601Clearance. Returns empty array when valid. */
export function validateIec60601Clearance(instance: Iec60601Clearance): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clearanceId !== null))) {
    violations.push("[Iec60601Clearance] invariant violated: self.clearanceId <> null");
  }
  if (!((instance.alarmPriorityLevels !== null))) {
    violations.push("[Iec60601Clearance] invariant violated: self.alarmPriorityLevels <> null");
  }
  if (!((instance.alarmSignalType === "AUDIBLE + VISUAL"))) {
    violations.push("[Iec60601Clearance] invariant violated: self.alarmSignalType = 'AUDIBLE + VISUAL'");
  }
  if (!((instance.alarmDelayMaxMs > 0))) {
    violations.push("[Iec60601Clearance] invariant violated: self.alarmDelayMaxMs > 0.0");
  }
  if (!((instance.alarmDelayMaxMs <= 2000))) {
    violations.push("[Iec60601Clearance] invariant violated: self.alarmDelayMaxMs <= 2000.0");
  }
  return violations;
}

/** Runtime invariant check for Iso13485Clearance. Returns empty array when valid. */
export function validateIso13485Clearance(instance: Iso13485Clearance): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clearanceId !== null))) {
    violations.push("[Iso13485Clearance] invariant violated: self.clearanceId <> null");
  }
  if (!((instance.qualitySystemRef !== null))) {
    violations.push("[Iso13485Clearance] invariant violated: self.qualitySystemRef <> null");
  }
  if (!((instance.auditCycleMonths >= 12))) {
    violations.push("[Iso13485Clearance] invariant violated: self.auditCycleMonths >= 12");
  }
  return violations;
}

/** Runtime invariant check for FdaClearance. Returns empty array when valid. */
export function validateFdaClearance(instance: FdaClearance): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clearanceId !== null))) {
    violations.push("[FdaClearance] invariant violated: self.clearanceId <> null");
  }
  if (!((instance.fda510kNumber !== null))) {
    violations.push("[FdaClearance] invariant violated: self.fda510kNumber <> null");
  }
  if (!((instance.indicationsForUse !== null))) {
    violations.push("[FdaClearance] invariant violated: self.indicationsForUse <> null");
  }
  return violations;
}

/** Runtime invariant check for VitalSignMonitorSystemFormalized. Returns empty array when valid. */
export function validateVitalSignMonitorSystemFormalized(instance: VitalSignMonitorSystemFormalized): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorDeliveryAssumption !== null))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.sensorDeliveryAssumption <> null");
  }
  if (!((instance.clockMonotonicityAssumption !== null))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.clockMonotonicityAssumption <> null");
  }
  if (!((instance.buttonDebounceAssumption !== null))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.buttonDebounceAssumption <> null");
  }
  if (!((instance.thresholdBoundsAssumption !== null))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.thresholdBoundsAssumption <> null");
  }
  if (!((instance.iec62304Clearance !== null))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.iec62304Clearance <> null");
  }
  if (!((instance.iec60601Clearance !== null))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.iec60601Clearance <> null");
  }
  if (!((instance.iso13485Clearance !== null))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.iso13485Clearance <> null");
  }
  if (!((instance.fdaClearance !== null))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.fdaClearance <> null");
  }
  if (!((instance.plausibleMin === 20))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.plausibleMin = 20.0");
  }
  if (!((instance.plausibleMax === 250))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.plausibleMax = 250.0");
  }
  if (!((instance.disconnectThresholdSeconds === 5))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.disconnectThresholdSeconds = 5.0");
  }
  if (!((instance.autoRearmSeconds === 120))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.autoRearmSeconds = 120.0");
  }
  if (!((instance.alarmLatencyBudgetSeconds <= 2))) {
    violations.push("[VitalSignMonitorSystemFormalized] invariant violated: self.alarmLatencyBudgetSeconds <= 2.0");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for EcgSensor.deliverRawReading. User supplies this. */
export type EcgSensorDeliverRawReadingImpl = (self: EcgSensor, heartRate: number, timestamp: number) => { self: EcgSensor; modified: { lastRawReading: unknown; lastReadingTimestamp: unknown; isConnected: unknown; signalStrength: unknown } };

/** Contract-checking wrapper for EcgSensor.deliverRawReading. */
export function wrapEcgSensorDeliverRawReading(impl: EcgSensorDeliverRawReadingImpl): (self: EcgSensor, heartRate: number, timestamp: number) => EcgSensor {
  return (self, heartRate, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.deliverRawReading] pre violated: timestamp >= 0.0");
    }
    if (!((heartRate >= 0))) {
      preViolations.push("[EcgSensor.deliverRawReading] pre violated: heartRate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, heartRate, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastRawReading === heartRate))) {
        postViolations.push("[EcgSensor.deliverRawReading] post violated: self.lastRawReading = heartRate");
      }
      if (!((__result.self.lastReadingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.deliverRawReading] post violated: self.lastReadingTimestamp = timestamp");
      }
      if (!((__result.self.isConnected === true))) {
        postViolations.push("[EcgSensor.deliverRawReading] post violated: self.isConnected = true");
      }
      if (!((__result.self.signalStrength === 1))) {
        postViolations.push("[EcgSensor.deliverRawReading] post violated: self.signalStrength = 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EcgSensor.deliverRawReading (async). User supplies this. */
export type EcgSensorDeliverRawReadingAsyncImpl = (self: EcgSensor, heartRate: number, timestamp: number) => Promise<{ self: EcgSensor; modified: { lastRawReading: unknown; lastReadingTimestamp: unknown; isConnected: unknown; signalStrength: unknown } }>;

/** Contract-checking wrapper for EcgSensor.deliverRawReading (async). */
export function wrapEcgSensorDeliverRawReadingAsync(impl: EcgSensorDeliverRawReadingAsyncImpl): (self: EcgSensor, heartRate: number, timestamp: number) => Promise<EcgSensor> {
  return async (self, heartRate, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.deliverRawReading] pre violated: timestamp >= 0.0");
    }
    if (!((heartRate >= 0))) {
      preViolations.push("[EcgSensor.deliverRawReading] pre violated: heartRate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, heartRate, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastRawReading === heartRate))) {
        postViolations.push("[EcgSensor.deliverRawReading] post violated: self.lastRawReading = heartRate");
      }
      if (!((__result.self.lastReadingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.deliverRawReading] post violated: self.lastReadingTimestamp = timestamp");
      }
      if (!((__result.self.isConnected === true))) {
        postViolations.push("[EcgSensor.deliverRawReading] post violated: self.isConnected = true");
      }
      if (!((__result.self.signalStrength === 1))) {
        postViolations.push("[EcgSensor.deliverRawReading] post violated: self.signalStrength = 1.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EcgSensor.signalLost. User supplies this. */
export type EcgSensorSignalLostImpl = (self: EcgSensor, timestamp: number) => { self: EcgSensor; modified: { isConnected: unknown; signalStrength: unknown; lastReadingTimestamp: unknown } };

/** Contract-checking wrapper for EcgSensor.signalLost. */
export function wrapEcgSensorSignalLost(impl: EcgSensorSignalLostImpl): (self: EcgSensor, timestamp: number) => EcgSensor {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.isConnected)) {
      preViolations.push("[EcgSensor.signalLost] pre violated: self.isConnected");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.signalLost] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.isConnected === false))) {
        postViolations.push("[EcgSensor.signalLost] post violated: self.isConnected = false");
      }
      if (!((__result.self.signalStrength === 0))) {
        postViolations.push("[EcgSensor.signalLost] post violated: self.signalStrength = 0.0");
      }
      if (!((__result.self.lastReadingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.signalLost] post violated: self.lastReadingTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EcgSensor.signalLost (async). User supplies this. */
export type EcgSensorSignalLostAsyncImpl = (self: EcgSensor, timestamp: number) => Promise<{ self: EcgSensor; modified: { isConnected: unknown; signalStrength: unknown; lastReadingTimestamp: unknown } }>;

/** Contract-checking wrapper for EcgSensor.signalLost (async). */
export function wrapEcgSensorSignalLostAsync(impl: EcgSensorSignalLostAsyncImpl): (self: EcgSensor, timestamp: number) => Promise<EcgSensor> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.isConnected)) {
      preViolations.push("[EcgSensor.signalLost] pre violated: self.isConnected");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.signalLost] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.isConnected === false))) {
        postViolations.push("[EcgSensor.signalLost] post violated: self.isConnected = false");
      }
      if (!((__result.self.signalStrength === 0))) {
        postViolations.push("[EcgSensor.signalLost] post violated: self.signalStrength = 0.0");
      }
      if (!((__result.self.lastReadingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.signalLost] post violated: self.lastReadingTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EcgSensor.signalRestored. User supplies this. */
export type EcgSensorSignalRestoredImpl = (self: EcgSensor, timestamp: number) => { self: EcgSensor; modified: { isConnected: unknown; signalStrength: unknown; lastReadingTimestamp: unknown } };

/** Contract-checking wrapper for EcgSensor.signalRestored. */
export function wrapEcgSensorSignalRestored(impl: EcgSensorSignalRestoredImpl): (self: EcgSensor, timestamp: number) => EcgSensor {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.isConnected))) {
      preViolations.push("[EcgSensor.signalRestored] pre violated: not self.isConnected");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.signalRestored] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.isConnected === true))) {
        postViolations.push("[EcgSensor.signalRestored] post violated: self.isConnected = true");
      }
      if (!((__result.self.signalStrength === 1))) {
        postViolations.push("[EcgSensor.signalRestored] post violated: self.signalStrength = 1.0");
      }
      if (!((__result.self.lastReadingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.signalRestored] post violated: self.lastReadingTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for EcgSensor.signalRestored (async). User supplies this. */
export type EcgSensorSignalRestoredAsyncImpl = (self: EcgSensor, timestamp: number) => Promise<{ self: EcgSensor; modified: { isConnected: unknown; signalStrength: unknown; lastReadingTimestamp: unknown } }>;

/** Contract-checking wrapper for EcgSensor.signalRestored (async). */
export function wrapEcgSensorSignalRestoredAsync(impl: EcgSensorSignalRestoredAsyncImpl): (self: EcgSensor, timestamp: number) => Promise<EcgSensor> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.isConnected))) {
      preViolations.push("[EcgSensor.signalRestored] pre violated: not self.isConnected");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[EcgSensor.signalRestored] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.isConnected === true))) {
        postViolations.push("[EcgSensor.signalRestored] post violated: self.isConnected = true");
      }
      if (!((__result.self.signalStrength === 1))) {
        postViolations.push("[EcgSensor.signalRestored] post violated: self.signalStrength = 1.0");
      }
      if (!((__result.self.lastReadingTimestamp === timestamp))) {
        postViolations.push("[EcgSensor.signalRestored] post violated: self.lastReadingTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PlausibilityChecker.checkPlausibility. User supplies this. */
export type PlausibilityCheckerCheckPlausibilityImpl = (self: PlausibilityChecker, value: number) => { self: PlausibilityChecker; modified: { rejectionCounter: unknown } };

/** Contract-checking wrapper for PlausibilityChecker.checkPlausibility. */
export function wrapPlausibilityCheckerCheckPlausibility(impl: PlausibilityCheckerCheckPlausibilityImpl): (self: PlausibilityChecker, value: number) => PlausibilityChecker {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[PlausibilityChecker.checkPlausibility] pre violated: value >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCounter": self.rejectionCounter,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (value >= self.plausibleMin and value <= self.plausibleMax) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if not result then
            self.rejectionCounter = self.rejectionCounter@pre + 1
          else
            self.rejectionCounter = self.rejectionCounter@pre
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

/** Impl signature for PlausibilityChecker.checkPlausibility (async). User supplies this. */
export type PlausibilityCheckerCheckPlausibilityAsyncImpl = (self: PlausibilityChecker, value: number) => Promise<{ self: PlausibilityChecker; modified: { rejectionCounter: unknown } }>;

/** Contract-checking wrapper for PlausibilityChecker.checkPlausibility (async). */
export function wrapPlausibilityCheckerCheckPlausibilityAsync(impl: PlausibilityCheckerCheckPlausibilityAsyncImpl): (self: PlausibilityChecker, value: number) => Promise<PlausibilityChecker> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[PlausibilityChecker.checkPlausibility] pre violated: value >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCounter": self.rejectionCounter,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = (value >= self.plausibleMin and value <= self.plausibleMax) — unbound variable 'result'
      // SKIPPED post-clause (not translatable): if not result then
            self.rejectionCounter = self.rejectionCounter@pre + 1
          else
            self.rejectionCounter = self.rejectionCounter@pre
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

/** Impl signature for Display.showValue. User supplies this. */
export type DisplayShowValueImpl = (self: Display, value: number) => { self: Display; modified: { displayValue: unknown; isDisplaying: unknown; screenActive: unknown } };

/** Contract-checking wrapper for Display.showValue. */
export function wrapDisplayShowValue(impl: DisplayShowValueImpl): (self: Display, value: number) => Display {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[Display.showValue] pre violated: value >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.displayValue === value))) {
        postViolations.push("[Display.showValue] post violated: self.displayValue = value");
      }
      if (!((__result.self.isDisplaying === true))) {
        postViolations.push("[Display.showValue] post violated: self.isDisplaying = true");
      }
      if (!((__result.self.screenActive === true))) {
        postViolations.push("[Display.showValue] post violated: self.screenActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Display.showValue (async). User supplies this. */
export type DisplayShowValueAsyncImpl = (self: Display, value: number) => Promise<{ self: Display; modified: { displayValue: unknown; isDisplaying: unknown; screenActive: unknown } }>;

/** Contract-checking wrapper for Display.showValue (async). */
export function wrapDisplayShowValueAsync(impl: DisplayShowValueAsyncImpl): (self: Display, value: number) => Promise<Display> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[Display.showValue] pre violated: value >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.displayValue === value))) {
        postViolations.push("[Display.showValue] post violated: self.displayValue = value");
      }
      if (!((__result.self.isDisplaying === true))) {
        postViolations.push("[Display.showValue] post violated: self.isDisplaying = true");
      }
      if (!((__result.self.screenActive === true))) {
        postViolations.push("[Display.showValue] post violated: self.screenActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Display.clearDisplay. User supplies this. */
export type DisplayClearDisplayImpl = (self: Display) => { self: Display; modified: { isDisplaying: unknown; displayValue: unknown; screenActive: unknown } };

/** Contract-checking wrapper for Display.clearDisplay. */
export function wrapDisplayClearDisplay(impl: DisplayClearDisplayImpl): (self: Display) => Display {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isDisplaying)) {
      preViolations.push("[Display.clearDisplay] pre violated: self.isDisplaying");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDisplaying === false))) {
        postViolations.push("[Display.clearDisplay] post violated: self.isDisplaying = false");
      }
      if (!((__result.self.displayValue === 0))) {
        postViolations.push("[Display.clearDisplay] post violated: self.displayValue = 0.0");
      }
      if (!((__result.self.screenActive === false))) {
        postViolations.push("[Display.clearDisplay] post violated: self.screenActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Display.clearDisplay (async). User supplies this. */
export type DisplayClearDisplayAsyncImpl = (self: Display) => Promise<{ self: Display; modified: { isDisplaying: unknown; displayValue: unknown; screenActive: unknown } }>;

/** Contract-checking wrapper for Display.clearDisplay (async). */
export function wrapDisplayClearDisplayAsync(impl: DisplayClearDisplayAsyncImpl): (self: Display) => Promise<Display> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isDisplaying)) {
      preViolations.push("[Display.clearDisplay] pre violated: self.isDisplaying");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isDisplaying === false))) {
        postViolations.push("[Display.clearDisplay] post violated: self.isDisplaying = false");
      }
      if (!((__result.self.displayValue === 0))) {
        postViolations.push("[Display.clearDisplay] post violated: self.displayValue = 0.0");
      }
      if (!((__result.self.screenActive === false))) {
        postViolations.push("[Display.clearDisplay] post violated: self.screenActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThresholdComparator.compareValue. User supplies this. */
export type ThresholdComparatorCompareValueImpl = (self: ThresholdComparator, value: number) => { self: ThresholdComparator; modified: { isCrossed: unknown } };

/** Contract-checking wrapper for ThresholdComparator.compareValue. */
export function wrapThresholdComparatorCompareValue(impl: ThresholdComparatorCompareValueImpl): (self: ThresholdComparator, value: number) => ThresholdComparator {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= self.lowThreshold))) {
      preViolations.push("[ThresholdComparator.compareValue] pre violated: value >= self.lowThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.isCrossed === ((value > __result.self.highThreshold) || (value < __result.self.lowThreshold))))) {
        postViolations.push("[ThresholdComparator.compareValue] post violated: self.isCrossed = (value > self.highThreshold or value < self.lowThreshold)");
      }
      // SKIPPED post-clause (not translatable): result = self.isCrossed — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThresholdComparator.compareValue (async). User supplies this. */
export type ThresholdComparatorCompareValueAsyncImpl = (self: ThresholdComparator, value: number) => Promise<{ self: ThresholdComparator; modified: { isCrossed: unknown } }>;

/** Contract-checking wrapper for ThresholdComparator.compareValue (async). */
export function wrapThresholdComparatorCompareValueAsync(impl: ThresholdComparatorCompareValueAsyncImpl): (self: ThresholdComparator, value: number) => Promise<ThresholdComparator> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= self.lowThreshold))) {
      preViolations.push("[ThresholdComparator.compareValue] pre violated: value >= self.lowThreshold");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.isCrossed === ((value > __result.self.highThreshold) || (value < __result.self.lowThreshold))))) {
        postViolations.push("[ThresholdComparator.compareValue] post violated: self.isCrossed = (value > self.highThreshold or value < self.lowThreshold)");
      }
      // SKIPPED post-clause (not translatable): result = self.isCrossed — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThresholdComparator.configureThresholds. User supplies this. */
export type ThresholdComparatorConfigureThresholdsImpl = (self: ThresholdComparator, newLow: number, newHigh: number) => { self: ThresholdComparator; modified: { lowThreshold: unknown; highThreshold: unknown } };

/** Contract-checking wrapper for ThresholdComparator.configureThresholds. */
export function wrapThresholdComparatorConfigureThresholds(impl: ThresholdComparatorConfigureThresholdsImpl): (self: ThresholdComparator, newLow: number, newHigh: number) => ThresholdComparator {
  return (self, newLow, newHigh) => {
    const preViolations: string[] = [];
    if (!((newLow >= 20))) {
      preViolations.push("[ThresholdComparator.configureThresholds] pre violated: newLow >= 20.0");
    }
    if (!((newHigh <= 250))) {
      preViolations.push("[ThresholdComparator.configureThresholds] pre violated: newHigh <= 250.0");
    }
    if (!((newLow < newHigh))) {
      preViolations.push("[ThresholdComparator.configureThresholds] pre violated: newLow < newHigh");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newLow, newHigh);
      const postViolations: string[] = [];
      if (!((__result.self.lowThreshold === newLow))) {
        postViolations.push("[ThresholdComparator.configureThresholds] post violated: self.lowThreshold = newLow");
      }
      if (!((__result.self.highThreshold === newHigh))) {
        postViolations.push("[ThresholdComparator.configureThresholds] post violated: self.highThreshold = newHigh");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ThresholdComparator.configureThresholds (async). User supplies this. */
export type ThresholdComparatorConfigureThresholdsAsyncImpl = (self: ThresholdComparator, newLow: number, newHigh: number) => Promise<{ self: ThresholdComparator; modified: { lowThreshold: unknown; highThreshold: unknown } }>;

/** Contract-checking wrapper for ThresholdComparator.configureThresholds (async). */
export function wrapThresholdComparatorConfigureThresholdsAsync(impl: ThresholdComparatorConfigureThresholdsAsyncImpl): (self: ThresholdComparator, newLow: number, newHigh: number) => Promise<ThresholdComparator> {
  return async (self, newLow, newHigh) => {
    const preViolations: string[] = [];
    if (!((newLow >= 20))) {
      preViolations.push("[ThresholdComparator.configureThresholds] pre violated: newLow >= 20.0");
    }
    if (!((newHigh <= 250))) {
      preViolations.push("[ThresholdComparator.configureThresholds] pre violated: newHigh <= 250.0");
    }
    if (!((newLow < newHigh))) {
      preViolations.push("[ThresholdComparator.configureThresholds] pre violated: newLow < newHigh");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newLow, newHigh);
      const postViolations: string[] = [];
      if (!((__result.self.lowThreshold === newLow))) {
        postViolations.push("[ThresholdComparator.configureThresholds] post violated: self.lowThreshold = newLow");
      }
      if (!((__result.self.highThreshold === newHigh))) {
        postViolations.push("[ThresholdComparator.configureThresholds] post violated: self.highThreshold = newHigh");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManager.raiseAlarm. User supplies this. */
export type AlarmManagerRaiseAlarmImpl = (self: AlarmManager, timestamp: number) => { self: AlarmManager; modified: { alarmRaised: unknown; alarmRaisedAt: unknown } };

/** Contract-checking wrapper for AlarmManager.raiseAlarm. */
export function wrapAlarmManagerRaiseAlarm(impl: AlarmManagerRaiseAlarmImpl): (self: AlarmManager, timestamp: number) => AlarmManager {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.alarmRaised))) {
      preViolations.push("[AlarmManager.raiseAlarm] pre violated: not self.alarmRaised");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[AlarmManager.raiseAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmRaised === true))) {
        postViolations.push("[AlarmManager.raiseAlarm] post violated: self.alarmRaised = true");
      }
      if (!((__result.self.alarmRaisedAt === timestamp))) {
        postViolations.push("[AlarmManager.raiseAlarm] post violated: self.alarmRaisedAt = timestamp");
      }
      if (!(((__result.self.alarmRaisedAt - timestamp) === 0))) {
        postViolations.push("[AlarmManager.raiseAlarm] post violated: (self.alarmRaisedAt - timestamp) = 0.0");
      }
      if (!(((__result.self.alarmRaisedAt - timestamp) <= __result.self.alarmLatencyBudgetSeconds))) {
        postViolations.push("[AlarmManager.raiseAlarm] post violated: (self.alarmRaisedAt - timestamp) <= self.alarmLatencyBudgetSeconds");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManager.raiseAlarm (async). User supplies this. */
export type AlarmManagerRaiseAlarmAsyncImpl = (self: AlarmManager, timestamp: number) => Promise<{ self: AlarmManager; modified: { alarmRaised: unknown; alarmRaisedAt: unknown } }>;

/** Contract-checking wrapper for AlarmManager.raiseAlarm (async). */
export function wrapAlarmManagerRaiseAlarmAsync(impl: AlarmManagerRaiseAlarmAsyncImpl): (self: AlarmManager, timestamp: number) => Promise<AlarmManager> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.alarmRaised))) {
      preViolations.push("[AlarmManager.raiseAlarm] pre violated: not self.alarmRaised");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[AlarmManager.raiseAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmRaised === true))) {
        postViolations.push("[AlarmManager.raiseAlarm] post violated: self.alarmRaised = true");
      }
      if (!((__result.self.alarmRaisedAt === timestamp))) {
        postViolations.push("[AlarmManager.raiseAlarm] post violated: self.alarmRaisedAt = timestamp");
      }
      if (!(((__result.self.alarmRaisedAt - timestamp) === 0))) {
        postViolations.push("[AlarmManager.raiseAlarm] post violated: (self.alarmRaisedAt - timestamp) = 0.0");
      }
      if (!(((__result.self.alarmRaisedAt - timestamp) <= __result.self.alarmLatencyBudgetSeconds))) {
        postViolations.push("[AlarmManager.raiseAlarm] post violated: (self.alarmRaisedAt - timestamp) <= self.alarmLatencyBudgetSeconds");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type AlarmManagerSilenceAlarmImpl = (self: AlarmManager, timestamp: number) => { self: AlarmManager; modified: { alarmSilenced: unknown; silenceStartedAt: unknown } };

/** Contract-checking wrapper for AlarmManager.silenceAlarm. */
export function wrapAlarmManagerSilenceAlarm(impl: AlarmManagerSilenceAlarmImpl): (self: AlarmManager, timestamp: number) => AlarmManager {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.alarmRaised)) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: self.alarmRaised");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: not self.alarmSilenced");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === true))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.silenceStartedAt === timestamp))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.silenceStartedAt = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type AlarmManagerSilenceAlarmAsyncImpl = (self: AlarmManager, timestamp: number) => Promise<{ self: AlarmManager; modified: { alarmSilenced: unknown; silenceStartedAt: unknown } }>;

/** Contract-checking wrapper for AlarmManager.silenceAlarm (async). */
export function wrapAlarmManagerSilenceAlarmAsync(impl: AlarmManagerSilenceAlarmAsyncImpl): (self: AlarmManager, timestamp: number) => Promise<AlarmManager> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.alarmRaised)) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: self.alarmRaised");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: not self.alarmSilenced");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[AlarmManager.silenceAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === true))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.silenceStartedAt === timestamp))) {
        postViolations.push("[AlarmManager.silenceAlarm] post violated: self.silenceStartedAt = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManager.autoRearm. User supplies this. */
export type AlarmManagerAutoRearmImpl = (self: AlarmManager, timestamp: number) => { self: AlarmManager; modified: { alarmSilenced: unknown; silenceStartedAt: unknown } };

/** Contract-checking wrapper for AlarmManager.autoRearm. */
export function wrapAlarmManagerAutoRearm(impl: AlarmManagerAutoRearmImpl): (self: AlarmManager, timestamp: number) => AlarmManager {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.alarmSilenced)) {
      preViolations.push("[AlarmManager.autoRearm] pre violated: self.alarmSilenced");
    }
    if (!((self.silenceStartedAt > 0))) {
      preViolations.push("[AlarmManager.autoRearm] pre violated: self.silenceStartedAt > 0.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[AlarmManager.autoRearm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmSilenced": self.alarmSilenced,
      "self.silenceStartedAt": self.silenceStartedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if (timestamp - self.silenceStartedAt) >= self.autoRearmSeconds then
            self.alarmSilenced = false
            and self.silenceStartedAt = 0.0
            and result = true
          else
            self.alarmSilenced = self.alarmSilenced@pre
            and self.silenceStartedAt = self.silenceStartedAt@pre
            and result = false
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

/** Impl signature for AlarmManager.autoRearm (async). User supplies this. */
export type AlarmManagerAutoRearmAsyncImpl = (self: AlarmManager, timestamp: number) => Promise<{ self: AlarmManager; modified: { alarmSilenced: unknown; silenceStartedAt: unknown } }>;

/** Contract-checking wrapper for AlarmManager.autoRearm (async). */
export function wrapAlarmManagerAutoRearmAsync(impl: AlarmManagerAutoRearmAsyncImpl): (self: AlarmManager, timestamp: number) => Promise<AlarmManager> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.alarmSilenced)) {
      preViolations.push("[AlarmManager.autoRearm] pre violated: self.alarmSilenced");
    }
    if (!((self.silenceStartedAt > 0))) {
      preViolations.push("[AlarmManager.autoRearm] pre violated: self.silenceStartedAt > 0.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[AlarmManager.autoRearm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmSilenced": self.alarmSilenced,
      "self.silenceStartedAt": self.silenceStartedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if (timestamp - self.silenceStartedAt) >= self.autoRearmSeconds then
            self.alarmSilenced = false
            and self.silenceStartedAt = 0.0
            and result = true
          else
            self.alarmSilenced = self.alarmSilenced@pre
            and self.silenceStartedAt = self.silenceStartedAt@pre
            and result = false
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

/** Impl signature for AlarmManager.clearAlarm. User supplies this. */
export type AlarmManagerClearAlarmImpl = (self: AlarmManager) => { self: AlarmManager; modified: { alarmRaised: unknown; alarmRaisedAt: unknown; alarmSilenced: unknown; silenceStartedAt: unknown } };

/** Contract-checking wrapper for AlarmManager.clearAlarm. */
export function wrapAlarmManagerClearAlarm(impl: AlarmManagerClearAlarmImpl): (self: AlarmManager) => AlarmManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.alarmRaised)) {
      preViolations.push("[AlarmManager.clearAlarm] pre violated: self.alarmRaised");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmRaised === false))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmRaised = false");
      }
      if (!((__result.self.alarmRaisedAt === 0))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmRaisedAt = 0.0");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.silenceStartedAt === 0))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.silenceStartedAt = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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
export type AlarmManagerClearAlarmAsyncImpl = (self: AlarmManager) => Promise<{ self: AlarmManager; modified: { alarmRaised: unknown; alarmRaisedAt: unknown; alarmSilenced: unknown; silenceStartedAt: unknown } }>;

/** Contract-checking wrapper for AlarmManager.clearAlarm (async). */
export function wrapAlarmManagerClearAlarmAsync(impl: AlarmManagerClearAlarmAsyncImpl): (self: AlarmManager) => Promise<AlarmManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.alarmRaised)) {
      preViolations.push("[AlarmManager.clearAlarm] pre violated: self.alarmRaised");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmRaised === false))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmRaised = false");
      }
      if (!((__result.self.alarmRaisedAt === 0))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmRaisedAt = 0.0");
      }
      if (!((__result.self.alarmSilenced === false))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.alarmSilenced = false");
      }
      if (!((__result.self.silenceStartedAt === 0))) {
        postViolations.push("[AlarmManager.clearAlarm] post violated: self.silenceStartedAt = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorDisconnectMonitor.updateLastSignal. User supplies this. */
export type SensorDisconnectMonitorUpdateLastSignalImpl = (self: SensorDisconnectMonitor, timestamp: number) => { self: SensorDisconnectMonitor; modified: { lastSignalTimestamp: unknown } };

/** Contract-checking wrapper for SensorDisconnectMonitor.updateLastSignal. */
export function wrapSensorDisconnectMonitorUpdateLastSignal(impl: SensorDisconnectMonitorUpdateLastSignalImpl): (self: SensorDisconnectMonitor, timestamp: number) => SensorDisconnectMonitor {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[SensorDisconnectMonitor.updateLastSignal] pre violated: timestamp >= 0.0");
    }
    if (!((timestamp >= self.lastSignalTimestamp))) {
      preViolations.push("[SensorDisconnectMonitor.updateLastSignal] pre violated: timestamp >= self.lastSignalTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastSignalTimestamp === timestamp))) {
        postViolations.push("[SensorDisconnectMonitor.updateLastSignal] post violated: self.lastSignalTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorDisconnectMonitor.updateLastSignal (async). User supplies this. */
export type SensorDisconnectMonitorUpdateLastSignalAsyncImpl = (self: SensorDisconnectMonitor, timestamp: number) => Promise<{ self: SensorDisconnectMonitor; modified: { lastSignalTimestamp: unknown } }>;

/** Contract-checking wrapper for SensorDisconnectMonitor.updateLastSignal (async). */
export function wrapSensorDisconnectMonitorUpdateLastSignalAsync(impl: SensorDisconnectMonitorUpdateLastSignalAsyncImpl): (self: SensorDisconnectMonitor, timestamp: number) => Promise<SensorDisconnectMonitor> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[SensorDisconnectMonitor.updateLastSignal] pre violated: timestamp >= 0.0");
    }
    if (!((timestamp >= self.lastSignalTimestamp))) {
      preViolations.push("[SensorDisconnectMonitor.updateLastSignal] pre violated: timestamp >= self.lastSignalTimestamp");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastSignalTimestamp === timestamp))) {
        postViolations.push("[SensorDisconnectMonitor.updateLastSignal] post violated: self.lastSignalTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorDisconnectMonitor.checkForDisconnect. User supplies this. */
export type SensorDisconnectMonitorCheckForDisconnectImpl = (self: SensorDisconnectMonitor, currentTime: number) => { self: SensorDisconnectMonitor; modified: { disconnectAlarmRaised: unknown } };

/** Contract-checking wrapper for SensorDisconnectMonitor.checkForDisconnect. */
export function wrapSensorDisconnectMonitorCheckForDisconnect(impl: SensorDisconnectMonitorCheckForDisconnectImpl): (self: SensorDisconnectMonitor, currentTime: number) => SensorDisconnectMonitor {
  return (self, currentTime) => {
    const preViolations: string[] = [];
    if (!((currentTime >= 0))) {
      preViolations.push("[SensorDisconnectMonitor.checkForDisconnect] pre violated: currentTime >= 0.0");
    }
    if (!(!(self.disconnectAlarmRaised))) {
      preViolations.push("[SensorDisconnectMonitor.checkForDisconnect] pre violated: not self.disconnectAlarmRaised");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTime);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if (currentTime - self.lastSignalTimestamp) > self.disconnectThresholdSeconds then
            self.disconnectAlarmRaised = true
            and result = true
          else
            self.disconnectAlarmRaised = false
            and result = false
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

/** Impl signature for SensorDisconnectMonitor.checkForDisconnect (async). User supplies this. */
export type SensorDisconnectMonitorCheckForDisconnectAsyncImpl = (self: SensorDisconnectMonitor, currentTime: number) => Promise<{ self: SensorDisconnectMonitor; modified: { disconnectAlarmRaised: unknown } }>;

/** Contract-checking wrapper for SensorDisconnectMonitor.checkForDisconnect (async). */
export function wrapSensorDisconnectMonitorCheckForDisconnectAsync(impl: SensorDisconnectMonitorCheckForDisconnectAsyncImpl): (self: SensorDisconnectMonitor, currentTime: number) => Promise<SensorDisconnectMonitor> {
  return async (self, currentTime) => {
    const preViolations: string[] = [];
    if (!((currentTime >= 0))) {
      preViolations.push("[SensorDisconnectMonitor.checkForDisconnect] pre violated: currentTime >= 0.0");
    }
    if (!(!(self.disconnectAlarmRaised))) {
      preViolations.push("[SensorDisconnectMonitor.checkForDisconnect] pre violated: not self.disconnectAlarmRaised");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTime);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if (currentTime - self.lastSignalTimestamp) > self.disconnectThresholdSeconds then
            self.disconnectAlarmRaised = true
            and result = true
          else
            self.disconnectAlarmRaised = false
            and result = false
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

/** Impl signature for SensorDisconnectMonitor.clearDisconnectAlarm. User supplies this. */
export type SensorDisconnectMonitorClearDisconnectAlarmImpl = (self: SensorDisconnectMonitor) => { self: SensorDisconnectMonitor; modified: { disconnectAlarmRaised: unknown } };

/** Contract-checking wrapper for SensorDisconnectMonitor.clearDisconnectAlarm. */
export function wrapSensorDisconnectMonitorClearDisconnectAlarm(impl: SensorDisconnectMonitorClearDisconnectAlarmImpl): (self: SensorDisconnectMonitor) => SensorDisconnectMonitor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.disconnectAlarmRaised)) {
      preViolations.push("[SensorDisconnectMonitor.clearDisconnectAlarm] pre violated: self.disconnectAlarmRaised");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.disconnectAlarmRaised === false))) {
        postViolations.push("[SensorDisconnectMonitor.clearDisconnectAlarm] post violated: self.disconnectAlarmRaised = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorDisconnectMonitor.clearDisconnectAlarm (async). User supplies this. */
export type SensorDisconnectMonitorClearDisconnectAlarmAsyncImpl = (self: SensorDisconnectMonitor) => Promise<{ self: SensorDisconnectMonitor; modified: { disconnectAlarmRaised: unknown } }>;

/** Contract-checking wrapper for SensorDisconnectMonitor.clearDisconnectAlarm (async). */
export function wrapSensorDisconnectMonitorClearDisconnectAlarmAsync(impl: SensorDisconnectMonitorClearDisconnectAlarmAsyncImpl): (self: SensorDisconnectMonitor) => Promise<SensorDisconnectMonitor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.disconnectAlarmRaised)) {
      preViolations.push("[SensorDisconnectMonitor.clearDisconnectAlarm] pre violated: self.disconnectAlarmRaised");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.disconnectAlarmRaised === false))) {
        postViolations.push("[SensorDisconnectMonitor.clearDisconnectAlarm] post violated: self.disconnectAlarmRaised = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Clock.tick. User supplies this. */
export type ClockTickImpl = (self: Clock) => { self: Clock; modified: { currentTime: unknown } };

/** Contract-checking wrapper for Clock.tick. */
export function wrapClockTick(impl: ClockTickImpl): (self: Clock) => Clock {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.currentTime >= 0))) {
      preViolations.push("[Clock.tick] pre violated: self.currentTime >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTime": self.currentTime,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentTime === (__pre["self.currentTime"] + (__result.self.tickIntervalMs / 1000))))) {
        postViolations.push("[Clock.tick] post violated: self.currentTime = self.currentTime@pre + (self.tickIntervalMs / 1000.0)");
      }
      // SKIPPED post-clause (not translatable): result = self.currentTime — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Clock.tick (async). User supplies this. */
export type ClockTickAsyncImpl = (self: Clock) => Promise<{ self: Clock; modified: { currentTime: unknown } }>;

/** Contract-checking wrapper for Clock.tick (async). */
export function wrapClockTickAsync(impl: ClockTickAsyncImpl): (self: Clock) => Promise<Clock> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.currentTime >= 0))) {
      preViolations.push("[Clock.tick] pre violated: self.currentTime >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.currentTime": self.currentTime,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.currentTime === (__pre["self.currentTime"] + (__result.self.tickIntervalMs / 1000))))) {
        postViolations.push("[Clock.tick] post violated: self.currentTime = self.currentTime@pre + (self.tickIntervalMs / 1000.0)");
      }
      // SKIPPED post-clause (not translatable): result = self.currentTime — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Clock.getCurrentTime. User supplies this. */
export type ClockGetCurrentTimeImpl = (self: Clock) => { self: Clock; modified: {} };

/** Contract-checking wrapper for Clock.getCurrentTime. */
export function wrapClockGetCurrentTime(impl: ClockGetCurrentTimeImpl): (self: Clock) => Clock {
  return (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.currentTime — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for Clock.getCurrentTime (async). User supplies this. */
export type ClockGetCurrentTimeAsyncImpl = (self: Clock) => Promise<{ self: Clock; modified: {} }>;

/** Contract-checking wrapper for Clock.getCurrentTime (async). */
export function wrapClockGetCurrentTimeAsync(impl: ClockGetCurrentTimeAsyncImpl): (self: Clock) => Promise<Clock> {
  return async (self) => {
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result = self.currentTime — unbound variable 'result'
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AudibleAlert.soundAlarm. User supplies this. */
export type AudibleAlertSoundAlarmImpl = (self: AudibleAlert, alertType: string) => { self: AudibleAlert; modified: { isAudible: unknown; alertType: unknown } };

/** Contract-checking wrapper for AudibleAlert.soundAlarm. */
export function wrapAudibleAlertSoundAlarm(impl: AudibleAlertSoundAlarmImpl): (self: AudibleAlert, alertType: string) => AudibleAlert {
  return (self, alertType) => {
    const preViolations: string[] = [];
    if (!(!(self.isAudible))) {
      preViolations.push("[AudibleAlert.soundAlarm] pre violated: not self.isAudible");
    }
    if (!(((alertType === "threshold") || (alertType === "disconnect")))) {
      preViolations.push("[AudibleAlert.soundAlarm] pre violated: alertType = 'threshold' or alertType = 'disconnect'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, alertType);
      const postViolations: string[] = [];
      if (!((__result.self.isAudible === true))) {
        postViolations.push("[AudibleAlert.soundAlarm] post violated: self.isAudible = true");
      }
      if (!((__result.self.alertType === alertType))) {
        postViolations.push("[AudibleAlert.soundAlarm] post violated: self.alertType = alertType");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AudibleAlert.soundAlarm (async). User supplies this. */
export type AudibleAlertSoundAlarmAsyncImpl = (self: AudibleAlert, alertType: string) => Promise<{ self: AudibleAlert; modified: { isAudible: unknown; alertType: unknown } }>;

/** Contract-checking wrapper for AudibleAlert.soundAlarm (async). */
export function wrapAudibleAlertSoundAlarmAsync(impl: AudibleAlertSoundAlarmAsyncImpl): (self: AudibleAlert, alertType: string) => Promise<AudibleAlert> {
  return async (self, alertType) => {
    const preViolations: string[] = [];
    if (!(!(self.isAudible))) {
      preViolations.push("[AudibleAlert.soundAlarm] pre violated: not self.isAudible");
    }
    if (!(((alertType === "threshold") || (alertType === "disconnect")))) {
      preViolations.push("[AudibleAlert.soundAlarm] pre violated: alertType = 'threshold' or alertType = 'disconnect'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, alertType);
      const postViolations: string[] = [];
      if (!((__result.self.isAudible === true))) {
        postViolations.push("[AudibleAlert.soundAlarm] post violated: self.isAudible = true");
      }
      if (!((__result.self.alertType === alertType))) {
        postViolations.push("[AudibleAlert.soundAlarm] post violated: self.alertType = alertType");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AudibleAlert.silenceAlert. User supplies this. */
export type AudibleAlertSilenceAlertImpl = (self: AudibleAlert) => { self: AudibleAlert; modified: { isAudible: unknown } };

/** Contract-checking wrapper for AudibleAlert.silenceAlert. */
export function wrapAudibleAlertSilenceAlert(impl: AudibleAlertSilenceAlertImpl): (self: AudibleAlert) => AudibleAlert {
  return (self) => {
    const preViolations: string[] = [];
    if (!(self.isAudible)) {
      preViolations.push("[AudibleAlert.silenceAlert] pre violated: self.isAudible");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isAudible === false))) {
        postViolations.push("[AudibleAlert.silenceAlert] post violated: self.isAudible = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AudibleAlert.silenceAlert (async). User supplies this. */
export type AudibleAlertSilenceAlertAsyncImpl = (self: AudibleAlert) => Promise<{ self: AudibleAlert; modified: { isAudible: unknown } }>;

/** Contract-checking wrapper for AudibleAlert.silenceAlert (async). */
export function wrapAudibleAlertSilenceAlertAsync(impl: AudibleAlertSilenceAlertAsyncImpl): (self: AudibleAlert) => Promise<AudibleAlert> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(self.isAudible)) {
      preViolations.push("[AudibleAlert.silenceAlert] pre violated: self.isAudible");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isAudible === false))) {
        postViolations.push("[AudibleAlert.silenceAlert] post violated: self.isAudible = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorToPlausibilityChannel.transferReading. User supplies this. */
export type SensorToPlausibilityChannelTransferReadingImpl = (self: SensorToPlausibilityChannel, value: number, timestamp: number) => { self: SensorToPlausibilityChannel; modified: { lastTransferredValue: unknown; lastTransferTimestamp: unknown; transferSucceeded: unknown } };

/** Contract-checking wrapper for SensorToPlausibilityChannel.transferReading. */
export function wrapSensorToPlausibilityChannelTransferReading(impl: SensorToPlausibilityChannelTransferReadingImpl): (self: SensorToPlausibilityChannel, value: number, timestamp: number) => SensorToPlausibilityChannel {
  return (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[SensorToPlausibilityChannel.transferReading] pre violated: value >= 0.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[SensorToPlausibilityChannel.transferReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransferredValue === value))) {
        postViolations.push("[SensorToPlausibilityChannel.transferReading] post violated: self.lastTransferredValue = value");
      }
      if (!((__result.self.lastTransferTimestamp === timestamp))) {
        postViolations.push("[SensorToPlausibilityChannel.transferReading] post violated: self.lastTransferTimestamp = timestamp");
      }
      if (!((__result.self.transferSucceeded === true))) {
        postViolations.push("[SensorToPlausibilityChannel.transferReading] post violated: self.transferSucceeded = true");
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

/** Impl signature for SensorToPlausibilityChannel.transferReading (async). User supplies this. */
export type SensorToPlausibilityChannelTransferReadingAsyncImpl = (self: SensorToPlausibilityChannel, value: number, timestamp: number) => Promise<{ self: SensorToPlausibilityChannel; modified: { lastTransferredValue: unknown; lastTransferTimestamp: unknown; transferSucceeded: unknown } }>;

/** Contract-checking wrapper for SensorToPlausibilityChannel.transferReading (async). */
export function wrapSensorToPlausibilityChannelTransferReadingAsync(impl: SensorToPlausibilityChannelTransferReadingAsyncImpl): (self: SensorToPlausibilityChannel, value: number, timestamp: number) => Promise<SensorToPlausibilityChannel> {
  return async (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[SensorToPlausibilityChannel.transferReading] pre violated: value >= 0.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[SensorToPlausibilityChannel.transferReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransferredValue === value))) {
        postViolations.push("[SensorToPlausibilityChannel.transferReading] post violated: self.lastTransferredValue = value");
      }
      if (!((__result.self.lastTransferTimestamp === timestamp))) {
        postViolations.push("[SensorToPlausibilityChannel.transferReading] post violated: self.lastTransferTimestamp = timestamp");
      }
      if (!((__result.self.transferSucceeded === true))) {
        postViolations.push("[SensorToPlausibilityChannel.transferReading] post violated: self.transferSucceeded = true");
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

/** Impl signature for PlausibilityToDisplayChannel.requestDisplay. User supplies this. */
export type PlausibilityToDisplayChannelRequestDisplayImpl = (self: PlausibilityToDisplayChannel, value: number) => { self: PlausibilityToDisplayChannel; modified: { lastDisplayedValue: unknown; displayRequested: unknown } };

/** Contract-checking wrapper for PlausibilityToDisplayChannel.requestDisplay. */
export function wrapPlausibilityToDisplayChannelRequestDisplay(impl: PlausibilityToDisplayChannelRequestDisplayImpl): (self: PlausibilityToDisplayChannel, value: number) => PlausibilityToDisplayChannel {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 20))) {
      preViolations.push("[PlausibilityToDisplayChannel.requestDisplay] pre violated: value >= 20.0");
    }
    if (!((value <= 250))) {
      preViolations.push("[PlausibilityToDisplayChannel.requestDisplay] pre violated: value <= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastDisplayedValue === value))) {
        postViolations.push("[PlausibilityToDisplayChannel.requestDisplay] post violated: self.lastDisplayedValue = value");
      }
      if (!((__result.self.displayRequested === true))) {
        postViolations.push("[PlausibilityToDisplayChannel.requestDisplay] post violated: self.displayRequested = true");
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

/** Impl signature for PlausibilityToDisplayChannel.requestDisplay (async). User supplies this. */
export type PlausibilityToDisplayChannelRequestDisplayAsyncImpl = (self: PlausibilityToDisplayChannel, value: number) => Promise<{ self: PlausibilityToDisplayChannel; modified: { lastDisplayedValue: unknown; displayRequested: unknown } }>;

/** Contract-checking wrapper for PlausibilityToDisplayChannel.requestDisplay (async). */
export function wrapPlausibilityToDisplayChannelRequestDisplayAsync(impl: PlausibilityToDisplayChannelRequestDisplayAsyncImpl): (self: PlausibilityToDisplayChannel, value: number) => Promise<PlausibilityToDisplayChannel> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 20))) {
      preViolations.push("[PlausibilityToDisplayChannel.requestDisplay] pre violated: value >= 20.0");
    }
    if (!((value <= 250))) {
      preViolations.push("[PlausibilityToDisplayChannel.requestDisplay] pre violated: value <= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastDisplayedValue === value))) {
        postViolations.push("[PlausibilityToDisplayChannel.requestDisplay] post violated: self.lastDisplayedValue = value");
      }
      if (!((__result.self.displayRequested === true))) {
        postViolations.push("[PlausibilityToDisplayChannel.requestDisplay] post violated: self.displayRequested = true");
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

/** Impl signature for PlausibilityToThresholdChannel.requestComparison. User supplies this. */
export type PlausibilityToThresholdChannelRequestComparisonImpl = (self: PlausibilityToThresholdChannel, value: number) => { self: PlausibilityToThresholdChannel; modified: { lastComparedValue: unknown; comparisonRequested: unknown } };

/** Contract-checking wrapper for PlausibilityToThresholdChannel.requestComparison. */
export function wrapPlausibilityToThresholdChannelRequestComparison(impl: PlausibilityToThresholdChannelRequestComparisonImpl): (self: PlausibilityToThresholdChannel, value: number) => PlausibilityToThresholdChannel {
  return (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 20))) {
      preViolations.push("[PlausibilityToThresholdChannel.requestComparison] pre violated: value >= 20.0");
    }
    if (!((value <= 250))) {
      preViolations.push("[PlausibilityToThresholdChannel.requestComparison] pre violated: value <= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastComparedValue === value))) {
        postViolations.push("[PlausibilityToThresholdChannel.requestComparison] post violated: self.lastComparedValue = value");
      }
      if (!((__result.self.comparisonRequested === true))) {
        postViolations.push("[PlausibilityToThresholdChannel.requestComparison] post violated: self.comparisonRequested = true");
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

/** Impl signature for PlausibilityToThresholdChannel.requestComparison (async). User supplies this. */
export type PlausibilityToThresholdChannelRequestComparisonAsyncImpl = (self: PlausibilityToThresholdChannel, value: number) => Promise<{ self: PlausibilityToThresholdChannel; modified: { lastComparedValue: unknown; comparisonRequested: unknown } }>;

/** Contract-checking wrapper for PlausibilityToThresholdChannel.requestComparison (async). */
export function wrapPlausibilityToThresholdChannelRequestComparisonAsync(impl: PlausibilityToThresholdChannelRequestComparisonAsyncImpl): (self: PlausibilityToThresholdChannel, value: number) => Promise<PlausibilityToThresholdChannel> {
  return async (self, value) => {
    const preViolations: string[] = [];
    if (!((value >= 20))) {
      preViolations.push("[PlausibilityToThresholdChannel.requestComparison] pre violated: value >= 20.0");
    }
    if (!((value <= 250))) {
      preViolations.push("[PlausibilityToThresholdChannel.requestComparison] pre violated: value <= 250.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value);
      const postViolations: string[] = [];
      if (!((__result.self.lastComparedValue === value))) {
        postViolations.push("[PlausibilityToThresholdChannel.requestComparison] post violated: self.lastComparedValue = value");
      }
      if (!((__result.self.comparisonRequested === true))) {
        postViolations.push("[PlausibilityToThresholdChannel.requestComparison] post violated: self.comparisonRequested = true");
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

/** Impl signature for ThresholdToAlarmChannel.triggerAlarm. User supplies this. */
export type ThresholdToAlarmChannelTriggerAlarmImpl = (self: ThresholdToAlarmChannel, value: number, timestamp: number) => { self: ThresholdToAlarmChannel; modified: { lastCrossingValue: unknown; alarmTriggered: unknown } };

/** Contract-checking wrapper for ThresholdToAlarmChannel.triggerAlarm. */
export function wrapThresholdToAlarmChannelTriggerAlarm(impl: ThresholdToAlarmChannelTriggerAlarmImpl): (self: ThresholdToAlarmChannel, value: number, timestamp: number) => ThresholdToAlarmChannel {
  return (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[ThresholdToAlarmChannel.triggerAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastCrossingValue === value))) {
        postViolations.push("[ThresholdToAlarmChannel.triggerAlarm] post violated: self.lastCrossingValue = value");
      }
      if (!((__result.self.alarmTriggered === true))) {
        postViolations.push("[ThresholdToAlarmChannel.triggerAlarm] post violated: self.alarmTriggered = true");
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

/** Impl signature for ThresholdToAlarmChannel.triggerAlarm (async). User supplies this. */
export type ThresholdToAlarmChannelTriggerAlarmAsyncImpl = (self: ThresholdToAlarmChannel, value: number, timestamp: number) => Promise<{ self: ThresholdToAlarmChannel; modified: { lastCrossingValue: unknown; alarmTriggered: unknown } }>;

/** Contract-checking wrapper for ThresholdToAlarmChannel.triggerAlarm (async). */
export function wrapThresholdToAlarmChannelTriggerAlarmAsync(impl: ThresholdToAlarmChannelTriggerAlarmAsyncImpl): (self: ThresholdToAlarmChannel, value: number, timestamp: number) => Promise<ThresholdToAlarmChannel> {
  return async (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[ThresholdToAlarmChannel.triggerAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastCrossingValue === value))) {
        postViolations.push("[ThresholdToAlarmChannel.triggerAlarm] post violated: self.lastCrossingValue = value");
      }
      if (!((__result.self.alarmTriggered === true))) {
        postViolations.push("[ThresholdToAlarmChannel.triggerAlarm] post violated: self.alarmTriggered = true");
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

/** Impl signature for DisconnectToAlarmChannel.triggerDisconnectAlarm. User supplies this. */
export type DisconnectToAlarmChannelTriggerDisconnectAlarmImpl = (self: DisconnectToAlarmChannel, timestamp: number) => { self: DisconnectToAlarmChannel; modified: { disconnectAlarmTriggered: unknown } };

/** Contract-checking wrapper for DisconnectToAlarmChannel.triggerDisconnectAlarm. */
export function wrapDisconnectToAlarmChannelTriggerDisconnectAlarm(impl: DisconnectToAlarmChannelTriggerDisconnectAlarmImpl): (self: DisconnectToAlarmChannel, timestamp: number) => DisconnectToAlarmChannel {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[DisconnectToAlarmChannel.triggerDisconnectAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.disconnectAlarmTriggered === true))) {
        postViolations.push("[DisconnectToAlarmChannel.triggerDisconnectAlarm] post violated: self.disconnectAlarmTriggered = true");
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

/** Impl signature for DisconnectToAlarmChannel.triggerDisconnectAlarm (async). User supplies this. */
export type DisconnectToAlarmChannelTriggerDisconnectAlarmAsyncImpl = (self: DisconnectToAlarmChannel, timestamp: number) => Promise<{ self: DisconnectToAlarmChannel; modified: { disconnectAlarmTriggered: unknown } }>;

/** Contract-checking wrapper for DisconnectToAlarmChannel.triggerDisconnectAlarm (async). */
export function wrapDisconnectToAlarmChannelTriggerDisconnectAlarmAsync(impl: DisconnectToAlarmChannelTriggerDisconnectAlarmAsyncImpl): (self: DisconnectToAlarmChannel, timestamp: number) => Promise<DisconnectToAlarmChannel> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[DisconnectToAlarmChannel.triggerDisconnectAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.disconnectAlarmTriggered === true))) {
        postViolations.push("[DisconnectToAlarmChannel.triggerDisconnectAlarm] post violated: self.disconnectAlarmTriggered = true");
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

/** Impl signature for AlarmToAudibleChannel.requestAlertSound. User supplies this. */
export type AlarmToAudibleChannelRequestAlertSoundImpl = (self: AlarmToAudibleChannel, alertType: string) => { self: AlarmToAudibleChannel; modified: { lastAlertType: unknown; soundRequested: unknown } };

/** Contract-checking wrapper for AlarmToAudibleChannel.requestAlertSound. */
export function wrapAlarmToAudibleChannelRequestAlertSound(impl: AlarmToAudibleChannelRequestAlertSoundImpl): (self: AlarmToAudibleChannel, alertType: string) => AlarmToAudibleChannel {
  return (self, alertType) => {
    const preViolations: string[] = [];
    if (!(((alertType === "threshold") || (alertType === "disconnect")))) {
      preViolations.push("[AlarmToAudibleChannel.requestAlertSound] pre violated: alertType = 'threshold' or alertType = 'disconnect'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, alertType);
      const postViolations: string[] = [];
      if (!((__result.self.lastAlertType === alertType))) {
        postViolations.push("[AlarmToAudibleChannel.requestAlertSound] post violated: self.lastAlertType = alertType");
      }
      if (!((__result.self.soundRequested === true))) {
        postViolations.push("[AlarmToAudibleChannel.requestAlertSound] post violated: self.soundRequested = true");
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

/** Impl signature for AlarmToAudibleChannel.requestAlertSound (async). User supplies this. */
export type AlarmToAudibleChannelRequestAlertSoundAsyncImpl = (self: AlarmToAudibleChannel, alertType: string) => Promise<{ self: AlarmToAudibleChannel; modified: { lastAlertType: unknown; soundRequested: unknown } }>;

/** Contract-checking wrapper for AlarmToAudibleChannel.requestAlertSound (async). */
export function wrapAlarmToAudibleChannelRequestAlertSoundAsync(impl: AlarmToAudibleChannelRequestAlertSoundAsyncImpl): (self: AlarmToAudibleChannel, alertType: string) => Promise<AlarmToAudibleChannel> {
  return async (self, alertType) => {
    const preViolations: string[] = [];
    if (!(((alertType === "threshold") || (alertType === "disconnect")))) {
      preViolations.push("[AlarmToAudibleChannel.requestAlertSound] pre violated: alertType = 'threshold' or alertType = 'disconnect'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, alertType);
      const postViolations: string[] = [];
      if (!((__result.self.lastAlertType === alertType))) {
        postViolations.push("[AlarmToAudibleChannel.requestAlertSound] post violated: self.lastAlertType = alertType");
      }
      if (!((__result.self.soundRequested === true))) {
        postViolations.push("[AlarmToAudibleChannel.requestAlertSound] post violated: self.soundRequested = true");
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

/** Impl signature for VitalSignMonitorSystem.deliverReading. User supplies this. */
export type VitalSignMonitorSystemDeliverReadingImpl = (self: VitalSignMonitorSystem, heartRate: number, timestamp: number) => { self: VitalSignMonitorSystem; modified: { displayValue: unknown; isDisplaying: unknown; currentHeartRate: unknown; rejectionCounter: unknown; lastSignalAt: unknown; sensorConnected: unknown; disconnectAlarmRaised: unknown; alarmRaised: unknown; alarmRaisedAt: unknown; alarmSilenced: unknown; silenceStartedAt: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystem.deliverReading. */
export function wrapVitalSignMonitorSystemDeliverReading(impl: VitalSignMonitorSystemDeliverReadingImpl): (self: VitalSignMonitorSystem, heartRate: number, timestamp: number) => VitalSignMonitorSystem {
  return (self, heartRate, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[VitalSignMonitorSystem.deliverReading] pre violated: timestamp >= 0.0");
    }
    if (!((heartRate >= 0))) {
      preViolations.push("[VitalSignMonitorSystem.deliverReading] pre violated: heartRate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCounter": self.rejectionCounter,
      "self.alarmRaised": self.alarmRaised,
      "self.alarmRaisedAt": self.alarmRaisedAt,
      "self.alarmSilenced": self.alarmSilenced,
      "self.silenceStartedAt": self.silenceStartedAt,
      "self.displayValue": self.displayValue,
      "self.isDisplaying": self.isDisplaying,
      "self.currentHeartRate": self.currentHeartRate,
      "self.lastSignalAt": self.lastSignalAt,
      "self.sensorConnected": self.sensorConnected,
      "self.disconnectAlarmRaised": self.disconnectAlarmRaised,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, heartRate, timestamp);
      const postViolations: string[] = [];
      if (!(((((heartRate >= __result.self.plausibleMin) && (heartRate <= __result.self.plausibleMax))) ? ((((((((((__result.self.displayValue === heartRate) && (__result.self.isDisplaying === true)) && (__result.self.currentHeartRate === heartRate)) && (__result.self.rejectionCounter === __pre["self.rejectionCounter"])) && (__result.self.lastSignalAt === timestamp)) && (__result.self.sensorConnected === true)) && (__result.self.disconnectAlarmRaised === false)) && ((((heartRate > __result.self.highAlarmThreshold) || (heartRate < __result.self.lowAlarmThreshold))) ? ((((__result.self.alarmRaised === true) && (__result.self.alarmRaisedAt === timestamp)) && ((__result.self.alarmRaisedAt - __result.self.lastSignalAt) <= __result.self.alarmLatencyBudgetSeconds))) : (((__result.self.alarmRaised === __pre["self.alarmRaised"]) && (__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"]))))) && (((__pre["self.alarmSilenced"] && ((timestamp - __pre["self.silenceStartedAt"]) >= __result.self.autoRearmSeconds))) ? (((__result.self.alarmSilenced === false) && (__result.self.silenceStartedAt === 0))) : (((__result.self.alarmSilenced === __pre["self.alarmSilenced"]) && (__result.self.silenceStartedAt === __pre["self.silenceStartedAt"])))))) : ((((((((((((__result.self.displayValue === __pre["self.displayValue"]) && (__result.self.isDisplaying === __pre["self.isDisplaying"])) && (__result.self.currentHeartRate === __pre["self.currentHeartRate"])) && (__result.self.rejectionCounter === (__pre["self.rejectionCounter"] + 1))) && (__result.self.lastSignalAt === __pre["self.lastSignalAt"])) && (__result.self.sensorConnected === __pre["self.sensorConnected"])) && (__result.self.disconnectAlarmRaised === __pre["self.disconnectAlarmRaised"])) && (__result.self.alarmRaised === __pre["self.alarmRaised"])) && (__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"])) && (__result.self.alarmSilenced === __pre["self.alarmSilenced"])) && (__result.self.silenceStartedAt === __pre["self.silenceStartedAt"])))))) {
        postViolations.push("[VitalSignMonitorSystem.deliverReading] post violated: if heartRate >= self.plausibleMin and heartRate <= self.plausibleMax then\n            \n            self.displayValue = heartRate\n            and self.isDisplaying = true\n            and self.currentHeartRate = heartRate\n            \n            and self.rejectionCounter = self.rejectionCounter@pre\n            \n            and self.lastSignalAt = timestamp\n            and self.sensorConnected = true\n            and self.disconnectAlarmRaised = false\n            \n            and (\n              if (heartRate > self.highAlarmThreshold or heartRate < self.lowAlarmThreshold) then\n                self.alarmRaised = true\n                and self.alarmRaisedAt = timestamp\n                and (self.alarmRaisedAt - self.lastSignalAt) <= self.alarmLatencyBudgetSeconds\n              else\n                self.alarmRaised = self.alarmRaised@pre   \n                and self.alarmRaisedAt = self.alarmRaisedAt@pre\n              endif\n            )\n            \n            and (\n              if self.alarmSilenced@pre and (timestamp - self.silenceStartedAt@pre) >= self.autoRearmSeconds then\n                self.alarmSilenced = false\n                and self.silenceStartedAt = 0.0\n              else\n                self.alarmSilenced = self.alarmSilenced@pre\n                and self.silenceStartedAt = self.silenceStartedAt@pre\n              endif\n            )\n          else\n            \n            \n            \n            \n            \n            \n            \n            \n            \n            self.displayValue = self.displayValue@pre\n            and self.isDisplaying = self.isDisplaying@pre\n            and self.currentHeartRate = self.currentHeartRate@pre\n            and self.rejectionCounter = self.rejectionCounter@pre + 1\n            and self.lastSignalAt = self.lastSignalAt@pre\n            and self.sensorConnected = self.sensorConnected@pre\n            and self.disconnectAlarmRaised = self.disconnectAlarmRaised@pre\n            and self.alarmRaised = self.alarmRaised@pre\n            and self.alarmRaisedAt = self.alarmRaisedAt@pre\n            and self.alarmSilenced = self.alarmSilenced@pre\n            and self.silenceStartedAt = self.silenceStartedAt@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystem.deliverReading (async). User supplies this. */
export type VitalSignMonitorSystemDeliverReadingAsyncImpl = (self: VitalSignMonitorSystem, heartRate: number, timestamp: number) => Promise<{ self: VitalSignMonitorSystem; modified: { displayValue: unknown; isDisplaying: unknown; currentHeartRate: unknown; rejectionCounter: unknown; lastSignalAt: unknown; sensorConnected: unknown; disconnectAlarmRaised: unknown; alarmRaised: unknown; alarmRaisedAt: unknown; alarmSilenced: unknown; silenceStartedAt: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystem.deliverReading (async). */
export function wrapVitalSignMonitorSystemDeliverReadingAsync(impl: VitalSignMonitorSystemDeliverReadingAsyncImpl): (self: VitalSignMonitorSystem, heartRate: number, timestamp: number) => Promise<VitalSignMonitorSystem> {
  return async (self, heartRate, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[VitalSignMonitorSystem.deliverReading] pre violated: timestamp >= 0.0");
    }
    if (!((heartRate >= 0))) {
      preViolations.push("[VitalSignMonitorSystem.deliverReading] pre violated: heartRate >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCounter": self.rejectionCounter,
      "self.alarmRaised": self.alarmRaised,
      "self.alarmRaisedAt": self.alarmRaisedAt,
      "self.alarmSilenced": self.alarmSilenced,
      "self.silenceStartedAt": self.silenceStartedAt,
      "self.displayValue": self.displayValue,
      "self.isDisplaying": self.isDisplaying,
      "self.currentHeartRate": self.currentHeartRate,
      "self.lastSignalAt": self.lastSignalAt,
      "self.sensorConnected": self.sensorConnected,
      "self.disconnectAlarmRaised": self.disconnectAlarmRaised,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, heartRate, timestamp);
      const postViolations: string[] = [];
      if (!(((((heartRate >= __result.self.plausibleMin) && (heartRate <= __result.self.plausibleMax))) ? ((((((((((__result.self.displayValue === heartRate) && (__result.self.isDisplaying === true)) && (__result.self.currentHeartRate === heartRate)) && (__result.self.rejectionCounter === __pre["self.rejectionCounter"])) && (__result.self.lastSignalAt === timestamp)) && (__result.self.sensorConnected === true)) && (__result.self.disconnectAlarmRaised === false)) && ((((heartRate > __result.self.highAlarmThreshold) || (heartRate < __result.self.lowAlarmThreshold))) ? ((((__result.self.alarmRaised === true) && (__result.self.alarmRaisedAt === timestamp)) && ((__result.self.alarmRaisedAt - __result.self.lastSignalAt) <= __result.self.alarmLatencyBudgetSeconds))) : (((__result.self.alarmRaised === __pre["self.alarmRaised"]) && (__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"]))))) && (((__pre["self.alarmSilenced"] && ((timestamp - __pre["self.silenceStartedAt"]) >= __result.self.autoRearmSeconds))) ? (((__result.self.alarmSilenced === false) && (__result.self.silenceStartedAt === 0))) : (((__result.self.alarmSilenced === __pre["self.alarmSilenced"]) && (__result.self.silenceStartedAt === __pre["self.silenceStartedAt"])))))) : ((((((((((((__result.self.displayValue === __pre["self.displayValue"]) && (__result.self.isDisplaying === __pre["self.isDisplaying"])) && (__result.self.currentHeartRate === __pre["self.currentHeartRate"])) && (__result.self.rejectionCounter === (__pre["self.rejectionCounter"] + 1))) && (__result.self.lastSignalAt === __pre["self.lastSignalAt"])) && (__result.self.sensorConnected === __pre["self.sensorConnected"])) && (__result.self.disconnectAlarmRaised === __pre["self.disconnectAlarmRaised"])) && (__result.self.alarmRaised === __pre["self.alarmRaised"])) && (__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"])) && (__result.self.alarmSilenced === __pre["self.alarmSilenced"])) && (__result.self.silenceStartedAt === __pre["self.silenceStartedAt"])))))) {
        postViolations.push("[VitalSignMonitorSystem.deliverReading] post violated: if heartRate >= self.plausibleMin and heartRate <= self.plausibleMax then\n            \n            self.displayValue = heartRate\n            and self.isDisplaying = true\n            and self.currentHeartRate = heartRate\n            \n            and self.rejectionCounter = self.rejectionCounter@pre\n            \n            and self.lastSignalAt = timestamp\n            and self.sensorConnected = true\n            and self.disconnectAlarmRaised = false\n            \n            and (\n              if (heartRate > self.highAlarmThreshold or heartRate < self.lowAlarmThreshold) then\n                self.alarmRaised = true\n                and self.alarmRaisedAt = timestamp\n                and (self.alarmRaisedAt - self.lastSignalAt) <= self.alarmLatencyBudgetSeconds\n              else\n                self.alarmRaised = self.alarmRaised@pre   \n                and self.alarmRaisedAt = self.alarmRaisedAt@pre\n              endif\n            )\n            \n            and (\n              if self.alarmSilenced@pre and (timestamp - self.silenceStartedAt@pre) >= self.autoRearmSeconds then\n                self.alarmSilenced = false\n                and self.silenceStartedAt = 0.0\n              else\n                self.alarmSilenced = self.alarmSilenced@pre\n                and self.silenceStartedAt = self.silenceStartedAt@pre\n              endif\n            )\n          else\n            \n            \n            \n            \n            \n            \n            \n            \n            \n            self.displayValue = self.displayValue@pre\n            and self.isDisplaying = self.isDisplaying@pre\n            and self.currentHeartRate = self.currentHeartRate@pre\n            and self.rejectionCounter = self.rejectionCounter@pre + 1\n            and self.lastSignalAt = self.lastSignalAt@pre\n            and self.sensorConnected = self.sensorConnected@pre\n            and self.disconnectAlarmRaised = self.disconnectAlarmRaised@pre\n            and self.alarmRaised = self.alarmRaised@pre\n            and self.alarmRaisedAt = self.alarmRaisedAt@pre\n            and self.alarmSilenced = self.alarmSilenced@pre\n            and self.silenceStartedAt = self.silenceStartedAt@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystem.acknowledgeAlarm. User supplies this. */
export type VitalSignMonitorSystemAcknowledgeAlarmImpl = (self: VitalSignMonitorSystem, timestamp: number) => { self: VitalSignMonitorSystem; modified: { alarmSilenced: unknown; silenceStartedAt: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystem.acknowledgeAlarm. */
export function wrapVitalSignMonitorSystemAcknowledgeAlarm(impl: VitalSignMonitorSystemAcknowledgeAlarmImpl): (self: VitalSignMonitorSystem, timestamp: number) => VitalSignMonitorSystem {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.alarmRaised)) {
      preViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] pre violated: self.alarmRaised");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] pre violated: not self.alarmSilenced");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === true))) {
        postViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.silenceStartedAt === timestamp))) {
        postViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] post violated: self.silenceStartedAt = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystem.acknowledgeAlarm (async). User supplies this. */
export type VitalSignMonitorSystemAcknowledgeAlarmAsyncImpl = (self: VitalSignMonitorSystem, timestamp: number) => Promise<{ self: VitalSignMonitorSystem; modified: { alarmSilenced: unknown; silenceStartedAt: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystem.acknowledgeAlarm (async). */
export function wrapVitalSignMonitorSystemAcknowledgeAlarmAsync(impl: VitalSignMonitorSystemAcknowledgeAlarmAsyncImpl): (self: VitalSignMonitorSystem, timestamp: number) => Promise<VitalSignMonitorSystem> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.alarmRaised)) {
      preViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] pre violated: self.alarmRaised");
    }
    if (!(!(self.alarmSilenced))) {
      preViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] pre violated: not self.alarmSilenced");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.alarmSilenced === true))) {
        postViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] post violated: self.alarmSilenced = true");
      }
      if (!((__result.self.silenceStartedAt === timestamp))) {
        postViolations.push("[VitalSignMonitorSystem.acknowledgeAlarm] post violated: self.silenceStartedAt = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystem.sensorDisconnectDetected. User supplies this. */
export type VitalSignMonitorSystemSensorDisconnectDetectedImpl = (self: VitalSignMonitorSystem, timestamp: number) => { self: VitalSignMonitorSystem; modified: { sensorConnected: unknown; disconnectAlarmRaised: unknown; alarmRaised: unknown; alarmRaisedAt: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystem.sensorDisconnectDetected. */
export function wrapVitalSignMonitorSystemSensorDisconnectDetected(impl: VitalSignMonitorSystemSensorDisconnectDetectedImpl): (self: VitalSignMonitorSystem, timestamp: number) => VitalSignMonitorSystem {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.sensorConnected)) {
      preViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] pre violated: self.sensorConnected");
    }
    if (!(!(self.disconnectAlarmRaised))) {
      preViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] pre violated: not self.disconnectAlarmRaised");
    }
    if (!(((timestamp - self.lastSignalAt) > self.disconnectThresholdSeconds))) {
      preViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] pre violated: (timestamp - self.lastSignalAt) > self.disconnectThresholdSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.disconnectAlarmRaised === true))) {
        postViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] post violated: self.disconnectAlarmRaised = true");
      }
      if (!((__result.self.alarmRaised === true))) {
        postViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] post violated: self.alarmRaised = true");
      }
      if (!((__result.self.alarmRaisedAt === timestamp))) {
        postViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] post violated: self.alarmRaisedAt = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystem.sensorDisconnectDetected (async). User supplies this. */
export type VitalSignMonitorSystemSensorDisconnectDetectedAsyncImpl = (self: VitalSignMonitorSystem, timestamp: number) => Promise<{ self: VitalSignMonitorSystem; modified: { sensorConnected: unknown; disconnectAlarmRaised: unknown; alarmRaised: unknown; alarmRaisedAt: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystem.sensorDisconnectDetected (async). */
export function wrapVitalSignMonitorSystemSensorDisconnectDetectedAsync(impl: VitalSignMonitorSystemSensorDisconnectDetectedAsyncImpl): (self: VitalSignMonitorSystem, timestamp: number) => Promise<VitalSignMonitorSystem> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(self.sensorConnected)) {
      preViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] pre violated: self.sensorConnected");
    }
    if (!(!(self.disconnectAlarmRaised))) {
      preViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] pre violated: not self.disconnectAlarmRaised");
    }
    if (!(((timestamp - self.lastSignalAt) > self.disconnectThresholdSeconds))) {
      preViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] pre violated: (timestamp - self.lastSignalAt) > self.disconnectThresholdSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === false))) {
        postViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] post violated: self.sensorConnected = false");
      }
      if (!((__result.self.disconnectAlarmRaised === true))) {
        postViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] post violated: self.disconnectAlarmRaised = true");
      }
      if (!((__result.self.alarmRaised === true))) {
        postViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] post violated: self.alarmRaised = true");
      }
      if (!((__result.self.alarmRaisedAt === timestamp))) {
        postViolations.push("[VitalSignMonitorSystem.sensorDisconnectDetected] post violated: self.alarmRaisedAt = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystem.sensorReconnected. User supplies this. */
export type VitalSignMonitorSystemSensorReconnectedImpl = (self: VitalSignMonitorSystem, timestamp: number) => { self: VitalSignMonitorSystem; modified: { sensorConnected: unknown; disconnectAlarmRaised: unknown; lastSignalAt: unknown; alarmRaised: unknown; alarmRaisedAt: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystem.sensorReconnected. */
export function wrapVitalSignMonitorSystemSensorReconnected(impl: VitalSignMonitorSystemSensorReconnectedImpl): (self: VitalSignMonitorSystem, timestamp: number) => VitalSignMonitorSystem {
  return (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorConnected))) {
      preViolations.push("[VitalSignMonitorSystem.sensorReconnected] pre violated: not self.sensorConnected");
    }
    if (!(self.disconnectAlarmRaised)) {
      preViolations.push("[VitalSignMonitorSystem.sensorReconnected] pre violated: self.disconnectAlarmRaised");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[VitalSignMonitorSystem.sensorReconnected] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.disconnectAlarmRaised === false))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.disconnectAlarmRaised = false");
      }
      if (!((__result.self.lastSignalAt === timestamp))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.lastSignalAt = timestamp");
      }
      if (!((__result.self.alarmRaised === false))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.alarmRaised = false");
      }
      if (!((__result.self.alarmRaisedAt === 0))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.alarmRaisedAt = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystem.sensorReconnected (async). User supplies this. */
export type VitalSignMonitorSystemSensorReconnectedAsyncImpl = (self: VitalSignMonitorSystem, timestamp: number) => Promise<{ self: VitalSignMonitorSystem; modified: { sensorConnected: unknown; disconnectAlarmRaised: unknown; lastSignalAt: unknown; alarmRaised: unknown; alarmRaisedAt: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystem.sensorReconnected (async). */
export function wrapVitalSignMonitorSystemSensorReconnectedAsync(impl: VitalSignMonitorSystemSensorReconnectedAsyncImpl): (self: VitalSignMonitorSystem, timestamp: number) => Promise<VitalSignMonitorSystem> {
  return async (self, timestamp) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorConnected))) {
      preViolations.push("[VitalSignMonitorSystem.sensorReconnected] pre violated: not self.sensorConnected");
    }
    if (!(self.disconnectAlarmRaised)) {
      preViolations.push("[VitalSignMonitorSystem.sensorReconnected] pre violated: self.disconnectAlarmRaised");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[VitalSignMonitorSystem.sensorReconnected] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorConnected === true))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.sensorConnected = true");
      }
      if (!((__result.self.disconnectAlarmRaised === false))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.disconnectAlarmRaised = false");
      }
      if (!((__result.self.lastSignalAt === timestamp))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.lastSignalAt = timestamp");
      }
      if (!((__result.self.alarmRaised === false))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.alarmRaised = false");
      }
      if (!((__result.self.alarmRaisedAt === 0))) {
        postViolations.push("[VitalSignMonitorSystem.sensorReconnected] post violated: self.alarmRaisedAt = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystem.configureThresholds. User supplies this. */
export type VitalSignMonitorSystemConfigureThresholdsImpl = (self: VitalSignMonitorSystem, newLow: number, newHigh: number) => { self: VitalSignMonitorSystem; modified: { lowAlarmThreshold: unknown; highAlarmThreshold: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystem.configureThresholds. */
export function wrapVitalSignMonitorSystemConfigureThresholds(impl: VitalSignMonitorSystemConfigureThresholdsImpl): (self: VitalSignMonitorSystem, newLow: number, newHigh: number) => VitalSignMonitorSystem {
  return (self, newLow, newHigh) => {
    const preViolations: string[] = [];
    if (!((newLow >= self.plausibleMin))) {
      preViolations.push("[VitalSignMonitorSystem.configureThresholds] pre violated: newLow >= self.plausibleMin");
    }
    if (!((newHigh <= self.plausibleMax))) {
      preViolations.push("[VitalSignMonitorSystem.configureThresholds] pre violated: newHigh <= self.plausibleMax");
    }
    if (!((newLow < newHigh))) {
      preViolations.push("[VitalSignMonitorSystem.configureThresholds] pre violated: newLow < newHigh");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newLow, newHigh);
      const postViolations: string[] = [];
      if (!((__result.self.lowAlarmThreshold === newLow))) {
        postViolations.push("[VitalSignMonitorSystem.configureThresholds] post violated: self.lowAlarmThreshold = newLow");
      }
      if (!((__result.self.highAlarmThreshold === newHigh))) {
        postViolations.push("[VitalSignMonitorSystem.configureThresholds] post violated: self.highAlarmThreshold = newHigh");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystem.configureThresholds (async). User supplies this. */
export type VitalSignMonitorSystemConfigureThresholdsAsyncImpl = (self: VitalSignMonitorSystem, newLow: number, newHigh: number) => Promise<{ self: VitalSignMonitorSystem; modified: { lowAlarmThreshold: unknown; highAlarmThreshold: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystem.configureThresholds (async). */
export function wrapVitalSignMonitorSystemConfigureThresholdsAsync(impl: VitalSignMonitorSystemConfigureThresholdsAsyncImpl): (self: VitalSignMonitorSystem, newLow: number, newHigh: number) => Promise<VitalSignMonitorSystem> {
  return async (self, newLow, newHigh) => {
    const preViolations: string[] = [];
    if (!((newLow >= self.plausibleMin))) {
      preViolations.push("[VitalSignMonitorSystem.configureThresholds] pre violated: newLow >= self.plausibleMin");
    }
    if (!((newHigh <= self.plausibleMax))) {
      preViolations.push("[VitalSignMonitorSystem.configureThresholds] pre violated: newHigh <= self.plausibleMax");
    }
    if (!((newLow < newHigh))) {
      preViolations.push("[VitalSignMonitorSystem.configureThresholds] pre violated: newLow < newHigh");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newLow, newHigh);
      const postViolations: string[] = [];
      if (!((__result.self.lowAlarmThreshold === newLow))) {
        postViolations.push("[VitalSignMonitorSystem.configureThresholds] post violated: self.lowAlarmThreshold = newLow");
      }
      if (!((__result.self.highAlarmThreshold === newHigh))) {
        postViolations.push("[VitalSignMonitorSystem.configureThresholds] post violated: self.highAlarmThreshold = newHigh");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.rejectImplausibleReading. User supplies this. */
export type VitalSignMonitorSystemFormalizedRejectImplausibleReadingImpl = (self: VitalSignMonitorSystemFormalized, heartRate: number, timestamp: number) => { self: VitalSignMonitorSystemFormalized; modified: { rejectionCounter: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.rejectImplausibleReading. */
export function wrapVitalSignMonitorSystemFormalizedRejectImplausibleReading(impl: VitalSignMonitorSystemFormalizedRejectImplausibleReadingImpl): (self: VitalSignMonitorSystemFormalized, heartRate: number, timestamp: number) => VitalSignMonitorSystemFormalized {
  return (self, heartRate, timestamp) => {
    const preViolations: string[] = [];
    if (!(((heartRate < self.plausibleMin) || (heartRate > self.plausibleMax)))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] pre violated: heartRate < self.plausibleMin or heartRate > self.plausibleMax");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCounter": self.rejectionCounter,
      "self.displayValue": self.displayValue,
      "self.isDisplaying": self.isDisplaying,
      "self.currentHeartRate": self.currentHeartRate,
      "self.lastSignalAt": self.lastSignalAt,
      "self.sensorConnected": self.sensorConnected,
      "self.disconnectAlarmRaised": self.disconnectAlarmRaised,
      "self.alarmRaised": self.alarmRaised,
      "self.alarmRaisedAt": self.alarmRaisedAt,
      "self.alarmSilenced": self.alarmSilenced,
      "self.silenceStartedAt": self.silenceStartedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, heartRate, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.rejectionCounter === (__pre["self.rejectionCounter"] + 1)))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.rejectionCounter = self.rejectionCounter@pre + 1");
      }
      if (!((__result.self.displayValue === __pre["self.displayValue"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.displayValue = self.displayValue@pre");
      }
      if (!((__result.self.isDisplaying === __pre["self.isDisplaying"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.isDisplaying = self.isDisplaying@pre");
      }
      if (!((__result.self.currentHeartRate === __pre["self.currentHeartRate"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.currentHeartRate = self.currentHeartRate@pre");
      }
      if (!((__result.self.lastSignalAt === __pre["self.lastSignalAt"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.lastSignalAt = self.lastSignalAt@pre");
      }
      if (!((__result.self.sensorConnected === __pre["self.sensorConnected"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.sensorConnected = self.sensorConnected@pre");
      }
      if (!((__result.self.disconnectAlarmRaised === __pre["self.disconnectAlarmRaised"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.disconnectAlarmRaised = self.disconnectAlarmRaised@pre");
      }
      if (!((__result.self.alarmRaised === __pre["self.alarmRaised"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.alarmRaised = self.alarmRaised@pre");
      }
      if (!((__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.alarmRaisedAt = self.alarmRaisedAt@pre");
      }
      if (!((__result.self.alarmSilenced === __pre["self.alarmSilenced"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.alarmSilenced = self.alarmSilenced@pre");
      }
      if (!((__result.self.silenceStartedAt === __pre["self.silenceStartedAt"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.silenceStartedAt = self.silenceStartedAt@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.rejectImplausibleReading (async). User supplies this. */
export type VitalSignMonitorSystemFormalizedRejectImplausibleReadingAsyncImpl = (self: VitalSignMonitorSystemFormalized, heartRate: number, timestamp: number) => Promise<{ self: VitalSignMonitorSystemFormalized; modified: { rejectionCounter: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.rejectImplausibleReading (async). */
export function wrapVitalSignMonitorSystemFormalizedRejectImplausibleReadingAsync(impl: VitalSignMonitorSystemFormalizedRejectImplausibleReadingAsyncImpl): (self: VitalSignMonitorSystemFormalized, heartRate: number, timestamp: number) => Promise<VitalSignMonitorSystemFormalized> {
  return async (self, heartRate, timestamp) => {
    const preViolations: string[] = [];
    if (!(((heartRate < self.plausibleMin) || (heartRate > self.plausibleMax)))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] pre violated: heartRate < self.plausibleMin or heartRate > self.plausibleMax");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.rejectionCounter": self.rejectionCounter,
      "self.displayValue": self.displayValue,
      "self.isDisplaying": self.isDisplaying,
      "self.currentHeartRate": self.currentHeartRate,
      "self.lastSignalAt": self.lastSignalAt,
      "self.sensorConnected": self.sensorConnected,
      "self.disconnectAlarmRaised": self.disconnectAlarmRaised,
      "self.alarmRaised": self.alarmRaised,
      "self.alarmRaisedAt": self.alarmRaisedAt,
      "self.alarmSilenced": self.alarmSilenced,
      "self.silenceStartedAt": self.silenceStartedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, heartRate, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.rejectionCounter === (__pre["self.rejectionCounter"] + 1)))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.rejectionCounter = self.rejectionCounter@pre + 1");
      }
      if (!((__result.self.displayValue === __pre["self.displayValue"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.displayValue = self.displayValue@pre");
      }
      if (!((__result.self.isDisplaying === __pre["self.isDisplaying"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.isDisplaying = self.isDisplaying@pre");
      }
      if (!((__result.self.currentHeartRate === __pre["self.currentHeartRate"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.currentHeartRate = self.currentHeartRate@pre");
      }
      if (!((__result.self.lastSignalAt === __pre["self.lastSignalAt"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.lastSignalAt = self.lastSignalAt@pre");
      }
      if (!((__result.self.sensorConnected === __pre["self.sensorConnected"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.sensorConnected = self.sensorConnected@pre");
      }
      if (!((__result.self.disconnectAlarmRaised === __pre["self.disconnectAlarmRaised"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.disconnectAlarmRaised = self.disconnectAlarmRaised@pre");
      }
      if (!((__result.self.alarmRaised === __pre["self.alarmRaised"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.alarmRaised = self.alarmRaised@pre");
      }
      if (!((__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.alarmRaisedAt = self.alarmRaisedAt@pre");
      }
      if (!((__result.self.alarmSilenced === __pre["self.alarmSilenced"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.alarmSilenced = self.alarmSilenced@pre");
      }
      if (!((__result.self.silenceStartedAt === __pre["self.silenceStartedAt"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.rejectImplausibleReading] post violated: self.silenceStartedAt = self.silenceStartedAt@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.enforceAlarmLatency. User supplies this. */
export type VitalSignMonitorSystemFormalizedEnforceAlarmLatencyImpl = (self: VitalSignMonitorSystemFormalized, currentTime: number) => { self: VitalSignMonitorSystemFormalized; modified: { alarmRaised: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.enforceAlarmLatency. */
export function wrapVitalSignMonitorSystemFormalizedEnforceAlarmLatency(impl: VitalSignMonitorSystemFormalizedEnforceAlarmLatencyImpl): (self: VitalSignMonitorSystemFormalized, currentTime: number) => VitalSignMonitorSystemFormalized {
  return (self, currentTime) => {
    const preViolations: string[] = [];
    if (!(self.alarmRaised)) {
      preViolations.push("[VitalSignMonitorSystemFormalized.enforceAlarmLatency] pre violated: self.alarmRaised");
    }
    if (!((currentTime >= 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.enforceAlarmLatency] pre violated: currentTime >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmRaised": self.alarmRaised,
      "self.alarmRaisedAt": self.alarmRaisedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTime);
      const postViolations: string[] = [];
      if (!(((((currentTime - __result.self.alarmRaisedAt) > __result.self.alarmLatencyBudgetSeconds)) ? ((__result.self.alarmRaised === true)) : ((__result.self.alarmRaised === __pre["self.alarmRaised"]))))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.enforceAlarmLatency] post violated: if (currentTime - self.alarmRaisedAt) > self.alarmLatencyBudgetSeconds then\n            self.alarmRaised = true   \n          else\n            self.alarmRaised = self.alarmRaised@pre\n          endif");
      }
      if (!((__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.enforceAlarmLatency] post violated: self.alarmRaisedAt = self.alarmRaisedAt@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.enforceAlarmLatency (async). User supplies this. */
export type VitalSignMonitorSystemFormalizedEnforceAlarmLatencyAsyncImpl = (self: VitalSignMonitorSystemFormalized, currentTime: number) => Promise<{ self: VitalSignMonitorSystemFormalized; modified: { alarmRaised: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.enforceAlarmLatency (async). */
export function wrapVitalSignMonitorSystemFormalizedEnforceAlarmLatencyAsync(impl: VitalSignMonitorSystemFormalizedEnforceAlarmLatencyAsyncImpl): (self: VitalSignMonitorSystemFormalized, currentTime: number) => Promise<VitalSignMonitorSystemFormalized> {
  return async (self, currentTime) => {
    const preViolations: string[] = [];
    if (!(self.alarmRaised)) {
      preViolations.push("[VitalSignMonitorSystemFormalized.enforceAlarmLatency] pre violated: self.alarmRaised");
    }
    if (!((currentTime >= 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.enforceAlarmLatency] pre violated: currentTime >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmRaised": self.alarmRaised,
      "self.alarmRaisedAt": self.alarmRaisedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTime);
      const postViolations: string[] = [];
      if (!(((((currentTime - __result.self.alarmRaisedAt) > __result.self.alarmLatencyBudgetSeconds)) ? ((__result.self.alarmRaised === true)) : ((__result.self.alarmRaised === __pre["self.alarmRaised"]))))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.enforceAlarmLatency] post violated: if (currentTime - self.alarmRaisedAt) > self.alarmLatencyBudgetSeconds then\n            self.alarmRaised = true   \n          else\n            self.alarmRaised = self.alarmRaised@pre\n          endif");
      }
      if (!((__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"]))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.enforceAlarmLatency] post violated: self.alarmRaisedAt = self.alarmRaisedAt@pre");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.assertSensorDisconnect. User supplies this. */
export type VitalSignMonitorSystemFormalizedAssertSensorDisconnectImpl = (self: VitalSignMonitorSystemFormalized, currentTime: number) => { self: VitalSignMonitorSystemFormalized; modified: { sensorConnected: unknown; disconnectAlarmRaised: unknown; alarmRaised: unknown; alarmRaisedAt: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.assertSensorDisconnect. */
export function wrapVitalSignMonitorSystemFormalizedAssertSensorDisconnect(impl: VitalSignMonitorSystemFormalizedAssertSensorDisconnectImpl): (self: VitalSignMonitorSystemFormalized, currentTime: number) => VitalSignMonitorSystemFormalized {
  return (self, currentTime) => {
    const preViolations: string[] = [];
    if (!(self.sensorConnected)) {
      preViolations.push("[VitalSignMonitorSystemFormalized.assertSensorDisconnect] pre violated: self.sensorConnected");
    }
    if (!((currentTime >= 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.assertSensorDisconnect] pre violated: currentTime >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sensorConnected": self.sensorConnected,
      "self.disconnectAlarmRaised": self.disconnectAlarmRaised,
      "self.alarmRaised": self.alarmRaised,
      "self.alarmRaisedAt": self.alarmRaisedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTime);
      const postViolations: string[] = [];
      if (!(((((currentTime - __result.self.lastSignalAt) > __result.self.disconnectThresholdSeconds)) ? (((((__result.self.sensorConnected === false) && (__result.self.disconnectAlarmRaised === true)) && (__result.self.alarmRaised === true)) && (__result.self.alarmRaisedAt === currentTime))) : (((((__result.self.sensorConnected === __pre["self.sensorConnected"]) && (__result.self.disconnectAlarmRaised === __pre["self.disconnectAlarmRaised"])) && (__result.self.alarmRaised === __pre["self.alarmRaised"])) && (__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"])))))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.assertSensorDisconnect] post violated: if (currentTime - self.lastSignalAt) > self.disconnectThresholdSeconds then\n            self.sensorConnected = false\n            and self.disconnectAlarmRaised = true\n            and self.alarmRaised = true\n            and self.alarmRaisedAt = currentTime\n          else\n            self.sensorConnected = self.sensorConnected@pre\n            and self.disconnectAlarmRaised = self.disconnectAlarmRaised@pre\n            and self.alarmRaised = self.alarmRaised@pre\n            and self.alarmRaisedAt = self.alarmRaisedAt@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.assertSensorDisconnect (async). User supplies this. */
export type VitalSignMonitorSystemFormalizedAssertSensorDisconnectAsyncImpl = (self: VitalSignMonitorSystemFormalized, currentTime: number) => Promise<{ self: VitalSignMonitorSystemFormalized; modified: { sensorConnected: unknown; disconnectAlarmRaised: unknown; alarmRaised: unknown; alarmRaisedAt: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.assertSensorDisconnect (async). */
export function wrapVitalSignMonitorSystemFormalizedAssertSensorDisconnectAsync(impl: VitalSignMonitorSystemFormalizedAssertSensorDisconnectAsyncImpl): (self: VitalSignMonitorSystemFormalized, currentTime: number) => Promise<VitalSignMonitorSystemFormalized> {
  return async (self, currentTime) => {
    const preViolations: string[] = [];
    if (!(self.sensorConnected)) {
      preViolations.push("[VitalSignMonitorSystemFormalized.assertSensorDisconnect] pre violated: self.sensorConnected");
    }
    if (!((currentTime >= 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.assertSensorDisconnect] pre violated: currentTime >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.sensorConnected": self.sensorConnected,
      "self.disconnectAlarmRaised": self.disconnectAlarmRaised,
      "self.alarmRaised": self.alarmRaised,
      "self.alarmRaisedAt": self.alarmRaisedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTime);
      const postViolations: string[] = [];
      if (!(((((currentTime - __result.self.lastSignalAt) > __result.self.disconnectThresholdSeconds)) ? (((((__result.self.sensorConnected === false) && (__result.self.disconnectAlarmRaised === true)) && (__result.self.alarmRaised === true)) && (__result.self.alarmRaisedAt === currentTime))) : (((((__result.self.sensorConnected === __pre["self.sensorConnected"]) && (__result.self.disconnectAlarmRaised === __pre["self.disconnectAlarmRaised"])) && (__result.self.alarmRaised === __pre["self.alarmRaised"])) && (__result.self.alarmRaisedAt === __pre["self.alarmRaisedAt"])))))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.assertSensorDisconnect] post violated: if (currentTime - self.lastSignalAt) > self.disconnectThresholdSeconds then\n            self.sensorConnected = false\n            and self.disconnectAlarmRaised = true\n            and self.alarmRaised = true\n            and self.alarmRaisedAt = currentTime\n          else\n            self.sensorConnected = self.sensorConnected@pre\n            and self.disconnectAlarmRaised = self.disconnectAlarmRaised@pre\n            and self.alarmRaised = self.alarmRaised@pre\n            and self.alarmRaisedAt = self.alarmRaisedAt@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.autoRearmAlarm. User supplies this. */
export type VitalSignMonitorSystemFormalizedAutoRearmAlarmImpl = (self: VitalSignMonitorSystemFormalized, currentTime: number) => { self: VitalSignMonitorSystemFormalized; modified: { alarmSilenced: unknown; silenceStartedAt: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.autoRearmAlarm. */
export function wrapVitalSignMonitorSystemFormalizedAutoRearmAlarm(impl: VitalSignMonitorSystemFormalizedAutoRearmAlarmImpl): (self: VitalSignMonitorSystemFormalized, currentTime: number) => VitalSignMonitorSystemFormalized {
  return (self, currentTime) => {
    const preViolations: string[] = [];
    if (!(self.alarmSilenced)) {
      preViolations.push("[VitalSignMonitorSystemFormalized.autoRearmAlarm] pre violated: self.alarmSilenced");
    }
    if (!((self.silenceStartedAt > 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.autoRearmAlarm] pre violated: self.silenceStartedAt > 0.0");
    }
    if (!((currentTime >= 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.autoRearmAlarm] pre violated: currentTime >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmSilenced": self.alarmSilenced,
      "self.silenceStartedAt": self.silenceStartedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, currentTime);
      const postViolations: string[] = [];
      if (!(((((currentTime - __result.self.silenceStartedAt) >= __result.self.autoRearmSeconds)) ? (((__result.self.alarmSilenced === false) && (__result.self.silenceStartedAt === 0))) : (((__result.self.alarmSilenced === __pre["self.alarmSilenced"]) && (__result.self.silenceStartedAt === __pre["self.silenceStartedAt"])))))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.autoRearmAlarm] post violated: if (currentTime - self.silenceStartedAt) >= self.autoRearmSeconds then\n            self.alarmSilenced = false\n            and self.silenceStartedAt = 0.0\n          else\n            self.alarmSilenced = self.alarmSilenced@pre\n            and self.silenceStartedAt = self.silenceStartedAt@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.autoRearmAlarm (async). User supplies this. */
export type VitalSignMonitorSystemFormalizedAutoRearmAlarmAsyncImpl = (self: VitalSignMonitorSystemFormalized, currentTime: number) => Promise<{ self: VitalSignMonitorSystemFormalized; modified: { alarmSilenced: unknown; silenceStartedAt: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.autoRearmAlarm (async). */
export function wrapVitalSignMonitorSystemFormalizedAutoRearmAlarmAsync(impl: VitalSignMonitorSystemFormalizedAutoRearmAlarmAsyncImpl): (self: VitalSignMonitorSystemFormalized, currentTime: number) => Promise<VitalSignMonitorSystemFormalized> {
  return async (self, currentTime) => {
    const preViolations: string[] = [];
    if (!(self.alarmSilenced)) {
      preViolations.push("[VitalSignMonitorSystemFormalized.autoRearmAlarm] pre violated: self.alarmSilenced");
    }
    if (!((self.silenceStartedAt > 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.autoRearmAlarm] pre violated: self.silenceStartedAt > 0.0");
    }
    if (!((currentTime >= 0))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.autoRearmAlarm] pre violated: currentTime >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.alarmSilenced": self.alarmSilenced,
      "self.silenceStartedAt": self.silenceStartedAt,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, currentTime);
      const postViolations: string[] = [];
      if (!(((((currentTime - __result.self.silenceStartedAt) >= __result.self.autoRearmSeconds)) ? (((__result.self.alarmSilenced === false) && (__result.self.silenceStartedAt === 0))) : (((__result.self.alarmSilenced === __pre["self.alarmSilenced"]) && (__result.self.silenceStartedAt === __pre["self.silenceStartedAt"])))))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.autoRearmAlarm] post violated: if (currentTime - self.silenceStartedAt) >= self.autoRearmSeconds then\n            self.alarmSilenced = false\n            and self.silenceStartedAt = 0.0\n          else\n            self.alarmSilenced = self.alarmSilenced@pre\n            and self.silenceStartedAt = self.silenceStartedAt@pre\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.configureThresholdsRegulated. User supplies this. */
export type VitalSignMonitorSystemFormalizedConfigureThresholdsRegulatedImpl = (self: VitalSignMonitorSystemFormalized, newLow: number, newHigh: number) => { self: VitalSignMonitorSystemFormalized; modified: { lowAlarmThreshold: unknown; highAlarmThreshold: unknown } };

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.configureThresholdsRegulated. */
export function wrapVitalSignMonitorSystemFormalizedConfigureThresholdsRegulated(impl: VitalSignMonitorSystemFormalizedConfigureThresholdsRegulatedImpl): (self: VitalSignMonitorSystemFormalized, newLow: number, newHigh: number) => VitalSignMonitorSystemFormalized {
  return (self, newLow, newHigh) => {
    const preViolations: string[] = [];
    if (!((newLow >= 20))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] pre violated: newLow >= 20.0");
    }
    if (!((newHigh <= 250))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] pre violated: newHigh <= 250.0");
    }
    if (!((newLow < newHigh))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] pre violated: newLow < newHigh");
    }
    if (!((newHigh > newLow))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] pre violated: newHigh > newLow");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newLow, newHigh);
      const postViolations: string[] = [];
      if (!((__result.self.lowAlarmThreshold === newLow))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] post violated: self.lowAlarmThreshold = newLow");
      }
      if (!((__result.self.highAlarmThreshold === newHigh))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] post violated: self.highAlarmThreshold = newHigh");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for VitalSignMonitorSystemFormalized.configureThresholdsRegulated (async). User supplies this. */
export type VitalSignMonitorSystemFormalizedConfigureThresholdsRegulatedAsyncImpl = (self: VitalSignMonitorSystemFormalized, newLow: number, newHigh: number) => Promise<{ self: VitalSignMonitorSystemFormalized; modified: { lowAlarmThreshold: unknown; highAlarmThreshold: unknown } }>;

/** Contract-checking wrapper for VitalSignMonitorSystemFormalized.configureThresholdsRegulated (async). */
export function wrapVitalSignMonitorSystemFormalizedConfigureThresholdsRegulatedAsync(impl: VitalSignMonitorSystemFormalizedConfigureThresholdsRegulatedAsyncImpl): (self: VitalSignMonitorSystemFormalized, newLow: number, newHigh: number) => Promise<VitalSignMonitorSystemFormalized> {
  return async (self, newLow, newHigh) => {
    const preViolations: string[] = [];
    if (!((newLow >= 20))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] pre violated: newLow >= 20.0");
    }
    if (!((newHigh <= 250))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] pre violated: newHigh <= 250.0");
    }
    if (!((newLow < newHigh))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] pre violated: newLow < newHigh");
    }
    if (!((newHigh > newLow))) {
      preViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] pre violated: newHigh > newLow");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newLow, newHigh);
      const postViolations: string[] = [];
      if (!((__result.self.lowAlarmThreshold === newLow))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] post violated: self.lowAlarmThreshold = newLow");
      }
      if (!((__result.self.highAlarmThreshold === newHigh))) {
        postViolations.push("[VitalSignMonitorSystemFormalized.configureThresholdsRegulated] post violated: self.highAlarmThreshold = newHigh");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for RejectImplausibleCommitment commitments. */
export class RejectImplausibleCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<RejectImplausibleCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a RejectImplausibleCommitment — the typed wrapper guarantees that since
    // `register` only accepts RejectImplausibleCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: RejectImplausibleCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: RejectImplausibleCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: RejectImplausibleCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: RejectImplausibleCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<RejectImplausibleCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<RejectImplausibleCommitment>[];
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

