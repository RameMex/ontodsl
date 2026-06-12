// ═══════════════════════════════════════════════════════════════════
// AUTO-GENERATED from Onto DSL. Do not edit.
// Regenerate via `renderTypeScript(ast)` or the codegen CLI.
// ═══════════════════════════════════════════════════════════════════

// ─── Branded identity types ───

/** Identity type for BloodSugarSensor. Runtime: string. Compile-time: branded. */
export type BloodSugarSensorId = string & { readonly __brand: "BloodSugarSensorId" };
/** Identity type for DoseCalculator. Runtime: string. Compile-time: branded. */
export type DoseCalculatorId = string & { readonly __brand: "DoseCalculatorId" };
/** Identity type for SensorChannel. Runtime: string. Compile-time: branded. */
export type SensorChannelId = string & { readonly __brand: "SensorChannelId" };
/** Identity type for PumpActuator. Runtime: string. Compile-time: branded. */
export type PumpActuatorId = string & { readonly __brand: "PumpActuatorId" };
/** Identity type for DoseCommandChannel. Runtime: string. Compile-time: branded. */
export type DoseCommandChannelId = string & { readonly __brand: "DoseCommandChannelId" };
/** Identity type for HardwareFaultDetector. Runtime: string. Compile-time: branded. */
export type HardwareFaultDetectorId = string & { readonly __brand: "HardwareFaultDetectorId" };
/** Identity type for FaultChannel. Runtime: string. Compile-time: branded. */
export type FaultChannelId = string & { readonly __brand: "FaultChannelId" };
/** Identity type for AlarmManager. Runtime: string. Compile-time: branded. */
export type AlarmManagerId = string & { readonly __brand: "AlarmManagerId" };
/** Identity type for ReservoirLowChannel. Runtime: string. Compile-time: branded. */
export type ReservoirLowChannelId = string & { readonly __brand: "ReservoirLowChannelId" };
/** Identity type for DoseDeliveryFlowDesign. Runtime: string. Compile-time: branded. */
export type DoseDeliveryFlowDesignId = string & { readonly __brand: "DoseDeliveryFlowDesignId" };
/** Identity type for FaultDetectionFlowDesign. Runtime: string. Compile-time: branded. */
export type FaultDetectionFlowDesignId = string & { readonly __brand: "FaultDetectionFlowDesignId" };
/** Identity type for LowReservoirFlowDesign. Runtime: string. Compile-time: branded. */
export type LowReservoirFlowDesignId = string & { readonly __brand: "LowReservoirFlowDesignId" };
/** Identity type for Patient. Runtime: string. Compile-time: branded. */
export type PatientId = string & { readonly __brand: "PatientId" };
/** Identity type for Clinician. Runtime: string. Compile-time: branded. */
export type ClinicianId = string & { readonly __brand: "ClinicianId" };
/** Identity type for PumpVendor. Runtime: string. Compile-time: branded. */
export type PumpVendorId = string & { readonly __brand: "PumpVendorId" };
/** Identity type for BloodSugarReading. Runtime: string. Compile-time: branded. */
export type BloodSugarReadingId = string & { readonly __brand: "BloodSugarReadingId" };
/** Identity type for InsulinReservoir. Runtime: string. Compile-time: branded. */
export type InsulinReservoirId = string & { readonly __brand: "InsulinReservoirId" };
/** Identity type for SelfTestResult. Runtime: string. Compile-time: branded. */
export type SelfTestResultId = string & { readonly __brand: "SelfTestResultId" };
/** Identity type for AlarmCondition. Runtime: string. Compile-time: branded. */
export type AlarmConditionId = string & { readonly __brand: "AlarmConditionId" };
/** Identity type for InsulinPumpSystem. Runtime: string. Compile-time: branded. */
export type InsulinPumpSystemId = string & { readonly __brand: "InsulinPumpSystemId" };
/** Identity type for CorrectDoseCommitment. Runtime: string. Compile-time: branded. */
export type CorrectDoseCommitmentId = string & { readonly __brand: "CorrectDoseCommitmentId" };
/** Identity type for FailSafeCommitment. Runtime: string. Compile-time: branded. */
export type FailSafeCommitmentId = string & { readonly __brand: "FailSafeCommitmentId" };
/** Identity type for AlertPatientCommitment. Runtime: string. Compile-time: branded. */
export type AlertPatientCommitmentId = string & { readonly __brand: "AlertPatientCommitmentId" };
/** Identity type for DoseDeliveryFlow. Runtime: string. Compile-time: branded. */
export type DoseDeliveryFlowId = string & { readonly __brand: "DoseDeliveryFlowId" };
/** Identity type for HardwareFaultFlow. Runtime: string. Compile-time: branded. */
export type HardwareFaultFlowId = string & { readonly __brand: "HardwareFaultFlowId" };
/** Identity type for LowReservoirAlertFlow. Runtime: string. Compile-time: branded. */
export type LowReservoirAlertFlowId = string & { readonly __brand: "LowReservoirAlertFlowId" };
/** Identity type for InsulinPumpControlSystem. Runtime: string. Compile-time: branded. */
export type InsulinPumpControlSystemId = string & { readonly __brand: "InsulinPumpControlSystemId" };
/** Identity type for FormalAssumptionRecord. Runtime: string. Compile-time: branded. */
export type FormalAssumptionRecordId = string & { readonly __brand: "FormalAssumptionRecordId" };

// ─── Interfaces ───

/** @stereotype <<Kind>> */
export interface BloodSugarSensor {
  readonly sensorId: BloodSugarSensorId;
  readonly lastReadingMgDl: number;
  readonly lastRateMgDlPerMin: number;
  readonly sensorFaulty: boolean;
  readonly readingTimestamp: number;
}

/** @stereotype <<Role>> */
export interface SensorEndpoint {
  readonly lastReadingMgDl: number;
  readonly readingTimestamp: number;
  readonly sensorFaulty: boolean;
}

/** @stereotype <<Kind>> */
export interface DoseCalculator {
  readonly calculatorId: DoseCalculatorId;
  readonly safeMaxDoseUnits: number;
  readonly safeZoneUpperBound: number;
  readonly lastComputedDose: number;
  readonly lastCalculationTime: number;
  readonly dosingCheckIntervalSeconds: number;
}

/** @stereotype <<Role>> */
export interface CalculatorEndpoint {
  readonly lastComputedDose: number;
  readonly safeMaxDoseUnits: number;
  readonly safeZoneUpperBound: number;
}

/** @stereotype <<Relator>> */
export interface SensorChannel {
  readonly channelId: SensorChannelId;
  readonly lastTransmittedReadingMgDl: number;
  readonly lastTransmittedRateMgDlPerMin: number;
  readonly transmissionTimestamp: number;
  readonly isActive: boolean;
}

/** @stereotype <<Kind>> */
export interface PumpActuator {
  readonly actuatorId: PumpActuatorId;
  readonly reservoirUnits: number;
  readonly reservoirCapacityUnits: number;
  readonly isLowReservoir: boolean;
  readonly delivering: boolean;
  readonly lastDeliveredDose: number;
  readonly lastDoseTime: number;
  readonly actuatorFaulty: boolean;
}

/** @stereotype <<Role>> */
export interface ActuatorEndpoint {
  readonly reservoirUnits: number;
  readonly delivering: boolean;
  readonly actuatorFaulty: boolean;
}

/** @stereotype <<Relator>> */
export interface DoseCommandChannel {
  readonly channelId: DoseCommandChannelId;
  readonly lastCommandedDose: number;
  readonly commandTimestamp: number;
  readonly commandAcknowledged: boolean;
}

/** @stereotype <<Kind>> */
export interface HardwareFaultDetector {
  readonly detectorId: HardwareFaultDetectorId;
  readonly sensorOk: boolean;
  readonly pumpOk: boolean;
  readonly needleOk: boolean;
  readonly allOk: boolean;
  readonly faultDetected: boolean;
  readonly faultReason: string;
  readonly lastTestTime: number;
  readonly selfTestIntervalSeconds: number;
}

/** @stereotype <<Role>> */
export interface FaultDetectorEndpoint {
  readonly faultDetected: boolean;
  readonly faultReason: string;
  readonly allOk: boolean;
}

/** @stereotype <<Relator>> */
export interface FaultChannel {
  readonly channelId: FaultChannelId;
  readonly lastFaultDetected: boolean;
  readonly lastFaultReason: string;
  readonly alarmRaised: boolean;
}

/** @stereotype <<Role>> */
export interface AlarmEndpoint {
  readonly alarmActive: boolean;
  readonly lowReservoirAlarmActive: boolean;
  readonly malfunctionAlarmActive: boolean;
}

/** @stereotype <<Kind>> */
export interface AlarmManager {
  readonly alarmManagerId: AlarmManagerId;
  readonly alarmActive: boolean;
  readonly lowReservoirAlarmActive: boolean;
  readonly malfunctionAlarmActive: boolean;
  readonly alarmSoundOn: boolean;
}

/** @stereotype <<Relator>> */
export interface ReservoirLowChannel {
  readonly channelId: ReservoirLowChannelId;
  readonly lowReservoirDetected: boolean;
  readonly reservoirLevelUnits: number;
}

/** @stereotype <<Happening>> */
export interface DoseDeliveryFlowDesign {
  readonly flowId: DoseDeliveryFlowDesignId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly steps: string;
  readonly stepCount: number;
}

/** @stereotype <<Happening>> */
export interface FaultDetectionFlowDesign {
  readonly flowId: FaultDetectionFlowDesignId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly steps: string;
  readonly stepCount: number;
}

/** @stereotype <<Happening>> */
export interface LowReservoirFlowDesign {
  readonly flowId: LowReservoirFlowDesignId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly steps: string;
  readonly stepCount: number;
}

/** @stereotype <<Agent>> */
export interface Patient {
  readonly patientId: PatientId;
  readonly hasDiabetes: boolean;
}

/** @stereotype <<Agent>> */
export interface Clinician {
  readonly clinicianId: ClinicianId;
  readonly certification: string;
}

/** @stereotype <<Agent>> */
export interface PumpVendor {
  readonly vendorId: PumpVendorId;
  readonly name: string;
}

/** @stereotype <<Kind>> */
export interface BloodSugarReading {
  readonly readingId: BloodSugarReadingId;
  readonly valueMgDl: number;
  readonly timestamp: number;
}

/** @stereotype <<Kind>> */
export interface InsulinReservoir {
  readonly reservoirId: InsulinReservoirId;
  readonly capacityUnits: number;
  readonly currentLevelUnits: number;
  readonly isLow: boolean;
}

/** @stereotype <<Kind>> */
export interface SelfTestResult {
  readonly resultId: SelfTestResultId;
  readonly sensorOk: boolean;
  readonly pumpOk: boolean;
  readonly needleOk: boolean;
  readonly allOk: boolean;
}

/** @stereotype <<Kind>> */
export interface AlarmCondition {
  readonly alarmId: AlarmConditionId;
  readonly alarmType: string;
  readonly isActive: boolean;
}

/** @stereotype <<Kind>> */
export interface InsulinPumpSystem {
  readonly systemId: InsulinPumpSystemId;
  readonly safeMaxDoseUnits: number;
  readonly alarmActive: boolean;
  readonly deliveryStopped: boolean;
  readonly lowReservoirAlarmActive: boolean;
  readonly malfunctionAlarmActive: boolean;
}

/** @stereotype <<Commitment>> */
export interface CorrectDoseCommitment {
  readonly commitmentId: CorrectDoseCommitmentId;
  readonly safeMaxDoseUnits: number;
}

/** @stereotype <<Commitment>> */
export interface FailSafeCommitment {
  readonly commitmentId: FailSafeCommitmentId;
  readonly alarmActive: boolean;
  readonly deliveryStopped: boolean;
}

/** @stereotype <<Commitment>> */
export interface AlertPatientCommitment {
  readonly commitmentId: AlertPatientCommitmentId;
  readonly lowReservoirAlarmActive: boolean;
  readonly malfunctionAlarmActive: boolean;
}

/** @stereotype <<Category>> */
export interface DoseSafetyConstraints {
}

/** @stereotype <<Happening>> */
export interface DoseDeliveryFlow {
  readonly flowId: DoseDeliveryFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly sensorReading: BloodSugarReading;
  readonly insulinReservoir: InsulinReservoir;
  readonly hasAlarm: boolean;
}

/** @stereotype <<Happening>> */
export interface HardwareFaultFlow {
  readonly flowId: HardwareFaultFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly selfTestResult: SelfTestResult;
  readonly alarmRaised: AlarmCondition;
}

/** @stereotype <<Happening>> */
export interface LowReservoirAlertFlow {
  readonly flowId: LowReservoirAlertFlowId;
  readonly triggeredBy: string;
  readonly outcome: string;
  readonly insulinReservoir: InsulinReservoir;
  readonly alarmRaised: AlarmCondition;
}

/** @stereotype <<Kind>> */
export interface InsulinPumpControlSystem {
  readonly systemId: InsulinPumpControlSystemId;
  readonly safeMaxDoseUnits: number;
  readonly alarmActive: boolean;
  readonly deliveryStopped: boolean;
  readonly lowReservoirAlarmActive: boolean;
  readonly malfunctionAlarmActive: boolean;
  readonly reservoirUnits: number;
  readonly currentBloodSugar: number;
  readonly bloodSugarRate: number;
  readonly isOperating: boolean;
  readonly faultDetected: boolean;
  readonly sensorOk: boolean;
  readonly pumpOk: boolean;
  readonly needleOk: boolean;
  readonly safeZoneUpperBound: number;
  readonly dosingCheckIntervalSeconds: number;
  readonly selfTestIntervalSeconds: number;
}

/** @stereotype <<Category>> */
export interface Fda510kCleared {
}

/** @stereotype <<Category>> */
export interface Iso13485Compliant {
}

/** @stereotype <<Category>> */
export interface Iec62304ClassC {
}

/** @stereotype <<Category>> */
export interface DosePlausibility {
}

/** @stereotype <<Category>> */
export interface BloodSugarPlausibility {
}

/** @stereotype <<Subkind>> */
export interface InsulinPumpSystemFormalized extends InsulinPumpControlSystem {
}

/** @stereotype <<Kind>> */
export interface FormalAssumptionRecord {
  readonly assumptionId: FormalAssumptionRecordId;
  readonly assumptionCode: string;
  readonly description: string;
  readonly domainSource: string;
  readonly status: string;
}


// ─── Factory functions ───

export function makeBloodSugarSensor(data: {
  sensorId: string;
  lastReadingMgDl: number;
  lastRateMgDlPerMin: number;
  sensorFaulty: boolean;
  readingTimestamp: number;
}): BloodSugarSensor {
  return {
    sensorId: data.sensorId as BloodSugarSensorId,
    lastReadingMgDl: data.lastReadingMgDl,
    lastRateMgDlPerMin: data.lastRateMgDlPerMin,
    sensorFaulty: data.sensorFaulty,
    readingTimestamp: data.readingTimestamp,
  };
}

export function makeDoseCalculator(data: {
  calculatorId: string;
  safeMaxDoseUnits: number;
  safeZoneUpperBound: number;
  lastComputedDose: number;
  lastCalculationTime: number;
  dosingCheckIntervalSeconds: number;
}): DoseCalculator {
  return {
    calculatorId: data.calculatorId as DoseCalculatorId,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
    safeZoneUpperBound: data.safeZoneUpperBound,
    lastComputedDose: data.lastComputedDose,
    lastCalculationTime: data.lastCalculationTime,
    dosingCheckIntervalSeconds: data.dosingCheckIntervalSeconds,
  };
}

export function makeSensorChannel(data: {
  channelId: string;
  lastTransmittedReadingMgDl: number;
  lastTransmittedRateMgDlPerMin: number;
  transmissionTimestamp: number;
  isActive: boolean;
}): SensorChannel {
  return {
    channelId: data.channelId as SensorChannelId,
    lastTransmittedReadingMgDl: data.lastTransmittedReadingMgDl,
    lastTransmittedRateMgDlPerMin: data.lastTransmittedRateMgDlPerMin,
    transmissionTimestamp: data.transmissionTimestamp,
    isActive: data.isActive,
  };
}

export function makePumpActuator(data: {
  actuatorId: string;
  reservoirUnits: number;
  reservoirCapacityUnits: number;
  isLowReservoir: boolean;
  delivering: boolean;
  lastDeliveredDose: number;
  lastDoseTime: number;
  actuatorFaulty: boolean;
}): PumpActuator {
  return {
    actuatorId: data.actuatorId as PumpActuatorId,
    reservoirUnits: data.reservoirUnits,
    reservoirCapacityUnits: data.reservoirCapacityUnits,
    isLowReservoir: data.isLowReservoir,
    delivering: data.delivering,
    lastDeliveredDose: data.lastDeliveredDose,
    lastDoseTime: data.lastDoseTime,
    actuatorFaulty: data.actuatorFaulty,
  };
}

export function makeDoseCommandChannel(data: {
  channelId: string;
  lastCommandedDose: number;
  commandTimestamp: number;
  commandAcknowledged: boolean;
}): DoseCommandChannel {
  return {
    channelId: data.channelId as DoseCommandChannelId,
    lastCommandedDose: data.lastCommandedDose,
    commandTimestamp: data.commandTimestamp,
    commandAcknowledged: data.commandAcknowledged,
  };
}

export function makeHardwareFaultDetector(data: {
  detectorId: string;
  sensorOk: boolean;
  pumpOk: boolean;
  needleOk: boolean;
  allOk: boolean;
  faultDetected: boolean;
  faultReason: string;
  lastTestTime: number;
  selfTestIntervalSeconds: number;
}): HardwareFaultDetector {
  return {
    detectorId: data.detectorId as HardwareFaultDetectorId,
    sensorOk: data.sensorOk,
    pumpOk: data.pumpOk,
    needleOk: data.needleOk,
    allOk: data.allOk,
    faultDetected: data.faultDetected,
    faultReason: data.faultReason,
    lastTestTime: data.lastTestTime,
    selfTestIntervalSeconds: data.selfTestIntervalSeconds,
  };
}

export function makeFaultChannel(data: {
  channelId: string;
  lastFaultDetected: boolean;
  lastFaultReason: string;
  alarmRaised: boolean;
}): FaultChannel {
  return {
    channelId: data.channelId as FaultChannelId,
    lastFaultDetected: data.lastFaultDetected,
    lastFaultReason: data.lastFaultReason,
    alarmRaised: data.alarmRaised,
  };
}

export function makeAlarmManager(data: {
  alarmManagerId: string;
  alarmActive: boolean;
  lowReservoirAlarmActive: boolean;
  malfunctionAlarmActive: boolean;
  alarmSoundOn: boolean;
}): AlarmManager {
  return {
    alarmManagerId: data.alarmManagerId as AlarmManagerId,
    alarmActive: data.alarmActive,
    lowReservoirAlarmActive: data.lowReservoirAlarmActive,
    malfunctionAlarmActive: data.malfunctionAlarmActive,
    alarmSoundOn: data.alarmSoundOn,
  };
}

export function makeReservoirLowChannel(data: {
  channelId: string;
  lowReservoirDetected: boolean;
  reservoirLevelUnits: number;
}): ReservoirLowChannel {
  return {
    channelId: data.channelId as ReservoirLowChannelId,
    lowReservoirDetected: data.lowReservoirDetected,
    reservoirLevelUnits: data.reservoirLevelUnits,
  };
}

export function makeDoseDeliveryFlowDesign(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  steps: string;
  stepCount: number;
}): DoseDeliveryFlowDesign {
  return {
    flowId: data.flowId as DoseDeliveryFlowDesignId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    steps: data.steps,
    stepCount: data.stepCount,
  };
}

export function makeFaultDetectionFlowDesign(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  steps: string;
  stepCount: number;
}): FaultDetectionFlowDesign {
  return {
    flowId: data.flowId as FaultDetectionFlowDesignId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    steps: data.steps,
    stepCount: data.stepCount,
  };
}

export function makeLowReservoirFlowDesign(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  steps: string;
  stepCount: number;
}): LowReservoirFlowDesign {
  return {
    flowId: data.flowId as LowReservoirFlowDesignId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    steps: data.steps,
    stepCount: data.stepCount,
  };
}

export function makePatient(data: {
  patientId: string;
  hasDiabetes: boolean;
}): Patient {
  return {
    patientId: data.patientId as PatientId,
    hasDiabetes: data.hasDiabetes,
  };
}

export function makeClinician(data: {
  clinicianId: string;
  certification: string;
}): Clinician {
  return {
    clinicianId: data.clinicianId as ClinicianId,
    certification: data.certification,
  };
}

export function makePumpVendor(data: {
  vendorId: string;
  name: string;
}): PumpVendor {
  return {
    vendorId: data.vendorId as PumpVendorId,
    name: data.name,
  };
}

export function makeBloodSugarReading(data: {
  readingId: string;
  valueMgDl: number;
  timestamp: number;
}): BloodSugarReading {
  return {
    readingId: data.readingId as BloodSugarReadingId,
    valueMgDl: data.valueMgDl,
    timestamp: data.timestamp,
  };
}

export function makeInsulinReservoir(data: {
  reservoirId: string;
  capacityUnits: number;
  currentLevelUnits: number;
  isLow: boolean;
}): InsulinReservoir {
  return {
    reservoirId: data.reservoirId as InsulinReservoirId,
    capacityUnits: data.capacityUnits,
    currentLevelUnits: data.currentLevelUnits,
    isLow: data.isLow,
  };
}

export function makeSelfTestResult(data: {
  resultId: string;
  sensorOk: boolean;
  pumpOk: boolean;
  needleOk: boolean;
  allOk: boolean;
}): SelfTestResult {
  return {
    resultId: data.resultId as SelfTestResultId,
    sensorOk: data.sensorOk,
    pumpOk: data.pumpOk,
    needleOk: data.needleOk,
    allOk: data.allOk,
  };
}

export function makeAlarmCondition(data: {
  alarmId: string;
  alarmType: string;
  isActive: boolean;
}): AlarmCondition {
  return {
    alarmId: data.alarmId as AlarmConditionId,
    alarmType: data.alarmType,
    isActive: data.isActive,
  };
}

export function makeInsulinPumpSystem(data: {
  systemId: string;
  safeMaxDoseUnits: number;
  alarmActive: boolean;
  deliveryStopped: boolean;
  lowReservoirAlarmActive: boolean;
  malfunctionAlarmActive: boolean;
}): InsulinPumpSystem {
  return {
    systemId: data.systemId as InsulinPumpSystemId,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
    alarmActive: data.alarmActive,
    deliveryStopped: data.deliveryStopped,
    lowReservoirAlarmActive: data.lowReservoirAlarmActive,
    malfunctionAlarmActive: data.malfunctionAlarmActive,
  };
}

export function makeCorrectDoseCommitment(data: {
  commitmentId: string;
  safeMaxDoseUnits: number;
}): CorrectDoseCommitment {
  return {
    commitmentId: data.commitmentId as CorrectDoseCommitmentId,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
  };
}

export function makeFailSafeCommitment(data: {
  commitmentId: string;
  alarmActive: boolean;
  deliveryStopped: boolean;
}): FailSafeCommitment {
  return {
    commitmentId: data.commitmentId as FailSafeCommitmentId,
    alarmActive: data.alarmActive,
    deliveryStopped: data.deliveryStopped,
  };
}

export function makeAlertPatientCommitment(data: {
  commitmentId: string;
  lowReservoirAlarmActive: boolean;
  malfunctionAlarmActive: boolean;
}): AlertPatientCommitment {
  return {
    commitmentId: data.commitmentId as AlertPatientCommitmentId,
    lowReservoirAlarmActive: data.lowReservoirAlarmActive,
    malfunctionAlarmActive: data.malfunctionAlarmActive,
  };
}

export function makeDoseDeliveryFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  sensorReading: BloodSugarReading;
  insulinReservoir: InsulinReservoir;
  hasAlarm: boolean;
}): DoseDeliveryFlow {
  return {
    flowId: data.flowId as DoseDeliveryFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    sensorReading: data.sensorReading,
    insulinReservoir: data.insulinReservoir,
    hasAlarm: data.hasAlarm,
  };
}

export function makeHardwareFaultFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  selfTestResult: SelfTestResult;
  alarmRaised: AlarmCondition;
}): HardwareFaultFlow {
  return {
    flowId: data.flowId as HardwareFaultFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    selfTestResult: data.selfTestResult,
    alarmRaised: data.alarmRaised,
  };
}

export function makeLowReservoirAlertFlow(data: {
  flowId: string;
  triggeredBy: string;
  outcome: string;
  insulinReservoir: InsulinReservoir;
  alarmRaised: AlarmCondition;
}): LowReservoirAlertFlow {
  return {
    flowId: data.flowId as LowReservoirAlertFlowId,
    triggeredBy: data.triggeredBy,
    outcome: data.outcome,
    insulinReservoir: data.insulinReservoir,
    alarmRaised: data.alarmRaised,
  };
}

export function makeInsulinPumpControlSystem(data: {
  systemId: string;
  safeMaxDoseUnits: number;
  alarmActive: boolean;
  deliveryStopped: boolean;
  lowReservoirAlarmActive: boolean;
  malfunctionAlarmActive: boolean;
  reservoirUnits: number;
  currentBloodSugar: number;
  bloodSugarRate: number;
  isOperating: boolean;
  faultDetected: boolean;
  sensorOk: boolean;
  pumpOk: boolean;
  needleOk: boolean;
  safeZoneUpperBound: number;
  dosingCheckIntervalSeconds: number;
  selfTestIntervalSeconds: number;
}): InsulinPumpControlSystem {
  return {
    systemId: data.systemId as InsulinPumpControlSystemId,
    safeMaxDoseUnits: data.safeMaxDoseUnits,
    alarmActive: data.alarmActive,
    deliveryStopped: data.deliveryStopped,
    lowReservoirAlarmActive: data.lowReservoirAlarmActive,
    malfunctionAlarmActive: data.malfunctionAlarmActive,
    reservoirUnits: data.reservoirUnits,
    currentBloodSugar: data.currentBloodSugar,
    bloodSugarRate: data.bloodSugarRate,
    isOperating: data.isOperating,
    faultDetected: data.faultDetected,
    sensorOk: data.sensorOk,
    pumpOk: data.pumpOk,
    needleOk: data.needleOk,
    safeZoneUpperBound: data.safeZoneUpperBound,
    dosingCheckIntervalSeconds: data.dosingCheckIntervalSeconds,
    selfTestIntervalSeconds: data.selfTestIntervalSeconds,
  };
}

export function makeFormalAssumptionRecord(data: {
  assumptionId: string;
  assumptionCode: string;
  description: string;
  domainSource: string;
  status: string;
}): FormalAssumptionRecord {
  return {
    assumptionId: data.assumptionId as FormalAssumptionRecordId,
    assumptionCode: data.assumptionCode,
    description: data.description,
    domainSource: data.domainSource,
    status: data.status,
  };
}


// ─── Runtime invariant validators ───

/** Runtime invariant check for BloodSugarSensor. Returns empty array when valid. */
export function validateBloodSugarSensor(instance: BloodSugarSensor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.sensorId !== null))) {
    violations.push("[BloodSugarSensor] invariant violated: self.sensorId <> null");
  }
  if (!((instance.lastReadingMgDl >= 0))) {
    violations.push("[BloodSugarSensor] invariant violated: self.lastReadingMgDl >= 0.0");
  }
  if (!((instance.lastReadingMgDl <= 1000))) {
    violations.push("[BloodSugarSensor] invariant violated: self.lastReadingMgDl <= 1000.0");
  }
  if (!((!(instance.sensorFaulty) || (instance.lastReadingMgDl === 0)))) {
    violations.push("[BloodSugarSensor] invariant violated: self.sensorFaulty implies self.lastReadingMgDl = 0.0");
  }
  return violations;
}

/** Runtime invariant check for DoseCalculator. Returns empty array when valid. */
export function validateDoseCalculator(instance: DoseCalculator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.calculatorId !== null))) {
    violations.push("[DoseCalculator] invariant violated: self.calculatorId <> null");
  }
  if (!((instance.safeMaxDoseUnits > 0))) {
    violations.push("[DoseCalculator] invariant violated: self.safeMaxDoseUnits > 0.0");
  }
  if (!((instance.safeMaxDoseUnits <= 2))) {
    violations.push("[DoseCalculator] invariant violated: self.safeMaxDoseUnits <= 2.0");
  }
  if (!((instance.safeZoneUpperBound >= 0))) {
    violations.push("[DoseCalculator] invariant violated: self.safeZoneUpperBound >= 0.0");
  }
  if (!((instance.lastComputedDose >= 0))) {
    violations.push("[DoseCalculator] invariant violated: self.lastComputedDose >= 0.0");
  }
  if (!((instance.lastComputedDose <= instance.safeMaxDoseUnits))) {
    violations.push("[DoseCalculator] invariant violated: self.lastComputedDose <= self.safeMaxDoseUnits");
  }
  if (!((instance.dosingCheckIntervalSeconds > 0))) {
    violations.push("[DoseCalculator] invariant violated: self.dosingCheckIntervalSeconds > 0.0");
  }
  if (!((instance.dosingCheckIntervalSeconds <= 600))) {
    violations.push("[DoseCalculator] invariant violated: self.dosingCheckIntervalSeconds <= 600.0");
  }
  return violations;
}

/** Runtime invariant check for SensorChannel. Returns empty array when valid. */
export function validateSensorChannel(instance: SensorChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[SensorChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastTransmittedReadingMgDl >= 0))) {
    violations.push("[SensorChannel] invariant violated: self.lastTransmittedReadingMgDl >= 0.0");
  }
  if (!((instance.lastTransmittedReadingMgDl <= 1000))) {
    violations.push("[SensorChannel] invariant violated: self.lastTransmittedReadingMgDl <= 1000.0");
  }
  if (!((instance.lastTransmittedRateMgDlPerMin >= 0))) {
    violations.push("[SensorChannel] invariant violated: self.lastTransmittedRateMgDlPerMin >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for PumpActuator. Returns empty array when valid. */
export function validatePumpActuator(instance: PumpActuator): readonly string[] {
  const violations: string[] = [];
  if (!((instance.actuatorId !== null))) {
    violations.push("[PumpActuator] invariant violated: self.actuatorId <> null");
  }
  if (!((instance.reservoirUnits >= 0))) {
    violations.push("[PumpActuator] invariant violated: self.reservoirUnits >= 0.0");
  }
  if (!((instance.reservoirUnits <= instance.reservoirCapacityUnits))) {
    violations.push("[PumpActuator] invariant violated: self.reservoirUnits <= self.reservoirCapacityUnits");
  }
  if (!((instance.reservoirCapacityUnits > 0))) {
    violations.push("[PumpActuator] invariant violated: self.reservoirCapacityUnits > 0.0");
  }
  if (!((instance.isLowReservoir === (instance.reservoirUnits < 20)))) {
    violations.push("[PumpActuator] invariant violated: self.isLowReservoir = (self.reservoirUnits < 20.0)");
  }
  if (!((instance.lastDeliveredDose >= 0))) {
    violations.push("[PumpActuator] invariant violated: self.lastDeliveredDose >= 0.0");
  }
  if (!((!(instance.actuatorFaulty) || !(instance.delivering)))) {
    violations.push("[PumpActuator] invariant violated: self.actuatorFaulty implies not self.delivering");
  }
  return violations;
}

/** Runtime invariant check for DoseCommandChannel. Returns empty array when valid. */
export function validateDoseCommandChannel(instance: DoseCommandChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[DoseCommandChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastCommandedDose >= 0))) {
    violations.push("[DoseCommandChannel] invariant violated: self.lastCommandedDose >= 0.0");
  }
  if (!((instance.lastCommandedDose <= 2))) {
    violations.push("[DoseCommandChannel] invariant violated: self.lastCommandedDose <= 2.0");
  }
  return violations;
}

/** Runtime invariant check for HardwareFaultDetector. Returns empty array when valid. */
export function validateHardwareFaultDetector(instance: HardwareFaultDetector): readonly string[] {
  const violations: string[] = [];
  if (!((instance.detectorId !== null))) {
    violations.push("[HardwareFaultDetector] invariant violated: self.detectorId <> null");
  }
  if (!((instance.allOk === ((instance.sensorOk && instance.pumpOk) && instance.needleOk)))) {
    violations.push("[HardwareFaultDetector] invariant violated: self.allOk = (self.sensorOk and self.pumpOk and self.needleOk)");
  }
  if (!((instance.faultDetected === !(((instance.sensorOk && instance.pumpOk) && instance.needleOk))))) {
    violations.push("[HardwareFaultDetector] invariant violated: self.faultDetected = (not (self.sensorOk and self.pumpOk and self.needleOk))");
  }
  if (!((instance.selfTestIntervalSeconds > 0))) {
    violations.push("[HardwareFaultDetector] invariant violated: self.selfTestIntervalSeconds > 0.0");
  }
  if (!((instance.selfTestIntervalSeconds <= 60))) {
    violations.push("[HardwareFaultDetector] invariant violated: self.selfTestIntervalSeconds <= 60.0");
  }
  return violations;
}

/** Runtime invariant check for FaultChannel. Returns empty array when valid. */
export function validateFaultChannel(instance: FaultChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[FaultChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.lastFaultReason !== null))) {
    violations.push("[FaultChannel] invariant violated: self.lastFaultReason <> null");
  }
  return violations;
}

/** Runtime invariant check for AlarmManager. Returns empty array when valid. */
export function validateAlarmManager(instance: AlarmManager): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmManagerId !== null))) {
    violations.push("[AlarmManager] invariant violated: self.alarmManagerId <> null");
  }
  if (!((instance.alarmActive === (instance.lowReservoirAlarmActive || instance.malfunctionAlarmActive)))) {
    violations.push("[AlarmManager] invariant violated: self.alarmActive = (self.lowReservoirAlarmActive or self.malfunctionAlarmActive)");
  }
  if (!((!(instance.alarmSoundOn) || instance.alarmActive))) {
    violations.push("[AlarmManager] invariant violated: self.alarmSoundOn implies self.alarmActive");
  }
  return violations;
}

/** Runtime invariant check for ReservoirLowChannel. Returns empty array when valid. */
export function validateReservoirLowChannel(instance: ReservoirLowChannel): readonly string[] {
  const violations: string[] = [];
  if (!((instance.channelId !== null))) {
    violations.push("[ReservoirLowChannel] invariant violated: self.channelId <> null");
  }
  if (!((instance.reservoirLevelUnits >= 0))) {
    violations.push("[ReservoirLowChannel] invariant violated: self.reservoirLevelUnits >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for DoseDeliveryFlowDesign. Returns empty array when valid. */
export function validateDoseDeliveryFlowDesign(instance: DoseDeliveryFlowDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DoseDeliveryFlowDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "timer::dosingCheckInterval"))) {
    violations.push("[DoseDeliveryFlowDesign] invariant violated: self.triggeredBy = 'timer::dosingCheckInterval'");
  }
  if (!((instance.steps === "takeReading,transmitReading,computeDose,sendDoseCommand,deliverInsulin"))) {
    violations.push("[DoseDeliveryFlowDesign] invariant violated: self.steps = 'takeReading,transmitReading,computeDose,sendDoseCommand,deliverInsulin'");
  }
  if (!((instance.stepCount === 5))) {
    violations.push("[DoseDeliveryFlowDesign] invariant violated: self.stepCount = 5");
  }
  if (!((instance.outcome === "dose_delivered"))) {
    violations.push("[DoseDeliveryFlowDesign] invariant violated: self.outcome = 'dose_delivered'");
  }
  return violations;
}

/** Runtime invariant check for FaultDetectionFlowDesign. Returns empty array when valid. */
export function validateFaultDetectionFlowDesign(instance: FaultDetectionFlowDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[FaultDetectionFlowDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "timer::selfTest"))) {
    violations.push("[FaultDetectionFlowDesign] invariant violated: self.triggeredBy = 'timer::selfTest'");
  }
  if (!((instance.steps === "runSelfTest,detectFault,transmitFault,soundMalfunctionAlarm,stopDelivery"))) {
    violations.push("[FaultDetectionFlowDesign] invariant violated: self.steps = 'runSelfTest,detectFault,transmitFault,soundMalfunctionAlarm,stopDelivery'");
  }
  if (!((instance.stepCount === 5))) {
    violations.push("[FaultDetectionFlowDesign] invariant violated: self.stepCount = 5");
  }
  if (!((instance.outcome === "delivery_stopped_and_alarm_sounded"))) {
    violations.push("[FaultDetectionFlowDesign] invariant violated: self.outcome = 'delivery_stopped_and_alarm_sounded'");
  }
  return violations;
}

/** Runtime invariant check for LowReservoirFlowDesign. Returns empty array when valid. */
export function validateLowReservoirFlowDesign(instance: LowReservoirFlowDesign): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[LowReservoirFlowDesign] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy === "monitor::reservoirLevel"))) {
    violations.push("[LowReservoirFlowDesign] invariant violated: self.triggeredBy = 'monitor::reservoirLevel'");
  }
  if (!((instance.steps === "reportLowReservoir,transmitLowReservoir,soundLowReservoirAlarm"))) {
    violations.push("[LowReservoirFlowDesign] invariant violated: self.steps = 'reportLowReservoir,transmitLowReservoir,soundLowReservoirAlarm'");
  }
  if (!((instance.stepCount === 3))) {
    violations.push("[LowReservoirFlowDesign] invariant violated: self.stepCount = 3");
  }
  if (!((instance.outcome === "patient_alerted_low_reservoir"))) {
    violations.push("[LowReservoirFlowDesign] invariant violated: self.outcome = 'patient_alerted_low_reservoir'");
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

/** Runtime invariant check for Clinician. Returns empty array when valid. */
export function validateClinician(instance: Clinician): readonly string[] {
  const violations: string[] = [];
  if (!((instance.clinicianId !== null))) {
    violations.push("[Clinician] invariant violated: self.clinicianId <> null");
  }
  return violations;
}

/** Runtime invariant check for PumpVendor. Returns empty array when valid. */
export function validatePumpVendor(instance: PumpVendor): readonly string[] {
  const violations: string[] = [];
  if (!((instance.vendorId !== null))) {
    violations.push("[PumpVendor] invariant violated: self.vendorId <> null");
  }
  return violations;
}

/** Runtime invariant check for BloodSugarReading. Returns empty array when valid. */
export function validateBloodSugarReading(instance: BloodSugarReading): readonly string[] {
  const violations: string[] = [];
  if (!((instance.readingId !== null))) {
    violations.push("[BloodSugarReading] invariant violated: self.readingId <> null");
  }
  if (!((instance.valueMgDl >= 0))) {
    violations.push("[BloodSugarReading] invariant violated: self.valueMgDl >= 0.0");
  }
  return violations;
}

/** Runtime invariant check for InsulinReservoir. Returns empty array when valid. */
export function validateInsulinReservoir(instance: InsulinReservoir): readonly string[] {
  const violations: string[] = [];
  if (!((instance.reservoirId !== null))) {
    violations.push("[InsulinReservoir] invariant violated: self.reservoirId <> null");
  }
  if (!((instance.capacityUnits > 0))) {
    violations.push("[InsulinReservoir] invariant violated: self.capacityUnits > 0.0");
  }
  if (!((instance.currentLevelUnits >= 0))) {
    violations.push("[InsulinReservoir] invariant violated: self.currentLevelUnits >= 0.0");
  }
  if (!((instance.currentLevelUnits <= instance.capacityUnits))) {
    violations.push("[InsulinReservoir] invariant violated: self.currentLevelUnits <= self.capacityUnits");
  }
  return violations;
}

/** Runtime invariant check for SelfTestResult. Returns empty array when valid. */
export function validateSelfTestResult(instance: SelfTestResult): readonly string[] {
  const violations: string[] = [];
  if (!((instance.resultId !== null))) {
    violations.push("[SelfTestResult] invariant violated: self.resultId <> null");
  }
  if (!((instance.allOk === ((instance.sensorOk && instance.pumpOk) && instance.needleOk)))) {
    violations.push("[SelfTestResult] invariant violated: self.allOk = (self.sensorOk and self.pumpOk and self.needleOk)");
  }
  return violations;
}

/** Runtime invariant check for AlarmCondition. Returns empty array when valid. */
export function validateAlarmCondition(instance: AlarmCondition): readonly string[] {
  const violations: string[] = [];
  if (!((instance.alarmId !== null))) {
    violations.push("[AlarmCondition] invariant violated: self.alarmId <> null");
  }
  return violations;
}

/** Runtime invariant check for InsulinPumpSystem. Returns empty array when valid. */
export function validateInsulinPumpSystem(instance: InsulinPumpSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.safeMaxDoseUnits > 0))) {
    violations.push("[InsulinPumpSystem] invariant violated: self.safeMaxDoseUnits > 0.0");
  }
  return violations;
}

/** Runtime invariant check for DoseSafetyConstraints. Returns empty array when valid. */
export function validateDoseSafetyConstraints(instance: DoseSafetyConstraints): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMaxDoseUnits > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for DoseDeliveryFlow. Returns empty array when valid. */
export function validateDoseDeliveryFlow(instance: DoseDeliveryFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[DoseDeliveryFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[DoseDeliveryFlow] invariant violated: self.triggeredBy <> null");
  }
  return violations;
}

/** Runtime invariant check for HardwareFaultFlow. Returns empty array when valid. */
export function validateHardwareFaultFlow(instance: HardwareFaultFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[HardwareFaultFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[HardwareFaultFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.selfTestResult !== null))) {
    violations.push("[HardwareFaultFlow] invariant violated: self.selfTestResult <> null");
  }
  if (!((instance.selfTestResult?.allOk === false))) {
    violations.push("[HardwareFaultFlow] invariant violated: self.selfTestResult.allOk = false");
  }
  if (!((instance.alarmRaised !== null))) {
    violations.push("[HardwareFaultFlow] invariant violated: self.alarmRaised <> null");
  }
  if (!((instance.alarmRaised?.isActive === true))) {
    violations.push("[HardwareFaultFlow] invariant violated: self.alarmRaised.isActive = true");
  }
  if (!((instance.alarmRaised?.alarmType === "HARDWARE_FAULT"))) {
    violations.push("[HardwareFaultFlow] invariant violated: self.alarmRaised.alarmType = 'HARDWARE_FAULT'");
  }
  if (!((instance.outcome === "delivery_stopped"))) {
    violations.push("[HardwareFaultFlow] invariant violated: self.outcome = 'delivery_stopped'");
  }
  return violations;
}

/** Runtime invariant check for LowReservoirAlertFlow. Returns empty array when valid. */
export function validateLowReservoirAlertFlow(instance: LowReservoirAlertFlow): readonly string[] {
  const violations: string[] = [];
  if (!((instance.flowId !== null))) {
    violations.push("[LowReservoirAlertFlow] invariant violated: self.flowId <> null");
  }
  if (!((instance.triggeredBy !== null))) {
    violations.push("[LowReservoirAlertFlow] invariant violated: self.triggeredBy <> null");
  }
  if (!((instance.insulinReservoir !== null))) {
    violations.push("[LowReservoirAlertFlow] invariant violated: self.insulinReservoir <> null");
  }
  if (!((instance.insulinReservoir?.isLow === true))) {
    violations.push("[LowReservoirAlertFlow] invariant violated: self.insulinReservoir.isLow = true");
  }
  if (!((instance.alarmRaised !== null))) {
    violations.push("[LowReservoirAlertFlow] invariant violated: self.alarmRaised <> null");
  }
  if (!((instance.alarmRaised?.isActive === true))) {
    violations.push("[LowReservoirAlertFlow] invariant violated: self.alarmRaised.isActive = true");
  }
  if (!((instance.alarmRaised?.alarmType === "LOW_RESERVOIR"))) {
    violations.push("[LowReservoirAlertFlow] invariant violated: self.alarmRaised.alarmType = 'LOW_RESERVOIR'");
  }
  if (!((instance.outcome === "patient_alerted"))) {
    violations.push("[LowReservoirAlertFlow] invariant violated: self.outcome = 'patient_alerted'");
  }
  return violations;
}

/** Runtime invariant check for InsulinPumpControlSystem. Returns empty array when valid. */
export function validateInsulinPumpControlSystem(instance: InsulinPumpControlSystem): readonly string[] {
  const violations: string[] = [];
  if (!((instance.systemId !== null))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.systemId <> null");
  }
  if (!((instance.safeMaxDoseUnits > 0))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.safeMaxDoseUnits > 0.0");
  }
  if (!((instance.safeZoneUpperBound >= 0))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.safeZoneUpperBound >= 0.0");
  }
  if (!((instance.reservoirUnits >= 0))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.reservoirUnits >= 0.0");
  }
  if (!((instance.currentBloodSugar >= 0))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.currentBloodSugar >= 0.0");
  }
  if (!((instance.dosingCheckIntervalSeconds > 0))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.dosingCheckIntervalSeconds > 0.0");
  }
  if (!((instance.selfTestIntervalSeconds > 0))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.selfTestIntervalSeconds > 0.0");
  }
  if (!((instance.dosingCheckIntervalSeconds <= 600))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.dosingCheckIntervalSeconds <= 600.0");
  }
  if (!((instance.selfTestIntervalSeconds <= 60))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.selfTestIntervalSeconds <= 60.0");
  }
  if (!((!(instance.faultDetected) || !(instance.isOperating)))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.faultDetected implies not self.isOperating");
  }
  if (!((!(instance.faultDetected) || instance.deliveryStopped))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.faultDetected implies self.deliveryStopped");
  }
  if (!((!(instance.faultDetected) || instance.alarmActive))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.faultDetected implies self.alarmActive");
  }
  if (!((!((instance.lowReservoirAlarmActive || instance.malfunctionAlarmActive)) || instance.alarmActive))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.lowReservoirAlarmActive or self.malfunctionAlarmActive implies self.alarmActive");
  }
  if (!((!(instance.deliveryStopped) || !(instance.isOperating)))) {
    violations.push("[InsulinPumpControlSystem] invariant violated: self.deliveryStopped implies not self.isOperating");
  }
  return violations;
}

/** Runtime invariant check for Fda510kCleared. Returns empty array when valid. */
export function validateFda510kCleared(instance: Fda510kCleared): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMaxDoseUnits >= 0.1 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.dosingCheckIntervalSeconds <= 600.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.selfTestIntervalSeconds <= 60.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for Iso13485Compliant. Returns empty array when valid. */
export function validateIso13485Compliant(instance: Iso13485Compliant): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMaxDoseUnits > 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeZoneUpperBound >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for Iec62304ClassC. Returns empty array when valid. */
export function validateIec62304ClassC(instance: Iec62304ClassC): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.faultDetected implies bearer.deliveryStopped — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.faultDetected implies bearer.alarmActive — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for DosePlausibility. Returns empty array when valid. */
export function validateDosePlausibility(instance: DosePlausibility): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.safeMaxDoseUnits <= 2.0 — reason: bare variable 'bearer' has no binding in this scope
  return violations;
}

/** Runtime invariant check for BloodSugarPlausibility. Returns empty array when valid. */
export function validateBloodSugarPlausibility(instance: BloodSugarPlausibility): readonly string[] {
  const violations: string[] = [];
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentBloodSugar >= 0.0 — reason: bare variable 'bearer' has no binding in this scope
  // SKIPPED invariant (not translatable to runtime TS): bearer.currentBloodSugar <= 1000.0 — reason: bare variable 'bearer' has no binding in this scope
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
  if (!((instance.description !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.description <> null");
  }
  if (!((instance.domainSource !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.domainSource <> null");
  }
  if (!((instance.status !== null))) {
    violations.push("[FormalAssumptionRecord] invariant violated: self.status <> null");
  }
  return violations;
}


// ─── Event handler wrappers ───

/** Impl signature for BloodSugarSensor.takeReading. User supplies this. */
export type BloodSugarSensorTakeReadingImpl = (self: BloodSugarSensor, value: number, timestamp: number) => { self: BloodSugarSensor; modified: { lastReadingMgDl: unknown; readingTimestamp: unknown; sensorFaulty: unknown } };

/** Contract-checking wrapper for BloodSugarSensor.takeReading. */
export function wrapBloodSugarSensorTakeReading(impl: BloodSugarSensorTakeReadingImpl): (self: BloodSugarSensor, value: number, timestamp: number) => BloodSugarSensor {
  return (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value >= 0.0");
    }
    if (!((value <= 1000))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value <= 1000.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastReadingMgDl === value))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.lastReadingMgDl = value");
      }
      if (!((__result.self.readingTimestamp === timestamp))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.readingTimestamp = timestamp");
      }
      if (!((__result.self.sensorFaulty === false))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.sensorFaulty = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.takeReading (async). User supplies this. */
export type BloodSugarSensorTakeReadingAsyncImpl = (self: BloodSugarSensor, value: number, timestamp: number) => Promise<{ self: BloodSugarSensor; modified: { lastReadingMgDl: unknown; readingTimestamp: unknown; sensorFaulty: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensor.takeReading (async). */
export function wrapBloodSugarSensorTakeReadingAsync(impl: BloodSugarSensorTakeReadingAsyncImpl): (self: BloodSugarSensor, value: number, timestamp: number) => Promise<BloodSugarSensor> {
  return async (self, value, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value >= 0.0");
    }
    if (!((value <= 1000))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: value <= 1000.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[BloodSugarSensor.takeReading] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastReadingMgDl === value))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.lastReadingMgDl = value");
      }
      if (!((__result.self.readingTimestamp === timestamp))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.readingTimestamp = timestamp");
      }
      if (!((__result.self.sensorFaulty === false))) {
        postViolations.push("[BloodSugarSensor.takeReading] post violated: self.sensorFaulty = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.reportSensorFault. User supplies this. */
export type BloodSugarSensorReportSensorFaultImpl = (self: BloodSugarSensor) => { self: BloodSugarSensor; modified: { sensorFaulty: unknown } };

/** Contract-checking wrapper for BloodSugarSensor.reportSensorFault. */
export function wrapBloodSugarSensorReportSensorFault(impl: BloodSugarSensorReportSensorFaultImpl): (self: BloodSugarSensor) => BloodSugarSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaulty))) {
      preViolations.push("[BloodSugarSensor.reportSensorFault] pre violated: not self.sensorFaulty");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaulty === true))) {
        postViolations.push("[BloodSugarSensor.reportSensorFault] post violated: self.sensorFaulty = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.reportSensorFault (async). User supplies this. */
export type BloodSugarSensorReportSensorFaultAsyncImpl = (self: BloodSugarSensor) => Promise<{ self: BloodSugarSensor; modified: { sensorFaulty: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensor.reportSensorFault (async). */
export function wrapBloodSugarSensorReportSensorFaultAsync(impl: BloodSugarSensorReportSensorFaultAsyncImpl): (self: BloodSugarSensor) => Promise<BloodSugarSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.sensorFaulty))) {
      preViolations.push("[BloodSugarSensor.reportSensorFault] pre violated: not self.sensorFaulty");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaulty === true))) {
        postViolations.push("[BloodSugarSensor.reportSensorFault] post violated: self.sensorFaulty = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.resetSensor. User supplies this. */
export type BloodSugarSensorResetSensorImpl = (self: BloodSugarSensor) => { self: BloodSugarSensor; modified: { sensorFaulty: unknown; lastReadingMgDl: unknown; lastRateMgDlPerMin: unknown } };

/** Contract-checking wrapper for BloodSugarSensor.resetSensor. */
export function wrapBloodSugarSensorResetSensor(impl: BloodSugarSensorResetSensorImpl): (self: BloodSugarSensor) => BloodSugarSensor {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaulty === true))) {
      preViolations.push("[BloodSugarSensor.resetSensor] pre violated: self.sensorFaulty = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaulty === false))) {
        postViolations.push("[BloodSugarSensor.resetSensor] post violated: self.sensorFaulty = false");
      }
      if (!((__result.self.lastReadingMgDl === 0))) {
        postViolations.push("[BloodSugarSensor.resetSensor] post violated: self.lastReadingMgDl = 0.0");
      }
      if (!((__result.self.lastRateMgDlPerMin === 0))) {
        postViolations.push("[BloodSugarSensor.resetSensor] post violated: self.lastRateMgDlPerMin = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for BloodSugarSensor.resetSensor (async). User supplies this. */
export type BloodSugarSensorResetSensorAsyncImpl = (self: BloodSugarSensor) => Promise<{ self: BloodSugarSensor; modified: { sensorFaulty: unknown; lastReadingMgDl: unknown; lastRateMgDlPerMin: unknown } }>;

/** Contract-checking wrapper for BloodSugarSensor.resetSensor (async). */
export function wrapBloodSugarSensorResetSensorAsync(impl: BloodSugarSensorResetSensorAsyncImpl): (self: BloodSugarSensor) => Promise<BloodSugarSensor> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.sensorFaulty === true))) {
      preViolations.push("[BloodSugarSensor.resetSensor] pre violated: self.sensorFaulty = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.sensorFaulty === false))) {
        postViolations.push("[BloodSugarSensor.resetSensor] post violated: self.sensorFaulty = false");
      }
      if (!((__result.self.lastReadingMgDl === 0))) {
        postViolations.push("[BloodSugarSensor.resetSensor] post violated: self.lastReadingMgDl = 0.0");
      }
      if (!((__result.self.lastRateMgDlPerMin === 0))) {
        postViolations.push("[BloodSugarSensor.resetSensor] post violated: self.lastRateMgDlPerMin = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.computeDose. User supplies this. */
export type DoseCalculatorComputeDoseImpl = (self: DoseCalculator, sugar: number, rate: number, timestamp: number) => { self: DoseCalculator; modified: { lastComputedDose: unknown; lastCalculationTime: unknown } };

/** Contract-checking wrapper for DoseCalculator.computeDose. */
export function wrapDoseCalculatorComputeDose(impl: DoseCalculatorComputeDoseImpl): (self: DoseCalculator, sugar: number, rate: number, timestamp: number) => DoseCalculator {
  return (self, sugar, rate, timestamp) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: sugar >= 0.0");
    }
    if (!((sugar <= 1000))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: sugar <= 1000.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: rate >= 0.0");
    }
    if (!((sugar > self.safeZoneUpperBound))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: sugar > self.safeZoneUpperBound");
    }
    if (!((rate > 0))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: rate > 0.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar, rate, timestamp);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if (timestamp - self.lastCalculationTime) >= self.dosingCheckIntervalSeconds then
            result <= self.safeMaxDoseUnits and result > 0.0
          else
            result = 0.0
          endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastComputedDose = result — unbound variable 'result'
      if (!((__result.self.lastCalculationTime === timestamp))) {
        postViolations.push("[DoseCalculator.computeDose] post violated: self.lastCalculationTime = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.computeDose (async). User supplies this. */
export type DoseCalculatorComputeDoseAsyncImpl = (self: DoseCalculator, sugar: number, rate: number, timestamp: number) => Promise<{ self: DoseCalculator; modified: { lastComputedDose: unknown; lastCalculationTime: unknown } }>;

/** Contract-checking wrapper for DoseCalculator.computeDose (async). */
export function wrapDoseCalculatorComputeDoseAsync(impl: DoseCalculatorComputeDoseAsyncImpl): (self: DoseCalculator, sugar: number, rate: number, timestamp: number) => Promise<DoseCalculator> {
  return async (self, sugar, rate, timestamp) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: sugar >= 0.0");
    }
    if (!((sugar <= 1000))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: sugar <= 1000.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: rate >= 0.0");
    }
    if (!((sugar > self.safeZoneUpperBound))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: sugar > self.safeZoneUpperBound");
    }
    if (!((rate > 0))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: rate > 0.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[DoseCalculator.computeDose] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar, rate, timestamp);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): if (timestamp - self.lastCalculationTime) >= self.dosingCheckIntervalSeconds then
            result <= self.safeMaxDoseUnits and result > 0.0
          else
            result = 0.0
          endif — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.lastComputedDose = result — unbound variable 'result'
      if (!((__result.self.lastCalculationTime === timestamp))) {
        postViolations.push("[DoseCalculator.computeDose] post violated: self.lastCalculationTime = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.setMaxDose. User supplies this. */
export type DoseCalculatorSetMaxDoseImpl = (self: DoseCalculator, newMax: number) => { self: DoseCalculator; modified: { safeMaxDoseUnits: unknown } };

/** Contract-checking wrapper for DoseCalculator.setMaxDose. */
export function wrapDoseCalculatorSetMaxDose(impl: DoseCalculatorSetMaxDoseImpl): (self: DoseCalculator, newMax: number) => DoseCalculator {
  return (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[DoseCalculator.setMaxDose] pre violated: newMax > 0.0");
    }
    if (!((newMax <= 2))) {
      preViolations.push("[DoseCalculator.setMaxDose] pre violated: newMax <= 2.0");
    }
    if (!((self.safeMaxDoseUnits !== newMax))) {
      preViolations.push("[DoseCalculator.setMaxDose] pre violated: self.safeMaxDoseUnits <> newMax");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseUnits === newMax))) {
        postViolations.push("[DoseCalculator.setMaxDose] post violated: self.safeMaxDoseUnits = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.setMaxDose (async). User supplies this. */
export type DoseCalculatorSetMaxDoseAsyncImpl = (self: DoseCalculator, newMax: number) => Promise<{ self: DoseCalculator; modified: { safeMaxDoseUnits: unknown } }>;

/** Contract-checking wrapper for DoseCalculator.setMaxDose (async). */
export function wrapDoseCalculatorSetMaxDoseAsync(impl: DoseCalculatorSetMaxDoseAsyncImpl): (self: DoseCalculator, newMax: number) => Promise<DoseCalculator> {
  return async (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[DoseCalculator.setMaxDose] pre violated: newMax > 0.0");
    }
    if (!((newMax <= 2))) {
      preViolations.push("[DoseCalculator.setMaxDose] pre violated: newMax <= 2.0");
    }
    if (!((self.safeMaxDoseUnits !== newMax))) {
      preViolations.push("[DoseCalculator.setMaxDose] pre violated: self.safeMaxDoseUnits <> newMax");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseUnits === newMax))) {
        postViolations.push("[DoseCalculator.setMaxDose] post violated: self.safeMaxDoseUnits = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.setSafeZone. User supplies this. */
export type DoseCalculatorSetSafeZoneImpl = (self: DoseCalculator, newUpperBound: number) => { self: DoseCalculator; modified: { safeZoneUpperBound: unknown } };

/** Contract-checking wrapper for DoseCalculator.setSafeZone. */
export function wrapDoseCalculatorSetSafeZone(impl: DoseCalculatorSetSafeZoneImpl): (self: DoseCalculator, newUpperBound: number) => DoseCalculator {
  return (self, newUpperBound) => {
    const preViolations: string[] = [];
    if (!((newUpperBound >= 0))) {
      preViolations.push("[DoseCalculator.setSafeZone] pre violated: newUpperBound >= 0.0");
    }
    if (!((self.safeZoneUpperBound !== newUpperBound))) {
      preViolations.push("[DoseCalculator.setSafeZone] pre violated: self.safeZoneUpperBound <> newUpperBound");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newUpperBound);
      const postViolations: string[] = [];
      if (!((__result.self.safeZoneUpperBound === newUpperBound))) {
        postViolations.push("[DoseCalculator.setSafeZone] post violated: self.safeZoneUpperBound = newUpperBound");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.setSafeZone (async). User supplies this. */
export type DoseCalculatorSetSafeZoneAsyncImpl = (self: DoseCalculator, newUpperBound: number) => Promise<{ self: DoseCalculator; modified: { safeZoneUpperBound: unknown } }>;

/** Contract-checking wrapper for DoseCalculator.setSafeZone (async). */
export function wrapDoseCalculatorSetSafeZoneAsync(impl: DoseCalculatorSetSafeZoneAsyncImpl): (self: DoseCalculator, newUpperBound: number) => Promise<DoseCalculator> {
  return async (self, newUpperBound) => {
    const preViolations: string[] = [];
    if (!((newUpperBound >= 0))) {
      preViolations.push("[DoseCalculator.setSafeZone] pre violated: newUpperBound >= 0.0");
    }
    if (!((self.safeZoneUpperBound !== newUpperBound))) {
      preViolations.push("[DoseCalculator.setSafeZone] pre violated: self.safeZoneUpperBound <> newUpperBound");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newUpperBound);
      const postViolations: string[] = [];
      if (!((__result.self.safeZoneUpperBound === newUpperBound))) {
        postViolations.push("[DoseCalculator.setSafeZone] post violated: self.safeZoneUpperBound = newUpperBound");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.setDosingCheckInterval. User supplies this. */
export type DoseCalculatorSetDosingCheckIntervalImpl = (self: DoseCalculator, newInterval: number) => { self: DoseCalculator; modified: { dosingCheckIntervalSeconds: unknown } };

/** Contract-checking wrapper for DoseCalculator.setDosingCheckInterval. */
export function wrapDoseCalculatorSetDosingCheckInterval(impl: DoseCalculatorSetDosingCheckIntervalImpl): (self: DoseCalculator, newInterval: number) => DoseCalculator {
  return (self, newInterval) => {
    const preViolations: string[] = [];
    if (!((newInterval > 0))) {
      preViolations.push("[DoseCalculator.setDosingCheckInterval] pre violated: newInterval > 0.0");
    }
    if (!((newInterval <= 600))) {
      preViolations.push("[DoseCalculator.setDosingCheckInterval] pre violated: newInterval <= 600.0");
    }
    if (!((self.dosingCheckIntervalSeconds !== newInterval))) {
      preViolations.push("[DoseCalculator.setDosingCheckInterval] pre violated: self.dosingCheckIntervalSeconds <> newInterval");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newInterval);
      const postViolations: string[] = [];
      if (!((__result.self.dosingCheckIntervalSeconds === newInterval))) {
        postViolations.push("[DoseCalculator.setDosingCheckInterval] post violated: self.dosingCheckIntervalSeconds = newInterval");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.setDosingCheckInterval (async). User supplies this. */
export type DoseCalculatorSetDosingCheckIntervalAsyncImpl = (self: DoseCalculator, newInterval: number) => Promise<{ self: DoseCalculator; modified: { dosingCheckIntervalSeconds: unknown } }>;

/** Contract-checking wrapper for DoseCalculator.setDosingCheckInterval (async). */
export function wrapDoseCalculatorSetDosingCheckIntervalAsync(impl: DoseCalculatorSetDosingCheckIntervalAsyncImpl): (self: DoseCalculator, newInterval: number) => Promise<DoseCalculator> {
  return async (self, newInterval) => {
    const preViolations: string[] = [];
    if (!((newInterval > 0))) {
      preViolations.push("[DoseCalculator.setDosingCheckInterval] pre violated: newInterval > 0.0");
    }
    if (!((newInterval <= 600))) {
      preViolations.push("[DoseCalculator.setDosingCheckInterval] pre violated: newInterval <= 600.0");
    }
    if (!((self.dosingCheckIntervalSeconds !== newInterval))) {
      preViolations.push("[DoseCalculator.setDosingCheckInterval] pre violated: self.dosingCheckIntervalSeconds <> newInterval");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newInterval);
      const postViolations: string[] = [];
      if (!((__result.self.dosingCheckIntervalSeconds === newInterval))) {
        postViolations.push("[DoseCalculator.setDosingCheckInterval] post violated: self.dosingCheckIntervalSeconds = newInterval");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.resetCalculator. User supplies this. */
export type DoseCalculatorResetCalculatorImpl = (self: DoseCalculator) => { self: DoseCalculator; modified: { lastComputedDose: unknown; lastCalculationTime: unknown } };

/** Contract-checking wrapper for DoseCalculator.resetCalculator. */
export function wrapDoseCalculatorResetCalculator(impl: DoseCalculatorResetCalculatorImpl): (self: DoseCalculator) => DoseCalculator {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.lastComputedDose >= 0))) {
      preViolations.push("[DoseCalculator.resetCalculator] pre violated: self.lastComputedDose >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lastComputedDose === 0))) {
        postViolations.push("[DoseCalculator.resetCalculator] post violated: self.lastComputedDose = 0.0");
      }
      if (!((__result.self.lastCalculationTime === 0))) {
        postViolations.push("[DoseCalculator.resetCalculator] post violated: self.lastCalculationTime = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCalculator.resetCalculator (async). User supplies this. */
export type DoseCalculatorResetCalculatorAsyncImpl = (self: DoseCalculator) => Promise<{ self: DoseCalculator; modified: { lastComputedDose: unknown; lastCalculationTime: unknown } }>;

/** Contract-checking wrapper for DoseCalculator.resetCalculator (async). */
export function wrapDoseCalculatorResetCalculatorAsync(impl: DoseCalculatorResetCalculatorAsyncImpl): (self: DoseCalculator) => Promise<DoseCalculator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.lastComputedDose >= 0))) {
      preViolations.push("[DoseCalculator.resetCalculator] pre violated: self.lastComputedDose >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lastComputedDose === 0))) {
        postViolations.push("[DoseCalculator.resetCalculator] post violated: self.lastComputedDose = 0.0");
      }
      if (!((__result.self.lastCalculationTime === 0))) {
        postViolations.push("[DoseCalculator.resetCalculator] post violated: self.lastCalculationTime = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorChannel.transmitReading. User supplies this. */
export type SensorChannelTransmitReadingImpl = (self: SensorChannel, value: number, rate: number, timestamp: number) => { self: SensorChannel; modified: { lastTransmittedReadingMgDl: unknown; lastTransmittedRateMgDlPerMin: unknown; transmissionTimestamp: unknown } };

/** Contract-checking wrapper for SensorChannel.transmitReading. */
export function wrapSensorChannelTransmitReading(impl: SensorChannelTransmitReadingImpl): (self: SensorChannel, value: number, rate: number, timestamp: number) => SensorChannel {
  return (self, value, rate, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: value >= 0.0");
    }
    if (!((value <= 1000))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: value <= 1000.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: rate >= 0.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: timestamp >= 0.0");
    }
    if (!((self.isActive === true))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: self.isActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, value, rate, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransmittedReadingMgDl === value))) {
        postViolations.push("[SensorChannel.transmitReading] post violated: self.lastTransmittedReadingMgDl = value");
      }
      if (!((__result.self.lastTransmittedRateMgDlPerMin === rate))) {
        postViolations.push("[SensorChannel.transmitReading] post violated: self.lastTransmittedRateMgDlPerMin = rate");
      }
      if (!((__result.self.transmissionTimestamp === timestamp))) {
        postViolations.push("[SensorChannel.transmitReading] post violated: self.transmissionTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for SensorChannel.transmitReading (async). User supplies this. */
export type SensorChannelTransmitReadingAsyncImpl = (self: SensorChannel, value: number, rate: number, timestamp: number) => Promise<{ self: SensorChannel; modified: { lastTransmittedReadingMgDl: unknown; lastTransmittedRateMgDlPerMin: unknown; transmissionTimestamp: unknown } }>;

/** Contract-checking wrapper for SensorChannel.transmitReading (async). */
export function wrapSensorChannelTransmitReadingAsync(impl: SensorChannelTransmitReadingAsyncImpl): (self: SensorChannel, value: number, rate: number, timestamp: number) => Promise<SensorChannel> {
  return async (self, value, rate, timestamp) => {
    const preViolations: string[] = [];
    if (!((value >= 0))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: value >= 0.0");
    }
    if (!((value <= 1000))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: value <= 1000.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: rate >= 0.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: timestamp >= 0.0");
    }
    if (!((self.isActive === true))) {
      preViolations.push("[SensorChannel.transmitReading] pre violated: self.isActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, value, rate, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastTransmittedReadingMgDl === value))) {
        postViolations.push("[SensorChannel.transmitReading] post violated: self.lastTransmittedReadingMgDl = value");
      }
      if (!((__result.self.lastTransmittedRateMgDlPerMin === rate))) {
        postViolations.push("[SensorChannel.transmitReading] post violated: self.lastTransmittedRateMgDlPerMin = rate");
      }
      if (!((__result.self.transmissionTimestamp === timestamp))) {
        postViolations.push("[SensorChannel.transmitReading] post violated: self.transmissionTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.deliverInsulin. User supplies this. */
export type PumpActuatorDeliverInsulinImpl = (self: PumpActuator, dose: number, timestamp: number) => { self: PumpActuator; modified: { reservoirUnits: unknown; lastDeliveredDose: unknown; lastDoseTime: unknown } };

/** Contract-checking wrapper for PumpActuator.deliverInsulin. */
export function wrapPumpActuatorDeliverInsulin(impl: PumpActuatorDeliverInsulinImpl): (self: PumpActuator, dose: number, timestamp: number) => PumpActuator {
  return (self, dose, timestamp) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: dose > 0.0");
    }
    if (!((dose <= 2))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: dose <= 2.0");
    }
    if (!((self.reservoirUnits >= dose))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: self.reservoirUnits >= dose");
    }
    if (!(!(self.delivering))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: not self.delivering");
    }
    if (!(!(self.actuatorFaulty))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: not self.actuatorFaulty");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dose, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] - dose)))) {
        postViolations.push("[PumpActuator.deliverInsulin] post violated: self.reservoirUnits = self.reservoirUnits@pre - dose");
      }
      if (!((__result.self.delivering === true))) {
        postViolations.push("[PumpActuator.deliverInsulin] post violated: self.delivering = true");
      }
      if (!((__result.self.lastDeliveredDose === dose))) {
        postViolations.push("[PumpActuator.deliverInsulin] post violated: self.lastDeliveredDose = dose");
      }
      if (!((__result.self.lastDoseTime === timestamp))) {
        postViolations.push("[PumpActuator.deliverInsulin] post violated: self.lastDoseTime = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.deliverInsulin (async). User supplies this. */
export type PumpActuatorDeliverInsulinAsyncImpl = (self: PumpActuator, dose: number, timestamp: number) => Promise<{ self: PumpActuator; modified: { reservoirUnits: unknown; lastDeliveredDose: unknown; lastDoseTime: unknown } }>;

/** Contract-checking wrapper for PumpActuator.deliverInsulin (async). */
export function wrapPumpActuatorDeliverInsulinAsync(impl: PumpActuatorDeliverInsulinAsyncImpl): (self: PumpActuator, dose: number, timestamp: number) => Promise<PumpActuator> {
  return async (self, dose, timestamp) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: dose > 0.0");
    }
    if (!((dose <= 2))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: dose <= 2.0");
    }
    if (!((self.reservoirUnits >= dose))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: self.reservoirUnits >= dose");
    }
    if (!(!(self.delivering))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: not self.delivering");
    }
    if (!(!(self.actuatorFaulty))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: not self.actuatorFaulty");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[PumpActuator.deliverInsulin] pre violated: timestamp >= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dose, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] - dose)))) {
        postViolations.push("[PumpActuator.deliverInsulin] post violated: self.reservoirUnits = self.reservoirUnits@pre - dose");
      }
      if (!((__result.self.delivering === true))) {
        postViolations.push("[PumpActuator.deliverInsulin] post violated: self.delivering = true");
      }
      if (!((__result.self.lastDeliveredDose === dose))) {
        postViolations.push("[PumpActuator.deliverInsulin] post violated: self.lastDeliveredDose = dose");
      }
      if (!((__result.self.lastDoseTime === timestamp))) {
        postViolations.push("[PumpActuator.deliverInsulin] post violated: self.lastDoseTime = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.stopDelivery. User supplies this. */
export type PumpActuatorStopDeliveryImpl = (self: PumpActuator) => { self: PumpActuator; modified: { delivering: unknown; lastDeliveredDose: unknown } };

/** Contract-checking wrapper for PumpActuator.stopDelivery. */
export function wrapPumpActuatorStopDelivery(impl: PumpActuatorStopDeliveryImpl): (self: PumpActuator) => PumpActuator {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.delivering === true))) {
      preViolations.push("[PumpActuator.stopDelivery] pre violated: self.delivering = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.delivering === false))) {
        postViolations.push("[PumpActuator.stopDelivery] post violated: self.delivering = false");
      }
      if (!((__result.self.lastDeliveredDose === 0))) {
        postViolations.push("[PumpActuator.stopDelivery] post violated: self.lastDeliveredDose = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.stopDelivery (async). User supplies this. */
export type PumpActuatorStopDeliveryAsyncImpl = (self: PumpActuator) => Promise<{ self: PumpActuator; modified: { delivering: unknown; lastDeliveredDose: unknown } }>;

/** Contract-checking wrapper for PumpActuator.stopDelivery (async). */
export function wrapPumpActuatorStopDeliveryAsync(impl: PumpActuatorStopDeliveryAsyncImpl): (self: PumpActuator) => Promise<PumpActuator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.delivering === true))) {
      preViolations.push("[PumpActuator.stopDelivery] pre violated: self.delivering = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.delivering === false))) {
        postViolations.push("[PumpActuator.stopDelivery] post violated: self.delivering = false");
      }
      if (!((__result.self.lastDeliveredDose === 0))) {
        postViolations.push("[PumpActuator.stopDelivery] post violated: self.lastDeliveredDose = 0.0");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.refillReservoir. User supplies this. */
export type PumpActuatorRefillReservoirImpl = (self: PumpActuator, amount: number) => { self: PumpActuator; modified: { reservoirUnits: unknown } };

/** Contract-checking wrapper for PumpActuator.refillReservoir. */
export function wrapPumpActuatorRefillReservoir(impl: PumpActuatorRefillReservoirImpl): (self: PumpActuator, amount: number) => PumpActuator {
  return (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[PumpActuator.refillReservoir] pre violated: amount > 0.0");
    }
    if (!(((self.reservoirUnits + amount) <= self.reservoirCapacityUnits))) {
      preViolations.push("[PumpActuator.refillReservoir] pre violated: self.reservoirUnits + amount <= self.reservoirCapacityUnits");
    }
    if (!(!(self.delivering))) {
      preViolations.push("[PumpActuator.refillReservoir] pre violated: not self.delivering");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] + amount)))) {
        postViolations.push("[PumpActuator.refillReservoir] post violated: self.reservoirUnits = self.reservoirUnits@pre + amount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.refillReservoir (async). User supplies this. */
export type PumpActuatorRefillReservoirAsyncImpl = (self: PumpActuator, amount: number) => Promise<{ self: PumpActuator; modified: { reservoirUnits: unknown } }>;

/** Contract-checking wrapper for PumpActuator.refillReservoir (async). */
export function wrapPumpActuatorRefillReservoirAsync(impl: PumpActuatorRefillReservoirAsyncImpl): (self: PumpActuator, amount: number) => Promise<PumpActuator> {
  return async (self, amount) => {
    const preViolations: string[] = [];
    if (!((amount > 0))) {
      preViolations.push("[PumpActuator.refillReservoir] pre violated: amount > 0.0");
    }
    if (!(((self.reservoirUnits + amount) <= self.reservoirCapacityUnits))) {
      preViolations.push("[PumpActuator.refillReservoir] pre violated: self.reservoirUnits + amount <= self.reservoirCapacityUnits");
    }
    if (!(!(self.delivering))) {
      preViolations.push("[PumpActuator.refillReservoir] pre violated: not self.delivering");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, amount);
      const postViolations: string[] = [];
      if (!((__result.self.reservoirUnits === (__pre["self.reservoirUnits"] + amount)))) {
        postViolations.push("[PumpActuator.refillReservoir] post violated: self.reservoirUnits = self.reservoirUnits@pre + amount");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.reportLowReservoir. User supplies this. */
export type PumpActuatorReportLowReservoirImpl = (self: PumpActuator) => { self: PumpActuator; modified: {} };

/** Contract-checking wrapper for PumpActuator.reportLowReservoir. */
export function wrapPumpActuatorReportLowReservoir(impl: PumpActuatorReportLowReservoirImpl): (self: PumpActuator) => PumpActuator {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.isLowReservoir === true))) {
      preViolations.push("[PumpActuator.reportLowReservoir] pre violated: self.isLowReservoir = true");
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

/** Impl signature for PumpActuator.reportLowReservoir (async). User supplies this. */
export type PumpActuatorReportLowReservoirAsyncImpl = (self: PumpActuator) => Promise<{ self: PumpActuator; modified: {} }>;

/** Contract-checking wrapper for PumpActuator.reportLowReservoir (async). */
export function wrapPumpActuatorReportLowReservoirAsync(impl: PumpActuatorReportLowReservoirAsyncImpl): (self: PumpActuator) => Promise<PumpActuator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.isLowReservoir === true))) {
      preViolations.push("[PumpActuator.reportLowReservoir] pre violated: self.isLowReservoir = true");
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

/** Impl signature for PumpActuator.reportActuatorFault. User supplies this. */
export type PumpActuatorReportActuatorFaultImpl = (self: PumpActuator) => { self: PumpActuator; modified: { actuatorFaulty: unknown } };

/** Contract-checking wrapper for PumpActuator.reportActuatorFault. */
export function wrapPumpActuatorReportActuatorFault(impl: PumpActuatorReportActuatorFaultImpl): (self: PumpActuator) => PumpActuator {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.actuatorFaulty))) {
      preViolations.push("[PumpActuator.reportActuatorFault] pre violated: not self.actuatorFaulty");
    }
    if (!(!(self.delivering))) {
      preViolations.push("[PumpActuator.reportActuatorFault] pre violated: not self.delivering");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorFaulty === true))) {
        postViolations.push("[PumpActuator.reportActuatorFault] post violated: self.actuatorFaulty = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.reportActuatorFault (async). User supplies this. */
export type PumpActuatorReportActuatorFaultAsyncImpl = (self: PumpActuator) => Promise<{ self: PumpActuator; modified: { actuatorFaulty: unknown } }>;

/** Contract-checking wrapper for PumpActuator.reportActuatorFault (async). */
export function wrapPumpActuatorReportActuatorFaultAsync(impl: PumpActuatorReportActuatorFaultAsyncImpl): (self: PumpActuator) => Promise<PumpActuator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.actuatorFaulty))) {
      preViolations.push("[PumpActuator.reportActuatorFault] pre violated: not self.actuatorFaulty");
    }
    if (!(!(self.delivering))) {
      preViolations.push("[PumpActuator.reportActuatorFault] pre violated: not self.delivering");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorFaulty === true))) {
        postViolations.push("[PumpActuator.reportActuatorFault] post violated: self.actuatorFaulty = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.clearActuatorFault. User supplies this. */
export type PumpActuatorClearActuatorFaultImpl = (self: PumpActuator) => { self: PumpActuator; modified: { actuatorFaulty: unknown } };

/** Contract-checking wrapper for PumpActuator.clearActuatorFault. */
export function wrapPumpActuatorClearActuatorFault(impl: PumpActuatorClearActuatorFaultImpl): (self: PumpActuator) => PumpActuator {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.actuatorFaulty === true))) {
      preViolations.push("[PumpActuator.clearActuatorFault] pre violated: self.actuatorFaulty = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorFaulty === false))) {
        postViolations.push("[PumpActuator.clearActuatorFault] post violated: self.actuatorFaulty = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for PumpActuator.clearActuatorFault (async). User supplies this. */
export type PumpActuatorClearActuatorFaultAsyncImpl = (self: PumpActuator) => Promise<{ self: PumpActuator; modified: { actuatorFaulty: unknown } }>;

/** Contract-checking wrapper for PumpActuator.clearActuatorFault (async). */
export function wrapPumpActuatorClearActuatorFaultAsync(impl: PumpActuatorClearActuatorFaultAsyncImpl): (self: PumpActuator) => Promise<PumpActuator> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.actuatorFaulty === true))) {
      preViolations.push("[PumpActuator.clearActuatorFault] pre violated: self.actuatorFaulty = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.actuatorFaulty === false))) {
        postViolations.push("[PumpActuator.clearActuatorFault] post violated: self.actuatorFaulty = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCommandChannel.sendDoseCommand. User supplies this. */
export type DoseCommandChannelSendDoseCommandImpl = (self: DoseCommandChannel, dose: number, timestamp: number) => { self: DoseCommandChannel; modified: { lastCommandedDose: unknown; commandTimestamp: unknown } };

/** Contract-checking wrapper for DoseCommandChannel.sendDoseCommand. */
export function wrapDoseCommandChannelSendDoseCommand(impl: DoseCommandChannelSendDoseCommandImpl): (self: DoseCommandChannel, dose: number, timestamp: number) => DoseCommandChannel {
  return (self, dose, timestamp) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[DoseCommandChannel.sendDoseCommand] pre violated: dose > 0.0");
    }
    if (!((dose <= 2))) {
      preViolations.push("[DoseCommandChannel.sendDoseCommand] pre violated: dose <= 2.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[DoseCommandChannel.sendDoseCommand] pre violated: timestamp >= 0.0");
    }
    if (!(!(self.commandAcknowledged))) {
      preViolations.push("[DoseCommandChannel.sendDoseCommand] pre violated: not self.commandAcknowledged");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, dose, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastCommandedDose === dose))) {
        postViolations.push("[DoseCommandChannel.sendDoseCommand] post violated: self.lastCommandedDose = dose");
      }
      if (!((__result.self.commandTimestamp === timestamp))) {
        postViolations.push("[DoseCommandChannel.sendDoseCommand] post violated: self.commandTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCommandChannel.sendDoseCommand (async). User supplies this. */
export type DoseCommandChannelSendDoseCommandAsyncImpl = (self: DoseCommandChannel, dose: number, timestamp: number) => Promise<{ self: DoseCommandChannel; modified: { lastCommandedDose: unknown; commandTimestamp: unknown } }>;

/** Contract-checking wrapper for DoseCommandChannel.sendDoseCommand (async). */
export function wrapDoseCommandChannelSendDoseCommandAsync(impl: DoseCommandChannelSendDoseCommandAsyncImpl): (self: DoseCommandChannel, dose: number, timestamp: number) => Promise<DoseCommandChannel> {
  return async (self, dose, timestamp) => {
    const preViolations: string[] = [];
    if (!((dose > 0))) {
      preViolations.push("[DoseCommandChannel.sendDoseCommand] pre violated: dose > 0.0");
    }
    if (!((dose <= 2))) {
      preViolations.push("[DoseCommandChannel.sendDoseCommand] pre violated: dose <= 2.0");
    }
    if (!((timestamp >= 0))) {
      preViolations.push("[DoseCommandChannel.sendDoseCommand] pre violated: timestamp >= 0.0");
    }
    if (!(!(self.commandAcknowledged))) {
      preViolations.push("[DoseCommandChannel.sendDoseCommand] pre violated: not self.commandAcknowledged");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, dose, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.lastCommandedDose === dose))) {
        postViolations.push("[DoseCommandChannel.sendDoseCommand] post violated: self.lastCommandedDose = dose");
      }
      if (!((__result.self.commandTimestamp === timestamp))) {
        postViolations.push("[DoseCommandChannel.sendDoseCommand] post violated: self.commandTimestamp = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCommandChannel.acknowledgeCommand. User supplies this. */
export type DoseCommandChannelAcknowledgeCommandImpl = (self: DoseCommandChannel) => { self: DoseCommandChannel; modified: { commandAcknowledged: unknown } };

/** Contract-checking wrapper for DoseCommandChannel.acknowledgeCommand. */
export function wrapDoseCommandChannelAcknowledgeCommand(impl: DoseCommandChannelAcknowledgeCommandImpl): (self: DoseCommandChannel) => DoseCommandChannel {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.commandAcknowledged))) {
      preViolations.push("[DoseCommandChannel.acknowledgeCommand] pre violated: not self.commandAcknowledged");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.commandAcknowledged === true))) {
        postViolations.push("[DoseCommandChannel.acknowledgeCommand] post violated: self.commandAcknowledged = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for DoseCommandChannel.acknowledgeCommand (async). User supplies this. */
export type DoseCommandChannelAcknowledgeCommandAsyncImpl = (self: DoseCommandChannel) => Promise<{ self: DoseCommandChannel; modified: { commandAcknowledged: unknown } }>;

/** Contract-checking wrapper for DoseCommandChannel.acknowledgeCommand (async). */
export function wrapDoseCommandChannelAcknowledgeCommandAsync(impl: DoseCommandChannelAcknowledgeCommandAsyncImpl): (self: DoseCommandChannel) => Promise<DoseCommandChannel> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.commandAcknowledged))) {
      preViolations.push("[DoseCommandChannel.acknowledgeCommand] pre violated: not self.commandAcknowledged");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.commandAcknowledged === true))) {
        postViolations.push("[DoseCommandChannel.acknowledgeCommand] post violated: self.commandAcknowledged = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for HardwareFaultDetector.runSelfTest. User supplies this. */
export type HardwareFaultDetectorRunSelfTestImpl = (self: HardwareFaultDetector, sensorStatus: boolean, pumpStatus: boolean, needleStatus: boolean, timestamp: number) => { self: HardwareFaultDetector; modified: { sensorOk: unknown; pumpOk: unknown; needleOk: unknown; lastTestTime: unknown } };

/** Contract-checking wrapper for HardwareFaultDetector.runSelfTest. */
export function wrapHardwareFaultDetectorRunSelfTest(impl: HardwareFaultDetectorRunSelfTestImpl): (self: HardwareFaultDetector, sensorStatus: boolean, pumpStatus: boolean, needleStatus: boolean, timestamp: number) => HardwareFaultDetector {
  return (self, sensorStatus, pumpStatus, needleStatus, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[HardwareFaultDetector.runSelfTest] pre violated: timestamp >= 0.0");
    }
    if (!(((timestamp - self.lastTestTime) <= self.selfTestIntervalSeconds))) {
      preViolations.push("[HardwareFaultDetector.runSelfTest] pre violated: (timestamp - self.lastTestTime) <= self.selfTestIntervalSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sensorStatus, pumpStatus, needleStatus, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorOk === sensorStatus))) {
        postViolations.push("[HardwareFaultDetector.runSelfTest] post violated: self.sensorOk = sensorStatus");
      }
      if (!((__result.self.pumpOk === pumpStatus))) {
        postViolations.push("[HardwareFaultDetector.runSelfTest] post violated: self.pumpOk = pumpStatus");
      }
      if (!((__result.self.needleOk === needleStatus))) {
        postViolations.push("[HardwareFaultDetector.runSelfTest] post violated: self.needleOk = needleStatus");
      }
      if (!((__result.self.lastTestTime === timestamp))) {
        postViolations.push("[HardwareFaultDetector.runSelfTest] post violated: self.lastTestTime = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for HardwareFaultDetector.runSelfTest (async). User supplies this. */
export type HardwareFaultDetectorRunSelfTestAsyncImpl = (self: HardwareFaultDetector, sensorStatus: boolean, pumpStatus: boolean, needleStatus: boolean, timestamp: number) => Promise<{ self: HardwareFaultDetector; modified: { sensorOk: unknown; pumpOk: unknown; needleOk: unknown; lastTestTime: unknown } }>;

/** Contract-checking wrapper for HardwareFaultDetector.runSelfTest (async). */
export function wrapHardwareFaultDetectorRunSelfTestAsync(impl: HardwareFaultDetectorRunSelfTestAsyncImpl): (self: HardwareFaultDetector, sensorStatus: boolean, pumpStatus: boolean, needleStatus: boolean, timestamp: number) => Promise<HardwareFaultDetector> {
  return async (self, sensorStatus, pumpStatus, needleStatus, timestamp) => {
    const preViolations: string[] = [];
    if (!((timestamp >= 0))) {
      preViolations.push("[HardwareFaultDetector.runSelfTest] pre violated: timestamp >= 0.0");
    }
    if (!(((timestamp - self.lastTestTime) <= self.selfTestIntervalSeconds))) {
      preViolations.push("[HardwareFaultDetector.runSelfTest] pre violated: (timestamp - self.lastTestTime) <= self.selfTestIntervalSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sensorStatus, pumpStatus, needleStatus, timestamp);
      const postViolations: string[] = [];
      if (!((__result.self.sensorOk === sensorStatus))) {
        postViolations.push("[HardwareFaultDetector.runSelfTest] post violated: self.sensorOk = sensorStatus");
      }
      if (!((__result.self.pumpOk === pumpStatus))) {
        postViolations.push("[HardwareFaultDetector.runSelfTest] post violated: self.pumpOk = pumpStatus");
      }
      if (!((__result.self.needleOk === needleStatus))) {
        postViolations.push("[HardwareFaultDetector.runSelfTest] post violated: self.needleOk = needleStatus");
      }
      if (!((__result.self.lastTestTime === timestamp))) {
        postViolations.push("[HardwareFaultDetector.runSelfTest] post violated: self.lastTestTime = timestamp");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for HardwareFaultDetector.detectFault. User supplies this. */
export type HardwareFaultDetectorDetectFaultImpl = (self: HardwareFaultDetector, reason: string) => { self: HardwareFaultDetector; modified: { faultDetected: unknown; faultReason: unknown; sensorOk: unknown; pumpOk: unknown; needleOk: unknown } };

/** Contract-checking wrapper for HardwareFaultDetector.detectFault. */
export function wrapHardwareFaultDetectorDetectFault(impl: HardwareFaultDetectorDetectFaultImpl): (self: HardwareFaultDetector, reason: string) => HardwareFaultDetector {
  return (self, reason) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[HardwareFaultDetector.detectFault] pre violated: not self.faultDetected");
    }
    if (!((reason !== null))) {
      preViolations.push("[HardwareFaultDetector.detectFault] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, reason);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.faultReason === reason))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.faultReason = reason");
      }
      if (!((__result.self.sensorOk === false))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.sensorOk = false");
      }
      if (!((__result.self.pumpOk === false))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.pumpOk = false");
      }
      if (!((__result.self.needleOk === false))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.needleOk = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for HardwareFaultDetector.detectFault (async). User supplies this. */
export type HardwareFaultDetectorDetectFaultAsyncImpl = (self: HardwareFaultDetector, reason: string) => Promise<{ self: HardwareFaultDetector; modified: { faultDetected: unknown; faultReason: unknown; sensorOk: unknown; pumpOk: unknown; needleOk: unknown } }>;

/** Contract-checking wrapper for HardwareFaultDetector.detectFault (async). */
export function wrapHardwareFaultDetectorDetectFaultAsync(impl: HardwareFaultDetectorDetectFaultAsyncImpl): (self: HardwareFaultDetector, reason: string) => Promise<HardwareFaultDetector> {
  return async (self, reason) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[HardwareFaultDetector.detectFault] pre violated: not self.faultDetected");
    }
    if (!((reason !== null))) {
      preViolations.push("[HardwareFaultDetector.detectFault] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, reason);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.faultReason === reason))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.faultReason = reason");
      }
      if (!((__result.self.sensorOk === false))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.sensorOk = false");
      }
      if (!((__result.self.pumpOk === false))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.pumpOk = false");
      }
      if (!((__result.self.needleOk === false))) {
        postViolations.push("[HardwareFaultDetector.detectFault] post violated: self.needleOk = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for HardwareFaultDetector.clearFault. User supplies this. */
export type HardwareFaultDetectorClearFaultImpl = (self: HardwareFaultDetector) => { self: HardwareFaultDetector; modified: { faultDetected: unknown; faultReason: unknown; sensorOk: unknown; pumpOk: unknown; needleOk: unknown } };

/** Contract-checking wrapper for HardwareFaultDetector.clearFault. */
export function wrapHardwareFaultDetectorClearFault(impl: HardwareFaultDetectorClearFaultImpl): (self: HardwareFaultDetector) => HardwareFaultDetector {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[HardwareFaultDetector.clearFault] pre violated: self.faultDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.faultDetected = false");
      }
      if (!((__result.self.faultReason === ""))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.faultReason = ''");
      }
      if (!((__result.self.sensorOk === true))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.sensorOk = true");
      }
      if (!((__result.self.pumpOk === true))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.pumpOk = true");
      }
      if (!((__result.self.needleOk === true))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.needleOk = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for HardwareFaultDetector.clearFault (async). User supplies this. */
export type HardwareFaultDetectorClearFaultAsyncImpl = (self: HardwareFaultDetector) => Promise<{ self: HardwareFaultDetector; modified: { faultDetected: unknown; faultReason: unknown; sensorOk: unknown; pumpOk: unknown; needleOk: unknown } }>;

/** Contract-checking wrapper for HardwareFaultDetector.clearFault (async). */
export function wrapHardwareFaultDetectorClearFaultAsync(impl: HardwareFaultDetectorClearFaultAsyncImpl): (self: HardwareFaultDetector) => Promise<HardwareFaultDetector> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[HardwareFaultDetector.clearFault] pre violated: self.faultDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.faultDetected = false");
      }
      if (!((__result.self.faultReason === ""))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.faultReason = ''");
      }
      if (!((__result.self.sensorOk === true))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.sensorOk = true");
      }
      if (!((__result.self.pumpOk === true))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.pumpOk = true");
      }
      if (!((__result.self.needleOk === true))) {
        postViolations.push("[HardwareFaultDetector.clearFault] post violated: self.needleOk = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for HardwareFaultDetector.setSelfTestInterval. User supplies this. */
export type HardwareFaultDetectorSetSelfTestIntervalImpl = (self: HardwareFaultDetector, newInterval: number) => { self: HardwareFaultDetector; modified: { selfTestIntervalSeconds: unknown } };

/** Contract-checking wrapper for HardwareFaultDetector.setSelfTestInterval. */
export function wrapHardwareFaultDetectorSetSelfTestInterval(impl: HardwareFaultDetectorSetSelfTestIntervalImpl): (self: HardwareFaultDetector, newInterval: number) => HardwareFaultDetector {
  return (self, newInterval) => {
    const preViolations: string[] = [];
    if (!((newInterval > 0))) {
      preViolations.push("[HardwareFaultDetector.setSelfTestInterval] pre violated: newInterval > 0.0");
    }
    if (!((newInterval <= 60))) {
      preViolations.push("[HardwareFaultDetector.setSelfTestInterval] pre violated: newInterval <= 60.0");
    }
    if (!((self.selfTestIntervalSeconds !== newInterval))) {
      preViolations.push("[HardwareFaultDetector.setSelfTestInterval] pre violated: self.selfTestIntervalSeconds <> newInterval");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newInterval);
      const postViolations: string[] = [];
      if (!((__result.self.selfTestIntervalSeconds === newInterval))) {
        postViolations.push("[HardwareFaultDetector.setSelfTestInterval] post violated: self.selfTestIntervalSeconds = newInterval");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for HardwareFaultDetector.setSelfTestInterval (async). User supplies this. */
export type HardwareFaultDetectorSetSelfTestIntervalAsyncImpl = (self: HardwareFaultDetector, newInterval: number) => Promise<{ self: HardwareFaultDetector; modified: { selfTestIntervalSeconds: unknown } }>;

/** Contract-checking wrapper for HardwareFaultDetector.setSelfTestInterval (async). */
export function wrapHardwareFaultDetectorSetSelfTestIntervalAsync(impl: HardwareFaultDetectorSetSelfTestIntervalAsyncImpl): (self: HardwareFaultDetector, newInterval: number) => Promise<HardwareFaultDetector> {
  return async (self, newInterval) => {
    const preViolations: string[] = [];
    if (!((newInterval > 0))) {
      preViolations.push("[HardwareFaultDetector.setSelfTestInterval] pre violated: newInterval > 0.0");
    }
    if (!((newInterval <= 60))) {
      preViolations.push("[HardwareFaultDetector.setSelfTestInterval] pre violated: newInterval <= 60.0");
    }
    if (!((self.selfTestIntervalSeconds !== newInterval))) {
      preViolations.push("[HardwareFaultDetector.setSelfTestInterval] pre violated: self.selfTestIntervalSeconds <> newInterval");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newInterval);
      const postViolations: string[] = [];
      if (!((__result.self.selfTestIntervalSeconds === newInterval))) {
        postViolations.push("[HardwareFaultDetector.setSelfTestInterval] post violated: self.selfTestIntervalSeconds = newInterval");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultChannel.transmitFault. User supplies this. */
export type FaultChannelTransmitFaultImpl = (self: FaultChannel, faultDetected: boolean, reason: string) => { self: FaultChannel; modified: { lastFaultDetected: unknown; lastFaultReason: unknown; alarmRaised: unknown } };

/** Contract-checking wrapper for FaultChannel.transmitFault. */
export function wrapFaultChannelTransmitFault(impl: FaultChannelTransmitFaultImpl): (self: FaultChannel, faultDetected: boolean, reason: string) => FaultChannel {
  return (self, faultDetected, reason) => {
    const preViolations: string[] = [];
    if (!((faultDetected === true))) {
      preViolations.push("[FaultChannel.transmitFault] pre violated: faultDetected = true");
    }
    if (!((reason !== null))) {
      preViolations.push("[FaultChannel.transmitFault] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultDetected, reason);
      const postViolations: string[] = [];
      if (!((__result.self.lastFaultDetected === faultDetected))) {
        postViolations.push("[FaultChannel.transmitFault] post violated: self.lastFaultDetected = faultDetected");
      }
      if (!((__result.self.lastFaultReason === reason))) {
        postViolations.push("[FaultChannel.transmitFault] post violated: self.lastFaultReason = reason");
      }
      if (!((__result.self.alarmRaised === true))) {
        postViolations.push("[FaultChannel.transmitFault] post violated: self.alarmRaised = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultChannel.transmitFault (async). User supplies this. */
export type FaultChannelTransmitFaultAsyncImpl = (self: FaultChannel, faultDetected: boolean, reason: string) => Promise<{ self: FaultChannel; modified: { lastFaultDetected: unknown; lastFaultReason: unknown; alarmRaised: unknown } }>;

/** Contract-checking wrapper for FaultChannel.transmitFault (async). */
export function wrapFaultChannelTransmitFaultAsync(impl: FaultChannelTransmitFaultAsyncImpl): (self: FaultChannel, faultDetected: boolean, reason: string) => Promise<FaultChannel> {
  return async (self, faultDetected, reason) => {
    const preViolations: string[] = [];
    if (!((faultDetected === true))) {
      preViolations.push("[FaultChannel.transmitFault] pre violated: faultDetected = true");
    }
    if (!((reason !== null))) {
      preViolations.push("[FaultChannel.transmitFault] pre violated: reason <> null");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultDetected, reason);
      const postViolations: string[] = [];
      if (!((__result.self.lastFaultDetected === faultDetected))) {
        postViolations.push("[FaultChannel.transmitFault] post violated: self.lastFaultDetected = faultDetected");
      }
      if (!((__result.self.lastFaultReason === reason))) {
        postViolations.push("[FaultChannel.transmitFault] post violated: self.lastFaultReason = reason");
      }
      if (!((__result.self.alarmRaised === true))) {
        postViolations.push("[FaultChannel.transmitFault] post violated: self.alarmRaised = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultChannel.clearFaultSignal. User supplies this. */
export type FaultChannelClearFaultSignalImpl = (self: FaultChannel) => { self: FaultChannel; modified: { alarmRaised: unknown; lastFaultDetected: unknown } };

/** Contract-checking wrapper for FaultChannel.clearFaultSignal. */
export function wrapFaultChannelClearFaultSignal(impl: FaultChannelClearFaultSignalImpl): (self: FaultChannel) => FaultChannel {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmRaised === true))) {
      preViolations.push("[FaultChannel.clearFaultSignal] pre violated: self.alarmRaised = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmRaised === false))) {
        postViolations.push("[FaultChannel.clearFaultSignal] post violated: self.alarmRaised = false");
      }
      if (!((__result.self.lastFaultDetected === false))) {
        postViolations.push("[FaultChannel.clearFaultSignal] post violated: self.lastFaultDetected = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for FaultChannel.clearFaultSignal (async). User supplies this. */
export type FaultChannelClearFaultSignalAsyncImpl = (self: FaultChannel) => Promise<{ self: FaultChannel; modified: { alarmRaised: unknown; lastFaultDetected: unknown } }>;

/** Contract-checking wrapper for FaultChannel.clearFaultSignal (async). */
export function wrapFaultChannelClearFaultSignalAsync(impl: FaultChannelClearFaultSignalAsyncImpl): (self: FaultChannel) => Promise<FaultChannel> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmRaised === true))) {
      preViolations.push("[FaultChannel.clearFaultSignal] pre violated: self.alarmRaised = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmRaised === false))) {
        postViolations.push("[FaultChannel.clearFaultSignal] post violated: self.alarmRaised = false");
      }
      if (!((__result.self.lastFaultDetected === false))) {
        postViolations.push("[FaultChannel.clearFaultSignal] post violated: self.lastFaultDetected = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManager.soundMalfunctionAlarm. User supplies this. */
export type AlarmManagerSoundMalfunctionAlarmImpl = (self: AlarmManager) => { self: AlarmManager; modified: { malfunctionAlarmActive: unknown; alarmActive: unknown; alarmSoundOn: unknown } };

/** Contract-checking wrapper for AlarmManager.soundMalfunctionAlarm. */
export function wrapAlarmManagerSoundMalfunctionAlarm(impl: AlarmManagerSoundMalfunctionAlarmImpl): (self: AlarmManager) => AlarmManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.malfunctionAlarmActive))) {
      preViolations.push("[AlarmManager.soundMalfunctionAlarm] pre violated: not self.malfunctionAlarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[AlarmManager.soundMalfunctionAlarm] post violated: self.malfunctionAlarmActive = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.soundMalfunctionAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSoundOn === true))) {
        postViolations.push("[AlarmManager.soundMalfunctionAlarm] post violated: self.alarmSoundOn = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManager.soundMalfunctionAlarm (async). User supplies this. */
export type AlarmManagerSoundMalfunctionAlarmAsyncImpl = (self: AlarmManager) => Promise<{ self: AlarmManager; modified: { malfunctionAlarmActive: unknown; alarmActive: unknown; alarmSoundOn: unknown } }>;

/** Contract-checking wrapper for AlarmManager.soundMalfunctionAlarm (async). */
export function wrapAlarmManagerSoundMalfunctionAlarmAsync(impl: AlarmManagerSoundMalfunctionAlarmAsyncImpl): (self: AlarmManager) => Promise<AlarmManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.malfunctionAlarmActive))) {
      preViolations.push("[AlarmManager.soundMalfunctionAlarm] pre violated: not self.malfunctionAlarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[AlarmManager.soundMalfunctionAlarm] post violated: self.malfunctionAlarmActive = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.soundMalfunctionAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSoundOn === true))) {
        postViolations.push("[AlarmManager.soundMalfunctionAlarm] post violated: self.alarmSoundOn = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManager.soundLowReservoirAlarm. User supplies this. */
export type AlarmManagerSoundLowReservoirAlarmImpl = (self: AlarmManager) => { self: AlarmManager; modified: { lowReservoirAlarmActive: unknown; alarmActive: unknown; alarmSoundOn: unknown } };

/** Contract-checking wrapper for AlarmManager.soundLowReservoirAlarm. */
export function wrapAlarmManagerSoundLowReservoirAlarm(impl: AlarmManagerSoundLowReservoirAlarmImpl): (self: AlarmManager) => AlarmManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!(!(self.lowReservoirAlarmActive))) {
      preViolations.push("[AlarmManager.soundLowReservoirAlarm] pre violated: not self.lowReservoirAlarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirAlarmActive === true))) {
        postViolations.push("[AlarmManager.soundLowReservoirAlarm] post violated: self.lowReservoirAlarmActive = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.soundLowReservoirAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSoundOn === true))) {
        postViolations.push("[AlarmManager.soundLowReservoirAlarm] post violated: self.alarmSoundOn = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManager.soundLowReservoirAlarm (async). User supplies this. */
export type AlarmManagerSoundLowReservoirAlarmAsyncImpl = (self: AlarmManager) => Promise<{ self: AlarmManager; modified: { lowReservoirAlarmActive: unknown; alarmActive: unknown; alarmSoundOn: unknown } }>;

/** Contract-checking wrapper for AlarmManager.soundLowReservoirAlarm (async). */
export function wrapAlarmManagerSoundLowReservoirAlarmAsync(impl: AlarmManagerSoundLowReservoirAlarmAsyncImpl): (self: AlarmManager) => Promise<AlarmManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!(!(self.lowReservoirAlarmActive))) {
      preViolations.push("[AlarmManager.soundLowReservoirAlarm] pre violated: not self.lowReservoirAlarmActive");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirAlarmActive === true))) {
        postViolations.push("[AlarmManager.soundLowReservoirAlarm] post violated: self.lowReservoirAlarmActive = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[AlarmManager.soundLowReservoirAlarm] post violated: self.alarmActive = true");
      }
      if (!((__result.self.alarmSoundOn === true))) {
        postViolations.push("[AlarmManager.soundLowReservoirAlarm] post violated: self.alarmSoundOn = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManager.clearAlarms. User supplies this. */
export type AlarmManagerClearAlarmsImpl = (self: AlarmManager) => { self: AlarmManager; modified: { alarmActive: unknown; lowReservoirAlarmActive: unknown; malfunctionAlarmActive: unknown; alarmSoundOn: unknown } };

/** Contract-checking wrapper for AlarmManager.clearAlarms. */
export function wrapAlarmManagerClearAlarms(impl: AlarmManagerClearAlarmsImpl): (self: AlarmManager) => AlarmManager {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[AlarmManager.clearAlarms] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[AlarmManager.clearAlarms] post violated: self.alarmActive = false");
      }
      if (!((__result.self.lowReservoirAlarmActive === false))) {
        postViolations.push("[AlarmManager.clearAlarms] post violated: self.lowReservoirAlarmActive = false");
      }
      if (!((__result.self.malfunctionAlarmActive === false))) {
        postViolations.push("[AlarmManager.clearAlarms] post violated: self.malfunctionAlarmActive = false");
      }
      if (!((__result.self.alarmSoundOn === false))) {
        postViolations.push("[AlarmManager.clearAlarms] post violated: self.alarmSoundOn = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for AlarmManager.clearAlarms (async). User supplies this. */
export type AlarmManagerClearAlarmsAsyncImpl = (self: AlarmManager) => Promise<{ self: AlarmManager; modified: { alarmActive: unknown; lowReservoirAlarmActive: unknown; malfunctionAlarmActive: unknown; alarmSoundOn: unknown } }>;

/** Contract-checking wrapper for AlarmManager.clearAlarms (async). */
export function wrapAlarmManagerClearAlarmsAsync(impl: AlarmManagerClearAlarmsAsyncImpl): (self: AlarmManager) => Promise<AlarmManager> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[AlarmManager.clearAlarms] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[AlarmManager.clearAlarms] post violated: self.alarmActive = false");
      }
      if (!((__result.self.lowReservoirAlarmActive === false))) {
        postViolations.push("[AlarmManager.clearAlarms] post violated: self.lowReservoirAlarmActive = false");
      }
      if (!((__result.self.malfunctionAlarmActive === false))) {
        postViolations.push("[AlarmManager.clearAlarms] post violated: self.malfunctionAlarmActive = false");
      }
      if (!((__result.self.alarmSoundOn === false))) {
        postViolations.push("[AlarmManager.clearAlarms] post violated: self.alarmSoundOn = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservoirLowChannel.transmitLowReservoir. User supplies this. */
export type ReservoirLowChannelTransmitLowReservoirImpl = (self: ReservoirLowChannel, level: number) => { self: ReservoirLowChannel; modified: { lowReservoirDetected: unknown; reservoirLevelUnits: unknown } };

/** Contract-checking wrapper for ReservoirLowChannel.transmitLowReservoir. */
export function wrapReservoirLowChannelTransmitLowReservoir(impl: ReservoirLowChannelTransmitLowReservoirImpl): (self: ReservoirLowChannel, level: number) => ReservoirLowChannel {
  return (self, level) => {
    const preViolations: string[] = [];
    if (!((level < 20))) {
      preViolations.push("[ReservoirLowChannel.transmitLowReservoir] pre violated: level < 20.0");
    }
    if (!((level >= 0))) {
      preViolations.push("[ReservoirLowChannel.transmitLowReservoir] pre violated: level >= 0.0");
    }
    if (!(!(self.lowReservoirDetected))) {
      preViolations.push("[ReservoirLowChannel.transmitLowReservoir] pre violated: not self.lowReservoirDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, level);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirDetected === true))) {
        postViolations.push("[ReservoirLowChannel.transmitLowReservoir] post violated: self.lowReservoirDetected = true");
      }
      if (!((__result.self.reservoirLevelUnits === level))) {
        postViolations.push("[ReservoirLowChannel.transmitLowReservoir] post violated: self.reservoirLevelUnits = level");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservoirLowChannel.transmitLowReservoir (async). User supplies this. */
export type ReservoirLowChannelTransmitLowReservoirAsyncImpl = (self: ReservoirLowChannel, level: number) => Promise<{ self: ReservoirLowChannel; modified: { lowReservoirDetected: unknown; reservoirLevelUnits: unknown } }>;

/** Contract-checking wrapper for ReservoirLowChannel.transmitLowReservoir (async). */
export function wrapReservoirLowChannelTransmitLowReservoirAsync(impl: ReservoirLowChannelTransmitLowReservoirAsyncImpl): (self: ReservoirLowChannel, level: number) => Promise<ReservoirLowChannel> {
  return async (self, level) => {
    const preViolations: string[] = [];
    if (!((level < 20))) {
      preViolations.push("[ReservoirLowChannel.transmitLowReservoir] pre violated: level < 20.0");
    }
    if (!((level >= 0))) {
      preViolations.push("[ReservoirLowChannel.transmitLowReservoir] pre violated: level >= 0.0");
    }
    if (!(!(self.lowReservoirDetected))) {
      preViolations.push("[ReservoirLowChannel.transmitLowReservoir] pre violated: not self.lowReservoirDetected");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, level);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirDetected === true))) {
        postViolations.push("[ReservoirLowChannel.transmitLowReservoir] post violated: self.lowReservoirDetected = true");
      }
      if (!((__result.self.reservoirLevelUnits === level))) {
        postViolations.push("[ReservoirLowChannel.transmitLowReservoir] post violated: self.reservoirLevelUnits = level");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservoirLowChannel.clearLowReservoirSignal. User supplies this. */
export type ReservoirLowChannelClearLowReservoirSignalImpl = (self: ReservoirLowChannel) => { self: ReservoirLowChannel; modified: { lowReservoirDetected: unknown } };

/** Contract-checking wrapper for ReservoirLowChannel.clearLowReservoirSignal. */
export function wrapReservoirLowChannelClearLowReservoirSignal(impl: ReservoirLowChannelClearLowReservoirSignalImpl): (self: ReservoirLowChannel) => ReservoirLowChannel {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.lowReservoirDetected === true))) {
      preViolations.push("[ReservoirLowChannel.clearLowReservoirSignal] pre violated: self.lowReservoirDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirDetected === false))) {
        postViolations.push("[ReservoirLowChannel.clearLowReservoirSignal] post violated: self.lowReservoirDetected = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for ReservoirLowChannel.clearLowReservoirSignal (async). User supplies this. */
export type ReservoirLowChannelClearLowReservoirSignalAsyncImpl = (self: ReservoirLowChannel) => Promise<{ self: ReservoirLowChannel; modified: { lowReservoirDetected: unknown } }>;

/** Contract-checking wrapper for ReservoirLowChannel.clearLowReservoirSignal (async). */
export function wrapReservoirLowChannelClearLowReservoirSignalAsync(impl: ReservoirLowChannelClearLowReservoirSignalAsyncImpl): (self: ReservoirLowChannel) => Promise<ReservoirLowChannel> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.lowReservoirDetected === true))) {
      preViolations.push("[ReservoirLowChannel.clearLowReservoirSignal] pre violated: self.lowReservoirDetected = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirDetected === false))) {
        postViolations.push("[ReservoirLowChannel.clearLowReservoirSignal] post violated: self.lowReservoirDetected = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.deliverInsulin. User supplies this. */
export type InsulinPumpControlSystemDeliverInsulinImpl = (self: InsulinPumpControlSystem, sugar: number, rate: number) => { self: InsulinPumpControlSystem; modified: { reservoirUnits: unknown; currentBloodSugar: unknown; bloodSugarRate: unknown } };

/** Contract-checking wrapper for InsulinPumpControlSystem.deliverInsulin. */
export function wrapInsulinPumpControlSystemDeliverInsulin(impl: InsulinPumpControlSystemDeliverInsulinImpl): (self: InsulinPumpControlSystem, sugar: number, rate: number) => InsulinPumpControlSystem {
  return (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((sugar >= 0))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: rate >= 0.0");
    }
    if (!((sugar > self.safeZoneUpperBound))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: sugar > self.safeZoneUpperBound");
    }
    if (!((self.reservoirUnits > 0))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: self.reservoirUnits > 0.0");
    }
    if (!((rate > 0))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: rate > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar, rate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDoseUnits — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result > 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.reservoirUnits = self.reservoirUnits@pre - result — unbound variable 'result'
      if (!((__result.self.currentBloodSugar === sugar))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.currentBloodSugar = sugar");
      }
      if (!((__result.self.bloodSugarRate === rate))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.bloodSugarRate = rate");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.isOperating = true");
      }
      if (!((__result.self.sensorOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.sensorOk = true");
      }
      if (!((__result.self.pumpOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.pumpOk = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.deliverInsulin (async). User supplies this. */
export type InsulinPumpControlSystemDeliverInsulinAsyncImpl = (self: InsulinPumpControlSystem, sugar: number, rate: number) => Promise<{ self: InsulinPumpControlSystem; modified: { reservoirUnits: unknown; currentBloodSugar: unknown; bloodSugarRate: unknown } }>;

/** Contract-checking wrapper for InsulinPumpControlSystem.deliverInsulin (async). */
export function wrapInsulinPumpControlSystemDeliverInsulinAsync(impl: InsulinPumpControlSystemDeliverInsulinAsyncImpl): (self: InsulinPumpControlSystem, sugar: number, rate: number) => Promise<InsulinPumpControlSystem> {
  return async (self, sugar, rate) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: self.isOperating = true");
    }
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: not self.faultDetected");
    }
    if (!((sugar >= 0))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: sugar >= 0.0");
    }
    if (!((rate >= 0))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: rate >= 0.0");
    }
    if (!((sugar > self.safeZoneUpperBound))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: sugar > self.safeZoneUpperBound");
    }
    if (!((self.reservoirUnits > 0))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: self.reservoirUnits > 0.0");
    }
    if (!((rate > 0))) {
      preViolations.push("[InsulinPumpControlSystem.deliverInsulin] pre violated: rate > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __pre = {
      "self.reservoirUnits": self.reservoirUnits,
    };
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar, rate);
      const postViolations: string[] = [];
      // SKIPPED post-clause (not translatable): result <= self.safeMaxDoseUnits — unbound variable 'result'
      // SKIPPED post-clause (not translatable): result > 0.0 — unbound variable 'result'
      // SKIPPED post-clause (not translatable): self.reservoirUnits = self.reservoirUnits@pre - result — unbound variable 'result'
      if (!((__result.self.currentBloodSugar === sugar))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.currentBloodSugar = sugar");
      }
      if (!((__result.self.bloodSugarRate === rate))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.bloodSugarRate = rate");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.isOperating = true");
      }
      if (!((__result.self.sensorOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.sensorOk = true");
      }
      if (!((__result.self.pumpOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.deliverInsulin] post violated: self.pumpOk = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.detectFault. User supplies this. */
export type InsulinPumpControlSystemDetectFaultImpl = (self: InsulinPumpControlSystem, faultReason: string) => { self: InsulinPumpControlSystem; modified: { faultDetected: unknown; isOperating: unknown; deliveryStopped: unknown; alarmActive: unknown; malfunctionAlarmActive: unknown; sensorOk: unknown; pumpOk: unknown; needleOk: unknown } };

/** Contract-checking wrapper for InsulinPumpControlSystem.detectFault. */
export function wrapInsulinPumpControlSystemDetectFault(impl: InsulinPumpControlSystemDetectFaultImpl): (self: InsulinPumpControlSystem, faultReason: string) => InsulinPumpControlSystem {
  return (self, faultReason) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpControlSystem.detectFault] pre violated: not self.faultDetected");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpControlSystem.detectFault] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, faultReason);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.isOperating = false");
      }
      if (!((__result.self.deliveryStopped === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.deliveryStopped = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.malfunctionAlarmActive = true");
      }
      if (!((__result.self.sensorOk === false))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.sensorOk = false");
      }
      if (!((__result.self.pumpOk === false))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.pumpOk = false");
      }
      if (!((__result.self.needleOk === false))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.needleOk = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.detectFault (async). User supplies this. */
export type InsulinPumpControlSystemDetectFaultAsyncImpl = (self: InsulinPumpControlSystem, faultReason: string) => Promise<{ self: InsulinPumpControlSystem; modified: { faultDetected: unknown; isOperating: unknown; deliveryStopped: unknown; alarmActive: unknown; malfunctionAlarmActive: unknown; sensorOk: unknown; pumpOk: unknown; needleOk: unknown } }>;

/** Contract-checking wrapper for InsulinPumpControlSystem.detectFault (async). */
export function wrapInsulinPumpControlSystemDetectFaultAsync(impl: InsulinPumpControlSystemDetectFaultAsyncImpl): (self: InsulinPumpControlSystem, faultReason: string) => Promise<InsulinPumpControlSystem> {
  return async (self, faultReason) => {
    const preViolations: string[] = [];
    if (!(!(self.faultDetected))) {
      preViolations.push("[InsulinPumpControlSystem.detectFault] pre violated: not self.faultDetected");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpControlSystem.detectFault] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, faultReason);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.isOperating = false");
      }
      if (!((__result.self.deliveryStopped === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.deliveryStopped = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.malfunctionAlarmActive = true");
      }
      if (!((__result.self.sensorOk === false))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.sensorOk = false");
      }
      if (!((__result.self.pumpOk === false))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.pumpOk = false");
      }
      if (!((__result.self.needleOk === false))) {
        postViolations.push("[InsulinPumpControlSystem.detectFault] post violated: self.needleOk = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.soundAlarm. User supplies this. */
export type InsulinPumpControlSystemSoundAlarmImpl = (self: InsulinPumpControlSystem, alarmType: string) => { self: InsulinPumpControlSystem; modified: { alarmActive: unknown; malfunctionAlarmActive: unknown; lowReservoirAlarmActive: unknown } };

/** Contract-checking wrapper for InsulinPumpControlSystem.soundAlarm. */
export function wrapInsulinPumpControlSystemSoundAlarm(impl: InsulinPumpControlSystemSoundAlarmImpl): (self: InsulinPumpControlSystem, alarmType: string) => InsulinPumpControlSystem {
  return (self, alarmType) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected || (self.reservoirUnits < 20)))) {
      preViolations.push("[InsulinPumpControlSystem.soundAlarm] pre violated: self.faultDetected or self.reservoirUnits < 20.0");
    }
    if (!(((alarmType === "HARDWARE_FAULT") || (alarmType === "LOW_RESERVOIR")))) {
      preViolations.push("[InsulinPumpControlSystem.soundAlarm] pre violated: alarmType = 'HARDWARE_FAULT' or alarmType = 'LOW_RESERVOIR'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, alarmType);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.soundAlarm] post violated: self.alarmActive = true");
      }
      if (!((((alarmType === "HARDWARE_FAULT")) ? ((__result.self.malfunctionAlarmActive === true)) : ((__result.self.lowReservoirAlarmActive === true))))) {
        postViolations.push("[InsulinPumpControlSystem.soundAlarm] post violated: if alarmType = 'HARDWARE_FAULT' then\n            self.malfunctionAlarmActive = true\n          else\n            self.lowReservoirAlarmActive = true\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.soundAlarm (async). User supplies this. */
export type InsulinPumpControlSystemSoundAlarmAsyncImpl = (self: InsulinPumpControlSystem, alarmType: string) => Promise<{ self: InsulinPumpControlSystem; modified: { alarmActive: unknown; malfunctionAlarmActive: unknown; lowReservoirAlarmActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpControlSystem.soundAlarm (async). */
export function wrapInsulinPumpControlSystemSoundAlarmAsync(impl: InsulinPumpControlSystemSoundAlarmAsyncImpl): (self: InsulinPumpControlSystem, alarmType: string) => Promise<InsulinPumpControlSystem> {
  return async (self, alarmType) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected || (self.reservoirUnits < 20)))) {
      preViolations.push("[InsulinPumpControlSystem.soundAlarm] pre violated: self.faultDetected or self.reservoirUnits < 20.0");
    }
    if (!(((alarmType === "HARDWARE_FAULT") || (alarmType === "LOW_RESERVOIR")))) {
      preViolations.push("[InsulinPumpControlSystem.soundAlarm] pre violated: alarmType = 'HARDWARE_FAULT' or alarmType = 'LOW_RESERVOIR'");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, alarmType);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.soundAlarm] post violated: self.alarmActive = true");
      }
      if (!((((alarmType === "HARDWARE_FAULT")) ? ((__result.self.malfunctionAlarmActive === true)) : ((__result.self.lowReservoirAlarmActive === true))))) {
        postViolations.push("[InsulinPumpControlSystem.soundAlarm] post violated: if alarmType = 'HARDWARE_FAULT' then\n            self.malfunctionAlarmActive = true\n          else\n            self.lowReservoirAlarmActive = true\n          endif");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.detectLowReservoir. User supplies this. */
export type InsulinPumpControlSystemDetectLowReservoirImpl = (self: InsulinPumpControlSystem, threshold: number) => { self: InsulinPumpControlSystem; modified: { lowReservoirAlarmActive: unknown; alarmActive: unknown } };

/** Contract-checking wrapper for InsulinPumpControlSystem.detectLowReservoir. */
export function wrapInsulinPumpControlSystemDetectLowReservoir(impl: InsulinPumpControlSystemDetectLowReservoirImpl): (self: InsulinPumpControlSystem, threshold: number) => InsulinPumpControlSystem {
  return (self, threshold) => {
    const preViolations: string[] = [];
    if (!((self.reservoirUnits < threshold))) {
      preViolations.push("[InsulinPumpControlSystem.detectLowReservoir] pre violated: self.reservoirUnits < threshold");
    }
    if (!((self.reservoirUnits >= 0))) {
      preViolations.push("[InsulinPumpControlSystem.detectLowReservoir] pre violated: self.reservoirUnits >= 0.0");
    }
    if (!((threshold > 0))) {
      preViolations.push("[InsulinPumpControlSystem.detectLowReservoir] pre violated: threshold > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, threshold);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirAlarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectLowReservoir] post violated: self.lowReservoirAlarmActive = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectLowReservoir] post violated: self.alarmActive = true");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectLowReservoir] post violated: self.isOperating = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.detectLowReservoir (async). User supplies this. */
export type InsulinPumpControlSystemDetectLowReservoirAsyncImpl = (self: InsulinPumpControlSystem, threshold: number) => Promise<{ self: InsulinPumpControlSystem; modified: { lowReservoirAlarmActive: unknown; alarmActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpControlSystem.detectLowReservoir (async). */
export function wrapInsulinPumpControlSystemDetectLowReservoirAsync(impl: InsulinPumpControlSystemDetectLowReservoirAsyncImpl): (self: InsulinPumpControlSystem, threshold: number) => Promise<InsulinPumpControlSystem> {
  return async (self, threshold) => {
    const preViolations: string[] = [];
    if (!((self.reservoirUnits < threshold))) {
      preViolations.push("[InsulinPumpControlSystem.detectLowReservoir] pre violated: self.reservoirUnits < threshold");
    }
    if (!((self.reservoirUnits >= 0))) {
      preViolations.push("[InsulinPumpControlSystem.detectLowReservoir] pre violated: self.reservoirUnits >= 0.0");
    }
    if (!((threshold > 0))) {
      preViolations.push("[InsulinPumpControlSystem.detectLowReservoir] pre violated: threshold > 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, threshold);
      const postViolations: string[] = [];
      if (!((__result.self.lowReservoirAlarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectLowReservoir] post violated: self.lowReservoirAlarmActive = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectLowReservoir] post violated: self.alarmActive = true");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpControlSystem.detectLowReservoir] post violated: self.isOperating = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.clearAlarms. User supplies this. */
export type InsulinPumpControlSystemClearAlarmsImpl = (self: InsulinPumpControlSystem) => { self: InsulinPumpControlSystem; modified: { alarmActive: unknown; lowReservoirAlarmActive: unknown; malfunctionAlarmActive: unknown } };

/** Contract-checking wrapper for InsulinPumpControlSystem.clearAlarms. */
export function wrapInsulinPumpControlSystemClearAlarms(impl: InsulinPumpControlSystemClearAlarmsImpl): (self: InsulinPumpControlSystem) => InsulinPumpControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[InsulinPumpControlSystem.clearAlarms] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpControlSystem.clearAlarms] post violated: self.alarmActive = false");
      }
      if (!((__result.self.lowReservoirAlarmActive === false))) {
        postViolations.push("[InsulinPumpControlSystem.clearAlarms] post violated: self.lowReservoirAlarmActive = false");
      }
      if (!((__result.self.malfunctionAlarmActive === false))) {
        postViolations.push("[InsulinPumpControlSystem.clearAlarms] post violated: self.malfunctionAlarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.clearAlarms (async). User supplies this. */
export type InsulinPumpControlSystemClearAlarmsAsyncImpl = (self: InsulinPumpControlSystem) => Promise<{ self: InsulinPumpControlSystem; modified: { alarmActive: unknown; lowReservoirAlarmActive: unknown; malfunctionAlarmActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpControlSystem.clearAlarms (async). */
export function wrapInsulinPumpControlSystemClearAlarmsAsync(impl: InsulinPumpControlSystemClearAlarmsAsyncImpl): (self: InsulinPumpControlSystem) => Promise<InsulinPumpControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.alarmActive === true))) {
      preViolations.push("[InsulinPumpControlSystem.clearAlarms] pre violated: self.alarmActive = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === false))) {
        postViolations.push("[InsulinPumpControlSystem.clearAlarms] post violated: self.alarmActive = false");
      }
      if (!((__result.self.lowReservoirAlarmActive === false))) {
        postViolations.push("[InsulinPumpControlSystem.clearAlarms] post violated: self.lowReservoirAlarmActive = false");
      }
      if (!((__result.self.malfunctionAlarmActive === false))) {
        postViolations.push("[InsulinPumpControlSystem.clearAlarms] post violated: self.malfunctionAlarmActive = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.resumeOperation. User supplies this. */
export type InsulinPumpControlSystemResumeOperationImpl = (self: InsulinPumpControlSystem) => { self: InsulinPumpControlSystem; modified: { faultDetected: unknown; isOperating: unknown; deliveryStopped: unknown; sensorOk: unknown; pumpOk: unknown; needleOk: unknown } };

/** Contract-checking wrapper for InsulinPumpControlSystem.resumeOperation. */
export function wrapInsulinPumpControlSystemResumeOperation(impl: InsulinPumpControlSystemResumeOperationImpl): (self: InsulinPumpControlSystem) => InsulinPumpControlSystem {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpControlSystem.resumeOperation] pre violated: self.faultDetected = true");
    }
    if (!((self.isOperating === false))) {
      preViolations.push("[InsulinPumpControlSystem.resumeOperation] pre violated: self.isOperating = false");
    }
    if (!((self.deliveryStopped === true))) {
      preViolations.push("[InsulinPumpControlSystem.resumeOperation] pre violated: self.deliveryStopped = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.faultDetected = false");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.isOperating = true");
      }
      if (!((__result.self.deliveryStopped === false))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.deliveryStopped = false");
      }
      if (!((__result.self.sensorOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.sensorOk = true");
      }
      if (!((__result.self.pumpOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.pumpOk = true");
      }
      if (!((__result.self.needleOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.needleOk = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.resumeOperation (async). User supplies this. */
export type InsulinPumpControlSystemResumeOperationAsyncImpl = (self: InsulinPumpControlSystem) => Promise<{ self: InsulinPumpControlSystem; modified: { faultDetected: unknown; isOperating: unknown; deliveryStopped: unknown; sensorOk: unknown; pumpOk: unknown; needleOk: unknown } }>;

/** Contract-checking wrapper for InsulinPumpControlSystem.resumeOperation (async). */
export function wrapInsulinPumpControlSystemResumeOperationAsync(impl: InsulinPumpControlSystemResumeOperationAsyncImpl): (self: InsulinPumpControlSystem) => Promise<InsulinPumpControlSystem> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpControlSystem.resumeOperation] pre violated: self.faultDetected = true");
    }
    if (!((self.isOperating === false))) {
      preViolations.push("[InsulinPumpControlSystem.resumeOperation] pre violated: self.isOperating = false");
    }
    if (!((self.deliveryStopped === true))) {
      preViolations.push("[InsulinPumpControlSystem.resumeOperation] pre violated: self.deliveryStopped = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === false))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.faultDetected = false");
      }
      if (!((__result.self.isOperating === true))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.isOperating = true");
      }
      if (!((__result.self.deliveryStopped === false))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.deliveryStopped = false");
      }
      if (!((__result.self.sensorOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.sensorOk = true");
      }
      if (!((__result.self.pumpOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.pumpOk = true");
      }
      if (!((__result.self.needleOk === true))) {
        postViolations.push("[InsulinPumpControlSystem.resumeOperation] post violated: self.needleOk = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.setSafeMaxDose. User supplies this. */
export type InsulinPumpControlSystemSetSafeMaxDoseImpl = (self: InsulinPumpControlSystem, newMax: number) => { self: InsulinPumpControlSystem; modified: { safeMaxDoseUnits: unknown } };

/** Contract-checking wrapper for InsulinPumpControlSystem.setSafeMaxDose. */
export function wrapInsulinPumpControlSystemSetSafeMaxDose(impl: InsulinPumpControlSystemSetSafeMaxDoseImpl): (self: InsulinPumpControlSystem, newMax: number) => InsulinPumpControlSystem {
  return (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[InsulinPumpControlSystem.setSafeMaxDose] pre violated: newMax > 0.0");
    }
    if (!((self.safeMaxDoseUnits !== newMax))) {
      preViolations.push("[InsulinPumpControlSystem.setSafeMaxDose] pre violated: self.safeMaxDoseUnits <> newMax");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseUnits === newMax))) {
        postViolations.push("[InsulinPumpControlSystem.setSafeMaxDose] post violated: self.safeMaxDoseUnits = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.setSafeMaxDose (async). User supplies this. */
export type InsulinPumpControlSystemSetSafeMaxDoseAsyncImpl = (self: InsulinPumpControlSystem, newMax: number) => Promise<{ self: InsulinPumpControlSystem; modified: { safeMaxDoseUnits: unknown } }>;

/** Contract-checking wrapper for InsulinPumpControlSystem.setSafeMaxDose (async). */
export function wrapInsulinPumpControlSystemSetSafeMaxDoseAsync(impl: InsulinPumpControlSystemSetSafeMaxDoseAsyncImpl): (self: InsulinPumpControlSystem, newMax: number) => Promise<InsulinPumpControlSystem> {
  return async (self, newMax) => {
    const preViolations: string[] = [];
    if (!((newMax > 0))) {
      preViolations.push("[InsulinPumpControlSystem.setSafeMaxDose] pre violated: newMax > 0.0");
    }
    if (!((self.safeMaxDoseUnits !== newMax))) {
      preViolations.push("[InsulinPumpControlSystem.setSafeMaxDose] pre violated: self.safeMaxDoseUnits <> newMax");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, newMax);
      const postViolations: string[] = [];
      if (!((__result.self.safeMaxDoseUnits === newMax))) {
        postViolations.push("[InsulinPumpControlSystem.setSafeMaxDose] post violated: self.safeMaxDoseUnits = newMax");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.checkBloodSugar. User supplies this. */
export type InsulinPumpControlSystemCheckBloodSugarImpl = (self: InsulinPumpControlSystem, sugar: number) => { self: InsulinPumpControlSystem; modified: {} };

/** Contract-checking wrapper for InsulinPumpControlSystem.checkBloodSugar. */
export function wrapInsulinPumpControlSystemCheckBloodSugar(impl: InsulinPumpControlSystemCheckBloodSugarImpl): (self: InsulinPumpControlSystem, sugar: number) => InsulinPumpControlSystem {
  return (self, sugar) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[InsulinPumpControlSystem.checkBloodSugar] pre violated: sugar >= 0.0");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpControlSystem.checkBloodSugar] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar);
      const postViolations: string[] = [];
      if (!((__result.self.currentBloodSugar === sugar))) {
        postViolations.push("[InsulinPumpControlSystem.checkBloodSugar] post violated: self.currentBloodSugar = sugar");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpControlSystem.checkBloodSugar (async). User supplies this. */
export type InsulinPumpControlSystemCheckBloodSugarAsyncImpl = (self: InsulinPumpControlSystem, sugar: number) => Promise<{ self: InsulinPumpControlSystem; modified: {} }>;

/** Contract-checking wrapper for InsulinPumpControlSystem.checkBloodSugar (async). */
export function wrapInsulinPumpControlSystemCheckBloodSugarAsync(impl: InsulinPumpControlSystemCheckBloodSugarAsyncImpl): (self: InsulinPumpControlSystem, sugar: number) => Promise<InsulinPumpControlSystem> {
  return async (self, sugar) => {
    const preViolations: string[] = [];
    if (!((sugar >= 0))) {
      preViolations.push("[InsulinPumpControlSystem.checkBloodSugar] pre violated: sugar >= 0.0");
    }
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpControlSystem.checkBloodSugar] pre violated: self.isOperating = true");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar);
      const postViolations: string[] = [];
      if (!((__result.self.currentBloodSugar === sugar))) {
        postViolations.push("[InsulinPumpControlSystem.checkBloodSugar] post violated: self.currentBloodSugar = sugar");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectOverdose. User supplies this. */
export type InsulinPumpSystemFormalizedRejectOverdoseImpl = (self: InsulinPumpSystemFormalized, requestedDose: number) => { self: InsulinPumpSystemFormalized; modified: {} };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectOverdose. */
export function wrapInsulinPumpSystemFormalizedRejectOverdose(impl: InsulinPumpSystemFormalizedRejectOverdoseImpl): (self: InsulinPumpSystemFormalized, requestedDose: number) => InsulinPumpSystemFormalized {
  return (self, requestedDose) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] pre violated: self.isOperating = true");
    }
    if (!((requestedDose > self.safeMaxDoseUnits))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] pre violated: requestedDose > self.safeMaxDoseUnits");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, requestedDose);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectOverdose (async). User supplies this. */
export type InsulinPumpSystemFormalizedRejectOverdoseAsyncImpl = (self: InsulinPumpSystemFormalized, requestedDose: number) => Promise<{ self: InsulinPumpSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectOverdose (async). */
export function wrapInsulinPumpSystemFormalizedRejectOverdoseAsync(impl: InsulinPumpSystemFormalizedRejectOverdoseAsyncImpl): (self: InsulinPumpSystemFormalized, requestedDose: number) => Promise<InsulinPumpSystemFormalized> {
  return async (self, requestedDose) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] pre violated: self.isOperating = true");
    }
    if (!((requestedDose > self.safeMaxDoseUnits))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] pre violated: requestedDose > self.safeMaxDoseUnits");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, requestedDose);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectOverdose] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectDeliveryInSafeZone. User supplies this. */
export type InsulinPumpSystemFormalizedRejectDeliveryInSafeZoneImpl = (self: InsulinPumpSystemFormalized, sugar: number) => { self: InsulinPumpSystemFormalized; modified: {} };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectDeliveryInSafeZone. */
export function wrapInsulinPumpSystemFormalizedRejectDeliveryInSafeZone(impl: InsulinPumpSystemFormalizedRejectDeliveryInSafeZoneImpl): (self: InsulinPumpSystemFormalized, sugar: number) => InsulinPumpSystemFormalized {
  return (self, sugar) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryInSafeZone] pre violated: self.isOperating = true");
    }
    if (!((sugar <= self.safeZoneUpperBound))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryInSafeZone] pre violated: sugar <= self.safeZoneUpperBound");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, sugar);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryInSafeZone] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryInSafeZone] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectDeliveryInSafeZone (async). User supplies this. */
export type InsulinPumpSystemFormalizedRejectDeliveryInSafeZoneAsyncImpl = (self: InsulinPumpSystemFormalized, sugar: number) => Promise<{ self: InsulinPumpSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectDeliveryInSafeZone (async). */
export function wrapInsulinPumpSystemFormalizedRejectDeliveryInSafeZoneAsync(impl: InsulinPumpSystemFormalizedRejectDeliveryInSafeZoneAsyncImpl): (self: InsulinPumpSystemFormalized, sugar: number) => Promise<InsulinPumpSystemFormalized> {
  return async (self, sugar) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryInSafeZone] pre violated: self.isOperating = true");
    }
    if (!((sugar <= self.safeZoneUpperBound))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryInSafeZone] pre violated: sugar <= self.safeZoneUpperBound");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, sugar);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryInSafeZone] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryInSafeZone] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectDeliveryOnFault. User supplies this. */
export type InsulinPumpSystemFormalizedRejectDeliveryOnFaultImpl = (self: InsulinPumpSystemFormalized) => { self: InsulinPumpSystemFormalized; modified: {} };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectDeliveryOnFault. */
export function wrapInsulinPumpSystemFormalizedRejectDeliveryOnFault(impl: InsulinPumpSystemFormalizedRejectDeliveryOnFaultImpl): (self: InsulinPumpSystemFormalized) => InsulinPumpSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryOnFault] pre violated: self.faultDetected = true");
    }
    if (!((self.isOperating === false))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryOnFault] pre violated: self.isOperating = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryOnFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryOnFault] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.rejectDeliveryOnFault (async). User supplies this. */
export type InsulinPumpSystemFormalizedRejectDeliveryOnFaultAsyncImpl = (self: InsulinPumpSystemFormalized) => Promise<{ self: InsulinPumpSystemFormalized; modified: {} }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.rejectDeliveryOnFault (async). */
export function wrapInsulinPumpSystemFormalizedRejectDeliveryOnFaultAsync(impl: InsulinPumpSystemFormalizedRejectDeliveryOnFaultAsyncImpl): (self: InsulinPumpSystemFormalized) => Promise<InsulinPumpSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.faultDetected === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryOnFault] pre violated: self.faultDetected = true");
    }
    if (!((self.isOperating === false))) {
      preViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryOnFault] pre violated: self.isOperating = false");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryOnFault] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.rejectDeliveryOnFault] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.enforceSelfTestInterval. User supplies this. */
export type InsulinPumpSystemFormalizedEnforceSelfTestIntervalImpl = (self: InsulinPumpSystemFormalized, lastTestTime: number, currentTime: number) => { self: InsulinPumpSystemFormalized; modified: { faultDetected: unknown; isOperating: unknown; deliveryStopped: unknown; alarmActive: unknown; malfunctionAlarmActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.enforceSelfTestInterval. */
export function wrapInsulinPumpSystemFormalizedEnforceSelfTestInterval(impl: InsulinPumpSystemFormalizedEnforceSelfTestIntervalImpl): (self: InsulinPumpSystemFormalized, lastTestTime: number, currentTime: number) => InsulinPumpSystemFormalized {
  return (self, lastTestTime, currentTime) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] pre violated: self.isOperating = true");
    }
    if (!(((currentTime - lastTestTime) > self.selfTestIntervalSeconds))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] pre violated: (currentTime - lastTestTime) > self.selfTestIntervalSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, lastTestTime, currentTime);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.isOperating = false");
      }
      if (!((__result.self.deliveryStopped === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.deliveryStopped = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.enforceSelfTestInterval (async). User supplies this. */
export type InsulinPumpSystemFormalizedEnforceSelfTestIntervalAsyncImpl = (self: InsulinPumpSystemFormalized, lastTestTime: number, currentTime: number) => Promise<{ self: InsulinPumpSystemFormalized; modified: { faultDetected: unknown; isOperating: unknown; deliveryStopped: unknown; alarmActive: unknown; malfunctionAlarmActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.enforceSelfTestInterval (async). */
export function wrapInsulinPumpSystemFormalizedEnforceSelfTestIntervalAsync(impl: InsulinPumpSystemFormalizedEnforceSelfTestIntervalAsyncImpl): (self: InsulinPumpSystemFormalized, lastTestTime: number, currentTime: number) => Promise<InsulinPumpSystemFormalized> {
  return async (self, lastTestTime, currentTime) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] pre violated: self.isOperating = true");
    }
    if (!(((currentTime - lastTestTime) > self.selfTestIntervalSeconds))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] pre violated: (currentTime - lastTestTime) > self.selfTestIntervalSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, lastTestTime, currentTime);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.isOperating = false");
      }
      if (!((__result.self.deliveryStopped === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.deliveryStopped = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSelfTestInterval] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.enforceDosingInterval. User supplies this. */
export type InsulinPumpSystemFormalizedEnforceDosingIntervalImpl = (self: InsulinPumpSystemFormalized, lastDoseTime: number, currentTime: number) => { self: InsulinPumpSystemFormalized; modified: { faultDetected: unknown; isOperating: unknown; deliveryStopped: unknown; alarmActive: unknown; malfunctionAlarmActive: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.enforceDosingInterval. */
export function wrapInsulinPumpSystemFormalizedEnforceDosingInterval(impl: InsulinPumpSystemFormalizedEnforceDosingIntervalImpl): (self: InsulinPumpSystemFormalized, lastDoseTime: number, currentTime: number) => InsulinPumpSystemFormalized {
  return (self, lastDoseTime, currentTime) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] pre violated: self.isOperating = true");
    }
    if (!(((currentTime - lastDoseTime) < self.dosingCheckIntervalSeconds))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] pre violated: (currentTime - lastDoseTime) < self.dosingCheckIntervalSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self, lastDoseTime, currentTime);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.isOperating = false");
      }
      if (!((__result.self.deliveryStopped === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.deliveryStopped = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.enforceDosingInterval (async). User supplies this. */
export type InsulinPumpSystemFormalizedEnforceDosingIntervalAsyncImpl = (self: InsulinPumpSystemFormalized, lastDoseTime: number, currentTime: number) => Promise<{ self: InsulinPumpSystemFormalized; modified: { faultDetected: unknown; isOperating: unknown; deliveryStopped: unknown; alarmActive: unknown; malfunctionAlarmActive: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.enforceDosingInterval (async). */
export function wrapInsulinPumpSystemFormalizedEnforceDosingIntervalAsync(impl: InsulinPumpSystemFormalizedEnforceDosingIntervalAsyncImpl): (self: InsulinPumpSystemFormalized, lastDoseTime: number, currentTime: number) => Promise<InsulinPumpSystemFormalized> {
  return async (self, lastDoseTime, currentTime) => {
    const preViolations: string[] = [];
    if (!((self.isOperating === true))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] pre violated: self.isOperating = true");
    }
    if (!(((currentTime - lastDoseTime) < self.dosingCheckIntervalSeconds))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] pre violated: (currentTime - lastDoseTime) < self.dosingCheckIntervalSeconds");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self, lastDoseTime, currentTime);
      const postViolations: string[] = [];
      if (!((__result.self.faultDetected === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.faultDetected = true");
      }
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.isOperating = false");
      }
      if (!((__result.self.deliveryStopped === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.deliveryStopped = true");
      }
      if (!((__result.self.alarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.alarmActive = true");
      }
      if (!((__result.self.malfunctionAlarmActive === true))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceDosingInterval] post violated: self.malfunctionAlarmActive = true");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.enforceSafeMaxConfigured. User supplies this. */
export type InsulinPumpSystemFormalizedEnforceSafeMaxConfiguredImpl = (self: InsulinPumpSystemFormalized) => { self: InsulinPumpSystemFormalized; modified: { isOperating: unknown } };

/** Contract-checking wrapper for InsulinPumpSystemFormalized.enforceSafeMaxConfigured. */
export function wrapInsulinPumpSystemFormalizedEnforceSafeMaxConfigured(impl: InsulinPumpSystemFormalizedEnforceSafeMaxConfiguredImpl): (self: InsulinPumpSystemFormalized) => InsulinPumpSystemFormalized {
  return (self) => {
    const preViolations: string[] = [];
    if (!((self.safeMaxDoseUnits <= 0))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceSafeMaxConfigured] pre violated: self.safeMaxDoseUnits <= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSafeMaxConfigured] post violated: self.isOperating = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
    } catch (err) {
      for (const key of Object.keys(self)) {
        delete (self as any)[key];
      }
      Object.assign(self, __rollback);
      throw err;
    }
  };
}

/** Impl signature for InsulinPumpSystemFormalized.enforceSafeMaxConfigured (async). User supplies this. */
export type InsulinPumpSystemFormalizedEnforceSafeMaxConfiguredAsyncImpl = (self: InsulinPumpSystemFormalized) => Promise<{ self: InsulinPumpSystemFormalized; modified: { isOperating: unknown } }>;

/** Contract-checking wrapper for InsulinPumpSystemFormalized.enforceSafeMaxConfigured (async). */
export function wrapInsulinPumpSystemFormalizedEnforceSafeMaxConfiguredAsync(impl: InsulinPumpSystemFormalizedEnforceSafeMaxConfiguredAsyncImpl): (self: InsulinPumpSystemFormalized) => Promise<InsulinPumpSystemFormalized> {
  return async (self) => {
    const preViolations: string[] = [];
    if (!((self.safeMaxDoseUnits <= 0))) {
      preViolations.push("[InsulinPumpSystemFormalized.enforceSafeMaxConfigured] pre violated: self.safeMaxDoseUnits <= 0.0");
    }
    if (preViolations.length > 0) {
      throw new Error(preViolations.join("; "));
    }
    const __rollback = __cloneSelf(self);
    try {
      const __result = await impl(self);
      const postViolations: string[] = [];
      if (!((__result.self.isOperating === false))) {
        postViolations.push("[InsulinPumpSystemFormalized.enforceSafeMaxConfigured] post violated: self.isOperating = false");
      }
      if (postViolations.length > 0) {
      throw new Error(postViolations.join("; "));
      }
      return __result.self;
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

/** Lifecycle registry for CorrectDoseCommitment commitments. */
export class CorrectDoseCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<CorrectDoseCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a CorrectDoseCommitment — the typed wrapper guarantees that since
    // `register` only accepts CorrectDoseCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: CorrectDoseCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: CorrectDoseCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: CorrectDoseCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: CorrectDoseCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<CorrectDoseCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<CorrectDoseCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for FailSafeCommitment commitments. */
export class FailSafeCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<FailSafeCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a FailSafeCommitment — the typed wrapper guarantees that since
    // `register` only accepts FailSafeCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: FailSafeCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: FailSafeCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: FailSafeCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: FailSafeCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<FailSafeCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<FailSafeCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

/** Lifecycle registry for AlertPatientCommitment commitments. */
export class AlertPatientCommitmentRegistry {
  private readonly inner: CommitmentRegistry;

  constructor(listener?: TransitionListener<AlertPatientCommitment>) {
    // The inner registry is generic; we cast the typed listener
    // to the unknown-shaped one. At call time the runtime value
    // IS a AlertPatientCommitment — the typed wrapper guarantees that since
    // `register` only accepts AlertPatientCommitment instances.
    this.inner = new CommitmentRegistry(listener as TransitionListener<unknown> | undefined);
  }

  register(commitment: AlertPatientCommitment): void {
    this.inner.register(commitment.commitmentId as string, commitment);
  }

  getState(id: AlertPatientCommitmentId): CommitmentState | null {
    return this.inner.getState(id as string);
  }

  fulfill(id: AlertPatientCommitmentId): void {
    this.inner.fulfill(id as string);
  }

  violate(id: AlertPatientCommitmentId): void {
    this.inner.violate(id as string);
  }

  pending(): readonly CommitmentLifecycle<AlertPatientCommitment>[] {
    return this.inner.pending() as readonly CommitmentLifecycle<AlertPatientCommitment>[];
  }

  size(): number {
    return this.inner.size();
  }
}

